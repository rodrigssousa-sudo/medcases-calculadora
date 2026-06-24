/* ============================================================
   MedCases Pro — Service Worker v5.0
   Estratégia: STALE-WHILE-REVALIDATE (Cache-First + Background Sync)
   ─────────────────────────────────────────────────────────────
   PROBLEMA RESOLVIDO: "Cold Start Offline" na WebView Mobile.
   A estratégia Network-First anterior bloqueava o carregamento
   completo quando o app era aberto sem internet, pois a WebView
   nativa barrava o request antes do fallback do SW agir.

   SOLUÇÃO: Cache-First garante resposta IMEDIATA do cache local
   em qualquer condição de rede (modo avião, rede lenta, offline).
   A atualização ocorre em segundo plano, sem bloquear o usuário.

   FLUXO POR CENÁRIO:
   ┌─────────────────────────────────┬───────────────────────────────┐
   │ Cenário                         │ Comportamento                 │
   ├─────────────────────────────────┼───────────────────────────────┤
   │ Asset no cache + internet ok    │ Cache imediato + update bg    │
   │ Asset no cache + offline        │ Cache imediato (sem update)   │
   │ Asset ausente do cache + online │ Fetch rede + salva no cache   │
   │ Navegação + offline             │ Força ./index.html do cache   │
   └─────────────────────────────────┴───────────────────────────────┘
============================================================ */

const CACHE_VERSION   = 'medcases-v6';
const CACHE_NAME      = `medcases-calc-${CACHE_VERSION}`;

/* ── Lista canônica de 23 assets pré-cacheados no install ─── */
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './css/medcases-ux-v2.css',
  './js/medcases-ux-v2.js',
  './js/hub-accordion.js',
  './js/elec-calc.js',
  './js/deeplink-router.js',
  './database/interacoes.js',
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

/* ============================================================
   INSTALL — Pre-caching atômico de todos os assets críticos
   event.waitUntil garante que o SW só avança para 'activate'
   após o cache estar 100% populado com sucesso.
============================================================ */
self.addEventListener('install', (event) => {
  console.log(`[SW ${CACHE_VERSION}] Install: pré-cacheando ${ASSETS_TO_CACHE.length} assets.`);

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE))
      .then(() => {
        console.log(`[SW ${CACHE_VERSION}] Pre-cache concluído. Ativando imediatamente.`);
        /* skipWaiting força ativação imediata mesmo com aba já aberta,
           garantindo que o novo SW tome controle sem aguardar reload */
        return self.skipWaiting();
      })
      .catch((err) => {
        /* Falha no pre-cache é logada mas NÃO cancela a instalação —
           o SW ainda funciona com os assets que conseguiu cachear */
        console.warn(`[SW ${CACHE_VERSION}] Aviso: pre-cache parcial.`, err);
      })
  );
});

/* ============================================================
   ACTIVATE — Expurgo cirúrgico de caches de versões anteriores
   Mantém APENAS o CACHE_NAME atual; deleta todos os demais.
   clients.claim() faz o SW assumir controle de todas as abas
   abertas IMEDIATAMENTE, sem precisar de refresh do usuário.
============================================================ */
self.addEventListener('activate', (event) => {
  console.log(`[SW ${CACHE_VERSION}] Activate: limpando caches obsoletos.`);

  event.waitUntil(
    caches.keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames.map((name) => {
            if (name !== CACHE_NAME) {
              console.log(`[SW ${CACHE_VERSION}] Expurgando cache obsoleto: "${name}"`);
              return caches.delete(name);
            }
          })
        )
      )
      .then(() => {
        console.log(`[SW ${CACHE_VERSION}] Ativo. Assumindo controle de todos os clients.`);
        return self.clients.claim();
      })
  );
});

/* ============================================================
   FETCH — Estratégia STALE-WHILE-REVALIDATE
   ─────────────────────────────────────────────────────────────
   Só intercepta requests GET. POST/PUT/DELETE passam direto.
============================================================ */
self.addEventListener('fetch', (event) => {

  /* Ignora métodos não-GET (POST, PUT, DELETE, etc.) */
  if (event.request.method !== 'GET') return;

  /* Ignora URLs de outras origens (analytics, CDN externo, etc.)
     para evitar erros de CORS no cache */
  const requestUrl = new URL(event.request.url);
  if (requestUrl.origin !== self.location.origin) return;

  /* ── Caso especial: requests de NAVEGAÇÃO (document) ────────
     Aplica Stale-While-Revalidate com fallback garantido para
     ./index.html — resolve o Cold Start Offline na WebView.     */
  if (event.request.mode === 'navigate') {
    event.respondWith(handleNavigationRequest(event.request));
    return;
  }

  /* ── Caso geral: assets estáticos (JS, CSS, imagens, etc.) ── */
  event.respondWith(staleWhileRevalidate(event.request));
});

