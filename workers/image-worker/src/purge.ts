import type { Env } from './types';

export class PurgeError extends Error {
  constructor(readonly retryable: boolean, message: string) { super(message); }
}

export async function purgeSourceUrl(env: Env, sourceUrl: string): Promise<void> {
  if (!env.CF_ZONE_ID || !env.CF_CACHE_PURGE_TOKEN) {
    throw new PurgeError(true, 'Cache purge is not configured');
  }
  const response = await fetch(
    `https://api.cloudflare.com/client/v4/zones/${env.CF_ZONE_ID}/purge_cache`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.CF_CACHE_PURGE_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ files: [sourceUrl] }),
    },
  );
  if (!response.ok) {
    throw new PurgeError(response.status === 429 || response.status >= 500, `Cache purge failed (${response.status})`);
  }
}
