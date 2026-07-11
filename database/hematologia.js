/* ============================================================
   MedCases Pro — Módulo: HEMATOLOGIA / ANTICOAGULAÇÃO
   Expõe: window.HEMATOLOGIA_DRUGS_DB

   BUILD 350 — Lote 1 (Anticoagulantes + Hemostáticos)
   Heparina HNF, Enoxaparina, Varfarina, Rivaroxabana, Ácido Tranexâmico
   ============================================================ */

(function () {
  'use strict';
  if (typeof window.HEMATOLOGIA_DRUGS_DB !== 'object' || Array.isArray(window.HEMATOLOGIA_DRUGS_DB)) {
    window.HEMATOLOGIA_DRUGS_DB = {};
  }

  Object.assign(window.HEMATOLOGIA_DRUGS_DB, {

/* ── HEPARINA NÃO FRACIONADA (HNF) ──────────────────────────────────── */
    "heparina_hnf": {
      name: { pt: 'Heparina Não Fracionada (HNF)', es: 'Heparina No Fraccionada (HNF)' },
      category: 'hematologia',
      class: { pt: 'Anticoagulante Injetável Direto', es: 'Anticoagulante Inyectable Directo' },
      indications: {
        pt: ['Anticoagulação imediata no Infarto (IAM), TEP e TVP', 'Cirurgia Cardíaca com Circulação Extracorpórea (CEC)', 'Pacientes em diálise (para evitar coagulação no filtro)'],
        es: ['Anticoagulación inmediata en el Infarto (IAM), TEP y TVP', 'Cirugía Cardíaca con Circulación Extracorpórea (CEC)', 'Pacientes en diálisis (para evitar coagulación en el filtro)']
      },
      commercialNames: { br: ['Hemofol', 'Heparina Sódica'], ar: ['Heparina'] },
      presentation: { pt: ['Frasco-ampola IV/SC 5.000 UI/mL (5 mL = 25.000 UI)'], es: ['Vial IV/SC 5.000 UI/mL (5 mL = 25.000 UI)'] },
      mechanism: {
        pt: 'Liga-se à enzima endógena Antitrombina III, acelerando brutalmente (em 1000 vezes) a capacidade desta de inibir os Fatores de Coagulação IIa (Trombina) e Xa de forma igual. O sangue perde imediatamente a capacidade de formar novos coágulos de fibrina. Ação ultrarrápida na veia (minutos) e meia-vida curtíssima (1 a 2 horas), permitindo desligar a bomba caso ocorra sangramento.',
        es: 'Se une a la enzima endógena Antitrombina III, acelerando brutalmente (en 1000 veces) la capacidad de esta para inhibir los Factores de Coagulación IIa (Trombina) y Xa por igual. La sangre pierde inmediatamente la capacidad de formar nuevos coágulos de fibrina. Acción ultrarrápida en la vena (minutos) y vida media cortísima (1 a 2 horas), permitiendo apagar la bomba en caso de sangrado.'
      },
      dose: {
        adult: {
          pt: 'Terapêutica (Bomba de Infusão): Bolus de 80 UI/kg seguido de 18 UI/kg/hora. Dose ajustada a cada 6h com base no TTPa (Tempo de Tromboplastina Parcial Ativada).',
          es: 'Terapéutica (Bomba de Infusión): Bolo de 80 UI/kg seguido de 18 UI/kg/hora. Dosis ajustada cada 6h con base en el TTPa (Tiempo de Tromboplastina Parcial Activada).'
        },
        pediatric: {
          pt: 'Bolus de 75 UI/kg, seguido de infusão (lactentes: 28 UI/kg/h; crianças maiores: 20 UI/kg/h).',
          es: 'Bolo de 75 UI/kg, seguido de infusión (lactantes: 28 UI/kg/h; niños mayores: 20 UI/kg/h).'
        }
      },
      administration: { pt: ['Infusão IV contínua requer bomba e checagem de laboratório TTPa rigorosa a cada 6 horas.', 'A injeção IM é absolutamente proibida (causa hematoma maciço doloroso).'], es: ['Infusión IV continua requiere bomba y chequeo de laboratorio TTPa riguroso cada 6 horas.', 'La inyección IM está absolutamente prohibida (causa hematoma masivo doloroso).'] },
      renalAdjustment: { required: false, message: { pt: 'É a Heparina de ESCOLHA para falência renal aguda grave ou ClCr < 15, pois o seu clearance é feito por macrófagos, isentando os rins.', es: 'Es la Heparina de ELECCIÓN para falla renal aguda grave o ClCr < 15, pues su clearance es hecho por macrófagos, eximiendo a los riñones.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Pode haver resistência à heparina em doenças hepáticas graves por deficiência de Antitrombina III (fígado doente não produz).', es: 'Puede haber resistencia a la heparina en enfermedades hepáticas graves por deficiencia de Antitrombina III (hígado enfermo no la produce).' } },
      commonAdverseEffects: { pt: ['Sangramento de acessos venosos, mucosa gengival e epistaxe', 'Queda reversível de plaquetas nos primeiros dias'], es: ['Sangrado de accesos venosos, mucosa gingival y epistaxis', 'Caída reversible de plaquetas en los primeros días'] },
      dangerousAdverseEffects: { pt: ['Trombocitopenia Induzida pela Heparina (HIT Tipo II): Reação autoimune onde a heparina DESTROÍ as plaquetas e ativa as restantes, causando TROMBOSE maciça paradoxal e amputações.', 'Hemorragia Intracraniana fatal'], es: ['Trombocitopenia Inducida por Heparina (HIT Tipo II): Reacción autoinmune donde la heparina DESTRUYE las plaquetas y activa las restantes, causando TROMBOSIS masiva paradójica y amputaciones.', 'Hemorragia Intracraneal fatal'] },
      contraindications: {
        absolute: { pt: ['Sangramento ativo ou história recente de hemorragia intracerebral', 'Histórico de HIT (Trombocitopenia Induzida por Heparina)'], es: ['Sangrado activo o historia reciente de hemorragia intracerebral', 'Historial de HIT (Trombocitopenia Inducida por Heparina)'] },
        relative: { pt: ['Úlcera péptica ativa', 'Hipertensão severa não controlada (> 200/120 mmHg)'], es: ['Úlcera péptica activa', 'Hipertensión severa no controlada (> 200/120 mmHg)'] }
      },
      safetyFlags: {
        bleedingRisk: true, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'ANTÍDOTO DIRETO: SULFATO DE PROTAMINA (1 mg neutraliza cerca de 100 UI de heparina circulante). Nunca inicie a bomba de heparina sem antes checar o TTPa basal e plaquetas do paciente.', es: 'ANTÍDOTO DIRECTO: SULFATO DE PROTAMINA (1 mg neutraliza cerca de 100 UI de heparina circulante). Nunca inicie la bomba de heparina sin antes chequear el TTPa basal y plaquetas del paciente.' }
      }
    },

/* ── ENOXAPARINA (HBPM) ─────────────────────────────────────────────── */
    "enoxaparina": {
      name: { pt: 'Enoxaparina', es: 'Enoxaparina' },
      category: 'hematologia',
      class: { pt: 'Heparina de Baixo Peso Molecular (HBPM)', es: 'Heparina de Bajo Peso Molecular (HBPM)' },
      indications: {
        pt: ['Profilaxia de Tromboembolismo Venoso (TVP) em pacientes acamados e cirúrgicos', 'Tratamento (dose plena) de TEP, TVP e Síndromes Coronarianas Agudas (Infarto sem supra ST)'],
        es: ['Profilaxis de Tromboembolismo Venoso (TVP) en pacientes encamados y quirúrgicos', 'Tratamiento (dosis plena) de TEP, TVP y Síndromes Coronarios Agudos (Infarto sin supra ST)']
      },
      commercialNames: { br: ['Clexane', 'Versa'], ar: ['Clexane'] },
      presentation: { pt: ['Seringas preenchidas SC 20 mg, 40 mg, 60 mg, 80 mg e 100 mg (1 mg = 100 UI)'], es: ['Jeringas prellenadas SC 20 mg, 40 mg, 60 mg, 80 mg y 100 mg'] },
      mechanism: {
        pt: 'Pedaços cortados (fracionados) da heparina tradicional. Liga-se à Antitrombina III, porém, devido ao seu tamanho menor, inibe FORTEMENTE o Fator Xa (fator de conversão) e MUITO POUCO o fator IIa (Trombina). É mais previsível, sua absorção cutânea é quase 100% e tem ação prolongada (12 a 24h), NÃO EXIGINDO monitorização laboratorial diária (TTPa).',
        es: 'Pedazos cortados (fraccionados) de la heparina tradicional. Se une a la Antitrombina III, pero, debido a su menor tamaño, inhibe FUERTEMENTE el Factor Xa (factor de conversión) y MUY POCO el factor IIa (Trombina). Es más predecible, su absorción cutánea es casi 100% y tiene acción prolongada (12 a 24h), NO EXIGIENDO monitorización de laboratorio diaria (TTPa).'
      },
      dose: {
        adult: {
          pt: 'Profilaxia: 40 mg SC 1x/dia (ou 20mg se leve). Terapêutica (Tratamento): 1 mg/kg SC a cada 12 horas (ou 1,5 mg/kg SC 1x/dia em casos de TEP estável).',
          es: 'Profilaxis: 40 mg SC 1 vez/día (o 20mg si leve). Terapéutica (Tratamiento): 1 mg/kg SC cada 12 horas (o 1,5 mg/kg SC 1 vez/día en casos de TEP estable).'
        },
        pediatric: {
          pt: 'Tratamento: < 2 meses: 1,5 mg/kg 12/12h. > 2 meses: 1 mg/kg 12/12h.',
          es: 'Tratamiento: < 2 meses: 1,5 mg/kg 12/12h. > 2 meses: 1 mg/kg 12/12h.'
        }
      },
      administration: { pt: ['Injeção exclusivamente Subcutânea profunda (parede abdominal). Alternar os lados. Não esfregar o local da aplicação para evitar hematoma.'], es: ['Inyección exclusivamente Subcutánea profunda (pared abdominal). Alternar los lados. No frotar el sitio de aplicación para evitar hematoma.'] },
      renalAdjustment: { required: true, message: { pt: 'Altamente dependente do rim para excreção. Se ClCr < 30 mL/min: Profilaxia cai para 20 mg 1x/dia. Terapêutica cai para 1 mg/kg apenas 1x ao dia (cortar dose pela metade).', es: 'Altamente dependiente del riñón para excreción. Si ClCr < 30 mL/min: Profilaxis cae a 20 mg 1 vez/día. Terapéutica cae a 1 mg/kg solo 1 vez al día (cortar dosis a la mitad).' } },
      hepaticAdjustment: { required: false, message: { pt: 'Usar com cautela em coagulopatia hepática basal.', es: 'Usar con precaución en coagulopatía hepática basal.' } },
      commonAdverseEffects: { pt: ['Hematoma no local da injeção', 'Aumento assintomático transitório das transaminases'], es: ['Hematoma en el sitio de inyección', 'Aumento asintomático transitorio de transaminasas'] },
      dangerousAdverseEffects: { pt: ['Hemorragia sistêmica grave (se não for feito o ajuste renal correto)', 'Hematoma Espinhal/Epidural (Pode causar paralisia irreversível das pernas se feita perto do horário da Raquianestesia)', 'HIT (raro com HBPM, mas possível)'], es: ['Hemorragia sistémica grave (si no se hace el ajuste renal correcto)', 'Hematoma Espinal/Epidural (Puede causar parálisis irreversible de las piernas si se hace cerca del horario de la Raquianestesia)', 'HIT (raro con HBPM, pero posible)'] },
      contraindications: {
        absolute: { pt: ['Histórico grave de Trombocitopenia Induzida pela Heparina', 'Hemorragia ativa severa'], es: ['Historial grave de Trombocitopenia Inducida por Heparina', 'Hemorragia activa severa'] },
        relative: { pt: ['Punção lombar ou Raquianestesia programada para as próximas 12 a 24h'], es: ['Punción lumbar o Raquianestesia programada para las próximas 12 a 24h'] }
      },
      safetyFlags: {
        bleedingRisk: true, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'MANTENHA OS TEMPOS! A Enoxaparina DEVE ser suspensa rigorosamente 12 horas antes da profilaxia ou 24 horas antes do tratamento pleno de qualquer procedimento de punção da coluna (raqui/peridural), para evitar que o paciente fique paraplégico por hematoma comprimindo a medula. Antídoto: Protamina só reverte ~60% do efeito.', es: '¡MANTENGA LOS TIEMPOS! La Enoxaparina DEBE suspenderse rigurosamente 12 horas antes de la profilaxis o 24 horas antes del tratamiento pleno de cualquier procedimiento de punción de la columna, para evitar que el paciente quede parapléjico por hematoma comprimiendo la médula. Antídoto: Protamina solo revierte ~60% del efecto.' }
      }
    },

/* ── VARFARINA ──────────────────────────────────────────────────────── */
    "varfarina": {
      name: { pt: 'Varfarina', es: 'Warfarina' },
      category: 'hematologia',
      class: { pt: 'Anticoagulante Oral / Antagonista da Vitamina K', es: 'Anticoagulante Oral / Antagonista de la Vitamina K' },
      indications: {
        pt: ['Profilaxia de AVE em Fibrilação Atrial VALVAR (ex: Próteses metálicas ou Estenose Mitral reumática)', 'Tratamento crônico de TVP e TEP (com ponte de heparina)', 'Trombofilias crônicas (ex: Síndrome do Anticorpo Antifosfolipídeo)'],
        es: ['Profilaxis de ACV en Fibrilación Auricular VALVULAR (ej: Prótesis metálicas o Estenosis Mitral reumática)', 'Tratamiento crónico de TVP y TEP (con puente de heparina)', 'Trombofilias crónicas (ej: Síndrome Antifosfolípido)']
      },
      commercialNames: { br: ['Marevan', 'Coumadin'], ar: ['Coumadin', 'Circuvit'] },
      presentation: { pt: ['Comprimidos 5 mg, 1 mg e 2,5 mg (Cores variam para ajudar na dose)'], es: ['Comprimidos 5 mg, 1 mg y 2,5 mg (Colores varían para ayudar en la dosis)'] },
      mechanism: {
        pt: 'Impede a enzima Vitamina K Epóxido Redutase (VKORC1) de reciclar a Vitamina K no fígado. Sem Vitamina K ativada, o fígado não consegue produzir os Fatores de Coagulação II, VII, IX e X, nem as Proteínas C e S (anticoagulantes naturais). Demora DE 3 A 5 DIAS para o sangue afinar (pois precisa esperar os fatores antigos no sangue morrerem). É a droga com maior número de interações alimentares e medicamentosas do mundo.',
        es: 'Impide a la enzima Vitamina K Epóxido Reductasa (VKORC1) reciclar la Vitamina K en el hígado. Sin Vitamina K activada, el hígado no puede producir los Factores de Coagulación II, VII, IX y X, ni las Proteínas C y S. Tarda DE 3 A 5 DÍAS para afinar la sangre (pues necesita esperar a que los factores antiguos en la sangre mueran). Es la droga con mayor número de interacciones alimentarias y medicamentosas del mundo.'
      },
      dose: {
        adult: {
          pt: 'Extremamente variável. Início comum com 5 mg VO 1x/dia. Dose moldada EXCLUSIVAMENTE para manter o RNI (TAP) entre 2,0 e 3,0 (ou 2,5 e 3,5 em válvulas metálicas).',
          es: 'Extremamente variable. Inicio común con 5 mg VO 1 vez/día. Dosis moldeada EXCLUSIVAMENTE para mantener el RNI (TAP) entre 2,0 y 3,0 (o 2,5 y 3,5 en válvulas metálicas).'
        },
        pediatric: {
          pt: '0,1 a 0,2 mg/kg/dia inicial. Guiado estritamente por hematologista pediátrico.',
          es: '0,1 a 0,2 mg/kg/día inicial. Guiado estrictamente por hematólogo pediátrico.'
        }
      },
      administration: { pt: ['Tomar religiosamente no mesmo horário, todos os dias.', 'Alimentos verde-escuros (ricos em Vit. K como couve, brócolis) devem ser mantidos constantes. Se o paciente parar de comer salada de repente, a varfarina vai afinar o sangue demais e matá-lo por sangramento.'], es: ['Tomar religiosamente en el mismo horario, todos los días.', 'Alimentos verde-oscuros (ricos en Vit. K como col, brócoli) deben mantenerse constantes. Si el paciente deja de comer ensalada de repente, la warfarina afinará la sangre demasiado y lo matará por sangrado.'] },
      renalAdjustment: { required: false, message: { pt: 'Um dos raros anticoagulantes liberados no ClCr < 15 e hemodiálise.', es: 'Uno de los raros anticoagulantes liberados en ClCr < 15 y hemodiálisis.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Reduzir fortemente a dose na insuficiência hepática, pois os fatores de coagulação já estão em falta por doença.', es: 'Reducir fuertemente la dosis en la insuficiencia hepática, pues los factores de coagulación ya escasean por enfermedad.' } },
      commonAdverseEffects: { pt: ['Sangramento fácil (gengiva, pequenos hematomas, sangue na urina)', 'Alopecia difusa leve', 'Piora da osteoporose em uso longo'], es: ['Sangrado fácil (encía, pequeños hematomas, sangre en la orina)', 'Alopecia difusa leve', 'Empeoramiento de la osteoporosis en uso largo'] },
      dangerousAdverseEffects: { pt: ['Necrose de pele induzida por Varfarina (no início do tratamento, por queda súbita da Proteína C antes dos outros fatores, causando microtrombos cutâneos)', 'Hemorragia Intracraniana letal', 'Hemorragia fetal severa'], es: ['Necrosis de piel inducida por Warfarina (al inicio del tratamiento, por caída súbita de la Proteína C antes que los otros factores, causando microtrombos cutáneos)', 'Hemorragia Intracraneal letal', 'Hemorragia fetal severa'] },
      contraindications: {
        absolute: { pt: ['Gravidez (A mais terrível de todas. Causa condrodisplasia puntata fatal e hemorragia craniana no feto. ESTRITAMENTE CONTRAINDICADA)', 'Não adesão do paciente ao exame de sangue (RNI) mensal', 'Hemorragia ativa'], es: ['Embarazo (La más terrible de todas. Causa condrodisplasia punctata fatal y hemorragia craneal en el feto. ESTRICTAMENTE CONTRAINDICADA)', 'No adhesión del paciente al examen de sangre (RNI) mensual', 'Hemorragia activa'] },
        relative: { pt: ['Alcoolismo ativo severo (risco de queda e falência hepática concomitante)'], es: ['Alcoholismo activo severo (riesgo de caída y falla hepática concomitante)'] }
      },
      safetyFlags: {
        bleedingRisk: true, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'TERAPIA DE PONTE OBRIGATÓRIA: Como a varfarina demora dias para agir, se o paciente tiver uma Trombose hoje, você DEVE iniciar Enoxaparina subcutânea JUNTO com a Varfarina oral, e só tirar a Enoxaparina 5 dias depois quando o RNI estiver > 2,0. Antídoto Agudo: Complexo Protrombínico + Vitamina K IV.', es: 'TERAPIA DE PUENTE OBLIGATORIA: Como la warfarina tarda días en actuar, si el paciente tiene una Trombosis hoy, DEBES iniciar Enoxaparina subcutánea JUNTO con la Warfarina oral, y solo quitar la Enoxaparina 5 días después cuando el RNI sea > 2,0. Antídoto Agudo: Complejo Protrombínico + Vitamina K IV.' }
      }
    },

/* ── RIVAROXABANA (DOACs) ───────────────────────────────────────────── */
    "rivaroxabana": {
      name: { pt: 'Rivaroxabana', es: 'Rivaroxabán' },
      category: 'hematologia',
      class: { pt: 'Anticoagulante Oral Direto (Inibidor do Fator Xa)', es: 'Anticoagulante Oral Directo (Inhibidor del Factor Xa)' },
      indications: {
        pt: ['Profilaxia de AVE em Fibrilação Atrial NÃO-VALVAR', 'Tratamento de TVP e TEP sem necessidade de injeções (Dose pura desde o Dia 1)', 'Profilaxia de trombose pós-cirurgia de joelho/quadril'],
        es: ['Profilaxis de ACV en Fibrilación Auricular NO VALVULAR', 'Tratamiento de TVP y TEP sin necesidad de inyecciones (Dosis pura desde el Día 1)', 'Profilaxis de trombosis poscirugía de rodilla/cadera']
      },
      commercialNames: { br: ['Xarelto'], ar: ['Xarelto'] },
      presentation: { pt: ['Comprimidos 10 mg, 15 mg, 20 mg (e 2,5 mg uso vascular)'], es: ['Comprimidos 10 mg, 15 mg, 20 mg (y 2,5 mg uso vascular)'] },
      mechanism: {
        pt: 'Diferente da varfarina que ataca vários fatores de uma vez, a Rivaroxabana inibe DIRETAMENTE E SELETIVAMENTE apenas um: o Fator Xa (o centro da cascata de coagulação, onde as vias intrínseca e extrínseca se unem). A vantagem: Age em 2 a 4 horas (NÃO exige injeção/ponte de heparina inicial no TEP/TVP), a dose é fixa, e NÃO exige exame de sangue mensal para controlar a grossura do sangue.',
        es: 'A diferencia de la warfarina que ataca varios factores a la vez, el Rivaroxabán inhibe DIRECTAMENTE Y SELECTIVAMENTE solo uno: el Factor Xa (el centro de la cascada, donde las vías intrínseca y extrínseca se unen). La ventaja: Actúa en 2 a 4 horas (NO exige inyección/puente de heparina inicial en TEP/TVP), la dosis es fija, y NO exige examen de sangre mensual.'
      },
      dose: {
        adult: {
          pt: 'FA Não-valvar: 20 mg VO 1x/dia. TEP/TVP (Ataque): 15 mg VO 12/12h nos primeiros 21 dias, depois 20 mg VO 1x/dia.',
          es: 'FA No Valvular: 20 mg VO 1 vez/día. TEP/TVP (Ataque): 15 mg VO 12/12h los primeros 21 días, luego 20 mg VO 1 vez/día.'
        },
        pediatric: {
          pt: 'Não é rotina, mas aprovado suspensão oral pediátrica para TVP em crianças após tratamento parenteral.',
          es: 'No es rutina, pero aprobado suspensión oral pediátrica para TVP en niños tras tratamiento parenteral.'
        }
      },
      administration: { pt: ['MUITO IMPORTANTE: Os comprimidos de 15 mg e 20 mg DEVEM OBRIGATORIAMENTE ser tomados com alimento (absorção despenca se tomado em jejum). O de 10 mg pode ser sem alimento.'], es: ['MUY IMPORTANTE: Los comprimidos de 15 mg y 20 mg DEBEN OBLIGATORIAMENTE ser tomados con alimento (absorción se desploma si se toma en ayunas). El de 10 mg puede ser sin alimento.'] },
      renalAdjustment: { required: true, message: { pt: 'FA: Se ClCr entre 15 e 49 mL/min, reduzir dose para 15 mg 1x/dia. ClCr < 15: CONTRAINDICADO (Preferir Varfarina).', es: 'FA: Si ClCr entre 15 y 49 mL/min, reducir dosis a 15 mg 1 vez/día. ClCr < 15: CONTRAINDICADO (Preferir Warfarina).' } },
      hepaticAdjustment: { required: true, message: { pt: 'Contraindicado em cirrose hepática moderada a grave (Child-Pugh B e C) associada a coagulopatia.', es: 'Contraindicado en cirrosis hepática moderada a grave (Child-Pugh B y C) asociada a coagulopatía.' } },
      commonAdverseEffects: { pt: ['Sangramento do trato gastrointestinal (ocorre MAIS na Rivaroxabana do que na varfarina)', 'Epistaxe', 'Sangramento menstrual intenso'], es: ['Sangrado del tracto gastrointestinal (ocurre MÁS en el Rivaroxabán que en la warfarina)', 'Epistaxis', 'Sangrado menstrual intenso'] },
      dangerousAdverseEffects: { pt: ['Hemorragia Intracraniana fatal (ocorre MENOS com DOACs do que com varfarina, sendo a sua grande vantagem de segurança vital)'], es: ['Hemorragia Intracraneal fatal (ocurre MENOS con DOACs que con warfarina, siendo su gran ventaja de seguridad vital)'] },
      contraindications: {
        absolute: { pt: ['Fibrilação Atrial Valvar (Próteses Mecânicas ou Estenose Mitral reumática severa - O DOAC falha miseravelmente aqui, a válvula vai trombosar. Tem que ser Varfarina)', 'Sangramento ativo'], es: ['Fibrilación Auricular Valvular (Prótesis Mecánicas o Estenosis Mitral reumática severa - El DOAC falla miserablemente aquí, la válvula se trombozará. Tiene que ser Warfarina)', 'Sangrado activo'] },
        relative: { pt: ['Insuficiência renal grave (ClCr < 15)'], es: ['Insuficiencia renal grave (ClCr < 15)'] }
      },
      safetyFlags: {
        bleedingRisk: true, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'VANTAGEM E RISCO: O DOAC (Rivaroxabana, Apixabana) não avisa no sangue se o paciente está super-anticoagulado (o TAP/TTPa fica normal). O antídoto específico (Andexanet Alfa) existe, mas custa fortunas incalculáveis e não está disponível em 99% dos hospitais comuns (usa-se Complexo Protrombínico improvisado).', es: 'VENTAJA Y RIESGO: El DOAC no avisa en la sangre si el paciente está súper-anticoagulado (el TAP/TTPa queda normal). El antídoto específico (Andexanet Alfa) existe, pero cuesta fortunas incalculables y no está disponible en 99% de los hospitales comunes.' }
      }
    },

