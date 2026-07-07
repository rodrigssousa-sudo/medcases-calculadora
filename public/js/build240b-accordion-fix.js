/* ================================================================
   MedCases Pro — Build 240B: Accordion Scroll Fix + Keyboard Stable
   ----------------------------------------------------------------
   Fix 2: Remove jump ao abrir/fechar card (scrollIntoView agressivo)
   Fix 3: Remove pulo ao trocar inputs (keyboard session tracking)

   ESTRATÉGIA:
   - Monkey-patch _scrollToCard via substituição do método no namespace
     global após o hub-accordion.js carregar (load order: este arquivo
     é carregado DEPOIS de hub-accordion.js no <body>).
   - Para Fix 2: usa IntersectionObserver para detectar visibilidade;
     só rola se >80% do card estiver fora da viewport.
     Sempre usa block:'nearest' (nunca 'start').
     Delay mínimo de 220ms (após animação de 180ms terminar).
   - Para Fix 3: track de keyboard session com visualViewport API.
     Focus events debounced 120ms.
     Scroll ao trocar input apenas se campo estiver oculto pelo teclado.
   - Zero alterações em lógica clínica, fórmulas, banco de dados.
================================================================ */

;(function (window) {
  'use strict';

  /* ── Constantes ── */
  var ANIM_DURATION    = 220;  /* ms: aguardar após .is-open antes de rolar */
  var FOCUS_DEBOUNCE   = 120;  /* ms: debounce de focus */
  var KEYBOARD_THRESH  = 120;  /* px: variação de altura que indica teclado aberto */
  var SCROLL_CONTAINER = 'scroll-content';

  /* ── Estado interno ── */
  var _keyboardOpen   = false;
  var _keyboardHeight = 0;
  var _focusTimer     = null;
  var _lastFocusEl    = null;

  /* BUILD 275.1 — BOOT SCROLL GUARD
     Janela de proteção: nos primeiros BOOT_LOCK_MS após o init, qualquer
     scroll automático para cards específicos (clcr, patient, scores) é
     bloqueado. Isso impede que o log "action=scroll card=hub-card-clcr"
     seja gerado por abertura programática não-solicitada pelo usuário
     (ex: app nativo injetando ?tab=clcr via WebView logo no boot).
     Após BOOT_LOCK_MS, scrolls disparados por interação real do usuário
     (hubToggle via click) funcionam normalmente.
     Cards protegidos: aqueles que o BUILD 275 tornou estáticos (clcr)
     ou que NÃO devem ter scroll automático no boot (patient). */
  var BOOT_LOCK_MS  = 1800; /* ms após _init — cobre o delay do deeplink-router (120ms) + margem */
  var _bootLocked   = true;
  var _BOOT_LOCKED_CARDS = { 'hub-card-clcr': true, 'hub-card-patient': true };

  /* Libera o lock após a janela de boot */
  setTimeout(function () {
    _bootLocked = false;
    console.log('[ACCORDION_FIX] BUILD 275.1: boot scroll lock liberado após ' + BOOT_LOCK_MS + 'ms');
  }, BOOT_LOCK_MS);

  /* ────────────────────────────────────────────────────────────────
     UTIL: Verifica se elemento está suficientemente visível
     Retorna true se o card está >= 40% visível na viewport
  ──────────────────────────────────────────────────────────────── */
  function _isCardVisible(el) {
    if (!el) return false;
    var sc = document.getElementById(SCROLL_CONTAINER);
    if (sc) {
      /* Scroll container custom */
      var scRect   = sc.getBoundingClientRect();
      var elRect   = el.getBoundingClientRect();
      var visible  = Math.min(elRect.bottom, scRect.bottom) - Math.max(elRect.top, scRect.top);
      var elH      = elRect.height || 80;
      return visible / elH >= 0.40;
    } else {
      /* Viewport padrão */
      var rect = el.getBoundingClientRect();
      var vpH  = window.innerHeight || document.documentElement.clientHeight;
      var visible = Math.min(rect.bottom, vpH) - Math.max(rect.top, 0);
      var elH  = rect.height || 80;
      return visible / elH >= 0.40;
    }
  }

  /* ────────────────────────────────────────────────────────────────
     UTIL: Verifica se campo está oculto atrás do teclado virtual
  ──────────────────────────────────────────────────────────────── */
  function _isHiddenByKeyboard(el) {
    if (!el || !_keyboardOpen) return false;
    var rect   = el.getBoundingClientRect();
    var vpH    = (window.visualViewport ? window.visualViewport.height : window.innerHeight);
    /* O campo está oculto se sua parte inferior está além da viewport visual */
    return rect.bottom > (vpH - 20);
  }

  /* ────────────────────────────────────────────────────────────────
     FIX 2: Scroll estável ao abrir/fechar card
     Substitui o comportamento nativo do _scrollToCard interno do
     hub-accordion.js via override do método no scroll-content.
     Como hub-accordion.js é um IIFE, não podemos acessar
     _scrollToCard diretamente — mas podemos interceptar o
     scrollTo do elemento #scroll-content.
  ──────────────────────────────────────────────────────────────── */
  function _stableScrollToCard(cardId, delay) {
    var effectiveDelay = Math.max(delay || 0, ANIM_DURATION);

    /* BUILD 275.1 — Boot Scroll Guard:
       Bloqueia scroll para cards protegidos durante a janela de boot.
       Evita o log "action=scroll card=hub-card-clcr" gerado por
       abertura programática não-solicitada (app nativo / deeplink). */
    if (_bootLocked && _BOOT_LOCKED_CARDS[cardId]) {
      console.log('[ACCORDION_FIX] BUILD 275.1: scroll bloqueado no boot para', cardId);
      return;
    }

    setTimeout(function () {
      var card = document.getElementById(cardId);
      var sc   = document.getElementById(SCROLL_CONTAINER);

      if (!card) {
        console.log('[ACCORDION_FIX] card não encontrado:', cardId);
        return;
      }

      /* Verifica visibilidade antes de rolar */
      if (_isCardVisible(card)) {
        console.log('[ACCORDION_FIX] action=scroll card=' + cardId + ' scrollSkipped=true reason=alreadyVisible');
        return;
      }

      console.log('[ACCORDION_FIX] action=scroll card=' + cardId + ' scrollSkipped=false');

      if (sc) {
        /* Usa offsetTop relativo ao scroll-container, com margem de 16px */
        var cardOffsetTop = card.offsetTop;
        var scScrollTop   = sc.scrollTop;
        var scClientH     = sc.clientHeight;

        /* block:'nearest' equivalente manual:
           Se o card está acima do viewport: rola para o topo do card
           Se está abaixo: rola para mostrar o fundo do card */
        var cardH    = card.offsetHeight || 100;
        var isAbove  = cardOffsetTop < scScrollTop;
        var isBelow  = (cardOffsetTop + cardH) > (scScrollTop + scClientH);

        if (isAbove) {
          sc.scrollTo({ top: Math.max(0, cardOffsetTop - 16), behavior: 'smooth' });
        } else if (isBelow) {
          var targetTop = cardOffsetTop + cardH - scClientH + 16;
          sc.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });
        }
        /* Se já está visível no sc, não rola */
      } else {
        /* Fallback: block:'nearest' — nunca 'start' */
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      console.log('[ACCORDION_FIX] animation=stable');
    }, effectiveDelay);
  }

  /* ────────────────────────────────────────────────────────────────
     FIX 2: Patch no scrollTo do #scroll-content
     Intercepta chamadas vindas do hub-accordion.js que usam
     sc.scrollTo({ top: card.offsetTop - 8 }) — que causa o jump.
     Substitui por lógica de nearest quando card já está visível.
  ──────────────────────────────────────────────────────────────── */
  function _patchScrollContainer() {
    var sc = document.getElementById(SCROLL_CONTAINER);
    if (!sc || sc.__b240patched) return;

    var _originalScrollTo = sc.scrollTo.bind(sc);
    sc.scrollTo = function (optionsOrX, y) {
      /* Detecta chamadas do hub-accordion: { top: N, behavior:'smooth' } */
      if (optionsOrX && typeof optionsOrX === 'object' && 'top' in optionsOrX) {
        var requestedTop = optionsOrX.top;

        /* Tenta identificar o card que seria o alvo desta rolagem */
        var openCard = document.querySelector('.hub-card.is-open');
        if (openCard && _isCardVisible(openCard)) {
          console.log('[ACCORDION_FIX] scrollTo intercepted — card already visible, skipping');
          return; /* Cancela scroll desnecessário */
        }

        /* Garante smooth sempre, nunca instant */
        _originalScrollTo({ top: requestedTop, behavior: 'smooth' });
        return;
      }

      /* Passa direto para qualquer outra chamada */
      _originalScrollTo(optionsOrX, y);
    };

    sc.__b240patched = true;
    console.log('[ACCORDION_FIX] scroll-content patched — jump prevention active');
  }

  /* ────────────────────────────────────────────────────────────────
     FIX 2: Override da função hubToggle para delay de scroll
     Como hubToggle é exposto em window (linha 670+ em hub-accordion.js),
     podemos wrappear após carregamento.
  ──────────────────────────────────────────────────────────────── */
  function _patchHubToggle() {
    if (typeof window.hubToggle !== 'function') return;
    if (window.hubToggle.__b240patched) return;

    var _origToggle = window.hubToggle;
    window.hubToggle = function (id) {
      var card   = document.getElementById('hub-card-' + id);
      var isOpen = card && card.classList.contains('is-open');

      /* Executa toggle original */
      _origToggle(id);

      /* Se o card foi aberto (estava fechado), faz scroll estável */
      if (!isOpen && card) {
        _stableScrollToCard('hub-card-' + id, ANIM_DURATION);
      }
      /* Se fechando: não fazer scroll — evita o pulo de "retorno ao topo" */
    };

    window.hubToggle.__b240patched = true;
    console.log('[ACCORDION_FIX] hubToggle patched — stable open scroll');
  }

  /* ────────────────────────────────────────────────────────────────
     FIX 3: Keyboard Session Tracking via visualViewport
  ──────────────────────────────────────────────────────────────── */
  function _initKeyboardTracking() {
    if (!window.visualViewport) {
      /* Fallback: window resize para detectar teclado */
      var _lastWindowH = window.innerHeight;
      window.addEventListener('resize', function () {
        var newH = window.innerHeight;
        var diff = _lastWindowH - newH;
        if (diff > KEYBOARD_THRESH) {
          _keyboardOpen   = true;
          _keyboardHeight = diff;
          console.log('[KEYBOARD_STABLE] keyboardOpen=true height=' + _keyboardHeight);
        } else if (diff < -KEYBOARD_THRESH || newH > _lastWindowH + 60) {
          _keyboardOpen   = false;
          _keyboardHeight = 0;
          console.log('[KEYBOARD_STABLE] keyboardOpen=false');
        }
        _lastWindowH = newH;
      }, { passive: true });
      return;
    }

    /* visualViewport API — mais preciso no iOS/Android */
    var _lastVpH = window.visualViewport.height;
    window.visualViewport.addEventListener('resize', function () {
      var newH = window.visualViewport.height;
      var diff = _lastVpH - newH;

      if (diff > KEYBOARD_THRESH) {
        _keyboardOpen   = true;
        _keyboardHeight = diff;
        console.log('[KEYBOARD_STABLE] keyboardOpen=true height=' + _keyboardHeight);
      } else if (newH > _lastVpH + 60) {
        _keyboardOpen   = false;
        _keyboardHeight = 0;
        console.log('[KEYBOARD_STABLE] keyboardOpen=false');
      }
      _lastVpH = newH;
    }, { passive: true });
  }

  /* ────────────────────────────────────────────────────────────────
     FIX 3: Focus Debounce — evita pulo ao trocar entre inputs
  ──────────────────────────────────────────────────────────────── */
  function _handleInputFocus(e) {
    var el = e.target;
    if (!el || (el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA' && el.tagName !== 'SELECT')) return;

    /* Cancela timer anterior */
    if (_focusTimer) {
      clearTimeout(_focusTimer);
      _focusTimer = null;
    }

    var prevEl  = _lastFocusEl;
    _lastFocusEl = el;

    _focusTimer = setTimeout(function () {
      /* Detecta se é troca dentro do mesmo card (mesma keyboard session) */
      var sameSession = _keyboardOpen && prevEl !== null;

      if (sameSession) {
        /* Teclado já está aberto: só rola se campo estiver oculto pelo teclado */
        var needsScroll = _isHiddenByKeyboard(el);
        console.log('[KEYBOARD_STABLE] focusChange=true sameKeyboardSession=true scrollNeeded=' + needsScroll);

        if (needsScroll) {
          _scrollInputIntoView(el);
        }
        /* Não faz NADA mais — sem remount, sem collapse, sem scroll global */
      } else {
        /* Primeira abertura de teclado: scroll suave se oculto */
        var needsScroll = _isHiddenByKeyboard(el);
        console.log('[KEYBOARD_STABLE] focusChange=true sameKeyboardSession=false scrollNeeded=' + needsScroll);

        if (needsScroll) {
          _scrollInputIntoView(el);
        }
      }
    }, FOCUS_DEBOUNCE);
  }

  /* ────────────────────────────────────────────────────────────────
     UTIL: Rola input para ficar visível acima do teclado
  ──────────────────────────────────────────────────────────────── */
  function _scrollInputIntoView(el) {
    var sc = document.getElementById(SCROLL_CONTAINER);
    if (sc) {
      var elRect = el.getBoundingClientRect();
      var scRect = sc.getBoundingClientRect();
      var vpH    = window.visualViewport ? window.visualViewport.height : window.innerHeight;

      /* Target: campo visível com 24px de margem acima do teclado */
      var fieldBottom = elRect.bottom;
      var safeBottom  = vpH - 24;

      if (fieldBottom > safeBottom) {
        var scrollDelta = fieldBottom - safeBottom + 8;
        sc.scrollTo({
          top: sc.scrollTop + scrollDelta,
          behavior: 'smooth'
        });
      }
    } else {
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  /* ────────────────────────────────────────────────────────────────
     FIX 3: Bind focus listener em capture phase (pega todos os inputs)
  ──────────────────────────────────────────────────────────────── */
  function _initFocusTracking() {
    document.addEventListener('focus', _handleInputFocus, true);
    console.log('[KEYBOARD_STABLE] focus tracking active — debounce=' + FOCUS_DEBOUNCE + 'ms');
  }

  /* ────────────────────────────────────────────────────────────────
     FIX 2 + 3: Inicialização após DOM ready
  ──────────────────────────────────────────────────────────────── */
  function _init() {
    /* Patch scroll container */
    _patchScrollContainer();

    /* Retry se #scroll-content ainda não existir */
    if (!document.getElementById(SCROLL_CONTAINER)) {
      var _retryCount = 0;
      var _retryInterval = setInterval(function () {
        _retryCount++;
        _patchScrollContainer();
        if (document.getElementById(SCROLL_CONTAINER) || _retryCount > 20) {
          clearInterval(_retryInterval);
        }
      }, 150);
    }

    /* Patch hubToggle após hub-accordion.js expor no window */
    var _toggleRetry = 0;
    var _toggleInterval = setInterval(function () {
      _toggleRetry++;
      if (typeof window.hubToggle === 'function') {
        _patchHubToggle();
        clearInterval(_toggleInterval);
      } else if (_toggleRetry > 30) {
        clearInterval(_toggleInterval);
        console.warn('[ACCORDION_FIX] hubToggle não encontrado após 30 tentativas');
      }
    }, 100);

    /* Keyboard session tracking */
    _initKeyboardTracking();

    /* Focus debounce */
    _initFocusTracking();

    console.log('[ACCORDION_FIX] Build 240B — accordion fix + keyboard stable initialized');
  }

  /* ────────────────────────────────────────────────────────────────
     Boot
  ──────────────────────────────────────────────────────────────── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', _init);
  } else {
    _init();
  }

})(window);
