const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const source = fs.readFileSync('database/infusoes.js','utf8');
const context = {window:{}, document:{addEventListener(){}}, console};
vm.createContext(context); vm.runInContext(source,context);
const math = context.window.InfusionMath;
const base = {amount:4,volume:250,weight:70,dose:0.05,unit:'mcg/kg/min',amountUnit:'mg'};
const close = (a,b) => assert.ok(Math.abs(a-b) <= Math.max(1e-10,Math.abs(b)*1e-10), `${a} != ${b}`);
close(math.calculate(base).rate,13.125);
const cases = [
 ['mcg/kg/min','mg',4,250,70,0.05,13.125],
 ['mcg/min','mg',50,250,70,5,1.5],
 ['mcg/kg/h','mg',0.5,100,70,1,14],
 ['mcg/h','mg',0.5,100,70,50,10],
 ['mg/kg/h','mg',200,20,70,1,7],
 ['mg/h','mg',10,100,70,1,10],
 ['mg/min','mg',900,500,70,0.5,50/3],
 ['UI/min','UI',20,100,70,0.03,9],
 ['UI/h','UI',100,100,70,2,2],
 ['UI/kg/h','UI',25000,250,70,18,12.6],
 ['ml/h','mg',4,250,70,12.5,12.5]
];
for(const [unit,amountUnit,amount,volume,weight,dose,rate] of cases) {
 const input={unit,amountUnit,amount,volume,weight,dose};
 close(math.calculate(input).rate,rate);
 close(math.calculate({...input,dose:NaN,rate,direction:'rate'}).dose,dose);
}
for(const value of ['', '-1','1x','1,2,3','Infinity','NaN','1e3']) assert.ok(Number.isNaN(math.number(value)));
close(math.number('0,05'),0.05); close(math.number('70,5'),70.5);
for(const key of ['amount','volume','dose']) for(const value of [0,-1,NaN,Infinity]) assert.ok(math.calculate({...base,[key]:value}).error);
assert.equal(math.calculate({...base,weight:0}).error,'weight');
assert.equal(math.calculate({...base,amountUnit:'UI'}).error,'unit');
assert.ok(!math.calculate({...base,unit:'mcg/min',weight:0}).error);
assert.ok(!math.calculate({...base,unit:'ml/h',weight:0}).error);
const catalog=vm.runInContext('INFUSION_FALLBACK_DB',context);
assert.equal(catalog.length,16);
assert.equal(new Set(catalog.map(d=>d.nome)).size,16);
for(const drug of catalog) {
 assert.ok(math.units[drug.unidade], drug.nome);
 if (drug.unidade === 'ml/h') {
  assert.equal(drug.nome, 'Vancomicina');
  assert.equal(drug.infusionMode, 'intermittent');
  assert.equal(math.units[drug.unidade][0], null);
 } else assert.equal(math.units[drug.unidade][0], drug.amountUnit, drug.nome);
 assert.equal(drug.doseInicial,null, 'No automatic prescription: '+drug.nome);
 assert.ok(!math.calculate({amount:drug.ampolaMg,volume:drug.diluenteMl,weight:70,dose:1,unit:drug.unidade,amountUnit:drug.amountUnit}).error, drug.nome);
}
console.log('PASS: 11 units, forward/reverse reference calculations, decimal parsing, invalid inputs, weight and dimension guards, 16 catalog records.');

// The reviewed R1/V2.1 suite owns the current operational safety contract.
// Historical pre-V2.1 expectations remain reproducible from the baseline commit.
require('./patch3s-approved-infusion.test.cjs');
