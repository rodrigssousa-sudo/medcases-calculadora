/* ============================================================
   MedCases Pro — Módulo: ALERGIA / IMUNOLOGIA
   Expõe: window.ALERGIA_IMUNOLOGIA_DRUGS_DB

   BUILD 394 — Lote 1 (Anti-histamínicos H1 de 2ª e 3ª Geração)
   Desloratadina, Cetirizina, Levocetirizina, Fexofenadina, Ebastina
   ============================================================ */

(function () {
  'use strict';
  if (typeof window.ALERGIA_IMUNOLOGIA_DRUGS_DB !== 'object' || Array.isArray(window.ALERGIA_IMUNOLOGIA_DRUGS_DB)) {
    window.ALERGIA_IMUNOLOGIA_DRUGS_DB = {};
  }

  Object.assign(window.ALERGIA_IMUNOLOGIA_DRUGS_DB, {

/* ── DESLORATADINA ──────────────────────────────────────────────────── */
    "desloratadina": {
      "name": {
        "pt": "Desloratadina",
        "es": "Desloratadina"
      },
      "category": "alergia",
      "class": {
        "pt": "Anti-histamínico H1 de segunda geração",
        "es": "Antihistamínico H1 de segunda generación"
      },
      "indications": {
        "pt": [
          "Rinite alérgica sazonal/perene",
          "Urticária crônica idiopática"
        ],
        "es": [
          "Rinitis alérgica estacional/perenne",
          "Urticaria crónica idiopática"
        ]
      },
      "mechanism": {
        "pt": "Metabólito ativo da loratadina; antagonista/inverso agonista H1 periférico de longa ação.",
        "es": "Metabolito activo de loratadina; antagonista/agonista inverso H1 periférico de acción prolongada."
      },
      "dose": {
        "adult": {
          "pt": "Adultos e ≥12 anos: 5 mg VO 1x/dia.",
          "es": "Adultos y ≥12 años: 5 mg VO 1 vez/día."
        },
        "pediatric": {
          "pt": "Solução oral: 6–11 anos 2,5 mg/dia; 1–5 anos 1,25 mg/dia; 6–11 meses 1 mg/dia conforme indicação/rotulagem.",
          "es": "Solución oral: 6–11 años 2,5 mg/día; 1–5 años 1,25 mg/día; 6–11 meses 1 mg/día según indicación/rotulado."
        }
      },
      "administration": {
        "pt": [
          "VO com ou sem alimento",
          "Usar dispositivo de medida apropriado nas formulações líquidas"
        ],
        "es": [
          "VO con o sin alimento",
          "Usar dispositivo de medición apropiado en formulaciones líquidas"
        ]
      },
      "renalAdjustment": {
        "required": true,
        "message": {
          "pt": "Adultos/adolescentes com insuficiência renal: dose inicial de 5 mg em dias alternados conforme rotulagem; pediatria com insuficiência renal requer avaliação individual.",
          "es": "Adultos/adolescentes con insuficiencia renal: dosis inicial de 5 mg en días alternos según rotulado; pediatría con insuficiencia renal requiere evaluación individual."
        }
      },
      "hepaticAdjustment": {
        "required": true,
        "message": {
          "pt": "Adultos/adolescentes com insuficiência hepática: dose inicial de 5 mg em dias alternados conforme rotulagem.",
          "es": "Adultos/adolescentes con insuficiencia hepática: dosis inicial de 5 mg en días alternos según rotulado."
        }
      },
      "commonAdverseEffects": {
        "pt": [
          "Cefaleia",
          "Boca seca",
          "Fadiga"
        ],
        "es": [
          "Cefalea",
          "Boca seca",
          "Fatiga"
        ]
      },
      "dangerousAdverseEffects": {
        "pt": [
          "Hipersensibilidade/anafilaxia rara"
        ],
        "es": [
          "Hipersensibilidad/anafilaxia rara"
        ]
      },
      "contraindications": {
        "absolute": {
          "pt": [
            "Hipersensibilidade à desloratadina/loratadina"
          ],
          "es": [
            "Hipersensibilidad a desloratadina/loratadina"
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
          "pt": "Na insuficiência renal ou hepática em adultos/adolescentes, a rotulagem recomenda iniciar 5 mg em dias alternados.",
          "es": "En insuficiencia renal o hepática en adultos/adolescentes, el rotulado recomienda iniciar 5 mg en días alternos."
        }
      }
    },

/* ── CETIRIZINA ─────────────────────────────────────────────────────── */
    "cetirizina": {
      "name": {
        "pt": "Cetirizina",
        "es": "Cetirizina"
      },
      "category": "alergia",
      "class": {
        "pt": "Anti-histamínico H1 de segunda geração",
        "es": "Antihistamínico H1 de segunda generación"
      },
      "indications": {
        "pt": [
          "Rinite alérgica",
          "Urticária crônica"
        ],
        "es": [
          "Rinitis alérgica",
          "Urticaria crónica"
        ]
      },
      "mechanism": {
        "pt": "Antagonista/inverso agonista periférico de receptores H1, com menor penetração no SNC que anti-histamínicos de primeira geração.",
        "es": "Antagonista/agonista inverso periférico de receptores H1, con menor penetración al SNC que antihistamínicos de primera generación."
      },
      "dose": {
        "adult": {
          "pt": "Adultos e ≥6 anos: 5–10 mg VO 1x/dia conforme resposta e produto; máximo usual 10 mg/dia.",
          "es": "Adultos y ≥6 años: 5–10 mg VO 1 vez/día según respuesta y producto; máximo habitual 10 mg/día."
        },
        "pediatric": {
          "pt": "2–5 anos: formulação líquida, usualmente 2,5 mg 1x/dia, podendo chegar a 5 mg/dia conforme produto/indicação; <2 anos exige formulação/rotulagem específica.",
          "es": "2–5 años: formulación líquida, usualmente 2,5 mg 1 vez/día, pudiendo llegar a 5 mg/día según producto/indicación; <2 años requiere formulación/rotulado específico."
        }
      },
      "administration": {
        "pt": [
          "VO com ou sem alimento",
          "Pode causar sonolência em parte dos pacientes",
          "Após uso diário prolongado, orientar sobre risco raro de prurido intenso após suspensão"
        ],
        "es": [
          "VO con o sin alimento",
          "Puede causar somnolencia en algunos pacientes",
          "Tras uso diario prolongado, advertir sobre riesgo raro de prurito intenso al suspender"
        ]
      },
      "renalAdjustment": {
        "required": true,
        "message": {
          "pt": "Doença renal pode exigir dose menor; em OTC, encaminhar para ajuste médico. Evitar extrapolar 10 mg/dia em insuficiência renal sem avaliação.",
          "es": "La enfermedad renal puede requerir dosis menor; en OTC, derivar para ajuste médico. Evitar extrapolar 10 mg/día en insuficiencia renal sin evaluación."
        }
      },
      "hepaticAdjustment": {
        "required": true,
        "message": {
          "pt": "Hepatopatia pode exigir redução de dose conforme produto; individualizar.",
          "es": "La hepatopatía puede requerir reducción de dosis según producto; individualizar."
        }
      },
      "commonAdverseEffects": {
        "pt": [
          "Sonolência",
          "Fadiga",
          "Boca seca"
        ],
        "es": [
          "Somnolencia",
          "Fatiga",
          "Boca seca"
        ]
      },
      "dangerousAdverseEffects": {
        "pt": [
          "Prurido intenso raro após suspensão de uso prolongado",
          "Reação de hipersensibilidade rara"
        ],
        "es": [
          "Prurito intenso raro tras suspensión de uso prolongado",
          "Reacción de hipersensibilidad rara"
        ]
      },
      "contraindications": {
        "absolute": {
          "pt": [
            "Hipersensibilidade à cetirizina/hidroxizina"
          ],
          "es": [
            "Hipersensibilidad a cetirizina/hidroxizina"
          ]
        },
        "relative": {
          "pt": [
            "DRC, hepatopatia, uso de sedativos"
          ],
          "es": [
            "ERC, hepatopatía, uso de sedantes"
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
          "pt": "FDA adicionou alerta para prurido raro porém potencialmente grave após interromper uso prolongado de cetirizina.",
          "es": "FDA añadió advertencia por prurito raro pero potencialmente grave tras interrumpir uso prolongado de cetirizina."
        }
      }
    },

/* ── LEVOCETIRIZINA ─────────────────────────────────────────────────── */
    "levocetirizina": {
      "name": {
        "pt": "Levocetirizina",
        "es": "Levocetirizina"
      },
      "category": "alergia",
      "class": {
        "pt": "Anti-histamínico H1 de segunda geração",
        "es": "Antihistamínico H1 de segunda generación"
      },
      "indications": {
        "pt": [
          "Rinite alérgica",
          "Urticária crônica idiopática"
        ],
        "es": [
          "Rinitis alérgica",
          "Urticaria crónica idiopática"
        ]
      },
      "mechanism": {
        "pt": "Enantiômero ativo da cetirizina; antagonista/inverso agonista seletivo periférico H1.",
        "es": "Enantiómero activo de cetirizina; antagonista/agonista inverso selectivo periférico H1."
      },
      "dose": {
        "adult": {
          "pt": "Adultos e ≥12 anos: 5 mg VO à noite; alguns pacientes podem controlar sintomas com 2,5 mg.",
          "es": "Adultos y ≥12 años: 5 mg VO por la noche; algunos pacientes pueden controlar síntomas con 2,5 mg."
        },
        "pediatric": {
          "pt": "6–11 anos: 2,5 mg 1x/dia à noite. 6 meses–5 anos: 1,25 mg 1x/dia à noite, usando solução oral.",
          "es": "6–11 años: 2,5 mg 1 vez/día por la noche. 6 meses–5 años: 1,25 mg 1 vez/día por la noche, usando solución oral."
        }
      },
      "administration": {
        "pt": [
          "VO com ou sem alimento",
          "Evitar álcool e outros depressores do SNC se houver sedação",
          "Uso prolongado: discutir risco de prurido intenso após suspensão"
        ],
        "es": [
          "VO con o sin alimento",
          "Evitar alcohol y otros depresores del SNC si hay sedación",
          "Uso prolongado: discutir riesgo de prurito intenso tras suspensión"
        ]
      },
      "renalAdjustment": {
        "required": true,
        "message": {
          "pt": "≥12 anos: ClCr 50–80: 2,5 mg/dia; 30–50: 2,5 mg em dias alternados; 10–30: 2,5 mg 2x/semana; ClCr <10 ou hemodiálise: contraindicado. Crianças 6 meses–11 anos com disfunção renal: não usar.",
          "es": "≥12 años: ClCr 50–80: 2,5 mg/día; 30–50: 2,5 mg en días alternos; 10–30: 2,5 mg 2 veces/semana; ClCr <10 o hemodiálisis: contraindicado. Niños 6 meses–11 años con disfunción renal: no usar."
        }
      },
      "hepaticAdjustment": {
        "required": false,
        "message": {
          "pt": "Sem ajuste em insuficiência hepática isolada; se coexistir insuficiência renal, ajustar pelo rim.",
          "es": "Sin ajuste en insuficiencia hepática aislada; si coexiste insuficiencia renal, ajustar por función renal."
        }
      },
      "commonAdverseEffects": {
        "pt": [
          "Sonolência",
          "Fadiga",
          "Nasofaringite"
        ],
        "es": [
          "Somnolencia",
          "Fatiga",
          "Nasofaringitis"
        ]
      },
      "dangerousAdverseEffects": {
        "pt": [
          "Prurido intenso raro após suspensão de uso prolongado",
          "Retenção urinária em predispostos"
        ],
        "es": [
          "Prurito intenso raro tras suspensión de uso prolongado",
          "Retención urinaria en predispuestos"
        ]
      },
      "contraindications": {
        "absolute": {
          "pt": [
            "ClCr <10 mL/min/hemodiálise",
            "Crianças 6 meses–11 anos com insuficiência renal",
            "Hipersensibilidade à levocetirizina/cetirizina"
          ],
          "es": [
            "ClCr <10 mL/min/hemodiálisis",
            "Niños 6 meses–11 años con insuficiencia renal",
            "Hipersensibilidad a levocetirizina/cetirizina"
          ]
        },
        "relative": {
          "pt": [
            "Risco de retenção urinária",
            "Uso de álcool/sedativos"
          ],
          "es": [
            "Riesgo de retención urinaria",
            "Uso de alcohol/sedantes"
          ]
        }
      },
      "safetyFlags": {
        "bleedingRisk": false,
        "renalHighRisk": true,
        "hepaticCaution": false,
        "antidoteAvailable": false,
        "highAlertMedication": false,
        "warning": {
          "pt": "FDA adicionou alerta para prurido raro porém potencialmente grave após interromper uso prolongado de levocetirizina.",
          "es": "FDA añadió advertencia por prurito raro pero potencialmente grave tras interrumpir uso prolongado de levocetirizina."
        }
      }
    },

/* ── FEXOFENADINA ───────────────────────────────────────────────────── */
    "fexofenadina": {
      "name": {
        "pt": "Fexofenadina",
        "es": "Fexofenadina"
      },
      "category": "alergia",
      "class": {
        "pt": "Anti-histamínico H1 de segunda geração pouco sedativo",
        "es": "Antihistamínico H1 de segunda generación poco sedante"
      },
      "indications": {
        "pt": [
          "Rinite alérgica",
          "Urticária"
        ],
        "es": [
          "Rinitis alérgica",
          "Urticaria"
        ]
      },
      "mechanism": {
        "pt": "Antagonista/inverso agonista periférico H1 com baixa penetração no SNC.",
        "es": "Antagonista/agonista inverso periférico H1 con baja penetración al SNC."
      },
      "dose": {
        "adult": {
          "pt": "Adultos e ≥12 anos: 60 mg VO a cada 12 h ou 180 mg 1x/dia conforme produto.",
          "es": "Adultos y ≥12 años: 60 mg VO cada 12 h o 180 mg 1 vez/día según producto."
        },
        "pediatric": {
          "pt": "6–11 anos: 30 mg VO a cada 12 h conforme produto; idades menores usam formulações específicas.",
          "es": "6–11 años: 30 mg VO cada 12 h según producto; edades menores usan formulaciones específicas."
        }
      },
      "administration": {
        "pt": [
          "Tomar com água",
          "Não tomar com sucos de frutas",
          "Não administrar ao mesmo tempo que antiácidos com alumínio ou magnésio"
        ],
        "es": [
          "Tomar con agua",
          "No tomar con jugos de frutas",
          "No administrar al mismo tiempo que antiácidos con aluminio o magnesio"
        ]
      },
      "renalAdjustment": {
        "required": true,
        "message": {
          "pt": "Doença renal pode exigir dose menor; rotulagem OTC orienta avaliação médica antes do uso.",
          "es": "La enfermedad renal puede requerir dosis menor; el rotulado OTC indica evaluación médica antes del uso."
        }
      },
      "hepaticAdjustment": {
        "required": false,
        "message": {
          "pt": "Sem ajuste hepático rotineiro relevante em hepatopatia isolada.",
          "es": "Sin ajuste hepático rutinario relevante en hepatopatía aislada."
        }
      },
      "commonAdverseEffects": {
        "pt": [
          "Cefaleia",
          "Náusea",
          "Tontura"
        ],
        "es": [
          "Cefalea",
          "Náuseas",
          "Mareo"
        ]
      },
      "dangerousAdverseEffects": {
        "pt": [
          "Hipersensibilidade rara"
        ],
        "es": [
          "Hipersensibilidad rara"
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
            "Doença renal"
          ],
          "es": [
            "Enfermedad renal"
          ]
        }
      },
      "safetyFlags": {
        "bleedingRisk": false,
        "renalHighRisk": false,
        "hepaticCaution": false,
        "antidoteAvailable": false,
        "highAlertMedication": false,
        "warning": {
          "pt": "Sucos de frutas reduzem a absorção da fexofenadina; antiácidos com alumínio/magnésio também interferem.",
          "es": "Los jugos de frutas reducen la absorción de fexofenadina; los antiácidos con aluminio/magnesio también interfieren."
        }
      }
    },

/* ── EBASTINA ───────────────────────────────────────────────────────── */
    "ebastina": {
      name: { pt: 'Ebastina', es: 'Ebastina' },
      category: 'alergia_imunologia',
      class: { pt: 'Anti-histamínico H1 de 2ª Geração', es: 'Antihistamínico H1 de 2ª Generación' },
      indications: {
        pt: ['Rinite Alérgica sazonal e perene crônica', 'Urticária idiopática crônica (erupções com coceira extrema)'],
        es: ['Rinitis Alérgica estacional y perenne crónica', 'Urticaria idiopática crónica (erupciones con picor extremo)']
      },
      commercialNames: { br: ['Ebastel'], ar: ['Ebastel'] },
      presentation: { pt: ['Comprimidos revestidos 10 mg e 20 mg', 'Xarope 1 mg/mL'], es: ['Comprimidos recubiertos 10 mg y 20 mg', 'Jarabe 1 mg/mL'] },
      mechanism: {
        pt: 'Pró-fármaco. Ao ser engolida, o fígado transforma a droga quase instantaneamente em "Carebastina", que é o bloqueador super-potente H1. Não penetra a barreira hematoencefálica (não causa sono). Seu diferencial é a longa afinidade duradoura nos receptores H1 nasais, desentupindo a alergia com um único comprimido por 24 horas.',
        es: 'Profármaco. Al ser tragada, el hígado transforma la droga instantáneamente en "Carebastina", el bloqueador superpotente H1. No penetra la barrera hematoencefálica (no causa sueño). Su diferencial es la larga afinidad duradera en los receptores H1 nasales.'
      },
      dose: {
        adult: {
          pt: 'Rinite (10 mg 1x ao dia). Urticária/Rinite Severa (20 mg 1x ao dia).',
          es: 'Rinitis (10 mg 1x al día). Urticaria/Rinitis Severa (20 mg 1x al día).'
        },
        pediatric: {
          pt: 'Crianças 2 a 5 anos: 2,5 mg (2,5 mL) 1x/dia. 6 a 11 anos: 5 mg 1x/dia.',
          es: 'Niños 2 a 5 años: 2,5 mg (2,5 mL) 1x/día. 6 a 11 años: 5 mg 1x/día.'
        }
      },
      administration: { pt: ['Toma única oral, preferencialmente de manhã para garantir proteção diária.'], es: ['Toma única oral, preferentemente por la mañana para garantizar protección diaria.'] },
      renalAdjustment: { required: false, message: { pt: 'Não exige ajuste rigoroso na doença renal (mesmo severa).', es: 'No exige ajuste riguroso en enfermedad renal.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Restringir a 10 mg/dia em insuficiência hepática grave (pró-fármaco CYP3A4-dependente).', es: 'Restringir a 10 mg/día en insuficiencia hepática grave (profármaco CYP3A4-dependiente).' } },
      commonAdverseEffects: { pt: ['Boca seca', 'Cefaleia', 'Sonolência rara (1-3%)'], es: ['Boca seca', 'Cefalea', 'Somnolencia rara (1-3%)'] },
      dangerousAdverseEffects: { pt: ['Aumento de transaminases temporário', 'Taquicardia paradoxal', 'Prolongamento do QTc (raro, principalmente com inibidores de CYP3A4)'], es: ['Aumento de transaminasas temporal', 'Taquicardia paradójica', 'Prolongación del QTc (raro, principalmente con inhibidores de CYP3A4)'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade à ebastina'], es: ['Hipersensibilidad a la ebastina'] },
        relative: { pt: ['Pacientes com Hipocalemia preexistente ou história de prolongamento do QT longo', 'Uso concomitante de macrólidos ou antifúngicos azólicos sistêmicos (risco de acúmulo + QTc)'], es: ['Pacientes con Hipopotasemia preexistente o historia de prolongación de QT', 'Uso concomitante de macrólidos o antifúngicos azólicos sistémicos (riesgo de acumulación + QTc)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'ALERTA METABÓLICO: Como a Ebastina vira Carebastina pelas enzimas CYP3A4 no fígado, se o paciente tomar cetoconazol ou claritromicina, o fígado para. A ebastina original vai acumular e, diferentemente da Loratadina, isso pode alongar levemente o QTc do paciente. Preferir Fexofenadina ou Desloratadina em pacientes coronariopatas.', es: 'ALERTA METABÓLICA: Como la Ebastina se vuelve Carebastina por las enzimas CYP3A4, si el paciente toma ketoconazol o claritromicina, el hígado se detiene. La ebastina original acumulará y puede alargar levemente el QTc. Preferir Fexofenadina o Desloratadina en coronariopatas.' }
      }
    },

    /* ── BUILD 395 Lote 2 — Anti-histamínicos H1: 2ª Geração (Bilastina, Rupatadina) + 1ª Geração Clássicos ── */

    "bilastina": {
      "name": {
        "pt": "Bilastina",
        "es": "Bilastina"
      },
      "category": "alergia",
      "class": {
        "pt": "Anti-histamínico H1 de segunda geração",
        "es": "Antihistamínico H1 de segunda generación"
      },
      "indications": {
        "pt": [
          "Rinoconjuntivite alérgica",
          "Urticária"
        ],
        "es": [
          "Rinoconjuntivitis alérgica",
          "Urticaria"
        ]
      },
      "mechanism": {
        "pt": "Antagonista/inverso agonista seletivo periférico H1, com baixa sedação nas doses usuais.",
        "es": "Antagonista/agonista inverso selectivo periférico H1, con baja sedación a dosis habituales."
      },
      "dose": {
        "adult": {
          "pt": "Adultos e adolescentes ≥12 anos: 20 mg VO 1x/dia.",
          "es": "Adultos y adolescentes ≥12 años: 20 mg VO 1 vez/día."
        },
        "pediatric": {
          "pt": "O comprimido de 20 mg é indicado a partir de 12 anos; idades menores dependem de apresentação pediátrica autorizada localmente.",
          "es": "El comprimido de 20 mg está indicado desde 12 años; edades menores dependen de presentación pediátrica autorizada localmente."
        }
      },
      "administration": {
        "pt": [
          "Tomar 1 hora antes ou 2 horas após alimento",
          "Tomar 1 hora antes ou 2 horas após suco de frutas"
        ],
        "es": [
          "Tomar 1 hora antes o 2 horas después de alimentos",
          "Tomar 1 hora antes o 2 horas después de jugo de frutas"
        ]
      },
      "renalAdjustment": {
        "required": false,
        "message": {
          "pt": "Sem ajuste rotineiro em insuficiência renal isolada; evitar combinações que elevem exposição em insuficiência renal moderada/grave conforme SmPC.",
          "es": "Sin ajuste rutinario en insuficiencia renal aislada; evitar combinaciones que aumenten exposición en insuficiencia renal moderada/grave según SmPC."
        }
      },
      "hepaticAdjustment": {
        "required": false,
        "message": {
          "pt": "Sem ajuste hepático rotineiro segundo SmPC.",
          "es": "Sin ajuste hepático rutinario según SmPC."
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
          "Hipersensibilidade rara"
        ],
        "es": [
          "Hipersensibilidad rara"
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
            "Interações que elevem exposição em DRC moderada/grave"
          ],
          "es": [
            "Interacciones que aumenten exposición en ERC moderada/grave"
          ]
        }
      },
      "safetyFlags": {
        "bleedingRisk": false,
        "renalHighRisk": false,
        "hepaticCaution": false,
        "antidoteAvailable": false,
        "highAlertMedication": false,
        "warning": {
          "pt": "Alimentos e sucos de frutas reduzem a biodisponibilidade da bilastina; respeitar jejum relativo.",
          "es": "Alimentos y jugos de frutas reducen la biodisponibilidad de bilastina; respetar ayuno relativo."
        }
      }
    },

    "rupatadina": {
      name: { pt: 'Rupatadina', es: 'Rupatadina' },
      category: 'alergia_imunologia',
      class: { pt: 'Anti-histamínico H1 de 2ª Geração + Antagonista do PAF', es: 'Antihistamínico H1 de 2ª Generación + Antagonista del PAF' },
      indications: {
        pt: ['Rinite Alérgica (com alto poder contra o entupimento nasal crônico)', 'Urticária crônica com alto poder de inchaço inflamatório'],
        es: ['Rinitis Alérgica (con alto poder contra el taponamiento nasal crónico)', 'Urticaria crónica con alto poder de hinchazón inflamatoria']
      },
      commercialNames: { br: ['Rupafin'], ar: ['Rupafin', 'Alergiax'] },
      presentation: { pt: ['Comprimidos 10 mg', 'Solução Oral 1 mg/mL'], es: ['Comprimidos 10 mg', 'Solución Oral 1 mg/mL'] },
      mechanism: {
        pt: 'Tem um DUPLO MECANISMO revolucionário. Além de bloquear a Histamina (H1) como todos os outros, a Rupatadina bloqueia o Fator Ativador de Plaquetas (PAF). O PAF é uma das principais substâncias que as células soltam para deixar o nariz entupido e a pele vermelha/inchada. Ao bloquear ambos, ela "seca" a alergia mais intensamente que os antihistamínicos puros.',
        es: 'Tiene un DOBLE MECANISMO revolucionario. Además de bloquear la Histamina (H1), la Rupatadina bloquea el Factor Activador de Plaquetas (PAF). El PAF es una de las principales sustancias que tapan la nariz e hinchan la piel. Al bloquear ambos, "seca" la alergia más intensamente.'
      },
      dose: {
        adult: {
          pt: '10 mg via oral UMA VEZ ao dia.',
          es: '10 mg vía oral UNA VEZ al día.'
        },
        pediatric: {
          pt: 'Crianças de 2 a 11 anos (>25 kg): 5 mg (5 mL) 1x/dia. (10 a 25 kg): 2,5 mg (2,5 mL) 1x/dia.',
          es: 'Niños de 2 a 11 años (>25 kg): 5 mg (5 mL) 1x/día. (10 a 25 kg): 2,5 mg (2,5 mL) 1x/día.'
        }
      },
      administration: { pt: ['Pode ser tomado com ou sem alimentos (A comida aumenta ligeiramente sua absorção e atrasa o pico, mas não anula o remédio, sendo seguro misturar).'], es: ['Puede ser tomado con o sin alimentos (La comida aumenta ligeramente su absorción y retrasa el pico, pero no anula el remedio).'] },
      renalAdjustment: { required: false, message: { pt: 'Uso não recomendado em insuficiência renal grave apenas por falta de dados concretos.', es: 'Uso no recomendado en insuficiencia renal grave solo por falta de datos.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Evitar o uso em insuficiência hepática (metabolismo extenso via CYP3A4).', es: 'Evitar uso en insuficiencia hepática (metabolismo extenso vía CYP3A4).' } },
      commonAdverseEffects: { pt: ['Sonolência (Afeta até 9% dos pacientes, mais que a bilastina/loratadina)', 'Astenia (fraqueza)', 'Cefaleia'], es: ['Somnolencia (Afecta hasta 9% de los pacientes)', 'Astenia (debilidad)', 'Cefalea'] },
      dangerousAdverseEffects: { pt: ['Nenhum evento cardíaco perigoso em doses terapêuticas.'], es: ['Ningún evento cardíaco peligroso en dosis terapéuticas.'] },
      contraindications: {
        absolute: { pt: ['Crianças menores de 2 anos', 'Insuficiência hepática ou renal grave'], es: ['Niños menores de 2 años', 'Insuficiencia hepática o renal grave'] },
        relative: { pt: ['Uso associado com inibidores potentes do CYP3A4 (Cetoconazol, Eritromicina)'], es: ['Uso asociado con inhibidores potentes del CYP3A4 (Ketoconazol, Eritromicina)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'ALERTA DE SEDATIVO: Por ser metabolizada no fígado e ter estrutura mais lipofílica que a Fexofenadina/Bilastina, a Rupatadina CAUSA SONO em alguns pacientes (semelhante à Cetirizina). Instrua o adulto a tomar a primeira dose à noite para ver como o corpo reage.', es: 'ALERTA DE SEDANTE: Por ser metabolizada en hígado, la Rupatadina CAUSA SUEÑO en algunos pacientes. Instruya al adulto a tomar la primera dosis a la noche para ver cómo reacciona el cuerpo.' }
      }
    },

    "difenidramina": {
      "name": {
        "pt": "Difenidramina",
        "es": "Difenhidramina"
      },
      "category": "alergia",
      "class": {
        "pt": "Anti-histamínico H1 de primeira geração; anticolinérgico sedativo",
        "es": "Antihistamínico H1 de primera generación; anticolinérgico sedante"
      },
      "indications": {
        "pt": [
          "Sintomas alérgicos",
          "Adjuvante em reações alérgicas; não substitui adrenalina na anafilaxia"
        ],
        "es": [
          "Síntomas alérgicos",
          "Adyuvante en reacciones alérgicas; no sustituye adrenalina en anafilaxia"
        ]
      },
      "mechanism": {
        "pt": "Bloqueio H1 central e periférico com importante atividade anticolinérgica e sedativa.",
        "es": "Bloqueo H1 central y periférico con importante actividad anticolinérgica y sedante."
      },
      "dose": {
        "adult": {
          "pt": "25–50 mg VO a cada 4–6 h conforme necessidade; respeitar limite do produto.",
          "es": "25–50 mg VO cada 4–6 h según necesidad; respetar límite del producto."
        },
        "pediatric": {
          "pt": "6–11 anos: 12,5–25 mg a cada 4–6 h conforme produto. OTC oral: <6 anos não usar sem orientação específica.",
          "es": "6–11 años: 12,5–25 mg cada 4–6 h según producto. OTC oral: <6 años no usar sin indicación específica."
        }
      },
      "administration": {
        "pt": [
          "Evitar álcool e outros sedativos",
          "Não usar para fazer uma criança dormir",
          "Não duplicar com outros produtos contendo difenidramina, inclusive tópicos"
        ],
        "es": [
          "Evitar alcohol y otros sedantes",
          "No usar para hacer dormir a un niño",
          "No duplicar con otros productos que contengan difenhidramina, incluso tópicos"
        ]
      },
      "renalAdjustment": {
        "required": false,
        "message": {
          "pt": "Sem esquema renal fixo rotineiro; maior cautela em idosos e pacientes vulneráveis.",
          "es": "Sin esquema renal fijo rutinario; mayor precaución en adultos mayores y pacientes vulnerables."
        }
      },
      "hepaticAdjustment": {
        "required": true,
        "message": {
          "pt": "Usar cautela em hepatopatia significativa por maior risco de sedação/acúmulo.",
          "es": "Usar precaución en hepatopatía significativa por mayor riesgo de sedación/acumulación."
        }
      },
      "commonAdverseEffects": {
        "pt": [
          "Sonolência",
          "Boca seca",
          "Visão borrada",
          "Retenção urinária"
        ],
        "es": [
          "Somnolencia",
          "Boca seca",
          "Visión borrosa",
          "Retención urinaria"
        ]
      },
      "dangerousAdverseEffects": {
        "pt": [
          "Delirium/toxicidade anticolinérgica",
          "Arritmias e convulsões em superdose",
          "Depressão do SNC"
        ],
        "es": [
          "Delirium/toxicidad anticolinérgica",
          "Arritmias y convulsiones en sobredosis",
          "Depresión del SNC"
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
            "Glaucoma, retenção urinária/HBP, DPOC, idosos, sedativos"
          ],
          "es": [
            "Glaucoma, retención urinaria/HBP, EPOC, adultos mayores, sedantes"
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
          "pt": "Anti-histamínico de primeira geração: sedação e carga anticolinérgica são clinicamente relevantes; nunca substituir adrenalina na anafilaxia.",
          "es": "Antihistamínico de primera generación: sedación y carga anticolinérgica son clínicamente relevantes; nunca sustituir adrenalina en anafilaxia."
        }
      }
    },

    "clorfeniramina": {
      "name": {
        "pt": "Clorfeniramina",
        "es": "Clorfeniramina"
      },
      "category": "alergia",
      "class": {
        "pt": "Anti-histamínico H1 de primeira geração",
        "es": "Antihistamínico H1 de primera generación"
      },
      "indications": {
        "pt": [
          "Sintomas de rinite/alergia respiratória"
        ],
        "es": [
          "Síntomas de rinitis/alergia respiratoria"
        ]
      },
      "mechanism": {
        "pt": "Antagonismo H1 com efeitos sedativos e anticolinérgicos típicos de primeira geração.",
        "es": "Antagonismo H1 con efectos sedantes y anticolinérgicos típicos de primera generación."
      },
      "dose": {
        "adult": {
          "pt": "Adultos e ≥12 anos: 4 mg VO a cada 4–6 h; máximo 24 mg/dia.",
          "es": "Adultos y ≥12 años: 4 mg VO cada 4–6 h; máximo 24 mg/día."
        },
        "pediatric": {
          "pt": "6–11 anos: 2 mg VO a cada 4–6 h; máximo 12 mg/dia. OTC: <6 anos não usar sem orientação específica.",
          "es": "6–11 años: 2 mg VO cada 4–6 h; máximo 12 mg/día. OTC: <6 años no usar sin indicación específica."
        }
      },
      "administration": {
        "pt": [
          "Evitar álcool, sedativos e tranquilizantes",
          "Cautela ao dirigir/operar máquinas",
          "Em crianças pode ocorrer excitação paradoxal"
        ],
        "es": [
          "Evitar alcohol, sedantes y tranquilizantes",
          "Precaución al conducir/operar maquinaria",
          "En niños puede aparecer excitación paradójica"
        ]
      },
      "renalAdjustment": {
        "required": false,
        "message": {
          "pt": "Sem ajuste renal fixo bem estabelecido; usar cautela em idosos/DRC avançada.",
          "es": "Sin ajuste renal fijo bien establecido; usar precaución en adultos mayores/ERC avanzada."
        }
      },
      "hepaticAdjustment": {
        "required": true,
        "message": {
          "pt": "Usar cautela em hepatopatia importante.",
          "es": "Usar precaución en hepatopatía importante."
        }
      },
      "commonAdverseEffects": {
        "pt": [
          "Sonolência",
          "Boca seca",
          "Visão borrada"
        ],
        "es": [
          "Somnolencia",
          "Boca seca",
          "Visión borrosa"
        ]
      },
      "dangerousAdverseEffects": {
        "pt": [
          "Delirium anticolinérgico",
          "Retenção urinária",
          "Sedação importante"
        ],
        "es": [
          "Delirium anticolinérgico",
          "Retención urinaria",
          "Sedación importante"
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
            "Glaucoma, HBP/retenção urinária, sedativos"
          ],
          "es": [
            "Glaucoma, HBP/retención urinaria, sedantes"
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
          "pt": "Anti-histamínico sedativo: álcool, sedativos e tranquilizantes aumentam sonolência; em crianças pode haver excitação paradoxal.",
          "es": "Antihistamínico sedante: alcohol, sedantes y tranquilizantes aumentan somnolencia; en niños puede haber excitación paradójica."
        }
      }
    },

    "dexclorfeniramina": {
      name: { pt: 'Dexclorfeniramina (Maleato de)', es: 'Dexclorfeniramina (Maleato de)' },
      category: 'alergia_imunologia',
      class: { pt: 'Anti-histamínico H1 de 1ª Geração (O Clássico "Alergia de Pele")', es: 'Antihistamínico H1 de 1ª Generación (El Clásico "Alergia de Piel")' },
      indications: {
        pt: ['Alergias cutâneas severas (Urticária, Picadas de inseto, Eczema)', 'Coceiras generalizadas refratárias', 'Seguro na Gravidez para rinites alérgicas intensas'],
        es: ['Alergias cutáneas severas (Urticaria, Picaduras de insecto, Eczema)', 'Picores generalizados refractarios', 'Seguro en el Embarazo para rinitis alérgicas intensas']
      },
      commercialNames: { br: ['Polaramine'], ar: ['Celestamine (Assoc)'] },
      presentation: { pt: ['Comprimidos 2 mg', 'Drágeas Repetabs (liberação prolongada) 6 mg', 'Xarope ou Gotas 2 mg/5 mL'], es: ['Comprimidos 2 mg', 'Grageas de liberación prolongada 6 mg', 'Jarabe o Gotas 2 mg/5 mL'] },
      mechanism: {
        pt: 'É o isômero destro puro da Clorfeniramina. Ao purificar a molécula, a indústria a tornou DUAS VEZES MAIS POTENTE (2 mg dela equivalem a 4 mg da clorfeniramina) e reduziu um pouco os efeitos colaterais. É o "rei" da alergia de pele no Brasil, altamente confiável na obstetrícia e pediatria de emergência, apesar da intensa sonolência induzida.',
        es: 'Es el isómero diestro puro de la Clorfeniramina. Al purificar la molécula, la industria la hizo EL DOBLE DE POTENTE (2 mg equivalen a 4 mg de clorfeniramina). Es altamente confiable en obstetricia y pediatría de emergencia, a pesar del sueño inducido.'
      },
      dose: {
        adult: {
          pt: '2 mg via oral a cada 6 a 8 horas. Repetabs (6 mg) a cada 12 horas.',
          es: '2 mg vía oral cada 6 a 8 horas. Repetabs (6 mg) cada 12 horas.'
        },
        pediatric: {
          pt: '2 a 6 anos: 0,5 mg (1,25 mL) a cada 8h. 6 a 12 anos: 1 mg (2,5 mL) a cada 8h.',
          es: '2 a 6 años: 0,5 mg (1,25 mL) cada 8h. 6 a 12 años: 1 mg (2,5 mL) cada 8h.'
        }
      },
      administration: { pt: ['Xarope/Comprimidos não tem relação com comida. As Drágeas de liberação prolongada NUNCA devem ser esmagadas ou mastigadas.'], es: ['Jarabe/Comprimidos no tiene relación con comida. Las Grageas de liberación prolongada NUNCA deben ser masticadas o aplastadas.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste estrito.', es: 'Sin necesidad de ajuste estricto.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Metabolizado no fígado, reduzir dose em cirrose grave.', es: 'Metabolizado en hígado, reducir dosis en cirrosis grave.' } },
      commonAdverseEffects: { pt: ['Sonolência intensa', 'Astenia', 'Espessamento das secreções brônquicas'], es: ['Somnolencia intensa', 'Astenia', 'Espesamiento de las secreciones bronquiales'] },
      dangerousAdverseEffects: { pt: ['Convulsões e delírio grave em intoxicação pediátrica'], es: ['Convulsiones y delirio grave en intoxicación pediátrica'] },
      contraindications: {
        absolute: { pt: ['Bebês menores de 2 anos', 'Asma brônquica aguda', 'Pacientes em uso de IMAO'], es: ['Bebés menores de 2 años', 'Asma bronquial aguda', 'Pacientes en uso de IMAO'] },
        relative: { pt: ['Idosos com glaucoma, HBP ou demência (Risco da Toxidrome Anticolinérgica)'], es: ['Ancianos con glaucoma, HBP o demencia (Riesgo de Toxidrome Anticolinérgico)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'ALERTA PEDIÁTRICO: Um erro muito comum de mães é dar doses "a mais" de Polaramine para bebês com coceira severa. A superdosagem no cérebro imaturo da criança NÃO a faz dormir; pelo contrário, causa agitação paradoxal extrema, alucinações ("vendo bichos") e convulsões hipercinéticas.', es: 'ALERTA PEDIÁTRICA: Un error común de madres es dar dosis extras de Polaramine para bebés con picor. La sobredosis en el cerebro inmaduro NO hace dormir; al contrario, causa agitación paradójica extrema, alucinaciones y convulsiones.' }
      }
    }

  }); /* fim Object.assign ALERGIA_IMUNOLOGIA_DRUGS_DB — BUILD 394 Lote 1 + BUILD 395 Lote 2
         Lote 1 (Desloratadina + Cetirizina + Levocetirizina + Fexofenadina + Ebastina)
         Lote 2 (Bilastina + Rupatadina + Difenidramina + Clorfeniramina + Dexclorfeniramina)
         Total: 10 fármacos anti-histamínicos H1 */

  /* ── BUILD 446 GUARD ─────────────────────────────────────────────── */
  if (typeof window.ALERGIA_IMUNOLOGIA_DRUGS_DB !== 'object' || window.ALERGIA_IMUNOLOGIA_DRUGS_DB === null) return;
  Object.assign(window.ALERGIA_IMUNOLOGIA_DRUGS_DB, {

    /* ── TRIANCINOLONA ACETONIDA TÓPICA (760) ───────────────────────────── */
    "triancinolona_topica": {
      name: { pt: 'Triancinolona Acetonida (Uso Tópico)', es: 'Triancinolona Acetonida (Uso Tópico)' },
      category: 'dermatologia',
      class: { pt: 'Corticoide Tópico de Potência Média / Anti-inflamatório Cutâneo', es: 'Corticosteroide Tópico de Potencia Media / Antiinflamatorio Cutáneo' },
      indications: {
        pt: ['Dermatites responsivas a corticoides (Eczema, Dermatite Seborreica, Dermatite de Contato)', 'Psoríase em placas leve a moderada', 'Lesões inflamatórias ou ulcerativas da mucosa oral (Formulação em orabase para aftas)'],
        es: ['Dermatosis inflamatorias (Eczema, Dermatitis de Contacto)', 'Psoriasis en placas leve', 'Lesiones ulcerativas de la mucosa oral (en orabase)']
      },
      commercialNames: { br: ['Omcilon-A em Orabase', 'Therasona'], ar: ['Kenacort', 'Delmeson', 'Triancinolona Orabase'] },
      presentation: { pt: ['Pomada, Creme ou Pasta em Orabase contendo 1 mg/g (0,1%) de Triancinolona Acetonida'], es: ['Crema, Pomada o Pasta dental al 0,1%'] },
      mechanism: {
        pt: 'O Modulador Epidérmico de Média Potência. Difunde-se através das membranas das células da pele e liga-se aos receptores de glicocorticoides no citoplasma. Esse complexo viaja até o núcleo do queratinócito e ativa os genes que fabricam a Lipocortina-1. A lipocortina bloqueia a enzima Fosfolipase A2, cortando imediatamente a liberação de Ácido Araquidônico. Sem ele, a pele para de fabricar Prostaglandinas e Leucotrienos, extinguindo a vermelhidão (eritema), o inchaço e a coceira (prurido) local.',
        es: 'Corticosteroide fluorado de potencia media. Actúa intracelularmente induciendo la síntesis de proteínas inhibidoras de la fosfolipasa A2 (lipocortinas). Esto detiene la cascada del ácido araquidónico, disminuyendo la formación de mediadores inflamatorios vasculares, reduciendo el eritema, edema y prurito en la dermis.'
      },
      dose: {
        adult: {
          pt: 'Uso Cutâneo/Oral: Aplicar uma pequena camada sobre a área afetada, DUAS a TRÊS vezes ao dia, espalhando suavemente. Limitar o uso contínuo a no máximo 2 a 4 semanas para evitar atrofia da pele.',
          es: 'Aplicar una capa delgada sobre la zona lesionada 2 a 3 veces al día. Limitar el uso continuo a un máximo de 14 a 21 días.'
        },
        pediatric: {
          pt: 'Crianças: Aplicar a menor quantidade eficaz, uma ou duas vezes ao dia, por no máximo 5 a 7 dias. Não cobrir com fraldas ou curativos oclusivos (VER ALERTAS).',
          es: 'Utilizar con extrema precaución en niños por menor superficie corporal; máximo 5-7 días sin oclusión.'
        }
      },
      administration: { pt: ['Uso dermatológico local ou bucal. Na mucosa oral (aftas), aplicar a pasta em orabase sem esfregar, apenas pressionando sobre a ferida, criando um filme protetor que gruda na saliva.'], es: ['Uso tópico. En orabase bucal, aplicar presionando suavemente sobre la lesión sin frotar hasta formar una película adhesiva.'] },
      renalAdjustment: { required: false, message: { pt: 'Ação puramente local, sem necessidade de ajuste de dose.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste clínico.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Ardor, queimação e ressecamento local na pele', 'Estrias cutâneas lineares purpúricas (se uso prolongado)', 'Descoloração da pele (hipopigmentação)'], es: ['Ardor, escozor y sequedad local', 'Estrías dérmicas', 'Hipopigmentación focal'] },
      dangerousAdverseEffects: { pt: ['ATROFIA CUTÂNEA SEVERA (a pele fica fina feito papel de seda e rasga sozinha)', 'Supressão do eixo adrenal sistêmico (Síndrome de Cushing iatrogênica por absorção em feridas abertas)'], es: ['ATROFIA CUTÁNEA SEVERA (adelgazamiento epidérmico irreversible)', 'Supresión del eje adrenal por absorción sistémica excesiva'] },
      contraindications: {
        absolute: { pt: ['Infecções cutâneas ativas não tratadas (tuberculose cutânea, herpes simples, sífilis cutânea ou fungos)', 'Acne vulgar ou Rosácea na face'], es: ['Infecciones cutáneas fúngicas, bacterianas o virales activas no tratadas', 'Acné vulgar o Rosácea'] },
        relative: { pt: ['Uso em áreas de dobras (axila, virilha, inframamária) devido à absorção amplificada'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'A ARMADILHA DA OCLUSÃO (EFEITO FRALDA): Nunca aplique Triancinolona ou qualquer corticoide na pele de um bebê e cubra com fralda plástica apertada. A oclusão abafa a pele, multiplica a absorção do corticoide em até 10 vezes e joga o remédio direto no sangue da criança, causando paragem de crescimento e Síndrome de Cushing.', es: 'EL PELIGRO DE LA OCLUSIÓN: Jamás aplique corticoides tópicos bajo pañales de plástico o vendajes herméticos. La oclusión aumenta hasta 10 veces la absorción percutánea del fármaco, provocando efectos sistémicos severos como supresión adrenal en lactantes.' }
      },
      references: {
        pt: 'Consenso de Corticoterapia Tópica da Sociedade Brasileira de Dermatologia (SBD); British Journal of Dermatology; Manual Lexicomp.',
        es: 'Consenso de la Sociedad Argentina de Dermatología (SAD); Manual de Dermatología de Fitzpatrick.'
      }
    },

    /* ── CLOBETASOL PROPIONATO (761) ────────────────────────────────────── */
    "clobetasol": {
      name: { pt: 'Clobetasol (Propionato de)', es: 'Clobetasol (Propionato de)' },
      category: 'dermatologia',
      class: { pt: 'Corticoide Tópico de Potência Ultra-Alta / Classe I Superior', es: 'Corticosteroide Tópico de Potencia Ultra-Alta / Clase I Superior' },
      indications: {
        pt: ['Psoríase em placas recalcitrante moderada a grave (corpo e couro cabeludo)', 'Líquen Plano hipertrófico e Líquen Escleroso vulvar', 'Lúpus Eritematoso Discoide cutâneo', 'Eczemas graves resistentes a outros corticoides'],
        es: ['Psoriasis recalcitrante severa', 'Liquen Escleroso e Liquen Plano hipertrófico', 'Lupus eritematoso discoide cutáneo', 'Eczemas graves rebeldes']
      },
      commercialNames: { br: ['Psorex', 'Cloob', 'Clobesol'], ar: ['Dermadex', 'Salac', 'Clobesol Argentina'] },
      presentation: { pt: ['Creme, Pomada ou Solução Capilar contendo 0,5 mg/g (0,05%) de Propionato de Clobetasol'], es: ['Crema, Pomada o Loción capilar al 0,05%'] },
      mechanism: {
        pt: 'O Super-Corticoide de Choque. É o corticoide tópico mais potente da medicina mundial (Classe I). Sua estrutura altamente halogenada confere uma afinidade esmagadora pelos receptores nucleares. Ele causa vasoconstrição periférica massiva imediata, esvazia o infiltrado de linfócitos T da derme e bloqueia as citocinas interleucinas (IL-1, IL-6) de forma tão violenta que interrompe a replicação celular exagerada na psoríase em poucos dias.',
        es: 'Corticosteroide tópico de clase I (potencia ultra-alta). Induce una vasoconstricción dérmica local masiva y ejerce un potente efecto inmunosupresor bloqueando la síntesis de citocinas quimiotácticas de linfocitos T. Detiene la hiperproliferación de queratinocitos en placas de psoriasis crónicas.'
      },
      dose: {
        adult: {
          pt: 'Uso Cutâneo: Aplicar uma fina camada sobre as lesões, UMA a DUAS vezes ao dia. TETO MÁXIMO PROIBITIVO: Não ultrapassar o limite de 50 g de creme por semana e não usar por mais de 2 semanas seguidas.',
          es: 'Aplicar 1 o 2 veces al día una capa muy fina sobre la lesión. LÍMITE ABSOLUTO: No exceder los 50 g semanales de crema y suspender estrictamente a las 2 semanas.'
        },
        pediatric: {
          pt: 'ABSOLUTAMENTE CONTRAINDICADO em crianças menores de 12 anos devido ao risco fulminante de supressão hormonal e parada de crescimento.',
          es: 'ABSOLUTAMENTE CONTRAINDICADO en menores de 12 años por riesgo neuroendocrino severo.'
        }
      },
      administration: { pt: ['Uso dermatológico restrito. Lavar as mãos imediatamente após a aplicação para evitar absorção nos dedos. NUNCA aplicar na face, pálpebras, axilas ou virilhas (risco de glaucoma e estrias purpúricas severas).'], es: ['Uso tópico exclusivo. Contraindicado en cara, párpados o pliegues axilares/inguinales por riesgo de glaucoma, catarata o estrías irreversibles.'] },
      renalAdjustment: { required: false, message: { pt: 'Ação local, sem ajuste renal.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste de dose.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Atrofia cutânea precoce e Telangiectasias (surgimento de microvasos arroxeadas na pele)', 'Sensação de queimação severa', 'Hipertricose local (nascimento de pelos finos na área)'], es: ['Telangiectasias (arañas vasculares)', 'Adelgazamiento dérmico visible', 'Hipertricosis localizada'] },
      dangerousAdverseEffects: { pt: ['SÍNDROME DE CUSHING IATROGÊNICA (obstrução do eixo adrenal com face de lua cheia, estrias gigantes e estofamento de gordura nas costas se usado fora do teto)', 'Glaucoma de ângulo aberto e Cegueira bilateral se aplicado próximo aos olhos'], es: ['SÍNDROME DE CUSHING IATROGÉNICO por supresión del cortisol endógeno', 'Glaucoma y catarata si se aplica periorbitario'] },
      contraindications: {
        absolute: { pt: ['Menores de 12 anos de idade', 'Lesões cutâneas na face (rosácea, dermatite perioral)', 'Infecções de pele virais ou bacterianas não tratadas'], es: ['Niños < 12 años', 'Aplicación en rostro o párpados', 'Infecciones cutáneas activas'] },
        relative: { pt: ['Uso em áreas extensas que passem de 10% da superfície corporal'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A REGRA DE OURO DOS 14 DIAS (O REX DO REBOTE): O Clobetasol é um bisturi químico. Ele limpa a psoríase rápido, mas se o paciente usar por meses como se fosse hidratante, o corpo para de fabricar cortisol. Ao suspender o creme de uma vez, a psoríase volta espalhada no corpo inteiro em uma forma grave com pus e bolhas de febre (Psoríase Pustulosa Generalizada de Von Zumbusch). O desmame deve ser lento.', es: 'ALERTA DE REBOTE PSORIÁSICO (SÍNDROME DE VON ZUMBUSCH): No usar por más de 14 días. La suspensión abrupta tras el abuso crónico de clobetasol gatilla un rebote severo transformando una psoriasis leve en Psoriasis Pustulosa Generalizada (mortal). El retiro debe ser escalonado.' }
      },
      references: {
        pt: 'Guidelines for the Management of Psoriasis (AAD); Manual de Terapêutica Dermatológica SBD; Bula Profissional Psorex.',
        es: 'Guías de Consenso de Psoriasis de la SAD; Manual de Dermatología de Fitzpatrick.'
      }
    },

    /* ── FLUOCINOLONA ACETONIDA (762) ───────────────────────────────────── */
    "fluocinolona": {
      name: { pt: 'Fluocinolona Acetonida', es: 'Fluocinolona Acetonida' },
      category: 'dermatologia',
      class: { pt: 'Corticoide Tópico de Potência Média-Alta / Classe III', es: 'Corticosteroide Tópico de Potencia Media-Alta / Clase III' },
      indications: {
        pt: ['Eczema crônico liquenificado', 'Dermatite Atópica moderada resistente', 'Prurido anogenital severo intenso', 'Tratamento de Melasma facial (co-formulado em dose tripla com Hidroquinona e Tretinoína)'],
        es: ['Eczema crónico liquenificado', 'Dermatitis Atópica refractaria', 'Tratamiento del Melasma facial (coformulado con Hidroquinona y Tretinoína)']
      },
      commercialNames: { br: ['Synalar', 'Tri-Luma (Assoc)'], ar: ['Synalar', 'Triluma', 'Fluocinolona Richmond'] },
      presentation: { pt: ['Creme ou Pomada contendo 0,25 mg/g (0,025%) de Fluocinolona Acetonida'], es: ['Crema o Ungüento al 0,025%'] },
      mechanism: {
        pt: 'Corticoide bifluorado de potência intermediária-alta. Inibe a cascata inflamatória celular, diminui a quimiotaxia de neutrófilos e provoca vasoconstrição local. Na fórmula do Melasma (Tri-Luma), seu papel é puramente bloquear a inflamação irritativa que a Hidroquinona e o Ácido Retinoico causam na face do doente, impedindo que a pele inflame e manche de rebote.',
        es: 'Corticoide difluorado de potencia intermedia-alta con propiedades antiinflamatorias, antipruríticas y vasoconstrictoras. En la terapia del melasma, su función es suprimir la inflamación tisular inducida por el ácido retinoico y la hidroquinona, previniendo la hiperpigmentación postinflamatoria.'
      },
      dose: {
        adult: {
          pt: 'Uso Dermatológico: Aplicar uma pequena camada sobre a região afetada, DUAS a TRÊS vezes ao dia. Na fórmula clareadora (Tri-Luma), aplicar apenas UMA VEZ ao dia, estritamente à noite antes de dormir.',
          es: 'Aplicar una capa fina 2 a 3 veces al día en la zona afectada. En fórmulas despigmentantes faciales, aplicar SOLO UNA VEZ al día estrictamente por la noche.'
        },
        pediatric: {
          pt: 'Evitar o uso em menores de 2 anos; acima desta idade usar sob estrito critério e por cursos curtos menores de 5 dias.',
          es: 'Evitar en niños menores de 2 años.'
        }
      },
      administration: { pt: ['Uso tópico externo. Se usado na face para clareamento de manchas, lavar o rosto completamente pela manhã e aplicar obrigatoriamente FILTRO SOLAR FPS > 50 para evitar queimaduras severas.'], es: ['Uso tópico. Si se aplica en rostro por melasma, es obligatorio retirar el producto por la mañana y usar fotoprotección extrema FPS > 50.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste de dose.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Descamação e eritema local', 'Sensação de agulhadas na pele', 'Dermatite perioral e foliculite'], es: ['Descamación y eritema local', 'Parestesias cutáneas leves', 'Dermatitis perioral'] },
      dangerousAdverseEffects: { pt: ['Atrofia dérmica facial irreversível com pele rendada', 'Rosácea induzida por corticoide (a face fica permanentemente vermelha com espinhas de corticoide)'], es: ['Atrofia dérmica facial irreversible', 'Rosácea esteroidea (eritrosis permanente con pápulas)'] },
      contraindications: {
        absolute: { pt: ['Infecções bacterianas ou herpéticas faciais ativas', 'Glaucoma de ângulo fechado se aplicado periorbitário'], es: ['Infecciones faciales activas', 'Aplicación palpebral directa'] },
        relative: { pt: ['Exposição solar direta ou trabalho sob radiação UV intensa'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O ERRO DA QUEIMADURA DO SOL (ALERTA DO MELASMA): Usar o creme clareador com Fluocinolona (Tri-Luma) e esquecer de passar protetor solar no dia seguinte causa uma queimadura química solar gravíssima. A pele da face descama inteira e mancha de preto de forma irreversível por efeito rebote. Proteção solar absoluta é obrigatória.', es: 'EL PELIGRO DEL SOL CON RETINOIDES: El uso de la fórmula triple para melasma sensibiliza la epidermis de forma extrema. Exponerse al sol sin protector solar total al día siguiente provoca quemaduras químicas severas e hiperpigmentación rebote irreversible. Fotoprotección obligatoria.' }
      },
      references: {
        pt: 'Melasma Management Guidelines (SBD); FDA Product Information Tri-Luma; Manual de Terapêutica Tópica.',
        es: 'Guías de Manejo de Melasma de la SAD; Manual de Dermatología de Fitzpatrick.'
      }
    },

    /* ── DESONIDA (763) ─────────────────────────────────────────────────── */
    "desonida": {
      name: { pt: 'Desonida', es: 'Desonida' },
      category: 'dermatologia',
      class: { pt: 'Corticoide Tópico de Baixa Potência / Classe VI Não-Halogenado', es: 'Corticosteroide Tópico de Baja Potencia / Clase VI No Halogenado' },
      indications: {
        pt: ['Dermatite Atópica e Eczema infantil na face ou dobras corporais', 'Dermatite Seborreica na face (sobrancelhas, barba, sulco nasal)', 'Dermatite de fraldas severa (uso curto controlado)'],
        es: ['Dermatitis Atópica infantil en rostro y pliegues', 'Dermatitis Seborreica facial', 'Dermatitis del pañal severa']
      },
      commercialNames: { br: ['Desonol', 'Adinos', 'Steron'], ar: ['Desonida Klonal', 'Microsona'] },
      presentation: { pt: ['Creme, Pomada ou Loção capilar contendo 0,5 mg/g (0,05%) de Desonida'], es: ['Crema, Ungüento o Loción al 0,05%'] },
      mechanism: {
        pt: 'O Protetor das Áreas Sensíveis. É um corticoide não-fluorado de baixa potência. Ele atua ativando as lipocortinas e diminuindo a inflamação tecidual, mas possui uma estrutura molecular leve que minimiza de forma marcante os efeitos de quebra de colágeno. Por isso, ele quase não causa atrofia na pele fina e possui absorção sistêmica segura, sendo a droga de escolha para a face e pediatria.',
        es: 'Corticosteroide no fluorado de baja potencia (Clase VI). Su diseño molecular ejerce actividad antiinflamatoria local moderada con un impacto mínimo sobre la síntesis de colágeno y elastina, reduciendo drásticamente el riesgo de inducir estrías o adelgazamiento dérmico en zonas de piel fina.'
      },
      dose: {
        adult: {
          pt: 'Uso Tópico: Aplicar uma camada fina sobre a lesão inflamatória, DUAS a TRÊS vezes ao dia, massageando de forma leve até desaparecer o creme.',
          es: 'Aplicar una pequeña cantidad sobre las lesiones 2 a 3 veces al día con un masaje suave.'
        },
        pediatric: {
          pt: 'Crianças e Bebês (> 3 meses): Aplicar uma pequena quantidade nas lesões, 1 a 2 vezes ao dia, por no máximo 5 a 7 dias seguidos.',
          es: 'Niños y lactantes (> 3 meses): 1 o 2 aplicaciones diarias por un máximo estricto de 7 días.'
        }
      },
      administration: { pt: ['Uso tópico externo. É o corticoide mais seguro para aplicação na pele da face e em áreas de dobras cutâneas (axilas, virilhas), mas o uso não deve ser prolongado sem diagnóstico.'], es: ['Uso tópico. Es el corticoide de elección para áreas de piel delicada (Rostro, párpados y pliegues), evitando el uso crónico indiscriminado.'] },
      renalAdjustment: { required: false, message: { pt: 'Ação local, sem necessidade de ajuste de dose.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Irritação cutânea leve transitória', 'Erupção tipo foliculite (espinhas de pelo)', 'Prurito ou eritema localizado'], es: ['Irritación local leve', 'Foliculitis transitoria', 'Prurito focal'] },
      dangerousAdverseEffects: { pt: ['Atrofia cutânea e telangiectasias (Raríssimo, ocorrendo apenas se uso contínuo abusivo por meses na face)'], es: ['Atrofia dérmica superficial (Solo en caso de abuso prolongado por meses)'] },
      contraindications: {
        absolute: { pt: ['Infecções cutâneas virais ativas (Catapora, Herpes simples), fúngicas ou bacterianas não tratadas'], es: ['Infecciones de piel activas no tratadas por riesgo de diseminación infecciosa'] },
        relative: { pt: ['Menores de 3 meses de vida (falta de dados de segurança)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O EQUÍVOCO DO USO CONTÍNUO (A FALSA POMADA HIDRATANTE): Mãe de criança com dermatite atópica tende a achar que o Desonol é hidratante porque limpa a coceira do filho. Se ela usar o creme todos os dias por 6 meses na face da criança, a pele do rosto vai afinar, os vasinhos vão estourar e a criança sofrerá rebote inflamatório. Use apenas nas crises.', es: 'EL ERROR DEL USO PROLONGADO EN ATÓPICOS: Los padres suelen confundir la Desonida con una crema hidratante. Su uso diario continuo por meses en el rostro del lactante provoca fragilidad capilar y eritrosis perioral. Debe limitarse estrictamente a los brotes inflamatórios agudos.' }
      },
      references: {
        pt: 'Diretrizes de Dermatite Atópica da Sociedade Brasileira de Pediatria (SBP) e SBD; Pediatric Dermatology Guide; Bula Desonol.',
        es: 'Consenso de Dermatitis Atópica de la Sociedad Argentina de Pediatría (SAP); Manual de Dermatología de Fitzpatrick.'
      }
    },

    /* ── ALCLOMETASONA DIPROPIONATO (764) ───────────────────────────────── */
    "alclometasona": {
      name: { pt: 'Alclometasona (Dipropionato de)', es: 'Alclometasona (Dipropionato de)' },
      category: 'dermatologia',
      class: { pt: 'Corticoide Tópico de Baixa-Média Potência / Classe V-VI', es: 'Corticosteroide Tópico de Baja-Media Potencia / Clase V-VI' },
      indications: {
        pt: ['Eczemas e dermatites atópicas leves em crianças a partir de 1 ano de idade', 'Queimaduras solares inflamatórias dolorosas', 'Picadas de insetos com reação local intensa'],
        es: ['Eczemas y dermatitis leves en niños > 1 año', 'Quemaduras solares inflamatorias', 'Picaduras de insectos con reacción local severa']
      },
      commercialNames: { br: ['Alclometasona (Importação)'], ar: ['Vaderm', 'Alclovate'] },
      presentation: { pt: ['Creme ou Pomada contendo 0,5 mg/g (0,05%) de Dipropionato de Alclometasona'], es: ['Crema o Ungüento al 0,05%'] },
      mechanism: {
        pt: 'Corticoide tópico de baixa potência. Possui um átomo de cloro posicionado estrategicamente para conferir atividade anti-inflamatória tópica com curtíssima meia-vida no sangue. Caso sofra absorção sistêmica percutânea, ele é quebrado quimicamente e destruído de forma imediata no sangue, impedindo a supressão do cortisol interno.',
        es: 'Corticosteroide de potencia baja-moderada. Su perfil molecular está diseñado para metabolizarse rápidamente en la circulación sistémica en caso de absorción percutánea, reduciendo al mínimo la capacidad de bloquear las glándulas suprarrenales y el eje endocrino del niño.'
      },
      dose: {
        adult: {
          pt: 'Uso Tópico: Aplicar uma fina camada sobre a área da pele inflamada, DUAS a TRÊS vezes ao dia, massageando levemente.',
          es: 'Aplicar una delgada película sobre la zona afectada 2 a 3 veces al día.'
        },
        pediatric: {
          pt: 'Crianças > 1 ano: Aplicar uma pequena quantidade nas lesões 1 ou 2 vezes ao dia, por no máximo 14 dias seguidos.',
          es: 'Niños > 1 año: 1 o 2 aplicaciones diarias por un máximo de 2 semanas.'
        }
      },
      administration: { pt: ['Uso tópico cutâneo externo. Evitar curativos oclusivos ou abafamento da área com plásticos para não induzir absorção excessiva anormal.'], es: ['Uso tópico. No aplicar bajo vendaje oclusivo o pañales plásticos ajustados.'] },
      renalAdjustment: { required: false, message: { pt: 'Ação local, sem ajuste renal.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Prurito e eritema transitório na aplicação', 'Ressecamento de pele', 'Foliculite leve'], es: ['Prurito y eritema transitorio', 'Sequedad cutánea', 'Foliculitis leve'] },
      dangerousAdverseEffects: { pt: ['Supressão adrenal sistêmica crônica (Apenas se usado de forma abusiva em áreas gigantes de pele ferida por meses)'], es: ['Supresión adrenal sistémica (Extremadamente raro, solo por abuso crónico extenso)'] },
      contraindications: {
        absolute: { pt: ['Infecções cutâneas não tratadas bacterianas, fúngicas ou virais ativas', 'Menores de 1 ano de idade'], es: ['Infecciones de piel activas no tratadas', 'Niños menores de 1 año'] },
        relative: { pt: ['Aplicação em feridas abertas sangrantes extensas'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O CORTICOIDE DA PEDIATRIA SEGURA: A Alclometasona é considerada um dos corticoides tópicos mais seguros do mundo para a pediatria, junto com a Desonida. Sua destruição rápida no sangue garante que, mesmo que a mãe aplique um pouco a mais, a medula e o crescimento do bebê não sofrerão travamento hormonal.', es: 'EL PERFIL DE SEGURIDAD PEDIÁTRICA: Se destaca por sufrir una degradación metabólica instantánea tras ingresar al torrente sanguíneo, lo que la convierte en uno de los corticosteroides tópicos más seguros para el tratamiento a corto plazo de eczemas infantiles.' }
      },
      references: {
        pt: 'FDA Label Alclovate cream; Pediatric Dermatology Guidelines; Manual de Terapêutica Tópica.',
        es: 'FDA Prescribing Information; Ficha Técnica CIMA Alclometasona; Manual de Pediatría del Hospital Garrahan.'
      }
    },

    /* ── DIFLUCORTOLONA VALERATO (765) ──────────────────────────────────── */
    "diflucortolona": {
      name: { pt: 'Diflucortolona (Valerato de)', es: 'Diflucortolona (Valerato de)' },
      category: 'dermatologia',
      class: { pt: 'Corticoide Tópico de Potência Alta / Classe II Superior', es: 'Corticosteroide Tópico de Potencia Alta / Clase II Superior' },
      indications: {
        pt: ['Eczemas graves e agudos chorosos ou secos rebeldes', 'Dermatite de Contato severa ocupacional', 'Psoríase palmoplantar (mãos e pés) com rachaduras e crostas grossas'],
        es: ['Eczemas graves y agudos rebeldes', 'Dermatitis de Contacto severa', 'Psoriasis palmoplantar con hiperqueratosis']
      },
      commercialNames: { br: ['Nerisone (Importação hospitalar)'], ar: ['Nerisona'] },
      presentation: { pt: ['Creme, Pomada ou Creme Oleoso contendo 1 mg/g (0,1%) de Valerato de Diflucortolona'], es: ['Crema, Pomada o Ungüento al 0,1%'] },
      mechanism: {
        pt: 'O Perfurador de Crostas Grossas. É um corticoide bifluorado de alta potência. Sua estrutura molecular confere uma penetração profunda e agressiva através das barreiras de queratina grossa da pele das palmas das mãos e solas dos pés. Ele bloqueia o recrutamento de macrófagos, estabiliza os microvasos e extingue os quadros inflamatórios descamativos secos e graves em poucos dias.',
        es: 'Corticosteroide fluorado de alta potencia (Clase II). Su estructura química de alta lipofilia le otorga una capacidad excepcional para atravesar la capa córnea hiperqueratósica gruesa de las palmas y plantas de los pies, suprimiendo la infiltración leucocitaria y disminuyendo el edema y liquenificación.'
      },
      dose: {
        adult: {
          pt: 'Uso Tópico: Aplicar uma fina camada sobre as lesões graves, DUAS vezes ao dia. Limitar o curso de tratamento a no máximo 2 a 3 semanas seguidas.',
          es: 'Aplicar una capa delgada sobre las lesiones graves 1 o 2 veces al día. Curso de tratamiento severamente limitado a un máximo de 2-3 semanas.'
        },
        pediatric: {
          pt: 'CONTRAINDICADO em menores de 12 anos pelo alto risco de atrofia cutânea e absorção corporal sistêmica.',
          es: 'CONTRAINDICADO en menores de 12 años por alta potencia.'
        }
      },
      administration: { pt: ['Uso tópico externo. O creme oleoso é indicado para lesões extremamente secas e descamativas crônicas; o creme comum é indicado para fases agudas e chorosas. NUNCA aplicar na face.'], es: ['Uso tópico. La pomada oleosa se reserva para lesiones secas crónicas hiperqueratósicas. Prohibido aplicar en rostro.'] },
      renalAdjustment: { required: false, message: { pt: 'Ação tópica, sem ajuste renal.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste de dose.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Sensação de queimação local intensa', 'Atrofia local e estrias na pele', 'Telangiectasias focal'], es: ['Ardor y escozor local intenso', 'Atrofia epidérmica focal', 'Telangiectasias'] },
      dangerousAdverseEffects: { pt: ['Supressão do eixo adrenal sistêmico com insuficiência suprarrenal aguda rebote se interrompido de uma vez após uso abusivo extenso'], es: ['Crisis de insuficiencia suprarrenal aguda por supresión hormonal si se abusa en áreas extensas'] },
      contraindications: {
        absolute: { pt: ['Menores de 12 anos de idade', 'Lesões cutâneas tuberculosas ou sifilíticas ativas', 'Infecções herpéticas ou por varicela de pele'], es: ['Niños menores de 12 años', 'Infecciones de piel sifilíticas, tuberculosas o virales activas'] },
        relative: { pt: ['Uso sob bandagens oclusivas estritas (eleva o risco de atrofia ao extremo)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O ALERTA DA RACHADURA DA MÃO (O COURO DO NERISONE): A Nerisona é excelente para limpar aquela alergia grossa da palma da mão que descama e coça. Mas atenção: ela é forte feito o Clobetasol. Se o paciente usar no rosto para clarear mancha por erro, vai derreter o colágeno da face, deixando a pele fina feito plástico e cheia de rugas vermelhas irreversíveis.', es: 'ALERTA DE ALTA POTENCIA: Posee un perfil de penetración tisular sumamente agresivo. Su uso por error en la piel del rostro destruye el colágeno local en pocas semanas, provocando atrofia irreversible con piel traslúcida y rosácea esteroidea de difícil manejo.' }
      },
      references: {
        pt: 'Nerisone Product Safety Information; Consenso de Eczema Ocupacional da SBD; Manual de Dermatologia Prática.',
        es: 'Ficha Técnica Nerisona (Agencia Española de Medicamentos CIMA); Manual de Dermatología de Fitzpatrick.'
      }
    },

    /* ── PERÓXIDO DE BENZOÍLA (766) ─────────────────────────────────────── */
    "peroxido_de_benzoila": {
      name: { pt: 'Peróxido de Benzoíla', es: 'Peróxido de Benzóilo' },
      category: 'dermatologia',
      class: { pt: 'Agente Antiacneico Tópico Queratolítico / Gerador de Oxigênio Radicalar', es: 'Agente Antiacneico Tópico Queratolítico / Generador de Oxígeno Radicalario' },
      indications: {
        pt: ['Tratamento tópico da Acne Vulgar leve a moderada (graus I e II, com cravos e espinhas inflamatórias)'],
        es: ['Tratamiento tópico del Acné Vulgar leve a moderado (grados I y II)']
      },
      commercialNames: { br: ['Benzac AC', 'Solugel', 'Acneol'], ar: ['Benzac', 'Acneclin B', 'Peróxido de Benzóilo Beta'] },
      presentation: { pt: ['Gel ou Gel de limpeza nas concentrações de 2,5%, 5% e 10%'], es: ['Gel tópico al 2,5%, 5% y 10%'] },
      mechanism: {
        pt: 'O Asfixiador de Bactérias da Acne. Ao ser aplicado na pele, ele penetra no folículo pilossebáceo e libera Oxigênio reativo livre dentro do poro entupido. A bactéria causadora da acne, o Cutibacterium acnes, é uma bactéria anaeróbia estrita (ela odeia oxigênio e morre na sua presença). O oxigênio oxida as proteínas da bactéria destruindo-a instantaneamente, além de ter efeito queratolítico que descama o cravo e limpa o poro.',
        es: 'Agente oxidante potente que penetra en el folículo pilosebáceo y libera especies reactivas de oxígeno libres. Ejerce una acción bactericida letal directa contra Cutibacterium acnes (organismo anaerobio). Su acción oxidativa degrada las proteínas bacterianas sin inducir resistencia antibiótica, poseyendo además efectos queratolíticos que disuelven el tapón del comedón.'
      },
      dose: {
        adult: {
          pt: 'Uso Tópico: Aplicar uma fina camada do gel sobre as áreas afetadas pela acne, UMA a DUAS vezes ao dia. Iniciar sempre com a menor concentração (2,5%) à noite para testar a sensibilidade da pele do paciente.',
          es: 'Aplicar una capa fina sobre las zonas afectadas por el acné 1 o 2 veces al día. Iniciar con concentración al 2,5% por la noche.'
        },
        pediatric: {
          pt: 'Aprovado para uso em adolescentes a partir de 12 anos de idade nas mesmas doses do adulto.',
          es: 'Aprobado en pacientes >= 12 años.'
        }
      },
      administration: { pt: ['Uso tópico facial/corporal. Lavar o rosto com sabonete suave antes de aplicar, secar bem a pele e passar o gel. EVITAR aplicar nos cantos do nariz, boca e pálpebras devido à irritação severa. OBRIGATÓRIO usar filtro solar de dia.'], es: ['Uso tópico. Aplicar sobre piel limpia y completamente seca. Evitar mucosas, ojos y comisuras nasales. Uso de protector solar diurno obligatorio.'] },
      renalAdjustment: { required: false, message: { pt: 'Ação local, sem absorção sistêmica, sem ajuste.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste de dose.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['DESCAMAÇÃO INTENSA e ressecamento da pele (efeito queratolítico esperado)', 'Eritema (vermelhidão) e queimação local', 'Prurito e dermatite de contato por irritação primária'], es: ['Descamación intensa y sequedad cutánea', 'Eritema y sensación de ardor local', 'Prurito'] },
      dangerousAdverseEffects: { pt: ['Dermatite Alérgica de Contato severa com bolhas e inchaço bipalpebral por hipersensibilidade de contato crônica (~2% dos casos)'], es: ['Dermatitis por hipersensibilidad de contacto grave con edema bipalpebral y eccema agudo'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade conhecida ao peróxido de benzoíla', 'Pele ferida, queimada ou com eczema ativo'], es: ['Hipersensibilidad conocida al fármaco', 'Piel con eccema abierto o quemaduras'] },
        relative: { pt: ['Exposição à radiação ultravioleta ou bronzeamento artificial ativo (risco de queimadura severa)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O ALERTA DA TOALHA MANCHADA (O EFEITO MANCHADOR): O Peróxido de Benzoíla é um alvejante químico potente. Se o paciente passar o gel no rosto e deitar em cima de uma fronha colorida, ou se secar numa toalha azul após lavar o rosto com o produto, o tecido vai MANCHAR e descolorir na mesma hora, ficando cheio de manchas brancas e amarelas. Oriente o uso de roupas de cama brancas.', es: 'ALERTA DE DECOLORACIÓN DE TEXTILES: Es un potente agente blanqueador químico. Si el paciente entra en contacto con sábanas, toallas o ropa de color mientras el gel está en la piel, decolorará los tejidos instantáneamente dejando manchas blancas. Se recomienda el uso de textiles blancos durante el tratamiento.' }
      },
      references: {
        pt: 'Guidelines of Care for the Management of Acne Vulgaris (AAD); Consenso Brasileiro de Acne SBD; Manual de Formulação Tópica.',
        es: 'Guidelines of Care for the Management of Acne Vulgaris (AAD); Guías de Consenso de Acné de la Sociedad Argentina de Dermatología.'
      }
    },

    /* ── ADAPALENO (767) ────────────────────────────────────────────────── */
    "adapaleno": {
      name: { pt: 'Adapaleno', es: 'Adapaleno' },
      category: 'dermatologia',
      class: { pt: 'Retinoide Tópico de Terceira Geração / Modulador da Queratinização', es: 'Retinoide Tópico de Tercera Generación / Modulador de la Queratinización' },
      indications: {
        pt: ['Tratamento tópico da Acne Vulgar comedoniana e inflamatória (cravos e espinhas)', 'Manejo de queratose pilar e prevenção de microcomedões'],
        es: ['Tratamiento del Acné Vulgar con predominio de comedones y pápulas', 'Queratosis pilar']
      },
      commercialNames: { br: ['Differin', 'Adaferin', 'Epiduo (Assoc)'], ar: ['Differin', 'Adapalene Beta', 'Epiduo'] },
      presentation: { pt: ['Gel ou Creme contendo 1 mg/g (0,1%) ou 3 mg/g (0,3%) de Adapaleno'], es: ['Gel o Crema al 0,1% y 0,3%'] },
      mechanism: {
        pt: 'O Desentupidor de Poros Inteligente. É um derivado do ácido naftoico com atividade retinoide. Ele liga-se especificamente aos receptores nucleares de ácido retinoico tipo gama (RAR-gama) expressos nos queratinócitos da pele. Ao ligar-se ali, ele reprograma a célula: obriga o poro a descamar de forma fina e organizada (normaliza a diferenciação folicular), impedindo que as células mortas grudem no sebo para formar o cravo (comedomedólise), além de ser um potente anti-inflamatório.',
        es: 'Derivado del ácido naftoico con actividad retinoide. Se une de forma selectiva a los receptores nucleares de ácido retinoico tipo gamma (RAR-gamma). Modula la diferenciación de las células epiteliales foliculares, disminuyendo la cohesividad de los queratinocitos. Esto impide la formación del microcomedón (tapón) y ejerce una potente acción antiinflamatoria celular.'
      },
      dose: {
        adult: {
          pt: 'Uso Tópico: Aplicar uma quantidade do tamanho de uma ervilha sobre todo o rosto afetado, UMA VEZ ao dia, estritamente À NOITE, antes de dormir, após lavar a pele.',
          es: 'Aplicar una pequeña cantidad (del tamaño de un guisante) sobre el rostro limpio 1 VEZ AL DÍA, estrictamente por la NOCHE antes de acostarse.'
        },
        pediatric: {
          pt: 'Aprovado para crianças a partir de 12 anos de idade nas apresentações de gel 0,1%.',
          es: 'Aprobado en pacientes >= 12 años.'
        }
      },
      administration: { pt: ['Aplicar na pele do rosto perfeitamente SECA (aguardar 15 minutos após lavar). Passar uma camada fina, evitando os olhos, pálpebras e cantos da boca. É MANDATÓRIO retirar o produto pela manhã lavando o rosto e aplicar PROTETOR SOLAR FPS > 30 diário, devido ao afinamento da camada córnea e risco de queimaduras.'], es: ['Uso nocturno exclusivo. Aplicar sobre piel totalmente seca. Por la mañana, lavar el rostro y aplicar protector solar FPS > 30 obligatorio por adelgazamiento epidérmico protector.'] },
      renalAdjustment: { required: false, message: { pt: 'Absorção cutânea insignificante, sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste de dose.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['ERITEMA E DESCAMAÇÃO FACIAL (Retinização da pele nas primeiras 2 semanas)', 'Sensação de queimação, ardência e picadas na pele', 'Ressecamento cutâneo extremo'], es: ['Eritema, descamación y sequedad facial (Proceso normal de retinización las primeras semanas)', 'Sensación de escozor y tirantez'] },
      dangerousAdverseEffects: { pt: ['Dermatite retinoide severa com descamação em carne viva', 'Hiperpigmentação pós-inflamatória se houver exposição solar sem proteção'], es: ['Dermatitis por retinoides severa', 'Manchas oscuras faciales por exposición solar inadvertida'] },
      contraindications: {
        absolute: { pt: ['GRAVIDEZ (Embora a absorção tópica seja minúscula, a classe dos retinoides é contraindicada formalmente por segurança teratogênica)', 'Pele queimada de sol ou com feridas abertas'], es: ['EMBARAZO (Contraindicación absoluta por seguridad teratogénica de clase)', 'Piel con eccema agudo o heridas'] },
        relative: { pt: ['Uso concomitante com depilação com cera na face (a pele rasga junto com a cera)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'A SÍNDROME DA RETINIZAÇÃO (O PIOR ANTES DE MELHORAR): Explique ao seu paciente que nas primeiras 2 semanas usando Adapaleno a pele dele vai piorar. O rosto vai descamar, arder com qualquer hidratante e podem brotar novas espinhas que estavam escondidas (Purging). Avise para ele NÃO parar o tratamento: a pele está se renovando e o efeito de limpeza real surge após 4 semanas.', es: 'ALERTA DEL EFECTO PURGING E RETINIZACIÓN: Durante las primeras 2 semanas, el acné puede exacerbarse y el rostro descamará y arderá (Purging). Es un proceso normal de renovación folicular. Se debe advertir al paciente para evitar el abandono prematuro; la mejoría inicia al mes.' }
      },
      references: {
        pt: 'Differin Global Safety Profile; Diretrizes de Acne da AAD; Manual de Cosmiatria e Dermatologia da SBD.',
        es: 'Differin Global Safety Profile; Guías de Consenso de Acné de la Sociedad Argentina de Dermatología.'
      }
    },

    /* ── TRETINOÍNA (768) ───────────────────────────────────────────────── */
    "tretinoina": {
      name: { pt: 'Tretinoína (Ácido Retinoico)', es: 'Tretinoína (Ácido Retinoico)' },
      category: 'dermatologia',
      class: { pt: 'Retinoide Tópico de Primeira Geração / Renovador Celular e Antienvelhecimento', es: 'Retinoide Tópico de Primera Generación / Renovador Celular y Antienvejecimiento' },
      indications: {
        pt: ['Tratamento da Acne Vulgar (Graus I, II e III)', 'Tratamento do fotoenvelhecimento cutâneo (redução de rugas finas, manchas senis e aspereza da pele)', 'Tratamento de estrias vermelhas corporais iniciais (estrias rubras)'],
        es: ['Tratamiento del Acné Vulgar comedoniano e inflamatorio', 'Fotoenvejecimiento cutáneo (Arrugas finas, hiperpigmentación solar, rugosidad)', 'Estrías rubras corporales']
      },
      commercialNames: { br: ['Vitanol-A', 'Retacnyl', 'Suavicid (Assoc)'], ar: ['Retin-A', 'Neatret', 'Tretinoina Beta'] },
      presentation: { pt: ['Creme ou Gel nas concentrações de 0,025%, 0,05% e 0,1%'], es: ['Crema o Gel al 0,025%, 0,05% y 0,1%'] },
      mechanism: {
        pt: 'O Renovador Celular Supremo. É a forma ácida pura da Vitamina A. Liga-se diretamente aos receptores nucleares RAR e RXR dos queratinócitos. Isso dispara a transcrição de genes que aceleram o ciclo de renovação da pele (a pele descama a camada velha de cima e fabrica células novas de baixo em velocidade triplicada). No colágeno, ela bloqueia as enzimas metaloproteinases que destroem a derme e estimula os fibroblastos a fabricarem COLÁGENO NOVO tipo I, alisando rugas.',
        es: 'Forma ácida pura de la Vitamina A. Se une a los receptores nucleares RAR y RXR, modulando la expresión génica. Acelera la tasa de recambio de los queratinocitos (mitosis epidérmica), promoviendo la expulsión del comedón. En la dermis, estimula la síntesis de colágeno nuevo tipo I y frena la degradación enzimática de la matriz extracelular, revirtiendo el fotoenvejecimiento.'
      },
      dose: {
        adult: {
          pt: 'Uso Tópico: Aplicar uma camada ultra-fina (tamanho de um grão de ervilha para o rosto todo) UMA VEZ ao dia, estritamente À NOITE antes de deitar. Iniciar com a menor concentração (0,025%) em dias alternados nas primeiras 2 semanas.',
          es: 'Aplicar una capa milimétrica (tamaño de un guisante) sobre todo el rostro 1 VEZ AL DÍA, estrictamente por la NOCHE. Iniciar 2-3 veces por semana para desarrollar tolerancia epidérmica.'
        },
        pediatric: {
          pt: 'Uso não recomendado ou aprovado em menores de 12 anos devido ao risco de irritação grave.',
          es: 'No recomendado en niños menores de 12 años.'
        }
      },
      administration: { pt: ['Aplicar estritamente com o rosto seco e limpo à noite. Lavar obrigatoriamente o rosto pela manhã ao acordar com sabonete neutro para remover os resíduos do ácido. USO DIÁRIO OBRIGATÓRIO DE FILTRO SOLAR FPS > 50. O ácido retinoico queima e mancha a pele na presença de luz solar direta.'], es: ['Uso nocturno exclusivo. Retirar por la mañana lavando el rostro por completo. Uso obligatorio de protector solar de alta potencia FPS > 50 continuo por riesgo de quemadura solar grave.'] },
      renalAdjustment: { required: false, message: { pt: 'Ação local tópica, sem necessidade de ajuste renal.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste de dose.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Dermatite Retinoide marcada (vermelhidão, descamação intensa em placas, repuxamento da pele e coceira que duram 2-3 semanas)', 'Hipersensibilidade ao toque e a cosméticos perfumados', 'Ressecamento labial'], es: ['Dermatitis por retinoides (Eritema, descamación en placas, tirantez y prurito intenso inicial)', 'Hipersensibilidad cutánea al tacto'] },
      dangerousAdverseEffects: { pt: ['Queimadura química solar severa com bolhas e manchas escuras permanentes (hiperpigmentação pós-inflamatória por exposição solar descuidada)'], es: ['Hiperpigmentación postinflamatoria severa irreversible por exposición solar sin fotoprotección'] },
      contraindications: {
        absolute: { pt: ['GRAVIDEZ (Contraindicação absoluta de classe; risco de teratogenicidade e malformação fetal grave caso haja absorção)', 'Pele com queimaduras, feridas abertas ou dermatite ativa'], es: ['EMBARAZO (Contraindicación absoluta por riesgo teratogénico de los retinoides)', 'Piel con heridas abiertas o eccema agudo'] },
        relative: { pt: ['Histórico de pele extremamente reativa com rosácea eritêmato-telangiectásica grave'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O ALERTA MÁXIMO DA GRAVIDEZ (NUNCA RECEITAR GRÁVIDA): O Ácido Retinoico é um irmão químico da Isotretinoína (Roacutan). Embora a quantidade que entra no sangue pela pele seja muito pequena, existe risco teórico de causar malformações monstruosas no feto (embriopatia por ácido retinoico). Se a paciente engravidar, suspenda o creme imediatamente e avise o obstetra.', es: 'EL ALERTA TERATOGÉNICO ABSOLUTO: Comparte linaje químico con la isotretinoína. Aunque la absorción percutánea es baja, está terminantemente CONTRAINDICADO en el embarazo debido al riesgo teórico de inducir malformaciones congénitas craneofaciales y cardíacas en el feto. Suspender de inmediato si se sospecha gestación.' }
      },
      references: {
        pt: 'Retinoids in Dermatology Review; Diretrizes de Rejuvenescimento e Acne da SBD; Manual de Farmacologia Cutânea de Goodman & Gilman.',
        es: 'Retinoids in Dermatology Review; Guías de Manejo del Fotoenvejecimiento de la Sociedad Argentina de Dermatología.'
      }
    },

    /* ── ISOTRETINOÍNA (769) ────────────────────────────────────────────── */
    "isotretinoina": {
      name: { pt: 'Isotretinoína (Via Sistêmica)', es: 'Isotretinoína (Vía Sistémica)' },
      category: 'dermatologia',
      class: { pt: 'Retinoide Sistêmico Potente / Inibidor Profundo da Glândula Sebácea', es: 'Retinoide Sistémico Potente / Inhibidor Profundo de la Glándula Sebácea' },
      indications: {
        pt: ['Acne Vulgar grave nódulo-cística recalcitrante (Graus III, IV e V) que não responde a antibióticos orais e cremes', 'Acne com alto risco de cicatrizes definitivas deformantes (cicatrizes em picareta)', 'Tratamento de Hidradenite Supurativa severa ou Rosácea fulminante'],
        es: ['Acné Vulgar grave nóduloquístico recalcitrante (Grados III, IV y V) resistente a terapias convencionales', 'Acné con alto riesgo de cicatrices deformantes']
      },
      commercialNames: { br: ['Roacutan', 'Isotretina', 'Acnova'], ar: ['Roacutan', 'Acnotren', 'Isocutan'] },
      presentation: { pt: ['Cápsulas gelatinosas moles 10 mg e 20 mg'], es: ['Cápsulas blandas 10 mg y 20 mg'] },
      mechanism: {
        pt: 'A Atrofia Cirúrgica da Espinha. É o único remédio do mundo capaz de curar a acne permanentemente. Ela entra no fígado, viaja pelo sangue e causa a APOPTOSE (suicídio celular programado) das células das glândulas sebáceas de todo o corpo. O tamanho da glândula sebácea encolhe em até 90% e a produção de sebo cai a zero. Sem gordura no poro, a bactéria da acne morre de fome e os cravos desaparecem para sempre, alterando o microambiente da pele.',
        es: 'Isómero sintético del ácido retinoico. Es el único fármaco que actúa sobre todos los factores patogénicos del acné: induce la apoptosis de las células de la glándula sebácea, disminuyendo su tamaño un 90% y reduciendo la producción de sebo a niveles cercanos a cero. Esto suprime la colonización de C. acnes por privación de sustrato lipídico.'
      },
      dose: {
        adult: {
          pt: 'Dose calculada por peso corporal: Iniciar com 0,5 mg/kg/dia via oral, progredindo para 1,0 mg/kg/dia conforme tolerabilidade. O tratamento DEVE continuar até atingir uma DOSE ACUMULADA TOTAL de 120 mg a 150 mg/kg de peso (geralmente dura de 6 a 8 meses) para evitar o retorno da acne.',
          es: 'Dosis por peso corporal: Iniciar con 0,5 mg/kg/día vía oral, escalonando a 1,0 mg/kg/día. El tratamiento DEBE mantenerse hasta alcanzar una DOSIS ACUMULADA TOTAL de 120 a 150 mg/kg de peso corporal (duración de 6 a 9 meses) para asegurar la tasa de curación.'
        },
        pediatric: {
          pt: 'Aprovado para adolescentes a partir de 12 anos de idade, seguindo o mesmo cálculo de dose acumulada por peso do adulto.',
          es: 'Aprobado en pacientes >= 12 años bajo el mismo cálculo de dosis acumulada por kilo.'
        }
      },
      administration: { pt: ['DEVE SER INGERIDA OBRIGATORIAMENTE JUNTO COM UMA REFEIÇÃO PESADA/GORDUROSA (Almoço ou Jantar). A absorção da isotretinoína depende 100% da presença de gordura no estômago; tomar em jejum corta o efeito do remédio pela metade, estragando o tratamento.'], es: ['DEBE INGERIRSE OBLIGATORIAMENTE CON UNA COMIDA COMPLETA O GRASA (Almuerzo o Cena). Su absorción lipofílica se duplica en presencia de alimentos; en ayunas fracasa el tratamiento.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste estrito, monitorar eletrólitos basais.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: true, message: { pt: 'CRÍTICO. Metabolizada intensamente no fígado. Exige a realização de exames de TGO, TGP, Colesterol total e Triglicerídeos basais, após 1 mês e a cada 3 meses. Se as transaminases subirem acima de 3 vezes o normal ou os triglicerídeos passarem de 500 mg/dL, o remédio deve ser suspenso imediatamente.', es: 'CRÍTICO. Contraindicado en insuficiencia hepática. Exige control mensual obligatorio de transaminasas y perfil lipídico (Triglicéridos). Suspender de inmediato si transaminasas aumentan > 3 veces el límite normal o triglicéridos > 500 mg/dL.' } },
      commonAdverseEffects: { pt: ['QUEILITE SEVERA (Secura extrema nos lábios com rachaduras e sangramento que afeta 100% dos pacientes)', 'Xerose cutânea generalizada (a pele coça e descama)', 'Xeroftalmia (olho seco vermelho que exige uso de colírio de lágrima artificial)', 'Ressecamento nasal com sangramento (Epistaxe)'], es: ['QUEILITIS SEVERA (Sequedad extrema con fisuras y sangrado labial en el 100% de los casos)', 'Xerosis cutánea (piel seca descamativa generalizada)', 'Xeroftalmia (ojo seco rojo)', 'Epistaxis (sangrado nasal por sequedad)'] },
      dangerousAdverseEffects: { pt: ['TERATOGENICIDADE EXTREMA MONSTRUOSA (Causa deformidades severas no crânio, cérebro e coração do feto se a paciente engravidar - Alerta Máximo Caixa Preta)', 'Hipertrigliceridemia severa com risco de PANCREATITE AGUDA LETAL (se triglicerídeos > 800 mg/dL)', 'Pseudotumor Cerebral (Hipertensão intracraniana benigna se misturado com tetraciclina)'], es: ['TERATOGENICIDAD SEVERA EMBRIOPÁTICA (Malformaciones craneofaciales y cardíacas fetales incompatibles con la vida - Caja Negra)', 'Pancreatitis Aguda Letal por hipertrigliceridemia severa', 'Hipertensión intracraneal benigna (Pseudotumor cerebral)'] },
      contraindications: {
        absolute: { pt: ['GRAVIDEZ OU MULHER EM IDADE FÉRTIL QUE NÃO ESTEJA USANDO DOIS MÉTODOS ANTICONCEPCIONAIS EFICAZES', 'Insuficiência hepática grave ou hiperlipidemia descontrolada severa', 'Uso concomitante com Tetraciclinas (risco de Pseudotumor Cerebral)'], es: ['EMBARAZO O MUJERES EN EDAD FÉRTIL SIN ANTICONCEPCIÓN DOBLE ESTRICTA', 'Insuficiencia hepática o hiperlipidemia severa', 'Uso concomitante con Tetraciclinas'] },
        relative: { pt: ['Histórico de depressão maior ou ideação suicida instável (monitorar de perto o humor)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A CAIXA PRETA DOS DOIS ANTICONCEPCIONAIS E O TERMO ASSINADO: A Isotretinoína é o teratógeno mais violento da medicina. Uma única cápsula tomada por uma mulher grávida de poucos dias deforma o bebê de forma monstruosa e irreversível. É OBRIGATÓRIO por lei que mulheres em idade fértil usem DOIS métodos anticoncepcionais (ex: Pílula + Camisinha ou DIU + Pílula) e assinem o Termo de Consentimento com o médico antes de pegar o remédio na farmácia.', es: 'ALERTA DE CAJA NEGRA TERATOGÉNICA: Es el teratógeno más potente de la farmacología. Una sola cápsula ingerida durante la gestación causa malformaciones congénitas monstruosas incompatibles con la vida. Por ley, las mujeres en edad fértil DEBEN utilizar DOBLE método anticonceptivo estricto (ej: DIU + Preservativo) y firmar un consentimiento informado con test de embarazo negativo mensual.' }
      },
      references: {
        pt: 'Programa de Controle de Teratogenicidade da Isotretinoína ANVISA; FDA iPLEDGE Program Guidelines; Diretrizes de Acne da SBD 2024.',
        es: 'FDA iPLEDGE Program; Guías del Sistema de Vigilancia de Isotretinoína de la SAD; Manual de Terapéutica Dermatológica.'
      }
    }

  }); /* fim Object.assign ALERGIA_IMUNOLOGIA_DRUGS_DB — BUILD 446 (triancinolona_topica + clobetasol + fluocinolona + desonida + alclometasona + diflucortolona + peroxido_de_benzoila + adapaleno + tretinoina + isotretinoina — Corticoides Tópicos/Retinoides Acneicos/Moduladores Barreira Cutânea) */

})();
/* GOLD33_SELECTIVE:adapaleno:START */
;(function(){var db=window.ALERGIA_IMUNOLOGIA_DRUGS_DB;if(!db||!db["adapaleno"])throw new Error("GOLD33_MISSING_CANONICAL:adapaleno");db["adapaleno"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "003",
    "requiredFieldCount": 33,
    "approvedSha256": "cd35e10aef0c58df9f1a51122f9ae347c30c14947f1d5d4b20f84b1fe752807b",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "BLOQUEADA",
    "ownerPublicationAuthorization": "mission10-owner-confirmed"
  },
  "pt": {
    "name": "Adapaleno [1–2].",
    "class": "Retinoide tópico [1–2].",
    "pharmacologicClass": "Modulador seletivo de receptores retinoides [1–2].",
    "commercialNames": "Nome comercial depende da jurisdição; confirmar produto e bula local. [1–2].",
    "presentation": "Gel/creme/loção tópicos, tipicamente 0,1%; há produtos 0,3% com indicação etária própria. [1–2].",
    "presentations": "Gel/creme/loção tópicos, tipicamente 0,1%; há produtos 0,3% com indicação etária própria. [1–2].",
    "mechanism": "Liga receptores retinoides e normaliza diferenciação/queratinização folicular, com efeito anti-inflamatório. [1–2].",
    "pharmacodynamics": "Reduz microcomedões e lesões inflamatórias; melhora requer uso contínuo e não é imediata. [1–2].",
    "pharmacokinetics": "Absorção sistêmica após uso tópico é baixa; não extrapolar dados de formulações diferentes. [1–2].",
    "indications": "Tratamento tópico de acne vulgar; confirmar faixa etária e concentração da formulação local. [1–2].",
    "dose": "Aplicar uma película fina uma vez ao dia à noite sobre toda a área acneica limpa e seca; não aplicar como tratamento pontual. [1–2].",
    "pediatricDose": "Rótulo do gel 0,1%: segurança/eficácia não estabelecidas abaixo de 12 anos. AUTOMATIZÁVEL: NÃO. [1–2].",
    "renalDose": "Sem ajuste; absorção sistêmica baixa, mas não há estudo de ajuste formal. [1–2].",
    "hepaticDose": "Sem ajuste; não há estudo de ajuste formal. [1–2].",
    "commonAdverseEffects": "Ressecamento, eritema, descamação, ardor/prurido e irritação local são frequentes no início. [1–2].",
    "dangerousAdverseEffects": "Dermatite grave, edema/urticária e fotossensibilidade importante exigem interrupção e avaliação. [1–2].",
    "adverseEffects": "Ressecamento, eritema, descamação, ardor/prurido e irritação local são frequentes no início. Dermatite grave, edema/urticária e fotossensibilidade importante exigem interrupção e avaliação. [1–2].",
    "contraindications": "Hipersensibilidade ao produto/excipientes; evitar pele eczematosa, abrasada ou com queimadura solar. [1–2].",
    "interactions": "Evitar simultaneamente produtos irritantes/ressecantes, depilatórios químicos ou cosméticos abrasivos na mesma área. [1–2].",
    "monitoring": "Resposta, irritação, adesão e exposição solar. [1–2].",
    "administration": "Uso cutâneo externo; lavar mãos, evitar olhos/lábios/mucosas e usar fotoproteção. [1–2].",
    "preparation": "Não requer reconstituição nesta apresentação; conferir produto, concentração e integridade antes do uso. [1–2].",
    "infusionProtocol": "Não aplicável à apresentação/ via principal desta ficha; não criar protocolo de infusão. [1–2].",
    "pregnancy": "Dados humanos são limitados; confirmar com bula local e ponderar benefício/risco. [1–2].",
    "lactation": "Evitar aplicação no tórax antes da amamentação e evitar contato direto do lactente com área tratada. [1–2].",
    "specialPopulations": "Idosos, pessoas com multimorbidade e imunossupressão exigem avaliação individual e reconciliação de medicamentos. [1–2].",
    "patientEducation": "Usar somente conforme prescrição; comunicar evento adverso importante, não compartilhar o medicamento e confirmar cada formulação/via. [1–2].",
    "clinicalPearls": "A indicação, formulação e via são parte da dose. Não aplicar números desta ficha a produto diferente. [1–2].",
    "guidelineRecommendations": "Usar em consonância com diretriz da doença, registro local e avaliação especializada quando indicada; a bula não substitui diretriz. [1–2].",
    "safetyFlags": "CÁLCULOS CLÍNICOS: BLOQUEADOS nesta versão candidata. Confirmar indicação, produto, dose, via e monitorização antes de qualquer uso. [1–2].",
    "alerts": "REVISÃO MÉDICA PENDENTE. Dados educacionais candidatos; não autorizam integração, publicação, prescrição automatizada ou cálculo. [1–2].",
    "references": [
      "1. DailyMed / FDA SPL — Adapalene gel, 0.1% — drug label. https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a3b6f3c3-d615-4b00-a76f-134b75e30a50",
      "2. Medsafe — DIFFERIN Gel & Cream — data sheet. https://www.medsafe.govt.nz/profs/datasheet/d/differingel.pdf"
    ],
    "ref": "Fontes primárias: DailyMed / FDA SPL — Adapalene gel, 0.1% — drug label. https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a3b6f3c3-d615-4b00-a76f-134b75e30a50; Medsafe — DIFFERIN Gel & Cream — data sheet. https://www.medsafe.govt.nz/profs/datasheet/d/differingel.pdf"
  },
  "es": {
    "name": "Adapaleno [1–2].",
    "class": "Retinoide tópico [1–2].",
    "pharmacologicClass": "Modulador selectivo de receptores retinoides [1–2].",
    "commercialNames": "El nombre comercial depende de la jurisdicción; confirmar producto y prospecto local. [1–2].",
    "presentation": "Gel/crema/loción tópicos, típicamente 0,1%; existen productos 0,3% con indicación etaria propia. [1–2].",
    "presentations": "Gel/crema/loción tópicos, típicamente 0,1%; existen productos 0,3% con indicación etaria propia. [1–2].",
    "mechanism": "Se une a receptores retinoides y normaliza la diferenciación/queratinización folicular, con efecto antiinflamatorio. [1–2].",
    "pharmacodynamics": "Reduce microcomedones y lesiones inflamatorias; la mejoría requiere uso continuo y no es inmediata. [1–2].",
    "pharmacokinetics": "La absorción sistémica tras uso tópico es baja; no extrapolar datos de formulaciones distintas. [1–2].",
    "indications": "Tratamiento tópico del acné vulgar; confirmar grupo etario y concentración de la formulación local. [1–2].",
    "dose": "Aplicar una capa fina una vez al día por la noche sobre toda el área acneica limpia y seca; no aplicar como tratamiento puntual. [1–2].",
    "pediatricDose": "Prospecto del gel 0,1%: seguridad/eficacia no establecidas por debajo de 12 años. AUTOMATIZABLE: NO. [1–2].",
    "renalDose": "Sin ajuste; absorción sistémica baja, pero no hay estudio formal de ajuste. [1–2].",
    "hepaticDose": "Sin ajuste; no hay estudio formal de ajuste. [1–2].",
    "commonAdverseEffects": "Sequedad, eritema, descamación, ardor/prurito e irritación local son frecuentes al inicio. [1–2].",
    "dangerousAdverseEffects": "Dermatitis grave, edema/urticaria y fotosensibilidad importante requieren suspensión y evaluación. [1–2].",
    "adverseEffects": "Sequedad, eritema, descamación, ardor/prurito e irritación local son frecuentes al inicio. Dermatitis grave, edema/urticaria y fotosensibilidad importante requieren suspensión y evaluación. [1–2].",
    "contraindications": "Hipersensibilidad al producto/excipientes; evitar piel eccematosa, erosionada o con quemadura solar. [1–2].",
    "interactions": "Evitar simultáneamente productos irritantes/secantes, depilatorios químicos o cosméticos abrasivos en la misma zona. [1–2].",
    "monitoring": "Respuesta, irritación, adherencia y exposición solar. [1–2].",
    "administration": "Uso cutáneo externo; lavar manos, evitar ojos/labios/mucosas y usar fotoprotección. [1–2].",
    "preparation": "No requiere reconstitución en esta presentación; verificar producto, concentración e integridad antes de usar. [1–2].",
    "infusionProtocol": "No aplicable a la presentación/vía principal de esta ficha; no crear protocolo de infusión. [1–2].",
    "pregnancy": "Los datos humanos son limitados; confirmar con prospecto local y ponderar beneficio/riesgo. [1–2].",
    "lactation": "Evitar aplicación en el tórax antes de amamantar y evitar contacto directo del lactante con área tratada. [1–2].",
    "specialPopulations": "Las personas mayores, con multimorbilidad e inmunosupresión requieren evaluación individual y conciliación de medicamentos. [1–2].",
    "patientEducation": "Usar solo según prescripción; comunicar evento adverso importante, no compartir el medicamento y confirmar cada formulación/vía. [1–2].",
    "clinicalPearls": "La indicación, formulación y vía forman parte de la dosis. No aplicar números de esta ficha a un producto distinto. [1–2].",
    "guidelineRecommendations": "Usar en consonancia con guía de la enfermedad, registro local y evaluación especializada cuando corresponda; el prospecto no sustituye la guía. [1–2].",
    "safetyFlags": "CÁLCULOS CLÍNICOS: BLOQUEADOS en esta versión candidata. Confirmar indicación, producto, dosis, vía y monitorización antes de cualquier uso. [1–2].",
    "alerts": "REVISIÓN MÉDICA PENDIENTE. Datos educativos candidatos; no autorizan integración, publicación, prescripción automatizada ni cálculo. [1–2].",
    "references": [
      "1. DailyMed / FDA SPL — Adapalene gel, 0.1% — drug label. https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a3b6f3c3-d615-4b00-a76f-134b75e30a50",
      "2. Medsafe — DIFFERIN Gel & Cream — data sheet. https://www.medsafe.govt.nz/profs/datasheet/d/differingel.pdf"
    ],
    "ref": "Fuentes primarias: DailyMed / FDA SPL — Adapalene gel, 0.1% — drug label. https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a3b6f3c3-d615-4b00-a76f-134b75e30a50; Medsafe — DIFFERIN Gel & Cream — data sheet. https://www.medsafe.govt.nz/profs/datasheet/d/differingel.pdf"
  }
};})();
/* GOLD33_SELECTIVE:adapaleno:END */
/* GOLD33_SELECTIVE:alclometasona:START */
;(function(){var db=window.ALERGIA_IMUNOLOGIA_DRUGS_DB;if(!db||!db["alclometasona"])throw new Error("GOLD33_MISSING_CANONICAL:alclometasona");db["alclometasona"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "004",
    "requiredFieldCount": 33,
    "approvedSha256": "8aa3e3985bbc49b45a3503ad7aead54a277b148173b757887198e5b9536709c3",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "mission10-owner-confirmed"
  },
  "pt": {
    "name": "Dipropionato de alclometasona",
    "class": "Corticosteroide tópico de baixa a média potência",
    "pharmacologicClass": "Glicocorticoide tópico",
    "commercialNames": "Nomes regulatórios usados como evidência: os produtos citados nas referências; marcas AR/BR não presumidas.",
    "presentation": "Creme e pomada tópicos a 0,05%.",
    "presentations": "Creme e pomada tópicos a 0,05%.",
    "mechanism": "Glicocorticoide tópico. O efeito clínico decorre do mecanismo descrito na bula primária e deve ser interpretado segundo formulação e indicação.",
    "pharmacodynamics": "Efeito farmacodinâmico coerente com glicocorticoide tópico; resposta e toxicidade são dependentes de exposição, população e via.",
    "pharmacokinetics": "Absorção percutânea depende do veículo e da barreira cutânea; cerca de 3% foi absorvido após 8 h sobre pele íntegra em voluntários. Inflamação e oclusão podem aumentar a absorção.",
    "indications": "Dermatoses responsivas a corticosteroides com inflamação e prurido.",
    "dose": "Aplicar camada fina na área afetada 2 a 3 vezes/dia; massagear suavemente. Suspender ao obter controle; reavaliar o diagnóstico se não houver melhora em 2 semanas.",
    "pediatricDose": "≥1 ano: mesma aplicação tópica; segurança/eficácia por mais de 3 semanas não estabelecidas. <1 ano: não recomendado. Não aplicar na área de fralda se houver efeito oclusivo. AUTOMATABLE=NO.",
    "renalDose": "Não há ajuste renal numérico na bula tópica; limitar área, duração e oclusão para reduzir absorção sistêmica.",
    "hepaticDose": "Não há ajuste hepático numérico na bula tópica.",
    "commonAdverseEffects": "Ardor, prurido, irritação, ressecamento, eritema e foliculite podem ocorrer.",
    "dangerousAdverseEffects": "Supressão do eixo HPA, síndrome de Cushing, hiperglicemia/glicosúria e infecção secundária com absorção sistêmica relevante.",
    "adverseEffects": "Ardor, prurido, irritação, ressecamento, eritema e foliculite podem ocorrer. Eventos graves: Supressão do eixo HPA, síndrome de Cushing, hiperglicemia/glicosúria e infecção secundária com absorção sistêmica relevante.",
    "contraindications": "Hipersensibilidade a qualquer componente da formulação.",
    "interactions": "Não foram descritas interações sistêmicas específicas na bula consultada; absorção aumenta com inflamação, grande superfície e oclusão.",
    "monitoring": "Resposta cutânea; sinais de infecção, atrofia e supressão do eixo HPA em uso extenso/prolongado, especialmente em crianças.",
    "administration": "Uso cutâneo. Não usar curativo oclusivo salvo orientação médica; evitar olhos; não usar no rosto, axilas ou virilha sem indicação específica.",
    "preparation": "Não requer reconstituição ou diluição; aplicar diretamente da bisnaga.",
    "infusionProtocol": "Não aplicável à formulação tópica.",
    "pregnancy": "Usar na gestação somente se o benefício potencial justificar o risco fetal; evitar grande área, alta quantidade ou uso prolongado.",
    "lactation": "Não se sabe se a aplicação tópica resulta em excreção no leite; usar com cautela e evitar aplicação na mama antes de amamentar.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos. Individualizar em fragilidade, multimorbidade e polifarmácia.",
    "patientEducation": "Explicar indicação, técnica correta, sinais de alarme e quando procurar atendimento. Não alterar dose nem interromper tratamento crítico sem orientação.",
    "clinicalPearls": "Confirmar sempre produto, concentração, via, indicação e população antes de calcular ou administrar.",
    "guidelineRecommendations": "Esta ficha é ancorada em informação regulatória primária; diretrizes clínicas locais podem restringir seleção e sequência terapêutica.",
    "safetyFlags": "NÃO HOMOLOGADO. Revisar contraindicações, alertas, cálculos e diferenças de jurisdição antes de integração.",
    "alerts": "Supressão do eixo HPA, síndrome de Cushing, hiperglicemia/glicosúria e infecção secundária com absorção sistêmica relevante. Cálculo por peso: bloqueado (não aplicável à posologia tópica).",
    "references": [
      "1. Fonte regulatória oficial consultada em 2026-09-17: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3b0dccd6-dee1-49dd-8c6d-82df5c7ee36c",
      "2. Fonte regulatória oficial consultada em 2026-09-17: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6aacce3f-aa2f-4f2c-a5bd-8cff157a3dab"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3b0dccd6-dee1-49dd-8c6d-82df5c7ee36c"
  },
  "es": {
    "name": "Dipropionato de alclometasona",
    "class": "Corticosteroide tópico de potencia baja a intermedia",
    "pharmacologicClass": "Glucocorticoide tópico",
    "commercialNames": "Nombres regulatorios usados como evidencia: productos citados en referencias; no se presumen marcas AR/BR.",
    "presentation": "Crema y ungüento tópicos al 0,05%.",
    "presentations": "Crema y ungüento tópicos al 0,05%.",
    "mechanism": "Glucocorticoide tópico. El efecto clínico deriva del mecanismo descrito en la ficha primaria y debe interpretarse según formulación e indicación.",
    "pharmacodynamics": "Efecto farmacodinámico coherente con glucocorticoide tópico; respuesta y toxicidad dependen de exposición, población y vía.",
    "pharmacokinetics": "La absorción percutánea depende del vehículo y de la barrera cutánea; cerca del 3% se absorbió tras 8 h sobre piel intacta en voluntarios. Inflamación y oclusión pueden aumentarla.",
    "indications": "Dermatosis sensibles a corticosteroides con inflamación y prurito.",
    "dose": "Aplicar una capa fina sobre el área afectada 2 a 3 veces/día; masajear suavemente. Suspender al lograr control; reevaluar el diagnóstico si no mejora en 2 semanas.",
    "pediatricDose": "≥1 año: misma aplicación tópica; seguridad/eficacia por más de 3 semanas no establecidas. <1 año: no recomendado. No aplicar en zona del pañal si produce oclusión. AUTOMATABLE=NO.",
    "renalDose": "No hay ajuste renal numérico en la ficha tópica; limitar superficie, duración y oclusión para reducir absorción sistémica.",
    "hepaticDose": "No hay ajuste hepático numérico en la ficha tópica.",
    "commonAdverseEffects": "Pueden aparecer ardor, prurito, irritación, sequedad, eritema y foliculitis.",
    "dangerousAdverseEffects": "Supresión del eje HPA, síndrome de Cushing, hiperglucemia/glucosuria e infección secundaria con absorción sistémica relevante.",
    "adverseEffects": "Pueden aparecer ardor, prurito, irritación, sequedad, eritema y foliculitis. Eventos graves: Supresión del eje HPA, síndrome de Cushing, hiperglucemia/glucosuria e infección secundaria con absorción sistémica relevante.",
    "contraindications": "Hipersensibilidad a cualquier componente de la formulación.",
    "interactions": "No se describen interacciones sistémicas específicas en la ficha consultada; la absorción aumenta con inflamación, gran superficie y oclusión.",
    "monitoring": "Respuesta cutánea; signos de infección, atrofia y supresión del eje HPA con uso extenso/prolongado, especialmente en niños.",
    "administration": "Uso cutáneo. No usar vendaje oclusivo salvo indicación médica; evitar ojos; no usar en cara, axilas o ingles sin indicación específica.",
    "preparation": "No requiere reconstitución ni dilución; aplicar directamente del tubo.",
    "infusionProtocol": "No aplicable a la formulación tópica.",
    "pregnancy": "Usar en embarazo solo si el beneficio potencial justifica el riesgo fetal; evitar gran superficie, alta cantidad o uso prolongado.",
    "lactation": "Se desconoce si la aplicación tópica produce excreción en leche; usar con precaución y evitar aplicación en la mama antes de amamantar.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos. Individualizar en fragilidad, multimorbilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, técnica correcta, signos de alarma y cuándo consultar. No cambiar dosis ni suspender tratamiento crítico sin indicación.",
    "clinicalPearls": "Confirmar siempre producto, concentración, vía, indicación y población antes de calcular o administrar.",
    "guidelineRecommendations": "Esta ficha se basa en información regulatoria primaria; guías clínicas locales pueden restringir selección y secuencia terapéutica.",
    "safetyFlags": "NO HOMOLOGADO. Revisar contraindicaciones, alertas, cálculos y diferencias jurisdiccionales antes de integrar.",
    "alerts": "Supresión del eje HPA, síndrome de Cushing, hiperglucemia/glucosuria e infección secundaria con absorción sistémica relevante. Cálculo por peso: bloqueado (não aplicável à posologia tópica).",
    "references": [
      "1. Fonte regulatória oficial consultada em 2026-09-17: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3b0dccd6-dee1-49dd-8c6d-82df5c7ee36c",
      "2. Fonte regulatória oficial consultada em 2026-09-17: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6aacce3f-aa2f-4f2c-a5bd-8cff157a3dab"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3b0dccd6-dee1-49dd-8c6d-82df5c7ee36c"
  }
};})();
/* GOLD33_SELECTIVE:alclometasona:END */
/* GOLD33_SELECTIVE:bilastina:START */
;(function(){var db=window.ALERGIA_IMUNOLOGIA_DRUGS_DB;if(!db||!db["bilastina"])throw new Error("GOLD33_MISSING_CANONICAL:bilastina");db["bilastina"].mcGoldClinicalV1={
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
    "name": "Bilastina",
    "class": "Anti-histamínico H1 de segunda geração",
    "pharmacologicClass": "Antagonista seletivo periférico H1",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Comprimido 20 mg; formulações pediátricas 10 mg em alguns mercados.",
    "presentations": "Comprimido 20 mg; formulações pediátricas 10 mg em alguns mercados.",
    "mechanism": "Antagonista seletivo periférico H1. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Absorção rápida; biodisponibilidade ~61%; substrato P-gp; pouco metabolismo; eliminação fecal/urinária inalterada; meia-vida ~14,5 h.",
    "indications": "Rinoconjuntivite alérgica e urticária, conforme autorização local.",
    "dose": "Adultos e adolescentes ≥12 anos: 20 mg VO uma vez/dia.",
    "pediatricDose": "Em mercados autorizados, 6-11 anos e ≥20 kg: 10 mg uma vez/dia em formulação pediátrica. AUTOMATABLE=NO sem produto/peso.",
    "renalDose": "Sem ajuste usual; em disfunção moderada/grave evitar combinação com inibidores P-gp conforme SmPC.",
    "hepaticDose": "Sem ajuste usual; dados em grave limitados.",
    "commonAdverseEffects": "Cefaleia e sonolência; tontura e fadiga menos comuns.",
    "dangerousAdverseEffects": "Hipersensibilidade/anafilaxia e palpitações são raras.",
    "adverseEffects": "Cefaleia e sonolência; tontura e fadiga menos comuns. Graves: Hipersensibilidade/anafilaxia e palpitações são raras.",
    "contraindications": "Hipersensibilidade.",
    "interactions": "Inibidores P-gp (p.ex. cetoconazol, eritromicina, ciclosporina, ritonavir, diltiazem) elevam exposição; alimento/suco reduzem biodisponibilidade.",
    "monitoring": "Controle dos sintomas, sonolência individual, função renal se risco e interações P-gp.",
    "administration": "Em jejum: 1 h antes ou 2 h após alimento ou suco de frutas; água é preferida.",
    "preparation": "Comprimido pronto; usar formulação pediátrica apropriada.",
    "infusionProtocol": "Não aplicável.",
    "pregnancy": "Dados limitados; evitar por precaução salvo benefício.",
    "lactation": "Desconhece-se excreção humana; avaliar benefício e risco.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Hipersensibilidade/anafilaxia e palpitações são raras. Dose bloqueada sem idade/peso, formulação autorizada localmente, função renal e revisão de P-gp; administrar em jejum.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://www.medicines.org.uk/emc/product/4551/smpc",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://cima.aemps.es/cima/publico/home.html"
    ],
    "ref": "https://www.medicines.org.uk/emc/product/4551/smpc"
  },
  "es": {
    "name": "Bilastina",
    "class": "Antihistamínico H1 de segunda generación",
    "pharmacologicClass": "Antagonista selectivo periférico H1",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Comprimido 20 mg; formulaciones pediátricas 10 mg en algunos mercados.",
    "presentations": "Comprimido 20 mg; formulaciones pediátricas 10 mg en algunos mercados.",
    "mechanism": "Antagonista selectivo periférico H1. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Absorción rápida; biodisponibilidad ~61%; sustrato P-gp; poco metabolismo; eliminación fecal/urinaria sin cambios; semivida ~14,5 h.",
    "indications": "Rinoconjuntivitis alérgica y urticaria, según autorización local.",
    "dose": "Adultos y adolescentes ≥12 años: 20 mg VO una vez/día.",
    "pediatricDose": "En mercados autorizados, 6-11 años y ≥20 kg: 10 mg una vez/día en formulación pediátrica. AUTOMATABLE=NO sin producto/peso.",
    "renalDose": "Sin ajuste habitual; en disfunción moderada/grave evitar combinación con inhibidores P-gp según ficha.",
    "hepaticDose": "Sin ajuste habitual; datos limitados en grave.",
    "commonAdverseEffects": "Cefalea y somnolencia; mareo y fatiga menos comunes.",
    "dangerousAdverseEffects": "Hipersensibilidad/anafilaxia y palpitaciones son raras.",
    "adverseEffects": "Cefalea y somnolencia; mareo y fatiga menos comunes. Graves: Hipersensibilidad/anafilaxia y palpitaciones son raras.",
    "contraindications": "Hipersensibilidad.",
    "interactions": "Inhibidores P-gp (p. ej., ketoconazol, eritromicina, ciclosporina, ritonavir, diltiazem) elevan exposición; alimento/zumo reducen biodisponibilidad.",
    "monitoring": "Control de síntomas, somnolencia individual, función renal si riesgo e interacciones P-gp.",
    "administration": "En ayunas: 1 h antes o 2 h después de alimentos o zumo; preferir agua.",
    "preparation": "Comprimido listo; usar formulación pediátrica apropiada.",
    "infusionProtocol": "No aplicable.",
    "pregnancy": "Datos limitados; evitar por precaución salvo beneficio.",
    "lactation": "Se desconoce excreción humana; evaluar beneficio y riesgo.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Hipersensibilidad/anafilaxia y palpitaciones son raras. Dose bloqueada sem idade/peso, formulação autorizada localmente, função renal e revisão de P-gp; administrar em jejum.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://www.medicines.org.uk/emc/product/4551/smpc",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://cima.aemps.es/cima/publico/home.html"
    ],
    "ref": "https://www.medicines.org.uk/emc/product/4551/smpc"
  }
};})();
/* GOLD33_SELECTIVE:bilastina:END */
/* GOLD33_SELECTIVE:cetirizina:START */
;(function(){var db=window.ALERGIA_IMUNOLOGIA_DRUGS_DB;if(!db||!db["cetirizina"])throw new Error("GOLD33_MISSING_CANONICAL:cetirizina");db["cetirizina"].mcGoldClinicalV1={
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
    "name": "Cetirizina",
    "class": "Anti-histamínico H1 de 2ª geração",
    "pharmacologicClass": "Antagonista periférico H1",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Comprimidos 5/10 mg; solução 1 mg/mL; outras apresentações conforme produto.",
    "presentations": "Comprimidos 5/10 mg; solução 1 mg/mL; outras apresentações conforme produto.",
    "mechanism": "Antagonista periférico H1. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Pouco metabolizada; eliminação renal predominante; meia-vida ~8 h.",
    "indications": "Rinite alérgica e urticária.",
    "dose": "Adulto e ≥6 anos: 5-10 mg VO uma vez/dia; máximo 10 mg/dia.",
    "pediatricDose": "2-5 anos: 2,5 mg/dia, podendo chegar a 5 mg/dia; 6-23 meses: 2,5 mg/dia, e 12-23 meses pode usar 2,5 mg a cada 12 h conforme rótulo. AUTOMATABLE=NO.",
    "renalDose": "Reduzir em comprometimento renal; evitar automação sem eGFR/idade.",
    "hepaticDose": "Reduzir em comprometimento hepático.",
    "commonAdverseEffects": "Sonolência, fadiga, boca seca e cefaleia.",
    "dangerousAdverseEffects": "Hipersensibilidade grave e retenção urinária rara; prurido intenso pode ocorrer após suspensão prolongada.",
    "adverseEffects": "Sonolência, fadiga, boca seca e cefaleia. Graves: Hipersensibilidade grave e retenção urinária rara; prurido intenso pode ocorrer após suspensão prolongada.",
    "contraindications": "Hipersensibilidade a cetirizina, hidroxizina ou componentes.",
    "interactions": "Álcool e depressores SNC aumentam sedação.",
    "monitoring": "Controle de sintomas, sonolência e função renal em idosos.",
    "administration": "VO com ou sem alimento; pode causar sonolência.",
    "preparation": "Solução pronta; medir com dispositivo oral.",
    "infusionProtocol": "Não aplicável.",
    "pregnancy": "Dados geralmente tranquilizadores; usar menor dose eficaz.",
    "lactation": "Pode ser compatível; observar sedação e produção de leite.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Hipersensibilidade grave e retenção urinária rara; prurido intenso pode ocorrer após suspensão prolongada. Dose bloqueada sem idade/peso pediátrico, concentração, rim/fígado e sedativos.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=cetirizine",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.fda.gov/drugs/drug-safety-and-availability/fda-requires-warning-about-rare-occurrence-severe-itching-after-stopping-long-term-use-oral-allergy"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=cetirizine"
  },
  "es": {
    "name": "Cetirizina",
    "class": "Antihistamínico H1 de 2ª generación",
    "pharmacologicClass": "Antagonista periférico H1",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Comprimidos 5/10 mg; solución 1 mg/mL; otras presentaciones según producto.",
    "presentations": "Comprimidos 5/10 mg; solución 1 mg/mL; otras presentaciones según producto.",
    "mechanism": "Antagonista periférico H1. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Poco metabolizada; eliminación renal predominante; semivida ~8 h.",
    "indications": "Rinitis alérgica y urticaria.",
    "dose": "Adulto y ≥6 años: 5-10 mg VO una vez/día; máximo 10 mg/día.",
    "pediatricDose": "2-5 años: 2,5 mg/día, pudiendo llegar a 5 mg/día; 6-23 meses: 2,5 mg/día, y 12-23 meses puede usar 2,5 mg cada 12 h según ficha. AUTOMATABLE=NO.",
    "renalDose": "Reducir en insuficiencia renal; evitar automatización sin eGFR/edad.",
    "hepaticDose": "Reducir en insuficiencia hepática.",
    "commonAdverseEffects": "Somnolencia, fatiga, boca seca y cefalea.",
    "dangerousAdverseEffects": "Hipersensibilidad grave y retención urinaria rara; prurito intenso puede aparecer tras suspensión prolongada.",
    "adverseEffects": "Somnolencia, fatiga, boca seca y cefalea. Graves: Hipersensibilidad grave y retención urinaria rara; prurito intenso puede aparecer tras suspensión prolongada.",
    "contraindications": "Hipersensibilidad a cetirizina, hidroxizina o componentes.",
    "interactions": "Alcohol y depresores SNC aumentan sedación.",
    "monitoring": "Control de síntomas, somnolencia y función renal en ancianos.",
    "administration": "VO con o sin alimentos; puede causar somnolencia.",
    "preparation": "Solución lista; medir con dispositivo oral.",
    "infusionProtocol": "No aplicable.",
    "pregnancy": "Datos generalmente tranquilizadores; usar menor dosis eficaz.",
    "lactation": "Puede ser compatible; vigilar sedación y producción de leche.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Hipersensibilidad grave y retención urinaria rara; prurito intenso puede aparecer tras suspensión prolongada. Dose bloqueada sem idade/peso pediátrico, concentração, rim/fígado e sedativos.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=cetirizine",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.fda.gov/drugs/drug-safety-and-availability/fda-requires-warning-about-rare-occurrence-severe-itching-after-stopping-long-term-use-oral-allergy"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=cetirizine"
  }
};})();
/* GOLD33_SELECTIVE:cetirizina:END */
/* GOLD33_SELECTIVE:clobetasol:START */
;(function(){var db=window.ALERGIA_IMUNOLOGIA_DRUGS_DB;if(!db||!db["clobetasol"])throw new Error("GOLD33_MISSING_CANONICAL:clobetasol");db["clobetasol"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "019",
    "requiredFieldCount": 33,
    "approvedSha256": "f3daaf074fac609deb165ca960c4d9e2b0542783aa0df7b6e3a1969b29405217",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "mission10-owner-confirmed"
  },
  "pt": {
    "name": "Clobetasol propionato",
    "class": "Corticosteroide tópico superpotente",
    "pharmacologicClass": "Atividade anti-inflamatória via receptor glucocorticoide",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Creme, pomada, gel, solução, espuma, spray e xampu 0,05%.",
    "presentations": "Creme, pomada, gel, solução, espuma, spray e xampu 0,05%.",
    "mechanism": "Atividade anti-inflamatória via receptor glucocorticoide. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Absorção percutânea depende de veículo, barreira, área e oclusão; metabolismo hepático após absorção.",
    "indications": "Dermatoses responsivas a corticoide de alta potência; indicação varia pela formulação.",
    "dose": "Aplicar camada fina 1–2x/dia por curto prazo; em muitos rótulos máximo 2 semanas e 50 g/semana. Formulações para couro cabeludo/placas têm instruções próprias.",
    "pediatricDose": "Geralmente não recomendado <12 anos; maior risco de supressão do eixo HPA. AUTOMATABLE=NO.",
    "renalDose": "Sem ajuste sistêmico; exposição aumenta em grandes áreas/oclusão.",
    "hepaticDose": "Sem ajuste específico; cautela se absorção extensa.",
    "commonAdverseEffects": "Ardor, prurido, irritação, ressecamento e foliculite.",
    "dangerousAdverseEffects": "Supressão HPA/Cushing, hiperglicemia, atrofia, infecção e glaucoma se contato ocular.",
    "adverseEffects": "Ardor, prurido, irritação, ressecamento e foliculite. Graves: Supressão HPA/Cushing, hiperglicemia, atrofia, infecção e glaucoma se contato ocular.",
    "contraindications": "Hipersensibilidade; não tratar infecção não controlada sem terapia apropriada.",
    "interactions": "Poucas interações sistêmicas; outros corticosteroides aumentam carga.",
    "monitoring": "Resposta, atrofia/estrias, infecção, quantidade semanal; eixo HPA/glicemia se uso extenso.",
    "administration": "Somente pele; evitar face, virilha, axila, olhos e oclusão salvo indicação específica.",
    "preparation": "Lavar mãos; não usar mais produto/área/duração que o prescrito.",
    "infusionProtocol": "Não aplicável.",
    "pregnancy": "Usar menor área/duração se benefício justificar.",
    "lactation": "Evitar aplicação em mama antes de amamentar; menor área/duração.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Supressão HPA/Cushing, hiperglicemia, atrofia, infecção e glaucoma se contato ocular. Uso bloqueado sem diagnóstico dermatológico, formulação, local/área, idade, duração, quantidade semanal e exclusão de infecção.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=clobetasol+propionate",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.fda.gov/drugsatfda-documents-regulatory-information"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=clobetasol+propionate"
  },
  "es": {
    "name": "Propionato de clobetasol",
    "class": "Corticoide tópico superpotente",
    "pharmacologicClass": "Actividad antiinflamatoria vía receptor glucocorticoide",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Crema, ungüento, gel, solución, espuma, aerosol y champú 0,05%.",
    "presentations": "Crema, ungüento, gel, solución, espuma, aerosol y champú 0,05%.",
    "mechanism": "Actividad antiinflamatoria vía receptor glucocorticoide. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Absorción percutánea depende de vehículo, barrera, área y oclusión; metabolismo hepático tras absorción.",
    "indications": "Dermatosis sensibles a corticoide de alta potencia; indicación varía por formulación.",
    "dose": "Aplicar capa fina 1–2 veces/día por corto plazo; en muchas fichas máximo 2 semanas y 50 g/semana. Formulaciones para cuero cabelludo/placas tienen instrucciones propias.",
    "pediatricDose": "Generalmente no recomendado <12 años; mayor riesgo de supresión del eje HPA. AUTOMATABLE=NO.",
    "renalDose": "Sin ajuste sistémico; exposición aumenta en grandes áreas/oclusión.",
    "hepaticDose": "Sin ajuste específico; precaución si absorción extensa.",
    "commonAdverseEffects": "Ardor, prurito, irritación, sequedad y foliculitis.",
    "dangerousAdverseEffects": "Supresión HPA/Cushing, hiperglucemia, atrofia, infección y glaucoma si contacto ocular.",
    "adverseEffects": "Ardor, prurito, irritación, sequedad y foliculitis. Graves: Supresión HPA/Cushing, hiperglucemia, atrofia, infección y glaucoma si contacto ocular.",
    "contraindications": "Hipersensibilidad; no tratar infección no controlada sin terapia adecuada.",
    "interactions": "Pocas interacciones sistémicas; otros corticoides aumentan carga.",
    "monitoring": "Respuesta, atrofia/estrías, infección, cantidad semanal; eje HPA/glucemia si uso extenso.",
    "administration": "Solo piel; evitar cara, ingle, axila, ojos y oclusión salvo indicación específica.",
    "preparation": "Lavar manos; no usar más producto/área/duración que lo indicado.",
    "infusionProtocol": "No aplicable.",
    "pregnancy": "Usar menor área/duración si beneficio justifica.",
    "lactation": "Evitar aplicación en mama antes de lactar; menor área/duración.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Supresión HPA/Cushing, hiperglucemia, atrofia, infección y glaucoma si contacto ocular. Uso bloqueado sem diagnóstico dermatológico, formulação, local/área, idade, duração, quantidade semanal e exclusão de infecção.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=clobetasol+propionate",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.fda.gov/drugsatfda-documents-regulatory-information"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=clobetasol+propionate"
  }
};})();
/* GOLD33_SELECTIVE:clobetasol:END */
/* GOLD33_SELECTIVE:clorfeniramina:START */
;(function(){var db=window.ALERGIA_IMUNOLOGIA_DRUGS_DB;if(!db||!db["clorfeniramina"])throw new Error("GOLD33_MISSING_CANONICAL:clorfeniramina");db["clorfeniramina"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "021",
    "requiredFieldCount": 33,
    "approvedSha256": "34cfc05136412956523762939213a67b7f790f954e78d1ece1868008562d515a",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "mission10-owner-confirmed"
  },
  "pt": {
    "name": "Clorfeniramina",
    "class": "Anti-histamínico H1 de 1ª geração",
    "pharmacologicClass": "Antagonista H1 com atividade anticolinérgica",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Comprimidos 4 mg, xaropes e formas ER; concentrações variam.",
    "presentations": "Comprimidos 4 mg, xaropes e formas ER; concentrações variam.",
    "mechanism": "Antagonista H1 com atividade anticolinérgica. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Metabolismo hepático; eliminação renal; meia-vida variável.",
    "indications": "Alívio de sintomas alérgicos; não trata anafilaxia isoladamente.",
    "dose": "Adultos: 4 mg VO a cada 4–6 h; máximo 24 mg/dia. Formulação ER conforme produto.",
    "pediatricDose": "6–11 anos: 2 mg a cada 4–6 h, máximo 12 mg/dia; 2–5 anos: 1 mg a cada 4–6 h, máximo 6 mg/dia, conforme produto. AUTOMATABLE=NO.",
    "renalDose": "Cautela e possível redução em DRC.",
    "hepaticDose": "Cautela em hepatopatia.",
    "commonAdverseEffects": "Sonolência, boca seca, visão turva, constipação e tontura.",
    "dangerousAdverseEffects": "Delirium, retenção urinária, glaucoma, convulsão e arritmia em overdose.",
    "adverseEffects": "Sonolência, boca seca, visão turva, constipação e tontura. Graves: Delirium, retenção urinária, glaucoma, convulsão e arritmia em overdose.",
    "contraindications": "Hipersensibilidade; recém-nascidos/prematuros e uso com IMAO conforme rótulo.",
    "interactions": "Álcool/depressores SNC, anticolinérgicos e IMAO aumentam toxicidade.",
    "monitoring": "Sintomas, sedação, quedas, retenção urinária e efeitos anticolinérgicos.",
    "administration": "VO; evitar dirigir, álcool e duplicação em produtos para resfriado.",
    "preparation": "Medir solução com dispositivo; não triturar ER.",
    "infusionProtocol": "Não aplicável.",
    "pregnancy": "Usar apenas se necessário.",
    "lactation": "Pode causar sedação/irritabilidade no lactente e reduzir leite.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Delirium, retenção urinária, glaucoma, convulsão e arritmia em overdose. Dose bloqueada sem idade/peso, concentração/formulação, rim/fígado, sedativos e carga anticolinérgica.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=chlorpheniramine",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.fda.gov/drugs/resources-you-drugs/over-counter-otc-nonprescription-drugs"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=chlorpheniramine"
  },
  "es": {
    "name": "Clorfeniramina",
    "class": "Antihistamínico H1 de 1ª generación",
    "pharmacologicClass": "Antagonista H1 con actividad anticolinérgica",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Comprimidos 4 mg, jarabes y formas ER; concentraciones variables.",
    "presentations": "Comprimidos 4 mg, jarabes y formas ER; concentraciones variables.",
    "mechanism": "Antagonista H1 con actividad anticolinérgica. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Metabolismo hepático; eliminación renal; semivida variable.",
    "indications": "Alivio de síntomas alérgicos; no trata anafilaxia aisladamente.",
    "dose": "Adultos: 4 mg VO cada 4–6 h; máximo 24 mg/día. Formulación ER según producto.",
    "pediatricDose": "6–11 años: 2 mg cada 4–6 h, máximo 12 mg/día; 2–5 años: 1 mg cada 4–6 h, máximo 6 mg/día, según producto. AUTOMATABLE=NO.",
    "renalDose": "Precaución y posible reducción en ERC.",
    "hepaticDose": "Precaución en hepatopatía.",
    "commonAdverseEffects": "Somnolencia, boca seca, visión borrosa, estreñimiento y mareo.",
    "dangerousAdverseEffects": "Delirio, retención urinaria, glaucoma, convulsión y arritmia en sobredosis.",
    "adverseEffects": "Somnolencia, boca seca, visión borrosa, estreñimiento y mareo. Graves: Delirio, retención urinaria, glaucoma, convulsión y arritmia en sobredosis.",
    "contraindications": "Hipersensibilidad; recién nacidos/prematuros y uso con IMAO según ficha.",
    "interactions": "Alcohol/depresores SNC, anticolinérgicos e IMAO aumentan toxicidad.",
    "monitoring": "Síntomas, sedación, caídas, retención urinaria y efectos anticolinérgicos.",
    "administration": "VO; evitar conducir, alcohol y duplicación en productos para resfriado.",
    "preparation": "Medir solución con dispositivo; no triturar ER.",
    "infusionProtocol": "No aplicable.",
    "pregnancy": "Usar solo si es necesario.",
    "lactation": "Puede causar sedación/irritabilidad en lactante y reducir leche.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Delirio, retención urinaria, glaucoma, convulsión y arritmia en sobredosis. Dose bloqueada sem idade/peso, concentração/formulação, rim/fígado, sedativos e carga anticolinérgica.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=chlorpheniramine",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.fda.gov/drugs/resources-you-drugs/over-counter-otc-nonprescription-drugs"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=chlorpheniramine"
  }
};})();
/* GOLD33_SELECTIVE:clorfeniramina:END */
/* GOLD33_SELECTIVE:desloratadina:START */
;(function(){var db=window.ALERGIA_IMUNOLOGIA_DRUGS_DB;if(!db||!db["desloratadina"])throw new Error("GOLD33_MISSING_CANONICAL:desloratadina");db["desloratadina"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "023",
    "requiredFieldCount": 33,
    "approvedSha256": "ddd43232bffb6d2fdf6447f4d98a9bfbf2223ee2bd963eb5420620e5362f6de6",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "mission10-owner-confirmed"
  },
  "pt": {
    "name": "Desloratadina",
    "class": "Anti-histamínico H1 de 2ª geração",
    "pharmacologicClass": "Antagonista periférico H1; metabólito ativo da loratadina",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Comprimido 5 mg; ODT 2,5/5 mg; solução 0,5 mg/mL.",
    "presentations": "Comprimido 5 mg; ODT 2,5/5 mg; solução 0,5 mg/mL.",
    "mechanism": "Antagonista periférico H1; metabólito ativo da loratadina. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Metabolismo hepático; meia-vida ~27 h; eliminação urinária/fecal.",
    "indications": "Rinite alérgica e urticária crônica idiopática.",
    "dose": "Adultos e ≥12 anos: 5 mg VO 1x/dia.",
    "pediatricDose": "6–11 anos: 2,5 mg/dia; 1–5 anos: 1,25 mg/dia; 6–11 meses: 1 mg/dia conforme solução/rótulo. AUTOMATABLE=NO sem idade e produto.",
    "renalDose": "Adultos com insuficiência renal: considerar 5 mg em dias alternados conforme rótulo; pediatria sem recomendação segura.",
    "hepaticDose": "Adultos com insuficiência hepática: considerar 5 mg em dias alternados; cautela.",
    "commonAdverseEffects": "Cefaleia, boca seca, fadiga.",
    "dangerousAdverseEffects": "Anafilaxia, angioedema, convulsão e taquicardia raras.",
    "adverseEffects": "Cefaleia, boca seca, fadiga. Graves: Anafilaxia, angioedema, convulsão e taquicardia raras.",
    "contraindications": "Hipersensibilidade à desloratadina/loratadina.",
    "interactions": "Poucas interações clinicamente relevantes; álcool pode somar sedação em suscetíveis.",
    "monitoring": "Controle de sintomas, sedação, reação alérgica; rim/fígado quando comprometidos.",
    "administration": "VO com ou sem alimento; medir solução.",
    "preparation": "Usar dispositivo graduado; ODT com mãos secas.",
    "infusionProtocol": "Não aplicável.",
    "pregnancy": "Dados limitados; usar se necessário.",
    "lactation": "Passa ao leite; avaliar risco de sedação.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Anafilaxia, angioedema, convulsão e taquicardia raras. Dose bloqueada sem idade, produto/concentração e função renal/hepática; não substitui adrenalina em anafilaxia.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=desloratadine",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://medlineplus.gov/druginfo/meds/a602002.html"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=desloratadine"
  },
  "es": {
    "name": "Desloratadina",
    "class": "Antihistamínico H1 de 2ª generación",
    "pharmacologicClass": "Antagonista periférico H1; metabolito activo de loratadina",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Comprimido 5 mg; ODT 2,5/5 mg; solución 0,5 mg/mL.",
    "presentations": "Comprimido 5 mg; ODT 2,5/5 mg; solución 0,5 mg/mL.",
    "mechanism": "Antagonista periférico H1; metabolito activo de loratadina. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Metabolismo hepático; semivida ~27 h; eliminación urinaria/fecal.",
    "indications": "Rinitis alérgica y urticaria crónica idiopática.",
    "dose": "Adultos y ≥12 años: 5 mg VO 1 vez/día.",
    "pediatricDose": "6–11 años: 2,5 mg/día; 1–5 años: 1,25 mg/día; 6–11 meses: 1 mg/día según solución/ficha. AUTOMATABLE=NO sin edad y producto.",
    "renalDose": "Adultos con insuficiencia renal: considerar 5 mg en días alternos según ficha; pediatría sin recomendación segura.",
    "hepaticDose": "Adultos con insuficiencia hepática: considerar 5 mg en días alternos; precaución.",
    "commonAdverseEffects": "Cefalea, boca seca, fatiga.",
    "dangerousAdverseEffects": "Anafilaxia, angioedema, convulsión y taquicardia raras.",
    "adverseEffects": "Cefalea, boca seca, fatiga. Graves: Anafilaxia, angioedema, convulsión y taquicardia raras.",
    "contraindications": "Hipersensibilidad a desloratadina/loratadina.",
    "interactions": "Pocas interacciones clínicamente relevantes; alcohol puede sumar sedación en susceptibles.",
    "monitoring": "Control de síntomas, sedación, reacción alérgica; riñón/hígado si comprometidos.",
    "administration": "VO con o sin comida; medir solución.",
    "preparation": "Usar dispositivo graduado; ODT con manos secas.",
    "infusionProtocol": "No aplicable.",
    "pregnancy": "Datos limitados; usar si es necesario.",
    "lactation": "Pasa a leche; valorar riesgo de sedación.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Anafilaxia, angioedema, convulsión y taquicardia raras. Dose bloqueada sem idade, produto/concentração e função renal/hepática; não substitui adrenalina em anafilaxia.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=desloratadine",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://medlineplus.gov/druginfo/meds/a602002.html"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=desloratadine"
  }
};})();
/* GOLD33_SELECTIVE:desloratadina:END */
/* GOLD33_SELECTIVE:desonida:START */
;(function(){var db=window.ALERGIA_IMUNOLOGIA_DRUGS_DB;if(!db||!db["desonida"])throw new Error("GOLD33_MISSING_CANONICAL:desonida");db["desonida"].mcGoldClinicalV1={
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
    "name": "Desonida",
    "class": "Corticosteroide tópico de baixa potência",
    "pharmacologicClass": "Agonista glicocorticoide anti-inflamatório cutâneo",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Creme, pomada, loção, gel e espuma 0,05%; idades e excipientes variam.",
    "presentations": "Creme, pomada, loção, gel e espuma 0,05%; idades e excipientes variam.",
    "mechanism": "Agonista glicocorticoide anti-inflamatório cutâneo. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Absorção percutânea depende de veículo, barreira, área e oclusão.",
    "indications": "Dermatoses inflamatórias responsivas a corticosteroide.",
    "dose": "Aplicar camada fina 2–3x/dia ou conforme produto; interromper quando controlado e reavaliar se sem melhora em 2 semanas.",
    "pediatricDose": "Idade mínima varia por veículo; usar menor área e duração, sem oclusão/área de fralda. AUTOMATABLE=NO.",
    "renalDose": "Sem ajuste sistêmico; absorção aumenta em pele extensa/lesada.",
    "hepaticDose": "Sem ajuste específico.",
    "commonAdverseEffects": "Ardor, prurido, ressecamento, foliculite.",
    "dangerousAdverseEffects": "Atrofia, estrias, glaucoma/catarata e supressão adrenal/Cushing.",
    "adverseEffects": "Ardor, prurido, ressecamento, foliculite. Graves: Atrofia, estrias, glaucoma/catarata e supressão adrenal/Cushing.",
    "contraindications": "Hipersensibilidade; não tratar infecção não controlada isoladamente.",
    "interactions": "Poucas interações; outros corticosteroides somam supressão do eixo HPA.",
    "monitoring": "Resposta, atrofia, infecção e eixo HPA se grande área/uso prolongado.",
    "administration": "Uso cutâneo; evitar olhos, mucosas, face/intertriginosas salvo orientação.",
    "preparation": "Lavar mãos; não ocluir salvo prescrição.",
    "infusionProtocol": "Não aplicável.",
    "pregnancy": "Usar menor quantidade e duração necessárias.",
    "lactation": "Baixa exposição sistêmica esperada; evitar contato do lactente com área tratada.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Atrofia, estrias, glaucoma/catarata e supressão adrenal/Cushing. Uso bloqueado sem produto/veículo, idade, diagnóstico, local, área, integridade da pele e duração.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=desonide",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.fda.gov/drugsatfda"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=desonide"
  },
  "es": {
    "name": "Desonida",
    "class": "Corticosteroide tópico de baja potencia",
    "pharmacologicClass": "Agonista glucocorticoide antiinflamatorio cutáneo",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Crema, ungüento, loción, gel y espuma 0,05%; edades y excipientes varían.",
    "presentations": "Crema, ungüento, loción, gel y espuma 0,05%; edades y excipientes varían.",
    "mechanism": "Agonista glucocorticoide antiinflamatorio cutáneo. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Absorción percutánea depende de vehículo, barrera, área y oclusión.",
    "indications": "Dermatosis inflamatorias sensibles a corticosteroides.",
    "dose": "Aplicar capa fina 2–3 veces/día o según producto; suspender al controlar y reevaluar si no mejora en 2 semanas.",
    "pediatricDose": "Edad mínima varía por vehículo; usar menor área y duración, sin oclusión/pañal. AUTOMATABLE=NO.",
    "renalDose": "Sin ajuste sistémico; absorción aumenta en piel extensa/lesionada.",
    "hepaticDose": "Sin ajuste específico.",
    "commonAdverseEffects": "Ardor, prurito, sequedad, foliculitis.",
    "dangerousAdverseEffects": "Atrofia, estrías, glaucoma/catarata y supresión suprarrenal/Cushing.",
    "adverseEffects": "Ardor, prurito, sequedad, foliculitis. Graves: Atrofia, estrías, glaucoma/catarata y supresión suprarrenal/Cushing.",
    "contraindications": "Hipersensibilidad; no tratar infección no controlada aisladamente.",
    "interactions": "Pocas interacciones; otros corticoides suman supresión HPA.",
    "monitoring": "Respuesta, atrofia, infección y eje HPA si gran área/uso prolongado.",
    "administration": "Uso cutáneo; evitar ojos, mucosas, cara/pliegues salvo indicación.",
    "preparation": "Lavarse manos; no ocluir salvo prescripción.",
    "infusionProtocol": "No aplicable.",
    "pregnancy": "Usar mínima cantidad y duración necesarias.",
    "lactation": "Baja exposición sistémica esperada; evitar contacto del lactante con área tratada.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Atrofia, estrías, glaucoma/catarata y supresión suprarrenal/Cushing. Uso bloqueado sem produto/veículo, idade, diagnóstico, local, área, integridade da pele e duração.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=desonide",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.fda.gov/drugsatfda"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=desonide"
  }
};})();
/* GOLD33_SELECTIVE:desonida:END */
/* GOLD33_SELECTIVE:dexclorfeniramina:START */
;(function(){var db=window.ALERGIA_IMUNOLOGIA_DRUGS_DB;if(!db||!db["dexclorfeniramina"])throw new Error("GOLD33_MISSING_CANONICAL:dexclorfeniramina");db["dexclorfeniramina"].mcGoldClinicalV1={
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
    "name": "Dexclorfeniramina",
    "class": "Anti-histamínico H1 de primeira geração",
    "pharmacologicClass": "Antagonista H1 com efeitos anticolinérgicos",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Comprimidos 2 mg e solução 0,4 mg/mL são comuns; confirmar país/produto.",
    "presentations": "Comprimidos 2 mg e solução 0,4 mg/mL são comuns; confirmar país/produto.",
    "mechanism": "Antagonista H1 com efeitos anticolinérgicos. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Metabolismo hepático, meia-vida variável e eliminação renal.",
    "indications": "Sintomas de rinite/urticária alérgica conforme produto local.",
    "dose": "Adultos e ≥12 anos: 2 mg VO a cada 4–6 h, máximo 12 mg/dia em rótulos usuais.",
    "pediatricDose": "6–11 anos: 1 mg a cada 4–6 h, máx. 6 mg/dia; 2–5 anos: 0,5 mg a cada 4–6 h, máx. 3 mg/dia, conforme rótulo local. AUTOMATABLE=NO.",
    "renalDose": "Sem ajuste validado; reduzir/cautela em insuficiência renal.",
    "hepaticDose": "Reduzir/cautela em hepatopatia.",
    "commonAdverseEffects": "Sonolência, boca seca, visão turva e constipação.",
    "dangerousAdverseEffects": "Delírio, retenção urinária, arritmia, convulsão e depressão respiratória em overdose.",
    "adverseEffects": "Sonolência, boca seca, visão turva e constipação. Graves: Delírio, retenção urinária, arritmia, convulsão e depressão respiratória em overdose.",
    "contraindications": "Hipersensibilidade; recém-nascidos/prematuros e IMAO conforme rótulo; cautela glaucoma/retenção urinária.",
    "interactions": "IMAO, álcool, opioides, benzodiazepínicos e anticolinérgicos.",
    "monitoring": "Sedação, quedas, retenção urinária, sintomas anticolinérgicos e resposta.",
    "administration": "VO; evitar dirigir, álcool e outros sedativos.",
    "preparation": "Medir solução com dispositivo graduado.",
    "infusionProtocol": "Não aplicável.",
    "pregnancy": "Evitar uso rotineiro; considerar alternativas menos sedativas.",
    "lactation": "Pode sedar lactente e reduzir leite; preferir alternativa.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Delírio, retenção urinária, arritmia, convulsão e depressão respiratória em overdose. Dose bloqueada sem idade, produto/concentração, rim/fígado, risco anticolinérgico e revisão de sedativos/IMAO.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=dexchlorpheniramine",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.fda.gov/drugsatfda"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=dexchlorpheniramine"
  },
  "es": {
    "name": "Dexclorfeniramina",
    "class": "Antihistamínico H1 de primera generación",
    "pharmacologicClass": "Antagonista H1 con efectos anticolinérgicos",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Comprimidos 2 mg y solución 0,4 mg/mL son comunes; confirmar país/producto.",
    "presentations": "Comprimidos 2 mg y solución 0,4 mg/mL son comunes; confirmar país/producto.",
    "mechanism": "Antagonista H1 con efectos anticolinérgicos. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Metabolismo hepático, semivida variable y eliminación renal.",
    "indications": "Síntomas de rinitis/urticaria alérgica según producto local.",
    "dose": "Adultos y ≥12 años: 2 mg VO cada 4–6 h, máximo 12 mg/día en fichas habituales.",
    "pediatricDose": "6–11 años: 1 mg cada 4–6 h, máx. 6 mg/día; 2–5 años: 0,5 mg cada 4–6 h, máx. 3 mg/día, según ficha local. AUTOMATABLE=NO.",
    "renalDose": "Sin ajuste validado; reducir/precaución en insuficiencia renal.",
    "hepaticDose": "Reducir/precaución en hepatopatía.",
    "commonAdverseEffects": "Somnolencia, boca seca, visión borrosa y estreñimiento.",
    "dangerousAdverseEffects": "Delirio, retención urinaria, arritmia, convulsión y depresión respiratoria en sobredosis.",
    "adverseEffects": "Somnolencia, boca seca, visión borrosa y estreñimiento. Graves: Delirio, retención urinaria, arritmia, convulsión y depresión respiratoria en sobredosis.",
    "contraindications": "Hipersensibilidad; neonatos/prematuros e IMAO según ficha; precaución glaucoma/retención urinaria.",
    "interactions": "IMAO, alcohol, opioides, benzodiazepinas y anticolinérgicos.",
    "monitoring": "Sedación, caídas, retención urinaria, síntomas anticolinérgicos y respuesta.",
    "administration": "VO; evitar conducir, alcohol y otros sedantes.",
    "preparation": "Medir solución con dispositivo graduado.",
    "infusionProtocol": "No aplicable.",
    "pregnancy": "Evitar uso rutinario; considerar alternativas menos sedantes.",
    "lactation": "Puede sedar al lactante y reducir leche; preferir alternativa.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Delirio, retención urinaria, arritmia, convulsión y depresión respiratoria en sobredosis. Dose bloqueada sem idade, produto/concentração, rim/fígado, risco anticolinérgico e revisão de sedativos/IMAO.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=dexchlorpheniramine",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.fda.gov/drugsatfda"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=dexchlorpheniramine"
  }
};})();
/* GOLD33_SELECTIVE:dexclorfeniramina:END */
/* GOLD33_SELECTIVE:difenidramina:START */
;(function(){var db=window.ALERGIA_IMUNOLOGIA_DRUGS_DB;if(!db||!db["difenidramina"])throw new Error("GOLD33_MISSING_CANONICAL:difenidramina");db["difenidramina"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "025",
    "requiredFieldCount": 33,
    "approvedSha256": "f490066cbf88c2c1fc49fde254c0e52699a8a5320bd3cfb2ee1a9d3050dd9c7f",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "mission10-owner-confirmed"
  },
  "pt": {
    "name": "Difenidramina",
    "class": "Anti-histamínico H1 de primeira geração",
    "pharmacologicClass": "Antagonista H1 com ação anticolinérgica e sedativa",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Cápsulas/comprimidos 25/50 mg, líquido 12,5 mg/5 mL e injeção 50 mg/mL.",
    "presentations": "Cápsulas/comprimidos 25/50 mg, líquido 12,5 mg/5 mL e injeção 50 mg/mL.",
    "mechanism": "Antagonista H1 com ação anticolinérgica e sedativa. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Metabolismo hepático CYP2D6; início rápido e meia-vida maior em idosos.",
    "indications": "Reações alérgicas, rinite, prurido, cinetose e outras indicações conforme via; não substitui adrenalina na anafilaxia.",
    "dose": "Adultos: 25–50 mg VO/IM/IV a cada 4–6 h; máximo usual 300 mg/dia VO ou 400 mg/dia parenteral conforme rótulo.",
    "pediatricDose": "≥2 anos: 5 mg/kg/dia ou 150 mg/m²/dia divididos q6–8h, máximo 300 mg/dia, conforme rótulo; restrições OTC por idade. AUTOMATABLE=NO.",
    "renalDose": "Sem ajuste definido; reduzir/cautela em insuficiência renal e idosos.",
    "hepaticDose": "Cautela/redução em hepatopatia.",
    "commonAdverseEffects": "Sonolência, boca seca, tontura, visão turva e constipação.",
    "dangerousAdverseEffects": "Delirium, arritmia/QRS largo, convulsão, coma e depressão respiratória.",
    "adverseEffects": "Sonolência, boca seca, tontura, visão turva e constipação. Graves: Delirium, arritmia/QRS largo, convulsão, coma e depressão respiratória.",
    "contraindications": "Hipersensibilidade, recém-nascidos/prematuros e lactação para alguns injetáveis; cautela glaucoma/retenção.",
    "interactions": "Álcool, opioides, sedativos e anticolinérgicos somam toxicidade; IMAO intensifica efeitos.",
    "monitoring": "Sedação, respiração, PA, delirium, retenção urinária e resposta alérgica.",
    "administration": "VO com medida correta; IV lenta, não SC. Evitar dirigir e álcool.",
    "preparation": "Injeção geralmente não requer diluição; confirmar concentração/compatibilidade.",
    "infusionProtocol": "IV não exceder 25 mg/min em adultos conforme rótulo.",
    "pregnancy": "Evitar uso rotineiro; usar somente se benefício justificar.",
    "lactation": "Pode sedar lactente e reduzir produção; preferir alternativa.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Delirium, arritmia/QRS largo, convulsão, coma e depressão respiratória. Dose/IV bloqueadas sem idade/peso, indicação, via, concentração, risco anticolinérgico, sedativos e capacidade de monitorização.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=diphenhydramine",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://medlineplus.gov/druginfo/meds/a682539.html"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=diphenhydramine"
  },
  "es": {
    "name": "Difenhidramina",
    "class": "Antihistamínico H1 de primera generación",
    "pharmacologicClass": "Antagonista H1 con acción anticolinérgica y sedante",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Cápsulas/comprimidos 25/50 mg, líquido 12,5 mg/5 mL e inyección 50 mg/mL.",
    "presentations": "Cápsulas/comprimidos 25/50 mg, líquido 12,5 mg/5 mL e inyección 50 mg/mL.",
    "mechanism": "Antagonista H1 con acción anticolinérgica y sedante. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Metabolismo hepático CYP2D6; inicio rápido y semivida mayor en ancianos.",
    "indications": "Reacciones alérgicas, rinitis, prurito, cinetosis y otras indicaciones según vía; no sustituye adrenalina en anafilaxia.",
    "dose": "Adultos: 25–50 mg VO/IM/IV cada 4–6 h; máximo habitual 300 mg/día VO o 400 mg/día parenteral según ficha.",
    "pediatricDose": "≥2 años: 5 mg/kg/día o 150 mg/m²/día divididos q6–8h, máximo 300 mg/día, según ficha; restricciones OTC por edad. AUTOMATABLE=NO.",
    "renalDose": "Sin ajuste definido; reducir/precaución en insuficiencia renal y ancianos.",
    "hepaticDose": "Precaución/reducción en hepatopatía.",
    "commonAdverseEffects": "Somnolencia, boca seca, mareo, visión borrosa y estreñimiento.",
    "dangerousAdverseEffects": "Delirio, arritmia/QRS ancho, convulsión, coma y depresión respiratoria.",
    "adverseEffects": "Somnolencia, boca seca, mareo, visión borrosa y estreñimiento. Graves: Delirio, arritmia/QRS ancho, convulsión, coma y depresión respiratoria.",
    "contraindications": "Hipersensibilidad, neonatos/prematuros y lactancia para algunos inyectables; precaución glaucoma/retención.",
    "interactions": "Alcohol, opioides, sedantes y anticolinérgicos suman toxicidad; IMAO intensifica efectos.",
    "monitoring": "Sedación, respiración, PA, delirio, retención urinaria y respuesta alérgica.",
    "administration": "VO con medida correcta; IV lenta, no SC. Evitar conducir y alcohol.",
    "preparation": "Inyección generalmente no requiere dilución; confirmar concentración/compatibilidad.",
    "infusionProtocol": "IV no exceder 25 mg/min en adultos según ficha.",
    "pregnancy": "Evitar uso rutinario; usar solo si beneficio justifica.",
    "lactation": "Puede sedar al lactante y reducir producción; preferir alternativa.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Delirio, arritmia/QRS ancho, convulsión, coma y depresión respiratoria. Dose/IV bloqueadas sem idade/peso, indicação, via, concentração, risco anticolinérgico, sedativos e capacidade de monitorização.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=diphenhydramine",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://medlineplus.gov/druginfo/meds/a682539.html"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=diphenhydramine"
  }
};})();
/* GOLD33_SELECTIVE:difenidramina:END */
/* GOLD33_SELECTIVE:diflucortolona:START */
;(function(){var db=window.ALERGIA_IMUNOLOGIA_DRUGS_DB;if(!db||!db["diflucortolona"])throw new Error("GOLD33_MISSING_CANONICAL:diflucortolona");db["diflucortolona"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "025",
    "requiredFieldCount": 33,
    "approvedSha256": "f490066cbf88c2c1fc49fde254c0e52699a8a5320bd3cfb2ee1a9d3050dd9c7f",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "mission10-owner-confirmed"
  },
  "pt": {
    "name": "Valerato de diflucortolona",
    "class": "Corticosteroide tópico potente",
    "pharmacologicClass": "Agonista glicocorticoide anti-inflamatório cutâneo",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Creme, creme oleoso e pomada 0,1%; apresentações variam por país.",
    "presentations": "Creme, creme oleoso e pomada 0,1%; apresentações variam por país.",
    "mechanism": "Agonista glicocorticoide anti-inflamatório cutâneo. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Absorção percutânea depende do veículo, barreira, área e oclusão.",
    "indications": "Dermatoses inflamatórias responsivas a corticosteroide conforme produto regional.",
    "dose": "Aplicar camada fina 1–2x/dia; após melhora, reduzir. Duração máxima e locais dependem da bula regional.",
    "pediatricDose": "Uso pediátrico, idade mínima e duração variam; maior risco de supressão HPA. AUTOMATABLE=NO.",
    "renalDose": "Sem ajuste sistêmico; absorção aumenta em grande área/pele lesada.",
    "hepaticDose": "Sem ajuste específico.",
    "commonAdverseEffects": "Ardor, prurido, ressecamento e foliculite.",
    "dangerousAdverseEffects": "Atrofia, estrias, glaucoma/catarata, infecção e supressão adrenal/Cushing.",
    "adverseEffects": "Ardor, prurido, ressecamento e foliculite. Graves: Atrofia, estrias, glaucoma/catarata, infecção e supressão adrenal/Cushing.",
    "contraindications": "Hipersensibilidade; infecções cutâneas não tratadas, rosácea/acne e lesões virais/tuberculosas conforme rótulo.",
    "interactions": "Outros corticosteroides aumentam supressão sistêmica.",
    "monitoring": "Resposta, atrofia/estrias, infecção, olhos e eixo HPA se uso extenso/prolongado.",
    "administration": "Uso cutâneo; evitar olhos/mucosas e face/intertriginosas salvo orientação.",
    "preparation": "Lavar mãos; não ocluir salvo prescrição.",
    "infusionProtocol": "Não aplicável.",
    "pregnancy": "Usar menor área/duração necessárias; evitar extensa exposição.",
    "lactation": "Evitar aplicação mamária antes da mamada e contato do lactente.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Atrofia, estrias, glaucoma/catarata, infecção e supressão adrenal/Cushing. Uso bloqueado sem produto/país, diagnóstico, idade, local, área, integridade da pele e duração.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://pdf.hres.ca/dpd_pm/00037813.PDF",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.ema.europa.eu/en/documents/referral/diflucortolone-containing-medicinal-products-article-31-referral-annex-iii_en.pdf"
    ],
    "ref": "https://pdf.hres.ca/dpd_pm/00037813.PDF"
  },
  "es": {
    "name": "Valerato de diflucortolona",
    "class": "Corticosteroide tópico potente",
    "pharmacologicClass": "Agonista glucocorticoide antiinflamatorio cutáneo",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Crema, crema grasa y ungüento 0,1%; presentaciones varían por país.",
    "presentations": "Crema, crema grasa y ungüento 0,1%; presentaciones varían por país.",
    "mechanism": "Agonista glucocorticoide antiinflamatorio cutáneo. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Absorción percutánea depende de vehículo, barrera, área y oclusión.",
    "indications": "Dermatosis inflamatorias sensibles a corticosteroide según producto regional.",
    "dose": "Aplicar capa fina 1–2 veces/día; tras mejoría, reducir. Duración máxima y zonas dependen de ficha regional.",
    "pediatricDose": "Uso pediátrico, edad mínima y duración varían; mayor riesgo de supresión HPA. AUTOMATABLE=NO.",
    "renalDose": "Sin ajuste sistémico; absorción aumenta en gran área/piel lesionada.",
    "hepaticDose": "Sin ajuste específico.",
    "commonAdverseEffects": "Ardor, prurito, sequedad y foliculitis.",
    "dangerousAdverseEffects": "Atrofia, estrías, glaucoma/catarata, infección y supresión suprarrenal/Cushing.",
    "adverseEffects": "Ardor, prurito, sequedad y foliculitis. Graves: Atrofia, estrías, glaucoma/catarata, infección y supresión suprarrenal/Cushing.",
    "contraindications": "Hipersensibilidad; infecciones cutáneas no tratadas, rosácea/acné y lesiones virales/tuberculosas según ficha.",
    "interactions": "Otros corticosteroides aumentan supresión sistémica.",
    "monitoring": "Respuesta, atrofia/estrías, infección, ojos y eje HPA si uso extenso/prolongado.",
    "administration": "Uso cutáneo; evitar ojos/mucosas y cara/pliegues salvo indicación.",
    "preparation": "Lavarse manos; no ocluir salvo prescripción.",
    "infusionProtocol": "No aplicable.",
    "pregnancy": "Usar mínima área/duración; evitar exposición extensa.",
    "lactation": "Evitar aplicación mamaria antes de toma y contacto del lactante.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Atrofia, estrías, glaucoma/catarata, infección y supresión suprarrenal/Cushing. Uso bloqueado sem produto/país, diagnóstico, idade, local, área, integridade da pele e duração.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://pdf.hres.ca/dpd_pm/00037813.PDF",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.ema.europa.eu/en/documents/referral/diflucortolone-containing-medicinal-products-article-31-referral-annex-iii_en.pdf"
    ],
    "ref": "https://pdf.hres.ca/dpd_pm/00037813.PDF"
  }
};})();
/* GOLD33_SELECTIVE:diflucortolona:END */
/* GOLD33_SELECTIVE:ebastina:START */
;(function(){var db=window.ALERGIA_IMUNOLOGIA_DRUGS_DB;if(!db||!db["ebastina"])throw new Error("GOLD33_MISSING_CANONICAL:ebastina");db["ebastina"].mcGoldClinicalV1={
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
    "name": "Ebastina",
    "class": "Anti-histamínico H1 de segunda geração",
    "pharmacologicClass": "Pró-fármaco convertido em carebastina, antagonista periférico H1",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Comprimidos 10/20 mg e solução oral conforme país.",
    "presentations": "Comprimidos 10/20 mg e solução oral conforme país.",
    "mechanism": "Pró-fármaco convertido em carebastina, antagonista periférico H1. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "CYP3A4 a carebastina ativa; meia-vida do metabólito ~15–19 h.",
    "indications": "Rinite alérgica e urticária conforme autorização nacional; não aprovada nos EUA.",
    "dose": "Adultos: geralmente 10 mg VO 1x/dia; 20 mg/dia em quadros selecionados conforme bula local.",
    "pediatricDose": "Esquemas variam por idade/produto; confirmar bula nacional. AUTOMATABLE=NO.",
    "renalDose": "Cautela em insuficiência renal grave; seguir rótulo regional.",
    "hepaticDose": "Limitar/evitar doses altas em hepatopatia; confirmar rótulo.",
    "commonAdverseEffects": "Cefaleia, boca seca, sonolência e dor abdominal.",
    "dangerousAdverseEffects": "Hipersensibilidade e prolongamento de QT em contexto de risco/interação.",
    "adverseEffects": "Cefaleia, boca seca, sonolência e dor abdominal. Graves: Hipersensibilidade e prolongamento de QT em contexto de risco/interação.",
    "contraindications": "Hipersensibilidade; contraindicações etárias/gestacionais variam por país.",
    "interactions": "Inibidores CYP3A4 como cetoconazol/macrolídeos podem elevar níveis e QT; álcool/sedativos.",
    "monitoring": "Sintomas, sedação, fígado e ECG/QT em pacientes de risco.",
    "administration": "VO 1x/dia, com ou sem alimento conforme produto.",
    "preparation": "Confirmar produto e apresentação; seguir rotulagem oficial.",
    "infusionProtocol": "Não aplicável salvo apresentação parenteral; quando houver, seguir rótulo.",
    "pregnancy": "Avaliar benefício-risco e rotulagem específica; evitar exposição desnecessária.",
    "lactation": "Avaliar transferência ao leite, idade do lactente e alternativa terapêutica.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Hipersensibilidade e prolongamento de QT em contexto de risco/interação. Dose bloqueada sem país/bula, idade, formulação, fígado, QT e interações CYP3A4.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://cima.aemps.es/cima/publico/home.html",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://consultas.anvisa.gov.br/#/bulario/"
    ],
    "ref": "https://cima.aemps.es/cima/publico/home.html"
  },
  "es": {
    "name": "Ebastina",
    "class": "Antihistamínico H1 de segunda generación",
    "pharmacologicClass": "Profármaco convertido en carebastina, antagonista periférico H1",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Comprimidos 10/20 mg y solución oral según país.",
    "presentations": "Comprimidos 10/20 mg y solución oral según país.",
    "mechanism": "Profármaco convertido en carebastina, antagonista periférico H1. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "CYP3A4 a carebastina activa; semivida del metabolito ~15–19 h.",
    "indications": "Rinitis alérgica y urticaria según autorización nacional; no aprobada en EE. UU.",
    "dose": "Adultos: generalmente 10 mg VO 1 vez/día; 20 mg/día en casos seleccionados según ficha local.",
    "pediatricDose": "Pautas varían por edad/producto; confirmar ficha nacional. AUTOMATABLE=NO.",
    "renalDose": "Precaución en insuficiencia renal grave; seguir ficha regional.",
    "hepaticDose": "Limitar/evitar dosis altas en hepatopatía; confirmar ficha.",
    "commonAdverseEffects": "Cefalea, boca seca, somnolencia y dolor abdominal.",
    "dangerousAdverseEffects": "Hipersensibilidad y prolongación de QT en contexto de riesgo/interacción.",
    "adverseEffects": "Cefalea, boca seca, somnolencia y dolor abdominal. Graves: Hipersensibilidad y prolongación de QT en contexto de riesgo/interacción.",
    "contraindications": "Hipersensibilidad; contraindicaciones etarias/gestacionales varían por país.",
    "interactions": "Inhibidores CYP3A4 como ketoconazol/macrólidos pueden elevar niveles y QT; alcohol/sedantes.",
    "monitoring": "Síntomas, sedación, hígado y ECG/QT en pacientes de riesgo.",
    "administration": "VO 1 vez/día, con o sin alimento según producto.",
    "preparation": "Confirmar producto y presentación; seguir ficha oficial.",
    "infusionProtocol": "No aplicable salvo presentación parenteral; cuando exista, seguir ficha.",
    "pregnancy": "Evaluar beneficio-riesgo y ficha específica; evitar exposición innecesaria.",
    "lactation": "Evaluar paso a leche, edad del lactante y alternativa terapéutica.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Hipersensibilidad y prolongación de QT en contexto de riesgo/interacción. Dose bloqueada sem país/bula, idade, formulação, fígado, QT e interações CYP3A4.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://cima.aemps.es/cima/publico/home.html",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://consultas.anvisa.gov.br/#/bulario/"
    ],
    "ref": "https://cima.aemps.es/cima/publico/home.html"
  }
};})();
/* GOLD33_SELECTIVE:ebastina:END */
/* GOLD33_SELECTIVE:fexofenadina:START */
;(function(){var db=window.ALERGIA_IMUNOLOGIA_DRUGS_DB;if(!db||!db["fexofenadina"])throw new Error("GOLD33_MISSING_CANONICAL:fexofenadina");db["fexofenadina"].mcGoldClinicalV1={
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
    "name": "Fexofenadina",
    "class": "Anti-histamínico H1 de 2ª geração",
    "pharmacologicClass": "Antagonista periférico H1",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Comprimidos 30/60/180 mg e suspensão 30 mg/5 mL.",
    "presentations": "Comprimidos 30/60/180 mg e suspensão 30 mg/5 mL.",
    "mechanism": "Antagonista periférico H1. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Pouco metabolismo, substrato de transportadores; eliminação fecal e renal.",
    "indications": "Rinite alérgica e urticária crônica idiopática conforme idade/apresentação.",
    "dose": "Rinite: 60 mg VO 2x/dia ou 180 mg 1x/dia; urticária: 60 mg 2x/dia ou 180 mg/dia conforme rótulo.",
    "pediatricDose": "6 meses–<2 anos para urticária: 15 mg 2x/dia; 2–11 anos: 30 mg 2x/dia; indicações/idades variam. AUTOMATABLE=NO.",
    "renalDose": "Iniciar com dose reduzida; adulto geralmente 60 mg 1x/dia em insuficiência renal.",
    "hepaticDose": "Sem ajuste usual.",
    "commonAdverseEffects": "Cefaleia, tontura, náusea e sonolência ocasional.",
    "dangerousAdverseEffects": "Hipersensibilidade/angioedema e anafilaxia raras.",
    "adverseEffects": "Cefaleia, tontura, náusea e sonolência ocasional. Graves: Hipersensibilidade/angioedema e anafilaxia raras.",
    "contraindications": "Hipersensibilidade.",
    "interactions": "Antiácidos com alumínio/magnésio reduzem absorção; sucos reduzem exposição.",
    "monitoring": "Resposta, sonolência individual, função renal e adesão/técnica.",
    "administration": "Com água; evitar sucos de grapefruit, laranja e maçã próximos da dose.",
    "preparation": "Agitar suspensão; medir com dispositivo adequado.",
    "infusionProtocol": "Não aplicável.",
    "pregnancy": "Dados humanos limitados; usar se necessário.",
    "lactation": "Baixa passagem esperada, mas observar lactente.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Hipersensibilidade/angioedema e anafilaxia raras. Dose pediátrica bloqueada sem idade, indicação, função renal, formulação/concentração e revisão de sucos/antiácidos.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=fexofenadine",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2003/020625s015lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=fexofenadine"
  },
  "es": {
    "name": "Fexofenadina",
    "class": "Antihistamínico H1 de 2ª generación",
    "pharmacologicClass": "Antagonista periférico H1",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Comprimidos 30/60/180 mg y suspensión 30 mg/5 mL.",
    "presentations": "Comprimidos 30/60/180 mg y suspensión 30 mg/5 mL.",
    "mechanism": "Antagonista periférico H1. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Poco metabolismo, sustrato de transportadores; eliminación fecal y renal.",
    "indications": "Rinitis alérgica y urticaria crónica idiopática según edad/presentación.",
    "dose": "Rinitis: 60 mg VO 2 veces/día o 180 mg 1 vez/día; urticaria: 60 mg 2 veces/día o 180 mg/día según ficha.",
    "pediatricDose": "6 meses–<2 años para urticaria: 15 mg 2 veces/día; 2–11 años: 30 mg 2 veces/día; indicaciones/edades varían. AUTOMATABLE=NO.",
    "renalDose": "Iniciar con dosis reducida; adulto generalmente 60 mg 1 vez/día en insuficiencia renal.",
    "hepaticDose": "Sin ajuste habitual.",
    "commonAdverseEffects": "Cefalea, mareo, náusea y somnolencia ocasional.",
    "dangerousAdverseEffects": "Hipersensibilidad/angioedema y anafilaxia raras.",
    "adverseEffects": "Cefalea, mareo, náusea y somnolencia ocasional. Graves: Hipersensibilidad/angioedema y anafilaxia raras.",
    "contraindications": "Hipersensibilidad.",
    "interactions": "Antiácidos con aluminio/magnesio reducen absorción; jugos reducen exposición.",
    "monitoring": "Respuesta, somnolencia individual, función renal y adherencia/técnica.",
    "administration": "Con agua; evitar jugos de pomelo, naranja y manzana cerca de la dosis.",
    "preparation": "Agitar suspensión; medir con dispositivo adecuado.",
    "infusionProtocol": "No aplicable.",
    "pregnancy": "Datos humanos limitados; usar si es necesario.",
    "lactation": "Bajo paso esperado, vigilar lactante.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Hipersensibilidad/angioedema y anafilaxia raras. Dose pediátrica bloqueada sem idade, indicação, função renal, formulação/concentração e revisão de sucos/antiácidos.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=fexofenadine",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2003/020625s015lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=fexofenadine"
  }
};})();
/* GOLD33_SELECTIVE:fexofenadina:END */
