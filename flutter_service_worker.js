'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"favicon-32x32.png": "f22159fcf416a06ecfcf5894b9f7b087",
"favicon-16x16.png": "dfe25d2f531eff636316692e14a0e795",
"apple-touch-icon.png": "1231824f1ccc08ce6dc899b69ccf7f83",
"icons/Icon-maskable-512.png": "f01e351a04589eaa46fb472c1d57c03a",
"icons/Icon-maskable-192.png": "4fb792b0cbe4f3675a4cb87d5dbb83d7",
"icons/Icon-192.png": "c227e03773bf059c78871d25181e8e41",
"icons/Icon-512.png": "1197d3dccb8336b06d34991d7d1448d6",
"index.html": "286937ca1147a9beaeebbddc5a7f7354",
"/": "286937ca1147a9beaeebbddc5a7f7354",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"version.json": "8803c388cdd1e8f8a5fce9aedb5b6d5d",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/fonts/MaterialIcons-Regular.otf": "bfb08fa346a09791739a52a53fc12561",
"assets/fonts/RussoOne-Regular.ttf": "8a511841065ce7bd13b845eeea880d6e",
"assets/NOTICES": "f2c32dc0768403a05d8a675d956e562d",
"assets/assets/images/map/tools.svg": "686a58d637148b546ce649bba0734810",
"assets/assets/images/map/beer.svg": "8d53012675f5ddf8db6a21898905c2b8",
"assets/assets/images/map/speaker.svg": "c151dbaad9dddd4acbc9b7721480e3de",
"assets/assets/images/map/food.svg": "dc592c264814004948e42720d05b9c63",
"assets/assets/images/map/grass.svg": "755e8ea454128076deabca164447d163",
"assets/assets/images/map/bed.svg": "ac9964c309059d7c993864e4683ff057",
"assets/assets/images/map/info.svg": "b03210d484d67140422ad795a0d573be",
"assets/assets/images/map/conversation.svg": "5d701da542361241f561672b2b8b6044",
"assets/assets/images/map/ball.svg": "fb4ae47e2510156ed4e31317d949b3dc",
"assets/assets/images/map/coffee.svg": "4fe16524b834ee5341ce9381dc9435b4",
"assets/assets/images/map/cart.svg": "52b1d4523851feccc3dbecb73a420723",
"assets/assets/images/map/cross.svg": "8632a79ec74fe3b5420554b03d53816f",
"assets/assets/images/map/card.svg": "b792666621e85acf0d5f509f6568e8f9",
"assets/assets/images/map/wine.svg": "79cfe8b9d89f3228c4eb03c5af7a2382",
"assets/assets/images/map/atm.svg": "def665e59e95f871450b89c06b8c9394",
"assets/assets/images/map/church.svg": "9794d730828fc93adbace20a2cbfc9c1",
"assets/assets/images/avlogo.svg": "185b21f23be19df5e096aac2df0718b1",
"assets/FontManifest.json": "889097f68582d3a5bdce6b2720c162e5",
"assets/AssetManifest.bin": "78c013bf87fe918b9664ebdd4f43a729",
"assets/AssetManifest.json": "958bd89e723f7c086610b600561d4c96",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"android-chrome-192x192.png": "aefced29f3db758a7d8ee8f95027405f",
"main.dart.js": "f59d2e33a508c6b5c19d78236b8aa305",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"favicon.png": "6fb5d6f862ea45c8e106498c95eacebd",
"manifest.json": "c6c9c26887617d99e1beffc3a481e404",
"android-chrome-512x512.png": "2892310b0218abf14b427060b082b6a3"};
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
