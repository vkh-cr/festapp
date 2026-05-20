import type { Env } from './types';
import { extractBearerToken, checkEditorPermission, checkUnitEditorPermission, checkIsEditorOnAnyOccasion, resolveSupabaseAuth } from './auth';
import { resolveBucket } from './bucket';

/**
 * Handle authenticated R2 image deletion.
 *
 * Accepts POST with JSON body { key: string }.
 * Validates the key starts with "images/", extracts the occasion or unit ID
 * from the key path, checks editor permission, and deletes the R2 object.
 */
export async function handleDelete(
  request: Request,
  env: Env
): Promise<Response> {
  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

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

  // Parse JSON body
  let body: { key?: string; supabaseUrl?: string; anonKey?: string };
  try {
    body = (await request.json()) as { key?: string; supabaseUrl?: string; anonKey?: string };
  } catch {
    return new Response('Invalid JSON body', { status: 400 });
  }

  const { key } = body;
  if (!key || typeof key !== 'string') {
    return new Response('Missing key field', { status: 400 });
  }

  // Validate key prefix — only images/ and private/ are allowed
  if (!key.startsWith('images/') && !key.startsWith('private/')) {
    return new Response('Invalid key prefix', { status: 400 });
  }

  // Resolve Supabase connection — prefer request fields, fall back to env secrets
  const auth = resolveSupabaseAuth(
    body.supabaseUrl || null,
    body.anonKey || null,
    env
  );

  let isEditor = false;
  if (key.startsWith('private/')) {
    // Private files — editor on any occasion can manage
    isEditor = await checkIsEditorOnAnyOccasion(userJwt, auth);
  } else {
    // Extract occasion or unit ID from key path
    // Patterns: images/{occasionId}/... or images/unit-{unitId}/...
    const pathAfterImages = key.slice('images/'.length);
    const firstSegment = pathAfterImages.split('/')[0];

    if (firstSegment.startsWith('unit-')) {
      const unitId = parseInt(firstSegment.slice('unit-'.length), 10);
      if (isNaN(unitId)) {
        return new Response('Invalid unit ID in key path', { status: 400 });
      }
      isEditor = await checkUnitEditorPermission(userJwt, unitId, auth);
    } else {
      const occasionId = parseInt(firstSegment, 10);
      if (isNaN(occasionId)) {
        return new Response('Invalid occasion ID in key path', { status: 400 });
      }
      isEditor = await checkEditorPermission(userJwt, occasionId, auth);
    }
  }

  if (!isEditor) {
    return new Response('Forbidden', { status: 403 });
  }

  // Delete the R2 object — route by Supabase project URL
  const bucket = resolveBucket(env, { supabaseUrl: auth.supabaseUrl });
  await bucket.delete(key);

  return new Response(
    JSON.stringify({ deleted: true, key }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }
  );
}
