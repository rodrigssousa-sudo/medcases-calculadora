/* ============================================================
   MedCases Pro — Módulo: ANTICOAGULANTES / ANTITROMBÓTICOS
   Expõe: window.ANTICOAG_DRUGS_DB

   BUILD 452 — Consolidação Central (Inauguração Oficial)
   aas_antiagregante, clopidogrel, ticagrelor, prasugrel, cangrelor,
   heparina_hnf, enoxaparina, dalteparina, fondaparinux,
   varfarina, apixabana, rivaroxabana, edoxabana, dabigatrana, betrixabana
   ── ANTICOAGULANTES E ANTITROMBÓTICOS CENTRALIZADOS ──
   ============================================================ */

(function () {
  'use strict';
  if (typeof window.ANTICOAG_DRUGS_DB !== 'object' || window.ANTICOAG_DRUGS_DB === null || Array.isArray(window.ANTICOAG_DRUGS_DB)) {
    window.ANTICOAG_DRUGS_DB = {};
  }
  if (typeof window.ANTICOAG_DRUGS_DB !== 'object' || window.ANTICOAG_DRUGS_DB === null) return;

  Object.assign(window.ANTICOAG_DRUGS_DB, {

  // ── ANTICOAGULANTES E ANTITROMBÓTICOS CENTRALIZADOS ──

/* ── ÁCIDO ACETILSALICÍLICO / AAS (Antiagregante) ───────────────────── */
    "aas_antiagregante": {
      name: { pt: 'Ácido Acetilsalicílico (AAS)', es: 'Ácido Acetilsalicílico (AAS)' },
      category: 'anticoag',
      class: { pt: 'Antiagregante Plaquetário / Inibidor Irreversível da COX-1', es: 'Antiagregante Plaquetario / Inhibidor Irreversible de la COX-1' },
      indications: {
        pt: ['Síndrome Coronariana Aguda (Infarto Agudo do Miocárdio com ou sem supra de ST)', 'Prevenção secundária de eventos aterotrombóticos (pós-AVC isquêmico, pós-AIT, angina estável)', 'Profilaxia de pré-eclâmpsia em gestantes de alto risco'],
        es: ['Síndrome Coronariano Agudo (IAM)', 'Prevención secundaria de eventos aterotrombóticos (post-ACV o infarto)', 'Prevención de preeclampsia en el embarazo']
      },
      commercialNames: { br: ['Aspirina Prevent', 'Somazin', 'AAS'], ar: ['Aspirina Prevent', 'Aspirina Lazar', 'Aspirinetas'] },
      presentation: { pt: ['Comprimidos simples ou gastrorresistentes 81 mg, 100 mg, 325 mg e 500 mg'], es: ['Comprimidos 100 mg, 325 mg y 500 mg'] },
      mechanism: {
        pt: 'O Desativador Vital de Plaquetas. O AAS em baixas doses acetila de forma **irreversível** o resíduo de serina da enzima Cicloxigenase-1 (COX-1) dentro das plaquetas. Isso bloqueia a síntese de Ácido Araquidônico em **Tromboxano A2 (TXA2)**, o sinal químico mais potente que as plaquetas usam para grudar umas nas outras e formar o coágulo. Como a plaqueta não tem núcleo e não consegue fabricar novas enzimas, ela fica paralisada por toda a sua vida útil de 7 a 10 dias.',
        es: 'Acetila de forma irreversible la enzima ciclooxigenasa-1 (COX-1) plaquetaria. Esto bloquea de forma permanente la producción de **Tromboxano A2 (TXA2)**, un potente inductor de la agregación plaquetaria y vasoconstricción. Al carecer la plaqueta de núcleo, el efecto persiste durante toda su vida útil (7 a 10 días).'
      },
      dose: {
        adult: {
          pt: 'Ataque no Infarto (SCA): 150 mg a 325 mg via oral, MASTIGADOS imediatamente. Manutenção Crônica Cardiovascular: 81 mg a 100 mg via oral, UMA VEZ ao dia, após o almoço.',
          es: 'Carga en Infarto (SCA): 162 a 325 mg vía oral, MASTICADOS de inmediato. Mantenimiento Crónico: 81 a 100 mg vía oral, UNA VEZ al día.'
        },
        pediatric: {
          pt: 'Uso contraindicado em infecções virais pelo risco de Síndrome de Reye. Permitido apenas na Doença de Kawasaki (dose inflamatória alta de 30-50 mg/kg/dia dividida, seguida de dose antiagregante de 3-5 mg/kg/dia).',
          es: 'Contraindicado en niños por Síndrome de Reye, excepto en Enfermedad de Kawasaki.'
        }
      },
      administration: { pt: ['No infarto agudo, o comprimido DEVE ser mastigado para acelerar a absorção bocal em minutos. Na rotina crônica, os comprimidos gastrorresistentes (Prevent) devem ser engolidos inteiros com água após uma refeição pesada para proteger a mucosa do estômago.'], es: ['En emergencias (SCA), masticar el comprimido. En profilaxis crónica, tragar entero después de las comidas.'] },
      renalAdjustment: { required: true, message: { pt: 'Evitar o uso se a taxa de filtração (eGFR) < 10 mL/min devido ao risco de sangramento urêmico e retenção hídrica.', es: 'Evitar si la filtración glomerular es severamente baja (< 10 mL/min).' } },
      hepaticAdjustment: { required: true, message: { pt: 'Contraindicado em insuficiência hepática grave ou cirrose Child C pelo risco severo de sangramento por varizes.', es: 'Contraindicado en cirrosis avanzada por riesgo de hemorragia digestiva.' } },
      commonAdverseEffects: { pt: ['Dispepsia, azia e queimação estomacal', 'Irritação da mucosa gástrica', 'Aumento discreto do tempo de sangramento por pequenos cortes'], es: ['Dispepsia, pirosis e irritación gástrica', 'Aumento del tiempo de sangrado capilar'] },
      dangerousAdverseEffects: { pt: ['Hemorragia Digestiva Alta (HDA) catastrófica por úlcera gástrica perfurada', 'SÍNDROME DE REYE EM CRIANÇAS (encefalopatia e esteatose hepática fulminante letal pós-virose)', 'Crise de Asma induzida por AAS (Tríade de Samter)'], es: ['Hemorragia Digestiva Alta por úlcera péptica', 'SÍNDROME DE REYE en pediatría (Insuficiencia hepática fulminante mortal tras virosis)', 'Broncoespasmo severo'] },
      contraindications: {
        absolute: { pt: ['Histórico de asma induzida por salicilatos, sangramento gastrointestinal ativo, crianças menores de 12 anos com febre ou virose (Gripe/Varicela)'], es: ['Hemorragia digestiva activa, niños con infecciones virales activas (Riesgo de Reye)'] },
        relative: { pt: ['Uso concomitante com anticoagulantes orais ou AINEs crônicos'] }
      },
      safetyFlags: {
        bleedingRisk: true, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'A PROIBIÇÃO ABSOLUTA EM CRIANÇAS (SÍNDROME DE REYE): Nunca prescreva AAS para tratar febre ou dor de cabeça em uma criança com suspeita de gripe, dengue ou varicela. O uso do ácido acetilsalicílico nessas viroses dispara a Síndrome de Reye, uma doença rara e fulminante que destrói o fígado e inflama o cérebro da criança, levando ao coma e ao óbito em 48 horas. Use Paracetamol.', es: 'ALERTA DE SÍNDROME DE REYE EN NIÑOS: Está prohibido usar aspirina como antitérmico en pediatría ante cuadros de influenza o varicela. Detona una encefalopatía aguda combinada con degeneración grasa hepática de evolución mortal. Opte por Paracetamol.' }
      },
      references: {
        pt: 'Diretrizes da SBC sobre Angina Estável e Infarto Agudo do Miocárdio; AHA/ACC Prevention Guidelines; Bula Aspirina.',
        es: 'Directrices de la Sociedad Europea de Cardiología (ESC); Guías de la Sociedad Argentina de Cardiología (SAC).'
      }
    },

/* ── CLOPIDOGREL (Antiagregante) ────────────────────────────────────── */
    "clopidogrel": {
      name: { pt: 'Clopidogrel (Bissulfato de)', es: 'Clopidogrel (Bisulfato de)' },
      category: 'anticoag',
      class: { pt: 'Antiagregante Plaquetário / Antagonista Irreversível do Receptor P2Y12', es: 'Antiagregante Plaquetario / Antagonista Irreversible del Receptor P2Y12' },
      indications: {
        pt: ['Síndrome Coronariana Aguda (IAM) em Dupla Antiagregação Plaquetária (DAPT) associado ao AAS', 'Prevenção de trombose de Stent coronariano pós-Angioplastia', 'Prevenção secundária de AVC ou doença arterial periférica em intolerantes ao AAS'],
        es: ['Síndrome Coronariano Agudo (DAPT con AAS)', 'Prevención de trombosis de Stent coronario post-ATC', 'Prevención de ACV secundario']
      },
      commercialNames: { br: ['Plavix', 'Iscover', 'Clopivax'], ar: ['Plavix', 'Clopidogrel Richmond', 'Nogren'] },
      presentation: { pt: ['Comprimidos revestidos 75 mg'], es: ['Comprimidos revestidos 75 mg'] },
      mechanism: {
        pt: 'O Bloqueador de Receptor ADP. É um pró-fármaco ativado no fígado. Seu metabólito ativo liga-se de forma **irreversível** aos receptores de adenosina difosfato (ADP) tipo **P2Y12** localizados na superfície das plaquetas. Ao travar esse receptor, ele impede que o ADP ative o complexo glicoproteico GPIIb/IIIa, bloqueando de forma definitiva a capacidade das plaquetas de se prenderem à rede de fibrina, inibindo a formação do trombo arterial.',
        es: 'Es un profármaco que requiere activación hepática. Su metabolito activo se une de forma irreversible al receptor plaquetario de ADP **P2Y12**, bloqueando la activación del complejo de glicoproteína GPIIb/IIIa, inhibiendo de forma permanente la agregación de las plaquetas entre sí.'
      },
      dose: {
        adult: {
          pt: 'Dose de Ataque (Infarto/Stent): 300 mg via oral (4 comprimidos juntos). Se o paciente for realizar angioplastia primária de urgência, o ataque pode ser de 600 mg. Dose de manutenção crônica: 75 mg via oral, UMA VEZ ao dia.',
          es: 'Dosis de Carga (SCA/Stent): 300 mg vía oral (4 comprimidos). En angioplastia primaria de urgencia: carga de 600 mg. Mantenimiento: 75 mg vía oral, UNA VEZ al día.'
        },
        pediatric: {
          pt: 'Uso não estabelecido ou seguro em pediatria.',
          es: 'No recomendado en niños.'
        }
      },
      administration: { pt: ['Uso oral diário. Pode ser administrado com ou sem alimentos. ATENÇÃO: Se o paciente for realizar cirurgia cardíaca programada (Revascularização/Ponte), o Clopidogrel deve ser SUSPENSO obrigatoriamente 5 dias antes para evitar hemorragias graves na mesa de operação.'], es: ['Uso oral. Suspender estrictamente 5 días antes de cualquier cirugía mayor programada por riesgo prohibitivo de hemorragia perioperatoria.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste de dose, mas monitorar eventos de sangramento.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Depende da ativação do CYP450 hepático. Em insuficiência hepática grave, a conversão no metabólito ativo pode falhar, reduzindo o efeito protetor do remédio.', es: 'Precaución en falla hepática severa por posible disminución del efecto antitrombótico.' } },
      commonAdverseEffects: { pt: ['Hematomas subcutâneos fáceis (equimoses)', 'Sangramento nasal (epistaxe)', 'Dispepsia e diarreia leve'], es: ['Equimosis y hematomas espontáneos', 'Epistaxis', 'Dispepsia'] },
      dangerousAdverseEffects: { pt: ['Hemorragia Intracraniana espontânea', 'Sangramento gastrointestinal severo', 'PÚRPURA TROMBOCITOPÊNICA TROMBÓTICA (PTT induzida por droga — emergência hematológica com anemia e trombocitopenia catastróficas, raro)'], es: ['Hemorragia Intracraneal', 'Sangrado gastrointestinal masivo', 'PÚRPURA TROMBOCITOPÉNICA TROMBÓTICA (PTT - Emergencia rara mortal)'] },
      contraindications: {
        absolute: { pt: ['Sangramento patológico ativo (como úlcera péptica sangrante ou hemorragia intracraniana ativa)'], es: ['Hemorragia activa clínicamente significativa (HDA o sangrado intracraneal)'] },
        relative: { pt: ['Uso concomitante com inibidores potentes do CYP2C19 (como o Omeprazol — VER MOTOR)'] }
      },
      safetyFlags: {
        bleedingRisk: true, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'A INTERAÇÃO PROIBIDA COM OMEPRAZOL: O Clopidogrel precisa da enzima CYP2C19 do fígado para virar remédio ativo. Se você prescrever Omeprazol para proteger o estômago do infartado, o Omeprazol desliga a CYP2C19. O Clopidogrel passa reto sem ser ativado e vira um placebo caro. O Stent do paciente entope de coágulos na mesma semana. Caso precise proteger o estômago, use estritamente **Pantoprazol**.', es: 'ALERTA DE ANULACIÓN POR OMEPRAZOL: El clopidogrel requiere la enzima hepática CYP2C19 para convertirse en su forma activa. El Omeprazol bloquea de forma potente esta enzima, impidiendo la activación del antiagregante y provocando la trombosis aguda del stent cardíaco. Si requiere protector gástrico, use **Pantoprazol**.' }
      },
      references: {
        pt: 'CURE Trial (Clopidogrel in Acute Coronary Syndromes); COMMIT Trial; Bula Profissional Plavix.',
        es: 'CURE Trial (NEJM 2001); COMMIT Trial; Directrices de Síndromes Coronarios de la ESC.'
      }
    },

/* ── TICAGRELOR (Antiagregante) ─────────────────────────────────────── */
    "ticagrelor": {
      name: { pt: 'Ticagrelor', es: 'Ticagrelor' },
      category: 'anticoag',
      class: { pt: 'Antiagregante Plaquetário Potente / Antagonista Reversível do Receptor P2Y12', es: 'Antiagregante Plaquetario Potente / Antagonista Reversible del Receptor P2Y12' },
      indications: {
        pt: ['Síndrome Coronariana Aguda (Infarto Agudo do Miocárdio com ou sem supra) em pacientes de médio a alto risco em terapia DAPT (Superior ao Clopidogrel de acordo com o estudo PLATO)'],
        es: ['Síndrome Coronariano Agudo (IAM) en pacientes de moderado-alto riesgo (Superioridad demostrada frente a clopidogrel en Estudio PLATO)']
      },
      commercialNames: { br: ['Brilinta'], ar: ['Brilinta', 'Ticagrelor Richmond'] },
      presentation: { pt: ['Comprimidos revestidos 60 mg e 90 mg'], es: ['Comprimidos revestidos 60 mg y 90 mg'] },
      mechanism: {
        pt: 'O Bloqueador de Receptor Reversível de Ação Direta. Ao contrário do Clopidogrel (que precisa ser quebrado no fígado e bloqueia para sempre), o Ticagrelor é uma molécula de ação direta que **não precisa de ativação**. Ele liga-se de forma **reversível** ao receptor P2Y12 de ADP. Ele atua como um modulador alostérico, bloqueando a sinalização de agregação da plaqueta com altíssima potência, mas desgruda da plaqueta à medida que o nível no sangue cai, permitindo um retorno mais rápido da coagulação após a suspensão.',
        es: 'Inhibidor directo, selectivo y de unión reversible al receptor de ADP **P2Y12**. A diferencia de las tienopiridinas, no es un profármaco (no requiere activación metabólica), e interactúa de forma alostérica bloqueando la transducción de señales de agregación plaquetaria con mayor rapidez y potencia.'
      },
      dose: {
        adult: {
          pt: 'Dose de Ataque (Infarto): 180 mg via oral (2 comprimidos de 90mg juntos). Dose de manutenção: 90 mg via oral, DUAS VEZES ao dia (de 12/12h), por 12 meses pós-evento.',
          es: 'Dosis de Carga (SCA): 180 mg vía oral (2 comprimidos de 90 mg). Mantenimiento posterior: 90 mg vía oral, DOS VECES al día (cada 12 horas) durante 1 año.'
        },
        pediatric: {
          pt: 'Uso contraindicado em pediatria.',
          es: 'No recomendado en niños.'
        }
      },
      administration: { pt: ['Uso oral de 12 em 12 horas. Pode ser tomado com ou sem comida. Caso o paciente precise de cirurgia cardíaca de urgência, o Ticagrelor deve ser suspenso 5 dias antes do procedimento.'], es: ['Uso oral cada 12 horas. Suspender 5 días antes de cirugías mayores programadas para restaurar la hemostasia.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste em insuficiência renal ou diálise.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Contraindicado em pacientes com insuficiência hepática grave ou cirrose Child C devido ao risco extremo de sangramentos sistêmicos.', es: 'Contraindicado en insuficiencia hepática grave por alto riesgo hemorrágico.' } },
      commonAdverseEffects: { pt: ['DISPNEIA DO BRILINTA (Falta de ar súbita esquisita benigna que afeta ~14% dos usuários - VER ALERTAS)', 'Equimoses e hematomas espontâneos', 'Sangramento nasal e aumento de Ácido Úrico no sangue'], es: ['DISNEA DE BRILINTA (Sensación de falta de aire transitoria benigna en el 14% de los casos)', 'Hematomas', 'Hiperuricemia'] },
      dangerousAdverseEffects: { pt: ['Hemorragia intracraniana fatal', 'Bloqueio ventricular cardíaco ou pausas sinusais (efeito central de adenosina — raro)'], es: ['Hemorragia Intracraneal', 'Pausas sinusales o bradicardia transitoria por efecto adenosinérgico'] },
      contraindications: {
        absolute: { pt: ['Sangramento intracraniano prévio histórico, hemorragia patológica ativa em curso, insuficiência hepática grave'], es: ['Historial de hemorragia intracraneal (Absoluto)', 'Hemorragia activa', 'Falla hepática grave'] },
        relative: { pt: ['Pacientes com asma grave ou DPOC (pode exacerbar e tolerabilidade da dispneia do remédio)'] }
      },
      safetyFlags: {
        bleedingRisk: true, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'A FALSA ASMA DO BRILINTA (ALERTA DE DISPNEIA): Cerca de 1 em cada 7 pacientes que tomam Ticagrelor apresenta uma falta de ar súbita esquisita nas primeiras semanas (dispneia). Isso ocorre porque o remédio bloqueia a recaptação de Adenosina nos pulmões, mimetizando uma asma, mas sem causar chiado real no peito. Avise o paciente: o sintoma é benigno, não destrói o pulmão e melhora sozinho sem precisar parar o remédio do coração.', es: 'ALERTA DE DISNEA BENIGNA POR ADENOSINA: El 14% de los pacientes desarrolla disnea transitoria durante las primeras semanas debido a la acumulación local de adenosina pulmonar. No cursa con sibilancias ni refleja falla cardíaca; es un efecto secundario benigno que suele autolimitarse.' }
      },
      references: {
        pt: 'PLATO Trial (Ticagrelor vs Clopidogrel in Acute Coronary Syndromes - NEJM 2009); Guidelines da SBC 2021; Lexicomp.',
        es: 'PLATO Trial (NEJM 2009); Directrices de Síndrome Coronario Agudo de la Sociedad Europea de Cardiología (ESC).'
      }
    },

/* ── PRASUGREL (Antiagregante) ──────────────────────────────────────── */
    "prasugrel": {
      name: { pt: 'Prasugrel (Cloridrato de)', es: 'Prasugrel (Clorhidrato de)' },
      category: 'anticoag',
      class: { pt: 'Antiagregante Plaquetário de Alta Potência / Tienopiridina de Terceira Geração', es: 'Antiagregante Plaquetario de Alta Potencia / Tienopiridina de Tercera Generación' },
      indications: {
        pt: ['Síndrome Coronariana Aguda (Infarto) em pacientes que serão submetidos a Angioplastia Coronária com implante de Stent (Estratégia do Estudo TRITON-TIMI 38)'],
        es: ['Síndrome Coronariano Agudo (IAM) en pacientes programados para Intervención Coronaria Percutánea (ATC/Stent)']
      },
      commercialNames: { br: ['Effient'], ar: ['Effient'] },
      presentation: { pt: ['Comprimidos revestidos 5 mg e 10 mg'], es: ['Comprimidos revestidos 5 mg y 10 mg'] },
      mechanism: {
        pt: 'O Bloqueador Irreversível de Rápida Ativação. É uma tienopiridina que bloqueia de forma **irreversível** o receptor P2Y12 de ADP nas plaquetas. Sua grande vantagem mecânica sobre o Clopidogrel: sua ativação no fígado ocorre em uma única etapa metabólica simples e previsível. Ele alcança uma inibição plaquetária de 90% em menos de 1 hora, sem sofrer com variações genéticas de falha, sendo um antiagregante extremamente violento e potente.',
        es: 'Inhibidor irreversible del receptor plaquetario de ADP **P2Y12**. Es una tienopiridina de tercera generación con una activación metabólica hepática mucho más rápida, eficiente y predecible que la del clopidogrel, logrando un bloqueo plaquetario del 90% casi inmediato.'
      },
      dose: {
        adult: {
          pt: 'Dose de Ataque (Infarto na Sala de Hemodinâmica): 60 mg via oral (6 comprimidos de 10mg juntos). Dose de manutenção: 10 mg via oral, UMA VEZ ao dia. ATENÇÃO: Se o paciente tiver peso < 60 kg ou idade >= 75 anos, a dose de manutenção DEVE ser reduzida obrigatoriamente para 5 mg ao dia.',
          es: 'Dosis de Carga: 60 mg vía oral en bolo. Mantenimiento posterior: 10 mg vía oral, UNA VEZ al día. ¡CUIDADO CRÍTICO!: Si pesa < 60 kg o tiene >= 75 años, disminuir la dosis a 5 mg/día.'
        },
        pediatric: {
          pt: 'Uso contraindicado e proscrito em menores de 18 anos.',
          es: 'Contraindicado.'
        }
      },
      administration: { pt: ['Uso oral diário. Pode ser tomado com ou sem alimentos. CRÍTICO: Nunca inicie o Prasugrel antes de conhecer a anatomia das coronárias do paciente no cateterismo. Se o paciente precisar de cirurgia de ponte de safena de urgência, o prasugrel causa sangramentos fatais incontroláveis; suspender 7 dias antes.'], es: ['Uso oral. No iniciar de forma ciega antes de realizar el cateterismo ante riesgo de cirugía de bypass de urgencia. Suspender 7 días antes de cirugías.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste em insuficiência renal crônica.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Não requer ajuste em insuficiência leve a moderada. Contraindicado na insuficiência grave Child C.', es: 'Contraindicado en falla hepática grave por alto riesgo hemorrágico.' } },
      commonAdverseEffects: { pt: ['Hematomas subcutâneos severos espontâneos', 'Sangramento prolongado por punções venosas', 'Epistaxe e sangramento gengival'], es: ['Grandes equimosis cutáneas', 'Sangrado prolongado en sitios de punción', 'Epistaxis'] },
      dangerousAdverseEffects: { pt: ['HEMORRAGIA INTRACRANIANA EXPLOSIVA MORTAL (Especialmente em idosos ou pacientes com histórico de AVC/AIT — VER ALERTAS BLACK BOX)'], es: ['HEMORRAGIA INTRACRANEAL MASIVA MORTAL (Riesgo crítico bajo advertencia de Caja Negra en ancianos o ACV previo)'] },
      contraindications: {
        absolute: { pt: ['HISTÓRICO PRÉVIO DE AVC (DERRAME) OU AIT (ATAQUE ISQUÊMICO TRANSITÓRIO) EM QUALQUER MOMENTO DA VIDA (Alerta de Caixa Preta de sangramento cerebral letal)', 'Sangramento ativo grave'], es: ['ANTECEDENTE DE ACV O AIT EN CUALQUIER MOMENTO DE LA VIDA (Caja Negra absoluta por hemorragia cerebral fatal)', 'Hemorragia activa'] },
        relative: { pt: ['Idosos com idade >= 75 anos (evitar o uso devido ao risco proibitivo de sangramento central)'] }
      },
      safetyFlags: {
        bleedingRisk: true, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A CAIXA PRETA HISTÓRICA DO DERRAME (O PERIGO DO PRASUGREL): O Prasugrel carrega um aviso de Caixa Preta rígido do FDA. Ele é o antiagregante mais perigoso do mercado para o cérebro. Se você der Prasugrel para um paciente que já teve um mini-derrame (AIT) ou AVC no passado, o remédio causa uma hemorragia cerebral fulminante e fatal em poucos dias. Nunca use se houver histórico de lesão cerebral; prefira o clopidogrel ou ticagrelor.', es: 'ALERTA DE CAJA NEGRA ABSOLUTA: Está terminantemente PROHIBIDO prescribir Prasugrel a pacientes con antecedentes de ataque cerebrovascular (ACV) o ataque isquémico transitorio (AIT). El estudio TRITON demostró que el fármaco desencadena hemorragias intracraneales fulminantes intratables en este grupo.' }
      },
      references: {
        pt: 'TRITON-TIMI 38 Trial (Prasugrel vs Clopidogrel - NEJM 2007); FDA Boxed Warning Effient; Manual de Hemodinâmica e Cardiologia SBC.',
        es: 'TRITON-TIMI 38 Trial (NEJM 2007); FDA Boxed Warning; Guías de Intervención Coronaria Percutánea de la ESC.'
      }
    },

/* ── CANGRELOR (Antiagregante IV) ───────────────────────────────────── */
    "cangrelor": {
      name: { pt: 'Cangrelor (Tetrafosfato de)', es: 'Cangrelor (Tetrafosfato de)' },
      category: 'anticoag',
      class: { pt: 'Antiagregante Plaquetário Intravenoso Ultrarrápido / Antagonista Reversível P2Y12', es: 'Antiagregante Plaquetario Intravenoso Ultrarrápido / Antagonista Reversible P2Y12' },
      indications: {
        pt: ['Uso intravenoso na sala de hemodinâmica para prevenção de trombose coronária aguda e oclusão de stent em pacientes submetidos a Intervenção Coronária Percutânea (ICP) que não receberam antiagregantes orais prévios'],
        es: ['Uso intravenoso peri-ATC para prevenir la trombosis aguda de stent en pacientes que no han recibido inhibidores P2Y12 orales previos']
      },
      commercialNames: { br: ['Kengreal'], ar: ['Kengreal'] },
      presentation: { pt: ['Frasco-ampola IV contendo 50 mg de pó liofilizado para injeção e infusão'], es: ['Vial IV con polvo liofilizado de 50 mg'] },
      mechanism: {
        pt: 'O Antiagregante de Liga-Desliga Injetável. É o único inibidor de P2Y12 intravenoso do mundo. Ele liga-se de forma direta, seletiva e reversível ao receptor P2Y12 de ADP sem precisar de nenhuma ativação metabólica. Sua grande jogada mecânica: ele atinge o bloqueio plaquetário máximo de 100% em 2 minutos de infusão na veia. Ao desligar a bomba IV, sua meia-vida é de apenas 3 a 5 minutos; a coagulação do paciente volta ao normal em 1 hora, permitindo cirurgias cardíacas de emergência sem sangramentos.',
        es: 'Inhibidor intravenoso directo y reversible del receptor de ADP **P2Y12**. No requiere activación metabólica. Alcanza un bloqueo plaquetario completo de forma inmediata (en 2 minutos de infusión). Su vida media es de solo 3-5 minutos; tras apagar la bomba IV, la función plaquetaria se restaura por completo en 1 hora.'
      },
      dose: {
        adult: {
          pt: 'Uso na Sala de Hemodinâmica: Aplicar um BOLUS INTRAVENOSO DIRETO de 30 mcg/kg antes de iniciar a angioplastia, seguido IMEDIATAMENTE por uma infusão intravenosa contínua de 4 mcg/kg/minuto na bomba de infusão. Manter por pelo menos 2 horas ou até o fim do procedimento.',
          es: 'Bolo IV Inicial: 30 mcg/kg antes de la angioplastia, seguido de forma INMEDIATA por una infusión IV continua de 4 mcg/kg/minuto por bomba, durante al menos 2 horas.'
        },
        pediatric: {
          pt: 'Uso contraindicado e não estudado em menores de 18 anos.',
          es: 'No recomendado en niños.'
        }
      },
      administration: { pt: ['EXCLUSIVAMENTE INFUSÃO INTRAVENOSA HOSPITALAR EM SALA DE CATETERISMO. O pó de 50mg deve ser reconstituído com 5 mL de Água para Injeção e em seguida diluído em uma bolsa de 250 mL de Soro Fisiológico (NaCl 0,9%) ou Soro Glicosado (SG5%) antes de acionar na bomba de infusão contínua.'], es: ['Reconstituir el vial de 50 mg con 5 mL de agua estéril y diluir en 250 mL de solución fisiológica para su infusión por bomba automatizada peri-ATC.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste de dose em renais crônicos ou em diálise terminal.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Depurado por desativação enzimática plasmática ectonucleotidase, sem dependência do fígado.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Sangramento leve no sítio da punção arterial femoral ou radial', 'Equimoses focais', 'Hipotensão transitória leve'], es: ['Sangrado menor en el sitio de acceso arterial (radial/femoral)', 'Hematomas', 'Hipotensión'] },
      dangerousAdverseEffects: { pt: ['Hemorragia retroperitoneal catastrófica silenciosa por perfuração de artéria femoral', 'Hemorragia intracraniana aguda', 'Broncoespasmo agudo severo (raro)'], es: ['Hemorragia retroperitoneal masiva silenciosa en la sala de hemodinámica', 'Hemorragia intracraneal'] },
      contraindications: {
        absolute: { pt: ['Sangramento ativo patológico grave, histórico de AVC ou AIT prévios de qualquer etiologia (alto risco de sangramento central de classe)'], es: ['Hemorragia activa, antecedente de ACV o AIT previo en cualquier momento de la vida'] },
        relative: { pt: ['Uso simultâneo com transição errada para antiagregantes orais (VER ALERTAS DE TRANSIÇÃO)'] }
      },
      safetyFlags: {
        bleedingRisk: true, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A REGRA CRÍTICA DA TRANSIÇÃO PARA O REMÉDIO ORAL: Como o Cangrelor limpa do sangue em minutos, o paciente precisa receber o antiagregante oral (Clopidogrel ou Prasugrel) para não entupir o Stent no quarto. Atenção: Clopidogrel e Prasugrel SÓ PODEM SER DADOS DEPOIS que a bomba de Cangrelor for DESLIGADA. Dar antes faz o Cangrelor bloquear o receptor e impedir o remédio oral de funcionar. O Ticagrelor é o único que pode ser dado a qualquer momento.', es: 'ALERTA DE TRANSICIÓN CRÍTICA A VÍA ORAL: Clopidogrel o Prasugrel DEBEN administrarse únicamente DESPUÉS de apagar la infusión de Cangrelor. Si se administran antes, el cangrelor bloquea el receptor de forma competitiva impidiendo que el metabolito oral se fije, dejando al paciente desprotegido. El Ticagrelor puede darse antes o durante la infusión.' }
      },
      references: {
        pt: 'CHAMPION PHOENIX Trial (Cangrelor in Percutaneous Coronary Intervention - NEJM 2013); FDA Approval Data Kengreal; Guidelines da ESC.',
        es: 'CHAMPION PHOENIX Trial (NEJM 2013); Ficha Técnica Kengreal; Directrices de Angioplastia de la ESC.'
      }
    },

/* ── HEPARINA NÃO FRACIONADA / HNF (Anticoagulante) ─────────────────── */
    "heparina_hnf": {
      name: { pt: 'Heparina Não Fracionada (HNF Sódica)', es: 'Heparina No Fraccionada (HNF Sódica)' },
      category: 'anticoag',
      class: { pt: 'Anticoagulante Parenteral de Ação Direta / Ativador de Antitrombina III', es: 'Anticoagulante Parenteral de Acción Directa / Activador de la Antitrombina III' },
      indications: {
        pt: ['Tratamento de Tromboembolismo Pulmonar (TEP) agudo e Trombose Venosa Profunda (TVP)', 'Síndrome Coronariana Aguda (Infarto) com ou sem supra de ST', 'Anticoagulação de sistema em cirurgias cardíacas com circulação extracorpórea (CEC) e linhas de hemodiálise'],
        es: ['Tratamiento del Tromboembolismo Pulmonar (TEP) agudo y TVP', 'Síndrome Coronariano Agudo', 'Anticoagulación en Circulación Extracorpórea (CEC) y hemodiálisis']
      },
      commercialNames: { br: ['Liquemine', 'Heparina Sódica (SUS)', 'Hepa-Fran'], ar: ['Liquemine', 'Heparina Sódica Richmond'] },
      presentation: { pt: ['Frasco-ampola IV contendo 5.000 UI/mL (Frasco com 5 mL / Total de 25.000 UI)'], es: ['Viales inyectables IV de 5.000 UI/mL'] },
      mechanism: {
        pt: 'O Potencializador do Escudo de Coagulação. A Heparina é uma mistura de polímeros de glicosaminoglicanos gigantes. Ela liga-se através de uma sequência pentassacarídica específica à enzima **Antitrombina III (AT-III)** do plasma humano. Essa ligação altera a forma da antitrombina e multiplica a velocidade de ação dela em **1.000 vezes**. A AT-III ativada captura e destrói instantaneamente a Trombina (Fator IIa) e o Fator Xa livres, congelando a cascata e impedindo o coágulo de crescer na veia.',
        es: 'Glicosaminoglicano que se une a la enzima plasmática **Antitrombina III (AT-III)** a través de una secuencia pentasacárida específica. Induce un cambio conformacional que potencia 1.000 veces la capacidad de la AT-III para inactivar a la Trombina (Fator IIa), al Fator Xa y al Fator IXa, deteniendo la formación de fibrina.'
      },
      dose: {
        adult: {
          pt: 'Protocolo de UTI/TEP Agudo: Aplicar um BOLUS INTRAVENOSO DIRETO inicial de 80 UI/kg via IV (geralmente ~5.000 UI), seguido IMEDIATAMENTE por uma infusão intravenosa contínua de 18 UI/kg/hora em bomba de infusão. OBRIGATÓRIO colher o exame de **TTPA** de 6 em 6 horas para ajustar o gotejamento da bomba (manter TTPA estável entre 1,5 a 2,5 vezes o valor de controle do laboratório).',
          es: 'Esquema de TEP/TVP en UTI: Bolo IV de 80 UI/kg, seguido de infusión continua por bomba a 18 UI/kg/hora. Ajustar el goteo obligatoriamente según niveles de **KPTT/TTPA** evaluados cada 6 horas (Meta: KPTT entre 1,5 y 2,5 veces el control).'
        },
        pediatric: {
          pt: 'Crises trombóticas pediátricas: Bolo IV inicial de 75 UI/kg em 5 minutos, seguido por infusão contínua em bomba de 28 UI/kg/hora (menores de 1 ano) ou 20 UI/kg/hora (maiores de 1 ano), com ajuste rígido por TTPA.',
          es: 'Pediátrica: Bolo IV 75 UI/kg, seguido de infusión continua de 20-28 UI/kg/hora con monitoreo estrecho de KPTT.'
        }
      },
      administration: { pt: ['EXCLUSIVAMENTE INTRAVENOSA EM BOMBA DE INFUSÃO CONTÍNUA (para doses terapêuticas de UTI) ou Subcutânea profunda (apenas para profilaxia de baixa dose de enfermaria, 5.000 UI de 8/8h ou 12/12h). Nunca aplicar por via Intramuscular (risco de hematoma gigante e necrose de músculo).'], es: ['Vía IV continua por bomba automatizada (Dosis plenas) o Subcutánea profunda (Profilaxis, 5.000 UI cada 8-12h). PROHIBIDA la vía intramuscular por riesgo de hematoma masivo compresivo estructural.'] },
      renalAdjustment: { required: false, message: { pt: 'O Anticoagulante de escolha absoluta no renal crônico terminal (ClCr < 15 mL/min ou diálise) porque sua depuração é celular/reticuloendotelial e não depende dos rins (Diferença vital sobre a Enoxaparina/Clexane).', es: 'Anticoagulante de elección absoluta en insuficiencia renal terminal (ClCr < 15 mL/min o diálisis) ya que su depuración es reticuloendotelial y celular, no renal.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste estrito, monitorar eletrólitos e coagulograma.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Hematomas nos locais de punção e pele', 'Sangramento gengival discreto', 'Irritação ou dor no local da injeção subcutânea'], es: ['Equimosis y hematomas espontáneos', 'Gingivorragia leve', 'Ardor local SC'] },
      dangerousAdverseEffects: { pt: ['HEMORRAGIA INTERNA ATIVA CATASTRÓFICA (retroperitoneal, alveolar pulmonar ou cerebral)', 'PLAQUETOPENIA INDUZIDA POR HEPARINA (HIT letal autoimune — os anticorpos destroem as plaquetas e causam trombose paradoxal de artérias na UTI — VER ALERTAS)', 'Osteoporose severa (uso prolongado por meses)'], es: ['Hemorragia retroperitoneal o cerebral masiva', 'TROMBOCITOPENIA INDUCIDA POR HEPARINA (HIT mortal inmunomediada por anticuerpos anti-PF4 con trombosis paradójica refractaria)'] },
      contraindications: {
        absolute: { pt: ['Sangramento ativo grave não controlado, histórico confirmado de Plaquetopenia Induzida por Heparina (HIT) tipo II'], es: ['Hemorragia activa mayor, antecedente documentado de Trombocitopenia Inducida por Heparina (HIT)'] },
        relative: { pt: ['Cirurgias de grande porte intracranianas ou espinhais recentes nas últimas 24-48 horas'] }
      },
      safetyFlags: {
        bleedingRisk: true, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'O ALERTA DA PARADOXA DESTRUIÇÃO DE PLAQUETAS (A SINDROME DA HIT): A Heparina pode desencadear uma reação autoimune gravíssima chamada HIT Tipo II entre o 5º e o 10º dia de uso na UTI. O corpo fabrica anticorpos que ativam as plaquetas do próprio paciente. A contagem de plaquetas despenca rápido (> 50% de queda) e, de forma bizarra, o paciente começa a sofrer TROMBOSES pretas arteriais severas nas pernas e pulmão. SUSPENDA a heparina na hora se as plaquetas caírem e ligar o Argatroban.', es: 'EL PELIGRO CRÍTICO DE LA HIT TIPO II: Entre el día 5 y 10 de infusión, monitorice las plaquetas. Una caída abrupta > 50% refleja la aparición de anticuerpos anti-PF4 (HIT). Esto activa las plaquetas induciendo trombosis arteriales y venosas masivas paradójicas con riesgo de gangrena. Suspenda la HNF de inmediato y rote a Argatroban o Fondaparinux.' }
      },
      references: {
        pt: 'CHEST Guidelines on Antithrombotic Therapy; Guia de Condutas de Anticoagulação do Hospital Albert Einstein; Manual Lexicomp.',
        es: 'CHEST Guidelines; Directrices de Anticoagulación Parenteral de la SAGE; Ficha Técnica Liquemine.'
      }
    },

