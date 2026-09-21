#!/usr/bin/env node
import assert from 'node:assert/strict';import {execFileSync,spawnSync} from 'node:child_process';import fs from 'node:fs';import os from 'node:os';import path from 'node:path';
const repo=path.resolve(import.meta.dirname,'..'),tmp=fs.mkdtempSync(path.join(os.tmpdir(),'gold33-stage-test-')),src=path.join(tmp,'repo'),stage=path.join(tmp,'stage');
try{fs.mkdirSync(src);for(const d of ['public','data','gateway','scripts'])fs.cpSync(path.join(repo,d),path.join(src,d),{recursive:true});fs.copyFileSync(path.join(repo,'package.json'),path.join(src,'package.json'));execFileSync('git',['init','-q'],{cwd:src});execFileSync('git',['config','user.email','stage@test.invalid'],{cwd:src});execFileSync('git',['config','user.name','Stage Test'],{cwd:src});execFileSync('git',['add','.'],{cwd:src});execFileSync('git',['commit','-qm','baseline'],{cwd:src});const head=execFileSync('git',['rev-parse','HEAD'],{cwd:src,encoding:'utf8'}).trim();
 const run=(a)=>spawnSync(process.execPath,[path.join(repo,'scripts/gold33-stage-release.mjs'),'--root',src,'--staging-root',stage,...a],{encoding:'utf8'});
 let r=run(['--release','r1','--commit',head]);assert.equal(r.status,0,r.stderr);assert.equal(JSON.parse(r.stdout).publicDrugCount,60);assert.equal(JSON.parse(r.stdout).privateDrugCount,1018);
 r=run(['--release','r2','--commit',head]);assert.equal(r.status,0,r.stderr);r=run(['--rollback','r1']);assert.equal(r.status,0,r.stderr);assert.equal(fs.readlinkSync(path.join(stage,'current')),path.join('releases','r1'));
 fs.appendFileSync(path.join(src,'public/index.html'),'dirty');r=run(['--release','r3','--commit',head]);assert.notEqual(r.status,0,'dirty source must be rejected');
 console.log('STAGING_RELEASE=PASS\nPUBLIC_PRIVATE_BOUNDARY=PASS\nPINNED_COMMIT=PASS\nDIRTY_SOURCE_REJECTION=PASS\nROLLBACK=PASS\nPRODUCTION_DEPLOY=NOT_TESTED\nRESULT=PASS_GOLD33_LOCAL_STAGING');
}finally{fs.rmSync(tmp,{recursive:true,force:true});}
