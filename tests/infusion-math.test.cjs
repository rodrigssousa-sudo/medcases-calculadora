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
 assert.equal(math.units[drug.unidade][0], drug.amountUnit, drug.nome);
 assert.equal(drug.doseInicial,null, 'No automatic prescription: '+drug.nome);
 assert.ok(!math.calculate({amount:drug.ampolaMg,volume:drug.diluenteMl,weight:70,dose:1,unit:drug.unidade,amountUnit:drug.amountUnit}).error, drug.nome);
}
console.log('PASS: 11 units, forward/reverse reference calculations, decimal parsing, invalid inputs, weight and dimension guards, 16 catalog records.');
const safety=context.window.InfusionReviewSafety;
const adult={age:40,adultConfirmed:false,potassium:4,hours:1,rescueConfirmed:false,vancoConfirmed:true};
const gate=(drug,dose,extra={})=>safety.evaluate({...adult,drug,dose,...extra});
assert.ok(gate('Noradrenalina',.05,{age:17,adultConfirmed:true}).errors.includes('adult'));
assert.ok(gate('Noradrenalina',.05,{age:NaN}).errors.includes('adult'));
assert.equal(gate('Noradrenalina',.05,{age:NaN,adultConfirmed:true}).errors.length,0);
for(const k of [NaN,0,3.3,3.4,3.5]) assert.ok(gate('Insulina Regular',2,{potassium:k}).errors.includes('potassium'));
assert.equal(gate('Insulina Regular',2,{potassium:3.51}).errors.length,0);
assert.equal(gate('Vasopressina',.04).errors.length,0);
assert.ok(gate('Vasopressina',.05).errors.includes('vasopressin'));
assert.equal(gate('Vasopressina',.06,{rescueConfirmed:true}).errors.length,0);
assert.ok(gate('Vasopressina',.06001,{rescueConfirmed:true}).errors.includes('vasopressin'));
assert.equal(gate('Nitroprussiato',10,{hours:1/6}).errors.length,0);
assert.ok(gate('Nitroprussiato',10,{hours:.17}).errors.includes('nitroTime'));
assert.ok(gate('Nitroprussiato',10.01,{hours:.1}).errors.includes('nitroMax'));
assert.ok(gate('Nitroprussiato',1,{hours:NaN}).errors.includes('duration'));
assert.ok(gate('Nitroprussiato',3,{hours:49}).warnings.includes('cyanideProlonged'));
assert.ok(gate('Propofol',4.1,{hours:49}).warnings.includes('pris'));
assert.ok(!gate('Propofol',4,{hours:49}).warnings.includes('pris'));
assert.ok(gate('Vancomicina',100,{vancoConfirmed:false}).errors.includes('vancomycin'));
assert.ok(gate('Nitroglicerina',201).errors.includes('nitroglycerin'));
assert.equal(gate('Nitroglicerina',200).errors.length,0);
assert.ok(gate('Noradrenalina',2.5).warnings.includes('norepinephrine'));
// Independent reference vectors for every reviewed drug, at 70 kg where applicable.
const doseAndRate={
 Noradrenalina:[.05,13.125],Adrenalina:[.05,52.5],Dobutamina:[5,21],Dopamina:[5,26.25],
 Milrinona:[.5,21],Vasopressina:[.03,9],Nitroprussiato:[.5,10.5],Nitroglicerina:[10,3],
 Amiodarona:[1,40],Heparina:[18,12.6],Propofol:[1,7],Midazolam:[.1,46.66666666666667],
 Morfina:[5,50],Fentanil:[1,14],'Insulina Regular':[2,2],Vancomicina:[100,20]
};
for(const d of catalog) {
 const [dose,rate]=doseAndRate[d.nome];
 const input={amount:d.ampolaMg,volume:d.diluenteMl,amountUnit:d.amountUnit,unit:d.unidade,weight:70,dose};
 close(math.calculate(input).rate,rate);
 close(math.calculate({...input,rate,direction:'rate'}).dose,dose);
}
const review=vm.runInContext('INFUSION_REVIEW',context);
assert.equal(Object.keys(review).length,16);
const sourceReview=JSON.parse(fs.readFileSync('docs/qa/infusion-review-20260920/parecer-estruturado.json','utf8'));
for(const r of sourceReview.records) assert.equal(review[r.drug].text,r.text);
console.log('PASS: 16 reviewed clinical formula vectors in both directions; potassium >3.5, adult, rescue, duration, maximum-dose and monitoring gates; original source mapping.');
