export interface Env {
  PUBLIC_SYNC: R2Bucket;
}

const PATH = /^\/v1\/public-sync\/(\d+)\/(\d+)\/head$/;
const CACHE_CONTROL = 'public, max-age=0, must-revalidate, s-maxage=5';

function responseHeaders(etag: string): Headers {
  return new Headers({
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': CACHE_CONTROL,
    ETag: etag,
    Vary: 'Accept-Encoding',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS',
    'Access-Control-Allow-Headers': 'If-None-Match',
    'X-Content-Type-Options': 'nosniff',
  });
}

export async function handleRequest(request: Request, env: Env): Promise<Response> {
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: responseHeaders('"options"') });
  }
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return new Response('Method not allowed', { status: 405, headers: { Allow: 'GET, HEAD, OPTIONS' } });
  }

  const url = new URL(request.url);
  const match = PATH.exec(url.pathname);
  if (!match) return new Response('Not found', { status: 404 });
  const [, organizationId, occasionId] = match;
  const object = await env.PUBLIC_SYNC.get(
    `client-sync/v1/${organizationId}/${occasionId}/public-head.json`,
  );
  if (!object) {
    return Response.json(
      { protocol: 1, code: 'not_published' },
      { status: 404, headers: { 'Cache-Control': 'public, max-age=0, s-maxage=5' } },
    );
  }

  const etag = object.httpEtag;
  const headers = responseHeaders(etag);
  if (request.headers.get('If-None-Match') === etag) {
    return new Response(null, { status: 304, headers });
  }
  return new Response(request.method === 'HEAD' ? null : object.body, {
    status: 200,
    headers,
  });
}

export default {
  fetch: handleRequest,
} satisfies ExportedHandler<Env>;