/* ── ÁCIDO TRANEXÂMICO ──────────────────────────────────────────────── */
    "acido_tranexamico": {
      name: { pt: 'Ácido Tranexâmico', es: 'Ácido Tranexámico' },
      category: 'hematologia',
      class: { pt: 'Agente Antifibrinolítico (Hemostático)', es: 'Agente Antifibrinolítico (Hemostático)' },
      indications: {
        pt: ['Choque Hemorrágico no Trauma grave (Ex: Acidentes, Baleados)', 'Hemorragia Pós-Parto', 'Menorragia severa (sangramento uterino)', 'Reversão de hemorragias em cirurgias odontológicas / hemofílicos'],
        es: ['Choque Hemorrágico en Trauma grave (Ej: Accidentes, Tiroteados)', 'Hemorragia Posparto', 'Menorragia severa (sangrado uterino)', 'Reversión de hemorragias en cirugías odontológicas / hemofílicos']
      },
      commercialNames: { br: ['Transamin'], ar: ['Amchafibrin'] },
      presentation: { pt: ['Ampolas IV 50 mg/mL (5 mL = 250mg)', 'Comprimidos 250 mg'], es: ['Ampollas IV 50 mg/mL (5 mL = 250mg)', 'Comprimidos 250 mg'] },
      mechanism: {
        pt: 'Uma cópia molecular (análogo sintético) da lisina. Ele se liga de forma irreversível aos locais receptores da enzima PLASMINOGÊNIO. Ao travar esse receptor, ele impede que o plasminogênio seja ativado em PLASMINA (a tesoura que corta coágulos). Resultado: Ele "blinda" o coágulo de sangue que o corpo conseguiu formar no ferimento, impedindo que o corpo o desmanche precocemente, parando o sangramento.',
        es: 'Una copia molecular (análogo sintético) de la lisina. Se une de forma irreversible a los sitios receptores de la enzima PLASMINÓGENO. Al trabar este receptor, impide que el plasminógeno se active en PLASMINA (la tijera que corta coágulos). Resultado: "Blinda" el coágulo de sangre que el cuerpo logró formar en la herida, impidiendo que el cuerpo lo deshaga precozmente, parando el sangrado.'
      },
      dose: {
        adult: {
          pt: 'Politrauma / Hemorragia Pós-parto: 1 Grama IV em bolus (correr em 10 min), seguido por infusão contínua de 1 Grama IV ao longo de 8 horas.',
          es: 'Politrauma / Hemorragia Posparto: 1 Gramo IV en bolo (pasar en 10 min), seguido por infusión continua de 1 Gramo IV a lo largo de 8 horas.'
        },
        pediatric: {
          pt: '10 a 15 mg/kg IV a cada 8 horas. No trauma pediátrico: 15 mg/kg em ataque, 2 mg/kg/h em manutenção.',
          es: '10 a 15 mg/kg IV cada 8 horas. En trauma pediátrico: 15 mg/kg en ataque, 2 mg/kg/h en mantenimiento.'
        }
      },
      administration: { pt: ['A injeção IV rápida (bolus em 1 min) causa hipotensão sistêmica profunda imediata.', 'Pode ser usado via oral, ou a própria ampola embebida numa gaze aplicada direto sobre o dente/ferimento que sangra.'], es: ['La inyección IV rápida (bolo en 1 min) causa hipotensión sistémica profunda inmediata.', 'Puede ser usado vía oral, o la propia ampolla empapada en una gasa aplicada directo sobre el diente/herida que sangra.'] },
      renalAdjustment: { required: true, message: { pt: 'Depurado de forma inalterada pela urina. Em pacientes com ClCr < 50 mL/min, as doses orais e IV devem ser substancialmente reduzidas para evitar acúmulo.', es: 'Depurado de forma inalterada por la orina. En pacientes con ClCr < 50 mL/min, las dosis orales e IV deben ser sustancialmente reducidas para evitar acumulación.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste clínico.', es: 'Sin necesidad de ajuste clínico.' } },
      commonAdverseEffects: { pt: ['Hipotensão (se injeção rápida)', 'Náuseas / Diarreia no uso oral', 'Visão embaçada temporária'], es: ['Hipotensión (si inyección rápida)', 'Náuseas / Diarrea en uso oral', 'Visión borrosa temporal'] },
      dangerousAdverseEffects: { pt: ['Trombose Venosa Profunda / Embolia Pulmonar / AVC Isquêmico (o corpo perde a capacidade natural de dissolver os coágulos errados)', 'Convulsões no pré-operatório (se doses > 2g forem usadas em cirurgia cardíaca)'], es: ['Trombosis Venosa Profunda / Embolia Pulmonar / ACV Isquémico (el cuerpo pierde la capacidad natural de disolver coágulos equivocados)', 'Convulsiones en el preoperatorio (si dosis > 2g se usan en cirugía cardíaca)'] },
      contraindications: {
        absolute: { pt: ['Hemorragia subaracnóidea ativa em AVC (pode causar isquemia cerebral maciça adjacente ao sangramento)', 'Hematuria maciça não diagnosticada no trato urinário superior (o coágulo blindado pelo transamin fechará o ureter do paciente e ele perderá o rim por obstrução)'], es: ['Hemorragia subaracnoidea activa en ACV (puede causar isquemia cerebral masiva adyacente al sangrado)', 'Hematuria masiva no diagnosticada en el tracto urinario superior (el coágulo blindado cerrará el uréter del paciente y perderá el riñón por obstrucción)'] },
        relative: { pt: ['Histórico grave prévio de Trombose ou TEP', 'Uso associado de anticoncepcionais hormonais (risco trombótico muito elevado)'], es: ['Historial grave previo de Trombosis o TEP', 'Uso asociado de anticonceptivos hormonales (riesgo trombótico muy elevado)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'PROTOCOLO CRASH-2 (TRAUMA): O Transamin só salva a vida do paciente baleado/acidentado se o Bolus for infundido nas PRIMEIRAS 3 HORAS do acidente. Fazer a droga após 3 horas PIORA a mortalidade do paciente por sangramento induzido.', es: 'PROTOCOLO CRASH-2 (TRAUMA): El Transamin solo salva la vida del paciente tiroteado/accidentado si el Bolo es infundido en las PRIMERAS 3 HORAS del accidente. Hacer la droga tras 3 horas EMPEORA la mortalidad del paciente por sangrado inducido.' }
      }
    }

  }); /* fim Object.assign HEMATOLOGIA_DRUGS_DB — BUILD 350 Lote 1 (HNF + Enoxaparina + Varfarina + Rivaroxabana + AcidoTranexamico) */

  /* ══════════════════════════════════════════════════════════════════════════
     BUILD 428 — LOTE 2: DOACs Orais Avançados
     Apixabana · Dabigatrana · Edoxabana
     Lacunas identificadas na auditoria BUILD 407-D: constavam em INTERACOES_DB
     e em DRUG_CLASSES mas não tinham objeto clínico próprio em nenhum DB.
     Schema: Object.assign quoted-key (padrão HEMATOLOGIA_DRUGS_DB)
  ══════════════════════════════════════════════════════════════════════════ */
  Object.assign(window.HEMATOLOGIA_DRUGS_DB, {

/* ── APIXABANA ────────────────────────────────────────────────────────── */
    "apixabana": {
      name: { pt: 'Apixabana', es: 'Apixabán' },
      category: 'hematologia',
      class: { pt: 'Anticoagulante Oral Direto / Inibidor Seletivo do Fator Xa (DOAC)', es: 'Anticoagulante Oral Directo / Inhibidor Selectivo del Factor Xa (DOAC)' },
      indications: {
        pt: ['Prevenção de AVC e embolia sistêmica em pacientes com Fibrilação Atrial Não-Valvar', 'Tratamento e prevenção de Trombose Venosa Profunda (TVP) e Embolia Pulmonar (TEP)', 'Profilaxia de TVP em pós-operatório de artroplastia de quadril ou joelho'],
        es: ['Prevención de ACV en Fibrilación Auricular No Valvular', 'Tratamiento y prevención de Trombosis Venosa Profunda (TVP) y Embolismo Pulmonar (TEP)', 'Profilaxis de TVP en postoperatorio de artroplastia de cadera o rodilla']
      },
      commercialNames: { br: ['Eliquis'], ar: ['Eliquis'] },
      presentation: { pt: ['Comprimidos revestidos 2,5 mg e 5 mg'], es: ['Comprimidos recubiertos 2,5 mg y 5 mg'] },
      mechanism: {
        pt: 'O Bloqueador do Ponto de Ignição. A Apixabana liga-se diretamente e de forma altamente seletiva ao sítio ativo do Fator Xa (tanto livre quanto ligado ao coágulo) na cascata de coagulação. Ao neutralizar o Fator Xa, ela impede mecanicamente a conversão da protrombina em trombina. Sem trombina, a malha de fibrina não se fecha e o coágulo não consegue se formar.',
        es: 'Inhibidor selectivo y reversible del sitio activo del Factor Xa. Al unirse al Factor Xa, bloquea la conversión de protrombina en trombina. Sin trombina, se interrumpe la cascada y se frena la formación del coágulo.'
      },
      dose: {
        adult: {
          pt: 'Fibrilação Atrial: 5 mg VO 2x/dia. Reduzir para 2,5 mg 2x/dia se o paciente apresentar pelo menos DOIS dos critérios: Idade ≥ 80 anos, Peso ≤ 60 kg, ou Creatinina sérica ≥ 1,5 mg/dL. TVP/TEP Agudo: 10 mg 2x/dia por 7 dias, depois 5 mg 2x/dia.',
          es: 'Fibrilación Auricular: 5 mg VO 2x/día. Reducir a 2,5 mg 2x/día si cumple DOS criterios: Edad ≥ 80 años, Peso ≤ 60 kg, o Creatinina ≥ 1,5 mg/dL. TVP/TEP Agudo: 10 mg 2x/día × 7 días, luego 5 mg 2x/día.'
        },
        pediatric: {
          pt: 'Não indicado ou estabelecido na pediatria.',
          es: 'No indicado en pediatría.'
        }
      },
      administration: { pt: ['Pode ser tomado com ou sem alimentos. Se esquecer uma dose, tomá-la imediatamente — nunca dobrar na próxima tomada.'], es: ['Puede tomarse con o sin alimentos. Si se olvida una dosis, tomarla de inmediato sin duplicar en la siguiente toma.'] },
      renalAdjustment: { required: true, message: { pt: 'Menor dependência renal da classe (~27%). Contraindicado se ClCr < 15 mL/min ou diálise (bula BR).', es: 'Menor dependencia renal de la clase (~27%). Contraindicado si ClCr < 15 mL/min (Prospecto Latam).' } },
      hepaticAdjustment: { required: true, message: { pt: 'Contraindicado em hepatopatias com coagulopatia clinicamente relevante (Child-Pugh C).', es: 'Contraindicado en insuficiencia hepática grave (Child-Pugh C).' } },
      commonAdverseEffects: { pt: ['Sangramento gengival e epistaxe', 'Hematomas e equimoses espontâneas', 'Náusea leve'], es: ['Sangrado gingival y epistaxis', 'Hematomas y equimosis espontáneas', 'Náusea leve'] },
      dangerousAdverseEffects: { pt: ['Hemorragia gastrointestinal massiva', 'Hemorragia intracraniana (raro, mas potencialmente fatal)', 'Sangramento retroperitoneal'], es: ['Hemorragia gastrointestinal masiva', 'Hemorragia intracraneal', 'Sangrado retroperitoneal'] },
      contraindications: {
        absolute: { pt: ['Sangramento ativo clinicamente significativo', 'Prótese valvar cardíaca mecânica', 'Coagulopatia hepática grave (Child-Pugh C)'], es: ['Sangrado activo clínicamente significativo', 'Prótesis valvular cardíaca mecánica', 'Coagulopatía hepática grave'] },
        relative: { pt: ['Uso concomitante de AINEs (risco hemorrágico gástrico multiplicativo)'], es: ['Uso concomitante de AINEs'] }
      },
      safetyFlags: {
        bleedingRisk: true, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'A REGRA DOS DOIS CRITÉRIOS: Um erro grave de enfermaria é reduzir a dose do Eliquis para 2,5 mg só porque o paciente é idoso. Se ele tiver 85 anos mas pesar 70 kg e tiver creatinina normal, ele DEVE usar 5 mg. Subdosar por medo expõe o paciente a um AVC Isquêmico devastador.', es: 'LA REGLA DE LOS DOS CRITERIOS: Reducir la dosis a 2,5 mg solo por la edad es un error grave. Si tiene 85 años pero pesa 70 kg y tiene creatinina normal, DEBE usar 5 mg. Subdosificarlo lo expone a un ACV Isquémico.' }
      },
      references: { pt: 'ARISTOTLE Trial (NEJM 2011) · AMPLIFY Trial (TVP/TEP) · Diretrizes SBC sobre Anticoagulação.', es: 'ARISTOTLE Trial (NEJM 2011) · AMPLIFY Trial · Directrices SAC.' }
    },

/* ── DABIGATRANA ──────────────────────────────────────────────────────── */
    "dabigatrana": {
      name: { pt: 'Dabigatrana (Etexilato de)', es: 'Dabigatrán (Etexilato de)' },
      category: 'hematologia',
      class: { pt: 'Anticoagulante Oral Direto / Inibidor Direto da Trombina (Fator IIa)', es: 'Anticoagulante Oral Directo / Inhibidor Directo de la Trombina (Factor IIa)' },
      indications: {
        pt: ['Prevenção de AVC e embolia sistêmica em Fibrilação Atrial Não-Valvar', 'Tratamento e prevenção de recidivas de TVP e Embolia Pulmonar'],
        es: ['Prevención de ACV en Fibrilación Auricular No Valvular', 'Tratamiento y prevención de TVP y TEP']
      },
      commercialNames: { br: ['Pradaxa'], ar: ['Pradaxa'] },
      presentation: { pt: ['Cápsulas duras 75 mg, 110 mg e 150 mg'], es: ['Cápsulas duras 75 mg, 110 mg y 150 mg'] },
      mechanism: {
        pt: 'O Bloqueador do Fim da Linha. Diferente da Apixabana, a Dabigatrana é o único DOAC focado no Fator IIa (Trombina). Liga-se diretamente na Trombina livre e ligada ao coágulo, impedindo que ela clive o fibrinogênio em fibrina. Possui antídoto específico de ação imediata: o Idarucizumabe (Praxbind).',
        es: 'Inhibidor directo, potente, competitivo y reversible de la trombina (Factor IIa). Bloquea la conversión de fibrinógeno en fibrina en el paso final de la cascada, impidiendo la solidificación del trombo. Antídoto específico: Idarucizumab (Praxbind).'
      },
      dose: {
        adult: {
          pt: 'Padrão FA: 150 mg VO 2x/dia. Se Idade ≥ 80 anos ou uso concomitante de Verapamil: reduzir para 110 mg 2x/dia.',
          es: 'Estándar FA: 150 mg VO 2x/día. Si Edad ≥ 80 años o uso de Verapamilo: reducir a 110 mg 2x/día.'
        },
        pediatric: {
          pt: 'Uso restrito sob formulações específicas com dose ajustada por peso para TEPT pediátrico.',
          es: 'Uso restringido con dosis ajustada por peso en pediatría.'
        }
      },
      administration: { pt: ['A CÁPSULA NUNCA PODE SER ABERTA OU MASTIGADA. Se aberta, a biodisponibilidade dispara ~75%, aumentando o risco de hemorragia fatal. Manter sempre no frasco original (absorve muita umidade).'], es: ['LA CÁPSULA NUNCA DEBE SER ABIERTA O MASTICADA. Si se abre, la biodisponibilidad sube ~75%, elevando el riesgo de hemorragia fatal. Conservar en el frasco original.'] },
      renalAdjustment: { required: true, message: { pt: 'ALTAMENTE DEPENDENTE DO RIM (~80%). ClCr 30–50 mL/min: usar com cautela (considerar 110 mg 2x/dia se risco hemorrágico elevado). ClCr < 30 mL/min: ABSOLUTAMENTE CONTRAINDICADO.', es: 'ALTAMENTE DEPENDIENTE DEL RIÑÓN (~80%). ClCr 30–50: usar con cautela. ClCr < 30 mL/min: ABSOLUTAMENTE CONTRAINDICADO.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste se testes de função hepática normais.', es: 'Sin necesidad de ajuste si la función es normal.' } },
      commonAdverseEffects: { pt: ['DISPEPSIA SEVERA e azia — a cápsula contém núcleo de ácido tartárico (~10% dos usuários)', 'Gastrite', 'Equimoses e manchas roxas na pele'], es: ['DISPEPSIA SEVERA y acidez — la cápsula contiene ácido tartárico (~10% de usuarios)', 'Gastritis', 'Equimosis'] },
      dangerousAdverseEffects: { pt: ['Hemorragia digestiva alta grave', 'Hemorragia alveolar pulmonar (raro)'], es: ['Hemorragia digestiva alta grave', 'Hemorragia alveolar pulmonar (raro)'] },
      contraindications: {
        absolute: { pt: ['Insuficiência renal grave (ClCr < 30 mL/min)', 'Próteses valvares mecânicas (Estudo RE-ALIGN: causa infarto/trombose de válvula)', 'Sangramento ativo'], es: ['Insuficiencia renal grave (ClCr < 30)', 'Prótesis valvulares mecánicas (Estudio RE-ALIGN)', 'Sangrado activo'] },
        relative: { pt: ['Histórico de úlcera péptica recorrente ou esofagite erosiva'], es: ['Historial de úlcera péptica o esofagitis'] }
      },
      safetyFlags: {
        bleedingRisk: true, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'A ARMADILHA DO RIM PARADO: Como 80% da Dabigatrana sai pelo rim, se o paciente idoso desidratar ou tiver Insuficiência Renal Aguda, o remédio acumula de forma assustadora. Qualquer corte sangrará por horas. O antídoto de resgate hospitalar é o Praxbind (Idarucizumabe) IV.', es: 'LA TRAMPA DEL RIÑÓN PARADO: Como el 80% se elimina por vía renal, si el paciente se deshidrata o sufre falla renal aguda, el fármaco se acumula masivamente. El antídoto de rescate es Praxbind (Idarucizumab) IV.' }
      },
      references: { pt: 'RE-LY Trial (NEJM 2009) · RE-ALIGN Trial (Válvulas mecânicas — NEJM 2013) · FDA Prescribing Information Pradaxa.', es: 'RE-LY Trial (NEJM 2009) · RE-ALIGN Trial (NEJM 2013) · FDA Prescribing Info.' }
    },

