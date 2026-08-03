import { describe, expect, it, vi } from 'vitest';
import { handleRequest, type Env } from '../src/index';

const body = JSON.stringify({ protocol: 1, serverTime: '2026-08-02T12:00:00Z' });

function environment(found = true): Env {
  return {
    PUBLIC_SYNC: {
      get: vi.fn(async () =>
        found
          ? {
              body,
              httpEtag: '"head-digest"',
            }
          : null),
    } as unknown as R2Bucket,
  };
}

describe('public sync head', () => {
  it('reads only the scoped R2 head and emits bounded revalidation headers', async () => {
    const env = environment();
    const response = await handleRequest(
      new Request('https://sync.festapp.net/v1/public-sync/7/42/head'),
      env,
    );
    expect(response.status).toBe(200);
    expect(await response.text()).toBe(body);
    expect(response.headers.get('cache-control')).toContain('s-maxage=5');
    expect(env.PUBLIC_SYNC.get).toHaveBeenCalledWith(
      'client-sync/v1/7/42/public-head.json',
    );
  });

  it('returns 304 for the current ETag without reading any database', async () => {
    const response = await handleRequest(
      new Request('https://sync.festapp.net/v1/public-sync/7/42/head', {
        headers: { 'If-None-Match': '"head-digest"' },
      }),
      environment(),
    );
    expect(response.status).toBe(304);
    expect(await response.text()).toBe('');
  });

  it('does not expose an arbitrary bucket key', async () => {
    const env = environment();
    const response = await handleRequest(
      new Request('https://sync.festapp.net/client-sync/v1/7/42/private.json'),
      env,
    );
    expect(response.status).toBe(404);
    expect(env.PUBLIC_SYNC.get).not.toHaveBeenCalled();
  });
});