/* ── ENOXAPARINA (Anticoagulante HBPM) ──────────────────────────────── */
    "enoxaparina": {
      name: { pt: 'Enoxaparina Sódica (HBPM)', es: 'Enoxaparina Sódica (HBPM)' },
      category: 'anticoag',
      class: { pt: 'Anticoagulante Parenteral / Heparina de Baixo Peso Molecular / Inibidor Seletivo de Fator Xa', es: 'Anticoagulante Parenteral / Heparina de Bajo Peso Molecular / Inhibidor Selectivo del Factor Xa' },
      indications: {
        pt: ['Tratamento de Trombose Venosa Profunda (TVP) e Tromboembolismo Pulmonar (TEP)', 'Síndrome Coronariana Aguda (Infarto) em Dupla Antiagregação', 'Profilaxia de eventos tromboembólicos em pacientes acamados ou pós-cirurgias ortopédicas de grande porte'],
        es: ['Tratamiento de TVP y TEP agudo', 'Síndrome Coronariano Agudo', 'Profilaxis de tromboembolismo en pacientes quirúrgicos u ortopédicos de alto riesgo']
      },
      commercialNames: { br: ['Clexane', 'Versa', 'Enoxalow', 'Heox'], ar: ['Clexane', 'Dilutol', 'Enoxaparina Richmond'] },
      presentation: { pt: ['Seringas preenchidas Injetáveis Subcutâneas 20 mg, 40 mg, 60 mg, 80 mg e 100 mg'], es: ['Jeringas prellenadas Subcutáneas de 20 mg, 40 mg, 60 mg y 80 mg'] },
      mechanism: {
        pt: 'O Fragmento de Alvo Xa. É obtida por despolimerização química da heparina comum, quebrando-a em pedaços menores. Essa redução de tamanho faz com que a Enoxaparina perca a capacidade de se ligar à Trombina (Fator IIa), mas ganhe uma afinidade esmagadora e seletiva pelo **Fator Xa** através da Antitrombina III (proporção anti-Xa/anti-IIa de 4:1). Ela bloqueia a cascata antes da formação de trombina, possuindo uma resposta super previsível que dispensa exames de TTPA de rotina.',
        es: 'Heparina de bajo peso molecular (HBPM). Se une a la Antitrombina III potenciando la inactivación selectiva del **Factor Xa** sobre la Trombina (relación de actividad anti-Xa/anti-IIa de 4:1). Al poseer una farmacocinética altamente predecible y lineal, no requiere monitorización analítica de laboratorio de KPTT.'
      },
      dose: {
        adult: {
          pt: 'Dose Terapêutica Plena (TVP/TEP/Infarto): 1 mg/kg via SUBCUTÂNEA, de 12/12 horas (ou 1,5 mg/kg uma vez ao dia). Profilaxia de UTI/Acamado: 40 mg via SUBCUTÂNEA, UMA VEZ ao dia.',
          es: 'Dosis Terapéutica Plena (TVP/TEP): 1 mg/kg vía SUBCUTÁNEA, cada 12 horas. Dosis Profiláctica estándar: 40 mg vía SUBCUTÁNEA, UNA VEZ al día.'
        },
        pediatric: {
          pt: 'Uso especializado pediátrico: Menores de 2 meses: 1,5 mg/kg via SC de 12/12h; Maiores de 2 meses: 1 mg/kg via SC de 12/12h (Mandar dosar o exame de Fator Anti-Xa se uso prolongado).',
          es: 'Lactantes < 2 meses: 1,5 mg/kg SC cada 12h. Niños > 2 meses: 1 mg/kg SC cada 12h. Monitorear con nivel de Anti-Xa.'
        }
      },
      administration: { pt: ['EXCLUSIVAMENTE INJEÇÃO SUBCUTÂNEA PROFUNDA. A aplicação deve ser feita na gordura da lateral do abdômen (região do "pneu"), alternando os lados esquerdo e direito. NUNCA expulsar a bolha de ar que vem dentro da seringa de fábrica; ela serve para empurrar o resto do remédio e selar a pele, evitando hematomas negros dolorosos.'], es: ['Inyección Subcutánea exclusiva en la región anterolateral del abdomen. ¡PROHIBIDO ELIMINAR LA BURBUJA DE AIRE DE LA JERINGA DE FÁBRICA!, está diseñada para sellar el trayecto de la aguja y evitar hematomas locales dolorosos.'] },
      renalAdjustment: { required: true, message: { pt: 'CRÍTICO E IMPRESCINDÍVEL. A Enoxaparina acumula no corpo se o rim falhar. Se o ClCr < 30 mL/min, a dose terapêutica mestre DEVE ser reduzida obrigatoriamente de 1 mg/kg de 12/12h para 1 mg/kg UMA VEZ AO DIA (A cada 24 horas). Na profilaxia, reduzir de 40mg para 20mg ao dia. Contraindicada em diálise (usar HNF).', es: 'CRÍTICO. Se elimina por vía renal. Si ClCr < 30 mL/min, la dosis terapéutica se debe reducir de forma obligatoria a 1 mg/kg UNA VEZ AL DÍA (cada 24 horas). En profilaxis, disminuir de 40 mg a 20 mg/día. Contraindicado si ClCr < 15 sin diálisis.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste estrito de dose.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Hematomas e equimoses roxas ao redor do umbigo e sítio de injeção', 'Sangramento gengival leve', 'Dor local com ardência na aplicação'], es: ['Hematomas subcutáneos periumbilicales residuales', 'Ardor urente localizado en el sitio de inyección'] },
      dangerousAdverseEffects: { pt: ['HEMATOMA ESPINHAL EPIDURAL RETIDO (Sangramento compressivo na coluna com paralisia definitiva das pernas se o paciente sofrer punção lombar ou anestesia rack/peridural — VER ALERTAS)', 'Hemorragia interna massiva', 'HIT tipo II (Risco muito menor que na HNF, < 1%)'], es: ['HEMATOMA ESPINAL EPIDURAL COMPRESIVO (Hemorragia medular con parálisis permanente de miembros inferiores si se realiza anestesia neuroaxial trans-tratamiento — Alerta Caja Negra)', 'Hemorragia interna'] },
      contraindications: {
        absolute: { pt: ['Sangramento ativo de grande porte, histórico de HIT induzida por enoxaparina, insuficiência renal terminal ClCr < 15 mL/min sem hemodiálise ativa'], es: ['Hemorragia activa mayor, antecedente de HIT por HBPM, falla renal terminal sin diálisis'] },
        relative: { pt: ['Planejamento de anestesia peridural ou raquianestesia cirúrgica nas próximas 24 horas (exige pausa de segurança rígida)'] }
      },
      safetyFlags: {
        bleedingRisk: true, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'O ALERTA DA CAIXA PRETA DA PARALISIA (ANESTESIA X CLEXANE): A Enoxaparina carrega um aviso de Caixa Preta assustador. Se o paciente estiver usando o Clexane e receber uma anestesia Rack ou Peridural para cirurgia (ou fizer punção lombar), a agulha pode romper um microvaso na coluna. O sangue acumula e esmaga a medula espinhal, deixando o paciente PARALÍTICO e sem andar para sempre. PAUSE o Clexane pelo menos 24h antes da anestesia e só retorne 4 horas após tirar o cateter.', es: 'ALERTA DE CAJA NEGRA (HEMATOMA NEUROAXIAL): Está PROHIBIDO realizar anestesia epidural, raquídea o punción lumbar en pacientes bajo tratamiento con enoxaparina plena. El riesgo de sangrado compresivo en el canal medular induce paraplejía irreversible de extremidades. Suspenda el fármaco al menos 24 horas antes del procedimiento.' }
      },
      references: {
        pt: 'ESSENCE and TIMI 11B Trials (Enoxaparin in Acute Coronary Syndrome); Guidelines de Trombose da SBHT; Bula Clexane.',
        es: 'ESSENCE Trial; TIMI 11B Trial; Directrices de la Sociedad Europea de Cardiología (ESC) para el manejo de la HBPM.'
      }
    },

