/* ============================================================
   MedCases Pro — Módulo: ANTIMICROBIANOS
   Expõe: window.ANTIMICROBIANOS_DRUGS_DB
   Schema: PREMIUM_DRUGS_DB — calculate(paciente, lang)
   ISOLADO em IIFE para não sobrescrever a função t(k) do index.html
============================================================ */
(function(){

  /* Helper bilíngue — escopo local, não vaza para o global */
  const t = (lang, pt, es) => lang === "pt" ? pt : es;

  window.ANTIMICROBIANOS_DRUGS_DB = {};

Object.assign(window.ANTIMICROBIANOS_DRUGS_DB, {

  azitromicina: {
    name: { pt: "Azitromicina", es: "Azitromicina" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const peso = Number(paciente.peso || 0);
      const idade = Number(paciente.idade || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const hepatopatia = Boolean(paciente.hepatopatia);
      const qtLongo = Boolean(paciente.qtLongo);

      const doseDia1 = Math.min(peso * 10, 500);
      const doseDias2a5 = Math.min(peso * 5, 250);
      const dose3Dias = Math.min(peso * 10, 500);

      return {
        name: t(lang, "Azitromicina", "Azitromicina"),
        class: t(lang, "Macrolídeo", "Macrólido"),
        commercialNames: {
          br: ["Zitromax", "Azitromicina EMS", "Azitromicina Eurofarma"],
          ar: ["Zitromax", "Azitromicina Bagó", "Azitromicina genérica"]
        },
        presentation: [
          t(lang, "Comprimidos: 250 mg, 500 mg", "Comprimidos: 250 mg, 500 mg"),
          t(lang, "Suspensão oral: 200 mg/5 mL", "Suspensión oral: 200 mg/5 mL"),
          t(lang, "Pó para solução injetável: 500 mg", "Polvo para solución inyectable: 500 mg")
        ],
        dose: {
          adulto: t(lang, "500 mg VO 1x/dia por 3 dias ou 500 mg no dia 1, seguido de 250 mg/dia do dia 2 ao 5", "500 mg VO 1 vez/día por 3 días o 500 mg el día 1, seguido de 250 mg/día del día 2 al 5"),
          pediatrica3Dias: t(lang, `${dose3Dias.toFixed(0)} mg VO 1x/dia por 3 dias`, `${dose3Dias.toFixed(0)} mg VO 1 vez/día por 3 días`),
          pediatrica5Dias: t(lang, `${doseDia1.toFixed(0)} mg VO no dia 1, depois ${doseDias2a5.toFixed(0)} mg VO 1x/dia do dia 2 ao 5`, `${doseDia1.toFixed(0)} mg VO el día 1, luego ${doseDias2a5.toFixed(0)} mg VO 1 vez/día del día 2 al 5`)
        },
        doseKg: {
          esquema3Dias: t(lang, "10 mg/kg/dia por 3 dias", "10 mg/kg/día por 3 días"),
          esquema5Dias: t(lang, "10 mg/kg no dia 1 + 5 mg/kg/dia do dia 2 ao 5", "10 mg/kg el día 1 + 5 mg/kg/día del día 2 al 5"),
          doseMaxima: t(lang, "Máximo: 500 mg no dia 1 e 250 mg/dia nos dias seguintes", "Máximo: 500 mg el día 1 y 250 mg/día en los días siguientes")
        },
        therapeuticRange: t(lang, "Faixa usual pediátrica: 5–10 mg/kg/dia conforme indicação clínica.", "Rango usual pediátrico: 5–10 mg/kg/día según indicación clínica."),
        dilution: t(lang, "Via oral: não necessita diluição. EV: reconstituir e diluir conforme protocolo institucional.", "Vía oral: no requiere dilución. EV: reconstituir y diluir según protocolo institucional."),
        speed: t(lang, "VO: administrar 1x/dia. EV: infundir lentamente conforme protocolo hospitalar.", "VO: administrar 1 vez/día. EV: infundir lentamente según protocolo hospitalario."),
        commonAdverseEffects: [
          t(lang, "Diarreia", "Diarrea"),
          t(lang, "Náuseas", "Náuseas"),
          t(lang, "Dor abdominal", "Dolor abdominal"),
          t(lang, "Vômitos", "Vómitos"),
          t(lang, "Cefaleia", "Cefalea")
        ],
        dangerousAdverseEffects: [
          t(lang, "Prolongamento do intervalo QT", "Prolongación del intervalo QT"),
          t(lang, "Torsades de Pointes", "Torsades de Pointes"),
          t(lang, "Hepatotoxicidade grave", "Hepatotoxicidad grave"),
          t(lang, "Anafilaxia", "Anafilaxia"),
          t(lang, "Colite por Clostridioides difficile", "Colitis por Clostridioides difficile")
        ],
        risksByPatient: [
          idade < 0.5 ? t(lang, "Menor de 6 meses: validar indicação e dose com pediatria.", "Menor de 6 meses: validar indicación y dosis con pediatría.") : null,
          idade >= 65 ? t(lang, "Idoso: maior risco de QT prolongado e arritmias.", "Adulto mayor: mayor riesgo de QT prolongado y arritmias.") : null,
          gestante ? t(lang, "Gestação: pode ser usada quando indicada, com avaliação risco-benefício.", "Embarazo: puede usarse cuando está indicada, con evaluación riesgo-beneficio.") : null,
          lactante ? t(lang, "Lactação: geralmente compatível; observar diarreia ou candidíase no lactente.", "Lactancia: generalmente compatible; observar diarrea o candidiasis en el lactante.") : null,
          hepatopatia ? t(lang, "Hepatopatia: cautela; suspender se sinais de lesão hepática.", "Hepatopatía: precaución; suspender si aparecen signos de lesión hepática.") : null,
          qtLongo ? t(lang, "QT longo conhecido: evitar ou monitorar ECG e eletrólitos.", "QT largo conocido: evitar o monitorizar ECG y electrolitos.") : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Evitar associação com outros fármacos que prolongam QT.", "Evitar asociación con otros fármacos que prolongan QT."),
          t(lang, "Corrigir hipocalemia e hipomagnesemia antes do uso em pacientes de risco.", "Corregir hipopotasemia e hipomagnesemia antes del uso en pacientes de riesgo."),
          t(lang, "Não usar como monoterapia empírica onde houver alta resistência pneumocócica.", "No usar como monoterapia empírica donde exista alta resistencia neumocócica.")
        ],
        ref: "Goodman & Gilman / FDA Zithromax label / Sanford Guide / Johns Hopkins ABX Guide"
      };
    }
  },

  ceftriaxona: {
    name: { pt: "Ceftriaxona", es: "Ceftriaxona" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const peso = Number(paciente.peso || 0);
      const idade = Number(paciente.idade || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const hiperbilirrubinemia = Boolean(paciente.hiperbilirrubinemia);
      const usoCalcioEV = Boolean(paciente.usoCalcioEV);

      const dosePediaPadrao = Math.min(peso * 50, 2000);
      const dosePediaGrave = Math.min(peso * 100, 4000);
      const doseMeningitePorDose = Math.min((peso * 100) / 2, 2000);

      return {
        name: t(lang, "Ceftriaxona", "Ceftriaxona"),
        class: t(lang, "Cefalosporina de 3ª geração", "Cefalosporina de 3ª generación"),
        commercialNames: {
          br: ["Rocefin", "Ceftriaxona Eurofarma", "Ceftriaxona ABL"],
          ar: ["Rocephin", "Ceftriaxona Richet", "Ceftriaxona genérica"]
        },
        presentation: [
          t(lang, "Frasco-ampola: 500 mg IM/EV", "Frasco ampolla: 500 mg IM/EV"),
          t(lang, "Frasco-ampola: 1 g IM/EV", "Frasco ampolla: 1 g IM/EV"),
          t(lang, "Frasco-ampola: 2 g EV", "Frasco ampolla: 2 g EV")
        ],
        dose: {
          adultoPadrao: t(lang, "1–2 g EV/IM 1x/dia", "1–2 g EV/IM 1 vez/día"),
          adultoGrave: t(lang, "2 g EV 12/12h em infecções graves específicas, como meningite", "2 g EV cada 12h en infecciones graves específicas, como meningitis"),
          pediatricaPadrao: t(lang, `${dosePediaPadrao.toFixed(0)} mg EV/IM 1x/dia`, `${dosePediaPadrao.toFixed(0)} mg EV/IM 1 vez/día`),
          pediatricaGrave: t(lang, `${dosePediaGrave.toFixed(0)} mg/dia EV dividido conforme indicação clínica`, `${dosePediaGrave.toFixed(0)} mg/día EV dividido según indicación clínica`),
          pediatricaMeningite: t(lang, `${doseMeningitePorDose.toFixed(0)} mg EV 12/12h, máximo 2 g por dose`, `${doseMeningitePorDose.toFixed(0)} mg EV cada 12h, máximo 2 g por dosis`)
        },
        doseKg: {
          padrao: t(lang, "50 mg/kg/dia", "50 mg/kg/día"),
          grave: t(lang, "75–100 mg/kg/dia", "75–100 mg/kg/día"),
          meningite: t(lang, "100 mg/kg/dia dividido 12/12h", "100 mg/kg/día dividido cada 12h"),
          doseMaxima: t(lang, "Máximo usual: 4 g/dia", "Máximo usual: 4 g/día")
        },
        therapeuticRange: t(lang, "Faixa usual pediátrica: 50–100 mg/kg/dia conforme gravidade e foco infeccioso.", "Rango usual pediátrico: 50–100 mg/kg/día según gravedad y foco infeccioso."),
        dilution: t(lang, "EV: diluir conforme protocolo institucional, com solução compatível. Não misturar com soluções contendo cálcio.", "EV: diluir según protocolo institucional, con solución compatible. No mezclar con soluciones que contengan calcio."),
        speed: t(lang, "Infusão EV usual em 30 minutos. Em neonatos, usar infusão mais lenta conforme protocolo.", "Infusión EV usual en 30 minutos. En neonatos, usar infusión más lenta según protocolo."),
        commonAdverseEffects: [
          t(lang, "Dor no local da aplicação", "Dolor en el sitio de aplicación"),
          t(lang, "Diarreia", "Diarrea"),
          t(lang, "Rash cutâneo", "Exantema cutáneo"),
          t(lang, "Náuseas", "Náuseas"),
          t(lang, "Elevação de transaminases", "Elevación de transaminasas")
        ],
        dangerousAdverseEffects: [
          t(lang, "Anafilaxia", "Anafilaxia"),
          t(lang, "Colite por Clostridioides difficile", "Colitis por Clostridioides difficile"),
          t(lang, "Precipitação ceftriaxona-cálcio em neonatos", "Precipitación ceftriaxona-calcio en neonatos"),
          t(lang, "Encefalopatia bilirrubínica em neonatos de risco", "Encefalopatía bilirrubínica en neonatos de riesgo"),
          t(lang, "Lama biliar e pseudolitíase biliar", "Barro biliar y pseudolitiasis biliar")
        ],
        risksByPatient: [
          idade <= 0.08 ? t(lang, "Neonato ≤28 dias: evitar se hiperbilirrubinemia, prematuridade ou uso/necessidade de cálcio EV.", "Neonato ≤28 días: evitar si hay hiperbilirrubinemia, prematuridad o uso/necesidad de calcio EV.") : null,
          hiperbilirrubinemia ? t(lang, "Hiperbilirrubinemia neonatal: contraindicação/alto risco de encefalopatia bilirrubínica.", "Hiperbilirrubinemia neonatal: contraindicación/alto riesgo de encefalopatía bilirrubínica.") : null,
          usoCalcioEV ? t(lang, "Uso de cálcio EV em neonato: contraindicado pelo risco de precipitação fatal.", "Uso de calcio EV en neonato: contraindicado por riesgo de precipitación fatal.") : null,
          idade >= 65 ? t(lang, "Idoso: avaliar função renal/hepática e risco de colite por C. difficile.", "Adulto mayor: evaluar función renal/hepática y riesgo de colitis por C. difficile.") : null,
          gestante ? t(lang, "Gestação: pode ser usada quando indicada; evitar uso desnecessário próximo ao parto sem avaliação.", "Embarazo: puede usarse cuando está indicada; evitar uso innecesario cerca del parto sin evaluación.") : null,
          lactante ? t(lang, "Lactação: geralmente compatível; observar diarreia ou candidíase no lactente.", "Lactancia: generalmente compatible; observar diarrea o candidiasis en el lactante.") : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Investigar alergia a cefalosporinas e reação grave prévia a beta-lactâmicos.", "Investigar alergia a cefalosporinas y reacción grave previa a beta-lactámicos."),
          t(lang, "Não administrar na mesma linha com soluções contendo cálcio.", "No administrar en la misma línea con soluciones que contengan calcio."),
          t(lang, "Em meningite, usar dose alta e associar cobertura conforme protocolo local.", "En meningitis, usar dosis alta y asociar cobertura según protocolo local.")
        ],
        ref: "Goodman & Gilman / FDA Ceftriaxone label / Sanford Guide / IDSA"
      };
    }
  }

});

Object.assign(window.ANTIMICROBIANOS_DRUGS_DB, {

  amoxicilina: {
    name: { pt: "Amoxicilina", es: "Amoxicilina" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const peso = Number(paciente.peso || 0);
      const idade = Number(paciente.idade || 0);
      const clcr = Number(paciente.clcr || 90);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);

      const doseOralPadrao = Math.min(peso * 25, 500);
      const doseOralAlta = Math.min(peso * 45, 875);

      return {
        name: t(lang, "Amoxicilina", "Amoxicilina"),
        class: t(lang, "Penicilina de amplo espectro (aminopenicilina)", "Penicilina de amplio espectro (aminopenicilina)"),
        commercialNames: {
          br: ["Amoxil", "Amoxicilina EMS", "Novamox", "Amoxicilina Eurofarma"],
          ar: ["Amoxil", "Amoxicilina Richet", "Amoxicilina Bagó", "Amoxicilina genérica"]
        },
        presentation: [
          t(lang, "Cápsulas/comprimidos: 250 mg, 500 mg, 875 mg", "Cápsulas/comprimidos: 250 mg, 500 mg, 875 mg"),
          t(lang, "Suspensão oral: 125 mg/5 mL, 250 mg/5 mL, 400 mg/5 mL", "Suspensión oral: 125 mg/5 mL, 250 mg/5 mL, 400 mg/5 mL"),
          t(lang, "Pó para suspensão oral (sachê): 500 mg", "Polvo para suspensión oral (sobre): 500 mg")
        ],
        dose: {
          adultoOtite: t(lang, "500 mg VO 8/8h ou 875 mg VO 12/12h por 5–7 dias", "500 mg VO cada 8h o 875 mg VO cada 12h por 5–7 días"),
          adultoStrep: t(lang, "500 mg VO 12/12h ou 875 mg 12/12h por 10 dias", "500 mg VO cada 12h o 875 mg cada 12h por 10 días"),
          adultoUrinario: t(lang, "500 mg VO 8/8h por 7 dias", "500 mg VO cada 8h por 7 días"),
          pediatricaPadrao: t(lang, `${doseOralPadrao.toFixed(0)} mg VO 8/8h`, `${doseOralPadrao.toFixed(0)} mg VO cada 8h`),
          pediatricaAlta: t(lang, `${doseOralAlta.toFixed(0)} mg VO 12/12h (dose alta p/ pneumococo resistente)`, `${doseOralAlta.toFixed(0)} mg VO cada 12h (dosis alta para neumococo resistente)`)
        },
        doseKg: {
          padrao: t(lang, "25–50 mg/kg/dia dividido 8/8h ou 12/12h", "25–50 mg/kg/día dividido cada 8h o 12h"),
          alta: t(lang, "80–90 mg/kg/dia dividido 12/12h (OMA, pneumonia — S. pneumoniae resistente)", "80–90 mg/kg/día dividido cada 12h (OMA, neumonía — S. pneumoniae resistente)"),
          doseMaxima: t(lang, "Máximo: 3 g/dia (adultos)", "Máximo: 3 g/día (adultos)")
        },
        therapeuticRange: t(lang, "Faixa usual pediátrica: 25–90 mg/kg/dia conforme indicação.", "Rango usual pediátrico: 25–90 mg/kg/día según indicación."),
        dilution: t(lang, "Via oral: não necessita diluição. Uso EV não habitual para amoxicilina isolada no Brasil.", "Vía oral: no requiere dilución. El uso EV de amoxicilina sola no es habitual."),
        speed: t(lang, "VO: administrar conforme intervalo prescrito.", "VO: administrar según intervalo prescrito."),
        commonAdverseEffects: [
          t(lang, "Diarreia", "Diarrea"),
          t(lang, "Náuseas", "Náuseas"),
          t(lang, "Rash cutâneo", "Exantema cutáneo"),
          t(lang, "Vômitos", "Vómitos"),
          t(lang, "Candidíase oral/vaginal", "Candidiasis oral/vaginal")
        ],
        dangerousAdverseEffects: [
          t(lang, "Anafilaxia", "Anafilaxia"),
          t(lang, "Doença do soro", "Enfermedad del suero"),
          t(lang, "Colite por Clostridioides difficile", "Colitis por Clostridioides difficile"),
          t(lang, "Síndrome de Stevens-Johnson (raro)", "Síndrome de Stevens-Johnson (raro)")
        ],
        risksByPatient: [
          clcr < 30
            ? t(lang, "ClCr < 30 mL/min: ajustar intervalo para 12/12h ou 24h; evitar doses muito altas.", "ClCr < 30 mL/min: ajustar intervalo a cada 12h o 24h; evitar dosis muy altas.")
            : null,
          clcr < 10
            ? t(lang, "ClCr < 10 mL/min (anúrico): 250–500 mg a cada 24h; suplementar após hemodiálise.", "ClCr < 10 mL/min (anúrico): 250–500 mg cada 24h; suplementar tras hemodiálisis.")
            : null,
          gestante
            ? t(lang, "Gestação: geralmente segura (categoria B); amplamente utilizada.", "Embarazo: generalmente segura (categoría B); ampliamente utilizada.")
            : null,
          lactante
            ? t(lang, "Lactação: compatível; observar diarreia ou candidíase no lactente.", "Lactancia: compatible; observar diarrea o candidiasis en el lactante.")
            : null,
          idade < 0.08
            ? t(lang, "Neonato: ajuste de dose e intervalo necessários; consultar neonatologista.", "Neonato: ajuste de dosis e intervalo necesarios; consultar neonatólogo.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Investigar história de alergia a penicilinas antes de prescrever.", "Investigar historia de alergia a penicilinas antes de prescribir."),
          t(lang, "Rash maculopapular frequente em pacientes com mononucleose — não indica alergia a penicilinas.", "Exantema maculopapular frecuente en mononucleosis — no indica alergia a penicilinas."),
          t(lang, "Coberttura limitada: sem atividade contra S. aureus produtor de penicilinase.", "Cobertura limitada: sin actividad contra S. aureus productor de penicilinasa.")
        ],
        ref: "Goodman & Gilman / FDA Amoxicillin label / Sanford Guide / AAP Red Book"
      };
    }
  },

  amoxicilina_clavulanato: {
    name: { pt: "Amoxicilina + Clavulanato", es: "Amoxicilina + Clavulanato" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const peso = Number(paciente.peso || 0);
      const idade = Number(paciente.idade || 0);
      const clcr = Number(paciente.clcr || 90);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const hepatopatia = Boolean(paciente.hepatopatia);

      const dosePediatricaPadrao = Math.min(peso * 25, 500);
      const dosePediatricaAlta = Math.min(peso * 45, 875);

      return {
        name: t(lang, "Amoxicilina + Clavulanato", "Amoxicilina + Clavulanato"),
        class: t(lang, "Aminopenicilina + inibidor de beta-lactamase", "Aminopenicilina + inhibidor de beta-lactamasa"),
        commercialNames: {
          br: ["Clavulin", "Amoxicilina + Clavulanato EMS", "Augmentin", "Clavulanato Medley"],
          ar: ["Augmentin", "Clavulin", "Amoxicilina/Clavulanato Bagó", "Amoclav"]
        },
        presentation: [
          t(lang, "Comprimidos: 500/125 mg, 875/125 mg", "Comprimidos: 500/125 mg, 875/125 mg"),
          t(lang, "Suspensão oral: 250/62,5 mg/5 mL, 400/57 mg/5 mL", "Suspensión oral: 250/62,5 mg/5 mL, 400/57 mg/5 mL"),
          t(lang, "Pó para solução EV: 1000/200 mg, 2000/200 mg", "Polvo para solución EV: 1000/200 mg, 2000/200 mg")
        ],
        dose: {
          adultoPadrao: t(lang, "875/125 mg VO 12/12h ou 500/125 mg VO 8/8h", "875/125 mg VO cada 12h o 500/125 mg VO cada 8h"),
          adultoGrave: t(lang, "1000/200 mg EV 8/8h ou 2000/200 mg EV 12/12h", "1000/200 mg EV cada 8h o 2000/200 mg EV cada 12h"),
          pediatricaPadrao: t(lang, `${dosePediatricaPadrao.toFixed(0)} mg (amoxicilina) VO 8/8h`, `${dosePediatricaPadrao.toFixed(0)} mg (amoxicilina) VO cada 8h`),
          pediatricaAlta: t(lang, `${dosePediatricaAlta.toFixed(0)} mg (amoxicilina) VO 12/12h (dose alta — OMA, sinusite)`, `${dosePediatricaAlta.toFixed(0)} mg (amoxicilina) VO cada 12h (dosis alta — OMA, sinusitis)`)
        },
        doseKg: {
          padrao: t(lang, "25–45 mg/kg/dia de amoxicilina, dividido 8/8h ou 12/12h", "25–45 mg/kg/día de amoxicilina, dividido cada 8h o 12h"),
          alta: t(lang, "80–90 mg/kg/dia de amoxicilina, dividido 12/12h", "80–90 mg/kg/día de amoxicilina, dividido cada 12h"),
          doseMaxima: t(lang, "Máximo: 875 mg de amoxicilina por dose (adultos)", "Máximo: 875 mg de amoxicilina por dosis (adultos)")
        },
        therapeuticRange: t(lang, "Dose baseada no componente amoxicilina. Monitorar tolerância gastrointestinal.", "Dosis basada en el componente amoxicilina. Monitorear tolerancia gastrointestinal."),
        dilution: t(lang, "EV: diluir em SF 0,9% ou SG 5%, conforme protocolo. Estabilidade limitada após reconstituição.", "EV: diluir en SF 0,9% o SG 5%, según protocolo. Estabilidad limitada tras reconstitución."),
        speed: t(lang, "EV: infundir em 30 minutos. VO: administrar com alimentos para reduzir efeitos GI.", "EV: infundir en 30 minutos. VO: administrar con alimentos para reducir efectos GI."),
        commonAdverseEffects: [
          t(lang, "Diarreia (frequente — clavulanato)", "Diarrea (frecuente — clavulanato)"),
          t(lang, "Náuseas e vômitos", "Náuseas y vómitos"),
          t(lang, "Rash cutâneo", "Exantema cutáneo"),
          t(lang, "Candidíase oral/vaginal", "Candidiasis oral/vaginal"),
          t(lang, "Dispepsia", "Dispepsia")
        ],
        dangerousAdverseEffects: [
          t(lang, "Anafilaxia", "Anafilaxia"),
          t(lang, "Hepatotoxicidade colestática (clavulanato)", "Hepatotoxicidad colestática (clavulanato)"),
          t(lang, "Colite por Clostridioides difficile", "Colitis por Clostridioides difficile"),
          t(lang, "Síndrome de Stevens-Johnson (raro)", "Síndrome de Stevens-Johnson (raro)")
        ],
        risksByPatient: [
          clcr < 30
            ? t(lang, "ClCr < 30 mL/min: usar 500/125 mg 12/12h; evitar formulação 875/125 mg.", "ClCr < 30 mL/min: usar 500/125 mg cada 12h; evitar formulación 875/125 mg.")
            : null,
          clcr < 10
            ? t(lang, "ClCr < 10 mL/min: 250–500 mg (amoxicilina) a cada 24h; suplementar após hemodiálise.", "ClCr < 10 mL/min: 250–500 mg (amoxicilina) cada 24h; suplementar tras hemodiálisis.")
            : null,
          hepatopatia
            ? t(lang, "Hepatopatia: contraindicado ou usar com extrema cautela — risco aumentado de hepatotoxicidade colestática.", "Hepatopatía: contraindicado o usar con extrema precaución — mayor riesgo de hepatotoxicidad colestática.")
            : null,
          gestante
            ? t(lang, "Gestação: geralmente segura; evitar no pré-termo pela possível associação com enterocolite necrosante.", "Embarazo: generalmente segura; evitar en pretérmino por posible asociación con enterocolitis necrotizante.")
            : null,
          lactante
            ? t(lang, "Lactação: compatível; observar diarreia ou candidíase no lactente.", "Lactancia: compatible; observar diarrea o candidiasis en el lactante.")
            : null,
          idade < 0.08
            ? t(lang, "Neonato: evitar clavulanato em prematuros — risco de enterocolite necrosante.", "Neonato: evitar clavulanato en prematuros — riesgo de enterocolitis necrotizante.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Investigar história de alergia a penicilinas/cefalosporinas.", "Investigar historia de alergia a penicilinas/cefalosporinas."),
          t(lang, "Tomar com alimentos reduz significativamente a diarreia e melhora absorção do clavulanato.", "Tomar con alimentos reduce significativamente la diarrea y mejora la absorción del clavulanato."),
          t(lang, "Não usar em hepatite colestática prévia induzida por amoxicilina-clavulanato.", "No usar en hepatitis colestática previa inducida por amoxicilina-clavulanato."),
          t(lang, "Ampliar espectro: cobre S. aureus MSSA, H. influenzae, M. catarrhalis, Klebsiella (não ESBL), anaeróbios.", "Ampliar espectro: cubre S. aureus MSSA, H. influenzae, M. catarrhalis, Klebsiella (no BLEE), anaerobios.")
        ],
        ref: "Goodman & Gilman / FDA Augmentin label / Sanford Guide / IDSA / AAP Red Book"
      };
    }
  }

});

Object.assign(window.ANTIMICROBIANOS_DRUGS_DB, {

  metronidazol: {
    name: { pt: "Metronidazol", es: "Metronidazol" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const idade = Number(paciente.idade || 0);
      const peso = Number(paciente.peso || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const hepatopatia = Boolean(paciente.hepatopatia);

      const dosePediaDia = peso * 30;
      const dosePediaDose = dosePediaDia / 3;

      return {
        name: t(lang, "Metronidazol", "Metronidazol"),
        class: t(lang, "Nitroimidazólico", "Nitroimidazol"),
        commercialNames: {
          br: ["Flagyl", "Metronidazol EMS", "Neo Metrodazol"],
          ar: ["Flagyl", "Metronidazol Bagó", "Metronidazol Genérico"]
        },
        presentation: [
          t(lang, "Comprimidos: 250 mg e 400 mg", "Comprimidos: 250 mg y 400 mg"),
          t(lang, "Suspensão oral", "Suspensión oral"),
          t(lang, "Bolsa EV: 500 mg/100 mL", "Bolsa EV: 500 mg/100 mL")
        ],
        dose: {
          adultoVO: t(lang, "500 mg VO 8/8h", "500 mg VO cada 8h"),
          adultoEV: t(lang, "500 mg EV 8/8h", "500 mg EV cada 8h"),
          pediatrica: t(lang, `${dosePediaDose.toFixed(0)} mg por dose EV/VO 8/8h`, `${dosePediaDose.toFixed(0)} mg por dosis EV/VO cada 8h`)
        },
        doseKg: {
          standard: t(lang, "20–30 mg/kg/dia", "20–30 mg/kg/día"),
          severe: t(lang, "30–40 mg/kg/dia", "30–40 mg/kg/día"),
          maxDose: t(lang, "4 g/dia", "4 g/día")
        },
        therapeuticRange: t(lang, "Faixa usual: 20–40 mg/kg/dia.", "Rango usual: 20–40 mg/kg/día."),
        dilution: t(lang, "Bolsa pronta para uso ou diluição conforme protocolo institucional.", "Bolsa lista para uso o dilución según protocolo institucional."),
        speed: t(lang, "Infundir em 30 a 60 minutos.", "Infundir en 30 a 60 minutos."),
        commonAdverseEffects: [
          t(lang, "Náuseas", "Náuseas"),
          t(lang, "Sabor metálico", "Sabor metálico"),
          t(lang, "Dor abdominal", "Dolor abdominal"),
          t(lang, "Diarreia", "Diarrea")
        ],
        dangerousAdverseEffects: [
          t(lang, "Neuropatia periférica", "Neuropatía periférica"),
          t(lang, "Convulsões", "Convulsiones"),
          t(lang, "Encefalopatia tóxica", "Encefalopatía tóxica"),
          t(lang, "Pancreatite", "Pancreatitis")
        ],
        risksByPatient: [
          idade >= 65
            ? t(lang, "Idoso: maior risco de neurotoxicidade.", "Adulto mayor: mayor riesgo de neurotoxicidad.")
            : null,
          hepatopatia
            ? t(lang, "Hepatopatia: considerar redução da dose.", "Hepatopatía: considerar reducción de dosis.")
            : null,
          gestante
            ? t(lang, "Gestação: geralmente seguro após primeiro trimestre.", "Embarazo: generalmente seguro después del primer trimestre.")
            : null,
          lactante
            ? t(lang, "Lactação: compatível na maioria dos casos.", "Lactancia: compatible en la mayoría de los casos.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Proibido consumir álcool durante o tratamento e por 48–72h após término.", "Prohibido consumir alcohol durante el tratamiento y por 48–72h posteriores."),
          t(lang, "Monitorar sintomas neurológicos em tratamentos prolongados.", "Monitorar síntomas neurológicos en tratamientos prolongados.")
        ],
        ref: "Goodman & Gilman / Sanford Guide / IDSA"
      };
    }
  },

  ciprofloxacino: {
    name: { pt: "Ciprofloxacino", es: "Ciprofloxacino" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const idade = Number(paciente.idade || 0);
      const peso = Number(paciente.peso || 0);
      const clcr = Number(paciente.clcr || 100);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);

      const dosePedia = peso * 15;

      return {
        name: t(lang, "Ciprofloxacino", "Ciprofloxacino"),
        class: t(lang, "Fluoroquinolona", "Fluoroquinolona"),
        commercialNames: {
          br: ["Cipro", "Ciprofloxacino EMS", "Cipro XR"],
          ar: ["Baycip", "Ciprofloxacino Bagó", "Ciprofloxacino Genérico"]
        },
        presentation: [
          t(lang, "Comprimidos: 250, 500 e 750 mg", "Comprimidos: 250, 500 y 750 mg"),
          t(lang, "Bolsa EV: 200 mg/100 mL", "Bolsa EV: 200 mg/100 mL"),
          t(lang, "Bolsa EV: 400 mg/200 mL", "Bolsa EV: 400 mg/200 mL")
        ],
        dose: {
          adultoVO: t(lang, "500 mg VO 12/12h", "500 mg VO cada 12h"),
          adultoEV: t(lang, "400 mg EV 12/12h", "400 mg EV cada 12h"),
          pediatrica: t(lang, `${dosePedia.toFixed(0)} mg VO/EV 12/12h`, `${dosePedia.toFixed(0)} mg VO/EV cada 12h`)
        },
        doseKg: {
          standard: t(lang, "10–15 mg/kg por dose 12/12h", "10–15 mg/kg por dosis cada 12h"),
          severe: t(lang, "15–20 mg/kg por dose", "15–20 mg/kg por dosis"),
          maxDose: t(lang, "1,5 g/dia", "1,5 g/día")
        },
        therapeuticRange: t(lang, "Faixa habitual: 10–20 mg/kg por dose.", "Rango habitual: 10–20 mg/kg por dosis."),
        dilution: t(lang, "Bolsa pronta para infusão.", "Bolsa lista para infusión."),
        speed: t(lang, "Infundir em 60 minutos.", "Infundir en 60 minutos."),
        commonAdverseEffects: [
          t(lang, "Náuseas", "Náuseas"),
          t(lang, "Diarreia", "Diarrea"),
          t(lang, "Cefaleia", "Cefalea"),
          t(lang, "Insônia", "Insomnio")
        ],
        dangerousAdverseEffects: [
          t(lang, "Ruptura de tendão", "Rotura de tendón"),
          t(lang, "Prolongamento do QT", "Prolongación del QT"),
          t(lang, "Dissecção de aorta", "Disección aórtica"),
          t(lang, "Hipoglicemia grave", "Hipoglucemia grave"),
          t(lang, "Convulsões", "Convulsiones")
        ],
        risksByPatient: [
          idade >= 60
            ? t(lang, "Idoso: alto risco de tendinopatia e ruptura tendínea.", "Adulto mayor: alto riesgo de tendinopatía y ruptura tendinosa.")
            : null,
          clcr < 50
            ? t(lang, "Necessita ajuste renal.", "Requiere ajuste renal.")
            : null,
          gestante
            ? t(lang, "Evitar durante gestação salvo situações excepcionais.", "Evitar durante embarazo salvo situaciones excepcionales.")
            : null,
          lactante
            ? t(lang, "Usar com cautela durante lactação.", "Usar con precaución durante lactancia.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Evitar associação com antiácidos contendo cálcio, magnésio ou alumínio.", "Evitar asociación con antiácidos que contengan calcio, magnesio o aluminio."),
          t(lang, "Suspender imediatamente se dor tendínea.", "Suspender inmediatamente si aparece dolor tendinoso."),
          t(lang, "Monitorar QT prolongado em pacientes de risco.", "Monitorar QT prolongado en pacientes de riesgo.")
        ],
        ref: "Goodman & Gilman / Sanford Guide / FDA Ciprofloxacin Label"
      };
    }
  }

});

Object.assign(window.ANTIMICROBIANOS_DRUGS_DB, {

  clindamicina: {
    name: { pt: "Clindamicina", es: "Clindamicina" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const peso = Number(paciente.peso || 0);
      const idade = Number(paciente.idade || 0);
      const hepatopatia = Boolean(paciente.hepatopatia);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);

      const dosePediaDia = peso * 30;
      const dosePediaDose = dosePediaDia / 3;

      return {
        name: t(lang, "Clindamicina", "Clindamicina"),
        class: t(lang, "Lincosamida", "Lincosamida"),
        commercialNames: {
          br: ["Dalacin C", "Clindamicina EMS", "Clindamicina Medley"],
          ar: ["Dalacin C", "Clindamicina Bagó", "Clindamicina Richet"]
        },
        presentation: [
          t(lang, "Cápsulas: 300 mg", "Cápsulas: 300 mg"),
          t(lang, "Cápsulas: 600 mg", "Cápsulas: 600 mg"),
          t(lang, "Ampola EV: 300 mg/2 mL", "Ampolla EV: 300 mg/2 mL"),
          t(lang, "Ampola EV: 600 mg/4 mL", "Ampolla EV: 600 mg/4 mL")
        ],
        dose: {
          adultoVO: t(lang, "300–450 mg VO 6/6h", "300–450 mg VO cada 6h"),
          adultoEV: t(lang, "600–900 mg EV 8/8h", "600–900 mg EV cada 8h"),
          pediatrica: t(lang, `${dosePediaDose.toFixed(0)} mg por dose VO/EV 8/8h`, `${dosePediaDose.toFixed(0)} mg por dosis VO/EV cada 8h`)
        },
        doseKg: {
          standard: t(lang, "20–30 mg/kg/dia", "20–30 mg/kg/día"),
          severe: t(lang, "30–40 mg/kg/dia", "30–40 mg/kg/día"),
          maxDose: t(lang, "4,8 g/dia", "4,8 g/día")
        },
        therapeuticRange: t(lang, "Faixa habitual: 20–40 mg/kg/dia.", "Rango habitual: 20–40 mg/kg/día."),
        dilution: t(lang, "Diluir em SF 0,9% ou SG5% conforme protocolo institucional.", "Diluir en SF 0,9% o SG5% según protocolo institucional."),
        speed: t(lang, "Infundir em 30–60 minutos.", "Infundir en 30–60 minutos."),
        commonAdverseEffects: [
          t(lang, "Diarreia", "Diarrea"),
          t(lang, "Náuseas", "Náuseas"),
          t(lang, "Dor abdominal", "Dolor abdominal"),
          t(lang, "Rash", "Exantema")
        ],
        dangerousAdverseEffects: [
          t(lang, "Colite por Clostridioides difficile", "Colitis por Clostridioides difficile"),
          t(lang, "Anafilaxia", "Anafilaxia"),
          t(lang, "Stevens-Johnson", "Stevens-Johnson"),
          t(lang, "Hepatotoxicidade", "Hepatotoxicidad")
        ],
        risksByPatient: [
          idade >= 65
            ? t(lang, "Idoso: maior risco de colite por C. difficile.", "Adulto mayor: mayor riesgo de colitis por C. difficile.")
            : null,
          hepatopatia
            ? t(lang, "Monitorar função hepática em tratamentos prolongados.", "Monitorar función hepática en tratamientos prolongados.")
            : null,
          gestante
            ? t(lang, "Pode ser utilizada durante gestação quando indicada.", "Puede utilizarse durante embarazo cuando está indicada.")
            : null,
          lactante
            ? t(lang, "Compatível com lactação; observar diarreia no lactente.", "Compatible con lactancia; observar diarrea en el lactante.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Maior risco de colite associada a antibióticos.", "Mayor riesgo de colitis asociada a antibióticos."),
          t(lang, "Suspender se diarreia importante.", "Suspender si aparece diarrea importante.")
        ],
        ref: "Goodman & Gilman / Sanford Guide / IDSA SSTI Guidelines"
      };
    }
  },

  sulfametoxazol_trimetoprim: {
    name: { pt: "Sulfametoxazol + Trimetoprim", es: "Sulfametoxazol + Trimetoprima" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const peso = Number(paciente.peso || 0);
      const idade = Number(paciente.idade || 0);
      const clcr = Number(paciente.clcr || 100);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);

      const doseTMP = peso * 5;

      return {
        name: t(lang, "Sulfametoxazol + Trimetoprim", "Sulfametoxazol + Trimetoprima"),
        class: t(lang, "Sulfonamida", "Sulfonamida"),
        commercialNames: {
          br: ["Bactrim", "Bactrim F", "Sulfametoxazol + Trimetoprim EMS"],
          ar: ["Bactrim", "Bactrim Forte", "Bactrim Bagó"]
        },
        presentation: [
          t(lang, "Comprimido: 400/80 mg", "Comprimido: 400/80 mg"),
          t(lang, "Comprimido Forte: 800/160 mg", "Comprimido Forte: 800/160 mg"),
          t(lang, "Suspensão oral: 200/40 mg por 5 mL", "Suspensión oral: 200/40 mg por 5 mL"),
          t(lang, "Ampola EV", "Ampolla EV")
        ],
        dose: {
          adultoVO: t(lang, "800/160 mg VO 12/12h", "800/160 mg VO cada 12h"),
          pediatrica: t(lang, `${doseTMP.toFixed(0)} mg de trimetoprim por dose 12/12h`, `${doseTMP.toFixed(0)} mg de trimetoprima por dosis cada 12h`)
        },
        doseKg: {
          standard: t(lang, "4–5 mg/kg/dose (trimetoprim)", "4–5 mg/kg/dosis (trimetoprima)"),
          severe: t(lang, "15–20 mg/kg/dia (trimetoprim)", "15–20 mg/kg/día (trimetoprima)"),
          maxDose: t(lang, "320 mg/dia de trimetoprim", "320 mg/día de trimetoprima")
        },
        therapeuticRange: t(lang, "Dose calculada sempre pelo componente trimetoprim.", "La dosis siempre se calcula por el componente trimetoprima."),
        dilution: t(lang, "EV: diluir conforme protocolo institucional.", "EV: diluir según protocolo institucional."),
        speed: t(lang, "Infusão EV em 60–90 minutos.", "Infusión EV en 60–90 minutos."),
        commonAdverseEffects: [
          t(lang, "Náuseas", "Náuseas"),
          t(lang, "Vômitos", "Vómitos"),
          t(lang, "Rash", "Exantema"),
          t(lang, "Fotossensibilidade", "Fotosensibilidad")
        ],
        dangerousAdverseEffects: [
          t(lang, "Stevens-Johnson", "Stevens-Johnson"),
          t(lang, "Necrólise epidérmica tóxica", "Necrólisis epidérmica tóxica"),
          t(lang, "Hipercalemia", "Hiperpotasemia"),
          t(lang, "Mielossupressão", "Mielosupresión"),
          t(lang, "Anafilaxia", "Anafilaxia")
        ],
        risksByPatient: [
          idade >= 65
            ? t(lang, "Idoso: alto risco de hipercalemia e lesão renal.", "Adulto mayor: alto riesgo de hiperpotasemia y lesión renal.")
            : null,
          clcr < 30
            ? t(lang, "Necessita ajuste importante da dose.", "Requiere ajuste importante de dosis.")
            : null,
          gestante
            ? t(lang, "Evitar principalmente no primeiro trimestre e próximo ao parto.", "Evitar principalmente durante el primer trimestre y cerca del parto.")
            : null,
          lactante
            ? t(lang, "Usar com cautela em recém-nascidos e prematuros.", "Usar con precaución en recién nacidos y prematuros.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Monitorar potássio sérico.", "Monitorar potasio sérico."),
          t(lang, "Monitorar hemograma em uso prolongado.", "Monitorar hemograma en uso prolongado."),
          t(lang, "Dose sempre calculada pelo trimetoprim.", "La dosis siempre se calcula por la trimetoprima.")
        ],
        ref: "Goodman & Gilman / Sanford Guide / IDSA"
      };
    }
  },

  piperacilina_tazobactam: {
    name: { pt: "Piperacilina + Tazobactam", es: "Piperacilina + Tazobactam" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const idade = Number(paciente.idade || 0);
      const clcr = Number(paciente.clcr || 100);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);

      const doseAdulto = clcr < 40
        ? t(lang, "Necessita ajuste renal individualizado.", "Requiere ajuste renal individualizado.")
        : t(lang, "4,5 g EV 6/6h", "4,5 g EV cada 6h");

      return {
        name: t(lang, "Piperacilina + Tazobactam", "Piperacilina + Tazobactam"),
        class: t(lang, "Penicilina antipseudomonas + inibidor de beta-lactamase", "Penicilina antipseudomona + inhibidor de beta-lactamasa"),
        commercialNames: {
          br: ["Tazocin", "Piperacilina/Tazobactam Eurofarma"],
          ar: ["Tazocin", "Piperacilina/Tazobactam Richet"]
        },
        presentation: [
          t(lang, "Frasco-ampola: 2,25 g", "Frasco ampolla: 2,25 g"),
          t(lang, "Frasco-ampola: 4,5 g", "Frasco ampolla: 4,5 g")
        ],
        dose: {
          adulto: doseAdulto,
          sepse: t(lang, "4,5 g EV 6/6h", "4,5 g EV cada 6h"),
          infusaoProlongada: t(lang, "4,5 g EV em 4 horas", "4,5 g EV en 4 horas")
        },
        doseKg: {
          standard: t(lang, "80–100 mg/kg por dose (componente piperacilina)", "80–100 mg/kg por dosis (componente piperacilina)"),
          maxDose: t(lang, "18 g/dia de piperacilina", "18 g/día de piperacilina")
        },
        therapeuticRange: t(lang, "Antibiótico dependente do tempo acima da MIC.", "Antibiótico dependiente del tiempo por encima de la MIC."),
        dilution: t(lang, "Diluir conforme protocolo institucional.", "Diluir según protocolo institucional."),
        speed: t(lang, "Infusão em 30 min ou prolongada em 4 horas.", "Infusión en 30 min o prolongada en 4 horas."),
        commonAdverseEffects: [
          t(lang, "Diarreia", "Diarrea"),
          t(lang, "Náuseas", "Náuseas"),
          t(lang, "Rash", "Exantema")
        ],
        dangerousAdverseEffects: [
          t(lang, "Anafilaxia", "Anafilaxia"),
          t(lang, "Nefrotoxicidade", "Nefrotoxicidad"),
          t(lang, "Convulsões", "Convulsiones"),
          t(lang, "Leucopenia", "Leucopenia")
        ],
        risksByPatient: [
          idade >= 65
            ? t(lang, "Idoso: monitorar função renal.", "Adulto mayor: monitorar función renal.")
            : null,
          clcr < 40
            ? t(lang, "Necessita ajuste renal obrigatório.", "Requiere ajuste renal obligatorio.")
            : null,
          gestante
            ? t(lang, "Pode ser utilizada quando indicada.", "Puede utilizarse cuando está indicada.")
            : null,
          lactante
            ? t(lang, "Compatível com lactação.", "Compatible con lactancia.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Cobertura para Pseudomonas aeruginosa.", "Cobertura para Pseudomonas aeruginosa."),
          t(lang, "Monitorar função renal diariamente em pacientes críticos.", "Monitorar función renal diariamente en pacientes críticos.")
        ],
        ref: "Goodman & Gilman / Sanford Guide / IDSA HAP/VAP"
      };
    }
  },

  vancomicina: {
    name: { pt: "Vancomicina", es: "Vancomicina" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const peso = Number(paciente.peso || 0);
      const idade = Number(paciente.idade || 0);
      const clcr = Number(paciente.clcr || 100);

      let doseAtaque = Math.min(peso * 25, 3000);

      const intervalo = clcr >= 80 ? 12 : clcr >= 50 ? 24 : clcr >= 20 ? 48 : 0;

      return {
        name: t(lang, "Vancomicina", "Vancomicina"),
        class: t(lang, "Glicopeptídeo", "Glucopéptido"),
        commercialNames: {
          br: ["Vancomicina Teuto", "Vancomicina Eurofarma"],
          ar: ["Vancomicina Richet", "Vancomicina Klonal"]
        },
        presentation: [
          t(lang, "Frasco-ampola 500 mg", "Frasco ampolla 500 mg"),
          t(lang, "Frasco-ampola 1 g", "Frasco ampolla 1 g")
        ],
        dose: {
          ataque: t(lang, `${doseAtaque.toFixed(0)} mg EV dose de ataque`, `${doseAtaque.toFixed(0)} mg EV dosis de carga`),
          manutencao: intervalo > 0
            ? t(lang, "15 mg/kg por dose", "15 mg/kg por dosis")
            : t(lang, "Guiar por nível sérico.", "Guiar por nivel sérico.")
        },
        doseKg: {
          ataque: t(lang, "20–25 mg/kg", "20–25 mg/kg"),
          manutencao: t(lang, "15–20 mg/kg por dose", "15–20 mg/kg por dosis"),
          maxDose: t(lang, "4 g/dia", "4 g/día")
        },
        therapeuticRange: t(lang, "AUC/MIC alvo 400–600.", "AUC/MIC objetivo 400–600."),
        dilution: t(lang, "Diluir em SF 0,9%.", "Diluir en SF 0,9%."),
        speed: t(lang, "Infundir em pelo menos 60–120 minutos.", "Infundir en al menos 60–120 minutos."),
        commonAdverseEffects: [
          t(lang, "Flebite", "Flebitis"),
          t(lang, "Rash", "Exantema"),
          t(lang, "Febre medicamentosa", "Fiebre medicamentosa")
        ],
        dangerousAdverseEffects: [
          t(lang, "Nefrotoxicidade", "Nefrotoxicidad"),
          t(lang, "Ototoxicidade", "Ototoxicidad"),
          t(lang, "Síndrome do Homem Vermelho", "Síndrome del Hombre Rojo"),
          t(lang, "Neutropenia", "Neutropenia")
        ],
        risksByPatient: [
          idade >= 65
            ? t(lang, "Idoso: alto risco de nefrotoxicidade.", "Adulto mayor: alto riesgo de nefrotoxicidad.")
            : null,
          clcr < 50
            ? t(lang, "Necessita ajuste baseado em função renal.", "Requiere ajuste basado en función renal.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Monitorar níveis séricos.", "Monitorar niveles séricos."),
          t(lang, "Monitorar creatinina diariamente.", "Monitorar creatinina diariamente."),
          t(lang, "Infusão rápida aumenta risco de Síndrome do Homem Vermelho.", "La infusión rápida aumenta el riesgo de Síndrome del Hombre Rojo.")
        ],
        ref: "ASHP Vancomycin Monitoring Guidelines 2020 / Sanford Guide / Goodman & Gilman"
      };
    }
  }

});

