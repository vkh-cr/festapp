#!/usr/bin/env node
import crypto from 'node:crypto';
import fs from 'node:fs';
import readline from 'node:readline';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { SOURCES, assertPrivateOutput } from './lib.mjs';

const TARGETS = Object.freeze({
  default: 'festapp_stage_default',
  a: 'festapp_stage_a',
});
const EXPECTED_HOST = 'festapp-supabase-rehearsal-01';
const COMPOSE_DIR = '/opt/festapp-supabase/docker';

async function sha256File(filePath) {
  const hash = crypto.createHash('sha256');
  for await (const chunk of fs.createReadStream(filePath)) hash.update(chunk);
  return hash.digest('hex');
}

export function csvField(value) {
  return `"${String(value).replaceAll('"', '""')}"`;
}

function run(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { ...options, stdio: options.stdio ?? ['ignore', 'pipe', 'pipe'] });
    let stdout = '';
    let stderr = '';
    child.stdout?.on('data', (chunk) => { stdout += chunk; });
    child.stderr?.on('data', (chunk) => { stderr += chunk; });
    child.on('error', reject);
    child.on('close', (code) => code === 0 ? resolve(stdout) : reject(new Error(`${command} failed (${code}): ${stderr}`)));
  });
}

async function main() {
  const [alias, requestedArtifact, identityPath, sshTarget = 'root@46.224.187.4'] = process.argv.slice(2);
  if (!SOURCES[alias] || !requestedArtifact || !identityPath) {
    throw new Error('usage: stage-managed-export.mjs default|a ARTIFACT.age SSH-IDENTITY [root@host]');
  }
  const artifact = assertPrivateOutput(requestedArtifact);
  const manifestPath = `${artifact}.manifest.json`;
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  if (manifest.source?.alias !== alias || manifest.source?.project_ref !== SOURCES[alias]) {
    throw new Error('managed manifest source identity mismatch');
  }
  if (await sha256File(artifact) !== manifest.artifact?.sha256) throw new Error('managed artifact checksum mismatch');
  const expectedRows = manifest.tables.reduce((sum, table) => sum + table.rows, 0);
  const database = TARGETS[alias];

  const state = (await run('ssh', ['-o', 'BatchMode=yes', sshTarget,
    `cd ${COMPOSE_DIR} && printf '%s|' "$(hostname -s)" && docker compose exec -T db psql -X -Atq -F '|' -U postgres -d ${database} -c "SELECT split_part(current_setting('server_version'),'.',1), to_regnamespace('festapp_managed_source') IS NULL"`,
  ])).trim();
  if (state !== `${EXPECTED_HOST}|17|t`) throw new Error(`unapproved managed staging target state: ${state}`);

  const foundationSql = `BEGIN;
CREATE SCHEMA festapp_managed_source AUTHORIZATION postgres;
REVOKE ALL ON SCHEMA festapp_managed_source FROM PUBLIC, anon, authenticated, service_role;
CREATE TABLE festapp_managed_source.rows (
  row_id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  source_schema text NOT NULL CHECK (source_schema IN ('auth','storage')),
  source_table text NOT NULL,
  row_data jsonb NOT NULL
);
REVOKE ALL ON ALL TABLES IN SCHEMA festapp_managed_source FROM PUBLIC, anon, authenticated, service_role;
REVOKE ALL ON ALL SEQUENCES IN SCHEMA festapp_managed_source FROM PUBLIC, anon, authenticated, service_role;
COMMIT;
`;
  const foundation = spawn('ssh', ['-o', 'BatchMode=yes', sshTarget,
    `cd ${COMPOSE_DIR} && docker compose exec -T db psql -X -v ON_ERROR_STOP=1 -U postgres -d ${database}`,
  ], { stdio: ['pipe', 'pipe', 'pipe'] });
  foundation.stdin.end(foundationSql);
  let foundationError = '';
  foundation.stderr.on('data', (chunk) => { foundationError += chunk; });
  const [foundationCode] = await once(foundation, 'close');
  if (foundationCode !== 0) throw new Error(`managed staging foundation failed: ${foundationError}`);

  const decrypt = spawn('age', ['--decrypt', '--identity', identityPath, artifact], {
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  const copy = spawn('ssh', ['-o', 'BatchMode=yes', sshTarget,
    `cd ${COMPOSE_DIR} && docker compose exec -T db psql -X -v ON_ERROR_STOP=1 -U postgres -d ${database} -c "COPY festapp_managed_source.rows(source_schema,source_table,row_data) FROM STDIN WITH (FORMAT csv, DELIMITER E'\\t')"`,
  ], { stdio: ['pipe', 'pipe', 'pipe'] });
  let decryptError = '';
  let copyError = '';
  decrypt.stderr.on('data', (chunk) => { decryptError += chunk; });
  copy.stderr.on('data', (chunk) => { copyError += chunk; });
  let rows = 0;
  let completed = false;
  const lines = readline.createInterface({ input: decrypt.stdout, crlfDelay: Infinity });
  for await (const line of lines) {
    const value = JSON.parse(line);
    if (value.kind === 'row') {
      const csv = `${csvField(value.schema_name)}\t${csvField(value.table_name)}\t${csvField(JSON.stringify(value.row))}\n`;
      if (!copy.stdin.write(csv)) await once(copy.stdin, 'drain');
      rows += 1;
    } else if (value.kind === 'complete') {
      completed = true;
    }
  }
  copy.stdin.end();
  const [[decryptCode], [copyCode]] = await Promise.all([once(decrypt, 'close'), once(copy, 'close')]);
  if (decryptCode !== 0 || copyCode !== 0) {
    throw new Error(`managed staging stream failed (age=${decryptCode}, copy=${copyCode}): ${decryptError || copyError}`);
  }
  if (!completed || rows !== expectedRows) throw new Error(`managed staging row mismatch: ${rows}/${expectedRows}`);
  await run('ssh', ['-o', 'BatchMode=yes', sshTarget,
    `cd ${COMPOSE_DIR} && docker compose exec -T db psql -X -v ON_ERROR_STOP=1 -U postgres -d ${database} -c "CREATE INDEX festapp_managed_source_relation_idx ON festapp_managed_source.rows(source_schema,source_table); ANALYZE festapp_managed_source.rows"`,
  ]);
  const observed = (await run('ssh', ['-o', 'BatchMode=yes', sshTarget,
    `cd ${COMPOSE_DIR} && docker compose exec -T db psql -X -Atq -U postgres -d ${database} -c "SELECT count(*) FROM festapp_managed_source.rows"`,
  ])).trim();
  if (Number(observed) !== expectedRows) throw new Error(`remote managed staging count mismatch: ${observed}/${expectedRows}`);
  process.stdout.write(`${alias} managed staging complete: rows=${rows}\n`);
}

if (process.argv[1] === new URL(import.meta.url).pathname) {
  main().catch((error) => {
    process.stderr.write(`${error.message}\n`);
    process.exitCode = 1;
  });
}
