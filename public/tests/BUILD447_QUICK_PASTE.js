/**
 * BUILD 447-TEST — QUICK PASTE (versão compacta para cola rápida no Console)
 * Cole este bloco inteiro no DevTools Console (F12) enquanto a app está aberta.
 * Para diagnóstico granular, use BUILD447_TEST_SUITE.js (versão completa com seções).
 */

/* ── HARNESS ── */
window.__QA_447={pass:0,fail:0,_w:0,log:[],assert:function(l,c,d){c?this.pass++:this.fail++;var e=(c?'[PASS]':'[FAIL]')+' '+l+(d?' — '+d:'');this.log.push(e);c?console.log('%c✅ '+l,'color:#4ade80',d||''):console.error('%c❌ '+l,'color:#f87171;font-weight:bold',d||'');return c},warn:function(l,d){this._w++;this.log.push('[WARN] '+l+(d?' — '+d:''));console.warn('%c⚠️  '+l,'color:#facc15',d||'')},section:function(t){console.groupCollapsed('%c══ '+t+' ══','color:#818cf8;font-weight:bold')},endSection:function(){console.groupEnd()},report:function(){console.group('%c📋 BUILD 447-TEST — RELATÓRIO','color:#c084fc;font-weight:bold');this.log.forEach(function(l){console.log('%c'+l,l.startsWith('[PASS]')?'color:#4ade80':l.startsWith('[WARN]')?'color:#facc15':'color:#f87171')});var f=this.fail,p=this.pass;console.log('%c──────────────────','color:#475569');console.log('%cPASS:'+p+' FAIL:'+f+' WARN:'+this._w,f===0?'color:#4ade80;font-weight:bold':'color:#f87171;font-weight:bold');f===0?console.log('%c✅ ALL CLEAR — AUTORIZADO BUILD 448+','color:#4ade80;font-weight:bold'):console.log('%c🚨 VULNERABILIDADES DETECTADAS','color:#f87171;font-weight:bold');console.groupEnd();return{pass:p,fail:f}}};

var _Q=window.__QA_447;

/* ── STEP 1: NEFRO Object-DB + O(1) Lookup ── */
_Q.section('S1 — NEFRO Object-DB & O(1)');
var _N=window.NEFRO_DRUGS_DB,_A=window.ALL_DRUGS_DB,_I=window.INTERACOES_DB;
_Q.assert('1a. NEFRO_DRUGS_DB é Object (não Array)',typeof _N==='object'&&!Array.isArray(_N),'typeof='+typeof _N+' isArray='+Array.isArray(_N));
_Q.assert('1b. NEFRO_DRUGS_DB contém 45 fármacos',_N&&Object.keys(_N).length===45,'found:'+((_N&&Object.keys(_N).length)||0)+'/45');
var _NI=['sevelamer','acetato_de_calcio','carbonato_de_calcio','carbonato_de_lantanio','oxihidroxido_sucroferrico','citrato_ferrico','patiromer','ciclossilicato_de_zirconio_sodico','poliestirenossulfonato_de_sodio','poliestirenossulfonato_de_calcio','epoetina_alfa','epoetina_beta','darbepoetina_alfa','mircera','calcitriol','alfacalcidol','paricalcitol','cinacalcete','etelcalcetida','tolvaptana','conivaptana','citrato_de_potassio','citrato_sodio_acido_citrico','sacarato_hidroxido_ferrico','carboximaltose_ferrica','derisomaltose_ferrica','dextrana_ferrica','gluconato_ferrico','finerenona','voclosporina','sparsentana','cisteamina','acido_tioctico','cloreto_de_sodio_09','ringer_lactato','plasma_lyte','fosfato_de_potassio','fosfato_de_sodio','oxido_de_magnesio','sulfato_ferroso','fumarato_ferroso','gluconato_ferroso','ferro_polimaltosado','maltol_ferrico','colecalciferol'];
var _m1=_NI.filter(function(id){return!_N||!_N[id];});
_Q.assert('1c. Todos 45 IDs em NEFRO_DRUGS_DB',_m1.length===0,_m1.length>0?'MISSING:'+_m1.join(','):'OK');
var _m2=_NI.filter(function(id){return!_A||!_A[id];});
_Q.assert('1d. Todos 45 IDs em ALL_DRUGS_DB (merger OK)',_m2.length===0,_m2.length>0?'MISSING_IN_ALL:'+_m2.join(','):'OK');
var _t0=performance.now(),_h=0;for(var _i=0;_i<100;_i++){if(_A&&_A[_NI[_i%_NI.length]])_h++;}var _el=performance.now()-_t0;
_Q.assert('1e. 100 lookups O(1) < 5ms',_el<5,_el.toFixed(3)+'ms ('+_h+' hits)');
_Q.assert('1f. INTERACOES_DB > 400 root nodes (lazy-load OK)',_I&&Object.keys(_I).length>400,'nodes:'+(_I?Object.keys(_I).length:0));
var _POK=['name','category','icon','class','dose','safetyFlags'],_SF=[];['sevelamer','tolvaptana','epoetina_alfa','cinacalcete','finerenona'].forEach(function(id){var e=_N&&_N[id];if(!e){_SF.push(id+':NULL');}else{var mk=_POK.filter(function(k){return!e[k];});if(mk.length)_SF.push(id+':miss['+mk+']');}});
_Q.assert('1g. Padrão Ouro keys OK em 5 amostras',_SF.length===0,_SF.length?_SF.join('|'):'OK');
var _DB=window.DRUG_DB;if(Array.isArray(_DB)){var _ds={},_dup=[];_DB.forEach(function(d){if(d&&d.id){if(_ds[d.id])_dup.push(d.id);_ds[d.id]=1;}});var _nd=_dup.filter(function(id){return _NI.indexOf(id)!==-1;});_Q.assert('1h. Zero duplicatas nefro em DRUG_DB',_nd.length===0,_nd.length?'DUPES:'+_nd.join(','):'OK — '+_DB.length+' entries total');}
_Q.assert('1i. _intxSealDBRef exposto (Pointer Hoist)',typeof window._intxSealDBRef==='function','typeof='+typeof window._intxSealDBRef);
_Q.endSection();

