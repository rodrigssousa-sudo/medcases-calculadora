(function () {
  'use strict';
  if (typeof window.CARDIOLOGIA_DRUGS_DB !== 'object' || Array.isArray(window.CARDIOLOGIA_DRUGS_DB)) {
    window.CARDIOLOGIA_DRUGS_DB = {};
  }
  Object.assign(window.CARDIOLOGIA_DRUGS_DB, {

/* ── AMIODARONA ─────────────────────────────────────────────────────── */
    "amiodarona": {
      name: { pt: 'Amiodarona', es: 'Amiodarona' },
      category: 'cardiologia',
      class: { pt: 'Antiarrítmico Classe III (Bloqueador de Canais de Potássio)', es: 'Antiarrítmico Clase III (Bloqueador de Canales de Potasio)' },
      indications: {"es":["FV/TV sin pulso refractaria durante paro cardiorrespiratorio","Taquicardia de QRS ancho/TV monomórfica estable","TV hemodinámicamente inestable o FV recurrente/refractaria tras medidas apropiadas"],"pt":["FV/TV sem pulso refratária durante parada cardiorrespiratória","Taquicardia de QRS largo/TV monomórfica estável","TV hemodinamicamente instável ou FV recorrente/refratária após medidas apropriadas"]},
      commercialNames: { br: ['Ancoron', 'Atlansil'], ar: ['Atlansil'] },
      presentation: { pt: ['Ampolas IV 50 mg/mL (3 mL = 150 mg)', 'Comprimidos 100 mg e 200 mg'], es: ['Ampollas IV 50 mg/mL (3 mL = 150 mg)', 'Comprimidos 100 mg y 200 mg'] },
      mechanism: {
        pt: 'Fármaco extremamente complexo: Pertence à Classe III (prolonga o potencial de ação e a repolarização bloqueando os canais de potássio), mas possui características de TODAS as 4 classes (bloqueia levemente sódio, cálcio e receptores beta-adrenérgicos). É altamente lipofílica, acumulando-se no tecido adiposo e órgãos, com uma meia-vida bizarra de 20 a 100 DIAS.',
        es: 'Fármaco extremadamente complejo: Pertenece a la Clase III (prolonga el potencial de acción y la repolarización bloqueando los canales de potasio), pero posee características de TODAS las 4 clases (bloquea levemente sodio, calcio y receptores beta-adrenérgicos). Es altamente lipofílica, acumulándose en el tejido adiposo y órganos, con una vida media bizarra de 20 a 100 DÍAS.'
      },
      dose: {
        adult: {
          pt: 'PCR: Bolus IV direto de 300 mg (1ª dose) e 150 mg (2ª dose). Fibrilação Atrial: Ataque de 150 mg a 300 mg em 10 a 30 min, seguido de infusão de 900 mg em 24h.',
          es: 'RCP: Bolo IV directo de 300 mg (1ª dosis) y 150 mg (2ª dosis). Fibrilación Auricular: Ataque de 150 mg a 300 mg en 10 a 30 min, seguido de infusión de 900 mg en 24h.'
        },
        pediatric: {
          pt: 'PCR: 5 mg/kg IV em bolus rápido.',
          es: 'RCP: 5 mg/kg IV en bolo rápido.'
        }
      },
      administration: { pt: ['DILUENTE EXCLUSIVO: A infusão de manutenção DEVE ser diluída EXCLUSIVAMENTE em Soro Glicosado (SG 5%). Em Soro Fisiológico ela precipita.', 'Acesso Central é recomendado para manutenção (causa flebite grave em acesso periférico).'], es: ['DILUYENTE EXCLUSIVO: La infusión de mantenimiento DEBE diluirse EXCLUSIVAMENTE en Suero Glucosado (SG 5%). En Suero Fisiológico precipita.', 'Acceso Central es recomendado para mantenimiento (causa flebitis grave en acceso periférico).'] },
      renalAdjustment: { required: false, message: { pt: 'Não requer ajuste em disfunção renal.', es: 'No requiere ajuste en disfunción renal.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Metabolismo exclusivamente hepático. Requer redução de dose na cirrose.', es: 'Metabolismo exclusivamente hepático. Requiere reducción de dosis en la cirrosis.' } },
      commonAdverseEffects: {"es":["Hipotensión durante la infusión IV","Bradicardia","Flebitis/reacción en el sitio de infusión","Náusea"],"pt":["Hipotensão durante infusão IV","Bradicardia","Flebite/reação no local de infusão","Náusea"]},
      dangerousAdverseEffects: {"es":["Asistolia/paro/actividad eléctrica sin pulso","Taquicardia ventricular y torsades de pointes","Shock cardiogénico","Bloqueo AV grave","Lesión hepática importante"],"pt":["Assistolia/parada/atividade elétrica sem pulso","Taquicardia ventricular e torsades de pointes","Choque cardiogênico","Bloqueio AV grave","Lesão hepática importante"]},
      contraindications: {"es":{"absolute":["Hipersensibilidad a amiodarona o sus componentes, incluido yodo","Shock cardiogénico","Bradicardia sinusal marcada","Bloqueo AV de 2º o 3º grado sin marcapasos funcionante"],"relative":["QT prolongado y uso concomitante de otros fármacos que prolongan QT requieren monitorización estrecha"]},"pt":{"absolute":["Hipersensibilidade à amiodarona ou componentes, incluindo iodo","Choque cardiogênico","Bradicardia sinusal acentuada","Bloqueio AV de 2º ou 3º grau sem marcapasso funcionante"],"relative":["QT prolongado e uso concomitante de outros fármacos que prolongam QT exigem monitorização estreita"]}},
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A Droga do Tempo: A amiodarona demora meses para sair do corpo do paciente. Se ocorrer algum efeito adverso grave (como fibrose pulmonar ou tireotoxicose), parar o remédio hoje não resolverá o problema, pois a droga continuará circulando por até 6 meses.', es: 'La Droga del Tiempo: La amiodarona tarda meses en salir del cuerpo del paciente. Si ocurre algún efecto adverso grave (como fibrosis pulmonar o tirotoxicosis), parar el remedio hoy no resolverá el problema, pues la droga continuará circulando por hasta 6 meses.' }
      },
      /* CALC-FARMACOS-BATCH2-CLINICAL-10-PATHOLOGY-DOSE-SAFETY-V1-B-R0 */
      clinicalEnrichment: {"commonAdverseEffects":{"es":["Hipotensión durante la infusión IV","Bradicardia","Flebitis/reacción en el sitio de infusión","Náusea"],"pt":["Hipotensão durante infusão IV","Bradicardia","Flebite/reação no local de infusão","Náusea"]},"contraindications":{"es":{"absolute":["Hipersensibilidad a amiodarona o sus componentes, incluido yodo","Shock cardiogénico","Bradicardia sinusal marcada","Bloqueo AV de 2º o 3º grado sin marcapasos funcionante"],"relative":["QT prolongado y uso concomitante de otros fármacos que prolongan QT requieren monitorización estrecha"]},"pt":{"absolute":["Hipersensibilidade à amiodarona ou componentes, incluindo iodo","Choque cardiogênico","Bradicardia sinusal acentuada","Bloqueio AV de 2º ou 3º grau sem marcapasso funcionante"],"relative":["QT prolongado e uso concomitante de outros fármacos que prolongam QT exigem monitorização estreita"]}},"dangerousAdverseEffects":{"es":["Asistolia/paro/actividad eléctrica sin pulso","Taquicardia ventricular y torsades de pointes","Shock cardiogénico","Bloqueo AV grave","Lesión hepática importante"],"pt":["Assistolia/parada/atividade elétrica sem pulso","Taquicardia ventricular e torsades de pointes","Choque cardiogênico","Bloqueio AV grave","Lesão hepática importante"]},"doseByIndication":{"es":[{"indication":"Paro — FV/TV sin pulso refractaria","rows":[{"dose":"300 mg IV/IO en bolo.","label":"1ª dosis"},{"dose":"150 mg IV/IO en bolo si es necesario.","label":"2ª dosis"}]},{"indication":"Taquicardia estable de QRS ancho / TV","rows":[{"dose":"150 mg IV en 10 min; repetir si recurre la TV.","label":"Carga"},{"dose":"1 mg/min durante las primeras 6 h; luego 0,5 mg/min.","label":"Mantenimiento"}]},{"indication":"FV recurrente o TV hemodinámicamente inestable — infusión IV","note":"En paciente inestable con pulso, no retrasar la cardioversión sincronizada para administrar antiarrítmico.","rows":[{"dose":"150 mg en 100 mL de SG5% durante 10 min.","label":"Carga inicial"},{"dose":"1 mg/min por 6 h, luego 0,5 mg/min.","label":"Después de la carga"}]}],"pt":[{"indication":"Parada — FV/TV sem pulso refratária","rows":[{"dose":"300 mg IV/IO em bolus.","label":"1ª dose"},{"dose":"150 mg IV/IO em bolus, se necessário.","label":"2ª dose"}]},{"indication":"Taquicardia estável de QRS largo / TV","rows":[{"dose":"150 mg IV em 10 min; repetir se a TV recorrer.","label":"Carga"},{"dose":"1 mg/min nas primeiras 6 h; depois 0,5 mg/min.","label":"Manutenção"}]},{"indication":"FV recorrente ou TV hemodinamicamente instável — infusão IV","note":"Em paciente instável com pulso, cardioversão sincronizada não deve ser atrasada para administrar antiarrítmico.","rows":[{"dose":"150 mg em 100 mL de SG5% durante 10 min.","label":"Carga inicial"},{"dose":"1 mg/min por 6 h, depois 0,5 mg/min.","label":"Após carga"}]}]},"indications":{"es":["FV/TV sin pulso refractaria durante paro cardiorrespiratorio","Taquicardia de QRS ancho/TV monomórfica estable","TV hemodinámicamente inestable o FV recurrente/refractaria tras medidas apropiadas"],"pt":["FV/TV sem pulso refratária durante parada cardiorrespiratória","Taquicardia de QRS largo/TV monomórfica estável","TV hemodinamicamente instável ou FV recorrente/refratária após medidas apropriadas"]},"references":["AHA 2025 Adult Cardiac Arrest Algorithm","AHA 2025 Adult Tachyarrhythmia With a Pulse Algorithm","DailyMed — Amiodarone Hydrochloride Injection, prescribing information (2025/2026)"]}
    },

/* ── ADENOSINA ──────────────────────────────────────────────────────── */
    "adenosina": {
      name: { pt: 'Adenosina', es: 'Adenosina' },
      category: 'cardiologia',
      class: { pt: 'Antiarrítmico (Nucleosídeo Endógeno)', es: 'Antiarrítmico (Nucleósido Endógeno)' },
      indications: {"es":["Taquicardia supraventricular paroxística (TSVP) regular de complejo estrecho, incluida la reentrada AV","Taquicardia estable de QRS ancho solo cuando el ritmo es regular y monomórfico, como prueba/terapia según ACLS"],"pt":["Taquicardia supraventricular paroxística (TSVP) regular de complexo estreito, inclusive por reentrada AV","Taquicardia estável de QRS largo apenas quando o ritmo é regular e monomórfico, como teste/terapia segundo ACLS"]},
      commercialNames: { br: ['Adenocard'], ar: ['Adenosina'] },
      presentation: { pt: ['Ampolas IV 3 mg/mL (2 mL = 6 mg)'], es: ['Ampollas IV 3 mg/mL (2 mL = 6 mg)'] },
      mechanism: {
        pt: 'A Adenosina liga-se aos receptores A1 no coração, ativando canais de potássio e bloqueando a entrada de cálcio. Isso causa um "curto-circuito" ou hiperpolarização temporária do Nódulo Atrioventricular (AV), bloqueando TOTALMENTE a condução elétrica por alguns segundos. Funciona literalmente como o botão "Ctrl+Alt+Del" (reiniciar) para o coração travado em taquicardia. A meia-vida da droga no sangue é MÁGICA: Apenas 10 SEGUNDOS.',
        es: 'La Adenosina se une a los receptores A1 en el corazón, activando canales de potasio y bloqueando la entrada de calcio. Esto causa un "cortocircuito" o hiperpolarización temporal del Nódulo Auriculoventricular (AV), bloqueando TOTALMENTE la conducción eléctrica por unos segundos. Funciona literalmente como el botón "Ctrl+Alt+Del" (reiniciar) para el corazón trabado en taquicardia. La vida media de la droga en la sangre es MÁGICA: Solo 10 SEGUNDOS.'
      },
      dose: {
        adult: {
          pt: 'Primeira dose: 6 mg IV rápido. Se não reverter em 2 min, Segunda dose: 12 mg IV rápido.',
          es: 'Primera dosis: 6 mg IV rápido. Si no revierte en 2 min, Segunda dosis: 12 mg IV rápido.'
        },
        pediatric: {
          pt: 'Primeira dose: 0,1 mg/kg IV rápido (máx 6mg). Segunda dose: 0,2 mg/kg IV rápido (máx 12mg).',
          es: 'Primera dosis: 0,1 mg/kg IV rápido (máx 6mg). Segunda dosis: 0,2 mg/kg IV rápido (máx 12mg).'
        }
      },
      administration: { pt: ['TECNICA OBRIGATÓRIA (Técnica das Duas Seringas): Como ela morre em 10 segundos no sangue, a injeção deve ser em ACESSO VENOSO CALIBROSO (antecubital), infundida o mais rápido possível (1 segundo), IMEDIATAMENTE SEGUIDA de um flush de 20 mL de Soro Fisiológico empurrado à força, seguido de elevação do braço para a droga chegar ao coração.'], es: ['TÉCNICA OBLIGATORIA (Técnica de las Dos Jeringas): Como muere en 10 segundos en la sangre, la inyección debe ser en ACCESO VENOSO DE GRAN CALIBRE (antecubital), infundida lo más rápido posible (1 segundo), INMEDIATAMENTE SEGUIDA de un flush de 20 mL de Suero Fisiológico empujado a la fuerza, seguido de elevación del brazo para que la droga llegue al corazón.'] },
      renalAdjustment: { required: false, message: { pt: 'Degradada pelas hemácias no sangue. Sem ajuste renal.', es: 'Degradada por los hematíes en la sangre. Sin ajuste renal.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem ajuste hepático.', es: 'Sin ajuste hepático.' } },
      commonAdverseEffects: {"es":["Rubor facial","Molestia/presión torácica","Disnea","Cefalea","Mareo","Náusea"],"pt":["Rubor facial","Desconforto/pressão torácica","Dispneia","Cefaleia","Tontura","Náusea"]},
      dangerousAdverseEffects: {"es":["Asistolia o bloqueo AV prolongado","Taquicardia ventricular/fibrilación ventricular y torsades de pointes","Broncoespasmo grave","Hipotensión clínicamente significativa","Convulsiones o pérdida de conciencia"],"pt":["Assistolia ou bloqueio AV prolongado","Taquicardia ventricular/fibrilação ventricular e torsades de pointes","Broncoespasmo grave","Hipotensão clinicamente significativa","Convulsões ou perda de consciência"]},
      contraindications: {"es":{"absolute":["Bloqueo AV de 2º o 3º grado sin marcapasos funcionante","Enfermedad del nodo sinusal o bradicardia sintomática sin marcapasos funcionante","Hipersensibilidad a adenosina"],"relative":["Broncoespasmo activo/asma: evitar adenosina","Taquicardia de QRS ancho irregular, polimórfica o hemodinámicamente inestable: no administrar adenosina"]},"pt":{"absolute":["Bloqueio AV de 2º ou 3º grau sem marcapasso funcionante","Doença do nó sinusal ou bradicardia sintomática sem marcapasso funcionante","Hipersensibilidade à adenosina"],"relative":["Broncoespasmo ativo/asma: evitar adenosina","Taquicardia de QRS largo irregular, polimórfica ou hemodinamicamente instável: não administrar adenosina"]}},
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'AVISE O PACIENTE: A sensação gerada pela droga imita perfeitamente um ataque cardíaco fulminante por alguns segundos (dor no peito e sufocamento). Tranquilize o paciente antes de apertar o êmbolo.', es: 'AVISE AL PACIENTE: La sensación generada por la droga imita perfectamente un ataque cardíaco fulminante por unos segundos (dolor en el pecho y sofocamiento). Tranquilice al paciente antes de apretar el émbolo.' }
      },
      /* CALC-FARMACOS-BATCH2-CLINICAL-10-PATHOLOGY-DOSE-SAFETY-V1-B-R0 */
      clinicalEnrichment: {"commonAdverseEffects":{"es":["Rubor facial","Molestia/presión torácica","Disnea","Cefalea","Mareo","Náusea"],"pt":["Rubor facial","Desconforto/pressão torácica","Dispneia","Cefaleia","Tontura","Náusea"]},"contraindications":{"es":{"absolute":["Bloqueo AV de 2º o 3º grado sin marcapasos funcionante","Enfermedad del nodo sinusal o bradicardia sintomática sin marcapasos funcionante","Hipersensibilidad a adenosina"],"relative":["Broncoespasmo activo/asma: evitar adenosina","Taquicardia de QRS ancho irregular, polimórfica o hemodinámicamente inestable: no administrar adenosina"]},"pt":{"absolute":["Bloqueio AV de 2º ou 3º grau sem marcapasso funcionante","Doença do nó sinusal ou bradicardia sintomática sem marcapasso funcionante","Hipersensibilidade à adenosina"],"relative":["Broncoespasmo ativo/asma: evitar adenosina","Taquicardia de QRS largo irregular, polimórfica ou hemodinamicamente instável: não administrar adenosina"]}},"dangerousAdverseEffects":{"es":["Asistolia o bloqueo AV prolongado","Taquicardia ventricular/fibrilación ventricular y torsades de pointes","Broncoespasmo grave","Hipotensión clínicamente significativa","Convulsiones o pérdida de conciencia"],"pt":["Assistolia ou bloqueio AV prolongado","Taquicardia ventricular/fibrilação ventricular e torsades de pointes","Broncoespasmo grave","Hipotensão clinicamente significativa","Convulsões ou perda de consciência"]},"doseByIndication":{"es":[{"indication":"TSVP regular — adulto","note":"Monitorización continua; pueden intentarse maniobras vagales antes cuando corresponda.","rows":[{"dose":"6 mg IV en bolo muy rápido, seguido inmediatamente de flush con solución salina.","label":"1ª dosis"},{"dose":"12 mg IV en bolo rápido si es necesario.","label":"2ª dosis"}]},{"indication":"TSVP — pediatría","rows":[{"dose":"0,1 mg/kg IV/IO en bolo rápido (máx. 6 mg), seguido de flush.","label":"1ª dosis"},{"dose":"0,2 mg/kg IV/IO en bolo rápido (máx. 12 mg) si es necesario.","label":"2ª dosis"}]},{"indication":"Taquicardia estable de QRS ancho","note":"Considerar solo si el ritmo es regular y monomórfico. No usar en taquicardia de QRS ancho inestable, irregularmente irregular o polimórfica.","rows":[{"dose":"6 mg IV en bolo rápido; si es necesario, 12 mg.","label":"ACLS"}]}],"pt":[{"indication":"TSVP regular — adulto","note":"Realizar monitorização contínua; manobras vagais podem ser tentadas antes quando apropriado.","rows":[{"dose":"6 mg IV em bolus muito rápido, seguida imediatamente de flush com SF.","label":"1ª dose"},{"dose":"12 mg IV em bolus rápido se necessário.","label":"2ª dose"}]},{"indication":"TSVP — pediatria","rows":[{"dose":"0,1 mg/kg IV/IO em bolus rápido (máx. 6 mg), seguida de flush.","label":"1ª dose"},{"dose":"0,2 mg/kg IV/IO em bolus rápido (máx. 12 mg) se necessário.","label":"2ª dose"}]},{"indication":"Taquicardia estável de QRS largo","note":"Considerar somente se o ritmo for regular e monomórfico. Não usar em taquicardia de QRS largo instável, irregularmente irregular ou polimórfica.","rows":[{"dose":"6 mg IV em bolus rápido; se necessário, 12 mg.","label":"ACLS"}]}]},"indications":{"es":["Taquicardia supraventricular paroxística (TSVP) regular de complejo estrecho, incluida la reentrada AV","Taquicardia estable de QRS ancho solo cuando el ritmo es regular y monomórfico, como prueba/terapia según ACLS"],"pt":["Taquicardia supraventricular paroxística (TSVP) regular de complexo estreito, inclusive por reentrada AV","Taquicardia estável de QRS largo apenas quando o ritmo é regular e monomórfico, como teste/terapia segundo ACLS"]},"references":["AHA 2025 Adult Tachyarrhythmia With a Pulse Algorithm","AHA/AAP 2025 Pediatric Tachyarrhythmia With a Pulse Algorithm","DailyMed — Adenosine Injection, prescribing information (2025)"]}
    },

/* ── LIDOCAÍNA IV (ANTIARRÍTMICO) ───────────────────────────────────── */
    "lidocaina_iv": {
      "name": {
        "pt": "Lidocaína (Uso Sistêmico IV)",
        "es": "Lidocaína (Uso Sistémico IV)"
      },
      "category": "cardiologia",
      "class": {
        "pt": "Antiarrítmico Classe IB",
        "es": "Antiarrítmico Clase IB"
      },
      "indications": {
        "pt": [
          "FV/TV sem pulso refratária à desfibrilação como alternativa à amiodarona",
          "Arritmias ventriculares agudas selecionadas"
        ],
        "es": [
          "FV/TV sin pulso refractaria a desfibrilación como alternativa a amiodarona",
          "Arritmias ventriculares agudas seleccionadas"
        ]
      },
      "commercialNames": {
        "br": [
          "Lidocaína IV sem vasoconstritor"
        ],
        "ar": [
          "Lidocaína IV sin vasoconstrictor"
        ]
      },
      "presentation": {
        "pt": [
          "Solução IV antiarrítmica; concentrações 1% ou 2% podem existir. Não usar formulações com epinefrina para uso IV antiarrítmico."
        ],
        "es": [
          "Solución IV antiarrítmica; pueden existir concentraciones 1% o 2%. No usar formulaciones con epinefrina para uso IV antiarrítmico."
        ]
      },
      "mechanism": {
        "pt": "Bloqueia canais rápidos de sódio em tecido ventricular, reduzindo automatismo e atividade ventricular ectópica. É metabolizada principalmente no fígado e depende do fluxo hepático.",
        "es": "Bloquea canales rápidos de sodio en tejido ventricular, reduciendo automatismo y actividad ectópica ventricular. Se metaboliza principalmente en el hígado y depende del flujo hepático."
      },
      "dose": {
        "adult": {
          "pt": "PCR por FV/TV sem pulso refratária: 1–1,5 mg/kg IV/IO; segunda dose 0,5–0,75 mg/kg. Para arritmias ventriculares com pulso, bolus e infusão devem seguir protocolo/monitorização; infusão usual 1–4 mg/min.",
          "es": "PCR por FV/TV sin pulso refractaria: 1–1,5 mg/kg IV/IO; segunda dosis 0,5–0,75 mg/kg. Para arritmias ventriculares con pulso, bolo e infusión deben seguir protocolo/monitorización; infusión habitual 1–4 mg/min."
        },
        "pediatric": {
          "pt": "Doses pediátricas devem seguir algoritmo PALS/protocolo pediátrico vigente; não extrapolar automaticamente o esquema adulto.",
          "es": "Las dosis pediátricas deben seguir algoritmo PALS/protocolo pediátrico vigente; no extrapolar automáticamente el esquema adulto."
        }
      },
      "administration": {
        "pt": [
          "ECG contínuo e monitorização hemodinâmica",
          "Usar somente apresentação destinada a uso IV, sem vasoconstritor",
          "Vigiar sinais neurológicos precoces de toxicidade"
        ],
        "es": [
          "ECG continuo y monitorización hemodinámica",
          "Usar solo presentación destinada a uso IV, sin vasoconstrictor",
          "Vigilar signos neurológicos precoces de toxicidad"
        ]
      },
      "renalAdjustment": {
        "required": false,
        "message": {
          "pt": "Não há ajuste agudo fixo apenas pela função renal; metabólitos podem acumular em infusões prolongadas.",
          "es": "No existe ajuste agudo fijo solo por función renal; los metabolitos pueden acumularse en infusiones prolongadas."
        }
      },
      "hepaticAdjustment": {
        "required": true,
        "message": {
          "pt": "Reduzir exposição/taxa de manutenção em disfunção hepática, choque ou baixo débito, pois o clearance depende do fluxo e metabolismo hepáticos.",
          "es": "Reducir exposición/velocidad de mantenimiento en disfunción hepática, shock o bajo gasto, porque el clearance depende del flujo y metabolismo hepáticos."
        }
      },
      "commonAdverseEffects": {
        "pt": [
          "Parestesias",
          "Tontura",
          "Sonolência",
          "Náusea"
        ],
        "es": [
          "Parestesias",
          "Mareo",
          "Somnolencia",
          "Náuseas"
        ]
      },
      "dangerousAdverseEffects": {
        "pt": [
          "Convulsões",
          "Depressão do SNC",
          "Bradicardia/BAV",
          "Colapso cardiovascular"
        ],
        "es": [
          "Convulsiones",
          "Depresión del SNC",
          "Bradicardia/BAV",
          "Colapso cardiovascular"
        ]
      },
      "contraindications": {
        "absolute": {
          "pt": [
            "Hipersensibilidade a anestésicos locais do tipo amida",
            "Bloqueio cardíaco grave sem marcapasso em situações apropriadas"
          ],
          "es": [
            "Hipersensibilidad a anestésicos locales tipo amida",
            "Bloqueo cardíaco grave sin marcapasos en situaciones apropiadas"
          ]
        },
        "relative": {
          "pt": [
            "Doença hepática grave, choque/baixo débito, idosos, uso concomitante de outros antiarrítmicos"
          ],
          "es": [
            "Enfermedad hepática grave, shock/bajo gasto, adultos mayores, uso concomitante de otros antiarrítmicos"
          ]
        }
      },
      "safetyFlags": {
        "bleedingRisk": false,
        "renalHighRisk": false,
        "hepaticCaution": true,
        "antidoteAvailable": false,
        "highAlertMedication": true,
        "warning": {
          "pt": "Esta ficha é exclusivamente do uso sistêmico IV antiarrítmico. Não misturar com o owner canônico de lidocaína tópica/local.",
          "es": "Esta ficha es exclusivamente para uso sistémico IV antiarrítmico. No mezclar con el owner canónico de lidocaína tópica/local."
        }
      }
    }, // vírgula adicionada; BUILD 356 blocos seguem

/* ── NITROPRUSSIATO DE SÓDIO (NIPRIDE) ──────────────────────────────── */
    "nitroprussiato_sodio": {
      name: { pt: 'Nitroprussiato de Sódio', es: 'Nitroprusiato de Sodio' },
      category: 'cardiologia',
      class: { pt: 'Vasodilatador Misto Direto (Arterial e Venoso)', es: 'Vasodilatador Mixto Directo (Arterial y Venoso)' },
      indications: {
        pt: ['Emergências Hipertensivas Severas (com lesão de órgão-alvo aguda)', 'Dissecção Aguda de Aorta (associado a betabloqueadores)', 'Insuficiência Cardíaca Aguda com grave aumento da pós-carga'],
        es: ['Emergencias Hipertensivas Severas (con lesión de órgano diana aguda)', 'Disección Aguda de Aorta (asociado a betabloqueantes)', 'Insuficiencia Cardíaca Aguda con grave aumento de la poscarga']
      },
      commercialNames: { br: ['Nipride'], ar: ['Nipride'] },
      presentation: { pt: ['Frasco-ampola IV liofilizado 50 mg (com diluente)'], es: ['Vial IV liofilizado 50 mg (con diluyente)'] },
      mechanism: {
        pt: 'A molécula contém 5 grupos cianeto e 1 grupo óxido nítrico (NO). No sangue, ele libera imediatamente o Óxido Nítrico, que entra na musculatura lisa dos vasos e ativa o GMPc, causando um relaxamento BRUTAL, simultâneo e igual de artérias (derruba a pós-carga) e veias (derruba a pré-carga). O efeito inicia em segundos e SOME em 2 minutos após desligar a bomba.',
        es: 'La molécula contiene 5 grupos cianuro y 1 grupo óxido nítrico (NO). En la sangre, libera inmediatamente el Óxido Nítrico, que entra en la musculatura lisa de los vasos y activa el GMPc, causando una relajación BRUTAL, simultánea e igual de arterias (derrumba la poscarga) y venas (derrumba la precarga). El efecto inicia en segundos y DESAPARECE en 2 minutos tras apagar la bomba.'
      },
      dose: {
        adult: {
          pt: 'Infusão IV contínua: Iniciar com 0,25 a 0,5 mcg/kg/min e titular para cima a cada 5 minutos (Máximo absoluto 10 mcg/kg/min por não mais de 10 minutos).',
          es: 'Infusión IV continua: Iniciar con 0,25 a 0,5 mcg/kg/min y titular hacia arriba cada 5 minutos (Máximo absoluto 10 mcg/kg/min por no más de 10 minutos).'
        },
        pediatric: {
          pt: '0,3 a 0,5 mcg/kg/min IV contínuo. (Máximo 5 mcg/kg/min).',
          es: '0,3 a 0,5 mcg/kg/min IV continuo. (Máximo 5 mcg/kg/min).'
        }
      },
      administration: { pt: ['Exige monitorização de PA invasiva (Cateter Arterial) se possível.', 'FOTOSSENSÍVEL: O frasco e o equipo devem estar obrigatoriamente protegidos da luz por capa escura opaca (senão a molécula degrada e libera cianeto puro na bolsa).'], es: ['Exige monitorización de PA invasiva (Catéter Arterial) si es posible.', 'FOTOSENSIBLE: El vial y el equipo deben estar obligatoriamente protegidos de la luz por funda oscura opaca (sino la molécula se degrada y libera cianuro puro en la bolsa).'] },
      renalAdjustment: { required: true, message: { pt: 'O subproduto tóxico (Tiocianato) é depurado pelos rins. Em falência renal, intoxica o paciente em < 48 horas.', es: 'El subproducto tóxico (Tiocianato) es depurado por los riñones. En falla renal, intoxica al paciente en < 48 horas.' } },
      hepaticAdjustment: { required: true, message: { pt: 'O fígado é responsável por transformar o Cianeto tóxico do Nipride em Tiocianato. Falência hepática causa intoxicação imediata por Cianeto.', es: 'El hígado es responsable de transformar el Cianuro tóxico del Nipride en Tiocianato. La falla hepática causa intoxicación inmediata por Cianuro.' } },
      commonAdverseEffects: { pt: ['Hipotensão severa precipitada', 'Cefaleia e Náuseas'], es: ['Hipotensión severa precipitada', 'Cefalea y Náuseas'] },
      dangerousAdverseEffects: { pt: ['INTOXICAÇÃO POR CIANETO (Acidose metabólica severa refratária, arritmias, coma, sangue excessivamente vermelho venoso)', 'Roubo Coronariano (piora a isquemia em pacientes com infarto ativo, preferir Tridil)'], es: ['INTOXICACIÓN POR CIANURO (Acidosis metabólica severa refractaria, arritmias, coma, sangre venosa excesivamente roja)', 'Robo Coronario (empeora la isquemia en pacientes con infarto activo, preferir Tridil)'] },
      contraindications: {
        absolute: { pt: ['Infarto Agudo do Miocárdio no estágio inicial com instabilidade', 'Uso concomitante com inibidores da fosfodiesterase (Sildenafil)'], es: ['Infarto Agudo de Miocardio en la etapa inicial con inestabilidad', 'Uso concomitante con inhibidores de la fosfodiesterasa (Sildenafilo)'] },
        relative: { pt: ['Aumento extremo de Pressão Intracraniana (ele dilata as veias cerebrais e incha o cérebro)'], es: ['Aumento extremo de Presión Intracraneal (dilata las venas cerebrales e hincha el cerebro)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'ANTÍDOTO/PREVENÇÃO: Em infusões que passarão de 48 horas ou em doses muito altas, o médico deve associar "Hipossulfito de Sódio" (Tiosulfato) junto ao Nipride. O fígado usa o tiosulfato para desarmar o cianeto.', es: 'ANTÍDOTO/PREVENCIÓN: En infusiones que pasarán de 48 horas o en dosis muy altas, el médico debe asociar "Hiposulfito de Sodio" (Tiosulfato) junto al Nipride. El hígado usa el tiosulfato para desarmar el cianuro.' }
      }
    },

/* ── NITROGLICERINA (TRIDIL) ────────────────────────────────────────── */
    "nitroglicerina": {
      name: { pt: 'Nitroglicerina (Tridil)', es: 'Nitroglicerina' },
      category: 'cardiologia',
      class: { pt: 'Vasodilatador (Predominantemente Venoso / Coronariano)', es: 'Vasodilatador (Predominantemente Venoso / Coronario)' },
      indications: {
        pt: ['Infarto Agudo do Miocárdio e Angina Instável (reduz dor e isquemia)', 'Edema Agudo de Pulmão Cardiogênico (reduz a água que volta pro coração)', 'Emergências hipertensivas'],
        es: ['Infarto Agudo de Miocardio y Angina Inestable (reduce dolor e isquemia)', 'Edema Agudo de Pulmón Cardiogénico (reduce el agua que vuelve al corazón)', 'Emergencias hipertensivas']
      },
      commercialNames: { br: ['Tridil'], ar: ['Nitro-Dur'] },
      presentation: { pt: ['Ampolas IV 5 mg/mL (10 mL = 50 mg)', 'Comprimidos Sublinguais 0,4 mg', 'Adesivos transdérmicos'], es: ['Ampollas IV 5 mg/mL (10 mL = 50 mg)', 'Comprimidos Sublinguales 0,4 mg', 'Parches transdérmicos'] },
      mechanism: {
        pt: 'Converte-se em Óxido Nítrico livre. Em doses BAIXAS (< 50 mcg/min), causa dilatação massiva das VEIAS, o que sequestra o sangue nas pernas e abdome, aliviando o coração afogado no Edema de Pulmão. Em doses ALTAS (> 100 mcg/min), passa a dilatar também as artérias, caindo a pressão arterial de forma agressiva. Ao contrário do Nipride, dilata ativamente e melhora o fluxo nas coronárias doentes.',
        es: 'Se convierte en Óxido Nítrico libre. En dosis BAJAS (< 50 mcg/min), causa dilatación masiva de las VENAS, lo que secuestra la sangre en piernas y abdomen, aliviando al corazón ahogado en Edema de Pulmón. En dosis ALTAS (> 100 mcg/min), pasa a dilatar también las arterias, bajando la presión arterial agresivamente. A diferencia del Nipride, dilata activamente y mejora el flujo en coronarias enfermas.'
      },
      dose: {
        adult: {
          pt: 'Infusão IV contínua: Iniciar com 5 a 10 mcg/min. Aumentar de 5 a 10 mcg a cada 5-10 minutos até resposta clínica (Máx 200 mcg/min). Angina: 0,4 mg sublingual a cada 5 min (máx 3x).',
          es: 'Infusión IV continua: Iniciar con 5 a 10 mcg/min. Aumentar de 5 a 10 mcg cada 5-10 minutos hasta respuesta clínica (Máx 200 mcg/min). Angina: 0,4 mg sublingual cada 5 min (máx 3x).'
        },
        pediatric: {
          pt: 'Raramente usada (0,25 a 0,5 mcg/kg/min).',
          es: 'Raramente usada (0,25 a 0,5 mcg/kg/min).'
        }
      },
      administration: { pt: ['Usar equipo específico para Tridil (Polietileno/PVC de baixa absorção), pois o plástico comum dos equipos absorve a nitroglicerina e o paciente não recebe a dose.', 'NÃO precisa de proteção contra a luz (capa opaca) como o Nipride.'], es: ['Usar equipo específico para Tridil (Polietileno/PVC de baja absorción), pues el plástico común absorbe la nitroglicerina y el paciente no recibe la dosis.', 'NO necesita protección contra la luz (funda opaca) como el Nipride.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste clínico.', es: 'Sin necesidad de ajuste clínico.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Extenso metabolismo hepático (efeito de 1ª passagem zera a biodisponibilidade oral, por isso existe apenas IV, adesivo e sublingual).', es: 'Extenso metabolismo hepático (efecto de 1ª pasada anula biodisponibilidad oral, por eso solo existe IV, parche y sublingual).' } },
      commonAdverseEffects: { pt: ['Cefaleia P latejante severa (sinal de que a droga está funcionando e dilatando as meninges)', 'Taquicardia reflexa leve'], es: ['Cefalea pulsátil severa (signo de que la droga está funcionando y dilatando las meninges)', 'Taquicardia refleja leve'] },
      dangerousAdverseEffects: { pt: ['Hipotensão severa e Síncope', 'Meta-hemoglobinemia (rara em doses usuais)'], es: ['Hipotensión severa y Síncope', 'Metahemoglobinemia (rara en dosis usuales)'] },
      contraindications: {
        absolute: { pt: ['Uso nas últimas 24 a 48h de Sildenafila ou Tadalafila (RISCO DE CHOQUE VASOPLÉGICO IRREVERSÍVEL)', 'Infarto do Ventrículo Direito (paciente é dependente de pré-carga; se tirar a pré-carga, a pressão cai a zero e ele morre)'], es: ['Uso en las últimas 24 a 48h de Sildenafilo o Tadalafilo (RIESGO DE CHOQUE VASOPLÉJICO IRREVERSIBLE)', 'Infarto del Ventrículo Derecho (paciente es dependiente de precarga; si quitas la precarga, la presión cae a cero y muere)'] },
        relative: { pt: ['Glaucoma', 'Cardiomiopatia restritiva hipertrófica'], es: ['Glaucoma', 'Miocardiopatía restrictiva hipertrófica'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'FENÔMENO DA TAQUIFILAXIA: O corpo humano esgota suas reservas de grupo sulfidrila (SH) usados para ativar o Tridil. Após 24h a 48h de infusão contínua, o remédio perde o efeito (tolerância aguda). É necessário fazer "janelas" sem nitrato ou desligar a bomba o mais cedo possível.', es: 'FENÓMENO DE LA TAQUIFILAXIA: El cuerpo humano agota sus reservas de grupo sulfhidrilo (SH) usados para activar el Tridil. Tras 24h a 48h de infusión continua, el remedio pierde el efecto (tolerancia aguda). Es necesario hacer "ventanas" sin nitrato o apagar la bomba lo más temprano posible.' }
      }
    },

/* ── BUILD 403 — Cardiologia Emergencial ── */

/* ── FUROSEMIDA IV ──────────────────────────────────────────────────── */
    "furosemida_iv": {
      id: 'furosemida_iv',
      name: { pt: 'Furosemida IV', es: 'Furosemida IV' },
      category: 'cardiologia',
      class: { pt: 'Diurético de Alça de Ação Rápida', es: 'Diurético de Asa de Acción Rápida' },
      indications: {
        pt: ['Edema Agudo de Pulmão (EAP - O paciente está "afogando" no próprio líquido)', 'Insuficiência Cardíaca Congestiva descompensada', 'Emergências Hipertensivas hipervolêmicas', 'Hipercalemia aguda (Potássio tóxico no sangue)'],
        es: ['Edema Agudo de Pulmón (EAP - El paciente se está "ahogando" en su propio líquido)', 'Insuficiencia Cardíaca Congestiva descompensada', 'Emergencias Hipertensivas hipervolémicas', 'Hiperpotasemia aguda (Potasio tóxico en sangre)']
      },
      commercialNames: { br: ['Lasix (Ampolas)'], ar: ['Lasix', 'Nuriban'] },
      presentation: { pt: ['Ampolas Intravenosas 20 mg/2 mL'], es: ['Ampollas Intravenosas 20 mg/2 mL'] },
      mechanism: {
        pt: 'A "Válvula de Escape" da UTI. Atua inibindo o transportador simporte Na+-K+-2Cl- na Alça de Henle, impedindo que os rins reabsorvam sal e água (o paciente urina baldes). O GRANDE TRUQUE DO IV: Quando feita na veia em um paciente sufocando no Edema de Pulmão, a furosemida causa uma VENODILATAÇÃO sistêmica em apenas 5 minutos, "escondendo" o sangue nas pernas e tirando a pressão do pulmão ANTES MESMO do paciente fazer a primeira gota de urina.',
        es: 'La "Válvula de Escape" de la UCI. Inhibe el transportador Na+-K+-2Cl- en el Asa de Henle, impidiendo reabsorber sal y agua. EL GRAN TRUCO DEL IV: En vena en un paciente asfixiándose, causa una VENODILATACIÓN sistémica en solo 5 minutos, sacando la presión del pulmón ANTES INCLUSO de hacer la primera gota de orina.'
      },
      dose: {
        adult: {
          pt: 'Ataque em Edema de Pulmão: 20 a 40 mg Intravenoso LENTO (ou dobrar a dose se o paciente já usa comprimido crônico em casa). Pode-se montar bomba de infusão contínua em IRA.',
          es: 'Ataque en Edema de Pulmón: 20 a 40 mg Intravenoso LENTO (o doblar dosis si ya usa comprimido en casa). Se puede montar bomba de infusión continua en IRA.'
        },
        pediatric: {
          pt: '1 a 2 mg/kg IV lento.',
          es: '1 a 2 mg/kg IV lento.'
        }
      },
      administration: { pt: ['INFUSÃO LENTA É VITAL: A Furosemida nunca deve ser feita em "push" rápido puro, mas administrada a uma taxa não superior a 4 mg por minuto. Injetar rápido destrói o nervo auditivo do paciente.'], es: ['INFUSIÓN LENTA ES VITAL: Nunca debe ser hecha en "push" rápido, sino administrada a una tasa no superior a 4 mg por minuto. Inyectar rápido destruye el nervio auditivo del paciente.'] },
      renalAdjustment: { required: true, message: { pt: 'A ironia é que a Furosemida "trabalha de dentro do tubo". Em falência renal severa (DRC 4/5), pouca droga chega no tubo do rim. Exige doses IV maciças (até 200mg/dose) para "bater e funcionar" no rim doente.', es: 'La ironía es que Furosemida "trabaja desde dentro del tubo". En falla renal severa, poca droga llega al tubo. Exige dosis IV masivas (hasta 200mg/dosis) para funcionar.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Atenção na Cirrose e Ascite (Pode desidratar o vaso, baixar a perfusão do fígado e precipitar Síndrome Hepatorrenal fatal).', es: 'Atención en Cirrosis y Ascitis (Puede deshidratar el vaso, precipitando Síndrome Hepatorrenal fatal).' } },
      commonAdverseEffects: { pt: ['Hipocalemia (Potássio baixo com câimbras intensas)', 'Hipovolemia aguda e Hipotensão ortostática', 'Hipomagnesemia e Hiperuricemia (crise de gota)'], es: ['Hipopotasemia (Potasio bajo con calambres intensos)', 'Hipovolemia aguda e Hipotensión ortostática', 'Hipomagnesemia e Hiperuricemia (crisis de gota)'] },
      dangerousAdverseEffects: { pt: ['OTOTOXICIDADE SURDEZ IRREVERSÍVEL (Ocorre por lesão direta do nervo vestibulococlear se a injeção IV for muito rápida na veia)', 'Colapso circulatório por desidratação maciça'], es: ['OTOTOXICIDAD SORDERA IRREVERSIBLE (Ocurre por lesión directa del nervio si la inyección IV es muy rápida)', 'Colapso circulatorio por deshidratación masiva'] },
      contraindications: {
        absolute: { pt: ['Anúria total com falência renal aguda irresponsiva', 'Coma hepático e depleção severa de eletrólitos não corrigida'], es: ['Anuria total con falla renal aguda irresponsiva', 'Coma hepático y depleción severa de electrolitos no corregida'] },
        relative: { pt: ['Alergia a sulfonamidas (Embora reações cruzadas reais sejam raras, a furosemida possui grupo sulfamídico)'], es: ['Alergia a sulfonamidas (Furosemida posee grupo sulfamídico)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'NUNCA USE PARA "MIJAR" NO CHOQUE: É um crime médico administrar Furosemida em um paciente internado com Insuficiência Renal Aguda que está "oligúrico" (sem urinar) devido a DESIDRATAÇÃO ou SEPSE. Se falta água, forçar o rim com Lasix destrói os néfrons por hipoperfusão (Necrose Tubular Aguda irreversível).', es: 'NUNCA USE PARA "ORINAR" EN CHOQUE: Es un crimen médico administrar Furosemida en un paciente con Falla Renal Aguda oligúrico por DESHIDRATACIÓN o SEPSIS. Forzar el riñón destruye las nefronas (Necrosis Tubular Aguda).' }
      }
    }

  }); /* fim Object.assign CARDIOLOGIA_DRUGS_DB — BUILD 403 (furosemida_iv) */
})();

/* ══════════════════════════════════════════════════════════════════════════
   BUILD 426 — ONDA 51: Bloqueadores de Canais de Cálcio Diidropiridínicos
   Amlodipino · Nifedipino · Felodipino · Lercanidipino · Manidipino
   ANTI-DUPLICAÇÃO: IDs canônicos sincronizados com cardio.js (anlodipino /
   nifedipina / felodipina / lercanidipina / manidipina). Este IIFE injeta
   no namespace CARDIOLOGIA_DRUGS_DB (motor _injectObjectDB) com schema
   pt+es — coexistência sem colisão com CARDIO_DRUGS_DB (motor calculate).
══════════════════════════════════════════════════════════════════════════ */
(function(){
  if(!window.CARDIOLOGIA_DRUGS_DB || Array.isArray(window.CARDIOLOGIA_DRUGS_DB)) window.CARDIOLOGIA_DRUGS_DB={};
  Object.assign(window.CARDIOLOGIA_DRUGS_DB, {

/* ── ANLODIPINO (ID canônico ANVISA) ────────────────────────────────── */
    "anlodipino": {
      name: { pt: 'Anlodipino (Besilato de)', es: 'Amlodipino (Besilato de)' },
      category: 'cardiologia',
      class: { pt: 'Bloqueador de Canais de Cálcio Diidropiridínico (2ª geração)', es: 'Bloqueador de Canales de Calcio Dihidropiridínico (2ª generación)' },
      indications: {
        pt: ['Hipertensão Arterial Sistêmica (Primeira linha)', 'Angina Pectoris Estável Crônica e Vasoespástica (Prinzmetal)'],
        es: ['Hipertensión Arterial Sistémica (Primera línea)', 'Angina Pectoris Estable Crónica y Vasoespástica (Prinzmetal)']
      },
      commercialNames: { br: ['Norvasc', 'Pressat', 'Tensiv'], ar: ['Norvasc', 'Pelmec'] },
      presentation: { pt: ['Comprimidos 2,5 mg, 5 mg e 10 mg'], es: ['Comprimidos 2,5 mg, 5 mg y 10 mg'] },
      mechanism: {
        pt: 'O "Relaxante de Artérias". Bloqueia canais de cálcio tipo L na musculatura lisa vascular, provocando vasodilatação periférica e coronariana com mínimo efeito cronotrópico. Meia-vida extraordinariamente longa (30–50 h) garante cobertura de 24 h com dose única e titulação a cada 7–14 dias.',
        es: 'El "Relajante de Arterias". Bloquea canales de calcio tipo L en músculo liso vascular con vasodilatación periférica y coronaria y mínimo efecto cronotrópico. Vida media (30–50 h) garantiza cobertura de 24 h con dosis única.'
      },
      dose: {
        adult: { pt: 'Início: 5 mg VO 1×/dia. Idoso/IC: iniciar com 2,5 mg. Máximo: 10 mg/dia.', es: 'Inicio: 5 mg VO 1×/día. Anciano/IC: iniciar con 2,5 mg. Máximo: 10 mg/día.' },
        pediatric: { pt: 'Crianças 6–17 anos HAS severa: 2,5–5 mg/dia.', es: 'Niños 6–17 años HTA severa: 2,5–5 mg/día.' }
      },
      administration: { pt: ['VO, 1×/dia, com ou sem alimentos. Não há formulação IV.'], es: ['VO, 1×/día, con o sin alimentos. No hay formulación IV.'] },
      renalAdjustment: { required: false, message: { pt: 'Seguro em DRC — não dialisável.', es: 'Seguro en ERC — no dializable.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Iniciar obrigatoriamente com 2,5 mg em hepatopatas (metabolismo hepático prolongado).', es: 'Iniciar obligatoriamente con 2,5 mg en hepatópatas.' } },
      commonAdverseEffects: { pt: ['Edema maleolar (até 30% com 10 mg — mecânico, não responde a furosemida)', 'Rubor facial', 'Cefaleia latejante'], es: ['Edema maleolar (hasta 30% con 10 mg — mecánico, no responde a furosemida)', 'Rubor facial', 'Cefalea latiente'] },
      dangerousAdverseEffects: { pt: ['Hipotensão severa em desidratados', 'Piora paradoxal de angina ao iniciar (taquicardia reflexa rara)'], es: ['Hipotensión severa en deshidratados', 'Empeoramiento paradójico de angina al iniciar (taquicardia refleja rara)'] },
      contraindications: {
        absolute: { pt: ['Hipotensão severa basal', 'Choque cardiogênico'], es: ['Hipotensión severa basal', 'Choque cardiogénico'] },
        relative: { pt: ['Estenose aórtica severa (vasodilatação com válvula obstruída → síncope)'], es: ['Estenosis aórtica severa (vasodilatación con válvula obstruida → síncope)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'A MECÂNICA DO TORNOZELO INCHADO: O edema NÃO é por retenção de sal/água — é mecânico (dilata artéria pré-capilar, não a veia). Furosemida é ERRO grosseiro: não resolve e desidrata. Tratamento: reduzir dose ou associar losartana (dilata a veia). INTERAÇÃO CRÍTICA: Sinvastatina + Anlodipino → limitar Sinvastatina a 20 mg/dia (risco de Rabdomiólise por inibição CYP3A4).', es: 'LA MECÁNICA DEL TOBILLO HINCHADO: El edema NO es por retención de sal/agua — es mecánico. Furosemida es ERROR: no funciona. Tratamiento: reducir dosis o asociar losartán. INTERACCIÓN CRÍTICA: Simvastatina + Amlodipino → limitar Simvastatina a 20 mg/día (riesgo de Rabdomiólisis por inhibición CYP3A4).' }
      },
      references: { pt: 'ALLHAT Trial; CAMELOT Trial; ESC/AHA Hypertension Guidelines 2023; FDA Label; Lexicomp 2026.', es: 'ALLHAT Trial; ESC/AHA Hypertension Guidelines 2023; FDA Label.' }
    },

/* ── NIFEDIPINA (ID canônico ANVISA) ────────────────────────────────── */
    "nifedipina": {
      name: { pt: 'Nifedipina', es: 'Nifedipino' },
      category: 'cardiologia',
      class: { pt: 'Bloqueador de Canais de Cálcio Diidropiridínico (Ação Rápida / OROS)', es: 'Bloqueador de Canales de Calcio Dihidropiridínico (Acción Rápida / OROS)' },
      indications: {
        pt: ['Hipertensão Arterial (formulação OROS/LP)', 'Urgência hipertensiva gestacional (formulação LP — primeira linha pela ACOG)', 'Angina vasoespástica', 'Tocolítico (off-label — relaxamento uterino)'],
        es: ['Hipertensión Arterial (formulación OROS/LP)', 'Urgencia hipertensiva gestacional (formulación LP — primera línea ACOG)', 'Angina vasoespástica', 'Tocolítico (off-label)']
      },
      commercialNames: { br: ['Adalat', 'Adalat OROS', 'Adalat Retard'], ar: ['Adalat', 'Nifelat'] },
      presentation: { pt: ['Cápsulas de Liberação Imediata (10 mg) — USO RESTRITO', 'Comprimidos OROS/Retard/LP (20 mg, 30 mg, 60 mg)'], es: ['Cápsulas de Liberación Inmediata (10 mg) — USO RESTRINGIDO', 'Comprimidos OROS/Retard/LP (20 mg, 30 mg, 60 mg)'] },
      mechanism: {
        pt: 'Bloqueia canais L vasculares com potente vasodilatação arterial. A cápsula de liberação imediata age em 5 min (bomba de vasodilatação). A versão OROS possui orifício a laser e funciona como bomba osmótica, liberando a droga gota a gota por 24 h sem picos plasmáticos.',
        es: 'Bloquea canales L vasculares con potente vasodilatación arterial. La cápsula de liberación inmediata actúa en 5 min. La versión OROS tiene un orificio láser y funciona como bomba osmótica, liberando la droga gota a gota por 24 h sin picos plasmáticos.'
      },
      dose: {
        adult: { pt: 'OROS/LP: 30–60 mg VO 1×/dia. Urgência gestacional: 10–20 mg LP, repetível a cada 20–30 min (máx 3 doses). A forma rápida oral só sob supervisão hospitalar.', es: 'OROS/LP: 30–60 mg VO 1×/día. Urgencia gestacional: 10–20 mg LP, repetible cada 20–30 min (máx 3 dosis).' },
        pediatric: { pt: 'Uso hospitalar pediátrico especializado apenas.', es: 'Uso hospitalario pediátrico especializado únicamente.' }
      },
      administration: { pt: ['NUNCA esmagar, partir ou mastigar a versão OROS/LP — risco de hipotensão letal. O fantasma do comprimido pode sair intacto nas fezes (normal). PROIBIDO uso sublingual da cápsula de 10 mg.'], es: ['NUNCA aplastar, partir o masticar la versión OROS/LP — riesgo de hipotensión letal. PROHIBIDO uso sublingual de la cápsula de 10 mg.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Reduzir doses drasticamente em disfunção hepática.', es: 'Reducir dosis drásticamente en disfunción hepática.' } },
      commonAdverseEffects: { pt: ['Hiperplasia gengival (gengivas crescem sobre os dentes no uso crônico)', 'Edema maleolar severo', 'Taquicardia reflexa e cefaleia pulsátil'], es: ['Hiperplasia gingival (encías crecen sobre los dientes)', 'Edema maleolar severo', 'Taquicardia refleja y cefalea pulsátil'] },
      dangerousAdverseEffects: { pt: ['ISQUEMIA CEREBRAL/MIOCÁRDICA (se usar cápsula de ação rápida via sublingual na crise hipertensiva — proibido mundialmente)'], es: ['ISQUEMIA CEREBRAL/MIOCÁRDICA (si usa cápsula de acción rápida vía sublingual — prohibido mundialmente)'] },
      contraindications: {
        absolute: { pt: ['USO SUBLINGUAL DA CÁPSULA DE 10 MG (Proibido — AVC isquêmico + infarto iatrogênico)'], es: ['USO SUBLINGUAL DE LA CÁPSULA DE 10 MG (Prohibido — ACV isquémico + infarto iatrogénico)'] },
        relative: { pt: ['Trânsito intestinal muito rápido (versão OROS não absorvida)'], es: ['Tránsito intestinal muy rápido (versión OROS no absorbida)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O ERRO MORTAL DO PRONTO-SOCORRO (NUNCA REPETIR): Na década de 90, furava-se a cápsula de 10 mg e pingava-se sob a língua em crises hipertensivas. Isso é IATROGENIA MORTAL. A pressão despenca em minutos → fluxo ao cérebro zera → AVC Isquêmico ou Infarto na cadeira da emergência. A nifedipina sublingual está PROIBIDA mundialmente pela FDA, ESC e SBC. Para urgência hipertensiva use formulações LP VO ou captopril 25 mg SL.', es: 'EL ERROR MORTAL DE URGENCIAS (NUNCA REPETIR): En los 90, se perforaba la cápsula bajo la lengua. Esto es IATROGENIA MORTAL. La presión cae en minutos → flujo al cerebro llega a cero → ACV Isquémico o Infarto en urgencias. La nifedipino sublingual está PROHIBIDA mundialmente.' }
      },
      references: { pt: 'ACOG Hypertension in Pregnancy 2023; AHA/ACC Hypertension Crisis Guidelines; Alerta FDA contra Nifedipina Sublingual; ESC 2023.', es: 'ACOG Hypertension in Pregnancy 2023; Alerta FDA contra Nifedipino Sublingual; ESC 2023.' }
    },

/* ── FELODIPINA (ID canônico ANVISA) ────────────────────────────────── */
    "felodipina": {
      name: { pt: 'Felodipina', es: 'Felodipino' },
      category: 'cardiologia',
      class: { pt: 'Bloqueador de Canais de Cálcio Diidropiridínico (2ª geração)', es: 'Bloqueador de Canales de Calcio Dihidropiridínico (2ª generación)' },
      indications: {
        pt: ['Hipertensão Arterial Sistêmica', 'Angina Pectoris Estável', 'Alternativa ao Anlodipino em pacientes com Insuficiência Cardíaca com FEVE reduzida (alta seletividade vascular)'],
        es: ['Hipertensión Arterial Sistémica', 'Angina Pectoris Estable', 'Alternativa al Amlodipino en IC con FEVI reducida']
      },
      commercialNames: { br: ['Splendil', 'Felodipina'], ar: ['Splendil'] },
      presentation: { pt: ['Comprimidos de Liberação Prolongada (ER) 2,5 mg, 5 mg e 10 mg'], es: ['Comprimidos de Liberación Prolongada (ER) 2,5 mg, 5 mg y 10 mg'] },
      mechanism: {
        pt: 'Seletividade Vascular Extrema: em doses terapêuticas tem efeito mínimo sobre contratilidade miocárdica, tornando-o seguro em IC severa onde Diltiazem e Verapamil matariam o paciente. Intensa vasodilatação periférica e coronariana.',
        es: 'Selectividad Vascular Extrema: en dosis terapéuticas tiene efecto mínimo sobre contractilidad miocárdica, haciéndolo seguro en IC severa. Intensa vasodilatación periférica y coronaria.'
      },
      dose: {
        adult: { pt: 'Início: 2,5–5 mg VO 1×/dia (manhã). Máximo: 10 mg/dia.', es: 'Inicio: 2,5–5 mg VO 1×/día (mañana). Máximo: 10 mg/día.' },
        pediatric: { pt: 'Segurança não estabelecida em crianças.', es: 'Seguridad no establecida en niños.' }
      },
      administration: { pt: ['Engolir INTEIRO, sem mastigar. NÃO ingerir com Suco de Toranja/Grapefruit (triplica absorção → hipotensão).'], es: ['Tragar ENTERO, sin masticar. NO ingerir con Jugo de Toronja/Pomelo (triplica absorción → hipotensión).'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade.', es: 'Sin necesidad.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Iniciar com 2,5 mg em cirróticos (depuração drasticamente reduzida).', es: 'Iniciar con 2,5 mg en cirróticos.' } },
      commonAdverseEffects: { pt: ['Edema maleolar moderado', 'Rubor facial e calor', 'Hiperplasia gengival (crescimento da gengiva)'], es: ['Edema maleolar moderado', 'Rubor facial y calor', 'Hiperplasia gingival'] },
      dangerousAdverseEffects: { pt: ['Síncope hipotensiva severa (se mastigar o comprimido ER ou ingerir com toranja ou inibidores de CYP3A4)'], es: ['Síncope hipotensivo severo (si mastica el comprimido ER o lo ingiere con pomelo o inhibidores CYP3A4)'] },
      contraindications: {
        absolute: { pt: ['Choque cardiogênico', 'IAM em curso com falência de bomba'], es: ['Choque cardiogénico', 'IAM en curso con falla de bomba'] },
        relative: { pt: ['Taquicardia basal severa (vasodilatação intensa dispara taquicardia reflexa)'], es: ['Taquicardia basal severa'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'A SÍNDROME DO DENTISTA (E DA TORANJA): Felodipina causa Hiperplasia Gengival — gengiva inflama e cresce sobre os dentes em uso crônico. Avise o paciente para higiene oral rigorosa. A interação com Suco de Toranja (Grapefruit) é o exemplo farmacológico mais clássico de inibição de CYP3A4 intestinal: triplica a biodisponibilidade e pode causar choque vasoplégico.', es: 'EL SÍNDROME DEL DENTISTA (Y DE LA TORONJA): Felodipino causa Hiperplasia Gingival. La interacción con Jugo de Toronja (Pomelo) triplica la biodisponibilidad y puede causar choque vasopléjico.' }
      },
      references: { pt: 'HOT Trial; ESC/AHA Hypertension Guidelines 2023; FDA Label; Lexicomp 2026.', es: 'HOT Trial; ESC/AHA Hypertension Guidelines 2023.' }
    },

/* ── LERCANIDIPINA (ID canônico ANVISA) ─────────────────────────────── */
    "lercanidipina": {
      name: { pt: 'Lercanidipina (Cloridrato de)', es: 'Lercanidipino (Clorhidrato de)' },
      category: 'cardiologia',
      class: { pt: 'Bloqueador de Canais de Cálcio Diidropiridínico (3ª geração — Alta Lipofilicidade)', es: 'Bloqueador de Canales de Calcio Dihidropiridínico (3ª generación — Alta Lipofilicidad)' },
      indications: {
        pt: ['Hipertensão Arterial Essencial leve a moderada', 'Substituto de Anlodipino quando edema periférico é insuportável (incidência de edema é a metade)'],
        es: ['Hipertensión Arterial Esencial leve a moderada', 'Sustituto de Amlodipino cuando el edema periférico es intolerable (incidencia de edema es la mitad)']
      },
      commercialNames: { br: ['Zanidip', 'Lercanidipina'], ar: ['Zanidip'] },
      presentation: { pt: ['Comprimidos revestidos 10 mg e 20 mg'], es: ['Comprimidos recubiertos 10 mg y 20 mg'] },
      mechanism: {
        pt: 'Evolução Lipofílica: alta lipofilicidade faz com que o fármaco se "esconda" dentro da membrana lipídica das células arteriais, mantendo o efeito por 24 h mesmo após eliminação plasmática. Canal T adicional (em menor escala) contribui para menor taquicardia reflexa. Resultado clínico: mesmo eficácia anti-hipertensiva do anlodipino com METADE do edema.',
        es: 'Evolución Lipofílica: alta lipofilicidad hace que el fármaco se "esconda" dentro de la membrana lipídica de las células arteriales, manteniendo el efecto por 24 h incluso tras la eliminación plasmática. Resultado clínico: misma eficacia que amlodipino con LA MITAD del edema.'
      },
      dose: {
        adult: { pt: '10 mg VO 1×/dia, 15 min ANTES do café da manhã (estômago vazio). Pode aumentar para 20 mg/dia após 2 semanas.', es: '10 mg VO 1×/día, 15 min ANTES del desayuno (estómago vacío). Puede aumentarse a 20 mg/día tras 2 semanas.' },
        pediatric: { pt: 'Não indicado.', es: 'No indicado.' }
      },
      administration: { pt: ['REGRA CONTRAINTUITIVA: tomar com estômago VAZIO (15 min antes de refeição). Refeição GORDUROSA triplica absorção → hipotensão súbita. Não usar com toranja.'], es: ['REGLA CONTRAINTUITIVA: tomar con estómago VACÍO (15 min antes de comida). Comida GRASOSA triplica absorción → hipotensión súbita. No usar con toronja.'] },
      renalAdjustment: { required: true, message: { pt: 'Evitar em ClCr < 30 mL/min.', es: 'Evitar en ClCr < 30 mL/min.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Contraindicada na insuficiência hepática grave.', es: 'Contraindicada en insuficiencia hepática grave.' } },
      commonAdverseEffects: { pt: ['Cefaleia e rubor (menos taquicardia reflexa que gerações anteriores)', 'Edema maleolar (metade da incidência do anlodipino)', 'Fadiga'], es: ['Cefalea y rubor (menos taquicardia refleja que generaciones previas)', 'Edema maleolar (mitad de incidencia que amlodipino)', 'Fatiga'] },
      dangerousAdverseEffects: { pt: ['Choque vasoplégico (overdose com refeição gordurosa)'], es: ['Choque vasopléjico (sobredosis con comida grasa)'] },
      contraindications: {
        absolute: { pt: ['Estenose aórtica severa', 'Gravidez e lactação', 'Insuficiência hepática grave', 'Co-administração com cetoconazol/itraconazol (inibidores potentes CYP3A4 — CI absoluta em bula)'], es: ['Estenosis aórtica severa', 'Embarazo y lactancia', 'Insuficiencia hepática grave', 'Co-administración con ketoconazol/itraconazol (CI absoluta)'] },
        relative: { pt: ['DRC estágio 4–5', 'Doença do nó sinusal sem marcapasso'], es: ['ERC estadio 4–5', 'Enfermedad del nodo sinusal sin marcapasos'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O RESGATE DA BOTA APERTADA: É o trunfo quando o paciente retorna queixando que não consegue calçar o sapato com anlodipino. A troca para Lercanidipina mantém PA ótima e o edema some em semanas. ATENÇÃO DIETÉTICA: se o paciente comer um ovo frito antes da pílula, a absorção dispara e ele pode desmaiar.', es: 'EL RESCATE DE LA BOTA APRETADA: Es el as cuando el paciente no puede ponerse el zapato con amlodipino. El cambio a Lercanidipino mantiene PA óptima y el edema desaparece. ATENCIÓN DIETÉTICA: si come algo grasoso antes de la píldora, puede desmayarse.' }
      },
      references: { pt: 'ELLE Study; LEAD Study; ESC/ESH Hypertension Guidelines 2023; EMA Label; Lexicomp 2026.', es: 'ELLE Study; ESC/ESH Hypertension Guidelines 2023; EMA Label.' }
    },

/* ── MANIDIPINA (ID canônico ANVISA) ────────────────────────────────── */
    "manidipina": {
      name: { pt: 'Manidipina', es: 'Manidipino' },
      category: 'cardiologia',
      class: { pt: 'Bloqueador de Canais de Cálcio Diidropiridínico (3ª geração — Duplo Canal L+T)', es: 'Bloqueador de Canales de Calcio Dihidropiridínico (3ª generación — Doble Canal L+T)' },
      indications: {
        pt: ['Hipertensão Arterial Essencial', 'Hipertensão em Diabéticos com Microalbuminúria (efeito nefroprotetor por bloqueio de canal T na artéria eferente glomerular)'],
        es: ['Hipertensión Arterial Esencial', 'Hipertensión en Diabéticos con Microalbuminuria (efecto nefroprotector por bloqueo del canal T en la arteria eferente glomerular)']
      },
      commercialNames: { br: ['Manidon'], ar: ['Artedil'] },
      presentation: { pt: ['Comprimidos 10 mg e 20 mg'], es: ['Comprimidos 10 mg y 20 mg'] },
      mechanism: {
        pt: 'Protetor dos Filtros Renais: bloqueia canais de cálcio TIPO L (vasos periféricos) e TIPO T (presente na artéria eferente glomerular). Os outros BCC-DHP dilatam só a artéria aferente (aumenta pressão no glomérulo, destruindo o rim diabético). O Manidipino dilata TAMBÉM a eferente → reduz pressão intraglomerular → protéinuria cai (análogo aos IECAs sem os efeitos colaterais de potássio/tosse).',
        es: 'Protector de los Filtros Renales: bloquea canales de calcio TIPO L (vasos periféricos) y TIPO T (arteria eferente glomerular). Los otros BCC-DHP solo dilatan la aferente (aumenta presión glomerular). El Manidipino dilata TAMBIÉN la eferente → reduce presión intraglomerular → proteinuria cae (análogo a IECAs sin hiperpotasemia/tos).'
      },
      dose: {
        adult: { pt: 'Início: 10 mg VO 1×/dia, após o café da manhã. Após 1–2 semanas, pode subir para 20 mg.', es: 'Inicio: 10 mg VO 1×/día, tras el desayuno. Tras 1–2 semanas, puede subir a 20 mg.' },
        pediatric: { pt: 'Não indicado.', es: 'No indicado.' }
      },
      administration: { pt: ['Tomar SEMPRE pela manhã APÓS refeição (ao contrário da lercanidipina).'], es: ['Tomar SIEMPRE por la mañana TRAS la comida (al contrario de la lercanidipina).'] },
      renalAdjustment: { required: false, message: { pt: 'Seguro e indicado em DRC leve-moderada (nefroprotetor).', es: 'Seguro e indicado en ERC leve-moderada (nefroprotector).' } },
      hepaticAdjustment: { required: true, message: { pt: 'Não exceder 10 mg/dia em disfunção hepática leve-moderada. Evitar na severa.', es: 'No exceder 10 mg/día en disfunción hepática leve-moderada. Evitar en severa.' } },
      commonAdverseEffects: { pt: ['Palpitações iniciais (desaparecem com o tempo)', 'Cefaleia e calor facial', 'Edema periférico leve (menor que anlodipino)'], es: ['Palpitaciones iniciales (desaparecen con el tiempo)', 'Cefalea y calor facial', 'Edema periférico leve (menor que amlodipino)'] },
      dangerousAdverseEffects: { pt: ['Hipotensão postural excessiva em idosos'], es: ['Hipotensión postural excesiva en ancianos'] },
      contraindications: {
        absolute: { pt: ['Angina instável ativa', 'IAM há menos de 1 mês'], es: ['Angina inestable activa', 'IAM hace menos de 1 mes'] },
        relative: { pt: ['Disfunção hepática não monitorada'], es: ['Disfunción hepática no monitorizada'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O SUBSTITUTO INTELIGENTE DO IECA: Se o paciente diabético não tolerar IECA (tosse) ou BRA (hiperpotassemia), o Manidipino é o anti-hipertensivo de resgate que exerce proteção renal SIMILAR sem afetar o potássio. É o único BCC-DHP com evidência de redução de microalbuminúria em diabéticos (AMANDIP Study).', es: 'EL SUSTITUTO INTELIGENTE DEL IECA: Si el paciente diabético no tolera IECA (tos) o ARA (hiperpotasemia), el Manidipino es el antihipertensivo de rescate que ejerce protección renal SIMILAR sin afectar el potasio (AMANDIP Study).' }
      },
      references: { pt: 'AMANDIP Study; ESC Diabetic Nephropathy Guidelines; ESC/ESH Hypertension Guidelines 2023; EMA Label; Lexicomp 2026.', es: 'AMANDIP Study; ESC Diabetic Nephropathy Guidelines; ESC/ESH Hypertension Guidelines 2023.' }
    }

  }); /* fim Object.assign CARDIOLOGIA_DRUGS_DB — BUILD 426 / ONDA 51
         (anlodipino · nifedipina · felodipina · lercanidipina · manidipina)
         ANTI-DUPLICAÇÃO: IDs canônicos ANVISA — coexistência com cardio.js
         (CARDIO_DRUGS_DB) via namespaces distintos, sem colisão de runtime */

  /* ─── GUARD BUILD 437 ─── */
  if (typeof window.CARDIOLOGIA_DRUGS_DB !== 'object' || window.CARDIOLOGIA_DRUGS_DB === null) return;

  Object.assign(window.CARDIOLOGIA_DRUGS_DB, {

    /* ── TRANDOLAPRIL ───────────────────────────────────────────────── */
    "trandolapril": {
      name: { pt: 'Trandolapril', es: 'Trandolapril' },
      category: 'cardiologia',
      class: { pt: 'Inibidor da Enzima Conversora de Angiotensina (IECA) de Alta Lipofilia', es: 'Inhibidor de la Enzima Convertidora de Angiotensina (IECA) de Alta Lipofilia' },
      indications: {
        pt: ['Hipertensão Arterial Sistêmica', 'Disfunção Ventricular Esquerda pós-Infarto Agudo do Miocárdio (melhora de sobrevida global)', 'Nefropatia Diabética com microalbuminúria'],
        es: ['Hipertensión Arterial Sistémica', 'Disfunción Ventricular Izquierda post-Infarto de Miocardio', 'Nefropatía Diabética']
      },
      commercialNames: { br: ['Gopten'], ar: ['Gopten', 'Udrik'] },
      presentation: { pt: ['Cápsulas duras 0,5 mg, 1 mg, 2 mg e 4 mg'], es: ['Cápsulas 0,5 mg, 1 mg, 2 mg y 4 mg'] },
      mechanism: {
        pt: 'O IECA mais Lipofílico da História. É um pró-fármaco convertido no fígado no metabólito ativo Trandolaprilato. A sua grande jogada de engenharia molecular é a sua lipofilia extrema (afinidade por gordura). Ele atravessa as barreiras dos tecidos com facilidade e se liga à ECA endotelial de forma 10 vezes mais forte que o Captopril. Bloqueia o eixo RAA tecidual por mais de 24 a 36 horas, impedindo de forma implacável o remodelamento cardíaco pós-infarto.',
        es: 'Profármaco convertido en Trandolaprilat. Es el IECA con mayor lipofilia de su clase, lo que le permite una penetración tisular excepcional. Posee una afinidad de unión por la ECA endotelial vascular extremadamente alta y duradera, suprimiendo el eje RAA por más de 24-36 horas y frenando el remodelado cardíaco.'
      },
      dose: {
        adult: {
          pt: 'Hipertensão: Iniciar com 1 mg a 2 mg via oral, UMA VEZ ao dia. Ajustar até 4 mg/dia. Pós-Infarto (Estudo TRACE): Iniciar com 0,5 mg ao dia, escalonando até o alvo de 4 mg/dia.',
          es: 'Hipertensión: Iniciar con 1 mg a 2 mg vía oral, UNA VEZ al día. Máx 4 mg/día. Post-Infarto: Iniciar con 0,5 mg al día, escalonando hasta la meta de 4 mg/día.'
        },
        pediatric: {
          pt: 'Segurança e eficácia não estabelecidas em pediatria.',
          es: 'No recomendado en niños.'
        }
      },
      administration: { pt: ['Uso oral diário, preferencialmente pela manhã. Pode ser administrado com ou sem alimentos, mantendo absorção estável.'], es: ['Uso oral diario, por la mañana. Puede tomarse con o sin alimentos.'] },
      renalAdjustment: { required: true, message: { pt: 'Se ClCr < 30 mL/min, reduzir a dose inicial obrigatória para 0,5 mg ao dia, monitorando potássio.', es: 'Si ClCr < 30 mL/min, dosis inicial reducida a 0,5 mg al día.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Em cirrose hepática severa, a conversão do pró-fármaco é mais lenta. Iniciar com 0,5 mg ao dia.', es: 'En cirrosis grave, iniciar con 0,5 mg al día debido a metabolismo lento.' } },
      commonAdverseEffects: { pt: ['Tosse seca irritativa de padrão crônico', 'Tontura postural e hipotensão na primeira dose', 'Hipercalemia leve'], es: ['Tos seca irritativa', 'Mareo postural e hipotensión de primera dosis', 'Hiperpotasemia leve'] },
      dangerousAdverseEffects: { pt: ['ANGIOEDEMA LETAL de glote e face', 'Insuficiência renal funcional anúrica aguda (em rim único ou estenose renal)'], es: ['ANGIOEDEMA LETAL', 'Insuficiencia renal aguda funcional'] },
      contraindications: {
        absolute: { pt: ['Gravidez (Black Box de classe por destruição renal fetal)', 'Histórico de angioedema induzido por qualquer IECA'], es: ['Embarazo (Caja Negra por toxicidad fetal)', 'Historial de angioedema'] },
        relative: { pt: ['Uso associado com diuréticos poupadores de potássio ou suplementos puros'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O SALVADOR DO CORAÇÃO INFARTADO (O ESTUDO TRACE): O Trandolapril ganhou a coroa da cardiologia após o estudo europeu TRACE. Ele provou que dar o remédio logo após um infarto grave com disfunção de bomba reduz a mortalidade global em 22% a longo prazo, porque impede mecanicamente que o coração do paciente cresça "torto e dilatado" (remodelamento).', es: 'EL REDENTOR POST-INFARTO (ESTUDIO TRACE): Demostró que iniciar Trandolapril tras un infarto agudo con disfunción ventricular reduce la mortalidad global un 22% a largo prazo, al bloquear el remodelado patológico del ventrículo.' }
      },
      references: { pt: 'TRACE Trial (Lancet 1995 - Trandolapril Cardiac Evaluation); Diretrizes da ESC/SBC sobre Infarto Agudo do Miocárdio.', es: 'TRACE Trial (Lancet 1995); Directrices de la Sociedad Europea de Cardiología (ESC).' }
    },

    /* ── PERHEXILINA ────────────────────────────────────────────────── */
    "perhexilina": {
      name: { pt: 'Perhexilina (Maleato de)', es: 'Perhexilina (Maleato de)' },
      category: 'cardiologia',
      class: { pt: 'Modulador do Metabolismo Energético Miocárdico / Inibidor de CPT-1', es: 'Modulador del Metabolismo Energético Miocárdico / Inhibidor de CPT-1' },
      indications: {
        pt: ['Tratamento de Angina Pectoris Crônica Grave refratária que não responde a outros antianginosos clássicos', 'Manejo de sintomas em pacientes com Cardiomiopatia Hipertrófica Obstrutiva'],
        es: ['Tratamiento de Angina Pectoris Crónica Grave refractaria', 'Manejo de síntomas en Cardiomiopatía Hipertrófica Obstructiva']
      },
      commercialNames: { br: ['Pexsig (Importação regulada)'], ar: ['Pexsig'] },
      presentation: { pt: ['Comprimidos de 100 mg'], es: ['Comprimidos de 100 mg'] },
      mechanism: {
        pt: 'O Protetor de Oxigênio Mitocondrial. A Perhexilina inibe a enzima CPT-1 (Carnitina Palmitoiltransferase-1) dentro das mitocôndrias do coração. Ao bloquear essa enzima, ela proíbe o coração de queimar Ácidos Graxos para gerar energia, forçando o miocárdio a queimar GLICOSE. A queima de glicose consome muito MENOS oxigênio por molécula de ATP gerada. Isso faz com que o coração do paciente precise de menos oxigênio para funcionar, eliminando a dor da angina.',
        es: 'Inhibidor de la enzima mitocondrial carnitina palmitoiltransferasa-1 (CPT-1). Cambia el metabolismo energético del miocardio de la oxidación de ácidos grasos a la oxidación de glucosa, la cual es metabólicamente más eficiente y requiere menos oxígeno por mol de ATP generado, aliviando la isquemia miocárdica.'
      },
      dose: {
        adult: {
          pt: 'Início: 100 mg via oral, UMA VEZ ao dia. Requer monitoramento rigoroso das concentrações no sangue (janela terapêutica estreita: 0,15 a 0,60 mg/L). Ajustar até um teto máximo de 300 mg/dia.',
          es: 'Inicio: 100 mg vía oral, UNA VEZ al día. Requiere monitoreo terapéutico obligatorio de niveles séricos (Rango: 0,15 a 0,60 mg/L).'
        },
        pediatric: {
          pt: 'Não indicado em pediatria.',
          es: 'No indicado.'
        }
      },
      administration: { pt: ['Uso oral diário. OBRIGATÓRIO dosar o nível sanguíneo da droga após 1 a 2 semanas do início do tratamento devido à variação genética de metabolismo via CYP2D6.'], es: ['Uso oral diario. Obligatorio dosar concentraciones plasmáticas para evitar neurotoxicidad severa.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste estrito de dose renal.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: true, message: { pt: 'ALTAMENTE PERIGOSO. Metabolizado pela via CYP2D6. Se o paciente for um "metabolizador lento" genético, a droga acumula, causando cirrose e destruição dos nervos. Monitorar transaminases.', es: 'Metabolizado por CYP2D6. Contraindicado en insuficiencia hepática grave por alto riesgo de hepatotoxicidad celular.' } },
      commonAdverseEffects: { pt: ['Náuseas e tonturas iniciais', 'Fadiga e cefaleia', 'Flutuações de peso'], es: ['Náuseas y mareos', 'Fatiga y cefalea', 'Pérdida de peso'] },
      dangerousAdverseEffects: { pt: ['HEPATOTOXICIDADE SEVERA (Cirrose fulminante e infiltração de gordura fosfolipídica)', 'NEUROPATIA PERIFÉRICA GRAVE (Fraqueza nas pernas e dormência incapacitante se os níveis passarem de 0,6 mg/L)'], es: ['HEPATOTOXICIDAD GRAVE (Cirrosis fulminante)', 'NEUROPATÍA PERIFÉRICA GRAVE (Pérdida de la marcha por mielinolisis axonal)'] },
      contraindications: {
        absolute: { pt: ['Doença hepática ativa pré-existente', 'Impossibilidade laboratorial de dosar os níveis plasmáticos da droga'], es: ['Enfermedad hepática activa', 'Imposibilidad de realizar monitoreo de niveles en sangre'] },
        relative: { pt: ['Uso concomitante com inibidores potentes de CYP2D6 (como Fluoxetina ou Paroxetina)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A CAIXA PRETA DOS NÍVEIS SANGUÍNEOS: A Perhexilina é uma das drogas mais perigosas da cardiologia se usada às cegas. Causa fosfolipidose generalizada. Se o nível passar do teto de 0,60 mg/L, o paciente desenvolve neuropatia que tira o movimento dos pés e destrói o fígado. Só use se puder dosar o exame de sangue.', es: 'ALERTA DE SEGURIDAD EXTREMA: Si los niveles superan los 0,60 mg/L, acumula fosfolípidos en los tejidos provocando polineuropatía desmielinizante severa y cirrosis. Es mandatorio suspender si hay hormigueo en extremidades.' }
      },
      references: { pt: 'CARISA Trial (Metabolic support); European Heart Journal Antianginal Guide; FDA Special Access Data Pexsig.', es: 'European Heart Journal Antianginal Guidelines; Manual de Toxicología Clínica de Micomedex.' }
    },

    /* ── ALISQUIRENO ────────────────────────────────────────────────── */
    "alisquireno": {
      name: { pt: 'Alisquireno (Hemifumarato de)', es: 'Aliskiren (Hemifumarato de)' },
      category: 'cardiologia',
      class: { pt: 'Inibidor Direto da Renina / Bloqueador Primário do Eixo RAA', es: 'Inhibidor Directo de la Renina / Bloqueador Primario del Eje RAA' },
      indications: {
        pt: ['Tratamento da Hipertensão Arterial Sistêmica isolada ou em combinação com outros anti-hipertensivos (Exceto IECA/BRA)'],
        es: ['Tratamiento de la Hipertensión Arterial Sistémica']
      },
      commercialNames: { br: ['Rasilez'], ar: ['Rasilez', 'Rasilez HCT (Assoc)'] },
      presentation: { pt: ['Comprimidos revestidos 150 mg e 300 mg'], es: ['Comprimidos 150 mg y 300 mg'] },
      mechanism: {
        pt: 'O Bloqueador da Origem do Eixo. O Alisquireno atua no topo do sistema. Ele liga-se diretamente no sítio ativo da Renina fabricada pelos rins. Ao travar a Renina, ele impede mecanicamente que o Angiotensinogênio vire Angiotensina I. Sem Angiotensina I, não há substrato para a ECA trabalhar, cortando por completo a produção de Angiotensina II e Aldosterona na raiz do problema.',
        es: 'Inhibidor directo, potente y selectivo de la renina humana. Al unirse a la enzima, bloquea la conversión de angiotensinógeno en Angiotensina I, disminuyendo los niveles de Angiotensina II y Aldosterona desde el paso inicial y limitante del sistema.'
      },
      dose: {
        adult: {
          pt: 'Início: 150 mg via oral, UMA VEZ ao dia. Se a pressão não atingir o alvo após 2-4 semanas, a dose pode ser elevada para 300 mg ao dia.',
          es: 'Inicio: 150 mg vía oral, UNA VEZ al día. Puede incrementarse a 300 mg al día tras 2-4 semanas de evaluación.'
        },
        pediatric: {
          pt: 'Contraindicado em crianças menores de 2 anos devido ao risco imenso de toxicidade renal e colapso por hipotensão.',
          es: 'Contraindicado en menores de 2 años.'
        }
      },
      administration: { pt: ['Deve ser tomado uma vez ao dia, sempre no mesmo horário. EVITAR TOMAR JUNTO COM REFEIÇÕES RICAS EM GORDURA, pois elas reduzem a absorção da droga em mais de 70%, gerando falha terapêutica.'], es: ['Tomar siempre a la misma hora. EVITAR COMIDAS ALTAS EN GRASA, ya que disminuyen su absorción un 70%, anulando su eficacia.'] },
      renalAdjustment: { required: true, message: { pt: 'Se ClCr < 30 mL/min, usar com extrema cautela pelo risco severo de hipercalemia e piora aguda da função renal.', es: 'Contraindicado el uso asociado con IECA/BRA si hay falla renal crónica.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste prévio.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Diarreia dose-dependente (afeta ~2% com 300mg)', 'Hipercalemia leve', 'Tontura e fadiga'], es: ['Diarrea dosis-dependiente', 'Hiperpotasemia leve', 'Mareo'] },
      dangerousAdverseEffects: { pt: ['Insuficiência Renal Aguda funcional catastrófica', 'Angioedema de glote e anafilaxia', 'Hipotensão severa com síncope'], es: ['Insuficiencia Renal Aguda', 'Angioedema de glotis', 'Hipotensión severa'] },
      contraindications: {
        absolute: { pt: ['USO COMBINADO COM IECA (Enalapril) OU BRA (Losartana) EM PACIENTES DIABÉTICOS (Estudo ALTITUDE provou que causa AVC e falência renal)', 'Gravidez (causa morte renal fetal)'], es: ['USO COMBINADO CON IECA O ARA-II EN PACIENTES DIABÉTICOS (Estudio ALTITUDE)', 'Embarazo'] },
        relative: { pt: ['Estenose bilateral de artéria renal'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O DESASTRE DO ESTUDO ALTITUDE (NÃO MISTURE OS BLOQUEADORES): O Alisquireno foi desenhado para revolucionar a pressão. Mas o grande estudo ALTITUDE trouxe um banho de água fria: misturar o Alisquireno com Losartana ou Enalapril em diabéticos aumentou assustadoramente a taxa de AVC, infarto e paralisação dos rins. Nunca combine este remédio com outro bloqueador do eixo.', es: 'EL DESASTRE DEL ESTUDIO ALTITUDE: Está PROHIBIDO combinar Aliskiren con Enalapril o Losartán en pacientes con diabetes o falla renal. El estudio demostró que esta doble combinación dispara los ACV, la hiperpotasemia crítica y la necesidad de diálisis de emergencia.' }
      },
      references: { pt: 'ALTITUDE Trial (NEJM 2012 - Aliskiren in Type 2 Diabetes); AVOID Trial (Nefropatia); Diretrizes SBC Hipertensão.', es: 'ALTITUDE Trial (NEJM 2012); AVOID Trial; Directrices de la Sociedad Argentina de Hipertensión (SAHA).' }
    },

    /* ── AMLODIPINO + VALSARTANA ────────────────────────────────────── */
    "amlodipino_valsartana": {
      name: { pt: 'Amlodipino + Valsartana', es: 'Amlodipino + Valsartán' },
      category: 'cardiologia',
      class: { pt: 'Combinação Anti-hipertensiva Sinérgica / Bloqueador de Cálcio + BRA', es: 'Combinación Antihipertensiva Sinérgica / Bloqueador de Calcio + ARA-II' },
      indications: {
        pt: ['Tratamento da Hipertensão Arterial Sistêmica em pacientes cuja pressão não é controlada com monoterapia (Segunda linha em diante)'],
        es: ['Tratamiento de la Hipertensión Arterial Sistémica cuando falla la monoterapia']
      },
      commercialNames: { br: ['Exforge', 'Brasart BCC', 'Valsatress AM'], ar: ['Exforge', 'Simval AM'] },
      presentation: { pt: ['Comprimidos revestidos nas dosagens 5/160 mg, 10/160 mg e 10/320 mg'], es: ['Comprimidos de 5/160 mg, 10/160 mg y 10/320 mg'] },
      mechanism: {
        pt: 'O Combo Perfeito Sem Inchaço. Junta dois mecanismos brilhantes. O Amlodipino relaxa a artéria que entra no capilar (vasodilatação pré-capilar). A Valsartana bloqueia o receptor AT1 da Angiotensina II, relaxando a veia que SAI do capilar (vasodilatação pós-capilar). Como os dois lados do vaso abrem juntos, a pressão no microvaso equilibra e o plasma não vaza para a perna. A pressão despenca e a incidência de edema maleolar cai pela metade.',
        es: 'Combinación sinérgica de un bloqueante de canales de calcio (Amlodipino) y un antagonista de los receptores de angiotensina II (Valsartán). El amlodipino induce vasodilatación arteriolar (precapilar), mientras que el valsartán promueve venodilatación (postcapilar). Esta acción equilibrada reduce la presión hidrostática en el microvaso, disminuyendo el edema en tobillos.'
      },
      dose: {
        adult: {
          pt: '1 comprimido via oral, UMA VEZ ao dia, de manhã. Titular a dosagem conforme a resposta de queda pressórica (ex: subir de 5/160mg para 10/160mg após 2 semanas se necessário).',
          es: '1 comprimido vía oral, UNA VEZ al día por la mañana. Se titula escalonando las dosis según objetivos terapéuticos.'
        },
        pediatric: {
          pt: 'Não indicado para crianças.',
          es: 'No indicado.'
        }
      },
      administration: { pt: ['Uso oral contínuo diário. Pode ser administrado com ou sem alimentos. Recomenda-se tomar sempre no mesmo horário todos os dias.'], es: ['Uso oral continuo. Puede tomarse con o sin alimentos.'] },
      renalAdjustment: { required: true, message: { pt: 'Se ClCr < 30 mL/min, usar com monitoramento rigoroso devido ao componente Valsartana (risco de hipercalemia). Não requer ajuste se ClCr > 30.', es: 'Precaución extrema si ClCr < 30 mL/min por riesgo de hiperpotasemia.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Usar com extremo cuidado em hepatopatias severas ou obstrução biliar devido ao clearance de amlodipino estar lentificado.', es: 'Reducir dosis inicial al mínimo en insuficiencia hepática por acumulación de amlodipino.' } },
      commonAdverseEffects: { pt: ['Tontura postural transitória', 'Edema periférico leve (muito menor que amlodipino isolado)', 'Cefaleia e fadiga'], es: ['Mareo postural', 'Edema periférico leve', 'Cefalea y fatiga'] },
      dangerousAdverseEffects: { pt: ['Insuficiência renal funcional aguda', 'Hipotensão severa com síncope na primeira tomada', 'Hipercalemia severa'], es: ['Insuficiencia renal funcional', 'Síncope hipotensivo', 'Hiperpotasemia'] },
      contraindications: {
        absolute: { pt: ['Gravidez (Valsartana causa parada de filtração e defeito ósseo fetal)', 'Uso associado com Alisquireno em diabéticos'], es: ['Embarazo (Absoluto)', 'Uso concomitante con Aliskiren en pacientes diabéticos'] },
        relative: { pt: ['Estenose aórtica severa ou estenose bilateral de artéria renal'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'A MECÂNICA DA TROCA ESPERTA: Se o seu paciente usa Amlodipino 10mg e chega reclamando que o pé parece um "pão de forma" de tão inchado, o erro é dar diurético. A conduta inteligente é migrar para o combo Exforge. A Valsartana dilata as veias que o amlodipino ignorou, puxando o líquido da perna de volta para o vaso e murchando o pé do doente.', es: 'EL RESCATE MECÁNICO DEL EDEMA: En lugar de sumar Furosemida (error iatrogénico común) ante la hinchazón causada por amlodipino, la asociación con Valsartán equilibra la microcirculación al abrir el esfínter postcapilar venoso, eliminando el edema en pocas semanas.' }
      },
      references: { pt: 'EXFORGE Clinical Development Program; JNC 8 Hypertension Guidelines; Diretrizes de HAS da SBC 2020.', es: 'EXFORGE Clinical Development Program; Guías de Hipertensión de la ESC/ESH.' }
    },

    /* ── AMLODIPINO + LOSARTANA ─────────────────────────────────────── */
    "amlodipino_losartana": {
      name: { pt: 'Amlodipino + Losartana Potássica', es: 'Amlodipino + Losartán Potásico' },
      category: 'cardiologia',
      class: { pt: 'Combinação Anti-hipertensiva / Bloqueador de Cálcio + Antagonista AT1', es: 'Combinación Antihipertensiva / Bloqueador de Calcio + Antagonista AT1' },
      indications: {
        pt: ['Hipertensão Arterial Sistêmica em pacientes que necessitam de terapia combinada com alta adesão (comprimido único de baixo custo)'],
        es: ['Hipertensión Arterial Sistémica que requiere terapia combinada en un solo comprimido de bajo costo']
      },
      commercialNames: { br: ['Aradois AM', 'Lotar', 'Corus HAM'], ar: ['Aradois AM'] },
      presentation: { pt: ['Comprimidos revestidos combinados 2,5/50 mg, 5/50 mg e 5/100 mg'], es: ['Comprimidos de 2,5/50 mg, 5/50 mg y 5/100 mg'] },
      mechanism: {
        pt: 'O Combo de Alto Acesso Nacional. Une a ação prolongada do Amlodipino (vasodilatação periférica arterial por 24h) com o bloqueio do receptor AT1 pela Losartana. A Losartana adiciona uma vantagem biológica única: possui um efeito URICOSÚRICO discreto (obriga o rim a jogar o Ácido Úrico fora pela urina). Isso neutraliza o aumento de ácido úrico que pode ocorrer em pacientes predispostos à gota.',
        es: 'Combinación de amlodipino y losartán. Además del sinergismo tensional arteriovenoso capilar, el losartán aporta un efecto uricosúrico intrínseco a nivel del túbulo renal proximal, lo que contrarresta la tendencia a la hiperuricemia que pueden inducir los bloqueantes de calcio a largo plazo.'
      },
      dose: {
        adult: {
          pt: '1 comprimido via oral, UMA VEZ ao dia, pela manhã ou à noite. Dose máxima restrita ao teto dos componentes (5/100 mg ou conforme apresentação disponível).',
          es: '1 comprimido vía oral, UNA VEZ al día. Ajustable según control de cifras de presión arterial.'
        },
        pediatric: {
          pt: 'Não indicado.',
          es: 'No indicado.'
        }
      },
      administration: { pt: ['Uso oral diário. Pode ser ingerido de estômago cheio ou vazio. Manter o uso contínuo mesmo com níveis pressóricos ótimos.'], es: ['Uso oral diario. Puede tomarse con o sin alimentos de manera indefinida.'] },
      renalAdjustment: { required: true, message: { pt: 'Se ClCr < 30 mL/min, risco de hipercalemia funcional por acúmulo de losartana; monitorar creatinina sérica a cada 3 meses.', es: 'Monitorear potasio y creatinina si hay insuficiencia renal moderada a grave.' } },
      hepaticAdjustment: { required: true, message: { pt: 'A Losartana precisa do fígado para virar seu metabólito ativo EXP3174. Em cirróticos, o efeito pode ser menor, mas o amlodipino pode acumular. Iniciar com doses mínimas (2,5/50 mg).', es: 'Cirrosis hepática ralentiza la activación de losartán y acumula amlodipino; iniciar con dosis mínima.' } },
      commonAdverseEffects: { pt: ['Tontura ao levantar rápido (hipotensão ortostática)', 'Cefaleia de tração vascular', 'Cãibras musculares leves'], es: ['Mareo postural', 'Cefalea', 'Calambres musculares leves'] },
      dangerousAdverseEffects: { pt: ['Insuficiência renal aguda funcional anúrica', 'Hipercalemia crítica arritmogênica', 'Angioedema laríngeo (Raro)'], es: ['Insuficiencia renal aguda', 'Hiperpotasemia crítica', 'Angioedema'] },
      contraindications: {
        absolute: { pt: ['Gravidez (Contraindicação absoluta black box — risco de malformação e morte renal fetal)'], es: ['Embarazo (Contraindicación absoluta por riesgo de insuficiencia renal y muerte fetal)'] },
        relative: { pt: ['Histórico de gota severa recorrente (embora a losartana ajude, monitorar eletrólitos)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O ALERTA DA PARADA NA DIARREIA: Se o paciente que toma Lotar/Aradois AM pegar uma infecção intestinal grave com vômitos e diarreia volumosa, ele vai desidratar. Manter o remédio ativa um bloqueio que impede o rim de se defender da desidratação, causando Insuficiência Renal Aguda. A conduta certa é SUSPENDER temporariamente o combo até curar a diarreia.', es: 'EL ALERTA DE LA DESHIDRATACIÓN AGUDA: Si el paciente presenta un cuadro de deshidratación por diarrea profusa o vómitos, mantener este combo bloquea los mecanismos de defensa del riñón, gatillando una Injuria Renal Aguda prerrenal. Se debe suspender el fármaco temporalmente hasta restaurar la volemia.' }
      },
      references: { pt: 'Estudo Clínico LOTAR; Diretrizes de Hipertensão Arterial da SBC/SBD/SBN 2020; JNC 8 Manual.', es: 'Estudio Clínico LOTAR; Guías de Hipertensión de la Sociedad Argentina de Cardiología.' }
    }

  }); /* fim Object.assign CARDIOLOGIA_DRUGS_DB — BUILD 437 / ONDA 64
         (trandolapril · perhexilina · alisquireno · amlodipino_valsartana · amlodipino_losartana)
         Bloco: IECAs lipofílicos, Modulador Metabólico CPT-1, Inibidor Direto da Renina,
         Combos anti-hipertensivos BCC+BRA e BCC+AT1 */

  if (typeof window.__MC_GOLD33_PENDING_ALISQUIRENO__ === 'function') {
    if (!window.__MC_GOLD33_PENDING_ALISQUIRENO__(window.CARDIOLOGIA_DRUGS_DB)) {
      throw new Error('GOLD33_MISSING_CANONICAL:alisquireno');
    }
    delete window.__MC_GOLD33_PENDING_ALISQUIRENO__;
  }

  /* ── BUILD 440 guard ─────────────────────────────────────────────── */
  if (typeof window.CARDIOLOGIA_DRUGS_DB !== 'object' || window.CARDIOLOGIA_DRUGS_DB === null) return;
  Object.assign(window.CARDIOLOGIA_DRUGS_DB, {

/* ── DILTIAZEM (691) ────────────────────────────────────────────────── */
    "diltiazem": {
      name: { pt: 'Diltiazem (Cloridrato de)', es: 'Diltiazem (Clorhidrato de)' },
      category: 'cardiologia',
      class: { pt: 'Bloqueador dos Canais de Cálcio Não-Di-hidropiridínico / Antiarrítmico de Classe IV', es: 'Bloqueante de los Canales de Calcio No Dihidropiridínico / Antiarrítmico de Clase IV' },
      indications: {
        pt: ['Controle de frequência cardíaca na Fibrilação Atrial crônica ou Flutter atrial', 'Angina Pectoris (Estável e Vasoespástica de Prinzmetal)', 'Hipertensão Arterial Sistêmica'],
        es: ['Control de frecuencia cardíaca en Fibrilación Auricular o Flutter atrial', 'Angina de Pecho (Estable y Vasoespástica de Prinzmetal)', 'Hipertensión Arterial']
      },
      commercialNames: { br: ['Cardizem', 'Balcor', 'Diltiazem'], ar: ['Cardizem', 'Acalix', 'Incoril'] },
      presentation: { pt: ['Comprimidos 30 mg, 60 mg; Cardizem SR/CD (Liberação prolongada) 90 mg, 120 mg, 180 mg'], es: ['Comprimidos 30 mg, 60 mg; Comprimidos de liberación prolongada 90 mg, 120 mg, 180 mg'] },
      mechanism: {
        pt: 'O Freio do Nodo AV. Liga-se às subunidades Alfa-1 dos canais de cálcio tipo L no músculo liso vascular e, com altíssima intensidade, nas células do sistema de condução elétrica cardíaca (nós sinusal e atrioventricular). Ao diminuir a entrada de cálcio no coração, ele lentifica a velocidade de condução do estímulo e aumenta o período refratário do nó AV, diminuindo os batimentos cardíacos (efeito cronotrópico e dromotrópico negativo) e relaxando as coronárias.',
        es: 'Inhibe el flujo de iones de calcio a través de los canales lentos tipo L en el músculo liso vascular y el miocardio. Posee un marcado efecto en el tejido de conducción (nodos sinusal y AV), disminuyendo la frecuencia cardíaca (cronotrópico negativo) y reduciendo la fuerza de contracción (inotrópico negativo).'
      },
      dose: {
        adult: {
          pt: 'Angina/Hipertensão: Iniciar com 30 mg a 60 mg via oral, 3 a 4 vezes ao dia (liberação imediata). Formulações de liberação prolongada (SR/CD): 90 mg a 180 mg via oral, UMA VEZ ao dia. Pode titular até o teto de 360 mg/dia.',
          es: 'Inicio: 30 mg a 60 mg vía oral, 3 o 4 veces al día (inmediata). Liberación prolongada: 90 mg a 180 mg vía oral, UNA VEZ al día. Máx 360 mg/día.'
        },
        pediatric: {
          pt: 'Não recomendado ou estabelecido na rotina pediátrica.',
          es: 'No recomendado en niños.'
        }
      },
      administration: { pt: ['As cápsulas de liberação prolongada (Cardizem SR/CD) DEVEM ser engolidas inteiras. É expressamente proibido partir ou mastigar as pelotas internas, sob risco de liberação maciça da dose e colapso circulatório com choque.'], es: ['Los comprimidos de liberación prolongada DEBEN tragarse enteros, nunca partirse ni masticarse por riesgo de toxicidad aguda por sobredosis.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste estrito, monitorar tolerabilidade basal.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Metabolizado intensamente pelo fígado (Inibidor potente do CYP3A4). Usar com extrema cautela e doses reduzidas em hepatopatias graves.', es: 'Disminuir dosis en insuficiencia hepática grave por alto metabolismo de primer paso.' } },
      commonAdverseEffects: { pt: ['Bradicardia sinusal (batimentos lentos)', 'Edema periférico maleolar nas pernas', 'Constipação intestinal (o cálcio travado prende o intestino)', 'Rubor facial e tonturas'], es: ['Bradicardia sinusal', 'Edema periférico en tobillos', 'Estreñimiento por relajación del músculo liso colónico', 'Rubor'] },
      dangerousAdverseEffects: { pt: ['Bloqueio Atrioventricular Total (BAVT de alto grau)', 'Insuficiência Cardíaca Congestiva aguda descompensada (devido ao seu forte efeito inotrópico negativo)', 'Hipotensão severa com síncope'], es: ['Bloqueo Atrioventricular Completo (BAVT)', 'Insuficiencia cardíaca aguda por depresión contráctil', 'Hipotensión severa'] },
      contraindications: {
        absolute: { pt: ['Síndrome do Nó Sinusal enfermo ou Bloqueio AV de 2º ou 3º grau (sem marcapasso ativo)', 'Insuficiência cardíaca com fração de ejeção reduzida severa (ICFER)', 'Choque cardiogênico'], es: ['Síndrome del nodo sinusal enfermo o Bloqueo AV de alto grado sin marcapasos', 'Insuficiencia cardíaca con FE reducida', 'Choque cardiogénico'] },
        relative: { pt: ['Uso concomitante com Betabloqueadores (Metoprolol) pelo risco crítico de BAVT e assincronia de pulso'], es: ['Uso concomitante con Betabloqueadores (riesgo crítico de BAVT)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'O ERRO CRÍTICO NA INSUFICIÊNCIA CARDÍACA: Jamais prescreva Diltiazem para um paciente que tem o coração fraco e dilatado (ICFER / Fração de ejeção baixa). Como o Diltiazem desliga os canais de cálcio no músculo cardíaco, ele "tira a força" de contração do coração. O coração falha na mesma hora e o paciente entra em Edema Agudo de Pulmão na emergência.', es: 'EL PELIGRO EN INSUFICIENCIA CARDÍACA: Está terminantemente PROHIBIDO usar Diltiazem en pacientes con falla cardíaca sistólica (FE reducida). Por su potente efecto inotrópico negativo, debilita la fuerza de bombeo del ventrículo, induciendo edema agudo de pulmón inmediato.' }
      },
      references: {
        pt: 'OASIS-2 Trial; AFFIRM Study (Controle de FC na FA); Diretrizes de Arritmias Cardíacas da SBC 2021.',
        es: 'AFFIRM Study; Directrices de la Sociedad Europea de Cardiología (ESC) para el manejo de la Fibrilación Auricular.'
      }
    },

/* ── DOXAZOSINA DE LIBERAÇÃO PROLONGADA (694) ─────────────────────────── */
    "doxazosina_lp": {
      name: { pt: 'Doxazosina de Liberação Prolongada', es: 'Doxazosina de Liberación Prolongada' },
      category: 'cardiologia',
      class: { pt: 'Antagonista Seletivo dos Receptores Alfa-1 Adrenérgicos / Anti-hipertensivo e Antiprostático', es: 'Antagonista Selectivo de los Receptores Alfa-1 Adrenérgicos / Antihipertensivo y Antiprostático' },
      indications: {
        pt: ['Sintomas urinários da Hiperplasia Prostática Benigna (HPB - jato urinário fraco, polaciúria)', 'Tratamento da Hipertensão Arterial Sistêmica (como droga adjuvante de 3ª ou 4ª linha)'],
        es: ['Síntomas urinarios de la Hiperplasia Prostática Benigna (HPB)', 'Tratamiento de la Hipertensión Arterial Sistémica']
      },
      commercialNames: { br: ['Duomo HP', 'Unidox', 'Doxazosina GITS'], ar: ['Cardura XL', 'Doxazosina GITS'] },
      presentation: { pt: ['Comprimidos de liberação prolongada 4 mg e 8 mg'], es: ['Comprimidos de liberación prolongada 4 mg y 8 mg'] },
      mechanism: {
        pt: 'A Tecnologia de Matriz Osmótica. Bloqueia de forma competitiva os receptores Alfa-1 adrenérgicos localizados no colo da bexiga, uretra e próstata, relaxando o músculo liso e abrindo espaço para a urina descer livremente. Paralelamente, causa vasodilatação das artérias periféricas, reduzindo a pressão arterial. A versão de Liberação Prolongada usa o sistema GITS (matriz que puxa água), liberando a droga devagar em 24h, eliminando o pico tóxico e o desmaio clássico da versão comum.',
        es: 'Antagonista selectivo postsináptico de los receptores alfa-1 adrenérgicos. Induce la relajación del músculo liso en el cuello de la vejiga y próstata, disminuyendo la resistencia al flujo urinario. La tecnología de liberación prolongada GITS reduce las oscilaciones plasmáticas, minimizando el riesgo de hipotensión ortostática.'
      },
      dose: {
        adult: {
          pt: 'Dose usual: 4 mg via oral, UMA VEZ ao dia. Se após 3-4 semanas o controle do jato urinário ou da pressão for insuficiente, pode ser elevada para o teto de 8 mg via oral uma vez ao dia.',
          es: 'Dosis habitual: 4 mg vía oral, UNA VEZ al día. Puede incrementarse a 8 mg al día tras un mes de evaluación.'
        },
        pediatric: {
          pt: 'Não indicado para menores de 18 anos.',
          es: 'No recomendado en niños.'
        }
      },
      administration: { pt: ['Deve ser tomado uma vez ao dia, de preferência com o café da manhã. O comprimido deve ser engolido INTEIRO (não pode mastigar, quebrar ou triturar, pois destrói a matriz de liberação controlada). A casca vazia do comprimido é eliminada intacta nas fezes.'], es: ['Tragar entero con el desayuno. No masticar. La matriz inerte del comprimido se elimina visiblemente en las heces.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste de dose, perfil farmacocinético seguro.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Metabolizado intensamente no fígado. Usar com muita cautela e monitorar em cirróticos graves.', es: 'Precaución en insuficiencia hepática grave por metabolismo hepático extenso.' } },
      commonAdverseEffects: { pt: ['Tontura e vertigem leve', 'Cefaleia vascular', 'Astenia (fraqueza) e sonolência', 'Congestão nasal e edema periférico'], es: ['Mareo y vértigo leve', 'Cefalea', 'Astenia y somnolencia', 'Congestión nasal'] },
      dangerousAdverseEffects: { pt: ['Hipotensão Ortostática severa com Síncope (Desmaio na primeira tomada, embora muito menor que na doxazosina comum)', 'Priapismo doloroso prolongado (emergência urológica — raro)'], es: ['Hipotensión Ortostática con Síncope de primera dosis', 'Priapismo prolongado doloroso'] },
      contraindications: {
        absolute: { pt: ['Histórico de hipotensão ortostática documentada ou síncope vaso-vagal severa', 'Obstrução esofágica mecânica pré-existente (para tecnologia GITS)'], es: ['Antecedente de hipotensión ortostática severa', 'Obstrucción gastrointestinal mecánica'] },
        relative: { pt: ['Uso associado com inibidores de PDE5 (Sildenafila) pelo risco de somação de hipotensão postural'], es: ['Uso con inhibidores de PDE5 (Sildenafilo)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O COMPRIMIDO FANTASMA NAS FEZES: A Doxazosina LP usa um sistema de plástico inerte perfurado a laser chamado GITS. A água entra, empurra o remédio para fora e a cápsula de plástico sai vazia e perfeitamente intacta no vaso sanitário após a evacuação. O paciente idoso liga em pânico achando que o remédio não funcionou. Acalme o paciente: o remédio já foi absorvido e o que saiu foi apenas a casca.', es: 'EL COMPRIMIDO FANTASMA EN LAS HECES: Utiliza un sistema de matriz plástica osmótica cortada a láser. El agua entra en el intestino, empuja el fármaco hacia afuera, y el cascarón de plástico vacío se elimina intacto en las heces. Advierta al paciente anciano para evitar el pánico de creer que no absorbió el medicamento.' }
      },
      references: {
        pt: 'ALLHAT Trial (Doxazosin arm - JAMA 2000); MTOPS Trial (HPB long term evaluation); FDA Clinical Data Cardura XL.',
        es: 'ALLHAT Trial (JAMA 2000); MTOPS Trial; Ficha Técnica CIMA Doxazosina GITS.'
      }
    }

  }); /* fim Object.assign CARDIOLOGIA_DRUGS_DB — BUILD 440 (diltiazem — BCC não-diidropiridinido/AntiarrítmicoIV; doxazosina_lp — Alfa-1 GITS/HPB+HAS) */

  /* ── BUILD 441 GUARD ─────────────────────────────────────────── */
  if (typeof window.CARDIOLOGIA_DRUGS_DB !== 'object' || window.CARDIOLOGIA_DRUGS_DB === null) return;
  Object.assign(window.CARDIOLOGIA_DRUGS_DB, {

    /* ── PERINDOPRIL + INDAPAMIDA (705) ─────────────────────────────── */
    "perindopril_indapamida": {
      name: { pt: 'Perindopril + Indapamida', es: 'Perindopril + Indapamida' },
      category: 'cardiologia',
      class: { pt: 'Combinação Anti-hipertensiva / Inibidor da ECA + Diurético Tiazídico-like', es: 'Combinación Antihipertensiva / Inhibidor de la ECA + Diurético Tiazídico-like' },
      indications: {
        pt: ['Hipertensão Arterial Sistêmica ESSENCIAL em adultos', 'Redução do risco de micro e macrovascularidades em pacientes diabéticos tipo 2 (Estratégia do Estudo ADVANCE)'],
        es: ['Hipertensión Arterial Sistémica ESENCIAL', 'Reducción del riesgo micro y macrovascular en diabéticos tipo 2 (Estrategia del Estudio ADVANCE)']
      },
      commercialNames: { br: ['Bi-Preterax', 'Preterax'], ar: ['Preterax', 'Preterax de Mantenimiento'] },
      presentation: { pt: ['Comprimidos revestidos combinados 2,5/0,625 mg, 5/1,25 mg e 10/2,5 mg'], es: ['Comprimidos combinados de 2,5/0,625 mg, 5/1,25 mg y 10/2,5 mg'] },
      mechanism: {
        pt: 'O Combo Sinergista Vascular. Une o Perindopril (um IECA de ação prolongada que reduz a Angiotensina II e a resistência arterial) à Indapamida (um diurético tiazídico-like que atua no néfron distal e possui efeito vasodilatador direto nas artérias). Juntos, eles provocam um relaxamento vascular duplo e sustentado por 24 horas, neutralizando mecanismos compensatórios e protegendo rins e coração.',
        es: 'Combinación de un inhibidor de la ECA (Perindopril) y un diurético tiazídico-like (Indapamida). El perindopril reduce la poscarga mediante el bloqueo de la Angiotensina II, mientras que la indapamida promueve la natriuresis y ejerce un efecto vasodilatador directo sobre el músculo liso arteriolar por modulación del calcio.'
      },
      dose: {
        adult: {
          pt: '1 comprimido via oral, UMA VEZ ao dia, preferencialmente pela manhã antes do café. Iniciar com a dose menor (2,5/0,625 mg) e escalonar conforme a meta pressórica.',
          es: '1 comprimido vía oral, UNA VEZ al día por la mañana antes del desayuno. Se escala la dosis progresivamente según controles médicos.'
        },
        pediatric: {
          pt: 'Não indicado ou estudado na população pediátrica.',
          es: 'No recomendado en niños.'
        }
      },
      administration: { pt: ['Uso oral contínuo diário. Deve ser tomado pela manhã em jejum seco para garantir a absorção ideal do perindoprilato.'], es: ['Uso oral diario por la mañana antes del desayuno con agua.'] },
      renalAdjustment: { required: true, message: { pt: 'Se ClCr entre 30-60 mL/min: dose máxima restrita a 5/1,25 mg ao dia. Se ClCr < 30 mL/min: ABSOLUTAMENTE CONTRAINDICADO.', es: 'Si ClCr 30-60: dosis máxima de 5/1,25 mg. Si ClCr < 30 mL/min: ABSOLUTAMENTE CONTRAINDICADO.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Contraindicado em insuficiência hepática grave ou encefalopatia hepática ativa (devido ao risco de hipocalemia precipitante pela indapamida).', es: 'Contraindicado en falla hepática grave por riesgo de hipopotasemia severa.' } },
      commonAdverseEffects: { pt: ['Tosse seca irritativa (efeito clássico do perindopril)', 'Tontura e hipotensão ortostática leve', 'Cãibras musculares (por queda leve de potássio)'], es: ['Tos seca irritativa', 'Mareo e hipotensión ortostática', 'Calambres musculares leves'] },
      dangerousAdverseEffects: { pt: ['ANGIOEDEMA DE GLOTE (Risco de asfixia letal)', 'Insuficiência Renal Aguda funcional bilateral', 'Hipocalemia severa ou Hiponatremia de diluição profunda'], es: ['ANGIOEDEMA DE GLOTIS', 'Falla renal aguda funcional', 'Hipopotasemia grave o Hiponatremia severa'] },
      contraindications: {
        absolute: { pt: ['GRAVIDEZ (Black Box absoluto por toxicidade neonatal)', 'Histórico de angioedema familiar ou induzido por IECA', 'Insuficiência renal grave ClCr < 30 mL/min'], es: ['EMBARAZO (Contraindicación absoluta)', 'Historial de angioedema', 'Falla renal grave (ClCr < 30)'] },
        relative: { pt: ['Uso associado com Lítio (risco de intoxicação grave por retenção de lítio)'], es: ['Uso concomitante con Litio (riesgo de toxicidad grave)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'A LIÇÃO DA PROTEÇÃO DIABÉTICA (O ESTUDO ADVANCE): O combo Bi-Preterax é considerado o padrão-ouro no diabetes. O estudo mundial ADVANCE provou que dar essa combinação para pacientes diabéticos tipo 2 reduz em 21% a mortalidade por doença renal e em 14% a mortalidade cardiovascular global, mesmo em pacientes que já tinham a pressão normal.', es: 'LA PROTECCIÓN DIABÉTICA COMPROBADA (ESTUDIO ADVANCE): Esta combinación demostró en el mega estudio ADVANCE reducir un 21% la nefropatía diabética severa y un 14% la mortalidad cardiovascular global en pacientes diabéticos tipo 2, consolidándose como tratamiento de elección.' }
      },
      references: {
        pt: 'ADVANCE Trial (Lancet 2007 - Perindopril-Indapamide in Type 2 Diabetes); Diretrizes de Hipertensão Arterial da SBC 2020.',
        es: 'ADVANCE Trial (Lancet 2007); Directrices de la Sociedad Europea de Cardiología (ESC/ESH).'
      }
    },

    /* ── PERINDOPRIL + AMLODIPINO (706) ─────────────────────────────── */
    "perindopril_amlodipino": {
      name: { pt: 'Perindopril + Amlodipino', es: 'Perindopril + Amlodipino' },
      category: 'cardiologia',
      class: { pt: 'Combinação Anti-hipertensiva de Alto Impacto / Inibidor da ECA + Bloqueador de Cálcio', es: 'Combinación Antihipertensiva / Inhibidor de la ECA + Bloqueante de los Canales de Calcio' },
      indications: {
        pt: ['Tratamento da Hipertensão Arterial Sistêmica essencial', 'Redução do risco de infarto e AVC em pacientes hipertensos com alto risco cardiovascular (Estratégia do Estudo ASCOT-BPLA)', 'Tratamento de Doença Arterial Coronariana estável'],
        es: ['Tratamiento de la Hipertensión Arterial Sistémica esencial', 'Reducción del riesgo de infarto y ACV en pacientes de alto riesgo (Estudio ASCOT-BPLA)', 'Tratamiento de Enfermedad Arterial Coronaria estable']
      },
      commercialNames: { br: ['Acrobax', 'Preterax AM'], ar: ['Viacoram', 'Amloper'] },
      presentation: { pt: ['Comprimidos combinados nas dosagens 3,5/2,5 mg, 5/5 mg, 7/5 mg e 10/10 mg'], es: ['Comprimidos combinados de 3,5/2,5 mg, 5/5 mg, 7/5 mg y 10/10 mg'] },
      mechanism: {
        pt: 'O Combo Sinergista Endotelial. O Amlodipino bloqueia os canais de cálcio dilatando fortemente as arteríolas periféricas (redução mecânica da pressão). O Perindopril bloqueia a ECA, impedindo a vasoconstrição e equilibrando a circulação capilar. Essa junção estabiliza o endotélio de forma agressiva, reduz a pressão arterial de forma central (aórtica) e diminui drasticamente o inchaço nos tornozelos que o amlodipino causaria sozinho.',
        es: 'Combinación de amlodipino (calcioantagonista arteriolar precapilar) y perindopril (IECA venodilatador postcapilar). Su sinergismo reduce la presión arterial central y periférica con alta eficacia. La venodilatación inducida por perindopril balancea la presión capilar eliminando el edema maleolar inducido por amlodipino.'
      },
      dose: {
        adult: {
          pt: '1 comprimido via oral, UMA VEZ ao dia, pela manhã. Titular as doses de forma progressiva com base no diário de pressão do paciente (ex: iniciar com 5/5 mg e reavaliar em 14 dias).',
          es: '1 comprimido vía oral, UNA VEZ al día por la mañana. Ajustable según la respuesta de las cifras tensionales del paciente.'
        },
        pediatric: {
          pt: 'Não indicado.',
          es: 'No indicado.'
        }
      },
      administration: { pt: ['Uso oral diário pela manhã. Pode ser tomado com ou sem alimentos. Engolir inteiro sem mastigar ou quebrar o comprimido.'], es: ['Uso oral diario por la mañana. Puede tomarse con o sin alimentos de forma indiferente.'] },
      renalAdjustment: { required: true, message: { pt: 'Se ClCr < 30 mL/min: USO TOTALMENTE CONTRAINDICADO. Se ClCr entre 30-60: usar com cautela extrema e monitorar eletrólitos.', es: 'Si ClCr < 30 mL/min: USO CONTRAINDICADO. Si ClCr 30-60: monitorizar estrechamente potasio y función renal.' } },
      hepaticAdjustment: { required: true, message: { pt: 'O Amlodipino acumula severamente em fígados doentes. Usar com cautela em cirróticos e considerar doses menores.', es: 'Metabolismo de amlodipino ralentizado en falla hepática; monitorizar de forma estricta.' } },
      commonAdverseEffects: { pt: ['Tosse seca persistente', 'Tontura postural e fadiga', 'Edema periférico leve nas pernas', 'Rubor facial'], es: ['Tos seca crónica', 'Mareo e hipotensión leve', 'Edema periférico leve', 'Rubor facial'] },
      dangerousAdverseEffects: { pt: ['Angioedema laríngeo severo', 'Insuficiência renal aguda funcional', 'Bradicardia ou hipotensão profunda com síncope'], es: ['Angioedema de glotis', 'Injuria renal aguda funcional', 'Síncope hipotensivo'] },
      contraindications: {
        absolute: { pt: ['Gravidez (Black Box absoluto por teratogenicidade de classe)', 'Histórico de angioedema', 'Estenose aórtica severa em choque'], es: ['Embarazo (Absoluto)', 'Antecedente de angioedema', 'Choque cardiogénico'] },
        relative: { pt: ['Estenose bilateral de artéria renal ou hipercalemia pré-existente'], es: ['Estenosis bilateral de arteria renal o hiperpotasemia preexistente'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O MARCO HISTÓRICO DO ESTUDO ASCOT: O combo Perindopril + Amlodipino quebrou o paradigma da cardiologia no estudo ASCOT-BPLA. Ele enterrou o uso antigo de Atenolol + Diurético, provando ser imensamente superior na redução de mortes, derrames (AVC) e no surgimento de novos casos de diabetes em pacientes hipertensos.', es: 'EL HITO DEL ESTUDIO ASCOT-BPLA: Esta combinación demostró una superioridad incontestable frente a la terapia clásica (Atenolol + Tiazida) en el estudio ASCOT, reduciendo significativamente los eventos cardiovasculares mayores, los ACV y previniendo el desarrollo de diabetes de novo.' }
      },
      references: {
        pt: 'ASCOT-BPLA Trial (Lancet 2005 - Cardiovascular prevention); EUROPA Trial (Coronariopatia); Diretrizes da SBC 2020.',
        es: 'ASCOT-BPLA Trial (Lancet 2005); EUROPA Trial; Directrices de la Sociedad Argentina de Cardiología.'
      }
    }

  }); /* fim Object.assign CARDIOLOGIA_DRUGS_DB — BUILD 441 (perindopril_indapamida — IECA+TiazídicoLike/ADVANCE-Lancet2007/DM2; perindopril_amlodipino — IECA+BCC/ASCOT-BPLA-Lancet2005) */
})();
/* GOLD33_SELECTIVE:amiodarona:START */
;(function(){var db=window.CARDIOLOGIA_DRUGS_DB;if(!db||!db["amiodarona"])throw new Error("GOLD33_MISSING_CANONICAL:amiodarona");db["amiodarona"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "005",
    "requiredFieldCount": 33,
    "approvedSha256": "a52097a2e20608e28786e280427a4445cb7d16984c62eb2f05df9d280fc142ea",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "mission10-owner-confirmed"
  },
  "pt": {
    "name": "Amiodarona",
    "class": "Antiarrítmico classe III",
    "pharmacologicClass": "Bloqueador multicanal com efeitos classes I–IV",
    "commercialNames": "Usar somente produtos regulatórios citados nas fontes; marcas AR/BR não presumidas.",
    "presentation": "IV pré-misturada: 150 mg/100 mL e 360 mg/200 mL. Oral: comprimidos 100/200/400 mg conforme produto.",
    "presentations": "IV pré-misturada: 150 mg/100 mL e 360 mg/200 mL. Oral: comprimidos 100/200/400 mg conforme produto.",
    "mechanism": "Bloqueador multicanal com efeitos classes I–IV. O mecanismo deve ser interpretado no contexto da formulação e indicação.",
    "pharmacodynamics": "Resposta e toxicidade são dependentes de exposição, via e população; ver dose e monitorização.",
    "pharmacokinetics": "Altamente lipofílica, grande volume de distribuição, metabolismo CYP3A/2C8 a desetilamiodarona e meia-vida extremamente longa após uso crônico.",
    "indications": "IV: início/tratamento de fibrilação ventricular recorrente e taquicardia ventricular hemodinamicamente instável refratárias. Oral: arritmias ventriculares graves recorrentes quando outros agentes falham, devido à toxicidade.",
    "dose": "IV: 150 mg em 10 min, depois 1 mg/min por 6 h e 0,5 mg/min; após 24 h, 0,5 mg/min. Para recorrência, 150 mg em 10 min; máximo inicial usual 2,2 g/24 h. Oral: ataque individualizado em ambiente especializado; não converter automaticamente IV↔VO.",
    "pediatricDose": "Segurança/eficácia não estabelecidas na bula; excipientes e dose neonatal exigem protocolo especializado. AUTOMATABLE=NO.",
    "renalDose": "Sem ajuste renal específico, inclusive diálise; monitorar eletrólitos e toxicidade.",
    "hepaticDose": "Reduzir taxa ou suspender diante de lesão hepática progressiva; sem tabela fixa.",
    "commonAdverseEffects": "Hipotensão, bradicardia, flebite IV; oralmente, náusea, tremor, fotossensibilidade e depósitos corneanos.",
    "dangerousAdverseEffects": "Toxicidade pulmonar potencialmente fatal, hepatotoxicidade, pró-arritmia/QT, disfunção tireoidiana, neuropatia e toxicidade ocular.",
    "adverseEffects": "Hipotensão, bradicardia, flebite IV; oralmente, náusea, tremor, fotossensibilidade e depósitos corneanos. Graves: Toxicidade pulmonar potencialmente fatal, hepatotoxicidade, pró-arritmia/QT, disfunção tireoidiana, neuropatia e toxicidade ocular.",
    "contraindications": "IV: hipersensibilidade, choque cardiogênico, bradicardia marcada e bloqueio AV de 2º/3º grau sem marcapasso. Oral: consultar contraindicações completas do produto.",
    "interactions": "Prolongadores de QT, fármacos bradicardizantes, digoxina, varfarina, estatinas e inibidores/indutores CYP/P-gp exigem ajuste/monitorização; evitar toranja.",
    "monitoring": "ECG/QTc, FC/PA, K/Mg, função hepática e tireoide; no uso oral/continuado, pulmões, olhos e pele; revisar interações.",
    "administration": "IV por bomba, preferir acesso central para concentrações/infusões prolongadas; monitorização contínua. Oral requer avaliação basal pulmonar, hepática, tireoidiana e ocular.",
    "preparation": "Usar bolsa pré-misturada conforme rótulo; para outras apresentações seguir diluente/concentração e filtro especificados, sem extrapolar.",
    "infusionProtocol": "150 mg/10 min; manutenção 1 mg/min por 6 h e 0,5 mg/min depois. Evitar infusão rápida por hipotensão.",
    "pregnancy": "Pode causar dano fetal, inclusive disfunção tireoidiana; usar apenas em arritmia grave quando benefício superar risco.",
    "lactation": "Amiodarona e metabólito passam ao leite; amamentação não é recomendada durante tratamento.",
    "specialPopulations": "Individualizar em idosos, gestação/lactação, disfunção renal/hepática e polifarmácia conforme campos específicos.",
    "patientEducation": "Explicar indicação, técnica, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em fonte regulatória primária; protocolo local pode restringir seleção, sequência e monitorização.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Toxicidade pulmonar potencialmente fatal, hepatotoxicidade, pró-arritmia/QT, disfunção tireoidiana, neuropatia e toxicidade ocular. Conversão IV↔VO e pediatria bloqueadas; uso exige monitorização contínua e revisão de interações.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e9108958-b8d7-4fba-87c3-9a32990de551",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4c149392-a4f0-4e2d-a13f-2b94810005de"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e9108958-b8d7-4fba-87c3-9a32990de551"
  },
  "es": {
    "name": "Amiodarona",
    "class": "Antiarrítmico clase III",
    "pharmacologicClass": "Bloqueador multicanal con efectos clases I–IV",
    "commercialNames": "Usar solo productos regulatorios citados; no se presumen marcas AR/BR.",
    "presentation": "IV premezclada: 150 mg/100 mL y 360 mg/200 mL. Oral: comprimidos 100/200/400 mg según producto.",
    "presentations": "IV premezclada: 150 mg/100 mL y 360 mg/200 mL. Oral: comprimidos 100/200/400 mg según producto.",
    "mechanism": "Bloqueador multicanal con efectos clases I–IV. El mecanismo debe interpretarse según formulación e indicación.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición, vía y población; ver dosis y monitorización.",
    "pharmacokinetics": "Muy lipófila, gran volumen de distribución, metabolismo CYP3A/2C8 a desetilamiodarona y semivida extremadamente larga tras uso crónico.",
    "indications": "IV: inicio/tratamiento de fibrilación ventricular recurrente y taquicardia ventricular inestable refractaria. Oral: arritmias ventriculares graves recurrentes cuando otros agentes fallan, por toxicidad.",
    "dose": "IV: 150 mg en 10 min, luego 1 mg/min por 6 h y 0,5 mg/min; tras 24 h, 0,5 mg/min. Para recurrencia, 150 mg en 10 min; máximo inicial usual 2,2 g/24 h. Oral: carga individualizada en entorno especializado; no convertir automáticamente IV↔VO.",
    "pediatricDose": "Seguridad/eficacia no establecidas en ficha; excipientes y dosis neonatal requieren protocolo especializado. AUTOMATABLE=NO.",
    "renalDose": "Sin ajuste renal específico, incluso diálisis; vigilar electrolitos y toxicidad.",
    "hepaticDose": "Reducir velocidad o suspender ante lesión hepática progresiva; sin tabla fija.",
    "commonAdverseEffects": "Hipotensión, bradicardia, flebitis IV; oralmente, náusea, temblor, fotosensibilidad y depósitos corneales.",
    "dangerousAdverseEffects": "Toxicidad pulmonar potencialmente fatal, hepatotoxicidad, proarritmia/QT, disfunción tiroidea, neuropatía y toxicidad ocular.",
    "adverseEffects": "Hipotensión, bradicardia, flebitis IV; oralmente, náusea, temblor, fotosensibilidad y depósitos corneales. Graves: Toxicidad pulmonar potencialmente fatal, hepatotoxicidad, proarritmia/QT, disfunción tiroidea, neuropatía y toxicidad ocular.",
    "contraindications": "IV: hipersensibilidad, shock cardiogénico, bradicardia marcada y bloqueo AV 2º/3º sin marcapasos. Oral: consultar contraindicaciones completas.",
    "interactions": "Prolongadores QT, bradicardizantes, digoxina, warfarina, estatinas e inhibidores/inductores CYP/P-gp exigen ajuste/vigilancia; evitar pomelo.",
    "monitoring": "ECG/QTc, FC/PA, K/Mg, función hepática y tiroidea; en uso oral/prolongado, pulmones, ojos y piel; revisar interacciones.",
    "administration": "IV por bomba, preferir acceso central para concentraciones/infusiones prolongadas; monitorización continua. Oral requiere evaluación pulmonar, hepática, tiroidea y ocular.",
    "preparation": "Usar bolsa premezclada según ficha; para otras presentaciones seguir diluyente/concentración y filtro especificados, sin extrapolar.",
    "infusionProtocol": "150 mg/10 min; mantenimiento 1 mg/min por 6 h y 0,5 mg/min después. Evitar infusión rápida por hipotensión.",
    "pregnancy": "Puede causar daño fetal, incluida disfunción tiroidea; usar solo en arritmia grave cuando beneficio supere riesgo.",
    "lactation": "Amiodarona y metabolito pasan a leche; no se recomienda lactancia durante tratamiento.",
    "specialPopulations": "Individualizar en ancianos, embarazo/lactancia, disfunción renal/hepática y polifarmacia según campos específicos.",
    "patientEducation": "Explicar indicación, técnica, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en fuente regulatoria primaria; protocolo local puede restringir selección, secuencia y monitorización.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Toxicidad pulmonar potencialmente fatal, hepatotoxicidad, proarritmia/QT, disfunción tiroidea, neuropatía y toxicidad ocular. Conversão IV↔VO e pediatria bloqueadas; uso exige monitorização contínua e revisão de interações.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e9108958-b8d7-4fba-87c3-9a32990de551",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4c149392-a4f0-4e2d-a13f-2b94810005de"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e9108958-b8d7-4fba-87c3-9a32990de551"
  }
};})();
/* GOLD33_SELECTIVE:amiodarona:END */
/* GOLD33_SELECTIVE:amlodipino_losartana:START */
;(function(){var db=window.CARDIOLOGIA_DRUGS_DB;if(!db||!db["amlodipino_losartana"])throw new Error("GOLD33_MISSING_CANONICAL:amlodipino_losartana");db["amlodipino_losartana"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "006",
    "requiredFieldCount": 33,
    "approvedSha256": "29dcd13d6e24b2553690505773d6f3cc674de822214a06576063ea319921645d",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "mission10-owner-confirmed"
  },
  "pt": {
    "name": "Amlodipino + losartana potássica",
    "class": "Associação anti-hipertensiva",
    "pharmacologicClass": "Bloqueador de canal de cálcio + antagonista AT1",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Comprimidos em combinações como 5/50 mg, 5/100 mg, 10/50 mg e 10/100 mg podem existir; confirmar produto e registro local.",
    "presentations": "Comprimidos em combinações como 5/50 mg, 5/100 mg, 10/50 mg e 10/100 mg podem existir; confirmar produto e registro local.",
    "mechanism": "Bloqueador de canal de cálcio + antagonista AT1. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Amlodipino: meia-vida longa ~30-50 h e metabolismo hepático. Losartana: metabólito ativo, metabolismo CYP2C9/3A4 e eliminação renal/biliar.",
    "indications": "Hipertensão arterial em adultos quando a associação dos dois componentes é clinicamente apropriada; a indicação exata depende do produto nacional.",
    "dose": "Um comprimido VO uma vez/dia na força correspondente às doses já tituladas dos componentes. Não iniciar nem converter automaticamente sem confirmar a bula local da combinação.",
    "pediatricDose": "Combinação fixa não validada para pediatria; usar componentes e referências pediátricas específicas quando indicado. AUTOMATABLE=NO.",
    "renalDose": "Losartana: cautela em hipovolemia e insuficiência renal/estenose de artéria renal; monitorar creatinina e potássio. Não há tabela universal da combinação.",
    "hepaticDose": "Considerar dose inicial menor de losartana em comprometimento hepático; combinação fixa pode impedir titulação adequada.",
    "commonAdverseEffects": "Edema periférico, tontura, cefaleia, fadiga e hipotensão.",
    "dangerousAdverseEffects": "Lesão fetal, hipercalemia, lesão renal aguda, angioedema e hipotensão grave.",
    "adverseEffects": "Edema periférico, tontura, cefaleia, fadiga e hipotensão. Graves: Lesão fetal, hipercalemia, lesão renal aguda, angioedema e hipotensão grave.",
    "contraindications": "Gestação; hipersensibilidade; uso com aliscireno em diabetes. Outras contraindicações dependem da bula local.",
    "interactions": "Potássio/poupadores, IECA/aliscireno, AINEs e lítio; inibidores CYP3A4 podem elevar amlodipino.",
    "monitoring": "PA, edema, tontura, creatinina/eGFR e potássio após início e titulação.",
    "administration": "VO uma vez/dia, no mesmo horário, com ou sem alimento; corrigir depleção volêmica antes.",
    "preparation": "Comprimido pronto; não fracionar salvo autorização do produto.",
    "infusionProtocol": "Não aplicável.",
    "pregnancy": "Contraindicada na gestação; suspender assim que detectada.",
    "lactation": "Losartana pode estar presente no leite animal e dados humanos são insuficientes; decidir entre tratamento e amamentação.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Lesão fetal, hipercalemia, lesão renal aguda, angioedema e hipotensão grave. Força fixa, iniciação e conversão bloqueadas até confirmação do produto regulatório local.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2011/019787s047lbl.pdf",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2018/020386s063lbl.pdf"
    ],
    "ref": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2011/019787s047lbl.pdf"
  },
  "es": {
    "name": "Amlodipino + losartán potásico",
    "class": "Asociación antihipertensiva",
    "pharmacologicClass": "Bloqueador de canales de calcio + antagonista AT1",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Pueden existir comprimidos 5/50 mg, 5/100 mg, 10/50 mg y 10/100 mg; confirmar producto y registro local.",
    "presentations": "Pueden existir comprimidos 5/50 mg, 5/100 mg, 10/50 mg y 10/100 mg; confirmar producto y registro local.",
    "mechanism": "Bloqueador de canales de calcio + antagonista AT1. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Amlodipino: semivida ~30-50 h y metabolismo hepático. Losartán: metabolito activo, metabolismo CYP2C9/3A4 y eliminación renal/biliar.",
    "indications": "Hipertensión arterial en adultos cuando la asociación de ambos componentes es apropiada; la indicación exacta depende del producto nacional.",
    "dose": "Un comprimido VO una vez/día en la concentración correspondiente a las dosis ya tituladas. No iniciar ni convertir automáticamente sin confirmar la ficha local.",
    "pediatricDose": "Combinación fija no validada en pediatría; usar componentes y referencias pediátricas específicas cuando corresponda. AUTOMATABLE=NO.",
    "renalDose": "Losartán: precaución en hipovolemia e insuficiencia renal/estenosis de arteria renal; controlar creatinina y potasio. No hay tabla universal de la combinación.",
    "hepaticDose": "Considerar dosis inicial menor de losartán en insuficiencia hepática; la combinación fija puede impedir titulación adecuada.",
    "commonAdverseEffects": "Edema periférico, mareo, cefalea, fatiga e hipotensión.",
    "dangerousAdverseEffects": "Daño fetal, hiperpotasemia, lesión renal aguda, angioedema e hipotensión grave.",
    "adverseEffects": "Edema periférico, mareo, cefalea, fatiga e hipotensión. Graves: Daño fetal, hiperpotasemia, lesión renal aguda, angioedema e hipotensión grave.",
    "contraindications": "Embarazo; hipersensibilidad; uso con aliskireno en diabetes. Otras contraindicaciones dependen de la ficha local.",
    "interactions": "Potasio/ahorradores, IECA/aliskireno, AINE y litio; inhibidores CYP3A4 pueden elevar amlodipino.",
    "monitoring": "PA, edema, mareo, creatinina/eGFR y potasio tras inicio y titulación.",
    "administration": "VO una vez/día, a la misma hora, con o sin alimentos; corregir depleción de volumen antes.",
    "preparation": "Comprimido listo; no fraccionar salvo autorización del producto.",
    "infusionProtocol": "No aplicable.",
    "pregnancy": "Contraindicada en embarazo; suspender al detectarlo.",
    "lactation": "Losartán puede estar en leche animal y faltan datos humanos; decidir entre tratamiento y lactancia.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Daño fetal, hiperpotasemia, lesión renal aguda, angioedema e hipotensión grave. Força fixa, iniciação e conversão bloqueadas até confirmação do produto regulatório local.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2011/019787s047lbl.pdf",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2018/020386s063lbl.pdf"
    ],
    "ref": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2011/019787s047lbl.pdf"
  }
};})();
/* GOLD33_SELECTIVE:amlodipino_losartana:END */
/* GOLD33_SELECTIVE:amlodipino_valsartana:START */
;(function(){var db=window.CARDIOLOGIA_DRUGS_DB;if(!db||!db["amlodipino_valsartana"])throw new Error("GOLD33_MISSING_CANONICAL:amlodipino_valsartana");db["amlodipino_valsartana"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "006",
    "requiredFieldCount": 33,
    "approvedSha256": "29dcd13d6e24b2553690505773d6f3cc674de822214a06576063ea319921645d",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "mission10-owner-confirmed"
  },
  "pt": {
    "name": "Amlodipino + valsartana",
    "class": "Associação anti-hipertensiva",
    "pharmacologicClass": "Bloqueador de canal de cálcio + antagonista AT1",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Comprimidos 5/80 mg, 5/160 mg, 10/160 mg; algumas jurisdições incluem 5/320 e 10/320 mg.",
    "presentations": "Comprimidos 5/80 mg, 5/160 mg, 10/160 mg; algumas jurisdições incluem 5/320 e 10/320 mg.",
    "mechanism": "Bloqueador de canal de cálcio + antagonista AT1. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Amlodipino tem meia-vida 30-50 h; valsartana atinge pico em 2-4 h, alta ligação proteica e eliminação principalmente fecal.",
    "indications": "Hipertensão em adultos; pode ser usada quando monoterapia não controla adequadamente ou como terapia inicial quando múltiplos agentes são necessários.",
    "dose": "1 comprimido VO uma vez/dia. Titular após pelo menos 1-2 semanas; máximo conforme rótulo FDA: 10 mg/320 mg uma vez/dia. Escolher força pelos componentes já utilizados e resposta.",
    "pediatricDose": "Segurança/eficácia da combinação não estabelecidas <18 anos. AUTOMATABLE=NO.",
    "renalDose": "Sem ajuste inicial em comprometimento renal leve/moderado; dados limitados na doença renal grave. Monitorar creatinina e potássio.",
    "hepaticDose": "Evitar/titular componentes separadamente em comprometimento hepático grave; exposição ao amlodipino aumenta.",
    "commonAdverseEffects": "Edema periférico, nasofaringite, cefaleia, tontura e hipotensão.",
    "dangerousAdverseEffects": "Toxicidade fetal, hipercalemia, insuficiência renal aguda, angioedema e hipotensão.",
    "adverseEffects": "Edema periférico, nasofaringite, cefaleia, tontura e hipotensão. Graves: Toxicidade fetal, hipercalemia, insuficiência renal aguda, angioedema e hipotensão.",
    "contraindications": "Gestação, hipersensibilidade; aliscireno em diabetes.",
    "interactions": "AINEs, lítio, potássio/poupadores, bloqueio duplo do SRAA e inibidores CYP3A4.",
    "monitoring": "PA, edema, creatinina/eGFR, potássio e sintomas de hipotensão.",
    "administration": "VO uma vez/dia, com ou sem alimento.",
    "preparation": "Comprimido pronto para uso.",
    "infusionProtocol": "Não aplicável.",
    "pregnancy": "Contraindicada; suspender ao detectar gestação.",
    "lactation": "Dados insuficientes; não recomendada durante amamentação em muitos rótulos.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Toxicidade fetal, hipercalemia, insuficiência renal aguda, angioedema e hipotensão. Pediatria e uso em disfunção renal/hepática grave bloqueados; não extrapolar entre forças.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d0caec89-96ec-411d-a933-63eda74a6da7",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.ema.europa.eu/en/medicines/human/EPAR/exforge"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d0caec89-96ec-411d-a933-63eda74a6da7"
  },
  "es": {
    "name": "Amlodipino + valsartán",
    "class": "Asociación antihipertensiva",
    "pharmacologicClass": "Bloqueador de canales de calcio + antagonista AT1",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Comprimidos 5/80 mg, 5/160 mg, 10/160 mg; algunas jurisdicciones incluyen 5/320 y 10/320 mg.",
    "presentations": "Comprimidos 5/80 mg, 5/160 mg, 10/160 mg; algunas jurisdicciones incluyen 5/320 y 10/320 mg.",
    "mechanism": "Bloqueador de canales de calcio + antagonista AT1. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Amlodipino tiene semivida 30-50 h; valsartán alcanza pico en 2-4 h, alta unión proteica y eliminación principalmente fecal.",
    "indications": "Hipertensión en adultos; puede usarse cuando la monoterapia no controla o como terapia inicial cuando se requieren varios agentes.",
    "dose": "1 comprimido VO una vez/día. Titular tras al menos 1-2 semanas; máximo según ficha FDA: 10 mg/320 mg una vez/día. Elegir concentración por componentes previos y respuesta.",
    "pediatricDose": "Seguridad/eficacia de la combinación no establecidas <18 años. AUTOMATABLE=NO.",
    "renalDose": "Sin ajuste inicial en insuficiencia renal leve/moderada; datos limitados en enfermedad renal grave. Controlar creatinina y potasio.",
    "hepaticDose": "Evitar/titular componentes por separado en insuficiencia hepática grave; aumenta exposición a amlodipino.",
    "commonAdverseEffects": "Edema periférico, nasofaringitis, cefalea, mareo e hipotensión.",
    "dangerousAdverseEffects": "Toxicidad fetal, hiperpotasemia, insuficiencia renal aguda, angioedema e hipotensión.",
    "adverseEffects": "Edema periférico, nasofaringitis, cefalea, mareo e hipotensión. Graves: Toxicidad fetal, hiperpotasemia, insuficiencia renal aguda, angioedema e hipotensión.",
    "contraindications": "Embarazo, hipersensibilidad; aliskireno en diabetes.",
    "interactions": "AINE, litio, potasio/ahorradores, bloqueo doble del SRAA e inhibidores CYP3A4.",
    "monitoring": "PA, edema, creatinina/eGFR, potasio y síntomas de hipotensión.",
    "administration": "VO una vez/día, con o sin alimentos.",
    "preparation": "Comprimido listo.",
    "infusionProtocol": "No aplicable.",
    "pregnancy": "Contraindicada; suspender al detectar embarazo.",
    "lactation": "Datos insuficientes; no recomendada durante lactancia en muchas fichas.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Toxicidad fetal, hiperpotasemia, insuficiencia renal aguda, angioedema e hipotensión. Pediatria e uso em disfunção renal/hepática grave bloqueados; não extrapolar entre forças.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d0caec89-96ec-411d-a933-63eda74a6da7",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.ema.europa.eu/en/medicines/human/EPAR/exforge"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d0caec89-96ec-411d-a933-63eda74a6da7"
  }
};})();
/* GOLD33_SELECTIVE:amlodipino_valsartana:END */
/* GOLD33_SELECTIVE:anlodipino:START */
;(function(){var db=window.CARDIOLOGIA_DRUGS_DB;if(!db||!db["anlodipino"])throw new Error("GOLD33_MISSING_CANONICAL:anlodipino");db["anlodipino"].mcGoldClinicalV1={
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
    "name": "Amlodipino (ID legado: anlodipino)",
    "class": "Anti-hipertensivo; antianginoso",
    "pharmacologicClass": "Bloqueador di-hidropiridínico de canais de cálcio",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Comprimidos 2,5 mg, 5 mg e 10 mg.",
    "presentations": "Comprimidos 2,5 mg, 5 mg e 10 mg.",
    "mechanism": "Bloqueador di-hidropiridínico de canais de cálcio. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Biodisponibilidade 64-90%; Tmax 6-12 h; ligação proteica ~93%; metabolismo hepático; meia-vida 30-50 h; eliminação urinária de metabólitos.",
    "indications": "Hipertensão; angina crônica estável ou vasoespástica; doença coronariana documentada.",
    "dose": "Adultos: iniciar 5 mg VO uma vez/dia; 2,5 mg em idosos frágeis ou insuficiência hepática. Máximo 10 mg uma vez/dia; titular em geral após 7-14 dias.",
    "pediatricDose": "Hipertensão, 6-17 anos: 2,5-5 mg VO uma vez/dia; doses >5 mg não estudadas. AUTOMATABLE=NO sem idade e indicação.",
    "renalDose": "Sem ajuste inicial habitual; não removido significativamente por hemodiálise.",
    "hepaticDose": "Iniciar 2,5 mg/dia e titular lentamente em insuficiência hepática.",
    "commonAdverseEffects": "Edema periférico, cefaleia, rubor, tontura, fadiga e palpitações.",
    "dangerousAdverseEffects": "Hipotensão sintomática; piora transitória da angina/infarto ao iniciar ou aumentar em DAC grave.",
    "adverseEffects": "Edema periférico, cefaleia, rubor, tontura, fadiga e palpitações. Graves: Hipotensão sintomática; piora transitória da angina/infarto ao iniciar ou aumentar em DAC grave.",
    "contraindications": "Hipersensibilidade ao amlodipino ou componentes.",
    "interactions": "Inibidores CYP3A4 podem aumentar exposição; sinvastatina deve ter dose limitada conforme bula; indutores podem reduzir efeito.",
    "monitoring": "PA, edema, frequência cardíaca, sintomas de hipotensão e angina ao titular.",
    "administration": "VO uma vez/dia, com ou sem alimento.",
    "preparation": "Comprimido pronto; confirmar possibilidade de fracionamento do produto.",
    "infusionProtocol": "Não aplicável.",
    "pregnancy": "Dados observacionais não mostram sinal consistente; individualizar benefício-risco.",
    "lactation": "Presente no leite; avaliar exposição do lactente e necessidade materna.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Hipotensão sintomática; piora transitória da angina/infarto ao iniciar ou aumentar em DAC grave. Preservar o ID legado anlodipino; não renomear automaticamente. Titulação bloqueada sem PA, indicação e função hepática.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=amlodipine",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2011/019787s047lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=amlodipine"
  },
  "es": {
    "name": "Amlodipino (ID heredado: anlodipino)",
    "class": "Antihipertensivo; antianginoso",
    "pharmacologicClass": "Bloqueador dihidropiridínico de canales de calcio",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Comprimidos 2,5 mg, 5 mg y 10 mg.",
    "presentations": "Comprimidos 2,5 mg, 5 mg y 10 mg.",
    "mechanism": "Bloqueador dihidropiridínico de canales de calcio. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Biodisponibilidad 64-90%; Tmax 6-12 h; unión proteica ~93%; metabolismo hepático; semivida 30-50 h; eliminación urinaria de metabolitos.",
    "indications": "Hipertensión; angina crónica estable o vasoespástica; enfermedad coronaria documentada.",
    "dose": "Adultos: iniciar 5 mg VO una vez/día; 2,5 mg en ancianos frágiles o insuficiencia hepática. Máximo 10 mg una vez/día; titular generalmente tras 7-14 días.",
    "pediatricDose": "Hipertensión, 6-17 años: 2,5-5 mg VO una vez/día; dosis >5 mg no estudiadas. AUTOMATABLE=NO sin edad e indicación.",
    "renalDose": "Sin ajuste inicial habitual; no se elimina significativamente por hemodiálisis.",
    "hepaticDose": "Iniciar 2,5 mg/día y titular lentamente en insuficiencia hepática.",
    "commonAdverseEffects": "Edema periférico, cefalea, rubor, mareo, fatiga y palpitaciones.",
    "dangerousAdverseEffects": "Hipotensión sintomática; empeoramiento transitorio de angina/infarto al iniciar o aumentar en coronariopatía grave.",
    "adverseEffects": "Edema periférico, cefalea, rubor, mareo, fatiga y palpitaciones. Graves: Hipotensión sintomática; empeoramiento transitorio de angina/infarto al iniciar o aumentar en coronariopatía grave.",
    "contraindications": "Hipersensibilidad a amlodipino o componentes.",
    "interactions": "Inhibidores CYP3A4 pueden aumentar exposición; limitar simvastatina según ficha; inductores pueden reducir efecto.",
    "monitoring": "PA, edema, frecuencia cardíaca, síntomas de hipotensión y angina al titular.",
    "administration": "VO una vez/día, con o sin alimentos.",
    "preparation": "Comprimido listo; confirmar posibilidad de fraccionamiento del producto.",
    "infusionProtocol": "No aplicable.",
    "pregnancy": "Datos observacionales no muestran señal consistente; individualizar beneficio-riesgo.",
    "lactation": "Presente en leche; evaluar exposición del lactante y necesidad materna.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Hipotensión sintomática; empeoramiento transitorio de angina/infarto al iniciar o aumentar en coronariopatía grave. Preservar o ID legado anlodipino; não renomear automaticamente. Titulação bloqueada sem PA, indicação e função hepática.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=amlodipine",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2011/019787s047lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=amlodipine"
  }
};})();
/* GOLD33_SELECTIVE:anlodipino:END */
/* GOLD33_SELECTIVE:diltiazem:START */
;(function(){var db=window.CARDIOLOGIA_DRUGS_DB;if(!db||!db["diltiazem"])throw new Error("GOLD33_MISSING_CANONICAL:diltiazem");db["diltiazem"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "025",
    "requiredFieldCount": 33,
    "approvedSha256": "f490066cbf88c2c1fc49fde254c0e52699a8a5320bd3cfb2ee1a9d3050dd9c7f",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "mission10-owner-confirmed"
  },
  "pt": {
    "name": "Diltiazem",
    "class": "Bloqueador de canal de cálcio não di-hidropiridínico",
    "pharmacologicClass": "Bloqueia canais L cardíacos e vasculares, reduz condução AV",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "IR/ER em múltiplas forças e injeção 5 mg/mL; produtos ER não são intercambiáveis.",
    "presentations": "IR/ER em múltiplas forças e injeção 5 mg/mL; produtos ER não são intercambiáveis.",
    "mechanism": "Bloqueia canais L cardíacos e vasculares, reduz condução AV. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Metabolismo CYP3A4, metabólitos ativos, alta primeira passagem e meia-vida dependente da formulação.",
    "indications": "Hipertensão/angina por formas orais; controle agudo de frequência em FA/flutter e TSV por IV.",
    "dose": "IV: 0,25 mg/kg em 2 min; se necessário após 15 min, 0,35 mg/kg; infusão 5–15 mg/h. Oral ER: início usual 120–240 mg/dia conforme indicação/produto.",
    "pediatricDose": "Segurança/eficácia geral não estabelecidas nas bulas adultas; usar protocolo especializado. AUTOMATABLE=NO.",
    "renalDose": "Sem ajuste fixo; cautela e monitorar em DRC.",
    "hepaticDose": "Reduzir/cautela em hepatopatia; metabolismo hepático.",
    "commonAdverseEffects": "Edema, cefaleia, tontura, bradicardia e constipação.",
    "dangerousAdverseEffects": "Bloqueio AV, hipotensão, bradicardia/assistolia, piora de IC e lesão hepática.",
    "adverseEffects": "Edema, cefaleia, tontura, bradicardia e constipação. Graves: Bloqueio AV, hipotensão, bradicardia/assistolia, piora de IC e lesão hepática.",
    "contraindications": "Choque/hipotensão grave, bloqueio AV 2º/3º sem marca-passo, síndrome do nó sinusal, WPW com FA/flutter e uso IV de beta-bloqueador próximo.",
    "interactions": "Beta-bloqueadores, digoxina, CYP3A4, estatinas e outros bradicardizantes/hipotensores.",
    "monitoring": "ECG/FC, PA, sinais de IC, fígado, rim e interações.",
    "administration": "ER engolir inteira conforme produto; IV somente com ECG/PA contínuos.",
    "preparation": "Para infusão, diluir conforme rótulo e confirmar compatibilidade/concentração.",
    "infusionProtocol": "Bolus em 2 min; infusão titulada 5–15 mg/h, geralmente até 24 h conforme rótulo.",
    "pregnancy": "Dados limitados; usar se benefício justificar.",
    "lactation": "Passa ao leite; considerar alternativa/monitorar lactente.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Bloqueio AV, hipotensão, bradicardia/assistolia, piora de IC e lesão hepática. Bolus/infusão bloqueados sem ritmo/ECG, peso, PA, FEVE/IC, WPW, bloqueios, beta-bloqueador/digoxina, concentração e monitorização contínua.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=diltiazem",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.ahajournals.org/doi/10.1161/CIR.0000000000001193"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=diltiazem"
  },
  "es": {
    "name": "Diltiazem",
    "class": "Bloqueador de canal de calcio no dihidropiridínico",
    "pharmacologicClass": "Bloquea canales L cardíacos y vasculares, reduce conducción AV",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "IR/ER en múltiples dosis e inyección 5 mg/mL; productos ER no intercambiables.",
    "presentations": "IR/ER en múltiples dosis e inyección 5 mg/mL; productos ER no intercambiables.",
    "mechanism": "Bloquea canales L cardíacos y vasculares, reduce conducción AV. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Metabolismo CYP3A4, metabolitos activos, alto primer paso y semivida según formulación.",
    "indications": "Hipertensión/angina con formas orales; control agudo de frecuencia en FA/flutter y TSV por IV.",
    "dose": "IV: 0,25 mg/kg en 2 min; si precisa tras 15 min, 0,35 mg/kg; infusión 5–15 mg/h. Oral ER: inicio habitual 120–240 mg/día según indicación/producto.",
    "pediatricDose": "Seguridad/eficacia general no establecidas en fichas adultas; usar protocolo especializado. AUTOMATABLE=NO.",
    "renalDose": "Sin ajuste fijo; precaución y control en ERC.",
    "hepaticDose": "Reducir/precaución en hepatopatía; metabolismo hepático.",
    "commonAdverseEffects": "Edema, cefalea, mareo, bradicardia y estreñimiento.",
    "dangerousAdverseEffects": "Bloqueo AV, hipotensión, bradicardia/asistolia, empeoramiento de IC y lesión hepática.",
    "adverseEffects": "Edema, cefalea, mareo, bradicardia y estreñimiento. Graves: Bloqueo AV, hipotensión, bradicardia/asistolia, empeoramiento de IC y lesión hepática.",
    "contraindications": "Choque/hipotensión grave, bloqueo AV 2º/3º sin marcapasos, nodo sinusal, WPW con FA/flutter y betabloqueador IV cercano.",
    "interactions": "Betabloqueadores, digoxina, CYP3A4, estatinas y otros bradicardizantes/hipotensores.",
    "monitoring": "ECG/FC, PA, signos de IC, hígado, riñón e interacciones.",
    "administration": "ER tragar entera según producto; IV solo con ECG/PA continuos.",
    "preparation": "Para infusión, diluir según ficha y confirmar compatibilidad/concentración.",
    "infusionProtocol": "Bolo en 2 min; infusión titulada 5–15 mg/h, generalmente hasta 24 h según ficha.",
    "pregnancy": "Datos limitados; usar si beneficio justifica.",
    "lactation": "Pasa a leche; considerar alternativa/controlar lactante.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Bloqueo AV, hipotensión, bradicardia/asistolia, empeoramiento de IC y lesión hepática. Bolus/infusão bloqueados sem ritmo/ECG, peso, PA, FEVE/IC, WPW, bloqueios, beta-bloqueador/digoxina, concentração e monitorização contínua.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=diltiazem",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.ahajournals.org/doi/10.1161/CIR.0000000000001193"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=diltiazem"
  }
};})();
/* GOLD33_SELECTIVE:diltiazem:END */
/* GOLD33_SELECTIVE:doxazosina_lp:START */
;(function(){var db=window.CARDIOLOGIA_DRUGS_DB;if(!db||!db["doxazosina_lp"])throw new Error("GOLD33_MISSING_CANONICAL:doxazosina_lp");db["doxazosina_lp"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "027",
    "requiredFieldCount": 33,
    "approvedSha256": "b6a76fbf1440e5ec71509c8cde336ce4c45c6a97a183998429f649b5751b7fd7",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Doxazosina de liberação prolongada",
    "class": "Bloqueador alfa-1 LP",
    "pharmacologicClass": "Antagonismo alfa-1 periférico",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Comprimidos LP 4/8 mg.",
    "presentations": "Comprimidos LP 4/8 mg.",
    "mechanism": "Antagonismo alfa-1 periférico. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Liberação controlada; meia-vida aparente ~15–19 h.",
    "indications": "Sintomas de hiperplasia prostática benigna; não intercambiável mg a mg com IR.",
    "dose": "4 mg VO 1x/dia com café da manhã; pode aumentar para 8 mg após 3–4 semanas.",
    "pediatricDose": "Não estabelecido. AUTOMATABLE=NO.",
    "renalDose": "Sem ajuste usual.",
    "hepaticDose": "Cautela; evitar hepatopatia grave.",
    "commonAdverseEffects": "Tontura, cefaleia, fadiga, edema e hipotensão.",
    "dangerousAdverseEffects": "Síncope, priapismo e íris flácida intraoperatória.",
    "adverseEffects": "Tontura, cefaleia, fadiga, edema e hipotensão. Graves: Síncope, priapismo e íris flácida intraoperatória.",
    "contraindications": "Hipersensibilidade a quinazolinas; obstrução GI importante exige cautela pela matriz.",
    "interactions": "PDE5 e anti-hipertensivos aumentam hipotensão.",
    "monitoring": "PA ortostática, sintomas urinários e tolerabilidade.",
    "administration": "Engolir inteira com café da manhã; não triturar/mastigar.",
    "preparation": "Usar a apresentação correta; seguir rótulo.",
    "infusionProtocol": "Não aplicável salvo produto parenteral.",
    "pregnancy": "Usar somente após avaliação individual de benefício-risco.",
    "lactation": "Dados limitados; avaliar exposição do lactente.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Síncope, priapismo e íris flácida intraoperatória. Conversão/titulação bloqueadas sem formulação exata, indicação, PA, fígado e risco GI.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=doxazosin+extended+release",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2009/021625s008lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=doxazosin+extended+release"
  },
  "es": {
    "name": "Doxazosina de liberación prolongada",
    "class": "Bloqueante alfa-1 LP",
    "pharmacologicClass": "Antagonismo alfa-1 periférico",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Comprimidos LP 4/8 mg.",
    "presentations": "Comprimidos LP 4/8 mg.",
    "mechanism": "Antagonismo alfa-1 periférico. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Liberación controlada; semivida aparente ~15–19 h.",
    "indications": "Síntomas de hiperplasia prostática benigna; no intercambiable mg a mg con IR.",
    "dose": "4 mg VO 1 vez/día con desayuno; puede subir a 8 mg tras 3–4 semanas.",
    "pediatricDose": "No establecido. AUTOMATABLE=NO.",
    "renalDose": "Sin ajuste habitual.",
    "hepaticDose": "Precaución; evitar hepatopatía grave.",
    "commonAdverseEffects": "Mareo, cefalea, fatiga, edema e hipotensión.",
    "dangerousAdverseEffects": "Síncope, priapismo e iris flácido intraoperatorio.",
    "adverseEffects": "Mareo, cefalea, fatiga, edema e hipotensión. Graves: Síncope, priapismo e iris flácido intraoperatorio.",
    "contraindications": "Hipersensibilidad a quinazolinas; obstrucción GI importante exige precaución por matriz.",
    "interactions": "PDE5 y antihipertensivos aumentan hipotensión.",
    "monitoring": "PA ortostática, síntomas urinarios y tolerabilidad.",
    "administration": "Tragar entera con desayuno; no triturar/masticar.",
    "preparation": "Usar presentación correcta; seguir ficha.",
    "infusionProtocol": "No aplicable salvo producto parenteral.",
    "pregnancy": "Usar solo tras evaluación individual de beneficio-riesgo.",
    "lactation": "Datos limitados; evaluar exposición del lactante.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Síncope, priapismo e iris flácido intraoperatorio. Conversão/titulação bloqueadas sem formulação exata, indicação, PA, fígado e risco GI.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=doxazosin+extended+release",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2009/021625s008lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=doxazosin+extended+release"
  }
};})();
/* GOLD33_SELECTIVE:doxazosina_lp:END */
/* GOLD33_SELECTIVE:felodipina:START */
;(function(){var db=window.CARDIOLOGIA_DRUGS_DB;if(!db||!db["felodipina"])throw new Error("GOLD33_MISSING_CANONICAL:felodipina");db["felodipina"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "033",
    "requiredFieldCount": 33,
    "approvedSha256": "2acfdef995a909e916ea91d994b7b20e7dcbe8969b789b3749b57c0f035b63e9",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Felodipina",
    "class": "Anti-hipertensivo",
    "pharmacologicClass": "Bloqueador de canal de cálcio diidropiridínico",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Comprimidos de liberação prolongada 2,5/5/10 mg.",
    "presentations": "Comprimidos de liberação prolongada 2,5/5/10 mg.",
    "mechanism": "Bloqueador de canal de cálcio diidropiridínico. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Metabolismo extenso CYP3A4; meia-vida ~25 h.",
    "indications": "Hipertensão arterial.",
    "dose": "Iniciar 5 mg VO 1x/dia; faixa 2,5–10 mg/dia, ajustar em intervalos ≥2 semanas.",
    "pediatricDose": "Não estabelecido no rótulo adulto consultado. AUTOMATABLE=NO.",
    "renalDose": "Sem ajuste usual.",
    "hepaticDose": "Iniciar 2,5 mg/dia e titular com cautela em hepatopatia.",
    "commonAdverseEffects": "Edema periférico, cefaleia, rubor, tontura e palpitação.",
    "dangerousAdverseEffects": "Hipotensão, síncope, piora de angina/taquicardia e reação hepática rara.",
    "adverseEffects": "Edema periférico, cefaleia, rubor, tontura e palpitação. Graves: Hipotensão, síncope, piora de angina/taquicardia e reação hepática rara.",
    "contraindications": "Hipersensibilidade.",
    "interactions": "Inibidores/indutores CYP3A4 e grapefruit; outros anti-hipertensivos aumentam hipotensão.",
    "monitoring": "PA, edema, frequência cardíaca, sintomas de angina e hiperplasia gengival.",
    "administration": "Engolir inteira; em jejum ou com refeição leve e consistente; não triturar.",
    "preparation": "Confirmar produto, força, concentração e apresentação; seguir rótulo oficial.",
    "infusionProtocol": "Não aplicável salvo apresentação parenteral; seguir protocolo específico.",
    "pregnancy": "Avaliar benefício-risco e rotulagem específica.",
    "lactation": "Avaliar exposição do lactente e alternativas.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Hipotensão, síncope, piora de angina/taquicardia e reação hepática rara. Titulação bloqueada sem PA, fígado, idade, sintomas coronarianos, edema e revisão CYP3A4/grapefruit.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=felodipine",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2012/019834s026lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=felodipine"
  },
  "es": {
    "name": "Felodipino",
    "class": "Antihipertensivo",
    "pharmacologicClass": "Bloqueador de canales de calcio dihidropiridínico",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Comprimidos de liberación prolongada 2,5/5/10 mg.",
    "presentations": "Comprimidos de liberación prolongada 2,5/5/10 mg.",
    "mechanism": "Bloqueador de canales de calcio dihidropiridínico. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Metabolismo extenso CYP3A4; semivida ~25 h.",
    "indications": "Hipertensión arterial.",
    "dose": "Iniciar 5 mg VO 1 vez/día; rango 2,5–10 mg/día, ajustar en intervalos ≥2 semanas.",
    "pediatricDose": "No establecido en la ficha adulta consultada. AUTOMATABLE=NO.",
    "renalDose": "Sin ajuste habitual.",
    "hepaticDose": "Iniciar 2,5 mg/día y titular con precaución en hepatopatía.",
    "commonAdverseEffects": "Edema periférico, cefalea, rubor, mareo y palpitación.",
    "dangerousAdverseEffects": "Hipotensión, síncope, empeoramiento de angina/taquicardia y reacción hepática rara.",
    "adverseEffects": "Edema periférico, cefalea, rubor, mareo y palpitación. Graves: Hipotensión, síncope, empeoramiento de angina/taquicardia y reacción hepática rara.",
    "contraindications": "Hipersensibilidad.",
    "interactions": "Inhibidores/inductores CYP3A4 y pomelo; otros antihipertensivos aumentan hipotensión.",
    "monitoring": "PA, edema, frecuencia cardíaca, síntomas de angina e hiperplasia gingival.",
    "administration": "Tragar entero; en ayunas o con comida ligera y consistente; no triturar.",
    "preparation": "Confirmar producto, dosis, concentración y presentación; seguir ficha oficial.",
    "infusionProtocol": "No aplicable salvo presentación parenteral; seguir protocolo específico.",
    "pregnancy": "Evaluar beneficio-riesgo y ficha específica.",
    "lactation": "Evaluar exposición del lactante y alternativas.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Hipotensión, síncope, empeoramiento de angina/taquicardia y reacción hepática rara. Titulação bloqueada sem PA, fígado, idade, sintomas coronarianos, edema e revisão CYP3A4/grapefruit.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=felodipine",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2012/019834s026lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=felodipine"
  }
};})();
/* GOLD33_SELECTIVE:felodipina:END */
/* GOLD33_SELECTIVE:furosemida_iv:START */
;(function(){var db=window.CARDIOLOGIA_DRUGS_DB;if(!db||!db["furosemida_iv"])throw new Error("GOLD33_MISSING_CANONICAL:furosemida_iv");db["furosemida_iv"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "038",
    "requiredFieldCount": 33,
    "approvedSha256": "ad9a95080c0e044c8ec533188195d104f46324587195ff6f80e28911f7c2dc5f",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Furosemida IV",
    "class": "Diurético de alça intravenoso",
    "pharmacologicClass": "Inibe Na-K-2Cl na alça de Henle",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Injeção 10 mg/mL em ampolas/frascos; apresentações variam.",
    "presentations": "Injeção 10 mg/mL em ampolas/frascos; apresentações variam.",
    "mechanism": "Inibe Na-K-2Cl na alça de Henle. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Alta ligação proteica; secreção tubular; efeito IV em minutos.",
    "indications": "Edema agudo quando necessária diurese parenteral; adjuvante no edema pulmonar agudo.",
    "dose": "Edema: 20-40 mg IV lenta; pode aumentar 20 mg após ≥2 h conforme resposta. Edema pulmonar: 40 mg IV lenta, podendo usar 80 mg após 1 h se resposta insuficiente.",
    "pediatricDose": "1 mg/kg IV/IM inicial; pode aumentar 1 mg/kg após ≥2 h; doses >6 mg/kg não recomendadas. AUTOMATABLE=NO.",
    "renalDose": "Individualizar; DRC pode exigir maior dose, com monitorização intensiva.",
    "hepaticDose": "Cautela em cirrose/ascite; corrigir eletrólitos e evitar mudança rápida de volume.",
    "commonAdverseEffects": "Poliúria, hipotensão e distúrbios eletrolíticos.",
    "dangerousAdverseEffects": "Ototoxicidade, arritmia, choque hipovolêmico, lesão renal e SCAR.",
    "adverseEffects": "Poliúria, hipotensão e distúrbios eletrolíticos. Graves: Ototoxicidade, arritmia, choque hipovolêmico, lesão renal e SCAR.",
    "contraindications": "Anúria e hipersensibilidade.",
    "interactions": "Aminoglicosídeos, lítio, digoxina, AINEs, anti-hipertensivos e cisplatina.",
    "monitoring": "PA, diurese, peso, Na/K/Mg, creatinina, ácido úrico e audição.",
    "administration": "IV lenta; evitar extravasamento e monitorar PA/diurese.",
    "preparation": "Pode diluir conforme produto e pH; usar solução compatível.",
    "infusionProtocol": "Não exceder 4 mg/min em adultos para reduzir ototoxicidade; doses altas exigem taxa menor conforme protocolo.",
    "pregnancy": "Usar se benefício justificar.",
    "lactation": "Pode reduzir produção de leite; monitorar.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Ototoxicidade, arritmia, choque hipovolêmico, lesão renal e SCAR. Dose e bomba bloqueadas sem indicação, peso, volume, PA, eletrólitos, rim/fígado, concentração, acesso e fármacos ototóxicos.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=furosemide+injection",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2016/016273s068lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=furosemide+injection"
  },
  "es": {
    "name": "Furosemida IV",
    "class": "Diurético de asa intravenoso",
    "pharmacologicClass": "Inhibe Na-K-2Cl en asa de Henle",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Inyección 10 mg/mL en ampollas/viales; presentaciones variables.",
    "presentations": "Inyección 10 mg/mL en ampollas/viales; presentaciones variables.",
    "mechanism": "Inhibe Na-K-2Cl en asa de Henle. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Alta unión proteica; secreción tubular; efecto IV en minutos.",
    "indications": "Edema agudo cuando se requiere diuresis parenteral; adyuvante en edema pulmonar agudo.",
    "dose": "Edema: 20-40 mg IV lenta; puede aumentar 20 mg tras ≥2 h según respuesta. Edema pulmonar: 40 mg IV lenta, pudiendo usar 80 mg tras 1 h si respuesta insuficiente.",
    "pediatricDose": "1 mg/kg IV/IM inicial; puede aumentar 1 mg/kg tras ≥2 h; dosis >6 mg/kg no recomendadas. AUTOMATABLE=NO.",
    "renalDose": "Individualizar; ERC puede requerir mayor dosis, con vigilancia intensiva.",
    "hepaticDose": "Precaución en cirrosis/ascitis; corregir electrolitos y evitar cambios rápidos de volumen.",
    "commonAdverseEffects": "Poliuria, hipotensión y trastornos electrolíticos.",
    "dangerousAdverseEffects": "Ototoxicidad, arritmia, shock hipovolémico, lesión renal y SCAR.",
    "adverseEffects": "Poliuria, hipotensión y trastornos electrolíticos. Graves: Ototoxicidad, arritmia, shock hipovolémico, lesión renal y SCAR.",
    "contraindications": "Anuria e hipersensibilidad.",
    "interactions": "Aminoglucósidos, litio, digoxina, AINE, antihipertensivos y cisplatino.",
    "monitoring": "PA, diuresis, peso, Na/K/Mg, creatinina, ácido úrico y audición.",
    "administration": "IV lenta; evitar extravasación y vigilar PA/diuresis.",
    "preparation": "Puede diluirse según producto y pH; usar solución compatible.",
    "infusionProtocol": "No superar 4 mg/min en adultos para reducir ototoxicidad; dosis altas requieren menor velocidad según protocolo.",
    "pregnancy": "Usar si beneficio justifica.",
    "lactation": "Puede reducir producción de leche; vigilar.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Ototoxicidad, arritmia, shock hipovolémico, lesión renal y SCAR. Dose e bomba bloqueadas sem indicação, peso, volume, PA, eletrólitos, rim/fígado, concentração, acesso e fármacos ototóxicos.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=furosemide+injection",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2016/016273s068lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=furosemide+injection"
  }
};})();
/* GOLD33_SELECTIVE:furosemida_iv:END */
/* GOLD33_SELECTIVE:lidocaina_iv:START */
;(function(){var db=window.CARDIOLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="lidocaina_iv";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:lidocaina_iv:"+matches.length);drug=matches[0];}else{drug=db&&db["lidocaina_iv"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:lidocaina_iv");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "046",
    "requiredFieldCount": 33,
    "approvedSha256": "b01bced97714803d025e288b269c2a23ae3562608450a3618c1ccb6e9db46467",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "BLOQUEADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Lidocaína IV",
    "class": "Antiarrítmico classe Ib",
    "pharmacologicClass": "Antiarrítmico classe Ib",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Solução IV; concentração deve ser confirmada antes do cálculo.",
    "presentations": "Solução IV; concentração deve ser confirmada antes do cálculo.",
    "mechanism": "Mecanismo específico da classe conforme fonte primária e formulação.",
    "pharmacodynamics": "Mecanismo específico da classe conforme fonte primária e formulação.",
    "pharmacokinetics": "Revisar absorção, metabolismo, meia-vida e eliminação na fonte primária.",
    "indications": "FV/TV sem pulso refratária e arritmias ventriculares selecionadas.",
    "dose": "PCR adulto: 1-1,5 mg/kg IV/IO; repetir 0,5-0,75 mg/kg a cada 5-10 min, máximo total 3 mg/kg. Infusão pós-ROSC: 1-4 mg/min conforme protocolo.",
    "pediatricDose": "Requer tabela completa por idade/peso; automação pediátrica bloqueada.",
    "renalDose": "Avaliar função renal e tabela específica; não inferir ajuste.",
    "hepaticDose": "Avaliar hepatopatia; não inferir ajuste.",
    "commonAdverseEffects": "Parestesia, sonolência, náusea e confusão.",
    "dangerousAdverseEffects": "Convulsões, bloqueio, bradicardia, hipotensão e parada.",
    "adverseEffects": "Parestesia, sonolência, náusea e confusão.; Convulsões, bloqueio, bradicardia, hipotensão e parada.",
    "contraindications": "Hipersensibilidade e contraindicações específicas da bula.",
    "interactions": "Revisar interações farmacodinâmicas e metabólicas aplicáveis.",
    "monitoring": "Monitorar eficácia, tolerabilidade, função orgânica e eventos graves.",
    "administration": "Usar somente via/formulação rotulada; respeitar técnica e alimentos.",
    "preparation": "Confirmar concentração, diluição e estabilidade no produto; não inferir.",
    "infusionProtocol": "Quando IV, usar bomba/monitorização e protocolo da bula; caso contrário não aplicável.",
    "pregnancy": "Avaliar risco fetal, indicação e bula.",
    "lactation": "Avaliar excreção e risco-benefício.",
    "specialPopulations": "Individualizar em idosos, comorbidades, gestação e disfunção orgânica.",
    "patientEducation": "Orientar adesão, sinais de alarme e não interromper abruptamente quando aplicável.",
    "clinicalPearls": "Formulações e combinações não são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Usar conforme diretriz oficial da indicação e jurisdição.",
    "safetyFlags": "Convulsões, bloqueio, bradicardia, hipotensão e parada.",
    "alerts": "Convulsões, bloqueio, bradicardia, hipotensão e parada.; monitorização obrigatória",
    "references": [
      "Fonte primária/oficial - https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-advanced-life-support",
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f21512ea-c7c3-4766-b976-b2c0b5616bf0"
    ],
    "ref": "https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-advanced-life-support"
  },
  "es": {
    "name": "Lidocaína IV",
    "class": "Antiarrítmico classe Ib",
    "pharmacologicClass": "Antiarrítmico classe Ib",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Solução IV; concentração deve ser confirmada antes do cálculo.",
    "presentations": "Solução IV; concentração deve ser confirmada antes do cálculo.",
    "mechanism": "Mecanismo específico da classe conforme fonte primária y formulação.",
    "pharmacodynamics": "Mecanismo específico da classe conforme fonte primária y formulação.",
    "pharmacokinetics": "Revisar absorção, metabolismo, meia-vida y eliminação na fonte primária.",
    "indications": "FV/TV sem pulso refratária y arritmias ventriculares selecionadas.",
    "dose": "PCR adulto: 1-1,5 mg/kg IV/IO; repetir 0,5-0,75 mg/kg a cada 5-10 min, máximo total 3 mg/kg. Infusão pós-ROSC: 1-4 mg/min conforme protocolo.",
    "pediatricDose": "Requer tabela completa por idade/peso; automação pediátrica bloqueada.",
    "renalDose": "Avaliar función renal y tabela específica; no inferir ajuste.",
    "hepaticDose": "Avaliar hepatopatia; no inferir ajuste.",
    "commonAdverseEffects": "Parestesia, sonolência, náusea y confusão.",
    "dangerousAdverseEffects": "Convulsões, bloqueio, bradicardia, hipotensão y parada.",
    "adverseEffects": "Parestesia, sonolência, náusea y confusão.; Convulsões, bloqueio, bradicardia, hipotensão y parada.",
    "contraindications": "Hipersensibilidade y contraindicações específicas da bula.",
    "interactions": "Revisar interações farmacodinâmicas y metabólicas aplicáveis.",
    "monitoring": "Monitorar eficácia, tolerabilidade, función orgânica y eventos graves.",
    "administration": "Usar somente via/formulação rotulada; respeitar técnica y alimentos.",
    "preparation": "Confirmar concentração, diluição y estabilidade no produto; no inferir.",
    "infusionProtocol": "Quando IV, usar bomba/monitorização y protocolo da bula; caso contrário no aplicável.",
    "pregnancy": "Avaliar riesgo fetal, indicação y bula.",
    "lactation": "Avaliar excreção y riesgo-benefício.",
    "specialPopulations": "Individualizar em idosos, comorbidades, gestação y disfunción orgânica.",
    "patientEducation": "Orientar adesão, sinais de alarme y no interromper abruptamente quando aplicável.",
    "clinicalPearls": "Formulações y combinações no são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Usar conforme diretriz oficial da indicação y jurisdição.",
    "safetyFlags": "Convulsões, bloqueio, bradicardia, hipotensão y parada.",
    "alerts": "Convulsões, bloqueio, bradicardia, hipotensão y parada.; monitorização obrigatória",
    "references": [
      "Fonte primária/oficial - https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-advanced-life-support",
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f21512ea-c7c3-4766-b976-b2c0b5616bf0"
    ],
    "ref": "https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-advanced-life-support"
  }
};})();
/* GOLD33_SELECTIVE:lidocaina_iv:END */
/* GOLD33_SELECTIVE:manidipina:START */
;(function(){var db=window.CARDIOLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="manidipina";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:manidipina:"+matches.length);drug=matches[0];}else{drug=db&&db["manidipina"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:manidipina");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "048",
    "requiredFieldCount": 33,
    "approvedSha256": "31106a5e151f08bd2d807a5d1d0d90483780bc660c307b2c8833463be27e37b7",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "BLOQUEADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Manidipina",
    "class": "Bloqueador de canais de cálcio di-hidropiridínico",
    "pharmacologicClass": "Bloqueador de canais de cálcio di-hidropiridínico",
    "commercialNames": "Iperten",
    "presentation": "Comprimidos de 10 e 20 mg.",
    "presentations": "Comprimidos de 10 e 20 mg.",
    "mechanism": "Bloqueia canais de cálcio tipo L no músculo liso arterial, reduzindo entrada de cálcio, resistência vascular sistêmica e pressão arterial.",
    "pharmacodynamics": "Bloqueia canais de cálcio tipo L no músculo liso arterial, reduzindo entrada de cálcio, resistência vascular sistêmica e pressão arterial.",
    "pharmacokinetics": "Revisar absorção, metabolismo, meia-vida e eliminação na fonte primária.",
    "indications": "Hipertensão essencial leve a moderada em adultos",
    "dose": "hypertension: 10 mg uma vez ao dia; se após 2-4 semanas o efeito for insuficiente, aumentar para 20 mg uma vez ao dia.",
    "pediatricDose": "Requer tabela completa por idade/peso; automação pediátrica bloqueada.",
    "renalDose": "Avaliar função renal e tabela específica; não inferir ajuste.",
    "hepaticDose": "Avaliar hepatopatia; não inferir ajuste.",
    "commonAdverseEffects": "cefaleia; rubor; edema periférico; tontura; palpitações",
    "dangerousAdverseEffects": "hipotensão sintomática; piora de angina em pacientes suscetíveis; reação de hipersensibilidade rara",
    "adverseEffects": "Cefaleia, edema periférico, rubor, palpitação e tontura.; Hipotensão importante, angina paradoxal e eventos por interação com inibidores de CYP3A4.",
    "contraindications": "Crianças; angina instável ou primeiras 4 semanas pós-IAM; insuficiência cardíaca congestiva não tratada; ClCr <10 mL/min; insuficiência hepática moderada-grave; hipersensibilidade a di-hidropiridinas",
    "interactions": "Inibidores de CYP3A4 podem aumentar exposição; Indutores de CYP3A4 podem reduzir exposição; Outros anti-hipertensivos aumentam hipotensão; Grapefruit pode aumentar exposição em di-hidropiridinas sensíveis a CYP3A4",
    "monitoring": "Não ultrapassar 10 mg/dia em hepatopatia leve; Não usar com ClCr <10 mL/min nem em hepatopatia moderada-grave.",
    "administration": "Usar somente via/formulação rotulada; respeitar técnica e alimentos.",
    "preparation": "Confirmar concentração, diluição e estabilidade no produto; não inferir.",
    "infusionProtocol": "Quando IV, usar bomba/monitorização e protocolo da bula; caso contrário não aplicável.",
    "pregnancy": "Avaliar risco fetal, indicação e bula.",
    "lactation": "Avaliar excreção e risco-benefício.",
    "specialPopulations": "Individualizar em idosos, comorbidades, gestação e disfunção orgânica.",
    "patientEducation": "Orientar adesão, sinais de alarme e não interromper abruptamente quando aplicável.",
    "clinicalPearls": "Formulações e combinações não são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Usar conforme diretriz oficial da indicação e jurisdição.",
    "safetyFlags": "Hipotensão importante, angina paradoxal e eventos por interação com inibidores de CYP3A4.",
    "alerts": "Hipotensão importante, angina paradoxal e eventos por interação com inibidores de CYP3A4.; Não ultrapassar 10 mg/dia em hepatopatia leve; Não usar com ClCr <10 mL/min nem em hepatopatia moderada-grave.",
    "references": [
      "Fonte primária/oficial - https://cima.aemps.es/cima/publico/lista.html",
      "Fonte primária/oficial - https://www.aifa.gov.it/trova-farmaco"
    ],
    "ref": "https://cima.aemps.es/cima/publico/lista.html"
  },
  "es": {
    "name": "Manidipina",
    "class": "Bloqueador de canais de cálcio di-hidropiridínico",
    "pharmacologicClass": "Bloqueador de canais de cálcio di-hidropiridínico",
    "commercialNames": "Iperten",
    "presentation": "Comprimidos de 10 y 20 mg.",
    "presentations": "Comprimidos de 10 y 20 mg.",
    "mechanism": "Bloqueia canais de cálcio tipo L no músculo liso arterial, reduzindo entrada de cálcio, resistência vascular sistêmica y pressão arterial.",
    "pharmacodynamics": "Bloqueia canais de cálcio tipo L no músculo liso arterial, reduzindo entrada de cálcio, resistência vascular sistêmica y pressão arterial.",
    "pharmacokinetics": "Revisar absorção, metabolismo, meia-vida y eliminação na fonte primária.",
    "indications": "Hipertensão essencial leve a moderada em adultos",
    "dose": "hypertension: 10 mg uma vez ao dia; se após 2-4 semanas o efeito for insuficiente, aumentar para 20 mg uma vez ao dia.",
    "pediatricDose": "Requer tabela completa por idade/peso; automação pediátrica bloqueada.",
    "renalDose": "Avaliar función renal y tabela específica; no inferir ajuste.",
    "hepaticDose": "Avaliar hepatopatia; no inferir ajuste.",
    "commonAdverseEffects": "cefaleia; rubor; edema periférico; tontura; palpitações",
    "dangerousAdverseEffects": "hipotensão sintomática; piora de angina em pacientes suscetíveis; reação de hipersensibilidade rara",
    "adverseEffects": "Cefaleia, edema periférico, rubor, palpitação y tontura.; Hipotensão importante, angina paradoxal y eventos por interação con inibidores de CYP3A4.",
    "contraindications": "Crianças; angina instável ou primeiras 4 semanas pós-IAM; insuficiência cardíaca congestiva no tratada; ClCr <10 mL/min; insuficiência hepática moderada-grave; hipersensibilidade a di-hidropiridinas",
    "interactions": "Inibidores de CYP3A4 podem aumentar exposição; Indutores de CYP3A4 podem reduzir exposição; Outros anti-hipertensivos aumentam hipotensão; Grapefruit pode aumentar exposição em di-hidropiridinas sensíveis a CYP3A4",
    "monitoring": "No ultrapassar 10 mg/dia em hepatopatia leve; No usar con ClCr <10 mL/min nem em hepatopatia moderada-grave.",
    "administration": "Usar somente via/formulação rotulada; respeitar técnica y alimentos.",
    "preparation": "Confirmar concentração, diluição y estabilidade no produto; no inferir.",
    "infusionProtocol": "Quando IV, usar bomba/monitorização y protocolo da bula; caso contrário no aplicável.",
    "pregnancy": "Avaliar riesgo fetal, indicação y bula.",
    "lactation": "Avaliar excreção y riesgo-benefício.",
    "specialPopulations": "Individualizar em idosos, comorbidades, gestação y disfunción orgânica.",
    "patientEducation": "Orientar adesão, sinais de alarme y no interromper abruptamente quando aplicável.",
    "clinicalPearls": "Formulações y combinações no são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Usar conforme diretriz oficial da indicação y jurisdição.",
    "safetyFlags": "Hipotensão importante, angina paradoxal y eventos por interação con inibidores de CYP3A4.",
    "alerts": "Hipotensão importante, angina paradoxal y eventos por interação con inibidores de CYP3A4.; No ultrapassar 10 mg/dia em hepatopatia leve; No usar con ClCr <10 mL/min nem em hepatopatia moderada-grave.",
    "references": [
      "Fonte primária/oficial - https://cima.aemps.es/cima/publico/lista.html",
      "Fonte primária/oficial - https://www.aifa.gov.it/trova-farmaco"
    ],
    "ref": "https://cima.aemps.es/cima/publico/lista.html"
  }
};})();
/* GOLD33_SELECTIVE:manidipina:END */
/* GOLD33_SELECTIVE:nifedipina:START */
;(function(){var db=window.CARDIOLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="nifedipina";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:nifedipina:"+matches.length);drug=matches[0];}else{drug=db&&db["nifedipina"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:nifedipina");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "055",
    "requiredFieldCount": 33,
    "approvedSha256": "66de27fa500997712b3fa75feb4f7118d6d192d9a26ed1116f35481851314f46",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "BLOQUEADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Nifedipina",
    "class": "Bloqueador de canais de cálcio di-hidropiridínico",
    "pharmacologicClass": "Bloqueador de canais de cálcio di-hidropiridínico",
    "commercialNames": "Procardia XL; Adalat CC",
    "presentation": "Comprimidos de liberação prolongada.",
    "presentations": "Comprimidos de liberação prolongada.",
    "mechanism": "Bloqueia canais de cálcio tipo L no músculo liso arterial, produzindo vasodilatação e redução da resistência vascular sistêmica.",
    "pharmacodynamics": "Bloqueia canais de cálcio tipo L no músculo liso arterial, produzindo vasodilatação e redução da resistência vascular sistêmica.",
    "pharmacokinetics": "Revisar absorção, metabolismo, meia-vida e eliminação na fonte primária.",
    "indications": "Hipertensão; angina crônica estável ou vasoespástica conforme produto de liberação prolongada",
    "dose": "hypertensionER: 30 mg uma vez ao dia em jejum; titular conforme eficácia e segurança ao longo de 7-14 dias; manutenção 30-60 mg/dia; não se recomenda titular acima de 90 mg/dia na bula citada.",
    "pediatricDose": "Requer tabela completa por idade/peso; automação pediátrica bloqueada.",
    "renalDose": "Avaliar função renal e tabela específica; não inferir ajuste.",
    "hepaticDose": "Avaliar hepatopatia; não inferir ajuste.",
    "commonAdverseEffects": "edema periférico; cefaleia; rubor; tontura; palpitações",
    "dangerousAdverseEffects": "hipotensão sintomática; piora de angina no início ou aumento de dose em doença coronariana grave; reação de hipersensibilidade rara",
    "adverseEffects": "Edema periférico, cefaleia, rubor, tontura e náusea.; Hipotensão, piora de angina/infarto, insuficiência cardíaca e obstrução GI com formulação não deformável.",
    "contraindications": "Hipersensibilidade ao fármaco; avaliar hipotensão grave individualmente",
    "interactions": "Outros anti-hipertensivos aumentam hipotensão; Inibidores de CYP3A4 podem aumentar exposição; Indutores de CYP3A4 podem reduzir exposição; Grapefruit é clinicamente relevante especialmente para nifedipino e felodipino",
    "monitoring": "Evitar trocas não equivalentes entre formulações de liberação imediata e prolongada; Titular lentamente em hepatopatia importante.",
    "administration": "Usar somente via/formulação rotulada; respeitar técnica e alimentos.",
    "preparation": "Confirmar concentração, diluição e estabilidade no produto; não inferir.",
    "infusionProtocol": "Quando IV, usar bomba/monitorização e protocolo da bula; caso contrário não aplicável.",
    "pregnancy": "Avaliar risco fetal, indicação e bula.",
    "lactation": "Avaliar excreção e risco-benefício.",
    "specialPopulations": "Individualizar em idosos, comorbidades, gestação e disfunção orgânica.",
    "patientEducation": "Orientar adesão, sinais de alarme e não interromper abruptamente quando aplicável.",
    "clinicalPearls": "Formulações e combinações não são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Usar conforme diretriz oficial da indicação e jurisdição.",
    "safetyFlags": "Hipotensão, piora de angina/infarto, insuficiência cardíaca e obstrução GI com formulação não deformável.",
    "alerts": "Hipotensão, piora de angina/infarto, insuficiência cardíaca e obstrução GI com formulação não deformável.; Evitar trocas não equivalentes entre formulações de liberação imediata e prolongada; Titular lentamente em hepatopatia importante.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=nifedipine",
      "Fonte primária/oficial - https://www.accessdata.fda.gov/drugsatfda_docs/label/2013/019684s026lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=nifedipine"
  },
  "es": {
    "name": "Nifedipina",
    "class": "Bloqueador de canais de cálcio di-hidropiridínico",
    "pharmacologicClass": "Bloqueador de canais de cálcio di-hidropiridínico",
    "commercialNames": "Procardia XL; Adalat CC",
    "presentation": "Comprimidos de liberação prolongada.",
    "presentations": "Comprimidos de liberação prolongada.",
    "mechanism": "Bloqueia canais de cálcio tipo L no músculo liso arterial, produzindo vasodilatação y redução da resistência vascular sistêmica.",
    "pharmacodynamics": "Bloqueia canais de cálcio tipo L no músculo liso arterial, produzindo vasodilatação y redução da resistência vascular sistêmica.",
    "pharmacokinetics": "Revisar absorção, metabolismo, meia-vida y eliminação na fonte primária.",
    "indications": "Hipertensão; angina crônica estável ou vasoespástica conforme produto de liberação prolongada",
    "dose": "hypertensionER: 30 mg uma vez ao dia em jejum; titular conforme eficácia y seguridad ao longo de 7-14 dias; manutenção 30-60 mg/dia; no se recomenda titular acima de 90 mg/dia na bula citada.",
    "pediatricDose": "Requer tabela completa por idade/peso; automação pediátrica bloqueada.",
    "renalDose": "Avaliar función renal y tabela específica; no inferir ajuste.",
    "hepaticDose": "Avaliar hepatopatia; no inferir ajuste.",
    "commonAdverseEffects": "edema periférico; cefaleia; rubor; tontura; palpitações",
    "dangerousAdverseEffects": "hipotensão sintomática; piora de angina no início ou aumento de dosis em doença coronariana grave; reação de hipersensibilidade rara",
    "adverseEffects": "Edema periférico, cefaleia, rubor, tontura y náusea.; Hipotensão, piora de angina/infarto, insuficiência cardíaca y obstrução GI con formulação no deformável.",
    "contraindications": "Hipersensibilidade ao fármaco; avaliar hipotensão grave individualmente",
    "interactions": "Outros anti-hipertensivos aumentam hipotensão; Inibidores de CYP3A4 podem aumentar exposição; Indutores de CYP3A4 podem reduzir exposição; Grapefruit é clinicamente relevante especialmente para nifedipino y felodipino",
    "monitoring": "Evitar trocas no equivalentes entre formulações de liberação imediata y prolongada; Titular lentamente em hepatopatia importante.",
    "administration": "Usar somente via/formulação rotulada; respeitar técnica y alimentos.",
    "preparation": "Confirmar concentração, diluição y estabilidade no produto; no inferir.",
    "infusionProtocol": "Quando IV, usar bomba/monitorização y protocolo da bula; caso contrário no aplicável.",
    "pregnancy": "Avaliar riesgo fetal, indicação y bula.",
    "lactation": "Avaliar excreção y riesgo-benefício.",
    "specialPopulations": "Individualizar em idosos, comorbidades, gestação y disfunción orgânica.",
    "patientEducation": "Orientar adesão, sinais de alarme y no interromper abruptamente quando aplicável.",
    "clinicalPearls": "Formulações y combinações no são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Usar conforme diretriz oficial da indicação y jurisdição.",
    "safetyFlags": "Hipotensão, piora de angina/infarto, insuficiência cardíaca y obstrução GI con formulação no deformável.",
    "alerts": "Hipotensão, piora de angina/infarto, insuficiência cardíaca y obstrução GI con formulação no deformável.; Evitar trocas no equivalentes entre formulações de liberação imediata y prolongada; Titular lentamente em hepatopatia importante.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=nifedipine",
      "Fonte primária/oficial - https://www.accessdata.fda.gov/drugsatfda_docs/label/2013/019684s026lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=nifedipine"
  }
};})();
/* GOLD33_SELECTIVE:nifedipina:END */
/* GOLD33_SELECTIVE:nitroglicerina:START */
;(function(){var db=window.CARDIOLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="nitroglicerina";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:nitroglicerina:"+matches.length);drug=matches[0];}else{drug=db&&db["nitroglicerina"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:nitroglicerina");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "056",
    "requiredFieldCount": 33,
    "approvedSha256": "498cafa4e0fbd5a28b86b77472df89a94eaa0fa96bde0eb3b706fdf18d0e7236",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "BLOQUEADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Nitroglicerina — formulações não parenterais",
    "class": "Nitrato orgânico vasodilatador",
    "pharmacologicClass": "Nitrato orgânico vasodilatador",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Adesivos, pomada, comprimidos/cápsulas e sprays em diversas forças.",
    "presentations": "Adesivos, pomada, comprimidos/cápsulas e sprays em diversas forças.",
    "mechanism": "Mecanismo específico da classe conforme fonte primária e formulação.",
    "pharmacodynamics": "Mecanismo específico da classe conforme fonte primária e formulação.",
    "pharmacokinetics": "Revisar absorção, metabolismo, meia-vida e eliminação na fonte primária.",
    "indications": "Prevenção ou tratamento de angina conforme formulação sublingual, transdérmica, tópica ou oral.",
    "dose": "Não existe dose universal entre formulações. Adesivos, pomada, cápsulas e spray têm início, duração e intervalo livre de nitrato próprios; confirmar produto. Não reutilizar esta ficha para infusão IV.",
    "pediatricDose": "Requer tabela completa por idade/peso; automação pediátrica bloqueada.",
    "renalDose": "Avaliar função renal e tabela específica; não inferir ajuste.",
    "hepaticDose": "Avaliar hepatopatia; não inferir ajuste.",
    "commonAdverseEffects": "Cefaleia, rubor, tontura, hipotensão e taquicardia reflexa.",
    "dangerousAdverseEffects": "Hipotensão grave, síncope, metemoglobinemia e isquemia; interação fatal com inibidores de PDE5 ou riociguate.",
    "adverseEffects": "Cefaleia, rubor, tontura, hipotensão e taquicardia reflexa.; Hipotensão grave, síncope, metemoglobinemia e isquemia; interação fatal com inibidores de PDE5 ou riociguate.",
    "contraindications": "Hipersensibilidade e contraindicações específicas da bula.",
    "interactions": "Revisar interações farmacodinâmicas e metabólicas aplicáveis.",
    "monitoring": "Monitorar eficácia, tolerabilidade, função orgânica e eventos graves.",
    "administration": "Usar somente via/formulação rotulada; respeitar técnica e alimentos.",
    "preparation": "Confirmar concentração, diluição e estabilidade no produto; não inferir.",
    "infusionProtocol": "Quando IV, usar bomba/monitorização e protocolo da bula; caso contrário não aplicável.",
    "pregnancy": "Avaliar risco fetal, indicação e bula.",
    "lactation": "Avaliar excreção e risco-benefício.",
    "specialPopulations": "Individualizar em idosos, comorbidades, gestação e disfunção orgânica.",
    "patientEducation": "Orientar adesão, sinais de alarme e não interromper abruptamente quando aplicável.",
    "clinicalPearls": "Formulações e combinações não são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Usar conforme diretriz oficial da indicação e jurisdição.",
    "safetyFlags": "Hipotensão grave, síncope, metemoglobinemia e isquemia; interação fatal com inibidores de PDE5 ou riociguate.",
    "alerts": "Hipotensão grave, síncope, metemoglobinemia e isquemia; interação fatal com inibidores de PDE5 ou riociguate.; monitorização obrigatória",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=nitroglycerin",
      "Fonte primária/oficial - https://www.accessdata.fda.gov/drugsatfda_docs/label/2014/018705s015lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=nitroglycerin"
  },
  "es": {
    "name": "Nitroglicerina — formulações no parenterais",
    "class": "Nitrato orgânico vasodilatador",
    "pharmacologicClass": "Nitrato orgânico vasodilatador",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Adesivos, pomada, comprimidos/cápsulas y sprays em diversas forças.",
    "presentations": "Adesivos, pomada, comprimidos/cápsulas y sprays em diversas forças.",
    "mechanism": "Mecanismo específico da classe conforme fonte primária y formulação.",
    "pharmacodynamics": "Mecanismo específico da classe conforme fonte primária y formulação.",
    "pharmacokinetics": "Revisar absorção, metabolismo, meia-vida y eliminação na fonte primária.",
    "indications": "Prevenção ou tratamento de angina conforme formulação sublingual, transdérmica, tópica ou oral.",
    "dose": "No existe dosis universal entre formulações. Adesivos, pomada, cápsulas y spray têm início, duração y intervalo livre de nitrato próprios; confirmar produto. No reutilizar esta ficha para infusão IV.",
    "pediatricDose": "Requer tabela completa por idade/peso; automação pediátrica bloqueada.",
    "renalDose": "Avaliar función renal y tabela específica; no inferir ajuste.",
    "hepaticDose": "Avaliar hepatopatia; no inferir ajuste.",
    "commonAdverseEffects": "Cefaleia, rubor, tontura, hipotensão y taquicardia reflexa.",
    "dangerousAdverseEffects": "Hipotensão grave, síncope, metemoglobinemia y isquemia; interação fatal con inibidores de PDE5 ou riociguate.",
    "adverseEffects": "Cefaleia, rubor, tontura, hipotensão y taquicardia reflexa.; Hipotensão grave, síncope, metemoglobinemia y isquemia; interação fatal con inibidores de PDE5 ou riociguate.",
    "contraindications": "Hipersensibilidade y contraindicações específicas da bula.",
    "interactions": "Revisar interações farmacodinâmicas y metabólicas aplicáveis.",
    "monitoring": "Monitorar eficácia, tolerabilidade, función orgânica y eventos graves.",
    "administration": "Usar somente via/formulação rotulada; respeitar técnica y alimentos.",
    "preparation": "Confirmar concentração, diluição y estabilidade no produto; no inferir.",
    "infusionProtocol": "Quando IV, usar bomba/monitorização y protocolo da bula; caso contrário no aplicável.",
    "pregnancy": "Avaliar riesgo fetal, indicação y bula.",
    "lactation": "Avaliar excreção y riesgo-benefício.",
    "specialPopulations": "Individualizar em idosos, comorbidades, gestação y disfunción orgânica.",
    "patientEducation": "Orientar adesão, sinais de alarme y no interromper abruptamente quando aplicável.",
    "clinicalPearls": "Formulações y combinações no são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Usar conforme diretriz oficial da indicação y jurisdição.",
    "safetyFlags": "Hipotensão grave, síncope, metemoglobinemia y isquemia; interação fatal con inibidores de PDE5 ou riociguate.",
    "alerts": "Hipotensão grave, síncope, metemoglobinemia y isquemia; interação fatal con inibidores de PDE5 ou riociguate.; monitorização obrigatória",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=nitroglycerin",
      "Fonte primária/oficial - https://www.accessdata.fda.gov/drugsatfda_docs/label/2014/018705s015lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=nitroglycerin"
  }
};})();
/* GOLD33_SELECTIVE:nitroglicerina:END */
/* GOLD33_SELECTIVE:nitroprussiato_sodio:START */
;(function(){var db=window.CARDIOLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="nitroprussiato_sodio";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:nitroprussiato_sodio:"+matches.length);drug=matches[0];}else{drug=db&&db["nitroprussiato_sodio"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:nitroprussiato_sodio");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "056",
    "requiredFieldCount": 33,
    "approvedSha256": "498cafa4e0fbd5a28b86b77472df89a94eaa0fa96bde0eb3b706fdf18d0e7236",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "BLOQUEADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Nitroprussiato de sódio",
    "class": "Vasodilatador arterial e venoso de ação ultracurta",
    "pharmacologicClass": "Vasodilatador arterial e venoso de ação ultracurta",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Frasco para diluição ou solução pronta; proteger da luz e usar bomba.",
    "presentations": "Frasco para diluição ou solução pronta; proteger da luz e usar bomba.",
    "mechanism": "Mecanismo específico da classe conforme fonte primária e formulação.",
    "pharmacodynamics": "Mecanismo específico da classe conforme fonte primária e formulação.",
    "pharmacokinetics": "Revisar absorção, metabolismo, meia-vida e eliminação na fonte primária.",
    "indications": "Crises hipertensivas e redução controlada da pressão em ambiente intensivo.",
    "dose": "Iniciar 0,3 micrograma/kg/min IV e titular continuamente. Faixa usual até 10 microgramas/kg/min; manter o máximo apenas pelo menor tempo possível, nunca além de 10 minutos sem estratégia alternativa.",
    "pediatricDose": "Requer tabela completa por idade/peso; automação pediátrica bloqueada.",
    "renalDose": "Avaliar função renal e tabela específica; não inferir ajuste.",
    "hepaticDose": "Avaliar hepatopatia; não inferir ajuste.",
    "commonAdverseEffects": "Hipotensão, náusea, cefaleia, sudorese e palpitações.",
    "dangerousAdverseEffects": "Toxicidade por cianeto/tiocianato, acidose, metemoglobinemia, aumento da pressão intracraniana e hipotensão fatal.",
    "adverseEffects": "Hipotensão, náusea, cefaleia, sudorese e palpitações.; Toxicidade por cianeto/tiocianato, acidose, metemoglobinemia, aumento da pressão intracraniana e hipotensão fatal.",
    "contraindications": "Hipersensibilidade e contraindicações específicas da bula.",
    "interactions": "Revisar interações farmacodinâmicas e metabólicas aplicáveis.",
    "monitoring": "Monitorar eficácia, tolerabilidade, função orgânica e eventos graves.",
    "administration": "Usar somente via/formulação rotulada; respeitar técnica e alimentos.",
    "preparation": "Confirmar concentração, diluição e estabilidade no produto; não inferir.",
    "infusionProtocol": "Quando IV, usar bomba/monitorização e protocolo da bula; caso contrário não aplicável.",
    "pregnancy": "Avaliar risco fetal, indicação e bula.",
    "lactation": "Avaliar excreção e risco-benefício.",
    "specialPopulations": "Individualizar em idosos, comorbidades, gestação e disfunção orgânica.",
    "patientEducation": "Orientar adesão, sinais de alarme e não interromper abruptamente quando aplicável.",
    "clinicalPearls": "Formulações e combinações não são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Usar conforme diretriz oficial da indicação e jurisdição.",
    "safetyFlags": "Toxicidade por cianeto/tiocianato, acidose, metemoglobinemia, aumento da pressão intracraniana e hipotensão fatal.",
    "alerts": "Toxicidade por cianeto/tiocianato, acidose, metemoglobinemia, aumento da pressão intracraniana e hipotensão fatal.; monitorização obrigatória",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=sodium+nitroprusside",
      "Fonte primária/oficial - https://www.accessdata.fda.gov/drugsatfda_docs/label/2017/019319s028lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=sodium+nitroprusside"
  },
  "es": {
    "name": "Nitroprussiato de sódio",
    "class": "Vasodilatador arterial y venoso de ação ultracurta",
    "pharmacologicClass": "Vasodilatador arterial y venoso de ação ultracurta",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Frasco para diluição ou solución pronta; proteger da luz y usar bomba.",
    "presentations": "Frasco para diluição ou solución pronta; proteger da luz y usar bomba.",
    "mechanism": "Mecanismo específico da classe conforme fonte primária y formulação.",
    "pharmacodynamics": "Mecanismo específico da classe conforme fonte primária y formulação.",
    "pharmacokinetics": "Revisar absorção, metabolismo, meia-vida y eliminação na fonte primária.",
    "indications": "Crises hipertensivas y redução controlada da pressão em ambiente intensivo.",
    "dose": "Iniciar 0,3 micrograma/kg/min IV y titular continuamente. Faixa usual até 10 microgramas/kg/min; manter o máximo apenas pelo menor tempo possível, nunca além de 10 minutos sem estratégia alternativa.",
    "pediatricDose": "Requer tabela completa por idade/peso; automação pediátrica bloqueada.",
    "renalDose": "Avaliar función renal y tabela específica; no inferir ajuste.",
    "hepaticDose": "Avaliar hepatopatia; no inferir ajuste.",
    "commonAdverseEffects": "Hipotensão, náusea, cefaleia, sudorese y palpitações.",
    "dangerousAdverseEffects": "Toxicidade por cianeto/tiocianato, acidosis, metemoglobinemia, aumento da pressão intracraniana y hipotensão fatal.",
    "adverseEffects": "Hipotensão, náusea, cefaleia, sudorese y palpitações.; Toxicidade por cianeto/tiocianato, acidosis, metemoglobinemia, aumento da pressão intracraniana y hipotensão fatal.",
    "contraindications": "Hipersensibilidade y contraindicações específicas da bula.",
    "interactions": "Revisar interações farmacodinâmicas y metabólicas aplicáveis.",
    "monitoring": "Monitorar eficácia, tolerabilidade, función orgânica y eventos graves.",
    "administration": "Usar somente via/formulação rotulada; respeitar técnica y alimentos.",
    "preparation": "Confirmar concentração, diluição y estabilidade no produto; no inferir.",
    "infusionProtocol": "Quando IV, usar bomba/monitorização y protocolo da bula; caso contrário no aplicável.",
    "pregnancy": "Avaliar riesgo fetal, indicação y bula.",
    "lactation": "Avaliar excreção y riesgo-benefício.",
    "specialPopulations": "Individualizar em idosos, comorbidades, gestação y disfunción orgânica.",
    "patientEducation": "Orientar adesão, sinais de alarme y no interromper abruptamente quando aplicável.",
    "clinicalPearls": "Formulações y combinações no são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Usar conforme diretriz oficial da indicação y jurisdição.",
    "safetyFlags": "Toxicidade por cianeto/tiocianato, acidosis, metemoglobinemia, aumento da pressão intracraniana y hipotensão fatal.",
    "alerts": "Toxicidade por cianeto/tiocianato, acidosis, metemoglobinemia, aumento da pressão intracraniana y hipotensão fatal.; monitorização obrigatória",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=sodium+nitroprusside",
      "Fonte primária/oficial - https://www.accessdata.fda.gov/drugsatfda_docs/label/2017/019319s028lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=sodium+nitroprusside"
  }
};})();
/* GOLD33_SELECTIVE:nitroprussiato_sodio:END */
/* GOLD33_SELECTIVE:perhexilina:START */
;(function(){var db=window.CARDIOLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="perhexilina";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:perhexilina:"+matches.length);drug=matches[0];}else{drug=db&&db["perhexilina"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:perhexilina");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "061",
    "requiredFieldCount": 33,
    "approvedSha256": "21d5764126222a27dd58e4de5b088bbd5ba7f893ec49f94e5861cb58d2022403",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "LIBERADA_COM_RESTRICOES_GRANULARES",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Perhexilina",
    "class": "Modulador metabólico antianginoso",
    "pharmacologicClass": "Modulador metabólico antianginoso",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Cápsulas em forças dependentes do país; monitorização terapêutica obrigatória.",
    "presentations": "Cápsulas em forças dependentes do país; monitorização terapêutica obrigatória.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância e exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo e eliminação na fonte primária.",
    "indications": "Angina refratária em países onde aprovada, sob monitorização especializada.",
    "dose": "Dose individualizada por concentração plasmática e fenótipo/metabolismo CYP2D6. Não usar dose fixa automatizada; disponibilidade regulatória é limitada.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "Não inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "Não inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Náusea, tontura, cefaleia e elevação de enzimas hepáticas.",
    "dangerousAdverseEffects": "Neuropatia periférica, hepatotoxicidade grave, hipoglicemia e toxicidade por acúmulo.",
    "adverseEffects": "Náusea, tontura, cefaleia e elevação de enzimas hepáticas.; Neuropatia periférica, hepatotoxicidade grave, hipoglicemia e toxicidade por acúmulo.",
    "contraindications": "Hipersensibilidade e contraindicações específicas da apresentação.",
    "interactions": "Revisar interações farmacodinâmicas e metabólicas na fonte específica.",
    "monitoring": "Monitorar eficácia, tolerabilidade e riscos graves aplicáveis.",
    "administration": "Usar somente via e formulação documentadas; respeitar técnica específica.",
    "preparation": "Confirmar concentração, reconstituição, diluição e estabilidade; não inferir.",
    "infusionProtocol": "Aplicável somente às apresentações parenterais documentadas; manter bloqueado sem protocolo completo.",
    "pregnancy": "Avaliar risco fetal e bula aplicável; não usar linguagem categórica sem fonte.",
    "lactation": "Avaliar excreção e risco-benefício conforme fonte.",
    "specialPopulations": "Individualizar por idade, comorbidades e função orgânica.",
    "patientEducation": "Orientar adesão, administração correta e sinais de alarme.",
    "clinicalPearls": "Formulações e vias não são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Aplicar diretriz oficial da indicação e jurisdição.",
    "safetyFlags": "Neuropatia periférica, hepatotoxicidade grave, hipoglicemia e toxicidade por acúmulo.",
    "alerts": "Neuropatia periférica, hepatotoxicidade grave, hipoglicemia e toxicidade por acúmulo.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=perhexilina",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=perhexilina"
  },
  "es": {
    "name": "Perhexilina",
    "class": "Modulador metabólico antianginoso",
    "pharmacologicClass": "Modulador metabólico antianginoso",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Cápsulas em forças dependentes do país; monitorização terapêutica obrigatória.",
    "presentations": "Cápsulas em forças dependentes do país; monitorização terapêutica obrigatória.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância y exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo y eliminação na fonte primária.",
    "indications": "Angina refratária em países onde aprovada, sob monitorização especializada.",
    "dose": "Dose individualizada por concentração plasmática y fenótipo/metabolismo CYP2D6. No usar dosis fixa automatizada; disponibilidade regulatória é limitada.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "No inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "No inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Náusea, tontura, cefaleia y elevação de enzimas hepáticas.",
    "dangerousAdverseEffects": "Neuropatia periférica, hepatotoxicidade grave, hipoglicemia y toxicidade por acúmulo.",
    "adverseEffects": "Náusea, tontura, cefaleia y elevação de enzimas hepáticas.; Neuropatia periférica, hepatotoxicidade grave, hipoglicemia y toxicidade por acúmulo.",
    "contraindications": "Hipersensibilidade y contraindicações específicas da apresentação.",
    "interactions": "Revisar interações farmacodinâmicas y metabólicas na fonte específica.",
    "monitoring": "Monitorar eficácia, tolerabilidade y riscos graves aplicáveis.",
    "administration": "Usar somente via y formulação documentadas; respeitar técnica específica.",
    "preparation": "Confirmar concentração, reconstituição, diluição y estabilidade; no inferir.",
    "infusionProtocol": "Aplicável somente às apresentações parenterais documentadas; manter bloqueado sem protocolo completo.",
    "pregnancy": "Avaliar risco fetal y bula aplicável; no usar linguagem categórica sem fonte.",
    "lactation": "Avaliar excreção y risco-benefício conforme fonte.",
    "specialPopulations": "Individualizar por idade, comorbidades y función orgânica.",
    "patientEducation": "Orientar adesão, administração correta y sinais de alarme.",
    "clinicalPearls": "Formulações y vias no são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Aplicar diretriz oficial da indicação y jurisdição.",
    "safetyFlags": "Neuropatia periférica, hepatotoxicidade grave, hipoglicemia y toxicidade por acúmulo.",
    "alerts": "Neuropatia periférica, hepatotoxicidade grave, hipoglicemia y toxicidade por acúmulo.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=perhexilina",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=perhexilina"
  }
};})();
/* GOLD33_SELECTIVE:perhexilina:END */
/* GOLD33_SELECTIVE:perindopril_amlodipino:START */
;(function(){var db=window.CARDIOLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="perindopril_amlodipino";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:perindopril_amlodipino:"+matches.length);drug=matches[0];}else{drug=db&&db["perindopril_amlodipino"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:perindopril_amlodipino");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "062",
    "requiredFieldCount": 33,
    "approvedSha256": "370ce1bd176a8195540294ce684462cfa5ab46161e640a53e008c75ab3b56496",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "LIBERADA_COM_RESTRICOES_GRANULARES",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Perindopril/amlodipino",
    "class": "Inibidor da ECA com bloqueador do canal de cálcio",
    "pharmacologicClass": "Inibidor da ECA com bloqueador do canal de cálcio",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimidos de combinação fixa em múltiplas forças e sais.",
    "presentations": "Comprimidos de combinação fixa em múltiplas forças e sais.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância e exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo e eliminação na fonte primária.",
    "indications": "Hipertensão em pacientes elegíveis para combinação fixa, conforme forças e jurisdição.",
    "dose": "A combinação fixa deve corresponder às doses previamente tituladas dos componentes. Forças não são equivalentes entre sais/mercados; não iniciar automaticamente.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "Não inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "Não inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Edema, cefaleia, tontura, tosse e rubor.",
    "dangerousAdverseEffects": "Angioedema, hipotensão, insuficiência renal, hiperpotassemia e toxicidade fetal.",
    "adverseEffects": "Edema, cefaleia, tontura, tosse e rubor.; Angioedema, hipotensão, insuficiência renal, hiperpotassemia e toxicidade fetal.",
    "contraindications": "Hipersensibilidade e contraindicações específicas da apresentação.",
    "interactions": "Revisar interações farmacodinâmicas e metabólicas na fonte específica.",
    "monitoring": "Monitorar eficácia, tolerabilidade e riscos graves aplicáveis.",
    "administration": "Usar somente via e formulação documentadas; respeitar técnica específica.",
    "preparation": "Confirmar concentração, reconstituição, diluição e estabilidade; não inferir.",
    "infusionProtocol": "Aplicável somente às apresentações parenterais documentadas; manter bloqueado sem protocolo completo.",
    "pregnancy": "Avaliar risco fetal e bula aplicável; não usar linguagem categórica sem fonte.",
    "lactation": "Avaliar excreção e risco-benefício conforme fonte.",
    "specialPopulations": "Individualizar por idade, comorbidades e função orgânica.",
    "patientEducation": "Orientar adesão, administração correta e sinais de alarme.",
    "clinicalPearls": "Formulações e vias não são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Aplicar diretriz oficial da indicação e jurisdição.",
    "safetyFlags": "Angioedema, hipotensão, insuficiência renal, hiperpotassemia e toxicidade fetal.",
    "alerts": "Angioedema, hipotensão, insuficiência renal, hiperpotassemia e toxicidade fetal.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=perindopril+amlodipino",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=perindopril+amlodipino"
  },
  "es": {
    "name": "Perindopril/amlodipino",
    "class": "Inibidor da ECA con bloqueador do canal de cálcio",
    "pharmacologicClass": "Inibidor da ECA con bloqueador do canal de cálcio",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimidos de combinação fixa em múltiplas forças y sais.",
    "presentations": "Comprimidos de combinação fixa em múltiplas forças y sais.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância y exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo y eliminação na fonte primária.",
    "indications": "Hipertensão em pacientes elegíveis para combinação fixa, conforme forças y jurisdição.",
    "dose": "A combinação fixa deve corresponder às dosiss previamente tituladas dos componentes. Forças no são equivalentes entre sais/mercados; no iniciar automaticamente.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "No inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "No inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Edema, cefaleia, tontura, tosse y rubor.",
    "dangerousAdverseEffects": "Angioedema, hipotensão, insuficiência renal, hiperpotassemia y toxicidade fetal.",
    "adverseEffects": "Edema, cefaleia, tontura, tosse y rubor.; Angioedema, hipotensão, insuficiência renal, hiperpotassemia y toxicidade fetal.",
    "contraindications": "Hipersensibilidade y contraindicações específicas da apresentação.",
    "interactions": "Revisar interações farmacodinâmicas y metabólicas na fonte específica.",
    "monitoring": "Monitorar eficácia, tolerabilidade y riscos graves aplicáveis.",
    "administration": "Usar somente via y formulação documentadas; respeitar técnica específica.",
    "preparation": "Confirmar concentração, reconstituição, diluição y estabilidade; no inferir.",
    "infusionProtocol": "Aplicável somente às apresentações parenterais documentadas; manter bloqueado sem protocolo completo.",
    "pregnancy": "Avaliar risco fetal y bula aplicável; no usar linguagem categórica sem fonte.",
    "lactation": "Avaliar excreção y risco-benefício conforme fonte.",
    "specialPopulations": "Individualizar por idade, comorbidades y función orgânica.",
    "patientEducation": "Orientar adesão, administração correta y sinais de alarme.",
    "clinicalPearls": "Formulações y vias no são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Aplicar diretriz oficial da indicação y jurisdição.",
    "safetyFlags": "Angioedema, hipotensão, insuficiência renal, hiperpotassemia y toxicidade fetal.",
    "alerts": "Angioedema, hipotensão, insuficiência renal, hiperpotassemia y toxicidade fetal.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=perindopril+amlodipino",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=perindopril+amlodipino"
  }
};})();
/* GOLD33_SELECTIVE:perindopril_amlodipino:END */
/* GOLD33_SELECTIVE:perindopril_indapamida:START */
;(function(){var db=window.CARDIOLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="perindopril_indapamida";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:perindopril_indapamida:"+matches.length);drug=matches[0];}else{drug=db&&db["perindopril_indapamida"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:perindopril_indapamida");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "062",
    "requiredFieldCount": 33,
    "approvedSha256": "370ce1bd176a8195540294ce684462cfa5ab46161e640a53e008c75ab3b56496",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "LIBERADA_COM_RESTRICOES_GRANULARES",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Perindopril/indapamida",
    "class": "Inibidor da ECA com diurético tiazídico-like",
    "pharmacologicClass": "Inibidor da ECA com diurético tiazídico-like",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimidos de combinação fixa em diversas proporções.",
    "presentations": "Comprimidos de combinação fixa em diversas proporções.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância e exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo e eliminação na fonte primária.",
    "indications": "Hipertensão em pacientes elegíveis para combinação fixa.",
    "dose": "Usar força compatível com titulação prévia e função renal. Monitorar pressão, creatinina, sódio e potássio; sais e proporções variam por país.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "Não inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "Não inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Tontura, tosse, cefaleia e distúrbios eletrolíticos.",
    "dangerousAdverseEffects": "Angioedema, hipotensão, insuficiência renal, hiponatremia/hipocalemia e toxicidade fetal.",
    "adverseEffects": "Tontura, tosse, cefaleia e distúrbios eletrolíticos.; Angioedema, hipotensão, insuficiência renal, hiponatremia/hipocalemia e toxicidade fetal.",
    "contraindications": "Hipersensibilidade e contraindicações específicas da apresentação.",
    "interactions": "Revisar interações farmacodinâmicas e metabólicas na fonte específica.",
    "monitoring": "Monitorar eficácia, tolerabilidade e riscos graves aplicáveis.",
    "administration": "Usar somente via e formulação documentadas; respeitar técnica específica.",
    "preparation": "Confirmar concentração, reconstituição, diluição e estabilidade; não inferir.",
    "infusionProtocol": "Aplicável somente às apresentações parenterais documentadas; manter bloqueado sem protocolo completo.",
    "pregnancy": "Avaliar risco fetal e bula aplicável; não usar linguagem categórica sem fonte.",
    "lactation": "Avaliar excreção e risco-benefício conforme fonte.",
    "specialPopulations": "Individualizar por idade, comorbidades e função orgânica.",
    "patientEducation": "Orientar adesão, administração correta e sinais de alarme.",
    "clinicalPearls": "Formulações e vias não são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Aplicar diretriz oficial da indicação e jurisdição.",
    "safetyFlags": "Angioedema, hipotensão, insuficiência renal, hiponatremia/hipocalemia e toxicidade fetal.",
    "alerts": "Angioedema, hipotensão, insuficiência renal, hiponatremia/hipocalemia e toxicidade fetal.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=perindopril+indapamida",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=perindopril+indapamida"
  },
  "es": {
    "name": "Perindopril/indapamida",
    "class": "Inibidor da ECA con diurético tiazídico-like",
    "pharmacologicClass": "Inibidor da ECA con diurético tiazídico-like",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimidos de combinação fixa em diversas proporções.",
    "presentations": "Comprimidos de combinação fixa em diversas proporções.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância y exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo y eliminação na fonte primária.",
    "indications": "Hipertensão em pacientes elegíveis para combinação fixa.",
    "dose": "Usar força compatível con titulação prévia y función renal. Monitorar pressão, creatinina, sódio y potássio; sais y proporções variam por país.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "No inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "No inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Tontura, tosse, cefaleia y distúrbios eletrolíticos.",
    "dangerousAdverseEffects": "Angioedema, hipotensão, insuficiência renal, hiponatremia/hipocalemia y toxicidade fetal.",
    "adverseEffects": "Tontura, tosse, cefaleia y distúrbios eletrolíticos.; Angioedema, hipotensão, insuficiência renal, hiponatremia/hipocalemia y toxicidade fetal.",
    "contraindications": "Hipersensibilidade y contraindicações específicas da apresentação.",
    "interactions": "Revisar interações farmacodinâmicas y metabólicas na fonte específica.",
    "monitoring": "Monitorar eficácia, tolerabilidade y riscos graves aplicáveis.",
    "administration": "Usar somente via y formulação documentadas; respeitar técnica específica.",
    "preparation": "Confirmar concentração, reconstituição, diluição y estabilidade; no inferir.",
    "infusionProtocol": "Aplicável somente às apresentações parenterais documentadas; manter bloqueado sem protocolo completo.",
    "pregnancy": "Avaliar risco fetal y bula aplicável; no usar linguagem categórica sem fonte.",
    "lactation": "Avaliar excreção y risco-benefício conforme fonte.",
    "specialPopulations": "Individualizar por idade, comorbidades y función orgânica.",
    "patientEducation": "Orientar adesão, administração correta y sinais de alarme.",
    "clinicalPearls": "Formulações y vias no são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Aplicar diretriz oficial da indicação y jurisdição.",
    "safetyFlags": "Angioedema, hipotensão, insuficiência renal, hiponatremia/hipocalemia y toxicidade fetal.",
    "alerts": "Angioedema, hipotensão, insuficiência renal, hiponatremia/hipocalemia y toxicidade fetal.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=perindopril+indapamida",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=perindopril+indapamida"
  }
};})();
/* GOLD33_SELECTIVE:perindopril_indapamida:END */
/* GOLD33_SELECTIVE:trandolapril:START */
;(function(){var db=window.CARDIOLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="trandolapril";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:trandolapril:"+matches.length);drug=matches[0];}else{drug=db&&db["trandolapril"];if(!drug&&db){var keys=Object.keys(db).filter(function(key){return key.toLowerCase()==="trandolapril";});if(keys.length>1)throw new Error("GOLD33_CANONICAL_CARDINALITY:trandolapril:"+keys.length);if(keys.length===1)drug=db[keys[0]];}if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:trandolapril");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "079",
    "requiredFieldCount": 33,
    "approvedSha256": "93d982fa330e017ae144b7449e7c25c94c7c1d86a3f0c1d8812549812e6fc9c1",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "LIBERADA_COM_RESTRICOES_GRANULARES",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Trandolapril",
    "class": "Inibidor da enzima conversora de angiotensina",
    "pharmacologicClass": "Inibidor da enzima conversora de angiotensina",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Cápsulas ou comprimidos e combinações fixas.",
    "presentations": "Cápsulas ou comprimidos e combinações fixas.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância e exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo e eliminação na fonte primária.",
    "indications": "Hipertensão e redução de risco após infarto em pacientes selecionados conforme rótulo.",
    "dose": "Dose oral diária individualizada por pressão, função renal, potássio e tratamentos associados. Suspender na gestação e respeitar intervalo com sacubitril/valsartana.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "Não inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "Não inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Tosse, tontura, hipotensão e aumento de creatinina.",
    "dangerousAdverseEffects": "Angioedema, insuficiência renal, hiperpotassemia e toxicidade fetal.",
    "adverseEffects": "Tosse, tontura, hipotensão e aumento de creatinina.; Angioedema, insuficiência renal, hiperpotassemia e toxicidade fetal.",
    "contraindications": "Hipersensibilidade e contraindicações específicas da apresentação.",
    "interactions": "Revisar interações farmacodinâmicas e metabólicas na fonte específica.",
    "monitoring": "Monitorar eficácia, tolerabilidade e riscos graves aplicáveis.",
    "administration": "Usar somente via e formulação documentadas; respeitar técnica específica.",
    "preparation": "Confirmar concentração, reconstituição, diluição e estabilidade; não inferir.",
    "infusionProtocol": "Aplicável somente às apresentações parenterais documentadas; manter bloqueado sem protocolo completo.",
    "pregnancy": "Avaliar risco fetal e bula aplicável; não usar linguagem categórica sem fonte.",
    "lactation": "Avaliar excreção e risco-benefício conforme fonte.",
    "specialPopulations": "Individualizar por idade, comorbidades e função orgânica.",
    "patientEducation": "Orientar adesão, administração correta e sinais de alarme.",
    "clinicalPearls": "Formulações e vias não são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Aplicar diretriz oficial da indicação e jurisdição.",
    "safetyFlags": "Angioedema, insuficiência renal, hiperpotassemia e toxicidade fetal.",
    "alerts": "Angioedema, insuficiência renal, hiperpotassemia e toxicidade fetal.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=trandolapril",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=trandolapril"
  },
  "es": {
    "name": "Trandolapril",
    "class": "Inibidor da enzima conversora de angiotensina",
    "pharmacologicClass": "Inibidor da enzima conversora de angiotensina",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Cápsulas ou comprimidos y combinações fixas.",
    "presentations": "Cápsulas ou comprimidos y combinações fixas.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância y exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo y eliminação na fonte primária.",
    "indications": "Hipertensão y redução de risco após infarto em pacientes selecionados conforme rótulo.",
    "dose": "Dose oral diária individualizada por pressão, función renal, potássio y tratamentos associados. Suspender na gestação y respeitar intervalo con sacubitril/valsartana.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "No inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "No inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Tosse, tontura, hipotensão y aumento de creatinina.",
    "dangerousAdverseEffects": "Angioedema, insuficiência renal, hiperpotassemia y toxicidade fetal.",
    "adverseEffects": "Tosse, tontura, hipotensão y aumento de creatinina.; Angioedema, insuficiência renal, hiperpotassemia y toxicidade fetal.",
    "contraindications": "Hipersensibilidade y contraindicações específicas da apresentação.",
    "interactions": "Revisar interações farmacodinâmicas y metabólicas na fonte específica.",
    "monitoring": "Monitorar eficácia, tolerabilidade y riscos graves aplicáveis.",
    "administration": "Usar somente via y formulação documentadas; respeitar técnica específica.",
    "preparation": "Confirmar concentração, reconstituição, diluição y estabilidade; no inferir.",
    "infusionProtocol": "Aplicável somente às apresentações parenterais documentadas; manter bloqueado sem protocolo completo.",
    "pregnancy": "Avaliar risco fetal y bula aplicável; no usar linguagem categórica sem fonte.",
    "lactation": "Avaliar excreção y risco-benefício conforme fonte.",
    "specialPopulations": "Individualizar por idade, comorbidades y función orgânica.",
    "patientEducation": "Orientar adesão, administração correta y sinais de alarme.",
    "clinicalPearls": "Formulações y vias no são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Aplicar diretriz oficial da indicação y jurisdição.",
    "safetyFlags": "Angioedema, insuficiência renal, hiperpotassemia y toxicidade fetal.",
    "alerts": "Angioedema, insuficiência renal, hiperpotassemia y toxicidade fetal.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=trandolapril",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=trandolapril"
  }
};})();
/* GOLD33_SELECTIVE:trandolapril:END */
/* GOLD33_SELECTIVE:adenosina:START */
;(function(){var db=window.CARDIOLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="adenosina";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:adenosina:"+matches.length);drug=matches[0];}else{drug=db&&db["adenosina"];if(!drug&&db){var keys=Object.keys(db).filter(function(key){return key.toLowerCase()==="adenosina";});if(keys.length>1)throw new Error("GOLD33_CANONICAL_CARDINALITY:adenosina:"+keys.length);if(keys.length===1)drug=db[keys[0]];}if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:adenosina");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "090",
    "requiredFieldCount": 33,
    "approvedSha256": "866ce87ad26117645b0eb2df7da1d6ac28cde2b4f89b6efdc9f70789277e5033",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "BLOQUEADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed",
    "packageRestrictions": {
      "clinical_exceptions_from_reviewer": [],
      "restricoes_granulares_preservadas": [
        "Fontes EUA/Reino Unido nao comprovam registro, disponibilidade ou equivalencia Brasil/Argentina.",
        "Nao converter doses entre apresentacoes, vias, concentracoes, acetato/depot, liberacao imediata/prolongada ou jurisdicoes.",
        "Dose pediatrica, calculo em mL/gotas e ajustes nao expressamente documentados continuam bloqueados conforme cada ficha.",
        "Zuclopentixol: bloquear conversao automatica entre comprimido, acetato IM e decanoato IM.",
        "Adenosina: escopo e bolus IV rapido para TSV; nao e protocolo de infusao.",
        "Ziprasidona: escopo oral; IM exige fonte e esquema proprios."
      ],
      "technical_pending": [
        "INTEGRACAO_TECNICA=NAO_INICIADA",
        "PUBLICACAO=BLOQUEADA",
        "SAFE_SYNC_MECHANISM=PENDENTE_DE_IMPLEMENTACAO",
        "Nenhum commit, push, merge, deploy ou alteracao de repositorio foi realizado."
      ]
    }
  },
  "pt": {
    "name": "Adenosina",
    "class": "Antiarrtimico de acao ultracurta",
    "pharmacologicClass": "Nucleosideo endogeno",
    "commercialNames": "Nome comercial nao revisado nesta ficha",
    "presentation": "Solucao injetavel para bolus IV rapido",
    "presentations": "3 mg/mL em agua para injecao com cloreto de sodio; produto EUA.",
    "mechanism": "Retarda conducao no no AV e interrompe circuitos de reentrada dependentes do no AV.",
    "pharmacodynamics": "Pode restaurar ritmo sinusal em TSV paroxistica; nao converte FA, flutter atrial ou TV.",
    "pharmacokinetics": "Captacao celular e metabolismo muito rapidos; meia-vida no sangue total inferior a 10 s.",
    "indications": "Conversao de TSV paroxistica, incluindo associada a vias acessorias; tentar manobras vagais apropriadas antes quando indicado.",
    "dose": "Adulto: 6 mg em bolus IV rapido, seguido de flush; se necessario, 12 mg apos 1-2 min, podendo repetir 12 mg uma vez conforme rotulo.",
    "pediatricDose": "A fonte revisada deve ser confrontada com protocolo pediatrico local; nao incluir calculo mg/kg neste candidato sem validacao pediatrica especifica.",
    "renalDose": "Nao requer ajuste previsto pela farmacocinetica do rotulo.",
    "hepaticDose": "Nao requer ajuste previsto pela farmacocinetica do rotulo.",
    "commonAdverseEffects": "Rubor, dispneia/desconforto toracico, cefaleia, tontura, nausea e sensacao de pressao.",
    "dangerousAdverseEffects": "Broncoespasmo, bloqueio AV prolongado, assistolia, arritmias, hipotensao importante e fibrilacao atrial.",
    "adverseEffects": "Palpitacoes, dor cervical/mandibular, parestesias e ansiedade podem ocorrer transitoriamente.",
    "contraindications": "Bloqueio AV de segundo/terceiro grau ou disfuncao do no sinusal sem marcapasso; hipersensibilidade; asma/broncoespasmo conforme rotulo.",
    "interactions": "Metilxantinas (cafeina/teofilina) antagonizam; dipiridamol potencializa; carbamazepina pode aumentar bloqueio AV.",
    "monitoring": "Monitorizacao ECG continua e capacidade de reanimacao durante uso; confirmar o ritmo e a via IV.",
    "administration": "Bolus IV muito rapido em veia ou acesso proximal, seguido imediatamente de flush salino.",
    "preparation": "Nao reconstituir; usar somente solucao injetavel 3 mg/mL e verificar integridade/validade.",
    "infusionProtocol": "NAO APLICAVEL: este escopo e bolus IV rapido; nao administrar por infusao continua.",
    "pregnancy": "Dados limitados na fonte; avaliar beneficio-risco e protocolo obstetrico.",
    "lactation": "Revisar fonte de lactacao e risco clinico; nao foi validado neste candidato.",
    "specialPopulations": "Cautela em transplante cardiaco e uso de dipiridamol; reduzir dose inicial pode ser necessario conforme rotulo.",
    "patientEducation": "Explicar que sintomas intensos e breves podem ocorrer; equipe deve ser avisada imediatamente de falta de ar ou dor intensa.",
    "clinicalPearls": "Nao usar a resposta a adenosina para rotular automaticamente a arritmia; o ECG continua decisivo.",
    "guidelineRecommendations": "Nenhuma diretriz terapeutica adicional foi validada neste pacote. O revisor deve confrontar com protocolo local e diretriz vigente antes de uso clinico.",
    "safetyFlags": "EMERGENCIA: confirmar TSV regular de complexo estreito e recursos de reanimacao; evitar uso em ritmo irregular de complexo largo.",
    "alerts": "Candidato documental para revisao humana. Fonte estrangeira nao comprova registro, disponibilidade ou equivalencia no Brasil ou Argentina.",
    "references": [
      "DailyMed (EUA): adenosine injection 3 mg/mL, rapid bolus IV, atualizada em 06 abr 2022. https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c1c149fe-9095-4b2a-a21f-7af3212e0254"
    ],
    "ref": "DailyMed (EUA): adenosine injection 3 mg/mL, rapid bolus IV, atualizada em 06 abr 2022. https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c1c149fe-9095-4b2a-a21f-7af3212e0254"
  },
  "es": {
    "name": "Adenosina",
    "class": "Antiarrtmico de accion ultracorta",
    "pharmacologicClass": "Nucleosido endogeno",
    "commercialNames": "Nombre comercial no revisado en esta ficha",
    "presentation": "Solucion inyectable para bolo IV rapido",
    "presentations": "3 mg/mL en agua para inyeccion con cloruro de sodio; producto EUA.",
    "mechanism": "Retrasa la conduccion en el nodo AV e interrumpe circuitos de reentrada dependientes del nodo AV.",
    "pharmacodynamics": "Puede restaurar ritmo sinusal en TSV paroxistica; no convierte FA, aleteo auricular ni TV.",
    "pharmacokinetics": "Captacion celular y metabolismo muy rapidos; vida media en sangre total inferior a 10 s.",
    "indications": "Conversion de TSV paroxistica, incluida la asociada a vias accesorias; intentar maniobras vagales apropiadas antes cuando corresponda.",
    "dose": "Adulto: 6 mg en bolo IV rapido, seguido de flush; si es necesario, 12 mg despues de 1-2 min, pudiendo repetir 12 mg una vez conforme al rotulo.",
    "pediatricDose": "La fuente revisada debe confrontarse con protocolo pediatrico local; no incluir calculo mg/kg en este candidato sin validacion pediatrica especifica.",
    "renalDose": "No se espera ajuste por la farmacocinetica del rotulo.",
    "hepaticDose": "No se espera ajuste por la farmacocinetica del rotulo.",
    "commonAdverseEffects": "Rubor, disnea/malestar toracico, cefalea, mareo, nauseas y sensacion de presion.",
    "dangerousAdverseEffects": "Broncoespasmo, bloqueo AV prolongado, asistolia, arritmias, hipotension importante y fibrilacion auricular.",
    "adverseEffects": "Palpitaciones, dolor cervical/mandibular, parestesias y ansiedad pueden ocurrir transitoriamente.",
    "contraindications": "Bloqueo AV de segundo/tercer grado o disfuncion del nodo sinusal sin marcapasos; hipersensibilidad; asma/broncoespasmo conforme al rotulo.",
    "interactions": "Metilxantinas (cafeina/teofilina) antagonizan; dipiridamol potencia; carbamazepina puede aumentar bloqueo AV.",
    "monitoring": "Monitorizacion ECG continua y capacidad de reanimacion durante el uso; confirmar el ritmo y la via IV.",
    "administration": "Bolo IV muy rapido en vena o acceso proximal, seguido inmediatamente de flush salino.",
    "preparation": "No reconstituir; usar solo solucion inyectable 3 mg/mL y verificar integridad/vencimiento.",
    "infusionProtocol": "NO APLICABLE: este alcance es bolo IV rapido; no administrar por infusion continua.",
    "pregnancy": "Datos limitados en la fuente; evaluar beneficio-riesgo y protocolo obstetrico.",
    "lactation": "Revisar fuente de lactancia y riesgo clinico; no fue validado en este candidato.",
    "specialPopulations": "Precaucion en trasplante cardiaco y uso de dipiridamol; puede requerirse reducir la dosis inicial conforme al rotulo.",
    "patientEducation": "Explicar que pueden ocurrir sintomas intensos y breves; avisar de inmediato al equipo si hay falta de aire o dolor intenso.",
    "clinicalPearls": "No usar la respuesta a adenosina para etiquetar automaticamente la arritmia; el ECG sigue siendo decisivo.",
    "guidelineRecommendations": "No se valido una guia terapeutica adicional en este paquete. El revisor debe confrontar con protocolo local y guia vigente antes de uso clinico.",
    "safetyFlags": "EMERGENCIA: confirmar TSV regular de complejo estrecho y recursos de reanimacion; evitar uso en ritmo irregular de complejo ancho.",
    "alerts": "Candidato documental para revision humana. La fuente extranjera no prueba registro, disponibilidad ni equivalencia en Brasil o Argentina.",
    "references": [
      "DailyMed (EUA): adenosine injection 3 mg/mL, rapid bolus IV, atualizada em 06 abr 2022. https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c1c149fe-9095-4b2a-a21f-7af3212e0254"
    ],
    "ref": "DailyMed (EUA): adenosine injection 3 mg/mL, rapid bolus IV, atualizada em 06 abr 2022. https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c1c149fe-9095-4b2a-a21f-7af3212e0254"
  }
};})();
/* GOLD33_SELECTIVE:adenosina:END */
