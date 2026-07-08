(function () {
  'use strict';
  if (typeof window.ANALGESIA_OPIOIDES_DRUGS_DB !== 'object' || Array.isArray(window.ANALGESIA_OPIOIDES_DRUGS_DB)) {
    window.ANALGESIA_OPIOIDES_DRUGS_DB = {};
  }
  Object.assign(window.ANALGESIA_OPIOIDES_DRUGS_DB, {

/* ── DIPIRONA (METAMIZOL) ───────────────────────────────────────────── */
    "dipirona": {
      name: { pt: 'Dipirona (Metamizol)', es: 'Metamizol (Dipirona)' },
      category: 'analgesia',
      class: { pt: 'Analgésico Não-Opióide e Antitérmico (Espasmolítico)', es: 'Analgésico No Opioide y Antipirético (Espasmolítico)' },
      indications: {
        pt: ['Febre de qualquer etiologia', 'Dor aguda leve a intensa (frequentemente poupador de opioide pós-operatório)', 'Cólica renal e biliar (efeito espasmolítico)'],
        es: ['Fiebre de cualquier etiología', 'Dolor agudo leve a intenso (frecuentemente ahorrador de opioide posoperatorio)', 'Cólico renal y biliar (efecto espasmolítico)']
      },
      commercialNames: { br: ['Novalgina', 'Lisador'], ar: ['Novalgina'] },
      presentation: { pt: ['Ampolas IV/IM 500 mg/mL (2 mL = 1g)', 'Gotas 500 mg/mL', 'Comprimidos 500 mg e 1g'], es: ['Ampollas IV/IM 500 mg/mL (2 mL = 1g)', 'Gotas 500 mg/mL', 'Comprimidos 500 mg y 1g'] },
      mechanism: {
        pt: 'Mecanismo exato ainda não 100% definido. Acredita-se que iniba a via das ciclooxigenases (possivelmente a variante COX-3 central) e ative sistemas inibitórios descendentes e endocanabinoides no Sistema Nervoso Central. Difere dos AINEs clássicos por não irritar o estômago e não causar toxicidade renal isquêmica severa. Relaxa a musculatura lisa espasmada (vias urinárias).',
        es: 'Mecanismo exacto aún no 100% definido. Se cree que inhibe la vía de las ciclooxigenasas (posiblemente la variante COX-3 central) y activa sistemas inhibitorios descendentes y endocannabinoides en el Sistema Nervioso Central. Difiere de los AINEs clásicos por no irritar el estómago y no causar toxicidad renal isquémica severa. Relaja la musculatura lisa espasmódica (vías urinarias).'
      },
      dose: {
        adult: {
          pt: 'Dor/Febre: 1g IV, IM ou VO a cada 6 horas. Dose máxima: 4 g/dia.',
          es: 'Dolor/Fiebre: 1g IV, IM o VO cada 6 horas. Dosis máxima: 4 g/día.'
        },
        pediatric: {
          pt: '10 a 25 mg/kg por dose, até 4 vezes ao dia (Máximo de 1g/dose).',
          es: '10 a 25 mg/kg por dosis, hasta 4 veces al día (Máximo de 1g/dosis).'
        }
      },
      administration: { pt: ['A injeção IV rápida causa queda abrupta e profunda da pressão arterial. Obrigatório diluir a ampola (ex: em 10 mL de SF) e empurrar LENTAMENTE (3 a 5 min).'], es: ['La inyección IV rápida causa caída abrupta y profunda de la presión arterial. Obligatorio diluir la ampolla (ej: en 10 mL de SF) y empujar LENTAMENTE (3 a 5 min).'] },
      renalAdjustment: { required: false, message: { pt: 'Segura na doença renal, diferentemente dos AINEs, mas evitar altas doses prolongadas no ClCr severamente baixo.', es: 'Segura en la enfermedad renal, a diferencia de los AINEs, pero evitar altas dosis prolongadas en ClCr severamente bajo.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste estrito agudo.', es: 'Sin necesidad de ajuste estricto agudo.' } },
      commonAdverseEffects: { pt: ['Hipotensão arterial sintomática (na injeção IV rápida)'], es: ['Hipotensión arterial sintomática (en la inyección IV rápida)'] },
      dangerousAdverseEffects: { pt: ['Agranulocitose idiopática imuno-mediada (destruição dos leucócitos da medula óssea - raro, 1:1.000.000, mas letal e motivo pelo qual é proibida nos EUA/Reino Unido)', 'Choque anafilático grave'], es: ['Agranulocitosis idiopática inmunomediada (destrucción de leucocitos de la médula ósea - raro, 1:1.000.000, pero letal y motivo por el cual está prohibida en EE.UU./Reino Unido)', 'Choque anafiláctico grave'] },
      contraindications: {
        absolute: { pt: ['Histórico de reações alérgicas ou asma induzida por analgésicos', 'Porfiria hepática aguda'], es: ['Historial de reacciones alérgicas o asma inducida por analgésicos', 'Porfiria hepática aguda'] },
        relative: { pt: ['Hipotensão prévia severa (na via venosa)'], es: ['Hipotensión previa severa (en la vía venosa)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'CULTURA LATINO-AMERICANA: Apesar de proscrita na América do Norte, a Dipirona é o medicamento de primeira escolha absoluto em toda a América Latina e parte da Europa. É incrivelmente superior ao paracetamol no controle da febre refratária em adultos e UTIs.', es: 'CULTURA LATINOAMERICANA: A pesar de proscrita en América del Norte, el Metamizol es el medicamento de primera elección absoluto en toda América Latina y parte de Europa. Es increíblemente superior al paracetamol en el control de la fiebre refractaria en adultos y UCIs.' }
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
    }

  }); /* fim Object.assign ANALGESIA_OPIOIDES_DRUGS_DB — BUILD 356 Lote 1 (Analgésicos Básicos: Dipirona/Paracetamol/Cetoprofeno) */
})();
