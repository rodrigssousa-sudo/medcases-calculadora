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

})();
