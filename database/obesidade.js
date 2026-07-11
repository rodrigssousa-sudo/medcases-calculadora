/* =====================================================================
   MÓDULO DE OBESIDADE E CONTROLE METABÓLICO DE PESO (database/obesidade.js)

   BUILD 453 — Lote 1 (Inauguração Oficial do Módulo)
   semaglutida_obesidade, tirzepatida_obesidade, retatrutida
   ── PEPTÍDEOS INCRETÍNICOS (AGONISTAS GLP-1 / GIP / GLUCAGON) ──
   ===================================================================== */

(function () {
  'use strict';
  if (typeof window.OBESIDADE_DRUGS_DB !== 'object' || window.OBESIDADE_DRUGS_DB === null || Array.isArray(window.OBESIDADE_DRUGS_DB)) {
    window.OBESIDADE_DRUGS_DB = {};
  }
  if (typeof window.OBESIDADE_DRUGS_DB !== 'object' || window.OBESIDADE_DRUGS_DB === null) return;

  Object.assign(window.OBESIDADE_DRUGS_DB, {

  // ── PEPTÍDEOS INCRETÍNICOS (AGONISTAS GLP-1 / GIP / GLUCAGON) ──

/* ── SEMAGLUTIDA / WEGOVY (Agonista GLP-1) ─────────────────────────── */
    "semaglutida_obesidade": {
      name: { pt: 'Semaglutida (Uso na Obesidade)', es: 'Semaglutida (Uso en Obesidad)' },
      category: 'obesidade',
      class: { pt: 'Agonista do Receptor de GLP-1 (Glucagon-like Peptide-1) de Longa Duração', es: 'Agonista del Receptor de GLP-1 de Larga Duración' },
      indications: {
        pt: [
          'Controle de peso crônico em adultos com Obesidade (IMC >= 30 kg/m²) ou Sobrepeso (IMC >= 27 kg/m²) associado a pelo menos uma comorbidade (como Hipertensão, Dislipidemia ou Diabetes)',
          'Redução do risco de eventos cardiovasculares maiores (MACE) em adultos com sobrepeso/obesidade e doença cardiovascular estabelecida (Estratégia do Estudo SELECT)'
        ],
        es: [
          'Control de peso crónico en adultos con Obesidad (IMC >= 30) o Sobrepeso (IMC >= 27) con comorbilidades',
          'Reducción del riesgo cardiovascular (MACE) en obesidad (Estudio SELECT)'
        ]
      },
      commercialNames: { br: ['Wegovy (Específico para Obesidade)', 'Ozempic (Diabetes/Off-label Peso)', 'Rybelsus (Oral/Off-label)'], ar: ['Wegovy', 'Ozempic'] },
      presentation: {
        pt: ['Wegovy: Canetas injetáveis Subcutâneas de uso único pré-preenchidas nas doses de 0,25 mg, 0,5 mg, 1,0 mg, 1,7 mg e 2,4 mg'],
        es: ['Wegovy: Plumas inyectables monodosis listas para usar de 0,25 mg, 0,5 mg, 1,0 mg, 1,7 mg y 2,4 mg']
      },
      mechanism: {
        pt: 'O Simulador de Saciedade de Longa Duração. É um análogo de base peptídica do hormônio GLP-1 humano nativo modificado quimicamente (94% de homologia) acoplado a um diácido graxo. Essa alteração impede que ela seja destruída pela enzima DPP-4, fazendo com que dure 7 dias no sangue. Ela invade o cérebro (receptores do núcleo arqueado do hipotálamo), liga-se aos receptores de saciedade e desliga a fome física e os pensamentos compulsivos por comida, além de lentificar de forma drástica o esvaziamento do estômago.',
        es: 'Análogo del péptido similar al glucagón-1 (GLP-1) con un 94% de homología con el GLP-1 humano nativo. Su vida media prolongada se debe a la unión a albúmina y resistencia a la degradación por la enzima DPP-4. Actúa en el hipotálamo estimulando las neuronas de la saciedad (POMC) e inhibiendo las del apetito (NPY/AgRP), disminuyendo la ingesta calórica y retrasando el vaciamiento gástrico.'
      },
      dose: {
        adult: {
          pt: 'ESQUEMA RÍGIDO DE ESCALONAMENTO DE DOSE (Previne Vômitos Severos). Administrar via SUBCUTÂNEA, UMA VEZ POR SEMANA. Seguir estritamente o protocolo de 4 semanas em cada etapa:\n- Semanas 1 a 4: 0,25 mg SC por semana\n- Semanas 5 a 8: 0,5 mg SC por semana\n- Semanas 9 a 12: 1,0 mg SC por semana\n- Semanas 13 a 16: 1,7 mg SC por semana\n- Semana 17 em diante (DOSE DE MANUTENÇÃO ALVO CRÔNICA): 2,4 mg SC uma vez por semana.',
          es: 'ESQUEMA DE ESCALONAMIENTO GRADUAL SEMANAL (Evita náuseas severas). Inyección SUBCUTÁNEA, UNA VEZ POR SEMANA. Mantener cada dosis durante 4 semanas consecutivas:\n- Semanas 1-4: 0,25 mg/semana\n- Semanas 5-8: 0,5 mg/semana\n- Semanas 9-12: 1,0 mg/semana\n- Semanas 13-16: 1,7 mg/semana\n- Semana 17 en adelante (DOSIS DE MANTENIMIENTO META): 2,4 mg SC semanal.'
        },
        pediatric: {
          pt: 'Adolescentes >= 12 anos de idade: Seguir exatamente o mesmo protocolo de titulação escalonada do adulto até atingir a dose de manutenção de 2,4 mg SC por semana.',
          es: 'Aprobado en adolescentes >= 12 años siguiendo idéntico protocolo de titulación escalonada.'
        }
      },
      administration: {
        pt: ['Injeção via subcutânea semanal, administrada sempre no mesmo dia da semana, a qualquer hora do dia, com ou sem comida. Locais de aplicação: abdômen (afastado 5cm do umbigo), coxa ou parte superior do braço. Guardar as canetas estritamente sob refrigeração (2°C a 8°C). Após o primeiro uso da caneta multi-dose (Ozempic), ela pode ficar fora da geladeira por até 56 dias abaixo de 30°C.'],
        es: ['Inyección Subcutánea semanal el mismo día de la semana. Conservar en nevera (2°C-8°C). Tras abrir el dispositivo multidosis, puede conservarse a temperatura ambiente (< 30°C) hasta por 56 días.']
      },
      renalAdjustment: {
        required: false,
        message: {
          pt: 'Não requer ajuste de dose baseado no clearance de creatinina, mas monitorar função renal caso o paciente apresente desidratação grave por vômitos (risco de insuficiência renal aguda pré-renal).',
          es: 'No requiere ajuste inicial según TFG, pero vigilar función renal si hay deshidratación por vómitos.'
        }
      },
      hepaticAdjustment: {
        required: false,
        message: {
          pt: 'Sem necessidade de ajuste de dose, não depurada por metabolismo microsômico clássico.',
          es: 'Sin necesidad de ajuste.'
        }
      },
      commonAdverseEffects: {
        pt: [
          'NÁUSEAS INTENSAS E VÔMITOS (efeito adverso master no início ou nas trocas de doses)',
          'Constipação intestinal severa (o estômago e o intestino ficam lentos)',
          'Empachamento gástrico, refluxo e eructações com gosto de ovo podre',
          'Cefaleia e fadiga'
        ],
        es: [
          'NÁUSEAS INTENSAS Y VÓMITOS (muy frecuentes en la fase de titulación)',
          'Estreñimiento severo',
          'Reflujo gastroesofágico y eructos con olor fétido',
          'Cefalea'
        ]
      },
      dangerousAdverseEffects: {
        pt: [
          'PANCREATITE AGUDA NECROTIZANTE (inflamação destrutiva severa do pâncreas — exige interrupção imediata)',
          'Colelitíase Aguda e Colecistite (formação rápida de pedras e lama na vesícula devido ao esvaziamento lento)',
          'Obstrução Intestinal e Íleo Paralítico funcional'
        ],
        es: [
          'PANCREATITIS AGUDA NECROTIZANTE (Mortal, exige suspensión inmediata)',
          'Colecistitis aguda y barro biliar por hipomotilidad vesicular',
          'Íleo paralítico funcional'
        ]
      },
      contraindications: {
        absolute: {
          pt: [
            'Histórico pessoal ou familiar de Carcinoma Medular de Tireoide (CMT)',
            'Síndrome de Neoplasia Endócrina Múltipla tipo 2 (NEM 2)',
            'Gravidez e lactação ativa'
          ],
          es: [
            'Antecedente personal o familiar de Carcinoma Medular de Tiroides (CMT)',
            'Síndrome de Neoplasia Endocrina Múltiple tipo 2 (NEM 2)',
            'Embarazo'
          ]
        },
        relative: {
          pt: ['Histórico anterior de pancreatite aguda, gastroparesia diabética severa idiopática']
        }
      },
      safetyFlags: {
        bleedingRisk: false,
        renalHighRisk: false,
        hepaticCaution: false,
        antidoteAvailable: false,
        highAlertMedication: true,
        warning: {
          pt: 'O ALERTA DA CAIXA PRETA DO CÂNCER DE TIREOIDE E DA PANCREATITE: A Semaglutida ativa receptores que, em roedores, dispararam o crescimento de tumores agressivos na tireoide (Carcinoma Medular). Por isso, pergunte sempre se há casos de câncer de tireoide na família antes de prescrever. Além disso, se o paciente apresentar dor abdominal violenta em barra na barriga que irradia para as costas acompanhada de vômitos, corra para dosar Amilase e Lipase; risco de pancreatite aguda.',
          es: 'ALERTA DE CAJA NEGRA (CÁNCER DE TIROIDES Y PANCREATITIS): Contraindicado formalmente ante antecedentes de carcinoma medular de tiroides o NEM 2 debido al riesgo histológico de inducir tumores de células C. Vigilar la aparición sutil de dolor abdominal en barra irradiado a espalda, indicativo de pancreatitis aguda exocrina.'
        }
      },
      references: {
        pt: 'STEP Trials (1 a 5 - Semaglutide in Obesity Management - NEJM 2021); SELECT Trial (Cardiovascular outcomes - NEJM 2023); FDA Prescribing Info Wegovy.',
        es: 'STEP Trials (NEJM 2021); SELECT Trial (NEJM 2023); Ficha Técnica CIMA Wegovy.'
      }
    },

/* ── TIRZEPATIDA / ZEPBOUND (Duplo Agonista GLP-1 / GIP) ───────────── */
    "tirzepatida_obesidade": {
      name: { pt: 'Tirzepatida (Uso na Obesidade)', es: 'Tirzepatida (Uso en Obesidad)' },
      category: 'obesidade',
      class: { pt: 'Duplo Agonista dos Receptores de GIP e GLP-1 / Co-Agonista Incretínico de Alta Potência', es: 'Doble Agonista de los Receptores de GIP y GLP-1 / Co-Agonista Incretínico' },
      indications: {
        pt: [
          'Tratamento crônico de controle de peso em adultos com Obesidade ou Sobrepeso com comorbidades metabólicas (Eficácia de perda de peso superior à Semaglutida de acordo com o estudo SURMOUNT)'
        ],
        es: [
          'Control crónico del peso en adultos con Obesidad o Sobrepeso con comorbilidades (Superioridad en pérdida de peso demostrada en Programa SURMOUNT)'
        ]
      },
      commercialNames: { br: ['Mounjaro (Diabetes/Off-label Peso)', 'Zepbound (Específico para Obesidade)'], ar: ['Mounjaro', 'Zepbound'] },
      presentation: {
        pt: ['Canetas injetáveis Subcutâneas de dose única nas potências de 2,5 mg, 5 mg, 7,5 mg, 10 mg, 12,5 mg e 15 mg/0,5 mL'],
        es: ['Plumas monodosis Subcutáneas de 2,5 mg, 5 mg, 7,5 mg, 10 mg, 12,5 mg y 15 mg']
      },
      mechanism: {
        pt: 'O Duplo Motor Incretínico (Twincretin). É um peptídeo único de 39 aminoácidos modificado com uma cadeia de diácido graxo C20. Sua engenharia é genial: ela ativa ao mesmo tempo dois receptores incretínicos diferentes: o receptor de GLP-1 e o receptor de GIP (Polipeptídeo Insulinotrópico Dependente de Glicose). Enquanto o GLP-1 desliga a fome e esvazia o estômago, o GIP atua de forma sinérgica no tecido adiposo melhorando a queima de gordura e reduzindo fortemente as náuseas, permitindo doses muito mais altas e perda de peso próxima à de uma cirurgia bariátrica.',
        es: 'Molécula peptídica modificada ("Twincretina") que actúa como agonista dual del receptor de GIP (péptido insulinotrópico dependiente de glucosa) y del receptor de GLP-1. La activación concomitante de GIP optimiza el metabolismo lipídico en el adipocito y amortigua las vías del vómito en el tronco encefálico, permitiendo una mayor potencia anorexígena central con mejor tolerancia digestiva.'
      },
      dose: {
        adult: {
          pt: 'ESQUEMA DE ESCALONAMENTO DE 4 SEMANAS (Rigoroso). Administrar via SUBCUTÂNEA, UMA VEZ POR SEMANA. Iniciar com a dose sub-terapêutica de adaptação:\n- Semanas 1 a 4: 2,5 mg SC por semana\n- Semanas 5 a 8: 5,0 mg SC por semana\n- Se necessário mais perda de peso, aumentar em degraus de 2,5 mg a cada 4 semanas (Doses possíveis: 7,5 mg, 10 mg, 12,5 mg) até atingir a DOSE DE MANUTENÇÃO MÁXIMA ALVO de 15 mg SC uma vez por semana.',
          es: 'TITULACIÓN GRADUAL DE DOSIS SEMANALES. Inyección SUBCUTÁNEA, UNA VEZ POR SEMANA. Mantener cada escalón durante 4 semanas consecutivas:\n- Semanas 1-4: 2,5 mg/semana\n- Semanas 5-8: 5,0 mg/semana\n- Incrementar de a 2,5 mg cada mes según báscula hasta la DOSIS DE MANTENIMIENTO MÁXIMA META de 15 mg SC semanal.'
        },
        pediatric: {
          pt: 'Segurança e eficácia não estabelecidas em menores de 18 anos.',
          es: 'No recomendado en niños.'
        }
      },
      administration: {
        pt: ['Injeção via subcutânea semanal na gordura do abdômen, coxa ou braço. Deve ser aplicada sempre no mesmo dia da semana. Armazenar estritamente na geladeira (2°C a 8°C). Nunca congelar. Canetas de dose única devem ser descartadas imediatamente após o disparo do clique protetor.'],
        es: ['Uso subcutáneo semanal. Conservar bajo cadena de frío (2°C-8°C). Dispositivo monodosis descartable tras su activación automática.']
      },
      renalAdjustment: {
        required: false,
        message: {
          pt: 'Sem necessidade de ajuste de dose baseado no clearance renal.',
          es: 'Sin necesidad de ajuste.'
        }
      },
      hepaticAdjustment: {
        required: false,
        message: {
          pt: 'Não sofre depuração por enzimas microssomais, sem ajuste.',
          es: 'Sin necesidad de ajuste.'
        }
      },
      commonAdverseEffects: {
        pt: [
          'Náuseas leves a moderadas (significativamente menores que no início da semaglutida)',
          'Diarreia aquosa ou constipação intestinal alternadas',
          'Dispepsia, azia, dor abdominal e flatulência'
        ],
        es: [
          'Náuseas (amortiguadas por el efecto GIP)',
          'Diarrea o estreñimiento transitorios',
          'Dispepsia y dolor abdominal tipo cólico'
        ]
      },
      dangerousAdverseEffects: {
        pt: [
          'Pancreatite Aguda Necrotizante',
          'Colecistite calculosa aguda de urgência',
          'Desidratação grave com Insuficiência Renal Aguda pré-renal funcional por vômitos incoercíveis'
        ],
        es: [
          'Pancreatitis Aguda',
          'Colecistitis litiásica por estasis biliar',
          'Fallo renal agudo funcional por deshidratación'
        ]
      },
      contraindications: {
        absolute: {
          pt: [
            'Histórico pessoal ou familiar de Carcinoma Medular de Tireoide (CMT)',
            'Síndrome de Neoplasia Endócrina Múltipla tipo 2 (NEM 2)',
            'Gravidez ativa'
          ],
          es: [
            'Antecedente de Carcinoma Medular de Tiroides o NEM 2',
            'Embarazo y lactancia'
          ]
        },
        relative: {
          pt: ['Uso concomitante com outros medicamentos esvaziadores gástricos ou histórico de íleo paralítico']
        }
      },
      safetyFlags: {
        bleedingRisk: false,
        renalHighRisk: false,
        hepaticCaution: false,
        antidoteAvailable: false,
        highAlertMedication: true,
        warning: {
          pt: 'O ALERTA DA FALHA DO ANTICONCEPCIONAL ORAL: A Tirzepatida lentifica tanto o esvaziamento do estômago que altera a absorção das pílulas de Anticoncepcionais Orais. Mulheres que tomam anticoncepcional em pílula correm risco de engravidar devido à falha de barreira plasmática do hormônio. É OBRIGATÓRIO orientar a paciente a usar camisinha ou migrar para DIU durante a fase de escalonamento e por 4 semanas após cada aumento de dose.',
          es: 'ALERTA DE FRACASO DE ANTICONCEPTIVOS ORALES: Debido al marcado retraso en el vaciamiento gástrico, la absorción de las píldoras anticonceptivas orales se deprime críticamente de forma transitoria. Las mujeres en edad fértil DEBEN asociar un método anticonceptivo de barrera (preservativo) o migrar a un DIU durante toda la fase de escalonamiento de dosis.'
        }
      },
      references: {
        pt: 'SURMOUNT-1 to 4 Trials (Tirzepatide in Obesity - NEJM 2022); FDA Zepbound Approval Data; Guidelines da Sociedade Brasileira de Endocrinologia (SBEM).',
        es: 'SURMOUNT Trials (NEJM 2022); FDA Prescribing Information (Zepbound); Guías de la Sociedad Argentina de Nutrición (SAN).'
      }
    },

/* ── RETATRUTIDA (Triplo Agonista GLP-1 / GIP / Glucagon) ───────────── */
    "retatrutida": {
      name: { pt: 'Retatrutida', es: 'Retatrutide' },
      category: 'obesidade',
      class: { pt: 'Triplo Agonista dos Receptores de GIP, GLP-1 e Glucagon / Tri-Agonista Incretínico de Última Geração', es: 'Triple Agonista de los Receptores de GIP, GLP-1 y Glucagón / Tri-Agonista Incretínico' },
      indications: {
        pt: [
          'Manejo de controle crônico de peso em adultos com Obesidade severa ou gordura visceral generalizada com comorbidades (A maior potência de perda de peso da história da medicina, atingindo médias de até 24% a 26% de redução de peso corporal no estudo de Fase 3)'
        ]
      },
      commercialNames: { br: ['Retatrutida (Fase final de liberação regulada)'], ar: ['Retatrutide'] },
      presentation: {
        pt: ['Canetas injetáveis de dose única Subcutânea calibradas nas potências semanais de 1 mg, 2 mg, 4 mg, 8 mg e 12 mg'],
        es: ['Plumas monodosis Subcutáneas semanales de 2 mg, 4 mg, 8 mg e 12 mg']
      },
      mechanism: {
        pt: 'O Super-Triplo Motor Metabólico (Triple G). É um peptídeo modificado de engenharia molecular avançada que ativa de forma simultânea TRÊS receptores hormonais distintos: GIP, GLP-1 e Glucagon. O GLP-1 e o GIP desligam o centro da fome no cérebro e controlam a insulina. A grande e revolucionária novidade é o Glucagon: ele ativa receptores diretamente no fígado e tecidos periféricos, forçando o corpo a acelerar o gasto energético basal (termogênese), queimando gordura mesmo em repouso, derretendo a esteatose hepática (fígado gordo).',
        es: 'Péptido quimérico unicelular que actúa como triple agonista de los receptores de GIP, GLP-1 y Glucagón. Combina el control del apetito mediado por GLP-1/GIP con el estímulo del receptor de glucagón hepático, lo que incrementa de forma activa el gasto energético en reposo (termogénesis) y promueve una lipólisis agresiva de la grasa visceral y hepática.'
      },
      dose: {
        adult: {
          pt: 'ESQUEMA DE ESCALONAMENTO TRIPLO SEMANAL: Administrar via SUBCUTÂNEA, UMA VEZ POR SEMANA. Seguir rigidamente o ciclo mensal de segurança:\n- Semanas 1 a 4: 2 mg SC por semana\n- Semanas 5 a 8: 4 mg SC por semana\n- Semanas 9 a 12: 8 mg SC por semana\n- Semana 13 em diante (DOSE MÁXIMA DE MANUTENÇÃO ALVO CRÔNICA): 12 mg SC uma vez por semana.',
          es: 'TITULACIÓN TRIPLE SEMANAL CRÍTICA: Inyección SUBCUTÁNEA, UNA VEZ POR SEMANA. Mantener cada dosis durante 4 semanas seguidas de forma estricta:\n- Semanas 1-4: 2 mg/semana\n- Semanas 5-8: 4 mg/semana\n- Semanas 9-12: 8 mg/semana\n- Semana 13 en adelante (DOSIS MÁXIMA DE MANTENIMIENTO CRÓNICA): 12 mg SC semanal.'
        },
        pediatric: {
          pt: 'Uso contraindicado e não estudado em menores de 18 anos.',
          es: 'No recomendado en niños.'
        }
      },
      administration: {
        pt: ['Injeção subcutânea semanal no tecido adiposo do abdômen ou coxa, sempre no mesmo dia selecionado da semana. Guardar sob refrigeração contínua (2°C a 8°C). Exige acompanhamento laboratorial próximo de enzimas e perfil de frequência cardíaca.'],
        es: ['Uso subcutáneo semanal. Conservar bajo refrigeración continua obligatoria de cadena de frío.']
      },
      renalAdjustment: {
        required: false,
        message: {
          pt: 'Sem necessidade de ajuste por filtragem glomerular renal.',
          es: 'Sin necesidad de ajuste.'
        }
      },
      hepaticAdjustment: {
        required: false,
        message: {
          pt: 'Altamente eficaz em reverter a esteato-hepatite metabólica (MASH), sem necessidade de ajuste de dose.',
          es: 'Sin necesidad de ajuste; potente reductor de grasa hepática.'
        }
      },
      commonAdverseEffects: {
        pt: [
          'Náuseas, vômitos e refluxo gastresofágico',
          'Diarreia aquosa transitória',
          'TAQUICARDIA TRANSITÓRIA (Aceleração crônica do pulso em repouso por estímulo do glucagon no coração)',
          'Hiperestesia cutânea (sensibilidade dolorosa ao toque na pele, benigna)'
        ],
        es: [
          'Náuseas y dispepsia',
          'Diarrea',
          'TAQUICARDIA EN REPOSO (Aceleración del pulso por estímulo glucagónico cardíaco)',
          'Hiperestesia cutánea transitoria'
        ]
      },
      dangerousAdverseEffects: {
        pt: [
          'Arritmias cardíacas supraventriculares sustentadas (Fibrilação atrial ou taquicardia sinusal excessiva)',
          'Pancreatite Aguda necrotizante',
          'Crise de colecistite aguda com lama biliar profunda'
        ],
        es: [
          'Arritmias cardíacas supraventriculares por sobreestimulación del nodo sinusal',
          'Pancreatitis Aguda',
          'Colecistitis litiásica'
        ]
      },
      contraindications: {
        absolute: {
          pt: [
            'Histórico de Carcinoma Medular de Tireoide ou NEM 2',
            'Gravidez e lactação ativa',
            'Histórico de arritmias cardíacas graves ou Taquicardia Sinusal Inapropriada'
          ],
          es: [
            'Antecedente de Carcinoma Medular de Tiroides',
            'Arritmias cardíacas graves previas',
            'Embarazo'
          ]
        },
        relative: {
          pt: ['Histórico de doença inflamatória intestinal com diarreia crônica']
        }
      },
      safetyFlags: {
        bleedingRisk: false,
        renalHighRisk: false,
        hepaticCaution: false,
        antidoteAvailable: false,
        highAlertMedication: true,
        warning: {
          pt: 'O ALERTA DA ACELERAÇÃO DO CORAÇÃO (A TOXICIDADE DO GLUCAGON CARDÍACO): A Retatrutida possui um efeito colateral exclusivo no coração: como ela ativa o receptor de Glucagon, ela estimula diretamente os canais elétricos do nó sinusal. O batimento cardíaco do paciente em repouso SOBE em média de 5 a 10 batimentos por minuto de forma constante. É OBRIGATÓRIO rodar eletrocardiograma antes e monitorar o pulso; contraindicada em infartados recentes ou arritmias instáveis.',
          es: 'ALERTA DE TAQUICARDIA POR ESTÍMULO GLUCAGÓNICO: El agonismo sobre el receptor de glucagón ejerce un efecto cronotrópico positivo directo sobre el corazón, elevando el pulso basal de forma continua. Está contraindicado su uso en pacientes con arritmias auriculares activas o insuficiencia coronaria inestable por riesgo de taquicardización crítica.'
        }
      },
      references: {
        pt: 'Retatrutida Phase 2 and 3 Obesity Trials (NEJM 2023 - Lilly Study Group); ADA Scientific Sessions Progress Reports 2024-2026; Manual de Farmacologia Avançada.',
        es: 'Retatrutide Phase 2/3 Trials (NEJM 2023); American Diabetes Association (ADA) Sessions; Guías de Obesidad de la SAN.'
      }
    }

  }); /* fim Object.assign OBESIDADE_DRUGS_DB — BUILD 453 (semaglutida_obesidade + tirzepatida_obesidade + retatrutida — Peptídeos Incretínicos GLP-1/GIP/Glucagon para Obesidade) */
})();
