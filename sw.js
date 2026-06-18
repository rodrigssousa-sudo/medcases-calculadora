const CACHE_NAME = 'medcases-calc-v2';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './js/medcases-ux-v2.js',
  './database/analgesicos.js',
  './database/anticoag.js',
  './database/antimicrobianos.js',
  './database/cardio.js',
  './database/endocrino.js',
  './database/gastro.js',
  './database/infusoes.js',
  './database/nefro.js',
  './database/neuro.js',
  './database/obesidade.js',
  './database/pneumo.js',
  './database/prescricoes.js',
  './database/psicofarmacos.js',
  './database/psiquiatria.js',
  './database/reumatologia.js'
];

// Instalação: Popula o Cache Storage com TODAS as especialidades de forma assíncrona
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Pre-caching de todo o ecossistema de bancos de dados.');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Ativação: Limpeza e invalidação de caches obsoletos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('[Service Worker] Expurgando cache obsoleto:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Interceptação com Estratégia Network-First + Aggressive Cache Fallback
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) return cachedResponse;
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
        });
      })
  );
});
