/* =====================================================================
   MÓDULO DE GINECOLOGIA E ENDOCRINOLOGIA REPRODUTIVA (database/ginecologia.js)
   BUILD 458-GINE | IIFE Padrão Ouro | 5 drogas
   Seção: GINECOLOGIA, CONTRACEPÇÃO E ENDOCRINOLOGIA REPRODUTIVA
   ===================================================================== */
(function () {
  'use strict';

  /* ── Double Guard IIFE Padrão Ouro ── */
  if (typeof window.GINECOLOGIA_DRUGS_DB !== 'object' || window.GINECOLOGIA_DRUGS_DB === null || Array.isArray(window.GINECOLOGIA_DRUGS_DB)) {
    window.GINECOLOGIA_DRUGS_DB = {};
  }
  if (typeof window.GINECOLOGIA_DRUGS_DB !== 'object' || window.GINECOLOGIA_DRUGS_DB === null) return;

  Object.assign(window.GINECOLOGIA_DRUGS_DB, {

    /* ── ETINILESTRADIOL + LEVONORGESTREL (Contraceptivo Combinado) ─────── */
    "etinilestradiol_levonorgestrel": {
      name: { pt: 'Etinilestradiol + Levonorgestrel', es: 'Etinilestradiol + Levonorgestrel' },
      category: 'ginecologia',
      class: { pt: 'Contraceptivo Oral Combinado (COC) / Estrogênio Sintético + Progestágeno de 2ª Geração', es: 'Anticonceptivo Oral Combinado / Estrógeno Sintético + Progestágeno de 2ª Generación' },
      indications: {
        pt: ['Contracepção oral (Prevenção de gravidez indesejada)', 'Controle de irregularidades do ciclo menstrual e dismenorreia secundária leve'],
        es: ['Prevención del embarazo (Anticoncepción oral)', 'Control del ciclo menstrual irregular y dismenorrea']
      },
      commercialNames: { br: ['Ciclo 21', 'Microvlar', 'Nordette', 'Level'], ar: ['Microgynon', 'Nordette', 'Neogynon', 'Anuar'] },
      presentation: { pt: ['Comprimidos contendo 0,03 mg (30 mcg) de Etinilestradiol + 0,15 mg (150 mcg) de Levonorgestrel (Cartelas com 21 comprimidos)'], es: ['Comprimidos de 30 mcg Etinilestradiol + 150 mcg Levonorgestrel'] },
      mechanism: {
        pt: 'O Bloqueador do Eixo Ovulatorio. O Estrogênio (Etinilestradiol) atua suprimindo fortemente a liberação do hormônio FSH no cérebro, impedindo o recrutamento e crescimento dos folículos no ovário. O Progestágeno (Levonorgestrel) desativa o pico de LH, bloqueando mecanicamente a ovulação. Adicionalmente, o levonorgestrel altera a consistência do muco do colo do útero, deixando-o espesso e grosso feito uma "rolha" intransponível que imobiliza e impede a entrada dos espermatozoides.',
        es: 'Inhibe la ovulación mediante la supresión de las gonadotropinas FSH y LH en el eje hipotálamo-hipófisis. El estrógeno impide la maduración folicular, mientras que el progestágeno suprime el pico de LH. Adicionalmente, espesa el moco cervical transformándolo en una barrera impermeable al espermatozoide y altera el endometrio impidiendo la implantación.'
      },
      dose: {
        adult: {
          pt: 'Contracepção: Tomar 1 comprimido via oral, UMA VEZ AO DIA, preferencialmente no mesmo horário todos os dias, por 21 dias seguidos. Interromper o uso por exatamente 7 dias de descanso (onde ocorrerá o sangramento por privação) e iniciar uma nova cartela impreterivelmente no 8º dia.',
          es: 'Tomar 1 comprimido vía oral al día, siempre a la misma hora, durante 21 días consecutivos. Suspender por 7 días de descanso (sangrado por deprivación) y reiniciar el día 8 de forma obligatoria.'
        },
        pediatric: {
          pt: 'Aprovado para uso em adolescentes após a ocorrência da menarca (primeira menstruação) seguindo as mesmas diretrizes do adulto.',
          es: 'Indicado tras la menarca con pauta idéntica al adulto.'
        }
      },
      administration: { pt: ['Uso oral contínuo diário. REGRAS DE ESQUECIMENTO: Se o atraso for menor que 12 horas, tomar a pílula esquecida imediatamente e manter o horário normal. Se o atraso passar de 12 horas, a proteção contraceptiva desaba; tomar o comprimido esquecido (mesmo que signifique tomar dois no mesmo dia) e associar OBRIGATÓRIAMENTE método de barreira (Camisinha) pelos próximos 7 dias seguidos.'], es: ['Uso oral. Si el olvido es > 12 horas, la eficacia anticonceptiva disminuye críticamente; tomar la píldora olvidada y utilizar preservativo de apoyo por 7 días seguidos.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste de dose.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Metabolizado intensamente no fígado. Contraindicado em pacientes com tumores hepáticos, cirrose descompensada ativa Child B ou C ou histórico de hepatite colestática.', es: 'Absolutamente contraindicado en insuficiencia hepática aguda, cirrosis o adenomas hepáticos.' } },
      commonAdverseEffects: { pt: ['Náuseas leves, cefaleia e mastalgia (sensibilidade dolorosa nas mamas)', 'Sangramentos de escape intermenstruais (Spotting, comum nos primeiros meses)', 'Retenção hídrica com ganho de peso leve'], es: ['Náuseas, cefalea y tensión mamaria', 'Sangrados por estallido (spotting) los primeros meses', 'Retención leve de líquidos'] },
      dangerousAdverseEffects: { pt: ['TROMBOEMBOLISMO VENOSO MASSIVO (TVP/TEP por ativação de fatores de coagulação pró-trombóticos pelo estrogênio — VER ALERTAS)', 'AVC Isquêmico e Infarto Agudo do Miocárdio', 'Adenoma hepático benigno que pode romper e causar sangramento interno'], es: ['TROMBOEMBOLISMO VENOSO Y PULMONAR (TEP/TVP — Alerta de Caja Negra por estrógenos)', 'Infarto agudo de miocardio o ACV isquémico', 'Adenoma hepático ruptura'] },
      contraindications: {
        absolute: { pt: ['Mulheres fumantes com idade >= 35 anos (risco de morte cardiovascular proibitivo)', 'Histórico pessoal anterior ou ativo de TVP, TEP, AVC ou Infarto', 'Câncer de Mama ativo ou suspeito (tumor dependente de hormônios)', 'Enxaqueca com aura neurológica focal'], es: ['Mujeres fumadoras >= 35 años (Prohibido)', 'Antecedente de TVP, TEP, ACV o IAM', 'Cáncer de mama activo', 'Migraña con aura neurológica focal'] },
        relative: { pt: ['Hipertensão arterial controlada ou diabetes mellitus de longa duração com lesão vascular'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A CAIXA PRETA DO TROMBO E O PERIGO DO CIGARRO PÓS-35 ANOS: O componente estrogênico (Etinilestradiol) força o fígado a fabricar mais fatores de coagulação, aumentando o risco de trombose. Se a paciente tiver mais de 35 anos e fumar mesmo que poucos cigarros por dia, a combinação explode o risco de infarto, derrame (AVC) e embolia pulmonar fatal. É ABSOLUTAMENTE PROIBIDO prescrever anticoncepcional combinado para fumantes acima de 35 anos; use pílula de progestágeno isolado.', es: 'ADVERTENCIA DE CAJA NEGRA (TROMBOSIS Y TABAQUISMO): Los anticonceptivos combinados elevan de forma lineal los factores procoagulantes. Está contraindicado de forma absoluta su uso en mujeres mayores de 35 años que fuman, debido a un aumento exponencial del riesgo de eventos cardiovasculares fatales (IAM, ACV hemorrágico e infarto pulmonar).' }
      },
      references: {
        pt: 'Critérios Médicos de Elegibilidade para Uso de Anticoncepcionais da OMS; Diretrizes de Anticoncepção da FEBRASGO; Bula Microvlar.',
        es: 'Criterios Médicos de Elegibilidad para el Uso de Anticonceptivos (OMS); Manual de Ginecología de la FASGO; Ficha Técnica CIMA.'
      }
    },

    /* ── DROSPIRENONA (Progestágeno Isolado Moderno) ────────────────────── */
    "drospirenona": {
      name: { pt: 'Drospirenona', es: 'Drospirenona' },
      category: 'ginecologia',
      class: { pt: 'Progestágeno Sintético de 4ª Geração / Antagonista de Receptor Mineralocorticoide e Androgênico', es: 'Progestágeno Sintético de 4ª Generación / Antagonista Mineralocorticoide y Androgénico' },
      indications: {
        pt: ['Contracepção oral em mulheres adultas e adolescentes (Como pílula isolada livre de estrogênio, ideal para pacientes com contraindicação a estrogênios)', 'Tratamento de Acne Vulgar moderada e Transtorno Disfórico Pré-Menstrual (TDPM) quando combinada'],
        es: ['Anticoncepción oral libre de estrógenos (Píldora de progestágeno solo / POP)', 'Tratamiento del acné moderado y trastorno disfórico premenstrual']
      },
      commercialNames: { br: ['Slinda (Isolada 4mg)', 'Iasmin / Yasmin (Combo com Etinilestradiol)', 'Elani Ciclo'], ar: ['Slinda', 'Yasmin', 'Kala', 'Drosil'] },
      presentation: { pt: ['Slinda: Comprimidos contendo 4 mg de Drospirenona pura (Cartela de 24 ativos + 4 placebos verdes)'], es: ['Slinda: Comprimidos de 4 mg puros (Régimen 24 activos + 4 placebos)'] },
      mechanism: {
        pt: 'O Progestágeno Drenador de Inchaço. É um análogo sintético da espironolactona. Ela atua ligando-se aos receptores de progesterona para bloquear a ovulação, mas possui duas propriedades únicas de 4ª geração: 1) é um potente antimineralocorticoide (bloqueia a Aldosterona), o que impede a retenção de sódio e água, eliminando o inchaço, ganho de peso e dores nas mamas; e 2) bloqueia os receptores de androgênios, limpando a pele da acne e seborreia.',
        es: 'Progestágeno de 4ª generación derivado de la espironolactona. Combina el efecto anticonceptivo central de bloqueo de ovulación con propiedades antimineralocorticoides: bloquea los receptores de aldosterona, previniendo la retención de agua y el edema. Posee además actividad antiandrogénica, disminuyendo la producción de sebo y el acné.'
      },
      dose: {
        adult: {
          pt: 'Pílula Isolada (Slinda 4mg): Tomar 1 comprimido branco ativo via oral ao dia, no mesmo horário, por 24 dias seguidos, seguido por 1 comprimido verde placebo ao dia por 4 dias seguidos (Total de 28 dias sem pausas entre cartelas).',
          es: 'Régimen Slinda (4 mg): Tomar 1 comprimido blanco activo al día por 24 días, seguido de 1 comprimido verde placebo por 4 días. Iniciar la nueva caja de forma inmediata sin interrupción.'
        },
        pediatric: {
          pt: 'Indicado para adolescentes pós-menarca nas mesmas dosagens e regras de tomada do adulto.',
          es: 'Uso aprobado tras la menarca.'
        }
      },
      administration: { pt: ['Uso oral contínuo diário rigoroso. Apresenta uma janela de esquecimento tolerável de até 24 horas (superior ao antigo Desogestrel), mantendo a eficácia se tomada no dia seguinte, mas o rigor de horário otimiza o padrão de sangramento uterino.'], es: ['Uso oral continuo. Posee una ventana de seguridad ante olvidos de hasta 24 horas sin perder eficacia anticonceptiva central.'] },
      renalAdjustment: { required: true, message: { pt: 'ALTAMENTE CRÍTICO. Devido ao seu efeito idêntico ao da espironolactona, ela retém potássio. É ABSOLUTAMENTE CONTRAINDICADA em pacientes com insuficiência renal moderada a grave (ClCr < 30 mL/min) devido ao risco de hipercalemia perigosa.', es: 'ABSOLUTAMENTE CONTRAINDICADO SI ClCr < 30 mL/min. Al ser derivado de la espironolactona, inhibe la excreción de potasio induciendo hiperpotasemia crítica.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Contraindicado em insuficiência hepática grave Child C ou tumores ativos do fígado.', es: 'Contraindicado en falla hepática severa.' } },
      commonAdverseEffects: { pt: ['Alterações do padrão menstrual (sangramentos imprevisíveis tipo escape / Spotting)', 'Cefaleia e labilidade de humor', 'Náuseas e redução da libido'], es: ['Sangrado intermenstrual irregular (spotting)', 'Cefalea y cambios de humor', 'Disminución de la libido'] },
      dangerousAdverseEffects: { pt: ['Hipercalemia severa (potássio alto com arritmia se associado a poupadores de potássio)', 'Tromboembolismo venoso (risco extremamente baixo quando isolada, mas aumentado se usada na versão combo com estrogênio)'], es: ['Hiperpotasemia severa con arritmias', 'Tromboembolismo venoso (bajo riesgo en monoterapia sola, elevado si se combina con estrógenos)'] },
      contraindications: {
        absolute: { pt: ['Insuficiência renal crônica moderada a grave (ClCr < 30 mL/min)', 'Insuficiência suprarrenal (risco de colapso de eletrólitos)', 'Sangramento vaginal de causa desconhecida não diagnosticado', 'Gravidez'], es: ['Insuficiencia renal crónica (ClCr < 30 mL/min)', 'Insuficiencia suprarrenal', 'Hemorragia uterina no diagnosticada'] },
        relative: { pt: ['Uso associado com inibidores da ECA ou poupadores de potássio (exige dosar potássio no primeiro mês)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'A ARMADILHA DO POTÁSSIO REPRODUTIVO (ALERTA DE INSUFICIÊNCIA RENAL): A Drospirenona atua nos rins exatamente igual ao diurético Espironolactona. Se a paciente tiver uma disfunção nos rins e tomar a Slinda ou o Yasmin, o nível de Potássio no sangue pode subir rápido. Nunca prescreva para doentes renais crônicas e tome cuidado extremo se a paciente já usar remédios para pressão como Enalapril ou Losartana; dose o potássio no sangue se houver dúvidas.', es: 'ALERTA DE RIESGO DE HIPERPOTASEMIA: Posee actividad antimineralocorticoide equivalente a 25 mg de espironolactona. Está contraindicada en nefrópatas ante riesgo de retención de potasio. Si la paciente consume IECA (Enalapril) o ARA-II (Losartán), se recomienda controlar el potasio sérico durante el primer ciclo.' }
      },
      references: {
        pt: 'Slinda FDA Clinical Review Documents; Guidelines de Anticoncepção Baseada em Progestágenos da OMS; Manual de Ginecologia de Bolso.',
        es: 'FDA Prescribing Information (Slinda); CIMA Ficha Técnica Drospirenona; Guías de Anticoncepción de la SAR.'
      }
    },

    /* ── PROGESTERONA MICRONIZADA (Hormônio Natural / Suporte) ──────────── */
    "progesterona_micronizada": {
      name: { pt: 'Progesterona Micronizada', es: 'Progesterona Micronizada' },
      category: 'ginecologia',
      class: { pt: 'Hormônio Progestágeno Natural Bioidêntico / Suporte da Fase Lútea', es: 'Hormona Progestágena Natural Bioidéntica / Soporte de Fase Lútea' },
      indications: {
        pt: ['Ameaça de Abortamento precoce por insuficiência de corpo lúteo (aborto de repetição)', 'Prevenção de Parto Prematuro em mulheres com colo do útero curto (< 20 mm) no ultrassom morfológico', 'Componente progestágeno da Terapia de Reposição Hormonal (TRH) na menopausa para proteger o endométrio contra o câncer induzido por estrogênio'],
        es: ['Amenaza de Aborto espontáneo por insuficiencia lútea', 'Prevención del Parto Prematuro en mujeres con cuello uterino corto (< 20 mm)', 'Terapia de Reemplazo Hormonal (TRH) en la menopausa para protección endometrial']
      },
      commercialNames: { br: ['Utrogestan', 'Evoclin', 'Progeffik'], ar: ['Utrogestan', 'Progest', 'Gestafe'] },
      presentation: { pt: ['Cápsulas gelatinosas moles 100 mg e 200 mg (Uso oral ou vaginal intercambiável)'], es: ['Cápsulas blandas orales/vaginales de 100 mg y 200 mg'] },
      mechanism: {
        pt: 'O Protetor Biológico da Gestação. É a progesterona quimicamente idêntica ao hormônio fabricado pelo ovário humano, micronizada em laboratório para permitir absorção pelas mucosas. Ela entra na célula e liga-se aos receptores de progesterona do útero, promovendo a transformação do endométrio em fase secretora, diminuindo a contratilidade do miométrio e "trancando" o útero relaxado para segurar o bebê lá dentro.',
        es: 'Progesterona natural bioidéntica micronizada para mejorar su absorción. Se une a los receptores de progesterona específicos induciendo la transición endometrial hacia una fase secretora madura. Disminuye la excitabilidad y contractilidad del músculo liso miometrial, actuando como un freno biológico uterino para sostener la gestación.'
      },
      dose: {
        adult: {
          pt: 'Ameaça de Aborto / Colo Curto: 200 mg a 400 mg via VAGINAL profunda, UMA VEZ AO DIA, à noite antes de deitar, de forma contínua até completar 34 a 36 semanas de gestação. Reposição Menopausa (TRH combinado): 100 mg/dia via oral à noite.',
          es: 'Amenaza de Aborto / Cuello Corto: 200 a 400 mg vía VAGINAL profunda, UNA VEZ AL DÍA por la noche al acostarse de forma continua hasta la semana 34-36. TRH Menopausia: 100 mg/día vía oral.'
        },
        pediatric: {
          pt: 'Uso não indicado em pediatria.',
          es: 'No indicado.'
        }
      },
      administration: { pt: ['Uso vaginal ou oral. As cápsulas gelatinosas moles são idênticas para as duas vias. Para a prevenção de parto prematuro e aborto, a VIA VAGINAL É ALTAMENTE PREFERIDA: a cápsula deve ser empurrada com o dedo limpo profundamente no canal vaginal; a absorção local é direta para o útero e evita o efeito colateral master de tontura e sonolência violenta que ocorre se for engolida por via oral.'], es: ['Vía Vaginal o Oral. En obstetricia (cuello corto/aborto), la VÍA VAGINAL ES DE ELECCIÓN ABSOLUTA: se introduce la cápsula profundamente en la vagina. Posee mayor efecto tisular uterino directo y evita la somnolencia severa del paso hepático oral.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste de dose, eliminada por conjugação biológica.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Metabolizada intensamente no fígado. Contraindicada na insuficiência hepática grave ou cirrose Child C pelo risco de icterícia colestática aguda.', es: 'Contraindicado en insuficiencia hepática severa.' } },
      commonAdverseEffects: { pt: ['SONOLÊNCIA VIOLENTA E TONTURA ESPACIAL (ocorre 1 hora após engolir a pílula via oral — evitado se usado via vaginal)', 'Prurido ou secreção esbranquiçada vaginal benigna', 'Mastalgia e cefaleia'], es: ['SOMNOLENCIA PROFUNDA Y MAREO (Efecto psicotrópico secundario tras la toma oral por metabolitos neuroesteroides Gabaérgeticos)', 'Flujo vaginal blanquecino inocuo', 'Tensión mamaria'] },
      dangerousAdverseEffects: { pt: ['Hepatite colestática crônica com icterícia marcada (raro)', 'Eventos tromboembólicos maiores (risco residual ínfimo se comparado a progestágenos sintéticos antigos)'], es: ['Ictericia colestática medicamentosa', 'Tromboembolismo venoso (Riesgo mínimo de clase)'] },
      contraindications: {
        absolute: { pt: ['Sangramento vaginal ativo de causa desconhecida, câncer de endométrio ou mama suspeito ou confirmado, aborto retido incompleto infectado, insuficiência hepática grave'], es: ['Hemorragia uterina no aclarada, neoplasia estrógeno/progestágeno dependiente activa, falla hepática grave'] },
        relative: { pt: ['Histórico de depressão maior crônica exógena (a progesterona alta pode exacerbar os sintomas depressivos)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'A EMBRIAGUEZ DA VIA ORAL (O EFEITO ACALMANTE DO UTROGESTAN): Se a gestante engolir a cápsula de Progesterona por via oral por erro de orientação, ela vai sentir uma tontura espacial bizarra e um sono incontrolável violento 40 minutos após a tomada. Isso ocorre porque o fígado transforma a progesterona oral em neuroesteroides que imitam um calmante (agem no receptor GABA). Avise a paciente: use sempre o comprimido inserido na VAGINA para cortar esse apagão de sono.', es: 'ALERTA DE EFECTO SEDANTE POR VÍA ORAL: La progesterona ingerida por boca sufre un metabolismo hepático veloz que genera alopregnanolona, un neuroesteroide que activa los receptores GABA-A cerebrales induciendo mareos intensos y embriaguez. Para evitar este efecto incapacitante en el embarazo, la vía vaginal es obligatoria.' }
      },
      references: {
        pt: 'OPPTIMUM Trial (Progesterone for prevention of preterm birth - Lancet 2016); Diretrizes de Prematuridade da FEBRASGO; Bula Utrogestan.',
        es: 'OPPTIMUM Trial (Lancet 2016); Consenso de Prevención del Parto Pretérmino de la FASGO; Ficha Técnica Utrogestan.'
      }
    },

    /* ── CLOMIFENO (Indutor de Ovulação Histórico) ──────────────────────── */
    "clomifeno": {
      name: { pt: 'Citrato de Clomifeno', es: 'Citrato de Clomifeno' },
      category: 'ginecologia',
      class: { pt: 'Modulador Seletivo do Receptor de Estrogênio (SERM) / Indutor de Ovulação de Ação Central', es: 'Modulador Selectivo del Receptor de Estrógeno (SERM) / Inductor de la Ovulación' },
      indications: {
        pt: ['Tratamento da infertilidade feminina por anovulação (Ausência de ovulação em mulheres que desejam engravidar, classicamente utilizado na Síndrome dos Ovários Policísticos — SOP)'],
        es: ['Tratamiento de la infertilidad femenina por anovulación o disfunción ovulatoria (Deseo de gestación activo)']
      },
      commercialNames: { br: ['Clomid', 'Indux', 'Clomifeno (SUS)'], ar: ['Genozym', 'Serophene'] },
      presentation: { pt: ['Comprimidos simples 50 mg'], es: ['Comprimidos simples 50 mg'] },
      mechanism: {
        pt: 'O Enganador do Hipotálamo. É um modulador SERM de ação central. Ele viaja até o cérebro e bloqueia de forma competitiva os receptores de estrogênio localizados no Hipotálamo. O cérebro é "enganado": ele fica cego e acha que os níveis de estrogênio do corpo caíram para zero. Em pânico, o hipotálamo dispara ordens e descarrega pulsos massivos de hormônios FSH e LH. Esse bombardeio hormonal viaja até o ovário e força o recrutamento, crescimento e maturação explosiva dos folículos, provocando a ovulação.',
        es: 'Modulador selectivo de los receptores de estrógeno (SERM). Bloquea de forma competitiva los receptores estrogénicos en el hipotálamo, impidiendo el feedback negativo de los estrógenos endógenos. El cerebro interpreta que los niveles hormonales son nulos, desencadenando una secreción masiva compensatoria de gonadotropinas (FSH y LH) que estimula el desarrollo folicular ovárico.'
      },
      dose: {
        adult: {
          pt: 'Infertilidade/Indução: 50 mg via oral, UMA VEZ AO DIA, por exatamente 5 dias seguidos. O tratamento deve ser iniciado impreterivelmente no 5º dia do ciclo menstrual (contando a partir do primeiro dia da menstruação). Se a mulher não ovular, a dose do próximo mês pode subir para 100 mg ao dia por 5 dias. TETO DE CICLOS: Ver Alertas.',
          es: 'Inducción de la ovulación: 50 mg vía oral, UNA VEZ AL DÍA durante 5 días consecutivos, iniciando el 5to día del ciclo menstrual. Puede incrementarse a 100 mg/día por 5 días en el siguiente ciclo si no hay ovulación.'
        },
        pediatric: {
          pt: 'Uso contraindicado e não aprovado em pediatria.',
          es: 'Contraindicado.'
        }
      },
      administration: { pt: ['Uso oral em ciclos curtos de 5 dias por mês. Pode ser tomado com ou sem alimentos. Monitorar a ovulação em casa por meio de testes de farmácia de LH na urina ou ultrassom transvaginal seriado com o ginecologista.'], es: ['Uso oral restringido a pautas de 5 días por mes. Monitorizar ovulación mediante ecografía ginecológica periódica.'] },
      renalAdjustment: { required: false, message: { pt: 'Mínima eliminação renal, sem necessidade de ajuste de dose.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Metabolizado no fígado. Contraindicado em pacientes com insuficiência hepática grave ou cirrose ativa pelo risco de acúmulo sistêmico.', es: 'Contraindicado en insuficiencia hepática activa.' } },
      commonAdverseEffects: { pt: ['ONDAS DE CALOR INTENSAS (Fogachos faciais e sudorese noturna durante os 5 dias de pílula, afeta > 10%)', 'Dor e desconforto pélvico por crescimento dos ovários', 'Cefaleia e náuseas', 'Sensibilidade mamária'], es: ['SOFOCOS Y ONDAS DE CALOR (muy frecuentes por el hipoestrogenismo central provocado)', 'Dolor o tensión pélvica ovárica', 'Cefalea'] },
      dangerousAdverseEffects: { pt: ['SÍNDROME DA HIPERESTIMULAÇÃO OVARIANA (SHEO grave: os ovários crescem de tamanho gigante, vazam líquido para o abdômen causando ascite, derrame pleural e risco de trombose na UTI)', 'Gestações Múltiplas de Alto Risco (Gêmeos, Trigêmeos devido à ovulação de múltiplos folículos ao mesmo tempo)', 'Escotomas visuais cintilantes (pontos de luz piscando na visão, exige parada da droga)'], es: ['SÍNDROME DE HIPERESTIMULACIÓN OVÁRICA (SHEO — Emergencia crítica por crecimiento ovárico masivo, ascitis y shock)', 'EMBARAZO MÚLTIPLE DE ALTO RIESGO (Gemelares o triples)', 'Escotomas visuales y visión borrosa'] },
      contraindications: {
        absolute: { pt: ['GRAVIDEZ ATIVA estabelecida (Risco teratogênico grave)', 'Presença de Cistos Ovarianos volumosos ou hipertrofia de ovário não relacionada à SOP', 'Doença hepática ativa ou cirrose avançada'], es: ['EMBARAZO activo', 'Quistes ováricos preexistentes o hemorragia uterina anormal', 'Insuficiencia hepática grave'] },
        relative: { pt: ['Histórico de distúrbios visuais recorrentes ou enxaqueca grave oftálmica'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A ARMADILHA DOS GÊMEOS E O TETO DOS 6 MESES (RISCO DE CÂNCER E SHEO): O Clomifeno induz ovulações múltiplas em até 10% dos casos, fazendo a paciente engravidar de gêmeos ou trigêmeos de risco. Alerte a mãe. Além disso, existe um teto de segurança rígido: é PROIBIDO fazer mais do que 6 ciclos de tratamento na vida da paciente. Insistir no uso da droga por mais de 6 meses falha na infertilidade e aumenta de forma assustadora o risco estatístico de a mulher desenvolver Câncer de Ovário a longo prazo.', es: 'ALERTA DE EMBARAZO MÚLTIPLE Y LÍMITE DE CICLOS: Incrementa un 10% la probabilidad de embarazos múltiples (gemelares/trillizos). Asimismo, el tratamiento está severamente LIMITADO a un máximo absoluto de 6 ciclos en la vida de la paciente. Superar los 6 meses continuos de exposición al clomifeno multiplica el riesgo biológico de inducir Cáncer de Ovario epitelial.' }
      },
      references: {
        pt: 'ASRM (American Society for Reproductive Medicine) Ovulation Induction Guidelines; Consenso de Infertilidade da Febrasgo 2024; Bula Clomid.',
        es: 'ASRM Practice Guidelines; Guías de Infertilidad y Reproducción Asistida de la SAMER (Sociedad Argentina de Medicina Reproductiva).'
      }
    },

    /* ── LETROZOL (Inibidor de Aromatase / Infertilidade) ────────────────── */
    "letrozol_ginecologia": {
      name: { pt: 'Letrozol (Uso na Infertilidade)', es: 'Letrozol (Uso en Infertilidad)' },
      category: 'ginecologia',
      class: { pt: 'Inibidor Não-Esteroidal Altamente Seletivo da Aromatase / Indutor de Ovulação de Última Linha', es: 'Inhibidor No Esteroide Altamente Selectivo de la Aromatasa / Inductor de la Ovulación' },
      indications: {
        pt: ['Tratamento de primeira linha da infertilidade por anovulação em mulheres com Síndrome dos Ovários Policísticos (SOP — Superior ao clássico Clomifeno em taxas de nascidos vivos de acordo com o estudo Legro)', 'Tratamento adjuvante do Câncer de Mama inicial com receptor hormonal positivo em mulheres na pós-menopausa'],
        es: ['Tratamiento de primera elección de la infertilidad por anovulación en el Síndrome de Ovario Poliquístico (SOP — Superioridad frente a clomifeno en Estudio Legro)', 'Cáncer de mama']
      },
      commercialNames: { br: ['Femara', 'Letrozol (Genérico)'], ar: ['Femara', 'Letrozol Richmond', 'Trozet'] },
      presentation: { pt: ['Comprimidos revestidos 2,5 mg'], es: ['Comprimidos revestidos 2,5 mg'] },
      mechanism: {
        pt: 'O Indutor de Ovulação de Última Geração. Ele bloqueia de forma cirúrgica e reversível a enzima Aromatase. Esta enzima é a que fabrica o estrogênio do corpo transformando os androgênios em estradiol. Ao travar a aromatase por 5 dias, os níveis de estrogênio desabam rápido. O cérebro percebe a queda e dispara uma descarga potente de hormônio FSH natural da própria paciente. O FSH recruta um único folículo saudável no ovário, induzindo uma ovulação limpa e fisiológica, sem estragar o endométrio do útero.',
        es: 'Inhibidor competitivo altamente selectivo de la enzima Aromatasa, bloqueando la conversión periférica y ovárica de andrógenos en estrógenos (Estradiol). La caída drástica del estrógeno activa el feedback positivo en la hipófisis desatando una liberación endógena de FSH pura, lo que promueve el reclutamiento folicular óptimo sin bloquear los receptores uterinos.'
      },
      dose: {
        adult: {
          pt: 'Indução na SOP (Estudo Legro): 2,5 mg via oral, UMA VEZ AO DIA, por exatamente 5 dias seguidos. O tratamento deve ser iniciado obrigatoriamente no 3º dia do ciclo menstrual (ou no 5º dia). Se não houver ovulação, a dose do ciclo do mês seguinte pode subir para o teto de 5,0 mg ao dia por 5 dias.',
          es: 'Inducción en SOP: 2,5 mg vía oral, UNA VEZ AL DÍA durante 5 días consecutivos, iniciando el 3er o 5to día del ciclo menstrual. Máximo 5 mg/día por ciclo.'
        },
        pediatric: {
          pt: 'Uso contraindicado e não aprovado em pediatria.',
          es: 'Contraindicado.'
        }
      },
      administration: { pt: ['Uso oral em pulsos de 5 dias por mês. Pode ser ingerido com ou sem alimentos de forma indiferente. Apresenta taxas de gravidez única muito maiores e menor risco de gravidez múltipla de risco que o Clomifeno.'], es: ['Uso oral en pauta mensual corta de 5 días. Mayor tasa de embarazo único que clomifeno.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste se ClCr > 10 mL/min; não estudado na falência terminal crônica.', es: 'Sin necesidad de ajuste en TFG > 10 mL/min.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Metabolizado intensamente no fígado pela via CYP3A4. Em pacientes com cirrose avançada severa Child-Pugh C, a eliminação desaba; reduzir a dose do pulso em 50% de forma compulsória.', es: 'Reducir dosis al 50% en insuficiencia hepática grave Child-Pugh C por prolongación de la vida media de aclaramiento.' } },
      commonAdverseEffects: { pt: ['Ondas de calor e fogachos moderados', 'Fadiga, astenia e sensação de moleza corporal', 'Artralgia e dores articulares migratórias transitórias', 'Cefaleia'], es: ['Sofocos y calores súbitos', 'Frecuente astenia y fatiga', 'Artralgias y dolores óseos erráticos transitorios'] },
      dangerousAdverseEffects: { pt: ['Síndrome da Hiperestimulação Ovariana (Risco imensamente menor e raríssimo se comparado ao Clomifeno)', 'Hipercolesterolemia marcada (uso oncológico de longo prazo)', 'Osteoporose acelerada'], es: ['Síndrome de Hiperestimulación Ovárica (Extremadamente raro frente a clomifeno)', 'Pérdida de densidad mineral ósea (en uso oncológico crónico)'] },
      contraindications: {
        absolute: { pt: ['GRAVIDEZ ATIVA E CONFIRMADA (Altamente teratogênico, causa abortamento ou malformações graves se tomado com o embrião já implantado)'], es: ['EMBARAZO (Contraindicación absoluta por teratogenicidad fetal masiva embrionaria)'] },
        relative: { pt: ['Mulheres na pré-menopausa com eixos hormonais normais sem desejo de gravidez ativo (uso oncológico restrito)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A REVOLUÇÃO DO LETROZOL NA SOP (O ESTUDO LEGRO): O Letrozol era usado apenas como quimioterapia para câncer de mama em idosas. Porém, o grande estudo histórico LEGRO provou que para mulheres com Ovário Policístico (SOP) que querem engravidar, o Letrozol é MUITO superior ao Clomifeno. Ele faz a mulher ovular mais, aumenta a taxa de bebês nascidos vivos em casa e quase não causa gravidez múltipla perigosa (como trigêmeos), virando a droga número 1 do mundo na SOP.', es: 'ALERTA DE PRIMERA LÍNEA EN ADOPCIÓN SOP (ESTUDIO LEGRO): Demostró de forma contundente que el Letrozol duplica la tasa de nacidos vivos y disminuye drásticamente los embarazos múltiples de riesgo frente al clomifeno en pacientes estériles con Síndrome de Ovario Poliquístico. Es hoy el estándar de oro internacional.' }
      },
      references: {
        pt: 'Legro et al. Trial (Letrozole vs Clomiphene for Infertility in PCOS - NEJM 2014); Guidelines da ASRM / FEBRASGO para Indução; Manual de Endocrinologia Reprodutiva.',
        es: 'Legro et al. Landmark Trial (NEJM 2014); Guías de Inducción de la Ovulación de la SAMER; Ficha Técnica Femara.'
      }
    }

  }); /* fim Object.assign GINECOLOGIA_DRUGS_DB — BUILD 458-GINE | 5 drogas: etinilestradiol_levonorgestrel, drospirenona, progesterona_micronizada, clomifeno, letrozol_ginecologia */

})();
