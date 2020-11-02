const cacheVersion = "v1";
const cachefiles = ["/offline.html"];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(cacheVersion)
      .then(cache.addAll(cachefiles))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches
      .match(e.request)
      .then(reponse || fetch(e.request))
      .catch(
        caches.open(cacheVersion).then((cache) => cache.match("offlien.html"))
      )
  );
});
