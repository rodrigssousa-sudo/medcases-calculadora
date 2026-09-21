#!/usr/bin/env python3
"""Bind the user's confirmed approval to the exact new 093 candidate; no runtime writes."""
import argparse
import copy
import hashlib
import io
import json
import re
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CANDIDATE = 'generated/gold33-nova-lista/lote093-candidato/01_NOVO_CANDIDATO_093.json'
REVIEW = 'generated/gold33-nova-lista/lote093-candidato/REVISAO_MEDICA.md'
DEST = 'generated/gold33-nova-lista/lote093-homologado'
CANDIDATE_SHA = 'd37488285baa1b0343e2232153a4554cdb1bc88ae828d2c0550331644ba0d84b'
APPROVAL_ZIP_SHA = 'fa131a03c1c81ae4244b520a055113617ec7f1d617f7078722437521f403aebf'
APPROVAL_JSON_SHA = '11ac3ba2e9f1e9ac4369251364358be0e7d54011e2ea6ea33c1bf2724f5da9f5'
APPROVAL_PDF_SHA = 'ece7f2933ec4fe7500f1a05957f0d928e48bc27f09c48639a06092190696fd69'
FIELDS = 'name class pharmacologicClass commercialNames presentation presentations mechanism pharmacodynamics pharmacokinetics indications dose pediatricDose renalDose hepaticDose commonAdverseEffects dangerousAdverseEffects adverseEffects contraindications interactions monitoring administration preparation infusionProtocol pregnancy lactation specialPopulations patientEducation clinicalPearls guidelineRecommendations safetyFlags alerts references ref'.split()
IDS = 'diclofenaco_gotas diclofenaco_supositorio cetoprofeno_gotas salbutamol_spray salbutamol_solucao_inalatoria fenoterol_solucao_inalatoria ipratropio_solucao_inalatoria prednisolona_solucao_oral dexametasona_elixir budesonida_suspensao_inalatoria'.split()
ZIP_NAME = 'GOLD33_NOVO_CANDIDATO_093_HOMOLOGADO_CODEX.zip'


def sha(data):
    return hashlib.sha256(data).hexdigest()


def encoded(value):
    return (json.dumps(value, ensure_ascii=False, indent=2) + '\n').encode()


def check(condition, message):
    if not condition:
        raise ValueError(message)


def read_verified_zip(raw):
    with zipfile.ZipFile(io.BytesIO(raw)) as z:
        names = z.namelist()
        check(z.testzip() is None, 'ZIP_CRC_INVALID')
        check(len(names) == len(set(names)), 'ZIP_DUPLICATE_ENTRY')
        check(all(re.fullmatch(r'[A-Za-z0-9_.-]+', n) and '..' not in n for n in names), 'ZIP_UNSAFE_PATH')
        content = {name:z.read(name) for name in names}
    hashes = {}
    for line in content['06_MANIFESTO_SHA256.txt'].decode().splitlines():
        if not line.strip():
            continue
        match = re.fullmatch(r'([a-f0-9]{64})  ([A-Za-z0-9_.-]+)', line)
        check(match is not None, 'MANIFEST_FORMAT_INVALID')
        digest, name = match.groups()
        check(name not in hashes, 'MANIFEST_DUPLICATE_ENTRY')
        hashes[name] = digest
    check(set(hashes) == set(content) - {'06_MANIFESTO_SHA256.txt'}, 'MANIFEST_COVERAGE_INVALID')
    for name, digest in hashes.items():
        check(sha(content[name]) == digest, 'MANIFEST_HASH_MISMATCH:' + name)
    return content


def approved_states():
    return {'REVISAO_CLINICA':'HOMOLOGADA_NOVO_CANDIDATO', 'HOMOLOGACAO_DADOS':'SIM',
            'AUTORIZACAO_CALCULO':'NAO_AUTORIZADA', 'INTEGRACAO_RUNTIME':'NAO',
            'INTEGRACAO_TECNICA':'NAO_INICIADA', 'PUBLICACAO':'BLOQUEADA'}


def approval_metadata(opinion):
    return {**opinion, 'CLINICAL_CONTENT_FROZEN':True, 'reviewedCandidateSha256':CANDIDATE_SHA,
            'approvalBinding':'USER_CONFIRMED_LOCAL_CANDIDATE',
            'approvalPackageSha256':APPROVAL_ZIP_SHA}


