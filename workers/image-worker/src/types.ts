export interface Env {
  // R2 bucket bindings
  IMAGES_BUCKET: R2Bucket;
  IMAGES_TEMP: R2Bucket;

  // Cloudflare Images binding for compression
  // TODO: Type this properly when @cloudflare/workers-types adds Images Binding API types
  IMAGES: any;

  // Secrets (set via `wrangler secret put`)
  SUPABASE_URL: string;
  SUPABASE_ANON_KEY: string;
  R2_ACCESS_KEY_ID: string;
  R2_SECRET_ACCESS_KEY: string;
  CF_ACCOUNT_ID: string;
}
