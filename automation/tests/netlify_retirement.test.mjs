import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync, spawnSync } from 'node:child_process';

const root = path.resolve(import.meta.dirname, '../..');
const parent = fs.mkdtempSync(path.join(os.tmpdir(), 'festapp-netlify-retirement-test-'));
const output = path.join(parent, 'bundle');
execFileSync('node', [
  path.join(root, 'automation/build_netlify_retirement.mjs'),
  'ticketonline',
  output,
]);

const config = fs.readFileSync(path.join(output, 'netlify.toml'), 'utf8');
const worker = fs.readFileSync(path.join(output, 'netlify-retire-worker.js'), 'utf8');
const evidence = JSON.parse(fs.readFileSync(path.join(output, 'retirement.json'), 'utf8'));
assert.match(config, /https:\/\/vstupenka\.online\/\*/);
assert.match(config, /https:\/\/vstupenky\.online\/:splat/);
assert.match(config, /status = 301/);
assert.match(config, /\/push\/\*/);
assert.match(worker, /unregister|caches/);
assert.match(worker, /const CANONICAL_ORIGIN = "https:\/\/vstupenky\.online";/);
assert.doesNotMatch(worker, /biscup\.festapp\.net/);
assert.equal(evidence.behavior, 'path-and-query-preserving-301-with-worker-retirement');

const overwrite = spawnSync('node', [
  path.join(root, 'automation/build_netlify_retirement.mjs'),
  'ticketonline',
  output,
], { encoding: 'utf8' });
assert.notEqual(overwrite.status, 0, 'generator must refuse to overwrite evidence');

console.log('Netlify retirement contract passed');
