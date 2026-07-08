/* ================================================================
   MedCases Pro — BUILD 298 — MOBILE ACCESSORY BAR (REWRITE)
   ----------------------------------------------------------------
   Barra acessória fixa (Sticky Accessory Bar) acima do teclado
   virtual. BUILD 298: removida navegação sequencial (Anterior/Próximo).
   Mantido apenas um botão "OK" / "Hecho" alinhado à direita que
   chama blur() e fecha o teclado.

   COMPORTAMENTO:
   - Aparece ao focar QUALQUER um dos 4 inputs do paciente
   - Botão único "OK" / "Hecho" chama blur() → fecha teclado + barra
   - O médico pode tocar diretamente em qualquer campo sem restrição
   - Posição: fixed na parte inferior da visualViewport (acima do teclado)
   - Suporta visualViewport API (iOS ≥ 13, Android Chrome ≥ 62)
     com fallback para window.innerHeight

   CAMPOS COBERTOS: hm-weight, hm-age, hm-height, hm-creatinina

   ZERO impacto em lógica clínica — apenas UI de fechamento de teclado.
================================================================ */
;(function (window) {
  'use strict';

  /* ── Configuração ── */
  var INPUT_IDS = ['hm-weight', 'hm-age', 'hm-height', 'hm-creatinina'];
  var BAR_ID    = 'mc-accessory-bar';

  /* ── Estado ── */
  var _bar     = null;
  var _visible = false;

  /* ────────────────────────────────────────────────────────────────
     CRIAÇÃO DA BARRA
  ──────────────────────────────────────────────────────────────── */
  function _createBar() {
    if (document.getElementById(BAR_ID)) return;

    var bar = document.createElement('div');
    bar.id = BAR_ID;
    bar.setAttribute('role', 'toolbar');
    bar.setAttribute('aria-label', 'Fechar teclado');

    /* Estilos inline — independentes de qualquer CSS do app */
    bar.style.cssText = [
      'position: fixed',
      'left: 0',
      'right: 0',
      'bottom: 0',
      'z-index: 99999',
      'display: none',          /* começa oculta */
      'align-items: center',
      'justify-content: flex-end',
      'padding: 6px 12px',
      'background: #1a2035',
      'border-top: 1px solid rgba(56,189,248,0.25)',
      'box-shadow: 0 -2px 12px rgba(0,0,0,0.45)',
      /* Evita que o iOS encolha a barra sob o safe-area */
      'padding-bottom: calc(6px + env(safe-area-inset-bottom, 0px))',
      'box-sizing: border-box',
      '-webkit-tap-highlight-color: transparent'
    ].join(';');

    /* Botão único OK/Hecho */
    var btnDone = _mkBtn('OK', 'mc-acc-done', _dismiss);

    bar.appendChild(btnDone);

    document.body.appendChild(bar);
    _bar = bar;

    /* Posiciona acima do teclado via visualViewport */
    _bindViewport();

    console.log('[ACCESSORY_BAR] BUILD 298: barra criada — botão único OK');
  }

  /* ────────────────────────────────────────────────────────────────
     HELPER: cria botão da barra
  ──────────────────────────────────────────────────────────────── */
  function _mkBtn(label, id, handler) {
    var btn = document.createElement('button');
    btn.id   = id;
    btn.type = 'button';
    btn.textContent = label;
    btn.style.cssText = [
      'border: none',
      'border-radius: 8px',
      'padding: 8px 20px',
      'font-size: 15px',
      'font-weight: 700',
      'cursor: pointer',
      'min-height: 36px',
      'min-width: 64px',
      '-webkit-tap-highlight-color: transparent',
      'background: #38bdf8',
      'color: #0a0e1a'
    ].join(';');

    /* touchstart para resposta imediata no iOS */
    btn.addEventListener('touchstart', function (e) {
      e.preventDefault();
      handler();
    }, { passive: false });

    /* mousedown fallback para desktop/Android */
    btn.addEventListener('mousedown', function (e) {
      e.preventDefault();
      handler();
    });

    return btn;
  }

  /* ────────────────────────────────────────────────────────────────
     POSICIONAMENTO: visualViewport mantém barra acima do teclado
  ──────────────────────────────────────────────────────────────── */
  function _updateBarPosition() {
    if (!_bar || !_visible) return;

    if (window.visualViewport) {
      /* Viewport visual = área visível acima do teclado */
      var vvTop    = window.visualViewport.offsetTop  || 0;
      var vvHeight = window.visualViewport.height;
      var bottom   = window.innerHeight - (vvTop + vvHeight);
      /* bottom é o espaço ocupado pelo teclado; posiciona barra exatamente acima */
      _bar.style.bottom = Math.max(0, bottom) + 'px';
    } else {
      _bar.style.bottom = '0px';
    }
  }

  function _bindViewport() {
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', _updateBarPosition, { passive: true });
      window.visualViewport.addEventListener('scroll', _updateBarPosition, { passive: true });
    } else {
      window.addEventListener('resize', _updateBarPosition, { passive: true });
    }
  }

  /* ────────────────────────────────────────────────────────────────
     SHOW / HIDE
  ──────────────────────────────────────────────────────────────── */
  function _show() {
    if (!_bar) return;
    _visible = true;
    _bar.style.display = 'flex';
    _updateBarPosition();
  }

  function _hide() {
    if (!_bar) return;
    _visible = false;
    _bar.style.display = 'none';
  }

  function _dismiss() {
    /* Fecha teclado via blur no elemento ativo */
    var active = document.activeElement;
    if (active && typeof active.blur === 'function') active.blur();
    _hide();
  }

  /* ────────────────────────────────────────────────────────────────
     LISTENERS DE FOCO / BLUR
  ──────────────────────────────────────────────────────────────── */
  function _onFocus(e) {
    var el = e.target;
    if (!el || el.tagName !== 'INPUT') return;
    if (INPUT_IDS.indexOf(el.id) === -1) return;
    /* Pequeno delay para iOS terminar de reposicionar viewport */
    setTimeout(function () { _show(); }, 80);
  }

  function _onBlur(e) {
    var el = e.target;
    if (!el || el.tagName !== 'INPUT') return;
    if (INPUT_IDS.indexOf(el.id) === -1) return;

    /* Oculta barra somente se o novo foco NÃO for outro campo da lista
       e NÃO for o botão OK da própria barra. */
    setTimeout(function () {
      var active = document.activeElement;
      if (!active) { _hide(); return; }

      /* Mantém barra se foco foi para outro input da lista */
      if (active.tagName === 'INPUT' && INPUT_IDS.indexOf(active.id) !== -1) return;

      /* Mantém barra se foco foi para o botão OK da barra */
      if (_bar && _bar.contains(active)) return;

      _hide();
    }, 150);
  }

  /* ────────────────────────────────────────────────────────────────
     INICIALIZAÇÃO
  ──────────────────────────────────────────────────────────────── */
  function _init() {
    _createBar();

    /* Escuta foco/blur em capture phase (pega todos os inputs) */
    document.addEventListener('focus', _onFocus, true);
    document.addEventListener('blur',  _onBlur,  true);

    console.log('[ACCESSORY_BAR] BUILD 298: Sticky Accessory Bar ativa (botão OK único) — campos: ' + INPUT_IDS.join(', '));
  }

  /* Boot */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', _init);
  } else {
    _init();
  }

})(window);
