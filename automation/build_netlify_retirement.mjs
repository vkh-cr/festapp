#!/usr/bin/env node
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const [tenantId, requestedOutput] = process.argv.slice(2);
assert.match(tenantId ?? '', /^[a-z][a-z0-9_-]{0,63}$/, 'invalid tenant ID');
assert.ok(requestedOutput, 'usage: build_netlify_retirement.mjs TENANT OUTPUT_DIR');

const registry = JSON.parse(fs.readFileSync(
  path.join(root, 'automation/netlify-retirements.json'),
  'utf8',
));
assert.equal(registry.version, 1, 'unsupported retirement registry version');
assert.ok(Array.isArray(registry.sites), 'retirement registry sites must be an array');
const site = registry.sites.find((entry) => entry.tenant_id === tenantId);
assert.ok(site, `unregistered Netlify retirement tenant: ${tenantId}`);
assert.match(site.site_id, /^[0-9a-f-]{36}$/, 'invalid Netlify site ID');

const legacy = new URL(site.legacy_origin);
const canonical = new URL(site.canonical_origin);
for (const [label, value] of [['legacy', legacy], ['canonical', canonical]]) {
  assert.equal(value.protocol, 'https:', `${label} origin must use HTTPS`);
  assert.equal(value.pathname, '/', `${label} value must be an origin`);
  assert.equal(value.search, '', `${label} origin must not contain a query`);
  assert.equal(value.hash, '', `${label} origin must not contain a fragment`);
}
assert.notEqual(legacy.origin, canonical.origin, 'legacy and canonical origins must differ');

const output = path.resolve(requestedOutput);
assert.ok(!fs.existsSync(output), `refusing to overwrite retirement output: ${output}`);
fs.mkdirSync(output, { recursive: true, mode: 0o700 });
const workerTemplate = fs.readFileSync(
  path.join(root, 'automation/assets/netlify-retire-worker.template.js'),
  'utf8',
);
const workerMarker = '__FESTAPP_CANONICAL_ORIGIN__';
assert.equal(workerTemplate.split(workerMarker).length, 2,
  'retirement worker template must contain exactly one canonical-origin marker');
fs.writeFileSync(
  path.join(output, 'netlify-retire-worker.js'),
  workerTemplate.replace(workerMarker, JSON.stringify(canonical.origin)),
  { mode: 0o600 },
);

const workerRoutes = [
  'festapp_service_worker.js',
  'flutter_service_worker.js',
];
const redirects = [
  ...workerRoutes.map((route) => `[[redirects]]
  from = "${legacy.origin}/${route}"
  to = "/netlify-retire-worker.js"
  status = 200
  force = true
`),
  `[[redirects]]
  from = "${legacy.origin}/push/*"
  to = "/netlify-retire-worker.js"
  status = 200
  force = true
`,
  `[[redirects]]
  from = "${legacy.origin}/*"
  to = "${canonical.origin}/:splat"
  status = 301
  force = true
`,
].join('\n');

fs.writeFileSync(path.join(output, 'netlify.toml'), `[build]
  publish = "."

${redirects}
[[headers]]
  for = "/netlify-retire-worker.js"
  [headers.values]
    Cache-Control = "no-store, max-age=0"
    Content-Type = "application/javascript; charset=utf-8"
`, { mode: 0o600 });

fs.writeFileSync(path.join(output, 'retirement.json'), `${JSON.stringify({
  version: 1,
  tenant_id: site.tenant_id,
  site_id: site.site_id,
  legacy_origin: legacy.origin,
  canonical_origin: canonical.origin,
  behavior: 'path-and-query-preserving-301-with-worker-retirement',
}, null, 2)}\n`, { mode: 0o600 });

process.stdout.write(`${JSON.stringify({ output, ...site })}\n`);
