#!/usr/bin/env node
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { accessToken, assertPrivateOutput, managementQuery, sha256, stableJson, SOURCES } from './lib.mjs';
import { classifyAuthCollisions, classifyStorageCollisions } from './collision-lib.mjs';

const outputIndex = process.argv.indexOf('--output');
if (outputIndex < 0 || !process.argv[outputIndex + 1]) {
  throw new Error('usage: collision-inventory.mjs --output /private/path/collisions.json');
}
const output = assertPrivateOutput(process.argv[outputIndex + 1]);
const token = accessToken();
const hmacKey = crypto.randomBytes(32);

async function sourceRows(projectRef) {
  const users = await managementQuery({
    projectRef,
    token,
    query: `SELECT id::text, lower(trim(email)) AS normalized_email,
      email_confirmed_at IS NOT NULL AS verified FROM auth.users ORDER BY id`,
  });
  const storage = await managementQuery({
    projectRef,
    token,
    query: `SELECT bucket_id, name, metadata->>'eTag' AS etag,
      CASE WHEN metadata->>'size' ~ '^[0-9]+$' THEN (metadata->>'size')::bigint ELSE NULL END AS size
      FROM storage.objects ORDER BY bucket_id, name`,
  });
  return { users, storage };
}

const canonical = await sourceRows(SOURCES.default);
const sourceA = await sourceRows(SOURCES.a);
const auth = classifyAuthCollisions(canonical.users, sourceA.users, hmacKey);
const storage = classifyStorageCollisions(canonical.storage, sourceA.storage, hmacKey);
const report = {
  report_version: 1,
  generated_at: new Date().toISOString(),
  sources: { default: SOURCES.default, a: SOURCES.a },
  privacy: 'emails and Storage object keys are HMACed with an ephemeral key that is not persisted',
  auth,
  storage: { collisions: storage, object_sha256_completed: false },
  validation: {
    status: 'blocked',
    same_uuid_different_email: auth.same_uuid_different_email.length,
    same_email_different_uuid: auth.same_email_different_uuid.length,
    storage_key_collisions: storage.length,
    storage_content_blockers: storage.filter((value) => value.status === 'content-collision-blocker').length,
    notes: [
      'all identity collisions require explicit decisions in the private mapping workspace',
      'matching Storage metadata is not content proof; object SHA-256 comparison remains required',
      'UUID and natural-key collisions outside Auth require the table-level collision pass',
    ],
  },
};
report.report_sha256 = sha256(stableJson(report));
fs.mkdirSync(path.dirname(output), { recursive: true, mode: 0o700 });
fs.writeFileSync(output, `${JSON.stringify(report, null, 2)}\n`, { mode: 0o600 });
process.stdout.write(`collision inventory: auth_uuid=${report.validation.same_uuid_different_email}, auth_email=${report.validation.same_email_different_uuid}, storage_keys=${report.validation.storage_key_collisions}, sha256=${report.report_sha256}\n`);
