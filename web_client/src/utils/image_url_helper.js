/**
 * Helper for transforming image URLs to use on-the-fly Worker transforms.
 *
 * Appends query parameters (?w=&f=&q=) that the image Worker uses
 * to resize and re-encode images via the Cloudflare Images binding.
 */

const IMAGE_HOST = 'img.festapp.net';
const WORKER_HOST = 'festapp-image-worker.festapp.workers.dev';

/** Standard thumbnail widths to maximize CDN cache hits. */
export const THUMBNAIL_WIDTH = 300;
export const MEDIUM_WIDTH = 600;
export const FULL_WIDTH = 1200;

/**
 * Transform an img.festapp.net URL to include resize query parameters.
 * Returns original URL unchanged if not an img.festapp.net URL or on error.
 *
 * @param {string} originalUrl - The image URL to transform.
 * @param {Object} [options]
 * @param {number} [options.width=300] - Target width in pixels.
 * @param {string} [options.format='auto'] - Output format ('auto' for WebP/AVIF negotiation).
 * @param {number} [options.quality] - Quality 1-100 (omitted if undefined).
 * @returns {string} Transformed URL or original if not applicable.
 */
export function transformImageUrl(originalUrl, { width = THUMBNAIL_WIDTH, format = 'auto', quality } = {}) {
    try {
        const url = new URL(originalUrl);
        if (!url.host.includes(IMAGE_HOST) && !url.host.includes(WORKER_HOST)) return originalUrl;

        url.searchParams.set('w', String(width));
        url.searchParams.set('f', format);
        if (quality) url.searchParams.set('q', String(quality));

        return url.toString();
    } catch {
        return originalUrl;
    }
}
