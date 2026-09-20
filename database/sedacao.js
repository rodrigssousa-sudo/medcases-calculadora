/* ============================================================
   MedCases Pro — Módulo: SEDAÇÃO / NEUROINTENSIVISMO
   Expõe: window.SEDACAO_DRUGS_DB

   BUILD 348 — Lote 1 (Sedação UTI + Neurologia)
   Propofol, Midazolam, Dexmedetomidina, Diazepam, Haloperidol
   ============================================================ */

(function () {
  'use strict';
  if (typeof window.SEDACAO_DRUGS_DB !== 'object' || Array.isArray(window.SEDACAO_DRUGS_DB)) {
    window.SEDACAO_DRUGS_DB = {};
  }

  Object.assign(window.SEDACAO_DRUGS_DB, {

/* ── PROPOFOL ───────────────────────────────────────────────────────── */
    "propofol": {
      "name": {
        "pt": "Propofol",
        "es": "Propofol"
      },
      "category": "sedacao_neurologia",
      "class": {
        "pt": "Anestésico geral intravenoso e sedativo-hipnótico",
        "es": "Anestésico general intravenoso y sedante-hipnótico"
      },
      "indications": {
        "pt": [
          "Indução de anestesia geral em pacientes ≥3 anos",
          "Manutenção de anestesia geral em pacientes ≥2 meses",
          "Sedação MAC em adultos",
          "Sedação em UTI de adultos intubados e ventilados mecanicamente"
        ],
        "es": [
          "Inducción de anestesia general en pacientes ≥3 años",
          "Mantenimiento de anestesia general en pacientes ≥2 meses",
          "Sedación MAC en adultos",
          "Sedación en UCI de adultos intubados y ventilados mecánicamente"
        ]
      },
      "commercialNames": {
        "br": [
          "Diprivan",
          "Provive"
        ],
        "ar": [
          "Diprivan"
        ]
      },
      "presentation": {
        "pt": [
          "Emulsão injetável IV; apresentação de referência 10 mg/mL"
        ],
        "es": [
          "Emulsión inyectable IV; presentación de referencia 10 mg/mL"
        ]
      },
      "mechanism": {
        "pt": "Potencializa a neurotransmissão inibitória mediada por GABA-A, produzindo hipnose de início rápido. Não fornece analgesia clinicamente adequada como agente isolado.",
        "es": "Potencia la neurotransmisión inhibitoria mediada por GABA-A, produciendo hipnosis de inicio rápido. No aporta analgesia clínicamente adecuada como agente aislado."
      },
      "dose": {
        "adult": {
          "pt": "Indução em adulto saudável <65 anos: 2–2,5 mg/kg IV titulados. Sedação em UTI: iniciar 5 mcg/kg/min e titular em incrementos de 5–10 mcg/kg/min; manutenção usual 5–50 mcg/kg/min. Evitar escalada desnecessária; doses >4 mg/kg/h exigem avaliação rigorosa de risco/benefício.",
          "es": "Inducción en adulto sano <65 años: 2–2,5 mg/kg IV titulados. Sedación en UCI: iniciar 5 mcg/kg/min y titular en incrementos de 5–10 mcg/kg/min; mantenimiento habitual 5–50 mcg/kg/min. Evitar escalada innecesaria; dosis >4 mg/kg/h requieren evaluación rigurosa de riesgo/beneficio."
        },
        "pediatric": {
          "pt": "Indução 3–16 anos: 2,5–3,5 mg/kg IV. Manutenção de anestesia ≥2 meses: aproximadamente 125–300 mcg/kg/min, titulada. Sedação MAC pediátrica não é recomendada e sedação pediátrica em UTI não é indicada na rotulagem.",
          "es": "Inducción 3–16 años: 2,5–3,5 mg/kg IV. Mantenimiento de anestesia ≥2 meses: aproximadamente 125–300 mcg/kg/min, titulado. La sedación MAC pediátrica no está recomendada y la sedación pediátrica en UCI no está indicada en el rotulado."
        }
      },
      "administration": {
        "pt": [
          "Usar técnica asséptica estrita; emulsão lipídica favorece contaminação.",
          "Iniciar administração prontamente e concluir/descartar produto e equipo conforme rotulagem, em até 12 h após abertura.",
          "Administrar apenas por pessoal treinado em via aérea e ressuscitação."
        ],
        "es": [
          "Usar técnica aséptica estricta; la emulsión lipídica favorece contaminación.",
          "Iniciar la administración prontamente y completar/desechar producto y equipo según rotulado, dentro de 12 h de la apertura.",
          "Administrar solo por personal entrenado en vía aérea y reanimación."
        ]
      },
      "renalAdjustment": {
        "required": false,
        "message": {
          "pt": "Não há ajuste renal fixo estabelecido; titular à resposta clínica e hemodinâmica.",
          "es": "No hay ajuste renal fijo establecido; titular según respuesta clínica y hemodinámica."
        }
      },
      "hepaticAdjustment": {
        "required": false,
        "message": {
          "pt": "Não há ajuste hepático fixo universal; titular à resposta, especialmente em pacientes frágeis ou com alteração hemodinâmica.",
          "es": "No hay ajuste hepático fijo universal; titular según respuesta, especialmente en pacientes frágiles o con alteración hemodinámica."
        }
      },
      "commonAdverseEffects": {
        "pt": [
          "Hipotensão",
          "Bradicardia",
          "Apneia/depressão respiratória",
          "Dor à injeção",
          "Hiperlipidemia"
        ],
        "es": [
          "Hipotensión",
          "Bradicardia",
          "Apnea/depresión respiratoria",
          "Dolor a la inyección",
          "Hiperlipidemia"
        ]
      },
      "dangerousAdverseEffects": {
        "pt": [
          "Depressão cardiovascular grave",
          "Bradicardia, assistolia ou parada cardíaca",
          "Síndrome de infusão do propofol (PRIS)",
          "Hipertrigliceridemia/pancreatite"
        ],
        "es": [
          "Depresión cardiovascular grave",
          "Bradicardia, asistolia o paro cardíaco",
          "Síndrome de infusión de propofol (PRIS)",
          "Hipertrigliceridemia/pancreatitis"
        ]
      },
      "contraindications": {
        "absolute": {
          "pt": [
            "Hipersensibilidade ao propofol ou componentes",
            "História de anafilaxia a ovo ou soja conforme a rotulagem de referência"
          ],
          "es": [
            "Hipersensibilidad a propofol o componentes",
            "Antecedente de anafilaxia a huevo o soja según el rotulado de referencia"
          ]
        },
        "relative": {
          "pt": [
            "Hipovolemia, choque ou instabilidade hemodinâmica: maior risco de hipotensão",
            "Distúrbios importantes do metabolismo lipídico"
          ],
          "es": [
            "Hipovolemia, choque o inestabilidad hemodinámica: mayor riesgo de hipotensión",
            "Trastornos importantes del metabolismo lipídico"
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
          "pt": "Propofol pode causar perda rápida de consciência, apneia e hipotensão e não é analgésico. Sedação pediátrica em UTI não é indicação aprovada na rotulagem de referência.",
          "es": "Propofol puede causar pérdida rápida de conciencia, apnea e hipotensión y no es analgésico. La sedación pediátrica en UCI no es una indicación aprobada en el rotulado de referencia."
        }
      }
    },

/* ── MIDAZOLAM ──────────────────────────────────────────────────────── */
    "midazolam": {
      "name": {
        "pt": "Midazolam",
        "es": "Midazolam"
      },
      "category": "sedacao_neurologia",
      "class": {
        "pt": "Benzodiazepínico de curta ação",
        "es": "Benzodiazepina de acción corta"
      },
      "indications": {
        "pt": [
          "Sedação/anxiolise/amnésia pré-operatória por IM ou IV",
          "Sedação procedural IV",
          "Indução de anestesia geral IV",
          "Sedação contínua de pacientes intubados e ventilados em cuidados críticos"
        ],
        "es": [
          "Sedación/ansiolisis/amnesia preoperatoria por IM o IV",
          "Sedación procedimental IV",
          "Inducción de anestesia general IV",
          "Sedación continua de pacientes intubados y ventilados en cuidados críticos"
        ]
      },
      "commercialNames": {
        "br": [
          "Dormonid"
        ],
        "ar": [
          "Dormicum"
        ]
      },
      "presentation": {
        "pt": [
          "Solução injetável 1 mg/mL e 5 mg/mL; outras apresentações variam por mercado"
        ],
        "es": [
          "Solución inyectable 1 mg/mL y 5 mg/mL; otras presentaciones varían según mercado"
        ]
      },
      "mechanism": {
        "pt": "Benzodiazepínico que potencializa a ação do GABA no receptor GABA-A, produzindo sedação, ansiólise, amnésia e efeito anticonvulsivante. Metabolizado principalmente por CYP3A4.",
        "es": "Benzodiazepina que potencia la acción de GABA en el receptor GABA-A, produciendo sedación, ansiolisis, amnesia y efecto anticonvulsivante. Se metaboliza principalmente por CYP3A4."
      },
      "dose": {
        "adult": {
          "pt": "Sedação procedural em adulto saudável <60 anos: titular lentamente; dose inicial não deve exceder 2,5 mg IV em ≥2 min. Sedação contínua em UTI: se necessário, carga 0,01–0,05 mg/kg; infusão inicial 0,02–0,10 mg/kg/h, sempre na menor taxa eficaz.",
          "es": "Sedación procedimental en adulto sano <60 años: titular lentamente; la dosis inicial no debe exceder 2,5 mg IV en ≥2 min. Sedación continua en UCI: si se necesita, carga 0,01–0,05 mg/kg; infusión inicial 0,02–0,10 mg/kg/h, siempre a la menor tasa eficaz."
        },
        "pediatric": {
          "pt": "<6 meses não intubados: dados limitados e alto risco de hipoventilação; titular pequenas doses. 6 meses–5 anos: inicial 0,05–0,1 mg/kg IV; total até 0,6 mg/kg, geralmente ≤6 mg. 6–12 anos: inicial 0,025–0,05 mg/kg; total até 0,4 mg/kg, geralmente ≤10 mg. 12–16 anos: dose de adulto. UTI intubado: carga 0,05–0,2 mg/kg e infusão 0,06–0,12 mg/kg/h.",
          "es": "<6 meses no intubados: datos limitados y alto riesgo de hipoventilación; titular dosis pequeñas. 6 meses–5 años: inicial 0,05–0,1 mg/kg IV; total hasta 0,6 mg/kg, usualmente ≤6 mg. 6–12 años: inicial 0,025–0,05 mg/kg; total hasta 0,4 mg/kg, usualmente ≤10 mg. 12–16 años: dosis de adulto. UCI intubado: carga 0,05–0,2 mg/kg e infusión 0,06–0,12 mg/kg/h."
        }
      },
      "administration": {
        "pt": [
          "Administrar IV lentamente e aguardar pelo menos 2 min para avaliar plenamente o efeito antes de redosar.",
          "Para sedação procedural, 1 mg/mL facilita titulação lenta; 1 e 5 mg/mL podem ser diluídos em SF 0,9% ou dextrose 5%.",
          "Monitorizar continuamente ventilação e oxigenação; equipamento de via aérea e reversão deve estar disponível."
        ],
        "es": [
          "Administrar IV lentamente y esperar al menos 2 min para evaluar plenamente el efecto antes de redosificar.",
          "Para sedación procedimental, 1 mg/mL facilita la titulación lenta; 1 y 5 mg/mL pueden diluirse en SF 0,9% o dextrosa 5%.",
          "Monitorizar continuamente ventilación y oxigenación; debe estar disponible equipo para vía aérea y reversión."
        ]
      },
      "renalAdjustment": {
        "required": true,
        "message": {
          "pt": "Insuficiência renal pode prolongar meia-vida de midazolam e metabólitos e atrasar recuperação, sobretudo em insuficiência renal aguda; titular e reavaliar. A relação entre acúmulo do metabólito e sedação prolongada não é totalmente definida.",
          "es": "La insuficiencia renal puede prolongar la vida media de midazolam y metabolitos y retrasar la recuperación, sobre todo en insuficiencia renal aguda; titular y reevaluar. La relación entre acumulación del metabolito y sedación prolongada no está totalmente definida."
        }
      },
      "hepaticAdjustment": {
        "required": true,
        "message": {
          "pt": "Cirrose pode aumentar a meia-vida e reduzir o clearance; usar doses menores e titulação mais lenta conforme resposta.",
          "es": "La cirrosis puede aumentar la vida media y reducir el clearance; usar dosis menores y titulación más lenta según respuesta."
        }
      },
      "commonAdverseEffects": {
        "pt": [
          "Sonolência/sedação excessiva",
          "Hipotensão",
          "Amnésia",
          "Agitação paradoxal",
          "Dor no local de injeção"
        ],
        "es": [
          "Somnolencia/sedación excesiva",
          "Hipotensión",
          "Amnesia",
          "Agitación paradójica",
          "Dolor en el sitio de inyección"
        ]
      },
      "dangerousAdverseEffects": {
        "pt": [
          "Hipoventilação, obstrução de via aérea e apneia",
          "Parada cardiorrespiratória em contexto de depressão respiratória grave",
          "Sedação prolongada em pacientes suscetíveis"
        ],
        "es": [
          "Hipoventilación, obstrucción de vía aérea y apnea",
          "Paro cardiorrespiratorio en contexto de depresión respiratoria grave",
          "Sedación prolongada en pacientes susceptibles"
        ]
      },
      "contraindications": {
        "absolute": {
          "pt": [
            "Hipersensibilidade ao midazolam",
            "Glaucoma agudo de ângulo estreito"
          ],
          "es": [
            "Hipersensibilidad a midazolam",
            "Glaucoma agudo de ángulo estrecho"
          ]
        },
        "relative": {
          "pt": [
            "Uso concomitante de opioides ou outros depressores do SNC",
            "Inibidores potentes de CYP3A4",
            "Idosos, baixo débito cardíaco, disfunção renal ou hepática"
          ],
          "es": [
            "Uso concomitante de opioides u otros depresores del SNC",
            "Inhibidores potentes de CYP3A4",
            "Adultos mayores, bajo gasto cardíaco, disfunción renal o hepática"
          ]
        }
      },
      "safetyFlags": {
        "bleedingRisk": false,
        "renalHighRisk": true,
        "hepaticCaution": true,
        "antidoteAvailable": true,
        "highAlertMedication": true,
        "warning": {
          "pt": "Opioides e outros depressores do SNC aumentam o risco de sedação profunda e depressão respiratória. Titular lentamente e manter suporte ventilatório imediatamente disponível.",
          "es": "Los opioides y otros depresores del SNC aumentan el riesgo de sedación profunda y depresión respiratoria. Titular lentamente y mantener soporte ventilatorio inmediatamente disponible."
        }
      }
    },

/* ── DEXMEDETOMIDINA (PRECEDEX) ─────────────────────────────────────── */
    "dexmedetomidina": {
      "name": {
        "pt": "Dexmedetomidina",
        "es": "Dexmedetomidina"
      },
      "category": "sedacao_neurologia",
      "class": {
        "pt": "Agonista seletivo alfa-2 adrenérgico; sedativo",
        "es": "Agonista selectivo alfa-2 adrenérgico; sedante"
      },
      "indications": {
        "pt": [
          "Sedação de adultos inicialmente intubados e ventilados mecanicamente em UTI",
          "Sedação procedural de adultos não intubados",
          "Sedação de pacientes pediátricos de 1 mês a <18 anos durante procedimentos não invasivos"
        ],
        "es": [
          "Sedación de adultos inicialmente intubados y ventilados mecánicamente en UCI",
          "Sedación procedimental de adultos no intubados",
          "Sedación de pacientes pediátricos de 1 mes a <18 años durante procedimientos no invasivos"
        ]
      },
      "commercialNames": {
        "br": [
          "Precedex"
        ],
        "ar": [
          "Precedex"
        ]
      },
      "presentation": {
        "pt": [
          "Concentrado 100 mcg/mL para diluição; também existem apresentações prontas para uso conforme fabricante"
        ],
        "es": [
          "Concentrado 100 mcg/mL para dilución; también existen presentaciones listas para usar según fabricante"
        ]
      },
      "mechanism": {
        "pt": "Agonismo alfa-2 central reduz liberação de noradrenalina e produz sedação com relativa preservação da responsividade. Pode causar bradicardia, hipotensão e, durante dose de ataque, hipertensão transitória.",
        "es": "El agonismo alfa-2 central reduce la liberación de noradrenalina y produce sedación con relativa preservación de la respuesta. Puede causar bradicardia, hipotensión y, durante la dosis de carga, hipertensión transitoria."
      },
      "dose": {
        "adult": {
          "pt": "UTI adulto: carga 1 mcg/kg em 10 min quando indicada, seguida de 0,2–0,7 mcg/kg/h; ao trocar de outro sedativo, a carga pode não ser necessária. Procedural adulto: carga 1 mcg/kg em 10 min e manutenção 0,2–1 mcg/kg/h, frequentemente iniciada em 0,6 mcg/kg/h.",
          "es": "UCI adulto: carga 1 mcg/kg en 10 min cuando esté indicada, seguida de 0,2–0,7 mcg/kg/h; al cambiar desde otro sedante, la carga puede no ser necesaria. Procedimental adulto: carga 1 mcg/kg en 10 min y mantenimiento 0,2–1 mcg/kg/h, frecuentemente iniciado en 0,6 mcg/kg/h."
        },
        "pediatric": {
          "pt": "Procedimentos não invasivos: 1 mês–<2 anos, carga 1,5 mcg/kg em 10 min; 2–<18 anos, carga 2 mcg/kg em 10 min. Manutenção inicial 1,5 mcg/kg/h, titulada entre 0,5–1,5 mcg/kg/h. Segurança/eficácia para sedação pediátrica em UTI não estabelecidas.",
          "es": "Procedimientos no invasivos: 1 mes–<2 años, carga 1,5 mcg/kg en 10 min; 2–<18 años, carga 2 mcg/kg en 10 min. Mantenimiento inicial 1,5 mcg/kg/h, titulado entre 0,5–1,5 mcg/kg/h. Seguridad/eficacia para sedación pediátrica en UCI no establecidas."
        }
      },
      "administration": {
        "pt": [
          "Administrar com dispositivo de infusão controlada.",
          "Para frasco 200 mcg/2 mL (100 mcg/mL), diluir em SF 0,9% até concentração de 4 mcg/mL conforme rotulagem.",
          "Evitar administração IV rápida; monitorizar continuamente frequência cardíaca e pressão arterial."
        ],
        "es": [
          "Administrar con dispositivo de infusión controlada.",
          "Para vial 200 mcg/2 mL (100 mcg/mL), diluir en SF 0,9% hasta 4 mcg/mL según rotulado.",
          "Evitar administración IV rápida; monitorizar continuamente frecuencia cardíaca y presión arterial."
        ]
      },
      "renalAdjustment": {
        "required": false,
        "message": {
          "pt": "Farmacocinética não mostrou diferença relevante em insuficiência renal grave; não há ajuste renal fixo na rotulagem, mas titular clinicamente.",
          "es": "La farmacocinética no mostró diferencia relevante en insuficiencia renal grave; no hay ajuste renal fijo en el rotulado, pero debe titularse clínicamente."
        }
      },
      "hepaticAdjustment": {
        "required": true,
        "message": {
          "pt": "O clearance diminui com a gravidade da disfunção hepática; considerar redução de dose e titulação mais lenta.",
          "es": "El clearance disminuye con la gravedad de la disfunción hepática; considerar reducción de dosis y titulación más lenta."
        }
      },
      "commonAdverseEffects": {
        "pt": [
          "Bradicardia",
          "Hipotensão",
          "Boca seca",
          "Hipertensão transitória durante carga"
        ],
        "es": [
          "Bradicardia",
          "Hipotensión",
          "Boca seca",
          "Hipertensión transitoria durante la carga"
        ]
      },
      "dangerousAdverseEffects": {
        "pt": [
          "Bradicardia grave ou parada sinusal",
          "Hipotensão clinicamente importante",
          "Eventos respiratórios podem ocorrer e exigem monitorização"
        ],
        "es": [
          "Bradicardia grave o paro sinusal",
          "Hipotensión clínicamente importante",
          "Pueden ocurrir eventos respiratorios y requieren monitorización"
        ]
      },
      "contraindications": {
        "absolute": {
          "pt": [],
          "es": []
        },
        "relative": {
          "pt": [
            "Hipovolemia, bradicardia prévia, bloqueios de condução ou disfunção ventricular",
            "Uso concomitante de fármacos cronotrópicos negativos",
            "Disfunção hepática"
          ],
          "es": [
            "Hipovolemia, bradicardia previa, bloqueos de conducción o disfunción ventricular",
            "Uso concomitante de fármacos cronotrópicos negativos",
            "Disfunción hepática"
          ]
        }
      },
      "safetyFlags": {
        "bleedingRisk": false,
        "renalHighRisk": false,
        "hepaticCaution": true,
        "antidoteAvailable": false,
        "highAlertMedication": true,
        "warning": {
          "pt": "Pode ser mantida durante extubação em adultos quando clinicamente apropriado, mas isso não elimina a necessidade de monitorização respiratória e hemodinâmica. A rotulagem atual não lista contraindicações formais.",
          "es": "Puede mantenerse durante la extubación en adultos cuando sea clínicamente apropiado, pero esto no elimina la necesidad de monitorización respiratoria y hemodinámica. El rotulado actual no enumera contraindicaciones formales."
        }
      }
    },

/* ── DIAZEPAM ───────────────────────────────────────────────────────── */
    "diazepam": {
      name: { pt: 'Diazepam', es: 'Diazepam' },
      category: 'sedacao_neurologia',
      class: { pt: 'Benzodiazepínico de Longa Duração', es: 'Benzodiazepina de Larga Duración' },
      indications: {
        pt: ['Crise convulsiva aguda e Estado de Mal Epiléptico (Droga de primeira linha no PS)', 'Abstinência alcoólica (Prevenção de Delirium Tremens)', 'Espasmos musculares severos (Tétano, lesão medular)'],
        es: ['Crisis convulsiva aguda y Estado de Mal Epiléptico (Droga de primera línea en Urgencias)', 'Abstinencia alcohólica (Prevención de Delirium Tremens)', 'Espasmos musculares severos (Tétanos, lesión medular)']
      },
      commercialNames: { br: ['Valium', 'Compaz'], ar: ['Valium', 'Plidan'] },
      presentation: { pt: ['Ampolas IV 5 mg/mL (2 mL = 10mg)', 'Comprimidos 5 mg e 10 mg'], es: ['Ampollas IV 5 mg/mL (2 mL = 10mg)', 'Comprimidos 5 mg y 10 mg'] },
      mechanism: {
        pt: 'Potencializador do receptor GABA-A. A diferença do Midazolam é o seu altíssimo tempo de meia-vida no corpo. O Diazepam gera metabólitos ativos (desmetildiazepam) que continuam agindo no corpo do paciente por impressionantes 40 a 100 horas. Excelente para cobrir convulsões por dias e evitar que elas voltem logo após o ataque.',
        es: 'Potenciador del receptor GABA-A. La diferencia con el Midazolam es su altísimo tiempo de vida media en el cuerpo. El Diazepam genera metabolitos activos (desmetildiazepam) que continúan actuando en el cuerpo del paciente por impresionantes 40 a 100 horas. Excelente para cubrir convulsiones por días y evitar que vuelvan justo después del ataque.'
      },
      dose: {
        adult: {
          pt: 'Convulsão: 10 mg IV puro, a 2 mg por minuto. Pode repetir a cada 5-10 min (Máx 30 mg). Abstinência alcoólica: 10 mg VO/IV 6/6h.',
          es: 'Convulsión: 10 mg IV puro, a 2 mg por minuto. Puede repetir cada 5-10 min (Máx 30 mg). Abstinencia alcohólica: 10 mg VO/IV 6/6h.'
        },
        pediatric: {
          pt: 'Convulsão: 0,1 a 0,3 mg/kg IV lento (Máx 5 mg em < 5 anos e 10 mg em maiores). Uso retal (microclister) muito eficaz se sem acesso venoso.',
          es: 'Convulsión: 0,1 a 0,3 mg/kg IV lento (Máx 5 mg en < 5 años y 10 mg en mayores). Uso rectal (microclisma) muy eficaz si no hay acceso venoso.'
        }
      },
      administration: { pt: ['DEVE SER FEITO PURO NA VEIA. O Diazepam NÃO DEVE ser diluído em soro (ele precipita e fica turvo no equipo).', 'A injeção Intramuscular (IM) tem absorção EXTREMAMENTE ERRÁTICA e dolorosa, não deve ser usada para crises ativas.'], es: ['DEBE SER HECHO PURO EN LA VENA. El Diazepam NO DEBE ser diluido en suero (precipita y se vuelve turbio en el equipo).', 'La inyección Intramuscular (IM) tiene absorción EXTREMADAMENTE ERRÁTICA y dolorosa, no debe ser usada para crisis activas.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade formal de ajuste, mas pode haver maior sensibilidade no paciente urêmico.', es: 'Sin necesidad formal de ajuste, pero puede haber mayor sensibilidad en el paciente urémico.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Altíssimo risco de precipitar Coma Hepático na cirrose. Os metabólitos não são destruídos e empilham. Reduzir dose drasticamente ou evitar.', es: 'Altísimo riesgo de precipitar Coma Hepático en la cirrosis. Los metabolitos no son destruidos y se apilan. Reducir dosis drásticamente o evitar.' } },
      commonAdverseEffects: { pt: ['Flebite trombótica violenta (a veia fica dura e vermelha por causa do veículo propilenoglicol)', 'Sonolência prolongada', 'Ataxia (caminhar embriagado)'], es: ['Flebitis trombótica violenta (la vena queda dura y roja por causa del vehículo propilenglicol)', 'Somnolencia prolongada', 'Ataxia (caminar embriagado)'] },
      dangerousAdverseEffects: { pt: ['Depressão respiratória grave e parada cardiorrespiratória (especialmente se feito rápido demais na veia)', 'Efeito paradoxal (agitação violenta ao invés de sedação) em crianças e idosos'], es: ['Depresión respiratoria grave y paro cardiorrespiratorio (especialmente si se hace demasiado rápido en la vena)', 'Efecto paradójico (agitación violenta en lugar de sedación) en niños y ancianos'] },
      contraindications: {
        absolute: { pt: ['Miastenia gravis', 'Insuficiência respiratória descompensada'], es: ['Miastenia gravis', 'Insuficiencia respiratoria descompensada'] },
        relative: { pt: ['Síndrome da Apneia Obstrutiva do Sono (SAOS) grave', 'Idosos frágeis (risco de queda e fratura de fêmur pela meia-vida gigantesca)'], es: ['Síndrome de Apnea Obstructiva del Sueño (SAOS) grave', 'Ancianos frágiles (riesgo de caída y fractura de fémur por la vida media gigantesca)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'A injeção IV rápida (bolus direto de 10mg em segundos) é a principal causa de parada respiratória no Pronto-Socorro em pacientes convulsionando. Injete lentamente (1mg por minuto) contando no relógio. Antídoto: Flumazenil.', es: 'La inyección IV rápida (bolo directo de 10mg en segundos) es la principal causa de paro respiratorio en Urgencias en pacientes convulsionando. Inyecte lentamente (1mg por minuto) contando en el reloj. Antídoto: Flumazenilo.' }
      }
    },

/* ── HALOPERIDOL ────────────────────────────────────────────────────── */
    "haloperidol": {
      name: { pt: 'Haloperidol', es: 'Haloperidol' },
      category: 'sedacao_neurologia',
      class: { pt: 'Antipsicótico Típico (Butirofenona)', es: 'Antipsicótico Típico (Butirofenona)' },
      indications: {
        pt: ['Controle agudo do Delirium Hiperativo na UTI e enfermarias', 'Agitação psicomotora violenta e agressividade na emergência', 'Esquizofrenia e transtornos psicóticos', 'Vômitos severos e soluços refratários'],
        es: ['Control agudo del Delirium Hiperactivo en la UCI y salas', 'Agitación psicomotora violenta y agresividad en emergencia', 'Esquizofrenia y trastornos psicóticos', 'Vómitos severos e hipo refractario']
      },
      commercialNames: { br: ['Haldol', 'Haldol Decanoato'], ar: ['Halopidol'] },
      presentation: { pt: ['Ampolas IV/IM 5 mg/mL', 'Comprimidos 1 mg, 5 mg', 'Gotas orais 2 mg/mL'], es: ['Ampollas IV/IM 5 mg/mL', 'Comprimidos 1 mg, 5 mg', 'Gotas orales 2 mg/mL'] },
      mechanism: {
        pt: 'Antagonista ultra-potente e implacável dos receptores de Dopamina (D2) nas vias mesolímbicas e mesocorticais do cérebro. Corta a transmissão dopaminérgica, apagando alucinações, agressividade extrema e pensamentos desordenados em poucos minutos na via injetável. Como atinge a via nigroestriatal sem dó, bloqueia também a motricidade fina humana, "travando" o corpo (causando parkinsonismo).',
        es: 'Antagonista ultrapotente e implacable de los receptores de Dopamina (D2) en las vías mesolímbicas y mesocorticales del cerebro. Corta la transmisión dopaminérgica, apagando alucinaciones, agresividad extrema y pensamientos desordenados en pocos minutos en la vía inyectable. Como alcanza la vía nigroestriatal sin piedad, bloquea también la motricidad fina humana, "trabando" el cuerpo (causando parkinsonismo).'
      },
      dose: {
        adult: {
          pt: 'Agitação/Delirium: 2,5 a 5 mg IM ou IV lento (Pode repetir a cada 30-60 min se necessário, dobrando a dose inicial se agressão extrema).',
          es: 'Agitación/Delirium: 2,5 a 5 mg IM o IV lento (Puede repetir cada 30-60 min si es necesario, doblando la dosis inicial si agresión extrema).'
        },
        pediatric: {
          pt: 'Não é rotina. Em emergências extremas > 3 anos: 0,025 a 0,05 mg/kg/dose.',
          es: 'No es rutina. En emergencias extremas > 3 años: 0,025 a 0,05 mg/kg/dosis.'
        }
      },
      administration: { pt: ['Mundialmente, a via de escolha na emergência psiquiátrica é INTRAMUSCULAR.', 'O uso INTRAVENOSO (IV) é reservado puramente para UTI e ambiente monitorizado, devido ao alto risco de arritmias cardíacas súbitas.'], es: ['Mundialmente, la vía de elección en emergencia psiquiátrica es INTRAMUSCULAR.', 'El uso INTRAVENOSO (IV) se reserva puramente para UCI y ambiente monitorizado, debido al alto riesgo de arritmias cardíacas súbitas.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste na doença renal agudizada.', es: 'Sin necesidad de ajuste en la enfermedad renal agudizada.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Extensamente metabolizado no fígado. Usar doses menores na cirrose para evitar coma hepático e acúmulo.', es: 'Extensamente metabolizado en el hígado. Usar dosis menores en la cirrosis para evitar coma hepático y acumulación.' } },
      commonAdverseEffects: { pt: ['Sintomas Extrapiramidais - EPS (Acatisia - desespero nas pernas, Distonia aguda - pescoço virado, Parkinsonismo)', 'Sedação e Lentificação mental', 'Boca seca'], es: ['Síntomas Extrapiramidales - EPS (Acatisia - desesperación en las piernas, Distonía aguda - cuello virado, Parkinsonismo)', 'Sedación y Lentificación mental', 'Boca seca'] },
      dangerousAdverseEffects: { pt: ['Prolongamento extremo do Intervalo QT (Torsades de Pointes fatal e Morte Súbita)', 'Síndrome Neuroléptica Maligna (Hipertermia > 41ºC, rigidez em cano de chumbo, rabdomiólise e morte)'], es: ['Prolongación extrema del Intervalo QT (Torsades de Pointes fatal y Muerte Súbita)', 'Síndrome Neuroléptico Maligno (Hipertermia > 41ºC, rigidez en tubo de plomo, rabdomiólisis y muerte)'] },
      contraindications: {
        absolute: { pt: ['Doença de Parkinson preexistente', 'Coma basal de etiologia desconhecida', 'Intervalo QTc > 500 ms no eletrocardiograma'], es: ['Enfermedad de Parkinson preexistente', 'Coma basal de etiología desconocida', 'Intervalo QTc > 500 ms en el electrocardiograma'] },
        relative: { pt: ['Pacientes com demência por Corpos de Lewy (são extremamente e letalmente sensíveis aos efeitos dopaminérgicos)'], es: ['Pacientes con demencia por Cuerpos de Lewy (son extremadamente y letalmente sensibles a los efectos dopaminérgicos)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O Haldol salva a vida das equipes no combate a agressões na emergência, mas MATA por morte súbita cardíaca se injetado na veia (IV) em pacientes com o potássio/magnésio baixo ou que usam drogas que alongam o QT (amiodarona, fluconazol). Tenha sempre a Biperideno/Fenergan para resgatar o paciente que contorcer o pescoço (Distonia).', es: 'El Haldol salva la vida de los equipos en el combate a agresiones en emergencia, pero MATA por muerte súbita cardíaca si inyectado en la vena (IV) en pacientes con potasio/magnesio bajo o que usan drogas que alargan el QT (amiodarona, fluconazol). Tenga siempre Biperideno/Fenergan para rescatar al paciente que contuerza el cuello (Distonía).' }
      }
    }, // vírgula adicionada; BUILD 362 Lote 2 blocos seguem

/* ── QUETIAPINA ─────────────────────────────────────────────────────── */
    "quetiapina": {
      name: { pt: 'Quetiapina', es: 'Quetiapina' },
      category: 'sedacao_neurologia',
      class: { pt: 'Antipsicótico Atípico', es: 'Antipsicótico Atípico' },
      indications: {
        pt: ['Controle de Delirium Hipoativo e Hiperativo na UTI (facilita desmame ventilatório)', 'Esquizofrenia e Transtorno Bipolar', 'Insônia refratária no paciente crítico (uso off-label comum)'],
        es: ['Control de Delirium Hipoactivo e Hiperactivo en la UCI (facilita destete ventilatorio)', 'Esquizofrenia y Trastorno Bipolar', 'Insomnio refractario en el paciente crítico (uso off-label común)']
      },
      commercialNames: { br: ['Seroquel'], ar: ['Seroquel'] },
      presentation: { pt: ['Comprimidos 25 mg, 100 mg, 200 mg (Ação rápida e Prolongada - XR)'], es: ['Comprimidos 25 mg, 100 mg, 200 mg (Acción rápida y Prolongada - XR)'] },
      mechanism: {
        pt: 'Antagonista de receptores de Serotonina (5-HT2) e Dopamina (D2), além de forte bloqueio Histamínico (H1). Diferente do Haloperidol que se liga ao D2 como super-cola (causando distonia e travando o paciente), a Quetiapina se liga e solta rapidamente (efeito "kiss and run"). Isso acalma o cérebro em Delirium SEM causar Parkinsonismo medicamentoso.',
        es: 'Antagonista de receptores de Serotonina (5-HT2) y Dopamina (D2), además de fuerte bloqueo Histamínico (H1). A diferencia del Haloperidol que se une al D2 como pegamento (causando distonía), la Quetiapina se une y suelta rápidamente. Esto calma el cerebro en Delirium SIN causar Parkinsonismo medicamentoso.'
      },
      dose: {
        adult: {
          pt: 'Delirium na UTI: 25 a 50 mg VO a cada 12 horas (Titulando rápido se necessário até 200mg/dia). Psiquiatria: 300 a 800 mg/dia.',
          es: 'Delirium en UCI: 25 a 50 mg VO cada 12 horas (Titulando rápido si necesario hasta 200mg/día). Psiquiatría: 300 a 800 mg/día.'
        },
        pediatric: {
          pt: 'Uso não rotineiro em UTI pediátrica.',
          es: 'Uso no rutinario en UCI pediátrica.'
        }
      },
      administration: { pt: ['Exclusivamente Oral ou Sonda Nasoentérica (os comprimidos simples podem ser triturados para a sonda, os XR não).'], es: ['Exclusivamente Oral o Sonda Nasoentérica (los comprimidos simples pueden ser triturados para la sonda, los XR no).'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste em falência renal.', es: 'Sin necesidad de ajuste en falla renal.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Inicia com dose reduzida (25 mg/dia) em cirróticos graves.', es: 'Inicia con dosis reducida (25 mg/día) en cirróticos graves.' } },
      commonAdverseEffects: { pt: ['Sedação profunda e sonolência diurna', 'Hipotensão postural (devido a bloqueio alfa-1)', 'Ganho de peso rápido (uso crônico)'], es: ['Sedación profunda y somnolencia diurna', 'Hipotensión postural (debido a bloqueo alfa-1)', 'Aumento de peso rápido (uso crónico)'] },
      dangerousAdverseEffects: { pt: ['Prolongamento do intervalo QT', 'Síndrome Neuroléptica Maligna (muito raro em relação ao Haldol)'], es: ['Prolongación del intervalo QT', 'Síndrome Neuroléptico Maligno (muy raro en relación al Haldol)'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade conhecida'], es: ['Hipersensibilidad conocida'] },
        relative: { pt: ['Pacientes com demência relacionada à idade avançada (aumenta o risco de morte súbita, alerta da FDA, embora na UTI o uso agudo seja salvo pelo custo-benefício)'], es: ['Pacientes con demencia relacionada a la edad avanzada (aumenta el riesgo de muerte súbita, alerta de la FDA, aunque en UCI el uso agudo es salvado por el costo-beneficio)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'Na transição de pacientes saindo da ventilação mecânica que estão agressivos, a Quetiapina é superior ao Haldol porque o Haldol prolonga o tempo no ventilador e embota o paciente. A Quetiapina ajuda a regular o ciclo sono-vigília e tem baixíssimo risco extrapiramidal.', es: 'En la transición de pacientes saliendo de la ventilación mecánica que están agresivos, la Quetiapina es superior al Haldol porque el Haldol prolonga el tiempo en el ventilador y embota al paciente. La Quetiapina ayuda a regular el ciclo sueño-vigilia.' }
      }
    }

  }); /* fim Object.assign SEDACAO_DRUGS_DB — BUILD 348 Lote 1 (Propofol + Midazolam + Dexmedetomidina + Diazepam + Haloperidol) + BUILD 362 Lote 2 (Quetiapina) */

})();


/* MEDCASES_GOLD120_GROUP12_R4_sedacao_js */
;(() => {
  const __gold = {"midazolam":{"sourceModule":"sedacao.js","pt":{"name":"Midazolam","class":"Benzodiazepínico sedativo-hipnótico.","pharmacologicClass":"Modulador alostérico positivo do receptor GABA-A.","mechanism":"Aumenta ação inibitória do GABA em GABA-A, produzindo sedação, ansiólise, amnésia e efeito anticonvulsivante.","pharmacodynamics":"Sedação/amnésia dose-dependentes; depressão respiratória é potencializada por opioides e outros depressores SNC.","pharmacokinetics":"Metabolismo hepático principalmente CYP3A a 1-hidroximidazolam; metabólitos podem acumular na insuficiência renal.","indications":"Sedação, ansiólise e amnésia em procedimentos, premedicação anestésica e outras indicações conforme apresentação.","commercialNames":"Midazolam, Versed e marcas locais.","presentation":"Solução injetável 1 mg/mL ou 5 mg/mL; confirmar concentração.","dose":"Sedação IV adulto saudável: inicial pode ser 1 mg e não deve exceder 2,5 mg; titular lentamente. Doses menores em >60 anos, debilitados ou com opioides.","pediatricDose":"Não intubados: <6 meses, recomendações incertas—pequenos incrementos e monitorização rigorosa. 6 meses–5 anos: 0,05–0,1 mg/kg inicial, total até 0,6 mg/kg (geralmente ≤6 mg). 6–12 anos: 0,025–0,05 mg/kg inicial, total até 0,4 mg/kg (geralmente ≤10 mg). 12–16 anos: dose de adulto.","renalDose":"Insuficiência renal crônica pode prolongar sedação por metabólitos; usar incrementos menores e monitorar recuperação.","hepaticDose":"Doença hepática reduz depuração e pode prolongar efeito; usar doses menores e titulação lenta.","commonAdverseEffects":"Sonolência, amnésia, tontura, soluços, náusea e dor no local de administração.","dangerousAdverseEffects":"Depressão respiratória, apneia, parada respiratória/cardiaca, hipotensão e sedação profunda, especialmente com opioides.","adverseEffects":"Risco respiratório depende de dose/contexto; pediatria, idosos e associação com opioides exigem maior vigilância.","contraindications":"Hipersensibilidade e contraindicações específicas da apresentação; avaliar glaucoma agudo de ângulo fechado conforme formulação/contexto.","interactions":"Opioides e outros depressores SNC aumentam depressão respiratória; inibidores CYP3A reduzem depuração e prolongam efeito.","monitoring":"Monitorização respiratória e cardíaca contínua, oximetria e sedação durante IV; equipamento de ressuscitação disponível.","administration":"IV titulada lentamente em pequenos incrementos; nunca usar dose fixa sem individualizar.","preparation":"Confirmar concentração 1 vs 5 mg/mL; diluição/compatibilidade conforme bula.","infusionProtocol":"Sedação contínua exige bomba e protocolo específico; reduzir dose com opioides e disfunção orgânica.","pregnancy":"Benzodiazepínicos atravessam placenta; avaliar risco-benefício, especialmente perto do parto.","lactation":"Passa ao leite; avaliar sedação do lactente e tempo desde a dose.","specialPopulations":"Idosos, debilitados, insuficiência renal/hepática, IC, DPOC e crianças pequenas requerem doses menores/mais lentas.","patientEducation":"Pode causar amnésia e prejuízo psicomotor; não dirigir até recuperação completa.","clinicalPearls":"Erro frequente é titular rápido demais ou combinar com opioide sem reduzir dose; resposta interindividual é ampla.","guidelineRecommendations":"IV apenas em ambiente com monitorização contínua e capacidade imediata de ventilação/ressuscitação.","safetyFlags":"Benzodiazepínico: depressão respiratória/apneia, especialmente com opioides; confirmar concentração.","alerts":"Em <6 meses não intubados, recomendações de dose são incertas e risco de obstrução/hipoventilação é maior.","references":["https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b95415fa-17c2-42ab-a6b0-e628d01c94ed","https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8b690f5c-2923-4c34-a8f7-11af5f546b62","https://www.fda.gov/drugs/postmarket-drug-safety-information-patients-and-providers/general-anesthetics-and-sedation-drugs"],"presentations":"Solução injetável 1 mg/mL ou 5 mg/mL; confirmar concentração.","ref":"Fontes regulatórias e bula oficial revisadas para o ciclo Gold120 (2026)."},"es":{"name":"Midazolam","class":"Benzodiacepina sedante-hipnótica.","pharmacologicClass":"Modulador alostérico positivo del receptor GABA-A.","mechanism":"Potencia acción inhibitoria de GABA en GABA-A, produciendo sedación, ansiolisis, amnesia y efecto anticonvulsivante.","pharmacodynamics":"Sedación/amnesia dosis-dependientes; depresión respiratoria potenciada por opioides y otros depresores SNC.","pharmacokinetics":"Metabolismo hepático principalmente CYP3A a 1-hidroximidazolam; metabolitos pueden acumularse en insuficiencia renal.","indications":"Sedación, ansiolisis y amnesia en procedimientos, premedicación anestésica y otras indicaciones según presentación.","commercialNames":"Midazolam, Versed y marcas locales.","presentation":"Solución inyectable 1 mg/mL o 5 mg/mL; confirmar concentración.","dose":"Sedación IV adulto sano: inicial puede ser 1 mg y no debe superar 2,5 mg; titular lentamente. Dosis menores en >60 años, debilitados o con opioides.","pediatricDose":"No intubados: <6 meses, recomendaciones inciertas—pequeños incrementos y vigilancia estricta. 6 meses–5 años: 0,05–0,1 mg/kg inicial, total hasta 0,6 mg/kg (habitualmente ≤6 mg). 6–12 años: 0,025–0,05 mg/kg inicial, total hasta 0,4 mg/kg (habitualmente ≤10 mg). 12–16 años: dosis de adulto.","renalDose":"Insuficiencia renal crónica puede prolongar sedación por metabolitos; usar incrementos menores y vigilar recuperación.","hepaticDose":"Hepatopatía reduce aclaramiento y puede prolongar efecto; usar dosis menores y titulación lenta.","commonAdverseEffects":"Somnolencia, amnesia, mareos, hipo, náuseas y dolor en sitio de administración.","dangerousAdverseEffects":"Depresión respiratoria, apnea, paro respiratorio/cardiaco, hipotensión y sedación profunda, especialmente con opioides.","adverseEffects":"Riesgo respiratorio depende de dosis/contexto; pediatría, adultos mayores y opioides requieren mayor vigilancia.","contraindications":"Hipersensibilidad y contraindicaciones específicas; valorar glaucoma agudo de ángulo cerrado según formulación/contexto.","interactions":"Opioides y otros depresores SNC aumentan depresión respiratoria; inhibidores CYP3A reducen aclaramiento y prolongan efecto.","monitoring":"Monitorización respiratoria y cardíaca continua, oximetría y sedación durante IV; equipo de reanimación disponible.","administration":"IV titulada lentamente en pequeños incrementos; nunca usar dosis fija sin individualizar.","preparation":"Confirmar concentración 1 vs 5 mg/mL; dilución/compatibilidad según ficha.","infusionProtocol":"Sedación continua requiere bomba y protocolo específico; reducir dosis con opioides y disfunción orgánica.","pregnancy":"Benzodiacepinas atraviesan placenta; valorar riesgo-beneficio, especialmente cerca del parto.","lactation":"Pasa a leche; valorar sedación del lactante y tiempo desde dosis.","specialPopulations":"Adultos mayores, debilitados, insuficiencia renal/hepática, IC, EPOC y niños pequeños requieren dosis menores/más lentas.","patientEducation":"Puede causar amnesia y deterioro psicomotor; no conducir hasta recuperación completa.","clinicalPearls":"Error frecuente es titular demasiado rápido o combinar con opioide sin reducir dosis; respuesta interindividual amplia.","guidelineRecommendations":"IV solo en entorno con monitorización continua y capacidad inmediata de ventilación/reanimación.","safetyFlags":"Benzodiacepina: depresión respiratoria/apnea, especialmente con opioides; confirmar concentración.","alerts":"<6 meses no intubados: recomendaciones inciertas y mayor riesgo de obstrucción/hipoventilación.","references":["https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b95415fa-17c2-42ab-a6b0-e628d01c94ed","https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8b690f5c-2923-4c34-a8f7-11af5f546b62","https://www.fda.gov/drugs/postmarket-drug-safety-information-patients-and-providers/general-anesthetics-and-sedation-drugs"],"presentations":"Solución inyectable 1 mg/mL o 5 mg/mL; confirmar concentración.","ref":"Fuentes regulatorias y ficha oficial revisadas para el ciclo Gold120 (2026)."}}};
  const __db = window.SEDACAO_DRUGS_DB;
  if (!__db || typeof __db !== 'object' || Array.isArray(__db)) throw new Error("MEDCASES_GOLD120_GROUP12_R4_sedacao_js:owner_not_object_map");
  for (const [__id,__cfg] of Object.entries(__gold)) {
    const __row = __db[__id];
    if (!__row || typeof __row !== 'object') throw new Error("MEDCASES_GOLD120_GROUP12_R4_sedacao_js:missing:"+__id);
    __row.mcGoldClinicalV1 = {pt:__cfg.pt, es:__cfg.es};
    __row.sourceModule = __cfg.sourceModule;
  }
})();
/* END MEDCASES_GOLD120_GROUP12_R4_sedacao_js */
/* GOLD33_SELECTIVE:dexmedetomidina:START */
;(function(){var db=window.SEDACAO_DRUGS_DB;if(!db||!db["dexmedetomidina"])throw new Error("GOLD33_MISSING_CANONICAL:dexmedetomidina");db["dexmedetomidina"].mcGoldClinicalV1={
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
    "name": "Dexmedetomidina",
    "class": "Sedativo agonista alfa-2",
    "pharmacologicClass": "Agonismo alfa-2 central reduz liberação de noradrenalina",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Concentrado/solução IV em várias concentrações e bolsas prontas.",
    "presentations": "Concentrado/solução IV em várias concentrações e bolsas prontas.",
    "mechanism": "Agonismo alfa-2 central reduz liberação de noradrenalina. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Metabolismo hepático; meia-vida terminal ~2 h e alta ligação proteica.",
    "indications": "Sedação de adultos inicialmente intubados em UTI e sedação procedural; uso requer ambiente monitorado.",
    "dose": "Carga 1 mcg/kg em 10 min quando apropriada; manutenção usual 0,2–0,7 mcg/kg/h em UTI, com faixas específicas por indicação/rótulo.",
    "pediatricDose": "Uso pediátrico depende de jurisdição e protocolo especializado. AUTOMATABLE=NO.",
    "renalDose": "Sem ajuste específico; monitorar hemodinâmica.",
    "hepaticDose": "Reduzir dose em insuficiência hepática conforme resposta.",
    "commonAdverseEffects": "Hipotensão, bradicardia, náusea e boca seca.",
    "dangerousAdverseEffects": "Bradicardia/assistolia, hipotensão grave, hipertensão transitória e abstinência.",
    "adverseEffects": "Hipotensão, bradicardia, náusea e boca seca. Graves: Bradicardia/assistolia, hipotensão grave, hipertensão transitória e abstinência.",
    "contraindications": "Hipersensibilidade; cautela extrema em bloqueio cardíaco avançado/instabilidade.",
    "interactions": "Negativos cronotrópicos, vasodilatadores, anestésicos, opioides e sedativos somam efeitos.",
    "monitoring": "ECG/FC, PA contínua, oxigenação, ventilação, sedação e abstinência.",
    "administration": "Somente infusão IV com bomba, por profissional habilitado e monitorização contínua.",
    "preparation": "Diluir concentrado conforme rótulo; confirmar concentração da bolsa/seringa e compatibilidade.",
    "infusionProtocol": "Carga em 10 min; titular manutenção. Evitar bolus rápido.",
    "pregnancy": "Dados limitados; usar apenas se benefício justificar.",
    "lactation": "Presente no leite animal; cautela e decisão individual.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Bradicardia/assistolia, hipotensão grave, hipertensão transitória e abstinência. Carga/manutenção bloqueadas sem peso, indicação/ambiente, via aérea, hemodinâmica, fígado, concentração, bomba e equipe de resgate.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=dexmedetomidine",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.fda.gov/drugsatfda"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=dexmedetomidine"
  },
  "es": {
    "name": "Dexmedetomidina",
    "class": "Sedante agonista alfa-2",
    "pharmacologicClass": "Agonismo alfa-2 central reduce liberación de noradrenalina",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Concentrado/solución IV en varias concentraciones y bolsas listas.",
    "presentations": "Concentrado/solución IV en varias concentraciones y bolsas listas.",
    "mechanism": "Agonismo alfa-2 central reduce liberación de noradrenalina. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Metabolismo hepático; semivida terminal ~2 h y alta unión proteica.",
    "indications": "Sedación de adultos inicialmente intubados en UCI y sedación de procedimientos; requiere ambiente monitorizado.",
    "dose": "Carga 1 mcg/kg en 10 min cuando proceda; mantenimiento habitual 0,2–0,7 mcg/kg/h en UCI, con rangos específicos por indicación/ficha.",
    "pediatricDose": "Uso pediátrico depende de jurisdicción y protocolo especializado. AUTOMATABLE=NO.",
    "renalDose": "Sin ajuste específico; controlar hemodinámica.",
    "hepaticDose": "Reducir dosis en insuficiencia hepática según respuesta.",
    "commonAdverseEffects": "Hipotensión, bradicardia, náusea y boca seca.",
    "dangerousAdverseEffects": "Bradicardia/asistolia, hipotensión grave, hipertensión transitoria y retirada.",
    "adverseEffects": "Hipotensión, bradicardia, náusea y boca seca. Graves: Bradicardia/asistolia, hipotensión grave, hipertensión transitoria y retirada.",
    "contraindications": "Hipersensibilidad; precaución extrema en bloqueo cardíaco avanzado/inestabilidad.",
    "interactions": "Cronotrópicos negativos, vasodilatadores, anestésicos, opioides y sedantes suman efectos.",
    "monitoring": "ECG/FC, PA continua, oxigenación, ventilación, sedación y retirada.",
    "administration": "Solo infusión IV con bomba, por profesional capacitado y monitorización continua.",
    "preparation": "Diluir concentrado según ficha; confirmar concentración de bolsa/jeringa y compatibilidad.",
    "infusionProtocol": "Carga en 10 min; titular mantenimiento. Evitar bolo rápido.",
    "pregnancy": "Datos limitados; usar solo si beneficio justifica.",
    "lactation": "Presente en leche animal; precaución y decisión individual.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Bradicardia/asistolia, hipotensión grave, hipertensión transitoria y retirada. Carga/manutenção bloqueadas sem peso, indicação/ambiente, via aérea, hemodinâmica, fígado, concentração, bomba e equipe de resgate.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=dexmedetomidine",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.fda.gov/drugsatfda"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=dexmedetomidine"
  }
};})();
/* GOLD33_SELECTIVE:dexmedetomidina:END */
/* GOLD33_SELECTIVE:midazolam:START */
;(function(){var db=window.SEDACAO_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="midazolam";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:midazolam:"+matches.length);drug=matches[0];}else{drug=db&&db["midazolam"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:midazolam");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "051",
    "requiredFieldCount": 33,
    "approvedSha256": "e8a21d5e56a67f4cd6ffebc889de4b4f030ae14b8459ad80ac2ba035cf141544",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "BLOQUEADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Midazolam",
    "class": "Benzodiazepínico sedativo de curta ação",
    "pharmacologicClass": "Benzodiazepínico sedativo de curta ação",
    "commercialNames": "Midazolam, Versed e marcas locais.",
    "presentation": "Solução injetável 1 mg/mL ou 5 mg/mL; confirmar concentração.",
    "presentations": "Solução injetável 1 mg/mL ou 5 mg/mL; confirmar concentração.",
    "mechanism": "Aumenta ação inibitória do GABA em GABA-A, produzindo sedação, ansiólise, amnésia e efeito anticonvulsivante.",
    "pharmacodynamics": "Aumenta ação inibitória do GABA em GABA-A, produzindo sedação, ansiólise, amnésia e efeito anticonvulsivante.",
    "pharmacokinetics": "Revisar absorção, metabolismo, meia-vida e eliminação na fonte primária.",
    "indications": "Sedação, ansiólise e amnésia em procedimentos, premedicação anestésica e outras indicações conforme apresentação.",
    "dose": "Sedação IV adulto saudável: inicial pode ser 1 mg e não deve exceder 2,5 mg; titular lentamente. Doses menores em >60 anos, debilitados ou com opioides.",
    "pediatricDose": "Requer tabela completa por idade/peso; automação pediátrica bloqueada.",
    "renalDose": "Avaliar função renal e tabela específica; não inferir ajuste.",
    "hepaticDose": "Avaliar hepatopatia; não inferir ajuste.",
    "commonAdverseEffects": "Sonolência, amnésia, tontura, soluços, náusea e dor no local de administração.",
    "dangerousAdverseEffects": "Depressão respiratória, apneia, parada respiratória/cardiaca, hipotensão e sedação profunda, especialmente com opioides.",
    "adverseEffects": "Sonolência, amnésia, soluços, náusea e dor no local.; Depressão respiratória, apneia, hipotensão, parada cardiorrespiratória e agitação paradoxal.",
    "contraindications": "Hipersensibilidade e contraindicações específicas da apresentação; avaliar glaucoma agudo de ângulo fechado conforme formulação/contexto.",
    "interactions": "Opioides e outros depressores SNC aumentam depressão respiratória; inibidores CYP3A reduzem depuração e prolongam efeito.",
    "monitoring": "Em <6 meses não intubados, recomendações de dose são incertas e risco de obstrução/hipoventilação é maior.",
    "administration": "Usar somente via/formulação rotulada; respeitar técnica e alimentos.",
    "preparation": "Confirmar concentração, diluição e estabilidade no produto; não inferir.",
    "infusionProtocol": "Quando IV, usar bomba/monitorização e protocolo da bula; caso contrário não aplicável.",
    "pregnancy": "Avaliar risco fetal, indicação e bula.",
    "lactation": "Avaliar excreção e risco-benefício.",
    "specialPopulations": "Individualizar em idosos, comorbidades, gestação e disfunção orgânica.",
    "patientEducation": "Orientar adesão, sinais de alarme e não interromper abruptamente quando aplicável.",
    "clinicalPearls": "Formulações e combinações não são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Usar conforme diretriz oficial da indicação e jurisdição.",
    "safetyFlags": "Depressão respiratória, apneia, hipotensão, parada cardiorrespiratória e agitação paradoxal.",
    "alerts": "Depressão respiratória, apneia, hipotensão, parada cardiorrespiratória e agitação paradoxal.; Em <6 meses não intubados, recomendações de dose são incertas e risco de obstrução/hipoventilação é maior.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=midazolam",
      "Fonte primária/oficial - https://www.accessdata.fda.gov/drugsatfda_docs/label/2017/018654s086lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=midazolam"
  },
  "es": {
    "name": "Midazolam",
    "class": "Benzodiazepínico sedativo de curta ação",
    "pharmacologicClass": "Benzodiazepínico sedativo de curta ação",
    "commercialNames": "Midazolam, Versed y marcas locais.",
    "presentation": "Solução injetável 1 mg/mL ou 5 mg/mL; confirmar concentração.",
    "presentations": "Solução injetável 1 mg/mL ou 5 mg/mL; confirmar concentração.",
    "mechanism": "Aumenta ação inibitória do GABA em GABA-A, produzindo sedação, ansiólise, amnésia y efeito anticonvulsivante.",
    "pharmacodynamics": "Aumenta ação inibitória do GABA em GABA-A, produzindo sedação, ansiólise, amnésia y efeito anticonvulsivante.",
    "pharmacokinetics": "Revisar absorção, metabolismo, meia-vida y eliminação na fonte primária.",
    "indications": "Sedação, ansiólise y amnésia em procedimentos, premedicação anestésica y outras indicações conforme apresentação.",
    "dose": "Sedação IV adulto saudável: inicial pode ser 1 mg y no deve exceder 2,5 mg; titular lentamente. Doses menores em >60 anos, debilitados ou con opioides.",
    "pediatricDose": "Requer tabela completa por idade/peso; automação pediátrica bloqueada.",
    "renalDose": "Avaliar función renal y tabela específica; no inferir ajuste.",
    "hepaticDose": "Avaliar hepatopatia; no inferir ajuste.",
    "commonAdverseEffects": "Sonolência, amnésia, tontura, soluços, náusea y dor no local de administração.",
    "dangerousAdverseEffects": "Depressão respiratória, apneia, parada respiratória/cardiaca, hipotensão y sedação profunda, especialmente con opioides.",
    "adverseEffects": "Sonolência, amnésia, soluços, náusea y dor no local.; Depressão respiratória, apneia, hipotensão, parada cardiorrespiratória y agitação paradoxal.",
    "contraindications": "Hipersensibilidade y contraindicações específicas da apresentação; avaliar glaucoma agudo de ângulo fechado conforme formulação/contexto.",
    "interactions": "Opioides y outros depressores SNC aumentam depressão respiratória; inibidores CYP3A reduzem depuração y prolongam efeito.",
    "monitoring": "Em <6 meses no intubados, recomendações de dosis são incertas y riesgo de obstrução/hipoventilação é maior.",
    "administration": "Usar somente via/formulação rotulada; respeitar técnica y alimentos.",
    "preparation": "Confirmar concentração, diluição y estabilidade no produto; no inferir.",
    "infusionProtocol": "Quando IV, usar bomba/monitorização y protocolo da bula; caso contrário no aplicável.",
    "pregnancy": "Avaliar riesgo fetal, indicação y bula.",
    "lactation": "Avaliar excreção y riesgo-benefício.",
    "specialPopulations": "Individualizar em idosos, comorbidades, gestação y disfunción orgânica.",
    "patientEducation": "Orientar adesão, sinais de alarme y no interromper abruptamente quando aplicável.",
    "clinicalPearls": "Formulações y combinações no são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Usar conforme diretriz oficial da indicação y jurisdição.",
    "safetyFlags": "Depressão respiratória, apneia, hipotensão, parada cardiorrespiratória y agitação paradoxal.",
    "alerts": "Depressão respiratória, apneia, hipotensão, parada cardiorrespiratória y agitação paradoxal.; Em <6 meses no intubados, recomendações de dosis são incertas y riesgo de obstrução/hipoventilação é maior.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=midazolam",
      "Fonte primária/oficial - https://www.accessdata.fda.gov/drugsatfda_docs/label/2017/018654s086lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=midazolam"
  }
};})();
/* GOLD33_SELECTIVE:midazolam:END */
/* GOLD33_SELECTIVE:propofol:START */
;(function(){var db=window.SEDACAO_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="propofol";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:propofol:"+matches.length);drug=matches[0];}else{drug=db&&db["propofol"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:propofol");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "066",
    "requiredFieldCount": 33,
    "approvedSha256": "bc4a2f74a71f4210ae66618c848d36a28722e9fead8cb93c0dc91f0629254307",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "LIBERADA_COM_RESTRICOES_GRANULARES",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Propofol",
    "class": "Hipnótico intravenoso",
    "pharmacologicClass": "Hipnótico intravenoso",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Emulsão injetável IV em concentrações e apresentações específicas.",
    "presentations": "Emulsão injetável IV em concentrações e apresentações específicas.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância e exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo e eliminação na fonte primária.",
    "indications": "Indução/manutenção anestésica e sedação em ambiente adequadamente monitorado, conforme idade e indicação.",
    "dose": "Dose IV titulada por profissional treinado, com suporte imediato de via aérea e cardiovascular. Concentração, veículo lipídico, técnica asséptica e contexto alteram o uso; automação global bloqueada.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "Não inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "Não inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Dor à injeção, hipotensão, bradicardia e apneia.",
    "dangerousAdverseEffects": "Depressão cardiorrespiratória, síndrome de infusão do propofol, hipertrigliceridemia, infecção e reação anafilática.",
    "adverseEffects": "Dor à injeção, hipotensão, bradicardia e apneia.; Depressão cardiorrespiratória, síndrome de infusão do propofol, hipertrigliceridemia, infecção e reação anafilática.",
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
    "safetyFlags": "Depressão cardiorrespiratória, síndrome de infusão do propofol, hipertrigliceridemia, infecção e reação anafilática.",
    "alerts": "Depressão cardiorrespiratória, síndrome de infusão do propofol, hipertrigliceridemia, infecção e reação anafilática.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=propofol",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=propofol"
  },
  "es": {
    "name": "Propofol",
    "class": "Hipnótico intravenoso",
    "pharmacologicClass": "Hipnótico intravenoso",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Emulsão injetável IV em concentrações y apresentações específicas.",
    "presentations": "Emulsão injetável IV em concentrações y apresentações específicas.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância y exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo y eliminação na fonte primária.",
    "indications": "Indução/manutenção anestésica y sedação em ambiente adequadamente monitorado, conforme idade y indicação.",
    "dose": "Dose IV titulada por profissional treinado, con suporte imediato de via aérea y cardiovascular. Concentração, veículo lipídico, técnica asséptica y contexto alteram o uso; automação global bloqueada.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "No inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "No inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Dor à injeção, hipotensão, bradicardia y apneia.",
    "dangerousAdverseEffects": "Depressão cardiorrespiratória, síndrome de infusão do propofol, hipertrigliceridemia, infecção y reação anafilática.",
    "adverseEffects": "Dor à injeção, hipotensão, bradicardia y apneia.; Depressão cardiorrespiratória, síndrome de infusão do propofol, hipertrigliceridemia, infecção y reação anafilática.",
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
    "safetyFlags": "Depressão cardiorrespiratória, síndrome de infusão do propofol, hipertrigliceridemia, infecção y reação anafilática.",
    "alerts": "Depressão cardiorrespiratória, síndrome de infusão do propofol, hipertrigliceridemia, infecção y reação anafilática.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=propofol",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=propofol"
  }
};})();
/* GOLD33_SELECTIVE:propofol:END */
