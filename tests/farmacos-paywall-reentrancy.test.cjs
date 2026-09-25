'use strict';
const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'data/drug_access_free60.v2.json')));
const script = id => html.match(new RegExp('<script id="' + id + '">([\\s\\S]*?)<\\/script>'))[1];

// Execute the production capture handlers in registration order. Modal lifecycle
// is tested separately with the real Flutter Navigator and presentation guard.
async function harness({early = true, premium = false, web = false, delayedPolicy = false} = {}) {
  const listeners = new Map(), documentListeners = new Map(), observers = [];
  const requests = [], opened = [], timers = [];
  class Element {
    constructor(id, locked = false) {
      this.attrs = {'data-drug-id': id}; this.children = [];
      if (locked) this.attrs['data-mc-premium-locked'] = 'true';
    }
    getAttribute(key) { return this.attrs[key] || null; }
    setAttribute(key, value) { this.attrs[key] = value; }
    removeAttribute(key) { delete this.attrs[key]; }
    matches(selector) {
      return selector === '[data-mc-premium-locked="true"]'
        ? this.attrs['data-mc-premium-locked'] === 'true'
        : Boolean(this.attrs['data-drug-id']);
    }
    closest(selector) { return this.matches(selector) ? this : null; }
    querySelector() { return this.children[0] || null; }
    querySelectorAll() { return []; }
    appendChild(child) { child.parent = this; this.children.push(child); }
    remove() { this.parent.children = this.parent.children.filter(child => child !== this); }
  }
  const locked = new Element('varfarina', true), free = new Element(manifest.freeIds[0]);
  assert.ok(!manifest.freeIds.includes('varfarina'));
  const rows = [locked, free];
  const add = (map, type, fn) => map.set(type, [...(map.get(type) || []), fn]);
  const document = {
    body: {}, readyState: 'loading', documentElement: {getAttribute: () => 'pt'},
    querySelectorAll: () => rows, createElement: () => new Element(),
    addEventListener: (type, fn) => add(documentListeners, type, fn),
  };
  let releasePolicy;
  const policy = delayedPolicy ? new Promise(resolve => releasePolicy = resolve) : Promise.resolve();
  const window = {
    location: {search: '?lang=pt'}, __medcasesMcc1Bridge: {tier: premium ? 'premium' : 'free'},
    hmOpenDrug: id => opened.push(id),
    addEventListener: (type, fn) => add(listeners, type, fn),
    dispatchEvent: event => dispatch(event.type, locked, event),
  };
  if (web) window.parent = {postMessage: message => requests.push(JSON.parse(message))};
  else { window.parent = window; window.MCUpgrade = {postMessage: lang => requests.push(lang)}; }
  function dispatch(type, row = locked, extra = {}) {
    const event = {type, target: row, key: '', repeat: false, defaultPrevented: false, stopped: false,
      composedPath: () => [row], preventDefault() { this.defaultPrevented = true; },
      stopImmediatePropagation() { this.stopped = true; }, stopPropagation() {}, ...extra};
    for (const handler of listeners.get(type) || []) { handler(event); if (event.stopped) break; }
    return event;
  }
  const context = vm.createContext({window, document, Element, URLSearchParams,
    fetch: async () => { await policy; return {ok: true, json: async () => manifest}; },
    MutationObserver: class { constructor(fn) { observers.push(fn); } observe() {} },
    setTimeout: fn => timers.push(fn), console: {log() {}, warn() {}, error() {}},
    CustomEvent: class {constructor(type, init) {this.type = type; this.detail = init?.detail;}},
  });
  if (early) vm.runInContext(script('mc-r8-5-early-premium-paywall-capture'), context);
  vm.runInContext(script('mc-r8-2-free60-premium-lock-owner'), context);
  for (const fn of documentListeners.get('DOMContentLoaded') || []) fn();
  const flush = async () => { for (let i = 0; i < 12; i++) await Promise.resolve(); };
  await flush();
  return {requests, opened, dispatch, window, locked, free, flush, releasePolicy,
    rebuild() { for (const observer of observers) observer([{addedNodes: rows}]); window.__mcR82DrugAccess.refresh(); },
    scroll() {
      for (const type of ['pointerdown', 'touchstart', 'mousedown', 'pointermove', 'touchmove', 'scroll', 'pointerup', 'touchend']) {
        const event = dispatch(type);
        assert.equal(event.defaultPrevented, false, `${type} must preserve native scrolling`);
      }
    },
  };
}

for (const early of [true, false]) {
  const owner = early ? 'early + canonical owners' : 'canonical owner alone';
  test(`${owner}: scroll has no explicit activation and emits zero requests`, async () => {
    const h = await harness({early});
    for (let i = 0; i < 4; i++) h.scroll();
    assert.equal(h.requests.length, 0);
    assert.equal(h.opened.length, 0);
  });
  test(`${owner}: one click, scroll/rebuild, then new explicit click`, async () => {
    const h = await harness({early});
    h.dispatch('click');
    assert.equal(h.requests.length, 1);
    h.scroll(); h.rebuild(); h.dispatch('medcases:mcc1-ready');
    assert.equal(h.requests.length, 1);
    h.dispatch('click'); // no timer/debounce prevents a valid action after close
    assert.equal(h.requests.length, 2);
  });
  test(`${owner}: Free drug and Premium user emit no requests`, async () => {
    const h = await harness({early});
    for (const type of ['pointerdown', 'touchstart', 'click', 'keydown']) h.dispatch(type, h.free, {key: 'Enter'});
    assert.equal(h.requests.length, 0);
    const premium = await harness({early, premium: true});
    for (const type of ['pointerdown', 'click', 'keydown']) premium.dispatch(type, premium.locked, {key: 'Enter'});
    premium.window.hmOpenDrug('varfarina');
    assert.equal(premium.requests.length, 0);
    assert.deepEqual(premium.opened, ['varfarina']);
  });
  test(`${owner}: keyboard activation works without held-key repeats`, async () => {
    const h = await harness({early});
    h.dispatch('keydown', h.locked, {key: 'Enter'});
    assert.equal(h.requests.length, 1);
    h.dispatch('keydown', h.locked, {key: 'Enter', repeat: true});
    assert.equal(h.requests.length, 1);
    h.dispatch('keydown', h.locked, {key: ' '});
    assert.equal(h.requests.length, 2);
  });
}
test('web parent bridge emits only explicit click requests', async () => {
  const h = await harness({web: true});
  h.scroll(); assert.equal(h.requests.length, 0);
  h.dispatch('click');
  assert.equal(h.requests.length, 1);
  assert.equal(h.requests[0].type, 'medcases:premium-upgrade');
});
test('policy loading does not turn scroll/rebuild into a deferred paywall', async () => {
  const h = await harness({early: false, delayedPolicy: true});
  h.scroll(); h.rebuild(); h.releasePolicy(); await h.flush();
  assert.equal(h.requests.length, 0);
  h.dispatch('click'); assert.equal(h.requests.length, 1);
});
test('root/public parity and no timer-based paywall guard', () => {
  assert.equal(html, fs.readFileSync(path.join(root, 'public/index.html'), 'utf8'));
  for (const id of ['mc-r8-5-early-premium-paywall-capture', 'mc-r8-2-free60-premium-lock-owner']) {
    assert.ok(!script(id).includes('lastUpgradeAt'));
  }
});
