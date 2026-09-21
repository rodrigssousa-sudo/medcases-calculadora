/* Authenticated discovery metadata only. Clinical documents stay behind /api/drugs/:id. */
(() => {
  'use strict';
  let loading = false;
  let lastBridge = null;
  async function sync() {
    const bridge = window.__medcasesMcc1Bridge;
    if (!bridge || typeof bridge.fetch !== 'function' || String(bridge.tier).toLowerCase() !== 'premium' || loading) return;
    loading = true;
    try {
      const response = await bridge.fetch('/api/drug-catalog', {method:'GET'});
      if (!response.ok || bridge !== window.__medcasesMcc1Bridge) return;
      const payload = await response.json();
      if (!payload.ok || !Array.isArray(payload.drugs) || !Array.isArray(window.DRUG_DB)) return;
      const known = new Set(window.DRUG_DB.map(d => d.id));
      for (const row of payload.drugs) {
        if (!/^[a-z0-9_]+$/.test(row.id) || !row.name || typeof row.name.pt !== 'string' || typeof row.name.es !== 'string') continue;
        if (known.has(row.id)) continue;
        const record = {id:row.id,name:row.name,category:row.category,icon:row.icon || '💊',
          mc_gold_standard_v1:{referenceOnly:!!row.referenceOnly,calculationAuthorized:false},
          _protectedCatalogMetadata:true};
        window.DRUG_DB.push(record);
        known.add(row.id);
        if (window.ALL_DRUGS_DB) window.ALL_DRUGS_DB[row.id] = record;
      }
      window._buildSearchIndex?.();
      window._fdUpdateCount?.();
      lastBridge = bridge;
      window.dispatchEvent(new Event('medcases:catalog-ready'));
    } catch (_) {
      // An unavailable/expired session never falls back to publishing private files.
    } finally { loading = false; }
  }
  window.addEventListener('medcases:mcc1-ready', sync);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && lastBridge !== window.__medcasesMcc1Bridge) sync();
  });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', sync, {once:true});
  else sync();
  window.__mcProtectedCatalog = Object.freeze({sync});
})();
