/* MEDCASES_PREMIUM_R9B_PURGE_SW_CACHE_CLOSURE_V1_B_R0:start */
// Security closure: old static Premium drug payloads must not survive in CacheStorage.
self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
});
self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map((key) => caches.delete(key)));
    await self.clients.claim();
  })());
});
/* MEDCASES_PREMIUM_R9B_PURGE_SW_CACHE_CLOSURE_V1_B_R0:end */

/* ============================================================
   MedCases Pro — Service Worker v5.2 (BUILD 477)
   Estratégia: STALE-WHILE-REVALIDATE (Cache-First + Background Sync)
   ─────────────────────────────────────────────────────────────
   BUILD 274 — Cache Busting Implacável (ver histórico)
   BUILD 275.1 — Force Cache Bust: CACHE_VERSION → 'medcases-v275'
   BUILD 276 — Total Boot Shutdown: CACHE_VERSION → 'medcases-v276'
   BUILD 475-FORCE-CLEAN: skipWaiting() antes de waitUntil;
     activate com Promise.all purge; clients.claim() imediato.
   BUILD 477-WEBVIEW-HEAL:
   • CACHE_VERSION bumped para 'medcases-v484' → invalida medcases-v476.
   • ASSETS_TO_CACHE: todas as query strings corrigidas de ?v=455 → ?v=484
     (bug crítico: CACHE_NAME era v476 mas assets usavam ?v=455, causando
     falha atômica em cache.addAll() e cache completamente vazio em iOS).
   • js/medcases-router.js adicionado à lista (estava ausente!).
   • Contagem atualizada: 3 raiz + 14 css + 10 js + 30 database = 57 assets.

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

const CACHE_VERSION   = 'medcases-r70-native-header-gap-r1-20260921';
const CACHE_NAME      = `medcases-calc-${CACHE_VERSION}`;
const MIGRATION_POLL_MS = 750;
const LEGACY_MIGRATION_FALLBACK_MS = 20000;
const clientMigrationStates = new Map();
const legacyMigrationAttempts = new Set();
let clientMigrationRun = null;

function migrationDelay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function migrateClientToActiveVersion(client) {
  if (!client || !client.url || typeof client.navigate !== 'function') return;

  let target;
  try {
    target = new URL(client.url);
  } catch (_) {
    return;
  }

  if (target.origin !== self.location.origin) return;
  if (target.searchParams.get('_mc_cache') === CACHE_VERSION) return;

  const requestId = [CACHE_VERSION, client.id || 'client', Date.now()].join(':');
  const startedAt = Date.now();

  while (Date.now() - startedAt < LEGACY_MIGRATION_FALLBACK_MS) {
    try {
      client.postMessage({
        type: 'MEDCASES_CACHE_MIGRATION_STATE_REQUEST',
        version: CACHE_VERSION,
        requestId
      });
    } catch (_) {}

    await migrationDelay(MIGRATION_POLL_MS);

    const state = clientMigrationStates.get(client.id || requestId);
    if (state && state.requestId === requestId && state.canSelfMigrate) {
      clientMigrationStates.delete(client.id || requestId);
      try {
        client.postMessage({
          type: 'MEDCASES_CACHE_MIGRATION_REQUIRED',
          version: CACHE_VERSION
        });
      } catch (_) {}
      return;
    }

    if (state && state.requestId === requestId && state.overlayOpen === false) {
      target.searchParams.set('_mc_cache', CACHE_VERSION);
      clientMigrationStates.delete(client.id || requestId);
      legacyMigrationAttempts.add(client.id || requestId);
      try { await client.navigate(target.toString()); } catch (_) {}
      return;
    }
  }

  const finalState = clientMigrationStates.get(client.id || requestId);
  clientMigrationStates.delete(client.id || requestId);

  /* A protocol-aware document owns its bounded snapshot/reload/restore cycle.
     An older document that reports an open overlay keeps its historical safe
     retry; a truly silent legacy client receives one bounded navigation. */
  if (finalState && finalState.requestId === requestId && finalState.overlayOpen === true) {
    return;
  }

  const clientKey = client.id || requestId;
  if (legacyMigrationAttempts.has(clientKey)) return;
  legacyMigrationAttempts.add(clientKey);
  target.searchParams.set('_mc_cache', CACHE_VERSION);
  try { await client.navigate(target.toString()); } catch (_) {}
}

