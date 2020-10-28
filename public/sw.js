const cacheName = "v1";
const offline = "/offline.html";

self.addEventListener("install", (e) => {
  console.log("[Service Worker] Install");
  e.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => cache.addAll(cacheAssets))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("fetch", (e) => {
  console.log("[Service Worker] Fetched resource " + e.request.url);
  e.respondWith(
    caches.match(offline).then((response) => {
      return response || fetch(e.request);
    })
  );
});
