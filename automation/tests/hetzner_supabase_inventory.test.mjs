import assert from 'node:assert/strict';
import test from 'node:test';
import path from 'node:path';
import {
  SOURCES,
  REPOSITORY_ROOT,
  assertPrivateOutput,
  buildInventoryManifest,
  sha256,
  stableJson,
} from '../hetzner-supabase/merge/lib.mjs';
import {
  classifyAuthCollisions,
  classifyStorageCollisions,
} from '../hetzner-supabase/merge/collision-lib.mjs';

test('source aliases are pinned to the approved cloud projects', () => {
  assert.deepEqual(SOURCES, {
    default: 'kjdpmixlnhntmxjedpxh',
    a: 'lwfpdjxsdmkfyrzqbrlk',
  });
});

test('production evidence cannot be written inside the repository', () => {
  assert.throws(() => assertPrivateOutput(path.join(REPOSITORY_ROOT, 'inventory.json')));
  assert.equal(assertPrivateOutput('/tmp/festapp-wave-0/inventory.json'), '/tmp/festapp-wave-0/inventory.json');
});

test('stable JSON and fingerprints do not depend on object key order', () => {
  assert.equal(stableJson({ b: 2, a: 1 }), stableJson({ a: 1, b: 2 }));
  assert.equal(sha256(stableJson({ b: 2, a: 1 })), sha256(stableJson({ a: 1, b: 2 })));
});

test('inventory creates a blocked evidence manifest with the required provenance', () => {
  const inventory = {
    source: { alias: 'default', project_ref: SOURCES.default },
    generated_at: '2026-08-27T12:00:00.000Z',
    schema_fingerprint_sha256: 'a'.repeat(64),
    catalog: { relations: [{}, {}] },
    exact_row_counts: { 'public.a': 2, 'public.b': 3 },
    edge_functions: { functions: [{}] },
    supplemental: {
      storage: { object_count: 7, object_bytes: 1024 },
      auth: { users: 11 },
    },
    limitations: ['collision pass incomplete'],
  };
  const manifest = buildInventoryManifest({ inventory, inventoryChecksum: 'b'.repeat(64) });
  assert.equal(manifest.phase, 'inventory');
  assert.equal(manifest.validation.status, 'blocked');
  assert.equal(manifest.validation.unresolved_conflicts, null);
  assert.equal(manifest.validation.orphan_foreign_keys, null);
  assert.equal(manifest.counts.rows, 5);
  assert.equal(manifest.counts.storage_objects, 7);
  assert.equal(manifest.counts.storage_bytes, 1024);
  assert.equal(manifest.counts.auth_users, 11);
  assert.deepEqual(manifest.sources[0], {
    alias: 'default',
    project_ref: SOURCES.default,
    schema_fingerprint: 'a'.repeat(64),
    snapshot_at: inventory.generated_at,
    journal_position: null,
  });
});

test('identity collisions block conflicting UUID and verified-email merges', () => {
  const result = classifyAuthCollisions(
    [{ id: 'd1', normalized_email: 'same@example.test', verified: true }, { id: 'same-id', normalized_email: 'old@example.test', verified: true }],
    [{ id: 'a1', normalized_email: 'same@example.test', verified: true }, { id: 'same-id', normalized_email: 'new@example.test', verified: true }],
    Buffer.alloc(32, 1),
  );
  assert.equal(result.same_email_different_uuid.length, 1);
  assert.equal(result.same_email_different_uuid[0].status, 'manual-merge-required');
  assert.equal(result.same_uuid_different_email.length, 1);
  assert.equal(result.same_email_different_uuid[0].email_hmac.length, 64);
});

test('Storage collisions never treat matching metadata as content proof', () => {
  const result = classifyStorageCollisions(
    [{ bucket_id: 'public', name: 'same.jpg', etag: 'etag', size: '12' }],
    [{ bucket_id: 'public', name: 'same.jpg', etag: 'etag', size: '12' }],
    Buffer.alloc(32, 2),
  );
  assert.equal(result.length, 1);
  assert.equal(result[0].status, 'requires-object-sha256-confirmation');
  assert.equal(result[0].object_key_hmac.length, 64);
});
