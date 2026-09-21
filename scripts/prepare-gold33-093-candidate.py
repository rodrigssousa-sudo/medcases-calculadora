#!/usr/bin/env python3
"""Prepare a NEW review candidate, never a reconstruction of the missing approval.

Existing reference text is a disclosed starting point, not newly verified evidence.
Product-specific additions below were checked against the linked primary labels.
No output from this script is in the live/private drug catalog or public tree.
"""
import copy
import hashlib
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / 'generated/gold33-nova-lista/lote093-candidato'
OUT.mkdir(parents=True, exist_ok=True)
rows = []


def pair(pt, es):
    return {'pt':pt, 'es':es}


def candidate(id, template, urls, updates, alias=None):
    source = ROOT / 'data/drugs' / (template + '.json')
    raw = source.read_bytes()
    document = json.loads(raw)
    fields = {k: document['pt'][k] if k == 'references' else pair(document['pt'][k], document['es'][k]) for k in document['pt']}
    fields = copy.deepcopy(fields)
    fields.update(updates)
    fields['references'] = list(dict.fromkeys(fields['references'] + urls))
    fields['ref'] = pair(urls[0], urls[0])
    fields['safetyFlags'] = pair('CANDIDATO NOVO: revisão médica pendente; cálculos e publicação bloqueados. ' + fields['safetyFlags']['pt'],
                               'CANDIDATO NUEVO: revisión médica pendiente; cálculos y publicación bloqueados. ' + fields['safetyFlags']['es'])
    fields['guidelineRecommendations'] = pair('Esta preparação usa bulas e texto de referência preexistente; não foi feita validação independente de diretrizes.',
                                             'Esta preparación usa prospectos y texto de referencia preexistente; no se realizó validación independiente de guías.')
    row = {
        'ID':id,
        'NOTA_REVISAO_CLINICA':'NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.',
        'CAMPOS_33':fields,
        'PROVENIENCIA': {
            'type':'NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL',
            'templatePath':str(source.relative_to(ROOT)), 'templateSha256':hashlib.sha256(raw).hexdigest(),
            'sourcesConsulted':'2026-09-21', 'primarySources':urls,
            'newProductSpecificFields':list(updates),
            'inheritedFieldsRequiringReview':[k for k in fields if k not in updates and k not in ['references','ref','safetyFlags','guidelineRecommendations']],
            'templateClinicalMetadata':document['mc_gold_standard_v1'],
        },
        'STATES': {'REVISAO_CLINICA':'PENDENTE', 'HOMOLOGACAO_DADOS':'NAO', 'AUTORIZACAO_CALCULO':'NAO_AUTORIZADA',
                   'INTEGRACAO_TECNICA':'SOMENTE_CANDIDATO', 'PUBLICACAO':'BLOQUEADA'},
        'calculationAuthorized':False, 'publicationAuthorized':False,
    }
    if alias:
        row['RECONCILIACAO_CANONICA'] = {'candidateAliasOf':alias, 'status':'PENDENTE_REVISAO_DE_ESCOPO',
                                       'action':'Não adicionar um segundo registro ativo para o mesmo produto.'}
    rows.append(row)


