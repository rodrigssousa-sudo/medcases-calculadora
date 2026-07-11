/* ============================================================
   MedCases Pro — Módulo: REUMATOLOGIA
   Expõe: window.REUMATOLOGIA_DRUGS_DB

   BUILD 451 — Lote 1 (Inauguração Oficial do Módulo)
   certolizumabe_pegol, abatacepte, rituximabe, tocilizumabe
   ── IMUNOBIOLÓGICOS MODIFICADORES DE DOENÇA (DMARDs BIOLÓGICOS) ──
   ============================================================ */

(function () {
  'use strict';
  if (typeof window.REUMATOLOGIA_DRUGS_DB !== 'object' || window.REUMATOLOGIA_DRUGS_DB === null || Array.isArray(window.REUMATOLOGIA_DRUGS_DB)) {
    window.REUMATOLOGIA_DRUGS_DB = {};
  }
  if (typeof window.REUMATOLOGIA_DRUGS_DB !== 'object' || window.REUMATOLOGIA_DRUGS_DB === null) return;

  Object.assign(window.REUMATOLOGIA_DRUGS_DB, {

  // ── IMUNOBIOLÓGICOS MODIFICADORES DE DOENÇA (DMARDs BIOLÓGICOS) ──

/* ── CERTOLIZUMABE PEGOL (981) ──────────────────────────────────────── */
    "certolizumabe_pegol": {
      name: { pt: 'Certolizumabe Pegol', es: 'Certolizumab Pegol' },
      category: 'reumatologia',
      class: { pt: 'Anticorpo Monoclonal Humano Anti-TNF-alfa Peguilado / Isento de Região Fc', es: 'Anticuerpo Monoclonal Humano Anti-TNF-alfa Pegilado / Libre de Región Fc' },
      indications: {
        pt: ['Artrite Reumatóide ativa moderada a grave em adultos', 'Artrite Psoríaca e Espondilite Anquilosante', 'Doença de Crohn ativa moderada a grave refratária', 'Estratégia preferencial em reumatologia para gestantes que necessitam de anti-TNF'],
        es: ['Artritis Reumatoide activa moderada a severa', 'Artritis Psoriásica y Espondilitis Anquilosante', 'Enfermedad de Crohn activa refractaria', 'De elección en mujeres embarazadas que requieren terapia anti-TNF']
      },
      commercialNames: { br: ['Cimzia'], ar: ['Cimzia'] },
      presentation: { pt: ['Seringa preenchida Injetável Subcutânea 200 mg/1 mL'], es: ['Jeringa prellenada Subcutánea 200 mg/1 mL'] },
      mechanism: {
        pt: 'O Anti-TNF Bloqueador de Barreira Placentária. É um fragmento Fab\' de anticorpo humanizado purificado combinado com polietilenoglicol (Pegilação). Sua grande jogada de bioengenharia: ele NÃO POSSUI a região Fc (o corpo do anticorpo comum). Como não tem região Fc, ele é organicamente incapaz de se ligar ao receptor Fc neonatal (FcRn) da placenta. Isso proíbe o remédio de atravessar a barreira placentária para o feto, protegendo o bebê de nascer imunossuprimido.',
        es: 'Fragmento Fab\' de un anticuerpo monoclonal humanizado neutralizante del TNF-alfa, conjugado covalentemente con polietilenglicol. Al carecer por completo de la región Fc fija, no interactúa con el receptor Fc neonatal (FcRn) placentario, impidiendo mecánicamente la transferencia percutánea transplacentaria del fármaco hacia el feto en desarrollo.'
      },
      dose: {
        adult: {
          pt: 'Indução (Semana 0, 2 e 4): 400 mg via Subcutânea (aplicar duas injeções de 200 mg no mesmo dia em locais diferentes). Manutenção: 200 mg via Subcutânea a cada 2 semanas, ou 400 mg a cada 4 semanas (uma vez ao mês).',
          es: 'Inducción (Semanas 0, 2 y 4): 400 mg vía Subcutánea (2 jeringas de 200 mg). Mantenimiento posterior: 200 mg vía SC cada 2 semanas o 400 mg cada 4 semanas.'
        },
        pediatric: {
          pt: 'Segurança e eficácia não estabelecidas em menores de 18 anos.',
          es: 'No recomendado en niños.'
        }
      },
      administration: { pt: ['Uso subcutâneo domiciliar ou ambulatorial. Retirar da geladeira 30 minutos antes da aplicação. Injetar no abdômen ou na coxa. Caso a dose seja de 400mg, aplicar as duas seringas consecutivas variando o quadrante ou lado da pele.'], es: ['Inyección Subcutánea. Alternar sitios de punción en el abdomen o muslo. Dejar atemperar 30 minutos antes para disminuir la sensación de escozor.'] },
      renalAdjustment: { required: false, message: { pt: 'A peguilação altera o clearance renal, mas não há dados que exijam ajuste em disfunção leve ou moderada.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Não estudado em insuficiência hepática severa primária.', es: 'Sin datos disponibles.' } },
      commonAdverseEffects: { pt: ['Infecções bacterianas do trato urinário e respiratório alto', 'Reações eritematosas leves com prurido no local da injeção', 'Cefaleia e náuseas'], es: ['Infecciones respiratorias y urinarias recurrentes', 'Eritema o dolor local en el sitio de inyección', 'Cefalea'] },
      dangerousAdverseEffects: { pt: ['Reativação agressiva de Tuberculose Latente (Miliar/Disseminada)', 'Linfomas e outras neoplasias oportunistas hematológicas (Alerta de Classe de Caixa Preta)', 'Exacerbação de quadros de Esclerose Múltipla central'], es: ['Reactivación de Tuberculosis Latente', 'Neoplasias malignas y Linfomas de clase (Caja Negra)', 'Desmielinización central'] },
      contraindications: {
        absolute: { pt: ['Tuberculose ativa ou infecções oportunistas sistêmicas clinicamente graves (Sepse, abscessos)', 'Insuficiência Cardíaca moderada a grave NYHA III/IV'], es: ['Tuberculosis activa o infecciones severas no controladas', 'Insuficiencia cardíaca avanzada NYHA III/IV'] },
        relative: { pt: ['Rastreio epidemiológico duvidoso para micobactérias (PPD/IGRA obrigatórios antes da indução)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O ANTI-TNF PRIVILEGIADO DA GESTANTE: Se uma mulher jovem com Artrite Reumatóide grave ou Crohn engravidar e precisar manter um biológico potente para a doença não reativar, o Certolizumabe (Cimzia) é a escolha padrão-ouro unânime. Sua ausência de cauda Fc impede que ele entre no sangue do feto. O bebê nasce com a imunidade perfeita e pode receber o calendário vacinal comum de vírus vivo sem risco.', es: 'EL ANTI-TNF DE ELECCIÓN EN EL EMBARAZO: Debido a su ingeniería molecular sin porción Fc, es el único anti-TNF que no cruza la placenta de forma activa durante el segundo y tercer trimestre. Permite controlar la enfermedad reumática materna sin inducir inmunosupresión sistémica en el recién nacido.' }
      },
      references: {
        pt: 'CRADLE Trial (Certolizumab safety in pregnancy and breastfeeding); Guidelines da Sociedade Brasileira de Reumatologia (SBR); FDA Label Cimzia.',
        es: 'CRADLE Trial; Directrices de la Sociedad Argentina de Reumatología (SAR) para uso de biológicos en el embarazo; CIMA.'
      }
    },

/* ── ABATACEPTE (982) ───────────────────────────────────────────────── */
    "abatacepte": {
      name: { pt: 'Abatacepte', es: 'Abatacept' },
      category: 'reumatologia',
      class: { pt: 'Modulador de Co-estimulação de Linfócitos T / Proteína de Fusão CTLA-4-Ig', es: 'Modulador de Co-estimulación de Linfocitos T / Proteína de Fusión CTLA-4-Ig' },
      indications: {
        pt: ['Artrite Reumatóide ativa moderada a grave em adultos refratária a metotrexato e anti-TNF', 'Artrite Psoríaca ativa', 'Artrite Idiopática Juvenil (AIJ) poliarticular ativa'],
        es: ['Artritis Reumatoide activa moderada a severa con respuesta inadecuada a DMARDs o anti-TNF', 'Artritis Idiopática Juvenil']
      },
      commercialNames: { br: ['Orencia'], ar: ['Orencia'] },
      presentation: { pt: ['Frasco-ampola com pó liofilizado IV 250 mg para infusão', 'Seringa preenchida Subcutânea 125 mg/1 mL'], es: ['Vial IV con polvo liofilizado 250 mg', 'Jeringa prellenada SC 125 mg'] },
      mechanism: {
        pt: 'O Cortador de Sinal de Linfócito. O Abatacepte é uma proteína de fusão solúvel de bioengenharia que junta o domínio extracelular do CTLA-4 humano com a porção Fc da IgG1. Ele atua bloqueando o "segundo sinal" de ativação dos linfócitos T. Ele se liga de forma competitiva às proteínas CD80 e CD86 na superfície das células apresentadoras de antígenos, impedindo-as de se acoplarem ao CD28 do linfócito T. Sem esse aperto de mão molecular, o linfócito T fica cego e desliga o ataque autoimune contra a articulação.',
        es: 'Proteína de fusión soluble recombinante que une el dominio extracelular de la proteína humana CTLA-4 con una región Fc de IgG1. Actúa como un inhibidor selectivo de la coestimulación de linfocitos T: se une específicamente a los ligandos CD80 y CD86 de las células presentadoras de antígenos, bloqueando la interacción con el receptor CD28 del linfocito T y apagando la sinapsis inmunológica.'
      },
      dose: {
        adult: {
          pt: 'Ataque/Infusão IV: Dose baseada no peso corporal (< 60 kg: 500 mg; 60-100 kg: 750 mg; > 100 kg: 1.000 mg IV) nas semanas 0, 2 e 4, e depois a cada 4 semanas. Manutenção Subcutânea Alternativa: 125 mg via Subcutânea, UMA VEZ POR SEMANA (pode iniciar direto ou após a carga IV).',
          es: 'Infusión IV (Carga): Ajustado por peso corporal (ej: 750 mg IV si pesa entre 60-100 kg) en las semanas 0, 2 y 4; luego cada 28 días. Opción SC: 125 mg vía Subcutánea, UNA VEZ POR SEMANA.'
        },
        pediatric: {
          pt: 'Artrite Juvenil (AIJ) >= 6 anos: Dose calculada por peso corporal (10 mg/kg para pacientes < 75 kg) via infusão IV a cada 4 semanas.',
          es: 'Aprobado en AIJ >= 6 años: 10 mg/kg IV cada 4 semanas en infusión hospitalaria.'
        }
      },
      administration: { pt: ['Infusão IV hospitalar lenta ao longo de 30 minutos. O pó de 250mg deve ser reconstituído estritamente com a seringa sem agulha de silicone que acompanha o frasco para evitar descamação de partículas proteicas. Correr em linha exclusiva com filtro de baixa ligação proteica.'], es: ['Infusión Intravenosa hospitalaria lenta en 30 minutos. Utilizar el filtro de baja unión a proteínas provisto de fábrica. No agitar el vial.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste, não eliminado por filtragem renal comum.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Não estudado em insuficiência hepática, monitorar enzimas basais.', es: 'Sin datos disponibles.' } },
      commonAdverseEffects: { pt: ['Cefaleia e tontura leve', 'Náuseas e dor abdominal episódica', 'Infecções respiratórias altas (rinorreia, congestão nasal)', 'Hipertensão arterial'], es: ['Cefalea', 'Nasofaringitis y tos', 'Náuseas', 'Aumento transitorio de la presión arterial'] },
      dangerousAdverseEffects: { pt: ['Exacerbações agudas severas de DPOC com insuficiência respiratória (VER ALERTAS)', 'Reativação de Hepatite B crônica ou Tuberculose Latente', 'Infecções oportunistas bacterianas fulminantes'], es: ['Exacerbación severa de EPOC con disnea obstructiva crítica', 'Reactivación de Hepatitis B o Tuberculosis latente'] },
      contraindications: {
        absolute: { pt: ['Infecções ativas graves sistêmicas ou sepse', 'Uso concomitante e simultâneo com bloqueadores de TNF (Infliximabe) ou inibidores de JAK (risco extremo de infecção oportunista fatal)'], es: ['Infecciones graves activas', 'Co-administración simultánea con agentes anti-TNF o Anakinra por inmunosupresión prohibitiva'] },
        relative: { pt: ['Pacientes com DPOC / Doença Pulmonar Obstrutiva Crônica severa crônica'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O PERIGO OCULTO NO PACIENTE COM DPOC (O TRAVAMENTO PULMONAR): O Abatacepte altera os mecanismos de defesa das mucosas respiratórias. Em pacientes que já sofrem de DPOC crônico (enfisema ou bronquite crônica de fumante), o Orencia dispara de forma assustadora a incidência de crises de broncoespasmo, falta de ar severa e exacerbações com infecção pulmonar. Monitore a função pulmonar com o pneumologista.', es: 'ALERTA EN PACIENTES CON EPOC: Presenta una tasa inusualmente alta de eventos adversos respiratorios en pacientes con Enfermedad Pulmonar Obstructiva Crónica. Estos sujetos desarrollan disnea grave, sibilancias y neumonías bacterianas recurrentes. Evalúe alternativas terapéuticas.' }
      },
      references: {
        pt: 'AIM Trial (Abatacept in Inadequate Response to Methotrexate); ATTAIN Trial; Diretrizes da Sociedade Brasileira de Reumatologia 2024.',
        es: 'AIM Trial; ATTAIN Trial; Guías de Tratamiento de la Artritis Reumatoide de la Sociedad Argentina de Reumatología (SAR).'
      }
    },

/* ── RITUXIMABE (983) ───────────────────────────────────────────────── */
    "rituximabe": {
      name: { pt: 'Rituximabe', es: 'Rituximab' },
      category: 'reumatologia',
      class: { pt: 'Anticorpo Monoclonal Quimérico Anti-CD20 / Destruidor de Linfócitos B', es: 'Anticuerpo Monoclonal Quimérico Anti-CD20 / Depletor de Linfocitos B' },
      indications: {
        pt: ['Artrite Reumatóide ativa grave em adultos associado ao metotrexato (especialmente em soropositivos com falha a anti-TNF)', 'Vasculites graves associadas a ANCA (Granulomatose com Poliangiite / Wegener e Poliangiite Microscópica)', 'Linfoma Não-Hodgkin e Leucemia Linfoide Crônica', 'Tratamento de surtos de Pênfigo Vulgar grave'],
        es: ['Artritis Reumatoide severa refractaria en pacientes seropositivos', 'Vasculitis asociadas a ANCA (Granulomatosis de Wegener)', 'Linfoma No Hodgkin y Leucemia Linfática Crónica', 'Pénfigo Vulgar']
      },
      commercialNames: { br: ['MabThera', 'Riximyo', 'Truxima'], ar: ['MabThera', 'Reditux', 'Truxima Argentina'] },
      presentation: { pt: ['Frasco-ampola IV para infusão contendo 100 mg/10 mL e 500 mg/50 mL'], es: ['Vial para infusión IV de 100 mg/10 mL y 500 mg/50 mL'] },
      mechanism: {
        pt: 'O Exterminador de Linfócitos B. É um anticorpo monoclonal quimérico direcionado de forma implacável contra o antígeno **CD20**, uma proteína expressa na superfície de todos os linfócitos B (desde os pré-B até os linfócitos B maduros, poupando os plasmócitos). Ao se ligar no CD20, ele ativa o próprio sistema complemento do paciente e recruta células NK. Ocorre a lise celular por citotoxicidade (o remédio limpa e zera todos os linfócitos B do sangue), parando a fabricação de anticorpos destrutivos por até 6 a 12 meses.',
        es: 'Anticuerpo monoclonal quimérico ratón/humano que se une específicamente al antígeno transmembrana CD20 en linfocitos B pre-B y maduros. Al acoplarse, desencadena citotoxicidad mediada por complemento (CDC) y citotoxicidad celular dependiente de anticuerpos (ADCC), provocando una depleción absoluta y masiva de linfocitos B periféricos.'
      },
      dose: {
        adult: {
          pt: 'Artrite Reumatóide / Vasculite ANCA: 1.000 mg (1 g) via INTRAVENOSA lenta, repetido exatamente após 14 dias (Dose total do ciclo: 2 g). O ciclo pode ser repetido a cada 6 meses com base na contagem de células CD19/CD20 ou retorno dos sintomas inflamatórios.',
          es: 'Artritis Reumatoide: 1.000 mg vía INTRAVENOSA lenta en el Día 1, seguido de una segunda dosis de 1.000 mg el Día 15 (Ciclo de 2 g). Repetir cada 6 meses según clínica.'
        },
        pediatric: {
          pt: 'Aprovado a partir de 2 anos para Vasculites ANCA ativas graves na dose de indução de 375 mg/m² de área de superfície corporal via IV, uma vez por semana por 4 semanas.',
          es: 'Aprobado en pediatría >= 2 años para vasculitis ANCA a dosis de 375 mg/m² IV semanal por 4 tomas.'
        }
      },
      administration: { pt: ['EXCLUSIVAMENTE INFUSÃO INTRAVENOSA HOSPITALAR ULTRA-LENTA EM BOMBA DE INFUSÃO. Exige OBRIGATORIAMENTE uma pré-medicação 30 minutos antes com Corticoide (Metilprednisolona 100mg IV), Antitérmico (Paracetamol) e Anti-histamínico para mitigar a Síndrome de Liberação de Citocinas que pode causar óbito imediato (VER ALERTAS).'], es: ['EXCLUSIVAMENTE INFUSIÓN INTRAVENOSA HOSPITALARIA BAJO ESTRICTO PROTOCOLO. Requiere premedicación obligatoria 30 minutos antes con Metilprednisolona 100 mg IV, Paracetamol y un antihistamínico (Prometazina) para evitar shock infusional.'] },
      renalAdjustment: { required: false, message: { pt: 'Não eliminado pelos rins, sem necessidade de ajuste de dose em renais crônicos.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste estrito, monitorar marcadores biológicos virais.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['SÍNDROME INFUSIONAL AGUDA (calafrios violentos, febre alta, tremores, prurido e rubor na primeira hora de gotejamento)', 'Astenia e fadiga marcante', 'Infecções respiratórias altas'], es: ['SÍNDROME DE LIBERACIÓN DE CITOCINAS INFUSIONAL (Fiebre, escalofríos, temblores y sofocos en el 50% de las primeras dosis)', 'Astenia y cefalea'] },
      dangerousAdverseEffects: { pt: ['REATIVAÇÃO FULMINANTE DE HEPATITE B OCULTA (Alerta Caixa Preta de insuficiência hepática crônica terminal pós-rituximabe)', 'LEUCOENCEFALOPATIA MULTIFOCAL PROGRESSIVA (PML - infecção cerebral fatal pelo vírus JC que destrói a substância branca; causa demência rápida e paralisia)', 'Choque anafilático com colapso respiratório'], es: ['REACTIVACIÓN FULMINANTE DE HEPATITIS B (Caja Negra por necrosis hepática masiva)', 'LEUCOENCEFALOPATÍA MULTIFOCAL PROGRESIVA (PML por reactivación del virus JC central mortal)', 'Broncoespasmo severo'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade conhecida ao rituximab ou a proteínas de roedores (camundongos)', 'Infecções bacterianas ou fúngicas sistêmicas ativas graves', 'Imunodeficiência severa primária ativa'], es: ['Hipersensibilidad a proteínas de roedor', 'Infecciones activas severas', 'Insuficiencia cardíaca avanzada NYHA IV'] },
        relative: { pt: ['Sorologia positiva para Hepatite B (HBsAg ou Anti-HBc reagentes) — EXIGE ANTIVIRAL PROFILÁTICO (VER MOTOR)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A CAIXA PRETA DA HEPATITE B E O VÍRUS JC (RITUXIMABE EXIGE LIMPEZA DE SOROLOGIA): O Rituximabe limpa os linfócitos B por meses. Se o paciente tiver o vírus da Hepatite B adormecido no corpo, o remédio desativa a vigilância imunológica, causando uma Hepatite B Fulminante letal. Adicionalmente, o vírus cerebral JC pode acordar e causar a PML, uma doença que derrete o cérebro do doente sem cura. É OBRIGATÓRIO rodar sorologias completas de Hepatite B antes de autorizar a infusão.', es: 'ALERTA DE CAJA NEGRA (RECONSTITUCIÓN HEPÁTICA Y PML): La depleción prolongada de linfocitos B abre una ventana de susceptibilidad crítica. Es obligatorio testear Hepatitis B (HBsAg/Anti-HBc) antes de infundir; los portadores inactivos desarrollan hepatitis fulminante mortal si no reciben Entecavir profiláctico de forma simultánea. Vigilar cambios neurológicos conductuales por riesgo de virus JC (PML).' }
      },
      references: {
        pt: 'REFLEX Trial (Rituximab in Rheumatoid Arthritis - NEJM 2006); RAVE Trial (Rituximab for ANCA-associated vasculitis); FDA Boxed Warnings MabThera.',
        es: 'REFLEX Trial (NEJM 2006); RAVE Trial (NEJM 2010); FDA Boxed Warning (Rituximab); Guías de Consenso de la SAR.'
      }
    },

/* ── TOCILIZUMABE (984) ──────────────────────────────────────────────── */
    "tocilizumabe": {
      name: { pt: 'Tocilizumabe', es: 'Tocilizumab' },
      category: 'reumatologia',
      class: { pt: 'Anticorpo Monoclonal Humanizado Anti-Receptor de Interleucina-6 (IL-6R) / Padrão-Ouro de Choque Citoquímico', es: 'Anticuerpo Monoclonal Humanizado Anti-Receptor de Interleucina-6 (IL-6R) / Antagonista de IL-6' },
      indications: {
        pt: ['Artrite Reumatóide ativa moderada a grave com falha a anti-TNF', 'Artrite Idiopática Juvenil (AIJ) sistêmica e poliarticular', 'Arterite de Células Gigantes (ACG) e Arterite de Takayasu', 'Tratamento de escolha da Síndrome de Liberação de Citocinas (SRC) induzida por terapia de células CAR-T ou sepse viral severa (COVID-19 grave de UTI)'],
        es: ['Artritis Reumatoide severa refractaria', 'Artritis Idiopática Juvenil sistémica', 'Arteritis de Células Gigantes', 'Tratamiento de elección en el Síndrome de Liberación de Citocinas (SRC) inducido por células CAR-T o neumonía viral grave con distrés']
      },
      commercialNames: { br: ['Actemra'], ar: ['Actemra'] },
      presentation: { pt: ['Frasco-ampola IV para infusão concentrado 80 mg/4 mL, 200 mg/10 mL e 400 mg/20 mL', 'Seringa preenchida Subcutânea 162 mg/0,9 mL'], es: ['Vial para infusión IV de 80 mg, 200 mg y 400 mg', 'Jeringa prellenada SC 162 mg'] },
      mechanism: {
        pt: 'O Extintor da Tempestade de Inflamação. É um anticorpo humanizado de IgG1 que se liga de forma cirúrgica tanto aos receptores solúveis quanto aos receptores ligados à membrana da Interleucina-6 (**IL-6**). A IL-6 é a citocina "comandante" que avisa o fígado para fabricar Proteína C Reativa (PCR) e ordena o ataque febril vascular sistêmico. Ao travar o receptor de IL-6, o Tocilizumabe apaga instantaneamente o fogo da inflamação sistêmica e interrompe a falência múltipla de órgãos induzida por vírus ou autoimunidade.',
        es: 'Anticuerpo monoclonal humanizado que se une específicamente a los receptores de Interleucina 6 (IL-6R) tanto solubles como de membrana. Bloquea de forma competitiva la señalización proinflamatoria de la IL-6, una citocina pleiotrópica clave en la patogenia de la inflamación articular, la fiebre central y el síncope febril destructivo endotelial.'
      },
      dose: {
        adult: {
          pt: 'Artrite Reumatóide / UTI (Síndrome de Citocinas): 8 mg/kg via INTRAVENOSA lenta hospitalar (Dose máxima de 800 mg por infusão única). Pode repetir uma segunda dose após 12-24h se o paciente continuar chocado na UTI. Versão de manutenção ambulatorial: 162 mg via Subcutânea a cada 1 ou 2 semanas.',
          es: 'Artritis / Tormenta de Citocinas (UTI): 8 mg/kg vía INTRAVENOSA hospitalaria lenta (infusión en 1 hora). Máximo absoluto: 800 mg por dosis. Opción ambulatoria SC: 162 mg vía Subcutánea semanal o quincenal.'
        },
        pediatric: {
          pt: 'Artrite Juvenil Sistêmica (AIJ) >= 2 anos: Peso < 30 kg: 12 mg/kg via IV a cada 2 semanas; Peso >= 30 kg: 8 mg/kg via IV a cada 2 semanas.',
          es: 'AIJ sistémica pediátrica (>= 2 años): 12 mg/kg IV si pesa < 30 kg, u 8 mg/kg IV si pesa >= 30 kg cada 14 días.'
        }
      },
      administration: { pt: ['Infusão Intravenosa diluída em exatamente 100 mL de Soro Fisiológico (NaCl 0,9%) e infundida ao longo de 60 minutos em ambiente fechado de terapia intensiva ou centro de infusão. NUNCA fazer em bolus direto. A versão subcutânea é de aplicação lenta na gordura da pele.'], es: ['Infusión IV diluida en 100 mL de solución fisiológica a pasar en 1 hora. No administrar en bolo directo. Monitoreo estrecho de neutrófilos e perfil lipídico obligatorio.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste de dose em disfunção renal leve ou moderada. Não estudado em ClCr < 15 mL/min.', es: 'Sin necesidad de ajuste en clearance > 15 mL/min.' } },
      hepaticAdjustment: { required: true, message: { pt: 'ALTAMENTE PERIGOSO PARA O FÍGADO. Causa elevação aguda de transaminases. É contraindicado iniciar o tratamento se o paciente tiver TGO ou TGP basais > 5 vezes o limite normal. Monitorar transaminases a cada infusão.', es: 'Contraindicado si las transaminasas basales superan 5 veces el límite normal por alto riesgo de falla hepática celular de clase.' } },
      commonAdverseEffects: { pt: ['Infecções respiratórias altas e sinusite', 'Hipertensão arterial sistêmica', 'Hipercolesterolemia severa (dispara o colesterol LDL rápido)', 'Cefaleia e reações cutâneas locais'], es: ['Infecciones de vías respiratorias', 'Hipertensión arterial', 'Hipercolesterolemia (elevación marcado de LDL y colesterol total)', 'Cefalea'] },
      dangerousAdverseEffects: { pt: ['PERFURAÇÃO GASTROINTESTINAL DE ALÇA (Alerta crítico em pacientes com histórico de diverticulite; o bloqueio de IL-6 impede o intestino de cicatrizar micro-úlceras, rasgando o cólon na UTI)', 'Neutropenia e Trombocitopenia severas por depressão medular transitória'], es: ['PERFORACIÓN GASTROINTESTINAL ESPONTÁNEA (Especialmente en pacientes con diverticulitis activa por parálisis del mecanismo de reparación celular colónica)', 'Neutropenia crítica'] },
      contraindications: {
        absolute: { pt: ['Infecções ativas graves não controladas ou sepse bacteriana purulenta', 'Histórico ou suspeita de Diverticulite ativa ou úlcera intestinal perfurada'], es: ['Infecciones bacterianas purulentas graves activas', 'Antecedente de diverticulitis complicada o perforación intestinal previa'] },
        relative: { pt: ['Contagem de neutrófilos basal < 2.000/mm³ ou plaquetas < 100.000/mm³ (exige adiar a infusão)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O ALERTA DA PERFURAÇÃO GASTRICA OCULTA (O BLOQUEIO DA DIVERTICULITE): O Tocilizumabe possui um perigo cirúrgico bizarro: ele impede a sinalização da dor e da febre inflamatória no abdômen. Se o paciente tiver uma inflamação no intestino (Diverticulite) e tomar o Actemra, o intestino pode PERFURAR e rasgar de forma silenciosa na UTI, sem que o paciente sinta dor ou faça febre alta, mimetizando abdômen agudo tardio. Evite o uso em diverticulopatas graves.', es: 'ALERTA DE PERFORACIÓN INTESTINAL SILENCIOSA: Al enmascarar por completo los síntomas de alarma inflamatorios (cancela la fiebre, el dolor abdominal y la PCR), una diverticulitis concomitante puede progresar hacia una peritonitis purulenta perforada de forma totalmente asintomática. Contraindicado en enfermedad diverticular severa.' }
      },
      references: {
        pt: 'OPTION Trial (Tocilizumab efficacy in RA); RECOVERY Trial (Tocilizumab in severe COVID-19 - Lancet 2021); FDA Warnings Actemra.',
        es: 'RECOVERY Trial (Lancet 2021); OPTION Trial; Ficha Técnica Actemra (Agencia Europea del Medicamento); Guías SAR.'
      }
    }

  }); /* fim Object.assign REUMATOLOGIA_DRUGS_DB — BUILD 451 (certolizumabe_pegol + abatacepte + rituximabe + tocilizumabe — Inauguração Módulo Reumatologia: DMARDs Biológicos) */

})();
