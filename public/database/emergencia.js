/* ============================================================
   MedCases Pro — Módulo: EMERGÊNCIA / ANESTESIA
   Expõe: window.EMERGENCIA_DRUGS_DB

   BUILD 316 — Lote 1 (Anestésicos de Emergência)
   Cetamina, Etomidato
   ============================================================ */

(function () {
  'use strict';
  if (typeof window.EMERGENCIA_DRUGS_DB !== 'object' || Array.isArray(window.EMERGENCIA_DRUGS_DB)) {
    window.EMERGENCIA_DRUGS_DB = {};
  }

  Object.assign(window.EMERGENCIA_DRUGS_DB, {

/* ── CETAMINA / KETAMINA ────────────────────────────────────────────── */
    "cetamina": {
      "name": {
        "pt": "Cetamina / Ketamina",
        "es": "Ketamina"
      },
      "category": "emergencia",
      "class": {
        "pt": "Anestésico dissociativo; antagonista não competitivo de receptores NMDA",
        "es": "Anestésico disociativo; antagonista no competitivo de receptores NMDA"
      },
      "indications": {
        "pt": [
          "Indução de anestesia geral",
          "Anestesia como agente único em procedimentos que não exigem relaxamento muscular",
          "Suplemento a outros agentes anestésicos",
          "Sedação procedural pediátrica em emergência — uso fora da rotulagem dos EUA, conforme protocolo institucional"
        ],
        "es": [
          "Inducción de anestesia general",
          "Anestesia como agente único en procedimientos que no requieren relajación muscular",
          "Suplemento de otros agentes anestésicos",
          "Sedación procedimental pediátrica en urgencias — uso fuera del rotulado de EE. UU., según protocolo institucional"
        ]
      },
      "commercialNames": {
        "br": [
          "Ketalar",
          "Ketamin"
        ],
        "ar": [
          "Ketamina",
          "Ketalar"
        ]
      },
      "presentation": {
        "pt": [
          "Solução injetável IV/IM; concentrações de 10, 50 e 100 mg/mL podem existir conforme fabricante/mercado"
        ],
        "es": [
          "Solución inyectable IV/IM; pueden existir concentraciones de 10, 50 y 100 mg/mL según fabricante/mercado"
        ]
      },
      "mechanism": {
        "pt": "Antagoniza receptores NMDA e produz anestesia dissociativa com analgesia e amnésia. Em muitos pacientes aumenta pressão arterial e frequência cardíaca por estimulação simpática, mas hipotensão e bradicardia também podem ocorrer, especialmente em depleção de catecolaminas.",
        "es": "Antagoniza receptores NMDA y produce anestesia disociativa con analgesia y amnesia. En muchos pacientes aumenta la presión arterial y la frecuencia cardíaca por estimulación simpática, pero también pueden ocurrir hipotensión y bradicardia, especialmente con depleción de catecolaminas."
      },
      "dose": {
        "adult": {
          "pt": "Indução: 1–4,5 mg/kg IV lentamente em 60 s; alternativa 1–2 mg/kg a 0,5 mg/kg/min. IM: 6,5–13 mg/kg. Titular ao efeito e ao contexto anestésico.",
          "es": "Inducción: 1–4,5 mg/kg IV lentamente en 60 s; alternativa 1–2 mg/kg a 0,5 mg/kg/min. IM: 6,5–13 mg/kg. Titular al efecto y al contexto anestésico."
        },
        "pediatric": {
          "pt": "Rotulagem dos EUA: segurança/eficácia <16 anos não estabelecidas. Em sedação procedural pediátrica por protocolo: 1–1,5 mg/kg IV, com incrementos de 0,25–0,5 mg/kg; IM 4 mg/kg, podendo repetir 2 mg/kg após 10 min (máx. 6 mg/kg).",
          "es": "Rotulado de EE. UU.: seguridad/eficacia <16 años no establecidas. En sedación procedimental pediátrica por protocolo: 1–1,5 mg/kg IV, con incrementos de 0,25–0,5 mg/kg; IM 4 mg/kg, pudiendo repetir 2 mg/kg a los 10 min (máx. 6 mg/kg)."
        }
      },
      "administration": {
        "pt": [
          "Administrar IV lentamente; a injeção rápida aumenta risco de depressão respiratória e resposta pressora.",
          "A concentração de 100 mg/mL é concentrada e deve ser diluída antes do uso IV conforme a rotulagem do produto.",
          "Monitorização cardiorrespiratória e capacidade imediata de manejo de via aérea são obrigatórias durante sedação/anestesia."
        ],
        "es": [
          "Administrar IV lentamente; la inyección rápida aumenta el riesgo de depresión respiratoria y respuesta presora.",
          "La concentración de 100 mg/mL es concentrada y debe diluirse antes del uso IV según el rotulado del producto.",
          "Se requiere monitorización cardiorrespiratoria y capacidad inmediata para manejo de la vía aérea durante sedación/anestesia."
        ]
      },
      "renalAdjustment": {
        "required": false,
        "message": {
          "pt": "A rotulagem não estabelece ajuste renal fixo para indução; titular clinicamente.",
          "es": "El rotulado no establece un ajuste renal fijo para inducción; titular clínicamente."
        }
      },
      "hepaticAdjustment": {
        "required": true,
        "message": {
          "pt": "Não há ajuste único definido para dose de indução. Uso recorrente foi associado a lesão hepática; considerar função hepática basal e periódica quando houver plano de administrações repetidas.",
          "es": "No hay un ajuste único definido para la dosis de inducción. El uso repetido se ha asociado a lesión hepática; considerar función hepática basal y periódica cuando se planifiquen administraciones repetidas."
        }
      },
      "commonAdverseEffects": {
        "pt": [
          "Náusea/vômito",
          "Nistagmo",
          "Hipersecreção salivar",
          "Reações de emergência",
          "Aumento de pressão arterial e frequência cardíaca"
        ],
        "es": [
          "Náuseas/vómitos",
          "Nistagmo",
          "Hipersalivación",
          "Reacciones de emergencia",
          "Aumento de presión arterial y frecuencia cardíaca"
        ]
      },
      "dangerousAdverseEffects": {
        "pt": [
          "Depressão respiratória/apneia, sobretudo com administração rápida ou dose excessiva",
          "Laringoespasmo",
          "Instabilidade hemodinâmica",
          "Lesão hepática com uso recorrente"
        ],
        "es": [
          "Depresión respiratoria/apnea, sobre todo con administración rápida o dosis excesiva",
          "Laringoespasmo",
          "Inestabilidad hemodinámica",
          "Lesión hepática con uso repetido"
        ]
      },
      "contraindications": {
        "absolute": {
          "pt": [
            "Hipersensibilidade à cetamina ou excipientes",
            "Situação em que elevação importante da pressão arterial represente risco grave"
          ],
          "es": [
            "Hipersensibilidad a ketamina o excipientes",
            "Situación en la que una elevación importante de la presión arterial represente un riesgo grave"
          ]
        },
        "relative": {
          "pt": [
            "Pressão intracraniana elevada: usar em ambiente monitorizado",
            "Procedimentos de faringe/laringe/árvore brônquica exigem estratégia adicional de via aérea/anestesia",
            "Uso recorrente em hepatopatia"
          ],
          "es": [
            "Presión intracraneal elevada: usar en ambiente monitorizado",
            "Procedimientos de faringe/laringe/árbol bronquial requieren estrategia adicional de vía aérea/anestesia",
            "Uso repetido en hepatopatía"
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
          "pt": "A preservação de reflexos de via aérea não elimina risco de obstrução, laringoespasmo ou apneia. Benzodiazepínico não é obrigatório de rotina; pode ser usado quando clinicamente indicado para manifestações de emergência.",
          "es": "La preservación de reflejos de la vía aérea no elimina el riesgo de obstrucción, laringoespasmo o apnea. Una benzodiazepina no es obligatoria de rutina; puede usarse cuando esté clínicamente indicada para manifestaciones de emergencia."
        }
      }
    },  // end cetamina

/* ── ETOMIDATO ──────────────────────────────────────────────────────── */
    "etomidato": {
      "name": {
        "pt": "Etomidato",
        "es": "Etomidato"
      },
      "category": "emergencia",
      "class": {
        "pt": "Hipnótico intravenoso não barbitúrico para indução anestésica",
        "es": "Hipnótico intravenoso no barbitúrico para inducción anestésica"
      },
      "indications": {
        "pt": [
          "Indução de anestesia geral em adultos e pacientes pediátricos >10 anos"
        ],
        "es": [
          "Inducción de anestesia general en adultos y pacientes pediátricos >10 años"
        ]
      },
      "commercialNames": {
        "br": [
          "Hypnomidate"
        ],
        "ar": [
          "Etomidato"
        ]
      },
      "presentation": {
        "pt": [
          "Solução IV 2 mg/mL"
        ],
        "es": [
          "Solución IV 2 mg/mL"
        ]
      },
      "mechanism": {
        "pt": "Modula positivamente receptores GABA-A e produz hipnose rápida sem analgesia. Em geral causa menor depressão cardiovascular que vários outros indutores, mas hipotensão e outras alterações hemodinâmicas podem ocorrer. Inibe transitoriamente a síntese adrenal de cortisol/aldosterona.",
        "es": "Modula positivamente receptores GABA-A y produce hipnosis rápida sin analgesia. En general causa menor depresión cardiovascular que varios otros inductores, pero pueden ocurrir hipotensión y otros cambios hemodinámicos. Inhibe transitoriamente la síntesis adrenal de cortisol/aldosterona."
      },
      "dose": {
        "adult": {
          "pt": "Indução: 0,2–0,6 mg/kg IV individualizados; dose usual 0,3 mg/kg administrada em 30–60 s.",
          "es": "Inducción: 0,2–0,6 mg/kg IV individualizados; dosis habitual 0,3 mg/kg administrada en 30–60 s."
        },
        "pediatric": {
          "pt": ">10 anos: mesma faixa de 0,2–0,6 mg/kg IV, usual 0,3 mg/kg. <10 anos: dados insuficientes para recomendar dose de indução na rotulagem de referência.",
          "es": ">10 años: mismo rango de 0,2–0,6 mg/kg IV, habitual 0,3 mg/kg. <10 años: datos insuficientes para recomendar dosis de inducción en el rotulado de referencia."
        }
      },
      "administration": {
        "pt": [
          "Uso exclusivamente IV.",
          "Administrar a dose de indução em 30–60 s.",
          "Não utilizar como infusão prolongada para sedação: há supressão de cortisol e aldosterona."
        ],
        "es": [
          "Uso exclusivamente IV.",
          "Administrar la dosis de inducción en 30–60 s.",
          "No utilizar como infusión prolongada para sedación: existe supresión de cortisol y aldosterona."
        ]
      },
      "renalAdjustment": {
        "required": false,
        "message": {
          "pt": "Não há ajuste renal fixo para a dose única de indução na rotulagem; individualizar conforme condição clínica.",
          "es": "No hay ajuste renal fijo para la dosis única de inducción en el rotulado; individualizar según condición clínica."
        }
      },
      "hepaticAdjustment": {
        "required": false,
        "message": {
          "pt": "Não há ajuste hepático fixo definido para dose única; individualizar e considerar maior sensibilidade em pacientes frágeis.",
          "es": "No hay ajuste hepático fijo definido para dosis única; individualizar y considerar mayor sensibilidad en pacientes frágiles."
        }
      },
      "commonAdverseEffects": {
        "pt": [
          "Mioclonia",
          "Dor à injeção",
          "Náuseas e vômitos"
        ],
        "es": [
          "Mioclonía",
          "Dolor a la inyección",
          "Náuseas y vómitos"
        ]
      },
      "dangerousAdverseEffects": {
        "pt": [
          "Supressão adrenal transitória",
          "Hipotensão, sobretudo com administração rápida ou vulnerabilidade hemodinâmica",
          "Apneia/depressão respiratória pode ocorrer"
        ],
        "es": [
          "Supresión adrenal transitoria",
          "Hipotensión, sobre todo con administración rápida o vulnerabilidad hemodinámica",
          "Apnea/depresión respiratoria puede ocurrir"
        ]
      },
      "contraindications": {
        "absolute": {
          "pt": [
            "Hipersensibilidade ao etomidato ou componentes"
          ],
          "es": [
            "Hipersensibilidad a etomidato o componentes"
          ]
        },
        "relative": {
          "pt": [
            "Sepse/choque: considerar o contexto clínico; diretriz SCCM não demonstra diferença de mortalidade ou hipotensão versus outros indutores",
            "Idosos podem necessitar doses menores"
          ],
          "es": [
            "Sepsis/shock: considerar el contexto clínico; la guía SCCM no demuestra diferencia de mortalidad o hipotensión frente a otros inductores",
            "Adultos mayores pueden requerir dosis menores"
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
          "pt": "Etomidato não fornece analgesia. Não administrar corticosteroide rotineiramente apenas para neutralizar a supressão adrenal de uma dose de RSI; tratar choque refratário conforme indicação clínica própria.",
          "es": "Etomidato no aporta analgesia. No administrar corticosteroide de rutina solo para contrarrestar la supresión adrenal de una dosis de RSI; tratar el shock refractario según su indicación clínica propia."
        }
      }
    },  // end etomidato

/* ── ROCURÔNIO ──────────────────────────────────────────────────────── */
    "rocuronio": {
      "name": {
        "pt": "Rocurônio",
        "es": "Rocuronio"
      },
      "category": "emergencia",
      "class": {
        "pt": "Bloqueador neuromuscular não despolarizante aminosteroide",
        "es": "Bloqueador neuromuscular no despolarizante aminoesteroideo"
      },
      "indications": {
        "pt": [
          "Facilitar intubação traqueal",
          "Bloqueio neuromuscular durante cirurgia e ventilação mecânica",
          "Intubação de sequência rápida em adultos adequadamente anestesiados"
        ],
        "es": [
          "Facilitar intubación traqueal",
          "Bloqueo neuromuscular durante cirugía y ventilación mecánica",
          "Intubación de secuencia rápida en adultos adecuadamente anestesiados"
        ]
      },
      "commercialNames": {
        "br": [
          "Esmeron",
          "Roculim"
        ],
        "ar": [
          "Esmeron"
        ]
      },
      "presentation": {
        "pt": [
          "Solução IV 10 mg/mL"
        ],
        "es": [
          "Solución IV 10 mg/mL"
        ]
      },
      "mechanism": {
        "pt": "Antagonista competitivo dos receptores nicotínicos de acetilcolina na junção neuromuscular. Produz paralisia flácida sem sedação ou analgesia.",
        "es": "Antagonista competitivo de los receptores nicotínicos de acetilcolina en la unión neuromuscular. Produce parálisis flácida sin sedación ni analgesia."
      },
      "dose": {
        "adult": {
          "pt": "Intubação: 0,6 mg/kg IV. RSI adulto: 0,6–1,2 mg/kg IV. Infusão: iniciar 10–12 mcg/kg/min somente após sinais precoces de recuperação; titular por TOF, com faixas estudadas de 4–16 mcg/kg/min.",
          "es": "Intubación: 0,6 mg/kg IV. RSI adulto: 0,6–1,2 mg/kg IV. Infusión: iniciar 10–12 mcg/kg/min solo tras signos precoces de recuperación; titular por TOF, con rangos estudiados de 4–16 mcg/kg/min."
        },
        "pediatric": {
          "pt": "Dose inicial recomendada para intubação: 0,6 mg/kg IV; 0,45 mg/kg pode ser usada conforme idade e técnica anestésica. Manutenção sob anestesia: 0,15 mg/kg quando reaparece T3; infusão pediátrica deve ser titulada por monitorização neuromuscular.",
          "es": "Dosis inicial recomendada para intubación: 0,6 mg/kg IV; 0,45 mg/kg puede usarse según edad y técnica anestésica. Mantenimiento bajo anestesia: 0,15 mg/kg al reaparecer T3; la infusión pediátrica debe titularse por monitorización neuromuscular."
        }
      },
      "administration": {
        "pt": [
          "Administrar IV por profissional capaz de ventilação e manejo de via aérea.",
          "Usar estimulador de nervo periférico/TOF para manutenção e recuperação.",
          "Infusão contínua deve iniciar apenas após evidência de recuperação espontânea da dose de intubação."
        ],
        "es": [
          "Administrar IV por profesional capaz de ventilación y manejo de vía aérea.",
          "Usar estimulador de nervio periférico/TOF para mantenimiento y recuperación.",
          "La infusión continua debe iniciarse solo tras evidencia de recuperación espontánea de la dosis de intubación."
        ]
      },
      "renalAdjustment": {
        "required": true,
        "message": {
          "pt": "Na insuficiência renal, a duração pode ser mais variável; não aplicar fator fixo de redução. Titular por resposta/TOF e assegurar recuperação adequada antes da extubação.",
          "es": "En insuficiencia renal, la duración puede ser más variable; no aplicar un factor fijo de reducción. Titular por respuesta/TOF y asegurar recuperación adecuada antes de la extubación."
        }
      },
      "hepaticAdjustment": {
        "required": true,
        "message": {
          "pt": "Doença hepática pode prolongar significativamente a duração do bloqueio; individualizar dose e intervalo e monitorizar TOF.",
          "es": "La enfermedad hepática puede prolongar significativamente la duración del bloqueo; individualizar dosis e intervalo y monitorizar TOF."
        }
      },
      "commonAdverseEffects": {
        "pt": [
          "Dor à injeção",
          "Alterações transitórias de frequência cardíaca"
        ],
        "es": [
          "Dolor a la inyección",
          "Cambios transitorios de frecuencia cardíaca"
        ]
      },
      "dangerousAdverseEffects": {
        "pt": [
          "Anafilaxia",
          "Bloqueio neuromuscular residual/prolongado",
          "Compromisso ventilatório se recuperação for incompleta"
        ],
        "es": [
          "Anafilaxia",
          "Bloqueo neuromuscular residual/prolongado",
          "Compromiso ventilatorio si la recuperación es incompleta"
        ]
      },
      "contraindications": {
        "absolute": {
          "pt": [
            "Hipersensibilidade ao rocurônio ou brometos/componentes"
          ],
          "es": [
            "Hipersensibilidad a rocuronio o bromuros/componentes"
          ]
        },
        "relative": {
          "pt": [
            "Doenças neuromusculares podem alterar intensamente a resposta",
            "Disfunção renal ou hepática pode prolongar/variabilizar o efeito"
          ],
          "es": [
            "Las enfermedades neuromusculares pueden alterar intensamente la respuesta",
            "La disfunción renal o hepática puede prolongar/variabilizar el efecto"
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
          "pt": "Não possui efeito sedativo nem analgésico. Deve ser administrado após sedativo-hipnótico adequado para intubação e com ventilação imediatamente disponível. Reversão com sugamadex é possível em bloqueio por rocurônio, conforme profundidade e protocolo.",
          "es": "No posee efecto sedante ni analgésico. Debe administrarse después de un sedante-hipnótico adecuado para intubación y con ventilación inmediatamente disponible. La reversión con sugammadex es posible en bloqueo por rocuronio, según profundidad y protocolo."
        }
      }
    },  // end rocuronio

/* ── SUCCINILCOLINA ─────────────────────────────────────────────────── */
    "succinilcolina": {
      "name": {
        "pt": "Succinilcolina (Cloreto de Suxametônio)",
        "es": "Succinilcolina (Cloruro de Suxametonio)"
      },
      "category": "emergencia",
      "class": {
        "pt": "Bloqueador neuromuscular despolarizante",
        "es": "Bloqueador neuromuscular despolarizante"
      },
      "indications": {
        "pt": [
          "Facilitar intubação traqueal",
          "Relaxamento muscular durante cirurgia ou ventilação mecânica",
          "Em pediatria, reservar para intubação de emergência/necessidade imediata de via aérea ou IM quando não há acesso venoso adequado"
        ],
        "es": [
          "Facilitar intubación traqueal",
          "Relajación muscular durante cirugía o ventilación mecánica",
          "En pediatría, reservar para intubación de emergencia/necesidad inmediata de vía aérea o IM cuando no hay acceso venoso adecuado"
        ]
      },
      "commercialNames": {
        "br": [
          "Quelicin"
        ],
        "ar": [
          "Succinilcolina"
        ]
      },
      "presentation": {
        "pt": [
          "Solução/frasco injetável IV/IM; apresentações variam por mercado"
        ],
        "es": [
          "Solución/vial inyectable IV/IM; presentaciones varían según mercado"
        ]
      },
      "mechanism": {
        "pt": "Agonista nicotínico despolarizante que produz despolarização sustentada da placa motora, seguida de paralisia. É hidrolisada principalmente pela butirilcolinesterase plasmática.",
        "es": "Agonista nicotínico despolarizante que produce despolarización sostenida de la placa motora, seguida de parálisis. Se hidroliza principalmente por butirilcolinesterasa plasmática."
      },
      "dose": {
        "adult": {
          "pt": "Intubação de emergência em adulto: dose frequentemente usada 1–1,5 mg/kg IV conforme protocolo; a rotulagem também descreve 0,6 mg/kg como dose adulta usual para bloqueio. Titular ao objetivo e não usar como sedativo.",
          "es": "Intubación de emergencia en adulto: dosis frecuentemente utilizada 1–1,5 mg/kg IV según protocolo; el rotulado también describe 0,6 mg/kg como dosis adulta habitual para bloqueo. Titular al objetivo y no usar como sedante."
        },
        "pediatric": {
          "pt": "Emergência: lactentes/crianças pequenas 2 mg/kg IV; crianças maiores/adolescentes 1 mg/kg IV. Se não houver acesso venoso, IM até 3–4 mg/kg; dose IM total máx. 150 mg. Uso pediátrico deve ser reservado para necessidade imediata de via aérea.",
          "es": "Emergencia: lactantes/niños pequeños 2 mg/kg IV; niños mayores/adolescentes 1 mg/kg IV. Si no hay acceso venoso, IM hasta 3–4 mg/kg; dosis IM total máx. 150 mg. El uso pediátrico debe reservarse para necesidad inmediata de vía aérea."
        }
      },
      "administration": {
        "pt": [
          "Bolus IV/IM conforme formulação. Para infusão, a rotulagem descreve diluição para 1–2 mg/mL em dextrose 5% ou SF 0,9%.",
          "Monitorizar função neuromuscular se usada em infusão.",
          "Não misturar com soluções alcalinas."
        ],
        "es": [
          "Bolo IV/IM según formulación. Para infusión, el rotulado describe dilución a 1–2 mg/mL en dextrosa 5% o SF 0,9%.",
          "Monitorizar función neuromuscular si se usa en infusión.",
          "No mezclar con soluciones alcalinas."
        ]
      },
      "renalAdjustment": {
        "required": true,
        "message": {
          "pt": "Insuficiência renal/anúria isoladamente não consta como contraindicação formal. Avaliar potássio e condições associadas à hipercalemia; evitar em hipercalemia significativa ou situações de alto risco para elevação abrupta de K+.",
          "es": "La insuficiencia renal/anuria aislada no figura como contraindicación formal. Evaluar potasio y condiciones asociadas a hiperpotasemia; evitar con hiperpotasemia significativa o situaciones de alto riesgo de aumento brusco de K+."
        }
      },
      "hepaticAdjustment": {
        "required": true,
        "message": {
          "pt": "Redução de butirilcolinesterase, inclusive em doença hepática grave, pode prolongar o bloqueio/apneia; garantir ventilação até recuperação.",
          "es": "La reducción de butirilcolinesterasa, incluso en enfermedad hepática grave, puede prolongar el bloqueo/apnea; garantizar ventilación hasta la recuperación."
        }
      },
      "commonAdverseEffects": {
        "pt": [
          "Fasciculações",
          "Mialgia",
          "Bradicardia, especialmente em crianças ou doses repetidas",
          "Aumento transitório do potássio"
        ],
        "es": [
          "Fasciculaciones",
          "Mialgia",
          "Bradicardia, especialmente en niños o dosis repetidas",
          "Aumento transitorio del potasio"
        ]
      },
      "dangerousAdverseEffects": {
        "pt": [
          "Rabdomiólise hipercalêmica com arritmia/parada cardíaca, especialmente em miopatias pediátricas ocultas",
          "Hipertermia maligna",
          "Hipercalemia grave",
          "Bradicardia/assistolia"
        ],
        "es": [
          "Rabdomiólisis hiperpotasémica con arritmia/paro cardíaco, especialmente en miopatías pediátricas ocultas",
          "Hipertermia maligna",
          "Hiperpotasemia grave",
          "Bradicardia/asistolia"
        ]
      },
      "contraindications": {
        "absolute": {
          "pt": [
            "Miopatias esqueléticas",
            "Após fase aguda de grandes queimaduras, trauma múltiplo, desnervação extensa ou lesão de neurônio motor superior",
            "História pessoal ou familiar de hipertermia maligna",
            "Hipersensibilidade"
          ],
          "es": [
            "Miopatías esqueléticas",
            "Tras la fase aguda de grandes quemaduras, trauma múltiple, denervación extensa o lesión de neurona motora superior",
            "Antecedente personal o familiar de hipertermia maligna",
            "Hipersensibilidad"
          ]
        },
        "relative": {
          "pt": [
            "Hipercalemia prévia ou alto risco de hipercalemia",
            "Deficiência/atividade reduzida de butirilcolinesterase",
            "Doses repetidas aumentam risco de bradicardia"
          ],
          "es": [
            "Hiperpotasemia previa o alto riesgo de hiperpotasemia",
            "Deficiencia/actividad reducida de butirilcolinesterasa",
            "Dosis repetidas aumentan el riesgo de bradicardia"
          ]
        }
      },
      "safetyFlags": {
        "bleedingRisk": false,
        "renalHighRisk": true,
        "hepaticCaution": true,
        "antidoteAvailable": false,
        "highAlertMedication": true,
        "warning": {
          "pt": "Não possui sedação nem analgesia. Em crianças, existe boxed warning para rabdomiólise hipercalêmica com disritmia, parada cardíaca e morte; reservar o uso para situações em que a via aérea precise ser assegurada imediatamente.",
          "es": "No posee sedación ni analgesia. En niños existe boxed warning por rabdomiólisis hiperpotasémica con disritmia, paro cardíaco y muerte; reservar el uso para situaciones en que la vía aérea deba asegurarse inmediatamente."
        }
      }
    },  // end succinilcolina

/* ── CISATRACÚRIO ───────────────────────────────────────────────────── */
    "cisatracurio": {
      "name": {
        "pt": "Cisatracúrio",
        "es": "Cisatracurio"
      },
      "category": "emergencia",
      "class": {
        "pt": "Bloqueador neuromuscular não despolarizante benzilisoquinolínico",
        "es": "Bloqueador neuromuscular no despolarizante bencilisoquinolínico"
      },
      "indications": {
        "pt": [
          "Facilitar intubação traqueal em anestesia geral",
          "Relaxamento muscular durante cirurgia",
          "Bloqueio neuromuscular em pacientes sob ventilação mecânica quando indicado"
        ],
        "es": [
          "Facilitar intubación traqueal en anestesia general",
          "Relajación muscular durante cirugía",
          "Bloqueo neuromuscular en pacientes con ventilación mecánica cuando esté indicado"
        ]
      },
      "commercialNames": {
        "br": [
          "Nimbium"
        ],
        "ar": [
          "Nimbium"
        ]
      },
      "presentation": {
        "pt": [
          "Solução IV; concentrações variam por fabricante"
        ],
        "es": [
          "Solución IV; concentraciones varían según fabricante"
        ]
      },
      "mechanism": {
        "pt": "Bloqueador competitivo nicotínico não despolarizante. A eliminação de Hofmann é via predominante e reduz dependência de órgãos para o fármaco-mãe, mas metabólitos podem acumular com administração prolongada.",
        "es": "Bloqueador competitivo nicotínico no despolarizante. La eliminación de Hofmann es la vía predominante y reduce la dependencia de órganos para el fármaco original, pero los metabolitos pueden acumularse con administración prolongada."
      },
      "dose": {
        "adult": {
          "pt": "Intubação em adulto: 0,15–0,20 mg/kg IV. Doses de manutenção/infusão devem ser individualizadas por estimulador de nervo periférico e resposta clínica.",
          "es": "Intubación en adulto: 0,15–0,20 mg/kg IV. Las dosis de mantenimiento/infusión deben individualizarse mediante estimulador de nervio periférico y respuesta clínica."
        },
        "pediatric": {
          "pt": "1–23 meses: 0,15 mg/kg IV em 5–10 s. 2–12 anos: 0,10–0,15 mg/kg IV em 5–10 s. <1 mês: segurança/eficácia não estabelecidas.",
          "es": "1–23 meses: 0,15 mg/kg IV en 5–10 s. 2–12 años: 0,10–0,15 mg/kg IV en 5–10 s. <1 mes: seguridad/eficacia no establecidas."
        }
      },
      "administration": {
        "pt": [
          "Usar estimulador de nervo periférico para avaliar bloqueio, necessidade de redose e recuperação.",
          "Não usar para RSI quando a rapidez de início necessária exceder a esperada para cisatracúrio.",
          "Administrar apenas com capacidade de ventilação e sedação adequadas."
        ],
        "es": [
          "Usar estimulador de nervio periférico para evaluar bloqueo, necesidad de redosis y recuperación.",
          "No usar para RSI cuando la rapidez de inicio necesaria exceda la esperada para cisatracurio.",
          "Administrar solo con capacidad de ventilación y sedación adecuadas."
        ]
      },
      "renalAdjustment": {
        "required": false,
        "message": {
          "pt": "Em doença renal terminal, a recuperação clínica nas doses estudadas não foi significativamente alterada, embora o início possa ser discretamente mais lento; titular por TOF.",
          "es": "En enfermedad renal terminal, la recuperación clínica con las dosis estudiadas no se alteró significativamente, aunque el inicio puede ser discretamente más lento; titular por TOF."
        }
      },
      "hepaticAdjustment": {
        "required": false,
        "message": {
          "pt": "Em hepatopatia, diferenças farmacocinéticas foram pequenas e não produziram alteração clinicamente importante da recuperação nas doses estudadas; titular por TOF.",
          "es": "En hepatopatía, las diferencias farmacocinéticas fueron pequeñas y no produjeron cambios clínicamente importantes en la recuperación con las dosis estudiadas; titular por TOF."
        }
      },
      "commonAdverseEffects": {
        "pt": [
          "Bloqueio neuromuscular residual",
          "Bradicardia/hipotensão podem ocorrer",
          "Reações no local de injeção"
        ],
        "es": [
          "Bloqueo neuromuscular residual",
          "Pueden ocurrir bradicardia/hipotensión",
          "Reacciones en el sitio de inyección"
        ]
      },
      "dangerousAdverseEffects": {
        "pt": [
          "Anafilaxia",
          "Bloqueio prolongado/apneia se superdosado ou em maior sensibilidade",
          "Miopatia/fraqueza no contexto de bloqueio prolongado em críticos"
        ],
        "es": [
          "Anafilaxia",
          "Bloqueo prolongado/apnea si hay sobredosis o mayor sensibilidad",
          "Miopatía/debilidad en el contexto de bloqueo prolongado en críticos"
        ]
      },
      "contraindications": {
        "absolute": {
          "pt": [
            "Hipersensibilidade ao cisatracúrio"
          ],
          "es": [
            "Hipersensibilidad a cisatracurio"
          ]
        },
        "relative": {
          "pt": [
            "Doenças neuromusculares podem aumentar a sensibilidade",
            "Hipotermia e alterações de pH podem modificar a degradação de Hofmann"
          ],
          "es": [
            "Las enfermedades neuromusculares pueden aumentar la sensibilidad",
            "La hipotermia y alteraciones del pH pueden modificar la degradación de Hofmann"
          ]
        }
      },
      "safetyFlags": {
        "bleedingRisk": false,
        "renalHighRisk": false,
        "hepaticCaution": false,
        "antidoteAvailable": true,
        "highAlertMedication": true,
        "warning": {
          "pt": "Não possui sedação nem analgesia. A eliminação predominantemente organoindependente não significa ausência total de influência clínica de função orgânica, temperatura, pH ou duração da infusão.",
          "es": "No posee sedación ni analgesia. La eliminación predominantemente independiente de órganos no significa ausencia total de influencia clínica de función orgánica, temperatura, pH o duración de la infusión."
        }
      }
    },  // end cisatracurio

/* ── ATRACÚRIO ──────────────────────────────────────────────────────── */
    "atracurio": {
      "name": {
        "pt": "Atracúrio",
        "es": "Atracurio"
      },
      "category": "emergencia",
      "class": {
        "pt": "Bloqueador neuromuscular não despolarizante benzilisoquinolínico",
        "es": "Bloqueador neuromuscular no despolarizante bencilisoquinolínico"
      },
      "indications": {
        "pt": [
          "Facilitar intubação não emergencial",
          "Relaxamento muscular durante cirurgia",
          "Bloqueio neuromuscular por infusão em pacientes selecionados sob ventilação mecânica"
        ],
        "es": [
          "Facilitar intubación no emergente",
          "Relajación muscular durante cirugía",
          "Bloqueo neuromuscular por infusión en pacientes seleccionados con ventilación mecánica"
        ]
      },
      "commercialNames": {
        "br": [
          "Tracrium"
        ],
        "ar": [
          "Tracrium"
        ]
      },
      "presentation": {
        "pt": [
          "Solução IV 10 mg/mL"
        ],
        "es": [
          "Solución IV 10 mg/mL"
        ]
      },
      "mechanism": {
        "pt": "Bloqueador competitivo nicotínico não despolarizante. Sofre degradação de Hofmann e hidrólise por esterases; pode causar liberação de histamina, particularmente com doses maiores ou administração rápida.",
        "es": "Bloqueador competitivo nicotínico no despolarizante. Sufre degradación de Hofmann e hidrólisis por esterasas; puede causar liberación de histamina, especialmente con dosis mayores o administración rápida."
      },
      "dose": {
        "adult": {
          "pt": "Dose inicial usual 0,4–0,5 mg/kg IV. Manutenção em bolus 0,08–0,10 mg/kg. Infusão após recuperação inicial: pode iniciar 9–10 mcg/kg/min e geralmente manter 5–9 mcg/kg/min em anestesia balanceada; titular por TOF.",
          "es": "Dosis inicial habitual 0,4–0,5 mg/kg IV. Mantenimiento en bolos 0,08–0,10 mg/kg. Infusión tras recuperación inicial: puede iniciar 9–10 mcg/kg/min y generalmente mantener 5–9 mcg/kg/min en anestesia balanceada; titular por TOF."
        },
        "pediatric": {
          "pt": "≥2 anos: em geral não requer ajuste da dose inicial do adulto. 1 mês–2 anos sob halotano: 0,3–0,4 mg/kg IV. Manutenção pode ser necessária com maior frequência.",
          "es": "≥2 años: en general no requiere ajuste de la dosis inicial del adulto. 1 mes–2 años bajo halotano: 0,3–0,4 mg/kg IV. El mantenimiento puede ser necesario con mayor frecuencia."
        }
      },
      "administration": {
        "pt": [
          "Usar monitorização neuromuscular/TOF.",
          "Em doença cardiovascular significativa ou maior risco de liberação de histamina, considerar 0,3–0,4 mg/kg administrados lentamente ou em doses divididas durante 1 min.",
          "Infusão contínua deve ser titulada individualmente."
        ],
        "es": [
          "Usar monitorización neuromuscular/TOF.",
          "En enfermedad cardiovascular significativa o mayor riesgo de liberación de histamina, considerar 0,3–0,4 mg/kg administrados lentamente o en dosis divididas durante 1 min.",
          "La infusión continua debe titularse individualmente."
        ]
      },
      "renalAdjustment": {
        "required": false,
        "message": {
          "pt": "A rotulagem não exige ajuste de dose em doença renal; ainda assim, monitorizar TOF e recuperação.",
          "es": "El rotulado no exige ajuste de dosis en enfermedad renal; aun así, monitorizar TOF y recuperación."
        }
      },
      "hepaticAdjustment": {
        "required": false,
        "message": {
          "pt": "Não há ajuste hepático fixo requerido pela rotulagem; monitorizar a resposta e recuperação.",
          "es": "No hay ajuste hepático fijo requerido por el rotulado; monitorizar respuesta y recuperación."
        }
      },
      "commonAdverseEffects": {
        "pt": [
          "Rubor",
          "Hipotensão transitória",
          "Taquicardia",
          "Reações relacionadas à histamina"
        ],
        "es": [
          "Rubor",
          "Hipotensión transitoria",
          "Taquicardia",
          "Reacciones relacionadas con histamina"
        ]
      },
      "dangerousAdverseEffects": {
        "pt": [
          "Broncoespasmo",
          "Anafilaxia/reação alérgica grave",
          "Bloqueio residual",
          "Convulsões foram relatadas em uso prolongado em UTI, com causalidade pelo atracúrio/laudanosina não estabelecida"
        ],
        "es": [
          "Broncoespasmo",
          "Anafilaxia/reacción alérgica grave",
          "Bloqueo residual",
          "Se han reportado convulsiones con uso prolongado en UCI, sin causalidad establecida por atracurio/laudanosina"
        ]
      },
      "contraindications": {
        "absolute": {
          "pt": [
            "Hipersensibilidade ao atracúrio"
          ],
          "es": [
            "Hipersensibilidad a atracurio"
          ]
        },
        "relative": {
          "pt": [
            "Asma ou história de reação anafilactoide: maior cautela com liberação de histamina",
            "Doenças neuromusculares e distúrbios eletrolíticos podem potencializar bloqueio"
          ],
          "es": [
            "Asma o antecedente de reacción anafilactoide: mayor cautela por liberación de histamina",
            "Enfermedades neuromusculares y trastornos electrolíticos pueden potenciar el bloqueo"
          ]
        }
      },
      "safetyFlags": {
        "bleedingRisk": false,
        "renalHighRisk": false,
        "hepaticCaution": false,
        "antidoteAvailable": true,
        "highAlertMedication": true,
        "warning": {
          "pt": "Não possui sedação nem analgesia. A laudanosina é um metabólito potencialmente excitador do SNC, mas relatos de convulsões em UTI não provam causalidade direta; evitar afirmações de convulsão inevitável por insuficiência renal.",
          "es": "No posee sedación ni analgesia. La laudanosina es un metabolito potencialmente excitador del SNC, pero los reportes de convulsiones en UCI no prueban causalidad directa; evitar afirmar convulsiones inevitables por insuficiencia renal."
        }
      }
    },  // end atracurio

/* ── PANCURÔNIO ─────────────────────────────────────────────────────── */
    "pancuronio": {
      name: { pt: 'Pancurônio', es: 'Pancuronio' },
      category: 'emergencia',
      class: { pt: 'Bloqueador Neuromuscular Adespolarizante de Longa Duração', es: 'Bloqueador Neuromuscular No Despolarizante de Larga Duración' },
      indications: {
        pt: ['Relaxamento muscular para cirurgias excepcionalmente longas (cirurgia cardíaca)', 'Manejo de tétano severo'],
        es: ['Relajación muscular para cirugías excepcionalmente largas (cirugía cardíaca)', 'Manejo de tétanos severo']
      },
      commercialNames: { br: ['Pancuron'], ar: ['Pavulon'] },
      presentation: { pt: ['Ampolas IV 2 mg/mL'], es: ['Ampollas IV 2 mg/mL'] },
      mechanism: {
        pt: 'Aminosteroide com ação muito prolongada no bloqueio colinérgico nicotínico. Diferencial crucial: Exerce forte bloqueio vagal (vagolítico) no coração, impedindo o controle do freio parassimpático. Isso resulta em taquicardia marcante e aumento da pressão arterial, frequentemente desejáveis em certas cirurgias cardíacas, mas proibitivos em UTI comum.',
        es: 'Aminosteroide con acción muy prolongada en el bloqueo colinérgico nicotínico. Diferencial crucial: Ejerce fuerte bloqueo vagal (vagolítico) en el corazón, impidiendo el control del freno parasimpático. Esto resulta en taquicardia marcada y aumento de la presión arterial, frecuentemente deseables en ciertas cirugías cardíacas, pero prohibitivos en UCI común.'
      },
      dose: {
        adult: {
          pt: '0,08 a 0,1 mg/kg IV inicial. Manutenção exige minúsculas doses esporádicas. Duração clínica pode passar de 90 a 120 minutos por bolus.',
          es: '0,08 a 0,1 mg/kg IV inicial. Mantenimiento exige minúsculas dosis esporádicas. La duración clínica puede pasar de 90 a 120 minutos por bolo.'
        },
        pediatric: {
          pt: '0,1 mg/kg IV.',
          es: '0,1 mg/kg IV.'
        }
      },
      administration: { pt: ['Bolus IV.'], es: ['Bolo IV.'] },
      renalAdjustment: { required: true, message: { pt: 'ALTAMENTE DEPENDENTE dos rins (80% da eliminação). CONTRAINDICADO em UTI para doentes renais, o paciente pode ficar semanas paralisado.', es: 'ALTAMENTE DEPENDIENTE de los riñones (80% de la eliminación). CONTRAINDICADO en UCI para enfermos renales, el paciente puede quedar semanas paralizado.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Parte da droga (20%) e metabólitos sofrem clearance biliar. Prolonga o efeito.', es: 'Parte de la droga (20%) y metabolitos sufren clearance biliar. Prolonga el efecto.' } },
      commonAdverseEffects: { pt: ['Taquicardia sustentada (efeito antimuscarínico)', 'Aumento da Pressão Arterial', 'Salivação excessiva'], es: ['Taquicardia sostenida (efecto antimuscarínico)', 'Aumento de la Presión Arterial', 'Salivación excesiva'] },
      dangerousAdverseEffects: { pt: ['Bloqueio neuromuscular residual refratário e prolongado pós-cirurgia', 'Isquemia miocárdica (secundária à taquicardia severa em coronariopatas)'], es: ['Bloqueo neuromuscular residual refractario y prolongado pos-cirugía', 'Isquemia miocárdica (secundaria a taquicardia severa en coronariópatas)'] },
      contraindications: {
        absolute: { pt: ['Doença isquêmica do miocárdio descompensada ou risco de infarto (devido à taquicardia extrema)'], es: ['Enfermedad isquémica del miocardio descompensada o riesgo de infarto (debido a taquicardia extrema)'] },
        relative: { pt: ['Disfunção renal prévia', 'Cirurgias curtas (< 1 hora)'], es: ['Disfunción renal previa', 'Cirugías cortas (< 1 hora)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'Em franco DESUSO na UTI médica moderna devido à longa duração e dificuldade de reversão (nem sempre a neostigmina reverte totalmente e o Sugamadex tem fraca afinidade por ele).', es: 'En franco DESUSO en la UCI médica moderna debido a la larga duración y dificultad de reversión (no siempre la neostigmina revierte totalmente y el Sugamadex tiene débil afinidad por él).' }
      }
    },  // end pancuronio

/* ── VECURÔNIO ──────────────────────────────────────────────────────── */
    "vecuronio": {
      "name": {
        "pt": "Vecurônio",
        "es": "Vecuronio"
      },
      "category": "emergencia",
      "class": {
        "pt": "Bloqueador neuromuscular não despolarizante aminosteroide",
        "es": "Bloqueador neuromuscular no despolarizante aminoesteroideo"
      },
      "indications": {
        "pt": [
          "Facilitar intubação não emergencial",
          "Relaxamento muscular durante cirurgia",
          "Bloqueio neuromuscular por infusão em situações selecionadas"
        ],
        "es": [
          "Facilitar intubación no emergente",
          "Relajación muscular durante cirugía",
          "Bloqueo neuromuscular por infusión en situaciones seleccionadas"
        ]
      },
      "commercialNames": {
        "br": [
          "Norcuron"
        ],
        "ar": [
          "Norcuron"
        ]
      },
      "presentation": {
        "pt": [
          "Frasco liofilizado IV; apresentações de 4 mg e 10 mg podem existir conforme mercado"
        ],
        "es": [
          "Vial liofilizado IV; pueden existir presentaciones de 4 mg y 10 mg según mercado"
        ]
      },
      "mechanism": {
        "pt": "Bloqueador competitivo nicotínico não despolarizante aminosteroide, de duração intermediária. Não produz sedação ou analgesia.",
        "es": "Bloqueador competitivo nicotínico no despolarizante aminoesteroideo, de duración intermedia. No produce sedación ni analgesia."
      },
      "dose": {
        "adult": {
          "pt": "Dose inicial 0,08–0,10 mg/kg IV. Manutenção 0,01–0,015 mg/kg. Infusão: iniciar aproximadamente 1 mcg/kg/min após recuperação precoce do bolus e titular por TOF; média 0,8–1,2 mcg/kg/min. Infusão prolongada em UTI não tem evidência suficiente para recomendações firmes de dose.",
          "es": "Dosis inicial 0,08–0,10 mg/kg IV. Mantenimiento 0,01–0,015 mg/kg. Infusión: iniciar aproximadamente 1 mcg/kg/min tras recuperación precoz del bolo y titular por TOF; promedio 0,8–1,2 mcg/kg/min. La infusión prolongada en UCI no tiene evidencia suficiente para recomendaciones firmes de dosis."
        },
        "pediatric": {
          "pt": "10–16 anos: em geral mesma dose por kg do adulto. 1–10 anos podem necessitar dose inicial ligeiramente maior e manutenção mais frequente. 7 semanas–1 ano: maior sensibilidade e recuperação mais lenta. <7 semanas: dados insuficientes para recomendar dose.",
          "es": "10–16 años: en general misma dosis por kg que el adulto. 1–10 años pueden requerir dosis inicial ligeramente mayor y mantenimiento más frecuente. 7 semanas–1 año: mayor sensibilidad y recuperación más lenta. <7 semanas: datos insuficientes para recomendar dosis."
        }
      },
      "administration": {
        "pt": [
          "Reconstituir conforme a apresentação específica e administrar IV.",
          "Usar estimulador de nervo periférico/TOF para redose e recuperação.",
          "Infusão deve iniciar somente após sinais precoces de recuperação da dose de intubação."
        ],
        "es": [
          "Reconstituir según la presentación específica y administrar IV.",
          "Usar estimulador de nervio periférico/TOF para redosis y recuperación.",
          "La infusión debe iniciarse solo tras signos precoces de recuperación de la dosis de intubación."
        ]
      },
      "renalAdjustment": {
        "required": true,
        "message": {
          "pt": "Em pacientes anéfricos ou insuficiência renal importante, o bloqueio pode prolongar-se; considerar menor dose inicial e titular por TOF, especialmente em situações de emergência.",
          "es": "En pacientes anéfricos o con insuficiencia renal importante, el bloqueo puede prolongarse; considerar menor dosis inicial y titular por TOF, especialmente en situaciones de emergencia."
        }
      },
      "hepaticAdjustment": {
        "required": true,
        "message": {
          "pt": "Cirrose/colestase podem prolongar a recuperação, em alguns estudos aproximadamente dobrando o tempo; não há fator universal de ajuste. Titular por TOF.",
          "es": "La cirrosis/colestasis pueden prolongar la recuperación, en algunos estudios aproximadamente duplicando el tiempo; no hay un factor universal de ajuste. Titular por TOF."
        }
      },
      "commonAdverseEffects": {
        "pt": [
          "Bloqueio residual",
          "Recuperação prolongada"
        ],
        "es": [
          "Bloqueo residual",
          "Recuperación prolongada"
        ]
      },
      "dangerousAdverseEffects": {
        "pt": [
          "Anafilaxia",
          "Apneia/bloqueio prolongado",
          "Fraqueza neuromuscular em uso prolongado em críticos"
        ],
        "es": [
          "Anafilaxia",
          "Apnea/bloqueo prolongado",
          "Debilidad neuromuscular con uso prolongado en críticos"
        ]
      },
      "contraindications": {
        "absolute": {
          "pt": [
            "Hipersensibilidade ao vecurônio/brometo ou componentes"
          ],
          "es": [
            "Hipersensibilidad a vecuronio/bromuro o componentes"
          ]
        },
        "relative": {
          "pt": [
            "Doenças neuromusculares",
            "Insuficiência renal",
            "Cirrose/colestase",
            "Uso prolongado em UTI"
          ],
          "es": [
            "Enfermedades neuromusculares",
            "Insuficiencia renal",
            "Cirrosis/colestasis",
            "Uso prolongado en UCI"
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
          "pt": "Não possui sedação nem analgesia. A rotulagem não sustenta recomendar uma taxa fixa para infusão prolongada em UTI; usar apenas com monitorização neuromuscular e objetivos clínicos definidos.",
          "es": "No posee sedación ni analgesia. El rotulado no respalda recomendar una tasa fija para infusión prolongada en UCI; usar solo con monitorización neuromuscular y objetivos clínicos definidos."
        }
      }
    },  // end vecuronio

/* ── SUGAMADEX ──────────────────────────────────────────────────────── */
    "sugamadex": {
      name: { pt: 'Sugamadex', es: 'Sugammadex' },
      category: 'emergencia',
      class: { pt: 'Reversor Seletivo de Bloqueio Neuromuscular (Ciclodextrina)', es: 'Reversor Selectivo de Bloqueo Neuromuscular (Ciclodextrina)' },
      indications: {
        pt: ['Reversão de emergência ou eletiva do bloqueio neuromuscular induzido EXCLUSIVAMENTE por Rocurônio ou Vecurônio', 'Cenário "Não consigo intubar, não consigo ventilar"'],
        es: ['Reversión de emergencia o electiva del bloqueo neuromuscular inducido EXCLUSIVAMENTE por Rocuronio o Vecuronio', 'Escenario "No puedo intubar, no puedo ventilar"']
      },
      commercialNames: { br: ['Bridion'], ar: ['Bridion'] },
      presentation: { pt: ['Ampolas IV 100 mg/mL (2 mL e 5 mL)'], es: ['Ampollas IV 100 mg/mL (2 mL y 5 mL)'] },
      mechanism: {
        pt: 'Revolução farmacológica. É uma gama-ciclodextrina modificada que atua puramente no plasma. Ela age como uma "esponja" que engolfa e encapsula fisicamente as moléculas livres de Rocurônio e Vecurônio no sangue. Ao zerar o rocurônio livre no sangue, cria-se um gradiente de concentração que puxa as moléculas da placa motora de volta para o plasma, revertendo a paralisia muscular completamente em menos de 3 minutos, INDEPENDENTE da profundidade do bloqueio.',
        es: 'Revolución farmacológica. Es una gamma-ciclodextrina modificada que actúa puramente en el plasma. Actúa como una "esponja" que envuelve y encapsula físicamente las moléculas libres de Rocuronio y Vecuronio en la sangre. Al vaciar el rocuronio libre en la sangre, se crea un gradiente de concentración que arrastra las moléculas de la placa motora de vuelta al plasma, revirtiendo la parálisis muscular completamente en menos de 3 minutos, INDEPENDIENTEMENTE de la profundidad del bloqueo.'
      },
      dose: {
        adult: {
          pt: 'Reversão rotineira (TOF 2 contagens): 2 mg/kg IV. Reversão profunda (TOF 0): 4 mg/kg IV. Reversão imediata PÓS-FALHA DE INTUBAÇÃO (resgate de vida): 16 mg/kg IV em bolus rápido.',
          es: 'Reversión rutinaria (TOF 2 conteos): 2 mg/kg IV. Reversión profunda (TOF 0): 4 mg/kg IV. Reversión inmediata POST-FALLA DE INTUBACIÓN (rescate de vida): 16 mg/kg IV en bolo rápido.'
        },
        pediatric: {
          pt: 'Uso pediátrico > 2 anos. Reversão rotineira: 2 mg/kg IV.',
          es: 'Uso pediátrico > 2 años. Reversión rutinaria: 2 mg/kg IV.'
        }
      },
      administration: { pt: ['Bolus IV direto rápido (em cerca de 10 segundos).'], es: ['Bolo IV directo rápido (en unos 10 segundos).'] },
      renalAdjustment: { required: true, message: { pt: 'O complexo Sugamadex-Rocurônio é excretado 100% pelos rins. Em insuficiência renal grave (ClCr < 30 mL/min), o uso é CONTRAINDICADO pela bula, pois o complexo não é depurado.', es: 'El complejo Sugammadex-Rocuronio es excretado 100% por los riñones. En insuficiencia renal grave (ClCr < 30 mL/min), el uso está CONTRAINDICADO por prospecto, pues el complejo no es depurado.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Disgeusia (gosto amargo ou metálico transitório)', 'Tosse e movimentos durante o despertar (recuperação abrupta)'], es: ['Disgeusia (sabor amargo o metálico transitorio)', 'Tos y movimientos durante el despertar (recuperación abrupta)'] },
      dangerousAdverseEffects: { pt: ['Bradicardia severa imediata (risco de parada cardíaca; relatórios recentes do FDA pedem atenção)', 'Anafilaxia grave (1 em 300 pacientes)'], es: ['Bradicardia severa inmediata (riesgo de paro cardíaco; reportes recientes de la FDA piden atención)', 'Anafilaxia grave (1 en 300 pacientes)'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade', 'Uso para reverter bloqueios de Cisatracúrio, Atracúrio ou Succinilcolina (NÃO POSSUI NENHUM EFEITO nessas drogas)'], es: ['Hipersensibilidad', 'Uso para revertir bloqueos de Cisatracurio, Atracurio o Succinilcolina (NO POSEE NINGÚN EFECTO en estas drogas)'] },
        relative: { pt: ['DRC Dialítica'], es: ['ERC Dialítica'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'Se for necessário reintubar um paciente minutos após ele ter recebido o Sugamadex, NÃO use Rocurônio novamente (ele será imediatamente encapsulado e o paciente não vai paralisar). Use Succinilcolina ou Cisatracúrio.', es: 'Si es necesario reintubar a un paciente minutos después de que haya recibido Sugammadex, NO use Rocuronio nuevamente (será inmediatamente encapsulado y el paciente no se paralizará). Use Succinilcolina o Cisatracurio.' }
      }
    },  // end sugamadex

/* ── NEOSTIGMINA ────────────────────────────────────────────────────── */
    "neostigmina": {
      name: { pt: 'Neostigmina', es: 'Neostigmina' },
      category: 'emergencia',
      class: { pt: 'Inibidor da Acetilcolinesterase', es: 'Inhibidor de la Acetilcolinesterasa' },
      indications: {
        pt: ['Reversão de Bloqueadores Neuromusculares Adespolarizantes', 'Tratamento sintomático da Miastenia Gravis', 'Íleo paralítico ou retenção urinária aguda no pós-operatório'],
        es: ['Reversión de Bloqueadores Neuromusculares No Despolarizantes', 'Tratamiento sintomático de la Miastenia Gravis', 'Íleo paralítico o retención urinaria aguda en el posoperatorio']
      },
      commercialNames: { br: ['Prostigmine'], ar: ['Prostigmin'] },
      presentation: { pt: ['Ampolas IV/IM/SC 0,5 mg/mL (1 mL)', 'Comprimidos 15 mg'], es: ['Ampollas IV/IM/SC 0,5 mg/mL (1 mL)', 'Comprimidos 15 mg'] },
      mechanism: {
        pt: 'Inibe reversivelmente a enzima acetilcolinesterase. Isso impede a destruição da acetilcolina endógena nas fendas sinápticas. O acúmulo maciço de acetilcolina na placa motora vence os Bloqueadores Neuromusculares por "competição" numérica, restaurando a contração muscular. No entanto, o excesso de acetilcolina sistêmica ativa fortemente o sistema nervoso parassimpático (receptores muscarínicos).',
        es: 'Inhibe reversiblemente la enzima acetilcolinesterasa. Esto impide la destrucción de la acetilcolina endógena en las hendiduras sinápticas. La acumulación masiva de acetilcolina en la placa motora vence a los Bloqueadores Neuromusculares por "competición" numérica, restaurando la contracción muscular. Sin embargo, el exceso de acetilcolina sistémica activa fuertemente el sistema nervioso parasimpático (receptores muscarínicos).'
      },
      dose: {
        adult: {
          pt: 'Reversão de BNM: 0,04 a 0,07 mg/kg IV (máx 5 mg). Sempre precedido de Atropina. Miastenia: 15 a 150 mg/dia VO.',
          es: 'Reversión de BNM: 0,04 a 0,07 mg/kg IV (máx 5 mg). Siempre precedido de Atropina. Miastenia: 15 a 150 mg/día VO.'
        },
        pediatric: {
          pt: 'Reversão BNM: 0,05 mg/kg IV associado a Atropina.',
          es: 'Reversión BNM: 0,05 mg/kg IV asociado a Atropina.'
        }
      },
      administration: { pt: ['IV lento em 1 a 2 minutos.', 'É REGRA ANESTÉSICA MUNDIAL: A neostigmina venosa NUNCA deve ser infundida sozinha. Deve ser acompanhada de ATROPINA (0,015 mg/kg) na mesma seringa ou instantes antes, para evitar Parada Cardíaca.'], es: ['IV lento en 1 a 2 minutos.', 'ES REGLA ANESTÉSICA MUNDIAL: La neostigmina venosa NUNCA debe ser infundida sola. Debe ser acompañada de ATROPINA (0,015 mg/kg) en la misma jeringa o instantes antes, para evitar Paro Cardíaco.'] },
      renalAdjustment: { required: true, message: { pt: 'Sua meia-vida aumenta substancialmente na DRC. Reduzir dose para evitar bloqueio excessivo tardio.', es: 'Su vida media aumenta sustancialmente en ERC. Reducir dosis para evitar bloqueo excesivo tardío.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste estrito.', es: 'Sin necesidad de ajuste estricto.' } },
      commonAdverseEffects: { pt: ['Sialorreia massiva (muita saliva) e aumento das secreções brônquicas', 'Cólicas abdominais e náuseas', 'Fasciculações'], es: ['Sialorrea masiva (mucha saliva) y aumento de secreciones bronquiales', 'Cólicos abdominales y náuseas', 'Fasciculaciones'] },
      dangerousAdverseEffects: { pt: ['Bradicardia profunda e Parada em Assistolia (se feita sem Atropina)', 'Broncoespasmo severo (crise asmática induzida)'], es: ['Bradicardia profunda y Paro en Asistolia (si se hace sin Atropina)', 'Broncoespasmo severo (crisis asmática inducida)'] },
      contraindications: {
        absolute: { pt: ['Obstrução intestinal ou urinária mecânica', 'Peritonite aguda'], es: ['Obstrucción intestinal o urinaria mecánica', 'Peritonitis aguda'] },
        relative: { pt: ['Asma brônquica (risco de broncoespasmo colinérgico)', 'Bradicardia basal severa'], es: ['Asma bronquial (riesgo de broncoespasmo colinérgico)', 'Bradicardia basal severa'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'NÃO FUNCIONA e PROLONGA O COMA se usada contra a Succinilcolina ou quando o bloqueio adespolarizante for muito profundo (TOF = 0). O paciente deve ter pelo menos alguma tentativa de contração (respirar) antes do uso.', es: 'NO FUNCIONA y PROLONGA EL COMA si se usa contra la Succinilcolina o cuando el bloqueo no despolarizante sea muy profundo (TOF = 0). El paciente debe tener al menos algún intento de contracción (respirar) antes del uso.' }
      }
    },  // end neostigmina

/* ── ATROPINA ───────────────────────────────────────────────────────── */
    "atropina": {
      name: { pt: 'Atropina', es: 'Atropina' },
      category: 'emergencia',
      class: { pt: 'Antagonista Muscarínico / Anticolinérgico', es: 'Antagonista Muscarínico / Anticolinérgico' },
      indications: {"es":["Bradicardia sintomática con compromiso hemodinámico","Intoxicación grave por organofosforados o carbamatos con síndrome colinérgico"],"pt":["Bradicardia sintomática com comprometimento hemodinâmico","Intoxicação grave por organofosforados ou carbamatos com síndrome colinérgica"]},
      commercialNames: { br: ['Atropion', 'Sulfato de Atropina'], ar: ['Atropina'] },
      presentation: { pt: ['Ampolas IV/IM/SC 0,25 mg/mL, 0,5 mg/mL e 1 mg/mL'], es: ['Ampollas IV/IM/SC 0,25 mg/mL, 0,5 mg/mL y 1 mg/mL'] },
      mechanism: {
        pt: 'Antagonista competitivo dos receptores muscarínicos da acetilcolina. Bloqueia agressivamente o sistema nervoso parassimpático. No coração, inibe o nervo vago (nervo pneumogástrico) sobre o nodo sinusal e AV, aumentando rapidamente a frequência cardíaca. Também resseca intensamente as secreções salivares, brônquicas e reduz o tônus do trato gastrointestinal.',
        es: 'Antagonista competitivo de los receptores muscarínicos de la acetilcolina. Bloquea agresivamente el sistema nervioso parasimpático. En el corazón, inhibe el nervio vago (nervio neumogástrico) sobre el nodo sinusal y AV, aumentando rápidamente la frecuencia cardíaca. También reseca intensamente las secreciones salivales, bronquiales y reduce el tono del tracto gastrointestinal.'
      },
      dose: {
        adult: {
          pt: 'Bradicardia sintomática: 0,5 a 1 mg IV a cada 3 a 5 min (máx de 3 mg - bloqueio vagal total). Intoxicação Organofosforado: 2 a 4 mg IV (doses massivas repetidas até secar secreções pulmonares).',
          es: 'Bradicardia sintomática: 0,5 a 1 mg IV cada 3 a 5 min (máx de 3 mg - bloqueo vagal total). Intoxicación Organofosforado: 2 a 4 mg IV (dosis masivas repetidas hasta secar secreciones pulmonares).'
        },
        pediatric: {
          pt: 'Bradicardia: 0,02 mg/kg IV (dose mínima 0,1 mg para evitar bradicardia paradoxal).',
          es: 'Bradicardia: 0,02 mg/kg IV (dosis mínima 0,1 mg para evitar bradicardia paradójica).'
        }
      },
      administration: { pt: ['IV direto rápido. Em caso de parada cardíaca, pode ser administrada pelo tubo endotraqueal (dose dobrada).'], es: ['IV directo rápido. En caso de paro cardíaco, puede administrarse por tubo endotraqueal (dosis doblada).'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste na emergência.', es: 'Sin necesidad de ajuste en la emergencia.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: {"es":["Boca seca","Visión borrosa/midriasis","Taquicardia","Retención urinaria","Estreñimiento","Disminución de la sudoración"],"pt":["Boca seca","Visão borrada/midríase","Taquicardia","Retenção urinária","Constipação","Redução da sudorese"]},
      dangerousAdverseEffects: {"es":["Taquiarritmias importantes","Delirio/agitación anticolinérgica grave","Hipertermia","Isquemia miocárdica en pacientes susceptibles","Retención urinaria o íleo graves"],"pt":["Taquiarritmias importantes","Delirium/agitação anticolinérgica grave","Hipertermia","Isquemia miocárdica em pacientes suscetíveis","Retenção urinária ou íleo graves"]},
      contraindications: {"es":{"absolute":[],"relative":["En bradicardia potencialmente mortal o intoxicación colinérgica grave, las contraindicaciones relativas no deben retrasar el tratamiento salvador","Glaucoma de ángulo cerrado, obstrucción urinaria/GI y taquiarritmias requieren precaución fuera de una emergencia vital"]},"pt":{"absolute":[],"relative":["Em bradicardia com risco de vida ou intoxicação colinérgica grave, contraindicações relativas não devem atrasar tratamento salvador","Glaucoma de ângulo fechado, obstrução urinária/GI e taquiarritmias exigem cautela fora de emergência vital"]}},
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'ERRO TÉCNICO: Doses intravenosas de atropina MENORES do que 0,5 mg no adulto (ou injeção muito lenta) causam um efeito paradoxal inicial mediado por estímulo vagal central, gerando BRADICARDIA PIOR que a original. Sempre usar bolus efetivos rápidos.', es: 'ERROR TÉCNICO: Dosis intravenosas de atropina MENORES a 0,5 mg en adulto (o inyección muy lenta) causan un efecto paradójico inicial mediado por estímulo vagal central, generando BRADICARDIA PEOR que la original. Siempre usar bolos efectivos rápidos.' }
      },
      /* CALC-FARMACOS-BATCH2-CLINICAL-10-PATHOLOGY-DOSE-SAFETY-V1-B-R0 */
      clinicalEnrichment: {"commonAdverseEffects":{"es":["Boca seca","Visión borrosa/midriasis","Taquicardia","Retención urinaria","Estreñimiento","Disminución de la sudoración"],"pt":["Boca seca","Visão borrada/midríase","Taquicardia","Retenção urinária","Constipação","Redução da sudorese"]},"contraindications":{"es":{"absolute":[],"relative":["En bradicardia potencialmente mortal o intoxicación colinérgica grave, las contraindicaciones relativas no deben retrasar el tratamiento salvador","Glaucoma de ángulo cerrado, obstrucción urinaria/GI y taquiarritmias requieren precaución fuera de una emergencia vital"]},"pt":{"absolute":[],"relative":["Em bradicardia com risco de vida ou intoxicação colinérgica grave, contraindicações relativas não devem atrasar tratamento salvador","Glaucoma de ângulo fechado, obstrução urinária/GI e taquiarritmias exigem cautela fora de emergência vital"]}},"dangerousAdverseEffects":{"es":["Taquiarritmias importantes","Delirio/agitación anticolinérgica grave","Hipertermia","Isquemia miocárdica en pacientes susceptibles","Retención urinaria o íleo graves"],"pt":["Taquiarritmias importantes","Delirium/agitação anticolinérgica grave","Hipertermia","Isquemia miocárdica em pacientes suscetíveis","Retenção urinária ou íleo graves"]},"doseByIndication":{"es":[{"indication":"Bradicardia sintomática — adulto","note":"Si es ineficaz y existe inestabilidad, considerar estimulación transcutánea y/o infusión de dopamina o adrenalina según ACLS.","rows":[{"dose":"1 mg en bolo IV; repetir cada 3–5 min hasta una dosis total máxima de 3 mg.","label":"IV"}]},{"indication":"Organofosforado/carbamato — toxicidad grave","note":"El objetivo clínico incluye mejoría de broncorrea/broncoespasmo y perfusión; pueden requerirse dosis mucho mayores que en bradicardia.","rows":[{"dose":"1–2 mg IV inicialmente; duplicar la dosis cada 5 min hasta lograr atropinización clínica.","label":"Adulto"},{"dose":"Tras el control, usar infusión titulada para mantener la atropinización según protocolo toxicológico.","label":"Mantenimiento"}]}],"pt":[{"indication":"Bradicardia sintomática — adulto","note":"Se ineficaz e houver instabilidade, considerar estimulação transcutânea e/ou infusão de dopamina ou adrenalina conforme ACLS.","rows":[{"dose":"1 mg em bolus IV; repetir a cada 3–5 min até dose total máxima de 3 mg.","label":"IV"}]},{"indication":"Organofosforado/carbamato — toxicidade grave","note":"Alvo clínico inclui melhora de broncorreia/broncoespasmo e perfusão; doses necessárias podem ser muito maiores que na bradicardia.","rows":[{"dose":"1–2 mg IV inicialmente; duplicar a dose a cada 5 min até atropinização clínica.","label":"Adulto"},{"dose":"Após controle, usar infusão titulada para manter atropinização conforme protocolo toxicológico.","label":"Manutenção"}]}]},"indications":{"es":["Bradicardia sintomática con compromiso hemodinámico","Intoxicación grave por organofosforados o carbamatos con síndrome colinérgico"],"pt":["Bradicardia sintomática com comprometimento hemodinâmico","Intoxicação grave por organofosforados ou carbamatos com síndrome colinérgica"]},"references":["AHA 2025 Adult Bradycardia With a Pulse Algorithm","AHA 2025 Special Circumstances of Resuscitation — organophosphate/carbamate poisoning"]}
    },  // end atropina

/* ── SULFATO DE MAGNÉSIO ────────────────────────────────────────────── */
    "sulfato_magnesio": {
      name: { pt: 'Sulfato de Magnésio', es: 'Sulfato de Magnesio' },
      category: 'emergencia',
      class: { pt: 'Eletrólito / Anticonvulsivante / Bloqueador de Canal de Cálcio Fisiológico', es: 'Electrolito / Anticonvulsivo / Bloqueador de Canal de Calcio Fisiológico' },
      indications: {
        pt: ['Eclâmpsia e Pré-eclâmpsia grave (Profilaxia e Tratamento de convulsões)', 'Torsades de Pointes (Arritmia ventricular)', 'Crise de asma refratária grave', 'Hipomagnesemia'],
        es: ['Eclampsia y Preeclampsia grave (Profilaxis y Tratamiento de convulsiones)', 'Torsades de Pointes (Arritmia ventricular)', 'Crisis de asma refractaria grave', 'Hipomagnesemia']
      },
      commercialNames: { br: ['Sulfato de Magnésio a 10% ou 50%'], ar: ['Sulfato de Magnesio'] },
      presentation: { pt: ['Ampolas IV 10% (100 mg/mL - 10 mL = 1g)', 'Ampolas IV/IM 50% (500 mg/mL - 10 mL = 5g)'], es: ['Ampollas IV 10% (100 mg/mL - 10 mL = 1g)', 'Ampollas IV/IM 50% (500 mg/mL - 10 mL = 5g)'] },
      mechanism: {
        pt: 'Cofator vital que bloqueia fisiologicamente os canais de cálcio. No útero, bloqueia a contração, atuando como tocolítico (retarda o parto). No SNC, antagoniza o receptor NMDA (bloqueia o glutamato excitatório), impedindo e abortando convulsões em gestantes. No pulmão e vasos sanguíneos, relaxa o músculo liso, revertendo a asma refratária e reduzindo a pressão arterial.',
        es: 'Cofactor vital que bloquea fisiológicamente los canales de calcio. En el útero, bloquea la contracción, actuando como tocolítico (retrasa el parto). En el SNC, antagoniza el receptor NMDA (bloquea el glutamato excitatorio), impidiendo y abortando convulsiones en gestantes. En pulmón y vasos sanguíneos, relaja el músculo liso, revirtiendo el asma refractaria y reduciendo la presión arterial.'
      },
      dose: {
        adult: {
          pt: 'Eclâmpsia (Esquema Pritchard): Ataque de 4g IV (em 15 min) + 10g IM profundo. Manutenção 5g IM a cada 4h. Torsades de Pointes / Asma: Bolus IV de 1 a 2 g em 5 a 15 min.',
          es: 'Eclampsia (Esquema Pritchard): Ataque de 4g IV (en 15 min) + 10g IM profundo. Mantenimiento 5g IM cada 4h. Torsades de Pointes / Asma: Bolo IV de 1 a 2 g en 5 a 15 min.'
        },
        pediatric: {
          pt: 'Asma severa: 25 a 50 mg/kg IV (máx 2g) correndo em 20 a 30 minutos.',
          es: 'Asma severa: 25 a 50 mg/kg IV (máx 2g) pasando en 20 a 30 minutos.'
        }
      },
      administration: { pt: ['A formulação a 50% é extremamente concentrada. Para uso IV, deve ser obrigatoriamente diluída (em SF ou SG). Uso direto da a 50% só é permitido via Intramuscular Profunda.'], es: ['La formulación al 50% es extremadamente concentrada. Para uso IV, debe ser obligatoriamente diluida (en SF o SG). Uso directo del 50% solo está permitido vía Intramuscular Profunda.'] },
      renalAdjustment: { required: true, message: { pt: 'Risco de hipermagnesemia letal em insuficiência renal. A excreção é puramente renal. Reduzir a dose em DRC severa.', es: 'Riesgo de hipermagnesemia letal en insuficiencia renal. La excreción es puramente renal. Reducir la dosis en ERC severa.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Ondas de calor intensas (Flushing) no bolus IV', 'Sudorese e letargia', 'Fraqueza muscular leve'], es: ['Oleadas de calor intensas (Flushing) en el bolo IV', 'Sudoración y letargo', 'Debilidad muscular leve'] },
      dangerousAdverseEffects: { pt: ['Depressão e Parada Respiratória (se Nível Sérico > 12 mEq/L)', 'Bloqueio cardíaco, assistolia (se Nível Sérico > 15 mEq/L)', 'Abolição severa de reflexos patelares (primeiro sinal de intoxicação)'], es: ['Depresión y Paro Respiratorio (si Nivel Sérico > 12 mEq/L)', 'Bloqueo cardíaco, asistolia (si Nivel Sérico > 15 mEq/L)', 'Abolición severa de reflejos rotulianos (primer signo de intoxicación)'] },
      contraindications: {
        absolute: { pt: ['Miastenia Gravis (desencadeia crise miastênica fatal por bloqueio colinérgico)', 'Bloqueios cardíacos avançados'], es: ['Miastenia Gravis (desencadena crisis miasténica fatal por bloqueo colinérgico)', 'Bloqueos cardíacos avanzados'] },
        relative: { pt: ['Insuficiência renal anúrica'], es: ['Insuficiencia renal anúrica'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'INTOXICAÇÃO POR MAGNÉSIO: Se a gestante perder os reflexos profundos (patelar) ou apresentar frequência respiratória < 12 ipm, SUSPENDER a infusão imediatamente. O Antídoto OBRIGATÓRIO é o Gluconato de Cálcio 10% IV (1 ampola direto).', es: 'INTOXICACIÓN POR MAGNESIO: Si la gestante pierde los reflejos profundos (rotuliano) o presenta frecuencia respiratoria < 12 rpm, SUSPENDER la infusión inmediatamente. El Antídoto OBLIGATORIO es el Gluconato de Calcio al 10% IV (1 ampolla directo).' }
      }
    },  // end sulfato_magnesio

/* ── GLUCONATO DE CÁLCIO ────────────────────────────────────────────── */
    "gluconato_calcio": {
      name: { pt: 'Gluconato de Cálcio', es: 'Gluconato de Calcio' },
      category: 'emergencia',
      class: { pt: 'Eletrólito / Estabilizador de Membrana / Antídoto', es: 'Electrolito / Estabilizador de Membrana / Antídoto' },
      indications: {
        pt: ['Estabilização miocárdica na Hipercalemia (Potássio alto) grave', 'Antídoto para intoxicação por Sulfato de Magnésio', 'Antídoto para intoxicação por Bloqueadores de Canal de Cálcio', 'Hipocalcemia sintomática aguda'],
        es: ['Estabilización miocárdica en la Hiperpotasemia (Potasio alto) grave', 'Antídoto para intoxicación por Sulfato de Magnesio', 'Antídoto para intoxicación por Bloqueadores de Canal de Calcio', 'Hipocalcemia sintomática aguda']
      },
      commercialNames: { br: ['Gluconato de Cálcio 10%'], ar: ['Gluconato de Calcio 10%'] },
      presentation: { pt: ['Ampolas IV 10% (100 mg/mL - 10 mL = 1g)'], es: ['Ampollas IV 10% (100 mg/mL - 10 mL = 1g)'] },
      mechanism: {
        pt: 'Na hipercalemia, não abaixa o nível de potássio, mas antagoniza a toxicidade do K+ nas membranas celulares do miocárdio, estabilizando o limiar de potencial de ação e prevenindo arritmias letais (fibrilação ventricular). Como reposição, fornece cálcio elementar de forma mais segura para veias periféricas do que o cloreto de cálcio.',
        es: 'En la hiperpotasemia, no baja el nivel de potasio, pero antagoniza la toxicidad del K+ en las membranas celulares del miocardio, estabilizando el umbral de potencial de acción y previniendo arritmias letales (fibrilación ventricular). Como reposición, proporciona calcio elemental de forma más segura para venas periféricas que el cloruro de calcio.'
      },
      dose: {
        adult: {
          pt: 'Hipercalemia/Intoxicações: 1 a 2 ampolas (1g a 2g) IV administradas ao longo de 5 a 10 minutos (pode ser repetido em 5-10 min se ECG não melhorar).',
          es: 'Hiperpotasemia/Intoxicaciones: 1 a 2 ampollas (1g a 2g) IV administradas a lo largo de 5 a 10 minutos (puede repetirse en 5-10 min si el ECG no mejora).'
        },
        pediatric: {
          pt: '100 a 200 mg/kg IV (1 a 2 mL/kg da solução a 10%). Máximo 2g por dose.',
          es: '100 a 200 mg/kg IV (1 a 2 mL/kg de la solución al 10%). Máximo 2g por dosis.'
        }
      },
      administration: { pt: ['Administrar IV direto lentamente (máximo 1 a 2 mL/min). A injeção rápida pode causar hipotensão, bradicardia e parada em sístole.', 'NUNCA administrar via IM ou SC (risco de necrose tecidual severa).'], es: ['Administrar IV directo lentamente (máximo 1 a 2 mL/min). La inyección rápida puede causar hipotensión, bradicardia y paro en sístole.', 'NUNCA administrar vía IM o SC (riesgo de necrosis tisular severa).'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste para doses de emergência.', es: 'Sin necesidad de ajuste para dosis de emergencia.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Ondas de calor', 'Vasodilatação periférica', 'Gosto de giz na boca'], es: ['Oleadas de calor', 'Vasodilatación periférica', 'Sabor a tiza en la boca'] },
      dangerousAdverseEffects: { pt: ['Necrose tecidual por extravasamento', 'Parada cardíaca (se injetado muito rapidamente)'], es: ['Necrosis tisular por extravasación', 'Paro cardíaco (si se inyecta muy rápidamente)'] },
      contraindications: {
        absolute: { pt: ['Fibrilação ventricular associada à toxicidade digitálica', 'Hipercalcemia ativa'], es: ['Fibrilación ventricular asociada a toxicidad digitálica', 'Hipercalcemia activa'] },
        relative: { pt: ['Uso concomitante com glicosídeos cardíacos (digoxina)'], es: ['Uso concomitante con glucósidos cardíacos (digoxina)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: '10 mL de Gluconato de Cálcio 10% fornecem apenas 90 mg de cálcio elementar. É mais seguro e menos irritante para veias periféricas do que o Cloreto de Cálcio.', es: '10 mL de Gluconato de Calcio 10% proporcionan solo 90 mg de calcio elemental. Es más seguro y menos irritante para venas periféricas que el Cloruro de Calcio.' }
      }
    },  // end gluconato_calcio

/* ── CLORETO DE CÁLCIO ──────────────────────────────────────────────── */
    "cloreto_calcio": {
      name: { pt: 'Cloreto de Cálcio', es: 'Cloruro de Calcio' },
      category: 'emergencia',
      class: { pt: 'Eletrólito / Inotrópico', es: 'Electrolito / Inotrópico' },
      indications: {
        pt: ['Parada Cardíaca (PCR) associada a hipercalemia, hipocalcemia ou hipermagnesemia', 'Choque vasoplégico pós-circulação extracorpórea (Cirurgia Cardíaca)', 'Intoxicação maciça por bloqueadores de canal de cálcio'],
        es: ['Paro Cardíaco (RCP) asociada a hiperpotasemia, hipocalcemia o hipermagnesemia', 'Choque vasopléjico pos-circulación extracorpórea (Cirugía Cardíaca)', 'Intoxicación masiva por bloqueadores de canal de calcio']
      },
      commercialNames: { br: ['Cloreto de Cálcio 10%'], ar: ['Cloruro de Calcio 10%'] },
      presentation: { pt: ['Ampolas IV 10% (100 mg/mL - 10 mL = 1g)'], es: ['Ampollas IV 10% (100 mg/mL - 10 mL = 1g)'] },
      mechanism: {
        pt: 'Fornece cálcio iônico de forma IMEDIATA. Ao contrário do gluconato (que requer passagem pelo fígado para liberar todo o cálcio), o cloreto de cálcio fornece 3 VEZES MAIS cálcio elementar por ampola (270 mg vs 90 mg do gluconato). Age aumentando a força de contração miocárdica (inotrópico positivo) e restaurando o limiar de excitabilidade cardíaca em PCR.',
        es: 'Proporciona calcio iónico de forma INMEDIATA. A diferencia del gluconato (que requiere paso por el hígado para liberar todo el calcio), el cloruro de calcio proporciona 3 VECES MÁS calcio elemental por ampolla (270 mg vs 90 mg del gluconato). Actúa aumentando la fuerza de contracción miocárdica (inotrópico positivo) y restaurando el umbral de excitabilidad cardíaca en RCP.'
      },
      dose: {
        adult: {
          pt: 'Na PCR ou estado crítico de emergência extrema: 0,5 a 1 g IV (5 a 10 mL da ampola 10%) em bolus rápido.',
          es: 'En RCP o estado crítico de emergencia extrema: 0,5 a 1 g IV (5 a 10 mL de la ampolla 10%) en bolo rápido.'
        },
        pediatric: {
          pt: 'PCR: 20 mg/kg (0,2 mL/kg) IV direto. Máximo 1g.',
          es: 'RCP: 20 mg/kg (0,2 mL/kg) IV directo. Máximo 1g.'
        }
      },
      administration: { pt: ['EXTREMAMENTE IRRITANTE PARA AS VEIAS. O uso DEVE preferencialmente ser feito em Acesso Venoso Central. Se feito em veia periférica durante a PCR e houver extravasamento, causará necrose tecidual e esfacelamento de tecidos (necessitando amputação/debridamento).'], es: ['EXTREMAMENTE IRRITANTE PARA LAS VENAS. El uso DEBE preferentemente hacerse en Acceso Venoso Central. Si se hace en vena periférica durante RCP y hay extravasación, causará necrosis tisular y desprendimiento de tejidos (necesitando amputación/desbridamiento).'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste na emergência.', es: 'Sin necesidad de ajuste en la emergencia.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Bradicardia (se injeção excessivamente rápida no paciente acordado)'], es: ['Bradicardia (si inyección excesivamente rápida en el paciente despierto)'] },
      dangerousAdverseEffects: { pt: ['Necrose isquêmica extensa por extravasamento (dano tecidual catastrófico)', 'Fibrilação ventricular (raro)'], es: ['Necrosis isquémica extensa por extravasación (daño tisular catastrófico)', 'Fibrilación ventricular (raro)'] },
      contraindications: {
        absolute: { pt: ['Intoxicação digitálica grave'], es: ['Intoxicación digitálica grave'] },
        relative: { pt: ['Ausência de acesso venoso central calibroso (quando paciente acordado e estável, usar Gluconato)'], es: ['Ausencia de acceso venoso central de gran calibre (cuando el paciente está despierto y estable, usar Gluconato)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'Na prática da UTI: Se paciente em Parada Cardíaca -> CLORETO. Se paciente acordado hipercalêmico no PS -> GLUCONATO.', es: 'En la práctica de UCI: Si paciente en Paro Cardíaco -> CLORURO. Si paciente despierto hiperpotasémico en Urgencias -> GLUCONATO.' }
      }
    },  // end cloreto_calcio

/* ── BICARBONATO DE SÓDIO ───────────────────────────────────────────── */
    "bicarbonato_sodio": {
      name: { pt: 'Bicarbonato de Sódio', es: 'Bicarbonato de Sodio' },
      category: 'emergencia',
      class: { pt: 'Agente Alcalinizante / Eletrólito', es: 'Agente Alcalinizante / Electrolito' },
      indications: {
        pt: ['Intoxicação por Antidepressivos Tricíclicos (alarga QRS)', 'Acidose metabólica severa com hipercalemia', 'Alcalinização da urina (intoxicação por salicilatos)', 'Parada Cardíaca prolongada (uso de exceção baseada em gasometria)'],
        es: ['Intoxicación por Antidepresivos Tricíclicos (ensancha QRS)', 'Acidosis metabólica severa con hiperpotasemia', 'Alcalinización de la orina (intoxicación por salicilatos)', 'Paro Cardíaco prolongado (uso de excepción basada en gasometría)']
      },
      commercialNames: { br: ['Bicarbonato de Sódio 8,4% (1mEq/mL)'], ar: ['Bicarbonato de Sodio 8,4%'] },
      presentation: { pt: ['Ampolas IV 8,4% (1 mEq/mL - 10 mL ou frascos 250 mL)'], es: ['Ampollas IV 8,4% (1 mEq/mL - 10 mL o viales 250 mL)'] },
      mechanism: {
        pt: 'Age como tampão sistêmico imediato, combinando-se com os íons hidrogênio (H+) para formar ácido carbônico, que se dissocia em água e CO2. Na intoxicação por tricíclicos, o sódio da fórmula sobrepuja o bloqueio dos canais rápidos de sódio cardíacos e a alcalemia favorece a forma não ionizada da droga, estreitando o QRS e prevenindo arritmias ventriculares.',
        es: 'Actúa como tampón sistémico inmediato, combinándose con los iones hidrógeno (H+) para formar ácido carbónico, que se disocia en agua y CO2. En intoxicación por tricíclicos, el sodio de la fórmula supera el bloqueo de los canales rápidos de sodio cardíacos y la alcalemia favorece la forma no ionizada de la droga, estrechando el QRS y previniendo arritmias ventriculares.'
      },
      dose: {
        adult: {
          pt: 'Intoxicação por Tricíclicos: 1 a 2 mEq/kg IV em bolus rápido (1 a 2 mL/kg da solução a 8,4%). Acidose grave: Reposição baseada na fórmula do Déficit de Base (BE x Peso x 0,3).',
          es: 'Intoxicación por Tricíclicos: 1 a 2 mEq/kg IV en bolo rápido (1 a 2 mL/kg de la solución al 8,4%). Acidosis grave: Reposición basada en la fórmula del Déficit de Base (BE x Peso x 0,3).'
        },
        pediatric: {
          pt: '1 mEq/kg IV lento. Em neonatos, DEVE-SE usar a formulação pediátrica diluída (4,2%) para evitar hemorragia intraventricular.',
          es: '1 mEq/kg IV lento. En neonatos, SE DEBE usar la formulación pediátrica diluida (4,2%) para evitar hemorragia intraventricular.'
        }
      },
      administration: { pt: ['A injeção IV rápida só é indicada na Parada Cardíaca ou nas arritmias por Tricíclicos. Nos demais casos de acidose, a infusão deve ser gotejada lentamente.', 'O paciente DEVE estar sendo ventilado adequadamente, pois o bicarbonato gera excesso de CO2, que precisa ser exalado pelo pulmão.'], es: ['La inyección IV rápida solo está indicada en Paro Cardíaco o en arritmias por Tricíclicos. En los demás casos de acidosis, la infusión debe gotear lentamente.', 'El paciente DEBE estar siendo ventilado adecuadamente, ya que el bicarbonato genera exceso de CO2, que necesita ser exhalado por el pulmón.'] },
      renalAdjustment: { required: false, message: { pt: 'Pilar do tratamento na hipercalemia da insuficiência renal aguda.', es: 'Pilar del tratamiento en hiperpotasemia de la insuficiencia renal aguda.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Aumento transitório de CO2 no sangue', 'Sobrecarga de volume e sódio'], es: ['Aumento transitorio de CO2 en la sangre', 'Sobrecarga de volumen y sodio'] },
      dangerousAdverseEffects: { pt: ['Alcalose metabólica iatrogênica grave', 'Hipocalcemia aguda tetânica (o pH alcalino faz o cálcio se ligar massivamente à albumina)', 'Hemorragia intracraniana (em injeção rápida hiperosmolar em bebês)'], es: ['Alcalosis metabólica iatrogénica grave', 'Hipocalcemia aguda tetánica (el pH alcalino hace que el calcio se una masivamente a la albúmina)', 'Hemorragia intracraneal (en inyección rápida hiperosmolar en bebés)'] },
      contraindications: {
        absolute: { pt: ['Alcalose metabólica prévia', 'Hipocalcemia sintomática não corrigida', 'Edema Agudo de Pulmão (pela sobrecarga de sal)'], es: ['Alcalosis metabólica previa', 'Hipocalcemia sintomática no corregida', 'Edema Agudo de Pulmón (por sobrecarga de sal)'] },
        relative: { pt: ['Ventilação ineficaz/Asma grave (incapacidade de expelir o CO2 gerado)'], es: ['Ventilación ineficaz/Asma grave (incapacidad de expeler el CO2 generado)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'Não possui mais indicação na ressuscitação cardiopulmonar (RCP) de rotina! O uso rotineiro em PCR piora o desfecho neurológico. Usar apenas se PCR for decorrente de intoxicação por tricíclicos, hipercalemia prévia severa ou acidose lática preexistente.', es: '¡Ya no posee indicación en la reanimación cardiopulmonar (RCP) de rutina! El uso rutinario en RCP empeora el desenlace neurológico. Usar solo si RCP es por intoxicación por tricíclicos, hiperpotasemia previa severa o acidosis láctica preexistente.' }
      }
    },  // end bicarbonato_sodio

/* ── CLORETO DE POTÁSSIO ────────────────────────────────────────────── */
    "cloreto_potassio": {
      name: { pt: 'Cloreto de Potássio (KCl)', es: 'Cloruro de Potasio (KCl)' },
      category: 'emergencia',
      class: { pt: 'Eletrólito intracelular vital', es: 'Electrolito intracelular vital' },
      indications: {
        pt: ['Tratamento da hipocalemia moderada a severa', 'Reposição contínua na Cetoacidose Diabética (junto com a insulina)', 'Correção de arritmias induzidas por hipocalemia ou intoxicação digitálica'],
        es: ['Tratamiento de la hipopotasemia moderada a severa', 'Reposición continua en Cetoacidosis Diabética (junto con la insulina)', 'Corrección de arritmias inducidas por hipopotasemia o intoxicación digitálica']
      },
      commercialNames: { br: ['KCl 10%', 'KCl 19,1%'], ar: ['Cloruro de Potasio'] },
      presentation: { pt: ['Ampolas IV 10% (1,34 mEq/mL)', 'Ampolas IV 19,1% (2,5 mEq/mL - Mais comum no BR)'], es: ['Ampollas IV 10% (1,34 mEq/mL)', 'Ampollas IV 19,1% (2,5 mEq/mL)'] },
      mechanism: {
        pt: 'Reposição direta do principal cátion intracelular. O potássio é fundamental para a condução do impulso nervoso, contração do músculo cardíaco, liso e esquelético, e manutenção do potencial de repouso celular normal.',
        es: 'Reposición directa del principal catión intracelular. El potasio es fundamental para la conducción del impulso nervioso, contracción del músculo cardíaco, liso y esquelético, y mantenimiento del potencial de reposo celular normal.'
      },
      dose: {
        adult: {
          pt: 'Depende estritamente do nível sérico de K+. Reposição empírica IV: 10 a 20 mEq por HORA. (Ex: 1 ampola de KCl 19,1% tem ~25 mEq). Máximo absoluto: 40 mEq/hora em UTI.',
          es: 'Depende estrictamente del nivel sérico de K+. Reposición empírica IV: 10 a 20 mEq por HORA. (Ej: 1 ampolla de KCl 19,1% tiene ~25 mEq). Máximo absoluto: 40 mEq/hora en UCI.'
        },
        pediatric: {
          pt: '0,5 a 1 mEq/kg infundidos em 1 a 2 horas. Máximo 20 mEq por dose.',
          es: '0,5 a 1 mEq/kg infundidos en 1 a 2 horas. Máximo 20 mEq por dosis.'
        }
      },
      administration: { pt: ['A INFUSÃO RÁPIDA (BOLUS IV DIRETO) É LETAL. Causa parada cardíaca em assistolia irreversível.', 'VEIA PERIFÉRICA: Diluir no máximo 40 a 60 mEq em 1 Litro de SF/SG. Infundir máximo 10 mEq/hora (acima disso queima as veias e causa flebite severa).', 'VEIA CENTRAL: Pode-se concentrar mais e infundir até 20 a 40 mEq/hora sob monitorização por ECG obrigatória.'], es: ['LA INFUSIÓN RÁPIDA (BOLO IV DIRECTO) ES LETAL. Causa paro cardíaco en asistolia irreversible.', 'VENA PERIFÉRICA: Diluir máximo 40 a 60 mEq en 1 Litro de SF/SG. Infundir máximo 10 mEq/hora (por encima de eso quema las venas y causa flebitis severa).', 'VENA CENTRAL: Se puede concentrar más e infundir hasta 20 a 40 mEq/hora bajo monitorización por ECG obligatoria.'] },
      renalAdjustment: { required: true, message: { pt: 'Na Doença Renal Crônica, reduzir drasticamente a reposição (o potássio não será excretado). Evitar exceto se documentadamente baixo e sintomático.', es: 'En Enfermedad Renal Crónica, reducir drásticamente la reposición (el potasio no será excretado). Evitar excepto si documentadamente bajo y sintomático.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Em cirróticos graves, manter níveis ideais de K+ (hipocalemia piora encefalopatia).', es: 'En cirróticos graves, mantener niveles ideales de K+ (la hipopotasemia empeora encefalopatía).' } },
      commonAdverseEffects: { pt: ['Flebite e Dor intensa no membro ao infundir perifericamente (necessário reduzir a velocidade da bomba)'], es: ['Flebitis y Dolor intenso en el miembro al infundir periféricamente (necesario reducir velocidad de bomba)'] },
      dangerousAdverseEffects: { pt: ['Hipercalemia iatrogênica', 'Bloqueio Atrioventricular, Fibrilação Ventricular e Assistolia'], es: ['Hiperpotasemia iatrogénica', 'Bloqueo Auriculoventricular, Fibrilación Ventricular y Asistolia'] },
      contraindications: {
        absolute: { pt: ['Infusão em bolus sem diluição (INJEÇÃO LETAL)', 'Hipercalemia', 'Insuficiência renal grave anúrica com potássio basal normal'], es: ['Infusión en bolo sin diluir (INYECCIÓN LETAL)', 'Hiperpotasemia', 'Insuficiencia renal grave anúrica con potasio basal normal'] },
        relative: { pt: ['Uso associado com diuréticos poupadores de potássio (Espironolactona) sem exame de laboratório recente'], es: ['Uso asociado con diuréticos ahorradores de potasio (Espironolactona) sin examen de laboratorio reciente'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'DROGA MAIS MORTAL DA UTI POR ERRO DE ENFERMAGEM. A ampola de KCl NUNCA pode estar ao lado da ampola de SF 0,9% não identificada. Se injetada na seringa diretamente na veia do paciente, causará morte em 30 segundos.', es: 'DROGA MÁS MORTAL DE LA UCI POR ERROR DE ENFERMERÍA. La ampolla de KCl NUNCA puede estar al lado de la ampolla de SF 0,9% no identificada. Si se inyecta en jeringa directamente en la vena, causará muerte en 30 segundos.' }
      }
    },  // end cloreto_potassio

/* ── CLORETO DE SÓDIO HIPERTÔNICO 3% ────────────────────────────────── */
    "sodio_hipertonico": {
      name: { pt: 'Cloreto de Sódio Hipertônico (NaCl 3% / Salina Hipertônica)', es: 'Cloruro de Sodio Hipertónico (NaCl 3% / Solución Salina Hipertónica)' },
      category: 'emergencia',
      class: { pt: 'Agente Osmótico / Eletrólito Concentrado', es: 'Agente Osmótico / Electrolito Concentrado' },
      indications: {
        pt: ['Hiponatremia aguda grave e SINTOMÁTICA (ex: convulsões ou coma hiponatrêmico)', 'Hipertensão Intracraniana (Edema cerebral por Trauma Cranioencefálico - TCE)'],
        es: ['Hiponatremia aguda grave y SINTOMÁTICA (ej: convulsiones o coma hiponatrémico)', 'Hipertensión Intracraneal (Edema cerebral por Traumatismo Craneoencefálico - TCE)']
      },
      commercialNames: { br: ['Solução Salina Hipertônica 3% (ou feita via ampolas a 20%)'], ar: ['Solución Salina Hipertónica'] },
      presentation: { pt: ['Bolsas de NaCl 3%', 'Preparação manual na UTI: Juntar 890 mL de SG 5% ou água destilada + 110 mL de NaCl 20% (cada ampola tem 10mL).'], es: ['Bolsas de NaCl 3%', 'Preparación manual en UCI: Juntar 890 mL de SG 5% o agua destilada + 110 mL de NaCl 20% (cada ampolla tiene 10mL).'] },
      mechanism: {
        pt: 'Solução com altíssima força osmótica. Na hipertensão intracraniana, atua como um ímã osmótico impermeável à barreira hematoencefálica intacta, "puxando" o excesso de água do parênquima cerebral para dentro dos vasos sanguíneos, reduzindo o edema. Na hiponatremia, repõe ativamente os níveis de sódio sérico para prevenir convulsões e herniação cerebral.',
        es: 'Solución con altísima fuerza osmótica. En la hipertensión intracraneal, actúa como un imán osmótico impermeable a la barrera hematoencefálica intacta, "tirando" el exceso de agua del parénquima cerebral hacia dentro de los vasos sanguíneos, reduciendo el edema. En hiponatremia, repone activamente los niveles de sodio sérico para prevenir convulsiones y herniación cerebral.'
      },
      dose: {
        adult: {
          pt: 'Hiponatremia sintomática (Convulsão): Bolus IV de 100 a 150 mL (em 10-15 min). Repetir até melhora neurológica. Hipertensão Intracraniana: Bolus IV de 250 mL seguido de alvo laboratorial de Na+ (145-155 mEq/L).',
          es: 'Hiponatremia sintomática (Convulsión): Bolo IV de 100 a 150 mL (en 10-15 min). Repetir hasta mejora neurológica. Hipertensión Intracraneal: Bolo IV de 250 mL seguido de objetivo de Na+ (145-155 mEq/L).'
        },
        pediatric: {
          pt: 'Hiponatremia com convulsão: Bolus de 3 a 5 mL/kg IV (ao longo de 10 a 20 min).',
          es: 'Hiponatremia con convulsión: Bolo de 3 a 5 mL/kg IV (a lo largo de 10 a 20 min).'
        }
      },
      administration: { pt: ['Preferencialmente via Acesso Venoso Central (altamente irritante para veias periféricas).', 'Uso OBRIGATÓRIO de Bomba de Infusão para garantir controle rígido de MLs infundidos.'], es: ['Preferentemente vía Acceso Venoso Central (altamente irritante para venas periféricas).', 'Uso OBLIGATORIO de Bomba de Infusión para garantizar control rígido de MLs infundidos.'] },
      renalAdjustment: { required: true, message: { pt: 'Risco de sobrecarga hídrica massiva em anúricos. Fazer com extrema cautela guiado por sinais clínicos e eletrólitos.', es: 'Riesgo de sobrecarga hídrica masiva en anúricos. Hacer con extrema precaución guiado por signos clínicos y electrolitos.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Cuidado em cirróticos com ascite grave/edema maciço.', es: 'Cuidado en cirróticos con ascitis grave/edema masivo.' } },
      commonAdverseEffects: { pt: ['Hipernatremia e Hiperosmolaridade esperadas', 'Flebite periférica', 'Acidose hiperclorêmica (o Cloreto acompanha o sódio na solução)'], es: ['Hipernatremia e Hiperosmolaridad esperadas', 'Flebitis periférica', 'Acidosis hiperclorémica (el Cloruro acompaña al sodio en la solución)'] },
      dangerousAdverseEffects: { pt: ['SÍNDROME DE DESMIELINIZAÇÃO OSMÓTICA (Mielinólise Pontina Central)', 'Sobrecarga de volume e Edema Agudo de Pulmão', 'Lesão Renal Aguda'], es: ['SÍNDROME DE DESMIELINIZACIÓN OSMÓTICA (Mielinólisis Pontina Central)', 'Sobrecarga de volumen y Edema Agudo de Pulmón', 'Lesión Renal Aguda'] },
      contraindications: {
        absolute: { pt: ['Hiponatremia crônica assintomática (RISCO ABSOLUTO DE MORTE NEUROLÓGICA SE CORRIGIDA COM 3%)'], es: ['Hiponatremia crónica asintomática (RIESGO ABSOLUTO DE MUERTE NEUROLÓGICA SI SE CORRIGE CON 3%)'] },
        relative: { pt: ['Edema pulmonar não cardiogênico / Insuficiência cardíaca descompensada'], es: ['Edema pulmonar no cardiogénico / Insuficiencia cardíaca descompensada'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A CORREÇÃO DO SÓDIO TEM LIMITE DIÁRIO. Se a hiponatremia do paciente for CRÔNICA, a reposição rápida causará a Síndrome de Desmielinização Osmótica (tetraplegia irreversível, coma e morte dias após). Regra de Ouro: não ultrapassar o aumento de 8 a 10 mEq/L de sódio nas primeiras 24 horas.', es: 'LA CORRECCIÓN DEL SODIO TIENE LÍMITE DIARIO. Si la hiponatremia del paciente es CRÓNICA, la reposición rápida causará el Síndrome de Desmielinización Osmótica (tetraplejía irreversible, coma y muerte días después). Regla de Oro: no superar el aumento de 8 a 10 mEq/L de sodio en las primeras 24 horas.' }
      }
    },  // end sodio_hipertonico

/* ── GLICOSE HIPERTÔNICA ────────────────────────────────────────────── */
    "glicose_hipertonica": {
      name: { pt: 'Glicose Hipertônica 50%', es: 'Glucosa Hipertónica 50%' },
      category: 'emergencia',
      class: { pt: 'Suplemento Calórico / Antídoto', es: 'Suplemento Calórico / Antídoto' },
      indications: {
        pt: ['Coma hipoglicêmico ou hipoglicemia sintomática grave', 'Tratamento de hipercalemia (em conjunto com Insulina Regular)'],
        es: ['Coma hipoglucémico o hipoglucemia sintomática grave', 'Tratamiento de hiperpotasemia (en conjunto con Insulina Regular)']
      },
      commercialNames: { br: ['Glicose 50%'], ar: ['Glucosa al 50%'] },
      presentation: { pt: ['Ampolas IV 50% (10 mL ou 20 mL)'], es: ['Ampollas IV 50% (10 mL o 20 mL)'] },
      mechanism: {
        pt: 'Fornece D-glicose (dextrose) de forma imediata à corrente sanguínea, restaurando os níveis de energia do sistema nervoso central, que depende quase exclusivamente da glicose cerebral para manter a consciência e o metabolismo basal. Na hipercalemia, a glicose hipertônica serve apenas como "veículo" de segurança para permitir a injeção de Insulina (que empurra o potássio para dentro da célula) sem causar choque hipoglicêmico.',
        es: 'Proporciona D-glucosa (dextrosa) de forma inmediata al torrente sanguíneo, restaurando los niveles de energía del sistema nervioso central, que depende casi exclusivamente de la glucosa cerebral para mantener la consciencia y el metabolismo basal. En hiperpotasemia, la glucosa hipertónica sirve solo como "vehículo" de seguridad para permitir la inyección de Insulina (que empuja el potasio hacia dentro de la célula) sin causar choque hipoglucémico.'
      },
      dose: {
        adult: {
          pt: 'Hipoglicemia grave: Bolus IV de 40 a 50 mL de Glicose 50% (ou 4 a 5 ampolas de 10mL). Polarizante (K+): 50g de Glicose + 10 UI Insulina Regular.',
          es: 'Hipoglucemia grave: Bolo IV de 40 a 50 mL de Glucosa 50% (o 4 a 5 ampollas de 10mL). Polarizante (K+): 50g de Glucosa + 10 UI Insulina Regular.'
        },
        pediatric: {
          pt: 'Evitar 50%. Preferir Glicose 25% (2 a 4 mL/kg) ou Glicose 10% (5 a 10 mL/kg) IV lento.',
          es: 'Evitar 50%. Preferir Glucosa 25% (2 a 4 mL/kg) o Glucosa 10% (5 a 10 mL/kg) IV lento.'
        }
      },
      administration: { pt: ['Administrar IV direto lentamente.', 'A solução a 50% é extremamente irritante e hiperosmolar. Se extravasar, causa necrose isquêmica tecidual.'], es: ['Administrar IV directo lentamente.', 'La solución al 50% es extremadamente irritante e hiperosmolar. Si se extravasa, causa necrosis isquémica tisular.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Pilar do resgate em cirróticos que perdem a capacidade de gliconeogênese.', es: 'Pilar del rescate en cirróticos que pierden la capacidad de gluconeogénesis.' } },
      commonAdverseEffects: { pt: ['Dor e flebite no local da injeção', 'Hiperglicemia rebote'], es: ['Dolor y flebitis en el sitio de inyección', 'Hiperglucemia rebote'] },
      dangerousAdverseEffects: { pt: ['Síndrome de Wernicke (se não precedida por tiamina em desnutridos)', 'Necrose tecidual severa por extravasamento', 'Hipocalemia iatrogênica (o pico de insulina endógena gerado empurra o K+ para as células)'], es: ['Síndrome de Wernicke (si no es precedida por tiamina en desnutridos)', 'Necrosis tisular severa por extravasación', 'Hipopotasemia iatrogénica (el pico de insulina endógena generado empuja el K+ a las células)'] },
      contraindications: {
        absolute: { pt: ['Hemorragia intracraniana aguda ou isquemia aguda com hiperglicemia prévia (a glicose agrava a lesão cerebral focal)'], es: ['Hemorragia intracraneal aguda o isquemia aguda con hiperglucemia previa (la glucosa agrava la lesión cerebral focal)'] },
        relative: { pt: ['Delirium tremens sem administração de Tiamina conjunta'], es: ['Delirium tremens sin administración de Tiamina conjunta'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'Não confie na Glicose Hipertônica para tratar hipoglicemias causadas por Sulfonilureias de meia-vida longa. A injeção vai acordar o paciente, mas a alta carga de açúcar fará o pâncreas liberar ainda mais insulina, gerando um coma rebote pior horas depois. Internar o paciente com soro glicosado contínuo.', es: 'No confíe en la Glucosa Hipertónica para tratar hipoglucemias causadas por Sulfonilureas de vida media larga. La inyección despertará al paciente, pero la alta carga de azúcar hará que el páncreas libere aún más insulina, generando un coma rebote peor horas después. Internar al paciente con suero glucosado continuo.' }
      }
    },  // end glicose_hipertonica

/* ── TIAMINA (VITAMINA B1) ──────────────────────────────────────────── */
    "tiamina": {
      name: { pt: 'Tiamina (Vitamina B1)', es: 'Tiamina (Vitamina B1)' },
      category: 'emergencia',
      class: { pt: 'Vitamina Hidrossolúvel / Coenzima Metabólica', es: 'Vitamina Hidrosoluble / Coenzima Metabólica' },
      indications: {
        pt: ['Prevenção e Tratamento da Encefalopatia de Wernicke e Síndrome de Korsakoff (Alcoólatras)', 'Beribéri', 'Acidose lática não explicada em nutrição parenteral total'],
        es: ['Prevención y Tratamiento de la Encefalopatía de Wernicke y Síndrome de Korsakoff (Alcohólicos)', 'Beriberi', 'Acidosis láctica no explicada en nutrición parenteral total']
      },
      commercialNames: { br: ['Benerva'], ar: ['Benerva'] },
      presentation: { pt: ['Comprimidos 300 mg', 'Ampolas IV/IM 100 mg/mL ou 300 mg/mL'], es: ['Comprimidos 300 mg', 'Ampollas IV/IM 100 mg/mL o 300 mg/mL'] },
      mechanism: {
        pt: 'A tiamina é o cofator da enzima piruvato desidrogenase. É vital para a entrada da glicose no Ciclo de Krebs para gerar ATP. Se o paciente (desnutrido/alcoólatra) receber glicose sem ter Tiamina no corpo, a glicose não consegue entrar no ciclo mitocondrial e é fermentada ativamente em Ácido Lático, causando destruição fulminante dos neurônios (Wernicke-Korsakoff).',
        es: 'La tiamina es el cofactor de la enzima piruvato deshidrogenasa. Es vital para la entrada de la glucosa en el Ciclo de Krebs para generar ATP. Si el paciente (desnutrido/alcohólico) recibe glucosa sin tener Tiamina en el cuerpo, la glucosa no logra entrar en el ciclo mitocondrial y es fermentada activamente en Ácido Láctico, causando destrucción fulminante de las neuronas (Wernicke-Korsakoff).'
      },
      dose: {
        adult: {
          pt: 'Wernicke instalado ou suspeito: 500 mg IV 3x/dia por 2 a 3 dias, seguido de 250 mg IV/IM por 3 a 5 dias. Profilaxia (Alcoolismo em abstinência): 100 a 300 mg/dia.',
          es: 'Wernicke instalado o sospechoso: 500 mg IV 3 veces/día por 2 a 3 días, seguido de 250 mg IV/IM por 3 a 5 días. Profilaxis (Alcoholismo en abstinencia): 100 a 300 mg/día.'
        },
        pediatric: {
          pt: 'Beribéri: 10 a 25 mg IV/IM (Doses raras, guiadas por especialistas).',
          es: 'Beriberi: 10 a 25 mg IV/IM (Dosis raras, guiadas por especialistas).'
        }
      },
      administration: { pt: ['Injeção IV lenta (diluída em 50 a 100 mL de SF0,9% em 30 min). Bolus rápido aumenta o risco de choque anafilático.'], es: ['Inyección IV lenta (diluida en 50 a 100 mL de SF0,9% en 30 min). Bolo rápido aumenta el riesgo de choque anafiláctico.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste. Fundamental na cirrose alcoólica.', es: 'Sin necesidad de ajuste. Fundamental en la cirrosis alcohólica.' } },
      commonAdverseEffects: { pt: ['Dor e irritação no local da injeção IM', 'Sensação de calor/Formigamento'], es: ['Dolor e irritación en el lugar de inyección IM', 'Sensación de calor/Hormigueo'] },
      dangerousAdverseEffects: { pt: ['Anafilaxia / Colapso cardiovascular (muito raro, geralmente associado ao veículo da ampola em injeções em bolus diretas)'], es: ['Anafilaxia / Colapso cardiovascular (muy raro, generalmente asociado al vehículo de la ampolla en inyecciones en bolo directas)'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade grave comprovada'], es: ['Hipersensibilidad grave comprobada'] },
        relative: { pt: ['Nenhuma no cenário de salvamento neurológico.'], es: ['Ninguna en el escenario de salvamento neurológico.'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'REGRA DE OURO DA EMERGÊNCIA: A Tiamina DEVE OBRIGATORIAMENTE SER ADMINISTRADA ANTES ou simultaneamente a qualquer infusão de Glicose em pacientes desnutridos ou com abuso crônico de álcool.', es: 'REGLA DE ORO DE LA EMERGENCIA: La Tiamina DEBE OBLIGATORIAMENTE ADMINISTRARSE ANTES o simultáneamente a cualquier infusión de Glucosa en pacientes desnutridos o con abuso crónico de alcohol.' }
      }
    },  // end tiamina

/* ── FENTANIL ───────────────────────────────────────────────────────── */
    "fentanil": {
      "name": {
        "pt": "Fentanil",
        "es": "Fentanilo"
      },
      "category": "emergencia",
      "class": {
        "pt": "Agonista opioide μ potente",
        "es": "Agonista opioide μ potente"
      },
      "indications": {
        "pt": [
          "Componente analgésico de anestesia geral",
          "Analgesia perioperatória sob monitorização e suporte de via aérea"
        ],
        "es": [
          "Componente analgésico de anestesia general",
          "Analgesia perioperatoria bajo monitorización y soporte de vía aérea"
        ]
      },
      "commercialNames": {
        "br": [
          "Fentanil"
        ],
        "ar": [
          "Fentanilo"
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
        "pt": "Agonista de receptores opioides μ. Produz analgesia e sedação, mas também depressão respiratória dose-dependente, bradicardia e rigidez muscular, especialmente com doses altas ou administração rápida.",
        "es": "Agonista de receptores opioides μ. Produce analgesia y sedación, pero también depresión respiratoria dependiente de la dosis, bradicardia y rigidez muscular, especialmente con dosis altas o administración rápida."
      },
      "dose": {
        "adult": {
          "pt": "Rotulagem anestésica: dose baixa 2 mcg/kg; dose moderada 2–20 mcg/kg; doses maiores 20–50 mcg/kg em anestesia selecionada. Manutenção: 25–100 mcg IV/IM conforme resposta e contexto anestésico.",
          "es": "Rotulado anestésico: dosis baja 2 mcg/kg; dosis moderada 2–20 mcg/kg; dosis mayores 20–50 mcg/kg en anestesia seleccionada. Mantenimiento: 25–100 mcg IV/IM según respuesta y contexto anestésico."
        },
        "pediatric": {
          "pt": "Segurança e eficácia não estabelecidas em menores de 2 anos na rotulagem dos EUA; em ≥2 anos, dose deve seguir contexto anestésico/protocolo pediátrico e titulação clínica.",
          "es": "Seguridad y eficacia no establecidas en menores de 2 años en el rotulado de EE. UU.; en ≥2 años, la dosis debe seguir el contexto anestésico/protocolo pediátrico y titulación clínica."
        }
      },
      "administration": {
        "pt": [
          "IV ou IM; titular lentamente ao efeito",
          "Monitorização contínua de ventilação, oxigenação e hemodinâmica; equipamento de via aérea e naloxona devem estar disponíveis"
        ],
        "es": [
          "IV o IM; titular lentamente al efecto",
          "Monitorización continua de ventilación, oxigenación y hemodinámica; equipo de vía aérea y naloxona deben estar disponibles"
        ]
      },
      "renalAdjustment": {
        "required": true,
        "message": {
          "pt": "Usar cautela e titular a partir de doses menores em disfunção renal; não há fator fixo universal de redução.",
          "es": "Usar precaución y titular desde dosis menores en disfunción renal; no existe un factor fijo universal de reducción."
        }
      },
      "hepaticAdjustment": {
        "required": true,
        "message": {
          "pt": "Metabolismo hepático predominante; usar cautela e titular lentamente na disfunção hepática.",
          "es": "Metabolismo hepático predominante; usar precaución y titular lentamente en disfunción hepática."
        }
      },
      "commonAdverseEffects": {
        "pt": [
          "Náusea",
          "Sedação",
          "Bradicardia",
          "Prurido"
        ],
        "es": [
          "Náuseas",
          "Sedación",
          "Bradicardia",
          "Prurito"
        ]
      },
      "dangerousAdverseEffects": {
        "pt": [
          "Depressão respiratória/apneia",
          "Rigidez muscular",
          "Hipotensão grave"
        ],
        "es": [
          "Depresión respiratoria/apnea",
          "Rigidez muscular",
          "Hipotensión grave"
        ]
      },
      "contraindications": {
        "absolute": {
          "pt": [
            "Hipersensibilidade ao fentanil"
          ],
          "es": [
            "Hipersensibilidad al fentanilo"
          ]
        },
        "relative": {
          "pt": [
            "Doença pulmonar grave, idosos/frágeis, uso concomitante de depressores do SNC"
          ],
          "es": [
            "Enfermedad pulmonar grave, adultos mayores/frágiles, uso concomitante de depresores del SNC"
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
          "pt": "Depressão respiratória potencialmente fatal. Benzodiazepínicos/outros depressores do SNC e inibidores de CYP3A4 podem aumentar ou prolongar toxicidade.",
          "es": "Depresión respiratoria potencialmente fatal. Benzodiazepinas/otros depresores del SNC e inhibidores de CYP3A4 pueden aumentar o prolongar la toxicidad."
        }
      }
    },  // end fentanil

/* ── REMIFENTANIL ───────────────────────────────────────────────────── */
    "remifentanil": {
      "name": {
        "pt": "Remifentanil",
        "es": "Remifentanilo"
      },
      "category": "emergencia",
      "class": {
        "pt": "Agonista opioide μ ultracurto",
        "es": "Agonista opioide μ ultracorto"
      },
      "indications": {
        "pt": [
          "Analgesia durante indução e manutenção de anestesia geral",
          "Analgesia no pós-operatório imediato sob supervisão direta de anestesia",
          "Componente analgésico de monitored anesthesia care em adultos"
        ],
        "es": [
          "Analgesia durante inducción y mantenimiento de anestesia general",
          "Analgesia en el posoperatorio inmediato bajo supervisión directa de anestesia",
          "Componente analgésico de monitored anesthesia care en adultos"
        ]
      },
      "commercialNames": {
        "br": [
          "Remifentanil"
        ],
        "ar": [
          "Remifentanilo"
        ]
      },
      "presentation": {
        "pt": [
          "Frasco liofilizado 1 mg, 2 mg ou 5 mg para reconstituição IV"
        ],
        "es": [
          "Vial liofilizado de 1 mg, 2 mg o 5 mg para reconstitución IV"
        ]
      },
      "mechanism": {
        "pt": "Agonista μ metabolizado rapidamente por esterases inespecíficas do sangue e tecidos. O efeito desaparece em poucos minutos após reduzir ou interromper a infusão, portanto analgesia de transição deve ser planejada antes do término.",
        "es": "Agonista μ metabolizado rápidamente por esterasas inespecíficas de sangre y tejidos. El efecto desaparece en pocos minutos tras reducir o suspender la infusión, por lo que debe planificarse analgesia de transición antes de finalizar."
      },
      "dose": {
        "adult": {
          "pt": "Indução: infusão 0,5–1 mcg/kg/min; pode-se usar bolus 1 mcg/kg em 30–60 s em situações selecionadas. Manutenção: tipicamente 0,05–2 mcg/kg/min conforme anestésico concomitante. Pós-operatório imediato: iniciar 0,1 mcg/kg/min e titular 0,025–0,2.",
          "es": "Inducción: infusión 0,5–1 mcg/kg/min; puede usarse bolo de 1 mcg/kg en 30–60 s en situaciones seleccionadas. Mantenimiento: típicamente 0,05–2 mcg/kg/min según anestésico concomitante. Posoperatorio inmediato: iniciar 0,1 mcg/kg/min y titular 0,025–0,2."
        },
        "pediatric": {
          "pt": "Doses pediátricas variam com idade e procedimento; a rotulagem inclui esquemas de anestesia geral em pacientes pediátricos, mas não há estudo para analgesia pós-operatória nem monitored anesthesia care pediátrica.",
          "es": "Las dosis pediátricas varían con edad y procedimiento; el rotulado incluye esquemas de anestesia general en pacientes pediátricos, pero no hay estudio para analgesia posoperatoria ni monitored anesthesia care pediátrica."
        }
      },
      "administration": {
        "pt": [
          "Somente IV após reconstituição/diluição conforme produto",
          "Não administrar como infusão prolongada fora de ambiente com pessoal de anestesia e suporte de ventilação"
        ],
        "es": [
          "Solo IV tras reconstitución/dilución según producto",
          "No administrar como infusión prolongada fuera de un entorno con personal de anestesia y soporte ventilatorio"
        ]
      },
      "renalAdjustment": {
        "required": false,
        "message": {
          "pt": "A depuração do remifentanil é amplamente independente da função renal; metabólito inativo pode acumular sem prolongar de forma relevante o efeito opioide em uso habitual.",
          "es": "La depuración de remifentanilo es ampliamente independiente de la función renal; el metabolito inactivo puede acumularse sin prolongar de forma relevante el efecto opioide en el uso habitual."
        }
      },
      "hepaticAdjustment": {
        "required": false,
        "message": {
          "pt": "Não há ajuste fixo rotineiro apenas por função hepática; titular ao efeito e à resposta hemodinâmica.",
          "es": "No existe un ajuste fijo rutinario solo por función hepática; titular al efecto y a la respuesta hemodinámica."
        }
      },
      "commonAdverseEffects": {
        "pt": [
          "Hipotensão",
          "Bradicardia",
          "Náusea"
        ],
        "es": [
          "Hipotensión",
          "Bradicardia",
          "Náuseas"
        ]
      },
      "dangerousAdverseEffects": {
        "pt": [
          "Apneia/depressão respiratória",
          "Rigidez muscular",
          "Bradicardia grave"
        ],
        "es": [
          "Apnea/depresión respiratoria",
          "Rigidez muscular",
          "Bradicardia grave"
        ]
      },
      "contraindications": {
        "absolute": {
          "pt": [
            "Administração epidural ou intratecal da formulação que contém glicina",
            "Hipersensibilidade ao remifentanil"
          ],
          "es": [
            "Administración epidural o intratecal de la formulación que contiene glicina",
            "Hipersensibilidad al remifentanilo"
          ]
        },
        "relative": {
          "pt": [
            "Pacientes frágeis/idosos, associação com outros depressores do SNC"
          ],
          "es": [
            "Pacientes frágiles/adultos mayores, asociación con otros depresores del SNC"
          ]
        }
      },
      "safetyFlags": {
        "bleedingRisk": false,
        "renalHighRisk": false,
        "hepaticCaution": false,
        "antidoteAvailable": true,
        "highAlertMedication": true,
        "warning": {
          "pt": "O efeito analgésico termina rapidamente após suspensão. Planejar analgesia de transição antes de desligar a infusão.",
          "es": "El efecto analgésico termina rápidamente tras la suspensión. Planificar analgesia de transición antes de detener la infusión."
        }
      }
    },  // end remifentanil

/* ── MORFINA ────────────────────────────────────────────────────────── */
    "morfina": {
      "name": {
        "pt": "Morfina",
        "es": "Morfina"
      },
      "category": "emergencia",
      "class": {
        "pt": "Agonista opioide μ",
        "es": "Agonista opioide μ"
      },
      "indications": {
        "pt": [
          "Dor intensa que requer opioide e não responde adequadamente a alternativas",
          "Infusão IV contínua em adultos e pediatria quando clinicamente indicada"
        ],
        "es": [
          "Dolor intenso que requiere opioide y no responde adecuadamente a alternativas",
          "Infusión IV continua en adultos y pediatría cuando está clínicamente indicada"
        ]
      },
      "commercialNames": {
        "br": [
          "Morfina"
        ],
        "ar": [
          "Morfina"
        ]
      },
      "presentation": {
        "pt": [
          "Solução injetável; concentrações variam por fabricante"
        ],
        "es": [
          "Solución inyectable; las concentraciones varían según fabricante"
        ]
      },
      "mechanism": {
        "pt": "Agonista opioide μ. A morfina é glucuronidada a M3G e M6G; a insuficiência renal aumenta exposição e pode favorecer acúmulo dos metabólitos.",
        "es": "Agonista opioide μ. La morfina se glucuronida a M3G y M6G; la insuficiencia renal aumenta la exposición y puede favorecer la acumulación de metabolitos."
      },
      "dose": {
        "adult": {
          "pt": "Infusão IV contínua: iniciar 0,02–0,1 mg/kg/h e titular. Em pacientes sem tolerância a opioides, a rotulagem limita a taxa inicial máxima a 10 mg/h.",
          "es": "Infusión IV continua: iniciar 0,02–0,1 mg/kg/h y titular. En pacientes sin tolerancia a opioides, el rotulado limita la velocidad inicial máxima a 10 mg/h."
        },
        "pediatric": {
          "pt": "1–<17 anos: se <50 kg, iniciar 0,02–0,03 mg/kg/h; ≥50 kg: 1,5 mg/h. <1 ano: iniciar 0,005–0,01 mg/kg/h, com monitorização cardiorrespiratória rigorosa.",
          "es": "1–<17 años: si <50 kg, iniciar 0,02–0,03 mg/kg/h; ≥50 kg: 1,5 mg/h. <1 año: iniciar 0,005–0,01 mg/kg/h, con monitorización cardiorrespiratoria estricta."
        }
      },
      "administration": {
        "pt": [
          "Diluir conforme produto/protocolo para infusão contínua",
          "Titular à analgesia com monitorização de sedação, FR, SpO₂, PA e sinais de toxicidade"
        ],
        "es": [
          "Diluir según producto/protocolo para infusión continua",
          "Titular a la analgesia con monitorización de sedación, FR, SpO₂, PA y signos de toxicidad"
        ]
      },
      "renalAdjustment": {
        "required": true,
        "message": {
          "pt": "Na insuficiência renal, iniciar com dose menor que a usual e titular lentamente; M3G/M6G podem acumular.",
          "es": "En insuficiencia renal, iniciar con una dosis menor que la habitual y titular lentamente; M3G/M6G pueden acumularse."
        }
      },
      "hepaticAdjustment": {
        "required": true,
        "message": {
          "pt": "Usar dose inicial menor e titular lentamente na disfunção hepática, monitorando sedação e depressão respiratória.",
          "es": "Usar una dosis inicial menor y titular lentamente en disfunción hepática, monitorizando sedación y depresión respiratoria."
        }
      },
      "commonAdverseEffects": {
        "pt": [
          "Náusea",
          "Constipação",
          "Sedação",
          "Prurido"
        ],
        "es": [
          "Náuseas",
          "Estreñimiento",
          "Sedación",
          "Prurito"
        ]
      },
      "dangerousAdverseEffects": {
        "pt": [
          "Depressão respiratória",
          "Hipotensão grave",
          "Íleo"
        ],
        "es": [
          "Depresión respiratoria",
          "Hipotensión grave",
          "Íleo"
        ]
      },
      "contraindications": {
        "absolute": {
          "pt": [
            "Depressão respiratória significativa",
            "Asma aguda/grave sem monitorização adequada",
            "Obstrução gastrointestinal conhecida ou suspeita"
          ],
          "es": [
            "Depresión respiratoria significativa",
            "Asma aguda/grave sin monitorización adecuada",
            "Obstrucción gastrointestinal conocida o sospechada"
          ]
        },
        "relative": {
          "pt": [
            "Insuficiência renal, hepática, idosos ou frágeis"
          ],
          "es": [
            "Insuficiencia renal, hepática, adultos mayores o frágiles"
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
          "pt": "Insuficiência renal altera a farmacocinética e favorece acúmulo de M3G/M6G; reduzir a dose inicial e titular lentamente.",
          "es": "La insuficiencia renal altera la farmacocinética y favorece la acumulación de M3G/M6G; reducir la dosis inicial y titular lentamente."
        }
      }
    },  // end morfina

/* ── FLUMAZENIL ─────────────────────────────────────────────────────── */
    "flumazenil": {
      "name": {
        "pt": "Flumazenil",
        "es": "Flumazenilo"
      },
      "category": "emergencia",
      "class": {
        "pt": "Antagonista do sítio benzodiazepínico do receptor GABA-A",
        "es": "Antagonista del sitio benzodiazepínico del receptor GABA-A"
      },
      "indications": {
        "pt": [
          "Reversão completa ou parcial de sedação por benzodiazepínicos",
          "Manejo selecionado de overdose conhecida ou suspeita por benzodiazepínico"
        ],
        "es": [
          "Reversión completa o parcial de sedación por benzodiazepinas",
          "Manejo seleccionado de sobredosis conocida o sospechada por benzodiazepinas"
        ]
      },
      "commercialNames": {
        "br": [
          "Flumazenil"
        ],
        "ar": [
          "Flumazenilo"
        ]
      },
      "presentation": {
        "pt": [
          "Solução injetável IV, tipicamente 0,1 mg/mL"
        ],
        "es": [
          "Solución inyectable IV, típicamente 0,1 mg/mL"
        ]
      },
      "mechanism": {
        "pt": "Antagonista competitivo no sítio benzodiazepínico do receptor GABA-A. Reverte sedação por benzodiazepínicos, mas pode precipitar abstinência e convulsões.",
        "es": "Antagonista competitivo en el sitio benzodiazepínico del receptor GABA-A. Revierte sedación por benzodiazepinas, pero puede precipitar abstinencia y convulsiones."
      },
      "dose": {
        "adult": {
          "pt": "Reversão de sedação: 0,2 mg IV em 15 s; repetir 0,2 mg em intervalos de 60 s até máximo total 1 mg. Overdose: 0,2 mg IV em 30 s, depois 0,3 mg; seguir com 0,5 mg a cada 1 min até 3 mg; raramente até 5 mg.",
          "es": "Reversión de sedación: 0,2 mg IV en 15 s; repetir 0,2 mg a intervalos de 60 s hasta máximo total 1 mg. Sobredosis: 0,2 mg IV en 30 s, luego 0,3 mg; seguir con 0,5 mg cada 1 min hasta 3 mg; raramente hasta 5 mg."
        },
        "pediatric": {
          "pt": "Uso pediátrico depende da indicação e experiência específica; não extrapolar automaticamente o esquema de overdose adulto.",
          "es": "El uso pediátrico depende de la indicación y experiencia específica; no extrapolar automáticamente el esquema de sobredosis del adulto."
        }
      },
      "administration": {
        "pt": [
          "Somente IV",
          "Garantir via aérea, ventilação e acesso IV antes da administração",
          "Monitorar re-sedação e convulsões"
        ],
        "es": [
          "Solo IV",
          "Asegurar vía aérea, ventilación y acceso IV antes de administrar",
          "Monitorizar resedación y convulsiones"
        ]
      },
      "renalAdjustment": {
        "required": false,
        "message": {
          "pt": "Não há ajuste renal rotineiro estabelecido.",
          "es": "No existe ajuste renal rutinario establecido."
        }
      },
      "hepaticAdjustment": {
        "required": true,
        "message": {
          "pt": "Clearance pode diminuir em disfunção hepática; titular cuidadosamente e considerar menor necessidade de redose.",
          "es": "El clearance puede disminuir en disfunción hepática; titular cuidadosamente y considerar menor necesidad de redosis."
        }
      },
      "commonAdverseEffects": {
        "pt": [
          "Náusea",
          "Tontura",
          "Agitação",
          "Cefaleia"
        ],
        "es": [
          "Náuseas",
          "Mareo",
          "Agitación",
          "Cefalea"
        ]
      },
      "dangerousAdverseEffects": {
        "pt": [
          "Convulsões",
          "Abstinência aguda de benzodiazepínicos",
          "Arritmias em overdose mista"
        ],
        "es": [
          "Convulsiones",
          "Abstinencia aguda de benzodiazepinas",
          "Arritmias en sobredosis mixta"
        ]
      },
      "contraindications": {
        "absolute": {
          "pt": [
            "Benzodiazepínico usado para controlar condição potencialmente fatal, como status epilepticus",
            "Sinais de intoxicação grave por antidepressivo tricíclico"
          ],
          "es": [
            "Benzodiazepina usada para controlar una condición potencialmente mortal, como status epilepticus",
            "Signos de intoxicación grave por antidepresivo tricíclico"
          ]
        },
        "relative": {
          "pt": [
            "Uso crônico/dependência de benzodiazepínicos, epilepsia, overdose mista ou agente desconhecido"
          ],
          "es": [
            "Uso crónico/dependencia de benzodiazepinas, epilepsia, sobredosis mixta o agente desconocido"
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
          "pt": "Não substituir suporte de via aérea. O risco de convulsão é maior em dependência crônica de benzodiazepínicos e overdose por antidepressivos cíclicos/mista.",
          "es": "No sustituye el soporte de vía aérea. El riesgo de convulsión es mayor en dependencia crónica de benzodiazepinas y sobredosis por antidepresivos cíclicos/mixta."
        }
      }
    },

/* ── ACETILCISTEÍNA IV ──────────────────────────────────────────────── */
    "acetilcisteina": {
      name: { pt: 'Acetilcisteína IV (NAC)', es: 'Acetilcisteína IV (NAC)' },
      category: 'emergencia',
      class: { pt: 'Antídoto / Doador de Sulfidrila', es: 'Antídoto / Donador de Sulfhidrilo' },
      indications: {
        pt: ['Intoxicação aguda por Paracetamol (Acetaminofeno)', 'Prevenção de nefropatia induzida por contraste (uso controverso atual)', 'Falência hepática fulminante não-paracetamol (suporte)'],
        es: ['Intoxicación aguda por Paracetamol (Acetaminofén)', 'Prevención de nefropatía inducida por contraste (uso controvertido actual)', 'Fallo hepático fulminante no paracetamol (soporte)']
      },
      commercialNames: { br: ['Fluimucil IV', 'Acetilcisteína Injetável'], ar: ['Acemuk IV'] },
      presentation: { pt: ['Ampolas IV 100 mg/mL (3 mL = 300mg) ou frascos 20%'], es: ['Ampollas IV 100 mg/mL (3 mL = 300mg) o viales 20%'] },
      mechanism: {
        pt: 'Na overdose de paracetamol, o fígado esgota seus estoques de glutationa, levando ao acúmulo do metabólito altamente tóxico NAPQI, que destrói o fígado. A Acetilcisteína (NAC) atua como um substituto direto da glutationa, doando grupamentos sulfidrila (-SH) que se ligam ao NAPQI, neutralizando-o e permitindo sua excreção segura pela urina. Salva o fígado se iniciada em até 8 horas da ingestão.',
        es: 'En la sobredosis de paracetamol, el hígado agota sus reservas de glutatión, llevando a la acumulación del metabolito altamente tóxico NAPQI, que destruye el hígado. La Acetilcisteína (NAC) actúa como un sustituto directo del glutatión, donando grupos sulfhidrilo (-SH) que se unen al NAPQI, neutralizándolo y permitiendo su excreción segura por la orina. Salva el hígado si se inicia hasta 8 horas tras la ingesta.'
      },
      dose: {
        adult: {
          pt: 'Protocolo de 21 horas IV: Dose de Ataque: 150 mg/kg em 1 hora. Segunda dose: 50 mg/kg em 4 horas. Terceira dose: 100 mg/kg em 16 horas. Total: 300 mg/kg.',
          es: 'Protocolo de 21 horas IV: Dosis de Ataque: 150 mg/kg en 1 hora. Segunda dosis: 50 mg/kg en 4 horas. Tercera dosis: 100 mg/kg en 16 horas. Total: 300 mg/kg.'
        },
        pediatric: {
          pt: 'Mesmas dosagens em mg/kg do adulto, mas atentar rigidamente ao volume de diluente para não causar sobrecarga hídrica.',
          es: 'Mismas dosis en mg/kg que el adulto, pero atentar rígidamente al volumen de diluyente para no causar sobrecarga hídrica.'
        }
      },
      administration: { pt: ['Obrigatória diluição em SG 5% ou SF 0,9%.', 'A infusão da primeira dose (em 1h) requer muita vigilância pela alta taxa de anafilaxia química.'], es: ['Obligatoria dilución en SG 5% o SF 0,9%.', 'La infusión de la primera dosis (en 1h) requiere mucha vigilancia por la alta tasa de anafilaxia química.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem ajuste.', es: 'Sin ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'O alvo primário é o fígado. Não necessita ajuste.', es: 'El objetivo primario es el hígado. No necesita ajuste.' } },
      commonAdverseEffects: { pt: ['Flushing (vermelhidão facial intensa)', 'Erupção cutânea / Prurido', 'Vômitos'], es: ['Flushing (enrojecimiento facial intenso)', 'Erupción cutánea / Prurito', 'Vómitos'] },
      dangerousAdverseEffects: { pt: ['Reação anafilactoide severa (broncoespasmo, hipotensão e angioedema) ocorrendo quase sempre na primeira hora de infusão rápida.'], es: ['Reacción anafilactoide severa (broncoespasmo, hipotensión y angioedema) ocurriendo casi siempre en la primera hora de infusión rápida.'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade documentada extrema (anafilaxia prévia)'], es: ['Hipersensibilidad documentada extrema (anafilaxia previa)'] },
        relative: { pt: ['Asma brônquica (risco de broncoespasmo induzido por liberação de histamina inespecífica)'], es: ['Asma bronquial (riesgo de broncoespasmo inducido por liberación de histamina inespecífica)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'Se o paciente desenvolver anafilaxia (rash, chiado) na dose de ataque, PARE a infusão, administre anti-histamínicos (Difenidramina) e retome a infusão de NAC de forma muito mais lenta. O antídoto não pode ser abandonado, pois a falência hepática matará o paciente.', es: 'Si el paciente desarrolla anafilaxia (rash, sibilancias) en la dosis de ataque, DETENGA la infusión, administre antihistamínicos y retome la infusión de NAC de forma mucho más lenta. El antídoto no puede ser abandonado, pues el fallo hepático matará al paciente.' }
      }
    },

/* ── FOMEPIZOL ──────────────────────────────────────────────────────── */
    "fomepizol": {
      name: { pt: 'Fomepizol', es: 'Fomepizol' },
      category: 'emergencia',
      class: { pt: 'Antídoto / Inibidor da Álcool Desidrogenase', es: 'Antídoto / Inhibidor de la Alcohol Deshidrogenasa' },
      indications: {
        pt: ['Intoxicação confirmada ou suspeita por Etilenoglicol (líquido de arrefecimento de motores/anticongelante)', 'Intoxicação por Metanol (álcool de madeira / bebidas falsificadas)'],
        es: ['Intoxicación confirmada o sospechosa por Etilenglicol (líquido anticongelante)', 'Intoxicación por Metanol (alcohol de madera / bebidas falsificadas)']
      },
      commercialNames: { br: ['Antizol (Importação/Difícil Acesso no BR)'], ar: ['Antizol'] },
      presentation: { pt: ['Frascos-ampola 1 g/mL (1,5 mL)'], es: ['Viales 1 g/mL (1,5 mL)'] },
      mechanism: {
        pt: 'O metanol e o etilenoglicol não são altamente tóxicos por si sós, mas a enzima hepática Álcool Desidrogenase (ADH) os transforma em metabólitos letais (ácido fórmico, que causa cegueira, e ácido oxálico, que causa falência renal cristalina). O Fomepizol bloqueia a enzima ADH competitivamente, com uma afinidade 8.000 vezes maior que a do metanol. Assim, os tóxicos param de ser metabolizados e são excretados inofensivamente pelos rins.',
        es: 'El metanol y el etilenglicol no son altamente tóxicos por sí solos, pero la enzima hepática Alcohol Deshidrogenasa (ADH) los transforma en metabolitos letales (ácido fórmico, que causa ceguera, y ácido oxálico, que causa falla renal cristalina). El Fomepizol bloquea la enzima ADH competitivamente, con una afinidad 8.000 veces mayor que la del metanol. Así, los tóxicos dejan de metabolizarse y son excretados inofensivamente por los riñones.'
      },
      dose: {
        adult: {
          pt: 'Dose de ataque: 15 mg/kg IV (diluída em 100 mL de SF/SG, correr em 30 min). Manutenção: 10 mg/kg IV a cada 12 horas por 4 doses.',
          es: 'Dosis de ataque: 15 mg/kg IV (diluida en 100 mL de SF/SG, pasar en 30 min). Mantenimiento: 10 mg/kg IV cada 12 horas por 4 dosis.'
        },
        pediatric: {
          pt: 'Doses idênticas ao adulto (15 mg/kg ataque).',
          es: 'Dosis idénticas al adulto (15 mg/kg ataque).'
        }
      },
      administration: { pt: ['Injeção IV lenta ao longo de 30 minutos.', 'NUNCA administrar em bolus não diluído (causa necrose).'], es: ['Inyección IV lenta a lo largo de 30 minutos.', 'NUNCA administrar en bolo no diluido (causa necrosis).'] },
      renalAdjustment: { required: true, message: { pt: 'Fomepizol é dialisável. Se o paciente necessitar de hemodiálise para limpar a intoxicação, as doses do antídoto devem ser dadas a cada 4 horas durante a máquina.', es: 'Fomepizol es dializable. Si el paciente necesita hemodiálisis para limpiar la intoxicación, las dosis del antídoto deben darse cada 4 horas durante la máquina.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste inicial.', es: 'Sin necesidad de ajuste inicial.' } },
      commonAdverseEffects: { pt: ['Cefaleia', 'Náuseas e alteração do paladar', 'Tontura e sonolência'], es: ['Cefalea', 'Náuseas y alteración del gusto', 'Mareo y somnolencia'] },
      dangerousAdverseEffects: { pt: ['Convulsões (raras)', 'Eosinofilia e bradicardia severa'], es: ['Convulsiones (raras)', 'Eosinofilia y bradicardia severa'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade grave ao fomepizol ou a pirazóis'], es: ['Hipersensibilidad grave al fomepizol o a pirazoles'] },
        relative: { pt: ['Gestação (avaliar risco-benefício, pois a intoxicação é letal para mãe e feto)'], es: ['Gestación (evaluar riesgo-beneficio, pues la intoxicación es letal para madre y feto)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'Substituiu o uso de injeções de Etanol (álcool absoluto) nas UTIs devido à sua imensa superioridade de segurança (o Etanol embriaga e seda o paciente, exigindo intubação). Contudo, devido ao alto custo e falta crônica em hospitais periféricos, o Etanol IV ou VO (Cachaça pura via SNG) ainda é o improviso salva-vidas na ausência do Fomepizol.', es: 'Sustituyó el uso de inyecciones de Etanol (alcohol absoluto) en las UCIs debido a su inmensa superioridad de seguridad (el Etanol embriaga y seda al paciente, exigiendo intubación). Sin embargo, por el alto costo y falta crónica, el Etanol IV o VO aún es la improvisación salvavidas en ausencia del Fomepizol.' }
      }
    },

/* ── PRALIDOXIMA ────────────────────────────────────────────────────── */
    "pralidoxima": {
      name: { pt: 'Pralidoxima', es: 'Pralidoxima' },
      category: 'emergencia',
      class: { pt: 'Antídoto / Reativador de Colinesterase', es: 'Antídoto / Reactivador de Colinesterasa' },
      indications: {
        pt: ['Intoxicação severa por defensivos agrícolas Organofosforados (Pesticidas/Inseticidas)', 'Tratamento de envenenamento por gases de guerra neurotóxicos (Sarin, VX)'],
        es: ['Intoxicación severa por pesticidas Organofosforados (Insecticidas)', 'Tratamiento de envenenamiento por gases de guerra neurotóxicos (Sarín, VX)']
      },
      commercialNames: { br: ['Contration (Raro)'], ar: ['Contration'] },
      presentation: { pt: ['Ampolas liofilizadas 1 g'], es: ['Ampollas liofilizadas 1 g'] },
      mechanism: {
        pt: 'Os organofosforados ligam-se covalentemente à enzima Acetilcolinesterase, destruindo-a e causando paralisia por excesso de acetilcolina. A pralidoxima age como uma "chave de fenda" molecular: se administrada cedo (antes da enzima sofrer o fenômeno irreversível chamado "aging" ou envelhecimento, que ocorre em cerca de 24 a 48h), a pralidoxima se liga ao fosfato do veneno e o "arranca" da enzima, ressuscitando a colinesterase nativa e revertendo a paralisia respiratória muscular.',
        es: 'Los organofosforados se unen covalentemente a la enzima Acetilcolinesterasa, destruyéndola y causando parálisis por exceso de acetilcolina. La pralidoxima actúa como un "destornillador" molecular: si se administra temprano (antes de que la enzima sufra el fenómeno irreversible llamado "aging", que ocurre en unas 24-48h), se une al fosfato del veneno y lo "arranca" de la enzima, resucitando la colinesterasa nativa y revirtiendo la parálisis respiratoria.'
      },
      dose: {
        adult: {
          pt: 'Bolus IV: 1 a 2 g diluídos em 100 mL de SF (correr em 15 a 30 min). Manutenção: Infusão contínua de 8 mg/kg/h ou repetir 1g a cada 6h.',
          es: 'Bolo IV: 1 a 2 g diluidos en 100 mL de SF (pasar en 15 a 30 min). Mantenimiento: Infusión continua de 8 mg/kg/h o repetir 1g cada 6h.'
        },
        pediatric: {
          pt: '20 a 50 mg/kg IV (máx 2 g/dose).',
          es: '20 a 50 mg/kg IV (máx 2 g/dosis).'
        }
      },
      administration: { pt: ['Sempre diluída e administrada lentamente. Bolus rápido causa laringoespasmo e taquicardia severa.', 'DEVE ser administrada junto ou LOGO APÓS a Atropina.'], es: ['Siempre diluida y administrada lentamente. Bolo rápido causa laringoespasmo y taquicardia severa.', 'DEBE ser administrada junto o JUSTO DESPUÉS de la Atropina.'] },
      renalAdjustment: { required: true, message: { pt: 'Depurada puramente pelos rins. Reduzir dose em DRC aguda ou crônica.', es: 'Depurada puramente por los riñones. Reducir dosis en ERC aguda o crónica.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Visão turva e diplopia', 'Tontura e Cefaleia', 'Taquicardia paradoxal'], es: ['Visión borrosa y diplopía', 'Mareo y Cefalea', 'Taquicardia paradójica'] },
      dangerousAdverseEffects: { pt: ['Laringoespasmo e rigidez muscular', 'Parada Cardíaca (se injetado em < 5 minutos)'], es: ['Laringoespasmo y rigidez muscular', 'Paro Cardíaco (si inyectado en < 5 minutos)'] },
      contraindications: {
        absolute: { pt: ['Intoxicação por Carbamatos (Aldicarb/Chumbinho) sem evidência de organofosforado. Nos carbamatos a enzima se solta sozinha e a pralidoxima PODE PIORAR a intoxicação aumentando a toxicidade da droga.'], es: ['Intoxicación por Carbamatos (Chumbinho) sin evidencia de organofosforado. En los carbamatos la enzima se suelta sola y la pralidoxima PUEDE EMPEORAR la intoxicación.'] },
        relative: { pt: ['Miastenia Gravis'], es: ['Miastenia Gravis'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'REGRA CADEADO: NUNCA inicie Pralidoxima antes de "atropinizar" completamente o paciente (secar os pulmões com Atropina IV massiva). Se a pralidoxima for dada primeiro, a ativação colinérgica agravará a asfixia em segundos.', es: 'REGLA CANDADO: NUNCA inicie Pralidoxima antes de "atropinizar" completamente al paciente (secar los pulmones con Atropina IV masiva). Si la pralidoxima se da primero, la activación colinérgica agravará la asfixia en segundos.' }
      }
    },

/* ── DEFEROXAMINA ───────────────────────────────────────────────────── */
    "deferoxamina": {
      name: { pt: 'Deferoxamina', es: 'Deferoxamina' },
      category: 'emergencia',
      class: { pt: 'Antídoto / Agente Quelante de Ferro', es: 'Antídoto / Agente Quelante de Hierro' },
      indications: {
        pt: ['Intoxicação aguda por suplementos de Ferro (pediatria e tentamen)', 'Sobrecarga crônica de ferro (Hemocromatose secundária a transfusões múltiplas)'],
        es: ['Intoxicación aguda por suplementos de Hierro (pediatría y suicidio)', 'Sobrecarga crónica de hierro (Hemocromatosis secundaria a transfusiones múltiples)']
      },
      commercialNames: { br: ['Desferal'], ar: ['Desferal'] },
      presentation: { pt: ['Frascos-ampola liofilizados 500 mg'], es: ['Viales liofilizados 500 mg'] },
      mechanism: {
        pt: 'Molécula orgânica que atua como um "ímã" implacável pelo Ferro (Fe3+). Circula no sangue e agarra íons livres de ferro no plasma e nas células (sem arrancar o ferro do centro da hemoglobina vital). Ao encapsular o ferro, forma um complexo solúvel chamado FERRIOXAMINA, que é transportado pelo sangue e excretado na urina (deixando a urina com uma cor vermelho-vinho ou alaranjada muito característica, chamada de urina Vin Rosé).',
        es: 'Molécula orgánica que actúa como un "imán" implacable por el Hierro (Fe3+). Circula en la sangre y atrapa iones libres de hierro en el plasma y en las células. Al encapsular el hierro, forma un complejo soluble llamado FERRIOXAMINA, que es transportado por la sangre y excretado en la orina (dejando la orina con un color rojo-vino muy característico).'
      },
      dose: {
        adult: {
          pt: 'Intoxicação Aguda: 15 mg/kg/HORA em infusão IV contínua. Dose máxima de 80 mg/kg em 24h.',
          es: 'Intoxicación Aguda: 15 mg/kg/HORA en infusión IV continua. Dosis máxima de 80 mg/kg en 24h.'
        },
        pediatric: {
          pt: '15 mg/kg/HORA IV. O tratamento é encerrado quando o ferro sérico cair e a urina perder a cor avermelhada.',
          es: '15 mg/kg/HORA IV. El tratamiento se encierra cuando el hierro sérico caiga y la orina pierda el color rojizo.'
        }
      },
      administration: { pt: ['Infusão IV contínua obrigatória.', 'Bolus são absolutamente contraindicados pelo risco de choque vasodilatador.'], es: ['Infusión IV continua obligatoria.', 'Bolos están absolutamente contraindicados por el riesgo de choque vasodilatador.'] },
      renalAdjustment: { required: true, message: { pt: 'O complexo quelado de ferro é 100% depurado pelos rins. Em falência renal/anúricos, o complexo acumula e a toxicidade do ferro retorna. Terapia de substituição renal pode ser necessária.', es: 'El complejo quelado de hierro es 100% depurado por los riñones. En falla renal/anúricos, el complejo se acumula y la toxicidad vuelve. Terapia de sustitución renal puede ser necesaria.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste estrito.', es: 'Sin necesidad de ajuste estricto.' } },
      commonAdverseEffects: { pt: ['Urina Vermelho-Alaranjada (Sinal terapêutico esperado)', 'Dor e eritema no local da infusão', 'Reações alérgicas'], es: ['Orina Rojo-Anaranjada (Signo terapéutico esperado)', 'Dolor y eritema en el lugar de infusión', 'Reacciones alérgicas'] },
      dangerousAdverseEffects: { pt: ['Hipotensão profunda e choque (se taxa de infusão for rápida > 15 mg/kg/h)', 'Síndrome do Desconforto Respiratório Agudo - SDRA (se a infusão for mantida por mais de 24-48 horas)'], es: ['Hipotensión profunda y choque (si tasa de infusión es rápida > 15 mg/kg/h)', 'Síndrome de Dificultad Respiratoria Aguda - SDRA (si la infusión se mantiene por más de 24-48 horas)'] },
      contraindications: {
        absolute: { pt: ['Anúria severa (insuficiência renal terminal sem diálise)'], es: ['Anuria severa (insuficiencia renal terminal sin diálisis)'] },
        relative: { pt: ['Gestação (Teratogênico em animais, porém em intoxicação grave a vida da mãe exige o tratamento)'], es: ['Gestación (Teratogénico en animales, pero en intoxicación grave la vida de la madre exige el tratamiento)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'Risco Pulmonar Crítico: O uso prolongado (> 24h ininterruptas) de deferoxamina intravenosa induz toxidade pulmonar direta (Pulmão de Choque). O tratamento ideal de desintoxicação deve ser agressivo nas primeiras horas e cessado tão logo haja melhora metabólica.', es: 'Riesgo Pulmonar Crítico: El uso prolongado (> 24h ininterrumpidas) de deferoxamina intravenosa induce toxicidad pulmonar directa (Pulmón de Choque). El tratamiento ideal de desintoxicación debe ser agresivo en las primeras horas y cesado tan pronto haya mejora metabólica.' }
      }
    },

/* ── AZUL DE METILENO ───────────────────────────────────────────────── */
    "azul_metileno": {
      name: { pt: 'Azul de Metileno', es: 'Azul de Metileno' },
      category: 'emergencia',
      class: { pt: 'Antídoto / Corante Tiazínico', es: 'Antídoto / Colorante Tiazínico' },
      indications: {
        pt: ['Meta-hemoglobinemia tóxica (ex: intoxicação por dapsona, benzocaína ou nitratos)', 'Choque vasoplégico refratário na UTI ou no pós-operatório de cirurgia cardíaca (off-label)'],
        es: ['Metahemoglobinemia tóxica (ej: intoxicación por dapsona, benzocaína o nitratos)', 'Choque vasopléjico refractario en la UCI o en el posoperatorio de cirugía cardíaca (off-label)']
      },
      commercialNames: { br: ['Azul de Metileno 1%'], ar: ['Azul de Metileno'] },
      presentation: { pt: ['Ampolas IV 1% (10 mg/mL)'], es: ['Ampollas IV 1% (10 mg/mL)'] },
      mechanism: {
        pt: 'Mecanismo duplo: 1) Na Meta-hemoglobinemia (onde o ferro do sangue oxida para Fe3+ e não solta o oxigênio), ele age como doador de elétrons junto com a enzima NADPH redutase, devolvendo o ferro à forma normal (Fe2+) e restaurando a oxigenação. 2) No Choque Vasoplégico, ele inibe diretamente a enzima Óxido Nítrico Sintase (NOS) e a Guanilato Ciclase, impedindo a produção de óxido nítrico e restaurando agressivamente o tônus dos vasos sanguíneos.',
        es: 'Mecanismo doble: 1) En la Metahemoglobinemia (donde el hierro de la sangre se oxida a Fe3+ y no suelta el oxígeno), actúa como donador de electrones junto con la enzima NADPH reductasa, devolviendo el hierro a la forma normal (Fe2+) y restaurando la oxigenación. 2) En el Choque Vasopléjico, inhibe directamente la enzima Óxido Nítrico Sintasa (NOS) y la Guanilato Ciclasa, impidiendo la producción de óxido nítrico y restaurando agresivamente el tono de los vasos sanguíneos.'
      },
      dose: {
        adult: {
          pt: 'Meta-hemoglobinemia: 1 a 2 mg/kg IV (ao longo de 5 min). Choque vasoplégico: 2 mg/kg em bolus, seguido ou não de infusão (0,25 - 2 mg/kg/h).',
          es: 'Metahemoglobinemia: 1 a 2 mg/kg IV (a lo largo de 5 min). Choque vasopléjico: 2 mg/kg en bolo, seguido o no de infusión (0,25 - 2 mg/kg/h).'
        },
        pediatric: {
          pt: '1 a 2 mg/kg IV lentamente.',
          es: '1 a 2 mg/kg IV lentamente.'
        }
      },
      administration: { pt: ['Administrar IV lento (3 a 5 minutos).', 'Lavar o acesso com SF 0,9% abundantemente (é altamente irritante). O paciente e a urina ficarão azul-esverdeados.'], es: ['Administrar IV lento (3 a 5 minutos).', 'Lavar el acceso con SF 0,9% abundantemente (es altamente irritante). El paciente y la orina quedarán azul-verdosos.'] },
      renalAdjustment: { required: true, message: { pt: 'Depurado pelos rins. Usar com muita cautela na insuficiência renal grave.', es: 'Depurado por los riñones. Usar con mucha precaución en la insuficiencia renal grave.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste estrito.', es: 'Sin necesidad de ajuste estricto.' } },
      commonAdverseEffects: { pt: ['Coloração azulada da pele, urina, fezes e mucosas', 'Falsa queda na oximetria de pulso (o corante cega o leitor do aparelho do dedo)', 'Náuseas'], es: ['Coloración azulada de la piel, orina, heces y mucosas', 'Falsa caída en la oximetría de pulso (el colorante ciega el lector del aparato del dedo)', 'Náuseas'] },
      dangerousAdverseEffects: { pt: ['Anemia hemolítica letal se dado em pacientes com deficiência da enzima G6PD', 'Síndrome Serotoninérgica (ele atua como um potente IMAO)'], es: ['Anemia hemolítica letal si se da en pacientes con deficiencia de la enzima G6PD', 'Síndrome Serotoninérgico (actúa como un potente IMAO)'] },
      contraindications: {
        absolute: { pt: ['Deficiência de Glicose-6-Fosfato Desidrogenase (G6PD) - CAUSA HEMÓLISE MACIÇA'], es: ['Deficiencia de Glucosa-6-Fosfato Deshidrogenasa (G6PD) - CAUSA HEMÓLISIS MASIVA'] },
        relative: { pt: ['Uso concomitante com inibidores de recaptação de serotonina (ISRS)'], es: ['Uso concomitante con inhibidores de recaptación de serotonina (ISRS)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'Se a oximetria do paciente cair abruptamente para 65% logo após a injeção do Azul de Metileno, NÃO se desespere. O corante azul absorve a mesma luz que o oxímetro usa para ler a hemoglobina. Fiar-se exclusivamente pela gasometria arterial.', es: 'Si la oximetría del paciente cae abruptamente al 65% justo después de la inyección del Azul de Metileno, NO se desespere. El colorante azul absorbe la misma luz que el oxímetro usa para leer la hemoglobina. Fiarse exclusivamente por la gasometría arterial.' }
      }
    },

/* ── CARVÃO ATIVADO ─────────────────────────────────────────────────── */
    "carvao_ativado": {
      name: { pt: 'Carvão Ativado', es: 'Carbón Activado' },
      category: 'emergencia',
      class: { pt: 'Antídoto Gastrointestinal / Adsorvente Universal', es: 'Antídoto Gastrointestinal / Adsorbente Universal' },
      indications: {
        pt: ['Descontaminação gastrointestinal em intoxicações orais agudas (< 1 a 2 horas da ingestão)'],
        es: ['Descontaminación gastrointestinal en intoxicaciones orales agudas (< 1 a 2 horas de la ingesta)']
      },
      commercialNames: { br: ['Carvão Ativado Pó', 'Carbomax'], ar: ['Carbón Activado'] },
      presentation: { pt: ['Pó liofilizado em frascos para suspensão (geralmente 50g)'], es: ['Polvo liofilizado en viales para suspensión (generalmente 50g)'] },
      mechanism: {
        pt: 'Pó fino superaquecido e tratado para possuir uma área de superfície de absorção monstruosa (1 grama de carvão tem a superfície de uma quadra de tênis). Ele percorre o trato gastrointestinal e liga-se quimicamente (adsorve) à esmagadora maioria dos medicamentos e toxinas orais, impedindo que passem para o sangue, sendo eliminados nas fezes.',
        es: 'Polvo fino sobrecalentado y tratado para poseer un área de superficie de absorción monstruosa (1 gramo de carbón tiene la superficie de una cancha de tenis). Recorre el tracto gastrointestinal y se une químicamente (adsorbe) a la inmensa mayoría de los medicamentos y toxinas orales, impidiendo que pasen a la sangre, siendo eliminados en las heces.'
      },
      dose: {
        adult: {
          pt: '50 a 100 gramas em dose única VO ou por Sonda Nasogástrica. Misturar com 250 a 500 mL de água pura.',
          es: '50 a 100 gramos en dosis única VO o por Sonda Nasogástrica. Mezclar con 250 a 500 mL de agua pura.'
        },
        pediatric: {
          pt: '1 a 2 g/kg (máx 50g) misturado em água.',
          es: '1 a 2 g/kg (máx 50g) mezclado en agua.'
        }
      },
      administration: { pt: ['Administrar por via oral (se paciente desperto e colaborativo) ou via Sonda Nasogástrica (SNG).', 'CUIDADO EXTREMO para garantir que a SNG está no estômago e não no pulmão antes de injetar.'], es: ['Administrar por vía oral (si paciente despierto y colaborativo) o vía Sonda Nasogástrica (SNG).', 'CUIDADO EXTREMO para asegurar que la SNG está en el estómago y no en el pulmón antes de inyectar.'] },
      renalAdjustment: { required: false, message: { pt: 'Não é absorvido sistemicamente. Ação puramente local no TGI.', es: 'No es absorbido sistémicamente. Acción puramente local en TGI.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Não é absorvido sistemicamente.', es: 'No es absorbido sistémicamente.' } },
      commonAdverseEffects: { pt: ['Vômitos intensos (devido ao aspecto de lama e volume de líquido ingerido)', 'Fezes negras por dias', 'Constipação transitória'], es: ['Vómitos intensos (debido al aspecto de barro y volumen de líquido ingerido)', 'Heces negras por días', 'Constipación transitoria'] },
      dangerousAdverseEffects: { pt: ['BRONCOASPIRAÇÃO FATAL (se o paciente vomitar e o carvão for para o pulmão, causa pneumonite química obstrutiva letal)', 'Obstrução intestinal'], es: ['BRONCOASPIRACIÓN FATAL (si el paciente vomita y el carbón va al pulmón, causa neumonitis química obstructiva letal)', 'Obstrucción intestinal'] },
      contraindications: {
        absolute: { pt: ['Vias aéreas desprotegidas (Paciente com RNC / Glasgow < 8 sem estar intubado)', 'Ingestão de cáusticos (ácidos/bases) ou Hidrocarbonetos (gasolina/querosene) - Risco alto de perfuração ou asfixia.', 'Íleo paralítico'], es: ['Vías respiratorias desprotegidas (Paciente con alteración del nivel de consciencia / Glasgow < 8 sin estar intubado)', 'Ingesta de cáusticos (ácidos/bases) o Hidrocarburos (gasolina/queroseno) - Riesgo alto de perforación o asfixia.', 'Íleo paralítico'] },
        relative: { pt: ['Ingestão após 2 horas (eficácia nula, exceto para drogas de liberação prolongada)'], es: ['Ingesta después de 2 horas (eficacia nula, excepto para drogas de liberación prolongada)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'MEMORIZE OS METAIS: O Carvão Ativado NÃO FUNCIONA (não gruda) em Lítio, Ferro, Chumbo e Álcool. Administrar carvão para essas intoxicações fará o paciente vomitar sem nenhum benefício desintoxicante.', es: 'MEMORICE LOS METALES: El Carbón Activado NO FUNCIONA (no se pega) en Litio, Hierro, Plomo y Alcohol. Administrar carbón para estas intoxicaciones hará al paciente vomitar sin ningún beneficio desintoxicante.' }
      }
    }, // vírgula adicionada; BUILD 346 vasopressores seguem

/* ── PROMETAZINA (FENERGAN) ─────────────────────────────────────────── */
    "prometazina": {
      "name": {
        "pt": "Prometazina",
        "es": "Prometazina"
      },
      "category": "emergencia",
      "class": {
        "pt": "Fenotiazina anti-histamínica H1 com efeitos anticolinérgicos/antieméticos",
        "es": "Fenotiazina antihistamínica H1 con efectos anticolinérgicos/antieméticos"
      },
      "indications": {
        "pt": [
          "Controle de náuseas e vômitos",
          "Prevenção/controle de náusea e vômito relacionados a anestesia/cirurgia"
        ],
        "es": [
          "Control de náuseas y vómitos",
          "Prevención/control de náusea y vómito relacionados con anestesia/cirugía"
        ]
      },
      "mechanism": {
        "pt": "Antagonismo H1 e ações anticolinérgicas/antidopaminérgicas contribuem para o efeito antiemético e sedativo.",
        "es": "El antagonismo H1 y acciones anticolinérgicas/antidopaminérgicas contribuyen al efecto antiemético y sedante."
      },
      "dose": {
        "adult": {
          "pt": "Náuseas/vômitos: 12,5–25 mg por dose; não repetir com intervalo menor que 4 horas.",
          "es": "Náuseas/vómitos: 12,5–25 mg por dosis; no repetir con intervalo menor de 4 horas."
        },
        "pediatric": {
          "pt": "Contraindicada <2 anos. Em ≥2 anos, usar a menor dose apropriada e extrema cautela por risco de depressão respiratória.",
          "es": "Contraindicada <2 años. En ≥2 años, usar la menor dosis apropiada y extrema precaución por riesgo de depresión respiratoria."
        }
      },
      "administration": {
        "pt": [
          "Via parenteral preferida: IM profunda",
          "SC e intra-arterial são contraindicadas",
          "Se IV for necessária, usar diluição/concentração e acesso venoso conforme rotulagem atual; interromper imediatamente se houver dor/queimação"
        ],
        "es": [
          "Vía parenteral preferida: IM profunda",
          "SC e intraarterial están contraindicadas",
          "Si IV es necesaria, usar dilución/concentración y acceso venoso según rotulado actual; suspender inmediatamente ante dolor/ardor"
        ]
      },
      "renalAdjustment": {
        "required": false,
        "message": {
          "pt": "Sem ajuste renal fixo rotineiro; titular clinicamente.",
          "es": "Sin ajuste renal fijo rutinario; titular clínicamente."
        }
      },
      "hepaticAdjustment": {
        "required": true,
        "message": {
          "pt": "Usar cautela em hepatopatia e reduzir exposição conforme sedação/efeitos adversos.",
          "es": "Usar precaución en hepatopatía y reducir exposición según sedación/efectos adversos."
        }
      },
      "commonAdverseEffects": {
        "pt": [
          "Sedação",
          "Boca seca",
          "Tontura"
        ],
        "es": [
          "Sedación",
          "Boca seca",
          "Mareo"
        ]
      },
      "dangerousAdverseEffects": {
        "pt": [
          "Lesão tecidual grave/gangrena parenteral",
          "Depressão respiratória",
          "Delirium/EPS raros"
        ],
        "es": [
          "Lesión tisular grave/gangrena parenteral",
          "Depresión respiratoria",
          "Delirium/EPS raros"
        ]
      },
      "contraindications": {
        "absolute": {
          "pt": [
            "<2 anos",
            "Injeção intra-arterial",
            "Injeção subcutânea",
            "IV em concentração acima do limite da rotulagem"
          ],
          "es": [
            "<2 años",
            "Inyección intraarterial",
            "Inyección subcutánea",
            "IV en concentración superior al límite del rotulado"
          ]
        },
        "relative": {
          "pt": [
            "DPOC/apneia do sono, idosos, sedativos/opioides"
          ],
          "es": [
            "EPOC/apnea del sueño, adultos mayores, sedantes/opioides"
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
          "pt": "Prometazina injetável pode causar necrose e gangrena. IM profunda é a via parenteral preferida; SC e intra-arterial são contraindicadas.",
          "es": "La prometazina inyectable puede causar necrosis y gangrena. IM profunda es la vía parenteral preferida; SC e intraarterial están contraindicadas."
        }
      }
    },

/* ── BUILD 403 — Anestesiologia: Indução e Manutenção ── */

/* ── KETAMINA ───────────────────────────────────────────────────────── */
    "ketamina": {
      "id": "ketamina",
      "name": {
        "pt": "Cetamina (Ketamina)",
        "es": "Ketamina"
      },
      "category": "emergencia",
      "class": {
        "pt": "Anestésico dissociativo; antagonista não competitivo de receptores NMDA",
        "es": "Anestésico disociativo; antagonista no competitivo de receptores NMDA"
      },
      "indications": {
        "pt": [
          "Indução de anestesia geral",
          "Anestesia como agente único em procedimentos que não exigem relaxamento muscular",
          "Suplemento a outros agentes anestésicos",
          "Sedação procedural pediátrica em emergência — uso fora da rotulagem dos EUA, conforme protocolo institucional"
        ],
        "es": [
          "Inducción de anestesia general",
          "Anestesia como agente único en procedimientos que no requieren relajación muscular",
          "Suplemento de otros agentes anestésicos",
          "Sedación procedimental pediátrica en urgencias — uso fuera del rotulado de EE. UU., según protocolo institucional"
        ]
      },
      "commercialNames": {
        "br": [
          "Ketalar",
          "Ketamin"
        ],
        "ar": [
          "Ketamina",
          "Ketalar"
        ]
      },
      "presentation": {
        "pt": [
          "Solução injetável IV/IM; concentrações de 10, 50 e 100 mg/mL podem existir conforme fabricante/mercado"
        ],
        "es": [
          "Solución inyectable IV/IM; pueden existir concentraciones de 10, 50 y 100 mg/mL según fabricante/mercado"
        ]
      },
      "mechanism": {
        "pt": "Antagoniza receptores NMDA e produz anestesia dissociativa com analgesia e amnésia. Em muitos pacientes aumenta pressão arterial e frequência cardíaca por estimulação simpática, mas hipotensão e bradicardia também podem ocorrer, especialmente em depleção de catecolaminas.",
        "es": "Antagoniza receptores NMDA y produce anestesia disociativa con analgesia y amnesia. En muchos pacientes aumenta la presión arterial y la frecuencia cardíaca por estimulación simpática, pero también pueden ocurrir hipotensión y bradicardia, especialmente con depleción de catecolaminas."
      },
      "dose": {
        "adult": {
          "pt": "Indução: 1–4,5 mg/kg IV lentamente em 60 s; alternativa 1–2 mg/kg a 0,5 mg/kg/min. IM: 6,5–13 mg/kg. Titular ao efeito e ao contexto anestésico.",
          "es": "Inducción: 1–4,5 mg/kg IV lentamente en 60 s; alternativa 1–2 mg/kg a 0,5 mg/kg/min. IM: 6,5–13 mg/kg. Titular al efecto y al contexto anestésico."
        },
        "pediatric": {
          "pt": "Rotulagem dos EUA: segurança/eficácia <16 anos não estabelecidas. Em sedação procedural pediátrica por protocolo: 1–1,5 mg/kg IV, com incrementos de 0,25–0,5 mg/kg; IM 4 mg/kg, podendo repetir 2 mg/kg após 10 min (máx. 6 mg/kg).",
          "es": "Rotulado de EE. UU.: seguridad/eficacia <16 años no establecidas. En sedación procedimental pediátrica por protocolo: 1–1,5 mg/kg IV, con incrementos de 0,25–0,5 mg/kg; IM 4 mg/kg, pudiendo repetir 2 mg/kg a los 10 min (máx. 6 mg/kg)."
        }
      },
      "administration": {
        "pt": [
          "Administrar IV lentamente; a injeção rápida aumenta risco de depressão respiratória e resposta pressora.",
          "A concentração de 100 mg/mL é concentrada e deve ser diluída antes do uso IV conforme a rotulagem do produto.",
          "Monitorização cardiorrespiratória e capacidade imediata de manejo de via aérea são obrigatórias durante sedação/anestesia."
        ],
        "es": [
          "Administrar IV lentamente; la inyección rápida aumenta el riesgo de depresión respiratoria y respuesta presora.",
          "La concentración de 100 mg/mL es concentrada y debe diluirse antes del uso IV según el rotulado del producto.",
          "Se requiere monitorización cardiorrespiratoria y capacidad inmediata para manejo de la vía aérea durante sedación/anestesia."
        ]
      },
      "renalAdjustment": {
        "required": false,
        "message": {
          "pt": "A rotulagem não estabelece ajuste renal fixo para indução; titular clinicamente.",
          "es": "El rotulado no establece un ajuste renal fijo para inducción; titular clínicamente."
        }
      },
      "hepaticAdjustment": {
        "required": true,
        "message": {
          "pt": "Não há ajuste único definido para dose de indução. Uso recorrente foi associado a lesão hepática; considerar função hepática basal e periódica quando houver plano de administrações repetidas.",
          "es": "No hay un ajuste único definido para la dosis de inducción. El uso repetido se ha asociado a lesión hepática; considerar función hepática basal y periódica cuando se planifiquen administraciones repetidas."
        }
      },
      "commonAdverseEffects": {
        "pt": [
          "Náusea/vômito",
          "Nistagmo",
          "Hipersecreção salivar",
          "Reações de emergência",
          "Aumento de pressão arterial e frequência cardíaca"
        ],
        "es": [
          "Náuseas/vómitos",
          "Nistagmo",
          "Hipersalivación",
          "Reacciones de emergencia",
          "Aumento de presión arterial y frecuencia cardíaca"
        ]
      },
      "dangerousAdverseEffects": {
        "pt": [
          "Depressão respiratória/apneia, sobretudo com administração rápida ou dose excessiva",
          "Laringoespasmo",
          "Instabilidade hemodinâmica",
          "Lesão hepática com uso recorrente"
        ],
        "es": [
          "Depresión respiratoria/apnea, sobre todo con administración rápida o dosis excesiva",
          "Laringoespasmo",
          "Inestabilidad hemodinámica",
          "Lesión hepática con uso repetido"
        ]
      },
      "contraindications": {
        "absolute": {
          "pt": [
            "Hipersensibilidade à cetamina ou excipientes",
            "Situação em que elevação importante da pressão arterial represente risco grave"
          ],
          "es": [
            "Hipersensibilidad a ketamina o excipientes",
            "Situación en la que una elevación importante de la presión arterial represente un riesgo grave"
          ]
        },
        "relative": {
          "pt": [
            "Pressão intracraniana elevada: usar em ambiente monitorizado",
            "Procedimentos de faringe/laringe/árvore brônquica exigem estratégia adicional de via aérea/anestesia",
            "Uso recorrente em hepatopatia"
          ],
          "es": [
            "Presión intracraneal elevada: usar en ambiente monitorizado",
            "Procedimientos de faringe/laringe/árbol bronquial requieren estrategia adicional de vía aérea/anestesia",
            "Uso repetido en hepatopatía"
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
          "pt": "A preservação de reflexos de via aérea não elimina risco de obstrução, laringoespasmo ou apneia. Benzodiazepínico não é obrigatório de rotina; pode ser usado quando clinicamente indicado para manifestações de emergência.",
          "es": "La preservación de reflejos de la vía aérea no elimina el riesgo de obstrucción, laringoespasmo o apnea. Una benzodiazepina no es obligatoria de rutina; puede usarse cuando esté clínicamente indicada para manifestaciones de emergencia."
        }
      }
    },

/* ── TIOPENTAL ──────────────────────────────────────────────────────── */
    "tiopental": {
      id: 'tiopental',
      name: { pt: 'Tiopental Sódico', es: 'Tiopental Sódico' },
      category: 'emergencia',
      class: { pt: 'Barbitúrico de Ação Ultra-Curta', es: 'Barbitúrico de Acción Ultra-Corta' },
      indications: {
        pt: ['Indução clássica da Anestesia Geral', 'Controle do "Estado de Mal Epiléptico" refratário a tudo (Coma Barbitúrico)', 'Redução aguda e agressiva da Hipertensão Intracraniana (Trauma cerebral maciço)'],
        es: ['Inducción clásica de la Anestesia General', 'Control del "Estado de Mal Epiléptico" refractario a todo (Coma Barbitúrico)', 'Reducción aguda de la Hipertensión Intracraneal (Trauma cerebral)']
      },
      commercialNames: { br: ['Thiopentax'], ar: ['Pentothal'] },
      presentation: { pt: ['Frasco-ampola com PÓ Liofilizado de 0,5g e 1g (Exige diluição com água ou SF)'], es: ['Vial con POLVO Liofilizado de 0,5g y 1g (Exige dilución)'] },
      mechanism: {
        pt: 'O clássico "Soro da Verdade". Como todo barbitúrico pesado, o Tiopental gruda no receptor GABA-A no cérebro e O MANTÉM ABERTO (não apenas facilita como os benzos, ele tranca a porta aberta). Isso inunda o cérebro de cloreto inibitório, apagando o paciente em 10 a 20 segundos (tempo de 1 braço ao cérebro). A droga desliga o metabolismo elétrico do cérebro, protegendo-o de morrer sem oxigênio, mas afunda violentamente a pressão do coração.',
        es: 'El clásico "Suero de la Verdad". El Tiopental se pega al receptor GABA-A en el cerebro y LO MANTIENE ABIERTO. Esto inunda el cerebro de cloruro, apagando al paciente en 10 a 20 segundos. La droga apaga el metabolismo eléctrico del cerebro (neuroprotección), pero hunde violentamente la presión del corazón.'
      },
      dose: {
        adult: {
          pt: 'Indução Anestésica: 3 a 5 mg/kg IV bolus. Coma Barbitúrico (UTI): Bolus seguido de infusão contínua pesada.',
          es: 'Inducción Anestésica: 3 a 5 mg/kg IV bolo. Coma Barbitúrico (UCI): Bolo seguido de infusión continua pesada.'
        },
        pediatric: {
          pt: 'Indução: 5 a 6 mg/kg IV.',
          es: 'Inducción: 5 a 6 mg/kg IV.'
        }
      },
      administration: { pt: ['O pó amarelo liofilizado tem um cheiro característico de alho e um pH absurdamente ALCALINO (pH 10.5). Misturar com drogas ácidas na mesma linha IV formará pedras e cristais de cálcio. DEVE SER FEITO EM VEIA CALIBROSA.'], es: ['El polvo amarillo tiene un pH absurdamente ALCALINO (pH 10.5). Mezclar con drogas ácidas en la misma línea IV formará piedras y cristales. DEBE HACERSE EN VENA CALIBRE.'] },
      renalAdjustment: { required: false, message: { pt: 'Cuidado em uremia (maior fração livre da droga, risco de overdose no rim parado).', es: 'Cuidado en uremia (mayor fracción libre de la droga).' } },
      hepaticAdjustment: { required: true, message: { pt: 'O despertar precoce se deve a "redistribuição para a gordura". A queima e eliminação real dependem do fígado; infusões contínuas saturam o fígado e o paciente demora semanas para acordar.', es: 'El despertar precoz se debe a "redistribución a la grasa". La eliminación real depende del hígado.' } },
      commonAdverseEffects: { pt: ['Sabor de alho/cebola na boca na hora da injeção', 'Apneia imediata e central (Parada respiratória esperada na indução)', 'Hipotensão aguda no centro cirúrgico'], es: ['Sabor de ajo/cebolla en la boca en la inyección', 'Apnea inmediata y central (Parada respiratoria esperada)', 'Hipotensión aguda'] },
      dangerousAdverseEffects: { pt: ['NECROSE TISSULAR E AMPUTAÇÃO SE INJEÇÃO INTRA-ARTERIAL ACIDENTAL', 'Vasodilatação letal em pacientes hipovolêmicos (Hemorragia)', 'Depressão Miocárdica Direta (O coração perde força de contração)'], es: ['NECROSIS TISULAR Y AMPUTACIÓN SI INYECCIÓN INTRA-ARTERIAL ACCIDENTAL', 'Vasodilatación letal en pacientes hipovolémicos', 'Depresión Miocárdica Directa'] },
      contraindications: {
        absolute: { pt: ['PORFIRIA INTERMITENTE AGUDA (A droga aciona enzimas do sangue que deflagram uma crise dolorosa paralisante e morte na porfiria)', 'Ausência de via aérea garantida (intubação) e ventilador'], es: ['PORFIRIA INTERMITENTE AGUDA (La droga desencadena crisis dolorosa paralizante y muerte)', 'Ausencia de vía aérea garantizada y ventilador'] },
        relative: { pt: ['Asma grave (Ele estimula liberação leve de histamina, podendo deflagrar broncoespasmo)', 'Choque descompensado grave'], es: ['Asma grave (estimula liberación leve de histamina, pudiendo desencadenar broncoespasmo)', 'Choque descompensado grave'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O ERRO MAIS CARO DA ANESTESIA: A injeção na Artéria em vez da Veia. Se o anestesista errar a punção e aplicar Tiopental (pH 10.5) numa ARTÉRIA (ex: artéria braquial no cotovelo), a droga cristaliza instantaneamente, destruindo todo o endotélio capilar da mão. O braço do paciente fica azul e gangrena em poucas horas, necessitando de amputação total do braço.', es: 'EL ERROR MÁS CARO DE LA ANESTESIA: Inyectar en Arteria en vez de Vena. Si se aplica Tiopental (pH 10.5) en una ARTÉRIA, la droga cristaliza instantáneamente, destruyendo todo el endotelio. El brazo queda azul y gangrena, necesitando amputación total.' }
      }
    },

/* ── ISOFLURANO ─────────────────────────────────────────────────────── */
    "isoflurano": {
      id: 'isoflurano',
      name: { pt: 'Isoflurano', es: 'Isoflurano' },
      category: 'emergencia',
      class: { pt: 'Anestésico Inalatório (Hidrocarboneto Halogenado)', es: 'Anestésico Inhalatorio (Hidrocarburo Halogenado)' },
      indications: {
        pt: ['Manutenção da Anestesia Geral no Centro Cirúrgico em intubados', 'Indução da anestesia geral (historicamente, mas abandonada devido ao odor)'],
        es: ['Mantenimiento de la Anestesia General en Quirófano en intubados', 'Inducción de la anestesia general (abandonada debido al olor)']
      },
      commercialNames: { br: ['Forane', 'Isoflurano'], ar: ['Forane'] },
      presentation: { pt: ['Frascos com líquido volátil (Para ser derramado dentro do vaporizador específico da máquina de anestesia, cor da tampa e faixa: ROXA)'], es: ['Frascos con líquido volátil (Color de la tapa y franja: MORADA)'] },
      mechanism: {
        pt: 'O vaporizador transforma o líquido em gás. O gás entra nos alvéolos, vai pro sangue e alcança o cérebro. Ele afunda em todas as membranas lipídicas dos neurônios, promovendo depressão cerebral global (Amnésia, Inconsciência e Imobilidade). Ele garante que o paciente não vai acordar "no meio da cirurgia". O isoflurano dilata brutalmente as coronárias do coração (efeito de "Roubo Coronariano") e paralisa a musculatura.',
        es: 'El vaporizador transforma el líquido en gas. Entra a los alvéolos, va a la sangre y al cerebro. Promueve depresión cerebral global (Amnesia, Inconsciencia e Inmovilidad), garantizando que el paciente no despertará "en medio de la cirugía". Dilata las coronarias y paraliza los músculos.'
      },
      dose: {
        adult: {
          pt: 'Manutenção da anestesia: 1 a 2,5% do volume inspirado, titulado pela Concentração Alveolar Mínima (CAM do Isoflurano é de ~1,15%).',
          es: 'Mantenimiento de la anestesia: 1 a 2,5% del volumen inspirado, titulado por la Concentración Alveolar Mínima (CAM ~1,15%).'
        },
        pediatric: {
          pt: 'Manutenção: Proporcional à CAM pediátrica (que costuma ser levemente maior, em torno de 1,6%).',
          es: 'Mantenimiento: Proporcional a la CAM pediátrica (~1,6%).'
        }
      },
      administration: { pt: ['APENAS POR VAPORIZADORES CALIBRADOS E ESPECÍFICOS PARA ISOFLURANO (Sistema de rosca de segurança cor-de-rosa/roxa). O gás exalado do paciente deve ser recolhido por sistema de exaustão.'], es: ['SOLO POR VAPORIZADORES CALIBRADOS Y ESPECÍFICOS PARA ISOFLURANO (rosca morada). El gas exhalado debe ser recogido por sistema de escape.'] },
      renalAdjustment: { required: false, message: { pt: 'Mais de 99% do isoflurano entra e sai intacto pelos pulmões respirando. Quase nada vira metabólito nos rins (muito seguro para o rim).', es: 'Más del 99% del isoflurano entra y sale intacto por los pulmones respirando. Muy seguro para el riñón.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Taxa de metabolismo hepático microscópica (0,2%). Muito inferior ao antigo Halotano (que causava hepatite fulminante).', es: 'Tasa de metabolismo hepático microscópica (0,2%).' } },
      commonAdverseEffects: { pt: ['Hipotensão (Causa muita vasodilatação sistêmica na mesa de cirurgia)', 'Depressão respiratória grave (O ventilador mecânico fará o trabalho)', 'Tremores pós-operatórios na sala de recuperação'], es: ['Hipotensión (Causa mucha vasodilatación en la mesa de cirugía)', 'Depresión respiratoria grave (El ventilador mecánico hará el trabajo)', 'Temblores posoperatorios'] },
      dangerousAdverseEffects: { pt: ['HIPERTERMIA MALIGNA (Reação genética letal que "frita" os músculos do paciente, gerando febre de 42°C na mesa de cirurgia)', 'Roubo Coronariano (Isquemia em áreas do coração sem fluxo na doença coronária)'], es: ['HIPERTERMIA MALIGNA (Reacción genética letal que "fríe" los músculos, generando fiebre de 42°C en la mesa)', 'Robo Coronario (Isquemia en áreas del corazón sin flujo)'] },
      contraindications: {
        absolute: { pt: ['Histórico familiar ou pessoal comprovado de HIPERTERMIA MALIGNA', 'Cirurgias sem máquina de anestesia com absorvedor de cal sodada'], es: ['Historial familiar o personal comprobado de HIPERTERMIA MALIGNA', 'Cirugías sin máquina de anestesia con absorbedor de cal sodada'] },
        relative: { pt: ['Indução inalatória com máscara em crianças pequenas e agitadas (Ele é extremamente "pungente" / fedorento e irritante para a garganta. O bebê prenderá a respiração, tossirá, fará laringoespasmo e ficará cianótico. Para indução inalatória em criança, USE SEVOFLURANO).'], es: ['Inducción inhalatoria con máscara en niños (Es extremadamente irritante. El bebé hará laringoespasmo. USE SEVOFLURANO).'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'O ANTÍDOTO DO FOGO MUSCULAR: Se, durante a anestesia com Isoflurano, o paciente começar a ficar duro (rigidez de masseter), a temperatura subir loucamente e o nível de CO2 explodir no monitor... O paciente está tendo Hipertermia Maligna. A ÚNICA salvação é desligar o vaporizador de isoflurano e injetar DANTROLENO IV.', es: 'EL ANTÍDOTO DEL FUEGO MUSCULAR: Si durante la anestesia, la temperatura sube locamente y el nivel de CO2 explota... El paciente está teniendo Hipertermia Maligna. La ÚNICA salvación es apagar el isoflurano e inyectar DANTROLENO IV.' }
      }
    }

  }); /* fim Object.assign EMERGENCIA_DRUGS_DB — BUILD 403 (Anestesia: ketamina + tiopental + isoflurano) */

/* ═══════════════════════════════════════════════════════════════════════════
   BUILD 429 — Drogas Vasoativas de UTI
   noradrenalina · adrenalina · dobutamina · dopamina · vasopressina
═══════════════════════════════════════════════════════════════════════════ */
Object.assign(window.EMERGENCIA_DRUGS_DB, {

  "noradrenalina": {
    name: { pt: 'Noradrenalina (Hemitartarato de)', es: 'Noradrenalina (Bitartrato de)' },
    category: 'emergencia',
    class: { pt: 'Vasopressor Sistêmico / Agonista Alfa-1 e Beta-1 Adrenérgico', es: 'Vasopresor Sistémico / Agonista Alfa-1 y Beta-1 Adrenérgico' },
    indications: {
      pt: ['Primeira linha no tratamento do Choque Séptico, Choque Cardiogênico e Choque Neurogênico refratários à reposição de fluidos'],
      es: ['Primera línea en el tratamiento del Choque Séptico, Choque Cardiogénico y Choque Neurogénico refractarios']
    },
    commercialNames: { br: ['Norepin', 'Hyponor'], ar: ['Levophed', 'Noradrenalina Biotenk'] },
    presentation: {
      pt: ['Ampolas de 4 mL contendo 4 mg de Noradrenalina Base (1 mg/mL)'],
      es: ['Ampollas de 4 mL conteniendo 4 mg de Noradrenalina Base (1 mg/mL)']
    },
    mechanism: {
      pt: 'O Apertador de Artérias Supremo. Age estimulando fortemente os receptores adrenérgicos Alfa-1 na musculatura das artérias, gerando uma vasoconstrição periférica massiva que sobe a pressão arterial sistêmica imediatamente. Possui também efeito Beta-1 moderado no coração, aumentando a força de contração (inotropismo) sem disparar tanto a frequência cardíaca.',
      es: 'Potente agonista de los receptores alfa-1 adrenérgicos vasculares, induciendo vasoconstricción periférica intensa y aumento de la resistencia vascular sistémica. Posee efecto beta-1 cardíaco moderado, mejorando la contractilidad con menor cronotropismo.'
    },
    dose: {
      adult: {
        pt: 'Início: 0,05 a 0,1 mcg/kg/min em infusão contínua. Titular a cada 2-5 minutos guiado pela Pressão Arterial Média (Alvo PAM >= 65 mmHg). Doses em choques refratários podem passar de 1 a 2 mcg/kg/min.',
        es: 'Inicio: 0,05 a 0,1 mcg/kg/min en infusión continua. Titular cada 2-5 minutos guiado por la Presión Arterial Media (Meta PAM >= 65 mmHg).'
      },
      pediatric: {
        pt: 'Choque pediátrico: 0,05 a 0,1 mcg/kg/min, máximo de 2 mcg/kg/min.',
        es: 'Choque pediátrico: 0,05 a 0,1 mcg/kg/min.'
      }
    },
    administration: {
      pt: [
        'DILUIÇÃO PADRÃO (Solução de Carga): 4 ampolas (16 mg) + 234 mL de Glicose 5% (SG5%), totalizando 250 mL (Concentração: 64 mcg/mL).',
        'DILUIÇÃO CONCENTRADA (Para restrição hídrica): 8 ampolas (32 mg) + 218 mL de SG5%, totalizando 250 mL.',
        'VEÍCULO: Deve ser diluída preferencialmente em Glicose 5% (SG5%) para evitar a oxidação da molécula que ocorre no Soro Fisiológico simples.',
        'VIA: EXCLUSIVAMENTE VIA ACESSO VENOSO CENTRAL. Uso em veia periférica aceito por no máximo 2-4 horas em emergência extrema.'
      ],
      es: [
        'DILUCIÓN ESTÁNDAR: 4 ampollas (16 mg) + 234 mL de Dextrosa 5% (DX5%), total 250 mL (64 mcg/mL).',
        'VÍA: EXCLUSIVAMENTE POR ACCESO VENOSO CENTRAL. El uso periférico aumenta el riesgo de necrosis tisular.'
      ]
    },
    renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste, mas causa forte vasoconstrição renal em doses extremas.', es: 'Sin necesidad de ajuste.' } },
    hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste de dose.', es: 'Sin necesidad de ajuste.' } },
    commonAdverseEffects: { pt: ['Ansiedade e tremores se o paciente estiver acordado', 'Taquicardia sinusal leve', 'Cefaleia de tração vascular'], es: ['Ansiedad y temblores', 'Taquicardia sinusal leve', 'Cefalea'] },
    dangerousAdverseEffects: { pt: ['NECROSE TISULAR EXTREMA (Se houver extravasamento na veia)', 'Isquemia mesentérica (falta de sangue no intestino por fechamento de artérias)', 'Isquemia digital (dedos pretos/frios)'], es: ['NECROSIS TISULAR POR EXTRAVASACIÓN', 'Isquemia mesentérica', 'Isquemia digital'] },
    contraindications: {
      absolute: { pt: ['Hipotensão por hipovolemia pura não corrigida (Salvo como medida de resgate temporária enquanto infunde sangue/soro)'], es: ['Hipotensión por hipovolemia no corregida'] },
      relative: { pt: ['Arritmias cardíacas severas ativas ou doença vascular periférica grave'], es: ['Arritmias cardíacas severas'] }
    },
    safetyFlags: {
      bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: true, highAlertMedication: true,
      warning: { pt: 'O ALERTA DA VEIA QUE VAZA E RASGA: Se a Noradrenalina vazar de uma veia periférica fina do braço para debaixo da pele, ela esmagará os microvasos locais. A pele morre, apodrece e gangrena (necrose por isquemia local), exigindo enxerto de pele. O ANTÍDOTO imediato é infiltrar a área com Fentolamina (bloqueador alfa) ou Nitroglicerina tópica para abrir os vasos.', es: 'EL ALERTA DE LA EXTRAVASACIÓN: Si la Noradrenalina se infiltra fuera de la vena periférica, colapsa los microvasos locales, causando gangrena y necrosis cutánea. El ANTÍDOTO es la infiltración local con Fentolamina o parches de Nitroglicerina.' }
    },
    references: {
      pt: 'Surviving Sepsis Campaign 2021; Protocolo de Infusões da UTI do InCor/HCFMUSP; Micromedex Critical Care.',
      es: 'Surviving Sepsis Campaign 2021; Guías de Emergencias de la Sociedad Argentina de Terapia Intensiva (SATI).'
    }
  },

  "adrenalina": {
    name: { pt: 'Adrenalina (Epinefrina)', es: 'Adrenalina (Epinefrina)' },
    category: 'emergencia',
    class: { pt: 'Estimulante Adrenérgico Global / Vasopressor e Inotrópico', es: 'Estimulante Adrenérgico Global / Vasopresor e Inotrópico' },
    indications: {"es":["Paro cardiorrespiratorio","Anafilaxia","Hipotensión asociada a shock séptico","Bradicardia sintomática con inestabilidad cuando la atropina es ineficaz"],"pt":["Parada cardiorrespiratória","Anafilaxia","Hipotensão associada a choque séptico","Bradicardia sintomática com instabilidade quando atropina é ineficaz"]},
    commercialNames: { br: ['Adrenalina Biofun', 'Epinefrina Teuto'], ar: ['Adrenalina Fada', 'Epinefrina Larjan'] },
    presentation: {
      pt: ['Ampolas de 1 mL contendo 1 mg de Cloridrato de Epinefrina (Concentração pura 1:1.000)'],
      es: ['Ampollas de 1 mL conteniendo 1 mg de Epinefrina (1:1.000)']
    },
    mechanism: {
      pt: 'O Ativador Total do Sistema Simpático. Estimula de forma massiva e violenta todos os receptores adrenérgicos: Alfa-1 (contração de artérias), Beta-1 (dispara os batimentos e a força do coração) e Beta-2 (abre os brônquios do pulmão). Na PCR, ela esmaga as artérias periféricas para empurrar o pouco sangue restante em direção ao cérebro e às coronárias.',
      es: 'Agonista potente de los receptores alfa y beta adrenérgicos. Aumenta la fuerza y frecuencia cardíaca (beta-1), induce broncodilatación (beta-2) y genera vasoconstricción periférica (alfa-1) redistribuyendo el flujo hacia órganos vitales.'
    },
    dose: {
      adult: {
        pt: 'Parada Cardíaca (PCR): 1 mg via Intravenosa DIRETA (Bolus puro) a cada 3 a 5 minutos. Anafilaxia: 0,3 mg a 0,5 mg via INTRAMUSCULAR (coxa) imediato. Infusão Contínua (Choque): 0,05 a 1 mcg/kg/min.',
        es: 'Parada Cardíaca: 1 mg IV DIRECTA (Bolo) cada 3-5 minutos. Anafilaxia: 0,3 mg a 0,5 mg vía INTRAMUSCULAR. Infusión Continua: 0,05 a 1 mcg/kg/min.'
      },
      pediatric: {
        pt: 'PCR: 0,01 mg/kg (0,1 mL/kg da diluição 1:10.000) IV a cada 3-5 min. Anafilaxia: 0,01 mg/kg IM.',
        es: 'PCR pediátrica: 0,01 mg/kg IV. Anafilaxia: 0,01 mg/kg IM.'
      }
    },
    administration: {
      pt: [
        'DILUIÇÃO PARA INFUSÃO CONTÍNUA (Bomba): 10 ampolas (10 mg) + 240 mL de SG5% ou SF 0,9%, total 250 mL (Concentração: 40 mcg/mL).',
        'ANAFILAXIA: Deve ser aplicada SEMPRE VIA INTRAMUSCULAR na coxa (vasto lateral). Fazer Adrenalina IV direta fora da parada cardíaca causa AVC e morte instantânea por pico pressórico.',
        'DILUIÇÃO PEDIÁTRICA (1:10.000): Pegar 1 ampola de 1 mL e diluir com 9 mL de Soro Fisiológico antes de aspirar a dose da criança.'
      ],
      es: [
        'INFUSIÓN CONTINUA: 10 ampollas (10 mg) + 240 mL de DX5% o SF 0,9%, total 250 mL.',
        'ANAFILAXIA: Aplicar SIEMPRE vía INTRAMUSCULAR en el muslo (vasto lateral).'
      ]
    },
    renalAdjustment: { required: false, message: { pt: 'Sem necessidade.', es: 'Sin necesidad.' } },
    hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade.', es: 'Sin necesidad.' } },
    commonAdverseEffects: {"es":["Ansiedad/agitación","Temblor","Palpitaciones y taquicardia","Cefalea","Sudoración","Palidez"],"pt":["Ansiedade/agitação","Tremor","Palpitações e taquicardia","Cefaleia","Sudorese","Palidez"]},
    dangerousAdverseEffects: {"es":["Taquiarritmias ventriculares","Hipertensión grave","Isquemia/infarto de miocardio en pacientes susceptibles","Edema pulmonar","Necrosis tisular por extravasación"],"pt":["Taquiarritmias ventriculares","Hipertensão grave","Isquemia/infarto do miocárdio em pacientes suscetíveis","Edema pulmonar","Necrose tecidual por extravasamento"]},
    contraindications: {"es":{"absolute":[],"relative":["En paro cardiorrespiratorio o anafilaxia potencialmente mortal no hay contraindicación absoluta que justifique retrasar la adrenalina","Taquiarritmia o enfermedad cardiovascular grave requieren monitorización estrecha cuando el contexto no es inmediatamente mortal"]},"pt":{"absolute":[],"relative":["Em parada cardiorrespiratória ou anafilaxia com risco de vida não há contraindicação absoluta que justifique atrasar adrenalina","Taquiarritmia ou doença cardiovascular grave exigem monitorização estreita quando o contexto não é imediatamente ameaçador à vida"]}},
    safetyFlags: {
      bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
      warning: { pt: 'O ERRO DA VIA NA ALERGIA: Jamais aplique Adrenalina na veia (IV) direta de um paciente com alergia que esteja acordado e conversando. A injeção IV direta causa um espasmo nas artérias do cérebro, estourando a pressão e matando o paciente de AVC hemorrágico. Na alergia/anafilaxia, a via sagrada e segura é a INTRAMUSCULAR na coxa.', es: 'EL ERRO DE LA VÍA EN ALERGIA: Jamás aplique Adrenalina venosa (IV) directa a un paciente con alergia que esté consciente. Causa picos de presión brutales que provocan ACV hemorrágico. La vía segura es la INTRAMUSCULAR en el muslo.' }
    },
    references: {
      pt: 'Diretrizes de RCP da American Heart Association (AHA) 2020; WAO (World Allergy Organization) Anaphylaxis Guidelines.',
      es: 'Directrices de RCP de la American Heart Association (AHA) 2020; Guías de Anafilaxia de la WAO.'
    },
    /* CALC-FARMACOS-BATCH2-CLINICAL-10-PATHOLOGY-DOSE-SAFETY-V1-B-R0 */
    clinicalEnrichment: {"commonAdverseEffects":{"es":["Ansiedad/agitación","Temblor","Palpitaciones y taquicardia","Cefalea","Sudoración","Palidez"],"pt":["Ansiedade/agitação","Tremor","Palpitações e taquicardia","Cefaleia","Sudorese","Palidez"]},"contraindications":{"es":{"absolute":[],"relative":["En paro cardiorrespiratorio o anafilaxia potencialmente mortal no hay contraindicación absoluta que justifique retrasar la adrenalina","Taquiarritmia o enfermedad cardiovascular grave requieren monitorización estrecha cuando el contexto no es inmediatamente mortal"]},"pt":{"absolute":[],"relative":["Em parada cardiorrespiratória ou anafilaxia com risco de vida não há contraindicação absoluta que justifique atrasar adrenalina","Taquiarritmia ou doença cardiovascular grave exigem monitorização estreita quando o contexto não é imediatamente ameaçador à vida"]}},"dangerousAdverseEffects":{"es":["Taquiarritmias ventriculares","Hipertensión grave","Isquemia/infarto de miocardio en pacientes susceptibles","Edema pulmonar","Necrosis tisular por extravasación"],"pt":["Taquiarritmias ventriculares","Hipertensão grave","Isquemia/infarto do miocárdio em pacientes suscetíveis","Edema pulmonar","Necrose tecidual por extravasamento"]},"doseByIndication":{"es":[{"indication":"Paro cardiorrespiratorio — adulto","rows":[{"dose":"1 mg cada 3–5 min durante la reanimación.","label":"IV/IO"}]},{"indication":"Anafilaxia","note":"En anafilaxia, la vía IM en el muslo es la vía preferida; monitorizar respuesta clínica y efectos cardiovasculares.","rows":[{"dose":"0,3–0,5 mg IM en la cara anterolateral del muslo; repetir cada 5–10 min según necesidad.","label":"Adulto / ≥30 kg"},{"dose":"0,01 mg/kg IM en la cara anterolateral del muslo (máx. 0,3 mg por dosis); repetir cada 5–10 min según necesidad.","label":"<30 kg"}]},{"indication":"Shock séptico con hipotensión","rows":[{"dose":"0,05–2 mcg/kg/min, titulada a la presión arterial objetivo; retirar gradualmente.","label":"Infusión IV"}]},{"indication":"Bradicardia sintomática — rescate","note":"Opción cuando la atropina es ineficaz mientras se prepara estimulación según ACLS.","rows":[{"dose":"2–10 mcg/min, titulada a respuesta.","label":"Infusión IV"}]}],"pt":[{"indication":"Parada cardiorrespiratória — adulto","rows":[{"dose":"1 mg a cada 3–5 min durante a ressuscitação.","label":"IV/IO"}]},{"indication":"Anafilaxia","note":"Na anafilaxia, a via IM na coxa é a via preferida; monitorar resposta clínica e efeitos cardiovasculares.","rows":[{"dose":"0,3–0,5 mg IM na face anterolateral da coxa; repetir a cada 5–10 min conforme necessidade.","label":"Adulto / ≥30 kg"},{"dose":"0,01 mg/kg IM na face anterolateral da coxa (máx. 0,3 mg por dose); repetir a cada 5–10 min conforme necessidade.","label":"<30 kg"}]},{"indication":"Choque séptico com hipotensão","rows":[{"dose":"0,05–2 mcg/kg/min, titulada à pressão arterial alvo; reduzir gradualmente ao retirar.","label":"Infusão IV"}]},{"indication":"Bradicardia sintomática — resgate","note":"Opção quando atropina é ineficaz enquanto se prepara estimulação/transvenoso conforme ACLS.","rows":[{"dose":"2–10 mcg/min, titulada à resposta.","label":"Infusão IV"}]}]},"indications":{"es":["Paro cardiorrespiratorio","Anafilaxia","Hipotensión asociada a shock séptico","Bradicardia sintomática con inestabilidad cuando la atropina es ineficaz"],"pt":["Parada cardiorrespiratória","Anafilaxia","Hipotensão associada a choque séptico","Bradicardia sintomática com instabilidade quando atropina é ineficaz"]},"references":["AHA 2025 Adult Cardiac Arrest Algorithm","AHA 2025 Adult Bradycardia With a Pulse Algorithm","DailyMed — Epinephrine Injection, prescribing information (2026)","AAAAI/ACAAI Anaphylaxis Practice Parameter Update 2023"]}
  },

  "dobutamina": {
    name: { pt: 'Dobutamina (Cloridrato de)', es: 'Dobutamina (Clorhidrato de)' },
    category: 'emergencia',
    class: { pt: 'Inotrópico Cardíaco / Agonista Predominante Beta-1 Adrenérgico', es: 'Inotrópico Cardíaco / Agonista Predominante Beta-1 Adrenérgico' },
    indications: {"es":["Soporte inotrópico a corto plazo en bajo gasto por contractilidad deprimida","Insuficiencia cardíaca aguda/descompensada o shock cardiogénico seleccionado con bajo gasto, tras corregir hipovolemia cuando corresponda"],"pt":["Suporte inotrópico de curto prazo em baixo débito por contratilidade deprimida","Insuficiência cardíaca aguda/descompensada ou choque cardiogênico selecionado com baixo débito, após correção de hipovolemia quando aplicável"]},
    commercialNames: { br: ['Dobutrex', 'Dobutamina'], ar: ['Dobutrex', 'Dobutamina Richmond'] },
    presentation: {
      pt: ['Ampolas ou Frascos de 20 mL contendo 250 mg de Dobutamina (12,5 mg/mL)'],
      es: ['Ampollas o Viales de 20 mL conteniendo 250 mg de Dobutamina (12,5 mg/mL)']
    },
    mechanism: {
      pt: 'O "Chicote do Coração Cansado". Liga-se diretamente nos receptores Beta-1 do músculo cardíaco. Isso causa um aumento violento do cálcio dentro das células do coração, aumentando drasticamente a força de contração (Inotropismo positivo) e melhorando o volume de sangue ejetado por minuto. Possui um efeito Beta-2 leve que dilata os vasos sanguíneos da periferia, o que reduz o "peso" (pós-carga) que o coração precisa empurrar.',
      es: 'Estimulante selectivo beta-1 adrenérgico que aumenta la contractilidad miocárdica (inotropismo positivo) y el gasto cardíaco con mínimos cambios en la frecuencia. Produce vasodilatación periférica leve (beta-2) disminuyendo la poscarga.'
    },
    dose: {
      adult: {
        pt: 'Infusão Contínua: 2 a 20 mcg/kg/min. A dose usual clínica de suporte fica entre 5 a 10 mcg/kg/min (Evitar passar de 20 devido ao risco extremo de arritmias ventriculares letais).',
        es: 'Infusión Continua: 2 a 20 mcg/kg/min. Dosis clínica habitual entre 5 a 10 mcg/kg/min.'
      },
      pediatric: {
        pt: '2 a 20 mcg/kg/min via infusão contínua em bomba.',
        es: '2 a 20 mcg/kg/min en infusión continua.'
      }
    },
    administration: {
      pt: [
        'DILUIÇÃO PADRÃO BRASIL/ARGENTINA: 1 ampola (250 mg / 20 mL) + 230 mL de Soro Fisiológico 0,9% ou SG5%, totalizando 250 mL (Concentração: 1.000 mcg/mL ou 1 mg/mL).',
        'Pode correr em veia periférica calibrosa por períodos curtos, mas o acesso venoso central é fortemente recomendado.'
      ],
      es: [
        'DILUCIÓN ESTÁNDAR: 1 ampolla (250 mg) + 230 mL de SF 0,9% o DX5%, total 250 mL (1.000 mcg/mL).'
      ]
    },
    renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
    hepaticAdjustment: { required: false, message: { pt: 'Metabolização por conjugação tecidual, sem ajuste.', es: 'Sin necesidad de ajuste.' } },
    commonAdverseEffects: {"es":["Taquicardia","Aumento de la presión arterial","Ectopia ventricular/palpitaciones","Náusea","Cefalea","Dolor torácico","Flebitis en el sitio de infusión"],"pt":["Taquicardia","Aumento da pressão arterial","Ectopia ventricular/palpitações","Náusea","Cefaleia","Dor torácica","Flebite no local de infusão"]},
    dangerousAdverseEffects: {"es":["Taquiarritmias ventriculares","Isquemia/angina importante","Hipertensión o hipotensión grave","Empeoramiento de la obstrucción dinámica del tracto de salida del VI"],"pt":["Taquiarritmias ventriculares","Isquemia/angina importante","Hipertensão ou hipotensão grave","Agravamento de obstrução dinâmica da via de saída do VE"]},
    contraindications: {"es":{"absolute":["Estenosis subaórtica hipertrófica idiopática/obstrucción dinámica importante del tracto de salida del VI","Hipersensibilidad a dobutamina o componentes de la formulación"],"relative":["Taquiarritmias, fibrilación auricular con respuesta rápida e isquemia miocárdica requieren monitorización intensiva"]},"pt":{"absolute":["Estenose subaórtica hipertrófica idiopática/obstrução dinâmica importante da via de saída do VE","Hipersensibilidade à dobutamina ou componentes da formulação"],"relative":["Taquiarritmias, fibrilação atrial com resposta rápida e isquemia miocárdica exigem monitorização intensiva"]}},
    safetyFlags: {
      bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
      warning: { pt: 'O RISCO DO "CHICOTE" EM CORAÇÃO SEM SANGUE: Usar Dobutamina num coração infartado que está sem nenhuma irrigação nas artérias coronárias é como dar uma chicotada num cavalo exausto e desidratado. O coração vai acelerar, consumir o resto de oxigênio que tinha e sofrer uma arritmia fatal. Corrija o volume e as artérias primeiro.', es: 'EL RIESGO EN CORAZÓN ISQUÉMICO: Usar Dobutamina en un corazón infartado sin irrigación coronaria es como azotar a un caballo exhausto. El corazón consumirá el oxígeno restante y entrará en arritmia fatal. Estabilice antes.' }
    },
    references: {
      pt: 'Diretrizes Brasileiras de Insuficiência Cardíaca Aguda SBC 2021; ADHERE Registry; UpToDate Critical Care.',
      es: 'Guías de Insuficiencia Cardíaca de la Sociedad Europea de Cardiología (ESC); Manual de la SATI.'
    },
    /* CALC-FARMACOS-BATCH2-CLINICAL-10-PATHOLOGY-DOSE-SAFETY-V1-B-R0 */
    clinicalEnrichment: {"commonAdverseEffects":{"es":["Taquicardia","Aumento de la presión arterial","Ectopia ventricular/palpitaciones","Náusea","Cefalea","Dolor torácico","Flebitis en el sitio de infusión"],"pt":["Taquicardia","Aumento da pressão arterial","Ectopia ventricular/palpitações","Náusea","Cefaleia","Dor torácica","Flebite no local de infusão"]},"contraindications":{"es":{"absolute":["Estenosis subaórtica hipertrófica idiopática/obstrucción dinámica importante del tracto de salida del VI","Hipersensibilidad a dobutamina o componentes de la formulación"],"relative":["Taquiarritmias, fibrilación auricular con respuesta rápida e isquemia miocárdica requieren monitorización intensiva"]},"pt":{"absolute":["Estenose subaórtica hipertrófica idiopática/obstrução dinâmica importante da via de saída do VE","Hipersensibilidade à dobutamina ou componentes da formulação"],"relative":["Taquiarritmias, fibrilação atrial com resposta rápida e isquemia miocárdica exigem monitorização intensiva"]}},"dangerousAdverseEffects":{"es":["Taquiarritmias ventriculares","Isquemia/angina importante","Hipertensión o hipotensión grave","Empeoramiento de la obstrucción dinámica del tracto de salida del VI"],"pt":["Taquiarritmias ventriculares","Isquemia/angina importante","Hipertensão ou hipotensão grave","Agravamento de obstrução dinâmica da via de saída do VE"]},"doseByIndication":{"es":[{"indication":"Bajo gasto / soporte inotrópico IV","note":"Corregir hipovolemia y monitorizar ECG, presión arterial, perfusión y respuesta hemodinámica.","rows":[{"dose":"2,5–15 mcg/kg/min IV continuo, titulando a gasto cardíaco, perfusión y presión arterial.","label":"Infusión"},{"dose":"Raramente pueden requerirse tasas de hasta 40 mcg/kg/min bajo monitorización intensiva.","label":"Casos seleccionados"}]}],"pt":[{"indication":"Baixo débito / suporte inotrópico IV","note":"Corrigir hipovolemia e monitorar ECG, pressão arterial, perfusão e resposta hemodinâmica.","rows":[{"dose":"2,5–15 mcg/kg/min IV contínuo, titulando a débito cardíaco, perfusão e pressão arterial.","label":"Infusão"},{"dose":"Raramente podem ser necessárias taxas de até 40 mcg/kg/min sob monitorização intensiva.","label":"Casos selecionados"}]}]},"indications":{"es":["Soporte inotrópico a corto plazo en bajo gasto por contractilidad deprimida","Insuficiencia cardíaca aguda/descompensada o shock cardiogénico seleccionado con bajo gasto, tras corregir hipovolemia cuando corresponda"],"pt":["Suporte inotrópico de curto prazo em baixo débito por contratilidade deprimida","Insuficiência cardíaca aguda/descompensada ou choque cardiogênico selecionado com baixo débito, após correção de hipovolemia quando aplicável"]},"references":["DailyMed — Dobutamine Hydrochloride Injection, prescribing information"]}
  },

  "dopamina": {
    name: { pt: 'Dopamina (Cloridrato de)', es: 'Dopamina (Clorhidrato de)' },
    category: 'emergencia',
    class: { pt: 'Vasopressor e Inotrópico Adrenérgico Dependente de Dose', es: 'Vasopresor e Inotrópico Adrenérgico Dependiente de Dosis' },
    indications: {"es":["Soporte hemodinámico en shock con hipotensión/bajo gasto tras corregir hipovolemia, acidosis e hipoxia cuando corresponda","Bradicardia sintomática con inestabilidad cuando la atropina es ineficaz"],"pt":["Suporte hemodinâmico em choque com hipotensão/baixo débito após correção de hipovolemia, acidose e hipóxia quando aplicável","Bradicardia sintomática com instabilidade quando atropina é ineficaz"]},
    commercialNames: { br: ['Revivan', 'Dopamina'], ar: ['Revivan', 'Dopamina Klonal'] },
    presentation: {
      pt: ['Ampolas de 10 mL contendo 50 mg de Dopamina (5 mg/mL)'],
      es: ['Ampollas de 5 mL ou 10 mL conteniendo 200 mg ou 50 mg']
    },
    mechanism: {
      pt: 'A Droga Camaleão. Seus efeitos dependem da velocidade de infusão. DOSE BAIXA (0,5 a 2 mcg/kg/min): Liga-se nos receptores dopaminérgicos D1, dilatando artérias renais e mesentéricas. DOSE MÉDIA (2 a 10 mcg/kg/min): Estimula os receptores Beta-1 do coração, aumentando a força e os batimentos cardíacos. DOSE ALTA (10 a 20 mcg/kg/min): Domina o receptor Alfa-1, esmagando as artérias e subindo a pressão como a noradrenalina.',
      es: 'Efectos dependientes de la velocidad de infusión. DOSIS BAJA (0,5-2 mcg/kg/min): Estimula receptores D1 renales. DOSIS MEDIA (2-10 mcg/kg/min): Agonista beta-1 (inotrópico). DOSIS ALTA (10-20 mcg/kg/min): Agonista alfa-1, generando vasoconstricción periférica intensa.'
    },
    dose: {
      adult: {
        pt: 'Infusão Contínua: 2 a 20 mcg/kg/min. Iniciar geralmente com 5 mcg/kg/min e titular baseado na resposta pressórica e eletrocardiográfica.',
        es: 'Infusión Continua: 2 a 20 mcg/kg/min. Iniciar con 5 mcg/kg/min y titular según respuesta.'
      },
      pediatric: {
        pt: '2 a 20 mcg/kg/min (Muito utilizada no choque neonatal).',
        es: '2 a 20 mcg/kg/min (Muy utilizada en choque neonatal).'
      }
    },
    administration: {
      pt: [
        'DILUIÇÃO PADRÃO: 5 ampolas (250 mg / 50 mL) + 200 mL de Soro Fisiológico 0,9% ou SG5%, totalizando 250 mL (Concentração: 1.000 mcg/mL).',
        'Exige via em ACESSO VENOSO CENTRAL obrigatório em doses altas devido ao risco severo de necrose local por infiltração.'
      ],
      es: [
        'DILUCIÓN ESTÁNDAR: 250 mg + 200 mL de SF o DX5%, total 250 mL (1.000 mcg/mL).'
      ]
    },
    renalAdjustment: { required: false, message: { pt: 'Mito da dose renal: Usar dopamina baixa para "proteger o rim" NÃO reduz a mortalidade e foi banido da prática moderna.', es: 'Mito de dosis renal: El uso de dosis bajas para "proteger el riñón" fue desmentido por la evidencia moderna.' } },
    hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade.', es: 'Sin necesidad.' } },
    commonAdverseEffects: {"es":["Náusea/vómitos","Cefalea","Ansiedad","Palpitaciones/taquicardia","Vasoconstricción periférica"],"pt":["Náusea/vômitos","Cefaleia","Ansiedade","Palpitações/taquicardia","Vasoconstrição periférica"]},
    dangerousAdverseEffects: {"es":["Taquiarritmias ventriculares","Isquemia periférica/mesentérica o gangrena por vasoconstricción excesiva","Necrosis tisular por extravasación","Hipertensión grave","Hipotensión importante si se retira bruscamente"],"pt":["Taquiarritmias ventriculares","Isquemia periférica/mesentérica ou gangrena em vasoconstrição excessiva","Necrose tecidual por extravasamento","Hipertensão grave","Hipotensão importante se retirada abrupta"]},
    contraindications: {"es":{"absolute":["Feocromocitoma"],"relative":["Taquiarritmias importantes o fibrilación ventricular","Hipovolemia no corregida: corregir volumen antes de la infusión siempre que sea posible","Enfermedad vascular periférica grave aumenta el riesgo de isquemia"]},"pt":{"absolute":["Feocromocitoma"],"relative":["Taquiarritmias importantes ou fibrilação ventricular","Hipovolemia não corrigida: corrigir volume antes da infusão sempre que possível","Doença vascular periférica grave aumenta risco de isquemia"]}},
    safetyFlags: {
      bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: true, highAlertMedication: true,
      warning: { pt: 'O ABANDONO DA DOPAMINA NO CHOQUE SÉPTICO: O grande estudo SOAP II provou que usar Dopamina no Choque Séptico mata muito mais do que usar Noradrenalina, porque a Dopamina causa o dobro de arritmias cardíacas fatais. Ela foi rebaixada pelas diretrizes mundiais e hoje a Noradrenalina é a dona absoluta do choque.', es: 'EL ABANDONO EN CHOQUE SÉPTICO: El estudio SOAP II demostró que usar Dopamina en Choque Séptico causa el doble de arritmias cardíacas fatales comparado con Noradrenalina. Fue desplazada por las guías mundiales.' }
    },
    references: {
      pt: 'SOAP II Trial (NEJM 2010 - Dopamine vs Norepinephrine); Surviving Sepsis Campaign Guidelines 2021; Manual Lexicomp Critical Care.',
      es: 'SOAP II Trial (NEJM 2010); Directrices de la Surviving Sepsis Campaign; Manual de la SATI.'
    },
    /* CALC-FARMACOS-BATCH2-CLINICAL-10-PATHOLOGY-DOSE-SAFETY-V1-B-R0 */
    clinicalEnrichment: {"commonAdverseEffects":{"es":["Náusea/vómitos","Cefalea","Ansiedad","Palpitaciones/taquicardia","Vasoconstricción periférica"],"pt":["Náusea/vômitos","Cefaleia","Ansiedade","Palpitações/taquicardia","Vasoconstrição periférica"]},"contraindications":{"es":{"absolute":["Feocromocitoma"],"relative":["Taquiarritmias importantes o fibrilación ventricular","Hipovolemia no corregida: corregir volumen antes de la infusión siempre que sea posible","Enfermedad vascular periférica grave aumenta el riesgo de isquemia"]},"pt":{"absolute":["Feocromocitoma"],"relative":["Taquiarritmias importantes ou fibrilação ventricular","Hipovolemia não corrigida: corrigir volume antes da infusão sempre que possível","Doença vascular periférica grave aumenta risco de isquemia"]}},"dangerousAdverseEffects":{"es":["Taquiarritmias ventriculares","Isquemia periférica/mesentérica o gangrena por vasoconstricción excesiva","Necrosis tisular por extravasación","Hipertensión grave","Hipotensión importante si se retira bruscamente"],"pt":["Taquiarritmias ventriculares","Isquemia periférica/mesentérica ou gangrena em vasoconstrição excessiva","Necrose tecidual por extravasamento","Hipertensão grave","Hipotensão importante se retirada abrupta"]},"doseByIndication":{"es":[{"indication":"Shock — soporte hemodinámico","note":"Preferir vena de gran calibre y bomba de infusión; corregir hipovolemia, acidosis e hipoxia antes cuando sea posible.","rows":[{"dose":"2–5 mcg/kg/min IV continuo.","label":"Inicial"},{"dose":"Aumentar en incrementos de 5–10 mcg/kg/min según respuesta; no exceder 50 mcg/kg/min.","label":"Titulación"}]},{"indication":"Bradicardia sintomática — rescate","note":"Opción cuando la atropina es ineficaz según ACLS.","rows":[{"dose":"5–20 mcg/kg/min, titulada a respuesta; retirar gradualmente.","label":"Infusión IV"}]}],"pt":[{"indication":"Choque — suporte hemodinâmico","note":"Preferir veia calibrosa e bomba de infusão; corrigir hipovolemia, acidose e hipóxia antes quando possível.","rows":[{"dose":"2–5 mcg/kg/min IV contínuo.","label":"Inicial"},{"dose":"Aumentar em incrementos de 5–10 mcg/kg/min conforme resposta; não exceder 50 mcg/kg/min.","label":"Titulação"}]},{"indication":"Bradicardia sintomática — resgate","note":"Opção quando atropina é ineficaz conforme ACLS.","rows":[{"dose":"5–20 mcg/kg/min, titulada à resposta; reduzir gradualmente.","label":"Infusão IV"}]}]},"indications":{"es":["Soporte hemodinámico en shock con hipotensión/bajo gasto tras corregir hipovolemia, acidosis e hipoxia cuando corresponda","Bradicardia sintomática con inestabilidad cuando la atropina es ineficaz"],"pt":["Suporte hemodinâmico em choque com hipotensão/baixo débito após correção de hipovolemia, acidose e hipóxia quando aplicável","Bradicardia sintomática com instabilidade quando atropina é ineficaz"]},"references":["DailyMed — Dopamine Hydrochloride Injection, prescribing information (2025/2026)","AHA 2025 Adult Bradycardia With a Pulse Algorithm"]}
  },

  "vasopressina": {
    name: { pt: 'Vasopressina (Hormônio Antidiurético Sintético)', es: 'Vasopresina (Hormona Antidiurética Sintética)' },
    category: 'emergencia',
    class: { pt: 'Vasopressor Puro Não-Adrenérgico / Agonista do Receptor V1', es: 'Vasopresor Puro No Adrenérgico / Agonista del Receptor V1' },
    indications: {
      pt: ['Choque Séptico refratário (Associada à Noradrenalina para tentar reduzir a dose desta e poupar o coração)', 'Diabetes Insipidus Central (Tratamento da poliúria massiva)', 'Hemorragia por Varizes Esofágicas (Uso alternativo secundário)'],
      es: ['Choque Séptico refractario (Asociada a Noradrenalina para disminuir su dosis)', 'Diabetes Insípida Central', 'Hemorragia por Varices Esofágicas']
    },
    commercialNames: { br: ['Enpress', 'Vasopressina'], ar: ['Empress', 'Vasopresina Richmond'] },
    presentation: {
      pt: ['Ampolas de 1 mL contendo 20 UI (Unidades Internacionais) de Vasopressina'],
      es: ['Ampollas de 1 mL conteniendo 20 UI (Unidades Internacionales) de Vasopresina']
    },
    mechanism: {
      pt: 'O Vasopressor Sem Adrenalina. Ela ignora completamente o coração e os receptores adrenérgicos. Age ligando-se diretamente nos receptores V1a da musculatura das artérias periféricas, ativando canais de cálcio que provocam uma constrição vascular implacável. Como age por uma via totalmente diferente, funciona mesmo quando o sangue está muito ácido e a noradrenalina parou de fazer efeito.',
      es: 'Vasopresor puro no adrenérgico. Agonista selectivo de los receptores V1a vasculares, induciendo vasoconstricción periférica potente e independiente del pH sanguíneo. Útil cuando hay acidosis severa y refractariedad a las catecolaminas.'
    },
    dose: {
      adult: {
        pt: 'Choque Séptico: Dose FIXA e CONSTANTE de 0,03 a 0,04 UI/minuto via Intravenosa contínua. (ATENÇÃO: Diferente das outras, ela NÃO se titula para cima e para baixo; dose fixa de protocolo).',
        es: 'Choque Séptico: Dosis FIJA y CONSTANTE de 0,03 a 0,04 UI/minuto vía Intravenosa continua. (¡ATENCIÓN: No se titula hacia arriba o abajo!).'
      },
      pediatric: {
        pt: '0,0005 a 0,002 UI/kg/minuto infusão contínua regulada em UTI.',
        es: '0,0005 a 0,002 UI/kg/minuto.'
      }
    },
    administration: {
      pt: [
        'DILUIÇÃO PADRÃO (Seringa ou Bomba): 1 ampola (20 UI / 1 mL) + 19 mL de Soro Fisiológico 0,9%, totalizando 20 mL de solução (Concentração final: 1 UI/mL).',
        'Regula-se a bomba em mL/h correspondente às unidades fixas (ex: 0,03 UI/min = 1,8 mL/h nesta diluição).',
        'OBRIGATÓRIO USAR EM ACESSO VENOSO CENTRAL.'
      ],
      es: [
        'DILUCIÓN ESTÁNDAR: 1 ampolla (20 UI) + 19 mL de SF 0,9%, total 20 mL (1 UI/mL). Administrar por bomba en Acceso Venoso Central.'
      ]
    },
    renalAdjustment: { required: false, message: { pt: 'Seguro em falência renal crônica, mas reduz a diurese drasticamente (efeito antidiurético V2 concomitante).', es: 'Seguro en falla renal, reduce diuresis.' } },
    hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste clínico.', es: 'Sin necesidad de ajuste.' } },
    commonAdverseEffects: { pt: ['Palidez extrema na pele e mucosas (Constrição cutânea feroz)', 'Cólica abdominal e flatulência intensa (Aperta o intestino)', 'Hiponatremia de diluição'], es: ['Palidez extrema en piel y mucosas', 'Cólicos abdominales intensos (vasoconstricción esplácnica)', 'Hiponatremia'] },
    dangerousAdverseEffects: { pt: ['NECROSE ISQUÊMICA DE EXTREMIDADES (Dedos, ponta do nariz e orelhas secam e morrem se associada a doses altas de nora)', 'Infarto Intestinal (Isquemia mesentérica)', 'Isquemia miocárdica aguda coronariana'], es: ['NECROSIS ISQUÉMICA DE EXTREMIDADES', 'Infarto Intestinal por isquemia mesentérica', 'Isquemia miocárdica'] },
    contraindications: {
      absolute: { pt: ['Hipersensibilidade conhecida à vasopressina sintética'], es: ['Hipersensibilidad conocida a la vasopresina sintética'] },
      relative: { pt: ['Doença arterial coronariana severa não revascularizada (risco de espasmo das pontes de safena/artérias)'] }
    },
    safetyFlags: {
      bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
      warning: { pt: 'A ARMADILHA DA TITULAÇÃO (NÃO AFOGUE O PACIENTE): Um erro comum de residentes de UTI é tentar "titular" a vasopressina na bomba igual fazem com a noradrenalina quando a pressão cai. Se você subir a vasopressina para mais de 0,04 UI/min, as artérias do coração e do intestino se fecham por completo, causando infarto do miocárdio e gangrena do intestino de forma fatal. Mantenha a dose fixa.', es: 'LA TRAMPA DE LA TITULACIÓN: No se debe titular como la noradrenalina. Si se aumenta la dosis a más de 0,04 UI/min, las arterias del corazón e intestino se cierran por completo, causando infarto y gangrena intestinal fatal. Mantenga dosis fija.' }
    },
    references: {
      pt: 'VASST Trial (NEJM 2008 - Vasopressin in Septic Shock); Surviving Sepsis Campaign Guidelines 2021; Manual de Emergências Clínicas USP.',
      es: 'VASST Trial (NEJM 2008); Guías de la Surviving Sepsis Campaign; Tratado de Cuidados Intensivos de la SATI.'
    }
  }

}); /* fim Object.assign EMERGENCIA_DRUGS_DB — BUILD 429 (Vasoativos UTI: noradrenalina + adrenalina + dobutamina + dopamina + vasopressina) */

})();
