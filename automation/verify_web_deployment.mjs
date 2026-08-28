#!/usr/bin/env node

import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

const origin = new URL(process.argv[2]).origin;
const expectedVersion = process.argv[3];
const configPath = path.resolve(process.argv[4] || 'automation/project.conf');
const maxAttempts = Number(process.env.FESTAPP_VERIFY_ATTEMPTS || 30);
const requiredConsecutive = Number(process.env.FESTAPP_VERIFY_CONSECUTIVE || 3);
if (!expectedVersion) {
  throw new Error('Usage: verify_web_deployment.mjs <origin> <expected-version>');
}
const escapedVersion = expectedVersion.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const projectConfig = await readFile(configPath, 'utf8');
const configValue = (key) => projectConfig.match(new RegExp(`^${key}=(.*)$`, 'm'))?.[1]
  .trim()
  .replace(/^(['"])(.*)\1$/, '$2');
const isGitHubPages = configValue('DEPLOY_TARGET') === 'gh-pages';
const legalRoutes = [
  ['PRIVACY_URL', '/privacy/', /<nav aria-label="Právní informace">[\s\S]*<h1>[^<]+<\/h1>/],
  ['PRIVACY_CHOICES_URL', '/privacy/choices/', /<nav aria-label="Právní informace">[\s\S]*<h1>[^<]+<\/h1>/],
  ['TERMS_URL', '/terms/', /<nav aria-label="Právní informace">[\s\S]*<h1>[^<]+<\/h1>/],
  ['SUPPORT_URL', '/support/', /<nav aria-label="Právní informace">[\s\S]*<h1>[^<]+<\/h1>/],
  ['DELETE_ACCOUNT_URL', '/delete-account/', /<h1>Smazání účtu<\/h1>/],
];
for (const [key, expectedPath] of legalRoutes) {
  const value = configValue(key);
  assert.ok(value, `project.conf is missing ${key}`);
  const url = new URL(value);
  assert.equal(url.origin, origin, `${key} differs from the deployed origin`);
  assert.equal(url.pathname, expectedPath, `${key} does not use its canonical path`);
}

function versionFromHtml(html) {
  return html.match(/window\.__FESTAPP_BUILD_VERSION__\s*=\s*"([^"]+)"/)?.[1];
}

function assertRevalidated(response, label) {
  const value = response.headers.get('cache-control') || '';
  if (isGitHubPages) {
    const maxAge = Number(value.match(/(?:^|,)\s*max-age=(\d+)/i)?.[1]);
    assert.ok(
      Number.isInteger(maxAge) && maxAge >= 0 && maxAge <= 600,
      `${label} has an unsafe GitHub Pages cache policy: ${value || '(empty)'}`,
    );
    return;
  }
  assert.match(
    value,
    /(?:no-cache|no-store|max-age=0|must-revalidate)/i,
    `${label} is missing revalidation cache headers: ${value || '(empty)'}`,
  );
}

async function fetchFresh(pathname) {
  const url = new URL(pathname, origin);
  url.searchParams.set('release-probe', `${expectedVersion}-${Date.now()}-${Math.random()}`);
  return fetch(url, {
    cache: 'no-store',
    headers: { 'cache-control': 'no-cache', pragma: 'no-cache' },
  });
}

async function verifyOnce() {
  const [htmlResponse, manifestResponse, mainResponse, workerResponse, ...legalResponses] = await Promise.all([
    fetchFresh(isGitHubPages ? '/' : '/admin'),
    fetchFresh('/festapp-version.json'),
    fetchFresh('/main.dart.js'),
    fetchFresh('/festapp_service_worker.js'),
    ...legalRoutes.map(([, pathname]) => fetchFresh(pathname)),
  ]);
  for (const [label, response] of [
    ['HTML', htmlResponse],
    ['manifest', manifestResponse],
    ['main.dart.js', mainResponse],
    ['service worker', workerResponse],
  ]) {
    assert.equal(response.status, 200, `${label} returned HTTP ${response.status}`);
    assertRevalidated(response, label);
  }
  for (let index = 0; index < legalResponses.length; index++) {
    const response = legalResponses[index];
    const [key] = legalRoutes[index];
    assert.equal(response.status, 200, `${key} returned HTTP ${response.status}`);
    assert.match(response.headers.get('content-type') || '', /^text\/html\b/i, `${key} is not HTML`);
    assertRevalidated(response, key);
  }

  const [html, manifest, main, worker] = await Promise.all([
    htmlResponse.text(),
    manifestResponse.json(),
    mainResponse.arrayBuffer(),
    workerResponse.text(),
  ]);
  const legalBodies = await Promise.all(legalResponses.map((response) => response.text()));
  for (let index = 0; index < legalBodies.length; index++) {
    const [key, , marker] = legalRoutes[index];
    assert.match(legalBodies[index], marker, `${key} resolved to a fallback or incomplete page`);
  }
  assert.equal(new Set(legalBodies).size, legalBodies.length, 'legal routes return duplicate fallback content');
  assert.equal(versionFromHtml(html), expectedVersion, 'HTML version is stale');
  assert.equal(manifest.version, expectedVersion, 'manifest version is stale');
  assert.equal(
    manifest.main,
    `main.dart.${expectedVersion.replace('+', '-')}.js`,
    'manifest points to the wrong main bundle',
  );
  assert.match(
    worker,
    new RegExp(`const BUILD_VERSION = "${escapedVersion}"`),
    'service worker version is stale',
  );

  if (isGitHubPages) {
    const fallbackResponse = await fetchFresh('/admin');
    assert.equal(fallbackResponse.status, 404, 'GitHub Pages SPA fallback must retain its platform 404 status');
    assert.match(fallbackResponse.headers.get('content-type') || '', /^text\/html\b/i, 'GitHub Pages SPA fallback is not HTML');
    assertRevalidated(fallbackResponse, 'GitHub Pages SPA fallback');
    assert.equal(
      versionFromHtml(await fallbackResponse.text()),
      expectedVersion,
      'GitHub Pages SPA fallback version is stale',
    );
  }

  const versionedResponse = await fetchFresh(`/${manifest.main}`);
  assert.equal(versionedResponse.status, 200, 'versioned main bundle is missing');
  assert.deepEqual(
    Buffer.from(await versionedResponse.arrayBuffer()),
    Buffer.from(main),
    'canonical and versioned main bundles differ',
  );
}

let consecutive = 0;
let lastError;
for (let attempt = 1; attempt <= maxAttempts; attempt++) {
  try {
    await verifyOnce();
    consecutive++;
    if (consecutive >= requiredConsecutive) {
      console.log(`verify_web_deployment: ok (${expectedVersion}, ${consecutive} consecutive probes)`);
      process.exit(0);
    }
  } catch (error) {
    consecutive = 0;
    lastError = error;
  }
  await new Promise((resolve) => setTimeout(resolve, 2000));
}

console.error(`verify_web_deployment: FAILED for ${origin} (${expectedVersion})`);
console.error(lastError?.message || lastError);
process.exit(1);