def validate_final(raw):
    files = read_verified_zip(raw)
    original = files['09_CANDIDATO_REVISADO_ORIGINAL.json']
    check(sha(original) == CANDIDATE_SHA, 'REVIEWED_CANDIDATE_HASH_MISMATCH')
    check(sha(files['11_PARECER_MEDICO_ORIGINAL.json']) == APPROVAL_JSON_SHA, 'APPROVAL_JSON_CHANGED')
    check(sha(files['08_REVISAO_MEDICA_HOMOLOGADA.pdf']) == APPROVAL_PDF_SHA, 'APPROVAL_PDF_CHANGED')
    opinion = json.loads(files['11_PARECER_MEDICO_ORIGINAL.json'])
    check(opinion['MEDICO_REVISOR'] == 'Dra Eugenia Marques' and opinion['DATA_REVISAO'] == '20-09-2026'
          and opinion['RESULTADO'] == 'Aprovado integralmente' and opinion['EXCECOES_INFORMADAS'] == 0, 'APPROVAL_SCOPE_INVALID')
    candidate = json.loads(original)
    check(candidate['historicalApprovalApplies'] is False, 'HISTORICAL_APPROVAL_FORBIDDEN')
    before, after = candidate['medications'], json.loads(files['01_DADOS_HOMOLOGADOS.json'])
    check(len(after) == 10 and [r['ID'] for r in after] == IDS, 'IDS_OR_CARDINALITY_INVALID')
    restrictions = json.loads(files['05_RESTRICOES_E_PENDENCIAS.json'])
    check([r['id'] for r in restrictions['items']] == IDS, 'RESTRICTION_SCOPE_INVALID')
    for old, new, restriction in zip(before, after, restrictions['items']):
        expected = copy.deepcopy(old)
        expected['CAMPOS_33'] = {field:old['CAMPOS_33'][field] for field in FIELDS}
        expected['STATES'] = approved_states()
        expected['HOMOLOGACAO'] = approval_metadata(opinion)
        check(new == expected, 'UNAUTHORIZED_CONTENT_CHANGE:' + old['ID'])
        check(list(new['CAMPOS_33']) == FIELDS, 'FIELD_ORDER_INVALID')
        for field, value in new['CAMPOS_33'].items():
            if field == 'references':
                check(isinstance(value, list) and all(isinstance(x,str) for x in value), 'REFERENCES_INVALID')
            else:
                check(isinstance(value, dict) and set(value) == {'pt','es'} and all(isinstance(x,str) for x in value.values()), 'PT_ES_INVALID')
        check(new['calculationAuthorized'] is False and new['publicationAuthorized'] is False, 'AUTHORIZATION_ESCALATION')
        check(restriction['originalRecordMetadata'] == {k:v for k,v in old.items() if k != 'CAMPOS_33'}, 'RESTRICTIONS_NOT_PRESERVED')
        check(restriction['states'] == approved_states(), 'RESTRICTION_STATES_INVALID')
    handoff = json.loads(files['07_HANDOFF_VALIDATION.json'])
    for field in ['MANIFESTO_SHA256','ZIP_INTEGRITY','HANDOFF_VALIDATION','CLINICAL_CONTENT_FROZEN','GRANULAR_BLOCKS_PRESERVED']:
        check(handoff[field] == 'PASS', 'HANDOFF_NOT_FINAL:' + field)
    check(handoff['PACOTE_CODEX'] == 'PRONTO', 'HANDOFF_NOT_READY')
    check(handoff['historicalApprovalApplies'] is False and handoff['calculationAuthorized'] is False and
          handoff['publicationAuthorized'] is False and handoff['INTEGRACAO_RUNTIME'] == 'NAO' and
          handoff['PUBLICACAO'] == 'BLOQUEADA', 'HANDOFF_AUTHORIZATION_ESCALATION')
    check(handoff['reviewedCandidateSha256'] == CANDIDATE_SHA, 'HANDOFF_CANDIDATE_HASH_INVALID')
    check(handoff['homologatedDataSha256'] == sha(files['01_DADOS_HOMOLOGADOS.json']), 'HANDOFF_DATA_HASH_INVALID')
    binding = json.loads(files['12_VINCULO_DA_APROVACAO.json'])
    check(binding['candidateSha256'] == CANDIDATE_SHA and binding['approvalZipSha256'] == APPROVAL_ZIP_SHA
          and binding['method'] == 'USER_CONFIRMED_LOCAL_CANDIDATE', 'BINDING_INVALID')
    return {'result':'PASS', 'records':10, 'canonicalFieldsPerRecord':33,
            'clinicalContentChanged':False, 'historicalApprovalApplies':False,
            'calculationAuthorized':False, 'publicationAuthorized':False,
            'runtimeIntegration':False, 'handoff':'PRONTO', 'zipSha256':sha(raw),
            'candidateSha256':CANDIDATE_SHA, 'homologatedDataSha256':sha(files['01_DADOS_HOMOLOGADOS.json'])}


