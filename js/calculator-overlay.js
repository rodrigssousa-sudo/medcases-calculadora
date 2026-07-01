/* ================================================================
   MedCases Pro — BUILD 242: Calculator Overlay Controller
   ----------------------------------------------------------------
   Substitui o modelo de expansão inline do HubAccordion (build 236+)
   por uma "Sub-tela Isolada Full-Screen" (#calculator-overlay-container).

   ESTRATÉGIA (sem quebrar hub-accordion.js / deeplink-router.js):
   - Intercepta window.hubToggle e window.hubOpen via monkey-patch
     (mesmo padrão já usado por build240b-accordion-fix.js).
   - Deixa o motor original (_lazyMount, is-open, scroll) executar
     normalmente para montar o conteúdo do card.
   - Em seguida MOVE (não clona) o nó .hub-card-inner do card para
     dentro de #calculator-overlay-body. Isso preserva 100% dos
     event listeners, IDs e valores digitados (inputs mantêm estado
     porque é o MESMO nó DOM, apenas trocando de pai).
   - Ao fechar (botão "X"), o nó volta para seu lugar original
     dentro do hub-card-body — o doutor retorna exatamente para
     onde estava na Home, sem perder nada que digitou.

   API PÚBLICA:
     window.CalcOverlay.open(id)   — abre calculadora na sub-tela
     window.CalcOverlay.close()    — fecha e restaura a Home
================================================================ */

