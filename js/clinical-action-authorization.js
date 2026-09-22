/* Local release closure: the resource owner verifies MCC1 before pharmacological operations. */
(() => {
  'use strict';
  const transport = window.fetch.bind(window);
  const parentOrigins = new Set(['https://medcasespro.com','https://www.medcasespro.com',
    'https://medcases-pro.web.app','https://medcases-pro.firebaseapp.com']);
  let verified = null, epoch = 0;
  const live = () => verified && Date.now() < verified.expiresAt && verified.bridge === window.__medcasesMcc1Bridge;
  const capabilities = {weight:'dose_by_weight',renal:'renal_adjustment',infusion:'dose_by_weight',preparation:'dose_by_weight',hepatic:'dose_by_weight'};
  function allow(action) {
    return !!(live() && verified.tier === 'premium' && verified.capabilities.includes(capabilities[action]));
  }
  function requestUpgrade() {
    const lang=String(window.currentLang || document.documentElement.lang || 'es').startsWith('pt')?'pt':'es';
    if(window.MCUpgrade?.postMessage)window.MCUpgrade.postMessage(lang);
    else if(window.parent!==window)window.parent.postMessage(JSON.stringify({type:'medcases:premium-upgrade',lang}),'*');
    window.dispatchEvent(new CustomEvent('medcases:action-denied'));
  }
  async function verifyBridge() {
    if(live())return;
    if(verified?.tier==='premium' && (!window.__medcasesMcc1Bridge || window.__medcasesMcc1Bridge.tier!=='premium')) {verified=null;location.reload();return;}
    const serial=++epoch;verified=null;
    const bridge=window.__medcasesMcc1Bridge;
    if(!bridge || typeof bridge.fetch!=='function')return;
    try {
      const response=await bridge.fetch('/api/session',{method:'GET'});
      const data=await response.json();
      if(serial!==epoch || bridge!==window.__medcasesMcc1Bridge || !response.ok || data.ok!==true ||
        !['free','premium'].includes(data.tier) || !Array.isArray(data.capabilities) || !Number.isSafeInteger(data.expiresAtEpoch) || data.expiresAtEpoch*1000<=Date.now() || data.expiresAtEpoch*1000>Date.now()+900000)return;
      verified={bridge,tier:data.tier,capabilities:data.capabilities,expiresAt:data.expiresAtEpoch*1000};
      window.dispatchEvent(new Event('medcases:actions-ready'));
      window.dispatchEvent(new Event('medcases:mcc1-ready'));
      setTimeout(()=>{if(verified?.bridge===bridge && !live()){
        const hadPrivate=verified.tier==='premium';verified=null;
        if(hadPrivate){location.reload();return;}
        document.querySelectorAll('.mcd-calc-result,.mcd-result,#fd-renal-dynamic').forEach(node=>{node.textContent='';});
        window.dispatchEvent(new Event('medcases:mcc1-ready'));
      }},Math.max(0,verified.expiresAt-Date.now())+1);
    } catch (_) {verified=null;}
  }
  Object.defineProperty(window,'__mcClinicalActionAllowed',{value:allow,writable:false,configurable:false});
  Object.defineProperty(window,'__mcClinicalUpgrade',{value:requestUpgrade,writable:false,configurable:false});
  // Only the iframe itself talks to its same-origin gateway. Parent never reads
  // child DOM, and a supplied token never grants capabilities before verification.
  window.addEventListener('message',async event=>{
    if(event.source!==window.parent || !parentOrigins.has(event.origin))return;
    let data;try{data=typeof event.data==='string'?JSON.parse(event.data):event.data;}catch(_){return;}
    if(data?.type==='medcases:session-revoke'){const hadPrivate=verified?.tier==='premium';epoch++;verified=null;window.__medcasesMcc1Bridge?.revoke?.();if(hadPrivate)location.reload();return;}
    if(data?.type!=='medcases:session' || typeof data.token!=='string' || data.token.length>8192)return;
    const token=data.token;let revoked=false;
    const bridge=Object.freeze({
      get tier(){return live()?verified.tier:'free';},
      get capabilities(){return live()?verified.capabilities:[];},
      async fetch(path,init={}) {
        if(revoked)throw Error('SESSION_REVOKED');
        const url=new URL(path,location.origin);
        if(url.origin!==location.origin || !url.pathname.startsWith('/api/') || url.username || url.password)throw Error('TARGET_REJECTED');
        const headers=new Headers(init.headers||{});headers.set('Authorization','Bearer '+token);
        return transport(url.href,{...init,headers,credentials:'omit',cache:'no-store',redirect:'error'});
      },
      revoke(){revoked=true;verified=null;epoch++;}
    });
    Object.defineProperty(window,'__medcasesMcc1Bridge',{value:bridge,writable:false,configurable:true});
    await verifyBridge();
    window.dispatchEvent(new Event('medcases:mcc1-ready'));
  });
  window.addEventListener('medcases:mcc1-ready',verifyBridge);
  // Capture at window, ahead of legacy document and target listeners. DOM
  // annotations describe the surface; verified MCC1 remains the authority.
  const surfaces = window.MedCasesCommercialSurfaces || [];
  Object.defineProperty(window,'__mcRunCommercialSurface',{value:(surfaceId,operation) => {
    const surface=surfaces.find(row=>row.surfaceId===surfaceId);
    if (!surface || !surface.capability || !allow(surface.action)) return null;
    window.dispatchEvent(new CustomEvent('medcases:surface-operation',{detail:{surfaceId}}));
    return operation();
  },writable:false,configurable:false});
  function surfaceFor(target) {
    if (!target?.closest) return null;
    for (const surface of surfaces) {
      if (surface.capability && !surface.programmaticEntries && target.closest(surface.selector)) return surface;
    }
    const marked = target.closest('[data-mc-capability]');
    if (marked) return {capability:marked.dataset.mcCapability,action:null};
    return null;
  }
  function surfaceAllowed(surface) {
    return surface.action ? allow(surface.action) : !!(live() && verified.tier==='premium' && verified.capabilities.includes(surface.capability));
  }
  let resultStyle;
  function annotateAndProtectResults() {
    if (!resultStyle && typeof document.createElement === 'function') {
      resultStyle=document.createElement('style');
      resultStyle.textContent='[data-mc-commercial-result-locked="true"]{display:none!important}';
      (document.head || document.documentElement).appendChild(resultStyle);
    }
    for (const surface of surfaces) {
      if (!surface.capability) continue;
      if (!surface.programmaticEntries) document.querySelectorAll(surface.selector).forEach(node => {
        if (node.dataset.mcCapability !== surface.capability) node.dataset.mcCapability = surface.capability;
        if (node.dataset.mcSurface !== surface.surfaceId) node.dataset.mcSurface = surface.surfaceId;
      });
      for (const selector of (surface.maskSelectors || surface.resultSelectors)) {
        document.querySelectorAll(selector).forEach(node => {
          const locked = !allow(surface.action);
          // Removing our commercial mask never unhides a clinical safety gate.
          if (locked && node.getAttribute('data-mc-commercial-result-locked') !== 'true') {
            node.setAttribute('data-mc-commercial-result-locked','true');
          } else if (!locked && node.hasAttribute('data-mc-commercial-result-locked')) {
            node.removeAttribute('data-mc-commercial-result-locked');
          }
        });
      }
    }
  }
  for (const name of ['click','submit','change','input','pointerup','keydown']) {
    window.addEventListener(name,event => {
      if (name === 'keydown' && !['Enter',' '].includes(event.key)) return;
      const surface = surfaceFor(event.target);
      if (!surface || surfaceAllowed(surface)) return;
      event.preventDefault(); event.stopPropagation(); event.stopImmediatePropagation();
      requestUpgrade();
    },true);
  }
  document.addEventListener('DOMContentLoaded',() => {
    annotateAndProtectResults();
    if (typeof MutationObserver === 'function') {
      new MutationObserver(annotateAndProtectResults).observe(document.documentElement,{childList:true,subtree:true});
    }
  },{once:true});
  window.addEventListener('medcases:actions-ready',annotateAndProtectResults);
  // Public globals declared by legacy scripts share the global binding. Wrapping
  // them also protects direct callers; private dose paths have guards in source.
  function install() {
    for(const [name,action] of Object.entries({calculateInfusion:'infusion',infCopyPrescription:'infusion',_infBidir:'infusion',_infAmountUnitChange:'infusion',_infWeightInlineUpdate:'infusion',bicApplyPreset:'preparation',_copyDoseToClipboard:'weight',_fdCalcDoseFromModal:'weight',calcDrugDose:'weight',calcShowInlineResult:'weight',selectDrug:'weight'})) {
      const fn=window[name];if(typeof fn!=='function'||fn.__mcGuarded)continue;
      const guarded=function(...args){if(!allow(action))return null;return fn.apply(this,args);};
      Object.defineProperty(guarded,'__mcGuarded',{value:true});window[name]=guarded;
    }
  }
  document.addEventListener('DOMContentLoaded',()=>{install();verifyBridge();
    if(window.parent!==window)window.parent.postMessage(JSON.stringify({type:'medcases:session-request'}),'*');
  },{once:true});
  window.addEventListener('medcases:mcc1-ready',install);
})();