/* ── DALTEPARINA (Anticoagulante HBPM) ──────────────────────────────── */
    "dalteparina": {
      name: { pt: 'Dalteparina Sódica', es: 'Dalteparina Sódica' },
      category: 'anticoag',
      class: { pt: 'Anticoagulante Parenteral / Heparina de Baixo Peso Molecular / Inibidor de Fator Xa', es: 'Anticoagulante Parenteral / Heparina de Bajo Peso Molecular / Inhibidor del Factor Xa' },
      indications: {
        pt: ['Tratamento a longo prazo de Tromboembolismo Venoso (TVP/TEP) em pacientes com CÂNCER (Droga padrão-ouro de escolha pelo estudo CLOT)', 'Profilaxia de trombose em cirurgias ou doentes acamados'],
        es: ['Tratamiento a largo plazo del tromboembolismo venoso (TEP/TVP) en pacientes con CÁNCER (Estándar de elección por Estudio CLOT)']
      },
      commercialNames: { br: ['Fragmin'], ar: ['Fragmin'] },
      presentation: { pt: ['Seringas preenchidas Subcutâneas 2.500 UI/0,2 mL, 5.000 UI/0,2 mL, 7.500 UI/0,3 mL e 10.000 UI/0,4 mL'], es: ['Jeringas prellenadas Subcutáneas de 2.500 UI, 5.000 UI y 10.000 UI'] },
      mechanism: {
        pt: 'Anticoagulante HBPM obtido por despolimerização com ácido nitroso. Atua ativando a Antitrombina III e neutralizando preferencialmente o Fator Xa da coagulação de forma direcionada. Sua estrutura molecular confere uma estabilidade farmacocinética muito alta e menor taxa de oscilações biológicas em pacientes oncológicos estáveis.',
        es: 'Heparina de bajo peso molecular obtenida por depolimerización con ácido nitroso. Posee una alta relación de actividad anti-Xa/anti-IIa. Bloquea selectivamente la cascada de coagulación con alta estabilidad en pacientes con neoplasias activas.'
      },
      dose: {
        adult: {
          pt: 'Tratamento em Paciente com Câncer (Estudo CLOT): Mês 1: 200 UI/kg via SUBCUTÂNEA, UMA VEZ ao dia (máximo de 18.000 UI/dia). Meses 2 a 6: reduzir a dose para 150 UI/kg via Subcutânea uma vez ao dia. Profilaxia comum: 5.000 UI via SC ao dia.',
          es: 'Terapia en Pacientes con Cáncer (Mes 1): 200 UI/kg vía SUBCUTÁNEA, UNA VEZ al día (Máx 18.000 UI). Meses 2 a 6: reducir la dosis a 150 UI/kg SC una vez al día. Profilaxis: 5.000 UI SC al día.'
        },
        pediatric: {
          pt: 'Uso especializado sob monitoramento de Anti-Xa: 100 a 150 UI/kg via SC a cada 12 horas em crianças com trombose ativa.',
          es: 'Uso restringido bajo dosificación de Fator Anti-Xa por especialista.'
        }
      },
      administration: { pt: ['Injeção puramente via Subcutânea profunda na parede abdominal lateral profunda. Alternar os locais diariamente entre os lados esquerdo e direito do abdômen. Nunca fazer IM.'], es: ['Uso subcutáneo exclusivo. No inyectar por vía intramuscular por riesgo de hematoma.'] },
      renalAdjustment: { required: true, message: { pt: 'Acumula se houver falência renal. Se ClCr < 30 mL/min, usar com monitoramento rigoroso do nível de Fator Anti-Xa no sangue ou migrar para Heparina Não Fracionada.', es: 'Si ClCr < 30 mL/min, se exige monitorización estrecha de los niveles de Anti-Xa plasmáticos por riesgo acumulativo.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste habitual.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Hematomas locais arroxeados', 'Ardência local na pele', 'Sangramento capilar transiente'], es: ['Hematomas locales en el sitio de punción', 'Ardor local transitorio'] },
      dangerousAdverseEffects: { pt: ['Hematoma Epidural Espinhal compressivo com paralisia flácida (Alerta Caixa Preta se punção na coluna)', 'Hemorragia massiva espontânea'], es: ['Hematoma espinal epidural con paraplejía permanente (Caja Negra neuroaxial)', 'Hemorragia mayor'] },
      contraindications: {
        absolute: { pt: ['Sangramento ativo grave, histórico de HIT tipo II por dalteparina ou heparinas'] },
        relative: { pt: ['Plaquetopenia severa pré-existente induzida por quimioterapia (< 50.000/mm³ — exige manejo cuidadoso da dose)'] }
      },
      safetyFlags: {
        bleedingRisk: true, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'O PADRÃO-OURO NO PACIENTE COM CÂNCER (O ESTUDO CLOT): O paciente com câncer possui um sangue muito grosso que faz trombose fácil (estado hipercoagulável tumoral). O grande estudo CLOT provou que a Dalteparina Subcutânea diária é imensamente superior e mais segura que a varfarina oral para tratar trombose no câncer, reduzindo a chance do trombo voltar pela metade sem aumentar os sangramentos.', es: 'EL REY EN ONCOHEMATOLOGÍA (ESTUDIO CLOT): Demostró de forma incontestable que la HBPM continua (Dalteparina) es el tratamiento de elección a largo plazo frente a la warfarina en pacientes con cáncer y trombosis, reduciendo un 52% la recurrencia de embolias.' }
      },
      references: {
        pt: 'CLOT Trial (Dalteparin vs Coumadin in Cancer Patients - NEJM 2003); Guidelines de Trombose no Câncer ASCO/ASNH; Bula Fragmin.',
        es: 'CLOT Trial (NEJM 2003); Directrices de la American Society of Clinical Oncology (ASCO) para trombosis y cáncer.'
      }
    },

/* ── FONDAPARINUX (Anticoagulante Sintético) ────────────────────────── */
    "fondaparinux": {
      name: { pt: 'Fondaparinux Sódico', es: 'Fondaparinux Sódico' },
      category: 'anticoag',
      class: { pt: 'Anticoagulante Parenteral Sintético / Inibidor Ultra-Seletivo do Fator Xa / Pentassacarídeo Puro', es: 'Anticoagulante Parenteral Sintético / Inhibidor Ultra-Selectivo del Factor Xa / Pentasacárido Puro' },
      indications: {
        pt: ['Tratamento de Tromboembolismo Pulmonar (TEP) e TVP agudos', 'Tratamento de Síndrome Coronariana Aguda Angina Estável/Infarto sem supra (Droga de escolha pelo estudo OASIS-5 por reduzir sangramentos)', 'Tratamento de escolha alternativo em pacientes com histórico ou suspeita de HIT Tipo II'],
        es: ['Tratamiento de TEP y TVP agudo', 'Síndrome Coronariano Agudo sin elevación del ST (SCASET - Elección por Estudio OASIS-5)', 'Anticoagulación segura en sospecha de HIT']
      },
      commercialNames: { br: ['Arixtra'], ar: ['Arixtra'] },
      presentation: { pt: ['Seringas preenchidas Subcutâneas 2,5 mg/0,5 mL, 5,0 mg/0,4 mL e 7,5 mg/0,6 mL'], es: ['Jeringas prellenadas Subcutáneas de 2,5 mg, 5,0 mg y 7,5 mg'] },
      mechanism: {
        pt: 'O Míssil Pentassacarídeo Puro. É uma estrutura química 100% sintética que imita apenas a sequência pentassacarídica exata de ligação da heparina. Ele liga-se de forma ultra-seletiva e cirúrgica à Antitrombina III. Essa junção desativa exclusivamente o **Fator Xa** da coagulação, bloqueando a geração de trombina de forma limpa. Como é sintético e pequeno, ele **não consegue se ligar ao Fator Plaquetário 4 (PF4)**, apresentando risco ZERO de causar a terrível Plaquetopenia por Heparina (HIT).',
        es: 'Pentasacárido sintético que se une de forma selectiva e irreversible a la Antitrombina III, neutralizando de manera exclusiva al **Factor Xa**. Al ser una estructura puramente sintética y carecer de cadenas poliméricas largas, es incapaz de unirse al Factor Plaquetario 4 (PF4), presentando un riesgo de causar HIT tipo II de prácticamente CERO.'
      },
      dose: {
        adult: {
          pt: 'Dose Terapêutica Plena (TVP/TEP) baseada em faixas de peso fixas via SUBCUTÂNEA, uma vez ao dia: Peso < 50 kg: 5 mg SC ao dia; Peso de 50 a 100 kg: 7,5 mg SC ao dia; Peso > 100 kg: 10 mg SC ao dia. Profilaxia / Infarto (OASIS-5): 2,5 mg via SUBCUTÂNEA, UMA VEZ ao dia.',
          es: 'Dosis Terapéutica (TVP/TEP) vía SC fija según peso, UNA VEZ al día: < 50 kg: 5 mg/día; 50-100 kg: 7,5 mg/día; > 100 kg: 10 mg/día. Profilaxis / Infarto: 2,5 mg SC al día.'
        },
        pediatric: {
          pt: 'Uso não estabelecido ou seguro na rotina pediátrica básica.',
          es: 'No recomendado en niños.'
        }
      },
      administration: { pt: ['EXCLUSIVAMENTE VIA SUBCUTÂNEA PROFUNDA DIÁRIA. Seringa autoinjetável aplicada na parede abdominal lateral profunda. Nunca expulsar a bolha de ar de segurança da seringa antes da aplicação cutânea.'], es: ['Inyección Subcutánea diaria profunda en el abdomen. No eliminar la burbuja de aire prellenada de la jeringa.'] },
      renalAdjustment: { required: true, message: { pt: 'EXTREMAMENTE PERIGOSO NO RIM. Eliminado puramente de forma inalterada pelos rins. É ABSOLUTAMENTE CONTRAINDICADO e proibido se o ClCr < 30 mL/min devido ao acúmulo violento e risco de hemorragia maciça espontânea na UTI. Se ClCr entre 30-50, usar com extrema cautela.', es: 'ABSOLUTAMENTE CONTRAINDICADO SI ClCr < 30 mL/min. Su depuración es puramente renal y el aclaramiento se detiene, provocando acumulación hemorrágica masiva letal. En ClCr 30-50 mL/min, usar con precaución extrema.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste em disfunção leve ou moderada.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Pequenos hematomas cutâneos', 'Ardência local na aplicação', 'Anemia discreta pós-cirúrgica'], es: ['Hematomas cutáneos localizados', 'Ardor local en el sitio de inyección'] },
      dangerousAdverseEffects: { pt: ['Hemorragia retroperitoneal ou intracraniana severa', 'Hematoma espinal epidural compressivo (Alerta Caixa Preta neuroaxial)'], es: ['Hemorragia mayor espontánea', 'Hematoma neuroaxial epidural compresivo con paraplejía permanente (Caja Negra)'] },
      contraindications: {
        absolute: { pt: ['Insuficiência renal severa com ClCr < 30 mL/min', 'Sangramento ativo de grande porte, endocardite bacteriana aguda ativa'], es: ['Insuficiencia renal severa (ClCr < 30 mL/min)', 'Hemorragia activa mayor'] },
        relative: { pt: ['Baixo peso corporal extremo (< 50 kg) em protocolos profiláticos cirúrgicos'] }
      },
      safetyFlags: {
        bleedingRisk: true, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O SALVADOR DO INFARTO SEM SUPRA (O ESTUDO OASIS-5): O Fondaparinux ganhou a coroa da cardiologia no mega estudo mundial OASIS-5. Comparado com a Enoxaparina (Clexane) no infarto sem supra, o Arixtra cortou os sangramentos graves pela METADE (redução de 48%) e reduziu de forma esmagadora a mortalidade global em 30 dias. É a droga número 1 recomendada pelas diretrizes mundiais nesse perfil, desde que o rim esteja bom.', es: 'EL REY EN INFARTO SIN ELEVACIÓN DE ST (ESTUDIO OASIS-5): Demostró reducir un 48% los sangrados mayores y disminuir de forma drástica la mortalidad global a los 30 días frente a la enoxaparina en el infarto sin supra, convirtiéndose en el estándar número 1 por guías mundiales.' }
      },
      references: {
        pt: 'OASIS-5 Trial (Fondaparinux vs Enoxaparin in Acute Coronary Syndromes - NEJM 2006); Guidelines de Infarto da ESC/SBC; Bula Arixtra.',
        es: 'OASIS-5 Trial (NEJM 2006); Directrices de Síndromes Coronarios de la Sociedad Europea de Cardiología (ESC).'
      }
    },