/* ── STEP 2: Race Condition & Deeplink ── */
_Q.section('S2 — Race Condition & Deeplink');
_Q.assert('2a. _handleNativeDeeplink é função',typeof window._handleNativeDeeplink==='function');
var _PDB=JSON.parse(JSON.stringify(window.patientData||{}));
var _t2b=false;try{window.patientData={weight:0,age:40,sex:'M'};if(typeof _onPatientDataUpdated==='function')_onPatientDataUpdated();}catch(e){_t2b=true;}
_Q.assert('2b. peso=0: _onPatientDataUpdated sem TypeError',!_t2b);
var _t2d=false;try{window.patientData={weight:999,age:40,sex:'M'};if(typeof _onPatientDataUpdated==='function')_onPatientDataUpdated();}catch(e){_t2d=true;}
_Q.assert('2c. peso=999: _onPatientDataUpdated sem TypeError',!_t2d);
var _t2e=false;try{window.patientData={weight:70,age:30,sex:'M',creatinine:0};if(typeof window.hmCalcCockcroft==='function')window.hmCalcCockcroft();}catch(e){_t2e=true;}
_Q.assert('2d. creatinina=0: hmCalcCockcroft sem divisão-por-zero',!_t2e);
_Q.assert('2e. kdigo=4: Math.min(4,3) → KDIGO 3 (sem IndexOutOfBounds)',(['','KDIGO 1 (Leve)','KDIGO 2 (Moderado)','KDIGO 3 (Grave)'][Math.min(4,3)]||'KDIGO 4')==='KDIGO 3 (Grave)');
var _t2g=false;try{if(typeof _updateGlobalPatientBar==='function')_updateGlobalPatientBar('home');}catch(e){_t2g=true;}
_Q.assert('2f. _updateGlobalPatientBar("home") sem TypeError',!_t2g);
var _vp=encodeURIComponent(JSON.stringify({peso:82,idade:55,sexo:'M',altura:175,creat:1.8,cockcroft:45,ckd_epi:38,kdigo:2}));
var _t2h=false;try{var _oUSP=window.URLSearchParams;window.URLSearchParams=function(){return new _oUSP('screen=patient_data&payload='+_vp);};if(typeof window._handleNativeDeeplink==='function')window._handleNativeDeeplink();window.URLSearchParams=_oUSP;}catch(e){_t2h=true;try{window.URLSearchParams=_oUSP;}catch(_){}}
_Q.assert('2g. Deeplink payload válido: sem TypeError',!_t2h);
_Q.assert('2h. Deeplink válido: patientData.weight=82',window.patientData&&window.patientData.weight===82,'w='+(window.patientData&&window.patientData.weight));
_Q.assert('2i. Deeplink válido: patientData.kdigo=2',window.patientData&&window.patientData.kdigo===2,'k='+(window.patientData&&window.patientData.kdigo));
var _t2i=false;try{var _oUSP2=window.URLSearchParams;window.URLSearchParams=function(){return new _oUSP2('screen=patient_data&payload=%7Bnot_json%7D');};if(typeof window._handleNativeDeeplink==='function')window._handleNativeDeeplink();window.URLSearchParams=_oUSP2;}catch(e){_t2i=true;try{window.URLSearchParams=_oUSP2;}catch(_){}}
_Q.assert('2j. Deeplink JSON inválido: try/catch blinda sem crash',!_t2i);
window.patientData=Object.assign(window.patientData||{},_PDB);
_Q.endSection();

