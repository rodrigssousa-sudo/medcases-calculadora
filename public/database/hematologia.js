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

})();
