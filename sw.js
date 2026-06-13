const CACHE = 'ironman-v2';
const FILES = [
  '/ironman-app/',
  '/ironman-app/index.html',
  '/ironman-app/manifest.json',
  '/ironman-app/icon.svg'
];

// URLs que NUNCA devem ser cacheadas (Firebase + APIs externas)
const BYPASS = [
  'firebaseio.com',
  'googleapis.com',
  'gstatic.com',
  'firebaseapp.com',
  'google.com'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(FILES))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = e.request.url;

  // Firebase e APIs externas — sempre vai para a rede, nunca cache
  if (BYPASS.some(domain => url.includes(domain))) {
    e.respondWith(fetch(e.request));
    return;
  }

  // Arquivos do app — cache first, fallback para rede
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