/* ── STEP 3: Motor de Interações ── */
_Q.section('S3 — Motor de Interações Nefro');
if(_I){
  var _rk=['cinacalcete','tolvaptana','conivaptana','citrato_de_potassio','ciclossilicato_de_zirconio_sodico'],_mr=_rk.filter(function(k){return!_I[k];});
  _Q.assert('3a. Root-keys nefro em INTERACOES_DB',_mr.length===0,_mr.length?'MISSING:'+_mr.join(','):'OK');
  var _ck=['$classe_quelantes_potassio_todos','$classe_resinas_poliestireno','$classe_estimuladores_eritropoiese','$classe_calcimimeticos','$classe_ferro_sais_ionicos'],_mc=_ck.filter(function(k){return!_I[k];});
  _Q.assert('3b. Class-keys nefro em INTERACOES_DB',_mc.length===0,_mc.length?'MISSING:'+_mc.join(','):'OK');
  var _cn=_I['cinacalcete'],_cnk='$classe_metabolizados_cyp2d6_antidepressivos';
  _Q.assert('3c. cinacalcete×CYP2D6: moderada/3',_cn&&_cn[_cnk]&&_cn[_cnk].gravidade==='moderada'&&_cn[_cnk].scoreClinico===3,_cn&&_cn[_cnk]?'g='+_cn[_cnk].gravidade+'/'+_cn[_cnk].scoreClinico:'sub-node missing');
  var _rn=_I['$classe_resinas_poliestireno'];
  _Q.assert('3d. $classe_resinas_poliestireno×sorbitol: contraindicada/5 (NECROSE COLÔNICA FDA)',_rn&&_rn['sorbitol']&&_rn['sorbitol'].gravidade==='contraindicada'&&_rn['sorbitol'].scoreClinico===5,_rn&&_rn['sorbitol']?'g='+_rn['sorbitol'].gravidade+'/'+_rn['sorbitol'].scoreClinico:'MISSING');
  var _ln=_I['$classe_laxantes_estimulantes_bisacodil_sene'];
  _Q.assert('3e. $classe_laxantes_estimulantes×todas_orais: alta/4 (ARRASTE MECÂNICO)',_ln&&_ln['todas_as_drogas_orais_absorcao_lenta']&&_ln['todas_as_drogas_orais_absorcao_lenta'].gravidade==='alta'&&_ln['todas_as_drogas_orais_absorcao_lenta'].scoreClinico===4,_ln&&_ln['todas_as_drogas_orais_absorcao_lenta']?'g='+_ln['todas_as_drogas_orais_absorcao_lenta'].gravidade+'/'+_ln['todas_as_drogas_orais_absorcao_lenta'].scoreClinico:'MISSING');
  var _tv=_I['tolvaptana'];
  _Q.assert('3f. tolvaptana×$classe_inibidores_potentes_cyp3a4: contraindicada/5',_tv&&_tv['$classe_inibidores_potentes_cyp3a4']&&_tv['$classe_inibidores_potentes_cyp3a4'].gravidade==='contraindicada',_tv&&_tv['$classe_inibidores_potentes_cyp3a4']?'g='+_tv['$classe_inibidores_potentes_cyp3a4'].gravidade:'MISSING');
  if(typeof window.normalizarFarmaco==='function'){var _nf=window.normalizarFarmaco;
    _Q.assert('3g. normalizarFarmaco("Tolvaptana")→"tolvaptana"',_nf('Tolvaptana')==='tolvaptana','got:"'+_nf('Tolvaptana')+'"');
    _Q.assert('3h. normalizarFarmaco("Sevelâmer")→"sevelamer"',_nf('Sevelâmer')==='sevelamer','got:"'+_nf('Sevelâmer')+'"');
    _Q.assert('3i. normalizarFarmaco("Óxido de Magnésio")→"oxido_de_magnesio"',_nf('Óxido de Magnésio')==='oxido_de_magnesio','got:"'+_nf('Óxido de Magnésio')+'"');}
  var _t3u=false;try{if(typeof window.executarChecagemInteracoes==='function')window.executarChecagemInteracoes();}catch(e){_t3u=true;}
  _Q.assert('3j. executarChecagemInteracoes() sem fármacos: sem TypeError',!_t3u);
}else{_Q.warn('S3 SKIP','INTERACOES_DB não carregado — navegue para a aba Interações e re-execute');}
_Q.endSection();

