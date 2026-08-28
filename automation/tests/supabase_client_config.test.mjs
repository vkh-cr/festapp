#!/usr/bin/env node

import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import test from 'node:test';

import {
  derivedAuthStorageKey,
  parseSupabaseOrigin,
  resolvedAuthStorageKey,
} from '../lib/supabase_client_config.mjs';

const root = path.resolve(import.meta.dirname, '../..');

test('Supabase client origin accepts cloud and self-hosted HTTPS origins only', () => {
  assert.equal(parseSupabaseOrigin('https://api.festapp.net/'), 'https://api.festapp.net');
  for (const invalid of [
    'http://api.festapp.net',
    'https://user:pass@api.festapp.net',
    'https://api.festapp.net/rest/v1',
    'https://api.festapp.net?tenant=a',
    'https://api.festapp.net#fragment',
  ]) assert.throws(() => parseSupabaseOrigin(invalid));
});

test('auth storage namespace is deterministic and may be explicitly kept across cutover', () => {
  assert.equal(
    derivedAuthStorageKey('https://kjdpmixlnhntmxjedpxh.supabase.co'),
    'sb-kjdpmixlnhntmxjedpxh-auth-token',
  );
  assert.equal(
    derivedAuthStorageKey('https://api.example.com'),
    'sb-selfhost-d0c43d3885064d9a-auth-token',
  );
  assert.equal(
    resolvedAuthStorageKey('https://api.example.com', 'sb-existing-cloud-auth-token'),
    'sb-existing-cloud-auth-token',
  );
  assert.throws(() => resolvedAuthStorageKey('https://api.example.com', '../unsafe'));
});

test('web, Android and iOS release builders share the client cutover preflight', () => {
  const android = fs.readFileSync(path.join(root, 'automation/release/android_release.ps1'), 'utf8');
  const ios = fs.readFileSync(path.join(root, 'automation/release/ios_build_and_upload.sh'), 'utf8');
  const web = fs.readFileSync(path.join(root, 'automation/build_web_bundle.sh'), 'utf8');
  for (const source of [android, ios, web]) {
    assert.match(source, /client_cutover_preflight\.mjs/);
    assert.match(source, /FESTAPP_CANONICAL_CUTOVER_RELEASE/);
  }
  assert.doesNotMatch(web, /cutover_preflight_args/,
    'web release preflight must remain compatible with macOS Bash 3.2 and set -u');
  assert.doesNotMatch(ios, /cutover_preflight_args/,
    'iOS release preflight must remain compatible with macOS Bash 3.2 and set -u');
});

const jwt = (payload) => [
  Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64url'),
  Buffer.from(JSON.stringify(payload)).toString('base64url'),
  'test-signature',
].join('.');

function makePreflightFixture({ origin, key, generation, authStorageKey, backend }) {
  const fixture = fs.mkdtempSync(path.join(os.tmpdir(), 'festapp-cutover-preflight-'));
  for (const relative of ['automation/release', 'automation/lib', 'lib', 'web_client/src']) {
    fs.mkdirSync(path.join(fixture, relative), { recursive: true });
  }
  fs.copyFileSync(
    path.join(root, 'automation/release/client_cutover_preflight.mjs'),
    path.join(fixture, 'automation/release/client_cutover_preflight.mjs'),
  );
  fs.copyFileSync(
    path.join(root, 'automation/lib/supabase_client_config.mjs'),
    path.join(fixture, 'automation/lib/supabase_client_config.mjs'),
  );
  fs.writeFileSync(path.join(fixture, 'automation/project.conf'), [
    `SUPABASE_URL=${origin}`,
    `SUPABASE_ANON_KEY=${key}`,
    `SUPABASE_AUTH_STORAGE_KEY=${authStorageKey}`,
    `PUSH_APP_GENERATION=${generation}`,
    'WEB_LINK=https://app.example.test',
  ].join('\n'));
  fs.writeFileSync(path.join(fixture, 'lib/app_config.dart'), [
    `static const String supabaseUrl = '${origin}';`,
    `static const String anonKey = '${key}';`,
    `static const String pushAppGeneration = '${generation}';`,
  ].join('\n'));
  fs.writeFileSync(path.join(fixture, 'web_client/src/app_config.js'), [
    `static supabaseUrl = '${origin}';`,
    `static anonKey = '${key}';`,
    `auth: '${authStorageKey}'`,
  ].join('\n'));
  const manifest = path.join(fixture, 'release.json');
  fs.writeFileSync(manifest, JSON.stringify({ backend }));
  return { fixture, manifest };
}

function runPreflight(fixture, manifest, ...args) {
  return spawnSync(process.execPath, [
    path.join(fixture, 'automation/release/client_cutover_preflight.mjs'),
    ...args,
  ], {
    cwd: fixture,
    encoding: 'utf8',
    env: { ...process.env, FESTAPP_RELEASE_MANIFEST: manifest ?? '' },
  });
}

