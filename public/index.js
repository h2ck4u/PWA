self.addEventListener("install", (e) => {
  console.log("[Service Worker] Install");
  e.waitUntil(
    cahes
      .open(cacheName)
      .then((cache) => cache.addAll(cachefiles))
      .then((e) => self.skipWaiting())
  );
});

self.addEventListener("fetch", (e) => {
  console.log("[Service Worker] Fetched resource " + e.request.url);
  e.respondWith(
    caches
      .match(e.request)
      .then((response) => response || fetch(e.request))
      .catch((e) =>
        caches.open(cacheVersion).then((cache) => cache.match("/offline.html"))
      )
  );
});
