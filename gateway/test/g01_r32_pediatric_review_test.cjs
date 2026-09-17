
'use strict';
const assert=require('node:assert/strict');
const crypto=require('node:crypto');
const http=require('node:http');
const {CAP}=require('../medcases_entitlement_gate');
const {createGatewayHandler}=require('../server');
const SECRET='test-only-medcases-calculator-session-secret-0123456789abcdef';
const NOW=2_000_000_000;
function issue(tier,cap,sub='reviewer-test'){const p={v:1,sub,tier,cap,aud:'medcases-calculator',iat:NOW,exp:NOW+600,jti:crypto.randomUUID()};const encoded=Buffer.from(JSON.stringify(p)).toString('base64url');const sig=crypto.createHmac('sha256',SECRET).update(encoded).digest('base64url');return `mcc1.${encoded}.${sig}`}
function request(server,{token,body}){return new Promise((resolve,reject)=>{const raw=JSON.stringify(body);const req=http.request({hostname:'127.0.0.1',port:server.address().port,path:'/api/premium/dose-by-weight',method:'POST',headers:{Authorization:`Bearer ${token}`,'Content-Type':'application/json','Content-Length':Buffer.byteLength(raw)}},res=>{let s='';res.setEncoding('utf8');res.on('data',c=>s+=c);res.on('end',()=>resolve({status:res.statusCode,body:JSON.parse(s)}))});req.on('error',reject);req.end(raw)})}
(async()=>{const premium=issue('premium',[CAP.DOSE_BY_WEIGHT,CAP.DRUG_CATALOG_FULL]);const free=issue('free',[CAP.DRUG_CATALOG_FREE]);const ordinaryPremium=issue('premium',[CAP.DOSE_BY_WEIGHT,CAP.DRUG_CATALOG_FULL],'ordinary-premium');const h=createGatewayHandler({secret:SECRET,rootDir:process.cwd(),freeDrugIds:new Set(['clorpromazina']),nowEpochProvider:()=>NOW+10,clinicalReviewerSubjects:new Set(['reviewer-test'])});const s=http.createServer(h);await new Promise(r=>s.listen(0,'127.0.0.1',r));try{
const base={clinicalReview:true,drugId:'risperidona',ageYears:9,weightKg:19,indication:'autism_irritability',jurisdiction:'AR',product:'RISPERDAL',formulation:'oral_solution_1mg_ml',renalStatus:'normal',hepaticStatus:'normal',interactionsReviewed:true,dayOfTreatment:1};
let r=await request(s,{token:free,body:base});assert.equal(r.status,403);
r=await request(s,{token:ordinaryPremium,body:base});assert.equal(r.status,403);assert.equal(r.body.error,'CLINICAL_REVIEWER_REQUIRED');assert.equal(r.body.dose,undefined);
r=await request(s,{token:premium,body:{...base,clinicalReview:false}});assert.equal(r.status,422);assert.equal(r.body.status,'CLINICAL_REVIEW_MODE_REQUIRED');
r=await request(s,{token:premium,body:base});assert.equal(r.status,200);assert.equal(r.body.reviewOnly,true);assert.equal(r.body.clinicalSignoff,false);assert.equal(r.body.dose.mgPerDay,0.25);assert.equal(r.body.dose.mlPerDay,0.25);assert.equal(r.body.dose.automaticTitration,false);
r=await request(s,{token:premium,body:{...base,weightKg:25}});assert.equal(r.status,200);assert.equal(r.body.dose.mgPerDay,0.5);
r=await request(s,{token:premium,body:{...base,drugId:'aripiprazol',ageYears:10,product:'LEMIDAL',formulation:'oral_tablet'}});assert.equal(r.status,422);assert.equal(r.body.status,'FORMULATION_BLOCKED');assert.equal(r.body.sourceBackedReference.initialMgPerDay,2);
r=await request(s,{token:premium,body:{...base,drugId:'quetiapina'}});assert.equal(r.status,422);assert.equal(r.body.status,'PEDIATRIC_DOSE_NOT_VALIDATED');
console.log('G01_R32_GATEWAY_REVIEW_TEST=PASS');
}finally{await new Promise(r=>s.close(r))}})().catch(e=>{console.error(e);process.exit(1)});
