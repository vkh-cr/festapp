#!/usr/bin/env node

import { access, readdir, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';

const buildDir = path.resolve(process.argv[2] || 'build/web');
const version = process.argv[3];

if (!version) {
  throw new Error('Usage: generate_pwa_service_worker.mjs <build-dir> <version>');
}

const outputName = 'festapp_service_worker.js';
const excludedNames = new Set([
  '.last_build_id',
  '_headers',
  '_redirects',
  '_worker.js',
  'flutter_service_worker.js',
  outputName,
]);

function shouldPrecache(relativePath) {
  const name = path.posix.basename(relativePath);
  if (excludedNames.has(name)) return false;
  if (name === 'NOTICES' || name.endsWith('.map') || name.endsWith('.symbols')) {
    return false;
  }
  // emit_version_manifest.sh keeps this diagnostic copy next to main.dart.js.
  // Caching both would waste several MB without adding an executable resource.
  if (/^main\.dart\..+\.js$/.test(name)) return false;
  return true;
}

async function collectFiles(directory, prefix = '') {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
    const relativePath = path.posix.join(prefix, entry.name);
    if (entry.isDirectory()) {
      files.push(...await collectFiles(path.join(directory, entry.name), relativePath));
    } else if (entry.isFile() && shouldPrecache(relativePath)) {
      files.push(`/${relativePath}`);
    }
  }
  return files;
}

async function firstExisting(candidates) {
  for (const candidate of candidates) {
    try {
      await access(path.join(buildDir, candidate));
      return `/${candidate}`;
    } catch (_) {}
  }
  throw new Error(`Missing required entry point: ${candidates.join(' or ')}`);
}

const flutterEntry = await firstExisting(['flutter', 'flutter.html']);
const webClientEntry = await firstExisting(['webclient', 'index.html']);

const files = await collectFiles(buildDir);
function deploymentUrl(url) {
  if (url === '/flutter') return '/flutter?pwa-cache=1';
  if (url === '/webclient') return '/webclient?pwa-cache=1';
  return url.endsWith('/index.html') ? url.slice(0, -'index.html'.length) : url;
}
const assets = [...new Set(files.map(deploymentUrl))];
const cacheName = `festapp-app-shell-${version}`;
const source = `'use strict';

const CACHE_NAME = ${JSON.stringify(cacheName)};
const CACHE_PREFIX = 'festapp-app-shell-';
const FONT_CACHE_NAME = 'festapp-used-fonts-v1';
const PRECACHE_URLS = ${JSON.stringify(assets, null, 2)};
const FLUTTER_ENTRY = ${JSON.stringify(deploymentUrl(flutterEntry))};
const WEB_CLIENT_ENTRY = ${JSON.stringify(deploymentUrl(webClientEntry))};

async function precacheAtomically() {
  const cache = await caches.open(CACHE_NAME);
  // Small batches avoid opening hundreds of requests at once on mobile.
  for (let index = 0; index < PRECACHE_URLS.length; index += 12) {
    await cache.addAll(PRECACHE_URLS.slice(index, index + 12));
  }
}

self.addEventListener('install', (event) => {
  event.waitUntil(precacheAtomically());
});

self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names
      .filter((name) => (name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME) ||
        name.startsWith('flutter-app-cache'))
      .map((name) => caches.delete(name)));
    await self.clients.claim();
  })());
});

function cachedNavigationTarget(pathname) {
  if (pathname === '/' || pathname.startsWith('/form/')) {
    return WEB_CLIENT_ENTRY;
  }
  return FLUTTER_ENTRY;
}

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  // Cache only font resources the application actually requests. This covers
  // Google Fonts stylesheets/binaries and Flutter's demand-loaded Noto Color
  // Emoji shards without downloading either provider's unused catalog.
  if (url.origin === 'https://fonts.googleapis.com' ||
      url.origin === 'https://fonts.gstatic.com') {
    event.respondWith((async () => {
      const cache = await caches.open(FONT_CACHE_NAME);
      const cached = await cache.match(request);
      if (cached) return cached;
      if (self.navigator.onLine === false) return Response.error();
      const response = await fetch(request);
      if (response.ok || response.type === 'opaque') {
        await cache.put(request, response.clone());
      }
      return response;
    })());
    return;
  }
  if (url.origin !== self.location.origin) return;

  // This is the network truth used to discover a newer completed deployment.
  if (url.pathname === '/festapp-version.json') {
    if (self.navigator.onLine === false) {
      event.respondWith(caches.open(CACHE_NAME).then(async (cache) =>
        (await cache.match('/festapp-version.json')) || Response.error()));
      return;
    }
    event.respondWith(fetch(request));
    return;
  }

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(request, { ignoreSearch: true });
    if (cached) return cached;

    if (request.mode === 'navigate') {
      const exactIndex = await cache.match(url.pathname.replace(/\\/$/, '') + '/index.html');
      if (exactIndex) return exactIndex;
      const entry = await cache.match(cachedNavigationTarget(url.pathname));
      if (entry) return entry;
    }

    // Same-origin resources not known at build time may still work online.
    // They are intentionally not written into the immutable app-shell cache.
    if (self.navigator.onLine === false) return Response.error();
    return fetch(request);
  })());
});
`;

await writeFile(path.join(buildDir, outputName), source);

const totalBytes = (await Promise.all(files.map(async (url) =>
  (await stat(path.join(buildDir, url.slice(1)))).size
))).reduce((sum, size) => sum + size, 0);

console.log(`generate_pwa_service_worker: ${assets.length} files, ${(totalBytes / 1024 / 1024).toFixed(1)} MiB, ${cacheName}`);