cata = 'https://portal.novartis.com.br/medicamentos/wp-content/uploads/2021/10/Bula-CATAFLAM-Suspensao-Gotas-Medico.pdf'
cata_patient = cata.replace('Medico.pdf', 'Paciente.pdf')
candidate('diclofenaco_gotas', 'diclofenaco', [cata, cata_patient], {
    'name':pair('Diclofenaco resinato — gotas 15 mg/mL', 'Diclofenaco resinato — gotas 15 mg/mL'),
    'commercialNames':pair('Cataflam; bula brasileira consultada.', 'Cataflam; prospecto brasileño consultado.'),
    'presentation':pair('Suspensão oral; frasco 20 mL.', 'Suspensión oral; frasco 20 mL.'),
    'presentations':pair('15 mg/mL; aproximadamente 0,5 mg/gota, expressos como diclofenaco potássico.', '15 mg/mL; aproximadamente 0,5 mg/gota, expresados como diclofenaco potásico.'),
    'indications':pair('Artrite juvenil crônica; adultos: dor/inflamação aguda. Febre isolada não é indicação.', 'Artritis juvenil crónica; adultos: dolor/inflamación aguda. Fiebre aislada no es indicación.'),
    'dose':pair('Adultos: inicialmente 100–150 mg/dia, divididos em 2–3 tomadas.', 'Adultos: inicialmente 100–150 mg/día, divididos en 2–3 tomas.'),
    'pediatricDose':pair('≥1 ano: 0,5–2 mg/kg/dia em 2–3 tomadas; artrite juvenil até 3 mg/kg/dia. Máximo 150 mg/dia.', '≥1 año: 0,5–2 mg/kg/día en 2–3 tomas; artritis juvenil hasta 3 mg/kg/día. Máximo 150 mg/día.'),
    'administration':pair('Via oral, preferencialmente nas refeições; contar em colher.', 'Vía oral, preferentemente con comidas; contar en cuchara.'),
    'preparation':pair('Agitar por 1 minuto; suspensão não solúvel em água/leite/suco.', 'Agitar 1 minuto; suspensión no soluble en agua/leche/jugo.'),
    'infusionProtocol':pair('Não aplicável à apresentação oral.', 'No aplicable a la presentación oral.'),
    'lactation':pair('A bula desaconselha durante amamentação.', 'El prospecto desaconseja durante lactancia.'),
    'clinicalPearls':pair('Não intercambiar sais, concentrações ou conta-gotas.', 'No intercambiar sales, concentraciones ni goteros.'),
})

candidate('diclofenaco_supositorio', 'diclofenaco', ['https://www.medicines.org.uk/emc/product/1044/smpc'], {
    'name':pair('Diclofenaco sódico — supositório', 'Diclofenaco sódico — supositorio'),
    'commercialNames':pair('Voltarol; Reino Unido.', 'Voltarol; Reino Unido.'),
    'presentation':pair('Supositório retal.', 'Supositorio rectal.'),
    'presentations':pair('12,5; 25; 50; 100 mg.', '12,5; 25; 50; 100 mg.'),
    'indications':pair('Dor/inflamação; pediatria: artrite juvenil e dor pós-operatória nas idades autorizadas.', 'Dolor/inflamación; pediatría: artritis juvenil y dolor posoperatorio en edades autorizadas.'),
    'dose':pair('Adultos: 75–150 mg/dia fracionados; máximo total 150 mg/dia.', 'Adultos: 75–150 mg/día divididos; máximo total 150 mg/día.'),
    'pediatricDose':pair('1–12 anos, artrite: 1–3 mg/kg/dia em 2–3 doses. 6–12 anos, pós-operatório: 1–2 mg/kg/dia, até 4 dias; somente 12,5/25 mg.', '1–12 años, artritis: 1–3 mg/kg/día en 2–3 dosis. 6–12 años, posoperatorio: 1–2 mg/kg/día, hasta 4 días; solo 12,5/25 mg.'),
    'administration':pair('Via retal após evacuação; não ingerir.', 'Vía rectal tras evacuar; no ingerir.'),
    'preparation':pair('Supositório pronto para administração retal.', 'Supositorio listo para administración rectal.'),
    'infusionProtocol':pair('Não aplicável.', 'No aplicable.'),
    'contraindications':pair('Proctite; úlcera/hemorragia GI; falência renal/hepática; doença cardiovascular estabelecida; alergia a AINE; terceiro trimestre.', 'Proctitis; úlcera/hemorragia GI; falla renal/hepática; enfermedad cardiovascular establecida; alergia a AINE; tercer trimestre.'),
    'clinicalPearls':pair('50/100 mg não indicados para crianças.', '50/100 mg no indicados para niños.'),
})