Object.assign(window.ANTIMICROBIANOS_DRUGS_DB, {

  cefepime: {
    name: { pt: "Cefepime", es: "Cefepime" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const peso = Number(paciente.peso || 0);
      const idade = Number(paciente.idade || 0);
      const clcr = Number(paciente.clcr || 100);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);

      const dosePedia = Math.min(peso * 50, 2000);
      const doseAdulto = clcr < 60
        ? t(lang, "Necessita ajuste renal.", "Requiere ajuste renal.")
        : t(lang, "2 g EV 8/8h", "2 g EV cada 8h");

      return {
        name: t(lang, "Cefepime", "Cefepime"),
        class: t(lang, "Cefalosporina de 4ª geração", "Cefalosporina de 4ª generación"),
        commercialNames: {
          br: ["Maxcef", "Cefepime ABL", "Cefepime Eurofarma"],
          ar: ["Maxipime", "Cefepime Richet", "Cefepime Klonal"]
        },
        presentation: [
          t(lang, "Frasco-ampola 500 mg", "Frasco ampolla 500 mg"),
          t(lang, "Frasco-ampola 1 g", "Frasco ampolla 1 g"),
          t(lang, "Frasco-ampola 2 g", "Frasco ampolla 2 g")
        ],
        dose: {
          adulto: doseAdulto,
          neutropeniaFebril: t(lang, "2 g EV 8/8h", "2 g EV cada 8h"),
          pediatrica: t(lang, `${dosePedia.toFixed(0)} mg EV 8/8h`, `${dosePedia.toFixed(0)} mg EV cada 8h`)
        },
        doseKg: {
          standard: t(lang, "50 mg/kg por dose", "50 mg/kg por dosis"),
          maxDose: t(lang, "6 g/dia", "6 g/día")
        },
        therapeuticRange: t(lang, "Antibiótico dependente do tempo acima da MIC.", "Antibiótico dependiente del tiempo sobre la MIC."),
        dilution: t(lang, "Diluir em SF 0,9% ou SG5%.", "Diluir en SF 0,9% o SG5%."),
        speed: t(lang, "Infundir em aproximadamente 30 minutos.", "Infundir en aproximadamente 30 minutos."),
        commonAdverseEffects: [
          t(lang, "Diarreia", "Diarrea"),
          t(lang, "Rash", "Exantema"),
          t(lang, "Náuseas", "Náuseas")
        ],
        dangerousAdverseEffects: [
          t(lang, "Neurotoxicidade", "Neurotoxicidad"),
          t(lang, "Encefalopatia", "Encefalopatía"),
          t(lang, "Convulsões", "Convulsiones"),
          t(lang, "Anafilaxia", "Anafilaxia")
        ],
        risksByPatient: [
          idade >= 65
            ? t(lang, "Idoso: maior risco de neurotoxicidade.", "Adulto mayor: mayor riesgo de neurotoxicidad.")
            : null,
          clcr < 60
            ? t(lang, "Ajuste renal obrigatório.", "Ajuste renal obligatorio.")
            : null,
          gestante
            ? t(lang, "Pode ser utilizado quando indicado.", "Puede utilizarse cuando está indicado.")
            : null,
          lactante
            ? t(lang, "Compatível com lactação.", "Compatible con lactancia.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Monitorar estado mental em pacientes renais.", "Monitorar estado mental en pacientes renales."),
          t(lang, "Cobertura para Pseudomonas aeruginosa.", "Cobertura para Pseudomonas aeruginosa.")
        ],
        ref: "Sanford Guide 2025 / IDSA HAP-VAP / Goodman & Gilman"
      };
    }
  },

  meropenem: {
    name: { pt: "Meropenem", es: "Meropenem" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const peso = Number(paciente.peso || 0);
      const idade = Number(paciente.idade || 0);
      const clcr = Number(paciente.clcr || 100);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);

      const dosePedia = Math.min(peso * 40, 2000);
      const doseAdulto = clcr < 50
        ? t(lang, "Necessita ajuste renal.", "Requiere ajuste renal.")
        : t(lang, "1 g EV 8/8h", "1 g EV cada 8h");

      return {
        name: t(lang, "Meropenem", "Meropenem"),
        class: t(lang, "Carbapenêmico", "Carbapenémico"),
        commercialNames: {
          br: ["Meronem", "Meropenem Eurofarma", "Meropenem ABL"],
          ar: ["Meronem", "Meropenem Richet", "Meropenem Klonal"]
        },
        presentation: [
          t(lang, "Frasco-ampola 500 mg", "Frasco ampolla 500 mg"),
          t(lang, "Frasco-ampola 1 g", "Frasco ampolla 1 g"),
          t(lang, "Frasco-ampola 2 g", "Frasco ampolla 2 g")
        ],
        dose: {
          adulto: doseAdulto,
          meningite: t(lang, "2 g EV 8/8h", "2 g EV cada 8h"),
          pediatrica: t(lang, `${dosePedia.toFixed(0)} mg EV 8/8h`, `${dosePedia.toFixed(0)} mg EV cada 8h`)
        },
        doseKg: {
          standard: t(lang, "20 mg/kg por dose", "20 mg/kg por dosis"),
          severe: t(lang, "40 mg/kg por dose", "40 mg/kg por dosis"),
          maxDose: t(lang, "6 g/dia", "6 g/día")
        },
        therapeuticRange: t(lang, "Antibiótico dependente do tempo acima da MIC.", "Antibiótico dependiente del tiempo sobre la MIC."),
        dilution: t(lang, "Diluir conforme protocolo institucional.", "Diluir según protocolo institucional."),
        speed: t(lang, "Infundir em 30 minutos ou infusão estendida.", "Infundir en 30 minutos o infusión extendida."),
        commonAdverseEffects: [
          t(lang, "Náuseas", "Náuseas"),
          t(lang, "Diarreia", "Diarrea"),
          t(lang, "Rash", "Exantema")
        ],
        dangerousAdverseEffects: [
          t(lang, "Convulsões", "Convulsiones"),
          t(lang, "Anafilaxia", "Anafilaxia"),
          t(lang, "Trombocitopenia", "Trombocitopenia")
        ],
        risksByPatient: [
          idade >= 65
            ? t(lang, "Idoso: monitorar função renal.", "Adulto mayor: monitorar función renal.")
            : null,
          clcr < 50
            ? t(lang, "Ajuste renal obrigatório.", "Ajuste renal obligatorio.")
            : null,
          gestante
            ? t(lang, "Pode ser utilizado quando indicado.", "Puede utilizarse cuando está indicado.")
            : null,
          lactante
            ? t(lang, "Compatível com lactação.", "Compatible con lactancia.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Fármaco de escolha para muitas infecções por ESBL.", "Fármaco de elección para muchas infecciones por ESBL."),
          t(lang, "Evitar uso indiscriminado para reduzir resistência bacteriana.", "Evitar uso indiscriminado para reducir resistencia bacteriana.")
        ],
        ref: "Sanford Guide 2025 / IDSA Sepsis / Goodman & Gilman"
      };
    }
  },

  gentamicina: {
    name: { pt: "Gentamicina", es: "Gentamicina" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const peso = Number(paciente.peso || 0);
      const idade = Number(paciente.idade || 0);
      const clcr = Number(paciente.clcr || 100);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);

      const doseExtendida = peso * 7;
      const doseTradicional = peso * 2;
      const intervalo = clcr < 20 ? 72 : clcr < 40 ? 48 : clcr < 60 ? 36 : 24;

      return {
        name: t(lang, "Gentamicina", "Gentamicina"),
        class: t(lang, "Aminoglicosídeo", "Aminoglucósido"),
        commercialNames: {
          br: ["Garamicina", "Gentamicina Teuto", "Gentamicina Eurofarma"],
          ar: ["Garamicina", "Gentamicina Richet", "Gentamicina Klonal"]
        },
        presentation: [
          t(lang, "Ampola 20 mg/2 mL", "Ampolla 20 mg/2 mL"),
          t(lang, "Ampola 80 mg/2 mL", "Ampolla 80 mg/2 mL"),
          t(lang, "Ampola 160 mg/2 mL", "Ampolla 160 mg/2 mL")
        ],
        dose: {
          extendedInterval: t(lang, `${doseExtendida.toFixed(0)} mg EV a cada ${intervalo} horas`, `${doseExtendida.toFixed(0)} mg EV cada ${intervalo} horas`),
          tradicional: t(lang, `${doseTradicional.toFixed(0)} mg EV 8/8h`, `${doseTradicional.toFixed(0)} mg EV cada 8h`)
        },
        doseKg: {
          standard: t(lang, "5–7 mg/kg/dose", "5–7 mg/kg/dosis"),
          endocardite: t(lang, "1 mg/kg 8/8h", "1 mg/kg cada 8h"),
          maxDose: t(lang, "Monitorização obrigatória", "Monitorización obligatoria")
        },
        therapeuticRange: t(lang, "Monitorar pico e vale séricos.", "Monitorar pico y valle séricos."),
        dilution: t(lang, "Diluir em 50–100 mL de SF 0,9%.", "Diluir en 50–100 mL de SF 0,9%."),
        speed: t(lang, "Infundir em 30–60 minutos.", "Infundir en 30–60 minutos."),
        commonAdverseEffects: [
          t(lang, "Náuseas", "Náuseas"),
          t(lang, "Tontura", "Mareo"),
          t(lang, "Dor local", "Dolor local")
        ],
        dangerousAdverseEffects: [
          t(lang, "Nefrotoxicidade", "Nefrotoxicidad"),
          t(lang, "Ototoxicidade", "Ototoxicidad"),
          t(lang, "Bloqueio neuromuscular", "Bloqueo neuromuscular"),
          t(lang, "Insuficiência renal aguda", "Insuficiencia renal aguda")
        ],
        risksByPatient: [
          idade >= 65
            ? t(lang, "Idoso: risco muito elevado de nefrotoxicidade.", "Adulto mayor: riesgo muy elevado de nefrotoxicidad.")
            : null,
          clcr < 60
            ? t(lang, "Necessita ajuste baseado na função renal.", "Requiere ajuste basado en la función renal.")
            : null,
          gestante
            ? t(lang, "Evitar durante gestação devido ao risco de ototoxicidade fetal.", "Evitar durante el embarazo por riesgo de ototoxicidad fetal.")
            : null,
          lactante
            ? t(lang, "Compatibilidade variável; avaliar risco-benefício.", "Compatibilidad variable; evaluar riesgo-beneficio.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Monitorar creatinina diariamente.", "Monitorar creatinina diariamente."),
          t(lang, "Monitorar audição em tratamentos prolongados.", "Monitorar audición en tratamientos prolongados."),
          t(lang, "Evitar associação com outros nefrotóxicos.", "Evitar asociación con otros nefrotóxicos.")
        ],
        ref: "Sanford Guide / Goodman & Gilman / IDSA"
      };
    }
  },

  amicacina: {
    name: { pt: "Amicacina", es: "Amikacina" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const peso = Number(paciente.peso || 0);
      const idade = Number(paciente.idade || 0);
      const clcr = Number(paciente.clcr || 100);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);

      const doseExtendida = peso * 15;
      const intervalo = clcr < 20 ? 72 : clcr < 40 ? 48 : clcr < 60 ? 36 : 24;

      return {
        name: t(lang, "Amicacina", "Amikacina"),
        class: t(lang, "Aminoglicosídeo", "Aminoglucósido"),
        commercialNames: {
          br: ["Novamin", "Amicacina Teuto", "Amicacina Eurofarma"],
          ar: ["Amikacina Richet", "Amikacina Klonal", "Amikacina Genérica"]
        },
        presentation: [
          t(lang, "Ampola 100 mg/2 mL", "Ampolla 100 mg/2 mL"),
          t(lang, "Ampola 500 mg/2 mL", "Ampolla 500 mg/2 mL")
        ],
        dose: {
          extendedInterval: t(lang, `${doseExtendida.toFixed(0)} mg EV a cada ${intervalo} horas`, `${doseExtendida.toFixed(0)} mg EV cada ${intervalo} horas`)
        },
        doseKg: {
          standard: t(lang, "15–20 mg/kg/dose", "15–20 mg/kg/dosis"),
          maxDose: t(lang, "Monitorização sérica obrigatória", "Monitorización sérica obligatoria")
        },
        therapeuticRange: t(lang, "Pico alvo geralmente 20–30 mcg/mL.", "Pico objetivo generalmente 20–30 mcg/mL."),
        dilution: t(lang, "Diluir em 100–200 mL de SF 0,9%.", "Diluir en 100–200 mL de SF 0,9%."),
        speed: t(lang, "Infundir em 30–60 minutos.", "Infundir en 30–60 minutos."),
        commonAdverseEffects: [
          t(lang, "Náuseas", "Náuseas"),
          t(lang, "Febre medicamentosa", "Fiebre medicamentosa")
        ],
        dangerousAdverseEffects: [
          t(lang, "Nefrotoxicidade", "Nefrotoxicidad"),
          t(lang, "Ototoxicidade", "Ototoxicidad"),
          t(lang, "Bloqueio neuromuscular", "Bloqueo neuromuscular"),
          t(lang, "Surdez permanente", "Sordera permanente")
        ],
        risksByPatient: [
          idade >= 65
            ? t(lang, "Idoso: risco elevado de lesão renal.", "Adulto mayor: riesgo elevado de lesión renal.")
            : null,
          clcr < 60
            ? t(lang, "Necessita ajuste renal obrigatório.", "Requiere ajuste renal obligatorio.")
            : null,
          gestante
            ? t(lang, "Evitar durante gestação sempre que possível.", "Evitar durante el embarazo siempre que sea posible.")
            : null,
          lactante
            ? t(lang, "Avaliar individualmente.", "Evaluar individualmente.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Monitorar creatinina e níveis séricos.", "Monitorar creatinina y niveles séricos."),
          t(lang, "Evitar associação com vancomicina quando possível.", "Evitar asociación con vancomicina cuando sea posible."),
          t(lang, "Maior potência contra Gram negativos resistentes.", "Mayor potencia contra Gram negativos resistentes.")
        ],
        ref: "Sanford Guide 2025 / Goodman & Gilman / IDSA"
      };
    }
  }

});

