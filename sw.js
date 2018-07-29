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

self.addEventListener('fetch', function(event) {
    console.log("[ServiceWorker} fetching", event.request.url);
   });