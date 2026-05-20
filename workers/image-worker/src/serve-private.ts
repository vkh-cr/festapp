import type { Env } from './types';
import { extractBearerToken, checkIsEditorOnAnyOccasion, resolveSupabaseAuth } from './auth';
import { resolveBucket } from './bucket';

/**
 * Serve private files from R2 with JWT authentication and editor permission check.
 *
 * Replicates the `get_is_editor_on_any_occasion()` RLS policy (Pitfall 7):
 * editor on ANY occasion can access private files.
 *
 * Private files are served with no-cache headers to prevent CDN caching.
 */
export async function handlePrivate(
  request: Request,
  env: Env
): Promise<Response> {
  // Authenticate
  const authHeader = request.headers.get('Authorization');
  if (!authHeader) {
    return new Response('Missing authorization header', { status: 401 });
  }

  let userJwt: string;
  try {
    userJwt = extractBearerToken(authHeader);
  } catch {
    return new Response('Invalid token', { status: 401 });
  }

  // Check editor-on-any-occasion permission via RPC
  const auth = resolveSupabaseAuth(null, null, env);
  const isEditor = await checkIsEditorOnAnyOccasion(userJwt, auth);
  if (!isEditor) {
    return new Response('Forbidden', { status: 403 });
  }

  // Extract key from path — keep the private/ prefix (matches R2 key from upload)
  const url = new URL(request.url);
  const key = url.pathname.slice(1); // Remove leading /

  if (!key) {
    return new Response('Not found', { status: 404 });
  }

  // Get object from R2 — route to the correct bucket by hostname
  const bucket = resolveBucket(env, { hostname: url.hostname });
  const object = await bucket.get(key);
  if (!object) {
    return new Response('Not found', { status: 404 });
  }

  // Build response with private cache headers
  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set('Cache-Control', 'private, no-cache');

  return new Response(object.body, { headers });
}