Object.assign(window.ANTIMICROBIANOS_DRUGS_DB, {

  levofloxacino: {
    name: { pt: "Levofloxacino", es: "Levofloxacino" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const idade = Number(paciente.idade || 0);
      const clcr = Number(paciente.clcr || 100);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const qtLongo = Boolean(paciente.qtLongo);

      const dosePadrao = clcr < 50
        ? t(lang, "Necessita ajuste renal.", "Requiere ajuste renal.")
        : t(lang, "750 mg VO/EV 1x/dia", "750 mg VO/EV 1 vez/día");

      return {
        name: t(lang, "Levofloxacino", "Levofloxacino"),
        class: t(lang, "Fluoroquinolona respiratória", "Fluoroquinolona respiratoria"),
        commercialNames: {
          br: ["Tavanic", "Levoxin", "Levofloxacino EMS"],
          ar: ["Tavanic", "Levofloxacino Bagó", "Levofloxacino Richet"]
        },
        presentation: [
          t(lang, "Comprimidos 250 mg", "Comprimidos 250 mg"),
          t(lang, "Comprimidos 500 mg", "Comprimidos 500 mg"),
          t(lang, "Comprimidos 750 mg", "Comprimidos 750 mg"),
          t(lang, "Bolsa EV 500 mg/100 mL", "Bolsa EV 500 mg/100 mL")
        ],
        dose: {
          pneumonia: dosePadrao,
          sinusite: t(lang, "500 mg VO 1x/dia", "500 mg VO 1 vez/día"),
          pielonefrite: t(lang, "750 mg VO/EV 1x/dia", "750 mg VO/EV 1 vez/día")
        },
        doseKg: {
          standard: t(lang, "Não utilizada rotineiramente em adultos.", "No utilizada rutinariamente en adultos.")
        },
        therapeuticRange: t(lang, "Concentração dependente (AUC/MIC).", "Concentración dependiente (AUC/MIC)."),
        dilution: t(lang, "Bolsa pronta para uso.", "Bolsa lista para uso."),
        speed: t(lang, "Infundir em 60–90 minutos.", "Infundir en 60–90 minutos."),
        commonAdverseEffects: [
          t(lang, "Náuseas", "Náuseas"),
          t(lang, "Diarreia", "Diarrea"),
          t(lang, "Insônia", "Insomnio"),
          t(lang, "Cefaleia", "Cefalea")
        ],
        dangerousAdverseEffects: [
          t(lang, "Ruptura de tendão", "Rotura tendinosa"),
          t(lang, "QT prolongado", "QT prolongado"),
          t(lang, "Hipoglicemia", "Hipoglucemia"),
          t(lang, "Dissecção de aorta", "Disección aórtica"),
          t(lang, "Convulsões", "Convulsiones")
        ],
        risksByPatient: [
          idade >= 60
            ? t(lang, "Alto risco de tendinopatia.", "Alto riesgo de tendinopatía.")
            : null,
          clcr < 50
            ? t(lang, "Necessita ajuste renal.", "Requiere ajuste renal.")
            : null,
          gestante
            ? t(lang, "Evitar durante gestação.", "Evitar durante embarazo.")
            : null,
          lactante
            ? t(lang, "Evitar durante lactação quando possível.", "Evitar durante lactancia cuando sea posible.")
            : null,
          qtLongo
            ? t(lang, "Evitar em pacientes com QT prolongado.", "Evitar en pacientes con QT prolongado.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Evitar uso concomitante com antiácidos.", "Evitar uso concomitante con antiácidos."),
          t(lang, "Suspender se ocorrer dor tendínea.", "Suspender si aparece dolor tendinoso.")
        ],
        ref: "Sanford Guide / Goodman & Gilman / FDA"
      };
    }
  },

  doxiciclina: {
    name: { pt: "Doxiciclina", es: "Doxiciclina" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const idade = Number(paciente.idade || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);

      return {
        name: t(lang, "Doxiciclina", "Doxiciclina"),
        class: t(lang, "Tetraciclina", "Tetraciclina"),
        commercialNames: {
          br: ["Vibramicina", "Doxiciclina EMS"],
          ar: ["Vibramicina", "Doxiciclina Bagó"]
        },
        presentation: [
          t(lang, "Comprimido 100 mg", "Comprimido 100 mg"),
          t(lang, "Cápsula 100 mg", "Cápsula 100 mg")
        ],
        dose: {
          adulto: t(lang, "100 mg VO 12/12h", "100 mg VO cada 12h"),
          dst: t(lang, "100 mg VO 12/12h por 7 dias", "100 mg VO cada 12h por 7 días"),
          lyme: t(lang, "100 mg VO 12/12h", "100 mg VO cada 12h")
        },
        doseKg: {
          pediatrica: t(lang, "2–4 mg/kg/dia", "2–4 mg/kg/día"),
          maxDose: t(lang, "200 mg/dia", "200 mg/día")
        },
        therapeuticRange: t(lang, "Boa biodisponibilidade oral.", "Buena biodisponibilidad oral."),
        dilution: t(lang, "Via oral.", "Vía oral."),
        speed: t(lang, "Administrar com água abundante.", "Administrar con abundante agua."),
        commonAdverseEffects: [
          t(lang, "Náuseas", "Náuseas"),
          t(lang, "Dispepsia", "Dispepsia"),
          t(lang, "Fotossensibilidade", "Fotosensibilidad")
        ],
        dangerousAdverseEffects: [
          t(lang, "Esofagite", "Esofagitis"),
          t(lang, "Hepatotoxicidade", "Hepatotoxicidad"),
          t(lang, "Hipertensão intracraniana", "Hipertensión intracraneal")
        ],
        risksByPatient: [
          idade < 8
            ? t(lang, "Evitar em crianças pequenas salvo indicações específicas.", "Evitar en niños pequeños salvo indicaciones específicas.")
            : null,
          gestante
            ? t(lang, "Contraindicada na gestação.", "Contraindicada en embarazo.")
            : null,
          lactante
            ? t(lang, "Usar com cautela durante lactação.", "Usar con precaución durante lactancia.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Não deitar por 30 minutos após tomar.", "No acostarse durante 30 minutos después de tomarla."),
          t(lang, "Evitar exposição solar excessiva.", "Evitar exposición solar excesiva."),
          t(lang, "Evitar associação com ferro, cálcio e antiácidos.", "Evitar asociación con hierro, calcio y antiácidos.")
        ],
        ref: "Sanford Guide / Goodman & Gilman / CDC STI Guidelines"
      };
    }
  }

});

