'use strict';
const {test}=require('node:test');
const assert=require('node:assert/strict');
const {CAP,authorizeDrugId}=require('../medcases_entitlement_gate');
const ids=require('../data/free60_allowlist.v2.json').ids;
const claims={tier:'free',cap:[CAP.DRUG_CATALOG_FREE]};
const allowed=(drugId,cap=claims,freeDrugIds=ids)=>authorizeDrugId({claims:cap,drugId,freeDrugIds}).allowed;
test('existing tranexamic route retains the selected Free60 entitlement',()=>{
 assert.equal(allowed('acidotranexamico'),true);
 assert.equal(allowed('acido_tranexamico'),true);
});
test('alias never authorizes an IV variant or another protected drug',()=>{
 for(const id of ['acido_tranexamico_iv','acido__tranexamico','metformina','ceftriaxona'])assert.equal(allowed(id),false);
});
test('canonical alias requires the free capability and existing allowlist entry',()=>{
 assert.equal(allowed('acido_tranexamico',{tier:'free',cap:[]}),false);
 assert.equal(allowed('acido_tranexamico',claims,[]),false);
 assert.equal(ids.length,60);
});
