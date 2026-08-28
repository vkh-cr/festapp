#!/usr/bin/env node
import crypto from 'node:crypto';
import fs from 'node:fs';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import path from 'node:path';
import readline from 'node:readline';
import { SOURCES, accessToken, assertPrivateOutput } from './lib.mjs';

const EXPECTED_TARGET = 'root@46.224.187.4';
const RECEIVER = '/tmp/festapp-storage-file-receiver.cjs';
const TARGET_VERIFY_CONCURRENCY = 8;

function fail(message) { throw new Error(message); }

async function sha256File(file) {
  const hash = crypto.createHash('sha256');
  for await (const chunk of fs.createReadStream(file)) hash.update(chunk);
  return hash.digest('hex');
}

function storageDescriptor(row) {
  const metadata = row.metadata ?? {};
  const expectedSize = Number(metadata.size ?? metadata.contentLength);
  if (![row.bucket_id, row.name, row.version].every((value) => typeof value === 'string' && value) ||
      !Number.isSafeInteger(expectedSize) || expectedSize < 0) {
    fail('managed Storage descriptor is invalid');
  }
  return {
    bucket: row.bucket_id,
    name: row.name,
    version: row.version,
    mimetype: metadata.mimetype || 'application/octet-stream',
    cacheControl: metadata.cacheControl || 'no-cache',
    expectedSize,
    expectedMd5: /^"?[0-9a-f]{32}"?$/i.test(metadata.eTag ?? '')
      ? metadata.eTag.replaceAll('"', '').toLowerCase() : null,
  };
}

async function readManagedDescriptors(alias, artifact, identity, manifest) {
  const decrypt = spawn('age', ['--decrypt', '--identity', identity, artifact], {
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  let stderr = '';
  decrypt.stderr.on('data', (chunk) => { stderr += chunk; });
  const completion = once(decrypt, 'close');
  const aggregate = crypto.createHash('sha256');
  let objects = 0;
  let bytes = 0;
  let complete = false;
  let sourceMatched = false;
  const descriptors = [];
  const lines = readline.createInterface({ input: decrypt.stdout, crlfDelay: Infinity });
  for await (const line of lines) {
    const value = JSON.parse(line);
    if (value.kind === 'festapp-managed-schema-export') {
      sourceMatched = value.source_alias === alias && value.project_ref === SOURCES[alias];
    } else if (value.kind === 'row' && value.schema_name === 'storage' && value.table_name === 'objects') {
      const descriptor = storageDescriptor(value.row);
      descriptors.push(descriptor);
      aggregate.update(`${JSON.stringify(descriptor)}\n`);
      objects += 1;
      bytes += descriptor.expectedSize;
    } else if (value.kind === 'complete') {
      complete = true;
    }
  }
  const [code] = await completion;
  if (code !== 0 || !complete || !sourceMatched) fail(`managed artifact verification failed: ${stderr.slice(0, 800)}`);
  const expectedObjects = manifest.tables.find((table) =>
    table.schema_name === 'storage' && table.table_name === 'objects')?.rows;
  if (objects !== expectedObjects) fail('managed Storage descriptor count differs from manifest');
  return { objects, bytes, descriptors, orderedDescriptorSha256: aggregate.digest('hex') };
}

async function mapLimit(values, limit, fn) {
  const results = new Array(values.length);
  let next = 0;
  async function worker() {
    while (true) {
      const index = next++;
      if (index >= values.length) return;
      results[index] = await fn(values[index]);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, values.length) }, worker));
  return results;
}

