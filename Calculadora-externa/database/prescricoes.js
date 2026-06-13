/* ============================================================
   MedCases Pro — Módulo: PRESCRIÇÕES CLÍNICAS BILÍNGUES
   Expõe: window.PRESCRICOES_DB  (Array)
   Estrutura de cada entrada:
   {
     id        : string único (kebab-case)
     specialty : 'emerg' | 'cardio' | 'infecto' | 'gastro' | 'pneumo' | 'neuro'
     icon      : emoji
     tags      : string[]
     pt        : { title, via, preview, text }
     es        : { title, via, preview, text }
   }
   Isolado em IIFE — não polui escopo global além de PRESCRICOES_DB.
   Revisado por Bruno + Gemini — 2026-06-12
   61 protocolos bilingues PT-ES
============================================================ */
(function () {

  window.PRESCRICOES_DB = window.PRESCRICOES_DB || [];

  const _rx = [

    /* ═══════════════════════════════════════════════
       EMERGÊNCIAS
    ═══════════════════════════════════════════════ */
    {
      id: 'sepse-bundles',
      specialty: 'emerg',
      icon: '',
      tags: ['Sepse', 'Antibiótico', 'UTI'],
      pt: {
        title: 'Sepse — Bundle 1h (Surviving Sepsis)',
        via: 'IV urgente',
        preview: 'Colher hemocultura → Antibiótico empírico → Lactato → Reposição volêmica 30 mL/kg',
        text:
`SEPSE / CHOQUE SÉPTICO — BUNDLE 1 HORA

1. COLHER ANTES DO ATB:
   - Hemoculturas (2 pares) + Urina com antibiograma
   - Lactato sérico inicial

2. ANTIBIOTICOTERAPIA EMPÍRICA (iniciar em até 1h):
   - Piperacilina-Tazobactam 4,5g IV 8/8h
     (ou Meropeném 1g IV 8/8h se risco MDR ou sepse grave)
   - Adicionar Vancomicina 25 mg/kg IV se suspeita MRSA

3. RESSUSCITAÇÃO VOLÊMICA:
   - SF 0,9% ou Ringer Lactato 30 mL/kg em 3h
   - Reavaliar com POCUS ou PVC após cada bolus de 500 mL

4. VASOPRESSORES (se PAM < 65 após volemia):
   - Noradrenalina 0,1–0,3 mcg/kg/min IV (titular)
   - Meta: PAM ≥ 65 mmHg

5. MONITORIZAÇÃO:
   - Lactato de controle em 2h (meta: redução > 10%)
   - Diurese-hora (meta > 0,5 mL/kg/h)
   - Balanço a cada 6h

ATENCAO: AJUSTAR conforme foco identificado e antibiograma.`
      },
      es: {
        title: 'Sepsis — Bundle 1h (Surviving Sepsis)',
        via: 'IV urgente',
        preview: 'Tomar hemocultivo → Antibiótico empírico → Lactato → Reposición volémica 30 mL/kg',
        text:
`SEPSIS / SHOCK SÉPTICO — BUNDLE 1 HORA

1. TOMAR ANTES DEL ATB:
   - Hemocultivos (2 pares) + Urocultivo con antibiograma
   - Lactato sérico inicial

2. ANTIBIOTICOTERAPIA EMPÍRICA (iniciar en menos de 1h):
   - Piperacilina-Tazobactam 4,5g IV cada 8h
     (o Meropenem 1g IV cada 8h si hay riesgo de MDR o sepsis grave)
   - Añadir Vancomicina 25 mg/kg IV si se sospecha de MRSA

3. REPOSICIÓN VOLÉMICA:
   - SS 0,9% o Ringer Lactato 30 mL/kg en 3h
   - Reevaluar con POCUS o PVC tras cada bolo de 500 mL

4. VASOPRESORES (si PAM < 65 tras volemia):
   - Noradrenalina 0,1–0,3 mcg/kg/min IV (titular)
   - Meta: PAM ≥ 65 mmHg

5. MONITORIZACIÓN:
   - Lactato de control a las 2h (meta: reducción > 10%)
   - Diuresis horaria (meta > 0,5 mL/kg/h)
   - Balance hídrico cada 6h

ATENCAO: AJUSTAR según el foco identificado y el antibiograma.`
      }
    },

    {
      id: 'anafilaxia',
      specialty: 'emerg',
      icon: '',
      tags: ['Anafilaxia', 'Emergência', 'Adrenalina'],
      pt: {
        title: 'Anafilaxia — Tratamento de Emergência',
        via: 'IM / IV',
        preview: 'Adrenalina IM + Decúbito dorsal + O₂ + Acesso venoso + Hidrocortisona',
        text:
`ANAFILAXIA — PROTOCOLO DE EMERGÊNCIA

1. ADRENALINA (PRIORIDADE MÁXIMA):
   - Adrenalina 0,3–0,5 mg IM (face anterolateral da coxa)
   - Pode repetir a cada 5–15 min (máx. 3 doses)
   - Se choque refratário: Adrenalina 0,1–0,5 mcg/kg/min IV

2. POSICIONAMENTO:
   - Decúbito dorsal com MMII elevados
   - Sentado se dispneia grave

3. OXIGENOTERAPIA:
   - O₂ 10–15 L/min máscara com reservatório

4. ACESSO VENOSO + VOLUME:
   - SF 0,9% 1–2L IV em bolus (adulto)
   - Repetir conforme PA e perfusão

5. ANTI-HISTAMÍNICO + CORTICOIDE:
   - Difenidramina 50 mg IV lento (ou IM)
   - Hidrocortisona 200–500 mg IV
   (Atenção: não substituem a adrenalina!)

6. BRONCOESPASMO REFRATÁRIO:
   - Salbutamol 2,5–5 mg inalatório (cada 20 min)

7. MONITORIZAR: ECG, SatO₂, PA — por ≥ 4–8h (risco bifásico)`
      },
      es: {
        title: 'Anafilaxia — Tratamiento de Emergencia',
        via: 'IM / IV',
        preview: 'Adrenalina IM + Decúbito supino + O₂ + Acceso venoso + Hidrocortisona',
        text:
`ANAFILAXIA — PROTOCOLO DE EMERGENCIA

1. ADRENALINA (PRIORIDAD MÁXIMA):
   - Adrenalina 0,3–0,5 mg IM (cara anterolateral del muslo)
   - Puede repetirse cada 5–15 min (máx. 3 dosis)
   - Si hay shock refractario: Adrenalina 0,1–0,5 mcg/kg/min IV

2. POSICIONAMIENTO:
   - Decúbito supino con miembros inferiores elevados
   - Sentado si presenta disnea grave

3. OXIGENOTERAPIA:
   - O₂ 10–15 L/min por mascarilla con reservorio

4. ACCESO VENOSO + VOLUMEN:
   - SS 0,9% 1–2L IV en bolo (adulto)
   - Repetir según PA y perfusión

5. ANTIHISTAMÍNICO + CORTICOIDE:
   - Difenhidramina 50 mg IV lento (o IM)
   - Hidrocortisona 200–500 mg IV
   (Atención: ¡no sustituyen a la adrenalina!)

6. BRONCOESPASMO REFRACTARIO:
   - Salbutamol 2,5–5 mg inhalatorio (cada 20 min)

7. MONITORIZAR: ECG, SatO₂, PA — por ≥ 4–8h (riesgo bifásico)`
      }
    },

    {
      id: 'pcr-adulto',
      specialty: 'emerg',
      icon: '',
      tags: ['PCR', 'Reanimação', 'ACLS'],
      pt: {
        title: 'PCR — Algoritmo ACLS Adulto',
        via: 'IV / IO',
        preview: 'RCP 30:2 → Desfibrilar FV/TV → Adrenalina 1mg IV → Amiodarona 300mg',
        text:
`PCR — PROTOCOLO ACLS ADULTO

RITMOS CHOCÁVEIS (FV / TVSP):
1. RCP 30:2 imediata — compressões 5–6 cm, 100–120/min
2. Desfibrilar: 200J bifásico → retomar RCP 2 min
3. Adrenalina 1mg IV/IO a cada 3–5 min (após 2º choque)
4. Amiodarona 300 mg IV bolus (FV/TV refratária)
   - 2ª dose: 150 mg IV se necessário
5. Repetir: choque → RCP 2 min → reavaliação

RITMOS NÃO CHOCÁVEIS (AESP / Assistolia):
1. RCP contínua
2. Adrenalina 1mg IV/IO a cada 3–5 min (imediato)
3. Tratar causas reversíveis (5H/5T):
   Hipóxia, Hipovolemia, H⁺ (acidose), Hipo/Hipercalemia,
   Hipotermia | Tamponamento, Tensão (pneumotórax),
   Trombose coronária, Trombose pulmonar, Tóxicos

VIA AÉREA:
- Intubação orotraqueal ou DEA (não interromper compressões)
- Ventilação 10 x/min após intubação (sem pausas para ventilação)

REVERSÃO (ROSC):
- Pós-PCR: O₂ titulado SatO₂ 94–98%, PA sistólica > 90 mmHg
- Controle temperatura alvo: 32–36°C por 24h se comatoso`
      },
      es: {
        title: 'PCR — Algoritmo ACLS Adulto',
        via: 'IV / IO',
        preview: 'RCP 30:2 → Desfibrilar FV/TV → Adrenalina 1mg IV → Amiodarona 300mg',
        text:
`PARO CARDIORRESPIRATORIO (PCR) — PROTOCOLO ACLS ADULTO

RITMOS DESFIBRILABLES (FV / TVSP):
1. RCP 30:2 inmediata — compresiones de 5–6 cm, 100–120/min
2. Desfibrilar: 200J bifásico → reanudar RCP por 2 min
3. Adrenalina 1mg IV/IO cada 3–5 min (tras el 2º choque)
4. Amiodarona 300 mg IV en bolo (FV/TV refractaria)
   - 2ª dosis: 150 mg IV si es necesario
5. Repetir: choque → RCP 2 min → reevaluación

RITMOS NO DESFIBRILABLES (AESP / Asistolia):
1. RCP continua
2. Adrenalina 1mg IV/IO cada 3–5 min (de inmediato)
3. Tratar causas reversibles (5H / 5T):
   Hipoxia, Hipovolemia, Hidrogeniones (acidosis), Hipo/Hiperpotasemia,
   Hipotermia | Taponamiento cardíaco, Neumotórax a tensión,
   Trombosis coronaria, Trombosis pulmonar, Tóxicos

VÍA AÉREA:
- Intubación orotraqueal o dispositivo avanzado (no interrumpir compresiones)
- Ventilación 10 x/min tras la intubación (sin pausas para ventilación)

REVERSIÓN (ROSC):
- Cuidados post-paro: O₂ titulado SatO₂ 94–98%, PAS > 90 mmHg
- Control de temperatura objetivo: 32–36°C por 24h si permanece comatoso`
      }
    },

    /* ═══════════════════════════════════════════════
       CARDIOLOGIA
    ═══════════════════════════════════════════════ */
    {
      id: 'iamcsst',
      specialty: 'cardio',
      icon: '',
      tags: ['IAM', 'SCA', 'Infarto', 'SCACSST', 'Reperfusão'],
      pt: {
        title: 'SCA com Supra-ST — Atendimento Inicial',
        via: 'VO / IV',
        preview: 'AAS 300mg + Clopidogrel 600mg + Heparina + Beta-bloqueador + Nitrato',
        text:
`SCA COM SUPRA-ST (IAMCSST) — ATENDIMENTO INICIAL

MEDIDAS GERAIS:
- Repouso, monitorização contínua (ECG, PA, SatO₂)
- Acesso venoso periférico calibroso (2 acessos)
- O₂ apenas se SatO₂ < 90%

ANTIAGREGAÇÃO (iniciar imediatamente):
- AAS 300 mg VO mastigado (dose de ataque)
- Ticagrelor 180 mg VO (preferencial)
   ou Clopidogrel 600 mg VO se Ticagrelor indisponível

ANTICOAGULAÇÃO:
- Heparina não fracionada 60 UI/kg IV bolus (máx 4000 UI)
   Manutenção: 12 UI/kg/h (máx 1000 UI/h) — TTPA 50–70s
   ou Enoxaparina 30 mg IV bolus + 1 mg/kg SC 12/12h

NITRATO (se dor, PA > 90 mmHg, sem uso de PDE5i):
- Nitroglicerina 0,4 mg SL (repetir a cada 5 min, máx 3x)
   ou Dinitrato de isossorbida IV se dor refratária

BETA-BLOQUEADOR (se FC > 60 e sem contraindicação):
- Metoprolol 5 mg IV (repetir a cada 5 min, máx 15 mg)
   → Metoprolol 25–50 mg VO 12/12h

ESTRATÉGIA DE REPERFUSÃO:
- ICP primária (preferencial): < 90 min do 1º contato médico
- Trombolítico se ICP indisponível em < 120 min:
   Alteplase 15 mg IV bolus + 50 mg em 30 min + 35 mg em 60 min`
      },
      es: {
        title: 'SCA con Supra-ST — Atención Inicial',
        via: 'VO / IV',
        preview: 'AAS 300mg + Clopidogrel 600mg + Heparina + Betabloqueante + Nitrato',
        text:
`SCA CON SUPRA-ST (IAMCEST) — ATENCIÓN INICIAL

MEDIDAS GENERALES:
- Reposo, monitorización continua (ECG, PA, SatO₂)
- Acceso venoso periférico calibroso (2 accesos)
- O₂ solo si SatO₂ < 90%

ANTIAGREGACIÓN (iniciar inmediatamente):
- AAS 300 mg VO masticado (dosis de ataque)
- Ticagrelor 180 mg VO (preferencial)
   o Clopidogrel 600 mg VO si Ticagrelor no está disponible

ANTICOAGULACIÓN:
- Heparina no fraccionada 60 UI/kg IV en bolo (máx 4000 UI)
   Mantenimiento: 12 UI/kg/h (máx 1000 UI/h) — TTPA 50–70s
   o Enoxaparina 30 mg IV en bolo + 1 mg/kg SC cada 12h

NITRATO (si hay dolor, PA > 90 mmHg, sin uso de PDE5i):
- Nitroglicerina 0,4 mg SL (repetir cada 5 min, máx 3x)
   o Dinitrato de isosorbida IV si el dolor es refractario

BETABLOQUEANTE (si FC > 60 y sin contraindicación):
- Metoprolol 5 mg IV (repetir cada 5 min, máx 15 mg)
   → Metoprolol 25–50 mg VO cada 12h

ESTRATEGIA DE REPERFUSIÓN:
- ICP primaria (preferencial): < 90 min del primer contacto médico
- Trombolítico si la ICP no está disponible en < 120 min:
   Alteplase 15 mg IV en bolo + 50 mg en 30 min + 35 mg en 60 min`
      }
    },

    {
      id: 'ic-aguda',
      specialty: 'cardio',
      icon: '',
      tags: ['IC Aguda', 'Edema Agudo', 'Furosemida'],
      pt: {
        title: 'Insuficiência Cardíaca Aguda Descompensada',
        via: 'IV',
        preview: 'Furosemida IV + Nitrato IV (se PA > 100) + Posição sentada + O₂',
        text:
`IC AGUDA DESCOMPENSADA / EDEMA AGUDO DE PULMÃO

POSICIONAMENTO E MONITORIZAÇÃO:
- Paciente sentado com MMII pendentes
- Monitorização: PA, FC, SatO₂, ritmo cardíaco
- Acesso venoso periférico calibroso

OXIGENOTERAPIA:
- O₂ alto fluxo se SatO₂ < 90%
- VNI (CPAP/BiPAP) se SatO₂ < 90% com O₂ ou EAP grave
- IOT se insuficiência respiratória grave ou refratária

DIURÉTICO (alívio da congestão):
- Furosemida 40–80 mg IV bolus (dobrar dose habitual oral)
   Reavaliar diurese em 1–2h (meta > 100 mL/h)
   Furosemida em infusão: 5–40 mg/h se resposta inadequada

VASODILATADOR (se PAM > 65 e PAS > 100 mmHg):
- Nitroglicerina IV 5–20 mcg/min (titular a cada 5 min)
   ou Nitroprussiato 0,3–5 mcg/kg/min (hipertensão grave)

INOTRÓPICO (se IC de baixo débito / choque cardiogênico):
- Dobutamina 2–20 mcg/kg/min IV (titular)

MONITORAR:
- Balanço hídrico horário, eletrólitos 4–6h, creatinina diária`
      },
      es: {
        title: 'Insuficiencia Cardíaca Aguda Descompensada',
        via: 'IV',
        preview: 'Furosemida IV + Nitrato IV (si PA > 100) + Posición sentada + O₂',
        text:
`IC AGUDA DESCOMPENSADA / EDEMA AGUDO DE PULMÓN

POSICIONAMIENTO Y MONITORIZACIÓN:
- Paciente sentado con miembros inferiores colgantes
- Monitorización: PA, FC, SatO₂, ritmo cardíaco
- Acceso venoso periférico calibroso

OXIGENOTERAPIA:
- O₂ de alto flujo si SatO₂ < 90%
- VNI (CPAP/BiPAP) si presenta EAP grave o SatO₂ < 90% con O₂
- IOT si presenta insuficiencia respiratoria grave o refractaria

DIURÉTICO (alivio de la congestión):
- Furosemida 40–80 mg IV en bolo (duplicar dosis habitual oral)
   Reevaluar diuresis en 1–2h (meta > 100 mL/h)
   Furosemida en infusión: 5–40 mg/h si la respuesta es inadecuada

VASODILATADOR (si PAM > 65 y PAS > 100 mmHg):
- Nitroglicerina IV 5–20 mcg/min (titular cada 5 min)
   o Nitroprusiato 0,3–5 mcg/kg/min (hipertensión grave)

INOTRÓPICO (bajo gasto / shock cardiogénico):
- Dobutamina 2–20 mcg/kg/min IV (titular)

MONITOREO:
- Balance hídrico horario, electrolitos cada 4–6h, creatinina diaria`
      }
    },

    /* ═══════════════════════════════════════════════
       CARDIOLOGIA — GUIA EMERGÊNCIAS 2026 (Bruno)
    ═══════════════════════════════════════════════ */
    {
      id: 'tsv-protocolo',
      specialty: 'cardio',
      icon: '',
      tags: ['TSV', 'Adenosina', 'Arritmia'],
      pt: {
        title: 'Taquicardia Supraventricular (TSV)',
        via: 'IV / Elétrico',
        preview: 'Manobras vagais → Adenosina 6 mg IV bolus rápido + flush 20 mL → dobrar para 12 mg se sem resposta',
        text:
`TAQUICARDIA SUPRAVENTRICULAR (TSV)

ESTÁVEL:
- Realizar manobras vasovagais inicialmente
  (evitar em pneumopatas descompensados)
- Se não reverter:
  Adenosina 6 mg (1 ampola de 2 mL) EV em bolus rápido
  + flush de 20 mL de SF 0,9% com elevação do membro
- Sem resposta em 1–2 min:
  Dobrar para 12 mg (2 ampolas)

DOSE PEDIÁTRICA:
- 0,05 a 0,1 mg/kg EV bolus (máx. inicial 6 mg)
  Pode repetir aumentando até dose única máxima de 12 mg

INSTÁVEL (hipotensão, choque, rebaixamento de consciência,
          dor anginosa ou dispneia de origem cardíaca):
- Cardioversão elétrica sincronizada (CVE) imediata`
      },
      es: {
        title: 'Taquicardia Supraventricular (TSV)',
        via: 'IV / Eléctrico',
        preview: 'Maniobras vagales → Adenosina 6 mg IV bolo rápido + flush 20 mL → duplicar a 12 mg si sin respuesta',
        text:
`TAQUICARDIA SUPRAVENTRICULAR (TSV)

ESTABLE:
- Realizar maniobras vasovagales inicialmente
  (evitar en neumópatas descompensados)
- Si no revierte:
  Adenosina 6 mg (1 ampolla de 2 mL) EV en bolo rápido
  + flush de 20 mL de SS 0,9% con elevación del miembro
- Sin respuesta en 1–2 min:
  Duplicar a 12 mg (2 ampollas)

DOSIS PEDIÁTRICA:
- 0,05 a 0,1 mg/kg EV bolo (máx. inicial 6 mg)
  Puede repetirse aumentando hasta dosis única máxima de 12 mg

INESTABLE (hipotensión, choque, alteración del estado de conciencia,
           dolor anginoso o disnea de origen cardíaco):
- Cardioversión eléctrica sincronizada (CVE) inmediata`
      }
    },

    {
      id: 'tv-protocolo',
      specialty: 'cardio',
      icon: '',
      tags: ['TV', 'Taquicardia Ventricular', 'Amiodarona'],
      pt: {
        title: 'Taquicardia Ventricular (TV)',
        via: 'IV / Elétrico',
        preview: 'Amiodarona 150 mg IV em 30 min → Impregnação 900 mg BIC; instável → CVE',
        text:
`TAQUICARDIA VENTRICULAR (TV)

ESTÁVEL:
- Amiodarona 150 mg (1 ampola de 3 mL)
  Diluir 2 ampolas (300 mg) em 250 mL de SG 5%
  Infundir em 30 minutos

IMPREGNAÇÃO APÓS CARDIOVERSÃO:
- Diluir 6 ampolas (900 mg) em 500 mL de SG 5% em BIC:
  - Fase 1: 34 mL/h (1 mg/min) por 6h
  - Fase 2: 17 mL/h (0,5 mg/min) por 18h

INSTÁVEL (hipotensão, choque, rebaixamento de consciência):
- Cardioversão elétrica sincronizada (CVE) imediata`
      },
      es: {
        title: 'Taquicardia Ventricular (TV)',
        via: 'IV / Eléctrico',
        preview: 'Amiodarona 150 mg IV en 30 min → Impregnación 900 mg BIC; inestable → CVE',
        text:
`TAQUICARDIA VENTRICULAR (TV)

ESTABLE:
- Amiodarona 150 mg (1 ampolla de 3 mL)
  Diluir 2 ampollas (300 mg) en 250 mL de SG 5%
  Infundir en 30 minutos

IMPREGNACIÓN TRAS CARDIOVERSIÓN:
- Diluir 6 ampollas (900 mg) en 500 mL de SG 5% en BIC:
  - Fase 1: 34 mL/h (1 mg/min) por 6h
  - Fase 2: 17 mL/h (0,5 mg/min) por 18h

INESTABLE (hipotensión, choque, alteración de la conciencia):
- Cardioversión eléctrica sincronizada (CVE) inmediata`
      }
    },

    {
      id: 'fa-flutter',
      specialty: 'cardio',
      icon: '',
      tags: ['FA', 'Flutter', 'Anticoagulação', 'Controle FC'],
      pt: {
        title: 'Fibrilação Atrial e Flutter — Controle de FC',
        via: 'IV / VO',
        preview: 'Metoprolol 5mg IV, Verapamil 5mg IV ou Deslanosídeo 0,4mg IV + Anticoagulação oral',
        text:
`FIBRILAÇÃO ATRIAL E FLUTTER — PROTOCOLO

CONTROLE DE FREQUÊNCIA:

- Metoprolol 5 mg/5 mL (1 ampola EV em 3–5 min)
  Alvo: 1 mg/min | Repetir a cada 5 min — máx. 15 mg (3 ampolas)

- Verapamil 5 mg/2 mL (1 ampola — 5 mg — EV em 2–5 min)
  Sem resposta: repetir 10 mg EV após 30 min
  Manutenção: 40 mg VO 8/8h
  ATENCAO: Contraindicado na IC

- Deslanosídeo 0,4 mg/2 mL (1 ampola EV em bolus)
  Dose máxima: 1,6 mg (4 ampolas)

ANTICOAGULAÇÃO ORAL (CHA₂DS₂-VASc ≥ 2 em homens / ≥ 3 em mulheres):

- Rivaroxabana 20 mg VO 1x/dia com a refeição
  Se ClCr 30–50 mL/min: usar 15 mg/dia

- Apixabana 5 mg VO 12/12h
  Se ClCr 15–30 mL/min: reduzir para 2,5 mg 12/12h`
      },
      es: {
        title: 'Fibrilación Auricular y Flutter — Control de FC',
        via: 'IV / VO',
        preview: 'Metoprolol 5mg IV, Verapamilo 5mg IV o Deslanósido 0,4mg IV + Anticoagulación oral',
        text:
`FIBRILACIÓN AURICULAR Y FLUTTER — PROTOCOLO

CONTROL DE FRECUENCIA:

- Metoprolol 5 mg/5 mL (1 ampolla EV en 3–5 min)
  Objetivo: 1 mg/min | Repetir cada 5 min — máx. 15 mg (3 ampollas)

- Verapamilo 5 mg/2 mL (1 ampolla — 5 mg — EV en 2–5 min)
  Sin respuesta: repetir 10 mg EV a los 30 min
  Mantenimiento: 40 mg VO cada 8h
  ATENCAO: Contraindicado en IC

- Deslanósido 0,4 mg/2 mL (1 ampolla EV en bolo)
  Dosis máxima: 1,6 mg (4 ampollas)

ANTICOAGULACIÓN ORAL (CHA₂DS₂-VASc ≥ 2 en hombres / ≥ 3 en mujeres):

- Rivaroxabán 20 mg VO 1 vez/día con la comida
  Si ClCr 30–50 mL/min: usar 15 mg/día

- Apixabán 5 mg VO cada 12h
  Si ClCr 15–30 mL/min: reducir a 2,5 mg cada 12h`
      }
    },

    {
      id: 'bradiarritmia',
      specialty: 'cardio',
      icon: '',
      tags: ['Bradicardia', 'Atropina', 'Dopamina'],
      pt: {
        title: 'Bradiarritmias — Protocolo',
        via: 'IV',
        preview: 'Atropina 1mg IV bolus → repetir 3–5 min até 3mg; refratário: Dopamina 5–20 mcg/kg/min',
        text:
`BRADIARRITMIAS — PROTOCOLO

ATROPINA 1 mg/mL:
- 1 ampola EV em bolus
  Repetir a cada 3–5 min até o máximo de 3 mg
  (Indicada em bradicardia sintomática — hipotensão, síncope, ECG anormal)

DOPAMINA 50 mg/10 mL (refratório à Atropina):
- Diluir 5 ampolas em 200 mL de SF 0,9% ou SG 5% → 10 mg/mL
  Infundir 5 a 20 mcg/kg/min em BIC
  Titular conforme FC e PA

ATENCAO: MARCAPASSO TRANSCUTÂNEO:
  Indicado se bradicardia grave instável refratária a drogas`
      },
      es: {
        title: 'Bradiarritmias — Protocolo',
        via: 'IV',
        preview: 'Atropina 1mg IV bolo → repetir 3–5 min hasta 3mg; refractaria: Dopamina 5–20 mcg/kg/min',
        text:
`BRADIARRITMIAS — PROTOCOLO

ATROPINA 1 mg/mL:
- 1 ampolla EV en bolo
  Repetir cada 3–5 min hasta el máximo de 3 mg
  (Indicada en bradicardia sintomática — hipotensión, síncope, ECG anormal)

DOPAMINA 50 mg/10 mL (refractaria a Atropina):
- Diluir 5 ampollas en 200 mL de SS 0,9% o SG 5% → 10 mg/mL
  Infundir 5 a 20 mcg/kg/min en BIC
  Titular según la FC y la PA

ATENCAO: MARCAPASO TRANSCUTÁNEO:
  Indicado si presenta bradicardia grave inestable refractaria a fármacos`
      }
    },

    {
      id: 'sca-geral',
      specialty: 'cardio',
      icon: '',
      tags: ['SCA', 'IAM', 'Infarto', 'AAS', 'Clopidogrel', 'Enoxaparina'],
      pt: {
        title: 'Síndrome Coronariana Aguda — Farmacoterapia',
        via: 'VO / SC / IV',
        preview: 'AAS 300mg + Clopidogrel (300–600mg) + Enoxaparina 1mg/kg SC 12/12h',
        text:
`SÍNDROME CORONARIANA AGUDA (SCA) — FARMACOTERAPIA

AAS 100 mg (ANTIAGREGAÇÃO):
- Dose de ataque: 3 comprimidos mastigados (300 mg)
- Manutenção: 1 comprimido VO ao dia

CLOPIDOGREL 75 mg:
- Sem supra-ST: ataque 300 mg (4 cp) VO
- Com supra-ST + trombólise:
  - ≤ 75 anos: ataque 300 mg (4 cp) VO
  - > 75 anos: 75 mg (1 cp) VO
- Para angioplastia (ICP): ataque 600 mg (8 cp) VO

ENOXAPARINA (ANTICOAGULAÇÃO):
- Dose padrão: 1 mg/kg SC a cada 12h
- > 75 anos: 0,75 mg/kg SC a cada 12h
- ClCr < 30 mL/min: metade da dose (1 mg/kg SC 1x/dia)
- Com trombólise: 30 mg EV em bolus antes da dose SC
  (pular o bolus IV se > 75 anos)`
      },
      es: {
        title: 'Síndrome Coronario Agudo — Farmacoterapia',
        via: 'VO / SC / IV',
        preview: 'AAS 300mg + Clopidogrel (300–600mg) + Enoxaparina 1mg/kg SC cada 12h',
        text:
`SÍNDROME CORONARIO AGUDO (SCA) — FARMACOTERAPIA

AAS 100 mg (ANTIAGREGACIÓN):
- Dosis de carga: 3 comprimidos masticados (300 mg)
- Mantenimiento: 1 comprimido VO al día

CLOPIDOGREL 75 mg:
- Sin supra-ST: carga 300 mg (4 cp) VO
- Con supra-ST + trombólisis:
  - ≤ 75 años: carga 300 mg (4 cp) VO
  - > 75 años: 75 mg (1 cp) VO
- Para angioplastia (ICP): carga 600 mg (8 cp) VO

ENOXAPARINA (ANTICOAGULACIÓN):
- Dosis estándar: 1 mg/kg SC cada 12h
- > 75 años: 0,75 mg/kg SC cada 12h
- ClCr < 30 mL/min: mitad de la dosis (1 mg/kg SC 1 vez/día)
- Con trombólisis: 30 mg EV en bolo previo a la dosis SC
  (omitir bolo IV si > 75 años)`
      }
    },

    /* ═══════════════════════════════════════════════
       INFECTOLOGIA
    ═══════════════════════════════════════════════ */
    {
      id: 'pnm-comunitaria',
      specialty: 'infecto',
      icon: '',
      tags: ['Pneumonia', 'PAC', 'Antibiótico'],
      pt: {
        title: 'Pneumonia Adquirida na Comunidade (PAC)',
        via: 'VO / IV',
        preview: 'Amoxicilina + Azitromicina (leve); Ceftriaxona + Azitromicina (moderada/grave)',
        text:
`PNEUMONIA ADQUIRIDA NA COMUNIDADE (PAC)

ESTRATIFICAÇÃO (CURB-65):
0–1: Ambulatorial | 2: Internação | ≥3: UTI/Considerar

AMBULATORIAL (CURB-65 0–1):
- Amoxicilina 1g VO 8/8h por 5 dias
   OU Amoxicilina-Clavulanato 875/125 mg VO 12/12h × 5–7d
- Associar Azitromicina 500 mg VO 1x/dia × 5d
   (cobertura atípicos: Mycoplasma, Chlamydia, Legionella)
- Alternativa: Moxifloxacino 400 mg VO 1x/dia × 5d

INTERNAÇÃO — MODERADA (CURB-65 2):
- Ceftriaxona 1–2g IV 1x/dia
- + Azitromicina 500 mg IV/VO 1x/dia × 5–7 dias

GRAVE (CURB-65 ≥3 / UTI):
- Ceftriaxona 2g IV 1x/dia
- + Azitromicina 500 mg IV 1x/dia
- Considerar Oseltamivir se influenza suspeita
- Vancomicina 25 mg/kg IV se suspeita de MRSA

MEDIDAS GERAIS:
- Fisioterapia respiratória, hidratação, analgesia`
      },
      es: {
        title: 'Neumonía Adquirida en la Comunidad (NAC)',
        via: 'VO / IV',
        preview: 'Amoxicilina + Azitromicina (leve); Ceftriaxona + Azitromicina (moderada/grave)',
        text:
`NEUMONÍA ADQUIRIDA EN LA COMUNIDAD (NAC)

ESTRATIFICACIÓN (CURB-65):
0–1: Ambulatorio | 2: Ingreso | ≥3: UCI / Considerar

AMBULATORIO (CURB-65 0–1):
- Amoxicilina 1g VO cada 8h × 5 días
   O Amoxicilina-Clavulanato 875/125 mg VO cada 12h × 5–7d
- Asociar Azitromicina 500 mg VO 1 vez/día × 5d
   (cobertura de atípicos: Mycoplasma, Chlamydia, Legionella)
- Alternativa: Moxifloxacino 400 mg VO 1 vez/día × 5d

INGRESO — MODERADA (CURB-65 2):
- Ceftriaxona 1–2g IV 1 vez/día
- + Azitromicina 500 mg IV/VO 1 vez/día × 5–7 días

GRAVE (CURB-65 ≥3 / UCI):
- Ceftriaxona 2g IV 1 vez/día
- + Azitromicina 500 mg IV 1 vez/día
- Considerar Oseltamivir si hay sospecha de influenza
- Vancomicina 25 mg/kg IV si hay sospecha de MRSA

MEDIDAS GENERALES:
- Fisioterapia respiratoria, hidratación, analgesia`
      }
    },

    {
      id: 'itu-complicada',
      specialty: 'infecto',
      icon: '',
      tags: ['ITU', 'Pielonefrite', 'Antibiótico'],
      pt: {
        title: 'ITU Complicada / Pielonefrite Aguda',
        via: 'VO / IV',
        preview: 'Ceftriaxona IV (internação) ou Ciprofloxacino VO (ambulatorial)',
        text:
`ITU COMPLICADA / PIELONEFRITE AGUDA

AMBULATORIAL (sem critérios de internação):
- Ciprofloxacino 500 mg VO 12/12h × 7 dias
   (se resistência local < 10%)
- Alternativa: Sulfametoxazol-Trimetoprima 160/800 mg VO 12/12h × 14d
   (conforme antibiograma local)

INTERNAÇÃO (febre alta, vômitos, sepse, imunossupressão):
- Ceftriaxona 1–2g IV 1x/dia × 10–14 dias
- Ajustar conforme cultura de urina (colher antes do ATB!)

SUSPEITA DE GRAM-NEGATIVOS RESISTENTES (KPC, ESBL):
- Ertapeném 1g IV 1x/dia × 10 dias
   (aguardar resultado da cultura)

MEDIDAS ADJUVANTES:
- Hidratação vigorosa (≥2L/dia VO ou IV)
- Analgésico/antipirético (Dipirona 1g IV 6/6h se febre)
- Reavaliação clínica em 48–72h

DURAÇÃO:
- Pielonefrite não complicada: 7 dias
- Complicada / bacteremia: 10–14 dias`
      },
      es: {
        title: 'ITU Complicada / Pielonefritis Aguda',
        via: 'VO / IV',
        preview: 'Ceftriaxona IV (ingreso) o Ciprofloxacino VO (ambulatorio)',
        text:
`ITU COMPLICADA / PIELONEFRITIS AGUDA

AMBULATORIO (sin criterios de ingreso):
- Ciprofloxacino 500 mg VO cada 12h × 7 días
   (si la resistencia local es < 10%)
- Alternativa: Cotrimoxazol 160/800 mg VO cada 12h × 14d
   (según antibiograma local)

INGRESO (fiebre alta, vómitos, sepsis, inmunodepresión):
- Ceftriaxona 1–2g IV 1 vez/día × 10–14 días
- Ajustar según urocultivo (¡recoger antes del ATB!)

SOSPECHA DE GRAM-NEGATIVOS RESISTENTES (KPC, ESBL):
- Ertapenem 1g IV 1 vez/día × 10 días
   (esperar resultado del cultivo)

MEDIDAS ADYUVANTES:
- Hidratación vigorosa (≥2L/día VO o IV)
- Analgésico/antipirético (Dipirona 1g IV cada 6h si fiebre)
- Reevaluación clínica a las 48–72h

DURACIÓN:
- Pielonefritis no complicada: 7 días
- Complicada / bacteriemia: 10–14 días`
      }
    },

    /* ═══════════════════════════════════════════════
       INFECTOLOGIA — GUIA EMERGÊNCIAS 2026 (Bruno)
    ═══════════════════════════════════════════════ */
    {
      id: 'oma-sinusite-atb',
      specialty: 'infecto',
      icon: '',
      tags: ['OMA', 'Sinusite', 'Amoxicilina', 'Ceftriaxona', 'Cefepima'],
      pt: {
        title: 'OMA e Sinusite — Antibioticoterapia',
        via: 'VO / IM / IV',
        preview: 'Amox-Clavulanato 875+125mg 12/12h × 10d; internação: Ceftriaxona 1g IM/IV × 3d',
        text:
`OMA E SINUSITE — ANTIBIOTICOTERAPIA

AMOXICILINA + CLAVULANATO (875 + 125 mg) — PADRÃO:
- Adulto: 1 comprimido VO a cada 12h por 10 dias
- Pediátrico: 50 a 90 mg/kg/dia dividido a cada 12h

CEFTRIAXONA 1 g (INTERNAÇÃO / OMA GRAVE):
- Adulto: 1 g IM ou IV 1x/dia por 3 dias
- Pediátrico: 50 mg/kg/dia IM ou IV por 3 dias

CEFEPIMA 1 g / 2 g (INFECÇÃO GRAVE / UTI):
- Adulto: 2 g IV a cada 12h por 7–10 dias
- Ajuste renal (ClCr):
  - 30–50 mL/min: 2g IV a cada 12h (sem alteração)
  - 11–29 mL/min: 2g IV a cada 24h
  - ≤ 10 mL/min: 1g IV a cada 24h`
      },
      es: {
        title: 'OMA y Sinusitis — Antibioticoterapia',
        via: 'VO / IM / IV',
        preview: 'Amox-Clavulanato 875+125mg cada 12h × 10d; internación: Ceftriaxona 1g IM/IV × 3d',
        text:
`OMA Y SINUSITIS — ANTIBIOTICOTERAPIA

AMOXICILINA + CLAVULANATO (875 + 125 mg) — ESTÁNDAR:
- Adulto: 1 comprimido VO cada 12h por 10 días
- Pediátrico: 50 a 90 mg/kg/día dividido cada 12h

CEFTRIAXONA 1 g (INGRESO / OMA GRAVE):
- Adulto: 1 g IM o IV 1 vez/día por 3 días
- Pediátrico: 50 mg/kg/día IM o IV por 3 días

CEFEPIMA 1 g / 2 g (INFECCIÓN GRAVE / UCI):
- Adulto: 2 g IV cada 12h por 7–10 días
- Ajuste renal (ClCr):
  - 30–50 mL/min: 2g IV cada 12h (sin cambios)
  - 11–29 mL/min: 2g IV cada 24h
  - ≤ 10 mL/min: 1g IV cada 24h`
      }
    },

    /* ═══════════════════════════════════════════════
       GASTROENTEROLOGIA
    ═══════════════════════════════════════════════ */
    {
      id: 'hemorragia-digestiva',
      specialty: 'gastro',
      icon: '',
      tags: ['HDA', 'Omeprazol', 'Endoscopia'],
      pt: {
        title: 'Hemorragia Digestiva Alta — Manejo Inicial',
        via: 'IV',
        preview: 'Omeprazol 80mg IV bolus + 8mg/h infusão → Endoscopia em até 24h',
        text:
`HEMORRAGIA DIGESTIVA ALTA (HDA) — MANEJO INICIAL

RESSUSCITAÇÃO:
- 2 acessos venosos periféricos calibrosos (≥16G)
- SF 0,9% ou Ringer Lactato: manter PAM ≥ 65 mmHg
- Hemotransfusão: Hb < 7 g/dL (meta 7–9 g/dL)
  (meta Hb < 9 g/dL se doença coronariana ou instabilidade)

INIBIDOR DE BOMBA DE PRÓTONS (IBP):
- Omeprazol 80 mg IV bolus em 30 min
- Manutenção: Omeprazol 8 mg/h IV contínuo × 72h
   → Após hemostasia endoscópica confirmada

VASOPRESSORES ESPLÂNCNICOS (se suspeita de varizes):
- Terlipressina 2 mg IV bolus → 1 mg IV 4/4h × 5 dias
   ou Ocreotida 50 mcg IV bolus → 50 mcg/h contínuo × 5 dias

ANTIBIOTICOPROFILAXIA (em cirróticos):
- Ceftriaxona 1g IV 1x/dia × 7 dias

ENDOSCOPIA:
- Urgente (< 12h): choque ou sangramento ativo
- Eletiva (< 24h): estável sem sangramento ativo

MONITORAR: PA, FC, Hb (6/6h), coagulação`
      },
      es: {
        title: 'Hemorragia Digestiva Alta — Manejo Inicial',
        via: 'IV',
        preview: 'Omeprazol 80mg IV bolo + 8mg/h infusión → Endoscopia en menos de 24h',
        text:
`HEMORRAGIA DIGESTIVA ALTA (HDA) — MANEJO INICIAL

RESUCITACIÓN:
- 2 accesos venosos periféricos calibrosos (≥16G)
- SS 0,9% o Ringer Lactato: mantener PAM ≥ 65 mmHg
- Transfusión sanguínea: Hb < 7 g/dL (meta 7–9 g/dL)
  (meta Hb < 9 g/dL si presenta enfermedad coronaria o inestabilidad)

INHIBIDOR DE BOMBA DE PROTONES (IBP):
- Omeprazol 80 mg IV en bolo en 30 min
- Mantenimiento: Omeprazol 8 mg/h IV en infusión continua × 72h
   → Tras la hemostasia endoscópica confirmada

VASOPRESORES ESPLÁCNICOS (sospecha de varices):
- Terlipresina 2 mg IV en bolo → 1 mg IV cada 4h × 5 días
   o Octreotida 50 mcg IV en bolo → 50 mcg/h continua × 5 días

ANTIBIOTICOPROFILAXIS (en cirróticos):
- Ceftriaxona 1g IV 1 vez/día × 7 días

ENDOSCOPIA:
- Urgente (< 12h): shock o sangrado activo
- Electiva (< 24h): estable sin sangrado activo

MONITOREO: PA, FC, Hb (cada 6h), coagulación`
      }
    },

    {
      id: 'pancreatite-aguda',
      specialty: 'gastro',
      icon: '',
      tags: ['Pancreatite', 'Dor Abdominal', 'Hidratação'],
      pt: {
        title: 'Pancreatite Aguda — Tratamento Inicial',
        via: 'IV / VO',
        preview: 'Hidratação agressiva 250–500 mL/h + Analgesia + Jejum + Monitorização',
        text:
`PANCREATITE AGUDA — TRATAMENTO INICIAL

AVALIAÇÃO DE GRAVIDADE (Bedside Index):
- Leve: Tratar em enfermaria
- Moderada/Grave: UTI/Semi-intensiva

HIDRATAÇÃO (pilar do tratamento):
- Ringer Lactato 250–500 mL/h nas primeiras 12–24h
   (Preferência ao RL — reduz acidose e necrose pancreática)
- Meta: Hematócrito 35–44% em 24h, diurese > 0,5 mL/kg/h

ANALGESIA:
- Dipirona 2g IV 6/6h (dor leve-moderada)
- Tramadol 100 mg IV 6/6h + Metoclopramida 10 mg IV (náusea)
- Morfina 2–4 mg IV 4/4h se dor grave (não contraindicada)

NUTRIÇÃO:
- Iniciar dieta oral leve quando tolerado (dor leve, sem náusea)
- NE precoce (< 48h) se grave, via sonda nasoenteral

ANTIBIÓTICOS (apenas se infecção confirmada):
- NÃO usar profilaticamente (sem benefício)
- Se necrose infectada: Imipeném 500 mg IV 8/8h × 14 dias
   ou Meropeném 1g IV 8/8h

MONITORAR: Glicemia, Ca²⁺, TGO/TGP, amilase/lipase, imagem`
      },
      es: {
        title: 'Pancreatitis Aguda — Tratamiento Inicial',
        via: 'IV / VO',
        preview: 'Hidratación agresiva 250–500 mL/h + Analgesia + Ayuno + Monitorización',
        text:
`PANCREATITIS AGUDA — TRATAMIENTO INICIAL

EVALUACIÓN DE SEVERIDAD (Bedside Index):
- Leve: Tratar en sala general
- Moderada/Grave: UCI / Semicríticos

HIDRATACIÓN (pilar del tratamiento):
- Ringer Lactato 250–500 mL/h en las primeras 12–24h
   (Se prefiere RL — reduce la acidosis y la necrosis pancreática)
- Meta: Hematocrito 35–44% en 24h, diuresis > 0,5 mL/kg/h

ANALGESIA:
- Dipirona 2g IV cada 6h (dolor leve-moderado)
- Tramadol 100 mg IV cada 6h + Metoclopramida 10 mg IV (náuseas)
- Morfina 2–4 mg IV cada 4h si el dolor es severo (no está contraindicada)

NUTRICIÓN:
- Iniciar dieta oral leve según tolerancia (dolor leve, sin náuseas)
- NE precoz (< 48h) si es grave, vía sonda nasoenteral

ANTIBIÓTICOS (solo si hay infección confirmada):
- NO usar de forma profiláctica (sin beneficio demostrado)
- Si hay necrosis infectada: Imipenem 500 mg IV cada 8h × 14 días
   o Meropenem 1g IV cada 8h

MONITOREO: Glucemia, Ca²⁺, TGO/TGP, amilasa/lipasa, imágenes`
      }
    },

    /* ═══════════════════════════════════════════════
       PNEUMOLOGIA
    ═══════════════════════════════════════════════ */
    {
      id: 'asma-aguda',
      specialty: 'pneumo',
      icon: '',
      tags: ['Asma', 'Broncoespasmo', 'Salbutamol'],
      pt: {
        title: 'Asma Aguda — Crise Broncoespástica',
        via: 'Inalatório / IV',
        preview: 'Salbutamol + Ipratrópio inalatórios + Corticoide sistêmico + O₂ titulado',
        text:
`ASMA AGUDA — PROTOCOLO DE ATENDIMENTO

CLASSIFICAÇÃO DA CRISE:
- Leve/Moderada: SpO₂ > 92%, fala em frases, FR < 30
- Grave: SpO₂ < 92%, fala em palavras, uso musculatura acessória
- Iminência de parada: cianose, exaustão, confusão

BRONCODILATAÇÃO (pilar do tratamento):
- Salbutamol 2,5–5 mg nebulizado (O₂ 6–8 L/min)
   → Repetir a cada 20 min nas primeiras 2h se necessário
- Ipratrópio 0,5 mg nebulizado (associar ao Salbutamol)
   → Repetir a cada 20 min nas primeiras 3 doses

CORTICOIDE SISTÊMICO:
- Prednisolona 40–60 mg VO (crise leve-moderada)
- Metilprednisolona 125 mg IV bolus (crise grave)
   → Metilprednisolona 40–80 mg IV 6/6h × 24–48h

OXIGENOTERAPIA:
- Meta SpO₂ ≥ 93–95%
- VNI se SpO₂ < 90% refratária a broncodilatadores
- IOT + VM se iminência de parada

SULFATO DE MAGNÉSIO (crise grave refratária):
- MgSO₄ 2g IV em 20 min (dose única)

ALTA: PFE > 70% do predito, SpO₂ ≥ 93%, sem distress`
      },
      es: {
        title: 'Asma Aguda — Crisis Broncoespástica',
        via: 'Inhalatorio / IV',
        preview: 'Salbutamol + Ipratropio inhalatorios + Corticoide sistémico + O₂ titulado',
        text:
`ASMA AGUDA — PROTOCOLO DE ATENCIÓN

CLASIFICACIÓN DE LA CRISIS:
- Leve/Moderada: SpO₂ > 92%, habla en frases, FR < 30
- Grave: SpO₂ < 92%, habla en palabras, uso de musculatura accesoria
- Inminencia de paro: cianosis, agotamiento, confusión

BRONCODILATACIÓN (pilar del tratamiento):
- Salbutamol 2,5–5 mg nebulizado (O₂ 6–8 L/min)
   → Repetir cada 20 min en las primeras 2h si es necesario
- Ipratropio 0,5 mg nebulizado (asociar al Salbutamol)
   → Repetir cada 20 min en las primeras 3 dosis

CORTICOIDE SISTÉMICO:
- Prednisolona 40–60 mg VO (crisis leve-moderada)
- Metilprednisolona 125 mg IV en bolo (crisis grave)
   → Metilprednisolona 40–80 mg IV cada 6h × 24–48h

OXIGENOTERAPIA:
- Meta SpO₂ ≥ 93–95%
- VNI si la SpO₂ < 90% es refractaria a broncodilatadores
- IOT + VM si hay inminencia de paro

SULFATO DE MAGNESIO (crisis grave refractaria):
- MgSO₄ 2g IV en 20 min (dosis única)

ALTA: PFE > 70% del predicho, SpO₂ ≥ 93%, sin distrés`
      }
    },

    /* ═══════════════════════════════════════════════
       PNEUMOLOGIA — GUIA EMERGÊNCIAS 2026 (Bruno)
    ═══════════════════════════════════════════════ */
    {
      id: 'dpoc-asma-broncodilatadores',
      specialty: 'pneumo',
      icon: '',
      tags: ['DPOC', 'Asma', 'Salbutamol', 'Ipratrópio', 'Corticoide'],
      pt: {
        title: 'Crise Asmática e DPOC — Broncodilatadores',
        via: 'Inalatório / IV',
        preview: 'Salbutamol 20 gts nebulizado + Ipratrópio 40 gts associado, a cada 20 min na 1ª hora',
        text:
`CRISE ASMÁTICA E DPOC — PROTOCOLO DE BRONCODILATAÇÃO

SALBUTAMOL (INALAÇÃO):
- Spray com espaçador: 4 a 10 jatos a cada 20 min na 1ª hora
- Nebulização: 20 gotas (5 mg) diluídas em 3–4 mL de SF 0,9%
  A cada 20 min por 1 hora

IPRATRÓPIO (INALAÇÃO — associar ao Salbutamol):
- Nebulização: 40 gotas (500 mcg) a cada 20 min na 1ª hora

CORTICOIDE SISTÊMICO:
- Metilprednisolona 125 mg EV em bolus
- Manutenção: 40 a 60 mg/dia IV ou VO

OXIGENOTERAPIA:
- Meta SpO₂ ≥ 93–95% (92–88% em DPOC com hipercapnia)
- VNI se refratário aos broncodilatadores
- IOT + VM se iminência de parada respiratória`
      },
      es: {
        title: 'Crisis Asmática y EPOC — Broncodilatadores',
        via: 'Inhalatorio / IV',
        preview: 'Salbutamol 20 gotas nebulizado + Ipratropio 40 gotas asociado, cada 20 min en la 1ª hora',
        text:
`CRISIS ASMÁTICA Y EPOC — PROTOCOLO DE BRONCODILATACIÓN

SALBUTAMOL (INHALACIÓN):
- Spray con espaciador: 4 a 10 disparos cada 20 min en la 1ª hora
- Nebulización: 20 gotas (5 mg) diluidas en 3–4 mL de SS 0,9%
  Cada 20 min por 1 hora

IPRATROPIO (INHALACIÓN — asociar al Salbutamol):
- Nebulización: 40 gotas (500 mcg) cada 20 min en la 1ª hora

CORTICOIDE SISTÉMICO:
- Metilprednisolona 125 mg EV en bolo
- Mantenimiento: 40 a 60 mg/día IV o VO

OXIGENOTERAPIA:
- Meta SpO₂ ≥ 93–95% (92–88% en EPOC con hipercapnia)
- VNI si es refractario a broncodilatadores
- IOT + VM si hay inminencia de paro respiratorio`
      }
    },

    /* ═══════════════════════════════════════════════
       NEUROLOGIA
    ═══════════════════════════════════════════════ */
    {
      id: 'avc-isquemico',
      specialty: 'neuro',
      icon: '',
      tags: ['AVC', 'Trombólise', 'Alteplase'],
      pt: {
        title: 'AVC Isquêmico — Fase Aguda (< 4,5h)',
        via: 'IV',
        preview: 'Alteplase 0,9 mg/kg IV (máx 90 mg) se janela < 4,5h e sem contraindicação',
        text:
`AVC ISQUÊMICO AGUDO — PROTOCOLO (< 4,5 HORAS)

AVALIAÇÃO INICIAL (RÁPIDA):
- NIHSS (escala de AVC) → neuroimagem urgente (TC crânio)
- Glicemia, PA, temperatura, SatO₂
- ECG (FA?), acesso venoso

ALTEPLASE (TROMBÓLISE IV):
Indicação: AVC isquêmico confirmado + janela < 4,5h
- Alteplase 0,9 mg/kg IV (máx 90 mg)
   10% da dose: bolus IV em 1 min
   90% restante: infusão contínua em 60 min

CONTRAINDICAÇÕES ABSOLUTAS:
- TCE/AVC < 3 meses, cirurgia > 14 dias, HAS > 185/110 mmHg
- Sangramento ativo, coagulopatia, plaquetas < 100.000

CONTROLE DE PA:
- Não tratar PA < 185/110 mmHg pré-trombólise
- Pós-trombólise: manter PA < 180/105 mmHg × 24h

ANTIAGREGAÇÃO (se não elegível para trombólise):
- AAS 300 mg VO (dentro das primeiras 24–48h)
- Clopidogrel 300 mg VO + AAS 100 mg × 21 dias (TIA / AVC leve)

MONITORAR × 24h:
- Pressão arterial, Glasgow, NIHSS
- Sangramento (pele, mucosa, neurológico)`
      },
      es: {
        title: 'ACV Isquémico — Fase Aguda (< 4,5h)',
        via: 'IV',
        preview: 'Alteplase 0,9 mg/kg IV (máx 90 mg) si la ventana es < 4,5h y sin contraindicaciones',
        text:
`ACV ISQUÉMICO AGUDO — PROTOCOLO (< 4,5 HORAS)

EVALUACIÓN INICIAL (RÁPIDA):
- NIHSS (escala de ACV) → neuroimagen urgente (TC de cráneo)
- Glucemia, PA, temperatura, SatO₂
- ECG (¿FA?), acceso venoso

ALTEPLASE (TROMBÓLISIS IV):
Indicación: ACV isquémico confirmado + ventana < 4,5h
- Alteplase 0,9 mg/kg IV (máx 90 mg)
   10% de la dosis: bolo IV en 1 min
   90% restante: infusión continua en 60 min

CONTRAINDICACIONES ABSOLUTAS:
- TCE/ACV < 3 meses, cirugía > 14 días, HTA > 185/110 mmHg
- Sangrado activo, coagulopatía, plaquetas < 100.000

CONTROL DE PA:
- No tratar la PA si es < 185/110 mmHg pre-trombólisis
- Post-trombólisis: mantener PA < 180/105 mmHg × 24h

ANTIAGREGACIÓN (si no es elegible para trombólisis):
- AAS 300 mg VO (dentro de las primeras 24–48h)
- Clopidogrel 300 mg VO + AAS 100 mg × 21 días (AIT / ACV leve)

MONITOREO × 24h:
- Presión arterial, Glasgow, NIHSS
- Sangrado (piel, mucosas, neurológico)`
      }
    },

    /* ═══════════════════════════════════════════════
       NEUROLOGIA — GUIA EMERGÊNCIAS 2026 (Bruno)
    ═══════════════════════════════════════════════ */
    {
      id: 'cefaleia-enxaqueca',
      specialty: 'neuro',
      icon: '',
      tags: ['Cefaleia', 'Enxaqueca', 'Cetoprofeno', 'Clorpromazina'],
      pt: {
        title: 'Cefaleia Primária e Enxaqueca — Protocolo',
        via: 'IV',
        preview: 'Cetoprofeno 100mg IV em 20 min; refratária: Clorpromazina 0,1 mg/kg + BIC 0,7 mg/kg/30 min',
        text:
`CEFALEIA PRIMÁRIA E ENXAQUECA — PROTOCOLO

PRIMEIRA LINHA:
- Cetoprofeno 100 mg/2 mL
  Diluir 1 ampola em 100 mL de SF 0,9%
  Infundir em 20 minutos EV

ENXAQUECA REFRATÁRIA (sem resposta a AINE IV):
- Clorpromazina 5 mg/mL:
  - Ataque: 0,1 mg/kg EV em 3 minutos
  - Manutenção: 0,7 mg/kg em BIC por 30 minutos
  - Pode repetir até 3 vezes
  ATENCAO: Atentar ao risco de hipotensão — monitorar PA

MEDIDAS ADJUVANTES:
- Ambiente escuro e silencioso
- Anti-emético: Metoclopramida 10 mg IV
- Hidratação IV se vômitos intensos

ATENCAO: EXCLUIR CEFALEIA SECUNDÁRIA (sinal de alarme: início súbito,
  "a pior dor da vida", febre, déficit neurológico → TC de crânio)`
      },
      es: {
        title: 'Cefalea Primaria y Migraña — Protocolo',
        via: 'IV',
        preview: 'Ketoprofeno 100mg IV en 20 min; refractaria: Clorpromazina 0,1 mg/kg + BIC 0,7 mg/kg/30 min',
        text:
`CEFALEA PRIMARIA Y MIGRAÑA — PROTOCOLO

PRIMERA LÍNEA:
- Ketoprofeno 100 mg/2 mL
  Diluir 1 ampolla en 100 mL de SS 0,9%
  Infundir en 20 minutos EV

MIGRAÑA REFRACTARIA (sin respuesta a AINE IV):
- Clorpromazina 5 mg/mL:
  - Carga: 0,1 mg/kg EV en 3 minutos
  - Mantenimiento: 0,7 mg/kg en BIC por 30 minutos
  - Puede repetirse hasta 3 veces
  ATENCAO: Monitorear riesgo de hipotensión — controlar PA

MEDIDAS ADYUVANTES:
- Ambiente oscuro y silencioso
- Antiemético: Metoclopramida 10 mg IV
- Hidratación IV si presenta vómitos intensos

ATENCAO: EXCLUIR CEFALEA SECUNDARIA (inicio súbito, "el peor dolor
  de su vida", fiebre, déficit neurológico → TC de cráneo)`
      }
    },

    {
      id: 'crise-convulsiva',
      specialty: 'neuro',
      icon: '',
      tags: ['Convulsão', 'Status Epiléptico', 'Diazepam', 'Fenitoína'],
      pt: {
        title: 'Crise Convulsiva / Status Epiléptico',
        via: 'IV',
        preview: 'Diazepam 10mg IV bolus lento → Fenitoína ataque: peso × 20mg em 1h',
        text:
`CRISE CONVULSIVA / STATUS EPILÉPTICO

FASE 1 — CRISE ATIVA (0–5 min):
- Diazepam 10 mg/2 mL — 1 ampola EV em bolus lento
  Pediátrico: 0,1 a 0,3 mg/kg EV
  Alternativa: Midazolam 5–10 mg IM (se sem acesso venoso)

FASE 2 — MANUTENÇÃO / PREVENÇÃO DE RECORRÊNCIA (> 5 min):
- Fenitoína 250 mg/5 mL — DOSE DE ATAQUE:
  Cálculo: peso (kg) × 20 mg = dose total
  Exemplo (75 kg): 1500 mg = 6 ampolas
  Diluir em 250 mL de SF 0,9% → infundir em 1 hora
  ATENCAO: Monitorar ECG durante infusão (risco de arritmia)

- Manutenção: Fenitoína 100 mg EV 8/8h

FASE 3 — STATUS REFRATÁRIO:
- Fenobarbital 100–200 mg EV lento (máx 600 mg)
- Propofol ou Midazolam em BIC + IOT

MEDIDAS GERAIS:
- O₂, acesso venoso, glicemia (excluir hipoglicemia!)
- Investigar causa: TC de crânio, LCR, eletrólitos`
      },
      es: {
        title: 'Crisis Convulsiva / Status Epiléptico',
        via: 'IV',
        preview: 'Diazepam 10mg IV bolo lento → Fenitoína carga: peso × 20mg en 1h',
        text:
`CRISIS CONVULSIVA / STATUS EPILÉPTICO

FASE 1 — CRISIS ACTIVA (0–5 min):
- Diazepam 10 mg/2 mL — 1 ampolla EV en bolo lento
  Pediátrico: 0,1 a 0,3 mg/kg EV
  Alternativa: Midazolam 5–10 mg IM (si no hay acceso venoso)

FASE 2 — MANTENIMIENTO / PREVENCIÓN DE RECURRENCIA (> 5 min):
- Fenitoína 250 mg/5 mL — DOSIS DE CARGA:
  Cálculo: peso (kg) × 20 mg = dosis total
  Ejemplo (75 kg): 1500 mg = 6 ampollas
  Diluir en 250 mL de SS 0,9% → infundir en 1 hora
  ATENCAO: Monitorear ECG durante la infusión (riesgo de arritmia)

- Mantenimiento: Fenitoína 100 mg EV cada 8h

FASE 3 — STATUS REFRACTARIO:
- Fenobarbital 100–200 mg EV lento (máx 600 mg)
- Propofol o Midazolam en BIC + IOT

MEDIDAS GENERALES:
- O₂, acceso venoso, glucemia (¡excluir hipoglucemia!)
- Investigar causa: TC de cráneo, LCR, electrolitos`
      }
    },

    /* ═══════════════════════════════════════════════
       CARDIO — GUIA BRUNO (2º LOTE)
    ═══════════════════════════════════════════════ */
    {
      id: 'tsv-guia',
      specialty: 'cardio',
      icon: '',
      tags: ['TSV', 'Adenosina', 'Arritmia'],
      pt: {
        title: 'Taquicardia Supraventricular (TSV)',
        via: 'EV / Elétrico',
        preview: 'Manobra vagal → Adenosina 6mg EV bolus → Dobrar para 12mg se sem resposta',
        text:
`TAQUICARDIA SUPRAVENTRICULAR (TSV)

ESTÁVEL:
1. Realizar manobras vasovagais inicialmente (evitar em pneumopatas descompensados).
2. Se não reverter: Adenosina 6 mg (1 ampola de 2 mL) EV em bolus rápido + flush de 20 mL de SF 0,9% com elevação do membro.
3. Sem resposta em 1-2 min, dobrar para 12 mg (2 ampolas).

DOSE PEDIÁTRICA:
- 0,05 a 0,1 mg/kg EV bolus (máx. inicial 6 mg).
- Pode repetir aumentando até dose única máxima de 12 mg.

INSTÁVEL:
- Cardioversão elétrica sincronizada imediata (se houver hipotensão, choque, rebaixamento de consciência, dor anginosa ou dispneia de origem cardíaca).`
      },
      es: {
        title: 'Taquicardia Supraventricular (TSV)',
        via: 'EV / Eléctrico',
        preview: 'Maniobra vagal → Adenosina 6mg EV bolo → Duplicar a 12mg si no hay respuesta',
        text:
`TAQUICARDIA SUPRAVENTRICULAR (TSV)

ESTABLE:
1. Realizar maniobras vasovagales inicialmente (evitar en neumópatas descompensados).
2. Si no revierte: Adenosina 6 mg (1 ampolla de 2 mL) EV en bolo rápido + flush de 20 mL de SS 0,9% con elevación del miembro.
3. Sin respuesta en 1-2 min, duplicar a 12 mg (2 ampollas).

DOSIS PEDIÁTRICA:
- 0,05 a 0,1 mg/kg EV en bolo (máx. inicial 6 mg).
- Puede repetirse aumentando hasta una dosis única máxima de 12 mg.

INESTABLE:
- Cardioversión eléctrica sincronizada inmediata (si presenta hipotensión, choque, alteración del estado de conciencia, dolor anginoso o disnea de origen cardíaco).`
      }
    },

    {
      id: 'tv-guia',
      specialty: 'cardio',
      icon: '',
      tags: ['TV', 'Amiodarona', 'Arritmia'],
      pt: {
        title: 'Taquicardia Ventricular (TV)',
        via: 'IV / Elétrico',
        preview: 'Amiodarona 150mg EV em 30 min → Impregnação em BIC',
        text:
`TAQUICARDIA VENTRICULAR (TV)

ESTÁVEL:
1. Ataque: Amiodarona 150 mg (1 ampola de 3 mL). Diluir 2 ampolas (300 mg) em 250 mL de SG 5% e infundir em 30 minutos.
2. Impregnação (BIC): Diluir 6 ampolas (900 mg) em 500 mL de SG 5% em BIC: correr a 34 mL/h (1 mg/min) por 6h, depois 17 mL/h (0,5 mg/min) por 18h.

INSTÁVEL:
- Cardioversão elétrica sincronizada (CVE) imediata.`
      },
      es: {
        title: 'Taquicardia Ventricular (TV)',
        via: 'IV / Eléctrico',
        preview: 'Amiodarona 150mg EV en 30 min → Impregnación en BIC',
        text:
`TAQUICARDIA VENTRICULAR (TV)

ESTABLE:
1. Carga: Amiodarona 150 mg (1 ampolla de 3 mL). Diluir 2 ampollas (300 mg) en 250 mL de SG 5% e infundir en 30 minutos.
2. Impregnación (BIC): Diluir 6 ampollas (900 mg) en 500 mL de SG 5% en BIC: pasar a 34 mL/h (1 mg/min) por 6h, luego a 17 mL/h (0,5 mg/min) por 18h.

INESTABLE:
- Cardioversión eléctrica sincronizada (CVE) inmediata.`
      }
    },

    {
      id: 'fa-flutter-guia',
      specialty: 'cardio',
      icon: '',
      tags: ['FA', 'Flutter', 'Frequência', 'Anticoagulação'],
      pt: {
        title: 'Fibrilação Atrial e Flutter',
        via: 'IV / VO',
        preview: 'Controle de FC (Metoprolol, Verapamil ou Deslanosídeo) + Anticoagulação',
        text:
`FIBRILAÇÃO ATRIAL E FLUTTER

CONTROLE DE FREQUÊNCIA:
- Metoprolol 5 mg/5 mL: 1 ampola EV em 3 a 5 min (alvo: 1 mg/min). Pode repetir a cada 5 min até dose máx. de 15 mg (3 ampolas).
- Verapamil 5 mg/2 mL: 1 ampola (5 mg) EV em 2 a 5 min. Sem resposta, repetir 10 mg EV após 30 min. Manutenção: 40 mg VO de 8/8h. ATENCAO: Contraindicado na IC.
- Deslanosídeo 0,4 mg/2 mL: 1 ampola (0,4 mg) EV em bolus. Dose máxima: 1,6 mg (4 ampolas).

ANTICOAGULANTES ORAIS:
- Rivaroxabana 20 mg: 1 cp VO com a refeição 1x ao dia. Se ClCr 30-50 mL/min: usar 15 mg.
- Apixabana 5 mg: 1 cp VO de 12/12h. Se ClCr 15-30 mL/min: reduzir para 2,5 mg de 12/12h.`
      },
      es: {
        title: 'Fibrilación Auricular y Flutter',
        via: 'IV / VO',
        preview: 'Control de FC (Metoprolol, Verapamilo o Deslanósido) + Anticoagulación',
        text:
`FIBRILACIÓN AURICULAR Y FLUTTER

CONTROL DE FRECUENCIA:
- Metoprolol 5 mg/5 mL: 1 ampolla EV en 3 a 5 min (objetivo: 1 mg/min). Puede repetirse cada 5 min hasta una dosis máx. de 15 mg (3 ampollas).
- Verapamilo 5 mg/2 mL: 1 ampolla (5 mg) EV en 2 a 5 min. Sin respuesta, repetir 10 mg EV después de 30 min. Mantenimiento: 40 mg VO cada 8h. ATENCAO: Contraindicado en insuficiencia cardíaca (IC).
- Deslanósido 0,4 mg/2 mL: 1 ampolla (0,4 mg) EV en bolo. Dosis máxima: 1,6 mg (4 ampollas).

ANTICOAGULANTES ORALES:
- Rivaroxabán 20 mg: 1 cp VO con la comida 1 vez al día. Si ClCr es de 30-50 mL/min: usar 15 mg.
- Apixabán 5 mg: 1 cp VO cada 12h. Si ClCr es de 15-30 mL/min: reducir a 2,5 mg cada 12h.`
      }
    },

    {
      id: 'bradi-guia',
      specialty: 'cardio',
      icon: '',
      tags: ['Bradicardia', 'Atropina', 'Dopamina'],
      pt: {
        title: 'Bradiarritmias',
        via: 'IV / BIC',
        preview: 'Atropina 1mg EV bolus → Dopamina se refratário',
        text:
`BRADIARRITMIAS

1. Atropina 1 mg: Administrar 1 ampola EV em bolus. Repetir a cada 3 a 5 min até o máximo de 3 mg.
2. Dopamina 50 mg/10 mL (se houver bradicardia após atropina): Diluir 5 ampolas em 200 mL de SF 0,9% ou SG 5% (concentração final 10 mg/mL). Infundir de 5 a 20 mcg/kg/min.`
      },
      es: {
        title: 'Bradiarritmias',
        via: 'IV / BIC',
        preview: 'Atropina 1mg EV bolo → Dopamina si es refractaria',
        text:
`BRADIARRITMIAS

1. Atropina 1 mg: Administrar 1 ampolla EV en bolo. Repetir cada 3 a 5 min hasta el máximo de 3 mg.
2. Dopamina 50 mg/10 mL (si persiste la bradicardia tras la atropina): Diluir 5 ampollas en 200 mL de SS 0,9% o SG 5% (concentración final 10 mg/mL). Infundir de 5 a 20 mcg/kg/min.`
      }
    },

    {
      id: 'sca-guia',
      specialty: 'cardio',
      icon: '',
      tags: ['SCA', 'AAS', 'Clopidogrel', 'Enoxaparina'],
      pt: {
        title: 'Síndrome Coronariana Aguda (SCA)',
        via: 'VO / SC / EV',
        preview: 'AAS ataque → Clopidogrel conforme estratificação → Enoxaparina dose ajustada',
        text:
`SÍNDROME CORONARIANA AGUDA (SCA)

- AAS 100 mg: 3 cp mastigados no ataque, seguido de 1 cp VO ao dia.
- Clopidogrel 75 mg:
  - Sem supra-ST: ataque 300 mg (4 cp) VO.
  - Com supra-ST + trombólise: ataque 300 mg se ≤ 75 anos, ou 75 mg (1 cp) se > 75 anos.
  - Para Angioplastia (ICP): ataque 600 mg (8 cp).
- Enoxaparina 60 mg: 1 mg/kg SC de 12/12h. Se > 75 anos: 0,75 mg/kg SC de 12/12h. Se ClCr < 30 mL/min: reduzir metade da dose. Com trombólise: fazer 30 mg EV em bolus antes (pular se > 75 anos).`
      },
      es: {
        title: 'Síndrome Coronario Agudo (SCA)',
        via: 'VO / SC / EV',
        preview: 'AAS carga → Clopidogrel según estratificación → Enoxaparina dosis ajustada',
        text:
`SÍNDROME CORONARIO AGUDO (SCA)

- AAS 100 mg: 3 cp masticados como carga, seguido de 1 cp VO al día.
- Clopidogrel 75 mg:
  - Sin supra-ST: carga de 300 mg (4 cp) VO.
  - Con supra-ST + trombólisis: carga de 300 mg si ≤ 75 años, o 75 mg (1 cp) si es > 75 años.
  - Para Angioplastia (ICP): carga de 600 mg (8 cp).
- Enoxaparina 60 mg: 1 mg/kg SC cada 12h. Si es > 75 años: 0,75 mg/kg SC cada 12h. Si ClCr es < 30 mL/min: reducir a la mitad de la dosis. Con trombólisis: administrar 30 mg EV en bolo antes (omitir si es > 75 años).`
      }
    },

    /* ═══════════════════════════════════════════════
       NEURO — GUIA BRUNO (2º LOTE)
    ═══════════════════════════════════════════════ */
    {
      id: 'neuro-guia-1',
      specialty: 'neuro',
      icon: '',
      tags: ['Enxaqueca', 'Convulsão', 'Fenitoína', 'Cetoprofeno'],
      pt: {
        title: 'Cefaleia, Enxaqueca e Crise Convulsiva',
        via: 'EV / IM',
        preview: 'Cetoprofeno / Clorpromazina para enxaqueca → Diazepam / Fenitoína para crises',
        text:
`SISTEMA NERVOSO — PROTOCOLOS CRÍTICOS

CEFALEIA PRIMÁRIA E ENXAQUECA:
- Cetoprofeno 100 mg/2 mL: Diluir 1 ampola em 100 mL de SF 0,9% e infundir em 20 minutos EV.
- Clorpromazina 5 mg/mL (Enxaqueca Refratária): Ataque de 0,1 mg/kg EV em 3 minutos. Manutenção: 0,7 mg/kg em BIC por 30 minutos (pode repetir até 3 vezes). ATENCAO: Atentar ao risco de hipotensão.

CRISE CONVULSIVA E STATUS:
- Diazepam 10 mg/2 mL: 1 ampola EV em bolus lento. Pediátrico: 0,1 a 0,3 mg/kg EV.
- Fenitoína 250 mg/5 mL (Ataque): Dose de ataque = peso (kg) × 20 mg. Exemplo: 6 ampolas (1500 mg) diluídas em 250 mL de SF 0,9% para infundir em 1 hora. Manutenção: 100 mg EV de 8/8h.`
      },
      es: {
        title: 'Cefalea, Migraña y Crisis Convulsiva',
        via: 'EV / IM',
        preview: 'Ketoprofeno / Clorpromazina para migraña → Diazepam / Fenitoína para crisis',
        text:
`SISTEMA NERVIOSO — PROTOCOLOS CRÍTICOS

CEFALEA PRIMARIA Y MIGRAÑA:
- Ketoprofeno 100 mg/2 mL: Diluir 1 ampolla en 100 mL de SS 0,9% e infundir en 20 minutos EV.
- Clorpromazina 5 mg/mL (Migraña Refractaria): Carga de 0,1 mg/kg EV en 3 minutos. Mantenimiento: 0,7 mg/kg en BIC por 30 minutos (puede repetirse hasta 3 veces). ATENCAO: Monitorear riesgo de hipotensión arterial.

CRISIS CONVULSIVA Y STATUS EPILÉPTICO:
- Diazepam 10 mg/2 mL: 1 ampolla EV en bolo lento. Pediátrico: 0,1 a 0,3 mg/kg EV.
- Fenitoína 250 mg/5 mL (Carga): Dosis de carga = peso (kg) × 20 mg. Ejemplo: 6 ampollas (1500 mg) diluidas en 250 mL de SS 0,9% para infundir en 1 hora. Mantenimiento: 100 mg EV cada 8h.`
      }
    },

    /* ═══════════════════════════════════════════════
       PNEUMO — GUIA BRUNO (2º LOTE)
    ═══════════════════════════════════════════════ */
    {
      id: 'resp-guia-1',
      specialty: 'pneumo',
      icon: '',
      tags: ['Asma', 'DPOC', 'Salbutamol', 'Ipratrópio'],
      pt: {
        title: 'Crise Asmática, DPOC e Corticoterapia',
        via: 'Inalatório / EV',
        preview: 'Salbutamol + Ipratrópio em alta frequência + Metilprednisolona EV',
        text:
`SISTEMA RESPIRATÓRIO — CRISES BRONCOESPÁSTICAS

- Salbutamol (Inalação): Spray com espaçador (4 a 10 jatos a cada 20 min na primeira hora). Nebulização (20 gotas / 5 mg diluídas em 3-4 mL de SF 0,9% a cada 20 min por 1h).
- Ipratrópio (Inalação): Nebulização (40 gotas / 500 mcg associadas ao Salbutamol a cada 20 min na primeira hora).
- Metilprednisolona: 125 mg EV em bolus. Manutenção: 40 a 60 mg/dia.`
      },
      es: {
        title: 'Crisis Asmática, EPOC y Corticoterapia',
        via: 'Inhalatorio / EV',
        preview: 'Salbutamol + Ipratropio en alta frecuencia + Metilprednisolona EV',
        text:
`SISTEMA RESPIRATORIO — CRISIS BRONCOESPÁSTICAS

- Salbutamol (Inhalación): Spray con espaciador (4 a 10 disparos cada 20 min en la primera hora). Nebulización (20 gotas / 5 mg diluidas en 3-4 mL de SS 0,9% cada 20 min por 1h).
- Ipratropio (Inhalación): Nebulización (40 gotas / 500 mcg asociadas al Salbutamol cada 20 min en la primera hora).
- Metilprednisolona: 125 mg EV en bolo. Mantenimiento: 40 a 60 mg/día.`
      }
    },

    /* ═══════════════════════════════════════════════
       INFECTO — GUIA BRUNO (2º LOTE)
    ═══════════════════════════════════════════════ */
    {
      id: 'atb-guia-1',
      specialty: 'infecto',
      icon: '',
      tags: ['OMA', 'Sinusite', 'Amoxicilina', 'Ceftriaxona', 'Cefepima'],
      pt: {
        title: 'Antimicrobianos (OMA e Sinusite)',
        via: 'VO / IM / IV',
        preview: 'Amox-Clavulanato oral → Ceftriaxona para internação → Cefepima com ajuste renal',
        text:
`ANTIMICROBIANOS (OMA E SINUSITE) — DIRETRIZES

1. Amoxicilina + Clavulanato (875 + 125 mg):
   - Tomar 1 comprimido VO a cada 12 horas por 10 dias.
   - Pediátrico: 50 a 90 mg/kg/dia dividido a cada 12 horas.

2. Ceftriaxona 1 g (Internação OMA):
   - Administrar 1 g IM ou EV, 1x ao dia por 3 dias.
   - Pediátrico: 50 mg/kg/dia IM ou EV por 3 dias.

3. Cefepima 1 g / 2 g:
   - 2 g EV a cada 12 horas por 7-10 dias.
   - Ajustar conforme ClCr: 30-50 (2g de 12/12h); 11-29 (2g de 24/24h); ≤10 (1g de 24/24h).`
      },
      es: {
        title: 'Antimicrobianos (OMA y Sinusitis)',
        via: 'VO / IM / IV',
        preview: 'Amox-Clavulanato oral → Ceftriaxona para ingreso → Cefepima con ajuste renal',
        text:
`ANTIMICROBIANOS (OMA Y SINUSITIS) — DIRECTRICES

1. Amoxicilina + Clavulanato (875 + 125 mg):
   - Tomar 1 comprimido VO cada 12 horas por 10 días.
   - Pediátrico: 50 a 90 mg/kg/día dividido cada 12 horas.

2. Ceftriaxona 1 g (Ingreso hospitalario por OMA):
   - Administrar 1 g IM o EV, 1 vez al día por 3 días.
   - Pediátrico: 50 mg/kg/día IM o EV por 3 días.

3. Cefepima 1 g / 2 g:
   - 2 g EV cada 12 horas por 7-10 días.
   - Ajustar según el ClCr: 30-50 (2g cada 12h); 11-29 (2g cada 24h); ≤10 (1g cada 24h).`
      }
    },

    /* ═══════════════════════════════════════════════
       EMERGÊNCIAS — BLOCO 4 (Bruno + Gemini)
       22 protocolos: Abscesso → Varizes
    ═══════════════════════════════════════════════ */
    {
      id: 'abscesso-furunculo',
      specialty: 'emerg',
      icon: '',
      tags: ['Abscesso', 'Furunculo', 'Infeccioso', 'Drenagem'],
      pt: {
        title: 'Abscesso e Furunculo (L02.4)',
        via: 'VO / Topico / IM',
        preview: 'Cefalexina ou Clindamicina + Ibuprofeno + Mupirocina + Drenagem na unidade',
        text:
`ABSCESSO / FURUNCULO

TRATAMENTO DOMICILIAR:
- Cefalexina 500 mg: Tomar 1 cp VO de 6/6h por 10 a 14 dias.
  OU Clindamicina 300 mg: Tomar 1 cp VO de 8/8h por 10 a 14 dias.
- Ibuprofeno 300 mg: Tomar 1 cp VO de 12/12h por 5 dias.
- Dipirona 500 mg: Tomar 1 cp VO de 6/6h se houver dor ou febre.
- Mupirocina 20 mg/g (creme): Aplicar na regiao afetada 3x ao dia por 10 dias.

CONDUTA NA UNIDADE:
- Realizar drenagem cirurgica se houver flutuacao ou necessidade.
- Analgesia: Dipirona 1 ampola IM dose unica.`
      },
      es: {
        title: 'Absceso y Forunculo (L02.4)',
        via: 'VO / Topico / IM',
        preview: 'Cefalexina o Clindamicina + Ibuprofeno + Mupirocina + Drenaje en unidad',
        text:
`ABSCESO / FORUNCULO

TRATAMIENTO DOMICILIARIO:
- Cefalexina 500 mg: 1 comp VO cada 6h por 10 a 14 dias.
  O Clindamicina 300 mg: 1 comp VO cada 8h por 10 a 14 dias.
- Ibuprofeno 300 mg: 1 comp VO cada 12h por 5 dias.
- Dipirona 500 mg: 1 comp VO cada 6h en caso de dolor o fiebre.
- Mupirocina 20 mg/g (crema): Aplicar en la region afectada 3 veces al dia por 10 dias.

CONDUCTA EN LA UNIDAD:
- Realizar drenaje quirurgico si hay fluctuacion o si se considera necesario.
- Analgesia: Dipirona 1 ampolla IM dosis unica.`
      }
    },

    {
      id: 'amigdalite-bacteriana',
      specialty: 'emerg',
      icon: '',
      tags: ['Amigdalite', 'Penicilina', 'Amoxicilina'],
      pt: {
        title: 'Amigdalite Bacteriana (J03.9)',
        via: 'VO / IM',
        preview: 'Amoxicilina+Clavulanato VO por 7 dias OU Penicilina Benzatina IM dose unica',
        text:
`AMIGDALITE BACTERIANA

TRATAMENTO DOMICILIAR:
- Amoxicilina + Clavulanato (500 mg + 125 mg): Tomar 1 cp VO de 8/8h por 7 dias.
- Ibuprofeno 300 mg: Tomar 1 cp VO de 12/12h por 5 dias.
- Dipirona 500 mg: Tomar 1 cp VO de 6/6h se houver dor ou febre.

CONDUTA NA UNIDADE:
- Penicilina G Benzatina 1.200.000 UI: Aplicar IM em dose unica profunda.`
      },
      es: {
        title: 'Amigdalitis Bacteriana (J03.9)',
        via: 'VO / IM',
        preview: 'Amoxicilina+Clavulanato VO por 7 dias O Penicilina Benzatina IM dosis unica',
        text:
`AMIGDALITIS BACTERIANA

TRATAMIENTO DOMICILIARIO:
- Amoxicilina + Clavulanato (500 mg + 125 mg): 1 comp VO cada 8h por 7 dias.
- Ibuprofeno 300 mg: 1 comp VO cada 12h por 5 dias.
- Dipirona 500 mg: 1 comp VO cada 6h en caso de dolor o fiebre.

CONDUCTA EN LA UNIDAD:
- Penicilina G Benzatina 1.2M UI: Administrar IM en dosis unica profunda.`
      }
    },

    {
      id: 'anemia-ferropriva',
      specialty: 'emerg',
      icon: '',
      tags: ['Anemia', 'Sulfato Ferroso', 'Ferropriva'],
      pt: {
        title: 'Anemia Ferropriva Sintomatica (D50.0)',
        via: 'VO',
        preview: 'Sulfato Ferroso 120 mg VO de 12/12h por no minimo 3 meses',
        text:
`ANEMIA FERROPRIVA SINTOMATICA

TRATAMENTO DOMICILIAR:
- Sulfato Ferroso 120 mg (Comprimido):
  Tomar 1 cp VO de 12/12h por no minimo 3 meses.`
      },
      es: {
        title: 'Anemia Ferropenica Sintomatica (D50.0)',
        via: 'VO',
        preview: 'Sulfato Ferroso 120 mg VO cada 12h por un minimo de 3 meses',
        text:
`ANEMIA FERROPENICA SINTOMATICA

TRATAMIENTO DOMICILIARIO:
- Sulfato Ferroso 120 mg (Comprimido):
  1 comp VO cada 12h por un periodo minimo de 3 meses.`
      }
    },

    {
      id: 'candidiase-vaginal',
      specialty: 'emerg',
      icon: '',
      tags: ['Candidiase', 'Fluconazol', 'Nistatina', 'Corrimento'],
      pt: {
        title: 'Candidiase Vaginal / Corrimento (B37.3)',
        via: 'VO / Vaginal',
        preview: 'Fluconazol 150 mg VO dose unica + Nistatina creme vaginal por 7 noites',
        text:
`CANDIDIASE VAGINAL / CORRIMENTO

TRATAMENTO DOMICILIAR:
- Fluconazol 150 mg: Tomar 1 cp VO em dose unica.
- Nistatina creme vaginal: Aplicar 1 aplicador por via vaginal a noite ao deitar, por 7 dias.`
      },
      es: {
        title: 'Candidiasis Vaginal / Flujo Vaginal (B37.3)',
        via: 'VO / Vaginal',
        preview: 'Fluconazol 150 mg VO dosis unica + Nistatina crema vaginal por 7 noches',
        text:
`CANDIDIASIS VAGINAL / FLUJO VAGINAL

TRATAMIENTO DOMICILIARIO:
- Fluconazol 150 mg: 1 comp VO en dosis unica.
- Nistatina crema vaginal: Aplicar 1 aplicador por via vaginal de noche al acostarse, por 7 dias.`
      }
    },

    {
      id: 'cerume-impactado',
      specialty: 'emerg',
      icon: '',
      tags: ['Cerume', 'Ouvido', 'Cera'],
      pt: {
        title: 'Cerume Impactado / Cera de Ouvido (H61.2)',
        via: 'Otologica',
        preview: 'Cerumin gotas otologicas de 8/8h por 5 dias antes da lavagem',
        text:
`CERUME IMPACTADO

TRATAMENTO DOMICILIAR:
- Cerumin (ou similar):
  Aplicar 5 gotas no ouvido afetado de 8/8h por 5 dias.
  Manter-se deitado com o ouvido afetado voltado para cima por 5 minutos apos a aplicacao.`
      },
      es: {
        title: 'Cerumen Impactado / Tapon de Cera (H61.2)',
        via: 'Otologica',
        preview: 'Cerumin gotas otologicas cada 8h por 5 dias antes del lavado',
        text:
`CERUMEN IMPACTADO

TRATAMIENTO DOMICILIARIO:
- Cerumin (o similar en gotas otologicas):
  Aplicar 5 gotas en el oido afectado cada 8h por 5 dias.
  Permanecer acostado con el oido afectado hacia arriba durante 5 minutos tras la aplicacion.`
      }
    },

    {
      id: 'cefaleia-tensional-guia',
      specialty: 'emerg',
      icon: '',
      tags: ['Cefaleia', 'Tensional', 'Dor de Cabeca'],
      pt: {
        title: 'Cefaleia Tensional (G44.2)',
        via: 'VO',
        preview: 'Dipirona 500 mg se dor + Ibuprofeno 300 mg de 12/12h por 5 dias',
        text:
`CEFALEIA TENSIONAL

TRATAMENTO DOMICILIAR:
- Dipirona 500 mg: Tomar 1 cp VO de 6/6h se houver dor.
- Ibuprofeno 300 mg: Tomar 1 cp VO de 12/12h por 5 dias.`
      },
      es: {
        title: 'Cefalea Tensional (G44.2)',
        via: 'VO',
        preview: 'Dipirona 500 mg si hay dolor + Ibuprofeno 300 mg cada 12h por 5 dias',
        text:
`CEFALEA TENSIONAL

TRATAMIENTO DOMICILIARIO:
- Dipirona 500 mg: 1 comp VO cada 6h en caso de dolor.
- Ibuprofeno 300 mg: 1 comp VO cada 12h por 5 dias.`
      }
    },

    {
      id: 'colica-biliar-litiase',
      specialty: 'gastro',
      icon: '',
      tags: ['Colica Biliar', 'Colelitíase', 'Buscopan', 'Tramadol'],
      pt: {
        title: 'Colica Biliar / Litiase Biliar (K80.2)',
        via: 'VO / EV',
        preview: 'Buscopan Composto + Ibuprofeno + Tramadol se refratario + Conduta EV na unidade',
        text:
`COLICA BILIAR / LITIASE BILIAR

TRATAMENTO DOMICILIAR:
- Buscopan Composto: Tomar 1 cp VO de 6/6h se houver dor abdominal ou febre.
- Ibuprofeno 300 mg: Tomar 1 cp VO de 12/12h por 5 dias.
- Tramadol 50 mg: Tomar 1 cp VO de 8/8h se houver dor intensa refrataria.
- Ondansetrona 8 mg: Tomar 1 cp VO de 8/8h se houver nauseas ou vomitos.

CONDUTA NA UNIDADE:
- Etapa 1: Dipirona 1 ampola + Buscopan Composto 1 ampola diluidos em SF 0,9% 100 mL EV.
- Etapa 2 (Se persistir): Repetir mais uma rodada da conduta acima.
- Etapa 3 (Se refratario): Tramadol 1 ampola diluida em SF 0,9% 100 mL EV.`
      },
      es: {
        title: 'Colico Biliar / Colelitiasis (K80.2)',
        via: 'VO / EV',
        preview: 'Buscapina Compositum + Ibuprofeno + Tramadol si es refractario + Conducta EV',
        text:
`COLICO BILIAR / COLELITIASIS

TRATAMIENTO DOMICILIARIO:
- Buscapina Compositum: 1 comp VO cada 6h en caso de dolor abdominal o fiebre.
- Ibuprofeno 300 mg: 1 comp VO cada 12h por 5 dias.
- Tramadol 50 mg: 1 comp VO cada 8h en caso de dolor intenso y refractario.
- Ondansetron 8 mg: 1 comp VO cada 8h si presenta nauseas o vomitos.

CONDUCTA EN LA UNIDAD:
- Etapa 1: Dipirona 1 ampolla + Buscapina Compositum 1 ampolla diluidas en SS 0,9% 100 mL EV.
- Etapa 2 (Si persiste): Repetir un segundo ciclo de la combinacion anterior.
- Etapa 3 (Si refractario): Tramadol 1 ampolla diluida en SS 0,9% 100 mL EV.`
      }
    },

    {
      id: 'conjuntivite-aguda',
      specialty: 'emerg',
      icon: '',
      tags: ['Conjuntivite', 'Tobramicina', 'Colirio'],
      pt: {
        title: 'Conjuntivite (H10.9)',
        via: 'Oftalmica',
        preview: 'Tobramicina colirio por 5 dias + Compressas frias locais',
        text:
`CONJUNTIVITE

TRATAMENTO DOMICILIAR:
- Tobramicina 0,3% (Colirio): Aplicar 2 gotas no olho afetado de 6/6h por 5 dias.

ORIENTACOES AO PACIENTE:
- Realizar compressas frias locais por 20 minutos no olho afetado.
- Evitar cocar os olhos e NAO utilizar soro fisiologico para lavagem ocular.
- Suspender o uso de lentes de contato durante todo o tratamento.`
      },
      es: {
        title: 'Conjuntivitis (H10.9)',
        via: 'Oftalmica',
        preview: 'Tobramicina colirio por 5 dias + Compresas frias locales',
        text:
`CONJUNTIVITIS

TRATAMIENTO DOMICILIARIO:
- Tobramicina 0,3% (Colirio): Aplicar 2 gotas en el ojo afectado cada 6h por 5 dias.

ORIENTACIONES AL PACIENTE:
- Realizar compresas frias locales por 20 minutos en el ojo afectado.
- Evitar frotarse los ojos y NO utilizar solucion salina para el lavado ocular.
- Suspender el uso de lentes de contacto durante todo el tratamiento.`
      }
    },

    {
      id: 'constipacao-funcional',
      specialty: 'gastro',
      icon: '',
      tags: ['Constipacao', 'Lactulona', 'Oleo Mineral', 'Enema'],
      pt: {
        title: 'Constipacao Funcional (K59.0)',
        via: 'VO / Retal',
        preview: 'Lactulona + Oleo Mineral + Orientacoes dieteticas + Fleet Enema na unidade',
        text:
`CONSTIPACAO FUNCIONAL

TRATAMENTO DOMICILIAR:
- Lactulona xarope: Tomar 15 mL VO 1x ao dia. Pode titular ate 30 mL/dia conforme resposta.
- Oleo Mineral: Tomar 15 mL VO de 8/8h por ate 7 dias se as fezes estiverem endurecidas.

ORIENTACOES AO PACIENTE:
- Aumentar a ingestao de agua (minimo de 2 litros por dia).
- Aumentar o consumo de fibras (frutas, verduras e cereais integrais).
- Praticar atividade fisica regular e evitar postergar a evacuacao.

CONDUTA NA UNIDADE (se necessario):
- Fosfato de Sodio (Fleet Enema): Aplicar 1 enema por via retal em dose unica.`
      },
      es: {
        title: 'Estrenimiento Funcional (K59.0)',
        via: 'VO / Rectal',
        preview: 'Lactulosa + Aceite Mineral + Orientaciones + Fleet Enema en unidad',
        text:
`ESTRENIMIENTO FUNCIONAL

TRATAMIENTO DOMICILIARIO:
- Lactulosa jarabe: 15 mL VO 1 vez al dia. Puede titularse hasta 30 mL/dia segun respuesta.
- Aceite Mineral: 15 mL VO cada 8h por hasta 7 dias si las heces estan impactadas o endurecidas.

ORIENTACIONES AL PACIENTE:
- Incrementar la ingesta de agua (minimo 2 litros al dia).
- Aumentar el consumo de fibra (frutas, verduras y cereales integrales).
- Practicar actividad fisica regular y evitar postergar el reflejo evacuatorio.

CONDUCTA EN LA UNIDAD (de ser necesario):
- Fosfato de Sodio (Fleet Enema): Aplicar 1 enema por via rectal en dosis unica.`
      }
    },

    {
      id: 'crise-hipertensiva-guia',
      specialty: 'emerg',
      icon: '',
      tags: ['Hipertensao', 'Captopril', 'Furosemida', 'Urgencia'],
      pt: {
        title: 'Crise Hipertensiva / Urgencia (I10 / R03.0)',
        via: 'VO / Sublingual',
        preview: 'Captopril VO/SL + Furosemida se congestao + Monitorizacao na unidade',
        text:
`CRISE HIPERTENSIVA / URGENCIA

CONDUTA NA UNIDADE:
- Captopril 25 mg Sublingual: Administrar 1 cp SL dose unica. Monitorar PA a cada 15 minutos.

TRATAMENTO DOMICILIAR (Pos-estabilizacao):
- Captopril 25 mg: Tomar 1 cp VO. Pode repetir em 1h se a pressao nao reduzir adequadamente.
- Furosemida 40 mg: Tomar 1 cp VO se houver sinais de congestao sistemica ou edema periferico.

ORIENTACOES:
- Enfatizar a adesao estrita ao tratamento anti-hipertensivo cronico.
- Encaminhar para acompanhamento ambulatorial com clinico ou cardiologista para ajuste.`
      },
      es: {
        title: 'Crisis Hipertensiva / Urgencia (I10 / R03.0)',
        via: 'VO / Sublingual',
        preview: 'Captopril VO/SL + Furosemida si hay congestion + Monitoreo en unidad',
        text:
`CRISIS HIPERTENSIVA / URGENCIA

CONDUCTA EN LA UNIDAD:
- Captopril 25 mg Sublingual: Administrar 1 comp SL dosis unica. Monitorear la PA cada 15 minutos.

TRATAMIENTO DOMICILIARIO (Post-estabilizacion):
- Captopril 25 mg: 1 comp VO. Puede repetirse en 1h si la presion no disminuye adecuadamente.
- Furosemida 40 mg: 1 comp VO si se presentan signos de congestion sistemica o edema periferico.

ORIENTACIONES:
- Reforzar la adherencia estricta al tratamiento antihipertensivo cronico.
- Derivar a consulta ambulatoria con medicina interna o cardiologia para ajuste farmacologico.`
      }
    },

    {
      id: 'dengue-manejo',
      specialty: 'emerg',
      icon: '',
      tags: ['Dengue', 'Hidratacao', 'Dipirona', 'SRO'],
      pt: {
        title: 'Dengue — Protocolo de Atendimento (A90)',
        via: 'VO / EV',
        preview: 'Dipirona + SRO + Hidratacao vigorosa (80 mL/kg/dia) + Proibido AINEs',
        text:
`DENGUE — PROTOCOLO CLINICO

TRATAMENTO DOMICILIAR:
- Dipirona 500 mg: Tomar 1 cp VO de 6/6h se houver dor ou febre (se persistir febre, intercalar com Paracetamol).
- Ondansetrona 8 mg: Tomar 1 cp VO de 8/8h se houver nauseas ou vomitos.
- Enterogermina: Tomar 1 frasco VO de 12/12h por 5 dias.
- Sais de Reidratacao Oral (SRO): Diluir 1 suche em 1L de agua e ingerir ao longo do dia.

ORIENTACOES CRITICAS:
- CONTRAINDICADO o uso de anti-inflamatorios (Ibuprofeno, Diclofenaco, Cetoprofeno, Nimesulida).
- Hidratacao vigorosa obrigatoria: minimo de 80 mL/kg/dia.
- Alimentacao leve. Retornar imediatamente se houver sinais de alarme: sangramentos, dor abdominal intensa, vomitos persistentes ou sonolencia.

CONDUTA NA UNIDADE:
- Dipirona 1 ampola + Ondansetrona 1 ampola diluidas em SF 0,9% 250 mL EV.`
      },
      es: {
        title: 'Dengue — Protocolo de Atencion (A90)',
        via: 'VO / EV',
        preview: 'Dipirona + SRO + Hidratacion agresiva (80 mL/kg/dia) + Prohibido AINEs',
        text:
`DENGUE — PROTOCOLO CLINICO

TRATAMIENTO DOMICILIARIO:
- Dipirona 500 mg: 1 comp VO cada 6h si presenta dolor o fiebre (si persiste la fiebre, intercalar con Paracetamol).
- Ondansetron 8 mg: 1 comp VO cada 8h en caso de nauseas o vomitos.
- Enterogermina: 1 frasco VO cada 12h por 5 dias.
- Sales de Rehidratacion Oral (SRO): Diluir 1 sobre en 1L de agua y consumir a lo largo del dia.

ORIENTACIONES CRITICAS:
- CONTRAINDICADO el uso de antiinflamatorios (Ibuprofeno, Diclofenaco, Ketoprofeno, Nimesulida).
- Hidratacion energica obligatoria: minimo de 80 mL/kg/dia.
- Alimentacion liviana. Regresar de inmediato si presenta signos de alarma: sangrados, dolor abdominal intenso, vomitos persistentes o somnolencia.

CONDUCTA EN LA UNIDAD:
- Dipirona 1 ampolla + Ondansetron 1 ampolla diluidas en SS 0,9% 250 mL EV.`
      }
    },

    {
      id: 'dermatite-contato-alergia',
      specialty: 'emerg',
      icon: '',
      tags: ['Dermatite', 'Alergia', 'Loratadina', 'Corticoide'],
      pt: {
        title: 'Dermatite de Contato / Reacao Alergica Leve (L23.9)',
        via: 'VO / Topico',
        preview: 'Loratadina 10 mg VO a noite + Creme Dexclorfeniramina+Betametasona',
        text:
`DERMATITE DE CONTATO / REACAO ALERGICA LEVE

TRATAMENTO DOMICILIAR:
- Loratadina 10 mg: Tomar 1 cp VO a noite por 7 dias.
- Dexclorfeniramina + Betametasona (creme): Aplicar fina camada na regiao afetada 2x ao dia por 7 dias.`
      },
      es: {
        title: 'Dermatitis de Contacto / Reaccion Alergica Leve (L23.9)',
        via: 'VO / Topico',
        preview: 'Loratadina 10 mg VO de noche + Crema Dexclorfeniramina+Betametasona',
        text:
`DERMATITIS DE CONTACTO / REACCION ALERGICA LEVE

TRATAMIENTO DOMICILIARIO:
- Loratadina 10 mg: 1 comp VO de noche por 7 dias.
- Dexclorfeniramina + Betametasona (crema): Aplicar una fina capa en la region afectada 2 veces al dia por 7 dias.`
      }
    },

    {
      id: 'dermatite-seborreica',
      specialty: 'emerg',
      icon: '',
      tags: ['Seborreia', 'Cetoconazol', 'Hidrocortisona'],
      pt: {
        title: 'Dermatite Seborreica Leve (L21.0)',
        via: 'Topico / IM',
        preview: 'Cetoconazol shampoo + Hidrocortisona creme + Dipirona IM se prurido grave',
        text:
`DERMATITE SEBORREICA LEVE

TRATAMENTO DOMICILIAR:
- Cetoconazol shampoo 2%: Aplicar no couro cabeludo 3x por semana, deixar agir por 5 minutos e enxaguar. Manter por 4 semanas.
- Hidrocortisona creme 1%: Aplicar fina camada 2x/dia nas areas acometidas por 5 dias.

CONDUTA NA UNIDADE:
- Dipirona 1 g IM: Indicado em caso de queixa de dor local ou prurido refratario intenso.`
      },
      es: {
        title: 'Dermatitis Seborreica Leve (L21.0)',
        via: 'Topico / IM',
        preview: 'Cetoconazol shampoo + Hidrocortisona crema + Dipirona IM si hay prurito grave',
        text:
`DERMATITIS SEBORREICA LEVE

TRATAMIENTO DOMICILIARIO:
- Cetoconazol shampoo 2%: Aplicar en el cuero cabelludo 3 veces por semana, dejar actuar por 5 minutos y enjuagar. Continuar por 4 semanas.
- Hidrocortisona crema 1%: Aplicar una fina capa 2 veces al dia en las zonas afectadas por 5 dias.

CONDUCTA EN LA UNIDAD:
- Dipirona 1 g IM: Indicado en caso de dolor local o prurito refractario intenso.`
      }
    },

    {
      id: 'dermatofitose-pe-atleta',
      specialty: 'emerg',
      icon: '',
      tags: ['Micose', 'Clotrimazol', 'Pe de Atleta'],
      pt: {
        title: 'Dermatofitose Interdigital / Pe de Atleta (B35.3)',
        via: 'Topico / IM',
        preview: 'Clotrimazol creme por 14 dias + Manter pes secos',
        text:
`DERMATOFITOSE INTERDIGITAL / PE DE ATLETA

TRATAMENTO DOMICILIAR:
- Clotrimazol creme: Aplicar fina camada nas lesoes 2x/dia por 14 dias.

ORIENTACOES:
- Manter os pes sempre secos, limpos e arejados. Trocar as meias diariamente.

CONDUTA NA UNIDADE:
- Dipirona 1 g IM: Realizar apenas se houver dor local intensa associada.`
      },
      es: {
        title: 'Dermatofitosis Interdigital / Pie de Atleta (B35.3)',
        via: 'Topico / IM',
        preview: 'Clotrimazol crema por 14 dias + Mantener pies secos',
        text:
`DERMATOFITOSIS INTERDIGITAL / PIE DE ATLETA

TRATAMIENTO DOMICILIARIO:
- Clotrimazol crema: Aplicar una fina capa en las lesiones 2 veces al dia por 14 dias.

ORIENTACIONES:
- Mantener los pies siempre secos, limpios y ventilados. Cambiar las medias diariamente.

CONDUCTA EN LA UNIDAD:
- Dipirona 1 g IM: Administrar solo en caso de dolor local intenso asociado.`
      }
    },

    {
      id: 'dpoc-exacerbado-guia',
      specialty: 'pneumo',
      icon: '',
      tags: ['DPOC', 'Prednisona', 'Azitromicina', 'Inalacao'],
      pt: {
        title: 'DPOC em Exacerbacao (J44.1)',
        via: 'VO / Inalatorio / EV',
        preview: 'Prednisona + Azitromicina + Fenoterol/Ipratropio + Hidrocortisona EV',
        text:
`DPOC EM EXACERBACAO

TRATAMENTO DOMICILIAR:
- Prednisona 20 mg: Tomar 1 cp VO de 12/12h por 5 dias.
- Azitromicina 500 mg: Tomar 1 cp VO 1x/dia por 5 dias.
- Salbutamol spray: Inalar 2 jatos de 6/6h com uso de espacador.

CONDUTA NA UNIDADE:
- Nebulizacao de resgate: 5 gotas de Fenoterol + 5 gotas de Brometo de Ipratropio diluidas em 5 mL de SF 0,9%.
- Corticoterapia sistemica: Hidrocortisona 100 mg EV ou IM.`
      },
      es: {
        title: 'EPOC Exacerbado (J44.1)',
        via: 'VO / Inhalatorio / EV',
        preview: 'Prednisona + Azitromicina + Fenoterol/Ipratropio + Hidrocortisona EV',
        text:
`EPOC EXACERBADO

TRATAMIENTO DOMICILIARIO:
- Prednisona 20 mg: 1 comp VO cada 12h por 5 dias.
- Azitromicina 500 mg: 1 comp VO 1 vez al dia por 5 dias.
- Salbutamol spray: Inhalar 2 disparos cada 6h con uso de espaciador.

CONDUCTA EN LA UNIDAD:
- Nebulizacion de rescate: 5 gotas de Fenoterol + 5 gotas de Bromuro de Ipratropio diluidas en 5 mL de SS 0,9%.
- Corticoterapia sistemica: Hidrocortisona 100 mg EV o IM.`
      }
    },

    {
      id: 'dor-muscular-lombalgia',
      specialty: 'emerg',
      icon: '',
      tags: ['Lombalgia', 'Diclofenaco', 'Ciclobenzaprina', 'Mialgia'],
      pt: {
        title: 'Dor Muscular / Lombalgia / Algia (M54.5)',
        via: 'VO / IM',
        preview: 'Diclofenaco + Ciclobenzaprina VO + Dipirona+Diclofenaco IM na unidade',
        text:
`DOR MUSCULAR / LOMBALGIA

TRATAMENTO DOMICILIAR:
- Dipirona 500 mg: Tomar 1 cp VO de 6/6h se houver dor.
- Diclofenaco Sodico 50 mg: Tomar 1 cp VO de 8/8h por 5 dias.
- Ciclobenzaprina 10 mg: Tomar 1 cp VO 2 horas antes de dormir por 5 dias.

CONDUTA NA UNIDADE:
- Dipirona 1 g IM + Diclofenaco 75 mg IM (Dose unica combinada).`
      },
      es: {
        title: 'Dolor Muscular / Lumbalgia / Mialgia (M54.5)',
        via: 'VO / IM',
        preview: 'Diclofenaco + Ciclobenzaprina VO + Dipirona+Diclofenaco IM en unidad',
        text:
`DOLOR MUSCULAR / LUMBALGIA

TRATAMIENTO DOMICILIARIO:
- Dipirona 500 mg: 1 comp VO cada 6h en caso de dolor.
- Diclofenaco Sodico 50 mg: 1 comp VO cada 8h por 5 dias.
- Ciclobenzaprina 10 mg: 1 comp VO 2 horas antes de dormir por 5 dias.

CONDUCTA EN LA UNIDAD:
- Dipirona 1 g IM + Diclofenaco 75 mg IM (Dosis unica combinada).`
      }
    },

    {
      id: 'enterobiase-oxiuros',
      specialty: 'emerg',
      icon: '',
      tags: ['Parasitose', 'Albendazol', 'Oxiuros'],
      pt: {
        title: 'Enterobiase / Infestacao por Oxiuros (B80)',
        via: 'VO / IM',
        preview: 'Albendazol dose unica com repeticao em 14 dias + Tratar contatos',
        text:
`ENTEROBIASE / INFESTACAO POR OXIUROS

TRATAMENTO DOMICILIAR:
- Albendazol 400 mg: Tomar dose unica VO. Repetir estritamente apos 14 dias.

ORIENTACOES CONTROLE:
- Lavar roupas de cama, toalhas e roupas intimas em agua quente. Higiene pessoal rigorosa.
- Tratar simultaneamente todos os contatos domiciliares.

CONDUTA NA UNIDADE:
- Dipirona 1 g IM: Indicado apenas se houver prurido anal intenso refratario.`
      },
      es: {
        title: 'Enterobiasis / Infeccion por Oxiuros (B80)',
        via: 'VO / IM',
        preview: 'Albendazol dosis unica con repeticion en 14 dias + Tratar contactos',
        text:
`ENTEROBIASIS / INFECCION POR OXIUROS

TRATAMIENTO DOMICILIARIO:
- Albendazol 400 mg: 1 comp VO en dosis unica. Repetir estrictamente a los 14 dias.

ORIENTACIONES DE CONTROL:
- Lavar la ropa de cama, toallas y ropa interior con agua caliente. Higiene personal rigurosa.
- Tratar simultaneamente a todos los contactos convivientes o domiciliarios.

CONDUCTA EN LA UNIDAD:
- Dipirona 1 g IM: Administrar solo en caso de prurito anal intenso refractario.`
      }
    },

    {
      id: 'enxaqueca-migranea-guia',
      specialty: 'emerg',
      icon: '',
      tags: ['Enxaqueca', 'Naratriptana', 'Decadron', 'Ondansetrona'],
      pt: {
        title: 'Enxaqueca / Migranea (G43.9)',
        via: 'VO / IM',
        preview: 'Naratriptana VO na crise + Protocolo resgate IM na unidade',
        text:
`ENXAQUECA / MIGRANEA

TRATAMENTO DOMICILIAR:
- Dipirona 500 mg: Tomar 1 cp VO de 6/6h se houver dor.
- Ibuprofeno 300 mg: Tomar 1 cp VO de 12/12h por 5 dias.
- Naratriptana 2,5 mg: Tomar 1 cp VO ao primeiro sinal de dor intensa. Pode repetir em 4h se necessario (Dose maxima de 2 cp/dia).

CONDUTA NA UNIDADE (Protocolo Resgate):
- Dipirona 1 g IM + Decadron (Dexametasona) 4 mg IM + Ondansetrona 1 ampola IM.`
      },
      es: {
        title: 'Migrana / Jaqueca (G43.9)',
        via: 'VO / IM',
        preview: 'Naratriptan VO en crisis + Protocolo rescate IM en unidad',
        text:
`MIGRANA / JAQUECA

TRATAMIENTO DOMICILIARIO:
- Dipirona 500 mg: 1 comp VO cada 6h en caso de dolor.
- Ibuprofeno 300 mg: 1 comp VO cada 12h por 5 dias.
- Naratriptan 2,5 mg: 1 comp VO ante el primer signo de dolor intenso. Puede repetirse a las 4h si es necesario (Dosis maxima: 2 comp/dia).

CONDUCTA EN LA UNIDAD (Protocolo Rescate):
- Dipirona 1 g IM + Decadron (Dexametasona) 4 mg IM + Ondansetron 1 ampolla IM.`
      }
    },

    {
      id: 'escabiose-sarna',
      specialty: 'emerg',
      icon: '',
      tags: ['Escabiose', 'Permetrina', 'Ivermectina', 'Sarna'],
      pt: {
        title: 'Escabiose / Sarna (B86)',
        via: 'Topico / VO / IM',
        preview: 'Permetrina 5% locao + Ivermectina VO se refratario ou extenso',
        text:
`ESCABIOSE / SARNA

TRATAMENTO DOMICILIAR:
- Permetrina 5% creme/locao: Aplicar a noite do pescoco aos pes (cabeca incluida se criancas), deixar agir por 8 a 12h e remover completamente no banho pela manha. Repetir apos 7 dias.
- Ivermectina 6 mg (Casos extensos ou falha topica): Tomar 3 comprimidos VO em dose unica (Para padrao adulto). Repetir apos 7 dias.

CONDUTA NA UNIDADE:
- Dipirona 1 g IM: Reservado para controle de prurido generalizado refratario intenso.`
      },
      es: {
        title: 'Escabiosis / Sarna (B86)',
        via: 'Topico / VO / IM',
        preview: 'Permetrina 5% crema + Ivermectina VO si es refractario o extenso',
        text:
`ESCABIOSIS / SARNA

TRATAMIENTO DOMICILIARIO:
- Permetrina 5% crema/locion: Aplicar de noche desde el cuello hasta los pies (incluir cabeza en ninos), dejar actuar por 8-12h y retirar por completo en el bano matutino. Repetir a los 7 dias.
- Ivermectina 6 mg (Casos extensos o falla topica): 3 comprimidos VO en dosis unica (Estandar adulto). Repetir a los 7 dias.

CONDUCTA EN LA UNIDAD:
- Dipirona 1 g IM: Reservado para el control de prurito generalizado refractario intenso.`
      }
    },

    {
      id: 'erisipela-guia',
      specialty: 'infecto',
      icon: '',
      tags: ['Erisipela', 'Cefalexina', 'Ceftriaxona', 'Infeccioso'],
      pt: {
        title: 'Erisipela (A46)',
        via: 'VO / Topico / IM',
        preview: 'Cefalexina VO por 10 dias + Neomicina+Bacitracina + Ceftriaxona IM na unidade',
        text:
`ERISIPELA

TRATAMENTO DOMICILIAR:
- Cefalexina 500 mg: Tomar 1 cp VO de 6/6h por 10 dias.
- Dipirona 500 mg: Tomar 1 cp VO de 6/6h se houver dor ou febre.
- Ibuprofeno 300 mg: Tomar 1 cp VO de 8/8h por 5 dias.
- Neomicina + Bacitracina pomada: Aplicar fina camada na lesao afetada 3x/dia.

CONDUTA NA UNIDADE:
- Ataque/Analgesia: Dipirona 1 g IM + Ceftriaxona 1 g IM dose unica.`
      },
      es: {
        title: 'Erisipela (A46)',
        via: 'VO / Topico / IM',
        preview: 'Cefalexina VO por 10 dias + Neomicina+Bacitracina + Ceftriaxona IM',
        text:
`ERISIPELA

TRATAMIENTO DOMICILIARIO:
- Cefalexina 500 mg: 1 comp VO cada 6h por 10 dias.
- Dipirona 500 mg: 1 comp VO cada 6h si presenta dolor o fiebre.
- Ibuprofeno 300 mg: 1 comp VO cada 8h por 5 dias.
- Neomicina + Bacitracina pomada: Aplicar una fina capa en la region afectada 3 veces al dia.

CONDUCTA EN LA UNIDAD:
- Carga/Analgesia: Dipirona 1 g IM + Ceftriaxona 1 g IM dosis unica.`
      }
    },

    {
      id: 'escoriacoes-feridas',
      specialty: 'emerg',
      icon: '',
      tags: ['Feridas', 'Escoriacoes', 'Sulfadiazina'],
      pt: {
        title: 'Escoriacoes / Feridas Leves (S00.8)',
        via: 'Topico / IM',
        preview: 'Limpeza com SF 0,9% + Sulfadiazina de Prata topica',
        text:
`ESCORIACOES / FERIDAS LEVES

TRATAMENTO DOMICILIAR:
- Sulfadiazina de Prata (creme): Aplicar fina camada na lesao 1 a 2x ao dia ate cicatrizacao completa.
- Soro Fisiologico 0,9%: Lavar abundantemente o local 2x ao dia estritamente antes de aplicar a pomada.

CONDUTA NA UNIDADE:
- Analgesia local: Dipirona 1 g IM dose unica.`
      },
      es: {
        title: 'Excoriaciones / Heridas Leves (S00.8)',
        via: 'Topico / IM',
        preview: 'Limpieza con SS 0,9% + Sulfadiazina de Plata topica',
        text:
`EXCORIACIONES / HERIDAS LEVES

TRATAMIENTO DOMICILIARIO:
- Sulfadiazina de Plata (crema): Aplicar una fina capa en la lesion 1 a 2 veces al dia hasta la cicatrizacion completa.
- Solucion Salina 0,9%: Lavar abundantemente la zona 2 veces al dia estrictamente antes de la aplicacion de la crema.

CONDUCTA EN LA UNIDAD:
- Analgesia local: Dipirona 1 g IM dosis unica.`
      }
    },

    {
      id: 'faringite-viral-guia',
      specialty: 'emerg',
      icon: '',
      tags: ['Faringite', 'Viral', 'Sintomaticos'],
      pt: {
        title: 'Faringite / Faringoamigdalite Viral (J02.9)',
        via: 'VO / IM',
        preview: 'Manejo sintomatico com Dipirona e Ibuprofeno. Proibido antibioticos',
        text:
`FARINGITE / FARINGOAMIGDALITE VIRAL

TRATAMENTO DOMICILIAR:
- Dipirona 500 mg: Tomar 1 cp VO de 6/6h se houver dor ou febre.
- Ibuprofeno 300 mg: Tomar 1 cp VO de 8/8h por 3 dias.

CONDUTA NA UNIDADE / ORIENTACOES:
- Dipirona 1 g IM se dor intensa aguda.
- Orientar estritamente repouso, hidratacao abundante e evitar o uso desnecessario de antibioticos.`
      },
      es: {
        title: 'Faringitis / Faringoamigdalitis Viral (J02.9)',
        via: 'VO / IM',
        preview: 'Manejo sintomatico con Dipirona e Ibuprofeno. Prohibido antibioticos',
        text:
`FARINGITIS / FARINGOAMIGDALITIS VIRAL

TRATAMIENTO DOMICILIARIO:
- Dipirona 500 mg: 1 comp VO cada 6h en caso de dolor o fiebre.
- Ibuprofeno 300 mg: 1 comp VO cada 8h por 3 dias.

CONDUCTA EN LA UNIDAD / ORIENTACIONES:
- Dipirona 1 g IM si presenta dolor intenso agudo.
- Orientar estrictamente reposo, hidratacion abundante y evitar el uso innecesario de antibioticos.`
      }
    },

    {
      id: 'febre-sem-sinal',
      specialty: 'emerg',
      icon: '',
      tags: ['Febre', 'Sintomaticos', 'Investigacao'],
      pt: {
        title: 'Febre Sem Sinais Localizatorios (R50.9)',
        via: 'VO / IM',
        preview: 'Dipirona VO + Hidratacao vigorosa + Dipirona IM na unidade',
        text:
`FEBRE SEM SINAIS LOCALIZATORIOS

TRATAMENTO DOMICILIAR:
- Dipirona 500 mg: Tomar 1 cp VO de 6/6h se houver febre ou dor associada.
- Hidratacao oral: Ingerir agua ou SRO de forma abundante.

CONDUTA NA UNIDADE:
- Antitermico: Dipirona 1 g IM dose unica.`
      },
      es: {
        title: 'Fiebre Sin Foco Localizado (R50.9)',
        via: 'VO / IM',
        preview: 'Dipirona VO + Hidratacion abundante + Dipirona IM en unidad',
        text:
`FIEBRE SIN FOCO LOCALIZADO

TRATAMIENTO DOMICILIARIO:
- Dipirona 500 mg: 1 comp VO cada 6h en caso de fiebre o dolor asociado.
- Hidratacion oral: Consumo abundante de agua o SRO.

CONDUCTA EN LA UNIDAD:
- Antipiretico: Dipirona 1 g IM dosis unica.`
      }
    },

    {
      id: 'gastrite-drge-dispepsia',
      specialty: 'gastro',
      icon: '',
      tags: ['Gastrite', 'Omeprazol', 'Bromoprida', 'Dispepsia'],
      pt: {
        title: 'Gastrite / DRGE / Dispepsia (K29.7 / K21.9 / K30)',
        via: 'VO / IM',
        preview: 'Omeprazol jejum + Bromoprida pre-refeicao + Escopolamina se colica',
        text:
`GASTRITE / DRGE / DISPEPSIA

TRATAMENTO DOMICILIAR:
- Omeprazol 20 mg: Tomar 1 cp VO em jejum absoluto pela manha por 30 dias.
- Bromoprida 10 mg: Tomar 1 cp VO 3x ao dia, 30 minutos antes das refeicoes principais.
- Escopolamina + Dipirona (10 mg + 250 mg): Tomar 1 cp VO de 6/6h se houver dor em colica abdominal.

CONDUTA NA UNIDADE:
- Alivio sintomatico: Dipirona 1 g IM + Ondansetrona 8 mg IM.`
      },
      es: {
        title: 'Gastritis / ERGE / Dispepsia (K29.7 / K21.9 / K30)',
        via: 'VO / IM',
        preview: 'Omeprazol ayuno + Bromoprida pre-comida + Escopolamina si hay colico',
        text:
`GASTRITIS / ERGE / DISPEPSIA

TRATAMIENTO DOMICILIARIO:
- Omeprazol 20 mg: 1 comp VO en ayunas por la manana por 30 dias.
- Bromoprida 10 mg: 1 comp VO 3 veces al dia, 30 minutos antes de las comidas principales.
- Escopolamina + Dipirona (10 mg + 250 mg): 1 comp VO cada 6h si presenta dolor de tipo colico abdominal.

CONDUCTA EN LA UNIDAD:
- Alivio sintomatico: Dipirona 1 g IM + Ondansetron 8 mg IM.`
      }
    },

    {
      id: 'geca-gastroenterite',
      specialty: 'gastro',
      icon: '',
      tags: ['GECA', 'Diarreia', 'Enterogermina', 'Ciprofloxacino'],
      pt: {
        title: 'Gastroenterite Aguda - GECA (A09)',
        via: 'VO / IM',
        preview: 'Manejo sintomatico + SRO + Probioticos + Cipro se disenteria/febre',
        text:
`GASTROENTERITE AGUDA (GECA)

TRATAMENTO DOMICILIAR:
- Omeprazol 20 mg: Tomar 1 cp VO em jejum pela manha por 10 dias.
- Enterogermina: Tomar 1 frasco VO de 12/12h por 5 dias.
- Ondansetrona 8 mg: Tomar 1 cp VO de 8/8h se houver nauseas ou vomitos.
- Escopolamina + Dipirona (10 mg + 250 mg): Tomar 1 cp VO de 6/6h se dor abdominal ou febre.
- Sais de Reidratacao Oral (SRO): Diluir 1 suche em 1L de agua e beber ao longo do dia.

CONDUTA SE DISENTERIA (Presenca de sangue nas fezes, febre alta ou dor intensa em pontada):
- Ciprofloxacino 500 mg: Tomar 1 cp VO de 12/12h por 5 dias.

CONDUTA NA UNIDADE:
- Dipirona 1 g IM + Ondansetrona 8 mg IM.`
      },
      es: {
        title: 'Gastroenteritis Aguda - GECA (A09)',
        via: 'VO / IM',
        preview: 'Manejo sintomatico + SRO + Probioticos + Cipro si hay disenteria/fiebre',
        text:
`GASTROENTERITIS AGUDA (GECA)

TRATAMIENTO DOMICILIARIO:
- Omeprazol 20 mg: 1 comp VO en ayunas por la manana por 10 dias.
- Enterogermina: 1 frasco VO cada 12h por 5 dias.
- Ondansetron 8 mg: 1 comp VO cada 8h en caso de nauseas o vomitos.
- Escopolamina + Dipirona (10 mg + 250 mg): 1 comp VO cada 6h si presenta dolor abdominal o fiebre.
- Sales de Rehidratacion Oral (SRO): Diluir 1 sobre en 1L de agua y consumir a lo largo del dia.

CONDUCTA EN CASO DE DISENTERIA (Sangre en heces, fiebre alta o dolor punzante intenso):
- Ciprofloxacino 500 mg: 1 comp VO cada 12h por 5 dias.

CONDUCTA EN LA UNIDAD:
- Dipirona 1 g IM + Ondansetron 8 mg IM.`
      }
    },

    {
      id: 'herpes-simples-guia',
      specialty: 'infecto',
      icon: '',
      tags: ['Herpes', 'Aciclovir', 'Infeccioso'],
      pt: {
        title: 'Herpes Simples Cutaneo/Mucoso (B00.9)',
        via: 'VO / IM',
        preview: 'Aciclovir 400 mg por 7 dias (Reduzir para 5 dias se gestante)',
        text:
`HERPES SIMPLES

TRATAMENTO DOMICILIAR:
- Aciclovir 400 mg:
  Tomar 1 cp via oral de 8/8h por 7 dias.
  ATENCAO: Se paciente gestante, reduzir o tempo de tratamento para 5 dias.

CONDUTA NA UNIDADE:
- Dipirona 1 g IM se houver queixa de dor local intensa.`
      },
      es: {
        title: 'Herpes Simple Cutaneo/Mucoso (B00.9)',
        via: 'VO / IM',
        preview: 'Aciclovir 400 mg por 7 dias (Reducir a 5 dias si esta embarazada)',
        text:
`HERPES SIMPLE

TRATAMIENTO DOMICILIARIO:
- Aciclovir 400 mg:
  1 comp VO cada 8h por 7 dias.
  ATENCAO: Si la paciente esta embarazada, reducir el tiempo de tratamiento a 5 dias.

CONDUCTA EN LA UNIDAD:
- Dipirona 1 g IM en caso de dolor local intenso.`
      }
    },

    {
      id: 'hiperglicemia-dm2-descomp',
      specialty: 'emerg',
      icon: '',
      tags: ['Diabetes', 'Hiperglicemia', 'Hidratacao'],
      pt: {
        title: 'Hiperglicemia / Descompensacao do DM2 (E11.9)',
        via: 'EV / IM',
        preview: 'Expansao volemica com SF 0,9% + Analgesia + Investigacao de gatilhos',
        text:
`HIPERGLICEMIA / DESCOMPENSACAO DO DM2

CONDUTA NA UNIDADE:
1. Hidratacao: SF 0,9% EV em infusao de 500 mL (Indicado em casos de desidratacao clinica moderada).
2. Analgesia: Dipirona 1 g IM se houver queixas algicas associadas.
3. Investigacao: Rastrear causas secundarias (infeccoes oculta, infarto) ou ma aderencia farmacologica ao tratamento habitual.`
      },
      es: {
        title: 'Hiperglucemia / Descompensacion de la DM2 (E11.9)',
        via: 'EV / IM',
        preview: 'Expansion volemica con SS 0,9% + Analgesia + Investigacion de gatillos',
        text:
`HIPERGLUCEMIA / DESCOMPENSACION DE LA DM2

CONDUCTA EN LA UNIDAD:
1. Hidratacion: SS 0,9% EV en infusion de 500 mL (Indicado en casos de deshidratacion clinica moderada).
2. Analgesia: Dipirona 1 g IM si presenta sintomas algicos asociados.
3. Investigacion: Rastrear causas secundarias (infecciones ocultas, infarto) o falta de adherencia al tratamiento farmacologico habitual.`
      }
    },

    {
      id: 'hipertensao-descompensada-urg',
      specialty: 'emerg',
      icon: '',
      tags: ['Hipertensao', 'Captopril', 'Furosemida'],
      pt: {
        title: 'Hipertensao Arterial Descompensada (I10)',
        via: 'VO / IM',
        preview: 'Captopril VO + Dipirona IM + Furosemida se congestao + Reavaliar 1h',
        text:
`HIPERTENSAO ARTERIAL DESCOMPENSADA

CONDUTA NA UNIDADE:
1. Fase Inicial: Captopril 25 mg VO + Dipirona 1 g IM (Se cefaleia/dor associada).
2. Avaliacao de Congestao: Furosemida 40 mg VO se houver sinais de congestao pulmonar ou edema periferico (ATENCAO: Avaliar rigorosamente se o paciente e renal cronico).
3. Monitorizacao: Manter em observacao e realizar retorno com nova afericao de PA em 1 hora.`
      },
      es: {
        title: 'Hipertension Arterial Descompensada (I10)',
        via: 'VO / IM',
        preview: 'Captopril VO + Dipirona IM + Furosemida si hay congestion + Reevaluar 1h',
        text:
`HIPERTENSION ARTERIAL DESCOMPENSADA

CONDUCTA EN LA UNIDAD:
1. Fase Inicial: Captopril 25 mg VO + Dipirona 1 g IM (Si presenta cefalea o dolor asociado).
2. Evaluacion de Congestion: Furosemida 40 mg VO si se observan signos de congestion pulmonar o edema periferico (ATENCAO: Evaluar rigurosamente si el paciente padece enfermedad renal cronica).
3. Monitoreo: Mantener en observacion y realizar una reevaluacion de la PA en 1 hora.`
      }
    },

    {
      id: 'hipoglicemia-sintomatica-guia',
      specialty: 'emerg',
      icon: '',
      tags: ['Hipoglicemia', 'Glicose 50%', 'Emergencia'],
      pt: {
        title: 'Hipoglicemia Sintomatica (E16.2)',
        via: 'EV',
        preview: 'Glicose 50% EV lento diluida em 100 mL de SF 0,9% se tremores ou rebaixamento',
        text:
`HIPOGLICEMIA SINTOMATICA

CONDUTA IMEDIATA NA UNIDADE:
- Glicose 50% EV (1 ampola de 20 mL):
  Infundir em bolus lento (10 a 15 minutos) diluida em 100 mL de SF 0,9% EV.
  (Indicado estritamente se houver sintomas neuroglicopenicos ou adrenergicos ativos: tremores, sudorese profusa ou rebaixamento do nivel de consciencia).`
      },
      es: {
        title: 'Hipoglucemia Sintomatica (E16.2)',
        via: 'EV',
        preview: 'Glucosa 50% EV lento diluida en 100 mL de SS 0,9% si hay temblores o estupor',
        text:
`HIPOGLUCEMIA SINTOMATICA

CONDUCTA INMEDIATA EN LA UNIDAD:
- Glucosa 50% EV (1 ampolla de 20 mL):
  Infundir en bolo lento (10 a 15 minutos) diluida en 100 mL de SS 0,9% EV.
  (Indicado estrictamente si presenta sintomas neuroglucopenicos o adrenergicos activos: temblores, sudoracion profusa o alteracion del estado de conciencia).`
      }
    },

    {
      id: 'impetigo-cutaneo',
      specialty: 'emerg',
      icon: '',
      tags: ['Impetigo', 'Cefalexina', 'Mupirocina', 'Pediatria'],
      pt: {
        title: 'Impetigo (L01.0)',
        via: 'VO / Topico / IM',
        preview: 'Cefalexina VO por 7 dias + Mupirocina pomada nas lesoes',
        text:
`IMPETIGO

TRATAMENTO DOMICILIAR:
- Cefalexina 500 mg: Tomar 1 cp VO de 6/6h por 7 dias.
- Mupirocina (pomada): Aplicar fina camada nas lesoes crostosas 3x ao dia por 7 dias.

CONDUTA NA UNIDADE:
- Dipirona 1 g IM se houver queixa de dor local associada.`
      },
      es: {
        title: 'Impetigo (L01.0)',
        via: 'VO / Topico / IM',
        preview: 'Cefalexina VO por 7 dias + Mupirocina crema en lesiones',
        text:
`IMPETIGO

TRATAMIENTO DOMICILIARIO:
- Cefalexina 500 mg: 1 comp VO cada 6h por 7 dias.
- Mupirocina (pomada): Aplicar una fina capa en las lesiones costrosas 3 veces al dia por 7 dias.

CONDUCTA EN LA UNIDAD:
- Dipirona 1 g IM en caso de dolor local asociado.`
      }
    },

    {
      id: 'itu-baixa-pielonefrite',
      specialty: 'infecto',
      icon: '',
      tags: ['ITU', 'Cistite', 'Nitrofurantoina', 'Ceftriaxona'],
      pt: {
        title: 'Infeccao do Trato Urinario — ITU (N39.0)',
        via: 'VO / IM',
        preview: 'Nitrofurantoina ou Cipro VO + Fenazopiridina + Ceftriaxona se Pielonefrite',
        text:
`INFECCAO DO TRATO URINARIO (ITU)

TRATAMENTO DOMICILIAR (Cistite/ITU Baixa):
- Nitrofurantoina 100 mg: Tomar 1 cp VO de 6/6h por 7 dias.
  OU Ciprofloxacino 500 mg: Tomar 1 cp VO de 12/12h por 7 dias.
- Fenazopiridina 200 mg: Tomar 1 cp VO de 8/8h por 3 dias (ATENCAO: Orientar coloracao alaranjada da urina).
- Ibuprofeno 300 mg: Tomar 1 cp VO de 8/8h por 5 dias.

CONDUTA EM CASO DE PIELONEFRITE / CONDUTA NA UNIDADE:
- Ceftriaxona 1 g IM: Aplicar em dose unica na unidade (Manutencao domiciliar ou internacao conforme gravidade).
- Sintomaticos: Dipirona 1 g IM dose unica.`
      },
      es: {
        title: 'Infeccion del Tracto Urinario — ITU (N39.0)',
        via: 'VO / IM',
        preview: 'Nitrofurantoina o Cipro VO + Fenazopiridina + Ceftriaxona si hay Pielonefritis',
        text:
`INFECCION DEL TRACTO URINARIO (ITU)

TRATAMIENTO DOMICILIARIO (Cistitis/ITU Baja):
- Nitrofurantoina 100 mg: 1 comp VO cada 6h por 7 dias.
  O Ciprofloxacino 500 mg: 1 comp VO cada 12h por 7 dias.
- Fenazopiridina 200 mg: 1 comp VO cada 8h por 3 dias (ATENCAO: Advertir sobre la coloracion naranja de la orina).
- Ibuprofeno 300 mg: 1 comp VO cada 8h por 5 dias.

CONDUCTA EN CASO DE PIELONEFRITIS / CONDUCTA EN LA UNIDAD:
- Ceftriaxona 1 g IM: Administrar en dosis unica en la unidad.
- Sintomaticos: Dipirona 1 g IM dosis unica.`
      }
    },

    {
      id: 'insonia-leve',
      specialty: 'emerg',
      icon: '',
      tags: ['Insonia', 'Passiflora', 'Fitoterapico'],
      pt: {
        title: 'Insonia Leve / Moderada (G47.0)',
        via: 'VO',
        preview: 'Abordagem fitoterapica com Passiflora ou Melissa+Valeriana ao deitar',
        text:
`INSONIA LEVE / MODERADA

TRATAMENTO DOMICILIAR:
- Passiflora (Extrato seco) 200 mg: Tomar 1 cp VO a noite, 30 minutos antes de deitar.
- Melissa + Valeriana (Composto fitoterapico): Tomar 1 cp VO a noite ao deitar, se necessario.`
      },
      es: {
        title: 'Insomnio Leve / Moderado (G47.0)',
        via: 'VO',
        preview: 'Abordaje fitoterapeutico con Passiflora o Melissa+Valeriana al acostarse',
        text:
`INSOMNIO LEVE / MODERADO

TRATAMIENTO DOMICILIARIO:
- Passiflora (Extracto seco) 200 mg: 1 comp VO de noche, 30 minutos antes de acostarse.
- Melissa + Valeriana (Compuesto fitoterapeutico): 1 comp VO de noche si es necesario.`
      }
    },

    {
      id: 'intoxicacao-alimentar',
      specialty: 'emerg',
      icon: '',
      tags: ['Intoxicacao', 'Metoclopramida', 'Reidratacao'],
      pt: {
        title: 'Intoxicacao Alimentar Leve (T62.9 / A05.9)',
        via: 'VO / IM',
        preview: 'Dipirona + Metoclopramida VO/IM + Hidratacao oral pos-evacuacao',
        text:
`INTOXICACAO ALIMENTAR LEVE

TRATAMENTO DOMICILIAR:
- Dipirona 500 mg: Tomar 1 cp VO de 6/6h se houver dor ou febre.
- Metoclopramida 10 mg: Tomar 1 cp VO de 8/8h se houver nauseas ou vomitos, por ate 3 dias.
- Reidratante Oral / Soro Caseiro: Ingerir por via oral livremente apos cada episodio de evacuacao liquida.

CONDUTA NA UNIDADE:
- Metoclopramida 10 mg IM se houver nausea ativa ou vomitos persistentes em curso.`
      },
      es: {
        title: 'Intoxicacion Alimentaria Leve (T62.9 / A05.9)',
        via: 'VO / IM',
        preview: 'Dipirona + Metoclopramida VO/IM + Hidratacion oral post-evacuacion',
        text:
`INTOXICACION ALIMENTARIA LEVE

TRATAMIENTO DOMICILIARIO:
- Dipirona 500 mg: 1 comp VO cada 6h en caso de dolor o fiebre.
- Metoclopramida 10 mg: 1 comp VO cada 8h si presenta nauseas o vomitos, por un maximo de 3 dias.
- Rehidratante Oral / Suero Casero: Consumir por via oral libremente tras cada episodio de evacuacion liquida.

CONDUCTA EN LA UNIDAD:
- Metoclopramida 10 mg IM si presenta nausea activa o vomitos persistentes.`
      }
    },

    {
      id: 'labirintite-vertigem',
      specialty: 'emerg',
      icon: '',
      tags: ['Vertigem', 'Labirintite', 'Meclizina', 'Dramin'],
      pt: {
        title: 'Labirintite / Crise de Vertigem (H81.0)',
        via: 'VO / IM',
        preview: 'Meclizina antivertiginoso + Dramin se emese + Resgate na unidade',
        text:
`LABIRINTITE / CRISE DE VERTIGEM

TRATAMENTO DOMICILIAR:
- Meclizina 25 mg: Tomar 1 cp VO de 6/6h por 7 dias.
- Dramin: Tomar 1 cp VO de 8/8h se houver nauseas ou vomitos concomitantes.

CONDUTA NA UNIDADE:
- Protocolo Vertigem: Dipirona 1 g IM + Ondansetrona 8 mg IM.`
      },
      es: {
        title: 'Laberintitis / Crisis de Vertigo (H81.0)',
        via: 'VO / IM',
        preview: 'Meclizina antivertiginoso + Dramin si hay emesis + Rescate IM',
        text:
`LABERINTITIS / CRISIS DE VERTIGO

TRATAMIENTO DOMICILIARIO:
- Meclizina 25 mg: 1 comp VO cada 6h por 7 dias.
- Dramin: 1 comp VO cada 8h en caso de nauseas o vomitos concomitantes.

CONDUCTA EN LA UNIDAD:
- Protocolo Vertigo: Dipirona 1 g IM + Ondansetron 8 mg IM.`
      }
    },

    {
      id: 'molusco-contagioso-guia',
      specialty: 'emerg',
      icon: '',
      tags: ['Molusco', 'Pediatrico', 'Dermatologia'],
      pt: {
        title: 'Molusco Contagioso (B08.1)',
        via: 'Conduta Geral',
        preview: 'Conduta expectante (resolucao em 6-12 meses) + Evitar autoinoculacao',
        text:
`MOLUSCO CONTAGIOSO

CONDUTA GERAL E ORIENTACOES:
- Adotar conduta expectante ativa: esclarecer sobre a resolucao espontanea das lesoes em um periodo de 6 a 12 meses.
- Evitar manipulacao, escarificacao ou cocadura das papulas. Nao compartilhar toalhas, roupas ou objetos de uso pessoal.
- Encaminhar formalmente para a dermatologia se houver lesoes extensas, desfigurantes ou secundariamente infeccionadas.

CONDUTA NA UNIDADE:
- Dipirona 1 g IM apenas se houver dor local importante associada.`
      },
      es: {
        title: 'Molusco Contagioso (B08.1)',
        via: 'Conducta General',
        preview: 'Conducta expectante (resolucion en 6-12 meses) + Evitar autoinoculacion',
        text:
`MOLUSCO CONTAGIOSO

CONDUCTA GENERAL Y ORIENTACIONES:
- Adoptar conducta expectante activa: informar sobre la resolucion espontanea de las lesiones en un periodo de 6 a 12 meses.
- Evitar la manipulacion o el rascado de las papulas. No compartir toallas, ropa ni objetos de uso personal.
- Derivar formalmente a dermatologia si presenta lesiones extensas, desfigurantes o con infeccion secundaria.

CONDUCTA EN LA UNIDAD:
- Dipirona 1 g IM solo si presenta dolor local importante asociado.`
      }
    },

    {
      id: 'nefrolitiase-colica-renal',
      specialty: 'emerg',
      icon: '',
      tags: ['Nefrolitiase', 'Colica Renal', 'Escopolamina', 'Buscopan'],
      pt: {
        title: 'Nefrolitiase / Colica Renal (N20.0)',
        via: 'VO / EV',
        preview: 'Escopolamina+Dipirona VO + Ibuprofeno + Hidratacao + Protocolo EV unidade',
        text:
`NEFROLITIASE / COLICA RENAL

TRATAMENTO DOMICILIAR:
- Escopolamina + Dipirona (10 mg + 250 mg): Tomar 1 cp VO de 6/6h se houver dor.
- Ibuprofeno 300 mg: Tomar 1 cp VO de 8/8h por 5 dias.
- Dipirona 500 mg: Tomar 1 cp VO de 6/6h se houver dor.
- Bromoprida 10 mg: Tomar 1 cp VO 3x/dia se houver nauseas associadas.
- Orientar hidratacao oral vigorosa e continua com agua liquida.

CONDUTA NA UNIDADE:
- Dipirona 1 ampola + Escopolamina 1 ampola + Ondansetrona 1 ampola diluidas em SF 0,9% 100 mL EV. Reavaliar rigorosamente em 1 hora.`
      },
      es: {
        title: 'Nefrolitiasis / Colico Renal (N20.0)',
        via: 'VO / EV',
        preview: 'Escopolamina+Dipirona VO + Ibuprofeno + Hidratacion + Protocolo EV',
        text:
`NEFROLITIASIS / COLICO RENAL

TRATAMIENTO DOMICILIARIO:
- Escopolamina + Dipirona (10 mg + 250 mg): 1 comp VO cada 6h en caso de dolor.
- Ibuprofeno 300 mg: 1 comp VO cada 8h por 5 dias.
- Dipirona 500 mg: 1 comp VO cada 6h si presenta dolor.
- Bromoprida 10 mg: 1 comp VO 3 veces al dia si presenta nauseas asociadas.
- Orientar hidratacion oral energica y continua con agua.

CONDUCTA EN LA UNIDAD:
- Dipirona 1 ampolla + Escopolamina 1 ampolla + Ondansetron 1 ampolla diluidas en SS 0,9% 100 mL EV. Reevaluar rigurosamente en 1 hora.`
      }
    },

    {
      id: 'otite-externa-guia',
      specialty: 'emerg',
      icon: '',
      tags: ['Otite', 'Externa', 'Otosporin', 'Cefalexina'],
      pt: {
        title: 'Otite Externa (H60.3)',
        via: 'VO / Topica Ear / IM',
        preview: 'Otosporin gotas otologicas + Cefalexina VO + Decadron+Dipirona IM',
        text:
`OTITE EXTERNA

TRATAMENTO DOMICILIAR:
- Otosporin (Polimixina B + Neomicina + Hidrocortisona): Instilar 3 gotas no ouvido afetado 3x/dia por 7 dias.
- Cefalexina 500 mg: Tomar 1 cp VO de 6/6h por 7 dias.
- Ibuprofeno 300 mg: Tomar 1 cp VO de 8/8h por 5 dias.

CONDUTA NA UNIDADE:
- Analgesia/Anti-inflamatorio potente: Dipirona 1 ampola + Decadron 1 ampola IM.`
      },
      es: {
        title: 'Otitis Externa (H60.3)',
        via: 'VO / Topica Ear / IM',
        preview: 'Otosporin gotas otologicas + Cefalexina VO + Decadron+Dipirona IM',
        text:
`OTITIS EXTERNA

TRATAMIENTO DOMICILIARIO:
- Otosporin (Polimixina B + Neomicina + Hidrocortisona): Instilar 3 gotas en el oido afectado 3 veces al dia por 7 dias.
- Cefalexina 500 mg: 1 comp VO cada 6h por 7 dias.
- Ibuprofeno 300 mg: 1 comp VO cada 8h por 5 dias.

CONDUCTA EN LA UNIDAD:
- Analgesia/Antiinflamatorio potente: Dipirona 1 ampolla + Decadron 1 ampolla IM.`
      }
    },

    {
      id: 'otite-media-aguda-guia',
      specialty: 'emerg',
      icon: '',
      tags: ['Otite', 'OMA', 'Amoxicilina'],
      pt: {
        title: 'Otite Media Aguda — OMA (H66.0)',
        via: 'VO / IM',
        preview: 'Amoxicilina 500 mg VO de 8/8h por 10 dias + Controle IM na unidade',
        text:
`OTITE MEDIA AGUDA (OMA)

TRATAMENTO DOMICILIAR:
- Amoxicilina 500 mg: Tomar 1 cp VO de 8/8h por 10 dias.
- Ibuprofeno 300 mg: Tomar 1 cp VO de 8/8h por 5 dias.
- Dipirona 500 mg: Tomar 1 cp VO de 6/6h se houver dor ou febre.

CONDUTA NA UNIDADE:
- Corticoterapia de resgate/Analgesia: Dipirona 1 ampola + Decadron 1 ampola IM.`
      },
      es: {
        title: 'Otitis Media Aguda — OMA (H66.0)',
        via: 'VO / IM',
        preview: 'Amoxicilina 500 mg VO cada 8h por 10 dias + Control IM en unidad',
        text:
`OTITIS MEDIA AGUDA (OMA)

TRATAMIENTO DOMICILIARIO:
- Amoxicilina 500 mg: 1 comp VO cada 8h por 10 dias.
- Ibuprofeno 300 mg: 1 comp VO cada 8h por 5 dias.
- Dipirona 500 mg: 1 comp VO cada 6h si presenta dolor o fiebre.

CONDUCTA EN LA UNIDAD:
- Corticoterapia de rescate/Analgesia: Dipirona 1 ampolla + Decadron 1 ampolla IM.`
      }
    },

    {
      id: 'pep-exposicao-sexual',
      specialty: 'infecto',
      icon: '',
      tags: ['PEP', 'HIV', 'Dolutegravir', 'Tenofovir'],
      pt: {
        title: 'PEP — Profilaxia Pos-Exposicao Sexual (Z20.2)',
        via: 'VO / IM',
        preview: 'Inicio imediato (<72h) do esquema ARV por 28 dias + Encaminhar SAE/CTA',
        text:
`PEP — PROFILAXIA POS-EXPOSICAO SEXUAL

TRATAMENTO DOMICILIAR (Iniciar obrigatoriamente por 28 dias):
- Tenofovir 300 mg + Lamivudina 300 mg: Tomar 1 cp VO 1x ao dia.
- Dolutegravir 50 mg: Tomar 1 cp VO 1x ao dia.

ORIENTACOES CRITICAS:
- Encaminhar imediatamente o paciente ao SAE/CTA para seguimento clinico e sorologico.

CONDUTA NA UNIDADE:
- Inicio imediato do esquema antirretroviral acima se disponivel na unidade de pronto atendimento.
- Dipirona 1 g IM se houver dor associada.`
      },
      es: {
        title: 'PEP — Profilaxis Post-Exposicion Sexual (Z20.2)',
        via: 'VO / IM',
        preview: 'Inicio inmediato (<72h) de esquema ARV por 28 dias + Derivar a SAE/CTA',
        text:
`PEP — PROFILAXIS POST-EXPOSICION SEXUAL

TRATAMIENTO DOMICILIARIO (Iniciar obligatoriamente por 28 dias):
- Tenofovir 300 mg + Lamivudina 300 mg: 1 comp VO 1 vez al dia.
- Dolutegravir 50 mg: 1 comp VO 1 vez al dia.

ORIENTACIONES CRITICAS:
- Derivar de inmediato al paciente al SAE/CTA para seguimiento clinico y serologico.

CONDUCTA EN LA UNIDAD:
- Inicio inmediato del esquema antirretroviral anterior si esta disponible en la unidad de urgencias.
- Dipirona 1 g IM en caso de dolor asociado.`
      }
    },

    {
      id: 'picada-inseto-local',
      specialty: 'emerg',
      icon: '',
      tags: ['Picada', 'Alergia', 'Dexclorfeniramina', 'Prednisona'],
      pt: {
        title: 'Picada de Inseto com Reacao Inflamatoria Local (T63.4 / L50.9)',
        via: 'VO / IM',
        preview: 'Dexclorfeniramina + Prednisona VO + Hidrocortisona+Dipirona IM',
        text:
`PICADA DE INSETO COM REACAO INFLAMATORIA LOCAL

TRATAMENTO DOMICILIAR:
- Dexclorfeniramina 0,5 mg: Tomar 1 cp VO de 8/8h por 5 dias.
- Prednisona 20 mg: Tomar 1 cp VO 1x/dia por 3 dias.
- Dipirona 500 mg: Tomar 1 cp VO de 6/6h se houver dor ou febre.

CONDUTA NA UNIDADE:
- Resgate inflamatorio: Hidrocortisona 100 mg IM + Dipirona 1 g IM.`
      },
      es: {
        title: 'Picadura de Insecto con Reaccion Inflamatoria Local (T63.4 / L50.9)',
        via: 'VO / IM',
        preview: 'Dexclorfeniramina + Prednisona VO + Hidrocortisona+Dipirona IM',
        text:
`PICADURA DE INSECTO CON REACCION INFLAMATORIA LOCAL

TRATAMIENTO DOMICILIARIO:
- Dexclorfeniramina 0,5 mg: 1 comp VO cada 8h por 5 dias.
- Prednisona 20 mg: 1 comp VO 1 vez al dia por 3 dias.
- Dipirona 500 mg: 1 comp VO cada 6h si presenta dolor o fiebre.

CONDUCTA EN LA UNIDAD:
- Rescate inflamatorio: Hidrocortisona 100 mg IM + Dipirona 1 g IM.`
      }
    },

    {
      id: 'psoriase-leve-guia',
      specialty: 'emerg',
      icon: '',
      tags: ['Psoriase', 'Acido Salicilico', 'Ureia', 'Hidrocortisona'],
      pt: {
        title: 'Psoriase Leve — Cuidado Local (L40.0)',
        via: 'Topico / IM',
        preview: 'Acido Salicilico + Ureia para placas + Hidrocortisona creme local',
        text:
`PSORIASE LEVE

TRATAMENTO DOMICILIAR:
- Acido Salicilico + Ureia (creme): Aplicar fina camada 2x/dia diretamente sobre as placas queratosicas.
- Hidrocortisona creme: Aplicar 2x/dia nas areas eritematosas afetadas por 5 a 7 dias.

CONDUTA NA UNIDADE:
- Dipirona 1 g IM se houver dor articular ou cutanea associada intensa.`
      },
      es: {
        title: 'Psoriasis Leve — Cuidado Local (L40.0)',
        via: 'Topico / IM',
        preview: 'Acido Salicilico + Urea para placas + Hidrocortisona crema local',
        text:
`PSORIASIS LEVE

TRATAMIENTO DOMICILIARIO:
- Acido Salicilico + Urea (crema): Aplicar una fina capa 2 veces al dia directamente sobre las placas queratosicas.
- Hidrocortisona crema: Aplicar 2 veces al dia en las zonas eritematosas afectadas por 5 a 7 dias.

CONDUCTA EN LA UNIDAD:
- Dipirona 1 g IM en caso de dolor articular o cutaneo asociado intenso.`
      }
    },

    {
      id: 'queimadura-solar-leve',
      specialty: 'emerg',
      icon: '',
      tags: ['Queimadura', 'Solar', 'Sulfadiazina', 'Ibuprofeno'],
      pt: {
        title: 'Queimadura Solar Leve (L55.0)',
        via: 'Topico / VO / IM',
        preview: 'Sulfadiazina de Prata + Ibuprofeno VO + Hidratacao e Fotoproteçao',
        text:
`QUEIMADURA SOLAR LEVE

TRATAMENTO DOMICILIAR:
- Sulfadiazina de Prata (creme): Aplicar fina camada nas areas eritematosas afetadas 2x/dia por 5 dias.
  (Alternativa para areas pequenas: Neomicina + Bacitracina pomada 2x/dia).
- Ibuprofeno 300 mg: Tomar 1 cp VO de 8/8h por 3 dias.

CONDUTA NA UNIDADE / ORIENTACOES:
- Dipirona 1 g IM dose unica para alivio termico imediato.
- Orientar exaustivamente medidas de hidratacao oral continua e protecao solar estrita.`
      },
      es: {
        title: 'Quemadura Solar Leve (L55.0)',
        via: 'Topico / VO / IM',
        preview: 'Sulfadiazina de Plata + Ibuprofeno VO + Hidratacion y Fotoproteccion',
        text:
`QUEMADURA SOLAR LEVE

TRATAMIENTO DOMICILIARIO:
- Sulfadiazina de Plata (crema): Aplicar una fina capa en las zonas eritematosas afectadas 2 veces al dia por 5 dias.
  (Alternativa para areas pequenas: Neomicina + Bacitracina pomada 2 veces al dia).
- Ibuprofeno 300 mg: 1 comp VO cada 8h por 3 dias.

CONDUCTA EN LA UNIDAD / ORIENTACIONES:
- Dipirona 1 g IM dosis unica para alivio termico inmediato.
- Orientar exhaustivamente medidas de hidratacion oral continua y proteccion solar estricta.`
      }
    },

    {
      id: 'rinite-alergica-guia',
      specialty: 'emerg',
      icon: '',
      tags: ['Rinite', 'Alergia', 'Loratadina', 'Lavagem'],
      pt: {
        title: 'Rinite Alergica (J30.9)',
        via: 'VO / Nasal / IM',
        preview: 'Loratadina VO por 7 dias + Lavagem nasal abundante com SF 0,9%',
        text:
`RINITE ALERGICA

TRATAMENTO DOMICILIAR:
- Loratadina 10 mg: Tomar 1 cp VO 1x/dia por 7 dias.
- Soro Fisiologico 0,9% (Nasal): Instilar 3 a 5 gotas em cada narina 3x/dia (ou realizar lavagem nasal de alto fluxo).

CONDUTA NA UNIDADE:
- Dexclorfeniramina 5 mg IM: Indicado em caso de crise alergica aguda refrataria com espirros em salva ou angioedema leve.`
      },
      es: {
        title: 'Rinitis Alergica (J30.9)',
        via: 'VO / Nasal / IM',
        preview: 'Loratadina VO por 7 dias + Lavado nasal abundante con SS 0,9%',
        text:
`RINITIS ALERGICA

TRATAMIENTO DOMICILIARIO:
- Loratadina 10 mg: 1 comp VO 1 vez al dia por 7 dias.
- Solucion Salina 0,9% (Nasal): Instilar 3 a 5 gotas en cada fosa nasal 3 veces al dia (o realizar lavado nasal de alto flujo).

CONDUCTA EN LA UNIDAD:
- Dexclorfeniramina 5 mg IM: Indicado en caso de crisis alergica aguda refractaria con estornudos en salva o angioedema leve.`
      }
    },

    {
      id: 'sindrome-ansiosa-leve',
      specialty: 'emerg',
      icon: '',
      tags: ['Ansiedade', 'Passiflora', 'Diazepam', 'Crise'],
      pt: {
        title: 'Sindrome Ansiosa / Crise de Ansiedade Leve (F41.0)',
        via: 'VO / IM',
        preview: 'Passiflora VO cronico + Valeriana se necessario + Diazepam IM na agitacao',
        text:
`SINDROME ANSIOSA / CRISE DE ANSIEDADE LEVE

TRATAMENTO DOMICILIAR:
- Passiflora (Extrato seco) 200 mg: Tomar 1 cp VO 2x/dia.
- Valeriana + Melissa (Composto fitoterapico): Tomar 1 cp VO a noite, se necessario.

CONDUTA NA UNIDADE:
- Diazepam 5 mg IM: Indicado apenas em crises agudas graves acompanhadas de agitacao psicomotora importante.`
      },
      es: {
        title: 'Sindrome Ansioso / Crisis de Ansiedad Leve (F41.0)',
        via: 'VO / IM',
        preview: 'Passiflora VO cronico + Valeriana si es necesario + Diazepam IM en agitacion',
        text:
`SINDROME ANSIOSO / CRISIS DE ANSIEDAD LEVE

TRATAMIENTO DOMICILIARIO:
- Passiflora (Extracto seco) 200 mg: 1 comp VO 2 veces al dia.
- Valeriana + Melissa (Compuesto fitoterapeutico): 1 comp VO de noche si es necesario.

CONDUCTA EN LA UNIDAD:
- Diazepam 5 mg IM: Indicado unicamente en crisis agudas graves acompanadas de agitacion psicomotora importante.`
      }
    },

    {
      id: 'sindrome-gripal-viral',
      specialty: 'emerg',
      icon: '',
      tags: ['Gripe', 'Resfriado', 'Loratadina', 'Sintomaticos'],
      pt: {
        title: 'Sindrome Gripal Viral Simples (J11.1)',
        via: 'VO / IM',
        preview: 'Dipirona + Loratadina + Ibuprofeno VO + Hidratacao abundante',
        text:
`SINDROME GRIPAL VIRAL SIMPLES

TRATAMENTO DOMICILIAR:
- Dipirona 500 mg: Tomar 1 cp VO de 6/6h se houver febre ou dor corporea.
- Loratadina 10 mg: Tomar 1 cp VO 1x/dia por 5 dias (Para controle de coriza/espirros).
- Ibuprofeno 300 mg: Tomar 1 cp VO de 8/8h por 3 dias.

CONDUTA NA UNIDADE / ORIENTACOES:
- Dipirona 1 g IM se houver mialgia intensa associada.
- Orientar estritamente repouso relativo e hidratacao oral vigorosa.`
      },
      es: {
        title: 'Sindrome Gripal Viral Simple (J11.1)',
        via: 'VO / IM',
        preview: 'Dipirona + Loratadina + Ibuprofeno VO + Hidratacion abundante',
        text:
`SINDROME GRIPAL VIRAL SIMPLE

TRATAMIENTO DOMICILIARIO:
- Dipirona 500 mg: 1 comp VO cada 6h si presenta fiebre o dolor corporal.
- Loratadina 10 mg: 1 comp VO 1 vez al dia por 5 dias (Para control de coriza/estornudos).
- Ibuprofeno 300 mg: 1 comp VO cada 8h por 3 dias.

CONDUCTA EN LA UNIDAD / ORIENTACIONES:
- Dipirona 1 g IM en caso de mialgia intensa asociada.
- Orientar estrictamente reposo relativo e hidratacion oral abundante.`
      }
    },

    {
      id: 'sinusite-aguda-guia',
      specialty: 'emerg',
      icon: '',
      tags: ['Sinusite', 'Amoxicilina', 'Clavulanato', 'Lavagem'],
      pt: {
        title: 'Sinusite Aguda Bacteriana (J01.9)',
        via: 'VO / IM',
        preview: 'Amox-Clavulanato por 10 dias + Loratadina + Lavagem nasal com SF',
        text:
`SINUSITE AGUDA

TRATAMENTO DOMICILIAR:
- Amoxicilina 500 mg + Clavulanato 125 mg: Tomar 1 cp VO de 8/8h por 10 dias.
- Loratadina 10 mg: Tomar 1 cp VO 1x/dia por 7 dias.
- Dipirona 500 mg: Tomar 1 cp VO de 6/6h se houver dor ou febre.

CONDUTA NA UNIDADE:
- Alivio algico facial: Dipirona 1 g IM + Lavagem nasal abundante com SF 0,9% na unidade.`
      },
      es: {
        title: 'Sinusitis Aguda Bacteriana (J01.9)',
        via: 'VO / IM',
        preview: 'Amox-Clavulanato por 10 dias + Loratadina + Lavado nasal con SS',
        text:
`SINUSITIS AGUDA

TRATAMIENTO DOMICILIARIO:
- Amoxicilina 500 mg + Clavulanato 125 mg: 1 comp VO cada 8h por 10 dias.
- Loratadina 10 mg: 1 comp VO 1 vez al dia por 7 dias.
- Dipirona 500 mg: 1 comp VO cada 6h si presenta dolor o fiebre.

CONDUCTA EN LA UNIDAD:
- Alivio del dolor facial: Dipirona 1 g IM + Lavado nasal abundante con SS 0,9% en la unidad.`
      }
    },

    {
      id: 'tetano-ferimentos-vacina',
      specialty: 'emerg',
      icon: '',
      tags: ['Tetano', 'Vacina', 'dT', 'Imunoglobulina'],
      pt: {
        title: 'Tetano — Protocolo de Conduta para Ferimentos (A35)',
        via: 'IM / Topico',
        preview: 'Limpeza e Debridamento + Vacina dT + Imunoglobulina se alto risco',
        text:
`TETANO — PROTOCOLO DE CONDUTA PARA FERIMENTOS

CONDUTA IMEDIATA NA UNIDADE:
1. Limpeza e Debridamento: Realizar higienizacao cirurgica minuciosa da ferida com SF 0,9% + PVPI (Polivinilpirrolidona iodo).
2. Vacina dT (Dupla Adulto): Aplicar IM se o esquema vacinal basico estiver incompleto, desatualizado (>10 anos ou >5 anos se ferimento grave) ou for desconhecido.
3. Imunoglobulina Antitetanica IM: Administrar se o ferimento for de alto risco (profundo, sujo, com terra/esterco) E o esquema vacinal for incerto ou incompleto.

ORIENTACOES:
- Encaminhar a Unidade Basica de Saude (UBS) para continuidade e fechamento do esquema vacinal cronologico.
- Avaliar introducao de antibioticoterapia se houver sinais secundarios de infeccao local em curso.`
      },
      es: {
        title: 'Tetanos — Protocolo de Conducta para Heridas (A35)',
        via: 'IM / Topico',
        preview: 'Limpieza y Desbridamiento + Vacuna dT + Inmunoglobulina si hay alto riesgo',
        text:
`TETANOS — PROTOCOLO DE CONDUCTA PARA HERIDAS

CONDUCTA INMEDIATA EN LA UNIDAD:
1. Limpieza y Desbridamiento: Realizar higienizacion quirurgica minuciosa de la herida con SS 0,9% + PVPI (Povidona yodada).
2. Vacuna dT (Doble Adulto): Aplicar IM si el esquema de vacunacion basico esta incompleto, desactualizado (>10 anos o >5 anos si la herida es grave) o es desconocido.
3. Inmunoglobulina Antitetanica IM: Administrar si la herida es de alto riesgo (profunda, sucia, con tierra/estiercol) Y el esquema de vacunacion es incierto o incompleto.

ORIENTACIONES:
- Derivar a la Unidad Basica de Salud (UBS) para la continuidad y cierre del esquema de vacunacion cronologico.
- Evaluar la introduccion de antibioticoterapia si presenta signos secundarios de infeccion local activa.`
      }
    },

    {
      id: 'tinea-micose-pele',
      specialty: 'emerg',
      icon: '',
      tags: ['Tinea', 'Micose', 'Clotrimazol', 'Griseofulvina'],
      pt: {
        title: 'Tinea — Micose de Pele ou Couro Cabeludo (B35.0 / B35.4)',
        via: 'Topico / VO / IM',
        preview: 'Clotrimazol creme por 14 dias + Griseofulvina VO se extenso',
        text:
`TINEA — MICOSE DE PELE OU COURO CABELUDO

TRATAMENTO DOMICILIAR:
- Clotrimazol creme: Aplicar 2x/dia nas lesoes cutaneas por 14 dias.
- Griseofulvina 500 mg (Indicado para casos extensos ou acometimento de couro cabeludo): Tomar 1 cp VO 1x/dia por 30 dias.

CONDUTA NA UNIDADE:
- Dipirona 1 g IM apenas se houver prurido ou dor inflamatoria local intensa.`
      },
      es: {
        title: 'Tina — Micosis de Piel o Cuero Cabelludo (B35.0 / B35.4)',
        via: 'Topico / VO / IM',
        preview: 'Clotrimazol crema por 14 dias + Griseofulvina VO si es extenso',
        text:
`TINA — MICOSIS DE PIEL O CUERO CABELLUDO

TRATAMIENTO DOMICILIARIO:
- Clotrimazol crema: Aplicar 2 veces al dia en las lesiones cutaneas por 14 dias.
- Griseofulvina 500 mg (Indicado en casos extensos o compromiso del cuero cabelludo): 1 comp VO 1 vez al dia por 30 dias.

CONDUCTA EN LA UNIDAD:
- Dipirona 1 g IM solo si presenta prurito o dolor inflamatorio local intenso.`
      }
    },

    {
      id: 'tosse-seca-persistente',
      specialty: 'emerg',
      icon: '',
      tags: ['Tosse', 'Benzonatato', 'Loratadina'],
      pt: {
        title: 'Tosse Seca Persistente (R05)',
        via: 'VO / Nasal / IM',
        preview: 'Benzonatato antitussigeno + Loratadina + Soro nasal',
        text:
`TOSSE SECA PERSISTENTE

TRATAMENTO DOMICILIAR:
- Benzonatato 100 mg: Tomar 1 cp VO de 8/8h por ate 5 dias.
- Loratadina 10 mg: Tomar 1 cp VO 1x/dia por 7 dias.
- Soro Fisiologico 0,9% (Nasal): Instilar nas narinas 3x/dia para hidratacao de vias aereas superiores.

CONDUTA NA UNIDADE:
- Dipirona 1 g IM se houver queixa de dor toracica muscular associada a tosse cronica de repeticao.`
      },
      es: {
        title: 'Tos Seca Persistente (R05)',
        via: 'VO / Nasal / IM',
        preview: 'Benzonatato antitusigeno + Loratadina + Solucion nasal',
        text:
`TOS SECA PERSISTENTE

TRATAMIENTO DOMICILIARIO:
- Benzonatato 100 mg: 1 comp VO cada 8h por hasta 5 dias.
- Loratadina 10 mg: 1 comp VO 1 vez al dia por 7 dias.
- Solucion Salina 0,9% (Nasal): Instilar en las fosas nasales 3 veces al dia para la hidratacion de las vias aereas superiores.

CONDUCTA EN LA UNIDAD:
- Dipirona 1 g IM en caso de dolor toracico muscular asociado a la tos cronica por repeticion.`
      }
    },

    {
      id: 'urticaria-aguda-guia',
      specialty: 'emerg',
      icon: '',
      tags: ['Urticaria', 'Loratadina', 'Prednisona', 'Resgate'],
      pt: {
        title: 'Urticaria Aguda (L50.9)',
        via: 'VO / IM',
        preview: 'Loratadina por 7 dias + Prednisona por 3 dias + Resgate IM na unidade',
        text:
`URTICARIA AGUDA

TRATAMENTO DOMICILIAR:
- Loratadina 10 mg: Tomar 1 cp VO 1x/dia por 7 dias.
- Prednisona 20 mg: Tomar 1 cp VO 1x/dia por 3 dias.

CONDUTA DE RESGATE NA UNIDADE:
- Hidrocortisona 100 mg IM + Dexclorfeniramina 5 mg IM (Dose combinada de ataque para controle de crise urticariforme severa).`
      },
      es: {
        title: 'Urticaria Aguda (L50.9)',
        via: 'VO / IM',
        preview: 'Loratadina por 7 dias + Prednisona por 3 dias + Rescate IM en unidad',
        text:
`URTICARIA AGUDA

TRATAMIENTO DOMICILIARIO:
- Loratadina 10 mg: 1 comp VO 1 vez al dia por 7 dias.
- Prednisona 20 mg: 1 comp VO 1 vez al dia por 3 dias.

CONDUCTA DE RESCATE EN LA UNIDAD:
- Hidrocortisona 100 mg IM + Dexclorfeniramina 5 mg IM (Dosis combinada de carga para el control de crisis urticariforme severa).`
      }
    },

    {
      id: 'varizes-membros-inferiores',
      specialty: 'emerg',
      icon: '',
      tags: ['Varizes', 'Daflon', 'Hirudoid', 'Insuficiencia'],
      pt: {
        title: 'Varizes dos Membros Inferiores (I83.9)',
        via: 'VO / Topico / IM',
        preview: 'Flavonoide (Daflon) cronico + Heparina topica (Hirudoid) + Dipirona se dor',
        text:
`VARIZES DOS MEMBROS INFERIORES

TRATAMENTO DOMICILIAR:
- Flavonoide (Daflon 500 mg ou similar): Tomar 1 cp VO de 12/12h por 30 dias.
- Nitrato de Miconazol + Heparina (Hirudoid ou similar pomada): Aplicar fina camada 2x/dia nas pernas com massagem ascendente suave se houver dor local.
- Dipirona 500 mg: Tomar 1 cp VO de 6/6h se houver dor ou sensacao de peso.

CONDUTA NA UNIDADE:
- Dipirona 1 g IM se houver quadro algico agudo local intenso associado.`
      },
      es: {
        title: 'Varices de los Miembros Inferiores (I83.9)',
        via: 'VO / Topico / IM',
        preview: 'Flavonoide (Daflon) cronico + Heparina topica (Hirudoid) + Dipirona si dolor',
        text:
`VARICES DE LOS MIEMBROS INFERIORES

TRATAMIENTO DOMICILIARIO:
- Flavonoide (Daflon 500 mg o similar): 1 comp VO cada 12h por 30 dias.
- Nitrato de Miconazol + Heparina (Hirudoid o pomada similar): Aplicar una fina capa 2 veces al dia en las piernas con un masaje ascendente suave si presenta dolor local.
- Dipirona 500 mg: 1 comp VO cada 6h en caso de dolor o sensacion de pesadez.

CONDUCTA EN LA UNIDAD:
- Dipirona 1 g IM en caso de cuadro algico agudo local intenso asociado.`
      }
    },

  /* ── BLOCO 5 — 9 protocolos (cardio/neuro) ── */

    {
      id: 'fa-flutter-reversao',
      specialty: 'cardio',
      icon: '',
      tags: ['FA', 'Flutter', 'Cardioversão', 'Amiodarona'],
      pt: {
        title: 'Fibrilação Atrial e Flutter — Reversão de Ritmo',
        via: 'IV / BIC / VO',
        preview: 'Cardioversão química com Amiodarona + Protocolo de manutenção oral pós-CVE',
        text:
`FIBRILAÇÃO ATRIAL E FLUTTER — REVERSÃO DE RITMO

ATENCAO: SEGURANÇA: Realizar reversão apenas se FA < 24h, ecocardiograma transesofágico negativo para trombos ou anticoagulação correta por 3-4 semanas.

CARDIOVERSÃO QUÍMICA (ESTÁVEL):
- Ataque: Amiodarona 150 mg (1 ampola de 3 mL). Diluir 2 ampolas (300 mg) em 250 mL de SG 5% e administrar em 30 minutos.
- Impregnação (BIC): Diluir 6 ampolas (900 mg) em 500 mL de SG 5% e infundir em BIC a 34 mL/h (1 mg/min) por 6h, seguido de 17 mL/h (0,5 mg/min) por 18h.

MANUTENÇÃO ORAL PÓS-CARDIOVERSÃO ELÉTRICA (CVE):
- Amiodarona 200 mg — Plano de Impregnação até atingir 10g totais:
  - Dias 1 a 10: 1 cp VO a cada 8 horas.
  - Dias 11 a 20: 1 cp VO a cada 12 horas.
  - Manutenção contínua: 1 cp VO uma vez ao dia.`
      },
      es: {
        title: 'Fibrilación Auricular y Flutter — Reversión de Ritmo',
        via: 'IV / BIC / VO',
        preview: 'Reversión química con Amiodarona + Protocolo de mantenimiento oral post-CVE',
        text:
`FIBRILACIÓN AURICULAR Y FLUTTER — REVERSIÓN DE RITMO

ATENCAO: SEGURIDAD: Realizar la reversión del ritmo solo si la FA es < 24h, ecocardiograma transesofágico negativo para trombos o anticoagulación correcta por 3-4 semanas.

REVERSIÓN QUÍMICA (ESTABLE):
- Carga: Amiodarona 150 mg (1 ampolla de 3 mL). Diluir 2 ampollas (300 mg) en 250 mL de SG 5% e infundir en 30 minutos.
- Impregnación (BIC): Diluir 6 ampollas (900 mg) en 500 mL de SG 5% e infundir por BIC a 34 mL/h (1 mg/min) por 6h, seguido de 17 mL/h (0,5 mg/min) por 18h.

MANTENIMIENTO ORAL POST-CARDIOVERSIÓN ELÉCTRICA (CVE):
- Amiodarona 200 mg — Esquema de impregnación hasta alcanzar 10g totales:
  - Días 1 al 10: 1 comp VO cada 8 horas.
  - Días 11 al 20: 1 comp VO cada 12 horas.
  - Mantenimiento continuo: 1 comp VO una vez al día.`
      }
    },

    {
      id: 'anticoagulacao-fa-noacs',
      specialty: 'cardio',
      icon: '',
      tags: ['Anticoagulação', 'FA', 'Rivaroxabana', 'Apixabana', 'Dabigatrana'],
      pt: {
        title: 'Fibrilação Atrial — Protocolo de Anticoagulação',
        via: 'VO',
        preview: 'Estratificação com NOACs (Rivaroxabana, Edoxabana, Dabigatrana ou Apixabana)',
        text:
`FIBRILAÇÃO ATRIAL — ANTICOAGULAÇÃO ORAL (NOACs)

ANTICOAGULANTES ORAIS DIRETOS:
- Rivaroxabana 20 mg: 1 cp VO com a refeição 1x ao dia. (Se ClCr 30–50 mL/min: reduzir para 15 mg 1x ao dia).
- Edoxabana 60 mg: 1 cp VO 1x ao dia. Reduzir para 30 mg se TFG 15–50 mL/min, peso < 60 kg ou uso de azóis/eritromicina. (Considerar 15 mg se > 80 anos). Contraindicada se TFG < 15 mL/min.
- Dabigatrana 150 mg: 1 cp VO a cada 12 horas. Reduzir para 110 mg a cada 12 horas se idade >= 80 anos ou alto risco de sangramento.
- Apixabana 5 mg: 1 cp VO a cada 12 horas. Reduzir para 2,5 mg a cada 12 horas se ClCr estiver entre 15 e 30 mL/min.

ATENCAO: NOTA CLÍNICA: A Varfarina é estritamente preferível em cenários de prótese valvar mecânica ou estenose mitral moderada/grave.`
      },
      es: {
        title: 'Fibrilación Auricular — Protocolo de Anticoagulación',
        via: 'VO',
        preview: 'Estratificación con NOACs (Rivaroxabán, Edoxabán, Dabigatrán o Apixabán)',
        text:
`FIBRILACIÓN AURICULAR — ANTICOAGULACIÓN ORAL (NOACs)

ANTICOAGULANTES ORALES DIRECTOS:
- Rivaroxabán 20 mg: 1 comp VO con la comida 1 vez al día. (Si ClCr es de 30–50 mL/min: reducir a 15 mg 1 vez al día).
- Edoxabán 60 mg: 1 comp VO 1 vez al día. Reducir a 30 mg si la TFG es de 15–50 mL/min, peso < 60 kg o uso concomitante de azoles/eritromicina. (Considerar 15 mg si es > 80 años). Contraindicado si TFG < 15 mL/min.
- Dabigatrán 150 mg: 1 comp VO cada 12 horas. Reducir a 110 mg cada 12 horas si la edad es >= 80 años o si hay alto riesgo de sangrado.
- Apixabán 5 mg: 1 comp VO cada 12 horas. Reducir a 2,5 mg cada 12 horas si el ClCr está entre 15 e 30 mL/min.

ATENCAO: NOTA CLÍNICA: La Warfarina es estrictamente preferible en contextos de prótesis valvular mecánica o estenosis mitral moderada/grave.`
      }
    },

    {
      id: 'bradi-acls-completo',
      specialty: 'cardio',
      icon: '',
      tags: ['Bradicardia', 'Atropina', 'Dopamina', 'Adrenalina'],
      pt: {
        title: 'Bradiarritmias Sintomáticas — Algoritmo ACLS',
        via: 'IV / BIC / Transcutâneo',
        preview: 'Atropina 1mg bolus → Infusão de Dopamina ou Adrenalina se refratário → Marcapasso',
        text:
`BRADIARRITMIAS SINTOMÁTICAS — ALGORITMO ACLS

CONDUTA EM PACIENTES INSTÁVEIS:
1. Atropina 1 mg: Administrar 1 ampola EV em bolus. Repetir a cada 3 a 5 minutos, até a dose máxima de 3 mg. (ATENCAO: Pode não ser eficaz no BAVT).

SE REFRATÁRIO À ATROPINA (Escolha uma opção de infusão):
2. Dopamina: Diluir 5 ampolas (50 mg/10 mL cada) em 200 mL de SF 0,9% ou SG 5% (Conc: 10 mg/mL / 10.000 mcg/mL). Infundir de 5 a 20 mcg/kg/min em BIC.
3. Adrenalina: Diluir 4 ampolas (1 mg/mL cada) em 234 mL de SG 5% para infusão contínua em BIC. Iniciar de 2 a 10 mcg/min.

4. Marcapasso Transcutâneo: Iniciar imediatamente se refratariedade ou instabilidade extrema. Promover analgesia/sedação potente.`
      },
      es: {
        title: 'Bradiarritmias Sintomáticas — Algoritmo ACLS',
        via: 'IV / BIC / Transcutáneo',
        preview: 'Atropina 1mg bolo → Infusión de Dopamina o Adrenalina si refractaria → Marcapaso',
        text:
`BRADIARRITMIAS SINTOMÁTICAS — ALGORITMO ACLS

CONDUCTA EN PACIENTES INESTABLES:
1. Atropina 1 mg: Administrar 1 ampolla EV en bolo. Repetir cada 3 a 5 minutos, hasta la dosis máxima de 3 mg. (ATENCAO: Puede no ser eficaz en el BAV de tercer grado / BAVT).

SI ES REFRACTARIO A ATROPINA (Seleccionar una opción de infusión):
2. Dopamina: Diluir 5 ampollas (50 mg/10 mL cada una) en 200 mL de SS 0,9% o SG 5% (Conc: 10 mg/mL / 10.000 mcg/mL). Infundir de 5 a 20 mcg/kg/min por BIC.
3. Adrenalina: Diluir 4 ampollas (1 mg/mL cada una) en 234 mL de SG 5% para infusión continua por BIC. Iniciar de 2 a 10 mcg/min.

4. Marcapaso Transcutáneo: Iniciar inmediatamente en caso de refractariedad o inestabilidad extrema. Administrar analgesia/sedación potente.`
      }
    },

    {
      id: 'sca-antiagregacao-trombolise',
      specialty: 'cardio',
      icon: '',
      tags: ['SCA', 'IAM', 'Infarto', 'AAS', 'Ticagrelor', 'Alteplase', 'Trombólise'],
      pt: {
        title: 'SCA — Protocolo Completo e Antiagregação',
        via: 'VO / SC / IV',
        preview: 'AAS + Ticagrelor/Prasugrel/Clopidogrel (Ajuste >75 anos) + Nitrato + Alteplase',
        text:
`SÍNDROME CORONARIANA AGUDA (SCA)

ANTIAGREGAÇÃO DE ATAQUE (Uso Oral):
- AAS 100 mg: 3 comprimidos mastigados no ataque, seguido de 1 cp ao dia.
- Ticagrelor 90 mg: 2 comprimidos no ataque, seguido de 1 cp de 12/12h.
- Prasugrel 60 mg: 1 cp no ataque (apenas pós-cateterismo). Evitar se < 60 kg, AVC prévio ou > 75 anos.
- Clopidogrel 75 mg: Ataque de 300 mg (4 cp) se Sem Supra ou Com Supra submetido a trombólise se <= 75 anos. Se > 75 anos em trombólise: NÃO faz ataque, administrar apenas 75 mg (1 cp). Se ICP primária: ataque de 600 mg (8 cp).

MANEJO DA DOR E CONGESTÃO:
- Mononitrato de Isossorbida 5 mg: 1 cp SL se dor torácica. Pode repetir a cada 5 min (máx 3x). ATENCAO: Contraindicado em infarto de VD ou uso de inibidores da PDE5.
- Nitroglicerina IV (Tridil): Diluir 1 ampola (25 mg/5 mL) em 230 mL de SF 0,9% em BIC. Iniciar a 5 mL/h e titular.

PROTOCOLO TROMBÓLISE (Se ICP indisponível < 120 min):
1. Enoxaparina 30 mg IV em bolus antes (pular bolus se > 75 anos) + 1 mg/kg SC 12/12h.
2. Alteplase (rtPA): Bolus de 15 mg IV → 0,75 mg/kg em 30 min (máx 50 mg) → 0,50 mg/kg em 60 min (máx 35 mg). Máximo total: 100 mg.`
      },
      es: {
        title: 'SCA — Protocolo Completo y Antiagregación',
        via: 'VO / SC / IV',
        preview: 'AAS + Ticagrelor/Prasugrel/Clopidogrel (Ajuste >75 años) + Nitrato + Alteplase',
        text:
`SÍNDROME CORONARIO AGUDO (SCA)

ANTIAGREGACIÓN DE CARGA (Vía Oral):
- AAS 100 mg: 3 comprimidos masticados como carga, seguido de 1 comp al día.
- Ticagrelor 90 mg: 2 comprimidos como carga, seguido de 1 comp cada 12h.
- Prasugrel 60 mg: 1 comp como carga (solo post-cateterismo). Evitar si el peso es < 60 kg, ACV previo o > 75 años.
- Clopidogrel 75 mg: Carga de 300 mg (4 cp) si es Sin supra-ST o Con supra-ST sometido a trombólisis si es <= 75 años. Si es > 75 años en trombólisis: NO realizar carga, administrar solo 75 mg (1 cp). Si va a ICP primaria: carga de 600 mg (8 cp).

MANEJO DEL DOLOR Y CONGESTIÓN:
- Mononitrato de Isosorbida 5 mg: 1 comp SL en caso de dolor torácico. Puede repetirse cada 5 min (máx 3 veces). ATENCAO: Contraindicado en infarto de VD o uso de inhibidores de la PDE5.
- Nitroglicerina IV: Diluir 1 ampolla (25 mg/5 mL) en 230 mL de SS 0,9% por BIC. Iniciar a 5 mL/h y titular.

PROTOCOLO TROMBÓLISIS (Si la ICP no está disponible en < 120 min):
1. Enoxaparina 30 mg IV en bolo previo (omitir bolo si es > 75 años) + 1 mg/kg SC cada 12h.
2. Alteplase (rtPA): Bolo de 15 mg IV → 0,75 mg/kg en 30 min (máx 50 mg) → 0,50 mg/kg en 60 min (máx 35 mg). Máximo total: 100 mg.`
      }
    },

    {
      id: 'ic-acute-scape-fospe',
      specialty: 'cardio',
      icon: '',
      tags: ['ICAD', 'SCAPE', 'FOSPE', 'Nitroglicerina', 'Dobutamina'],
      pt: {
        title: 'ICAD / Edema Agudo de Pulmão (EAP)',
        via: 'IV / VNI',
        preview: 'Diferenciação POCUS → SCAPE (VNI + Nitrato altas doses) vs FOSPE (Furosemida IV)',
        text:
`IC DESCOMPENSADA / EDEMA AGUDO DE PULMÃO (EAP)

DIRETRIZ DE CONDUTA BASEADA EM FENÓTIPOS (POCUS):

1. SCAPE (Edema Hiperagudo por Redirecionamento de Fluxo):
   - Não há excesso de volume global, o líquido está no local errado. ATENCAO: NÃO focar em diuréticos.
   - VNI Imediata: Iniciar PS 12 cmH2O e PEEP 6-7 cmH2O. Titular conforme tolerância.
   - Nitroglicerina IV (Altas Doses conforme PAS):
     - PAS 160-179: 3 mL EV bolus | PAS 180-199: 4 mL EV bolus | PAS > 200: 5 mL EV bolus.
     - Manutenção: Iniciar BIC a 30 mL/h. Titular de 6 em 6 mL/h a cada 10 min se PAS refratária.

2. FOSPE (Edema Subagudo por Sobrecarga de Fluido / Hipervolemia):
   - Paciente com congestão sistêmica e ganho de peso.
   - Furosemida EV: Ataque de 1,0 a 1,5 mg/kg IV (Se uso crônico, dobrar a dose oral habitual em equivalência EV).
   - Nitroglicerina IV Manutenção: Diluir 50 mg/10 mL em 240 mL de SF 0,9% (200 mcg/mL). Iniciar a 5 mL/h e titular.

3. PERFUSÃO DEPRESSA (Choque Cardiogênico):
   - Dobutamina (250 mg/20 mL): Diluir 4 ampolas em 170 mL de SF 0,9% (Conc: 4 mg/mL). Iniciar BIC a 2 mL/h (Dose usual: 2 a 20 mcg/kg/min).
   ATENCAO: NOTA: Morfina está proscrita do tratamento padrão do EAP.`
      },
      es: {
        title: 'IC Descompensada / Edema Agudo de Pulmón (EAP)',
        via: 'IV / VNI',
        preview: 'Diferenciación POCUS → SCAPE (VNI + Nitrato altas dosis) vs FOSPE (Furosemida IV)',
        text:
`IC DESCOMPENSADA / EDEMA AGUDO DE PULMÓN (EAP)

DIRECTRIZ DE CONDUCTA BASADA EN FENOTIPOS (POCUS):

1. SCAPE (Edema Hiperagudo por Redireccionamiento de Flujo):
   - No hay exceso de volumen global, el líquido está en el lugar equivocado. ATENCAO: NO priorizar diuréticos.
   - VNI Inmediata: Iniciar PS 12 cmH2O y PEEP 6-7 cmH2O. Titular según tolerancia.
   - Nitroglicerina IV (Altas Dosis según la PAS):
     - PAS 160-179: 3 mL EV bolo | PAS 180-199: 4 mL EV bolo | PAS > 200: 5 mL EV bolo.
     - Mantenimiento: Iniciar BIC a 30 mL/h. Titular de a 6 mL/h cada 10 min si la PAS es refractaria.
   ATENCAO: NO REALIZAR ESTOS BOLOS EN PACIENTES CON HIPERVOLEMIA.

2. FOSPE (Edema Subagudo por Sobrecarga de Fluido / Hipervolemia):
   - Paciente con congestión sistémica y ganancia de peso evidente.
   - Furosemida EV: Carga de 1,0 a 1,5 mg/kg IV (Si hay uso crónico, duplicar la dosis oral habitual en equivalencia EV).
   - Nitroglicerina IV Mantenimiento: Diluir 50 mg/10 mL en 240 mL de SS 0,9% (200 mcg/mL). Iniciar a 5 mL/h y titular.

3. BAJA PERFUSIÓN (Shock Cardiogénico):
   - Dobutamina (250 mg/20 mL): Diluir 4 ampollas en 170 mL de SS 0,9% (Conc: 4 mg/mL). Iniciar BIC a 2 mL/h (Dosis usual: 2 a 20 mcg/kg/min).
   ATENCAO: NOTA: La morfina está proscrita del tratamiento estándar del EAP.`
      }
    },

    {
      id: 'crise-emergencia-hipertensiva-iv',
      specialty: 'cardio',
      icon: '',
      tags: ['Hipertensão', 'Nitroprussiato', 'Nipride', 'Emergência'],
      pt: {
        title: 'Emergência Hipertensiva — Protocolo IV',
        via: 'IV / BIC',
        preview: 'Nitroprussiato de Sódio ou Nitroglicerina IV em BIC para lesão de órgão-alvo',
        text:
`EMERGÊNCIA HIPERTENSIVA — MANEJO CRÍTICO IV

ATENCAO: NOTA DE SEGURANÇA: Diferenciar Urgência de Emergência. Elevações isoladas da PA sem lesão de órgão-alvo aguda não necessitam de redução rápida no PS (tratar ansiedade, dor ou ajustar a medicação crônica ambulatorialmente).

FÁRMACOS DE ESCOLHA (BIC):
- Nitroprussiato de Sódio (50 mg/2 mL):
  - Opção 1: Diluir 1 ampola (2 mL) em 248 mL de SF 0,9% ou SG 5% (Conc: 200 mcg/mL). Iniciar BIC a 5 mL/h.
  - Opção 2: Diluir 2 ampolas (4 mL) em 246 mL de SF 0,9% ou SG 5% (Conc: 400 mcg/mL). Iniciar BIC a 2-3 mL/h.
  - Dose: 0,25 a 0,5 mcg/kg/min (Dose máxima: 10 mcg/kg/min). Titular rigorosamente.

- Nitroglicerina IV:
  - Diluir 1 ampola de 50 mg em 240 mL de SG 5%. Iniciar BIC de 5 a 20 mcg/min (Dose máxima: 400 mcg/min). Titular conforme resposta clínica.`
      },
      es: {
        title: 'Emergencia Hipertensiva — Protocolo IV',
        via: 'IV / BIC',
        preview: 'Nitroprusiato de Sodio o Nitroglicerina IV en BIC para lesión de órgano blanco',
        text:
`EMERGENCIA HIPERTENSIVA — MANEJO CRÍTICO IV

ATENCAO: NOTA DE SEGURIDAD: Diferenciar Urgencia de Emergencia. Las elevaciones aisladas de la PA sin lesión aguda de órgano blanco no requieren reducción rápida en urgencias (tratar ansiedad, dolor o ajustar la medicación crónica de forma ambulatoria).

FÁRMACOS DE ELECCIÓN (BIC):
- Nitroprusiato de Sodio (50 mg/2 mL):
  - Opción 1: Diluir 1 ampolla (2 mL) en 248 mL de SS 0,9% o SG 5% (Conc: 200 mcg/mL). Iniciar BIC a 5 mL/h.
  - Opción 2: Diluir 2 ampollas (4 mL) en 246 mL de SS 0,9% o SG 5% (Conc: 400 mcg/mL). Iniciar BIC a 2-3 mL/h.
  - Dosis: 0,25 a 0,5 mcg/kg/min (Dosis máxima: 10 mcg/kg/min). Titular rigurosamente.

- Nitroglicerina IV:
  - Diluir 1 ampolla de 50 mg en 240 mL de SG 5%. Iniciar BIC de 5 a 20 mcg/min (Dosis máxima: 400 mcg/min). Titular según respuesta clínica.`
      }
    },

    {
      id: 'dissecacao-aorta-esmolol',
      specialty: 'cardio',
      icon: '',
      tags: ['Aorta', 'Dissecção', 'Esmolol', 'Nitroprussiato'],
      pt: {
        title: 'Dissecção Aguda de Aorta — Protocolo Clínico',
        via: 'IV / BIC',
        preview: 'Controle de FC primeiro (Esmolol/Metoprolol) → Controle de PA (Nitroprussiato) → Dor (Morfina)',
        text:
`DISSECÇÃO AGUDA DE AORTA — PROTOCOLO CRÍTICO

OBJETIVO: Reduzir a frequência cardíaca (FC) e a pressão arterial (PA) para diminuir o estresse de cisalhamento na parede da aorta. INICIAR SEMPRE PELO CONTROLE DA FC para evitar taquicardia reflexa.

1. CONTROLE DA FREQUÊNCIA CARDÍACA (Escolha 1):
   - Esmolol (Primeira Linha): Bolus inicial de 500 mcg/kg EV → Infusão de manutenção de 50 a 200 mcg/kg/min.
   - Metoprolol 5 mg/5 mL: Administrar 1 ampola EV em 5 minutos. Pode repetir até mais 2 vezes. Manutenção pós-estabilização: 5 mg EV a cada 4-6h.

2. CONTROLE DA PRESSÃO ARTERIAL (Adicionar se PA sistólica continuar elevada pós-controle de FC):
   - Nitroprussiato de Sódio (50 mg/2 mL): Diluir 1 ampola em 248 mL de SF 0,9% (200 mcg/mL). Iniciar BIC a 5 mL/h e titular.

3. ANALGESIA POTENTE:
   - Morfina (10 mg/mL): Diluir 1 ampola em 9 mL de AD. Administrar 2 mL EV imediatamente e titular conforme a dor.

ATENCAO: CIRURGIA: Acionar a equipe de cirurgia cardiovascular/vascular imediatamente (Classificações Stanford/DeBakey).`
      },
      es: {
        title: 'Disección Aguda de Aorta — Protocolo Clínico',
        via: 'IV / BIC',
        preview: 'Control de FC primero (Esmolol/Metoprolol) → Control de PA (Nitroprusiato) → Dolor (Morfina)',
        text:
`DISECCIÓN AGUDA DE AORTA — PROTOCOLO CRÍTICO

OBJETIVO: Reducir la frecuencia cardíaca (FC) y la presión arterial (PA) para disminuir el estrés de cizallamiento en la pared aórtica. INICIAR SIEMPRE POR EL CONTROL DE LA FC para evitar taquicardia refleja.

1. CONTROL DE LA FRECUENCIA CARDÍACA (Seleccionar 1):
   - Esmolol (Primera Línea): Bolo inicial de 500 mcg/kg EV → Infusión de mantenimiento de 50 a 200 mcg/kg/min.
   - Metoprolol 5 mg/5 mL: Administrar 1 ampolla EV en 5 minutos. Puede repetirse hasta más 2 veces. Mantenimiento post-estabilización: 5 mg EV cada 4-6h.

2. CONTROL DE LA PRESIÓN ARTERIAL (Añadir si la PA sistólica continúa elevada tras el control de la FC):
   - Nitroprusiato de Sodio (50 mg/2 mL): Diluir 1 ampolla en 248 mL de SS 0,9% (200 mcg/mL). Iniciar BIC a 5 mL/h y titular.

3. ANALGESIA POTENTE:
   - Morfina (10 mg/mL): Diluir 1 ampolla en 9 mL de agua destilada. Administrar 2 mL EV inmediatamente y titular según el dolor.

ATENCAO: CIRUGÍA: Activar al equipo de cirugía cardiovascular/vascular de inmediato (Clasificaciones Stanford/DeBakey).`
      }
    },

    {
      id: 'tep-tvp-trombolise',
      specialty: 'cardio',
      icon: '',
      tags: ['TEP', 'TVP', 'Heparina', 'Alteplase', 'Enoxaparina'],
      pt: {
        title: 'TVP e Tromboembolismo Pulmonar (TEP)',
        via: 'SC / IV / VO',
        preview: 'Profilático vs Terapêutico (Enoxaparina/Heparina) + Trombólise de resgate se TEP instável',
        text:
`TVP E TROMBOEMBOLISMO PULMONAR (TEP)

PROFILAXIA VENOSA (Subcutânea):
- Enoxaparina 40 mg/0,4 mL: Aplicar 1 seringa SC a cada 24 horas.

TRATAMENTO TERAPÊUTICO (Escolha uma opção):
- Enoxaparina SC: Aplicar 1 mg/kg SC a cada 12 horas.
- Heparina Não Fracionada (IV): Diluir 1 ampola (25.000 UI/5 mL) em 245 mL de SF 0,9% (100 UI/mL). Bolus de ataque: 80 UI/kg EV. Manutenção: Infundir 18 UI/kg/h em BIC. Controlar TTPA (alvo 1,5 a 2,3 vezes o controle).
- Rivaroxabana (VO): Tomar 15 mg VO a cada 12 horas por 3 semanas. Após esse período, migrar para 20 mg VO uma vez ao dia por no mínimo 3 meses.

TROMBÓLISE DE RESGATE (Se TEP instável hemodinamicamente / Choque):
- Alteplase (rtPA): Diluir 2 ampolas (100 mg total) em 100 mL de SF 0,9%. Infundir EV em 2 horas (Dose máxima: 1,5 mg/kg).
- Estreptoquinase: 1.500.000 UI EV em BIC durante 2 horas OU bolus de 250.000 UI em 30 min seguido de 100.000 UI/h por 24h.`
      },
      es: {
        title: 'TVP y Tromboembolismo Pulmonar (TEP)',
        via: 'SC / IV / VO',
        preview: 'Profiláctico vs Terapéutico (Enoxaparina/Heparina) + Trombólisis si hay TEP inestable',
        text:
`TVP Y TROMBOEMBOLISMO PULMONAR (TEP)

PROFILAXIS VENOSA (Subcutánea):
- Enoxaparina 40 mg/0,4 mL: Aplicar 1 jeringa SC cada 24 horas.

TRATAMIENTO TERAPÉUTICO (Seleccionar una opción):
- Enoxaparina SC: Aplicar 1 mg/kg SC cada 12 horas.
- Heparina No Fraccionada (IV): Diluir 1 ampolla (25.000 UI/5 mL) en 245 mL de SS 0,9% (100 UI/mL). Bolo de carga: 80 UI/kg EV. Mantenimiento: Infundir 18 UI/kg/h por BIC. Controlar con APTT (meta 1,5 a 2,3 veces el valor normal).
- Rivaroxabán (VO): 1 comp de 15 mg VO cada 12 horas por 3 semanas. Posterior a este período, administrar 20 mg VO una vez al día por un mínimo de 3 meses.

TROMBÓLISIS DE RESCATE (Si hay TEP inestable hemodinámicamente / Shock):
- Alteplase (rtPA): Diluir 2 ampollas (100 mg total) en 100 mL de SS 0,9%. Infundir EV en 2 horas (Dosis máxima: 1,5 mg/kg).
- Estreptocinasa: 1.500.000 UI EV por BIC durante 2 horas O bolo de 250.000 UI en 30 min seguido de 100.000 UI/h por 24h.`
      }
    },

    {
      id: 'cefaleias-enxaqueca-analgesia',
      specialty: 'neuro',
      icon: '',
      tags: ['Cefaleia', 'Enxaqueca', 'Cetoprofeno', 'Clorpromazina', 'Triptanos'],
      pt: {
        title: 'Cefaleias e Crise de Enxaqueca',
        via: 'VO / IV / SC',
        preview: 'Analgesia escalonada VO/IV + Protocolo refratariedade com Clorpromazina',
        text:
`CEFALEIAS E CRISE DE ENXAQUECA

MANEJO INICIAL SINTOMÁTICO:
- Cetoprofeno 100 mg/2 mL: Diluir 1 ampola em 100 mL de SF 0,9% EV em 20 minutos.
- Dexametasona 10 mg/2,5 mL: 1 ampola EV em bolus ou IM (Crises > 48h).
- Metoclopramida 10 mg: 1 ampola EV (Primeira escolha: antiemético com efeito analgésico adjuvante).
- Dipirona 1g VO/IV a cada 6h | Ibuprofeno 400 mg VO a cada 6h | Paracetamol 750 mg VO a cada 8h.

TRATAMENTO ESPECÍFICO DA CRISE (VO/SC):
- Sumatriptano + Naproxeno (50/500 mg): 1 cp VO no início da crise. Pode repetir após 2h (Máx 2 cp/dia).
- Sumatriptano 6 mg/0,5 mL: Aplicar 1 ampola SC. Pode repetir após 2h (Máx 2 ampolas/dia).

ABORDAGEM PARA REFRATARIEDADE NA UNIDADE:
- Clorpromazina 5 mg/mL (1 ampola de 5 mL):
  - Ataque: 0,1 mg/kg EV administrado em 3 minutos.
  - Manutenção: 0,7 mg/kg em BIC diluído por 30 minutos. Pode repetir até 3 vezes.
  - Alternativa IM: 25 mg (1 ampola) IM dose única.
  ATENCAO: ALERTA: Monitorar rigorosamente o risco de hipotensão arterial.`
      },
      es: {
        title: 'Cefaleas y Crisis de Migraña',
        via: 'VO / IV / SC',
        preview: 'Analgesia escalonada VO/IV + Protocolo refractariedad con Clorpromazina',
        text:
`CEFALEAS Y CRISIS DE MIGRAÑA

MANEJO INICIAL SINTOMÁTICO:
- Ketoprofeno 100 mg/2 mL: Diluir 1 ampolla en 100 mL de SS 0,9% EV en 20 minutos.
- Dexametasona 10 mg/2,5 mL: 1 ampolla EV en bolo o IM (Crisis > 48h).
- Metoclopramida 10 mg: 1 ampolla EV (Primera elección: antiemético con efecto analgésico coadyuvante).
- Dipirona 1g VO/IV cada 6h | Ibuprofeno 400 mg VO cada 6h | Paracetamol 750 mg VO cada 8h.

TRATAMIENTO ESPECÍFICO DE LA CRISIS (VO/SC):
- Sumatriptán + Naproxeno (50/500 mg): 1 comp VO al inicio de la crisis. Puede repetirse a las 2h (Máx 2 comp/día).
- Sumatriptán 6 mg/0,5 mL: Aplicar 1 ampolla SC. Puede repetirse a las 2h (Máx 2 ampollas/día).

ABORDAJE PARA REFRACTARIEDAD EN LA UNIDAD:
- Clorpromazina 5 mg/mL (1 ampolla de 5 mL):
  - Carga: 0,1 mg/kg EV administrado en 3 minutos.
  - Mantenimiento: 0,7 mg/kg en BIC infundido por 30 minutos. Puede repetirse hasta 3 veces.
  - Alternativa IM: 25 mg (1 ampolla) IM dosis única.
  ATENCAO: ALERTA: Monitorear rigurosamente el riesgo de hipotensión arterial.`
      }
    },

  /* ── BLOCO 6 — 4 protocolos (emerg/neuro/infecto/gastro) ── */

    {
      id: 'vertigem-sintomaticos',
      specialty: 'emerg',
      icon: '',
      tags: ['Vertigem', 'Labirintite', 'Dimenidrato', 'Meclizina'],
      pt: {
        title: 'Vertigem / Crise Vestibular',
        via: 'VO / EV',
        preview: 'Dimenidrato EV ou VO + Meclizina/Cinarizina + Protocolo HINTS na unidade',
        text:
`VERTIGEM / SÍNDROME VESTIBULAR

TRATAMENTO DOMICILIAR:
- Dimenidrato 50 mg: Tomar 1 cp VO a cada 4 ou 6 horas (Se associado à Piridoxina 10 mg, tomar a cada 4 horas. Não exceder 400 mg/dia).
- Meclizina 50 mg: Tomar 1 cp VO a cada 8 horas.
- Cinarizina 25 mg: Tomar 1 cp VO a cada 8 horas.

CONDUTA NA UNIDADE (USO EV):
- Dimenidrato + Piridoxina (50 mg + 10 mg): Administrar 1 ampola EV a cada 6 horas.

BIZU DE SEGURANÇA: Fármacos antihistamínicos e antieméticos suprimem o sistema vestibular. Em vertigens refratárias ou com sinais de alarme centrais, aplicar o protocolo HINTS e avaliar déficit neurológico focal.`
      },
      es: {
        title: 'Vértigo / Crisis Vestibular',
        via: 'VO / EV',
        preview: 'Dimenhidrinato EV o VO + Meclizina/Cinarizina + Protocolo HINTS en unidad',
        text:
`VÉRTIGO / SÍNDROME VESTIBULAR

TRATAMIENTO DOMICILIARIO:
- Dimenhidrinato 50 mg: 1 comp VO cada 4 o 6 horas (Si está asociado a Piridoxina 10 mg, tomar cada 4 horas. No exceder 400 mg/día).
- Meclizina 50 mg: 1 comp VO cada 8 horas.
- Cinarizina 25 mg: 1 comp VO cada 8 horas.

CONDUCTA EN LA UNIDAD (USO EV):
- Dimenhidrinato + Piridoxina (50 mg + 10 mg): Administrar 1 ampolla EV cada 6 horas.

BIZU DE SEGURIDAD: Los fármacos antihistamínicos y antieméticos suprimen el sistema vestibular. En caso de vértigo refractario o con signos de alarma centrales, aplicar el protocolo HINTS y evaluar déficit neurológico focal.`
      }
    },

    {
      id: 'paralisia-bell',
      specialty: 'neuro',
      icon: '',
      tags: ['Bell', 'Paralisia', 'Prednisona', 'Aciclovir'],
      pt: {
        title: 'Paralisia de Bell / Paralisia Facial Periférica',
        via: 'VO / Tópico',
        preview: 'Prednisona 1mg/kg + Aciclovir + Cuidados oculares intensivos com colírio e pomada',
        text:
`PARALISIA DE BELL (PARALISIA FACIAL PERIFÉRICA)

TRATAMENTO DOMICILIAR:
1. Prednisona: Administrar 1 mg/kg/dia VO por 7 a 10 dias.
2. Aciclovir 400 mg: Tomar 1 cp VO a cada 4 horas por 10 dias (Omitir a dose da madrugada, ex: realizar às 08h, 12h, 16h, 20h e 00h).
3. Colírio Lubrificante (Hipromelose ou Hialuronato de Sódio): Aplicar 1 gota no olho afetado a cada 1 ou 2 horas para evitar o ressecamento da córnea.
4. Gel/Pomada Oftálmica (Epitegel ou similar): Aplicar na região peripalpebral 1 vez à noite ao deitar.
5. Proteção Ocular: Utilizar tampão ocular protetor para dormir se houver incapacidade de fechamento palpebral.

ORIENTAÇÃO:
- Encaminhar para fisioterapia facial precoce.`
      },
      es: {
        title: 'Parálisis de Bell / Parálisis Facial Periférica',
        via: 'VO / Tópico',
        preview: 'Prednisona 1mg/kg + Aciclovir + Cuidados oculares intensivos con colirio',
        text:
`PARÁLISIS DE BELL (PARÁLISIS FACIAL PERIFÉRICA)

TRATAMIENTO DOMICILIARIO:
1. Prednisona: Administrar 1 mg/kg/día VO por 7 a 10 días.
2. Aciclovir 400 mg: 1 comp VO cada 4 horas por 10 días (Omitir la dosis de la madrugada, ej: administrar a las 08h, 12h, 16h, 20h y 00h).
3. Colirio Lubricante (Hipromelosa o Hialuronato de Sodio): Aplicar 1 gota en el ojo afectado cada 1 o 2 horas para evitar la sequedad de la cornea.
4. Gel/Pomada Oftálmica: Aplicar en la región peripalpebral 1 vez de noche al acostarse.
5. Protección Ocular: Utilizar parche ocular protector para dormir si presenta incapacidad de cierre palpebral.

ORIENTACIÓN:
- Derivar a fisioterapia facial temprana.`
      }
    },

    {
      id: 'meningite-encefalite-atb',
      specialty: 'infecto',
      icon: '',
      tags: ['Meningite', 'Ceftriaxona', 'Ampicilina', 'Profilaxia'],
      pt: {
        title: 'Meningite, Encefalite e Profilaxia de Contatos',
        via: 'IV / IM / VO',
        preview: 'Esquema empírico por fator de risco + Desmame de corticoide + Profilaxia (Rifampicina)',
        text:
`MENINGITE E ENCEFALITE BACTERIANA/VIRAL

CONDUTA IMEDIATA NA UNIDADE (CONFORME PERFIL):
1. Adulto Imunocompetente: Ceftriaxona 2 g IV a cada 12 horas por 10-14 dias + Dexametasona 10 mg EV a cada 6 horas por 4 dias.
2. Extremos de Idade (Risco de Listeria): Associar Ampicilina 2 g IV a cada 4 horas por 14-21 dias ao esquema acima.
3. Pós-Neurocirurgia ou TCE Aberto (Risco de Staph): Ceftriaxona 2 g IV 12/12h + Ampicilina 2 g IV 4/4h + Vancomicina 1 a 2 g IV a cada 12 horas (15 a 20 mg/kg).
4. Encefalopatia Herpética: Aciclovir 10 mg/kg EV a cada 8 horas por 14-21 dias.
5. Neurotuberculose: Fase RHZE (4 cp/dia por 2 meses) → Manutenção RI (2 cp/dia por 7-11 meses) + Dexametasona 10 a 40 mg/dia EV/VO (Desmame escalonado em até 8 semanas).
6. Neurossífilis: Penicilina Cristalina 4.000.000 UI EV a cada 4 horas por 14 dias.

PROFILAXIA PARA COMUNICANTES ÍNTIMOS (Iniciar em até 48h):
- N. meningitidis / H. influenzae:
  - 1a Linha: Rifampicina 600 mg VO 1x ao dia por 4 dias (Crianças: 20 mg/kg).
  - 2a Linha: Ceftriaxona 250 mg IM ou EV dose única (Menores de 12 anos: 125 mg).
  - 3a Linha: Ciprofloxacino 500 mg VO dose única.`
      },
      es: {
        title: 'Meningitis, Encefalitis y Profilaxis de Contactos',
        via: 'IV / IM / VO',
        preview: 'Esquema empírico por riesgo + Desmonte de corticoide + Profilaxis (Rifampicina)',
        text:
`MENINGITIS Y ENCEFALITIS BACTERIANA/VIRAL

CONDUCTA INMEDIATA EN LA UNIDAD (SEGÚN PERFIL):
1. Adulto Inmunocompetente: Ceftriaxona 2 g IV cada 12 horas por 10-14 días + Dexametasona 10 mg EV cada 6 horas por 4 días.
2. Extremos de la Edad (Riesgo de Listeria): Asociar Ampicilina 2 g IV cada 4 horas por 14-21 días al esquema anterior.
3. Post-Neurocirugía o TCE Abierto (Riesgo de Staph): Ceftriaxona 2 g IV cada 12h + Ampicilina 2 g IV cada 4h + Vancomicina 1 a 2 g IV cada 12 horas (15 a 20 mg/kg).
4. Encefalopatía Herpética: Aciclovir 10 mg/kg EV cada 8 horas por 14-21 días.
5. Neurotuberculosis: Fase RHZE (4 comp/día por 2 meses) → Mantenimiento RI (2 comp/día por 7-11 meses) + Dexametasona 10 a 40 mg/día EV/VO (Desmonte escalonado en hasta 8 semanas).
6. Neurosífilis: Penicilina Cristalina 4.000.000 UI EV cada 4 horas por 14 días.

PROFILAXIS PARA CONTACTOS ÍNTIMOS (Iniciar en < 48h):
- N. meningitidis / H. influenzae:
  - 1a Línea: Rifampicina 600 mg VO 1 vez al día por 4 días (Niños: 20 mg/kg).
  - 2a Línea: Ceftriaxona 250 mg IM o EV dosis única (Menores de 12 años: 125 mg).
  - 3a Línea: Ciprofloxacino 500 mg VO dosis única.`
      }
    },

    {
      id: 'encefalopatia-hepatica-guia',
      specialty: 'gastro',
      icon: '',
      tags: ['Encefalopatia', 'Cirrose', 'Lactulose', 'Metronidazol'],
      pt: {
        title: 'Encefalopatia Hepática',
        via: 'VO / IV / Retal',
        preview: 'Lactulose para alvo de evacuações + Antibioticoterapia não absorvível',
        text:
`ENCEFALOPATIA HEPÁTICA

TRATAMENTO E CONTROLE:
- Lactulose 667 mg/mL: Iniciar com 20 a 40 mL VO a cada 12 horas. Ajustar dose rigorosamente para atingir a meta de 2 a 3 evacuações pastosas diárias.
- Antibioticoterapia de Redução de Flora (Escolha 1):
  - Metronidazol 400 mg: Tomar 1 cp VO a cada 8 horas por 14 dias.
  - Rifaximina 550 mg: Tomar 1 cp VO a cada 12 horas por 14 dias.
- Casos Refratários / Adjuvante: Aspartato de Ornitina 5 g: Diluir 1 envelope em um copo de líquido VO a cada 12 ou 24 horas.

CONDUTA NA UNIDADE / ORIENTAÇÕES:
- Manter monitorização de Ondansetrona 4 mg/mL (1 ampola em 100 mL de SF 0,9% EV em 20 min de 8/8h) se náuseas.
- Manter a cabeceira do leito elevada. Controle de curva térmica e sinais vitais a cada 6 horas.`
      },
      es: {
        title: 'Encefalopatía Hepática',
        via: 'VO / IV / Rectal',
        preview: 'Lactulosa para meta de evacuaciones + Antibioticoterapia no absorbible',
        text:
`ENCEFALOPATÍA HEPÁTICA

TRATAMIENTO Y CONTROL:
- Lactulosa 667 mg/mL: Iniciar con 20 a 40 mL VO cada 12 horas. Ajustar la dosis rigurosamente para alcanzar la meta de 2 a 3 evacuaciones blandas diarias.
- Antibioticoterapia de Reducción de Flora (Seleccionar 1):
  - Metronidazol 400 mg: 1 comp VO cada 8 horas por 14 días.
  - Rifaximina 550 mg: 1 comp VO cada 12 horas por 14 días.
- Casos Refractarios / Coadyuvante: Aspartato de Ornitina 5 g: Diluir 1 sobre en un vaso de líquido VO cada 12 o 24 horas.

CONDUCTA EN LA UNIDAD / ORIENTACIONES:
- Mantener monitoreo de Ondansetrón 4 mg/mL (1 ampolla en 100 mL de SS 0,9% EV en 20 min cada 8h) si presenta náuseas.
- Mantener la cabecera de la cama elevada. Control de curva térmica y signos vitales cada 6 horas.`
      }
    },

  /* ── BLOCO 7 — 11 protocolos (gastro/emerg) ── */

    {
      id: 'colecistite-colangite-guia',
      specialty: 'gastro',
      icon: '',
      tags: ['Colecistite', 'Colangite', 'Abdome Agudo', 'Ceftriaxona'],
      pt: {
        title: 'Colecistite e Colangite Aguda',
        via: 'IV / EV / SC',
        preview: 'Jejum + Hidratação de manutenção + Antibioticoterapia empírica + Profilaxia TVP',
        text:
`COLECISTITE E COLANGITE AGUDA

CONDUTA IMEDIATA NA UNIDADE:
- Internação/transferência urgente e avaliação imediata pela Cirurgia Geral.
- Manter o paciente em jejum absoluto para procedimento.
- Hidratação de Manutenção: Glicose 5% 500 mL + NaCl 10% 10 mL (2 amp) + KCl 10% 10 mL (1 amp) IV a cada 6 horas.
- Analgesia: Dipirona 1 g IV em bolus lento a cada 6 horas + Tramadol 100 mg em 100 mL de SF 0,9% IV em 30 min a cada 8 horas. (Colangite: se dor refratária, usar Morfina 4 a 5 mg EV a cada 6h).
- Antiemético: Bromoprida 10 mg VO de 8/8h ou Ondansetrona 8 mg IV se necessário.
- Profilaxia de TVP: Enoxaparina 40 mg SC a cada 24 horas.

ANTIBIOTICOTERAPIA EMPÍRICA (Escolha um esquema):
- Esquema Combinado: Ceftriaxona 1 g IV a cada 24 horas + Metronidazol 500 mg IV a cada 8 horas (por 7 a 10 dias).
- Monoterapia (Colangite): Piperacilina + Tazobactam 4,5 g IV a cada 8 horas OU Ciprofloxacino 400 mg IV a cada 12 horas.
- Alternativa Combinada: Cefepima 2 g IV a cada 8 horas + Metronidazol 500 mg IV a cada 8 horas.

BIZU DE SEGURANÇA: Monitorar rigorosamente os sinais vitais, o balanço hídrico horário e rastrear precocemente sinais de choque séptico (Pêntade de Reynolds na colangite).`
      },
      es: {
        title: 'Colecistitis y Colangitis Aguda',
        via: 'IV / EV / SC',
        preview: 'Ayuno + Hidratación de mantenimiento + Antibioticoterapia empírica + Profilaxis TVP',
        text:
`COLECISTITIS Y COLANGITIS AGUDA

CONDUCTA INMEDIATA EN LA UNIDAD:
- Internación/transferencia urgente y evaluación inmediata por Cirugía General.
- Mantener al paciente en ayuno absoluto para procedimiento.
- Hidratación de Mantenimiento: Glucosa 5% 500 mL + NaCl 10% 10 mL (2 amp) + KCl 10% 10 mL (1 amp) IV cada 6 horas.
- Analgesia: Dipirona 1 g IV en bolo lento cada 6 horas + Tramadol 100 mg en 100 mL de SS 0,9% IV en 30 min cada 8 horas. (Colangitis: si el dolor es refractario, usar Morfina 4 a 5 mg EV cada 6h).
- Antiemético: Bromoprida 10 mg VO cada 8h u Ondansetrón 8 mg IV si es necesario.
- Profilaxis de TVP: Enoxaparina 40 mg SC cada 24 horas.

ANTIBIOTICOTERAPIA EMPÍRICA (Seleccionar un esquema):
- Esquema Combinado: Ceftriaxona 1 g IV cada 24 horas + Metronidazol 500 mg IV cada 8 horas (por 7 a 10 días).
- Monoterapia (Colangitis): Piperacilina + Tazobactam 4,5 g IV cada 8 horas O Ciprofloxacino 400 mg IV cada 12 horas.
- Alternativa Combinada: Cefepima 2 g IV cada 8 horas + Metronidazol 500 mg IV cada 8 horas.

BIZU DE SEGURIDAD: Monitorear rigurosamente los signos vitales, el balance hídrico y rastrear precozmente signos de shock séptico (Péntada de Reynolds en colangitis).`
      }
    },

    {
      id: 'rge-tratamento',
      specialty: 'gastro',
      icon: '',
      tags: ['Refluxo', 'Omeprazol', 'Esomeprazol', 'Dispepsia'],
      pt: {
        title: 'Doença do Refluxo Gastroesofágico (DRGE)',
        via: 'VO',
        preview: 'Inibidores de Bomba de Prótons (Omeprazol/Esomeprazol) + Orientações comportamentais',
        text:
`DOENÇA DO REFLUXO GASTROESOFÁGICO (DRGE)

TRATAMENTO EMPÍRICO CRÔNICO (4 a 12 semanas):
- IBP (Escolha 1): Omeprazol 20 a 40 mg VO uma vez ao dia, pela manhã em jejum, ao menos 30 minutos antes de se alimentar. (Alternativa: Esomeprazol 20 a 40 mg VO nas mesmas condições. Ambos podem ser fracionados de 12/12h).
- Procinético (Opcional): Domperidona 10 mg VO a cada 8 horas OU Bromoprida 10 mg VO a cada 8 horas.

ORIENTAÇÕES COMPORTAMENTAIS CRÍTICAS:
- Manter a cabeceira do leito elevada ao deitar.
- Não se alimentar nas últimas 2 a 3 horas antes de dormir.
- Reduzir o peso corporal (se indicado) e cessar o tabagismo.
- Evitar refeições volumosas e alimentos gatilhos (chocolates, bebidas gaseificadas, café, condimentos excessivos).`
      },
      es: {
        title: 'Enfermedad por Reflujo Gastroesofágico (ERGE)',
        via: 'VO',
        preview: 'Inhibidores de Bomba de Protones (Omeprazol/Esomeprazol) + Orientaciones',
        text:
`ENFERMEDAD POR REFLUJO GASTROESOFÁGICO (ERGE)

TRATAMIENTO EMPÍRICO CRÓNICO (4 a 12 semanas):
- IBP (Seleccionar 1): Omeprazol 20 a 40 mg VO una vez al día, por la mañana en ayunas, al menos 30 minutos antes de ingerir alimentos. (Alternativa: Esomeprazol 20 a 40 mg VO en las mismas condiciones. Ambos pueden fraccionarse cada 12h).
- Procinético (Opcional): Domperidona 10 mg VO cada 8 horas O Bromoprida 10 mg VO cada 8 horas.

ORIENTACIONES COMPORTAMENTALES CRÍTICAS:
- Mantener la cabecera de la cama elevada al acostarse.
- No ingerir alimentos en las últimas 2 a 3 horas antes de dormir.
- Reducir el peso corporal (si está indicado) y cesar el tabaquismo.
- Evitar comidas abundantes y alimentos detonantes (chocolates, bebidas gaseosas, café, condimentos excesivos).`
      }
    },

    {
      id: 'doenca-ulcerosa-peptica',
      specialty: 'gastro',
      icon: '',
      tags: ['Úlcera', 'H. Pylori', 'Amoxicilina', 'Claritromicina'],
      pt: {
        title: 'Doença Ulcerosa Péptica e Erradicação de H. Pylori',
        via: 'VO',
        preview: 'IBP em dose plena por 8-12 semanas + Esquema Tríplice por 14 dias se H. Pylori (+)',
        text:
`DOENÇA ULCEROSA PÉPTICA

TRATAMENTO ISOLADO:
- IBP: Omeprazol 40 mg OU Pantoprazol 40 mg OU Esomeprazol 40 mg VO uma vez ao dia em jejum por 8 a 12 semanas.

ESQUEMA TRÍPLICE DE ERRADICAÇÃO (Se H. Pylori positivo — Manter por 14 dias):
1. Amoxicilina 500 mg: Tomar 2 comprimidos (1 g total) VO a cada 12 horas.
2. Claritromicina 500 mg: Tomar 1 comprimido VO a cada 12 horas.
3. IBP: Omeprazol 40 mg (ou Pantoprazol/Esomeprazol 40 mg) VO a cada 12 horas.`
      },
      es: {
        title: 'Enfermedad Ulcerosa Péptica y Erradicación de H. Pylori',
        via: 'VO',
        preview: 'IBP en dosis plena por 8-12 semanas + Esquema Tríplice por 14 días si H. Pylori (+)',
        text:
`ENFERMEDAD ULCEROSA PÉPTICA

TRATAMIENTO AISLADO:
- IBP: Omeprazol 40 mg O Pantoprazol 40 mg O Esomeprazol 40 mg VO una vez al día en ayunas por 8 a 12 semanas.

ESQUEMA TRIPLE DE ERRADICACIÓN (Si H. Pylori es positivo — Mantener por 14 días):
1. Amoxicilina 500 mg: 2 comprimidos (1 g total) VO cada 12 horas.
2. Claritromicina 500 mg: 1 comprimido VO cada 12 horas.
3. IBP: Omeprazol 40 mg (o Pantoprazol/Esomeprazol 40 mg) VO cada 12 horas.`
      }
    },

    {
      id: 'ascite-pbe-encefalopatia',
      specialty: 'gastro',
      icon: '',
      tags: ['Ascite', 'PBE', 'Espironolactona', 'Furosemida', 'Lactulose'],
      pt: {
        title: 'Manejo da Ascite, Profilaxia e Tratamento de PBE',
        via: 'VO / IV',
        preview: 'Diuréticos (Espironolactona+Furosemida) + Ceftriaxona se PBE + Lactulose',
        text:
`MANEJO DA ASCITE E COMPLICAÇÕES CRÔNICAS

MANEJO DA ASCITE:
- Restrição estrita de sódio na dieta (dieta hipossódica).
- Espironolactona 25 mg: Tomar 2 comprimidos (50 mg) VO pela manhã.
- Furosemida 40 mg: Tomar 1 a 2 comprimidos (40 a 80 mg) VO pela manhã.
ATENCAO: NOTA: Suspender diuréticos imediatamente se houver sinais de encefalopatia hepática em curso.

TRATAMENTO DE PERITONITE BACTERIANA ESPONTÂNEA (PBE CONFIRMADA):
- Ceftriaxona 1 g: Administrar 2 g IV a cada 8 horas por 7 dias.
  OU Piperacilina + Tazobactam 4,5 g IV a cada 6 horas por 7 dias.

PROFILAXIA DE PBE (Escolha 1):
- Norfloxacino 400 mg: Tomar 1 comprimido VO pela manhã continuamente.
- Sulfametoxazol + Trimetoprima 800/160 mg: Tomar 1 cp VO pela manhã continuamente.

PROFILAXIA DE ENCEFALOPATIA HEPÁTICA:
- Lactulose 667 mg/mL: Tomar 20 mL VO a cada 8 horas (Alvo clínico: 2 a 4 evacuações pastosas ao dia).`
      },
      es: {
        title: 'Manejo de la Ascitis, Profilaxis y Tratamiento de PBE',
        via: 'VO / IV',
        preview: 'Diuréticos (Espironolactona+Furosemida) + Ceftriaxona si hay PBE + Lactulosa',
        text:
`MANEJO DE LA ASCITIS Y COMPLICACIONES CRÓNICAS

MANEJO DE LA ASCITIS:
- Restricción estricta de sodio en la dieta (dieta hiposódica).
- Espironolactona 25 mg: 2 comprimidos (50 mg) VO por la mañana.
- Furosemida 40 mg: 1 a 2 comprimidos (40 a 80 mg) VO por la mañana.
ATENCAO: NOTA: Suspender diuréticos de inmediato si se observan signos de encefalopatía hepática activa.

TRATAMIENTO DE PERITONITIS BACTERIANA ESPONTÁNEA (PBE CONFIRMADA):
- Ceftriaxona 1 g: Administrar 2 g IV cada 8 horas por 7 días.
  O Piperacilina + Tazobactam 4,5 g IV cada 6 horas por 7 días.

PROFILAXIS DE PBE (Seleccionar 1):
- Norfloxacino 400 mg: 1 comprimido VO por la mañana de forma continua.
- Sulfametoxazol + Trimetoprima 800/160 mg: 1 comp VO por la mañana de forma continua.

PROFILAXIS DE ENCEFALOPATÍA HEPÁTICA:
- Lactulosa 667 mg/mL: Tomar 20 mL VO cada 8 horas (Meta clínica: 2 a 4 evacuaciones blandas al día).`
      }
    },

    {
      id: 'diverticulite-aguda-unidade',
      specialty: 'gastro',
      icon: '',
      tags: ['Diverticulite', 'Ciprofloxacino', 'Metronidazol', 'Abdome Agudo'],
      pt: {
        title: 'Diverticulite Aguda Não Complicada',
        via: 'VO / IV',
        preview: 'Tratamento ambulatorial (Cipro+Metro) ou Protocolo de internação IV se refratário',
        text:
`DIVERTICULITE AGUDA NÃO COMPLICADA

TRATAMENTO AMBULATORIAL (CENÁRIO LEVE):
- Antibioticoterapia (Manter por 7 a 10 dias):
  - Ciprofloxacino 500 mg VO a cada 12 horas + Metronidazol 400 mg VO a cada 8 horas.
  - OU Amoxicilina + Clavulanato 875+125 mg VO a cada 12 horas por 10 dias.
- Analgesia: Dipirona 1 g VO a cada 6h + Ibuprofeno 400 mg VO a cada 6h se dor importante (máx 3 dias).

INTERNAÇÃO OU PRONTO ATENDIMENTO (REFRATÁRIO OU INTOLERÂNCIA ORAL):
- Manter dieta branda ou pastosa conforme tolerância. (Se dieta suspensa, iniciar Glicose 5% 500 mL + NaCl 10% 10 mL + KCl 10% 10 mL IV 6/6h).
- Analgesia IV: Dipirona 1 g IV a cada 6 horas + Tramadol 100 mg IV em 100 mL de SF 0,9% em 30 min a cada 8 horas.
- Antibioticoterapia IV: Ceftriaxona 1 g IV a cada 24 horas + Metronidazol 500 mg IV a cada 8 horas.

ATENCAO: ABSCESSO OU PNEUMOPERITÔNIO: Considerar abdome agudo inflamatório perfurativo. Manter jejum absoluto, internação/transferência imediata e passar caso para a Cirurgia Geral.`
      },
      es: {
        title: 'Diverticulitis Aguda No Complicada',
        via: 'VO / IV',
        preview: 'Tratamiento ambulatorio (Cipro+Metro) o Protocolo de internación IV',
        text:
`DIVERTICULITIS AGUDA NO COMPLICADA

TRATAMIENTO AMBULATORIO (ESCENARIO LEVE):
- Antibioticoterapia (Mantener por 7 a 10 días):
  - Ciprofloxacino 500 mg VO cada 12 horas + Metronidazol 400 mg VO cada 8 horas.
  - O Amoxicilina + Clavulanato 875+125 mg VO cada 12 horas por 10 días.
- Analgesia: Dipirona 1 g VO cada 6h + Ibuprofeno 400 mg VO cada 6h si hay dolor importante (máx 3 días).

INTERNACIÓN O EN URGENCIAS (REFRACTARIO O INTOLERANCIA ORAL):
- Mantener dieta blanda o pastosa según tolerancia. (Si la dieta se suspende, iniciar Glucosa 5% 500 mL + NaCl 10% 10 mL + KCl 10% 10 mL IV cada 6h).
- Analgesia IV: Dipirona 1 g IV cada 6 horas + Tramadol 100 mg IV en 100 mL de SS 0,9% en 30 min cada 8 horas.
- Antibioticoterapia IV: Ceftriaxona 1 g IV cada 24 horas + Metronidazol 500 mg IV cada 8 horas.

ATENCAO: ABSCESO O NEUMOPERITONEO: Considerar abdomen agudo inflamatorio perforativo. Mantener ayuno absoluto, internación/transferencia inmediata y derivar el caso a Cirugía General.`
      }
    },

    {
      id: 'neutropenia-febril-protocolo',
      specialty: 'emerg',
      icon: '',
      tags: ['Neutropenia', 'Febre', 'Cefepime', 'MASCC'],
      pt: {
        title: 'Neutropenia Febril',
        via: 'VO / IV / BIC',
        preview: 'Estratificação MASCC → Baixo risco (Cipro+Amox) vs Alto risco hospitalar (Cefepime/Tazocin)',
        text:
`NEUTROPENIA FEBRIL — PROTOCOLO DE CONDUTA

1. PACIENTES DE BAIXO RISCO (Estratificação MASCC, estável, conduta ambulatorial):
   - Ciprofloxacino 500 mg: Tomar 1 comprimido VO a cada 12 horas por 10 a 14 dias.
   - + Amoxicilina + Clavulanato 875/125 mg: Tomar 1 comprimido VO a cada 12 horas por 10 a 14 dias.

2. PACIENTES DE ALTO RISCO (Conduta de Internação Hospitalar Imediata):
   - Dieta oral sob supervisão estrita com cuidados para neutropênicos (proibido alimentos crus).
   - Manter acesso venoso periférico calibroso salinizado exclusivo.
   - Antibioticoterapia antipseudomonas imediata (Escolha 1):
     * Cefepima 2 g IV a cada 8 horas.
     * Piperacilina + Tazobactam 4,5 g IV a cada 6 horas.
     * Meropenem 1 g IV a cada 8 horas.
   - Suspeita de Infecção de Pele ou Cateter: Associar Vancomicina 1 g a 2 g IV a cada 12 horas (Dose baseada em 15-20 mg/kg).
   - Suspeita de Clostridium difficile: Associar Metronidazol 400 mg VO a cada 8 horas.`
      },
      es: {
        title: 'Neutropenia Febril',
        via: 'VO / IV / BIC',
        preview: 'Estratificación MASCC → Bajo riesgo (Cipro+Amox) vs Alto riesgo hospitalar (Cefepime/Tazocin)',
        text:
`NEUTROPENIA FEBRIL — PROTOCOLO DE CONDUCTA

1. PACIENTES DE BAJO RIESGO (Estratificación MASCC, estable, conducta ambulatoria):
   - Ciprofloxacino 500 mg: 1 comprimido VO cada 12 horas por 10 a 14 días.
   - + Amoxicilina + Clavulanato 875/125 mg: 1 comprimido VO cada 12 horas por 10 a 14 días.

2. PACIENTES DE ALTO RIESGO (Conducta de Internación Hospitalaria Inmediata):
   - Dieta oral bajo supervisión estricta con cuidados para neutropénicos (prohibido alimentos crudos).
   - Mantener acceso venoso periférico calibroso salinizado exclusivo.
   - Antibioticoterapia antipseudomonas inmediata (Seleccionar 1):
     * Cefepime 2 g IV cada 8 horas.
     * Piperacilina + Tazobactam 4,5 g IV cada 6 horas.
     * Meropenem 1 g IV cada 8 horas.
   - Sospecha de Infección de Piel o Catéter: Asociar Vancomicina 1 g a 2 g IV cada 12 horas (Dosis basada en 15-20 mg/kg).
   - Sospecha de Clostridium difficile: Asociar Metronidazol 400 mg VO cada 8 horas.`
      }
    },

    {
      id: 'cetoacidose-cad-ehh-adulto',
      specialty: 'emerg',
      icon: '',
      tags: ['CAD', 'EHH', 'Insulina', 'Potássio', 'Cetoacidose'],
      pt: {
        title: 'Cetoacidose Diabética (CAD) e EHH — Adulto',
        via: 'IV / BIC / SC',
        preview: 'Insulinoterapia 1:1 (K > 3.3) + Hidratação venosa agressiva + Reposição de Potássio',
        text:
`CETOACIDOSE DIABÉTICA (CAD) E ESTADO HIPERGLICÊMICO HIPEROSMOLAR (EHH)

1. HIDRATAÇÃO VENOSA AGRESSIVA:
   - Iniciar com Cloreto de Sódio 0,9%: Administrar 15 a 20 mL/kg na primeira 1 hora, seguido de 100 mL/kg nas próximas 48 horas.
   - Ajuste por Sódio Corrigido: Se Na Corrigido > 150 mEq/L, migrar hidratação para SF 0,45%. (Fórmula de correção: Na real + 1,6 * [Glicemia - 100]/100).

2. INSULINOTERAPIA CONTÍNUA (Apenas iniciar se K+ sérico inicial > 3,3 mEq/L):
   - Diluição Padrão 1:1 -> 1 mL de Insulina Regular (100 UI) + 100 mL de SF 0,9% (Concentração final: 1 UI/mL).
   - Bolus Inicial: 0,1 a 0,15 UI/kg IV em bolus lento.
   - Manutenção: Iniciar a 0,1 UI/kg/h em BIC.
   - Monitorização: Glicemia capilar horário. Queda ideal: 50 a 70 mg/dL/h. Se HGT atingir < 200-250 mg/dL, reduzir BIC para 0,02 a 0,05 UI/kg/h e associar SG 5% para evitar edema cerebral.

3. REPOSIÇÃO DE POTÁSSIO SÉRICO:
   - Se K+ < 3,5 mEq/L: Adicionar 10 a 30 mEq/L de KCl na solução (Adiar insulina se K < 3.3).
   - Se K+ entre 3,5 e 5,0 mEq/L: Adicionar 10 a 20 mEq/L de KCl.
   - Se K+ > 5,0 mEq/L: Não repor, monitorar a cada 2 horas.

4. CRITÉRIOS DE DESLIGAMENTO DA BIC (Glicemia < 200 + pH > 7,3 + HCO3 > 18 + AG < 12):
   - Aplicar 10 UI de Insulina Regular SC estritamente 1 hora ANTES de desligar a BIC. Iniciar protocolo Basal-Bolus.`
      },
      es: {
        title: 'Cetoacidosis Diabética (CAD) y EHH — Adulto',
        via: 'IV / BIC / SC',
        preview: 'Insulinoterapia 1:1 (K > 3.3) + Hidratación agresiva + Reposición de Potasio',
        text:
`CETOACIDOSIS DIABÉTICA (CAD) Y ESTADO HIPERGLUCÉMICO HIPEROSMOLAR (EHH)

1. HIDRATACIÓN VENOSA AGRESIVA:
   - Iniciar con Cloruro de Sodio 0,9%: Administrar 15 a 20 mL/kg en la primera 1 hora, seguido de 100 mL/kg en las próximas 48 horas.
   - Ajuste por Sodio Corregido: Si el Na Corregido es > 150 mEq/L, cambiar la hidratación a SS 0,45%. (Fórmula de corrección: Na real + 1,6 * [Glucemia - 100]/100).

2. INSULINOTERAPIA CONTINUA (Solo iniciar si el K+ sérico inicial es > 3,3 mEq/L):
   - Dilución Estándar 1:1 -> 1 mL de Insulina Regular (100 UI) + 100 mL de SS 0,9% (Concentración final: 1 UI/mL).
   - Bolo Inicial: 0,1 a 0,15 UI/kg IV en bolo lento.
   - Mantenimiento: Iniciar a 0,1 UI/kg/h por BIC.
   - Monitoreo: Glucemia capilar horaria. Caída ideal: 50 a 70 mg/dL/h. Si el HGT alcanza < 200-250 mg/dL, reducir la BIC a 0,02 a 0,05 UI/kg/h y asociar SG 5% para prevenir edema cerebral.

3. REPOSICIÓN DE POTASIO SÉRICO:
   - Si K+ < 3,5 mEq/L: Añadir 10 a 30 mEq/L de KCl en la solución (Posponer insulina si K < 3.3).
   - Si K+ entre 3,5 y 5,0 mEq/L: Añadir 10 a 20 mEq/L de KCl.
   - Si K+ > 5,0 mEq/L: No reponer, monitorear cada 2 horas.

4. CRITERIOS DE SUSPENSIÓN DE LA BIC (Glucemia < 200 + pH > 7,3 + HCO3 > 18 + AG < 12):
   - Administrar 10 UI de Insulina Regular SC estrictamente 1 hora ANTES de suspender la BIC. Iniciar esquema Basal-Bolo.`
      }
    },

    {
      id: 'cad-pediatrica-protocolo',
      specialty: 'emerg',
      icon: '',
      tags: ['CAD', 'Pediatria', 'Holliday', 'Insulina'],
      pt: {
        title: 'Cetoacidose Diabética Pediatria',
        via: 'IV / BIC',
        preview: 'Expansão controlada 10-20 mL/kg + Manutenção Holliday-Segar + Insulina sem bolus',
        text:
`CETOACIDOSE DIABÉTICA PEDIÁTRICA

CRITÉRIOS DIAGNÓSTICOS: Glicemia > 200 mg/dL + Cetonúria/Cetonemia + pH < 7,30 ou HCO3 < 18 mmol/L.

1. FLUIDOTERAPIA CONTROLADA (Risco elevado de edema cerebral):
   - Expansão Inicial: 10 a 20 mL/kg/hora de cristaloides (SF 0,9% ou RL).
   - Déficit de Água (Repor em 24-48h baseado na gravidade): Leve 5% | Moderada 7% | Grave 10%. Subtrair o volume feito na expansão.
   - Solução de Manutenção: Fórmula de Holliday-Segar + Déficit calculado. Iniciar SEM glicose. Acrescentar glicose (Esquema de duas bolsas ou SG 5-10%) estritamente quando a glicemia cair abaixo de 250 mg/dL.

2. REPOSIÇÃO DE POTÁSSIO (Se diurese presente):
   - Se K+ < 3,5 mEq/L: Repor imediatamente ANTES de iniciar a insulina.
   - Se K+ entre 3,5 e 5,5 mEq/L: Adicionar 40 mEq/L de KCl no soro de manutenção.
   - Se K+ > 5,5 mEq/L: Não repor.
   ATENCAO: BICARBONATO: Não recomendado. Considerar apenas se pH < 6,9 ou instabilidade hemodinâmica extrema.

3. INSULINOTERAPIA CONTÍNUA (ATENCAO: PROIBIDO DOSE EM BOLUS EM PEDIATRIA):
   - Iniciar após o término da fluidoterapia inicial, se K+ > 3,5 mEq/L.
   - Dose: Infundir 0,1 UI/kg/hora contínuo em SF 0,9% (Alvo: manter glicemia entre 150 e 250 mg/dL). Reduzir para 0,05 UI/kg/h se alta sensibilidade.`
      },
      es: {
        title: 'Cetoacidosis Diabética Pediátrica',
        via: 'IV / BIC',
        preview: 'Expansión controlada 10-20 mL/kg + Mantenimiento Holliday-Segar + Insulina sin bolo',
        text:
`CETOACIDOSIS DIABÉTICA PEDIÁTRICA

CRITERIOS DIAGNÓSTICOS: Glucemia > 200 mg/dL + Cetonuria/Cetonemia + pH < 7,30 o HCO3 < 18 mmol/L.

1. FLUIDOTERAPIA CONTROLADA (Alto riesgo de edema cerebral):
   - Expansión Inicial: 10 a 20 mL/kg/hora de cristaloides (SS 0,9% o RL).
   - Déficit de Agua (Reponer en 24-48h según severidad): Leve 5% | Moderada 7% | Severa 10%. Restar el volumen administrado en la expansión.
   - Solución de Mantenimiento: Fórmula de Holliday-Segar + Déficit calculado. Iniciar SIN glucosa. Añadir glucosa (Esquema de dos bolsas o SG 5-10%) estrictamente cuando la glucemia descienda por debajo de 250 mg/dL.

2. REPOSICIÓN DE POTASIO (Si la diuresis está presente):
   - Si K+ < 3,5 mEq/L: Reponer inmediatamente ANTES de iniciar la insulina.
   - Si K+ entre 3,5 y 5,5 mEq/L: Añadir 40 mEq/L de KCl en la solución de mantenimiento.
   - Si K+ > 5,5 mEq/L: No reponer.
   ATENCAO: BICARBONATO: No recomendado. Considerar únicamente si el pH es < 6,9 o si hay inestabilidad hemodinámica extrema.

3. INSULINOTERAPIA CONTINUA (ATENCAO: PROHIBIDO EL USO DE DOSIS EN BOLO EN PEDIATRÍA):
   - Iniciar tras la fluidoterapia inicial, siempre que el K+ sea > 3,5 mEq/L.
   - Dosis: Infundir 0,1 UI/kg/hora continuo en SS 0,9% (Meta: mantener glucemia entre 150 y 250 mg/dL). Reducir a 0,05 UI/kg/h si presenta alta sensibilidad.`
      }
    },

    {
      id: 'vaginose-bacteriana-citolitica',
      specialty: 'emerg',
      icon: '',
      tags: ['Vaginose', 'Metronidazol', 'Bicarbonato', 'Tricomoníase'],
      pt: {
        title: 'Vaginose (Bacteriana / Citolítica) e Tricomoníase',
        via: 'VO / Vaginal',
        preview: 'Metronidazol para vaginose bacteriana/tricomoníase + Banho de bicarbonato para citolítica',
        text:
`DIRETRIZ DE INFECÇÕES VAGINAIS REFRATÁRIAS

1. VAGINOSE BACTERIANA:
   - Metronidazol 250 mg: Tomar 2 comprimidos (500 mg) VO a cada 12 horas por 7 dias. (Se recorrente: estender para 10-14 dias).
   - Alternativa: Clindamicina 150 mg: Tomar 2 comprimidos (300 mg) VO a cada 12 horas por 7 dias.
   ATENCAO: AVISO: Proibir consumo de álcool durante e até 48 horas após o término do Metronidazol.

2. VAGINOSE CITOLÍTICA (Hiperproliferação de Lactobacilos / pH ácido):
   - Banho de Assento: Diluir 30 a 60 g (1 a 2 colheres de sopa) de Bicarbonato de Sódio em 1 a 2 litros de água morna. Realizar 3 vezes ao dia por 7 dias. (Se recorrente: manter 1 a 2 vezes por semana).

3. TRICOMONÍASE (ATENCAO: ESSENCIAL TRATAR PARCEIRO SEXUAL):
   - Metronidazol 400 mg: Tomar 5 comprimidos (2 g total) VO em dose única. (Se indisponível, usar 8 cp de 250 mg).
   - Alternativa: Secnidazol 1 g (2 cp VO dose única) OU Tinidazol 500 mg (4 cp VO dose única).`
      },
      es: {
        title: 'Vaginosis (Bacteriana / Citolítica) y Tricomoniasis',
        via: 'VO / Vaginal',
        preview: 'Metronidazol para vaginosis bacteriana/tricomoniasis + Baño de bicarbonato para citolítica',
        text:
`DIRECTRIZ DE INFECCIONES VAGINALES REFRACTARIAS

1. VAGINOSIS BACTERIANA:
   - Metronidazol 250 mg: 2 comprimidos (500 mg) VO cada 12 horas por 7 días. (Si es recurrente: extender por 10-14 días).
   - Alternativa: Clindamicina 150 mg: 2 comprimidos (300 mg) VO cada 12 horas por 7 días.
   ATENCAO: AVISO: Prohibir el consumo de alcohol durante y hasta 48 horas después de finalizar el Metronidazol.

2. VAGINOSIS CITOLÍTICA (Hiperproliferación de Lactobacilos / pH ácido):
   - Baño de Asiento: Diluir 30 a 60 g (1 a 2 cucharadas) de Bicarbonato de Sodio en 1 a 2 litros de agua tibia. Realizar 3 veces al día por 7 días. (Si es recurrente: mantener 1 a 2 veces por semana).

3. TRICOMONIASIS (ATENCAO: ESENCIAL TRATAR A LA PAREJA SEXUAL):
   - Metronidazol 400 mg: 5 comprimidos (2 g total) VO en dosis única. (Si no está disponible, usar 8 comp de 250 mg).
   - Alternativa: Secnidazol 1 g (2 comp VO dosis única) O Tinidazol 500 mg (4 comp VO dosis única).`
      }
    },

    {
      id: 'herpes-genital-guia',
      specialty: 'emerg',
      icon: '',
      tags: ['Herpes', 'Genital', 'Aciclovir', 'Valaciclovir'],
      pt: {
        title: 'Herpes Genital (Primoinfecção, Episódico e Supressivo)',
        via: 'VO / IV',
        preview: 'Protocolo antiviral escalonado para crises agudas ou terapia supressiva crônica',
        text:
`HERPES GENITAL — PROTOCOLO CLÍNICO

1. PRIMOINFECÇÃO (Primeiro episódio agudo — Manter por 7 dias):
   - Aciclovir 400 mg: Tomar 1 comprimido VO a cada 8 horas. (Alternativa SUS: Aciclovir 200 mg 1 cp VO a cada 4 horas, omitindo a dose noturna).
   - Alternativa de escolha: Valaciclovir 500 mg: Tomar 2 comprimidos (1 g) VO a cada 12 horas (por 7 a 14 dias).

2. TRATAMENTO EPISÓDICO (Recidiva curta — Iniciar nas primeiras 72h por 5 dias):
   - Imunocompetentes: Aciclovir 400 mg VO 3x ao dia OU Valaciclovir 1 g VO 1x ao dia.
   - Pacientes HIV / Imunossuprimidos (Manter por 5 a 10 dias): Aciclovir 400 mg VO 3x ao dia OU Valaciclovir 1 g VO 2x ao dia.

3. TERAPIA SUPRESSIVA CRÔNICA (Indicado se >= 4 a 6 episódios graves por ano):
   - Imunocompetentes: Aciclovir 400 mg VO a cada 12 horas continuadamente.
   - Pacientes HIV / Imunossuprimidos: Aciclovir 400 a 800 mg VO 2 a 3 vezes ao dia.

4. MANEJO EM GESTANTES:
   - Infecção Primária: Aciclovir 400 mg VO 3x ao dia por 7 a 14 dias.
   - Infecção Recorrente: Aciclovir 400 mg VO 3x ao dia por 5 dias.

5. CASOS GRAVES / DISSEMINADOS (Unidade):
   - Aciclovir 5 a 10 mg/kg EV a cada 8 horas por 2 a 7 dias.`
      },
      es: {
        title: 'Herpes Genital (Primoinfección, Episódico y Supresivo)',
        via: 'VO / IV',
        preview: 'Protocolo antiviral escalonado para crisis agudas o terapia supresiva crónica',
        text:
`HERPES GENITAL — PROTOCOLO CLÍNICO

1. PRIMOINFECCIÓN (Primer episodio agudo — Mantener por 7 días):
   - Aciclovir 400 mg: 1 comprimido VO cada 8 horas. (Alternativa SUS: Aciclovir 200 mg 1 comp VO cada 4 horas, omitiendo la dosis nocturna).
   - Alternativa de elección: Valaciclovir 500 mg: 2 comprimidos (1 g) VO cada 12 horas (por 7 a 14 días).

2. TRATAMIENTO EPISÓDICO (Recidiva corta — Iniciar en las primeras 72h por 5 días):
   - Inmunocompetentes: Aciclovir 400 mg VO 3x al día O Valaciclovir 1 g VO 1x al día.
   - Pacientes VIH / Inmunodeprimidos (Mantener por 5 a 10 días): Aciclovir 400 mg VO 3x al día O Valaciclovir 1 g VO 2x al día.

3. TERAPIA SUPRESIVA CRÓNICA (Indicado si presenta >= 4 a 6 episodios graves por año):
   - Inmunocompetentes: Aciclovir 400 mg VO cada 12 horas de forma continua.
   - Pacientes VIH / Inmunodeprimidos: Aciclovir 400 a 800 mg VO 2 a 3 veces al día.

4. MANEJO EN EMBARAZADAS:
   - Infección Primaria: Aciclovir 400 mg VO 3x al día por 7 a 14 días.
   - Infección Recurrente: Aciclovir 400 mg VO 3x al día por 5 días.

5. CASOS GRAVES / DISEMINADOS (Unidad):
   - Aciclovir 5 a 10 mg/kg EV cada 8 horas por 2 a 7 días.`
      }
    },

    {
      id: 'uretrites-gonococica-nao-gonococica',
      specialty: 'emerg',
      icon: '',
      tags: ['Uretrite', 'Ceftriaxona', 'Azitromicina', 'Corrimento'],
      pt: {
        title: 'Uretrite Gonocócica e Não Gonocócica',
        via: 'IM / VO',
        preview: 'Terapia dupla imediata para secreção purulenta + Tratamento de parceiros',
        text:
`URETRITE NO PRONTO SOCORRO

ATENCAO: CONDUTA CRÍTICA: Toda uretrite com secreção purulenta ativa deve ser tratada empiricamente para cobertura dupla (Gonococo + Clamídia). Tratar obrigatoriamente todos os parceiros sexuais.

1. URETRITE GONOCÓCICA / TRATAMENTO EMPÍRICO COMBINADO:
   - Ceftriaxona 500 mg: Aplicar 1 ampola IM em dose única.
   - + Azitromicina 500 mg: Tomar 2 comprimidos (1 g total) VO em dose única imediata.
   - Alternativa para Clamídia: Doxiciclina 100 mg 1 cp VO a cada 12 horas por 7 dias.

2. URETRITE NÃO GONOCÓCICA (Confirmada):
   - Azitromicina 500 mg: Tomar 2 comprimidos (1 g total) VO em dose única.
   - OU Doxiciclina 100 mg: Tomar 1 comprimido VO a cada 12 horas por 7 dias.`
      },
      es: {
        title: 'Uretritis Gonocócica y No Gonocócica',
        via: 'IM / VO',
        preview: 'Terapia doble inmediata para secreción purulenta + Tratamiento de parejas',
        text:
`URETRITIS EN URGENCIAS

ATENCAO: CONDUCTA CRÍTICA: Toda uretritis con secreción purulenta activa debe ser tratada empíricamente para cobertura doble (Gonococo + Chlamydia). Tratar obligatoriamente a todas las parejas sexuales.

1. URETRITIS GONOCÓCICA / TRATAMIENTO EMPÍRICO COMBINADO:
   - Ceftriaxona 500 mg: Aplicar 1 ampolla IM en dosis única.
   - + Azitromicina 500 mg: 2 comprimidos (1 g total) VO en dosis única inmediata.
   - Alternativa para Chlamydia: Doxiciclina 100 mg 1 comp VO cada 12 horas por 7 días.

2. URETRITIS NO GONOCÓCICA (Confirmada):
   - Azitromicina 500 mg: 2 comprimidos (1 g total) VO en dosis única.
   - O Doxiciclina 100 mg: 1 comprimido VO cada 12 horas por 7 días.`
      }
    },

  /* ── BLOCO 8 — 11 protocolos (emerg/infecto) ── */

    {
      id: 'orquiepididimite-guia',
      specialty: 'emerg',
      icon: '',
      tags: ['Orquiepididimite', 'Ceftriaxona', 'Doxiciclina', 'Ciprofloxacino'],
      pt: {
        title: 'Orquiepididimite Aguda',
        via: 'VO / IM',
        preview: 'Jovens (Ceftriaxona + Doxiciclina/Azitromicina) vs Idosos (Quinolonas)',
        text:
`ORQUIEPIDIDIMITE AGUDA

CONDUTA EM PACIENTES JOVENS (Suspeita de Chlamydia ou Gonococo):
- Esquema de Escolha: Ceftriaxona 500 mg IM em dose única + Doxiciclina 100 mg VO a cada 12 horas por 10 dias.
- Esquema Alternativo: Ceftriaxona 500 mg IM em dose única + Azitromicina 500 mg (2 cp - 1 g total) VO em dose única.

CONDUTA EM PACIENTES IDOSOS / PORTADORES DE HPB (Suspeita de Enterobactérias):
- Opção 1: Ciprofloxacino 500 mg: Tomar 1 cp VO a cada 12 horas por 14 dias.
- Opção 2: Levofloxacino 500 mg: Tomar 1 cp VO uma vez ao dia por 10 dias.

ANALGESIA E MEDIDAS ADJUVANTES:
- Dipirona 1 g: Tomar 1 cp VO a cada 6 horas se houver dor.
- Ibuprofeno 600 mg: Tomar 1 cp VO a cada 12 horas por 5 dias.
- Orientar o uso contínuo de suspensório escrotal e aplicação local de bolsas de gelo por 15 minutos a cada 2 horas.`
      },
      es: {
        title: 'Orquiepididimitis Aguda',
        via: 'VO / IM',
        preview: 'Jóvenes (Ceftriaxona + Doxiciclina/Azitromicina) vs Ancianos (Quinolonas)',
        text:
`ORQUIEPIDIDIMITIS AGUDA

CONDUCTA EN PACIENTES JÓVENES (Sospecha de Chlamydia o Gonococo):
- Esquema de Elección: Ceftriaxona 500 mg IM en dosis única + Doxiciclina 100 mg VO cada 12 horas por 10 días.
- Esquema Alternativo: Ceftriaxona 500 mg IM en dosis única + Azitromicina 500 mg (2 comp - 1 g total) VO en dosis única.

CONDUCTA EN PACIENTES ANCIANOS / PORTADORES DE HPB (Sospecha de Enterobacterias):
- Opción 1: Ciprofloxacino 500 mg: 1 comp VO cada 12 horas por 14 días.
- Opción 2: Levofloxacino 500 mg: 1 comp VO una vez al día por 10 días.

ANALGESIA Y MEDIDAS COADYUVANTES:
- Dipirona 1 g: 1 comp VO cada 6 horas en caso de dolor.
- Ibuprofeno 600 mg: 1 comp VO cada 12 horas por 5 días.
- Orientar el uso continuo de suspensorio escrotal y la aplicación local de bolsas de hielo por 15 minutos cada 2 horas.`
      }
    },

    {
      id: 'sangramento-uterino-anormal',
      specialty: 'emerg',
      icon: '',
      tags: ['SUA', 'Estrogênio', 'Medroxiprogesterona', 'Tranexâmico'],
      pt: {
        title: 'Sangramento Uterino Anormal (SUA)',
        via: 'VO / EV',
        preview: 'Instável (Estrogênio Conjugado EV) vs Estável (Hormonioterapia VO + Antifibrinolíticos)',
        text:
`SANGRAMENTO UTERINO ANORMAL (SUA)

1. PACIENTES INSTÁVEIS OU IMPOSSIBILIDADE DE VIA ORAL:
   - Estrogênios Conjugados: Administrar 1 frasco-ampola de 20 mg EV em dose única.
   - Avaliar necessidade de hemotransfusão se Hemoglobina < 7 g/dL ou instabilidade persistente.

2. PACIENTES ESTÁVEIS (Manejo Ambulatorial / VO):
   - Estrogênios Conjugados 0,65 mg: Tomar 1 cp VO a cada 6 horas por 21 a 25 dias.
   - + Medroxiprogesterona 10 mg: Tomar 1 cp VO uma vez ao dia por 10 dias, iniciando IMEDIATAMENTE após o término do estrogênio conjugado.

3. TERAPIA ADJUVANTE ANTIFIBRINOLÍTICA / AINEs (Escolha 1):
   - Ácido Tranexâmico VO: Tomar 4 cp (1 g total) VO a cada 8 horas por 5 dias.
   - Ácido Tranexâmico EV: Administrar 10 mg/kg (máximo de 600 mg por dose) EV a cada 8 horas por até 5 dias.
   - Naproxeno 500 mg: Tomar 1 cp VO a cada 12 horas por até 5 dias.
   - Ácido Mefenâmico 500 mg: Tomar 1 cp VO a cada 8 horas por até 5 dias.

4. TERAPIA DE MANUTENÇÃO (Pós-crise aguda):
   - Opção 1: Medroxiprogesterona 10 mg VO uma vez ao dia por 10 dias ao mês, durante 4 meses.
   - Opção 2: Anticoncepcional oral combinado (Estrogênio + Progesterona) de 21 dias. Tomar 1 cp VO ao dia no mesmo horário, com pausa de 7 dias entre as cartelas.`
      },
      es: {
        title: 'Sangrado Uterino Anormal (SUA)',
        via: 'VO / EV',
        preview: 'Inestable (Estrógenos Conjugados EV) vs Estable (Hormonoterapia VO + Antifibrinolíticos)',
        text:
`SANGRADO UTERINO ANORMAL (SUA)

1. PACIENTES INESTABLES O IMPOSIBILIDAD DE VÍA ORAL:
   - Estrógenos Conjugados: Administrar 1 frasco-ampolla de 20 mg EV en dosis única.
   - Evaluar necesidad de transfusión de glóbulos rojos si la Hemoglobina es < 7 g/dL o hay inestabilidad persistente.

2. PACIENTES ESTABLES (Manejo Ambulatorio / VO):
   - Estrógenos Conjugados 0,65 mg: 1 comp VO cada 6 horas por 21 a 25 días.
   - + Medroxiprogesterona 10 mg: 1 comp VO una vez al día por 10 días, iniciando INMEDIATAMENTE después de finalizar el estrógeno conjugado.

3. TERAPIA COADYUVANTE ANTIFIBRINOLÍTICA / AINEs (Seleccionar 1):
   - Ácido Tranexámico VO: 4 comp (1 g total) VO cada 8 horas por 5 días.
   - Ácido Tranexámico EV: Administrar 10 mg/kg (máximo 600 mg por dosis) EV cada 8 horas por hasta 5 días.
   - Naproxeno 500 mg: 1 comp VO cada 12 horas por hasta 5 días.
   - Ácido Mefenámico 500 mg: 1 comp VO cada 8 horas por hasta 5 días.

4. TERAPIA DE MANTENIMIENTO (Post-crisis aguda):
   - Opción 1: Medroxiprogesterona 10 mg VO una vez al día por 10 días al mes, durante 4 meses.
   - Opción 2: Anticonceptivos orales combinados (Estrógeno + Progestágeno) de 21 días. 1 comp VO al día en el mismo horario, con pausa de 7 días entre cajas.`
      }
    },

    {
      id: 'dor-musculoesqueletica-ps',
      specialty: 'emerg',
      icon: '',
      tags: ['Analgesia', 'Escada OMS', 'Morfina', 'Tramadol', 'Tenoxicam'],
      pt: {
        title: 'Escada Analgésica e Dor Musculoesquelética',
        via: 'VO / IV / IM',
        preview: 'Protocolo de manejo álgico baseado nos degraus da OMS (Leve, Moderada e Intensa)',
        text:
`CONTROLE DA DOR MUSCULOESQUELÉTICA (ESCADA OMS)

DIRETRIZ DE MANEJO NO PRONTO SOCORRO:
- Dor Leve (1o Degrau): Analgésicos simples com ou sem AINEs.
- Dor Moderada (2o Degrau): Opioides fracos associados.
- Dor Intensa (3o Degrau): Opioides fortes.
- BIZU: Para cervicalgias, lombalgias e entorses agudas, associar 1 analgésico EV + 1 AINE EV. Se persistir, associar 1 opioide. Evitar a via IM. Infundir opioides lentamente.

FÁRMACOS DISPONÍVEIS NA UNIDADE (USO EV / IM):
- Dipirona Sódica: 1 ampola (1 g/2 mL) diluída em 10 mL de AD em bolus lento. (Máx: 8 g/dia).
- Tenoxicam 20 mg (Frasco-ampola): Diluir em 20 mL de AD. Administrar EV em 1 minuto.
- Cetoprofeno 100 mg (Bolsa de 100 mL): Administrar EV lentamente em 20 minutos. (Máx: 300 mg/dia).
- Diclofenaco Sódico 75 mg/3 mL: 1 ampola IM. Aplicação exclusiva e profunda em região glútea.
- Tramadol: 1 ampola (50 a 100 mg) diluída em 100 mL de SF 0,9% ou SG 5% EV lento em 30 min.
- Morfina (10 mg/mL): Diluir 1 ampola em 10 mL de SF 0,9%. Infundir EV lentamente.
- Nalbufina: 1 ampola (10 mg/mL) diluída em 100 a 250 mL de SF 0,9% EV lento.

CONDUTA DOMICILIAR (ANALGESIA ORAL):
- Analgésicos Simples: Dipirona 1 g VO de 6/6h OU Paracetamol 750 mg VO de 8/8h (Máx Paracetamol: 3 g/dia).
- Opioides Orais: Tramadol 50 mg VO de 6/6h OU Codeína 30 mg VO de 6/6h.
- Associações Comerciais: Paracetamol + Codeína (500/30 mg) 1 cp VO de 6/6h OU Paracetamol + Tramadol (37,5/325 mg) 1 cp VO de 6/6h se dor intensa.
- AINEs Orais (Manter por até 5 dias): Celecoxibe 200 mg de 12/12h | Cetoprofeno 100 mg de 12/12h | Nimesulida 100 mg de 12/12h | Diclofenaco 50 mg de 8/8h | Ibuprofeno 600 mg de 12/12h.

LOMBALGIA MECÂNICA E TORCICOLO (ESQUEMA DIRETOR ORAL):
- Composto: Paracetamol 300 mg + Cafeína 30 mg + Carisoprodol 125 mg + Diclofenaco 50 mg. Tomar 1 cp VO de 8/8h ou 12/12h por no máximo 7 dias.
- Ciclobenzaprina 5 mg: Tomar 1 cp VO a cada 12 horas por 5 dias (ATENCAO: Causa sonolência severa).`
      },
      es: {
        title: 'Escala Analgésica y Dolor Musculoesquelético',
        via: 'VO / IV / IM',
        preview: 'Protocolo de manejo del dolor basado en los peldaños de la OMS (Leve, Moderado e Intenso)',
        text:
`CONTROL DEL DOLOR MUSCULOESQUELÉTICO (ESCALA OMS)

DIRECTRIZ DE MANEJO EN URGENCIAS:
- Dolor Leve (1o Peldaño): Analgésicos simples con o sin AINEs.
- Dolor Moderado (2o Peldaño): Opioides débiles asociados.
- Dolor Intenso (3o Peldaño): Opioides fuertes.
- BIZU: Para cervicalgias, lumbalgias y esguinces agudos, asociar 1 analgésico EV + 1 AINE EV. Si persiste, asociar 1 opioide. Evitar la vía IM. Infundir opioides lentamente.

FÁRMACOS DISPONIBLES EN LA UNIDAD (USO EV / IM):
- Dipirona Sódica: 1 ampolla (1 g/2 mL) diluida en 10 mL de agua destilada en bolo lento. (Máx: 8 g/día).
- Tenoxicam 20 mg (Frasco-ampolla): Diluir en 20 mL de agua destilada. Administrar EV en 1 minuto.
- Ketoprofeno 100 mg (Bolsa de 100 mL): Administrar EV lentamente en 20 minutos. (Máx: 300 mg/día).
- Diclofenaco Sódico 75 mg/3 mL: 1 ampolla IM. Aplicación exclusiva y profunda en región glútea.
- Tramadol: 1 ampolla (50 a 100 mg) diluida en 100 mL de SS 0,9% o SG 5% EV lento en 30 min.
- Morfina (10 mg/mL): Diluir 1 ampolla en 10 mL de SS 0,9%. Infundir EV lentamente.
- Nalbufina: 1 ampolla (10 mg/mL) diluida en 100 a 250 mL de SS 0,9% EV lento.

CONDUCTA DOMICILIARIA (ANALGESIA ORAL):
- Analgésicos Simples: Dipirona 1 g VO cada 6h O Paracetamol 750 mg VO cada 8h (Máx Paracetamol: 3 g/día).
- Opioides Orales: Tramadol 50 mg VO cada 6h O Codeína 30 mg VO cada 6h.
- Asociaciones Comerciales: Paracetamol + Codeína (500/30 mg) 1 comp VO cada 6h O Paracetamol + Tramadol (37,5/325 mg) 1 comp VO cada 6h si el dolor es intenso.
- AINEs Orales (Mantener por hasta 5 días): Celecoxib 200 mg cada 12h | Ketoprofeno 100 mg cada 12h | Nimesulida 100 mg cada 12h | Diclofenaco 50 mg cada 8h | Ibuprofeno 600 mg cada 12h.

LUMBALGIA MECÁNICA Y TORTÍCOLIS (ESQUEMA ORAL):
- Compuesto: Paracetamol 300 mg + Cafeína 30 mg + Carisoprodol 125 mg + Diclofenaco 50 mg. 1 comp VO cada 8h o 12h por un máximo de 7 días.
- Ciclobenzaprina 5 mg: 1 comp VO cada 12 horas por 5 días (ATENCAO: Causa somnolencia severa).`
      }
    },

    {
      id: 'fratura-exposta-gustilo',
      specialty: 'emerg',
      icon: '',
      tags: ['Fratura', 'Trauma', 'Gustilo', 'Cefazolina', 'Gentamicina'],
      pt: {
        title: 'Fratura Exposta — Protocolo Gustilo & Anderson',
        via: 'IV / EV',
        preview: 'Classificação de ferimento + Antibioticoterapia profilática imediata de amplo espectro',
        text:
`FRATURA EXPOSTA — PROTOCOLO DE ANTIBIOTICOTERAPIA

CLASSIFICAÇÃO DE GUSTILO & ANDERSON:
- Tipo I: Ferimento puntiforme < 1 cm, limpo.
- Tipo II: Lesão entre 1 a 10 cm, sem dano extenso de tecidos moles.
- Tipo III: Lesão > 10 cm, dano extenso de tecidos moles (músculos, pele, estruturas neurovasculares). Subdivisões: IIIa (cobertura óssea adequada), IIIb (perda de cobertura tecidual), IIIc (lesão vascular que requer reparo).

ANTIBIOTICOTERAPIA IMEDIATA NA UNIDADE:
- Gustilo Tipo I: Cefazolina 2 g EV em dose única/ataque.
- Gustilo Tipo II e Tipo III: Clindamicina 600 mg EV + Gentamicina 240 mg EV.

AJUSTES ESPECÍFICOS POR CENÁRIO DE RISCO:
- Trauma em Área Rural / Fazenda / Campo (Risco de anaeróbios): Adicionar Penicilina Cristalina 2.000.000 UI IV a cada 4 horas OU Metronidazol 500 mg IV a cada 6 horas.
- Pacientes > 60 anos, em estado de Choque ou com Mioglobinúria: Substituir/utilizar Ceftriaxona 1 g IV a cada 12 horas.`
      },
      es: {
        title: 'Fractura Expuesta — Protocolo Gustilo & Anderson',
        via: 'IV / EV',
        preview: 'Clasificación de herida + Antibioticoterapia profiláctica inmediata de amplio espectro',
        text:
`FRACTURA EXPUESTA — PROTOCOLO DE ANTIBIOTICOTERAPIA

CLASIFICACIÓN DE GUSTILO & ANDERSON:
- Tipo I: Herida puntiforme < 1 cm, limpia.
- Tipo II: Lesión entre 1 a 10 cm, sin daño extenso de tejidos blandos.
- Tipo III: Lesión > 10 cm, daño extenso de tejidos blandos (músculos, piel, estructuras neurovasculares). Subdivisiones: IIIa (cobertura ósea adecuada), IIIb (pérdida de cobertura tisular), IIIc (lesión vascular que requiere reparación).

ANTIBIOTICOTERAPIA INMEDIATA EN LA UNIDAD:
- Gustilo Tipo I: Cefazolina 2 g EV en dosis única/carga.
- Gustilo Tipo II y Tipo III: Clindamicina 600 mg EV + Gentamicina 240 mg EV.

AJUSTES ESPECÍFICOS POR ESCENARIO DE RIESGO:
- Trauma en Área Rural / Campo / Granja (Riesgo de anaerobios): Añadir Penicilina Cristalina 2.000.000 UI IV cada 4 horas O Metronidazol 500 mg IV cada 6 horas.
- Pacientes > 60 años, en estado de Shock o con Mioglobinuria: Sustituir/utilizar Ceftriaxona 1 g IV cada 12 horas.`
      }
    },

    {
      id: 'gota-crise-aguda',
      specialty: 'emerg',
      icon: '',
      tags: ['Gota', 'Colchicina', 'Alopurinol', 'Hiperuricemia'],
      pt: {
        title: 'Crise Gotosa Aguda e Hiperuricemia',
        via: 'VO / EV',
        preview: 'Manejo álgico com Colchicina escalonada + Conduta de manutenção com Alopurinol',
        text:
`CRISE GOTOSA AGUDA

MANEJO DA CRISE REFRATÁRIA (Uso Oral):
- Colchicina 0,5 mg:
  - Dia 1: Tomar 2 comprimidos (1 mg) em dose única.
  - Dia 2 em diante: Tomar 1 comprimido a cada 12 horas, por até 7 dias.
- Se houver contraindicação absoluta aos AINEs: Prednisona 20 mg VO uma vez ao dia por 7 a 10 dias.

ATENCAO: REGRA DE OURO DO ALOPURINOL: Se o paciente já estiver em uso crônico de Alopurinol, NÃO descontinuar durante a crise aguda. Se o paciente não usava, NÃO iniciar na crise; aguardar a resolução completa da dor para iniciar o tratamento crônico.

ANALGESIA DE RESGATE NA UNIDADE (EV):
- Dipirona Sódica: 1 ampola (1 g/2 mL) diluída em 10 mL de AD em bolus.
- Tramadol: 1 ampola (50 mg) diluída em 100 mL de SF 0,9% EV para correr em 1 hora.
- Morfina (10 mg/mL) OU Nalbufina (10 mg/mL): Diluir 1 ampola em SF 0,9% e infundir EV lentamente.

CONTROLE DE MANUTENÇÃO AMBULATORIAL (Pós-crise):
- Alopurinol 100 mg: Tomar 1 comprimido VO uma vez ao dia. Elevar a dose progressivamente em 50 a 100 mg a cada 4 semanas até a estabilização laboratorial do ácido úrico.
- Opções de AINEs pós-alta (Escolha 1 por até 5 dias): Celecoxibe 200 mg 12/12h | Meloxicam 15 mg 1x/dia | Cetoprofeno 100 mg 12/12h | Nimesulida 100 mg 12/12h | Diclofenaco 75 mg 12/12h | Ibuprofeno 600 mg 12/12h.`
      },
      es: {
        title: 'Crisis Gotosa Aguda e Hiperuricemia',
        via: 'VO / EV',
        preview: 'Manejo del dolor con Colchicina escalonada + Conducta de mantenimiento con Alopurinol',
        text:
`CRISIS GOTOSA AGUDA

MANEJO DE LA CRISIS (Vía Oral):
- Colchicina 0,5 mg:
  - Día 1: 2 comprimidos (1 mg) en dosis única.
  - Día 2 en adelante: 1 comprimido cada 12 horas, por hasta 7 días.
- En caso de contraindicación absoluta a los AINEs: Prednisona 20 mg VO una vez al día por 7 a 10 días.

ATENCAO: REGLA DE ORO DEL ALOPURINOL: Si el paciente ya utiliza Alopurinol de forma crónica, NO suspender durante la crisis aguda. Si el paciente no lo utilizaba, NO iniciar en la crisis; esperar la resolución completa del dolor para iniciar el tratamiento crónico.

ANALGESIA DE RESCATE EN LA UNIDAD (EV):
- Dipirona Sódica: 1 ampolla (1 g/2 mL) diluida en 10 mL de agua destilada en bolo.
- Tramadol: 1 ampolla (50 mg) diluida en 100 mL de SS 0,9% EV para pasar en 1 hora.
- Morfina (10 mg/mL) O Nalbufina (10 mg/mL): Diluir 1 ampolla en SS 0,9% e infundir EV lentamente.

CONTROL DE MANTENIMIENTO AMBULATORIO (Post-crisis):
- Alopurinol 100 mg: 1 comprimido VO una vez al día. Elevar la dosis progresivamente de a 50 o 100 mg cada 4 semanas hasta la estabilización de la hiperuricemia.
- Opciones de AINEs post-alta (Seleccionar 1 por hasta 5 días): Celecoxib 200 mg cada 12h | Meloxicam 15 mg 1x/día | Ketoprofeno 100 mg cada 12h | Nimesulida 100 mg cada 12h | Diclofenaco 75 mg cada 12h | Ibuprofeno 600 mg cada 12h.`
      }
    },

    {
      id: 'acatisia-psiquiatria',
      specialty: 'emerg',
      icon: '',
      tags: ['Acatisia', 'Propranolol', 'Clonazepam', 'Biperideno'],
      pt: {
        title: 'Acatisia Induzida por Antipsicóticos',
        via: 'VO / IM',
        preview: 'Propranolol de 1ª linha + Benzodiazepínicos de curto prazo ou Biperideno IM',
        text:
`ACATISIA INDUZIDA POR NEUROLÉPTICOS

TRATAMENTO DE PRIMEIRA LINHA (VO):
- Propranolol 10 mg: Iniciar com 10 mg VO 2 vezes ao dia. Titular progressivamente até 20 a 40 mg, 2 a 3 vezes ao dia conforme resposta. (Doses habituais: 40 a 120 mg/dia).
  ATENCAO: CONTRAINDICAÇÕES: Asma, DPOC, Diabetes Mellitus, Bloqueio Atrioventricular (BAV), IC descompensada. Monitorar estritamente hipotensão ortostática e bradicardia.

TRATAMENTO ADJUVANTE / SE SEGUNDA LINHA (Insuficiência ou Contraindicação):
- Clonazepam: 0,5 a 1 mg VO 2 vezes ao dia (Dose total: 0,5 a 2,5 mg/dia). Uso restrito por curto prazo com desmame programado. (ATENCAO: Contraindicado se histórico de dependência química ou depressão respiratória).
- Lorazepam: 0,5 mg VO 2 vezes ao dia (Titulação máxima de até 6 a 10 mg/dia).

CONDUTA SE PARKINSONISMO OU DISTONIA ASSOCIADA:
- Biperideno: 2 mg IM para alívio rápido imediato na unidade. Manutenção: 2 mg VO 2 a 3 vezes ao dia por curto período.`
      },
      es: {
        title: 'Acatisia Inducida por Antipsicóticos',
        via: 'VO / IM',
        preview: 'Propranolol de 1ª línea + Benzodiazepinas a corto plazo o Biperideno IM',
        text:
`ACATISIA INDUCIDA POR NEUROLÉPTICOS

TRATAMIENTO DE PRIMERA LÍNEA (VO):
- Propranolol 10 mg: Iniciar con 10 mg VO 2 veces al día. Titular progresivamente hasta 20 a 40 mg, 2 a 3 veces al día según respuesta. (Dosis habituales: 40 a 120 mg/día).
  ATENCAO: CONTRAINDICACIONES: Asma, EPOC, Diabetes Mellitus, Bloqueo Atrioventricular (BAV), IC descompensada. Monitorear estrictamente hipotensión ortostática y bradicardia.

TRATAMIENTO COADYUVANTE / SEGUNDA LÍNEA (Insuficiencia o Contraindicación):
- Clonazepam: 0,5 a 1 mg VO 2 veces al día (Dosis total: 0,5 a 2,5 mg/día). Uso restringido a corto plazo con desmonte programado. (ATENCAO: Contraindicado si hay antecedente de dependencia o depresión respiratoria).
- Lorazepam: 0,5 mg VO 2 veces al día (Titulación máxima de hasta 6 a 10 mg/día).

CONDUCTA SI HAY PARKINSONISMO O DISTONÍA ASOCIADA:
- Biperideno: 2 mg IM para alivio rápido inmediato en la unidad. Mantenimiento: 2 mg VO 2 a 3 veces al día por corto período.`
      }
    },

    {
      id: 'sindrome-psicotica-agita-emerg',
      specialty: 'emerg',
      icon: '',
      tags: ['Surtos', 'Haloperidol', 'Risperidona', 'Prometazina', 'Agitação'],
      pt: {
        title: 'Síndrome Psicótica, Agitação e Agressividade',
        via: 'VO / IM / EV',
        preview: 'Antipsicóticos puros (Ajuste QTc) + Coquetel de contenção química adjuvante',
        text:
`SÍNDROME PSICÓTICA E AGITAÇÃO PSICOMOTORA

ANTIPSICÓTICOS DE ESCOLHA (Uso Oral ou Parenteral):
- Haloperidol VO: 1 a 5 mg VO (Dose máxima: 20 a 40 mg/dia conforme o cenário).
- Haloperidol IM/EV: 2,5 a 5 mg IM/EV (0,5 a 1 mL) a cada 30 minutos até a estabilização (máx 3x). ATENCAO: BIZU: Realizar ECG prévio. Evitar se intervalo QTc > 500 ms.
- Risperidona VO: 0,5 a 2 mg VO. Útil se intolerância ao Haloperidol. (Dose máxima: 6 a 8 mg/dia).
- Olanzapina VO: 2,5 a 10 mg VO (Dose máxima: 20 a 30 mg/dia). Útil se sintomas extrapiramidais severos.
- Quetiapina VO: Iniciar com 12,5 a 25 mg VO à noite. Titular até dose máxima de 300 mg/dia.

COQUETÉIS DE CONTENÇÃO QUÍMICA IM (Cenário de Agressividade Crítica):
- Opção Combinada 1: Haloperidol 2,5 a 5 mg + Midazolam 7,5 a 15 mg IM (Repetir a cada 30 min se necessário. Alta vigilância respiratória).
- Opção Combinada 2: Haloperidol 2,5 a 10 mg + Prometazina 25 a 50 mg IM (Dose máxima: 30 mg / 100 mg dia).
- Prometazina Isolada: 50 mg/2 mL (1 ampola IM). Pode repetir a cada 30 min (máx 3 vezes).

BENZODIAZEPÍNICOS ADJUVANTES ORAIS (Se ansiedade ou insônia grave):
- Clonazepam 2 mg VO (Repetir a cada 1h se necessário. Máx 8 mg/dia).
- Diazepam 10 mg VO (Início em 30-90 min. Máx 60 mg/dia) OU 10 mg EV lento (Máx 30 mg/dia).
- Lorazepam 2 a 4 mg VO (Repetir a cada 2h se necessário. Máx 10 a 12 mg/dia).`
      },
      es: {
        title: 'Síndrome Psicótico, Agitación y Agresividad',
        via: 'VO / IM / EV',
        preview: 'Antipsicóticos puros (Ajuste QTc) + Coctel de contención química coadyuvante',
        text:
`SÍNDROME PSICÓTICO Y AGITACIÓN PSICOMOTORA

ANTIPSICÓTICOS DE ELECCIÓN (Vía Oral o Parenteral):
- Haloperidol VO: 1 a 5 mg VO (Dosis máxima: 20 a 40 mg/día según el contexto).
- Haloperidol IM/EV: 2,5 a 5 mg IM/EV (0,5 a 1 mL) cada 30 minutos hasta la estabilización (máx 3 veces). ATENCAO: BIZU: Realizar ECG previo. Evitar si el intervalo QTc es > 500 ms.
- Risperidona VO: 0,5 a 2 mg VO. Útil en caso de intolerancia al Haloperidol. (Dosis máxima: 6 a 8 mg/día).
- Olanzapina VO: 2,5 a 10 mg VO (Dosis máxima: 20 a 30 mg/día). Útil si presenta síntomas extrapiramidales severos.
- Quetiapina VO: Iniciar con 12,5 a 25 mg VO de noche. Titular hasta una dosis máxima de 300 mg/día.

COCTELES DE CONTENCIÓN QUÍMICA IM (Escenario de Agresividad Crítica):
- Opción Combinada 1: Haloperidol 2,5 a 5 mg + Midazolam 7,5 a 15 mg IM (Repetir cada 30 min si es necesario. Alta vigilancia respiratoria).
- Opción Combinada 2: Haloperidol 2,5 a 10 mg + Prometazina 25 a 50 mg IM (Dosis máxima: 30 mg / 100 mg día).
- Prometazina Aislada: 50 mg/2 mL (1 ampolla IM). Puede repetirse cada 30 min (máx 3 veces).

BENZODIAZEPINAS COADYUVANTES ORALES (Si hay ansiedad o insomnio grave):
- Clonazepam 2 mg VO (Repetir cada 1h si es necesario. Máx 8 mg/día).
- Diazepam 10 mg VO (Inicio en 30-90 min. Máx 60 mg/día) O 10 mg EV lento (Máx 30 mg/día).
- Lorazepam 2 a 4 mg VO (Repetir cada 2h si es necesario. Máx 10 a 12 mg/día).`
      }
    },

    {
      id: 'hipercalemia-e-hipocalemia-iv',
      specialty: 'emerg',
      icon: '',
      tags: ['Potássio', 'Hipercalemia', 'Hipocalemia', 'Glicoinsulina', 'Sorcal'],
      pt: {
        title: 'Distúrbios do Potássio (Hiper / Hipocalemia)',
        via: 'VO / IV / BIC / Inalatória',
        preview: 'Estabilização cardíaca com Gluconato de Cálcio + Soluções de desvio vs Reposição IV/VO',
        text:
`DISTÚRBIOS DO POTÁSSIO SÉRICO

1. HIPERCALEMIA (K+ ELEVADO):
   ATENCAO: REPERCUSSÃO NO ECG: Se houver alteração eletrocardiográfica, administrar IMEDIATAMENTE Gluconato de Cálcio 10% (1 ampola de 10 mL diluída em 50 a 100 mL de SF 0,9% EV em 3 a 5 min. Pode repetir até 3x para estabilização elétrica do miocárdio - não reduz o K+).
   - Medidas de Desvio Celular / Redução Sérica:
     - Solução Polarizante (Glicoinsulina): Insulina Regular 10 UI + 100 mL de SG 50% (ou 500 mL de SG 10%) EV em BIC para correr em 1 hora. Pode repetir a cada 4 horas.
     - Beta-Agonistas (Inalação): Salbutamol gotas (40 gotas diluídas em 3 a 5 mL de SF 0,9%) OU Fenoterol gotas (10 a 15 gotas em 5 mL de SF) via nebulização a cada 4 horas.
     - Furosemida: 0,5 a 1 mg/kg IV a cada 4 horas conforme tolerância volêmica.
     - Poliestirenossulfonato de Cálcio (Sorcal): Diluir 1 envelope (30 g) em 100 mL de água ou manitol 10% VO a cada 4 horas.
     - Ciclossilicato de Zircônio (Lokelma): Diluir 5 g em 100 mL de água VO uma vez ao dia.
   - Urgência Dialítica: Acionar hemodiálise se refratariedade extrema.

2. HIPOCALEMIA (K+ BAIXO):
   - Grau Leve (K+ > 3,0 mEq/L — Reposição Oral): KCl xarope 6% (Tomar 10 a 30 mL VO a cada 6 horas) OU KCl 600 mg comprimido (Tomar 1 cp VO após as refeições a cada 6 horas).
   - Grau Moderado/Grave (K+ < 3,0 mEq/L — Reposição IV obrigatoriamente): KCl 10% (2 ampolas de 10 mL cada) diluídas em 500 mL de SF 0,9% para infundir em 2 a 3 horas via acesso venoso periférico. (Se acesso central, concentrações maiores como 4 ampolas em 500 mL são aceitáveis).`
      },
      es: {
        title: 'Trastornos del Potasio (Hiper / Hipopotasemia)',
        via: 'VO / IV / BIC / Inhalatoria',
        preview: 'Estabilización cardíaca con Gluconato de Calcio + Soluciones de desvío vs Reposición IV/VO',
        text:
`TRASTORNOS DEL POTASIO SÉRICO

1. HIPERPOTASEMIA (K+ ELEVADO):
   ATENCAO: REPERCUSIÓN EN EL ECG: Si hay alteraciones electrocardiográficas, administrar INMEDIATAMENTE Gluconato de Calcio 10% (1 ampolla de 10 mL diluida en 50 a 100 mL de SS 0,9% EV en 3 a 5 min. Puede repetirse hasta 3 veces para estabilización eléctrica del miocardio - no disminuye el K+).
   - Medidas de Desvío Celular / Reducción Sérica:
     - Solución Polarizante (Glicoinsulina): Insulina Regular 10 UI + 100 mL de SG 50% (o 500 mL de SG 10%) EV por BIC para pasar en 1 hora. Puede repetirse cada 4 horas.
     - Beta-Agonistas (Inhalación): Salbutamol gotas (40 gotas diluidas en 3 a 5 mL de SS 0,9%) O Fenoterol gotas (10 a 15 gotas en 5 mL de SS) vía nebulización cada 4 horas.
     - Furosemida: 0,5 a 1 mg/kg IV cada 4 horas según tolerancia volémica.
     - Poliestiren sulfonato de Calcio (Sorcal): Diluir 1 sobre (30 g) en 100 mL de agua o manitol 10% VO cada 4 horas.
     - Ciclosilicato de Circonio (Lokelma): Diluir 5 g en 100 mL de agua VO una vez al día.
   - Urgencia Dialítica: Activar hemodiálisis en caso de refractariedad extrema.

2. HIPOPOTASEMIA (K+ BAJO):
   - Grado Leve (K+ > 3,0 mEq/L — Reposición Oral): Realizar jarabe de KCl 6% (10 a 30 mL VO cada 6 horas) O KCl 600 mg comprimido (1 comp VO después de las comidas cada 6 horas).
   - Grado Moderado/Severo (K+ < 3,0 mEq/L — Reposición IV obligatoria): KCl 10% (2 ampollas de 10 mL cada una) diluidas en 500 mL de SS 0,9% para infundir en 2 a 3 horas vía acceso venoso periférico. (Si cuenta con acceso central, concentraciones mayores como 4 ampollas en 500 mL son aceptables).`
      }
    },

    {
      id: 'disturbios-sodio-hipo-hipernatremia',
      specialty: 'emerg',
      icon: '',
      tags: ['Sódio', 'Hiponatremia', 'Hipernatremia', 'Salina 3%'],
      pt: {
        title: 'Distúrbios do Sódio (Hipo / Hipernatremia)',
        via: 'IV / BIC / VO',
        preview: 'Cálculo de variação baseada em ACT para correção segura de sódio (Salina 3% ou SG 5%)',
        text:
`DISTÚRBIOS DO SÓDIO SÉRICO (FÓRMULAS DE CORREÇÃO CRÍTICA)

ATENCAO: SEGURANÇA: A variação máxima permitida de sódio é de 8 a 12 mEq/L em 24 horas para evitar desmielinização osmótica ou edema cerebral. Em casos crônicos, buscar velocidade de correção de 0,5 mEq/L/h.

1. HIPONATREMIA (CORREÇÃO COM SALINA A 3%):
   - Passo 1 (Preparo da Solução): 890 mL de NaCl 0,9% + 110 mL de NaCl 20% (Concentração final: 513 mEq/L).
   - Passo 2 (Cálculo de variação por litro): Variação por litro = (513 - Sódio do Paciente) / (ACT + 1).
     * Água Corporal Total (ACT): Homem < 65a: Peso * 0,6 | Homem > 65a: Peso * 0,5 | Mulher < 65a: Peso * 0,5 | Mulher > 65a: Peso * 0,45.
   - Passo 3 (Volume total em 24h): Volume total (mL) = (Variação desejada em 24h * 1000) / Valor obtido no Passo 2.
   - Passo 4 (Velocidade de infusão): Dividir o volume total do Passo 3 por 24h para obter a taxa em mL/h na BIC.

2. HIPERNATREMIA (CORREÇÃO COM FLUIDOS LIVRES):
   - Passo 1: Iniciar expansão volêmica prévia se instabilidade com RL ou SF 0,9%. Estimular ingestão de água VO se possível.
   - Passo 2 (Cálculo de variação por litro): Variação por litro = (Sódio da Solução - Sódio do Paciente) / (ACT + 1).
     * Sódio da Solução: Usar 0 mEq/L se for Soro Glicosado 5% (SG 5%) OU 77 mEq/L se for Soro Fisiológico a 0,45% (SF 0,45%).
   - Passo 3 (Volume total em 24h): Volume total (mL) = (Variação desejada em 24h * 1000) / Valor obtido no Passo 2.
   - Passo 4 (Velocidade de infusão): Dividir o volume total do Passo 3 por 24h para programar a taxa em mL/h na BIC.`
      },
      es: {
        title: 'Trastornos del Sodio (Hipo / Hipernatremia)',
        via: 'IV / BIC / VO',
        preview: 'Cálculo de variación basada en ACT para corrección segura de sodio (Salina 3% o SG 5%)',
        text:
`TRASTORNOS DEL SODIO SÉRICO (FÓRMULAS DE CORRECCIÓN CRÍTICA)

ATENCAO: SEGURIDAD: La variación máxima permitida de sodio es de 8 a 12 mEq/L en 24 horas para prevenir la desmielinización osmótica o el edema cerebral. En casos crónicos, buscar una velocidad de corrección de 0,5 mEq/L/h.

1. HIPONATREMIA (CORRECCIÓN CON SALINA AL 3%):
   - Paso 1 (Preparación de la Solución): 890 mL de NaCl 0,9% + 110 mL de NaCl 20% (Concentración final: 513 mEq/L).
   - Paso 2 (Cálculo de variación por litro): Variación por litro = (513 - Sodio del Paciente) / (ACT + 1).
     * Agua Corporal Total (ACT): Hombre < 65a: Peso * 0,6 | Hombre > 65a: Peso * 0,5 | Mujer < 65a: Peso * 0,5 | Mujer > 65a: Peso * 0,45.
   - Paso 3 (Volumen total en 24h): Volumen total (mL) = (Variación deseada en 24h * 1000) / Valor obtenido en el Paso 2.
   - Paso 4 (Velocidad de infusión): Dividir el volumen total del Paso 3 por 24h para obtener la tasa en mL/h en la BIC.

2. HIPERNATREMIA (CORRECCIÓN CON FLUIDOS LIBRES):
   - Paso 1: Iniciar expansión volémica previa si hay inestabilidad con RL o SS 0,9%. Estimular la ingesta de agua VO si es posible.
   - Paso 2 (Cálculo de variación por litro): Variación por litro = (Sodio de la Solución - Sodio del Paciente) / (ACT + 1).
     * Sodio de la Solución: Usar 0 mEq/L si se utiliza Suero Glucosado al 5% (SG 5%) O 77 mEq/L si se utiliza Solución Salina al 0,45% (SS 0,45%).
   - Paso 3 (Volumen total en 24h): Volumen total (mL) = (Variación deseada en 24h * 1000) / Valor obtenido en el Paso 2.
   - Paso 4 (Velocidad de infusión): Dividir el volumen total del Paso 3 por 24h para programar la tasa en mL/h en la BIC.`
      }
    },

    {
      id: 'disturbios-calcio-magnesio',
      specialty: 'emerg',
      icon: '',
      tags: ['Cálcio', 'Magnésio', 'Gluconato', 'Torsades', 'Sulfato'],
      pt: {
        title: 'Distúrbios do Cálcio e Magnésio',
        via: 'IV / BIC / VO',
        preview: 'Correção de hipo/hipercalcemia + Protocolo de Sulfato de Magnésio EV no Torsades',
        text:
`DISTÚRBIOS DO CÁLCIO E DO MAGNÉSIO

1. CÁLCIO:
   - Hipocalcemia Sintomática: Gluconato de Cálcio 10% (1 ampola de 10 mL). Diluir em 50 a 100 mL de SF 0,9% EV para infundir em 1 hora. (Se grave/manutenção: diluir 5 ampolas em 500 mL de SF 0,9% EV para correr em 5 a 10 horas). ATENCAO: NOTA: Corrigir hiperfosfatemia antes se houver associação para evitar precipitação. (Se assintomática: reposição VO de 1000 a 2600 mg/dia).
   - Hipercalcemia: Hidratação venosa vigorosa com SF 0,9% a 200-500 mL/h conforme tolerância + Diurético de alça (Furosemida) pós-volemia. Inibição da reabsorção óssea com Ácido Zoledrônico 4 mg IV em 15 min OU Pamidronato 60 a 90 mg IV a cada 4 horas.

2. MAGNÉSIO:
   - Hipomagnesemia no Torsades de Pointes OU Sintomas Graves (Tetania/Convulsão):
     - Ataque/Resgate: Sulfato de Magnésio 10% (2 ampolas de 10 mL cada) + SG 5% 100 mL EV lento em 2 a 5 minutos.
     - Manutenção: Sulfato de Magnésio 10% (4 ampolas de 10 mL cada) + SF 0,9% 460 mL IV em BIC para correr em 12 a 24 horas.
   - Hipomagnesemia Moderada (Mg > 1,0 mg/dL): Sulfato de Magnésio 10% (4 ampolas) + SF 0,9% 460 mL IV EV lento por 8 a 12 horas.
   - Hipomagnesemia Leve (Mg > 1,5 mg/dL): Óxido de Magnésio 800 a 1600 mg/dia VO fracionado em 3-4x.
   ATENCAO: SEGURANÇA: Reposição máxima recomendada de 6 g de Sulfato de Magnésio ao dia (60 mL da sol. a 10%), reduzindo para metade (3 g) se ClCr < 30.
   - Hipermagnesemia Sintomática Grave: Interromper fontes de magnésio + Furosemida 0,5 a 1 mg/kg IV a cada 4h + Antagonismo com Gluconato de Cálcio 10% (1 ampola em 50-100 mL de SF EV em 3 a 5 min). Terapia dialítica se refratário.`
      },
      es: {
        title: 'Trastornos del Calcio y Magnesio',
        via: 'IV / BIC / VO',
        preview: 'Corrección de hipo/hipercalcemia + Protocolo de Sulfato de Magnesio EV en Torsades',
        text:
`TRASTORNOS DEL CALCIO Y DEL MAGNESIO

1. CALCIO:
   - Hipocalcemia Sintomática: Gluconato de Calcio 10% (1 ampolla de 10 mL). Diluir en 50 a 100 mL de SS 0,9% EV para infundir en 1 hora. (Si es severo/mantenimiento: diluir 5 ampollas en 500 mL de SS 0,9% EV para pasar en 5 a 10 horas). ATENCAO: NOTA: Corregir hiperfosfatemia antes si hay asociación para prevenir precipitación. (Si es asintomática: reposición VO de 1000 a 2600 mg/día).
   - Hipercalcemia: Hidratación venosa vigorosa con SS 0,9% a 200-500 mL/h según tolerancia + Diurético de asa (Furosemida) post-volemia. Inhibición de la reabsorción ósea con Ácido Zoledrónico 4 mg IV en 15 min O Pamidronato 60 a 90 mg IV cada 4 horas.

2. MAGNESIO:
   - Hipomagnesemia en Torsades de Pointes O Síntomas Graves (Tetania/Convulsión):
     - Carga/Rescate: Sulfato de Magnesio 10% (2 ampollas de 10 mL cada una) + SG 5% 100 mL EV lento en 2 a 5 minutos.
     - Mantenimiento: Sulfato de Magnesio 10% (4 ampollas de 10 mL cada una) + SS 0,9% 460 mL IV por BIC para pasar en 12 a 24 horas.
   - Hipomagnesemia Moderada (Mg > 1,0 mg/dL): Sulfato de Magnesio 10% (4 ampollas) + SS 0,9% 460 mL IV EV lento por 8 a 12 horas.
   - Hipomagnesemia Leve (Mg > 1,5 mg/dL): Óxido de Magnesio 800 a 1600 mg/día VO fraccionado en 3-4x.
   ATENCAO: SEGURIDAD: Reposición máxima recomendada de 6 g de Sulfato de Magnesio al día (60 mL de la sol. al 10%), reduciendo a la mitad (3 g) si el ClCr es < 30.
   - Hipermagnesemia Sintomática Grave: Interrumpir fuentes de magnesio + Furosemida 0,5 a 1 mg/kg IV cada 4h + Antagonismo con Gluconato de Calcio 10% (1 ampolla en 50-100 mL de SS EV en 3 a 5 min). Terapia dialítica si es refractaria.`
      }
    },

    {
      id: 'sifilis-esquema-completo',
      specialty: 'infecto',
      icon: '',
      tags: ['Sífilis', 'Penicilina', 'Benzetacil', 'Doxiciclina'],
      pt: {
        title: 'Sífilis (Recente, Tardia e Tratamento Presumido)',
        via: 'IM / VO',
        preview: 'Penicilina Benzatina dose única vs 3 doses semanais + Co-infecções',
        text:
`SÍFILIS — PROTOCOLO DE TRATAMENTO

1. SÍFILIS RECENTE (Primária, Secundária ou Latente Recente):
   - Esquema de Escolha: Penicilina G Benzatina 2.400.000 UI IM dose única (Aplicar 1 ampola de 1.200.000 UI em cada glúteo).
   - Regime Alternativo (Alergia a Penicilinas): Doxiciclina 100 mg: Tomar 1 cp VO a cada 12 horas por 15 dias. (ATENCAO: Estritamente contraindicada para gestantes).

2. SÍFILIS TARDIA (Terciária, Latente Tardia ou Duração Ignorada):
   - Esquema de Escolha: Penicilina G Benzatina 2.400.000 UI IM a cada 7 dias, totalizando 3 aplicações (Dose total: 7.200.000 UI).
   - Regime Alternativo (Indisponibilidade): Penicilina G Procaína 600.000 UI: Aplicar 1 ampola IM diariamente por 17 a 21 dias.

3. TRATAMENTO PRESUMIDO DE PARCERIAS SEXUAIS:
   - Recomenda-se o tratamento empírico presumido de parceiros de pacientes diagnosticados com uma dose única de Penicilina G Benzatina 2.400.000 UI IM, mesmo na ausência de testes reagentes.
   - BIZU: Testar obrigatoriamente todos os pacientes diagnosticados com Sífilis para HIV, e vice-versa.`
      },
      es: {
        title: 'Sífilis (Reciente, Tardía y Tratamiento Presuntivo)',
        via: 'IM / VO',
        preview: 'Penicilina Benzatina dosis única vs 3 dosis semanales + Co-infecciones',
        text:
`SÍFILIS — PROTOCOLO DE TRATAMIENTO

1. SÍFILIS RECIENTE (Primaria, Secundaria o Latente Reciente):
   - Esquema de Elección: Penicilina G Benzatina 2.400.000 UI IM dosis única (Aplicar 1 ampolla de 1.200.000 UI en cada glúteo).
   - Régimen Alternativo (Alergia a Penicilinas): Doxiciclina 100 mg: 1 comp VO cada 12 horas por 15 días. (ATENCAO: Estrictamente contraindicada en embarazadas).

2. SÍFILIS TARDÍA (Terciaria, Latente Tardía o Duración Ignorada):
   - Esquema de Elección: Penicilina G Benzatina 2.400.000 UI IM cada 7 días, completando 3 aplicaciones (Dosis total: 7.200.000 UI).
   - Régimen Alternativo (Indisponibilidad): Penicilina G Procaína 600.000 UI: Aplicar 1 ampolla IM diariamente por 17 a 21 días.

3. TRATAMIENTO PRESUNTIVO DE PAREJAS SEXUALES:
   - Se recomienda el tratamiento empírico presuntivo de las parejas de pacientes diagnosticados con una dosis única de Penicilina G Benzatina 2.400.000 UI IM, incluso ante la ausencia de pruebas reactivas.
   - BIZU: Testear obligatoriamente a todos los pacientes diagnosticados con Sífilis para VIH, y viceversa.`
      }
    },

  /* ── BLOCO 9 — 11 protocolos (infecto/emerg) ── */

    {
      id: 'leptospirose-guia',
      specialty: 'infecto',
      icon: '',
      tags: ['Leptospirose', 'Doxiciclina', 'Penicilina', 'Enchente'],
      pt: {
        title: 'Leptospirose — Tratamento e Profilaxia',
        via: 'VO / IV / EV',
        preview: 'Caso leve (Doxiciclina) vs Caso grave (Penicilina/Ceftriaxona) + Profilaxia pós-exposição',
        text:
`LEPTOSPIROSE — DIRETRIZ CLÍNICA

1. CASOS LEVES (Manejo Ambulatorial / VO):
   - Doxiciclina 100 mg: Tomar 1 cp VO a cada 12 horas por 7 dias.
   - OU Amoxicilina 500 mg: Tomar 1 cp VO a cada 8 horas por 7 dias. (Pediátrico: 25 a 50 mg/kg/dia VO dividido a cada 8 horas por 7 dias).
   - Orientar repouso e hidratação oral vigorosa. Retornar se houver icterícia, tosse ou dispneia.

2. CASOS GRAVES (Manejo de Internação / IV):
   - Penicilina G Cristalina 1.500.000 U: Administrar 1 ampola IV a cada 6 horas por 7 dias. (Pediátrico: 250.000 a 400.000 U/kg/dia IV dividido em 4 a 6 doses por 7 dias).
   - OU Ceftriaxona 1 g: Administrar 2 g IV a cada 24 horas por 7 dias.
   - NOTA: Pacientes tratados com penicilina podem cursar com reação de Jarisch-Herxheimer nas primeiras 24 horas.

3. PROFILAXIA PÓS-EXPOSIÇÃO (Exposição de alto risco à água de enchente):
   - Doxiciclina 100 mg: Tomar 2 comprimidos (200 mg) VO em dose única. (Pediátrico: 4 mg/kg VO dose única, máx 200 mg). Manter semanalmente se a exposição for continuada (equipes de resgate).
   - OU Azitromicina 500 mg: Tomar 1 cp VO em dose única. (Pediátrico: 10 mg/kg VO dose única, máx 500 mg).`
      },
      es: {
        title: 'Leptospirosis — Tratamiento y Profilaxis',
        via: 'VO / IV / EV',
        preview: 'Caso leve (Doxiciclina) vs Caso grave (Penicilina/Ceftriaxona) + Profilaxis post-exposición',
        text:
`LEPTOSPIROSIS — DIRECTRIZ CLÍNICA

1. CASOS LEVES (Manejo Ambulatorio / VO):
   - Doxiciclina 100 mg: 1 comp VO cada 12 horas por 7 días.
   - O Amoxicilina 500 mg: 1 comp VO cada 8 horas por 7 días. (Pediátrico: 25 a 50 mg/kg/día VO dividido cada 8 horas por 7 días).
   - Orientar reposo e hidratación oral enérgica. Regresar si presenta ictericia, tos o disnea.

2. CASOS GRAVES (Manejo de Internación / IV):
   - Penicilina G Cristalina 1.500.000 U: Administrar 1 ampolla IV cada 6 horas por 7 días. (Pediátrico: 250.000 a 400.000 U/kg/día IV dividido en 4 a 6 dosis por 7 días).
   - O Ceftriaxona 1 g: Administrar 2 g IV cada 24 horas por 7 días.
   - NOTA: Los pacientes tratados con penicilina pueden experimentar una reacción de Jarisch-Herxheimer en las primeras 24 horas.

3. PROFILAXIS POST-EXPOSICIÓN (Exposición de alto riesgo a agua de inundación):
   - Doxiciclina 100 mg: 2 comprimidos (200 mg) VO en dosis única. (Pediátrico: 4 mg/kg VO dosis única, máx 200 mg). Mantener semanalmente si la exposición continúa (equipos de rescate).
   - O Azitromicina 500 mg: 1 comp VO en dosis única. (Pediátrico: 10 mg/kg VO dosis única, máx 500 mg).`
      }
    },

    {
      id: 'herpes-zoster-guia',
      specialty: 'emerg',
      icon: '',
      tags: ['Zóster', 'Herpes', 'Aciclovir', 'Tramadol'],
      pt: {
        title: 'Herpes Zóster — Protocolo de Analgesia e Antiviral',
        via: 'VO',
        preview: 'Aciclovir doses elevadas + Corticoide + Protocolo de analgesia escalonada',
        text:
`HERPES ZÓSTER

TRATAMENTO ANTIVIRAL E SISTÊMICO (Manter por 7 dias):
- Aciclovir 200 mg: Tomar 4 comprimidos juntos (800 mg por tomada) VO, 5 vezes ao dia, por 7 dias.
- Prednisona 20 mg: Tomar 2 comprimidos (40 mg) VO pela manhã por 5 dias.

MANEJO ESCALONADO DA DOR:
- Tramadol 50 mg: Tomar 1 cp VO a cada 8 horas por 5 dias.
- NOTA: Promover analgesia otimizada. Se houver refratariedade ou dor neuropática persistente, associar fármacos adjuvantes: Gabapentina a cada 8 horas, Pregabalina a cada 12 horas ou Amitriptilina à noite ao deitar.`
      },
      es: {
        title: 'Herpes Zóster — Protocolo de Analgesia y Antiviral',
        via: 'VO',
        preview: 'Aciclovir dosis elevadas + Corticoide + Protocolo de analgesia escalonada',
        text:
`HERPES ZÓSTER

TRATAMIENTO ANTIVIRAL Y SISTÉMICO (Mantener por 7 días):
- Aciclovir 200 mg: 4 comprimidos juntos (800 mg por toma) VO, 5 veces al día, por 7 días.
- Prednisona 20 mg: 2 comprimidos (40 mg) VO por la mañana por 5 días.

MANEJO ESCALONADO DEL DOLOR:
- Tramadol 50 mg: 1 comp VO cada 8 horas por 5 días.
- NOTA: Optimizar la analgesia. Si presenta refractariedad o dolor neuropático persistente, asociar fármacos coadyuvantes: Gabapentina cada 8 horas, Pregabalina cada 12 horas o Amitriptilina de noche al acostarse.`
      }
    },

    {
      id: 'tinea-corporis-ptiriase',
      specialty: 'emerg',
      icon: '',
      tags: ['Tinea', 'Micose', 'Miconazol', 'Terbinafina', 'Pitiríase'],
      pt: {
        title: 'Tinea Corporis e Pitiríase Versicolor',
        via: 'Tópico / VO',
        preview: 'Antifúngicos tópicos de escolha vs Tratamento oral para casos disseminados',
        text:
`TINEA CORPORIS E PITIRÍASE VERSICOLOR

TRATAMENTO TÓPICO LOCAL (Escolha 1 opção):
- Miconazol creme 2% OU Terbinafina creme 1% OU Clotrimazol creme OU Cetoconazol creme.
  - Aplicação: Aplicar na lesão afetada 2 a 3x ao dia por 2 semanas (ou manter por no mínimo 7 dias após o desaparecimento completo das lesões).

TRATAMENTO SISTÊMICO ORAL (Indicado em lesões disseminadas ou extensas):
- Terbinafina 250 mg: Tomar 1 cp VO uma vez ao dia por 2 a 6 semanas (ou manter por 7 dias após clareamento total).
  - Pediátrico (Apenas >= 4 anos conforme o peso): < 20 kg: 62,5 mg/dia | 20-40 kg: 125 mg/dia | > 40 kg: 250 mg/dia.
- OU Itraconazol 200 mg: Tomar 1 cp VO uma vez ao dia por 7 dias.`
      },
      es: {
        title: 'Tinea Corporis y Pitiriasis Versicolor',
        via: 'Tópico / VO',
        preview: 'Antifúngicos tópicos de elección vs Tratamiento oral para casos diseminados',
        text:
`TINEA CORPORIS Y PITIRIASIS VERSICOLOR

TRATAMIENTO TÓPICO LOCAL (Seleccionar 1 opción):
- Miconazol crema 2% O Terbinafina crema 1% O Clotrimazol crema O Cetoconazol crema.
  - Aplicación: Aplicar en la lesión afectada 2 a 3 veces al día por 2 semanas (o mantener por un mínimo de 7 días tras la desaparición completa de las lesiones).

TRATAMIENTO SISTÉMICO ORAL (Indicado en lesiones diseminadas o extensas):
- Terbinafina 250 mg: 1 comp VO una vez al día por 2 a 6 semanas (o mantener por 7 días tras la resolución total).
  - Pediátrico (Solo >= 4 años según el peso): < 20 kg: 62,5 mg/día | 20-40 kg: 125 mg/día | > 40 kg: 250 mg/día.
- O Itraconazol 200 mg: 1 comp VO una vez al día por 7 días.`
      }
    },

    {
      id: 'dermatite-atopica-guia',
      specialty: 'emerg',
      icon: '',
      tags: ['Atopia', 'Dermatite', 'Hidrocortisona'],
      pt: {
        title: 'Dermatite Atópica — Tratamento Tópico',
        via: 'Tópico',
        preview: 'Corticoide de baixa potência (Hidrocortisona) por 2 semanas',
        text:
`DERMATITE ATÓPICA

TRATAMENTO TÓPICO LOCAL:
- Hidrocortisona creme 2,5%:
  Aplicar uma fina camada sobre as lesões eczematosas/afetadas 2 vezes ao dia, por um período de 2 semanas.`
      },
      es: {
        title: 'Dermatitis Atópica — Tratamiento Tópico',
        via: 'Tópico',
        preview: 'Corticoide de baja potencia (Hidrocortisona) por 2 semanas',
        text:
`DERMATITIS ATÓPICA

TRATAMIENTO TÓPICO LOCAL:
- Hidrocortisona crema 2,5%:
  Aplicar una fina capa sobre las lesiones eczematosas/afectadas 2 veces al día, por un período de 2 semanas.`
      }
    },

    {
      id: 'intoxicacao-exogena-descontamina',
      specialty: 'emerg',
      icon: '',
      tags: ['Intoxicação', 'Carvão Ativado', 'Lavagem Gástrica', 'Antídotos'],
      pt: {
        title: 'Intoxicação Exógena — Descontaminação e Antídotos',
        via: 'VO / SNG / IV / BIC',
        preview: 'Protocolo de Lavagem/Carvão (<1h) + Manejo específico por agente tóxico',
        text:
`INTOXICAÇÃO EXÓGENA — PROTOCOLO DE DESCONTAMINAÇÃO E ANTÍDOTOS

1. DESCONTAMINAÇÃO GÁSTRICA (Apenas se tempo de ingestão < 1 hora):
   - Carvão Ativado Pó: 1 g/kg de peso diluído em 100-200 mL de água ou SF 0,9%. Administrar VO ou por SNG (vias aéreas protegidas).
   - Lavagem Gástrica: Posicionar em decúbito lateral esquerdo, infundir alíquotas de SF 0,9% (100 a 250 mL) por sonda e aspirar repetidamente até o retorno límpido.
   ATENCAO: CONTRAINDICAÇÕES ABSOLUTAS: Rebaixamento do nível de consciência sem IOT prévia, ingestão de substâncias cáusticas/hidrocarbonetos ou tóxicos não adsorvidos (Ferro, Lítio, Flúor, Álcool, Metanol, Cianeto).

2. ANTÍDOTOS ESPECÍFICOS POR SUBSTÂNCIA INGERIDA:
   - PARACETAMOL (N-Acetilcisteína IV — Eficácia otimizada nas primeiras 8h se > 7,5g ou hepatotoxicidade):
     - Ataque: 150 mg/kg IV infundido ao longo de 60 minutos.
     - Sequência 1: 50 mg/kg IV ao longo das 4 horas seguintes (12,5 mg/kg/h).
     - Sequência 2: 100 mg/kg IV ao longo das 16 horas subsequentes (6,25 mg/kg/h).
     - Opção VO: Ataque 140 mg/kg VO -> Manutenção 70 mg/kg VO a cada 4 horas por até 17 doses.
   - ORGANOFOSFORADOS / CARBAMATOS (Síndrome Colinérgica):
     - Atropina (0,5 mg/mL): Administrar 1 a 2 ampolas IV em bólus sucessivos a cada 3-5 min. Sem dose máxima. Alvo clínico: Atropinizar até secar a broncorreia e sialorreia.
   - COCAÍNA / ESTIMULANTES:
     - Midazolam: 3 mg IV direto a cada 5 min conforme agitação. OU Diazepam: Diluir 1 amp (10 mg) em 8 mL de AD; aplicar 5 mL (5 mg) IV a cada 5-10 min. (Evitar via IM - absorção errática).
   - OPIOIDES:
     - Naloxona (0,4 mg/mL): Administrar 1 ampola (0,4 mg) EV em bólus. Pode repetir em doses crescentes a cada 2-3 minutos até reversão da depressão respiratória (máx 15 mg).
   - BENZODIAZEPÍNICOS:
     - Flumazenil (0,5 mg/5 mL): Teste adulto 0,3 mg EV (máx acumulado 3 mg). Manutenção: 0,2 a 1 mg/h em BIC contínua.`
      },
      es: {
        title: 'Intoxicación Exógena — Descontaminación y Antídotos',
        via: 'VO / SNG / IV / BIC',
        preview: 'Protocolo de Lavado/Carbón (<1h) + Manejo específico por agente tóxico',
        text:
`INTOXICACIÓN EXÓGENA — PROTOCOLO DE DESCONTAMINACIÓN Y ANTÍDOTOS

1. DESCONTAMINACIÓN GÁSTRICA (Solo si el tiempo de ingesta es < 1 hora):
   - Carbón Activado Polvo: 1 g/kg de peso diluido en 100-200 mL de agua o SS 0,9%. Administrar VO o por SNG (vías aéreas protegidas).
   - Lavado Gástrico: Posicionar en decúbito lateral izquierdo, infundir alícuotas de SS 0,9% (100 a 250 mL) por sonda y aspirar repetidamente hasta el retorno límpido.
   ATENCAO: CONTRAINDICACIONES ABSOLUTAS: Alteración del nivel de conciencia sin IOT previa, ingesta de sustancias cáusticas/hidrocarburos o tóxicos no adsorbidos (Hierro, Litio, Flúor, Alcohol, Metanol, Cianuro).

2. ANTÍDOTOS ESPECÍFICOS POR SUSTANCIA INGERIDA:
   - PARACETAMOL (N-Acetilcisteína IV — Eficacia optimizada en las primeras 8h si es > 7,5g o hay hepatotoxicidad):
     - Carga: 150 mg/kg IV infundido a lo largo de 60 minutos.
     - Secuencia 1: 50 mg/kg IV a lo largo de las 4 horas siguientes (12,5 mg/kg/h).
     - Secuencia 2: 100 mg/kg IV a lo largo de las 16 horas subsiguientes (6,25 mg/kg/h).
     - Opción VO: Carga 140 mg/kg VO -> Mantenimiento 70 mg/kg VO cada 4 horas por hasta 17 dosis.
   - ORGANOFOSFORADOS / CARBAMATOS (Síndrome Colinérgico):
     - Atropina (0,5 mg/mL): Administrar 1 a 2 ampollas IV en bolos sucesivos cada 3-5 min. Sin dosis máxima. Meta clínica: Atropinizar hasta secar la broncorrea y sialorrea.
   - COCAÍNA / ESTIMULANTES:
     - Midazolam: 3 mg IV directo cada 5 min según agitación. O Diazepam: Diluir 1 amp (10 mg) en 8 mL de agua destilada; aplicar 5 mL (5 mg) IV cada 5-10 min. (Evitar vía IM - absorción errática).
   - OPIOIDES:
     - Naloxona (0,4 mg/mL): Administrar 1 ampolla (0,4 mg) EV en bolo. Puede repetir en dosis crecientes cada 2-3 minutos hasta la reversión de la depresión respiratoria (máx 15 mg).
   - BENZODIAZEPINAS:
     - Flumazenil (0,5 mg/5 mL): Test de adulto 0,3 mg EV (máx acumulado 3 mg). Mantenimiento: 0,2 a 1 mg/h en BIC continua.`
      }
    },

    {
      id: 'intoxicacao-abstinencia-alcoolica',
      specialty: 'emerg',
      icon: '',
      tags: ['Álcool', 'Intoxicação', 'Abstinência', 'Tiamina', 'Diazepam'],
      pt: {
        title: 'Intoxicação Alcoólica e Síndrome de Abstinência',
        via: 'VO / IV / IM',
        preview: 'Proteção metabólica (Tiamina + Glicose IV) + Controle de agitação escalonado',
        text:
`INTOXICAÇÃO AGUDA E SÍNDROME DE ABSTINÊNCIA ALCOÓLICA

PROTEÇÃO METABÓLICA IMEDIATA (Idêntica para ambos os quadros):
- Garantir dieta oral conforme nível de consciência.
- Soro Fisiológico 0,9%: Infundir 1 frasco de 500 mL EV imediatamente.
- Glicose Hipertônica 50%: Administrar 4 ampolas EV em bólus imediato (OU correr 1 frasco de Soro Glicosado 5% EV).
- Tiamina 100 mg: Administrar 1 ampola EV a cada 8 horas (ATENCAO: Prevenção estrita de Encefalopatia de Wernicke).

MANEJO DA AGITAÇÃO PSICOMOTORA / DELIRIUM TREMENS:
- Diazepam 5 mg/mL: Diluir 1 ampola (2 mL - 10 mg) em 8 mL de AD. Administrar 5 mL (5 mg) EV imediato.
- OU Midazolam: Administrar o equivalente a 2 mg IM imediato se agitação grave.
- OU Lorazepam 2 mg: Tomar 1 comprimido VO imediato (ATENCAO: Opção de escolha estrita se o paciente for hepatopata conhecido).

CENÁRIOS DE REFRATARIEDADE:
- Intoxicação/Abstinência Comum: Associar Haloperidol 5 mg/mL (1 ampola IM imediato).
- Abstinência Grave Refratária: Fenobarbital (Administrar 130 mg diluídos em 100 mL de SF 0,9% EV imediato) OU Propofol 1 mg/kg EV lento sem diluição para sedação assistida.`
      },
      es: {
        title: 'Intoxicación Alcohólica y Síndrome de Abstinencia',
        via: 'VO / IV / IM',
        preview: 'Protección metabólica (Tiamina + Glucosa IV) + Control de agitación escalonado',
        text:
`INTOXICACIÓN AGUDA Y SÍNDROME DE ABSTINENCIA ALCOHÓLICA

PROTECCIÓN METABÓLICA INMEDIATA (Idéntica para ambos cuadros):
- Garantizar dieta oral según nivel de conciencia.
- Solución Salina 0,9%: Infundir 1 frasco de 500 mL EV inmediatamente.
- Glucosa Hipertónica 50%: Administrar 4 ampollas EV en bolo inmediato (O pasar 1 frasco de Suero Glucosado 5% EV).
- Tiamina 100 mg: Administrar 1 ampolla EV cada 8 horas (ATENCAO: Prevención estricta de Encefalopatía de Wernicke).

MANEJO DE LA AGITACIÓN PSICOMOTORA / DELIRIUM TREMENS:
- Diazepam 5 mg/mL: Diluir 1 ampolla (2 mL - 10 mg) en 8 mL de agua destilada. Administrar 5 mL (5 mg) EV inmediato.
- O Midazolam: Administrar el equivalente a 2 mg IM inmediato si hay agitación grave.
- O Lorazepam 2 mg: 1 comp VO inmediato (ATENCAO: Opción de elección estricta si el paciente es hepatópata conocido).

ESCENARIOS DE REFRACTARIEDAD:
- Intoxicación/Abstinencia Común: Asociar Haloperidol 5 mg/mL (1 ampolla IM inmediato).
- Abstinencia Grave Refractaria: Fenobarbital (Administrar 130 mg diluidos en 100 mL de SS 0,9% EV inmediato) O Propofol 1 mg/kg EV lento sin dilución para sedación asistida.`
      }
    },

    {
      id: 'mordedura-trauma-atb',
      specialty: 'emerg',
      icon: '',
      tags: ['Mordedura', 'Trauma', 'Ceftriaxona', 'Metronidazol', 'Raiva'],
      pt: {
        title: 'Mordedura e Infecções por Causas Externas',
        via: 'VO / IV / EV',
        preview: 'Analgesia IV + Expansão + Cobertura antibiótica direcionada + Antitetânica/Antirrábica',
        text:
`MORDEDURA E INFECÇÕES POR CAUSAS EXTERNAS

ANALGESIA E EXPANSÃO NA UNIDADE:
- Dipirona Sódica: Administrar 2 g EV em bólus lento.
- Ibuprofeno: Administrar 400 mg EV de 6/6h ou 8/8h.
- Solução de Manutenção: SF 0,9% (30 a 40 mL/kg) + Glicose Hipertônica 50% 200 mL distribuídos nos frascos para correr EV em 24h.

ANTIBIOTICOTERAPIA EMPÍRICA DIRECIONADA:
- Opções de Uso Parenteral / EV (Manter por 7 a 14 dias):
  - Ampicilina + Sulbactam 1,5 g: Administrar 3 g EV a cada 6 horas (Monoterapia, dispensando coberturas extras).
  - Amoxicilina + Clavulanato 1 g: Administrar 1 g EV a cada 8 horas.
  - Esquema Combinado: Ceftriaxona 1 g EV a cada 12 horas + Metronidazol 500 mg EV a cada 8 horas.
- Opções de Uso Oral / Alta Ambulatorial (Manter por 14 dias):
  - Amoxicilina + Clavulanato 875/125 mg: Tomar 1 cp VO a cada 12 horas.
  - OU Ciprofloxacino 500 mg VO de 12/12h + Metronidazol 250 mg (Tomar 2 cp - 500 mg total) VO a cada 8 horas.

ATENCAO: CONDUTA DE SEGURANÇA: Avaliar obrigatoriamente a necessidade de profilaxia antitetânica conforme calendário vacinal e profilaxia antirrábica de acordo com o animal agressor.`
      },
      es: {
        title: 'Mordedura e Infecciones por Causas Externas',
        via: 'VO / IV / EV',
        preview: 'Analgesia IV + Expansión + Cobertura antibiótica dirigida + Antitetánica/Antirrábica',
        text:
`MORDEDURA E INFECCIONES POR CAUSAS EXTERNAS

ANALGESIA Y EXPANSIÓN EN LA UNIDAD:
- Dipirona Sódica: Administrar 2 g EV en bolo lento.
- Ibuprofeno: Administrar 400 mg EV cada 6h u 8h.
- Solución de Mantenimiento: SS 0,9% (30 a 40 mL/kg) + Glucosa Hipertonica 50% 200 mL distribuidos en los frascos para pasar EV en 24h.

ANTIBIOTICOTERAPIA EMPÍRICA DIRIGIDA:
- Opciones de Uso Parenteral / EV (Mantener por 7 a 14 días):
  - Ampicilina + Sulbactam 1,5 g: Administrar 3 g EV cada 6 horas (Monoterapia, no requiere asociaciones).
  - Amoxicilina + Clavulanato 1 g: Administrar 1 g EV cada 8 horas.
  - Esquema Combinado: Ceftriaxona 1 g EV cada 12 horas + Metronidazol 500 mg EV cada 8 horas.
- Opciones de Uso Oral / Alta Ambulatoria (Mantener por 14 días):
  - Amoxicilina + Clavulanato 875/125 mg: 1 comp VO cada 12 horas.
  - O Ciprofloxacino 500 mg VO cada 12h + Metronidazol 250 mg (Tomar 2 comp - 500 mg total) VO cada 8 horas.

ATENCAO: CONDUCTA DE SEGURIDAD: Evaluar obligatoriamente la necesidad de profilaxis antitetánica según el calendario de vacunación y profilaxis antirrábica de acuerdo con el animal agresor.`
      }
    },

    {
      id: 'acidente-ofidico-botropico-laquetico',
      specialty: 'emerg',
      icon: '',
      tags: ['Ofidismo', 'Botrópico', 'Laquético', 'Jararaca', 'Surucucu'],
      pt: {
        title: 'Acidente Ofídico — Botrópico e Laquético',
        via: 'EV / VO',
        preview: 'Soroterapia específica (SAB / SABL) baseada na gravidade + Hidratação vigorosa',
        text:
`ACIDENTE OFÍDICO — BOTRÓPICO E LAQUÉTICO

1. ACIDENTE BOTRÓPICO (Jararaca, Urutu-Cruzeiro):
   - Soro Antibotrópico (SAB) — Doses por Gravidade (Diluir em SF 0,9% ou SG 5% na razão 1:4 e infundir em 20 a 60 min, velocidade 8 a 12 mL/min):
     - Leve (Edema em 1 segmento): 4 ampolas EV.
     - Moderado (Edema em 2 segmentos): 8 ampolas EV.
     - Grave (Edema em 3 ou mais segmentos ou sangramento ativo): 12 ampolas EV.
   - Analgesia e Suporte: Tramadol 50 a 100 mg EV se dor forte. Hidratação vigorosa (SF 0,9% 20 mL/kg) em casos moderados a graves.
   - Antibioticoterapia: Apenas se houver infecção bacteriana secundária clara (pus, febre) após 48h. Usar Amoxicilina + Clavulanato 500 mg VO a cada 8 horas.
   ATENCAO: SUSPEITA DE LESÃO RENAL AGUDA: Monitorar se diurese < 300 mL em 3 horas ou aumento de 0,2 mg/dL na creatinina basal.

2. ACIDENTE LAQUÉTICO (Surucucu-pico-de-jaca):
   - Soro Antibotrópico-Laquético (SABL) — Doses por Gravidade (Diluir em SF 0,9% ou SG 5% na razão 1:4 e infundir a 8 a 12 mL/min com cautela em cardiopatas):
     - Moderado (Dor local, edema progressivo, diarreia, sudorese, coagulopatia leve): 10 ampolas IV.
     - Grave (Choque hemodinâmico, sangramentos ativos gengival ou gastrointestinal, necrose rápida): 20 ampolas IV.

ATENCAO: ADVERTÊNCIA: Nunca utilizar torniquete, gelo ou realizar incisões no local da picada.`
      },
      es: {
        title: 'Accidente Ofídico — Botrópico y Laquético',
        via: 'EV / VO',
        preview: 'Sueroterapia específica (SAB / SABL) según gravedad + Hidratación enérgica',
        text:
`ACCIDENTE OFÍDICO — BOTRÓPICO Y LAQUÉTICO

1. ACCIDENTE BOTRÓPICO (Yarará, Urutu):
   - Suero Antibotrópico (SAB) — Dosis según Gravedad (Diluir en SS 0,9% o SG 5% en relación 1:4 e infundir en 20 a 60 min, velocidad 8 a 12 mL/min):
     - Leve (Edema en 1 segmento): 4 ampollas EV.
     - Moderado (Edema en 2 segmentos): 8 ampollas EV.
     - Grave (Edema en 3 o más segmentos o sangrado activo): 12 ampollas EV.
   - Analgesia y Soporte: Tramadol 50 a 100 mg EV si presenta dolor fuerte. Hidratación enérgica (SS 0,9% 20 mL/kg) en casos moderados a graves.
   - Antibioticoterapia: Solo si hay infección bacteriana secundaria evidente (pus, fiebre) tras 48h. Utilizar Amoxicilina + Clavulanato 500 mg VO cada 8 horas.
   ATENCAO: SOSPECHA DE LESIÓN RENAL AGUDA: Monitorear si la diuresis es < 300 mL en 3 horas o si hay un aumento de 0,2 mg/dL en la creatinina basal.

2. ACCIDENTE LAQUÉTICO (Surucucú):
   - Suero Antibotrópico-Laquético (SABL) — Dosis según Gravedad (Diluir en SS 0,9% o SG 5% en relación 1:4 e infundir a 8 a 12 mL/min con precaución en cardiopatías):
     - Moderado (Dolor local, edema progresivo, diarrea, sudoración, coagulopatía leve): 10 ampollas IV.
     - Grave (Shock hemodinámico, sangrados activos gingival o gastrointestinal, necrosis rápida): 20 ampollas IV.

ATENCAO: ADVERTENCIA: Nunca utilizar torniquete, hielo o realizar incisiones en el sitio de la picadura.`
      }
    },

    {
      id: 'acidente-ofidico-crotalico-elapidico',
      specialty: 'emerg',
      icon: '',
      tags: ['Ofidismo', 'Crotálico', 'Elapídico', 'Cascavel', 'Coral'],
      pt: {
        title: 'Acidente Ofídico — Crotálico e Elapídico',
        via: 'EV',
        preview: 'Prevenção de NTA pós-cascavel (SAC) e suporte ventilatório na coral (SAE)',
        text:
`ACIDENTE OFÍDICO — CROTÁLICO E ELAPÍDICO

1. ACIDENTE CROTÁLICO (Cascavel):
   - Pré-hidratação obrigatória e vigorosa (SF 0,9% 10 a 20 mL/kg) para prevenir necrose tubular aguda (NTA). Meta de diurese: 30-40 mL/h em adultos.
   - Soro Anticrotálico (SAC) — Doses por Gravidade (Diluir na razão 1:4 com SF 0,9%, administrar em 20 a 60 min, velocidade de 8 a 12 mL/min):
     - Leve (Dor muscular discreta ou ausente, sem ptose, urina de cor normal): 5 ampolas EV.
     - Moderado (Ptose palpebral discreta, dor muscular moderada, urina levemente escura): 10 ampolas EV.
     - Grave (Ptose evidente, visão turva, dor muscular intensa, urina escura/mioglobinúria, oligúria): 20 ampolas EV.

2. ACIDENTE ELAPÍDICO (Coral Verdadeira):
   - Alto risco de insuficiência respiratória por paralisia neuromuscular progressiva.
   - Soro Antielapídico (SAE): Administrar 150 mg (10 frascos) EV em dose única.
     * Preparo: Diluir os 10 frascos (100 mL) em 400 mL de SF 0,9% (razão 1:4). Infundir em 20 a 60 min (velocidade: 8 a 12 mL/min). Administrar com cautela em cardiopatas.
   - Esquema Alternativo (SAE Indisponível): Soro Antibotrópico-Laquético: 10 ampolas (50 mL) EV diluídas em 200 mL de SF 0,9% sob as mesmas condições de infusão.
   - Sinais de Gravidade: Ptose palpebral, disfagia, sialorreia excessiva, dispneia e paralisia progressiva.`
      },
      es: {
        title: 'Accidente Ofídico — Crotálico y Elapídico',
        via: 'EV',
        preview: 'Prevención de NTA post-cascabel (SAC) y soporte ventilatorio en coral (SAE)',
        text:
`ACCIDENTE OFÍDICO — CROTÁLICO Y ELAPÍDICO

1. ACCIDENTE CROTÁLICO (Cascabel):
   - Prehidratación obligatoria y enérgica (SS 0,9% 10 a 20 mL/kg) para prevenir necrosis tubular aguda (NTA). Meta de diuresis: 30-40 mL/h en adultos.
   - Suero Anticrotálico (SAC) — Dosis según Gravedad (Diluir en relación 1:4 con SS 0,9%, administrar en 20 a 60 min, velocidad de 8 a 12 mL/min):
     - Leve (Dolor muscular discreto o ausente, sin ptosis, orina de color normal): 5 ampollas EV.
     - Moderado (Ptosis palpebral discreta, dolor muscular moderado, orina levemente oscura): 10 ampollas EV.
     - Grave (Ptosis evidente, visión borrosa, dolor muscular intenso, orina oscura/mioglobinuria, oliguria): 20 ampollas EV.

2. ACCIDENTE ELAPÍDICO (Coral Verdadera):
   - Alto riesgo de insuficiencia respiratoria por parálisis neuromuscular progresiva.
   - Suero Antielapídico (SAE): Administrar 150 mg (10 frascos) EV en dosis única.
     * Preparación: Diluir los 10 frascos (100 mL) en 400 mL de SS 0,9% (relación 1:4). Infundir en 20 a 60 min (velocidad: 8 a 12 mL/min). Administrar con precaución en cardiopatías.
   - Esquema Alternativo (SAE No Disponible): Suero Antibotrópico-Laquético: 10 ampollas (50 mL) EV diluidas en 200 mL de SS 0,9% bajo las mismas condiciones de infusión.
   - Signos de Gravedad: Ptosis palpebral, disfagia, sialorrea excesiva, disnea y parálisis progresiva.`
      }
    },

    {
      id: 'escorpionismo-manejo-critico',
      specialty: 'emerg',
      icon: '',
      tags: ['Escorpionismo', 'Picada', 'Soro', 'Antiescorpiônico', 'Suero'],
      pt: {
        title: 'Escorpionismo — Protocolo de Soroterapia',
        via: 'EV / Local',
        preview: 'Manejo sintomático e tempo de observação vs Indicação de soro específico',
        text:
`ESCORPIONISMO — PROTOCOLO DE ATENDIMENTO

CLASSIFICAÇÃO CLÍNICA E CONDUTA:

- Quadro Leve (Dor e parestesia local isoladas):
  - Manejo puramente sintomático com analgésicos. Considerar bloqueio anestésico local se a dor for intensa.
  - Tempo de Observação Obrigatório: Manter paciente adulto em observação por 2 a 3 horas. Se paciente pediátrico (criança), manter sob monitorização rigorosa de sinais vitais por 6 a 12 horas.

- Quadro Moderado (Dor local intensa associada a náuseas, vômitos, sudorese, sialorreia discretos, agitação, taquipneia ou taquicardia):
  - Soro Antiescorpiônico (SAEsc) ou Antiaracnídico (SAA): Administrar 2 a 3 ampolas EV, infundidas entre 20 e 60 minutos.

- Quadro Grave (Manifestações moderadas associadas a vômitos profusos/incoercíveis, sudorese/sialorreia intensas, prostração, convulsão, coma, bradicardia, insuficiência cardíaca, edema pulmonar agudo ou choque):
  - Soro Antiescorpiônico (SAEsc) ou Antiaracnídico (SAA): Administrar 4 a 6 ampolas EV, infundidas entre 20 e 60 minutos.`
      },
      es: {
        title: 'Escorpionismo — Protocolo de Sueroterapia',
        via: 'EV / Local',
        preview: 'Manejo sintomático y tiempo de observación vs Indicación de suero específico',
        text:
`ESCORPIONISMO — PROTOCOLO DE ATENCIÓN

CLASIFICACIÓN CLÍNICA Y CONDUCTA:

- Cuadro Leve (Dolor y parestesia local aislados):
  - Manejo puramente sintomático con analgésicos. Considerar bloqueo anestésico local si el dolor es intenso.
  - Tiempo de Observación Obligatorio: Mantener al paciente adulto en observación por 2 a 3 horas. Si es un paciente pediátrico (niño), mantener bajo monitoreo riguroso de signos vitales por 6 a 12 horas.

- Cuadro Moderado (Dolor local intenso asociado a náuseas, vómitos, sudoración, sialorrea discretos, agitación, taquipnea o taquicardia):
  - Suero Antiescorpiónico (SAEsc) o Antiarácnido (SAA): Administrar 2 a 3 ampollas EV, infundidas entre 20 y 60 minutos.

- Cuadro Grave (Manifestaciones moderadas asociadas a vómitos profusos/incoercibles, sudoración/sialorrea intensas, postración, convulsión, coma, bradicardia, insuficiencia cardíaca, edema pulmonar agudo o shock):
  - Suero Antiescorpiónico (SAEsc) o Antiarácnido (SAA): Administrar 4 a 6 ampollas EV, infundidas entre 20 y 60 minutos.`
      }
    },

    {
      id: 'araneismo-lodoxocelismo-latrodectismo',
      specialty: 'emerg',
      icon: '',
      tags: ['Araneísmo', 'Aranha', 'Soro', 'Prednisona', 'Lidocaína'],
      pt: {
        title: 'Araneísmo — Armadeira, Marrom e Viúva-Negra',
        via: 'EV / IM / VO',
        preview: 'Bloqueio local (Armadeira), Corticoide (Marrom) e Soroterapia específica',
        text:
`ARANEÍSMO — MANEJO DE ACIDENTES POR ARANHAS

1. ARANHA-ARMADEIRA E ARANHA-MARROM (Soro Antiaracnídico EV em 20-30 min):
   - Forma Leve:
     - Marrom: Apenas observação clínica + manejo sintomático.
     - Armadeira: Analgesia + Bloqueio local com infiltração de Lidocaína 2% sem vasoconstritor (1 a 2 mL em crianças; 3 a 4 mL em adultos).
   - Forma Moderada:
     - Marrom (Placa marmórea < 3 cm, febre, mialgia, sem hemólise): 5 ampolas EV + Prednisona 40 mg/dia VO por 5 dias.
     - Armadeira (Dor, taquicardia, hipertensão, vômitos ocasionais): 2 a 4 ampolas EV.
   - Forma Grave:
     - Marrom (Necrose local evidente ou hemólise sistêmica com icterícia e urina escura): 10 ampolas EV.
     - Armadeira (Sinais colinérgicos graves, priapismo, choque): 5 a 10 ampolas EV.

2. ARANHA VIÚVA-NEGRA (Latrodectismo):
   - Uso de Soro Antilatrodectus (SALat) via IM EXCLUSIVA (1 ampola = 1 unidade terapêutica).
   - Forma Moderada: Aplicar 1 ampola (2,5 mL) IM profunda no quadríceps ou região glútea.
   - Forma Grave (Taquicardia, bradicardia, hipertensão, dispneia, vômitos incoercíveis, priapismo, retenção urinária): Aplicar 2 ampolas (5 mL total) IM, divididas em dois locais anatômicos distintos (ex: 1 ampola em cada glúteo).`
      },
      es: {
        title: 'Araneísmo — Bananera, Marrón y Viuda Negra',
        via: 'EV / IM / VO',
        preview: 'Bloqueo local (Bananera), Corticoide (Marrón) y Sueroterapia específica',
        text:
`ARANEÍSMO — MANEJO DE ACCIDENTES POR ARAÑAS

1. ARAÑA BANANERA Y ARAÑA MARRÓN (Suero Antiarácnido EV en 20-30 min):
   - Forma Leve:
     - Marrón: Solo observación clínica + manejo sintomático.
     - Bananera: Analgesia + Bloqueo local con infiltración de Lidocaína 2% sin vasoconstrictor (1 a 2 mL en niños; 3 a 4 mL en adultos).
   - Forma Moderada:
     - Marrón (Placa marmórea < 3 cm, fiebre, mialgia, sin hemólisis): 5 ampollas EV + Prednisona 40 mg/día VO por 5 días.
     - Bananera (Dolor, taquicardia, hipertensión, vómitos ocasionales): 2 a 4 ampollas EV.
   - Forma Grave:
     - Marrón (Necrosis local evidente o hemólisis sistémica con ictericia y orina oscura): 10 ampollas EV.
     - Bananera (Signos colinérgicos graves, priapismo, shock): 5 a 10 ampollas EV.

2. ARAÑA VIUDA NEGRA (Latrodectismo):
   - Uso de Suero Antilatrodectus (SALat) vía IM EXCLUSIVA (1 ampolla = 1 unidad terapéutica).
   - Forma Moderada: Aplicar 1 ampolla (2,5 mL) IM profunda en el cuádriceps o región glútea.
   - Forma Grave (Taquicardia, bradicardia, hipertensión, disnea, vómitos incoercibles, priapismo, retención urinaria): Aplicar 2 ampollas (5 mL total) IM, divididas en dos sitios anatómicos distintos (ej: 1 ampolla en cada glúteo).`
      }
    }

  ]; /* ── fim do array _rx ── */

  /* Merge seguro: evita duplicatas por id */
  _rx.forEach(function(proto) {
    const jaExiste = window.PRESCRICOES_DB.some(function(p) { return p.id === proto.id; });
    if (!jaExiste) window.PRESCRICOES_DB.push(proto);
  });

})(); /* fim da IIFE do módulo prescricoes */
