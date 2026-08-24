#!/usr/bin/env node

import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const buildDir = path.resolve(process.argv[2] || 'build/web');
const expectedVersion = process.argv[3];
const configPath = path.resolve(process.argv[4] || 'automation/project.conf');
const target = process.argv[5] || 'cloudflare';
if (!expectedVersion) {
  throw new Error('Usage: verify_web_build.mjs <build-dir> <expected-version> [project-conf] [cloudflare|static]');
}
assert.ok(['cloudflare', 'static'].includes(target), `unsupported deploy target: ${target}`);
const escapedVersion = expectedVersion.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const manifest = JSON.parse(await readFile(
  path.join(buildDir, 'festapp-version.json'),
  'utf8',
));
assert.equal(manifest.version, expectedVersion, 'manifest version differs from release version');
assert.equal(
  manifest.main,
  `main.dart.${expectedVersion.replace('+', '-')}.js`,
  'manifest points to an unexpected main bundle',
);

const flutterEntry = target === 'cloudflare' ? 'flutter' : 'flutter.html';
const authBridgeEntry = target === 'cloudflare' ? 'auth_bridge' : 'auth_bridge.html';
const [flutterHtml, main, versionedMain, worker, siteManifestText, authBridge] = await Promise.all([
  readFile(path.join(buildDir, flutterEntry), 'utf8'),
  readFile(path.join(buildDir, 'main.dart.js')),
  readFile(path.join(buildDir, manifest.main)),
  readFile(path.join(buildDir, 'festapp_service_worker.js'), 'utf8'),
  readFile(path.join(buildDir, 'site.webmanifest'), 'utf8'),
  readFile(path.join(buildDir, authBridgeEntry), 'utf8'),
]);
assert.match(
  flutterHtml,
  new RegExp(`window\\.__FESTAPP_BUILD_VERSION__\\s*=\\s*"${escapedVersion}"`),
  'Flutter HTML has a different build version',
);
assert.deepEqual(versionedMain, main, 'versioned and canonical main bundles differ');

const projectConfig = await readFile(configPath, 'utf8');
const configValue = (key) => projectConfig.match(new RegExp(`^${key}=(.*)$`, 'm'))?.[1]
  .trim()
  .replace(/^(['"])(.*)\1$/, '$2');
const supabaseUrl = configValue('SUPABASE_URL');
const expectedAnonKey = configValue('SUPABASE_ANON_KEY');
const expectedProjectRef = supabaseUrl?.match(/^https:\/\/([a-z0-9]+)\.supabase\.co\/?$/)?.[1];
assert.ok(expectedProjectRef, 'project.conf has an invalid SUPABASE_URL');
assert.ok(expectedAnonKey, 'project.conf is missing SUPABASE_ANON_KEY');
const anonPayload = JSON.parse(
  Buffer.from(expectedAnonKey.split('.')[1] || '', 'base64url').toString('utf8'),
);
assert.equal(
  anonPayload.ref,
  expectedProjectRef,
  'project.conf anon JWT belongs to a different Supabase project',
);
assert.ok(
  main.includes(Buffer.from(expectedAnonKey)),
  'compiled Flutter bundle does not contain the configured Supabase anon key',
);
const loadingLogo = configValue('WEB_LOADING_LOGO_ASSET');
assert.ok(loadingLogo, 'project.conf is missing WEB_LOADING_LOGO_ASSET');
assert.match(
  flutterHtml,
  new RegExp(`<img class="initial-logo" src="${loadingLogo.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`),
  'Flutter loader does not use the configured tenant asset',
);
assert.doesNotMatch(flutterHtml, /CSM Ostrava 2026/, 'Flutter loader contains foreign tenant branding');

const flutterConfigPath = path.resolve(path.dirname(configPath), '..', 'lib/app_config.dart');
const flutterConfig = await readFile(flutterConfigPath, 'utf8');
const expectedIsAllUnit = configValue('WEB_IS_ALL_UNIT');
assert.match(
  flutterConfig,
  new RegExp(`static const bool isAllUnit = ${expectedIsAllUnit};`),
  'generated Flutter isAllUnit differs from project.conf',
);
assert.match(
  worker,
  new RegExp(`const BUILD_VERSION = "${escapedVersion}"`),
  'service worker has a different build version',
);
assert.match(worker, /FESTAPP_QUERY_BUILD_VERSION/);

const siteManifest = JSON.parse(siteManifestText);
const configuredStartPath = new URL(siteManifest.start_url, 'https://festapp.test')
  .pathname.replace(/\/$/, '');
const expectedForcedPath = configuredStartPath || null;
const parseForcedPath = (source, owner) => {
  const match = source.match(/const FORCED_OCCASION_PATH = (null|"[^"]+");/);
  assert.ok(match, `${owner} does not expose its forced-occasion routing contract`);
  return JSON.parse(match[1]);
};
assert.equal(
  parseForcedPath(worker, 'service worker'),
  expectedForcedPath,
  'service worker routing differs from site.webmanifest start_url',
);
if (target === 'cloudflare') {
  const edgeWorker = await readFile(path.join(buildDir, '_worker.js'), 'utf8');
  assert.equal(
    parseForcedPath(edgeWorker, 'edge worker'),
    expectedForcedPath,
    'edge worker routing differs from site.webmanifest start_url',
  );
}

const authStorageKey = authBridge.match(
  /const SUPABASE_KEY = '(sb-[a-z0-9]+-auth-token)'/,
)?.[1];
assert.ok(authStorageKey, 'auth bridge does not declare a Supabase storage key');
const webAssetDir = path.join(buildDir, 'web-assets');
const webAssetFiles = (await readdir(webAssetDir)).filter((name) => name.endsWith('.js'));
const webAssetSources = await Promise.all(
  webAssetFiles.map((name) => readFile(path.join(webAssetDir, name), 'utf8')),
);
const bundledAuthKeys = new Set(
  webAssetSources.flatMap((source) =>
    [...source.matchAll(/sb-[a-z0-9]+-auth-token/g)].map((match) => match[0]),
  ),
);
assert.deepEqual(
  [...bundledAuthKeys],
  [authStorageKey],
  'web client and auth bridge disagree on the Supabase session storage key',
);

console.log(`verify_web_build: ok (${expectedVersion})`);