async function verifyTargetPayloads(descriptors, target) {
  const results = await mapLimit(descriptors, TARGET_VERIFY_CONCURRENCY, async (descriptor) => {
    const encoded = Buffer.from(JSON.stringify(descriptor)).toString('base64url');
    const child = spawn('ssh', ['-o', 'BatchMode=yes', target,
      `docker exec -i -e FESTAPP_STORAGE_VERIFY_ONLY=1 -e FESTAPP_STORAGE_DESCRIPTOR=${encoded} supabase-storage node ${RECEIVER}`], {
      stdio: ['pipe', 'pipe', 'pipe'],
    });
    child.stdin.end();
    let stdout = '';
    let stderr = '';
    child.stdout.on('data', (chunk) => { stdout += chunk; });
    child.stderr.on('data', (chunk) => { stderr += chunk; });
    const [code] = await once(child, 'close');
    if (code !== 0) fail(`target Storage verification failed: ${stderr.slice(0, 800)}`);
    const observed = JSON.parse(stdout.trim());
    if (observed.existed !== true || observed.bytes !== descriptor.expectedSize ||
        (descriptor.expectedMd5 && observed.md5 !== descriptor.expectedMd5) ||
        observed.mimetype !== descriptor.mimetype || observed.cacheControl !== descriptor.cacheControl ||
        !/^[0-9a-f]{64}$/.test(observed.sha256 ?? '')) {
      fail('target Storage payload or metadata differs from the managed descriptor');
    }
    return observed.sha256;
  });
  const aggregate = crypto.createHash('sha256');
  for (const sha256 of results) aggregate.update(`${sha256}\n`);
  return aggregate.digest('hex');
}

async function serviceRoleKey(projectRef, token) {
  const response = await fetch(`https://api.supabase.com/v1/projects/${projectRef}/api-keys`, {
    headers: { authorization: `Bearer ${token}` },
  });
  if (!response.ok) fail(`service-key lookup failed: HTTP ${response.status}`);
  const key = (await response.json()).find((entry) => entry.name === 'service_role')?.api_key;
  if (!key) fail('legacy service_role key is unavailable');
  return key;
}

async function verifySourcePayloads(descriptors, projectRef, serviceKey) {
  const results = await mapLimit(descriptors, TARGET_VERIFY_CONCURRENCY, async (descriptor) => {
    const sourcePath = [descriptor.bucket, ...descriptor.name.split('/')]
      .map(encodeURIComponent).join('/');
    const response = await fetch(`https://${projectRef}.supabase.co/storage/v1/object/${sourcePath}`, {
      headers: { apikey: serviceKey, authorization: `Bearer ${serviceKey}` },
    });
    if (!response.ok || !response.body) fail(`source Storage verification failed: HTTP ${response.status}`);
    const sha256 = crypto.createHash('sha256');
    const md5 = crypto.createHash('md5');
    let bytes = 0;
    for await (const chunk of response.body) {
      bytes += chunk.length;
      sha256.update(chunk);
      md5.update(chunk);
    }
    const observedMd5 = md5.digest('hex');
    if (bytes !== descriptor.expectedSize ||
        (descriptor.expectedMd5 && observedMd5 !== descriptor.expectedMd5)) {
      fail('source Storage payload differs from the managed descriptor');
    }
    return sha256.digest('hex');
  });
  const aggregate = crypto.createHash('sha256');
  for (const sha256 of results) aggregate.update(`${sha256}\n`);
  return aggregate.digest('hex');
}

async function readEvidence(alias, requestedPath, requestedArtifact, identity, target, token) {
  const file = assertPrivateOutput(requestedPath);
  const artifact = assertPrivateOutput(requestedArtifact);
  const manifestPath = `${artifact}.manifest.json`;
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  const value = JSON.parse(fs.readFileSync(file, 'utf8'));
  if (value.kind !== 'festapp-storage-payload-rehearsal-copy' ||
      value.source?.alias !== alias || value.source?.project_ref !== SOURCES[alias] ||
      value.target !== EXPECTED_TARGET || value.cloud_source_mutated !== false ||
      value.cloudflare_in_path !== false) {
    fail(`${alias} Storage evidence identity or guarantees mismatch`);
  }
  if (!Number.isSafeInteger(value.objects) || value.objects <= 0 ||
      !Number.isSafeInteger(value.bytes) || value.bytes < 0 ||
      !Number.isSafeInteger(value.resumed_objects) || value.resumed_objects < 0 ||
      value.resumed_objects > value.objects ||
      !/^[0-9a-f]{64}$/.test(value.ordered_payload_sha256 ?? '') ||
      !/^[0-9a-f]{64}$/.test(value.ordered_descriptor_sha256 ?? '')) {
    fail(`${alias} Storage evidence cardinality or digest is invalid`);
  }
  if (manifest.source?.alias !== alias || manifest.source?.project_ref !== SOURCES[alias] ||
      await sha256File(artifact) !== manifest.artifact?.sha256 ||
      value.source_artifact_sha256 !== manifest.artifact.sha256 ||
      value.source_manifest_file_sha256 !== await sha256File(manifestPath) ||
      value.source_manifest_sha256 !== manifest.manifest_sha256) {
    fail(`${alias} Storage evidence is not bound to the supplied managed artifact`);
  }
  const descriptors = await readManagedDescriptors(alias, artifact, identity, manifest);
  if (descriptors.objects !== value.objects || descriptors.bytes !== value.bytes ||
      descriptors.orderedDescriptorSha256 !== value.ordered_descriptor_sha256) {
    fail(`${alias} Storage evidence descriptors differ from the encrypted managed artifact`);
  }
  const serviceKey = await serviceRoleKey(SOURCES[alias], token);
  const [sourcePayloadSha256, targetPayloadSha256] = await Promise.all([
    verifySourcePayloads(descriptors.descriptors, SOURCES[alias], serviceKey),
    verifyTargetPayloads(descriptors.descriptors, target),
  ]);
  if (sourcePayloadSha256 !== targetPayloadSha256 ||
      sourcePayloadSha256 !== value.ordered_payload_sha256) {
    fail(`${alias} Storage evidence differs from independently hashed source/target payloads`);
  }
  return { ...value, evidence_sha256: await sha256File(file), artifact: path.resolve(artifact) };
}

