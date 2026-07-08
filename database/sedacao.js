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
      name: { pt: 'Propofol', es: 'Propofol' },
      category: 'sedacao_neurologia',
      class: { pt: 'Anestésico Geral Hipnótico de Ação Curta', es: 'Anestésico General Hipnótico de Acción Corta' },
      indications: {
        pt: ['Indução e manutenção de Anestesia Geral', 'Sedação profunda contínua em pacientes ventilados mecanicamente (UTI)', 'Cardioversão elétrica e endoscopias'],
        es: ['Inducción y mantenimiento de Anestesia General', 'Sedación profunda continua en pacientes ventilados mecánicamente (UCI)', 'Cardioversión eléctrica y endoscopias']
      },
      commercialNames: { br: ['Diprivan', 'Provive'], ar: ['Diprivan'] },
      presentation: { pt: ['Ampolas/Frascos IV 1% (10 mg/mL) ou 2% (20 mg/mL)'], es: ['Ampollas/Viales IV 1% (10 mg/mL) o 2% (20 mg/mL)'] },
      mechanism: {
        pt: 'Modulador alostérico positivo e ativador direto do receptor GABA-A no sistema nervoso central. Aumenta massivamente o fluxo de cloreto para dentro dos neurônios, "desligando" o cérebro em 30 segundos. Altamente lipofílico, sofre rápida redistribuição para a gordura, permitindo que o paciente acorde muito rapidamente (em 5 a 10 min) após a bomba ser desligada. NÃO possui efeito analgésico.',
        es: 'Modulador alostérico positivo y activador directo del receptor GABA-A en el sistema nervioso central. Aumenta masivamente el flujo de cloruro hacia dentro de las neuronas, "apagando" el cerebro en 30 segundos. Altamente lipofílico, sufre rápida redistribución a la grasa, permitiendo que el paciente despierte muy rápidamente (en 5 a 10 min) tras apagar la bomba. NO posee efecto analgésico.'
      },
      dose: {
        adult: {
          pt: 'Indução (Bolus): 1,5 a 2,5 mg/kg IV. Manutenção em UTI: 5 a 50 mcg/kg/min (infusão contínua).',
          es: 'Inducción (Bolo): 1,5 a 2,5 mg/kg IV. Mantenimiento en UCI: 5 a 50 mcg/kg/min (infusión continua).'
        },
        pediatric: {
          pt: 'Indução: 2,5 a 3,5 mg/kg IV. Manutenção UTI não recomendada em < 16 anos (alto risco de PRIS).',
          es: 'Inducción: 2,5 a 3,5 mg/kg IV. Mantenimiento UCI no recomendado en < 16 años (alto riesgo de PRIS).'
        }
      },
      administration: { pt: ['Vem em uma emulsão lipídica branca (feita de óleo de soja e lecitina de ovo). Trocar o equipo a cada 12h (meio de cultura ideal para bactérias).', 'A injeção IV arde intensamente.'], es: ['Viene en una emulsión lipídica blanca (hecha de aceite de soja y lecitina de huevo). Cambiar el equipo cada 12h (medio de cultivo ideal para bacterias).', 'La inyección IV arde intensamente.'] },
      renalAdjustment: { required: false, message: { pt: 'Seguro. Metabolismo exclusivamente hepático e eliminação inativa.', es: 'Seguro. Metabolismo exclusivamente hepático y eliminación inactiva.' } },
      hepaticAdjustment: { required: false, message: { pt: 'O clearance excede o fluxo sanguíneo hepático (metabolismo extra-hepático pulmonar envolvido). Não requer ajuste agudo.', es: 'El clearance excede el flujo sanguíneo hepático (metabolismo extrahepático pulmonar involucrado). No requiere ajuste agudo.' } },
      commonAdverseEffects: { pt: ['Hipotensão arterial marcante (vasodilatação severa e depressão miocárdica)', 'Apneia induzida', 'Dor no trajeto da veia durante a injeção'], es: ['Hipotensión arterial marcada (vasodilatación severa y depresión miocárdica)', 'Apnea inducida', 'Dolor en el trayecto de la vena durante la inyección'] },
      dangerousAdverseEffects: { pt: ['Síndrome da Infusão do Propofol (PRIS): Mortalidade altíssima. Causa falência cardíaca refratária, rabdomiólise, acidose metabólica grave e hipertrigliceridemia em infusões altas prolongadas.', 'Choque cardiogênico'], es: ['Síndrome de Infusión de Propofol (PRIS): Mortalidad altísima. Causa falla cardíaca refractaria, rabdomiólisis, acidosis metabólica grave e hipertrigliceridemia en infusiones altas prolongadas.', 'Choque cardiogénico'] },
      contraindications: {
        absolute: { pt: ['Alergia grave a OVO, SOJA ou amendoim (devido ao veículo lipídico)'], es: ['Alergia grave a HUEVO, SOJA o cacahuete (debido al vehículo lipídico)'] },
        relative: { pt: ['Pacientes instáveis hemodinamicamente ou em choque hipovolêmico não corrigido (a pressão cairá a zero)'], es: ['Pacientes inestables hemodinámicamente o en choque hipovolémico no corregido (la presión caerá a cero)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'ATENÇÃO À CALORIA: O propofol é literalmente "gordura na veia" (fornece 1,1 kcal/mL). Em UTI, a nutrição parenteral ou enteral deve ser recalculada e reduzida, caso contrário o paciente sofrerá superalimentação grave e hipertrigliceridemia.', es: 'ATENCIÓN A LA CALORÍA: El propofol es literalmente "grasa en la vena" (proporciona 1,1 kcal/mL). En UCI, la nutrición parenteral o enteral debe ser recalculada y reducida, de lo contrario el paciente sufrirá sobrealimentación grave e hipertrigliceridemia.' }
      }
    },

/* ── MIDAZOLAM ──────────────────────────────────────────────────────── */
    "midazolam": {
      name: { pt: 'Midazolam', es: 'Midazolam' },
      category: 'sedacao_neurologia',
      class: { pt: 'Benzodiazepínico de Curta Duração', es: 'Benzodiazepina de Corta Duración' },
      indications: {
        pt: ['Sedação profunda e amnésia em UTI', 'Pré-medicação anestésica', 'Estado de Mal Epiléptico (Status Epilepticus) refratário'],
        es: ['Sedación profunda y amnesia en UCI', 'Premedicación anestésica', 'Estado de Mal Epiléptico (Status Epilepticus) refractario']
      },
      commercialNames: { br: ['Dormonid'], ar: ['Dormicum'] },
      presentation: { pt: ['Ampolas IV/IM 1 mg/mL ou 5 mg/mL', 'Comprimidos 7,5 mg e 15 mg'], es: ['Ampollas IV/IM 1 mg/mL o 5 mg/mL', 'Comprimidos 7,5 mg y 15 mg'] },
      mechanism: {
        pt: 'Potencializa o efeito do neurotransmissor inibitório GABA no receptor GABA-A. Aumenta a FREQUÊNCIA de abertura dos canais de cloro (diferente dos barbitúricos, que aumentam o TEMPO). Promove hipnose, miorrelaxamento, forte amnésia anterógrada (o paciente não lembra de nada após a injeção) e efeito anticonvulsivante.',
        es: 'Potencia el efecto del neurotransmisor inhibitorio GABA en el receptor GABA-A. Aumenta la FRECUENCIA de apertura de los canales de cloro (a diferencia de los barbitúricos, que aumentan el TIEMPO). Promueve hipnosis, miorrelajación, fuerte amnesia anterógrada (el paciente no recuerda nada tras la inyección) y efecto anticonvulsivo.'
      },
      dose: {
        adult: {
          pt: 'Bolus sedação: 1 a 5 mg IV Lento. Manutenção em UTI: 0,02 a 0,2 mg/kg/h em bomba.',
          es: 'Bolo sedación: 1 a 5 mg IV Lento. Mantenimiento en UCI: 0,02 a 0,2 mg/kg/h en bomba.'
        },
        pediatric: {
          pt: '0,1 a 0,2 mg/kg IV. Pode ser feito Intranasal (0,2 mg/kg) ou IM em resgate de convulsão.',
          es: '0,1 a 0,2 mg/kg IV. Puede hacerse Intranasal (0,2 mg/kg) o IM en rescate de convulsión.'
        }
      },
      administration: { pt: ['Pode ser infundido IV contínuo.', 'Diferente do diazepam, o midazolam tem excelente absorção Intramuscular (IM).'], es: ['Puede ser infundido IV continuo.', 'A diferencia del diazepam, el midazolam tiene excelente absorción Intramuscular (IM).'] },
      renalAdjustment: { required: true, message: { pt: 'ALERTA: Seu metabólito (1-hidroximidazolam) é altamente ativo e de excreção puramente renal. Em insuficiência renal, o metabólito acumula e o paciente fica em coma por DIAS após desligar a bomba.', es: 'ALERTA: Su metabolito (1-hidroximidazolam) es altamente activo y de excreción puramente renal. En insuficiencia renal, el metabolito se acumula y el paciente queda en coma por DÍAS tras apagar la bomba.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Metabolismo dependente do CYP3A4. Reduzir dose na cirrose.', es: 'Metabolismo dependiente del CYP3A4. Reducir dosis en cirrosis.' } },
      commonAdverseEffects: { pt: ['Hipotensão (sinérgica aos opioides)', 'Delirium prolongado no desmame', 'Tolerância (necessidade de aumentar a dose dia após dia)'], es: ['Hipotensión (sinérgica a los opioides)', 'Delirium prolongado en el destete', 'Tolerancia (necesidad de aumentar la dosis día tras día)'] },
      dangerousAdverseEffects: { pt: ['Depressão respiratória grave e apneia', 'Acúmulo tóxico com despertar muito prolongado em renais crônicos'], es: ['Depresión respiratoria grave y apnea', 'Acumulación tóxica con despertar muy prolongado en enfermos renales crónicos'] },
      contraindications: {
        absolute: { pt: ['Miastenia Gravis descompensada', 'Glaucoma de ângulo estreito agudo'], es: ['Miastenia Gravis descompensada', 'Glaucoma de ángulo estrecho agudo'] },
        relative: { pt: ['Uso associado com inibidores potentes do CYP3A4 (Ritonavir, Claritromicina)'], es: ['Uso asociado con inhibidores potentes del CYP3A4 (Ritonavir, Claritromicina)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'A "Ressaca do Midazolam": Na UTI moderna, o uso de midazolam contínuo > 48h é evitado sempre que possível. Ele triplica o risco de Delirium grave e aumenta os dias de ventilação mecânica. Preferir Propofol ou Dexmedetomidina se possível. Antídoto: Flumazenil.', es: 'La "Resaca del Midazolam": En la UCI moderna, el uso de midazolam continuo > 48h se evita siempre que sea posible. Triplica el riesgo de Delirium grave y aumenta los días de ventilación mecánica. Preferir Propofol o Dexmedetomidina si es posible. Antídoto: Flumazenilo.' }
      }
    },

/* ── DEXMEDETOMIDINA (PRECEDEX) ─────────────────────────────────────── */
    "dexmedetomidina": {
      name: { pt: 'Dexmedetomidina', es: 'Dexmedetomidina' },
      category: 'sedacao_neurologia',
      class: { pt: 'Agonista Alfa-2 Adrenérgico Central (Sedativo)', es: 'Agonista Alfa-2 Adrenérgico Central (Sedante)' },
      indications: {
        pt: ['Sedação "consciente" e cooperativa em UTI (Desmame ventilatório)', 'Prevenção e tratamento do Delirium no paciente crítico', 'Sedação para procedimentos não invasivos em pacientes com via aérea difícil'],
        es: ['Sedación "consciente" y cooperativa en UCI (Destete ventilatorio)', 'Prevención y tratamiento del Delirium en el paciente crítico', 'Sedación para procedimientos no invasivos en pacientes con vía aérea difícil']
      },
      commercialNames: { br: ['Precedex'], ar: ['Precedex'] },
      presentation: { pt: ['Ampolas IV 100 mcg/mL (2 mL)'], es: ['Ampollas IV 100 mcg/mL (2 mL)'] },
      mechanism: {
        pt: 'Estimula ativamente os receptores Alfa-2 no Locus Coeruleus (tronco cerebral). Isso bloqueia a liberação de noradrenalina no cérebro, induzindo um sono muito similar ao sono fisiológico normal (NREM). MÁGICA DA DROGA: O paciente dorme, mas se você chamá-lo pelo nome, ele abre os olhos, obedece comandos e volta a dormir logo depois. E O MAIS IMPORTANTE: NÃO causa qualquer grau de depressão respiratória.',
        es: 'Estimula activamente los receptores Alfa-2 en el Locus Coeruleus (tronco cerebral). Esto bloquea la liberación de noradrenalina en el cerebro, induciendo un sueño muy similar al sueño fisiológico normal (NREM). MAGIA DE LA DROGA: El paciente duerme, pero si lo llamas por su nombre, abre los ojos, obedece órdenes y vuelve a dormir enseguida. Y LO MÁS IMPORTANTE: NO causa ningún grado de depresión respiratoria.'
      },
      dose: {
        adult: {
          pt: 'Infusão contínua: 0,2 a 1,5 mcg/kg/hora. (O bolus de ataque de 1 mcg/kg em 10 min foi ABANDONADO na UTI devido à alta taxa de parada sinusal).',
          es: 'Infusión continua: 0,2 a 1,5 mcg/kg/hora. (El bolo de ataque de 1 mcg/kg en 10 min fue ABANDONADO en la UCI debido a la alta tasa de paro sinusal).'
        },
        pediatric: {
          pt: 'Muito segura. Usada até na forma Intranasal (2 a 3 mcg/kg) para acalmar crianças no PS ou ressonância magnética.',
          es: 'Muy segura. Usada incluso en forma Intranasal (2 a 3 mcg/kg) para calmar niños en Urgencias o resonancia magnética.'
        }
      },
      administration: { pt: ['Infusão venosa contínua exclusiva (diluída em SF).', 'Nunca empurrar em bolus rápido (risco de choque hipertensivo seguido de bradicardia letal).'], es: ['Infusión venosa continua exclusiva (diluida en SF).', 'Nunca empujar en bolo rápido (riesgo de choque hipertensivo seguido de bradicardia letal).'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste clínico.', es: 'Sin necesidad de ajuste clínico.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Clearance reduzido na disfunção hepática severa. Diminuir a dose de manutenção.', es: 'Clearance reducido en la disfunción hepática severa. Disminuir la dosis de mantenimiento.' } },
      commonAdverseEffects: { pt: ['Bradicardia sinusal intensa (coração bate a 40-50 bpm normalmente)', 'Hipotensão arterial sistêmica', 'Boca seca'], es: ['Bradicardia sinusal intensa (corazón late a 40-50 lpm normalmente)', 'Hipotensión arterial sistémica', 'Boca seca'] },
      dangerousAdverseEffects: { pt: ['Bloqueio Atrioventricular (BAV) avançado ou Parada Sinusal', 'Efeito rebote adrenérgico (hipertensão, taquicardia) ao desligar abruptamente após vários dias'], es: ['Bloqueo Auriculoventricular (BAV) avanzado o Paro Sinusal', 'Efecto rebote adrenérgico (hipertensión, taquicardia) al apagar abruptamente tras varios días'] },
      contraindications: {
        absolute: { pt: ['Bloqueio AV de 2º e 3º graus preexistente (sem marcapasso)', 'Choque cardiogênico ou hipovolêmico não resolvido'], es: ['Bloqueo AV de 2º y 3º grados preexistente (sin marcapasos)', 'Choque cardiogénico o hipovolémico no resuelto'] },
        relative: { pt: ['Uso associado com betabloqueadores ou amiodarona (risco severo de travar o coração)'], es: ['Uso asociado con betabloqueantes o amiodarona (riesgo severo de tragar el corazón)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'É a única droga sedativa com a qual você PODE EXTUBAR o paciente na UTI com a bomba ainda ligada. Ela mantém o paciente calmo, sem dor e respirando perfeitamente durante a remoção do tubo.', es: 'Es la única droga sedante con la cual PUEDES EXTUBAR al paciente en la UCI con la bomba aún encendida. Mantiene al paciente calmado, sin dolor y respirando perfectamente durante la remoción del tubo.' }
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
