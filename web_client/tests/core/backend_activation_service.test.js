import assert from 'node:assert/strict';
import { webcrypto } from 'node:crypto';
import test from 'node:test';

import { BackendActivationService } from '../../src/services/backend_activation_service.js';

const tenantId = 'festival-test';
const canonicalDocument = new TextEncoder().encode(
  `{"schemaVersion":1,"tenantId":"${tenantId}","generation":1,"backend":"canonical"}\n`,
);
const digest = Buffer.from(
  await webcrypto.subtle.digest('SHA-256', canonicalDocument),
).toString('hex');
const config = {
  supabaseUrl: 'https://legacy.supabase.co',
  anonKey: 'legacy-key',
  backendActivationTenantId: tenantId,
  backendActivationManifestUrl: 'https://app.example.test/backend-activation.json',
  backendActivationCanonicalManifestSha256: digest,
  backendActivationCanonicalSupabaseUrl: 'https://api.festapp.net',
  backendActivationCanonicalAnonKey: 'canonical-key',
};

function memoryStorage() {
  const values = new Map();
  return {
    values,
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value),
  };
}

test('activation defaults to legacy and accepts only the pinned canonical bytes', async () => {
  const storage = memoryStorage();
  const unavailable = new BackendActivationService({
    config, storage, subtle: webcrypto.subtle,
    fetchImpl: async () => { throw new Error('offline'); },
  });
  assert.equal((await unavailable.resolve()).supabaseUrl, config.supabaseUrl);

  const activated = new BackendActivationService({
    config, storage, subtle: webcrypto.subtle,
    fetchImpl: async () => new Response(canonicalDocument),
  });
  assert.equal(
    (await activated.resolve()).supabaseUrl,
    config.backendActivationCanonicalSupabaseUrl,
  );
  assert.equal(storage.values.size, 1);
});

test('canonical activation is monotonic when the remote document disappears', async () => {
  const storage = memoryStorage();
  const marker = BackendActivationService.markerPrefix + tenantId;
  storage.setItem(marker, BackendActivationService.canonicalMarker);
  const service = new BackendActivationService({
    config, storage, subtle: webcrypto.subtle,
    fetchImpl: async () => { throw new Error('regressed'); },
  });
  assert.equal((await service.resolve()).isCanonical, true);
});

test('a modified activation response cannot select the canonical writer', async () => {
  const storage = memoryStorage();
  const service = new BackendActivationService({
    config, storage, subtle: webcrypto.subtle,
    fetchImpl: async () => new Response(canonicalDocument.slice(0, -1)),
  });
  assert.equal((await service.resolve()).isCanonical, false);
  assert.equal(storage.values.size, 0);
});

test('unavailable or failing storage keeps the legacy writer', async () => {
  const canonicalFetch = async () => new Response(canonicalDocument);
  const missing = new BackendActivationService({
    config, storage: null, subtle: webcrypto.subtle, fetchImpl: canonicalFetch,
  });
  assert.equal((await missing.resolve()).isCanonical, false);

  for (const storage of [
    { getItem: () => { throw new Error('read denied'); }, setItem: () => {} },
    { getItem: () => null, setItem: () => { throw new Error('write denied'); } },
    { getItem: () => null, setItem: () => {} },
  ]) {
    const service = new BackendActivationService({
      config, storage, subtle: webcrypto.subtle, fetchImpl: canonicalFetch,
    });
    assert.equal((await service.resolve()).isCanonical, false);
  }
});
