#!/usr/bin/env node

import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { once } from 'node:events';
import { spawn } from 'node:child_process';

const TARGET = 'root@46.224.187.4';
const DATABASE = 'festapp_rehearsal_20260828234500';
const ORIGIN = 'https://rehearsal-api.festapp.net';
const ACK = 'rotate-two-isolated-rehearsal-refresh-tokens';
const output = process.argv[2];

function fail(message) { throw new Error(message); }
function sha256(value) { return crypto.createHash('sha256').update(value).digest('hex'); }

async function run(command, args, input = '') {
  const child = spawn(command, args, { stdio: ['pipe', 'pipe', 'pipe'] });
  child.stdin.end(input);
  let stdout = '';
  let stderr = '';
  child.stdout.on('data', (chunk) => { stdout += chunk; });
  child.stderr.on('data', (chunk) => { stderr += chunk; });
  const [code] = await once(child, 'close');
  if (code !== 0) fail(`${command} failed: ${stderr.slice(0, 1000)}`);
  return stdout.trim();
}

async function psql(query) {
  return run('ssh', [
    '-o', 'BatchMode=yes', TARGET,
    'docker', 'exec', '-i', 'supabase-db', 'psql', '-X', '-v', 'ON_ERROR_STOP=1',
    '-U', 'postgres', '-d', DATABASE, '-At',
  ], query);
}

const candidateQueries = {
  default: `
    SELECT jsonb_build_object('refresh_token',rt.token,'user_id',rt.user_id)
    FROM auth.refresh_tokens rt
    JOIN festapp_stage_default_managed.rows source
      ON source.source_schema='auth' AND source.source_table='users'
      AND source.row_data->>'id'=rt.user_id
    WHERE NOT rt.revoked AND NOT EXISTS (
      SELECT 1 FROM festapp_merge.id_mappings m
      JOIN festapp_merge.import_runs r USING(run_id)
      WHERE r.source_alias='a' AND m.source_table='auth.users'
        AND m.target_id=rt.user_id
    )
    ORDER BY rt.updated_at DESC,rt.id DESC LIMIT 1;
  `,
  a: `
    SELECT jsonb_build_object('refresh_token',rt.token,'user_id',rt.user_id)
    FROM auth.refresh_tokens rt
    JOIN festapp_stage_a_managed.rows source
      ON source.source_schema='auth' AND source.source_table='users'
    LEFT JOIN festapp_merge.id_mappings m ON m.source_table='auth.users'
      AND m.source_id=source.row_data->>'id'
      AND m.run_id=(SELECT run_id FROM festapp_merge.import_runs WHERE source_alias='a')
    WHERE rt.user_id=coalesce(m.target_id,source.row_data->>'id') AND NOT rt.revoked
      AND NOT EXISTS (
      SELECT 1 FROM festapp_stage_default_managed.rows source
      WHERE source.source_schema='auth' AND source.source_table='users'
        AND source.row_data->>'id'=rt.user_id
    )
    ORDER BY rt.updated_at DESC,rt.id DESC LIMIT 1;
  `,
};

async function canary(alias, anonKey) {
  const candidateJson = await psql(candidateQueries[alias]);
  if (!candidateJson) fail(`${alias} has no isolated refresh candidate`);
  const candidate = JSON.parse(candidateJson);
  if (!candidate.refresh_token || !candidate.user_id) fail(`${alias} has no isolated refresh candidate`);

  const response = await fetch(`${ORIGIN}/auth/v1/token?grant_type=refresh_token`, {
    method: 'POST',
    headers: { apikey: anonKey, 'content-type': 'application/json' },
    body: JSON.stringify({ refresh_token: candidate.refresh_token }),
  });
  const body = await response.json();
  if (!response.ok || !body.access_token || !body.refresh_token || !body.user?.id) {
    fail(`${alias} refresh canary failed with HTTP ${response.status}`);
  }
  if (body.user.id !== candidate.user_id) fail(`${alias} refresh changed user identity`);

  const userResponse = await fetch(`${ORIGIN}/auth/v1/user`, {
    headers: { apikey: anonKey, authorization: `Bearer ${body.access_token}` },
  });
  const user = await userResponse.json();
  if (!userResponse.ok || user.id !== candidate.user_id) {
    fail(`${alias} refreshed access token failed user verification`);
  }

  const [headerPart, payloadPart] = body.access_token.split('.');
  const header = JSON.parse(Buffer.from(headerPart, 'base64url').toString('utf8'));
  const payload = JSON.parse(Buffer.from(payloadPart, 'base64url').toString('utf8'));
  if (header.alg !== 'HS256' || payload.sub !== candidate.user_id || payload.role !== 'authenticated') {
    fail(`${alias} refreshed access token claims mismatch`);
  }

  return {
    alias,
    user_id_sha256: sha256(candidate.user_id),
    input_refresh_token_sha256: sha256(candidate.refresh_token),
    output_refresh_token_sha256: sha256(body.refresh_token),
    refresh_token_rotated: body.refresh_token !== candidate.refresh_token,
    access_token_sha256: sha256(body.access_token),
    access_token_alg: header.alg,
    access_token_role: payload.role,
    user_endpoint_status: userResponse.status,
  };
}

async function main() {
  if (process.env.FESTAPP_REHEARSAL_ACK !== ACK) fail(`set FESTAPP_REHEARSAL_ACK=${ACK}`);
  if (!output) fail('provide a private output JSON path');
  const resolved = path.resolve(output);
  const repo = path.resolve(import.meta.dirname, '../../..');
  if (resolved === repo || resolved.startsWith(`${repo}${path.sep}`)) {
    fail('evidence must remain outside the repository');
  }

  const anonKey = await run('ssh', [
    '-o', 'BatchMode=yes', TARGET,
    "sed -n 's/^ANON_KEY=//p' /opt/festapp-supabase/docker/.env",
  ]);
  if (anonKey.split('.').length !== 3) fail('target anon key is unavailable');

  const results = [];
  for (const alias of ['default', 'a']) results.push(await canary(alias, anonKey));
  const evidence = {
    version: 1,
    kind: 'festapp-auth-refresh-continuity-canary',
    created_at: new Date().toISOString(),
    target: TARGET,
    database: DATABASE,
    origin: ORIGIN,
    anon_key_sha256: sha256(anonKey),
    strategy: 'refresh-or-reauth',
    legacy_access_token_policy: 'reject-after-cutover',
    terminal_refresh_policy: 'local-sign-out',
    source_a_reauthentication_allowed: true,
    isolated_target_refresh_tokens_rotated: 2,
    cloud_sources_mutated: false,
    deleted_rows: 0,
    results,
  };
  fs.mkdirSync(path.dirname(resolved), { recursive: true, mode: 0o700 });
  const fd = fs.openSync(resolved, 'wx', 0o600);
  fs.writeFileSync(fd, `${JSON.stringify(evidence, null, 2)}\n`);
  fs.closeSync(fd);
  console.log(JSON.stringify({
    status: 'pass',
    evidence_sha256: sha256(fs.readFileSync(resolved)),
    cohorts: results.map(({ alias, refresh_token_rotated, user_endpoint_status }) => ({
      alias, refresh_token_rotated, user_endpoint_status,
    })),
  }));
}

main().catch((error) => {
  console.error(`ERROR: ${error.message}`);
  process.exitCode = 1;
});
