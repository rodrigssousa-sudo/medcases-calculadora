#!/usr/bin/env node
'use strict';
const assert=require('node:assert/strict');
const crypto=require('node:crypto');
const {verifySignedSession,CAP}=require('../medcases_entitlement_gate');
const SECRET='test-only-medcases-calculator-session-secret-0123456789abcdef';
const NOW=2_000_000_000;
const ALPHABET='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
const payload={v:1,sub:'premium-test',tier:'premium',cap:[CAP.DRUG_CATALOG_FULL],aud:'medcases-calculator',iat:NOW,exp:NOW+600,jti:'r30-deterministic'};
const encoded=Buffer.from(JSON.stringify(payload)).toString('base64url');
const signature=crypto.createHmac('sha256',SECRET).update(encoded).digest('base64url');
const valid=`mcc1.${encoded}.${signature}`;
assert.equal(signature.length,43);
assert.equal(verifySignedSession(valid,{secret:SECRET,nowEpoch:NOW+10}).sub,'premium-test');
const ending=ALPHABET.indexOf(signature.at(-1));
assert.equal(ending%4,0);
let rejected=0;
for(let delta=1;delta<=3;delta++){
  const alias=signature.slice(0,-1)+ALPHABET[ending+delta];
  assert.ok(Buffer.from(signature,'base64url').equals(Buffer.from(alias,'base64url')),'precondition: same HMAC bytes');
  assert.throws(()=>verifySignedSession(`mcc1.${encoded}.${alias}`,{secret:SECRET,nowEpoch:NOW+10}),/CALCULATOR_GATE_BAD_SIGNATURE/);
  rejected++;
}
const changed=signature.slice(0,-1)+ALPHABET[(ending+4)%64];
assert.throws(()=>verifySignedSession(`mcc1.${encoded}.${changed}`,{secret:SECRET,nowEpoch:NOW+10}),/CALCULATOR_GATE_BAD_SIGNATURE/);
console.log(`R30_CANONICAL_SIGNATURE=PASS | VALID=1 | BYTE_EQUIVALENT_FORGERIES_REJECTED=${rejected}/3 | WRONG_SIGNATURE_REJECTED=YES`);
