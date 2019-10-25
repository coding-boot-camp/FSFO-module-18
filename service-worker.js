var APP_PREFIX = 'FoodEvent';     
var VERSION = 'version_01';
var PRECACHE = "precache-v1";
var RUNTIME = "runtime";
var CACHE_NAME = APP_PREFIX + VERSION
const FILES_TO_CACHE = [
  "/FSFO-module-18/",
  "/FSFO-module-18/index.html",
  "/FSFO-module-18/events.html",
  "/FSFO-module-18/tickets.html",
  "/FSFO-module-18/schedule.html",
  "/FSFO-module-18/assets/css/style.css",
  "/FSFO-module-18/assets/css/bootstrap.css",
  "/FSFO-module-18/assets/css/tickets.css",
  "/FSFO-module-18/dist/app.bundle.js",
  "/FSFO-module-18/dist/dom.bundle.js",
  "/FSFO-module-18/dist/events.bundle.js",
  "/FSFO-module-18/dist/schedule.bundle.js",
  "/FSFO-module-18/dist/tickets.bundle.js",
  "/FSFO-module-18/dist/schedule.bundle.js",
  "/FSFO-module-18/dist/assets/img/food-table.jpg",
  "/FSFO-module-18/dist/assets/img/grill.jpg",
];



self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(PRECACHE)
      .then(cache => cache.addAll(FILES_TO_CACHE))
      .then(self.skipWaiting())
  );
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener("activate", event => {
  const currentCaches = [PRECACHE, RUNTIME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return caches.open(RUNTIME).then(cache => {
          return fetch(event.request).then(response => {
            return cache.put(event.request, response.clone()).then(() => {
              return response;
            });
          });
        });
      })
    );
  }
});