const cacheName = "v1";
const cacheAssets = ["index.html", "/js/index.js"];

self.addEventListener("install", (e) => {
  console.log("sw installed !");
  e.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => cache.addAll(cacheAssets))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("fecth", (e) => {
  console.log("sw fetching !");
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(response);
    })
  );
});