/* ── EDOXABANA ────────────────────────────────────────────────────────── */
    "edoxabana": {
      name: { pt: 'Edoxabana (Tosilato de)', es: 'Edoxabán (Tosilato de)' },
      category: 'hematologia',
      class: { pt: 'Anticoagulante Oral Direto / Inibidor do Fator Xa (DOAC Monodiário)', es: 'Anticoagulante Oral Directo / Inhibidor del Factor Xa (DOAC Monodiario)' },
      indications: {
        pt: ['Prevenção de AVC e embolia sistêmica em Fibrilação Atrial Não-Valvar', 'Tratamento e prevenção de TVP e Embolia Pulmonar após curso inicial de anticoagulante injetável'],
        es: ['Prevención de ACV en Fibrilación Auricular No Valvular', 'Tratamiento de TVP y TEP tras anticoagulación parenteral inicial']
      },
      commercialNames: { br: ['Lixiana'], ar: ['Lixiana'] },
      presentation: { pt: ['Comprimidos revestidos 15 mg, 30 mg e 60 mg'], es: ['Comprimidos recubiertos 15 mg, 30 mg y 60 mg'] },
      mechanism: {
        pt: 'Inibidor altamente seletivo, direto e reversível do Fator Xa. Bloqueia a geração de trombina de forma idêntica à rivaroxabana e apixabana. Vantagem de engenharia farmacêutica: estabilidade molecular que permite dose única diária com baixa flutuação plasmática.',
        es: 'Inhibidor directo y altamente selectivo del Factor Xa. Su unión frena la cascada de coagulación de manera reversible. Ventaja molecular: permite una única toma diaria con bajas fluctuaciones de nivel sérico.'
      },
      dose: {
        adult: {
          pt: 'Dose Padrão: 60 mg VO 1x/dia. Reduzir para 30 mg 1x/dia se: ClCr 15–50 mL/min, Peso ≤ 60 kg, ou uso de inibidores potentes da P-gp (ciclosporina, eritromicina).',
          es: 'Dosis Estándar: 60 mg VO 1x/día. Reducir a 30 mg 1x/día si: ClCr 15–50 mL/min, Peso ≤ 60 kg, o uso de inhibidores de P-gp.'
        },
        pediatric: {
          pt: 'Não indicado.',
          es: 'No indicado.'
        }
      },
      administration: { pt: ['Pode ser tomado com ou sem alimentos. Ingerir rigorosamente no mesmo horário todos os dias para não falhar a janela de 24h.'], es: ['Puede tomarse con o sin alimentos. Ingerir estrictamente en el mismo horario cada día.'] },
      renalAdjustment: { required: true, message: { pt: 'O PARADOXO RENAL: ClCr 15–50: reduzir para 30 mg. ClCr > 95 mL/min: CONTRAINDICADO em FA (rim elimina tão rápido que o nível cai abaixo da janela terapêutica e o paciente fica desprotegido — FDA Black Box).', es: 'EL PARADOJO RENAL: ClCr 15–50: reducir a 30 mg. ClCr > 95 mL/min: CONTRAINDICADO en FA (el riñón lo elimina tan rápido que el nivel cae y el paciente queda desprotegido — FDA Black Box).' } },
      hepaticAdjustment: { required: true, message: { pt: 'Contraindicado na insuficiência hepática grave (Child-Pugh C).', es: 'Contraindicado en insuficiencia hepática grave (Child-Pugh C).' } },
      commonAdverseEffects: { pt: ['Sangramento cutâneo e mucoso', 'Aumento transitório de enzimas hepáticas (TGO/TGP)', 'Anemia por perdas crônicas'], es: ['Sangrado cutáneo y mucoso', 'Aumento transitorio de transaminasas', 'Anemia'] },
      dangerousAdverseEffects: { pt: ['Hemorragia intracraniana', 'Sangramento retroperitoneal severo'], es: ['Hemorragia intracraneal', 'Sangrado retroperitoneal severo'] },
      contraindications: {
        absolute: { pt: ['ClCr > 95 mL/min em pacientes com Fibrilação Atrial (Alerta de Bula FDA)', 'Sangramento ativo', 'Prótese valvar mecânica'], es: ['ClCr > 95 mL/min en pacientes con FA (Alerta de Prospecto FDA)', 'Sangrado activo', 'Prótesis valvular mecánica'] },
        relative: { pt: ['Uso associado crônico de AAS ou clopidogrel (tripla terapia — restrito a indicações específicas)'], es: ['Uso asociado crónico de AAS o clopidogrel'] }
      },
      safetyFlags: {
        bleedingRisk: true, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O PERIGO DO RIM SUPER-SAUDÁVEL: O Edoxabana tem um dos avisos mais contraintuitivos da medicina. Se o rim do paciente for "bom demais" (ClCr > 95 mL/min, comum em idosos ativos), o rim limpa o remédio tão rápido que o paciente fica desprotegido. O estudo ENGAGE mostrou que esses pacientes sofriam mais AVC com Edoxabana do que com Varfarina. Use outro DOAC nesse caso.', es: 'EL PELIGRO DEL RIÑÓN SUPER SANO: Si el ClCr > 95 mL/min, el riñón elimina el Edoxabán tan rápido que el nivel cae y el paciente queda desprotegido. El estudio ENGAGE demostró que estos pacientes sufrían más ACV con Edoxabán que con Warfarina. Use otro DOAC.' }
      },
      references: { pt: 'ENGAGE AF-TIMI 48 Trial (NEJM 2013) · Hokusai-VTE Trial · FDA Black Box Warning Lixiana.', es: 'ENGAGE AF-TIMI 48 Trial (NEJM 2013) · Hokusai-VTE Trial · FDA Black Box Warning.' }
    }

  }); /* fim Object.assign HEMATOLOGIA_DRUGS_DB — BUILD 428 Lote 2 (apixabana + dabigatrana + edoxabana) */

  /* BUILD 431 — Betrixabana (DOAC Ultra Longa Duração — Profilaxia Estendida) */
  Object.assign(window.HEMATOLOGIA_DRUGS_DB, {

    "betrixabana": {
      name: { pt: 'Betrixabana', es: 'Betrixabán' },
      category: 'hematologia',
      class: { pt: 'Anticoagulante Oral Direto / Inibidor do Fator Xa de Ultra Longa Duração', es: 'Anticoagulante Oral Directo / Inhibidor del Factor Xa de Ultra Larga Duración' },
      indications: {
        pt: ['Profilaxia estendida de Tromboembolismo Venoso (TVP/TEP) em pacientes adultos hospitalizados por doença médica aguda com alto risco de trombose e imobilização prolongada'],
        es: ['Profilaxis extendida de Tromboembolismo Venoso (TVP/TEP) en pacientes hospitalizados por enfermedad médica aguda con inmovilización prolongada']
      },
      commercialNames: { br: ['Bevyxxa (Importação hospitalar)'], ar: ['Bevyxxa'] },
      presentation: { pt: ['Cápsulas duras 40 mg e 80 mg'], es: ['Cápsulas duras 40 mg y 80 mg'] },
      mechanism: {
        pt: 'O Protetor de Longo Prazo da UTI. Inibe diretamente o Fator Xa ativo da cascata de coagulação. Possui meia-vida de eliminação de 37 horas e baixíssimo clearance renal (apenas 6% excretado pelos rins), com eliminação predominantemente biliar/fecal. Isso permite proteção antitrombótica estendida por 35-42 dias após a alta hospitalar, sem necessidade das dolorosas injeções diárias de enoxaparina.',
        es: 'Inhibidor directo del Factor Xa. Posee vida media plasmática de ~37 horas y mínima dependencia de eliminación renal (solo 6% renal), con excreción predominantemente biliar/fecal. Permite mantener anticoagulación profiláctica ambulatoria sostenida por un mes tras el alta hospitalaria.'
      },
      dose: {
        adult: {
          pt: 'Fase de ataque hospitalar: 160 mg via oral em dose única no primeiro dia. Manutenção: 80 mg via oral, UMA VEZ ao dia, por 35 a 42 dias de curso total.',
          es: 'Dosis de Carga: 160 mg vía oral el día 1. Mantenimiento: 80 mg vía oral, UNA VEZ al día, por 35 a 42 días.'
        },
        pediatric: {
          pt: 'Não indicado.',
          es: 'No indicado.'
        }
      },
      administration: { pt: ['DEVE ser tomado rigorosamente JUNTO COM ALIMENTOS. Tomar em jejum altera a taxa de absorção de forma imprevisível, comprometendo a eficácia antitrombótica.'], es: ['DEBE tomarse estrictamente CON ALIMENTOS. Tomarlo en ayunas altera la absorción de forma impredecible.'] },
      renalAdjustment: { required: true, message: { pt: 'ClCr 15-30 mL/min: reduzir ataque para 80 mg e manutenção para 40 mg ao dia. ClCr < 15 mL/min ou diálise: contraindicada.', es: 'ClCr 15-30 mL/min: carga 80 mg y mantenimiento 40 mg/día. ClCr < 15 mL/min o diálisis: contraindicada.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Evitar em insuficiência hepática moderada a grave (Child-Pugh B/C) pelo risco hemorrágico elevado e farmacocinética imprevisível.', es: 'Evitar en insuficiencia hepática moderada o severa (Child-Pugh B/C).' } },
      commonAdverseEffects: { pt: ['Sangramentos menores (gengiva, pequenos cortes, hematomas)', 'Anemia por microperdas crônicas', 'Náusea'], es: ['Sangrados menores (encías, cortes, hematomas)', 'Anemia por micropérdidas', 'Náusea'] },
      dangerousAdverseEffects: { pt: ['Hemorragia retroperitoneal catastrófica', 'HEMORRAGIA ESPINHAL / EPIDURAL — Alerta Caixa Preta FDA (punção lombar ou anestesia neuroaxial)', 'Hemorragia intracraniana'], es: ['Hemorragia retroperitoneal catastrófica', 'HEMORRAGIA ESPINAL / EPIDURAL — Caja Negra FDA (punción lumbar o anestesia neuroaxial)', 'Hemorragia intracraneal'] },
      contraindications: {
        absolute: { pt: ['Sangramento ativo patológico severo', 'Uso concomitante de outros anticoagulantes plenos ou heparinas não fracionadas'], es: ['Sangrado activo patológico severo', 'Uso concomitante de otros anticoagulantes o heparinas'] },
        relative: { pt: ['Uso de inibidores potentes da P-gp (ex: Amiodarona, Verapamil) → exige redução de dose para a metade (40 mg manutenção)', 'Procedimentos neuroaxiais (raqui/epidural): suspender com antecedência adequada'] }
      },
      safetyFlags: {
        bleedingRisk: true, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A CAIXA PRETA DA RAQUIANESTESIA: Se o paciente em uso de betrixabana precisar de anestesia espinhal (Raqui ou Epidural) ou punção lombar, deve haver suspensão com alta antecedência. Caso contrário, forma-se um hematoma gigante dentro do canal medular que esmaga os nervos, levando à paraplegia permanente. Sem antídoto específico disponível (Andexaneta Alfa tem uso limitado neste contexto).', es: 'CAJA NEGRA DEL HEMATOMA ESPINAL: Si el paciente requiere anestesia espinal o punción lumbar, suspender con alta antelación. De lo contrario, se forma un hematoma epidural que comprime la médula, causando paraplejía permanente. Sin antídoto específico disponible.' }
      },
      references: {
        pt: 'APEX Trial (NEJM 2016 — Extended Thromboprophylaxis with Betrixaban in Acutely Ill Medical Patients); FDA Medical Review Data Bevyxxa; FDA Black Box Warning.',
        es: 'APEX Trial (NEJM 2016); FDA Medical Review Data (Bevyxxa); FDA Black Box Warning.'
      }
    }

  }); /* fim Object.assign HEMATOLOGIA_DRUGS_DB — BUILD 431 (betrixabana — DOAC Ultra Longa Duração / Profilaxia Estendida APEX Trial) */

  /* BUILD 432 — Anticoagulantes Injetáveis Essenciais + Reversor (Fondaparinux · Dalteparina · Vitamina K1) */
  Object.assign(window.HEMATOLOGIA_DRUGS_DB, {

    /* ── FONDAPARINUX ──────────────────────────────────────────────── */
    "fondaparinux": {
      name: { pt: 'Fondaparinux Sódico', es: 'Fondaparinux Sódico' },
      category: 'hematologia',
      class: { pt: 'Anticoagulante Injetável / Inibidor Sintético e Seletivo do Fator Xa', es: 'Anticoagulante Inyectable / Inhibidor Sintético y Selectivo del Factor Xa' },
      indications: {
        pt: ['Tratamento de Angina Instável e Infarto Agudo do Miocárdio sem supra de ST (Estratégia padrão da diretriz europeia — OASIS-5)', 'Prevenção e tratamento de Trombose Venosa Profunda (TVP) e Embolia Pulmonar (TEP) em cirurgias ortopédicas ou abdominais', 'Anticoagulação de escolha em pacientes com histórico ou suspeita de HIT (Trombocitopenia Induzida por Heparina)'],
        es: ['Tratamiento de Angina Inestable e Infarto sin supra de ST (OASIS-5)', 'Prevención y tratamiento de TVP y TEP en cirugías mayores', 'Anticoagulación de elección ante sospecha o historial de HIT']
      },
      commercialNames: { br: ['Arixtra'], ar: ['Arixtra'] },
      presentation: { pt: ['Seringas preenchidas Subcutâneas: 2,5 mg/0,5 mL (profilaxia); 7,5 mg/0,6 mL (tratamento)'], es: ['Jeringas prellenadas SC: 2,5 mg (profilaxis); 7,5 mg (tratamiento)'] },
      mechanism: {
        pt: 'O Pentassacarídeo Cirúrgico. É um oligossacarídeo puramente sintético que imita a sequência exata de 5 açúcares que a heparina usa para se ligar à Antitrombina III. Ao se acoplar nela, multiplica em ~300 vezes a velocidade com que a Antitrombina caça e destrói o Fator Xa. Por ser sintético e minúsculo, NÃO se liga ao Fator Plaquetário 4 (PF4) — sendo incapaz de desencadear HIT.',
        es: 'Pentasacárido sintético que se une específicamente a la antitrombina III, potenciando su capacidad de neutralizar al Factor Xa en ~300 veces. Por ser completamente sintético, NO se une al Factor Plaquetario 4 (PF4) y por lo tanto prácticamente no induce HIT.'
      },
      dose: {
        adult: {
          pt: 'Profilaxia: 2,5 mg via Subcutânea, UMA VEZ ao dia. Tratamento (IAM-SSST / TVP): 7,5 mg SC uma vez ao dia (Ajuste: 5 mg se peso < 50 kg; 10 mg se peso > 100 kg).',
          es: 'Profilaxis: 2,5 mg SC UNA VEZ al día. Tratamiento: 7,5 mg SC una vez al día (5 mg si < 50 kg; 10 mg si > 100 kg).'
        },
        pediatric: {
          pt: 'Off-label em regime hospitalar especializado: 0,1 mg/kg SC uma vez ao dia.',
          es: 'Off-label: 0,1 mg/kg SC una vez al día (uso hospitalario especializado).'
        }
      },
      administration: { pt: ['Exclusivamente via Subcutânea profunda no abdômen (alternando lados esquerdo e direito). NUNCA administrar por via Intramuscular — risco de hematoma gigante.'], es: ['Exclusivamente vía Subcutánea profunda abdominal. NUNCA intramuscular — riesgo de hematoma gigante.'] },
      renalAdjustment: { required: true, message: { pt: 'CRÍTICO — eliminação 100% renal. ClCr 30-50 mL/min: cautela extrema ou reduzir dose profilática. ClCr < 30 mL/min: ABSOLUTAMENTE CONTRAINDICADO por risco de hemorragia fatal.', es: 'CRÍTICO — eliminación 100% renal. ClCr 30-50: precaución extrema. ClCr < 30 mL/min: ABSOLUTAMENTE CONTRAINDICADO por riesgo de hemorragia fatal.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste se coagulograma basal estável.', es: 'Sin necesidad de ajuste si coagulograma basal estable.' } },
      commonAdverseEffects: { pt: ['Sangramento e dor no local da injeção', 'Anemia por perdas ocultas', 'Insônia e febre transitória'], es: ['Sangrado e inflamación en sitio de inyección', 'Anemia', 'Insomnio y fiebre transitoria'] },
      dangerousAdverseEffects: { pt: ['Hemorragia retroperitoneal catastrófica', 'Hematoma espinhal/epidural pós-punção → Paraplegia permanente', 'Trombocitopenia paradoxal (raríssimo)'], es: ['Hemorragia retroperitoneal', 'Hematoma espinal/epidural pospunción → Paraplejía permanente'] },
      contraindications: {
        absolute: { pt: ['Insuficiência renal grave (ClCr < 30 mL/min)', 'Sangramento ativo anatomicamente relevante', 'Endocardite bacteriana aguda'], es: ['Insuficiencia renal grave (ClCr < 30 mL/min)', 'Sangrado activo relevante', 'Endocarditis bacteriana aguda'] },
        relative: { pt: ['Uso associado a antiplaquetários de alta potência; idosos < 50 kg'] }
      },
      safetyFlags: {
        bleedingRisk: true, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A ESCOLHA DO INFARTO SEGURO (OASIS-5): O Fondaparinux provou no mega-estudo OASIS-5 ser o anticoagulante mais seguro para o infarto sem supra de ST — causa METADE dos sangramentos da Enoxaparina, reduzindo a mortalidade global intra-hospitalar. ATENÇÃO: se o doente for para cateterismo, o cardiologista precisa adicionar um bolus de Heparina Comum para evitar trombose do cateter (síndrome do "cateter seco").', es: 'EL RELEVO DEL INFARTO (OASIS-5): Demostró causar la MITAD de los sangrados que la Enoxaparina en infartos sin supra de ST. ATENCIÓN: si va a cateterismo, se debe sumar un bolo de Heparina Común para evitar trombosis del catéter.' }
      },
      references: {
        pt: 'OASIS-5 Trial (NEJM 2006); MATISSE Trials; Diretrizes de SCA da ESC 2023.',
        es: 'OASIS-5 Trial (NEJM 2006); MATISSE Trials; Directrices ESC 2023.'
      }
    },

    /* ── DALTEPARINA ───────────────────────────────────────────────── */
    "dalteparina": {
      name: { pt: 'Dalteparina Sódica', es: 'Dalteparina Sódica' },
      category: 'hematologia',
      class: { pt: 'Heparina de Baixo Peso Molecular (HBPM)', es: 'Heparina de Bajo Peso Molecular (HBPM)' },
      indications: {
        pt: ['Tratamento de longo prazo de Tromboembolismo Venoso (TVP/TEP) em pacientes com CÂNCER ATIVO — padrão-ouro da literatura (Estudo CLOT)', 'Profilaxia de TVP em pacientes cirúrgicos ou graves imobilizados', 'Tratamento da Síndrome Coronariana Aguda'],
        es: ['Tratamiento de TVP/TEP en pacientes con CÁNCER ACTIVO — estándar de elección (Estudio CLOT, NEJM 2003)', 'Profilaxis de TVP en pacientes quirúrgicos', 'Síndrome Coronario Agudo']
      },
      commercialNames: { br: ['Fragmin'], ar: ['Fragmin'] },
      presentation: { pt: ['Seringas preenchidas SC: 2.500 UI/0,2 mL; 5.000 UI/0,2 mL; 10.000 UI/1 mL; 12.500 UI/0,5 mL; 18.000 UI/0,72 mL'], es: ['Jeringas prellenadas SC: 2.500 UI; 5.000 UI; 10.000 UI; 12.500 UI; 18.000 UI'] },
      mechanism: {
        pt: 'A Heparina Oncológica. Obtida por despolimerização da heparina suína. Liga-se à Antitrombina III, acelerando fortemente a inativação do Fator Xa e, em menor grau, do Fator IIa (trombina), na proporção anti-Xa/anti-IIa de ~4:1. Altamente resistente à destruição celular e com efeito previsível pelo peso corporal. O seu mecanismo antimetastático direto nas células tumorais (inibição da selectina P) é investigado como vantagem extra no paciente oncológico.',
        es: 'HBPM con relación anti-Xa/anti-IIa ~4:1. Se une a la antitrombina III para inhibir los factores clave de la coagulación. Su mecanismo antitrombótico predecible por peso corporal y los posibles efectos antimetastáticos directos (inhibición de la selectina P) son ventajas clave en el paciente oncológico.'
      },
      dose: {
        adult: {
          pt: 'Trombose no Câncer (Protocolo CLOT): 200 UI/kg via SC UMA VEZ ao dia no 1º mês (teto: 18.000 UI/dia). Meses 2 a 6: 150 UI/kg/dia. Profilaxia cirúrgica: 2.500–5.000 UI SC ao dia.',
          es: 'Trombosis en Cáncer (Protocolo CLOT): 200 UI/kg SC UNA VEZ al día el mes 1 (máx. 18.000 UI). Meses 2 a 6: 150 UI/kg/día. Profilaxis: 2.500–5.000 UI/día.'
        },
        pediatric: {
          pt: 'TVP pediátrica off-label: 100–150 UI/kg SC a cada 12 horas com monitoramento obrigatório de atividade anti-Xa.',
          es: 'TVP pediátrica: 100–150 UI/kg SC cada 12 horas con monitoreo de anti-Xa.'
        }
      },
      administration: { pt: ['Via Subcutânea profunda na cintura abdominal. A seringa preenchida possui uma bolha de ar protetora que NÃO deve ser expelida antes da aplicação — ela empurra toda a dose para dentro.'], es: ['Vía Subcutánea profunda abdominal. La jeringa prellenada tiene una burbuja de aire protectora que NO debe expulsarse antes de pinchar — empuja toda la dosis hacia adentro.'] },
      renalAdjustment: { required: true, message: { pt: 'ClCr < 30 mL/min: alto risco de acúmulo. Monitorar atividade anti-Xa obrigatoriamente ou migrar para Heparina Não-Fracionada IV (controlada por TTPa).', es: 'ClCr < 30 mL/min: alto riesgo de acumulación. Monitorear anti-Xa u optar por Heparina No Fraccionada IV (controlada por TTPa).' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste estrito de dose.', es: 'Sin necesidad de ajuste estricto.' } },
      commonAdverseEffects: { pt: ['Hematomas subcutâneos e dor local na barriga', 'Elevação transitória e reversível de transaminases (TGO/TGP)', 'Alopecia leve transitória'], es: ['Hematomas subcutáneos y dolor local', 'Elevación transitoria de transaminasas', 'Alopecia leve transitoria'] },
      dangerousAdverseEffects: { pt: ['TROMBOCITOPENIA INDUZIDA POR HEPARINA (HIT) — queda fulminante de plaquetas com trombose paradoxal interna severa e embolia (contraintuitivo: plaquetas caem MAS o sangue coagula)', 'Hemorragia maior visceral'], es: ['TROMBOCITOPENIA INDUCIDA POR HEPARINA (HIT) — caída fulminante de plaquetas con trombosis paradójica severa', 'Hemorragia mayor visceral'] },
      contraindications: {
        absolute: { pt: ['Histórico confirmado de HIT mediada por anticorpos anti-PF4', 'Sangramento ativo volumoso', 'Alergia grave a componentes suínos'], es: ['Antecedente confirmado de HIT', 'Sangrado activo volumoso', 'Alergia a componentes porcinos'] },
        relative: { pt: ['Plaquetopenia basal < 50.000/mm³; hipertensão arterial descontrolada severa'] }
      },
      safetyFlags: {
        bleedingRisk: true, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'O PADRÃO-OURO DO PACIENTE COM CÂNCER (ESTUDO CLOT): O estudo histórico CLOT (NEJM 2003) provou que a Dalteparina é infinitamente superior à Varfarina oral para tratar trombose em pacientes com tumores sólidos. A Varfarina falha continuamente pelas náuseas e pela disfagia causada pela quimioterapia (impossível manter o INR estável). A Dalteparina injetável, com dose baseada em peso, estabiliza a anticoagulação por 6 meses sem os caprichos do INR.', es: 'EL ESTÁNDAR DEL PACIENTE CON CÁNCER (ESTUDIO CLOT): Demostró ser ampliamente superior a la Warfarina oral en trombosis oncológica — la quimioterapia causa náuseas e imposibilita mantener el INR estable. La Dalteparina SC con dosis por peso estabiliza la anticoagulación 6 meses sin las oscilaciones del INR.' }
      },
      references: {
        pt: 'CLOT Trial (NEJM 2003 — Lee AY et al.); FRISC Trial (SCA); ASH Guidelines Trombose e Câncer 2021.',
        es: 'CLOT Trial (NEJM 2003 — Lee AY et al.); FRISC Trial; Guías ASH Trombosis y Cáncer 2021.'
      }
    },

    /* ── VITAMINA K1 (FITOMENADIONA) ───────────────────────────────── */
    "vitamina_k": {
      name: { pt: 'Vitamina K1 (Fitomenadiona)', es: 'Vitamina K1 (Fitomenadiona)' },
      category: 'hematologia',
      class: { pt: 'Fator de Coagulação Lipossolúvel / Antídoto dos Anticoagulantes Cumarínicos / Profilaxia Hemorrágica Neonatal', es: 'Factor de Coagulación Liposoluble / Antídoto de Anticoagulantes Cumarínicos / Profilaxis Hemorrágica Neonatal' },
      indications: {
        pt: ['Reversão de superdosagem de anticoagulantes cumarínicos (Varfarina / Acenocumarol) com ou sem sangramento ativo', 'Prevenção e tratamento da Doença Hemorrágica do Recém-Nascido (profilaxia obrigatória em sala de parto)', 'Hipoprotrombinemia por desnutrição severa, síndromes de má-absorção de gordura ou bloqueio biliar'],
        es: ['Reversión de sobredosis de anticoagulantes cumarínicos (Warfarina / Acenocumarol) con o sin sangrado activo', 'Prevención de la Enfermedad Hemorrágica del Recién Nacido (obligatoria en sala de parto)', 'Hipoprotrombinemia por desnutrición o malabsorción de grasas']
      },
      commercialNames: { br: ['Kanakion', 'Kavit'], ar: ['Konakion'] },
      presentation: { pt: ['Ampolas injetáveis: 10 mg/1 mL (uso adulto); 1 mg/0,1 mL (uso pediátrico). Comprimidos 10 mg (via oral)'], es: ['Ampollas inyectables: 10 mg (adulto); 1 mg (pediátrico). Comprimidos 10 mg (vía oral)'] },
      mechanism: {
        pt: 'A Forja dos Fatores de Sangue. A Vitamina K1 entra no fígado e atua como cofator essencial para a enzima gama-glutamil carboxilase. Esta enzima realiza a carboxilação (ativação estrutural) dos fatores de coagulação vitamina K-dependentes: II (Protrombina), VII, IX e X, além das proteínas C e S anticoagulantes. A Varfarina age bloqueando a reciclagem da vitamina K. Ao administrar a Vitamina K1, o fígado supera esse bloqueio competitivamente e retoma a fabricação dos fatores travados.',
        es: 'Cofactor esencial para la gama-carboxilación (activación) de los factores de coagulación hepáticos: II, VII, IX y X (y proteínas C y S). La Warfarina bloquea el reciclaje de la Vitamina K. La Fitomenadiona administrada supera ese bloqueo de forma competitiva, restaurando la síntesis de los factores detenidos.'
      },
      dose: {
        adult: {
          pt: 'Superdosagem de Varfarina SEM sangramento (RNI > 9): 1–2,5 mg VIA ORAL. Sangramento ativo grave / Emergência hemorrágica: 5–10 mg via INTRAVENOSA LENTA (diluída, infusão de 20–30 min) + Complexo Protrombínico 4 fatores IV para reversão imediata.',
          es: 'Sobredosis de Warfarina SIN sangrado (RNI > 9): 1–2,5 mg VÍA ORAL. Sangrado activo grave: 5–10 mg vía INTRAVENOSA LENTA (diluida, infusión 20–30 min) + Complejo Protrombínico para reversión inmediata.'
        },
        pediatric: {
          pt: 'Profilaxia neonatal obrigatória em sala de parto: 1 mg via INTRAMUSCULAR em dose única nas primeiras 6 horas de vida (previne hemorragia cerebral neonatal — salva a vida do bebê).',
          es: 'Profilaxis neonatal obligatoria: 1 mg vía INTRAMUSCULAR dosis única en las primeras 6 horas de vida (previene hemorragia cerebral neonatal).'
        }
      },
      administration: { pt: ['VIA IV EXIGE CUIDADO MÁXIMO: Diluir em SG5% ou SF 0,9% e infundir em no mínimo 20–30 minutos — NUNCA em bolus rápido (risco de Choque Anafilactoide letal pelos excipientes oleosos). A ampola pode ser administrada VIA ORAL (bebida com suco) — opção segura e eficaz para superdosagens assintomáticas.'], es: ['VÍA IV EXIGE CUIDADO MÁXIMO: Diluir y administrar en mínimo 20–30 minutos. ¡NUNCA en bolo rápido — riesgo de Choque Anafilactoide letal! La ampolla puede administrarse VÍA ORAL (bebida con jugo) — opción segura en sobredosis asintomáticas.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Em cirrose hepática terminal ou falência hepatocelular total, a Vitamina K é INÚTIL — as células hepáticas estão mortas e não conseguem fabricar os fatores mesmo com a vitamina presente. Tratar com Plasma Fresco Congelado ou Complexo Protrombínico diretamente.', es: 'En cirrosis terminal o insuficiencia hepática fulminante, la Vitamina K es INÚTIL — el hígado destruido no puede fabricar los factores. Tratar con Plasma Fresco Congelado o Complejo Protrombínico directamente.' } },
      commonAdverseEffects: { pt: ['Dor, rubor e irritação local na aplicação IM', 'Sabor estranho transitório na boca', 'Rubor facial e sensação de calor durante a infusão IV'], es: ['Dolor e irritación local IM', 'Sabor extraño transitorio', 'Rubor facial y calor durante la infusión IV'] },
      dangerousAdverseEffects: { pt: ['CHOQUE ANAFILACTOIDE IMEDIATO LETAL se injetado rapidamente na veia (pelos excipientes oleosos — lecitina e sais biliares da ampola)', 'Hiperbilirrubinemia / Icterícia nuclear em prematuros (se exceder doses)'], es: ['CHOQUE ANAFILACTOIDE INMEDIATO LETAL si se inyecta rápido por vía IV', 'Hiperbilirrubinemia en prematuros (si se exceden las dosis)'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade confirmada à fitomenadiona ou aos excipientes oleosos da ampola'], es: ['Hipersensibilidad confirmada a la fitomenadiona o excipientes'] },
        relative: { pt: ['Pacientes com próteses valvares mecânicas em superdosagem leve de Varfarina — evitar doses IV altas para não causar rebote trombótico severo e risco de trombose da válvula'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O ERRO DO CHOQUE DA INJEÇÃO RÁPIDA: As ampolas de Kanakion usam veículo oleoso pesado (lecitina + sais biliares). Se injetada pura e rápida na veia, ocorre reação anafilactoide fulminante com parada cardíaca. Regra de ouro: injete SEMPRE de forma lenta e diluída — ou dê para o paciente BEBER a ampola (via oral), que funciona muito bem e é 100% seguro. CIRROSE: Vitamina K NÃO funciona em hepática grave — o fígado morto não fabrica fatores mesmo com a vitamina presente.', es: 'EL ERROR DEL CHOQUE POR INYECCIÓN RÁPIDA: Las ampollas de Konakion usan vehículo oleoso pesado. Inyectada pura y rápida genera choque anafilactoide con paro cardíaco. Regla de oro: infundir siempre lento y diluido — o hacer que el paciente BEBA la ampolla (vía oral, 100% seguro). CIRROSIS: Vitamina K NO funciona en falla hepática grave — el hígado muerto no fabrica factores.' }
      },
      references: {
        pt: 'CHEST Antithrombotic Guidelines 2022; Protocolo de Reversão de Anticoagulação da SBH (Sociedade Brasileira de Hematologia); Lexicomp Pharmacology Guide; OMS — Handbook on Injectables.',
        es: 'CHEST Antithrombotic Guidelines 2022; Guías SAH (Sociedad Argentina de Hematología); Lexicomp Pharmacology Guide.'
      }
    }

  }); /* fim Object.assign HEMATOLOGIA_DRUGS_DB — BUILD 432 (fondaparinux + dalteparina + vitamina_k / Fitomenadiona) */

  /* ── BUILD 434 — Pilares da Síntese de Hemácias: Ácido Fólico + Vitamina B12 ── */
  if (typeof window.HEMATOLOGIA_DRUGS_DB !== 'object' || window.HEMATOLOGIA_DRUGS_DB === null) return;
  Object.assign(window.HEMATOLOGIA_DRUGS_DB, {

/* ── ÁCIDO FÓLICO ────────────────────────────────────────────────────── */
    "acido_folico": {
      name: { pt: 'Ácido Fólico (Vitamina B9)', es: 'Ácido Fólico (Vitamina B9)' },
      category: 'hematologia',
      class: { pt: 'Fator Vitamínico Hidrossolúvel / Essencial para Síntese de DNA e Divisão Celular', es: 'Factor Vitamínico Hidrosoluble / Esencial para la Síntesis de ADN y División Celular' },
      indications: {
        pt: ['Prevenção de Defeitos do Tubo Neural (anencefalia, espinha bífida) durante o planejamento gestacional e primeiro trimestre', 'Tratamento de Anemia Megaloblástica por deficiência de folato', 'Profilaxia de toxicidade celular hematológica em pacientes em uso crônico de Metotrexato'],
        es: ['Prevención de Defectos del Tubo Neural (anencefalia, espina bífida) durante la planificación gestacional y primer trimestre', 'Tratamiento de Anemia Megaloblástica por deficiencia de folato', 'Profilaxis de toxicidad hematológica por Metotrexato crónico']
      },
      commercialNames: { br: ['Endofolin', 'Afolic', 'Materfol', 'Ácido Fólico Comprimido EMS'], ar: ['Acifol', 'Anemidox (Assoc)', 'Folamin'] },
      presentation: { pt: ['Comprimidos 0,4 mg (400 mcg), 1 mg, 2 mg e 5 mg', 'Gotas orais 0,2 mg/mL'], es: ['Comprimidos 0,4 mg, 1 mg y 5 mg', 'Gotas orales 0,2 mg/mL'] },
      mechanism: {
        pt: 'O Tecelão do DNA. É convertido no corpo em tetrahidrofolato (THF), cofator essencial que doa grupos metila para fabricar purinas e timidilato — os blocos que constroem as bases do DNA. Sem folato, a medula óssea não consegue duplicar o DNA para se dividir. O glóbulo vermelho cresce desordenadamente tentando se dividir, mas nasce gigante, frágil e disfuncional (Anemia Megaloblástica com VCM > 100 fL). O embrião, privado de folato nas primeiras semanas, não fecha o tubo neural adequadamente.',
        es: 'Precursor del ácido tetrahidrofólico (THF), cofactor indispensable para la síntesis de purinas y timidilato en la replicación del ADN. Su carencia detiene la división celular en la médula ósea, produciendo maduración citoplasmática asíncrona que resulta en macrocitosis y anemia megaloblástica (VCM > 100 fL). En el embrión, el déficit impide el cierre del tubo neural en las primeras semanas de gestación.'
      },
      dose: {
        adult: {
          pt: 'Prevenção do Tubo Neural (gestantes/planejamento): 0,4 mg (400 mcg) ao dia, iniciando no mínimo 30 dias ANTES de engravidar e mantendo até o final do 1º trimestre. Se histórico de filho anterior com malformação do tubo neural: subir para 4 mg a 5 mg ao dia. Anemia Megaloblástica: 1 mg a 5 mg via oral ao dia.',
          es: 'Prevención Tubo Neural: 0,4 mg al día, iniciando 30 días ANTES de la gestación hasta el fin del 1º trimestre. Con antecedente previo de malformación del tubo neural: 5 mg al día. Anemia Megaloblástica: 1 a 5 mg al día.'
        },
        pediatric: {
          pt: 'Deficiência documentada: 0,5 mg a 1 mg via oral uma vez ao dia.',
          es: 'Deficiencia pediátrica: 0,5 a 1 mg vía oral una vez al día.'
        }
      },
      administration: { pt: ['Uso oral diário. Pode ser tomado com ou sem alimentos (molécula estável).'], es: ['Uso oral diario. Puede tomarse con o sin alimentos.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de alteração de dose. Excesso eliminado via urina.', es: 'Sin necesidad de ajuste. El exceso se elimina por vía urinaria.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade.', es: 'Sin necesidad.' } },
      commonAdverseEffects: { pt: ['Praticamente isento de efeitos colaterais nas doses habituais', 'Sabor ligeiramente amargo na boca em doses muito altas (≥ 5 mg/dia)'], es: ['Prácticamente exento de efectos secundarios en dosis habituales', 'Sabor ligeramente amargo en boca en dosis muy altas (≥ 5 mg/día)'] },
      dangerousAdverseEffects: { pt: ['OCULTAMENTO DE NEUROPATIA POR DÉFICIT DE VITAMINA B12: o folato normaliza o hemograma enquanto a desmielinização medular avança silenciosamente (Degeneração Combinada Subaguda)'], es: ['OCULTAMIENTO DE NEUROPATÍA POR DÉFICIT DE B12: el folato normaliza el hemograma mientras la desmielinización avanza silenciosamente (Degeneración Combinada Subaguda)'] },
      contraindications: {
        absolute: { pt: ['Anemia megaloblástica por deficiência de Vitamina B12 SEM reposição concomitante de B12 (o folato trata a anemia mas esconde e agrava a lesão neurológica)'], es: ['Anemia megaloblástica por déficit de Vitamina B12 SIN reposición concomitante de B12'] },
        relative: { pt: ['Nenhuma específica — molécula hidrossolúvel com ampla margem de segurança e descarte urinário'], es: ['Ninguna específica'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'A ARMADILHA DA PARALISIA OCULTA (NUNCA PRESCREVA SEM DOSAR A B12): Em qualquer paciente com Anemia Megaloblástica, NUNCA prescrevev Ácido Fólico isolado sem dosar Vitamina B12 sérica. O Ácido Fólico cura a anemia (hemograma fica normal) mas "mascara" o déficit de B12. Sem B12, os nervos da medula espinhal sofrem desmielinização irreversível — o paciente pode perder a marcha e o controle das pernas permanentemente (Degeneração Combinada Subaguda da Medula).', es: 'LA TRAMPA DE LA PARÁLISIS OCULTA: Jamás prescriba Ácido Fólico aislado en anemia megaloblástica sin dosar Vitamina B12. El folato normaliza el hemograma (parece curado) pero enmascara el déficit de B12. Sin B12, los nervios de la médula espinal sufren desmielinización irreversible — el paciente puede perder la marcha definitivamente (Degeneración Combinada Subaguda).' }
      },
      references: {
        pt: 'Diretrizes FEBRASGO de Assistência Pré-Natal 2022; MRC Vitamin Study Research Group, Lancet 1991;338:131-7 (prevenção tubo neural, 5 mg/dia); ASH Guidelines for Megaloblastic Anemia; Protocolo Clínico MS Brasil — Ácido Fólico na gestação.',
        es: 'Guías de Atención Prenatal FLASOG 2022; MRC Vitamin Study Research Group, Lancet 1991; ASH Guidelines; Ministerio de Salud Argentina — Suplementación con Ácido Fólico; Ficha Técnica CIMA Ácido Fólico.'
      }
    },

/* ── VITAMINA B12 / CIANOCOBALAMINA ─────────────────────────────────── */
    "vitamina_b12": {
      name: { pt: 'Vitamina B12 (Cianocobalamina / Hidroxocobalamina)', es: 'Vitamina B12 (Cianocobalamina / Hidroxocobalamina)' },
      category: 'hematologia',
      class: { pt: 'Fator Vitamínico Essencial / Coenzima de Maturação de Mielina e Hemácias', es: 'Factor Vitamínico Esencial / Coenzima de Maduración de Mielina y Hematíes' },
      indications: {
        pt: ['Tratamento e profilaxia da Anemia Megaloblástica e Anemia Perniciosa (deficiência de Fator Intrínseco)', 'Neuropatia periférica e Degeneração Combinada Subaguda da Medula por déficit de cobalamina', 'Prevenção de déficit neurológico em vegetarianos estritos, pacientes pós-bariátrica e usuários crônicos de Metformina e Omeprazol'],
        es: ['Tratamiento de Anemia Megaloblástica y Anemia Perniciosa (déficit de Factor Intrínseco)', 'Neuropatía periférica y Degeneración Combinada Subaguda de la Médula por déficit de cobalamina', 'Prevención en vegetarianos estrictos, bariátricos y usuarios crónicos de Metformina u Omeprazol']
      },
      commercialNames: { br: ['Citoneurin (Assoc B1+B6+B12)', 'Cronobê', 'Rubranova', 'Cobavital'], ar: ['Cobalamina', 'Nervobion', 'B12 Richmond', 'Citovit'] },
      presentation: { pt: ['Ampolas Intramusculares 1.000 mcg/mL (1 mL) e 5.000 mcg/2 mL', 'Comprimidos orais de alta dose 1.000 mcg e 2.000 mcg', 'Gotas orais 200 mcg/mL'], es: ['Ampollas Intramusculares 1.000 mcg/mL y 5.000 mcg/2 mL', 'Comprimidos orales de alta dosis 1.000 mcg y 2.000 mcg'] },
      mechanism: {
        pt: 'O Escudo da Mielina. Atua como coenzima essencial para duas reações vitais: (1) Síntese de metionina — necessária para a replicação do DNA celular e maturação da medula óssea; (2) Conversão de metilmalonil-CoA em succinil-CoA — sem essa reação, o ácido metilmalônico se acumula e destrói quimicamente os ácidos graxos que constroem a bainha de mielina dos nervos, determinando desmielinização irreversível do SNC e SNP.',
        es: 'Coenzima metabólica indispensable para: (1) Síntesis de metionina — necesaria para replicación del ADN y maduración eritroide en médula ósea; (2) Conversión de metilmalonil-CoA en succinil-CoA — sin esta reacción, el ácido metilmalónico se acumula y destruye los ácidos grasos que constituyen la vaina de mielina nerviosa, causando desmielinización irreversible del SNC y SNP.'
      },
      dose: {
        adult: {
          pt: 'Deficiência Severa / Sintomas Neurológicos (via IM): 1.000 mcg INTRAMUSCULAR profunda em dias alternados por 1 semana → 1.000 mcg semanal por 1 mês → manutenção 1.000 mcg mensal pelo resto da vida se causa irreversível (anemia perniciosa, pós-gastrectomia). Oral de alta dose (quando causa é dietética/reversível): 1.000 mcg a 2.000 mcg ao dia (absorção por difusão passiva, sem necessidade de fator intrínseco).',
          es: 'Déficit Severo con Clínica Neurológica (vía IM): 1.000 mcg INTRAMUSCULAR profunda en días alternos 1 semana → semanal 1 mes → mensual de por vida si causa irreversible (perniciosa, postgastrectomía). Oral de alta dosis (causa dietética reversible): 1.000–2.000 mcg/día (absorción por difusión pasiva, sin necesidad de factor intrínseco).'
        },
        pediatric: {
          pt: 'Deficiência documentada: 100 mcg IM por dia durante 10 a 15 dias, seguido de esquema de manutenção conforme etiologia.',
          es: 'Deficiencia documentada: 100 mcg IM por día durante 10 a 15 días, seguido de mantenimiento según etiología.'
        }
      },
      administration: { pt: ['Ampola IM: aplicar EXCLUSIVAMENTE VIA INTRAMUSCULAR PROFUNDA (músculo glúteo ou vasto lateral). Aplicação dolorosa pela concentração do complexo vitamínico. NÃO administrar por via intravenosa direta (formulação padrão).'], es: ['Ampolla IM: administrar EXCLUSIVAMENTE vía INTRAMUSCULAR PROFUNDA (glúteo o vasto lateral). Inyección dolorosa. NO administrar por vía intravenosa directa (formulación estándar).'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de redução de dose. Excesso de cobalamina é eliminado pela urina (urina rosada/avermelhada — inofensiva).', es: 'Sin necesidad de ajuste. El exceso se elimina por la orina (orina rosada — inocua).' } },
      hepaticAdjustment: { required: false, message: { pt: 'O fígado é o grande reservatório biológico de B12 (estoca para 3 a 5 anos de necessidade). Sem necessidade de ajuste.', es: 'El hígado es el gran reservorio biológico de B12 (reservas para 3 a 5 años). Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Dor, queimação e endurecimento no local da aplicação IM', 'Erupção acneiforme (brotes de espinhas no rosto pós-injeção de megadose)', 'Urina avermelhada/rosada (inofensiva — excreção de excesso)'], es: ['Dolor, ardor e induración local IM', 'Erupción acneiforme (brotes de acné tras megadosis)', 'Orina rosada (inocua — excreción del exceso)'] },
      dangerousAdverseEffects: { pt: ['HIPOCALEMIA AGUDA GRAVE nas primeiras 48h de tratamento: a medula "acorda" e fabrica milhões de hemácias consumindo o potássio livre do sangue — risco de arritmia cardíaca letal', 'Reação anafilática rara a sais de cobalto (hipersensibilidade)'], es: ['HIPOPOTASEMIA AGUDA GRAVE en las primeras 48h: la médula "despierta" y fabrica millones de glóbulos rojos consumiendo el potasio libre en sangre — riesgo de arritmia cardíaca letal', 'Reacción anafiláctica rara a sales de cobalto'] },
      contraindications: {
        absolute: { pt: ['Doença de Leber (Atrofia Óptica Hereditária) — a Cianocobalamina pode precipitar cegueira fulminante do nervo óptico; usar Hidroxocobalamina se necessário'], es: ['Enfermedad de Leber (Atrofia Óptica Hereditaria) — la Cianocobalamina puede precipitar ceguera fulminante; usar Hidroxocobalamina si necesario'] },
        relative: { pt: ['Hipersensibilidade a sais de cobalto (usar formulação alternativa)'], es: ['Hipersensibilidad a sales de cobalto (cambiar formulación)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O CHOQUE DO POTÁSSIO NAS PRIMEIRAS 48 HORAS: Quando um paciente gravemente depletado de B12 recebe a primeira injeção, a medula óssea "acorda em fúria" fabricando milhões de hemácias por hora. Esse processo consome todo o POTÁSSIO livre do sangue num fenômeno chamado "síndrome de realimentação hematológica". Monitore obrigatoriamente os eletrólitos nas primeiras 48h — se o paciente tiver cardiopatia, a hipocalemia pode ser fatal por arritmia ventricular.', es: 'EL CHOQUE DEL POTASIO EN LAS PRIMERAS 48 HORAS: Cuando un paciente gravemente depletado de B12 recibe la primera inyección, la médula ósea "despierta en furia" fabricando millones de glóbulos rojos por hora. Este proceso consume todo el Potasio libre en sangre (síndrome de realimentación hematológica). Monitoree electrolitos obligatoriamente en las primeras 48h — si el paciente tiene cardiopatía, la hipopotasemia puede ser fatal.' }
      },
      references: {
        pt: 'ASH Guidelines for Megaloblastic Anemia 2023; Stabler SP, N Engl J Med 2013;368:149-60 (Vitamin B12 Deficiency); Andrès E et al., CMAJ 2004;171:251-9 (Oral B12 alta dose); Protocolo Clínico PCDT MS Brasil — Anemia por deficiência de vitamina B12.',
        es: 'ASH Guidelines for Megaloblastic Anemia 2023; Stabler SP, N Engl J Med 2013;368:149-60; Andrès E et al., CMAJ 2004;171:251-9 (B12 oral alta dosis); Guías SAH (Sociedad Argentina de Hematología); Goodman & Gilman Farmacología.'
      }
    }

  }); /* fim Object.assign HEMATOLOGIA_DRUGS_DB — BUILD 434 (acido_folico + vitamina_b12 — Pilares Síntese Hemácias) */

/* ── BUILD 450 GUARD ─── */
if (typeof window.HEMATOLOGIA_DRUGS_DB !== 'object' || window.HEMATOLOGIA_DRUGS_DB === null || Array.isArray(window.HEMATOLOGIA_DRUGS_DB)) { window.HEMATOLOGIA_DRUGS_DB = {}; }
if (typeof window.HEMATOLOGIA_DRUGS_DB !== 'object' || window.HEMATOLOGIA_DRUGS_DB === null) return;

Object.assign(window.HEMATOLOGIA_DRUGS_DB, {

  // ── HEMOSTASIA AVANÇADA, FATORES E ESTIMULADORES DE MEDULA ──

/* ── HIDROXOCOBALAMINA (967) ────────────────────────────────────────── */
    "hidroxocobalamina": {
      name: { pt: 'Hidroxocobalamina (Vitamina B12a)', es: 'Hidroxocobalamina (Vitamina B12a)' },
      category: 'hematologia',
      class: { pt: 'Antídoto Anticianeto / Forma Ativa de Vitamina B12 de Alta Afinidade', es: 'Antídoto Anticidatado / Forma Activa de Vitamina B12 de Alta Afinidad' },
      indications: {
        pt: ['Tratamento de envenenamento agudo por Cianeto (inalação de fumaça de incêndios industriais)', 'Anemia Megaloblástica por deficiência grave de Vitamina B12 ou Síndrome de má-absorção', 'Neuropatia óptica de Leber e ambliopia tabágica'],
        es: ['Tratamiento de la intoxicación aguda por Cianuro (inhalación de humo en incendios)', 'Anemia Megaloblástica por déficit severo de Vitamina B12', 'Neuropatía óptica de Leber']
      },
      commercialNames: { br: ['Cyanokit', 'Rubranova'], ar: ['Cyanokit', 'Cobalin', 'Megalobic'] },
      presentation: { pt: ['Frasco-ampola IV com pó liofilizado de 5 g (Cyanokit)', 'Ampolas injetáveis IM 5.000 mcg/2 mL (Rubranova)'], es: ['Vial IV con polvo liofilizado 5 g', 'Ampollas IM 5.000 mcg'] },
      mechanism: {
        pt: 'O Ímã de Cianeto. Como antídoto (Cyanokit), cada molécula de Hidroxocobalamina possui um íon cobalto central que atua trocando uma hidroxila diretamente pelo íon cianeto tóxico. Essa reação química transforma o cianeto na molécula inofensiva **Cianocobalamina** (Vitamina B12 comum). O cianeto é arrancado das mitocôndrias, liberando a enzima citocromo c oxidase celular. O corpo volta a respirar e o cianeto é urinado de forma segura.',
        es: 'Cada molécula de hidroxocobalamina sustituye su grupo hidroxilo por un ion cianuro libre, fijándolo con alta afinidad para formar **Cianocobalamina** (vitamina B12 inerte). Esto rescata a la enzima mitocondrial citocromo c oxidasa de la inhibición del cianuro, restaurando la respiración celular aeróbica y permitiendo la excreción renal del tóxico.'
      },
      dose: {
        adult: {
          pt: 'Intoxicação por Cianeto (Fumaça/Incêndio): 5 g via Intravenosa (infusão em 15 minutos). Uma segunda dose de 5 g pode ser infundida se houver instabilidade neurológica crônica. Anemia: 1.000 a 5.000 mcg via Intramuscular profunda a cada 2-3 dias na fase de ataque.',
          es: 'Intoxicación por Cianuro: 5 g vía Intravenosa (infusión rápida en 15 min). Se puede repetir una segunda dosis de 5 g si persiste el coma o shock. Anemia: 1.000 a 5.000 mcg vía Intramuscular profunda.'
        },
        pediatric: {
          pt: 'Antídoto Cianeto: 70 mg/kg via Intravenosa (máximo de 5 g por dose de infusão única).',
          es: 'Intoxicación por Cianuro en niños: 70 mg/kg IV bolo lento.'
        }
      },
      administration: { pt: ['A formulação de antídoto de 5g deve ser reconstituída com 200 mL de Soro Fisiológico (NaCl 0,9%) e infundida em linha endovenosa exclusiva ao longo de 15 minutos. NUNCA misturar com outras drogas na mesma linha. A formulação de anemia é estritamente INTRAMUSCULAR profunda.'], es: ['Reconstituir el vial de 5 g con 200 mL de solución fisiológica e infundir en una línea IV exclusiva en 15 minutos. No mezclar con otros fármacos.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste, embora os rins excretores fiquem corados pela cor vermelha do complexo.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste de dose.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['COLORAÇÃO VERMELHA INTENSA DA URINA E PELE (efeito cromógeno inofensivo que dura até 15 dias)', 'Hipertensão arterial transitória por vasoconstrição reflexa', 'Reação eritematosa no sítio injetável'], es: ['COLORACIÓN ROJA INTENSA EN PIEL Y ORINA (Cromogenia inofensiva duradera)', 'Hipertensión arterial transitoria', 'Cefalea'] },
      dangerousAdverseEffects: { pt: ['Reações anafiláticas severas (raro)', 'Insuficiência renal aguda por precipitação de cristais cromógenos na luz tubular se houver desidratação crônica extrema'], es: ['Reacciones anafilácticas', 'Falla renal aguda por cromógenos intratubulares en shock severo'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade conhecida à hidroxocobalamina ou ao cobalto'] },
        relative: { pt: ['Uso concomitante na mesma linha IV com hemoderivados ou Epinefrina (inativa as catecolaminas por oxidação direta)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O XIXI VERDE-CHROME QUE VIRA SANGUE (A CROMOGENIA DO CYANOKIT): A Hidroxocobalamina é um corante vermelho natural ultra-concentrado. Após a infusão na UTI, a pele, o suor, as lágrimas e a urina do paciente ficam com uma cor vermelho-sangue viva e assustadora. Os monitores de diálise e exames laboratoriais dão erro porque a máquina acha que o sangue derreteu. Avise o laboratório e a família: é normal e o paciente vai urinar vermelho por semanas.', es: 'ALERTA DE CROMOGENIA INTENSA: Tras infundir el Cyanokit, el paciente se tiñe por completo de un color rojo violáceo intenso (piel, mucosas y orina). Esto altera las lecturas de los oxímetros de pulso y los analizadores de laboratorio bioquímico por interferencia colorimétrica. Advierta al personal de enfermería.' }
      },
      references: {
        pt: 'Cyanokit FDA Approval Data; Cortina Fire Smoke Inhalation Emergency Protocols; Manual de Toxicologia Ouro de Micromedex.',
        es: 'FDA Prescribing Information (Cyanokit); Guías de Manejo de Intoxicaciones de la Red de Toxicología de Argentina.'
      }
    },

/* ── FILGRASTIM (968) ───────────────────────────────────────────────── */
    "filgrastim": {
      name: { pt: 'Filgrastim (G-CSF Recombinante)', es: 'Filgrastim (G-CSF Recombinante)' },
      category: 'hematologia',
      class: { pt: 'Fator de Estímulo de Colônias de Granulócitos Humano / Citocina Hematopoiética', es: 'Factor Estimulante de Colonias de Granulocitos Humano / Citocina Hematopoyética' },
      indications: {
        pt: ['Redução da duração da Neutropenia Grave e incidência de Neutropenia Febril em pacientes com tumores sob quimioterapia citotóxica', 'Mobilização de células-tronco hematopoiéticas para o sangue periférico para transplante de medula', 'Neutropenia congênita severa crônica'],
        es: ['Prevención y reducción de la Neutropenia Febril inducida por quimioterapia mielosupresora', 'Movilización de células progenitoras (Stem Cells) para trasplante de médula ósea']
      },
      commercialNames: { br: ['Granulokine', 'Filgrastim (SUS)', 'Biozurin'], ar: ['Granulokine', 'Filgrastim Richmond', 'Relgrast'] },
      presentation: { pt: ['Seringas preenchidas Injetáveis Subcutâneas/IV 300 mcg (30 MUI) e 480 mcg (48 MUI)'], es: ['Jeringas prellenadas SC/IV de 300 mcg y 480 mcg'] },
      mechanism: {
        pt: 'A Fábrica de Neutrófilos. É uma glicoproteína fabricada por tecnologia de DNA recombinante que imita o G-CSF humano nativo. Ele se liga diretamente aos receptores de superfície das células-mãe mieloides dentro da medula óssea do paciente. Esse estímulo força e acelera de forma violenta a proliferação, maturação e liberação dos **Neutrófilos** (as células de defesa de linha de frente) para o sangue, salvando o paciente de morrer de infecções sem imunidade.',
        es: 'Factor estimulante de colonias de granulocitos recombinante. Regula la producción de neutrófilos en la médula ósea mediante la unión a receptores específicos en células progenitoras mieloides. Estimula la proliferación, diferenciación y activación funcional de los neutrófilos, acelerando su liberación al torrente sanguíneo.'
      },
      dose: {
        adult: {
          pt: 'Neutropenia Pós-Quimio: 5 mcg/kg/dia via SUBCUTÂNEA (geralmente uma seringa cheia de 300 mcg ou 480 mcg ao dia). Iniciar estritamente 24 horas APÓS o término da quimioterapia. Continuar até que a contagem de neutrófilos (ANC) passe de 10.000/mm³ após o nadir.',
          es: 'Dosis estándar: 5 mcg/kg/día vía SUBCUTÁNEA o IV. Iniciar estrictamente 24 horas después de finalizar la quimioterapia. Mantener hasta lograr una recuperación de neutrófilos segura (> 10.000/mm³).'
        },
        pediatric: {
          pt: 'Crianças sob quimioterapia: 5 mcg/kg/dia via Subcutânea seguindo as mesmas diretrizes de nadir e tempo de segurança do adulto.',
          es: 'Pediátrica: 5 mcg/kg/día SC con monitoreo estricto de hemograma.'
        }
      },
      administration: { pt: ['Administração via Subcutânea diária ou infusão IV curta diluída apenas em Soro Glicosado 5% (SG5%). CRÍTICO: NUNCA DILUIR FILGRASTIM EM SORO FISIOLÓGICO (NaCl 0,9%), pois o sal precipita e destrói a citocina, quebrando o remédio na hora. Se a dose for menor que 15 mcg/mL, adicionar albumina para proteger o frasco.'], es: ['Inyección Subcutánea diaria. Si se administra por vía IV, DILUIR EXCLUSIVAMENTE EN SUERO GLUCOSADO AL 5%. ¡PROHIBIDO USAR SOLUCIÓN FISIOLÓGICA! El cloruro de sodio precipita y anula la proteína por completo.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste de dose, depurado por captação celular de neutrófilos.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste de dose.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['DOR ÓSSEA SEVERA E MIALGIA (ocorre em > 30% dos pacientes, tipicamente na bacia, coluna e esterno devido à expansão da medula fabricando células)', 'Cefaleia', 'Elevação de Ácido Úrico e Lactato Desidrogenase (LDH)'], es: ['DOLOR ÓSEO SEVERO E INTENSO (frecuente en esternón, pelvis y columna por expansión de la médula ósea)', 'Cefalea', 'Aumento de LDH'] },
      dangerousAdverseEffects: { pt: ['RUPTURA EXPLOSIVA DE BAÇO (Esplenomegalia maciça com ruptura esplênica hemorrágica fatal por infiltração celular - exige palpação abdominal)', 'Síndrome do Desconforto Respiratório Agudo (SDRA) por infiltração de neutrófilos nos pulmões'], es: ['RUPTURA ESPLÉNICA MORTAL (Esplenomegalia masiva aguda por congestión mieloide)', 'Síndrome de Distrés Respiratorio Agudo (SDRA) pulmonar'] },
      contraindications: {
        absolute: { pt: ['Histórico de hipersensibilidade grave ao filgrastim ou a proteínas derivadas de E. coli', 'Uso nas 24 horas antes ou nas 24 horas após a aplicação de quimioterapia (pode multiplicar a toxicidade medular)'] },
        relative: { pt: ['Pacientes com anemia falciforme ativa (pode precipitar crises de foicização esplênicas severas e fatais)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O ALERTA DA DOR ABDOMINAL À ESQUERDA (RISCO DE EXPLOSÃO DE BAÇO): O Filgrastim força tanto a medula e o baço que o baço pode crescer rápido feito um balão de sangue e estourar lá dentro. Se o paciente que está tomando o remédio queixar de dor súbita e violenta na barriga à esquerda ou dor irradiando para o ombro esquerdo (Sinal de Kehr), corra para a tomografia; risco de ruptura esplênica hemorrágica fatal.', es: 'ALERTA DE RUPTURA ESPLÉNICA: El estímulo mieloide congestiona el bazo. Si el paciente refiere dolor en hipocondrio izquierdo o irradiado al hombro, suspenda de inmediato y descarte rotura de bazo de urgencia por ecografía ante riesgo de shock hipovolémico.' }
      },
      references: {
        pt: 'ASCO Clinical Practice Guidelines on G-CSF; Guidelines de Neutropenia Febril da Sociedade Brasileira de Oncologia Clínica (SBOC); Bula Granulokine.',
        es: 'ASCO Practice Guidelines; Guías de Neutropenia Febril de la Sociedad Argentina de Oncología (AAOC).'
      }
    },

/* ── PEGFILGRASTIM (969) ────────────────────────────────────────────── */
    "pegfilgrastim": {
      name: { pt: 'Pegfilgrastim', es: 'Pegfilgrastim' },
      category: 'hematologia',
      class: { pt: 'Fator de Estímulo de Colônias de Granulócitos Peguilado de Longa Duração', es: 'Factor Estimulante de Colonias de Granulocitos Pegilado de Larga Duración' },
      indications: {
        pt: ['Prevenção e redução da Neutropenia Febril em pacientes sob ciclos de quimioterapia mielosupresora forte (A versão de dose única que substitui as picadas diárias do filgrastim comum)'],
        es: ['Reducción de la duración de la neutropenia en quimioterapia citotóxica (Formulación monodosis de larga duración)']
      },
      commercialNames: { br: ['Neulastim', 'Pelgraz', 'Fulphila'], ar: ['Neulastim', 'Pegasta', 'Pelgraz Argentina'] },
      presentation: { pt: ['Seringa preenchida Injetável Subcutânea de 6 mg/0,6 mL'], es: ['Jeringa prellenada de 6 mg/0,6 mL'] },
      mechanism: {
        pt: 'O Filgrastim de Longa Duração. É a molécula de filgrastim acoplada quimicamente a um polímero de Polietilenoglicol (Peguilação). Essa alteração de engenharia molecular aumenta o tamanho físico da molécula, impedindo que ela seja filtrada e destruída pelos rins. Sua eliminação passa a ser puramente biológica ("Clearance Neutrofílico"): o remédio dura no sangue até os novos neutrófilos nascerem e engolirem a medicação. Uma única injeção substitui 10 dias de picadas diárias.',
        es: 'Filgrastim conjugado covalentemente con polietilenglicol (PEG). La pegilación reduce drásticamente el aclaramiento renal de la proteína. Su eliminación se autorregula de forma biológica por los propios neutrófilos circulantes ("Clearance Neutrofílico"): a medida que los neutrófilos se recuperan, fagocitan y limpian el fármaco de la sangre.'
      },
      dose: {
        adult: {
          pt: '6 mg via oral (NUNCA ORAL), estritamente via SUBCUTÂNEA, em DOSE ÚNICA por ciclo de quimioterapia. Aplicar exatamente 24 horas a no máximo 72 horas após o término da quimioterapia citotóxica.',
          es: '6 mg (una jeringa completa) vía SUBCUTÁNEA en DOSIS ÚNICA por cada ciclo de quimioterapia, administrado 24 horas después del fin del citotóxico.'
        },
        pediatric: {
          pt: 'Calculado estritamente por peso corporal em crianças com peso < 45 kg utilizando seringas de microdosagem em centros oncológicos especializados.',
          es: 'Dosificación pediátrica calibrada estrictamente por kilo en oncología.'
        }
      },
      administration: { pt: ['Injeção via subcutânea única na coxa, abdômen ou braço. NUNCA aplicar na veia (IV) ou no mesmo dia da quimioterapia. Retirar da geladeira 30 minutos antes para quebrar o choque térmico da agulha.'], es: ['Inyección Subcutánea única. No administrar por vía intravenosa. Mantener refrigerado.'] },
      renalAdjustment: { required: false, message: { pt: 'Peguilação blinda o rim; sem necessidade de ajuste de dose em renais crônicos.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste de dose.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Dor óssea intensa generalizada (bacia e esterno)', 'Cefaleia', 'Dor muscular local'], es: ['Dolor óseo severo generalizado', 'Cefalea', 'Mialgias localizadas'] },
      dangerousAdverseEffects: { pt: ['Ruptura de Baço hemorrágica aguda', 'Síndrome do Extravasamento Capilar (Capillary Leak Syndrome - inchaço sistêmico explosivo com choque e hipotensão na UTI)', 'Glomerulonefrite imunomediada'], es: ['Ruptura esplénica mortal', 'Síndrome de Fuga Capilar masiva (edema generalizado con shock)', 'Glomerulonefritis aguda'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade documentada ao pegfilgrastim ou ao filgrastim convencional', 'Uso a menos de 14 dias antes de um ciclo planejado de quimioterapia'] },
        relative: { pt: ['Crise de foicização em pacientes com traço ou doença falciforme ativa'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A SÍNDROME DA FUGA CAPILAR (O PERIGO DO INCHAÇO FULMINANTE): O Pegfilgrastim pode desencadear uma reação imune rara chamada Síndrome de Fuga Capilar. Os capilares do corpo inteiro "abrem" as comportas e o líquido do sangue vaza para os tecidos em poucos minutos. O paciente incha feito um boneco, a pressão cai para zero e ocorre falência de múltiplos órgãos. Exige suporte de UTI imediato com albumina e corticoide.', es: 'ALERTA DE SÍNDROME DE FUGA CAPILAR: Puede inducir de forma idiopática permeabilidad capilar masiva. El paciente presenta edema generalizado rápido, efusión pleural, distrés respiratorio e hipotensión profunda refractaria. Exige manejo crítico inmediato.' }
      },
      references: {
        pt: 'EORTC Guidelines for the Use of Granulocyte Colony-Stimulating Factors; Lancet Oncology Pegfilgrastim Trials; Bula Neulastim.',
        es: 'EORTC Management Guidelines; Ficha Técnica CIMA Pegfilgrastim; Manual de Terapéutica Oncológica del Hospital Roffo.'
      }
    },

/* ── ELTROMBOPAGUE (971) ────────────────────────────────────────────── */
    "eltrombopague": {
      name: { pt: 'Eltrombopague Olamina', es: 'Eltrombopag Olamina' },
      category: 'hematologia',
      class: { pt: 'Agonista Não-Peptídico do Receptor de Trombopoetina (TPO-R) / Estimulador de Plaquetas', es: 'Agonista No Peptídico del Receptor de Trombopoyetina (TPO-R) / Estimulante de Plaquetas' },
      indications: {
        pt: ['Plaquetopenia severa na Púrpura Trombocitopênica Imunológica (PTI) crônica refratária a corticoides ou esplenectomia', 'Tratamento de Trombocitopenia em pacientes com Hepatite C crônica para permitir o início de antivirais', 'Anemia Aplástica Grave refratária de medula'],
        es: ['Trombocitopenia severa en Púrpura Trombocitopénica Inmune (PTI) crónica refractaria', 'Trombocitopenia en pacientes con Hepatitis C', 'Anemia Aplásica Grave']
      },
      commercialNames: { br: ['Revolade'], ar: ['Revolade', 'Eltrombopag Beta'] },
      presentation: { pt: ['Comprimidos revestidos 12,5 mg, 25 mg, 50 mg e 75 mg'], es: ['Comprimidos revestidos 25 mg, 50 mg y 75 mg'] },
      mechanism: {
        pt: 'O Multiplicador de Plaquetas Oral. É uma pequena molécula não-peptídica que entra no sangue e se liga ao domínio transmembrana do receptor de Trombopoetina ($TPO-R$) nas células-mãe da medula. Essa ligação ativa a via JAK/STAT e induz a proliferação agressiva e maturação dos **Megacariócitos** (as células gigantes que se fragmentam para virar plaquetas). A produção de plaquetas dispara, subindo os níveis sanguíneos e interrompendo sangramentos em poucos dias.',
        es: 'Agonista molecular que interactúa selectivamente con el dominio transmembrana del receptor de trombopoyetina humana (TPO-R). Activa las vías de señalización intracelular JAK/STAT e STAT/MAPK, induciendo la proliferación y maduración de megacariocitos en la médula ósea, lo que eleva el recuento plaquetario de forma sostenida.'
      },
      dose: {
        adult: {
          pt: 'PTI Crônica: Iniciar com 50 mg via oral, UMA VEZ ao dia. (Atenção: Pacientes de descendência asiática devem iniciar com dose reduzida de 25 mg ao dia). Monitorar plaquetas semanalmente; ajustar a dose para manter as plaquetas > 50.000/mm³ para segurança de sangramento. Dose máxima: 75 mg/dia.',
          es: 'PTI Crónica: Iniciar con 50 mg vía oral, UNA VEZ al día. (Descendientes asiáticos: iniciar con 25 mg/clase). Ajustar dosis semanalmente hasta mantener plaquetas estables > 50.000/mm³. Máx 75 mg/día.'
        },
        pediatric: {
          pt: 'Aprovado a partir de 1 ano de idade para PTI crônica: Peso de 10 a 20 kg: iniciar com 25 mg uma vez ao dia; Peso > 20 kg: dose padrão de 50 mg ao dia.',
          es: 'Aprobado en niños > 1 año con dosificación calibrada según franjas de peso corporal.'
        }
      },
      administration: { pt: ['DEVE SER TOMADO EM JEJUM SECO OU ESTÔMAGO VAZIO (1 hora antes ou 2 horas depois de comer). CRÍTICO: É proibido tomar junto com leite, iogurte, cálcio ou antiácidos. Os metais grudam no Eltrombopague quimicamente (quelação) e cortam sua absorção a zero, destruindo o efeito do remédio.'], es: ['TOMAR CON ESTÓMAGO VACÍO (1 hora antes o 2 horas después de comer). ¡PROHIBIDO TOMAR CON LÁCTEOS O CATIONES METÁLICOS! Quelan el fármaco anulando por completo su absorción.'] },
      renalAdjustment: { required: false, message: { pt: 'Mínima excreção renal da droga ativa, sem necessidade de ajuste de dose.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: true, message: { pt: 'ALTAMENTE HEPATOTÓXICO. Exige dosagem de TGO, TGP e Bilirrubinas basais e a cada 2 semanas na fase de ajuste. Se houver cirrose ou hepatopatia, reduzir a dose inicial obrigatória para 25 mg ao dia.', es: 'ALTAMENTE HEPATOTÓXICO. Reducir dosis inicial a 25 mg/día si hay daño hepático previo. Monitoreo bimensual obligatorio de transaminasas.' } },
      commonAdverseEffects: { pt: ['Cefaleia marcante e náuseas', 'Elevação de transaminases hepáticas', 'Insônia e mialgia localizado'], es: ['Cefalea intensa', 'Aumento de transaminasas hepáticas', 'Náuseas y diarrea'] },
      dangerousAdverseEffects: { pt: ['HEPATOTOXICIDADE CRÍTICA com falência hepática severa e icterícia', 'Eventos Tromboembólicos (TVP, TEP ou Trombose de Veia Porta caso a dose force as plaquetas a subirem demais acima de 200.000/mm³)'], es: ['HEPATOTOXICIDAD SEVERA FULMINANTE', 'Trombosis de la vena porta o TEP si el recuento plaquetario excede los límites biológicos seguros (> 200.000/mm³)'] },
      contraindications: {
        absolute: { pt: ['Insuficiência hepática grave Child-Pugh C', 'Histórico de trombose de veia porta ativa ou estados de hipercoagulação severos pré-existentes'] },
        relative: { pt: ['Uso associado com estatinas (o eltrombopague dobra os níveis de estatinas no sangue — reduzir dose da estatina)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A ARMADILHA DO COPO DE LEITE (A CATASTROFE DA QUELAÇÃO): Oriente o paciente hematológico de forma enérgica: nunca tome o Revolade com um copo de leite ou comendo queijo. O Cálcio do leite funciona como um cadeado químico que tranca o remédio no estômago, impedindo-o de entrar no sangue. O nível de plaquetas despenca rápido e o paciente pode sofrer um AVC hemorrágico por falha de absorção. Separe o leite por 4 horas.', es: 'EL PELIGRO DE LA QUELACIÓN POR LÁCTEOS: El Calcio, el Magnesio y el Hierro contenidos en alimentos bloquean la absorción de Eltrombopag al quelarlo en el estómago, provocando recaídas plaquetarias severas con sangrado espontáneo. Espacie lácteos o antiácidos al menos 4 horas.' }
      },
      references: {
        pt: 'EXTEND Trial (Long term Eltrombopag in ITP - Lancet 2017); RAISE Trial; Manual de Diagnóstico e Tratamento de PTI da Hcor / SBI.',
        es: 'EXTEND Trial (Lancet 2017); RAISE Trial; Guías de Diagnóstico y Tratamiento de la PTI de la Sociedad Argentina de Hematología (SAH).'
      }
    },

/* ── ROMIPLOSTIM (972) ──────────────────────────────────────────────── */
    "romiplostim": {
      name: { pt: 'Romiplostim', es: 'Romiplostim' },
      category: 'hematologia',
      class: { pt: 'Proteína de Fusão "Peptibody" Agonista de Trombopoetina / Estimulador de Plaquetas Injetável', es: 'Proteína de Fusión "Peptibody" Agonista de Trombopoyetina / Estimulante de Plaquetas Inyectable' },
      indications: {
        pt: ['Tratamento de Plaquetopenia Crônica Grave em pacientes adultos e pediátricos com Púrpura Trombocitopênica Imunológica (PTI) refratários a outros tratamentos (corticoides, imunoglobulinas)'],
        es: ['Trombocitopenia crónica en pacientes con PTI refractarios a esplenectomía o corticoterapia previa']
      },
      commercialNames: { br: ['Nplate'], ar: ['Nplate'] },
      presentation: { pt: ['Frasco-ampola com pó liofilizado injetável Subcutâneo 250 mcg e 500 mcg'], es: ['Vial con polvo liofilizado Subcutáneo 250 mcg y 500 mcg'] },
      mechanism: {
        pt: 'O Corpo Peptídico Ativador (Peptibody). É uma proteína de fusão recombinante exclusiva de engenharia biológica. Ela junta uma porção Fc de anticorpo IgG1 humano acoplada covalentemente a peptídeos ativadores que grudam no receptor de Trombopoetina ($TPO-R$). Ao contrário do Eltrombopague, o Romiplostim gruda no sítio extracelular da molécula (igual à trombopoetina humana nativa). Ele ativa a cascata de transcrição mieloide forçando a fabricação em massa de plaquetas de forma potente e direcionada na veia/pele.',
        es: 'Cuerpo peptídico ("Peptibody") de ingeniería genética que consta de una región Fc de IgG1 humana unida a cadenas peptídicas que activan el receptor TPO-R en su dominio extracelular. Estimula la transcripción mieloide intracelular de megacariocitos igual que la trombopoyetina nativa.'
      },
      dose: {
        adult: {
          pt: 'Uso SUBCUTÂNEO SEMANAL: Iniciar com 1 mcg/kg via Subcutânea, UMA VEZ POR SEMANA. Monitorar o hemograma/plaquetas semanalmente. Titular a dose aumentando 1 mcg/kg a cada semana até que o paciente estabilize as plaquetas > 50.000/mm³ (máximo absoluto de 10 mcg/kg/semana). Se plaquetas > 200.000, suspender ou reduzir a dose.',
          es: 'Uso SUBCUTÁNEO SEMANAL: Inicio con 1 mcg/kg vía SC, UNA VEZ POR SEMANA. Se titula incrementando de a 1 mcg/kg semanal según recuento de plaquetas hasta estabilizar > 50.000/mm³. Dosis máxima: 10 mcg/kg/semana.'
        },
        pediatric: {
          pt: 'Aprovado a partir de 1 ano de idade para PTI crônica com o mesmo esquema de titulação semanal de 1 mcg/kg/semana baseado rigidamente no peso real da criança.',
          es: 'Aprobado en niños > 1 año con esquema de titulación semanal idéntico al adulto.'
        }
      },
      administration: { pt: ['EXCLUSIVAMENTE VIA SUBCUTÂNEA SEMANAL HOSPITALAR OU AMBULATORIAL. O pó liofilizado deve ser reconstituído com Água para Injeção estéril estritamente de acordo com as linhas de graduação da bula de volume líquido para evitar erros catastróficos de superdosagem. Não agitar o frasco (destrói a fusão de peptibody).'], es: ['Inyección Subcutánea SEMANAL. Reconstituir con agua destilada estéril de forma milimétrica. No agitar el vial con violencia por fragilidad estructural de la proteína de fusión.'] },
      renalAdjustment: { required: false, message: { pt: 'Molécula gigante eliminada por catabolismo celular proteico, sem necessidade de ajuste renal.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Ao contrário do Eltrombopague, NÃO possui perfil de hepatotoxicidade primária severa, sem necessidade de ajuste inicial.', es: 'Sin necesidad de ajuste hepático, gran ventaja sobre el Eltrombopag oral.' } },
      commonAdverseEffects: { pt: ['Cefaleia de padrão tensional forte', 'Artralgia e dor óssea localizada', 'Tontura e distúrbios do sono', 'Dor abdominal e diarreia leve'], es: ['Cefalea tensional intensa', 'Artralgias y dolor óseo', 'Mareo e insomnio'] },
      dangerousAdverseEffects: { pt: ['FIBROSE DE MEDULA ÓSSEA (Risco de deposição de reticulina na medula por estímulo celular crônico exagerado; exige monitoramento laboratorial de mielofibrose de rebote)', 'Tromboembolismo venoso massivo (TEP) se plaquetas > 400.000/mm³ por superdosagem'], es: ['FIBROSIS DE LA MÉDULA ÓSEA (Depósito patológico de reticulina medular por sobreestimulación crónica mieloide)', 'Tromboembolismo pulmonar masivo'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade conhecida às proteínas derivadas de Escherichia coli ou ao romiplostim', 'Presença de Síndrome Mielodisplásica (risco de evoluir para Leucemia Mieloide Aguda explosiva)'] },
        relative: { pt: ['Histórico de eventos trombóticos arteriais ou venosos maiores recentes (AVC/IAM)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O ALERTA DA VIGILÂNCIA DE MIELOFIBROSE (A MEDULA QUE VIRA PEDRA): O Nplate (Romiplostim) estimula tanto as células da medula que se a dose for excessiva por anos, a medula do paciente começa a cicatrizar e acumular fibras de reticulina (Mielofibrose). O espaço para fabricar sangue some e o paciente desenvolve anemia crônica severa. O hematologista deve pesquisar periodicamente alterações celulares no sangue periférico.', es: 'ALERTA DE MIELOFIBROSIS MEDULAR: El estímulo continuo de megacariocitos puede inducir el depósito de fibras de reticulina en la médula ósea, alterando la hematopoyesis. Se recomienda realizar frotis de sangre periférica para vigilar la aparición de dacriocitos o precursores eritroides.' }
      },
      references: {
        pt: 'Nplate Global Safety Registry Study; Lancet Pediatric ITP Trials; Manual de Condutas em Hematologia do Hospital Sírio-Libanês.',
        es: 'Nplate Global Safety Registry; Guías de Tratamiento de PTI de la Sociedad Argentina de Hematología.'
      }
    },

/* ── FATOR VIIa RECOMBINANTE (947) ───────────────────────────────────── */
    "fator_viia": {
      name: { pt: 'Fator VIIa Recombinante (Eptacogue Alfa)', es: 'Factor VIIa Recombinante (Eptacog Alfa)' },
      category: 'hematologia',
      class: { pt: 'Fator de Coagulação Ativado Recombinante / Agente Hemostático de Emergência de Alto Custo', es: 'Factor de Coagulación Activado Recombinante / Agente Hemostático de Emergencia' },
      indications: {
        pt: ['Tratamento de episódios de sangramento grave ou prevenção de hemorragias em cirurgias de pacientes com Hemofilia A ou B que possuem inibidores (anticorpos que destroem o Fator VIII ou IX)', 'Hemorragia pós-parto catastrófica refratária off-label', 'Tratamento de sangramentos severos na Trombastenia de Glanzmann'],
        es: ['Hemorragias graves o cirugía en pacientes con Hemofilia A o B con inhibidores circulantes', 'Hemorragia postparto catastrófica refractaria (Uso de rescate off-label)', 'Trombastenia de Glanzmann']
      },
      commercialNames: { br: ['NovoSeven'], ar: ['NovoSeven'] },
      presentation: { pt: ['Frasco-ampola com pó liofilizado IV contendo 1 mg (50 UI), 2 mg (100 UI) e 50 mg (250 UI) de Fator VIIa + diluente'], es: ['Vial con polvo liofilizado IV de 1 mg (50 UI), 2 mg (100 UI) y 5 mg (250 UI)'] },
      mechanism: {
        pt: 'O Disparador do Coágulo de UTI. O Fator VIIa atua no início da cascata de coagulação. Quando injetado em altas doses na veia, ele pula as etapas iniciais travadas da hemofilia. Ele liga-se diretamente ao Fator Tecidual exposto na parede do vaso rasgado e, de forma independente, liga-se à superfície das plaquetas ativadas no local da ferida. Esse acoplamento gera uma **Explosão de Trombina** instantânea, transformando o fibrinogênio em redes de fibrina duras que estancam a hemorragia em minutos.',
        es: 'Actúa activando la vía extrínseca de la cascada de coagulación. Al administrarse a dosis altas terapéuticas, induce una activación directa del Fator X sobre la superficie de las plaquetas activadas localmente en el sitio del daño vascular. Esto desencadena una "explosión de trombina" masiva que forma un coágulo de fibrina estable, puenteando el déficit de Fator VIII o IX.'
      },
      dose: {
        adult: {
          pt: 'Hemorragia em Hemofilia com Inibidor: 90 mcg/kg via BOLUS INTRAVENOSO DIRETO, aplicado a cada 2 ou 3 horas até que o sangramento seja controlado com segurança estável. Hemorragia pós-parto (off-label resgate): 60 a 90 mcg/kg em dose única rápida IV.',
          es: 'Episodio Hemorrágico en Hemofilia con inhibidores: 90 mcg/kg vía BOLO INTRAVENOSO DIRECTO, repetido cada 2 o 3 horas hasta lograr la hemostasia del paciente. Hemorragia Postparto: 60-90 mcg/kg IV bolo único.'
        },
        pediatric: {
          pt: 'Crianças hemofílicas com inibidores: Exigem clearance acelerado. Administrar dose maior de 90 a 120 mcg/kg via bolus IV a cada 2 horas nas crises hemorrágicas.',
          es: 'Pediátrica en crisis hemorrágica: 90 a 120 mcg/kg IV bolo cada 2 horas.'
        }
      },
      administration: { pt: ['EXCLUSIVAMENTE RECONSTITUÍDO E APLICADO EM BOLUS INTRAVENOSO DIRETO LENTO AO LONGO DE 2 A 5 MINUTOS. É proibido colocar em soro para gotejamento lento (a proteína quebra rápido). Administrar em linha exclusiva e em até 3 horas após a diluição.'], es: ['EXCLUSIVAMENTE BOLO INTRAVENOSO DIRECTO EN 2 A 5 MINUTOS. Prohibido diluir en goteo continuo. Administrar inmediatamente tras la reconstitución.'] },
      renalAdjustment: { required: false, message: { pt: 'Não requer ajuste de dose, depurado por vias metabólicas plasmáticas normais.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste, mas o monitoramento do coagulograma é obrigatório.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Febre e calafrios pós-infusão (reação proteica)', 'Náuseas e tontura', 'Alterações discretas no local do acesso venoso'], es: ['Fiebre y escalofríos', 'Náuseas', 'Dolor local en la vía venosa'] },
      dangerousAdverseEffects: { pt: ['TROMBOSE ARTERIAL E VENOSA MASSIVA (Infarto Agudo do Miocárdio, AVC Isquêmico ou Trombose Venosa Profunda por hipercoagulação descontrolada sistêmica se houver uso abusivo fora do peso)'], es: ['TROMBOSIS ARTERIAL O VENOSA MASIVA (Infarto de Miocardio, ACV Isquémico o TEP fulminante por estado de hipercoagulabilidad iatrogénica)'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade conhecida às proteínas do rato camundongo, hamster ou ao próprio fator VIIa', 'Presença de Coagulação Intravascular Disseminada (CIVD) ativa explosiva'] },
        relative: { pt: ['Idosos cardiopatas graves com doença arterial coronariana obstrutiva crítica avançada'] }
      },
      safetyFlags: {
        warning: { pt: 'O ALERTA DA EXPLOSÃO TROMBÓTICA (O COÁGULO ANDANTE): O NovoSeven é a medicação de resgate mais potente da hematologia, mas seu uso exige precisão matemática milimétrica no peso. Injetar doses excessivas ou aplicar em pacientes que não possuem indicação real de hemofilia/inibidor dispara o risco de Trombose Sistêmica. O sangue coagula dentro dos vasos saudáveis, causando infarto e derrames instantâneos na UTI.', es: 'ALERTA DE INFARTO Y ACV IATROGÉNICO: Debido a que desencadena hemostasia sistémica agresiva, las sobredosis o el uso indiscriminado fuera de protocolo triplican el riesgo de trombosis arterial. Monitorizar estrictamente signos de isquemia cerebral o miocárdica durante su uso.' },
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true
      },
      references: {
        pt: 'NovoSeven Clinical Efficacy Registry; Guidelines da Federação Mundial de Hemofilia (WFH); Manual de Hemorragias Graves de UTI do Einstein.',
        es: 'World Federation of Hemophilia (WFH) Guidelines; Manual de Emergencias Obstétricas y Hematológicas del Hospital de Clínicas.'
      }
    },

/* ── EMICIZUMABE (979) ──────────────────────────────────────────────── */
    "emicizumabe": {
      name: { pt: 'Emicizumabe', es: 'Emicizumab' },
      category: 'hematologia',
      class: { pt: 'Anticorpo Monoclonal Biespecífico Humanizado / Mimético Funcional do Fator VIII', es: 'Anticuerpo Monoclonal Biespecífico Humanizado / Mimético Funcional del Factor VIII' },
      indications: {
        pt: ['Profilaxia de rotina para prevenir ou reduzir a frequência de episódios de sangramento em pacientes de todas as idades com Hemofilia A (deficiência congênita de Fator VIII) COM ou SEM inibidores de Fator VIII'],
        es: ['Profilaxis de rutina para prevenir episodios de sangrado en pacientes con Hemofilia A con o sin inhibidores de factor VIII de por vida']
      },
      commercialNames: { br: ['Hemlibra'], ar: ['Hemlibra'] },
      presentation: { pt: ['Frasco-ampola injetável Subcutâneo 30 mg/1 mL, 60 mg/0,4 mL e 150 mg/1 mL'], es: ['Vial inyectable Subcutáneo de 30 mg, 60 mg y 150 mg'] },
      mechanism: {
        pt: 'A Ponte Humana Artificial. É um anticorpo biológico de engenharia cirúrgica revolucionária chamado **Biespecífico**. Ele possui dois braços de agarre diferentes: um braço segura o Fator IXa e o outro braço segura o Fator X. Ao aproximar os dois fatores fisicamente no espaço, ele imita perfeitamente o papel tridimensional do Fator VIII que está faltando no hemofílico. A cascata corre, a trombina explode e o paciente fica protegido de sangramentos com uma picada na pele a cada duas semanas.',
        es: 'Anticuerpo monoclonal biespecífico humanizado (IgG4). Su diseño estructural posee dos sitios de unión asimétricos: un brazo se une al Factor IX activado (FIXa) y el otro brazo se une al Factor X (FX). Al posicionarlos en la orientación espacial exacta, mimetiza la función cofactorial del Factor VIII ausente, restaurando la cascada de coagulación.'
      },
      dose: {
        adult: {
          pt: 'Fase de Ataque (Indução): 3 mg/kg via SUBCUTÂNEA, UMA VEZ POR SEMANA, nas primeiras 4 semanas. Fase de Manutenção Crônica: 1,5 mg/kg via Subcutânea uma vez por semana; OU 3 mg/kg a cada 2 semanas; OU 6 mg/kg a cada 4 semanas (uma vez por mês) via pele.',
          es: 'Dosis de Carga: 3 mg/kg vía SUBCUTÁNEA, UNA VEZ POR SEMANA durante las primeras 4 semanas. Mantenimiento: 1,5 mg/kg una vez por semana, o 3 mg/kg cada 2 semanas, o 6 mg/kg cada 4 semanas.'
        },
        pediatric: {
          pt: 'Aprovado desde recém-nascidos e lactantes: mesmo esquema de indução (3mg/kg) e manutenção ajustado milimetricamente pelo peso da criança.',
          es: 'Aprobado en todas las edades desde el neonato bajo el mismo cálculo de dosis por kilo.'
        }
      },
      administration: { pt: ['EXCLUSIVAMENTE INJEÇÃO SUBCUTÂNEA DOMICILIAR OU AMBULATORIAL (NUNCA VEICULAR NA VEIA). Retirar o frasco da geladeira 20 minutos antes de aplicar. O volume máximo por picada na pele é de 2 mL; se a dose calculada exigir mais que 2 mL, fracionar em duas picadas em locais diferentes.'], es: ['Inyección Subcutánea exclusiva. Prohibido por vía intravenosa. Si el volumen total calculado excede los 2 mL, dividir la dosis en dos sitios de inyección anatómicos distintos.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste de dose, anticorpo metabolizado por degradação biológica celular.', es: 'Sin necesidad of ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste de dose.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Reações dolorosas locais no sítio de injeção cutânea (eritema, prurido)', 'Cefaleia de padrão leve', 'Artralgia transiente'], es: ['Eritema, induración o dolor en el sitio de inyección', 'Cefalea', 'Artralgias'] },
      dangerousAdverseEffects: { pt: ['MICROANGIOPATIA TROMBÓTICA (MAT - destruição de hemácias com entupimento generalizado de vasos e rins se usado de forma errada com Complexo Protrombínico Ativado — VER MOTOR CAIXA PRETA)', 'Tromboembolismo venoso com infarto renal'], es: ['MICROANGIOPATÍA TROMBÓTICA (MAT) fulminante (con aPCC)', 'Tromboembolismo venoso extenso con necrosis tisular'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade conhecida ao emicizumabe ou componentes do Hemlibra'] },
        relative: { pt: ['Uso concomitante com agentes de bypass como Complexo Protrombínico Ativado (Feiba) — PERIGO EXTREMO (VER INTERAÇÕES)'] }
      },
      safetyFlags: {
        warning: { pt: 'A CAIXA PRETA DA COMBINAÇÃO PROIBIDA COM FEIBA (RISCO DE MAT): O Emicizumabe carrega um alerta Caixa Preta gravíssimo do FDA. Se o paciente que usa Hemlibra apresentar um sangramento e o médico na emergência aplicar o Complexo Protrombínico Ativado (Feiba) em doses > 100 UI/kg, ocorre uma super-coagulação violenta. O paciente desenvolve Microangiopatia Trombótica (MAT): os vasos entopem, as hemácias quebram e os rins param de funcionar na hora. Use apenas Fator VIIa se houver sangramento.', es: 'ALERTA DE CAJA NEGRA (MICROANGIOPATÍA TROMBÓTICA CON aPCC): Está terminantemente PROHIBIDO coadministrar Hemlibra junto con Complexo Protrombínico Activado (aPCC / Feiba) a dosis > 100 UI/kg. La combinación dispara una hipercoagulabilidad fulminante que induce MAT (destrucción de eritrocitos y falla multiorgánica masiva). Utilice Fator VIIa en emergencias.' },
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true
      },
      references: {
        pt: 'HAVEN Trials (1 a 4 - Emicizumab in Hemophilia A - NEJM 2017); FDA Boxed Warning Hemlibra; Diretriz de Hemofilia do Ministério da Saúde.',
        es: 'HAVEN Trials (NEJM 2017); FDA Boxed Warning; Guías del Manejo de la Hemofilia del Ministerio de Salud de la Nación.'
      }
    }

}); /* fim Object.assign HEMATOLOGIA_DRUGS_DB — BUILD 450 (hidroxocobalamina + filgrastim + pegfilgrastim + eltrombopague + romiplostim + fator_viia + emicizumabe — Hemostasia Avançada, Fatores e Estimuladores de Medula) */

})();