test('self-hosted canonical cutover preflight binds manifest, key, generation and generated clients', () => {
  const origin = 'https://api.festapp.net';
  const key = jwt({ iss: 'supabase', role: 'anon' });
  const generation = 'selfhost_cutover_v1';
  const authStorageKey = 'sb-legacy-cloud-auth-token';
  const anonKeySha256 = crypto.createHash('sha256').update(key).digest('hex');
  const { fixture, manifest } = makePreflightFixture({
    origin, key, generation, authStorageKey,
    backend: {
      mode: 'self-hosted',
      releaseIntent: 'canonical-cutover',
      supabaseOrigin: origin,
      anonKeySha256,
      installationGeneration: generation,
      authStorageKey,
      authSiteUrl: 'https://app.example.test',
      authRedirectUrls: [
        'https://app.example.test/reset-password',
        'https://app.example.test/resetPassword',
      ],
      allowedWebOrigins: ['https://app.example.test'],
    },
  });
  try {
    const passed = runPreflight(fixture, manifest, '--require-canonical-cutover');
    assert.equal(passed.status, 0, passed.stderr);

    const missingManifest = runPreflight(fixture, null, '--require-canonical-cutover');
    assert.notEqual(missingManifest.status, 0);

    const configPath = path.join(fixture, 'automation/project.conf');
    const validConfig = fs.readFileSync(configPath, 'utf8');
    fs.writeFileSync(configPath, validConfig.replace(
      /^PUSH_APP_GENERATION=.*$/m, 'PUSH_APP_GENERATION=',
    ));
    const missingGeneration = runPreflight(fixture, manifest, '--require-canonical-cutover');
    assert.notEqual(missingGeneration.status, 0);
    assert.match(missingGeneration.stderr, /non-empty PUSH_APP_GENERATION/);
    fs.writeFileSync(configPath, validConfig.replace(
      /^SUPABASE_AUTH_STORAGE_KEY=.*$/m, 'SUPABASE_AUTH_STORAGE_KEY=',
    ));
    const missingAuthKey = runPreflight(fixture, manifest, '--require-canonical-cutover');
    assert.notEqual(missingAuthKey.status, 0);
    assert.match(missingAuthKey.stderr, /explicit SUPABASE_AUTH_STORAGE_KEY/);
    fs.writeFileSync(configPath, validConfig);

    const flutterPath = path.join(fixture, 'lib/app_config.dart');
    const validFlutter = fs.readFileSync(flutterPath, 'utf8');
    fs.writeFileSync(flutterPath, validFlutter.replace(origin, 'https://stale.example.test'));
    const staleFlutter = runPreflight(fixture, manifest, '--require-canonical-cutover');
    assert.notEqual(staleFlutter.status, 0);
    assert.match(staleFlutter.stderr, /generated Flutter Supabase origin is stale/);
    fs.writeFileSync(flutterPath, validFlutter);

    const webPath = path.join(fixture, 'web_client/src/app_config.js');
    const validWeb = fs.readFileSync(webPath, 'utf8');
    fs.writeFileSync(webPath, validWeb.replace(key, 'stale-anon-key'));
    const staleWeb = runPreflight(fixture, manifest, '--require-canonical-cutover');
    assert.notEqual(staleWeb.status, 0);
    assert.match(staleWeb.stderr, /generated web anon key is stale/);
    fs.writeFileSync(webPath, validWeb);

    const wrongManifest = JSON.parse(fs.readFileSync(manifest, 'utf8'));
    wrongManifest.backend.anonKeySha256 = '0'.repeat(64);
    fs.writeFileSync(manifest, JSON.stringify(wrongManifest));
    const mismatch = runPreflight(fixture, manifest, '--require-canonical-cutover');
    assert.notEqual(mismatch.status, 0);
    assert.match(mismatch.stderr, /anon-key digest mismatch/);
  } finally {
    fs.rmSync(fixture, { recursive: true, force: true });
  }
});

test('canonical cutover mode refuses an otherwise valid Supabase Cloud manifest', () => {
  const ref = 'abcdefghijklmnopqrst';
  const origin = `https://${ref}.supabase.co`;
  const key = jwt({ iss: 'supabase', role: 'anon', ref });
  const authStorageKey = `sb-${ref}-auth-token`;
  const anonKeySha256 = crypto.createHash('sha256').update(key).digest('hex');
  const { fixture, manifest } = makePreflightFixture({
    origin, key, generation: '', authStorageKey,
    backend: {
      mode: 'supabase-cloud',
      releaseIntent: 'canonical-cutover',
      supabaseOrigin: origin,
      anonKeySha256,
      installationGeneration: '',
      authStorageKey,
      authSiteUrl: 'https://app.example.test',
      authRedirectUrls: [
        'https://app.example.test/reset-password',
        'https://app.example.test/resetPassword',
      ],
      allowedWebOrigins: ['https://app.example.test'],
    },
  });
  try {
    const result = runPreflight(fixture, manifest, '--require-canonical-cutover');
    assert.notEqual(result.status, 0);
    assert.match(result.stderr, /refuses a Supabase Cloud backend/);
  } finally {
    fs.rmSync(fixture, { recursive: true, force: true });
  }
});
