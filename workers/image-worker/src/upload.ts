import type { Env } from './types';
import { extractBearerToken, checkEditorPermission, checkUnitEditorPermission, resolveSupabaseAuth, type SupabaseAuth } from './auth';

/** Absolute maximum upload size (before any transform). */
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB

/** Default transform thresholds — used when the caller doesn't specify overrides. */
const DEFAULT_MAX_EDGE = 1200;          // longer-edge limit (px)
const DEFAULT_MAX_BYTES = 800 * 1024;   // 800 KB — skip transform if already under
const DEFAULT_JPEG_QUALITY = 70;        // ~200-400 KB at 1200 px

/**
 * Sanitize a filename: remove special chars, keep alphanumeric, hyphens, underscores, dots.
 */
function sanitizeFilename(name: string): string {
  const ext = name.lastIndexOf('.') >= 0 ? name.slice(name.lastIndexOf('.')) : '';
  const base = name.slice(0, name.length - ext.length);
  const sanitized = base.replace(/[^a-zA-Z0-9_-]/g, '_').slice(0, 100);
  return sanitized + ext.toLowerCase();
}

/**
 * Handle authenticated image upload with optional compression via Images Binding.
 *
 * Accepts multipart form data with:
 *   file         — The image file to upload (required)
 *   occasionId   — Occasion context for permission check
 *   unitId       — Unit context for permission check (alternative to occasionId)
 *   maxEdge      — Override longer-edge limit in px  (optional, default 1200)
 *   maxBytes     — Override byte threshold — skip transform if file is smaller (optional, default 800 KB)
 *   quality      — Override JPEG quality 1-100 (optional, default 70)
 */
export async function handleUpload(
  request: Request,
  env: Env
): Promise<Response> {
  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  // Check file size before reading body
  const contentLength = request.headers.get('Content-Length');
  if (contentLength && parseInt(contentLength, 10) > MAX_FILE_SIZE) {
    return new Response('File too large', { status: 413 });
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

  // Parse multipart form data
  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return new Response('Invalid form data', { status: 400 });
  }

  const file = formData.get('file') as File | null;
  const occasionIdRaw = formData.get('occasionId');
  const unitIdRaw = formData.get('unitId');

  if (!file) {
    return new Response('Missing file field', { status: 400 });
  }

  if (!occasionIdRaw && !unitIdRaw) {
    return new Response('Missing occasionId or unitId', { status: 400 });
  }

  const occasionId = occasionIdRaw ? parseInt(String(occasionIdRaw), 10) : null;
  const unitId = unitIdRaw ? parseInt(String(unitIdRaw), 10) : null;

  if (occasionIdRaw && (occasionId === null || isNaN(occasionId))) {
    return new Response('Invalid occasionId', { status: 400 });
  }

  if (unitIdRaw && (unitId === null || isNaN(unitId))) {
    return new Response('Invalid unitId', { status: 400 });
  }

  // Resolve Supabase connection — prefer request fields, fall back to env secrets
  const auth = resolveSupabaseAuth(
    formData.get('supabaseUrl') as string | null,
    formData.get('anonKey') as string | null,
    env
  );

  // Check editor permission via RPC using user's JWT
  let isEditor = false;
  if (occasionId !== null) {
    isEditor = await checkEditorPermission(userJwt, occasionId, auth);
  } else if (unitId !== null) {
    isEditor = await checkUnitEditorPermission(userJwt, unitId, auth);
  }
  if (!isEditor) {
    return new Response('Forbidden', { status: 403 });
  }

  // Validate file size from actual body
  const buffer = await file.arrayBuffer();
  if (buffer.byteLength > MAX_FILE_SIZE) {
    return new Response('File too large', { status: 413 });
  }

  // Read optional per-request transform overrides from form fields
  const maxEdgeRaw = formData.get('maxEdge');
  const maxBytesRaw = formData.get('maxBytes');
  const qualityRaw = formData.get('quality');

  const maxEdge = maxEdgeRaw ? parseInt(String(maxEdgeRaw), 10) : DEFAULT_MAX_EDGE;
  const maxBytes = maxBytesRaw ? parseInt(String(maxBytesRaw), 10) : DEFAULT_MAX_BYTES;
  const jpegQuality = qualityRaw ? parseInt(String(qualityRaw), 10) : DEFAULT_JPEG_QUALITY;

  // Generate storage key — timestamp + random suffix guarantees uniqueness
  const safeName = sanitizeFilename(file.name);
  const prefix = occasionId !== null
    ? `images/${occasionId}`
    : `images/unit-${unitId}`;
  const uid = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const key = `${prefix}/${uid}-${safeName}`;

  // Detect if PNG (has alpha channel — preserve format)
  const bytes = new Uint8Array(buffer);
  const isPng =
    bytes.length >= 8 &&
    bytes[0] === 0x89 &&
    bytes[1] === 0x50 &&
    bytes[2] === 0x4e &&
    bytes[3] === 0x47;

  // Only transform if the file exceeds the byte threshold.
  // Images already under the limit are stored as-is (no quality loss).
  let body: ArrayBuffer | ReadableStream | null;
  let contentType: string;

  const needsTransform = buffer.byteLength > maxBytes;

  if (needsTransform && env.IMAGES) {
    const outputFormat = isPng ? 'image/png' : 'image/jpeg';
    const outputOptions: Record<string, unknown> = { format: outputFormat };
    if (!isPng) {
      outputOptions.quality = jpegQuality;
    }
    try {
      const transformed = await env.IMAGES
        .input(buffer)
        .transform({ width: maxEdge, height: maxEdge, fit: 'scale-down' })
        .output(outputOptions);
      const resp = transformed.response();
      body = resp.body!;
      contentType = outputFormat;
    } catch (err) {
      body = buffer;
      contentType = file.type || 'application/octet-stream';
      console.error('Images transform failed, storing original:', err);
    }
  } else {
    // Already small enough or Images binding not available — store as-is
    body = buffer;
    contentType = file.type || 'application/octet-stream';
  }

  // Store to R2
  await env.IMAGES_BUCKET.put(key, body, {
    httpMetadata: { contentType },
  });

  // Use the request's origin so the returned URL works for both
  // img.festapp.net and the workers.dev fallback domain
  const origin = new URL(request.url).origin;
  const publicUrl = `${origin}/${key}`;

  // Add image record to the caller's Supabase database
  await addImageRecord(userJwt, auth, publicUrl, occasionId, unitId);

  return new Response(
    JSON.stringify({ url: publicUrl, key }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }
  );
}

/**
 * Call add_image_record RPC on the caller's Supabase to insert the DB record.
 * Uses the user's JWT so the RPC's SECURITY DEFINER permission check applies.
 */
async function addImageRecord(
  userJwt: string,
  auth: SupabaseAuth,
  link: string,
  occasionId: number | null,
  unitId: number | null
): Promise<void> {
  const response = await fetch(
    `${auth.supabaseUrl}/rest/v1/rpc/add_image_record`,
    {
      method: 'POST',
      headers: {
        'apikey': auth.anonKey,
        'Authorization': `Bearer ${userJwt}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        p_link: link,
        p_occasion_id: occasionId,
        p_unit_id: unitId,
      }),
    }
  );
  if (!response.ok) {
    const text = await response.text();
    console.warn('add_image_record failed:', response.status, text);
  }
}
