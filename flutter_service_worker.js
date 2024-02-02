'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/assets/images/map/ball.svg": "061bde98a15c0f2f3818195d9cce8a5f",
"assets/assets/images/map/conversation.svg": "5f53e729612a0e78a09e7d3c0fd53fd6",
"assets/assets/images/map/grass.svg": "fe32d32a171a6e76a8a7088644b07e21",
"assets/assets/images/map/wine.svg": "d2c55fa3b4051c39d87edee9a280a50e",
"assets/assets/images/map/bed.svg": "c930d46ac91a70932bd61e2e17033744",
"assets/assets/images/map/church.svg": "d2840a23cbad788040bf5a41a9e88dbe",
"assets/assets/images/map/food.svg": "41a9921e7a33d4ed62eb7fb0b8f176e7",
"assets/assets/images/map/beer.svg": "3884ec5eef24a8634310eaa4b35d8b45",
"assets/assets/images/map/atm.svg": "693a9abb7145add2961453afa3f0ac4c",
"assets/assets/images/map/tools.svg": "5f6bbbef105b3d381322da02d6beef43",
"assets/assets/images/map/card.svg": "77d6cd4a052dbdaad1c5da8a5e3f1375",
"assets/assets/images/map/coffee.svg": "75c95a698eb7162db5342b082d751edf",
"assets/assets/images/map/cross.svg": "aaecd193906a34ea7845c2feef628607",
"assets/assets/images/map/speaker.svg": "92bad3443727dc5acf679cd5e8582db1",
"assets/assets/images/map/cart.svg": "fb6d41303c00806c8e3f59b20351670d",
"assets/assets/images/map/info.svg": "be79865eee723da1a799860658dc439c",
"assets/assets/icons/festappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/festapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/translations/uk.json": "2ce48aeeb5323fe2acf5e4d00a3542b4",
"assets/assets/translations/sk.json": "426951ef72ff567b5124c545cf9a0d63",
"assets/assets/translations/de.json": "7e2efbcf71abe5c6b095a952ec5588a2",
"assets/assets/translations/cs.json": "6d8dd935824c6f4897184470becdf258",
"assets/assets/translations/pl.json": "556b8b02d683220c9c5b5d3ffb515f50",
"assets/assets/translations/en.json": "98d1bcc6121d895cd87836f31cb36902",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/AssetManifest.json": "6a68175927b2614367961ca18b3cefcb",
"assets/NOTICES": "d33e01dc8b1d13c1ed24ac551d570645",
"assets/AssetManifest.bin": "5d3265dbf6c48c8e2843ee127faf4257",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin.json": "9183e6104f87465ae666c4e2be968cad",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/fonts/MaterialIcons-Regular.otf": "35f7429fe4fede35b51698c9e76a65ec",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/quill_html_editor/assets/insert_column_right.png": "fb27c4e3cc557089f79dd1f0cc937d62",
"assets/packages/quill_html_editor/assets/insert_row_below.png": "cea46607b37038f71c0fec22341b80e4",
"assets/packages/quill_html_editor/assets/camera_roll_icon.png": "962f1d57cab7451d4b92b236b1993bd5",
"assets/packages/quill_html_editor/assets/delete_column.png": "62358bf5aa9ac7f18e2411e4a0c63f14",
"assets/packages/quill_html_editor/assets/insert_table.png": "c8f041a07bc6b8e4010ccf93ba4c291d",
"assets/packages/quill_html_editor/assets/delete_row.png": "3a56332918794e49ffca20016948553d",
"assets/packages/quill_html_editor/assets/h2_dark.png": "037de75dfed94244b78e7493c6425586",
"assets/packages/quill_html_editor/assets/h1_dark.png": "aa135c261ba758a3990d4594d982104d",
"assets/packages/quill_html_editor/assets/insert_column_left.png": "114e6cca4b2f60a5eaebe4e574f2c36d",
"assets/packages/quill_html_editor/assets/insert_row_above.png": "80ae3856d5f7415d9957d9a1699ec782",
"assets/packages/quill_html_editor/assets/scripts/quill_2.0.0_4_min.js": "3f4b931496920ee12125e575f1c15dfa",
"assets/packages/quill_html_editor/assets/edit_table.png": "6a51397f56e90d98ae0b46a2e359676f",
"assets/packages/quill_html_editor/assets/delete_table.png": "37e148071ce0a306a27f296369e52f40",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "f2163b9d4e6f1ea52063f498c8878bb9",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"manifest.json": "c003c8c2a024bb4d42a1ee2a15cd4ad3",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"index.html": "0817c03473216f71e945e3e8b3e7a69d",
"/": "0817c03473216f71e945e3e8b3e7a69d",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"site.webmanifest": "b9aa277fcfc34c31db6c7a7ea3469b8c",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js": "11a3e5d64efd0c6ed1bee3ae172d8a35",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"version.json": "23f43d6b2b4c9521539a8b52ab40bfbe",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
