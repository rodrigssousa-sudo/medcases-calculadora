/* ============================================================
   MedCases Pro — Módulo: PNEUMOLOGIA — Broncodilatadores
   Expõe: window.PNEUMOLOGIA_DRUGS_DB
   Schema: Object-DB com dose adulto + pediátrico + safetyFlags
   BUILD 386 — Lote 1: Salbutamol · Fenoterol · Terbutalina · Salmeterol · Formoterol
   Categoria: pneumologia
============================================================ */
(function () {
  if (typeof window.PNEUMOLOGIA_DRUGS_DB !== 'object' || Array.isArray(window.PNEUMOLOGIA_DRUGS_DB)) {
    window.PNEUMOLOGIA_DRUGS_DB = {};
  }
  Object.assign(window.PNEUMOLOGIA_DRUGS_DB, {

    /* ── SALBUTAMOL (ALBUTEROL) ─────────────────────────────────────────── */
    "salbutamol": {
      "name": {
        "pt": "Salbutamol",
        "es": "Salbutamol"
      },
      "category": "pneumologia",
      "class": {
        "pt": "Agonista β2 de curta ação (SABA)",
        "es": "Agonista β2 de acción corta (SABA)"
      },
      "indications": {
        "pt": [
          "Broncoespasmo agudo",
          "Prevenção de broncoespasmo induzido por exercício"
        ],
        "es": [
          "Broncoespasmo agudo",
          "Prevención de broncoespasmo inducido por ejercicio"
        ]
      },
      "mechanism": {
        "pt": "Agonismo β2 relaxa músculo liso brônquico e produz broncodilatação rápida.",
        "es": "El agonismo β2 relaja músculo liso bronquial y produce broncodilatación rápida."
      },
      "dose": {
        "adult": {
          "pt": "MDI: 2 jatos (90 mcg/jato) a cada 4–6 h conforme necessidade; exercício: 2 jatos 15–30 min antes. Nebulização: 2,5 mg por dose conforme produto/protocolo.",
          "es": "MDI: 2 inhalaciones (90 mcg/inhalación) cada 4–6 h según necesidad; ejercicio: 2 inhalaciones 15–30 min antes. Nebulización: 2,5 mg por dosis según producto/protocolo."
        },
        "pediatric": {
          "pt": "≥4 anos MDI: 2 jatos a cada 4–6 h conforme necessidade; nebulização pediátrica depende de idade/peso e formulação.",
          "es": "≥4 años MDI: 2 inhalaciones cada 4–6 h según necesidad; nebulización pediátrica depende de edad/peso y formulación."
        }
      },
      "administration": {
        "pt": [
          "Somente por inalação",
          "Necessidade crescente de SABA sugere pior controle e exige reavaliação",
          "Na asma, não usar SABA isolado como estratégia de manutenção; GINA 2026 prefere tratamento contendo ICS"
        ],
        "es": [
          "Solo por inhalación",
          "Necesidad creciente de SABA sugiere peor control y requiere reevaluación",
          "En asma, no usar SABA aislado como estrategia de mantenimiento; GINA 2026 prefiere tratamiento que contenga ICS"
        ]
      },
      "renalAdjustment": {
        "required": false,
        "message": {
          "pt": "Sem ajuste renal rotineiro.",
          "es": "Sin ajuste renal rutinario."
        }
      },
      "hepaticAdjustment": {
        "required": false,
        "message": {
          "pt": "Sem ajuste hepático rotineiro.",
          "es": "Sin ajuste hepático rutinario."
        }
      },
      "commonAdverseEffects": {
        "pt": [
          "Tremor",
          "Taquicardia",
          "Nervosismo"
        ],
        "es": [
          "Temblor",
          "Taquicardia",
          "Nerviosismo"
        ]
      },
      "dangerousAdverseEffects": {
        "pt": [
          "Hipocalemia",
          "Taquiarritmia",
          "Broncoespasmo paradoxal"
        ],
        "es": [
          "Hipopotasemia",
          "Taquiarritmia",
          "Broncoespasmo paradójico"
        ]
      },
      "contraindications": {
        "absolute": {
          "pt": [
            "Hipersensibilidade"
          ],
          "es": [
            "Hipersensibilidad"
          ]
        },
        "relative": {
          "pt": [
            "Taquiarritmia, cardiopatia, hipocalemia"
          ],
          "es": [
            "Taquiarritmia, cardiopatía, hipopotasemia"
          ]
        }
      },
      "safetyFlags": {
        "warning": {
          "pt": "Uso excessivo de SABA é marcador de risco. Na asma, garantir terapia contendo corticosteroide inalatório.",
          "es": "El uso excesivo de SABA es marcador de riesgo. En asma, asegurar terapia que contenga corticosteroide inhalado."
        }
      }
    },

    /* ── FENOTEROL ──────────────────────────────────────────────────────── */
    "fenoterol": {
      name: { pt: 'Fenoterol', es: 'Fenoterol' },
      category: 'pneumologia',
      class: { pt: 'Agonista Beta-2 Adrenérgico de Curta Duração (SABA)', es: 'Agonista Beta-2 Adrenérgico de Corta Duración (SABA)' },
      indications: {
        pt: ['Crise de Asma Aguda e DPOC exarcebada (amplamente usado na América Latina como medicação de nebulização no PS)'],
        es: ['Crisis de Asma Aguda y EPOC exacerbada (ampliamente usado en América Latina como medicación de nebulización en Urgencias)']
      },
      commercialNames: { br: ['Berotec'], ar: ['Berotec'] },
      presentation: { pt: ['Solução gotas para inalação 5 mg/mL (1 gota = 0,25 mg)', 'Spray Inalatório 100 mcg/dose'], es: ['Solución gotas para inhalación 5 mg/mL (1 gota = 0,25 mg)', 'Spray Inhalatorio 100 mcg/dosis'] },
      mechanism: {
        pt: 'Mecanismo essencialmente idêntico ao do salbutamol. No entanto, o Fenoterol demonstrou ter um perfil de estimulação dos receptores Beta-1 (cardíacos) ligeiramente maior do que o salbutamol em altas doses, o que explica por que os pacientes frequentemente relatam muito mais taquicardia e palpitação ("coração saindo pela boca") com o Fenoterol.',
        es: 'Mecanismo esencialmente idéntico al del salbutamol. Sin embargo, el Fenoterol demostró tener un perfil de estimulación de los receptores Beta-1 (cardíacos) ligeramente mayor que el salbutamol en altas dosis, lo que explica por qué los pacientes frecuentemente relatan mucha más taquicardia y palpitación con el Fenoterol.'
      },
      dose: {
        adult: {
          pt: 'Nebulização (Resgate): 10 a 20 gotas (2,5 a 5 mg) diluídas em 3 a 4 mL de Soro Fisiológico 0,9%. Repetir a cada 20-30 min na crise grave.',
          es: 'Nebulización (Rescate): 10 a 20 gotas (2,5 a 5 mg) diluidas en 3 a 4 mL de Suero Fisiológico 0,9%. Repetir cada 20-30 min en la crisis grave.'
        },
        pediatric: {
          pt: '1 gota para cada 3 kg de peso (Máx 10 gotas) por inalação.',
          es: '1 gota por cada 3 kg de peso (Máx 10 gotas) por inhalación.'
        }
      },
      administration: { pt: ['As gotas SÃO EXCLUSIVAS PARA NEBULIZAÇÃO RESPIRATÓRIA. NUNCA DEVE SER ENGOLIDO (risco de superdosagem e efeitos cardíacos maciços).'], es: ['Las gotas SON EXCLUSIVAS PARA NEBULIZACIÓN RESPIRATORIA. NUNCA DEBE SER TRAGADO (riesgo de sobredosis y efectos cardíacos masivos).'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Taquicardia severa induzida (efeito colateral quase universal)', 'Tremores musculares intensos'], es: ['Taquicardia severa inducida (efecto colateral casi universal)', 'Temblores musculares intensos'] },
      dangerousAdverseEffects: { pt: ['Isquemia miocárdica em idosos devido à taquicardia reflexa', 'Hipocalemia profunda'], es: ['Isquemia miocárdica en ancianos debido a la taquicardia refleja', 'Hipopotasemia profunda'] },
      contraindications: {
        absolute: { pt: ['Cardiomiopatia obstrutiva hipertrófica', 'Taquiarritmias'], es: ['Miocardiopatía obstructiva hipertrófica', 'Taquiarritmias'] },
        relative: { pt: ['Hipertireoidismo severo (risco de crise tireotóxica induzida por catecolaminas)'], es: ['Hipertiroidismo severo (riesgo de crisis tirotóxica inducida por catecolaminas)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'Erro de Via Letal: É extremamente comum mães inexperientes pingarem as gotas de Berotec direto na boca da criança achando que é xarope. O excesso ingerido causa taquicardia supraventricular e risco de morte. SEMPRE escreva "PINGAR NO COPINHO DO NEBULIZADOR" na receita.', es: 'Error de Vía Letal: Es extremadamente común que madres inexpertas goteen el Berotec directo en la boca del niño creyendo que es jarabe. El exceso ingerido causa taquicardia supraventricular y riesgo de muerte. SIEMPRE escriba "GOTEAR EN EL VASITO DEL NEBULIZADOR" en la receta.' }
      }
    },

    /* ── TERBUTALINA ────────────────────────────────────────────────────── */
    "terbutalina": {
      name: { pt: 'Terbutalina', es: 'Terbutalina' },
      category: 'pneumologia',
      class: { pt: 'Agonista Beta-2 Adrenérgico de Curta Duração (SABA) / Tocolítico', es: 'Agonista Beta-2 Adrenérgico de Corta Duración (SABA) / Tocolítico' },
      indications: {
        pt: ['Asma Aguda Severa refratária aos inaladores (Status Asthmaticus, via injetável SC/IV)', 'Trabalho de Parto Prematuro (Efeito Tocolítico - inibição das contrações uterinas) off-label e de curta duração'],
        es: ['Asma Aguda Severa refractaria a los inhaladores (Status Asthmaticus, vía inyectable SC/IV)', 'Trabajo de Parto Prematuro (Efecto Tocolítico - inhibición de las contracciones uterinas) off-label y de corta duración']
      },
      commercialNames: { br: ['Bricanyl'], ar: ['Bricanyl'] },
      presentation: { pt: ['Ampolas SC/IV 0,5 mg/mL'], es: ['Ampollas SC/IV 0,5 mg/mL'] },
      mechanism: {
        pt: 'Estimula receptores beta-2. Nas vias aéreas, relaxa o broncoespasmo grave por via sistêmica quando o ar não consegue entrar no pulmão do paciente para levar os inaladores. No útero, o miométrio humano é rico em receptores beta-2; a terbutalina os estimula, induzindo relaxamento uterino maciço e parando as contrações do parto prematuro.',
        es: 'Estimula receptores beta-2. En las vías respiratorias, relaja el broncoespasmo grave por vía sistémica cuando el aire no logra entrar al pulmón del paciente para llevar los inhaladores. En el útero, el miometrio humano es rico en receptores beta-2; la terbutalina los estimula, induciendo relajación uterina masiva y parando las contracciones del parto prematuro.'
      },
      dose: {
        adult: {
          pt: 'Asma Grave: 0,25 mg Subcutâneo (Pode repetir em 15-30 min). Tocólise (Inibição de parto): Infusão contínua IV de 2,5 a 10 mcg/min (titulando até cessar as contrações).',
          es: 'Asma Grave: 0,25 mg Subcutáneo (Puede repetir en 15-30 min). Tocólisis (Inhibición de parto): Infusión continua IV de 2,5 a 10 mcg/min (titulando hasta cesar las contracciones).'
        },
        pediatric: {
          pt: 'Asma Grave: 0,01 mg/kg Subcutâneo (Máx 0,25 mg/dose).',
          es: 'Asma Grave: 0,01 mg/kg Subcutáneo (Máx 0,25 mg/dosis).'
        }
      },
      administration: { pt: ['Na asma, a via Subcutânea é a mais utilizada na emergência. A injeção intravenosa exige bomba de infusão cuidadosa pelo alto risco cardiovascular.'], es: ['En el asma, la vía Subcutánea es la más utilizada en emergencia. La inyección intravenosa exige bomba de infusión cuidadosa por el alto riesgo cardiovascular.'] },
      renalAdjustment: { required: false, message: { pt: 'Depuração mista, evitar doses altas em DRC grave.', es: 'Depuración mixta, evitar dosis altas en ERC grave.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste agudo.', es: 'Sin necesidad de ajuste agudo.' } },
      commonAdverseEffects: { pt: ['Tremores', 'Taquicardia materna e taquicardia fetal marcantes', 'Nervosismo'], es: ['Temblores', 'Taquicardia materna y taquicardia fetal marcadas', 'Nerviosismo'] },
      dangerousAdverseEffects: { pt: ['Edema Agudo de Pulmão na gestante (Tocolítico em altas doses)', 'Hipocalemia fetal e materna', 'Isquemia miocárdica'], es: ['Edema Agudo de Pulmón en la gestante (Tocolítico en altas dosis)', 'Hipopotasemia fetal y materna', 'Isquemia miocárdica'] },
      contraindications: {
        absolute: { pt: ['Uso para inibição de trabalho de parto prematuro POR MAIS DE 48 HORAS (Alerta Negro da FDA: risco de morte materna por falência cardíaca)'], es: ['Uso para inhibición de trabajo de parto prematuro POR MÁS DE 48 HORAS (Alerta Negro de la FDA: riesgo de muerte materna por falla cardíaca)'] },
        relative: { pt: ['Pacientes com arritmias documentadas'], es: ['Pacientes con arritmias documentadas'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'USO TOCOLÍTICO: O uso de Terbutalina para atrasar o parto NÃO salva bebês em longo prazo. Ela só deve ser usada por no máximo 48 horas, o tempo exato para a Dexametasona/Betametasona amadurecer os pulmões do feto antes do nascimento iminente.', es: 'USO TOCOLÍTICO: El uso de Terbutalina para retrasar el parto NO salva bebés a largo plazo. Solo debe usarse por un máximo de 48 horas, el tiempo exacto para que la Dexametasona/Betametasona madure los pulmones del feto antes del nacimiento inminente.' }
      }
    },

    /* ── SALMETEROL ─────────────────────────────────────────────────────── */
    "salmeterol": {
      "name": {
        "pt": "Salmeterol",
        "es": "Salmeterol"
      },
      "category": "pneumologia",
      "class": {
        "pt": "Agonista β2 de longa ação (LABA)",
        "es": "Agonista β2 de acción prolongada (LABA)"
      },
      "indications": {
        "pt": [
          "Manutenção da DPOC",
          "Asma somente em combinação com ICS"
        ],
        "es": [
          "Mantenimiento de EPOC",
          "Asma solo en combinación con ICS"
        ]
      },
      "mechanism": {
        "pt": "Agonismo β2 prolongado produz broncodilatação por aproximadamente 12 h.",
        "es": "Agonismo β2 prolongado produce broncodilatación por aproximadamente 12 h."
      },
      "dose": {
        "adult": {
          "pt": "50 mcg por inalação a cada 12 h conforme produto. Não usar para broncoespasmo agudo.",
          "es": "50 mcg por inhalación cada 12 h según producto. No usar para broncoespasmo agudo."
        },
        "pediatric": {
          "pt": "Asma pediátrica: somente com ICS e conforme idade/dispositivo autorizados.",
          "es": "Asma pediátrica: solo con ICS y según edad/dispositivo autorizados."
        }
      },
      "administration": {
        "pt": [
          "Não é broncodilatador de resgate",
          "Na asma, nunca usar sem ICS"
        ],
        "es": [
          "No es broncodilatador de rescate",
          "En asma, nunca usar sin ICS"
        ]
      },
      "renalAdjustment": {
        "required": false,
        "message": {
          "pt": "Sem ajuste renal rotineiro.",
          "es": "Sin ajuste renal rutinario."
        }
      },
      "hepaticAdjustment": {
        "required": false,
        "message": {
          "pt": "Sem ajuste hepático rotineiro definido.",
          "es": "Sin ajuste hepático rutinario definido."
        }
      },
      "commonAdverseEffects": {
        "pt": [
          "Cefaleia",
          "Tremor",
          "Palpitações"
        ],
        "es": [
          "Cefalea",
          "Temblor",
          "Palpitaciones"
        ]
      },
      "dangerousAdverseEffects": {
        "pt": [
          "Eventos graves relacionados à asma quando usado sem ICS",
          "Taquiarritmia",
          "Hipocalemia"
        ],
        "es": [
          "Eventos graves relacionados con asma cuando se usa sin ICS",
          "Taquiarritmia",
          "Hipopotasemia"
        ]
      },
      "contraindications": {
        "absolute": {
          "pt": [
            "Monoterapia da asma"
          ],
          "es": [
            "Monoterapia del asma"
          ]
        },
        "relative": {
          "pt": [
            "Cardiopatia, arritmia, hipocalemia"
          ],
          "es": [
            "Cardiopatía, arritmia, hipopotasemia"
          ]
        }
      },
      "safetyFlags": {
        "warning": {
          "pt": "Salmeterol não serve como resgate. Na asma, usar sempre junto a ICS.",
          "es": "Salmeterol no sirve como rescate. En asma, usar siempre junto a ICS."
        }
      }
    },

    /* ── FORMOTEROL ─────────────────────────────────────────────────────── */
    "formoterol": {
      "name": {
        "pt": "Formoterol",
        "es": "Formoterol"
      },
      "category": "pneumologia",
      "class": {
        "pt": "Agonista β2 de longa ação (LABA) de início rápido",
        "es": "Agonista β2 de acción prolongada (LABA) de inicio rápido"
      },
      "indications": {
        "pt": [
          "Manutenção da DPOC",
          "Em asma, somente em combinação com ICS; ICS-formoterol pode ser usado em regimes AIR/MART conforme GINA 2026 e produto"
        ],
        "es": [
          "Mantenimiento de EPOC",
          "En asma, solo en combinación con ICS; ICS-formoterol puede usarse en regímenes AIR/MART según GINA 2026 y producto"
        ]
      },
      "mechanism": {
        "pt": "Agonismo β2 prolongado relaxa músculo liso brônquico; início relativamente rápido.",
        "es": "Agonismo β2 prolongado relaja músculo liso bronquial; inicio relativamente rápido."
      },
      "dose": {
        "adult": {
          "pt": "Solução inalatória para DPOC: 20 mcg por nebulização a cada 12 h. Em asma, dose depende da combinação ICS-formoterol e do regime prescrito.",
          "es": "Solución inhalatoria para EPOC: 20 mcg por nebulización cada 12 h. En asma, la dosis depende de la combinación ICS-formoterol y del régimen prescrito."
        },
        "pediatric": {
          "pt": "Uso em asma pediátrica deve seguir a combinação ICS-formoterol, idade e dispositivo autorizados.",
          "es": "Uso en asma pediátrica debe seguir combinación ICS-formoterol, edad y dispositivo autorizados."
        }
      },
      "administration": {
        "pt": [
          "LABA isolado é contraindicado como tratamento de asma",
          "Não exceder frequência prescrita"
        ],
        "es": [
          "LABA solo está contraindicado como tratamiento de asma",
          "No exceder frecuencia prescrita"
        ]
      },
      "renalAdjustment": {
        "required": false,
        "message": {
          "pt": "Sem ajuste renal rotineiro.",
          "es": "Sin ajuste renal rutinario."
        }
      },
      "hepaticAdjustment": {
        "required": false,
        "message": {
          "pt": "Sem ajuste hepático rotineiro definido.",
          "es": "Sin ajuste hepático rutinario definido."
        }
      },
      "commonAdverseEffects": {
        "pt": [
          "Tremor",
          "Palpitações",
          "Cefaleia"
        ],
        "es": [
          "Temblor",
          "Palpitaciones",
          "Cefalea"
        ]
      },
      "dangerousAdverseEffects": {
        "pt": [
          "Taquiarritmia",
          "Hipocalemia",
          "Broncoespasmo paradoxal"
        ],
        "es": [
          "Taquiarritmia",
          "Hipopotasemia",
          "Broncoespasmo paradójico"
        ]
      },
      "contraindications": {
        "absolute": {
          "pt": [
            "Uso como monoterapia na asma"
          ],
          "es": [
            "Uso como monoterapia en asma"
          ]
        },
        "relative": {
          "pt": [
            "Arritmias, QT longo, hipocalemia"
          ],
          "es": [
            "Arritmias, QT largo, hipopotasemia"
          ]
        }
      },
      "safetyFlags": {
        "warning": {
          "pt": "Na asma, formoterol deve estar associado a ICS. O uso de LABA sem ICS aumenta risco de eventos graves.",
          "es": "En asma, formoterol debe asociarse a ICS. El uso de LABA sin ICS aumenta riesgo de eventos graves."
        }
      }
    },

    /* ── INDACATEROL ────────────────────────────────────────────────────── */
    "indacaterol": {
      name: { pt: 'Indacaterol', es: 'Indacaterol' },
      category: 'pneumologia',
      class: { pt: 'Agonista Beta-2 Adrenérgico de Ultra Longa Duração (Ultra-LABA)', es: 'Agonista Beta-2 Adrenérgico de Ultra Larga Duración (Ultra-LABA)' },
      indications: {
        pt: ['Tratamento de manutenção diária da Doença Pulmonar Obstrutiva Crônica (DPOC) moderada a grave'],
        es: ['Tratamiento de mantenimiento diario de la Enfermedad Pulmonar Obstructiva Crónica (EPOC) moderada a grave']
      },
      commercialNames: { br: ['Onbrez', 'Ultibro (Assoc)'], ar: ['Onbrez'] },
      presentation: { pt: ['Cápsulas para inalação (pó seco) 150 mcg e 300 mcg'], es: ['Cápsulas para inhalación (polvo seco) 150 mcg y 300 mcg'] },
      mechanism: {
        pt: 'Estimulador Beta-2 Adrenérgico de última geração. A sua molécula é desenhada para se acoplar firmemente aos "micro-bolsões" de gordura da membrana celular do brônquio, liberando estímulo contínuo e ininterrupto por exatas 24 horas. Diferente dos LABAs antigos (12h), ele exige apenas uma única tomada diária para manter o pulmão do DPOC dilatado o dia todo.',
        es: 'Estimulador Beta-2 Adrenérgico de última generación. Su molécula está diseñada para acoplarse firmemente a los "micro-bolsillos" de grasa de la membrana celular del bronquio, liberando estímulo continuo e ininterrumpido por exactas 24 horas. A diferencia de los LABAs antiguos (12h), exige una única toma diaria para mantener el pulmón dilatado todo el día.'
      },
      dose: {
        adult: {
          pt: '1 inalação (150 mcg ou 300 mcg) UMA VEZ ao dia, sempre no mesmo horário.',
          es: '1 inhalación (150 mcg o 300 mcg) UNA VEZ al día, siempre en el mismo horario.'
        },
        pediatric: {
          pt: 'Contraindicado (Não estudado e sem indicação em pediatria).',
          es: 'Contraindicado (No estudiado y sin indicación en pediatría).'
        }
      },
      administration: { pt: ['Inalação estrita por dispositivo próprio (Breezhaler). As cápsulas JAMAIS devem ser engolidas.', 'Não serve como medicação de alívio rápido.'], es: ['Inhalación estricta por dispositivo propio (Breezhaler). Las cápsulas JAMÁS deben ser tragadas.', 'No sirve como medicación de alivio rápido.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste clínico.', es: 'Sin necesidad de ajuste clínico.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem ajuste para cirrose leve a moderada.', es: 'Sin ajuste para cirrosis leve a moderada.' } },
      commonAdverseEffects: { pt: ['Tosse reflexa imediata após a inalação (muito comum, dura alguns segundos)', 'Nasofaringite'], es: ['Tos refleja inmediata tras la inhalación (muy común, dura unos segundos)', 'Nasofaringitis'] },
      dangerousAdverseEffects: { pt: ['Broncoespasmo paradoxal severo (raro)', 'Hipocalemia isolada'], es: ['Broncoespasmo paradójico severo (raro)', 'Hipopotasemia aislada'] },
      contraindications: {
        absolute: { pt: ['Tratamento de ASMA em monoterapia (Risco de exacerbação fatal sem corticoide)', 'Tratamento de episódios agudos de asfixia/broncoespasmo'], es: ['Tratamiento de ASMA en monoterapia (Riesgo de exacerbación fatal sin corticoide)', 'Tratamiento de episodios agudos de asfixia/broncoespasmo'] },
        relative: { pt: ['Pacientes com arritmias ventriculares não controladas'], es: ['Pacientes con arritmias ventriculares no controladas'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O Indacaterol NÃO ESTÁ APROVADO PARA ASMA se usado sozinho. Na asma, o problema é a inflamação. Um dilatador de 24h sem corticoide oculta o fechamento progressivo do pulmão e leva o asmático à asfixia irreversível.', es: 'El Indacaterol NO ESTÁ APROBADO PARA ASMA si se usa solo. En el asma, el problema es la inflamación. Un dilatador de 24h sin corticoide oculta el cierre progresivo del pulmón y lleva al asmático a la asfixia.' }
      }
    },

    /* ── OLODATEROL ─────────────────────────────────────────────────────── */
    "olodaterol": {
      name: { pt: 'Olodaterol', es: 'Olodaterol' },
      category: 'pneumologia',
      class: { pt: 'Agonista Beta-2 Adrenérgico de Ultra Longa Duração (Ultra-LABA)', es: 'Agonista Beta-2 Adrenérgico de Ultra Larga Duración (Ultra-LABA)' },
      indications: {
        pt: ['Tratamento de manutenção de longo prazo e 1x ao dia da DPOC'],
        es: ['Tratamiento de mantenimiento a largo plazo y 1 vez al día de la EPOC']
      },
      commercialNames: { br: ['Striverdi', 'Spiolto (Assoc com Tiotrópio)'], ar: ['Striverdi'] },
      presentation: { pt: ['Solução inalante (Dispositivo Respimat) liberando 2,5 mcg por dose'], es: ['Solución inhalante (Dispositivo Respimat) liberando 2,5 mcg por dosis'] },
      mechanism: {
        pt: 'Mecanismo análogo ao do indacaterol, com altíssima seletividade (quase exclusiva) para os receptores Beta-2 pulmonares. Age garantindo uma janela de broncodilatação contínua de 24 horas, otimizando o esvaziamento pulmonar e reduzindo a hiperinsuflação (o aprisionamento de ar que causa o "peito de pombo" no DPOC).',
        es: 'Mecanismo análogo al del indacaterol, con altísima selectividad (casi exclusiva) para los receptores Beta-2 pulmonares. Actúa garantizando una ventana de broncodilatación continua de 24 horas, optimizando el vaciamiento pulmonar y reduciendo la hiperinsuflación (el atrapamiento de aire del EPOC).'
      },
      dose: {
        adult: {
          pt: '2 inalações (jatos de 2,5 mcg, total 5 mcg) consecutivas UMA VEZ ao dia, no mesmo horário.',
          es: '2 inhalaciones (puffs de 2,5 mcg, total 5 mcg) consecutivas UNA VEZ al día, en el mismo horario.'
        },
        pediatric: {
          pt: 'Uso não indicado.',
          es: 'Uso no indicado.'
        }
      },
      administration: { pt: ['Dispositivo Respimat: Libera uma "névoa suave" de longa duração, não exigindo força inspiratória extrema do paciente idoso (vantagem sobre os pós secos).'], es: ['Dispositivo Respimat: Libera una "niebla suave" de larga duración, no exigiendo fuerza inspiratoria extrema del paciente anciano (ventaja sobre los polvos secos).'] },
      renalAdjustment: { required: false, message: { pt: 'Não requer ajuste de dose.', es: 'No requiere ajuste de dosis.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Não requer ajuste de dose em falência leve a moderada.', es: 'No requiere ajuste de dosis en falla leve a moderada.' } },
      commonAdverseEffects: { pt: ['Nasofaringite (resfriado comum)', 'Tontura e rash cutâneo leve'], es: ['Nasofaringitis (resfriado común)', 'Mareo y rash cutáneo leve'] },
      dangerousAdverseEffects: { pt: ['Risco cardiovascular isquêmico (se dose máxima ultrapassada acidentalmente)'], es: ['Riesgo cardiovascular isquémico (si dosis máxima superada accidentalmente)'] },
      contraindications: {
        absolute: { pt: ['Tratamento de exacerbação aguda da asma/DPOC (não serve para resgate)'], es: ['Tratamiento de exacerbación aguda del asma/EPOC (no sirve para rescate)'] },
        relative: { pt: ['Tireotoxicose ou hipertensão maligna'], es: ['Tirotoxicosis o hipertensión maligna'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'Cuidado na troca de dispositivos: Pacientes idosos frequentemente não conseguem girar, destravar ou aspirar inaladores modernos. Certifique-se de que o paciente entende o manuseio da "névoa" do Respimat, sob pena de não receber nenhuma medicação.', es: 'Cuidado en el cambio de dispositivos: Los pacientes ancianos frecuentemente no logran girar, destrabar o aspirar inhaladores modernos. Asegúrese de que el paciente entienda el manejo del Respimat, so pena de no recibir ninguna medicación.' }
      }
    },

    /* ── VILANTEROL ─────────────────────────────────────────────────────── */
    "vilanterol": {
      name: { pt: 'Vilanterol', es: 'Vilanterol' },
      category: 'pneumologia',
      class: { pt: 'Agonista Beta-2 Adrenérgico de Ultra Longa Duração (Ultra-LABA)', es: 'Agonista Beta-2 Adrenérgico de Ultra Larga Duración (Ultra-LABA)' },
      indications: {
        pt: ['Manutenção de asma e DPOC (EXCLUSIVAMENTE disponível em associação com Fluticasona ou Umeclidínio)'],
        es: ['Mantenimiento de asma y EPOC (EXCLUSIVAMENTE disponible en asociación con Fluticasona o Umeclidinio)']
      },
      commercialNames: { br: ['Relvar (Assoc)', 'Trelegy (Assoc Tripla)'], ar: ['Relvar'] },
      presentation: { pt: ['Pó inalatório (Dispositivo Ellipta), geralmente liberando 22 mcg de Vilanterol por dose'], es: ['Polvo inhalatorio (Dispositivo Ellipta), generalmente liberando 22 mcg de Vilanterol por dosis'] },
      mechanism: {
        pt: 'Ultra-LABA altamente potente (24h de ação). O grande diferencial do Vilanterol é que a indústria não o vende isolado; ele é sempre formulado em canetas prontas associado a corticoides inalatórios (fluticasona) para asma, ou anticolinérgicos para DPOC. Isso "blinda" o paciente contra o erro médico/risco fatal de usar LABAs sozinhos.',
        es: 'Ultra-LABA altamente potente (24h de acción). El gran diferencial del Vilanterol es que la industria no lo vende aislado; siempre está formulado en plumas listas asociado a corticoides inhalatorios (fluticasona) para asma. Esto "blinda" al paciente contra el error de usar LABAs solos.'
      },
      dose: {
        adult: {
          pt: '1 inalação UMA VEZ ao dia (O dispositivo Ellipta abre a tampa, estala, o paciente aspira e fecha).',
          es: '1 inhalación UNA VEZ al día (El dispositivo Ellipta abre la tapa, hace clic, el paciente aspira y cierra).'
        },
        pediatric: {
          pt: 'Associado a Fluticasona para asma pode ser usado em adolescentes > 12 anos.',
          es: 'Asociado a Fluticasona para asma puede ser usado en adolescentes > 12 años.'
        }
      },
      administration: { pt: ['Uso inalatório estrito diário. Enxaguar a boca abundantemente e gargarejar após o uso (devido à fluticasona presente no aparelho).'], es: ['Uso inhalatorio estricto diario. Enjuagar la boca abundantemente y hacer gárgaras tras el uso (debido a la fluticasona presente en el aparato).'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste clínico.', es: 'Sin necesidad de ajuste clínico.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Em insuficiência hepática moderada a grave, as formulações associadas de Vilanterol devem ser acompanhadas de perto, limitando a dose do componente corticoide.', es: 'En insuficiencia hepática moderada a grave, las formulaciones asociadas deben ser seguidas de cerca, limitando la dosis del corticoide.' } },
      commonAdverseEffects: { pt: ['Candidíase orofaríngea (pelo corticoide oculto na associação)', 'Disfonia (rouquidão)', 'Cefaleia'], es: ['Candidiasis orofaríngea (por el corticoide oculto en la asociación)', 'Disfonía (ronquera)', 'Cefalea'] },
      dangerousAdverseEffects: { pt: ['Pneumonia grave adquirida na comunidade (Maior risco com o uso contínuo de formulações ICS+LABA no paciente com DPOC avançada)'], es: ['Neumonía grave adquirida en la comunidad (Mayor riesgo con el uso continuo de formulaciones ICS+LABA en el paciente con EPOC avanzada)'] },
      contraindications: {
        absolute: { pt: ['Status Asthmaticus e asfixia aguda agudizada'], es: ['Status Asthmaticus y asfixia aguda agudizada'] },
        relative: { pt: ['Tuberculose pulmonar ativa ou não tratada'], es: ['Tuberculosis pulmonar activa o no tratada'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'Comodidade vs Eficácia: O dispositivo Ellipta de uso único diário salvou a adesão dos pacientes com DPOC. Se o seu paciente asmático abandona as bombinhas porque "tem que usar várias vezes ao dia", trocar para Vilanterol+Fluticasona (1x/dia) reverte o quadro maravilhosamente.', es: 'Comodidad vs Eficacia: El dispositivo Ellipta de uso único diario salvó la adhesión de los pacientes con EPOC. Si su paciente asmático abandona los inhaladores porque "tiene que usar varias veces", cambiar a Vilanterol+Fluticasona (1x/día) revierte el cuadro maravillosamente.' }
      }
    },

    /* ── BROMETO DE IPRATRÓPIO (ATROVENT) ───────────────────────────────── */
    "ipratropio": {
      "name": {
        "pt": "Ipratrópio",
        "es": "Ipratropio"
      },
      "category": "pneumologia",
      "class": {
        "pt": "Antagonista muscarínico de curta ação (SAMA)",
        "es": "Antagonista muscarínico de acción corta (SAMA)"
      },
      "indications": {
        "pt": [
          "Broncodilatação de manutenção na DPOC",
          "Adjuvante em exacerbação aguda de asma junto a SABA"
        ],
        "es": [
          "Broncodilatación de mantenimiento en EPOC",
          "Adyuvante en exacerbación aguda de asma junto con SABA"
        ]
      },
      "mechanism": {
        "pt": "Bloqueio muscarínico M3 reduz broncoconstrição vagal.",
        "es": "El bloqueo muscarínico M3 reduce broncoconstricción vagal."
      },
      "dose": {
        "adult": {
          "pt": "MDI: 2 jatos (17 mcg/jato) 4x/dia, podendo usar doses adicionais conforme rotulagem; nebulização em exacerbação conforme protocolo.",
          "es": "MDI: 2 inhalaciones (17 mcg/inhalación) 4 veces/día, pudiendo usar dosis adicionales según rotulado; nebulización en exacerbación según protocolo."
        },
        "pediatric": {
          "pt": "Em asma aguda pediátrica, uso é adjuvante e protocolar; não extrapolar esquema crônico adulto.",
          "es": "En asma aguda pediátrica, el uso es adyuvante y protocolar; no extrapolar esquema crónico adulto."
        }
      },
      "administration": {
        "pt": [
          "Evitar contato do aerossol/nebulização com os olhos",
          "Não é substituto de terapia controladora na asma"
        ],
        "es": [
          "Evitar contacto del aerosol/nebulización con los ojos",
          "No sustituye terapia controladora en asma"
        ]
      },
      "renalAdjustment": {
        "required": false,
        "message": {
          "pt": "Sem ajuste renal rotineiro.",
          "es": "Sin ajuste renal rutinario."
        }
      },
      "hepaticAdjustment": {
        "required": false,
        "message": {
          "pt": "Sem ajuste hepático rotineiro.",
          "es": "Sin ajuste hepático rutinario."
        }
      },
      "commonAdverseEffects": {
        "pt": [
          "Boca seca",
          "Tosse",
          "Irritação faríngea"
        ],
        "es": [
          "Boca seca",
          "Tos",
          "Irritación faríngea"
        ]
      },
      "dangerousAdverseEffects": {
        "pt": [
          "Broncoespasmo paradoxal",
          "Glaucoma agudo por exposição ocular",
          "Retenção urinária"
        ],
        "es": [
          "Broncoespasmo paradójico",
          "Glaucoma agudo por exposición ocular",
          "Retención urinaria"
        ]
      },
      "contraindications": {
        "absolute": {
          "pt": [
            "Hipersensibilidade ao ipratrópio/atropínicos"
          ],
          "es": [
            "Hipersensibilidad a ipratropio/atropínicos"
          ]
        },
        "relative": {
          "pt": [
            "Glaucoma de ângulo fechado, retenção urinária/HBP"
          ],
          "es": [
            "Glaucoma de ángulo cerrado, retención urinaria/HBP"
          ]
        }
      },
      "safetyFlags": {
        "warning": {
          "pt": "Na exacerbação asmática, ipratrópio é adjuvante ao SABA; não substitui ICS nem broncodilatador de resgate de ação rápida.",
          "es": "En exacerbación asmática, ipratropio es adyuvante del SABA; no sustituye ICS ni broncodilatador de rescate de acción rápida."
        }
      }
    },

    /* ── BROMETO DE TIOTRÓPIO (SPIRIVA) ─────────────────────────────────── */
    "tiotropio": {
      "name": {
        "pt": "Tiotrópio",
        "es": "Tiotropio"
      },
      "category": "pneumologia",
      "class": {
        "pt": "Antagonista muscarínico de longa ação (LAMA)",
        "es": "Antagonista muscarínico de acción prolongada (LAMA)"
      },
      "indications": {
        "pt": [
          "Manutenção da DPOC",
          "Add-on em asma selecionada conforme idade/formulação"
        ],
        "es": [
          "Mantenimiento de EPOC",
          "Add-on en asma seleccionada según edad/formulación"
        ]
      },
      "mechanism": {
        "pt": "Antagonismo muscarínico prolongado, principalmente M3, reduz broncoconstrição vagal.",
        "es": "Antagonismo muscarínico prolongado, principalmente M3, reduce broncoconstricción vagal."
      },
      "dose": {
        "adult": {
          "pt": "HandiHaler: conteúdo de 1 cápsula de 18 mcg inalado 1x/dia; Respimat: 2 inalações 1x/dia conforme indicação/formulação.",
          "es": "HandiHaler: contenido de 1 cápsula de 18 mcg inhalado 1 vez/día; Respimat: 2 inhalaciones 1 vez/día según indicación/formulación."
        },
        "pediatric": {
          "pt": "Asma: uso depende da formulação e idade autorizada; seguir rotulagem local, não usar cápsula por via oral.",
          "es": "Asma: uso depende de formulación y edad autorizada; seguir rotulado local, no ingerir cápsula por vía oral."
        }
      },
      "administration": {
        "pt": [
          "Não usar para alívio de broncoespasmo agudo",
          "Cápsulas HandiHaler são somente para inalação"
        ],
        "es": [
          "No usar para alivio de broncoespasmo agudo",
          "Cápsulas HandiHaler son solo para inhalación"
        ]
      },
      "renalAdjustment": {
        "required": true,
        "message": {
          "pt": "ClCr <60 mL/min: monitorar mais de perto efeitos anticolinérgicos.",
          "es": "ClCr <60 mL/min: monitorizar más estrechamente efectos anticolinérgicos."
        }
      },
      "hepaticAdjustment": {
        "required": false,
        "message": {
          "pt": "Sem ajuste hepático rotineiro.",
          "es": "Sin ajuste hepático rutinario."
        }
      },
      "commonAdverseEffects": {
        "pt": [
          "Boca seca",
          "Faringite"
        ],
        "es": [
          "Boca seca",
          "Faringitis"
        ]
      },
      "dangerousAdverseEffects": {
        "pt": [
          "Broncoespasmo paradoxal",
          "Glaucoma agudo",
          "Retenção urinária"
        ],
        "es": [
          "Broncoespasmo paradójico",
          "Glaucoma agudo",
          "Retención urinaria"
        ]
      },
      "contraindications": {
        "absolute": {
          "pt": [
            "Hipersensibilidade"
          ],
          "es": [
            "Hipersensibilidad"
          ]
        },
        "relative": {
          "pt": [
            "Glaucoma de ângulo fechado, HBP/retenção urinária, DRC"
          ],
          "es": [
            "Glaucoma de ángulo cerrado, HBP/retención urinaria, ERC"
          ]
        }
      },
      "safetyFlags": {
        "warning": {
          "pt": "LAMA é manutenção, não resgate. Em asma deve ser add-on a tratamento contendo ICS.",
          "es": "LAMA es mantenimiento, no rescate. En asma debe ser add-on a tratamiento con ICS."
        }
      }
    },

    /* ── ACLIDÍNIO ──────────────────────────────────────────────────────── */
    "aclidinio": {
      name: { pt: 'Aclidínio (Brometo de Aclidínio)', es: 'Aclidinio (Bromuro de Aclidinio)' },
      category: 'pneumologia',
      class: { pt: 'Antagonista Muscarínico de Longa Duração (LAMA)', es: 'Antagonista Muscarínico de Larga Duración (LAMA)' },
      indications: {
        pt: ['Tratamento de manutenção sintomática da Doença Pulmonar Obstrutiva Crônica (DPOC)'],
        es: ['Tratamiento de mantenimiento sintomático de la Enfermedad Pulmonar Obstructiva Crónica (EPOC)']
      },
      commercialNames: { br: ['Bretaris Genuair'], ar: ['Bretaris'] },
      presentation: { pt: ['Pó inalatório (Dispositivo Genuair) 400 mcg/dose'], es: ['Polvo inhalatorio (Dispositivo Genuair) 400 mcg/dosis'] },
      mechanism: {
        pt: 'Liga-se de forma competitiva e reversível aos receptores muscarínicos M3 no músculo liso brônquico. Seu grande diferencial: Diferente do Tiotrópio (que dura 24h), o Aclidínio dura cerca de 12h e é rapidamente hidrolisado no plasma humano. Isso significa que, se a droga for engolida ou cair no sangue, ela é destruída em minutos, gerando risco QUASE ZERO de efeitos colaterais sistêmicos (como boca seca intensa e retenção urinária).',
        es: 'Se une de forma competitiva y reversible a los receptores muscarínicos M3 en el músculo liso bronquial. Su gran diferencial: A diferencia del Tiotropio, el Aclidinio dura unas 12h y es rápidamente hidrolizado en el plasma humano. Si la droga es tragada o cae en la sangre, se destruye en minutos, generando riesgo CASI CERO de efectos colaterales sistémicos.'
      },
      dose: {
        adult: {
          pt: '1 inalação de 400 mcg a cada 12 horas (Diferente da maioria dos LAMAs modernos que são 1x ao dia, este exige 2 tomadas).',
          es: '1 inhalación de 400 mcg cada 12 horas (A diferencia de la mayoría de los LAMAs modernos que son 1x al día, este exige 2 tomas).'
        },
        pediatric: {
          pt: 'Não indicado para menores de 18 anos.',
          es: 'No indicado para menores de 18 años.'
        }
      },
      administration: { pt: ['Inalação via dispositivo Genuair (possui um "clique" sonoro e um visor de cor que confirma se o paciente inalou corretamente a dose).'], es: ['Inhalación vía dispositivo Genuair (posee un "clic" sonoro y un visor de color que confirma si el paciente inhaló correctamente la dosis).'] },
      renalAdjustment: { required: false, message: { pt: 'Não requer ajuste em insuficiência renal.', es: 'No requiere ajuste en insuficiencia renal.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Não requer ajuste (metabolismo puramente hidrolítico plasmático).', es: 'No requiere ajuste (metabolismo puramente hidrolítico plasmático).' } },
      commonAdverseEffects: { pt: ['Cefaleia', 'Tosse irritativa pós-inalação', 'Boca seca (muito mais leve que o tiotrópio)'], es: ['Cefalea', 'Tos irritativa posinhalación', 'Boca seca (mucho más leve que el tiotropio)'] },
      dangerousAdverseEffects: { pt: ['Broncoespasmo paradoxal (raro)'], es: ['Broncoespasmo paradójico (raro)'] },
      contraindications: {
        absolute: { pt: ['Tratamento de Asma', 'Episódios agudos de broncoespasmo'], es: ['Tratamiento de Asma', 'Episodios agudos de broncoespasmo'] },
        relative: { pt: ['Glaucoma de ângulo estreito instável'], es: ['Glaucoma de ángulo estrecho inestable'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'É a droga de escolha (LAMA) para o paciente idoso com DPOC que sofre de Hiperplasia Prostática Benigna (HPB) grave, pois o risco de causar retenção urinária obstrutiva é virtualmente ausente se comparado ao Tiotrópio.', es: 'Es la droga de elección (LAMA) para el paciente anciano con EPOC que sufre de Hiperplasia Prostática Benigna (HPB) grave, pues el riesgo de causar retención urinaria obstructiva es virtualmente ausente en comparación al Tiotropio.' }
      }
    },

    /* ── GLICOPIRRÔNIO ──────────────────────────────────────────────────── */
    "glicopirronio": {
      name: { pt: 'Glicopirrônio (Brometo de)', es: 'Glicopirronio (Bromuro de)' },
      category: 'pneumologia',
      class: { pt: 'Antagonista Muscarínico de Longa Duração (LAMA)', es: 'Antagonista Muscarínico de Larga Duración (LAMA)' },
      indications: {
        pt: ['Manutenção em DPOC', 'Pré-medicação anestésica (via injetável) para secar secreções', 'Sialorreia (excesso de baba) severa em doenças neurológicas (off-label)'],
        es: ['Mantenimiento en EPOC', 'Premedicación anestésica (vía inyectable) para secar secreciones', 'Sialorrea (exceso de baba) severa en enfermedades neurológicas (off-label)']
      },
      commercialNames: { br: ['Seebri', 'Ultibro (Assoc)'], ar: ['Seebri'] },
      presentation: { pt: ['Cápsulas inalatórias 50 mcg', 'Ampolas injetáveis 0,2 mg/mL (uso anestésico)'], es: ['Cápsulas inhalatorias 50 mcg', 'Ampollas inyectables 0,2 mg/mL (uso anestésico)'] },
      mechanism: {
        pt: 'Bloqueador muscarínico competitivo. No pulmão (inalatório), ele possui um início de ação extremamente rápido (5 minutos) em comparação ao tiotrópio, mas mantém o efeito de duração de 24 horas. Na via sistêmica (injetável), é usado pelo anestesista para bloquear os efeitos vagais (bradicardia) e "secar" completamente a boca e os brônquios do paciente antes de entubar.',
        es: 'Bloqueador muscarínico competitivo. En el pulmón (inhalatorio), posee un inicio de acción extremadamente rápido (5 minutos) en comparación al tiotropio, pero mantiene el efecto de duración de 24 horas. En la vía sistémica (inyectable), es usado por el anestesista para bloquear los efectos vagales y "secar" completamente la boca y los bronquios antes de entubar.'
      },
      dose: {
        adult: {
          pt: 'DPOC: 1 inalação de 50 mcg UMA VEZ ao dia. Controle de Secreção (SC/IV): 0,1 a 0,2 mg repetidos conforme necessário.',
          es: 'EPOC: 1 inhalación de 50 mcg UNA VEZ al día. Control de Secreción (SC/IV): 0,1 a 0,2 mg repetidos según necesidad.'
        },
        pediatric: {
          pt: 'Uso injetável/oral para controle de salivação em paralisia cerebral: 0,01 a 0,02 mg/kg.',
          es: 'Uso inyectable/oral para control de salivación en parálisis cerebral: 0,01 a 0,02 mg/kg.'
        }
      },
      administration: { pt: ['Inalação diária no mesmo horário via dispositivo (Breezhaler).'], es: ['Inhalación diaria en el mismo horario vía dispositivo (Breezhaler).'] },
      renalAdjustment: { required: true, message: { pt: 'Atenção: Diferente do Aclidínio, o Glicopirrônio sofre depuração renal agressiva. Pacientes com DRC grave (ClCr < 30) acumulam a droga e sofrem fortes efeitos anticolinérgicos colaterais.', es: 'Atención: A diferencia del Aclidinio, el Glicopirronio sufre depuración renal agresiva. Pacientes con ERC grave (ClCr < 30) acumulan la droga y sufren fuertes efectos anticolinérgicos.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Boca seca', 'Infecções do trato urinário', 'Tosse'], es: ['Boca seca', 'Infecciones del tracto urinario', 'Tos'] },
      dangerousAdverseEffects: { pt: ['Retenção Urinária Obstrutiva aguda', 'Agravamento de Glaucoma de Ângulo Estreito', 'Taquicardia severa (via IV)'], es: ['Retención Urinaria Obstructiva aguda', 'Agravamiento de Glaucoma de Ángulo Estrecho', 'Taquicardia severa (vía IV)'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade conhecida'], es: ['Hipersensibilidad conocida'] },
        relative: { pt: ['Cardiopatia isquêmica instável (via venosa)'], es: ['Cardiopatía isquémica inestable (vía venosa)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'DUPLA FUNÇÃO CLÍNICA: O Glicopirrônio é uma excelente arma na medicina paliativa. Aplicado debaixo da língua ou via SC no paciente terminal (Sororoca da Morte), ele seca a abundante secreção pulmonar em minutos, aliviando o ruído aterrorizante do fim de vida sem rebaixar o cérebro (pois não cruza a Barreira Hematoencefálica).', es: 'DOBLE FUNCIÓN CLÍNICA: El Glicopirronio es una excelente arma en medicina paliativa. Aplicado debajo de la lengua o vía SC en el paciente terminal (Estertor de Muerte), seca la abundante secreción pulmonar en minutos, aliviando el ruido sin deprimir el cerebro.' }
      }
    },

    /* ── UMECLIDÍNIO ────────────────────────────────────────────────────── */
    "umeclidinio": {
      name: { pt: 'Umeclidínio', es: 'Umeclidinio' },
      category: 'pneumologia',
      class: { pt: 'Antagonista Muscarínico de Longa Duração (LAMA)', es: 'Antagonista Muscarínico de Larga Duración (LAMA)' },
      indications: {
        pt: ['Tratamento de manutenção a longo prazo da DPOC', 'Asma de difícil controle (em terapia tripla)'],
        es: ['Tratamiento de mantenimiento a largo plazo de la EPOC', 'Asma de difícil control (en terapia triple)']
      },
      commercialNames: { br: ['Incruse', 'Anoro (Assoc)', 'Trelegy (Tripla)'], ar: ['Incruse'] },
      presentation: { pt: ['Pó inalatório (Dispositivo Ellipta) 62,5 mcg/dose'], es: ['Polvo inhalatorio (Dispositivo Ellipta) 62,5 mcg/dosis'] },
      mechanism: {
        pt: 'LAMA de última geração. Bloqueia os receptores muscarínicos M3 com alta afinidade e altíssima meia-vida de dissociação, mantendo as vias aéreas hiperinsufladas abertas por 24 horas. Geralmente comercializado em canetas de terapia dupla (com Vilanterol) ou terapia tripla (Fluticasona + Umeclidínio + Vilanterol), facilitando a adesão máxima ao unificar tudo num clique só.',
        es: 'LAMA de última generación. Bloquea los receptores muscarínicos M3 con alta afinidad y altísima vida media de disociación, manteniendo las vías aéreas hiperinsufladas abiertas por 24 horas. Generalmente comercializado en plumas de terapia doble o triple, facilitando la adhesión máxima al unificar todo en un solo clic.'
      },
      dose: {
        adult: {
          pt: '1 inalação de 62,5 mcg UMA VEZ ao dia.',
          es: '1 inhalación de 62,5 mcg UNA VEZ al día.'
        },
        pediatric: {
          pt: 'Não recomendado (restrito a adultos).',
          es: 'No recomendado (restringido a adultos).'
        }
      },
      administration: { pt: ['Dispositivo Ellipta: Não exige coordenação entre apertar e inspirar (como os sprays antigos). O paciente apenas puxa o ar fortemente.'], es: ['Dispositivo Ellipta: No exige coordinación entre apretar e inspirar. El paciente solo aspira fuertemente el aire.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem ajuste (fármaco de eliminação predominantemente fecal/biliar).', es: 'Sin ajuste (fármaco de eliminación predominantemente fecal/biliar).' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste clínico.', es: 'Sin necesidad de ajuste clínico.' } },
      commonAdverseEffects: { pt: ['Nasofaringite', 'Infecção do trato respiratório superior', 'Taquicardia leve'], es: ['Nasofaringitis', 'Infección del tracto respiratorio superior', 'Taquicardia leve'] },
      dangerousAdverseEffects: { pt: ['Efeitos obstrutivos urinários graves (em superdosagem)', 'Fibrilação Atrial (relatos isolados em doentes graves)'], es: ['Efectos obstructivos urinarios graves (en sobredosis)', 'Fibrilación Auricular (relatos aislados en enfermos graves)'] },
      contraindications: {
        absolute: { pt: ['Crise aguda (não serve para broncoespasmo imediato)'], es: ['Crisis aguda (no sirve para broncoespasmo inmediato)'] },
        relative: { pt: ['Glaucoma', 'Alergia grave à proteína do leite (pois o pó inalatório contém lactose como excipiente veicular)'], es: ['Glaucoma', 'Alergia grave a la proteína de la leche (pues el polvo inhalatorio contiene lactosa como excipiente vehicular)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'ALERTA DE ALERGIA: Se o paciente tiver anafilaxia ou alergia severa à PROTEÍNA DO LEITE DE VACA (APLV), os inaladores de pó seco (Ellipta, Diskus) podem deflagrar uma anafilaxia letal no paciente, pois a droga é micronizada sobre partículas de lactose láctea. Nesses pacientes, deve-se usar spray aerossol (HFA).', es: 'ALERTA DE ALERGIA: Si el paciente tiene anafilaxia o alergia severa a la PROTEÍNA DE LA LECHE DE VACA (APLV), los inhaladores de polvo seco pueden desencadenar una anafilaxia letal, pues la droga es micronizada sobre partículas de lactosa láctea. En estos pacientes, debe usarse spray aerosol (HFA).' }
      }
    },

    /* ── BECLOMETASONA ──────────────────────────────────────────────────── */
    "beclometasona": {
      "name": {
        "pt": "Beclometasona",
        "es": "Beclometasona"
      },
      "category": "pneumologia",
      "class": {
        "pt": "Corticosteroide inalatório (ICS)",
        "es": "Corticosteroide inhalado (ICS)"
      },
      "indications": {
        "pt": [
          "Manutenção da asma",
          "Em combinação beclometasona-formoterol, regimes MART conforme formulação/GINA"
        ],
        "es": [
          "Mantenimiento del asma",
          "En combinación beclometasona-formoterol, regímenes MART según formulación/GINA"
        ]
      },
      "mechanism": {
        "pt": "Glicocorticoide inalatório reduz inflamação e hiperresponsividade brônquica.",
        "es": "Glucocorticoide inhalado reduce inflamación e hiperreactividad bronquial."
      },
      "dose": {
        "adult": {
          "pt": "Dose depende da formulação/dispositivo; titular à menor dose eficaz de controle.",
          "es": "La dosis depende de formulación/dispositivo; titular a la menor dosis eficaz de control."
        },
        "pediatric": {
          "pt": "Uso pediátrico depende da formulação, idade e dispositivo; monitorar crescimento.",
          "es": "Uso pediátrico depende de formulación, edad y dispositivo; monitorizar crecimiento."
        }
      },
      "administration": {
        "pt": [
          "Enxaguar a boca após uso",
          "Não usar como resgate isolado"
        ],
        "es": [
          "Enjuagar la boca después del uso",
          "No usar como rescate aislado"
        ]
      },
      "renalAdjustment": {
        "required": false,
        "message": {
          "pt": "Sem ajuste renal rotineiro.",
          "es": "Sin ajuste renal rutinario."
        }
      },
      "hepaticAdjustment": {
        "required": false,
        "message": {
          "pt": "Sem ajuste hepático fixo; monitorar exposição sistêmica em doses altas.",
          "es": "Sin ajuste hepático fijo; monitorizar exposición sistémica a dosis altas."
        }
      },
      "commonAdverseEffects": {
        "pt": [
          "Candidíase oral",
          "Disfonia"
        ],
        "es": [
          "Candidiasis oral",
          "Disfonía"
        ]
      },
      "dangerousAdverseEffects": {
        "pt": [
          "Supressão adrenal",
          "Redução do crescimento",
          "Glaucoma/catarata em exposição prolongada"
        ],
        "es": [
          "Supresión adrenal",
          "Reducción del crecimiento",
          "Glaucoma/catarata con exposición prolongada"
        ]
      },
      "contraindications": {
        "absolute": {
          "pt": [
            "Broncoespasmo agudo como única terapia"
          ],
          "es": [
            "Broncoespasmo agudo como única terapia"
          ]
        },
        "relative": {
          "pt": [
            "Infecções não tratadas"
          ],
          "es": [
            "Infecciones no tratadas"
          ]
        }
      },
      "safetyFlags": {
        "warning": {
          "pt": "Controlador anti-inflamatório; não substitui broncodilatador de resgate em crise aguda.",
          "es": "Controlador antiinflamatorio; no sustituye broncodilatador de rescate en crisis aguda."
        }
      }
    },

    /* ── BUDESONIDA ─────────────────────────────────────────────────────── */
    "budesonida": {
      "name": {
        "pt": "Budesonida",
        "es": "Budesonida"
      },
      "category": "pneumologia",
      "class": {
        "pt": "Corticosteroide inalatório (ICS)",
        "es": "Corticosteroide inhalado (ICS)"
      },
      "indications": {
        "pt": [
          "Manutenção/profilaxia da asma",
          "Com formoterol, pode integrar regimes AIR/MART conforme GINA 2026 e produto"
        ],
        "es": [
          "Mantenimiento/profilaxis del asma",
          "Con formoterol, puede integrar regímenes AIR/MART según GINA 2026 y producto"
        ]
      },
      "mechanism": {
        "pt": "Atividade glicocorticoide local reduz inflamação das vias aéreas e hiperresponsividade.",
        "es": "Actividad glucocorticoide local reduce inflamación de vías aéreas e hiperreactividad."
      },
      "dose": {
        "adult": {
          "pt": "Dose inalatória depende do dispositivo e gravidade; usar a menor dose eficaz. Não é medicação de resgate isoladamente.",
          "es": "La dosis inhalada depende del dispositivo y gravedad; usar la menor dosis eficaz. No es medicación de rescate por sí sola."
        },
        "pediatric": {
          "pt": "Suspensão nebulizada é rotulada para manutenção da asma em crianças de 12 meses a 8 anos; dose depende do tratamento prévio e controle.",
          "es": "La suspensión nebulizada está indicada para mantenimiento del asma en niños de 12 meses a 8 años; la dosis depende del tratamiento previo y control."
        }
      },
      "administration": {
        "pt": [
          "Enxaguar a boca e cuspir após uso",
          "Nebulização: usar nebulizador compatível conforme produto"
        ],
        "es": [
          "Enjuagar la boca y escupir después del uso",
          "Nebulización: usar nebulizador compatible según producto"
        ]
      },
      "renalAdjustment": {
        "required": false,
        "message": {
          "pt": "Sem ajuste renal rotineiro.",
          "es": "Sin ajuste renal rutinario."
        }
      },
      "hepaticAdjustment": {
        "required": true,
        "message": {
          "pt": "Hepatopatia grave pode aumentar exposição sistêmica; monitorar efeitos corticosteroides.",
          "es": "La hepatopatía grave puede aumentar exposición sistémica; monitorizar efectos corticosteroides."
        }
      },
      "commonAdverseEffects": {
        "pt": [
          "Candidíase oral",
          "Disfonia",
          "Tosse"
        ],
        "es": [
          "Candidiasis oral",
          "Disfonía",
          "Tos"
        ]
      },
      "dangerousAdverseEffects": {
        "pt": [
          "Supressão adrenal em altas doses",
          "Redução de crescimento pediátrico",
          "Broncoespasmo paradoxal"
        ],
        "es": [
          "Supresión adrenal a dosis altas",
          "Reducción del crecimiento pediátrico",
          "Broncoespasmo paradójico"
        ]
      },
      "contraindications": {
        "absolute": {
          "pt": [
            "Tratamento primário de status asmático/broncoespasmo agudo"
          ],
          "es": [
            "Tratamiento primario de status asmático/broncoespasmo agudo"
          ]
        },
        "relative": {
          "pt": [
            "Infecções não tratadas, uso de inibidores potentes CYP3A4"
          ],
          "es": [
            "Infecciones no tratadas, uso de inhibidores potentes CYP3A4"
          ]
        }
      },
      "safetyFlags": {
        "warning": {
          "pt": "ICS é terapia controladora fundamental na asma. Enxaguar a boca após inalação para reduzir candidíase.",
          "es": "ICS es terapia controladora fundamental en asma. Enjuagar la boca después de inhalar para reducir candidiasis."
        }
      }
    },

    /* ── FLUTICASONA ────────────────────────────────────────────────────── */
    "fluticasona": {
      "name": {
        "pt": "Fluticasona",
        "es": "Fluticasona"
      },
      "category": "pneumologia",
      "class": {
        "pt": "Corticosteroide inalatório (ICS)",
        "es": "Corticosteroide inhalado (ICS)"
      },
      "indications": {
        "pt": [
          "Manutenção/profilaxia da asma"
        ],
        "es": [
          "Mantenimiento/profilaxis del asma"
        ]
      },
      "mechanism": {
        "pt": "Glicocorticoide inalatório de alta afinidade reduz mediadores inflamatórios das vias aéreas.",
        "es": "Glucocorticoide inhalado de alta afinidad reduce mediadores inflamatorios de las vías aéreas."
      },
      "dose": {
        "adult": {
          "pt": "Dose depende do dispositivo e tratamento prévio; usar a menor dose eficaz.",
          "es": "La dosis depende del dispositivo y tratamiento previo; usar la menor dosis eficaz."
        },
        "pediatric": {
          "pt": "Propionato HFA é rotulado para manutenção da asma a partir de 4 anos em formulações específicas.",
          "es": "Propionato HFA está indicado para mantenimiento del asma desde 4 años en formulaciones específicas."
        }
      },
      "administration": {
        "pt": [
          "Enxaguar a boca e cuspir após uso",
          "Não usar como resgate"
        ],
        "es": [
          "Enjuagar la boca y escupir después del uso",
          "No usar como rescate"
        ]
      },
      "renalAdjustment": {
        "required": false,
        "message": {
          "pt": "Sem ajuste renal rotineiro.",
          "es": "Sin ajuste renal rutinario."
        }
      },
      "hepaticAdjustment": {
        "required": true,
        "message": {
          "pt": "Hepatopatia pode aumentar exposição; monitorar efeitos sistêmicos.",
          "es": "La hepatopatía puede aumentar exposición; monitorizar efectos sistémicos."
        }
      },
      "commonAdverseEffects": {
        "pt": [
          "Candidíase oral",
          "Disfonia",
          "Faringite"
        ],
        "es": [
          "Candidiasis oral",
          "Disfonía",
          "Faringitis"
        ]
      },
      "dangerousAdverseEffects": {
        "pt": [
          "Supressão adrenal",
          "Redução de crescimento",
          "Interação importante com inibidores fortes CYP3A4"
        ],
        "es": [
          "Supresión adrenal",
          "Reducción del crecimiento",
          "Interacción importante con inhibidores potentes CYP3A4"
        ]
      },
      "contraindications": {
        "absolute": {
          "pt": [
            "Tratamento primário de status asmático"
          ],
          "es": [
            "Tratamiento primario de status asmático"
          ]
        },
        "relative": {
          "pt": [
            "Uso de ritonavir/cobicistat ou outros inibidores fortes CYP3A4"
          ],
          "es": [
            "Uso de ritonavir/cobicistat u otros inhibidores potentes CYP3A4"
          ]
        }
      },
      "safetyFlags": {
        "warning": {
          "pt": "Inibidores potentes de CYP3A4 podem aumentar muito a exposição sistêmica à fluticasona e causar supressão adrenal.",
          "es": "Inhibidores potentes de CYP3A4 pueden aumentar mucho la exposición sistémica a fluticasona y causar supresión adrenal."
        }
      }
    },

    /* ── MOMETASONA ─────────────────────────────────────────────────────── */
    "mometasona": {
      name: { pt: 'Mometasona (Furoato de)', es: 'Mometasona (Furoato de)' },
      category: 'pneumologia',
      class: { pt: 'Corticosteroide Inalatório / Tópico Nasal', es: 'Corticosteroide Inhalatorio / Tópico Nasal' },
      indications: {
        pt: ['Rinite Alérgica Perene e Sazonal', 'Pólipos Nasais', 'Asma persistente (profilaxia inalatória)'],
        es: ['Rinitis Alérgica Perenne y Estacional', 'Pólipos Nasales', 'Asma persistente (profilaxis inhalatoria)']
      },
      commercialNames: { br: ['Nasonex', 'Oximax (Assoc)'], ar: ['Nasonex'] },
      presentation: { pt: ['Spray Nasal Aquoso 50 mcg/dose', 'Pó Inalatório Oral 200 mcg/dose'], es: ['Spray Nasal Acuoso 50 mcg/dosis', 'Polvo Inhalatorio Oral 200 mcg/dosis'] },
      mechanism: {
        pt: 'Corticoide incrivelmente potente (um dos mais fortes do mercado tópico) com a vantagem brutal de ter uma biodisponibilidade sistêmica INDETECTÁVEL (< 0,1%). Ou seja, mesmo se o paciente usar na pele, no nariz ou no pulmão, praticamente NADA entra na corrente sanguínea. É a droga de escolha para tratamentos prolongados em crianças sem afetar a altura.',
        es: 'Corticoide increíblemente potente con la ventaja brutal de tener una biodisponibilidad sistémica INDETECTABLE (< 0,1%). O sea, incluso si el paciente lo usa en la piel, nariz o pulmón, prácticamente NADA entra en el torrente sanguíneo. Es la droga de elección para tratamientos prolongados en niños sin afectar la altura.'
      },
      dose: {
        adult: {
          pt: 'Rinite (Nasal): 2 jatos em cada narina 1x ao dia. Asma (Pulmonar): 200 a 400 mcg 1x ao dia (frequentemente à noite).',
          es: 'Rinitis (Nasal): 2 puffs en cada fosa nasal 1 vez al día. Asma (Pulmonar): 200 a 400 mcg 1 vez al día (frecuentemente a la noche).'
        },
        pediatric: {
          pt: 'Nasal (> 2 anos): 1 jato em cada narina 1x ao dia.',
          es: 'Nasal (> 2 años): 1 puff en cada fosa nasal 1 vez al día.'
        }
      },
      administration: { pt: ['No uso nasal, o jato deve ser direcionado para a LATERAL do nariz (parede externa) e não para o septo (meio), para evitar sangramentos e perfuração do septo.'], es: ['En el uso nasal, el chorro debe dirigirse hacia el LATERAL de la nariz (pared externa) y no hacia el tabique, para evitar sangrados y perforación del tabique.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem absorção sistêmica, sem ajuste.', es: 'Sin absorción sistémica, sin ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Não atinge o fígado em níveis clínicos.', es: 'No alcanza el hígado en niveles clínicos.' } },
      commonAdverseEffects: { pt: ['Epistaxe (Sangramento nasal frequente no uso de spray mal aplicado)', 'Dor de cabeça e ardência nasal'], es: ['Epistaxis (Sangrado nasal frecuente en el uso de spray mal aplicado)', 'Dolor de cabeza y ardor nasal'] },
      dangerousAdverseEffects: { pt: ['Perfuração do septo nasal (uso crônico mal direcionado)', 'Ulceração mucosa'], es: ['Perforación del tabique nasal (uso crónico mal dirigido)', 'Ulceración mucosa'] },
      contraindications: {
        absolute: { pt: ['Trauma ou cirurgia nasal recente (até a cicatrização, pois os corticoides impedem a cicatrização da ferida)'], es: ['Trauma o cirugía nasal reciente (hasta la cicatrización, pues los corticoides impiden la cicatrización de la herida)'] },
        relative: { pt: ['Infecções ativas da mucosa nasal (Herpes simplex, fungos)'], es: ['Infecciones activas de la mucosa nasal (Herpes simplex, hongos)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'A "Rinite do Corticoide": Alerte os pais de que o spray nasal de Mometasona NÃO desentope o nariz na hora (como o Neosoro). É uma droga de efeito progressivo que pode demorar até 1 semana para surtir o efeito anti-inflamatório máximo.', es: 'Alerta a los padres que el spray nasal de Mometasona NO destapa la nariz en el momento. Es una droga de efecto progresivo que puede tardar hasta 1 semana en surtir el efecto máximo.' }
      }
    },

    /* ── CICLESONIDA ────────────────────────────────────────────────────── */
    "ciclesonida": {
      name: { pt: 'Ciclesonida', es: 'Ciclesonida' },
      category: 'pneumologia',
      class: { pt: 'Corticosteroide Inalatório (Pró-fármaco de Ativação Local)', es: 'Corticosteroide Inhalatorio (Profármaco de Activación Local)' },
      indications: {
        pt: ['Tratamento de manutenção da Asma persistente'],
        es: ['Tratamiento de mantenimiento del Asma persistente']
      },
      commercialNames: { br: ['Alvesco'], ar: ['Alvesco'] },
      presentation: { pt: ['Spray Inalatório HFA 80 e 160 mcg/dose'], es: ['Spray Inhalatorio HFA 80 y 160 mcg/dosis'] },
      mechanism: {
        pt: 'Uma obra-prima da farmacologia: É administrada inativa. Quando bate no fundo da garganta, continua inativa (risco QUASE ZERO de candidíase/sapinho oral). Ela SÓ É ATIVADA quando entra no pulmão e é cortada pelas "esterases", enzimas presentes no tecido pulmonar inflamado. Isso direciona 100% da força do corticoide para a via aérea doente e anula efeitos colaterais na orofaringe e no sangue.',
        es: 'Una obra maestra de la farmacología: Se administra inactiva. Cuando golpea el fondo de la garganta, sigue inactiva (riesgo CASI CERO de candidiasis oral). SOLO SE ACTIVA cuando entra al pulmón y es cortada por las esterasas, enzimas presentes en el tejido pulmonar inflamado. Esto dirige el 100% de la fuerza al área enferma.'
      },
      dose: {
        adult: {
          pt: '80 a 160 mcg inalado UMA VEZ ao dia (geralmente à noite) ou duas vezes ao dia em casos severos.',
          es: '80 a 160 mcg inhalado UNA VEZ al día (generalmente a la noche) o dos veces al día en casos severos.'
        },
        pediatric: {
          pt: 'Crianças de 4 a 11 anos: 80 mcg UMA VEZ ao dia.',
          es: 'Niños de 4 a 11 años: 80 mcg UNA VEZ al día.'
        }
      },
      administration: { pt: ['Administração via inalador pressurizado. Menor necessidade rigorosa de gargarejos pós-uso quando comparada a outros corticoides (embora a higiene oral continue sendo boa prática).'], es: ['Administración vía inhalador presurizado. Menor necesidad rigurosa de gárgaras posuso comparada a otros corticoides (aunque la higiene oral sigue siendo buena práctica).'] },
      renalAdjustment: { required: false, message: { pt: 'Sem ajuste.', es: 'Sin ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem ajuste.', es: 'Sin ajuste.' } },
      commonAdverseEffects: { pt: ['Tosse leve após uso', 'Disfonia (raríssima com ciclesonida, mas possível)'], es: ['Tos leve tras uso', 'Disfonía (rarísima con ciclesonida, pero posible)'] },
      dangerousAdverseEffects: { pt: ['Broncoespasmo paradoxal imediatamente após inalação'], es: ['Broncoespasmo paradójico inmediatamente tras inhalación'] },
      contraindications: {
        absolute: { pt: ['Uso no resgate do broncoespasmo agudo', 'Hipersensibilidade grave'], es: ['Uso en el rescate del broncoespasmo agudo', 'Hipersensibilidad grave'] },
        relative: { pt: ['Tuberculose ou infecção pulmonar sistêmica grave sem terapia específica'], es: ['Tuberculosis o infección pulmonar sistémica grave sin terapia específica'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O Inalador Mais Limpo: Excelente para cantores, professores e pacientes com rouquidão crônica ou aftas de repetição induzidas por outros corticoides (budesonida/fluticasona), pois preserva completamente as cordas vocais.', es: 'El Inhalador Más Limpio: Excelente para cantantes, profesores y pacientes con ronquera crónica o aftas de repetición inducidas por otros corticoides, pues preserva completamente las cuerdas vocales.' }
      }
    },

    /* ── MONTELUCASTE ───────────────────────────────────────────────────── */
    "montelucaste": {
      name: { pt: 'Montelucaste (de Sódio)', es: 'Montelukast (de Sodio)' },
      category: 'pneumologia',
      class: { pt: 'Antagonista dos Receptores de Leucotrienos (LTRA)', es: 'Antagonista de los Receptores de Leucotrienos (LTRA)' },
      indications: {
        pt: ['Prevenção e controle da Asma em longo prazo (Alternativa ou coadjuvante aos corticoides)', 'Prevenção de asma induzida pelo exercício', 'Rinite Alérgica (Perene e Sazonal)'],
        es: ['Prevención y control del Asma a largo plazo (Alternativa o coadyuvante a los corticoides)', 'Prevención de asma inducida por ejercicio', 'Rinitis Alérgica (Perenne y Estacional)']
      },
      commercialNames: { br: ['Singulair', 'Piemonte'], ar: ['Singulair'] },
      presentation: { pt: ['Comprimidos revestidos 10 mg', 'Comprimidos mastigáveis 4 mg, 5 mg', 'Granulado oral 4 mg'], es: ['Comprimidos recubiertos 10 mg', 'Comprimidos masticables 4 mg, 5 mg', 'Granulado oral 4 mg'] },
      mechanism: {
        pt: 'Diferente dos anti-histamínicos, o Montelucaste bloqueia o receptor CysLT1 no pulmão. Os leucotrienos são moléculas inflamatórias ferozes secretadas por mastócitos e eosinófilos que causam inchaço, produção de catarro espesso e fechamento do brônquio. O Montelucaste fecha a "porta" para essas moléculas. Efeito exclusivamente preventivo e não broncodilatador direto.',
        es: 'A diferencia de los antihistamínicos, el Montelukast bloquea el receptor CysLT1 en el pulmón. Los leucotrienos son moléculas inflamatorias feroces que causan hinchazón y producción de catarro. El Montelukast cierra la "puerta" a estas moléculas. Efecto exclusivamente preventivo y no broncodilatador directo.'
      },
      dose: {
        adult: {
          pt: '10 mg VO UMA VEZ ao dia (Sempre recomendado tomar à noite, perto de dormir).',
          es: '10 mg VO UNA VEZ al día (Siempre recomendado tomar a la noche, cerca de dormir).'
        },
        pediatric: {
          pt: '2 a 5 anos: 4 mg mastigável/granulado 1x à noite. 6 a 14 anos: 5 mg mastigável 1x à noite.',
          es: '2 a 5 años: 4 mg masticable/granulado 1x a la noche. 6 a 14 años: 5 mg masticable 1x a la noche.'
        }
      },
      administration: { pt: ['Deve ser tomado à noite para ter sua concentração máxima de bloqueio nas madrugadas (quando os leucotrienos mais atacam e a asma piora). O granulado pediátrico pode ser misturado na papinha fria (não misturar em líquidos quentes).'], es: ['Debe ser tomado a la noche para tener su concentración máxima en las madrugadas. El granulado pediátrico puede ser mezclado en papilla fría (no mezclar en líquidos calientes).'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste renal (eliminação biliar/fecal).', es: 'Sin necesidad de ajuste renal (eliminación biliar/fecal).' } },
      hepaticAdjustment: { required: false, message: { pt: 'Seguro em insuficiência hepática leve a moderada.', es: 'Seguro en insuficiencia hepática leve a moderada.' } },
      commonAdverseEffects: { pt: ['Cefaleia', 'Dor abdominal e Náuseas leves', 'Agitação e hiperatividade em crianças pequenas'], es: ['Cefalea', 'Dolor abdominal y Náuseas leves', 'Agitación e hiperactividad en niños pequeños'] },
      dangerousAdverseEffects: { pt: ['EVENTOS NEUROPSIQUIÁTRICOS (Depressão, Ideação suicida, pesadelos terríveis e terror noturno)', 'Síndrome de Churg-Strauss (Vasculite eosinofílica sistêmica, rara)'], es: ['EVENTOS NEUROPSIQUIÁTRICOS (Depresión, Ideación suicida, pesadillas terribles y terror nocturno)', 'Síndrome de Churg-Strauss (Vasculitis eosinofílica sistémica, rara)'] },
      contraindications: {
        absolute: { pt: ['Reversão de broncoespasmo agudo (Não é droga de resgate!)'], es: ['Reversión de broncoespasmo agudo (¡No es droga de rescate!)'] },
        relative: { pt: ['Pacientes com transtornos psiquiátricos basais não controlados (Depressão severa, Transtorno Bipolar)'], es: ['Pacientes con trastornos psiquiátricos basales no controlados (Depresión severa, Trastorno Bipolar)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'BLACK BOX WARNING DA FDA: O FDA publicou um alerta máximo exigindo que médicos avisem pacientes e pais sobre graves alterações de humor, alucinações, agressividade e comportamento suicida que podem surgir dias ou meses após iniciar o Montelucaste. Se a criança tiver pesadelos súbitos e terror noturno constante, suspenda a droga.', es: 'BLACK BOX WARNING DE LA FDA: La FDA publicó una alerta máxima exigiendo que los médicos avisen sobre graves alteraciones de humor, alucinaciones y comportamiento suicida que pueden surgir tras iniciar el Montelukast. Si el niño tiene pesadillas súbitas, suspenda la droga.' }
      }
    },

    /* ── ZAFIRLUCASTE ───────────────────────────────────────────────────── */
    "zafirlucaste": {
      name: { pt: 'Zafirlucaste', es: 'Zafirlukast' },
      category: 'pneumologia',
      class: { pt: 'Antagonista dos Receptores de Leucotrienos (LTRA)', es: 'Antagonista de los Receptores de Leucotrienos (LTRA)' },
      indications: {
        pt: ['Prevenção e Tratamento crônico da Asma (Pouco utilizado hoje em dia, quase integralmente substituído pelo Montelucaste)'],
        es: ['Prevención y Tratamiento crónico del Asma (Poco utilizado hoy en día, casi integralmente sustituido por Montelukast)']
      },
      commercialNames: { br: ['Accolate'], ar: ['Accolate'] },
      presentation: { pt: ['Comprimidos 20 mg'], es: ['Comprimidos 20 mg'] },
      mechanism: {
        pt: 'Possui o mesmo mecanismo do montelucaste (bloqueio do receptor CysLT1 no pulmão para inibir a asfixia imunológica causada pelos leucotrienos). No entanto, o Zafirlucaste possui graves desvantagens farmacocinéticas: precisa ser tomado 2 vezes ao dia, tem sua absorção esmagada pela comida e é um potente inibidor do citocromo p450 hepático.',
        es: 'Posee el mismo mecanismo del montelukast (bloqueo del receptor CysLT1). Sin embargo, el Zafirlukast posee graves desventajas farmacocinéticas: necesita ser tomado 2 veces al día, tiene su absorción aplastada por la comida y es un potente inhibidor del citocromo p450 hepático.'
      },
      dose: {
        adult: {
          pt: '20 mg VO a cada 12 horas (Dose máxima de 40 mg/dia).',
          es: '20 mg VO cada 12 horas (Dosis máxima de 40 mg/día).'
        },
        pediatric: {
          pt: '5 a 11 anos: 10 mg a cada 12 horas.',
          es: '5 a 11 años: 10 mg cada 12 horas.'
        }
      },
      administration: { pt: ['MANDATÓRIO: Tomar de ESTÔMAGO VAZIO (pelo menos 1 hora antes ou 2 horas depois das refeições). A comida corta sua absorção pela metade.'], es: ['OBLIGATORIO: Tomar con ESTÓMAGO VACÍO (al menos 1 hora antes o 2 horas después de las comidas). La comida corta su absorción a la mitad.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste renal.', es: 'Sin necesidad de ajuste renal.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Contraindicado em pacientes com insuficiência hepática ou cirrose.', es: 'Contraindicado en pacientes con insuficiencia hepática o cirrosis.' } },
      commonAdverseEffects: { pt: ['Cefaleia marcante', 'Distúrbios gastrointestinais', 'Infecções respiratórias virais de repetição'], es: ['Cefalea marcada', 'Disturbios gastrointestinales', 'Infecciones respiratorias virales de repetición'] },
      dangerousAdverseEffects: { pt: ['Hepatotoxicidade idiossincrática letal (Falência hepática fulminante rara, exigindo dosagem regular de TGO/TGP)', 'Síndrome de Churg-Strauss'], es: ['Hepatotoxicidad idiosincrásica letal (Falla hepática fulminante rara, exigiendo dosificación regular de AST/ALT)', 'Síndrome de Churg-Strauss'] },
      contraindications: {
        absolute: { pt: ['Disfunção hepática ativa', 'Uso no ataque agudo da asma'], es: ['Disfunción hepática activa', 'Uso en el ataque agudo del asma'] },
        relative: { pt: ['Uso associado de Varfarina'], es: ['Uso asociado de Warfarina'] }
      },
      safetyFlags: {
        bleedingRisk: true, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O FATOR DO FÍGADO: O Zafirlucaste "perdeu a guerra" das vendas para o Montelucaste exatamente pela comodidade. O Montelucaste não ataca o fígado e é dose única. Se prescrever Zafirlucaste, monitore o fígado do paciente no primeiro trimestre.', es: 'EL FACTOR DEL HÍGADO: El Zafirlukast "perdió la guerra" de ventas frente al Montelukast exactamente por la comodidad. El Montelukast no ataca el hígado y es dosis única.' }
      }
    },

    /* ── TEOFILINA ──────────────────────────────────────────────────────── */
    "teofilina": {
      "name": {
        "pt": "Teofilina",
        "es": "Teofilina"
      },
      "category": "pneumologia",
      "class": {
        "pt": "Metilxantina broncodilatadora de estreita janela terapêutica",
        "es": "Metilxantina broncodilatadora de estrecho margen terapéutico"
      },
      "indications": {
        "pt": [
          "Broncoespasmo crônico em contextos selecionados quando alternativas são inadequadas"
        ],
        "es": [
          "Broncoespasmo crónico en contextos seleccionados cuando alternativas son inadecuadas"
        ]
      },
      "mechanism": {
        "pt": "Relaxamento de músculo liso e efeitos não broncodilatadores por mecanismos envolvendo inibição de fosfodiesterase/antagonismo de adenosina.",
        "es": "Relajación del músculo liso y efectos no broncodilatadores por mecanismos que incluyen inhibición de fosfodiesterasa/antagonismo de adenosina."
      },
      "dose": {
        "adult": {
          "pt": "Dose deve ser individualizada por nível sérico, idade, tabagismo, comorbidades e interações. Não titular apenas por sintomas.",
          "es": "La dosis debe individualizarse por nivel sérico, edad, tabaquismo, comorbilidades e interacciones. No titular solo por síntomas."
        },
        "pediatric": {
          "pt": "Dose pediátrica é individualizada por idade/peso e monitorização sérica; exige protocolo específico.",
          "es": "La dosis pediátrica se individualiza por edad/peso y monitorización sérica; requiere protocolo específico."
        }
      },
      "administration": {
        "pt": [
          "Monitorar concentração sérica após mudanças de dose, doença febril, tabagismo ou interações",
          "Evitar escalada em exacerbação aguda sem nível sérico"
        ],
        "es": [
          "Monitorizar concentración sérica tras cambios de dosis, enfermedad febril, tabaquismo o interacciones",
          "Evitar aumento en exacerbación aguda sin nivel sérico"
        ]
      },
      "renalAdjustment": {
        "required": false,
        "message": {
          "pt": "Em adultos, depuração é predominantemente hepática; ajustar por níveis e contexto clínico.",
          "es": "En adultos, la depuración es predominantemente hepática; ajustar por niveles y contexto clínico."
        }
      },
      "hepaticAdjustment": {
        "required": true,
        "message": {
          "pt": "Hepatopatia reduz depuração e exige redução de dose/monitorização sérica estreita.",
          "es": "La hepatopatía reduce depuración y exige reducción de dosis/monitorización sérica estrecha."
        }
      },
      "commonAdverseEffects": {
        "pt": [
          "Náusea",
          "Tremor",
          "Insônia",
          "Cefaleia"
        ],
        "es": [
          "Náuseas",
          "Temblor",
          "Insomnio",
          "Cefalea"
        ]
      },
      "dangerousAdverseEffects": {
        "pt": [
          "Convulsões",
          "Taquiarritmias",
          "Toxicidade potencialmente fatal"
        ],
        "es": [
          "Convulsiones",
          "Taquiarritmias",
          "Toxicidad potencialmente fatal"
        ]
      },
      "contraindications": {
        "absolute": {
          "pt": [
            "Hipersensibilidade"
          ],
          "es": [
            "Hipersensibilidad"
          ]
        },
        "relative": {
          "pt": [
            "Arritmias, epilepsia, hepatopatia, interações CYP"
          ],
          "es": [
            "Arritmias, epilepsia, hepatopatía, interacciones CYP"
          ]
        }
      },
      "safetyFlags": {
        "warning": {
          "pt": "Estreita janela terapêutica e muitas interações. GINA não recomenda teofilina oral rotineiramente para asma por maior risco de efeitos adversos.",
          "es": "Estrecho margen terapéutico y muchas interacciones. GINA no recomienda teofilina oral rutinariamente para asma por mayor riesgo de efectos adversos."
        }
      }
    },

    /* ── AMINOFILINA ────────────────────────────────────────────────────── */
    "aminofilina": {
      "name": {
        "pt": "Aminofilina",
        "es": "Aminofilina"
      },
      "category": "pneumologia",
      "class": {
        "pt": "Complexo de teofilina/etilenodiamina; metilxantina IV",
        "es": "Complejo de teofilina/etilendiamina; metilxantina IV"
      },
      "indications": {
        "pt": [
          "Broncodilatação IV em situações selecionadas quando terapias inalatórias adequadas não são suficientes/possíveis"
        ],
        "es": [
          "Broncodilatación IV en situaciones seleccionadas cuando terapias inhaladas adecuadas no son suficientes/posibles"
        ]
      },
      "mechanism": {
        "pt": "Libera teofilina; promove broncodilatação por mecanismos de metilxantina.",
        "es": "Libera teofilina; produce broncodilatación por mecanismos de metilxantina."
      },
      "dose": {
        "adult": {
          "pt": "Aminofilina IV deve ser dosada com base em teofilina equivalente, nível sérico prévio, idade e depuração. Infusão lenta; não usar carga sem conhecer uso recente de teofilina.",
          "es": "Aminofilina IV debe dosificarse en base a teofilina equivalente, nivel sérico previo, edad y depuración. Infusión lenta; no usar carga sin conocer uso reciente de teofilina."
        },
        "pediatric": {
          "pt": "Uso pediátrico exige protocolo de dose por peso e monitorização sérica contínua; não extrapolar dose adulta.",
          "es": "El uso pediátrico requiere protocolo por peso y monitorización sérica continua; no extrapolar dosis adulta."
        }
      },
      "administration": {
        "pt": [
          "Administração IV lenta/diluída conforme produto",
          "Verificar uso recente de teofilina antes de dose de ataque",
          "Monitorar ECG e níveis séricos em uso relevante"
        ],
        "es": [
          "Administración IV lenta/diluida según producto",
          "Verificar uso reciente de teofilina antes de dosis de carga",
          "Monitorizar ECG y niveles séricos en uso relevante"
        ]
      },
      "renalAdjustment": {
        "required": false,
        "message": {
          "pt": "Ajuste guiado por nível sérico e fatores clínicos, não por fórmula renal isolada.",
          "es": "Ajuste guiado por nivel sérico y factores clínicos, no por fórmula renal aislada."
        }
      },
      "hepaticAdjustment": {
        "required": true,
        "message": {
          "pt": "Reduzir manutenção em hepatopatia/IC/febre prolongada e monitorar nível sérico.",
          "es": "Reducir mantenimiento en hepatopatía/IC/fiebre prolongada y monitorizar nivel sérico."
        }
      },
      "commonAdverseEffects": {
        "pt": [
          "Náusea",
          "Vômitos",
          "Tremor",
          "Taquicardia"
        ],
        "es": [
          "Náuseas",
          "Vómitos",
          "Temblor",
          "Taquicardia"
        ]
      },
      "dangerousAdverseEffects": {
        "pt": [
          "Arritmias",
          "Convulsões",
          "Hipotensão com infusão rápida",
          "Toxicidade fatal"
        ],
        "es": [
          "Arritmias",
          "Convulsiones",
          "Hipotensión con infusión rápida",
          "Toxicidad fatal"
        ]
      },
      "contraindications": {
        "absolute": {
          "pt": [
            "Hipersensibilidade a xantinas/etilenodiamina"
          ],
          "es": [
            "Hipersensibilidad a xantinas/etilendiamina"
          ]
        },
        "relative": {
          "pt": [
            "Arritmias, epilepsia, hepatopatia, uso recente de teofilina"
          ],
          "es": [
            "Arritmias, epilepsia, hepatopatía, uso reciente de teofilina"
          ]
        }
      },
      "safetyFlags": {
        "warning": {
          "pt": "Aminofilina IV tem estreita janela terapêutica. Dose deve considerar teofilina sérica e uso prévio; infusão rápida aumenta toxicidade.",
          "es": "Aminofilina IV tiene estrecho margen terapéutico. La dosis debe considerar teofilina sérica y uso previo; la infusión rápida aumenta toxicidad."
        }
      }
    },

    /* ── ROFLUMILASTE ───────────────────────────────────────────────────── */
    "roflumilaste": {
      name: { pt: 'Roflumilaste', es: 'Roflumilast' },
      category: 'pneumologia',
      class: { pt: 'Inibidor Seletivo da Fosfodiesterase-4 (PDE4)', es: 'Inhibidor Selectivo de la Fosfodiesterasa-4 (PDE4)' },
      indications: {
        pt: ['Manutenção na DPOC grave associada a BRONQUITE CRÔNICA com histórico de exacerbações frequentes (Não serve para Enfisema puro sem catarro)'],
        es: ['Mantenimiento en EPOC grave asociada a BRONQUITIS CRÓNICA con historial de exacerbaciones frecuentes (No sirve para Enfisema puro sin catarro)']
      },
      commercialNames: { br: ['Daxas'], ar: ['Daxas'] },
      presentation: { pt: ['Comprimidos revestidos 500 mcg'], es: ['Comprimidos recubiertos 500 mcg'] },
      mechanism: {
        pt: 'Diferente da Teofilina (que inibe todas as PDEs), o Roflumilaste inibe APENAS a PDE-4, enzima encontrada principalmente nas células imunes (neutrófilos, macrófagos) do pulmão do fumante. Isso causa um acúmulo de AMPc DENTRO da célula de defesa, paralisando a liberação de catarro espesso e a inflamação obstrutiva. NÃO É broncodilatador, sua função é impedir a bronquite.',
        es: 'A diferencia de la Teofilina, el Roflumilast inhibe SOLO la PDE-4, enzima encontrada en las células inmunes del pulmón del fumador. Esto causa acumulación de AMPc DENTRO de la célula de defensa, paralizando la liberación de catarro espeso. NO ES broncodilatador, su función es impedir la bronquitis.'
      },
      dose: {
        adult: {
          pt: '500 mcg VO UMA VEZ ao dia de forma contínua.',
          es: '500 mcg VO UNA VEZ al día de forma continua.'
        },
        pediatric: {
          pt: 'Não indicado.',
          es: 'No indicado.'
        }
      },
      administration: { pt: ['Comprimido oral. Deve sempre ser usado em combinação com um broncodilatador inalatório (LAMA ou LABA), nunca sozinho.'], es: ['Comprimido oral. Debe siempre usarse en combinación con un broncodilatador inhalatorio (LAMA o LABA), nunca solo.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste renal.', es: 'Sin necesidad de ajuste renal.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Contraindicado em pacientes com insuficiência hepática moderada a grave (Child-Pugh B e C).', es: 'Contraindicado en pacientes con insuficiencia hepática moderada a grave (Child-Pugh B y C).' } },
      commonAdverseEffects: { pt: ['Diarreia grave (frequentemente causa abandono do tratamento nos primeiros 30 dias)', 'Perda de peso involuntária', 'Náuseas e insônia'], es: ['Diarrea grave (frecuentemente causa abandono del tratamiento en los primeros 30 días)', 'Pérdida de peso involuntaria', 'Náuseas e insomnio'] },
      dangerousAdverseEffects: { pt: ['Reações psiquiátricas graves (Depressão, ansiedade aguda, pensamentos suicidas e suicídio consumado)', 'Desnutrição e caquexia induzida (pela perda de peso extrema em idosos já frágeis)'], es: ['Reacciones psiquiátricas graves (Depresión, ansiedad aguda, pensamientos suicidas y suicidio consumado)', 'Desnutrición y caquexia inducida (por pérdida de peso extrema en ancianos frágiles)'] },
      contraindications: {
        absolute: { pt: ['Histórico de depressão grave não tratada ou ideação suicida prévia', 'Imunossupressão grave ou câncer ativo'], es: ['Historial de depresión grave no tratada o ideación suicida previa', 'Inmunosupresión grave o cáncer activo'] },
        relative: { pt: ['Desnutrição basal (Baixo IMC) antes do tratamento'], es: ['Desnutrición basal (Bajo IMC) antes del tratamiento'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'ALERTA PSIQUIÁTRICO E NUTRICIONAL: O idoso com DPOC grave comumente já é emagrecido (Sarcopenia) e isolado em casa (Risco de Depressão). O Roflumilaste intensifica a perda de peso e detona gatilhos suicidas na mente. O paciente deve ser pesado mensalmente e a família alertada para vigiar o comportamento.', es: 'ALERTA PSIQUIÁTRICA Y NUTRICIONAL: El anciano con EPOC grave comúnmente ya es delgado y asilado. El Roflumilast intensifica la pérdida de peso y detona gatillos suicidas. El paciente debe ser pesado mensualmente y la familia alertada.' }
      }
    },

    /* ── OMALIZUMABE ────────────────────────────────────────────────────── */
    "omalizumabe": {
      name: { pt: 'Omalizumabe', es: 'Omalizumab' },
      category: 'pneumologia',
      class: { pt: 'Anticorpo Monoclonal (Anti-IgE)', es: 'Anticuerpo Monoclonal (Anti-IgE)' },
      indications: {
        pt: ['Asma Alérgica Grave persistente que não responde a doses altas de corticoides', 'Urticária Crônica Espontânea severa refratária a anti-histamínicos', 'Pólipos nasais severos'],
        es: ['Asma Alérgica Grave persistente que no responde a dosis altas de corticoides', 'Urticaria Crónica Espontánea severa refractaria a antihistamínicos', 'Pólipos nasales severos']
      },
      commercialNames: { br: ['Xolair'], ar: ['Xolair'] },
      presentation: { pt: ['Seringas preenchidas SC 75 mg e 150 mg', 'Frasco-ampola liofilizado 150 mg'], es: ['Jeringas prellenadas SC 75 mg y 150 mg', 'Vial liofilizado 150 mg'] },
      mechanism: {
        pt: 'Terapia "Alvo-Guiada". É um anticorpo criado em laboratório que caça e se liga especificamente às imunoglobulinas E (IgE) livres circulantes no sangue do paciente alérgico. Ao capturar o IgE, ele impede que este se conecte aos mastócitos. O mastócito, sem receber a chave (IgE), simplesmente "desliga" e para de vomitar histamina e substâncias que fecham o pulmão na asma. Quebra a raiz primária da alergia.',
        es: 'Terapia "Diana-Guiada". Es un anticuerpo creado en laboratorio que caza y se une específicamente a las inmunoglobulinas E (IgE) libres circulantes. Al capturar el IgE, impide que se conecte a los mastocitos. El mastocito, sin la llave (IgE), se "apaga" y deja de vomitar histamina en el asma.'
      },
      dose: {
        adult: {
          pt: 'Altamente variável: 75 mg a 600 mg Subcutâneo a cada 2 ou 4 semanas. (A dose e a frequência são calculadas EXATAMENTE com base no peso do paciente e no exame de sangue "IgE total basal").',
          es: 'Altamente variable: 75 mg a 600 mg Subcutáneo cada 2 o 4 semanas. (La dosis y frecuencia se calculan EXACTAMENTE con base en el peso del paciente y el IgE total basal).'
        },
        pediatric: {
          pt: 'Asma alérgica grave (> 6 anos): Dose calculada por nomograma (Peso x IgE) a cada 2 a 4 semanas.',
          es: 'Asma alérgica grave (> 6 años): Dosis calculada por nomograma (Peso x IgE) cada 2 a 4 semanas.'
        }
      },
      administration: { pt: ['Exclusivamente Subcutânea (SC). Nunca aplicar via IV (risco de choque fulminante).', 'A injeção é dolorosa e a medicação é altamente viscosa.'], es: ['Exclusivamente Subcutánea (SC). Nunca aplicar vía IV (riesgo de choque fulminante).', 'La inyección es dolorosa y la medicación es altamente viscosa.'] },
      renalAdjustment: { required: false, message: { pt: 'Degradado pelo sistema reticuloendotelial (não altera na DRC).', es: 'Degradado por el sistema reticuloendotelial (no altera en la ERC).' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Reação no local da injeção (Vermelhidão, inchaço e dor no braço/coxa)', 'Cefaleia e dores nas articulações'], es: ['Reacción en el lugar de la inyección (Enrojecimiento, hinchazón y dolor)', 'Cefalea y dolores articulares'] },
      dangerousAdverseEffects: { pt: ['ANAFILAXIA DE INÍCIO TARDIO (Pode ocorrer choque anafilático até 2 horas ou dias após a injeção, mesmo em pacientes que já usavam o remédio há meses)', 'Risco teórico aumentado de parasitoses (pois o IgE defende contra vermes)'], es: ['ANAFILAXIA DE INICIO TARDÍO (Puede ocurrir choque anafiláctico hasta 2 horas o días después de la inyección, incluso en pacientes que ya lo usaban)', 'Riesgo teórico aumentado de parasitosis'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade grave aos componentes biológicos da fórmula', 'Uso no ataque agudo da asma'], es: ['Hipersensibilidad grave a los componentes biológicos', 'Uso en el ataque agudo del asma'] },
        relative: { pt: ['Pacientes vivendo em áreas endêmicas de doenças parasitárias severas (Helmintos) sem tratamento prévio'], es: ['Pacientes viviendo en áreas endémicas de enfermedades parasitarias severas (Helmintos) sin tratamiento previo'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'OBSERVAÇÃO OBRIGATÓRIA: Após receber a injeção de Omalizumabe, o paciente é OBRIGADO a aguardar dentro do hospital/clínica por pelo menos 2 horas na primeira dose, e 30 min nas demais. O médico deve ter Adrenalina IM engatilhada, pois a reação alérgica à proteína sintética do remédio não perdoa.', es: 'OBSERVACIÓN OBLIGATORIA: Tras recibir la inyección, el paciente está OBLIGADO a esperar en el hospital al menos 2 horas en la primera dosis. El médico debe tener Adrenalina IM lista.' }
      }
    },

    /* ── MEPOLIZUMABE ───────────────────────────────────────────────────── */
    "mepolizumabe": {
      name: { pt: 'Mepolizumabe', es: 'Mepolizumab' },
      category: 'pneumologia',
      class: { pt: 'Anticorpo Monoclonal (Anti-Interleucina 5 / Anti-IL-5)', es: 'Anticuerpo Monoclonal (Anti-Interleucina 5 / Anti-IL-5)' },
      indications: {
        pt: ['Asma Eosinofílica Grave e Refratária', 'Pólipos nasais severos com rinossinusite crônica', 'Síndrome Hipereosinofílica e Granulomatose Eosinofílica com Poliangiite'],
        es: ['Asma Eosinofílica Grave y Refractaria', 'Pólipos nasales severos con rinosinusitis crónica', 'Síndrome Hipereosinofílico']
      },
      commercialNames: { br: ['Nucala'], ar: ['Nucala'] },
      presentation: { pt: ['Seringas ou canetas preenchidas SC 100 mg'], es: ['Jeringas o plumas prellenadas SC 100 mg'] },
      mechanism: {
        pt: 'Arma de destruição biológica seletiva. Muitos pacientes têm "Asma Eosinofílica", onde o sangue produz milhões de eosinófilos que invadem o pulmão. A Interleucina-5 (IL-5) é a única "comida/hormônio" que mantém o eosinófilo vivo. O Mepolizumabe sequestra a IL-5 circulante. Sem IL-5, os eosinófilos morrem de fome no sangue e a asma se cura radicalmente em poucos dias.',
        es: 'Arma de destrucción biológica selectiva. Muchos pacientes tienen "Asma Eosinofílica", donde la sangre produce millones de eosinófilos que invaden el pulmón. La IL-5 es la única hormona que mantiene vivo al eosinófilo. El Mepolizumab secuestra la IL-5. Sin IL-5, los eosinófilos mueren y el asma se cura radicalmente.'
      },
      dose: {
        adult: {
          pt: 'Asma severa: 100 mg via Subcutânea a CADA 4 SEMANAS (1 injeção mensal). Síndromes Eosinofílicas sistêmicas: 300 mg SC a cada 4 semanas.',
          es: 'Asma severa: 100 mg vía Subcutánea CADA 4 SEMANAS (1 inyección mensual). Síndromes Eosinofílicos sistémicos: 300 mg SC cada 4 semanas.'
        },
        pediatric: {
          pt: 'Asma (> 6 anos): 40 mg SC a cada 4 semanas.',
          es: 'Asma (> 6 años): 40 mg SC cada 4 semanas.'
        }
      },
      administration: { pt: ['Injeção subcutânea na parte superior do braço, coxa ou abdome. Diferente do omalizumabe, o paciente frequentemente pode autoaplicar em casa (tipo caneta de insulina) após treinamento.'], es: ['Inyección subcutánea en la parte superior del brazo, muslo o abdomen. A diferencia del omalizumab, el paciente frecuentemente puede autoaplicarse en casa.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem ajuste.', es: 'Sin ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem ajuste clínico necessário.', es: 'Sin ajuste clínico necesario.' } },
      commonAdverseEffects: { pt: ['Cefaleia intensa nos dias após a injeção', 'Dor intensa nas costas e espasmos (lombalgia)', 'Reações de dor na pele da injeção'], es: ['Cefalea intensa en los días tras la inyección', 'Dolor intenso en la espalda y espasmos (lumbalgia)', 'Reacciones de dolor en la piel de inyección'] },
      dangerousAdverseEffects: { pt: ['Reação de Hipersensibilidade Imunológica severa (Anafilaxia)', 'Infecção oportunista por herpes zoster'], es: ['Reacción de Hipersensibilidad Inmunológica severa (Anafilaxia)', 'Infección oportunista por herpes zoster'] },
      contraindications: {
        absolute: { pt: ['Resgate imediato de broncoespasmo'], es: ['Rescate inmediato de broncoespasmo'] },
        relative: { pt: ['Infecção parasitária (vermes) ativa não tratada (pois os eosinófilos são as armas do corpo contra os vermes. Destruir os eosinófilos permite que os vermes invadam o corpo inteiro).'], es: ['Infección parasitaria (gusanos) activa no tratada (pues los eosinófilos son las armas contra los gusanos. Destruirlos permite que los gusanos invadan todo el cuerpo).'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'REQUISITO MÉDICO OBRIGATÓRIO: É um crime médico prescrever Mepolizumabe sem antes olhar o Hemograma do paciente. Ele SÓ funciona se a asma do paciente for induzida por Eosinófilos (geralmente > 150 a 300 células/mcL no sangue). Se a asma for neutrofílica, o remédio (que custa fortunas) não fará absolutamente nada.', es: 'REQUISITO MÉDICO OBLIGATORIO: Es un crimen médico prescribir Mepolizumab sin antes mirar el Hemograma. SOLO funciona si el asma es inducida por Eosinófilos. Si el asma es neutrofílica, el remedio no hará absolutamente nada.' }
      }
    },

/* ── RESLIZUMABE ────────────────────────────────────────────────────── */
    "reslizumabe": {
      name: { pt: 'Reslizumabe', es: 'Reslizumab' },
      category: 'pneumologia',
      class: { pt: 'Anticorpo Monoclonal (Anti-Interleucina 5 / Anti-IL-5)', es: 'Anticuerpo Monoclonal (Anti-Interleucina 5 / Anti-IL-5)' },
      indications: {
        pt: ['Asma Eosinofílica Grave (terapia adicional de manutenção em adultos não controlados)'],
        es: ['Asma Eosinofílica Grave (terapia adicional de mantenimiento en adultos no controlados)']
      },
      commercialNames: { br: ['Cinqair'], ar: ['Cinqair'] },
      presentation: { pt: ['Frasco-ampola para uso IV (10 mg/mL)'], es: ['Vial para uso IV (10 mg/mL)'] },
      mechanism: {
        pt: 'Liga-se especificamente à Interleucina-5 (IL-5) livre no sangue do paciente, neutralizando-a. Como a IL-5 é o hormônio vital de sobrevivência e proliferação dos eosinófilos, o Reslizumabe corta o "suprimento de comida" dessas células. O eosinófilo murcha e sofre apoptose (morte celular programada), esvaziando o pulmão da inflamação. Diferente do Mepolizumabe (que é subcutâneo), este fármaco é puramente endovenoso.',
        es: 'Se une específicamente a la Interleucina-5 (IL-5) libre en la sangre, neutralizándola. Como la IL-5 es la hormona vital de supervivencia de los eosinófilos, el Reslizumab corta el "suministro de comida" de estas células. El eosinófilo se marchita y sufre apoptosis, vaciando el pulmón de inflamación.'
      },
      dose: {
        adult: {
          pt: '3 mg/kg administrados por infusão Intravenosa (IV) a CADA 4 SEMANAS (1 vez ao mês).',
          es: '3 mg/kg administrados por infusión Intravenosa (IV) CADA 4 SEMANAS (1 vez al mes).'
        },
        pediatric: {
          pt: 'Não recomendado (restrito a maiores de 18 anos devido ao risco de anafilaxia).',
          es: 'No recomendado (restringido a mayores de 18 años debido al riesgo de anafilaxia).'
        }
      },
      administration: { pt: ['Administração ESTRITAMENTE ENDOVENOSA. A infusão deve correr ao longo de 20 a 50 minutos. Acesso venoso obrigatório.'], es: ['Administración ESTRICTAMENTE ENDOVENOSA. La infusión debe correr a lo largo de 20 a 50 minutos. Acceso venoso obligatorio.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste clínico.', es: 'Sin necesidad de ajuste clínico.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Degradação proteolítica natural.', es: 'Degradación proteolítica natural.' } },
      commonAdverseEffects: { pt: ['Dor e reação no local da punção IV', 'Elevação da creatina quinase (CPK) muscular', 'Dores no corpo (Mialgia)'], es: ['Dolor y reacción en el sitio de punción IV', 'Elevación de creatina quinasa (CPK) muscular', 'Dolores en el cuerpo (Mialgia)'] },
      dangerousAdverseEffects: { pt: ['Anafilaxia fatal durante a infusão venosa ou imediatamente após', 'Risco teórico aumentado de neoplasias (câncer) em longo prazo'], es: ['Anafilaxia fatal durante la infusión venosa o inmediatamente después', 'Riesgo teórico aumentado de neoplasias (cáncer) a largo plazo'] },
      contraindications: {
        absolute: { pt: ['Tratamento de status asthmaticus agudo'], es: ['Tratamiento de status asthmaticus agudo'] },
        relative: { pt: ['Infecções helmínticas ativas não tratadas'], es: ['Infecciones helmínticas activas no tratadas'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'BLACK BOX WARNING: O Reslizumabe possui um alerta grave na FDA por causar Anafilaxia em até 0,3% dos pacientes (taxa muito alta para um imunobiológico). A infusão deve ser feita num centro médico com carrinho de parada, e o paciente monitorado de perto por 30 a 60 min após o fim do gotejamento.', es: 'BLACK BOX WARNING: El Reslizumab posee una alerta grave en la FDA por causar Anafilaxia en hasta 0,3% de los pacientes. La infusión debe hacerse en un centro médico con carro de paro.' }
      }
    },

/* ── BENRALIZUMABE ──────────────────────────────────────────────────── */
    "benralizumabe": {
      name: { pt: 'Benralizumabe', es: 'Benralizumab' },
      category: 'pneumologia',
      class: { pt: 'Anticorpo Monoclonal (Anti-Receptor Alfa da IL-5)', es: 'Anticuerpo Monoclonal (Anti-Receptor Alfa de IL-5)' },
      indications: {
        pt: ['Asma Eosinofílica Grave não controlada (Manutenção)'],
        es: ['Asma Eosinofílica Grave no controlada (Mantenimiento)']
      },
      commercialNames: { br: ['Fasenra'], ar: ['Fasenra'] },
      presentation: { pt: ['Seringa ou caneta preenchida SC 30 mg'], es: ['Jeringa o pluma prellenada SC 30 mg'] },
      mechanism: {
        pt: 'O "Exterminador Direto". Diferente do Mepolizumabe e Reslizumabe (que sequestram a IL-5 flutuando no sangue), o Benralizumabe mira na própria célula: ele se liga fisicamente ao RECEPTOR da IL-5 na superfície do eosinófilo. Ao grudar ali, ele age como um sinalizador luminoso para as células "Natural Killer" (NK) do sistema imune do paciente. As NK chegam e explodem o eosinófilo (Citotoxicidade Celular Dependente de Anticorpos - ADCC). Isso ZERA os eosinófilos do sangue em 24 horas.',
        es: 'El "Exterminador Directo". A diferencia del Mepolizumab y Reslizumab (que secuestran la IL-5 en sangre), el Benralizumab apunta a la propia célula: se une físicamente al RECEPTOR de IL-5 en el eosinófilo. Al pegarse, actúa como señalizador para las células "Natural Killer" (NK). Las NK llegan y explotan al eosinófilo. Esto PONE A CERO los eosinófilos en 24 horas.'
      },
      dose: {
        adult: {
          pt: '30 mg via Subcutânea a cada 4 semanas nas primeiras 3 doses. DEPOIS: 30 mg a CADA 8 SEMANAS (1 injeção a cada 2 meses).',
          es: '30 mg vía Subcutánea cada 4 semanas en las primeras 3 dosis. DESPUÉS: 30 mg CADA 8 SEMANAS (1 inyección cada 2 meses).'
        },
        pediatric: {
          pt: 'Uso a partir de 12 anos: mesma dose do adulto (30 mg SC).',
          es: 'Uso a partir de 12 años: misma dosis del adulto (30 mg SC).'
        }
      },
      administration: { pt: ['Injeção exclusivamente Subcutânea (braço, coxa, abdome). O espaçamento a cada 8 semanas na manutenção é seu maior atrativo comercial (maior conforto ao paciente).'], es: ['Inyección exclusivamente Subcutánea. El espaciamiento cada 8 semanas en el mantenimiento es su mayor atractivo comercial (mayor confort al paciente).'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste renal.', es: 'Sin necesidad de ajuste renal.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Não requer ajuste em disfunção hepática.', es: 'No requiere ajuste en disfunción hepática.' } },
      commonAdverseEffects: { pt: ['Dor de garganta (Faringite)', 'Febre leve transitória pós-injeção', 'Dor de cabeça'], es: ['Dolor de garganta (Faringitis)', 'Fiebre leve transitoria posinyección', 'Dolor de cabeza'] },
      dangerousAdverseEffects: { pt: ['Reação anafilática ou urticária severa', 'Redução total da defesa contra helmintos (vermes)'], es: ['Reacción anafiláctica o urticaria severa', 'Reducción total de la defensa contra helmintos (gusanos)'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade documentada', 'Crise aguda de asfixia (Broncoespasmo ativo)'], es: ['Hipersensibilidad documentada', 'Crisis aguda de asfixia (Broncoespasmo activo)'] },
        relative: { pt: ['Pacientes residentes em zonas de altíssima prevalência de parasitoses intestinais e sistêmicas'], es: ['Pacientes residentes en zonas de altísima prevalencia de parasitosis intestinales y sistémicas'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'EFEITO "ZERO EOSINÓFILOS": Se você pedir um hemograma após a primeira dose de Benralizumabe, a contagem de Eosinófilos será literalmente 0. Isso não é um erro do laboratório e não deve assustar o médico; é o exato mecanismo de ação da droga operando.', es: 'EFECTO "CERO EOSINÓFILOS": Si usted pide un hemograma tras la primera dosis de Benralizumab, el conteo de Eosinófilos será literalmente 0. Esto no es un error del laboratorio; es el exacto mecanismo de acción de la droga operando.' }
      }
    },

/* ── DUPILUMABE ─────────────────────────────────────────────────────── */
    "dupilumabe": {
      name: { pt: 'Dupilumabe', es: 'Dupilumab' },
      category: 'pneumologia',
      class: { pt: 'Anticorpo Monoclonal (Anti-Receptor de IL-4 e IL-13)', es: 'Anticuerpo Monoclonal (Anti-Receptor de IL-4 e IL-13)' },
      indications: {
        pt: ['Asma Tipo 2 Severa (Eosinofílica ou com FeNO elevado)', 'Dermatite Atópica (Eczema) grave refratária', 'Rinossinusite crônica com Polipose Nasal severa', 'Esofagite Eosinofílica'],
        es: ['Asma Tipo 2 Severa (Eosinofílica o con FeNO elevado)', 'Dermatitis Atópica (Eczema) grave refractaria', 'Rinosinusitis crónica con Poliposis Nasal severa', 'Esofagitis Eosinofílica']
      },
      commercialNames: { br: ['Dupixent'], ar: ['Dupixent'] },
      presentation: { pt: ['Seringa preenchida SC 200 mg e 300 mg'], es: ['Jeringa prellenada SC 200 mg y 300 mg'] },
      mechanism: {
        pt: 'O "Rei da Inflamação Tipo 2". Liga-se especificamente à cadeia alfa do receptor da Interleucina-4 (IL-4Rα). Como esse receptor é compartilhado, o Dupilumabe inibe SIMULTANEAMENTE duas vias gigantescas: a IL-4 e a IL-13. Essas duas citocinas são as "gerentes" das alergias no corpo inteiro. Ao bloqueá-las, o remédio desinflama o pulmão (Asma), desinflama a pele (Dermatite) e encolhe pólipos do nariz ao mesmo tempo.',
        es: 'El "Rey de la Inflamación Tipo 2". Se une específicamente a la cadena alfa del receptor de la Interleucina-4 (IL-4Rα). Como este receptor es compartido, el Dupilumab inhibe SIMULTÁNEAMENTE dos vías gigantescas: IL-4 e IL-13. Estas dos citocinas son las "gerentes" de las alergias. Al bloquearlas, desinflama el pulmón, la piel y la nariz al mismo tiempo.'
      },
      dose: {
        adult: {
          pt: 'Asma severa: Dose de ataque de 400 mg ou 600 mg SC, seguida de 200 mg ou 300 mg a CADA 2 SEMANAS (quinzenalmente).',
          es: 'Asma severa: Dosis de ataque de 400 mg o 600 mg SC, seguida de 200 mg o 300 mg CADA 2 SEMANAS (quincenalmente).'
        },
        pediatric: {
          pt: 'Pode ser usado em crianças > 6 anos para Asma/Dermatite (doses ajustadas por peso, 100 mg a 300 mg).',
          es: 'Puede usarse en niños > 6 años para Asma/Dermatitis (dosis ajustadas por peso, 100 mg a 300 mg).'
        }
      },
      administration: { pt: ['Injeção Subcutânea em braços, coxas ou abdome. O paciente é instruído a rodiziar o local e pode aplicar em casa.'], es: ['Inyección Subcutánea en brazos, muslos o abdomen. El paciente es instruido a rotar el lugar y puede aplicar en casa.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste na DRC.', es: 'Sin necesidad de ajuste en la ERC.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem ajuste clínico.', es: 'Sin ajuste clínico.' } },
      commonAdverseEffects: { pt: ['Conjuntivite alérgica e olho seco (Efeito paradoxal marcante da droga, comum em quem trata dermatite)', 'Reação na área da injeção', 'Herpes labial oportunista'], es: ['Conjuntivitis alérgica y ojo seco (Efecto paradójico marcado, común en quien trata dermatitis)', 'Reacción en el área de la inyección', 'Herpes labial oportunista'] },
      dangerousAdverseEffects: { pt: ['Eosinofilia Sanguínea Transitória Severa (Ao bloquear o pulmão, os eosinófilos ficam represados no sangue temporariamente)', 'Reações anafiláticas'], es: ['Eosinofilia Sanguínea Transitoria Severa (Al bloquear el pulmón, los eosinófilos quedan represados en la sangre temporalmente)', 'Reacciones anafilácticas'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade grave aos componentes da seringa'], es: ['Hipersensibilidad grave a los componentes de la jeringa'] },
        relative: { pt: ['Uso associado com vacinas de vírus vivos', 'Alergias oftalmológicas preexistentes graves (Ceratite)'], es: ['Uso asociado con vacunas de virus vivos', 'Alergias oftalmológicas preexistentes graves (Queratitis)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'VANTAGEM FENOTÍPICA: Diferente do Mepolizumabe e Benralizumabe (que exigem que o paciente tenha eosinófilos no sangue), o Dupilumabe funciona brilhantemente mesmo se o paciente tiver poucos eosinófilos, desde que ele exale alto teor de Óxido Nítrico (FeNO) no sopro.', es: 'VENTAJA FENOTÍPICA: A diferencia del Mepolizumab y Benralizumab (que exigen que el paciente tenga eosinófilos en sangre), el Dupilumab funciona brillantemente incluso si el paciente tiene pocos eosinófilos, siempre que exhale alto Óxido Nítrico (FeNO).' }
      }
    },

/* ── TEZEPELUMABE ───────────────────────────────────────────────────── */
    "tezepelumabe": {
      name: { pt: 'Tezepelumabe', es: 'Tezepelumab' },
      category: 'pneumologia',
      class: { pt: 'Anticorpo Monoclonal (Anti-Alarmina / Anti-TSLP)', es: 'Anticuerpo Monoclonal (Anti-Alarmina / Anti-TSLP)' },
      indications: {
        pt: ['Asma Severa em adultos e adolescentes (Terceira Linha de Terapia Biológica)', 'Excelente para a "Asma Não-T2" ou asma com baixo nível de eosinófilos'],
        es: ['Asma Severa en adultos y adolescentes (Tercera Línea de Terapia Biológica)', 'Excelente para el "Asma No-T2" o asma con bajo nivel de eosinófilos']
      },
      commercialNames: { br: ['Tezspire'], ar: ['Tezspire'] },
      presentation: { pt: ['Seringa preenchida ou caneta SC 210 mg'], es: ['Jeringa prellenada o pluma SC 210 mg'] },
      mechanism: {
        pt: 'Ataca o "Topo da Pirâmide" inflamatória. Ele bloqueia a TSLP (Linfopoietina Estromal do Timo), uma "alarmina". Quando o pulmão do asmático entra em contato com poeira ou cigarro, as células do próprio pulmão soltam a alarmina TSLP para gritar por socorro, iniciando toda a cascata (que depois chamará a IL-4, IL-5 e eosinófilos). O Tezepelumabe corta o sinal inicial. Por causa disso, ele funciona até na Asma do Fumante e na Asma de pessoas que não têm eosinófilos altos (O calcanhar de Aquiles dos outros biológicos).',
        es: 'Ataca la "Cima de la Pirámide" inflamatoria. Bloquea la TSLP, una "alarmina". Cuando el pulmón entra en contacto con polvo, las células sueltan TSLP para gritar por auxilio, iniciando toda la cascada. El Tezepelumab corta la señal inicial. Funciona incluso en el Asma del Fumador y en pacientes sin eosinófilos altos.'
      },
      dose: {
        adult: {
          pt: '210 mg via Subcutânea a CADA 4 SEMANAS (1 vez ao mês).',
          es: '210 mg vía Subcutánea CADA 4 SEMANAS (1 vez al mes).'
        },
        pediatric: {
          pt: 'Aprovado para adolescentes > 12 anos: mesma dose do adulto (210 mg SC).',
          es: 'Aprobado para adolescentes > 12 años: misma dosis del adulto (210 mg SC).'
        }
      },
      administration: { pt: ['Injeção subcutânea na coxa, abdome ou braço. Cuidado para não injetar na cintura ou em locais de atrito de roupa.'], es: ['Inyección subcutánea en muslo, abdomen o brazo. Cuidado de no inyectar en la cintura o en lugares de fricción de ropa.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste clínico na doença renal crônica.', es: 'Sin necesidad de ajuste clínico en la enfermedad renal crónica.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Degradação proteolítica em peptídeos pequenos, sem depender do fígado.', es: 'Degradación proteolítica en péptidos pequeños, sin depender del hígado.' } },
      commonAdverseEffects: { pt: ['Faringite e dores nas articulações', 'Erupção cutânea no local da injeção', 'Dor lombar'], es: ['Faringitis y dolores articulares', 'Erupción cutánea en el sitio de inyección', 'Dolor lumbar'] },
      dangerousAdverseEffects: { pt: ['Anafilaxia e choque anafilático', 'Reações adversas cardíacas (em investigação pós-mercado)'], es: ['Anafilaxia y choque anafiláctico', 'Reacciones adversas cardíacas (en investigación poscomercialización)'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade ativa aos componentes'], es: ['Hipersensibilidad activa a los componentes'] },
        relative: { pt: ['Tratamento de ataques agudos de broncoespasmo (início lento de ação)'], es: ['Tratamiento de ataques agudos de broncoespasmo (inicio lento de acción)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O DESMAME DO CORTICOIDE (OFERTA ENGANOSA): Cuidado ao iniciar imunobiológicos e tentar retirar os corticoides ORAIS que o paciente já toma de forma bruta. A retirada do corticoide deve ser lentíssima (durante meses), pois o eixo adrenal do paciente está "adormecido" e ele pode ter uma crise adrenal se o médico cortar a pílula confiando apenas na nova injeção.', es: 'EL DESTETE DEL CORTICOIDE: Cuidado al iniciar inmunobiológicos y retirar los corticoides ORALES bruscamente. La retirada debe ser lentísima (durante meses), pues el eje adrenal está "dormido" y el paciente puede tener crisis adrenal.' }
      }
    },

/* ── BROMEXINA ──────────────────────────────────────────────────────── */
    "bromexina": {
      name: { pt: 'Bromexina (Cloridrato de)', es: 'Bromhexina (Clorhidrato de)' },
      category: 'pneumologia',
      class: { pt: 'Expectorante Mucolítico', es: 'Expectorante Mucolítico' },
      indications: {
        pt: ['Doenças broncopulmonares agudas e crônicas associadas à secreção mucosa espessa (Bronquite, Traqueobronquite)', 'Tosse produtiva intensa com dificuldade de expectorar'],
        es: ['Enfermedades broncopulmonares agudas y crónicas asociadas a secreción mucosa espesa (Bronquitis, Traqueobronquitis)', 'Tos productiva intensa con dificultad de expectorar']
      },
      commercialNames: { br: ['Bisolvon'], ar: ['Bisolvon', 'Bisolvon Expectorante'] },
      presentation: { pt: ['Xarope Adulto 8 mg/5 mL', 'Xarope Pediátrico 4 mg/5 mL', 'Solução Inalatória/Gotas'], es: ['Jarabe Adulto 8 mg/5 mL', 'Jarabe Pediátrico 4 mg/5 mL', 'Solución Inhalatoria/Gotas'] },
      mechanism: {
        pt: 'Aumenta a proporção de secreção brônquica serosa (líquida) no pulmão. A Bromexina ativa as glândulas mucosas e fragmenta fisicamente as fibras de mucopolissacarídeos ácidos que deixam o catarro duro e "grudento". Com o catarro liquefeito e as fibras cortadas, o batimento ciliar da traqueia consegue varrer o muco para cima com facilidade durante a tosse. A bromexina estimula a produção endógena de surfactante alveolar.',
        es: 'Aumenta la proporción de secreción bronquial serosa (líquida). La Bromhexina activa las glándulas mucosas y fragmenta físicamente las fibras de mucopolisacáridos ácidos que dejan el catarro duro. Con el catarro licuado, el latido ciliar logra barrer el moco hacia arriba con facilidad.'
      },
      dose: {
        adult: {
          pt: '8 mg (1 copo medida de 5 mL do xarope adulto) 3 vezes ao dia (a cada 8 horas).',
          es: '8 mg (1 vaso medida de 5 mL del jarabe adulto) 3 veces al día (cada 8 horas).'
        },
        pediatric: {
          pt: 'Crianças 2 a 5 anos: 4 mg a cada 8h (Usar xarope pediátrico). Crianças 6 a 12 anos: 8 mg a cada 8h.',
          es: 'Niños 2 a 5 años: 4 mg cada 8h (Usar jarabe pediátrico). Niños 6 a 12 años: 8 mg cada 8h.'
        }
      },
      administration: { pt: ['MANDATÓRIO: Aumentar absurdamente a ingestão de ÁGUA durante o uso. O remédio precisa puxar a água do corpo para liquidificar o catarro. Usar o xarope desidratado não funciona.'], es: ['OBLIGATORIO: Aumentar absurdamente la ingestión de AGUA durante el uso. El remedio necesita sacar agua del cuerpo para licuar el catarro. Usar el jarabe deshidratado no funciona.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste (metabólitos podem acumular, mas toxicidade é muito baixa).', es: 'Sin necesidad de ajuste (metabolitos pueden acumular, pero toxicidad es muy baja).' } },
      hepaticAdjustment: { required: true, message: { pt: 'Pacientes com hepatopatia severa têm clearance reduzido de bromexina, usar com cautela e intervalos maiores.', es: 'Pacientes con hepatopatía severa tienen clearance reducido de bromhexina, usar con cautela e intervalos mayores.' } },
      commonAdverseEffects: { pt: ['Irritação e desconforto gástrico leve', 'Náuseas e diarreia leve', 'Aumento de suor'], es: ['Irritación y malestar gástrico leve', 'Náuseas y diarrea leve', 'Aumento de sudor'] },
      dangerousAdverseEffects: { pt: ['Choque anafilático severo e Angioedema (raríssimo, mas descrito)', 'Reações cutâneas graves (SCARs)'], es: ['Choque anafiláctico severo y Angioedema (rarísimo, pero descrito)', 'Reacciones cutáneas graves (SCARs)'] },
      contraindications: {
        absolute: { pt: ['Úlcera gastroduodenal ativa (A secreção gástrica também fica alterada e a proteção estomacal cai)', 'Crianças menores de 2 anos (risco de afogamento no excesso de secreção líquida)'], es: ['Úlcera gastroduodenal activa (La secreción gástrica también se altera y la protección estomacal cae)', 'Niños menores de 2 años (riesgo de ahogamiento en el exceso de secreción líquida)'] },
        relative: { pt: ['Pacientes incapazes de expectorar ou tossir com força (Neuropatas cerebrais, miastenia gravis)'], es: ['Pacientes incapaces de expectorar o toser con fuerza (Neurópatas cerebrales, miastenia gravis)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'NÃO TRAVE A TOSSE: É um erro conceitual e perigoso associar Bromexina (que "amolece" o catarro para ser expulso) com Antitussígenos como a Codeína ou Dextrometorfano (que inibem o reflexo de tosse). O catarro vai ficar líquido no pulmão, o paciente não vai tossir, e ocorrerá um "afogamento em secreção" com pneumonia associada.', es: 'NO TRABE LA TOS: Es un error peligroso asociar Bromhexina (que "ablanda" el catarro para ser expulsado) con Antitusivos (que inhiben la tos). El catarro quedará líquido en el pulmón, el paciente no toserá y se "ahogará en secreción" con neumonía.' }
      }
    },

    /* ── AMBROXOL ───────────────────────────────────────────────────────── */
    "ambroxol": {
      name: { pt: 'Ambroxol (Cloridrato de)', es: 'Ambroxol (Clorhidrato de)' },
      category: 'pneumologia',
      class: { pt: 'Expectorante Mucolítico', es: 'Expectorante Mucolítico' },
      indications: {
        pt: ['Doenças broncopulmonares agudas e crônicas com secreção espessa (Bronquite, Traqueobronquite)', 'Alívio da tosse produtiva'],
        es: ['Enfermedades broncopulmonares agudas y crónicas con secreción espesa (Bronquitis, Traqueobronquitis)', 'Alivio de la tos productiva']
      },
      commercialNames: { br: ['Mucosolvan', 'Ambroxmel'], ar: ['Mucosolvan'] },
      presentation: { pt: ['Xarope Adulto 30 mg/5 mL', 'Xarope Pediátrico 15 mg/5 mL', 'Gotas para inalação ou via oral'], es: ['Jarabe Adulto 30 mg/5 mL', 'Jarabe Pediátrico 15 mg/5 mL', 'Gotas para inhalación o vía oral'] },
      mechanism: {
        pt: 'O Ambroxol é o metabólito direto (a forma purificada e ativa) da Bromexina. Ele atua fragmentando os polímeros de muco no pulmão e, mais importante, estimula ativamente os pneumócitos tipo II a produzirem SURFACTANTE pulmonar. O surfactante funciona como um "lubrificante" que impede o catarro de colar na parede do brônquio, facilitando sua expulsão natural pela tosse.',
        es: 'El Ambroxol es el metabolito directo (la forma purificada y activa) de la Bromhexina. Actúa fragmentando los polímeros de moco y estimula activamente los neumocitos tipo II a producir SURFACTANTE pulmonar. El surfactante funciona como un "lubricante" que impide que el catarro se pegue en la pared del bronquio.'
      },
      dose: {
        adult: {
          pt: 'Xarope adulto (30mg/5mL): 5 mL via oral 3 vezes ao dia (a cada 8 horas).',
          es: 'Jarabe adulto (30mg/5mL): 5 mL vía oral 3 veces al día (cada 8 horas).'
        },
        pediatric: {
          pt: '2 a 5 anos: 2,5 mL do xarope pediátrico a cada 8h. 6 a 12 anos: 5 mL do xarope pediátrico a cada 8-12h.',
          es: '2 a 5 años: 2,5 mL del jarabe pediátrico cada 8h. 6 a 12 años: 5 mL del jarabe pediátrico cada 8-12h.'
        }
      },
      administration: { pt: ['Administrar preferencialmente após as refeições.', 'Tal como a bromexina, a eficácia do ambroxol é totalmente dependente da INGESTÃO MASSIVA DE ÁGUA durante o tratamento.'], es: ['Administrar preferentemente tras las comidas.', 'Al igual que la bromhexina, la eficacia depende totalmente de la INGESTIÓN MASIVA DE AGUA durante el tratamiento.'] },
      renalAdjustment: { required: true, message: { pt: 'Os metabólitos hepáticos do ambroxol são eliminados pelo rim. Em DRC grave, eles podem se acumular. Aumentar os intervalos de dose.', es: 'Los metabolitos hepáticos del ambroxol son eliminados por el riñón. En ERC grave, pueden acumularse. Aumentar los intervalos de dosis.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Usar com cautela em falência hepática severa.', es: 'Usar con cautela en falla hepática severa.' } },
      commonAdverseEffects: { pt: ['Alteração do paladar (disgeusia)', 'Náuseas e leve dormência na garganta (efeito anestésico local leve)'], es: ['Alteración del gusto (disgeusia)', 'Náuseas y leve adormecimiento en la garganta (efecto anestésico local leve)'] },
      dangerousAdverseEffects: { pt: ['Reações cutâneas alérgicas severas (Eritema multiforme) raríssimas'], es: ['Reacciones cutáneas alérgicas severas (Eritema multiforme) rarísimas'] },
      contraindications: {
        absolute: { pt: ['Crianças menores de 2 anos (pelo alto risco de acúmulo de secreção não expectorada)'], es: ['Niños menores de 2 años (por el alto riesgo de acumulación de secreción no expectorada)'] },
        relative: { pt: ['Pacientes com úlcera péptica ativa'], es: ['Pacientes con úlcera péptica activa'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'Tem um leve efeito anestésico tópico! Se o paciente relatar que a boca ou a garganta ficaram "adormecidas" ou com formigamento após tomar o xarope, avise que isso é uma ação farmacológica normal do Ambroxol e não um sinal imediato de anafilaxia.', es: '¡Tiene un leve efecto anestésico tópico! Si el paciente relata que la boca o garganta quedaron "adormecidas" tras tomar el jarabe, avise que esto es una acción farmacológica normal del Ambroxol y no un signo de anafilaxia.' }
      }
    },

    /* ── CARBOCISTEÍNA ──────────────────────────────────────────────────── */
    "carbocisteina": {
      name: { pt: 'Carbocisteína', es: 'Carbocisteína' },
      category: 'pneumologia',
      class: { pt: 'Mucorregulador / Expectorante', es: 'Mucorregulador / Expectorante' },
      indications: {
        pt: ['Doença Pulmonar Obstrutiva Crônica (DPOC) para redução de exacerbações', 'Bronquites e otites acompanhadas de muco hiperviscoso'],
        es: ['Enfermedad Pulmonar Obstructiva Crónica (EPOC) para reducción de exacerbaciones', 'Bronquitis y otitis acompañadas de moco hiperviscoso']
      },
      commercialNames: { br: ['Mucofan', 'Mucosolvan (Atenção, varia por país)'], ar: ['Rinofluimucil'] },
      presentation: { pt: ['Xarope Adulto 50 mg/mL', 'Xarope Pediátrico 20 mg/mL', 'Cápsulas 375 mg'], es: ['Jarabe Adulto 50 mg/mL', 'Jarabe Pediátrico 20 mg/mL', 'Cápsulas 375 mg'] },
      mechanism: {
        pt: 'Não apenas quebra o catarro, mas REGULA a sua fabricação original. A carbocisteína age dentro das células secretoras da traqueia (células caliciformes), obrigando-as a produzir mais *sialomucinas* (catarro fluido e ralo) e menos *fucomucinas* (catarro duro e grosso). Assim, o muco já nasce saudável e ralo nas glândulas respiratórias.',
        es: 'No solo rompe el catarro, sino REGULA su fabricación original. La carbocisteína actúa dentro de las células secretoras de la tráquea, obligándolas a producir más *sialomucinas* (catarro fluido) y menos *fucomucinas* (catarro duro y grueso). Así, el moco ya nace saludable y fluido.'
      },
      dose: {
        adult: {
          pt: 'Xarope Adulto (50mg/mL): 5 a 15 mL via oral a cada 8 horas (A dose geralmente é reduzida após a melhora inicial).',
          es: 'Jarabe Adulto (50mg/mL): 5 a 15 mL vía oral cada 8 horas (La dosis generalmente se reduce tras la mejora inicial).'
        },
        pediatric: {
          pt: '2 a 5 anos: 2,5 mL a 5 mL (Xarope Pediátrico) a cada 6h. 6 a 12 anos: 5 mL a 10 mL a cada 8h.',
          es: '2 a 5 años: 2,5 mL a 5 mL (Jarabe Pediátrico) cada 6h. 6 a 12 años: 5 mL a 10 mL cada 8h.'
        }
      },
      administration: { pt: ['Deve ser tomado longe dos laticínios para não prejudicar a absorção gástrica.'], es: ['Debe ser tomado lejos de los lácteos para no perjudicar la absorción gástrica.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste estrito.', es: 'Sin necesidad de ajuste estricto.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Desconforto epigástrico e azia (muito comum)', 'Náuseas e diarreia leve', 'Erupção cutânea'], es: ['Malestar epigástrico y acidez (muy común)', 'Náuseas y diarrea leve', 'Erupción cutánea'] },
      dangerousAdverseEffects: { pt: ['Sangramento Gastrointestinal (Especialmente em idosos que já usam AINEs, pois a carbocisteína dissolve o muco protetor do estômago também)'], es: ['Sangrado Gastrointestinal (Especialmente en ancianos que ya usan AINEs, pues la carbocisteína disuelve el muco protector del estómago también)'] },
      contraindications: {
        absolute: { pt: ['Úlceras gástricas ou duodenais ativas (Risco de hemorragia)', 'Crianças menores de 2 anos'], es: ['Úlceras gástricas o duodenales activas (Riesgo de hemorragia)', 'Niños menores de 2 años'] },
        relative: { pt: ['Histórico de úlceras cicatrizadas ou uso excessivo de Ibuprofeno/Diclofenaco'], es: ['Historial de úlceras cicatrizadas o uso excesivo de Ibuprofeno/Diclofenaco'] }
      },
      safetyFlags: {
        bleedingRisk: true, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O MUCO DO ESTÔMAGO SOFRE JUNTO: A Carbocisteína não entende que o muco do estômago deve ser mantido espesso para proteger contra o ácido. Ela dissolve o muco de proteção gástrica, abrindo caminho para dor de estômago e úlceras. Use com IBP (Omeprazol) se o paciente tiver gastrite grave.', es: 'EL MOCO DEL ESTÓMAGO SUFRE: La Carbocisteína disuelve el muco de protección gástrica, abriendo camino para dolor de estómago y úlceras. Use con IBP (Omeprazol) si el paciente tiene gastritis grave.' }
      }
    },

    /* ── ERDOSTEÍNA ─────────────────────────────────────────────────────── */
    "erdosteina": {
      name: { pt: 'Erdosteína', es: 'Erdosteína' },
      category: 'pneumologia',
      class: { pt: 'Mucolítico Avançado e Antioxidante', es: 'Mucolítico Avanzado y Antioxidante' },
      indications: {
        pt: ['Doença Pulmonar Obstrutiva Crônica (DPOC) sintomática (Reduz agressivamente o número de exacerbações/internações)', 'Bronquite crônica severa'],
        es: ['Enfermedad Pulmonar Obstructiva Crónica (EPOC) sintomática (Reduce agresivamente el número de exacerbaciones)', 'Bronquitis crónica severa']
      },
      commercialNames: { br: ['Flusten'], ar: ['Erdosteina'] },
      presentation: { pt: ['Cápsulas 300 mg', 'Suspensão oral 35 mg/mL'], es: ['Cápsulas 300 mg', 'Suspensión oral 35 mg/mL'] },
      mechanism: {
        pt: 'A mais avançada das opções orais. É um pró-fármaco que, ao passar pelo fígado, libera "grupos tiol" (enxofre). Esses grupos cortam as pontes de dissulfeto do catarro como uma tesoura, amolecendo a secreção. O seu trunfo gigantesco é ser um forte ANTIOXIDANTE: ele "varre" os radicais livres de oxigênio gerados pelo cigarro no pulmão, protegendo a enzima alfa-1-antitripsina da destruição no DPOC.',
        es: 'Es un profármaco que, al pasar por el hígado, libera "grupos tiol" (azufre). Estos grupos cortan los puentes disulfuro del catarro como una tijera. Su triunfo gigantesco es ser un fuerte ANTIOXIDANTE: "barre" los radicales libres de oxígeno generados por el cigarro en el pulmón.'
      },
      dose: {
        adult: {
          pt: '1 cápsula de 300 mg via oral a cada 12 horas (2x ao dia).',
          es: '1 cápsula de 300 mg vía oral cada 12 horas (2x al día).'
        },
        pediatric: {
          pt: 'Uso não recomendado em pediatria (foco quase exclusivo no adulto tabagista).',
          es: 'Uso no recomendado en pediatría.'
        }
      },
      administration: { pt: ['O paciente pode ingerir as cápsulas antes, durante ou após as refeições (absorção rápida).'], es: ['El paciente puede ingerir las cápsulas antes, durante o después de las comidas (absorción rápida).'] },
      renalAdjustment: { required: true, message: { pt: 'Evitar ou reduzir em ClCr < 25 mL/min (acúmulo dos metabólitos ativos).', es: 'Evitar o reducir en ClCr < 25 mL/min (acumulación de metabolitos activos).' } },
      hepaticAdjustment: { required: true, message: { pt: 'Contraindicado em insuficiência hepática grave (Child-Pugh C), pois a droga exige o fígado sadio para ser ativada e não intoxicar.', es: 'Contraindicado en insuficiencia hepática grave (Child-Pugh C), pues la droga exige el hígado sano para ser activada.' } },
      commonAdverseEffects: { pt: ['Leve desconforto epigástrico (muito menor que a carbocisteína)', 'Cefaleia', 'Sabor alterado'], es: ['Leve malestar epigástrico (mucho menor que la carbocisteína)', 'Cefalea', 'Sabor alterado'] },
      dangerousAdverseEffects: { pt: ['Hipersensibilidade grave (Raríssimo)'], es: ['Hipersensibilidad grave (Rarísimo)'] },
      contraindications: {
        absolute: { pt: ['Úlcera péptica ativa', 'Cirrose hepática grave ou DRC grave'], es: ['Úlcera péptica activa', 'Cirrosis hepática grave o ERC grave'] },
        relative: { pt: ['Nenhuma relevante clinicamente em dose terapêutica'], es: ['Ninguna relevante clínicamente en dosis terapéutica'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'ANTIBIÓTICO TURBINADO (Sinergismo Comprovado): Assim como a bromexina, a Erdosteína aumenta incrivelmente a concentração de Amoxicilina nos brônquios. Além disso, ela impede que as bactérias formem biofilmes resistentes no muco.', es: 'ANTIBIÓTICO TURBINADO (Sinergismo Comprobado): Al igual que la bromhexina, la Erdosteína aumenta increíblemente la concentración de Amoxicilina en los bronquios. Además, impide que las bacterias formen biopelículas en el moco.' }
      }
    },

    /* ── DORNASE ALFA ───────────────────────────────────────────────────── */
    "dornase_alfa": {
      name: { pt: 'Dornase Alfa (DNase I Recombinante Humana)', es: 'Dornasa Alfa' },
      category: 'pneumologia',
      class: { pt: 'Mucolítico Enzimático Específico', es: 'Mucolítico Enzimático Específico' },
      indications: {
        pt: ['Fibrose Cística (Mucoviscidose) severa, para fluidificar a secreção pulmonar asfixiante'],
        es: ['Fibrosis Quística (Mucoviscidosis) severa, para fluidificar la secreción pulmonar asfixiante']
      },
      commercialNames: { br: ['Pulmozyme'], ar: ['Pulmozyme'] },
      presentation: { pt: ['Ampolas para inalação (nebulização) 2,5 mg/2,5 mL'], es: ['Ampollas para inhalación (nebulización) 2,5 mg/2,5 mL'] },
      mechanism: {
        pt: 'A biotecnologia salvadora da Fibrose Cística. Nos pacientes com a doença, milhões de neutrófilos do sistema imune morrem no pulmão tentando combater infecções. Quando eles morrem, eles "vomitam" todo o seu DNA (material genético) no catarro do paciente, formando uma "teia de aranha" de DNA que deixa o catarro duro como cimento. A Dornase Alfa é uma enzima genética sintética (uma tesoura de DNA) inalada que "pica" esse DNA neutrofílico do catarro, liquefazendo o cimento e salvando a respiração.',
        es: 'En pacientes con la enfermedad, millones de neutrófilos mueren en el pulmón. Cuando mueren, "vomitan" su ADN en el catarro, formando una "telaraña" de ADN que deja el moco duro como cemento. La Dornasa Alfa es una enzima genética inalada que "pica" ese ADN del catarro, licuando el cemento.'
      },
      dose: {
        adult: {
          pt: '2,5 mg em nebulização inalatória UMA VEZ ao dia. (Pacientes muito graves > 21 anos podem fazer a cada 12h).',
          es: '2,5 mg en nebulización inhalatoria UNA VEZ al día. (Pacientes muy graves > 21 años pueden hacer cada 12h).'
        },
        pediatric: {
          pt: 'Acima de 5 anos: 2,5 mg UMA VEZ ao dia por nebulização.',
          es: 'Por encima de 5 años: 2,5 mg UNA VEZ al día por nebulización.'
        }
      },
      administration: { pt: ['REGRAS RÍGIDAS DE USO: O medicamento deve ficar na GELADEIRA e protegido da luz intensa. NÃO PODE SER DILUÍDO (não adicionar soro) nem misturado com nenhum outro remédio no copo. Deve ser usado com um "nebulizador compressor a jato" apropriado (nebulizadores ultrassônicos destroem a enzima).'], es: ['REGLAS RÍGIDAS: El medicamento debe estar en la NEVERA. NO PUEDE SER DILUIDO ni mezclado. Debe usarse con un "nebulizador compresor" apropiado (nebulizadores ultrasónicos destruyen la enzima).'] },
      renalAdjustment: { required: false, message: { pt: 'Ação puramente inalatória intrapulmonar.', es: 'Acción puramente inhalatoria intrapulmonar.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem absorção sistêmica relevante.', es: 'Sin absorción sistémica relevante.' } },
      commonAdverseEffects: { pt: ['Alteração severa da voz (Rouquidão ou afonia passageira)', 'Faringite e irritação da garganta profunda', 'Erupção cutânea'], es: ['Alteración severa de la voz (Ronquera o afonía pasajera)', 'Faringitis e irritación de la garganta profunda', 'Erupción cutánea'] },
      dangerousAdverseEffects: { pt: ['Dispneia leve a moderada paradoxal', 'Dor torácica (pleurítica) intensa'], es: ['Disnea leve a moderada paradójica', 'Dolor torácico (pleurítico) intenso'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade grave à dornase alfa ou a produtos de ovário de hamster chinês (células CHO onde a enzima é criada em laboratório)'], es: ['Hipersensibilidad grave a dornasa alfa o a productos de ovario de hámster chino'] },
        relative: { pt: ['Pneumonias comuns não associadas à Fibrose Cística (O remédio não faz efeito e custa milhares de reais, é inútil no catarro comum de gripe).'], es: ['Neumonías comunes no asociadas a Fibrosis Quística (Es inútil en el catarro común de gripe).'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'MEDICAÇÃO TÉRMICA BIOLÓGICA: Sendo uma proteína enzimática viva, se o frasco da Dornase ficar fora da geladeira por mais de 24h, a enzima desnatura completamente e a inalação vira água inútil.', es: 'MEDICACIÓN TÉRMICA BIOLÓGICA: Siendo una proteína enzimática viva, si el vial queda fuera de la nevera por más de 24h, la enzima se desnaturaliza completamente y la inhalación se vuelve agua inútil.' }
      }
    },

    /* ── DEXTROMETORFANO ────────────────────────────────────────────────── */
    "dextrometorfano": {
      name: { pt: 'Dextrometorfano', es: 'Dextrometorfano' },
      category: 'pneumologia',
      class: { pt: 'Antitussígeno Central (Derivado não-opioide do Levorfanol)', es: 'Antitusivo Central (Derivado no opioide del Levorfanol)' },
      indications: {
        pt: ['Tosse SECA, irritativa e não produtiva (Gripes, irritações alérgicas ou pós-infecção viral severa)'],
        es: ['Tos SECA, irritativa y no productiva (Gripes, irritaciones alérgicas o posinfección viral severa)']
      },
      commercialNames: { br: ['Benalet (Assoc)', 'Novalgina Tosse', 'Vick Xarope'], ar: ['Romilar'] },
      presentation: { pt: ['Xaropes e Gotas Orais (Frequentemente associado a antialérgicos ou dipirona)'], es: ['Nuevos jarabes y gotas (Frecuentemente asociado a antialérgicos o dipirona)'] },
      mechanism: {
        pt: 'Atua diretamente no "Centro da Tosse" localizado no Bulbo (Tronco encefálico), elevando o limiar neurológico necessário para deflagrar o reflexo de tosse. Ele é um poderoso ANTAGONISTA DO RECEPTOR NMDA no cérebro e agonista dos receptores sigma-1. Quimicamente é parecido com os opioides, mas não se liga aos receptores mu/kappa (não tira a dor e não deprime a respiração).',
        es: 'Actúa directamente en el "Centro de la Tos" en el Bulbo, elevando el umbral neurológico de la tos. Es un poderoso ANTAGONISTA DEL RECEPTOR NMDA en el cerebro y agonista sigma-1. Químicamente es parecido a los opioides, pero no deprime la respiración.'
      },
      dose: {
        adult: {
          pt: '10 mg a 30 mg via oral a cada 4 ou 8 horas. Máximo de 120 mg/dia.',
          es: '10 mg a 30 mg vía oral cada 4 o 8 horas. Máximo de 120 mg/día.'
        },
        pediatric: {
          pt: '6 a 12 anos: 5 a 15 mg a cada 4 horas (Máximo 60 mg/dia). Contraindicado rotineiramente em crianças < 2 anos.',
          es: '6 a 12 años: 5 a 15 mg cada 4 horas (Máximo 60 mg/día). Contraindicado en niños < 2 años.'
        }
      },
      administration: { pt: ['Doses exageradas não aumentam o controle da tosse, apenas o risco de efeitos no sistema nervoso central.'], es: ['Dosis exageradas no aumentan el control de la tos, solo el riesgo de efectos en el sistema nervioso central.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste estrito em insuficiência renal.', es: 'Sin necesidad de ajuste estricto en insuficiencia renal.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Evitar em cirrose descompensada ou reduzir agressivamente a dose.', es: 'Evitar en cirrosis descompensada o reducir agresivamente la dosis.' } },
      commonAdverseEffects: { pt: ['Sonolência leve', 'Tontura (vertigem) e excitação leve paradoxal', 'Constipação moderada'], es: ['Somnolencia leve', 'Mareo (vértigo) y excitación leve paradójica', 'Constipación moderada'] },
      dangerousAdverseEffects: { pt: ['SÍNDROME SEROTONINÉRGICA FATAL (se combinado com antidepressivos)', 'Alucinações e Delírios Psicodélicos profundos (se usado como droga de abuso recreativo em doses ultra-altas - "Robotripping")'], es: ['SÍNDROME SEROTONINÉRGICO FATAL (si combinado con antidepresivos)', 'Alucinaciones y Delirios Psicodélicos profundos (si se usa como droga de abuso recreativo - "Robotripping")'] },
      contraindications: {
        absolute: { pt: ['Tosse PRODUTIVA com expectoração excessiva (Risco de afogamento pulmonar)', 'Uso concomitante com inibidores da MAO (Morte por colapso autonômico)'], es: ['Tos PRODUCTIVA con expectoración excesiva (Riesgo de ahogamiento pulmonar)', 'Uso concomitante con inhibidores de la MAO (Muerte por colapso autonómico)'] },
        relative: { pt: ['Asma brônquica aguda', 'Depressão respiratória pré-existente'], es: ['Asma bronquial aguda', 'Depresión respiratoria preexistente'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A MAIOR CONTRAINDICAÇÃO DA PNEUMOLOGIA: Jamais deprima o centro da tosse de um paciente com infecção bacteriana, DPOC ou catarro abundante. Tossir salva a vida do doente. Dar Dextrometorfano para o pulmão "cheio" vai travar o catarro lá dentro e induzir uma asfixia purulenta letal.', es: 'LA MAYOR CONTRAINDICACIÓN: Jamás deprima el centro de la tos de un paciente con infección bacteriana o catarro abundante. Toser salva la vida. Dar Dextrometorfano para un pulmón "lleno" trabará el catarro e inducirá asfixia.' }
      }
    },

    /* ── LEVODROPROPIZINA ───────────────────────────────────────────────── */
    "levodropropizina": {
      name: { pt: 'Levodropropizina', es: 'Levodropropizina' },
      category: 'pneumologia',
      class: { pt: 'Antitussígeno de Ação Periférica', es: 'Antitusivo de Acción Periférica' },
      indications: {
        pt: ['Tosse seca, irritativa e não produtiva de qualquer origem (viral, alérgica, inflamatória)'],
        es: ['Tos seca, irritativa y no productiva de cualquier origen (viral, alérgica, inflamatoria)']
      },
      commercialNames: { br: ['Antux'], ar: ['Levotuss'] },
      presentation: { pt: ['Xarope Adulto 30 mg/5 mL', 'Xarope Pediátrico 15 mg/5 mL', 'Gotas'], es: ['Jarabe Adulto 30 mg/5 mL', 'Jarabe Pediátrico 15 mg/5 mL', 'Gotas'] },
      mechanism: {
        pt: 'A grande evolução do tratamento da tosse. Diferente da Codeína ou Dextrometorfano (que agem no cérebro e causam sono/dependência), a Levodropropizina atua DIRETAMENTE no pulmão. Ela "anestesia" e modula as Fibras-C aferentes nas vias respiratórias. Ou seja, ela desliga o sensor que avisa ao cérebro que há uma irritação, parando a tosse sem alterar o sistema nervoso central.',
        es: 'La gran evolución del tratamiento de la tos. A diferencia de la Codeína (que actúa en el cerebro y causa sueño), la Levodropropizina actúa DIRECTAMENTE en el pulmón. "Anestesia" y modula las Fibras-C aferentes en las vías respiratorias. Apaga el sensor que avisa al cerebro de la irritación, sin alterar el SNC.'
      },
      dose: {
        adult: {
          pt: '60 mg (10 mL do xarope adulto) via oral a cada 8 horas.',
          es: '60 mg (10 mL del jarabe adulto) vía oral cada 8 horas.'
        },
        pediatric: {
          pt: 'Crianças > 2 anos: 1 mg/kg/dose a cada 8 horas.',
          es: 'Niños > 2 años: 1 mg/kg/dosis cada 8 horas.'
        }
      },
      administration: { pt: ['Administrar preferencialmente entre as refeições (estômago vazio otimiza absorção).'], es: ['Administrar preferentemente entre las comidas (estómago vacío optimiza absorción).'] },
      renalAdjustment: { required: true, message: { pt: 'Precaução em falência renal grave (ClCr < 35 mL/min), aumentar intervalo.', es: 'Precaución en falla renal grave (ClCr < 35 mL/min), aumentar intervalo.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste clínico agudo.', es: 'Sin necesidad de ajuste clínico agudo.' } },
      commonAdverseEffects: { pt: ['Náuseas e desconforto epigástrico leve', 'Cansaço passageiro'], es: ['Náuseas y malestar epigástrico leve', 'Cansancio pasajero'] },
      dangerousAdverseEffects: { pt: ['Reações de hipersensibilidade alérgica (raras)'], es: ['Reacciones de hipersensibilidad alérgica (raras)'] },
      contraindications: {
        absolute: { pt: ['Tosse PRODUTIVA (com catarro abundante)', 'Crianças menores de 2 anos', 'Hipersecreção brônquica ou Síndrome de Kartagener'], es: ['Tos PRODUCTIVA (con catarro abundante)', 'Niños menores de 2 años', 'Hipersecreción bronquial o Síndrome de Kartagener'] },
        relative: { pt: ['Pacientes com disfunção mucociliar severa'], es: ['Pacientes con disfunción mucociliar severa'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O ANTITUSSÍGENO SEGURO: Por não deprimir o cérebro, é a droga de eleição na pediatria e geriatria para tossinha chata de pós-gripe que não deixa o paciente dormir, sem o risco de parar a respiração do doente.', es: 'EL ANTITUSIVO SEGURO: Al no deprimir el cerebro, es la droga de elección en pediatría y geriatría para tos molesta de posgripe, sin el riesgo de parar la respiración del paciente.' }
      }
    },

    /* ── DROPROPIZINA ───────────────────────────────────────────────────── */
    "dropropizina": {
      name: { pt: 'Dropropizina', es: 'Dropropizina' },
      category: 'pneumologia',
      class: { pt: 'Antitussígeno de Ação Periférica', es: 'Antitusivo de Acción Periférica' },
      indications: {
        pt: ['Tosse seca irritativa não-produtiva'],
        es: ['Tos seca irritativa no productiva']
      },
      commercialNames: { br: ['Atossion', 'Dropropizina'], ar: ['Dropropizina'] },
      presentation: { pt: ['Xarope Adulto 30 mg/5 mL', 'Xarope Pediátrico 15 mg/5 mL'], es: ['Jarabe Adulto 30 mg/5 mL', 'Jarabe Pediátrico 15 mg/5 mL'] },
      mechanism: {
        pt: 'Molécula original "racêmica" da qual a levodropropizina foi extraída. Tem exatamente o mesmo mecanismo (bloqueio de receptores de estiramento nas vias aéreas). A diferença é que, por não ser purificada (possui as formas D e L da molécula), tem um risco ligeiramente maior de causar sonolência do que a sua sucessora.',
        es: 'Molécula original "racémica" de la que se extrajo la levodropropizina. Tiene exactamente el mismo mecanismo (bloqueo periférico). La diferencia es que, al no ser purificada, tiene un riesgo ligeramente mayor de causar somnolencia.'
      },
      dose: {
        adult: {
          pt: '30 mg (1 copo-medida) via oral a cada 6 ou 8 horas.',
          es: '30 mg (1 vaso-medida) vía oral cada 6 u 8 horas.'
        },
        pediatric: {
          pt: 'Crianças de 2 a 12 anos: 0,5 a 1 mg/kg/dose a cada 8 horas.',
          es: 'Niños de 2 a 12 años: 0,5 a 1 mg/kg/dosis cada 8 horas.'
        }
      },
      administration: { pt: ['Via oral. Não deve ser usado por mais de 5 a 7 dias seguidos sem investigação da causa da tosse.'], es: ['Vía oral. No debe usarse por más de 5 a 7 días seguidos sin investigación de la causa de la tos.'] },
      renalAdjustment: { required: false, message: { pt: 'Ajuste empírico em insuficiência renal grave (aumentar intervalo).', es: 'Ajuste empírico en insuficiencia renal grave (aumentar intervalo).' } },
      hepaticAdjustment: { required: false, message: { pt: 'Metabolismo hepático severo exige cautela na cirrose.', es: 'Metabolismo hepático severo exige cautela en cirrosis.' } },
      commonAdverseEffects: { pt: ['Sonolência leve a moderada', 'Náuseas'], es: ['Somnolencia leve a moderada', 'Náuseas'] },
      dangerousAdverseEffects: { pt: ['Hipotensão em doses suprafarmacológicas'], es: ['Hipotensión en dosis suprafarmacológicas'] },
      contraindications: {
        absolute: { pt: ['Tosse produtiva', 'Crianças < 2 anos'], es: ['Tos productiva', 'Niños < 2 años'] },
        relative: { pt: ['Glaucoma', 'Pacientes idosos frágeis com histórico de quedas (pela leve sedação)'], es: ['Glaucoma', 'Pacientes ancianos frágiles con historial de caídas (por leve sedación)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'Evite a mistura de fórmulas: Por ser muito comum e barato, muitos pacientes tomam xaropes com Dropropizina junto com antialérgicos orais (Loratadina/Dexclorfeniramina). A soma dos efeitos pode deixar o paciente muito sonolento durante o dia.', es: 'Evite la mezcla de fórmulas: Por ser muy común, muchos pacientes toman Dropropizina junto con antialérgicos orales. La suma de los efectos puede dejar al paciente muy somnoliento durante el día.' }
      }
    },

    /* ── CLOPERASTINA ───────────────────────────────────────────────────── */
    "cloperastina": {
      name: { pt: 'Cloperastina', es: 'Cloperastina' },
      category: 'pneumologia',
      class: { pt: 'Antitussígeno Misto (Ação Central e Periférica)', es: 'Antitusivo Mixto (Acción Central y Periférica)' },
      indications: {
        pt: ['Tosse seca de predomínio noturno', 'Tosse de origem alérgica (por sua atividade anti-histamínica associada)'],
        es: ['Tos seca de predominio nocturno', 'Tos de origen alérgico (por su actividad antihistamínica asociada)']
      },
      commercialNames: { br: ['Seki'], ar: ['Sek'] },
      presentation: { pt: ['Xarope 3,54 mg/mL', 'Suspensão/Gotas'], es: ['Jarabe 3,54 mg/mL', 'Suspensión/Gotas'] },
      mechanism: {
        pt: 'Fármaco de "Duplo Combate". Ele age no Centro da Tosse no cérebro (inibindo o espasmo) e possui um bloqueio Anti-histamínico H1 e espasmolítico nos brônquios. É perfeito para aquela tosse seca que ataca quando o paciente deita na cama para dormir e a alergia/coriza escorre pela garganta (Gotejamento Pós-Nasal).',
        es: 'Fármaco de "Doble Combate". Actúa en el Centro de la Tos en el cerebro y posee un bloqueo Antihistamínico H1 y espasmolítico en los bronquios. Es perfecto para aquella tos seca que ataca cuando el paciente se acuesta para dormir y la alergia escurre por la garganta (Goteo Posnasal).'
      },
      dose: {
        adult: {
          pt: '10 mL (1 copo-medida) via oral, 3 vezes ao dia.',
          es: '10 mL (1 vaso-medida) vía oral, 3 veces al día.'
        },
        pediatric: {
          pt: 'Crianças de 2 a 12 anos: 0,5 a 1 mg/kg/dia divididos em 3 tomadas.',
          es: 'Niños de 2 a 12 años: 0,5 a 1 mg/kg/día divididos en 3 tomas.'
        }
      },
      administration: { pt: ['Via oral. Ideal se administrado à noite antes de dormir devido ao seu leve efeito sedativo benéfico.'], es: ['Vía oral. Ideal si administrado a la noche antes de dormir debido a su leve efecto sedante benéfico.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste estrito.', es: 'Sin necesidad de ajuste estricto.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Metabolizado no fígado, precaução na cirrose.', es: 'Metabolizado en hígado, precaución en cirrosis.' } },
      commonAdverseEffects: { pt: ['Sonolência (efeito do bloqueio H1)', 'Boca seca', 'Tontura leve'], es: ['Somnolencia (efecto del bloqueo H1)', 'Boca seca', 'Mareo leve'] },
      dangerousAdverseEffects: { pt: ['Retenção urinária (em pacientes com hiperplasia prostática devido ao efeito anticolinérgico)'], es: ['Retención urinaria (en pacientes con hiperplasia prostática debido al efecto anticolinérgico)'] },
      contraindications: {
        absolute: { pt: ['Crianças menores de 2 anos', 'Tosse associada à asma descompensada ou produtiva abundante'], es: ['Niños menores de 2 años', 'Tos asociada al asma descompensada o productiva abundante'] },
        relative: { pt: ['Glaucoma', 'Idosos com demência avançada (risco de delírio anticolinérgico)'], es: ['Glaucoma', 'Ancianos con demencia avanzada (riesgo de delirio anticolinérgico)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'SEDAÇÃO INTENCIONAL: Como tem efeito anti-histamínico, a Cloperastina "dá um soninho". Oriente pacientes adultos a terem cautela ao operar máquinas pesadas ou dirigir após tomarem a dose da manhã.', es: 'SEDACIÓN INTENCIONAL: Como tiene efecto antihistamínico, la Cloperastina "da un sueñito". Oriente a pacientes adultos a tener precaución al operar máquinas pesadas tras la dosis de la mañana.' }
      }
    },

    /* ── BUTAMIRATO ─────────────────────────────────────────────────────── */
    "butamirato": {
      name: { pt: 'Butamirato (Citrato de)', es: 'Butamirato (Citrato de)' },
      category: 'pneumologia',
      class: { pt: 'Antitussígeno Central Não-Opioide', es: 'Antitusivo Central No Opioide' },
      indications: {
        pt: ['Tosse seca aguda (frequentemente usado no período pré e pós-operatório ou laringoscopia para suprimir reflexo tossígeno)'],
        es: ['Tos seca aguda (frecuentemente usado en periodo pre y posoperatorio o laringoscopia para suprimir reflejo tusígeno)']
      },
      commercialNames: { br: ['Sintocalmy', 'Besedan'], ar: ['Sintus'] },
      presentation: { pt: ['Xarope 1,5 mg/mL', 'Gotas 5 mg/mL'], es: ['Jarabe 1,5 mg/mL', 'Gotas 5 mg/mL'] },
      mechanism: {
        pt: 'Atua no sistema nervoso central para inibir a tosse, mas é química e farmacologicamente totalmente diferente dos alcaloides opioides (como a codeína). Além de parar a tosse no bulbo, ele possui um efeito broncoespasmolítico leve adicional (ajuda a dar uma pequena relaxada no brônquio) e reduz a resistência das vias aéreas.',
        es: 'Actúa en el sistema nervioso central para inhibir la tos, pero es química y farmacológicamente diferente a los opioides (como la codeína). Además de parar la tos en el bulbo, posee un efecto broncoespasmolítico leve adicional y reduce la resistencia de las vías respiratorias.'
      },
      dose: {
        adult: {
          pt: 'Xarope: 15 mL (1 copo) 3 a 4 vezes ao dia.',
          es: 'Jarabe: 15 mL (1 vaso) 3 a 4 veces al día.'
        },
        pediatric: {
          pt: '3 a 6 anos: 5 mL 3x/dia. 6 a 12 anos: 10 mL 3x/dia.',
          es: '3 a 6 años: 5 mL 3x/día. 6 a 12 años: 10 mL 3x/día.'
        }
      },
      administration: { pt: ['Via oral pura. Não deve ser usado por longos períodos (máximo 7 dias).'], es: ['Vía oral pura. No debe ser usado por largos periodos (máximo 7 días).'] },
      renalAdjustment: { required: false, message: { pt: 'Depuração renal de metabólitos inativos. Sem necessidade de ajuste agressivo.', es: 'Depuración renal de metabolitos inactivos. Sin necesidad de ajuste agresivo.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste clínico agudo.', es: 'Sin necesidad de ajuste clínico agudo.' } },
      commonAdverseEffects: { pt: ['Sonolência passageira', 'Vertigem', 'Exantema (vermelhidão na pele)'], es: ['Somnolencia pasajera', 'Vértigo', 'Exantema (enrojecimiento de la piel)'] },
      dangerousAdverseEffects: { pt: ['Hipotensão (se superdosagem)'], es: ['Hipotensión (si sobredosis)'] },
      contraindications: {
        absolute: { pt: ['Gravidez (Primeiro Trimestre) e Lactação', 'Tosse Produtiva intensa'], es: ['Embarazo (Primer Trimestre) y Lactancia', 'Tos Productiva intensa'] },
        relative: { pt: ['Nenhuma expressiva dentro da dose segura'], es: ['Ninguna expresiva dentro de la dosis segura'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'A grande vantagem do Butamirato sobre a Codeína/Dextrometorfano é a ausência absoluta de depressão respiratória. Pode ser usado com segurança em pacientes com pulmões limite (asma leve) que desenvolveram tosse irritativa por mudança de tempo.', es: 'La gran ventaja del Butamirato sobre Codeína es la ausencia absoluta de depresión respiratoria. Puede ser usado con seguridad en pacientes con asma leve que desarrollaron tos irritativa por cambio de tiempo.' }
      }
    },

    /* ── LORATADINA ─────────────────────────────────────────────────────── */
    "loratadina": {
      "name": {
        "pt": "Loratadina",
        "es": "Loratadina"
      },
      "category": "alergia",
      "class": {
        "pt": "Anti-histamínico H1 de segunda geração",
        "es": "Antihistamínico H1 de segunda generación"
      },
      "indications": {
        "pt": [
          "Rinite alérgica",
          "Sintomas de alergia respiratória"
        ],
        "es": [
          "Rinitis alérgica",
          "Síntomas de alergia respiratoria"
        ]
      },
      "mechanism": {
        "pt": "Antagonista/inverso agonista periférico H1, geralmente pouco sedativo em doses usuais.",
        "es": "Antagonista/agonista inverso periférico H1, generalmente poco sedante a dosis habituales."
      },
      "dose": {
        "adult": {
          "pt": "Adultos e ≥6 anos: 10 mg VO 1x/dia.",
          "es": "Adultos y ≥6 años: 10 mg VO 1 vez/día."
        },
        "pediatric": {
          "pt": "2–5 anos: 5 mg VO 1x/dia em formulação pediátrica; <2 anos depende de produto/indicação.",
          "es": "2–5 años: 5 mg VO 1 vez/día en formulación pediátrica; <2 años depende de producto/indicación."
        }
      },
      "administration": {
        "pt": [
          "VO 1x/dia",
          "Não exceder a dose; doses acima do recomendado podem causar sonolência"
        ],
        "es": [
          "VO 1 vez/día",
          "No exceder la dosis; dosis superiores a la recomendada pueden causar somnolencia"
        ]
      },
      "renalAdjustment": {
        "required": true,
        "message": {
          "pt": "Doença renal pode exigir intervalo/dose diferente; individualizar conforme produto e gravidade.",
          "es": "La enfermedad renal puede requerir intervalo/dosis diferente; individualizar según producto y gravedad."
        }
      },
      "hepaticAdjustment": {
        "required": true,
        "message": {
          "pt": "Hepatopatia pode exigir intervalo/dose diferente; individualizar.",
          "es": "La hepatopatía puede requerir intervalo/dosis diferente; individualizar."
        }
      },
      "commonAdverseEffects": {
        "pt": [
          "Cefaleia",
          "Sonolência ocasional"
        ],
        "es": [
          "Cefalea",
          "Somnolencia ocasional"
        ]
      },
      "dangerousAdverseEffects": {
        "pt": [
          "Reação de hipersensibilidade rara"
        ],
        "es": [
          "Reacción de hipersensibilidad rara"
        ]
      },
      "contraindications": {
        "absolute": {
          "pt": [
            "Hipersensibilidade"
          ],
          "es": [
            "Hipersensibilidad"
          ]
        },
        "relative": {
          "pt": [
            "DRC, hepatopatia"
          ],
          "es": [
            "ERC, hepatopatía"
          ]
        }
      },
      "safetyFlags": {
        "bleedingRisk": false,
        "renalHighRisk": false,
        "hepaticCaution": true,
        "antidoteAvailable": false,
        "highAlertMedication": false,
        "warning": {
          "pt": "Em doença renal ou hepática, a dose/intervalo pode precisar de ajuste; evitar automedicação acima de 10 mg/dia.",
          "es": "En enfermedad renal o hepática, la dosis/intervalo puede requerir ajuste; evitar automedicación por encima de 10 mg/día."
        }
      }
    },


    /* ── BUILD 397 — Associações Inalatórias: ICS/LABA + LAMA/LABA ── */

    "beclometasona_formoterol": {
      name: { pt: 'Beclometasona + Formoterol', es: 'Beclometasona + Formoterol' },
      category: 'pneumologia',
      class: { pt: 'Associação Corticosteroide Inalatório + Agonista Beta-2 (ICS/LABA)', es: 'Asociación Corticosteroide Inhalatorio + Agonista Beta-2 (ICS/LABA)' },
      indications: {
        pt: ['Estratégia MART (Manutenção e Resgate da Asma) - Droga Ouro GINA', 'Manutenção crônica da DPOC severa'],
        es: ['Estrategia MART (Mantenimiento y Rescate del Asma) - Droga Oro GINA', 'Mantenimiento crónico de la EPOC severa']
      },
      commercialNames: { br: ['Fostair'], ar: ['Foster'] },
      presentation: { pt: ['Spray Inalatório HFA 100/6 mcg e 200/6 mcg por jato', 'Pó Inalatório (NEXThaler)'], es: ['Spray Inhalatorio HFA 100/6 mcg y 200/6 mcg por puff', 'Polvo Inhalatorio (NEXThaler)'] },
      mechanism: {
        pt: 'Uma obra de arte da nanotecnologia. A formulação HFA desta associação cria partículas "extrafinas". Enquanto as bombinhas comuns ficam presas na garganta e grandes brônquios, essa medicação penetra profundamente nas "pequenas vias aéreas" (bronquíolos distais), que são o epicentro silencioso da inflamação asmática. O formoterol abre o caminho em 3 minutos, e a beclometasona extrafina apaga o fogo pulmonar profundo.',
        es: 'Una obra de arte de la nanotecnología. La formulación HFA crea partículas "extrafinas". Mientras los inhaladores comunes se atascan en la garganta, esta medicación penetra profundamente en las "pequeñas vías aéreas" (bronquiolos distales). El formoterol abre el camino en 3 minutos, y la beclometasona apaga el fuego.'
      },
      dose: {
        adult: {
          pt: 'Asma (Manutenção): 1 a 2 inalações a cada 12 horas. Asma (MART Resgate): 1 jato extra sob demanda na crise (Máx 8 jatos/dia).',
          es: 'Asma (Mantenimiento): 1 a 2 inhalaciones cada 12 horas. Asma (MART Rescate): 1 puff extra a demanda en la crisis (Máx 8 puffs/día).'
        },
        pediatric: {
          pt: 'Não recomendado rotineiramente < 18 anos na formulação extrafina, embora uso off-label especializado exista.',
          es: 'No recomendado rutinariamente < 18 años en formulación extrafina, aunque existe uso off-label especializado.'
        }
      },
      administration: { pt: ['Higiene oral rigorosa após o uso para evitar candidíase. Quando usado em spray (HFA), recomenda-se uso de espaçador para otimizar ainda mais o depósito.'], es: ['Higiene oral rigurosa tras el uso para evitar candidiasis. Cuando se usa en spray (HFA), se recomienda uso de espaciador.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste clínico.', es: 'Sin necesidad de ajuste clínico.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Ajuste mínimo, metabolismo local pulmonar elevado.', es: 'Ajuste mínimo, metabolismo local pulmonar elevado.' } },
      commonAdverseEffects: { pt: ['Candidíase orofaríngea', 'Tremores (pelo formoterol) e palpitação', 'Disfonia'], es: ['Candidiasis orofaríngea', 'Temblores (por formoterol) y palpitación', 'Disfonía'] },
      dangerousAdverseEffects: { pt: ['Pneumonia em idosos com DPOC', 'Hipocalemia (se abuso de resgates)'], es: ['Neumonía en ancianos con EPOC', 'Hipopotasemia (si abuso de rescates)'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade grave aos ativos'], es: ['Hipersensibilidad grave a los activos'] },
        relative: { pt: ['Cardiopatias descompensadas (limitar os jatos de resgate)'], es: ['Cardiopatías descompensadas (limitar los puffs de rescate)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'ALERTA DE DOSE: Como a partícula é extrafina e chega 100% ao pulmão, 100 mcg de Beclometasona extrafina equivalem à força de 250 mcg da Beclometasona comum (Clenil). Nunca dobre a dose achando que "100 é pouco".', es: 'ALERTA DE DOSIS: Como la partícula es extrafina, 100 mcg de Beclometasona extrafina equivalen a la fuerza de 250 mcg de Beclometasona común. Nunca doble la dosis creyendo que "100 es poco".' }
      }
    },

    "fluticasona_salmeterol": {
      name: { pt: 'Fluticasona + Salmeterol', es: 'Fluticasona + Salmeterol' },
      category: 'pneumologia',
      class: { pt: 'Associação Corticosteroide Inalatório + Agonista Beta-2 (ICS/LABA)', es: 'Asociación Corticosteroide Inhalatorio + Agonista Beta-2 (ICS/LABA)' },
      indications: {
        pt: ['Tratamento de MANUTENÇÃO (Prevenção) da Asma Crônica', 'Tratamento de DPOC grave com exacerbações'],
        es: ['Tratamiento de MANTENIMIENTO (Prevención) del Asma Crónica', 'Tratamiento de EPOC grave con exacerbaciones']
      },
      commercialNames: { br: ['Seretide'], ar: ['Seretide'] },
      presentation: { pt: ['Spray Inalatório 50/25, 125/25, 250/25 mcg', 'Pó inalatório (Diskus) 100/50, 250/50, 500/50 mcg'], es: ['Spray Inhalatorio 50/25, 125/25, 250/25 mcg', 'Polvo inhalatorio (Diskus) 100/50, 250/50, 500/50 mcg'] },
      mechanism: {
        pt: 'A associação pioneira mais famosa do mundo. A Fluticasona é um corticoide potente que fica "grudado" no pulmão agindo por 12 horas. O Salmeterol é um broncodilatador de cauda longa que mantém as vias aéreas abertas por 12 horas. O grande detalhe clínico: o Salmeterol demora meia hora para abrir o brônquio. Logo, essa bombinha não serve para crise aguda de sufocamento.',
        es: 'La asociación pionera más famosa del mundo. La Fluticasona es un corticoide potente que queda "pegado" en el pulmón. El Salmeterol es un broncodilatador de cola larga que mantiene las vías abiertas por 12 horas. El gran detalle clínico: el Salmeterol tarda media hora en abrir el bronquio. Luego, este inhalador no sirve para crisis aguda.'
      },
      dose: {
        adult: {
          pt: 'Spray: 2 jatos a cada 12 horas. Diskus: 1 inalação a cada 12 horas.',
          es: 'Spray: 2 puffs cada 12 horas. Diskus: 1 inhalación cada 12 horas.'
        },
        pediatric: {
          pt: 'Acima de 4 anos: Spray 50/25 mcg (2 jatos 12/12h) ou Diskus 100/50 (1 inalação 12/12h).',
          es: 'Por encima de 4 años: Spray 50/25 mcg (2 puffs 12/12h) o Diskus 100/50 (1 inhalación 12/12h).'
        }
      },
      administration: { pt: ['Lavagem orofaríngea rigorosa após uso. JAMAIS aumentar as doses ou intervalos por conta própria na crise.'], es: ['Lavado orofaríngeo riguroso tras uso. JAMÁS aumentar las dosis o intervalos por cuenta propia en la crisis.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade.', es: 'Sin necesidad.' } },
      hepaticAdjustment: { required: true, message: { pt: 'O metabolismo da fluticasona engolida depende 100% do fígado. Cautela severa em cirrose descompensada.', es: 'El metabolismo de la fluticasona tragada depende 100% del hígado. Cautela severa en cirrosis descompensada.' } },
      commonAdverseEffects: { pt: ['Candidíase oral e rouquidão (A Fluticasona é o ICS que mais causa isso pela sua alta lipofilicidade nas cordas vocais)', 'Cefaleia'], es: ['Candidiasis oral y ronquera (La Fluticasona es el ICS que más causa esto por su alta lipofilicidad en las cuerdas vocales)', 'Cefalea'] },
      dangerousAdverseEffects: { pt: ['Pneumonia em DPOC', 'Crise asmática fatal por uso errado como resgate'], es: ['Neumonía en EPOC', 'Crisis asmática fatal por uso erróneo como rescate'] },
      contraindications: {
        absolute: { pt: ['Alívio imediato do broncoespasmo agudo (Status Asthmaticus)'], es: ['Alivio inmediato del broncoespasmo agudo (Status Asthmaticus)'] },
        relative: { pt: ['Pacientes com infecção oral/fúngica ativa', 'Uso de Inibidores de Protease do HIV (Ritonavir)'], es: ['Pacientes con infección oral/fúngica activa', 'Uso de Inhibidores de Proteasa del VIH (Ritonavir)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'DIFERENÇA VITAL: O paciente DEVE ENTENDER a diferença entre "Manutenção" e "Resgate". O Seretide (Salmeterol) NÃO É MART. Se ele tiver falta de ar e puxar o Seretide, a droga vai demorar 30 minutos para agir, tempo suficiente para morrer asfixiado. O paciente PRECISA ter um Salbutamol separado no bolso.', es: 'DIFERENCIA VITAL: El paciente DEBE ENTENDER la diferencia entre "Mantenimiento" y "Rescate". Seretide NO ES MART. Si tiene falta de aire y usa Seretide, tardará 30 min en actuar. El paciente NECESITA tener un Salbutamol separado.' }
      }
    },

    "fluticasona_vilanterol": {
      name: { pt: 'Fluticasona (Furoato) + Vilanterol', es: 'Fluticasona (Furoato) + Vilanterol' },
      category: 'pneumologia',
      class: { pt: 'Associação Corticosteroide Inalatório + Ultra-LABA (ICS/LABA de Ação Ultra-Longa)', es: 'Asociación Corticosteroide Inhalatorio + Ultra-LABA (ICS/LABA de Acción Ultra Larga)' },
      indications: {
        pt: ['Asma em adultos e adolescentes a partir de 12 anos', 'Doença Pulmonar Obstrutiva Crônica (DPOC) em pacientes que exigem combo ICS/LABA'],
        es: ['Asma en adultos y adolescentes a partir de 12 años', 'Enfermedad Pulmonar Obstructiva Crónica (EPOC) en pacientes que exigen combo ICS/LABA']
      },
      commercialNames: { br: ['Relvar Ellipta'], ar: ['Relvar'] },
      presentation: { pt: ['Pó Inalatório (Dispositivo Ellipta) 100/22 mcg e 200/22 mcg'], es: ['Polvo Inhalatorio (Dispositivo Ellipta) 100/22 mcg y 200/22 mcg'] },
      mechanism: {
        pt: 'A evolução máxima para os esquecidos. A mudança química de "Propionato" para "Furoato" de Fluticasona fez com que o corticoide ficasse ativo por incríveis 24 horas ininterruptas. Somado ao Vilanterol (Ultra-LABA de 24 horas), esta caneta fornece o tratamento basal inteiro de um dia com um único clique e inalação. Aumentou a adesão do paciente drasticamente.',
        es: 'La evolución máxima para los olvidadizos. El cambio químico de "Propionato" a "Furoato" hizo que el corticoide quede activo por increíbles 24 horas. Sumado al Vilanterol (Ultra-LABA), esta pluma provee el tratamiento basal entero de un día con un solo clic.'
      },
      dose: {
        adult: {
          pt: '1 inalação (100/22 ou 200/22 mcg) UMA VEZ ao dia, sempre na mesma hora do dia.',
          es: '1 inhalación (100/22 o 200/22 mcg) UNA VEZ al día, siempre a la misma hora del día.'
        },
        pediatric: {
          pt: 'Adolescentes > 12 anos: 1 inalação de 100/22 mcg UMA VEZ ao dia.',
          es: 'Adolescentes > 12 años: 1 inhalación de 100/22 mcg UNA VEZ al día.'
        }
      },
      administration: { pt: ['Abra o bocal, inspire fortemente e feche. Não é necessário segurar a respiração de forma asfixiante, mas profunda. Lavar a boca e bochecho obrigatórios.'], es: ['Abra la boquilla, inspire fuertemente y cierre. Lavar la boca y enjuague obligatorios.'] },
      renalAdjustment: { required: false, message: { pt: 'Nenhum ajuste sistêmico requerido.', es: 'Ningún ajuste sistémico requerido.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Pacientes com doença hepática moderada ou grave não devem ultrapassar a dose de 100/22 mcg/dia (risco de supressão adrenal sistêmica pela fluticasona).', es: 'Pacientes con enfermedad hepática moderada/grave no deben superar dosis de 100/22 mcg/día.' } },
      commonAdverseEffects: { pt: ['Candidíase orofaríngea (Extremamente comum se o paciente não lavar a boca e cuspir a água)', 'Faringite e Cefaleia'], es: ['Candidiasis orofaríngea (Extremamente común si el paciente no lava la boca y escupe el agua)', 'Faringitis y Cefalea'] },
      dangerousAdverseEffects: { pt: ['Maior incidência de pneumonia severa documentada em pacientes idosos com DPOC avançada.'], es: ['Mayor incidencia de neumonía severa documentada en pacientes ancianos con EPOC avanzada.'] },
      contraindications: {
        absolute: { pt: ['Tratamento de asma como medicação de resgate agudo', 'Crianças menores de 12 anos'], es: ['Tratamiento de asma como medicación de rescate agudo', 'Niños menores de 12 años'] },
        relative: { pt: ['Tuberculose latente/ativa, infecção fúngica'], es: ['Tuberculosis latente/activa, infección fúngica'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'CUIDADO: Se o paciente sentir falta de ar crônica à tarde, NUNCA prescreva para ele inalar "mais uma dose" de Relvar. A medicação já está atuando 24 horas no receptor. Usar uma segunda dose causará toxicidade cardíaca e acúmulo de corticoide, sem melhora respiratória.', es: 'CUIDADO: Si el paciente siente falta de aire a la tarde, NUNCA prescriba inhalar "una dosis más" de Relvar. La medicación ya actúa 24 horas. Usar una segunda dosis causará toxicidad cardíaca.' }
      }
    },

    "umeclidinio_vilanterol": {
      name: { pt: 'Umeclidínio + Vilanterol', es: 'Umeclidinio + Vilanterol' },
      category: 'pneumologia',
      class: { pt: 'Associação LAMA + Ultra-LABA (Dupla Broncodilatação Sem Corticoide)', es: 'Asociación LAMA + Ultra-LABA (Doble Broncodilatación Sin Corticoide)' },
      indications: {
        pt: ['Terapia broncodilatadora de manutenção contínua da DPOC (A escolha inicial moderna para pacientes muito sintomáticos sem excesso de inflamação)'],
        es: ['Terapia broncodilatadora de mantenimiento continuo de la EPOC (La elección inicial moderna para pacientes muy sintomáticos sin exceso de inflamación)']
      },
      commercialNames: { br: ['Anoro Ellipta'], ar: ['Anoro'] },
      presentation: { pt: ['Pó Inalatório (Dispositivo Ellipta) 62,5/25 mcg'], es: ['Polvo Inhalatorio (Dispositivo Ellipta) 62,5/25 mcg'] },
      mechanism: {
        pt: 'A "Britadeira" do DPOC. A associação de um anticolinérgico de ação ultra-longa (LAMA - Umeclidínio) com um agonista beta-2 ultra-longo (Ultra-LABA - Vilanterol) causa o grau MÁXIMO de abertura física do brônquio que a medicina moderna conhece, bloqueando a contração vagal e ativando o relaxamento beta simultaneamente por 24 horas, tudo ISSO SEM USAR CORTICOIDES (protegendo o paciente DPOC de pneumonias).',
        es: 'El "Taladro" del EPOC. La asociación de un anticolinérgico LAMA con un Ultra-LABA causa el grado MÁXIMO de apertura física del bronquio que la medicina conoce, todo ESTO SIN USAR CORTICOIDES (protegiendo al EPOC de neumonías).'
      },
      dose: {
        adult: {
          pt: '1 inalação UMA VEZ ao dia.',
          es: '1 inhalación UNA VEZ al día.'
        },
        pediatric: {
          pt: 'Uso vetado em pediatria e no tratamento da asma.',
          es: 'Uso vetado en pediatría y en el tratamiento del asma.'
        }
      },
      administration: { pt: ['Uso inalatório via Ellipta.'], es: ['Uso inhalatorio vía Ellipta.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste clínico.', es: 'Sin necesidad de ajuste clínico.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Uso cauteloso em falência severa (ausência de dados concretos).', es: 'Uso cauteloso en falla severa.' } },
      commonAdverseEffects: { pt: ['Boca seca (Xerostomia) e gosto alterado', 'Dor de cabeça e tosse inicial', 'Dor nas costas (Lombalgia espasmódica)'], es: ['Boca seca (Xerostomía) y sabor alterado', 'Dolor de cabeza y tos inicial', 'Dolor de espalda (Lumbalgia espasmódica)'] },
      dangerousAdverseEffects: { pt: ['Fibrilação Atrial e arritmias paradoxais', 'Retenção urinária severa em idosos prostáticos', 'Glaucoma agudo precipitado'], es: ['Fibrilación Auricular y arritmias paradójicas', 'Retención urinaria severa en ancianos prostáticos', 'Glaucoma agudo precipitado'] },
      contraindications: {
        absolute: { pt: ['Tratamento de pacientes com ASMA (Se prescrito para asmático, mascara a inflamação e leva ao choque asmático letal)'], es: ['Tratamiento de pacientes con ASMA (Si prescrito para asmático, enmascara la inflamación y lleva a choque asmático letal)'] },
        relative: { pt: ['Hiperplasia prostática benigna sintomática', 'Alergia severa à lactose da formulação'], es: ['Hiperplasia prostática benigna sintomática', 'Alergia severa a la lactosa de la formulación'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'DIFERENCIAL DPOC vs ASMA: Essa medicação JAMAIS deve ser usada na Asma. A DPOC é uma doença de destruição arquitetônica (precisa abrir a via). A Asma é uma doença celular inflamatória (precisa de corticoide). Usar Anoro num asmático é dilatar o pulmão inflamado até ele colapsar repentinamente.', es: 'DIFERENCIAL EPOC vs ASMA: Esta medicación JAMÁS debe ser usada en el Asma. El EPOC necesita abrir la vía. El Asma necesita corticoide. Usar Anoro en un asmático es dilatar el pulmón inflamado hasta que colapsa repentinamente.' }
      }
    },

    "tiotropio_olodaterol": {
      name: { pt: 'Tiotrópio + Olodaterol', es: 'Tiotropio + Olodaterol' },
      category: 'pneumologia',
      class: { pt: 'Associação LAMA + Ultra-LABA (Dupla Broncodilatação Contínua)', es: 'Asociación LAMA + Ultra-LABA (Doble Broncodilatación Continua)' },
      indications: {
        pt: ['Terapia de manutenção a longo prazo para o alívio profundo de sintomas na Doença Pulmonar Obstrutiva Crônica (DPOC)'],
        es: ['Terapia de mantenimiento a largo plazo para el alivio profundo de síntomas en la Enfermedad Pulmonar Obstructiva Crónica (EPOC)']
      },
      commercialNames: { br: ['Spiolto Respimat'], ar: ['Spiolto'] },
      presentation: { pt: ['Solução inalante por névoa suave (Respimat) 2,5/2,5 mcg por jato'], es: ['Solución inhalante por niebla suave (Respimat) 2,5/2,5 mcg por puff'] },
      mechanism: {
        pt: 'A associação do LAMA padrão-ouro (Tiotrópio) com um LABA de ação em 5 minutos (Olodaterol). O grande truque de genialidade deste fármaco não está apenas na molécula, mas no DISPOSITIVO (Respimat). O Respimat não usa "gás de espirro" nem "pó seco". Ele gera uma "névoa em câmera lenta". Pacientes idosos com DPOC avançada frequentemente não têm força muscular para puxar o pó do inalador. A névoa suave do Respimat entra no pulmão do idoso frágil sem exigir nenhum esforço pulmonar.',
        es: 'La asociación del LAMA patrón oro (Tiotropio) con un LABA rápido (Olodaterol). El gran truco de genialidad no está solo en la molécula, sino en el DISPOSITIVO (Respimat). Genera una "niebla en cámara lenta". Pacientes ancianos con EPOC avanzada frecuentemente no tienen fuerza para tirar el polvo. La niebla entra sin esfuerzo.'
      },
      dose: {
        adult: {
          pt: '2 jatos (duas inalações consecutivas) UMA VEZ ao dia.',
          es: '2 puffs (dos inhalaciones consecutivas) UNA VEZ al día.'
        },
        pediatric: {
          pt: 'Uso não indicado.',
          es: 'Uso no indicado.'
        }
      },
      administration: { pt: ['Não agitar bruscamente o aparelho. Rodar a base, abrir a tampa, pressionar o botão e inalar lentamente a névoa.'], es: ['No agitar bruscamente. Girar la base, abrir la tapa, presionar el botón e inhalar lentamente.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste para a dose terapêutica.', es: 'Sin necesidad de ajuste para la dosis terapéutica.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem ajuste clínico.', es: 'Sin ajuste clínico.' } },
      commonAdverseEffects: { pt: ['Boca seca', 'Tontura leve após a aplicação', 'Nasofaringite'], es: ['Boca seca', 'Mareo leve tras la aplicación', 'Nasofaringitis'] },
      dangerousAdverseEffects: { pt: ['Descompensação de Glaucoma (Se a névoa for jogada nos olhos acidentalmente)', 'Arritmias supraventriculares (Fibrilação) em pacientes de alto risco isquêmico'], es: ['Descompensación de Glaucoma (Si la niebla cae en los ojos)', 'Arritmias supraventriculares (Fibrilación)'] },
      contraindications: {
        absolute: { pt: ['Tratamento agudo de asfixia (A droga é de manutenção)', 'Asma brônquica (Monoterapia sem corticoide mata o asmático)'], es: ['Tratamiento agudo de asfixia', 'Asma bronquial (Monoterapia sin corticoide mata al asmático)'] },
        relative: { pt: ['Hiperplasia prostática benigna severa (retenção hídrica cruzada)'], es: ['Hiperplasia prostática benigna severa (retención hídrica cruzada)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'SÓ DEPENDE DO CORPO: O paciente geriátrico frequentemente joga todo o remédio do spray de asma comum na parede da boca por falta de coordenação (bater o botão e puxar o ar junto). Com o Respimat, a nuvem dura quase 2 segundos no ar. Ele tem tempo de sobra para respirar. Ensine-o a usar a tecnologia a seu favor.', es: 'SOLO DEPENDE DEL CUERPO: El paciente geriátrico frecuentemente tira todo el remedio del spray en la boca por falta de coordinación. Con Respimat, la nube dura casi 2 segundos. Tiene tiempo de sobra para respirar.' }
      }
    },


    /* ── BUILD 398 — LAMA/LABA Duplo + Terapias Triplas + Antifibrótico ── */

    "glicopirronio_indacaterol": {
      name: { pt: 'Glicopirrônio + Indacaterol', es: 'Glicopirronio + Indacaterol' },
      category: 'pneumologia',
      class: { pt: 'Associação LAMA + Ultra-LABA', es: 'Asociación LAMA + Ultra-LABA' },
      indications: {
        pt: ['Terapia broncodilatadora de manutenção contínua da DPOC moderada a grave para alívio de sintomas e redução de exacerbações'],
        es: ['Terapia broncodilatadora de mantenimiento continuo de la EPOC moderada a grave para alivio de síntomas y reducción de exacerbaciones']
      },
      commercialNames: { br: ['Ultibro Breezhaler'], ar: ['Ultibro'] },
      presentation: { pt: ['Cápsulas com pó inalatório 50/110 mcg'], es: ['Cápsulas con polvo inhalatorio 50/110 mcg'] },
      mechanism: {
        pt: 'Associação dupla de longa ação que ataca a DPOC por duas vias distintas de broncodilatação sem envolver corticoides. O Glicopirrônio (LAMA) bloqueia os receptores muscarínicos M3, inibindo o tônus vagal e secando o catarro. O Indacaterol (LABA) estimula os receptores beta-2, promovendo o relaxamento direto do músculo liso brônquico por exatas 24 horas.',
        es: 'Asociación doble de larga acción que ataca la EPOC por dos vías de broncodilatación sin involucrar corticoides. El Glicopirronio (LAMA) bloquea los receptores muscarínicos M3, inhibiendo el tono vagal. El Indacaterol (LABA) estimula los receptores beta-2, promoviendo la relajación directa del músculo liso bronquial por exactas 24 horas.'
      },
      dose: {
        adult: {
          pt: 'Inalar o conteúdo de 1 cápsula UMA VEZ ao dia, usando o dispositivo Breezhaler.',
          es: 'Inhalar el contenido de 1 cápsula UNA VEZ al día, usando el dispositivo Breezhaler.'
        },
        pediatric: {
          pt: 'Uso não indicado em crianças (Exclusivo para DPOC).',
          es: 'Uso no indicado en niños (Exclusivo para EPOC).'
        }
      },
      administration: { pt: ['O paciente escuta um "zumbido" peculiar da cápsula girando dentro do dispositivo durante a inalação forte, o que serve como confirmação técnica de que o pó está descendo.'], es: ['El paciente escucha un "zumbido" peculiar de la cápsula girando dentro del dispositivo durante la inhalación, lo que sirve como confirmación técnica.'] },
      renalAdjustment: { required: true, message: { pt: 'Pacientes com falência renal grave (ClCr < 30) acumulam o Glicopirrônio. Usar apenas se o benefício superar o risco agudo anticolinérgico.', es: 'Pacientes con falla renal grave (ClCr < 30) acumulan Glicopirronio. Usar solo si el beneficio supera el riesgo anticolinérgico agudo.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem ajuste clínico.', es: 'Sin ajuste clínico.' } },
      commonAdverseEffects: { pt: ['Tosse reflexa imediata à inalação (pelo Indacaterol)', 'Boca seca', 'Nasofaringite'], es: ['Tos refleja inmediata a la inhalación (por Indacaterol)', 'Boca seca', 'Nasofaringitis'] },
      dangerousAdverseEffects: { pt: ['Glaucoma agudo de ângulo fechado', 'Retenção urinária severa induzida'], es: ['Glaucoma agudo de ángulo cerrado', 'Retención urinaria severa inducida'] },
      contraindications: {
        absolute: { pt: ['Asma brônquica (Não usar LABA sem ICS em asma)', 'Resgate de broncoespasmo agudo'], es: ['Asma bronquial (No usar LABA sin ICS en asma)', 'Rescate de broncoespasmo agudo'] },
        relative: { pt: ['Hiperplasia Prostática Benigna Severa'], es: ['Hiperplasia Prostática Benigna Severa'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'A regra de ouro da DPOC moderna é "Desinflar" (tirar o ar preso) maximizando a broncodilatação sem usar corticoides sistêmicos/inalatórios para evitar pneumonias lobares, tornando o Ultibro e o Anoro as pedras angulares do pneumologista.', es: 'La regla de oro de la EPOC moderna es "Desinflar" maximizando la broncodilatación sin usar corticoides para evitar neumonías lobares.' }
      }
    },

    "budesonida_glicopirronio_formoterol": {
      name: { pt: 'Budesonida + Glicopirrônio + Formoterol', es: 'Budesonida + Glicopirronio + Formoterol' },
      category: 'pneumologia',
      class: { pt: 'Terapia Tripla Inalatória (ICS + LAMA + LABA)', es: 'Terapia Triple Inhalatoria (ICS + LAMA + LABA)' },
      indications: {
        pt: ['Doença Pulmonar Obstrutiva Crônica (DPOC) grave em pacientes não controlados com terapia dupla'],
        es: ['Enfermedad Pulmonar Obstructiva Crónica (EPOC) grave en pacientes no controlados con terapia doble']
      },
      commercialNames: { br: ['Breztri Aerosphere'], ar: ['Trixeo'] },
      presentation: { pt: ['Spray Inalatório pressurizado (Aerosphere) 160/7,2/4,8 mcg por jato'], es: ['Spray Inhalatorio presurizado (Aerosphere) 160/7,2/4,8 mcg por puff'] },
      mechanism: {
        pt: 'O ataque em três frentes. Esta bombinha usa a tecnologia "Aerosphere", que envolve as moléculas das 3 drogas em microesferas fosfolipídicas porosas (como pequenas bolas de futebol ocas). Isso as impede de grudar umas nas outras no frasco, garantindo que as três drogas (O Corticoide, o Bloqueador Muscarínico e o Estimulador Beta-2) penetrem até os últimos alvéolos do paciente para desinflamar e dilatar simultaneamente.',
        es: 'El ataque en tres frentes. Este inhalador usa la tecnología "Aerosphere", que envuelve las moléculas en microesferas fosfolipídicas porosas. Esto impide que se peguen en el frasco, garantizando que las tres drogas penetren hasta los últimos alvéolos para desinflamar y dilatar simultáneamente.'
      },
      dose: {
        adult: {
          pt: '2 jatos via inalatória, DUAS VEZES ao dia (a cada 12 horas).',
          es: '2 puffs vía inhalatoria, DOS VECES al día (cada 12 horas).'
        },
        pediatric: {
          pt: 'Uso não indicado.',
          es: 'Uso no indicado.'
        }
      },
      administration: { pt: ['Lavar a boca e gargarejar RIGOROSAMENTE após o uso (altíssimo risco de candidíase por ser corticoide com anticolinérgico). Uso de espaçador melhora o rendimento.'], es: ['Lavar la boca y hacer gárgaras RIGUROSAMENTE tras el uso (altísimo riesgo de candidiasis). Uso de espaciador mejora el rendimiento.'] },
      renalAdjustment: { required: true, message: { pt: 'Monitorar pacientes com falência renal terminal devido ao componente Glicopirrônio.', es: 'Monitorizar pacientes con falla renal terminal debido al componente Glicopirronio.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Cirrose grave: Aumento drástico dos níveis de Budesonida no sangue devido ao metabolismo de primeira passagem falho.', es: 'Cirrosis grave: Aumento drástico de niveles de Budesonida en sangre debido al metabolismo fallido.' } },
      commonAdverseEffects: { pt: ['Disfonia e Candidíase', 'Boca muito seca', 'Tremor nas extremidades'], es: ['Disfonía y Candidiasis', 'Boca muy seca', 'Temblor en las extremidades'] },
      dangerousAdverseEffects: { pt: ['Pneumonia', 'Piora aguda de Glaucoma e retenção urinária'], es: ['Neumonía', 'Empeoramiento agudo de Glaucoma y retención urinaria'] },
      contraindications: {
        absolute: { pt: ['Tratamento do Broncoespasmo Agudo', 'Pacientes sem tratamento prévio (Não é droga de primeira linha)'], es: ['Tratamiento del Broncoespasmo Agudo', 'Pacientes sin tratamiento previo (No es droga de primera línea)'] },
        relative: { pt: ['Próstata muito aumentada', 'Cardiopatia isquêmica grave'], es: ['Próstata muy aumentada', 'Cardiopatía isquémica grave'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'ALERTA DE DESCALONAMENTO: Um grande erro na pneumologia é prescrever "A Bombinha Tripla" logo de cara para o paciente com falta de ar. A Terapia Tripla é a ÚLTIMA CARTADA inalatória. Usá-la antes de tentar LABA/LAMA apenas sobrecarrega o paciente com corticoides que aumentam o risco de pneumonia.', es: 'ALERTA DE DESCALONAMIENTO: Un gran error en neumología es prescribir "La Pluma Triple" de entrada. La Terapia Triple es la ÚLTIMA CARTA. Usarla antes de intentar LABA/LAMA solo sobrecarga al paciente con corticoides.' }
      }
    },

    "fluticasona_umeclidinio_vilanterol": {
      name: { pt: 'Fluticasona + Umeclidínio + Vilanterol', es: 'Fluticasona + Umeclidinio + Vilanterol' },
      category: 'pneumologia',
      class: { pt: 'Terapia Tripla Inalatória Ultra-Longa (ICS + LAMA + Ultra-LABA)', es: 'Terapia Triple Inhalatoria Ultra Larga (ICS + LAMA + Ultra-LABA)' },
      indications: {
        pt: ['DPOC grave não controlada', 'Asma Severa não controlada em adultos (Terapia de resgate antes dos biológicos)'],
        es: ['EPOC grave no controlada', 'Asma Severa no controlada en adultos (Terapia de rescate antes de los biológicos)']
      },
      commercialNames: { br: ['Trelegy Ellipta'], ar: ['Trelegy'] },
      presentation: { pt: ['Pó Inalatório (Ellipta) 100/62,5/25 mcg e 200/62,5/25 mcg'], es: ['Polvo Inhalatorio (Ellipta) 100/62,5/25 mcg y 200/62,5/25 mcg'] },
      mechanism: {
        pt: 'A "Bomba Atômica" inalatória de Dose Única. Associa três fármacos de longuíssima duração (24 horas) em uma única puxada de ar (Dispositivo Ellipta). O Furoato de Fluticasona silencia a inflamação eosinofílica severa; o Umeclidínio paralisa o muco e o reflexo de broncoconstrição vagal; e o Vilanterol estimula os receptores beta a deixarem a passagem aberta o dia todo.',
        es: 'La "Bomba Atómica" inhalatoria de Dosis Única. Asocia tres fármacos de larguísima duración (24 horas) en una sola aspiración. El Furoato de Fluticasona silencia la inflamación; el Umeclidinio paraliza el moco; y el Vilanterol estimula los receptores beta a dejar la vía abierta.'
      },
      dose: {
        adult: {
          pt: '1 inalação UMA VEZ ao dia, no mesmo horário, todos os dias.',
          es: '1 inhalación UNA VEZ al día, en el mismo horario, todos los días.'
        },
        pediatric: {
          pt: 'Não indicado.',
          es: 'No indicado.'
        }
      },
      administration: { pt: ['Exige bochecho e lavagem bucal vigorosa.', 'Não indicado usar dose a mais no dia mesmo se tiver falta de ar.'], es: ['Exige enjuague y lavado bucal vigoroso.', 'No indicado usar dosis extra en el día incluso si hay falta de aire.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste clínico.', es: 'Sin necesidad de ajuste clínico.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Monitoramento contínuo em cirrose moderada/grave devido ao corticoide de altíssima potência.', es: 'Monitorización continua en cirrosis moderada/grave debido al corticoide de altísima potencia.' } },
      commonAdverseEffects: { pt: ['Disfonia e Candidíase orofaríngea', 'Constipação e boca seca', 'Tosse transitória'], es: ['Disfonía y Candidiasis orofaríngea', 'Constipación y boca seca', 'Tos transitoria'] },
      dangerousAdverseEffects: { pt: ['Pneumonia bacteriana grave no DPOC (Efeito direto da imunossupressão do corticoide no pulmão fragilizado)'], es: ['Neumonía bacteriana grave en la EPOC (Efecto directo de la inmunosupresión del corticoide)'] },
      contraindications: {
        absolute: { pt: ['Alívio imediato do asma/DPOC agudo'], es: ['Alivio inmediato del asma/EPOC agudo'] },
        relative: { pt: ['Histórico recorrente de pneumonias de repetição'], es: ['Historial recurrente de neumonías de repetición'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'RISCO DE POLIFARMÁCIA CRUZADA: Pacientes no SUS comumente recebem a "bomba tripla" do médico especialista (Trelegy), mas continuam indo ao posto de saúde pegar as bombinhas antigas (Alenia, Spiriva) por não entenderem. Se inalar tudo junto, o paciente sofre parada cardíaca por superestimulação de receptores e bloqueio parassimpático massivo. Recolha as bombinhas velhas!', es: 'RIESGO DE POLIFARMACIA: Pacientes frecuentemente reciben la "bomba triple" del especialista, pero siguen usando sus inhaladores antiguos por no entender. Si inhala todo junto, sufre paro cardíaco por sobreestimulación y bloqueo masivo. ¡Recoja los inhaladores viejos!' }
      }
    },

    "beclometasona_formoterol_glicopirronio": {
      name: { pt: 'Beclometasona + Formoterol + Glicopirrônio', es: 'Beclometasona + Formoterol + Glicopirronio' },
      category: 'pneumologia',
      class: { pt: 'Terapia Tripla Inalatória Extrafina', es: 'Terapia Triple Inhalatoria Extrafina' },
      indications: {
        pt: ['Terapia de manutenção em pacientes adultos com DPOC moderada a grave', 'Asma não controlada em adultos (em casos refratários a associações duplas)'],
        es: ['Terapia de mantenimiento en pacientes adultos con EPOC moderada a grave', 'Asma no controlada en adultos (refractarios a asociaciones dobles)']
      },
      commercialNames: { br: ['Trimbow'], ar: ['Trimbow'] },
      presentation: { pt: ['Spray Inalatório Pressurizado (HFA) 87/5/9 mcg e 172/5/9 mcg por dose'], es: ['Spray Inhalatorio Presurizado (HFA) 87/5/9 mcg y 172/5/9 mcg por dosis'] },
      mechanism: {
        pt: 'O principal apelo do Trimbow é o tamanho da partícula (Formulações Extrafinas). Em um pulmão com DPOC ou Asma Severa, as vias aéreas superiores estão inchadas e tortuosas, e as vias distais (fundo do pulmão) colapsam. O Trimbow gera uma fumaça fina o suficiente para contornar o "labirinto" e entregar as três drogas (Corticoide para inflamação, LAMA para secar, LABA para dilatar) direto nos alvéolos doentes.',
        es: 'El principal atractivo de Trimbow es el tamaño de la partícula (Formulaciones Extrafinas). En un pulmón con EPOC, las vías distales colapsan. Trimbow genera un humo lo suficientemente fino para sortear el "laberinto" y entregar las tres drogas directo a los alvéolos.'
      },
      dose: {
        adult: {
          pt: '2 inalações a cada 12 horas (Total de 4 jatos no dia).',
          es: '2 inhalaciones cada 12 horas (Total de 4 puffs al día).'
        },
        pediatric: {
          pt: 'Uso não indicado.',
          es: 'Uso no indicado.'
        }
      },
      administration: { pt: ['Agitar bem antes de usar, idealmente com espaçador, lavando a boca logo em seguida.', 'Armazenar o frasco na GELADEIRA na farmácia; após iniciar o uso, pode ficar em temperatura ambiente (até 25°C) por no máximo 2 meses.'], es: ['Agitar bien antes de usar, idealmente con espaciador, lavando la boca después.', 'Guardar el frasco en la NEVERA en farmacia; al iniciar uso, puede estar a temperatura ambiente por máximo 2 meses.'] },
      renalAdjustment: { required: true, message: { pt: 'O Glicopirrônio exige cautela severa em ClCr < 30 mL/min.', es: 'El Glicopirronio exige cautela severa en ClCr < 30 mL/min.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Ajustes não estritamente definidos na bula, mas corticoide exige cautela na cirrose.', es: 'Ajustes no estrictamente definidos, pero el corticoide exige cautela en cirrosis.' } },
      commonAdverseEffects: { pt: ['Candidíase oral (sapinho)', 'Boca seca e rouquidão', 'Eletrocardiograma com leve aumento de batimentos (taquicardia)'], es: ['Candidiasis oral (muguet)', 'Boca seca y ronquera', 'ECG con leve aumento de latidos (taquicardia)'] },
      dangerousAdverseEffects: { pt: ['Retenção hídrica cruzada e Glaucoma em idosos suscetíveis'], es: ['Retención hídrica cruzada y Glaucoma en ancianos susceptibles'] },
      contraindications: {
        absolute: { pt: ['Uso para broncoespasmo agudo (não substitui o resgate isolado em pronto-socorro)'], es: ['Uso para broncoespasmo agudo (no sustituye el rescate en urgencias)'] },
        relative: { pt: ['Paciente com hipertrofia prostática não tratada e sondada'], es: ['Paciente con hipertrofia prostática no tratada y sondada'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'CADEIA DE FRIO: Se o seu paciente reclamar que a bombinha do Trimbow "não está fazendo efeito", pergunte onde ele a guardava ANTES de abrir a embalagem térmica. Se o farmacêutico não entregou gelado, a droga degradou.', es: 'CADENA DE FRÍO: Si el paciente reclama que el Trimbow "no hace efecto", pregunte dónde lo guardaba ANTES de abrir. Si el farmacéutico no lo entregó frío, la droga se degradó.' }
      }
    },

    "pirfenidona": {
      name: { pt: 'Pirfenidona', es: 'Pirfenidona' },
      category: 'pneumologia',
      class: { pt: 'Antifibrótico Pulmonar', es: 'Antifibrótico Pulmonar' },
      indications: {
        pt: ['Tratamento da Fibrose Pulmonar Idiopática (FPI) leve a moderada', 'Retardo da progressão da perda de capacidade vital forçada (CVF) pulmonar'],
        es: ['Tratamiento de la Fibrosis Pulmonar Idiopática (FPI) leve a moderada', 'Retraso de la progresión de la pérdida de capacidad vital forzada (CVF) pulmonar']
      },
      commercialNames: { br: ['Esbriet'], ar: ['Esbriet'] },
      presentation: { pt: ['Cápsulas 267 mg', 'Comprimidos revestidos 267 mg e 801 mg'], es: ['Cápsulas 267 mg', 'Comprimidos recubiertos 267 mg y 801 mg'] },
      mechanism: {
        pt: 'A Fibrose Pulmonar é a "cicatrização incontrolável" dos pulmões (o tecido mole vira pedra). A Pirfenidona atua inibindo a produção de Fator de Crescimento Transformador Beta (TGF-beta) e o TNF-alfa. Isso paralisa os fibroblastos, impedindo que eles continuem depositando colágeno duro e matriz extracelular no pulmão. Não cura e não reverte a fibrose que já existe, mas DÁ TEMPO de vida ao "congelar" a doença.',
        es: 'La Fibrosis Pulmonar es la "cicatrización incontrolable" de los pulmones (el tejido blando se vuelve piedra). La Pirfenidona inhibe la producción de Factor de Crecimiento Transformante Beta. Esto paraliza los fibroblastos, impidiendo que depositen colágeno duro. No cura ni revierte la fibrosis que ya existe, pero DA TIEMPO de vida al "congelar" la enfermedad.'
      },
      dose: {
        adult: {
          pt: 'Início: 267 mg (1 cápsula) 3 vezes ao dia na primeira semana. Escalonamento gradual até atingir a dose alvo brutal de: 801 mg (3 cápsulas de 267mg), 3 vezes ao dia (TOTAL DE 9 CÁPSULAS POR DIA ou 2.403 mg/dia).',
          es: 'Inicio: 267 mg (1 cápsula) 3 veces al día en la primera semana. Escalonamiento gradual hasta la dosis objetivo: 801 mg (3 cápsulas), 3 veces al día (TOTAL DE 9 CÁPSULAS POR DÍA).'
        },
        pediatric: {
          pt: 'Uso não indicado. Doença de adultos senis.',
          es: 'Uso no indicado. Enfermedad de adultos seniles.'
        }
      },
      administration: { pt: ['MANDATÓRIO: Ingerir sempre JUNTO COM AS REFEIÇÕES. Tomar de estômago vazio causa náusea intolerável e picos na corrente sanguínea que geram toxicidade severa.'], es: ['OBLIGATORIO: Ingerir siempre JUNTO CON LAS COMIDAS. Tomar con estómago vacío causa náusea intolerable y picos de toxicidad severa.'] },
      renalAdjustment: { required: true, message: { pt: 'Pacientes com falência renal grave (ClCr < 30) NÃO DEVEM USAR (acumulação tóxica não esclarecida).', es: 'Pacientes con falla renal grave (ClCr < 30) NO DEBEN USAR (acumulación tóxica no aclarada).' } },
      hepaticAdjustment: { required: true, message: { pt: 'Altamente dependente do fígado (CYP1A2). Evitar em cirrose classe B ou C de Child-Pugh.', es: 'Altamente dependiente del hígado (CYP1A2). Evitar en cirrosis clase B o C de Child-Pugh.' } },
      commonAdverseEffects: { pt: ['Fotosensibilidade extrema da pele (o paciente fica com a pele avermelhada e cheia de manchas vermelhas com qualquer sol)', 'Náuseas severas, anorexia e diarreia', 'Fadiga'], es: ['Fotosensibilidad extrema de la piel (el paciente queda rojo con cualquier sol)', 'Náuseas severas, anorexia y diarrea', 'Fatiga'] },
      dangerousAdverseEffects: { pt: ['Hepatotoxicidade com elevação grave de transaminases', 'Perda de peso letal (Sarcopenia grave)'], es: ['Hepatotoxicidad con elevación grave de transaminasas', 'Pérdida de peso letal (Sarcopenia grave)'] },
      contraindications: {
        absolute: { pt: ['Histórico de insuficiência hepática ou renal severa', 'Uso concomitante de Fluvoxamina'], es: ['Historial de insuficiencia hepática o renal severa', 'Uso concomitante de Fluvoxamina'] },
        relative: { pt: ['Tabagismo ativo (O cigarro anula o remédio)'], es: ['Tabaquismo activo (El cigarro anula el remedio)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O AVISO DO CIGARRO: Se o seu paciente tem fibrose pulmonar e continua fumando, a Pirfenidona é INÚTIL. O tabagismo induz fortemente a enzima CYP1A2 no fígado do paciente. O fígado vai destruir toda a Pirfenidona antes que ela consiga alcançar o pulmão do paciente para tratar a doença.', es: 'EL AVISO DEL CIGARRO: Si el paciente tiene fibrosis y sigue fumando, la Pirfenidona es INÚTIL. El tabaquismo induce la enzima CYP1A2 en el hígado, que destruirá toda la Pirfenidona antes de alcanzar el pulmón.' }
      }
    },

/* ── NINTEDANIBE ────────────────────────────────────────────────────── */
    "nintedanibe": {
      name: { pt: 'Nintedanibe', es: 'Nintedanib' },
      category: 'pneumologia',
      class: { pt: 'Antifibrótico Pulmonar (Inibidor de Tirosina-Quinase)', es: 'Antifibrótico Pulmonar (Inhibidor de Tirosina-Quinasa)' },
      indications: {
        pt: ['Fibrose Pulmonar Idiopática (FPI) — qualquer estágio', 'Doença Pulmonar Intersticial associada à Esclerose Sistêmica (DPI-ES)', 'Doença Pulmonar Intersticial fibrosante progressiva de outras causas'],
        es: ['Fibrosis Pulmonar Idiopática (FPI) — cualquier estadio', 'Enfermedad Pulmonar Intersticial asociada a Esclerosis Sistémica (EPI-ES)', 'Enfermedad Pulmonar Intersticial fibrosante progresiva de otras causas']
      },
      commercialNames: { br: ['Ofev'], ar: ['Ofev'] },
      presentation: { pt: ['Cápsulas moles 100 mg e 150 mg'], es: ['Cápsulas blandas 100 mg y 150 mg'] },
      mechanism: {
        pt: 'Se a Pirfenidona "paralisa os fibroblastos por fora" (bloqueando os sinais TGF-beta/TNF), o Nintedanibe os paralisa "por dentro". Ele é um inibidor de tirosina-quinase que entra no fibroblasto e bloqueia simultaneamente três receptores de crescimento: VEGFR (que vasculariza a cicatriz), FGFR (que estimula a proliferação do fibroblasto) e PDGFRα/β (que atrai mais fibroblastos para o pulmão). Resultado: desorganiza toda a cascata de sinalização interna que faz o pulmão se transformar em couro.',
        es: 'Si la Pirfenidona "paraliza los fibroblastos por fuera", el Nintedanib los paraliza "por dentro". Es un inhibidor de tirosina-quinasa que bloquea simultáneamente tres receptores de crecimiento: VEGFR, FGFR y PDGFRα/β. Resultado: desorganiza toda la cascada interna que hace que el pulmón se transforme en cuero.'
      },
      dose: {
        adult: {
          pt: '150 mg por via oral, DUAS VEZES ao dia (a cada 12 horas). Caso haja intolerância gastrointestinal, reduzir para 100 mg, 2 vezes ao dia.',
          es: '150 mg por vía oral, DOS VECES al día (cada 12 horas). Si hay intolerancia gastrointestinal, reducir a 100 mg, 2 veces al día.'
        },
        pediatric: {
          pt: 'Não indicado. Doença exclusiva de adultos.',
          es: 'No indicado. Enfermedad exclusiva de adultos.'
        }
      },
      administration: { pt: ['Ingerir JUNTO COM AS REFEIÇÕES para reduzir as náuseas e a biodisponibilidade errática.', 'Engolir inteiro — não mastigar (cápsula mole contém óleo de soja).'], es: ['Ingerir JUNTO CON LAS COMIDAS para reducir náuseas.', 'Tragar entero — no masticar (cápsula blanda contiene aceite de soja).'] },
      renalAdjustment: { required: false, message: { pt: 'Eliminação predominantemente biliar (> 90%). Insuficiência renal isolada não requer ajuste.', es: 'Eliminación predominantemente biliar (> 90%). Insuficiencia renal aislada no requiere ajuste.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Substrato de CYP3A4 e P-glicoproteína. Em Child-Pugh B: reduzir para 100 mg 2x/dia. CONTRAINDICADO em Child-Pugh C.', es: 'Sustrato de CYP3A4 y P-glicoproteína. En Child-Pugh B: reducir a 100 mg 2x/día. CONTRAINDICADO en Child-Pugh C.' } },
      commonAdverseEffects: { pt: ['Diarreia profusa (reação mais comum e mais limitante — 60% dos pacientes)', 'Náuseas e vômitos', 'Dor e distensão abdominal'], es: ['Diarrea profusa (reacción más común y limitante — 60% de los pacientes)', 'Náuseas y vómitos', 'Dolor y distensión abdominal'] },
      dangerousAdverseEffects: { pt: ['Hepatotoxicidade grave (monitorar ALT/AST mensalmente no primeiro ano)', 'Sangramento arterial (inibe VEGFR — cautela máxima com anticoagulantes)', 'Perfuração gastrointestinal (raro, potencialmente fatal)'], es: ['Hepatotoxicidad grave (monitorar ALT/AST mensualmente el primer año)', 'Sangrado arterial (inhibe VEGFR — cautela máxima con anticoagulantes)', 'Perforación gastrointestinal (raro, potencialmente fatal)'] },
      contraindications: {
        absolute: { pt: ['Gravidez e lactação (Categoria D — teratogênico em animais)', 'Child-Pugh C'], es: ['Embarazo y lactancia (Categoría D — teratogénico en animales)', 'Child-Pugh C'] },
        relative: { pt: ['Uso concomitante de anticoagulantes (risco de sangramento multiplicado)', 'Tabagismo ativo (reduz eficácia por indução enzimática)'], es: ['Uso concomitante de anticoagulantes (riesgo de sangrado multiplicado)', 'Tabaquismo activo (reduce eficacia por inducción enzimática)'] }
      },
      safetyFlags: {
        bleedingRisk: true, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A DIARREIA QUE MATA O TRATAMENTO: O principal motivo pelo qual os pacientes abandonam o Nintedanibe não é medo ou falta de acesso — é a diarreia. Nos primeiros meses, pode ser debilitante. O pneumologista inteligente prescreve ANTECIPADAMENTE loperamida "se precisar" para controlar o trânsito e salvar a adesão ao único remédio que freia a fibrose.', es: 'LA DIARREA QUE MATA EL TRATAMIENTO: El principal motivo de abandono del Nintedanib no es el miedo o falta de acceso — es la diarrea. El neumólogo inteligente prescribe ANTICIPADAMENTE loperamida "si necesita" para controlar el tránsito y salvar la adherencia.' }
      }
    },

/* ── MONTELUCASTE ────────────────────────────────────────────────────── */
    "montelucaste": {
      "name": {
        "pt": "Montelucaste",
        "es": "Montelukast"
      },
      "category": "pneumologia",
      "class": {
        "pt": "Antagonista do receptor de leucotrieno CysLT1",
        "es": "Antagonista del receptor de leucotrieno CysLT1"
      },
      "indications": {
        "pt": [
          "Profilaxia e tratamento crônico da asma",
          "Prevenção de broncoconstrição induzida por exercício",
          "Rinite alérgica apenas quando alternativas são inadequadas/intoleradas"
        ],
        "es": [
          "Profilaxis y tratamiento crónico del asma",
          "Prevención de broncoconstricción inducida por ejercicio",
          "Rinitis alérgica solo cuando alternativas son inadecuadas/no toleradas"
        ]
      },
      "mechanism": {
        "pt": "Bloqueia receptores CysLT1 e reduz efeitos dos leucotrienos cisteinílicos em vias aéreas e mucosa nasal.",
        "es": "Bloquea receptores CysLT1 y reduce efectos de leucotrienos cisteinílicos en vías aéreas y mucosa nasal."
      },
      "dose": {
        "adult": {
          "pt": "Adultos e ≥15 anos: 10 mg VO 1x/dia; para asma, geralmente à noite. Não usar dose extra para crise aguda.",
          "es": "Adultos y ≥15 años: 10 mg VO 1 vez/día; para asma, generalmente por la noche. No usar dosis extra para crisis aguda."
        },
        "pediatric": {
          "pt": "6–14 anos: 5 mg 1x/dia; 2–5 anos: 4 mg 1x/dia; 6–23 meses: 4 mg granulado para indicações autorizadas por idade.",
          "es": "6–14 años: 5 mg 1 vez/día; 2–5 años: 4 mg 1 vez/día; 6–23 meses: 4 mg granulado para indicaciones autorizadas por edad."
        }
      },
      "administration": {
        "pt": [
          "Não serve como broncodilatador de resgate",
          "Manter medicação de resgate para crise aguda",
          "Antes de iniciar, discutir risco neuropsiquiátrico; interromper e procurar avaliação se surgirem sintomas"
        ],
        "es": [
          "No sirve como broncodilatador de rescate",
          "Mantener medicación de rescate para crisis aguda",
          "Antes de iniciar, discutir riesgo neuropsiquiátrico; suspender y buscar evaluación si aparecen síntomas"
        ]
      },
      "renalAdjustment": {
        "required": false,
        "message": {
          "pt": "Sem ajuste renal rotineiro.",
          "es": "Sin ajuste renal rutinario."
        }
      },
      "hepaticAdjustment": {
        "required": false,
        "message": {
          "pt": "Sem ajuste em insuficiência hepática leve a moderada; dados são limitados em insuficiência grave.",
          "es": "Sin ajuste en insuficiencia hepática leve a moderada; datos limitados en insuficiencia grave."
        }
      },
      "commonAdverseEffects": {
        "pt": [
          "Cefaleia",
          "Dor abdominal"
        ],
        "es": [
          "Cefalea",
          "Dolor abdominal"
        ]
      },
      "dangerousAdverseEffects": {
        "pt": [
          "Eventos neuropsiquiátricos graves, incluindo ideação/comportamento suicida",
          "Reações de hipersensibilidade raras"
        ],
        "es": [
          "Eventos neuropsiquiátricos graves, incluida ideación/conducta suicida",
          "Reacciones de hipersensibilidad raras"
        ]
      },
      "contraindications": {
        "absolute": {
          "pt": [
            "Hipersensibilidade"
          ],
          "es": [
            "Hipersensibilidad"
          ]
        },
        "relative": {
          "pt": [
            "História de sintomas neuropsiquiátricos requer avaliação de risco-benefício"
          ],
          "es": [
            "Antecedente de síntomas neuropsiquiátricos requiere evaluación riesgo-beneficio"
          ]
        }
      },
      "safetyFlags": {
        "bleedingRisk": false,
        "renalHighRisk": false,
        "hepaticCaution": false,
        "antidoteAvailable": false,
        "highAlertMedication": true,
        "warning": {
          "pt": "Boxed Warning FDA: eventos neuropsiquiátricos graves. Para rinite alérgica, reservar a pacientes sem resposta adequada ou intolerantes a alternativas.",
          "es": "Boxed Warning FDA: eventos neuropsiquiátricos graves. Para rinitis alérgica, reservar para pacientes sin respuesta adecuada o intolerantes a alternativas."
        }
      }
    },

/* ── ZAFIRLUCASTE ────────────────────────────────────────────────────── */
    "zafirlucaste": {
      name: { pt: 'Zafirlucaste', es: 'Zafirlukast' },
      category: 'pneumologia',
      class: { pt: 'Antileucotrieno (Antagonista do Receptor de Cisteinil-Leucotrieno — ARLT)', es: 'Antileucotrieno (Antagonista del Receptor de Cisteinil-Leucotrieno — ARLT)' },
      indications: {
        pt: ['Profilaxia e tratamento crônico da Asma brônquica em adultos e crianças ≥ 7 anos (2ª linha)'],
        es: ['Profilaxis y tratamiento crónico del Asma bronquial en adultos y niños ≥ 7 años (2ª línea)']
      },
      commercialNames: { br: ['Accolate'], ar: ['Accolate'] },
      presentation: { pt: ['Comprimidos revestidos 10 mg e 20 mg'], es: ['Comprimidos recubiertos 10 mg y 20 mg'] },
      mechanism: {
        pt: 'Idêntico ao Montelucaste: antagonismo seletivo do receptor CysLT1 para leucotrienos cisteinílicos. A diferença clínica é farmacológica: o Zafirlucaste tem interações medicamentosas muito mais agressivas (inibe CYP2C9 e CYP3A4) e precisa ser tomado em JEJUM. No uso clínico atual, foi amplamente substituído pelo Montelucaste por ser menos conveniente (2 doses/dia) e com maior potencial de interações.',
        es: 'Idéntico al Montelukast: antagonismo selectivo del receptor CysLT1. La diferencia clínica es farmacológica: el Zafirlukast tiene interacciones mucho más agresivas (inhibe CYP2C9 y CYP3A4) y necesita tomarse en AYUNAS. Fue ampliamente reemplazado por Montelukast por ser menos conveniente.'
      },
      dose: {
        adult: {
          pt: '20 mg por via oral, DUAS VEZES ao dia (a cada 12 horas), em JEJUM (1 hora antes ou 2 horas após as refeições).',
          es: '20 mg por vía oral, DOS VECES al día (cada 12 horas), en AYUNAS (1 hora antes o 2 horas después de las comidas).'
        },
        pediatric: {
          pt: '7–11 anos: 10 mg, 2 vezes ao dia, em jejum. ≥ 12 anos: dose adulta.',
          es: '7-11 años: 10 mg, 2 veces al día, en ayunas. ≥ 12 años: dosis adulta.'
        }
      },
      administration: { pt: ['Obrigatoriamente em JEJUM — alimentos reduzem a biodisponibilidade em até 40%.'], es: ['Obligatoriamente en AYUNAS — los alimentos reducen la biodisponibilidad hasta en un 40%.'] },
      renalAdjustment: { required: false, message: { pt: 'Eliminação predominantemente fecal. Não requer ajuste renal.', es: 'Eliminación predominantemente fecal. No requiere ajuste renal.' } },
      hepaticAdjustment: { required: true, message: { pt: 'CONTRAINDICADO em cirrose hepática (acúmulo tóxico). Monitorar transaminases em uso prolongado.', es: 'CONTRAINDICADO en cirrosis hepática (acumulación tóxica). Monitorar transaminasas en uso prolongado.' } },
      commonAdverseEffects: { pt: ['Cefaleia', 'Náuseas e dispepsia (exacerbados se tomado com comida)', 'Infecções respiratórias altas'], es: ['Cefalea', 'Náuseas y dispepsia (exacerbados si se toma con comida)', 'Infecciones respiratorias altas'] },
      dangerousAdverseEffects: { pt: ['Hepatotoxicidade grave (casos de insuficiência hepática fatal relatados em pós-comercialização)', 'Síndrome de Churg-Strauss (vasculite eosinofílica)'], es: ['Hepatotoxicidad grave (casos de insuficiencia hepática fatal reportados)', 'Síndrome de Churg-Strauss (vasculitis eosinofílica)'] },
      contraindications: {
        absolute: { pt: ['Doença hepática ativa ou elevação de transaminases > 3× o limite superior da normalidade'], es: ['Enfermedad hepática activa o elevación de transaminasas > 3× el límite superior de normalidad'] },
        relative: { pt: ['Uso de Varfarina (Zafirlucaste inibe CYP2C9 → INR dispara)', 'Idosos > 65 anos (clearance reduzido)'], es: ['Uso de Warfarina (Zafirlukast inhibe CYP2C9 → INR se dispara)', 'Ancianos > 65 años (clearance reducido)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'A INTERAÇÃO LETAL COM VARFARINA: Se o seu paciente anticoagulado com Varfarina para FA ou TVP tiver asma e o médico prescrever Zafirlucaste sem saber da interação, o INR pode triplicar em dias — gerando hemorragia intracraniana. O Montelucaste é o antileucotrieno SEGURO para pacientes em anticoagulação oral.', es: 'LA INTERACCIÓN LETAL CON WARFARINA: Si el paciente anticoagulado con Warfarina recibe Zafirlukast sin conocer la interacción, el INR puede triplicarse en días — generando hemorragia intracraneal. El Montelukast es el antileucotrieno SEGURO en anticoagulación.' }
      }
    },

/* ── TEOFILINA ────────────────────────────────────────────────────────── */
    "teofilina": {
      "name": {
        "pt": "Teofilina",
        "es": "Teofilina"
      },
      "category": "pneumologia",
      "class": {
        "pt": "Metilxantina broncodilatadora de estreita janela terapêutica",
        "es": "Metilxantina broncodilatadora de estrecho margen terapéutico"
      },
      "indications": {
        "pt": [
          "Broncoespasmo crônico em contextos selecionados quando alternativas são inadequadas"
        ],
        "es": [
          "Broncoespasmo crónico en contextos seleccionados cuando alternativas son inadecuadas"
        ]
      },
      "mechanism": {
        "pt": "Relaxamento de músculo liso e efeitos não broncodilatadores por mecanismos envolvendo inibição de fosfodiesterase/antagonismo de adenosina.",
        "es": "Relajación del músculo liso y efectos no broncodilatadores por mecanismos que incluyen inhibición de fosfodiesterasa/antagonismo de adenosina."
      },
      "dose": {
        "adult": {
          "pt": "Dose deve ser individualizada por nível sérico, idade, tabagismo, comorbidades e interações. Não titular apenas por sintomas.",
          "es": "La dosis debe individualizarse por nivel sérico, edad, tabaquismo, comorbilidades e interacciones. No titular solo por síntomas."
        },
        "pediatric": {
          "pt": "Dose pediátrica é individualizada por idade/peso e monitorização sérica; exige protocolo específico.",
          "es": "La dosis pediátrica se individualiza por edad/peso y monitorización sérica; requiere protocolo específico."
        }
      },
      "administration": {
        "pt": [
          "Monitorar concentração sérica após mudanças de dose, doença febril, tabagismo ou interações",
          "Evitar escalada em exacerbação aguda sem nível sérico"
        ],
        "es": [
          "Monitorizar concentración sérica tras cambios de dosis, enfermedad febril, tabaquismo o interacciones",
          "Evitar aumento en exacerbación aguda sin nivel sérico"
        ]
      },
      "renalAdjustment": {
        "required": false,
        "message": {
          "pt": "Em adultos, depuração é predominantemente hepática; ajustar por níveis e contexto clínico.",
          "es": "En adultos, la depuración es predominantemente hepática; ajustar por niveles y contexto clínico."
        }
      },
      "hepaticAdjustment": {
        "required": true,
        "message": {
          "pt": "Hepatopatia reduz depuração e exige redução de dose/monitorização sérica estreita.",
          "es": "La hepatopatía reduce depuración y exige reducción de dosis/monitorización sérica estrecha."
        }
      },
      "commonAdverseEffects": {
        "pt": [
          "Náusea",
          "Tremor",
          "Insônia",
          "Cefaleia"
        ],
        "es": [
          "Náuseas",
          "Temblor",
          "Insomnio",
          "Cefalea"
        ]
      },
      "dangerousAdverseEffects": {
        "pt": [
          "Convulsões",
          "Taquiarritmias",
          "Toxicidade potencialmente fatal"
        ],
        "es": [
          "Convulsiones",
          "Taquiarritmias",
          "Toxicidad potencialmente fatal"
        ]
      },
      "contraindications": {
        "absolute": {
          "pt": [
            "Hipersensibilidade"
          ],
          "es": [
            "Hipersensibilidad"
          ]
        },
        "relative": {
          "pt": [
            "Arritmias, epilepsia, hepatopatia, interações CYP"
          ],
          "es": [
            "Arritmias, epilepsia, hepatopatía, interacciones CYP"
          ]
        }
      },
      "safetyFlags": {
        "warning": {
          "pt": "Estreita janela terapêutica e muitas interações. GINA não recomenda teofilina oral rotineiramente para asma por maior risco de efeitos adversos.",
          "es": "Estrecho margen terapéutico y muchas interacciones. GINA no recomienda teofilina oral rutinariamente para asma por mayor riesgo de efectos adversos."
        }
      }
    },

/* ── ROFLUMILASTE ────────────────────────────────────────────────────── */
    "roflumilaste": {
      name: { pt: 'Roflumilaste', es: 'Roflumilast' },
      category: 'pneumologia',
      class: { pt: 'Inibidor seletivo de Fosfodiesterase-4 (PDE-4)', es: 'Inhibidor selectivo de Fosfodiesterasa-4 (PDE-4)' },
      indications: {
        pt: ['Redução das exacerbações na DPOC grave (VEF1 < 50% do predito) com bronquite crônica e histórico de exacerbações frequentes apesar de broncodilatadores inalatórios ótimos', 'Uso combinado com broncodilatadores de longa ação — NUNCA como monoterapia'],
        es: ['Reducción de las exacerbaciones en la EPOC grave (VEF1 < 50% del predicho) con bronquitis crónica y antecedentes de exacerbaciones frecuentes a pesar de broncodilatadores inhalatorios óptimos', 'Uso combinado con broncodilatadores de larga acción — NUNCA como monoterapia']
      },
      commercialNames: { br: ['Daxas'], ar: ['Daxas'] },
      presentation: { pt: ['Comprimidos revestidos 500 mcg (0,5 mg)'], es: ['Comprimidos recubiertos 500 mcg (0,5 mg)'] },
      mechanism: {
        pt: 'O Roflumilaste faz o que nenhuma bombinha consegue: ele é um comprimido que age nas células inflamatórias do interior do pulmão. A PDE-4 é a enzima que degrada o AMPc dentro dos neutrófilos, macrófagos e eosinófilos. Ao inibir a PDE-4, o Roflumilaste acumula AMPc dentro dessas células imunes — AMPc alto "acalma" essas células, reduzindo a produção de citocinas inflamatórias (IL-6, IL-8, TNF) que causam as exacerbações purulentas da bronquite crônica da DPOC.',
        es: 'El Roflumilast hace lo que ningún inhalador logra: es un comprimido que actúa en las células inflamatorias del interior del pulmón. La PDE-4 degrada el AMPc dentro de neutrófilos, macrófagos y eosinófilos. Al inhibir PDE-4, el Roflumilast acumula AMPc, "calmando" estas células e reduciendo citocinas inflamatorias que causan las exacerbaciones.'
      },
      dose: {
        adult: {
          pt: '500 mcg (0,5 mg) por via oral, UMA VEZ ao dia. Para reduzir efeitos gastrointestinais iniciais: iniciar com 250 mcg/dia (meio comprimido) por 4 semanas, depois escalar para 500 mcg/dia.',
          es: '500 mcg (0,5 mg) por vía oral, UNA VEZ al día. Para reducir efectos gastrointestinales iniciales: iniciar con 250 mcg/día (medio comprimido) por 4 semanas, luego escalar.'
        },
        pediatric: {
          pt: 'Não indicado. Doença exclusiva de adultos.',
          es: 'No indicado. Enfermedad exclusiva de adultos.'
        }
      },
      administration: { pt: ['Pode ser tomado com ou sem alimento.', 'Monitorar peso corporal — perda de peso frequente e significativa ao longo do tratamento.'], es: ['Puede tomarse con o sin alimento.', 'Monitorar peso corporal — pérdida de peso frecuente y significativa durante el tratamiento.'] },
      renalAdjustment: { required: false, message: { pt: 'Eliminação predominantemente fecal (metabólito ativo). Não requer ajuste.', es: 'Eliminación predominantemente fecal (metabolito activo). No requiere ajuste.' } },
      hepaticAdjustment: { required: true, message: { pt: 'CONTRAINDICADO em insuficiência hepática moderada a grave (Child-Pugh B e C). Metabolismo hepático extenso.', es: 'CONTRAINDICADO en insuficiencia hepática moderada a grave (Child-Pugh B y C). Metabolismo hepático extenso.' } },
      commonAdverseEffects: { pt: ['Diarreia e náuseas (primeiras semanas)', 'Perda de peso (média de 2 kg — pode ser maior)', 'Cefaleia e insônia'], es: ['Diarrea y náuseas (primeras semanas)', 'Pérdida de peso (promedio de 2 kg — puede ser mayor)', 'Cefalea e insomnio'] },
      dangerousAdverseEffects: { pt: ['Transtornos neuropsiquiátricos: ansiedade, depressão, ideação suicida (FDA Black Box Warning)', 'Perda de peso clinicamente significativa em pacientes com baixo IMC (caquexia da DPOC)'], es: ['Trastornos neuropsiquiátricos: ansiedad, depresión, ideación suicida (FDA Black Box Warning)', 'Pérdida de peso clínicamente significativa en pacientes con bajo IMC (caquexia de la EPOC)'] },
      contraindications: {
        absolute: { pt: ['Insuficiência Hepática moderada a grave (Child-Pugh B ou C)', 'Histórico de depressão grave com ideação suicida'], es: ['Insuficiencia Hepática moderada a grave (Child-Pugh B o C)', 'Historial de depresión grave con ideación suicida'] },
        relative: { pt: ['Desnutrição grave ou IMC < 18 (agrava a perda de peso)', 'Uso concomitante de imunosupressores sistêmicos fortes'], es: ['Desnutrición grave o IMC < 18 (agrava la pérdida de peso)', 'Uso concomitante de inmunosupresores sistémicos fuertes'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'DPOC + DEPRESSÃO = PROIBIDO: O paciente clássico do Daxas é o homem de 65 anos, obeso, tabagista crônico com DPOC grave e bronquite crônica purulenta recorrente. Esse perfil de paciente tem alto risco de depressão. Se o pneumologista prescrever o Roflumilaste sem investigar e tratar a depressão pré-existente, está agravando um risco de suicídio que já era elevado. Rastrear depressão (PHQ-9) ANTES de prescrever é obrigatório.', es: 'EPOC + DEPRESIÓN = PROHIBIDO: Si el neumólogo prescribe Roflumilast sin investigar y tratar la depresión preexistente, está agravando un riesgo de suicidio ya elevado. Rastrear depresión (PHQ-9) ANTES de prescribir es obligatorio.' }
      }
    }

  }); /* fim Object.assign PNEUMOLOGIA_DRUGS_DB — BUILD 397 + BUILD 398 + BUILD 399
         BUILD 397 — ICS/LABA: Beclometasona+Formoterol, Fluticasona+Salmeterol, Fluticasona+Vilanterol
                     LAMA/LABA: Umeclidínio+Vilanterol, Tiotrópio+Olodaterol
         BUILD 398 — LAMA/LABA: Glicopirrônio+Indacaterol (Ultibro)
                     Terapia Tripla: Breztri, Trelegy, Trimbow
                     Antifibrótico: Pirfenidona (Esbriet)
         BUILD 399 — Antifibrótico: Nintedanibe (Ofev)
                     Antileucotrienos: Montelucaste (Singulair), Zafirlucaste (Accolate)
                     Xantina: Teofilina (Euphyllin)
                     Inibidor PDE-4: Roflumilaste (Daxas) */
})();
/* GOLD33_SELECTIVE:aclidinio:START */
;(function(){var db=window.PNEUMOLOGIA_DRUGS_DB;if(!db||!db["aclidinio"])throw new Error("GOLD33_MISSING_CANONICAL:aclidinio");db["aclidinio"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "002",
    "requiredFieldCount": 33,
    "approvedSha256": "e149f8e22971fe01f8b9480334053b230ce2c76ef359f54930d25b1dccbd5011",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "BLOQUEADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Aclidínio (brometo de aclidínio).",
    "class": "Broncodilatador antimuscarínico de longa ação (LAMA) inalatório.",
    "pharmacologicClass": "Composto de amônio quaternário; antagonista muscarínico inalatório.",
    "commercialNames": "Tudorza Pressair® nos EUA; Eklira Genuair®/Bretaris Genuair® em alguns mercados. Confirmar produto e disponibilidade locais.",
    "presentation": "Pó para inalação oral em inalador multidose de pó seco ativado pela inspiração [1].",
    "presentations": "No rótulo Tudorza Pressair: 400 mcg medidos por acionamento, com 375 mcg liberados pelo bocal; dispositivos de 30 ou 60 doses. As apresentações variam por jurisdição [1].",
    "mechanism": "Antagoniza de modo competitivo e reversível receptores muscarínicos; nas vias aéreas, a inibição de M3 no músculo liso produz broncodilatação [1].",
    "pharmacodynamics": "O efeito broncodilatador é predominantemente local após inalação. No rótulo, não houve efeito clinicamente significativo sobre QT ou ritmo cardíaco nos estudos descritos [1].",
    "pharmacokinetics": "Biodisponibilidade absoluta aproximada de 6% no estudo do rótulo; pico plasmático em até 10 min após 400 mcg duas vezes/dia. Sofre hidrólise rápida a metabólitos sem atividade muscarínica; não se esperam interações CYP clinicamente relevantes pelas baixas concentrações plasmáticas [1].",
    "indications": "Tratamento de manutenção de longo prazo do broncoespasmo associado à DPOC, incluindo bronquite crônica e enfisema; não é medicamento de resgate [1].",
    "dose": "DPOC: 1 inalação oral de 400 mcg duas vezes ao dia, usando apenas o dispositivo correspondente. Não usar para episódio agudo de broncoespasmo [1].",
    "pediatricDose": "Segurança e eficácia em pacientes pediátricos não estabelecidas; não criar cálculo pediátrico [1].",
    "renalDose": "O rótulo não requer ajuste em insuficiência renal, inclusive nos graus avaliados; manter vigilância clínica individual.",
    "hepaticDose": "O efeito da insuficiência hepática na farmacocinética não foi estudado no rótulo consultado; não inferir ajuste posológico.",
    "commonAdverseEffects": "Cefaleia, nasofaringite e tosse foram as reações mais comuns no rótulo (≥3% e acima de placebo); também foram relatados diarreia, sinusite e rinite [1].",
    "dangerousAdverseEffects": "Broncoespasmo paradoxal, reação de hipersensibilidade imediata, piora de glaucoma de ângulo estreito e retenção urinária [1].",
    "adverseEffects": "O perfil é anticolinérgico; avaliar sintomas oculares e urinários, além de qualquer broncoespasmo após a inalação. A reação adversa deve ser interpretada no contexto da DPOC e da comedicação [1].",
    "contraindications": "O rótulo FDA consultado não lista contraindicação formal. Há precaução com hipersensibilidade imediata, inclusive a proteínas do leite, e antecedente de reação à atropina [1].",
    "interactions": "Evitar coadministração com outros medicamentos anticolinérgicos por potencial somatório de efeitos. O rótulo não identificou aumento de reações com agonistas beta2, metilxantinas ou corticoides usados na DPOC [1].",
    "monitoring": "Avaliar controle de sintomas e exacerbações de DPOC; vigiar broncoespasmo paradoxal, dor ocular/visão turva/halos e sintomas de retenção urinária. Confirmar técnica inalatória.",
    "administration": "Somente por inalação oral. Usar o dispositivo específico, conforme instruções do fabricante; não ingerir o pó e não usar como resgate [1].",
    "preparation": "Não requer reconstituição. Manter o inalador seco e na embalagem até o uso; conferir contador e indicadores do dispositivo conforme instruções de uso locais.",
    "infusionProtocol": "Não aplicável: formulação inalatória, sem protocolo de infusão.",
    "pregnancy": "Não há estudos adequados e bem controlados em gestantes no rótulo consultado; usar somente se o benefício potencial justificar o risco potencial fetal [1].",
    "lactation": "Não há dados humanos adequados no rótulo; há dados animais e recomenda-se cautela. Decidir considerando benefício da amamentação, necessidade materna e alternativas [1].",
    "specialPopulations": "Idosos: não requerem ajuste segundo o rótulo. Usar cautela em glaucoma de ângulo estreito, hiperplasia prostática ou obstrução do colo vesical. Pediatria: não estabelecido [1].",
    "patientEducation": "Usar regularmente, duas vezes ao dia, e manter um broncodilatador de resgate apropriado para sintomas agudos conforme plano clínico. Procurar atendimento se ocorrer falta de ar súbita após a dose, dor ocular/halos ou dificuldade para urinar.",
    "clinicalPearls": "Não converter automaticamente a dose nominal entre dispositivos ou jurisdições. O dado seguro é o regime indicado na bula do dispositivo dispensado; técnica inalatória é parte essencial da efetividade.",
    "guidelineRecommendations": "LAMA é classe de manutenção na DPOC; a escolha e a escalada terapêutica devem seguir avaliação individual de sintomas, exacerbações, técnica e disponibilidade local. Esta ficha não substitui a diretriz vigente.",
    "safetyFlags": "NÃO É RESGATE. Risco anticolinérgico localizado/sistêmico: atenção a glaucoma de ângulo estreito e retenção urinária. Evitar associação com outros anticolinérgicos [1].",
    "alerts": "ALERTA DE DISPOSITIVO: conferir produto, dose nominal/liberada e técnica antes de qualquer orientação. Se ocorrer broncoespasmo paradoxal, suspender e avaliar tratamento alternativo [1].",
    "references": [
      "1. U.S. FDA. TUDORZA PRESSAIR (aclidinium bromide) inhalation powder — Full Prescribing Information, 2012. https://www.accessdata.fda.gov/drugsatfda_docs/label/2012/202450s000lbl.pdf (o próprio documento informa que pode não ser o rótulo FDA mais recente; disponibilidade e rotulagem local requerem verificação).",
      "2. GOLD. Global Strategy for the Diagnosis, Management, and Prevention of COPD — usar a edição vigente para decisões terapêuticas. https://goldcopd.org/"
    ],
    "ref": "Fontes principais: bula FDA de aclidínio/Tudorza Pressair e diretriz GOLD vigente. Conferir a bula e a disponibilidade da jurisdição antes de dispensar."
  },
  "es": {
    "name": "Aclidinio (bromuro de aclidinio).",
    "class": "Broncodilatador antimuscarínico de acción prolongada (LAMA) inhalado.",
    "pharmacologicClass": "Compuesto de amonio cuaternario; antagonista muscarínico inhalado.",
    "commercialNames": "Tudorza Pressair® en EE. UU.; Eklira Genuair®/Bretaris Genuair® en algunos mercados. Confirmar producto y disponibilidad locales.",
    "presentation": "Polvo para inhalación oral en inhalador multidosis de polvo seco activado por la inspiración [1].",
    "presentations": "En el prospecto de Tudorza Pressair: 400 mcg medidos por accionamiento, con 375 mcg liberados por la boquilla; dispositivos de 30 o 60 dosis. Las presentaciones varían según la jurisdicción [1].",
    "mechanism": "Antagoniza de forma competitiva y reversible los receptores muscarínicos; en las vías aéreas, la inhibición de M3 en el músculo liso produce broncodilatación [1].",
    "pharmacodynamics": "El efecto broncodilatador es predominantemente local tras la inhalación. En el prospecto, no hubo efecto clínicamente significativo sobre QT ni ritmo cardíaco en los estudios descritos [1].",
    "pharmacokinetics": "Biodisponibilidad absoluta aproximada de 6% en el estudio del prospecto; pico plasmático hasta 10 min tras 400 mcg dos veces/día. Sufre hidrólisis rápida a metabolitos sin actividad muscarínica; no se esperan interacciones CYP clínicamente relevantes por las bajas concentraciones plasmáticas [1].",
    "indications": "Tratamiento de mantenimiento a largo plazo del broncoespasmo asociado a EPOC, incluida bronquitis crónica y enfisema; no es medicación de rescate [1].",
    "dose": "EPOC: 1 inhalación oral de 400 mcg dos veces al día, usando solo el dispositivo correspondiente. No usar para un episodio agudo de broncoespasmo [1].",
    "pediatricDose": "Seguridad y eficacia en pacientes pediátricos no establecidas; no crear cálculo pediátrico [1].",
    "renalDose": "El prospecto no requiere ajuste en insuficiencia renal, incluidos los grados evaluados; mantener vigilancia clínica individual.",
    "hepaticDose": "El efecto de la insuficiencia hepática sobre la farmacocinética no fue estudiado en el prospecto consultado; no inferir ajuste posológico.",
    "commonAdverseEffects": "Cefalea, nasofaringitis y tos fueron las reacciones más comunes en el prospecto (≥3% y por encima de placebo); también se notificaron diarrea, sinusitis y rinitis [1].",
    "dangerousAdverseEffects": "Broncoespasmo paradójico, reacción de hipersensibilidad inmediata, empeoramiento del glaucoma de ángulo estrecho y retención urinaria [1].",
    "adverseEffects": "El perfil es anticolinérgico; evaluar síntomas oculares y urinarios, además de cualquier broncoespasmo tras la inhalación. La reacción adversa debe interpretarse en el contexto de la EPOC y la medicación concomitante [1].",
    "contraindications": "El prospecto FDA consultado no enumera una contraindicación formal. Hay precaución con hipersensibilidad inmediata, incluso a proteínas de la leche, y antecedente de reacción a la atropina [1].",
    "interactions": "Evitar la coadministración con otros medicamentos anticolinérgicos por posible suma de efectos. El prospecto no identificó aumento de reacciones con agonistas beta2, metilxantinas o corticoides usados en EPOC [1].",
    "monitoring": "Evaluar control de síntomas y exacerbaciones de EPOC; vigilar broncoespasmo paradójico, dolor ocular/visión borrosa/halos y síntomas de retención urinaria. Confirmar técnica inhalatoria.",
    "administration": "Solo por inhalación oral. Usar el dispositivo específico conforme a las instrucciones del fabricante; no ingerir el polvo ni usarlo como rescate [1].",
    "preparation": "No requiere reconstitución. Mantener el inhalador seco y en su envase hasta el uso; comprobar contador e indicadores del dispositivo según las instrucciones de uso locales.",
    "infusionProtocol": "No aplicable: formulación inhalada, sin protocolo de infusión.",
    "pregnancy": "No hay estudios adecuados y bien controlados en embarazadas en el prospecto consultado; usar solo si el beneficio potencial justifica el riesgo fetal potencial [1].",
    "lactation": "No hay datos humanos adecuados en el prospecto; existen datos animales y se recomienda cautela. Decidir considerando beneficio de la lactancia, necesidad materna y alternativas [1].",
    "specialPopulations": "Personas mayores: no requieren ajuste según el prospecto. Usar cautela en glaucoma de ángulo estrecho, hiperplasia prostática u obstrucción del cuello vesical. Pediatría: no establecido [1].",
    "patientEducation": "Usar regularmente, dos veces al día, y mantener un broncodilatador de rescate apropiado para síntomas agudos según el plan clínico. Buscar atención si aparece falta de aire súbita después de la dosis, dolor ocular/halos o dificultad para orinar.",
    "clinicalPearls": "No convertir automáticamente la dosis nominal entre dispositivos o jurisdicciones. El dato seguro es el régimen indicado en el prospecto del dispositivo dispensado; la técnica inhalatoria es parte esencial de la efectividad.",
    "guidelineRecommendations": "LAMA es una clase de mantenimiento en EPOC; la elección y escalada terapéutica deben seguir evaluación individual de síntomas, exacerbaciones, técnica y disponibilidad local. Esta ficha no sustituye la guía vigente.",
    "safetyFlags": "NO ES RESCATE. Riesgo anticolinérgico local/sistémico: atención a glaucoma de ángulo estrecho y retención urinaria. Evitar asociación con otros anticolinérgicos [1].",
    "alerts": "ALERTA DE DISPOSITIVO: confirmar producto, dosis nominal/liberada y técnica antes de cualquier orientación. Si ocurre broncoespasmo paradójico, suspender y evaluar tratamiento alternativo [1].",
    "references": [
      "1. U.S. FDA. TUDORZA PRESSAIR (aclidinium bromide) inhalation powder — Full Prescribing Information, 2012. https://www.accessdata.fda.gov/drugsatfda_docs/label/2012/202450s000lbl.pdf (o próprio documento informa que pode não ser o rótulo FDA mais recente; disponibilidade e rotulagem local requerem verificação).",
      "2. GOLD. Global Strategy for the Diagnosis, Management, and Prevention of COPD — usar a edição vigente para decisões terapêuticas. https://goldcopd.org/"
    ],
    "ref": "Fuentes principales: prospecto FDA de aclidinio/Tudorza Pressair y guía GOLD vigente. Confirmar el prospecto y la disponibilidad de la jurisdicción antes de dispensar."
  }
};})();
/* GOLD33_SELECTIVE:aclidinio:END */
/* GOLD33_SELECTIVE:ambroxol:START */
;(function(){var db=window.PNEUMOLOGIA_DRUGS_DB;if(!db||!db["ambroxol"])throw new Error("GOLD33_MISSING_CANONICAL:ambroxol");db["ambroxol"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "005",
    "requiredFieldCount": 33,
    "approvedSha256": "a52097a2e20608e28786e280427a4445cb7d16984c62eb2f05df9d280fc142ea",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "mission10-owner-confirmed"
  },
  "pt": {
    "name": "Ambroxol",
    "class": "Mucolítico/expectorante",
    "pharmacologicClass": "Secretolítico derivado da benzilamina",
    "commercialNames": "Usar somente produtos regulatórios citados nas fontes; marcas AR/BR não presumidas.",
    "presentation": "Comprimidos, cápsulas, xaropes, gotas e pastilhas variam entre jurisdições; não assumir concentração.",
    "presentations": "Comprimidos, cápsulas, xaropes, gotas e pastilhas variam entre jurisdições; não assumir concentração.",
    "mechanism": "Secretolítico derivado da benzilamina. O mecanismo deve ser interpretado no contexto da formulação e indicação.",
    "pharmacodynamics": "Resposta e toxicidade são dependentes de exposição, via e população; ver dose e monitorização.",
    "pharmacokinetics": "Absorção oral e metabolismo hepático foram descritos, mas parâmetros variam por formulação; não usar para converter regimes.",
    "indications": "Tratamento sintomático de secreções brônquicas espessas em produtos autorizados nacionalmente; indicação exata varia por país e formulação.",
    "dose": "POSOLOGIA NUMÉRICA BLOQUEADA: confirmar produto, concentração, país e bula local antes de prescrever ou converter volume.",
    "pediatricDose": "Uso, idade mínima e dose dependem da formulação nacional; cálculo por kg não validado. AUTOMATABLE=NO.",
    "renalDose": "Sem algoritmo regulatório único validado; cautela em insuficiência renal grave.",
    "hepaticDose": "Cautela em insuficiência hepática grave; sem ajuste numérico universal.",
    "commonAdverseEffects": "Náusea, alteração do paladar, hipoestesia oral/faríngea e desconforto gastrointestinal podem ocorrer.",
    "dangerousAdverseEffects": "Pequeno risco de reações alérgicas graves e reações cutâneas graves, incluindo eritema multiforme, SJS/NET e AGEP.",
    "adverseEffects": "Náusea, alteração do paladar, hipoestesia oral/faríngea e desconforto gastrointestinal podem ocorrer. Graves: Pequeno risco de reações alérgicas graves e reações cutâneas graves, incluindo eritema multiforme, SJS/NET e AGEP.",
    "contraindications": "Hipersensibilidade ao ambroxol/excipientes; outras contraindicações dependem do produto.",
    "interactions": "Interações clinicamente relevantes devem ser verificadas na bula local; não extrapolar entre combinações.",
    "monitoring": "Resposta sintomática; suspender e avaliar diante de reação alérgica ou lesão cutânea/mucosa.",
    "administration": "Via oral conforme produto; hidratação e técnica de medida apropriada.",
    "preparation": "Não diluir nem converter gotas/mL sem concentração confirmada.",
    "infusionProtocol": "Não aplicável às formulações orais avaliadas.",
    "pregnancy": "Usar apenas após avaliação do produto e benefício-risco, especialmente no primeiro trimestre.",
    "lactation": "Evitar ou individualizar conforme bula local; dados e recomendações variam.",
    "specialPopulations": "Individualizar em idosos, gestação/lactação, disfunção renal/hepática e polifarmácia conforme campos específicos.",
    "patientEducation": "Explicar indicação, técnica, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em fonte regulatória primária; protocolo local pode restringir seleção, sequência e monitorização.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Pequeno risco de reações alérgicas graves e reações cutâneas graves, incluindo eritema multiforme, SJS/NET e AGEP. Posologia, concentração e pediatria bloqueadas até seleção de produto regulatório local.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://www.ema.europa.eu/en/medicines/human/referrals/ambroxol-bromhexine-containing-medicines",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.ema.europa.eu/en/documents/referral/ambroxol-and-bromhexine-article-31-referral-prac-assessment-report_en.pdf"
    ],
    "ref": "https://www.ema.europa.eu/en/medicines/human/referrals/ambroxol-bromhexine-containing-medicines"
  },
  "es": {
    "name": "Ambroxol",
    "class": "Mucolítico/expectorante",
    "pharmacologicClass": "Secretolítico derivado de benzilamina",
    "commercialNames": "Usar solo productos regulatorios citados; no se presumen marcas AR/BR.",
    "presentation": "Comprimidos, cápsulas, jarabes, gotas y pastillas varían entre jurisdicciones; no asumir concentración.",
    "presentations": "Comprimidos, cápsulas, jarabes, gotas y pastillas varían entre jurisdicciones; no asumir concentración.",
    "mechanism": "Secretolítico derivado de benzilamina. El mecanismo debe interpretarse según formulación e indicación.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición, vía y población; ver dosis y monitorización.",
    "pharmacokinetics": "Se describen absorción oral y metabolismo hepático, pero los parámetros varían por formulación; no usar para convertir regímenes.",
    "indications": "Tratamiento sintomático de secreciones bronquiales espesas en productos autorizados nacionalmente; la indicación exacta varía por país y formulación.",
    "dose": "POSOLOGÍA NUMÉRICA BLOQUEADA: confirmar producto, concentración, país y ficha local antes de prescribir o convertir volumen.",
    "pediatricDose": "Uso, edad mínima y dosis dependen de la formulación nacional; cálculo por kg no validado. AUTOMATABLE=NO.",
    "renalDose": "Sin algoritmo regulatorio único validado; precaución en insuficiencia renal grave.",
    "hepaticDose": "Precaución en insuficiencia hepática grave; sin ajuste numérico universal.",
    "commonAdverseEffects": "Náusea, alteración del gusto, hipoestesia oral/faríngea y malestar gastrointestinal pueden ocurrir.",
    "dangerousAdverseEffects": "Pequeño riesgo de reacciones alérgicas graves y reacciones cutáneas graves, incluyendo eritema multiforme, SSJ/NET y PEGA.",
    "adverseEffects": "Náusea, alteración del gusto, hipoestesia oral/faríngea y malestar gastrointestinal pueden ocurrir. Graves: Pequeño riesgo de reacciones alérgicas graves y reacciones cutáneas graves, incluyendo eritema multiforme, SSJ/NET y PEGA.",
    "contraindications": "Hipersensibilidad a ambroxol/excipientes; otras contraindicaciones dependen del producto.",
    "interactions": "Las interacciones clínicamente relevantes deben verificarse en la ficha local; no extrapolar entre combinaciones.",
    "monitoring": "Respuesta sintomática; suspender y evaluar ante reacción alérgica o lesión cutánea/mucosa.",
    "administration": "Vía oral según producto; hidratación y técnica de medición apropiada.",
    "preparation": "No diluir ni convertir gotas/mL sin concentración confirmada.",
    "infusionProtocol": "No aplicable a las formulaciones orales evaluadas.",
    "pregnancy": "Usar solo tras evaluar producto y beneficio-riesgo, especialmente en primer trimestre.",
    "lactation": "Evitar o individualizar según ficha local; datos y recomendaciones varían.",
    "specialPopulations": "Individualizar en ancianos, embarazo/lactancia, disfunción renal/hepática y polifarmacia según campos específicos.",
    "patientEducation": "Explicar indicación, técnica, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en fuente regulatoria primaria; protocolo local puede restringir selección, secuencia y monitorización.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Pequeño riesgo de reacciones alérgicas graves y reacciones cutáneas graves, incluyendo eritema multiforme, SSJ/NET y PEGA. Posologia, concentração e pediatria bloqueadas até seleção de produto regulatório local.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://www.ema.europa.eu/en/medicines/human/referrals/ambroxol-bromhexine-containing-medicines",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.ema.europa.eu/en/documents/referral/ambroxol-and-bromhexine-article-31-referral-prac-assessment-report_en.pdf"
    ],
    "ref": "https://www.ema.europa.eu/en/medicines/human/referrals/ambroxol-bromhexine-containing-medicines"
  }
};})();
/* GOLD33_SELECTIVE:ambroxol:END */
/* GOLD33_SELECTIVE:aminofilina:START */
;(function(){var db=window.PNEUMOLOGIA_DRUGS_DB;if(!db||!db["aminofilina"])throw new Error("GOLD33_MISSING_CANONICAL:aminofilina");db["aminofilina"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "005",
    "requiredFieldCount": 33,
    "approvedSha256": "a52097a2e20608e28786e280427a4445cb7d16984c62eb2f05df9d280fc142ea",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "mission10-owner-confirmed"
  },
  "pt": {
    "name": "Aminofilina",
    "class": "Broncodilatador metilxantínico",
    "pharmacologicClass": "Complexo de teofilina-etilenodiamina; inibidor não seletivo de fosfodiesterase/antagonista de adenosina",
    "commercialNames": "Usar somente produtos regulatórios citados nas fontes; marcas AR/BR não presumidas.",
    "presentation": "Injeção 25 mg/mL (equivalente a 19,7 mg/mL de teofilina anidra), conforme rótulo consultado.",
    "presentations": "Injeção 25 mg/mL (equivalente a 19,7 mg/mL de teofilina anidra), conforme rótulo consultado.",
    "mechanism": "Complexo de teofilina-etilenodiamina; inibidor não seletivo de fosfodiesterase/antagonista de adenosina. O mecanismo deve ser interpretado no contexto da formulação e indicação.",
    "pharmacodynamics": "Resposta e toxicidade são dependentes de exposição, via e população; ver dose e monitorização.",
    "pharmacokinetics": "Conversão rápida em teofilina; metabolismo hepático saturável e altamente variável; meia-vida muda com idade, febre, tabagismo, IC, sepse e hepatopatia.",
    "indications": "Formulação IV para situações selecionadas de broncoespasmo quando outras medidas são insuficientes; janela terapêutica estreita e uso guiado por níveis.",
    "dose": "Ataque em adulto sem teofilina recente: 5,7 mg/kg de aminofilina IV (≈4,6 mg/kg teofilina) em 30 min; manutenção depende de idade, tabagismo, doença e níveis. Não administrar ataque antes de obter nível se houve teofilina nas últimas 24 h.",
    "pediatricDose": "Regimes de manutenção variam muito por idade e depuração; neonatos e lactentes têm metabolismo distinto. AUTOMATABLE=NO; usar protocolo especializado e níveis séricos.",
    "renalDose": "Em adultos, pequena fração inalterada é renal; geralmente sem ajuste isolado, mas metabólitos acumulam em neonatos e insuficiência renal grave. Individualizar por níveis.",
    "hepaticDose": "Reduzir manutenção em hepatopatia/cirrose; depuração pode cair ≥50%. Guiar por concentrações.",
    "commonAdverseEffects": "Náusea, vômito, cefaleia, tremor, insônia e taquicardia.",
    "dangerousAdverseEffects": "Arritmias ventriculares, convulsões, hipotensão e morte; toxicidade pode ocorrer sem sinais leves prévios.",
    "adverseEffects": "Náusea, vômito, cefaleia, tremor, insônia e taquicardia. Graves: Arritmias ventriculares, convulsões, hipotensão e morte; toxicidade pode ocorrer sem sinais leves prévios.",
    "contraindications": "Hipersensibilidade a xantinas ou etilenodiamina; evitar em arritmia/convulsão não controlada salvo benefício excepcional.",
    "interactions": "Muitos inibidores/indutores alteram depuração: macrolídeos, quinolonas, cimetidina, fluvoxamina, anticonvulsivantes e tabagismo; cafeína/xantinas somam toxicidade.",
    "monitoring": "Teofilinemia antes e após ataque/ajustes, FC/ECG, PA, sintomas GI/neurológicos, K, glicemia e estado clínico.",
    "administration": "Infusão IV controlada; nunca bolus rápido. Confirmar exposição prévia a teofilina, peso ideal/ajustado conforme protocolo e interações.",
    "preparation": "Diluir em solução IV compatível conforme protocolo institucional; calcular em equivalente de teofilina quando exigido pelo rótulo.",
    "infusionProtocol": "Ataque ao longo de 30 min; taxa não superior a 21 mg/h de aminofilina por kg. Manutenção contínua somente com bomba e monitorização.",
    "pregnancy": "Atravessa placenta; usar somente quando benefício justificar risco e monitorar níveis devido a alterações de depuração.",
    "lactation": "Teofilina passa ao leite e pode causar irritabilidade; observar lactente.",
    "specialPopulations": "Individualizar em idosos, gestação/lactação, disfunção renal/hepática e polifarmácia conforme campos específicos.",
    "patientEducation": "Explicar indicação, técnica, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em fonte regulatória primária; protocolo local pode restringir seleção, sequência e monitorização.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Arritmias ventriculares, convulsões, hipotensão e morte; toxicidade pode ocorrer sem sinais leves prévios. Ataque/manutenção bloqueados sem nível prévio, peso, idade, tabagismo, interações e função hepática.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9a663ef3-881f-48bd-2689-3713b24545c2"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9a663ef3-881f-48bd-2689-3713b24545c2"
  },
  "es": {
    "name": "Aminofilina",
    "class": "Broncodilatador metilxantínico",
    "pharmacologicClass": "Complejo teofilina-etilendiamina; inhibidor no selectivo de fosfodiesterasa/antagonista de adenosina",
    "commercialNames": "Usar solo productos regulatorios citados; no se presumen marcas AR/BR.",
    "presentation": "Inyección 25 mg/mL (equivalente a 19,7 mg/mL de teofilina anhidra), según ficha consultada.",
    "presentations": "Inyección 25 mg/mL (equivalente a 19,7 mg/mL de teofilina anhidra), según ficha consultada.",
    "mechanism": "Complejo teofilina-etilendiamina; inhibidor no selectivo de fosfodiesterasa/antagonista de adenosina. El mecanismo debe interpretarse según formulación e indicación.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición, vía y población; ver dosis y monitorización.",
    "pharmacokinetics": "Conversión rápida en teofilina; metabolismo hepático saturable y muy variable; semivida cambia con edad, fiebre, tabaco, IC, sepsis y hepatopatía.",
    "indications": "Formulación IV para broncoespasmo seleccionado cuando otras medidas son insuficientes; margen terapéutico estrecho y uso guiado por niveles.",
    "dose": "Carga en adulto sin teofilina reciente: 5,7 mg/kg de aminofilina IV (≈4,6 mg/kg teofilina) en 30 min; mantenimiento depende de edad, tabaquismo, enfermedad y niveles. No dar carga antes de nivel si hubo teofilina en 24 h.",
    "pediatricDose": "Los regímenes de mantenimiento varían mucho por edad y depuración; neonatos y lactantes tienen metabolismo distinto. AUTOMATABLE=NO; usar protocolo especializado y niveles séricos.",
    "renalDose": "En adultos, pequeña fracción sin cambios es renal; generalmente sin ajuste aislado, pero metabolitos acumulan en neonatos e insuficiencia renal grave. Individualizar por niveles.",
    "hepaticDose": "Reducir mantenimiento en hepatopatía/cirrosis; depuración puede caer ≥50%. Guiar por concentraciones.",
    "commonAdverseEffects": "Náusea, vómito, cefalea, temblor, insomnio y taquicardia.",
    "dangerousAdverseEffects": "Arritmias ventriculares, convulsiones, hipotensión y muerte; toxicidad puede aparecer sin signos leves previos.",
    "adverseEffects": "Náusea, vómito, cefalea, temblor, insomnio y taquicardia. Graves: Arritmias ventriculares, convulsiones, hipotensión y muerte; toxicidad puede aparecer sin signos leves previos.",
    "contraindications": "Hipersensibilidad a xantinas o etilendiamina; evitar en arritmia/convulsión no controlada salvo beneficio excepcional.",
    "interactions": "Muchos inhibidores/inductores alteran depuración: macrólidos, quinolonas, cimetidina, fluvoxamina, anticonvulsivantes y tabaco; cafeína/xantinas suman toxicidad.",
    "monitoring": "Teofilinemia antes y después de carga/ajustes, FC/ECG, PA, síntomas GI/neurológicos, K, glucemia y estado clínico.",
    "administration": "Infusión IV controlada; nunca bolo rápido. Confirmar exposición previa a teofilina, peso y interacciones.",
    "preparation": "Diluir en solución IV compatible según protocolo; calcular en equivalente de teofilina cuando lo exija la ficha.",
    "infusionProtocol": "Carga durante 30 min; velocidad no superior a 21 mg/h de aminofilina por kg. Mantenimiento continuo solo con bomba y monitorización.",
    "pregnancy": "Cruza placenta; usar solo si beneficio justifica riesgo y controlar niveles por cambios de depuración.",
    "lactation": "Teofilina pasa a leche y puede causar irritabilidad; vigilar lactante.",
    "specialPopulations": "Individualizar en ancianos, embarazo/lactancia, disfunción renal/hepática y polifarmacia según campos específicos.",
    "patientEducation": "Explicar indicación, técnica, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en fuente regulatoria primaria; protocolo local puede restringir selección, secuencia y monitorización.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Arritmias ventriculares, convulsiones, hipotensión y muerte; toxicidad puede aparecer sin signos leves previos. Ataque/manutenção bloqueados sem nível prévio, peso, idade, tabagismo, interações e função hepática.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9a663ef3-881f-48bd-2689-3713b24545c2"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9a663ef3-881f-48bd-2689-3713b24545c2"
  }
};})();
/* GOLD33_SELECTIVE:aminofilina:END */
/* GOLD33_SELECTIVE:beclometasona:START */
;(function(){var db=window.PNEUMOLOGIA_DRUGS_DB;if(!db||!db["beclometasona"])throw new Error("GOLD33_MISSING_CANONICAL:beclometasona");db["beclometasona"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "009",
    "requiredFieldCount": 33,
    "approvedSha256": "fbc238c39aa4dcfb79f685d3fa8aff362a039b63478bae6431f19e116a408e10",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "mission10-owner-confirmed"
  },
  "pt": {
    "name": "Beclometasona dipropionato inalatória",
    "class": "Corticosteroide inalatório",
    "pharmacologicClass": "Glicocorticoide anti-inflamatório local",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Inaladores de 40/80 mcg por atuação (QVAR RediHaler) e outras formulações/partículas conforme mercado; não são equivalentes mcg a mcg.",
    "presentations": "Inaladores de 40/80 mcg por atuação (QVAR RediHaler) e outras formulações/partículas conforme mercado; não são equivalentes mcg a mcg.",
    "mechanism": "Glicocorticoide anti-inflamatório local. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Pró-fármaco ativado a beclometasona-17-monopropionato; absorção pulmonar; metabolismo por esterases; meia-vida do metabólito ativo ~2,8 h.",
    "indications": "Manutenção da asma; não indicada para alívio de broncoespasmo agudo.",
    "dose": "QVAR RediHaler ≥12 anos: 40 ou 80 mcg 2x/dia conforme terapia prévia; máximo 320 mcg 2x/dia. Confirmar formulação.",
    "pediatricDose": "4-11 anos no QVAR RediHaler: 40 mcg 2x/dia; máximo 80 mcg 2x/dia. AUTOMATABLE=NO sem produto/dispositivo.",
    "renalDose": "Sem ajuste específico; exposição sistêmica geralmente baixa.",
    "hepaticDose": "Sem ajuste estabelecido; cautela em doença grave.",
    "commonAdverseEffects": "Candidíase oral, disfonia, faringite, tosse e cefaleia.",
    "dangerousAdverseEffects": "Broncoespasmo paradoxal, supressão adrenal, redução de crescimento, glaucoma/catarata e infecções.",
    "adverseEffects": "Candidíase oral, disfonia, faringite, tosse e cefaleia. Graves: Broncoespasmo paradoxal, supressão adrenal, redução de crescimento, glaucoma/catarata e infecções.",
    "contraindications": "Hipersensibilidade; tratamento primário de estado de mal asmático/episódio agudo.",
    "interactions": "Inibidores fortes CYP3A podem aumentar efeitos sistêmicos; outros imunossupressores elevam risco de infecção.",
    "monitoring": "Controle da asma, uso de resgate, técnica/adesão, crescimento infantil, candidíase, olhos e efeitos adrenais em altas doses.",
    "administration": "Inalar regularmente; enxaguar boca sem engolir. RediHaler é ativado pela inspiração e não usa espaçador.",
    "preparation": "Não agitar nem lavar o RediHaler; manter seco. Técnica depende do dispositivo.",
    "infusionProtocol": "Não aplicável.",
    "pregnancy": "Manter controle materno da asma; usar menor dose eficaz.",
    "lactation": "Exposição sistêmica baixa; geralmente compatível, individualizar.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Broncoespasmo paradoxal, supressão adrenal, redução de crescimento, glaucoma/catarata e infecções. Dose bloqueada sem idade, gravidade, terapia prévia e dispositivo/formulação exatos; não converter microgramas entre produtos.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=QVAR+REDIHALER",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2017/207921s000lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=QVAR+REDIHALER"
  },
  "es": {
    "name": "Beclometasona dipropionato inhalada",
    "class": "Corticosteroide inhalado",
    "pharmacologicClass": "Glucocorticoide antiinflamatorio local",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Inhaladores de 40/80 mcg por actuación (QVAR RediHaler) y otras formulaciones/partículas según mercado; no equivalen mcg a mcg.",
    "presentations": "Inhaladores de 40/80 mcg por actuación (QVAR RediHaler) y otras formulaciones/partículas según mercado; no equivalen mcg a mcg.",
    "mechanism": "Glucocorticoide antiinflamatorio local. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Profármaco activado a beclometasona-17-monopropionato; absorción pulmonar; metabolismo por esterasas; semivida del metabolito activo ~2,8 h.",
    "indications": "Mantenimiento del asma; no indicada para alivio de broncoespasmo agudo.",
    "dose": "QVAR RediHaler ≥12 años: 40 u 80 mcg 2 veces/día según terapia previa; máximo 320 mcg 2 veces/día. Confirmar formulación.",
    "pediatricDose": "4-11 años con QVAR RediHaler: 40 mcg 2 veces/día; máximo 80 mcg 2 veces/día. AUTOMATABLE=NO sin producto/dispositivo.",
    "renalDose": "Sin ajuste específico; exposición sistémica generalmente baja.",
    "hepaticDose": "Sin ajuste establecido; precaución en enfermedad grave.",
    "commonAdverseEffects": "Candidiasis oral, disfonía, faringitis, tos y cefalea.",
    "dangerousAdverseEffects": "Broncoespasmo paradójico, supresión suprarrenal, reducción de crecimiento, glaucoma/catarata e infecciones.",
    "adverseEffects": "Candidiasis oral, disfonía, faringitis, tos y cefalea. Graves: Broncoespasmo paradójico, supresión suprarrenal, reducción de crecimiento, glaucoma/catarata e infecciones.",
    "contraindications": "Hipersensibilidad; tratamiento primario de estado asmático/episodio agudo.",
    "interactions": "Inhibidores fuertes CYP3A pueden aumentar efectos sistémicos; otros inmunosupresores elevan riesgo de infección.",
    "monitoring": "Control del asma, rescate, técnica/adherencia, crecimiento infantil, candidiasis, ojos y efectos suprarrenales a dosis altas.",
    "administration": "Inhalar regularmente; enjuagar boca sin tragar. RediHaler se activa por inspiración y no usa cámara.",
    "preparation": "No agitar ni lavar RediHaler; mantener seco. Técnica depende del dispositivo.",
    "infusionProtocol": "No aplicable.",
    "pregnancy": "Mantener control materno del asma; usar mínima dosis eficaz.",
    "lactation": "Exposición sistémica baja; generalmente compatible, individualizar.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Broncoespasmo paradójico, supresión suprarrenal, reducción de crecimiento, glaucoma/catarata e infecciones. Dose bloqueada sem idade, gravidade, terapia prévia e dispositivo/formulação exatos; não converter microgramas entre produtos.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=QVAR+REDIHALER",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2017/207921s000lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=QVAR+REDIHALER"
  }
};})();
/* GOLD33_SELECTIVE:beclometasona:END */
/* GOLD33_SELECTIVE:beclometasona_formoterol:START */
;(function(){var db=window.PNEUMOLOGIA_DRUGS_DB;if(!db||!db["beclometasona_formoterol"])throw new Error("GOLD33_MISSING_CANONICAL:beclometasona_formoterol");db["beclometasona_formoterol"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "009",
    "requiredFieldCount": 33,
    "approvedSha256": "fbc238c39aa4dcfb79f685d3fa8aff362a039b63478bae6431f19e116a408e10",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "mission10-owner-confirmed"
  },
  "pt": {
    "name": "Beclometasona + formoterol",
    "class": "Corticosteroide inalatório + LABA",
    "pharmacologicClass": "Anti-inflamatório glicocorticoide + agonista beta-2 de longa ação",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Aerossol extrafino 100/6 ou 200/6 mcg e pó seco em forças relacionadas, conforme mercado.",
    "presentations": "Aerossol extrafino 100/6 ou 200/6 mcg e pó seco em forças relacionadas, conforme mercado.",
    "mechanism": "Anti-inflamatório glicocorticoide + agonista beta-2 de longa ação. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Beclometasona ativada por esterases; formoterol absorção rápida, metabolismo por conjugação/CYP e meia-vida terminal ~10 h.",
    "indications": "Manutenção da asma; alguns produtos permitem manutenção e alívio (MART). Indicações e doses dependem do dispositivo e jurisdição.",
    "dose": "Exemplo Fostair 100/6: 1-2 inalações 2x/dia, máximo 4/dia em manutenção; no MART, 1 inalação 2x/dia + 1 por sintomas, máximo total 8/dia. Confirmar SmPC/produto.",
    "pediatricDose": "Regimes pediátricos variam e muitos produtos não são autorizados <18 anos. AUTOMATABLE=NO.",
    "renalDose": "Sem ajuste específico; experiência limitada em insuficiência grave.",
    "hepaticDose": "Sem ajuste específico; cautela em insuficiência grave.",
    "commonAdverseEffects": "Candidíase, disfonia, cefaleia, tremor, palpitações e irritação faríngea.",
    "dangerousAdverseEffects": "Broncoespasmo paradoxal, arritmia/hipocalemia, supressão adrenal, pneumonia e exacerbação por uso inadequado.",
    "adverseEffects": "Candidíase, disfonia, cefaleia, tremor, palpitações e irritação faríngea. Graves: Broncoespasmo paradoxal, arritmia/hipocalemia, supressão adrenal, pneumonia e exacerbação por uso inadequado.",
    "contraindications": "Hipersensibilidade; não usar como tratamento único de crise grave.",
    "interactions": "Beta-bloqueadores antagonizam formoterol; outros simpaticomiméticos, QT-prolongadores, diuréticos e xantinas aumentam riscos; fortes CYP3A elevam corticoide.",
    "monitoring": "Controle, resgate, técnica, FC/PA, K/glicose se risco, candidíase, crescimento e efeitos sistêmicos.",
    "administration": "Inalar conforme dispositivo; enxaguar boca; usar espaçador quando autorizado para pMDI e dificuldade de coordenação.",
    "preparation": "Preparar/cebar/limpar conforme dispositivo; não intercambiar pMDI e DPI.",
    "infusionProtocol": "Não aplicável.",
    "pregnancy": "Usar menor dose eficaz para manter controle; dados de combinação limitados.",
    "lactation": "Exposição sistêmica baixa; individualizar e observar lactente.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Broncoespasmo paradoxal, arritmia/hipocalemia, supressão adrenal, pneumonia e exacerbação por uso inadequado. Regime MART, máximo e técnica bloqueados sem marca, força, dispositivo, idade, indicação e plano de ação.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://www.medicines.org.uk/emc/product/6318/smpc",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://ginasthma.org/strategy-report/"
    ],
    "ref": "https://www.medicines.org.uk/emc/product/6318/smpc"
  },
  "es": {
    "name": "Beclometasona + formoterol",
    "class": "Corticosteroide inhalado + LABA",
    "pharmacologicClass": "Antiinflamatorio glucocorticoide + agonista beta-2 de larga acción",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Aerosol extrafino 100/6 o 200/6 mcg y polvo seco en concentraciones relacionadas, según mercado.",
    "presentations": "Aerosol extrafino 100/6 o 200/6 mcg y polvo seco en concentraciones relacionadas, según mercado.",
    "mechanism": "Antiinflamatorio glucocorticoide + agonista beta-2 de larga acción. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Beclometasona activada por esterasas; formoterol absorción rápida, metabolismo por conjugación/CYP y semivida terminal ~10 h.",
    "indications": "Mantenimiento del asma; algunos productos permiten mantenimiento y alivio (MART). Indicaciones y dosis dependen del dispositivo y jurisdicción.",
    "dose": "Ejemplo Fostair 100/6: 1-2 inhalaciones 2 veces/día, máximo 4/día en mantenimiento; en MART, 1 inhalación 2 veces/día + 1 por síntomas, máximo total 8/día. Confirmar ficha/producto.",
    "pediatricDose": "Regímenes pediátricos varían y muchos productos no están autorizados <18 años. AUTOMATABLE=NO.",
    "renalDose": "Sin ajuste específico; experiencia limitada en insuficiencia grave.",
    "hepaticDose": "Sin ajuste específico; precaución en insuficiencia grave.",
    "commonAdverseEffects": "Candidiasis, disfonía, cefalea, temblor, palpitaciones e irritación faríngea.",
    "dangerousAdverseEffects": "Broncoespasmo paradójico, arritmia/hipopotasemia, supresión suprarrenal, neumonía y exacerbación por uso inadecuado.",
    "adverseEffects": "Candidiasis, disfonía, cefalea, temblor, palpitaciones e irritación faríngea. Graves: Broncoespasmo paradójico, arritmia/hipopotasemia, supresión suprarrenal, neumonía y exacerbación por uso inadecuado.",
    "contraindications": "Hipersensibilidad; no usar como único tratamiento de crisis grave.",
    "interactions": "Betabloqueantes antagonizan formoterol; simpaticomiméticos, prolongadores QT, diuréticos y xantinas aumentan riesgos; CYP3A fuerte eleva corticoide.",
    "monitoring": "Control, rescate, técnica, FC/PA, K/glucosa si riesgo, candidiasis, crecimiento y efectos sistémicos.",
    "administration": "Inhalar según dispositivo; enjuagar boca; usar cámara cuando esté autorizada para pMDI y mala coordinación.",
    "preparation": "Preparar/cebar/limpiar según dispositivo; no intercambiar pMDI y DPI.",
    "infusionProtocol": "No aplicable.",
    "pregnancy": "Usar mínima dosis eficaz para mantener control; datos de combinación limitados.",
    "lactation": "Exposición sistémica baja; individualizar y vigilar lactante.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Broncoespasmo paradójico, arritmia/hipopotasemia, supresión suprarrenal, neumonía y exacerbación por uso inadecuado. Regime MART, máximo e técnica bloqueados sem marca, força, dispositivo, idade, indicação e plano de ação.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://www.medicines.org.uk/emc/product/6318/smpc",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://ginasthma.org/strategy-report/"
    ],
    "ref": "https://www.medicines.org.uk/emc/product/6318/smpc"
  }
};})();
/* GOLD33_SELECTIVE:beclometasona_formoterol:END */
/* GOLD33_SELECTIVE:beclometasona_formoterol_glicopirronio:START */
;(function(){var db=window.PNEUMOLOGIA_DRUGS_DB;if(!db||!db["beclometasona_formoterol_glicopirronio"])throw new Error("GOLD33_MISSING_CANONICAL:beclometasona_formoterol_glicopirronio");db["beclometasona_formoterol_glicopirronio"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "009",
    "requiredFieldCount": 33,
    "approvedSha256": "fbc238c39aa4dcfb79f685d3fa8aff362a039b63478bae6431f19e116a408e10",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "mission10-owner-confirmed"
  },
  "pt": {
    "name": "Beclometasona + formoterol + glicopirrônio",
    "class": "ICS/LABA/LAMA inalatório",
    "pharmacologicClass": "Glicocorticoide + agonista beta-2 prolongado + antimuscarínico prolongado",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Aerossol 87/5/9 ou 172/5/9 mcg por dose liberada e DPI com forças específicas; confirmar produto.",
    "presentations": "Aerossol 87/5/9 ou 172/5/9 mcg por dose liberada e DPI com forças específicas; confirmar produto.",
    "mechanism": "Glicocorticoide + agonista beta-2 prolongado + antimuscarínico prolongado. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Deposição pulmonar extrafina; beclometasona ativada por esterases, formoterol metabolizado/conjugado e glicopirrônio eliminado em parte por via renal.",
    "indications": "Manutenção de DPOC e, para determinadas forças/jurisdições, asma não controlada em adultos.",
    "dose": "Duas inalações 2x/dia; máximo duas inalações 2x/dia. Não usar para alívio agudo.",
    "pediatricDose": "Não indicada <18 anos. AUTOMATABLE=NO.",
    "renalDose": "Sem ajuste leve/moderado; em grave/DRT usar somente se benefício superar risco, sobretudo pelo glicopirrônio.",
    "hepaticDose": "Dados limitados em grave; usar com cautela.",
    "commonAdverseEffects": "Candidíase, disfonia, boca seca, cefaleia, tremor e infecção respiratória.",
    "dangerousAdverseEffects": "Pneumonia, broncoespasmo paradoxal, arritmia/hipocalemia, retenção urinária, glaucoma agudo e supressão adrenal.",
    "adverseEffects": "Candidíase, disfonia, boca seca, cefaleia, tremor e infecção respiratória. Graves: Pneumonia, broncoespasmo paradoxal, arritmia/hipocalemia, retenção urinária, glaucoma agudo e supressão adrenal.",
    "contraindications": "Hipersensibilidade; não iniciar em exacerbação aguda/estado de mal asmático.",
    "interactions": "Beta-bloqueadores, anticolinérgicos, simpaticomiméticos, QT-prolongadores, diuréticos/xantinas e fortes CYP3A.",
    "monitoring": "Sintomas/exacerbações, uso de resgate, técnica, pneumonia, candidíase, retenção urinária, glaucoma, FC/PA, K e glicose.",
    "administration": "Inalar regularmente; enxaguar boca; manter broncodilatador de resgate separado.",
    "preparation": "Cebar e limpar conforme pMDI/DPI; espaçador apenas quando permitido para o dispositivo.",
    "infusionProtocol": "Não aplicável.",
    "pregnancy": "Dados limitados; usar apenas se benefício justificar.",
    "lactation": "Dados limitados; decidir entre tratamento e amamentação.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Pneumonia, broncoespasmo paradoxal, arritmia/hipocalemia, retenção urinária, glaucoma agudo e supressão adrenal. Dose/indicação bloqueadas sem diagnóstico DPOC versus asma, força, dispositivo, função renal e confirmação regulatória local.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://www.ema.europa.eu/en/medicines/human/EPAR/trimbow",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.ndf.gov.sg/about-drugs/product-information/sin15924p/"
    ],
    "ref": "https://www.ema.europa.eu/en/medicines/human/EPAR/trimbow"
  },
  "es": {
    "name": "Beclometasona + formoterol + glicopirronio",
    "class": "ICS/LABA/LAMA inhalado",
    "pharmacologicClass": "Glucocorticoide + agonista beta-2 prolongado + antimuscarínico prolongado",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Aerosol 87/5/9 o 172/5/9 mcg por dosis liberada y DPI con concentraciones específicas; confirmar producto.",
    "presentations": "Aerosol 87/5/9 o 172/5/9 mcg por dosis liberada y DPI con concentraciones específicas; confirmar producto.",
    "mechanism": "Glucocorticoide + agonista beta-2 prolongado + antimuscarínico prolongado. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Depósito pulmonar extrafino; beclometasona activada por esterasas, formoterol metabolizado/conjugado y glicopirronio parcialmente renal.",
    "indications": "Mantenimiento de EPOC y, para ciertas concentraciones/jurisdicciones, asma no controlada en adultos.",
    "dose": "Dos inhalaciones 2 veces/día; máximo dos inhalaciones 2 veces/día. No usar para alivio agudo.",
    "pediatricDose": "No indicada <18 años. AUTOMATABLE=NO.",
    "renalDose": "Sin ajuste leve/moderado; en grave/ERT usar solo si beneficio supera riesgo, especialmente por glicopirronio.",
    "hepaticDose": "Datos limitados en grave; usar con precaución.",
    "commonAdverseEffects": "Candidiasis, disfonía, boca seca, cefalea, temblor e infección respiratoria.",
    "dangerousAdverseEffects": "Neumonía, broncoespasmo paradójico, arritmia/hipopotasemia, retención urinaria, glaucoma agudo y supresión suprarrenal.",
    "adverseEffects": "Candidiasis, disfonía, boca seca, cefalea, temblor e infección respiratoria. Graves: Neumonía, broncoespasmo paradójico, arritmia/hipopotasemia, retención urinaria, glaucoma agudo y supresión suprarrenal.",
    "contraindications": "Hipersensibilidad; no iniciar en exacerbación aguda/estado asmático.",
    "interactions": "Betabloqueantes, anticolinérgicos, simpaticomiméticos, prolongadores QT, diuréticos/xantinas y CYP3A fuertes.",
    "monitoring": "Síntomas/exacerbaciones, rescate, técnica, neumonía, candidiasis, retención urinaria, glaucoma, FC/PA, K y glucosa.",
    "administration": "Inhalar regularmente; enjuagar boca; mantener broncodilatador de rescate separado.",
    "preparation": "Cebar y limpiar según pMDI/DPI; cámara solo cuando esté permitida para el dispositivo.",
    "infusionProtocol": "No aplicable.",
    "pregnancy": "Datos limitados; usar solo si beneficio lo justifica.",
    "lactation": "Datos limitados; decidir entre tratamiento y lactancia.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Neumonía, broncoespasmo paradójico, arritmia/hipopotasemia, retención urinaria, glaucoma agudo y supresión suprarrenal. Dose/indicação bloqueadas sem diagnóstico DPOC versus asma, força, dispositivo, função renal e confirmação regulatória local.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://www.ema.europa.eu/en/medicines/human/EPAR/trimbow",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.ndf.gov.sg/about-drugs/product-information/sin15924p/"
    ],
    "ref": "https://www.ema.europa.eu/en/medicines/human/EPAR/trimbow"
  }
};})();
/* GOLD33_SELECTIVE:beclometasona_formoterol_glicopirronio:END */
/* GOLD33_SELECTIVE:benralizumabe:START */
;(function(){var db=window.PNEUMOLOGIA_DRUGS_DB;if(!db||!db["benralizumabe"])throw new Error("GOLD33_MISSING_CANONICAL:benralizumabe");db["benralizumabe"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "010",
    "requiredFieldCount": 33,
    "approvedSha256": "f3d905f789b704e06b68dc3e394b05b58bc2a0f9b68ae6180e4ebb22ad653e12",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "mission10-owner-confirmed"
  },
  "pt": {
    "name": "Benralizumabe",
    "class": "Anticorpo monoclonal anti-IL-5Rα",
    "pharmacologicClass": "Liga IL-5Rα e promove depleção de eosinófilos por citotoxicidade celular",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Seringa/caneta preenchida para uso subcutâneo; apresentações variam por país e faixa etária.",
    "presentations": "Seringa/caneta preenchida para uso subcutâneo; apresentações variam por país e faixa etária.",
    "mechanism": "Liga IL-5Rα e promove depleção de eosinófilos por citotoxicidade celular. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Biodisponibilidade SC ~59%; meia-vida ~15,5 dias; catabolismo proteolítico, sem CYP relevante.",
    "indications": "Tratamento adicional de manutenção da asma eosinofílica grave; não trata broncoespasmo agudo.",
    "dose": "Adultos e ≥12 anos: 30 mg SC a cada 4 semanas nas três primeiras doses e depois a cada 8 semanas.",
    "pediatricDose": "6-11 anos: dose depende do peso e produto autorizado (rótulo dos EUA: <35 kg, 10 mg; ≥35 kg, 30 mg), no mesmo calendário. AUTOMATABLE=NO sem peso/produto.",
    "renalDose": "Não se espera ajuste; dados em disfunção grave são limitados.",
    "hepaticDose": "Não se espera ajuste; não há estudo formal.",
    "commonAdverseEffects": "Cefaleia, faringite e reação no local.",
    "dangerousAdverseEffects": "Anafilaxia/hipersensibilidade tardia e possível alteração da resposta a helmintos.",
    "adverseEffects": "Cefaleia, faringite e reação no local. Graves: Anafilaxia/hipersensibilidade tardia e possível alteração da resposta a helmintos.",
    "contraindications": "Hipersensibilidade ao fármaco/excipientes.",
    "interactions": "Interações metabólicas clinicamente relevantes não são esperadas; não interromper corticoide abruptamente. Tratar helmintíase antes.",
    "monitoring": "Exacerbações, controle, uso de resgate, eosinófilos no contexto, hipersensibilidade e infecções helmínticas.",
    "administration": "SC em coxa/abdome; braço por cuidador/profissional. Observar conforme risco de hipersensibilidade.",
    "preparation": "Retirar da refrigeração conforme bula; não agitar, congelar nem expor ao calor; inspecionar solução.",
    "infusionProtocol": "Não aplicável.",
    "pregnancy": "Dados humanos insuficientes; anticorpos IgG atravessam placenta, sobretudo no 3º trimestre. Individualizar.",
    "lactation": "Dados insuficientes; considerar benefício materno e exposição do lactente.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Anafilaxia/hipersensibilidade tardia e possível alteração da resposta a helmintos. Seleção/dose bloqueadas sem idade, peso, fenótipo eosinofílico, produto local e plano para exacerbação.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=FASENRA",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/761070s021lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=FASENRA"
  },
  "es": {
    "name": "Benralizumab",
    "class": "Anticuerpo monoclonal anti-IL-5Rα",
    "pharmacologicClass": "Se une a IL-5Rα y produce depleción de eosinófilos por citotoxicidad celular",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Jeringa/pluma precargada subcutánea; presentaciones varían por país y edad.",
    "presentations": "Jeringa/pluma precargada subcutánea; presentaciones varían por país y edad.",
    "mechanism": "Se une a IL-5Rα y produce depleción de eosinófilos por citotoxicidad celular. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Biodisponibilidad SC ~59%; semivida ~15,5 días; catabolismo proteolítico, sin CYP relevante.",
    "indications": "Tratamiento adicional de mantenimiento del asma eosinofílica grave; no trata broncoespasmo agudo.",
    "dose": "Adultos y ≥12 años: 30 mg SC cada 4 semanas las tres primeras dosis y luego cada 8 semanas.",
    "pediatricDose": "6-11 años: dosis depende del peso y producto autorizado (ficha EE. UU.: <35 kg, 10 mg; ≥35 kg, 30 mg), mismo calendario. AUTOMATABLE=NO sin peso/producto.",
    "renalDose": "No se espera ajuste; datos limitados en disfunción grave.",
    "hepaticDose": "No se espera ajuste; no hay estudio formal.",
    "commonAdverseEffects": "Cefalea, faringitis y reacción local.",
    "dangerousAdverseEffects": "Anafilaxia/hipersensibilidad tardía y posible alteración de respuesta a helmintos.",
    "adverseEffects": "Cefalea, faringitis y reacción local. Graves: Anafilaxia/hipersensibilidad tardía y posible alteración de respuesta a helmintos.",
    "contraindications": "Hipersensibilidad al fármaco/excipientes.",
    "interactions": "No se esperan interacciones metabólicas relevantes; no retirar corticoide bruscamente. Tratar helmintiasis antes.",
    "monitoring": "Exacerbaciones, control, rescate, eosinófilos en contexto, hipersensibilidad e infecciones helmínticas.",
    "administration": "SC en muslo/abdomen; brazo por cuidador/profesional. Observar según riesgo de hipersensibilidad.",
    "preparation": "Retirar de refrigeración según ficha; no agitar, congelar ni exponer al calor; inspeccionar solución.",
    "infusionProtocol": "No aplicable.",
    "pregnancy": "Datos humanos insuficientes; IgG atraviesa placenta, sobre todo en tercer trimestre. Individualizar.",
    "lactation": "Datos insuficientes; considerar beneficio materno y exposición del lactante.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Anafilaxia/hipersensibilidad tardía y posible alteración de respuesta a helmintos. Seleção/dose bloqueadas sem idade, peso, fenótipo eosinofílico, produto local e plano para exacerbação.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=FASENRA",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/761070s021lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=FASENRA"
  }
};})();
/* GOLD33_SELECTIVE:benralizumabe:END */
/* GOLD33_SELECTIVE:bromexina:START */
;(function(){var db=window.PNEUMOLOGIA_DRUGS_DB;if(!db||!db["bromexina"])throw new Error("GOLD33_MISSING_CANONICAL:bromexina");db["bromexina"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "011",
    "requiredFieldCount": 33,
    "approvedSha256": "7b76ae47c1977e8ef5a9181eab9814d1b9fae210d78f43b2fc0fe9534c35db7d",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "mission10-owner-confirmed"
  },
  "pt": {
    "name": "Bromexina",
    "class": "Mucolítico",
    "pharmacologicClass": "Reduz viscosidade do muco e favorece depuração mucociliar",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Comprimidos 8 mg e solução/xarope com concentrações variáveis; confirmar produto.",
    "presentations": "Comprimidos 8 mg e solução/xarope com concentrações variáveis; confirmar produto.",
    "mechanism": "Reduz viscosidade do muco e favorece depuração mucociliar. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Absorção rápida com alto efeito de primeira passagem; metabólito ambroxol; meia-vida terminal aproximada 12-15 h.",
    "indications": "Terapia secretolítica em doenças broncopulmonares com muco viscoso, conforme autorização local; não substitui avaliação de tosse persistente.",
    "dose": "Adultos e ≥12 anos: frequentemente 8 mg VO 3x/dia; alguns produtos permitem 16 mg 3x/dia inicialmente. Seguir SmPC local.",
    "pediatricDose": "6-11 anos: frequentemente 4 mg 3x/dia; 2-5 anos: 2 mg 3x/dia em produtos autorizados. <2 anos: não usar sem orientação/regulação local. AUTOMATABLE=NO.",
    "renalDose": "Sem ajuste estabelecido; metabólitos podem acumular, usar cautela em grave.",
    "hepaticDose": "Cautela/redução em insuficiência grave por metabolismo hepático.",
    "commonAdverseEffects": "Náusea, dor epigástrica, vômito, diarreia e cefaleia.",
    "dangerousAdverseEffects": "Anafilaxia e reações cutâneas graves como SJS/TEN/AGEP, raras; interromper diante de lesões de pele/mucosa.",
    "adverseEffects": "Náusea, dor epigástrica, vômito, diarreia e cefaleia. Graves: Anafilaxia e reações cutâneas graves como SJS/TEN/AGEP, raras; interromper diante de lesões de pele/mucosa.",
    "contraindications": "Hipersensibilidade; contraindicações etárias dependem do produto.",
    "interactions": "Não combinar rotineiramente com antitussígenos que impeçam expectoração; antibióticos podem ter maior penetração em secreções.",
    "monitoring": "Resposta, volume/eliminação de secreções, sintomas persistentes, pele/mucosas e função renal/hepática se grave.",
    "administration": "VO, preferencialmente após alimento se desconforto; hidratação adequada.",
    "preparation": "Medir líquido com dispositivo; confirmar mg/mL.",
    "infusionProtocol": "Não aplicável.",
    "pregnancy": "Dados limitados; evitar no primeiro trimestre por precaução e usar apenas se necessário.",
    "lactation": "Provável excreção; não recomendada durante amamentação segundo algumas bulas.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Anafilaxia e reações cutâneas graves como SJS/TEN/AGEP, raras; interromper diante de lesões de pele/mucosa. Dose bloqueada sem idade/peso, concentração/produto autorizado, causa da tosse e função renal/hepática; alerta cutâneo obrigatório.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://smpcs.mcaz.co.zw/medicine/bromhexine-8mg-tablets/",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.ema.europa.eu/en/medicines/human/referrals/ambroxol-bromhexine-containing-medicines"
    ],
    "ref": "https://smpcs.mcaz.co.zw/medicine/bromhexine-8mg-tablets/"
  },
  "es": {
    "name": "Bromhexina",
    "class": "Mucolítico",
    "pharmacologicClass": "Reduce viscosidad del moco y favorece aclaramiento mucociliar",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Comprimidos 8 mg y solución/jarabe con concentraciones variables; confirmar producto.",
    "presentations": "Comprimidos 8 mg y solución/jarabe con concentraciones variables; confirmar producto.",
    "mechanism": "Reduce viscosidad del moco y favorece aclaramiento mucociliar. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Absorción rápida con alto primer paso; metabolito ambroxol; semivida terminal aproximada 12-15 h.",
    "indications": "Terapia secretolítica en enfermedades broncopulmonares con moco viscoso, según autorización local; no sustituye evaluación de tos persistente.",
    "dose": "Adultos y ≥12 años: frecuentemente 8 mg VO 3 veces/día; algunos productos permiten 16 mg 3 veces/día al inicio. Seguir ficha local.",
    "pediatricDose": "6-11 años: frecuentemente 4 mg 3 veces/día; 2-5 años: 2 mg 3 veces/día en productos autorizados. <2 años: no usar sin indicación/regulación local. AUTOMATABLE=NO.",
    "renalDose": "Sin ajuste establecido; metabolitos pueden acumularse, usar precaución en grave.",
    "hepaticDose": "Precaución/reducción en insuficiencia grave por metabolismo hepático.",
    "commonAdverseEffects": "Náusea, dolor epigástrico, vómito, diarrea y cefalea.",
    "dangerousAdverseEffects": "Anafilaxia y reacciones cutáneas graves como SJS/TEN/AGEP, raras; suspender ante lesiones de piel/mucosa.",
    "adverseEffects": "Náusea, dolor epigástrico, vómito, diarrea y cefalea. Graves: Anafilaxia y reacciones cutáneas graves como SJS/TEN/AGEP, raras; suspender ante lesiones de piel/mucosa.",
    "contraindications": "Hipersensibilidad; contraindicaciones por edad dependen del producto.",
    "interactions": "No combinar rutinariamente con antitusivos que impidan expectoración; antibióticos pueden aumentar penetración en secreciones.",
    "monitoring": "Respuesta, volumen/eliminación de secreciones, síntomas persistentes, piel/mucosas y función renal/hepática si grave.",
    "administration": "VO, preferentemente después de alimentos si malestar; hidratación adecuada.",
    "preparation": "Medir líquido con dispositivo; confirmar mg/mL.",
    "infusionProtocol": "No aplicable.",
    "pregnancy": "Datos limitados; evitar en primer trimestre por precaución y usar solo si es necesario.",
    "lactation": "Probable excreción; no recomendada durante lactancia según algunas fichas.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Anafilaxia y reacciones cutáneas graves como SJS/TEN/AGEP, raras; suspender ante lesiones de piel/mucosa. Dose bloqueada sem idade/peso, concentração/produto autorizado, causa da tosse e função renal/hepática; alerta cutâneo obrigatório.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://smpcs.mcaz.co.zw/medicine/bromhexine-8mg-tablets/",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.ema.europa.eu/en/medicines/human/referrals/ambroxol-bromhexine-containing-medicines"
    ],
    "ref": "https://smpcs.mcaz.co.zw/medicine/bromhexine-8mg-tablets/"
  }
};})();
/* GOLD33_SELECTIVE:bromexina:END */
/* GOLD33_SELECTIVE:budesonida:START */
;(function(){var db=window.PNEUMOLOGIA_DRUGS_DB;if(!db||!db["budesonida"])throw new Error("GOLD33_MISSING_CANONICAL:budesonida");db["budesonida"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "012",
    "requiredFieldCount": 33,
    "approvedSha256": "33a04a022820507c1688fbebb735cd7d879bc3d0ef30a24f4ed7483f5cac16eb",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "mission10-owner-confirmed"
  },
  "pt": {
    "name": "Budesonida inalatória",
    "class": "Corticosteroide inalatório",
    "pharmacologicClass": "Agonista glicocorticoide anti-inflamatório local",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "DPI 90/180/200 mcg; suspensão 0,25/0,5 mg por 2 mL e 1 mg/2 mL; produtos variam.",
    "presentations": "DPI 90/180/200 mcg; suspensão 0,25/0,5 mg por 2 mL e 1 mg/2 mL; produtos variam.",
    "mechanism": "Agonista glicocorticoide anti-inflamatório local. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Alta depuração de primeira passagem; CYP3A4; meia-vida ~2-3 h.",
    "indications": "Manutenção da asma; suspensão nebulizada também pode ter indicação para crupe conforme jurisdição. Não é resgate agudo.",
    "dose": "Flexhaler ≥18 anos: 360 mcg 2x/dia, máximo 720 mcg 2x/dia; 6-17 anos: 180 mcg 2x/dia, máximo 360 mcg 2x/dia. Confirmar dispositivo.",
    "pediatricDose": "Nebulização 12 meses-8 anos: 0,25-0,5 mg 1-2x/dia conforme terapia prévia; máximo 1 mg/dia. AUTOMATABLE=NO sem produto.",
    "renalDose": "Sem ajuste formal; exposição sistêmica usualmente baixa.",
    "hepaticDose": "Cautela em doença grave; metabolismo CYP3A4.",
    "commonAdverseEffects": "Candidíase oral, disfonia, tosse e cefaleia.",
    "dangerousAdverseEffects": "Broncoespasmo paradoxal, supressão adrenal, redução do crescimento, glaucoma/catarata e infecção.",
    "adverseEffects": "Candidíase oral, disfonia, tosse e cefaleia. Graves: Broncoespasmo paradoxal, supressão adrenal, redução do crescimento, glaucoma/catarata e infecção.",
    "contraindications": "Hipersensibilidade; não usar como tratamento primário de crise/estado de mal asmático.",
    "interactions": "Inibidores fortes CYP3A4 aumentam exposição sistêmica.",
    "monitoring": "Controle, resgate, técnica, crescimento infantil, candidíase, olhos e eixo adrenal em altas doses.",
    "administration": "Inalar regularmente; enxaguar boca. Nebulização por jato conforme produto, não ultrassônica quando contraindicada.",
    "preparation": "Preparar/cebar conforme dispositivo; não misturar suspensão sem compatibilidade.",
    "infusionProtocol": "Não aplicável.",
    "pregnancy": "Experiência em asma é ampla; usar menor dose eficaz.",
    "lactation": "Exposição infantil baixa; geralmente compatível.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Broncoespasmo paradoxal, supressão adrenal, redução do crescimento, glaucoma/catarata e infecção. Dose bloqueada sem idade, gravidade, terapia prévia, produto/dispositivo e força exatos.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=54234b7d-3bcc-4809-1881-1d21484856a0",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=budesonide+inhalation+suspension"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=54234b7d-3bcc-4809-1881-1d21484856a0"
  },
  "es": {
    "name": "Budesonida inhalada",
    "class": "Corticosteroide inhalado",
    "pharmacologicClass": "Agonista glucocorticoide antiinflamatorio local",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "DPI 90/180/200 mcg; suspensión 0,25/0,5 mg por 2 mL y 1 mg/2 mL; productos variables.",
    "presentations": "DPI 90/180/200 mcg; suspensión 0,25/0,5 mg por 2 mL y 1 mg/2 mL; productos variables.",
    "mechanism": "Agonista glucocorticoide antiinflamatorio local. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Alto aclaramiento de primer paso; CYP3A4; semivida ~2-3 h.",
    "indications": "Mantenimiento del asma; suspensión nebulizada también puede indicarse en crup según jurisdicción. No es rescate agudo.",
    "dose": "Flexhaler ≥18 años: 360 mcg 2 veces/día, máximo 720 mcg 2 veces/día; 6-17 años: 180 mcg 2 veces/día, máximo 360 mcg 2 veces/día. Confirmar dispositivo.",
    "pediatricDose": "Nebulización 12 meses-8 años: 0,25-0,5 mg 1-2 veces/día según terapia previa; máximo 1 mg/día. AUTOMATABLE=NO sin producto.",
    "renalDose": "Sin ajuste formal; exposición sistémica habitualmente baja.",
    "hepaticDose": "Precaución en enfermedad grave; metabolismo CYP3A4.",
    "commonAdverseEffects": "Candidiasis oral, disfonía, tos y cefalea.",
    "dangerousAdverseEffects": "Broncoespasmo paradójico, supresión suprarrenal, menor crecimiento, glaucoma/catarata e infección.",
    "adverseEffects": "Candidiasis oral, disfonía, tos y cefalea. Graves: Broncoespasmo paradójico, supresión suprarrenal, menor crecimiento, glaucoma/catarata e infección.",
    "contraindications": "Hipersensibilidad; no usar como tratamiento primario de crisis/estado asmático.",
    "interactions": "Inhibidores fuertes CYP3A4 aumentan exposición sistémica.",
    "monitoring": "Control, rescate, técnica, crecimiento infantil, candidiasis, ojos y eje suprarrenal con dosis altas.",
    "administration": "Inhalar regularmente; enjuagar boca. Nebulización por jet según producto, no ultrasónica cuando esté contraindicada.",
    "preparation": "Preparar/cebar según dispositivo; no mezclar suspensión sin compatibilidad.",
    "infusionProtocol": "No aplicable.",
    "pregnancy": "Experiencia en asma amplia; usar mínima dosis eficaz.",
    "lactation": "Exposición infantil baja; generalmente compatible.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Broncoespasmo paradójico, supresión suprarrenal, menor crecimiento, glaucoma/catarata e infección. Dose bloqueada sem idade, gravidade, terapia prévia, produto/dispositivo e força exatos.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=54234b7d-3bcc-4809-1881-1d21484856a0",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=budesonide+inhalation+suspension"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=54234b7d-3bcc-4809-1881-1d21484856a0"
  }
};})();
/* GOLD33_SELECTIVE:budesonida:END */
/* GOLD33_SELECTIVE:budesonida_glicopirronio_formoterol:START */
;(function(){var db=window.PNEUMOLOGIA_DRUGS_DB;if(!db||!db["budesonida_glicopirronio_formoterol"])throw new Error("GOLD33_MISSING_CANONICAL:budesonida_glicopirronio_formoterol");db["budesonida_glicopirronio_formoterol"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "012",
    "requiredFieldCount": 33,
    "approvedSha256": "33a04a022820507c1688fbebb735cd7d879bc3d0ef30a24f4ed7483f5cac16eb",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "mission10-owner-confirmed"
  },
  "pt": {
    "name": "Budesonida + glicopirrônio + formoterol",
    "class": "ICS/LAMA/LABA inalatório",
    "pharmacologicClass": "Anti-inflamatório + antimuscarínico + agonista beta-2 prolongado",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Aerossol pressurizado 160/9/4,8 mcg por atuação (ordem budesonida/glicopirrônio/formoterol).",
    "presentations": "Aerossol pressurizado 160/9/4,8 mcg por atuação (ordem budesonida/glicopirrônio/formoterol).",
    "mechanism": "Anti-inflamatório + antimuscarínico + agonista beta-2 prolongado. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Deposição pulmonar; componentes metabolizados por CYP3A4/conjugação e glicopirrônio parcialmente renal.",
    "indications": "Manutenção da DPOC; não indicada para alívio agudo nem para asma no rótulo dos EUA.",
    "dose": "Duas inalações 2x/dia; máximo 4 inalações/dia.",
    "pediatricDose": "Não indicada <18 anos. AUTOMATABLE=NO.",
    "renalDose": "Sem ajuste formal; monitorar efeitos anticolinérgicos em grave.",
    "hepaticDose": "Cautela em doença grave; exposição a budesonida pode aumentar.",
    "commonAdverseEffects": "Infecção respiratória, pneumonia, candidíase, disfonia, espasmo muscular e boca seca.",
    "dangerousAdverseEffects": "Pneumonia, broncoespasmo paradoxal, arritmia/hipocalemia, retenção urinária, glaucoma agudo e supressão adrenal.",
    "adverseEffects": "Infecção respiratória, pneumonia, candidíase, disfonia, espasmo muscular e boca seca. Graves: Pneumonia, broncoespasmo paradoxal, arritmia/hipocalemia, retenção urinária, glaucoma agudo e supressão adrenal.",
    "contraindications": "Hipersensibilidade; não usar em broncoespasmo agudo.",
    "interactions": "CYP3A4 fortes, outros anticolinérgicos/simpaticomiméticos, beta-bloqueadores, QT-prolongadores e diuréticos.",
    "monitoring": "Sintomas/exacerbações, técnica, pneumonia, candidíase, retenção urinária, glaucoma, FC/PA, K/glicose.",
    "administration": "Inalação oral regular; enxaguar boca; manter resgate separado.",
    "preparation": "Agitar, cebar e limpar conforme bula; usar somente dispositivo original.",
    "infusionProtocol": "Não aplicável.",
    "pregnancy": "Dados limitados; usar apenas se benefício justificar.",
    "lactation": "Dados limitados; individualizar.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Pneumonia, broncoespasmo paradoxal, arritmia/hipocalemia, retenção urinária, glaucoma agudo e supressão adrenal. Uso bloqueado sem confirmar DPOC, dispositivo/força, técnica, glaucoma/retenção, rim/fígado e interações.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=BREZTRI+AEROSPHERE",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2020/212122s000lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=BREZTRI+AEROSPHERE"
  },
  "es": {
    "name": "Budesonida + glicopirronio + formoterol",
    "class": "ICS/LAMA/LABA inhalado",
    "pharmacologicClass": "Antiinflamatorio + antimuscarínico + agonista beta-2 prolongado",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Aerosol presurizado 160/9/4,8 mcg por actuación (budesonida/glicopirronio/formoterol).",
    "presentations": "Aerosol presurizado 160/9/4,8 mcg por actuación (budesonida/glicopirronio/formoterol).",
    "mechanism": "Antiinflamatorio + antimuscarínico + agonista beta-2 prolongado. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Depósito pulmonar; componentes metabolizados por CYP3A4/conjugación y glicopirronio parcialmente renal.",
    "indications": "Mantenimiento de EPOC; no indicada para alivio agudo ni asma en ficha de EE. UU.",
    "dose": "Dos inhalaciones 2 veces/día; máximo 4 inhalaciones/día.",
    "pediatricDose": "No indicada <18 años. AUTOMATABLE=NO.",
    "renalDose": "Sin ajuste formal; vigilar efectos anticolinérgicos en grave.",
    "hepaticDose": "Precaución en enfermedad grave; puede aumentar exposición a budesonida.",
    "commonAdverseEffects": "Infección respiratoria, neumonía, candidiasis, disfonía, espasmo muscular y boca seca.",
    "dangerousAdverseEffects": "Neumonía, broncoespasmo paradójico, arritmia/hipopotasemia, retención urinaria, glaucoma agudo y supresión suprarrenal.",
    "adverseEffects": "Infección respiratoria, neumonía, candidiasis, disfonía, espasmo muscular y boca seca. Graves: Neumonía, broncoespasmo paradójico, arritmia/hipopotasemia, retención urinaria, glaucoma agudo y supresión suprarrenal.",
    "contraindications": "Hipersensibilidad; no usar en broncoespasmo agudo.",
    "interactions": "CYP3A4 fuertes, otros anticolinérgicos/simpaticomiméticos, betabloqueantes, prolongadores QT y diuréticos.",
    "monitoring": "Síntomas/exacerbaciones, técnica, neumonía, candidiasis, retención urinaria, glaucoma, FC/PA, K/glucosa.",
    "administration": "Inhalación oral regular; enjuagar boca; mantener rescate separado.",
    "preparation": "Agitar, cebar y limpiar según ficha; usar solo dispositivo original.",
    "infusionProtocol": "No aplicable.",
    "pregnancy": "Datos limitados; usar solo si beneficio justifica.",
    "lactation": "Datos limitados; individualizar.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Neumonía, broncoespasmo paradójico, arritmia/hipopotasemia, retención urinaria, glaucoma agudo y supresión suprarrenal. Uso bloqueado sem confirmar DPOC, dispositivo/força, técnica, glaucoma/retenção, rim/fígado e interações.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=BREZTRI+AEROSPHERE",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2020/212122s000lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=BREZTRI+AEROSPHERE"
  }
};})();
/* GOLD33_SELECTIVE:budesonida_glicopirronio_formoterol:END */
/* GOLD33_SELECTIVE:butamirato:START */
;(function(){var db=window.PNEUMOLOGIA_DRUGS_DB;if(!db||!db["butamirato"])throw new Error("GOLD33_MISSING_CANONICAL:butamirato");db["butamirato"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "013",
    "requiredFieldCount": 33,
    "approvedSha256": "9e2bb4dd7dab045f089fff2c5b88e1d5f0afd80731602b0c3fabff299d094223",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "mission10-owner-confirmed"
  },
  "pt": {
    "name": "Citrato de butamirato",
    "class": "Antitussígeno não opioide",
    "pharmacologicClass": "Ação antitussígena central; mecanismo molecular não totalmente definido",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Gotas, solução/xarope e comprimidos de liberação prolongada; concentrações variam e não são intercambiáveis.",
    "presentations": "Gotas, solução/xarope e comprimidos de liberação prolongada; concentrações variam e não são intercambiáveis.",
    "mechanism": "Ação antitussígena central; mecanismo molecular não totalmente definido. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Absorção rápida; hidrólise a metabólitos ativos, alta ligação proteica; eliminação predominantemente urinária.",
    "indications": "Alívio sintomático de tosse seca não produtiva; disponibilidade e indicações variam por país.",
    "dose": "A posologia depende integralmente da apresentação e jurisdição; confirmar bula local. Não há produto aprovado pela FDA dos EUA.",
    "pediatricDose": "Existem produtos pediátricos fora dos EUA, porém idade, concentração e dose diferem. AUTOMATABLE=NO sem bula local exata.",
    "renalDose": "Sem ajuste quantitativo validado; usar cautela.",
    "hepaticDose": "Sem ajuste quantitativo validado; usar cautela.",
    "commonAdverseEffects": "Sonolência, tontura, náusea, diarreia e rash.",
    "dangerousAdverseEffects": "Reação de hipersensibilidade e depressão do nível de consciência em superdose.",
    "adverseEffects": "Sonolência, tontura, náusea, diarreia e rash. Graves: Reação de hipersensibilidade e depressão do nível de consciência em superdose.",
    "contraindications": "Hipersensibilidade; restrições etárias e gestacionais dependem do produto.",
    "interactions": "Associação com depressores SNC pode aumentar sonolência; evitar combinação antitussígeno-mucolítico sem avaliação.",
    "monitoring": "Duração da tosse, sinais de alarme, sedação e resposta; investigar tosse persistente.",
    "administration": "VO; medir líquidos com dispositivo graduado; não associar automaticamente a expectorantes.",
    "preparation": "Não triturar formulação de liberação prolongada; confirmar concentração em mg/mL.",
    "infusionProtocol": "Não aplicável.",
    "pregnancy": "Evitar no primeiro trimestre conforme várias bulas; uso posterior somente após avaliação.",
    "lactation": "Dados insuficientes; evitar ou individualizar.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Reação de hipersensibilidade e depressão do nível de consciência em superdose. Dose/cálculo bloqueados sem país, marca, formulação, concentração, idade e bula local verificável.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://www.swissmedicinfo.ch/",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.ema.europa.eu/en/medicines"
    ],
    "ref": "https://www.swissmedicinfo.ch/"
  },
  "es": {
    "name": "Citrato de butamirato",
    "class": "Antitusivo no opioide",
    "pharmacologicClass": "Acción antitusiva central; mecanismo molecular no totalmente definido",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Gotas, solución/jarabe y comprimidos de liberación prolongada; concentraciones variables no intercambiables.",
    "presentations": "Gotas, solución/jarabe y comprimidos de liberación prolongada; concentraciones variables no intercambiables.",
    "mechanism": "Acción antitusiva central; mecanismo molecular no totalmente definido. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Absorción rápida; hidrólisis a metabolitos activos, alta unión proteica; eliminación principalmente urinaria.",
    "indications": "Alivio sintomático de tos seca no productiva; disponibilidad e indicaciones varían según país.",
    "dose": "La posología depende completamente de la presentación y jurisdicción; confirmar ficha local. No hay producto aprobado por FDA de EE. UU.",
    "pediatricDose": "Existen productos pediátricos fuera de EE. UU., pero edad, concentración y dosis difieren. AUTOMATABLE=NO sin ficha local exacta.",
    "renalDose": "Sin ajuste cuantitativo validado; usar precaución.",
    "hepaticDose": "Sin ajuste cuantitativo validado; usar precaución.",
    "commonAdverseEffects": "Somnolencia, mareo, náusea, diarrea y erupción.",
    "dangerousAdverseEffects": "Reacción de hipersensibilidad y depresión del nivel de conciencia en sobredosis.",
    "adverseEffects": "Somnolencia, mareo, náusea, diarrea y erupción. Graves: Reacción de hipersensibilidad y depresión del nivel de conciencia en sobredosis.",
    "contraindications": "Hipersensibilidad; restricciones etarias y gestacionales dependen del producto.",
    "interactions": "La asociación con depresores SNC puede aumentar somnolencia; evitar combinar antitusivo-mucolítico sin evaluación.",
    "monitoring": "Duración de la tos, signos de alarma, sedación y respuesta; investigar tos persistente.",
    "administration": "VO; medir líquidos con dispositivo graduado; no asociar automáticamente con expectorantes.",
    "preparation": "No triturar formulación de liberación prolongada; confirmar concentración en mg/mL.",
    "infusionProtocol": "No aplicable.",
    "pregnancy": "Evitar en primer trimestre según diversas fichas; uso posterior solo tras evaluación.",
    "lactation": "Datos insuficientes; evitar o individualizar.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Reacción de hipersensibilidad y depresión del nivel de conciencia en sobredosis. Dose/cálculo bloqueados sem país, marca, formulação, concentração, idade e bula local verificável.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://www.swissmedicinfo.ch/",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.ema.europa.eu/en/medicines"
    ],
    "ref": "https://www.swissmedicinfo.ch/"
  }
};})();
/* GOLD33_SELECTIVE:butamirato:END */
/* GOLD33_SELECTIVE:carbocisteina:START */
;(function(){var db=window.PNEUMOLOGIA_DRUGS_DB;if(!db||!db["carbocisteina"])throw new Error("GOLD33_MISSING_CANONICAL:carbocisteina");db["carbocisteina"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "014",
    "requiredFieldCount": 33,
    "approvedSha256": "1b0e41cf6b530a2ba21cb52fc7aac4a33e9139cf286fd47a605ff6656ee8c7db",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "mission10-owner-confirmed"
  },
  "pt": {
    "name": "Carbocisteína",
    "class": "Mucolítico",
    "pharmacologicClass": "Mucorregulador derivado da cisteína",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Cápsulas 375 mg; solução/xarope 250 mg/5 mL e apresentações pediátricas variáveis.",
    "presentations": "Cápsulas 375 mg; solução/xarope 250 mg/5 mL e apresentações pediátricas variáveis.",
    "mechanism": "Mucorregulador derivado da cisteína. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Absorção oral rápida; Tmax ~2 h; metabolismo hepático; excreção urinária, principalmente inalterada/metabólitos.",
    "indications": "Adjuvante em doenças respiratórias com secreção espessa; indicação e disponibilidade variam por país.",
    "dose": "Adulto: 750 mg 3x/dia inicialmente; reduzir para 500 mg 3x/dia quando houver resposta, conforme SmPC do produto.",
    "pediatricDose": "Regimes dependem da concentração e idade; evitar <2 anos em várias jurisdições. AUTOMATABLE=NO sem bula local.",
    "renalDose": "Sem ajuste quantitativo estabelecido; cautela em doença grave.",
    "hepaticDose": "Sem ajuste quantitativo estabelecido.",
    "commonAdverseEffects": "Náusea, diarreia, dor epigástrica e rash.",
    "dangerousAdverseEffects": "Sangramento gastrointestinal, anafilaxia e reações cutâneas graves raras.",
    "adverseEffects": "Náusea, diarreia, dor epigástrica e rash. Graves: Sangramento gastrointestinal, anafilaxia e reações cutâneas graves raras.",
    "contraindications": "Úlcera péptica ativa e hipersensibilidade; restrições etárias conforme produto.",
    "interactions": "Antitussígenos e anticolinérgicos podem favorecer retenção de secreções; revisar risco gastrointestinal.",
    "monitoring": "Sintomas, volume/viscosidade do escarro, broncoespasmo, sangramento GI e necessidade de antibiótico.",
    "administration": "VO; manter hidratação e capacidade de eliminar secreções.",
    "preparation": "Medir solução com dispositivo graduado; não intercambiar concentrações.",
    "infusionProtocol": "Não aplicável.",
    "pregnancy": "Evitar no primeiro trimestre; depois, usar apenas se necessário conforme bula.",
    "lactation": "Dados insuficientes; individualizar.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Sangramento gastrointestinal, anafilaxia e reações cutâneas graves raras. Dose bloqueada sem idade, formulação/concentração, história ulcerosa, padrão de tosse e capacidade de expectoração.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://www.medicines.org.uk/emc/search?q=carbocisteine",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.nhs.uk/medicines/carbocisteine/about-carbocisteine/"
    ],
    "ref": "https://www.medicines.org.uk/emc/search?q=carbocisteine"
  },
  "es": {
    "name": "Carbocisteína",
    "class": "Mucolítico",
    "pharmacologicClass": "Mucorregulador derivado de cisteína",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Cápsulas 375 mg; solución/jarabe 250 mg/5 mL y presentaciones pediátricas variables.",
    "presentations": "Cápsulas 375 mg; solución/jarabe 250 mg/5 mL y presentaciones pediátricas variables.",
    "mechanism": "Mucorregulador derivado de cisteína. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Absorción oral rápida; Tmax ~2 h; metabolismo hepático; excreción urinaria, principalmente inalterada/metabolitos.",
    "indications": "Adyuvante en enfermedades respiratorias con secreción espesa; indicación y disponibilidad varían por país.",
    "dose": "Adulto: 750 mg 3 veces/día inicialmente; reducir a 500 mg 3 veces/día al responder, según SmPC del producto.",
    "pediatricDose": "Regímenes dependen de concentración y edad; evitar <2 años en varias jurisdicciones. AUTOMATABLE=NO sin ficha local.",
    "renalDose": "Sin ajuste cuantitativo establecido; precaución en enfermedad grave.",
    "hepaticDose": "Sin ajuste cuantitativo establecido.",
    "commonAdverseEffects": "Náusea, diarrea, dolor epigástrico y erupción.",
    "dangerousAdverseEffects": "Sangrado gastrointestinal, anafilaxia y reacciones cutáneas graves raras.",
    "adverseEffects": "Náusea, diarrea, dolor epigástrico y erupción. Graves: Sangrado gastrointestinal, anafilaxia y reacciones cutáneas graves raras.",
    "contraindications": "Úlcera péptica activa e hipersensibilidad; restricciones etarias según producto.",
    "interactions": "Antitusivos y anticolinérgicos pueden favorecer retención de secreciones; revisar riesgo gastrointestinal.",
    "monitoring": "Síntomas, volumen/viscosidad del esputo, broncoespasmo, sangrado GI y necesidad de antibiótico.",
    "administration": "VO; mantener hidratación y capacidad de eliminar secreciones.",
    "preparation": "Medir solución con dispositivo graduado; no intercambiar concentraciones.",
    "infusionProtocol": "No aplicable.",
    "pregnancy": "Evitar en primer trimestre; después usar solo si es necesario según ficha.",
    "lactation": "Datos insuficientes; individualizar.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Sangrado gastrointestinal, anafilaxia y reacciones cutáneas graves raras. Dose bloqueada sem idade, formulação/concentração, história ulcerosa, padrão de tosse e capacidade de expectoração.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://www.medicines.org.uk/emc/search?q=carbocisteine",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.nhs.uk/medicines/carbocisteine/about-carbocisteine/"
    ],
    "ref": "https://www.medicines.org.uk/emc/search?q=carbocisteine"
  }
};})();
/* GOLD33_SELECTIVE:carbocisteina:END */
/* GOLD33_SELECTIVE:ciclesonida:START */
;(function(){var db=window.PNEUMOLOGIA_DRUGS_DB;if(!db||!db["ciclesonida"])throw new Error("GOLD33_MISSING_CANONICAL:ciclesonida");db["ciclesonida"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "017",
    "requiredFieldCount": 33,
    "approvedSha256": "253c17c2327715b3e25ab80e7138de200e935b80e7d849c1c6088a69116420a3",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "mission10-owner-confirmed"
  },
  "pt": {
    "name": "Ciclesonida inalatória",
    "class": "Corticosteroide inalatório",
    "pharmacologicClass": "Pró-fármaco ativado no pulmão com ação glicocorticoide",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Aerossol dosimetrado 80 ou 160 mcg por atuação conforme produto.",
    "presentations": "Aerossol dosimetrado 80 ou 160 mcg por atuação conforme produto.",
    "mechanism": "Pró-fármaco ativado no pulmão com ação glicocorticoide. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Ativada por esterases pulmonares; alta ligação; metabolismo CYP3A4; baixa exposição sistêmica.",
    "indications": "Manutenção da asma; não indicada para broncoespasmo agudo.",
    "dose": "Adultos/adolescentes: 80-320 mcg inalados 2x/dia conforme terapia prévia; máximo rotulado pode chegar a 640 mcg 2x/dia em pacientes selecionados.",
    "pediatricDose": "≥12 anos no rótulo EUA; segurança abaixo não estabelecida. AUTOMATABLE=NO.",
    "renalDose": "Sem ajuste.",
    "hepaticDose": "Dados limitados; cautela em grave.",
    "commonAdverseEffects": "Cefaleia, nasofaringite, disfonia e candidíase oral.",
    "dangerousAdverseEffects": "Broncoespasmo paradoxal, supressão adrenal, glaucoma/catarata, perda óssea e infecções.",
    "adverseEffects": "Cefaleia, nasofaringite, disfonia e candidíase oral. Graves: Broncoespasmo paradoxal, supressão adrenal, glaucoma/catarata, perda óssea e infecções.",
    "contraindications": "Hipersensibilidade; tratamento primário de status asmático/episódio agudo.",
    "interactions": "Inibidores fortes CYP3A4 podem aumentar exposição sistêmica.",
    "monitoring": "Controle, técnica, uso de resgate, candidíase, crescimento, olhos, osso e supressão adrenal em altas doses.",
    "administration": "Inalar regularmente; preparar dispositivo, coordenar inspiração e lavar boca após uso.",
    "preparation": "Não lavar atuador com água; seguir priming e limpeza do fabricante.",
    "infusionProtocol": "Não aplicável; não usar em nebulizador.",
    "pregnancy": "Manter controle da asma; usar menor dose eficaz.",
    "lactation": "Exposição sistêmica baixa; compatibilidade provável com monitorização.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Broncoespasmo paradoxal, supressão adrenal, glaucoma/catarata, perda óssea e infecções. Dose bloqueada sem idade, gravidade, tratamento prévio, técnica, adesão e plano de resgate.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=ALVESCO",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://ginasthma.org/2025-gina-strategy-report/"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=ALVESCO"
  },
  "es": {
    "name": "Ciclesonida inhalada",
    "class": "Corticoide inhalado",
    "pharmacologicClass": "Profármaco activado en pulmón con acción glucocorticoide",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Aerosol dosificado 80 o 160 mcg por actuación según producto.",
    "presentations": "Aerosol dosificado 80 o 160 mcg por actuación según producto.",
    "mechanism": "Profármaco activado en pulmón con acción glucocorticoide. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Activada por esterasas pulmonares; alta unión; metabolismo CYP3A4; baja exposición sistémica.",
    "indications": "Mantenimiento del asma; no indicada para broncoespasmo agudo.",
    "dose": "Adultos/adolescentes: 80-320 mcg inhalados 2 veces/día según terapia previa; máximo autorizado puede llegar a 640 mcg 2 veces/día en pacientes seleccionados.",
    "pediatricDose": "≥12 años en ficha EE. UU.; seguridad por debajo no establecida. AUTOMATABLE=NO.",
    "renalDose": "Sin ajuste.",
    "hepaticDose": "Datos limitados; precaución en grave.",
    "commonAdverseEffects": "Cefalea, nasofaringitis, disfonía y candidiasis oral.",
    "dangerousAdverseEffects": "Broncoespasmo paradójico, supresión suprarrenal, glaucoma/catarata, pérdida ósea e infecciones.",
    "adverseEffects": "Cefalea, nasofaringitis, disfonía y candidiasis oral. Graves: Broncoespasmo paradójico, supresión suprarrenal, glaucoma/catarata, pérdida ósea e infecciones.",
    "contraindications": "Hipersensibilidad; tratamiento primario de estatus asmático/episodio agudo.",
    "interactions": "Inhibidores fuertes CYP3A4 pueden aumentar exposición sistémica.",
    "monitoring": "Control, técnica, uso de rescate, candidiasis, crecimiento, ojos, hueso y supresión suprarrenal a dosis altas.",
    "administration": "Inhalar regularmente; preparar dispositivo, coordinar inspiración y enjuagar boca.",
    "preparation": "No lavar actuador con agua; seguir cebado y limpieza del fabricante.",
    "infusionProtocol": "No aplicable; no usar en nebulizador.",
    "pregnancy": "Mantener control del asma; usar menor dosis eficaz.",
    "lactation": "Exposición sistémica baja; compatibilidad probable con vigilancia.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Broncoespasmo paradójico, supresión suprarrenal, glaucoma/catarata, pérdida ósea e infecciones. Dose bloqueada sem idade, gravidade, tratamento prévio, técnica, adesão e plano de resgate.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=ALVESCO",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://ginasthma.org/2025-gina-strategy-report/"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=ALVESCO"
  }
};})();
/* GOLD33_SELECTIVE:ciclesonida:END */
/* GOLD33_SELECTIVE:cloperastina:START */
;(function(){var db=window.PNEUMOLOGIA_DRUGS_DB;if(!db||!db["cloperastina"])throw new Error("GOLD33_MISSING_CANONICAL:cloperastina");db["cloperastina"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "020",
    "requiredFieldCount": 33,
    "approvedSha256": "d818f92af45c524613c0db49682058ae944b29dd0ac8e473c944895c1d18c004",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "mission10-owner-confirmed"
  },
  "pt": {
    "name": "Cloperastina",
    "class": "Antitussígeno não opioide",
    "pharmacologicClass": "Ação central/periférica proposta; mecanismo não completamente definido",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Xarope, gotas ou comprimidos em concentrações regionais variáveis.",
    "presentations": "Xarope, gotas ou comprimidos em concentrações regionais variáveis.",
    "mechanism": "Ação central/periférica proposta; mecanismo não completamente definido. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Dados farmacocinéticos variam por sal e formulação.",
    "indications": "Tratamento sintomático de tosse seca; disponibilidade e indicação variam por país.",
    "dose": "Regimes adultos variam conforme sal e produto nacional; não converter mg entre cloperastina fendizoato e cloperastina HCl sem bula específica.",
    "pediatricDose": "Doses variam por idade, sal e concentração; não usar em crianças pequenas sem bula local. AUTOMATABLE=NO.",
    "renalDose": "Sem ajuste validado; cautela.",
    "hepaticDose": "Sem ajuste validado; cautela.",
    "commonAdverseEffects": "Sonolência, boca seca, náusea e desconforto GI.",
    "dangerousAdverseEffects": "Hipersensibilidade e depressão SNC importante em overdose; evidência limitada.",
    "adverseEffects": "Sonolência, boca seca, náusea e desconforto GI. Graves: Hipersensibilidade e depressão SNC importante em overdose; evidência limitada.",
    "contraindications": "Hipersensibilidade; contraindicações pediátricas/gestacionais dependem da bula local.",
    "interactions": "Álcool e depressores SNC podem aumentar sedação; dados limitados.",
    "monitoring": "Resposta, sedação, duração da tosse, dispneia, febre/hemoptise e causa subjacente.",
    "administration": "VO apenas conforme produto registrado; investigar causa da tosse.",
    "preparation": "Medir líquidos com dispositivo; confirmar sal e mg/mL.",
    "infusionProtocol": "Não aplicável.",
    "pregnancy": "Dados insuficientes; evitar sem necessidade clara.",
    "lactation": "Dados insuficientes; evitar ou decidir individualmente.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Hipersensibilidade e depressão SNC importante em overdose; evidência limitada. Prescrição e cálculo bloqueados até confirmar país, produto, sal, concentração, idade e bula regulatória executável.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://www.aemps.gob.es/cima/publico/home.html",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.ema.europa.eu/en/medicines"
    ],
    "ref": "https://www.aemps.gob.es/cima/publico/home.html"
  },
  "es": {
    "name": "Cloperastina",
    "class": "Antitusivo no opioide",
    "pharmacologicClass": "Acción central/periférica propuesta; mecanismo no totalmente definido",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Jarabe, gotas o comprimidos en concentraciones regionales variables.",
    "presentations": "Jarabe, gotas o comprimidos en concentraciones regionales variables.",
    "mechanism": "Acción central/periférica propuesta; mecanismo no totalmente definido. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Datos farmacocinéticos varían por sal y formulación.",
    "indications": "Tratamiento sintomático de tos seca; disponibilidad e indicación varían por país.",
    "dose": "Regímenes adultos varían según sal y producto nacional; no convertir mg entre fendizoato de cloperastina y cloperastina HCl sin ficha específica.",
    "pediatricDose": "Dosis varían por edad, sal y concentración; no usar en niños pequeños sin ficha local. AUTOMATABLE=NO.",
    "renalDose": "Sin ajuste validado; precaución.",
    "hepaticDose": "Sin ajuste validado; precaución.",
    "commonAdverseEffects": "Somnolencia, boca seca, náusea y malestar GI.",
    "dangerousAdverseEffects": "Hipersensibilidad y depresión SNC importante en sobredosis; evidencia limitada.",
    "adverseEffects": "Somnolencia, boca seca, náusea y malestar GI. Graves: Hipersensibilidad y depresión SNC importante en sobredosis; evidencia limitada.",
    "contraindications": "Hipersensibilidad; contraindicaciones pediátricas/gestacionales dependen de ficha local.",
    "interactions": "Alcohol y depresores SNC pueden aumentar sedación; datos limitados.",
    "monitoring": "Respuesta, sedación, duración de tos, disnea, fiebre/hemoptisis y causa subyacente.",
    "administration": "VO solo según producto registrado; investigar causa de tos.",
    "preparation": "Medir líquidos con dispositivo; confirmar sal y mg/mL.",
    "infusionProtocol": "No aplicable.",
    "pregnancy": "Datos insuficientes; evitar sin necesidad clara.",
    "lactation": "Datos insuficientes; evitar o decidir individualmente.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Hipersensibilidad y depresión SNC importante en sobredosis; evidencia limitada. Prescrição e cálculo bloqueados até confirmar país, produto, sal, concentração, idade e bula regulatória executável.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://www.aemps.gob.es/cima/publico/home.html",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.ema.europa.eu/en/medicines"
    ],
    "ref": "https://www.aemps.gob.es/cima/publico/home.html"
  }
};})();
/* GOLD33_SELECTIVE:cloperastina:END */
/* GOLD33_SELECTIVE:dextrometorfano:START */
;(function(){var db=window.PNEUMOLOGIA_DRUGS_DB;if(!db||!db["dextrometorfano"])throw new Error("GOLD33_MISSING_CANONICAL:dextrometorfano");db["dextrometorfano"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "024",
    "requiredFieldCount": 33,
    "approvedSha256": "9721657a393121ed360ce59ff910deb7cbb3b0fc3421608349c6fa584237305a",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "mission10-owner-confirmed"
  },
  "pt": {
    "name": "Dextrometorfano",
    "class": "Antitussígeno não opioide",
    "pharmacologicClass": "Ação central no reflexo da tosse; antagonismo NMDA em altas exposições",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Liberação imediata 10–15 mg/5 mL e prolongada 30 mg/5 mL; muitas combinações.",
    "presentations": "Liberação imediata 10–15 mg/5 mL e prolongada 30 mg/5 mL; muitas combinações.",
    "mechanism": "Ação central no reflexo da tosse; antagonismo NMDA em altas exposições. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Metabolismo CYP2D6 a dextrorfano; metabolizadores pobres têm maior exposição.",
    "indications": "Alívio temporário de tosse não produtiva; não trata a causa.",
    "dose": "Adultos/≥12 anos: 10–20 mg a cada 4 h ou 30 mg a cada 6–8 h; máximo 120 mg/dia. ER: 60 mg a cada 12 h. Confirmar produto.",
    "pediatricDose": "Doses dependem de idade/produto; não usar em menores conforme restrições OTC locais e não administrar <4 anos sem orientação. AUTOMATABLE=NO.",
    "renalDose": "Sem ajuste estabelecido; cautela em doença grave.",
    "hepaticDose": "Cautela/redução em hepatopatia.",
    "commonAdverseEffects": "Náusea, tontura, sonolência e desconforto GI.",
    "dangerousAdverseEffects": "Síndrome serotoninérgica, psicose/abuso, convulsão, coma e toxicidade de coingredientes.",
    "adverseEffects": "Náusea, tontura, sonolência e desconforto GI. Graves: Síndrome serotoninérgica, psicose/abuso, convulsão, coma e toxicidade de coingredientes.",
    "contraindications": "IMAO atual ou nos 14 dias anteriores; hipersensibilidade.",
    "interactions": "IMAO e outros serotonérgicos; inibidores CYP2D6 elevam exposição; álcool/sedativos.",
    "monitoring": "Duração/causa da tosse, sedação, serotonina, abuso e duplicidade em combinações.",
    "administration": "VO; medir solução e conferir todos os ingredientes ativos.",
    "preparation": "Agitar se indicado; não triturar formulação ER.",
    "infusionProtocol": "Não aplicável.",
    "pregnancy": "Dados limitados; uso breve somente se necessário.",
    "lactation": "Baixa exposição esperada, mas avaliar coingredientes.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Síndrome serotoninérgica, psicose/abuso, convulsão, coma e toxicidade de coingredientes. Dose bloqueada sem idade, formulação/concentração, todos os coingredientes, causa/duração da tosse, IMAO/serotonérgicos e risco de abuso.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=dextromethorphan",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://medlineplus.gov/druginfo/meds/a682492.html"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=dextromethorphan"
  },
  "es": {
    "name": "Dextrometorfano",
    "class": "Antitusígeno no opioide",
    "pharmacologicClass": "Acción central en reflejo de tos; antagonismo NMDA a altas exposiciones",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Liberación inmediata 10–15 mg/5 mL y prolongada 30 mg/5 mL; muchas combinaciones.",
    "presentations": "Liberación inmediata 10–15 mg/5 mL y prolongada 30 mg/5 mL; muchas combinaciones.",
    "mechanism": "Acción central en reflejo de tos; antagonismo NMDA a altas exposiciones. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Metabolismo CYP2D6 a dextrorfano; metabolizadores pobres tienen mayor exposición.",
    "indications": "Alivio temporal de tos no productiva; no trata la causa.",
    "dose": "Adultos/≥12 años: 10–20 mg cada 4 h o 30 mg cada 6–8 h; máximo 120 mg/día. ER: 60 mg cada 12 h. Confirmar producto.",
    "pediatricDose": "Dosis dependen de edad/producto; no usar por debajo de restricciones OTC locales ni <4 años sin indicación. AUTOMATABLE=NO.",
    "renalDose": "Sin ajuste establecido; precaución en enfermedad grave.",
    "hepaticDose": "Precaución/reducción en hepatopatía.",
    "commonAdverseEffects": "Náusea, mareo, somnolencia y malestar GI.",
    "dangerousAdverseEffects": "Síndrome serotoninérgico, psicosis/abuso, convulsión, coma y toxicidad de coingredientes.",
    "adverseEffects": "Náusea, mareo, somnolencia y malestar GI. Graves: Síndrome serotoninérgico, psicosis/abuso, convulsión, coma y toxicidad de coingredientes.",
    "contraindications": "IMAO actual o en 14 días previos; hipersensibilidad.",
    "interactions": "IMAO y otros serotoninérgicos; inhibidores CYP2D6 elevan exposición; alcohol/sedantes.",
    "monitoring": "Duración/causa de tos, sedación, serotonina, abuso y duplicidad en combinaciones.",
    "administration": "VO; medir solución y comprobar todos los ingredientes activos.",
    "preparation": "Agitar si se indica; no triturar formulación ER.",
    "infusionProtocol": "No aplicable.",
    "pregnancy": "Datos limitados; uso breve solo si es necesario.",
    "lactation": "Baja exposición esperada, pero valorar coingredientes.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Síndrome serotoninérgico, psicosis/abuso, convulsión, coma y toxicidad de coingredientes. Dose bloqueada sem idade, formulação/concentração, todos os coingredientes, causa/duração da tosse, IMAO/serotonérgicos e risco de abuso.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=dextromethorphan",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://medlineplus.gov/druginfo/meds/a682492.html"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=dextromethorphan"
  }
};})();
/* GOLD33_SELECTIVE:dextrometorfano:END */
/* GOLD33_SELECTIVE:dornase_alfa:START */
;(function(){var db=window.PNEUMOLOGIA_DRUGS_DB;if(!db||!db["dornase_alfa"])throw new Error("GOLD33_MISSING_CANONICAL:dornase_alfa");db["dornase_alfa"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "027",
    "requiredFieldCount": 33,
    "approvedSha256": "b6a76fbf1440e5ec71509c8cde336ce4c45c6a97a183998429f649b5751b7fd7",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Dornase alfa",
    "class": "Mucolítico enzimático",
    "pharmacologicClass": "DNase humana recombinante que reduz viscosidade do escarro",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Ampola unidose 2,5 mg/2,5 mL para nebulização.",
    "presentations": "Ampola unidose 2,5 mg/2,5 mL para nebulização.",
    "mechanism": "DNase humana recombinante que reduz viscosidade do escarro. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Ação local; absorção sistêmica pequena após inalação.",
    "indications": "Fibrose cística, com terapia padrão, para melhorar função pulmonar e reduzir exacerbações selecionadas.",
    "dose": "2,5 mg por nebulização 1x/dia; alguns pacientes ≥21 anos podem beneficiar-se de 2x/dia.",
    "pediatricDose": "≥5 anos: 2,5 mg inalatório/dia; há dados em menores, mas indicação/uso dependem do rótulo e especialista. AUTOMATABLE=NO.",
    "renalDose": "Sem ajuste.",
    "hepaticDose": "Sem ajuste.",
    "commonAdverseEffects": "Alteração da voz, faringite, rash, dor torácica e conjuntivite.",
    "dangerousAdverseEffects": "Hipersensibilidade grave é rara.",
    "adverseEffects": "Alteração da voz, faringite, rash, dor torácica e conjuntivite. Graves: Hipersensibilidade grave é rara.",
    "contraindications": "Hipersensibilidade a dornase alfa/produtos de células de ovário de hamster chinês.",
    "interactions": "Sem interações clinicamente relevantes bem definidas.",
    "monitoring": "Sintomas, função pulmonar, exacerbações, voz e tolerabilidade.",
    "administration": "Usar nebulizador recomendado; não injetar nem engolir.",
    "preparation": "Não diluir nem misturar com outros fármacos no nebulizador.",
    "infusionProtocol": "Nebulização da ampola inteira conforme dispositivo validado.",
    "pregnancy": "Dados disponíveis não sugerem risco relevante; individualizar.",
    "lactation": "Absorção sistêmica mínima; risco baixo esperado.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Hipersensibilidade grave é rara. Uso bloqueado sem confirmação de fibrose cística, idade, dispositivo compatível e plano de fisioterapia/terapias inalatórias.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=dornase+alfa",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2021/103532s5196lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=dornase+alfa"
  },
  "es": {
    "name": "Dornasa alfa",
    "class": "Mucolítico enzimático",
    "pharmacologicClass": "DNasa humana recombinante que reduce viscosidad del esputo",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Ampolla monodosis 2,5 mg/2,5 mL para nebulización.",
    "presentations": "Ampolla monodosis 2,5 mg/2,5 mL para nebulización.",
    "mechanism": "DNasa humana recombinante que reduce viscosidad del esputo. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Acción local; absorción sistémica pequeña tras inhalación.",
    "indications": "Fibrosis quística, con terapia estándar, para mejorar función pulmonar y reducir exacerbaciones seleccionadas.",
    "dose": "2,5 mg por nebulización 1 vez/día; algunos pacientes ≥21 años pueden beneficiarse de 2 veces/día.",
    "pediatricDose": "≥5 años: 2,5 mg inhalado/día; hay datos en menores, pero indicación/uso dependen de ficha y especialista. AUTOMATABLE=NO.",
    "renalDose": "Sin ajuste.",
    "hepaticDose": "Sin ajuste.",
    "commonAdverseEffects": "Cambio de voz, faringitis, erupción, dolor torácico y conjuntivitis.",
    "dangerousAdverseEffects": "Hipersensibilidad grave rara.",
    "adverseEffects": "Cambio de voz, faringitis, erupción, dolor torácico y conjuntivitis. Graves: Hipersensibilidad grave rara.",
    "contraindications": "Hipersensibilidad a dornasa alfa/productos de células de ovario de hámster chino.",
    "interactions": "Sin interacciones clínicamente relevantes bien definidas.",
    "monitoring": "Síntomas, función pulmonar, exacerbaciones, voz y tolerabilidad.",
    "administration": "Usar nebulizador recomendado; no inyectar ni ingerir.",
    "preparation": "No diluir ni mezclar con otros fármacos en nebulizador.",
    "infusionProtocol": "Nebulización de ampolla completa según dispositivo validado.",
    "pregnancy": "Datos disponibles no sugieren riesgo relevante; individualizar.",
    "lactation": "Absorción sistémica mínima; riesgo bajo esperado.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Hipersensibilidad grave rara. Uso bloqueado sem confirmação de fibrose cística, idade, dispositivo compatível e plano de fisioterapia/terapias inalatórias.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=dornase+alfa",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2021/103532s5196lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=dornase+alfa"
  }
};})();
/* GOLD33_SELECTIVE:dornase_alfa:END */
/* GOLD33_SELECTIVE:dropropizina:START */
;(function(){var db=window.PNEUMOLOGIA_DRUGS_DB;if(!db||!db["dropropizina"])throw new Error("GOLD33_MISSING_CANONICAL:dropropizina");db["dropropizina"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "027",
    "requiredFieldCount": 33,
    "approvedSha256": "b6a76fbf1440e5ec71509c8cde336ce4c45c6a97a183998429f649b5751b7fd7",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Dropropizina",
    "class": "Antitussígeno periférico",
    "pharmacologicClass": "Ação antitussígena periférica; mecanismo não totalmente definido",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Xarope/solução oral e comprimidos em concentrações variáveis por país.",
    "presentations": "Xarope/solução oral e comprimidos em concentrações variáveis por país.",
    "mechanism": "Ação antitussígena periférica; mecanismo não totalmente definido. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Dados farmacocinéticos regulatórios limitados e dependentes do produto.",
    "indications": "Tosse seca irritativa conforme autorização nacional; não tratar tosse produtiva sem avaliação causal.",
    "dose": "Esquemas variam por produto; não há dose universal segura sem bula nacional e concentração. AUTOMATABLE=NO.",
    "pediatricDose": "Varia por idade/peso e produto; contraindicações etárias regionais. AUTOMATABLE=NO.",
    "renalDose": "Evitar/cautela em insuficiência renal grave por dados limitados.",
    "hepaticDose": "Evitar/cautela em insuficiência hepática grave.",
    "commonAdverseEffects": "Sonolência, náusea, tontura e desconforto GI.",
    "dangerousAdverseEffects": "Hipersensibilidade grave e depressão respiratória em uso inadequado/overdose.",
    "adverseEffects": "Sonolência, náusea, tontura e desconforto GI. Graves: Hipersensibilidade grave e depressão respiratória em uso inadequado/overdose.",
    "contraindications": "Hipersensibilidade; insuficiência respiratória, tosse produtiva e faixas etárias dependem do rótulo local.",
    "interactions": "Álcool e depressores do SNC podem aumentar sedação.",
    "monitoring": "Causa da tosse, duração, sedação, respiração e reação alérgica.",
    "administration": "Medir solução com dispositivo; respeitar intervalo e duração curta.",
    "preparation": "Usar a apresentação correta; seguir rótulo.",
    "infusionProtocol": "Não aplicável salvo produto parenteral.",
    "pregnancy": "Usar somente após avaliação individual de benefício-risco.",
    "lactation": "Dados limitados; avaliar exposição do lactente.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Hipersensibilidade grave e depressão respiratória em uso inadequado/overdose. Toda dose bloqueada sem país, bula executável, concentração, idade/peso, tipo/causa da tosse e função orgânica.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://consultas.anvisa.gov.br/#/bulario/",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.aemps.gob.es/medicamentos-de-uso-humano/portada/"
    ],
    "ref": "https://consultas.anvisa.gov.br/#/bulario/"
  },
  "es": {
    "name": "Dropropizina",
    "class": "Antitusivo periférico",
    "pharmacologicClass": "Acción antitusiva periférica; mecanismo no totalmente definido",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Jarabe/solución oral y comprimidos en concentraciones variables por país.",
    "presentations": "Jarabe/solución oral y comprimidos en concentraciones variables por país.",
    "mechanism": "Acción antitusiva periférica; mecanismo no totalmente definido. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Datos farmacocinéticos regulatorios limitados y dependientes del producto.",
    "indications": "Tos seca irritativa según autorización nacional; no tratar tos productiva sin evaluar causa.",
    "dose": "Pautas varían por producto; no hay dosis universal segura sin ficha nacional y concentración. AUTOMATABLE=NO.",
    "pediatricDose": "Varía por edad/peso y producto; contraindicaciones etarias regionales. AUTOMATABLE=NO.",
    "renalDose": "Evitar/precaución en insuficiencia renal grave por datos limitados.",
    "hepaticDose": "Evitar/precaución en insuficiencia hepática grave.",
    "commonAdverseEffects": "Somnolencia, náusea, mareo y malestar GI.",
    "dangerousAdverseEffects": "Hipersensibilidad grave y depresión respiratoria en uso inadecuado/sobredosis.",
    "adverseEffects": "Somnolencia, náusea, mareo y malestar GI. Graves: Hipersensibilidad grave y depresión respiratoria en uso inadecuado/sobredosis.",
    "contraindications": "Hipersensibilidad; insuficiencia respiratoria, tos productiva y edades dependen de ficha local.",
    "interactions": "Alcohol y depresores del SNC pueden aumentar sedación.",
    "monitoring": "Causa de tos, duración, sedación, respiración y reacción alérgica.",
    "administration": "Medir solución con dispositivo; respetar intervalo y duración corta.",
    "preparation": "Usar presentación correcta; seguir ficha.",
    "infusionProtocol": "No aplicable salvo producto parenteral.",
    "pregnancy": "Usar solo tras evaluación individual de beneficio-riesgo.",
    "lactation": "Datos limitados; evaluar exposición del lactante.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Hipersensibilidad grave y depresión respiratoria en uso inadecuado/sobredosis. Toda dose bloqueada sem país, bula executável, concentração, idade/peso, tipo/causa da tosse e função orgânica.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://consultas.anvisa.gov.br/#/bulario/",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.aemps.gob.es/medicamentos-de-uso-humano/portada/"
    ],
    "ref": "https://consultas.anvisa.gov.br/#/bulario/"
  }
};})();
/* GOLD33_SELECTIVE:dropropizina:END */
/* GOLD33_SELECTIVE:dupilumabe:START */
;(function(){var db=window.PNEUMOLOGIA_DRUGS_DB;if(!db||!db["dupilumabe"])throw new Error("GOLD33_MISSING_CANONICAL:dupilumabe");db["dupilumabe"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "028",
    "requiredFieldCount": 33,
    "approvedSha256": "ff7e772cca4ff0461ed14ee5bed47a89845b0c2810e7a428dbafbd2e78ef2bad",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Dupilumabe",
    "class": "Anticorpo monoclonal anti-IL-4Rα",
    "pharmacologicClass": "Bloqueia sinalização de IL-4 e IL-13",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Seringas/canetas SC 200 ou 300 mg; seringa 100 mg conforme mercado.",
    "presentations": "Seringas/canetas SC 200 ou 300 mg; seringa 100 mg conforme mercado.",
    "mechanism": "Bloqueia sinalização de IL-4 e IL-13. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Anticorpo IgG4; catabolismo proteico.",
    "indications": "Dermatite atópica, asma tipo 2, rinossinusite crônica com pólipos nasais, esofagite eosinofílica e outras indicações conforme idade/rótulo.",
    "dose": "Dose depende da indicação e peso. Exemplo dermatite atópica adulta: 600 mg carga, depois 300 mg SC a cada 2 semanas.",
    "pediatricDose": "Esquemas por idade/peso e indicação, inclusive ≥6 meses em dermatite atópica. AUTOMATABLE=NO.",
    "renalDose": "Sem ajuste esperado; dados limitados em grave.",
    "hepaticDose": "Sem ajuste esperado; dados limitados.",
    "commonAdverseEffects": "Reação no local, conjuntivite/blefarite, herpes oral e artralgia.",
    "dangerousAdverseEffects": "Anafilaxia, ceratite grave e condições eosinofílicas sistêmicas raras.",
    "adverseEffects": "Reação no local, conjuntivite/blefarite, herpes oral e artralgia. Graves: Anafilaxia, ceratite grave e condições eosinofílicas sistêmicas raras.",
    "contraindications": "Hipersensibilidade ao produto.",
    "interactions": "Evitar vacinas vivas; reduzir corticosteroide apenas gradualmente; atenção a helmintos.",
    "monitoring": "Controle da doença, olhos/conjuntivite, eosinofilia, hipersensibilidade, helmintos e dor articular.",
    "administration": "SC; permitir atingir temperatura ambiente conforme dispositivo; alternar locais.",
    "preparation": "Confirmar produto e apresentação; seguir rotulagem oficial.",
    "infusionProtocol": "Não aplicável salvo apresentação parenteral; quando houver, seguir rótulo.",
    "pregnancy": "Avaliar benefício-risco e rotulagem específica; evitar exposição desnecessária.",
    "lactation": "Avaliar transferência ao leite, idade do lactente e alternativa terapêutica.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Anafilaxia, ceratite grave e condições eosinofílicas sistêmicas raras. Esquema bloqueado sem indicação, idade, peso, fenótipo, comorbidades, vacinas, olhos e terapia concomitante.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=dupilumab",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/761055s065lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=dupilumab"
  },
  "es": {
    "name": "Dupilumab",
    "class": "Anticuerpo monoclonal anti-IL-4Rα",
    "pharmacologicClass": "Bloquea señalización de IL-4 e IL-13",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Jeringas/plumas SC 200 o 300 mg; jeringa 100 mg según mercado.",
    "presentations": "Jeringas/plumas SC 200 o 300 mg; jeringa 100 mg según mercado.",
    "mechanism": "Bloquea señalización de IL-4 e IL-13. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Anticuerpo IgG4; catabolismo proteico.",
    "indications": "Dermatitis atópica, asma tipo 2, rinosinusitis crónica con pólipos nasales, esofagitis eosinofílica y otras indicaciones según edad/ficha.",
    "dose": "Dosis depende de indicación y peso. Ejemplo dermatitis atópica adulta: 600 mg de carga, luego 300 mg SC cada 2 semanas.",
    "pediatricDose": "Esquemas por edad/peso e indicación, incluso ≥6 meses en dermatitis atópica. AUTOMATABLE=NO.",
    "renalDose": "Sin ajuste esperado; datos limitados en grave.",
    "hepaticDose": "Sin ajuste esperado; datos limitados.",
    "commonAdverseEffects": "Reacción local, conjuntivitis/blefaritis, herpes oral y artralgia.",
    "dangerousAdverseEffects": "Anafilaxia, queratitis grave y condiciones eosinofílicas sistémicas raras.",
    "adverseEffects": "Reacción local, conjuntivitis/blefaritis, herpes oral y artralgia. Graves: Anafilaxia, queratitis grave y condiciones eosinofílicas sistémicas raras.",
    "contraindications": "Hipersensibilidad al producto.",
    "interactions": "Evitar vacunas vivas; reducir corticoide solo gradualmente; atención a helmintos.",
    "monitoring": "Control de enfermedad, ojos/conjuntivitis, eosinofilia, hipersensibilidad, helmintos y dolor articular.",
    "administration": "SC; dejar llegar a temperatura ambiente según dispositivo; alternar sitios.",
    "preparation": "Confirmar producto y presentación; seguir ficha oficial.",
    "infusionProtocol": "No aplicable salvo presentación parenteral; cuando exista, seguir ficha.",
    "pregnancy": "Evaluar beneficio-riesgo y ficha específica; evitar exposición innecesaria.",
    "lactation": "Evaluar paso a leche, edad del lactante y alternativa terapéutica.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Anafilaxia, queratitis grave y condiciones eosinofílicas sistémicas raras. Esquema bloqueado sem indicação, idade, peso, fenótipo, comorbidades, vacinas, olhos e terapia concomitante.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=dupilumab",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/761055s065lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=dupilumab"
  }
};})();
/* GOLD33_SELECTIVE:dupilumabe:END */
/* GOLD33_SELECTIVE:erdosteina:START */
;(function(){var db=window.PNEUMOLOGIA_DRUGS_DB;if(!db||!db["erdosteina"])throw new Error("GOLD33_MISSING_CANONICAL:erdosteina");db["erdosteina"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "030",
    "requiredFieldCount": 33,
    "approvedSha256": "b6726ebdc5c8e078f5314ad3a6cb32ce82725cad8ec97894513a3dac291dff38",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Erdosteína",
    "class": "Mucolítico",
    "pharmacologicClass": "Pró-fármaco com metabólitos tiol que reduzem viscosidade do muco",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Cápsulas 300 mg, sachês e suspensão conforme país.",
    "presentations": "Cápsulas 300 mg, sachês e suspensão conforme país.",
    "mechanism": "Pró-fármaco com metabólitos tiol que reduzem viscosidade do muco. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Pró-fármaco hepático a metabólito ativo; eliminação renal.",
    "indications": "Distúrbios respiratórios com secreção espessa conforme autorização nacional; não aprovada nos EUA.",
    "dose": "Adultos: frequentemente 300 mg VO 2x/dia; duração e produto conforme bula nacional.",
    "pediatricDose": "Dose por peso/idade varia por produto; AUTOMATABLE=NO.",
    "renalDose": "Reduzir/evitar em insuficiência renal grave conforme rótulo.",
    "hepaticDose": "Contraindicada ou evitar em hepatopatia grave conforme rótulo.",
    "commonAdverseEffects": "Náusea, dor epigástrica, cefaleia e alteração do paladar.",
    "dangerousAdverseEffects": "Hipersensibilidade/broncoespasmo e lesão hepática rara.",
    "adverseEffects": "Náusea, dor epigástrica, cefaleia e alteração do paladar. Graves: Hipersensibilidade/broncoespasmo e lesão hepática rara.",
    "contraindications": "Hipersensibilidade, doença hepática/renal grave; homocistinúria conforme rótulo.",
    "interactions": "Interações relevantes pouco definidas; revisar antitussígenos que retêm secreção.",
    "monitoring": "Sintomas, volume de secreção, broncoespasmo, rim/fígado e tolerância GI.",
    "administration": "VO com hidratação adequada; não substituir avaliação da causa.",
    "preparation": "Confirmar produto, concentração e apresentação; seguir rótulo oficial.",
    "infusionProtocol": "Não aplicável salvo apresentação parenteral; seguir protocolo do produto.",
    "pregnancy": "Usar somente após avaliação individual de benefício-risco e rotulagem específica.",
    "lactation": "Avaliar benefício materno, exposição do lactente e alternativas.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Hipersensibilidade/broncoespasmo e lesão hepática rara. Dose bloqueada sem país/bula, idade/peso, formulação, diagnóstico, rim/fígado e característica da tosse/secreção.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://cima.aemps.es/cima/publico/home.html",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://consultas.anvisa.gov.br/#/bulario/"
    ],
    "ref": "https://cima.aemps.es/cima/publico/home.html"
  },
  "es": {
    "name": "Erdosteína",
    "class": "Mucolítico",
    "pharmacologicClass": "Profármaco con metabolitos tiol que reducen viscosidad del moco",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Cápsulas 300 mg, sobres y suspensión según país.",
    "presentations": "Cápsulas 300 mg, sobres y suspensión según país.",
    "mechanism": "Profármaco con metabolitos tiol que reducen viscosidad del moco. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Profármaco hepático a metabolito activo; eliminación renal.",
    "indications": "Trastornos respiratorios con secreción espesa según autorización nacional; no aprobada en EE. UU.",
    "dose": "Adultos: frecuentemente 300 mg VO 2 veces/día; duración y producto según ficha nacional.",
    "pediatricDose": "Dosis por peso/edad varía por producto; AUTOMATABLE=NO.",
    "renalDose": "Reducir/evitar en insuficiencia renal grave según ficha.",
    "hepaticDose": "Contraindicada o evitar en hepatopatía grave según ficha.",
    "commonAdverseEffects": "Náusea, dolor epigástrico, cefalea y alteración del gusto.",
    "dangerousAdverseEffects": "Hipersensibilidad/broncoespasmo y lesión hepática rara.",
    "adverseEffects": "Náusea, dolor epigástrico, cefalea y alteración del gusto. Graves: Hipersensibilidad/broncoespasmo y lesión hepática rara.",
    "contraindications": "Hipersensibilidad, enfermedad hepática/renal grave; homocistinuria según ficha.",
    "interactions": "Interacciones relevantes poco definidas; revisar antitusivos que retienen secreción.",
    "monitoring": "Síntomas, volumen de secreción, broncoespasmo, riñón/hígado y tolerancia GI.",
    "administration": "VO con hidratación adecuada; no sustituir evaluación de causa.",
    "preparation": "Confirmar producto, concentración y presentación; seguir ficha oficial.",
    "infusionProtocol": "No aplicable salvo presentación parenteral; seguir protocolo del producto.",
    "pregnancy": "Usar solo tras evaluación individual de beneficio-riesgo y ficha específica.",
    "lactation": "Evaluar beneficio materno, exposición del lactante y alternativas.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Hipersensibilidad/broncoespasmo y lesión hepática rara. Dose bloqueada sem país/bula, idade/peso, formulação, diagnóstico, rim/fígado e característica da tosse/secreção.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://cima.aemps.es/cima/publico/home.html",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://consultas.anvisa.gov.br/#/bulario/"
    ],
    "ref": "https://cima.aemps.es/cima/publico/home.html"
  }
};})();
/* GOLD33_SELECTIVE:erdosteina:END */
/* GOLD33_SELECTIVE:fenoterol:START */
;(function(){var db=window.PNEUMOLOGIA_DRUGS_DB;if(!db||!db["fenoterol"])throw new Error("GOLD33_MISSING_CANONICAL:fenoterol");db["fenoterol"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "034",
    "requiredFieldCount": 33,
    "approvedSha256": "b90c78c0a4b09d50bd88ab5f342b5a0439a3a5e3a3e16172327eb01d98d1297b",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Fenoterol",
    "class": "Broncodilatador beta-2 agonista",
    "pharmacologicClass": "Agonista beta-2 de curta ação",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Aerossol dosimetrado 100 microgramas/dose e solução para nebulização em concentrações regionais.",
    "presentations": "Aerossol dosimetrado 100 microgramas/dose e solução para nebulização em concentrações regionais.",
    "mechanism": "Agonista beta-2 de curta ação. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Início rápido; metabolismo por conjugação e eliminação renal/biliar.",
    "indications": "Broncoespasmo em asma/DPOC conforme registro nacional; não aprovado nos EUA.",
    "dose": "Aerossol: frequentemente 1–2 inalações conforme necessidade, respeitando máximo da bula local; nebulização depende da concentração/produto.",
    "pediatricDose": "Dose por idade e apresentação regional; AUTOMATABLE=NO.",
    "renalDose": "Sem ajuste definido; cautela em doença grave.",
    "hepaticDose": "Sem ajuste definido.",
    "commonAdverseEffects": "Tremor, taquicardia, palpitação, cefaleia e nervosismo.",
    "dangerousAdverseEffects": "Arritmia, hipocalemia, acidose láctica, isquemia e broncoespasmo paradoxal.",
    "adverseEffects": "Tremor, taquicardia, palpitação, cefaleia e nervosismo. Graves: Arritmia, hipocalemia, acidose láctica, isquemia e broncoespasmo paradoxal.",
    "contraindications": "Hipersensibilidade e taquiarritmia/cardiomiopatia obstrutiva conforme algumas bulas.",
    "interactions": "Beta-bloqueadores antagonizam; IMAO/tricíclicos e simpaticomiméticos aumentam efeitos; diuréticos/xantinas/corticoides elevam hipocalemia.",
    "monitoring": "Resposta, uso de resgate, FC/PA, tremor, K e ECG em uso intensivo.",
    "administration": "Inalatória; técnica e espaçador quando apropriado. Uso excessivo exige reavaliação do controle da asma.",
    "preparation": "Confirmar concentração antes de nebulizar; diluição somente conforme bula.",
    "infusionProtocol": "Nebulizar com equipamento adequado até consumo da solução; fluxo/protocolo local.",
    "pregnancy": "Usar menor dose eficaz quando indicado.",
    "lactation": "Dados limitados; exposição sistêmica inalatória costuma ser baixa.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Arritmia, hipocalemia, acidose láctica, isquemia e broncoespasmo paradoxal. Dose/regime bloqueados até confirmar país, produto, concentração, idade, gravidade e plano controlador; divergência regulatória regional explícita.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://cima.aemps.es/cima/publico/home.html",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.anmat.gob.ar/Medicamentos/basedat.asp"
    ],
    "ref": "https://cima.aemps.es/cima/publico/home.html"
  },
  "es": {
    "name": "Fenoterol",
    "class": "Broncodilatador agonista beta-2",
    "pharmacologicClass": "Agonista beta-2 de acción corta",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Aerosol dosificado 100 microgramos/dosis y solución para nebulización en concentraciones regionales.",
    "presentations": "Aerosol dosificado 100 microgramos/dosis y solución para nebulización en concentraciones regionales.",
    "mechanism": "Agonista beta-2 de acción corta. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Inicio rápido; metabolismo por conjugación y eliminación renal/biliar.",
    "indications": "Broncoespasmo en asma/EPOC según registro nacional; no aprobado en EE. UU.",
    "dose": "Aerosol: frecuentemente 1–2 inhalaciones según necesidad, respetando máximo de ficha local; nebulización depende de concentración/producto.",
    "pediatricDose": "Dosis por edad y presentación regional; AUTOMATABLE=NO.",
    "renalDose": "Sin ajuste definido; precaución en enfermedad grave.",
    "hepaticDose": "Sin ajuste definido.",
    "commonAdverseEffects": "Temblor, taquicardia, palpitación, cefalea y nerviosismo.",
    "dangerousAdverseEffects": "Arritmia, hipopotasemia, acidosis láctica, isquemia y broncoespasmo paradójico.",
    "adverseEffects": "Temblor, taquicardia, palpitación, cefalea y nerviosismo. Graves: Arritmia, hipopotasemia, acidosis láctica, isquemia y broncoespasmo paradójico.",
    "contraindications": "Hipersensibilidad y taquiarritmia/cardiomiopatía obstructiva según algunas fichas.",
    "interactions": "Betabloqueantes antagonizan; IMAO/tricíclicos y simpaticomiméticos aumentan efectos; diuréticos/xantinas/corticoides elevan hipopotasemia.",
    "monitoring": "Respuesta, uso de rescate, FC/PA, temblor, K y ECG con uso intensivo.",
    "administration": "Inhalatoria; técnica y espaciador cuando corresponda. Uso excesivo exige reevaluar control del asma.",
    "preparation": "Confirmar concentración antes de nebulizar; dilución solo según ficha.",
    "infusionProtocol": "Nebulizar con equipo adecuado hasta consumir solución; flujo/protocolo local.",
    "pregnancy": "Usar mínima dosis eficaz cuando esté indicado.",
    "lactation": "Datos limitados; exposición sistémica inhalatoria suele ser baja.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Arritmia, hipopotasemia, acidosis láctica, isquemia y broncoespasmo paradójico. Dose/regime bloqueados até confirmar país, produto, concentração, idade, gravidade e plano controlador; divergência regulatória regional explícita.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://cima.aemps.es/cima/publico/home.html",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.anmat.gob.ar/Medicamentos/basedat.asp"
    ],
    "ref": "https://cima.aemps.es/cima/publico/home.html"
  }
};})();
/* GOLD33_SELECTIVE:fenoterol:END */
/* GOLD33_SELECTIVE:formoterol:START */
;(function(){var db=window.PNEUMOLOGIA_DRUGS_DB;if(!db||!db["formoterol"])throw new Error("GOLD33_MISSING_CANONICAL:formoterol");db["formoterol"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "037",
    "requiredFieldCount": 33,
    "approvedSha256": "a53427094bad82f1f3c53a7e3d1b8ceb4d3852297b69defd8d47d1edb290443f",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Formoterol",
    "class": "Agonista beta2 de longa ação",
    "pharmacologicClass": "Broncodilatador LABA",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Solução para nebulização 20 microgramas/2 mL e cápsulas/pó inalatório em apresentações regionais.",
    "presentations": "Solução para nebulização 20 microgramas/2 mL e cápsulas/pó inalatório em apresentações regionais.",
    "mechanism": "Broncodilatador LABA. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Início rápido, duração ~12 h; metabolismo hepático e eliminação renal/fecal.",
    "indications": "Manutenção da broncoconstrição na DPOC; apresentações combinadas possuem indicações próprias. Não usar isoladamente na asma.",
    "dose": "Solução nebulizada para DPOC: 20 microgramas a cada 12 h; não exceder 40 microgramas/dia.",
    "pediatricDose": "Não estabelecido para solução nebulizada; apresentações combinadas variam por idade. AUTOMATABLE=NO.",
    "renalDose": "Sem ajuste usual; dados limitados.",
    "hepaticDose": "Dados limitados; cautela.",
    "commonAdverseEffects": "Tremor, palpitação, cefaleia, cãibra e náusea.",
    "dangerousAdverseEffects": "Broncoespasmo paradoxal, arritmia, hipocalemia, hiperglicemia e exacerbação grave se uso inadequado.",
    "adverseEffects": "Tremor, palpitação, cefaleia, cãibra e náusea. Graves: Broncoespasmo paradoxal, arritmia, hipocalemia, hiperglicemia e exacerbação grave se uso inadequado.",
    "contraindications": "Hipersensibilidade; LABA isolado é contraindicado na asma sem corticosteroide inalatório.",
    "interactions": "Outros simpaticomiméticos, beta-bloqueadores, IMAO/tricíclicos, diuréticos e fármacos que prolongam QT.",
    "monitoring": "Sintomas, uso de resgate, FC/PA, K, glicose, ECG em risco e técnica.",
    "administration": "Somente inalação por nebulizador adequado; não ingerir/injetar e não usar como resgate.",
    "preparation": "Ampola pronta para nebulização; não misturar sem compatibilidade comprovada.",
    "infusionProtocol": "Nebulizar o conteúdo conforme dispositivo; manter broncodilatador de ação curta para resgate.",
    "pregnancy": "Dados limitados; usar se necessário.",
    "lactation": "Dados insuficientes; avaliar.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Broncoespasmo paradoxal, arritmia, hipocalemia, hiperglicemia e exacerbação grave se uso inadequado. Uso bloqueado sem diagnóstico, formulação/dispositivo, terapia controladora, frequência de resgate, risco cardíaco, K e lista de LABA concomitantes.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=formoterol+fumarate",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2012/022007s007lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=formoterol+fumarate"
  },
  "es": {
    "name": "Formoterol",
    "class": "Agonista beta2 de acción prolongada",
    "pharmacologicClass": "Broncodilatador LABA",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Solución para nebulización 20 microgramos/2 mL y cápsulas/polvo inhalado en presentaciones regionales.",
    "presentations": "Solución para nebulización 20 microgramos/2 mL y cápsulas/polvo inhalado en presentaciones regionales.",
    "mechanism": "Broncodilatador LABA. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Inicio rápido, duración ~12 h; metabolismo hepático y eliminación renal/fecal.",
    "indications": "Mantenimiento de broncoconstricción en EPOC; combinaciones tienen indicaciones propias. No usar solo en asma.",
    "dose": "Solución nebulizada para EPOC: 20 microgramos cada 12 h; no superar 40 microgramos/día.",
    "pediatricDose": "No establecido para solución nebulizada; combinaciones varían por edad. AUTOMATABLE=NO.",
    "renalDose": "Sin ajuste habitual; datos limitados.",
    "hepaticDose": "Datos limitados; precaución.",
    "commonAdverseEffects": "Temblor, palpitación, cefalea, calambre y náusea.",
    "dangerousAdverseEffects": "Broncoespasmo paradójico, arritmia, hipopotasemia, hiperglucemia y exacerbación grave si uso inadecuado.",
    "adverseEffects": "Temblor, palpitación, cefalea, calambre y náusea. Graves: Broncoespasmo paradójico, arritmia, hipopotasemia, hiperglucemia y exacerbación grave si uso inadecuado.",
    "contraindications": "Hipersensibilidad; LABA solo está contraindicado en asma sin corticoide inhalado.",
    "interactions": "Otros simpaticomiméticos, betabloqueantes, IMAO/tricíclicos, diuréticos y fármacos que prolongan QT.",
    "monitoring": "Síntomas, rescate, FC/PA, K, glucosa, ECG en riesgo y técnica.",
    "administration": "Solo inhalación con nebulizador adecuado; no ingerir/inyectar ni usar como rescate.",
    "preparation": "Ampolla lista para nebulización; no mezclar sin compatibilidad comprobada.",
    "infusionProtocol": "Nebulizar contenido según dispositivo; mantener broncodilatador de acción corta de rescate.",
    "pregnancy": "Datos limitados; usar si es necesario.",
    "lactation": "Datos insuficientes; evaluar.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Broncoespasmo paradójico, arritmia, hipopotasemia, hiperglucemia y exacerbación grave si uso inadecuado. Uso bloqueado sem diagnóstico, formulação/dispositivo, terapia controladora, frequência de resgate, risco cardíaco, K e lista de LABA concomitantes.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=formoterol+fumarate",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2012/022007s007lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=formoterol+fumarate"
  }
};})();
/* GOLD33_SELECTIVE:formoterol:END */
/* GOLD33_SELECTIVE:glicopirronio:START */
;(function(){var db=window.PNEUMOLOGIA_DRUGS_DB;if(!db||!db["glicopirronio"])throw new Error("GOLD33_MISSING_CANONICAL:glicopirronio");db["glicopirronio"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "039",
    "requiredFieldCount": 33,
    "approvedSha256": "72a167888bdcc091cdbc40db2f06d309c0b3210c89d1ba428d1e7253777d5c65",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Glicopirrônio",
    "class": "Antimuscarínico",
    "pharmacologicClass": "Antagonista muscarínico de longa ação; também existe forma injetável de ação sistêmica",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Cápsulas/pó inalatório e solução nebulizada; injeção 0,2 mg/mL conforme produto.",
    "presentations": "Cápsulas/pó inalatório e solução nebulizada; injeção 0,2 mg/mL conforme produto.",
    "mechanism": "Antagonista muscarínico de longa ação; também existe forma injetável de ação sistêmica. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Absorção depende da formulação; eliminação renal relevante.",
    "indications": "Manutenção da DPOC por inalação; formulação injetável tem indicações perioperatórias distintas.",
    "dose": "DPOC: usar a dose fixa do dispositivo específico, em geral 1 ou 2 administrações/dia. Não converter entre dispositivos.",
    "pediatricDose": "Segurança não estabelecida para DPOC pediátrica; injetável exige bula específica. AUTOMATABLE=NO.",
    "renalDose": "Cautela em insuficiência renal grave; exposição pode aumentar.",
    "hepaticDose": "Sem ajuste específico bem estabelecido.",
    "commonAdverseEffects": "Boca seca, tosse e infecção respiratória.",
    "dangerousAdverseEffects": "Broncoespasmo paradoxal, glaucoma agudo, retenção urinária e hipersensibilidade.",
    "adverseEffects": "Boca seca, tosse e infecção respiratória. Graves: Broncoespasmo paradoxal, glaucoma agudo, retenção urinária e hipersensibilidade.",
    "contraindications": "Hipersensibilidade; cautela em glaucoma de ângulo fechado e retenção urinária.",
    "interactions": "Outros anticolinérgicos podem aumentar toxicidade.",
    "monitoring": "Sintomas respiratórios, técnica, boca seca, visão, retenção urinária e função renal.",
    "administration": "Somente pela via do produto; cápsulas inalatórias não devem ser ingeridas.",
    "preparation": "Dispositivo pronto; não misturar solução nebulizada sem compatibilidade.",
    "infusionProtocol": "Não aplicável à formulação inalatória.",
    "pregnancy": "Dados insuficientes; avaliar benefício.",
    "lactation": "Dados insuficientes; baixa exposição sistêmica inalatória não elimina risco.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Broncoespasmo paradoxal, glaucoma agudo, retenção urinária e hipersensibilidade. Seleção e dose bloqueadas sem formulação, dispositivo, indicação, rim, glaucoma e retenção urinária.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=glycopyrrolate"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=glycopyrrolate"
  },
  "es": {
    "name": "Glicopirronio",
    "class": "Antimuscarínico",
    "pharmacologicClass": "Antagonista muscarínico de acción prolongada; también existe forma inyectable sistémica",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Cápsulas/polvo inhalado y solución nebulizada; inyección 0,2 mg/mL según producto.",
    "presentations": "Cápsulas/polvo inhalado y solución nebulizada; inyección 0,2 mg/mL según producto.",
    "mechanism": "Antagonista muscarínico de acción prolongada; también existe forma inyectable sistémica. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Absorción depende de la formulación; eliminación renal relevante.",
    "indications": "Mantenimiento de EPOC por inhalación; la formulación inyectable tiene indicaciones perioperatorias distintas.",
    "dose": "EPOC: usar la dosis fija del dispositivo específico, generalmente 1 o 2 administraciones/día. No convertir entre dispositivos.",
    "pediatricDose": "Seguridad no establecida para EPOC pediátrica; inyectable exige ficha específica. AUTOMATABLE=NO.",
    "renalDose": "Precaución en insuficiencia renal grave; la exposición puede aumentar.",
    "hepaticDose": "Sin ajuste específico bien establecido.",
    "commonAdverseEffects": "Boca seca, tos e infección respiratoria.",
    "dangerousAdverseEffects": "Broncoespasmo paradójico, glaucoma agudo, retención urinaria e hipersensibilidad.",
    "adverseEffects": "Boca seca, tos e infección respiratoria. Graves: Broncoespasmo paradójico, glaucoma agudo, retención urinaria e hipersensibilidad.",
    "contraindications": "Hipersensibilidad; precaución en glaucoma de ángulo cerrado y retención urinaria.",
    "interactions": "Otros anticolinérgicos pueden aumentar toxicidad.",
    "monitoring": "Síntomas respiratorios, técnica, boca seca, visión, retención urinaria y función renal.",
    "administration": "Solo por la vía del producto; las cápsulas inhaladas no deben ingerirse.",
    "preparation": "Dispositivo listo; no mezclar solución nebulizada sin compatibilidad.",
    "infusionProtocol": "No aplicable a formulación inhalada.",
    "pregnancy": "Datos insuficientes; evaluar beneficio.",
    "lactation": "Datos insuficientes; baja exposición sistémica inhalada no elimina riesgo.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Broncoespasmo paradójico, glaucoma agudo, retención urinaria e hipersensibilidad. Seleção e dose bloqueadas sem formulação, dispositivo, indicação, rim, glaucoma e retenção urinária.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=glycopyrrolate"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=glycopyrrolate"
  }
};})();
/* GOLD33_SELECTIVE:glicopirronio:END */
/* GOLD33_SELECTIVE:glicopirronio_indacaterol:START */
;(function(){var db=window.PNEUMOLOGIA_DRUGS_DB;if(!db||!db["glicopirronio_indacaterol"])throw new Error("GOLD33_MISSING_CANONICAL:glicopirronio_indacaterol");db["glicopirronio_indacaterol"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "039",
    "requiredFieldCount": 33,
    "approvedSha256": "72a167888bdcc091cdbc40db2f06d309c0b3210c89d1ba428d1e7253777d5c65",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Glicopirrônio + indacaterol",
    "class": "LAMA/LABA",
    "pharmacologicClass": "Antagonista muscarínico + agonista beta2 de longa ação",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Pó inalatório em cápsula/dispositivo ou inalador, com forças regionais diferentes.",
    "presentations": "Pó inalatório em cápsula/dispositivo ou inalador, com forças regionais diferentes.",
    "mechanism": "Antagonista muscarínico + agonista beta2 de longa ação. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Indacaterol metabolizado por CYP3A4/UGT1A1; glicopirrônio tem eliminação renal.",
    "indications": "Manutenção da obstrução ao fluxo aéreo na DPOC; não é resgate nem tratamento de asma.",
    "dose": "Inalar a dose do produto uma vez/dia; não exceder e não intercambiar forças/dispositivos.",
    "pediatricDose": "Não indicado em pediatria. AUTOMATABLE=NO.",
    "renalDose": "Cautela em insuficiência renal grave pelo glicopirrônio.",
    "hepaticDose": "Sem ajuste específico; dados limitados na doença grave.",
    "commonAdverseEffects": "Tosse, nasofaringite, cefaleia e boca seca.",
    "dangerousAdverseEffects": "Broncoespasmo paradoxal, arritmia, hipocalemia e hipersensibilidade.",
    "adverseEffects": "Tosse, nasofaringite, cefaleia e boca seca. Graves: Broncoespasmo paradoxal, arritmia, hipocalemia e hipersensibilidade.",
    "contraindications": "Hipersensibilidade; contraindicado para asma sem corticosteroide inalatório.",
    "interactions": "Beta-bloqueadores, simpaticomiméticos, anticolinérgicos, IMAO/tricíclicos e fármacos que prolongam QT.",
    "monitoring": "Dispneia, uso de resgate, técnica, FC/PA, K, glicose e retenção urinária.",
    "administration": "Inalação oral no mesmo horário; não engolir cápsula.",
    "preparation": "Carregar dispositivo conforme fabricante; não lavar cápsula.",
    "infusionProtocol": "Não aplicável.",
    "pregnancy": "Dados insuficientes.",
    "lactation": "Dados insuficientes.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Broncoespasmo paradoxal, arritmia, hipocalemia e hipersensibilidade. Uso bloqueado sem diagnóstico DPOC, dispositivo/força, técnica, comorbidades cardíacas, K, rim e medicações concomitantes.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=indacaterol+glycopyrrolate"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=indacaterol+glycopyrrolate"
  },
  "es": {
    "name": "Glicopirronio + indacaterol",
    "class": "LAMA/LABA",
    "pharmacologicClass": "Antagonista muscarínico + agonista beta2 de acción prolongada",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Polvo inhalado en cápsula/dispositivo o inhalador, con dosis regionales diferentes.",
    "presentations": "Polvo inhalado en cápsula/dispositivo o inhalador, con dosis regionales diferentes.",
    "mechanism": "Antagonista muscarínico + agonista beta2 de acción prolongada. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Indacaterol metabolizado por CYP3A4/UGT1A1; glicopirronio tiene eliminación renal.",
    "indications": "Mantenimiento de obstrucción aérea en EPOC; no es rescate ni tratamiento de asma.",
    "dose": "Inhalar la dosis del producto una vez/día; no exceder ni intercambiar concentraciones/dispositivos.",
    "pediatricDose": "No indicado en pediatría. AUTOMATABLE=NO.",
    "renalDose": "Precaución en insuficiencia renal grave por glicopirronio.",
    "hepaticDose": "Sin ajuste específico; datos limitados en enfermedad grave.",
    "commonAdverseEffects": "Tos, nasofaringitis, cefalea y boca seca.",
    "dangerousAdverseEffects": "Broncoespasmo paradójico, arritmia, hipopotasemia e hipersensibilidad.",
    "adverseEffects": "Tos, nasofaringitis, cefalea y boca seca. Graves: Broncoespasmo paradójico, arritmia, hipopotasemia e hipersensibilidad.",
    "contraindications": "Hipersensibilidad; contraindicado en asma sin corticosteroide inhalado.",
    "interactions": "Betabloqueantes, simpaticomiméticos, anticolinérgicos, IMAO/tricíclicos y fármacos que prolongan QT.",
    "monitoring": "Disnea, rescate, técnica, FC/PA, K, glucosa y retención urinaria.",
    "administration": "Inhalación oral a la misma hora; no tragar cápsula.",
    "preparation": "Cargar dispositivo según fabricante; no lavar cápsula.",
    "infusionProtocol": "No aplicable.",
    "pregnancy": "Datos insuficientes.",
    "lactation": "Datos insuficientes.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Broncoespasmo paradójico, arritmia, hipopotasemia e hipersensibilidad. Uso bloqueado sem diagnóstico DPOC, dispositivo/força, técnica, comorbidades cardíacas, K, rim e medicações concomitantes.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=indacaterol+glycopyrrolate"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=indacaterol+glycopyrrolate"
  }
};})();
/* GOLD33_SELECTIVE:glicopirronio_indacaterol:END */
/* GOLD33_SELECTIVE:indacaterol:START */
;(function(){var db=window.PNEUMOLOGIA_DRUGS_DB;if(!db||!db["indacaterol"])throw new Error("GOLD33_MISSING_CANONICAL:indacaterol");db["indacaterol"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "041",
    "requiredFieldCount": 33,
    "approvedSha256": "fadb9514b3f6f966bf91d94abcad4b74bc40f729c9030650dcf67f4db90a6f50",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "BLOQUEADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Indacaterol",
    "class": "Não documentado de forma suficiente na fonte primária consultada; manter bloqueado até revisão.",
    "pharmacologicClass": "Não documentado de forma suficiente na fonte primária consultada; manter bloqueado até revisão.",
    "commercialNames": "Não documentado de forma suficiente na fonte primária consultada; manter bloqueado até revisão.",
    "presentation": "Não documentado de forma suficiente na fonte primária consultada; manter bloqueado até revisão.",
    "presentations": "Não documentado de forma suficiente na fonte primária consultada; manter bloqueado até revisão.",
    "mechanism": "Não documentado de forma suficiente na fonte primária consultada; manter bloqueado até revisão.",
    "pharmacodynamics": "Não documentado de forma suficiente na fonte primária consultada; manter bloqueado até revisão.",
    "pharmacokinetics": "Não documentado de forma suficiente na fonte primária consultada; manter bloqueado até revisão.",
    "indications": "Não documentado de forma suficiente na fonte primária consultada; manter bloqueado até revisão.",
    "dose": "Onbrez Breezhaler (UE): 150 mcg inalados uma vez ao dia; 300 mcg uma vez ao dia pode oferecer benefício adicional em alguns adultos com DPOC grave. Não exceder 300 mcg/dia. A apresentação dos EUA (Arcapta) usa 75 mcg/dia: não intercambiar.",
    "pediatricDose": "Não indicado em pediatria para DPOC; cálculo bloqueado.",
    "renalDose": "Não documentado de forma suficiente na fonte primária consultada; manter bloqueado até revisão.",
    "hepaticDose": "Não documentado de forma suficiente na fonte primária consultada; manter bloqueado até revisão.",
    "commonAdverseEffects": "Não documentado de forma suficiente na fonte primária consultada; manter bloqueado até revisão.",
    "dangerousAdverseEffects": "Não documentado de forma suficiente na fonte primária consultada; manter bloqueado até revisão.",
    "adverseEffects": "Não documentado de forma suficiente na fonte primária consultada; manter bloqueado até revisão.",
    "contraindications": "Não documentado de forma suficiente na fonte primária consultada; manter bloqueado até revisão.",
    "interactions": "Não documentado de forma suficiente na fonte primária consultada; manter bloqueado até revisão.",
    "monitoring": "Não documentado de forma suficiente na fonte primária consultada; manter bloqueado até revisão.",
    "administration": "Somente inalação com o dispositivo correspondente; cápsulas não devem ser engolidas.",
    "preparation": "Não documentado de forma suficiente na fonte primária consultada; manter bloqueado até revisão.",
    "infusionProtocol": "Não documentado de forma suficiente na fonte primária consultada; manter bloqueado até revisão.",
    "pregnancy": "Não documentado de forma suficiente na fonte primária consultada; manter bloqueado até revisão.",
    "lactation": "Não documentado de forma suficiente na fonte primária consultada; manter bloqueado até revisão.",
    "specialPopulations": "Não documentado de forma suficiente na fonte primária consultada; manter bloqueado até revisão.",
    "patientEducation": "Não documentado de forma suficiente na fonte primária consultada; manter bloqueado até revisão.",
    "clinicalPearls": "Não documentado de forma suficiente na fonte primária consultada; manter bloqueado até revisão.",
    "guidelineRecommendations": "Não documentado de forma suficiente na fonte primária consultada; manter bloqueado até revisão.",
    "safetyFlags": "Não documentado de forma suficiente na fonte primária consultada; manter bloqueado até revisão.",
    "alerts": "Não documentado de forma suficiente na fonte primária consultada; manter bloqueado até revisão.",
    "references": [
      "EMA - Onbrez Breezhaler EPAR: https://www.ema.europa.eu/en/medicines/human/EPAR/onbrez-breezhaler",
      "UK SmPC - Onbrez Breezhaler 150/300 mcg: https://www.medicines.org.uk/emc/product/601/smpc"
    ],
    "ref": "https://www.ema.europa.eu/en/medicines/human/EPAR/onbrez-breezhaler"
  },
  "es": {
    "name": "Indacaterol",
    "class": "No documentado de forma suficiente en la fuente primaria consultada; mantener bloqueado hasta revisión.",
    "pharmacologicClass": "No documentado de forma suficiente en la fuente primaria consultada; mantener bloqueado hasta revisión.",
    "commercialNames": "No documentado de forma suficiente en la fuente primaria consultada; mantener bloqueado hasta revisión.",
    "presentation": "No documentado de forma suficiente en la fuente primaria consultada; mantener bloqueado hasta revisión.",
    "presentations": "No documentado de forma suficiente en la fuente primaria consultada; mantener bloqueado hasta revisión.",
    "mechanism": "No documentado de forma suficiente en la fuente primaria consultada; mantener bloqueado hasta revisión.",
    "pharmacodynamics": "No documentado de forma suficiente en la fuente primaria consultada; mantener bloqueado hasta revisión.",
    "pharmacokinetics": "No documentado de forma suficiente en la fuente primaria consultada; mantener bloqueado hasta revisión.",
    "indications": "No documentado de forma suficiente en la fuente primaria consultada; mantener bloqueado hasta revisión.",
    "dose": "Onbrez Breezhaler (UE): 150 mcg inhalados una vez al día; 300 mcg una vez al día puede aportar beneficio adicional en algunos adultos con EPOC grave. No exceder 300 mcg/día. La presentación de EE. UU. (Arcapta) usa 75 mcg/día: no intercambiar.",
    "pediatricDose": "No indicado en pediatría para EPOC; cálculo bloqueado.",
    "renalDose": "No documentado de forma suficiente en la fuente primaria consultada; mantener bloqueado hasta revisión.",
    "hepaticDose": "No documentado de forma suficiente en la fuente primaria consultada; mantener bloqueado hasta revisión.",
    "commonAdverseEffects": "No documentado de forma suficiente en la fuente primaria consultada; mantener bloqueado hasta revisión.",
    "dangerousAdverseEffects": "No documentado de forma suficiente en la fuente primaria consultada; mantener bloqueado hasta revisión.",
    "adverseEffects": "No documentado de forma suficiente en la fuente primaria consultada; mantener bloqueado hasta revisión.",
    "contraindications": "No documentado de forma suficiente en la fuente primaria consultada; mantener bloqueado hasta revisión.",
    "interactions": "No documentado de forma suficiente en la fuente primaria consultada; mantener bloqueado hasta revisión.",
    "monitoring": "No documentado de forma suficiente en la fuente primaria consultada; mantener bloqueado hasta revisión.",
    "administration": "Solo inhalación con el dispositivo correspondiente; las cápsulas no deben tragarse.",
    "preparation": "No documentado de forma suficiente en la fuente primaria consultada; mantener bloqueado hasta revisión.",
    "infusionProtocol": "No documentado de forma suficiente en la fuente primaria consultada; mantener bloqueado hasta revisión.",
    "pregnancy": "No documentado de forma suficiente en la fuente primaria consultada; mantener bloqueado hasta revisión.",
    "lactation": "No documentado de forma suficiente en la fuente primaria consultada; mantener bloqueado hasta revisión.",
    "specialPopulations": "No documentado de forma suficiente en la fuente primaria consultada; mantener bloqueado hasta revisión.",
    "patientEducation": "No documentado de forma suficiente en la fuente primaria consultada; mantener bloqueado hasta revisión.",
    "clinicalPearls": "No documentado de forma suficiente en la fuente primaria consultada; mantener bloqueado hasta revisión.",
    "guidelineRecommendations": "No documentado de forma suficiente en la fuente primaria consultada; mantener bloqueado hasta revisión.",
    "safetyFlags": "No documentado de forma suficiente en la fuente primaria consultada; mantener bloqueado hasta revisión.",
    "alerts": "No documentado de forma suficiente en la fuente primaria consultada; mantener bloqueado hasta revisión.",
    "references": [
      "EMA - Onbrez Breezhaler EPAR: https://www.ema.europa.eu/en/medicines/human/EPAR/onbrez-breezhaler",
      "UK SmPC - Onbrez Breezhaler 150/300 mcg: https://www.medicines.org.uk/emc/product/601/smpc"
    ],
    "ref": "https://www.ema.europa.eu/en/medicines/human/EPAR/onbrez-breezhaler"
  }
};})();
/* GOLD33_SELECTIVE:indacaterol:END */
/* GOLD33_SELECTIVE:ipratropio:START */
;(function(){var db=window.PNEUMOLOGIA_DRUGS_DB;if(!db||!db["ipratropio"])throw new Error("GOLD33_MISSING_CANONICAL:ipratropio");db["ipratropio"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "043",
    "requiredFieldCount": 33,
    "approvedSha256": "b6aa150d0e0594cadfb5028a6cadd7836618b672ad0e07215793b4b78fc9cec5",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "BLOQUEADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Brometo de ipratrópio",
    "class": "Broncodilatador antimuscarínico de curta ação (SAMA)",
    "pharmacologicClass": "Antagonista muscarínico inalatório",
    "commercialNames": "Atrovent; genéricos.",
    "presentation": "Solução para inalação por nebulização 0,02%.",
    "presentations": "0,5 mg em 2,5 mL por frasco-dose, conforme bula consultada.",
    "mechanism": "Bloqueia competitivamente receptores muscarínicos nas vias aéreas, reduzindo broncoconstrição vagal.",
    "pharmacodynamics": "Broncodilatação predominantemente local, com pouco efeito sistêmico nas doses inaladas.",
    "pharmacokinetics": "Baixa absorção sistêmica por inalação; fração absorvida é eliminada principalmente por via renal; início em minutos e duração de algumas horas.",
    "indications": "Manutenção do broncoespasmo associado à DPOC; uso adjuvante em exacerbações agudas conforme diretriz e formulação.",
    "dose": "Adultos e >=12 anos: 0,5 mg por nebulização 3 a 4 vezes ao dia, com 6 a 8 horas entre doses; não exceder frequência rotulada sem avaliação.",
    "pediatricDose": "A bula da solução não estabelece segurança/eficácia abaixo de 12 anos. CÁLCULO PEDIÁTRICO <12 ANOS BLOQUEADO.",
    "renalDose": "Não há ajuste numérico rotulado; baixa absorção sistêmica, mas usar com cautela conforme condição clínica.",
    "hepaticDose": "Não há ajuste numérico rotulado; usar com cautela.",
    "commonAdverseEffects": "Boca seca, tosse, cefaleia, náusea.",
    "dangerousAdverseEffects": "Broncoespasmo paradoxal, anafilaxia, glaucoma agudo por contato ocular, retenção urinária.",
    "adverseEffects": "Tontura, irritação faríngea, palpitações e constipação.",
    "contraindications": "Hipersensibilidade ao ipratrópio, atropina/derivados ou componentes.",
    "interactions": "Efeito anticolinérgico aditivo com outros antimuscarínicos; cautela com fármacos que favoreçam retenção urinária/glaucoma.",
    "monitoring": "Resposta respiratória, frequência de resgate, broncoespasmo paradoxal; sintomas oculares e urinários.",
    "administration": "Nebulizar por via oral com equipamento adequado; evitar contato da névoa com os olhos.",
    "preparation": "Usar conteúdo do frasco-dose conforme dispositivo; compatibilidade de mistura deve seguir informação específica, não presumir.",
    "infusionProtocol": "Nebulização até esvaziamento do reservatório conforme equipamento; não é infusão IV.",
    "pregnancy": "Dados humanos limitados; usar se benefício justificar risco.",
    "lactation": "Não há dados adequados sobre excreção; cautela e avaliação individual.",
    "specialPopulations": "Cautela em glaucoma de ângulo estreito, hiperplasia prostática ou obstrução vesical.",
    "patientEducation": "Não engolir nem injetar; evitar olhos; procurar ajuda se piora súbita da respiração, dor ocular ou retenção urinária.",
    "clinicalPearls": "Não é fármaco de resgate único de ação rápida para crise grave; em exacerbação, integra protocolo com beta2-agonista conforme contexto.",
    "guidelineRecommendations": "GOLD utiliza broncodilatadores de curta ação em exacerbações de DPOC; GINA reserva antimuscarínico como adjuvante em asma aguda grave.",
    "safetyFlags": "Broncoespasmo paradoxal; risco ocular; retenção urinária; via inalatória exclusiva.",
    "alerts": "Solução 0,5 mg/2,5 mL; >=12 anos; evitar olhos; pediatria menor bloqueada.",
    "references": [
      "DailyMed/autoridade ou diretriz oficial - https://www.dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3249aea8-a395-f09f-e063-6294a90a2d8b",
      "DailyMed/autoridade ou diretriz oficial - https://goldcopd.org/2026-gold-report-and-pocket-guide/",
      "DailyMed/autoridade ou diretriz oficial - https://ginasthma.org/2026-gina-strategy-report/"
    ],
    "ref": "https://www.dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3249aea8-a395-f09f-e063-6294a90a2d8b"
  },
  "es": {
    "name": "Bromuro de ipratropio",
    "class": "Broncodilatador antimuscarínico de curta ação (SAMA)",
    "pharmacologicClass": "Antagonista muscarínico inalatório",
    "commercialNames": "Atrovent; genéricos.",
    "presentation": "Solução para inalação por nebulização 0,02%.",
    "presentations": "0,5 mg em 2,5 mL por frasco-dosis, según bula consultada.",
    "mechanism": "Bloqueia competitivamente receptores muscarínicos nas vías aéreas, reduzindo broncoconstrição vagal.",
    "pharmacodynamics": "Broncodilatação predominantemente sitio, con pouco efeito sistêmico nas dosis inaladas.",
    "pharmacokinetics": "Baixa absorção sistêmica por inalação; fração absorvida é eliminada principalmente por vía renal; inicio em minutos y duración de algumas horas.",
    "indications": "Manutenção do broncoespasmo associado à DPOC; uso adjuvante em exacerbações agudas según diretriz y formulación.",
    "dose": "Adultos y >=12 anos: 0,5 mg por nebulização 3 a 4 veces al día, con 6 a 8 horas entre dosis; no exceder frecuencia rotulada sin evaluación.",
    "pediatricDose": "A bula da solución no estabelece seguridad/eficacia abaixo de 12 anos. CÁLCULO PEDIÁTRICO <12 ANOS BLOQUEADO.",
    "renalDose": "No hay ajuste numérico rotulado; baixa absorção sistêmica, mas usar con precaución según condição clínica.",
    "hepaticDose": "No hay ajuste numérico rotulado; usar con precaución.",
    "commonAdverseEffects": "Boca seca, tosse, cefaleia, náusea.",
    "dangerousAdverseEffects": "Broncoespasmo paradoxal, anafilaxia, glaucoma agudo por contato ocular, retenção urinária.",
    "adverseEffects": "Tontura, irritação faríngea, palpitações y constipação.",
    "contraindications": "Hipersensibilidade ao ipratrópio, atropina/derivados ou componentes.",
    "interactions": "Efeito anticolinérgico aditivo con outros antimuscarínicos; precaución con fármacos que favoreçam retenção urinária/glaucoma.",
    "monitoring": "Resposta respiratoria, frecuencia de resgate, broncoespasmo paradoxal; sintomas oculares y urinários.",
    "administration": "Nebulizar por vía oral con equipamento adequado; evitar contato da névoa con os ojos.",
    "preparation": "Usar conteúdo do frasco-dosis según dispositivo; compatibilidade de mistura deve seguir informação específica, no presumir.",
    "infusionProtocol": "Nebulização até esvaziamento do reservatório según equipamento; no é infusão IV.",
    "pregnancy": "Dados humanos limitados; usar se benefício justificar riesgo.",
    "lactation": "No hay datos adequados sobre excreção; precaución y evaluación individual.",
    "specialPopulations": "Cautela em glaucoma de ângulo estreito, hiperplasia prostática ou obstrução vesical.",
    "patientEducation": "No tragar nem injetar; evitar ojos; buscar atención se empeoramiento súbita da respiração, dor ocular ou retenção urinária.",
    "clinicalPearls": "No é fármaco de resgate único de ação rápida para crise grave; em exacerbação, integra protocolo con beta2-agonista según contexto.",
    "guidelineRecommendations": "GOLD utiliza broncodilatadores de curta ação em exacerbações de DPOC; GINA reserva antimuscarínico como adjuvante em asma aguda grave.",
    "safetyFlags": "Broncoespasmo paradoxal; riesgo ocular; retenção urinária; vía inalatória exclusiva.",
    "alerts": "Solução 0,5 mg/2,5 mL; >=12 anos; evitar ojos; pediatría menor bloqueada.",
    "references": [
      "DailyMed/autoridade ou diretriz oficial - https://www.dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3249aea8-a395-f09f-e063-6294a90a2d8b",
      "DailyMed/autoridade ou diretriz oficial - https://goldcopd.org/2026-gold-report-and-pocket-guide/",
      "DailyMed/autoridade ou diretriz oficial - https://ginasthma.org/2026-gina-strategy-report/"
    ],
    "ref": "https://www.dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3249aea8-a395-f09f-e063-6294a90a2d8b"
  }
};})();
/* GOLD33_SELECTIVE:ipratropio:END */
/* GOLD33_SELECTIVE:levodropropizina:START */
;(function(){var db=window.PNEUMOLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="levodropropizina";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:levodropropizina:"+matches.length);drug=matches[0];}else{drug=db&&db["levodropropizina"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:levodropropizina");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "046",
    "requiredFieldCount": 33,
    "approvedSha256": "b01bced97714803d025e288b269c2a23ae3562608450a3618c1ccb6e9db46467",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "BLOQUEADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Levodropropizina",
    "class": "Antitussígeno periférico",
    "pharmacologicClass": "Antitussígeno periférico",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Solução/xarope e comprimidos variam por país.",
    "presentations": "Solução/xarope e comprimidos variam por país.",
    "mechanism": "Mecanismo específico da classe conforme fonte primária e formulação.",
    "pharmacodynamics": "Mecanismo específico da classe conforme fonte primária e formulação.",
    "pharmacokinetics": "Revisar absorção, metabolismo, meia-vida e eliminação na fonte primária.",
    "indications": "Tratamento sintomático de tosse não produtiva onde aprovada.",
    "dose": "Adultos: 60 mg VO até três vezes/dia, com intervalo mínimo de 6 h, por curto período; confirmar bula local.",
    "pediatricDose": "Requer tabela completa por idade/peso; automação pediátrica bloqueada.",
    "renalDose": "Avaliar função renal e tabela específica; não inferir ajuste.",
    "hepaticDose": "Avaliar hepatopatia; não inferir ajuste.",
    "commonAdverseEffects": "Sonolência, tontura, náusea e palpitações.",
    "dangerousAdverseEffects": "Hipersensibilidade, broncoespasmo e hipotensão raros.",
    "adverseEffects": "Sonolência, tontura, náusea e palpitações.; Hipersensibilidade, broncoespasmo e hipotensão raros.",
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
    "safetyFlags": "Hipersensibilidade, broncoespasmo e hipotensão raros.",
    "alerts": "Hipersensibilidade, broncoespasmo e hipotensão raros.; monitorização obrigatória",
    "references": [
      "Fonte primária/oficial - https://pubmed.ncbi.nlm.nih.gov/?term=levodropropizine"
    ],
    "ref": "https://pubmed.ncbi.nlm.nih.gov/?term=levodropropizine"
  },
  "es": {
    "name": "Levodropropizina",
    "class": "Antitussígeno periférico",
    "pharmacologicClass": "Antitussígeno periférico",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Solução/xarope y comprimidos variam por país.",
    "presentations": "Solução/xarope y comprimidos variam por país.",
    "mechanism": "Mecanismo específico da classe conforme fonte primária y formulação.",
    "pharmacodynamics": "Mecanismo específico da classe conforme fonte primária y formulação.",
    "pharmacokinetics": "Revisar absorção, metabolismo, meia-vida y eliminação na fonte primária.",
    "indications": "Tratamento sintomático de tosse no produtiva onde aprovada.",
    "dose": "Adultos: 60 mg VO até três vezes/dia, con intervalo mínimo de 6 h, por curto período; confirmar bula local.",
    "pediatricDose": "Requer tabela completa por idade/peso; automação pediátrica bloqueada.",
    "renalDose": "Avaliar función renal y tabela específica; no inferir ajuste.",
    "hepaticDose": "Avaliar hepatopatia; no inferir ajuste.",
    "commonAdverseEffects": "Sonolência, tontura, náusea y palpitações.",
    "dangerousAdverseEffects": "Hipersensibilidade, broncoespasmo y hipotensão raros.",
    "adverseEffects": "Sonolência, tontura, náusea y palpitações.; Hipersensibilidade, broncoespasmo y hipotensão raros.",
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
    "safetyFlags": "Hipersensibilidade, broncoespasmo y hipotensão raros.",
    "alerts": "Hipersensibilidade, broncoespasmo y hipotensão raros.; monitorização obrigatória",
    "references": [
      "Fonte primária/oficial - https://pubmed.ncbi.nlm.nih.gov/?term=levodropropizine"
    ],
    "ref": "https://pubmed.ncbi.nlm.nih.gov/?term=levodropropizine"
  }
};})();
/* GOLD33_SELECTIVE:levodropropizina:END */
/* GOLD33_SELECTIVE:loratadina:START */
;(function(){var db=window.PNEUMOLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="loratadina";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:loratadina:"+matches.length);drug=matches[0];}else{drug=db&&db["loratadina"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:loratadina");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "047",
    "requiredFieldCount": 33,
    "approvedSha256": "465e927ea8677a0af62a52f24a5c1389bb2f9094f9224f1b32c175740f74b49d",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "BLOQUEADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Loratadina",
    "class": "Anti-histamínico H1 de segunda geração",
    "pharmacologicClass": "Anti-histamínico H1 de segunda geração",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimido 10 mg; solução/xarope 1 mg/mL; comprimido dispersível conforme mercado.",
    "presentations": "Comprimido 10 mg; solução/xarope 1 mg/mL; comprimido dispersível conforme mercado.",
    "mechanism": "Mecanismo específico da classe conforme fonte primária e formulação.",
    "pharmacodynamics": "Mecanismo específico da classe conforme fonte primária e formulação.",
    "pharmacokinetics": "Revisar absorção, metabolismo, meia-vida e eliminação na fonte primária.",
    "indications": "Rinite alérgica e urticária crônica idiopática.",
    "dose": "Adultos e >=6 anos: 10 mg VO uma vez/dia. Crianças 2-5 anos: 5 mg VO uma vez/dia. Ajustar intervalo em doença hepática ou renal grave conforme bula.",
    "pediatricDose": "Requer tabela completa por idade/peso; automação pediátrica bloqueada.",
    "renalDose": "Avaliar função renal e tabela específica; não inferir ajuste.",
    "hepaticDose": "Avaliar hepatopatia; não inferir ajuste.",
    "commonAdverseEffects": "Cefaleia, sonolência, fadiga e boca seca.",
    "dangerousAdverseEffects": "Anafilaxia/hipersensibilidade rara, palpitação e taquicardia raras.",
    "adverseEffects": "Cefaleia, sonolência, fadiga e boca seca.; Anafilaxia/hipersensibilidade rara, palpitação e taquicardia raras.",
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
    "safetyFlags": "Anafilaxia/hipersensibilidade rara, palpitação e taquicardia raras.",
    "alerts": "Anafilaxia/hipersensibilidade rara, palpitação e taquicardia raras.; monitorização obrigatória",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=loratadine",
      "Fonte primária/oficial - https://www.accessdata.fda.gov/drugsatfda_docs/label/2000/20641s7lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=loratadine"
  },
  "es": {
    "name": "Loratadina",
    "class": "Anti-histamínico H1 de segunda geração",
    "pharmacologicClass": "Anti-histamínico H1 de segunda geração",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimido 10 mg; solución/xarope 1 mg/mL; comprimido dispersível conforme mercado.",
    "presentations": "Comprimido 10 mg; solución/xarope 1 mg/mL; comprimido dispersível conforme mercado.",
    "mechanism": "Mecanismo específico da classe conforme fonte primária y formulação.",
    "pharmacodynamics": "Mecanismo específico da classe conforme fonte primária y formulação.",
    "pharmacokinetics": "Revisar absorção, metabolismo, meia-vida y eliminação na fonte primária.",
    "indications": "Rinite alérgica y urticária crônica idiopática.",
    "dose": "Adultos y >=6 anos: 10 mg VO uma vez/dia. Crianças 2-5 anos: 5 mg VO uma vez/dia. Ajustar intervalo em doença hepática ou renal grave conforme bula.",
    "pediatricDose": "Requer tabela completa por idade/peso; automação pediátrica bloqueada.",
    "renalDose": "Avaliar función renal y tabela específica; no inferir ajuste.",
    "hepaticDose": "Avaliar hepatopatia; no inferir ajuste.",
    "commonAdverseEffects": "Cefaleia, sonolência, fadiga y boca seca.",
    "dangerousAdverseEffects": "Anafilaxia/hipersensibilidade rara, palpitação y taquicardia raras.",
    "adverseEffects": "Cefaleia, sonolência, fadiga y boca seca.; Anafilaxia/hipersensibilidade rara, palpitação y taquicardia raras.",
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
    "safetyFlags": "Anafilaxia/hipersensibilidade rara, palpitação y taquicardia raras.",
    "alerts": "Anafilaxia/hipersensibilidade rara, palpitação y taquicardia raras.; monitorização obrigatória",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=loratadine",
      "Fonte primária/oficial - https://www.accessdata.fda.gov/drugsatfda_docs/label/2000/20641s7lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=loratadine"
  }
};})();
/* GOLD33_SELECTIVE:loratadina:END */
/* GOLD33_SELECTIVE:mepolizumabe:START */
;(function(){var db=window.PNEUMOLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="mepolizumabe";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:mepolizumabe:"+matches.length);drug=matches[0];}else{drug=db&&db["mepolizumabe"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:mepolizumabe");}drug.mcGoldClinicalV1={
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
    "name": "Mepolizumabe",
    "class": "Anticorpo monoclonal anti-IL-5",
    "pharmacologicClass": "Anticorpo monoclonal anti-IL-5",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Frasco 100 mg para reconstituição; seringas/autoinjetores 40 ou 100 mg conforme mercado.",
    "presentations": "Frasco 100 mg para reconstituição; seringas/autoinjetores 40 ou 100 mg conforme mercado.",
    "mechanism": "Mecanismo específico da classe conforme fonte primária e formulação.",
    "pharmacodynamics": "Mecanismo específico da classe conforme fonte primária e formulação.",
    "pharmacokinetics": "Revisar absorção, metabolismo, meia-vida e eliminação na fonte primária.",
    "indications": "Asma eosinofílica grave, granulomatose eosinofílica com poliangiite, síndrome hipereosinofílica e rinossinusite crônica com pólipos conforme idade/rótulo.",
    "dose": "Asma >=12 anos: 100 mg SC a cada 4 semanas; 6-11 anos: 40 mg SC a cada 4 semanas. EGPA/HES: 300 mg SC a cada 4 semanas. Não usar para broncoespasmo agudo.",
    "pediatricDose": "Requer tabela completa por idade/peso; automação pediátrica bloqueada.",
    "renalDose": "Avaliar função renal e tabela específica; não inferir ajuste.",
    "hepaticDose": "Avaliar hepatopatia; não inferir ajuste.",
    "commonAdverseEffects": "Cefaleia, reação no local, dor nas costas e fadiga.",
    "dangerousAdverseEffects": "Hipersensibilidade/anafilaxia, herpes-zóster e possível piora de helmintíase.",
    "adverseEffects": "Cefaleia, reação no local, dor nas costas e fadiga.; Hipersensibilidade/anafilaxia, herpes-zóster e possível piora de helmintíase.",
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
    "safetyFlags": "Hipersensibilidade/anafilaxia, herpes-zóster e possível piora de helmintíase.",
    "alerts": "Hipersensibilidade/anafilaxia, herpes-zóster e possível piora de helmintíase.; monitorização obrigatória",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=mepolizumab",
      "Fonte primária/oficial - https://www.accessdata.fda.gov/drugsatfda_docs/label/2022/125526s024lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=mepolizumab"
  },
  "es": {
    "name": "Mepolizumabe",
    "class": "Anticorpo monoclonal anti-IL-5",
    "pharmacologicClass": "Anticorpo monoclonal anti-IL-5",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Frasco 100 mg para reconstituição; seringas/autoinjetores 40 ou 100 mg conforme mercado.",
    "presentations": "Frasco 100 mg para reconstituição; seringas/autoinjetores 40 ou 100 mg conforme mercado.",
    "mechanism": "Mecanismo específico da classe conforme fonte primária y formulação.",
    "pharmacodynamics": "Mecanismo específico da classe conforme fonte primária y formulação.",
    "pharmacokinetics": "Revisar absorção, metabolismo, meia-vida y eliminação na fonte primária.",
    "indications": "Asma eosinofílica grave, granulomatose eosinofílica con poliangiite, síndrome hipereosinofílica y rinossinusite crônica con pólipos conforme idade/rótulo.",
    "dose": "Asma >=12 anos: 100 mg SC a cada 4 semanas; 6-11 anos: 40 mg SC a cada 4 semanas. EGPA/HES: 300 mg SC a cada 4 semanas. No usar para broncoespasmo agudo.",
    "pediatricDose": "Requer tabela completa por idade/peso; automação pediátrica bloqueada.",
    "renalDose": "Avaliar función renal y tabela específica; no inferir ajuste.",
    "hepaticDose": "Avaliar hepatopatia; no inferir ajuste.",
    "commonAdverseEffects": "Cefaleia, reação no local, dor nas costas y fadiga.",
    "dangerousAdverseEffects": "Hipersensibilidade/anafilaxia, herpes-zóster y possível piora de helmintíase.",
    "adverseEffects": "Cefaleia, reação no local, dor nas costas y fadiga.; Hipersensibilidade/anafilaxia, herpes-zóster y possível piora de helmintíase.",
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
    "safetyFlags": "Hipersensibilidade/anafilaxia, herpes-zóster y possível piora de helmintíase.",
    "alerts": "Hipersensibilidade/anafilaxia, herpes-zóster y possível piora de helmintíase.; monitorização obrigatória",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=mepolizumab",
      "Fonte primária/oficial - https://www.accessdata.fda.gov/drugsatfda_docs/label/2022/125526s024lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=mepolizumab"
  }
};})();
/* GOLD33_SELECTIVE:mepolizumabe:END */
/* GOLD33_SELECTIVE:mometasona:START */
;(function(){var db=window.PNEUMOLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="mometasona";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:mometasona:"+matches.length);drug=matches[0];}else{drug=db&&db["mometasona"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:mometasona");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "053",
    "requiredFieldCount": 33,
    "approvedSha256": "74d1644dae5d55433a28e669a25bb51f5d95ca84d2e052ad6d5a8de9ed17f751",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "BLOQUEADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Furoato de mometasona",
    "class": "Corticosteroide tópico, intranasal ou inalatório",
    "pharmacologicClass": "Corticosteroide tópico, intranasal ou inalatório",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Spray nasal 50 microgramas/jato; inaladores e formulações cutâneas em diferentes concentrações.",
    "presentations": "Spray nasal 50 microgramas/jato; inaladores e formulações cutâneas em diferentes concentrações.",
    "mechanism": "Mecanismo específico da classe conforme fonte primária e formulação.",
    "pharmacodynamics": "Mecanismo específico da classe conforme fonte primária e formulação.",
    "pharmacokinetics": "Revisar absorção, metabolismo, meia-vida e eliminação na fonte primária.",
    "indications": "Rinite, pólipos nasais, asma e dermatoses responsivas, conforme formulação específica.",
    "dose": "A dose depende totalmente da via. Spray nasal 50 microgramas/jato: adultos com rinite usam geralmente 2 jatos em cada narina uma vez/dia. Inaladores e formulações cutâneas têm doses próprias; automação global bloqueada.",
    "pediatricDose": "Requer tabela completa por idade/peso; automação pediátrica bloqueada.",
    "renalDose": "Avaliar função renal e tabela específica; não inferir ajuste.",
    "hepaticDose": "Avaliar hepatopatia; não inferir ajuste.",
    "commonAdverseEffects": "Epistaxe, irritação nasal, cefaleia, candidíase oral ou reação cutânea local, conforme via.",
    "dangerousAdverseEffects": "Supressão adrenal, glaucoma/catarata, broncoespasmo paradoxal, perfuração septal e infecção.",
    "adverseEffects": "Epistaxe, irritação nasal, cefaleia, candidíase oral ou reação cutânea local, conforme via.; Supressão adrenal, glaucoma/catarata, broncoespasmo paradoxal, perfuração septal e infecção.",
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
    "safetyFlags": "Supressão adrenal, glaucoma/catarata, broncoespasmo paradoxal, perfuração septal e infecção.",
    "alerts": "Supressão adrenal, glaucoma/catarata, broncoespasmo paradoxal, perfuração septal e infecção.; monitorização obrigatória",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=mometasone",
      "Fonte primária/oficial - https://www.accessdata.fda.gov/drugsatfda_docs/label/2013/020762s048lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=mometasone"
  },
  "es": {
    "name": "Furoato de mometasona",
    "class": "Corticosteroide tópico, intranasal ou inalatório",
    "pharmacologicClass": "Corticosteroide tópico, intranasal ou inalatório",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Spray nasal 50 microgramas/jato; inaladores y formulações cutâneas em diferentes concentrações.",
    "presentations": "Spray nasal 50 microgramas/jato; inaladores y formulações cutâneas em diferentes concentrações.",
    "mechanism": "Mecanismo específico da classe conforme fonte primária y formulação.",
    "pharmacodynamics": "Mecanismo específico da classe conforme fonte primária y formulação.",
    "pharmacokinetics": "Revisar absorção, metabolismo, meia-vida y eliminação na fonte primária.",
    "indications": "Rinite, pólipos nasais, asma y dermatoses responsivas, conforme formulação específica.",
    "dose": "A dosis depende totalmente da via. Spray nasal 50 microgramas/jato: adultos con rinite usam geralmente 2 jatos em cada narina uma vez/dia. Inaladores y formulações cutâneas têm dosiss próprias; automação global bloqueada.",
    "pediatricDose": "Requer tabela completa por idade/peso; automação pediátrica bloqueada.",
    "renalDose": "Avaliar función renal y tabela específica; no inferir ajuste.",
    "hepaticDose": "Avaliar hepatopatia; no inferir ajuste.",
    "commonAdverseEffects": "Epistaxe, irritação nasal, cefaleia, candidíase oral ou reação cutânea local, conforme via.",
    "dangerousAdverseEffects": "Supressão adrenal, glaucoma/catarata, broncoespasmo paradoxal, perfuração septal y infecção.",
    "adverseEffects": "Epistaxe, irritação nasal, cefaleia, candidíase oral ou reação cutânea local, conforme via.; Supressão adrenal, glaucoma/catarata, broncoespasmo paradoxal, perfuração septal y infecção.",
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
    "safetyFlags": "Supressão adrenal, glaucoma/catarata, broncoespasmo paradoxal, perfuração septal y infecção.",
    "alerts": "Supressão adrenal, glaucoma/catarata, broncoespasmo paradoxal, perfuração septal y infecção.; monitorização obrigatória",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=mometasone",
      "Fonte primária/oficial - https://www.accessdata.fda.gov/drugsatfda_docs/label/2013/020762s048lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=mometasone"
  }
};})();
/* GOLD33_SELECTIVE:mometasona:END */
/* GOLD33_SELECTIVE:montelucaste:START */
;(function(){var db=window.PNEUMOLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="montelucaste";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:montelucaste:"+matches.length);drug=matches[0];}else{drug=db&&db["montelucaste"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:montelucaste");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "053",
    "requiredFieldCount": 33,
    "approvedSha256": "74d1644dae5d55433a28e669a25bb51f5d95ca84d2e052ad6d5a8de9ed17f751",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "BLOQUEADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Montelucaste",
    "class": "Antagonista do receptor de leucotrieno CysLT1",
    "pharmacologicClass": "Antagonista do receptor de leucotrieno CysLT1",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimido 10 mg; mastigáveis 4 e 5 mg; grânulos 4 mg.",
    "presentations": "Comprimido 10 mg; mastigáveis 4 e 5 mg; grânulos 4 mg.",
    "mechanism": "Mecanismo específico da classe conforme fonte primária e formulação.",
    "pharmacodynamics": "Mecanismo específico da classe conforme fonte primária e formulação.",
    "pharmacokinetics": "Revisar absorção, metabolismo, meia-vida e eliminação na fonte primária.",
    "indications": "Profilaxia e tratamento crônico da asma, prevenção de broncoconstrição por exercício e rinite alérgica em situações selecionadas.",
    "dose": "Asma: >=15 anos 10 mg VO à noite; 6-14 anos 5 mg; 2-5 anos 4 mg. Idade, indicação e formulação definem o regime. Não tratar broncoespasmo agudo.",
    "pediatricDose": "Requer tabela completa por idade/peso; automação pediátrica bloqueada.",
    "renalDose": "Avaliar função renal e tabela específica; não inferir ajuste.",
    "hepaticDose": "Avaliar hepatopatia; não inferir ajuste.",
    "commonAdverseEffects": "Cefaleia, dor abdominal, infecção respiratória e febre.",
    "dangerousAdverseEffects": "Eventos neuropsiquiátricos graves, anafilaxia, eosinofilia sistêmica e hepatotoxicidade rara.",
    "adverseEffects": "Cefaleia, dor abdominal, infecção respiratória e febre.; Eventos neuropsiquiátricos graves, anafilaxia, eosinofilia sistêmica e hepatotoxicidade rara.",
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
    "safetyFlags": "Eventos neuropsiquiátricos graves, anafilaxia, eosinofilia sistêmica e hepatotoxicidade rara.",
    "alerts": "Eventos neuropsiquiátricos graves, anafilaxia, eosinofilia sistêmica e hepatotoxicidade rara.; monitorização obrigatória",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=montelukast",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-safety-and-availability/fda-requires-boxed-warning-about-serious-mental-health-side-effects-asthma-and-allergy-drug"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=montelukast"
  },
  "es": {
    "name": "Montelucaste",
    "class": "Antagonista do receptor de leucotrieno CysLT1",
    "pharmacologicClass": "Antagonista do receptor de leucotrieno CysLT1",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimido 10 mg; mastigáveis 4 y 5 mg; grânulos 4 mg.",
    "presentations": "Comprimido 10 mg; mastigáveis 4 y 5 mg; grânulos 4 mg.",
    "mechanism": "Mecanismo específico da classe conforme fonte primária y formulação.",
    "pharmacodynamics": "Mecanismo específico da classe conforme fonte primária y formulação.",
    "pharmacokinetics": "Revisar absorção, metabolismo, meia-vida y eliminação na fonte primária.",
    "indications": "Profilaxia y tratamento crônico da asma, prevenção de broncoconstrição por exercício y rinite alérgica em situações selecionadas.",
    "dose": "Asma: >=15 anos 10 mg VO à noite; 6-14 anos 5 mg; 2-5 anos 4 mg. Idade, indicação y formulação definem o regime. No tratar broncoespasmo agudo.",
    "pediatricDose": "Requer tabela completa por idade/peso; automação pediátrica bloqueada.",
    "renalDose": "Avaliar función renal y tabela específica; no inferir ajuste.",
    "hepaticDose": "Avaliar hepatopatia; no inferir ajuste.",
    "commonAdverseEffects": "Cefaleia, dor abdominal, infecção respiratória y febre.",
    "dangerousAdverseEffects": "Eventos neuropsiquiátricos graves, anafilaxia, eosinofilia sistêmica y hepatotoxicidade rara.",
    "adverseEffects": "Cefaleia, dor abdominal, infecção respiratória y febre.; Eventos neuropsiquiátricos graves, anafilaxia, eosinofilia sistêmica y hepatotoxicidade rara.",
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
    "safetyFlags": "Eventos neuropsiquiátricos graves, anafilaxia, eosinofilia sistêmica y hepatotoxicidade rara.",
    "alerts": "Eventos neuropsiquiátricos graves, anafilaxia, eosinofilia sistêmica y hepatotoxicidade rara.; monitorização obrigatória",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=montelukast",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-safety-and-availability/fda-requires-boxed-warning-about-serious-mental-health-side-effects-asthma-and-allergy-drug"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=montelukast"
  }
};})();
/* GOLD33_SELECTIVE:montelucaste:END */
/* GOLD33_SELECTIVE:nintedanibe:START */
;(function(){var db=window.PNEUMOLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="nintedanibe";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:nintedanibe:"+matches.length);drug=matches[0];}else{drug=db&&db["nintedanibe"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:nintedanibe");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "055",
    "requiredFieldCount": 33,
    "approvedSha256": "66de27fa500997712b3fa75feb4f7118d6d192d9a26ed1116f35481851314f46",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "BLOQUEADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Nintedanibe",
    "class": "Inibidor de tirosina-quinase antifibrótico",
    "pharmacologicClass": "Inibidor de tirosina-quinase antifibrótico",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Cápsulas 100 e 150 mg.",
    "presentations": "Cápsulas 100 e 150 mg.",
    "mechanism": "Mecanismo específico da classe conforme fonte primária e formulação.",
    "pharmacodynamics": "Mecanismo específico da classe conforme fonte primária e formulação.",
    "pharmacokinetics": "Revisar absorção, metabolismo, meia-vida e eliminação na fonte primária.",
    "indications": "Fibrose pulmonar idiopática, doença intersticial associada à esclerose sistêmica e outras ILD fibrosantes progressivas conforme rótulo.",
    "dose": "150 mg VO duas vezes/dia, aproximadamente a cada 12 horas, com alimentos. Redução para 100 mg duas vezes/dia ou interrupção pode ser necessária por eventos adversos.",
    "pediatricDose": "Requer tabela completa por idade/peso; automação pediátrica bloqueada.",
    "renalDose": "Avaliar função renal e tabela específica; não inferir ajuste.",
    "hepaticDose": "Avaliar hepatopatia; não inferir ajuste.",
    "commonAdverseEffects": "Diarreia, náusea, dor abdominal, vômito, redução do apetite e elevação de enzimas hepáticas.",
    "dangerousAdverseEffects": "Hepatotoxicidade, sangramento, perfuração GI, tromboembolismo arterial e lesão renal/proteinúria.",
    "adverseEffects": "Diarreia, náusea, dor abdominal, vômito, redução do apetite e elevação de enzimas hepáticas.; Hepatotoxicidade, sangramento, perfuração GI, tromboembolismo arterial e lesão renal/proteinúria.",
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
    "safetyFlags": "Hepatotoxicidade, sangramento, perfuração GI, tromboembolismo arterial e lesão renal/proteinúria.",
    "alerts": "Hepatotoxicidade, sangramento, perfuração GI, tromboembolismo arterial e lesão renal/proteinúria.; monitorização obrigatória",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=nintedanib",
      "Fonte primária/oficial - https://www.accessdata.fda.gov/drugsatfda_docs/label/2022/205832s016lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=nintedanib"
  },
  "es": {
    "name": "Nintedanibe",
    "class": "Inibidor de tirosina-quinase antifibrótico",
    "pharmacologicClass": "Inibidor de tirosina-quinase antifibrótico",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Cápsulas 100 y 150 mg.",
    "presentations": "Cápsulas 100 y 150 mg.",
    "mechanism": "Mecanismo específico da classe conforme fonte primária y formulação.",
    "pharmacodynamics": "Mecanismo específico da classe conforme fonte primária y formulação.",
    "pharmacokinetics": "Revisar absorção, metabolismo, meia-vida y eliminação na fonte primária.",
    "indications": "Fibrose pulmonar idiopática, doença intersticial associada à esclerose sistêmica y outras ILD fibrosantes progressivas conforme rótulo.",
    "dose": "150 mg VO duas vezes/dia, aproximadamente a cada 12 horas, con alimentos. Redução para 100 mg duas vezes/dia ou interrupção pode ser necessária por eventos adversos.",
    "pediatricDose": "Requer tabela completa por idade/peso; automação pediátrica bloqueada.",
    "renalDose": "Avaliar función renal y tabela específica; no inferir ajuste.",
    "hepaticDose": "Avaliar hepatopatia; no inferir ajuste.",
    "commonAdverseEffects": "Diarreia, náusea, dor abdominal, vômito, redução do apetite y elevação de enzimas hepáticas.",
    "dangerousAdverseEffects": "Hepatotoxicidade, sangramento, perfuração GI, tromboembolismo arterial y lesão renal/proteinúria.",
    "adverseEffects": "Diarreia, náusea, dor abdominal, vômito, redução do apetite y elevação de enzimas hepáticas.; Hepatotoxicidade, sangramento, perfuração GI, tromboembolismo arterial y lesão renal/proteinúria.",
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
    "safetyFlags": "Hepatotoxicidade, sangramento, perfuração GI, tromboembolismo arterial y lesão renal/proteinúria.",
    "alerts": "Hepatotoxicidade, sangramento, perfuração GI, tromboembolismo arterial y lesão renal/proteinúria.; monitorização obrigatória",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=nintedanib",
      "Fonte primária/oficial - https://www.accessdata.fda.gov/drugsatfda_docs/label/2022/205832s016lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=nintedanib"
  }
};})();
/* GOLD33_SELECTIVE:nintedanibe:END */
/* GOLD33_SELECTIVE:olodaterol:START */
;(function(){var db=window.PNEUMOLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="olodaterol";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:olodaterol:"+matches.length);drug=matches[0];}else{drug=db&&db["olodaterol"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:olodaterol");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "057",
    "requiredFieldCount": 33,
    "approvedSha256": "10e4153c730685e713321ea7b52895190ead372a4456ac2d3d58ef2b2e090bf2",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "BLOQUEADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Olodaterol",
    "class": "Agonista beta2 de longa ação inalatório",
    "pharmacologicClass": "Agonista beta2 de longa ação inalatório",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Solução para inalador de névoa suave; dose depende do dispositivo.",
    "presentations": "Solução para inalador de névoa suave; dose depende do dispositivo.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância e exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo e eliminação na fonte primária.",
    "indications": "Tratamento broncodilatador de manutenção da DPOC; não indicado como resgate nem monoterapia para asma.",
    "dose": "Duas inalações uma vez/dia do dispositivo especificado, totalizando 5 microgramas/dia. Não exceder nem usar para broncoespasmo agudo.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "Não inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "Não inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Nasofaringite, tontura, rash e artralgia.",
    "dangerousAdverseEffects": "Broncoespasmo paradoxal, taquiarritmia, hipocalemia e hiperglicemia.",
    "adverseEffects": "Nasofaringite, tontura, rash e artralgia.; Broncoespasmo paradoxal, taquiarritmia, hipocalemia e hiperglicemia.",
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
    "safetyFlags": "Broncoespasmo paradoxal, taquiarritmia, hipocalemia e hiperglicemia.",
    "alerts": "Broncoespasmo paradoxal, taquiarritmia, hipocalemia e hiperglicemia.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=olodaterol",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=olodaterol"
  },
  "es": {
    "name": "Olodaterol",
    "class": "Agonista beta2 de longa ação inalatório",
    "pharmacologicClass": "Agonista beta2 de longa ação inalatório",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Solução para inalador de névoa suave; dosis depende do dispositivo.",
    "presentations": "Solução para inalador de névoa suave; dosis depende do dispositivo.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância y exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo y eliminação na fonte primária.",
    "indications": "Tratamento broncodilatador de manutenção da DPOC; no indicado como resgate nem monoterapia para asma.",
    "dose": "Duas inalações uma vez/dia do dispositivo especificado, totalizando 5 microgramas/dia. No exceder nem usar para broncoespasmo agudo.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "No inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "No inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Nasofaringite, tontura, rash y artralgia.",
    "dangerousAdverseEffects": "Broncoespasmo paradoxal, taquiarritmia, hipocalemia y hiperglicemia.",
    "adverseEffects": "Nasofaringite, tontura, rash y artralgia.; Broncoespasmo paradoxal, taquiarritmia, hipocalemia y hiperglicemia.",
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
    "safetyFlags": "Broncoespasmo paradoxal, taquiarritmia, hipocalemia y hiperglicemia.",
    "alerts": "Broncoespasmo paradoxal, taquiarritmia, hipocalemia y hiperglicemia.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=olodaterol",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=olodaterol"
  }
};})();
/* GOLD33_SELECTIVE:olodaterol:END */
/* GOLD33_SELECTIVE:omalizumabe:START */
;(function(){var db=window.PNEUMOLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="omalizumabe";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:omalizumabe:"+matches.length);drug=matches[0];}else{drug=db&&db["omalizumabe"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:omalizumabe");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "057",
    "requiredFieldCount": 33,
    "approvedSha256": "10e4153c730685e713321ea7b52895190ead372a4456ac2d3d58ef2b2e090bf2",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "BLOQUEADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Omalizumabe",
    "class": "Anticorpo monoclonal anti-IgE",
    "pharmacologicClass": "Anticorpo monoclonal anti-IgE",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Frasco liofilizado e seringas/canetas preenchidas em múltiplas forças.",
    "presentations": "Frasco liofilizado e seringas/canetas preenchidas em múltiplas forças.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância e exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo e eliminação na fonte primária.",
    "indications": "Asma alérgica, urticária crônica espontânea, pólipos nasais e redução de reações por exposição acidental a alimentos conforme idade/rótulo.",
    "dose": "Dose SC e intervalo dependem da indicação; em asma/pólipos/alergia alimentar usam peso e IgE basal. Não calcular sem tabela oficial. Urticária usa regime próprio.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "Não inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "Não inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Reação no local, cefaleia, artralgia e infecção respiratória.",
    "dangerousAdverseEffects": "Anafilaxia, doença do soro, eosinofilia/vasculite e eventos cardiovasculares potencialmente associados.",
    "adverseEffects": "Reação no local, cefaleia, artralgia e infecção respiratória.; Anafilaxia, doença do soro, eosinofilia/vasculite e eventos cardiovasculares potencialmente associados.",
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
    "safetyFlags": "Anafilaxia, doença do soro, eosinofilia/vasculite e eventos cardiovasculares potencialmente associados.",
    "alerts": "Anafilaxia, doença do soro, eosinofilia/vasculite e eventos cardiovasculares potencialmente associados.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=omalizumabe",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=omalizumabe"
  },
  "es": {
    "name": "Omalizumabe",
    "class": "Anticorpo monoclonal anti-IgE",
    "pharmacologicClass": "Anticorpo monoclonal anti-IgE",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Frasco liofilizado y seringas/canetas preenchidas em múltiplas forças.",
    "presentations": "Frasco liofilizado y seringas/canetas preenchidas em múltiplas forças.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância y exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo y eliminação na fonte primária.",
    "indications": "Asma alérgica, urticária crônica espontânea, pólipos nasais y redução de reações por exposição acidental a alimentos conforme idade/rótulo.",
    "dose": "Dose SC y intervalo dependem da indicação; em asma/pólipos/alergia alimentar usam peso y IgE basal. No calcular sem tabela oficial. Urticária usa regime próprio.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "No inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "No inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Reação no local, cefaleia, artralgia y infecção respiratória.",
    "dangerousAdverseEffects": "Anafilaxia, doença do soro, eosinofilia/vasculite y eventos cardiovasculares potencialmente associados.",
    "adverseEffects": "Reação no local, cefaleia, artralgia y infecção respiratória.; Anafilaxia, doença do soro, eosinofilia/vasculite y eventos cardiovasculares potencialmente associados.",
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
    "safetyFlags": "Anafilaxia, doença do soro, eosinofilia/vasculite y eventos cardiovasculares potencialmente associados.",
    "alerts": "Anafilaxia, doença do soro, eosinofilia/vasculite y eventos cardiovasculares potencialmente associados.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=omalizumabe",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=omalizumabe"
  }
};})();
/* GOLD33_SELECTIVE:omalizumabe:END */
/* GOLD33_SELECTIVE:pirfenidona:START */
;(function(){var db=window.PNEUMOLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="pirfenidona";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:pirfenidona:"+matches.length);drug=matches[0];}else{drug=db&&db["pirfenidona"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:pirfenidona");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "062",
    "requiredFieldCount": 33,
    "approvedSha256": "370ce1bd176a8195540294ce684462cfa5ab46161e640a53e008c75ab3b56496",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "LIBERADA_COM_RESTRICOES_GRANULARES",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Pirfenidona",
    "class": "Antifibrótico",
    "pharmacologicClass": "Antifibrótico",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Cápsulas/comprimidos em forças específicas; regime depende da apresentação.",
    "presentations": "Cápsulas/comprimidos em forças específicas; regime depende da apresentação.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância e exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo e eliminação na fonte primária.",
    "indications": "Tratamento da fibrose pulmonar idiopática em adultos.",
    "dose": "Titulação gradual por 14 dias até manutenção conforme formulação; tomar com alimentos. Ajustar/interromper por hepatotoxicidade, fotossensibilidade ou interações.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "Não inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "Não inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Náusea, rash, dor abdominal, dispepsia e fadiga.",
    "dangerousAdverseEffects": "Hepatotoxicidade, fotossensibilidade grave, angioedema e reações cutâneas importantes.",
    "adverseEffects": "Náusea, rash, dor abdominal, dispepsia e fadiga.; Hepatotoxicidade, fotossensibilidade grave, angioedema e reações cutâneas importantes.",
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
    "safetyFlags": "Hepatotoxicidade, fotossensibilidade grave, angioedema e reações cutâneas importantes.",
    "alerts": "Hepatotoxicidade, fotossensibilidade grave, angioedema e reações cutâneas importantes.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=pirfenidona",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=pirfenidona"
  },
  "es": {
    "name": "Pirfenidona",
    "class": "Antifibrótico",
    "pharmacologicClass": "Antifibrótico",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Cápsulas/comprimidos em forças específicas; regime depende da apresentação.",
    "presentations": "Cápsulas/comprimidos em forças específicas; regime depende da apresentação.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância y exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo y eliminação na fonte primária.",
    "indications": "Tratamento da fibrose pulmonar idiopática em adultos.",
    "dose": "Titulação gradual por 14 dias até manutenção conforme formulação; tomar con alimentos. Ajustar/interromper por hepatotoxicidade, fotossensibilidade ou interações.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "No inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "No inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Náusea, rash, dor abdominal, dispepsia y fadiga.",
    "dangerousAdverseEffects": "Hepatotoxicidade, fotossensibilidade grave, angioedema y reações cutâneas importantes.",
    "adverseEffects": "Náusea, rash, dor abdominal, dispepsia y fadiga.; Hepatotoxicidade, fotossensibilidade grave, angioedema y reações cutâneas importantes.",
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
    "safetyFlags": "Hepatotoxicidade, fotossensibilidade grave, angioedema y reações cutâneas importantes.",
    "alerts": "Hepatotoxicidade, fotossensibilidade grave, angioedema y reações cutâneas importantes.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=pirfenidona",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=pirfenidona"
  }
};})();
/* GOLD33_SELECTIVE:pirfenidona:END */
/* GOLD33_SELECTIVE:reslizumabe:START */
;(function(){var db=window.PNEUMOLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="reslizumabe";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:reslizumabe:"+matches.length);drug=matches[0];}else{drug=db&&db["reslizumabe"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:reslizumabe");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "067",
    "requiredFieldCount": 33,
    "approvedSha256": "9b7d995499d2a9e7cc44d2816aa8ae5da5adb9fafece229fed33fb923698faaa",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "LIBERADA_COM_RESTRICOES_GRANULARES",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Reslizumabe",
    "class": "Anticorpo monoclonal anti-IL-5",
    "pharmacologicClass": "Anticorpo monoclonal anti-IL-5",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Concentrado para infusão IV em frasco de uso único.",
    "presentations": "Concentrado para infusão IV em frasco de uso único.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância e exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo e eliminação na fonte primária.",
    "indications": "Tratamento adjuvante da asma eosinofílica grave em adultos conforme critérios do rótulo.",
    "dose": "Dose IV baseada em peso real e administrada por infusão em ambiente preparado para anafilaxia. Não administrar em bolus nem para exacerbação aguda.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "Não inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "Não inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Dor orofaríngea e elevação de CPK.",
    "dangerousAdverseEffects": "Anafilaxia, malignidade potencialmente associada e reação à infusão.",
    "adverseEffects": "Dor orofaríngea e elevação de CPK.; Anafilaxia, malignidade potencialmente associada e reação à infusão.",
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
    "safetyFlags": "Anafilaxia, malignidade potencialmente associada e reação à infusão.",
    "alerts": "Anafilaxia, malignidade potencialmente associada e reação à infusão.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=reslizumabe",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=reslizumabe"
  },
  "es": {
    "name": "Reslizumabe",
    "class": "Anticorpo monoclonal anti-IL-5",
    "pharmacologicClass": "Anticorpo monoclonal anti-IL-5",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Concentrado para infusão IV em frasco de uso único.",
    "presentations": "Concentrado para infusão IV em frasco de uso único.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância y exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo y eliminação na fonte primária.",
    "indications": "Tratamento adjuvante da asma eosinofílica grave em adultos conforme critérios do rótulo.",
    "dose": "Dose IV baseada em peso real y administrada por infusão em ambiente preparado para anafilaxia. No administrar em bolus nem para exacerbação aguda.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "No inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "No inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Dor orofaríngea y elevação de CPK.",
    "dangerousAdverseEffects": "Anafilaxia, malignidade potencialmente associada y reação à infusão.",
    "adverseEffects": "Dor orofaríngea y elevação de CPK.; Anafilaxia, malignidade potencialmente associada y reação à infusão.",
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
    "safetyFlags": "Anafilaxia, malignidade potencialmente associada y reação à infusão.",
    "alerts": "Anafilaxia, malignidade potencialmente associada y reação à infusão.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=reslizumabe",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=reslizumabe"
  }
};})();
/* GOLD33_SELECTIVE:reslizumabe:END */
/* GOLD33_SELECTIVE:roflumilaste:START */
;(function(){var db=window.PNEUMOLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="roflumilaste";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:roflumilaste:"+matches.length);drug=matches[0];}else{drug=db&&db["roflumilaste"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:roflumilaste");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "069",
    "requiredFieldCount": 33,
    "approvedSha256": "5ca57bc9e149b3613d10e8c8deca51d2bf54f6a6f9e42b6dd145cae4f9dd11b2",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "LIBERADA_COM_RESTRICOES_GRANULARES",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Roflumilaste",
    "class": "Inibidor seletivo da fosfodiesterase 4",
    "pharmacologicClass": "Inibidor seletivo da fosfodiesterase 4",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimidos em força de iniciação/manutenção conforme mercado.",
    "presentations": "Comprimidos em força de iniciação/manutenção conforme mercado.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância e exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo e eliminação na fonte primária.",
    "indications": "Redução de exacerbações em DPOC grave associada a bronquite crônica em pacientes selecionados.",
    "dose": "Dose oral diária; não é broncodilatador de resgate. Avaliar peso, fígado, interações e sintomas psiquiátricos.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "Não inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "Não inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Diarreia, perda de peso, náusea, cefaleia e insônia.",
    "dangerousAdverseEffects": "Ideação suicida, depressão grave e perda ponderal importante.",
    "adverseEffects": "Diarreia, perda de peso, náusea, cefaleia e insônia.; Ideação suicida, depressão grave e perda ponderal importante.",
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
    "safetyFlags": "Ideação suicida, depressão grave e perda ponderal importante.",
    "alerts": "Ideação suicida, depressão grave e perda ponderal importante.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=roflumilaste",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=roflumilaste"
  },
  "es": {
    "name": "Roflumilaste",
    "class": "Inibidor seletivo da fosfodiesterase 4",
    "pharmacologicClass": "Inibidor seletivo da fosfodiesterase 4",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimidos em força de iniciação/manutenção conforme mercado.",
    "presentations": "Comprimidos em força de iniciação/manutenção conforme mercado.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância y exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo y eliminação na fonte primária.",
    "indications": "Redução de exacerbações em DPOC grave associada a bronquite crônica em pacientes selecionados.",
    "dose": "Dose oral diária; no é broncodilatador de resgate. Avaliar peso, fígado, interações y sintomas psiquiátricos.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "No inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "No inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Diarreia, perda de peso, náusea, cefaleia y insônia.",
    "dangerousAdverseEffects": "Ideação suicida, depressão grave y perda ponderal importante.",
    "adverseEffects": "Diarreia, perda de peso, náusea, cefaleia y insônia.; Ideação suicida, depressão grave y perda ponderal importante.",
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
    "safetyFlags": "Ideação suicida, depressão grave y perda ponderal importante.",
    "alerts": "Ideação suicida, depressão grave y perda ponderal importante.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=roflumilaste",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=roflumilaste"
  }
};})();
/* GOLD33_SELECTIVE:roflumilaste:END */
/* GOLD33_SELECTIVE:salbutamol:START */
;(function(){var db=window.PNEUMOLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="salbutamol";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:salbutamol:"+matches.length);drug=matches[0];}else{drug=db&&db["salbutamol"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:salbutamol");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "071",
    "requiredFieldCount": 33,
    "approvedSha256": "b849afd77cf7c158749040cafef531ab52eee801c7628e215ab1c1f9f43270bb",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "LIBERADA_COM_RESTRICOES_GRANULARES",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Salbutamol (albuterol)",
    "class": "Agonista beta2 de curta ação",
    "pharmacologicClass": "Agonista beta2 de curta ação",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Inaladores dosimetrados, soluções para nebulização e outras apresentações conforme mercado.",
    "presentations": "Inaladores dosimetrados, soluções para nebulização e outras apresentações conforme mercado.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância e exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo e eliminação na fonte primária.",
    "indications": "Alívio e prevenção do broncoespasmo conforme via e idade.",
    "dose": "A dose depende do dispositivo, concentração e indicação. Confirmar técnica e plano de ação; uso crescente sugere controle inadequado.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "Não inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "Não inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Tremor, taquicardia, nervosismo e cefaleia.",
    "dangerousAdverseEffects": "Broncoespasmo paradoxal, hipocalemia, arritmia e acidose láctica.",
    "adverseEffects": "Tremor, taquicardia, nervosismo e cefaleia.; Broncoespasmo paradoxal, hipocalemia, arritmia e acidose láctica.",
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
    "safetyFlags": "Broncoespasmo paradoxal, hipocalemia, arritmia e acidose láctica.",
    "alerts": "Broncoespasmo paradoxal, hipocalemia, arritmia e acidose láctica.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=salbutamol",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=salbutamol"
  },
  "es": {
    "name": "Salbutamol (albuterol)",
    "class": "Agonista beta2 de curta ação",
    "pharmacologicClass": "Agonista beta2 de curta ação",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Inaladores dosimetrados, soluções para nebulização y outras apresentações conforme mercado.",
    "presentations": "Inaladores dosimetrados, soluções para nebulização y outras apresentações conforme mercado.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância y exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo y eliminação na fonte primária.",
    "indications": "Alívio y prevenção do broncoespasmo conforme via y idade.",
    "dose": "A dosis depende do dispositivo, concentração y indicação. Confirmar técnica y plano de ação; uso crescente sugere controle inadequado.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "No inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "No inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Tremor, taquicardia, nervosismo y cefaleia.",
    "dangerousAdverseEffects": "Broncoespasmo paradoxal, hipocalemia, arritmia y acidosis láctica.",
    "adverseEffects": "Tremor, taquicardia, nervosismo y cefaleia.; Broncoespasmo paradoxal, hipocalemia, arritmia y acidosis láctica.",
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
    "safetyFlags": "Broncoespasmo paradoxal, hipocalemia, arritmia y acidosis láctica.",
    "alerts": "Broncoespasmo paradoxal, hipocalemia, arritmia y acidosis láctica.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=salbutamol",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=salbutamol"
  }
};})();
/* GOLD33_SELECTIVE:salbutamol:END */
/* GOLD33_SELECTIVE:salmeterol:START */
;(function(){var db=window.PNEUMOLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="salmeterol";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:salmeterol:"+matches.length);drug=matches[0];}else{drug=db&&db["salmeterol"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:salmeterol");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "071",
    "requiredFieldCount": 33,
    "approvedSha256": "b849afd77cf7c158749040cafef531ab52eee801c7628e215ab1c1f9f43270bb",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "LIBERADA_COM_RESTRICOES_GRANULARES",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Salmeterol",
    "class": "Agonista beta2 de longa ação inalatório",
    "pharmacologicClass": "Agonista beta2 de longa ação inalatório",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Pó ou aerossol inalatório em dispositivos específicos.",
    "presentations": "Pó ou aerossol inalatório em dispositivos específicos.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância e exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo e eliminação na fonte primária.",
    "indications": "Manutenção de asma sempre com corticosteroide inalatório e tratamento da DPOC; não é resgate.",
    "dose": "Administração inalatoria regular conforme dispositivo. Não usar para sintomas agudos nem exceder a frequência; em asma, nunca como monoterapia.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "Não inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "Não inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Cefaleia, tremor, palpitação e câimbras.",
    "dangerousAdverseEffects": "Broncoespasmo paradoxal, arritmia, hipocalemia e eventos graves de asma sem corticosteroide.",
    "adverseEffects": "Cefaleia, tremor, palpitação e câimbras.; Broncoespasmo paradoxal, arritmia, hipocalemia e eventos graves de asma sem corticosteroide.",
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
    "safetyFlags": "Broncoespasmo paradoxal, arritmia, hipocalemia e eventos graves de asma sem corticosteroide.",
    "alerts": "Broncoespasmo paradoxal, arritmia, hipocalemia e eventos graves de asma sem corticosteroide.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=salmeterol",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=salmeterol"
  },
  "es": {
    "name": "Salmeterol",
    "class": "Agonista beta2 de longa ação inalatório",
    "pharmacologicClass": "Agonista beta2 de longa ação inalatório",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Pó ou aerossol inalatório em dispositivos específicos.",
    "presentations": "Pó ou aerossol inalatório em dispositivos específicos.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância y exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo y eliminação na fonte primária.",
    "indications": "Manutenção de asma sempre con corticosteroide inalatório y tratamento da DPOC; no é resgate.",
    "dose": "Administração inalatoria regular conforme dispositivo. No usar para sintomas agudos nem exceder a frequência; em asma, nunca como monoterapia.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "No inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "No inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Cefaleia, tremor, palpitação y câimbras.",
    "dangerousAdverseEffects": "Broncoespasmo paradoxal, arritmia, hipocalemia y eventos graves de asma sem corticosteroide.",
    "adverseEffects": "Cefaleia, tremor, palpitação y câimbras.; Broncoespasmo paradoxal, arritmia, hipocalemia y eventos graves de asma sem corticosteroide.",
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
    "safetyFlags": "Broncoespasmo paradoxal, arritmia, hipocalemia y eventos graves de asma sem corticosteroide.",
    "alerts": "Broncoespasmo paradoxal, arritmia, hipocalemia y eventos graves de asma sem corticosteroide.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=salmeterol",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=salmeterol"
  }
};})();
/* GOLD33_SELECTIVE:salmeterol:END */
/* GOLD33_SELECTIVE:teofilina:START */
;(function(){var db=window.PNEUMOLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="teofilina";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:teofilina:"+matches.length);drug=matches[0];}else{drug=db&&db["teofilina"];if(!drug&&db){var keys=Object.keys(db).filter(function(key){return key.toLowerCase()==="teofilina";});if(keys.length>1)throw new Error("GOLD33_CANONICAL_CARDINALITY:teofilina:"+keys.length);if(keys.length===1)drug=db[keys[0]];}if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:teofilina");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "076",
    "requiredFieldCount": 33,
    "approvedSha256": "c79e4af068fd91e7cd8301e8a4c4b6e6d2a5ef0b97053be89d21b89e6204c0e5",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "LIBERADA_COM_RESTRICOES_GRANULARES",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Teofilina",
    "class": "Metilxantina broncodilatadora",
    "pharmacologicClass": "Metilxantina broncodilatadora",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimidos/cápsulas de liberação modificada, solução e formulação IV relacionada.",
    "presentations": "Comprimidos/cápsulas de liberação modificada, solução e formulação IV relacionada.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância e exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo e eliminação na fonte primária.",
    "indications": "Asma ou DPOC em situações selecionadas quando alternativas são inadequadas, conforme protocolo.",
    "dose": "Janela terapêutica estreita: dose individualizada por idade, tabagismo, comorbidades, interações e nível sérico. Formulações de liberação modificada não são intercambiáveis.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "Não inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "Não inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Náusea, vômito, tremor, insônia e cefaleia.",
    "dangerousAdverseEffects": "Arritmias, convulsões, hipotensão e morte por toxicidade.",
    "adverseEffects": "Náusea, vômito, tremor, insônia e cefaleia.; Arritmias, convulsões, hipotensão e morte por toxicidade.",
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
    "safetyFlags": "Arritmias, convulsões, hipotensão e morte por toxicidade.",
    "alerts": "Arritmias, convulsões, hipotensão e morte por toxicidade.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=teofilina",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=teofilina"
  },
  "es": {
    "name": "Teofilina",
    "class": "Metilxantina broncodilatadora",
    "pharmacologicClass": "Metilxantina broncodilatadora",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimidos/cápsulas de liberação modificada, solución y formulação IV relacionada.",
    "presentations": "Comprimidos/cápsulas de liberação modificada, solución y formulação IV relacionada.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância y exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo y eliminação na fonte primária.",
    "indications": "Asma ou DPOC em situações selecionadas quando alternativas são inadequadas, conforme protocolo.",
    "dose": "Janela terapêutica estreita: dosis individualizada por idade, tabagismo, comorbidades, interações y nível sérico. Formulações de liberação modificada no são intercambiáveis.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "No inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "No inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Náusea, vômito, tremor, insônia y cefaleia.",
    "dangerousAdverseEffects": "Arritmias, convulsões, hipotensão y morte por toxicidade.",
    "adverseEffects": "Náusea, vômito, tremor, insônia y cefaleia.; Arritmias, convulsões, hipotensão y morte por toxicidade.",
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
    "safetyFlags": "Arritmias, convulsões, hipotensão y morte por toxicidade.",
    "alerts": "Arritmias, convulsões, hipotensão y morte por toxicidade.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=teofilina",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=teofilina"
  }
};})();
/* GOLD33_SELECTIVE:teofilina:END */
/* GOLD33_SELECTIVE:terbutalina:START */
;(function(){var db=window.PNEUMOLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="terbutalina";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:terbutalina:"+matches.length);drug=matches[0];}else{drug=db&&db["terbutalina"];if(!drug&&db){var keys=Object.keys(db).filter(function(key){return key.toLowerCase()==="terbutalina";});if(keys.length>1)throw new Error("GOLD33_CANONICAL_CARDINALITY:terbutalina:"+keys.length);if(keys.length===1)drug=db[keys[0]];}if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:terbutalina");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "076",
    "requiredFieldCount": 33,
    "approvedSha256": "c79e4af068fd91e7cd8301e8a4c4b6e6d2a5ef0b97053be89d21b89e6204c0e5",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "LIBERADA_COM_RESTRICOES_GRANULARES",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Terbutalina",
    "class": "Agonista beta2 adrenérgico de curta ação",
    "pharmacologicClass": "Agonista beta2 adrenérgico de curta ação",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimidos, solução injetável e apresentações inalatórias conforme país.",
    "presentations": "Comprimidos, solução injetável e apresentações inalatórias conforme país.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância e exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo e eliminação na fonte primária.",
    "indications": "Broncoespasmo conforme via e rótulo; uso obstétrico é restrito e não deve ser automatizado.",
    "dose": "Dose depende da via, idade e produto. Não usar prolongadamente para tocólise; monitorar frequência cardíaca, potássio e glicemia.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "Não inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "Não inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Tremor, nervosismo, taquicardia e cefaleia.",
    "dangerousAdverseEffects": "Arritmia, hipocalemia, hiperglicemia, edema pulmonar e eventos maternos graves no uso obstétrico.",
    "adverseEffects": "Tremor, nervosismo, taquicardia e cefaleia.; Arritmia, hipocalemia, hiperglicemia, edema pulmonar e eventos maternos graves no uso obstétrico.",
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
    "safetyFlags": "Arritmia, hipocalemia, hiperglicemia, edema pulmonar e eventos maternos graves no uso obstétrico.",
    "alerts": "Arritmia, hipocalemia, hiperglicemia, edema pulmonar e eventos maternos graves no uso obstétrico.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=terbutalina",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=terbutalina"
  },
  "es": {
    "name": "Terbutalina",
    "class": "Agonista beta2 adrenérgico de curta ação",
    "pharmacologicClass": "Agonista beta2 adrenérgico de curta ação",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimidos, solución injetável y apresentações inalatórias conforme país.",
    "presentations": "Comprimidos, solución injetável y apresentações inalatórias conforme país.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância y exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo y eliminação na fonte primária.",
    "indications": "Broncoespasmo conforme via y rótulo; uso obstétrico é restrito y no deve ser automatizado.",
    "dose": "Dose depende da via, idade y produto. No usar prolongadamente para tocólise; monitorar frequência cardíaca, potássio y glicemia.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "No inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "No inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Tremor, nervosismo, taquicardia y cefaleia.",
    "dangerousAdverseEffects": "Arritmia, hipocalemia, hiperglicemia, edema pulmonar y eventos maternos graves no uso obstétrico.",
    "adverseEffects": "Tremor, nervosismo, taquicardia y cefaleia.; Arritmia, hipocalemia, hiperglicemia, edema pulmonar y eventos maternos graves no uso obstétrico.",
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
    "safetyFlags": "Arritmia, hipocalemia, hiperglicemia, edema pulmonar y eventos maternos graves no uso obstétrico.",
    "alerts": "Arritmia, hipocalemia, hiperglicemia, edema pulmonar y eventos maternos graves no uso obstétrico.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=terbutalina",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=terbutalina"
  }
};})();
/* GOLD33_SELECTIVE:terbutalina:END */
/* GOLD33_SELECTIVE:tezepelumabe:START */
;(function(){var db=window.PNEUMOLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="tezepelumabe";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:tezepelumabe:"+matches.length);drug=matches[0];}else{drug=db&&db["tezepelumabe"];if(!drug&&db){var keys=Object.keys(db).filter(function(key){return key.toLowerCase()==="tezepelumabe";});if(keys.length>1)throw new Error("GOLD33_CANONICAL_CARDINALITY:tezepelumabe:"+keys.length);if(keys.length===1)drug=db[keys[0]];}if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:tezepelumabe");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "076",
    "requiredFieldCount": 33,
    "approvedSha256": "c79e4af068fd91e7cd8301e8a4c4b6e6d2a5ef0b97053be89d21b89e6204c0e5",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "LIBERADA_COM_RESTRICOES_GRANULARES",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Tezepelumabe",
    "class": "Anticorpo monoclonal contra linfopoietina estromal tímica",
    "pharmacologicClass": "Anticorpo monoclonal contra linfopoietina estromal tímica",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Seringa ou caneta preenchida para uso subcutâneo.",
    "presentations": "Seringa ou caneta preenchida para uso subcutâneo.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância e exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo e eliminação na fonte primária.",
    "indications": "Tratamento de manutenção adicional da asma grave em pacientes elegíveis; não trata broncoespasmo agudo.",
    "dose": "Administração subcutânea em intervalo fixo por profissional ou dispositivo aprovado. Manter controladores e avaliar hipersensibilidade/helmintíase.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "Não inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "Não inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Faringite, artralgia e dor lombar.",
    "dangerousAdverseEffects": "Hipersensibilidade grave e risco relacionado a infecção helmíntica.",
    "adverseEffects": "Faringite, artralgia e dor lombar.; Hipersensibilidade grave e risco relacionado a infecção helmíntica.",
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
    "safetyFlags": "Hipersensibilidade grave e risco relacionado a infecção helmíntica.",
    "alerts": "Hipersensibilidade grave e risco relacionado a infecção helmíntica.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=tezepelumabe",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=tezepelumabe"
  },
  "es": {
    "name": "Tezepelumabe",
    "class": "Anticorpo monoclonal contra linfopoietina estromal tímica",
    "pharmacologicClass": "Anticorpo monoclonal contra linfopoietina estromal tímica",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Seringa ou caneta preenchida para uso subcutâneo.",
    "presentations": "Seringa ou caneta preenchida para uso subcutâneo.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância y exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo y eliminação na fonte primária.",
    "indications": "Tratamento de manutenção adicional da asma grave em pacientes elegíveis; no trata broncoespasmo agudo.",
    "dose": "Administração subcutânea em intervalo fixo por profissional ou dispositivo aprovado. Manter controladores y avaliar hipersensibilidade/helmintíase.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "No inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "No inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Faringite, artralgia y dor lombar.",
    "dangerousAdverseEffects": "Hipersensibilidade grave y risco relacionado a infecção helmíntica.",
    "adverseEffects": "Faringite, artralgia y dor lombar.; Hipersensibilidade grave y risco relacionado a infecção helmíntica.",
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
    "safetyFlags": "Hipersensibilidade grave y risco relacionado a infecção helmíntica.",
    "alerts": "Hipersensibilidade grave y risco relacionado a infecção helmíntica.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=tezepelumabe",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=tezepelumabe"
  }
};})();
/* GOLD33_SELECTIVE:tezepelumabe:END */
/* GOLD33_SELECTIVE:tiotropio:START */
;(function(){var db=window.PNEUMOLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="tiotropio";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:tiotropio:"+matches.length);drug=matches[0];}else{drug=db&&db["tiotropio"];if(!drug&&db){var keys=Object.keys(db).filter(function(key){return key.toLowerCase()==="tiotropio";});if(keys.length>1)throw new Error("GOLD33_CANONICAL_CARDINALITY:tiotropio:"+keys.length);if(keys.length===1)drug=db[keys[0]];}if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:tiotropio");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "077",
    "requiredFieldCount": 33,
    "approvedSha256": "ce11000d7409bd2f6564d0db46214d97e19a6b5303cba03406aa668caf890a5b",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "LIBERADA_COM_RESTRICOES_GRANULARES",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Tiotrópio",
    "class": "Antagonista muscarínico de longa ação inalatório",
    "pharmacologicClass": "Antagonista muscarínico de longa ação inalatório",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Cápsulas para inalador de pó e solução para névoa suave, não intercambiáveis.",
    "presentations": "Cápsulas para inalador de pó e solução para névoa suave, não intercambiáveis.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância e exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo e eliminação na fonte primária.",
    "indications": "Manutenção da DPOC e, em formulações aprovadas, terapia adicional da asma; não é resgate.",
    "dose": "Dose depende integralmente do dispositivo e formulação. Cápsulas para inalação não devem ser ingeridas; confirmar técnica e não usar em crise aguda.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "Não inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "Não inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Boca seca, constipação, faringite e tosse.",
    "dangerousAdverseEffects": "Broncoespasmo paradoxal, glaucoma de ângulo fechado, retenção urinária e hipersensibilidade.",
    "adverseEffects": "Boca seca, constipação, faringite e tosse.; Broncoespasmo paradoxal, glaucoma de ângulo fechado, retenção urinária e hipersensibilidade.",
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
    "safetyFlags": "Broncoespasmo paradoxal, glaucoma de ângulo fechado, retenção urinária e hipersensibilidade.",
    "alerts": "Broncoespasmo paradoxal, glaucoma de ângulo fechado, retenção urinária e hipersensibilidade.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=tiotropio",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=tiotropio"
  },
  "es": {
    "name": "Tiotrópio",
    "class": "Antagonista muscarínico de longa ação inalatório",
    "pharmacologicClass": "Antagonista muscarínico de longa ação inalatório",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Cápsulas para inalador de pó y solución para névoa suave, no intercambiáveis.",
    "presentations": "Cápsulas para inalador de pó y solución para névoa suave, no intercambiáveis.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância y exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo y eliminação na fonte primária.",
    "indications": "Manutenção da DPOC e, em formulações aprovadas, terapia adicional da asma; no é resgate.",
    "dose": "Dose depende integralmente do dispositivo y formulação. Cápsulas para inalação no devem ser ingeridas; confirmar técnica y no usar em crise aguda.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "No inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "No inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Boca seca, constipação, faringite y tosse.",
    "dangerousAdverseEffects": "Broncoespasmo paradoxal, glaucoma de ângulo fechado, retenção urinária y hipersensibilidade.",
    "adverseEffects": "Boca seca, constipação, faringite y tosse.; Broncoespasmo paradoxal, glaucoma de ângulo fechado, retenção urinária y hipersensibilidade.",
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
    "safetyFlags": "Broncoespasmo paradoxal, glaucoma de ângulo fechado, retenção urinária y hipersensibilidade.",
    "alerts": "Broncoespasmo paradoxal, glaucoma de ângulo fechado, retenção urinária y hipersensibilidade.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=tiotropio",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=tiotropio"
  }
};})();
/* GOLD33_SELECTIVE:tiotropio:END */
/* GOLD33_SELECTIVE:tiotropio_olodaterol:START */
;(function(){var db=window.PNEUMOLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="tiotropio_olodaterol";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:tiotropio_olodaterol:"+matches.length);drug=matches[0];}else{drug=db&&db["tiotropio_olodaterol"];if(!drug&&db){var keys=Object.keys(db).filter(function(key){return key.toLowerCase()==="tiotropio_olodaterol";});if(keys.length>1)throw new Error("GOLD33_CANONICAL_CARDINALITY:tiotropio_olodaterol:"+keys.length);if(keys.length===1)drug=db[keys[0]];}if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:tiotropio_olodaterol");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "077",
    "requiredFieldCount": 33,
    "approvedSha256": "ce11000d7409bd2f6564d0db46214d97e19a6b5303cba03406aa668caf890a5b",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "LIBERADA_COM_RESTRICOES_GRANULARES",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Tiotrópio/olodaterol",
    "class": "Antagonista muscarínico e agonista beta2 de longa ação",
    "pharmacologicClass": "Antagonista muscarínico e agonista beta2 de longa ação",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Cartucho de solução para inalador específico.",
    "presentations": "Cartucho de solução para inalador específico.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância e exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo e eliminação na fonte primária.",
    "indications": "Tratamento de manutenção da DPOC; não indicado como resgate nem para asma sem indicação específica.",
    "dose": "Administrar pelo dispositivo de névoa suave conforme rótulo, em uso diário regular. Não exceder doses nem associar outro LABA sem avaliação.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "Não inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "Não inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Nasofaringite, tosse, dor lombar e boca seca.",
    "dangerousAdverseEffects": "Broncoespasmo paradoxal, taquiarritmia, hipocalemia, retenção urinária e glaucoma agudo.",
    "adverseEffects": "Nasofaringite, tosse, dor lombar e boca seca.; Broncoespasmo paradoxal, taquiarritmia, hipocalemia, retenção urinária e glaucoma agudo.",
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
    "safetyFlags": "Broncoespasmo paradoxal, taquiarritmia, hipocalemia, retenção urinária e glaucoma agudo.",
    "alerts": "Broncoespasmo paradoxal, taquiarritmia, hipocalemia, retenção urinária e glaucoma agudo.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=tiotropio+olodaterol",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=tiotropio+olodaterol"
  },
  "es": {
    "name": "Tiotrópio/olodaterol",
    "class": "Antagonista muscarínico y agonista beta2 de longa ação",
    "pharmacologicClass": "Antagonista muscarínico y agonista beta2 de longa ação",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Cartucho de solución para inalador específico.",
    "presentations": "Cartucho de solución para inalador específico.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância y exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo y eliminação na fonte primária.",
    "indications": "Tratamento de manutenção da DPOC; no indicado como resgate nem para asma sem indicação específica.",
    "dose": "Administrar pelo dispositivo de névoa suave conforme rótulo, em uso diário regular. No exceder dosiss nem associar outro LABA sem avaliação.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "No inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "No inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Nasofaringite, tosse, dor lombar y boca seca.",
    "dangerousAdverseEffects": "Broncoespasmo paradoxal, taquiarritmia, hipocalemia, retenção urinária y glaucoma agudo.",
    "adverseEffects": "Nasofaringite, tosse, dor lombar y boca seca.; Broncoespasmo paradoxal, taquiarritmia, hipocalemia, retenção urinária y glaucoma agudo.",
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
    "safetyFlags": "Broncoespasmo paradoxal, taquiarritmia, hipocalemia, retenção urinária y glaucoma agudo.",
    "alerts": "Broncoespasmo paradoxal, taquiarritmia, hipocalemia, retenção urinária y glaucoma agudo.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=tiotropio+olodaterol",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=tiotropio+olodaterol"
  }
};})();
/* GOLD33_SELECTIVE:tiotropio_olodaterol:END */
/* GOLD33_SELECTIVE:umeclidinio:START */
;(function(){var db=window.PNEUMOLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="umeclidinio";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:umeclidinio:"+matches.length);drug=matches[0];}else{drug=db&&db["umeclidinio"];if(!drug&&db){var keys=Object.keys(db).filter(function(key){return key.toLowerCase()==="umeclidinio";});if(keys.length>1)throw new Error("GOLD33_CANONICAL_CARDINALITY:umeclidinio:"+keys.length);if(keys.length===1)drug=db[keys[0]];}if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:umeclidinio");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "080",
    "requiredFieldCount": 33,
    "approvedSha256": "643f72271736a174835d1af1735db1daa57bdee524910c9fc9299b7ef770c2f1",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "LIBERADA_COM_RESTRICOES_GRANULARES",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Umeclidínio",
    "class": "Antagonista muscarínico de longa ação inalatório",
    "pharmacologicClass": "Antagonista muscarínico de longa ação inalatório",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Pó para inalação em dispositivo específico.",
    "presentations": "Pó para inalação em dispositivo específico.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância e exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo e eliminação na fonte primária.",
    "indications": "Tratamento broncodilatador de manutenção da DPOC; não é medicamento de resgate.",
    "dose": "Uma inalação diária conforme dispositivo e força. Confirmar técnica; não usar para broncoespasmo agudo nem combinar antimuscarínicos sem avaliação.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "Não inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "Não inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Nasofaringite, tosse, dor e infecção respiratória.",
    "dangerousAdverseEffects": "Broncoespasmo paradoxal, glaucoma agudo, retenção urinária e hipersensibilidade.",
    "adverseEffects": "Nasofaringite, tosse, dor e infecção respiratória.; Broncoespasmo paradoxal, glaucoma agudo, retenção urinária e hipersensibilidade.",
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
    "safetyFlags": "Broncoespasmo paradoxal, glaucoma agudo, retenção urinária e hipersensibilidade.",
    "alerts": "Broncoespasmo paradoxal, glaucoma agudo, retenção urinária e hipersensibilidade.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=umeclidinio",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=umeclidinio"
  },
  "es": {
    "name": "Umeclidínio",
    "class": "Antagonista muscarínico de longa ação inalatório",
    "pharmacologicClass": "Antagonista muscarínico de longa ação inalatório",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Pó para inalação em dispositivo específico.",
    "presentations": "Pó para inalação em dispositivo específico.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância y exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo y eliminação na fonte primária.",
    "indications": "Tratamento broncodilatador de manutenção da DPOC; no é medicamento de resgate.",
    "dose": "Uma inalação diária conforme dispositivo y força. Confirmar técnica; no usar para broncoespasmo agudo nem combinar antimuscarínicos sem avaliação.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "No inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "No inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Nasofaringite, tosse, dor y infecção respiratória.",
    "dangerousAdverseEffects": "Broncoespasmo paradoxal, glaucoma agudo, retenção urinária y hipersensibilidade.",
    "adverseEffects": "Nasofaringite, tosse, dor y infecção respiratória.; Broncoespasmo paradoxal, glaucoma agudo, retenção urinária y hipersensibilidade.",
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
    "safetyFlags": "Broncoespasmo paradoxal, glaucoma agudo, retenção urinária y hipersensibilidade.",
    "alerts": "Broncoespasmo paradoxal, glaucoma agudo, retenção urinária y hipersensibilidade.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=umeclidinio",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=umeclidinio"
  }
};})();
/* GOLD33_SELECTIVE:umeclidinio:END */
/* GOLD33_SELECTIVE:umeclidinio_vilanterol:START */
;(function(){var db=window.PNEUMOLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="umeclidinio_vilanterol";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:umeclidinio_vilanterol:"+matches.length);drug=matches[0];}else{drug=db&&db["umeclidinio_vilanterol"];if(!drug&&db){var keys=Object.keys(db).filter(function(key){return key.toLowerCase()==="umeclidinio_vilanterol";});if(keys.length>1)throw new Error("GOLD33_CANONICAL_CARDINALITY:umeclidinio_vilanterol:"+keys.length);if(keys.length===1)drug=db[keys[0]];}if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:umeclidinio_vilanterol");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "080",
    "requiredFieldCount": 33,
    "approvedSha256": "643f72271736a174835d1af1735db1daa57bdee524910c9fc9299b7ef770c2f1",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "LIBERADA_COM_RESTRICOES_GRANULARES",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Umeclidínio/vilanterol",
    "class": "Antagonista muscarínico e agonista beta2 de longa ação",
    "pharmacologicClass": "Antagonista muscarínico e agonista beta2 de longa ação",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Pó para inalação em dispositivo de dose fixa.",
    "presentations": "Pó para inalação em dispositivo de dose fixa.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância e exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo e eliminação na fonte primária.",
    "indications": "Manutenção da DPOC; não indicado como resgate ou tratamento da asma sem indicação aprovada.",
    "dose": "Uma inalação diária conforme dispositivo. Não exceder nem associar outro LABA ou antimuscarínico sem avaliação.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "Não inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "Não inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Faringite, constipação, tosse e dor em extremidades.",
    "dangerousAdverseEffects": "Broncoespasmo paradoxal, taquiarritmia, hipocalemia, retenção urinária e glaucoma agudo.",
    "adverseEffects": "Faringite, constipação, tosse e dor em extremidades.; Broncoespasmo paradoxal, taquiarritmia, hipocalemia, retenção urinária e glaucoma agudo.",
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
    "safetyFlags": "Broncoespasmo paradoxal, taquiarritmia, hipocalemia, retenção urinária e glaucoma agudo.",
    "alerts": "Broncoespasmo paradoxal, taquiarritmia, hipocalemia, retenção urinária e glaucoma agudo.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=umeclidinio+vilanterol",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=umeclidinio+vilanterol"
  },
  "es": {
    "name": "Umeclidínio/vilanterol",
    "class": "Antagonista muscarínico y agonista beta2 de longa ação",
    "pharmacologicClass": "Antagonista muscarínico y agonista beta2 de longa ação",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Pó para inalação em dispositivo de dosis fixa.",
    "presentations": "Pó para inalação em dispositivo de dosis fixa.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância y exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo y eliminação na fonte primária.",
    "indications": "Manutenção da DPOC; no indicado como resgate ou tratamento da asma sem indicação aprovada.",
    "dose": "Uma inalação diária conforme dispositivo. No exceder nem associar outro LABA ou antimuscarínico sem avaliação.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "No inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "No inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Faringite, constipação, tosse y dor em extremidades.",
    "dangerousAdverseEffects": "Broncoespasmo paradoxal, taquiarritmia, hipocalemia, retenção urinária y glaucoma agudo.",
    "adverseEffects": "Faringite, constipação, tosse y dor em extremidades.; Broncoespasmo paradoxal, taquiarritmia, hipocalemia, retenção urinária y glaucoma agudo.",
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
    "safetyFlags": "Broncoespasmo paradoxal, taquiarritmia, hipocalemia, retenção urinária y glaucoma agudo.",
    "alerts": "Broncoespasmo paradoxal, taquiarritmia, hipocalemia, retenção urinária y glaucoma agudo.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=umeclidinio+vilanterol",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=umeclidinio+vilanterol"
  }
};})();
/* GOLD33_SELECTIVE:umeclidinio_vilanterol:END */
/* GOLD33_SELECTIVE:vilanterol:START */
;(function(){var db=window.PNEUMOLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="vilanterol";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:vilanterol:"+matches.length);drug=matches[0];}else{drug=db&&db["vilanterol"];if(!drug&&db){var keys=Object.keys(db).filter(function(key){return key.toLowerCase()==="vilanterol";});if(keys.length>1)throw new Error("GOLD33_CANONICAL_CARDINALITY:vilanterol:"+keys.length);if(keys.length===1)drug=db[keys[0]];}if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:vilanterol");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "082",
    "requiredFieldCount": 33,
    "approvedSha256": "f0e6cac4e2e07afb2a1d0abc227e1e92126392bcfd9521e42fd7299ef157b512",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "LIBERADA_COM_RESTRICOES_GRANULARES",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Vilanterol",
    "class": "Agonista beta2 de longa ação inalatório",
    "pharmacologicClass": "Agonista beta2 de longa ação inalatório",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Somente em combinações inaladas de dose fixa.",
    "presentations": "Somente em combinações inaladas de dose fixa.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância e exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo e eliminação na fonte primária.",
    "indications": "Componente de combinações para DPOC ou asma; não deve ser usado isoladamente nem como resgate.",
    "dose": "Disponível em combinações e dispositivos específicos. Seguir frequência do produto, não exceder nem combinar outro LABA sem avaliação.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "Não inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "Não inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Cefaleia, tremor, palpitação e nasofaringite.",
    "dangerousAdverseEffects": "Broncoespasmo paradoxal, taquiarritmia, hipocalemia e eventos graves de asma sem corticosteroide.",
    "adverseEffects": "Cefaleia, tremor, palpitação e nasofaringite.; Broncoespasmo paradoxal, taquiarritmia, hipocalemia e eventos graves de asma sem corticosteroide.",
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
    "safetyFlags": "Broncoespasmo paradoxal, taquiarritmia, hipocalemia e eventos graves de asma sem corticosteroide.",
    "alerts": "Broncoespasmo paradoxal, taquiarritmia, hipocalemia e eventos graves de asma sem corticosteroide.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=vilanterol",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=vilanterol"
  },
  "es": {
    "name": "Vilanterol",
    "class": "Agonista beta2 de longa ação inalatório",
    "pharmacologicClass": "Agonista beta2 de longa ação inalatório",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Somente em combinações inaladas de dosis fixa.",
    "presentations": "Somente em combinações inaladas de dosis fixa.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância y exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo y eliminação na fonte primária.",
    "indications": "Componente de combinações para DPOC ou asma; no deve ser usado isoladamente nem como resgate.",
    "dose": "Disponível em combinações y dispositivos específicos. Seguir frequência do produto, no exceder nem combinar outro LABA sem avaliação.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "No inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "No inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Cefaleia, tremor, palpitação y nasofaringite.",
    "dangerousAdverseEffects": "Broncoespasmo paradoxal, taquiarritmia, hipocalemia y eventos graves de asma sem corticosteroide.",
    "adverseEffects": "Cefaleia, tremor, palpitação y nasofaringite.; Broncoespasmo paradoxal, taquiarritmia, hipocalemia y eventos graves de asma sem corticosteroide.",
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
    "safetyFlags": "Broncoespasmo paradoxal, taquiarritmia, hipocalemia y eventos graves de asma sem corticosteroide.",
    "alerts": "Broncoespasmo paradoxal, taquiarritmia, hipocalemia y eventos graves de asma sem corticosteroide.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=vilanterol",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=vilanterol"
  }
};})();
/* GOLD33_SELECTIVE:vilanterol:END */
/* GOLD33_SELECTIVE:zafirlucaste:START */
;(function(){var db=window.PNEUMOLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="zafirlucaste";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:zafirlucaste:"+matches.length);drug=matches[0];}else{drug=db&&db["zafirlucaste"];if(!drug&&db){var keys=Object.keys(db).filter(function(key){return key.toLowerCase()==="zafirlucaste";});if(keys.length>1)throw new Error("GOLD33_CANONICAL_CARDINALITY:zafirlucaste:"+keys.length);if(keys.length===1)drug=db[keys[0]];}if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:zafirlucaste");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "083",
    "requiredFieldCount": 33,
    "approvedSha256": "0316ab38ba2be15000dda4927df8f00e6d8925a88d95ac7c1e69822aea511bfa",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "LIBERADA_COM_RESTRICOES_GRANULARES",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Zafirlucaste",
    "class": "Antagonista do receptor de leucotrienos",
    "pharmacologicClass": "Antagonista do receptor de leucotrienos",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimidos em forças específicas.",
    "presentations": "Comprimidos em forças específicas.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância e exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo e eliminação na fonte primária.",
    "indications": "Manutenção da asma em pacientes elegíveis; não trata broncoespasmo agudo.",
    "dose": "Dose oral regular em jejum conforme idade/rótulo. Monitorar fígado e interação com varfarina; manter medicamento de resgate disponível.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "Não inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "Não inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Cefaleia, náusea, diarreia e infecção.",
    "dangerousAdverseEffects": "Hepatotoxicidade grave, síndrome eosinofílica/vasculite e interação anticoagulante.",
    "adverseEffects": "Cefaleia, náusea, diarreia e infecção.; Hepatotoxicidade grave, síndrome eosinofílica/vasculite e interação anticoagulante.",
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
    "safetyFlags": "Hepatotoxicidade grave, síndrome eosinofílica/vasculite e interação anticoagulante.",
    "alerts": "Hepatotoxicidade grave, síndrome eosinofílica/vasculite e interação anticoagulante.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=zafirlucaste",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=zafirlucaste"
  },
  "es": {
    "name": "Zafirlucaste",
    "class": "Antagonista do receptor de leucotrienos",
    "pharmacologicClass": "Antagonista do receptor de leucotrienos",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimidos em forças específicas.",
    "presentations": "Comprimidos em forças específicas.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância y exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo y eliminação na fonte primária.",
    "indications": "Manutenção da asma em pacientes elegíveis; no trata broncoespasmo agudo.",
    "dose": "Dose oral regular em jejum conforme idade/rótulo. Monitorar fígado y interação con varfarina; manter medicamento de resgate disponível.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "No inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "No inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Cefaleia, náusea, diarreia y infecção.",
    "dangerousAdverseEffects": "Hepatotoxicidade grave, síndrome eosinofílica/vasculite y interação anticoagulante.",
    "adverseEffects": "Cefaleia, náusea, diarreia y infecção.; Hepatotoxicidade grave, síndrome eosinofílica/vasculite y interação anticoagulante.",
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
    "safetyFlags": "Hepatotoxicidade grave, síndrome eosinofílica/vasculite y interação anticoagulante.",
    "alerts": "Hepatotoxicidade grave, síndrome eosinofílica/vasculite y interação anticoagulante.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=zafirlucaste",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=zafirlucaste"
  }
};})();
/* GOLD33_SELECTIVE:zafirlucaste:END */
/* GOLD33_SELECTIVE:fluticasona:START */
;(function(){var db=window.PNEUMOLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="fluticasona";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:fluticasona:"+matches.length);drug=matches[0];}else{drug=db&&db["fluticasona"];if(!drug&&db){var keys=Object.keys(db).filter(function(key){return key.toLowerCase()==="fluticasona";});if(keys.length>1)throw new Error("GOLD33_CANONICAL_CARDINALITY:fluticasona:"+keys.length);if(keys.length===1)drug=db[keys[0]];}if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:fluticasona");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "036",
    "requiredFieldCount": 33,
    "approvedSha256": "c6145d4887f3525a184934302d2876e8e6a0206672c691f4b48588959dc5a435",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Fluticasona",
    "class": "Corticosteroide inalatório/intranasal/tópico",
    "pharmacologicClass": "Agonista local do receptor glicocorticoide",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Propionato/furoato em sprays nasais, inaladores e formas tópicas; doses não intercambiáveis.",
    "presentations": "Propionato/furoato em sprays nasais, inaladores e formas tópicas; doses não intercambiáveis.",
    "mechanism": "Agonista local do receptor glicocorticoide. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Baixa biodisponibilidade oral; metabolismo CYP3A4; exposição depende da via.",
    "indications": "Asma de manutenção, rinite e dermatoses conforme éster, dispositivo e formulação.",
    "dose": "Dose depende totalmente de via/produto; intranasal adulto frequentemente 1–2 jatos por narina/dia, e inalatório conforme dispositivo e gravidade.",
    "pediatricDose": "Idade mínima e dose variam por produto; monitorar crescimento. AUTOMATABLE=NO.",
    "renalDose": "Sem ajuste usual.",
    "hepaticDose": "Cautela em hepatopatia por maior exposição sistêmica.",
    "commonAdverseEffects": "Epistaxe, irritação, disfonia e candidíase oral.",
    "dangerousAdverseEffects": "Broncoespasmo paradoxal, supressão adrenal, glaucoma/catarata e infecções.",
    "adverseEffects": "Epistaxe, irritação, disfonia e candidíase oral. Graves: Broncoespasmo paradoxal, supressão adrenal, glaucoma/catarata e infecções.",
    "contraindications": "Hipersensibilidade; inaladores com lactose podem contraindicar alergia grave a proteína do leite.",
    "interactions": "Inibidores fortes CYP3A4, especialmente ritonavir/cobicistate, aumentam efeitos sistêmicos.",
    "monitoring": "Controle de sintomas, técnica, crescimento, candidíase, olhos e supressão adrenal em altas doses.",
    "administration": "Ensinar técnica; enxaguar boca após inalação e direcionar spray nasal longe do septo.",
    "preparation": "Não misturar; preparar/acionar conforme dispositivo.",
    "infusionProtocol": "Não aplicável; não usar para broncoespasmo agudo.",
    "pregnancy": "Usar menor dose eficaz.",
    "lactation": "Exposição sistêmica baixa; avaliar produto e risco-benefício.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Broncoespasmo paradoxal, supressão adrenal, glaucoma/catarata e infecções. Dose bloqueada sem éster, via, dispositivo, concentração, idade e indicação; formulações não são intercambiáveis.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=fluticasone",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2019/020121s044lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=fluticasone"
  },
  "es": {
    "name": "Fluticasona",
    "class": "Corticoide inhalado/intranasal/tópico",
    "pharmacologicClass": "Agonista local del receptor glucocorticoide",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Propionato/furoato en aerosoles nasales, inhaladores y formas tópicas; dosis no intercambiables.",
    "presentations": "Propionato/furoato en aerosoles nasales, inhaladores y formas tópicas; dosis no intercambiables.",
    "mechanism": "Agonista local del receptor glucocorticoide. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Baja biodisponibilidad oral; metabolismo CYP3A4; exposición depende de vía.",
    "indications": "Asma de mantenimiento, rinitis y dermatosis según éster, dispositivo y formulación.",
    "dose": "Dosis depende totalmente de vía/producto; intranasal adulto frecuentemente 1–2 disparos por fosa/día, e inhalado según dispositivo y gravedad.",
    "pediatricDose": "Edad mínima y dosis varían por producto; vigilar crecimiento. AUTOMATABLE=NO.",
    "renalDose": "Sin ajuste habitual.",
    "hepaticDose": "Precaución en hepatopatía por mayor exposición sistémica.",
    "commonAdverseEffects": "Epistaxis, irritación, disfonía y candidiasis oral.",
    "dangerousAdverseEffects": "Broncoespasmo paradójico, supresión suprarrenal, glaucoma/catarata e infecciones.",
    "adverseEffects": "Epistaxis, irritación, disfonía y candidiasis oral. Graves: Broncoespasmo paradójico, supresión suprarrenal, glaucoma/catarata e infecciones.",
    "contraindications": "Hipersensibilidad; inhaladores con lactosa pueden contraindicar alergia grave a proteína de leche.",
    "interactions": "Inhibidores potentes CYP3A4, especialmente ritonavir/cobicistat, aumentan efectos sistémicos.",
    "monitoring": "Control de síntomas, técnica, crecimiento, candidiasis, ojos y supresión suprarrenal en dosis altas.",
    "administration": "Enseñar técnica; enjuagar boca tras inhalación y dirigir aerosol nasal lejos del tabique.",
    "preparation": "No mezclar; cebar/accionar según dispositivo.",
    "infusionProtocol": "No aplicable; no usar para broncoespasmo agudo.",
    "pregnancy": "Usar menor dosis eficaz.",
    "lactation": "Exposición sistémica baja; evaluar producto y riesgo-beneficio.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Broncoespasmo paradójico, supresión suprarrenal, glaucoma/catarata e infecciones. Dose bloqueada sem éster, via, dispositivo, concentração, idade e indicação; formulações não são intercambiáveis.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=fluticasone",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2019/020121s044lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=fluticasone"
  }
};})();
/* GOLD33_SELECTIVE:fluticasona:END */
/* GOLD33_SELECTIVE:fluticasona_salmeterol:START */
;(function(){var db=window.PNEUMOLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="fluticasona_salmeterol";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:fluticasona_salmeterol:"+matches.length);drug=matches[0];}else{drug=db&&db["fluticasona_salmeterol"];if(!drug&&db){var keys=Object.keys(db).filter(function(key){return key.toLowerCase()==="fluticasona_salmeterol";});if(keys.length>1)throw new Error("GOLD33_CANONICAL_CARDINALITY:fluticasona_salmeterol:"+keys.length);if(keys.length===1)drug=db[keys[0]];}if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:fluticasona_salmeterol");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "036",
    "requiredFieldCount": 33,
    "approvedSha256": "c6145d4887f3525a184934302d2876e8e6a0206672c691f4b48588959dc5a435",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Fluticasona + salmeterol",
    "class": "Corticosteroide inalatório + LABA",
    "pharmacologicClass": "Anti-inflamatório + broncodilatação beta2 prolongada",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Pó inalatório 100/50, 250/50 e 500/50 microgramas/dose; aerossóis têm outras forças.",
    "presentations": "Pó inalatório 100/50, 250/50 e 500/50 microgramas/dose; aerossóis têm outras forças.",
    "mechanism": "Anti-inflamatório + broncodilatação beta2 prolongada. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Fluticasona via CYP3A4; salmeterol com ação ~12 h.",
    "indications": "Manutenção da asma e, em produtos/forças específicos, DPOC.",
    "dose": "Pó: 1 inalação a cada 12 h; força pela indicação e gravidade. DPOC costuma usar 250/50 conforme rótulo.",
    "pediatricDose": "Asma ≥4 anos: somente produtos/forças aprovados, frequentemente 100/50 a cada 12 h entre 4–11 anos. AUTOMATABLE=NO.",
    "renalDose": "Sem ajuste usual.",
    "hepaticDose": "Cautela em hepatopatia.",
    "commonAdverseEffects": "Candidíase, disfonia, cefaleia, tremor e palpitações.",
    "dangerousAdverseEffects": "Broncoespasmo paradoxal, crise relacionada a LABA inadequado, arritmia, hipocalemia e supressão adrenal.",
    "adverseEffects": "Candidíase, disfonia, cefaleia, tremor e palpitações. Graves: Broncoespasmo paradoxal, crise relacionada a LABA inadequado, arritmia, hipocalemia e supressão adrenal.",
    "contraindications": "Hipersensibilidade; alergia grave à proteína do leite para pó com lactose; crise asmática aguda.",
    "interactions": "CYP3A4 fortes, beta-bloqueadores, diuréticos, IMAO/tricíclicos e outros LABA.",
    "monitoring": "Sintomas, resgate, técnica, candidíase, crescimento, K, FC e olhos.",
    "administration": "Inalar conforme dispositivo; enxaguar boca; não usar como resgate nem exceder 2x/dia.",
    "preparation": "Não lavar inalador de pó nem engolir dose; manter seco.",
    "infusionProtocol": "Não aplicável.",
    "pregnancy": "Usar se controle justificar.",
    "lactation": "Avaliar risco-benefício.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Broncoespasmo paradoxal, crise relacionada a LABA inadequado, arritmia, hipocalemia e supressão adrenal. Seleção bloqueada sem diagnóstico, idade, gravidade, dispositivo/força, terapia atual e plano de resgate.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=fluticasone+salmeterol",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2019/021077s061lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=fluticasone+salmeterol"
  },
  "es": {
    "name": "Fluticasona + salmeterol",
    "class": "Corticoide inhalado + LABA",
    "pharmacologicClass": "Antiinflamatorio + broncodilatación beta2 prolongada",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Polvo inhalado 100/50, 250/50 y 500/50 microgramos/dosis; aerosoles tienen otras concentraciones.",
    "presentations": "Polvo inhalado 100/50, 250/50 y 500/50 microgramos/dosis; aerosoles tienen otras concentraciones.",
    "mechanism": "Antiinflamatorio + broncodilatación beta2 prolongada. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Fluticasona vía CYP3A4; salmeterol con acción ~12 h.",
    "indications": "Mantenimiento del asma y, en productos/concentraciones específicos, EPOC.",
    "dose": "Polvo: 1 inhalación cada 12 h; concentración por indicación y gravedad. EPOC suele usar 250/50 según ficha.",
    "pediatricDose": "Asma ≥4 años: solo productos/concentraciones aprobados, frecuentemente 100/50 cada 12 h entre 4–11 años. AUTOMATABLE=NO.",
    "renalDose": "Sin ajuste habitual.",
    "hepaticDose": "Precaución en hepatopatía.",
    "commonAdverseEffects": "Candidiasis, disfonía, cefalea, temblor y palpitaciones.",
    "dangerousAdverseEffects": "Broncoespasmo paradójico, crisis por LABA inadecuado, arritmia, hipopotasemia y supresión suprarrenal.",
    "adverseEffects": "Candidiasis, disfonía, cefalea, temblor y palpitaciones. Graves: Broncoespasmo paradójico, crisis por LABA inadecuado, arritmia, hipopotasemia y supresión suprarrenal.",
    "contraindications": "Hipersensibilidad; alergia grave a proteína de leche para polvo con lactosa; crisis asmática aguda.",
    "interactions": "CYP3A4 potentes, betabloqueantes, diuréticos, IMAO/tricíclicos y otros LABA.",
    "monitoring": "Síntomas, rescate, técnica, candidiasis, crecimiento, K, FC y ojos.",
    "administration": "Inhalar según dispositivo; enjuagar boca; no usar como rescate ni superar 2 veces/día.",
    "preparation": "No lavar inhalador de polvo ni ingerir dosis; mantener seco.",
    "infusionProtocol": "No aplicable.",
    "pregnancy": "Usar si control lo justifica.",
    "lactation": "Evaluar riesgo-beneficio.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Broncoespasmo paradójico, crisis por LABA inadecuado, arritmia, hipopotasemia y supresión suprarrenal. Seleção bloqueada sem diagnóstico, idade, gravidade, dispositivo/força, terapia atual e plano de resgate.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=fluticasone+salmeterol",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2019/021077s061lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=fluticasone+salmeterol"
  }
};})();
/* GOLD33_SELECTIVE:fluticasona_salmeterol:END */
/* GOLD33_SELECTIVE:fluticasona_umeclidinio_vilanterol:START */
;(function(){var db=window.PNEUMOLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="fluticasona_umeclidinio_vilanterol";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:fluticasona_umeclidinio_vilanterol:"+matches.length);drug=matches[0];}else{drug=db&&db["fluticasona_umeclidinio_vilanterol"];if(!drug&&db){var keys=Object.keys(db).filter(function(key){return key.toLowerCase()==="fluticasona_umeclidinio_vilanterol";});if(keys.length>1)throw new Error("GOLD33_CANONICAL_CARDINALITY:fluticasona_umeclidinio_vilanterol:"+keys.length);if(keys.length===1)drug=db[keys[0]];}if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:fluticasona_umeclidinio_vilanterol");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "036",
    "requiredFieldCount": 33,
    "approvedSha256": "c6145d4887f3525a184934302d2876e8e6a0206672c691f4b48588959dc5a435",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Fluticasona + umeclidínio + vilanterol",
    "class": "ICS + LAMA + LABA",
    "pharmacologicClass": "Anti-inflamatório e broncodilatação muscarínica/beta2 prolongada",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Pó 100/62,5/25 ou 200/62,5/25 microgramas por inalação.",
    "presentations": "Pó 100/62,5/25 ou 200/62,5/25 microgramas por inalação.",
    "mechanism": "Anti-inflamatório e broncodilatação muscarínica/beta2 prolongada. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Componentes de ação prolongada; fluticasona/vilanterol metabolizados por CYP3A4.",
    "indications": "Manutenção de DPOC e asma em adultos conforme força; não é medicamento de resgate.",
    "dose": "1 inalação VO uma vez/dia; DPOC: 100/62,5/25; asma: 100 ou 200/62,5/25 conforme controle.",
    "pediatricDose": "Não indicado <18 anos. AUTOMATABLE=NO.",
    "renalDose": "Sem ajuste usual.",
    "hepaticDose": "Cautela em hepatopatia moderada/grave.",
    "commonAdverseEffects": "Infecção respiratória, candidíase, cefaleia, dor e tosse.",
    "dangerousAdverseEffects": "Pneumonia, broncoespasmo paradoxal, arritmia, glaucoma, retenção urinária e supressão adrenal.",
    "adverseEffects": "Infecção respiratória, candidíase, cefaleia, dor e tosse. Graves: Pneumonia, broncoespasmo paradoxal, arritmia, glaucoma, retenção urinária e supressão adrenal.",
    "contraindications": "Hipersensibilidade grave à proteína do leite ou componentes.",
    "interactions": "CYP3A4 fortes, anticolinérgicos, beta-bloqueadores, IMAO/tricíclicos, diuréticos e outros LABA/LAMA.",
    "monitoring": "Sintomas/exacerbações, resgate, técnica, candidíase, glaucoma, retenção urinária, K e FC.",
    "administration": "Uma inalação no mesmo horário; enxaguar boca; não repetir no mesmo dia.",
    "preparation": "Dispositivo pronto; abrir bandeja apenas para uso e manter seco.",
    "infusionProtocol": "Não aplicável; manter broncodilatador de resgate.",
    "pregnancy": "Dados insuficientes; usar se benefício justificar.",
    "lactation": "Dados insuficientes.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Pneumonia, broncoespasmo paradoxal, arritmia, glaucoma, retenção urinária e supressão adrenal. Terapia tripla bloqueada sem diagnóstico, controle/exacerbações, idade, força, glaucoma/retenção e conciliação de LABA/LAMA/ICS.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=fluticasone+umeclidinium+vilanterol",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2020/209482s010s011lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=fluticasone+umeclidinium+vilanterol"
  },
  "es": {
    "name": "Fluticasona + umeclidinio + vilanterol",
    "class": "ICS + LAMA + LABA",
    "pharmacologicClass": "Antiinflamatorio y broncodilatación muscarínica/beta2 prolongada",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Polvo 100/62,5/25 o 200/62,5/25 microgramos por inhalación.",
    "presentations": "Polvo 100/62,5/25 o 200/62,5/25 microgramos por inhalación.",
    "mechanism": "Antiinflamatorio y broncodilatación muscarínica/beta2 prolongada. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Componentes de acción larga; fluticasona/vilanterol metabolizados por CYP3A4.",
    "indications": "Mantenimiento de EPOC y asma en adultos según concentración; no es rescate.",
    "dose": "1 inhalación oral una vez/día; EPOC: 100/62,5/25; asma: 100 o 200/62,5/25 según control.",
    "pediatricDose": "No indicado <18 años. AUTOMATABLE=NO.",
    "renalDose": "Sin ajuste habitual.",
    "hepaticDose": "Precaución en hepatopatía moderada/grave.",
    "commonAdverseEffects": "Infección respiratoria, candidiasis, cefalea, dolor y tos.",
    "dangerousAdverseEffects": "Neumonía, broncoespasmo paradójico, arritmia, glaucoma, retención urinaria y supresión suprarrenal.",
    "adverseEffects": "Infección respiratoria, candidiasis, cefalea, dolor y tos. Graves: Neumonía, broncoespasmo paradójico, arritmia, glaucoma, retención urinaria y supresión suprarrenal.",
    "contraindications": "Hipersensibilidad grave a proteína de leche o componentes.",
    "interactions": "CYP3A4 potentes, anticolinérgicos, betabloqueantes, IMAO/tricíclicos, diuréticos y otros LABA/LAMA.",
    "monitoring": "Síntomas/exacerbaciones, rescate, técnica, candidiasis, glaucoma, retención urinaria, K y FC.",
    "administration": "Una inhalación a la misma hora; enjuagar boca; no repetir el mismo día.",
    "preparation": "Dispositivo listo; abrir bandeja solo para uso y mantener seco.",
    "infusionProtocol": "No aplicable; mantener broncodilatador de rescate.",
    "pregnancy": "Datos insuficientes; usar si beneficio justifica.",
    "lactation": "Datos insuficientes.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Neumonía, broncoespasmo paradójico, arritmia, glaucoma, retención urinaria y supresión suprarrenal. Terapia tripla bloqueada sem diagnóstico, controle/exacerbações, idade, força, glaucoma/retenção e conciliação de LABA/LAMA/ICS.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=fluticasone+umeclidinium+vilanterol",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2020/209482s010s011lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=fluticasone+umeclidinium+vilanterol"
  }
};})();
/* GOLD33_SELECTIVE:fluticasona_umeclidinio_vilanterol:END */
/* GOLD33_SELECTIVE:fluticasona_vilanterol:START */
;(function(){var db=window.PNEUMOLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="fluticasona_vilanterol";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:fluticasona_vilanterol:"+matches.length);drug=matches[0];}else{drug=db&&db["fluticasona_vilanterol"];if(!drug&&db){var keys=Object.keys(db).filter(function(key){return key.toLowerCase()==="fluticasona_vilanterol";});if(keys.length>1)throw new Error("GOLD33_CANONICAL_CARDINALITY:fluticasona_vilanterol:"+keys.length);if(keys.length===1)drug=db[keys[0]];}if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:fluticasona_vilanterol");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "036",
    "requiredFieldCount": 33,
    "approvedSha256": "c6145d4887f3525a184934302d2876e8e6a0206672c691f4b48588959dc5a435",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Fluticasona + vilanterol",
    "class": "ICS + LABA",
    "pharmacologicClass": "Anti-inflamatório + broncodilatação beta2 prolongada",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Pó inalatório 100/25 e 200/25 microgramas.",
    "presentations": "Pó inalatório 100/25 e 200/25 microgramas.",
    "mechanism": "Anti-inflamatório + broncodilatação beta2 prolongada. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Ação por 24 h; ambos metabolizados principalmente por CYP3A4.",
    "indications": "Manutenção de DPOC e asma conforme idade/força e registro; não é resgate.",
    "dose": "1 inalação uma vez/dia; DPOC geralmente 100/25; asma 100/25 ou 200/25 conforme controle.",
    "pediatricDose": "Indicação/força pediátrica depende do rótulo vigente e país; não extrapolar. AUTOMATABLE=NO.",
    "renalDose": "Sem ajuste usual.",
    "hepaticDose": "Cautela em hepatopatia; não exceder força recomendada no rótulo.",
    "commonAdverseEffects": "Nasofaringite, cefaleia, candidíase e disfonia.",
    "dangerousAdverseEffects": "Pneumonia, broncoespasmo paradoxal, arritmia, hipocalemia e supressão adrenal.",
    "adverseEffects": "Nasofaringite, cefaleia, candidíase e disfonia. Graves: Pneumonia, broncoespasmo paradoxal, arritmia, hipocalemia e supressão adrenal.",
    "contraindications": "Hipersensibilidade grave à proteína do leite/componentes e crise aguda.",
    "interactions": "CYP3A4 fortes, beta-bloqueadores, IMAO/tricíclicos, diuréticos e outros LABA.",
    "monitoring": "Controle, resgate, técnica, candidíase, crescimento quando aplicável, K e FC.",
    "administration": "Inalar 1x/dia no mesmo horário; enxaguar boca; não usar para sintomas agudos.",
    "preparation": "Dispositivo pronto e seco.",
    "infusionProtocol": "Não aplicável.",
    "pregnancy": "Usar se necessário ao controle.",
    "lactation": "Dados insuficientes; avaliar.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Pneumonia, broncoespasmo paradoxal, arritmia, hipocalemia e supressão adrenal. Dose bloqueada sem diagnóstico, idade, país/rótulo, força, controle, exacerbações e plano de resgate.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=fluticasone+vilanterol",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2019/204275s016lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=fluticasone+vilanterol"
  },
  "es": {
    "name": "Fluticasona + vilanterol",
    "class": "ICS + LABA",
    "pharmacologicClass": "Antiinflamatorio + broncodilatación beta2 prolongada",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Polvo inhalado 100/25 y 200/25 microgramos.",
    "presentations": "Polvo inhalado 100/25 y 200/25 microgramos.",
    "mechanism": "Antiinflamatorio + broncodilatación beta2 prolongada. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Acción por 24 h; ambos metabolizados principalmente por CYP3A4.",
    "indications": "Mantenimiento de EPOC y asma según edad/concentración y registro; no es rescate.",
    "dose": "1 inhalación una vez/día; EPOC generalmente 100/25; asma 100/25 o 200/25 según control.",
    "pediatricDose": "Indicación/concentración pediátrica depende de ficha vigente y país; no extrapolar. AUTOMATABLE=NO.",
    "renalDose": "Sin ajuste habitual.",
    "hepaticDose": "Precaución en hepatopatía; no superar concentración recomendada en ficha.",
    "commonAdverseEffects": "Nasofaringitis, cefalea, candidiasis y disfonía.",
    "dangerousAdverseEffects": "Neumonía, broncoespasmo paradójico, arritmia, hipopotasemia y supresión suprarrenal.",
    "adverseEffects": "Nasofaringitis, cefalea, candidiasis y disfonía. Graves: Neumonía, broncoespasmo paradójico, arritmia, hipopotasemia y supresión suprarrenal.",
    "contraindications": "Hipersensibilidad grave a proteína de leche/componentes y crisis aguda.",
    "interactions": "CYP3A4 potentes, betabloqueantes, IMAO/tricíclicos, diuréticos y otros LABA.",
    "monitoring": "Control, rescate, técnica, candidiasis, crecimiento cuando aplique, K y FC.",
    "administration": "Inhalar 1 vez/día a la misma hora; enjuagar boca; no usar para síntomas agudos.",
    "preparation": "Dispositivo listo y seco.",
    "infusionProtocol": "No aplicable.",
    "pregnancy": "Usar si es necesario para control.",
    "lactation": "Datos insuficientes; evaluar.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Neumonía, broncoespasmo paradójico, arritmia, hipopotasemia y supresión suprarrenal. Dose bloqueada sem diagnóstico, idade, país/rótulo, força, controle, exacerbações e plano de resgate.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=fluticasone+vilanterol",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2019/204275s016lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=fluticasone+vilanterol"
  }
};})();
/* GOLD33_SELECTIVE:fluticasona_vilanterol:END */
