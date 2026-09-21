#!/usr/bin/env python3
"""Import the pinned NOVA_LISTA release without exporting or publishing legacy data.

Dry run by default. ZIP bytes, clinical fields and restrictions remain unchanged.
This imports reference data only; it never derives executable dosing rules.
"""
import argparse
import importlib.util
import hashlib
import json
import re
import zipfile
from pathlib import Path

FIELDS = set('name class pharmacologicClass commercialNames presentation presentations mechanism pharmacodynamics pharmacokinetics indications dose pediatricDose renalDose hepaticDose commonAdverseEffects dangerousAdverseEffects adverseEffects contraindications interactions monitoring administration preparation infusionProtocol pregnancy lactation specialPopulations patientEducation clinicalPearls guidelineRecommendations safetyFlags alerts references ref'.split())
SOURCE = 'database/gold33_nova_lista.js'
GLOBAL = 'GOLD33_NOVA_LISTA_DRUGS_DB'
ARCHIVE = 'generated/gold33-nova-lista'


def sha(value):
    return hashlib.sha256(value).hexdigest()


def encode(value):
    return (json.dumps(value, ensure_ascii=False, indent=2) + '\n').encode()


def require(ok, message):
    if not ok:
        raise ValueError(message)


def validate_package(path, spec):
    require(sha(path.read_bytes()) == spec['sha256'], 'ZIP_HASH_MISMATCH:' + spec['lot'])
    with zipfile.ZipFile(path) as z:
        names = z.namelist()
        require(len(names) == len(set(names)) and all(re.fullmatch(r'[A-Za-z0-9_.-]+', n) and '..' not in n for n in names), 'UNSAFE_ZIP')
        manifest = {}
        for line in z.read('06_MANIFESTO_SHA256.txt').decode().splitlines():
            if not line.strip():
                continue
            match = re.fullmatch(r'([a-f0-9]{64})\s+\*?([A-Za-z0-9_.-]+)', line)
            require(match is not None, 'INVALID_MANIFEST_LINE')
            digest, name = match.groups()
            require(name not in manifest, 'DUPLICATE_MANIFEST_ENTRY')
            manifest[name] = digest
        require(set(manifest) == set(names) - {'06_MANIFESTO_SHA256.txt'}, 'MANIFEST_COVERAGE')
        require(all(sha(z.read(n)) == h for n, h in manifest.items()), 'MANIFEST_HASH_MISMATCH')
        require(z.read('08_REVISAO_MEDICA_HOMOLOGADA.pdf').startswith(b'%PDF-'), 'PDF_REQUIRED')
        read = lambda name: json.loads(z.read(name))
        rows = read('01_DADOS_HOMOLOGADOS.json')
        handoff = read('07_HANDOFF_VALIDATION.json')
        package = dict(spec, dataSha256=manifest['01_DADOS_HOMOLOGADOS.json'], manifest=manifest,
                       handoff=handoff, restrictions=read('05_PENDENCIAS.json'), changes=read('02_ALTERACOES.json'))
        if not isinstance(rows, list):
            require(spec['lot'] == '093' and handoff.get('TECHNICAL_MAPPING') == 'FAIL_PAYLOAD_APROVADO_AUSENTE', 'UNEXPECTED_MISSING_PAYLOAD')
            return package, []
        require(len(rows) == 10 and len({r['ID'] for r in rows}) == 10, 'EXPECTED_TEN_UNIQUE_IDS')
        for row in rows:
            require(re.fullmatch(r'[a-z0-9_]+', row['ID']), 'UNSAFE_ID')
            fields = row['CAMPOS_33']
            require(set(fields) == FIELDS, 'FIELD_CONTRACT:' + row['ID'])
            for key, value in fields.items():
                if key == 'references':
                    require(isinstance(value, list) and value and all(isinstance(v, str) and v for v in value), 'REFERENCES_INVALID')
                else:
                    require(isinstance(value, dict) and set(value) == {'pt', 'es'} and all(isinstance(v, str) for v in value.values()), 'BILINGUAL_INVALID')
            require('HOMOLOGADO CLINICAMENTE' in row['NOTA_REVISAO_CLINICA'], 'REVIEW_MISSING')
        return package, rows


def select_records(packages, replacements):
    versions = {}
    for package, rows in packages:
        for row in rows:
            versions.setdefault(row['ID'], []).append((package, row))
    require(set(replacements) == {k for k, v in versions.items() if len(v) > 1}, 'REPLACEMENT_SCOPE_MISMATCH')
    selected = {}
    for id, variants in versions.items():
        if len(variants) == 1:
            selected[id] = variants[0]
        else:
            matches = [v for v in variants if v[0]['lot'] == replacements[id]]
            require(len(matches) == 1, 'REPLACEMENT_WINNER_INVALID:' + id)
            selected[id] = matches[0]
    return selected, versions


