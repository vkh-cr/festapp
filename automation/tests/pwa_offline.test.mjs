#!/usr/bin/env node

import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import vm from 'node:vm';

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
  assert.match(worker, /url\.origin === 'https:\/\/fonts\.googleapis\.com'/);
  assert.match(worker, /festapp-used-fonts-v1/);
  assert.match(worker, /cache\.put\(request, response\.clone\(\)\)/);

  const handlers = {};
  const fontUrl = 'https://fonts.gstatic.com/s/notocoloremoji/test.woff2';
  const cachedFont = new Response('cached emoji font');
  const cachedShell = new Response('<html>offline shell</html>');
  let networkCalls = 0;
  const cache = {
    addAll: async () => {},
    put: async () => {},
    match: async (request) => {
      const url = typeof request === 'string' ? request : request.url;
      if (url === fontUrl) return cachedFont.clone();
      if (url.includes('/flutter?pwa-cache=1')) return cachedShell.clone();
      return undefined;
    },
  };
  const context = {
    URL,
    Request,
    Response,
    Promise,
    caches: {
      open: async () => cache,
      keys: async () => [],
      delete: async () => true,
    },
    fetch: async () => {
      networkCalls++;
      throw new Error('network must not be used');
    },
    self: {
      location: { origin: 'https://app.test' },
      navigator: { onLine: false },
      clients: { claim: async () => {} },
      skipWaiting: async () => {},
      addEventListener: (type, handler) => { handlers[type] = handler; },
    },
  };
  vm.runInNewContext(worker, context);

  async function dispatchFetch(request) {
    let responsePromise;
    handlers.fetch({
      request,
      respondWith: (promise) => { responsePromise = promise; },
    });
    assert.ok(responsePromise, `worker did not handle ${request.url}`);
    return responsePromise;
  }

  const fontResponse = await dispatchFetch(new Request(fontUrl));
  assert.equal(await fontResponse.text(), 'cached emoji font');
  const navigation = new Request('https://app.test/csmostrava2026/');
  Object.defineProperty(navigation, 'mode', { value: 'navigate' });
  const shellResponse = await dispatchFetch(navigation);
  assert.equal(await shellResponse.text(), '<html>offline shell</html>');
  const versionResponse = await dispatchFetch(
    new Request('https://app.test/festapp-version.json?t=offline'),
  );
  assert.equal(versionResponse.type, 'error');
  assert.equal(networkCalls, 0);

  const webClientIndex = await readFile(
    path.join(projectRoot, 'web_client/index.html'),
    'utf8',
  );
  assert.match(webClientIndex, /serviceWorker\.register\('\/festapp_service_worker\.js'/);
  assert.doesNotMatch(webClientIndex, /serviceWorker\.getRegistrations\(\)/);
  assert.match(webClientIndex, /performance\.getEntriesByType\('resource'\)/);
  const flutterIndex = await readFile(path.join(projectRoot, 'web/index.html'), 'utf8');
  assert.match(flutterIndex, /await window\.festappOfflineReady/);
  assert.match(flutterIndex, /performance\.getEntriesByType\('resource'\)/);
  console.log('pwa_offline.test: ok');
} finally {
  await rm(tempRoot, { recursive: true, force: true });
}
