(function () {
  'use strict';
  if (typeof window.ANALGESIA_OPIOIDES_DRUGS_DB !== 'object' || Array.isArray(window.ANALGESIA_OPIOIDES_DRUGS_DB)) {
    window.ANALGESIA_OPIOIDES_DRUGS_DB = {};
  }
  Object.assign(window.ANALGESIA_OPIOIDES_DRUGS_DB, {

/* ── DIPIRONA (METAMIZOL) ───────────────────────────────────────────── */
    "dipirona": {
      "name": {
        "pt": "Dipirona (Metamizol)",
        "es": "Metamizol (Dipirona)"
      },
      "category": "analgesia",
      "class": {
        "pt": "Analgésico, antitérmico e antiespasmódico pirazolônico",
        "es": "Analgésico, antipirético y antiespasmódico pirazolónico"
      },
      "indications": {
        "pt": [
          "Dor aguda moderada a intensa, incluindo pós-operatória/pós-traumática e cólica",
          "Febre alta que não responde a outras medidas"
        ],
        "es": [
          "Dolor agudo moderado a intenso, incluido posoperatorio/postraumático y cólico",
          "Fiebre alta que no responde a otras medidas"
        ]
      },
      "commercialNames": {
        "br": [
          "Novalgina",
          "Dipirona"
        ],
        "ar": [
          "Novalgina",
          "Metamizol"
        ]
      },
      "presentation": {
        "pt": [
          "Comprimidos/cápsulas, gotas/solução oral e solução IV/IM; apresentações variam por mercado"
        ],
        "es": [
          "Comprimidos/cápsulas, gotas/solución oral y solución IV/IM; presentaciones variables según mercado"
        ]
      },
      "mechanism": {
        "pt": "O mecanismo não é completamente esclarecido. Há evidência de modulação central e periférica da síntese de prostaglandinas e efeitos sobre vias nociceptivas; não deve ser descrito como inibidor comprovado de 'COX-3'.",
        "es": "El mecanismo no está completamente aclarado. Existe evidencia de modulación central y periférica de la síntesis de prostaglandinas y efectos sobre vías nociceptivas; no debe describirse como inhibidor comprobado de 'COX-3'."
      },
      "dose": {
        "adult": {
          "pt": "≥15 anos e >53 kg: VO 500–1.000 mg por dose, até 4x/dia, máximo 4.000 mg/dia. Parenteral: 500–1.000 mg por dose em intervalos de 6–8 h; informação harmonizada da EMA permite máximo diário parenteral de 5.000 mg.",
          "es": "≥15 años y >53 kg: VO 500–1.000 mg por dosis, hasta 4x/día, máximo 4.000 mg/día. Parenteral: 500–1.000 mg por dosis en intervalos de 6–8 h; la información armonizada de EMA permite máximo diario parenteral de 5.000 mg."
        },
        "pediatric": {
          "pt": "Crianças/adolescentes até 14 anos: 8–16 mg/kg por dose; para febre, 10 mg/kg costuma ser suficiente. Usar formulação apropriada ao peso.",
          "es": "Niños/adolescentes hasta 14 años: 8–16 mg/kg por dosis; para fiebre, 10 mg/kg suele ser suficiente. Usar formulación apropiada al peso."
        }
      },
      "administration": {
        "pt": [
          "Usar a menor dose que controle dor/febre",
          "Administração parenteral deve ser lenta e com monitorização hemodinâmica devido ao risco de hipotensão",
          "Se houver febre, calafrios, odinofagia ou lesões mucosas durante ou logo após uso, suspender imediatamente e colher hemograma com diferencial"
        ],
        "es": [
          "Usar la menor dosis que controle dolor/fiebre",
          "La administración parenteral debe ser lenta y con monitorización hemodinámica por riesgo de hipotensión",
          "Si aparecen fiebre, escalofríos, odinofagia o lesiones mucosas durante o poco después del uso, suspender inmediatamente y obtener hemograma con diferencial"
        ]
      },
      "renalAdjustment": {
        "required": true,
        "message": {
          "pt": "Evitar doses altas repetidas em disfunção renal importante; não há fator agudo universal. Titular à menor dose eficaz.",
          "es": "Evitar dosis altas repetidas en disfunción renal importante; no existe un factor agudo universal. Titular a la menor dosis eficaz."
        }
      },
      "hepaticAdjustment": {
        "required": true,
        "message": {
          "pt": "Evitar doses altas repetidas em disfunção hepática importante; usar menor dose eficaz e ampliar intervalo conforme clínica.",
          "es": "Evitar dosis altas repetidas en disfunción hepática importante; usar la menor dosis eficaz y ampliar intervalo según clínica."
        }
      },
      "commonAdverseEffects": {
        "pt": [
          "Hipotensão, especialmente com administração IV rápida",
          "Náusea",
          "Reações cutâneas"
        ],
        "es": [
          "Hipotensión, especialmente con administración IV rápida",
          "Náuseas",
          "Reacciones cutáneas"
        ]
      },
      "dangerousAdverseEffects": {
        "pt": [
          "Agranulocitose",
          "Anafilaxia/choque",
          "Reações cutâneas graves"
        ],
        "es": [
          "Agranulocitosis",
          "Anafilaxia/shock",
          "Reacciones cutáneas graves"
        ]
      },
      "contraindications": {
        "absolute": {
          "pt": [
            "Agranulocitose prévia por metamizol ou outra pirazolona/pirazolidina",
            "Disfunção de medula óssea ou doença hematopoética relevante",
            "Hipersensibilidade ao metamizol/pirazolonas",
            "Terceiro trimestre da gestação"
          ],
          "es": [
            "Agranulocitosis previa por metamizol u otra pirazolona/pirazolidina",
            "Disfunción de médula ósea o enfermedad hematopoyética relevante",
            "Hipersensibilidad a metamizol/pirazolonas",
            "Tercer trimestre del embarazo"
          ]
        },
        "relative": {
          "pt": [
            "Hipotensão/instabilidade hemodinâmica",
            "Disfunção renal ou hepática importante"
          ],
          "es": [
            "Hipotensión/inestabilidad hemodinámica",
            "Disfunción renal o hepática importante"
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
          "pt": "A agranulocitose não é dose-dependente, pode surgir durante ou logo após o tratamento e pode ocorrer mesmo após usos prévios sem problemas. Hemograma de rotina não demonstrou benefício; investigar imediatamente se houver sintomas.",
          "es": "La agranulocitosis no depende de la dosis, puede aparecer durante o poco después del tratamiento y puede ocurrir incluso tras usos previos sin problemas. El hemograma rutinario no demostró beneficio; investigar de inmediato si hay síntomas."
        }
      }
    },

/* ── PARACETAMOL (ACETAMINOFENO) ────────────────────────────────────── */
    "paracetamol": {
      name: { pt: 'Paracetamol (Acetaminofeno)', es: 'Paracetamol (Acetaminofén)' },
      category: 'analgesia',
      class: { pt: 'Analgésico e Antitérmico (Inibidor Central)', es: 'Analgésico y Antipirético (Inhibidor Central)' },
      indications: {
        pt: ['Febre e Dor de intensidade leve a moderada', 'Analgésico de escolha na gravidez, pacientes com úlcera péptica, dengue ou alergia a AINEs'],
        es: ['Fiebre y Dolor de intensidad leve a moderada', 'Analgésico de elección en el embarazo, pacientes con úlcera péptica, dengue o alergia a AINEs']
      },
      commercialNames: { br: ['Tylenol', 'Tylenol IV'], ar: ['Tafirol', 'Tylenol'] },
      presentation: { pt: ['Comprimidos 500 mg, 750 mg', 'Gotas 200 mg/mL', 'Frasco IV (Paracetamol Endovenoso) 10 mg/mL (100 mL = 1g)'], es: ['Comprimidos 500 mg, 750 mg', 'Gotas 200 mg/mL', 'Vial IV (Paracetamol Endovenoso) 10 mg/mL (100 mL = 1g)'] },
      mechanism: {
        pt: 'Ação primariamente no Sistema Nervoso Central (Centro termorregulador do hipotálamo). Inibe a síntese de prostaglandinas no cérebro. Devido à fraca atuação nos tecidos periféricos repletos de peróxidos locais, NÃO possui atividade anti-inflamatória, NÃO agride a mucosa gástrica e NÃO inibe a agregação plaquetária.',
        es: 'Acción primariamente en el Sistema Nervioso Central (Centro termorregulador del hipotálamo). Inhibe la síntesis de prostaglandinas en el cerebro. Debido a la débil actuación en los tejidos periféricos repletos de peróxidos locales, NO posee actividad antiinflamatoria, NO agrede la mucosa gástrica y NO inhibe la agregación plaquetaria.'
      },
      dose: {
        adult: {
          pt: '500 a 1000 mg VO ou IV a cada 6 a 8 horas. DOSE MÁXIMA ABSOLUTA: 4 gramas/dia (4.000 mg) em adultos saudáveis.',
          es: '500 a 1000 mg VO o IV cada 6 a 8 horas. DOSIS MÁXIMA ABSOLUTA: 4 gramos/día (4.000 mg) en adultos sanos.'
        },
        pediatric: {
          pt: '10 a 15 mg/kg por dose a cada 6 horas (Máx de 5 doses em 24h).',
          es: '10 a 15 mg/kg por dosis cada 6 horas (Máx de 5 dosis en 24h).'
        }
      },
      administration: { pt: ['Pode ser tomado com o estômago vazio.', 'A formulação IV deve ser infundida em 15 minutos.'], es: ['Puede ser tomado con el estómago vacío.', 'La formulación IV debe ser infundida en 15 minutos.'] },
      renalAdjustment: { required: false, message: { pt: 'Aumentar intervalo para 8 horas se ClCr < 30.', es: 'Aumentar intervalo a 8 horas si ClCr < 30.' } },
      hepaticAdjustment: { required: true, message: { pt: 'CUIDADO MÁXIMO. Em cirróticos, etilistas crônicos graves ou pacientes subnutridos graves, a dose MÁXIMA cai de 4g para apenas 2 gramas/dia.', es: 'CUIDADO MÁXIMO. En cirróticos, etilistas crónicos graves o pacientes desnutridos graves, la dosis MÁXIMA cae de 4g a solo 2 gramos/día.' } },
      commonAdverseEffects: { pt: ['Quase isento de efeitos colaterais em doses terapêuticas (altamente tolerado)'], es: ['Casi exento de efectos colaterales en dosis terapéuticas (altamente tolerado)'] },
      dangerousAdverseEffects: { pt: ['Hepatite Fulminante Tóxica (Necrose Centrolobular letal) devido ao acúmulo do metabólito tóxico NAPQI em superdosagens'], es: ['Hepatitis Fulminante Tóxica (Necrosis Centrolobulillar letal) debido a la acumulación del metabolito tóxico NAPQI en sobredosis'] },
      contraindications: {
        absolute: { pt: ['Falência hepática aguda severa ativa'], es: ['Falla hepática aguda severa activa'] },
        relative: { pt: ['Uso associado com Rifampicina ou Isoniazida'], es: ['Uso asociado con Rifampicina o Isoniazida'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: true, highAlertMedication: false,
        warning: { pt: 'É O CAMPEÃO DE OVERDOSE ACIDENTAL: Muitos xaropes contra gripe, analgésicos combinados (ex: Tylex, Paco) contêm paracetamol oculto na fórmula. O paciente toma o Tylenol e o Paco juntos, ultrapassando os 4 gramas letais/dia, destruindo o fígado em 48h. Antídoto: Acetilcisteína (NAC).', es: 'ES EL CAMPEÓN DE SOBREDOSIS ACCIDENTAL: Muchos jarabes contra gripe, analgésicos combinados contienen paracetamol oculto en la fórmula. El paciente toma Tylenol y otro remedio juntos, superando los 4 gramos letales/día, destruyendo el hígado en 48h. Antídoto: Acetilcisteína (NAC).' }
      }
    },

/* ── CETOPROFENO (AINE) ─────────────────────────────────────────────── */
    "cetoprofeno": {
      name: { pt: 'Cetoprofeno', es: 'Ketoprofeno' },
      category: 'analgesia',
      class: { pt: 'Anti-inflamatório Não Esteroidal (AINE)', es: 'Antiinflamatorio No Esteroideo (AINE)' },
      indications: {
        pt: ['Dor inflamatória musculoesquelética aguda e lombalgia', 'Cólica nefrética (Cálculo Renal - Droga de Ouro no PS) e gota', 'Poupador de opioides em pós-operatório (junto com dipirona)'],
        es: ['Dolor inflamatorio musculoesquelético agudo y lumbalgia', 'Cólico nefrítico (Cálculo Renal - Droga de Oro en Urgencias) y gota', 'Ahorrador de opioides en posoperatorio (junto con metamizol)']
      },
      commercialNames: { br: ['Profenid', 'Profenid IV'], ar: ['Ketoprofeno'] },
      presentation: { pt: ['Ampolas IV liofilizadas 100 mg', 'Ampolas IM 100 mg (Com álcool benzílico e lidocaína, NUNCA FAZER NA VEIA)', 'Comprimidos 50 mg e 100 mg'], es: ['Ampollas IV liofilizadas 100 mg', 'Ampollas IM 100 mg (Con alcohol bencílico y lidocaína, NUNCA HACER EN LA VENA)', 'Comprimidos 50 mg y 100 mg'] },
      mechanism: {
        pt: 'Bloqueador potente, reversível e não-seletivo das enzimas Ciclooxigenase (COX-1 e COX-2). Ao bloquear a COX-2, desliga a inflamação e a dor. Ao bloquear a COX-1, desliga a proteção da parede do estômago e desliga a capacidade das plaquetas de se grudarem (aumenta o sangramento). Impede a dilatação da arteríola do rim gerada pelas prostaglandinas.',
        es: 'Bloqueador potente, reversible y no selectivo de las enzimas Ciclooxigenasa (COX-1 y COX-2). Al bloquear la COX-2, apaga la inflamación y el dolor. Al bloquear la COX-1, apaga la protección de la pared del estómago y apaga la capacidad de las plaquetas de pegarse (aumenta el sangrado). Impide la dilatación de la arteriola del riñón generada por prostaglandinas.'
      },
      dose: {
        adult: {
          pt: '100 mg IV, IM ou VO a cada 12 horas. (Dose máxima de 300 mg/dia em curtos períodos).',
          es: '100 mg IV, IM o VO cada 12 horas. (Dosis máxima de 300 mg/día en cortos períodos).'
        },
        pediatric: {
          pt: 'Uso não rotineiro sistêmico em menores de 1 ano. (1 a 2 mg/kg/dose).',
          es: 'Uso no rutinario sistémico en menores de 1 año. (1 a 2 mg/kg/dosis).'
        }
      },
      administration: { pt: ['PERIGO: A apresentação Intramuscular (IM) e Endovenosa (IV) são fisicamente diferentes na farmácia. Injetar o frasco IM na veia causará arritmias e flebite aguda maciça. O IV deve ser diluído em 100 mL de SF0,9% e correr em 20 min.'], es: ['PELIGRO: La presentación Intramuscular (IM) y Endovenosa (IV) son físicamente diferentes en la farmacia. Inyectar el vial IM en la vena causará arritmias y flebitis aguda masiva. El IV debe diluirse en 100 mL de SF0,9% y pasar en 20 min.'] },
      renalAdjustment: { required: true, message: { pt: 'Evitar ou reduzir se ClCr < 50. CONTRAINDICADO em ClCr < 30 mL/min (causa fechamento da arteríola aferente e infarto agudo do rim).', es: 'Evitar o reducir si ClCr < 50. CONTRAINDICADO en ClCr < 30 mL/min (causa cierre de la arteriola aferente e infarto agudo del riñón).' } },
      hepaticAdjustment: { required: false, message: { pt: 'Monitorar em insuficiência severa.', es: 'Monitorizar en insuficiencia severa.' } },
      commonAdverseEffects: { pt: ['Dispepsia (Dor e Queimação gástrica profunda)', 'Hipertensão arterial leve', 'Edema leve de pernas'], es: ['Dispepsia (Dolor y Quemazón gástrica profunda)', 'Hipertensión arterial leve', 'Edema leve de piernas'] },
      dangerousAdverseEffects: { pt: ['Lesão Renal Aguda pré-renal oligúrica fatal em idosos desidratados', 'Hemorragia Digestiva Alta (Úlcera sangrante ativa)', 'Crise Asmática mediada por desvio de Leucotrienos ("Asma do AAS")'], es: ['Lesión Renal Aguda prerrenal oligúrica fatal en ancianos deshidratados', 'Hemorragia Digestiva Alta (Úlcera sangrante activa)', 'Crisis Asmática mediada por desvío de Leucotrienos ("Asma de la Aspirina")'] },
      contraindications: {
        absolute: { pt: ['História de hemorragia ou úlcera gastrointestinal', 'Dengue ou infecções virais hemorrágicas suspeitas', 'Cirurgia de Revascularização do Miocárdio (Ponte de Safena) recente'], es: ['Historia de hemorragia o úlcera gastrointestinal', 'Dengue o infecciones virales hemorrágicas sospechosas', 'Cirugía de Revascularización Miocárdica reciente'] },
        relative: { pt: ['Idosos em uso de anticoagulantes', 'Insuficiência Cardíaca Congestiva (pois ele retém fluidos e piora o coração)'], es: ['Ancianos en uso de anticoagulantes', 'Insuficiencia Cardíaca Congestiva (pues retiene fluidos y empeora el corazón)'] }
      },
      safetyFlags: {
        bleedingRisk: true, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A "Tríplice Mortal do Rim": É erro gravíssimo prescrever um AINE (Cetoprofeno) para um paciente idoso que já toma em casa um IECA/BRA (Losartana/Enalapril) + Um Diurético (Furosemida/Hidroclorotiazida). Essa combinação tritura o rim, desligando todas as válvulas de pressão de filtração simultaneamente.', es: 'La "Triple Mortal del Riñón": Es error gravísimo prescribir un AINE (Ketoprofeno) para un anciano que ya toma en casa un IECA/ARAII (Losartán/Enalapril) + Un Diurético (Furosemida/Hidroclorotiazida). Esta combinación tritura el riñón, apagando todas las válvulas de presión de filtración.' }
      }
    }, // vírgula adicionada; BUILD 362 Lote 2 blocos seguem

/* ── IBUPROFENO ─────────────────────────────────────────────────────── */
    "ibuprofeno": {
      name: { pt: 'Ibuprofeno', es: 'Ibuprofeno' },
      category: 'analgesia',
      class: { pt: 'Anti-inflamatório Não Esteroidal (AINE)', es: 'Antiinflamatorio No Esteroideo (AINE)' },
      indications: {
        pt: ['Dor e Febre leve a moderada (Especialmente pediatria e ortopedia)', 'Fechamento do canal arterial pérvio em neonatos', 'Dismenorreia primária'],
        es: ['Dolor y Fiebre leve a moderada (Especialmente pediatría y ortopedia)', 'Cierre del conducto arterioso persistente en neonatos', 'Dismenorrea primaria']
      },
      commercialNames: { br: ['Alivium', 'Advil', 'Motrin'], ar: ['Ibuprofeno', 'Actron'] },
      presentation: { pt: ['Comprimidos/Cápsulas 200 mg, 400 mg, 600 mg', 'Suspensão oral 50 mg/mL, 100 mg/mL'], es: ['Comprimidos/Cápsulas 200 mg, 400 mg, 600 mg', 'Suspensión oral 50 mg/mL, 100 mg/mL'] },
      mechanism: {
        pt: 'Bloqueador reversível das enzimas COX-1 e COX-2. Impede a conversão do ácido araquidônico em prostaglandinas, substâncias que geram dor, dilatam vasos na inflamação e regulam a febre no cérebro. É o AINE com o melhor perfil de segurança gastrointestinal e renal (embora os riscos existam), sendo amplamente prescrito.',
        es: 'Bloqueador reversible de las enzimas COX-1 y COX-2. Impide la conversión del ácido araquidónico en prostaglandinas, sustancias que generan dolor, dilatan vasos en la inflamación y regulan la fiebre en el cerebro. Es el AINE con el mejor perfil de seguridad gastrointestinal y renal.'
      },
      dose: {
        adult: {
          pt: '400 a 600 mg VO a cada 6 ou 8 horas. Dose máxima diária: 3.200 mg.',
          es: '400 a 600 mg VO cada 6 u 8 horas. Dosis máxima diaria: 3.200 mg.'
        },
        pediatric: {
          pt: '5 a 10 mg/kg/dose a cada 6 ou 8 horas. (Excelente antitérmico para > 6 meses).',
          es: '5 a 10 mg/kg/dosis cada 6 u 8 horas. (Excelente antitérmico para > 6 meses).'
        }
      },
      administration: { pt: ['Tomar com alimentos para minimizar a irritação gástrica direta.'], es: ['Tomar con alimentos para minimizar la irritación gástrica directa.'] },
      renalAdjustment: { required: true, message: { pt: 'Evitar em ClCr < 30 mL/min e em pacientes com insuficiência cardíaca congestiva severa.', es: 'Evitar en ClCr < 30 mL/min y en pacientes con insuficiencia cardíaca congestiva severa.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Seguro em uso de curto prazo.', es: 'Seguro en uso de corto plazo.' } },
      commonAdverseEffects: { pt: ['Azia (Pirose) e dor de estômago', 'Zumbido leve'], es: ['Acidez y dolor de estómago', 'Zumbido leve'] },
      dangerousAdverseEffects: { pt: ['Úlcera gástrica perfurada / Hemorragia', 'Insuficiência Renal Aguda', 'Aumento de risco trombótico cardiovascular (se uso em doses altíssimas crônicas)'], es: ['Úlcera gástrica perforada / Hemorragia', 'Insuficiencia Renal Aguda', 'Aumento de riesgo trombótico cardiovascular (si uso en dosis altísimas crónicas)'] },
      contraindications: {
        absolute: { pt: ['Alergia a AAS (Risco de crise de asma fatal cruzada)', 'Terceiro trimestre de gravidez (Fecha prematuramente o coração do feto)'], es: ['Alergia a AAS (Riesgo de crisis de asma fatal cruzada)', 'Tercer trimestre de embarazo (Cierra prematuramente el corazón del feto)'] },
        relative: { pt: ['Idosos desidratados'], es: ['Ancianos deshidratados'] }
      },
      safetyFlags: {
        bleedingRisk: true, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'Atenção Pediátrica: Ao prescrever Ibuprofeno gotas, instrua claramente os pais. As concentrações variam (50 mg/mL ou 100 mg/mL). Errar a gota significa dar o dobro ou metade da dose para o bebê.', es: 'Atención Pediátrica: Al prescribir Ibuprofeno gotas, instruya claramente a los padres. Las concentraciones varían (50 mg/mL o 100 mg/mL). Equivocarse en la gota significa dar el doble o mitad de la dosis al bebé.' }
      }
    },

/* ── CETOROLACO (TORAGESIC) ─────────────────────────────────────────── */
    "cetorolaco": {
      name: { pt: 'Cetorolaco (Trometamol Cetorolaco)', es: 'Ketorolaco' },
      category: 'analgesia',
      class: { pt: 'Anti-inflamatório Não Esteroidal (Potência Analgésica Elevada)', es: 'Antiinflamatorio No Esteroideo (Potencia Analgésica Elevada)' },
      indications: {
        pt: ['Dor aguda de moderada a severa (Cólicas renais puras, traumas, pós-operatório cirúrgico)', 'Poupador agressivo de opioides'],
        es: ['Dolor agudo de moderado a severo (Cólicos renales puros, traumas, posoperatorio quirúrgico)', 'Ahorrador agresivo de opioides']
      },
      commercialNames: { br: ['Toragesic'], ar: ['Sinalgia', 'Dolten'] },
      presentation: { pt: ['Ampolas IV/IM 30 mg/mL', 'Comprimidos Sublinguais 10 mg'], es: ['Ampollas IV/IM 30 mg/mL', 'Comprimidos Sublinguales 10 mg'] },
      mechanism: {
        pt: 'AINE extremamente agressivo. Bloqueia COX-1 e COX-2. Seu diferencial é ter um poder analgésico sistêmico equivalente ao de 10 mg de Morfina injetável, mas SEM causar depressão respiratória ou dependência. O preço desse poder é uma inibição violenta da função plaquetária e risco altíssimo de hemorragia gástrica.',
        es: 'AINE extremadamente agresivo. Bloquea COX-1 y COX-2. Su diferencial es tener un poder analgésico sistémico equivalente al de 10 mg de Morfina inyectable, pero SIN causar depresión respiratoria o dependencia. El precio de este poder es una inhibición violenta de la función plaquetaria y altísimo riesgo de hemorragia.'
      },
      dose: {
        adult: {
          pt: 'IV ou IM: 30 mg a cada 8 horas. VO/Sublingual: 10 a 20 mg a cada 6 ou 8 horas.',
          es: 'IV o IM: 30 mg cada 8 horas. VO/Sublingual: 10 a 20 mg cada 6 u 8 horas.'
        },
        pediatric: {
          pt: '0,5 mg/kg IV ou IM em dose única ou a cada 6h (Máx 15mg/dose).',
          es: '0,5 mg/kg IV o IM en dosis única o cada 6h (Máx 15mg/dosis).'
        }
      },
      administration: { pt: ['Bolus IV direto (puro ou diluído) lentamente em 15 segundos.', 'O Comprimido Sublingual age quase na mesma velocidade que a injeção.'], es: ['Bolo IV directo (puro o diluido) lentamente en 15 segundos.', 'El Comprimido Sublingual actúa casi a la misma velocidad que la inyección.'] },
      renalAdjustment: { required: true, message: { pt: 'Altamente nefrotóxico em doses plenas crônicas. Em idosos (> 65 anos) ou peso < 50 kg ou DRC leve: REDUZIR A DOSE para 15 mg IV a cada 8h. ClCr < 30: CONTRAINDICADO.', es: 'Altamente nefrotóxico en dosis plenas crónicas. En ancianos (> 65 años) o peso < 50 kg o ERC leve: REDUCIR LA DOSIS a 15 mg IV cada 8h. ClCr < 30: CONTRAINDICADO.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste agudo.', es: 'Sin necesidad de ajuste agudo.' } },
      commonAdverseEffects: { pt: ['Dor e ardor no local da injeção', 'Dispepsia e azia'], es: ['Dolor y ardor en el sitio de inyección', 'Dispepsia y acidez'] },
      dangerousAdverseEffects: { pt: ['Hemorragia digestiva catastrófica', 'Insuficiência Renal Aguda (se paciente desidratado)', 'Sangramento do sítio cirúrgico'], es: ['Hemorragia digestiva catastrófica', 'Insuficiencia Renal Aguda (si paciente deshidratado)', 'Sangrado del sitio quirúrgico'] },
      contraindications: {
        absolute: { pt: ['REGRA DOS 5 DIAS: O uso total de cetorolaco (injetável + oral combinados) NUNCA PODE ULTRAPASSAR 5 DIAS corridos. Após o 5º dia, a taxa de hemorragia fatal dispara.', 'Sangramento ativo, cirurgias de alto risco de sangramento'], es: ['REGLA DE LOS 5 DÍAS: El uso total de ketorolaco (inyectable + oral) NUNCA PUEDE SUPERAR 5 DÍAS. Tras el 5º día, la tasa de hemorragia fatal se dispara.', 'Sangrado activo, cirugías de alto riesgo'] },
        relative: { pt: ['Uso associado de varfarina ou heparina'], es: ['Uso asociado de warfarina o heparina'] }
      },
      safetyFlags: {
        bleedingRisk: true, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'Maravilhoso no Pronto-Socorro para tirar com a mão a dor da cólica renal, substituindo opioides. Mas nunca deixe o paciente ir para casa com uma caixa de Toragesic sem frisar que ele deve jogar a caixa fora após 5 dias de uso contínuo.', es: 'Maravilloso en Urgencias para quitar el dolor del cólico renal, sustituyendo opioides. Pero nunca deje que el paciente vaya a casa con una caja de Toragesic sin enfatizar que debe tirarla tras 5 días.' }
      }
    }

  }); /* fim Object.assign ANALGESIA_OPIOIDES_DRUGS_DB — BUILD 356 Lote 1 (Analgésicos Básicos: Dipirona/Paracetamol/Cetoprofeno) + BUILD 362 Lote 2 (Ibuprofeno + Cetorolaco) */
})();


/* MEDCASES_GOLD120_GROUP12_R4_analgesia_opioides_js */
;(() => {
  const __gold = {"dipirona":{"sourceModule":"analgesia_opioides.js","pt":{"name":"Dipirona (metamizol)","class":"Analgésico e antipirético não opioide do grupo das pirazolonas.","pharmacologicClass":"Pirazolona com ação analgésica, antipirética e espasmolítica.","mechanism":"Pró-fármaco convertido em metabólitos ativos; o efeito envolve modulação da síntese de prostaglandinas e da nocicepção central/periférica.","pharmacodynamics":"Reduz dor e febre; IV rápida pode causar hipotensão; raramente ocorrem discrasias sanguíneas graves.","pharmacokinetics":"Hidrólise rápida a metabólitos ativos, metabolismo subsequente hepático e eliminação predominantemente renal de metabólitos.","indications":"Dor aguda intensa ou crônica e febre que não responde a outras medidas, conforme produto/país.","commercialNames":"Dipirona, metamizol, Nolotil e marcas locais.","presentation":"Solução injetável 500 mg/mL e apresentações orais; confirmar sal e concentração local.","dose":"Adultos/adolescentes ≥15 anos: usar menor dose eficaz. Cápsula 575 mg: 575 mg por dose a cada 4–6 h, máximo 3.450 mg/dia; formulação injetável possui tabela própria por peso.","pediatricDose":"Até 14 anos: 8–16 mg/kg por dose; para febre, 10 mg/kg costuma ser suficiente. Respeitar idade/peso e apresentação da bula.","renalDose":"Em idosos, debilitados e depuração de creatinina reduzida, reduzir dose e evitar doses altas repetidas; sem tabela universal de CrCl para todas as apresentações.","hepaticDose":"Evitar doses altas repetidas em insuficiência hepática; não existe tabela universal validada para todas as apresentações.","commonAdverseEffects":"Náusea, hipotensão, tontura, reações cutâneas e desconforto gastrointestinal.","dangerousAdverseEffects":"Agranulocitose potencialmente fatal, pancitopenia/aplasia, anafilaxia/choque, reações cutâneas graves e hipotensão importante.","adverseEffects":"Agranulocitose é idiossincrática, pode ocorrer durante ou logo após o tratamento e não é dose-dependente.","contraindications":"Agranulocitose prévia por metamizol/pirazolonas, doença medular/hematopoiética, hipersensibilidade e contraindicações específicas.","interactions":"Metotrexato pode aumentar hematotoxicidade; ciclosporina pode ter níveis reduzidos; atenção a outros mielotóxicos e anti-hipertensivos.","monitoring":"Diante de febre, calafrios, odinofagia ou lesões mucosas, suspender e obter hemograma com diferencial imediatamente; EMA não recomenda hemograma rotineiro como prevenção.","administration":"IV ou IM apenas quando via oral não for adequada; IV lenta e com monitorização de pressão arterial.","preparation":"Solução injetável 500 mg/mL: confirmar dose em mg e volume; respeitar compatibilidades da bula.","infusionProtocol":"Se IV, administrar lentamente conforme ficha técnica para reduzir hipotensão; não usar velocidade empírica não prevista.","pregnancy":"Avaliar risco-benefício e trimestre; seguir informação específica do produto e evitar uso sem indicação clara.","lactation":"Metabólitos são excretados no leite; seguir a bula local quanto a intervalo após dose e alternativas.","specialPopulations":"Maior cautela em hipotensão, hipovolemia, idosos, insuficiência renal/hepática e risco hematológico.","patientEducation":"Suspender e procurar atendimento urgente se surgirem febre, calafrios, dor de garganta ou úlceras de mucosa.","clinicalPearls":"Agranulocitose pode surgir mesmo após uso prévio sem complicações e não depende da dose.","guidelineRecommendations":"EMA mantém benefício favorável nas indicações autorizadas, reforçando reconhecimento precoce e suspensão diante de sintomas sugestivos.","safetyFlags":"Agranulocitose idiossincrática; hipotensão IV; anafilaxia; hemograma de rotina não é estratégia preventiva.","alerts":"Se houver suspeita de agranulocitose, suspender antes do resultado e não reintroduzir se confirmada.","references":["https://cima.aemps.es/cima/dochtml/ft/88385/FT_88385.html","https://www.ema.europa.eu/en/medicines/human/referrals/metamizole-containing-medicinal-products-0","https://www.aemps.gob.es/informa/metamizol-y-riesgo-de-agranulocitosis-conclusiones-de-la-evaluacion-europea/"],"presentations":"Solução injetável 500 mg/mL e apresentações orais; confirmar sal e concentração local.","ref":"Fontes regulatórias e bula oficial revisadas para o ciclo Gold120 (2026)."},"es":{"name":"Metamizol (dipirona)","class":"Analgésico y antipirético no opioide del grupo de las pirazolonas.","pharmacologicClass":"Pirazolona con acción analgésica, antipirética y espasmolítica.","mechanism":"Profármaco convertido en metabolitos activos; el efecto incluye modulación de prostaglandinas y nocicepción central/periférica.","pharmacodynamics":"Reduce dolor y fiebre; IV rápida puede causar hipotensión; raramente aparecen discrasias sanguíneas graves.","pharmacokinetics":"Hidrólisis rápida a metabolitos activos, metabolismo hepático posterior y eliminación predominantemente renal de metabolitos.","indications":"Dolor agudo intenso o crónico y fiebre que no responde a otras medidas, según producto/país.","commercialNames":"Metamizol, dipirona, Nolotil y marcas locales.","presentation":"Solución inyectable 500 mg/mL y presentaciones orales; confirmar sal y concentración local.","dose":"Adultos/adolescentes ≥15 años: usar menor dosis eficaz. Cápsula 575 mg: 575 mg por dosis cada 4–6 h, máximo 3.450 mg/día; formulación inyectable tiene tabla propia por peso.","pediatricDose":"Hasta 14 años: 8–16 mg/kg por dosis; para fiebre, 10 mg/kg suele ser suficiente. Respetar edad/peso y formulación de la ficha.","renalDose":"En adultos mayores, debilitados y aclaramiento reducido, reducir dosis y evitar dosis altas repetidas; sin tabla universal de CrCl para todas las formulaciones.","hepaticDose":"Evitar dosis altas repetidas en insuficiencia hepática; no existe tabla universal validada para todas las formulaciones.","commonAdverseEffects":"Náuseas, hipotensión, mareos, reacciones cutáneas y molestias gastrointestinales.","dangerousAdverseEffects":"Agranulocitosis potencialmente mortal, pancitopenia/aplasia, anafilaxia/choque, reacciones cutáneas graves e hipotensión importante.","adverseEffects":"La agranulocitosis es idiosincrática, puede aparecer durante o poco después del tratamiento y no depende de la dosis.","contraindications":"Agranulocitosis previa por metamizol/pirazolonas, enfermedad medular/hematopoyética, hipersensibilidad y contraindicaciones específicas.","interactions":"Metotrexato puede aumentar hematotoxicidad; ciclosporina puede disminuir niveles; atención a otros mielotóxicos y antihipertensivos.","monitoring":"Ante fiebre, escalofríos, odinofagia o lesiones mucosas, suspender y solicitar hemograma con diferencial de inmediato; EMA no recomienda hemograma rutinario como prevención.","administration":"IV o IM solo cuando la vía oral no sea adecuada; IV lenta y con control de presión arterial.","preparation":"Solución inyectable 500 mg/mL: confirmar dosis en mg y volumen; respetar compatibilidades.","infusionProtocol":"Si IV, administrar lentamente según ficha técnica para reducir hipotensión; no usar velocidad empírica no respaldada.","pregnancy":"Valorar riesgo-beneficio y trimestre; seguir información específica del producto y evitar uso sin indicación clara.","lactation":"Los metabolitos pasan a leche; seguir ficha local respecto del intervalo tras dosis y alternativas.","specialPopulations":"Mayor precaución en hipotensión, hipovolemia, adultos mayores, insuficiencia renal/hepática y riesgo hematológico.","patientEducation":"Suspender y consultar urgente si aparecen fiebre, escalofríos, dolor de garganta o úlceras mucosas.","clinicalPearls":"La agranulocitosis puede aparecer aun tras usos previos sin complicaciones y no es dosis-dependiente.","guidelineRecommendations":"EMA mantiene balance favorable en indicaciones autorizadas y refuerza reconocimiento precoz y suspensión ante síntomas.","safetyFlags":"Agranulocitosis idiosincrática; hipotensión IV; anafilaxia; hemograma rutinario no es estrategia preventiva.","alerts":"Si se sospecha agranulocitosis, suspender antes del resultado y no reintroducir si se confirma.","references":["https://cima.aemps.es/cima/dochtml/ft/88385/FT_88385.html","https://www.ema.europa.eu/en/medicines/human/referrals/metamizole-containing-medicinal-products-0","https://www.aemps.gob.es/informa/metamizol-y-riesgo-de-agranulocitosis-conclusiones-de-la-evaluacion-europea/"],"presentations":"Solución inyectable 500 mg/mL y presentaciones orales; confirmar sal y concentración local.","ref":"Fuentes regulatorias y ficha oficial revisadas para el ciclo Gold120 (2026)."}}};
  const __db = window.ANALGESIA_OPIOIDES_DRUGS_DB;
  if (!__db || typeof __db !== 'object' || Array.isArray(__db)) throw new Error("MEDCASES_GOLD120_GROUP12_R4_analgesia_opioides_js:owner_not_object_map");
  for (const [__id,__cfg] of Object.entries(__gold)) {
    const __row = __db[__id];
    if (!__row || typeof __row !== 'object') throw new Error("MEDCASES_GOLD120_GROUP12_R4_analgesia_opioides_js:missing:"+__id);
    __row.mcGoldClinicalV1 = {pt:__cfg.pt, es:__cfg.es};
    __row.sourceModule = __cfg.sourceModule;
  }
})();
/* END MEDCASES_GOLD120_GROUP12_R4_analgesia_opioides_js */
/* GOLD33_SELECTIVE:dipirona:START */
;(function(){var db=window.ANALGESIA_OPIOIDES_DRUGS_DB;if(!db||!db["dipirona"])throw new Error("GOLD33_MISSING_CANONICAL:dipirona");db["dipirona"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "026",
    "requiredFieldCount": 33,
    "approvedSha256": "a8bddf2f357b2d4d997020e9dbcb12cd6974420af31bc6f209c9ad8bec524d1a",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Dipirona (metamizol)",
    "class": "Analgésico e antipirético não opioide",
    "pharmacologicClass": "Pró-fármaco pirazolônico com efeitos analgésico, antipirético e espasmolítico",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Comprimidos 500 mg/1 g, gotas 500 mg/mL, solução oral e injetável 500 mg/mL conforme mercado.",
    "presentations": "Comprimidos 500 mg/1 g, gotas 500 mg/mL, solução oral e injetável 500 mg/mL conforme mercado.",
    "mechanism": "Pró-fármaco pirazolônico com efeitos analgésico, antipirético e espasmolítico. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Rapidamente hidrolisada a metabólitos ativos; eliminação renal de metabólitos.",
    "indications": "Dor aguda e febre conforme autorização nacional; não aprovada nos EUA e restrições variam por país.",
    "dose": "Adultos/≥15 anos: 500–1000 mg VO até 4x/dia; máximo usual 4 g/dia. IV/IM 1–2,5 g por dose, respeitando máximo local; confirmar bula.",
    "pediatricDose": "Dose por peso e apresentação varia; frequentemente 8–16 mg/kg por dose, até 4x/dia. AUTOMATABLE=NO sem bula nacional, peso e concentração.",
    "renalDose": "Reduzir/cautela em insuficiência renal grave e evitar altas doses repetidas.",
    "hepaticDose": "Reduzir/cautela em hepatopatia e evitar altas doses repetidas.",
    "commonAdverseEffects": "Náusea, tontura, rash e hipotensão parenteral.",
    "dangerousAdverseEffects": "Agranulocitose, anafilaxia, choque, SCAR e lesão renal/hepática.",
    "adverseEffects": "Náusea, tontura, rash e hipotensão parenteral. Graves: Agranulocitose, anafilaxia, choque, SCAR e lesão renal/hepática.",
    "contraindications": "Alergia a pirazolonas, história de agranulocitose, porfiria aguda, deficiência medular; outras por bula regional.",
    "interactions": "Metotrexato aumenta hematotoxicidade; ciclosporina pode reduzir; álcool e anti-hipertensivos somam efeitos.",
    "monitoring": "Resposta, PA IV, sinais de infecção/agranulocitose, hemograma se sintomas/uso prolongado, rim/fígado.",
    "administration": "VO com medida correta; IV muito lenta com PA monitorada devido a hipotensão.",
    "preparation": "Confirmar concentração, diluição e compatibilidade do produto injetável.",
    "infusionProtocol": "Administração IV lenta, com velocidade máxima específica da bula; não usar bolus rápido.",
    "pregnancy": "Evitar no 3º trimestre; uso anterior depende de avaliação regional.",
    "lactation": "Metabólitos passam ao leite; alguns rótulos recomendam evitar por 48 h após dose.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Agranulocitose, anafilaxia, choque, SCAR e lesão renal/hepática. Dose/cálculo bloqueados sem país/bula, idade/peso, concentração, via, função hepatorrenal e risco hematológico.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://consultas.anvisa.gov.br/#/bulario/",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.ema.europa.eu/en/medicines/human/referrals/metamizole-containing-medicinal-products"
    ],
    "ref": "https://consultas.anvisa.gov.br/#/bulario/"
  },
  "es": {
    "name": "Metamizol (dipirona)",
    "class": "Analgésico y antipirético no opioide",
    "pharmacologicClass": "Profármaco pirazolónico con efectos analgésico, antipirético y espasmolítico",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Comprimidos 500 mg/1 g, gotas 500 mg/mL, solución oral e inyectable 500 mg/mL según mercado.",
    "presentations": "Comprimidos 500 mg/1 g, gotas 500 mg/mL, solución oral e inyectable 500 mg/mL según mercado.",
    "mechanism": "Profármaco pirazolónico con efectos analgésico, antipirético y espasmolítico. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Hidrolizada rápidamente a metabolitos activos; eliminación renal de metabolitos.",
    "indications": "Dolor agudo y fiebre según autorización nacional; no aprobada en EE.UU. y restricciones varían por país.",
    "dose": "Adultos/≥15 años: 500–1000 mg VO hasta 4 veces/día; máximo habitual 4 g/día. IV/IM 1–2,5 g por dosis, respetando máximo local; confirmar ficha.",
    "pediatricDose": "Dosis por peso y presentación varía; frecuentemente 8–16 mg/kg por dosis, hasta 4 veces/día. AUTOMATABLE=NO sin ficha nacional, peso y concentración.",
    "renalDose": "Reducir/precaución en insuficiencia renal grave y evitar dosis altas repetidas.",
    "hepaticDose": "Reducir/precaución en hepatopatía y evitar dosis altas repetidas.",
    "commonAdverseEffects": "Náusea, mareo, erupción e hipotensión parenteral.",
    "dangerousAdverseEffects": "Agranulocitosis, anafilaxia, shock, SCAR y lesión renal/hepática.",
    "adverseEffects": "Náusea, mareo, erupción e hipotensión parenteral. Graves: Agranulocitosis, anafilaxia, shock, SCAR y lesión renal/hepática.",
    "contraindications": "Alergia a pirazolonas, antecedente de agranulocitosis, porfiria aguda, insuficiencia medular; otras según ficha regional.",
    "interactions": "Metotrexato aumenta hematotoxicidad; ciclosporina puede disminuir; alcohol y antihipertensivos suman efectos.",
    "monitoring": "Respuesta, PA IV, signos de infección/agranulocitosis, hemograma si síntomas/uso prolongado, riñón/hígado.",
    "administration": "VO con medida correcta; IV muy lenta con PA controlada por hipotensión.",
    "preparation": "Confirmar concentración, dilución y compatibilidad del producto inyectable.",
    "infusionProtocol": "Administración IV lenta, con velocidad máxima específica de ficha; no usar bolo rápido.",
    "pregnancy": "Evitar en tercer trimestre; uso previo depende de evaluación regional.",
    "lactation": "Metabolitos pasan a leche; algunas fichas recomiendan evitar por 48 h tras dosis.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Agranulocitosis, anafilaxia, shock, SCAR y lesión renal/hepática. Dose/cálculo bloqueados sem país/bula, idade/peso, concentração, via, função hepatorrenal e risco hematológico.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://consultas.anvisa.gov.br/#/bulario/",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.ema.europa.eu/en/medicines/human/referrals/metamizole-containing-medicinal-products"
    ],
    "ref": "https://consultas.anvisa.gov.br/#/bulario/"
  }
};})();
/* GOLD33_SELECTIVE:dipirona:END */
