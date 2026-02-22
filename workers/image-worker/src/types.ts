export interface Env {
  // R2 bucket bindings — default + per-project (suffix A/B/C)
  IMAGES_BUCKET: R2Bucket;
  IMAGES_BUCKET_A: R2Bucket;
  IMAGES_BUCKET_B: R2Bucket;
  IMAGES_BUCKET_C: R2Bucket;
  IMAGES_TEMP: R2Bucket;

  // Cloudflare Images binding for compression
  // TODO: Type this properly when @cloudflare/workers-types adds Images Binding API types
  IMAGES: any;

  // Secrets (set via `wrangler secret put`)
  // Default Supabase project — requests not matching any suffix use this
  SUPABASE_URL: string;
  SUPABASE_ANON_KEY: string;
  // Per-project Supabase URLs — used to route uploads to the matching bucket
  SUPABASE_URL_A: string;
  SUPABASE_URL_B: string;
  SUPABASE_URL_C: string;

  R2_ACCESS_KEY_ID: string;
  R2_SECRET_ACCESS_KEY: string;
  CF_ACCOUNT_ID: string;
}