keto = 'https://eurofarma.com.br/produtos/bulas/view/healthcare/pt/bula-cetoprofeno-solucao-oral-gotas.html'
candidate('cetoprofeno_gotas', 'cetoprofeno', [keto, keto.replace('/healthcare/', '/patient/')], {
    'name':pair('Cetoprofeno — gotas 20 mg/mL', 'Ketoprofeno — gotas 20 mg/mL'),
    'commercialNames':pair('Genérico Eurofarma, Brasil.', 'Genérico Eurofarma, Brasil.'),
    'presentation':pair('Solução oral em gotas.', 'Solución oral en gotas.'),
    'presentations':pair('20 mg/mL; 20 gotas/mL; 1 mg/gota.', '20 mg/mL; 20 gotas/mL; 1 mg/gota.'),
    'dose':pair('Adultos: 50 gotas a cada 6–8 h; máximo 300 mg/dia.', 'Adultos: 50 gotas cada 6–8 h; máximo 300 mg/día.'),
    'pediatricDose':pair('>1 ano: 1 gota/kg a cada 6–8 h. 7–11 anos: 25 gotas a cada 6–8 h. Não extrapolar para <1 ano.', '>1 año: 1 gota/kg cada 6–8 h. 7–11 años: 25 gotas cada 6–8 h. No extrapolar a <1 año.'),
    'renalDose':pair('Reduzir dose inicial; manter mínima eficaz. Insuficiência grave: contraindicado.', 'Reducir dosis inicial; mantener mínima eficaz. Insuficiencia grave: contraindicado.'),
    'hepaticDose':pair('Monitorar; menor dose eficaz. Insuficiência grave: contraindicado.', 'Monitorizar; menor dosis eficaz. Insuficiencia grave: contraindicado.'),
    'administration':pair('Somente via oral.', 'Solo vía oral.'),
    'preparation':pair('Usar conta-gotas do produto; 1 gota=1 mg.', 'Usar gotero del producto; 1 gota=1 mg.'),
    'pregnancy':pair('Evitar uso sem avaliação obstétrica; contraindicado no terceiro trimestre.', 'Evitar uso sin evaluación obstétrica; contraindicado en tercer trimestre.'),
    'infusionProtocol':pair('Não aplicável à formulação oral.', 'No aplicable a formulación oral.'),
})

candidate('salbutamol_spray', 'salbutamol_nebulizacao', ['https://www.medicines.org.uk/emc/product/850/smpc', 'https://www.medicines.org.uk/emc/files/pil.850.pdf'], {
    'name':pair('Salbutamol — aerossol 100 microgramas/acionamento', 'Salbutamol — aerosol 100 microgramos/actuación'),
    'commercialNames':pair('Ventolin Evohaler, Reino Unido.', 'Ventolin Evohaler, Reino Unido.'),
    'presentation':pair('Inalador pressurizado dosimetrado.', 'Inhalador presurizado dosificado.'),
    'presentations':pair('100 microgramas/acionamento; 200 acionamentos.', '100 microgramos/actuación; 200 actuaciones.'),
    'indications':pair('Alívio/prevenção do broncoespasmo; adultos e crianças ≥4 anos no escopo escolhido.', 'Alivio/prevención del broncoespasmo; adultos y niños ≥4 años en el alcance elegido.'),
    'pharmacokinetics':pair('10–20% da dose inalada alcança vias inferiores; eliminação principalmente urinária.', '10–20% de dosis inhalada alcanza vías inferiores; eliminación principalmente urinaria.'),
    'dose':pair('Alívio adulto: 1–2 jatos. Demanda: máximo 8 jatos/24 h; necessidade crescente exige reavaliação.', 'Alivio adulto: 1–2 inhalaciones. Demanda: máximo 8/24 h; necesidad creciente exige reevaluación.'),
    'pediatricDose':pair('4–11 anos: 1 jato; até 2 se necessário. ≥12 anos: dose adulta. <4 anos: revisão específica.', '4–11 años: 1 inhalación; hasta 2 si precisa. ≥12 años: dosis adulta. <4 años: revisión específica.'),
    'administration':pair('Inalação oral; coordenar acionamento/inspiração. Espaçador quando necessário.', 'Inhalación oral; coordinar actuación/inspiración. Espaciador cuando necesario.'),
    'preparation':pair('Dispositivo pronto; não diluir nem nebulizar.', 'Dispositivo listo; no diluir ni nebulizar.'),
    'infusionProtocol':pair('Não aplicável; não injetar.', 'No aplicable; no inyectar.'),
    'clinicalPearls':pair('Na asma, SABA não deve ser tratamento único; associar terapia anti-inflamatória.', 'En asma, SABA no debe ser tratamiento único; asociar terapia antiinflamatoria.'),
    'safetyFlags':pair('AEROSSOL_DOSIMETRADO; SEM_CONVERSAO_DE_NEBULIZACAO; BETA2; HIPOCALEMIA.', 'AEROSOL_DOSIFICADO; SIN_CONVERSION_DE_NEBULIZACION; BETA2; HIPOPOTASEMIA.'),
    'alerts':pair('Não transferir volumes, doses ou cortes de peso da solução nebulizada para o aerossol.', 'No transferir volúmenes, dosis ni límites de peso de solución nebulizada al aerosol.'),
})

