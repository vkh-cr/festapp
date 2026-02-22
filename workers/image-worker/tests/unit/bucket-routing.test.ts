/**
 * Unit tests for bucket routing logic.
 *
 * Verifies that resolveBucket and resolvePublicOrigin correctly route
 * requests to the right R2 bucket and return the matching public URL origin.
 */
import { describe, it, expect } from 'vitest';
import { resolveBucket, resolvePublicOrigin } from '../../src/bucket';
import type { Env } from '../../src/types';

// ─── Mock env ────────────────────────────────────────────────────

const BUCKET_DEFAULT = { name: 'festapp-images' } as unknown as R2Bucket;
const BUCKET_A = { name: 'festapp-images-a' } as unknown as R2Bucket;
const BUCKET_B = { name: 'festapp-images-b' } as unknown as R2Bucket;

const env: Env = {
  IMAGES_BUCKET: BUCKET_DEFAULT,
  IMAGES_BUCKET_A: BUCKET_A,
  IMAGES_BUCKET_B: BUCKET_B,
  IMAGES_BUCKET_C: undefined as unknown as R2Bucket,
  IMAGES_TEMP: {} as R2Bucket,
  IMAGES: null,
  SUPABASE_URL: 'https://default-project.supabase.co',
  SUPABASE_URL_A: 'https://project-a.supabase.co',
  SUPABASE_URL_B: 'https://project-b.supabase.co',
  SUPABASE_URL_C: undefined as unknown as string,
  SUPABASE_ANON_KEY: 'test',
  R2_ACCESS_KEY_ID: 'test',
  R2_SECRET_ACCESS_KEY: 'test',
  CF_ACCOUNT_ID: 'test',
};

// ─── resolveBucket ───────────────────────────────────────────────

describe('resolveBucket', () => {
  it('routes to default bucket by supabaseUrl', () => {
    expect(resolveBucket(env, { supabaseUrl: 'https://default-project.supabase.co' })).toBe(BUCKET_DEFAULT);
  });

  it('routes to bucket A by supabaseUrl', () => {
    expect(resolveBucket(env, { supabaseUrl: 'https://project-a.supabase.co' })).toBe(BUCKET_A);
  });

  it('routes to bucket B by supabaseUrl', () => {
    expect(resolveBucket(env, { supabaseUrl: 'https://project-b.supabase.co' })).toBe(BUCKET_B);
  });

  it('routes to default bucket by hostname img.festapp.net', () => {
    expect(resolveBucket(env, { hostname: 'img.festapp.net' })).toBe(BUCKET_DEFAULT);
  });

  it('routes to bucket A by hostname a.img.festapp.net', () => {
    expect(resolveBucket(env, { hostname: 'a.img.festapp.net' })).toBe(BUCKET_A);
  });

  it('routes to bucket B by hostname b.img.festapp.net', () => {
    expect(resolveBucket(env, { hostname: 'b.img.festapp.net' })).toBe(BUCKET_B);
  });

  it('falls back to default bucket for unknown supabaseUrl', () => {
    expect(resolveBucket(env, { supabaseUrl: 'https://unknown.supabase.co' })).toBe(BUCKET_DEFAULT);
  });

  it('falls back to default bucket when no opts', () => {
    expect(resolveBucket(env)).toBe(BUCKET_DEFAULT);
  });

  it('supabaseUrl takes precedence over hostname', () => {
    expect(resolveBucket(env, {
      supabaseUrl: 'https://project-a.supabase.co',
      hostname: 'img.festapp.net',
    })).toBe(BUCKET_A);
  });

  it('skips unconfigured project C', () => {
    expect(resolveBucket(env, { hostname: 'c.img.festapp.net' })).toBe(BUCKET_DEFAULT);
  });
});

// ─── resolvePublicOrigin ─────────────────────────────────────────

describe('resolvePublicOrigin', () => {
  it('returns img.festapp.net for default project by supabaseUrl', () => {
    expect(resolvePublicOrigin(env, { supabaseUrl: 'https://default-project.supabase.co' }))
      .toBe('https://img.festapp.net');
  });

  it('returns a.img.festapp.net for project A by supabaseUrl', () => {
    expect(resolvePublicOrigin(env, { supabaseUrl: 'https://project-a.supabase.co' }))
      .toBe('https://a.img.festapp.net');
  });

  it('returns b.img.festapp.net for project B by supabaseUrl', () => {
    expect(resolvePublicOrigin(env, { supabaseUrl: 'https://project-b.supabase.co' }))
      .toBe('https://b.img.festapp.net');
  });

  it('returns img.festapp.net for default project by hostname', () => {
    expect(resolvePublicOrigin(env, { hostname: 'img.festapp.net' }))
      .toBe('https://img.festapp.net');
  });

  it('returns a.img.festapp.net even when request came via img.festapp.net', () => {
    expect(resolvePublicOrigin(
      env,
      { supabaseUrl: 'https://project-a.supabase.co', hostname: 'img.festapp.net' },
      'https://img.festapp.net'
    )).toBe('https://a.img.festapp.net');
  });

  it('returns workers.dev origin for unknown project', () => {
    expect(resolvePublicOrigin(
      env,
      { hostname: 'festapp-image-worker.festapp.workers.dev' },
      'https://festapp-image-worker.festapp.workers.dev'
    )).toBe('https://festapp-image-worker.festapp.workers.dev');
  });

  it('falls back to img.festapp.net when nothing matches and no requestOrigin', () => {
    expect(resolvePublicOrigin(env, { supabaseUrl: 'https://unknown.supabase.co' }))
      .toBe('https://img.festapp.net');
  });
});