/* ── VARFARINA (Anticoagulante Oral) ────────────────────────────────── */
    "varfarina": {
      name: { pt: 'Varfarina Sódica', es: 'Warfarina Sódica' },
      category: 'anticoag',
      class: { pt: 'Anticoagulante Oral / Antagonista de Vitamina K (Cumarínico)', es: 'Anticoagulante Oral / Antagonista de la Vitamina K (Cumarínico)' },
      indications: {
        pt: ['Anticoagulação crônica de escolha absoluta em pacientes com PRÓTESE VALVAR CARDÍACA MECÂNICA', 'Esteno mitral reumática grave com fibrilação atrial', 'Tratamento e prevenção secundária de TVP/TEP recorrentes', 'Síndrome do Anticorpo Antifosfolipídeo (SAAF) trombótica'],
        es: ['Anticoagulación crónica de elección absoluta en PRÓTESIS VALVULAR MECÁNICA', 'Estenosis mitral reumática con FA', 'Síndrome Antifosfolípido (SAAF)']
      },
      commercialNames: { br: ['Marevan', 'Coumadin', 'Varfine'], ar: ['Coumadin', 'Circulado', 'Warfarina DOSA'] },
      presentation: { pt: ['Comprimidos simples 1 mg, 2,5 mg, 5 mg e 7,5 mg'], es: ['Comprimidos simples 1 mg, 2 mg, 5 mg y 7,5 mg'] },
      mechanism: {
        pt: 'O Bloqueador de Reciclagem de Vitamina K. A Varfarina inibe a enzima **Epóxido Redutase da Vitamina K**. Ao travar essa enzima, ela impede que a Vitamina K seja reciclada e ativada no fígado. Sem Vitamina K ativa, o fígado fica impossibilitado de realizar a gama-carboxilação (o acabamento final de fábrica) dos fatores de coagulação dependentes de vitamina K: os fatores **II, VII, IX e X**, além das proteínas anticoagulantes C e S, gerando um sangue incoagulável.',
        es: 'Inhibe de forma competitiva la enzima epóxido reductasa de la vitamina K, bloqueando la regeneración de la vitamina K reducida activa. Esto impide la gamma-carboxilación hepática de los factores de coagulación dependientes de vitamina K (**Factores II, VII, IX y X**), así como de las proteínas reguladoras anticoagulantes C y S.'
      },
      dose: {
        adult: {
          pt: 'Início: 2,5 mg a 5 mg via oral, UMA VEZ ao dia, sempre no fim da tarde. OBRIGATÓRIO monitorar o exame de **RNI (Relação Normalizada Internacional)** de forma seriada. Ajustar a dose diária milimetricamente para manter o RNI na META terapêutica do paciente (Meta de 2,0 a 3,0 na FA/TVP; Meta de 2,5 a 3,5 em Prótese Mecânica Aórtica/Mitral).',
          es: 'Inicio: 2,5 a 5 mg vía oral, UNA VEZ al día por la tarde. Monitoreo obligatorio del **RIN**. Ajustar la dosis para sostener el RIN en el rango meta (Meta: 2,0-3,0 en FA/TVP; Meta: 2,5-3,5 en Prótesis Mecánica Mitral).'
        },
        pediatric: {
          pt: 'Uso altamente especializado infantil: Iniciar com 0,1 a 0,2 mg/kg via oral uma vez ao dia, calibrando em centro de hematologia pediátrica guiado por RNI.',
          es: 'Dosificación infantil monitorizada estrechamente por hematólogo infantil según RIN.'
        }
      },
      administration: { pt: ['Uso oral diário contínuo por toda a vida (se prótese valvar). Deve ser tomado sempre no mesmo horário (de preferência às 17h ou 18h) afastado de oscilações abruptas de saladas de folhas verdes escuras na dieta (ricas em vitamina K).'], es: ['Uso oral diario continuo por la tarde. Mantener una dieta estable sin cambios bruscos en la ingesta de vegetales de hoja verde (ricos en vitamina K).'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste baseado no clearance; eliminada por metabolismo biliar/hepático, sendo segura no renal terminal dialítico.', es: 'Sin necesidad de ajuste en falla renal; fármaco de elección en diálisis frente a los DOACs.' } },
      hepaticAdjustment: { required: true, message: { pt: 'ALTAMENTE INSTÁVEL. Metabolizada pelo CYP2C9 e CYP3A4. Fígados cirróticos fabricam menos fatores naturais, disparando o RNI e o risco de hemorragias espontâneas violentas; exige monitoramento hiper-frequente.', es: 'Usar con precaución extrema en insuficiencia hepática por síntesis deficiente de factores basales; riesgo de sangrado crítico.' } },
      commonAdverseEffects: { pt: ['Hematomas espontâneos subcutâneos fáceis', 'Sangramento gengival prolongado ao escovar os dentes', 'Sangramento menstrual aumentado (menorragia)'], es: ['Equimosis cutáneas frecuentes', 'Gingivorragia al cepillado dental', 'Sangrado menstrual prolongado'] },
      dangerousAdverseEffects: { pt: ['NECROSE DE PELE INDUZIDA POR COUMADIN (morte celular e gangrena de mamas, coxas ou nádegas nas primeiras 72h por queda rápida de Proteína C — VER ALERTAS)', 'Hemorragia Intracraniana massiva espontânea', 'Síndrome dos Dedos Azuis (microembolização de cristais de colesterol)'], es: ['NECROSIS CÚTANEA INDUCIDA POR WARFARINA (Gangrena isquémica dérmica en mamas o glúteos los primeros días por caída de Proteína C — Alerta Crítico)', 'Hemorragia intracraneal'] },
      contraindications: {
        absolute: { pt: ['GRAVIDEZ (Altamente teratogênica, causa a Síndrome Fetal da Varfarina com malformações ósseas graves e cegueira do bebê — VER ALERTAS)', 'Sangramento ativo grave em curso'], es: ['EMBARAZO (Contraindicación absoluta por teratogenicidad ósea y del SNC fetal — Síndrome Fetal por Warfarina)', 'Hemorragia activa mayor'] },
        relative: { pt: ['Idosos caidores frequentes com demência avançada (alto risco de AVC hemorrágico por traumatismo craniano)'] }
      },
      safetyFlags: {
        bleedingRisk: true, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'A CAIXA PRETA DA GRAVIDEZ E A GANGRENA DE PELE (O PERIGO DO INÍCIO): A Varfarina deforma fetos humanos (é proibida grávida; use Enoxaparina). Além disso, ela possui um perigo na primeira semana: como ela desliga a Proteína C de defesa mais rápido que os fatores ruins, o sangue do paciente "ENTRAVA" nas primeiras 48h antes de afinar. Se você der varfarina pura em dose alta sem passar uma Heparina de ponte junto, o sangue entope os vasos da pele e a mama ou nádega do paciente sofre GANGRENA e apodrece. Use sempre a ponte de heparina.', es: 'ALERTA DE TERATOGENICIDAD Y NECROSIS CUTÁNEA: Cruza la placenta provocando hipoplasia nasal y malformaciones óseas fetales graves. Además, al inicio del tratamiento, reduce la Proteína C (anticoagulante natural) antes de inactivar los factores procoagulantes, induciendo un estado hipercoagulable paradójico inicial. Iniciar siempre con puente de Heparina obligado para evitar necrosis de tejido mamario o glúteo.' }
      },
      references: {
        pt: 'RE-LY and ARISTOTLE Mechanical Valvular Sub-studies; Diretrizes Brasileiras de Valvopatias da SBC 2020; Manual Lexicomp.',
        es: 'Directrices de Valvopatías de la Sociedad Europea de Cardiología (ESC); Guías de Anticoagulación Oral de la SAR.'
      }
    },

/* ── APIXABANA (Anticoagulante DOAC) ────────────────────────────────── */
    "apixabana": {
      name: { pt: 'Apixabana', es: 'Apixabán' },
      category: 'anticoag',
      class: { pt: 'Anticoagulante Oral Direto (DOAC) / Inibidor Reversível e Altamente Seletivo do Fator Xa', es: 'Anticoagulante Oral Directo (DOAC) / Inhibidor Reversible y Altamente Selectivo del Factor Xa' },
      indications: {"es":["Prevención de ACV y embolia sistémica en fibrilación auricular no valvular","Tratamiento de TVP y TEP","Reducción del riesgo de recurrencia de TVP/TEP tras tratamiento inicial","Profilaxis de TVP tras artroplastia de cadera o rodilla"],"pt":["Prevenção de AVC e embolia sistêmica na fibrilação atrial não valvar","Tratamento de TVP e TEP","Redução do risco de recorrência de TVP/TEP após tratamento inicial","Profilaxia de TVP após artroplastia de quadril ou joelho"]},
      commercialNames: { br: ['Eliquis'], ar: ['Eliquis', 'Apixaban Richmond', 'Aurobán'] },
      presentation: { pt: ['Comprimidos revestidos 2,5 mg e 5,0 mg'], es: ['Comprimidos revestidos 2,5 mg y 5,0 mg'] },
      mechanism: {
        pt: 'O Bloqueador Direto do Fator Xa. É um inibidor oral potente, reversível e direto do Fator Xa livre e ligado ao coágulo. Ao travar o Fator Xa de forma mecânica, ele bloqueia a conversão da protrombina em trombina, impedindo a clivagem do fibrinogênio em redes de fibrina. Ele corta a amplificação da cascata de coagulação sem necessitar do co-factor Antitrombina III, garantindo um efeito anticoagulante estável que dispensa exames de controle.',
        es: 'Inhibidor oral directo, selectivo y reversible del **Factor Xa**, tanto libre como unido al coágulo. Bloquea el paso limitante de la generación de trombina independientemente de la Antitrombina III, estabilizando la coagulación de forma lineal y predecible.'
      },
      dose: {
        adult: {
          pt: 'Dose Padrão na Fibrilação Atrial: 5,0 mg via oral, DUAS VEZES ao dia (de 12/12h). Tratamento de TVP/TEP agudo (Ataque): 10 mg via oral de 12/12h nos primeiros 7 dias, seguido de manutenção de 5,0 mg de 12/12h. REGRA DE REDUÇÃO (Estudo ARISTOTLE): Ver Alertas.',
          es: 'Dosis estándar en FA: 5,0 mg vía oral, DOS VECES al día (cada 12 horas). Carga en TVP/TEP: 10 mg cada 12h por 7 días, luego 5 mg cada 12h. Regla de reducción a 2,5 mg cada 12h si cumple criterios (Ver Alertas).'
        },
        pediatric: {
          pt: 'Uso contraindicado e não aprovado em menores de 18 anos.',
          es: 'No recomendado en niños.'
        }
      },
      administration: { pt: ['Uso oral contínuo crônico de 12 em 12 horas. Pode ser deglutido com ou sem alimentos de forma indiferente. Se o paciente apresentar disfagia extrema, os comprimidos podem ser triturados e misturados em purê de maçã ou infundidos por sonda nasoenteral.'], es: ['Uso oral cada 12 horas, con o sin alimentos. Los comprimidos pueden triturarse para administración por sonda nasogástrica.'] },
      renalAdjustment: { required: true, message: { pt: 'Seguro no rim moderado. Se o clearance de creatinina (ClCr) estiver entre 15-29 mL/min, monitorar eletrólitos de perto e usar a dose de 2,5 mg de 12/12h se houver outro critério. Contraindicada se ClCr < 15 mL/min sem diálise ativa.', es: 'Si ClCr 15-29 mL/min, usar con precaución; la dosis se reduce a 2,5 mg cada 12h si cumple la regla de la edad/peso. Contraindicado si ClCr < 15.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Metabolizado na via CYP3A4. Contraindicada em cirrose descompensada severa Child-Pugh C ou distúrbios de coagulação graves basais.', es: 'Contraindicado en insuficiencia hepática grave (Child-Pugh C).' } },
      commonAdverseEffects: {"es":["Sangrado menor/equimosis","Epistaxis","Sangrado gingival","Anemia","Náusea"],"pt":["Sangramento menor/equimoses","Epistaxe","Sangramento gengival","Anemia","Náusea"]},
      dangerousAdverseEffects: {"es":["Hemorragia mayor o fatal","Hemorragia intracraneal","Hematoma espinal/epidural en procedimientos neuroaxiales","Eventos trombóticos tras interrupción prematura sin anticoagulación alternativa adecuada"],"pt":["Hemorragia maior ou fatal","Hemorragia intracraniana","Hematoma espinal/epidural em procedimentos neuroaxiais","Eventos trombóticos após interrupção prematura sem anticoagulação alternativa adequada"]},
      contraindications: {"es":{"absolute":["Sangrado patológico activo","Hipersensibilidad grave a apixabán"],"relative":["Prótesis valvular: uso no recomendado sin indicación/evidencia específica","Síndrome antifosfolípido triple positiva: DOAC no recomendado","Interacciones potentes simultáneas CYP3A4/P-gp requieren ajuste/evitación según el fármaco asociado"]},"pt":{"absolute":["Sangramento patológico ativo","Hipersensibilidade grave à apixabana"],"relative":["Prótese valvar: uso não recomendado sem indicação/evidência específica","Síndrome antifosfolípide triplo-positiva: DOAC não recomendado","Interações fortes simultâneas CYP3A4/P-gp exigem ajuste/evitação conforme fármaco associado"]}},
      safetyFlags: {
        bleedingRisk: true, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'A REGRA CRÍTICA DOS DOIS CRITÉRIOS DE REDUÇÃO (O ERRO DO IDOSO): Na Fibrilação Atrial, o Eliquis deve ser reduzido de 5mg 2x/dia para 2,5 mg 2x/dia APENAS se o paciente cumprir pelo menos DOIS dos seguintes três critérios: 1) Idade >= 80 anos; 2) Peso corporal <= 60 kg; 3) Creatinina sérica >= 1,5 mg/dL. Dar 2,5mg para um idoso de 82 anos só porque ele é velhinho, mas pesa 75kg e tem rim bom, é subdosagem grave e causa AVC por erro de receita.', es: 'REGLA DE REDUCCIÓN DE DOSIS EN FA (ESTUDIO ARISTOTLE): Reducir la dosis a 2,5 mg cada 12 horas ÚNICAMENTE si el paciente cumple al menos DOS de los siguientes tres criterios: 1) Edad >= 80 años; 2) Peso <= 60 kg; 3) Creatinina sérica >= 1,5 mg/dL. Reducir la dosis con un solo criterio induce subdosificación con riesgo de ACV isquémico.' }
      },
      references: {
        pt: 'ARISTOTLE Trial (Apixaban vs Warfarin in Atrial Fibrillation - NEJM 2011); AMPLIFY Trial (TVP/TEP treatment); Diretrizes da SBC 2023.',
        es: 'ARISTOTLE Trial (NEJM 2011); AMPLIFY Trial (NEJM 2013); Directrices de Fibrilación Auricular de la ESC.'
      },
      /* CALC-FARMACOS-BATCH2-CLINICAL-10-PATHOLOGY-DOSE-SAFETY-V1-B-R0 */
      clinicalEnrichment: {"commonAdverseEffects":{"es":["Sangrado menor/equimosis","Epistaxis","Sangrado gingival","Anemia","Náusea"],"pt":["Sangramento menor/equimoses","Epistaxe","Sangramento gengival","Anemia","Náusea"]},"contraindications":{"es":{"absolute":["Sangrado patológico activo","Hipersensibilidad grave a apixabán"],"relative":["Prótesis valvular: uso no recomendado sin indicación/evidencia específica","Síndrome antifosfolípido triple positiva: DOAC no recomendado","Interacciones potentes simultáneas CYP3A4/P-gp requieren ajuste/evitación según el fármaco asociado"]},"pt":{"absolute":["Sangramento patológico ativo","Hipersensibilidade grave à apixabana"],"relative":["Prótese valvar: uso não recomendado sem indicação/evidência específica","Síndrome antifosfolípide triplo-positiva: DOAC não recomendado","Interações fortes simultâneas CYP3A4/P-gp exigem ajuste/evitação conforme fármaco associado"]}},"dangerousAdverseEffects":{"es":["Hemorragia mayor o fatal","Hemorragia intracraneal","Hematoma espinal/epidural en procedimientos neuroaxiales","Eventos trombóticos tras interrupción prematura sin anticoagulación alternativa adecuada"],"pt":["Hemorragia maior ou fatal","Hemorragia intracraniana","Hematoma espinal/epidural em procedimentos neuroaxiais","Eventos trombóticos após interrupção prematura sem anticoagulação alternativa adequada"]},"doseByIndication":{"es":[{"indication":"FA no valvular — prevención de ACV/embolia sistémica","rows":[{"dose":"5 mg VO cada 12 h.","label":"Estándar"},{"dose":"2,5 mg VO cada 12 h si presenta al menos 2: edad ≥80 años, peso ≤60 kg, creatinina sérica ≥1,5 mg/dL.","label":"Reducida"}]},{"indication":"TVP o TEP — tratamiento","rows":[{"dose":"10 mg VO cada 12 h.","label":"Días 1–7"},{"dose":"5 mg VO cada 12 h.","label":"Después de 7 días"}]},{"indication":"Prevención de recurrencia de TVP/TEP","rows":[{"dose":"2,5 mg VO cada 12 h.","label":"Tras ≥6 meses"}]},{"indication":"Profilaxis tras artroplastia de cadera/rodilla","rows":[{"dose":"2,5 mg VO cada 12 h, iniciando 12–24 h después de la cirugía.","label":"Dosis"},{"dose":"35 días.","label":"Cadera"},{"dose":"12 días.","label":"Rodilla"}]}],"pt":[{"indication":"FA não valvar — prevenção de AVC/embolia sistêmica","rows":[{"dose":"5 mg VO 12/12 h.","label":"Padrão"},{"dose":"2,5 mg VO 12/12 h se houver pelo menos 2: idade ≥80 anos, peso ≤60 kg, creatinina sérica ≥1,5 mg/dL.","label":"Reduzida"}]},{"indication":"TVP ou TEP — tratamento","rows":[{"dose":"10 mg VO 12/12 h.","label":"Dias 1–7"},{"dose":"5 mg VO 12/12 h.","label":"Após 7 dias"}]},{"indication":"Prevenção de recorrência de TVP/TEP","rows":[{"dose":"2,5 mg VO 12/12 h.","label":"Após ≥6 meses"}]},{"indication":"Profilaxia após artroplastia de quadril/joelho","rows":[{"dose":"2,5 mg VO 12/12 h, iniciando 12–24 h após a cirurgia.","label":"Dose"},{"dose":"35 dias.","label":"Quadril"},{"dose":"12 dias.","label":"Joelho"}]}]},"indications":{"es":["Prevención de ACV y embolia sistémica en fibrilación auricular no valvular","Tratamiento de TVP y TEP","Reducción del riesgo de recurrencia de TVP/TEP tras tratamiento inicial","Profilaxis de TVP tras artroplastia de cadera o rodilla"],"pt":["Prevenção de AVC e embolia sistêmica na fibrilação atrial não valvar","Tratamento de TVP e TEP","Redução do risco de recorrência de TVP/TEP após tratamento inicial","Profilaxia de TVP após artroplastia de quadril ou joelho"]},"references":["DailyMed/FDA — Eliquis (apixaban) Prescribing Information 2026"]}
    },

