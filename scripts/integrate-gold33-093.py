"""Project the approved new 093 package into private reference records only."""
import importlib.util
import json
from pathlib import Path

SOURCE = 'database/gold33_novo_093.js'
GLOBAL = 'GOLD33_NOVO_093_DRUGS_DB'
ZIP_SHA = 'e29687c1f949e39a4eeb2ce764d444bf840900034fe78da29de2a8770755e98f'
ACTIVE = ['diclofenaco_gotas', 'diclofenaco_supositorio', 'cetoprofeno_gotas', 'salbutamol_spray', 'prednisolona_solucao_oral', 'dexametasona_elixir', 'budesonida_suspensao_inalatoria']
DEFERRED = ['salbutamol_solucao_inalatoria', 'fenoterol_solucao_inalatoria', 'ipratropio_solucao_inalatoria']


def extend_plan(root, outputs):
    spec = importlib.util.spec_from_file_location('homologation093', root / 'scripts/homologate-gold33-093.py')
    homologation = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(homologation)
    raw = (root / homologation.DEST / homologation.ZIP_NAME).read_bytes()
    homologation.check(homologation.sha(raw) == ZIP_SHA, '093_RELEASE_ZIP_CHANGED')
    validation = homologation.validate_final(raw)
    files = homologation.read_verified_zip(raw)
    rows = json.loads(files['01_DADOS_HOMOLOGADOS.json'])
    encode = homologation.encoded
    read = lambda p: json.loads(outputs.get(p, (root / p).read_bytes()))
    identity = read('data/manifest.json')
    index = read('data/drugs_index.json')
    by_id = {r['id']:r for r in index}
    source = {}
    for row in rows:
        id = row['ID']
        if id in DEFERRED:
            homologation.check(bool(row.get('RECONCILIACAO_CANONICA')), '093_ALIAS_RESTRICTION_MISSING')
            homologation.check(id not in by_id, '093_ALIAS_MUST_NOT_BE_ACTIVE')
            continue
        homologation.check(id in ACTIVE, '093_UNEXPECTED_ID')
        path = f'data/drugs/{id}.json'
        if id in by_id:
            existing = json.loads((root / path).read_bytes())
            homologation.check(existing['mc_gold_standard_v1']['sourceOwner'] == SOURCE, '093_EXISTING_OWNER_COLLISION')
        langs = {lang:{k:(v if k == 'references' else v[lang]) for k,v in row['CAMPOS_33'].items()} for lang in ['pt','es']}
        metadata = dict(lote='093_NOVO_CANDIDATO', approvedSha256=validation['homologatedDataSha256'],
            zipSha256=ZIP_SHA, referenceOnly=True, calculationAuthorized=False,
            publicationAuthorized=False, historicalApprovalApplies=False,
            clinicalPackagePublicationState='BLOQUEADA',
            releaseAuthorization={'source':'USER_EXPLICIT_DEPLOY_AUTHORIZATION_2026_09_21',
                'referencePublicationAuthorized':True, 'calculationAuthorized':False},
            packageRecordMetadata={k:v for k,v in row.items() if k != 'CAMPOS_33'},
            packageRestrictions=json.loads(files['05_RESTRICOES_E_PENDENCIAS.json']))
        gold = dict(meta=dict(schema='mc-gold-clinical-v1',requiredFieldCount=33,**metadata),**langs)
        source[id] = dict(id=id,name=row['CAMPOS_33']['name'],category='gold33',mcGoldClinicalV1=gold)
        d = dict(id=id,name=row['CAMPOS_33']['name'],category='gold33',icon='💊',color=None,colorTxt=None,
            keywords=[id],source='medcases-calculadora',schema='premium-v1',sourceModule=Path(SOURCE).name,
            dataVersion=identity['version'],clinicalContentSha256=identity['contentSha256'],**langs,
            mc_gold_standard_v1=dict(status='PASS_CLINICAL_HOMOLOGATION',sourceOwner=SOURCE,
                sourceField=f'{id}.mcGoldClinicalV1',requiredFields=33,**metadata))
        outputs[path] = encode(d)
        by_id[id] = dict(id=id,name=d['name'],category='gold33',icon='💊',keywords=[id],schema='premium-v1',
            sourceModule=Path(SOURCE).name,hasContextVariants=False,contextVariantCount=0,canonicalOwner=Path(SOURCE).name)
    outputs[SOURCE] = ('/* Private approved 093 reference data; no executable dosing rules. */\nwindow.' + GLOBAL + ' = ' + json.dumps(source,ensure_ascii=False,indent=2) + ';\n').encode()
    outputs['data/drugs_index.json'] = encode(list(by_id.values()))
    identity['drugCount'] = len(by_id)
    identity['sourceRecordCount'] += len(ACTIVE)
    identity['modules'] = [m for m in identity['modules'] if m['module'] != 'Gold33 Novo 093'] + [dict(module='Gold33 Novo 093',count=7,errors=0,status='reference_only')]
    identity['gold33Novo093'] = dict(integrated=ACTIVE,deferredAliases=DEFERRED,zipSha256=ZIP_SHA,calculationAuthorized=False)
    outputs['data/manifest.json'] = encode(identity)
    for size in [60,400]:
        p = f'gateway/data/free{size}_allowlist.v{2 if size == 60 else 1}.json'
        value = read(p)
        value.update(catalogCount=len(by_id),premiumOnlyCount=len(by_id)-size)
        outputs[p] = encode(value)
    outputs['generated/gold33-nova-lista/lote093-homologado/INTEGRACAO_REFERENCIA.json'] = encode(dict(
        result='PASS',integrated=ACTIVE,deferredAliases=DEFERRED,zipSha256=ZIP_SHA,
        reasonDeferred='Escopo de alias ainda não reconciliado; não criar registro ativo duplicado.',
        clinicalFieldsChanged=False,calculationAuthorized=False,publicFree60Changed=False,
        authorization='USER_EXPLICIT_DEPLOY_AUTHORIZATION_2026_09_21'))
    return outputs
