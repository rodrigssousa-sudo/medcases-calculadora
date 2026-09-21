import importlib.util
import json
import tempfile
import unittest
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
spec = importlib.util.spec_from_file_location('nova', ROOT / 'scripts/gold33-nova-lista.py')
nova = importlib.util.module_from_spec(spec)
spec.loader.exec_module(nova)


class ImportSafety(unittest.TestCase):
    def test_release_replay_is_byte_idempotent(self):
        config = json.loads((ROOT / 'config/gold33-nova-lista-084-106.json').read_text())
        outputs, _ = nova.build_plan(ROOT, ROOT / nova.ARCHIVE / 'packages', config)
        for path, content in outputs.items():
            self.assertEqual((ROOT / path).read_bytes(), content, path)

    def test_093_candidate_cannot_inherit_historical_approval(self):
        path = ROOT / nova.ARCHIVE / 'lote093-candidato/01_NOVO_CANDIDATO_093.json'
        draft = json.loads(path.read_text())
        self.assertFalse(draft['historicalApprovalApplies'])
        self.assertEqual(draft['status'], 'PENDENTE_REVISAO_MEDICA')
        with zipfile.ZipFile(ROOT / nova.ARCHIVE / 'packages/GOLD33_NOVA_LISTA_LOTE_093_HOMOLOGADO_CLINICAMENTE.zip') as z:
            expected = json.loads(z.read('01_DADOS_HOMOLOGADOS.json'))['ids']
        self.assertEqual([r['ID'] for r in draft['medications']], expected)
        for row in draft['medications']:
            self.assertEqual(set(row['CAMPOS_33']), nova.FIELDS)
            self.assertFalse(row['calculationAuthorized'])
            self.assertFalse(row['publicationAuthorized'])
            if row.get('RECONCILIACAO_CANONICA'):
                self.assertFalse((ROOT / 'data/drugs' / (row['ID'] + '.json')).exists())
            self.assertEqual(row['STATES']['REVISAO_CLINICA'], 'PENDENTE')
        spray = next(r for r in draft['medications'] if r['ID'] == 'salbutamol_spray')
        self.assertNotIn('0,083%', json.dumps(spray['CAMPOS_33']))
        self.assertNotIn('2_5MG_3ML', json.dumps(spray['CAMPOS_33']))

    def test_integrated_records_preserve_selected_payload_and_restrictions(self):
        config = json.loads((ROOT / 'config/gold33-nova-lista-084-106.json').read_text())
        packages = [nova.validate_package(ROOT / nova.ARCHIVE / 'packages' / p['file'], p) for p in config['lots']]
        selected, _ = nova.select_records(packages, config['replacements'])
        self.assertEqual(len(selected), 182)
        self.assertEqual(sum(len(rows) for _, rows in packages), 210)
        for id, (package, row) in selected.items():
            d = json.loads((ROOT / 'data/drugs' / (id + '.json')).read_text())
            for lang in ['pt', 'es']:
                self.assertEqual(set(d[lang]), nova.FIELDS)
                for field, value in row['CAMPOS_33'].items():
                    self.assertEqual(d[lang][field], value if field == 'references' else value[lang], (id, lang, field))
            meta = d['mc_gold_standard_v1']
            self.assertEqual(meta['lote'], package['lot'])
            self.assertEqual(meta['packageRestrictions'], package['restrictions'])
            self.assertFalse(meta['calculationAuthorized'])
            self.assertFalse(meta['publicationAuthorized'])
            self.assertFalse((ROOT / 'public/data/drugs' / (id + '.json')).exists())
        self.assertFalse((ROOT / 'public' / nova.SOURCE).exists())
        self.assertEqual(len(list((ROOT / 'data/drugs').glob('*.json'))), 1018)
        self.assertEqual(len(list((ROOT / 'public/data/drugs').glob('*.json'))), 60)

    def test_no_implicit_last_wins(self):
        packages = [({'lot':'087'}, [{'ID':'same'}]), ({'lot':'103'}, [{'ID':'same'}])]
        with self.assertRaisesRegex(ValueError, 'REPLACEMENT_SCOPE'):
            nova.select_records(packages, {})
        selected, _ = nova.select_records(list(reversed(packages)), {'same':'103'})
        self.assertEqual(selected['same'][0]['lot'], '103')
        with self.assertRaisesRegex(ValueError, 'WINNER_INVALID'):
            nova.select_records(packages, {'same':'104'})

    def test_transaction_rolls_back_existing_and_new_files(self):
        with tempfile.TemporaryDirectory() as temp:
            root = Path(temp)
            (root / 'existing').write_bytes(b'original')
            with self.assertRaises(RuntimeError):
                nova.transactional_write(root, {'existing':b'new', 'created':b'new'}, fail_after=2)
            self.assertEqual((root / 'existing').read_bytes(), b'original')
            self.assertFalse((root / 'created').exists())
            self.assertEqual(sorted(p.name for p in root.iterdir()), ['existing'])

    def test_release_scope_is_explicit(self):
        config = json.loads((ROOT / 'config/gold33-nova-lista-084-106.json').read_text())
        self.assertEqual([p['lot'] for p in config['lots']], [f'{n:03}' for n in range(84, 105)] + ['106'])
        self.assertEqual(len(config['replacements']), 28)
        self.assertEqual(set(config['replacements'].values()), {'103', '104', '106'})
        self.assertEqual(config['blockedLots'], {'093':'FAIL_PAYLOAD_APROVADO_AUSENTE'})

    def test_package_tamper_fails_even_if_zip_opens(self):
        with tempfile.TemporaryDirectory() as temp:
            p = Path(temp) / 'test.zip'
            with zipfile.ZipFile(p, 'w') as z:
                z.writestr('01_DADOS_HOMOLOGADOS.json', '[]')
            with self.assertRaisesRegex(ValueError, 'ZIP_HASH'):
                nova.validate_package(p, {'lot':'084', 'sha256':'0' * 64})


if __name__ == '__main__':
    unittest.main()