/* ── RIVAROXABANA (Anticoagulante DOAC) ──────────────────────────────── */
    "rivaroxabana": {
      name: { pt: 'Rivaroxabana', es: 'Rivaroxabán' },
      category: 'anticoag',
      class: { pt: 'Anticoagulante Oral Direto (DOAC) / Inibidor Seletivo de Ação Direta do Fator Xa', es: 'Anticoagulante Oral Directo (DOAC) / Inhibidor Selectivo de Acción Directa del Factor Xa' },
      indications: {
        pt: ['Prevenção de AVC em pacientes com Fibrilação Atrial não-valvar (Estratégia de tomada única diária do estudo ROCKET-AF)', 'Tratamento e prevenção secundária de TVP e TEP agudos', 'Profilaxia de trombose pós-artroplastia de quadril ou joelho'],
        es: ['Prevención de ACV en FA no valvular (Comodidad de una sola toma diaria en Estudio ROCKET-AF)', 'Tratamiento de TVP y TEP']
      },
      commercialNames: { br: ['Xarelto', 'Riverox', 'Rivaroxabana (SUS)'], ar: ['Xarelto', 'Rivaroxabán Richmond', 'Xarebán', 'Givotan'] },
      presentation: { pt: ['Comprimidos revestidos 10 mg, 15 mg e 20 mg'], es: ['Comprimidos revestidos 10 mg, 15 mg y 20 mg'] },
      mechanism: {
        pt: 'O Travador Oral do Complexo Protrombinase. Liga-se de forma direta, seletiva e altamente competitiva ao sítio ativo do Fator Xa, tanto na sua forma livre quanto quando já está acoplado no complexo protrombinase dentro do coágulo. Isso interrompe de forma violenta a cascata de coagulação, parando a conversão de protrombina em trombina de forma imediata por uma via independente da Antitrombina III.',
        es: 'Inhibidor oral directo y altamente selectivo del **Factor Xa**. Se une de forma competitiva al sitio catalítico del factor Xa libre y unido al complejo protrombinasa, bloqueando la amplificación de la cascata y la producción de trombina de forma lineal.'
      },
      dose: {
        adult: {
          pt: 'Fibrilação Atrial Padrão: 20 mg via oral, UMA VEZ ao dia, obrigatoriamente JUNTO COM O JANTAR. Tratamento de TVP/TEP agudo (Ataque): 15 mg via oral, DUAS VEZES ao dia (de 12/12h) nos primeiros 21 dias, seguido de manutenção de 20 mg uma vez ao dia com o jantar.',
          es: 'FA estándar: 20 mg vía oral, UNA VEZ al día, obligatoriamente JUNTO CON LA CENA. Carga en TVP/TEP: 15 mg cada 12 horas por los primeros 21 días, luego 20 mg una vez al día con la cena.'
        },
        pediatric: {
          pt: 'Aprovado em pediatria para o tratamento de TEV a partir do nascimento após 5 dias de heparina parenterica, utilizando suspensão oral calibrada por peso corporal.',
          es: 'Aprobado en niños para tratamiento de tromboembolismo venoso con dosis ajustada por peso en suspensión líquida.'
        }
      },
      administration: { pt: ['Uso oral contínuo diário. CRÍTICO: As doses de 15 mg e 20 mg DEVEM SER TOMADAS OBRIGATORIAMENTE JUNTO COM UMA REFEIÇÃO PESADA (Almoço ou Jantar). Tomar essas doses de estômago vazio derrete e desaba a absorção do remédio em mais de 35%, fazendo com que o paciente sofra um AVC isquêmico por falha do remédio.'], es: ['Las dosis de 15 mg y 20 mg DEBEN INGERIRSE OBLIGATORIAMENTE CON ALIMENTOS (Cena). Tomarlas en ayunas disminuye un 35% su biodisponibilidad plasmática provocando el fracaso del tratamiento.'] },
      renalAdjustment: { required: true, message: { pt: 'ALTAMENTE DEPENDENTE DO RIM. Se o clearance de creatinina (ClCr) estiver entre 30-49 mL/min, a dose da Fibrilação Atrial DEVE ser reduzida obrigatoriamente de 20 mg para 15 mg via oral, UMA VEZ ao dia. Se ClCr < 15 mL/min: ABSOLUTAMENTE CONTRAINDICADA.', es: 'MANDATORIO SEGÚN CLERANCE. En FA, si ClCr 15-49 mL/min, reducir la dosis de forma obligatoria de 20 mg a 15 mg vía oral, UNA VEZ al día. Contraindicado si ClCr < 15.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Contraindicado em pacientes com cirrose hepática moderada a grave Child-Pugh B e C ou histórico de coagulopatia biliar.', es: 'Contraindicado en insuficiencia hepática moderada o grave (Child B o C).' } },
      commonAdverseEffects: { pt: ['Sangramento de gengiva e pequenos hematomas na pele', 'Sangramento gastrointestinal leve', 'Tontura e cefaleia leve'], es: ['Hematomas subcutáneos', 'Gingivorragia leve', 'Sangrado gastrointestinal menor'] },
      dangerousAdverseEffects: { pt: ['Hemorragia gastrointestinal maior severa (taxa ligeiramente maior que a apixabana)', 'Hemorragia intracraniana aguda', 'Hematoma epidural espinhal compressivo (Alerta Caixa Preta neuroaxial)'], es: ['Hemorragia digestiva alta masiva', 'Hemorragia intracraneal', 'Hematoma neuroaxial compresivo (Caja Negra)'] },
      contraindications: {
        absolute: { pt: ['PRESENÇA DE PRÓTESE VALVAR MECÂNICA CARDÍACA (Veto absoluto de classe)', 'Insuficiência renal terminal ClCr < 15 mL/min', 'Sangramento ativo de grande porte'], es: ['Prótesis valvular mecánica cardíaca', 'Falla renal severa (ClCr < 15 mL/min)', 'Hemorragia activa'] },
        relative: { pt: ['Uso associado com potentes inibidores duplos do CYP3A4 e P-gp (Itraconazol, Ritonavir)'] }
      },
      safetyFlags: {
        bleedingRisk: true, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'A OBRIGATORIEDADE DA TOMADA COM A COMIDA: O Xarelto de 15mg e 20mg não entra no sangue se o estômago estiver vazio. Se o paciente idoso tomar o comprimido apenas com um copo de água pela manhã em jejum por erro, o estômago não absorve o remédio. O sangue continua grosso e o paciente enfarta ou faz AVC por erro de administração. Escreva na receita: TOMAR NO MEIO DO JANTAR.', es: 'ALERTA DE BIODISPONIBILIDAD CON ALIMENTOS: Xarelto de 20 mg requiere la presencia de quimo graso en el estómago para disolverse adecuadamente. Tomarlo en ayunas reduce críticamente su absorción, dejando al paciente desprotegido frente al riesgo embólico. Debe administrarse en la cena.' }
      },
      references: {
        pt: 'ROCKET-AF Trial (Rivaroxaban vs Warfarin in Atrial Fibrillation - NEJM 2011); EINSTEIN-TVP and TEP Trials; Bula Xarelto.',
        es: 'ROCKET-AF Trial (NEJM 2011); EINSTEIN Trials (NEJM 2010); Directrices de Anticoagulación de la ESC.'
      }
    },

/* ── EDOXABANA (Anticoagulante DOAC) ────────────────────────────────── */
    "edoxabana": {
      name: { pt: 'Edoxabana (Tosilato de)', es: 'Edoxabán (Tosilato de)' },
      category: 'anticoag',
      class: { pt: 'Anticoagulante Oral Direto (DOAC) / Inibidor Altamente Seletivo do Fator Xa', es: 'Anticoagulante Oral Directo (DOAC) / Inhibidor Altamente Selectivo del Factor Xa' },
      indications: {
        pt: ['Prevenção de AVC e embolia sistêmica em adultos com Fibrilação Atrial não-valvar (Estratégia do Estudo ENGAGE AF-TIMI 48)', 'Tratamento e prevenção secundária de TVP e TEP agudos após curso inicial parenteral'],
        es: ['Prevención de ACV en FA no valvular (Esquema de toma única diaria en Estudio ENGAGE AF-TIMI 48)', 'Tratamiento de TVP y TEP']
      },
      commercialNames: { br: ['Lixiana'], ar: ['Lixiana'] },
      presentation: { pt: ['Comprimidos revestidos 15 mg, 30 mg e 60 mg'], es: ['Comprimidos revestidos 15 mg, 30 mg y 60 mg'] },
      mechanism: {
        pt: 'Inibidor oral direto, seletivo e reversível do Fator Xa. Trava de forma competitiva a ativação da cascata bloqueando a conversão de pro-trombina em trombina livre de forma altamente linear, com excelente perfil de segurança e mínima dependência metabólica do citocromo hepático CYP3A4.',
        es: 'Inhibidor oral selectivo y reversible del **Factor Xa**. Inactiva la producción de trombina bloqueando el factor Xa libre y unido al complejo de la protrombinasa de forma altamente lineal, con baja tasa de interacciones con el citocromo CYP3A4.'
      },
      dose: {
        adult: {
          pt: 'Dose Padrão (Fibrilação Atrial / TVP): 60 mg via oral, UMA VEZ ao dia, a qualquer hora. REGRA DE REDUÇÃO COMPULSÓRIA (Estudo ENGAGE): Reduzir a dose obrigatoriamente para 30 mg via oral, UMA VEZ ao dia, se o paciente tiver pelo menos UM dos seguintes critérios: 1) Clearance de Creatinina (ClCr) entre 15-50 mL/min; 2) Peso corporal <= 60 kg; 3) Uso concomitante de inibidores potentes da P-gp (como Quinidina ou Ciclosporina).',
          es: 'Dosis estándar en FA: 60 mg vía oral, UNA VEZ al día. REGLA DE REDUCCIÓN DE DOSIS: Disminuir a 30 mg una vez al día si cumple con AL MENOS UN criterio: 1) ClCr entre 15-50 mL/min; 2) Peso <= 60 kg; 3) Uso concomitante de inhibidores de la P-gp (Ciclosporina).'
        },
        pediatric: {
          pt: 'Uso não recomendado ou aprovado em menores de 18 anos.',
          es: 'No recomendado en niños.'
        }
      },
      administration: { pt: ['Uso oral de tomada única diária. Pode ser tomado com ou sem alimentos de forma indiferente. Apresenta a menor taxa de interação alimentar da classe dos DOACs.'], es: ['Uso oral, una vez al día, con o sin alimentos de forma indiferente.'] },
      renalAdjustment: { required: true, message: { pt: 'O DOAC COM JANELA REVERSA DE ALERTA. Se ClCr entre 15-50 mL/min, reduzir a dose para 30 mg ao dia. Contraindicada se ClCr < 15 mL/min. ATENÇÃO SE RIM FOR SUPER-BOM: Ver Alertas.', es: 'Si ClCr 15-50 mL/min, reducir dosis a 30 mg/día. Contraindicado si ClCr < 15 mL/min. ¡ALERTA DE RIÑÓN SUPER SANO!: Ver Alertas.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Contraindicado em insuficiência hepática moderada a grave Child-Pugh B e C ou coagulopatia associada.', es: 'Contraindicado en insuficiencia hepática moderada o grave (Child B/C).' } },
      commonAdverseEffects: { pt: ['Pequenos hematomas na pele', 'Sangramento nasal (epistaxe) leve', 'Aumento de transaminases discreto', 'Anemia por microperdas'], es: ['Equimosis leves', 'Epistaxis menor', 'Anemia transitoria leve'] },
      dangerousAdverseEffects: { pt: ['Hemorragia maior gastrointestinal', 'Hemorragia intracraniana aguda', 'Hematoma espinal epidural compressivo (Alerta Caixa Preta neuroaxial)'], es: ['Hemorragia digestiva alta masiva', 'Hemorragia intracraneal', 'Hematoma neuroaxial compresivo (Caja Negra)'] },
      contraindications: {
        absolute: { pt: ['PRESENÇA DE PRÓTESE VALVAR MECÂNICA CARDÍACA (Veto de classe)', 'Clearance de Creatinina super-eficiente ClCr > 95 mL/min (VER ALERTAS)', 'Sangramento ativo'], es: ['Prótesis valvular mecánica cardíaca', 'Aclaramiento renal super-eficiente (ClCr > 95 mL/min)', 'Hemorragia activa'] },
        relative: { pt: ['Uso associado com Rifampicina ou Carbamazepina (zeram o efeito da edoxabana)'] }
      },
      safetyFlags: {
        bleedingRisk: true, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'O ALERTA DO RIM "SUPER-BOM" (CAIXA PRETA REVERSA DO LIXIANA): A Edoxabana carrega um dos alertas mais bizarros da medicina. Se você der esse remédio para um paciente jovem com o rim super-saudável e hiper-filtrante (Clearance de Creatinina ClCr > 95 mL/min), o rim limpa a Edoxabana tão rápido do sangue que o paciente fica sem anticoagulação nenhuma. O risco de AVC isquêmico explode. Se o ClCr > 95, é PROIBIDO usar Lixiana; mude para Apixabana ou Varfarina.', es: 'ADVERTENCIA DE CAJA NEGRA REVERSA (RIÑÓN HIPERFILTRANTE): No debe administrarse Edoxabán en pacientes con FA no valvular que posean una función renal super-eficiente (ClCr > 95 mL/min). El riñón depura el fármaco de forma ultra-veloz, cayendo los niveles en sangre por debajo del umbral terapéutico y disparando el riesgo de ACV isquémico. Contraindicado.' }
      },
      references: {
        pt: 'ENGAGE AF-TIMI 48 Trial (Edoxaban vs Warfarin - NEJM 2013); Hokusai-VTE Trial (TVP/TEP treatment); Bula Lixiana.',
        es: 'ENGAGE AF-TIMI 48 Trial (NEJM 2013); Hokusai-VTE Trial (NEJM 2013); Directrices de FA de la ESC.'
      }
    },