Object.assign(window.ANTIMICROBIANOS_DRUGS_DB, {

  cefazolina: {
    name: { pt: "Cefazolina", es: "Cefazolina" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const peso = Number(paciente.peso || 0);
      const idade = Number(paciente.idade || 0);
      const clcr = Number(paciente.clcr || 100);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);

      const dosePedia = Math.min(peso * 33, 2000);
      const doseAdulto = clcr < 30
        ? t(lang, "Necessita ajuste renal.", "Requiere ajuste renal.")
        : t(lang, "1–2 g EV 8/8h", "1–2 g EV cada 8h");

      return {
        name: t(lang, "Cefazolina", "Cefazolina"),
        class: t(lang, "Cefalosporina de 1ª geração", "Cefalosporina de 1ª generación"),
        commercialNames: {
          br: ["Kefazol", "Cefazolina ABL", "Cefazolina Eurofarma"],
          ar: ["Cefazolina Richet", "Cefazolina Klonal", "Cefazolina genérica"]
        },
        presentation: [
          t(lang, "Frasco-ampola 500 mg", "Frasco ampolla 500 mg"),
          t(lang, "Frasco-ampola 1 g", "Frasco ampolla 1 g")
        ],
        dose: {
          adulto: doseAdulto,
          profilaxiaCirurgica: t(lang, "2 g EV 30–60 min antes da incisão; 3 g se peso ≥120 kg", "2 g EV 30–60 min antes de la incisión; 3 g si peso ≥120 kg"),
          pediatrica: t(lang, `${dosePedia.toFixed(0)} mg EV 8/8h`, `${dosePedia.toFixed(0)} mg EV cada 8h`)
        },
        doseKg: {
          standard: t(lang, "25–33 mg/kg por dose 8/8h", "25–33 mg/kg por dosis cada 8h"),
          profilaxiaPediatrica: t(lang, "30 mg/kg dose única antes da incisão", "30 mg/kg dosis única antes de la incisión"),
          maxDose: t(lang, "6 g/dia; até 12 g/dia em infecções graves selecionadas", "6 g/día; hasta 12 g/día en infecciones graves seleccionadas")
        },
        therapeuticRange: t(lang, "Beta-lactâmico dependente do tempo acima da MIC.", "Beta-lactámico dependiente del tiempo sobre la MIC."),
        dilution: t(lang, "Diluir em SF 0,9% ou SG5% conforme protocolo institucional.", "Diluir en SF 0,9% o SG5% según protocolo institucional."),
        speed: t(lang, "Infundir em 30 minutos; na profilaxia cirúrgica pode ser administrada lentamente conforme protocolo.", "Infundir en 30 minutos; en profilaxis quirúrgica puede administrarse lentamente según protocolo."),
        commonAdverseEffects: [
          t(lang, "Dor no local da aplicação", "Dolor en el sitio de aplicación"),
          t(lang, "Diarreia", "Diarrea"),
          t(lang, "Náuseas", "Náuseas"),
          t(lang, "Rash cutâneo", "Exantema cutáneo")
        ],
        dangerousAdverseEffects: [
          t(lang, "Anafilaxia", "Anafilaxia"),
          t(lang, "Colite por Clostridioides difficile", "Colitis por Clostridioides difficile"),
          t(lang, "Neutropenia em uso prolongado", "Neutropenia en uso prolongado"),
          t(lang, "Convulsões em insuficiência renal sem ajuste", "Convulsiones en insuficiencia renal sin ajuste")
        ],
        risksByPatient: [
          idade >= 65
            ? t(lang, "Idoso: avaliar função renal para evitar acúmulo.", "Adulto mayor: evaluar función renal para evitar acumulación.")
            : null,
          clcr < 30
            ? t(lang, "ClCr < 30 mL/min: ajuste renal obrigatório.", "ClCr < 30 mL/min: ajuste renal obligatorio.")
            : null,
          gestante
            ? t(lang, "Gestação: pode ser usada quando indicada.", "Embarazo: puede usarse cuando está indicada.")
            : null,
          lactante
            ? t(lang, "Lactação: geralmente compatível; observar diarreia ou candidíase no lactente.", "Lactancia: generalmente compatible; observar diarrea o candidiasis en el lactante.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Excelente opção para MSSA sensível e profilaxia cirúrgica.", "Excelente opción para MSSA sensible y profilaxis quirúrgica."),
          t(lang, "Não cobre MRSA, Enterococcus nem Pseudomonas.", "No cubre MRSA, Enterococcus ni Pseudomonas."),
          t(lang, "Investigar reação grave prévia a beta-lactâmicos.", "Investigar reacción grave previa a beta-lactámicos.")
        ],
        ref: "Goodman & Gilman / Sanford Guide / ASHP Surgical Prophylaxis Guidelines"
      };
    }
  },

  oxacilina: {
    name: { pt: "Oxacilina", es: "Oxacilina" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const peso = Number(paciente.peso || 0);
      const idade = Number(paciente.idade || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const hepatopatia = Boolean(paciente.hepatopatia);

      const dosePediaDia = Math.min(peso * 200, 12000);
      const dosePediaPorDose = dosePediaDia / 6;

      return {
        name: t(lang, "Oxacilina", "Oxacilina"),
        class: t(lang, "Penicilina antiestafilocócica resistente à penicilinase", "Penicilina antiestafilocócica resistente a penicilinasa"),
        commercialNames: {
          br: ["Staficilin-N", "Oxacilina Blau", "Oxacilina ABL"],
          ar: ["Oxacilina Richet", "Oxacilina Klonal", "Oxacilina genérica"]
        },
        presentation: [
          t(lang, "Frasco-ampola 500 mg", "Frasco ampolla 500 mg"),
          t(lang, "Frasco-ampola 1 g", "Frasco ampolla 1 g")
        ],
        dose: {
          adulto: t(lang, "1–2 g EV 4/4h", "1–2 g EV cada 4h"),
          infeccaoGraveMSSA: t(lang, "2 g EV 4/4h", "2 g EV cada 4h"),
          pediatrica: t(lang, `${dosePediaPorDose.toFixed(0)} mg EV 4/4h`, `${dosePediaPorDose.toFixed(0)} mg EV cada 4h`)
        },
        doseKg: {
          standard: t(lang, "100–200 mg/kg/dia dividido 4/4h ou 6/6h", "100–200 mg/kg/día dividido cada 4h o 6h"),
          maxDose: t(lang, "12 g/dia", "12 g/día")
        },
        therapeuticRange: t(lang, "Beta-lactâmico dependente do tempo acima da MIC.", "Beta-lactámico dependiente del tiempo sobre la MIC."),
        dilution: t(lang, "Diluir em SF 0,9% ou SG5% conforme protocolo institucional.", "Diluir en SF 0,9% o SG5% según protocolo institucional."),
        speed: t(lang, "Administrar EV lentamente ou infundir em 30–60 minutos conforme protocolo.", "Administrar EV lentamente o infundir en 30–60 minutos según protocolo."),
        commonAdverseEffects: [
          t(lang, "Flebite", "Flebitis"),
          t(lang, "Náuseas", "Náuseas"),
          t(lang, "Diarreia", "Diarrea"),
          t(lang, "Rash cutâneo", "Exantema cutáneo")
        ],
        dangerousAdverseEffects: [
          t(lang, "Anafilaxia", "Anafilaxia"),
          t(lang, "Hepatotoxicidade", "Hepatotoxicidad"),
          t(lang, "Nefrite intersticial", "Nefritis intersticial"),
          t(lang, "Neutropenia em uso prolongado", "Neutropenia en uso prolongado")
        ],
        risksByPatient: [
          idade >= 65
            ? t(lang, "Idoso: monitorar função hepática, renal e hemograma em uso prolongado.", "Adulto mayor: monitorar función hepática, renal y hemograma en uso prolongado.")
            : null,
          hepatopatia
            ? t(lang, "Hepatopatia: cautela; monitorar enzimas hepáticas.", "Hepatopatía: precaución; monitorar enzimas hepáticas.")
            : null,
          gestante
            ? t(lang, "Gestação: pode ser usada quando indicada.", "Embarazo: puede usarse cuando está indicada.")
            : null,
          lactante
            ? t(lang, "Lactação: geralmente compatível; observar diarreia ou candidíase no lactente.", "Lactancia: generalmente compatible; observar diarrea o candidiasis en el lactante.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Indicada para Staphylococcus aureus sensível à meticilina.", "Indicada para Staphylococcus aureus sensible a meticilina."),
          t(lang, "Não cobre MRSA.", "No cubre MRSA."),
          t(lang, "Monitorar hemograma e função hepática se uso prolongado.", "Monitorar hemograma y función hepática si uso prolongado.")
        ],
        ref: "Goodman & Gilman / Sanford Guide / IDSA SSTI and Endocarditis references"
      };
    }
  },

  cefalexina: {
    name: { pt: "Cefalexina", es: "Cefalexina" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const peso = Number(paciente.peso || 0);
      const idade = Number(paciente.idade || 0);
      const clcr = Number(paciente.clcr || 100);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);

      const dosePediaDia = Math.min(peso * 50, 4000);
      const dosePediaPorDose6h = dosePediaDia / 4;
      const dosePediaPorDose8h = dosePediaDia / 3;

      return {
        name: t(lang, "Cefalexina", "Cefalexina"),
        class: t(lang, "Cefalosporina de 1ª geração", "Cefalosporina de 1ª generación"),
        commercialNames: {
          br: ["Keflex", "Cefalexina EMS", "Cefalexina Medley"],
          ar: ["Keflex", "Cefalexina Richet", "Cefalexina genérica"]
        },
        presentation: [
          t(lang, "Cápsulas/comprimidos: 500 mg", "Cápsulas/comprimidos: 500 mg"),
          t(lang, "Suspensão oral: 250 mg/5 mL", "Suspensión oral: 250 mg/5 mL"),
          t(lang, "Suspensão oral: 500 mg/5 mL", "Suspensión oral: 500 mg/5 mL")
        ],
        dose: {
          adulto: t(lang, "500 mg VO 6/6h ou 1 g VO 8/8h", "500 mg VO cada 6h o 1 g VO cada 8h"),
          pediatrica6h: t(lang, `${dosePediaPorDose6h.toFixed(0)} mg VO 6/6h`, `${dosePediaPorDose6h.toFixed(0)} mg VO cada 6h`),
          pediatrica8h: t(lang, `${dosePediaPorDose8h.toFixed(0)} mg VO 8/8h`, `${dosePediaPorDose8h.toFixed(0)} mg VO cada 8h`)
        },
        doseKg: {
          standard: t(lang, "25–50 mg/kg/dia dividido 6/6h ou 8/8h", "25–50 mg/kg/día dividido cada 6h o 8h"),
          severe: t(lang, "75–100 mg/kg/dia em infecções mais graves, conforme protocolo", "75–100 mg/kg/día en infecciones más graves, según protocolo"),
          maxDose: t(lang, "4 g/dia", "4 g/día")
        },
        therapeuticRange: t(lang, "Beta-lactâmico dependente do tempo acima da MIC.", "Beta-lactámico dependiente del tiempo sobre la MIC."),
        dilution: t(lang, "Via oral. Suspensão deve ser reconstituída conforme bula e agitada antes do uso.", "Vía oral. La suspensión debe reconstituirse según prospecto y agitarse antes del uso."),
        speed: t(lang, "Administração por via oral.", "Administración por vía oral."),
        commonAdverseEffects: [
          t(lang, "Diarreia", "Diarrea"),
          t(lang, "Náuseas", "Náuseas"),
          t(lang, "Dor abdominal", "Dolor abdominal"),
          t(lang, "Rash cutâneo", "Exantema cutáneo")
        ],
        dangerousAdverseEffects: [
          t(lang, "Anafilaxia", "Anafilaxia"),
          t(lang, "Colite por Clostridioides difficile", "Colitis por Clostridioides difficile"),
          t(lang, "Síndrome de Stevens-Johnson", "Síndrome de Stevens-Johnson"),
          t(lang, "Convulsões em insuficiência renal sem ajuste", "Convulsiones en insuficiencia renal sin ajuste")
        ],
        risksByPatient: [
          idade >= 65
            ? t(lang, "Idoso: avaliar função renal para evitar acúmulo.", "Adulto mayor: evaluar función renal para evitar acumulación.")
            : null,
          clcr < 30
            ? t(lang, "ClCr < 30 mL/min: ajustar dose ou intervalo.", "ClCr < 30 mL/min: ajustar dosis o intervalo.")
            : null,
          gestante
            ? t(lang, "Gestação: pode ser usada quando indicada.", "Embarazo: puede usarse cuando está indicada.")
            : null,
          lactante
            ? t(lang, "Lactação: geralmente compatível; observar diarreia ou candidíase no lactente.", "Lactancia: generalmente compatible; observar diarrea o candidiasis en el lactante.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Boa opção oral para celulite não purulenta e infecções por estreptococos/MSSA sensível.", "Buena opción oral para celulitis no purulenta e infecciones por estreptococos/MSSA sensible."),
          t(lang, "Não cobre MRSA, Enterococcus nem Pseudomonas.", "No cubre MRSA, Enterococcus ni Pseudomonas."),
          t(lang, "Investigar alergia grave prévia a beta-lactâmicos.", "Investigar alergia grave previa a beta-lactámicos.")
        ],
        ref: "Goodman & Gilman / Sanford Guide / Lexicomp-style dosing references"
      };
    }
  },

  cefuroxima: {
    name: { pt: "Cefuroxima", es: "Cefuroxima" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const peso = Number(paciente.peso || 0);
      const idade = Number(paciente.idade || 0);
      const clcr = Number(paciente.clcr || 100);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);

      const dosePediaDia = Math.min(peso * 30, 1000);
      const dosePediaPorDose = dosePediaDia / 2;
      const doseAdulto = clcr < 30
        ? t(lang, "Necessita ajuste renal.", "Requiere ajuste renal.")
        : t(lang, "250–500 mg VO 12/12h", "250–500 mg VO cada 12h");

      return {
        name: t(lang, "Cefuroxima", "Cefuroxima"),
        class: t(lang, "Cefalosporina de 2ª geração", "Cefalosporina de 2ª generación"),
        commercialNames: {
          br: ["Zinnat", "Cefuroxima Sandoz", "Cefuroxima genérica"],
          ar: ["Zinnat", "Cefuroxima Richet", "Cefuroxima genérica"]
        },
        presentation: [
          t(lang, "Comprimidos: 250 mg, 500 mg", "Comprimidos: 250 mg, 500 mg"),
          t(lang, "Suspensão oral: 250 mg/5 mL", "Suspensión oral: 250 mg/5 mL"),
          t(lang, "Frasco-ampola EV/IM: 750 mg, 1,5 g", "Frasco ampolla EV/IM: 750 mg, 1,5 g")
        ],
        dose: {
          adultoVO: doseAdulto,
          adultoEV: t(lang, "750 mg EV/IM 8/8h; infecção grave: 1,5 g EV 8/8h", "750 mg EV/IM cada 8h; infección grave: 1,5 g EV cada 8h"),
          pediatricaVO: t(lang, `${dosePediaPorDose.toFixed(0)} mg VO 12/12h`, `${dosePediaPorDose.toFixed(0)} mg VO cada 12h`)
        },
        doseKg: {
          standardVO: t(lang, "20–30 mg/kg/dia VO dividido 12/12h", "20–30 mg/kg/día VO dividido cada 12h"),
          standardEV: t(lang, "50–100 mg/kg/dia EV dividido 8/8h", "50–100 mg/kg/día EV dividido cada 8h"),
          maxDose: t(lang, "VO: 1 g/dia; EV: até 6 g/dia em infecções graves", "VO: 1 g/día; EV: hasta 6 g/día en infecciones graves")
        },
        therapeuticRange: t(lang, "Beta-lactâmico dependente do tempo acima da MIC.", "Beta-lactámico dependiente del tiempo sobre la MIC."),
        dilution: t(lang, "VO: não necessita diluição. EV: reconstituir e diluir conforme protocolo institucional.", "VO: no requiere dilución. EV: reconstituir y diluir según protocolo institucional."),
        speed: t(lang, "VO: administrar preferencialmente após alimento. EV: infundir em aproximadamente 30 minutos.", "VO: administrar preferentemente después de comida. EV: infundir en aproximadamente 30 minutos."),
        commonAdverseEffects: [
          t(lang, "Diarreia", "Diarrea"),
          t(lang, "Náuseas", "Náuseas"),
          t(lang, "Dor abdominal", "Dolor abdominal"),
          t(lang, "Rash cutâneo", "Exantema cutáneo")
        ],
        dangerousAdverseEffects: [
          t(lang, "Anafilaxia", "Anafilaxia"),
          t(lang, "Colite por Clostridioides difficile", "Colitis por Clostridioides difficile"),
          t(lang, "Síndrome de Stevens-Johnson", "Síndrome de Stevens-Johnson"),
          t(lang, "Convulsões em insuficiência renal sem ajuste", "Convulsiones en insuficiencia renal sin ajuste")
        ],
        risksByPatient: [
          idade >= 65
            ? t(lang, "Idoso: avaliar função renal antes de dose plena.", "Adulto mayor: evaluar función renal antes de dosis plena.")
            : null,
          clcr < 30
            ? t(lang, "ClCr < 30 mL/min: ajuste renal recomendado.", "ClCr < 30 mL/min: ajuste renal recomendado.")
            : null,
          gestante
            ? t(lang, "Gestação: pode ser usada quando indicada.", "Embarazo: puede usarse cuando está indicada.")
            : null,
          lactante
            ? t(lang, "Lactação: geralmente compatível; observar diarreia ou candidíase no lactente.", "Lactancia: generalmente compatible; observar diarrea o candidiasis en el lactante.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Útil para infecções respiratórias, otite, sinusite e algumas infecções urinárias conforme sensibilidade.", "Útil para infecciones respiratorias, otitis, sinusitis y algunas infecciones urinarias según sensibilidad."),
          t(lang, "Não cobre MRSA, Enterococcus nem Pseudomonas.", "No cubre MRSA, Enterococcus ni Pseudomonas."),
          t(lang, "A formulação oral tem melhor absorção quando administrada após alimento.", "La formulación oral tiene mejor absorción cuando se administra después de comida.")
        ],
        ref: "Goodman & Gilman / Sanford Guide / Lexicomp-style dosing references"
      };
    }
  },

  ceftazidima: {
    name: { pt: "Ceftazidima", es: "Ceftazidima" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const peso = Number(paciente.peso || 0);
      const idade = Number(paciente.idade || 0);
      const clcr = Number(paciente.clcr || 100);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);

      const dosePedia = Math.min(peso * 50, 2000);
      const doseAdulto = clcr < 50
        ? t(lang, "Necessita ajuste renal.", "Requiere ajuste renal.")
        : t(lang, "2 g EV 8/8h", "2 g EV cada 8h");

      return {
        name: t(lang, "Ceftazidima", "Ceftazidima"),
        class: t(lang, "Cefalosporina de 3ª geração antipseudomonas", "Cefalosporina de 3ª generación antipseudomona"),
        commercialNames: {
          br: ["Fortaz", "Ceftazidima Eurofarma", "Ceftazidima ABL"],
          ar: ["Fortum", "Ceftazidima Richet", "Ceftazidima Klonal"]
        },
        presentation: [
          t(lang, "Frasco-ampola 500 mg", "Frasco ampolla 500 mg"),
          t(lang, "Frasco-ampola 1 g", "Frasco ampolla 1 g"),
          t(lang, "Frasco-ampola 2 g", "Frasco ampolla 2 g")
        ],
        dose: {
          adulto: doseAdulto,
          neutropeniaFebril: t(lang, "2 g EV 8/8h", "2 g EV cada 8h"),
          pediatrica: t(lang, `${dosePedia.toFixed(0)} mg EV 8/8h`, `${dosePedia.toFixed(0)} mg EV cada 8h`)
        },
        doseKg: {
          standard: t(lang, "30–50 mg/kg por dose", "30–50 mg/kg por dosis"),
          maxDose: t(lang, "6 g/dia", "6 g/día")
        },
        therapeuticRange: t(lang, "Beta-lactâmico dependente do tempo acima da MIC.", "Beta-lactámico dependiente del tiempo sobre la MIC."),
        dilution: t(lang, "Diluir conforme protocolo institucional.", "Diluir según protocolo institucional."),
        speed: t(lang, "Infundir em aproximadamente 30 minutos.", "Infundir en aproximadamente 30 minutos."),
        commonAdverseEffects: [
          t(lang, "Diarreia", "Diarrea"),
          t(lang, "Náuseas", "Náuseas"),
          t(lang, "Rash", "Exantema")
        ],
        dangerousAdverseEffects: [
          t(lang, "Anafilaxia", "Anafilaxia"),
          t(lang, "Neurotoxicidade", "Neurotoxicidad"),
          t(lang, "Convulsões", "Convulsiones"),
          t(lang, "Colite por C. difficile", "Colitis por C. difficile")
        ],
        risksByPatient: [
          idade >= 65
            ? t(lang, "Maior risco de neurotoxicidade.", "Mayor riesgo de neurotoxicidad.")
            : null,
          clcr < 50
            ? t(lang, "Ajuste renal obrigatório.", "Ajuste renal obligatorio.")
            : null,
          gestante
            ? t(lang, "Pode ser utilizada quando indicada.", "Puede utilizarse cuando está indicada.")
            : null,
          lactante
            ? t(lang, "Compatível com lactação.", "Compatible con lactancia.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Cobertura para Pseudomonas aeruginosa.", "Cobertura para Pseudomonas aeruginosa."),
          t(lang, "Não possui boa cobertura para Gram positivos comparada ao Cefepime.", "No posee buena cobertura para Gram positivos comparada con Cefepime.")
        ],
        ref: "Sanford Guide 2025 / Goodman & Gilman"
      };
    }
  },

  cefotaxima: {
    name: { pt: "Cefotaxima", es: "Cefotaxima" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const peso = Number(paciente.peso || 0);
      const idade = Number(paciente.idade || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);

      const dosePedia = Math.min(peso * 50, 2000);

      return {
        name: t(lang, "Cefotaxima", "Cefotaxima"),
        class: t(lang, "Cefalosporina de 3ª geração", "Cefalosporina de 3ª generación"),
        commercialNames: {
          br: ["Claforan", "Cefotaxima Eurofarma"],
          ar: ["Claforan", "Cefotaxima Richet"]
        },
        presentation: [
          t(lang, "Frasco-ampola 500 mg", "Frasco ampolla 500 mg"),
          t(lang, "Frasco-ampola 1 g", "Frasco ampolla 1 g"),
          t(lang, "Frasco-ampola 2 g", "Frasco ampolla 2 g")
        ],
        dose: {
          adulto: t(lang, "1–2 g EV 6/6h a 8/8h", "1–2 g EV cada 6h a 8h"),
          meningite: t(lang, "2 g EV 4/4h a 6/6h", "2 g EV cada 4h a 6h"),
          pediatrica: t(lang, `${dosePedia.toFixed(0)} mg EV 6/6h`, `${dosePedia.toFixed(0)} mg EV cada 6h`)
        },
        doseKg: {
          standard: t(lang, "100–150 mg/kg/dia", "100–150 mg/kg/día"),
          meningite: t(lang, "200–300 mg/kg/dia", "200–300 mg/kg/día"),
          maxDose: t(lang, "12 g/dia", "12 g/día")
        },
        therapeuticRange: t(lang, "Excelente penetração no SNC.", "Excelente penetración en SNC."),
        dilution: t(lang, "Diluir conforme protocolo institucional.", "Diluir según protocolo institucional."),
        speed: t(lang, "Infusão em aproximadamente 30 minutos.", "Infusión en aproximadamente 30 minutos."),
        commonAdverseEffects: [
          t(lang, "Náuseas", "Náuseas"),
          t(lang, "Diarreia", "Diarrea"),
          t(lang, "Rash", "Exantema")
        ],
        dangerousAdverseEffects: [
          t(lang, "Anafilaxia", "Anafilaxia"),
          t(lang, "Neutropenia", "Neutropenia"),
          t(lang, "Colite por C. difficile", "Colitis por C. difficile")
        ],
        risksByPatient: [
          idade < 1
            ? t(lang, "Amplamente utilizada em neonatologia e pediatria.", "Ampliamente utilizada en neonatología y pediatría.")
            : null,
          gestante
            ? t(lang, "Pode ser utilizada quando indicada.", "Puede utilizarse cuando está indicada.")
            : null,
          lactante
            ? t(lang, "Compatível com lactação.", "Compatible con lactancia.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Excelente opção para meningite bacteriana.", "Excelente opción para meningitis bacteriana."),
          t(lang, "Alternativa à Ceftriaxona em neonatos.", "Alternativa a Ceftriaxona en neonatos.")
        ],
        ref: "Sanford Guide 2025 / Nelson Pediatrics / Goodman & Gilman"
      };
    }
  }

});

})(); /* fim da IIFE do módulo antimicrobianos */
