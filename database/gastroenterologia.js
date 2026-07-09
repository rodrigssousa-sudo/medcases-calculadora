(function () {
  'use strict';
  if (typeof window.GASTROENTEROLOGIA_DRUGS_DB !== 'object' || Array.isArray(window.GASTROENTEROLOGIA_DRUGS_DB)) {
    window.GASTROENTEROLOGIA_DRUGS_DB = {};
  }
  Object.assign(window.GASTROENTEROLOGIA_DRUGS_DB, {

    /* ── BUILD 403 — Regulação Gástrica ── */

    /* ── TRIMEBUTINA ────────────────────────────────────────────────────── */
    "trimebutina": {
      id: 'trimebutina',
      name: { pt: 'Trimebutina', es: 'Trimebutina' },
      category: 'gastroenterologia',
      class: { pt: 'Modulador da Motilidade Intestinal (Agonista Encefalinérgico)', es: 'Modulador de la Motilidad Intestinal (Agonista Encefalinérgico)' },
      indications: {
        pt: ['Síndrome do Intestino Irritável (IBS)', 'Espasmos e cólicas gastrointestinais', 'Transtornos do trânsito biliar'],
        es: ['Síndrome del Intestino Irritable (SII)', 'Espasmos y cólicos gastrointestinales', 'Trastornos del tránsito biliar']
      },
      commercialNames: { br: ['Digedrat', 'Trimeb'], ar: ['Miopropan', 'Muvett'] },
      presentation: { pt: ['Comprimidos 200 mg', 'Suspensão oral', 'Cápsulas de liberação prolongada 300 mg'], es: ['Comprimidos 200 mg', 'Suspensión oral', 'Cápsulas de liberación prolongada 300 mg'] },
      mechanism: {
        pt: 'Um "Regulador Inteligente". Diferente dos antiespasmódicos puros que apenas paralisam o intestino, a Trimebutina atua nos receptores opioides periféricos (Mu, Kappa e Delta) da parede intestinal. Se o intestino está acelerado (diarreia/cólica), ela freia. Se o intestino está paralisado (constipação), ela estimula. Ela "afina os instrumentos" do trato digestivo devolvendo o ritmo normal.',
        es: 'Un "Regulador Inteligente". A diferencia de los antiespasmódicos que solo paralizan el intestino, la Trimebutina actúa en los receptores opioides periféricos (Mu, Kappa y Delta). Si el intestino está acelerado, frena. Si está paralizado, estimula. "Afina" el tracto digestivo devolviendo el ritmo.'
      },
      dose: {
        adult: { pt: '200 mg via oral, 2 a 3 vezes ao dia (geralmente antes das refeições).', es: '200 mg vía oral, 2 a 3 veces al día (generalmente antes de las comidas).' },
        pediatric: { pt: 'Uso pediátrico sob supervisão (Suspensão): 4,8 mg/kg/dia divididos em 3 doses.', es: 'Uso pediátrico bajo supervisión (Suspensión): 4,8 mg/kg/día divididos en 3 dosis.' }
      },
      administration: { pt: ['Tomar preferencialmente 20 a 30 minutos ANTES das principais refeições para preparar o intestino.'], es: ['Tomar preferentemente 20 a 30 minutos ANTES de las principales comidas para preparar el intestino.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste estrito.', es: 'Sin necesidad de ajuste estricto.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Metabolismo de primeira passagem, mas seguro em hepatopatias leves a moderadas.', es: 'Metabolismo de primera pasada, pero seguro en hepatopatías leves a moderadas.' } },
      commonAdverseEffects: { pt: ['Boca seca leve', 'Sonolência ou fadiga passageira (em até 3% dos pacientes)', 'Gosto amargo'], es: ['Boca seca leve', 'Somnolencia o fatiga pasajera (en hasta 3%)', 'Sabor amargo'] },
      dangerousAdverseEffects: { pt: ['Síncope vasovagal (raríssimo)'], es: ['Síncope vasovagal (rarísimo)'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade à trimebutina'], es: ['Hipersensibilidad a la trimebutina'] },
        relative: { pt: ['Gravidez (Primeiro Trimestre) por falta de estudos de segurança absoluta'], es: ['Embarazo (Primer Trimestre) por falta de estudios de seguridad'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O TOQUE NA PELE: Muitas vezes o paciente acha que a trimebutina não funciona, mas o efeito de reparo na Síndrome do Intestino Irritável leva de 2 a 4 semanas para alterar a hipersensibilidade visceral (a "dor fantasma" na barriga).', es: 'EL EFECTO A LARGO PLAZO: A menudo el paciente cree que no funciona, pero el efecto de reparación en el SII lleva de 2 a 4 semanas para alterar la hipersensibilidad visceral (el "dolor fantasma").' }
      }
    },

    /* ── SIMETICONA ─────────────────────────────────────────────────────── */
    "simeticona": {
      id: 'simeticona',
      name: { pt: 'Simeticona (Dimeticona)', es: 'Simeticona (Dimeticona)' },
      category: 'gastroenterologia',
      class: { pt: 'Antiflatulento (Agente Antiespumante)', es: 'Antiflatulento (Agente Antiespumante)' },
      indications: {
        pt: ['Alívio sintomático do excesso de gases no trato gastrointestinal (Meteorismo, flatulência)', 'Preparo intestinal para Endoscopia, Colonoscopia ou Ultrassom Abdominal'],
        es: ['Alivio sintomático del exceso de gases en el tracto gastrointestinal (Meteorismo, flatulencia)', 'Preparación intestinal para Endoscopia, Colonoscopia o Ecografía Abdominal']
      },
      commercialNames: { br: ['Luftal', 'Flagass'], ar: ['Mylanta Gas', 'Factor AG'] },
      presentation: { pt: ['Comprimidos 40 mg, Cápsulas gelatinosas 125 mg, Gotas 75 mg/mL'], es: ['Comprimidos 40 mg, Cápsulas gelatinosas 125 mg, Gotas 75 mg/mL'] },
      mechanism: {
        pt: 'Pura física, zero biologia. A Simeticona é um silicone inerte que NÃO É ABSORVIDO pelo corpo. Ela age alterando a "tensão superficial" das pequenas bolhas de ar presas no muco do estômago e intestino. Ao romper a tensão, as bolhas pequenas se unem (coalescem) formando bolhas gigantes, que são facilmente arrotadas ou eliminadas como flatos, desinchando a barriga.',
        es: 'Física pura, cero biología. Es un silicón inerte que NO ES ABSORBIDO. Altera la "tensión superficial" de las pequeñas burbujas de aire atrapadas en el moco. Las burbujas pequeñas se unen formando burbujas gigantes, que son fácilmente eructadas o expulsadas, desinflando la barriga.'
      },
      dose: {
        adult: { pt: '40 a 125 mg via oral, 3 a 4 vezes ao dia (após as refeições e ao deitar). Máximo 500 mg/dia.', es: '40 a 125 mg vía oral, 3 a 4 veces al día (tras las comidas y al acostarse). Máximo 500 mg/día.' },
        pediatric: { pt: 'Bebês (Cólica gasosa): 3 a 5 gotas (dependendo da concentração) misturadas no leite ou direto na boca, 3 a 4x/dia.', es: 'Bebés (Cólico de gases): 3 a 5 gotas mezcladas en la leche o directo en la boca, 3 a 4x/día.' }
      },
      administration: { pt: ['Tomar APÓS as refeições. As cápsulas gelatinosas (125mg) costumam ter efeito mais rápido.'], es: ['Tomar TRAS las comidas. Las cápsulas gelatinosas (125mg) suelen tener efecto más rápido.'] },
      renalAdjustment: { required: false, message: { pt: 'Não há absorção sistêmica. Sai intacta nas fezes.', es: 'No hay absorción sistémica. Sale intacta en heces.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Não passa pelo fígado.', es: 'No pasa por el hígado.' } },
      commonAdverseEffects: { pt: ['Basicamente nenhum efeito colateral sistêmico. Pode amolecer levemente as fezes.'], es: ['Básicamente ningún efecto colateral sistémico. Puede ablandar levemente las heces.'] },
      dangerousAdverseEffects: { pt: ['Hipersensibilidade extrema aos excipientes (corantes das cápsulas)'], es: ['Hipersensibilidad extrema a los excipientes (colorantes de las cápsulas)'] },
      contraindications: {
        absolute: { pt: ['Perfuração ou obstrução intestinal mecânica ativa'], es: ['Perforación u obstrucción intestinal mecánica activa'] },
        relative: { pt: ['Nenhuma relevante clinicamente.'], es: ['Ninguna relevante clínicamente.'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O REMÉDIO DO ULTRASSOM: A Simeticona é essencial antes do ultrassom de abdome. O som do ultrassom não atravessa o ar. Se o intestino estiver cheio de espuma e gases, o médico não consegue ver a vesícula ou o pâncreas ("Borrado por interposição gasosa").', es: 'EL REMEDIO DE LA ECOGRAFÍA: La Simeticona es esencial antes de la ecografía abdominal. El sonido no atraviesa el aire. Si el intestino está lleno de espuma, el médico no logra ver la vesícula o el páncreas.' }
      }
    },

    /* ── PROCLORPERAZINA ────────────────────────────────────────────────── */
    "proclorperazina": {
      id: 'proclorperazina',
      name: { pt: 'Proclorperazina', es: 'Proclorperazina' },
      category: 'gastroenterologia',
      class: { pt: 'Antiemético e Antipsicótico Típico (Fenotiazínico)', es: 'Antiemético y Antipsicótico Típico (Fenotiazínico)' },
      indications: {
        pt: ['Náuseas e vômitos severos (Pós-operatório, Câncer ou Vertigem intensa)', 'Tratamento agudo de Enxaqueca no Pronto-Socorro', 'Esquizofrenia e mania aguda'],
        es: ['Náuseas y vómitos severos (Posoperatorio, Cáncer o Vértigo intenso)', 'Tratamiento agudo de Migraña en Urgencias', 'Esquizofrenia y manía aguda']
      },
      commercialNames: { br: ['Compazine (EUA/Importado)', 'Stemetil (Descontinuado em várias regiões, mas classe vital)'], ar: ['Stemetil'] },
      presentation: { pt: ['Comprimidos 5 mg e 10 mg', 'Ampolas IV/IM 5 mg/mL', 'Supositórios 25 mg'], es: ['Comprimidos 5 mg y 10 mg', 'Ampollas IV/IM 5 mg/mL', 'Supositorios 25 mg'] },
      mechanism: {
        pt: 'Drogas fenotiazínicas bloqueiam potentemente os receptores D2 (Dopamina) diretamente na Zona de Gatilho Quimiorreceptora no cérebro (o centro do vômito). Ao travar a dopamina, o paciente para de vomitar imediatamente. Na emergência, atua desinflamando a cascata da enxaqueca grave, muitas vezes curando a dor quando os analgésicos falham.',
        es: 'Bloquea potentemente los receptores D2 (Dopamina) directamente en la Zona Gatillo Quimiorreceptora en el cerebro (el centro del vómito). Al frenar la dopamina, el paciente deja de vomitar de inmediato. En urgencias, cura el dolor de migraña grave cuando fallan los analgésicos.'
      },
      dose: {
        adult: { pt: 'Náusea: 5 a 10 mg via oral a cada 6-8 horas. Emergência/Enxaqueca: 10 mg Intramuscular profundo (ou IV muito lento).', es: 'Náusea: 5 a 10 mg vía oral cada 6-8 horas. Emergencia/Migraña: 10 mg Intramuscular profundo (o IV muy lento).' },
        pediatric: { pt: 'Geralmente contraindicado em crianças < 2 anos ou < 9 kg (risco letal de depressão respiratória e distonia).', es: 'Generalmente contraindicado en niños < 2 años o < 9 kg (riesgo letal de depresión respiratoria y distonía).' }
      },
      administration: { pt: ['A via Intravenosa requer diluição e administração extremamente lenta devido ao risco de hipotensão severa e colapso cardíaco.'], es: ['La vía Intravenosa requiere dilución y administración extremadamente lenta debido al riesgo de hipotensión severa y colapso cardíaco.'] },
      renalAdjustment: { required: false, message: { pt: 'Não há ajuste formal, mas monitorar metabólitos.', es: 'No hay ajuste formal, pero monitorizar metabolitos.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Metabolismo hepático extenso. Contraindicado em falência hepática grave (Risco de coma hepático).', es: 'Metabolismo hepático extenso. Contraindicado en falla hepática grave (Riesgo de coma hepático).' } },
      commonAdverseEffects: { pt: ['Sonolência pesada e letargia', 'Acatisia (Incapacidade angustiante de ficar parado - o paciente "pula" da maca do PS)', 'Boca seca e visão turva (efeito anticolinérgico)'], es: ['Somnolencia pesada y letargo', 'Acatisia (Incapacidad angustiante de quedarse quieto)', 'Boca seca y visión borrosa (efecto anticolinérgico)'] },
      dangerousAdverseEffects: { pt: ['Reação Distônica Aguda (O pescoço "trava" olhando pra cima e a língua enrola)', 'Síndrome Neuroléptica Maligna (Febre de 41ºC, rigidez de cano de chumbo, morte)', 'Agranulocitose e Prolongamento QT'], es: ['Reacción Distónica Aguda (El cuello "se traba" y la lengua se enrolla)', 'Síndrome Neuroléptico Maligno (Fiebre de 41ºC, rigidez extrema, muerte)', 'Agranulocitosis y Prolongación QT'] },
      contraindications: {
        absolute: { pt: ['Depressão grave do Sistema Nervoso ou Coma', 'Crianças < 2 anos', 'Doença de Parkinson (Piora o tremor brutalmente)'], es: ['Depresión grave del Sistema Nervioso o Coma', 'Niños < 2 años', 'Enfermedad de Parkinson (Empeora el temblor brutalmente)'] },
        relative: { pt: ['Idosos com demência (Aumenta risco de morte súbita, alerta Black Box)'], es: ['Ancianos con demencia (Aumenta riesgo de muerte súbita, alerta Black Box)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'O ANTÍDOTO DA DISTONIA: Se o paciente receber Proclorperazina IV e a cabeça dele "entortar e travar" subitamente olhando para trás (Crise Oculógira/Distonia), aplique imediatamente Biperideno IV ou Prometazina IM. O paciente relaxa e volta ao normal na frente dos seus olhos.', es: 'EL ANTÍDOTO DE LA DISTONÍA: Si el paciente recibe Proclorperazina IV y su cabeza "se tuerce y traba" súbitamente mirando hacia atrás (Crisis Oculógira), aplique inmediatamente Biperideno IV o Prometazina IM. El paciente se relaja de inmediato.' }
      }
    }

  }); /* fim Object.assign GASTROENTEROLOGIA_DRUGS_DB — BUILD 403 (Regulação gástrica: trimebutina + simeticona + proclorperazina) */
})();
