'use strict';
const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const root = path.resolve(__dirname, '..');
const read = name => fs.readFileSync(path.join(root, name));
const sha = bytes => crypto.createHash('sha256').update(bytes).digest('hex');

// Production 088ec19d uses inline lock owners and the Free60 access manifest.
// No dependencies on commercial/auth modules introduced in later snapshots.
test('published commercial entrypoint and access policy match the offline package', () => {
  const manifest = JSON.parse(read('public/manifest-offline.json'));
  assert.deepEqual(read('manifest-offline.json'), read('public/manifest-offline.json'));
  for (const file of ['index.html', 'data/drug_access_free60.v2.json']) {
    assert.deepEqual(read(file), read('public/' + file));
    assert.ok(manifest.files.includes(file));
    assert.equal(manifest.fileSha256[file], sha(read('public/' + file)));
  }
});

test('every published resource matches its declared offline identity', () => {
  const manifest = JSON.parse(read('public/manifest-offline.json'));
  assert.equal(new Set(manifest.files).size, manifest.totalFiles);
  assert.deepEqual(Object.keys(manifest.fileSha256), manifest.files);
  const aggregate = crypto.createHash('sha256');
  for (const file of manifest.files) {
    const bytes = read('public/' + file);
    const digest = sha(bytes);
    assert.equal(manifest.fileSha256[file], digest, file);
    aggregate.update(file + '\0' + bytes.length + '\0' + digest + '\n');
  }
  assert.equal(manifest.contentSha256, aggregate.digest('hex'));
  assert.equal(manifest.version, 'offline-v2-' + manifest.contentSha256);
});