(function () {
  'use strict';

  var _originalParent      = null; /* hub-card-body de origem do conteúdo movido */
  var _originalNextSibling = null; /* referência para reinserir na posição certa */
  var _currentId            = null; /* id do card atualmente na sub-tela */

  /* ────────────────────────────────────────────────────────────
     CRIA o container overlay (uma única vez) e injeta no <body>
  ──────────────────────────────────────────────────────────── */
  function _ensureOverlay() {
    if (document.getElementById('calculator-overlay-container')) return;

    var ov = document.createElement('div');
    ov.id = 'calculator-overlay-container';
    ov.setAttribute('role', 'dialog');
    ov.setAttribute('aria-modal', 'true');
    ov.innerHTML =
      '<header id="calculator-overlay-header">' +
        '<button type="button" id="calculator-overlay-close" aria-label="Fechar calculadora">' +
          '<i class="fa-solid fa-xmark"></i>' +
        '</button>' +
        '<div id="calculator-overlay-title">Calculadora</div>' +
        '<span class="calc-overlay-spacer" aria-hidden="true"></span>' +
      '</header>' +
      '<div id="calculator-overlay-body"></div>';

    document.body.appendChild(ov);

    document.getElementById('calculator-overlay-close')
      .addEventListener('click', closeOverlay);

    /* Toque fora do conteúdo (na área do header) não fecha por engano;
       fechamento é sempre explícito via botão "X" ou ESC (acessibilidade). */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && _currentId) closeOverlay();
    });
  }

  /* ────────────────────────────────────────────────────────────
     Extrai o título legível do card (respeitando idioma ativo)
  ──────────────────────────────────────────────────────────── */
  function _getTitle(id) {
    var card = document.getElementById('hub-card-' + id);
    if (!card) return '';
    var nameEl = card.querySelector('.hub-card-name');
    if (!nameEl) return id;
    var lang = (document.body.getAttribute('data-lang') || 'pt');
    var span = nameEl.querySelector(lang === 'es' ? '.lang-hub-es' : '.lang-hub-pt');
    return (span ? span.textContent : nameEl.textContent).trim();
  }

  /* ────────────────────────────────────────────────────────────
     ABRE a calculadora `id` dentro da sub-tela full-screen.
     Pré-requisito: hub-accordion.js já deve ter montado o slot
     (_lazyMount) e adicionado .is-open ao card — isso é garantido
     pelo patch em hubToggle()/hubOpen() abaixo.
  ──────────────────────────────────────────────────────────── */
  function openInOverlay(id) {
    _ensureOverlay();

    var inner = document.querySelector('#hub-card-' + id + ' .hub-card-inner');
    var body  = document.getElementById('calculator-overlay-body');
    var title = document.getElementById('calculator-overlay-title');
    if (!inner || !body) return false;

    /* Se já havia outra calculadora aberta na sub-tela, devolve o
       conteúdo dela ao lugar de origem ANTES de mover a nova —
       evita destruir/perder dados de outro card por engano. */
    if (_currentId && _currentId !== id) {
      _restoreCurrent();
    }

    if (inner.parentNode !== body) {
      _originalParent      = inner.parentNode;
      _originalNextSibling = inner.nextSibling;
      body.appendChild(inner); /* MOVE — preserva listeners e valores */
    }

    title.textContent = _getTitle(id) || 'Calculadora';
    _currentId = id;

    var ov = document.getElementById('calculator-overlay-container');
    ov.classList.add('is-active');
    document.body.classList.add('calc-overlay-open');

    /* Scroll da sub-tela sempre inicia do topo ao abrir uma calculadora nova */
    body.scrollTop = 0;

    return true;
  }

  /* ────────────────────────────────────────────────────────────
     Devolve o conteúdo atualmente na sub-tela para seu card de
     origem na Home, sem fechar visualmente a sub-tela (uso interno).
  ──────────────────────────────────────────────────────────── */
  function _restoreCurrent() {
    var body  = document.getElementById('calculator-overlay-body');
    var inner = body ? body.firstElementChild : null;
    if (inner && _originalParent) {
      if (_originalNextSibling && _originalNextSibling.parentNode === _originalParent) {
        _originalParent.insertBefore(inner, _originalNextSibling);
      } else {
        _originalParent.appendChild(inner);
      }
    }
    if (_currentId) {
      var card = document.getElementById('hub-card-' + _currentId);
      if (card) {
        card.classList.remove('is-open');
        var trigger = card.querySelector('.hub-card-trigger');
        if (trigger) trigger.setAttribute('aria-expanded', 'false');
      }
    }
    _originalParent      = null;
    _originalNextSibling = null;
    _currentId            = null;
  }

  /* ────────────────────────────────────────────────────────────
     FECHA a sub-tela (botão "X" / ESC): restaura o conteúdo na
     Home (dados digitados são preservados — mesmo nó DOM) e some
     com a sub-tela via slide-down.

     HOTFIX PERFORMANCE (BUILD 248): a tela some IMEDIATAMENTE
     (classe removida na hora — dispara a transição CSS sem
     bloqueio). A movimentação do nó DOM (_restoreCurrent, que
     faz insertBefore/appendChild — trabalho pesado de reflow)
     é adiada para o próximo frame via requestAnimationFrame,
     liberando a main thread para a animação de fechar rodar
     sem lag perceptível ao usuário.
  ──────────────────────────────────────────────────────────── */
  function closeOverlay() {
    var ov = document.getElementById('calculator-overlay-container');
    if (!ov || !ov.classList.contains('is-active')) return;

    /* 1) Esconde a tela AGORA — nada pesado antes disso */
    ov.classList.remove('is-active');
    document.body.classList.remove('calc-overlay-open');

    /* 2) Limpeza/realocação do DOM fica para depois do próximo paint */
    requestAnimationFrame(function () {
      setTimeout(_restoreCurrent, 50);
    });
  }

  window.CalcOverlay = { open: openInOverlay, close: closeOverlay };

  /* ────────────────────────────────────────────────────────────
     PATCH: hubToggle(id) — clique nos 30+ cards da Home
     Em vez de expandir inline, abre/fecha a sub-tela full-screen.
  ──────────────────────────────────────────────────────────── */
  function _patchHubToggle() {
    if (typeof window.hubToggle !== 'function' || window.hubToggle.__ovPatched) return;

    var _orig = window.hubToggle;
    window.hubToggle = function (id) {
      /* Clique no mesmo card já aberto na sub-tela → fecha (toggle) */
      if (_currentId === id) {
        closeOverlay();
        return;
      }
      /* Executa o motor original: lazy-mount do slot + is-open + scroll.
         (scroll é inofensivo pois ocorre no card ainda visível na Home
         por uma fração de segundo, antes de movermos o conteúdo). */
      _orig(id);
      openInOverlay(id);
    };
    window.hubToggle.__ovPatched = true;
  }

  /* ────────────────────────────────────────────────────────────
     PATCH: hubOpen(id, opts) — abertura programática (deep links,
     botões "Abrir X no Hub" dentro dos próprios módulos, etc.)
  ──────────────────────────────────────────────────────────── */
  function _patchHubOpen() {
    if (typeof window.hubOpen !== 'function' || window.hubOpen.__ovPatched) return;

    var _origOpen = window.hubOpen;
    window.hubOpen = function (id, opts) {
      _origOpen(id, opts);
      /* hubOpen original tem um setTimeout(80ms) interno antes de
         aplicar is-open; aguardamos um pouco mais para mover o
         conteúdo já montado/preenchido pelas ações pós-abertura. */
      setTimeout(function () { openInOverlay(id); }, 120);
    };
    window.hubOpen.__ovPatched = true;
  }

  function _patchAll() {
    _patchHubToggle();
    _patchHubOpen();
  }

  /* ────────────────────────────────────────────────────────────
     INIT — garante overlay criado, patches aplicados e nenhum
     card iniciando aberto/expandido na Home (colapso total,
     incluindo "Dados do Paciente").
  ──────────────────────────────────────────────────────────── */
  function _init() {
    _ensureOverlay();
    _patchAll();

    /* Garantia extra: força todos os cards a iniciarem colapsados,
       independentemente de qualquer estado herdado de sessão anterior. */
    document.querySelectorAll('.hub-card.is-open').forEach(function (c) {
      c.classList.remove('is-open');
    });

    console.log('[CalcOverlay] v1.0 pronto — sub-tela full-screen ativa para o Hub (30+ calculadoras + paciente).');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', _init);
  } else {
    _init();
  }

  /* hub-accordion.js pode terminar de expor window.hubToggle/hubOpen
     um pouco depois deste script — reforça o patch por até 5s. */
  var _tries = 0;
  var _retry = setInterval(function () {
    _tries++;
    _patchAll();
    if ((window.hubToggle && window.hubToggle.__ovPatched &&
         window.hubOpen   && window.hubOpen.__ovPatched) || _tries > 50) {
      clearInterval(_retry);
    }
  }, 100);

})();
