self.addEventListener("install", () => {
    console.log("Service Worker installing...");
    self.skipWaiting();
  });
  
  self.addEventListener("activate", () => {
    console.log("Service Worker activated.");
  });
  
  self.addEventListener("fetch", (event) => {
    event.respondWith(
      caches.match(event.request).then((cached) => cached || fetch(event.request))
    );
  });