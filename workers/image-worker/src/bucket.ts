import type { Env } from './types';

export interface BucketRouting {
  supabaseUrl?: string;
  hostname?: string;
}

interface Project {
  supabaseUrl: string | undefined;
  bucket: R2Bucket;
  hostname: string;
}

/**
 * All projects served by this Worker.
 * This is the single source of truth for routing.
 *
 * To add a project:
 *  1. Add an entry here (supabaseUrl env, bucket binding, hostname)
 *  2. Add the R2 binding in wrangler.toml
 *  3. Set the SUPABASE_URL_X secret via `wrangler secret put`
 *  4. Add the custom domain in Cloudflare dashboard
 */
function projects(env: Env): Project[] {
  return [
    { supabaseUrl: env.SUPABASE_URL,   bucket: env.IMAGES_BUCKET,   hostname: 'img.festapp.net' },
    { supabaseUrl: env.SUPABASE_URL_A, bucket: env.IMAGES_BUCKET_A, hostname: 'a.img.festapp.net' },
    { supabaseUrl: env.SUPABASE_URL_B, bucket: env.IMAGES_BUCKET_B, hostname: 'b.img.festapp.net' },
    { supabaseUrl: env.SUPABASE_URL_C, bucket: env.IMAGES_BUCKET_C, hostname: 'c.img.festapp.net' },
  ];
}

function findProject(env: Env, opts?: BucketRouting): Project | undefined {
  const list = projects(env);
  // 1. supabaseUrl match takes priority (upload/delete flow)
  if (opts?.supabaseUrl) {
    for (const p of list) {
      if (p.supabaseUrl === opts.supabaseUrl) return p;
    }
  }
  // 2. hostname match (serve flow)
  if (opts?.hostname) {
    for (const p of list) {
      if (p.hostname === opts.hostname) return p;
    }
  }
  return undefined;
}

/**
 * Pick the R2 bucket based on the Supabase project URL or hostname.
 *
 * Upload/delete requests include supabaseUrl — matched against per-project secrets.
 * GET/serve requests use hostname — matched against the project origin.
 */
export function resolveBucket(env: Env, opts?: BucketRouting): R2Bucket {
  return findProject(env, opts)?.bucket ?? env.IMAGES_BUCKET;
}

/**
 * Resolve the public-facing origin for a given routing context.
 *
 * Upload/delete handlers must use this (instead of request.url origin)
 * so the returned URL matches the domain that serves the correct bucket.
 */
export function resolvePublicOrigin(env: Env, opts?: BucketRouting, requestOrigin?: string): string {
  const project = findProject(env, opts);
  return project ? `https://${project.hostname}` : (requestOrigin ?? 'https://img.festapp.net');
}
