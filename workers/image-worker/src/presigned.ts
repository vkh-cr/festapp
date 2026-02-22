import { AwsClient } from 'aws4fetch';
import type { Env } from './types';
import { extractBearerToken, checkIsEditorOnAnyOccasion, resolveSupabaseAuth } from './auth';

const DEFAULT_EXPIRES_IN = 3600; // 1 hour
const MAX_EXPIRES_IN = 604800; // 7 days

/**
 * Generate presigned S3-compatible URLs for private R2 files.
 *
 * Uses aws4fetch AwsClient with signQuery: true (Pitfall 4) to produce
 * time-limited signed URLs that can be shared for direct file access.
 */
export async function handlePresign(
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

  // Extract key from path: /presign/{key}
  const url = new URL(request.url);
  const key = url.pathname.replace('/presign/', '');

  // Resolve Supabase connection — prefer query params, fall back to env secrets
  const auth = resolveSupabaseAuth(
    url.searchParams.get('supabaseUrl'),
    url.searchParams.get('anonKey'),
    env
  );

  // Check editor-on-any-occasion permission via RPC
  const isEditor = await checkIsEditorOnAnyOccasion(userJwt, auth);
  if (!isEditor) {
    return new Response('Forbidden', { status: 403 });
  }

  if (!key) {
    return new Response('Missing key', { status: 400 });
  }

  // Parse optional expiresIn query param
  const expiresInRaw = url.searchParams.get('expiresIn');
  let expiresIn = DEFAULT_EXPIRES_IN;
  if (expiresInRaw) {
    const parsed = parseInt(expiresInRaw, 10);
    if (!isNaN(parsed) && parsed > 0 && parsed <= MAX_EXPIRES_IN) {
      expiresIn = parsed;
    }
  }

  // Create AWS client for R2 S3-compatible API
  const client = new AwsClient({
    accessKeyId: env.R2_ACCESS_KEY_ID,
    secretAccessKey: env.R2_SECRET_ACCESS_KEY,
  });

  // Construct R2 S3-compatible URL
  const r2Url = new URL(
    `https://${env.CF_ACCOUNT_ID}.r2.cloudflarestorage.com/festapp-images/${key}`
  );
  r2Url.searchParams.set('X-Amz-Expires', String(expiresIn));

  // Sign with signQuery to avoid Content-Type mismatch (Pitfall 4)
  const signed = await client.sign(r2Url.toString(), {
    method: 'GET',
    aws: { signQuery: true },
  });

  return new Response(
    JSON.stringify({ url: signed.url, expiresIn }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }
  );
}