def build(root, approval_zip):
    candidate_raw = (root / CANDIDATE).read_bytes()
    check(sha(candidate_raw) == CANDIDATE_SHA, 'LOCAL_CANDIDATE_CHANGED_SINCE_CONFIRMATION')
    approval_raw = approval_zip.read_bytes()
    check(sha(approval_raw) == APPROVAL_ZIP_SHA, 'APPROVAL_PACKAGE_CHANGED')
    approval_files = read_verified_zip(approval_raw)
    opinion_raw = approval_files['GOLD33_NOVO_CANDIDATO_093_PARECER_MEDICO.json']
    opinion = json.loads(opinion_raw)
    candidate = json.loads(candidate_raw)
    rows = copy.deepcopy(candidate['medications'])
    for row in rows:
        row['CAMPOS_33'] = {field:row['CAMPOS_33'][field] for field in FIELDS}
        row['STATES'] = approved_states()
        row['HOMOLOGACAO'] = approval_metadata(opinion)
    data_raw = encoded(rows)
    binding = {'method':'USER_CONFIRMED_LOCAL_CANDIDATE', 'candidatePath':CANDIDATE,
               'candidateSha256':CANDIDATE_SHA, 'approvalZipSha256':APPROVAL_ZIP_SHA,
               'userInstruction':'APROVADO. Aplicar o parecer, gerar ZIP Codex, validar o handoff',
               'reviewer':'Dra Eugenia Marques', 'reviewDate':'20-09-2026', 'result':'Aprovado integralmente',
               'note':'O parecer original não continha hash do payload. O vínculo desta versão local foi confirmado pelo usuário nesta tarefa; o parecer original permanece inalterado.'}
    restrictions = {'historicalApprovalApplies':False, 'items':[
        {'id':r['ID'], 'originalRecordMetadata':{k:v for k,v in r.items() if k != 'CAMPOS_33'}, 'states':approved_states()}
        for r in candidate['medications']]}
    handoff = {'schema':'medcases.gold33.handoff.new-candidate-approval.v1', 'LISTA':'NOVA_LISTA_GOLD33_V1',
               'LOTE':'093_NOVO_CANDIDATO', 'MEDICAMENTOS':'10/10', 'IDS_UNICOS':'10/10',
               'GOLD33_KEYS':'33/33 POR MEDICAMENTO', 'JSON_PARSE':'PASS', 'PT_ES_STRUCTURE':'PASS',
               'REFERENCES_ARRAY':'10/10', 'REF_PT_ES':'10/10', 'CLINICAL_CONTENT_FROZEN':'PASS',
               'GRANULAR_BLOCKS_PRESERVED':'PASS', 'MANIFESTO_SHA256':'PASS', 'ZIP_INTEGRITY':'PASS',
               'HANDOFF_VALIDATION':'PASS', 'PACOTE_CODEX':'PRONTO',
               'historicalApprovalApplies':False, 'calculationAuthorized':False, 'publicationAuthorized':False,
               'INTEGRACAO_RUNTIME':'NAO', 'INTEGRACAO_TECNICA':'NAO_INICIADA', 'PUBLICACAO':'BLOQUEADA',
               'reviewedCandidateSha256':CANDIDATE_SHA, 'homologatedDataSha256':sha(data_raw),
               'validator':'python3 scripts/homologate-gold33-093.py --validate <ZIP>',
               'readyScope':'Handoff documental homologado; não é autorização ou pacote de integração automática ao runtime.'}
    refs = ['# Referências — novo candidato 093 homologado', '']
    for row in rows:
        refs += ['## ' + row['ID'], ''] + ['- ' + v for v in row['CAMPOS_33']['references']] + ['']
    files = {
        '00_LEIA_PRIMEIRO.txt':('Novo candidato 093: parecer aplicado por autorização explícita do usuário.\n'
            'Dez fichas, 33 campos PT/ES preservados; nenhuma alteração clínica.\n'
            '01 é o derivado homologado; 09 preserva os bytes originais do candidato.\n'
            '08 e 11 preservam PDF/JSON do parecer; 12 registra o vínculo confirmado pelo usuário.\n'
            'Notas e safetyFlags históricos que mencionam revisão pendente permanecem congelados no conteúdo clínico; '
            'a homologação atual consta em HOMOLOGACAO e STATES.\n'
            'Propostas de alias e demais restrições são preservadas sem ativação.\n'
            'historicalApprovalApplies=false; calculationAuthorized=false; publicationAuthorized=false.\n'
            'INTEGRACAO_RUNTIME=NAO; INTEGRACAO_TECNICA=NAO_INICIADA; PUBLICACAO=BLOQUEADA.\n'
            'Não executar o script do ZIP de parecer. Este pacote foi construído e validado por homologate-gold33-093.py.\n'
            'PUSH=NO; DEPLOY=NO.\n').encode(),
        '01_DADOS_HOMOLOGADOS.json':data_raw,
        '02_ALTERACOES.json':encoded({'lote':'093_NOVO_CANDIDATO', 'alteracoes_clinicas':[],
            'alteracoes_administrativas':['Aplicação de HOMOLOGACAO e atualização dos estados de revisão.',
                'Envelope medications projetado em array de handoff; chaves reordenadas para a ordem canônica, sem alteração de valores.'],
            'clinical_content_frozen':True, 'sourceCandidateSha256':CANDIDATE_SHA}),
        '03_REFERENCIAS.md':('\n'.join(refs) + '\n').encode(),
        '04_RELATORIO_CLINICO.md':('# Novo candidato 093 — parecer aplicado\n\n'
            'Médico revisor: Dra Eugenia Marques. Data: 20-09-2026. Resultado: Aprovado integralmente. Exceções: 0.\n\n'
            'Somente o novo candidato local confirmado pelo usuário recebeu o parecer. A homologação histórica não foi herdada. '
            'Nenhum campo clínico ou texto de restrição foi alterado. O parecer original não continha hash do payload: '
            'a confirmação atual do usuário vincula o conteúdo local, sem reescrever ou retroagir o parecer.\n\n'
            'Cálculos, integração ao runtime, aliases ativos e publicação continuam bloqueados.\n').encode(),
        '05_RESTRICOES_E_PENDENCIAS.json':encoded(restrictions),
        '07_HANDOFF_VALIDATION.json':encoded(handoff),
        '08_REVISAO_MEDICA_HOMOLOGADA.pdf':approval_files['GOLD33_NOVO_CANDIDATO_093_PARECER_MEDICO_APROVADO.pdf'],
        '09_CANDIDATO_REVISADO_ORIGINAL.json':candidate_raw,
        '10_REVISAO_MEDICA_ORIGINAL.md':(root / REVIEW).read_bytes(),
        '11_PARECER_MEDICO_ORIGINAL.json':opinion_raw,
        '12_VINCULO_DA_APROVACAO.json':encoded(binding),
    }
    files['06_MANIFESTO_SHA256.txt'] = ''.join(f'{sha(content)}  {name}\n' for name, content in sorted(files.items())).encode()
    buf = io.BytesIO()
    with zipfile.ZipFile(buf, 'w', compression=zipfile.ZIP_DEFLATED) as z:
        for name, content in sorted(files.items()):
            info = zipfile.ZipInfo(name, date_time=(2026,9,20,0,0,0))
            info.compress_type = zipfile.ZIP_DEFLATED
            info.external_attr = 0o100644 << 16
            z.writestr(info, content)
    raw = buf.getvalue()
    report = validate_final(raw)  # Validation must pass before final paths exist.
    dest = root / DEST
    dest.mkdir(parents=True, exist_ok=True)
    zip_path = dest / ZIP_NAME
    if zip_path.exists():
        check(zip_path.read_bytes() == raw, 'OUTPUT_EXISTS_WITH_DIFFERENT_CONTENT')
    else:
        tmp = dest / ('.' + ZIP_NAME + '.tmp')
        check(not tmp.exists(), 'STAGING_FILE_EXISTS')
        tmp.write_bytes(raw)
        validate_final(tmp.read_bytes())
        tmp.replace(zip_path)
    report['originalCandidateUnchanged'] = (root / CANDIDATE).read_bytes() == candidate_raw
    check(report['originalCandidateUnchanged'], 'ORIGINAL_CANDIDATE_CHANGED')
    (dest / 'VALIDACAO_HANDOFF.json').write_bytes(encoded(report))
    (dest / (ZIP_NAME + '.sha256')).write_text(f'{sha(raw)}  {ZIP_NAME}\n')
    return zip_path, report


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--approval-zip', type=Path)
    parser.add_argument('--validate', type=Path)
    args = parser.parse_args()
    if args.validate:
        print(json.dumps(validate_final(args.validate.read_bytes()), ensure_ascii=False, indent=2))
    else:
        parser.error('--approval-zip or --validate is required') if not args.approval_zip else None
        path, report = build(ROOT, args.approval_zip)
        print(json.dumps({'zip':str(path), **report}, ensure_ascii=False, indent=2))
