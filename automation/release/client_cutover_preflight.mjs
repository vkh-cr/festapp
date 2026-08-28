#!/usr/bin/env node

import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  parseSupabaseOrigin,
  resolvedAuthStorageKey,
} from '../lib/supabase_client_config.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const configPath = path.join(root, 'automation/project.conf');
const source = fs.readFileSync(configPath, 'utf8');
const value = (key) => source.match(new RegExp(`^${key}=(.*)$`, 'm'))?.[1]
  .trim()
  .replace(/^(['"])(.*)\1$/, '$2') ?? '';
const escapeRegExp = (input) => input.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const supabaseOrigin = parseSupabaseOrigin(value('SUPABASE_URL'));
const anonKey = value('SUPABASE_ANON_KEY');
const configuredAuthStorageKey = value('SUPABASE_AUTH_STORAGE_KEY');
const authStorageKey = resolvedAuthStorageKey(supabaseOrigin, configuredAuthStorageKey);
const installationGeneration = value('PUSH_APP_GENERATION');
const webOrigin = parseSupabaseOrigin(value('WEB_LINK'));
const authRedirectUrls = [`${webOrigin}/reset-password`, `${webOrigin}/resetPassword`];
const anonSha256 = crypto.createHash('sha256').update(anonKey).digest('hex');
const requireCanonicalCutover = process.argv.includes('--require-canonical-cutover');
const payload = JSON.parse(Buffer.from(anonKey.split('.')[1] || '', 'base64url').toString('utf8'));
assert.equal(payload.role, 'anon', 'SUPABASE_ANON_KEY must use the anon role');
assert.equal(payload.iss, 'supabase', 'SUPABASE_ANON_KEY must be issued by Supabase');

const hostname = new URL(supabaseOrigin).hostname;
const cloudRef = hostname.match(/^([a-z0-9]+)\.supabase\.co$/)?.[1];
const backendMode = cloudRef ? 'supabase-cloud' : 'self-hosted';
if (cloudRef) {
  assert.equal(payload.ref, cloudRef, 'SUPABASE_ANON_KEY belongs to a different cloud project');
} else {
  assert.ok(configuredAuthStorageKey, 'self-hosted release requires explicit SUPABASE_AUTH_STORAGE_KEY continuity');
  assert.ok(installationGeneration, 'self-hosted release requires a non-empty PUSH_APP_GENERATION');
}

const manifestValue = process.env.FESTAPP_RELEASE_MANIFEST?.trim();
if (!cloudRef || manifestValue || requireCanonicalCutover) {
  assert.ok(manifestValue, 'release backend validation requires FESTAPP_RELEASE_MANIFEST');
  const manifest = JSON.parse(fs.readFileSync(path.resolve(manifestValue), 'utf8'));
  const backend = manifest.backend;
  assert.ok(backend, 'release manifest is missing its backend contract');
  assert.equal(backend.mode, backendMode, 'release manifest backend mode mismatch');
  assert.equal(backend.supabaseOrigin, supabaseOrigin, 'release manifest Supabase origin mismatch');
  assert.equal(backend.anonKeySha256, anonSha256, 'release manifest anon-key digest mismatch');
  assert.equal(backend.installationGeneration, installationGeneration,
    'release manifest installation generation mismatch');
  assert.equal(backend.authStorageKey, authStorageKey,
    'release manifest auth storage namespace mismatch');
  assert.equal(backend.authSiteUrl, webOrigin, 'release manifest Auth site URL mismatch');
  assert.deepEqual(
    [...(backend.authRedirectUrls ?? [])].sort(),
    [...authRedirectUrls].sort(),
    'release manifest Auth redirect allowlist mismatch',
  );
  assert.deepEqual(
    backend.allowedWebOrigins,
    [webOrigin],
    'release manifest Edge Function CORS allowlist mismatch',
  );
  if (backend.mode === 'self-hosted') {
    const transition = backend.sessionTransition;
    assert.ok(transition, 'self-hosted release manifest is missing its session transition contract');
    assert.equal(transition.strategy, 'refresh-or-reauth',
      'self-hosted session transition must refresh or require normal reauthentication');
    assert.equal(transition.legacyAccessTokenPolicy, 'reject-after-cutover',
      'legacy access tokens must not remain an alternate trust path');
    assert.equal(transition.terminalRefreshPolicy, 'local-sign-out',
      'terminal refresh failures must clear the local session');
    assert.equal(transition.sourceAReauthenticationAllowed, true,
      'the merged source-a cohort must explicitly allow normal reauthentication');
    assert.match(transition.refreshCanaryEvidenceSha256 ?? '', /^[0-9a-f]{64}$/,
      'self-hosted release requires refresh-canary evidence');
  }
  if (requireCanonicalCutover) {
    assert.equal(backend.releaseIntent, 'canonical-cutover',
      'canonical cutover build requires releaseIntent=canonical-cutover');
    assert.equal(backend.mode, 'self-hosted',
      'canonical cutover build refuses a Supabase Cloud backend');
  }
}

const flutterConfig = fs.readFileSync(path.join(root, 'lib/app_config.dart'), 'utf8');
const webConfig = fs.readFileSync(path.join(root, 'web_client/src/app_config.js'), 'utf8');
for (const [text, expression, message] of [
  [flutterConfig, `static const String supabaseUrl = '${escapeRegExp(supabaseOrigin)}';`,
    'generated Flutter Supabase origin is stale'],
  [flutterConfig, `static const String pushAppGeneration = '${escapeRegExp(installationGeneration)}';`,
    'generated Flutter installation generation is stale'],
  [webConfig, `static supabaseUrl = '${escapeRegExp(supabaseOrigin)}';`,
    'generated web Supabase origin is stale'],
  [webConfig, `auth: '${escapeRegExp(authStorageKey)}'`,
    'generated web auth storage namespace is stale'],
]) {
  assert.match(text, new RegExp(expression), message);
}
assert.ok(flutterConfig.includes(anonKey), 'generated Flutter anon key is stale');
assert.ok(webConfig.includes(anonKey), 'generated web anon key is stale');

console.log(JSON.stringify({
  status: 'pass',
  supabase_origin: supabaseOrigin,
  anon_key_sha256: anonSha256,
  auth_storage_key: authStorageKey,
  installation_generation: installationGeneration || null,
  auth_site_url: webOrigin,
  auth_redirect_urls: authRedirectUrls,
  backend_mode: backendMode,
  session_transition: backendMode === 'self-hosted' ? 'refresh-or-reauth' : null,
  canonical_cutover: requireCanonicalCutover,
}));
