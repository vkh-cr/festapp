import type { Env } from './types';
import { resolveBucket } from './bucket';

/**
 * Serve public files from R2 with cache headers, conditional requests,
 * and optional on-the-fly image transforms via query parameters.
 *
 * Query params (all optional — omit for original):
 *   w  — target width in px (scale-down, preserve aspect ratio)
 *   f  — output format: 'auto' (negotiate from Accept), 'webp', 'jpeg', 'png'
 *   q  — quality 1-100
 *
 * When transform params are present and the Images binding is available,
 * the image is resized/re-encoded on the fly. The transformed variant
 * gets its own cache key (params are part of the URL).
 */

export async function handlePublicServe(
  request: Request,
  env: Env
): Promise<Response> {
  const url = new URL(request.url);
  const key = url.pathname.slice(1); // Remove leading /

  if (!key) {
    return new Response('Not found', { status: 404 });
  }

  const bucket = resolveBucket(env, { hostname: url.hostname });

  // HEAD request — metadata only
  if (request.method === 'HEAD') {
    const head = await bucket.head(key);
    if (!head) {
      return new Response(null, { status: 404 });
    }
    const headers = new Headers();
    head.writeHttpMetadata(headers);
    headers.set('etag', head.httpEtag);
    headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    return new Response(null, { status: 200, headers });
  }

  // GET request
  const object = await bucket.get(key);
  if (!object) {
    return new Response('Not found', { status: 404 });
  }

  // Conditional request — return 304 if etag matches
  const ifNoneMatch = request.headers.get('If-None-Match');
  if (ifNoneMatch && ifNoneMatch === object.httpEtag) {
    const headers = new Headers();
    object.writeHttpMetadata(headers);
    headers.set('etag', object.httpEtag);
    headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    return new Response(null, { status: 304, headers });
  }

  // Parse optional transform query params
  const wParam = url.searchParams.get('w');
  const fParam = url.searchParams.get('f');
  const qParam = url.searchParams.get('q');
  const wantTransform = !!(wParam || fParam || qParam);

  if (wantTransform && env.IMAGES) {
    try {
      const width = wParam ? parseInt(wParam, 10) : undefined;
      const quality = qParam ? parseInt(qParam, 10) : undefined;

      // Resolve output format
      let outputFormat: string;
      if (fParam === 'auto') {
        const accept = request.headers.get('Accept') || '';
        if (accept.includes('image/avif')) {
          outputFormat = 'image/avif';
        } else if (accept.includes('image/webp')) {
          outputFormat = 'image/webp';
        } else {
          outputFormat = object.httpMetadata?.contentType || 'image/jpeg';
        }
      } else if (fParam === 'webp') {
        outputFormat = 'image/webp';
      } else if (fParam === 'png') {
        outputFormat = 'image/png';
      } else if (fParam === 'jpeg' || fParam === 'jpg') {
        outputFormat = 'image/jpeg';
      } else {
        outputFormat = object.httpMetadata?.contentType || 'image/jpeg';
      }

      // Build transform options
      const transformOpts: Record<string, unknown> = { fit: 'scale-down' };
      if (width) {
        transformOpts.width = width;
      }

      const outputOpts: Record<string, unknown> = { format: outputFormat };
      if (quality && !outputFormat.includes('png')) {
        outputOpts.quality = quality;
      }

      // Images binding .input() expects a ReadableStream
      const transformed = await env.IMAGES
        .input(object.body)
        .transform(transformOpts)
        .output(outputOpts);
      const resp = transformed.response();

      const headers = new Headers();
      headers.set('Content-Type', outputFormat);
      headers.set('Cache-Control', 'public, max-age=31536000, immutable');
      headers.set('Vary', 'Accept');

      return new Response(resp.body, { headers });
    } catch (err) {
      // Transform failed — re-fetch original from R2 (stream was consumed)
      console.error('On-the-fly transform failed, serving original:', err);
      const fallback = await bucket.get(key);
      if (fallback) {
        const headers = new Headers();
        fallback.writeHttpMetadata(headers);
        headers.set('etag', fallback.httpEtag);
        headers.set('Cache-Control', 'public, max-age=31536000, immutable');
        return new Response(fallback.body, { headers });
      }
      return new Response('Not found', { status: 404 });
    }
  }

  // Serve original (no transform requested)
  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set('etag', object.httpEtag);
  headers.set('Cache-Control', 'public, max-age=31536000, immutable');

  return new Response(object.body, { headers });
}
