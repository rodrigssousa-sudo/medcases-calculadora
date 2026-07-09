/* ============================================================
   MedCases Pro — Service Worker v5.1 (BUILD 277)
   Estratégia: STALE-WHILE-REVALIDATE (Cache-First + Background Sync)
   ─────────────────────────────────────────────────────────────
   BUILD 274 — Cache Busting Implacável (ver histórico)
   BUILD 275.1 — Force Cache Bust:
   • CACHE_VERSION bumped para 'medcases-v275' → invalida medcases-v274
     e quaisquer outros caches anteriores em dispositivos reais.
   BUILD 276 — Total Boot Shutdown (Patient Card Fix):
   • CACHE_VERSION bumped para 'medcases-v276' → invalida medcases-v275.
   • ASSETS_TO_CACHE com query string ?v=403 sincronizada com index.html.
   • Mantém: skipWaiting() incondicional, limpeza agressiva no activate,
     clients.claim() após limpeza.

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

const CACHE_VERSION   = 'medcases-v403';
const CACHE_NAME      = `medcases-calc-${CACHE_VERSION}`;

/* ── Lista canônica de assets pré-cacheados no install ──────
   BUILD 276: query strings sincronizadas com ?v=403 do index.html.
   Inclui: 2 raiz + 14 css + 8 js + 16 database = 40 arquivos
─────────────────────────────────────────────────────────── */
const ASSETS_TO_CACHE = [
  './',

  /* ── Raiz ── */
  './index.html',
  './sw.js',

  /* ── CSS (14 arquivos — stack completa BUILD 275.1) ── */
  './css/medcases-ux-v2.css?v=403',
  './css/build233.css?v=403',
  './css/build234-design-system.css?v=403',
  './css/build235-layout.css?v=403',
  './css/build236-hub-redesign.css?v=403',
  './css/build237a-ux-refinement.css?v=403',
  './css/build237b-flush-cards.css?v=403',
  './css/build240b-fixes.css?v=403',
  './css/build241-ux-pro.css?v=403',
  './css/build243-fullscreen-overlay.css?v=403',
  './css/build244-category-pills.css?v=403',
  './css/build246-farmaco-modal-premium.css?v=403',
  './css/build254-critical-fixes.css?v=403',
  './css/build272-universal-design-system.css?v=403',

  /* ── JS (8 arquivos — stack completa BUILD 275.1) ── */
  './js/medcases-ux-v2.js?v=403',
  './js/hub-accordion.js?v=403',
  './js/build240b-accordion-fix.js?v=403',
  './js/calculator-overlay.js?v=403',
  './js/category-pills.js?v=403',
  './js/elec-calc.js?v=403',
  './js/deeplink-router.js?v=403',
  './js/build272-reactive-engine.js?v=403',
  './js/build283-accessory-bar.js?v=403',

  /* ── Database (20 arquivos — base clínica COMPLETA) ── */
  './database/analgesicos.js?v=403',
  './database/anticoag.js?v=403',
  './database/antimicrobianos.js?v=403',
  './database/cardio.js?v=403',
  './database/endocrino.js?v=403',
  './database/gastro.js?v=403',
  './database/gastro_imuno.js?v=403',
  './database/imuno_corticoide.js?v=403',
  './database/endocrino_glp1.js?v=403',
  './database/infusoes.js?v=403',
  './database/interacoes.js?v=403',
  './database/nefro.js?v=403',
  './database/neuro.js?v=403',
  './database/obesidade.js?v=403',
  './database/pneumo.js?v=403',
  './database/pneumologia.js?v=403',
  './database/alergia_imunologia.js?v=403',
  './database/pneumologia_otorrino.js?v=403',
  './database/neurologia.js?v=403',
  './database/prescricoes.js?v=403',
  './database/psicofarmacos.js?v=403',
  './database/psiquiatria.js?v=403',
  './database/reumatologia.js?v=403',
  './database/emergencia.js?v=403',
  './database/infectologia.js?v=403',
  './database/sedacao.js?v=403',
  './database/hematologia.js?v=403',
  './database/gastroenterologia.js?v=403',
  './database/cardiologia.js?v=403',
  './database/analgesia_opioides.js?v=403',
];

/* ============================================================
   INSTALL — Pre-caching atômico de todos os assets críticos
   event.waitUntil garante que o SW só avança para 'activate'
   após o cache estar 100% populado com sucesso.
============================================================ */
self.addEventListener('install', (event) => {
  console.log(`[SW ${CACHE_VERSION}] Install: pré-cacheando ${ASSETS_TO_CACHE.length} assets.`);

  /* BUILD 274: skipWaiting() chamado IMEDIATAMENTE (fora do .then encadeado)
     Garante que o SW entre em ativação mesmo se o pre-cache falhar parcialmente.
     A estratégia stale-while-revalidate tolera cache miss individual — não
     precisamos bloquear toda a ativação por um asset que falhou no pre-cache. */
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE))
      .then(() => {
        console.log(`[SW ${CACHE_VERSION}] Pre-cache concluído (${ASSETS_TO_CACHE.length} assets).`);
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
  console.log(`[SW ${CACHE_VERSION}] Activate: limpeza agressiva de caches obsoletos.`);

  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        /* BUILD 274: limpeza AGRESSIVA — deleta qualquer cache que não seja
           exatamente CACHE_NAME, sem exceções. Isso invalida:
           - medcases-calc-medcases-v60 (versão anterior)
           - qualquer outro nome gerado por versões mais antigas
           Resultado: dispositivos antigos sempre recebem a versão nova. */
        const deletePromises = cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => {
            console.log(`[SW ${CACHE_VERSION}] Expurgando cache obsoleto: "${name}"`);
            return caches.delete(name);
          });
        return Promise.all(deletePromises);
      })
      .then(() => {
        console.log(`[SW ${CACHE_VERSION}] Limpeza concluída. Assumindo controle de todos os clients.`);
        /* clients.claim() faz este SW assumir controle de TODAS as abas abertas
           imediatamente, sem aguardar reload — essencial para dispositivos que
           ficam com a aba do app aberta por horas (uso clínico). */
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
