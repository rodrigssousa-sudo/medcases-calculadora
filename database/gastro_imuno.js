/* ============================================================
   MedCases Pro — Módulo: GASTRO-IMUNOLOGIA, UTI & CORTICOIDES
   Expõe: window.GASTRO_IMUNO_DRUGS_DB
   Schema: array [] — compatível com _injectArrayDB() do index.html
   BUILD 279 — Lote 3:
     Mesalazina (5-ASA)     — Anti-inflamatório intestinal (DII)
     Sufentanil             — Opioide ultra-potente UTI / anestesia
     Hidrocortisona         — Corticoide ação curta (choque séptico)
     Metilprednisolona      — Corticoide alta potência (pulsoterapia)
   ─────────────────────────────────────────────────────────────
   Categorias: gastro | uti | imuno_corticoide
============================================================ */

window.GASTRO_IMUNO_DRUGS_DB = [

  /* ══════════════════════════════════════════════════════════════
     1. MESALAZINA (5-ASA)
     Anti-inflamatório Intestinal — Retocolite Ulcerativa · Crohn leve
  ══════════════════════════════════════════════════════════════ */
  {
    id: 'mesalazina',
    name: { pt: 'Mesalazina (5-ASA)', es: 'Mesalazina (5-ASA)' },
    category: 'gastro',
    class: { pt: 'Anti-inflamatório Intestinal (Aminossalicilato)', es: 'Antiinflamatorio Intestinal (Aminosalicilato)' },
    indications: {
      pt: ['Retocolite Ulcerativa (Indução e Manutenção — padrão ouro)', 'Doença de Crohn leve a moderada'],
      es: ['Colitis Ulcerosa (Inducción y Mantenimiento — estándar de oro)', 'Enfermedad de Crohn leve a moderada']
    },
    commercialNames: { br: ['Mesacol', 'Pentasa'], ar: ['Pentasa', 'Salofalk'] },
    presentation: {
      pt: ['Comprimidos revestidos 400 mg', 'Comprimidos revestidos 800 mg', 'Supositórios 500 mg', 'Supositórios 1 g', 'Enema 3 g/100 mL'],
      es: ['Comprimidos recubiertos 400 mg', 'Comprimidos recubiertos 800 mg', 'Supositorios 500 mg', 'Supositorios 1 g', 'Enema 3 g/100 mL']
    },
    mechanism: {
      pt: 'A mesalazina é o Ácido 5-Aminossalicílico (5-ASA) puro. Possui ação tópica direta na mucosa intestinal inflamada. Inibe a ciclooxigenase (COX) e a lipoxigenase, reduzindo a produção de prostaglandinas e leucotrienos no cólon. Também atua como sequestrador de radicais livres e inibe a ativação do NF-kB, diminuindo a cascata inflamatória sem forte imunossupressão sistêmica.',
      es: 'La mesalazina es el Ácido 5-Aminosalicílico (5-ASA) puro. Posee acción tópica directa en la mucosa intestinal inflamada. Inhibe la ciclooxigenasa (COX) y la lipoxigenasa, reduciendo la producción de prostaglandinas y leucotrienos en el colon. También actúa como secuestrador de radicales libres e inhibe la activación del NF-kB, disminuyendo la cascada inflamatoria sin fuerte inmunosupresión sistémica.'
    },
    dose: {
      adult: {
        pt: 'Ataque/Indução: 2,4 g a 4,8 g/dia VO (divididos). Manutenção: 1,2 a 2,4 g/dia VO. Retal (Proctite): 1 supositório 1 g/dia ou 1 enema/dia.',
        es: 'Ataque/Inducción: 2,4 g a 4,8 g/día VO (divididos). Mantenimiento: 1,2 a 2,4 g/día VO. Rectal (Proctitis): 1 supositorio 1 g/día o 1 enema/día.'
      },
      pediatric: {
        pt: 'Retocolite Ulcerativa: 30 a 50 mg/kg/dia VO (manutenção).',
        es: 'Colitis Ulcerosa: 30 a 50 mg/kg/día VO (mantenimiento).'
      }
    },
    administration: {
      pt: ['Comprimidos não devem ser mastigados ou partidos (possuem revestimento sensível ao pH para liberar a droga apenas no íleo terminal/cólon).'],
      es: ['Los comprimidos no deben ser masticados o partidos (poseen recubrimiento sensible al pH para liberar la droga solo en el íleon terminal/colon).']
    },
    renalAdjustment: { required: true, message: { pt: 'Evitar em disfunção renal grave. Risco idiossincrático de nefrite intersticial aguda.', es: 'Evitar en disfunción renal grave. Riesgo idiosincrásico de nefritis intersticial aguda.' } },
    hepaticAdjustment: { required: false, message: { pt: 'Usar com cautela em hepatopatas graves.', es: 'Usar con precaución en hepatópatas graves.' } },
    commonAdverseEffects: {
      pt: ['Cefaleia (muito comum)', 'Diarreia e dor abdominal (paradoxal no início)', 'Erupção cutânea'],
      es: ['Cefalea (muy común)', 'Diarrea y dolor abdominal (paradójico al inicio)', 'Erupción cutánea']
    },
    dangerousAdverseEffects: {
      pt: ['Nefrite intersticial aguda (podendo levar a DRC terminal)', 'Pancreatite aguda (rara mas clássica)', 'Síndrome de intolerância aguda à mesalazina (simula piora da retocolite)'],
      es: ['Nefritis intersticial aguda (pudiendo llevar a ERC terminal)', 'Pancreatitis aguda (rara pero clásica)', 'Síndrome de intolerancia aguda a la mesalazina (simula empeoramiento de la colitis ulcerosa)']
    },
    contraindications: {
      absolute: { pt: ['Hipersensibilidade a SALICILATOS (AAS / Aspirina)'], es: ['Hipersensibilidad a SALICILATOS (AAS / Aspirina)'] },
      relative: { pt: ['Disfunção renal prévia não investigada'], es: ['Disfunción renal previa no investigada'] }
    },
    safetyFlags: {
      bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
      warning: { pt: 'Monitoramento da função renal (creatinina e EAS) é OBRIGATÓRIO antes do início e periodicamente durante o tratamento, devido ao risco silencioso de Nefrite Intersticial.', es: 'La monitorización de la función renal (creatinina y sedimento urinario) es OBLIGATORIA antes del inicio y periódicamente durante el tratamiento, debido al riesgo silencioso de Nefritis Intersticial.' }
    },
    ref: 'Ruemmele FM et al. J Crohns Colitis 2014 · Feagan BG & MacDonald JK. Cochrane 2012 · IBD Standards Group UK 2022 · Lexicomp 2026'
  },

  /* ══════════════════════════════════════════════════════════════
     2. SUFENTANIL
     Opioide Sintético Ultra-Potente — Sedoanalgesia UTI · Anestesia
  ══════════════════════════════════════════════════════════════ */
  {
    "id": "sufentanil",
    "name": {
      "pt": "Sufentanil",
      "es": "Sufentanilo"
    },
    "category": "anestesia",
    "class": {
      "pt": "Agonista opioide μ de alta potência",
      "es": "Agonista opioide μ de alta potencia"
    },
    "indications": {
      "pt": [
        "Adjuvante analgésico na anestesia geral balanceada em pacientes intubados e ventilados",
        "Agente anestésico primário em grandes cirurgias selecionadas",
        "Analgesia epidural no trabalho de parto em combinação com bupivacaína"
      ],
      "es": [
        "Adyuvante analgésico en anestesia general balanceada en pacientes intubados y ventilados",
        "Agente anestésico primario en cirugías mayores seleccionadas",
        "Analgesia epidural en trabajo de parto en combinación con bupivacaína"
      ]
    },
    "commercialNames": {
      "br": [
        "Sufentanil"
      ],
      "ar": [
        "Sufentanilo"
      ]
    },
    "presentation": {
      "pt": [
        "Solução injetável 50 mcg/mL"
      ],
      "es": [
        "Solución inyectable 50 mcg/mL"
      ]
    },
    "mechanism": {
      "pt": "Agonista opioide μ muito potente. Produz analgesia profunda e depressão respiratória dose-dependente; pode causar rigidez muscular e depressão cardiovascular.",
      "es": "Agonista opioide μ muy potente. Produce analgesia profunda y depresión respiratoria dependiente de la dosis; puede causar rigidez muscular y depresión cardiovascular."
    },
    "dose": {
      "adult": {
        "pt": "Adjuvante de anestesia geral IV: 1–2 mcg/kg para procedimentos de 1–2 h; 2–8 mcg/kg para 2–8 h; manutenção incremental 10–25 ou 10–50 mcg conforme contexto, mantendo total aproximado ≤1 mcg/kg/h de tempo cirúrgico. Epidural no parto: 10–15 mcg com bupivacaína 0,125%, podendo repetir até 2 vezes com intervalo ≥1 h.",
        "es": "Adyuvante de anestesia general IV: 1–2 mcg/kg para procedimientos de 1–2 h; 2–8 mcg/kg para 2–8 h; mantenimiento incremental 10–25 o 10–50 mcg según contexto, manteniendo un total aproximado ≤1 mcg/kg/h de tiempo quirúrgico. Epidural en parto: 10–15 mcg con bupivacaína 0,125%, pudiendo repetir hasta 2 veces con intervalo ≥1 h."
      },
      "pediatric": {
        "pt": "Em crianças <12 anos submetidas a cirurgia cardiovascular, a rotulagem descreve 10–25 mcg/kg com O₂ a 100%; experiência neonatal existe, mas clearance é menor e exige titulação especializada.",
        "es": "En niños <12 años sometidos a cirugía cardiovascular, el rotulado describe 10–25 mcg/kg con O₂ al 100%; existe experiencia neonatal, pero el clearance es menor y exige titulación especializada."
      }
    },
    "administration": {
      "pt": [
        "IV por injeção lenta ou infusão; epidural apenas por equipe treinada",
        "Altas doses exigem intubação, ventilação e capacidade de tratar depressão respiratória prolongada"
      ],
      "es": [
        "IV por inyección lenta o infusión; epidural solo por equipo entrenado",
        "Las dosis altas requieren intubación, ventilación y capacidad para tratar depresión respiratoria prolongada"
      ]
    },
    "renalAdjustment": {
      "required": true,
      "message": {
        "pt": "Sem fator fixo universal; usar titulação cautelosa e monitorização prolongada em disfunção renal importante.",
        "es": "Sin factor fijo universal; usar titulación cautelosa y monitorización prolongada en disfunción renal importante."
      }
    },
    "hepaticAdjustment": {
      "required": true,
      "message": {
        "pt": "Metabolismo hepático; titular com cautela em disfunção hepática e reduzir exposição conforme resposta clínica.",
        "es": "Metabolismo hepático; titular con cautela en disfunción hepática y reducir la exposición según respuesta clínica."
      }
    },
    "commonAdverseEffects": {
      "pt": [
        "Náusea",
        "Sedação",
        "Bradicardia"
      ],
      "es": [
        "Náuseas",
        "Sedación",
        "Bradicardia"
      ]
    },
    "dangerousAdverseEffects": {
      "pt": [
        "Depressão respiratória/apneia",
        "Rigidez muscular",
        "Depressão cardiovascular grave"
      ],
      "es": [
        "Depresión respiratoria/apnea",
        "Rigidez muscular",
        "Depresión cardiovascular grave"
      ]
    },
    "contraindications": {
      "absolute": {
        "pt": [
          "Hipersensibilidade ao sufentanil"
        ],
        "es": [
          "Hipersensibilidad al sufentanilo"
        ]
      },
      "relative": {
        "pt": [
          "Doença pulmonar grave, idosos/frágeis, associação com depressores do SNC ou inibidores de CYP3A4"
        ],
        "es": [
          "Enfermedad pulmonar grave, adultos mayores/frágiles, asociación con depresores del SNC o inhibidores de CYP3A4"
        ]
      }
    },
    "safetyFlags": {
      "bleedingRisk": false,
      "renalHighRisk": false,
      "hepaticCaution": true,
      "antidoteAvailable": true,
      "highAlertMedication": true,
      "warning": {
        "pt": "Pode causar depressão respiratória potencialmente fatal, rigidez muscular e toxicidade aumentada com inibidores de CYP3A4.",
        "es": "Puede causar depresión respiratoria potencialmente fatal, rigidez muscular y toxicidad aumentada con inhibidores de CYP3A4."
      }
    }
  },

  /* ══════════════════════════════════════════════════════════════
     3. HIDROCORTISONA
     Corticoide Ação Curta — Choque Séptico · Crise Adrenal · Anafilaxia
  ══════════════════════════════════════════════════════════════ */
  /* ══════════════════════════════════════════════════════════════
     4. METILPREDNISOLONA
     Corticoide Alta Potência — Pulsoterapia autoimune · Transplante
  ══════════════════════════════════════════════════════════════ */
]; /* fim window.GASTRO_IMUNO_DRUGS_DB */
/* GOLD33_SELECTIVE:mesalazina:START */
;(function(){var db=window.GASTRO_IMUNO_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="mesalazina";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:mesalazina:"+matches.length);drug=matches[0];}else{drug=db&&db["mesalazina"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:mesalazina");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "049",
    "requiredFieldCount": 33,
    "approvedSha256": "b8967508605bdc40fd2c87b15e7061b2af75f812dd0994ff79fade8e4ef57e46",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "BLOQUEADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Mesalazina",
    "class": "Aminossalicilato anti-inflamatório intestinal",
    "pharmacologicClass": "Aminossalicilato anti-inflamatório intestinal",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimidos/cápsulas/grânulos orais e formulações retais em diversas forças.",
    "presentations": "Comprimidos/cápsulas/grânulos orais e formulações retais em diversas forças.",
    "mechanism": "Mecanismo específico da classe conforme fonte primária e formulação.",
    "pharmacodynamics": "Mecanismo específico da classe conforme fonte primária e formulação.",
    "pharmacokinetics": "Revisar absorção, metabolismo, meia-vida e eliminação na fonte primária.",
    "indications": "Indução e manutenção de remissão na colite ulcerativa; algumas formulações têm indicação para proctite.",
    "dose": "A dose é estritamente dependente da formulação e local da doença: comprimidos/cápsulas de liberação modificada, grânulos, supositórios e enemas não são intercambiáveis mg por mg. Automação global bloqueada; usar rótulo do produto específico.",
    "pediatricDose": "Requer tabela completa por idade/peso; automação pediátrica bloqueada.",
    "renalDose": "Avaliar função renal e tabela específica; não inferir ajuste.",
    "hepaticDose": "Avaliar hepatopatia; não inferir ajuste.",
    "commonAdverseEffects": "Cefaleia, dor abdominal, náusea, diarreia e flatulência.",
    "dangerousAdverseEffects": "Nefrite intersticial/insuficiência renal, miocardite/pericardite, pancreatite, hepatotoxicidade e reação de intolerância aguda.",
    "adverseEffects": "Cefaleia, dor abdominal, náusea, diarreia e flatulência.; Nefrite intersticial/insuficiência renal, miocardite/pericardite, pancreatite, hepatotoxicidade e reação de intolerância aguda.",
    "contraindications": "Hipersensibilidade e contraindicações específicas da bula.",
    "interactions": "Revisar interações farmacodinâmicas e metabólicas aplicáveis.",
    "monitoring": "Monitorar eficácia, tolerabilidade, função orgânica e eventos graves.",
    "administration": "Usar somente via/formulação rotulada; respeitar técnica e alimentos.",
    "preparation": "Confirmar concentração, diluição e estabilidade no produto; não inferir.",
    "infusionProtocol": "Quando IV, usar bomba/monitorização e protocolo da bula; caso contrário não aplicável.",
    "pregnancy": "Avaliar risco fetal, indicação e bula.",
    "lactation": "Avaliar excreção e risco-benefício.",
    "specialPopulations": "Individualizar em idosos, comorbidades, gestação e disfunção orgânica.",
    "patientEducation": "Orientar adesão, sinais de alarme e não interromper abruptamente quando aplicável.",
    "clinicalPearls": "Formulações e combinações não são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Usar conforme diretriz oficial da indicação e jurisdição.",
    "safetyFlags": "Nefrite intersticial/insuficiência renal, miocardite/pericardite, pancreatite, hepatotoxicidade e reação de intolerância aguda.",
    "alerts": "Nefrite intersticial/insuficiência renal, miocardite/pericardite, pancreatite, hepatotoxicidade e reação de intolerância aguda.; monitorização obrigatória",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=mesalamine",
      "Fonte primária/oficial - https://gastro.org/clinical-guidance/management-of-mild-to-moderate-ulcerative-colitis/"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=mesalamine"
  },
  "es": {
    "name": "Mesalazina",
    "class": "Aminossalicilato anti-inflamatório intestinal",
    "pharmacologicClass": "Aminossalicilato anti-inflamatório intestinal",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimidos/cápsulas/grânulos orais y formulações retais em diversas forças.",
    "presentations": "Comprimidos/cápsulas/grânulos orais y formulações retais em diversas forças.",
    "mechanism": "Mecanismo específico da classe conforme fonte primária y formulação.",
    "pharmacodynamics": "Mecanismo específico da classe conforme fonte primária y formulação.",
    "pharmacokinetics": "Revisar absorção, metabolismo, meia-vida y eliminação na fonte primária.",
    "indications": "Indução y manutenção de remissão na colite ulcerativa; algumas formulações têm indicação para proctite.",
    "dose": "A dosis é estritamente dependente da formulação y local da doença: comprimidos/cápsulas de liberação modificada, grânulos, supositórios y enemas no são intercambiáveis mg por mg. Automação global bloqueada; usar rótulo do produto específico.",
    "pediatricDose": "Requer tabela completa por idade/peso; automação pediátrica bloqueada.",
    "renalDose": "Avaliar función renal y tabela específica; no inferir ajuste.",
    "hepaticDose": "Avaliar hepatopatia; no inferir ajuste.",
    "commonAdverseEffects": "Cefaleia, dor abdominal, náusea, diarreia y flatulência.",
    "dangerousAdverseEffects": "Nefrite intersticial/insuficiência renal, miocardite/pericardite, pancreatite, hepatotoxicidade y reação de intolerância aguda.",
    "adverseEffects": "Cefaleia, dor abdominal, náusea, diarreia y flatulência.; Nefrite intersticial/insuficiência renal, miocardite/pericardite, pancreatite, hepatotoxicidade y reação de intolerância aguda.",
    "contraindications": "Hipersensibilidade y contraindicações específicas da bula.",
    "interactions": "Revisar interações farmacodinâmicas y metabólicas aplicáveis.",
    "monitoring": "Monitorar eficácia, tolerabilidade, función orgânica y eventos graves.",
    "administration": "Usar somente via/formulação rotulada; respeitar técnica y alimentos.",
    "preparation": "Confirmar concentração, diluição y estabilidade no produto; no inferir.",
    "infusionProtocol": "Quando IV, usar bomba/monitorização y protocolo da bula; caso contrário no aplicável.",
    "pregnancy": "Avaliar riesgo fetal, indicação y bula.",
    "lactation": "Avaliar excreção y riesgo-benefício.",
    "specialPopulations": "Individualizar em idosos, comorbidades, gestação y disfunción orgânica.",
    "patientEducation": "Orientar adesão, sinais de alarme y no interromper abruptamente quando aplicável.",
    "clinicalPearls": "Formulações y combinações no são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Usar conforme diretriz oficial da indicação y jurisdição.",
    "safetyFlags": "Nefrite intersticial/insuficiência renal, miocardite/pericardite, pancreatite, hepatotoxicidade y reação de intolerância aguda.",
    "alerts": "Nefrite intersticial/insuficiência renal, miocardite/pericardite, pancreatite, hepatotoxicidade y reação de intolerância aguda.; monitorização obrigatória",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=mesalamine",
      "Fonte primária/oficial - https://gastro.org/clinical-guidance/management-of-mild-to-moderate-ulcerative-colitis/"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=mesalamine"
  }
};})();
/* GOLD33_SELECTIVE:mesalazina:END */
/* GOLD33_SELECTIVE:sufentanil:START */
;(function(){var db=window.GASTRO_IMUNO_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="sufentanil";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:sufentanil:"+matches.length);drug=matches[0];}else{drug=db&&db["sufentanil"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:sufentanil");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "073",
    "requiredFieldCount": 33,
    "approvedSha256": "83cceddf3e8d81ef2cedf16f072feaba3de2b34348dee7c5839dcc4d80297ea8",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "LIBERADA_COM_RESTRICOES_GRANULARES",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Sufentanil",
    "class": "Agonista opioide potente",
    "pharmacologicClass": "Agonista opioide potente",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Solução injetável e sistemas sublinguais específicos; apresentações não são intercambiáveis.",
    "presentations": "Solução injetável e sistemas sublinguais específicos; apresentações não são intercambiáveis.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância e exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo e eliminação na fonte primária.",
    "indications": "Analgesia e anestesia em ambiente monitorado; formulações específicas podem ter indicações próprias.",
    "dose": "Dose IV, epidural ou por sistema específico depende do procedimento, idade, comorbidades e opioides concomitantes. Uso somente por equipe treinada com suporte ventilatório.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "Não inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "Não inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Náusea, vômito, prurido, sedação e bradicardia.",
    "dangerousAdverseEffects": "Depressão respiratória fatal, rigidez torácica, hipotensão, dependência e síndrome serotoninérgica.",
    "adverseEffects": "Náusea, vômito, prurido, sedação e bradicardia.; Depressão respiratória fatal, rigidez torácica, hipotensão, dependência e síndrome serotoninérgica.",
    "contraindications": "Hipersensibilidade e contraindicações específicas da apresentação.",
    "interactions": "Revisar interações farmacodinâmicas e metabólicas na fonte específica.",
    "monitoring": "Monitorar eficácia, tolerabilidade e riscos graves aplicáveis.",
    "administration": "Usar somente via e formulação documentadas; respeitar técnica específica.",
    "preparation": "Confirmar concentração, reconstituição, diluição e estabilidade; não inferir.",
    "infusionProtocol": "Aplicável somente às apresentações parenterais documentadas; manter bloqueado sem protocolo completo.",
    "pregnancy": "Avaliar risco fetal e bula aplicável; não usar linguagem categórica sem fonte.",
    "lactation": "Avaliar excreção e risco-benefício conforme fonte.",
    "specialPopulations": "Individualizar por idade, comorbidades e função orgânica.",
    "patientEducation": "Orientar adesão, administração correta e sinais de alarme.",
    "clinicalPearls": "Formulações e vias não são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Aplicar diretriz oficial da indicação e jurisdição.",
    "safetyFlags": "Depressão respiratória fatal, rigidez torácica, hipotensão, dependência e síndrome serotoninérgica.",
    "alerts": "Depressão respiratória fatal, rigidez torácica, hipotensão, dependência e síndrome serotoninérgica.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=sufentanil",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=sufentanil"
  },
  "es": {
    "name": "Sufentanil",
    "class": "Agonista opioide potente",
    "pharmacologicClass": "Agonista opioide potente",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Solução injetável y sistemas sublinguais específicos; apresentações no são intercambiáveis.",
    "presentations": "Solução injetável y sistemas sublinguais específicos; apresentações no são intercambiáveis.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância y exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo y eliminação na fonte primária.",
    "indications": "Analgesia y anestesia em ambiente monitorado; formulações específicas podem ter indicações próprias.",
    "dose": "Dose IV, epidural ou por sistema específico depende do procedimento, idade, comorbidades y opioides concomitantes. Uso somente por equipe treinada con suporte ventilatório.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "No inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "No inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Náusea, vômito, prurido, sedação y bradicardia.",
    "dangerousAdverseEffects": "Depressão respiratória fatal, rigidez torácica, hipotensão, dependência y síndrome serotoninérgica.",
    "adverseEffects": "Náusea, vômito, prurido, sedação y bradicardia.; Depressão respiratória fatal, rigidez torácica, hipotensão, dependência y síndrome serotoninérgica.",
    "contraindications": "Hipersensibilidade y contraindicações específicas da apresentação.",
    "interactions": "Revisar interações farmacodinâmicas y metabólicas na fonte específica.",
    "monitoring": "Monitorar eficácia, tolerabilidade y riscos graves aplicáveis.",
    "administration": "Usar somente via y formulação documentadas; respeitar técnica específica.",
    "preparation": "Confirmar concentração, reconstituição, diluição y estabilidade; no inferir.",
    "infusionProtocol": "Aplicável somente às apresentações parenterais documentadas; manter bloqueado sem protocolo completo.",
    "pregnancy": "Avaliar risco fetal y bula aplicável; no usar linguagem categórica sem fonte.",
    "lactation": "Avaliar excreção y risco-benefício conforme fonte.",
    "specialPopulations": "Individualizar por idade, comorbidades y función orgânica.",
    "patientEducation": "Orientar adesão, administração correta y sinais de alarme.",
    "clinicalPearls": "Formulações y vias no são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Aplicar diretriz oficial da indicação y jurisdição.",
    "safetyFlags": "Depressão respiratória fatal, rigidez torácica, hipotensão, dependência y síndrome serotoninérgica.",
    "alerts": "Depressão respiratória fatal, rigidez torácica, hipotensão, dependência y síndrome serotoninérgica.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=sufentanil",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=sufentanil"
  }
};})();
/* GOLD33_SELECTIVE:sufentanil:END */
