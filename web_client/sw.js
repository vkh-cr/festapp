const CACHE_NAME = 'festapp-image-cache-v1';

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    const request = event.request;
    const url = new URL(request.url);

    // Standard check for image destination
    // This covers <img> tags, CSS background-images, etc.
    // We also check file extensions as a fallback for some edge cases
    const isImage = request.destination === 'image' || 
                    url.pathname.match(/\.(png|jpg|jpeg|svg|gif|webp|ico)$/i);

    if (isImage) {
        event.respondWith(
            caches.open(CACHE_NAME).then((cache) => {
                return cache.match(request).then((cachedResponse) => {
                    // Return cached response if found
                    if (cachedResponse) {
                        return cachedResponse;
                    }

                    // Network request
                    return fetch(request).then((networkResponse) => {
                        // Check for valid response.
                        // allow status 200 (OK)
                        // allow type 'opaque' (status 0) for cross-origin images (e.g. CDN, external sites)
                        if (!networkResponse || (networkResponse.status !== 200 && networkResponse.type !== 'opaque')) {
                            return networkResponse;
                        }

                        // Clone and cache
                        const responseToCache = networkResponse.clone();
                        cache.put(request, responseToCache);
                        
                        return networkResponse;
                    });
                });
            })
        );
    }
});
