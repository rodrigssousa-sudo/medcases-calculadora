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
