self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('saucysalamand3r').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/jquery-3.3.1.min.js',
       '/main.js',
       '/manifest.json',
       '/snapcode.svg',
       'style.css'
     ]);
   })
 );
});

self.addEventListener('activate', function(event) {
    console.log("[ServiceWorker] activated");
   });

self.addEventListener('fetch', (event) => {
  if (event.request.method === 'GET') {
    event.respondWith(
      caches.match(event.request)
      .then((cached) => {
        var networked = fetch(event.request)
          .then((response) => {
            let cacheCopy = response.clone()
            caches.open(CACHE_NAME)
              .then(cache => cache.put(event.request, cacheCopy))
            return response;
          })
          .catch(() => caches.match(offlinePage));
        return cached || networked;
      })
    )
  }
  return;
});