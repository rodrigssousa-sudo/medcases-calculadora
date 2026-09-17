#!/usr/bin/env node
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
const root = path.resolve(import.meta.dirname, '..');
const zip = process.env.GOLD33_TEST_ZIP;
assert.ok(zip, 'GOLD33_TEST_ZIP is required');
const pkg = spawnSync(process.execPath, ['scripts/gold33-package-gate.mjs', zip], { cwd:root, encoding:'utf8' });
assert.equal(pkg.status, 0, pkg.stderr);
assert.equal(JSON.parse(pkg.stdout).result, 'PASS');
const deploy = spawnSync(process.execPath, ['scripts/gold33-safe-deploy-gate.mjs'], { cwd:root, encoding:'utf8' });
assert.notEqual(deploy.status, 0, 'legacy deploy must fail closed');
assert.match(deploy.stderr, /"result": "BLOCKED"/);
console.log('GOLD33_HOMOLOGATED_PACKAGE_GATE=PASS');
console.log('GOLD33_LEGACY_DEPLOY_BLOCK=PASS');
console.log('RESULT=PASS_GOLD33_PIPELINE_GATES');