# Same product scope as supplied lot 103. These are proposals for aliases, not
# additional live catalog entries, and none inherit lot 093's missing approval.
for id, template in [('salbutamol_solucao_inalatoria','salbutamol_nebulizacao'),
                     ('fenoterol_solucao_inalatoria','fenoterol_gotas'),
                     ('ipratropio_solucao_inalatoria','brometo_de_ipratropio_nebulizacao')]:
    d = json.loads((ROOT / 'data/drugs' / (template + '.json')).read_text())
    candidate(id, template, [d['pt']['ref']], {}, alias=template)

pred = 'https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=a0d74ae0-7b2d-4d36-9211-c76f5063b5a9'
pred_pk = 'https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=7262fc84-3db2-4475-8ae4-6bec4477cb81'
candidate('prednisolona_solucao_oral', 'prednisolona', [pred, pred_pk], {
    'name':pair('Prednisolona fosfato sódico — solução oral 15 mg/5 mL', 'Prednisolona fosfato sódico — solución oral 15 mg/5 mL'),
    'commercialNames':pair('Produto genérico PAI, EUA.', 'Producto genérico PAI, EE.UU.'),
    'presentation':pair('Solução oral.', 'Solución oral.'),
    'presentations':pair('15 mg de base/5 mL; não confundir com massa do sal.', '15 mg de base/5 mL; no confundir con masa de sal.'),
    'mechanism':pair('Atividade glicocorticoide: modula inflamação e imunidade.', 'Actividad glucocorticoide: modula inflamación e inmunidad.'),
    'pharmacodynamics':pair('Anti-inflamatória; hiperglicemia e supressão adrenal dependem da exposição.', 'Antiinflamatoria; hiperglucemia y supresión adrenal dependen de exposición.'),
    'pharmacokinetics':pair('Absorção oral rápida; ligação proteica 70–90%; meia-vida 2–4 h; metabolismo hepático.', 'Absorción oral rápida; unión proteica 70–90%; semivida 2–4 h; metabolismo hepático.'),
    'dose':pair('Inicial 5–60 mg/dia, individualizada pela doença/resposta; não é esquema universal.', 'Inicial 5–60 mg/día, individualizada por enfermedad/respuesta; no es esquema universal.'),
    'pediatricDose':pair('Faixa inicial geral: 0,14–2 mg/kg/dia em 3–4 doses; escolher protocolo por indicação, não automatizar a faixa.', 'Rango inicial general: 0,14–2 mg/kg/día en 3–4 dosis; elegir protocolo por indicación, no automatizar el rango.'),
    'renalDose':pair('Sem tabela numérica; cautela com retenção hidrossalina.', 'Sin tabla numérica; precaución por retención hidrosalina.'),
    'hepaticDose':pair('Individualizar; efeitos podem aumentar na cirrose.', 'Individualizar; efectos pueden aumentar en cirrosis.'),
    'contraindications':pair('Micose sistêmica; hipersensibilidade.', 'Micosis sistémica; hipersensibilidad.'),
    'interactions':pair('Indutores/inibidores enzimáticos, anticoagulantes, AINEs, diuréticos e vacinas.', 'Inductores/inhibidores enzimáticos, anticoagulantes, AINEs, diuréticos y vacunas.'),
    'monitoring':pair('Crescimento, pressão, glicose, infecção, olhos e supressão adrenal.', 'Crecimiento, presión, glucosa, infección, ojos y supresión adrenal.'),
    'administration':pair('Via oral; após tratamento prolongado, retirada gradual.', 'Vía oral; tras tratamiento prolongado, retirada gradual.'),
    'preparation':pair('Solução pronta; confirmar 3 mg de base/mL.', 'Solución lista; confirmar 3 mg de base/mL.'),
    'infusionProtocol':pair('Não aplicável.', 'No aplicable.'),
    'pregnancy':pair('Avaliar benefício/risco fetal.', 'Evaluar beneficio/riesgo fetal.'),
    'lactation':pair('Excreção no leite; avaliar risco infantil.', 'Excreción en leche; evaluar riesgo infantil.'),
})

