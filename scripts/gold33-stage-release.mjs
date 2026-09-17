#!/usr/bin/env node
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const argv=process.argv.slice(2),args={};for(let i=0;i<argv.length;i++){if(!argv[i].startsWith('--'))continue;const k=argv[i].slice(2),n=argv[i+1];args[k]=n&&!n.startsWith('--')?n:true;if(args[k]!==true)i++;}
const root=path.resolve(args.root||path.resolve(import.meta.dirname,'..'));
const stage=path.resolve(String(args['staging-root']||''));
const sha=(b)=>crypto.createHash('sha256').update(b).digest('hex');
const safeName=(v)=>{if(!/^[a-zA-Z0-9._-]+$/.test(String(v||'')))throw Error('UNSAFE_RELEASE_NAME');return String(v)};
if(!stage||stage===root||root.startsWith(stage+path.sep)||stage.startsWith(root+path.sep))throw Error('STAGING_MUST_BE_OUTSIDE_REPOSITORY');
const releases=path.join(stage,'releases'),current=path.join(stage,'current'),logs=path.join(stage,'logs');fs.mkdirSync(releases,{recursive:true});fs.mkdirSync(logs,{recursive:true});
if(args.rollback){const name=safeName(args.rollback),target=path.join(releases,name);if(!fs.existsSync(path.join(target,'release-manifest.json')))throw Error('ROLLBACK_RELEASE_INVALID');const temp=path.join(stage,`.current-${process.pid}`);fs.symlinkSync(path.relative(stage,target),temp);fs.renameSync(temp,current);fs.appendFileSync(path.join(logs,'events.log'),`${new Date().toISOString()} ROLLBACK ${name}\n`);console.log(`ROLLBACK=PASS RELEASE=${name}`);process.exit(0);}
const release=safeName(args.release),commit=String(args.commit||'');
const head=execFileSync('git',['rev-parse','HEAD'],{cwd:root,encoding:'utf8'}).trim();if(!/^[a-f0-9]{40}$/.test(commit)||head!==commit)throw Error('COMMIT_NOT_PINNED_TO_HEAD');
if(execFileSync('git',['status','--porcelain=v1'],{cwd:root,encoding:'utf8'}).trim())throw Error('STAGING_REQUIRES_CLEAN_TESTED_COMMIT');
execFileSync(process.execPath,['scripts/verify-public-boundary.cjs'],{cwd:root,stdio:'pipe'});
const target=path.join(releases,release);if(fs.existsSync(target))throw Error('RELEASE_ALREADY_EXISTS');const temp=path.join(releases,`.${release}-${process.pid}.tmp`);fs.mkdirSync(temp);
try{fs.cpSync(path.join(root,'public'),path.join(temp,'public'),{recursive:true});fs.mkdirSync(path.join(temp,'private/data'),{recursive:true});fs.cpSync(path.join(root,'data/drugs'),path.join(temp,'private/data/drugs'),{recursive:true});fs.cpSync(path.join(root,'gateway'),path.join(temp,'private/gateway'),{recursive:true});const publicIds=fs.readdirSync(path.join(temp,'public/data/drugs')).filter(x=>x.endsWith('.json')),privateIds=fs.readdirSync(path.join(temp,'private/data/drugs')).filter(x=>x.endsWith('.json'));if(publicIds.length!==60||privateIds.length!==838)throw Error('RELEASE_BOUNDARY_COUNT_INVALID');const manifest={schema:'medcases.gold33.staging-release.v1',release,commit,createdAt:new Date().toISOString(),publicDrugCount:60,privateDrugCount:838,publicManifestSha256:sha(fs.readFileSync(path.join(temp,'public/manifest-offline.json')))};fs.writeFileSync(path.join(temp,'release-manifest.json'),JSON.stringify(manifest,null,2)+'\n');fs.renameSync(temp,target);const link=path.join(stage,`.current-${process.pid}`);fs.symlinkSync(path.relative(stage,target),link);fs.renameSync(link,current);fs.appendFileSync(path.join(logs,'events.log'),`${new Date().toISOString()} RELEASE ${release} ${commit}\n`);console.log(JSON.stringify({result:'STAGING_PASS',...manifest},null,2));}catch(e){if(fs.existsSync(temp))fs.rmSync(temp,{recursive:true,force:true});throw e;}
