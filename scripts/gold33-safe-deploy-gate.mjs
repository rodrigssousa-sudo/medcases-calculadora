#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
const root = path.resolve(import.meta.dirname, '..');
const legacy = fs.readFileSync(path.join(root, 'deploy.sh'), 'utf8');
const rules = [['FETCH_IN_DEPLOY',/git\s+fetch/],['MERGE_IN_DEPLOY',/git\s+merge/],['DESTRUCTIVE_REMOVE',/rm\s+-rf/],['REMOTE_MUTATION',/git\s+remote\s+add/],['GIT_CONFIG_MUTATION',/git\s+config/]];
const detected = rules.filter(([, re]) => re.test(legacy)).map(([name]) => name);
if (detected.length) {
  console.error(JSON.stringify({ result:'BLOCKED', deploy:'deploy.sh', detected, reason:'LEGACY_SCRIPT_IS_NOT_A_VALIDATED_ATOMIC_DEPLOY' }, null, 2));
  process.exit(1);
}
console.log('GOLD33_SAFE_DEPLOY_GATE=PASS');
