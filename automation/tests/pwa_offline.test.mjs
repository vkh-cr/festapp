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
  await writeFile(path.join(tempRoot, 'main.dart.js_7.part.js'), 'deferred');
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
  assert.match(worker, /"\/main\.dart\.js_7\.part\.js"/);
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
  const coreUrls = JSON.parse(worker.match(/const CORE_URLS = (\[[\s\S]*?\]);/)[1]);
  assert.ok(coreUrls.includes('/main.dart.js'));
  assert.ok(coreUrls.includes('/flutter?pwa-cache=1'));
  assert.ok(!coreUrls.includes('/main.dart.js_7.part.js'),
    'deferred chunks must not delay worker activation');

  const handlers = {};
  const fontUrl = 'https://fonts.gstatic.com/s/notocoloremoji/test.woff2';
  const cachedFont = new Response('cached emoji font');
  const cachedShell = new Response('<html>offline shell</html>');
  let networkCalls = 0;
  let serverVersion = '1.2.3+5';
  let cachePutFails = false;
  const cachedPuts = [];
  const deletedCaches = [];
  const navigatedClients = [];
  let claimedExistingClients = 0;
  const cache = {
    addAll: async () => {},
    put: async (request) => {
      if (cachePutFails) throw new Error('storage quota exceeded');
      cachedPuts.push(String(request.url || request));
    },
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
      keys: async () => [
        'festapp-app-shell-1.2.3+3',
        'festapp-app-shell-1.2.3+4',
      ],
      delete: async (name) => {
        deletedCaches.push(name);
        return true;
      },
    },
    fetch: async (request) => {
      networkCalls++;
      const url = String(request.url || request);
      if (url.includes('/festapp-version.json')) {
        return new Response(JSON.stringify({ version: serverVersion }), {
          headers: { 'content-type': 'application/json' },
        });
      }
      if (url.includes('/main.dart.js')) {
        return new Response('recovered current executable');
      }
      throw new Error(`unexpected network request: ${url}`);
    },
    self: {
      location: { origin: 'https://app.test' },
      navigator: { onLine: false },
      clients: {
        claim: async () => { claimedExistingClients++; },
        matchAll: async () => [{
          id: 'older-open-tab',
          postMessage: () => {},
        }],
        get: async (id) => ({
          id,
          url: `https://app.test/${id}`,
          navigate: async () => { navigatedClients.push(id); },
        }),
      },
      skipWaiting: async () => {},
      addEventListener: (type, handler) => { handlers[type] = handler; },
    },
  };
  vm.runInNewContext(worker, context);

  // The tab requesting an update may still run the previous update script,
  // which waits for controllerchange. Navigate just that client once the new
  // worker activates; never seize or reload the other open tabs.
  handlers.message({
    data: 'SKIP_WAITING',
    source: {id: 'updating-tab'},
  });

  // A newly activated worker must not seize an already-open tab or delete the
  // shell that tab is still executing. Both tabs share Cache Storage; doing
  // either can strand the older tab on Flutter's loader when it later asks for
  // a deferred chunk from its own build.
  let activation;
  handlers.activate({ waitUntil: (promise) => { activation = promise; } });
  await activation;
  assert.equal(claimedExistingClients, 0);
  assert.deepEqual(deletedCaches, []);
  assert.deepEqual(navigatedClients, ['updating-tab']);

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

  // An incomplete/stale app-shell must never fill an executable Flutter chunk
  // from a newer deployment. Mixing main.dart.js generations leaves the app
  // permanently stuck on its loader; the version cutover owns recovery.
  context.self.navigator.onLine = true;
  const missingChunkResponse = await dispatchFetch(
    new Request('https://app.test/main.dart.js_99.part.js'),
  );
  assert.equal(missingChunkResponse.type, 'error');
  assert.equal(networkCalls, 1);

  // If storage eviction/corruption removed an executable from this worker's
  // own build, recover that exact build from the network instead of leaving
  // every controlled reload permanently stuck on the Flutter loader.
  serverVersion = '1.2.3+4';
  const recoveredMainResponse = await dispatchFetch(
    new Request('https://app.test/main.dart.js'),
  );
  assert.equal(await recoveredMainResponse.text(), 'recovered current executable');
  assert.deepEqual(cachedPuts, ['https://app.test/main.dart.js']);
  assert.equal(networkCalls, 3);

  // A full/evicted cache must not discard an already verified executable.
  // Serving it keeps this reload alive even if persistence cannot self-heal.
  cachePutFails = true;
  const uncachedMainResponse = await dispatchFetch(
    new Request('https://app.test/main.dart.js_7.part.js'),
  );
  assert.equal(await uncachedMainResponse.text(), 'recovered current executable');
  assert.deepEqual(cachedPuts, ['https://app.test/main.dart.js']);
  assert.equal(networkCalls, 5);

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
  assert.match(flutterIndex, /window\.recoverFestappStartup\('bootstrap-error'\)/);
  assert.match(flutterIndex, /festapp-app-ready/);
  const updatePrompt = await readFile(
    path.join(projectRoot, 'web/festapp_update_prompt.js'),
    'utf8',
  );
  assert.match(updatePrompt, /function recoverStalledStartup\(reason\)/);
  assert.match(updatePrompt, /scheduleStartupRecovery\(\)/);
  assert.match(updatePrompt, /startupRecoveryStorageKey/);
  assert.match(updatePrompt, /navigator\.onLine === false/);
  assert.match(updatePrompt, /FESTAPP_CLIENT_VERSION/);
  const networkReload = updatePrompt.match(
    /async function prepareNetworkReload\(\) \{[\s\S]*?\n  \}/,
  )?.[0];
  assert.ok(networkReload);
  assert.match(networkReload, /registration\.update\(\)/);
  assert.doesNotMatch(networkReload, /unregister\(\)/);
  assert.doesNotMatch(networkReload, /caches\.delete|festapp-app-shell-/);
  console.log('pwa_offline.test: ok');
} finally {
  await rm(tempRoot, { recursive: true, force: true });
}
