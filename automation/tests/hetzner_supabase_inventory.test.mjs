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
    limitations: ['collision pass incomplete'],
  };
  const manifest = buildInventoryManifest({ inventory, inventoryChecksum: 'b'.repeat(64) });
  assert.equal(manifest.phase, 'inventory');
  assert.equal(manifest.validation.status, 'blocked');
  assert.equal(manifest.counts.rows, 5);
  assert.deepEqual(manifest.sources[0], {
    alias: 'default',
    project_ref: SOURCES.default,
    schema_fingerprint: 'a'.repeat(64),
    snapshot_at: inventory.generated_at,
    journal_position: null,
  });
});