function startClientMigration() {
  if (clientMigrationRun) return clientMigrationRun;

  clientMigrationRun = (async () => {
    const clients = await self.clients.matchAll({
      type: 'window',
      includeUncontrolled: true
    });

    await Promise.all(clients.map(migrateClientToActiveVersion));
  })().finally(() => {
    clientMigrationRun = null;
  });

  return clientMigrationRun;
}

/* ── Lista canônica de assets pré-cacheados no install ──────
   BUILD 477-WEBVIEW-HEAL: query strings corrigidas para ?v=484.
   js/medcases-router.js adicionado (estava ausente da lista).
   Inclui: 3 raiz + 14 css + 10 js + 30 database = 57 assets
─────────────────────────────────────────────────────────── */
const ASSETS_TO_CACHE = [
  './',

  /* ── Raiz ── */
  './index.html',
  './sw.js',

  /* ── CSS (BUILD 484-CSS-CONSOLIDATION: 14 arquivos → 1 fonte unificada) ── */
  './css/medcases-core-legacy.css?v=484',

  './css/medcases-webview-home-v1.css?v=670-native-header-gap-r1',
  './css/medcases-home-premium-r2.css?v=661-controlled-cache-migration-r15',
  /* ── JS (10 arquivos — stack completa BUILD 477) ── */
  './js/medcases-ux-v2.js?v=667-pull-refresh-40pct-r1',
  './js/hub-accordion.js?v=484',
  './js/medcases-router.js?v=484',
  './js/build240b-accordion-fix.js?v=484',
  './js/calculator-overlay.js?v=670-native-header-gap-r1',
  './js/category-pills.js?v=484',
  './js/elec-calc.js?v=484',
  './js/deeplink-router.js?v=484',
  './js/build272-reactive-engine.js?v=484',
  './js/build283-accessory-bar.js?v=484',

  /* ── Database (30 arquivos — base clínica COMPLETA) ── */
  './database/analgesicos.js?v=484',
  './database/anticoag.js?v=484',
  './database/antimicrobianos.js?v=484',
  './database/cardio.js?v=484',
  './database/endocrino.js?v=484',
  './database/gastro.js?v=484',
  './database/gastro_imuno.js?v=484',
  './database/imuno_corticoide.js?v=484',
  './database/endocrino_glp1.js?v=484',
  './database/infusoes.js?v=484',
  './database/interacoes.js?v=484',
  './database/nefro.js?v=484',
  './database/neuro.js?v=484',
  './database/obesidade.js?v=484',
  './database/pneumo.js?v=484',
  './database/pneumologia.js?v=484',
  './database/alergia_imunologia.js?v=484',
  './database/pneumologia_otorrino.js?v=484',
  './database/neurologia.js?v=484',
  './database/prescricoes.js?v=484',
  './database/psicofarmacos.js?v=r30-free60-security-20260916',
  './database/psiquiatria.js?v=484',
  './database/reumatologia.js?v=484',
  './database/emergencia.js?v=484',
  './database/infectologia.js?v=484',
  './database/sedacao.js?v=484',
  './database/hematologia.js?v=484',
  './database/gastroenterologia.js?v=484',
  './database/cardiologia.js?v=484',
  './database/analgesia_opioides.js?v=484',
];

const CRITICAL_ASSETS = ASSETS_TO_CACHE.slice(0, 5);

