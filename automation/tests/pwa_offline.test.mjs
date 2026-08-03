#!/usr/bin/env node

import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const projectRoot = path.resolve(import.meta.dirname, '../..');
const tempRoot = await mkdtemp(path.join(tmpdir(), 'festapp-pwa-'));

try {
  await mkdir(path.join(tempRoot, 'assets'), { recursive: true });
  await writeFile(path.join(tempRoot, 'flutter'), '<html>flutter</html>');
  await writeFile(path.join(tempRoot, 'webclient'), '<html>web</html>');
  await writeFile(path.join(tempRoot, 'main.dart.js'), 'main');
  await writeFile(path.join(tempRoot, 'main.dart.1.2.3-4.js'), 'duplicate');
  await writeFile(path.join(tempRoot, 'flutter_service_worker.js'), 'obsolete');
  await writeFile(path.join(tempRoot, '_worker.js'), 'server only');
  await writeFile(path.join(tempRoot, 'assets', 'translation.json'), '{}');

  const result = spawnSync(process.execPath, [
    path.join(projectRoot, 'automation/generate_pwa_service_worker.mjs'),
    tempRoot,
    '1.2.3+4',
  ], { encoding: 'utf8' });

  assert.equal(result.status, 0, result.stderr);
  const worker = await readFile(path.join(tempRoot, 'festapp_service_worker.js'), 'utf8');
  assert.match(worker, /festapp-app-shell-1\.2\.3\+4/);
  assert.match(worker, /"\/flutter\?pwa-cache=1"/);
  assert.match(worker, /"\/webclient\?pwa-cache=1"/);
  assert.match(worker, /"\/main\.dart\.js"/);
  assert.match(worker, /"\/assets\/translation\.json"/);
  assert.doesNotMatch(worker, /main\.dart\.1\.2\.3-4\.js/);
  assert.doesNotMatch(worker, /"\/flutter_service_worker\.js"/);
  assert.doesNotMatch(worker, /"\/_worker\.js"/);
  assert.match(worker, /request\.mode === 'navigate'/);
  assert.match(worker, /cache\.match\(request, \{ ignoreSearch: true \}\)/);
  assert.match(worker, /event\.data === 'SKIP_WAITING'/);
  assert.match(worker, /url\.pathname === '\/festapp-version\.json'/);
  assert.match(worker, /url\.origin === 'https:\/\/fonts\.gstatic\.com'/);
  assert.match(worker, /festapp-used-fonts-v1/);
  assert.match(worker, /cache\.put\(request, response\.clone\(\)\)/);
  console.log('pwa_offline.test: ok');
} finally {
  await rm(tempRoot, { recursive: true, force: true });
}