candidate('dexametasona_elixir', 'dexametasona', ['https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=7b51ffce-ec64-4b49-8870-b9666537c541'], {
    'name':pair('Dexametasona — elixir 0,5 mg/5 mL', 'Dexametasona — elixir 0,5 mg/5 mL'),
    'commercialNames':pair('Produto Marlex, EUA.', 'Producto Marlex, EE.UU.'),
    'presentation':pair('Elixir oral.', 'Elixir oral.'),
    'presentations':pair('0,5 mg/5 mL; contém álcool 5%.', '0,5 mg/5 mL; contiene alcohol 5%.'),
    'dose':pair('Inicial 0,75–9 mg/dia conforme doença; titular individualmente.', 'Inicial 0,75–9 mg/día según enfermedad; titular individualmente.'),
    'pediatricDose':pair('Sem regime pediátrico universal nesta preparação; não extrapolar faixa adulta.', 'Sin régimen pediátrico universal en esta preparación; no extrapolar rango adulto.'),
    'administration':pair('Via oral; retirada gradual após uso prolongado.', 'Vía oral; retirada gradual tras uso prolongado.'),
    'preparation':pair('Pronto; medir volume correspondente à prescrição.', 'Listo; medir volumen correspondiente a prescripción.'),
    'infusionProtocol':pair('Não aplicável; elixir não injetável.', 'No aplicable; elixir no inyectable.'),
    'clinicalPearls':pair('Considerar álcool e excipientes; não reutilizar preparo IV.', 'Considerar alcohol y excipientes; no reutilizar preparación IV.'),
})

