#!/usr/bin/env node
import assert from 'node:assert/strict';
import fs from 'node:fs';

const manifestPath = new URL('./pins.json', import.meta.url);
const pins = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const digestPattern = /^[a-z0-9./_-]+:[A-Za-z0-9._-]+@sha256:[a-f0-9]{64}$/;
const versionPattern = /^\d+(?:\.\d+)+(?: LTS)?$/;

assert.equal(pins.manifestVersion, 1);
assert.equal(pins.architecture, 'linux/amd64');
assert.equal(pins.policy, 'latest-stable-compatible-bundle');
assert.match(pins.supabase.release, /^self-hosted\/v\d+\.\d+\.\d+$/);
assert.match(pins.supabase.commit, /^[a-f0-9]{40}$/);
assert.equal(pins.supabase.postgresMajor, 17);
assert.ok(!stableJson(pins).toLowerCase().includes(':latest'));
for (const [name, version] of Object.entries(pins.host)) {
  assert.match(version, versionPattern, `${name} must be an exact stable version`);
}
for (const [name, image] of Object.entries(pins.supabase.images)) {
  assert.match(image, digestPattern, `${name} must be pinned by tag and amd64 digest`);
}
for (const [name, source] of Object.entries(pins.sources)) {
  assert.match(source, /^https:\/\//, `${name} must cite an HTTPS primary source`);
}
process.stdout.write(`runtime pins valid: ${pins.supabase.release}, ${Object.keys(pins.supabase.images).length} immutable images\n`);

function stableJson(value) {
  if (Array.isArray(value)) return `[${value.map(stableJson).join(',')}]`;
  if (value && typeof value === 'object') {
    return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${stableJson(value[key])}`).join(',')}}`;
  }
  return JSON.stringify(value);
}
