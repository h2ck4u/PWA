const cacheVersion = "v1";
const cachefiles = ["/offline.html", "/images/icon-192x192.png"];

self.addEventListener("install", (e) => {
  console.log("[Service Worker] Install");
});

self.addEventListener("fetch", (e) => {
  console.log("[Service Worker] Fetched resource");
});
