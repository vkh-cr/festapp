#!/usr/bin/env node

import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

const buildDir = path.resolve(process.argv[2] || 'build/web');
const expectedVersion = process.argv[3];
if (!expectedVersion) {
  throw new Error('Usage: verify_web_build.mjs <build-dir> <expected-version>');
}
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

const [flutterHtml, main, versionedMain, worker] = await Promise.all([
  readFile(path.join(buildDir, 'flutter'), 'utf8'),
  readFile(path.join(buildDir, 'main.dart.js')),
  readFile(path.join(buildDir, manifest.main)),
  readFile(path.join(buildDir, 'festapp_service_worker.js'), 'utf8'),
]);
assert.match(
  flutterHtml,
  new RegExp(`window\\.__FESTAPP_BUILD_VERSION__\\s*=\\s*"${escapedVersion}"`),
  'Flutter HTML has a different build version',
);
assert.deepEqual(versionedMain, main, 'versioned and canonical main bundles differ');
assert.match(
  worker,
  new RegExp(`const BUILD_VERSION = "${escapedVersion}"`),
  'service worker has a different build version',
);
assert.match(worker, /FESTAPP_QUERY_BUILD_VERSION/);

console.log(`verify_web_build: ok (${expectedVersion})`);
