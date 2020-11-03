const cacheVersion = "v1";
const cachefiles = ["/offline.html", "/images/image.jpeg"];

self.addEventListener("install", (e) => {
  console.log("[Service Worker] Install");
});

self.addEventListener("fetch", (e) => {
  console.log("[Service Worker] Fetched resource");
});
