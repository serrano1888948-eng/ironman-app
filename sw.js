const CACHE = 'ironman-v1';
const FILES = [
  '/ironman-app/',
  '/ironman-app/index.html',
  '/ironman-app/manifest.json',
  '/ironman-app/icon.svg'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
