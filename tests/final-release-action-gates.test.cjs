'use strict';
const {test}=require('node:test');const assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.join(__dirname,'..');const code=fs.readFileSync(path.join(root,'js/clinical-action-authorization.js'),'utf8');
function harness(){
 const listeners=new Map(),docListeners=new Map();let calls=0,fetches=0,reloads=0;
 const parent={postMessage(){}};
 const context={Headers,Response,URL,Date,console,setTimeout:()=>0,
  location:{origin:'https://medcasescalcu.com',reload(){reloads++;}},
  Event:class{constructor(type){this.type=type;}},CustomEvent:class{constructor(type){this.type=type;}},
  document:{documentElement:{lang:'pt'},addEventListener(name,fn){docListeners.set(name,[...(docListeners.get(name)||[]),fn]);},querySelectorAll:()=>[]},
  parent,fetch:async()=>{fetches++;return new Response('{}',{status:401});},
  addEventListener(name,fn){listeners.set(name,[...(listeners.get(name)||[]),fn]);},
  dispatchEvent(e){for(const fn of listeners.get(e.type)||[])fn(e);},
 };
 context.window=context;for(const name of ['calculateInfusion','infCopyPrescription','_infBidir','_infAmountUnitChange','_infWeightInlineUpdate'])context[name]=()=>{calls++;return 'RESULT';};
 vm.createContext(context);vm.runInContext(code,context);
 for(const fn of docListeners.get('DOMContentLoaded')||[])fn();
 return {context,listeners,docListeners,counts:()=>({calls,fetches,reloads}),async session(tier,expiry=Date.now()/1000+600){
  const bridge={tier,fetch:async()=>new Response(JSON.stringify({ok:true,tier,capabilities:tier==='premium'?['dose_by_weight','renal_adjustment']:[],expiresAtEpoch:Math.floor(expiry)}))};
  context.__medcasesMcc1Bridge=bridge;context.dispatchEvent(new context.Event('medcases:mcc1-ready'));
  await new Promise(setImmediate);await new Promise(setImmediate);
 }};
}
for(const state of ['FREE','TRIAL','PREMIUM','EXPIRED'])test(`resource-owned gates and direct infusion callers: ${state}`,async()=>{
 const h=harness();const paid=['TRIAL','PREMIUM'].includes(state);
 assert.equal(h.context.__mcClinicalActionAllowed('renal'),false);
 await h.session(paid?'premium':'free');
 for(const action of ['weight','renal','hepatic','preparation','infusion'])assert.equal(h.context.__mcClinicalActionAllowed(action),paid);
 for(const name of ['calculateInfusion','infCopyPrescription','_infBidir','_infAmountUnitChange','_infWeightInlineUpdate'])assert.equal(h.context[name](),paid?'RESULT':null);
 assert.equal(h.counts().calls,paid?5:0);
});
test('iframe messages require exact parent origin/source; invalid token cannot unlock',async()=>{
 const h=harness();const handlers=h.listeners.get('message');
 for(const origin of ['https://evil.invalid','https://medcasespro.com.evil.invalid'])for(const fn of handlers)await fn({origin,source:h.context.parent,data:{type:'medcases:session',token:'forged'}});
 assert.equal(h.counts().fetches,0);
 for(const fn of handlers)await fn({origin:'https://medcasespro.com',source:{},data:{type:'medcases:session',token:'forged'}});
 assert.equal(h.counts().fetches,0);
 for(const fn of handlers)await fn({origin:'https://medcasespro.com',source:h.context.parent,data:{type:'medcases:session',token:'forged'}});
 assert.ok(h.counts().fetches>0);assert.equal(h.context.__mcClinicalActionAllowed('weight'),false);
});
test('expiry and explicit revoke invalidate privileged operations',async()=>{
 const h=harness();await h.session('premium',Date.now()/1000-1);
 assert.equal(h.context.__mcClinicalActionAllowed('weight'),false);
 await h.session('premium');assert.equal(h.context.__mcClinicalActionAllowed('weight'),true);
 for(const fn of h.listeners.get('message'))await fn({origin:'https://medcasespro.com',source:h.context.parent,data:{type:'medcases:session-revoke'}});
 assert.equal(h.context.__mcClinicalActionAllowed('weight'),false);assert.equal(h.counts().reloads,1);
});
test('every added inline gate precedes its original body; formula and data files untouched by this guard',()=>{
 const source=fs.readFileSync(path.join(root,'index.html'),'utf8');
 assert.equal(source.split('MEDCASES_OPERATION_GATE_V1').length-1,14);
 for(const name of ['_fdCalcDoseFromModal','calcDrugDose','calcShowInlineResult'])assert.match(source,new RegExp('function '+name+'\\([^)]*\\) \\{\\s+if \\(!window\\.__mcClinicalActionAllowed'));
 assert.match(source,/window\.obterDosePorFiltrado = function\([^)]*\) \{\s+if \(!window\.__mcClinicalActionAllowed\?\.\('renal'\)/);
 assert.ok(!/function _checkRenalAlert[^{}]*\{\s+if \(!window\.__mcClinicalActionAllowed/.test(source));
 assert.equal(source,fs.readFileSync(path.join(root,'public/index.html'),'utf8'));
});
test('all fourteen private/direct guards reject before touching DOM or dose operands',()=>{
 const acorn=require('/private/tmp/medcases-global-closure-server-deps/node_modules/acorn');
 const source=fs.readFileSync(path.join(root,'index.html'),'utf8');let count=0;
 for(const match of source.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi)){
 if(/\bsrc=|application\//i.test(match[1]))continue;
 const ast=acorn.parse(match[2],{ecmaVersion:'latest',allowReturnOutsideFunction:true});
 function visit(n){if(!n?.type)return;
 if(['FunctionDeclaration','FunctionExpression','ArrowFunctionExpression'].includes(n.type)&&n.body.type==='BlockStatement'){
 const first=n.body.body[0];const text=first?match[2].slice(first.start,first.end):'';
 if(text.includes('__mcClinicalActionAllowed')){
 const fn=vm.runInNewContext('('+match[2].slice(n.start,n.end)+')',{window:{__mcClinicalActionAllowed:()=>false}});
 assert.doesNotThrow(()=>fn());count++;
 }
 }
 for(const[k,v]of Object.entries(n)){if(['start','end'].includes(k))continue;if(Array.isArray(v))v.forEach(visit);else if(v?.type)visit(v);}
 }visit(ast);
 }assert.equal(count,14);
});