/* ── DABIGATRANA (Anticoagulante DOAC anti-IIa) ──────────────────────── */
    "dabigatrana": {
      name: { pt: 'Dabigatrana Etexilato', es: 'Dabigatrán Etexilato' },
      category: 'anticoag',
      class: { pt: 'Anticoagulante Oral Direto (DOAC) / Inibidor Direto e Reversível da Trombina (Fator IIa)', es: 'Anticoagulante Oral Directo (DOAC) / Inhibidor Directo y Reversible de la Trombina (Factor IIa)' },
      indications: {
        pt: ['Prevenção de AVC e embolia sistêmica em pacientes com Fibrilação Atrial não-valvar (Estratégia do Estudo RE-LY)', 'Tratamento e prevenção de recorrência de TVP e TEP agudos'],
        es: ['Prevención de ACV en FA no valvular (Único inhibidor directo de trombina en Estudio RE-LY)', 'Tratamiento de TVP y TEP']
      },
      commercialNames: { br: ['Pradaxa'], ar: ['Pradaxa', 'Dabigatrán Richmond'] },
      presentation: { pt: ['Cápsulas duras 75 mg, 110 mg e 150 mg'], es: ['Cápsulas duras 75 mg, 110 mg y 150 mg'] },
      mechanism: {
        pt: 'O Engessador Direto da Trombina. É um inibidor oral direto, potente e competitivo da **Trombina (Fator IIa)**. Ao contrário dos DOACs anteriores (que bloqueiam o Xa), a Dabigatrana liga-se de forma direta no sítio ativo da trombina livre e da trombina já presa no coágulo. Isso impede mecanicamente que a trombina clive o fibrinogênio em fibrina e desliga a ativação plaquetária induzida pelo trombo, abortando o crescimento do coágulo arterial ou venoso.',
        es: 'Inhibidor directo, selectivo y competitivo de la **Trombina (Factor IIa)** de forma independiente de la Antitrombina III. Se une al sitio catalítico de la trombina libre y unida a fibrina, bloqueando la conversión de fibrinógeno en redes estables de fibrina y anulando la agregación inducida por trombina.'
      },
      dose: {
        adult: {
          pt: 'Fibrilação Atrial Padrão: 150 mg via oral, DUAS VEZES ao dia (de 12/12h). Redução Compulsória por Idade: Se o paciente tiver idade >= 80 anos ou alto risco de sangramento gástrico, reduzir a dose obrigatoriamente para 110 mg via oral, DUAS VEZES ao dia.',
          es: 'FA estándar: 150 mg vía oral, DOS VECES al día (cada 12 horas). Reducción obligatoria por edad: Si tiene >= 80 años o alto riesgo hemorrágico gástrico, disminuir a 110 mg cada 12 horas.'
        },
        pediatric: {
          pt: 'Aprovado para tratamento de TEV pediátrico a partir de 3 meses de vida após curso parenteral, utilizando cápsulas ou sachês de grânulos com ajuste rígido por peso corporal.',
          es: 'Aprobado en niños > 3 meses con gránulos dosificados según peso corporal.'
        }
      },
      administration: { pt: ['Uso oral de 12/12h. AS CÁPSULAS DEVEM SER ENGOLIDAS INTEIRAS COM UM COPO CHEIO DE ÁGUA. É ABSOLUTAMENTE PROIBIDO ABRIR A CÁPSULA OU MASTIGAR OS MICROGRÂNULOS INTERNOS. Abrir a cápsula aumenta a biodisponibilidade da droga em mais de 75% de forma descontrolada, jogando o paciente em overdose hemorrágica imediata (VER ALERTAS).'], es: ['TRAGAR LAS CÁPSULAS ENTERAS CON AGUA. ¡PROHIBIDO ABRIR LAS CÁPSULAS O MASTICAR LOS PELLETS INTERNOS! Abrir la cápsula dispara un 75% su absorción percutánea descontrolada induciendo sangrado interno masivo inmediato.'] },
      renalAdjustment: { required: true, message: { pt: 'O DOAC MAIS DEPENDENTE DO RIM (~80% de excreção renal). Se o ClCr estiver entre 30-49 mL/min, usar com cautela extrema e considerar a dose de 110 mg de 12/12h. Se ClCr < 30 mL/min: ABSOLUTAMENTE CONTRAINDICADA EM TODA A EUROPA E BRASIL (Risco fatal de acúmulo e sangramento).', es: 'EL DOAC MÁS RENODEPENDIENTE (80% depuración renal). Si ClCr 30-49 mL/min, usar con precaución; dosis de 110 mg cada 12h. ABSOLUTAMENTE CONTRAINDICADO SI ClCr < 30 mL/min por riesgo de sangrado mayor intratable.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste estrito, rota predominantemente de filtragem renal.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['GASTRITE E DISPEPSIA VIOLENTAS (afeta ~15% dos usuários devido ao núcleo de ácido tartárico da cápsula que queima o estômago)', 'Hematomas e sangramentos leves cutâneos', 'Azia e pirose'], es: ['DISPEPSIA Y GASTRITIS SEVERA (en el 15% de los casos por el núcleo de ácido tartárico de la cápsula que lesiona la mucosa gástrica)', 'Pirosis', 'Equimosis'] },
      dangerousAdverseEffects: { pt: ['Hemorragia digestiva alta massiva por sangramento de úlcera', 'Hemorragia intracraniana aguda', 'Hematoma epidural espinhal compressivo (Alerta Caixa Preta neuroaxial)'], es: ['Hemorragia digestiva alta masiva', 'Hemorragia intracraneal', 'Hematoma neuroaxial compresivo (Caja Negra)'] },
      contraindications: {
        absolute: { pt: ['PRESENÇA DE PRÓTESE VALVAR MECÂNICA CARDÍACA (Estudo RE-ALIGN provou que causou infarto e trombose da válvula mecânica — VETO ABSOLUTO)', 'Insuficiência renal grave ClCr < 30 mL/min', 'Sangramento ativo'], es: ['Prótesis valvular mecánica (Estudio RE-ALIGN demostró fracaso crítico con trombosis y muerte)', 'Insuficiencia renal con ClCr < 30 mL/min', 'Hemorragia activa'] },
        relative: { pt: ['Uso associado com indutores potentes da P-gp (Rifampicina anula a dabigatrana)'] }
      },
      safetyFlags: {
        bleedingRisk: true, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'O PERIGO DE ABRIR A CÁPSULA E A QUEIMAÇÃO DO ESTÔMAGO: A Dabigatrana queima muito o estômago porque possui ácido tartárico dentro para ajudar a absorver. O paciente idoso tenta abrir a cápsula e salpicar as bolinhas na comida para parar de queimar. Explique de forma enérgica: ABRIR A CÁPSULA MULTIPLICA O REMÉDIO POR DOIS DENTRO DO CORPO. O paciente sofre uma hemorragia interna grave nas próximas horas por erro. Engolir sempre inteira com muita água.', es: 'ALERTA DE PROHIBICIÓN DE APERTURA DE CÁPSULA: Las cápsulas contienen un núcleo de ácido tartárico que induce dispepsia severa. Si el paciente abre la cápsula para tragar solo los gránulos internos, altera el recubrimiento protector disparando la biodisponibilidad un 75%, gatillando sobredosis hemorrágica masiva espontánea. Tragar siempre entera.' }
      },
      references: {
        pt: 'RE-LY Trial (Dabigatran vs Warfarin in Atrial Fibrillation - NEJM 2009); RE-ALIGN Trial (Mechanical Valves catastrophe - NEJM 2013); Bula Pradaxa.',
        es: 'RE-LY Trial (NEJM 2009); RE-ALIGN Trial (Contraindicación en Válvulas Mecánicas - NEJM 2013); Directrices de FA de la ESC.'
      }
    },

/* ── BETRIXABANA (Anticoagulante DOAC de Longa Duração) ─────────────── */
    "betrixabana": {
      name: { pt: 'Betrixabana (Maleato de)', es: 'Betrixabán (Maleato de)' },
      category: 'anticoag',
      class: { pt: 'Anticoagulante Oral Direto (DOAC) / Inibidor do Fator Xa de Longa Meia-Vida', es: 'Anticoagulante Oral Directo (DOAC) / Inhibidor del Factor Xa de Larga Vida Media' },
      indications: {
        pt: ['Profilaxia de longa duração de Tromboembolismo Venoso (TVP/TEP) em pacientes adultos internados por doença médica aguda com restrição severa de mobilidade e alto risco de trombose prolongada (Estratégia do Estudo APEX)']
      },
      commercialNames: { br: ['Bevyxxa (Importação especializada)'], ar: ['Bevyxxa'] },
      presentation: { pt: ['Cápsulas duras 40 mg e 80 mg'], es: ['Cápsulas duras 40 mg y 80 mg'] },
      mechanism: {
        pt: 'O DOAC de Longa Meia-Vida e Mínimo Rim. Inibidor altamente seletivo, direto e reversível do Fator Xa. Sua grande jogada de bioengenharia molecular: ele possui uma meia-vida biológica imensa de 20 horas no sangue e apresenta a MENOR taxa de filtragem renal da classe dos DOACs (~5% a 7%). Quase tudo é eliminado intacto pela bile e fezes, tornando-o extremamente estável e seguro contra flutuações de falência renal aguda em idosos acamados.',
        es: 'Inhibidor oral directo y selectivo del **Factor Xa**. Se destaca por poseer la vida media más larga de su clase (~20 horas) y el menor aclaramiento renal (~5-7%), eliminándose predominantemente por vía biliar-fecal de forma inalterada, lo que minimiza el riesgo de acumulación por falla renal aguda en ancianos.'
      },
      dose: {
        adult: {
          pt: 'Dose de Carga (Dia 1): 160 mg via oral em dose única diária. Manutenção (Dias 2 a 35-42): 80 mg via oral, UMA VEZ ao dia, administrado obrigatoriamente no mesmo horário junto com alimentos. Curso estendido protetor de até 6 semanas de cama.',
          es: 'Dosis de Carga (Día 1): 160 mg vía oral toma única. Mantenimiento posterior (Días 2-42): 80 mg vía oral, UNA VEZ al día, administrado estrictamente con alimentos.'
        },
        pediatric: {
          pt: 'Uso não recomendado ou aprovado em menores de 18 anos.',
          es: 'No indicado en niños.'
        }
      },
      administration: { pt: ['Uso oral diário contínuo. DEVE SER ADMINISTRADA OBRIGATORIAMENTE JUNTO COM ALIMENTOS. A comida lentifica de forma equilibrada o trânsito e estabiliza a absorção da molécula lípidica. Engolir as cápsulas inteiras.'], es: ['Uso oral diario. ADMINISTRAR OBLIGATORIAMENTE CON ALIMENTOS para asegurar la homogeneidad de su absorción biliar-fecal.'] },
      renalAdjustment: { required: true, message: { pt: 'Se insuficiência renal moderada a grave (ClCr entre 15-30 mL/min), a dose de manutenção mestre DEVE ser reduzida pela metade: carga de 80 mg no Dia 1, seguido de 40 mg uma vez ao dia do Dia 2 em diante.', es: 'Si ClCr 15-30 mL/min, la dosis se reduce a la mitad de forma obligatoria: Carga de 80 mg el Día 1, seguido de 40 mg/día de mantenimiento posterior.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Como sua rota principal de eliminação é biliar-fecal inalterada, é contraindicada em pacientes com insuficiência hepática moderada ou grave Child B e C devido ao risco de colapso de excreção.', es: 'Contraindicado en insuficiencia hepática moderada o grave (Child B/C) por fallo en la excreción biliar del fármaco.' } },
      commonAdverseEffects: { pt: ['Hematomas subcutâneos discretos', 'Náusea leve episódica', 'Constipação ou diarreia de descarte biliar'], es: ['Equimosis leves', 'Náuseas', 'Alteración del ritmo evacuatorio biliar'] },
      dangerousAdverseEffects: { pt: ['Hemorragia maior retroperitoneal ou digestiva', 'Hematoma epidural espinhal compressivo (Alerta Caixa Preta neuroaxial se punção lombar)'], es: ['Hemorragia mayor espontánea', 'Hematoma neuroaxial compresivo con riesgo de paraplejía permanente (Caja Negra)'] },
      contraindications: {
        absolute: { pt: ['Sangramento ativo patológico grave, insuficiência hepática moderada a grave Child B e C, prótese valvar mecânica'], es: ['Hemorragia activa, insuficiencia hepática moderada/grave, prótesis mecánica cardíaca'] },
        relative: { pt: ['Uso concomitante com inibidores potentes da P-gp (Amiodarona) exige redução da dose de Betrixabana para 40mg/dia'] }
      },
      safetyFlags: {
        bleedingRisk: true, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O CORTADOR DE TROMBOSE DO ACAMADO DE LONGA DURAÇÃO (O ESTUDO APEX): Os DOACs normais (como Xarelto/Eliquis) só protegem o paciente de trombose enquanto ele está dentro do hospital. O estudo APEX provou que estender a proteção em casa usando a Betrixabana por até 42 dias após a alta em pacientes idosos graves que continuam de cama corta de forma drástica a ocorrência de embolias pulmonares fatais secundárias.', es: 'EL PROTECTOR EXTENDIDO POST-ALTA (ESTUDIO APEX): Demostró que prolongar la tromboprofilaxis de forma ambulatoria por hasta 42 días con Betrixabán en pacientes médicos agudos post-alta que persisten inmóviles, reduce de forma significativa las embolias pulmonares fatales frente al uso intrahospitalario corto.' }
      },
      references: {
        pt: 'APEX Trial (Extended Betrixaban Prophylaxis in Acute Medical Illness - NEJM 2016); FDA Medical Review Bevyxxa; Bula Profissional.',
        es: 'APEX Trial (NEJM 2016); FDA Prescribing Information (Bevyxxa); Directrices de Profilaxis Médica de la ESC.'
      }
    }

  }); /* fim Object.assign ANTICOAG_DRUGS_DB — BUILD 452 (aas_antiagregante + clopidogrel + ticagrelor + prasugrel + cangrelor + heparina_hnf + enoxaparina + dalteparina + fondaparinux + varfarina + apixabana + rivaroxabana + edoxabana + dabigatrana + betrixabana — Consolidação Central Anticoagulação e Antiagregação) */

})();
/* GOLD33_SELECTIVE:aas_antiagregante:START */
;(function(){var db=window.ANTICOAG_DRUGS_DB;if(!db||!db["aas_antiagregante"])throw new Error("GOLD33_MISSING_CANONICAL:aas_antiagregante");db["aas_antiagregante"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "001",
    "requiredFieldCount": 33,
    "approvedSha256": "53bcfc3dbf1c89900d6f8192c0101c1b064d440c6500738b654f137c419db449",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "BLOQUEADA",
    "ownerPublicationAuthorization": "mission10-owner-confirmed"
  },
  "pt": {
    "name": "Ácido acetilsalicílico (AAS) — ficha restrita ao uso antiagregante; não cobre analgésico/antitérmico.",
    "class": "Antiagregante plaquetário; salicilato.",
    "pharmacologicClass": "Inibidor irreversível da ciclo-oxigenase plaquetária, com redução de tromboxano A2.",
    "commercialNames": "",
    "presentation": "",
    "presentations": "",
    "mechanism": "Acetila irreversivelmente COX-1 nas plaquetas; a inibição persiste pela vida da plaqueta.",
    "pharmacodynamics": "Reduz a síntese plaquetária de tromboxano A2 e a agregação; aumenta o risco de sangramento.",
    "pharmacokinetics": "",
    "indications": "Uso antiagregante depende do cenário clínico. Em SCA, a diretriz ACC/AHA 2025 mantém dupla antiagregação com AAS e inibidor P2Y12 como estratégia padrão quando o risco de sangramento não é alto.",
    "dose": "Não há dose universal segura nesta ficha. Para prevenção cardiovascular/uso em SCA, selecionar exclusivamente o regime da diretriz aplicável e do produto local; não automatizar sem indicação, formulação e avaliação do risco hemorrágico.",
    "pediatricDose": "",
    "renalDose": "Sem ajuste posológico antiagregante numérico proposto; doença renal aumenta risco de sangramento e exige avaliação individual.",
    "hepaticDose": "Sem ajuste numérico proposto; avaliar coagulopatia, risco gastrointestinal e risco de sangramento.",
    "commonAdverseEffects": "Dispepsia, azia, náusea e sangramento/hematomas.",
    "dangerousAdverseEffects": "Hemorragia gastrointestinal ou intracraniana, broncoespasmo/anafilaxia por hipersensibilidade e toxicidade por salicilato em exposição excessiva.",
    "adverseEffects": "Tinnitus pode sinalizar exposição excessiva; confirmar causa e produto antes de qualquer conduta.",
    "contraindications": "Hipersensibilidade a salicilatos/AINEs, sangramento ativo ou condição em que o risco hemorrágico seja inaceitável exigem avaliação médica; confirmar contraindicações na bula local.",
    "interactions": "Anticoagulantes, outros antiagregantes, AINEs, ISRS/IRSN e álcool podem aumentar risco de sangramento; revisar sempre a combinação real.",
    "monitoring": "Sinais de sangramento, hemograma quando clinicamente indicado, função renal/hepática conforme contexto e reconciliação de medicamentos.",
    "administration": "Via oral; não triturar formulação gastrorresistente sem confirmação do produto.",
    "preparation": "",
    "infusionProtocol": "",
    "pregnancy": "Não usar dose/indicação obstétrica nesta ficha; risco e permissões variam por dose, idade gestacional e produto.",
    "lactation": "Sem recomendação universal proposta; confirmar fonte local e cenário clínico.",
    "specialPopulations": "Idosos e pessoas com antecedente de úlcera, sangramento, asma por AINE ou uso concomitante de antitrombóticos requerem estratificação individual.",
    "patientEducation": "Não combinar por conta própria com ibuprofeno, naproxeno, anticoagulante ou outro antiagregante; procurar atendimento por fezes escuras, hematêmese, sangramento persistente, síncope ou déficit neurológico.",
    "clinicalPearls": "Separar rigorosamente a ficha antiagregante de usos analgésicos e das diferentes apresentações; dose e benefício mudam com a indicação.",
    "guidelineRecommendations": "ACC/AHA 2025: em SCA, dupla antiagregação com AAS + inibidor oral de P2Y12 é a estratégia padrão por pelo menos 12 meses na ausência de alto risco hemorrágico; individualizar.",
    "safetyFlags": "ALTO ALERTA: risco hemorrágico; cálculo e dose automática bloqueados.",
    "alerts": "Não disponibilizar dose automática até vincular indicação, formulação, país e diretriz/protocolo aprovado.",
    "references": [
      "American College of Cardiology. 2025 ACC/AHA Acute Coronary Syndromes Clinical Guidance summary. US. Consultado 2026-09-17. https://www.acc.org/latest-in-cardiology/articles/2025/04/01/01/new-in-clinical-guidance"
    ],
    "ref": "https://www.acc.org/latest-in-cardiology/articles/2025/04/01/01/new-in-clinical-guidance"
  },
  "es": {
    "name": "Ácido acetilsalicílico (AAS) — ficha restringida al uso antiagregante; no cubre uso analgésico/antitérmico.",
    "class": "Antiagregante plaquetario; salicilato.",
    "pharmacologicClass": "Inhibidor irreversible de la ciclooxigenasa plaquetaria, con reducción de tromboxano A2.",
    "commercialNames": "",
    "presentation": "",
    "presentations": "",
    "mechanism": "Acetila irreversiblemente COX-1 en las plaquetas; la inhibición persiste durante la vida plaquetaria.",
    "pharmacodynamics": "Reduce la síntesis plaquetaria de tromboxano A2 y la agregación; aumenta el riesgo de sangrado.",
    "pharmacokinetics": "",
    "indications": "El uso antiagregante depende del escenario clínico. En SCA, la guía ACC/AHA 2025 mantiene doble antiagregación con AAS e inhibidor P2Y12 como estrategia estándar cuando el riesgo de sangrado no es alto.",
    "dose": "No hay dosis universal segura en esta ficha. Para prevención cardiovascular/uso en SCA, seleccionar exclusivamente el esquema de la guía aplicable y del producto local; no automatizar sin indicación, formulación y evaluación del riesgo hemorrágico.",
    "pediatricDose": "",
    "renalDose": "Sin ajuste posológico antiagregante numérico propuesto; la enfermedad renal aumenta el riesgo de sangrado y exige evaluación individual.",
    "hepaticDose": "Sin ajuste numérico propuesto; evaluar coagulopatía, riesgo gastrointestinal y riesgo de sangrado.",
    "commonAdverseEffects": "Dispepsia, pirosis, náuseas y sangrado/hematomas.",
    "dangerousAdverseEffects": "Hemorragia gastrointestinal o intracraneal, broncoespasmo/anafilaxia por hipersensibilidad y toxicidad por salicilato con exposición excesiva.",
    "adverseEffects": "El tinnitus puede señalar exposición excesiva; confirmar causa y producto antes de cualquier conducta.",
    "contraindications": "Hipersensibilidad a salicilatos/AINE, sangrado activo o condición en la que el riesgo hemorrágico sea inaceptable requieren evaluación médica; confirmar contraindicaciones en el prospecto local.",
    "interactions": "Anticoagulantes, otros antiagregantes, AINE, ISRS/IRSN y alcohol pueden aumentar el riesgo de sangrado; revisar siempre la combinación real.",
    "monitoring": "Signos de sangrado, hemograma cuando esté clínicamente indicado, función renal/hepática según contexto y conciliación de medicamentos.",
    "administration": "Vía oral; no triturar una formulación gastrorresistente sin confirmar el producto.",
    "preparation": "",
    "infusionProtocol": "",
    "pregnancy": "No usar dosis/indicación obstétrica en esta ficha; el riesgo y las autorizaciones varían por dosis, edad gestacional y producto.",
    "lactation": "Sin recomendación universal propuesta; confirmar fuente local y escenario clínico.",
    "specialPopulations": "Adultos mayores y personas con antecedente de úlcera, sangrado, asma por AINE o uso concomitante de antitrombóticos requieren estratificación individual.",
    "patientEducation": "No combinar por cuenta propia con ibuprofeno, naproxeno, anticoagulante u otro antiagregante; buscar atención por heces oscuras, hematemesis, sangrado persistente, síncope o déficit neurológico.",
    "clinicalPearls": "Separar rigurosamente la ficha antiagregante de los usos analgésicos y de las diferentes presentaciones; la dosis y el beneficio cambian con la indicación.",
    "guidelineRecommendations": "ACC/AHA 2025: en SCA, doble antiagregación con AAS + inhibidor oral de P2Y12 es la estrategia estándar durante al menos 12 meses en ausencia de alto riesgo hemorrágico; individualizar.",
    "safetyFlags": "ALTA ALERTA: riesgo hemorrágico; cálculo y dosis automática bloqueados.",
    "alerts": "No disponibilizar dosis automática hasta vincular indicación, formulación, país y guía/protocolo aprobado.",
    "references": [
      "American College of Cardiology. 2025 ACC/AHA Acute Coronary Syndromes Clinical Guidance summary. US. Consultado 2026-09-17. https://www.acc.org/latest-in-cardiology/articles/2025/04/01/01/new-in-clinical-guidance"
    ],
    "ref": "https://www.acc.org/latest-in-cardiology/articles/2025/04/01/01/new-in-clinical-guidance"
  }
};})();
/* GOLD33_SELECTIVE:aas_antiagregante:END */
/* GOLD33_SELECTIVE:apixabana:START */
;(function(){var db=window.ANTICOAG_DRUGS_DB;if(!db||!db["apixabana"])throw new Error("GOLD33_MISSING_CANONICAL:apixabana");db["apixabana"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "007",
    "requiredFieldCount": 33,
    "approvedSha256": "ce8db330a22d993d0f20ecd247514972db328ff0f8a9db4a8978761cb5aea92a",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "mission10-owner-confirmed"
  },
  "pt": {
    "name": "Apixabana",
    "class": "Anticoagulante oral direto",
    "pharmacologicClass": "Inibidor direto do fator Xa",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Comprimidos 2,5 mg e 5 mg.",
    "presentations": "Comprimidos 2,5 mg e 5 mg.",
    "mechanism": "Inibidor direto do fator Xa. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Biodisponibilidade ~50%; pico 3-4 h; ligação ~87%; metabolismo sobretudo CYP3A4; substrato P-gp; meia-vida ~12 h; eliminação renal ~27%.",
    "indications": "Prevenção de AVC/embolia na FA não valvar; tratamento e prevenção de recorrência de TVP/TEP; profilaxia após artroplastia de quadril/joelho.",
    "dose": "FA: 5 mg VO 2x/dia; reduzir para 2,5 mg 2x/dia se pelo menos 2: idade ≥80 anos, peso ≤60 kg, creatinina sérica ≥1,5 mg/dL. TVP/TEP: 10 mg 2x/dia por 7 dias, depois 5 mg 2x/dia; prevenção prolongada: 2,5 mg 2x/dia após ≥6 meses.",
    "pediatricDose": "Segurança/eficácia não estabelecidas em pediatria na bula consultada. AUTOMATABLE=NO.",
    "renalDose": "FA e ESRD: recomendações dependem de indicação e critérios; estudos não incluíram adequadamente diálise. Não aplicar regra de FA a TVP/TEP.",
    "hepaticDose": "Não recomendada em insuficiência hepática grave; cautela na moderada.",
    "commonAdverseEffects": "Sangramento, equimoses, epistaxe, hematúria e anemia.",
    "dangerousAdverseEffects": "Hemorragia fatal/intracraniana; hematoma espinal/epidural; eventos trombóticos com suspensão prematura.",
    "adverseEffects": "Sangramento, equimoses, epistaxe, hematúria e anemia. Graves: Hemorragia fatal/intracraniana; hematoma espinal/epidural; eventos trombóticos com suspensão prematura.",
    "contraindications": "Sangramento ativo patológico grave; hipersensibilidade grave.",
    "interactions": "Inibidores fortes duplos CYP3A4/P-gp aumentam exposição; indutores fortes reduzem; AINEs, antiagregantes e outros anticoagulantes aumentam sangramento.",
    "monitoring": "Hemograma, sangramento, função renal/hepática, adesão, interações e planejamento perioperatório/neuraxial.",
    "administration": "VO 2x/dia, com ou sem alimento; não interromper abruptamente sem plano alternativo.",
    "preparation": "Pode triturar e administrar conforme veículos/sonda permitidos na bula; confirmar técnica.",
    "infusionProtocol": "Não aplicável.",
    "pregnancy": "Dados insuficientes; pode aumentar risco hemorrágico obstétrico.",
    "lactation": "Presente no leite animal e possivelmente humano; amamentação não recomendada durante tratamento.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Hemorragia fatal/intracraniana; hematoma espinal/epidural; eventos trombóticos com suspensão prematura. Seleção de dose bloqueada sem indicação, idade, peso, creatinina/ClCr, função hepática, interações e risco hemorrágico.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://packageinserts.bms.com/pi/pi_eliquis.pdf",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=apixaban"
    ],
    "ref": "https://packageinserts.bms.com/pi/pi_eliquis.pdf"
  },
  "es": {
    "name": "Apixabán",
    "class": "Anticoagulante oral directo",
    "pharmacologicClass": "Inhibidor directo del factor Xa",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Comprimidos 2,5 mg y 5 mg.",
    "presentations": "Comprimidos 2,5 mg y 5 mg.",
    "mechanism": "Inhibidor directo del factor Xa. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Biodisponibilidad ~50%; pico 3-4 h; unión ~87%; metabolismo principalmente CYP3A4; sustrato P-gp; semivida ~12 h; eliminación renal ~27%.",
    "indications": "Prevención de ictus/embolia en FA no valvular; tratamiento y prevención de recurrencia de TVP/TEP; profilaxis tras artroplastia de cadera/rodilla.",
    "dose": "FA: 5 mg VO 2 veces/día; reducir a 2,5 mg 2 veces/día si al menos 2: edad ≥80 años, peso ≤60 kg, creatinina ≥1,5 mg/dL. TVP/TEP: 10 mg 2 veces/día 7 días, luego 5 mg 2 veces/día; prevención prolongada: 2,5 mg 2 veces/día tras ≥6 meses.",
    "pediatricDose": "Seguridad/eficacia no establecidas en pediatría en la ficha consultada. AUTOMATABLE=NO.",
    "renalDose": "FA y ESRD: recomendaciones dependen de indicación y criterios; diálisis no estudiada adecuadamente. No aplicar regla de FA a TVP/TEP.",
    "hepaticDose": "No recomendada en insuficiencia hepática grave; precaución en moderada.",
    "commonAdverseEffects": "Sangrado, equimosis, epistaxis, hematuria y anemia.",
    "dangerousAdverseEffects": "Hemorragia fatal/intracraneal; hematoma espinal/epidural; eventos trombóticos con suspensión prematura.",
    "adverseEffects": "Sangrado, equimosis, epistaxis, hematuria y anemia. Graves: Hemorragia fatal/intracraneal; hematoma espinal/epidural; eventos trombóticos con suspensión prematura.",
    "contraindications": "Sangrado patológico activo grave; hipersensibilidad grave.",
    "interactions": "Inhibidores fuertes CYP3A4/P-gp aumentan exposición; inductores fuertes reducen; AINE, antiagregantes y anticoagulantes aumentan sangrado.",
    "monitoring": "Hemograma, sangrado, función renal/hepática, adherencia, interacciones y planificación perioperatoria/neuraxial.",
    "administration": "VO 2 veces/día, con o sin alimentos; no suspender bruscamente sin plan alternativo.",
    "preparation": "Puede triturarse y administrarse con vehículos/sonda permitidos en ficha; confirmar técnica.",
    "infusionProtocol": "No aplicable.",
    "pregnancy": "Datos insuficientes; puede aumentar riesgo hemorrágico obstétrico.",
    "lactation": "Presente en leche animal y posiblemente humana; lactancia no recomendada durante tratamiento.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Hemorragia fatal/intracraneal; hematoma espinal/epidural; eventos trombóticos con suspensión prematura. Seleção de dose bloqueada sem indicação, idade, peso, creatinina/ClCr, função hepática, interações e risco hemorrágico.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://packageinserts.bms.com/pi/pi_eliquis.pdf",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=apixaban"
    ],
    "ref": "https://packageinserts.bms.com/pi/pi_eliquis.pdf"
  }
};})();
/* GOLD33_SELECTIVE:apixabana:END */
/* GOLD33_SELECTIVE:betrixabana:START */
;(function(){var db=window.ANTICOAG_DRUGS_DB;if(!db||!db["betrixabana"])throw new Error("GOLD33_MISSING_CANONICAL:betrixabana");db["betrixabana"].mcGoldClinicalV1={
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
    "name": "Betrixabana",
    "class": "Anticoagulante oral inibidor direto do fator Xa",
    "pharmacologicClass": "Inibição seletiva do fator Xa",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Cápsulas de 40 e 80 mg, historicamente.",
    "presentations": "Cápsulas de 40 e 80 mg, historicamente.",
    "mechanism": "Inibição seletiva do fator Xa. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Biodisponibilidade ~34%; substrato P-gp; pouca CYP; meia-vida terminal ~19-27 h; eliminação fecal predominante.",
    "indications": "Indicação histórica: profilaxia prolongada de TEV em adultos hospitalizados por doença aguda e mobilidade reduzida. Produto descontinuado nos EUA; confirmar disponibilidade atual.",
    "dose": "Regime histórico: 160 mg VO uma vez no dia 1, depois 80 mg/dia com alimento por 35-42 dias. Não iniciar sem produto autorizado e protocolo atual.",
    "pediatricDose": "Segurança/eficácia não estabelecidas. AUTOMATABLE=NO.",
    "renalDose": "Regime histórico em ClCr 15-<30: 80 mg carga, depois 40 mg/dia; evitar/sem dados em ClCr <15.",
    "hepaticDose": "Evitar em insuficiência hepática moderada/grave ou coagulopatia.",
    "commonAdverseEffects": "Sangramento, epistaxe, hematúria e anemia.",
    "dangerousAdverseEffects": "Hemorragia maior/fatal e hematoma espinal/epidural; não havia antídoto específico aprovado.",
    "adverseEffects": "Sangramento, epistaxe, hematúria e anemia. Graves: Hemorragia maior/fatal e hematoma espinal/epidural; não havia antídoto específico aprovado.",
    "contraindications": "Sangramento ativo patológico grave e hipersensibilidade.",
    "interactions": "Inibidores de P-gp exigiam dose reduzida; outros anticoagulantes/antiagregantes/AINE aumentam sangramento.",
    "monitoring": "Sangramento, Hb/Ht, função renal/hepática, adesão e sinais neurológicos após procedimento neuraxial.",
    "administration": "VO com alimento, no mesmo horário; cápsula inteira.",
    "preparation": "Cápsula pronta; não triturar sem dados.",
    "infusionProtocol": "Não aplicável.",
    "pregnancy": "Dados humanos insuficientes; anticoagulação na gestação requer alternativa/protocolo especializado.",
    "lactation": "Dados insuficientes; considerar anticoagulante com experiência maior.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Hemorragia maior/fatal e hematoma espinal/epidural; não havia antídoto específico aprovado. Integração de dose bloqueada: produto descontinuado nos EUA; exigir disponibilidade/autorização local, indicação, CrCl, P-gp e risco hemorrágico.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2017/208383s000lbl.pdf",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.federalregister.gov/documents/2020/07/17/2020-15572/determination-that-bevyxxa-betrixaban-maleate-capsules-40-milligrams-and-80-milligrams-were-not"
    ],
    "ref": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2017/208383s000lbl.pdf"
  },
  "es": {
    "name": "Betrixabán",
    "class": "Anticoagulante oral inhibidor directo del factor Xa",
    "pharmacologicClass": "Inhibición selectiva del factor Xa",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Cápsulas de 40 y 80 mg, históricamente.",
    "presentations": "Cápsulas de 40 y 80 mg, históricamente.",
    "mechanism": "Inhibición selectiva del factor Xa. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Biodisponibilidad ~34%; sustrato P-gp; poca CYP; semivida terminal ~19-27 h; eliminación fecal predominante.",
    "indications": "Indicación histórica: profilaxis extendida de TEV en adultos hospitalizados por enfermedad aguda y movilidad reducida. Producto discontinuado en EE. UU.; confirmar disponibilidad actual.",
    "dose": "Régimen histórico: 160 mg VO una vez día 1, luego 80 mg/día con alimentos 35-42 días. No iniciar sin producto autorizado y protocolo actual.",
    "pediatricDose": "Seguridad/eficacia no establecidas. AUTOMATABLE=NO.",
    "renalDose": "Régimen histórico con ClCr 15-<30: 80 mg carga, luego 40 mg/día; evitar/sin datos con ClCr <15.",
    "hepaticDose": "Evitar en insuficiencia hepática moderada/grave o coagulopatía.",
    "commonAdverseEffects": "Sangrado, epistaxis, hematuria y anemia.",
    "dangerousAdverseEffects": "Hemorragia mayor/fatal y hematoma espinal/epidural; no había antídoto específico aprobado.",
    "adverseEffects": "Sangrado, epistaxis, hematuria y anemia. Graves: Hemorragia mayor/fatal y hematoma espinal/epidural; no había antídoto específico aprobado.",
    "contraindications": "Sangrado activo patológico grave e hipersensibilidad.",
    "interactions": "Inhibidores P-gp exigían dosis reducida; otros anticoagulantes/antiagregantes/AINE aumentan sangrado.",
    "monitoring": "Sangrado, Hb/Hto, función renal/hepática, adherencia y signos neurológicos tras procedimiento neuroaxial.",
    "administration": "VO con alimentos, a la misma hora; cápsula entera.",
    "preparation": "Cápsula lista; no triturar sin datos.",
    "infusionProtocol": "No aplicable.",
    "pregnancy": "Datos humanos insuficientes; anticoagulación gestacional requiere alternativa/protocolo especializado.",
    "lactation": "Datos insuficientes; considerar anticoagulante con mayor experiencia.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Hemorragia mayor/fatal y hematoma espinal/epidural; no había antídoto específico aprobado. Integração de dose bloqueada: produto descontinuado nos EUA; exigir disponibilidade/autorização local, indicação, CrCl, P-gp e risco hemorrágico.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2017/208383s000lbl.pdf",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.federalregister.gov/documents/2020/07/17/2020-15572/determination-that-bevyxxa-betrixaban-maleate-capsules-40-milligrams-and-80-milligrams-were-not"
    ],
    "ref": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2017/208383s000lbl.pdf"
  }
};})();
/* GOLD33_SELECTIVE:betrixabana:END */
/* GOLD33_SELECTIVE:cangrelor:START */
;(function(){var db=window.ANTICOAG_DRUGS_DB;if(!db||!db["cangrelor"])throw new Error("GOLD33_MISSING_CANONICAL:cangrelor");db["cangrelor"].mcGoldClinicalV1={
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
    "name": "Cangrelor",
    "class": "Antiagregante plaquetário IV",
    "pharmacologicClass": "Antagonista reversível P2Y12 de ação direta",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Frasco-ampola 50 mg liofilizado para reconstituição/diluição.",
    "presentations": "Frasco-ampola 50 mg liofilizado para reconstituição/diluição.",
    "mechanism": "Antagonista reversível P2Y12 de ação direta. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Início em ~2 min, recuperação plaquetária em ~1 h; desfosforilação rápida; meia-vida 3-6 min; independente de rim/fígado.",
    "indications": "Adjuvante de ICP para reduzir eventos periprocedimento em pacientes que não receberam P2Y12 oral e não usam inibidor GP IIb/IIIa.",
    "dose": "Bolus 30 mcg/kg IV antes da ICP, seguido imediatamente por 4 mcg/kg/min por pelo menos 2 h ou duração da ICP, o que for maior.",
    "pediatricDose": "Segurança/eficácia não estabelecidas. AUTOMATABLE=NO.",
    "renalDose": "Sem ajuste.",
    "hepaticDose": "Sem ajuste formal.",
    "commonAdverseEffects": "Sangramento e dispneia.",
    "dangerousAdverseEffects": "Hemorragia grave/fatal e hipersensibilidade.",
    "adverseEffects": "Sangramento e dispneia. Graves: Hemorragia grave/fatal e hipersensibilidade.",
    "contraindications": "Sangramento ativo significativo.",
    "interactions": "Clopidogrel/prasugrel administrados durante infusão têm efeito reduzido; ticagrelor pode ser dado durante; anticoagulantes e outros antiagregantes elevam sangramento.",
    "monitoring": "Sangramento, Hb/hematócrito, local de acesso e transição oral documentada.",
    "administration": "IV somente em ambiente de ICP; transição para P2Y12 oral deve seguir o momento específico de cada fármaco.",
    "preparation": "Reconstituir cada 50 mg com 5 mL de água estéril; diluir em 250 mL de SF 0,9% ou SG 5% para 200 mcg/mL conforme rótulo.",
    "infusionProtocol": "Bolus de solução diluída seguido de infusão contínua 4 mcg/kg/min; usar imediatamente após preparo dentro do prazo rotulado.",
    "pregnancy": "Dados insuficientes; uso apenas se claramente necessário no contexto de ICP.",
    "lactation": "Dados insuficientes; meia-vida muito curta, mas individualizar.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Hemorragia grave/fatal e hipersensibilidade. Bolus/infusão bloqueados sem peso, indicação de ICP, sangramento, P2Y12 prévio/transição e concentração final verificada.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=KENGREAL",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2015/204958s000lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=KENGREAL"
  },
  "es": {
    "name": "Cangrelor",
    "class": "Antiagregante plaquetario IV",
    "pharmacologicClass": "Antagonista reversible P2Y12 de acción directa",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Vial 50 mg liofilizado para reconstitución/dilución.",
    "presentations": "Vial 50 mg liofilizado para reconstitución/dilución.",
    "mechanism": "Antagonista reversible P2Y12 de acción directa. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Inicio en ~2 min, recuperación plaquetaria en ~1 h; desfosforilación rápida; semivida 3-6 min; independiente de riñón/hígado.",
    "indications": "Adyuvante de ICP para reducir eventos periprocedimiento en pacientes sin P2Y12 oral previo y sin inhibidor GP IIb/IIIa.",
    "dose": "Bolo 30 mcg/kg IV antes de ICP, seguido inmediatamente por 4 mcg/kg/min durante al menos 2 h o duración de ICP, lo que sea mayor.",
    "pediatricDose": "Seguridad/eficacia no establecidas. AUTOMATABLE=NO.",
    "renalDose": "Sin ajuste.",
    "hepaticDose": "Sin ajuste formal.",
    "commonAdverseEffects": "Sangrado y disnea.",
    "dangerousAdverseEffects": "Hemorragia grave/fatal e hipersensibilidad.",
    "adverseEffects": "Sangrado y disnea. Graves: Hemorragia grave/fatal e hipersensibilidad.",
    "contraindications": "Sangrado activo significativo.",
    "interactions": "Clopidogrel/prasugrel durante infusión tienen efecto reducido; ticagrelor puede darse durante; anticoagulantes y otros antiagregantes elevan sangrado.",
    "monitoring": "Sangrado, Hb/hematocrito, sitio de acceso y transición oral documentada.",
    "administration": "IV solo en entorno de ICP; transición a P2Y12 oral debe seguir el momento específico de cada fármaco.",
    "preparation": "Reconstituir cada 50 mg con 5 mL de agua estéril; diluir en 250 mL de SS 0,9% o dextrosa 5% a 200 mcg/mL según ficha.",
    "infusionProtocol": "Bolo de solución diluida seguido de infusión continua 4 mcg/kg/min; usar tras preparación dentro del plazo de ficha.",
    "pregnancy": "Datos insuficientes; uso solo si claramente necesario en contexto de ICP.",
    "lactation": "Datos insuficientes; semivida muy corta, pero individualizar.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Hemorragia grave/fatal e hipersensibilidad. Bolus/infusão bloqueados sem peso, indicação de ICP, sangramento, P2Y12 prévio/transição e concentração final verificada.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=KENGREAL",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2015/204958s000lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=KENGREAL"
  }
};})();
/* GOLD33_SELECTIVE:cangrelor:END */
/* GOLD33_SELECTIVE:clopidogrel:START */
;(function(){var db=window.ANTICOAG_DRUGS_DB;if(!db||!db["clopidogrel"])throw new Error("GOLD33_MISSING_CANONICAL:clopidogrel");db["clopidogrel"].mcGoldClinicalV1={
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
    "name": "Clopidogrel",
    "class": "Antiagregante P2Y12",
    "pharmacologicClass": "Metabólito ativo bloqueia irreversivelmente receptor P2Y12",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Comprimidos 75 e 300 mg.",
    "presentations": "Comprimidos 75 e 300 mg.",
    "mechanism": "Metabólito ativo bloqueia irreversivelmente receptor P2Y12. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Pró-fármaco CYP2C19; efeito plaquetário dura 7–10 dias.",
    "indications": "Síndrome coronariana aguda, IAM/AVC recentes e doença arterial periférica; conforme estratégia antitrombótica.",
    "dose": "Manutenção usual 75 mg VO/dia. SCA: carga 300 mg seguida de 75 mg/dia com AAS; estratégias PCI podem usar 600 mg conforme guideline/protocolo.",
    "pediatricDose": "Segurança/eficácia não estabelecidas. AUTOMATABLE=NO.",
    "renalDose": "Sem ajuste usual; experiência limitada em grave.",
    "hepaticDose": "Evitar em hepatopatia grave com diátese hemorrágica.",
    "commonAdverseEffects": "Equimose, epistaxe, diarreia e sangramento.",
    "dangerousAdverseEffects": "Hemorragia maior/intracraniana, TTP e neutropenia rara.",
    "adverseEffects": "Equimose, epistaxe, diarreia e sangramento. Graves: Hemorragia maior/intracraniana, TTP e neutropenia rara.",
    "contraindications": "Sangramento patológico ativo e hipersensibilidade.",
    "interactions": "Omeprazol/esomeprazol reduzem ativação CYP2C19; anticoagulantes, AINE e outros antiagregantes aumentam sangramento.",
    "monitoring": "Sangramento, hemograma, adesão, eventos isquêmicos e TTP.",
    "administration": "VO com ou sem alimento; cirurgia eletiva pode exigir suspensão planejada.",
    "preparation": "Comprimido pronto.",
    "infusionProtocol": "Não aplicável.",
    "pregnancy": "Usar se claramente indicado; dados disponíveis não mostram grande sinal teratogênico.",
    "lactation": "Dados insuficientes; decidir entre tratamento e amamentação.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Hemorragia maior/intracraniana, TTP e neutropenia rara. Uso bloqueado sem indicação/estratégia, carga planejada, risco de sangramento, cirurgia, genótipo/interações CYP2C19 e antiagregantes concomitantes.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=clopidogrel",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.fda.gov/drugs/postmarket-drug-safety-information-patients-and-providers/fda-drug-safety-communication-reduced-effectiveness-plavix-clopidogrel-patients-who-are-poor"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=clopidogrel"
  },
  "es": {
    "name": "Clopidogrel",
    "class": "Antiagregante P2Y12",
    "pharmacologicClass": "Metabolito activo bloquea irreversiblemente receptor P2Y12",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Comprimidos 75 y 300 mg.",
    "presentations": "Comprimidos 75 y 300 mg.",
    "mechanism": "Metabolito activo bloquea irreversiblemente receptor P2Y12. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Profármaco CYP2C19; efecto plaquetario dura 7–10 días.",
    "indications": "Síndrome coronario agudo, IAM/ACV recientes y enfermedad arterial periférica; según estrategia antitrombótica.",
    "dose": "Mantenimiento usual 75 mg VO/día. SCA: carga 300 mg seguida de 75 mg/día con AAS; estrategias PCI pueden usar 600 mg según guía/protocolo.",
    "pediatricDose": "Seguridad/eficacia no establecidas. AUTOMATABLE=NO.",
    "renalDose": "Sin ajuste usual; experiencia limitada en grave.",
    "hepaticDose": "Evitar en hepatopatía grave con diátesis hemorrágica.",
    "commonAdverseEffects": "Equimosis, epistaxis, diarrea y sangrado.",
    "dangerousAdverseEffects": "Hemorragia mayor/intracraneal, PTT y neutropenia rara.",
    "adverseEffects": "Equimosis, epistaxis, diarrea y sangrado. Graves: Hemorragia mayor/intracraneal, PTT y neutropenia rara.",
    "contraindications": "Sangrado patológico activo e hipersensibilidad.",
    "interactions": "Omeprazol/esomeprazol reducen activación CYP2C19; anticoagulantes, AINE y otros antiagregantes aumentan sangrado.",
    "monitoring": "Sangrado, hemograma, adherencia, eventos isquémicos y PTT.",
    "administration": "VO con o sin alimentos; cirugía electiva puede requerir suspensión planificada.",
    "preparation": "Comprimido listo.",
    "infusionProtocol": "No aplicable.",
    "pregnancy": "Usar si está claramente indicado; datos disponibles no muestran gran señal teratógena.",
    "lactation": "Datos insuficientes; decidir entre tratamiento y lactancia.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Hemorragia mayor/intracraneal, PTT y neutropenia rara. Uso bloqueado sem indicação/estratégia, carga planejada, risco de sangramento, cirurgia, genótipo/interações CYP2C19 e antiagregantes concomitantes.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=clopidogrel",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.fda.gov/drugs/postmarket-drug-safety-information-patients-and-providers/fda-drug-safety-communication-reduced-effectiveness-plavix-clopidogrel-patients-who-are-poor"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=clopidogrel"
  }
};})();
/* GOLD33_SELECTIVE:clopidogrel:END */
/* GOLD33_SELECTIVE:dabigatrana:START */
;(function(){var db=window.ANTICOAG_DRUGS_DB;if(!db||!db["dabigatrana"])throw new Error("GOLD33_MISSING_CANONICAL:dabigatrana");db["dabigatrana"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "022",
    "requiredFieldCount": 33,
    "approvedSha256": "6c426b6f4a3ebfeacd7800ca53e10da08300dfe1ba800847fc98d0b4ef5e01d3",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "mission10-owner-confirmed"
  },
  "pt": {
    "name": "Dabigatrana etexilato",
    "class": "Anticoagulante oral direto",
    "pharmacologicClass": "Pró-fármaco; inibidor direto da trombina",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Cápsulas 75/110/150 mg; pellets pediátricos em mercados selecionados.",
    "presentations": "Cápsulas 75/110/150 mg; pellets pediátricos em mercados selecionados.",
    "mechanism": "Pró-fármaco; inibidor direto da trombina. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Biodisponibilidade baixa; substrato P-gp; ~80% eliminação renal.",
    "indications": "Prevenção de AVC em FA não valvar; tratamento/prevenção de TEV; indicações pediátricas e pós-operatórias dependem do rótulo.",
    "dose": "FA adulta com CrCl >30 mL/min: 150 mg VO 2x/dia no rótulo EUA; TEV: 150 mg 2x/dia após 5–10 dias de anticoagulante parenteral. Ajustar ao país/rim/indicação.",
    "pediatricDose": "TEV pediátrico ≥3 meses: dose por idade/peso e formulação após anticoagulação parenteral; tabela do produto obrigatória. AUTOMATABLE=NO.",
    "renalDose": "Dose/uso dependem de CrCl e P-gp; evitar ou ajustar em insuficiência grave conforme indicação/rótulo.",
    "hepaticDose": "Sem ajuste formal leve/moderado; evitar doença hepática com coagulopatia.",
    "commonAdverseEffects": "Dispepsia e sangramento menor.",
    "dangerousAdverseEffects": "Hemorragia fatal, hematoma espinal/epidural e trombose na interrupção.",
    "adverseEffects": "Dispepsia e sangramento menor. Graves: Hemorragia fatal, hematoma espinal/epidural e trombose na interrupção.",
    "contraindications": "Sangramento ativo; válvula cardíaca mecânica; hipersensibilidade.",
    "interactions": "P-gp (dronedarona, cetoconazol, rifampicina), antiagregantes, AINE e outros anticoagulantes.",
    "monitoring": "CrCl, hemograma, sangramento, adesão, procedimentos e interações; TT/dTT em urgência quando disponível.",
    "administration": "Engolir cápsula inteira; não abrir/triturar. Armazenar no recipiente original.",
    "preparation": "Pellets não são intercambiáveis mg-a-mg sem seguir instruções.",
    "infusionProtocol": "Não aplicável.",
    "pregnancy": "Dados limitados; anticoagulação gestacional geralmente usa alternativa.",
    "lactation": "Evitar ou decidir individualmente por dados limitados.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Hemorragia fatal, hematoma espinal/epidural e trombose na interrupção. Uso bloqueado sem indicação, idade/peso, CrCl, sangramento, válvula, P-gp, procedimento e formulação exata.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=ba74e3cd-b06f-4145-b284-5fd6b84ff3c9",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.fda.gov/drugs/postmarket-drug-safety-information-patients-and-providers/dabigatran-etexilate-mesylate-marketed-pradaxa-information"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=ba74e3cd-b06f-4145-b284-5fd6b84ff3c9"
  },
  "es": {
    "name": "Dabigatrán etexilato",
    "class": "Anticoagulante oral directo",
    "pharmacologicClass": "Profármaco; inhibidor directo de trombina",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Cápsulas 75/110/150 mg; pellets pediátricos en mercados seleccionados.",
    "presentations": "Cápsulas 75/110/150 mg; pellets pediátricos en mercados seleccionados.",
    "mechanism": "Profármaco; inhibidor directo de trombina. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Biodisponibilidad baja; sustrato P-gp; ~80% eliminación renal.",
    "indications": "Prevención de ACV en FA no valvular; tratamiento/prevención de TEV; indicaciones pediátricas y posoperatorias dependen de ficha.",
    "dose": "FA adulta con CrCl >30 mL/min: 150 mg VO 2 veces/día en ficha EE.UU.; TEV: 150 mg 2 veces/día tras 5–10 días de anticoagulante parenteral. Ajustar a país/riñón/indicación.",
    "pediatricDose": "TEV pediátrico ≥3 meses: dosis por edad/peso y formulación tras anticoagulación parenteral; tabla del producto obligatoria. AUTOMATABLE=NO.",
    "renalDose": "Dosis/uso dependen de CrCl y P-gp; evitar o ajustar en insuficiencia grave según indicación/ficha.",
    "hepaticDose": "Sin ajuste formal leve/moderado; evitar hepatopatía con coagulopatía.",
    "commonAdverseEffects": "Dispepsia y sangrado menor.",
    "dangerousAdverseEffects": "Hemorragia fatal, hematoma espinal/epidural y trombosis al suspender.",
    "adverseEffects": "Dispepsia y sangrado menor. Graves: Hemorragia fatal, hematoma espinal/epidural y trombosis al suspender.",
    "contraindications": "Sangrado activo; válvula cardíaca mecánica; hipersensibilidad.",
    "interactions": "P-gp (dronedarona, ketoconazol, rifampicina), antiagregantes, AINE y otros anticoagulantes.",
    "monitoring": "CrCl, hemograma, sangrado, adherencia, procedimientos e interacciones; TT/dTT en urgencia si disponible.",
    "administration": "Tragar cápsula entera; no abrir/triturar. Conservar en envase original.",
    "preparation": "Pellets no son intercambiables mg por mg sin seguir instrucciones.",
    "infusionProtocol": "No aplicable.",
    "pregnancy": "Datos limitados; anticoagulación gestacional suele usar alternativa.",
    "lactation": "Evitar o decidir individualmente por datos limitados.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Hemorragia fatal, hematoma espinal/epidural y trombosis al suspender. Uso bloqueado sem indicação, idade/peso, CrCl, sangramento, válvula, P-gp, procedimento e formulação exata.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=ba74e3cd-b06f-4145-b284-5fd6b84ff3c9",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.fda.gov/drugs/postmarket-drug-safety-information-patients-and-providers/dabigatran-etexilate-mesylate-marketed-pradaxa-information"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=ba74e3cd-b06f-4145-b284-5fd6b84ff3c9"
  }
};})();
/* GOLD33_SELECTIVE:dabigatrana:END */
/* GOLD33_SELECTIVE:dalteparina:START */
;(function(){var db=window.ANTICOAG_DRUGS_DB;if(!db||!db["dalteparina"])throw new Error("GOLD33_MISSING_CANONICAL:dalteparina");db["dalteparina"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "022",
    "requiredFieldCount": 33,
    "approvedSha256": "6c426b6f4a3ebfeacd7800ca53e10da08300dfe1ba800847fc98d0b4ef5e01d3",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "mission10-owner-confirmed"
  },
  "pt": {
    "name": "Dalteparina",
    "class": "Heparina de baixo peso molecular",
    "pharmacologicClass": "Potencializa antitrombina, predominando anti-Xa",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Seringas e frascos multidose em UI anti-Xa; concentrações variam.",
    "presentations": "Seringas e frascos multidose em UI anti-Xa; concentrações variam.",
    "mechanism": "Potencializa antitrombina, predominando anti-Xa. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Biodisponibilidade SC alta; eliminação predominantemente renal.",
    "indications": "Profilaxia de TEV, síndrome coronariana e tratamento prolongado de TEV associado ao câncer; pediatria ≥1 mês no rótulo EUA.",
    "dose": "Regime depende da indicação: profilaxia usual 2500–5000 UI SC/dia; câncer com TEV: 200 UI/kg SC/dia no 1º mês (máx. 18.000 UI), depois ~150 UI/kg/dia meses 2–6.",
    "pediatricDose": "TEV sintomático ≥1 mês: 100 UI/kg SC 2x/dia, ajustar por anti-Xa e faixa etária conforme rótulo. AUTOMATABLE=NO.",
    "renalDose": "Acúmulo em insuficiência grave; considerar anti-Xa/alternativa.",
    "hepaticDose": "Sem ajuste definido; cautela em coagulopatia hepática.",
    "commonAdverseEffects": "Sangramento, hematoma e reação no local.",
    "dangerousAdverseEffects": "Hemorragia fatal, HIT, hematoma espinal/epidural e osteoporose prolongada.",
    "adverseEffects": "Sangramento, hematoma e reação no local. Graves: Hemorragia fatal, HIT, hematoma espinal/epidural e osteoporose prolongada.",
    "contraindications": "Sangramento ativo maior; história de HIT; hipersensibilidade a heparinas/produtos suínos.",
    "interactions": "Antiagregantes, AINE, trombolíticos e outros anticoagulantes.",
    "monitoring": "Hemograma/plaquetas, sangramento, rim, peso; anti-Xa em pediatria, gestação ou extremos selecionados.",
    "administration": "SC no abdome; não IM. Técnica e seringa corretas.",
    "preparation": "Frasco multidose contém álcool benzílico; evitar em neonatos e conferir concentração.",
    "infusionProtocol": "Não aplicável.",
    "pregnancy": "HBPM amplamente usada; individualizar e monitorar.",
    "lactation": "Compatível em geral; baixa transferência.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Hemorragia fatal, HIT, hematoma espinal/epidural e osteoporose prolongada. Dose bloqueada sem indicação, peso, idade, rim, plaquetas/HIT, sangramento, neuroeixo, concentração e plano anti-Xa quando aplicável.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=dalteparin",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.fda.gov/drugs/postmarket-drug-safety-information-patients-and-providers/information-heparin"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=dalteparin"
  },
  "es": {
    "name": "Dalteparina",
    "class": "Heparina de bajo peso molecular",
    "pharmacologicClass": "Potencia antitrombina, predominio anti-Xa",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Jeringas y viales multidosis en UI anti-Xa; concentraciones variables.",
    "presentations": "Jeringas y viales multidosis en UI anti-Xa; concentraciones variables.",
    "mechanism": "Potencia antitrombina, predominio anti-Xa. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Biodisponibilidad SC alta; eliminación predominantemente renal.",
    "indications": "Profilaxis de TEV, síndrome coronaria y tratamiento prolongado de TEV asociado a cáncer; pediatría ≥1 mes en ficha EE.UU.",
    "dose": "Régimen depende de indicación: profilaxis usual 2500–5000 UI SC/día; cáncer con TEV: 200 UI/kg SC/día primer mes (máx. 18.000 UI), luego ~150 UI/kg/día meses 2–6.",
    "pediatricDose": "TEV sintomático ≥1 mes: 100 UI/kg SC 2 veces/día, ajustar por anti-Xa y edad según ficha. AUTOMATABLE=NO.",
    "renalDose": "Acumulación en insuficiencia grave; considerar anti-Xa/alternativa.",
    "hepaticDose": "Sin ajuste definido; precaución en coagulopatía hepática.",
    "commonAdverseEffects": "Sangrado, hematoma y reacción local.",
    "dangerousAdverseEffects": "Hemorragia fatal, HIT, hematoma espinal/epidural y osteoporosis prolongada.",
    "adverseEffects": "Sangrado, hematoma y reacción local. Graves: Hemorragia fatal, HIT, hematoma espinal/epidural y osteoporosis prolongada.",
    "contraindications": "Sangrado mayor activo; antecedente de HIT; hipersensibilidad a heparinas/productos porcinos.",
    "interactions": "Antiagregantes, AINE, trombolíticos y otros anticoagulantes.",
    "monitoring": "Hemograma/plaquetas, sangrado, riñón, peso; anti-Xa en pediatría, embarazo o extremos seleccionados.",
    "administration": "SC en abdomen; no IM. Técnica y jeringa correctas.",
    "preparation": "Vial multidosis contiene alcohol bencílico; evitar en neonatos y confirmar concentración.",
    "infusionProtocol": "No aplicable.",
    "pregnancy": "HBPM ampliamente usada; individualizar y controlar.",
    "lactation": "Compatible en general; baja transferencia.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Hemorragia fatal, HIT, hematoma espinal/epidural y osteoporosis prolongada. Dose bloqueada sem indicação, peso, idade, rim, plaquetas/HIT, sangramento, neuroeixo, concentração e plano anti-Xa quando aplicável.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=dalteparin",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.fda.gov/drugs/postmarket-drug-safety-information-patients-and-providers/information-heparin"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=dalteparin"
  }
};})();
/* GOLD33_SELECTIVE:dalteparina:END */
/* GOLD33_SELECTIVE:edoxabana:START */
;(function(){var db=window.ANTICOAG_DRUGS_DB;if(!db||!db["edoxabana"])throw new Error("GOLD33_MISSING_CANONICAL:edoxabana");db["edoxabana"].mcGoldClinicalV1={
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
    "name": "Edoxabana",
    "class": "Anticoagulante inibidor direto do fator Xa",
    "pharmacologicClass": "Inibição seletiva e reversível do fator Xa",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Comprimidos 15/30/60 mg.",
    "presentations": "Comprimidos 15/30/60 mg.",
    "mechanism": "Inibição seletiva e reversível do fator Xa. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Substrato P-gp; ~50% renal, meia-vida 10–14 h.",
    "indications": "Prevenção de AVC/embolia na FA não valvar e tratamento de TVP/EP após anticoagulação parenteral inicial.",
    "dose": "FA: 60 mg VO/dia se CrCl >50–95; 30 mg/dia se CrCl 15–50; não usar se CrCl >95. TVP/EP: após 5–10 dias parenteral, 60 mg/dia; 30 mg se CrCl 15–50, peso ≤60 kg ou certos inibidores P-gp.",
    "pediatricDose": "Não estabelecido. AUTOMATABLE=NO.",
    "renalDose": "Ver dose por CrCl; evitar CrCl <15 mL/min.",
    "hepaticDose": "Não recomendada em hepatopatia moderada/grave com coagulopatia.",
    "commonAdverseEffects": "Sangramento, anemia, rash e testes hepáticos alterados.",
    "dangerousAdverseEffects": "Hemorragia fatal/intracraniana, hematoma espinal/epidural e trombose após interrupção.",
    "adverseEffects": "Sangramento, anemia, rash e testes hepáticos alterados. Graves: Hemorragia fatal/intracraniana, hematoma espinal/epidural e trombose após interrupção.",
    "contraindications": "Sangramento ativo patológico.",
    "interactions": "P-gp; outros anticoagulantes, antiagregantes, AINEs e trombolíticos aumentam sangramento.",
    "monitoring": "CrCl por Cockcroft-Gault, hemograma, sangramento, fígado, adesão e procedimentos/neuroeixo.",
    "administration": "VO 1x/dia; não interromper abruptamente sem cobertura.",
    "preparation": "Confirmar produto e apresentação; seguir rotulagem oficial.",
    "infusionProtocol": "Não aplicável salvo apresentação parenteral; quando houver, seguir rótulo.",
    "pregnancy": "Avaliar benefício-risco e rotulagem específica; evitar exposição desnecessária.",
    "lactation": "Avaliar transferência ao leite, idade do lactente e alternativa terapêutica.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Hemorragia fatal/intracraniana, hematoma espinal/epidural e trombose após interrupção. Dose bloqueada sem indicação, CrCl Cockcroft-Gault, peso, anticoagulação prévia, fígado, sangramento, P-gp e procedimento.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=edoxaban",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2023/206316s019lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=edoxaban"
  },
  "es": {
    "name": "Edoxabán",
    "class": "Anticoagulante inhibidor directo del factor Xa",
    "pharmacologicClass": "Inhibición selectiva y reversible del factor Xa",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Comprimidos 15/30/60 mg.",
    "presentations": "Comprimidos 15/30/60 mg.",
    "mechanism": "Inhibición selectiva y reversible del factor Xa. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Sustrato P-gp; ~50% renal, semivida 10–14 h.",
    "indications": "Prevención de ictus/embolia en FA no valvular y tratamiento de TVP/EP tras anticoagulación parenteral inicial.",
    "dose": "FA: 60 mg VO/día si CrCl >50–95; 30 mg/día si CrCl 15–50; no usar si CrCl >95. TVP/EP: tras 5–10 días parenteral, 60 mg/día; 30 mg si CrCl 15–50, peso ≤60 kg o ciertos inhibidores P-gp.",
    "pediatricDose": "No establecido. AUTOMATABLE=NO.",
    "renalDose": "Ver dosis por CrCl; evitar CrCl <15 mL/min.",
    "hepaticDose": "No recomendada en hepatopatía moderada/grave con coagulopatía.",
    "commonAdverseEffects": "Sangrado, anemia, erupción y pruebas hepáticas alteradas.",
    "dangerousAdverseEffects": "Hemorragia fatal/intracraneal, hematoma espinal/epidural y trombosis tras suspensión.",
    "adverseEffects": "Sangrado, anemia, erupción y pruebas hepáticas alteradas. Graves: Hemorragia fatal/intracraneal, hematoma espinal/epidural y trombosis tras suspensión.",
    "contraindications": "Sangrado activo patológico.",
    "interactions": "P-gp; otros anticoagulantes, antiagregantes, AINE y trombolíticos aumentan sangrado.",
    "monitoring": "CrCl por Cockcroft-Gault, hemograma, sangrado, hígado, adherencia y procedimientos/neuroeje.",
    "administration": "VO 1 vez/día; no suspender bruscamente sin cobertura.",
    "preparation": "Confirmar producto y presentación; seguir ficha oficial.",
    "infusionProtocol": "No aplicable salvo presentación parenteral; cuando exista, seguir ficha.",
    "pregnancy": "Evaluar beneficio-riesgo y ficha específica; evitar exposición innecesaria.",
    "lactation": "Evaluar paso a leche, edad del lactante y alternativa terapéutica.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Hemorragia fatal/intracraneal, hematoma espinal/epidural y trombosis tras suspensión. Dose bloqueada sem indicação, CrCl Cockcroft-Gault, peso, anticoagulação prévia, fígado, sangramento, P-gp e procedimento.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=edoxaban",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2023/206316s019lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=edoxaban"
  }
};})();
/* GOLD33_SELECTIVE:edoxabana:END */
