/* ================================================================
   MedCases Pro — V1-D-R0
   SINGLE OWNER / NO DOM REPARENT PROJECTION
   ----------------------------------------------------------------
   Regra estrutural:
   - o .hub-card, .hub-card-body e .hub-card-inner NUNCA mudam de pai;
   - o HubAccordion continua responsável por lazy-mount/is-open;
   - este controller projeta visualmente o card aberto em full-screen
     apenas com classes/CSS position:fixed;
   - fechamento remove a projeção e chama HubAccordion.close(id);
   - sem MutationObserver, sem setInterval, sem watchdog global.
   ================================================================ */
(function () {
  'use strict';

  if (window.__MC_OVERLAY_PROJECTION_V1) return;

  var BUILD = 'MEDCASES-MODULE-SURFACE-SINGLE-OWNER-V1-B-R0-R1';
  var currentId = null;
  var transitionId = null;
  var pendingOpenTimer = 0;
  var measureRaf = 0;
  var focusScrollTimer = 0;
  var initialFocusRaf = 0;
  var returnFocusEl = null;

  function byId(id) {
    return document.getElementById(id);
  }

  function card(id) {
    return id ? byId('hub-card-' + id) : null;
  }

  function overlay() {
    return byId('calculator-overlay-container');
  }

  function cancelPendingOpen() {
    if (!pendingOpenTimer) return;
    clearTimeout(pendingOpenTimer);
    pendingOpenTimer = 0;
  }

  function rememberActivator(id) {
    var active = document.activeElement;
    var trigger = card(id) && card(id).querySelector(':scope > .hub-card-trigger');

    if (
      active &&
      active !== document.body &&
      active !== document.documentElement &&
      !active.closest('#calculator-overlay-container')
    ) {
      returnFocusEl = active;
      return;
    }

    if (trigger) returnFocusEl = trigger;
  }

  function isVisibleFocusable(el) {
    if (!el || el.disabled || el.getAttribute('aria-hidden') === 'true') return false;
    var style = window.getComputedStyle(el);
    return style.display !== 'none' && style.visibility !== 'hidden' && el.getClientRects().length > 0;
  }

  function overlayFocusables() {
    var items = [];
    var close = byId('calculator-overlay-close');
    var c = card(currentId);
    var selector = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled]):not([type="hidden"])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])'
    ].join(',');

    if (close) items.push(close);
    if (c) items = items.concat(Array.prototype.slice.call(c.querySelectorAll(selector)));
    return items.filter(function (el, index, all) {
      return all.indexOf(el) === index && isVisibleFocusable(el);
    });
  }

  function nestedModalOwnsFocus() {
    return Array.prototype.some.call(
      document.querySelectorAll('[role="dialog"][aria-modal="true"]'),
      function (dialog) {
        return dialog.id !== 'calculator-overlay-container' && isVisibleFocusable(dialog);
      }
    );
  }

  function focusOverlayStart(id) {
    if (initialFocusRaf) cancelAnimationFrame(initialFocusRaf);
    initialFocusRaf = requestAnimationFrame(function () {
      initialFocusRaf = 0;
      if (currentId !== id) return;
      var close = byId('calculator-overlay-close');
      if (!close) return;
      try { close.focus({ preventScroll: true }); }
      catch (_) { close.focus(); }
    });
  }

  function restoreActivatorFocus() {
    var target = returnFocusEl;
    returnFocusEl = null;
    if (!target || !target.isConnected) return;
    requestAnimationFrame(function () {
      try { target.focus({ preventScroll: true }); }
      catch (_) { target.focus(); }
    });
  }

  function getTitle(id) {
    var c = card(id);
    if (!c) return 'Calculadora';

    var nameEl = c.querySelector('.hub-card-name');
    if (!nameEl) return id || 'Calculadora';

    var raw = String(
      window.currentLang ||
      document.body.getAttribute('data-lang') ||
      document.documentElement.lang ||
      'pt'
    ).toLowerCase();

    var lang = raw.indexOf('es') === 0 ? 'es' : 'pt';
    var span = nameEl.querySelector(
      lang === 'es' ? '.lang-hub-es' : '.lang-hub-pt'
    );

    return String(
      span ? span.textContent : nameEl.textContent
    ).trim() || 'Calculadora';
  }

  function ensureStyle() {
    if (byId('mc-overlay-projection-v1-style')) return;

    var st = document.createElement('style');
    st.id = 'mc-overlay-projection-v1-style';
    st.textContent = [
      'html.mc-overlay-projection-open,',
      'body.calc-overlay-open{overflow:hidden!important;}',

      '#calculator-overlay-container[data-mc-owner="NO_REPARENT_PROJECTION_V1"]{',
      'position:fixed!important;',
      'inset:0!important;',
      'width:100vw!important;',
      'height:100vh!important;',
      'height:100dvh!important;',
      'z-index:2147483000!important;',
      'display:block!important;',
      'margin:0!important;',
      'padding:0!important;',
      'background:var(--mc-bg-body,#1A1D23)!important;',
      'background-image:none!important;',
      'transform:none!important;',
      'visibility:hidden!important;',
      'pointer-events:none!important;',
      'overflow:visible!important;',
      '}',

      '#calculator-overlay-container[data-mc-owner="NO_REPARENT_PROJECTION_V1"].is-active{',
      'visibility:visible!important;',
      'transform:none!important;',
      'pointer-events:none!important;',
      '}',
      'body.light-mode #calculator-overlay-container[data-mc-owner="NO_REPARENT_PROJECTION_V1"]{',
      'background:var(--mc-bg-body,#F3F4F6)!important;',
      '}',

      '#calculator-overlay-container[data-mc-owner="NO_REPARENT_PROJECTION_V1"] #calculator-overlay-header{',
      'position:fixed!important;',
      'top:0!important;',
      'left:0!important;',
      'right:0!important;',
      'z-index:2147483002!important;',
      'display:flex!important;',
      'align-items:center!important;',
      'min-height:52px!important;',
      'box-sizing:border-box!important;',
      'pointer-events:auto!important;',
      '}',

      '#calculator-overlay-container[data-mc-owner="NO_REPARENT_PROJECTION_V1"] #calculator-overlay-close{',
      'pointer-events:auto!important;',
      'touch-action:manipulation!important;',
      '}',

      '#calculator-overlay-container[data-mc-owner="NO_REPARENT_PROJECTION_V1"] #calculator-overlay-body{',
      'display:none!important;',
      'pointer-events:none!important;',
      '}',

      'body.calc-overlay-open #app,',
      'body.calc-overlay-open #scroll-content,',
      'body.calc-overlay-open #page-home,',
      'body.calc-overlay-open #hub-accordion,',
      'body.calc-overlay-open #hub-accordion .hub-section,',
      'body.calc-overlay-open #hub-accordion .hub-l1-section,',
      'body.calc-overlay-open #hub-accordion .hub-l1-row,',
      'body.calc-overlay-open #hub-accordion .hub-l2-section,',
      'body.calc-overlay-open #hub-accordion .hub-l2-grid,',
      'body.calc-overlay-open #hub-accordion .hub-l3-section,',
      'body.calc-overlay-open #hub-accordion .hub-l3-row{',
      'transform:none!important;',
      'filter:none!important;',
      'perspective:none!important;',
      'contain:none!important;',
      'isolation:auto!important;',
      'overflow:visible!important;',
      '}',

      'body.calc-overlay-open #page-home .hub-card.mc-overlay-projected-card{',
      'position:fixed!important;',
      'top:var(--mc-overlay-projection-top,56px)!important;',
      'left:0!important;',
      'right:0!important;',
      'bottom:0!important;',
      'width:auto!important;',
      /* R1C3R10: explicit scrollport: fixed + top/bottom + auto
         previously expanded a long projected card to intrinsic content height. */
      'height:calc(100vh - var(--mc-overlay-projection-top,56px))!important;',
      'height:calc(100dvh - var(--mc-overlay-projection-top,56px))!important;',
      'min-height:0!important;',
      'max-height:none!important;',
      'box-sizing:border-box!important;',
      'z-index:2147483001!important;',
      'display:block!important;',
      'grid-column:auto!important;',
      'margin:0!important;',
      'padding:0!important;',
      'border:0!important;',
      'border-radius:0!important;',
      'box-shadow:none!important;',
      'transform:none!important;',
      'overflow-x:hidden!important;',
      'overflow-y:auto!important;',
      '-webkit-overflow-scrolling:touch!important;',
      'overscroll-behavior:contain!important;',
      'background:var(--mc-bg-body,#1A1D23)!important;',
      '}',

      'body.light-mode.calc-overlay-open #page-home .hub-card.mc-overlay-projected-card{',
      'background:var(--mc-bg-body,#F3F4F6)!important;',
      '}',

      'body.calc-overlay-open #page-home .hub-card.mc-overlay-projected-card > .hub-card-trigger{',
      'display:none!important;',
      '}',

      'body.calc-overlay-open #page-home .hub-card.mc-overlay-projected-card > .hub-card-body,',
      'body.calc-overlay-open #page-home .hub-card.mc-overlay-projected-card [id^="hub-body-"]{',
      'display:block!important;',
      'visibility:visible!important;',
      'opacity:1!important;',
      'width:100%!important;',
      'height:auto!important;',
      'min-height:100%!important;',
      'max-height:none!important;',
      'margin:0!important;',
      'padding:0!important;',
      'border:0!important;',
      'border-radius:0!important;',
      'overflow:visible!important;',
      'transform:none!important;',
      '}',

      'body.calc-overlay-open #page-home .hub-card.mc-overlay-projected-card .hub-card-inner{',
      'display:block!important;',
      'visibility:visible!important;',
      'opacity:1!important;',
      'position:relative!important;',
      'inset:auto!important;',
      'width:100%!important;',
      'min-width:0!important;',
      'height:auto!important;',
      'min-height:100%!important;',
      'max-height:none!important;',
      'box-sizing:border-box!important;',
      'margin:0!important;',
      'padding:14px 4px 32px!important;',
      'transform:none!important;',
      'overflow:visible!important;',
      'animation:none!important;',
      '}',

      'body.calc-overlay-open #page-home .hub-card.mc-overlay-projected-card::before,',
      'body.calc-overlay-open #page-home .hub-card.mc-overlay-projected-card::after{',
      'display:none!important;',
      '}'
    ].join('');

    document.head.appendChild(st);
  }

  function ensureOverlay() {
    var ov = overlay();

    if (ov && ov.getAttribute('data-mc-owner') !== 'NO_REPARENT_PROJECTION_V1') {
      if (ov.parentNode) ov.parentNode.removeChild(ov);
      ov = null;
    }

    if (!ov) {
      ov = document.createElement('div');
      ov.id = 'calculator-overlay-container';
      ov.className = 'mc-screen-shell';
      ov.setAttribute('role', 'dialog');
      ov.setAttribute('aria-modal', 'true');
      ov.setAttribute('aria-labelledby', 'calculator-overlay-title');
      ov.setAttribute('aria-hidden', 'true');
      ov.setAttribute('data-mc-owner', 'NO_REPARENT_PROJECTION_V1');
      ov.innerHTML =
        '<header id="calculator-overlay-header" class="mc-screen-header">' +
          '<button type="button" id="calculator-overlay-close" class="mc-close-button" aria-label="Fechar calculadora">' +
            '<i class="fa-solid fa-xmark"></i>' +
          '</button>' +
          '<div id="calculator-overlay-title" class="mc-screen-title">Calculadora</div>' +
          '<span class="calc-overlay-spacer" aria-hidden="true"></span>' +
        '</header>' +
        '<div id="calculator-overlay-body" aria-hidden="true"></div>';

      document.body.appendChild(ov);

      var close = byId('calculator-overlay-close');
      if (close) {
        close.addEventListener('pointerup', function (e) {
          e.preventDefault();
          e.stopImmediatePropagation();
          closeOverlay();
        }, true);

        close.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopImmediatePropagation();
          closeOverlay();
        }, true);
      }
    }

    ov.setAttribute('aria-labelledby', 'calculator-overlay-title');
    ov.setAttribute('aria-hidden', ov.classList.contains('is-active') ? 'false' : 'true');

    return ov;
  }

  function measureProjectionTop() {
    measureRaf = 0;

    if (!currentId) return;
    var c = card(currentId);
    var ov = overlay();
    var h = byId('calculator-overlay-header');

    if (!c || !ov || !ov.classList.contains('is-active')) return;

    var bottom = 56;
    if (h) {
      var rect = h.getBoundingClientRect();
      if (rect && Number(rect.bottom) > 0) {
        bottom = Math.ceil(Number(rect.bottom));
      }
    }

    c.style.setProperty('--mc-overlay-projection-top', bottom + 'px');
  }

  function scheduleMeasure() {
    if (measureRaf) cancelAnimationFrame(measureRaf);
    measureRaf = requestAnimationFrame(measureProjectionTop);
  }

  function syncVisualViewport() {
    var vv = window.visualViewport;
    var root = document.documentElement;
    var top = vv ? Math.max(0, Number(vv.offsetTop) || 0) : 0;
    var left = vv ? Math.max(0, Number(vv.offsetLeft) || 0) : 0;
    var width = vv ? Math.max(1, Number(vv.width) || window.innerWidth) : window.innerWidth;
    var height = vv ? Math.max(1, Number(vv.height) || window.innerHeight) : window.innerHeight;

    root.style.setProperty('--mc-visual-viewport-top', top + 'px');
    root.style.setProperty('--mc-visual-viewport-left', left + 'px');
    root.style.setProperty('--mc-visual-viewport-width', width + 'px');
    root.style.setProperty('--mc-visual-viewport-height', height + 'px');
    scheduleMeasure();
  }

  function keepFocusedControlVisible(e) {
    var target = e && e.target;
    if (!target || !target.matches('input,textarea,select,[contenteditable="true"]')) return;
    if (!target.closest('.mc-overlay-projected-card')) return;

    clearTimeout(focusScrollTimer);
    focusScrollTimer = setTimeout(function () {
      if (document.activeElement !== target) return;
      target.scrollIntoView({ block: 'center', inline: 'nearest', behavior: 'smooth' });
    }, 260);
  }

  function clearProjectedClass(id) {
    var c = card(id);
    if (!c) return;
    c.classList.remove('mc-overlay-projected-card');
    var inner = c.querySelector('.hub-card-inner');
    if (inner) inner.classList.remove('mc-screen-content');
    c.style.removeProperty('--mc-overlay-projection-top');
  }

  function deactivateVisual() {
    var oldId = currentId;

    if (oldId) clearProjectedClass(oldId);
    currentId = null;
    transitionId = null;

    var ov = overlay();
    if (ov) {
      ov.classList.remove('is-active');
      ov.setAttribute('aria-hidden', 'true');
    }

    document.documentElement.classList.remove('mc-overlay-projection-open');
    document.body.classList.remove('calc-overlay-open');

    if (measureRaf) {
      cancelAnimationFrame(measureRaf);
      measureRaf = 0;
    }
  }

  function forceHubClosed(id) {
    if (!id) return;

    try {
      if (
        window.HubAccordion &&
        typeof window.HubAccordion.cancelPendingOpen === 'function'
      ) {
        window.HubAccordion.cancelPendingOpen();
      }
    } catch (_) {}

    try {
      if (
        window.HubAccordion &&
        typeof window.HubAccordion.close === 'function'
      ) {
        window.HubAccordion.close(id);
        return;
      }
    } catch (_) {}

    var c = card(id);
    if (!c) return;

    c.classList.remove('is-open');
    var trigger = c.querySelector('.hub-card-trigger');
    if (trigger) trigger.setAttribute('aria-expanded', 'false');
  }

  function beginTransition(id) {
    ensureStyle();
    var ov = ensureOverlay();
    if (!ov) return false;

    rememberActivator(id);
    transitionId = id || null;

    var title = byId('calculator-overlay-title');
    if (title && id) title.textContent = getTitle(id);

    document.documentElement.classList.add('mc-overlay-projection-open');
    document.body.classList.add('calc-overlay-open');
    ov.classList.add('is-active');
    ov.setAttribute('aria-hidden', 'false');

    return true;
  }

  function projectWhenReady(id, tries) {
    if (transitionId !== id) return false;

    if (project(id, 'hubOpen-ready')) return true;

    if (tries > 0) {
      requestAnimationFrame(function () {
        projectWhenReady(id, tries - 1);
      });
      return true;
    }

    deactivateVisual();
    return false;
  }

  function project(id, reason) {
    var c = card(id);
    if (!c || !c.classList.contains('is-open')) return false;

    if (!beginTransition(id)) return false;

    if (currentId && currentId !== id) {
      clearProjectedClass(currentId);
    }

    currentId = id;
    transitionId = null;

    c.classList.add('mc-overlay-projected-card');
    var inner = c.querySelector('.hub-card-inner');
    if (inner) inner.classList.add('mc-screen-content');

    scheduleMeasure();
    focusOverlayStart(id);

    window.__MC_OVERLAY_PROJECTION_V1.lastOpen = {
      id: id,
      reason: reason || 'unknown',
      at: Date.now()
    };

    return true;
  }

  function closeOverlay() {
    cancelPendingOpen();

    var closingId = currentId || transitionId;

    if (closingId) forceHubClosed(closingId);
    deactivateVisual();
    restoreActivatorFocus();

    window.__MC_OVERLAY_PROJECTION_V1.lastClose = {
      id: closingId || null,
      at: Date.now()
    };
  }

  function patchHubToggle() {
    if (typeof window.hubToggle !== 'function') return false;
    if (window.hubToggle.__mcProjectionV1) return true;

    var original = window.hubToggle;

    var wrapped = function (id) {
      cancelPendingOpen();

      if (currentId === id || transitionId === id) {
        closeOverlay();
        return;
      }

      if (currentId && currentId !== id) {
        clearProjectedClass(currentId);
        currentId = null;
      }

      beginTransition(id);

      var result = original.apply(this, arguments);
      var c = card(id);

      if (c && c.classList.contains('is-open')) {
        project(id, 'hubToggle');
      } else {
        deactivateVisual();
      }

      return result;
    };

    wrapped.__mcProjectionV1 = true;
    wrapped.__mcOriginal = original;
    window.hubToggle = wrapped;
    return true;
  }

  function patchHubOpen() {
    if (typeof window.hubOpen !== 'function') return false;
    if (window.hubOpen.__mcProjectionV1) return true;

    var original = window.hubOpen;

    var wrapped = function (id, opts) {
      cancelPendingOpen();

      if (currentId && currentId !== id) {
        clearProjectedClass(currentId);
        currentId = null;
      }

      beginTransition(id);

      var result = original.apply(this, arguments);

      pendingOpenTimer = setTimeout(function () {
        pendingOpenTimer = 0;
        projectWhenReady(id, 10);
      }, 90);

      return result;
    };

    wrapped.__mcProjectionV1 = true;
    wrapped.__mcOriginal = original;
    window.hubOpen = wrapped;
    return true;
  }

  function exposeApi() {
    window.CalcOverlay = {
      open: function (id) {
        var c = card(id);

        if (c && c.classList.contains('is-open')) {
          return project(id, 'CalcOverlay.open-existing');
        }

        if (typeof window.hubOpen === 'function') {
          window.hubOpen(id);
          return true;
        }

        return false;
      },
      close: closeOverlay
    };
  }

  function init() {
    ensureStyle();
    ensureOverlay();

    patchHubToggle();
    patchHubOpen();
    exposeApi();

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Tab' && (currentId || transitionId) && !nestedModalOwnsFocus()) {
        var focusables = overlayFocusables();
        if (!focusables.length) return;
        var first = focusables[0];
        var last = focusables[focusables.length - 1];
        var active = document.activeElement;
        var index = focusables.indexOf(active);
        var next = index === -1
          ? (e.shiftKey ? last : first)
          : focusables[
              (index + (e.shiftKey ? -1 : 1) + focusables.length) % focusables.length
            ];

        e.preventDefault();
        next.focus();
        return;
      }

      if (e.key === 'Escape' && (currentId || transitionId)) {
        e.preventDefault();
        closeOverlay();
      }
    });

    document.addEventListener('focusin', keepFocusedControlVisible, true);

    syncVisualViewport();
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', syncVisualViewport, { passive: true });
      window.visualViewport.addEventListener('scroll', syncVisualViewport, { passive: true });
    }
    window.addEventListener('resize', syncVisualViewport, { passive: true });

    window.addEventListener('orientationchange', scheduleMeasure, { passive: true });

    console.log('[MC-MODULE-SURFACE-SINGLE-OWNER] ACTIVE', window.__MC_OVERLAY_PROJECTION_V1);
  }

  window.__MC_OVERLAY_PROJECTION_V1 = {
    build: BUILD,
    owner: 'SINGLE_MODULE_SURFACE_COMPAT',
    contentStrategy: 'OPAQUE_SHELL_PLUS_NO_REPARENT_MODULE_SCROLL',
    domReparent: false,
    legacyAuthority: false,
    mutationObserver: false,
    intervalWatchdog: false,
    pendingOpen: 'SINGLE_CANCELABLE_90MS_PLUS_FINITE_RAF',
    postBootReconcile: 'NOT_REQUIRED_CONDITIONAL_HUB_GUARD',
    closeOwner: 'POINTERUP_PLUS_CLICK',
    shellBackgroundOwner: 'CALCULATOR_OVERLAY_CONTAINER',
    scrollOwner: 'MC_OVERLAY_PROJECTED_CARD_ONLY',
    horizontalGutterPx: 4,
    clinicalDataMutation: false,
    postBootReconciled: true,
    lastOpen: null,
    lastClose: null
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
