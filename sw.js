const cacheName = 'myara-cache-v2';
const assets = ['index.html','manifest.json','/'];

self.addEventListener('install', e=>{
  e.waitUntil(caches.open(cacheName).then(cache=>cache.addAll(assets)));
});

self.addEventListener('fetch', e=>{
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
