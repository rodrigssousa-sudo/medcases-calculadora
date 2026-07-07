/* ============================================================
   MedCases Pro — Módulo: ENDOCRINOLOGIA — INCRETINAS GLP-1/GIP
   Expõe: window.ENDOCRINO_GLP1_DRUGS_DB
   Schema: array [] — compatível com _injectArrayDB() do index.html
   BUILD 281 — Lote 5:
     Semaglutida   — GLP-1 RA semanal (Ozempic/Wegovy/Rybelsus)
     Tirzepatida   — Duplo GIP+GLP-1 RA semanal (Mounjaro/Zepbound)
     Liraglutida   — GLP-1 RA diário (Victoza/Saxenda)
   ─────────────────────────────────────────────────────────────
   Categorias: endocrino
============================================================ */

window.ENDOCRINO_GLP1_DRUGS_DB = [

  /* ══════════════════════════════════════════════════════════════
     1. SEMAGLUTIDA
     GLP-1 RA Semanal — DM2 · Obesidade · Risco CV
  ══════════════════════════════════════════════════════════════ */
  {
    id: 'semaglutida',
    name: { pt: 'Semaglutida', es: 'Semaglutida' },
    category: 'endocrino',
    class: { pt: 'Agonista do Receptor de GLP-1', es: 'Agonista del Receptor de GLP-1' },
    indications: {
      pt: ['Diabetes Mellitus Tipo 2 (DM2)', 'Obesidade / Sobrepeso com comorbidades (Wegovy)', 'Redução de risco cardiovascular em DM2 com DCV'],
      es: ['Diabetes Mellitus Tipo 2 (DM2)', 'Obesidad / Sobrepeso con comorbilidades (Wegovy)', 'Reducción de riesgo cardiovascular en DM2 con ECV']
    },
    commercialNames: { br: ['Ozempic', 'Wegovy', 'Rybelsus (Oral)'], ar: ['Ozempic', 'Rybelsus'] },
    presentation: {
      pt: ['Caneta SC 0,25 mg, 0,5 mg, 1,0 mg (Ozempic)', 'Caneta SC 2,4 mg (Wegovy)', 'Comprimidos orais 3, 7 e 14 mg (Rybelsus)'],
      es: ['Pluma SC 0,25 mg, 0,5 mg, 1,0 mg (Ozempic)', 'Pluma SC 2,4 mg (Wegovy)', 'Comprimidos orales 3, 7 y 14 mg (Rybelsus)']
    },
    mechanism: {
      pt: 'Análogo do peptídeo semelhante ao glucagon 1 (GLP-1) com meia-vida de ~7 dias (uso semanal). Atua estimulando a secreção de insulina glicose-dependente, suprimindo a secreção de glucagon e retardando drasticamente o esvaziamento gástrico. No sistema nervoso central (hipotálamo), reduz o apetite e o "craving" (fissura alimentar), gerando perda de peso substancial. Demonstrou redução de eventos cardiovasculares maiores (MACE) em DM2 com doença cardiovascular estabelecida (SUSTAIN-6, SELECT).',
      es: 'Análogo del péptido similar al glucagón 1 (GLP-1) con vida media de ~7 días (uso semanal). Actúa estimulando la secreción de insulina glucosa-dependiente, suprimiendo la secreción de glucagón y retrasando drásticamente el vaciamiento gástrico. En el sistema nervioso central (hipotálamo), reduce el apetito y el "craving" (antojo alimentario), generando pérdida de peso sustancial. Demostró reducción de eventos cardiovasculares mayores (MACE) en DM2 con enfermedad cardiovascular establecida (SUSTAIN-6, SELECT).'
    },
    dose: {
      adult: {
        pt: 'SC (Semanal): Iniciar com 0,25 mg 1x/semana por 4 semanas → 0,5 mg/semana. Máx para DM2: 1,0 mg/semana. Obesidade (Wegovy): titular mensalmente em +0,5 mg até 2,4 mg/semana. Oral (Rybelsus): 3 mg/dia por 30 dias → 7 mg/dia (máx 14 mg/dia).',
        es: 'SC (Semanal): Iniciar con 0,25 mg 1 vez/semana por 4 semanas → 0,5 mg/semana. Máx para DM2: 1,0 mg/semana. Obesidad (Wegovy): titular mensualmente en +0,5 mg hasta 2,4 mg/semana. Oral (Rybelsus): 3 mg/día por 30 días → 7 mg/día (máx 14 mg/día).'
      },
      pediatric: {
        pt: 'Wegovy aprovado a partir de 12 anos para obesidade (esquema de titulação similar, máx 2,4 mg/semana).',
        es: 'Wegovy aprobado a partir de 12 años para obesidad (esquema de titulación similar, máx 2,4 mg/semana).'
      }
    },
    administration: {
      pt: ['SC: Uma vez por semana, a qualquer hora do dia, qualquer dia da semana. Mudar o dia da semana requer intervalo mínimo de 2 dias da última dose.', 'Oral (Rybelsus): OBRIGATÓRIO em jejum absoluto, com no máximo 120 mL de água. Aguardar ≥ 30 minutos antes de comer, beber ou tomar outros medicamentos.'],
      es: ['SC: Una vez por semana, a cualquier hora del día, cualquier día de la semana. Cambiar el día de la semana requiere intervalo mínimo de 2 días de la última dosis.', 'Oral (Rybelsus): OBLIGATORIO en ayunas absoluto, con máximo 120 mL de agua. Esperar ≥ 30 minutos antes de comer, beber o tomar otras medicinas.']
    },
    renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste na DRC. Atenção: episódios de vômitos/diarreia podem precipitar Lesão Renal Aguda por desidratação.', es: 'Sin necesidad de ajuste en ERC. Atención: episodios de vómitos/diarrea pueden precipitar Lesión Renal Aguda por deshidratación.' } },
    hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
    commonAdverseEffects: {
      pt: ['Náuseas severas (principalmente na troca de dose — até 44% dos pacientes)', 'Vômitos e Diarreia', 'Constipação crônica', 'Eructações com odor fétido'],
      es: ['Náuseas severas (principalmente en cambio de dosis — hasta 44% de los pacientes)', 'Vómitos y Diarrea', 'Constipación crónica', 'Eructos con olor fétido']
    },
    dangerousAdverseEffects: {
      pt: ['Pancreatite aguda', 'Doença do Trato Biliar (colelitíase pela perda rápida de peso)', 'Gastroparésia severa / Íleo paralítico', 'Retinopatia diabética (agravamento transitório com melhora glicêmica rápida)'],
      es: ['Pancreatitis aguda', 'Enfermedad del Tracto Biliar (colelitiasis por pérdida rápida de peso)', 'Gastroparesia severa / Íleo paralítico', 'Retinopatía diabética (agravamiento transitorio con mejoría glucémica rápida)']
    },
    contraindications: {
      absolute: { pt: ['Histórico pessoal ou familiar de Carcinoma Medular de Tireoide (CMT)', 'Síndrome de Neoplasia Endócrina Múltipla tipo 2 (NEM 2)', 'Gravidez'], es: ['Historial personal o familiar de Carcinoma Medular de Tiroides (CMT)', 'Síndrome de Neoplasia Endocrina Múltiple tipo 2 (NEM 2)', 'Embarazo'] },
      relative: { pt: ['Histórico de Pancreatite prévia', 'Gastroparésia diabética grave', 'Retinopatia não tratada'], es: ['Historial de Pancreatitis previa', 'Gastroparesia diabética grave', 'Retinopatía no tratada'] }
    },
    safetyFlags: {
      bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
      warning: { pt: 'ALERTA CIRÚRGICO: Devido ao atraso no esvaziamento gástrico (risco de broncoaspiração durante anestesia), sociedades de anestesia (ASA/SBA) orientam SUSPENDER a medicação 7 dias antes (semanal SC) ou 1 dia antes (oral/diário) de cirurgias eletivas.', es: 'ALERTA QUIRÚRGICA: Debido al retraso en el vaciamiento gástrico (riesgo de broncoaspiración durante anestesia), sociedades de anestesia (ASA/SBA) orientan SUSPENDER la medicación 7 días antes (semanal SC) o 1 día antes (oral/diario) de cirugías electivas.' }
    },
    ref: 'Marso SP et al. (SUSTAIN-6) N Engl J Med 2016 · Lincoff AM et al. (SELECT) N Engl J Med 2023 · Wilding JPH et al. (STEP 1) N Engl J Med 2021 · Lexicomp 2026'
  },

  /* ══════════════════════════════════════════════════════════════
     2. TIRZEPATIDA
     Duplo Agonista GIP+GLP-1 Semanal — DM2 · Obesidade (Mais Potente)
  ══════════════════════════════════════════════════════════════ */
  {
    id: 'tirzepatida',
    name: { pt: 'Tirzepatida', es: 'Tirzepatida' },
    category: 'endocrino',
    class: { pt: 'Duplo Agonista dos Receptores de GIP e GLP-1', es: 'Doble Agonista de los Receptores de GIP y GLP-1' },
    indications: {
      pt: ['Diabetes Mellitus Tipo 2 (DM2)', 'Obesidade / Manejo de peso crônico (aprovado: superior à semaglutida em redução ponderal nos ensaios SURMOUNT)'],
      es: ['Diabetes Mellitus Tipo 2 (DM2)', 'Obesidad / Manejo de peso crónico (aprobado: superior a semaglutida en reducción ponderal en ensayos SURMOUNT)']
    },
    commercialNames: { br: ['Mounjaro', 'Zepbound'], ar: ['Mounjaro'] },
    presentation: {
      pt: ['Canetas pré-preenchidas SC de dose única (2,5 mg / 5 mg / 7,5 mg / 10 mg / 12,5 mg / 15 mg)'],
      es: ['Plumas prellenadas SC de dosis única (2,5 mg / 5 mg / 7,5 mg / 10 mg / 12,5 mg / 15 mg)']
    },
    mechanism: {
      pt: 'Avanço além do GLP-1 — incretina dual (GIP + GLP-1). Ativa simultaneamente os receptores de GIP (Polipeptídeo Insulinotrópico Dependente de Glicose) e GLP-1. O sinergismo hipotalâmico GIP+GLP-1 gera supressão de apetite superior à monoterapia GLP-1, e a ativação do GIP no tecido adiposo potencializa a lipólise. É atualmente o fármaco mais potente aprovado para perda de peso (frequentemente > 20% do peso corporal nos ensaios SURMOUNT-1).',
      es: 'Avance más allá del GLP-1 — incretina dual (GIP + GLP-1). Activa simultáneamente los receptores de GIP (Polipéptido Insulinotrópico Dependiente de Glucosa) y GLP-1. El sinergismo hipotalámico GIP+GLP-1 genera supresión de apetito superior a la monoterapia GLP-1, y la activación del GIP en el tejido adiposo potencia la lipólisis. Es actualmente el fármaco más potente aprobado para pérdida de peso (frecuentemente > 20% del peso corporal en ensayos SURMOUNT-1).'
    },
    dose: {
      adult: {
        pt: 'SC Semanal. Iniciar com 2,5 mg 1x/semana por 4 semanas → aumentar em +2,5 mg a cada 4 semanas conforme tolerância gastrointestinal. Máximo: 15 mg/semana.',
        es: 'SC Semanal. Iniciar con 2,5 mg 1 vez/semana por 4 semanas → aumentar en +2,5 mg cada 4 semanas según tolerancia gastrointestinal. Máximo: 15 mg/semana.'
      },
      pediatric: {
        pt: 'Ainda em investigação para uso pediátrico; uso restrito a adultos até o momento.',
        es: 'Aún en investigación para uso pediátrico; uso restringido a adultos hasta el momento.'
      }
    },
    administration: {
      pt: ['Administração subcutânea semanal (abdome, coxa ou braço).', 'Canetas de dose única — não há ajuste de cliques. Cada caneta = uma dose da semana.', 'Pode ser administrada a qualquer hora do dia, com ou sem alimento.'],
      es: ['Administración subcutánea semanal (abdomen, muslo o brazo).', 'Plumas de dosis única — sin ajuste de clics. Cada pluma = una dosis de la semana.', 'Puede administrarse a cualquier hora del día, con o sin alimento.']
    },
    renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste. Atenção à desidratação por vômitos/diarreia nas primeiras semanas de titulação.', es: 'Sin necesidad de ajuste. Atención a la deshidratación por vómitos/diarrea en las primeras semanas de titulación.' } },
    hepaticAdjustment: { required: false, message: { pt: 'Sem ajuste necessário.', es: 'Sin ajuste necesario.' } },
    commonAdverseEffects: {
      pt: ['Náusea (até 30% dos pacientes — pico nas primeiras 4 semanas de cada titulação)', 'Diarreia', 'Saciedade precoce extrema e perda de apetite', 'Fadiga nas primeiras semanas'],
      es: ['Náusea (hasta 30% de los pacientes — pico en las primeras 4 semanas de cada titulación)', 'Diarrea', 'Saciedad precoz extrema y pérdida de apetito', 'Fatiga en las primeras semanas']
    },
    dangerousAdverseEffects: {
      pt: ['Pancreatite aguda', 'Gastroparésia severa', 'Colelitíase / Colecistite aguda', 'Aumento da frequência cardíaca em repouso (5-7 bpm em média)'],
      es: ['Pancreatitis aguda', 'Gastroparesia severa', 'Colelitiasis / Colecistitis aguda', 'Aumento de la frecuencia cardíaca en reposo (5-7 lpm en promedio)']
    },
    contraindications: {
      absolute: { pt: ['Histórico pessoal ou familiar de Carcinoma Medular de Tireoide (CMT) ou NEM-2', 'Gravidez'], es: ['Historial personal o familiar de Carcinoma Medular de Tiroides (CMT) o NEM-2', 'Embarazo'] },
      relative: { pt: ['Gastroparésia grave', 'Pancreatite prévia documentada'], es: ['Gastroparesia grave', 'Pancreatitis previa documentada'] }
    },
    safetyFlags: {
      bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
      warning: { pt: 'ALERTA CIRÚRGICO: Idem à semaglutida — suspender 7 dias antes de cirurgias eletivas (risco de broncoaspiração por gastroparésia induzida). ALERTA ANTICONCEPCIONAL: o pico de retardo do esvaziamento gástrico nas primeiras 4 semanas de cada escalada de dose reduz a absorção de contraceptivos orais — usar método de barreira concomitante ou trocar para método não oral.', es: 'ALERTA QUIRÚRGICA: Igual a semaglutida — suspender 7 días antes de cirugías electivas (riesgo de broncoaspiración por gastroparesia inducida). ALERTA ANTICONCEPTIVA: el pico de retraso del vaciamiento gástrico en las primeras 4 semanas de cada escalonada de dosis reduce la absorción de anticonceptivos orales — usar método de barrera concomitante o cambiar a método no oral.' }
    },
    ref: 'Jastreboff AM et al. (SURMOUNT-1) N Engl J Med 2022 · Frías JP et al. (SURPASS-2) N Engl J Med 2021 · Ludvik B et al. (SURPASS-3) Lancet 2021 · Lexicomp 2026'
  },

  /* ══════════════════════════════════════════════════════════════
     3. LIRAGLUTIDA
     GLP-1 RA Diário — DM2 · Obesidade (Primeira Incretina para Obesidade)
  ══════════════════════════════════════════════════════════════ */
  {
    id: 'liraglutida',
    name: { pt: 'Liraglutida', es: 'Liraglutida' },
    category: 'endocrino',
    class: { pt: 'Agonista do Receptor de GLP-1 (Ação Diária)', es: 'Agonista del Receptor de GLP-1 (Acción Diaria)' },
    indications: {
      pt: ['Diabetes Mellitus Tipo 2 (Victoza — com benefício CV documentado no LEADER)', 'Obesidade / Manejo de peso crônico (Saxenda)'],
      es: ['Diabetes Mellitus Tipo 2 (Victoza — con beneficio CV documentado en LEADER)', 'Obesidad / Manejo de peso crónico (Saxenda)']
    },
    commercialNames: { br: ['Victoza', 'Saxenda'], ar: ['Victoza', 'Saxenda'] },
    presentation: {
      pt: ['Caneta SC multidose 6 mg/mL (18 mg total — ~30 doses de 0,6 mg ou 10 doses de 1,8 mg)'],
      es: ['Pluma SC multidosis 6 mg/mL (18 mg total — ~30 dosis de 0,6 mg o 10 dosis de 1,8 mg)']
    },
    mechanism: {
      pt: 'Primeira incretina amplamente adotada para obesidade. Análogo GLP-1 com meia-vida de ~13 horas, necessitando aplicação diária. Retarda o esvaziamento gástrico, suprime o glucagon e aumenta a saciedade a nível hipotalâmico, reduzindo o volume das refeições. Demonstrou redução de morte cardiovascular, IAM não-fatal e AVC não-fatal em DM2 (estudo LEADER, 2016).',
      es: 'Primera incretina ampliamente adoptada para obesidad. Análogo GLP-1 con vida media de ~13 horas, necesitando aplicación diaria. Retrasa el vaciamiento gástrico, suprime el glucagón y aumenta la saciedad a nivel hipotalámico, reduciendo el volumen de las comidas. Demostró reducción de muerte cardiovascular, IAM no fatal y ACV no fatal en DM2 (estudio LEADER, 2016).'
    },
    dose: {
      adult: {
        pt: 'DM2 (Victoza): Iniciar 0,6 mg/dia SC → 1,2 mg após 1 semana → máx 1,8 mg/dia. Obesidade (Saxenda): Iniciar 0,6 mg/dia SC → aumentar +0,6 mg/semana até dose-alvo de 3,0 mg/dia.',
        es: 'DM2 (Victoza): Iniciar 0,6 mg/día SC → 1,2 mg tras 1 semana → máx 1,8 mg/día. Obesidad (Saxenda): Iniciar 0,6 mg/día SC → aumentar +0,6 mg/semana hasta dosis objetivo de 3,0 mg/día.'
      },
      pediatric: {
        pt: 'Saxenda aprovado para adolescentes ≥ 12 anos com obesidade (mesmo esquema de titulação até 3,0 mg/dia).',
        es: 'Saxenda aprobado para adolescentes ≥ 12 años con obesidad (mismo esquema de titulación hasta 3,0 mg/día).'
      }
    },
    administration: {
      pt: ['Aplicação subcutânea uma vez ao dia (abdome, coxa ou braço), independentemente das refeições.', 'Caneta com ponteiro seletor de dose — ajuste em cliques (diferente das canetas de dose única da tirzepatida).'],
      es: ['Aplicación subcutánea una vez al día (abdomen, muslo o brazo), independientemente de las comidas.', 'Pluma con selector de dosis en clics (diferente de las plumas de dosis única de tirzepatida).']
    },
    renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste. Atenção a episódios de desidratação por náuseas/vômitos nas primeiras semanas.', es: 'Sin necesidad de ajuste. Atención a episodios de deshidratación por náuseas/vómitos en las primeras semanas.' } },
    hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
    commonAdverseEffects: {
      pt: ['Náusea (muito comum no início da titulação — 25-40% dos pacientes)', 'Diarreia', 'Hipoglicemia leve (somente se em uso concomitante de sulfonilureias ou insulina)', 'Azia e dispepsia'],
      es: ['Náusea (muy común al inicio de la titulación — 25-40% de los pacientes)', 'Diarrea', 'Hipoglucemia leve (solo si en uso concomitante de sulfonilureas o insulina)', 'Acidez y dispepsia']
    },
    dangerousAdverseEffects: {
      pt: ['Pancreatite aguda', 'Formação de cálculos biliares (colelitíase por perda de peso rápida)'],
      es: ['Pancreatitis aguda', 'Formación de cálculos biliares (colelitiasis por pérdida de peso rápida)']
    },
    contraindications: {
      absolute: { pt: ['Histórico pessoal ou familiar de CMT ou NEM-2', 'Gravidez'], es: ['Historial personal o familiar de CMT o NEM-2', 'Embarazo'] },
      relative: { pt: ['Pancreatite prévia documentada', 'Gastroparésia diabética grave'], es: ['Pancreatitis previa documentada', 'Gastroparesia diabética grave'] }
    },
    safetyFlags: {
      bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
      warning: { pt: 'ADESÃO: Injeções diárias têm menor adesão a longo prazo em comparação com análogos semanais (semaglutida, tirzepatida). A perda de peso máxima média (~8-10%) é inferior às terapias de incretina mais modernas. Considerar transição para análogo semanal se a resposta for insuficiente após 12-16 semanas na dose máxima.', es: 'ADHESIÓN: Las inyecciones diarias tienen menor adhesión a largo plazo en comparación con análogos semanales (semaglutida, tirzepatida). La pérdida de peso máxima media (~8-10%) es inferior a las terapias de incretina más modernas. Considerar transición a análogo semanal si la respuesta es insuficiente tras 12-16 semanas en la dosis máxima.' }
    },
    ref: 'Marso SP et al. (LEADER) N Engl J Med 2016 · Pi-Sunyer X et al. (SCALE Obesity) N Engl J Med 2015 · Kelly AS et al. (SCALE Adolescents) N Engl J Med 2020 · Lexicomp 2026'
  }

]; /* fim window.ENDOCRINO_GLP1_DRUGS_DB */