candidate('budesonida_suspensao_inalatoria', 'budesonida', ['https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=1d139a25-9c17-4b3e-8ffd-b2d562cc00ee'], {
    'name':pair('Budesonida — suspensão para nebulização', 'Budesonida — suspensión para nebulización'),
    'commercialNames':pair('Budesonide Inhalation Suspension, EUA.', 'Budesonide Inhalation Suspension, EE.UU.'),
    'presentation':pair('Suspensão inalatória em ampolas.', 'Suspensión inhalatoria en ampollas.'),
    'presentations':pair('0,25 mg/2 mL; 0,5 mg/2 mL.', '0,25 mg/2 mL; 0,5 mg/2 mL.'),
    'indications':pair('Manutenção da asma: 12 meses–8 anos; não trata broncoespasmo agudo.', 'Mantenimiento del asma: 12 meses–8 años; no trata broncoespasmo agudo.'),
    'dose':pair('Escopo pediátrico; não importar dose de inalador em pó.', 'Alcance pediátrico; no importar dosis de inhalador en polvo.'),
    'pediatricDose':pair('Broncodilatador prévio: 0,25 mg 2x/dia. Corticoide inalatório prévio: 0,25–0,5 mg 2x/dia. Corticoide oral prévio: 0,5 mg 2x/dia.', 'Broncodilatador previo: 0,25 mg 2/día. Corticoide inhalado previo: 0,25–0,5 mg 2/día. Corticoide oral previo: 0,5 mg 2/día.'),
    'hepaticDose':pair('Metabolismo hepático; monitorar por possível acúmulo.', 'Metabolismo hepático; monitorizar por posible acumulación.'),
    'administration':pair('Nebulizador a jato; não ultrassônico; enxaguar boca.', 'Nebulizador de chorro; no ultrasónico; enjuagar boca.'),
    'preparation':pair('Não presumir compatibilidade para misturas.', 'No presumir compatibilidad para mezclas.'),
    'infusionProtocol':pair('Não injetável.', 'No inyectable.'),
})

payload = {'schema':'medcases.gold33.new-review-candidate.v1', 'lot':'093',
           'status':'PENDENTE_REVISAO_MEDICA', 'historicalApprovalApplies':False,
           'purpose':'Completar um novo candidato com proveniência explícita, sem reconstruir o original ausente.',
           'medications':rows}
(OUT / '01_NOVO_CANDIDATO_093.json').write_text(json.dumps(payload, ensure_ascii=False, indent=2) + '\n')
lines = ['# Lote 093 — novo candidato para revisão médica', '',
         'Este arquivo NÃO é o candidato original aprovado. A autorização do usuário permite preparar conteúdo; a homologação histórica não foi transferida.', '',
         'Dez fichas com contrato de 33 campos PT/ES. Campos herdados do cadastro têm origem identificada, mas precisam ser revistos quanto à formulação e ao escopo. Campos novos têm links de bula. A presença de 33 campos não equivale a validação clínica integral.', '',
         'Nada deste diretório é carregado pela calculadora, pelo gateway ou pelo manifesto offline. Publicação e cálculos permanecem bloqueados.', '',
         '| ID solicitado | Base usada | Situação |', '|---|---|---|']
for r in rows:
    lines.append(f"| {r['ID']} | {r['PROVENIENCIA']['templatePath']} | {'Proposta de alias; não duplicar' if 'RECONCILIACAO_CANONICA' in r else 'Nova ficha em revisão'} |")
for r in rows:
    lines += ['', '## ' + r['ID'], '', 'Fontes específicas:']
    for i, url in enumerate(r['PROVENIENCIA']['primarySources'], 1):
        lines.append(f'- [Fonte {i}]({url})')
    lines += ['', 'Campos adaptados/pesquisados: ' + ', '.join(r['PROVENIENCIA']['newProductSpecificFields']) + '.',
              '', 'Campos herdados a conferir: ' + ', '.join(r['PROVENIENCIA']['inheritedFieldsRequiringReview']) + '.']
    for field, value in r['CAMPOS_33'].items():
        lines += ['', '### ' + field]
        if field == 'references':
            lines += [''] + ['- ' + ref for ref in value]
        else:
            lines += ['', '**PT:** ' + value['pt'], '', '**ES:** ' + value['es']]
(OUT / 'REVISAO_MEDICA.md').write_text('\n'.join(lines) + '\n')
print(json.dumps({'result':'CANDIDATE_PREPARED', 'records':len(rows), 'clinicalApproval':'PENDING', 'liveChanges':0}))