function sqlString(value) {
  if (!/^[0-9a-f]{64}$/.test(value)) fail('unsafe SQL digest value');
  return `'${value}'`;
}

async function main() {
  const [defaultPath, aPath, defaultArtifact, aArtifact, identity, database,
    target = EXPECTED_TARGET] = process.argv.slice(2);
  if (!defaultPath || !aPath || !defaultArtifact || !aArtifact || !identity || !database) {
    fail('usage: record-storage-payload-evidence.mjs DEFAULT.json A.json DEFAULT.age A.age IDENTITY TARGET_DATABASE [root@host]');
  }
  if (target !== EXPECTED_TARGET || !/^festapp_rehearsal_[0-9]{14}$/.test(database)) {
    fail('target must be the approved host and a timestamped isolated rehearsal database');
  }
  const token = accessToken();
  const [defaultEvidence, aEvidence] = await Promise.all([
    readEvidence('default', defaultPath, defaultArtifact, identity, target, token),
    readEvidence('a', aPath, aArtifact, identity, target, token),
  ]);

  const sql = `BEGIN;
DO $validate$
DECLARE default_run uuid; a_run uuid; precondition text; changed bigint;
BEGIN
  SELECT run_id INTO STRICT default_run FROM festapp_merge.import_runs WHERE source_alias='default' AND status='blocked';
  SELECT run_id INTO STRICT a_run FROM festapp_merge.import_runs WHERE source_alias='a' AND status='blocked';
  SELECT concat_ws('|',
    (SELECT status FROM festapp_merge.validation_results WHERE run_id=default_run AND check_name='default-storage-object-payloads'),
    (SELECT status FROM festapp_merge.validation_results WHERE run_id=a_run AND check_name='a-storage-object-payloads'),
    (SELECT count(*) FROM festapp_stage_default_managed.rows WHERE source_schema='storage' AND source_table='objects'),
    (SELECT coalesce(sum((row_data->'metadata'->>'size')::bigint),0) FROM festapp_stage_default_managed.rows WHERE source_schema='storage' AND source_table='objects'),
    (SELECT count(*) FROM festapp_stage_a_managed.rows WHERE source_schema='storage' AND source_table='objects'),
    (SELECT coalesce(sum((row_data->'metadata'->>'size')::bigint),0) FROM festapp_stage_a_managed.rows WHERE source_schema='storage' AND source_table='objects'),
    (SELECT count(*) FROM storage.objects),
    (SELECT managed_artifact_sha256 FROM festapp_stage_default_managed.provenance),
    (SELECT managed_artifact_sha256 FROM festapp_stage_a_managed.provenance)
  ) INTO precondition;
  IF precondition <> 'blocked|blocked|${defaultEvidence.objects}|${defaultEvidence.bytes}|${aEvidence.objects}|${aEvidence.bytes}|${defaultEvidence.objects + aEvidence.objects}|${defaultEvidence.source_artifact_sha256}|${aEvidence.source_artifact_sha256}' THEN
    RAISE EXCEPTION 'Storage payload evidence does not match staged/canonical metadata: %',precondition;
  END IF;

  UPDATE festapp_merge.validation_results SET status='pass',observed=jsonb_build_object(
    'metadata_rows',${defaultEvidence.objects},'copied_payloads',${defaultEvidence.objects},
    'payload_bytes',${defaultEvidence.bytes},'resumed_verified_payloads',${defaultEvidence.resumed_objects},
    'ordered_payload_sha256',${sqlString(defaultEvidence.ordered_payload_sha256)},
    'ordered_descriptor_sha256',${sqlString(defaultEvidence.ordered_descriptor_sha256)},
    'source_artifact_sha256',${sqlString(defaultEvidence.source_artifact_sha256)},
    'evidence_sha256',${sqlString(defaultEvidence.evidence_sha256)},'deleted_payloads',0)
  WHERE run_id=default_run AND check_name='default-storage-object-payloads';
  GET DIAGNOSTICS changed=ROW_COUNT;
  IF changed<>1 THEN RAISE EXCEPTION 'default Storage payload gate update count was %',changed; END IF;
  UPDATE festapp_merge.validation_results SET status='pass',observed=jsonb_build_object(
    'metadata_rows',${aEvidence.objects},'copied_payloads',${aEvidence.objects},
    'payload_bytes',${aEvidence.bytes},'resumed_verified_payloads',${aEvidence.resumed_objects},
    'ordered_payload_sha256',${sqlString(aEvidence.ordered_payload_sha256)},
    'ordered_descriptor_sha256',${sqlString(aEvidence.ordered_descriptor_sha256)},
    'source_artifact_sha256',${sqlString(aEvidence.source_artifact_sha256)},
    'evidence_sha256',${sqlString(aEvidence.evidence_sha256)},'deleted_payloads',0)
  WHERE run_id=a_run AND check_name='a-storage-object-payloads';
  GET DIAGNOSTICS changed=ROW_COUNT;
  IF changed<>1 THEN RAISE EXCEPTION 'source-a Storage payload gate update count was %',changed; END IF;
  UPDATE festapp_merge.validation_results SET observed=observed||jsonb_build_object('object_payloads_copied',true)
  WHERE run_id=default_run AND check_name='auth-and-storage-import';
  GET DIAGNOSTICS changed=ROW_COUNT;
  IF changed<>1 THEN RAISE EXCEPTION 'default aggregate Storage gate update count was %',changed; END IF;
  UPDATE festapp_merge.validation_results SET status='pass',observed=observed||jsonb_build_object('storage_payloads_imported',true)
  WHERE run_id=a_run AND check_name='a-auth-and-storage-import';
  GET DIAGNOSTICS changed=ROW_COUNT;
  IF changed<>1 THEN RAISE EXCEPTION 'source-a aggregate Storage gate update count was %',changed; END IF;
END
$validate$;
COMMIT;
SELECT jsonb_build_object(
  'storage_objects',(SELECT count(*) FROM storage.objects),
  'payload_gates',(SELECT jsonb_object_agg(r.source_alias,v.status) FROM festapp_merge.validation_results v JOIN festapp_merge.import_runs r USING(run_id) WHERE v.check_name IN ('default-storage-object-payloads','a-storage-object-payloads'))
);
`;
  const child = spawn('ssh', ['-o', 'BatchMode=yes', target,
    `docker exec -i supabase-db psql -X -v ON_ERROR_STOP=1 -U postgres -d ${database}`],
  { stdio: ['pipe', 'pipe', 'pipe'] });
  child.stdin.end(sql);
  let stdout = '';
  let stderr = '';
  child.stdout.on('data', (chunk) => { stdout += chunk; });
  child.stderr.on('data', (chunk) => { stderr += chunk; });
  const [code] = await once(child, 'close');
  if (code !== 0) fail(`Storage payload evidence recording failed: ${stderr.slice(0, 1600)}`);
  process.stdout.write(stdout);
}

main().catch((error) => {
  process.stderr.write(`${error.message}\n`);
  process.exitCode = 1;
});
