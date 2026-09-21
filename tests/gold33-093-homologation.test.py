"""Ensure the approved handoff rejects content changes even with rebuilt hashes."""
import importlib.util
import io
import json
import unittest
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
spec = importlib.util.spec_from_file_location('homologation', ROOT / 'scripts/homologate-gold33-093.py')
mod = importlib.util.module_from_spec(spec)
spec.loader.exec_module(mod)


class HandoffTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.raw = (ROOT / mod.DEST / mod.ZIP_NAME).read_bytes()

    def tampered(self, filename, mutate):
        files = mod.read_verified_zip(self.raw)
        value = json.loads(files[filename])
        mutate(value)
        files[filename] = mod.encoded(value)
        files['06_MANIFESTO_SHA256.txt'] = ''.join(
            f'{mod.sha(data)}  {name}\n' for name, data in sorted(files.items())
            if name != '06_MANIFESTO_SHA256.txt').encode()
        buf = io.BytesIO()
        with zipfile.ZipFile(buf, 'w') as z:
            for name, data in files.items():
                z.writestr(name, data)
        return buf.getvalue()

    def test_final_package_and_original(self):
        report = mod.validate_final(self.raw)
        self.assertEqual(report['result'], 'PASS')
        self.assertEqual(mod.sha((ROOT / mod.CANDIDATE).read_bytes()), mod.CANDIDATE_SHA)
        self.assertEqual(json.loads((ROOT / mod.CANDIDATE).read_bytes())['status'], 'PENDENTE_REVISAO_MEDICA')

    def test_runtime_reference_projection_preserves_approved_fields(self):
        rows = json.loads(mod.read_verified_zip(self.raw)['01_DADOS_HOMOLOGADOS.json'])
        integrated = 0
        for row in rows:
            path = ROOT / 'data/drugs' / (row['ID'] + '.json')
            if row.get('RECONCILIACAO_CANONICA'):
                self.assertFalse(path.exists())
                continue
            d = json.loads(path.read_bytes())
            integrated += 1
            for lang in ['pt', 'es']:
                self.assertEqual(d[lang], {k:v if k == 'references' else v[lang] for k,v in row['CAMPOS_33'].items()})
            meta = d['mc_gold_standard_v1']
            self.assertTrue(meta['referenceOnly'])
            self.assertFalse(meta['calculationAuthorized'])
            self.assertFalse(meta['historicalApprovalApplies'])
            self.assertEqual(meta['packageRecordMetadata'], {k:v for k,v in row.items() if k != 'CAMPOS_33'})
            self.assertFalse((ROOT / 'public/data/drugs' / path.name).exists())
        self.assertEqual(integrated, 7)

    def test_rejects_clinical_change_with_valid_manifest(self):
        raw = self.tampered('01_DADOS_HOMOLOGADOS.json',
            lambda rows: rows[0]['CAMPOS_33']['dose'].update(pt='changed dose'))
        with self.assertRaisesRegex(ValueError, 'UNAUTHORIZED_CONTENT_CHANGE'):
            mod.validate_final(raw)

    def test_rejects_calculation_authorization(self):
        raw = self.tampered('01_DADOS_HOMOLOGADOS.json',
            lambda rows: rows[0].update(calculationAuthorized=True))
        with self.assertRaisesRegex(ValueError, 'UNAUTHORIZED_CONTENT_CHANGE'):
            mod.validate_final(raw)

    def test_rejects_unfinished_handoff(self):
        raw = self.tampered('07_HANDOFF_VALIDATION.json',
            lambda obj: obj.update(HANDOFF_VALIDATION='PENDING'))
        with self.assertRaisesRegex(ValueError, 'HANDOFF_NOT_FINAL'):
            mod.validate_final(raw)

    def test_rejects_wrong_binding(self):
        raw = self.tampered('12_VINCULO_DA_APROVACAO.json',
            lambda obj: obj.update(candidateSha256='0' * 64))
        with self.assertRaisesRegex(ValueError, 'BINDING_INVALID'):
            mod.validate_final(raw)


if __name__ == '__main__':
    unittest.main()
