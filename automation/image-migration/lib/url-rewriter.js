/**
 * URL transformation logic for Supabase Storage to R2 migration.
 */

/** Supabase Storage public URL prefixes for this project (kjdpmixlnhntmxjedpxh) */
const SUPABASE_PREFIXES = [
  'https://kjdpmixlnhntmxjedpxh.supabase.co/storage/v1/object/public/public-files/',
  'https://kjdpmixlnhntmxjedpxh.supabase.co/storage/v1/object/public/custom-files/',
];

/** Legacy: primary prefix for migrate-files.js */
export const SUPABASE_STORAGE_PREFIX = SUPABASE_PREFIXES[0];

/** R2 public URL prefix */
export const R2_PREFIX = 'https://img.festapp.net/';

/** SQL LIKE pattern for finding Supabase URLs */
export const SUPABASE_PATTERN = '%supabase.co/storage%';

/** Pattern scoped to this project only */
export const THIS_PROJECT_PATTERN = '%kjdpmixlnhntmxjedpxh%supabase.co/storage%';

/**
 * Rewrite a single URL from Supabase Storage to R2.
 * Handles: public-files, custom-files, and signed editor-files URLs.
 *
 * @param {string} url - The URL to rewrite
 * @returns {{ newUrl: string, changed: boolean }}
 */
export function rewriteUrl(url) {
  if (!url || !url.includes('kjdpmixlnhntmxjedpxh.supabase.co/storage')) {
    return { newUrl: url, changed: false };
  }

  // Try each known prefix
  for (const prefix of SUPABASE_PREFIXES) {
    if (url.startsWith(prefix)) {
      return { newUrl: R2_PREFIX + url.substring(prefix.length), changed: true };
    }
  }

  // Handle signed URLs: /object/sign/editor-files/filename?token=...
  const signedMatch = url.match(
    /https:\/\/kjdpmixlnhntmxjedpxh\.supabase\.co\/storage\/v1\/object\/sign\/editor-files\/([^?]+)/
  );
  if (signedMatch) {
    return { newUrl: R2_PREFIX + 'editor/' + signedMatch[1], changed: true };
  }

  return { newUrl: url, changed: false };
}

/**
 * Check if text contains a Supabase Storage URL.
 *
 * @param {string} text
 * @returns {boolean}
 */
export function containsSupabaseUrl(text) {
  return typeof text === 'string' && text.includes('supabase.co/storage');
}