/* ============================================================
   HANDLER: Stale-While-Revalidate (core da nova estratégia)
   ─────────────────────────────────────────────────────────────
   1. Abre o cache e busca o asset imediatamente (síncrono ao
      respondWith — garante Cold Start Offline).
   2. SEMPRE dispara um fetch em segundo plano para atualizar
      o cache (sem bloquear a resposta ao cliente).
   3. Se NÃO houver cache: aguarda a rede normalmente.
   4. Se a rede também falhar sem cache: retorna Response 503.
============================================================ */
async function staleWhileRevalidate(request) {
  const cache        = await caches.open(CACHE_NAME);
  const cachedResponse = await cache.match(request);

  /* ── Dispara atualização em segundo plano (não-bloqueante) ── */
  const networkUpdatePromise = fetch(request.clone())
    .then((networkResponse) => {
      /* Só cacheia respostas válidas (status 200, tipo basic/cors) */
      if (
        networkResponse &&
        networkResponse.status === 200 &&
        (networkResponse.type === 'basic' || networkResponse.type === 'cors')
      ) {
        cache.put(request, networkResponse.clone());
        console.log(`[SW ${CACHE_VERSION}] Cache atualizado em background: ${request.url}`);
      }
      return networkResponse;
    })
    .catch(() => {
      /* Silencia erros de rede na atualização de background —
         o usuário já recebeu a cópia do cache, não é erro fatal */
    });

  /* ── Retorna do cache IMEDIATAMENTE se disponível ─────────── */
  if (cachedResponse) {
    /* O background fetch já foi disparado acima — apenas retorna
       a cópia stale sem aguardar a rede */
    return cachedResponse;
  }

  /* ── Cache miss: aguarda a rede (primeiro acesso ao asset) ── */
  try {
    const networkResponse = await networkUpdatePromise;
    if (networkResponse) return networkResponse;
    throw new Error('Resposta de rede inválida');
  } catch (err) {
    console.warn(`[SW ${CACHE_VERSION}] Cache miss + rede indisponível: ${request.url}`);
    /* Retorna 503 estruturado para que o app trate graciosamente */
    return new Response(
      JSON.stringify({ error: 'offline', message: 'Asset não disponível offline.' }),
      {
        status: 503,
        statusText: 'Service Unavailable',
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}

/* ============================================================
   HANDLER: Navegação (document requests / mode: navigate)
   ─────────────────────────────────────────────────────────────
   Resolve o Cold Start Offline da WebView:
   - Se ./index.html estiver no cache → retorna imediatamente
     E inicia atualização em background.
   - Se não estiver no cache → tenta a rede.
   - Se tudo falhar → 503 com mensagem amigável.
============================================================ */
async function handleNavigationRequest(request) {
  const cache             = await caches.open(CACHE_NAME);
  /* Sempre tenta o index.html canônico para navegação,
     independente da URL exata (SPA routing) */
  const cachedIndex       = await cache.match('./index.html');

  /* ── Background revalidation do index.html ─────────────────── */
  const revalidateIndex = fetch(request.clone())
    .then((resp) => {
      if (resp && resp.status === 200) {
        cache.put('./index.html', resp.clone());
        console.log(`[SW ${CACHE_VERSION}] index.html atualizado em background.`);
      }
      return resp;
    })
    .catch(() => {
      /* Offline — revalidação silenciosa, sem impacto ao usuário */
    });

  /* ── Retorna cache imediatamente (Cold Start Offline fix) ─── */
  if (cachedIndex) {
    return cachedIndex;
  }

  /* ── Sem cache de index.html: aguarda rede ────────────────── */
  try {
    const networkResp = await revalidateIndex;
    if (networkResp && networkResp.status === 200) return networkResp;
    throw new Error('Falha na navegação via rede');
  } catch (err) {
    console.error(`[SW ${CACHE_VERSION}] Falha crítica de navegação: offline + sem cache.`, err);
    return new Response(
      `<!DOCTYPE html>
       <html lang="pt-BR">
         <head><meta charset="UTF-8"><title>MedCases Pro — Offline</title>
           <style>
             body{font-family:system-ui,sans-serif;display:flex;align-items:center;
                  justify-content:center;min-height:100vh;margin:0;
                  background:#0f172a;color:#e2e8f0;text-align:center;padding:1rem}
             h1{font-size:1.5rem;margin-bottom:.5rem}
             p{color:#94a3b8;font-size:.95rem;max-width:320px}
             span{font-size:3rem;display:block;margin-bottom:1rem}
           </style>
         </head>
         <body>
           <div>
             <span>📶</span>
             <h1>MedCases Pro — Offline</h1>
             <p>Sem conexão e sem cache local. Conecte-se à internet uma vez para ativar o modo offline.</p>
           </div>
         </body>
       </html>`,
      {
        status: 503,
        statusText: 'Service Unavailable',
        headers: { 'Content-Type': 'text/html; charset=utf-8' }
      }
    );
  }
}