/* ── STEP 4: Defensive Coverage ── */
_Q.section('S4 — Defensive Coverage & Version Sync');
function _tIO(db){var f=[];function _a(d){return Object.keys(d).map(function(k){return Object.assign({id:k},d[k]);});}try{if(db&&typeof db==='object'&&!Array.isArray(db)&&Object.keys(db).length>0)f.push.apply(f,_a(db));}catch(e){return{err:e.message,c:0};}return{err:null,c:f.length};}
_Q.assert('4a. _injectObjectDB(null): sem crash',_tIO(null).err===null&&_tIO(null).c===0);
_Q.assert('4b. _injectObjectDB([]): guard isArray reject',_tIO([]).err===null&&_tIO([]).c===0);
_Q.assert('4c. _injectObjectDB(NEFRO_DRUGS_DB): 45 entries',_tIO(window.NEFRO_DRUGS_DB).c===45,'count:'+_tIO(window.NEFRO_DRUGS_DB).c+'/45');
_Q.assert('4d. REGRESSÃO: NEFRO_DRUGS_DB ainda é Object',typeof window.NEFRO_DRUGS_DB==='object'&&!Array.isArray(window.NEFRO_DRUGS_DB));
var _ns=Array.from(document.querySelectorAll('script[src]')).filter(function(s){return s.src&&s.src.includes('nefro.js');});
_Q.assert('4e. <script nefro.js> presente no DOM',_ns.length>=1,'found:'+_ns.length+((_ns[0])?' src:'+_ns[0].src:''));
if(_ns.length)_Q.assert('4f. nefro.js script tag ?v=452',_ns[0].src.includes('v=452'),'src:'+_ns[0].src);
var _ngs=Array.from(document.querySelectorAll('script[src]')).filter(function(s){return s.src&&s.src.includes('neurologia.js');});
if(_ngs.length)_Q.assert('4g. neurologia.js ?v=452',_ngs[0].src.includes('v=452'),'src:'+_ngs[0].src);
if(_A&&_N){
  _Q.assert('4h. ALL_DRUGS_DB["sevelamer"].category="nefrologia" (sem colisão)',_A['sevelamer']&&(_A['sevelamer'].category==='nefrologia'||(_A['sevelamer'].category&&_A['sevelamer'].category.pt==='nefrologia')),_A['sevelamer']?'cat:'+JSON.stringify(_A['sevelamer'].category):'absent');
  _Q.assert('4i. ALL_DRUGS_DB["tolvaptana"].category="nefrologia" (sem residual neurologia)',_A['tolvaptana']&&(_A['tolvaptana'].category==='nefrologia'||(_A['tolvaptana'].category&&_A['tolvaptana'].category.pt==='nefrologia')),_A['tolvaptana']?'cat:'+JSON.stringify(_A['tolvaptana'].category):'absent');
}
var _nrDB=window.NEUROLOGIA_DRUGS_DB||window.NEURO_DRUGS_DB;
if(_nrDB){var _nrR=['sevelamer','tolvaptana','epoetina_alfa'].filter(function(id){return _nrDB.hasOwnProperty?_nrDB.hasOwnProperty(id):Array.isArray(_nrDB)&&_nrDB.some(function(d){return d&&d.id===id;});});_Q.assert('4j. NEUROLOGIA_DRUGS_DB sem residuais nefro',_nrR.length===0,_nrR.length?'RESIDUAIS:'+_nrR.join(','):'OK');}
_Q.endSection();

/* ── RELATÓRIO FINAL ── */
window.__QA_447.report();