/* ============================================================
   INSTALL — Pre-caching atômico de todos os assets críticos
   event.waitUntil garante que o SW só avança para 'activate'
   após o cache estar 100% populado com sucesso.
============================================================ */
/* ============================================================
   BUILD 475-FORCE-CLEAN — INSTALL: skipWaiting() imediato
   Força ativação instantânea sem aguardar o pre-cache completar.
   Garante que iOS WebView receba o novo SW sem ficar preso no
   estado 'waiting' por tabs abertas.
============================================================ */
self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      self.skipWaiting(),
      caches.open(CACHE_NAME)
      .then((cache) =>
        Promise.allSettled(
          CRITICAL_ASSETS.map(async (asset) => {
            const response = await fetch(
              new Request(asset, { cache: 'reload' })
            );

            if (response && response.ok) {
              await cache.put(asset, response.clone());
            }
          })
        )
      )
    ])
  );
});
/* ============================================================
   ACTIVATE — Expurgo cirúrgico de caches de versões anteriores
   Mantém APENAS o CACHE_NAME atual; deleta todos os demais.
   clients.claim() faz o SW assumir controle de todas as abas
   abertas IMEDIATAMENTE, sem precisar de refresh do usuário.
============================================================ */
/* ============================================================
   BUILD 475-FORCE-CLEAN — ACTIVATE: purga absoluta de TODOS
   os caches anteriores + clients.claim() imediato.
   Qualquer cache com nome diferente de CACHE_NAME é deletado
   sem exceção — resolve corrupção de cache no iOS WebView.
============================================================ */
self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    await pruneOldCaches();
    await self.clients.claim();

    // MC-CALC-SW-SAFE-LEGACY-MIGRATION-V3
    // Activation only claims and announces. Client migration starts from a
    // post-controllerchange message, when this worker is fully active.
    const clients = await self.clients.matchAll({
      type: 'window',
      includeUncontrolled: true
    });

    clients.forEach((client) => {
      try {
        client.postMessage({
          type: 'MEDCASES_CACHE_VERSION_ACTIVE',
          version: CACHE_VERSION
        });
      } catch (_) {}
    });
  })());
});
async function pruneOldCaches() {
  const keys = await caches.keys();

  await Promise.all(
    keys
      .filter((key) =>
        key.startsWith('medcases-calc-') &&
        key !== CACHE_NAME
      )
      .map((key) => caches.delete(key))
  );
}

self.addEventListener('message', (event) => {
  const type = event.data && event.data.type;

  if (type === 'MEDCASES_CACHE_MIGRATION_STATE') {
    const sourceId = event.source && event.source.id;
    const requestId = event.data && event.data.requestId;
    if (sourceId && requestId && event.data.version === CACHE_VERSION) {
      clientMigrationStates.set(sourceId, {
        requestId,
        overlayOpen: event.data.overlayOpen === true,
        canSelfMigrate: event.data.canSelfMigrate === true,
        reportedAt: Date.now()
      });
    }
    return;
  }

  if (type === 'MEDCASES_START_CLIENT_MIGRATION') {
    if (event.data.version !== CACHE_VERSION) return;
    event.waitUntil(startClientMigration());
    return;
  }

  if (type === 'MEDCASES_SKIP_WAITING') {
    self.skipWaiting();
    return;
  }

  if (type === 'MEDCASES_PRUNE_OLD_CACHES') {
    event.waitUntil(pruneOldCaches());
  }
});

/* ============================================================
   FETCH — Estratégia STALE-WHILE-REVALIDATE
   ─────────────────────────────────────────────────────────────
   Só intercepta requests GET. POST/PUT/DELETE passam direto.
============================================================ */
self.addEventListener('fetch', (event) => {
  // MEDCASES_MCC1_API_BYPASS_V1
  // Protected API calls must go directly to the network. Never serve or
  // populate service-worker caches for Authorization-bearing /api/ traffic.
  try {
    const medcasesApiUrl = new URL(event.request.url);
    if (
      medcasesApiUrl.origin === self.location.origin &&
      medcasesApiUrl.pathname.startsWith('/api/')
    ) {
      return;
    }
  } catch (_) {}


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
  const cachedResponse = await /* MC-SW-NAV-CACHE-IGNORE-SEARCH-V1-B-R0 */ cache.match(request, { ignoreSearch: request.mode === 'navigate' });

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
