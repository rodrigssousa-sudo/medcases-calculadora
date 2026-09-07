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
