import assert from 'node:assert/strict';
import test from 'node:test';
import path from 'node:path';
import {
  SOURCES,
  REPOSITORY_ROOT,
  assertPrivateOutput,
  assertNewEvidencePaths,
  buildInventoryManifest,
  sha256,
  stableJson,
} from '../hetzner-supabase/merge/lib.mjs';
import {
  classifyAuthCollisions,
  classifyStorageCollisions,
} from '../hetzner-supabase/merge/collision-lib.mjs';
import { buildIdentityDecisions } from '../hetzner-supabase/merge/resolve-auth-collisions.mjs';
import { scanWriteSignals } from '../hetzner-supabase/merge/write-authority-inventory.mjs';

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

test('existing evidence is never overwritten', () => {
  assert.throws(() => assertNewEvidencePaths([new URL(import.meta.url).pathname]), /refusing to overwrite/);
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

test('verified e-mail collisions preserve default UUID and force source password reset', () => {
  const collisionReport = {
    sources: SOURCES,
    auth: {
      same_uuid_different_email: [],
      same_email_different_uuid: [{
        default_user_id: 'default-user',
        a_user_id: 'a-user',
        email_hmac: 'd'.repeat(64),
        default_verified: true,
        a_verified: true,
        default_auth_state: simpleEmailAuthState(),
        a_auth_state: simpleEmailAuthState(),
        status: 'manual-merge-required',
      }],
    },
  };
  collisionReport.report_sha256 = sha256(stableJson(collisionReport));
  const result = buildIdentityDecisions(collisionReport);
  assert.equal(result.validation.unresolved, 0);
  assert.deepEqual(result.decisions[0], {
    source_project: 'a',
    source_user_id: 'a-user',
    target_user_id: 'default-user',
    email_hmac: 'd'.repeat(64),
    rule: 'verified-email-prefer-default-v1',
    canonical_password: 'preserve-default-hash',
    source_password: 'require-reset',
    memberships: 'merge-after-user-id-remap',
    providers: 'reconcile-without-duplicate-email-identity',
    provider_evidence: 'email-only-on-both-sources',
    mfa_evidence: 'none-on-both-sources',
    pending_token_evidence: 'none-on-both-sources',
    status: 'approved-by-execution-rule',
  });
});

test('identity resolver blocks unverified or UUID/e-mail ambiguity', () => {
  const report = {
    sources: SOURCES,
    auth: {
      same_uuid_different_email: [{ id: 'blocker' }],
      same_email_different_uuid: [],
    },
  };
  report.report_sha256 = sha256(stableJson(report));
  assert.throws(() => buildIdentityDecisions(report), /same UUID/);
});

test('identity resolver verifies collision provenance and blocks nontrivial Auth state', () => {
  const report = {
    sources: SOURCES,
    auth: {
      same_uuid_different_email: [],
      same_email_different_uuid: [{
        default_user_id: 'default-user', a_user_id: 'a-user', email_hmac: 'f'.repeat(64),
        default_verified: true, a_verified: true, status: 'manual-merge-required',
        default_auth_state: simpleEmailAuthState(),
        a_auth_state: { ...simpleEmailAuthState(), mfa: [{ factor_type: 'totp', status: 'verified' }] },
      }],
    },
  };
  report.report_sha256 = sha256(stableJson(report));
  assert.throws(() => buildIdentityDecisions(report), /provider, MFA/);
  report.report_sha256 = '0'.repeat(64);
  assert.throws(() => buildIdentityDecisions(report), /checksum mismatch/);
});

function simpleEmailAuthState() {
  return {
    providers: ['email'], mfa: [], phone_hmac: null, phone_verified: false,
    is_sso_user: false, is_anonymous: false,
    pending_tokens: { confirmation: false, recovery: false, email_change: false, phone_change: false, reauthentication: false },
  };
}

test('write-authority scanner distinguishes RPC, DML, Storage and side effects', () => {
  const signals = scanWriteSignals(`
    await supabase.from('orders').insert(payload);
    await supabase.rpc('create_order', payload);
    await supabase.storage.from('public-files').remove(['a']);
    SELECT cron.schedule('job', '* * * * *', $$ SELECT net.http_post(url := 'x') $$);
    await sendEmail();
  `);
  assert.deepEqual(signals, [
    'database-webhook',
    'direct-dml',
    'email-side-effect',
    'rpc',
    'sql-cron',
    'storage-mutation',
  ]);
});