def transactional_write(root, outputs, fail_after=None):
    originals, staged = {}, []
    try:
        for name, content in outputs.items():
            target = root / name
            require(target.resolve().is_relative_to(root.resolve()), 'WRITE_OUTSIDE_ROOT')
            if target.exists() and target.read_bytes() == content:
                continue
            originals[target] = target.read_bytes() if target.exists() else None
            target.parent.mkdir(parents=True, exist_ok=True)
            tmp = target.with_name('.' + target.name + '.nova-lista.tmp')
            require(not tmp.exists(), 'STAGING_FILE_EXISTS')
            tmp.write_bytes(content)
            staged.append((tmp, target))
        for i, (tmp, target) in enumerate(staged, 1):
            tmp.replace(target)
            if fail_after == i:
                raise RuntimeError('SIMULATED_WRITE_FAILURE')
    except BaseException:
        for tmp, _ in staged:
            tmp.unlink(missing_ok=True)
        for target, original in originals.items():
            if original is None:
                target.unlink(missing_ok=True)
            else:
                target.write_bytes(original)
        raise


def build_plan(root, package_dir, config):
    packages = [validate_package(package_dir / spec['file'], spec) for spec in config['lots']]
    selected, versions = select_records(packages, config['replacements'])
    require(len(selected) == config['expectedUniqueIds'], 'RELEASE_SCOPE_MISMATCH')
    free = set(json.loads((root / 'gateway/data/free60_allowlist.v2.json').read_text())['ids'])
    require(len(free) == 60 and not free.intersection(selected), 'FREE60_SCOPE_CHANGED')
    outputs, new_source, mapping = {}, {}, []
    identity = json.loads((root / 'data/manifest.json').read_text())
    index = json.loads((root / 'data/drugs_index.json').read_text())
    by_id = {r['id']: r for r in index}
    existing_ids = {p.stem for p in (root / 'data/drugs').glob('*.json')}
    require(len(index) == len(by_id) and set(by_id) == existing_ids, 'INDEX_PARITY')
    previous_report_path = root / ARCHIVE / 'integration.json'
    replay = json.loads(previous_report_path.read_text()) if previous_report_path.exists() else None
    if replay:
        require(replay['configSha256'] == sha(encode(config)), 'REPLAY_CONFIG_CHANGED')
    else:
        require(len(existing_ids) == config['baselineDrugCount'], 'BASELINE_COUNT_CHANGED')
        require(existing_ids.intersection(selected) == set(config['existing']), 'UNREVIEWED_EXISTING_ID')
    for spec in config['lots']:
        outputs[f"{ARCHIVE}/packages/{spec['file']}"] = (package_dir / spec['file']).read_bytes()
    for id, (package, row) in sorted(selected.items()):
        prior = config['existing'].get(id)
        owner = prior['sourceOwner'] if prior else SOURCE
        derived_path = f'data/drugs/{id}.json'
        baseline = None
        if prior:
            backup_path = f'{ARCHIVE}/baseline/{id}.json'
            raw = (root / (backup_path if replay else derived_path)).read_bytes()
            require(sha(raw) == prior['sha256'], 'BASELINE_HASH_CHANGED:' + id)
            outputs[backup_path] = raw
            baseline = json.loads(raw)
        langs = {lang: {key: value if key == 'references' else value[lang] for key, value in row['CAMPOS_33'].items()} for lang in ['pt', 'es']}
        provenance = {
            'list': config['list'], 'zipSha256': package['sha256'], 'packageFile': package['file'],
            'packageRestrictions': package['restrictions'],
            'packageRecordMetadata': {k: v for k, v in row.items() if k != 'CAMPOS_33'},
            'supersededPackages': [p['file'] for p, _ in versions[id] if p['lot'] != package['lot']],
            'referenceOnly': True,
        }
        if baseline:
            provenance['previousClinicalMetadata'] = baseline['mc_gold_standard_v1']
        common = dict(lote=package['lot'], approvedSha256=package['dataSha256'], calculationAuthorized=False,
                      publicationAuthorized=False, clinicalPackagePublicationState='BLOQUEADA', **provenance)
        gold = {'meta': dict(schema='mc-gold-clinical-v1', requiredFieldCount=33, **common), **langs}
        derived = baseline.copy() if baseline else dict(id=id, category='gold33', icon='💊', color=None, colorTxt=None,
                                                      keywords=[id], source='medcases-calculadora', schema='premium-v1', sourceModule=Path(SOURCE).name)
        # Exact approved language fields: legacy doseKg/preparation extras must not
        # silently leak into a narrower product/formulation scope. Baseline is archived.
        derived.update(langs)
        derived['dataVersion'] = identity['version']
        derived['clinicalContentSha256'] = identity['contentSha256']
        derived['name'] = row['CAMPOS_33']['name']
        derived['mc_gold_standard_v1'] = dict(status='PASS_CLINICAL_HOMOLOGATION', sourceOwner=owner,
                                             sourceField=f'{id}.mcGoldClinicalV1', requiredFields=33, **common)
        outputs[derived_path] = encode(derived)
        if prior:
            source = outputs.get(owner, (root / owner).read_bytes()).decode()
            start, end = f'/* GOLD33_SELECTIVE:{id}:START */', f'/* GOLD33_SELECTIVE:{id}:END */'
            pattern = re.escape(start) + r'[\s\S]*?' + re.escape(end)
            matches = list(re.finditer(pattern, source))
            require(len(matches) == 1, 'CANONICAL_SOURCE_MARKER:' + id)
            old_block = matches[0].group()
            marker = '.mcGoldClinicalV1='
            require(old_block.count(marker) == 1, 'CANONICAL_SOURCE_ASSIGNMENT:' + id)
            new_block = old_block.split(marker)[0] + marker + json.dumps(gold, ensure_ascii=False, indent=2) + ';})();\n' + end
            outputs[owner] = (source[:matches[0].start()] + new_block + source[matches[0].end():]).encode()
        else:
            new_source[id] = dict(id=id, name=row['CAMPOS_33']['name'], category='gold33', mcGoldClinicalV1=gold)
        by_id[id] = dict(by_id[id], name=derived['name']) if prior else dict(id=id, name=derived['name'], category='gold33', icon='💊',
                          keywords=[id], schema='premium-v1', sourceModule=Path(SOURCE).name,
                          hasContextVariants=False, contextVariantCount=0, canonicalOwner=Path(SOURCE).name)
        mapping.append(dict(id=id, lot=package['lot'], sourceOwner=owner, new=not bool(prior), superseded=provenance['supersededPackages']))
    require(len(new_source) == config['expectedNewIds'], 'NEW_RECORD_COUNT_MISMATCH')
    outputs[SOURCE] = ('/* Private Gold33 reference data. Generated by scripts/gold33-nova-lista.py.\n'
                       ' * No calculate function or executable dosing rules. Never copy into public/. */\n'
                       f'window.{GLOBAL} = ' + json.dumps(new_source, ensure_ascii=False, indent=2) + ';\n').encode()
    outputs['data/drugs_index.json'] = encode(list(by_id.values()))
    manifest = json.loads((root / 'data/manifest.json').read_text())
    manifest.update(drugCount=len(by_id), sourceRecordCount=881 + len(new_source),
                    gold33NovaLista={'selectedRecords':len(selected), 'newRecords':len(new_source), 'blockedLots':['093'], 'publication':'PENDING'})
    manifest['modules'] = [m for m in manifest['modules'] if m['module'] != 'Gold33 Nova Lista'] + [dict(module='Gold33 Nova Lista', count=len(new_source), errors=0, status='reference_only')]
    outputs['data/manifest.json'] = encode(manifest)
    for size in [60, 400]:
        filename = f'gateway/data/free{size}_allowlist.v{2 if size == 60 else 1}.json'
        allowlist = json.loads((root / filename).read_text())
        allowlist['catalogCount'] = len(by_id)
        allowlist['premiumOnlyCount'] = len(by_id) - size
        outputs[filename] = encode(allowlist)
    report = dict(schema='medcases.gold33.nova-lista-integration.v1', configSha256=sha(encode(config)),
                  packageCount=len(packages), selectedCount=len(selected), newCount=len(new_source),
                  privateCount=len(by_id), publicCount=60, blockedLots=config['blockedLots'],
                  replacementAuthorization=config['replacementAuthorization'], records=mapping,
                  packages=[p for p, _ in packages], publication='PENDING', calculationAuthorized=False)
    outputs[f'{ARCHIVE}/integration.json'] = encode(report)
    spec = importlib.util.spec_from_file_location('integrate093', root / 'scripts/integrate-gold33-093.py')
    integration = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(integration)
    outputs = integration.extend_plan(root, outputs)
    report['privateCount'] = json.loads(outputs['data/manifest.json'])['drugCount']
    report['supplemental093'] = {'integrated':7, 'deferredAliases':3}
    outputs[f'{ARCHIVE}/integration.json'] = encode(report)
    return outputs, report


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--root', type=Path, default=Path(__file__).resolve().parent.parent)
    parser.add_argument('--packages', type=Path, required=True)
    parser.add_argument('--apply', action='store_true')
    args = parser.parse_args()
    config = json.loads((args.root / 'config/gold33-nova-lista-084-106.json').read_text())
    outputs, report = build_plan(args.root, args.packages, config)
    if args.apply:
        transactional_write(args.root, outputs)
    print(json.dumps({'result':'APPLY_PASS' if args.apply else 'DRY_RUN_PASS',
                      'selected':report['selectedCount'], 'new':report['newCount'],
                      'privateCount':report['privateCount'], 'blockedLots':report['blockedLots'],
                      'outputFiles':len(outputs)}, ensure_ascii=False))
