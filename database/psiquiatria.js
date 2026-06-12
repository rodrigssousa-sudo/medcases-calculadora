/* ============================================================
   MedCases Pro — Módulo: PSICOFÁRMACOS
   Expõe: window.PSICOFARMACOS_DRUGS_DB
   Schema: PREMIUM_DRUGS_DB — calculate(paciente, lang)
============================================================ */

(function(){

  /* Helper bilíngue — escopo local, não vaza para o global */
  const t = (lang, pt, es) => lang === "pt" ? pt : es;

  window.PSICOFARMACOS_DRUGS_DB = {};

  Object.assign(window.PSICOFARMACOS_DRUGS_DB, {

    fluoxetina: {
      name: { pt: "Fluoxetina", es: "Fluoxetina" },
      category: "antidepressivo",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = clcr < 60;

        return {
          name: t(lang, "Fluoxetina", "Fluoxetina"),
          class: t(lang, "Antidepressivo ISRS", "Antidepresivo ISRS"),
          category: "antidepressivo",
          commercialNames: {
            br: ["Prozac", "Daforin", "Fluxene", "Verotina"],
            ar: ["Prozac", "Foxetin", "Fluoxetina Lazar", "Fluoxetina Northia"]
          },
          presentation: [
            t(lang, "Cápsula/comprimido 20 mg", "Cápsula/comprimido 20 mg"),
            t(lang, "Comprimido 10 mg", "Comprimido 10 mg"),
            t(lang, "Solução oral 20 mg/5 mL", "Solución oral 20 mg/5 mL")
          ],
          dose: {
            adulto: t(lang, "Depressão: iniciar 20 mg VO pela manhã; usual 20–60 mg/dia.", "Depresión: iniciar 20 mg VO por la mañana; habitual 20–60 mg/día."),
            ansiedadeTocPanico: t(lang, "TOC/pânico/ansiedade: iniciar 10–20 mg/dia; titular conforme resposta.", "TOC/pánico/ansiedad: iniciar 10–20 mg/día; titular según respuesta."),
            bulimia: t(lang, "Bulimia nervosa: 60 mg VO 1x/dia.", "Bulimia nerviosa: 60 mg VO 1 vez/día."),
            maxDose: t(lang, "Dose máxima usual: 80 mg/dia.", "Dosis máxima habitual: 80 mg/día.")
          },
          doseKg: {
            standard: t(lang, "Não se utiliza cálculo rotineiro por kg em adultos.", "No se utiliza cálculo rutinario por kg en adultos."),
            pediatric: t(lang, "Pediatria: uso especializado; iniciar geralmente 5–10 mg/dia conforme indicação.", "Pediatría: uso especializado; iniciar generalmente 5–10 mg/día según indicación."),
            maxDose: t(lang, "80 mg/dia", "80 mg/día")
          },
          renalAdjustment: insuficienciaRenal
            ? t(lang, "Geralmente não requer ajuste renal, mas monitorar tolerabilidade em insuficiência renal importante.", "Generalmente no requiere ajuste renal, pero monitorizar tolerabilidad en insuficiencia renal importante.")
            : t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia
            ? t(lang, "Hepatopatia/cirrose: considerar dose menor ou administração em dias alternados.", "Hepatopatía/cirrosis: considerar dosis menor o administración en días alternos.")
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Inibe seletivamente a recaptação de serotonina, aumentando serotonina na fenda sináptica.", "Inhibe selectivamente la recaptación de serotonina, aumentando serotonina en la hendidura sináptica."),
          onset: t(lang, "Início de efeito clínico geralmente em 2–4 semanas; resposta plena pode levar 6–8 semanas.", "Inicio de efecto clínico generalmente en 2–4 semanas; respuesta plena puede tardar 6–8 semanas."),
          halfLife: t(lang, "Vida média longa: fluoxetina 4–6 dias; norfluoxetina 4–16 dias.", "Vida media larga: fluoxetina 4–6 días; norfluoxetina 4–16 días."),
          commonAdverseEffects: [
            t(lang, "Náuseas", "Náuseas"),
            t(lang, "Insônia", "Insomnio"),
            t(lang, "Cefaleia", "Cefalea"),
            t(lang, "Diarreia", "Diarrea"),
            t(lang, "Disfunção sexual", "Disfunción sexual"),
            t(lang, "Ansiedade inicial/agitação", "Ansiedad inicial/agitación")
          ],
          dangerousAdverseEffects: [
            t(lang, "Síndrome serotoninérgica", "Síndrome serotoninérgico"),
            t(lang, "Ideação suicida em jovens no início do tratamento", "Ideación suicida en jóvenes al inicio del tratamiento"),
            t(lang, "Virada maníaca/hipomaníaca", "Viraje maníaco/hipomaníaco"),
            t(lang, "Hiponatremia/SIADH", "Hiponatremia/SIADH"),
            t(lang, "Sangramentos, especialmente com AINEs/anticoagulantes", "Sangrados, especialmente con AINEs/anticoagulantes")
          ],
          risksByPatient: [
            idade < 25
              ? t(lang, "Jovem: monitorar piora clínica e ideação suicida no início.", "Joven: monitorizar empeoramiento clínico e ideación suicida al inicio.")
              : null,
            idade >= 65
              ? t(lang, "Idoso: maior risco de hiponatremia, quedas e interações.", "Adulto mayor: mayor riesgo de hiponatremia, caídas e interacciones.")
              : null,
            gestante
              ? t(lang, "Gestação: avaliar risco-benefício; atenção a sintomas neonatais se usado no fim da gestação.", "Embarazo: evaluar riesgo-beneficio; atención a síntomas neonatales si se usa al final del embarazo.")
              : null,
            lactante
              ? t(lang, "Lactação: passa ao leite; preferir avaliação individual e monitorar lactente.", "Lactancia: pasa a la leche; preferir evaluación individual y monitorizar lactante.")
              : null,
            hepatopatia
              ? t(lang, "Hepatopatia: reduzir dose ou aumentar intervalo.", "Hepatopatía: reducir dosis o aumentar intervalo.")
              : null,
            insuficienciaRenal
              ? t(lang, "Insuficiência renal: geralmente sem ajuste, mas monitorar eventos adversos.", "Insuficiencia renal: generalmente sin ajuste, pero monitorizar eventos adversos.")
              : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade à fluoxetina", "Hipersensibilidad a fluoxetina"),
            t(lang, "Uso concomitante com IMAO", "Uso concomitante con IMAO"),
            t(lang, "Uso com pimozida ou tioridazina", "Uso con pimozida o tioridazina"),
            t(lang, "Transtorno bipolar sem estabilizador do humor", "Trastorno bipolar sin estabilizador del ánimo")
          ],
          interactions: [
            t(lang, "IMAO: risco de síndrome serotoninérgica", "IMAO: riesgo de síndrome serotoninérgico"),
            t(lang, "Tramadol, linezolida, triptanos, lítio: risco serotoninérgico", "Tramadol, linezolid, triptanes, litio: riesgo serotoninérgico"),
            t(lang, "AINEs, AAS, anticoagulantes: maior risco de sangramento", "AINEs, AAS, anticoagulantes: mayor riesgo de sangrado"),
            t(lang, "Inibe CYP2D6: pode aumentar níveis de antipsicóticos, tricíclicos e betabloqueadores", "Inhibe CYP2D6: puede aumentar niveles de antipsicóticos, tricíclicos y betabloqueantes")
          ],
          alerts: [
            t(lang, "Não suspender abruptamente, embora tenha menor risco de retirada pela meia-vida longa.", "No suspender abruptamente, aunque tiene menor riesgo de retirada por su vida media larga."),
            t(lang, "Investigar história de mania/hipomania antes de iniciar.", "Investigar historia de manía/hipomanía antes de iniciar."),
            t(lang, "Evitar associação com IMAO.", "Evitar asociación con IMAO."),
            t(lang, "Monitorar sódio em idosos ou pacientes com diuréticos.", "Monitorizar sodio en adultos mayores o pacientes con diuréticos.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Fluoxetine Prescribing Information",
            "AEMPS CIMA Fluoxetina Ficha Técnica",
            "Lexicomp", "Micromedex", "UpToDate"
          ]
        };
      }
    },

    sertralina: {
      name: { pt: "Sertralina", es: "Sertralina" },
      category: "antidepressivo",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = clcr < 60;

        return {
          name: t(lang, "Sertralina", "Sertralina"),
          class: t(lang, "Antidepressivo ISRS", "Antidepresivo ISRS"),
          category: "antidepressivo",
          commercialNames: {
            br: ["Zoloft", "Assert", "Tolrest", "Serenata"],
            ar: ["Zoloft", "Asertral", "Sertralina Bagó", "Sertralina Northia"]
          },
          presentation: [
            t(lang, "Comprimido 25 mg", "Comprimido 25 mg"),
            t(lang, "Comprimido 50 mg", "Comprimido 50 mg"),
            t(lang, "Comprimido 100 mg", "Comprimido 100 mg"),
            t(lang, "Solução oral 20 mg/mL", "Solución oral 20 mg/mL")
          ],
          dose: {
            adulto: t(lang, "Depressão/TOC: iniciar 50 mg VO 1x/dia; titular semanalmente conforme resposta.", "Depresión/TOC: iniciar 50 mg VO 1 vez/día; titular semanalmente según respuesta."),
            panicoPtsdAnsiedadeSocial: t(lang, "Pânico/TEPT/ansiedade social: iniciar 25 mg VO 1x/dia por 1 semana; depois 50 mg/dia.", "Pánico/TEPT/ansiedad social: iniciar 25 mg VO 1 vez/día por 1 semana; luego 50 mg/día."),
            maxDose: t(lang, "Dose máxima usual: 200 mg/dia.", "Dosis máxima habitual: 200 mg/día.")
          },
          doseKg: {
            standard: t(lang, "Não se utiliza cálculo rotineiro por kg em adultos.", "No se utiliza cálculo rutinario por kg en adultos."),
            pediatric: t(lang, "Pediatria/TOC: uso especializado; iniciar geralmente 25–50 mg/dia conforme idade e indicação.", "Pediatría/TOC: uso especializado; iniciar generalmente 25–50 mg/día según edad e indicación."),
            maxDose: t(lang, "200 mg/dia", "200 mg/día")
          },
          renalAdjustment: insuficienciaRenal
            ? t(lang, "Não requer ajuste renal habitual, inclusive em insuficiência renal; monitorar tolerabilidade.", "No requiere ajuste renal habitual, incluso en insuficiencia renal; monitorizar tolerabilidad.")
            : t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia
            ? t(lang, "Hepatopatia leve: usar metade da dose ou aumentar intervalo. Evitar em hepatopatia moderada/grave.", "Hepatopatía leve: usar mitad de dosis o aumentar intervalo. Evitar en hepatopatía moderada/grave.")
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Inibe seletivamente a recaptação de serotonina, aumentando serotonina na fenda sináptica.", "Inhibe selectivamente la recaptación de serotonina, aumentando serotonina en la hendidura sináptica."),
          onset: t(lang, "Início de efeito clínico geralmente em 2–4 semanas; resposta plena pode levar 6–8 semanas.", "Inicio de efecto clínico generalmente en 2–4 semanas; respuesta plena puede tardar 6–8 semanas."),
          halfLife: t(lang, "Vida média aproximada: 26 horas.", "Vida media aproximada: 26 horas."),
          commonAdverseEffects: [
            t(lang, "Náuseas", "Náuseas"),
            t(lang, "Diarreia", "Diarrea"),
            t(lang, "Insônia ou sonolência", "Insomnio o somnolencia"),
            t(lang, "Tremor", "Temblor"),
            t(lang, "Sudorese", "Sudoración"),
            t(lang, "Disfunção sexual", "Disfunción sexual")
          ],
          dangerousAdverseEffects: [
            t(lang, "Síndrome serotoninérgica", "Síndrome serotoninérgico"),
            t(lang, "Ideação suicida em jovens no início do tratamento", "Ideación suicida en jóvenes al inicio del tratamiento"),
            t(lang, "Virada maníaca/hipomaníaca", "Viraje maníaco/hipomaníaco"),
            t(lang, "Hiponatremia/SIADH", "Hiponatremia/SIADH"),
            t(lang, "Aumento do risco de sangramento", "Aumento del riesgo de sangrado"),
            t(lang, "Convulsões em predispostos", "Convulsiones en predispuestos")
          ],
          risksByPatient: [
            idade < 25
              ? t(lang, "Jovem: monitorar ideação suicida no início e após ajustes de dose.", "Joven: monitorizar ideación suicida al inicio y tras ajustes de dosis.")
              : null,
            idade >= 65
              ? t(lang, "Idoso: maior risco de hiponatremia, quedas e sangramento.", "Adulto mayor: mayor riesgo de hiponatremia, caídas y sangrado.")
              : null,
            gestante
              ? t(lang, "Gestação: avaliar risco-benefício; pode haver sintomas neonatais se usado no fim da gestação.", "Embarazo: evaluar riesgo-beneficio; puede haber síntomas neonatales si se usa al final del embarazo.")
              : null,
            lactante
              ? t(lang, "Lactação: geralmente apresenta baixos níveis no leite; monitorar lactente.", "Lactancia: generalmente presenta bajos niveles en leche; monitorizar lactante.")
              : null,
            hepatopatia
              ? t(lang, "Hepatopatia: reduzir dose; evitar em comprometimento moderado/grave.", "Hepatopatía: reducir dosis; evitar en compromiso moderado/grave.")
              : null,
            insuficienciaRenal
              ? t(lang, "Insuficiência renal: sem ajuste habitual.", "Insuficiencia renal: sin ajuste habitual.")
              : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade à sertralina", "Hipersensibilidad a sertralina"),
            t(lang, "Uso concomitante com IMAO", "Uso concomitante con IMAO"),
            t(lang, "Uso concomitante com pimozida", "Uso concomitante con pimozida"),
            t(lang, "Transtorno bipolar sem estabilizador do humor", "Trastorno bipolar sin estabilizador del ánimo")
          ],
          interactions: [
            t(lang, "IMAO: risco de síndrome serotoninérgica", "IMAO: riesgo de síndrome serotoninérgico"),
            t(lang, "Tramadol, linezolida, triptanos, lítio: risco serotoninérgico", "Tramadol, linezolid, triptanes, litio: riesgo serotoninérgico"),
            t(lang, "AINEs, AAS, anticoagulantes: maior risco de sangramento", "AINEs, AAS, anticoagulantes: mayor riesgo de sangrado"),
            t(lang, "Álcool e depressores do SNC: podem piorar sedação e coordenação", "Alcohol y depresores del SNC: pueden empeorar sedación y coordinación")
          ],
          alerts: [
            t(lang, "Investigar transtorno bipolar antes de iniciar.", "Investigar trastorno bipolar antes de iniciar."),
            t(lang, "Evitar associação com IMAO.", "Evitar asociación con IMAO."),
            t(lang, "Monitorar piora clínica e ideação suicida em jovens.", "Monitorizar empeoramiento clínico e ideación suicida en jóvenes."),
            t(lang, "Monitorar sódio em idosos, usuários de diuréticos ou pacientes frágeis.", "Monitorizar sodio en adultos mayores, usuarios de diuréticos o pacientes frágiles.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Sertraline Prescribing Information",
            "Lexicomp", "Micromedex", "UpToDate"
          ]
        };
      }
    }

  });

  Object.assign(window.PSICOFARMACOS_DRUGS_DB, {

    escitalopram: {
      name: { pt: "Escitalopram", es: "Escitalopram" },
      category: "antidepressivo",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = clcr < 60;

        return {
          name: t(lang, "Escitalopram", "Escitalopram"),
          class: t(lang, "Antidepressivo ISRS", "Antidepresivo ISRS"),
          category: "antidepressivo",
          commercialNames: {
            br: ["Lexapro", "Exodus", "Reconter", "Esc"],
            ar: ["Lexapro", "Meridian", "Ipran", "Escitalopram Bagó"]
          },
          presentation: [
            t(lang, "Comprimido 5 mg", "Comprimido 5 mg"),
            t(lang, "Comprimido 10 mg", "Comprimido 10 mg"),
            t(lang, "Comprimido 15 mg", "Comprimido 15 mg"),
            t(lang, "Comprimido 20 mg", "Comprimido 20 mg"),
            t(lang, "Solução oral 20 mg/mL", "Solución oral 20 mg/mL")
          ],
          dose: {
            adulto: t(lang, "Iniciar 10 mg VO 1x/dia; usual 10–20 mg/dia.", "Iniciar 10 mg VO 1 vez/día; habitual 10–20 mg/día."),
            idoso: t(lang, "Idosos: iniciar 5 mg/dia; dose usual 5–10 mg/dia.", "Adultos mayores: iniciar 5 mg/día; dosis habitual 5–10 mg/día."),
            maxDose: t(lang, "Dose máxima usual: 20 mg/dia.", "Dosis máxima habitual: 20 mg/día.")
          },
          doseKg: {
            standard: t(lang, "Não se utiliza cálculo rotineiro por kg em adultos.", "No se utiliza cálculo rutinario por kg en adultos."),
            pediatric: t(lang, "Adolescentes: uso especializado; geralmente iniciar 5–10 mg/dia conforme indicação.", "Adolescentes: uso especializado; generalmente iniciar 5–10 mg/día según indicación."),
            maxDose: t(lang, "20 mg/dia", "20 mg/día")
          },
          indications: [
            t(lang, "Transtorno depressivo maior", "Trastorno depresivo mayor"),
            t(lang, "Transtorno de ansiedade generalizada", "Trastorno de ansiedad generalizada"),
            t(lang, "Transtorno do pânico", "Trastorno de pánico"),
            t(lang, "Transtorno de ansiedade social", "Trastorno de ansiedad social"),
            t(lang, "Transtorno obsessivo-compulsivo", "Trastorno obsesivo-compulsivo"),
            t(lang, "Transtorno disfórico pré-menstrual", "Trastorno disfórico premenstrual")
          ],
          renalAdjustment: insuficienciaRenal
            ? t(lang, "Geralmente não requer ajuste renal; usar cautela em insuficiência renal grave.", "Generalmente no requiere ajuste renal; usar con cautela en insuficiencia renal grave.")
            : t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia
            ? t(lang, "Hepatopatia: iniciar com 5 mg/dia; dose máxima recomendada geralmente 10 mg/dia.", "Hepatopatía: iniciar con 5 mg/día; dosis máxima recomendada generalmente 10 mg/día.")
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Inibe seletivamente a recaptação de serotonina, aumentando serotonina na fenda sináptica.", "Inhibe selectivamente la recaptación de serotonina, aumentando serotonina en la hendidura sináptica."),
          onset: t(lang, "Início de efeito clínico geralmente em 2–4 semanas; resposta plena pode levar 6–8 semanas.", "Inicio de efecto clínico generalmente en 2–4 semanas; respuesta plena puede tardar 6–8 semanas."),
          halfLife: t(lang, "Vida média aproximada: 27–32 horas.", "Vida media aproximada: 27–32 horas."),
          commonAdverseEffects: [
            t(lang, "Náuseas", "Náuseas"),
            t(lang, "Cefaleia", "Cefalea"),
            t(lang, "Insônia", "Insomnio"),
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Boca seca", "Boca seca"),
            t(lang, "Disfunção sexual", "Disfunción sexual")
          ],
          dangerousAdverseEffects: [
            t(lang, "Síndrome serotoninérgica", "Síndrome serotoninérgico"),
            t(lang, "Prolongamento do intervalo QT", "Prolongación del intervalo QT"),
            t(lang, "Ideação suicida em jovens no início do tratamento", "Ideación suicida en jóvenes al inicio del tratamiento"),
            t(lang, "Virada maníaca/hipomaníaca", "Viraje maníaco/hipomaníaco"),
            t(lang, "Hiponatremia/SIADH", "Hiponatremia/SIADH"),
            t(lang, "Sangramentos com AINEs/anticoagulantes", "Sangrados con AINEs/anticoagulantes")
          ],
          risksByPatient: [
            idade < 25
              ? t(lang, "Jovem: monitorar ideação suicida no início e após aumento de dose.", "Joven: monitorizar ideación suicida al inicio y después de aumentar dosis.")
              : null,
            idade >= 65
              ? t(lang, "Idoso: maior risco de hiponatremia, quedas e QT prolongado.", "Adulto mayor: mayor riesgo de hiponatremia, caídas y QT prolongado.")
              : null,
            gestante
              ? t(lang, "Gestação: avaliar risco-benefício; atenção a sintomas neonatais no fim da gestação.", "Embarazo: evaluar riesgo-beneficio; atención a síntomas neonatales al final del embarazo.")
              : null,
            lactante
              ? t(lang, "Lactação: monitorar lactente para irritabilidade, sonolência ou dificuldade alimentar.", "Lactancia: monitorizar lactante por irritabilidad, somnolencia o dificultad alimentaria.")
              : null,
            hepatopatia
              ? t(lang, "Hepatopatia: reduzir dose e monitorar tolerabilidade.", "Hepatopatía: reducir dosis y monitorizar tolerabilidad.")
              : null,
            insuficienciaRenal
              ? t(lang, "Insuficiência renal: cautela se ClCr muito reduzido.", "Insuficiencia renal: cautela si ClCr muy reducido.")
              : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade ao escitalopram", "Hipersensibilidad al escitalopram"),
            t(lang, "Uso concomitante com IMAO", "Uso concomitante con IMAO"),
            t(lang, "Uso com pimozida", "Uso con pimozida"),
            t(lang, "Síndrome do QT longo congênito ou QT prolongado significativo", "Síndrome de QT largo congénito o QT prolongado significativo"),
            t(lang, "Transtorno bipolar sem estabilizador do humor", "Trastorno bipolar sin estabilizador del ánimo")
          ],
          interactions: [
            t(lang, "IMAO: risco de síndrome serotoninérgica", "IMAO: riesgo de síndrome serotoninérgico"),
            t(lang, "Tramadol, linezolida, triptanos, lítio: risco serotoninérgico", "Tramadol, linezolid, triptanes, litio: riesgo serotoninérgico"),
            t(lang, "AINEs, AAS, anticoagulantes: maior risco de sangramento", "AINEs, AAS, anticoagulantes: mayor riesgo de sangrado"),
            t(lang, "Antiarrítmicos e outros fármacos que prolongam QT: maior risco arrítmico", "Antiarrítmicos y otros fármacos que prolongan QT: mayor riesgo arrítmico"),
            t(lang, "Álcool e depressores do SNC: podem piorar sedação", "Alcohol y depresores del SNC: pueden empeorar sedación")
          ],
          alerts: [
            t(lang, "Investigar história de mania/hipomania antes de iniciar.", "Investigar historia de manía/hipomanía antes de iniciar."),
            t(lang, "Evitar associação com IMAO.", "Evitar asociación con IMAO."),
            t(lang, "Cuidado com QT prolongado, hipocalemia, hipomagnesemia ou cardiopatia.", "Cuidado con QT prolongado, hipopotasemia, hipomagnesemia o cardiopatía."),
            t(lang, "Monitorar sódio em idosos ou usuários de diuréticos.", "Monitorizar sodio en adultos mayores o usuarios de diuréticos."),
            t(lang, "Não suspender abruptamente; reduzir gradualmente.", "No suspender abruptamente; reducir gradualmente.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Escitalopram Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    citalopram: {
      name: { pt: "Citalopram", es: "Citalopram" },
      category: "antidepressivo",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = clcr < 60;

        return {
          name: t(lang, "Citalopram", "Citalopram"),
          class: t(lang, "Antidepressivo ISRS", "Antidepresivo ISRS"),
          category: "antidepressivo",
          commercialNames: {
            br: ["Cipramil", "Procimax", "Città", "Citalor"],
            ar: ["Cipramil", "Humorap", "Zentius", "Citalopram Northia"]
          },
          presentation: [
            t(lang, "Comprimido 10 mg", "Comprimido 10 mg"),
            t(lang, "Comprimido 20 mg", "Comprimido 20 mg"),
            t(lang, "Comprimido 40 mg", "Comprimido 40 mg"),
            t(lang, "Solução oral 40 mg/mL", "Solución oral 40 mg/mL")
          ],
          dose: {
            adulto: t(lang, "Iniciar 20 mg VO 1x/dia; usual 20–40 mg/dia.", "Iniciar 20 mg VO 1 vez/día; habitual 20–40 mg/día."),
            idoso: t(lang, "Idosos ou hepatopatia: máximo geralmente 20 mg/dia.", "Adultos mayores o hepatopatía: máximo generalmente 20 mg/día."),
            maxDose: t(lang, "Dose máxima usual: 40 mg/dia; máximo 20 mg/dia em idosos, hepatopatia ou risco de QT.", "Dosis máxima habitual: 40 mg/día; máximo 20 mg/día en adultos mayores, hepatopatía o riesgo de QT.")
          },
          doseKg: {
            standard: t(lang, "Não se utiliza cálculo rotineiro por kg em adultos.", "No se utiliza cálculo rutinario por kg en adultos."),
            pediatric: t(lang, "Pediatria: uso não rotineiro; considerar apenas com especialista.", "Pediatría: uso no rutinario; considerar solo con especialista."),
            maxDose: t(lang, "40 mg/dia em adultos selecionados", "40 mg/día en adultos seleccionados")
          },
          indications: [
            t(lang, "Transtorno depressivo maior", "Trastorno depresivo mayor"),
            t(lang, "Transtorno de ansiedade generalizada", "Trastorno de ansiedad generalizada"),
            t(lang, "Transtorno do pânico", "Trastorno de pánico"),
            t(lang, "Transtorno obsessivo-compulsivo", "Trastorno obsesivo-compulsivo"),
            t(lang, "Transtorno disfórico pré-menstrual", "Trastorno disfórico premenstrual"),
            t(lang, "Sintomas depressivos associados a doenças clínicas crônicas", "Síntomas depresivos asociados a enfermedades clínicas crónicas")
          ],
          renalAdjustment: insuficienciaRenal
            ? t(lang, "Geralmente não requer ajuste renal; usar cautela em insuficiência renal grave.", "Generalmente no requiere ajuste renal; usar con cautela en insuficiencia renal grave.")
            : t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia
            ? t(lang, "Hepatopatia: dose máxima geralmente 20 mg/dia.", "Hepatopatía: dosis máxima generalmente 20 mg/día.")
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Inibe seletivamente a recaptação de serotonina, aumentando serotonina na fenda sináptica.", "Inhibe selectivamente la recaptación de serotonina, aumentando serotonina en la hendidura sináptica."),
          onset: t(lang, "Início de efeito clínico geralmente em 2–4 semanas; resposta plena pode levar 6–8 semanas.", "Inicio de efecto clínico generalmente en 2–4 semanas; respuesta plena puede tardar 6–8 semanas."),
          halfLife: t(lang, "Vida média aproximada: 35 horas.", "Vida media aproximada: 35 horas."),
          commonAdverseEffects: [
            t(lang, "Náuseas", "Náuseas"),
            t(lang, "Boca seca", "Boca seca"),
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Insônia", "Insomnio"),
            t(lang, "Sudorese", "Sudoración"),
            t(lang, "Disfunção sexual", "Disfunción sexual")
          ],
          dangerousAdverseEffects: [
            t(lang, "Prolongamento do intervalo QT", "Prolongación del intervalo QT"),
            t(lang, "Torsades de pointes em pacientes predispostos", "Torsades de pointes en pacientes predispuestos"),
            t(lang, "Síndrome serotoninérgica", "Síndrome serotoninérgico"),
            t(lang, "Ideação suicida em jovens no início do tratamento", "Ideación suicida en jóvenes al inicio del tratamiento"),
            t(lang, "Virada maníaca/hipomaníaca", "Viraje maníaco/hipomaníaco"),
            t(lang, "Hiponatremia/SIADH", "Hiponatremia/SIADH"),
            t(lang, "Sangramentos com AINEs/anticoagulantes", "Sangrados con AINEs/anticoagulantes")
          ],
          risksByPatient: [
            idade < 25
              ? t(lang, "Jovem: monitorar ideação suicida no início e após ajustes de dose.", "Joven: monitorizar ideación suicida al inicio y tras ajustes de dosis.")
              : null,
            idade >= 65
              ? t(lang, "Idoso: maior risco de QT prolongado, hiponatremia e quedas; dose máxima geralmente 20 mg/dia.", "Adulto mayor: mayor riesgo de QT prolongado, hiponatremia y caídas; dosis máxima generalmente 20 mg/día.")
              : null,
            gestante
              ? t(lang, "Gestação: avaliar risco-benefício; atenção a sintomas neonatais se usado no fim da gestação.", "Embarazo: evaluar riesgo-beneficio; atención a síntomas neonatales si se usa al final del embarazo.")
              : null,
            lactante
              ? t(lang, "Lactação: monitorar lactente para sonolência, irritabilidade ou dificuldade alimentar.", "Lactancia: monitorizar lactante por somnolencia, irritabilidad o dificultad alimentaria.")
              : null,
            hepatopatia
              ? t(lang, "Hepatopatia: limitar dose e monitorar efeitos adversos.", "Hepatopatía: limitar dosis y monitorizar efectos adversos.")
              : null,
            insuficienciaRenal
              ? t(lang, "Insuficiência renal: cautela se ClCr muito reduzido.", "Insuficiencia renal: cautela si ClCr muy reducido.")
              : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade ao citalopram", "Hipersensibilidad al citalopram"),
            t(lang, "Uso concomitante com IMAO", "Uso concomitante con IMAO"),
            t(lang, "Uso concomitante com pimozida", "Uso concomitante con pimozida"),
            t(lang, "QT longo congênito ou QT prolongado significativo", "QT largo congénito o QT prolongado significativo"),
            t(lang, "Transtorno bipolar sem estabilizador do humor", "Trastorno bipolar sin estabilizador del ánimo")
          ],
          interactions: [
            t(lang, "IMAO: risco de síndrome serotoninérgica", "IMAO: riesgo de síndrome serotoninérgico"),
            t(lang, "Pimozida: contraindicado por risco de arritmia/QT", "Pimozida: contraindicado por riesgo de arritmia/QT"),
            t(lang, "Antiarrítmicos, macrolídeos, quinolonas e antipsicóticos: risco de QT prolongado", "Antiarrítmicos, macrólidos, quinolonas y antipsicóticos: riesgo de QT prolongado"),
            t(lang, "Tramadol, linezolida, triptanos, lítio: risco serotoninérgico", "Tramadol, linezolid, triptanes, litio: riesgo serotoninérgico"),
            t(lang, "AINEs, AAS, anticoagulantes: maior risco de sangramento", "AINEs, AAS, anticoagulantes: mayor riesgo de sangrado")
          ],
          alerts: [
            t(lang, "Evitar doses acima de 40 mg/dia pelo risco de QT prolongado.", "Evitar dosis superiores a 40 mg/día por riesgo de QT prolongado."),
            t(lang, "Em idosos, hepatopatia ou risco cardíaco, geralmente não ultrapassar 20 mg/dia.", "En adultos mayores, hepatopatía o riesgo cardíaco, generalmente no superar 20 mg/día."),
            t(lang, "Considerar ECG em pacientes com cardiopatia, QT prolongado ou uso de fármacos que prolongam QT.", "Considerar ECG en pacientes con cardiopatía, QT prolongado o uso de fármacos que prolongan QT."),
            t(lang, "Corrigir hipocalemia e hipomagnesemia antes de usar em pacientes de risco.", "Corregir hipopotasemia e hipomagnesemia antes de usar en pacientes de riesgo."),
            t(lang, "Não suspender abruptamente; reduzir gradualmente.", "No suspender abruptamente; reducir gradualmente.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Citalopram Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    }

  });

  Object.assign(window.PSICOFARMACOS_DRUGS_DB, {

    paroxetina: {
      name: { pt: "Paroxetina", es: "Paroxetina" },
      category: "antidepressivo",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = clcr < 60;

        return {
          name: t(lang, "Paroxetina", "Paroxetina"),
          class: t(lang, "Antidepressivo ISRS", "Antidepresivo ISRS"),
          category: "antidepressivo",
          commercialNames: {
            br: ["Aropax", "Pondera", "Cebrilin", "Parox"],
            ar: ["Aropax", "Paxil", "Paroxetina Bagó", "Paroxetina Northia"]
          },
          presentation: [
            t(lang, "Comprimido 10 mg", "Comprimido 10 mg"),
            t(lang, "Comprimido 20 mg", "Comprimido 20 mg"),
            t(lang, "Comprimido 30 mg", "Comprimido 30 mg"),
            t(lang, "Comprimido de liberação controlada 12,5 mg", "Comprimido de liberación controlada 12,5 mg"),
            t(lang, "Comprimido de liberação controlada 25 mg", "Comprimido de liberación controlada 25 mg")
          ],
          dose: {
            adulto: t(lang, "Depressão: iniciar 20 mg VO 1x/dia; usual 20–50 mg/dia.", "Depresión: iniciar 20 mg VO 1 vez/día; habitual 20–50 mg/día."),
            ansiedadePanico: t(lang, "Ansiedade/pânico: iniciar 10 mg/dia; aumentar gradualmente conforme resposta.", "Ansiedad/pánico: iniciar 10 mg/día; aumentar gradualmente según respuesta."),
            maxDose: t(lang, "Dose máxima usual: 50 mg/dia; em alguns transtornos pode chegar a 60 mg/dia conforme formulação e indicação.", "Dosis máxima habitual: 50 mg/día; en algunos trastornos puede llegar a 60 mg/día según formulación e indicación.")
          },
          doseKg: {
            standard: t(lang, "Não se utiliza cálculo rotineiro por kg em adultos.", "No se utiliza cálculo rutinario por kg en adultos."),
            pediatric: t(lang, "Pediatria: geralmente não é primeira escolha; uso apenas com especialista.", "Pediatría: generalmente no es primera elección; uso solo con especialista."),
            maxDose: t(lang, "50–60 mg/dia conforme indicação", "50–60 mg/día según indicación")
          },
          indications: [
            t(lang, "Transtorno depressivo maior", "Trastorno depresivo mayor"),
            t(lang, "Transtorno de ansiedade generalizada", "Trastorno de ansiedad generalizada"),
            t(lang, "Transtorno do pânico", "Trastorno de pánico"),
            t(lang, "Transtorno de ansiedade social", "Trastorno de ansiedad social"),
            t(lang, "Transtorno obsessivo-compulsivo", "Trastorno obsesivo-compulsivo"),
            t(lang, "Transtorno de estresse pós-traumático", "Trastorno de estrés postraumático"),
            t(lang, "Transtorno disfórico pré-menstrual", "Trastorno disfórico premenstrual")
          ],
          renalAdjustment: insuficienciaRenal
            ? t(lang, "Insuficiência renal grave: considerar dose inicial menor e titulação cautelosa.", "Insuficiencia renal grave: considerar dosis inicial menor y titulación cautelosa.")
            : t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia
            ? t(lang, "Hepatopatia: usar dose inicial menor e titular lentamente.", "Hepatopatía: usar dosis inicial menor y titular lentamente.")
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Inibe seletivamente a recaptação de serotonina; possui também efeito anticolinérgico leve em comparação com outros ISRS.", "Inhibe selectivamente la recaptación de serotonina; también posee efecto anticolinérgico leve en comparación con otros ISRS."),
          onset: t(lang, "Início de efeito clínico geralmente em 2–4 semanas; resposta plena pode levar 6–8 semanas.", "Inicio de efecto clínico generalmente en 2–4 semanas; respuesta plena puede tardar 6–8 semanas."),
          halfLife: t(lang, "Vida média aproximada: 21 horas.", "Vida media aproximada: 21 horas."),
          commonAdverseEffects: [
            t(lang, "Náuseas", "Náuseas"),
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Boca seca", "Boca seca"),
            t(lang, "Constipação", "Estreñimiento"),
            t(lang, "Sudorese", "Sudoración"),
            t(lang, "Ganho de peso", "Aumento de peso"),
            t(lang, "Disfunção sexual", "Disfunción sexual")
          ],
          dangerousAdverseEffects: [
            t(lang, "Síndrome serotoninérgica", "Síndrome serotoninérgico"),
            t(lang, "Síndrome de descontinuação importante se suspensão abrupta", "Síndrome de discontinuación importante si suspensión brusca"),
            t(lang, "Ideação suicida em jovens no início do tratamento", "Ideación suicida en jóvenes al inicio del tratamiento"),
            t(lang, "Virada maníaca/hipomaníaca", "Viraje maníaco/hipomaníaco"),
            t(lang, "Hiponatremia/SIADH", "Hiponatremia/SIADH"),
            t(lang, "Sangramentos com AINEs/anticoagulantes", "Sangrados con AINEs/anticoagulantes")
          ],
          risksByPatient: [
            idade < 25
              ? t(lang, "Jovem: monitorar ideação suicida no início e após ajustes de dose.", "Joven: monitorizar ideación suicida al inicio y tras ajustes de dosis.")
              : null,
            idade >= 65
              ? t(lang, "Idoso: maior risco de efeito anticolinérgico, quedas, hiponatremia e interações.", "Adulto mayor: mayor riesgo de efecto anticolinérgico, caídas, hiponatremia e interacciones.")
              : null,
            gestante
              ? t(lang, "Gestação: evitar se possível, especialmente no primeiro trimestre; avaliar risco-benefício.", "Embarazo: evitar si es posible, especialmente en el primer trimestre; evaluar riesgo-beneficio.")
              : null,
            lactante
              ? t(lang, "Lactação: pode ser considerada com monitoramento do lactente.", "Lactancia: puede considerarse con monitorización del lactante.")
              : null,
            hepatopatia
              ? t(lang, "Hepatopatia: reduzir dose inicial e titular lentamente.", "Hepatopatía: reducir dosis inicial y titular lentamente.")
              : null,
            insuficienciaRenal
              ? t(lang, "Insuficiência renal grave: maior exposição; usar cautela.", "Insuficiencia renal grave: mayor exposición; usar con cautela.")
              : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade à paroxetina", "Hipersensibilidad a paroxetina"),
            t(lang, "Uso concomitante com IMAO", "Uso concomitante con IMAO"),
            t(lang, "Uso concomitante com tioridazina ou pimozida", "Uso concomitante con tioridazina o pimozida"),
            t(lang, "Transtorno bipolar sem estabilizador do humor", "Trastorno bipolar sin estabilizador del ánimo")
          ],
          interactions: [
            t(lang, "IMAO: risco de síndrome serotoninérgica", "IMAO: riesgo de síndrome serotoninérgico"),
            t(lang, "Tramadol, linezolida, triptanos, lítio: risco serotoninérgico", "Tramadol, linezolid, triptanes, litio: riesgo serotoninérgico"),
            t(lang, "AINEs, AAS, anticoagulantes: maior risco de sangramento", "AINEs, AAS, anticoagulantes: mayor riesgo de sangrado"),
            t(lang, "Inibidor forte de CYP2D6: aumenta níveis de tricíclicos, antipsicóticos e betabloqueadores", "Inhibidor fuerte de CYP2D6: aumenta niveles de tricíclicos, antipsicóticos y betabloqueantes"),
            t(lang, "Tamoxifeno: pode reduzir ativação metabólica e eficácia", "Tamoxifeno: puede reducir activación metabólica y eficacia")
          ],
          alerts: [
            t(lang, "Maior risco de síndrome de retirada entre os ISRS; reduzir gradualmente.", "Mayor riesgo de síndrome de retirada entre los ISRS; reducir gradualmente."),
            t(lang, "Evitar em gestação quando houver alternativa mais segura.", "Evitar en embarazo cuando exista alternativa más segura."),
            t(lang, "Investigar história de mania/hipomania antes de iniciar.", "Investigar historia de manía/hipomanía antes de iniciar."),
            t(lang, "Cuidado em idosos pelo perfil anticolinérgico e risco de quedas.", "Cuidado en adultos mayores por perfil anticolinérgico y riesgo de caídas."),
            t(lang, "Evitar associação com IMAO.", "Evitar asociación con IMAO.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Paroxetine Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    fluvoxamina: {
      name: { pt: "Fluvoxamina", es: "Fluvoxamina" },
      category: "antidepressivo",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = clcr < 60;

        return {
          name: t(lang, "Fluvoxamina", "Fluvoxamina"),
          class: t(lang, "Antidepressivo ISRS", "Antidepresivo ISRS"),
          category: "antidepressivo",
          commercialNames: {
            br: ["Luvox", "Revoc", "Fluvoxamina Maleato"],
            ar: ["Luvox", "Dumirox", "Fluvoxamina Gador", "Fluvoxamina Northia"]
          },
          presentation: [
            t(lang, "Comprimido 50 mg", "Comprimido 50 mg"),
            t(lang, "Comprimido 100 mg", "Comprimido 100 mg"),
            t(lang, "Comprimido de liberação prolongada 100 mg", "Comprimido de liberación prolongada 100 mg"),
            t(lang, "Comprimido de liberação prolongada 150 mg", "Comprimido de liberación prolongada 150 mg")
          ],
          dose: {
            adulto: t(lang, "TOC/depressão: iniciar 50 mg VO à noite; titular gradualmente.", "TOC/depresión: iniciar 50 mg VO por la noche; titular gradualmente."),
            toc: t(lang, "TOC: usual 100–300 mg/dia; doses acima de 100 mg podem ser divididas.", "TOC: habitual 100–300 mg/día; dosis superiores a 100 mg pueden dividirse."),
            maxDose: t(lang, "Dose máxima usual: 300 mg/dia.", "Dosis máxima habitual: 300 mg/día.")
          },
          doseKg: {
            standard: t(lang, "Não se utiliza cálculo rotineiro por kg em adultos.", "No se utiliza cálculo rutinario por kg en adultos."),
            pediatric: t(lang, "Pediatria/TOC: uso especializado; iniciar geralmente 25 mg à noite e titular lentamente.", "Pediatría/TOC: uso especializado; iniciar generalmente 25 mg por la noche y titular lentamente."),
            maxDose: t(lang, "300 mg/dia", "300 mg/día")
          },
          indications: [
            t(lang, "Transtorno obsessivo-compulsivo", "Trastorno obsesivo-compulsivo"),
            t(lang, "Transtorno depressivo maior", "Trastorno depresivo mayor"),
            t(lang, "Transtorno de ansiedade social", "Trastorno de ansiedad social"),
            t(lang, "Transtorno do pânico", "Trastorno de pánico"),
            t(lang, "Transtorno de ansiedade generalizada", "Trastorno de ansiedad generalizada"),
            t(lang, "Transtorno de estresse pós-traumático", "Trastorno de estrés postraumático"),
            t(lang, "Sintomas obsessivos em transtornos do espectro ansioso", "Síntomas obsesivos en trastornos del espectro ansioso")
          ],
          renalAdjustment: insuficienciaRenal
            ? t(lang, "Geralmente não requer ajuste renal; usar cautela em insuficiência renal grave.", "Generalmente no requiere ajuste renal; usar con cautela en insuficiencia renal grave.")
            : t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia
            ? t(lang, "Hepatopatia: iniciar com dose baixa e titular lentamente.", "Hepatopatía: iniciar con dosis baja y titular lentamente.")
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Inibe seletivamente a recaptação de serotonina; possui forte efeito inibitório sobre CYP1A2 e CYP2C19.", "Inhibe selectivamente la recaptación de serotonina; posee fuerte efecto inhibidor sobre CYP1A2 y CYP2C19."),
          onset: t(lang, "Início de efeito clínico geralmente em 2–4 semanas; em TOC a resposta pode demorar 8–12 semanas.", "Inicio de efecto clínico generalmente en 2–4 semanas; en TOC la respuesta puede tardar 8–12 semanas."),
          halfLife: t(lang, "Vida média aproximada: 15–22 horas.", "Vida media aproximada: 15–22 horas."),
          commonAdverseEffects: [
            t(lang, "Náuseas", "Náuseas"),
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Insônia", "Insomnio"),
            t(lang, "Cefaleia", "Cefalea"),
            t(lang, "Boca seca", "Boca seca"),
            t(lang, "Sudorese", "Sudoración"),
            t(lang, "Disfunção sexual", "Disfunción sexual")
          ],
          dangerousAdverseEffects: [
            t(lang, "Síndrome serotoninérgica", "Síndrome serotoninérgico"),
            t(lang, "Interações medicamentosas graves por inibição enzimática", "Interacciones medicamentosas graves por inhibición enzimática"),
            t(lang, "Ideação suicida em jovens no início do tratamento", "Ideación suicida en jóvenes al inicio del tratamiento"),
            t(lang, "Virada maníaca/hipomaníaca", "Viraje maníaco/hipomaníaco"),
            t(lang, "Hiponatremia/SIADH", "Hiponatremia/SIADH"),
            t(lang, "Sangramentos com AINEs/anticoagulantes", "Sangrados con AINEs/anticoagulantes")
          ],
          risksByPatient: [
            idade < 25
              ? t(lang, "Jovem: monitorar ideação suicida no início e após ajustes de dose.", "Joven: monitorizar ideación suicida al inicio y tras ajustes de dosis.")
              : null,
            idade >= 65
              ? t(lang, "Idoso: maior risco de hiponatremia, sedação, quedas e interações.", "Adulto mayor: mayor riesgo de hiponatremia, sedación, caídas e interacciones.")
              : null,
            gestante
              ? t(lang, "Gestação: avaliar risco-benefício; considerar alternativa com maior experiência clínica quando possível.", "Embarazo: evaluar riesgo-beneficio; considerar alternativa con mayor experiencia clínica cuando sea posible.")
              : null,
            lactante
              ? t(lang, "Lactação: monitorar lactente para sonolência, irritabilidade ou dificuldade alimentar.", "Lactancia: monitorizar lactante por somnolencia, irritabilidad o dificultad alimentaria.")
              : null,
            hepatopatia
              ? t(lang, "Hepatopatia: iniciar em dose baixa e titular lentamente.", "Hepatopatía: iniciar con dosis baja y titular lentamente.")
              : null,
            insuficienciaRenal
              ? t(lang, "Insuficiência renal: geralmente sem ajuste, mas monitorar tolerabilidade.", "Insuficiencia renal: generalmente sin ajuste, pero monitorizar tolerabilidad.")
              : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade à fluvoxamina", "Hipersensibilidad a fluvoxamina"),
            t(lang, "Uso concomitante com IMAO", "Uso concomitante con IMAO"),
            t(lang, "Uso concomitante com tizanidina", "Uso concomitante con tizanidina"),
            t(lang, "Uso concomitante com alosetrona", "Uso concomitante con alosetrón"),
            t(lang, "Transtorno bipolar sem estabilizador do humor", "Trastorno bipolar sin estabilizador del ánimo")
          ],
          interactions: [
            t(lang, "IMAO: risco de síndrome serotoninérgica", "IMAO: riesgo de síndrome serotoninérgico"),
            t(lang, "Clozapina: pode aumentar níveis séricos e toxicidade", "Clozapina: puede aumentar niveles séricos y toxicidad"),
            t(lang, "Benzodiazepínicos metabolizados por oxidação: pode aumentar sedação", "Benzodiazepinas metabolizadas por oxidación: puede aumentar sedación"),
            t(lang, "Teofilina e cafeína: pode aumentar níveis por inibição de CYP1A2", "Teofilina y cafeína: puede aumentar niveles por inhibición de CYP1A2"),
            t(lang, "Warfarina/AINEs/AAS: maior risco de sangramento", "Warfarina/AINEs/AAS: mayor riesgo de sangrado"),
            t(lang, "Tramadol, linezolida, triptanos, lítio: risco serotoninérgico", "Tramadol, linezolid, triptanes, litio: riesgo serotoninérgico")
          ],
          alerts: [
            t(lang, "Alto potencial de interações medicamentosas por CYP1A2, CYP2C19 e CYP3A4.", "Alto potencial de interacciones medicamentosas por CYP1A2, CYP2C19 y CYP3A4."),
            t(lang, "Muito usada em TOC; resposta pode exigir doses maiores e mais tempo.", "Muy usada en TOC; la respuesta puede requerir dosis mayores y más tiempo."),
            t(lang, "Evitar associação com IMAO.", "Evitar asociación con IMAO."),
            t(lang, "Investigar história de mania/hipomania antes de iniciar.", "Investigar historia de manía/hipomanía antes de iniciar."),
            t(lang, "Não suspender abruptamente; reduzir gradualmente.", "No suspender abruptamente; reducir gradualmente.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Fluvoxamine Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    }

  });

  Object.assign(window.PSICOFARMACOS_DRUGS_DB, {

    venlafaxina: {
      name: { pt: "Venlafaxina", es: "Venlafaxina" },
      category: "antidepressivo",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = clcr < 60;

        return {
          name: t(lang, "Venlafaxina", "Venlafaxina"),
          class: t(lang, "Antidepressivo ISRN", "Antidepresivo IRSN"),
          category: "antidepressivo",
          commercialNames: {
            br: ["Efexor XR", "Venlift OD", "Alenthus XR", "Venlaxin"],
            ar: ["Efexor XR", "Elafax", "Venlafaxina Bagó", "Venlafaxina Gador"]
          },
          presentation: [
            t(lang, "Comprimido 37,5 mg", "Comprimido 37,5 mg"),
            t(lang, "Comprimido 75 mg", "Comprimido 75 mg"),
            t(lang, "Cápsula de liberação prolongada 37,5 mg", "Cápsula de liberación prolongada 37,5 mg"),
            t(lang, "Cápsula de liberação prolongada 75 mg", "Cápsula de liberación prolongada 75 mg"),
            t(lang, "Cápsula de liberação prolongada 150 mg", "Cápsula de liberación prolongada 150 mg")
          ],
          dose: {
            adulto: t(lang, "Depressão: iniciar 37,5–75 mg VO 1x/dia; usual 75–225 mg/dia.", "Depresión: iniciar 37,5–75 mg VO 1 vez/día; habitual 75–225 mg/día."),
            ansiedadePanico: t(lang, "Ansiedade/pânico: iniciar 37,5 mg/dia por 4–7 dias; depois 75 mg/dia e titular conforme resposta.", "Ansiedad/pánico: iniciar 37,5 mg/día por 4–7 días; luego 75 mg/día y titular según respuesta."),
            maxDose: t(lang, "Dose máxima usual: 225 mg/dia em liberação prolongada; até 375 mg/dia em casos selecionados com formulação imediata e supervisão especializada.", "Dosis máxima habitual: 225 mg/día en liberación prolongada; hasta 375 mg/día en casos seleccionados con formulación inmediata y supervisión especializada.")
          },
          doseKg: {
            standard: t(lang, "Não se utiliza cálculo rotineiro por kg em adultos.", "No se utiliza cálculo rutinario por kg en adultos."),
            pediatric: t(lang, "Pediatria: uso não rotineiro; considerar apenas com especialista.", "Pediatría: uso no rutinario; considerar solo con especialista."),
            maxDose: t(lang, "225–375 mg/dia conforme formulação e indicação", "225–375 mg/día según formulación e indicación")
          },
          indications: [
            t(lang, "Transtorno depressivo maior", "Trastorno depresivo mayor"),
            t(lang, "Transtorno de ansiedade generalizada", "Trastorno de ansiedad generalizada"),
            t(lang, "Transtorno de ansiedade social", "Trastorno de ansiedad social"),
            t(lang, "Transtorno do pânico", "Trastorno de pánico"),
            t(lang, "Dor neuropática", "Dolor neuropático"),
            t(lang, "Sintomas vasomotores da menopausa", "Síntomas vasomotores de la menopausia"),
            t(lang, "Depressão com fadiga, apatia ou sintomas dolorosos", "Depresión con fatiga, apatía o síntomas dolorosos")
          ],
          renalAdjustment: insuficienciaRenal
            ? t(lang, "Insuficiência renal: reduzir dose total diária em aproximadamente 25–50%; maior redução se ClCr muito baixo ou diálise.", "Insuficiencia renal: reducir dosis total diaria aproximadamente 25–50%; mayor reducción si ClCr muy bajo o diálisis.")
            : t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia
            ? t(lang, "Hepatopatia: reduzir dose total diária em aproximadamente 50% e titular com cautela.", "Hepatopatía: reducir dosis total diaria aproximadamente 50% y titular con cautela.")
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Inibe a recaptação de serotonina e noradrenalina; em doses mais baixas predomina efeito serotoninérgico e em doses maiores aumenta o efeito noradrenérgico.", "Inhibe la recaptación de serotonina y noradrenalina; en dosis bajas predomina el efecto serotoninérgico y en dosis mayores aumenta el efecto noradrenérgico."),
          onset: t(lang, "Início de efeito clínico geralmente em 2–4 semanas; resposta plena pode levar 6–8 semanas.", "Inicio de efecto clínico generalmente en 2–4 semanas; respuesta plena puede tardar 6–8 semanas."),
          halfLife: t(lang, "Vida média aproximada: venlafaxina 5 horas; metabólito ativo O-desmetilvenlafaxina cerca de 11 horas.", "Vida media aproximada: venlafaxina 5 horas; metabolito activo O-desmetilvenlafaxina cerca de 11 horas."),
          commonAdverseEffects: [
            t(lang, "Náuseas", "Náuseas"),
            t(lang, "Insônia", "Insomnio"),
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Boca seca", "Boca seca"),
            t(lang, "Sudorese", "Sudoración"),
            t(lang, "Constipação", "Estreñimiento"),
            t(lang, "Disfunção sexual", "Disfunción sexual"),
            t(lang, "Aumento da pressão arterial em doses maiores", "Aumento de la presión arterial en dosis mayores")
          ],
          dangerousAdverseEffects: [
            t(lang, "Hipertensão dose-dependente", "Hipertensión dosis-dependiente"),
            t(lang, "Síndrome serotoninérgica", "Síndrome serotoninérgico"),
            t(lang, "Síndrome de descontinuação importante se suspensão abrupta", "Síndrome de discontinuación importante si suspensión brusca"),
            t(lang, "Ideação suicida em jovens no início do tratamento", "Ideación suicida en jóvenes al inicio del tratamiento"),
            t(lang, "Virada maníaca/hipomaníaca", "Viraje maníaco/hipomaníaco"),
            t(lang, "Hiponatremia/SIADH", "Hiponatremia/SIADH"),
            t(lang, "Convulsões em predispostos", "Convulsiones en predispuestos")
          ],
          risksByPatient: [
            idade < 25
              ? t(lang, "Jovem: monitorar ideação suicida no início e após ajustes de dose.", "Joven: monitorizar ideación suicida al inicio y tras ajustes de dosis.")
              : null,
            idade >= 65
              ? t(lang, "Idoso: maior risco de hiponatremia, hipertensão, quedas e síndrome de retirada.", "Adulto mayor: mayor riesgo de hiponatremia, hipertensión, caídas y síndrome de retirada.")
              : null,
            gestante
              ? t(lang, "Gestação: avaliar risco-benefício; atenção a sintomas neonatais se usado no fim da gestação.", "Embarazo: evaluar riesgo-beneficio; atención a síntomas neonatales si se usa al final del embarazo.")
              : null,
            lactante
              ? t(lang, "Lactação: passa ao leite; monitorar lactente para irritabilidade, sono e alimentação.", "Lactancia: pasa a la leche; monitorizar lactante por irritabilidad, sueño y alimentación.")
              : null,
            hepatopatia
              ? t(lang, "Hepatopatia: reduzir dose e titular lentamente.", "Hepatopatía: reducir dosis y titular lentamente.")
              : null,
            insuficienciaRenal
              ? t(lang, "Insuficiência renal: reduzir dose conforme ClCr.", "Insuficiencia renal: reducir dosis según ClCr.")
              : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade à venlafaxina", "Hipersensibilidad a venlafaxina"),
            t(lang, "Uso concomitante com IMAO", "Uso concomitante con IMAO"),
            t(lang, "Hipertensão arterial não controlada", "Hipertensión arterial no controlada"),
            t(lang, "Transtorno bipolar sem estabilizador do humor", "Trastorno bipolar sin estabilizador del ánimo")
          ],
          interactions: [
            t(lang, "IMAO: risco de síndrome serotoninérgica", "IMAO: riesgo de síndrome serotoninérgico"),
            t(lang, "Tramadol, linezolida, triptanos, lítio: risco serotoninérgico", "Tramadol, linezolid, triptanes, litio: riesgo serotoninérgico"),
            t(lang, "AINEs, AAS, anticoagulantes: maior risco de sangramento", "AINEs, AAS, anticoagulantes: mayor riesgo de sangrado"),
            t(lang, "Fármacos anti-hipertensivos: pode reduzir controle pressórico se houver hipertensão induzida", "Fármacos antihipertensivos: puede reducir control tensional si aparece hipertensión inducida"),
            t(lang, "Inibidores de CYP2D6: podem alterar níveis de venlafaxina e metabólito ativo", "Inhibidores de CYP2D6: pueden alterar niveles de venlafaxina y metabolito activo")
          ],
          alerts: [
            t(lang, "Monitorar pressão arterial antes e durante o tratamento, especialmente em doses maiores.", "Monitorizar presión arterial antes y durante el tratamiento, especialmente en dosis mayores."),
            t(lang, "Maior risco de síndrome de retirada; reduzir gradualmente.", "Mayor riesgo de síndrome de retirada; reducir gradualmente."),
            t(lang, "Evitar em hipertensão não controlada.", "Evitar en hipertensión no controlada."),
            t(lang, "Investigar história de mania/hipomania antes de iniciar.", "Investigar historia de manía/hipomanía antes de iniciar."),
            t(lang, "Evitar associação com IMAO.", "Evitar asociación con IMAO.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Venlafaxine Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    desvenlafaxina: {
      name: { pt: "Desvenlafaxina", es: "Desvenlafaxina" },
      category: "antidepressivo",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = clcr < 60;

        return {
          name: t(lang, "Desvenlafaxina", "Desvenlafaxina"),
          class: t(lang, "Antidepressivo ISRN", "Antidepresivo IRSN"),
          category: "antidepressivo",
          commercialNames: {
            br: ["Pristiq", "Desve", "Elifore", "Deller"],
            ar: ["Pristiq", "Deslafax", "Desvenlafaxina Bagó", "Desvenlafaxina Gador"]
          },
          presentation: [
            t(lang, "Comprimido de liberação prolongada 25 mg", "Comprimido de liberación prolongada 25 mg"),
            t(lang, "Comprimido de liberação prolongada 50 mg", "Comprimido de liberación prolongada 50 mg"),
            t(lang, "Comprimido de liberação prolongada 100 mg", "Comprimido de liberación prolongada 100 mg")
          ],
          dose: {
            adulto: t(lang, "Depressão: 50 mg VO 1x/dia; geralmente não é necessário titular acima de 50 mg/dia.", "Depresión: 50 mg VO 1 vez/día; generalmente no es necesario titular por encima de 50 mg/día."),
            doseInicialBaixa: t(lang, "Pode iniciar 25 mg/dia em pacientes sensíveis, idosos, insuficiência renal ou necessidade de descontinuação gradual.", "Puede iniciarse 25 mg/día en pacientes sensibles, adultos mayores, insuficiencia renal o necesidad de discontinuación gradual."),
            maxDose: t(lang, "Dose máxima usual: 100 mg/dia; doses maiores aumentam eventos adversos e raramente agregam benefício clínico.", "Dosis máxima habitual: 100 mg/día; dosis mayores aumentan eventos adversos y rara vez agregan beneficio clínico.")
          },
          doseKg: {
            standard: t(lang, "Não se utiliza cálculo rotineiro por kg em adultos.", "No se utiliza cálculo rutinario por kg en adultos."),
            pediatric: t(lang, "Pediatria: uso não rotineiro; considerar apenas com especialista.", "Pediatría: uso no rutinario; considerar solo con especialista."),
            maxDose: t(lang, "100 mg/dia na prática usual", "100 mg/día en la práctica habitual")
          },
          indications: [
            t(lang, "Transtorno depressivo maior", "Trastorno depresivo mayor"),
            t(lang, "Depressão com sintomas ansiosos", "Depresión con síntomas ansiosos"),
            t(lang, "Depressão com fadiga, apatia ou baixa energia", "Depresión con fatiga, apatía o baja energía"),
            t(lang, "Depressão com sintomas dolorosos", "Depresión con síntomas dolorosos"),
            t(lang, "Transtorno de ansiedade generalizada", "Trastorno de ansiedad generalizada"),
            t(lang, "Sintomas vasomotores da menopausa", "Síntomas vasomotores de la menopausia"),
            t(lang, "Alternativa quando há resposta prévia à venlafaxina com pior tolerabilidade", "Alternativa cuando hubo respuesta previa a venlafaxina con peor tolerabilidad")
          ],
          renalAdjustment: insuficienciaRenal
            ? t(lang, "Insuficiência renal: reduzir dose conforme ClCr; se ClCr 30–50, máximo usual 50 mg/dia; se ClCr <30, considerar 25–50 mg em dias alternados conforme protocolo.", "Insuficiencia renal: reducir dosis según ClCr; si ClCr 30–50, máximo habitual 50 mg/día; si ClCr <30, considerar 25–50 mg en días alternos según protocolo.")
            : t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia
            ? t(lang, "Hepatopatia moderada/grave: geralmente não ultrapassar 100 mg/dia; titular com cautela.", "Hepatopatía moderada/grave: generalmente no superar 100 mg/día; titular con cautela.")
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Metabólito ativo da venlafaxina; inibe recaptação de serotonina e noradrenalina, com menor dependência do metabolismo por CYP2D6.", "Metabolito activo de venlafaxina; inhibe recaptación de serotonina y noradrenalina, con menor dependencia del metabolismo por CYP2D6."),
          onset: t(lang, "Início de efeito clínico geralmente em 2–4 semanas; resposta plena pode levar 6–8 semanas.", "Inicio de efecto clínico generalmente en 2–4 semanas; respuesta plena puede tardar 6–8 semanas."),
          halfLife: t(lang, "Vida média aproximada: 11 horas.", "Vida media aproximada: 11 horas."),
          commonAdverseEffects: [
            t(lang, "Náuseas", "Náuseas"),
            t(lang, "Boca seca", "Boca seca"),
            t(lang, "Insônia", "Insomnio"),
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Sudorese", "Sudoración"),
            t(lang, "Constipação", "Estreñimiento"),
            t(lang, "Disfunção sexual", "Disfunción sexual"),
            t(lang, "Aumento da pressão arterial", "Aumento de la presión arterial")
          ],
          dangerousAdverseEffects: [
            t(lang, "Hipertensão dose-dependente", "Hipertensión dosis-dependiente"),
            t(lang, "Síndrome serotoninérgica", "Síndrome serotoninérgico"),
            t(lang, "Síndrome de descontinuação se suspensão abrupta", "Síndrome de discontinuación si suspensión brusca"),
            t(lang, "Ideação suicida em jovens no início do tratamento", "Ideación suicida en jóvenes al inicio del tratamiento"),
            t(lang, "Virada maníaca/hipomaníaca", "Viraje maníaco/hipomaníaco"),
            t(lang, "Hiponatremia/SIADH", "Hiponatremia/SIADH"),
            t(lang, "Convulsões em predispostos", "Convulsiones en predispuestos")
          ],
          risksByPatient: [
            idade < 25
              ? t(lang, "Jovem: monitorar ideação suicida no início e após ajustes de dose.", "Joven: monitorizar ideación suicida al inicio y tras ajustes de dosis.")
              : null,
            idade >= 65
              ? t(lang, "Idoso: maior risco de hiponatremia, hipertensão, quedas e eventos adversos.", "Adulto mayor: mayor riesgo de hiponatremia, hipertensión, caídas y eventos adversos.")
              : null,
            gestante
              ? t(lang, "Gestação: avaliar risco-benefício; atenção a sintomas neonatais se usado no fim da gestação.", "Embarazo: evaluar riesgo-beneficio; atención a síntomas neonatales si se usa al final del embarazo.")
              : null,
            lactante
              ? t(lang, "Lactação: passa ao leite; monitorar lactente para irritabilidade, sono e alimentação.", "Lactancia: pasa a la leche; monitorizar lactante por irritabilidad, sueño y alimentación.")
              : null,
            hepatopatia
              ? t(lang, "Hepatopatia: titular com cautela e evitar doses altas.", "Hepatopatía: titular con cautela y evitar dosis altas.")
              : null,
            insuficienciaRenal
              ? t(lang, "Insuficiência renal: ajustar dose conforme ClCr.", "Insuficiencia renal: ajustar dosis según ClCr.")
              : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade à desvenlafaxina ou venlafaxina", "Hipersensibilidad a desvenlafaxina o venlafaxina"),
            t(lang, "Uso concomitante com IMAO", "Uso concomitante con IMAO"),
            t(lang, "Hipertensão arterial não controlada", "Hipertensión arterial no controlada"),
            t(lang, "Transtorno bipolar sem estabilizador do humor", "Trastorno bipolar sin estabilizador del ánimo")
          ],
          interactions: [
            t(lang, "IMAO: risco de síndrome serotoninérgica", "IMAO: riesgo de síndrome serotoninérgico"),
            t(lang, "Tramadol, linezolida, triptanos, lítio: risco serotoninérgico", "Tramadol, linezolid, triptanes, litio: riesgo serotoninérgico"),
            t(lang, "AINEs, AAS, anticoagulantes: maior risco de sangramento", "AINEs, AAS, anticoagulantes: mayor riesgo de sangrado"),
            t(lang, "Álcool e depressores do SNC: podem piorar sedação e prejuízo psicomotor", "Alcohol y depresores del SNC: pueden empeorar sedación y deterioro psicomotor"),
            t(lang, "Outros fármacos que aumentam pressão arterial: maior risco hipertensivo", "Otros fármacos que aumentan la presión arterial: mayor riesgo hipertensivo")
          ],
          alerts: [
            t(lang, "Monitorar pressão arterial antes e durante o tratamento.", "Monitorizar presión arterial antes y durante el tratamiento."),
            t(lang, "Não partir, mastigar ou triturar comprimidos de liberação prolongada.", "No partir, masticar ni triturar comprimidos de liberación prolongada."),
            t(lang, "Reduzir gradualmente para evitar síndrome de retirada.", "Reducir gradualmente para evitar síndrome de retirada."),
            t(lang, "Investigar história de mania/hipomania antes de iniciar.", "Investigar historia de manía/hipomanía antes de iniciar."),
            t(lang, "Evitar associação com IMAO.", "Evitar asociación con IMAO.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Desvenlafaxine Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    }

  });

  Object.assign(window.PSICOFARMACOS_DRUGS_DB, {

    duloxetina: {
      name: { pt: "Duloxetina", es: "Duloxetina" },
      category: "antidepressivo",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = clcr < 60;

        return {
          name: t(lang, "Duloxetina", "Duloxetina"),
          class: t(lang, "Antidepressivo ISRN", "Antidepresivo IRSN"),
          category: "antidepressivo",
          commercialNames: {
            br: ["Cymbalta", "Velija", "Dual", "Dulorgran"],
            ar: ["Cymbalta", "Dulox", "Duloxetina Bagó", "Duloxetina Gador"]
          },
          presentation: [
            t(lang, "Cápsula de liberação retardada 30 mg", "Cápsula de liberación retardada 30 mg"),
            t(lang, "Cápsula de liberação retardada 60 mg", "Cápsula de liberación retardada 60 mg")
          ],
          dose: {
            adulto: t(lang, "Depressão: iniciar 30 mg VO 1x/dia por 1 semana; depois 60 mg VO 1x/dia.", "Depresión: iniciar 30 mg VO 1 vez/día por 1 semana; luego 60 mg VO 1 vez/día."),
            dorNeuropaticaFibromialgia: t(lang, "Dor neuropática/fibromialgia: iniciar 30 mg/dia; usual 60 mg/dia.", "Dolor neuropático/fibromialgia: iniciar 30 mg/día; habitual 60 mg/día."),
            maxDose: t(lang, "Dose máxima usual: 120 mg/dia, embora acima de 60 mg/dia aumente eventos adversos e nem sempre agregue benefício.", "Dosis máxima habitual: 120 mg/día, aunque por encima de 60 mg/día aumentan eventos adversos y no siempre agrega beneficio.")
          },
          doseKg: {
            standard: t(lang, "Não se utiliza cálculo rotineiro por kg em adultos.", "No se utiliza cálculo rutinario por kg en adultos."),
            pediatric: t(lang, "Pediatria: uso especializado; em ansiedade pode iniciar 30 mg/dia conforme idade e protocolo.", "Pediatría: uso especializado; en ansiedad puede iniciarse 30 mg/día según edad y protocolo."),
            maxDose: t(lang, "120 mg/dia", "120 mg/día")
          },
          indications: [
            t(lang, "Transtorno depressivo maior", "Trastorno depresivo mayor"),
            t(lang, "Transtorno de ansiedade generalizada", "Trastorno de ansiedad generalizada"),
            t(lang, "Dor neuropática diabética", "Dolor neuropático diabético"),
            t(lang, "Fibromialgia", "Fibromialgia"),
            t(lang, "Dor musculoesquelética crônica", "Dolor musculoesquelético crónico"),
            t(lang, "Lombalgia crônica", "Lumbalgia crónica"),
            t(lang, "Depressão com sintomas dolorosos", "Depresión con síntomas dolorosos")
          ],
          renalAdjustment: insuficienciaRenal
            ? t(lang, "Insuficiência renal grave, especialmente ClCr <30 mL/min: evitar ou usar apenas com forte justificativa e monitoramento.", "Insuficiencia renal grave, especialmente ClCr <30 mL/min: evitar o usar solo con fuerte justificación y monitorización.")
            : t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia
            ? t(lang, "Hepatopatia: evitar, especialmente se doença hepática crônica ou uso importante de álcool.", "Hepatopatía: evitar, especialmente si enfermedad hepática crónica o uso importante de alcohol.")
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Inibe a recaptação de serotonina e noradrenalina, aumentando a neurotransmissão monoaminérgica e modulando vias descendentes de dor.", "Inhibe la recaptación de serotonina y noradrenalina, aumentando la neurotransmisión monoaminérgica y modulando vías descendentes del dolor."),
          onset: t(lang, "Efeito antidepressivo geralmente em 2–4 semanas; efeito analgésico pode surgir nas primeiras semanas, com resposta plena em 4–8 semanas.", "Efecto antidepresivo generalmente en 2–4 semanas; efecto analgésico puede aparecer en las primeras semanas, con respuesta plena en 4–8 semanas."),
          halfLife: t(lang, "Vida média aproximada: 12 horas.", "Vida media aproximada: 12 horas."),
          commonAdverseEffects: [
            t(lang, "Náuseas", "Náuseas"),
            t(lang, "Boca seca", "Boca seca"),
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Insônia", "Insomnio"),
            t(lang, "Constipação", "Estreñimiento"),
            t(lang, "Sudorese", "Sudoración"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Disfunção sexual", "Disfunción sexual")
          ],
          dangerousAdverseEffects: [
            t(lang, "Hepatotoxicidade", "Hepatotoxicidad"),
            t(lang, "Síndrome serotoninérgica", "Síndrome serotoninérgico"),
            t(lang, "Hipertensão ou aumento da frequência cardíaca", "Hipertensión o aumento de la frecuencia cardíaca"),
            t(lang, "Síndrome de descontinuação se suspensão abrupta", "Síndrome de discontinuación si suspensión brusca"),
            t(lang, "Ideação suicida em jovens no início do tratamento", "Ideación suicida en jóvenes al inicio del tratamiento"),
            t(lang, "Virada maníaca/hipomaníaca", "Viraje maníaco/hipomaníaco"),
            t(lang, "Hiponatremia/SIADH", "Hiponatremia/SIADH"),
            t(lang, "Sangramentos com AINEs/anticoagulantes", "Sangrados con AINEs/anticoagulantes")
          ],
          risksByPatient: [
            idade < 25
              ? t(lang, "Jovem: monitorar ideação suicida no início e após ajustes de dose.", "Joven: monitorizar ideación suicida al inicio y tras ajustes de dosis.")
              : null,
            idade >= 65
              ? t(lang, "Idoso: maior risco de hiponatremia, quedas, tontura e interações.", "Adulto mayor: mayor riesgo de hiponatremia, caídas, mareos e interacciones.")
              : null,
            gestante
              ? t(lang, "Gestação: avaliar risco-benefício; atenção a sintomas neonatais se usado no fim da gestação.", "Embarazo: evaluar riesgo-beneficio; atención a síntomas neonatales si se usa al final del embarazo.")
              : null,
            lactante
              ? t(lang, "Lactação: passa em baixa quantidade ao leite; monitorar lactente.", "Lactancia: pasa en baja cantidad a la leche; monitorizar lactante.")
              : null,
            hepatopatia
              ? t(lang, "Hepatopatia: evitar pelo risco de hepatotoxicidade.", "Hepatopatía: evitar por riesgo de hepatotoxicidad.")
              : null,
            insuficienciaRenal
              ? t(lang, "Insuficiência renal grave: evitar se ClCr <30 mL/min.", "Insuficiencia renal grave: evitar si ClCr <30 mL/min.")
              : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade à duloxetina", "Hipersensibilidad a duloxetina"),
            t(lang, "Uso concomitante com IMAO", "Uso concomitante con IMAO"),
            t(lang, "Doença hepática crônica ou insuficiência hepática significativa", "Enfermedad hepática crónica o insuficiencia hepática significativa"),
            t(lang, "Uso importante de álcool", "Uso importante de alcohol"),
            t(lang, "Insuficiência renal grave, especialmente ClCr <30 mL/min", "Insuficiencia renal grave, especialmente ClCr <30 mL/min"),
            t(lang, "Transtorno bipolar sem estabilizador do humor", "Trastorno bipolar sin estabilizador del ánimo")
          ],
          interactions: [
            t(lang, "IMAO: risco de síndrome serotoninérgica", "IMAO: riesgo de síndrome serotoninérgico"),
            t(lang, "Tramadol, linezolida, triptanos, lítio: risco serotoninérgico", "Tramadol, linezolid, triptanes, litio: riesgo serotoninérgico"),
            t(lang, "AINEs, AAS, anticoagulantes: maior risco de sangramento", "AINEs, AAS, anticoagulantes: mayor riesgo de sangrado"),
            t(lang, "Álcool: aumenta risco de lesão hepática", "Alcohol: aumenta riesgo de lesión hepática"),
            t(lang, "Inibidores de CYP1A2 ou CYP2D6: podem aumentar níveis de duloxetina", "Inhibidores de CYP1A2 o CYP2D6: pueden aumentar niveles de duloxetina"),
            t(lang, "Anti-hipertensivos: monitorar pressão por possível alteração pressórica", "Antihipertensivos: monitorizar presión por posible alteración tensional")
          ],
          alerts: [
            t(lang, "Monitorar pressão arterial antes e durante o tratamento.", "Monitorizar presión arterial antes y durante el tratamiento."),
            t(lang, "Evitar em hepatopatia ou uso abusivo de álcool.", "Evitar en hepatopatía o uso abusivo de alcohol."),
            t(lang, "Evitar se ClCr <30 mL/min, salvo avaliação especializada.", "Evitar si ClCr <30 mL/min, salvo evaluación especializada."),
            t(lang, "Não abrir, mastigar ou triturar cápsulas de liberação retardada.", "No abrir, masticar ni triturar cápsulas de liberación retardada."),
            t(lang, "Reduzir gradualmente para evitar síndrome de retirada.", "Reducir gradualmente para evitar síndrome de retirada."),
            t(lang, "Investigar história de mania/hipomania antes de iniciar.", "Investigar historia de manía/hipomanía antes de iniciar.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Duloxetine Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    milnaciprano: {
      name: { pt: "Milnaciprano", es: "Milnaciprán" },
      category: "antidepressivo",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = clcr < 60;

        return {
          name: t(lang, "Milnaciprano", "Milnaciprán"),
          class: t(lang, "Antidepressivo ISRN", "Antidepresivo IRSN"),
          category: "antidepressivo",
          commercialNames: {
            br: ["Ixel", "Milnaciprano"],
            ar: ["Ixel", "Milnaciprán", "Milnaciprán Gador"]
          },
          presentation: [
            t(lang, "Cápsula/comprimido 25 mg", "Cápsula/comprimido 25 mg"),
            t(lang, "Cápsula/comprimido 50 mg", "Cápsula/comprimido 50 mg"),
            t(lang, "Comprimido 100 mg", "Comprimido 100 mg")
          ],
          dose: {
            adulto: t(lang, "Depressão/fibromialgia: iniciar 12,5 mg VO 1x/dia; titular gradualmente até 50 mg 12/12h.", "Depresión/fibromialgia: iniciar 12,5 mg VO 1 vez/día; titular gradualmente hasta 50 mg cada 12 h."),
            titulacao: t(lang, "Esquema comum: 12,5 mg no dia 1; 12,5 mg 12/12h nos dias 2–3; 25 mg 12/12h nos dias 4–7; depois 50 mg 12/12h.", "Esquema común: 12,5 mg el día 1; 12,5 mg cada 12 h días 2–3; 25 mg cada 12 h días 4–7; luego 50 mg cada 12 h."),
            maxDose: t(lang, "Dose máxima usual: 100 mg 12/12h, conforme indicação e tolerabilidade.", "Dosis máxima habitual: 100 mg cada 12 h, según indicación y tolerabilidad.")
          },
          doseKg: {
            standard: t(lang, "Não se utiliza cálculo rotineiro por kg em adultos.", "No se utiliza cálculo rutinario por kg en adultos."),
            pediatric: t(lang, "Pediatria: não recomendado como uso rotineiro; considerar apenas com especialista.", "Pediatría: no recomendado como uso rutinario; considerar solo con especialista."),
            maxDose: t(lang, "200 mg/dia", "200 mg/día")
          },
          indications: [
            t(lang, "Fibromialgia", "Fibromialgia"),
            t(lang, "Transtorno depressivo maior", "Trastorno depresivo mayor"),
            t(lang, "Depressão com fadiga, apatia ou baixa energia", "Depresión con fatiga, apatía o baja energía"),
            t(lang, "Depressão com sintomas dolorosos", "Depresión con síntomas dolorosos"),
            t(lang, "Dor crônica centralizada", "Dolor crónico centralizado"),
            t(lang, "Dor musculoesquelética crônica selecionada", "Dolor musculoesquelético crónico seleccionado"),
            t(lang, "Alternativa em pacientes com resposta insuficiente a ISRS", "Alternativa en pacientes con respuesta insuficiente a ISRS")
          ],
          renalAdjustment: insuficienciaRenal
            ? t(lang, "Insuficiência renal: ajustar conforme ClCr; se ClCr 30–60, considerar redução; se ClCr 5–29, dose máxima geralmente 25 mg 12/12h; evitar em doença renal terminal.", "Insuficiencia renal: ajustar según ClCr; si ClCr 30–60, considerar reducción; si ClCr 5–29, dosis máxima generalmente 25 mg cada 12 h; evitar en enfermedad renal terminal.")
            : t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia
            ? t(lang, "Hepatopatia: geralmente não requer ajuste leve/moderado, mas usar cautela e monitorar enzimas hepáticas.", "Hepatopatía: generalmente no requiere ajuste leve/moderado, pero usar con cautela y monitorizar enzimas hepáticas.")
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Inibe a recaptação de serotonina e noradrenalina, com ação noradrenérgica proporcionalmente relevante; modula vias descendentes de dor.", "Inhibe la recaptación de serotonina y noradrenalina, con acción noradrenérgica proporcionalmente relevante; modula vías descendentes del dolor."),
          onset: t(lang, "Efeito sobre dor/fibromialgia pode surgir em 1–2 semanas; resposta antidepressiva geralmente em 2–4 semanas, com avaliação plena em 6–8 semanas.", "El efecto sobre dolor/fibromialgia puede aparecer en 1–2 semanas; respuesta antidepresiva generalmente en 2–4 semanas, con evaluación plena en 6–8 semanas."),
          halfLife: t(lang, "Vida média aproximada: 6–8 horas.", "Vida media aproximada: 6–8 horas."),
          commonAdverseEffects: [
            t(lang, "Náuseas", "Náuseas"),
            t(lang, "Cefaleia", "Cefalea"),
            t(lang, "Constipação", "Estreñimiento"),
            t(lang, "Insônia", "Insomnio"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Sudorese", "Sudoración"),
            t(lang, "Palpitações", "Palpitaciones"),
            t(lang, "Boca seca", "Boca seca")
          ],
          dangerousAdverseEffects: [
            t(lang, "Hipertensão arterial", "Hipertensión arterial"),
            t(lang, "Taquicardia", "Taquicardia"),
            t(lang, "Síndrome serotoninérgica", "Síndrome serotoninérgico"),
            t(lang, "Ideação suicida em jovens no início do tratamento", "Ideación suicida en jóvenes al inicio del tratamiento"),
            t(lang, "Virada maníaca/hipomaníaca", "Viraje maníaco/hipomaníaco"),
            t(lang, "Hiponatremia/SIADH", "Hiponatremia/SIADH"),
            t(lang, "Convulsões em predispostos", "Convulsiones en predispuestos"),
            t(lang, "Retenção urinária em predispostos", "Retención urinaria en predispuestos")
          ],
          risksByPatient: [
            idade < 25
              ? t(lang, "Jovem: monitorar ideação suicida no início e após ajustes de dose.", "Joven: monitorizar ideación suicida al inicio y tras ajustes de dosis.")
              : null,
            idade >= 65
              ? t(lang, "Idoso: maior risco de hipertensão, taquicardia, tontura, quedas e retenção urinária.", "Adulto mayor: mayor riesgo de hipertensión, taquicardia, mareos, caídas y retención urinaria.")
              : null,
            gestante
              ? t(lang, "Gestação: dados limitados; avaliar risco-benefício e preferir opções com maior experiência quando possível.", "Embarazo: datos limitados; evaluar riesgo-beneficio y preferir opciones con mayor experiencia cuando sea posible.")
              : null,
            lactante
              ? t(lang, "Lactação: dados limitados; monitorar lactente ou considerar alternativa mais estudada.", "Lactancia: datos limitados; monitorizar lactante o considerar alternativa más estudiada.")
              : null,
            hepatopatia
              ? t(lang, "Hepatopatia: usar cautela e monitorar enzimas hepáticas.", "Hepatopatía: usar con cautela y monitorizar enzimas hepáticas.")
              : null,
            insuficienciaRenal
              ? t(lang, "Insuficiência renal: ajustar dose conforme ClCr.", "Insuficiencia renal: ajustar dosis según ClCr.")
              : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade ao milnaciprano", "Hipersensibilidad al milnaciprán"),
            t(lang, "Uso concomitante com IMAO", "Uso concomitante con IMAO"),
            t(lang, "Hipertensão arterial não controlada", "Hipertensión arterial no controlada"),
            t(lang, "Doença renal terminal", "Enfermedad renal terminal"),
            t(lang, "Transtorno bipolar sem estabilizador do humor", "Trastorno bipolar sin estabilizador del ánimo")
          ],
          interactions: [
            t(lang, "IMAO: risco de síndrome serotoninérgica", "IMAO: riesgo de síndrome serotoninérgico"),
            t(lang, "Tramadol, linezolida, triptanos, lítio: risco serotoninérgico", "Tramadol, linezolid, triptanes, litio: riesgo serotoninérgico"),
            t(lang, "AINEs, AAS, anticoagulantes: maior risco de sangramento", "AINEs, AAS, anticoagulantes: mayor riesgo de sangrado"),
            t(lang, "Fármacos que aumentam pressão arterial ou frequência cardíaca: maior risco cardiovascular", "Fármacos que aumentan presión arterial o frecuencia cardíaca: mayor riesgo cardiovascular"),
            t(lang, "Digoxina EV: possível aumento de efeitos hemodinâmicos; evitar associação quando possível", "Digoxina IV: posible aumento de efectos hemodinámicos; evitar asociación cuando sea posible"),
            t(lang, "Álcool e depressores do SNC: podem piorar sedação e tontura", "Alcohol y depresores del SNC: pueden empeorar sedación y mareos")
          ],
          alerts: [
            t(lang, "Monitorar pressão arterial e frequência cardíaca antes e durante o tratamento.", "Monitorizar presión arterial y frecuencia cardíaca antes y durante el tratamiento."),
            t(lang, "Ajustar dose em insuficiência renal.", "Ajustar dosis en insuficiencia renal."),
            t(lang, "Evitar em hipertensão não controlada.", "Evitar en hipertensión no controlada."),
            t(lang, "Reduzir gradualmente para evitar sintomas de retirada.", "Reducir gradualmente para evitar síntomas de retirada."),
            t(lang, "Investigar história de mania/hipomania antes de iniciar.", "Investigar historia de manía/hipomanía antes de iniciar."),
            t(lang, "Usar cautela em glaucoma de ângulo fechado, retenção urinária ou doença cardiovascular.", "Usar con cautela en glaucoma de ángulo cerrado, retención urinaria o enfermedad cardiovascular.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Milnacipran Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    }

  });

  Object.assign(window.PSICOFARMACOS_DRUGS_DB, {

    levomilnaciprano: {
      name: { pt: "Levomilnaciprano", es: "Levomilnaciprán" },
      category: "antidepressivo",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = clcr < 60;

        return {
          name: t(lang, "Levomilnaciprano", "Levomilnaciprán"),
          class: t(lang, "Antidepressivo ISRN", "Antidepresivo IRSN"),
          category: "antidepressivo",
          commercialNames: {
            br: ["Fetzima", "Levomilnaciprano"],
            ar: ["Fetzima", "Levomilnaciprán"]
          },
          presentation: [
            t(lang, "Cápsula de liberação prolongada 20 mg", "Cápsula de liberación prolongada 20 mg"),
            t(lang, "Cápsula de liberação prolongada 40 mg", "Cápsula de liberación prolongada 40 mg"),
            t(lang, "Cápsula de liberação prolongada 80 mg", "Cápsula de liberación prolongada 80 mg"),
            t(lang, "Cápsula de liberação prolongada 120 mg", "Cápsula de liberación prolongada 120 mg")
          ],
          dose: {
            adulto: t(lang, "Depressão: iniciar 20 mg VO 1x/dia por 2 dias; depois 40 mg VO 1x/dia.", "Depresión: iniciar 20 mg VO 1 vez/día por 2 días; luego 40 mg VO 1 vez/día."),
            titulacao: t(lang, "Pode aumentar em 40 mg a cada 2 ou mais dias, conforme resposta e tolerabilidade.", "Puede aumentarse en 40 mg cada 2 o más días, según respuesta y tolerabilidad."),
            maxDose: t(lang, "Dose máxima usual: 120 mg/dia.", "Dosis máxima habitual: 120 mg/día.")
          },
          doseKg: {
            standard: t(lang, "Não se utiliza cálculo rotineiro por kg em adultos.", "No se utiliza cálculo rutinario por kg en adultos."),
            pediatric: t(lang, "Pediatria: não recomendado como uso rotineiro; considerar apenas com especialista.", "Pediatría: no recomendado como uso rutinario; considerar solo con especialista."),
            maxDose: t(lang, "120 mg/dia", "120 mg/día")
          },
          indications: [
            t(lang, "Transtorno depressivo maior", "Trastorno depresivo mayor"),
            t(lang, "Depressão com fadiga, apatia ou baixa energia", "Depresión con fatiga, apatía o baja energía"),
            t(lang, "Depressão com lentificação psicomotora", "Depresión con enlentecimiento psicomotor"),
            t(lang, "Depressão com prejuízo funcional importante", "Depresión con deterioro funcional importante"),
            t(lang, "Depressão com sintomas cognitivos subjetivos", "Depresión con síntomas cognitivos subjetivos"),
            t(lang, "Alternativa em resposta insuficiente ou intolerância a ISRS", "Alternativa en respuesta insuficiente o intolerancia a ISRS"),
            t(lang, "Alternativa em depressão com sintomas dolorosos selecionados", "Alternativa en depresión con síntomas dolorosos seleccionados")
          ],
          renalAdjustment: insuficienciaRenal
            ? t(lang, "Insuficiência renal: ajustar conforme ClCr; se ClCr 30–59, máximo 80 mg/dia; se ClCr 15–29, máximo 40 mg/dia; evitar em doença renal terminal.", "Insuficiencia renal: ajustar según ClCr; si ClCr 30–59, máximo 80 mg/día; si ClCr 15–29, máximo 40 mg/día; evitar en enfermedad renal terminal.")
            : t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia
            ? t(lang, "Hepatopatia: geralmente não requer ajuste em comprometimento leve/moderado/grave, mas titular com cautela.", "Hepatopatía: generalmente no requiere ajuste en compromiso leve/moderado/grave, pero titular con cautela.")
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Enantiômero ativo do milnaciprano; inibe recaptação de serotonina e noradrenalina, com efeito noradrenérgico relativamente predominante.", "Enantiómero activo del milnaciprán; inhibe recaptación de serotonina y noradrenalina, con efecto noradrenérgico relativamente predominante."),
          onset: t(lang, "Início de melhora pode ocorrer em 2–4 semanas; resposta plena geralmente avaliada após 6–8 semanas.", "El inicio de mejoría puede ocurrir en 2–4 semanas; respuesta plena generalmente se evalúa tras 6–8 semanas."),
          halfLife: t(lang, "Vida média aproximada: 12 horas.", "Vida media aproximada: 12 horas."),
          commonAdverseEffects: [
            t(lang, "Náuseas", "Náuseas"),
            t(lang, "Constipação", "Estreñimiento"),
            t(lang, "Sudorese", "Sudoración"),
            t(lang, "Aumento da frequência cardíaca", "Aumento de la frecuencia cardíaca"),
            t(lang, "Aumento da pressão arterial", "Aumento de la presión arterial"),
            t(lang, "Boca seca", "Boca seca"),
            t(lang, "Disfunção sexual", "Disfunción sexual"),
            t(lang, "Insônia", "Insomnio")
          ],
          dangerousAdverseEffects: [
            t(lang, "Hipertensão arterial", "Hipertensión arterial"),
            t(lang, "Taquicardia", "Taquicardia"),
            t(lang, "Síndrome serotoninérgica", "Síndrome serotoninérgico"),
            t(lang, "Síndrome de descontinuação se suspensão abrupta", "Síndrome de discontinuación si suspensión brusca"),
            t(lang, "Ideação suicida em jovens no início do tratamento", "Ideación suicida en jóvenes al inicio del tratamiento"),
            t(lang, "Virada maníaca/hipomaníaca", "Viraje maníaco/hipomaníaco"),
            t(lang, "Hiponatremia/SIADH", "Hiponatremia/SIADH"),
            t(lang, "Retenção urinária em predispostos", "Retención urinaria en predispuestos")
          ],
          risksByPatient: [
            idade < 25
              ? t(lang, "Jovem: monitorar ideação suicida no início e após ajustes de dose.", "Joven: monitorizar ideación suicida al inicio y tras ajustes de dosis.")
              : null,
            idade >= 65
              ? t(lang, "Idoso: maior risco de hipertensão, taquicardia, hiponatremia, tontura e quedas.", "Adulto mayor: mayor riesgo de hipertensión, taquicardia, hiponatremia, mareos y caídas.")
              : null,
            gestante
              ? t(lang, "Gestação: dados limitados; avaliar risco-benefício e preferir opções com maior experiência quando possível.", "Embarazo: datos limitados; evaluar riesgo-beneficio y preferir opciones con mayor experiencia cuando sea posible.")
              : null,
            lactante
              ? t(lang, "Lactação: dados limitados; considerar alternativa mais estudada ou monitorar lactente.", "Lactancia: datos limitados; considerar alternativa más estudiada o monitorizar lactante.")
              : null,
            hepatopatia
              ? t(lang, "Hepatopatia: titular com cautela e monitorar tolerabilidade.", "Hepatopatía: titular con cautela y monitorizar tolerabilidad.")
              : null,
            insuficienciaRenal
              ? t(lang, "Insuficiência renal: ajustar dose conforme ClCr.", "Insuficiencia renal: ajustar dosis según ClCr.")
              : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade ao levomilnaciprano", "Hipersensibilidad al levomilnaciprán"),
            t(lang, "Uso concomitante com IMAO", "Uso concomitante con IMAO"),
            t(lang, "Hipertensão arterial não controlada", "Hipertensión arterial no controlada"),
            t(lang, "Doença renal terminal", "Enfermedad renal terminal"),
            t(lang, "Glaucoma de ângulo fechado não controlado", "Glaucoma de ángulo cerrado no controlado"),
            t(lang, "Transtorno bipolar sem estabilizador do humor", "Trastorno bipolar sin estabilizador del ánimo")
          ],
          interactions: [
            t(lang, "IMAO: risco de síndrome serotoninérgica", "IMAO: riesgo de síndrome serotoninérgico"),
            t(lang, "Tramadol, linezolida, triptanos, lítio: risco serotoninérgico", "Tramadol, linezolid, triptanes, litio: riesgo serotoninérgico"),
            t(lang, "AINEs, AAS, anticoagulantes: maior risco de sangramento", "AINEs, AAS, anticoagulantes: mayor riesgo de sangrado"),
            t(lang, "Inibidores fortes de CYP3A4: podem aumentar níveis de levomilnaciprano", "Inhibidores fuertes de CYP3A4: pueden aumentar niveles de levomilnaciprán"),
            t(lang, "Fármacos que aumentam pressão arterial ou frequência cardíaca: maior risco cardiovascular", "Fármacos que aumentan presión arterial o frecuencia cardíaca: mayor riesgo cardiovascular"),
            t(lang, "Álcool e depressores do SNC: podem piorar tontura e prejuízo psicomotor", "Alcohol y depresores del SNC: pueden empeorar mareos y deterioro psicomotor")
          ],
          alerts: [
            t(lang, "Monitorar pressão arterial e frequência cardíaca antes e durante o tratamento.", "Monitorizar presión arterial y frecuencia cardíaca antes y durante el tratamiento."),
            t(lang, "Ajustar dose em insuficiência renal moderada ou grave.", "Ajustar dosis en insuficiencia renal moderada o grave."),
            t(lang, "Não partir, mastigar ou triturar cápsulas de liberação prolongada.", "No partir, masticar ni triturar cápsulas de liberación prolongada."),
            t(lang, "Reduzir gradualmente para evitar sintomas de retirada.", "Reducir gradualmente para evitar síntomas de retirada."),
            t(lang, "Investigar história de mania/hipomania antes de iniciar.", "Investigar historia de manía/hipomanía antes de iniciar."),
            t(lang, "Usar cautela em retenção urinária, glaucoma de ângulo fechado e doença cardiovascular.", "Usar con cautela en retención urinaria, glaucoma de ángulo cerrado y enfermedad cardiovascular.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Levomilnacipran Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    amitriptilina: {
      name: { pt: "Amitriptilina", es: "Amitriptilina" },
      category: "antidepressivo",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = clcr < 60;

        return {
          name: t(lang, "Amitriptilina", "Amitriptilina"),
          class: t(lang, "Antidepressivo tricíclico", "Antidepresivo tricíclico"),
          category: "antidepressivo",
          commercialNames: {
            br: ["Tryptanol", "Amytril", "Amitriptilina EMS", "Amitriptilina Neo Química"],
            ar: ["Tryptanol", "Amitriptilina Larjan", "Amitriptilina Northia", "Amitriptilina Klonal"]
          },
          presentation: [
            t(lang, "Comprimido 10 mg", "Comprimido 10 mg"),
            t(lang, "Comprimido 25 mg", "Comprimido 25 mg"),
            t(lang, "Comprimido 50 mg", "Comprimido 50 mg"),
            t(lang, "Comprimido 75 mg", "Comprimido 75 mg")
          ],
          dose: {
            adulto: t(lang, "Depressão: iniciar 25 mg VO à noite; titular gradualmente. Dose usual 75–150 mg/dia.", "Depresión: iniciar 25 mg VO por la noche; titular gradualmente. Dosis habitual 75–150 mg/día."),
            dorSonoProfilaxia: t(lang, "Dor crônica, enxaqueca ou insônia: iniciar 10–25 mg VO à noite; titular conforme resposta.", "Dolor crónico, migraña o insomnio: iniciar 10–25 mg VO por la noche; titular según respuesta."),
            maxDose: t(lang, "Dose máxima usual ambulatorial: 150 mg/dia; doses maiores apenas com supervisão especializada.", "Dosis máxima habitual ambulatoria: 150 mg/día; dosis mayores solo con supervisión especializada.")
          },
          doseKg: {
            standard: t(lang, "Não se utiliza cálculo rotineiro por kg em adultos.", "No se utiliza cálculo rutinario por kg en adultos."),
            pediatric: t(lang, "Pediatria: uso especializado; pode ser usada em baixa dose para enurese ou dor, conforme protocolo.", "Pediatría: uso especializado; puede usarse en dosis baja para enuresis o dolor, según protocolo."),
            maxDose: t(lang, "150 mg/dia na prática ambulatorial", "150 mg/día en la práctica ambulatoria")
          },
          indications: [
            t(lang, "Transtorno depressivo maior", "Trastorno depresivo mayor"),
            t(lang, "Dor neuropática", "Dolor neuropático"),
            t(lang, "Fibromialgia", "Fibromialgia"),
            t(lang, "Profilaxia de enxaqueca", "Profilaxis de migraña"),
            t(lang, "Insônia associada a depressão ou dor crônica", "Insomnio asociado a depresión o dolor crónico"),
            t(lang, "Cefaleia tensional crônica", "Cefalea tensional crónica"),
            t(lang, "Síndrome do intestino irritável com dor", "Síndrome de intestino irritable con dolor"),
            t(lang, "Enurese noturna em casos selecionados", "Enuresis nocturna en casos seleccionados")
          ],
          renalAdjustment: insuficienciaRenal
            ? t(lang, "Geralmente não requer ajuste renal, mas usar cautela por maior risco de efeitos adversos em pacientes frágeis.", "Generalmente no requiere ajuste renal, pero usar con cautela por mayor riesgo de efectos adversos en pacientes frágiles.")
            : t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia
            ? t(lang, "Hepatopatia: iniciar com dose menor, titular lentamente e monitorar sedação/toxicidade.", "Hepatopatía: iniciar con dosis menor, titular lentamente y monitorizar sedación/toxicidad.")
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Inibe a recaptação de serotonina e noradrenalina; também bloqueia receptores muscarínicos, H1 e alfa-1, explicando sedação, hipotensão e efeitos anticolinérgicos.", "Inhibe la recaptación de serotonina y noradrenalina; también bloquea receptores muscarínicos, H1 y alfa-1, explicando sedación, hipotensión y efectos anticolinérgicos."),
          onset: t(lang, "Efeito analgésico pode surgir em 1–2 semanas; efeito antidepressivo geralmente em 2–4 semanas, com resposta plena em 6–8 semanas.", "El efecto analgésico puede aparecer en 1–2 semanas; efecto antidepresivo generalmente en 2–4 semanas, con respuesta plena en 6–8 semanas."),
          halfLife: t(lang, "Vida média aproximada: 10–50 horas; possui metabólito ativo nortriptilina.", "Vida media aproximada: 10–50 horas; posee metabolito activo nortriptilina."),
          commonAdverseEffects: [
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Boca seca", "Boca seca"),
            t(lang, "Constipação", "Estreñimiento"),
            t(lang, "Visão turva", "Visión borrosa"),
            t(lang, "Ganho de peso", "Aumento de peso"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Hipotensão ortostática", "Hipotensión ortostática"),
            t(lang, "Retenção urinária", "Retención urinaria")
          ],
          dangerousAdverseEffects: [
            t(lang, "Cardiotoxicidade em superdose", "Cardiotoxicidad en sobredosis"),
            t(lang, "Alargamento do QRS e prolongamento do QT", "Ensanchamiento del QRS y prolongación del QT"),
            t(lang, "Arritmias ventriculares", "Arritmias ventriculares"),
            t(lang, "Convulsões", "Convulsiones"),
            t(lang, "Delirium anticolinérgico", "Delirium anticolinérgico"),
            t(lang, "Síndrome serotoninérgica quando associada a serotoninérgicos", "Síndrome serotoninérgico cuando se asocia a serotoninérgicos"),
            t(lang, "Virada maníaca/hipomaníaca", "Viraje maníaco/hipomaníaco"),
            t(lang, "Ideação suicida em jovens no início do tratamento", "Ideación suicida en jóvenes al inicio del tratamiento")
          ],
          risksByPatient: [
            idade < 25
              ? t(lang, "Jovem: monitorar ideação suicida no início e após ajustes de dose.", "Joven: monitorizar ideación suicida al inicio y tras ajustes de dosis.")
              : null,
            idade >= 65
              ? t(lang, "Idoso: evitar quando possível; alto risco anticolinérgico, quedas, confusão, retenção urinária e arritmias.", "Adulto mayor: evitar cuando sea posible; alto riesgo anticolinérgico, caídas, confusión, retención urinaria y arritmias.")
              : null,
            gestante
              ? t(lang, "Gestação: avaliar risco-benefício; evitar automedicação e monitorar se uso no fim da gestação.", "Embarazo: evaluar riesgo-beneficio; evitar automedicación y monitorizar si se usa al final del embarazo.")
              : null,
            lactante
              ? t(lang, "Lactação: monitorar lactente para sedação, dificuldade alimentar ou irritabilidade.", "Lactancia: monitorizar lactante por sedación, dificultad alimentaria o irritabilidad.")
              : null,
            hepatopatia
              ? t(lang, "Hepatopatia: maior risco de acúmulo e sedação; reduzir dose.", "Hepatopatía: mayor riesgo de acumulación y sedación; reducir dosis.")
              : null,
            insuficienciaRenal
              ? t(lang, "Insuficiência renal: geralmente sem ajuste, mas monitorar tolerabilidade.", "Insuficiencia renal: generalmente sin ajuste, pero monitorizar tolerabilidad.")
              : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade à amitriptilina ou a tricíclicos", "Hipersensibilidad a amitriptilina o tricíclicos"),
            t(lang, "Uso concomitante com IMAO", "Uso concomitante con IMAO"),
            t(lang, "Fase aguda de recuperação pós-infarto do miocárdio", "Fase aguda de recuperación postinfarto de miocardio"),
            t(lang, "Arritmias graves ou bloqueios de condução significativos", "Arritmias graves o bloqueos de conducción significativos"),
            t(lang, "Glaucoma de ângulo fechado não controlado", "Glaucoma de ángulo cerrado no controlado"),
            t(lang, "Retenção urinária importante ou hiperplasia prostática grave", "Retención urinaria importante o hiperplasia prostática grave"),
            t(lang, "Transtorno bipolar sem estabilizador do humor", "Trastorno bipolar sin estabilizador del ánimo")
          ],
          interactions: [
            t(lang, "IMAO: risco de síndrome serotoninérgica e crise hipertensiva", "IMAO: riesgo de síndrome serotoninérgico y crisis hipertensiva"),
            t(lang, "ISRS/ISRN, tramadol, linezolida, triptanos, lítio: risco serotoninérgico", "ISRS/IRSN, tramadol, linezolid, triptanes, litio: riesgo serotoninérgico"),
            t(lang, "Álcool, benzodiazepínicos e opioides: maior sedação e depressão do SNC", "Alcohol, benzodiazepinas y opioides: mayor sedación y depresión del SNC"),
            t(lang, "Antiarrítmicos e fármacos que prolongam QT: maior risco de arritmia", "Antiarrítmicos y fármacos que prolongan QT: mayor riesgo de arritmia"),
            t(lang, "Anticolinérgicos: maior risco de retenção urinária, constipação e delirium", "Anticolinérgicos: mayor riesgo de retención urinaria, estreñimiento y delirium"),
            t(lang, "Inibidores de CYP2D6: podem aumentar níveis de amitriptilina", "Inhibidores de CYP2D6: pueden aumentar niveles de amitriptilina")
          ],
          alerts: [
            t(lang, "Alto risco em superdose: pode causar arritmia fatal; evitar grandes quantidades em pacientes com risco suicida.", "Alto riesgo en sobredosis: puede causar arritmia fatal; evitar grandes cantidades en pacientes con riesgo suicida."),
            t(lang, "Considerar ECG antes de iniciar em cardiopatas, idosos ou doses altas.", "Considerar ECG antes de iniciar en cardiópatas, adultos mayores o dosis altas."),
            t(lang, "Evitar em idosos quando possível pelo alto perfil anticolinérgico.", "Evitar en adultos mayores cuando sea posible por alto perfil anticolinérgico."),
            t(lang, "Usar à noite devido à sedação.", "Usar por la noche debido a la sedación."),
            t(lang, "Não suspender abruptamente; reduzir gradualmente.", "No suspender abruptamente; reducir gradualmente."),
            t(lang, "Investigar história de mania/hipomania antes de iniciar.", "Investigar historia de manía/hipomanía antes de iniciar.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Amitriptyline Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    }

  });

  Object.assign(window.PSICOFARMACOS_DRUGS_DB, {

    nortriptilina: {
      name: { pt: "Nortriptilina", es: "Nortriptilina" },
      category: "antidepressivo",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = clcr < 60;

        return {
          name: t(lang, "Nortriptilina", "Nortriptilina"),
          class: t(lang, "Antidepressivo tricíclico", "Antidepresivo tricíclico"),
          category: "antidepressivo",
          commercialNames: {
            br: ["Pamelor", "Nortriptilina EMS", "Nortriptilina Eurofarma"],
            ar: ["Nortriptilina", "Nortriptilina Northia", "Nortriptilina Klonal"]
          },
          presentation: [
            t(lang, "Cápsula 10 mg", "Cápsula 10 mg"),
            t(lang, "Cápsula 25 mg", "Cápsula 25 mg"),
            t(lang, "Cápsula 50 mg", "Cápsula 50 mg"),
            t(lang, "Cápsula 75 mg", "Cápsula 75 mg"),
            t(lang, "Solução oral 10 mg/5 mL", "Solución oral 10 mg/5 mL")
          ],
          dose: {
            adulto: t(lang, "Depressão: iniciar 25 mg VO à noite ou 25 mg 2–3x/dia; usual 50–100 mg/dia.", "Depresión: iniciar 25 mg VO por la noche o 25 mg 2–3 veces/día; habitual 50–100 mg/día."),
            dorNeuropaticaProfilaxia: t(lang, "Dor neuropática/enxaqueca: iniciar 10–25 mg VO à noite; titular lentamente.", "Dolor neuropático/migraña: iniciar 10–25 mg VO por la noche; titular lentamente."),
            maxDose: t(lang, "Dose máxima usual: 150 mg/dia; monitorar níveis plasmáticos se >100 mg/dia.", "Dosis máxima habitual: 150 mg/día; monitorizar niveles plasmáticos si >100 mg/día.")
          },
          doseKg: {
            standard: t(lang, "Não se utiliza cálculo rotineiro por kg em adultos.", "No se utiliza cálculo rutinario por kg en adultos."),
            pediatric: t(lang, "Adolescentes: uso especializado; geralmente 30–50 mg/dia em doses divididas ou dose única, conforme indicação.", "Adolescentes: uso especializado; generalmente 30–50 mg/día en dosis divididas o dosis única, según indicación."),
            maxDose: t(lang, "150 mg/dia", "150 mg/día")
          },
          indications: [
            t(lang, "Transtorno depressivo maior", "Trastorno depresivo mayor"),
            t(lang, "Dor neuropática", "Dolor neuropático"),
            t(lang, "Profilaxia de enxaqueca", "Profilaxis de migraña"),
            t(lang, "Fibromialgia", "Fibromialgia"),
            t(lang, "Cefaleia tensional crônica", "Cefalea tensional crónica"),
            t(lang, "Insônia associada a depressão ou dor crônica", "Insomnio asociado a depresión o dolor crónico"),
            t(lang, "Síndrome do intestino irritável com dor", "Síndrome de intestino irritable con dolor"),
            t(lang, "Alternativa à amitriptilina quando se busca menor sedação/efeito anticolinérgico", "Alternativa a amitriptilina cuando se busca menor sedación/efecto anticolinérgico")
          ],
          renalAdjustment: insuficienciaRenal
            ? t(lang, "Geralmente não requer ajuste renal, mas monitorar eventos adversos em pacientes frágeis.", "Generalmente no requiere ajuste renal, pero monitorizar eventos adversos en pacientes frágiles.")
            : t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia
            ? t(lang, "Hepatopatia: iniciar com dose menor, titular lentamente e considerar monitoramento de níveis plasmáticos.", "Hepatopatía: iniciar con dosis menor, titular lentamente y considerar monitorización de niveles plasmáticos.")
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Inibe principalmente a recaptação de noradrenalina e também serotonina; possui menor efeito anticolinérgico e sedativo que amitriptilina, mas mantém risco cardiovascular dos tricíclicos.", "Inhibe principalmente la recaptación de noradrenalina y también serotonina; posee menor efecto anticolinérgico y sedativo que amitriptilina, pero mantiene riesgo cardiovascular de los tricíclicos."),
          onset: t(lang, "Efeito analgésico pode surgir em 1–2 semanas; efeito antidepressivo geralmente em 2–4 semanas, com resposta plena em 6–8 semanas.", "El efecto analgésico puede aparecer en 1–2 semanas; efecto antidepresivo generalmente en 2–4 semanas, con respuesta plena en 6–8 semanas."),
          halfLife: t(lang, "Vida média aproximada: 18–44 horas.", "Vida media aproximada: 18–44 horas."),
          commonAdverseEffects: [
            t(lang, "Boca seca", "Boca seca"),
            t(lang, "Constipação", "Estreñimiento"),
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Visão turva", "Visión borrosa"),
            t(lang, "Ganho de peso", "Aumento de peso"),
            t(lang, "Hipotensão ortostática", "Hipotensión ortostática"),
            t(lang, "Retenção urinária", "Retención urinaria")
          ],
          dangerousAdverseEffects: [
            t(lang, "Cardiotoxicidade em superdose", "Cardiotoxicidad en sobredosis"),
            t(lang, "Alargamento do QRS e prolongamento do QT", "Ensanchamiento del QRS y prolongación del QT"),
            t(lang, "Arritmias ventriculares", "Arritmias ventriculares"),
            t(lang, "Convulsões", "Convulsiones"),
            t(lang, "Delirium anticolinérgico", "Delirium anticolinérgico"),
            t(lang, "Síndrome serotoninérgica quando associada a serotoninérgicos", "Síndrome serotoninérgico cuando se asocia a serotoninérgicos"),
            t(lang, "Virada maníaca/hipomaníaca", "Viraje maníaco/hipomaníaco"),
            t(lang, "Ideação suicida em jovens no início do tratamento", "Ideación suicida en jóvenes al inicio del tratamiento")
          ],
          risksByPatient: [
            idade < 25
              ? t(lang, "Jovem: monitorar ideação suicida no início e após ajustes de dose.", "Joven: monitorizar ideación suicida al inicio y tras ajustes de dosis.")
              : null,
            idade >= 65
              ? t(lang, "Idoso: usar com cautela; risco de quedas, confusão, hipotensão, retenção urinária e arritmias.", "Adulto mayor: usar con cautela; riesgo de caídas, confusión, hipotensión, retención urinaria y arritmias.")
              : null,
            gestante
              ? t(lang, "Gestação: avaliar risco-benefício e preferir acompanhamento especializado.", "Embarazo: evaluar riesgo-beneficio y preferir seguimiento especializado.")
              : null,
            lactante
              ? t(lang, "Lactação: monitorar lactente para sedação, irritabilidade ou dificuldade alimentar.", "Lactancia: monitorizar lactante por sedación, irritabilidad o dificultad alimentaria.")
              : null,
            hepatopatia
              ? t(lang, "Hepatopatia: reduzir dose inicial e considerar nível plasmático.", "Hepatopatía: reducir dosis inicial y considerar nivel plasmático.")
              : null,
            insuficienciaRenal
              ? t(lang, "Insuficiência renal: geralmente sem ajuste, mas monitorar tolerabilidade.", "Insuficiencia renal: generalmente sin ajuste, pero monitorizar tolerabilidad.")
              : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade à nortriptilina ou a tricíclicos", "Hipersensibilidad a nortriptilina o tricíclicos"),
            t(lang, "Uso concomitante com IMAO", "Uso concomitante con IMAO"),
            t(lang, "Fase aguda de recuperação pós-infarto do miocárdio", "Fase aguda de recuperación postinfarto de miocardio"),
            t(lang, "Arritmias graves ou bloqueios de condução significativos", "Arritmias graves o bloqueos de conducción significativos"),
            t(lang, "Glaucoma de ângulo fechado não controlado", "Glaucoma de ángulo cerrado no controlado"),
            t(lang, "Retenção urinária importante ou hiperplasia prostática grave", "Retención urinaria importante o hiperplasia prostática grave"),
            t(lang, "Transtorno bipolar sem estabilizador do humor", "Trastorno bipolar sin estabilizador del ánimo")
          ],
          interactions: [
            t(lang, "IMAO: contraindicado pelo risco de síndrome serotoninérgica", "IMAO: contraindicado por riesgo de síndrome serotoninérgico"),
            t(lang, "ISRS/ISRN, tramadol, linezolida, triptanos, lítio: risco serotoninérgico", "ISRS/IRSN, tramadol, linezolid, triptanes, litio: riesgo serotoninérgico"),
            t(lang, "Álcool, benzodiazepínicos e opioides: maior sedação e depressão do SNC", "Alcohol, benzodiazepinas y opioides: mayor sedación y depresión del SNC"),
            t(lang, "Antiarrítmicos e fármacos que prolongam QT: maior risco de arritmia", "Antiarrítmicos y fármacos que prolongan QT: mayor riesgo de arritmia"),
            t(lang, "Anticolinérgicos: maior risco de constipação, retenção urinária e delirium", "Anticolinérgicos: mayor riesgo de estreñimiento, retención urinaria y delirium"),
            t(lang, "Inibidores de CYP2D6: podem aumentar níveis de nortriptilina", "Inhibidores de CYP2D6: pueden aumentar niveles de nortriptilina")
          ],
          alerts: [
            t(lang, "Monitorar níveis plasmáticos quando dose >100 mg/dia; faixa terapêutica usual 50–150 ng/mL.", "Monitorizar niveles plasmáticos cuando dosis >100 mg/día; rango terapéutico habitual 50–150 ng/mL."),
            t(lang, "Alto risco em superdose: evitar grandes quantidades em pacientes com risco suicida.", "Alto riesgo en sobredosis: evitar grandes cantidades en pacientes con riesgo suicida."),
            t(lang, "Considerar ECG antes de iniciar em cardiopatas, idosos ou doses altas.", "Considerar ECG antes de iniciar en cardiópatas, adultos mayores o dosis altas."),
            t(lang, "Tem menor sedação que amitriptilina, mas ainda exige cautela cardiovascular.", "Tiene menor sedación que amitriptilina, pero aún exige cautela cardiovascular."),
            t(lang, "Não suspender abruptamente; reduzir gradualmente.", "No suspender abruptamente; reducir gradualmente."),
            t(lang, "Investigar história de mania/hipomania antes de iniciar.", "Investigar historia de manía/hipomanía antes de iniciar.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Nortriptyline Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    imipramina: {
      name: { pt: "Imipramina", es: "Imipramina" },
      category: "antidepressivo",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = clcr < 60;

        return {
          name: t(lang, "Imipramina", "Imipramina"),
          class: t(lang, "Antidepressivo tricíclico", "Antidepresivo tricíclico"),
          category: "antidepressivo",
          commercialNames: {
            br: ["Tofranil", "Imipra", "Imipramina EMS"],
            ar: ["Tofranil", "Imipramina Northia", "Imipramina Klonal"]
          },
          presentation: [
            t(lang, "Comprimido 10 mg", "Comprimido 10 mg"),
            t(lang, "Comprimido 25 mg", "Comprimido 25 mg"),
            t(lang, "Comprimido 50 mg", "Comprimido 50 mg"),
            t(lang, "Drágea 75 mg", "Gragea 75 mg")
          ],
          dose: {
            adulto: t(lang, "Depressão: iniciar 25–50 mg/dia; titular gradualmente. Dose usual 75–150 mg/dia.", "Depresión: iniciar 25–50 mg/día; titular gradualmente. Dosis habitual 75–150 mg/día."),
            enurese: t(lang, "Enurese noturna: 10–75 mg VO ao deitar, conforme idade e resposta.", "Enuresis nocturna: 10–75 mg VO al acostarse, según edad y respuesta."),
            maxDose: t(lang, "Dose máxima usual: 200 mg/dia ambulatorial; até 300 mg/dia em pacientes hospitalizados.", "Dosis máxima habitual: 200 mg/día ambulatoria; hasta 300 mg/día en pacientes hospitalizados.")
          },
          doseKg: {
            standard: t(lang, "Não se utiliza cálculo rotineiro por kg em adultos.", "No se utiliza cálculo rutinario por kg en adultos."),
            pediatric: t(lang, "Enurese pediátrica: aproximadamente 1–2,5 mg/kg/dia conforme protocolo.", "Enuresis pediátrica: aproximadamente 1–2,5 mg/kg/día según protocolo."),
            maxDose: t(lang, "200–300 mg/dia", "200–300 mg/día")
          },
          indications: [
            t(lang, "Transtorno depressivo maior", "Trastorno depresivo mayor"),
            t(lang, "Transtorno do pânico", "Trastorno de pánico"),
            t(lang, "Transtorno de ansiedade generalizada", "Trastorno de ansiedad generalizada"),
            t(lang, "Enurese noturna", "Enuresis nocturna"),
            t(lang, "Dor neuropática", "Dolor neuropático"),
            t(lang, "Síndrome do intestino irritável com dor", "Síndrome de intestino irritable con dolor"),
            t(lang, "Depressão resistente em casos selecionados", "Depresión resistente en casos seleccionados")
          ],
          renalAdjustment: insuficienciaRenal
            ? t(lang, "Geralmente não requer ajuste específico, mas usar doses menores e monitorar toxicidade.", "Generalmente no requiere ajuste específico, pero usar dosis menores y monitorizar toxicidad.")
            : t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia
            ? t(lang, "Hepatopatia: iniciar com dose baixa e titular lentamente.", "Hepatopatía: iniciar con dosis baja y titular lentamente.")
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Inibe a recaptação de serotonina e noradrenalina, além de bloquear receptores muscarínicos, H1 e alfa-1.", "Inhibe la recaptación de serotonina y noradrenalina, además de bloquear receptores muscarínicos, H1 y alfa-1."),
          onset: t(lang, "Efeito antidepressivo geralmente em 2–4 semanas; resposta plena em 6–8 semanas.", "Efecto antidepresivo generalmente en 2–4 semanas; respuesta plena en 6–8 semanas."),
          halfLife: t(lang, "Vida média aproximada: 8–20 horas; metabólito ativo desipramina.", "Vida media aproximada: 8–20 horas; metabolito activo desipramina."),
          commonAdverseEffects: [
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Boca seca", "Boca seca"),
            t(lang, "Constipação", "Estreñimiento"),
            t(lang, "Visão turva", "Visión borrosa"),
            t(lang, "Sudorese", "Sudoración"),
            t(lang, "Hipotensão ortostática", "Hipotensión ortostática"),
            t(lang, "Ganho de peso", "Aumento de peso")
          ],
          dangerousAdverseEffects: [
            t(lang, "Arritmias cardíacas", "Arritmias cardíacas"),
            t(lang, "Alargamento do QRS e QT", "Ensanchamiento del QRS y QT"),
            t(lang, "Cardiotoxicidade em superdose", "Cardiotoxicidad en sobredosis"),
            t(lang, "Convulsões", "Convulsiones"),
            t(lang, "Delirium anticolinérgico", "Delirium anticolinérgico"),
            t(lang, "Virada maníaca", "Viraje maníaco"),
            t(lang, "Síndrome serotoninérgica", "Síndrome serotoninérgico")
          ],
          risksByPatient: [
            idade >= 65
              ? t(lang, "Idoso: alto risco de confusão, quedas, hipotensão e retenção urinária.", "Adulto mayor: alto riesgo de confusión, caídas, hipotensión y retención urinaria.")
              : null,
            gestante
              ? t(lang, "Gestação: utilizar apenas após avaliação especializada.", "Embarazo: utilizar solo tras evaluación especializada.")
              : null,
            hepatopatia
              ? t(lang, "Hepatopatia: maior risco de acúmulo e toxicidade.", "Hepatopatía: mayor riesgo de acumulación y toxicidad.")
              : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Uso concomitante com IMAO", "Uso concomitante con IMAO"),
            t(lang, "Infarto agudo recente", "Infarto agudo reciente"),
            t(lang, "Arritmias graves", "Arritmias graves"),
            t(lang, "Glaucoma de ângulo fechado", "Glaucoma de ángulo cerrado"),
            t(lang, "Retenção urinária importante", "Retención urinaria importante")
          ],
          interactions: [
            t(lang, "IMAO: síndrome serotoninérgica e crise hipertensiva", "IMAO: síndrome serotoninérgico y crisis hipertensiva"),
            t(lang, "ISRS: risco serotoninérgico", "ISRS: riesgo serotoninérgico"),
            t(lang, "Álcool: maior sedação", "Alcohol: mayor sedación"),
            t(lang, "Antiarrítmicos: risco de arritmia", "Antiarrítmicos: riesgo de arritmia"),
            t(lang, "Anticolinérgicos: risco de retenção urinária e delirium", "Anticolinérgicos: riesgo de retención urinaria y delirium")
          ],
          alerts: [
            t(lang, "Alto risco em superdose.", "Alto riesgo en sobredosis."),
            t(lang, "Considerar ECG antes do início em pacientes de risco.", "Considerar ECG antes del inicio en pacientes de riesgo."),
            t(lang, "Evitar em idosos quando possível.", "Evitar en adultos mayores cuando sea posible."),
            t(lang, "Não suspender abruptamente.", "No suspender abruptamente.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    clomipramina: {
      name: { pt: "Clomipramina", es: "Clomipramina" },
      category: "antidepressivo",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = clcr < 60;

        return {
          name: t(lang, "Clomipramina", "Clomipramina"),
          class: t(lang, "Antidepressivo tricíclico", "Antidepresivo tricíclico"),
          category: "antidepressivo",
          commercialNames: {
            br: ["Anafranil", "Clomipramina EMS", "Clomipramina Medley"],
            ar: ["Anafranil", "Clomipramina Northia", "Clomipramina Klonal"]
          },
          presentation: [
            t(lang, "Comprimido 10 mg", "Comprimido 10 mg"),
            t(lang, "Comprimido 25 mg", "Comprimido 25 mg"),
            t(lang, "Comprimido 75 mg LP", "Comprimido 75 mg LP"),
            t(lang, "Ampola 25 mg/2 mL", "Ampolla 25 mg/2 mL")
          ],
          dose: {
            adulto: t(lang, "TOC: iniciar 25 mg/dia; aumentar gradualmente até 100–250 mg/dia.", "TOC: iniciar 25 mg/día; aumentar gradualmente hasta 100–250 mg/día."),
            depressao: t(lang, "Depressão: geralmente 75–150 mg/dia.", "Depresión: generalmente 75–150 mg/día."),
            maxDose: t(lang, "Dose máxima usual: 250 mg/dia.", "Dosis máxima habitual: 250 mg/día.")
          },
          doseKg: {
            standard: t(lang, "Não se utiliza cálculo rotineiro por kg em adultos.", "No se utiliza cálculo rutinario por kg en adultos."),
            pediatric: t(lang, "TOC pediátrico: aproximadamente 1–3 mg/kg/dia conforme protocolo.", "TOC pediátrico: aproximadamente 1–3 mg/kg/día según protocolo."),
            maxDose: t(lang, "250 mg/dia", "250 mg/día")
          },
          indications: [
            t(lang, "Transtorno obsessivo-compulsivo (TOC)", "Trastorno obsesivo-compulsivo (TOC)"),
            t(lang, "Transtorno depressivo maior", "Trastorno depresivo mayor"),
            t(lang, "Transtorno do pânico", "Trastorno de pánico"),
            t(lang, "Transtorno de ansiedade generalizada", "Trastorno de ansiedad generalizada"),
            t(lang, "Cataplexia na narcolepsia", "Cataplejía en narcolepsia"),
            t(lang, "Dor neuropática", "Dolor neuropático"),
            t(lang, "Síndrome dolorosa crônica", "Síndrome doloroso crónico"),
            t(lang, "Tricotilomania e transtornos obsessivos relacionados (off-label)", "Tricotilomanía y trastornos obsesivos relacionados (off-label)")
          ],
          renalAdjustment: insuficienciaRenal
            ? t(lang, "Usar com cautela; monitorar efeitos adversos.", "Usar con cautela; monitorizar efectos adversos.")
            : t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia
            ? t(lang, "Iniciar com doses menores e titular lentamente.", "Iniciar con dosis menores y titular lentamente.")
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Potente inibidor da recaptação de serotonina entre os tricíclicos, além de bloquear receptores muscarínicos, H1 e alfa-1.", "Potente inhibidor de la recaptación de serotonina entre los tricíclicos, además de bloquear receptores muscarínicos, H1 y alfa-1."),
          onset: t(lang, "TOC pode exigir 8–12 semanas para resposta adequada; depressão geralmente melhora em 2–4 semanas.", "El TOC puede requerir 8–12 semanas para una respuesta adecuada; la depresión generalmente mejora en 2–4 semanas."),
          halfLife: t(lang, "Vida média aproximada: 19–37 horas.", "Vida media aproximada: 19–37 horas."),
          commonAdverseEffects: [
            t(lang, "Boca seca", "Boca seca"),
            t(lang, "Constipação", "Estreñimiento"),
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Sudorese", "Sudoración"),
            t(lang, "Tremor", "Temblor"),
            t(lang, "Disfunção sexual", "Disfunción sexual"),
            t(lang, "Ganho de peso", "Aumento de peso")
          ],
          dangerousAdverseEffects: [
            t(lang, "Convulsões", "Convulsiones"),
            t(lang, "Arritmias cardíacas", "Arritmias cardíacas"),
            t(lang, "Cardiotoxicidade em superdose", "Cardiotoxicidad en sobredosis"),
            t(lang, "Síndrome serotoninérgica", "Síndrome serotoninérgico"),
            t(lang, "Virada maníaca", "Viraje maníaco"),
            t(lang, "Delirium anticolinérgico", "Delirium anticolinérgico")
          ],
          risksByPatient: [
            idade >= 65
              ? t(lang, "Idoso: maior risco de hipotensão, quedas, confusão e retenção urinária.", "Adulto mayor: mayor riesgo de hipotensión, caídas, confusión y retención urinaria.")
              : null,
            gestante
              ? t(lang, "Gestação: utilizar apenas após avaliação especializada.", "Embarazo: utilizar solo tras evaluación especializada.")
              : null,
            hepatopatia
              ? t(lang, "Hepatopatia: maior risco de toxicidade.", "Hepatopatía: mayor riesgo de toxicidad.")
              : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Uso concomitante com IMAO", "Uso concomitante con IMAO"),
            t(lang, "Infarto agudo recente", "Infarto agudo reciente"),
            t(lang, "Arritmias significativas", "Arritmias significativas"),
            t(lang, "Glaucoma de ângulo fechado", "Glaucoma de ángulo cerrado"),
            t(lang, "Epilepsia não controlada", "Epilepsia no controlada")
          ],
          interactions: [
            t(lang, "IMAO: síndrome serotoninérgica e crise hipertensiva", "IMAO: síndrome serotoninérgico y crisis hipertensiva"),
            t(lang, "ISRS: risco serotoninérgico aumentado", "ISRS: riesgo serotoninérgico aumentado"),
            t(lang, "Tramadol: risco serotoninérgico", "Tramadol: riesgo serotoninérgico"),
            t(lang, "Lítio: risco serotoninérgico", "Litio: riesgo serotoninérgico"),
            t(lang, "Antiarrítmicos: risco de arritmia", "Antiarrítmicos: riesgo de arritmia"),
            t(lang, "Álcool: maior sedação e depressão do SNC", "Alcohol: mayor sedación y depresión del SNC")
          ],
          alerts: [
            t(lang, "Fármaco tricíclico mais eficaz para TOC.", "Fármaco tricíclico más eficaz para TOC."),
            t(lang, "Maior risco de convulsões em doses elevadas.", "Mayor riesgo de convulsiones en dosis elevadas."),
            t(lang, "Considerar ECG antes do tratamento.", "Considerar ECG antes del tratamiento."),
            t(lang, "Não suspender abruptamente.", "No suspender abruptamente.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Clomipramine Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    }

  });

  Object.assign(window.PSICOFARMACOS_DRUGS_DB, {

    desipramina: {
      name: { pt: "Desipramina", es: "Desipramina" },
      category: "antidepressivo",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = clcr < 60;

        return {
          name: t(lang, "Desipramina", "Desipramina"),
          class: t(lang, "Antidepressivo tricíclico", "Antidepresivo tricíclico"),
          category: "antidepressivo",
          commercialNames: {
            br: ["Pertofran", "Desipramina"],
            ar: ["Pertofran", "Desipramina Northia", "Desipramina Klonal"]
          },
          presentation: [
            t(lang, "Comprimido 10 mg", "Comprimido 10 mg"),
            t(lang, "Comprimido 25 mg", "Comprimido 25 mg"),
            t(lang, "Comprimido 50 mg", "Comprimido 50 mg"),
            t(lang, "Comprimido 75 mg", "Comprimido 75 mg"),
            t(lang, "Comprimido 100 mg", "Comprimido 100 mg")
          ],
          dose: {
            adulto: t(lang, "Depressão: iniciar 25–50 mg/dia; titular gradualmente até 100–200 mg/dia.", "Depresión: iniciar 25–50 mg/día; titular gradualmente hasta 100–200 mg/día."),
            titulacao: t(lang, "Aumentar 25–50 mg a cada 3–7 dias conforme resposta clínica.", "Aumentar 25–50 mg cada 3–7 días según respuesta clínica."),
            maxDose: t(lang, "Dose máxima usual: 300 mg/dia sob supervisão especializada.", "Dosis máxima habitual: 300 mg/día bajo supervisión especializada.")
          },
          doseKg: {
            standard: t(lang, "Não se utiliza cálculo rotineiro por kg em adultos.", "No se utiliza cálculo rutinario por kg en adultos."),
            pediatric: t(lang, "Uso pediátrico especializado; ajustar individualmente conforme protocolo.", "Uso pediátrico especializado; ajustar individualmente según protocolo."),
            maxDose: t(lang, "300 mg/dia", "300 mg/día")
          },
          indications: [
            t(lang, "Transtorno depressivo maior", "Trastorno depresivo mayor"),
            t(lang, "Depressão resistente", "Depresión resistente"),
            t(lang, "Transtorno de déficit de atenção e hiperatividade (off-label)", "Trastorno por déficit de atención e hiperactividad (off-label)"),
            t(lang, "Dor neuropática", "Dolor neuropático"),
            t(lang, "Transtorno do pânico", "Trastorno de pánico"),
            t(lang, "Enurese noturna", "Enuresis nocturna"),
            t(lang, "Depressão com fadiga e baixa energia", "Depresión con fatiga y baja energía")
          ],
          renalAdjustment: insuficienciaRenal
            ? t(lang, "Usar com cautela e monitorar sinais de toxicidade.", "Usar con cautela y monitorizar signos de toxicidad.")
            : t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia
            ? t(lang, "Iniciar com doses menores e titular lentamente.", "Iniciar con dosis menores y titular lentamente.")
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Inibe predominantemente a recaptação de noradrenalina, com menor efeito serotoninérgico e anticolinérgico que outros tricíclicos.", "Inhibe predominantemente la recaptación de noradrenalina, con menor efecto serotoninérgico y anticolinérgico que otros tricíclicos."),
          onset: t(lang, "Resposta antidepressiva geralmente observada em 2–4 semanas.", "La respuesta antidepresiva generalmente se observa en 2–4 semanas."),
          halfLife: t(lang, "Vida média aproximada: 12–54 horas.", "Vida media aproximada: 12–54 horas."),
          commonAdverseEffects: [
            t(lang, "Boca seca", "Boca seca"),
            t(lang, "Constipação", "Estreñimiento"),
            t(lang, "Insônia", "Insomnio"),
            t(lang, "Tremor", "Temblor"),
            t(lang, "Taquicardia", "Taquicardia"),
            t(lang, "Sudorese", "Sudoración"),
            t(lang, "Tontura", "Mareos")
          ],
          dangerousAdverseEffects: [
            t(lang, "Arritmias cardíacas", "Arritmias cardíacas"),
            t(lang, "Cardiotoxicidade em superdose", "Cardiotoxicidad en sobredosis"),
            t(lang, "Convulsões", "Convulsiones"),
            t(lang, "Virada maníaca", "Viraje maníaco"),
            t(lang, "Síndrome serotoninérgica", "Síndrome serotoninérgico"),
            t(lang, "Delirium anticolinérgico", "Delirium anticolinérgico")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: maior risco de arritmias, hipotensão e quedas.", "Adulto mayor: mayor riesgo de arritmias, hipotensión y caídas.") : null,
            gestante ? t(lang, "Gestação: utilizar apenas após avaliação especializada.", "Embarazo: utilizar solo tras evaluación especializada.") : null,
            hepatopatia ? t(lang, "Hepatopatia: maior risco de acúmulo e toxicidade.", "Hepatopatía: mayor riesgo de acumulación y toxicidad.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Uso concomitante com IMAO", "Uso concomitante con IMAO"),
            t(lang, "Infarto agudo recente", "Infarto agudo reciente"),
            t(lang, "Arritmias graves", "Arritmias graves"),
            t(lang, "Glaucoma de ângulo fechado", "Glaucoma de ángulo cerrado"),
            t(lang, "Transtorno bipolar sem estabilizador", "Trastorno bipolar sin estabilizador")
          ],
          interactions: [
            t(lang, "IMAO", "IMAO"),
            t(lang, "ISRS", "ISRS"),
            t(lang, "Antiarrítmicos", "Antiarrítmicos"),
            t(lang, "Álcool", "Alcohol"),
            t(lang, "Anticolinérgicos", "Anticolinérgicos"),
            t(lang, "Tramadol", "Tramadol")
          ],
          alerts: [
            t(lang, "Menor sedação que amitriptilina e doxepina.", "Menor sedación que amitriptilina y doxepina."),
            t(lang, "Monitorar ECG em pacientes cardiopatas.", "Monitorizar ECG en pacientes cardiópatas."),
            t(lang, "Alto risco em superdose.", "Alto riesgo en sobredosis."),
            t(lang, "Não suspender abruptamente.", "No suspender abruptamente.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    doxepina: {
      name: { pt: "Doxepina", es: "Doxepina" },
      category: "antidepressivo",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = clcr < 60;

        return {
          name: t(lang, "Doxepina", "Doxepina"),
          class: t(lang, "Antidepressivo tricíclico", "Antidepresivo tricíclico"),
          category: "antidepressivo",
          commercialNames: {
            br: ["Sinequan", "Doxepina"],
            ar: ["Sinequan", "Doxepina Northia", "Doxepina Klonal"]
          },
          presentation: [
            t(lang, "Cápsula 10 mg", "Cápsula 10 mg"),
            t(lang, "Cápsula 25 mg", "Cápsula 25 mg"),
            t(lang, "Cápsula 50 mg", "Cápsula 50 mg"),
            t(lang, "Cápsula 75 mg", "Cápsula 75 mg"),
            t(lang, "Solução oral 10 mg/mL", "Solución oral 10 mg/mL")
          ],
          dose: {
            adulto: t(lang, "Depressão/ansiedade: iniciar 25–50 mg VO à noite; dose usual 75–150 mg/dia.", "Depresión/ansiedad: iniciar 25–50 mg VO por la noche; dosis habitual 75–150 mg/día."),
            insonia: t(lang, "Insônia: 3–6 mg VO ao deitar.", "Insomnio: 3–6 mg VO al acostarse."),
            maxDose: t(lang, "Dose máxima usual: 300 mg/dia.", "Dosis máxima habitual: 300 mg/día.")
          },
          doseKg: {
            standard: t(lang, "Não se utiliza cálculo rotineiro por kg em adultos.", "No se utiliza cálculo rutinario por kg en adultos."),
            pediatric: t(lang, "Uso pediátrico especializado e pouco frequente.", "Uso pediátrico especializado y poco frecuente."),
            maxDose: t(lang, "300 mg/dia", "300 mg/día")
          },
          indications: [
            t(lang, "Transtorno depressivo maior", "Trastorno depresivo mayor"),
            t(lang, "Transtornos de ansiedade", "Trastornos de ansiedad"),
            t(lang, "Insônia crônica", "Insomnio crónico"),
            t(lang, "Prurido crônico", "Prurito crónico"),
            t(lang, "Dermatites pruriginosas", "Dermatitis pruriginosas"),
            t(lang, "Dor neuropática", "Dolor neuropático"),
            t(lang, "Síndrome do intestino irritável com dor", "Síndrome de intestino irritable con dolor"),
            t(lang, "Fibromialgia", "Fibromialgia")
          ],
          renalAdjustment: insuficienciaRenal
            ? t(lang, "Usar com cautela e monitorar efeitos adversos.", "Usar con cautela y monitorizar efectos adversos.")
            : t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia
            ? t(lang, "Iniciar com doses menores e titular lentamente.", "Iniciar con dosis menores y titular lentamente.")
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Inibe recaptação de serotonina e noradrenalina; possui potente bloqueio H1, sendo um dos tricíclicos mais sedativos.", "Inhibe la recaptación de serotonina y noradrenalina; posee potente bloqueo H1, siendo uno de los tricíclicos más sedativos."),
          onset: t(lang, "Insônia melhora em poucos dias; efeito antidepressivo geralmente em 2–4 semanas.", "El insomnio mejora en pocos días; el efecto antidepresivo generalmente en 2–4 semanas."),
          halfLife: t(lang, "Vida média aproximada: 15–24 horas.", "Vida media aproximada: 15–24 horas."),
          commonAdverseEffects: [
            t(lang, "Sonolência intensa", "Somnolencia intensa"),
            t(lang, "Boca seca", "Boca seca"),
            t(lang, "Constipação", "Estreñimiento"),
            t(lang, "Ganho de peso", "Aumento de peso"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Hipotensão ortostática", "Hipotensión ortostática"),
            t(lang, "Visão turva", "Visión borrosa")
          ],
          dangerousAdverseEffects: [
            t(lang, "Cardiotoxicidade em superdose", "Cardiotoxicidad en sobredosis"),
            t(lang, "Arritmias cardíacas", "Arritmias cardíacas"),
            t(lang, "Convulsões", "Convulsiones"),
            t(lang, "Delirium anticolinérgico", "Delirium anticolinérgico"),
            t(lang, "Virada maníaca", "Viraje maníaco"),
            t(lang, "Síndrome serotoninérgica", "Síndrome serotoninérgico")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: elevado risco de sedação, quedas, confusão e hipotensão.", "Adulto mayor: elevado riesgo de sedación, caídas, confusión e hipotensión.") : null,
            gestante ? t(lang, "Gestação: utilizar apenas após avaliação especializada.", "Embarazo: utilizar solo tras evaluación especializada.") : null,
            hepatopatia ? t(lang, "Hepatopatia: maior risco de acúmulo e sedação excessiva.", "Hepatopatía: mayor riesgo de acumulación y sedación excesiva.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Uso concomitante com IMAO", "Uso concomitante con IMAO"),
            t(lang, "Infarto agudo recente", "Infarto agudo reciente"),
            t(lang, "Glaucoma de ângulo fechado", "Glaucoma de ángulo cerrado"),
            t(lang, "Retenção urinária importante", "Retención urinaria importante"),
            t(lang, "Arritmias cardíacas graves", "Arritmias cardíacas graves")
          ],
          interactions: [
            t(lang, "IMAO", "IMAO"),
            t(lang, "Álcool", "Alcohol"),
            t(lang, "Benzodiazepínicos", "Benzodiazepinas"),
            t(lang, "Opioides", "Opioides"),
            t(lang, "Antiarrítmicos", "Antiarrítmicos"),
            t(lang, "Anticolinérgicos", "Anticolinérgicos")
          ],
          alerts: [
            t(lang, "Um dos tricíclicos mais sedativos.", "Uno de los tricíclicos más sedativos."),
            t(lang, "Muito utilizada para insônia em baixas doses.", "Muy utilizada para insomnio en dosis bajas."),
            t(lang, "Evitar em idosos frágeis quando possível.", "Evitar en adultos mayores frágiles cuando sea posible."),
            t(lang, "Não suspender abruptamente.", "No suspender abruptamente."),
            t(lang, "Monitorar ECG em pacientes de risco cardiovascular.", "Monitorizar ECG en pacientes de riesgo cardiovascular.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Doxepin Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    trimipramina: {
      name: { pt: "Trimipramina", es: "Trimipramina" },
      category: "antidepressivo",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = clcr < 60;

        return {
          name: t(lang, "Trimipramina", "Trimipramina"),
          class: t(lang, "Antidepressivo tricíclico", "Antidepresivo tricíclico"),
          category: "antidepressivo",
          commercialNames: {
            br: ["Surmontil", "Trimipramina"],
            ar: ["Surmontil", "Trimipramina Northia", "Trimipramina Klonal"]
          },
          presentation: [
            t(lang, "Comprimido 25 mg", "Comprimido 25 mg"),
            t(lang, "Comprimido 50 mg", "Comprimido 50 mg"),
            t(lang, "Gotas orais", "Gotas orales")
          ],
          dose: {
            adulto: t(lang, "Depressão: iniciar 25–50 mg VO à noite; dose usual 75–150 mg/dia.", "Depresión: iniciar 25–50 mg VO por la noche; dosis habitual 75–150 mg/día."),
            insoniaAnsiedade: t(lang, "Insônia/ansiedade: 25–100 mg VO à noite.", "Insomnio/ansiedad: 25–100 mg VO por la noche."),
            maxDose: t(lang, "Dose máxima usual: 300 mg/dia.", "Dosis máxima habitual: 300 mg/día.")
          },
          doseKg: {
            standard: t(lang, "Não se utiliza cálculo por kg em adultos.", "No se utiliza cálculo por kg en adultos."),
            pediatric: t(lang, "Uso pediátrico incomum e especializado.", "Uso pediátrico poco frecuente y especializado."),
            maxDose: t(lang, "300 mg/dia", "300 mg/día")
          },
          indications: [
            t(lang, "Transtorno depressivo maior", "Trastorno depresivo mayor"),
            t(lang, "Insônia crônica", "Insomnio crónico"),
            t(lang, "Transtornos de ansiedade", "Trastornos de ansiedad"),
            t(lang, "Depressão com agitação", "Depresión con agitación"),
            t(lang, "Depressão associada a distúrbios do sono", "Depresión asociada a trastornos del sueño"),
            t(lang, "Dor crônica", "Dolor crónico"),
            t(lang, "Fibromialgia", "Fibromialgia")
          ],
          renalAdjustment: insuficienciaRenal
            ? t(lang, "Usar com cautela.", "Usar con cautela.")
            : t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia
            ? t(lang, "Iniciar com doses menores.", "Iniciar con dosis menores.")
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Antidepressivo tricíclico com potente ação anti-histamínica e sedativa.", "Antidepresivo tricíclico con potente acción antihistamínica y sedativa."),
          onset: t(lang, "Melhora do sono pode ocorrer em poucos dias; efeito antidepressivo em 2–4 semanas.", "La mejoría del sueño puede ocurrir en pocos días; efecto antidepresivo en 2–4 semanas."),
          halfLife: t(lang, "Vida média aproximada: 12–24 horas.", "Vida media aproximada: 12–24 horas."),
          commonAdverseEffects: [
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Boca seca", "Boca seca"),
            t(lang, "Constipação", "Estreñimiento"),
            t(lang, "Hipotensão ortostática", "Hipotensión ortostática"),
            t(lang, "Ganho de peso", "Aumento de peso"),
            t(lang, "Tontura", "Mareos")
          ],
          dangerousAdverseEffects: [
            t(lang, "Arritmias cardíacas", "Arritmias cardíacas"),
            t(lang, "Cardiotoxicidade em superdose", "Cardiotoxicidad en sobredosis"),
            t(lang, "Convulsões", "Convulsiones"),
            t(lang, "Delirium anticolinérgico", "Delirium anticolinérgico"),
            t(lang, "Virada maníaca", "Viraje maníaco")
          ],
          risksByPatient: [
            idade >= 65
              ? t(lang, "Alto risco de sedação e quedas.", "Alto riesgo de sedación y caídas.")
              : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Uso concomitante com IMAO", "Uso concomitante con IMAO"),
            t(lang, "Infarto recente", "Infarto reciente"),
            t(lang, "Glaucoma de ângulo fechado", "Glaucoma de ángulo cerrado")
          ],
          interactions: [
            t(lang, "IMAO", "IMAO"),
            t(lang, "Álcool", "Alcohol"),
            t(lang, "Benzodiazepínicos", "Benzodiazepinas"),
            t(lang, "Opioides", "Opioides")
          ],
          alerts: [
            t(lang, "Um dos tricíclicos mais sedativos.", "Uno de los tricíclicos más sedativos."),
            t(lang, "Preferir administração noturna.", "Preferir administración nocturna."),
            t(lang, "Monitorar ECG em pacientes de risco.", "Monitorizar ECG en pacientes de riesgo.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    mirtazapina: {
      name: { pt: "Mirtazapina", es: "Mirtazapina" },
      category: "antidepressivo",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = clcr < 60;

        return {
          name: t(lang, "Mirtazapina", "Mirtazapina"),
          class: t(lang, "Antidepressivo NaSSA", "Antidepresivo NaSSA"),
          category: "antidepressivo",
          commercialNames: {
            br: ["Remeron", "Menelat", "Mirtazapina EMS"],
            ar: ["Remeron", "Mirtazapina Bagó", "Mirtazapina Gador"]
          },
          presentation: [
            t(lang, "Comprimido 15 mg", "Comprimido 15 mg"),
            t(lang, "Comprimido 30 mg", "Comprimido 30 mg"),
            t(lang, "Comprimido 45 mg", "Comprimido 45 mg"),
            t(lang, "Comprimido orodispersível 15 mg", "Comprimido bucodispersable 15 mg")
          ],
          dose: {
            adulto: t(lang, "Iniciar 15 mg VO à noite; dose usual 15–45 mg/dia.", "Iniciar 15 mg VO por la noche; dosis habitual 15–45 mg/día."),
            insonia: t(lang, "Insônia associada à depressão: geralmente 15 mg à noite.", "Insomnio asociado a depresión: generalmente 15 mg por la noche."),
            maxDose: t(lang, "Dose máxima usual: 45 mg/dia.", "Dosis máxima habitual: 45 mg/día.")
          },
          doseKg: {
            standard: t(lang, "Não se utiliza cálculo por kg em adultos.", "No se utiliza cálculo por kg en adultos."),
            pediatric: t(lang, "Uso pediátrico especializado.", "Uso pediátrico especializado."),
            maxDose: t(lang, "45 mg/dia", "45 mg/día")
          },
          indications: [
            t(lang, "Transtorno depressivo maior", "Trastorno depresivo mayor"),
            t(lang, "Depressão com insônia", "Depresión con insomnio"),
            t(lang, "Depressão com perda de apetite", "Depresión con pérdida de apetito"),
            t(lang, "Depressão com perda de peso", "Depresión con pérdida de peso"),
            t(lang, "Transtorno de ansiedade generalizada", "Trastorno de ansiedad generalizada"),
            t(lang, "Transtorno do pânico", "Trastorno de pánico"),
            t(lang, "Insônia crônica (off-label)", "Insomnio crónico (off-label)"),
            t(lang, "Cuidados paliativos com anorexia", "Cuidados paliativos con anorexia")
          ],
          renalAdjustment: insuficienciaRenal
            ? t(lang, "Pode ser necessário reduzir dose.", "Puede ser necesario reducir dosis.")
            : t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia
            ? t(lang, "Iniciar com doses menores.", "Iniciar con dosis menores.")
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Antagonista α2 pré-sináptico e antagonista 5HT2/5HT3, aumentando liberação de serotonina e noradrenalina.", "Antagonista α2 presináptico y antagonista 5HT2/5HT3, aumentando liberación de serotonina y noradrenalina."),
          onset: t(lang, "Melhora do sono e apetite em poucos dias; efeito antidepressivo em 2–4 semanas.", "Mejoría del sueño y apetito en pocos días; efecto antidepresivo en 2–4 semanas."),
          halfLife: t(lang, "Vida média aproximada: 20–40 horas.", "Vida media aproximada: 20–40 horas."),
          commonAdverseEffects: [
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Ganho de peso", "Aumento de peso"),
            t(lang, "Aumento do apetite", "Aumento del apetito"),
            t(lang, "Boca seca", "Boca seca"),
            t(lang, "Constipação", "Estreñimiento"),
            t(lang, "Tontura", "Mareos")
          ],
          dangerousAdverseEffects: [
            t(lang, "Neutropenia/agranulocitose rara", "Neutropenia/agranulocitosis rara"),
            t(lang, "Síndrome serotoninérgica", "Síndrome serotoninérgico"),
            t(lang, "Virada maníaca", "Viraje maníaco"),
            t(lang, "Ideação suicida", "Ideación suicida")
          ],
          risksByPatient: [
            idade >= 65
              ? t(lang, "Maior risco de sedação e quedas.", "Mayor riesgo de sedación y caídas.")
              : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Uso concomitante com IMAO", "Uso concomitante con IMAO"),
            t(lang, "Hipersensibilidade ao fármaco", "Hipersensibilidad al fármaco")
          ],
          interactions: [
            t(lang, "IMAO", "IMAO"),
            t(lang, "Álcool", "Alcohol"),
            t(lang, "Benzodiazepínicos", "Benzodiazepinas"),
            t(lang, "Opioides", "Opioides")
          ],
          alerts: [
            t(lang, "Excelente opção para depressão com insônia e perda de peso.", "Excelente opción para depresión con insomnio y pérdida de peso."),
            t(lang, "Pode causar ganho ponderal importante.", "Puede causar aumento ponderal importante."),
            t(lang, "Monitorar hemograma se suspeita de neutropenia.", "Monitorizar hemograma si se sospecha neutropenia.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Mirtazapine Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    bupropiona: {
      name: { pt: "Bupropiona", es: "Bupropión" },
      category: "antidepressivo",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = clcr < 60;

        return {
          name: t(lang, "Bupropiona", "Bupropión"),
          class: t(lang, "Antidepressivo NDRI", "Antidepresivo NDRI"),
          category: "antidepressivo",
          commercialNames: {
            br: ["Wellbutrin XL", "Zyban", "Bup XL"],
            ar: ["Wellbutrin XL", "Odranal", "Bupropión Gador"]
          },
          presentation: [
            t(lang, "Comprimido SR 150 mg", "Comprimido SR 150 mg"),
            t(lang, "Comprimido XL 150 mg", "Comprimido XL 150 mg"),
            t(lang, "Comprimido XL 300 mg", "Comprimido XL 300 mg")
          ],
          dose: {
            adulto: t(lang, "Iniciar 150 mg/dia; após alguns dias aumentar para 300 mg/dia.", "Iniciar 150 mg/día; tras algunos días aumentar a 300 mg/día."),
            tabagismo: t(lang, "Cessação tabágica: 150 mg/dia por 3 dias; depois 150 mg 12/12h.", "Cesación tabáquica: 150 mg/día por 3 días; luego 150 mg cada 12 h."),
            maxDose: t(lang, "Dose máxima usual: 450 mg/dia.", "Dosis máxima habitual: 450 mg/día.")
          },
          doseKg: {
            standard: t(lang, "Não se utiliza cálculo por kg em adultos.", "No se utiliza cálculo por kg en adultos."),
            pediatric: t(lang, "Uso pediátrico especializado.", "Uso pediátrico especializado."),
            maxDose: t(lang, "450 mg/dia", "450 mg/día")
          },
          indications: [
            t(lang, "Transtorno depressivo maior", "Trastorno depresivo mayor"),
            t(lang, "Cessação do tabagismo", "Cesación tabáquica"),
            t(lang, "Depressão com fadiga", "Depresión con fatiga"),
            t(lang, "Depressão com hipersonia", "Depresión con hipersomnia"),
            t(lang, "Disfunção sexual induzida por ISRS", "Disfunción sexual inducida por ISRS"),
            t(lang, "TDAH (off-label)", "TDAH (off-label)"),
            t(lang, "Transtorno afetivo sazonal", "Trastorno afectivo estacional"),
            t(lang, "Depressão com ganho de peso", "Depresión con aumento de peso")
          ],
          renalAdjustment: insuficienciaRenal
            ? t(lang, "Considerar redução de dose.", "Considerar reducción de dosis.")
            : t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia
            ? t(lang, "Reduzir dose e frequência.", "Reducir dosis y frecuencia.")
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Inibe recaptação de dopamina e noradrenalina sem ação serotoninérgica significativa.", "Inhibe la recaptación de dopamina y noradrenalina sin acción serotoninérgica significativa."),
          onset: t(lang, "Efeito antidepressivo geralmente em 2–4 semanas.", "Efecto antidepresivo generalmente en 2–4 semanas."),
          halfLife: t(lang, "Vida média aproximada: 21 horas.", "Vida media aproximada: 21 horas."),
          commonAdverseEffects: [
            t(lang, "Insônia", "Insomnio"),
            t(lang, "Ansiedade", "Ansiedad"),
            t(lang, "Tremor", "Temblor"),
            t(lang, "Boca seca", "Boca seca"),
            t(lang, "Cefaleia", "Cefalea"),
            t(lang, "Náuseas", "Náuseas")
          ],
          dangerousAdverseEffects: [
            t(lang, "Convulsões dose-dependentes", "Convulsiones dosis dependientes"),
            t(lang, "Hipertensão arterial", "Hipertensión arterial"),
            t(lang, "Virada maníaca", "Viraje maníaco"),
            t(lang, "Ideação suicida", "Ideación suicida")
          ],
          risksByPatient: [
            idade >= 65
              ? t(lang, "Maior sensibilidade a eventos neurológicos.", "Mayor sensibilidad a eventos neurológicos.")
              : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Epilepsia", "Epilepsia"),
            t(lang, "Bulimia nervosa", "Bulimia nerviosa"),
            t(lang, "Anorexia nervosa", "Anorexia nerviosa"),
            t(lang, "Uso concomitante com IMAO", "Uso concomitante con IMAO"),
            t(lang, "Abstinência aguda de álcool ou benzodiazepínicos", "Abstinencia aguda de alcohol o benzodiazepinas")
          ],
          interactions: [
            t(lang, "IMAO", "IMAO"),
            t(lang, "Antipsicóticos", "Antipsicóticos"),
            t(lang, "Teofilina", "Teofilina"),
            t(lang, "Tramadol", "Tramadol"),
            t(lang, "Nicotina", "Nicotina")
          ],
          alerts: [
            t(lang, "Menor risco de disfunção sexual.", "Menor riesgo de disfunción sexual."),
            t(lang, "Pode auxiliar na perda de peso.", "Puede ayudar en la pérdida de peso."),
            t(lang, "Evitar em pacientes com risco de convulsão.", "Evitar en pacientes con riesgo de convulsiones."),
            t(lang, "Não utilizar em bulimia ou anorexia.", "No utilizar en bulimia o anorexia.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Bupropion Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    trazodona: {
      name: { pt: "Trazodona", es: "Trazodona" },
      category: "antidepressivo",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = clcr < 60;

        return {
          name: t(lang, "Trazodona", "Trazodona"),
          class: t(lang, "Antidepressivo SARI", "Antidepresivo SARI"),
          category: "antidepressivo",
          commercialNames: {
            br: ["Donaren", "Trazorel", "Trazodona EMS"],
            ar: ["Trazodona Bagó", "Trazodona Gador", "Deprax"]
          },
          presentation: [
            t(lang, "Comprimido 50 mg", "Comprimido 50 mg"),
            t(lang, "Comprimido 100 mg", "Comprimido 100 mg"),
            t(lang, "Comprimido LP 150 mg", "Comprimido LP 150 mg"),
            t(lang, "Comprimido LP 300 mg", "Comprimido LP 300 mg")
          ],
          dose: {
            adulto: t(lang, "Depressão: iniciar 50–100 mg/dia; dose usual 150–300 mg/dia.", "Depresión: iniciar 50–100 mg/día; dosis habitual 150–300 mg/día."),
            insonia: t(lang, "Insônia: 25–100 mg VO ao deitar.", "Insomnio: 25–100 mg VO al acostarse."),
            maxDose: t(lang, "Dose máxima: 400 mg/dia ambulatorial; até 600 mg/dia hospitalar.", "Dosis máxima: 400 mg/día ambulatoria; hasta 600 mg/día hospitalaria.")
          },
          doseKg: {
            standard: t(lang, "Não se utiliza cálculo por kg.", "No se utiliza cálculo por kg."),
            pediatric: t(lang, "Uso pediátrico especializado.", "Uso pediátrico especializado."),
            maxDose: t(lang, "600 mg/dia", "600 mg/día")
          },
          indications: [
            t(lang, "Transtorno depressivo maior", "Trastorno depresivo mayor"),
            t(lang, "Insônia crônica", "Insomnio crónico"),
            t(lang, "Depressão com insônia", "Depresión con insomnio"),
            t(lang, "Transtorno de ansiedade generalizada", "Trastorno de ansiedad generalizada"),
            t(lang, "Transtorno do pânico", "Trastorno de pánico"),
            t(lang, "TEPT", "TEPT"),
            t(lang, "Fibromialgia", "Fibromialgia"),
            t(lang, "Distúrbios do sono em idosos", "Trastornos del sueño en adultos mayores")
          ],
          renalAdjustment: insuficienciaRenal
            ? t(lang, "Usar com cautela.", "Usar con cautela.")
            : t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia
            ? t(lang, "Utilizar doses menores inicialmente.", "Utilizar dosis menores inicialmente.")
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Inibe recaptação de serotonina e antagoniza receptores 5HT2A/5HT2C, com forte efeito sedativo.", "Inhibe recaptación de serotonina y antagoniza receptores 5HT2A/5HT2C, con fuerte efecto sedativo."),
          onset: t(lang, "Melhora do sono em poucos dias; efeito antidepressivo em 2–4 semanas.", "Mejoría del sueño en pocos días; efecto antidepresivo en 2–4 semanas."),
          halfLife: t(lang, "Vida média aproximada: 5–13 horas.", "Vida media aproximada: 5–13 horas."),
          commonAdverseEffects: [
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Boca seca", "Boca seca"),
            t(lang, "Cefaleia", "Cefalea"),
            t(lang, "Hipotensão ortostática", "Hipotensión ortostática"),
            t(lang, "Náuseas", "Náuseas")
          ],
          dangerousAdverseEffects: [
            t(lang, "Priapismo", "Priapismo"),
            t(lang, "Arritmias cardíacas", "Arritmias cardíacas"),
            t(lang, "Prolongamento QT", "Prolongación QT"),
            t(lang, "Síndrome serotoninérgica", "Síndrome serotoninérgico"),
            t(lang, "Virada maníaca", "Viraje maníaco")
          ],
          risksByPatient: [
            idade >= 65
              ? t(lang, "Maior risco de quedas e hipotensão.", "Mayor riesgo de caídas e hipotensión.")
              : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Uso concomitante com IMAO", "Uso concomitante con IMAO"),
            t(lang, "Hipersensibilidade ao medicamento", "Hipersensibilidad al medicamento")
          ],
          interactions: [
            t(lang, "IMAO", "IMAO"),
            t(lang, "Álcool", "Alcohol"),
            t(lang, "Benzodiazepínicos", "Benzodiazepinas"),
            t(lang, "ISRS/ISRN", "ISRS/IRSN"),
            t(lang, "Antiarrítmicos", "Antiarrítmicos")
          ],
          alerts: [
            t(lang, "Priapismo é raro, mas constitui emergência médica.", "El priapismo es raro, pero constituye una emergencia médica."),
            t(lang, "Muito utilizada para insônia em baixas doses.", "Muy utilizada para insomnio en dosis bajas."),
            t(lang, "Monitorar risco de quedas em idosos.", "Monitorizar riesgo de caídas en adultos mayores.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA Trazodone",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    agomelatina: {
      name: { pt: "Agomelatina", es: "Agomelatina" },
      category: "antidepressivo",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = clcr < 60;

        return {
          name: t(lang, "Agomelatina", "Agomelatina"),
          class: t(lang, "Antidepressivo agonista melatoninérgico", "Antidepresivo agonista melatoninérgico"),
          category: "antidepressivo",
          commercialNames: {
            br: ["Valdoxan"],
            ar: ["Valdoxan", "Agomelatina Gador"]
          },
          presentation: [
            t(lang, "Comprimido 25 mg", "Comprimido 25 mg")
          ],
          dose: {
            adulto: t(lang, "25 mg VO à noite; pode aumentar para 50 mg/dia.", "25 mg VO por la noche; puede aumentarse a 50 mg/día."),
            maxDose: t(lang, "Dose máxima: 50 mg/dia.", "Dosis máxima: 50 mg/día.")
          },
          doseKg: {
            standard: t(lang, "Não se utiliza cálculo por kg.", "No se utiliza cálculo por kg."),
            pediatric: t(lang, "Não recomendado em pediatria.", "No recomendado en pediatría."),
            maxDose: t(lang, "50 mg/dia", "50 mg/día")
          },
          indications: [
            t(lang, "Transtorno depressivo maior", "Trastorno depresivo mayor"),
            t(lang, "Depressão com insônia", "Depresión con insomnio"),
            t(lang, "Depressão associada à alteração do ritmo circadiano", "Depresión asociada a alteración del ritmo circadiano"),
            t(lang, "Depressão com disfunção sexual induzida por ISRS", "Depresión con disfunción sexual inducida por ISRS"),
            t(lang, "Transtorno de ansiedade generalizada", "Trastorno de ansiedad generalizada"),
            t(lang, "Depressão com fadiga diurna", "Depresión con fatiga diurna")
          ],
          renalAdjustment: t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia
            ? t(lang, "CONTRAINDICADA em insuficiência hepática ou doença hepática ativa.", "CONTRAINDICADA en insuficiencia hepática o enfermedad hepática activa.")
            : t(lang, "Monitorar transaminases periodicamente.", "Monitorizar transaminasas periódicamente."),
          mechanism: t(lang, "Agonista MT1/MT2 e antagonista 5HT2C, regulando ritmos circadianos e aumentando dopamina/noradrenalina frontal.", "Agonista MT1/MT2 y antagonista 5HT2C, regulando ritmos circadianos y aumentando dopamina/noradrenalina frontal."),
          onset: t(lang, "Melhora do sono em poucos dias; efeito antidepressivo em 2–4 semanas.", "Mejoría del sueño en pocos días; efecto antidepresivo en 2–4 semanas."),
          halfLife: t(lang, "Vida média aproximada: 1–2 horas.", "Vida media aproximada: 1–2 horas."),
          commonAdverseEffects: [
            t(lang, "Cefaleia", "Cefalea"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Náuseas", "Náuseas"),
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Fadiga", "Fatiga")
          ],
          dangerousAdverseEffects: [
            t(lang, "Hepatotoxicidade", "Hepatotoxicidad"),
            t(lang, "Elevação de transaminases", "Elevación de transaminasas"),
            t(lang, "Virada maníaca", "Viraje maníaco")
          ],
          risksByPatient: [
            hepatopatia
              ? t(lang, "Uso contraindicado.", "Uso contraindicado.")
              : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Doença hepática ativa", "Enfermedad hepática activa"),
            t(lang, "Insuficiência hepática", "Insuficiencia hepática"),
            t(lang, "Uso de fluvoxamina", "Uso de fluvoxamina")
          ],
          interactions: [
            t(lang, "Fluvoxamina", "Fluvoxamina"),
            t(lang, "Ciprofloxacino", "Ciprofloxacino"),
            t(lang, "Álcool", "Alcohol")
          ],
          alerts: [
            t(lang, "Monitorar TGO/TGP antes e durante tratamento.", "Monitorizar TGO/TGP antes y durante el tratamiento."),
            t(lang, "Baixo risco de disfunção sexual.", "Bajo riesgo de disfunción sexual."),
            t(lang, "Baixo risco de ganho de peso.", "Bajo riesgo de aumento de peso.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "EMA Valdoxan",
            "Stahl's Essential Psychopharmacology",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    vortioxetina: {
      name: { pt: "Vortioxetina", es: "Vortioxetina" },
      category: "antidepressivo",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = clcr < 60;

        return {
          name: t(lang, "Vortioxetina", "Vortioxetina"),
          class: t(lang, "Antidepressivo multimodal", "Antidepresivo multimodal"),
          category: "antidepressivo",
          commercialNames: {
            br: ["Brintellix"],
            ar: ["Brintellix", "Vortioxetina Bagó"]
          },
          presentation: [
            t(lang, "Comprimido 5 mg", "Comprimido 5 mg"),
            t(lang, "Comprimido 10 mg", "Comprimido 10 mg"),
            t(lang, "Comprimido 15 mg", "Comprimido 15 mg"),
            t(lang, "Comprimido 20 mg", "Comprimido 20 mg")
          ],
          dose: {
            adulto: t(lang, "10 mg VO 1x/dia; ajustar entre 5–20 mg/dia.", "10 mg VO 1 vez/día; ajustar entre 5–20 mg/día."),
            maxDose: t(lang, "Dose máxima: 20 mg/dia.", "Dosis máxima: 20 mg/día.")
          },
          doseKg: {
            standard: t(lang, "Não se utiliza cálculo por kg.", "No se utiliza cálculo por kg."),
            pediatric: t(lang, "Uso pediátrico especializado.", "Uso pediátrico especializado."),
            maxDose: t(lang, "20 mg/dia", "20 mg/día")
          },
          indications: [
            t(lang, "Transtorno depressivo maior", "Trastorno depresivo mayor"),
            t(lang, "Depressão com prejuízo cognitivo", "Depresión con deterioro cognitivo"),
            t(lang, "Depressão resistente", "Depresión resistente"),
            t(lang, "Transtorno de ansiedade generalizada", "Trastorno de ansiedad generalizada"),
            t(lang, "Depressão em idosos", "Depresión en adultos mayores"),
            t(lang, "Depressão com baixa tolerância sexual aos ISRS", "Depresión con baja tolerancia sexual a los ISRS"),
            t(lang, "Depressão com sintomas cognitivos persistentes", "Depresión con síntomas cognitivos persistentes")
          ],
          renalAdjustment: t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Inibe recaptação de serotonina e modula múltiplos receptores serotoninérgicos (5HT1A, 5HT1B, 5HT3, 5HT7).", "Inhibe la recaptación de serotonina y modula múltiples receptores serotoninérgicos (5HT1A, 5HT1B, 5HT3, 5HT7)."),
          onset: t(lang, "Resposta antidepressiva geralmente em 2–4 semanas.", "Respuesta antidepresiva generalmente en 2–4 semanas."),
          halfLife: t(lang, "Vida média aproximada: 66 horas.", "Vida media aproximada: 66 horas."),
          commonAdverseEffects: [
            t(lang, "Náuseas", "Náuseas"),
            t(lang, "Constipação", "Estreñimiento"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Cefaleia", "Cefalea"),
            t(lang, "Diarreia", "Diarrea")
          ],
          dangerousAdverseEffects: [
            t(lang, "Síndrome serotoninérgica", "Síndrome serotoninérgico"),
            t(lang, "Hiponatremia", "Hiponatremia"),
            t(lang, "Virada maníaca", "Viraje maníaco"),
            t(lang, "Ideação suicida", "Ideación suicida")
          ],
          risksByPatient: [
            idade >= 65
              ? t(lang, "Monitorar risco de hiponatremia.", "Monitorizar riesgo de hiponatremia.")
              : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Uso concomitante com IMAO", "Uso concomitante con IMAO"),
            t(lang, "Hipersensibilidade ao medicamento", "Hipersensibilidad al medicamento")
          ],
          interactions: [
            t(lang, "IMAO", "IMAO"),
            t(lang, "ISRS/ISRN", "ISRS/IRSN"),
            t(lang, "Tramadol", "Tramadol"),
            t(lang, "Linezolida", "Linezolid"),
            t(lang, "Lítio", "Litio")
          ],
          alerts: [
            t(lang, "Melhor evidência para sintomas cognitivos da depressão.", "Mejor evidencia para síntomas cognitivos de la depresión."),
            t(lang, "Baixo impacto na função sexual.", "Bajo impacto en la función sexual."),
            t(lang, "Baixo risco de ganho de peso.", "Bajo riesgo de aumento de peso.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA Brintellix",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    vilazodona: {
      name: { pt: "Vilazodona", es: "Vilazodona" },
      category: "antidepressivo",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = clcr < 60;

        return {
          name: t(lang, "Vilazodona", "Vilazodona"),
          class: t(lang, "Antidepressivo SPARI", "Antidepresivo SPARI"),
          category: "antidepressivo",
          commercialNames: {
            br: ["Viibryd"],
            ar: ["Viibryd", "Vilazodona"]
          },
          presentation: [
            t(lang, "Comprimido 10 mg", "Comprimido 10 mg"),
            t(lang, "Comprimido 20 mg", "Comprimido 20 mg"),
            t(lang, "Comprimido 40 mg", "Comprimido 40 mg")
          ],
          dose: {
            adulto: t(lang, "10 mg/dia por 7 dias; depois 20 mg/dia; pode aumentar para 40 mg/dia.", "10 mg/día por 7 días; luego 20 mg/día; puede aumentarse a 40 mg/día."),
            maxDose: t(lang, "Dose máxima: 40 mg/dia.", "Dosis máxima: 40 mg/día.")
          },
          doseKg: {
            standard: t(lang, "Não se utiliza cálculo por kg.", "No se utiliza cálculo por kg."),
            pediatric: t(lang, "Uso pediátrico especializado.", "Uso pediátrico especializado."),
            maxDose: t(lang, "40 mg/dia", "40 mg/día")
          },
          indications: [
            t(lang, "Transtorno depressivo maior", "Trastorno depresivo mayor"),
            t(lang, "Depressão com ansiedade", "Depresión con ansiedad"),
            t(lang, "Transtorno de ansiedade generalizada (off-label)", "Trastorno de ansiedad generalizada (off-label)"),
            t(lang, "Depressão resistente", "Depresión resistente"),
            t(lang, "Pacientes com preocupação sexual relacionada aos ISRS", "Pacientes con preocupación sexual relacionada a ISRS"),
            t(lang, "Depressão recorrente", "Depresión recurrente")
          ],
          renalAdjustment: t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Inibidor seletivo da recaptação de serotonina e agonista parcial 5HT1A.", "Inhibidor selectivo de la recaptación de serotonina y agonista parcial 5HT1A."),
          onset: t(lang, "Resposta antidepressiva geralmente em 2–4 semanas.", "Respuesta antidepresiva generalmente en 2–4 semanas."),
          halfLife: t(lang, "Vida média aproximada: 25 horas.", "Vida media aproximada: 25 horas."),
          commonAdverseEffects: [
            t(lang, "Náuseas", "Náuseas"),
            t(lang, "Diarreia", "Diarrea"),
            t(lang, "Insônia", "Insomnio"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Cefaleia", "Cefalea")
          ],
          dangerousAdverseEffects: [
            t(lang, "Síndrome serotoninérgica", "Síndrome serotoninérgico"),
            t(lang, "Virada maníaca", "Viraje maníaco"),
            t(lang, "Hiponatremia", "Hiponatremia"),
            t(lang, "Ideação suicida", "Ideación suicida")
          ],
          risksByPatient: [
            idade >= 65
              ? t(lang, "Monitorar risco de hiponatremia.", "Monitorizar riesgo de hiponatremia.")
              : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Uso concomitante com IMAO", "Uso concomitante con IMAO")
          ],
          interactions: [
            t(lang, "IMAO", "IMAO"),
            t(lang, "Linezolida", "Linezolid"),
            t(lang, "Tramadol", "Tramadol"),
            t(lang, "Lítio", "Litio")
          ],
          alerts: [
            t(lang, "Administrar junto com alimentos.", "Administrar junto con alimentos."),
            t(lang, "Possui menor incidência de disfunção sexual que alguns ISRS.", "Posee menor incidencia de disfunción sexual que algunos ISRS.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl",
            "FDA Viibryd",
            "Lexicomp",
            "UpToDate"
          ]
        };
      }
    },

    reboxetina: {
      name: { pt: "Reboxetina", es: "Reboxetina" },
      category: "antidepressivo",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = clcr < 60;

        return {
          name: t(lang, "Reboxetina", "Reboxetina"),
          class: t(lang, "Antidepressivo ISRN seletivo", "Antidepresivo ISRN selectivo"),
          category: "antidepressivo",
          commercialNames: {
            br: ["Prolift"],
            ar: ["Edronax", "Reboxetina"]
          },
          presentation: [
            t(lang, "Comprimido 4 mg", "Comprimido 4 mg")
          ],
          dose: {
            adulto: t(lang, "4 mg VO 12/12h. Dose usual: 8 mg/dia.", "4 mg VO cada 12 h. Dosis habitual: 8 mg/día."),
            maxDose: t(lang, "Dose máxima: 12 mg/dia.", "Dosis máxima: 12 mg/día.")
          },
          doseKg: {
            standard: t(lang, "Não se utiliza cálculo por kg.", "No se utiliza cálculo por kg."),
            pediatric: t(lang, "Uso pediátrico especializado.", "Uso pediátrico especializado."),
            maxDose: t(lang, "12 mg/dia", "12 mg/día")
          },
          indications: [
            t(lang, "Transtorno depressivo maior", "Trastorno depresivo mayor"),
            t(lang, "Depressão com fadiga", "Depresión con fatiga"),
            t(lang, "Depressão com lentificação psicomotora", "Depresión con enlentecimiento psicomotor"),
            t(lang, "Depressão resistente", "Depresión resistente"),
            t(lang, "TDAH (off-label)", "TDAH (off-label)"),
            t(lang, "Transtornos de ansiedade selecionados", "Trastornos de ansiedad seleccionados")
          ],
          renalAdjustment: insuficienciaRenal
            ? t(lang, "Reduzir dose.", "Reducir dosis.")
            : t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia
            ? t(lang, "Usar com cautela.", "Usar con cautela.")
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Inibidor seletivo da recaptação de noradrenalina.", "Inhibidor selectivo de la recaptación de noradrenalina."),
          onset: t(lang, "Efeito antidepressivo geralmente em 2–4 semanas.", "Efecto antidepresivo generalmente en 2–4 semanas."),
          halfLife: t(lang, "Vida média aproximada: 12–16 horas.", "Vida media aproximada: 12–16 horas."),
          commonAdverseEffects: [
            t(lang, "Insônia", "Insomnio"),
            t(lang, "Boca seca", "Boca seca"),
            t(lang, "Taquicardia", "Taquicardia"),
            t(lang, "Sudorese", "Sudoración"),
            t(lang, "Constipação", "Estreñimiento")
          ],
          dangerousAdverseEffects: [
            t(lang, "Hipertensão arterial", "Hipertensión arterial"),
            t(lang, "Retenção urinária", "Retención urinaria"),
            t(lang, "Virada maníaca", "Viraje maníaco")
          ],
          risksByPatient: [
            idade >= 65
              ? t(lang, "Monitorar pressão arterial e retenção urinária.", "Monitorizar presión arterial y retención urinaria.")
              : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Glaucoma de ângulo fechado", "Glaucoma de ángulo cerrado"),
            t(lang, "Hipersensibilidade ao fármaco", "Hipersensibilidad al fármaco")
          ],
          interactions: [
            t(lang, "IMAO", "IMAO"),
            t(lang, "Simpaticomiméticos", "Simpaticomiméticos"),
            t(lang, "Anti-hipertensivos", "Antihipertensivos")
          ],
          alerts: [
            t(lang, "Pode causar insônia e ativação.", "Puede causar insomnio y activación."),
            t(lang, "Monitorar pressão arterial.", "Monitorizar presión arterial.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    fenelzina: {
      name: { pt: "Fenelzina", es: "Fenelzina" },
      category: "antidepressivo",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = clcr < 60;

        return {
          name: t(lang, "Fenelzina", "Fenelzina"),
          class: t(lang, "IMAO irreversível não seletivo", "IMAO irreversible no selectivo"),
          category: "antidepressivo",
          commercialNames: {
            br: ["Nardil"],
            ar: ["Nardil"]
          },
          presentation: [
            t(lang, "Comprimido 15 mg", "Comprimido 15 mg")
          ],
          dose: {
            adulto: t(lang, "15 mg VO 3x/dia; titular conforme resposta.", "15 mg VO 3 veces/día; titular según respuesta."),
            maxDose: t(lang, "Dose máxima: 90 mg/dia.", "Dosis máxima: 90 mg/día.")
          },
          doseKg: {
            standard: t(lang, "Não se utiliza cálculo por kg.", "No se utiliza cálculo por kg."),
            pediatric: t(lang, "Uso pediátrico contraindicado.", "Uso pediátrico contraindicado."),
            maxDose: t(lang, "90 mg/dia", "90 mg/día")
          },
          indications: [
            t(lang, "Depressão resistente", "Depresión resistente"),
            t(lang, "Depressão atípica", "Depresión atípica"),
            t(lang, "Transtorno do pânico", "Trastorno de pánico"),
            t(lang, "Fobia social", "Fobia social"),
            t(lang, "Ansiedade resistente", "Ansiedad resistente"),
            t(lang, "TEPT refratário", "TEPT refractario")
          ],
          renalAdjustment: insuficienciaRenal
            ? t(lang, "Usar com cautela.", "Usar con cautela.")
            : t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia
            ? t(lang, "CONTRAINDICADA em insuficiência hepática.", "CONTRAINDICADA en insuficiencia hepática.")
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Inibição irreversível da MAO-A e MAO-B aumentando serotonina, noradrenalina e dopamina.", "Inhibición irreversible de MAO-A y MAO-B aumentando serotonina, noradrenalina y dopamina."),
          onset: t(lang, "Efeito antidepressivo geralmente em 2–4 semanas.", "Efecto antidepresivo generalmente en 2–4 semanas."),
          halfLife: t(lang, "Vida média curta, porém efeito enzimático dura 2–3 semanas.", "Vida media corta, pero el efecto enzimático dura 2–3 semanas."),
          commonAdverseEffects: [
            t(lang, "Hipotensão ortostática", "Hipotensión ortostática"),
            t(lang, "Ganho de peso", "Aumento de peso"),
            t(lang, "Insônia", "Insomnio"),
            t(lang, "Edema", "Edema")
          ],
          dangerousAdverseEffects: [
            t(lang, "Crise hipertensiva por tiramina", "Crisis hipertensiva por tiramina"),
            t(lang, "Síndrome serotoninérgica", "Síndrome serotoninérgico"),
            t(lang, "Hepatotoxicidade", "Hepatotoxicidad")
          ],
          risksByPatient: [
            hepatopatia
              ? t(lang, "Uso contraindicado.", "Uso contraindicado.")
              : null,
            idade >= 65
              ? t(lang, "Maior risco de hipotensão e quedas.", "Mayor riesgo de hipotensión y caídas.")
              : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Uso concomitante com ISRS/ISRN", "Uso concomitante con ISRS/IRSN"),
            t(lang, "Feocromocitoma", "Feocromocitoma"),
            t(lang, "Insuficiência hepática", "Insuficiencia hepática")
          ],
          interactions: [
            t(lang, "Tiramina alimentar", "Tiramina alimentaria"),
            t(lang, "ISRS", "ISRS"),
            t(lang, "Tramadol", "Tramadol"),
            t(lang, "Linezolida", "Linezolid"),
            t(lang, "Descongestionantes", "Descongestionantes")
          ],
          alerts: [
            t(lang, "Necessita dieta restrita em tiramina.", "Requiere dieta restringida en tiramina."),
            t(lang, "Respeitar washout de 14 dias ao trocar antidepressivos.", "Respetar washout de 14 días al cambiar antidepresivos.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    tranilcipromina: {
      name: { pt: "Tranilcipromina", es: "Tranilcipromina" },
      category: "antidepressivo",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = clcr < 60;

        return {
          name: t(lang, "Tranilcipromina", "Tranilcipromina"),
          class: t(lang, "IMAO irreversível não seletivo", "IMAO irreversible no selectivo"),
          category: "antidepressivo",
          commercialNames: {
            br: ["Parnate"],
            ar: ["Parnate"]
          },
          presentation: [
            t(lang, "Comprimido 10 mg", "Comprimido 10 mg")
          ],
          dose: {
            adulto: t(lang, "10 mg VO 2x/dia; dose usual 20–60 mg/dia.", "10 mg VO 2 veces/día; dosis habitual 20–60 mg/día."),
            maxDose: t(lang, "Dose máxima: 60 mg/dia.", "Dosis máxima: 60 mg/día.")
          },
          doseKg: {
            standard: t(lang, "Não se utiliza cálculo por kg.", "No se utiliza cálculo por kg."),
            pediatric: t(lang, "Uso pediátrico contraindicado.", "Uso pediátrico contraindicado."),
            maxDose: t(lang, "60 mg/dia", "60 mg/día")
          },
          indications: [
            t(lang, "Depressão resistente", "Depresión resistente"),
            t(lang, "Depressão atípica", "Depresión atípica"),
            t(lang, "Transtorno do pânico", "Trastorno de pánico"),
            t(lang, "Fobia social", "Fobia social"),
            t(lang, "Ansiedade refratária", "Ansiedad refractaria"),
            t(lang, "Depressão bipolar selecionada", "Depresión bipolar seleccionada")
          ],
          renalAdjustment: insuficienciaRenal
            ? t(lang, "Usar com cautela.", "Usar con cautela.")
            : t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia
            ? t(lang, "Usar com cautela.", "Usar con cautela.")
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Inibição irreversível de MAO-A e MAO-B.", "Inhibición irreversible de MAO-A y MAO-B."),
          onset: t(lang, "Efeito antidepressivo geralmente em 2–4 semanas.", "Efecto antidepresivo generalmente en 2–4 semanas."),
          halfLife: t(lang, "Vida média aproximada: 2–3 horas.", "Vida media aproximada: 2–3 horas."),
          commonAdverseEffects: [
            t(lang, "Insônia", "Insomnio"),
            t(lang, "Agitação", "Agitación"),
            t(lang, "Hipotensão ortostática", "Hipotensión ortostática"),
            t(lang, "Tremor", "Temblor")
          ],
          dangerousAdverseEffects: [
            t(lang, "Crise hipertensiva", "Crisis hipertensiva"),
            t(lang, "Síndrome serotoninérgica", "Síndrome serotoninérgico"),
            t(lang, "Virada maníaca", "Viraje maníaco")
          ],
          risksByPatient: [
            idade >= 65
              ? t(lang, "Maior risco de hipotensão e quedas.", "Mayor riesgo de hipotensión y caídas.")
              : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Uso concomitante com antidepressivos serotoninérgicos", "Uso concomitante con antidepresivos serotoninérgicos"),
            t(lang, "Feocromocitoma", "Feocromocitoma")
          ],
          interactions: [
            t(lang, "Tiramina", "Tiramina"),
            t(lang, "ISRS", "ISRS"),
            t(lang, "Tramadol", "Tramadol"),
            t(lang, "Linezolida", "Linezolid")
          ],
          alerts: [
            t(lang, "Necessita dieta restrita em tiramina.", "Requiere dieta restringida en tiramina."),
            t(lang, "Possui perfil mais estimulante que fenelzina.", "Posee perfil más estimulante que fenelzina.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    moclobemida: {
      name: { pt: "Moclobemida", es: "Moclobemida" },
      category: "antidepressivo",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = clcr < 60;

        return {
          name: t(lang, "Moclobemida", "Moclobemida"),
          class: t(lang, "IMAO-A reversível (RIMA)", "IMAO-A reversible (RIMA)"),
          category: "antidepressivo",
          commercialNames: {
            br: ["Aurorix"],
            ar: ["Aurorix", "Moclobemida"]
          },
          presentation: [
            t(lang, "Comprimido 150 mg", "Comprimido 150 mg"),
            t(lang, "Comprimido 300 mg", "Comprimido 300 mg")
          ],
          dose: {
            adulto: t(lang, "300 mg/dia dividido em 2 tomadas; pode aumentar para 600 mg/dia.", "300 mg/día dividido en 2 tomas; puede aumentarse a 600 mg/día."),
            maxDose: t(lang, "Dose máxima: 600 mg/dia.", "Dosis máxima: 600 mg/día.")
          },
          doseKg: {
            standard: t(lang, "Não se utiliza cálculo por kg.", "No se utiliza cálculo por kg."),
            pediatric: t(lang, "Uso pediátrico especializado.", "Uso pediátrico especializado."),
            maxDose: t(lang, "600 mg/dia", "600 mg/día")
          },
          indications: [
            t(lang, "Transtorno depressivo maior", "Trastorno depresivo mayor"),
            t(lang, "Depressão atípica", "Depresión atípica"),
            t(lang, "Fobia social", "Fobia social"),
            t(lang, "Transtorno do pânico", "Trastorno de pánico"),
            t(lang, "Ansiedade generalizada", "Ansiedad generalizada"),
            t(lang, "Depressão resistente", "Depresión resistente")
          ],
          renalAdjustment: insuficienciaRenal
            ? t(lang, "Usar com cautela.", "Usar con cautela.")
            : t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia
            ? t(lang, "Reduzir dose.", "Reducir dosis.")
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Inibidor reversível e seletivo da MAO-A.", "Inhibidor reversible y selectivo de MAO-A."),
          onset: t(lang, "Efeito antidepressivo geralmente em 2–4 semanas.", "Efecto antidepresivo generalmente en 2–4 semanas."),
          halfLife: t(lang, "Vida média aproximada: 1–2 horas.", "Vida media aproximada: 1–2 horas."),
          commonAdverseEffects: [
            t(lang, "Insônia", "Insomnio"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Náuseas", "Náuseas"),
            t(lang, "Cefaleia", "Cefalea")
          ],
          dangerousAdverseEffects: [
            t(lang, "Síndrome serotoninérgica", "Síndrome serotoninérgico"),
            t(lang, "Crise hipertensiva (menos comum)", "Crisis hipertensiva (menos frecuente)"),
            t(lang, "Virada maníaca", "Viraje maníaco")
          ],
          risksByPatient: [
            idade >= 65
              ? t(lang, "Iniciar com doses menores.", "Iniciar con dosis menores.")
              : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Uso concomitante com ISRS", "Uso concomitante con ISRS"),
            t(lang, "Feocromocitoma", "Feocromocitoma")
          ],
          interactions: [
            t(lang, "ISRS", "ISRS"),
            t(lang, "Tramadol", "Tramadol"),
            t(lang, "Linezolida", "Linezolid"),
            t(lang, "Dextrometorfano", "Dextrometorfano")
          ],
          alerts: [
            t(lang, "Menor restrição alimentar que IMAOs irreversíveis.", "Menor restricción alimentaria que IMAO irreversibles."),
            t(lang, "Menor risco de crise hipertensiva comparado à fenelzina e tranilcipromina.", "Menor riesgo de crisis hipertensiva comparado con fenelzina y tranilcipromina.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    clonazepam: {
      name: { pt: "Clonazepam", es: "Clonazepam" },
      category: "ansiolitico",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = clcr < 60;

        return {
          name: t(lang, "Clonazepam", "Clonazepam"),
          class: t(lang, "Benzodiazepínico", "Benzodiacepina"),
          category: "ansiolitico",
          commercialNames: {
            br: ["Rivotril", "Clonazepam EMS", "Medley", "Neo Química"],
            ar: ["Rivotril", "Clonagin", "Neuryl", "Clonazepam Bagó"]
          },
          presentation: [
            t(lang, "Comprimido 0,25 mg", "Comprimido 0,25 mg"),
            t(lang, "Comprimido 0,5 mg", "Comprimido 0,5 mg"),
            t(lang, "Comprimido 2 mg", "Comprimido 2 mg"),
            t(lang, "Gotas 2,5 mg/mL", "Gotas 2,5 mg/mL")
          ],
          dose: {
            adulto: t(lang, "Ansiedade/pânico: iniciar 0,25–0,5 mg VO 1–2x/dia; titular conforme resposta.", "Ansiedad/pánico: iniciar 0,25–0,5 mg VO 1–2 veces/día; titular según respuesta."),
            panico: t(lang, "Dose usual: 1–2 mg/dia divididos em 1–2 tomadas.", "Dosis habitual: 1–2 mg/día divididos en 1–2 tomas."),
            maxDose: t(lang, "Dose máxima usual: 4 mg/dia.", "Dosis máxima habitual: 4 mg/día.")
          },
          doseKg: {
            standard: t(lang, "Não se utiliza cálculo rotineiro por kg em adultos.", "No se utiliza cálculo rutinario por kg en adultos."),
            pediatric: t(lang, "Epilepsia pediátrica: 0,01–0,05 mg/kg/dia divididos em 2–3 tomadas.", "Epilepsia pediátrica: 0,01–0,05 mg/kg/día divididos en 2–3 tomas."),
            maxDose: t(lang, "4 mg/dia (adultos)", "4 mg/día (adultos)")
          },
          indications: [
            t(lang, "Transtorno do pânico", "Trastorno de pánico"),
            t(lang, "Transtorno de ansiedade generalizada", "Trastorno de ansiedad generalizada"),
            t(lang, "Crises de ansiedade aguda", "Crisis de ansiedad aguda"),
            t(lang, "Epilepsia", "Epilepsia"),
            t(lang, "Mioclonias", "Mioclonías"),
            t(lang, "Síndrome das pernas inquietas", "Síndrome de piernas inquietas"),
            t(lang, "Acatisia induzida por antipsicóticos", "Acatisia inducida por antipsicóticos"),
            t(lang, "Insônia associada à ansiedade", "Insomnio asociado a ansiedad")
          ],
          renalAdjustment: t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia
            ? t(lang, "Utilizar com cautela e considerar redução da dose.", "Utilizar con cautela y considerar reducción de dosis.")
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Potencializa a ação do GABA através do receptor GABA-A, aumentando a entrada de cloro e reduzindo a excitabilidade neuronal.", "Potencia la acción del GABA a través del receptor GABA-A, aumentando la entrada de cloro y reduciendo la excitabilidad neuronal."),
          onset: t(lang, "Início de ação em 30–60 minutos.", "Inicio de acción en 30–60 minutos."),
          halfLife: t(lang, "Vida média aproximada: 18–50 horas.", "Vida media aproximada: 18–50 horas."),
          commonAdverseEffects: [
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Fadiga", "Fatiga"),
            t(lang, "Déficit de memória", "Déficit de memoria"),
            t(lang, "Ataxia", "Ataxia"),
            t(lang, "Redução da concentração", "Disminución de la concentración")
          ],
          dangerousAdverseEffects: [
            t(lang, "Dependência física", "Dependencia física"),
            t(lang, "Síndrome de abstinência", "Síndrome de abstinencia"),
            t(lang, "Depressão respiratória", "Depresión respiratoria"),
            t(lang, "Quedas", "Caídas"),
            t(lang, "Coma em associação com depressores do SNC", "Coma en asociación con depresores del SNC")
          ],
          risksByPatient: [
            idade >= 65
              ? t(lang, "Elevado risco de sedação, quedas e confusão.", "Elevado riesgo de sedación, caídas y confusión.")
              : null,
            gestante
              ? t(lang, "Gestação: risco de síndrome de abstinência neonatal e hipotonia fetal.", "Embarazo: riesgo de síndrome de abstinencia neonatal e hipotonía fetal.")
              : null,
            hepatopatia
              ? t(lang, "Hepatopatia: maior risco de acúmulo.", "Hepatopatía: mayor riesgo de acumulación.")
              : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Miastenia gravis", "Miastenia gravis"),
            t(lang, "Insuficiência respiratória grave", "Insuficiencia respiratoria grave"),
            t(lang, "Apneia do sono grave", "Apnea del sueño grave"),
            t(lang, "Hipersensibilidade a benzodiazepínicos", "Hipersensibilidad a benzodiacepinas")
          ],
          interactions: [
            t(lang, "Álcool", "Alcohol"),
            t(lang, "Opioides", "Opioides"),
            t(lang, "Barbitúricos", "Barbitúricos"),
            t(lang, "Antipsicóticos", "Antipsicóticos"),
            t(lang, "Anti-histamínicos sedativos", "Antihistamínicos sedantes")
          ],
          alerts: [
            t(lang, "Não suspender abruptamente.", "No suspender abruptamente."),
            t(lang, "Risco elevado de dependência em uso prolongado.", "Riesgo elevado de dependencia en uso prolongado."),
            t(lang, "Evitar associação com álcool.", "Evitar asociación con alcohol.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    alprazolam: {
      name: { pt: "Alprazolam", es: "Alprazolam" },
      category: "ansiolitico",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = clcr < 60;

        return {
          name: t(lang, "Alprazolam", "Alprazolam"),
          class: t(lang, "Benzodiazepínico", "Benzodiacepina"),
          category: "ansiolitico",
          commercialNames: {
            br: ["Frontal", "Apraz", "Alprazolam EMS"],
            ar: ["Alplax", "Trankimazin", "Alprazolam Bagó"]
          },
          presentation: [
            t(lang, "Comprimido 0,25 mg", "Comprimido 0,25 mg"),
            t(lang, "Comprimido 0,5 mg", "Comprimido 0,5 mg"),
            t(lang, "Comprimido 1 mg", "Comprimido 1 mg"),
            t(lang, "Comprimido 2 mg", "Comprimido 2 mg")
          ],
          dose: {
            adulto: t(lang, "0,25–0,5 mg VO 2–3x/dia; titular conforme necessidade.", "0,25–0,5 mg VO 2–3 veces/día; titular según necesidad."),
            panico: t(lang, "Dose usual: 1–6 mg/dia.", "Dosis habitual: 1–6 mg/día."),
            maxDose: t(lang, "Dose máxima usual: 10 mg/dia.", "Dosis máxima habitual: 10 mg/día.")
          },
          doseKg: {
            standard: t(lang, "Não se utiliza cálculo rotineiro por kg em adultos.", "No se utiliza cálculo rutinario por kg en adultos."),
            pediatric: t(lang, "Uso pediátrico especializado.", "Uso pediátrico especializado."),
            maxDose: t(lang, "10 mg/dia", "10 mg/día")
          },
          indications: [
            t(lang, "Transtorno do pânico", "Trastorno de pánico"),
            t(lang, "Transtorno de ansiedade generalizada", "Trastorno de ansiedad generalizada"),
            t(lang, "Crises de ansiedade aguda", "Crisis de ansiedad aguda"),
            t(lang, "Ansiedade associada à depressão", "Ansiedad asociada a depresión"),
            t(lang, "Fobia social", "Fobia social"),
            t(lang, "Insônia relacionada à ansiedade", "Insomnio relacionado con ansiedad"),
            t(lang, "Ansiedade pré-operatória", "Ansiedad preoperatoria")
          ],
          renalAdjustment: t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia
            ? t(lang, "Reduzir dose e monitorar.", "Reducir dosis y monitorizar.")
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Potencializa a neurotransmissão GABAérgica através do receptor GABA-A.", "Potencia la neurotransmisión GABAérgica a través del receptor GABA-A."),
          onset: t(lang, "Início de ação em 20–60 minutos.", "Inicio de acción en 20–60 minutos."),
          halfLife: t(lang, "Vida média aproximada: 10–15 horas.", "Vida media aproximada: 10–15 horas."),
          commonAdverseEffects: [
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Fadiga", "Fatiga"),
            t(lang, "Déficit de memória", "Déficit de memoria"),
            t(lang, "Redução da atenção", "Disminución de la atención")
          ],
          dangerousAdverseEffects: [
            t(lang, "Dependência intensa", "Dependencia intensa"),
            t(lang, "Abstinência grave", "Abstinencia grave"),
            t(lang, "Depressão respiratória", "Depresión respiratoria"),
            t(lang, "Convulsões na retirada abrupta", "Convulsiones en retirada brusca")
          ],
          risksByPatient: [
            idade >= 65
              ? t(lang, "Elevado risco de sedação, quedas e confusão.", "Elevado riesgo de sedación, caídas y confusión.")
              : null,
            gestante
              ? t(lang, "Gestação: risco de abstinência neonatal.", "Embarazo: riesgo de abstinencia neonatal.")
              : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Miastenia gravis", "Miastenia gravis"),
            t(lang, "Apneia do sono grave", "Apnea del sueño grave"),
            t(lang, "Insuficiência respiratória grave", "Insuficiencia respiratoria grave")
          ],
          interactions: [
            t(lang, "Álcool", "Alcohol"),
            t(lang, "Opioides", "Opioides"),
            t(lang, "Cetoconazol", "Ketoconazol"),
            t(lang, "Claritromicina", "Claritromicina")
          ],
          alerts: [
            t(lang, "Alto potencial de dependência.", "Alto potencial de dependencia."),
            t(lang, "Não suspender abruptamente.", "No suspender abruptamente."),
            t(lang, "Maior risco de abstinência devido à meia-vida curta.", "Mayor riesgo de abstinencia debido a la vida media corta.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    diazepam: {
      name: { pt: "Diazepam", es: "Diazepam" },
      category: "ansiolitico",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = clcr < 60;

        return {
          name: t(lang, "Diazepam", "Diazepam"),
          class: t(lang, "Benzodiazepínico de longa ação", "Benzodiacepina de larga duración"),
          category: "ansiolitico",
          commercialNames: {
            br: ["Valium", "Uni-Diazepax", "Diazepam EMS"],
            ar: ["Valium", "Diazepam Bagó", "Diazepam Richmond"]
          },
          presentation: [
            t(lang, "Comprimido 5 mg", "Comprimido 5 mg"),
            t(lang, "Comprimido 10 mg", "Comprimido 10 mg"),
            t(lang, "Ampola 10 mg/2 mL", "Ampolla 10 mg/2 mL"),
            t(lang, "Solução oral", "Solución oral")
          ],
          dose: {
            adulto: t(lang, "Ansiedade: 2–10 mg VO 2–4x/dia.", "Ansiedad: 2–10 mg VO 2–4 veces/día."),
            abstinencia: t(lang, "Abstinência alcoólica: doses individualizadas conforme protocolo.", "Abstinencia alcohólica: dosis individualizadas según protocolo."),
            maxDose: t(lang, "Variável conforme indicação clínica.", "Variable según indicación clínica.")
          },
          doseKg: {
            standard: t(lang, "Não se utiliza cálculo rotineiro por kg em adultos.", "No se utiliza cálculo rutinario por kg en adultos."),
            pediatric: t(lang, "Convulsões pediátricas: 0,2–0,5 mg/kg IV; máx 10 mg.", "Convulsiones pediátricas: 0,2–0,5 mg/kg IV; máx 10 mg."),
            maxDose: t(lang, "Variável conforme indicação", "Variable según indicación")
          },
          indications: [
            t(lang, "Transtornos de ansiedade", "Trastornos de ansiedad"),
            t(lang, "Abstinência alcoólica", "Abstinencia alcohólica"),
            t(lang, "Estado de mal epiléptico", "Estado epiléptico"),
            t(lang, "Convulsões agudas", "Convulsiones agudas"),
            t(lang, "Espasticidade muscular", "Espasticidad muscular"),
            t(lang, "Espasmos musculares", "Espasmos musculares"),
            t(lang, "Sedação pré-operatória", "Sedación preoperatoria"),
            t(lang, "Síndrome de abstinência benzodiazepínica", "Síndrome de abstinencia benzodiacepínica")
          ],
          renalAdjustment: t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia
            ? t(lang, "Reduzir dose; risco de encefalopatia.", "Reducir dosis; riesgo de encefalopatía.")
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Facilita a ação do GABA através do receptor GABA-A.", "Facilita la acción del GABA a través del receptor GABA-A."),
          onset: t(lang, "VO: 30–60 minutos. EV: 1–5 minutos.", "VO: 30–60 minutos. IV: 1–5 minutos."),
          halfLife: t(lang, "Vida média: 20–80 horas; metabólitos ativos até 100 horas.", "Vida media: 20–80 horas; metabolitos activos hasta 100 horas."),
          commonAdverseEffects: [
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Ataxia", "Ataxia"),
            t(lang, "Fraqueza muscular", "Debilidad muscular"),
            t(lang, "Confusão", "Confusión"),
            t(lang, "Tontura", "Mareos")
          ],
          dangerousAdverseEffects: [
            t(lang, "Depressão respiratória", "Depresión respiratoria"),
            t(lang, "Coma", "Coma"),
            t(lang, "Dependência", "Dependencia"),
            t(lang, "Quedas em idosos", "Caídas en adultos mayores")
          ],
          risksByPatient: [
            idade >= 65
              ? t(lang, "Acúmulo importante; elevado risco de quedas e confusão.", "Acumulación importante; elevado riesgo de caídas y confusión.")
              : null,
            hepatopatia
              ? t(lang, "Risco de encefalopatia hepática.", "Riesgo de encefalopatía hepática.")
              : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Miastenia gravis", "Miastenia gravis"),
            t(lang, "Insuficiência respiratória grave", "Insuficiencia respiratoria grave"),
            t(lang, "Apneia do sono grave", "Apnea del sueño grave")
          ],
          interactions: [
            t(lang, "Álcool", "Alcohol"),
            t(lang, "Opioides", "Opioides"),
            t(lang, "Barbitúricos", "Barbitúricos"),
            t(lang, "Antipsicóticos", "Antipsicóticos")
          ],
          alerts: [
            t(lang, "Fármaco de escolha para abstinência alcoólica.", "Fármaco de elección para abstinencia alcohólica."),
            t(lang, "Acúmulo importante em idosos.", "Acumulación importante en adultos mayores."),
            t(lang, "Não suspender abruptamente após uso prolongado.", "No suspender abruptamente tras uso prolongado.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    lorazepam: {
      name: { pt: "Lorazepam", es: "Lorazepam" },
      category: "ansiolitico",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = Number(paciente.clcr || 100) < 60;

        return {
          name: t(lang, "Lorazepam", "Lorazepam"),
          class: t(lang, "Benzodiazepínico de ação intermediária", "Benzodiacepina de acción intermedia"),
          category: "ansiolitico",
          commercialNames: {
            br: ["Lorax", "Lorazepam EMS", "Lorazepam Medley"],
            ar: ["Trapax", "Emotival", "Lorazepam Bagó", "Lorazepam Denver Farma"]
          },
          presentation: [
            t(lang, "Comprimido 1 mg", "Comprimido 1 mg"),
            t(lang, "Comprimido 2 mg", "Comprimido 2 mg"),
            t(lang, "Ampola 4 mg/mL", "Ampolla 4 mg/mL")
          ],
          dose: {
            adulto: t(lang, "Ansiedade: 1–2 mg VO 2–3x/dia.", "Ansiedad: 1–2 mg VO 2–3 veces/día."),
            insonia: t(lang, "Insônia associada à ansiedade: 1–2 mg VO ao deitar.", "Insomnio asociado a ansiedad: 1–2 mg VO al acostarse."),
            agitacao: t(lang, "Agitação aguda: 1–2 mg VO/IM/EV conforme protocolo e monitorização.", "Agitación aguda: 1–2 mg VO/IM/IV según protocolo y monitorización."),
            maxDose: t(lang, "Dose máxima usual: 10 mg/dia.", "Dosis máxima habitual: 10 mg/día.")
          },
          doseKg: {
            standard: t(lang, "Não se utiliza cálculo rotineiro por kg em adultos.", "No se utiliza cálculo rutinario por kg en adultos."),
            pediatric: t(lang, "Pediatria: uso especializado conforme indicação.", "Pediatría: uso especializado según indicación."),
            maxDose: t(lang, "10 mg/dia", "10 mg/día")
          },
          indications: [
            t(lang, "Transtorno de ansiedade generalizada", "Trastorno de ansiedad generalizada"),
            t(lang, "Crises de ansiedade aguda", "Crisis de ansiedad aguda"),
            t(lang, "Insônia associada à ansiedade", "Insomnio asociado a ansiedad"),
            t(lang, "Agitação psicomotora", "Agitación psicomotora"),
            t(lang, "Catatonia", "Catatonía"),
            t(lang, "Estado de mal epiléptico", "Estado epiléptico"),
            t(lang, "Sedação pré-procedimento", "Sedación preprocedimiento"),
            t(lang, "Abstinência alcoólica, especialmente em hepatopatia", "Abstinencia alcohólica, especialmente en hepatopatía")
          ],
          renalAdjustment: insuficienciaRenal
            ? t(lang, "Geralmente sem ajuste VO; cautela com formulações EV em insuficiência renal importante.", "Generalmente sin ajuste VO; cautela con formulaciones IV en insuficiencia renal importante.")
            : t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia
            ? t(lang, "Preferível a diazepam em hepatopatia por não ter metabólitos ativos; ainda assim usar menor dose.", "Preferible a diazepam en hepatopatía por no tener metabolitos activos; aun así usar menor dosis.")
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Potencializa o GABA no receptor GABA-A, aumentando frequência de abertura dos canais de cloro.", "Potencia el GABA en el receptor GABA-A, aumentando la frecuencia de apertura de los canales de cloro."),
          onset: t(lang, "VO: 30–60 min; EV: 1–5 min; IM: 15–30 min.", "VO: 30–60 min; IV: 1–5 min; IM: 15–30 min."),
          halfLife: t(lang, "Vida média aproximada: 10–20 horas.", "Vida media aproximada: 10–20 horas."),
          commonAdverseEffects: [
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Ataxia", "Ataxia"),
            t(lang, "Confusão", "Confusión"),
            t(lang, "Amnésia anterógrada", "Amnesia anterógrada"),
            t(lang, "Fraqueza muscular", "Debilidad muscular")
          ],
          dangerousAdverseEffects: [
            t(lang, "Depressão respiratória", "Depresión respiratoria"),
            t(lang, "Dependência física", "Dependencia física"),
            t(lang, "Síndrome de abstinência", "Síndrome de abstinencia"),
            t(lang, "Quedas e fraturas em idosos", "Caídas y fracturas en adultos mayores"),
            t(lang, "Coma quando associado a depressores do SNC", "Coma cuando se asocia a depresores del SNC")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: maior risco de sedação, delirium, quedas e fraturas.", "Adulto mayor: mayor riesgo de sedación, delirium, caídas y fracturas.") : null,
            gestante ? t(lang, "Gestação: avaliar risco-benefício; evitar uso crônico.", "Embarazo: evaluar riesgo-beneficio; evitar uso crónico.") : null,
            lactante ? t(lang, "Lactação: monitorar sedação e dificuldade de sucção no lactente.", "Lactancia: monitorizar sedación y dificultad de succión en el lactante.") : null,
            hepatopatia ? t(lang, "Hepatopatia: opção relativamente mais segura que diazepam, mas usar menor dose.", "Hepatopatía: opción relativamente más segura que diazepam, pero usar dosis menor.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade a benzodiazepínicos", "Hipersensibilidad a benzodiacepinas"),
            t(lang, "Miastenia gravis", "Miastenia gravis"),
            t(lang, "Insuficiência respiratória grave", "Insuficiencia respiratoria grave"),
            t(lang, "Apneia do sono grave", "Apnea del sueño grave"),
            t(lang, "Intoxicação aguda por álcool ou depressores do SNC", "Intoxicación aguda por alcohol o depresores del SNC")
          ],
          interactions: [
            t(lang, "Álcool", "Alcohol"),
            t(lang, "Opioides", "Opioides"),
            t(lang, "Barbitúricos", "Barbitúricos"),
            t(lang, "Antipsicóticos sedativos", "Antipsicóticos sedativos"),
            t(lang, "Anti-histamínicos sedativos", "Antihistamínicos sedantes")
          ],
          alerts: [
            t(lang, "Não suspender abruptamente após uso prolongado.", "No suspender abruptamente tras uso prolongado."),
            t(lang, "Evitar associação com opioides e álcool.", "Evitar asociación con opioides y alcohol."),
            t(lang, "Útil em abstinência alcoólica quando há hepatopatia.", "Útil en abstinencia alcohólica cuando hay hepatopatía."),
            t(lang, "Monitorar ventilação se uso EV.", "Monitorizar ventilación si uso IV.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Lorazepam Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    bromazepam: {
      name: { pt: "Bromazepam", es: "Bromazepam" },
      category: "ansiolitico",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = Number(paciente.clcr || 100) < 60;

        return {
          name: t(lang, "Bromazepam", "Bromazepam"),
          class: t(lang, "Benzodiazepínico ansiolítico", "Benzodiacepina ansiolítica"),
          category: "ansiolitico",
          commercialNames: {
            br: ["Lexotan", "Somalium", "Bromazepam EMS", "Bromazepam Medley"],
            ar: ["Lexotanil", "Bromazepam Bagó", "Bromazepam Denver Farma"]
          },
          presentation: [
            t(lang, "Comprimido 3 mg", "Comprimido 3 mg"),
            t(lang, "Comprimido 6 mg", "Comprimido 6 mg"),
            t(lang, "Gotas 2,5 mg/mL", "Gotas 2,5 mg/mL")
          ],
          dose: {
            adulto: t(lang, "Ansiedade: 1,5–3 mg VO 2–3x/dia.", "Ansiedad: 1,5–3 mg VO 2–3 veces/día."),
            casosGraves: t(lang, "Casos graves: 6–12 mg VO 2–3x/dia sob supervisão.", "Casos graves: 6–12 mg VO 2–3 veces/día bajo supervisión."),
            maxDose: t(lang, "Dose máxima usual: 36 mg/dia em casos selecionados.", "Dosis máxima habitual: 36 mg/día en casos seleccionados.")
          },
          doseKg: {
            standard: t(lang, "Não se utiliza cálculo por kg em adultos.", "No se utiliza cálculo por kg en adultos."),
            pediatric: t(lang, "Uso pediátrico não rotineiro.", "Uso pediátrico no rutinario."),
            maxDose: t(lang, "36 mg/dia", "36 mg/día")
          },
          indications: [
            t(lang, "Transtorno de ansiedade generalizada", "Trastorno de ansiedad generalizada"),
            t(lang, "Crises de ansiedade", "Crisis de ansiedad"),
            t(lang, "Ansiedade somatizada", "Ansiedad somatizada"),
            t(lang, "Insônia associada à ansiedade", "Insomnio asociado a ansiedad"),
            t(lang, "Tensão emocional intensa", "Tensión emocional intensa"),
            t(lang, "Ansiedade associada à depressão", "Ansiedad asociada a depresión"),
            t(lang, "Sintomas autonômicos relacionados à ansiedade", "Síntomas autonómicos relacionados con ansiedad")
          ],
          renalAdjustment: t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia
            ? t(lang, "Hepatopatia: usar dose menor e titular lentamente.", "Hepatopatía: usar dosis menor y titular lentamente.")
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Potencializa a ação do GABA no receptor GABA-A, reduzindo excitabilidade neuronal.", "Potencia la acción del GABA en el receptor GABA-A, reduciendo la excitabilidad neuronal."),
          onset: t(lang, "Início de ação geralmente em 30–60 minutos.", "Inicio de acción generalmente en 30–60 minutos."),
          halfLife: t(lang, "Vida média aproximada: 10–20 horas.", "Vida media aproximada: 10–20 horas."),
          commonAdverseEffects: [
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Fadiga", "Fatiga"),
            t(lang, "Lentificação psicomotora", "Enlentecimiento psicomotor"),
            t(lang, "Déficit de memória", "Déficit de memoria"),
            t(lang, "Ataxia", "Ataxia")
          ],
          dangerousAdverseEffects: [
            t(lang, "Dependência física", "Dependencia física"),
            t(lang, "Síndrome de abstinência", "Síndrome de abstinencia"),
            t(lang, "Depressão respiratória", "Depresión respiratoria"),
            t(lang, "Quedas em idosos", "Caídas en adultos mayores"),
            t(lang, "Reação paradoxal com agitação ou agressividade", "Reacción paradójica con agitación o agresividad")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: maior risco de sedação, quedas, confusão e acúmulo.", "Adulto mayor: mayor riesgo de sedación, caídas, confusión y acumulación.") : null,
            gestante ? t(lang, "Gestação: evitar uso crônico; avaliar risco-benefício.", "Embarazo: evitar uso crónico; evaluar riesgo-beneficio.") : null,
            lactante ? t(lang, "Lactação: monitorar sedação no lactente.", "Lactancia: monitorizar sedación en el lactante.") : null,
            hepatopatia ? t(lang, "Hepatopatia: maior risco de sedação prolongada.", "Hepatopatía: mayor riesgo de sedación prolongada.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Miastenia gravis", "Miastenia gravis"),
            t(lang, "Insuficiência respiratória grave", "Insuficiencia respiratoria grave"),
            t(lang, "Apneia do sono grave", "Apnea del sueño grave"),
            t(lang, "Hipersensibilidade a benzodiazepínicos", "Hipersensibilidad a benzodiacepinas"),
            t(lang, "Insuficiência hepática grave", "Insuficiencia hepática grave")
          ],
          interactions: [
            t(lang, "Álcool", "Alcohol"),
            t(lang, "Opioides", "Opioides"),
            t(lang, "Barbitúricos", "Barbitúricos"),
            t(lang, "Antipsicóticos", "Antipsicóticos"),
            t(lang, "Antidepressivos sedativos", "Antidepresivos sedativos"),
            t(lang, "Anti-histamínicos sedativos", "Antihistamínicos sedantes")
          ],
          alerts: [
            t(lang, "Usar pelo menor tempo possível.", "Usar durante el menor tiempo posible."),
            t(lang, "Não suspender abruptamente após uso prolongado.", "No suspender abruptamente tras uso prolongado."),
            t(lang, "Evitar dirigir ou operar máquinas.", "Evitar conducir u operar máquinas."),
            t(lang, "Evitar associação com álcool e opioides.", "Evitar asociación con alcohol y opioides.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    midazolam: {
      name: { pt: "Midazolam", es: "Midazolam" },
      category: "ansiolitico",

      calculate: (paciente, lang = "pt") => {
        const peso = Number(paciente.peso || 0);
        const idade = Number(paciente.idade || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = Number(paciente.clcr || 100) < 60;

        const doseSedacaoMin = peso * 0.02;
        const doseSedacaoMax = peso * 0.05;
        const doseConvulsao = peso * 0.2;

        return {
          name: t(lang, "Midazolam", "Midazolam"),
          class: t(lang, "Benzodiazepínico de curta ação", "Benzodiacepina de acción corta"),
          category: "ansiolitico",
          commercialNames: {
            br: ["Dormonid", "Dormire", "Midazolam Cristália", "Midazolam União Química"],
            ar: ["Dormicum", "Midazolam Richmond", "Midazolam Klonal", "Midazolam Denver Farma"]
          },
          presentation: [
            t(lang, "Ampola 5 mg/mL", "Ampolla 5 mg/mL"),
            t(lang, "Ampola 1 mg/mL", "Ampolla 1 mg/mL"),
            t(lang, "Comprimido 7,5 mg", "Comprimido 7,5 mg"),
            t(lang, "Comprimido 15 mg", "Comprimido 15 mg"),
            t(lang, "Solução oral 2 mg/mL", "Solución oral 2 mg/mL")
          ],
          dose: {
            adulto: t(lang, "Sedação procedural: 1–2 mg EV lento, repetir pequenas doses conforme resposta.", "Sedación procedural: 1–2 mg IV lento, repetir pequeñas dosis según respuesta."),
            dosePesoSedacao: peso > 0
              ? t(lang, `Sedação EV por peso: ${doseSedacaoMin.toFixed(1)}–${doseSedacaoMax.toFixed(1)} mg por dose.`, `Sedación IV por peso: ${doseSedacaoMin.toFixed(1)}–${doseSedacaoMax.toFixed(1)} mg por dosis.`)
              : t(lang, "Sedação EV: 0,02–0,05 mg/kg por dose.", "Sedación IV: 0,02–0,05 mg/kg por dosis."),
            convulsao: peso > 0
              ? t(lang, `Convulsão/estado epiléptico: aproximadamente ${doseConvulsao.toFixed(1)} mg IM/IN conforme protocolo.`, `Convulsión/estado epiléptico: aproximadamente ${doseConvulsao.toFixed(1)} mg IM/IN según protocolo.`)
              : t(lang, "Convulsão: 0,2 mg/kg IM/IN conforme protocolo.", "Convulsión: 0,2 mg/kg IM/IN según protocolo."),
            maxDose: t(lang, "Dose máxima depende da indicação, via, idade, comorbidades e nível de monitorização.", "La dosis máxima depende de indicación, vía, edad, comorbilidades y nivel de monitorización.")
          },
          doseKg: {
            standard: t(lang, "Sedação: 0,02–0,05 mg/kg EV lentamente.", "Sedación: 0,02–0,05 mg/kg IV lentamente."),
            severe: t(lang, "Convulsão: 0,2 mg/kg IM/IN conforme protocolo local.", "Convulsión: 0,2 mg/kg IM/IN según protocolo local."),
            maxDose: t(lang, "Individualizar conforme protocolo e monitorização.", "Individualizar según protocolo y monitorización.")
          },
          indications: [
            t(lang, "Sedação procedural", "Sedación procedural"),
            t(lang, "Sedação em UTI", "Sedación en UCI"),
            t(lang, "Indução anestésica", "Inducción anestésica"),
            t(lang, "Pré-medicação anestésica", "Premedicación anestésica"),
            t(lang, "Estado de mal epiléptico", "Estado epiléptico"),
            t(lang, "Convulsões agudas", "Convulsiones agudas"),
            t(lang, "Agitação grave em contexto monitorizado", "Agitación grave en contexto monitorizado"),
            t(lang, "Amnésia anterógrada para procedimentos", "Amnesia anterógrada para procedimientos")
          ],
          renalAdjustment: insuficienciaRenal
            ? t(lang, "Insuficiência renal: risco de sedação prolongada por metabólitos; monitorar e reduzir dose se necessário.", "Insuficiencia renal: riesgo de sedación prolongada por metabolitos; monitorizar y reducir dosis si necesario.")
            : t(lang, "Sem ajuste renal habitual em dose única.", "Sin ajuste renal habitual en dosis única."),
          hepaticAdjustment: hepatopatia
            ? t(lang, "Hepatopatia: reduzir dose e monitorar sedação prolongada.", "Hepatopatía: reducir dosis y monitorizar sedación prolongada.")
            : t(lang, "Sem ajuste hepático habitual em dose única.", "Sin ajuste hepático habitual en dosis única."),
          mechanism: t(lang, "Potencializa o GABA no receptor GABA-A, produzindo sedação, ansiólise, anticonvulsão, relaxamento muscular e amnésia.", "Potencia el GABA en el receptor GABA-A, produciendo sedación, ansiólisis, anticonvulsión, relajación muscular y amnesia."),
          onset: t(lang, "EV: 1–5 min; IM: 5–15 min; intranasal: 5–10 min; VO: 15–30 min.", "IV: 1–5 min; IM: 5–15 min; intranasal: 5–10 min; VO: 15–30 min."),
          halfLife: t(lang, "Vida média aproximada: 1,5–3 horas, podendo prolongar em idosos, obesidade, hepatopatia ou infusão contínua.", "Vida media aproximada: 1,5–3 horas, pudiendo prolongarse en adultos mayores, obesidad, hepatopatía o infusión continua."),
          commonAdverseEffects: [
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Amnésia anterógrada", "Amnesia anterógrada"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Hipotensão", "Hipotensión"),
            t(lang, "Ataxia", "Ataxia"),
            t(lang, "Náuseas", "Náuseas")
          ],
          dangerousAdverseEffects: [
            t(lang, "Depressão respiratória", "Depresión respiratoria"),
            t(lang, "Apneia", "Apnea"),
            t(lang, "Hipotensão grave", "Hipotensión grave"),
            t(lang, "Parada cardiorrespiratória em pacientes vulneráveis ou associação com opioides", "Paro cardiorrespiratorio en pacientes vulnerables o asociación con opioides"),
            t(lang, "Sedação prolongada", "Sedación prolongada"),
            t(lang, "Reação paradoxal com agitação", "Reacción paradójica con agitación")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: maior sensibilidade, risco de apneia, delirium, quedas e sedação prolongada.", "Adulto mayor: mayor sensibilidad, riesgo de apnea, delirium, caídas y sedación prolongada.") : null,
            gestante ? t(lang, "Gestação: usar apenas se necessário e com monitorização.", "Embarazo: usar solo si es necesario y con monitorización.") : null,
            lactante ? t(lang, "Lactação: monitorar sedação no lactente; cautela após doses repetidas.", "Lactancia: monitorizar sedación en el lactante; cautela tras dosis repetidas.") : null,
            hepatopatia ? t(lang, "Hepatopatia: maior risco de sedação prolongada.", "Hepatopatía: mayor riesgo de sedación prolongada.") : null,
            insuficienciaRenal ? t(lang, "Insuficiência renal: risco de acúmulo de metabólitos em uso prolongado.", "Insuficiencia renal: riesgo de acumulación de metabolitos en uso prolongado.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade a benzodiazepínicos", "Hipersensibilidad a benzodiacepinas"),
            t(lang, "Insuficiência respiratória grave sem suporte ventilatório", "Insuficiencia respiratoria grave sin soporte ventilatorio"),
            t(lang, "Apneia do sono grave sem monitorização", "Apnea del sueño grave sin monitorización"),
            t(lang, "Miastenia gravis", "Miastenia gravis"),
            t(lang, "Choque ou instabilidade hemodinâmica sem suporte adequado", "Shock o inestabilidad hemodinámica sin soporte adecuado")
          ],
          interactions: [
            t(lang, "Opioides", "Opioides"),
            t(lang, "Álcool", "Alcohol"),
            t(lang, "Propofol e outros anestésicos", "Propofol y otros anestésicos"),
            t(lang, "Barbitúricos", "Barbitúricos"),
            t(lang, "Inibidores fortes de CYP3A4 como cetoconazol, claritromicina e ritonavir", "Inhibidores fuertes de CYP3A4 como ketoconazol, claritromicina y ritonavir"),
            t(lang, "Antipsicóticos e anti-histamínicos sedativos", "Antipsicóticos y antihistamínicos sedantes")
          ],
          alerts: [
            t(lang, "Usar EV apenas com monitorização e suporte ventilatório disponível.", "Usar IV solo con monitorización y soporte ventilatorio disponible."),
            t(lang, "Alto risco de depressão respiratória com opioides.", "Alto riesgo de depresión respiratoria con opioides."),
            t(lang, "Administrar lentamente por via EV.", "Administrar lentamente por vía IV."),
            t(lang, "Flumazenil pode reverter efeito, mas pode precipitar convulsões em dependentes ou intoxicação mista.", "Flumazenil puede revertir el efecto, pero puede precipitar convulsiones en dependientes o intoxicación mixta."),
            t(lang, "Evitar uso prolongado sem estratégia de desmame.", "Evitar uso prolongado sin estrategia de retirada.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Midazolam Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    oxazepam: {
      name: { pt: "Oxazepam", es: "Oxazepam" },
      category: "ansiolitico",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = Number(paciente.clcr || 100) < 60;

        return {
          name: t(lang, "Oxazepam", "Oxazepam"),
          class: t(lang, "Benzodiazepínico de ação intermediária", "Benzodiacepina de acción intermedia"),
          category: "ansiolitico",
          commercialNames: {
            br: ["Oxazepam", "Serax"],
            ar: ["Oxazepam", "Serax"]
          },
          presentation: [
            t(lang, "Comprimido 10 mg", "Comprimido 10 mg"),
            t(lang, "Comprimido 15 mg", "Comprimido 15 mg"),
            t(lang, "Comprimido 30 mg", "Comprimido 30 mg")
          ],
          dose: {
            adulto: t(lang, "Ansiedade: 10–30 mg VO 3–4x/dia.", "Ansiedad: 10–30 mg VO 3–4 veces/día."),
            abstinencia: t(lang, "Abstinência alcoólica: 15–30 mg VO 3–4x/dia, conforme protocolo.", "Abstinencia alcohólica: 15–30 mg VO 3–4 veces/día, según protocolo."),
            maxDose: t(lang, "Dose máxima usual: 120 mg/dia.", "Dosis máxima habitual: 120 mg/día.")
          },
          doseKg: {
            standard: t(lang, "Não se utiliza cálculo rotineiro por kg.", "No se utiliza cálculo rutinario por kg."),
            pediatric: t(lang, "Uso pediátrico não rotineiro.", "Uso pediátrico no rutinario."),
            maxDose: t(lang, "120 mg/dia", "120 mg/día")
          },
          indications: [
            t(lang, "Transtorno de ansiedade generalizada", "Trastorno de ansiedad generalizada"),
            t(lang, "Crises de ansiedade aguda", "Crisis de ansiedad aguda"),
            t(lang, "Insônia associada à ansiedade", "Insomnio asociado a ansiedad"),
            t(lang, "Abstinência alcoólica", "Abstinencia alcohólica"),
            t(lang, "Agitação leve a moderada", "Agitación leve a moderada"),
            t(lang, "Ansiedade em idosos quando benzodiazepínico é inevitável", "Ansiedad en adultos mayores cuando benzodiacepina es inevitable"),
            t(lang, "Ansiedade em hepatopatia quando benzodiazepínico é necessário", "Ansiedad en hepatopatía cuando benzodiacepina es necesaria")
          ],
          renalAdjustment: t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia
            ? t(lang, "Preferível em hepatopatia por metabolismo por conjugação; ainda assim usar menor dose.", "Preferible en hepatopatía por metabolismo por conjugación; aun así usar dosis menor.")
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Potencializa a ação do GABA no receptor GABA-A, promovendo ansiólise, sedação e relaxamento muscular.", "Potencia la acción del GABA en el receptor GABA-A, promoviendo ansiólisis, sedación y relajación muscular."),
          onset: t(lang, "Início de ação geralmente em 1–2 horas.", "Inicio de acción generalmente en 1–2 horas."),
          halfLife: t(lang, "Vida média aproximada: 5–15 horas.", "Vida media aproximada: 5–15 horas."),
          commonAdverseEffects: [
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Fadiga", "Fatiga"),
            t(lang, "Ataxia", "Ataxia"),
            t(lang, "Lentificação psicomotora", "Enlentecimiento psicomotor"),
            t(lang, "Déficit de memória", "Déficit de memoria")
          ],
          dangerousAdverseEffects: [
            t(lang, "Dependência física", "Dependencia física"),
            t(lang, "Síndrome de abstinência", "Síndrome de abstinencia"),
            t(lang, "Depressão respiratória", "Depresión respiratoria"),
            t(lang, "Quedas e fraturas em idosos", "Caídas y fracturas en adultos mayores"),
            t(lang, "Reação paradoxal com agitação", "Reacción paradójica con agitación")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: menor acúmulo que diazepam, mas ainda há risco de sedação, delirium e quedas.", "Adulto mayor: menor acumulación que diazepam, pero aún hay riesgo de sedación, delirium y caídas.") : null,
            gestante ? t(lang, "Gestação: evitar uso crônico; avaliar risco-benefício.", "Embarazo: evitar uso crónico; evaluar riesgo-beneficio.") : null,
            lactante ? t(lang, "Lactação: monitorar sedação e dificuldade de sucção no lactente.", "Lactancia: monitorizar sedación y dificultad de succión en el lactante.") : null,
            hepatopatia ? t(lang, "Hepatopatia: opção preferível entre benzodiazepínicos, mas usar menor dose.", "Hepatopatía: opción preferible entre benzodiacepinas, pero usar dosis menor.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade a benzodiazepínicos", "Hipersensibilidad a benzodiacepinas"),
            t(lang, "Miastenia gravis", "Miastenia gravis"),
            t(lang, "Insuficiência respiratória grave", "Insuficiencia respiratoria grave"),
            t(lang, "Apneia do sono grave", "Apnea del sueño grave"),
            t(lang, "Intoxicação aguda por álcool ou depressores do SNC", "Intoxicación aguda por alcohol o depresores del SNC")
          ],
          interactions: [
            t(lang, "Álcool", "Alcohol"),
            t(lang, "Opioides", "Opioides"),
            t(lang, "Barbitúricos", "Barbitúricos"),
            t(lang, "Antipsicóticos sedativos", "Antipsicóticos sedativos"),
            t(lang, "Anti-histamínicos sedativos", "Antihistamínicos sedantes")
          ],
          alerts: [
            t(lang, "Usar pelo menor tempo possível.", "Usar durante el menor tiempo posible."),
            t(lang, "Não suspender abruptamente após uso prolongado.", "No suspender abruptamente tras uso prolongado."),
            t(lang, "Menor dependência de metabolismo hepático oxidativo.", "Menor dependencia de metabolismo hepático oxidativo."),
            t(lang, "Evitar associação com álcool e opioides.", "Evitar asociación con alcohol y opioides.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    temazepam: {
      name: { pt: "Temazepam", es: "Temazepam" },
      category: "ansiolitico",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = Number(paciente.clcr || 100) < 60;

        return {
          name: t(lang, "Temazepam", "Temazepam"),
          class: t(lang, "Benzodiazepínico hipnótico de ação intermediária", "Benzodiacepina hipnótica de acción intermedia"),
          category: "ansiolitico",
          commercialNames: {
            br: ["Restoril", "Temazepam"],
            ar: ["Restoril", "Temazepam"]
          },
          presentation: [
            t(lang, "Cápsula 7,5 mg", "Cápsula 7,5 mg"),
            t(lang, "Cápsula 15 mg", "Cápsula 15 mg"),
            t(lang, "Cápsula 30 mg", "Cápsula 30 mg")
          ],
          dose: {
            adulto: t(lang, "Insônia: 7,5–15 mg VO ao deitar.", "Insomnio: 7,5–15 mg VO al acostarse."),
            casosSelecionados: t(lang, "Pode-se usar 30 mg ao deitar em casos selecionados e por curto prazo.", "Puede usarse 30 mg al acostarse en casos seleccionados y por corto plazo."),
            maxDose: t(lang, "Dose máxima usual: 30 mg/noite.", "Dosis máxima habitual: 30 mg/noche.")
          },
          doseKg: {
            standard: t(lang, "Não se utiliza cálculo por kg em adultos.", "No se utiliza cálculo por kg en adultos."),
            pediatric: t(lang, "Não recomendado como uso pediátrico rotineiro.", "No recomendado como uso pediátrico rutinario."),
            maxDose: t(lang, "30 mg/noite", "30 mg/noche")
          },
          indications: [
            t(lang, "Insônia de curta duração", "Insomnio de corta duración"),
            t(lang, "Insônia de manutenção do sono", "Insomnio de mantenimiento del sueño"),
            t(lang, "Insônia associada à ansiedade", "Insomnio asociado a ansiedad"),
            t(lang, "Insônia situacional", "Insomnio situacional"),
            t(lang, "Insônia transitória por estresse", "Insomnio transitorio por estrés"),
            t(lang, "Sedação noturna em casos selecionados", "Sedación nocturna en casos seleccionados")
          ],
          renalAdjustment: t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia
            ? t(lang, "Hepatopatia: usar menor dose e monitorar sedação prolongada.", "Hepatopatía: usar dosis menor y monitorizar sedación prolongada.")
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Potencializa o GABA no receptor GABA-A, promovendo sedação e indução/manutenção do sono.", "Potencia el GABA en el receptor GABA-A, promoviendo sedación e inducción/mantenimiento del sueño."),
          onset: t(lang, "Início de ação geralmente em 30–60 minutos.", "Inicio de acción generalmente en 30–60 minutos."),
          halfLife: t(lang, "Vida média aproximada: 8–20 horas.", "Vida media aproximada: 8–20 horas."),
          commonAdverseEffects: [
            t(lang, "Sonolência diurna", "Somnolencia diurna"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Fadiga", "Fatiga"),
            t(lang, "Ataxia", "Ataxia"),
            t(lang, "Déficit de memória", "Déficit de memoria"),
            t(lang, "Lentificação psicomotora", "Enlentecimiento psicomotor")
          ],
          dangerousAdverseEffects: [
            t(lang, "Dependência física", "Dependencia física"),
            t(lang, "Síndrome de abstinência", "Síndrome de abstinencia"),
            t(lang, "Depressão respiratória", "Depresión respiratoria"),
            t(lang, "Comportamentos complexos do sono", "Conductas complejas del sueño"),
            t(lang, "Quedas e fraturas em idosos", "Caídas y fracturas en adultos mayores")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: maior risco de sedação residual, confusão, quedas e fraturas.", "Adulto mayor: mayor riesgo de sedación residual, confusión, caídas y fracturas.") : null,
            gestante ? t(lang, "Gestação: evitar; especialmente uso crônico ou próximo ao parto.", "Embarazo: evitar; especialmente uso crónico o cerca del parto.") : null,
            lactante ? t(lang, "Lactação: monitorar sedação e dificuldade de sucção no lactente.", "Lactancia: monitorizar sedación y dificultad de succión en el lactante.") : null,
            hepatopatia ? t(lang, "Hepatopatia: maior risco de sedação prolongada.", "Hepatopatía: mayor riesgo de sedación prolongada.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade a benzodiazepínicos", "Hipersensibilidad a benzodiacepinas"),
            t(lang, "Insuficiência respiratória grave", "Insuficiencia respiratoria grave"),
            t(lang, "Apneia do sono grave", "Apnea del sueño grave"),
            t(lang, "Miastenia gravis", "Miastenia gravis"),
            t(lang, "Intoxicação aguda por álcool ou depressores do SNC", "Intoxicación aguda por alcohol o depresores del SNC")
          ],
          interactions: [
            t(lang, "Álcool", "Alcohol"),
            t(lang, "Opioides", "Opioides"),
            t(lang, "Barbitúricos", "Barbitúricos"),
            t(lang, "Antipsicóticos sedativos", "Antipsicóticos sedativos"),
            t(lang, "Antidepressivos sedativos", "Antidepresivos sedativos"),
            t(lang, "Anti-histamínicos sedativos", "Antihistamínicos sedantes")
          ],
          alerts: [
            t(lang, "Indicado apenas para uso curto em insônia.", "Indicado solo para uso corto en insomnio."),
            t(lang, "Tomar imediatamente antes de deitar.", "Tomar inmediatamente antes de acostarse."),
            t(lang, "Evitar dirigir no dia seguinte se houver sonolência residual.", "Evitar conducir al día siguiente si hay somnolencia residual."),
            t(lang, "Não associar com álcool ou opioides.", "No asociar con alcohol u opioides."),
            t(lang, "Não suspender abruptamente após uso prolongado.", "No suspender abruptamente tras uso prolongado.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Temazepam Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    nitrazepam: {
      name: { pt: "Nitrazepam", es: "Nitrazepam" },
      category: "ansiolitico",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = Number(paciente.clcr || 100) < 60;

        return {
          name: t(lang, "Nitrazepam", "Nitrazepam"),
          class: t(lang, "Benzodiazepínico hipnótico", "Benzodiacepina hipnótica"),
          category: "ansiolitico",
          commercialNames: {
            br: ["Sonebon", "Nitrazepam"],
            ar: ["Mogadon", "Nitrazepam"]
          },
          presentation: [
            t(lang, "Comprimido 5 mg", "Comprimido 5 mg"),
            t(lang, "Comprimido 10 mg", "Comprimido 10 mg")
          ],
          dose: {
            adulto: t(lang, "Insônia: 5 mg VO ao deitar.", "Insomnio: 5 mg VO al acostarse."),
            casosSelecionados: t(lang, "Pode-se usar 10 mg ao deitar em casos selecionados, por curto prazo.", "Puede usarse 10 mg al acostarse en casos seleccionados, por corto plazo."),
            maxDose: t(lang, "Dose máxima usual: 10 mg/noite.", "Dosis máxima habitual: 10 mg/noche.")
          },
          doseKg: {
            standard: t(lang, "Não se utiliza cálculo por kg em adultos.", "No se utiliza cálculo por kg en adultos."),
            pediatric: t(lang, "Epilepsia pediátrica: uso especializado conforme protocolo.", "Epilepsia pediátrica: uso especializado según protocolo."),
            maxDose: t(lang, "10 mg/noite em adultos", "10 mg/noche en adultos")
          },
          indications: [
            t(lang, "Insônia de curta duração", "Insomnio de corta duración"),
            t(lang, "Insônia de manutenção do sono", "Insomnio de mantenimiento del sueño"),
            t(lang, "Insônia associada à ansiedade", "Insomnio asociado a ansiedad"),
            t(lang, "Despertares noturnos frequentes", "Despertares nocturnos frecuentes"),
            t(lang, "Mioclonias epilépticas em casos selecionados", "Mioclonías epilépticas en casos seleccionados"),
            t(lang, "Síndrome de West ou epilepsias específicas sob especialista", "Síndrome de West o epilepsias específicas bajo especialista")
          ],
          renalAdjustment: insuficienciaRenal
            ? t(lang, "Geralmente sem ajuste específico, mas monitorar sedação prolongada.", "Generalmente sin ajuste específico, pero monitorizar sedación prolongada.")
            : t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia
            ? t(lang, "Hepatopatia: evitar ou usar dose menor pela possibilidade de sedação prolongada.", "Hepatopatía: evitar o usar dosis menor por posibilidad de sedación prolongada.")
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Potencializa o GABA no receptor GABA-A, produzindo efeito hipnótico, ansiolítico, anticonvulsivante e relaxante muscular.", "Potencia el GABA en el receptor GABA-A, produciendo efecto hipnótico, ansiolítico, anticonvulsivante y relajante muscular."),
          onset: t(lang, "Início de ação geralmente em 30–60 minutos.", "Inicio de acción generalmente en 30–60 minutos."),
          halfLife: t(lang, "Vida média aproximada: 16–38 horas, com risco de sedação residual.", "Vida media aproximada: 16–38 horas, con riesgo de sedación residual."),
          commonAdverseEffects: [
            t(lang, "Sonolência diurna", "Somnolencia diurna"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Ataxia", "Ataxia"),
            t(lang, "Fadiga", "Fatiga"),
            t(lang, "Confusão", "Confusión"),
            t(lang, "Déficit de memória", "Déficit de memoria")
          ],
          dangerousAdverseEffects: [
            t(lang, "Depressão respiratória", "Depresión respiratoria"),
            t(lang, "Dependência física", "Dependencia física"),
            t(lang, "Síndrome de abstinência", "Síndrome de abstinencia"),
            t(lang, "Quedas e fraturas em idosos", "Caídas y fracturas en adultos mayores"),
            t(lang, "Sedação residual importante", "Sedación residual importante"),
            t(lang, "Reação paradoxal com agitação", "Reacción paradójica con agitación")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: evitar quando possível; maior risco de sedação prolongada, delirium, quedas e fraturas.", "Adulto mayor: evitar cuando sea posible; mayor riesgo de sedación prolongada, delirium, caídas y fracturas.") : null,
            gestante ? t(lang, "Gestação: evitar, especialmente uso crônico ou próximo ao parto.", "Embarazo: evitar, especialmente uso crónico o cerca del parto.") : null,
            lactante ? t(lang, "Lactação: evitar ou monitorar sedação no lactente.", "Lactancia: evitar o monitorizar sedación en el lactante.") : null,
            hepatopatia ? t(lang, "Hepatopatia: maior risco de acúmulo e sedação prolongada.", "Hepatopatía: mayor riesgo de acumulación y sedación prolongada.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade a benzodiazepínicos", "Hipersensibilidad a benzodiacepinas"),
            t(lang, "Insuficiência respiratória grave", "Insuficiencia respiratoria grave"),
            t(lang, "Apneia do sono grave", "Apnea del sueño grave"),
            t(lang, "Miastenia gravis", "Miastenia gravis"),
            t(lang, "Insuficiência hepática grave", "Insuficiencia hepática grave")
          ],
          interactions: [
            t(lang, "Álcool", "Alcohol"),
            t(lang, "Opioides", "Opioides"),
            t(lang, "Barbitúricos", "Barbitúricos"),
            t(lang, "Antipsicóticos sedativos", "Antipsicóticos sedativos"),
            t(lang, "Antidepressivos sedativos", "Antidepresivos sedativos"),
            t(lang, "Anti-histamínicos sedativos", "Antihistamínicos sedantes")
          ],
          alerts: [
            t(lang, "Risco importante de sonolência no dia seguinte.", "Riesgo importante de somnolencia al día siguiente."),
            t(lang, "Evitar em idosos frágeis quando possível.", "Evitar en adultos mayores frágiles cuando sea posible."),
            t(lang, "Usar apenas por curto prazo no tratamento da insônia.", "Usar solo por corto plazo en el tratamiento del insomnio."),
            t(lang, "Evitar associação com álcool e opioides.", "Evitar asociación con alcohol y opioides."),
            t(lang, "Não suspender abruptamente após uso prolongado.", "No suspender abruptamente tras uso prolongado.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    clordiazepoxido: {
      name: { pt: "Clordiazepóxido", es: "Clordiazepóxido" },
      category: "ansiolitico",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = Number(paciente.clcr || 100) < 60;

        return {
          name: t(lang, "Clordiazepóxido", "Clordiazepóxido"),
          class: t(lang, "Benzodiazepínico de longa ação", "Benzodiacepina de larga duración"),
          category: "ansiolitico",
          commercialNames: {
            br: ["Librium", "Psicosedin"],
            ar: ["Librium", "Clordiazepóxido"]
          },
          presentation: [
            t(lang, "Cápsula/comprimido 5 mg", "Cápsula/comprimido 5 mg"),
            t(lang, "Cápsula/comprimido 10 mg", "Cápsula/comprimido 10 mg"),
            t(lang, "Cápsula/comprimido 25 mg", "Cápsula/comprimido 25 mg")
          ],
          dose: {
            adulto: t(lang, "Ansiedade: 5–25 mg VO 3–4x/dia.", "Ansiedad: 5–25 mg VO 3–4 veces/día."),
            abstinencia: t(lang, "Abstinência alcoólica: 25–100 mg VO conforme protocolo, com redução gradual.", "Abstinencia alcohólica: 25–100 mg VO según protocolo, con reducción gradual."),
            maxDose: t(lang, "Dose máxima usual: 100 mg/dia para ansiedade; protocolos de abstinência podem usar doses maiores sob monitorização.", "Dosis máxima habitual: 100 mg/día para ansiedad; protocolos de abstinencia pueden usar dosis mayores bajo monitorización.")
          },
          doseKg: {
            standard: t(lang, "Não se utiliza cálculo por kg em adultos.", "No se utiliza cálculo por kg en adultos."),
            pediatric: t(lang, "Uso pediátrico não rotineiro.", "Uso pediátrico no rutinario."),
            maxDose: t(lang, "Individualizar conforme indicação.", "Individualizar según indicación.")
          },
          indications: [
            t(lang, "Abstinência alcoólica", "Abstinencia alcohólica"),
            t(lang, "Transtorno de ansiedade generalizada", "Trastorno de ansiedad generalizada"),
            t(lang, "Crises de ansiedade", "Crisis de ansiedad"),
            t(lang, "Agitação associada à abstinência", "Agitación asociada a abstinencia"),
            t(lang, "Tremores por abstinência alcoólica", "Temblores por abstinencia alcohólica"),
            t(lang, "Sedação pré-operatória", "Sedación preoperatoria"),
            t(lang, "Ansiedade somatizada", "Ansiedad somatizada")
          ],
          renalAdjustment: t(lang, "Sem ajuste renal habitual, mas monitorar sedação em pacientes frágeis.", "Sin ajuste renal habitual, pero monitorizar sedación en pacientes frágiles."),
          hepaticAdjustment: hepatopatia
            ? t(lang, "Hepatopatia: evitar ou usar com muita cautela, pois possui metabólitos ativos e risco de sedação prolongada.", "Hepatopatía: evitar o usar con mucha cautela, ya que posee metabolitos activos y riesgo de sedación prolongada.")
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Potencializa a ação do GABA no receptor GABA-A, produzindo ansiólise, sedação, anticonvulsão e relaxamento muscular.", "Potencia la acción del GABA en el receptor GABA-A, produciendo ansiólisis, sedación, anticonvulsión y relajación muscular."),
          onset: t(lang, "Início de ação geralmente em 30–60 minutos por via oral.", "Inicio de acción generalmente en 30–60 minutos por vía oral."),
          halfLife: t(lang, "Vida média prolongada; possui metabólitos ativos com meia-vida longa, podendo acumular.", "Vida media prolongada; posee metabolitos activos con vida media larga, pudiendo acumularse."),
          commonAdverseEffects: [
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Ataxia", "Ataxia"),
            t(lang, "Fadiga", "Fatiga"),
            t(lang, "Confusão", "Confusión"),
            t(lang, "Lentificação psicomotora", "Enlentecimiento psicomotor")
          ],
          dangerousAdverseEffects: [
            t(lang, "Depressão respiratória", "Depresión respiratoria"),
            t(lang, "Dependência física", "Dependencia física"),
            t(lang, "Síndrome de abstinência", "Síndrome de abstinencia"),
            t(lang, "Sedação prolongada por acúmulo", "Sedación prolongada por acumulación"),
            t(lang, "Quedas e fraturas em idosos", "Caídas y fracturas en adultos mayores"),
            t(lang, "Coma em associação com depressores do SNC", "Coma en asociación con depresores del SNC")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: evitar quando possível; alto risco de acúmulo, delirium, sedação prolongada e quedas.", "Adulto mayor: evitar cuando sea posible; alto riesgo de acumulación, delirium, sedación prolongada y caídas.") : null,
            gestante ? t(lang, "Gestação: evitar uso crônico; avaliar risco-benefício.", "Embarazo: evitar uso crónico; evaluar riesgo-beneficio.") : null,
            lactante ? t(lang, "Lactação: pode causar sedação no lactente; monitorar ou evitar.", "Lactancia: puede causar sedación en el lactante; monitorizar o evitar.") : null,
            hepatopatia ? t(lang, "Hepatopatia: preferir lorazepam/oxazepam quando benzodiazepínico for necessário.", "Hepatopatía: preferir lorazepam/oxazepam cuando sea necesaria una benzodiacepina.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade a benzodiazepínicos", "Hipersensibilidad a benzodiacepinas"),
            t(lang, "Insuficiência respiratória grave", "Insuficiencia respiratoria grave"),
            t(lang, "Apneia do sono grave", "Apnea del sueño grave"),
            t(lang, "Miastenia gravis", "Miastenia gravis"),
            t(lang, "Insuficiência hepática grave", "Insuficiencia hepática grave")
          ],
          interactions: [
            t(lang, "Álcool", "Alcohol"),
            t(lang, "Opioides", "Opioides"),
            t(lang, "Barbitúricos", "Barbitúricos"),
            t(lang, "Antipsicóticos sedativos", "Antipsicóticos sedativos"),
            t(lang, "Anti-histamínicos sedativos", "Antihistamínicos sedantes"),
            t(lang, "Outros depressores do SNC", "Otros depresores del SNC")
          ],
          alerts: [
            t(lang, "Muito usado em abstinência alcoólica, exceto quando há hepatopatia importante.", "Muy usado en abstinencia alcohólica, excepto cuando hay hepatopatía importante."),
            t(lang, "Evitar em idosos frágeis pelo risco de acúmulo.", "Evitar en adultos mayores frágiles por riesgo de acumulación."),
            t(lang, "Não suspender abruptamente após uso prolongado.", "No suspender abruptamente tras uso prolongado."),
            t(lang, "Evitar associação com álcool e opioides.", "Evitar asociación con alcohol y opioides.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    flurazepam: {
      name: { pt: "Flurazepam", es: "Flurazepam" },
      category: "ansiolitico",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = Number(paciente.clcr || 100) < 60;

        return {
          name: t(lang, "Flurazepam", "Flurazepam"),
          class: t(lang, "Benzodiazepínico hipnótico de longa ação", "Benzodiacepina hipnótica de larga duración"),
          category: "ansiolitico",
          commercialNames: {
            br: ["Dalmadorm", "Dalmane", "Flurazepam"],
            ar: ["Dalmane", "Flurazepam"]
          },
          presentation: [
            t(lang, "Cápsula 15 mg", "Cápsula 15 mg"),
            t(lang, "Cápsula 30 mg", "Cápsula 30 mg")
          ],
          dose: {
            adulto: t(lang, "Insônia: 15 mg VO ao deitar.", "Insomnio: 15 mg VO al acostarse."),
            casosSelecionados: t(lang, "Pode-se usar 30 mg ao deitar em casos selecionados, por curto prazo.", "Puede usarse 30 mg al acostarse en casos seleccionados, por corto plazo."),
            maxDose: t(lang, "Dose máxima usual: 30 mg/noite.", "Dosis máxima habitual: 30 mg/noche.")
          },
          doseKg: {
            standard: t(lang, "Não se utiliza cálculo por kg em adultos.", "No se utiliza cálculo por kg en adultos."),
            pediatric: t(lang, "Não recomendado como uso pediátrico rotineiro.", "No recomendado como uso pediátrico rutinario."),
            maxDose: t(lang, "30 mg/noite", "30 mg/noche")
          },
          indications: [
            t(lang, "Insônia de curta duração", "Insomnio de corta duración"),
            t(lang, "Insônia de manutenção do sono", "Insomnio de mantenimiento del sueño"),
            t(lang, "Despertares noturnos frequentes", "Despertares nocturnos frecuentes"),
            t(lang, "Insônia associada à ansiedade", "Insomnio asociado a ansiedad"),
            t(lang, "Insônia transitória por estresse", "Insomnio transitorio por estrés"),
            t(lang, "Sedação noturna em casos selecionados", "Sedación nocturna en casos seleccionados")
          ],
          renalAdjustment: t(lang, "Sem ajuste renal habitual, mas monitorar sedação em pacientes frágeis.", "Sin ajuste renal habitual, pero monitorizar sedación en pacientes frágiles."),
          hepaticAdjustment: hepatopatia
            ? t(lang, "Hepatopatia: evitar ou usar menor dose; risco de sedação prolongada por metabólitos ativos.", "Hepatopatía: evitar o usar dosis menor; riesgo de sedación prolongada por metabolitos activos.")
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Potencializa o GABA no receptor GABA-A, promovendo efeito hipnótico, ansiolítico e relaxante muscular.", "Potencia el GABA en el receptor GABA-A, promoviendo efecto hipnótico, ansiolítico y relajante muscular."),
          onset: t(lang, "Início de ação geralmente em 30–60 minutos.", "Inicio de acción generalmente en 30–60 minutos."),
          halfLife: t(lang, "Vida média do fármaco é curta, mas metabólitos ativos têm meia-vida muito longa, podendo causar sedação residual.", "La vida media del fármaco es corta, pero sus metabolitos activos tienen vida media muy larga, pudiendo causar sedación residual."),
          commonAdverseEffects: [
            t(lang, "Sonolência diurna", "Somnolencia diurna"),
            t(lang, "Sedação residual", "Sedación residual"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Ataxia", "Ataxia"),
            t(lang, "Confusão", "Confusión"),
            t(lang, "Déficit de memória", "Déficit de memoria")
          ],
          dangerousAdverseEffects: [
            t(lang, "Depressão respiratória", "Depresión respiratoria"),
            t(lang, "Dependência física", "Dependencia física"),
            t(lang, "Síndrome de abstinência", "Síndrome de abstinencia"),
            t(lang, "Sedação prolongada por acúmulo", "Sedación prolongada por acumulación"),
            t(lang, "Quedas e fraturas em idosos", "Caídas y fracturas en adultos mayores"),
            t(lang, "Comportamentos complexos do sono", "Conductas complejas del sueño")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: evitar quando possível; risco alto de sedação residual, confusão, quedas e fraturas.", "Adulto mayor: evitar cuando sea posible; riesgo alto de sedación residual, confusión, caídas y fracturas.") : null,
            gestante ? t(lang, "Gestação: evitar uso crônico ou próximo ao parto.", "Embarazo: evitar uso crónico o cerca del parto.") : null,
            lactante ? t(lang, "Lactação: pode sedar o lactente; evitar ou monitorar.", "Lactancia: puede sedar al lactante; evitar o monitorizar.") : null,
            hepatopatia ? t(lang, "Hepatopatia: maior risco de sedação prolongada e acúmulo.", "Hepatopatía: mayor riesgo de sedación prolongada y acumulación.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade a benzodiazepínicos", "Hipersensibilidad a benzodiacepinas"),
            t(lang, "Insuficiência respiratória grave", "Insuficiencia respiratoria grave"),
            t(lang, "Apneia do sono grave", "Apnea del sueño grave"),
            t(lang, "Miastenia gravis", "Miastenia gravis"),
            t(lang, "Insuficiência hepática grave", "Insuficiencia hepática grave")
          ],
          interactions: [
            t(lang, "Álcool", "Alcohol"),
            t(lang, "Opioides", "Opioides"),
            t(lang, "Barbitúricos", "Barbitúricos"),
            t(lang, "Antipsicóticos sedativos", "Antipsicóticos sedativos"),
            t(lang, "Antidepressivos sedativos", "Antidepresivos sedativos"),
            t(lang, "Anti-histamínicos sedativos", "Antihistamínicos sedantes")
          ],
          alerts: [
            t(lang, "Alto risco de ressaca medicamentosa no dia seguinte.", "Alto riesgo de resaca medicamentosa al día siguiente."),
            t(lang, "Evitar em idosos frágeis.", "Evitar en adultos mayores frágiles."),
            t(lang, "Usar apenas por curto prazo para insônia.", "Usar solo por corto plazo para insomnio."),
            t(lang, "Evitar associação com álcool e opioides.", "Evitar asociación con alcohol y opioides."),
            t(lang, "Não suspender abruptamente após uso prolongado.", "No suspender abruptamente tras uso prolongado.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Flurazepam Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    triazolam: {
      name: { pt: "Triazolam", es: "Triazolam" },
      category: "ansiolitico",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = Number(paciente.clcr || 100) < 60;

        return {
          name: t(lang, "Triazolam", "Triazolam"),
          class: t(lang, "Benzodiazepínico hipnótico de curta ação", "Benzodiacepina hipnótica de acción corta"),
          category: "ansiolitico",
          commercialNames: {
            br: ["Halcion", "Triazolam"],
            ar: ["Halcion", "Triazolam"]
          },
          presentation: [
            t(lang, "Comprimido 0,125 mg", "Comprimido 0,125 mg"),
            t(lang, "Comprimido 0,25 mg", "Comprimido 0,25 mg")
          ],
          dose: {
            adulto: t(lang, "Insônia: 0,125–0,25 mg VO imediatamente antes de deitar.", "Insomnio: 0,125–0,25 mg VO inmediatamente antes de acostarse."),
            idoso: t(lang, "Idosos: iniciar 0,125 mg ao deitar.", "Adultos mayores: iniciar 0,125 mg al acostarse."),
            maxDose: t(lang, "Dose máxima usual: 0,5 mg/noite.", "Dosis máxima habitual: 0,5 mg/noche.")
          },
          doseKg: {
            standard: t(lang, "Não se utiliza cálculo por kg em adultos.", "No se utiliza cálculo por kg en adultos."),
            pediatric: t(lang, "Não recomendado em pediatria.", "No recomendado en pediatría."),
            maxDose: t(lang, "0,5 mg/noite", "0,5 mg/noche")
          },
          indications: [
            t(lang, "Insônia de início do sono", "Insomnio de conciliación"),
            t(lang, "Insônia transitória", "Insomnio transitorio"),
            t(lang, "Insônia situacional", "Insomnio situacional"),
            t(lang, "Insônia por jet lag em casos selecionados", "Insomnio por jet lag en casos seleccionados"),
            t(lang, "Sedação pré-procedimento em casos selecionados", "Sedación preprocedimiento en casos seleccionados"),
            t(lang, "Ansiedade intensa associada à dificuldade para iniciar o sono", "Ansiedad intensa asociada a dificultad para iniciar el sueño")
          ],
          renalAdjustment: t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia
            ? t(lang, "Hepatopatia: evitar ou usar com extrema cautela; metabolismo por CYP3A4.", "Hepatopatía: evitar o usar con extrema cautela; metabolismo por CYP3A4.")
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Potencializa o GABA no receptor GABA-A, produzindo efeito hipnótico rápido.", "Potencia el GABA en el receptor GABA-A, produciendo efecto hipnótico rápido."),
          onset: t(lang, "Início de ação rápido, geralmente em 15–30 minutos.", "Inicio de acción rápido, generalmente en 15–30 minutos."),
          halfLife: t(lang, "Vida média aproximada: 1,5–5,5 horas.", "Vida media aproximada: 1,5–5,5 horas."),
          commonAdverseEffects: [
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Amnésia anterógrada", "Amnesia anterógrada"),
            t(lang, "Cefaleia", "Cefalea"),
            t(lang, "Alteração da coordenação", "Alteración de la coordinación"),
            t(lang, "Sonhos vívidos ou pesadelos", "Sueños vívidos o pesadillas")
          ],
          dangerousAdverseEffects: [
            t(lang, "Amnésia importante", "Amnesia importante"),
            t(lang, "Comportamentos complexos do sono", "Conductas complejas del sueño"),
            t(lang, "Depressão respiratória", "Depresión respiratoria"),
            t(lang, "Dependência física", "Dependencia física"),
            t(lang, "Abstinência/rebote de insônia", "Abstinencia/rebote de insomnio"),
            t(lang, "Reações paradoxais com agitação ou desinibição", "Reacciones paradójicas con agitación o desinhibición")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: maior risco de confusão, amnésia, quedas e comportamentos complexos do sono.", "Adulto mayor: mayor riesgo de confusión, amnesia, caídas y conductas complejas del sueño.") : null,
            gestante ? t(lang, "Gestação: evitar, especialmente uso repetido ou próximo ao parto.", "Embarazo: evitar, especialmente uso repetido o cerca del parto.") : null,
            lactante ? t(lang, "Lactação: evitar ou monitorar sedação no lactente.", "Lactancia: evitar o monitorizar sedación en el lactante.") : null,
            hepatopatia ? t(lang, "Hepatopatia: maior risco de sedação e eventos neuropsiquiátricos.", "Hepatopatía: mayor riesgo de sedación y eventos neuropsiquiátricos.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade a benzodiazepínicos", "Hipersensibilidad a benzodiacepinas"),
            t(lang, "Uso com inibidores fortes de CYP3A4", "Uso con inhibidores fuertes de CYP3A4"),
            t(lang, "Insuficiência respiratória grave", "Insuficiencia respiratoria grave"),
            t(lang, "Apneia do sono grave", "Apnea del sueño grave"),
            t(lang, "Miastenia gravis", "Miastenia gravis"),
            t(lang, "Insuficiência hepática grave", "Insuficiencia hepática grave")
          ],
          interactions: [
            t(lang, "Cetoconazol, itraconazol e outros azólicos", "Ketoconazol, itraconazol y otros azoles"),
            t(lang, "Claritromicina e eritromicina", "Claritromicina y eritromicina"),
            t(lang, "Ritonavir e outros inibidores fortes de CYP3A4", "Ritonavir y otros inhibidores fuertes de CYP3A4"),
            t(lang, "Álcool", "Alcohol"),
            t(lang, "Opioides", "Opioides"),
            t(lang, "Outros depressores do SNC", "Otros depresores del SNC")
          ],
          alerts: [
            t(lang, "Usar apenas por curto prazo para insônia.", "Usar solo por corto plazo para insomnio."),
            t(lang, "Tomar apenas quando houver tempo suficiente para dormir.", "Tomar solo cuando haya tiempo suficiente para dormir."),
            t(lang, "Maior risco de amnésia e comportamentos complexos do sono.", "Mayor riesgo de amnesia y conductas complejas del sueño."),
            t(lang, "Evitar associação com álcool, opioides e inibidores fortes de CYP3A4.", "Evitar asociación con alcohol, opioides e inhibidores fuertes de CYP3A4."),
            t(lang, "Não suspender abruptamente após uso prolongado.", "No suspender abruptamente tras uso prolongado.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Triazolam Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    zolpidem: {
      name: { pt: "Zolpidem", es: "Zolpidem" },
      category: "hipnotico",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = Number(paciente.clcr || 100) < 60;

        return {
          name: t(lang, "Zolpidem", "Zolpidem"),
          class: t(lang, "Hipnótico não benzodiazepínico — droga Z", "Hipnótico no benzodiacepínico — droga Z"),
          category: "hipnotico",
          commercialNames: {
            br: ["Stilnox", "Patz SL", "Zolpidem EMS", "Zolpidem Medley"],
            ar: ["Stilnox", "Somit", "Zolpidem Bagó", "Zolpidem Gador"]
          },
          presentation: [
            t(lang, "Comprimido 5 mg", "Comprimido 5 mg"),
            t(lang, "Comprimido 10 mg", "Comprimido 10 mg"),
            t(lang, "Comprimido sublingual 5 mg", "Comprimido sublingual 5 mg"),
            t(lang, "Comprimido de liberação prolongada 6,25 mg", "Comprimido de liberación prolongada 6,25 mg"),
            t(lang, "Comprimido de liberação prolongada 12,5 mg", "Comprimido de liberación prolongada 12,5 mg")
          ],
          dose: {
            adulto: t(lang, "Insônia: 5–10 mg VO imediatamente antes de deitar.", "Insomnio: 5–10 mg VO inmediatamente antes de acostarse."),
            idoso: t(lang, "Idosos ou pacientes frágeis: 5 mg VO ao deitar.", "Adultos mayores o pacientes frágiles: 5 mg VO al acostarse."),
            maxDose: t(lang, "Dose máxima usual: 10 mg/noite; liberação prolongada até 12,5 mg/noite.", "Dosis máxima habitual: 10 mg/noche; liberación prolongada hasta 12,5 mg/noche.")
          },
          doseKg: {
            standard: t(lang, "Não se utiliza cálculo por kg em adultos.", "No se utiliza cálculo por kg en adultos."),
            pediatric: t(lang, "Não recomendado em pediatria.", "No recomendado en pediatría."),
            maxDose: t(lang, "10–12,5 mg/noite conforme formulação", "10–12,5 mg/noche según formulación")
          },
          indications: [
            t(lang, "Insônia de início do sono", "Insomnio de conciliación"),
            t(lang, "Insônia de curta duração", "Insomnio de corta duración"),
            t(lang, "Insônia transitória", "Insomnio transitorio"),
            t(lang, "Insônia situacional por estresse", "Insomnio situacional por estrés"),
            t(lang, "Insônia associada à ansiedade leve", "Insomnio asociado a ansiedad leve"),
            t(lang, "Insônia de manutenção do sono com formulação de liberação prolongada", "Insomnio de mantenimiento del sueño con formulación de liberación prolongada")
          ],
          renalAdjustment: t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia
            ? t(lang, "Hepatopatia: usar dose menor; evitar em insuficiência hepática grave.", "Hepatopatía: usar dosis menor; evitar en insuficiencia hepática grave.")
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Agonista seletivo do receptor GABA-A no subtipo ômega-1/BZ1, promovendo efeito hipnótico com menor ação ansiolítica, anticonvulsivante e miorrelaxante que benzodiazepínicos.", "Agonista selectivo del receptor GABA-A en el subtipo omega-1/BZ1, promoviendo efecto hipnótico con menor acción ansiolítica, anticonvulsivante y miorrelajante que las benzodiacepinas."),
          onset: t(lang, "Início de ação rápido, geralmente em 15–30 minutos.", "Inicio de acción rápido, generalmente en 15–30 minutos."),
          halfLife: t(lang, "Vida média aproximada: 2–3 horas; pode prolongar em idosos e hepatopatia.", "Vida media aproximada: 2–3 horas; puede prolongarse en adultos mayores y hepatopatía."),
          commonAdverseEffects: [
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Cefaleia", "Cefalea"),
            t(lang, "Amnésia anterógrada", "Amnesia anterógrada"),
            t(lang, "Alteração da coordenação", "Alteración de la coordinación"),
            t(lang, "Sonolência residual", "Somnolencia residual")
          ],
          dangerousAdverseEffects: [
            t(lang, "Comportamentos complexos do sono", "Conductas complejas del sueño"),
            t(lang, "Depressão respiratória com depressores do SNC", "Depresión respiratoria con depresores del SNC"),
            t(lang, "Dependência e abuso", "Dependencia y abuso"),
            t(lang, "Confusão e delirium em idosos", "Confusión y delirium en adultos mayores"),
            t(lang, "Quedas e fraturas", "Caídas y fracturas"),
            t(lang, "Reações paradoxais com agitação ou alucinações", "Reacciones paradójicas con agitación o alucinaciones")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: usar 5 mg; maior risco de quedas, delirium e sonolência residual.", "Adulto mayor: usar 5 mg; mayor riesgo de caídas, delirium y somnolencia residual.") : null,
            gestante ? t(lang, "Gestação: evitar uso crônico; avaliar risco-benefício.", "Embarazo: evitar uso crónico; evaluar riesgo-beneficio.") : null,
            lactante ? t(lang, "Lactação: monitorar sedação, sucção e irritabilidade no lactente.", "Lactancia: monitorizar sedación, succión e irritabilidad en el lactante.") : null,
            hepatopatia ? t(lang, "Hepatopatia: usar menor dose; evitar em insuficiência hepática grave.", "Hepatopatía: usar dosis menor; evitar en insuficiencia hepática grave.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade ao zolpidem", "Hipersensibilidad al zolpidem"),
            t(lang, "Insuficiência hepática grave", "Insuficiencia hepática grave"),
            t(lang, "Apneia do sono grave sem tratamento", "Apnea del sueño grave sin tratamiento"),
            t(lang, "Insuficiência respiratória grave", "Insuficiencia respiratoria grave"),
            t(lang, "História de comportamentos complexos do sono com zolpidem", "Historia de conductas complejas del sueño con zolpidem")
          ],
          interactions: [
            t(lang, "Álcool", "Alcohol"),
            t(lang, "Opioides", "Opioides"),
            t(lang, "Benzodiazepínicos", "Benzodiacepinas"),
            t(lang, "Antipsicóticos sedativos", "Antipsicóticos sedativos"),
            t(lang, "Anti-histamínicos sedativos", "Antihistamínicos sedantes"),
            t(lang, "Inibidores de CYP3A4 como cetoconazol, claritromicina e ritonavir", "Inhibidores de CYP3A4 como ketoconazol, claritromicina y ritonavir")
          ],
          alerts: [
            t(lang, "Tomar apenas imediatamente antes de deitar.", "Tomar solo inmediatamente antes de acostarse."),
            t(lang, "Usar somente se houver 7–8 horas disponíveis para dormir.", "Usar solo si hay 7–8 horas disponibles para dormir."),
            t(lang, "Pode causar dirigir, comer ou caminhar dormindo; suspender se ocorrer.", "Puede causar conducir, comer o caminar dormido; suspender si ocurre."),
            t(lang, "Evitar associação com álcool, opioides e outros sedativos.", "Evitar asociación con alcohol, opioides y otros sedantes."),
            t(lang, "Usar pelo menor tempo possível.", "Usar durante el menor tiempo posible.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Zolpidem Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    zopiclona: {
      name: { pt: "Zopiclona", es: "Zopiclona" },
      category: "hipnotico",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = Number(paciente.clcr || 100) < 60;

        return {
          name: t(lang, "Zopiclona", "Zopiclona"),
          class: t(lang, "Hipnótico não benzodiazepínico — droga Z", "Hipnótico no benzodiacepínico — droga Z"),
          category: "hipnotico",
          commercialNames: {
            br: ["Imovane", "Zopix", "Zopiclona"],
            ar: ["Imovane", "Zopiclona Bagó", "Zopiclona Gador"]
          },
          presentation: [
            t(lang, "Comprimido 3,75 mg", "Comprimido 3,75 mg"),
            t(lang, "Comprimido 7,5 mg", "Comprimido 7,5 mg")
          ],
          dose: {
            adulto: t(lang, "Insônia: 7,5 mg VO imediatamente antes de deitar.", "Insomnio: 7,5 mg VO inmediatamente antes de acostarse."),
            idoso: t(lang, "Idosos, frágeis ou hepatopatia: iniciar 3,75 mg ao deitar.", "Adultos mayores, frágiles o hepatopatía: iniciar 3,75 mg al acostarse."),
            maxDose: t(lang, "Dose máxima usual: 7,5 mg/noite.", "Dosis máxima habitual: 7,5 mg/noche.")
          },
          doseKg: {
            standard: t(lang, "Não se utiliza cálculo por kg em adultos.", "No se utiliza cálculo por kg en adultos."),
            pediatric: t(lang, "Não recomendado em pediatria.", "No recomendado en pediatría."),
            maxDose: t(lang, "7,5 mg/noite", "7,5 mg/noche")
          },
          indications: [
            t(lang, "Insônia de início do sono", "Insomnio de conciliación"),
            t(lang, "Insônia de manutenção do sono", "Insomnio de mantenimiento del sueño"),
            t(lang, "Insônia de curta duração", "Insomnio de corta duración"),
            t(lang, "Insônia transitória", "Insomnio transitorio"),
            t(lang, "Insônia situacional por estresse", "Insomnio situacional por estrés"),
            t(lang, "Insônia associada à ansiedade leve", "Insomnio asociado a ansiedad leve")
          ],
          renalAdjustment: t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia
            ? t(lang, "Hepatopatia: iniciar 3,75 mg; evitar em insuficiência hepática grave.", "Hepatopatía: iniciar 3,75 mg; evitar en insuficiencia hepática grave.")
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Modulador positivo do receptor GABA-A no sítio benzodiazepínico, promovendo efeito hipnótico.", "Modulador positivo del receptor GABA-A en el sitio benzodiacepínico, promoviendo efecto hipnótico."),
          onset: t(lang, "Início de ação geralmente em 30 minutos.", "Inicio de acción generalmente en 30 minutos."),
          halfLife: t(lang, "Vida média aproximada: 5 horas; pode prolongar em idosos e hepatopatia.", "Vida media aproximada: 5 horas; puede prolongarse en adultos mayores y hepatopatía."),
          commonAdverseEffects: [
            t(lang, "Gosto metálico ou amargo", "Sabor metálico o amargo"),
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Boca seca", "Boca seca"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Cefaleia", "Cefalea"),
            t(lang, "Sonolência residual", "Somnolencia residual")
          ],
          dangerousAdverseEffects: [
            t(lang, "Comportamentos complexos do sono", "Conductas complejas del sueño"),
            t(lang, "Dependência e abuso", "Dependencia y abuso"),
            t(lang, "Depressão respiratória com depressores do SNC", "Depresión respiratoria con depresores del SNC"),
            t(lang, "Quedas e fraturas", "Caídas y fracturas"),
            t(lang, "Confusão ou delirium em idosos", "Confusión o delirium en adultos mayores"),
            t(lang, "Reações paradoxais com agitação", "Reacciones paradójicas con agitación")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: iniciar 3,75 mg; maior risco de quedas, confusão e sedação residual.", "Adulto mayor: iniciar 3,75 mg; mayor riesgo de caídas, confusión y sedación residual.") : null,
            gestante ? t(lang, "Gestação: evitar uso crônico; avaliar risco-benefício.", "Embarazo: evitar uso crónico; evaluar riesgo-beneficio.") : null,
            lactante ? t(lang, "Lactação: pode causar sedação no lactente; monitorar ou evitar.", "Lactancia: puede causar sedación en el lactante; monitorizar o evitar.") : null,
            hepatopatia ? t(lang, "Hepatopatia: reduzir dose; evitar se grave.", "Hepatopatía: reducir dosis; evitar si es grave.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade à zopiclona", "Hipersensibilidad a zopiclona"),
            t(lang, "Insuficiência respiratória grave", "Insuficiencia respiratoria grave"),
            t(lang, "Apneia do sono grave", "Apnea del sueño grave"),
            t(lang, "Miastenia gravis", "Miastenia gravis"),
            t(lang, "Insuficiência hepática grave", "Insuficiencia hepática grave"),
            t(lang, "História de comportamentos complexos do sono com hipnóticos", "Historia de conductas complejas del sueño con hipnóticos")
          ],
          interactions: [
            t(lang, "Álcool", "Alcohol"),
            t(lang, "Opioides", "Opioides"),
            t(lang, "Benzodiazepínicos", "Benzodiacepinas"),
            t(lang, "Antipsicóticos sedativos", "Antipsicóticos sedativos"),
            t(lang, "Antidepressivos sedativos", "Antidepresivos sedativos"),
            t(lang, "Inibidores de CYP3A4", "Inhibidores de CYP3A4")
          ],
          alerts: [
            t(lang, "Tomar imediatamente antes de deitar.", "Tomar inmediatamente antes de acostarse."),
            t(lang, "Usar somente se houver tempo adequado para dormir.", "Usar solo si hay tiempo adecuado para dormir."),
            t(lang, "Pode causar gosto metálico/amargo característico.", "Puede causar sabor metálico/amargo característico."),
            t(lang, "Evitar álcool, opioides e outros sedativos.", "Evitar alcohol, opioides y otros sedantes."),
            t(lang, "Usar pelo menor tempo possível.", "Usar durante el menor tiempo posible.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    eszopiclona: {
      name: { pt: "Eszopiclona", es: "Eszopiclona" },
      category: "hipnotico",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = Number(paciente.clcr || 100) < 60;

        return {
          name: t(lang, "Eszopiclona", "Eszopiclona"),
          class: t(lang, "Hipnótico não benzodiazepínico — droga Z", "Hipnótico no benzodiacepínico — droga Z"),
          category: "hipnotico",
          commercialNames: {
            br: ["Lunesta", "Eszopiclona"],
            ar: ["Lunesta", "Eszopiclona"]
          },
          presentation: [
            t(lang, "Comprimido 1 mg", "Comprimido 1 mg"),
            t(lang, "Comprimido 2 mg", "Comprimido 2 mg"),
            t(lang, "Comprimido 3 mg", "Comprimido 3 mg")
          ],
          dose: {
            adulto: t(lang, "Insônia: iniciar 1 mg VO imediatamente antes de deitar; usual 1–3 mg/noite.", "Insomnio: iniciar 1 mg VO inmediatamente antes de acostarse; habitual 1–3 mg/noche."),
            idoso: t(lang, "Idosos: iniciar 1 mg; evitar exceder 2 mg/noite.", "Adultos mayores: iniciar 1 mg; evitar superar 2 mg/noche."),
            maxDose: t(lang, "Dose máxima usual: 3 mg/noite em adultos; 2 mg/noite em idosos.", "Dosis máxima habitual: 3 mg/noche en adultos; 2 mg/noche en adultos mayores.")
          },
          doseKg: {
            standard: t(lang, "Não se utiliza cálculo por kg em adultos.", "No se utiliza cálculo por kg en adultos."),
            pediatric: t(lang, "Não recomendado em pediatria.", "No recomendado en pediatría."),
            maxDose: t(lang, "3 mg/noite", "3 mg/noche")
          },
          indications: [
            t(lang, "Insônia de início do sono", "Insomnio de conciliación"),
            t(lang, "Insônia de manutenção do sono", "Insomnio de mantenimiento del sueño"),
            t(lang, "Despertares noturnos frequentes", "Despertares nocturnos frecuentes"),
            t(lang, "Insônia crônica em casos selecionados", "Insomnio crónico en casos seleccionados"),
            t(lang, "Insônia transitória", "Insomnio transitorio"),
            t(lang, "Insônia associada à ansiedade leve", "Insomnio asociado a ansiedad leve")
          ],
          renalAdjustment: t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia
            ? t(lang, "Hepatopatia grave: não exceder 2 mg/noite; monitorar sedação.", "Hepatopatía grave: no superar 2 mg/noche; monitorizar sedación.")
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Isômero ativo da zopiclona; modula positivamente o receptor GABA-A no sítio benzodiazepínico, promovendo efeito hipnótico.", "Isómero activo de zopiclona; modula positivamente el receptor GABA-A en el sitio benzodiacepínico, promoviendo efecto hipnótico."),
          onset: t(lang, "Início de ação geralmente em 30 minutos.", "Inicio de acción generalmente en 30 minutos."),
          halfLife: t(lang, "Vida média aproximada: 6 horas.", "Vida media aproximada: 6 horas."),
          commonAdverseEffects: [
            t(lang, "Gosto desagradável ou metálico", "Sabor desagradable o metálico"),
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Boca seca", "Boca seca"),
            t(lang, "Cefaleia", "Cefalea"),
            t(lang, "Sonolência residual", "Somnolencia residual")
          ],
          dangerousAdverseEffects: [
            t(lang, "Comportamentos complexos do sono", "Conductas complejas del sueño"),
            t(lang, "Depressão respiratória com depressores do SNC", "Depresión respiratoria con depresores del SNC"),
            t(lang, "Dependência e abuso", "Dependencia y abuso"),
            t(lang, "Quedas e fraturas", "Caídas y fracturas"),
            t(lang, "Confusão e delirium em idosos", "Confusión y delirium en adultos mayores"),
            t(lang, "Reações paradoxais com agitação ou alucinações", "Reacciones paradójicas con agitación o alucinaciones")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: iniciar 1 mg; maior risco de sedação residual, quedas e confusão.", "Adulto mayor: iniciar 1 mg; mayor riesgo de sedación residual, caídas y confusión.") : null,
            gestante ? t(lang, "Gestação: evitar uso crônico; avaliar risco-benefício.", "Embarazo: evitar uso crónico; evaluar riesgo-beneficio.") : null,
            lactante ? t(lang, "Lactação: monitorar sedação, sucção e irritabilidade no lactente.", "Lactancia: monitorizar sedación, succión e irritabilidad en el lactante.") : null,
            hepatopatia ? t(lang, "Hepatopatia grave: limitar dose e monitorar sedação residual.", "Hepatopatía grave: limitar dosis y monitorizar sedación residual.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade à eszopiclona", "Hipersensibilidad a eszopiclona"),
            t(lang, "História de comportamentos complexos do sono com hipnóticos", "Historia de conductas complejas del sueño con hipnóticos"),
            t(lang, "Insuficiência respiratória grave", "Insuficiencia respiratoria grave"),
            t(lang, "Apneia do sono grave sem tratamento", "Apnea del sueño grave sin tratamiento"),
            t(lang, "Miastenia gravis", "Miastenia gravis")
          ],
          interactions: [
            t(lang, "Álcool", "Alcohol"),
            t(lang, "Opioides", "Opioides"),
            t(lang, "Benzodiazepínicos", "Benzodiacepinas"),
            t(lang, "Antipsicóticos sedativos", "Antipsicóticos sedativos"),
            t(lang, "Antidepressivos sedativos", "Antidepresivos sedativos"),
            t(lang, "Inibidores fortes de CYP3A4 como cetoconazol, claritromicina e ritonavir", "Inhibidores fuertes de CYP3A4 como ketoconazol, claritromicina y ritonavir")
          ],
          alerts: [
            t(lang, "Tomar imediatamente antes de deitar.", "Tomar inmediatamente antes de acostarse."),
            t(lang, "Usar somente se houver 7–8 horas disponíveis para dormir.", "Usar solo si hay 7–8 horas disponibles para dormir."),
            t(lang, "Evitar álcool, opioides e outros sedativos.", "Evitar alcohol, opioides y otros sedantes."),
            t(lang, "Pode causar gosto metálico/desagradável.", "Puede causar sabor metálico/desagradable."),
            t(lang, "Usar pelo menor tempo possível e reavaliar se uso prolongado.", "Usar durante el menor tiempo posible y reevaluar si uso prolongado.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Eszopiclone Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    buspirona: {
      name: { pt: "Buspirona", es: "Buspirona" },
      category: "ansiolitico",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = clcr < 60;

        return {
          name: t(lang, "Buspirona", "Buspirona"),
          class: t(lang, "Ansiolítico não benzodiazepínico", "Ansiolítico no benzodiacepínico"),
          category: "ansiolitico",
          commercialNames: {
            br: ["Buspar", "Ansitec", "Buspirona EMS"],
            ar: ["Buspar", "Buspirona Gador", "Buspirona Bagó"]
          },
          presentation: [
            t(lang, "Comprimido 5 mg", "Comprimido 5 mg"),
            t(lang, "Comprimido 10 mg", "Comprimido 10 mg")
          ],
          dose: {
            adulto: t(lang, "Ansiedade: iniciar 5 mg VO 2–3x/dia; titular gradualmente.", "Ansiedad: iniciar 5 mg VO 2–3 veces/día; titular gradualmente."),
            usual: t(lang, "Dose usual: 15–30 mg/dia divididos em 2–3 tomadas.", "Dosis habitual: 15–30 mg/día divididos en 2–3 tomas."),
            maxDose: t(lang, "Dose máxima usual: 60 mg/dia.", "Dosis máxima habitual: 60 mg/día.")
          },
          doseKg: {
            standard: t(lang, "Não se utiliza cálculo rotineiro por kg.", "No se utiliza cálculo rutinario por kg."),
            pediatric: t(lang, "Uso pediátrico especializado e não rotineiro.", "Uso pediátrico especializado y no rutinario."),
            maxDose: t(lang, "60 mg/dia", "60 mg/día")
          },
          indications: [
            t(lang, "Transtorno de ansiedade generalizada", "Trastorno de ansiedad generalizada"),
            t(lang, "Ansiedade crônica sem necessidade de sedação", "Ansiedad crónica sin necesidad de sedación"),
            t(lang, "Ansiedade em pacientes com risco de dependência de benzodiazepínicos", "Ansiedad en pacientes con riesgo de dependencia a benzodiacepinas"),
            t(lang, "Ansiedade associada à depressão", "Ansiedad asociada a depresión"),
            t(lang, "Potencialização de antidepressivos em sintomas ansiosos", "Potenciación de antidepresivos en síntomas ansiosos"),
            t(lang, "Disfunção sexual induzida por ISRS em casos selecionados", "Disfunción sexual inducida por ISRS en casos seleccionados")
          ],
          renalAdjustment: insuficienciaRenal
            ? t(lang, "Insuficiência renal: usar com cautela; evitar em insuficiência renal grave.", "Insuficiencia renal: usar con cautela; evitar en insuficiencia renal grave.")
            : t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia
            ? t(lang, "Hepatopatia: usar com cautela; evitar em insuficiência hepática grave.", "Hepatopatía: usar con cautela; evitar en insuficiencia hepática grave.")
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Agonista parcial dos receptores serotoninérgicos 5HT1A, com efeito ansiolítico sem ação direta sobre GABA-A.", "Agonista parcial de los receptores serotoninérgicos 5HT1A, con efecto ansiolítico sin acción directa sobre GABA-A."),
          onset: t(lang, "Não tem efeito imediato; início clínico geralmente em 2–4 semanas.", "No tiene efecto inmediato; inicio clínico generalmente en 2–4 semanas."),
          halfLife: t(lang, "Vida média aproximada: 2–3 horas.", "Vida media aproximada: 2–3 horas."),
          commonAdverseEffects: [
            t(lang, "Tontura", "Mareos"),
            t(lang, "Náuseas", "Náuseas"),
            t(lang, "Cefaleia", "Cefalea"),
            t(lang, "Nervosismo", "Nerviosismo"),
            t(lang, "Insônia", "Insomnio"),
            t(lang, "Boca seca", "Boca seca")
          ],
          dangerousAdverseEffects: [
            t(lang, "Síndrome serotoninérgica quando associada a serotoninérgicos", "Síndrome serotoninérgico cuando se asocia a serotoninérgicos"),
            t(lang, "Reações alérgicas raras", "Reacciones alérgicas raras"),
            t(lang, "Piora paradoxal da ansiedade no início", "Empeoramiento paradójico de la ansiedad al inicio")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: geralmente mais segura que benzodiazepínicos, mas iniciar com dose baixa.", "Adulto mayor: generalmente más segura que benzodiacepinas, pero iniciar con dosis baja.") : null,
            gestante ? t(lang, "Gestação: avaliar risco-benefício; dados clínicos limitados.", "Embarazo: evaluar riesgo-beneficio; datos clínicos limitados.") : null,
            lactante ? t(lang, "Lactação: dados limitados; monitorar lactente ou considerar alternativa.", "Lactancia: datos limitados; monitorizar lactante o considerar alternativa.") : null,
            hepatopatia ? t(lang, "Hepatopatia: evitar se grave; maior exposição sistêmica.", "Hepatopatía: evitar si es grave; mayor exposición sistémica.") : null,
            insuficienciaRenal ? t(lang, "Insuficiência renal: evitar se grave; usar cautela.", "Insuficiencia renal: evitar si es grave; usar con cautela.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade à buspirona", "Hipersensibilidad a buspirona"),
            t(lang, "Uso concomitante com IMAO", "Uso concomitante con IMAO"),
            t(lang, "Insuficiência hepática grave", "Insuficiencia hepática grave"),
            t(lang, "Insuficiência renal grave", "Insuficiencia renal grave")
          ],
          interactions: [
            t(lang, "IMAO: risco de hipertensão e toxicidade", "IMAO: riesgo de hipertensión y toxicidad"),
            t(lang, "ISRS/ISRN, triptanos, linezolida, tramadol: risco serotoninérgico", "ISRS/IRSN, triptanes, linezolid, tramadol: riesgo serotoninérgico"),
            t(lang, "Inibidores de CYP3A4 como cetoconazol, eritromicina e ritonavir: aumentam níveis", "Inhibidores de CYP3A4 como ketoconazol, eritromicina y ritonavir: aumentan niveles"),
            t(lang, "Indutores de CYP3A4 como rifampicina, carbamazepina e fenitoína: reduzem efeito", "Inductores de CYP3A4 como rifampicina, carbamazepina y fenitoína: reducen efecto"),
            t(lang, "Álcool: evitar por possível piora de sedação/tontura", "Alcohol: evitar por posible empeoramiento de sedación/mareos")
          ],
          alerts: [
            t(lang, "Não serve para crise aguda de ansiedade porque demora semanas para efeito.", "No sirve para crisis aguda de ansiedad porque tarda semanas en hacer efecto."),
            t(lang, "Não causa dependência típica dos benzodiazepínicos.", "No causa dependencia típica de las benzodiacepinas."),
            t(lang, "Não produz sedação intensa nem relaxamento muscular relevante.", "No produce sedación intensa ni relajación muscular relevante."),
            t(lang, "Usar regularmente todos os dias, não apenas sob demanda.", "Usar regularmente todos los días, no solo a demanda."),
            t(lang, "Evitar associação com IMAO.", "Evitar asociación con IMAO.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Buspirone Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    hidroxizina: {
      name: { pt: "Hidroxizina", es: "Hidroxicina" },
      category: "ansiolitico",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const peso = Number(paciente.peso || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = clcr < 60;

        const dosePediatricaMin = peso * 0.5;
        const dosePediatricaMax = peso * 1;

        return {
          name: t(lang, "Hidroxizina", "Hidroxicina"),
          class: t(lang, "Anti-histamínico H1 de primeira geração com ação ansiolítica", "Antihistamínico H1 de primera generación con acción ansiolítica"),
          category: "ansiolitico",
          commercialNames: {
            br: ["Hixizine", "Prurizin", "Hidroxizina EMS"],
            ar: ["Atarax", "Hidroxicina", "Hidroxicina Denver Farma"]
          },
          presentation: [
            t(lang, "Comprimido 25 mg", "Comprimido 25 mg"),
            t(lang, "Comprimido 50 mg", "Comprimido 50 mg"),
            t(lang, "Xarope 2 mg/mL", "Jarabe 2 mg/mL"),
            t(lang, "Solução oral 10 mg/5 mL", "Solución oral 10 mg/5 mL")
          ],
          dose: {
            adulto: t(lang, "Ansiedade: 25–50 mg VO até 3–4x/dia conforme necessidade.", "Ansiedad: 25–50 mg VO hasta 3–4 veces/día según necesidad."),
            prurido: t(lang, "Prurido/alergia: 25 mg VO à noite ou 25 mg 3–4x/dia conforme gravidade.", "Prurito/alergia: 25 mg VO por la noche o 25 mg 3–4 veces/día según gravedad."),
            pediatrica: peso > 0
              ? t(lang, `${dosePediatricaMin.toFixed(0)}–${dosePediatricaMax.toFixed(0)} mg/dia divididos, conforme indicação.`, `${dosePediatricaMin.toFixed(0)}–${dosePediatricaMax.toFixed(0)} mg/día divididos, según indicación.`)
              : t(lang, "0,5–1 mg/kg/dia dividido conforme indicação.", "0,5–1 mg/kg/día dividido según indicación."),
            maxDose: t(lang, "Dose máxima usual: 100 mg/dia para minimizar risco de QT e sedação.", "Dosis máxima habitual: 100 mg/día para minimizar riesgo de QT y sedación.")
          },
          doseKg: {
            standard: t(lang, "Pediatria: 0,5–1 mg/kg/dia dividido conforme indicação.", "Pediatría: 0,5–1 mg/kg/día dividido según indicación."),
            severe: t(lang, "Evitar doses altas em idosos, cardiopatas ou pacientes com risco de QT.", "Evitar dosis altas en adultos mayores, cardiópatas o pacientes con riesgo de QT."),
            maxDose: t(lang, "100 mg/dia em adultos", "100 mg/día en adultos")
          },
          indications: [
            t(lang, "Ansiedade leve a moderada", "Ansiedad leve a moderada"),
            t(lang, "Crises de ansiedade quando se deseja evitar benzodiazepínicos", "Crisis de ansiedad cuando se desea evitar benzodiacepinas"),
            t(lang, "Insônia associada à ansiedade", "Insomnio asociado a ansiedad"),
            t(lang, "Prurido alérgico", "Prurito alérgico"),
            t(lang, "Urticária", "Urticaria"),
            t(lang, "Dermatites pruriginosas", "Dermatitis pruriginosas"),
            t(lang, "Sedação pré-procedimento em casos selecionados", "Sedación preprocedimiento en casos seleccionados")
          ],
          renalAdjustment: insuficienciaRenal
            ? t(lang, "Insuficiência renal: considerar reduzir dose e monitorar sedação/confusão.", "Insuficiencia renal: considerar reducir dosis y monitorizar sedación/confusión.")
            : t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia
            ? t(lang, "Hepatopatia: considerar reduzir dose e monitorar sedação prolongada.", "Hepatopatía: considerar reducir dosis y monitorizar sedación prolongada.")
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Antagonista/inverso H1 central e periférico; possui efeito sedativo, antipruriginoso, antiemético leve e ansiolítico.", "Antagonista/inverso H1 central y periférico; posee efecto sedativo, antipruriginoso, antiemético leve y ansiolítico."),
          onset: t(lang, "Início de ação geralmente em 15–60 minutos.", "Inicio de acción generalmente en 15–60 minutos."),
          halfLife: t(lang, "Vida média aproximada: 14–25 horas em adultos; pode prolongar em idosos.", "Vida media aproximada: 14–25 horas en adultos; puede prolongarse en adultos mayores."),
          commonAdverseEffects: [
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Boca seca", "Boca seca"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Fadiga", "Fatiga"),
            t(lang, "Visão turva", "Visión borrosa"),
            t(lang, "Constipação", "Estreñimiento")
          ],
          dangerousAdverseEffects: [
            t(lang, "Prolongamento do intervalo QT", "Prolongación del intervalo QT"),
            t(lang, "Torsades de pointes em pacientes predispostos", "Torsades de pointes en pacientes predispuestos"),
            t(lang, "Depressão do SNC em associação com sedativos", "Depresión del SNC en asociación con sedantes"),
            t(lang, "Delirium anticolinérgico em idosos", "Delirium anticolinérgico en adultos mayores"),
            t(lang, "Retenção urinária", "Retención urinaria"),
            t(lang, "Convulsões raras em predispostos", "Convulsiones raras en predispuestos")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: evitar quando possível; risco de sedação, quedas, confusão e efeitos anticolinérgicos.", "Adulto mayor: evitar cuando sea posible; riesgo de sedación, caídas, confusión y efectos anticolinérgicos.") : null,
            gestante ? t(lang, "Gestação: avaliar risco-benefício; evitar automedicação.", "Embarazo: evaluar riesgo-beneficio; evitar automedicación.") : null,
            lactante ? t(lang, "Lactação: pode causar sedação no lactente e reduzir produção de leite; monitorar ou evitar.", "Lactancia: puede causar sedación en el lactante y reducir producción de leche; monitorizar o evitar.") : null,
            hepatopatia ? t(lang, "Hepatopatia: maior risco de sedação prolongada.", "Hepatopatía: mayor riesgo de sedación prolongada.") : null,
            insuficienciaRenal ? t(lang, "Insuficiência renal: monitorar acúmulo, sedação e confusão.", "Insuficiencia renal: monitorizar acumulación, sedación y confusión.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade à hidroxizina ou cetirizina", "Hipersensibilidad a hidroxicina o cetirizina"),
            t(lang, "QT longo congênito ou adquirido", "QT largo congénito o adquirido"),
            t(lang, "Arritmias graves ou risco elevado de torsades", "Arritmias graves o riesgo elevado de torsades"),
            t(lang, "Uso concomitante com fármacos que prolongam QT em pacientes de risco", "Uso concomitante con fármacos que prolongan QT en pacientes de riesgo"),
            t(lang, "Retenção urinária importante ou glaucoma de ângulo fechado não controlado", "Retención urinaria importante o glaucoma de ángulo cerrado no controlado")
          ],
          interactions: [
            t(lang, "Álcool", "Alcohol"),
            t(lang, "Benzodiazepínicos", "Benzodiacepinas"),
            t(lang, "Opioides", "Opioides"),
            t(lang, "Antipsicóticos sedativos", "Antipsicóticos sedativos"),
            t(lang, "Antidepressivos tricíclicos", "Antidepresivos tricíclicos"),
            t(lang, "Fármacos que prolongam QT como macrolídeos, quinolonas, antiarrítmicos e alguns antipsicóticos", "Fármacos que prolongan QT como macrólidos, quinolonas, antiarrítmicos y algunos antipsicóticos")
          ],
          alerts: [
            t(lang, "Pode ser alternativa aos benzodiazepínicos quando se quer evitar dependência.", "Puede ser alternativa a benzodiacepinas cuando se quiere evitar dependencia."),
            t(lang, "Não é isenta de risco: atenção a sedação, quedas e QT prolongado.", "No está exenta de riesgo: atención a sedación, caídas y QT prolongado."),
            t(lang, "Evitar em idosos frágeis quando possível.", "Evitar en adultos mayores frágiles cuando sea posible."),
            t(lang, "Evitar associação com álcool e outros sedativos.", "Evitar asociación con alcohol y otros sedantes."),
            t(lang, "Considerar ECG se paciente tem risco de QT ou usa múltiplos fármacos pró-arrítmicos.", "Considerar ECG si el paciente tiene riesgo de QT o usa múltiples fármacos proarrítmicos.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Hydroxyzine Prescribing Information",
            "EMA Hydroxyzine safety communication",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    pregabalina: {
      name: { pt: "Pregabalina", es: "Pregabalina" },
      category: "ansiolitico",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = clcr < 60;

        return {
          name: t(lang, "Pregabalina", "Pregabalina"),
          class: t(lang, "Gabapentinoide ansiolítico, anticonvulsivante e analgésico neuropático", "Gabapentinoide ansiolítico, anticonvulsivante y analgésico neuropático"),
          category: "ansiolitico",
          commercialNames: {
            br: ["Lyrica", "Prebictal", "Pregabalina EMS", "Pregabalina Eurofarma"],
            ar: ["Lyrica", "Gavin", "Pregabalina Bagó", "Pregabalina Gador"]
          },
          presentation: [
            t(lang, "Cápsula 25 mg", "Cápsula 25 mg"),
            t(lang, "Cápsula 50 mg", "Cápsula 50 mg"),
            t(lang, "Cápsula 75 mg", "Cápsula 75 mg"),
            t(lang, "Cápsula 150 mg", "Cápsula 150 mg"),
            t(lang, "Cápsula 300 mg", "Cápsula 300 mg")
          ],
          dose: {
            adulto: t(lang, "Ansiedade/dor neuropática: iniciar 75 mg VO 12/12h ou 50 mg VO 8/8h; titular conforme resposta.", "Ansiedad/dolor neuropático: iniciar 75 mg VO cada 12 h o 50 mg VO cada 8 h; titular según respuesta."),
            usual: t(lang, "Dose usual: 150–600 mg/dia divididos em 2–3 tomadas.", "Dosis habitual: 150–600 mg/día divididos en 2–3 tomas."),
            maxDose: t(lang, "Dose máxima usual: 600 mg/dia.", "Dosis máxima habitual: 600 mg/día.")
          },
          doseKg: {
            standard: t(lang, "Não se utiliza cálculo rotineiro por kg em adultos.", "No se utiliza cálculo rutinario por kg en adultos."),
            pediatric: t(lang, "Pediatria: uso especializado, principalmente em epilepsia; ajustar conforme peso e indicação.", "Pediatría: uso especializado, principalmente en epilepsia; ajustar según peso e indicación."),
            maxDose: t(lang, "600 mg/dia", "600 mg/día")
          },
          indications: [
            t(lang, "Transtorno de ansiedade generalizada", "Trastorno de ansiedad generalizada"),
            t(lang, "Dor neuropática periférica", "Dolor neuropático periférico"),
            t(lang, "Neuropatia diabética dolorosa", "Neuropatía diabética dolorosa"),
            t(lang, "Neuralgia pós-herpética", "Neuralgia posherpética"),
            t(lang, "Fibromialgia", "Fibromialgia"),
            t(lang, "Epilepsia focal como terapia adjuvante", "Epilepsia focal como terapia adyuvante"),
            t(lang, "Dor neuropática associada a lesão medular", "Dolor neuropático asociado a lesión medular")
          ],
          renalAdjustment: insuficienciaRenal
            ? t(lang, "Necessita ajuste renal conforme ClCr; reduzir dose e/ou aumentar intervalo.", "Requiere ajuste renal según ClCr; reducir dosis y/o aumentar intervalo.")
            : t(lang, "Sem ajuste renal se função renal normal.", "Sin ajuste renal si función renal normal."),
          hepaticAdjustment: hepatopatia
            ? t(lang, "Sem metabolismo hepático relevante; geralmente não requer ajuste hepático.", "Sin metabolismo hepático relevante; generalmente no requiere ajuste hepático.")
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Liga-se à subunidade alfa-2-delta dos canais de cálcio voltagem-dependentes, reduzindo liberação de neurotransmissores excitatórios.", "Se une a la subunidad alfa-2-delta de los canales de calcio voltaje-dependientes, reduciendo la liberación de neurotransmisores excitatorios."),
          onset: t(lang, "Ansiedade pode melhorar em 1–2 semanas; dor neuropática pode melhorar nos primeiros dias a semanas.", "La ansiedad puede mejorar en 1–2 semanas; el dolor neuropático puede mejorar en los primeros días a semanas."),
          halfLife: t(lang, "Vida média aproximada: 6 horas.", "Vida media aproximada: 6 horas."),
          commonAdverseEffects: [
            t(lang, "Tontura", "Mareos"),
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Edema periférico", "Edema periférico"),
            t(lang, "Ganho de peso", "Aumento de peso"),
            t(lang, "Boca seca", "Boca seca"),
            t(lang, "Visão turva", "Visión borrosa"),
            t(lang, "Dificuldade de concentração", "Dificultad de concentración")
          ],
          dangerousAdverseEffects: [
            t(lang, "Depressão respiratória quando associada a opioides ou depressores do SNC", "Depresión respiratoria cuando se asocia a opioides o depresores del SNC"),
            t(lang, "Dependência, uso problemático ou abuso em predispostos", "Dependencia, uso problemático o abuso en predispuestos"),
            t(lang, "Angioedema raro", "Angioedema raro"),
            t(lang, "Ideação suicida", "Ideación suicida"),
            t(lang, "Sedação intensa e quedas", "Sedación intensa y caídas"),
            t(lang, "Síndrome de abstinência se suspensão abrupta", "Síndrome de abstinencia si suspensión brusca")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: maior risco de tontura, sedação, quedas, confusão e edema.", "Adulto mayor: mayor riesgo de mareos, sedación, caídas, confusión y edema.") : null,
            gestante ? t(lang, "Gestação: avaliar risco-benefício; evitar uso sem indicação clara.", "Embarazo: evaluar riesgo-beneficio; evitar uso sin indicación clara.") : null,
            lactante ? t(lang, "Lactação: passa ao leite; monitorar sonolência e alimentação do lactente.", "Lactancia: pasa a la leche; monitorizar somnolencia y alimentación del lactante.") : null,
            hepatopatia ? t(lang, "Hepatopatia: geralmente sem ajuste, mas monitorar sedação se polifarmácia.", "Hepatopatía: generalmente sin ajuste, pero monitorizar sedación si hay polifarmacia.") : null,
            insuficienciaRenal ? t(lang, "Insuficiência renal: ajuste obrigatório conforme ClCr.", "Insuficiencia renal: ajuste obligatorio según ClCr.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade à pregabalina", "Hipersensibilidad a pregabalina"),
            t(lang, "Angioedema prévio relacionado ao fármaco", "Angioedema previo relacionado al fármaco")
          ],
          interactions: [
            t(lang, "Opioides: maior risco de sedação e depressão respiratória", "Opioides: mayor riesgo de sedación y depresión respiratoria"),
            t(lang, "Álcool: maior sedação e prejuízo psicomotor", "Alcohol: mayor sedación y deterioro psicomotor"),
            t(lang, "Benzodiazepínicos e hipnóticos: maior depressão do SNC", "Benzodiacepinas e hipnóticos: mayor depresión del SNC"),
            t(lang, "Antipsicóticos sedativos: maior sedação", "Antipsicóticos sedativos: mayor sedación"),
            t(lang, "Anti-histamínicos sedativos: maior sonolência", "Antihistamínicos sedantes: mayor somnolencia")
          ],
          alerts: [
            t(lang, "Ajustar sempre pela função renal.", "Ajustar siempre por función renal."),
            t(lang, "Evitar suspensão abrupta; reduzir gradualmente.", "Evitar suspensión brusca; reducir gradualmente."),
            t(lang, "Cautela em pacientes com histórico de abuso de substâncias.", "Cautela en pacientes con antecedente de abuso de sustancias."),
            t(lang, "Monitorar edema e ganho de peso.", "Monitorizar edema y aumento de peso."),
            t(lang, "Evitar associação com opioides sem monitorização.", "Evitar asociación con opioides sin monitorización.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Pregabalin Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    gabapentina: {
      name: { pt: "Gabapentina", es: "Gabapentina" },
      category: "ansiolitico",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = clcr < 60;

        return {
          name: t(lang, "Gabapentina", "Gabapentina"),
          class: t(lang, "Gabapentinoide anticonvulsivante, analgésico neuropático e ansiolítico off-label", "Gabapentinoide anticonvulsivante, analgésico neuropático y ansiolítico off-label"),
          category: "ansiolitico",
          commercialNames: {
            br: ["Neurontin", "Gabaneurin", "Gabapentina EMS", "Gabapentina Eurofarma"],
            ar: ["Neurontin", "Gabapentin", "Gabapentina Bagó", "Gabapentina Gador"]
          },
          presentation: [
            t(lang, "Cápsula 100 mg", "Cápsula 100 mg"),
            t(lang, "Cápsula 300 mg", "Cápsula 300 mg"),
            t(lang, "Cápsula 400 mg", "Cápsula 400 mg"),
            t(lang, "Comprimido 600 mg", "Comprimido 600 mg"),
            t(lang, "Comprimido 800 mg", "Comprimido 800 mg"),
            t(lang, "Solução oral 250 mg/5 mL", "Solución oral 250 mg/5 mL")
          ],
          dose: {
            adulto: t(lang, "Dor neuropática/epilepsia: iniciar 300 mg VO à noite ou 300 mg 1x/dia; titular até 300 mg 8/8h.", "Dolor neuropático/epilepsia: iniciar 300 mg VO por la noche o 300 mg 1 vez/día; titular hasta 300 mg cada 8 h."),
            usual: t(lang, "Dose usual: 900–3600 mg/dia divididos em 3 tomadas.", "Dosis habitual: 900–3600 mg/día divididos en 3 tomas."),
            maxDose: t(lang, "Dose máxima usual: 3600 mg/dia.", "Dosis máxima habitual: 3600 mg/día.")
          },
          doseKg: {
            standard: t(lang, "Pediatria/epilepsia: dose por kg conforme idade e protocolo especializado.", "Pediatría/epilepsia: dosis por kg según edad y protocolo especializado."),
            severe: t(lang, "Adultos: geralmente titular por resposta clínica, tolerabilidade e função renal.", "Adultos: generalmente titular por respuesta clínica, tolerabilidad y función renal."),
            maxDose: t(lang, "3600 mg/dia", "3600 mg/día")
          },
          indications: [
            t(lang, "Dor neuropática", "Dolor neuropático"),
            t(lang, "Neuralgia pós-herpética", "Neuralgia posherpética"),
            t(lang, "Epilepsia focal como terapia adjuvante", "Epilepsia focal como terapia adyuvante"),
            t(lang, "Ansiedade social ou ansiedade generalizada em casos selecionados off-label", "Ansiedad social o ansiedad generalizada en casos seleccionados off-label"),
            t(lang, "Síndrome das pernas inquietas", "Síndrome de piernas inquietas"),
            t(lang, "Fibromialgia off-label", "Fibromialgia off-label"),
            t(lang, "Dor neuropática diabética off-label", "Dolor neuropático diabético off-label"),
            t(lang, "Sintomas de abstinência alcoólica em casos selecionados", "Síntomas de abstinencia alcohólica en casos seleccionados")
          ],
          renalAdjustment: insuficienciaRenal
            ? t(lang, "Necessita ajuste renal conforme ClCr; reduzir dose e/ou aumentar intervalo.", "Requiere ajuste renal según ClCr; reducir dosis y/o aumentar intervalo.")
            : t(lang, "Sem ajuste renal se função renal normal.", "Sin ajuste renal si función renal normal."),
          hepaticAdjustment: hepatopatia
            ? t(lang, "Sem metabolismo hepático relevante; geralmente não requer ajuste hepático.", "Sin metabolismo hepático relevante; generalmente no requiere ajuste hepático.")
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Liga-se à subunidade alfa-2-delta dos canais de cálcio voltagem-dependentes, reduzindo liberação de neurotransmissores excitatórios.", "Se une a la subunidad alfa-2-delta de los canales de calcio voltaje-dependientes, reduciendo la liberación de neurotransmisores excitatorios."),
          onset: t(lang, "Dor neuropática pode melhorar em dias a semanas; efeito ansiolítico off-label costuma exigir titulação e avaliação individual.", "El dolor neuropático puede mejorar en días a semanas; el efecto ansiolítico off-label suele requerir titulación y evaluación individual."),
          halfLife: t(lang, "Vida média aproximada: 5–7 horas.", "Vida media aproximada: 5–7 horas."),
          commonAdverseEffects: [
            t(lang, "Tontura", "Mareos"),
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Ataxia", "Ataxia"),
            t(lang, "Fadiga", "Fatiga"),
            t(lang, "Edema periférico", "Edema periférico"),
            t(lang, "Nistagmo", "Nistagmo"),
            t(lang, "Ganho de peso", "Aumento de peso")
          ],
          dangerousAdverseEffects: [
            t(lang, "Depressão respiratória quando associada a opioides ou depressores do SNC", "Depresión respiratoria cuando se asocia a opioides o depresores del SNC"),
            t(lang, "Dependência, uso problemático ou abuso em predispostos", "Dependencia, uso problemático o abuso en predispuestos"),
            t(lang, "Ideação suicida", "Ideación suicida"),
            t(lang, "Sedação intensa e quedas", "Sedación intensa y caídas"),
            t(lang, "Reação de hipersensibilidade rara", "Reacción de hipersensibilidad rara"),
            t(lang, "Convulsões por retirada abrupta em pacientes epilépticos", "Convulsiones por retirada brusca en pacientes epilépticos")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: maior risco de tontura, sonolência, ataxia, quedas e confusão.", "Adulto mayor: mayor riesgo de mareos, somnolencia, ataxia, caídas y confusión.") : null,
            gestante ? t(lang, "Gestação: avaliar risco-benefício, especialmente em epilepsia.", "Embarazo: evaluar riesgo-beneficio, especialmente en epilepsia.") : null,
            lactante ? t(lang, "Lactação: passa ao leite; monitorar sonolência e ganho ponderal do lactente.", "Lactancia: pasa a la leche; monitorizar somnolencia y ganancia ponderal del lactante.") : null,
            hepatopatia ? t(lang, "Hepatopatia: geralmente sem ajuste, mas cuidado com sedação por polifarmácia.", "Hepatopatía: generalmente sin ajuste, pero cuidado con sedación por polifarmacia.") : null,
            insuficienciaRenal ? t(lang, "Insuficiência renal: ajuste obrigatório conforme ClCr.", "Insuficiencia renal: ajuste obligatorio según ClCr.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade à gabapentina", "Hipersensibilidad a gabapentina")
          ],
          interactions: [
            t(lang, "Opioides: maior risco de sedação e depressão respiratória", "Opioides: mayor riesgo de sedación y depresión respiratoria"),
            t(lang, "Álcool: maior sedação e prejuízo psicomotor", "Alcohol: mayor sedación y deterioro psicomotor"),
            t(lang, "Benzodiazepínicos e hipnóticos: maior depressão do SNC", "Benzodiacepinas e hipnóticos: mayor depresión del SNC"),
            t(lang, "Antiácidos com alumínio/magnésio: reduzem absorção; separar administração", "Antiácidos con aluminio/magnesio: reducen absorción; separar administración"),
            t(lang, "Antipsicóticos ou anti-histamínicos sedativos: maior sonolência", "Antipsicóticos o antihistamínicos sedantes: mayor somnolencia")
          ],
          alerts: [
            t(lang, "Ajustar sempre pela função renal.", "Ajustar siempre por función renal."),
            t(lang, "Evitar suspensão abrupta, especialmente em epilepsia.", "Evitar suspensión brusca, especialmente en epilepsia."),
            t(lang, "Cautela em pacientes com histórico de abuso de substâncias.", "Cautela en pacientes con antecedente de abuso de sustancias."),
            t(lang, "Separar de antiácidos por pelo menos 2 horas.", "Separar de antiácidos por al menos 2 horas."),
            t(lang, "Evitar associação com opioides sem monitorização.", "Evitar asociación con opioides sin monitorización.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Gabapentin Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    haloperidol: {
      name: { pt: "Haloperidol", es: "Haloperidol" },
      category: "antipsicotico",
      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        return {
          name: t(lang, "Haloperidol", "Haloperidol"),
          class: t(lang, "Antipsicótico típico de alta potência", "Antipsicótico típico de alta potencia"),
          category: "antipsicotico",
          commercialNames: {
            br: ["Haldol", "Haloperidol Cristália", "Haloperidol União Química"],
            ar: ["Haldol", "Haloperidol Klonal", "Haloperidol Richmond"]
          },
          presentation: [
            t(lang, "Comprimido 1 mg", "Comprimido 1 mg"),
            t(lang, "Comprimido 5 mg", "Comprimido 5 mg"),
            t(lang, "Gotas 2 mg/mL", "Gotas 2 mg/mL"),
            t(lang, "Ampola 5 mg/mL", "Ampolla 5 mg/mL"),
            t(lang, "Decanoato 50 mg/mL", "Decanoato 50 mg/mL")
          ],
          dose: {
            adulto: t(lang, "Psicose/agitação: 0,5–5 mg VO/IM, repetir conforme resposta e protocolo.", "Psicosis/agitación: 0,5–5 mg VO/IM, repetir según respuesta y protocolo."),
            manutencao: t(lang, "Manutenção: 1–15 mg/dia VO, dividido em 1–2 tomadas.", "Mantenimiento: 1–15 mg/día VO, dividido en 1–2 tomas."),
            maxDose: t(lang, "Dose máxima depende da indicação e monitorização; evitar doses altas sem ECG e controle clínico.", "La dosis máxima depende de indicación y monitorización; evitar dosis altas sin ECG y control clínico.")
          },
          indications: [
            t(lang, "Esquizofrenia", "Esquizofrenia"),
            t(lang, "Agitação psicomotora aguda", "Agitación psicomotora aguda"),
            t(lang, "Delirium hiperativo", "Delirium hiperactivo"),
            t(lang, "Mania aguda", "Manía aguda"),
            t(lang, "Psicose aguda", "Psicosis aguda"),
            t(lang, "Síndrome de Tourette", "Síndrome de Tourette"),
            t(lang, "Náuseas e vômitos refratários em contexto selecionado", "Náuseas y vómitos refractarios en contexto seleccionado")
          ],
          renalAdjustment: t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia ? t(lang, "Hepatopatia: iniciar com dose menor e titular cautelosamente.", "Hepatopatía: iniciar con dosis menor y titular con cautela.") : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Antagonista dopaminérgico D2 potente na via mesolímbica; alta potência antipsicótica e maior risco extrapiramidal.", "Antagonista dopaminérgico D2 potente en la vía mesolímbica; alta potencia antipsicótica y mayor riesgo extrapiramidal."),
          onset: t(lang, "IM: início em 20–30 minutos; VO: início clínico em horas a dias; efeito antipsicótico pleno em dias a semanas.", "IM: inicio en 20–30 minutos; VO: inicio clínico en horas a días; efecto antipsicótico pleno en días a semanas."),
          halfLife: t(lang, "Vida média aproximada: 14–37 horas; decanoato tem duração prolongada.", "Vida media aproximada: 14–37 horas; decanoato tiene duración prolongada."),
          commonAdverseEffects: [
            t(lang, "Acatisia", "Acatisia"),
            t(lang, "Distonia aguda", "Distonía aguda"),
            t(lang, "Parkinsonismo medicamentoso", "Parkinsonismo medicamentoso"),
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Rigidez", "Rigidez"),
            t(lang, "Hiperprolactinemia", "Hiperprolactinemia")
          ],
          dangerousAdverseEffects: [
            t(lang, "Síndrome neuroléptica maligna", "Síndrome neuroléptico maligno"),
            t(lang, "Prolongamento QT e torsades de pointes", "Prolongación QT y torsades de pointes"),
            t(lang, "Discinesia tardia", "Discinesia tardía"),
            t(lang, "Convulsões em predispostos", "Convulsiones en predispuestos"),
            t(lang, "Reação distônica laríngea rara", "Reacción distónica laríngea rara")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: maior risco de sintomas extrapiramidais, QT prolongado, quedas e mortalidade em demência.", "Adulto mayor: mayor riesgo de síntomas extrapiramidales, QT prolongado, caídas y mortalidad en demencia.") : null,
            gestante ? t(lang, "Gestação: avaliar risco-benefício; monitorar sintomas extrapiramidais/neonatais se uso no fim da gestação.", "Embarazo: evaluar riesgo-beneficio; monitorizar síntomas extrapiramidales/neonatales si se usa al final del embarazo.") : null,
            lactante ? t(lang, "Lactação: pode passar ao leite; monitorar sedação e sintomas extrapiramidais no lactente.", "Lactancia: puede pasar a la leche; monitorizar sedación y síntomas extrapiramidales en el lactante.") : null,
            hepatopatia ? t(lang, "Hepatopatia: maior risco de acúmulo; iniciar baixo.", "Hepatopatía: mayor riesgo de acumulación; iniciar bajo.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade ao haloperidol", "Hipersensibilidad al haloperidol"),
            t(lang, "Doença de Parkinson grave", "Enfermedad de Parkinson grave"),
            t(lang, "Depressão importante do SNC", "Depresión importante del SNC"),
            t(lang, "QT longo congênito ou arritmia ventricular grave", "QT largo congénito o arritmia ventricular grave"),
            t(lang, "Demência com corpos de Lewy, salvo extrema necessidade", "Demencia con cuerpos de Lewy, salvo extrema necesidad")
          ],
          interactions: [
            t(lang, "Fármacos que prolongam QT", "Fármacos que prolongan QT"),
            t(lang, "Macrolídeos, quinolonas e antiarrítmicos", "Macrólidos, quinolonas y antiarrítmicos"),
            t(lang, "Lítio: risco de neurotoxicidade", "Litio: riesgo de neurotoxicidad"),
            t(lang, "Levodopa e agonistas dopaminérgicos: antagonismo de efeito", "Levodopa y agonistas dopaminérgicos: antagonismo de efecto"),
            t(lang, "Álcool e depressores do SNC", "Alcohol y depresores del SNC")
          ],
          alerts: [
            t(lang, "Monitorar sintomas extrapiramidais.", "Monitorizar síntomas extrapiramidales."),
            t(lang, "Considerar ECG em pacientes de risco ou doses altas.", "Considerar ECG en pacientes de riesgo o dosis altas."),
            t(lang, "Cuidado com hipocalemia e hipomagnesemia.", "Cuidado con hipopotasemia e hipomagnesemia."),
            t(lang, "Evitar uso rotineiro em psicose associada à demência.", "Evitar uso rutinario en psicosis asociada a demencia."),
            t(lang, "Ter anticolinérgico disponível se risco de distonia aguda.", "Tener anticolinérgico disponible si hay riesgo de distonía aguda.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Haloperidol Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    clorpromazina: {
      name: { pt: "Clorpromazina", es: "Clorpromazina" },
      category: "antipsicotico",
      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        return {
          name: t(lang, "Clorpromazina", "Clorpromazina"),
          class: t(lang, "Antipsicótico típico de baixa potência — fenotiazina", "Antipsicótico típico de baja potencia — fenotiazina"),
          category: "antipsicotico",
          commercialNames: {
            br: ["Amplictil", "Clorpromazina Cristália"],
            ar: ["Largactil", "Clorpromazina Northia", "Clorpromazina Klonal"]
          },
          presentation: [
            t(lang, "Comprimido 25 mg", "Comprimido 25 mg"),
            t(lang, "Comprimido 100 mg", "Comprimido 100 mg"),
            t(lang, "Gotas 40 mg/mL", "Gotas 40 mg/mL"),
            t(lang, "Ampola 25 mg/5 mL", "Ampolla 25 mg/5 mL")
          ],
          dose: {
            adulto: t(lang, "Psicose/agitação: iniciar 25–50 mg VO 2–3x/dia; titular conforme resposta.", "Psicosis/agitación: iniciar 25–50 mg VO 2–3 veces/día; titular según respuesta."),
            manutencao: t(lang, "Manutenção: 200–800 mg/dia em doses divididas, conforme tolerabilidade.", "Mantenimiento: 200–800 mg/día en dosis divididas, según tolerabilidad."),
            maxDose: t(lang, "Dose máxima depende do contexto clínico; doses altas exigem monitorização cardiovascular e sedação.", "La dosis máxima depende del contexto clínico; dosis altas requieren monitorización cardiovascular y sedación.")
          },
          indications: [
            t(lang, "Esquizofrenia", "Esquizofrenia"),
            t(lang, "Agitação psicomotora", "Agitación psicomotora"),
            t(lang, "Mania aguda", "Manía aguda"),
            t(lang, "Psicose aguda", "Psicosis aguda"),
            t(lang, "Náuseas e vômitos refratários", "Náuseas y vómitos refractarios"),
            t(lang, "Soluços intratáveis", "Hipo intratable"),
            t(lang, "Sedação em estados de excitação intensa", "Sedación en estados de excitación intensa")
          ],
          renalAdjustment: t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia ? t(lang, "Hepatopatia: usar com cautela; risco de colestase e sedação prolongada.", "Hepatopatía: usar con cautela; riesgo de colestasis y sedación prolongada.") : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Antagonista D2 com forte bloqueio H1, muscarínico e alfa-1; menor risco extrapiramidal que haloperidol, porém maior sedação, hipotensão e efeito anticolinérgico.", "Antagonista D2 con fuerte bloqueo H1, muscarínico y alfa-1; menor riesgo extrapiramidal que haloperidol, pero mayor sedación, hipotensión y efecto anticolinérgico."),
          onset: t(lang, "Sedação pode ocorrer em horas; efeito antipsicótico pleno pode levar dias a semanas.", "La sedación puede ocurrir en horas; el efecto antipsicótico pleno puede tardar días a semanas."),
          halfLife: t(lang, "Vida média aproximada: 16–30 horas.", "Vida media aproximada: 16–30 horas."),
          commonAdverseEffects: [
            t(lang, "Sonolência intensa", "Somnolencia intensa"),
            t(lang, "Hipotensão ortostática", "Hipotensión ortostática"),
            t(lang, "Boca seca", "Boca seca"),
            t(lang, "Constipação", "Estreñimiento"),
            t(lang, "Visão turva", "Visión borrosa"),
            t(lang, "Ganho de peso", "Aumento de peso"),
            t(lang, "Fotossensibilidade", "Fotosensibilidad")
          ],
          dangerousAdverseEffects: [
            t(lang, "Síndrome neuroléptica maligna", "Síndrome neuroléptico maligno"),
            t(lang, "Prolongamento QT e arritmias", "Prolongación QT y arritmias"),
            t(lang, "Icterícia colestática", "Ictericia colestásica"),
            t(lang, "Agranulocitose rara", "Agranulocitosis rara"),
            t(lang, "Convulsões em predispostos", "Convulsiones en predispuestos"),
            t(lang, "Discinesia tardia", "Discinesia tardía")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: alto risco de sedação, hipotensão, quedas, delirium e efeitos anticolinérgicos.", "Adulto mayor: alto riesgo de sedación, hipotensión, caídas, delirium y efectos anticolinérgicos.") : null,
            gestante ? t(lang, "Gestação: avaliar risco-benefício; monitorar sintomas neonatais se uso no fim da gestação.", "Embarazo: evaluar riesgo-beneficio; monitorizar síntomas neonatales si se usa al final del embarazo.") : null,
            lactante ? t(lang, "Lactação: pode causar sedação no lactente; monitorar.", "Lactancia: puede causar sedación en el lactante; monitorizar.") : null,
            hepatopatia ? t(lang, "Hepatopatia: cuidado com hepatotoxicidade/colestase e sedação prolongada.", "Hepatopatía: cuidado con hepatotoxicidad/colestasis y sedación prolongada.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade às fenotiazinas", "Hipersensibilidad a fenotiazinas"),
            t(lang, "Depressão grave do SNC ou coma", "Depresión grave del SNC o coma"),
            t(lang, "Insuficiência hepática grave", "Insuficiencia hepática grave"),
            t(lang, "Hipotensão grave", "Hipotensión grave"),
            t(lang, "Doença de Parkinson ou demência com corpos de Lewy, salvo extrema necessidade", "Enfermedad de Parkinson o demencia con cuerpos de Lewy, salvo extrema necesidad")
          ],
          interactions: [
            t(lang, "Álcool e depressores do SNC", "Alcohol y depresores del SNC"),
            t(lang, "Anti-hipertensivos: maior hipotensão", "Antihipertensivos: mayor hipotensión"),
            t(lang, "Anticolinérgicos: maior constipação, retenção urinária e delirium", "Anticolinérgicos: mayor estreñimiento, retención urinaria y delirium"),
            t(lang, "Fármacos que prolongam QT", "Fármacos que prolongan QT"),
            t(lang, "Levodopa: antagonismo dopaminérgico", "Levodopa: antagonismo dopaminérgico")
          ],
          alerts: [
            t(lang, "Maior sedação e hipotensão que antipsicóticos típicos de alta potência.", "Mayor sedación e hipotensión que antipsicóticos típicos de alta potencia."),
            t(lang, "Monitorar pressão arterial, especialmente após início ou aumento de dose.", "Monitorizar presión arterial, especialmente tras inicio o aumento de dosis."),
            t(lang, "Orientar fotoproteção por risco de fotossensibilidade.", "Orientar fotoprotección por riesgo de fotosensibilidad."),
            t(lang, "Considerar ECG em pacientes com risco de QT.", "Considerar ECG en pacientes con riesgo de QT."),
            t(lang, "Evitar em idosos frágeis quando possível.", "Evitar en adultos mayores frágiles cuando sea posible.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Chlorpromazine Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    levomepromazina: {
      name: { pt: "Levomepromazina", es: "Levomepromazina" },
      category: "antipsicotico",
      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        return {
          name: t(lang, "Levomepromazina", "Levomepromazina"),
          class: t(lang, "Antipsicótico típico sedativo — fenotiazina", "Antipsicótico típico sedativo — fenotiazina"),
          category: "antipsicotico",
          commercialNames: {
            br: ["Neozine", "Levomepromazina Cristália"],
            ar: ["Nozinan", "Levomepromazina Northia"]
          },
          presentation: [
            t(lang, "Comprimido 25 mg", "Comprimido 25 mg"),
            t(lang, "Comprimido 100 mg", "Comprimido 100 mg"),
            t(lang, "Gotas 40 mg/mL", "Gotas 40 mg/mL"),
            t(lang, "Ampola 25 mg/mL", "Ampolla 25 mg/mL")
          ],
          dose: {
            adulto: t(lang, "Agitação/psicose: iniciar 25–50 mg VO à noite ou 2–3x/dia, conforme sedação e resposta.", "Agitación/psicosis: iniciar 25–50 mg VO por la noche o 2–3 veces/día, según sedación y respuesta."),
            paliativo: t(lang, "Cuidados paliativos/náuseas/agitação: doses baixas individualizadas conforme protocolo.", "Cuidados paliativos/náuseas/agitación: dosis bajas individualizadas según protocolo."),
            maxDose: t(lang, "Dose máxima depende da indicação; titular com cautela pelo alto risco de sedação e hipotensão.", "La dosis máxima depende de la indicación; titular con cautela por alto riesgo de sedación e hipotensión.")
          },
          indications: [
            t(lang, "Agitação psicomotora", "Agitación psicomotora"),
            t(lang, "Psicose aguda com insônia/agitação", "Psicosis aguda con insomnio/agitación"),
            t(lang, "Esquizofrenia", "Esquizofrenia"),
            t(lang, "Mania aguda", "Manía aguda"),
            t(lang, "Insônia grave em contexto psiquiátrico selecionado", "Insomnio grave en contexto psiquiátrico seleccionado"),
            t(lang, "Náuseas e vômitos refratários", "Náuseas y vómitos refractarios"),
            t(lang, "Sedação e controle de sintomas em cuidados paliativos", "Sedación y control de síntomas en cuidados paliativos")
          ],
          renalAdjustment: t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia ? t(lang, "Hepatopatia: iniciar com doses menores e monitorar sedação/toxicidade.", "Hepatopatía: iniciar con dosis menores y monitorizar sedación/toxicidad.") : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Antagonista D2 com forte bloqueio H1, alfa-1, muscarínico e serotoninérgico; perfil muito sedativo e hipotensor.", "Antagonista D2 con fuerte bloqueo H1, alfa-1, muscarínico y serotoninérgico; perfil muy sedativo e hipotensor."),
          onset: t(lang, "Sedação pode ocorrer em horas; efeito antipsicótico pleno pode levar dias a semanas.", "La sedación puede ocurrir en horas; efecto antipsicótico pleno puede tardar días a semanas."),
          halfLife: t(lang, "Vida média aproximada: 15–30 horas.", "Vida media aproximada: 15–30 horas."),
          commonAdverseEffects: [
            t(lang, "Sonolência intensa", "Somnolencia intensa"),
            t(lang, "Hipotensão ortostática", "Hipotensión ortostática"),
            t(lang, "Boca seca", "Boca seca"),
            t(lang, "Constipação", "Estreñimiento"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Ganho de peso", "Aumento de peso"),
            t(lang, "Visão turva", "Visión borrosa")
          ],
          dangerousAdverseEffects: [
            t(lang, "Síndrome neuroléptica maligna", "Síndrome neuroléptico maligno"),
            t(lang, "Depressão respiratória quando associada a sedativos", "Depresión respiratoria cuando se asocia a sedantes"),
            t(lang, "Prolongamento QT e arritmias", "Prolongación QT y arritmias"),
            t(lang, "Delirium anticolinérgico", "Delirium anticolinérgico"),
            t(lang, "Discinesia tardia", "Discinesia tardía"),
            t(lang, "Convulsões em predispostos", "Convulsiones en predispuestos")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: alto risco de sedação profunda, hipotensão, quedas, delirium e aspiração.", "Adulto mayor: alto riesgo de sedación profunda, hipotensión, caídas, delirium y aspiración.") : null,
            gestante ? t(lang, "Gestação: avaliar risco-benefício; monitorar recém-nascido se uso no fim da gestação.", "Embarazo: evaluar riesgo-beneficio; monitorizar recién nacido si se usa al final del embarazo.") : null,
            lactante ? t(lang, "Lactação: risco de sedação no lactente; monitorar ou evitar.", "Lactancia: riesgo de sedación en el lactante; monitorizar o evitar.") : null,
            hepatopatia ? t(lang, "Hepatopatia: maior risco de sedação prolongada e toxicidade.", "Hepatopatía: mayor riesgo de sedación prolongada y toxicidad.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade às fenotiazinas", "Hipersensibilidad a fenotiazinas"),
            t(lang, "Depressão grave do SNC ou coma", "Depresión grave del SNC o coma"),
            t(lang, "Hipotensão grave", "Hipotensión grave"),
            t(lang, "Insuficiência respiratória grave sem suporte", "Insuficiencia respiratoria grave sin soporte"),
            t(lang, "Doença de Parkinson ou demência com corpos de Lewy, salvo extrema necessidade", "Enfermedad de Parkinson o demencia con cuerpos de Lewy, salvo extrema necesidad")
          ],
          interactions: [
            t(lang, "Álcool", "Alcohol"),
            t(lang, "Opioides e benzodiazepínicos: maior depressão do SNC", "Opioides y benzodiacepinas: mayor depresión del SNC"),
            t(lang, "Anti-hipertensivos: maior hipotensão", "Antihipertensivos: mayor hipotensión"),
            t(lang, "Anticolinérgicos: maior risco de retenção urinária, constipação e delirium", "Anticolinérgicos: mayor riesgo de retención urinaria, estreñimiento y delirium"),
            t(lang, "Fármacos que prolongam QT", "Fármacos que prolongan QT")
          ],
          alerts: [
            t(lang, "Antipsicótico muito sedativo; titular lentamente.", "Antipsicótico muy sedativo; titular lentamente."),
            t(lang, "Monitorar pressão arterial e risco de quedas.", "Monitorizar presión arterial y riesgo de caídas."),
            t(lang, "Cuidado em combinação com opioides, benzodiazepínicos ou álcool.", "Cuidado en combinación con opioides, benzodiacepinas o alcohol."),
            t(lang, "Evitar em idosos frágeis quando possível.", "Evitar en adultos mayores frágiles cuando sea posible."),
            t(lang, "Considerar ECG em pacientes com risco de QT.", "Considerar ECG en pacientes con riesgo de QT.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    periciazina: {
      name: { pt: "Periciazina", es: "Periciazina" },
      category: "antipsicotico",
      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        return {
          name: t(lang, "Periciazina", "Periciazina"),
          class: t(lang, "Antipsicótico típico — fenotiazina piperidínica", "Antipsicótico típico — fenotiazina piperidínica"),
          category: "antipsicotico",
          commercialNames: { br: ["Neuleptil", "Periciazina"], ar: ["Neuleptil", "Periciazina"] },
          presentation: [
            t(lang, "Comprimido 10 mg", "Comprimido 10 mg"),
            t(lang, "Comprimido 25 mg", "Comprimido 25 mg"),
            t(lang, "Gotas 10 mg/mL", "Gotas 10 mg/mL"),
            t(lang, "Gotas 40 mg/mL", "Gotas 40 mg/mL")
          ],
          dose: {
            adulto: t(lang, "Psicose/agitação: iniciar 5–10 mg/dia VO; titular gradualmente conforme resposta.", "Psicosis/agitación: iniciar 5–10 mg/día VO; titular gradualmente según respuesta."),
            comportamento: t(lang, "Distúrbios de comportamento: doses baixas divididas em 1–3 tomadas/dia conforme tolerabilidade.", "Trastornos de conducta: dosis bajas divididas en 1–3 tomas/día según tolerabilidad."),
            maxDose: t(lang, "Dose máxima depende da indicação; titular com cautela por sedação, hipotensão e efeitos extrapiramidais.", "La dosis máxima depende de la indicación; titular con cautela por sedación, hipotensión y efectos extrapiramidales.")
          },
          indications: [
            t(lang, "Esquizofrenia", "Esquizofrenia"),
            t(lang, "Psicose crônica", "Psicosis crónica"),
            t(lang, "Agitação psicomotora", "Agitación psicomotora"),
            t(lang, "Agressividade e impulsividade em casos selecionados", "Agresividad e impulsividad en casos seleccionados"),
            t(lang, "Distúrbios graves de comportamento", "Trastornos graves de conducta"),
            t(lang, "Irritabilidade intensa em contexto psiquiátrico", "Irritabilidad intensa en contexto psiquiátrico"),
            t(lang, "Mania aguda como adjuvante", "Manía aguda como coadyuvante")
          ],
          renalAdjustment: t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia ? t(lang, "Hepatopatia: iniciar com dose menor e monitorar sedação/toxicidade.", "Hepatopatía: iniciar con dosis menor y monitorizar sedación/toxicidad.") : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Antagonista dopaminérgico D2 com ação sedativa, antiadrenérgica e anticolinérgica moderada.", "Antagonista dopaminérgico D2 con acción sedativa, antiadrenérgica y anticolinérgica moderada."),
          onset: t(lang, "Sedação pode ocorrer em horas; efeito antipsicótico pleno em dias a semanas.", "La sedación puede ocurrir en horas; efecto antipsicótico pleno en días a semanas."),
          halfLife: t(lang, "Vida média variável; efeito clínico pode persistir por várias horas.", "Vida media variable; el efecto clínico puede persistir varias horas."),
          commonAdverseEffects: [
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Hipotensão ortostática", "Hipotensión ortostática"),
            t(lang, "Boca seca", "Boca seca"),
            t(lang, "Constipação", "Estreñimiento"),
            t(lang, "Ganho de peso", "Aumento de peso"),
            t(lang, "Sintomas extrapiramidais", "Síntomas extrapiramidales")
          ],
          dangerousAdverseEffects: [
            t(lang, "Síndrome neuroléptica maligna", "Síndrome neuroléptico maligno"),
            t(lang, "Discinesia tardia", "Discinesia tardía"),
            t(lang, "Prolongamento QT e arritmias", "Prolongación QT y arritmias"),
            t(lang, "Delirium anticolinérgico", "Delirium anticolinérgico"),
            t(lang, "Convulsões em predispostos", "Convulsiones en predispuestos")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: maior risco de sedação, hipotensão, quedas, delirium e mortalidade em demência.", "Adulto mayor: mayor riesgo de sedación, hipotensión, caídas, delirium y mortalidad en demencia.") : null,
            gestante ? t(lang, "Gestação: avaliar risco-benefício e evitar uso sem indicação clara.", "Embarazo: evaluar riesgo-beneficio y evitar uso sin indicación clara.") : null,
            lactante ? t(lang, "Lactação: monitorar sedação e sintomas extrapiramidais no lactente.", "Lactancia: monitorizar sedación y síntomas extrapiramidales en el lactante.") : null,
            hepatopatia ? t(lang, "Hepatopatia: maior risco de acúmulo e sedação prolongada.", "Hepatopatía: mayor riesgo de acumulación y sedación prolongada.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade às fenotiazinas", "Hipersensibilidad a fenotiazinas"),
            t(lang, "Depressão grave do SNC ou coma", "Depresión grave del SNC o coma"),
            t(lang, "Doença de Parkinson ou demência com corpos de Lewy, salvo extrema necessidade", "Enfermedad de Parkinson o demencia con cuerpos de Lewy, salvo extrema necesidad"),
            t(lang, "QT prolongado significativo", "QT prolongado significativo"),
            t(lang, "Insuficiência hepática grave", "Insuficiencia hepática grave")
          ],
          interactions: [
            t(lang, "Álcool e depressores do SNC", "Alcohol y depresores del SNC"),
            t(lang, "Opioides e benzodiazepínicos", "Opioides y benzodiacepinas"),
            t(lang, "Fármacos que prolongam QT", "Fármacos que prolongan QT"),
            t(lang, "Anticolinérgicos", "Anticolinérgicos"),
            t(lang, "Anti-hipertensivos", "Antihipertensivos"),
            t(lang, "Levodopa e agonistas dopaminérgicos", "Levodopa y agonistas dopaminérgicos")
          ],
          alerts: [
            t(lang, "Monitorar sedação, pressão arterial e sintomas extrapiramidais.", "Monitorizar sedación, presión arterial y síntomas extrapiramidales."),
            t(lang, "Evitar em idosos frágeis quando possível.", "Evitar en adultos mayores frágiles cuando sea posible."),
            t(lang, "Considerar ECG em pacientes com risco de QT.", "Considerar ECG en pacientes con riesgo de QT."),
            t(lang, "Evitar associação com álcool e outros sedativos.", "Evitar asociación con alcohol y otros sedantes.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    flufenazina: {
      name: { pt: "Flufenazina", es: "Flufenazina" },
      category: "antipsicotico",
      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        return {
          name: t(lang, "Flufenazina", "Flufenazina"),
          class: t(lang, "Antipsicótico típico de alta potência — fenotiazina", "Antipsicótico típico de alta potencia — fenotiazina"),
          category: "antipsicotico",
          commercialNames: { br: ["Anatensol", "Flufenan", "Flufenazina"], ar: ["Modecate", "Flufenazina"] },
          presentation: [
            t(lang, "Comprimido 1 mg", "Comprimido 1 mg"),
            t(lang, "Comprimido 5 mg", "Comprimido 5 mg"),
            t(lang, "Solução oral/gotas", "Solución oral/gotas"),
            t(lang, "Decanoato 25 mg/mL", "Decanoato 25 mg/mL")
          ],
          dose: {
            adulto: t(lang, "Psicose: iniciar 1–2,5 mg VO 2–3x/dia; titular conforme resposta.", "Psicosis: iniciar 1–2,5 mg VO 2–3 veces/día; titular según respuesta."),
            depot: t(lang, "Decanoato: 12,5–25 mg IM profunda a cada 2–4 semanas, conforme resposta e tolerabilidade.", "Decanoato: 12,5–25 mg IM profunda cada 2–4 semanas, según respuesta y tolerabilidad."),
            maxDose: t(lang, "Dose máxima depende da indicação; evitar doses altas sem monitorização de EPS e ECG.", "La dosis máxima depende de indicación; evitar dosis altas sin monitorización de EPS y ECG.")
          },
          indications: [
            t(lang, "Esquizofrenia", "Esquizofrenia"),
            t(lang, "Psicose crônica", "Psicosis crónica"),
            t(lang, "Manutenção antipsicótica com formulação depot", "Mantenimiento antipsicótico con formulación depot"),
            t(lang, "Prevenção de recaídas psicóticas", "Prevención de recaídas psicóticas"),
            t(lang, "Transtorno esquizoafetivo em casos selecionados", "Trastorno esquizoafectivo en casos seleccionados"),
            t(lang, "Agitação psicótica em contexto selecionado", "Agitación psicótica en contexto seleccionado")
          ],
          renalAdjustment: t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia ? t(lang, "Hepatopatia: iniciar com dose menor e monitorar toxicidade.", "Hepatopatía: iniciar con dosis menor y monitorizar toxicidad.") : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Antagonista potente dos receptores D2; alta potência antipsicótica com maior risco de sintomas extrapiramidais.", "Antagonista potente de receptores D2; alta potencia antipsicótica con mayor riesgo de síntomas extrapiramidales."),
          onset: t(lang, "VO: efeito inicial em dias; depot: liberação prolongada com efeito por semanas.", "VO: efecto inicial en días; depot: liberación prolongada con efecto por semanas."),
          halfLife: t(lang, "Vida média variável; decanoato possui duração prolongada por 2–4 semanas.", "Vida media variable; decanoato posee duración prolongada por 2–4 semanas."),
          commonAdverseEffects: [
            t(lang, "Acatisia", "Acatisia"),
            t(lang, "Distonia aguda", "Distonía aguda"),
            t(lang, "Parkinsonismo medicamentoso", "Parkinsonismo medicamentoso"),
            t(lang, "Hiperprolactinemia", "Hiperprolactinemia"),
            t(lang, "Insônia ou inquietação", "Insomnio o inquietud"),
            t(lang, "Boca seca", "Boca seca")
          ],
          dangerousAdverseEffects: [
            t(lang, "Síndrome neuroléptica maligna", "Síndrome neuroléptico maligno"),
            t(lang, "Discinesia tardia", "Discinesia tardía"),
            t(lang, "Prolongamento QT e arritmias", "Prolongación QT y arritmias"),
            t(lang, "Distonia laríngea rara", "Distonía laríngea rara"),
            t(lang, "Convulsões em predispostos", "Convulsiones en predispuestos")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: maior risco de EPS, quedas, QT prolongado e mortalidade em demência.", "Adulto mayor: mayor riesgo de EPS, caídas, QT prolongado y mortalidad en demencia.") : null,
            gestante ? t(lang, "Gestação: avaliar risco-benefício; monitorar sintomas extrapiramidais/neonatais se uso tardio.", "Embarazo: evaluar riesgo-beneficio; monitorizar síntomas extrapiramidales/neonatales si uso tardío.") : null,
            lactante ? t(lang, "Lactação: monitorar sedação e sintomas extrapiramidais no lactente.", "Lactancia: monitorizar sedación y síntomas extrapiramidales en el lactante.") : null,
            hepatopatia ? t(lang, "Hepatopatia: maior risco de toxicidade; titular lentamente.", "Hepatopatía: mayor riesgo de toxicidad; titular lentamente.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade às fenotiazinas", "Hipersensibilidad a fenotiazinas"),
            t(lang, "Depressão grave do SNC ou coma", "Depresión grave del SNC o coma"),
            t(lang, "Doença de Parkinson grave", "Enfermedad de Parkinson grave"),
            t(lang, "Demência com corpos de Lewy, salvo extrema necessidade", "Demencia con cuerpos de Lewy, salvo extrema necesidad"),
            t(lang, "QT prolongado significativo", "QT prolongado significativo")
          ],
          interactions: [
            t(lang, "Levodopa e agonistas dopaminérgicos", "Levodopa y agonistas dopaminérgicos"),
            t(lang, "Fármacos que prolongam QT", "Fármacos que prolongan QT"),
            t(lang, "Lítio: risco de neurotoxicidade", "Litio: riesgo de neurotoxicidad"),
            t(lang, "Álcool e depressores do SNC", "Alcohol y depresores del SNC"),
            t(lang, "Anticolinérgicos usados para EPS: maior risco de delirium/constipação", "Anticolinérgicos usados para EPS: mayor riesgo de delirium/estreñimiento")
          ],
          alerts: [
            t(lang, "Alto risco extrapiramidal; monitorar acatisia, distonia e parkinsonismo.", "Alto riesgo extrapiramidal; monitorizar acatisia, distonía y parkinsonismo."),
            t(lang, "Formulação depot é útil para baixa adesão, mas exige tolerância prévia ao fármaco oral.", "La formulación depot es útil para baja adherencia, pero exige tolerancia previa al fármaco oral."),
            t(lang, "Considerar ECG se risco de QT.", "Considerar ECG si hay riesgo de QT."),
            t(lang, "Monitorar prolactina se sintomas clínicos.", "Monitorizar prolactina si hay síntomas clínicos.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Fluphenazine Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    zuclopentixol: {
      name: { pt: "Zuclopentixol", es: "Zuclopentixol" },
      category: "antipsicotico",
      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        return {
          name: t(lang, "Zuclopentixol", "Zuclopentixol"),
          class: t(lang, "Antipsicótico típico — tioxanteno", "Antipsicótico típico — tioxanteno"),
          category: "antipsicotico",
          commercialNames: { br: ["Clopixol"], ar: ["Clopixol", "Zuclopentixol"] },
          presentation: [
            t(lang, "Comprimido 10 mg", "Comprimido 10 mg"),
            t(lang, "Comprimido 25 mg", "Comprimido 25 mg"),
            t(lang, "Acetato IM 50 mg/mL", "Acetato IM 50 mg/mL"),
            t(lang, "Decanoato IM 200 mg/mL", "Decanoato IM 200 mg/mL")
          ],
          dose: {
            adulto: t(lang, "Psicose: iniciar 10–25 mg/dia VO; titular conforme resposta.", "Psicosis: iniciar 10–25 mg/día VO; titular según respuesta."),
            agitacao: t(lang, "Acetato IM: usado em agitação/psicose aguda conforme protocolo institucional.", "Acetato IM: usado en agitación/psicosis aguda según protocolo institucional."),
            depot: t(lang, "Decanoato IM: manutenção a cada 2–4 semanas conforme resposta e tolerabilidade.", "Decanoato IM: mantenimiento cada 2–4 semanas según respuesta y tolerabilidad."),
            maxDose: t(lang, "Dose máxima depende da formulação e indicação; requer monitorização de sedação, EPS e sinais vitais.", "La dosis máxima depende de la formulación e indicación; requiere monitorización de sedación, EPS y signos vitales.")
          },
          indications: [
            t(lang, "Esquizofrenia", "Esquizofrenia"),
            t(lang, "Psicose aguda", "Psicosis aguda"),
            t(lang, "Psicose crônica", "Psicosis crónica"),
            t(lang, "Agitação psicomotora grave", "Agitación psicomotora grave"),
            t(lang, "Mania aguda como adjuvante", "Manía aguda como coadyuvante"),
            t(lang, "Manutenção antipsicótica com depot", "Mantenimiento antipsicótico con depot"),
            t(lang, "Prevenção de recaídas psicóticas", "Prevención de recaídas psicóticas")
          ],
          renalAdjustment: t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia ? t(lang, "Hepatopatia: iniciar com dose menor e monitorar sedação/toxicidade.", "Hepatopatía: iniciar con dosis menor y monitorizar sedación/toxicidad.") : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Antagonista dopaminérgico D2 e D1, com ação antipsicótica, sedativa e antiagitação.", "Antagonista dopaminérgico D2 y D1, con acción antipsicótica, sedativa y antiagitación."),
          onset: t(lang, "Acetato IM tem início em horas; decanoato possui efeito prolongado por semanas.", "Acetato IM tiene inicio en horas; decanoato posee efecto prolongado por semanas."),
          halfLife: t(lang, "Vida média depende da formulação; decanoato mantém efeito por 2–4 semanas.", "Vida media depende de la formulación; decanoato mantiene efecto por 2–4 semanas."),
          commonAdverseEffects: [
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Acatisia", "Acatisia"),
            t(lang, "Parkinsonismo medicamentoso", "Parkinsonismo medicamentoso"),
            t(lang, "Boca seca", "Boca seca"),
            t(lang, "Hipotensão ortostática", "Hipotensión ortostática"),
            t(lang, "Hiperprolactinemia", "Hiperprolactinemia")
          ],
          dangerousAdverseEffects: [
            t(lang, "Síndrome neuroléptica maligna", "Síndrome neuroléptico maligno"),
            t(lang, "Discinesia tardia", "Discinesia tardía"),
            t(lang, "Prolongamento QT e arritmias", "Prolongación QT y arritmias"),
            t(lang, "Depressão do SNC quando associado a sedativos", "Depresión del SNC cuando se asocia a sedantes"),
            t(lang, "Convulsões em predispostos", "Convulsiones en predispuestos")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: maior risco de sedação, quedas, EPS, hipotensão e mortalidade em demência.", "Adulto mayor: mayor riesgo de sedación, caídas, EPS, hipotensión y mortalidad en demencia.") : null,
            gestante ? t(lang, "Gestação: avaliar risco-benefício; monitorar recém-nascido se uso no fim da gestação.", "Embarazo: evaluar riesgo-beneficio; monitorizar recién nacido si uso al final del embarazo.") : null,
            lactante ? t(lang, "Lactação: monitorar sedação e sintomas extrapiramidais no lactente.", "Lactancia: monitorizar sedación y síntomas extrapiramidales en el lactante.") : null,
            hepatopatia ? t(lang, "Hepatopatia: maior risco de toxicidade; titular cautelosamente.", "Hepatopatía: mayor riesgo de toxicidad; titular con cautela.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade ao zuclopentixol ou tioxantenos", "Hipersensibilidad al zuclopentixol o tioxantenos"),
            t(lang, "Depressão grave do SNC ou coma", "Depresión grave del SNC o coma"),
            t(lang, "Intoxicação aguda por álcool, opioides ou sedativos", "Intoxicación aguda por alcohol, opioides o sedantes"),
            t(lang, "Doença de Parkinson grave", "Enfermedad de Parkinson grave"),
            t(lang, "QT prolongado significativo", "QT prolongado significativo")
          ],
          interactions: [
            t(lang, "Álcool e depressores do SNC", "Alcohol y depresores del SNC"),
            t(lang, "Opioides e benzodiazepínicos", "Opioides y benzodiacepinas"),
            t(lang, "Levodopa e agonistas dopaminérgicos", "Levodopa y agonistas dopaminérgicos"),
            t(lang, "Fármacos que prolongam QT", "Fármacos que prolongan QT"),
            t(lang, "Anti-hipertensivos: maior hipotensão", "Antihipertensivos: mayor hipotensión")
          ],
          alerts: [
            t(lang, "Formulação acetato IM não é equivalente ao decanoato de manutenção.", "La formulación acetato IM no es equivalente al decanoato de mantenimiento."),
            t(lang, "Monitorar sedação, pressão arterial e sintomas extrapiramidais.", "Monitorizar sedación, presión arterial y síntomas extrapiramidales."),
            t(lang, "Decanoato exige avaliação de tolerância e plano de seguimento.", "El decanoato exige evaluación de tolerancia y plan de seguimiento."),
            t(lang, "Evitar associação com álcool e outros sedativos.", "Evitar asociación con alcohol y otros sedantes."),
            t(lang, "Considerar ECG em pacientes com risco cardiovascular ou QT.", "Considerar ECG en pacientes con riesgo cardiovascular o QT.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    tiotixeno: {
      name: { pt: "Tiotixeno", es: "Tiotixeno" },
      category: "antipsicotico",
      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        return {
          name: t(lang, "Tiotixeno", "Tiotixeno"),
          class: t(lang, "Antipsicótico típico — tioxanteno", "Antipsicótico típico — tioxanteno"),
          category: "antipsicotico",
          commercialNames: { br: ["Navane", "Tiotixeno"], ar: ["Navane", "Tiotixeno"] },
          presentation: [
            t(lang, "Cápsula 1 mg", "Cápsula 1 mg"),
            t(lang, "Cápsula 2 mg", "Cápsula 2 mg"),
            t(lang, "Cápsula 5 mg", "Cápsula 5 mg"),
            t(lang, "Cápsula 10 mg", "Cápsula 10 mg")
          ],
          dose: {
            adulto: t(lang, "Esquizofrenia: iniciar 2 mg VO 3x/dia ou 5 mg VO 2x/dia; titular conforme resposta.", "Esquizofrenia: iniciar 2 mg VO 3 veces/día o 5 mg VO 2 veces/día; titular según respuesta."),
            manutencao: t(lang, "Manutenção: geralmente 15–30 mg/dia em doses divididas.", "Mantenimiento: generalmente 15–30 mg/día en dosis divididas."),
            maxDose: t(lang, "Dose máxima usual: 60 mg/dia.", "Dosis máxima habitual: 60 mg/día.")
          },
          indications: [
            t(lang, "Esquizofrenia", "Esquizofrenia"),
            t(lang, "Psicose crônica", "Psicosis crónica"),
            t(lang, "Psicose aguda em casos selecionados", "Psicosis aguda en casos seleccionados"),
            t(lang, "Agitação psicótica", "Agitación psicótica"),
            t(lang, "Transtorno esquizoafetivo em casos selecionados", "Trastorno esquizoafectivo en casos seleccionados"),
            t(lang, "Manutenção antipsicótica em pacientes previamente respondedores", "Mantenimiento antipsicótico en pacientes previamente respondedores")
          ],
          renalAdjustment: t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia ? t(lang, "Hepatopatia: iniciar com dose menor e titular lentamente.", "Hepatopatía: iniciar con dosis menor y titular lentamente.") : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Antagonista dopaminérgico D2, reduzindo sintomas psicóticos positivos; possui risco extrapiramidal relevante.", "Antagonista dopaminérgico D2, reduciendo síntomas psicóticos positivos; posee riesgo extrapiramidal relevante."),
          onset: t(lang, "Sedação e redução de agitação podem ocorrer em horas a dias; efeito antipsicótico pleno em dias a semanas.", "Sedación y reducción de agitación pueden ocurrir en horas a días; efecto antipsicótico pleno en días a semanas."),
          halfLife: t(lang, "Vida média aproximada: 20–40 horas.", "Vida media aproximada: 20–40 horas."),
          commonAdverseEffects: [
            t(lang, "Acatisia", "Acatisia"),
            t(lang, "Parkinsonismo medicamentoso", "Parkinsonismo medicamentoso"),
            t(lang, "Distonia aguda", "Distonía aguda"),
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Boca seca", "Boca seca"),
            t(lang, "Hipotensão ortostática", "Hipotensión ortostática")
          ],
          dangerousAdverseEffects: [
            t(lang, "Síndrome neuroléptica maligna", "Síndrome neuroléptico maligno"),
            t(lang, "Discinesia tardia", "Discinesia tardía"),
            t(lang, "Prolongamento QT e arritmias", "Prolongación QT y arritmias"),
            t(lang, "Convulsões em predispostos", "Convulsiones en predispuestos"),
            t(lang, "Depressão importante do SNC se associado a sedativos", "Depresión importante del SNC si se asocia a sedantes")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: maior risco de EPS, sedação, quedas, hipotensão e mortalidade em demência.", "Adulto mayor: mayor riesgo de EPS, sedación, caídas, hipotensión y mortalidad en demencia.") : null,
            gestante ? t(lang, "Gestação: avaliar risco-benefício; monitorar sintomas neonatais se uso no fim da gestação.", "Embarazo: evaluar riesgo-beneficio; monitorizar síntomas neonatales si uso al final del embarazo.") : null,
            lactante ? t(lang, "Lactação: monitorar sedação e sintomas extrapiramidais no lactente.", "Lactancia: monitorizar sedación y síntomas extrapiramidales en el lactante.") : null,
            hepatopatia ? t(lang, "Hepatopatia: maior risco de acúmulo e toxicidade.", "Hepatopatía: mayor riesgo de acumulación y toxicidad.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade ao tiotixeno ou tioxantenos", "Hipersensibilidad al tiotixeno o tioxantenos"),
            t(lang, "Depressão grave do SNC ou coma", "Depresión grave del SNC o coma"),
            t(lang, "Doença de Parkinson grave", "Enfermedad de Parkinson grave"),
            t(lang, "Demência com corpos de Lewy, salvo extrema necessidade", "Demencia con cuerpos de Lewy, salvo extrema necesidad"),
            t(lang, "QT prolongado significativo", "QT prolongado significativo")
          ],
          interactions: [
            t(lang, "Álcool e depressores do SNC", "Alcohol y depresores del SNC"),
            t(lang, "Opioides e benzodiazepínicos", "Opioides y benzodiacepinas"),
            t(lang, "Fármacos que prolongam QT", "Fármacos que prolongan QT"),
            t(lang, "Levodopa e agonistas dopaminérgicos", "Levodopa y agonistas dopaminérgicos"),
            t(lang, "Anti-hipertensivos: maior hipotensão", "Antihipertensivos: mayor hipotensión")
          ],
          alerts: [
            t(lang, "Monitorar sintomas extrapiramidais desde o início.", "Monitorizar síntomas extrapiramidales desde el inicio."),
            t(lang, "Considerar ECG em pacientes com risco cardiovascular ou QT.", "Considerar ECG en pacientes con riesgo cardiovascular o QT."),
            t(lang, "Evitar em idosos com demência quando possível.", "Evitar en adultos mayores con demencia cuando sea posible."),
            t(lang, "Evitar associação com álcool e outros sedativos.", "Evitar asociación con alcohol y otros sedantes."),
            t(lang, "Reduzir gradualmente se uso prolongado.", "Reducir gradualmente si uso prolongado.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Thiothixene Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    pimozida: {
      name: { pt: "Pimozida", es: "Pimozida" },
      category: "antipsicotico",
      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        return {
          name: t(lang, "Pimozida", "Pimozida"),
          class: t(lang, "Antipsicótico típico de alta potência — difenilbutilpiperidina", "Antipsicótico típico de alta potencia — difenilbutilpiperidina"),
          category: "antipsicotico",
          commercialNames: { br: ["Orap", "Pimozida"], ar: ["Orap", "Pimozida"] },
          presentation: [
            t(lang, "Comprimido 1 mg", "Comprimido 1 mg"),
            t(lang, "Comprimido 2 mg", "Comprimido 2 mg"),
            t(lang, "Comprimido 4 mg", "Comprimido 4 mg")
          ],
          dose: {
            adulto: t(lang, "Tourette/tics: iniciar 1–2 mg/dia VO; titular lentamente conforme resposta e ECG.", "Tourette/tics: iniciar 1–2 mg/día VO; titular lentamente según respuesta y ECG."),
            manutencao: t(lang, "Manutenção: menor dose efetiva, geralmente 2–10 mg/dia.", "Mantenimiento: menor dosis efectiva, generalmente 2–10 mg/día."),
            maxDose: t(lang, "Dose máxima usual: 10 mg/dia ou conforme limite regulatório local; exige monitorização de QT.", "Dosis máxima habitual: 10 mg/día o según límite regulatorio local; requiere monitorización de QT.")
          },
          indications: [
            t(lang, "Síndrome de Tourette", "Síndrome de Tourette"),
            t(lang, "Tiques motores crônicos", "Tics motores crónicos"),
            t(lang, "Tiques vocais crônicos", "Tics vocales crónicos"),
            t(lang, "Transtorno delirante em casos selecionados", "Trastorno delirante en casos seleccionados"),
            t(lang, "Psicose crônica em pacientes previamente respondedores", "Psicosis crónica en pacientes previamente respondedores"),
            t(lang, "Coreia ou movimentos hipercinéticos selecionados sob especialista", "Corea o movimientos hipercinéticos seleccionados bajo especialista")
          ],
          renalAdjustment: t(lang, "Sem ajuste renal habitual, mas usar cautela em pacientes frágeis.", "Sin ajuste renal habitual, pero usar con cautela en pacientes frágiles."),
          hepaticAdjustment: hepatopatia ? t(lang, "Hepatopatia: usar com cautela, iniciar baixo e monitorar eventos adversos.", "Hepatopatía: usar con cautela, iniciar bajo y monitorizar eventos adversos.") : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Antagonista dopaminérgico D2 potente; reduz tiques e sintomas psicóticos, mas tem risco relevante de QT prolongado.", "Antagonista dopaminérgico D2 potente; reduce tics y síntomas psicóticos, pero tiene riesgo relevante de prolongación QT."),
          onset: t(lang, "Redução de tiques pode ocorrer em dias a semanas; resposta plena pode exigir titulação gradual.", "La reducción de tics puede ocurrir en días a semanas; respuesta plena puede requerir titulación gradual."),
          halfLife: t(lang, "Vida média aproximada: 55 horas.", "Vida media aproximada: 55 horas."),
          commonAdverseEffects: [
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Acatisia", "Acatisia"),
            t(lang, "Parkinsonismo medicamentoso", "Parkinsonismo medicamentoso"),
            t(lang, "Rigidez", "Rigidez"),
            t(lang, "Boca seca", "Boca seca"),
            t(lang, "Hiperprolactinemia", "Hiperprolactinemia")
          ],
          dangerousAdverseEffects: [
            t(lang, "Prolongamento QT", "Prolongación QT"),
            t(lang, "Torsades de pointes", "Torsades de pointes"),
            t(lang, "Morte súbita cardíaca em pacientes predispostos", "Muerte súbita cardíaca en pacientes predispuestos"),
            t(lang, "Síndrome neuroléptica maligna", "Síndrome neuroléptico maligno"),
            t(lang, "Discinesia tardia", "Discinesia tardía"),
            t(lang, "Convulsões em predispostos", "Convulsiones en predispuestos")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: maior risco de QT prolongado, EPS, quedas e mortalidade em demência.", "Adulto mayor: mayor riesgo de QT prolongado, EPS, caídas y mortalidad en demencia.") : null,
            gestante ? t(lang, "Gestação: avaliar risco-benefício; evitar se houver alternativa mais segura.", "Embarazo: evaluar riesgo-beneficio; evitar si hay alternativa más segura.") : null,
            lactante ? t(lang, "Lactação: monitorar sedação, irritabilidade e sintomas extrapiramidais no lactente.", "Lactancia: monitorizar sedación, irritabilidad y síntomas extrapiramidales en el lactante.") : null,
            hepatopatia ? t(lang, "Hepatopatia: maior risco de acúmulo e eventos adversos.", "Hepatopatía: mayor riesgo de acumulación y eventos adversos.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "QT longo congênito ou QT prolongado significativo", "QT largo congénito o QT prolongado significativo"),
            t(lang, "História de arritmia ventricular grave", "Historia de arritmia ventricular grave"),
            t(lang, "Hipocalemia ou hipomagnesemia não corrigidas", "Hipopotasemia o hipomagnesemia no corregidas"),
            t(lang, "Uso concomitante com fármacos que prolongam QT", "Uso concomitante con fármacos que prolongan QT"),
            t(lang, "Uso com inibidores fortes de CYP3A4 ou CYP2D6", "Uso con inhibidores fuertes de CYP3A4 o CYP2D6"),
            t(lang, "Uso com ISRS como fluoxetina, paroxetina, sertralina ou escitalopram/citalopram conforme risco de QT/interação", "Uso con ISRS como fluoxetina, paroxetina, sertralina o escitalopram/citalopram según riesgo de QT/interacción")
          ],
          interactions: [
            t(lang, "Macrolídeos, quinolonas e antiarrítmicos: risco de QT", "Macrólidos, quinolonas y antiarrítmicos: riesgo de QT"),
            t(lang, "Azólicos, ritonavir e outros inibidores fortes de CYP3A4", "Azoles, ritonavir y otros inhibidores fuertes de CYP3A4"),
            t(lang, "Fluoxetina, paroxetina e outros inibidores de CYP2D6", "Fluoxetina, paroxetina y otros inhibidores de CYP2D6"),
            t(lang, "Citalopram/escitalopram: risco adicional de QT", "Citalopram/escitalopram: riesgo adicional de QT"),
            t(lang, "Levodopa e agonistas dopaminérgicos", "Levodopa y agonistas dopaminérgicos"),
            t(lang, "Álcool e depressores do SNC", "Alcohol y depresores del SNC")
          ],
          alerts: [
            t(lang, "Obrigatório avaliar risco de QT antes de iniciar.", "Obligatorio evaluar riesgo de QT antes de iniciar."),
            t(lang, "Realizar ECG basal e durante titulação em pacientes de risco.", "Realizar ECG basal y durante titulación en pacientes de riesgo."),
            t(lang, "Corrigir potássio e magnésio antes de usar.", "Corregir potasio y magnesio antes de usar."),
            t(lang, "Evitar combinação com fármacos que prolongam QT.", "Evitar combinación con fármacos que prolongan QT."),
            t(lang, "Reservar para indicações específicas, especialmente Tourette/tics refratários.", "Reservar para indicaciones específicas, especialmente Tourette/tics refractarios.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Pimozide Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    sulpirida: {
      name: { pt: "Sulpirida", es: "Sulpirida" },
      category: "antipsicotico",
      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = clcr < 60;
        return {
          name: t(lang, "Sulpirida", "Sulpirida"),
          class: t(lang, "Antipsicótico benzamida substituída", "Antipsicótico benzamida sustituida"),
          category: "antipsicotico",
          commercialNames: { br: ["Dogmatil", "Equilid", "Sulpirida"], ar: ["Dogmatil", "Sulpirida", "Sulpirida Gador"] },
          presentation: [
            t(lang, "Cápsula/comprimido 50 mg", "Cápsula/comprimido 50 mg"),
            t(lang, "Comprimido 200 mg", "Comprimido 200 mg"),
            t(lang, "Solução oral/gotas", "Solución oral/gotas"),
            t(lang, "Ampola 100 mg/2 mL", "Ampolla 100 mg/2 mL")
          ],
          dose: {
            adulto: t(lang, "Psicose/esquizofrenia: 400–800 mg/dia VO em doses divididas; titular conforme resposta.", "Psicosis/esquizofrenia: 400–800 mg/día VO en dosis divididas; titular según respuesta."),
            doseBaixa: t(lang, "Sintomas ansiosos/somatização/vertigem: doses baixas, geralmente 50–150 mg/dia conforme indicação local.", "Síntomas ansiosos/somatización/vértigo: dosis bajas, generalmente 50–150 mg/día según indicación local."),
            maxDose: t(lang, "Dose máxima usual em psicose: até 1200 mg/dia em casos selecionados.", "Dosis máxima habitual en psicosis: hasta 1200 mg/día en casos seleccionados.")
          },
          indications: [
            t(lang, "Esquizofrenia", "Esquizofrenia"),
            t(lang, "Psicose aguda", "Psicosis aguda"),
            t(lang, "Psicose crônica", "Psicosis crónica"),
            t(lang, "Sintomas negativos em esquizofrenia em casos selecionados", "Síntomas negativos en esquizofrenia en casos seleccionados"),
            t(lang, "Ansiedade somatizada em doses baixas", "Ansiedad somatizada en dosis bajas"),
            t(lang, "Vertigem/labirintopatias em alguns protocolos", "Vértigo/laberintopatías en algunos protocolos"),
            t(lang, "Dispepsia funcional ou sintomas gastrointestinais funcionais em alguns países", "Dispepsia funcional o síntomas gastrointestinales funcionales en algunos países")
          ],
          renalAdjustment: insuficienciaRenal ? t(lang, "Necessita ajuste renal conforme ClCr; reduzir dose ou aumentar intervalo.", "Requiere ajuste renal según ClCr; reducir dosis o aumentar intervalo.") : t(lang, "Sem ajuste renal se função renal normal.", "Sin ajuste renal si función renal normal."),
          hepaticAdjustment: hepatopatia ? t(lang, "Sem metabolismo hepático relevante; geralmente não exige ajuste hepático, mas monitorar tolerabilidade.", "Sin metabolismo hepático relevante; generalmente no requiere ajuste hepático, pero monitorizar tolerabilidad.") : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Antagonista seletivo dopaminérgico D2/D3, com ação antipsicótica em doses altas e efeitos dopaminérgicos diferenciados em doses baixas.", "Antagonista selectivo dopaminérgico D2/D3, con acción antipsicótica en dosis altas y efectos dopaminérgicos diferenciados en dosis bajas."),
          onset: t(lang, "Efeito sedativo/sintomático pode ocorrer em dias; efeito antipsicótico pleno pode levar semanas.", "Efecto sedativo/sintomático puede ocurrir en días; efecto antipsicótico pleno puede tardar semanas."),
          halfLife: t(lang, "Vida média aproximada: 6–9 horas; eliminação principalmente renal.", "Vida media aproximada: 6–9 horas; eliminación principalmente renal."),
          commonAdverseEffects: [
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Hiperprolactinemia", "Hiperprolactinemia"),
            t(lang, "Galactorreia", "Galactorrea"),
            t(lang, "Amenorreia", "Amenorrea"),
            t(lang, "Disfunção sexual", "Disfunción sexual"),
            t(lang, "Sintomas extrapiramidais", "Síntomas extrapiramidales"),
            t(lang, "Ganho de peso", "Aumento de peso")
          ],
          dangerousAdverseEffects: [
            t(lang, "Síndrome neuroléptica maligna", "Síndrome neuroléptico maligno"),
            t(lang, "Prolongamento QT e arritmias", "Prolongación QT y arritmias"),
            t(lang, "Discinesia tardia", "Discinesia tardía"),
            t(lang, "Convulsões em predispostos", "Convulsiones en predispuestos"),
            t(lang, "Acúmulo e toxicidade em insuficiência renal", "Acumulación y toxicidad en insuficiencia renal")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: maior risco de sedação, EPS, quedas, QT e acúmulo se função renal reduzida.", "Adulto mayor: mayor riesgo de sedación, EPS, caídas, QT y acumulación si función renal reducida.") : null,
            gestante ? t(lang, "Gestação: avaliar risco-benefício; monitorar sintomas extrapiramidais/neonatais se uso no fim da gestação.", "Embarazo: evaluar riesgo-beneficio; monitorizar síntomas extrapiramidales/neonatales si uso al final del embarazo.") : null,
            lactante ? t(lang, "Lactação: pode aumentar prolactina e passar ao leite; monitorar lactente.", "Lactancia: puede aumentar prolactina y pasar a la leche; monitorizar lactante.") : null,
            hepatopatia ? t(lang, "Hepatopatia: geralmente menor impacto, mas considerar polifarmácia e sedação.", "Hepatopatía: generalmente menor impacto, pero considerar polifarmacia y sedación.") : null,
            insuficienciaRenal ? t(lang, "Insuficiência renal: ajustar dose obrigatoriamente.", "Insuficiencia renal: ajustar dosis obligatoriamente.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade à sulpirida ou benzamidas", "Hipersensibilidad a sulpirida o benzamidas"),
            t(lang, "Feocromocitoma", "Feocromocitoma"),
            t(lang, "Tumores prolactino-dependentes", "Tumores prolactino-dependientes"),
            t(lang, "Doença de Parkinson grave, salvo indicação especializada", "Enfermedad de Parkinson grave, salvo indicación especializada"),
            t(lang, "QT prolongado significativo ou arritmias graves", "QT prolongado significativo o arritmias graves")
          ],
          interactions: [
            t(lang, "Levodopa e agonistas dopaminérgicos: antagonismo", "Levodopa y agonistas dopaminérgicos: antagonismo"),
            t(lang, "Fármacos que prolongam QT", "Fármacos que prolongan QT"),
            t(lang, "Álcool e depressores do SNC", "Alcohol y depresores del SNC"),
            t(lang, "Anti-hipertensivos: maior hipotensão", "Antihipertensivos: mayor hipotensión"),
            t(lang, "Lítio: possível neurotoxicidade com antipsicóticos", "Litio: posible neurotoxicidad con antipsicóticos")
          ],
          alerts: [
            t(lang, "Ajustar dose pela função renal.", "Ajustar dosis por función renal."),
            t(lang, "Monitorar prolactina se galactorreia, amenorreia, infertilidade ou disfunção sexual.", "Monitorizar prolactina si galactorrea, amenorrea, infertilidad o disfunción sexual."),
            t(lang, "Considerar ECG em pacientes com risco de QT.", "Considerar ECG en pacientes con riesgo de QT."),
            t(lang, "Evitar em tumores prolactino-dependentes.", "Evitar en tumores prolactino-dependientes."),
            t(lang, "Monitorar sintomas extrapiramidais.", "Monitorizar síntomas extrapiramidales.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    risperidona: {
      name: { pt: "Risperidona", es: "Risperidona" },
      category: "antipsicotico",
      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = clcr < 60;
        return {
          name: t(lang, "Risperidona", "Risperidona"),
          class: t(lang, "Antipsicótico atípico", "Antipsicótico atípico"),
          category: "antipsicotico",
          commercialNames: { br: ["Risperdal", "Riss", "Risperidon", "Risperidona EMS"], ar: ["Risperdal", "Risperin", "Risperidona Bagó", "Risperidona Gador"] },
          presentation: [
            t(lang, "Comprimido 1 mg", "Comprimido 1 mg"),
            t(lang, "Comprimido 2 mg", "Comprimido 2 mg"),
            t(lang, "Comprimido 3 mg", "Comprimido 3 mg"),
            t(lang, "Solução oral 1 mg/mL", "Solución oral 1 mg/mL"),
            t(lang, "Injetável de longa ação 25 mg", "Inyectable de larga acción 25 mg"),
            t(lang, "Injetável de longa ação 37,5 mg", "Inyectable de larga acción 37,5 mg"),
            t(lang, "Injetável de longa ação 50 mg", "Inyectable de larga acción 50 mg")
          ],
          dose: {
            adulto: t(lang, "Esquizofrenia: iniciar 1–2 mg/dia VO; usual 2–6 mg/dia.", "Esquizofrenia: iniciar 1–2 mg/día VO; habitual 2–6 mg/día."),
            mania: t(lang, "Mania aguda: 1–2 mg/dia; titular conforme resposta.", "Manía aguda: 1–2 mg/día; titular según respuesta."),
            maxDose: t(lang, "Dose máxima usual: 6 mg/dia; doses maiores aumentam EPS e raramente agregam benefício.", "Dosis máxima habitual: 6 mg/día; dosis mayores aumentan EPS y rara vez agregan beneficio.")
          },
          indications: [
            t(lang, "Esquizofrenia", "Esquizofrenia"),
            t(lang, "Transtorno bipolar — mania aguda", "Trastorno bipolar — manía aguda"),
            t(lang, "Manutenção no transtorno bipolar", "Mantenimiento en trastorno bipolar"),
            t(lang, "Irritabilidade associada ao transtorno do espectro autista", "Irritabilidad asociada al trastorno del espectro autista"),
            t(lang, "Agitação psicótica", "Agitación psicótica"),
            t(lang, "Transtorno esquizoafetivo", "Trastorno esquizoafectivo"),
            t(lang, "Agressividade grave em casos selecionados", "Agresividad grave en casos seleccionados")
          ],
          renalAdjustment: insuficienciaRenal ? t(lang, "Insuficiência renal: iniciar com dose menor e titular lentamente.", "Insuficiencia renal: iniciar con dosis menor y titular lentamente.") : t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia ? t(lang, "Hepatopatia: iniciar com dose menor e titular lentamente.", "Hepatopatía: iniciar con dosis menor y titular lentamente.") : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Antagonista serotoninérgico 5HT2A e dopaminérgico D2; em doses maiores aumenta bloqueio D2 e risco extrapiramidal.", "Antagonista serotoninérgico 5HT2A y dopaminérgico D2; en dosis mayores aumenta bloqueo D2 y riesgo extrapiramidal."),
          onset: t(lang, "Redução de agitação pode ocorrer em dias; efeito antipsicótico pleno geralmente em 2–6 semanas.", "Reducción de agitación puede ocurrir en días; efecto antipsicótico pleno generalmente en 2–6 semanas."),
          halfLife: t(lang, "Vida média aproximada: risperidona 3–20 h; metabólito ativo 9-hidroxirisperidona 20–24 h.", "Vida media aproximada: risperidona 3–20 h; metabolito activo 9-hidroxirisperidona 20–24 h."),
          commonAdverseEffects: [
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Ganho de peso", "Aumento de peso"),
            t(lang, "Hiperprolactinemia", "Hiperprolactinemia"),
            t(lang, "Acatisia", "Acatisia"),
            t(lang, "Parkinsonismo em doses maiores", "Parkinsonismo en dosis mayores"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Disfunção sexual", "Disfunción sexual")
          ],
          dangerousAdverseEffects: [
            t(lang, "Síndrome neuroléptica maligna", "Síndrome neuroléptico maligno"),
            t(lang, "Discinesia tardia", "Discinesia tardía"),
            t(lang, "Prolongamento QT em pacientes predispostos", "Prolongación QT en pacientes predispuestos"),
            t(lang, "Hiperglicemia e dislipidemia", "Hiperglucemia y dislipidemia"),
            t(lang, "Eventos cerebrovasculares em idosos com demência", "Eventos cerebrovasculares en adultos mayores con demencia"),
            t(lang, "Convulsões em predispostos", "Convulsiones en predispuestos")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: maior risco de EPS, hipotensão, quedas, AVC e mortalidade em demência.", "Adulto mayor: mayor riesgo de EPS, hipotensión, caídas, ACV y mortalidad en demencia.") : null,
            gestante ? t(lang, "Gestação: avaliar risco-benefício; monitorar sintomas extrapiramidais/neonatais se uso tardio.", "Embarazo: evaluar riesgo-beneficio; monitorizar síntomas extrapiramidales/neonatales si uso tardío.") : null,
            lactante ? t(lang, "Lactação: monitorar sedação, irritabilidade, alimentação e sintomas extrapiramidais no lactente.", "Lactancia: monitorizar sedación, irritabilidad, alimentación y síntomas extrapiramidales en el lactante.") : null,
            hepatopatia ? t(lang, "Hepatopatia: iniciar baixo e titular lentamente.", "Hepatopatía: iniciar bajo y titular lentamente.") : null,
            insuficienciaRenal ? t(lang, "Insuficiência renal: iniciar baixo e titular lentamente.", "Insuficiencia renal: iniciar bajo y titular lentamente.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade à risperidona ou paliperidona", "Hipersensibilidad a risperidona o paliperidona"),
            t(lang, "Demência com corpos de Lewy ou Parkinson grave, salvo extrema necessidade", "Demencia con cuerpos de Lewy o Parkinson grave, salvo extrema necesidad"),
            t(lang, "Histórico de síndrome neuroléptica maligna relacionada ao fármaco", "Antecedente de síndrome neuroléptico maligno relacionada al fármaco")
          ],
          interactions: [
            t(lang, "Levodopa e agonistas dopaminérgicos: antagonismo", "Levodopa y agonistas dopaminérgicos: antagonismo"),
            t(lang, "Fluoxetina/paroxetina: podem aumentar níveis por CYP2D6", "Fluoxetina/paroxetina: pueden aumentar niveles por CYP2D6"),
            t(lang, "Carbamazepina: pode reduzir níveis", "Carbamazepina: puede reducir niveles"),
            t(lang, "Anti-hipertensivos: maior hipotensão", "Antihipertensivos: mayor hipotensión"),
            t(lang, "Álcool e depressores do SNC", "Alcohol y depresores del SNC"),
            t(lang, "Fármacos que prolongam QT", "Fármacos que prolongan QT")
          ],
          alerts: [
            t(lang, "Monitorar peso, glicemia, lipídios e pressão arterial.", "Monitorizar peso, glucemia, lípidos y presión arterial."),
            t(lang, "Monitorar prolactina se galactorreia, amenorreia, infertilidade ou disfunção sexual.", "Monitorizar prolactina si galactorrea, amenorrea, infertilidad o disfunción sexual."),
            t(lang, "EPS aumentam com doses maiores.", "Los EPS aumentan con dosis mayores."),
            t(lang, "Evitar uso rotineiro em psicose associada à demência.", "Evitar uso rutinario en psicosis asociada a demencia."),
            t(lang, "Considerar ECG se risco cardiovascular ou associação com fármacos que prolongam QT.", "Considerar ECG si hay riesgo cardiovascular o asociación con fármacos que prolongan QT.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Risperidone Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    olanzapina: {
      name: { pt: "Olanzapina", es: "Olanzapina" },
      category: "antipsicotico",
      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        return {
          name: t(lang, "Olanzapina", "Olanzapina"),
          class: t(lang, "Antipsicótico atípico", "Antipsicótico atípico"),
          category: "antipsicotico",
          commercialNames: { br: ["Zyprexa", "Zopix", "Olanzapina EMS", "Olanzapina Eurofarma"], ar: ["Zyprexa", "Midax", "Olanzapina Bagó", "Olanzapina Gador"] },
          presentation: [
            t(lang, "Comprimido 2,5 mg", "Comprimido 2,5 mg"),
            t(lang, "Comprimido 5 mg", "Comprimido 5 mg"),
            t(lang, "Comprimido 10 mg", "Comprimido 10 mg"),
            t(lang, "Comprimido 15 mg", "Comprimido 15 mg"),
            t(lang, "Comprimido 20 mg", "Comprimido 20 mg"),
            t(lang, "Comprimido orodispersível", "Comprimido bucodispersable"),
            t(lang, "Ampola IM 10 mg", "Ampolla IM 10 mg")
          ],
          dose: {
            adulto: t(lang, "Esquizofrenia: iniciar 5–10 mg VO 1x/dia; usual 10–20 mg/dia.", "Esquizofrenia: iniciar 5–10 mg VO 1 vez/día; habitual 10–20 mg/día."),
            mania: t(lang, "Mania aguda: 10–15 mg VO 1x/dia; titular conforme resposta.", "Manía aguda: 10–15 mg VO 1 vez/día; titular según respuesta."),
            agitacao: t(lang, "Agitação aguda: 5–10 mg IM conforme protocolo, com monitorização.", "Agitación aguda: 5–10 mg IM según protocolo, con monitorización."),
            maxDose: t(lang, "Dose máxima usual: 20 mg/dia.", "Dosis máxima habitual: 20 mg/día.")
          },
          indications: [
            t(lang, "Esquizofrenia", "Esquizofrenia"),
            t(lang, "Transtorno bipolar — mania aguda", "Trastorno bipolar — manía aguda"),
            t(lang, "Manutenção no transtorno bipolar", "Mantenimiento en trastorno bipolar"),
            t(lang, "Depressão bipolar em combinação com fluoxetina em alguns protocolos", "Depresión bipolar en combinación con fluoxetina en algunos protocolos"),
            t(lang, "Agitação psicótica aguda", "Agitación psicótica aguda"),
            t(lang, "Transtorno esquizoafetivo", "Trastorno esquizoafectivo"),
            t(lang, "Náuseas/vômitos refratários em oncologia ou cuidados paliativos off-label", "Náuseas/vómitos refractarios en oncología o cuidados paliativos off-label")
          ],
          renalAdjustment: t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia ? t(lang, "Hepatopatia: iniciar com dose menor e monitorar transaminases/sedação.", "Hepatopatía: iniciar con dosis menor y monitorizar transaminasas/sedación.") : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Antagonista 5HT2A e D2, com bloqueio H1, muscarínico e alfa-1; alta eficácia, porém elevado risco metabólico.", "Antagonista 5HT2A y D2, con bloqueo H1, muscarínico y alfa-1; alta eficacia, pero elevado riesgo metabólico."),
          onset: t(lang, "Sedação e redução de agitação podem ocorrer em horas; efeito antipsicótico pleno geralmente em 2–6 semanas.", "Sedación y reducción de agitación pueden ocurrir en horas; efecto antipsicótico pleno generalmente en 2–6 semanas."),
          halfLife: t(lang, "Vida média aproximada: 21–54 horas.", "Vida media aproximada: 21–54 horas."),
          commonAdverseEffects: [
            t(lang, "Ganho de peso importante", "Aumento de peso importante"),
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Aumento do apetite", "Aumento del apetito"),
            t(lang, "Boca seca", "Boca seca"),
            t(lang, "Constipação", "Estreñimiento"),
            t(lang, "Dislipidemia", "Dislipidemia"),
            t(lang, "Hiperglicemia", "Hiperglucemia")
          ],
          dangerousAdverseEffects: [
            t(lang, "Síndrome metabólica", "Síndrome metabólico"),
            t(lang, "Diabetes mellitus ou descompensação glicêmica", "Diabetes mellitus o descompensación glucémica"),
            t(lang, "Síndrome neuroléptica maligna", "Síndrome neuroléptico maligno"),
            t(lang, "Discinesia tardia", "Discinesia tardía"),
            t(lang, "Convulsões em predispostos", "Convulsiones en predispuestos"),
            t(lang, "Hipotensão/sedação intensa se associada a benzodiazepínicos IM", "Hipotensión/sedación intensa si se asocia a benzodiacepinas IM")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: maior risco de sedação, quedas, eventos cerebrovasculares e mortalidade em demência.", "Adulto mayor: mayor riesgo de sedación, caídas, eventos cerebrovasculares y mortalidad en demencia.") : null,
            gestante ? t(lang, "Gestação: avaliar risco-benefício; monitorar ganho ponderal e glicemia.", "Embarazo: evaluar riesgo-beneficio; monitorizar aumento ponderal y glucemia.") : null,
            lactante ? t(lang, "Lactação: monitorar sonolência, irritabilidade e alimentação do lactente.", "Lactancia: monitorizar somnolencia, irritabilidad y alimentación del lactante.") : null,
            hepatopatia ? t(lang, "Hepatopatia: monitorar enzimas hepáticas e sedação.", "Hepatopatía: monitorizar enzimas hepáticas y sedación.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade à olanzapina", "Hipersensibilidad a olanzapina"),
            t(lang, "Uso IM concomitante ou muito próximo de benzodiazepínico parenteral", "Uso IM concomitante o muy cercano a benzodiacepina parenteral"),
            t(lang, "Demência com corpos de Lewy ou Parkinson grave, salvo extrema necessidade", "Demencia con cuerpos de Lewy o Parkinson grave, salvo extrema necesidad")
          ],
          interactions: [
            t(lang, "Álcool e depressores do SNC: maior sedação", "Alcohol y depresores del SNC: mayor sedación"),
            t(lang, "Benzodiazepínicos IM: risco de hipotensão e depressão respiratória", "Benzodiacepinas IM: riesgo de hipotensión y depresión respiratoria"),
            t(lang, "Tabagismo: pode reduzir níveis por indução CYP1A2", "Tabaquismo: puede reducir niveles por inducción CYP1A2"),
            t(lang, "Fluvoxamina/ciprofloxacino: podem aumentar níveis por CYP1A2", "Fluvoxamina/ciprofloxacino: pueden aumentar niveles por CYP1A2"),
            t(lang, "Levodopa e agonistas dopaminérgicos: antagonismo", "Levodopa y agonistas dopaminérgicos: antagonismo")
          ],
          alerts: [
            t(lang, "Alto risco de ganho de peso e síndrome metabólica.", "Alto riesgo de aumento de peso y síndrome metabólico."),
            t(lang, "Monitorar peso, cintura, glicemia/HbA1c, lipídios e pressão arterial.", "Monitorizar peso, cintura, glucemia/HbA1c, lípidos y presión arterial."),
            t(lang, "Evitar associação IM com benzodiazepínico parenteral.", "Evitar asociación IM con benzodiacepina parenteral."),
            t(lang, "Cuidado em diabéticos ou pacientes com obesidade/dislipidemia.", "Cuidado en diabéticos o pacientes con obesidad/dislipidemia."),
            t(lang, "Ajustar expectativa: sedação é comum no início.", "Ajustar expectativa: la sedación es común al inicio.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Olanzapine Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    quetiapina: {
      name: { pt: "Quetiapina", es: "Quetiapina" },
      category: "antipsicotico",
      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        return {
          name: t(lang, "Quetiapina", "Quetiapina"),
          class: t(lang, "Antipsicótico atípico", "Antipsicótico atípico"),
          category: "antipsicotico",
          commercialNames: { br: ["Seroquel", "Quetros", "Quetipin", "Quetiapina EMS"], ar: ["Seroquel", "Quetiapina Bagó", "Quetiapina Gador", "Quetiapina Richmond"] },
          presentation: [
            t(lang, "Comprimido 25 mg", "Comprimido 25 mg"),
            t(lang, "Comprimido 100 mg", "Comprimido 100 mg"),
            t(lang, "Comprimido 200 mg", "Comprimido 200 mg"),
            t(lang, "Comprimido 300 mg", "Comprimido 300 mg"),
            t(lang, "Comprimido XR 50 mg", "Comprimido XR 50 mg"),
            t(lang, "Comprimido XR 200 mg", "Comprimido XR 200 mg"),
            t(lang, "Comprimido XR 300 mg", "Comprimido XR 300 mg")
          ],
          dose: {
            adulto: t(lang, "Esquizofrenia: titular gradualmente até 300–800 mg/dia.", "Esquizofrenia: titular gradualmente hasta 300–800 mg/día."),
            bipolar: t(lang, "Depressão bipolar: geralmente 300 mg VO à noite após titulação.", "Depresión bipolar: generalmente 300 mg VO por la noche tras titulación."),
            insoniaOffLabel: t(lang, "Insônia off-label: doses baixas são usadas, mas não é primeira escolha pelo risco metabólico e sedativo.", "Insomnio off-label: se usan dosis bajas, pero no es primera elección por riesgo metabólico y sedativo."),
            maxDose: t(lang, "Dose máxima usual: 800 mg/dia.", "Dosis máxima habitual: 800 mg/día.")
          },
          indications: [
            t(lang, "Esquizofrenia", "Esquizofrenia"),
            t(lang, "Transtorno bipolar — mania aguda", "Trastorno bipolar — manía aguda"),
            t(lang, "Transtorno bipolar — depressão bipolar", "Trastorno bipolar — depresión bipolar"),
            t(lang, "Manutenção no transtorno bipolar", "Mantenimiento en trastorno bipolar"),
            t(lang, "Adjuvante no transtorno depressivo maior", "Coadyuvante en trastorno depresivo mayor"),
            t(lang, "Insônia em contexto psiquiátrico selecionado off-label", "Insomnio en contexto psiquiátrico seleccionado off-label"),
            t(lang, "Agitação psicótica com necessidade de perfil menos extrapiramidal", "Agitación psicótica con necesidad de perfil menos extrapiramidal")
          ],
          renalAdjustment: t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia ? t(lang, "Hepatopatia: iniciar com 25 mg/dia e titular lentamente.", "Hepatopatía: iniciar con 25 mg/día y titular lentamente.") : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Antagonista 5HT2A e D2, com forte bloqueio H1 e alfa-1; metabólito norquetiapina contribui para efeito antidepressivo.", "Antagonista 5HT2A y D2, con fuerte bloqueo H1 y alfa-1; metabolito norquetiapina contribuye al efecto antidepresivo."),
          onset: t(lang, "Sedação pode ocorrer no primeiro dia; efeito antipsicótico/estabilizador geralmente em 1–6 semanas conforme indicação.", "Sedación puede ocurrir el primer día; efecto antipsicótico/estabilizador generalmente en 1–6 semanas según indicación."),
          halfLife: t(lang, "Vida média aproximada: quetiapina 6 horas; norquetiapina cerca de 12 horas.", "Vida media aproximada: quetiapina 6 horas; norquetiapina cerca de 12 horas."),
          commonAdverseEffects: [
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Boca seca", "Boca seca"),
            t(lang, "Hipotensão ortostática", "Hipotensión ortostática"),
            t(lang, "Ganho de peso", "Aumento de peso"),
            t(lang, "Constipação", "Estreñimiento"),
            t(lang, "Dislipidemia", "Dislipidemia")
          ],
          dangerousAdverseEffects: [
            t(lang, "Síndrome neuroléptica maligna", "Síndrome neuroléptico maligno"),
            t(lang, "Hiperglicemia e síndrome metabólica", "Hiperglucemia y síndrome metabólico"),
            t(lang, "Prolongamento QT em predispostos", "Prolongación QT en predispuestos"),
            t(lang, "Quedas por hipotensão/sedação", "Caídas por hipotensión/sedación"),
            t(lang, "Discinesia tardia", "Discinesia tardía"),
            t(lang, "Neutropenia rara", "Neutropenia rara")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: maior risco de sedação, hipotensão, quedas, delirium e mortalidade em demência.", "Adulto mayor: mayor riesgo de sedación, hipotensión, caídas, delirium y mortalidad en demencia.") : null,
            gestante ? t(lang, "Gestação: avaliar risco-benefício; monitorar peso e glicemia.", "Embarazo: evaluar riesgo-beneficio; monitorizar peso y glucemia.") : null,
            lactante ? t(lang, "Lactação: monitorar sedação e alimentação do lactente.", "Lactancia: monitorizar sedación y alimentación del lactante.") : null,
            hepatopatia ? t(lang, "Hepatopatia: iniciar com dose baixa e titular lentamente.", "Hepatopatía: iniciar con dosis baja y titular lentamente.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade à quetiapina", "Hipersensibilidad a quetiapina"),
            t(lang, "Uso com inibidores fortes de CYP3A4 sem ajuste/avaliação", "Uso con inhibidores fuertes de CYP3A4 sin ajuste/evaluación"),
            t(lang, "Demência com corpos de Lewy ou Parkinson grave, salvo extrema necessidade", "Demencia con cuerpos de Lewy o Parkinson grave, salvo extrema necesidad")
          ],
          interactions: [
            t(lang, "Inibidores fortes de CYP3A4 como cetoconazol, claritromicina e ritonavir: aumentam níveis", "Inhibidores fuertes de CYP3A4 como ketoconazol, claritromicina y ritonavir: aumentan niveles"),
            t(lang, "Indutores CYP3A4 como carbamazepina, fenitoína e rifampicina: reduzem níveis", "Inductores CYP3A4 como carbamazepina, fenitoína y rifampicina: reducen niveles"),
            t(lang, "Álcool e depressores do SNC: maior sedação", "Alcohol y depresores del SNC: mayor sedación"),
            t(lang, "Anti-hipertensivos: maior hipotensão", "Antihipertensivos: mayor hipotensión"),
            t(lang, "Fármacos que prolongam QT", "Fármacos que prolongan QT"),
            t(lang, "Levodopa e agonistas dopaminérgicos: antagonismo", "Levodopa y agonistas dopaminérgicos: antagonismo")
          ],
          alerts: [
            t(lang, "Risco importante de sedação e hipotensão ortostática no início.", "Riesgo importante de sedación e hipotensión ortostática al inicio."),
            t(lang, "Monitorar peso, glicemia/HbA1c, lipídios e pressão arterial.", "Monitorizar peso, glucemia/HbA1c, lípidos y presión arterial."),
            t(lang, "Não usar apenas como hipnótico de rotina sem avaliar risco-benefício.", "No usar solo como hipnótico de rutina sin evaluar riesgo-beneficio."),
            t(lang, "Titular lentamente, especialmente em idosos e hepatopatas.", "Titular lentamente, especialmente en adultos mayores y hepatópatas."),
            t(lang, "Cuidado com interações por CYP3A4.", "Cuidado con interacciones por CYP3A4.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Quetiapine Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    clozapina: {
      name: { pt: "Clozapina", es: "Clozapina" },
      category: "antipsicotico",
      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        return {
          name: t(lang, "Clozapina", "Clozapina"),
          class: t(lang, "Antipsicótico atípico", "Antipsicótico atípico"),
          category: "antipsicotico",
          commercialNames: { br: ["Leponex", "Clozapina Cristália", "Clozapina EMS"], ar: ["Leponex", "Clozapina Fabra", "Clozapina Gador"] },
          presentation: [
            t(lang, "Comprimido 25 mg", "Comprimido 25 mg"),
            t(lang, "Comprimido 100 mg", "Comprimido 100 mg")
          ],
          dose: {
            adulto: t(lang, "Iniciar 12,5 mg VO 1–2x/dia; titular lentamente conforme tolerabilidade.", "Iniciar 12,5 mg VO 1–2 veces/día; titular lentamente según tolerabilidad."),
            manutencao: t(lang, "Dose usual: 300–450 mg/dia, podendo variar conforme resposta clínica e nível sérico.", "Dosis habitual: 300–450 mg/día, pudiendo variar según respuesta clínica y nivel sérico."),
            maxDose: t(lang, "Dose máxima usual: 900 mg/dia sob supervisão especializada.", "Dosis máxima habitual: 900 mg/día bajo supervisión especializada.")
          },
          indications: [
            t(lang, "Esquizofrenia resistente ao tratamento", "Esquizofrenia resistente al tratamiento"),
            t(lang, "Redução do risco suicida em esquizofrenia ou transtorno esquizoafetivo", "Reducción del riesgo suicida en esquizofrenia o trastorno esquizoafectivo"),
            t(lang, "Psicose com agressividade persistente", "Psicosis con agresividad persistente"),
            t(lang, "Psicose em doença de Parkinson em casos selecionados", "Psicosis en enfermedad de Parkinson en casos seleccionados"),
            t(lang, "Transtorno esquizoafetivo resistente", "Trastorno esquizoafectivo resistente"),
            t(lang, "Falha terapêutica com múltiplos antipsicóticos", "Falla terapéutica con múltiples antipsicóticos"),
            t(lang, "Discinesia tardia grave com necessidade de troca antipsicótica", "Discinesia tardía grave con necesidad de cambio antipsicótico")
          ],
          renalAdjustment: t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia ? t(lang, "Hepatopatia: iniciar com cautela e monitorar enzimas hepáticas.", "Hepatopatía: iniciar con cautela y monitorizar enzimas hepáticas.") : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Antagonista D4, 5HT2A, D2 fraco, H1, muscarínico e alfa-1; alta eficácia em esquizofrenia resistente com baixo risco extrapiramidal.", "Antagonista D4, 5HT2A, D2 débil, H1, muscarínico y alfa-1; alta eficacia en esquizofrenia resistente con bajo riesgo extrapiramidal."),
          onset: t(lang, "Resposta pode levar semanas a meses; titular lentamente por risco de hipotensão, sedação e convulsões.", "La respuesta puede tardar semanas a meses; titular lentamente por riesgo de hipotensión, sedación y convulsiones."),
          halfLife: t(lang, "Vida média aproximada: 12 horas.", "Vida media aproximada: 12 horas."),
          commonAdverseEffects: [
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Sialorreia", "Sialorrea"),
            t(lang, "Ganho de peso", "Aumento de peso"),
            t(lang, "Constipação", "Estreñimiento"),
            t(lang, "Taquicardia", "Taquicardia"),
            t(lang, "Hipotensão ortostática", "Hipotensión ortostática"),
            t(lang, "Sedação", "Sedación")
          ],
          dangerousAdverseEffects: [
            t(lang, "Agranulocitose/neutropenia grave", "Agranulocitosis/neutropenia grave"),
            t(lang, "Miocardite", "Miocarditis"),
            t(lang, "Cardiomiopatia", "Miocardiopatía"),
            t(lang, "Convulsões dose-dependentes", "Convulsiones dosis-dependientes"),
            t(lang, "Íleo paralítico/constipação grave", "Íleo paralítico/estreñimiento grave"),
            t(lang, "Síndrome metabólica grave", "Síndrome metabólico grave"),
            t(lang, "Síndrome neuroléptica maligna", "Síndrome neuroléptico maligno")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: maior risco de sedação, hipotensão, constipação grave, quedas e mortalidade em demência.", "Adulto mayor: mayor riesgo de sedación, hipotensión, estreñimiento grave, caídas y mortalidad en demencia.") : null,
            gestante ? t(lang, "Gestação: avaliar risco-benefício; monitorar glicemia e recém-nascido se uso tardio.", "Embarazo: evaluar riesgo-beneficio; monitorizar glucemia y recién nacido si uso tardío.") : null,
            lactante ? t(lang, "Lactação: geralmente evitar pelo risco de sedação e agranulocitose no lactente.", "Lactancia: generalmente evitar por riesgo de sedación y agranulocitosis en el lactante.") : null,
            hepatopatia ? t(lang, "Hepatopatia: monitorar enzimas hepáticas e sinais de toxicidade.", "Hepatopatía: monitorizar enzimas hepáticas y signos de toxicidad.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "História de agranulocitose induzida por clozapina", "Antecedente de agranulocitosis inducida por clozapina"),
            t(lang, "Neutropenia grave", "Neutropenia grave"),
            t(lang, "Miocardite ou cardiomiopatia associada à clozapina", "Miocarditis o miocardiopatía asociada a clozapina"),
            t(lang, "Epilepsia não controlada", "Epilepsia no controlada"),
            t(lang, "Íleo paralítico", "Íleo paralítico"),
            t(lang, "Depressão grave do SNC ou coma", "Depresión grave del SNC o coma")
          ],
          interactions: [
            t(lang, "Tabagismo: reduz níveis por indução CYP1A2", "Tabaquismo: reduce niveles por inducción CYP1A2"),
            t(lang, "Fluvoxamina/ciprofloxacino: aumentam níveis por CYP1A2", "Fluvoxamina/ciprofloxacino: aumentan niveles por CYP1A2"),
            t(lang, "Carbamazepina: evitar por risco hematológico", "Carbamazepina: evitar por riesgo hematológico"),
            t(lang, "Benzodiazepínicos e álcool: maior sedação/depressão respiratória", "Benzodiacepinas y alcohol: mayor sedación/depresión respiratoria"),
            t(lang, "Anticolinérgicos: maior risco de constipação grave/íleo", "Anticolinérgicos: mayor riesgo de estreñimiento grave/íleo")
          ],
          alerts: [
            t(lang, "Exige hemograma seriado obrigatório.", "Requiere hemograma seriado obligatorio."),
            t(lang, "Monitorar sinais de infecção, febre, dor torácica, dispneia e constipação.", "Monitorizar signos de infección, fiebre, dolor torácico, disnea y estreñimiento."),
            t(lang, "Monitorar peso, glicemia, lipídios e pressão arterial.", "Monitorizar peso, glucemia, lípidos y presión arterial."),
            t(lang, "Mudança no tabagismo pode alterar níveis séricos.", "Cambios en tabaquismo pueden alterar niveles séricos."),
            t(lang, "Constipação com clozapina pode ser grave e fatal.", "El estreñimiento con clozapina puede ser grave y fatal.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Clozapine Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    aripiprazol: {
      name: { pt: "Aripiprazol", es: "Aripiprazol" },
      category: "antipsicotico",
      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        return {
          name: t(lang, "Aripiprazol", "Aripiprazol"),
          class: t(lang, "Antipsicótico atípico agonista parcial dopaminérgico", "Antipsicótico atípico agonista parcial dopaminérgico"),
          category: "antipsicotico",
          commercialNames: { br: ["Abilify", "Aristab", "Aripiprazol EMS"], ar: ["Abilify", "Aripiprazol Bagó", "Aripiprazol Gador"] },
          presentation: [
            t(lang, "Comprimido 5 mg", "Comprimido 5 mg"),
            t(lang, "Comprimido 10 mg", "Comprimido 10 mg"),
            t(lang, "Comprimido 15 mg", "Comprimido 15 mg"),
            t(lang, "Comprimido 20 mg", "Comprimido 20 mg"),
            t(lang, "Comprimido 30 mg", "Comprimido 30 mg"),
            t(lang, "Solução oral 1 mg/mL", "Solución oral 1 mg/mL"),
            t(lang, "Injetável de longa ação", "Inyectable de larga acción")
          ],
          dose: {
            adulto: t(lang, "Esquizofrenia: iniciar 10–15 mg VO 1x/dia; usual 10–30 mg/dia.", "Esquizofrenia: iniciar 10–15 mg VO 1 vez/día; habitual 10–30 mg/día."),
            mania: t(lang, "Mania aguda: 15 mg VO 1x/dia; titular conforme resposta.", "Manía aguda: 15 mg VO 1 vez/día; titular según respuesta."),
            depressaoAdjuvante: t(lang, "Adjuvante na depressão: iniciar 2–5 mg/dia; usual 2–15 mg/dia.", "Coadyuvante en depresión: iniciar 2–5 mg/día; habitual 2–15 mg/día."),
            maxDose: t(lang, "Dose máxima usual: 30 mg/dia.", "Dosis máxima habitual: 30 mg/día.")
          },
          indications: [
            t(lang, "Esquizofrenia", "Esquizofrenia"),
            t(lang, "Transtorno bipolar — mania aguda", "Trastorno bipolar — manía aguda"),
            t(lang, "Manutenção no transtorno bipolar", "Mantenimiento en trastorno bipolar"),
            t(lang, "Adjuvante no transtorno depressivo maior", "Coadyuvante en trastorno depresivo mayor"),
            t(lang, "Irritabilidade associada ao transtorno do espectro autista", "Irritabilidad asociada al trastorno del espectro autista"),
            t(lang, "Síndrome de Tourette", "Síndrome de Tourette"),
            t(lang, "Hiperprolactinemia induzida por antipsicótico em casos selecionados", "Hiperprolactinemia inducida por antipsicótico en casos seleccionados")
          ],
          renalAdjustment: t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia ? t(lang, "Geralmente sem ajuste, mas titular com cautela em hepatopatia grave.", "Generalmente sin ajuste, pero titular con cautela en hepatopatía grave.") : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Agonista parcial D2 e 5HT1A, antagonista 5HT2A; estabiliza a neurotransmissão dopaminérgica com menor risco de prolactina elevada.", "Agonista parcial D2 y 5HT1A, antagonista 5HT2A; estabiliza la neurotransmisión dopaminérgica con menor riesgo de prolactina elevada."),
          onset: t(lang, "Efeito em agitação/mania pode surgir em dias; efeito antipsicótico pleno em 2–6 semanas.", "Efecto en agitación/manía puede aparecer en días; efecto antipsicótico pleno en 2–6 semanas."),
          halfLife: t(lang, "Vida média aproximada: 75 horas; metabólito ativo cerca de 94 horas.", "Vida media aproximada: 75 horas; metabolito activo cerca de 94 horas."),
          commonAdverseEffects: [
            t(lang, "Acatisia", "Acatisia"),
            t(lang, "Insônia", "Insomnio"),
            t(lang, "Náuseas", "Náuseas"),
            t(lang, "Cefaleia", "Cefalea"),
            t(lang, "Ansiedade ou ativação", "Ansiedad o activación"),
            t(lang, "Tontura", "Mareos")
          ],
          dangerousAdverseEffects: [
            t(lang, "Síndrome neuroléptica maligna", "Síndrome neuroléptico maligno"),
            t(lang, "Discinesia tardia", "Discinesia tardía"),
            t(lang, "Impulsividade/jogo patológico/hipersexualidade em casos raros", "Impulsividad/juego patológico/hipersexualidad en casos raros"),
            t(lang, "Hiperglicemia e dislipidemia, geralmente menor que olanzapina", "Hiperglucemia y dislipidemia, generalmente menor que olanzapina"),
            t(lang, "Convulsões em predispostos", "Convulsiones en predispuestos")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: risco de quedas, acatisia, eventos cerebrovasculares e mortalidade em demência.", "Adulto mayor: riesgo de caídas, acatisia, eventos cerebrovasculares y mortalidad en demencia.") : null,
            gestante ? t(lang, "Gestação: avaliar risco-benefício; monitorar sintomas neonatais se uso tardio.", "Embarazo: evaluar riesgo-beneficio; monitorizar síntomas neonatales si uso tardío.") : null,
            lactante ? t(lang, "Lactação: pode reduzir prolactina e produção de leite; monitorar lactente.", "Lactancia: puede reducir prolactina y producción de leche; monitorizar lactante.") : null,
            hepatopatia ? t(lang, "Hepatopatia: titular com cautela se grave.", "Hepatopatía: titular con cautela si es grave.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade ao aripiprazol", "Hipersensibilidad al aripiprazol"),
            t(lang, "Demência com psicose sem avaliação especializada", "Demencia con psicosis sin evaluación especializada")
          ],
          interactions: [
            t(lang, "Inibidores fortes de CYP2D6 como fluoxetina/paroxetina: aumentam níveis", "Inhibidores fuertes de CYP2D6 como fluoxetina/paroxetina: aumentan niveles"),
            t(lang, "Inibidores fortes de CYP3A4 como cetoconazol/claritromicina: aumentam níveis", "Inhibidores fuertes de CYP3A4 como ketoconazol/claritromicina: aumentan niveles"),
            t(lang, "Carbamazepina e rifampicina: reduzem níveis", "Carbamazepina y rifampicina: reducen niveles"),
            t(lang, "Anti-hipertensivos: risco de hipotensão", "Antihipertensivos: riesgo de hipotensión"),
            t(lang, "Álcool e depressores do SNC", "Alcohol y depresores del SNC")
          ],
          alerts: [
            t(lang, "Monitorar acatisia, especialmente no início.", "Monitorizar acatisia, especialmente al inicio."),
            t(lang, "Menor risco de ganho de peso e hiperprolactinemia que vários antipsicóticos, mas ainda monitorar metabolismo.", "Menor riesgo de aumento de peso e hiperprolactinemia que varios antipsicóticos, pero aun así monitorizar metabolismo."),
            t(lang, "Perguntar sobre impulsividade, jogo, compras compulsivas ou hipersexualidade.", "Preguntar sobre impulsividad, juego, compras compulsivas o hipersexualidad."),
            t(lang, "Ajustar dose em interações fortes por CYP2D6/CYP3A4.", "Ajustar dosis en interacciones fuertes por CYP2D6/CYP3A4."),
            t(lang, "Pode piorar insônia/ansiedade em alguns pacientes.", "Puede empeorar insomnio/ansiedad en algunos pacientes.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Aripiprazole Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    ziprasidona: {
      name: { pt: "Ziprasidona", es: "Ziprasidona" },
      category: "antipsicotico",
      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        return {
          name: t(lang, "Ziprasidona", "Ziprasidona"),
          class: t(lang, "Antipsicótico atípico", "Antipsicótico atípico"),
          category: "antipsicotico",
          commercialNames: { br: ["Geodon", "Ziprasidona"], ar: ["Geodon", "Zeldox", "Ziprasidona"] },
          presentation: [
            t(lang, "Cápsula 20 mg", "Cápsula 20 mg"),
            t(lang, "Cápsula 40 mg", "Cápsula 40 mg"),
            t(lang, "Cápsula 60 mg", "Cápsula 60 mg"),
            t(lang, "Cápsula 80 mg", "Cápsula 80 mg"),
            t(lang, "Ampola IM 20 mg", "Ampolla IM 20 mg")
          ],
          dose: {
            adulto: t(lang, "Esquizofrenia: iniciar 20 mg VO 12/12h com alimentos; usual 40–80 mg 12/12h.", "Esquizofrenia: iniciar 20 mg VO cada 12 h con alimentos; habitual 40–80 mg cada 12 h."),
            mania: t(lang, "Mania aguda: iniciar 40 mg VO 12/12h; titular conforme resposta.", "Manía aguda: iniciar 40 mg VO cada 12 h; titular según respuesta."),
            agitacao: t(lang, "Agitação aguda: 10–20 mg IM conforme protocolo, com monitorização.", "Agitación aguda: 10–20 mg IM según protocolo, con monitorización."),
            maxDose: t(lang, "Dose máxima usual VO: 160 mg/dia.", "Dosis máxima habitual VO: 160 mg/día.")
          },
          indications: [
            t(lang, "Esquizofrenia", "Esquizofrenia"),
            t(lang, "Transtorno bipolar — mania aguda", "Trastorno bipolar — manía aguda"),
            t(lang, "Manutenção no transtorno bipolar como adjuvante em casos selecionados", "Mantenimiento en trastorno bipolar como coadyuvante en casos seleccionados"),
            t(lang, "Agitação psicótica aguda via IM", "Agitación psicótica aguda vía IM"),
            t(lang, "Psicose com preocupação metabólica", "Psicosis con preocupación metabólica"),
            t(lang, "Transtorno esquizoafetivo em casos selecionados", "Trastorno esquizoafectivo en casos seleccionados")
          ],
          renalAdjustment: t(lang, "Sem ajuste renal habitual para via oral; cautela com formulação IM em insuficiência renal importante.", "Sin ajuste renal habitual para vía oral; cautela con formulación IM en insuficiencia renal importante."),
          hepaticAdjustment: hepatopatia ? t(lang, "Hepatopatia: usar com cautela e titular lentamente.", "Hepatopatía: usar con cautela y titular lentamente.") : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Antagonista 5HT2A e D2; também inibe recaptação de serotonina/noradrenalina em menor grau; menor impacto metabólico, mas maior atenção ao QT.", "Antagonista 5HT2A y D2; también inhibe recaptación de serotonina/noradrenalina en menor grado; menor impacto metabólico, pero mayor atención al QT."),
          onset: t(lang, "IM pode reduzir agitação em minutos a horas; efeito antipsicótico pleno em 2–6 semanas.", "IM puede reducir agitación en minutos a horas; efecto antipsicótico pleno en 2–6 semanas."),
          halfLife: t(lang, "Vida média aproximada: 7 horas.", "Vida media aproximada: 7 horas."),
          commonAdverseEffects: [
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Náuseas", "Náuseas"),
            t(lang, "Acatisia", "Acatisia"),
            t(lang, "Cefaleia", "Cefalea"),
            t(lang, "Dispepsia", "Dispepsia")
          ],
          dangerousAdverseEffects: [
            t(lang, "Prolongamento QT", "Prolongación QT"),
            t(lang, "Torsades de pointes em predispostos", "Torsades de pointes en predispuestos"),
            t(lang, "Síndrome neuroléptica maligna", "Síndrome neuroléptico maligno"),
            t(lang, "Discinesia tardia", "Discinesia tardía"),
            t(lang, "Reação cutânea grave rara", "Reacción cutánea grave rara"),
            t(lang, "Convulsões em predispostos", "Convulsiones en predispuestos")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: maior risco de QT, quedas, hipotensão e mortalidade em demência.", "Adulto mayor: mayor riesgo de QT, caídas, hipotensión y mortalidad en demencia.") : null,
            gestante ? t(lang, "Gestação: avaliar risco-benefício; monitorar recém-nascido se uso tardio.", "Embarazo: evaluar riesgo-beneficio; monitorizar recién nacido si uso tardío.") : null,
            lactante ? t(lang, "Lactação: dados limitados; monitorar sedação e alimentação do lactente.", "Lactancia: datos limitados; monitorizar sedación y alimentación del lactante.") : null,
            hepatopatia ? t(lang, "Hepatopatia: titular com cautela.", "Hepatopatía: titular con cautela.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "QT longo congênito ou QT prolongado significativo", "QT largo congénito o QT prolongado significativo"),
            t(lang, "Infarto agudo recente", "Infarto agudo reciente"),
            t(lang, "Insuficiência cardíaca descompensada", "Insuficiencia cardíaca descompensada"),
            t(lang, "Arritmias ventriculares graves", "Arritmias ventriculares graves"),
            t(lang, "Uso concomitante com fármacos que prolongam QT", "Uso concomitante con fármacos que prolongan QT"),
            t(lang, "Hipersensibilidade à ziprasidona", "Hipersensibilidad a ziprasidona")
          ],
          interactions: [
            t(lang, "Antiarrítmicos IA/III: risco de QT", "Antiarrítmicos IA/III: riesgo de QT"),
            t(lang, "Macrolídeos, quinolonas e outros fármacos que prolongam QT", "Macrólidos, quinolonas y otros fármacos que prolongan QT"),
            t(lang, "Carbamazepina: pode reduzir níveis", "Carbamazepina: puede reducir niveles"),
            t(lang, "Cetoconazol: pode aumentar níveis", "Ketoconazol: puede aumentar niveles"),
            t(lang, "Álcool e depressores do SNC", "Alcohol y depresores del SNC"),
            t(lang, "Levodopa e agonistas dopaminérgicos: antagonismo", "Levodopa y agonistas dopaminérgicos: antagonismo")
          ],
          alerts: [
            t(lang, "Deve ser administrada com alimento para absorção adequada.", "Debe administrarse con comida para absorción adecuada."),
            t(lang, "Avaliar risco de QT antes de iniciar.", "Evaluar riesgo de QT antes de iniciar."),
            t(lang, "Considerar ECG basal em pacientes de risco.", "Considerar ECG basal en pacientes de riesgo."),
            t(lang, "Corrigir hipocalemia e hipomagnesemia.", "Corregir hipopotasemia e hipomagnesemia."),
            t(lang, "Menor risco metabólico que olanzapina, mas não isenta de monitorização.", "Menor riesgo metabólico que olanzapina, pero no exenta de monitorización.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Ziprasidone Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    paliperidona: {
      name: { pt: "Paliperidona", es: "Paliperidona" },
      category: "antipsicotico",
      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const insuficienciaRenal = clcr < 60;
        return {
          name: t(lang, "Paliperidona", "Paliperidona"),
          class: t(lang, "Antipsicótico atípico", "Antipsicótico atípico"),
          category: "antipsicotico",
          commercialNames: { br: ["Invega", "Invega Sustenna", "Invega Trinza", "Paliperidona"], ar: ["Invega", "Xeplion", "Trevicta", "Paliperidona"] },
          presentation: [
            t(lang, "Comprimido de liberação prolongada 3 mg", "Comprimido de liberación prolongada 3 mg"),
            t(lang, "Comprimido de liberação prolongada 6 mg", "Comprimido de liberación prolongada 6 mg"),
            t(lang, "Comprimido de liberação prolongada 9 mg", "Comprimido de liberación prolongada 9 mg"),
            t(lang, "Comprimido de liberação prolongada 12 mg", "Comprimido de liberación prolongada 12 mg"),
            t(lang, "Injetável mensal de longa ação", "Inyectable mensual de larga acción"),
            t(lang, "Injetável trimestral de longa ação", "Inyectable trimestral de larga acción")
          ],
          dose: {
            adulto: t(lang, "Esquizofrenia: iniciar 6 mg VO 1x/dia pela manhã; usual 3–12 mg/dia.", "Esquizofrenia: iniciar 6 mg VO 1 vez/día por la mañana; habitual 3–12 mg/día."),
            esquizoafetivo: t(lang, "Transtorno esquizoafetivo: 3–12 mg/dia conforme resposta e tolerabilidade.", "Trastorno esquizoafectivo: 3–12 mg/día según respuesta y tolerabilidad."),
            maxDose: t(lang, "Dose máxima VO usual: 12 mg/dia.", "Dosis máxima VO habitual: 12 mg/día.")
          },
          indications: [
            t(lang, "Esquizofrenia", "Esquizofrenia"),
            t(lang, "Transtorno esquizoafetivo", "Trastorno esquizoafectivo"),
            t(lang, "Manutenção antipsicótica com formulação LAI", "Mantenimiento antipsicótico con formulación LAI"),
            t(lang, "Prevenção de recaídas psicóticas", "Prevención de recaídas psicóticas"),
            t(lang, "Baixa adesão ao tratamento oral", "Baja adherencia al tratamiento oral"),
            t(lang, "Psicose crônica com necessidade de estabilidade plasmática", "Psicosis crónica con necesidad de estabilidad plasmática")
          ],
          renalAdjustment: insuficienciaRenal ? t(lang, "Necessita ajuste renal conforme ClCr; evitar se insuficiência renal grave dependendo da formulação.", "Requiere ajuste renal según ClCr; evitar si insuficiencia renal grave dependiendo de la formulación.") : t(lang, "Sem ajuste renal se função renal normal.", "Sin ajuste renal si función renal normal."),
          hepaticAdjustment: t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Metabólito ativo da risperidona; antagonista D2 e 5HT2A, com risco relevante de hiperprolactinemia.", "Metabolito activo de risperidona; antagonista D2 y 5HT2A, con riesgo relevante de hiperprolactinemia."),
          onset: t(lang, "Efeito inicial em dias; resposta antipsicótica plena geralmente em 2–6 semanas.", "Efecto inicial en días; respuesta antipsicótica plena generalmente en 2–6 semanas."),
          halfLife: t(lang, "Vida média VO aproximada: 23 horas; formulações LAI têm duração mensal ou trimestral.", "Vida media VO aproximada: 23 horas; formulaciones LAI tienen duración mensual o trimestral."),
          commonAdverseEffects: [
            t(lang, "Hiperprolactinemia", "Hiperprolactinemia"),
            t(lang, "Ganho de peso", "Aumento de peso"),
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Acatisia", "Acatisia"),
            t(lang, "Parkinsonismo", "Parkinsonismo"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Reação no local da injeção", "Reacción en el sitio de inyección")
          ],
          dangerousAdverseEffects: [
            t(lang, "Síndrome neuroléptica maligna", "Síndrome neuroléptico maligno"),
            t(lang, "Discinesia tardia", "Discinesia tardía"),
            t(lang, "Prolongamento QT em predispostos", "Prolongación QT en predispuestos"),
            t(lang, "Eventos cerebrovasculares em idosos com demência", "Eventos cerebrovasculares en adultos mayores con demencia"),
            t(lang, "Hiperglicemia e dislipidemia", "Hiperglucemia y dislipidemia"),
            t(lang, "Acúmulo em insuficiência renal", "Acumulación en insuficiencia renal")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: maior risco de EPS, hipotensão, quedas, AVC e mortalidade em demência.", "Adulto mayor: mayor riesgo de EPS, hipotensión, caídas, ACV y mortalidad en demencia.") : null,
            gestante ? t(lang, "Gestação: avaliar risco-benefício; monitorar sintomas neonatais se uso tardio.", "Embarazo: evaluar riesgo-beneficio; monitorizar síntomas neonatales si uso tardío.") : null,
            lactante ? t(lang, "Lactação: monitorar sedação, alimentação e sintomas extrapiramidais no lactente.", "Lactancia: monitorizar sedación, alimentación y síntomas extrapiramidales en el lactante.") : null,
            insuficienciaRenal ? t(lang, "Insuficiência renal: ajuste obrigatório conforme ClCr.", "Insuficiencia renal: ajuste obligatorio según ClCr.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade à paliperidona ou risperidona", "Hipersensibilidad a paliperidona o risperidona"),
            t(lang, "Insuficiência renal grave para algumas formulações", "Insuficiencia renal grave para algunas formulaciones"),
            t(lang, "Demência com corpos de Lewy ou Parkinson grave, salvo extrema necessidade", "Demencia con cuerpos de Lewy o Parkinson grave, salvo extrema necesidad")
          ],
          interactions: [
            t(lang, "Levodopa e agonistas dopaminérgicos: antagonismo", "Levodopa y agonistas dopaminérgicos: antagonismo"),
            t(lang, "Fármacos que prolongam QT", "Fármacos que prolongan QT"),
            t(lang, "Carbamazepina: pode reduzir níveis", "Carbamazepina: puede reducir niveles"),
            t(lang, "Anti-hipertensivos: maior hipotensão", "Antihipertensivos: mayor hipotensión"),
            t(lang, "Álcool e depressores do SNC", "Alcohol y depresores del SNC")
          ],
          alerts: [
            t(lang, "Ajustar dose pela função renal.", "Ajustar dosis por función renal."),
            t(lang, "Monitorar prolactina se sintomas clínicos.", "Monitorizar prolactina si hay síntomas clínicos."),
            t(lang, "Monitorar peso, glicemia, lipídios e pressão arterial.", "Monitorizar peso, glucemia, lípidos y presión arterial."),
            t(lang, "Não partir nem mastigar comprimidos de liberação prolongada.", "No partir ni masticar comprimidos de liberación prolongada."),
            t(lang, "Formulações LAI exigem protocolo específico de início e manutenção.", "Formulaciones LAI requieren protocolo específico de inicio y mantenimiento.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Paliperidone Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    asenapina: {
      name: { pt: "Asenapina", es: "Asenapina" },
      category: "antipsicotico",
      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        return {
          name: t(lang, "Asenapina", "Asenapina"),
          class: t(lang, "Antipsicótico atípico", "Antipsicótico atípico"),
          category: "antipsicotico",
          commercialNames: { br: ["Saphris", "Sycrest", "Asenapina"], ar: ["Saphris", "Sycrest", "Asenapina"] },
          presentation: [
            t(lang, "Comprimido sublingual 5 mg", "Comprimido sublingual 5 mg"),
            t(lang, "Comprimido sublingual 10 mg", "Comprimido sublingual 10 mg")
          ],
          dose: {
            adulto: t(lang, "Esquizofrenia: 5 mg SL 12/12h; pode aumentar para 10 mg SL 12/12h.", "Esquizofrenia: 5 mg SL cada 12 h; puede aumentarse a 10 mg SL cada 12 h."),
            mania: t(lang, "Mania aguda: 5–10 mg SL 12/12h.", "Manía aguda: 5–10 mg SL cada 12 h."),
            maxDose: t(lang, "Dose máxima usual: 20 mg/dia.", "Dosis máxima habitual: 20 mg/día.")
          },
          indications: [
            t(lang, "Esquizofrenia", "Esquizofrenia"),
            t(lang, "Transtorno bipolar — mania aguda", "Trastorno bipolar — manía aguda"),
            t(lang, "Episódios mistos do transtorno bipolar", "Episodios mixtos del trastorno bipolar"),
            t(lang, "Manutenção no transtorno bipolar em casos selecionados", "Mantenimiento en trastorno bipolar en casos seleccionados"),
            t(lang, "Agitação associada à mania em casos selecionados", "Agitación asociada a manía en casos seleccionados"),
            t(lang, "Psicose com preocupação de menor ganho ponderal que olanzapina", "Psicosis con preocupación de menor aumento ponderal que olanzapina")
          ],
          renalAdjustment: t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia ? t(lang, "Hepatopatia moderada/grave: evitar, especialmente se Child-Pugh C.", "Hepatopatía moderada/grave: evitar, especialmente si Child-Pugh C.") : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Antagonista 5HT2A e D2, com ação em múltiplos receptores serotoninérgicos, dopaminérgicos, adrenérgicos e histamínicos.", "Antagonista 5HT2A y D2, con acción en múltiples receptores serotoninérgicos, dopaminérgicos, adrenérgicos e histamínicos."),
          onset: t(lang, "Melhora de mania/agitação pode ocorrer em dias; efeito antipsicótico pleno em 2–6 semanas.", "Mejoría de manía/agitación puede ocurrir en días; efecto antipsicótico pleno en 2–6 semanas."),
          halfLife: t(lang, "Vida média aproximada: 24 horas.", "Vida media aproximada: 24 horas."),
          commonAdverseEffects: [
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Hipoestesia oral", "Hipoestesia oral"),
            t(lang, "Disgeusia", "Disgeusia"),
            t(lang, "Acatisia", "Acatisia"),
            t(lang, "Ganho de peso", "Aumento de peso")
          ],
          dangerousAdverseEffects: [
            t(lang, "Reações de hipersensibilidade graves raras", "Reacciones de hipersensibilidad graves raras"),
            t(lang, "Síndrome neuroléptica maligna", "Síndrome neuroléptico maligno"),
            t(lang, "Discinesia tardia", "Discinesia tardía"),
            t(lang, "Hipotensão ortostática", "Hipotensión ortostática"),
            t(lang, "Hiperglicemia e dislipidemia", "Hiperglucemia y dislipidemia"),
            t(lang, "Prolongamento QT em predispostos", "Prolongación QT en predispuestos")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: maior risco de sedação, hipotensão, quedas e mortalidade em demência.", "Adulto mayor: mayor riesgo de sedación, hipotensión, caídas y mortalidad en demencia.") : null,
            gestante ? t(lang, "Gestação: avaliar risco-benefício; monitorar recém-nascido se uso tardio.", "Embarazo: evaluar riesgo-beneficio; monitorizar recién nacido si uso tardío.") : null,
            lactante ? t(lang, "Lactação: dados limitados; monitorar sedação e alimentação do lactente.", "Lactancia: datos limitados; monitorizar sedación y alimentación del lactante.") : null,
            hepatopatia ? t(lang, "Hepatopatia moderada/grave: evitar pelo aumento da exposição.", "Hepatopatía moderada/grave: evitar por aumento de exposición.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade à asenapina", "Hipersensibilidad a asenapina"),
            t(lang, "Insuficiência hepática grave", "Insuficiencia hepática grave"),
            t(lang, "Demência com psicose sem avaliação especializada", "Demencia con psicosis sin evaluación especializada")
          ],
          interactions: [
            t(lang, "Álcool e depressores do SNC", "Alcohol y depresores del SNC"),
            t(lang, "Anti-hipertensivos: maior hipotensão", "Antihipertensivos: mayor hipotensión"),
            t(lang, "Fármacos que prolongam QT", "Fármacos que prolongan QT"),
            t(lang, "Fluvoxamina: pode aumentar exposição", "Fluvoxamina: puede aumentar exposición"),
            t(lang, "Levodopa e agonistas dopaminérgicos: antagonismo", "Levodopa y agonistas dopaminérgicos: antagonismo")
          ],
          alerts: [
            t(lang, "Administrar por via sublingual; não engolir o comprimido inteiro.", "Administrar por vía sublingual; no tragar el comprimido entero."),
            t(lang, "Não comer nem beber por 10 minutos após administração.", "No comer ni beber por 10 minutos tras la administración."),
            t(lang, "Monitorar dormência oral e disgeusia.", "Monitorizar adormecimiento oral y disgeusia."),
            t(lang, "Monitorar peso, glicemia e lipídios.", "Monitorizar peso, glucemia y lípidos."),
            t(lang, "Evitar em hepatopatia grave.", "Evitar en hepatopatía grave.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Asenapine Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    lurasidona: {
      name: { pt: "Lurasidona", es: "Lurasidona" },
      category: "antipsicotico",
      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = clcr < 60;
        return {
          name: t(lang, "Lurasidona", "Lurasidona"),
          class: t(lang, "Antipsicótico atípico", "Antipsicótico atípico"),
          category: "antipsicotico",
          commercialNames: { br: ["Latuda", "Lurasidona"], ar: ["Latuda", "Lurasidona"] },
          presentation: [
            t(lang, "Comprimido 20 mg", "Comprimido 20 mg"),
            t(lang, "Comprimido 40 mg", "Comprimido 40 mg"),
            t(lang, "Comprimido 60 mg", "Comprimido 60 mg"),
            t(lang, "Comprimido 80 mg", "Comprimido 80 mg"),
            t(lang, "Comprimido 120 mg", "Comprimido 120 mg")
          ],
          dose: {
            adulto: t(lang, "Esquizofrenia: iniciar 40 mg VO 1x/dia com alimento.", "Esquizofrenia: iniciar 40 mg VO 1 vez/día con comida."),
            depressaoBipolar: t(lang, "Depressão bipolar: iniciar 20 mg VO 1x/dia com alimento; usual 20–120 mg/dia.", "Depresión bipolar: iniciar 20 mg VO 1 vez/día con comida; habitual 20–120 mg/día."),
            maxDose: t(lang, "Dose máxima usual: 160 mg/dia em esquizofrenia; 120 mg/dia em depressão bipolar.", "Dosis máxima habitual: 160 mg/día en esquizofrenia; 120 mg/día en depresión bipolar.")
          },
          indications: [
            t(lang, "Esquizofrenia", "Esquizofrenia"),
            t(lang, "Depressão bipolar tipo I", "Depresión bipolar tipo I"),
            t(lang, "Depressão bipolar em monoterapia", "Depresión bipolar en monoterapia"),
            t(lang, "Depressão bipolar como adjuvante a lítio ou valproato", "Depresión bipolar como coadyuvante a litio o valproato"),
            t(lang, "Psicose com preocupação metabólica", "Psicosis con preocupación metabólica"),
            t(lang, "Transtorno esquizoafetivo em casos selecionados", "Trastorno esquizoafectivo en casos seleccionados")
          ],
          renalAdjustment: insuficienciaRenal ? t(lang, "Insuficiência renal moderada/grave: limitar dose máxima conforme ClCr e protocolo local.", "Insuficiencia renal moderada/grave: limitar dosis máxima según ClCr y protocolo local.") : t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia ? t(lang, "Hepatopatia moderada/grave: limitar dose máxima e titular com cautela.", "Hepatopatía moderada/grave: limitar dosis máxima y titular con cautela.") : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Antagonista D2 e 5HT2A, antagonista 5HT7 e agonista parcial 5HT1A; perfil metabólico relativamente favorável.", "Antagonista D2 y 5HT2A, antagonista 5HT7 y agonista parcial 5HT1A; perfil metabólico relativamente favorable."),
          onset: t(lang, "Melhora pode surgir em 1–2 semanas; resposta plena geralmente em 4–6 semanas.", "La mejoría puede aparecer en 1–2 semanas; respuesta plena generalmente en 4–6 semanas."),
          halfLife: t(lang, "Vida média aproximada: 18 horas.", "Vida media aproximada: 18 horas."),
          commonAdverseEffects: [
            t(lang, "Náuseas", "Náuseas"),
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Acatisia", "Acatisia"),
            t(lang, "Parkinsonismo", "Parkinsonismo"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Insônia", "Insomnio")
          ],
          dangerousAdverseEffects: [
            t(lang, "Síndrome neuroléptica maligna", "Síndrome neuroléptico maligno"),
            t(lang, "Discinesia tardia", "Discinesia tardía"),
            t(lang, "Prolongamento QT em predispostos", "Prolongación QT en predispuestos"),
            t(lang, "Reação extrapiramidal intensa", "Reacción extrapiramidal intensa"),
            t(lang, "Hiperglicemia/dislipidemia, embora menos frequente que olanzapina", "Hiperglucemia/dislipidemia, aunque menos frecuente que olanzapina")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: maior risco de EPS, quedas, sedação e mortalidade em demência.", "Adulto mayor: mayor riesgo de EPS, caídas, sedación y mortalidad en demencia.") : null,
            gestante ? t(lang, "Gestação: avaliar risco-benefício; monitorar recém-nascido se uso tardio.", "Embarazo: evaluar riesgo-beneficio; monitorizar recién nacido si uso tardío.") : null,
            lactante ? t(lang, "Lactação: dados limitados; monitorar sedação e alimentação do lactente.", "Lactancia: datos limitados; monitorizar sedación y alimentación del lactante.") : null,
            hepatopatia ? t(lang, "Hepatopatia moderada/grave: limitar dose máxima.", "Hepatopatía moderada/grave: limitar dosis máxima.") : null,
            insuficienciaRenal ? t(lang, "Insuficiência renal moderada/grave: limitar dose máxima.", "Insuficiencia renal moderada/grave: limitar dosis máxima.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade à lurasidona", "Hipersensibilidad a lurasidona"),
            t(lang, "Uso com inibidores fortes de CYP3A4", "Uso con inhibidores fuertes de CYP3A4"),
            t(lang, "Uso com indutores fortes de CYP3A4", "Uso con inductores fuertes de CYP3A4"),
            t(lang, "Demência com psicose sem avaliação especializada", "Demencia con psicosis sin evaluación especializada")
          ],
          interactions: [
            t(lang, "Cetoconazol, claritromicina, ritonavir: contraindicado/aumenta níveis", "Ketoconazol, claritromicina, ritonavir: contraindicado/aumenta niveles"),
            t(lang, "Carbamazepina, rifampicina, fenitoína: contraindicado/reduz níveis", "Carbamazepina, rifampicina, fenitoína: contraindicado/reduce niveles"),
            t(lang, "Suco de toranja/grapefruit: pode aumentar níveis", "Jugo de pomelo/toronja: puede aumentar niveles"),
            t(lang, "Álcool e depressores do SNC", "Alcohol y depresores del SNC"),
            t(lang, "Levodopa e agonistas dopaminérgicos", "Levodopa y agonistas dopaminérgicos"),
            t(lang, "Fármacos que prolongam QT", "Fármacos que prolongan QT")
          ],
          alerts: [
            t(lang, "Administrar sempre com alimento para absorção adequada.", "Administrar siempre con comida para absorción adecuada."),
            t(lang, "Evitar grapefruit/toranja.", "Evitar pomelo/toronja."),
            t(lang, "Contraindicada com inibidores ou indutores fortes de CYP3A4.", "Contraindicada con inhibidores o inductores fuertes de CYP3A4."),
            t(lang, "Monitorar acatisia e sintomas extrapiramidais.", "Monitorizar acatisia y síntomas extrapiramidales."),
            t(lang, "Perfil metabólico mais favorável, mas ainda requer controle de peso, glicemia e lipídios.", "Perfil metabólico más favorable, pero aún requiere control de peso, glucemia y lípidos.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Lurasidone Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    cariprazina: {
      name: { pt: "Cariprazina", es: "Cariprazina" },
      category: "antipsicotico",
      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        return {
          name: t(lang, "Cariprazina", "Cariprazina"),
          class: t(lang, "Antipsicótico atípico agonista parcial D3/D2", "Antipsicótico atípico agonista parcial D3/D2"),
          category: "antipsicotico",
          commercialNames: { br: ["Vraylar", "Reagila", "Cariprazina"], ar: ["Reagila", "Vraylar", "Cariprazina"] },
          presentation: [
            t(lang, "Cápsula 1,5 mg", "Cápsula 1,5 mg"),
            t(lang, "Cápsula 3 mg", "Cápsula 3 mg"),
            t(lang, "Cápsula 4,5 mg", "Cápsula 4,5 mg"),
            t(lang, "Cápsula 6 mg", "Cápsula 6 mg")
          ],
          dose: {
            adulto: t(lang, "Esquizofrenia: iniciar 1,5 mg VO 1x/dia; usual 1,5–6 mg/dia.", "Esquizofrenia: iniciar 1,5 mg VO 1 vez/día; habitual 1,5–6 mg/día."),
            bipolar: t(lang, "Mania/misto bipolar: iniciar 1,5 mg/dia; pode aumentar para 3–6 mg/dia.", "Manía/mixto bipolar: iniciar 1,5 mg/día; puede aumentarse a 3–6 mg/día."),
            depressaoBipolar: t(lang, "Depressão bipolar: usual 1,5–3 mg/dia.", "Depresión bipolar: habitual 1,5–3 mg/día."),
            maxDose: t(lang, "Dose máxima usual: 6 mg/dia.", "Dosis máxima habitual: 6 mg/día.")
          },
          indications: [
            t(lang, "Esquizofrenia", "Esquizofrenia"),
            t(lang, "Transtorno bipolar — mania aguda", "Trastorno bipolar — manía aguda"),
            t(lang, "Transtorno bipolar — episódios mistos", "Trastorno bipolar — episodios mixtos"),
            t(lang, "Depressão bipolar", "Depresión bipolar"),
            t(lang, "Adjuvante no transtorno depressivo maior em alguns protocolos", "Coadyuvante en trastorno depresivo mayor en algunos protocolos"),
            t(lang, "Sintomas negativos da esquizofrenia em casos selecionados", "Síntomas negativos de la esquizofrenia en casos seleccionados")
          ],
          renalAdjustment: t(lang, "Sem ajuste renal habitual em insuficiência leve/moderada; evitar ou cautela se grave.", "Sin ajuste renal habitual en insuficiencia leve/moderada; evitar o cautela si es grave."),
          hepaticAdjustment: hepatopatia ? t(lang, "Hepatopatia grave: evitar; em leve/moderada geralmente sem ajuste, mas titular com cautela.", "Hepatopatía grave: evitar; en leve/moderada generalmente sin ajuste, pero titular con cautela.") : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Agonista parcial D3/D2 com preferência por D3, agonista parcial 5HT1A e antagonista 5HT2A.", "Agonista parcial D3/D2 con preferencia por D3, agonista parcial 5HT1A y antagonista 5HT2A."),
          onset: t(lang, "Resposta pode demorar semanas; metabólitos ativos têm meia-vida longa, então ajustes aparecem lentamente.", "La respuesta puede tardar semanas; metabolitos activos tienen vida media larga, por eso los ajustes se reflejan lentamente."),
          halfLife: t(lang, "Vida média efetiva longa; metabólito ativo didesmetil-cariprazina pode persistir por 1–3 semanas.", "Vida media efectiva larga; metabolito activo didesmetil-cariprazina puede persistir por 1–3 semanas."),
          commonAdverseEffects: [
            t(lang, "Acatisia", "Acatisia"),
            t(lang, "Insônia", "Insomnio"),
            t(lang, "Náuseas", "Náuseas"),
            t(lang, "Inquietação", "Inquietud"),
            t(lang, "Cefaleia", "Cefalea"),
            t(lang, "Sintomas extrapiramidais", "Síntomas extrapiramidales")
          ],
          dangerousAdverseEffects: [
            t(lang, "Síndrome neuroléptica maligna", "Síndrome neuroléptico maligno"),
            t(lang, "Discinesia tardia", "Discinesia tardía"),
            t(lang, "Acatisia intensa com risco de abandono", "Acatisia intensa con riesgo de abandono"),
            t(lang, "Hiperglicemia e dislipidemia", "Hiperglucemia y dislipidemia"),
            t(lang, "Convulsões em predispostos", "Convulsiones en predispuestos")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: maior risco de quedas, EPS, acatisia e mortalidade em demência.", "Adulto mayor: mayor riesgo de caídas, EPS, acatisia y mortalidad en demencia.") : null,
            gestante ? t(lang, "Gestação: avaliar risco-benefício; dados ainda limitados.", "Embarazo: evaluar riesgo-beneficio; datos aún limitados.") : null,
            lactante ? t(lang, "Lactação: dados limitados; considerar alternativa mais estudada ou monitorar lactente.", "Lactancia: datos limitados; considerar alternativa más estudiada o monitorizar lactante.") : null,
            hepatopatia ? t(lang, "Hepatopatia grave: evitar.", "Hepatopatía grave: evitar.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade à cariprazina", "Hipersensibilidad a cariprazina"),
            t(lang, "Uso com inibidores ou indutores fortes de CYP3A4 sem ajuste/avaliação", "Uso con inhibidores o inductores fuertes de CYP3A4 sin ajuste/evaluación"),
            t(lang, "Demência com psicose sem avaliação especializada", "Demencia con psicosis sin evaluación especializada")
          ],
          interactions: [
            t(lang, "Cetoconazol, claritromicina, ritonavir: aumentam níveis", "Ketoconazol, claritromicina, ritonavir: aumentan niveles"),
            t(lang, "Carbamazepina, rifampicina, fenitoína: reduzem níveis", "Carbamazepina, rifampicina, fenitoína: reducen niveles"),
            t(lang, "Álcool e depressores do SNC", "Alcohol y depresores del SNC"),
            t(lang, "Levodopa e agonistas dopaminérgicos", "Levodopa y agonistas dopaminérgicos")
          ],
          alerts: [
            t(lang, "Monitorar acatisia e insônia, especialmente no início.", "Monitorizar acatisia e insomnio, especialmente al inicio."),
            t(lang, "Ajustes de dose devem considerar meia-vida longa dos metabólitos.", "Los ajustes de dosis deben considerar la vida media larga de los metabolitos."),
            t(lang, "Monitorar peso, glicemia e lipídios.", "Monitorizar peso, glucemia y lípidos."),
            t(lang, "Evitar mudanças rápidas de dose sem necessidade.", "Evitar cambios rápidos de dosis sin necesidad."),
            t(lang, "Cuidado com interações por CYP3A4.", "Cuidado con interacciones por CYP3A4.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Cariprazine Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    brexpiprazol: {
      name: { pt: "Brexpiprazol", es: "Brexpiprazol" },
      category: "antipsicotico",
      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        return {
          name: t(lang, "Brexpiprazol", "Brexpiprazol"),
          class: t(lang, "Antipsicótico atípico agonista parcial D2", "Antipsicótico atípico agonista parcial D2"),
          category: "antipsicotico",
          commercialNames: { br: ["Rexulti", "Brexpiprazol"], ar: ["Rexulti", "Brexpiprazol"] },
          presentation: [
            t(lang, "Comprimido 0,25 mg", "Comprimido 0,25 mg"),
            t(lang, "Comprimido 0,5 mg", "Comprimido 0,5 mg"),
            t(lang, "Comprimido 1 mg", "Comprimido 1 mg"),
            t(lang, "Comprimido 2 mg", "Comprimido 2 mg"),
            t(lang, "Comprimido 3 mg", "Comprimido 3 mg"),
            t(lang, "Comprimido 4 mg", "Comprimido 4 mg")
          ],
          dose: {
            adulto: t(lang, "Esquizofrenia: iniciar 1 mg VO 1x/dia; titular para 2–4 mg/dia.", "Esquizofrenia: iniciar 1 mg VO 1 vez/día; titular a 2–4 mg/día."),
            depressaoAdjuvante: t(lang, "Adjuvante na depressão: iniciar 0,5–1 mg/dia; usual 1–3 mg/dia.", "Coadyuvante en depresión: iniciar 0,5–1 mg/día; habitual 1–3 mg/día."),
            maxDose: t(lang, "Dose máxima usual: 4 mg/dia em esquizofrenia; 3 mg/dia como adjuvante na depressão.", "Dosis máxima habitual: 4 mg/día en esquizofrenia; 3 mg/día como coadyuvante en depresión.")
          },
          indications: [
            t(lang, "Esquizofrenia", "Esquizofrenia"),
            t(lang, "Adjuvante no transtorno depressivo maior", "Coadyuvante en trastorno depresivo mayor"),
            t(lang, "Agitação associada à demência de Alzheimer em alguns protocolos regulatórios", "Agitación asociada a demencia de Alzheimer en algunos protocolos regulatorios"),
            t(lang, "Transtorno esquizoafetivo em casos selecionados", "Trastorno esquizoafectivo en casos seleccionados"),
            t(lang, "Psicose com necessidade de menor risco de acatisia que aripiprazol em alguns pacientes", "Psicosis con necesidad de menor riesgo de acatisia que aripiprazol en algunos pacientes"),
            t(lang, "Depressão resistente como estratégia de potencialização", "Depresión resistente como estrategia de potenciación")
          ],
          renalAdjustment: t(lang, "Insuficiência renal moderada/grave: pode requerer limite de dose máxima conforme protocolo.", "Insuficiencia renal moderada/grave: puede requerir límite de dosis máxima según protocolo."),
          hepaticAdjustment: hepatopatia ? t(lang, "Hepatopatia moderada/grave: pode requerer limite de dose máxima e titulação cautelosa.", "Hepatopatía moderada/grave: puede requerir límite de dosis máxima y titulación cautelosa.") : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Agonista parcial D2 e 5HT1A, antagonista 5HT2A; perfil estabilizador dopaminérgico com menor ativação que aripiprazol em alguns pacientes.", "Agonista parcial D2 y 5HT1A, antagonista 5HT2A; perfil estabilizador dopaminérgico con menor activación que aripiprazol en algunos pacientes."),
          onset: t(lang, "Efeito pode surgir em 1–2 semanas; resposta plena geralmente em 4–6 semanas.", "El efecto puede aparecer en 1–2 semanas; respuesta plena generalmente en 4–6 semanas."),
          halfLife: t(lang, "Vida média aproximada: 91 horas.", "Vida media aproximada: 91 horas."),
          commonAdverseEffects: [
            t(lang, "Ganho de peso", "Aumento de peso"),
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Acatisia", "Acatisia"),
            t(lang, "Cefaleia", "Cefalea"),
            t(lang, "Náuseas", "Náuseas"),
            t(lang, "Fadiga", "Fatiga")
          ],
          dangerousAdverseEffects: [
            t(lang, "Síndrome neuroléptica maligna", "Síndrome neuroléptico maligno"),
            t(lang, "Discinesia tardia", "Discinesia tardía"),
            t(lang, "Impulsividade ou comportamentos compulsivos raros", "Impulsividad o conductas compulsivas raras"),
            t(lang, "Hiperglicemia e dislipidemia", "Hiperglucemia y dislipidemia"),
            t(lang, "Convulsões em predispostos", "Convulsiones en predispuestos")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: maior risco de quedas, sedação e mortalidade em demência.", "Adulto mayor: mayor riesgo de caídas, sedación y mortalidad en demencia.") : null,
            gestante ? t(lang, "Gestação: avaliar risco-benefício; dados limitados.", "Embarazo: evaluar riesgo-beneficio; datos limitados.") : null,
            lactante ? t(lang, "Lactação: dados limitados; monitorar lactente ou considerar alternativa.", "Lactancia: datos limitados; monitorizar lactante o considerar alternativa.") : null,
            hepatopatia ? t(lang, "Hepatopatia moderada/grave: titular com cautela.", "Hepatopatía moderada/grave: titular con cautela.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade ao brexpiprazol", "Hipersensibilidad a brexpiprazol"),
            t(lang, "Demência com psicose sem avaliação especializada", "Demencia con psicosis sin evaluación especializada")
          ],
          interactions: [
            t(lang, "Inibidores fortes de CYP2D6 como fluoxetina/paroxetina: aumentam níveis", "Inhibidores fuertes de CYP2D6 como fluoxetina/paroxetina: aumentan niveles"),
            t(lang, "Inibidores fortes de CYP3A4 como cetoconazol/claritromicina: aumentam níveis", "Inhibidores fuertes de CYP3A4 como ketoconazol/claritromicina: aumentan niveles"),
            t(lang, "Indutores fortes de CYP3A4 como carbamazepina/rifampicina: reduzem níveis", "Inductores fuertes de CYP3A4 como carbamazepina/rifampicina: reducen niveles"),
            t(lang, "Álcool e depressores do SNC", "Alcohol y depresores del SNC"),
            t(lang, "Levodopa e agonistas dopaminérgicos", "Levodopa y agonistas dopaminérgicos")
          ],
          alerts: [
            t(lang, "Monitorar peso, glicemia e lipídios.", "Monitorizar peso, glucemia y lípidos."),
            t(lang, "Observar acatisia, inquietação e insônia.", "Observar acatisia, inquietud e insomnio."),
            t(lang, "Perguntar sobre impulsividade ou comportamentos compulsivos.", "Preguntar por impulsividad o conductas compulsivas."),
            t(lang, "Ajustar dose em interações por CYP2D6/CYP3A4.", "Ajustar dosis en interacciones por CYP2D6/CYP3A4."),
            t(lang, "Titular gradualmente pelo tempo longo de meia-vida.", "Titular gradualmente por su vida media larga.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Brexpiprazole Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    amisulprida: {
      name: { pt: "Amisulprida", es: "Amisulprida" },
      category: "antipsicotico",
      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const insuficienciaRenal = clcr < 60;
        return {
          name: t(lang, "Amisulprida", "Amisulprida"),
          class: t(lang, "Antipsicótico benzamida substituída", "Antipsicótico benzamida sustituida"),
          category: "antipsicotico",
          commercialNames: { br: ["Socian", "Amisulprida"], ar: ["Socian", "Amisulprida Gador", "Amisulprida"] },
          presentation: [
            t(lang, "Comprimido 50 mg", "Comprimido 50 mg"),
            t(lang, "Comprimido 100 mg", "Comprimido 100 mg"),
            t(lang, "Comprimido 200 mg", "Comprimido 200 mg"),
            t(lang, "Comprimido 400 mg", "Comprimido 400 mg"),
            t(lang, "Solução oral 100 mg/mL", "Solución oral 100 mg/mL")
          ],
          dose: {
            adulto: t(lang, "Esquizofrenia com sintomas positivos: 400–800 mg/dia VO, em 1–2 tomadas.", "Esquizofrenia con síntomas positivos: 400–800 mg/día VO, en 1–2 tomas."),
            sintomasNegativos: t(lang, "Sintomas negativos predominantes: 50–300 mg/dia.", "Síntomas negativos predominantes: 50–300 mg/día."),
            maxDose: t(lang, "Dose máxima usual: 1200 mg/dia.", "Dosis máxima habitual: 1200 mg/día.")
          },
          indications: [
            t(lang, "Esquizofrenia", "Esquizofrenia"),
            t(lang, "Sintomas positivos da esquizofrenia", "Síntomas positivos de la esquizofrenia"),
            t(lang, "Sintomas negativos predominantes da esquizofrenia", "Síntomas negativos predominantes de la esquizofrenia"),
            t(lang, "Psicose crônica", "Psicosis crónica"),
            t(lang, "Transtorno esquizoafetivo em casos selecionados", "Trastorno esquizoafectivo en casos seleccionados"),
            t(lang, "Baixa resposta ou intolerância a outros antipsicóticos em casos selecionados", "Baja respuesta o intolerancia a otros antipsicóticos en casos seleccionados")
          ],
          renalAdjustment: insuficienciaRenal ? t(lang, "Necessita ajuste renal conforme ClCr; reduzir dose em insuficiência renal moderada/grave e evitar se muito grave conforme protocolo.", "Requiere ajuste renal según ClCr; reducir dosis en insuficiencia renal moderada/grave y evitar si muy grave según protocolo.") : t(lang, "Sem ajuste renal se função renal normal.", "Sin ajuste renal si función renal normal."),
          hepaticAdjustment: t(lang, "Sem ajuste hepático habitual; metabolismo hepático é limitado.", "Sin ajuste hepático habitual; metabolismo hepático limitado."),
          mechanism: t(lang, "Antagonista seletivo D2/D3; em doses baixas pode modular sintomas negativos e em doses altas exerce efeito antipsicótico.", "Antagonista selectivo D2/D3; en dosis bajas puede modular síntomas negativos y en dosis altas ejerce efecto antipsicótico."),
          onset: t(lang, "Efeito inicial em dias a semanas; resposta plena geralmente em 4–6 semanas.", "Efecto inicial en días a semanas; respuesta plena generalmente en 4–6 semanas."),
          halfLife: t(lang, "Vida média aproximada: 12 horas; eliminação predominantemente renal.", "Vida media aproximada: 12 horas; eliminación predominantemente renal."),
          commonAdverseEffects: [
            t(lang, "Hiperprolactinemia", "Hiperprolactinemia"),
            t(lang, "Amenorreia", "Amenorrea"),
            t(lang, "Galactorreia", "Galactorrea"),
            t(lang, "Disfunção sexual", "Disfunción sexual"),
            t(lang, "Insônia ou sonolência", "Insomnio o somnolencia"),
            t(lang, "Ganho de peso", "Aumento de peso"),
            t(lang, "Sintomas extrapiramidais", "Síntomas extrapiramidales")
          ],
          dangerousAdverseEffects: [
            t(lang, "Prolongamento QT", "Prolongación QT"),
            t(lang, "Torsades de pointes em predispostos", "Torsades de pointes en predispuestos"),
            t(lang, "Síndrome neuroléptica maligna", "Síndrome neuroléptico maligno"),
            t(lang, "Discinesia tardia", "Discinesia tardía"),
            t(lang, "Convulsões em predispostos", "Convulsiones en predispuestos"),
            t(lang, "Acúmulo e toxicidade em insuficiência renal", "Acumulación y toxicidad en insuficiencia renal")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: maior risco de QT, EPS, quedas e acúmulo se função renal reduzida.", "Adulto mayor: mayor riesgo de QT, EPS, caídas y acumulación si función renal reducida.") : null,
            gestante ? t(lang, "Gestação: avaliar risco-benefício; monitorar recém-nascido se uso tardio.", "Embarazo: evaluar riesgo-beneficio; monitorizar recién nacido si uso tardío.") : null,
            lactante ? t(lang, "Lactação: pode passar ao leite; monitorar sedação e sintomas extrapiramidais.", "Lactancia: puede pasar a la leche; monitorizar sedación y síntomas extrapiramidales.") : null,
            insuficienciaRenal ? t(lang, "Insuficiência renal: ajuste obrigatório conforme ClCr.", "Insuficiencia renal: ajuste obligatorio según ClCr.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade à amisulprida", "Hipersensibilidad a amisulprida"),
            t(lang, "Feocromocitoma", "Feocromocitoma"),
            t(lang, "Tumores prolactino-dependentes", "Tumores prolactino-dependientes"),
            t(lang, "QT prolongado significativo", "QT prolongado significativo"),
            t(lang, "Uso concomitante com fármacos que prolongam QT de alto risco", "Uso concomitante con fármacos que prolongan QT de alto riesgo"),
            t(lang, "Insuficiência renal grave sem possibilidade de ajuste/monitorização", "Insuficiencia renal grave sin posibilidad de ajuste/monitorización")
          ],
          interactions: [
            t(lang, "Levodopa e agonistas dopaminérgicos: antagonismo", "Levodopa y agonistas dopaminérgicos: antagonismo"),
            t(lang, "Antiarrítmicos e fármacos que prolongam QT", "Antiarrítmicos y fármacos que prolongan QT"),
            t(lang, "Diuréticos que causam hipocalemia: maior risco de arritmia", "Diuréticos que causan hipopotasemia: mayor riesgo de arritmia"),
            t(lang, "Álcool e depressores do SNC", "Alcohol y depresores del SNC"),
            t(lang, "Anti-hipertensivos: maior hipotensão", "Antihipertensivos: mayor hipotensión")
          ],
          alerts: [
            t(lang, "Ajustar dose pela função renal.", "Ajustar dosis por función renal."),
            t(lang, "Monitorar prolactina se sintomas clínicos.", "Monitorizar prolactina si hay síntomas clínicos."),
            t(lang, "Considerar ECG basal se risco de QT.", "Considerar ECG basal si hay riesgo de QT."),
            t(lang, "Corrigir hipocalemia/hipomagnesemia antes do uso em pacientes de risco.", "Corregir hipopotasemia/hipomagnesemia antes del uso en pacientes de riesgo."),
            t(lang, "Monitorar EPS, especialmente em doses altas.", "Monitorizar EPS, especialmente en dosis altas.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    paliperidona_trimestral: {
      name: { pt: "Paliperidona trimestral", es: "Paliperidona trimestral" },
      category: "antipsicotico",
      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const insuficienciaRenal = clcr < 60;
        return {
          name: t(lang, "Paliperidona trimestral", "Paliperidona trimestral"),
          class: t(lang, "Antipsicótico atípico injetável de longa ação trimestral", "Antipsicótico atípico inyectable de larga acción trimestral"),
          category: "antipsicotico",
          commercialNames: { br: ["Invega Trinza"], ar: ["Trevicta"] },
          presentation: [
            t(lang, "Seringa preenchida 175 mg", "Jeringa prellenada 175 mg"),
            t(lang, "Seringa preenchida 263 mg", "Jeringa prellenada 263 mg"),
            t(lang, "Seringa preenchida 350 mg", "Jeringa prellenada 350 mg"),
            t(lang, "Seringa preenchida 525 mg", "Jeringa prellenada 525 mg")
          ],
          dose: {
            adulto: t(lang, "Aplicar IM a cada 3 meses após estabilização prévia com paliperidona mensal.", "Aplicar IM cada 3 meses tras estabilización previa con paliperidona mensual."),
            conversao: t(lang, "Dose trimestral geralmente corresponde a 3,5 vezes a última dose mensal estabilizada.", "La dosis trimestral generalmente corresponde a 3,5 veces la última dosis mensual estabilizada."),
            maxDose: t(lang, "Dose máxima usual: 525 mg IM a cada 3 meses.", "Dosis máxima habitual: 525 mg IM cada 3 meses.")
          },
          indications: [
            t(lang, "Esquizofrenia em fase de manutenção", "Esquizofrenia en fase de mantenimiento"),
            t(lang, "Prevenção de recaídas psicóticas", "Prevención de recaídas psicóticas"),
            t(lang, "Baixa adesão ao tratamento oral", "Baja adherencia al tratamiento oral"),
            t(lang, "Pacientes estabilizados com paliperidona mensal", "Pacientes estabilizados con paliperidona mensual"),
            t(lang, "Psicose crônica com necessidade de estabilidade plasmática prolongada", "Psicosis crónica con necesidad de estabilidad plasmática prolongada"),
            t(lang, "Redução de internações por abandono terapêutico", "Reducción de internaciones por abandono terapéutico")
          ],
          renalAdjustment: insuficienciaRenal ? t(lang, "Insuficiência renal: não recomendada se ClCr <50 mL/min.", "Insuficiencia renal: no recomendada si ClCr <50 mL/min.") : t(lang, "Sem ajuste renal se função renal normal.", "Sin ajuste renal si función renal normal."),
          hepaticAdjustment: t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Metabólito ativo da risperidona; antagonista D2 e 5HT2A com liberação prolongada por aproximadamente 3 meses.", "Metabolito activo de risperidona; antagonista D2 y 5HT2A con liberación prolongada por aproximadamente 3 meses."),
          onset: t(lang, "Não indicada para início de tratamento; deve ser usada apenas após estabilização com formulação mensal.", "No indicada para inicio de tratamiento; debe usarse solo tras estabilización con formulación mensual."),
          halfLife: t(lang, "Meia-vida aparente prolongada, variando aproximadamente 2–4 meses conforme local de aplicação.", "Vida media aparente prolongada, variando aproximadamente 2–4 meses según sitio de aplicación."),
          commonAdverseEffects: [
            t(lang, "Reação no local da injeção", "Reacción en el sitio de inyección"),
            t(lang, "Ganho de peso", "Aumento de peso"),
            t(lang, "Hiperprolactinemia", "Hiperprolactinemia"),
            t(lang, "Acatisia", "Acatisia"),
            t(lang, "Parkinsonismo", "Parkinsonismo"),
            t(lang, "Sonolência", "Somnolencia")
          ],
          dangerousAdverseEffects: [
            t(lang, "Síndrome neuroléptica maligna", "Síndrome neuroléptico maligno"),
            t(lang, "Discinesia tardia", "Discinesia tardía"),
            t(lang, "Prolongamento QT", "Prolongación QT"),
            t(lang, "Eventos cerebrovasculares em idosos com demência", "Eventos cerebrovasculares en adultos mayores con demencia"),
            t(lang, "Hiperglicemia e dislipidemia", "Hiperglucemia y dislipidemia"),
            t(lang, "Efeito adverso persistente pela longa duração do depósito", "Efecto adverso persistente por la larga duración del depósito")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: maior risco de EPS, quedas, AVC e mortalidade em demência.", "Adulto mayor: mayor riesgo de EPS, caídas, ACV y mortalidad en demencia.") : null,
            gestante ? t(lang, "Gestação: avaliar risco-benefício; longa duração dificulta retirada rápida.", "Embarazo: evaluar riesgo-beneficio; larga duración dificulta retirada rápida.") : null,
            lactante ? t(lang, "Lactação: monitorar sedação, alimentação e sintomas extrapiramidais no lactente.", "Lactancia: monitorizar sedación, alimentación y síntomas extrapiramidales en el lactante.") : null,
            insuficienciaRenal ? t(lang, "Insuficiência renal: evitar se ClCr <50 mL/min.", "Insuficiencia renal: evitar si ClCr <50 mL/min.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade à paliperidona ou risperidona", "Hipersensibilidad a paliperidona o risperidona"),
            t(lang, "Insuficiência renal moderada/grave com ClCr <50 mL/min", "Insuficiencia renal moderada/grave con ClCr <50 mL/min"),
            t(lang, "Paciente não estabilizado previamente com paliperidona mensal", "Paciente no estabilizado previamente con paliperidona mensual"),
            t(lang, "Demência com psicose sem avaliação especializada", "Demencia con psicosis sin evaluación especializada")
          ],
          interactions: [
            t(lang, "Levodopa e agonistas dopaminérgicos", "Levodopa y agonistas dopaminérgicos"),
            t(lang, "Fármacos que prolongam QT", "Fármacos que prolongan QT"),
            t(lang, "Carbamazepina: pode reduzir níveis", "Carbamazepina: puede reducir niveles"),
            t(lang, "Anti-hipertensivos: maior hipotensão", "Antihipertensivos: mayor hipotensión"),
            t(lang, "Álcool e depressores do SNC", "Alcohol y depresores del SNC")
          ],
          alerts: [
            t(lang, "Não usar para início de tratamento.", "No usar para inicio de tratamiento."),
            t(lang, "Usar apenas após estabilização com paliperidona mensal.", "Usar solo tras estabilización con paliperidona mensual."),
            t(lang, "Ajustar decisão pela função renal.", "Ajustar decisión por función renal."),
            t(lang, "Monitorar prolactina, peso, glicemia e lipídios.", "Monitorizar prolactina, peso, glucemia y lípidos."),
            t(lang, "Eventos adversos podem persistir por meses.", "Los eventos adversos pueden persistir por meses.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Paliperidone Palmitate 3-month Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    paliperidona_mensal: {
      name: { pt: "Paliperidona mensal", es: "Paliperidona mensual" },
      category: "antipsicotico",
      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const insuficienciaRenal = clcr < 60;
        return {
          name: t(lang, "Paliperidona mensal", "Paliperidona mensual"),
          class: t(lang, "Antipsicótico atípico injetável de longa ação mensal", "Antipsicótico atípico inyectable de larga acción mensual"),
          category: "antipsicotico",
          commercialNames: { br: ["Invega Sustenna"], ar: ["Xeplion"] },
          presentation: [
            t(lang, "Seringa preenchida 39 mg", "Jeringa prellenada 39 mg"),
            t(lang, "Seringa preenchida 78 mg", "Jeringa prellenada 78 mg"),
            t(lang, "Seringa preenchida 117 mg", "Jeringa prellenada 117 mg"),
            t(lang, "Seringa preenchida 156 mg", "Jeringa prellenada 156 mg"),
            t(lang, "Seringa preenchida 234 mg", "Jeringa prellenada 234 mg")
          ],
          dose: {
            adulto: t(lang, "Esquema inicial comum: 234 mg IM deltoide no dia 1 e 156 mg IM deltoide no dia 8; depois manutenção mensal.", "Esquema inicial común: 234 mg IM deltoides día 1 y 156 mg IM deltoides día 8; luego mantenimiento mensual."),
            manutencao: t(lang, "Manutenção usual: 39–234 mg IM 1x/mês conforme resposta e tolerabilidade.", "Mantenimiento habitual: 39–234 mg IM 1 vez/mes según respuesta y tolerabilidad."),
            maxDose: t(lang, "Dose máxima usual: 234 mg IM mensal.", "Dosis máxima habitual: 234 mg IM mensual.")
          },
          indications: [
            t(lang, "Esquizofrenia", "Esquizofrenia"),
            t(lang, "Transtorno esquizoafetivo", "Trastorno esquizoafectivo"),
            t(lang, "Manutenção antipsicótica de longa ação", "Mantenimiento antipsicótico de larga acción"),
            t(lang, "Baixa adesão ao tratamento oral", "Baja adherencia al tratamiento oral"),
            t(lang, "Prevenção de recaídas psicóticas", "Prevención de recaídas psicóticas"),
            t(lang, "Ponte para paliperidona trimestral após estabilização", "Puente hacia paliperidona trimestral tras estabilización")
          ],
          renalAdjustment: insuficienciaRenal ? t(lang, "Necessita ajuste se ClCr 50–80 mL/min; não recomendada se ClCr <50 mL/min.", "Requiere ajuste si ClCr 50–80 mL/min; no recomendada si ClCr <50 mL/min.") : t(lang, "Sem ajuste renal se função renal normal.", "Sin ajuste renal si función renal normal."),
          hepaticAdjustment: t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Palmitato de paliperidona com liberação prolongada mensal; antagonista D2 e 5HT2A.", "Palmitato de paliperidona con liberación prolongada mensual; antagonista D2 y 5HT2A."),
          onset: t(lang, "Esquema de carga permite início sem suplementação oral em muitos protocolos.", "El esquema de carga permite inicio sin suplementación oral en muchos protocolos."),
          halfLife: t(lang, "Meia-vida aparente prolongada, aproximadamente 25–49 dias.", "Vida media aparente prolongada, aproximadamente 25–49 días."),
          commonAdverseEffects: [
            t(lang, "Dor ou reação no local da injeção", "Dolor o reacción en el sitio de inyección"),
            t(lang, "Hiperprolactinemia", "Hiperprolactinemia"),
            t(lang, "Ganho de peso", "Aumento de peso"),
            t(lang, "Acatisia", "Acatisia"),
            t(lang, "Parkinsonismo", "Parkinsonismo"),
            t(lang, "Sonolência", "Somnolencia")
          ],
          dangerousAdverseEffects: [
            t(lang, "Síndrome neuroléptica maligna", "Síndrome neuroléptico maligno"),
            t(lang, "Discinesia tardia", "Discinesia tardía"),
            t(lang, "Prolongamento QT", "Prolongación QT"),
            t(lang, "Hiperglicemia e dislipidemia", "Hiperglucemia y dislipidemia"),
            t(lang, "Eventos cerebrovasculares em idosos com demência", "Eventos cerebrovasculares en adultos mayores con demencia"),
            t(lang, "Acúmulo em insuficiência renal", "Acumulación en insuficiencia renal")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: maior risco de EPS, quedas, AVC e mortalidade em demência.", "Adulto mayor: mayor riesgo de EPS, caídas, ACV y mortalidad en demencia.") : null,
            gestante ? t(lang, "Gestação: avaliar risco-benefício; considerar longa duração do depósito.", "Embarazo: evaluar riesgo-beneficio; considerar larga duración del depósito.") : null,
            lactante ? t(lang, "Lactação: monitorar sedação, alimentação e sintomas extrapiramidais no lactente.", "Lactancia: monitorizar sedación, alimentación y síntomas extrapiramidales en el lactante.") : null,
            insuficienciaRenal ? t(lang, "Insuficiência renal: ajustar ou evitar conforme ClCr.", "Insuficiencia renal: ajustar o evitar según ClCr.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade à paliperidona ou risperidona", "Hipersensibilidad a paliperidona o risperidona"),
            t(lang, "ClCr <50 mL/min", "ClCr <50 mL/min"),
            t(lang, "Demência com psicose sem avaliação especializada", "Demencia con psicosis sin evaluación especializada")
          ],
          interactions: [
            t(lang, "Levodopa e agonistas dopaminérgicos", "Levodopa y agonistas dopaminérgicos"),
            t(lang, "Fármacos que prolongam QT", "Fármacos que prolongan QT"),
            t(lang, "Carbamazepina: pode reduzir níveis", "Carbamazepina: puede reducir niveles"),
            t(lang, "Anti-hipertensivos: maior hipotensão", "Antihipertensivos: mayor hipotensión"),
            t(lang, "Álcool e depressores do SNC", "Alcohol y depresores del SNC")
          ],
          alerts: [
            t(lang, "Confirmar tolerância prévia à risperidona ou paliperidona antes do LAI.", "Confirmar tolerancia previa a risperidona o paliperidona antes del LAI."),
            t(lang, "Ajustar pela função renal.", "Ajustar por función renal."),
            t(lang, "Monitorar prolactina se sintomas clínicos.", "Monitorizar prolactina si hay síntomas clínicos."),
            t(lang, "Monitorar peso, glicemia, lipídios e pressão arterial.", "Monitorizar peso, glucemia, lípidos y presión arterial."),
            t(lang, "Registrar data e local da aplicação para evitar erro de intervalo.", "Registrar fecha y sitio de aplicación para evitar error de intervalo.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Paliperidone Palmitate Monthly Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    risperidona_lai: {
      name: { pt: "Risperidona LAI", es: "Risperidona LAI" },
      category: "antipsicotico",
      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = clcr < 60;
        return {
          name: t(lang, "Risperidona LAI", "Risperidona LAI"),
          class: t(lang, "Antipsicótico atípico injetável de longa ação", "Antipsicótico atípico inyectable de larga acción"),
          category: "antipsicotico",
          commercialNames: { br: ["Risperdal Consta"], ar: ["Risperdal Consta"] },
          presentation: [
            t(lang, "Frasco/seringa 25 mg", "Frasco/jeringa 25 mg"),
            t(lang, "Frasco/seringa 37,5 mg", "Frasco/jeringa 37,5 mg"),
            t(lang, "Frasco/seringa 50 mg", "Frasco/jeringa 50 mg")
          ],
          dose: {
            adulto: t(lang, "Dose inicial usual: 25 mg IM profunda a cada 2 semanas.", "Dosis inicial habitual: 25 mg IM profunda cada 2 semanas."),
            suplementacao: t(lang, "Manter antipsicótico oral por cerca de 3 semanas após a primeira aplicação.", "Mantener antipsicótico oral durante cerca de 3 semanas tras la primera aplicación."),
            maxDose: t(lang, "Dose máxima usual: 50 mg IM a cada 2 semanas.", "Dosis máxima habitual: 50 mg IM cada 2 semanas.")
          },
          indications: [
            t(lang, "Esquizofrenia em manutenção", "Esquizofrenia en mantenimiento"),
            t(lang, "Transtorno bipolar em manutenção em alguns protocolos", "Trastorno bipolar en mantenimiento en algunos protocolos"),
            t(lang, "Prevenção de recaídas psicóticas", "Prevención de recaídas psicóticas"),
            t(lang, "Baixa adesão ao tratamento oral", "Baja adherencia al tratamiento oral"),
            t(lang, "Psicose crônica com necessidade de LAI", "Psicosis crónica con necesidad de LAI"),
            t(lang, "Transtorno esquizoafetivo em casos selecionados", "Trastorno esquizoafectivo en casos seleccionados")
          ],
          renalAdjustment: insuficienciaRenal ? t(lang, "Insuficiência renal: iniciar com cautela; pode ser necessário estabilizar primeiro com dose oral menor.", "Insuficiencia renal: iniciar con cautela; puede ser necesario estabilizar primero con dosis oral menor.") : t(lang, "Sem ajuste renal habitual se função renal normal.", "Sin ajuste renal habitual si función renal normal."),
          hepaticAdjustment: hepatopatia ? t(lang, "Hepatopatia: iniciar com cautela; pode ser necessário estabilizar primeiro com dose oral menor.", "Hepatopatía: iniciar con cautela; puede ser necesario estabilizar primero con dosis oral menor.") : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Antagonista D2 e 5HT2A em formulação depot de microesferas, com liberação prolongada.", "Antagonista D2 y 5HT2A en formulación depot de microesferas, con liberación prolongada."),
          onset: t(lang, "Liberação clínica relevante é retardada; por isso exige cobertura oral inicial por aproximadamente 3 semanas.", "La liberación clínica relevante es retardada; por eso requiere cobertura oral inicial durante aproximadamente 3 semanas."),
          halfLife: t(lang, "Liberação prolongada por semanas; administração habitual a cada 14 dias.", "Liberación prolongada por semanas; administración habitual cada 14 días."),
          commonAdverseEffects: [
            t(lang, "Dor no local da injeção", "Dolor en el sitio de inyección"),
            t(lang, "Hiperprolactinemia", "Hiperprolactinemia"),
            t(lang, "Ganho de peso", "Aumento de peso"),
            t(lang, "Acatisia", "Acatisia"),
            t(lang, "Parkinsonismo", "Parkinsonismo"),
            t(lang, "Sonolência", "Somnolencia")
          ],
          dangerousAdverseEffects: [
            t(lang, "Síndrome neuroléptica maligna", "Síndrome neuroléptico maligno"),
            t(lang, "Discinesia tardia", "Discinesia tardía"),
            t(lang, "Prolongamento QT em predispostos", "Prolongación QT en predispuestos"),
            t(lang, "Hiperglicemia e dislipidemia", "Hiperglucemia y dislipidemia"),
            t(lang, "Eventos cerebrovasculares em idosos com demência", "Eventos cerebrovasculares en adultos mayores con demencia"),
            t(lang, "Efeito adverso persistente pela formulação depot", "Efecto adverso persistente por la formulación depot")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: maior risco de EPS, hipotensão, quedas, AVC e mortalidade em demência.", "Adulto mayor: mayor riesgo de EPS, hipotensión, caídas, ACV y mortalidad en demencia.") : null,
            gestante ? t(lang, "Gestação: avaliar risco-benefício; considerar duração prolongada do depósito.", "Embarazo: evaluar riesgo-beneficio; considerar duración prolongada del depósito.") : null,
            lactante ? t(lang, "Lactação: monitorar sedação, alimentação e sintomas extrapiramidais no lactente.", "Lactancia: monitorizar sedación, alimentación y síntomas extrapiramidales en el lactante.") : null,
            hepatopatia ? t(lang, "Hepatopatia: iniciar com cautela e considerar estabilização oral prévia.", "Hepatopatía: iniciar con cautela y considerar estabilización oral previa.") : null,
            insuficienciaRenal ? t(lang, "Insuficiência renal: iniciar com cautela e considerar estabilização oral prévia.", "Insuficiencia renal: iniciar con cautela y considerar estabilización oral previa.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade à risperidona ou paliperidona", "Hipersensibilidad a risperidona o paliperidona"),
            t(lang, "Ausência de tolerância prévia à risperidona/paliperidona", "Ausencia de tolerancia previa a risperidona/paliperidona"),
            t(lang, "Demência com psicose sem avaliação especializada", "Demencia con psicosis sin evaluación especializada")
          ],
          interactions: [
            t(lang, "Fluoxetina/paroxetina: podem aumentar níveis por CYP2D6", "Fluoxetina/paroxetina: pueden aumentar niveles por CYP2D6"),
            t(lang, "Carbamazepina: pode reduzir níveis", "Carbamazepina: puede reducir niveles"),
            t(lang, "Levodopa e agonistas dopaminérgicos", "Levodopa y agonistas dopaminérgicos"),
            t(lang, "Fármacos que prolongam QT", "Fármacos que prolongan QT"),
            t(lang, "Álcool e depressores do SNC", "Alcohol y depresores del SNC")
          ],
          alerts: [
            t(lang, "Confirmar tolerância oral antes de iniciar LAI.", "Confirmar tolerancia oral antes de iniciar LAI."),
            t(lang, "Manter cobertura oral por aproximadamente 3 semanas após primeira aplicação.", "Mantener cobertura oral aproximadamente 3 semanas tras primera aplicación."),
            t(lang, "Aplicação IM profunda a cada 2 semanas.", "Aplicación IM profunda cada 2 semanas."),
            t(lang, "Monitorar prolactina, EPS, peso, glicemia e lipídios.", "Monitorizar prolactina, EPS, peso, glucemia y lípidos."),
            t(lang, "Registrar data de aplicação para evitar falhas no intervalo.", "Registrar fecha de aplicación para evitar fallas en el intervalo.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Risperidone LAI Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    aripiprazol_lai: {
      name: { pt: "Aripiprazol LAI", es: "Aripiprazol LAI" },
      category: "antipsicotico",
      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        return {
          name: t(lang, "Aripiprazol LAI", "Aripiprazol LAI"),
          class: t(lang, "Antipsicótico atípico injetável de longa ação", "Antipsicótico atípico inyectable de larga acción"),
          category: "antipsicotico",
          commercialNames: { br: ["Abilify Maintena", "Aristada"], ar: ["Abilify Maintena", "Aripiprazol LAI"] },
          presentation: [
            t(lang, "Frasco/seringa 300 mg", "Frasco/jeringa 300 mg"),
            t(lang, "Frasco/seringa 400 mg", "Frasco/jeringa 400 mg"),
            t(lang, "Formulações de longa ação com diferentes intervalos conforme produto", "Formulaciones de larga acción con diferentes intervalos según producto")
          ],
          dose: {
            adulto: t(lang, "Dose usual: 400 mg IM 1x/mês; pode reduzir para 300 mg/mês se intolerância.", "Dosis habitual: 400 mg IM 1 vez/mes; puede reducirse a 300 mg/mes si intolerancia."),
            suplementacao: t(lang, "Manter aripiprazol oral por 14 dias após a primeira aplicação, conforme formulação.", "Mantener aripiprazol oral durante 14 días tras la primera aplicación, según formulación."),
            maxDose: t(lang, "Dose máxima usual: 400 mg IM mensal para Abilify Maintena.", "Dosis máxima habitual: 400 mg IM mensual para Abilify Maintena.")
          },
          indications: [
            t(lang, "Esquizofrenia em manutenção", "Esquizofrenia en mantenimiento"),
            t(lang, "Transtorno bipolar tipo I em manutenção", "Trastorno bipolar tipo I en mantenimiento"),
            t(lang, "Prevenção de recaídas psicóticas", "Prevención de recaídas psicóticas"),
            t(lang, "Baixa adesão ao tratamento oral", "Baja adherencia al tratamiento oral"),
            t(lang, "Pacientes com boa resposta prévia ao aripiprazol oral", "Pacientes con buena respuesta previa a aripiprazol oral"),
            t(lang, "Necessidade de menor risco de hiperprolactinemia", "Necesidad de menor riesgo de hiperprolactinemia")
          ],
          renalAdjustment: t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia ? t(lang, "Geralmente sem ajuste, mas usar cautela em hepatopatia grave.", "Generalmente sin ajuste, pero usar con cautela en hepatopatía grave.") : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Agonista parcial D2 e 5HT1A, antagonista 5HT2A, em formulação depot de liberação prolongada.", "Agonista parcial D2 y 5HT1A, antagonista 5HT2A, en formulación depot de liberación prolongada."),
          onset: t(lang, "Não é indicado para controle imediato; requer tolerância oral prévia e cobertura oral inicial.", "No está indicado para control inmediato; requiere tolerancia oral previa y cobertura oral inicial."),
          halfLife: t(lang, "Meia-vida aparente prolongada, permitindo administração mensal ou intervalos maiores conforme formulação.", "Vida media aparente prolongada, permitiendo administración mensual o intervalos mayores según formulación."),
          commonAdverseEffects: [
            t(lang, "Dor no local da injeção", "Dolor en el sitio de inyección"),
            t(lang, "Acatisia", "Acatisia"),
            t(lang, "Insônia", "Insomnio"),
            t(lang, "Ansiedade ou ativação", "Ansiedad o activación"),
            t(lang, "Náuseas", "Náuseas"),
            t(lang, "Cefaleia", "Cefalea")
          ],
          dangerousAdverseEffects: [
            t(lang, "Síndrome neuroléptica maligna", "Síndrome neuroléptico maligno"),
            t(lang, "Discinesia tardia", "Discinesia tardía"),
            t(lang, "Impulsividade, jogo patológico ou hipersexualidade em casos raros", "Impulsividad, juego patológico o hipersexualidad en casos raros"),
            t(lang, "Reação grave no local da injeção", "Reacción grave en el sitio de inyección"),
            t(lang, "Hiperglicemia e dislipidemia", "Hiperglucemia y dislipidemia"),
            t(lang, "Convulsões em predispostos", "Convulsiones en predispuestos")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: maior risco de quedas, acatisia, eventos cerebrovasculares e mortalidade em demência.", "Adulto mayor: mayor riesgo de caídas, acatisia, eventos cerebrovasculares y mortalidad en demencia.") : null,
            gestante ? t(lang, "Gestação: avaliar risco-benefício; considerar longa duração da formulação depot.", "Embarazo: evaluar riesgo-beneficio; considerar larga duración de la formulación depot.") : null,
            lactante ? t(lang, "Lactação: pode reduzir prolactina e produção de leite; monitorar lactente.", "Lactancia: puede reducir prolactina y producción de leche; monitorizar lactante.") : null,
            hepatopatia ? t(lang, "Hepatopatia grave: usar cautela e monitorar tolerabilidade.", "Hepatopatía grave: usar con cautela y monitorizar tolerabilidad.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade ao aripiprazol", "Hipersensibilidad al aripiprazol"),
            t(lang, "Ausência de tolerância prévia ao aripiprazol oral", "Ausencia de tolerancia previa a aripiprazol oral"),
            t(lang, "Demência com psicose sem avaliação especializada", "Demencia con psicosis sin evaluación especializada")
          ],
          interactions: [
            t(lang, "Inibidores fortes de CYP2D6 como fluoxetina/paroxetina: aumentam níveis", "Inhibidores fuertes de CYP2D6 como fluoxetina/paroxetina: aumentan niveles"),
            t(lang, "Inibidores fortes de CYP3A4 como cetoconazol/claritromicina: aumentam níveis", "Inhibidores fuertes de CYP3A4 como ketoconazol/claritromicina: aumentan niveles"),
            t(lang, "Indutores fortes de CYP3A4 como carbamazepina/rifampicina: reduzem níveis", "Inductores fuertes de CYP3A4 como carbamazepina/rifampicina: reducen niveles"),
            t(lang, "Álcool e depressores do SNC", "Alcohol y depresores del SNC"),
            t(lang, "Levodopa e agonistas dopaminérgicos", "Levodopa y agonistas dopaminérgicos")
          ],
          alerts: [
            t(lang, "Confirmar tolerância oral antes da primeira aplicação.", "Confirmar tolerancia oral antes de la primera aplicación."),
            t(lang, "Manter cobertura oral inicial conforme formulação.", "Mantener cobertura oral inicial según formulación."),
            t(lang, "Monitorar acatisia, insônia e impulsividade.", "Monitorizar acatisia, insomnio e impulsividad."),
            t(lang, "Ajustar dose se houver interações fortes por CYP2D6/CYP3A4.", "Ajustar dosis si hay interacciones fuertes por CYP2D6/CYP3A4."),
            t(lang, "Registrar data da aplicação para evitar atraso no intervalo.", "Registrar fecha de aplicación para evitar atraso en el intervalo.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Aripiprazole LAI Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    olanzapina_lai: {
      name: { pt: "Olanzapina LAI", es: "Olanzapina LAI" },
      category: "antipsicotico",
      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        return {
          name: t(lang, "Olanzapina LAI", "Olanzapina LAI"),
          class: t(lang, "Antipsicótico atípico injetável de longa ação", "Antipsicótico atípico inyectable de larga acción"),
          category: "antipsicotico",
          commercialNames: { br: ["Zyprexa Relprevv", "Olanzapina pamoato"], ar: ["Zypadhera", "Olanzapina pamoato"] },
          presentation: [
            t(lang, "Frasco 210 mg", "Frasco 210 mg"),
            t(lang, "Frasco 300 mg", "Frasco 300 mg"),
            t(lang, "Frasco 405 mg", "Frasco 405 mg")
          ],
          dose: {
            adulto: t(lang, "Esquizofrenia em manutenção: 150–300 mg IM a cada 2 semanas ou 300–405 mg IM a cada 4 semanas, conforme dose oral prévia e protocolo.", "Esquizofrenia en mantenimiento: 150–300 mg IM cada 2 semanas o 300–405 mg IM cada 4 semanas, según dosis oral previa y protocolo."),
            conversao: t(lang, "A dose depende da dose oral prévia de olanzapina e da resposta clínica.", "La dosis depende de la dosis oral previa de olanzapina y de la respuesta clínica."),
            maxDose: t(lang, "Dose máxima usual: 300 mg a cada 2 semanas ou 405 mg a cada 4 semanas.", "Dosis máxima habitual: 300 mg cada 2 semanas o 405 mg cada 4 semanas.")
          },
          indications: [
            t(lang, "Esquizofrenia em manutenção", "Esquizofrenia en mantenimiento"),
            t(lang, "Prevenção de recaídas psicóticas", "Prevención de recaídas psicóticas"),
            t(lang, "Baixa adesão ao tratamento oral", "Baja adherencia al tratamiento oral"),
            t(lang, "Pacientes previamente respondedores à olanzapina oral", "Pacientes previamente respondedores a olanzapina oral"),
            t(lang, "Psicose crônica com necessidade de formulação depot", "Psicosis crónica con necesidad de formulación depot"),
            t(lang, "Alternativa LAI quando outros antipsicóticos foram mal tolerados", "Alternativa LAI cuando otros antipsicóticos fueron mal tolerados")
          ],
          renalAdjustment: t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia ? t(lang, "Hepatopatia: usar com cautela e monitorar enzimas hepáticas.", "Hepatopatía: usar con cautela y monitorizar enzimas hepáticas.") : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Pamoato de olanzapina de liberação prolongada; antagonista 5HT2A e D2, com bloqueio H1, muscarínico e alfa-1.", "Pamoato de olanzapina de liberación prolongada; antagonista 5HT2A y D2, con bloqueo H1, muscarínico y alfa-1."),
          onset: t(lang, "Não é indicada para agitação aguda; exige tolerância prévia à olanzapina oral.", "No está indicada para agitación aguda; requiere tolerancia previa a olanzapina oral."),
          halfLife: t(lang, "Liberação prolongada por semanas; administração a cada 2 ou 4 semanas conforme esquema.", "Liberación prolongada por semanas; administración cada 2 o 4 semanas según esquema."),
          commonAdverseEffects: [
            t(lang, "Ganho de peso importante", "Aumento de peso importante"),
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Aumento do apetite", "Aumento del apetito"),
            t(lang, "Dislipidemia", "Dislipidemia"),
            t(lang, "Hiperglicemia", "Hiperglucemia"),
            t(lang, "Dor no local da injeção", "Dolor en el sitio de inyección")
          ],
          dangerousAdverseEffects: [
            t(lang, "Síndrome pós-injeção com delirium/sedação", "Síndrome postinyección con delirium/sedación"),
            t(lang, "Síndrome metabólica grave", "Síndrome metabólico grave"),
            t(lang, "Diabetes mellitus ou descompensação glicêmica", "Diabetes mellitus o descompensación glucémica"),
            t(lang, "Síndrome neuroléptica maligna", "Síndrome neuroléptico maligno"),
            t(lang, "Discinesia tardia", "Discinesia tardía"),
            t(lang, "Convulsões em predispostos", "Convulsiones en predispuestos")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: maior risco de sedação, quedas, eventos cerebrovasculares, síndrome metabólica e mortalidade em demência.", "Adulto mayor: mayor riesgo de sedación, caídas, eventos cerebrovasculares, síndrome metabólico y mortalidad en demencia.") : null,
            gestante ? t(lang, "Gestação: avaliar risco-benefício; longa duração dificulta retirada rápida.", "Embarazo: evaluar riesgo-beneficio; larga duración dificulta retirada rápida.") : null,
            lactante ? t(lang, "Lactação: monitorar sedação, irritabilidade e alimentação do lactente.", "Lactancia: monitorizar sedación, irritabilidad y alimentación del lactante.") : null,
            hepatopatia ? t(lang, "Hepatopatia: monitorar enzimas hepáticas e sedação.", "Hepatopatía: monitorizar enzimas hepáticas y sedación.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade à olanzapina", "Hipersensibilidad a olanzapina"),
            t(lang, "Ausência de tolerância prévia à olanzapina oral", "Ausencia de tolerancia previa a olanzapina oral"),
            t(lang, "Incapacidade de realizar observação pós-injeção obrigatória", "Incapacidad de realizar observación postinyección obligatoria"),
            t(lang, "Demência com psicose sem avaliação especializada", "Demencia con psicosis sin evaluación especializada")
          ],
          interactions: [
            t(lang, "Álcool e depressores do SNC: maior sedação", "Alcohol y depresores del SNC: mayor sedación"),
            t(lang, "Benzodiazepínicos: maior sedação e hipotensão", "Benzodiacepinas: mayor sedación e hipotensión"),
            t(lang, "Tabagismo: pode reduzir níveis por CYP1A2", "Tabaquismo: puede reducir niveles por CYP1A2"),
            t(lang, "Fluvoxamina/ciprofloxacino: podem aumentar níveis por CYP1A2", "Fluvoxamina/ciprofloxacino: pueden aumentar niveles por CYP1A2"),
            t(lang, "Levodopa e agonistas dopaminérgicos: antagonismo", "Levodopa y agonistas dopaminérgicos: antagonismo")
          ],
          alerts: [
            t(lang, "Exige observação pós-injeção por risco de síndrome pós-injeção com sedação/delirium.", "Requiere observación postinyección por riesgo de síndrome postinyección con sedación/delirium."),
            t(lang, "Confirmar tolerância oral antes de iniciar.", "Confirmar tolerancia oral antes de iniciar."),
            t(lang, "Monitorar peso, cintura, glicemia/HbA1c, lipídios e pressão arterial.", "Monitorizar peso, cintura, glucemia/HbA1c, lípidos y presión arterial."),
            t(lang, "Orientar paciente a não dirigir após aplicação conforme protocolo local.", "Orientar al paciente a no conducir tras la aplicación según protocolo local."),
            t(lang, "Registrar data, dose, lote e local de aplicação.", "Registrar fecha, dosis, lote y sitio de aplicación.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Olanzapine Pamoate LAI Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    }

  });

  Object.assign(window.PSICOFARMACOS_DRUGS_DB, {

    /* ── ESTABILIZADORES DO HUMOR ── */

    litio: {
      name: { pt: "Lítio", es: "Litio" },
      category: "estabilizador_humor",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const insuficienciaRenal = clcr < 60;

        return {
          name: t(lang, "Lítio", "Litio"),
          class: t(lang, "Estabilizador do humor", "Estabilizador del ánimo"),
          category: "estabilizador_humor",
          commercialNames: {
            br: ["Carbolitium", "Carbolitium CR", "Lítio"],
            ar: ["Ceglution", "Lithium", "Carbonato de Litio"]
          },
          presentation: [
            t(lang, "Carbonato de lítio comprimido 300 mg", "Carbonato de litio comprimido 300 mg"),
            t(lang, "Carbonato de lítio comprimido 450 mg CR", "Carbonato de litio comprimido 450 mg LP")
          ],
          dose: {
            adulto: t(
              lang,
              "Mania aguda: iniciar 300 mg VO 2–3x/dia; ajustar por litemia, resposta e tolerabilidade.",
              "Manía aguda: iniciar 300 mg VO 2–3 veces/día; ajustar por litemia, respuesta y tolerabilidad."
            ),
            manutencao: t(
              lang,
              "Manutenção: geralmente 600–1200 mg/dia, ajustado por nível sérico.",
              "Mantenimiento: generalmente 600–1200 mg/día, ajustado por nivel sérico."
            ),
            alvoSerico: t(
              lang,
              "Alvo sérico usual: 0,6–1,0 mEq/L na manutenção; 0,8–1,2 mEq/L na mania aguda.",
              "Objetivo sérico habitual: 0,6–1,0 mEq/L en mantenimiento; 0,8–1,2 mEq/L en manía aguda."
            ),
            maxDose: t(
              lang,
              "Dose máxima não deve ser fixa; individualizar obrigatoriamente pela litemia e função renal.",
              "La dosis máxima no debe ser fija; individualizar obligatoriamente por litemia y función renal."
            )
          },
          doseKg: {
            standard: t(
              lang,
              "Adultos: não se usa cálculo rotineiro por kg; ajustar por litemia.",
              "Adultos: no se usa cálculo rutinario por kg; ajustar por litemia."
            ),
            pediatric: t(
              lang,
              "Pediatria/adolescentes: uso especializado com ajuste por peso, litemia e função renal.",
              "Pediatría/adolescentes: uso especializado con ajuste por peso, litemia y función renal."
            ),
            maxDose: t(lang, "Ajustar por nível sérico, não por dose fixa.", "Ajustar por nivel sérico, no por dosis fija.")
          },
          indications: [
            t(lang, "Transtorno bipolar tipo I — mania aguda", "Trastorno bipolar tipo I — manía aguda"),
            t(lang, "Manutenção do transtorno bipolar", "Mantenimiento del trastorno bipolar"),
            t(lang, "Prevenção de recaídas maníacas", "Prevención de recaídas maníacas"),
            t(lang, "Prevenção de recaídas depressivas no bipolar", "Prevención de recaídas depresivas en bipolaridad"),
            t(lang, "Redução do risco suicida no transtorno bipolar", "Reducción del riesgo suicida en trastorno bipolar"),
            t(lang, "Potencialização em depressão resistente", "Potenciación en depresión resistente"),
            t(lang, "Transtorno esquizoafetivo bipolar em casos selecionados", "Trastorno esquizoafectivo bipolar en casos seleccionados")
          ],
          renalAdjustment: insuficienciaRenal
            ? t(
                lang,
                "Insuficiência renal: alto risco de toxicidade; reduzir dose, monitorar litemia mais frequentemente e evitar se doença renal importante.",
                "Insuficiencia renal: alto riesgo de toxicidad; reducir dosis, monitorizar litemia con mayor frecuencia y evitar si enfermedad renal importante."
              )
            : t(
                lang,
                "Sem ajuste inicial obrigatório se função renal normal, mas exige monitorização renal periódica.",
                "Sin ajuste inicial obligatorio si función renal normal, pero requiere monitorización renal periódica."
              ),
          hepaticAdjustment: t(
            lang,
            "Sem ajuste hepático habitual; eliminação é predominantemente renal.",
            "Sin ajuste hepático habitual; eliminación predominantemente renal."
          ),
          mechanism: t(
            lang,
            "Modula segundos mensageiros intracelulares, incluindo inibição da inositol monofosfatase e da GSK-3, estabilizando circuitos de humor.",
            "Modula segundos mensajeros intracelulares, incluyendo inhibición de inositol monofosfatasa y GSK-3, estabilizando circuitos del ánimo."
          ),
          onset: t(
            lang,
            "Efeito antimaníaco geralmente em 5–10 dias; efeito preventivo exige uso contínuo.",
            "Efecto antimaníaco generalmente en 5–10 días; efecto preventivo requiere uso continuo."
          ),
          halfLife: t(
            lang,
            "Vida média aproximada: 18–36 horas; pode aumentar em idosos e insuficiência renal.",
            "Vida media aproximada: 18–36 horas; puede aumentar en adultos mayores e insuficiencia renal."
          ),
          commonAdverseEffects: [
            t(lang, "Tremor fino", "Temblor fino"),
            t(lang, "Náuseas", "Náuseas"),
            t(lang, "Diarreia", "Diarrea"),
            t(lang, "Poliúria", "Poliuria"),
            t(lang, "Polidipsia", "Polidipsia"),
            t(lang, "Ganho de peso", "Aumento de peso"),
            t(lang, "Acne", "Acné"),
            t(lang, "Sonolência ou lentificação cognitiva", "Somnolencia o enlentecimiento cognitivo")
          ],
          dangerousAdverseEffects: [
            t(lang, "Toxicidade por lítio", "Toxicidad por litio"),
            t(lang, "Ataxia, confusão, disartria e convulsões na intoxicação", "Ataxia, confusión, disartria y convulsiones en intoxicación"),
            t(lang, "Nefropatia túbulo-intersticial crônica", "Nefropatía túbulo-intersticial crónica"),
            t(lang, "Diabetes insipidus nefrogênico", "Diabetes insípida nefrogénica"),
            t(lang, "Hipotireoidismo", "Hipotiroidismo"),
            t(lang, "Hiperparatireoidismo/hipercalcemia", "Hiperparatiroidismo/hipercalcemia"),
            t(lang, "Arritmias em pacientes predispostos", "Arritmias en pacientes predispuestos")
          ],
          risksByPatient: [
            idade >= 65
              ? t(lang, "Idoso: maior risco de toxicidade; usar dose menor e monitorar litemia, rim e sódio com maior frequência.", "Adulto mayor: mayor riesgo de toxicidad; usar dosis menor y monitorizar litemia, riñón y sodio con mayor frecuencia.")
              : null,
            gestante
              ? t(lang, "Gestação: avaliar risco-benefício; atenção ao risco cardíaco fetal, especialmente no 1º trimestre, e ajustar dose no fim da gestação.", "Embarazo: evaluar riesgo-beneficio; atención al riesgo cardíaco fetal, especialmente en 1º trimestre, y ajustar dosis al final del embarazo.")
              : null,
            lactante
              ? t(lang, "Lactação: geralmente evitar ou monitorar lítio, função renal e tireoide do lactente com especialista.", "Lactancia: generalmente evitar o monitorizar litio, función renal y tiroides del lactante con especialista.")
              : null,
            insuficienciaRenal
              ? t(lang, "Insuficiência renal: risco elevado de acúmulo e toxicidade.", "Insuficiencia renal: riesgo elevado de acumulación y toxicidad.")
              : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Insuficiência renal grave", "Insuficiencia renal grave"),
            t(lang, "Desidratação importante ou depleção de sódio", "Deshidratación importante o depleción de sodio"),
            t(lang, "Doença cardíaca grave sem avaliação especializada", "Enfermedad cardíaca grave sin evaluación especializada"),
            t(lang, "Uso sem possibilidade de monitorar litemia", "Uso sin posibilidad de monitorizar litemia"),
            t(lang, "Hipersensibilidade ao lítio", "Hipersensibilidad al litio")
          ],
          interactions: [
            t(lang, "AINEs: podem aumentar litemia", "AINEs: pueden aumentar litemia"),
            t(lang, "IECA/BRA: podem aumentar litemia", "IECA/ARA II: pueden aumentar litemia"),
            t(lang, "Diuréticos tiazídicos: aumentam risco de toxicidade", "Diuréticos tiazídicos: aumentan riesgo de toxicidad"),
            t(lang, "Diuréticos de alça: podem alterar litemia", "Diuréticos de asa: pueden alterar litemia"),
            t(lang, "Antipsicóticos: maior risco de neurotoxicidade em alguns casos", "Antipsicóticos: mayor riesgo de neurotoxicidad en algunos casos"),
            t(lang, "ISRS/ISRN: risco serotoninérgico e tremor em associação", "ISRS/IRSN: riesgo serotoninérgico y temblor en asociación")
          ],
          alerts: [
            t(lang, "Solicitar litemia 5–7 dias após início ou ajuste de dose.", "Solicitar litemia 5–7 días tras inicio o ajuste de dosis."),
            t(lang, "Monitorar creatinina/ClCr, TSH, cálcio, eletrólitos e ECG se risco cardíaco.", "Monitorizar creatinina/ClCr, TSH, calcio, electrolitos y ECG si riesgo cardíaco."),
            t(lang, "Orientar hidratação regular e evitar mudanças bruscas de sal na dieta.", "Orientar hidratación regular y evitar cambios bruscos de sal en la dieta."),
            t(lang, "Suspender e avaliar urgente se vômitos, diarreia intensa, ataxia, confusão ou tremor grosseiro.", "Suspender y evaluar urgente si vómitos, diarrea intensa, ataxia, confusión o temblor grueso."),
            t(lang, "Evitar automedicação com AINEs.", "Evitar automedicación con AINEs.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Lithium Prescribing Information",
            "CANMAT Bipolar Guidelines",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    acido_valproico: {
      name: { pt: "Ácido valpróico / Valproato", es: "Ácido valproico / Valproato" },
      category: "estabilizador_humor",

      calculate: (paciente, lang = "pt") => {
        const peso = Number(paciente.peso || 0);
        const idade = Number(paciente.idade || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);

        const doseMin = peso * 10;
        const doseMax = peso * 15;

        return {
          name: t(lang, "Ácido valpróico / Valproato", "Ácido valproico / Valproato"),
          class: t(lang, "Estabilizador do humor e anticonvulsivante", "Estabilizador del ánimo y anticonvulsivante"),
          category: "estabilizador_humor",
          commercialNames: {
            br: ["Depakene", "Depakote", "Divalcon", "Valpakine"],
            ar: ["Depakene", "Valcote", "Valproato", "Divalproato"]
          },
          presentation: [
            t(lang, "Cápsula/comprimido 250 mg", "Cápsula/comprimido 250 mg"),
            t(lang, "Comprimido 500 mg", "Comprimido 500 mg"),
            t(lang, "Comprimido de liberação prolongada 500 mg", "Comprimido de liberación prolongada 500 mg"),
            t(lang, "Solução/xarope 250 mg/5 mL", "Solución/jarabe 250 mg/5 mL"),
            t(lang, "Frasco-ampola EV 500 mg", "Frasco ampolla IV 500 mg")
          ],
          dose: {
            adulto: t(
              lang,
              `Mania aguda/epilepsia: iniciar 10–15 mg/kg/dia. Para ${peso || 0} kg: ${doseMin.toFixed(0)}–${doseMax.toFixed(0)} mg/dia.`,
              `Manía aguda/epilepsia: iniciar 10–15 mg/kg/día. Para ${peso || 0} kg: ${doseMin.toFixed(0)}–${doseMax.toFixed(0)} mg/día.`
            ),
            manutencao: t(
              lang,
              "Dose usual: 750–2000 mg/dia, ajustada por resposta, tolerabilidade e nível sérico.",
              "Dosis habitual: 750–2000 mg/día, ajustada por respuesta, tolerabilidad y nivel sérico."
            ),
            alvoSerico: t(
              lang,
              "Nível sérico usual: 50–100 mcg/mL; em mania pode-se usar 50–125 mcg/mL conforme protocolo.",
              "Nivel sérico habitual: 50–100 mcg/mL; en manía puede usarse 50–125 mcg/mL según protocolo."
            ),
            maxDose: t(
              lang,
              "Dose máxima usual: 60 mg/kg/dia, com monitorização especializada.",
              "Dosis máxima habitual: 60 mg/kg/día, con monitorización especializada."
            )
          },
          doseKg: {
            standard: t(lang, "10–15 mg/kg/dia inicialmente.", "10–15 mg/kg/día inicialmente."),
            severe: t(
              lang,
              "Pode titular gradualmente até 20–60 mg/kg/dia conforme indicação e nível sérico.",
              "Puede titularse gradualmente hasta 20–60 mg/kg/día según indicación y nivel sérico."
            ),
            maxDose: t(lang, "60 mg/kg/dia", "60 mg/kg/día")
          },
          indications: [
            t(lang, "Transtorno bipolar — mania aguda", "Trastorno bipolar — manía aguda"),
            t(lang, "Episódios mistos do transtorno bipolar", "Episodios mixtos del trastorno bipolar"),
            t(lang, "Manutenção do transtorno bipolar em casos selecionados", "Mantenimiento del trastorno bipolar en casos seleccionados"),
            t(lang, "Epilepsia generalizada", "Epilepsia generalizada"),
            t(lang, "Epilepsia focal", "Epilepsia focal"),
            t(lang, "Profilaxia de enxaqueca", "Profilaxis de migraña"),
            t(lang, "Agitação/impulsividade associada a transtornos do humor em casos selecionados", "Agitación/impulsividad asociada a trastornos del ánimo en casos seleccionados")
          ],
          renalAdjustment: t(
            lang,
            "Sem ajuste renal habitual, mas interpretar nível sérico com cautela se hipoalbuminemia/uremia.",
            "Sin ajuste renal habitual, pero interpretar nivel sérico con cautela si hipoalbuminemia/uremia."
          ),
          hepaticAdjustment: hepatopatia
            ? t(
                lang,
                "Hepatopatia: contraindicado em doença hepática significativa; risco de hepatotoxicidade grave.",
                "Hepatopatía: contraindicado en enfermedad hepática significativa; riesgo de hepatotoxicidad grave."
              )
            : t(
                lang,
                "Monitorar função hepática antes e durante o tratamento.",
                "Monitorizar función hepática antes y durante el tratamiento."
              ),
          mechanism: t(
            lang,
            "Aumenta neurotransmissão GABAérgica, modula canais de sódio e cálcio e reduz excitabilidade neuronal.",
            "Aumenta neurotransmisión GABAérgica, modula canales de sodio y calcio y reduce excitabilidad neuronal."
          ),
          onset: t(
            lang,
            "Efeito antimaníaco pode ocorrer em alguns dias; estabilização plena exige ajuste por nível sérico e seguimento.",
            "Efecto antimaníaco puede ocurrir en algunos días; estabilización plena requiere ajuste por nivel sérico y seguimiento."
          ),
          halfLife: t(
            lang,
            "Vida média aproximada: 9–16 horas em adultos; varia com formulação e interações.",
            "Vida media aproximada: 9–16 horas en adultos; varía con formulación e interacciones."
          ),
          commonAdverseEffects: [
            t(lang, "Náuseas", "Náuseas"),
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Tremor", "Temblor"),
            t(lang, "Ganho de peso", "Aumento de peso"),
            t(lang, "Queda de cabelo", "Caída de cabello"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Diarreia", "Diarrea"),
            t(lang, "Aumento de transaminases", "Aumento de transaminasas")
          ],
          dangerousAdverseEffects: [
            t(lang, "Hepatotoxicidade grave", "Hepatotoxicidad grave"),
            t(lang, "Pancreatite", "Pancreatitis"),
            t(lang, "Teratogenicidade importante", "Teratogenicidad importante"),
            t(lang, "Trombocitopenia", "Trombocitopenia"),
            t(lang, "Hiperamonemia/encefalopatia", "Hiperamonemia/encefalopatía"),
            t(lang, "Reação cutânea grave rara", "Reacción cutánea grave rara"),
            t(lang, "Síndrome dos ovários policísticos/alterações endócrinas", "Síndrome de ovario poliquístico/alteraciones endocrinas")
          ],
          risksByPatient: [
            idade >= 65
              ? t(lang, "Idoso: maior risco de sedação, tremor, trombocitopenia e interações; iniciar baixo.", "Adulto mayor: mayor riesgo de sedación, temblor, trombocitopenia e interacciones; iniciar bajo.")
              : null,
            gestante
              ? t(lang, "Gestação: evitar/contraindicado salvo ausência de alternativa; alto risco de malformações e prejuízo neurodesenvolvimental.", "Embarazo: evitar/contraindicado salvo ausencia de alternativa; alto riesgo de malformaciones y daño del neurodesarrollo.")
              : null,
            lactante
              ? t(lang, "Lactação: geralmente compatível com monitorização; observar icterícia, sangramento ou sedação no lactente.", "Lactancia: generalmente compatible con monitorización; observar ictericia, sangrado o sedación en lactante.")
              : null,
            hepatopatia
              ? t(lang, "Hepatopatia: contraindicado se doença hepática significativa.", "Hepatopatía: contraindicado si enfermedad hepática significativa.")
              : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Doença hepática significativa", "Enfermedad hepática significativa"),
            t(lang, "Distúrbio do ciclo da ureia", "Trastorno del ciclo de la urea"),
            t(lang, "Gestação, especialmente para transtornos psiquiátricos ou enxaqueca quando houver alternativa", "Embarazo, especialmente para trastornos psiquiátricos o migraña cuando haya alternativa"),
            t(lang, "Doença mitocondrial por mutação POLG", "Enfermedad mitocondrial por mutación POLG"),
            t(lang, "Hipersensibilidade ao valproato", "Hipersensibilidad al valproato"),
            t(lang, "Pancreatite prévia associada ao fármaco", "Pancreatitis previa asociada al fármaco")
          ],
          interactions: [
            t(lang, "Lamotrigina: aumenta níveis e risco de rash grave", "Lamotrigina: aumenta niveles y riesgo de rash grave"),
            t(lang, "Carbapenêmicos: reduzem drasticamente níveis de valproato", "Carbapenémicos: reducen drásticamente niveles de valproato"),
            t(lang, "AAS: pode aumentar fração livre de valproato", "AAS: puede aumentar fracción libre de valproato"),
            t(lang, "Varfarina/anticoagulantes: maior risco de sangramento", "Warfarina/anticoagulantes: mayor riesgo de sangrado"),
            t(lang, "Fenitoína/fenobarbital/carbamazepina: interações bidirecionais relevantes", "Fenitoína/fenobarbital/carbamazepina: interacciones bidireccionales relevantes"),
            t(lang, "Álcool e sedativos: maior depressão do SNC", "Alcohol y sedantes: mayor depresión del SNC")
          ],
          alerts: [
            t(lang, "Evitar em mulheres com potencial gestacional sem planejamento e consentimento claro.", "Evitar en mujeres con potencial gestacional sin planificación y consentimiento claro."),
            t(lang, "Solicitar TGO/TGP, bilirrubina, hemograma/plaquetas e peso antes e durante o tratamento.", "Solicitar TGO/TGP, bilirrubina, hemograma/plaquetas y peso antes y durante el tratamiento."),
            t(lang, "Monitorar nível sérico após início/ajustes e se suspeita de toxicidade.", "Monitorizar nivel sérico tras inicio/ajustes y si sospecha de toxicidad."),
            t(lang, "Investigar dor abdominal intensa, vômitos persistentes ou letargia por risco de pancreatite/hiperamonemia.", "Investigar dolor abdominal intenso, vómitos persistentes o letargo por riesgo de pancreatitis/hiperamonemia."),
            t(lang, "Não associar com carbapenêmicos se possível.", "No asociar con carbapenémicos si es posible.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Valproate Prescribing Information",
            "CANMAT Bipolar Guidelines",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    }

  });

  Object.assign(window.PSICOFARMACOS_DRUGS_DB, {

    valproato_de_sodio: {
      name: { pt: "Valproato de sódio", es: "Valproato de sodio" },
      category: "estabilizador_humor",

      calculate: (paciente, lang = "pt") => {
        const peso = Number(paciente.peso || 0);
        const idade = Number(paciente.idade || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);

        const doseMin = peso * 10;
        const doseMax = peso * 15;

        return {
          name: t(lang, "Valproato de sódio", "Valproato de sodio"),
          class: t(lang, "Estabilizador do humor e anticonvulsivante", "Estabilizador del ánimo y anticonvulsivante"),
          category: "estabilizador_humor",
          commercialNames: {
            br: ["Depakene", "Valpakine", "Valproato de Sódio"],
            ar: ["Depakene", "Valcote", "Valproato de Sodio"]
          },
          presentation: [
            t(lang, "Comprimido/cápsula 250 mg", "Comprimido/cápsula 250 mg"),
            t(lang, "Comprimido 500 mg", "Comprimido 500 mg"),
            t(lang, "Solução/xarope 250 mg/5 mL", "Solución/jarabe 250 mg/5 mL"),
            t(lang, "Frasco-ampola EV 500 mg", "Frasco ampolla IV 500 mg")
          ],
          dose: {
            adulto: t(
              lang,
              `Iniciar 10–15 mg/kg/dia. Para ${peso || 0} kg: ${doseMin.toFixed(0)}–${doseMax.toFixed(0)} mg/dia.`,
              `Iniciar 10–15 mg/kg/día. Para ${peso || 0} kg: ${doseMin.toFixed(0)}–${doseMax.toFixed(0)} mg/día.`
            ),
            manutencao: t(
              lang,
              "Dose usual: 750–2000 mg/dia, ajustada por resposta, tolerabilidade e nível sérico.",
              "Dosis habitual: 750–2000 mg/día, ajustada por respuesta, tolerabilidad y nivel sérico."
            ),
            alvoSerico: t(
              lang,
              "Nível sérico usual: 50–100 mcg/mL; em mania pode-se usar 50–125 mcg/mL conforme protocolo.",
              "Nivel sérico habitual: 50–100 mcg/mL; en manía puede usarse 50–125 mcg/mL según protocolo."
            ),
            maxDose: t(
              lang,
              "Dose máxima usual: 60 mg/kg/dia com monitorização especializada.",
              "Dosis máxima habitual: 60 mg/kg/día con monitorización especializada."
            )
          },
          doseKg: {
            standard: t(lang, "10–15 mg/kg/dia inicialmente.", "10–15 mg/kg/día inicialmente."),
            severe: t(lang, "Titular até 20–60 mg/kg/dia conforme indicação e nível sérico.", "Titular hasta 20–60 mg/kg/día según indicación y nivel sérico."),
            maxDose: t(lang, "60 mg/kg/dia", "60 mg/kg/día")
          },
          indications: [
            t(lang, "Transtorno bipolar — mania aguda", "Trastorno bipolar — manía aguda"),
            t(lang, "Episódios mistos do transtorno bipolar", "Episodios mixtos del trastorno bipolar"),
            t(lang, "Manutenção do transtorno bipolar em casos selecionados", "Mantenimiento del trastorno bipolar en casos seleccionados"),
            t(lang, "Epilepsia generalizada", "Epilepsia generalizada"),
            t(lang, "Epilepsia focal", "Epilepsia focal"),
            t(lang, "Estado de mal epiléptico em formulação EV", "Estado epiléptico en formulación IV"),
            t(lang, "Profilaxia de enxaqueca", "Profilaxis de migraña"),
            t(lang, "Impulsividade/agressividade associada a transtornos do humor em casos selecionados", "Impulsividad/agresividad asociada a trastornos del ánimo en casos seleccionados")
          ],
          renalAdjustment: t(
            lang,
            "Sem ajuste renal habitual, mas interpretar nível sérico com cautela em uremia ou hipoalbuminemia.",
            "Sin ajuste renal habitual, pero interpretar nivel sérico con cautela en uremia o hipoalbuminemia."
          ),
          hepaticAdjustment: hepatopatia
            ? t(
                lang,
                "Hepatopatia: contraindicado em doença hepática significativa pelo risco de hepatotoxicidade grave.",
                "Hepatopatía: contraindicado en enfermedad hepática significativa por riesgo de hepatotoxicidad grave."
              )
            : t(
                lang,
                "Monitorar função hepática antes e durante o tratamento.",
                "Monitorizar función hepática antes y durante el tratamiento."
              ),
          mechanism: t(
            lang,
            "Aumenta a neurotransmissão GABAérgica, bloqueia canais de sódio e modula canais de cálcio, reduzindo excitabilidade neuronal.",
            "Aumenta la neurotransmisión GABAérgica, bloquea canales de sodio y modula canales de calcio, reduciendo excitabilidad neuronal."
          ),
          onset: t(
            lang,
            "Efeito antimaníaco pode surgir em alguns dias; estabilização plena exige ajuste por nível sérico.",
            "El efecto antimaníaco puede aparecer en algunos días; estabilización plena requiere ajuste por nivel sérico."
          ),
          halfLife: t(
            lang,
            "Vida média aproximada: 9–16 horas em adultos.",
            "Vida media aproximada: 9–16 horas en adultos."
          ),
          commonAdverseEffects: [
            t(lang, "Náuseas", "Náuseas"),
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Tremor", "Temblor"),
            t(lang, "Ganho de peso", "Aumento de peso"),
            t(lang, "Queda de cabelo", "Caída de cabello"),
            t(lang, "Diarreia", "Diarrea"),
            t(lang, "Aumento de transaminases", "Aumento de transaminasas")
          ],
          dangerousAdverseEffects: [
            t(lang, "Hepatotoxicidade grave", "Hepatotoxicidad grave"),
            t(lang, "Pancreatite", "Pancreatitis"),
            t(lang, "Teratogenicidade importante", "Teratogenicidad importante"),
            t(lang, "Trombocitopenia", "Trombocitopenia"),
            t(lang, "Hiperamonemia/encefalopatia", "Hiperamonemia/encefalopatía"),
            t(lang, "Reação cutânea grave rara", "Reacción cutánea grave rara"),
            t(lang, "Síndrome dos ovários policísticos/alterações endócrinas", "Síndrome de ovario poliquístico/alteraciones endocrinas")
          ],
          risksByPatient: [
            idade >= 65
              ? t(lang, "Idoso: maior risco de sedação, tremor, trombocitopenia e interações.", "Adulto mayor: mayor riesgo de sedación, temblor, trombocitopenia e interacciones.")
              : null,
            gestante
              ? t(lang, "Gestação: evitar/contraindicado quando houver alternativa; alto risco de malformações e dano neurodesenvolvimental.", "Embarazo: evitar/contraindicado cuando haya alternativa; alto riesgo de malformaciones y daño del neurodesarrollo.")
              : null,
            lactante
              ? t(lang, "Lactação: geralmente compatível com monitorização; observar icterícia, sangramento ou sedação no lactente.", "Lactancia: generalmente compatible con monitorización; observar ictericia, sangrado o sedación en lactante.")
              : null,
            hepatopatia
              ? t(lang, "Hepatopatia: contraindicado se doença hepática significativa.", "Hepatopatía: contraindicado si enfermedad hepática significativa.")
              : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Doença hepática significativa", "Enfermedad hepática significativa"),
            t(lang, "Distúrbio do ciclo da ureia", "Trastorno del ciclo de la urea"),
            t(lang, "Gestação para transtorno bipolar/enxaqueca quando houver alternativa", "Embarazo para trastorno bipolar/migraña cuando haya alternativa"),
            t(lang, "Doença mitocondrial por mutação POLG", "Enfermedad mitocondrial por mutación POLG"),
            t(lang, "Pancreatite prévia associada ao fármaco", "Pancreatitis previa asociada al fármaco"),
            t(lang, "Hipersensibilidade ao valproato", "Hipersensibilidad al valproato")
          ],
          interactions: [
            t(lang, "Lamotrigina: aumenta níveis e risco de rash grave", "Lamotrigina: aumenta niveles y riesgo de rash grave"),
            t(lang, "Carbapenêmicos: reduzem drasticamente níveis de valproato", "Carbapenémicos: reducen drásticamente niveles de valproato"),
            t(lang, "AAS: pode aumentar fração livre de valproato", "AAS: puede aumentar fracción libre de valproato"),
            t(lang, "Varfarina/anticoagulantes: maior risco de sangramento", "Warfarina/anticoagulantes: mayor riesgo de sangrado"),
            t(lang, "Fenitoína/fenobarbital/carbamazepina: interações bidirecionais relevantes", "Fenitoína/fenobarbital/carbamazepina: interacciones bidireccionales relevantes"),
            t(lang, "Álcool e sedativos: maior depressão do SNC", "Alcohol y sedantes: mayor depresión del SNC")
          ],
          alerts: [
            t(lang, "Evitar em mulheres com potencial gestacional sem planejamento e consentimento claro.", "Evitar en mujeres con potencial gestacional sin planificación y consentimiento claro."),
            t(lang, "Solicitar TGO/TGP, bilirrubina, hemograma/plaquetas e peso antes e durante o tratamento.", "Solicitar TGO/TGP, bilirrubina, hemograma/plaquetas y peso antes y durante el tratamiento."),
            t(lang, "Monitorar nível sérico após início/ajustes e se suspeita de toxicidade.", "Monitorizar nivel sérico tras inicio/ajustes y si sospecha de toxicidad."),
            t(lang, "Investigar dor abdominal intensa, vômitos persistentes ou letargia por risco de pancreatite/hiperamonemia.", "Investigar dolor abdominal intenso, vómitos persistentes o letargo por riesgo de pancreatitis/hiperamonemia."),
            t(lang, "Não associar com carbapenêmicos se possível.", "No asociar con carbapenémicos si es posible.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Valproate Prescribing Information",
            "CANMAT Bipolar Guidelines",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    lamotrigina: {
      name: { pt: "Lamotrigina", es: "Lamotrigina" },
      category: "estabilizador_humor",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const usaValproato = Boolean(paciente.usaValproato);
        const usaIndutor = Boolean(paciente.usaIndutorEnzimatico);

        return {
          name: t(lang, "Lamotrigina", "Lamotrigina"),
          class: t(lang, "Estabilizador do humor e anticonvulsivante", "Estabilizador del ánimo y anticonvulsivante"),
          category: "estabilizador_humor",
          commercialNames: {
            br: ["Lamictal", "Neural", "Lamotrigina EMS", "Lamotrigina Eurofarma"],
            ar: ["Lamictal", "Lamotrigina Gador", "Lamotrigina Bagó", "Lamirax"]
          },
          presentation: [
            t(lang, "Comprimido 25 mg", "Comprimido 25 mg"),
            t(lang, "Comprimido 50 mg", "Comprimido 50 mg"),
            t(lang, "Comprimido 100 mg", "Comprimido 100 mg"),
            t(lang, "Comprimido 200 mg", "Comprimido 200 mg"),
            t(lang, "Comprimido dispersível/mastigável", "Comprimido dispersable/masticable")
          ],
          dose: {
            adulto: usaValproato
              ? t(
                  lang,
                  "Com valproato: iniciar 25 mg em dias alternados por 2 semanas; depois 25 mg/dia por 2 semanas; titular lentamente.",
                  "Con valproato: iniciar 25 mg en días alternos por 2 semanas; luego 25 mg/día por 2 semanas; titular lentamente."
                )
              : usaIndutor
              ? t(
                  lang,
                  "Com indutores enzimáticos: iniciar 50 mg/dia por 2 semanas; depois 50 mg 12/12h por 2 semanas; titular conforme resposta.",
                  "Con inductores enzimáticos: iniciar 50 mg/día por 2 semanas; luego 50 mg cada 12 h por 2 semanas; titular según respuesta."
                )
              : t(
                  lang,
                  "Sem valproato/indutores: iniciar 25 mg/dia por 2 semanas; depois 50 mg/dia por 2 semanas; titular gradualmente.",
                  "Sin valproato/inductores: iniciar 25 mg/día por 2 semanas; luego 50 mg/día por 2 semanas; titular gradualmente."
                ),
            manutencao: t(
              lang,
              "Manutenção bipolar usual: 100–200 mg/dia; pode variar conforme interações.",
              "Mantenimiento bipolar habitual: 100–200 mg/día; puede variar según interacciones."
            ),
            epilepsia: t(
              lang,
              "Epilepsia: dose varia conforme idade, peso e fármacos associados.",
              "Epilepsia: dosis varía según edad, peso y fármacos asociados."
            ),
            maxDose: t(
              lang,
              "Dose máxima depende das interações: menor com valproato, maior com indutores enzimáticos.",
              "Dosis máxima depende de interacciones: menor con valproato, mayor con inductores enzimáticos."
            )
          },
          doseKg: {
            standard: t(
              lang,
              "Adultos: não se usa cálculo rotineiro por kg para bipolaridade.",
              "Adultos: no se usa cálculo rutinario por kg para bipolaridad."
            ),
            pediatric: t(
              lang,
              "Pediatria/epilepsia: calcular por kg e ajustar conforme associação com valproato ou indutores.",
              "Pediatría/epilepsia: calcular por kg y ajustar según asociación con valproato o inductores."
            ),
            maxDose: t(lang, "Individualizar por indicação e interações.", "Individualizar por indicación e interacciones.")
          },
          indications: [
            t(lang, "Transtorno bipolar — manutenção", "Trastorno bipolar — mantenimiento"),
            t(lang, "Prevenção de episódios depressivos no transtorno bipolar", "Prevención de episodios depresivos en trastorno bipolar"),
            t(lang, "Depressão bipolar em casos selecionados", "Depresión bipolar en casos seleccionados"),
            t(lang, "Epilepsia focal", "Epilepsia focal"),
            t(lang, "Epilepsia generalizada", "Epilepsia generalizada"),
            t(lang, "Síndrome de Lennox-Gastaut como adjuvante", "Síndrome de Lennox-Gastaut como coadyuvante"),
            t(lang, "Alternativa quando se deseja baixo risco de ganho de peso", "Alternativa cuando se desea bajo riesgo de aumento de peso")
          ],
          renalAdjustment: t(
            lang,
            "Insuficiência renal: geralmente sem ajuste inicial, mas pode requerer cautela em doença renal avançada.",
            "Insuficiencia renal: generalmente sin ajuste inicial, pero puede requerir cautela en enfermedad renal avanzada."
          ),
          hepaticAdjustment: hepatopatia
            ? t(
                lang,
                "Hepatopatia moderada/grave: considerar reduzir dose e titular lentamente.",
                "Hepatopatía moderada/grave: considerar reducir dosis y titular lentamente."
              )
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(
            lang,
            "Bloqueia canais de sódio voltagem-dependentes e reduz liberação de glutamato, estabilizando excitabilidade neuronal.",
            "Bloquea canales de sodio voltaje-dependientes y reduce liberación de glutamato, estabilizando excitabilidad neuronal."
          ),
          onset: t(
            lang,
            "Não é fármaco para mania aguda; benefício preventivo/depressivo surge após titulação lenta em semanas.",
            "No es fármaco para manía aguda; beneficio preventivo/depresivo aparece tras titulación lenta en semanas."
          ),
          halfLife: t(
            lang,
            "Vida média aproximada: 25–33 horas; aumenta muito com valproato e reduz com indutores enzimáticos.",
            "Vida media aproximada: 25–33 horas; aumenta mucho con valproato y reduce con inductores enzimáticos."
          ),
          commonAdverseEffects: [
            t(lang, "Cefaleia", "Cefalea"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Náuseas", "Náuseas"),
            t(lang, "Diplopia", "Diplopía"),
            t(lang, "Ataxia", "Ataxia"),
            t(lang, "Sonolência ou insônia", "Somnolencia o insomnio"),
            t(lang, "Rash cutâneo leve", "Rash cutáneo leve")
          ],
          dangerousAdverseEffects: [
            t(lang, "Síndrome de Stevens-Johnson", "Síndrome de Stevens-Johnson"),
            t(lang, "Necrólise epidérmica tóxica", "Necrólisis epidérmica tóxica"),
            t(lang, "DRESS", "DRESS"),
            t(lang, "Meningite asséptica rara", "Meningitis aséptica rara"),
            t(lang, "Hemofagocitose/HLH rara", "Hemofagocitosis/HLH rara"),
            t(lang, "Ideação suicida", "Ideación suicida")
          ],
          risksByPatient: [
            idade >= 65
              ? t(lang, "Idoso: titular com cautela; maior sensibilidade a tontura, ataxia e interações.", "Adulto mayor: titular con cautela; mayor sensibilidad a mareos, ataxia e interacciones.")
              : null,
            gestante
              ? t(lang, "Gestação: pode exigir aumento de dose por maior depuração; monitorar níveis/controle clínico e ajustar pós-parto.", "Embarazo: puede requerir aumento de dosis por mayor depuración; monitorizar niveles/control clínico y ajustar posparto.")
              : null,
            lactante
              ? t(lang, "Lactação: passa ao leite; monitorar rash, sonolência, sucção e ganho ponderal do lactente.", "Lactancia: pasa a la leche; monitorizar rash, somnolencia, succión y ganancia ponderal del lactante.")
              : null,
            hepatopatia
              ? t(lang, "Hepatopatia: reduzir dose se moderada/grave.", "Hepatopatía: reducir dosis si moderada/grave.")
              : null,
            usaValproato
              ? t(lang, "Uso com valproato: alto risco de aumento de lamotrigina e rash grave; titular muito lentamente.", "Uso con valproato: alto riesgo de aumento de lamotrigina y rash grave; titular muy lentamente.")
              : null,
            usaIndutor
              ? t(lang, "Uso com indutor enzimático: pode exigir doses maiores por maior depuração.", "Uso con inductor enzimático: puede requerir dosis mayores por mayor depuración.")
              : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade à lamotrigina", "Hipersensibilidad a lamotrigina"),
            t(lang, "História de síndrome de Stevens-Johnson ou DRESS associada à lamotrigina", "Antecedente de síndrome de Stevens-Johnson o DRESS asociada a lamotrigina"),
            t(lang, "Reinício em dose alta após interrupção prolongada", "Reinicio en dosis alta tras interrupción prolongada")
          ],
          interactions: [
            t(lang, "Valproato: aumenta níveis de lamotrigina e risco de rash grave", "Valproato: aumenta niveles de lamotrigina y riesgo de rash grave"),
            t(lang, "Carbamazepina, fenitoína, fenobarbital, primidona: reduzem níveis", "Carbamazepina, fenitoína, fenobarbital, primidona: reducen niveles"),
            t(lang, "Rifampicina: reduz níveis", "Rifampicina: reduce niveles"),
            t(lang, "Anticoncepcionais com estrogênio: reduzem níveis de lamotrigina", "Anticonceptivos con estrógeno: reducen niveles de lamotrigina"),
            t(lang, "Suspensão de anticoncepcional estrogênico: pode aumentar níveis de lamotrigina", "Suspensión de anticonceptivo estrogénico: puede aumentar niveles de lamotrigina")
          ],
          alerts: [
            t(lang, "Titulação lenta é obrigatória para reduzir risco de rash grave.", "La titulación lenta es obligatoria para reducir riesgo de rash grave."),
            t(lang, "Suspender e avaliar imediatamente se rash com febre, mucosite, bolhas ou sintomas sistêmicos.", "Suspender y evaluar inmediatamente si rash con fiebre, mucositis, ampollas o síntomas sistémicos."),
            t(lang, "Não é tratamento de escolha para mania aguda.", "No es tratamiento de elección para manía aguda."),
            t(lang, "Se interromper por vários dias, pode ser necessário reiniciar titulação.", "Si se interrumpe por varios días, puede ser necesario reiniciar titulación."),
            t(lang, "Ajustar esquema se usa valproato, indutores ou anticoncepcional estrogênico.", "Ajustar esquema si usa valproato, inductores o anticonceptivo estrogénico.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Lamotrigine Prescribing Information",
            "CANMAT Bipolar Guidelines",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    }

  });

  Object.assign(window.PSICOFARMACOS_DRUGS_DB, {

    carbamazepina: {
      name: { pt: "Carbamazepina", es: "Carbamazepina" },
      category: "estabilizador_humor",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);

        return {
          name: t(lang, "Carbamazepina", "Carbamazepina"),

          class: t(
            lang,
            "Estabilizador do humor e anticonvulsivante",
            "Estabilizador del ánimo y anticonvulsivante"
          ),

          category: "estabilizador_humor",

          commercialNames: {
            br: ["Tegretol", "Tegretol CR", "Carbamazepina EMS"],
            ar: ["Tegretol", "Carbamazepina Gador", "Carbamazepina Denver Farma"]
          },

          presentation: [
            t(lang, "Comprimido 200 mg", "Comprimido 200 mg"),
            t(lang, "Comprimido 400 mg CR", "Comprimido 400 mg LP"),
            t(lang, "Suspensão oral 100 mg/5 mL", "Suspensión oral 100 mg/5 mL")
          ],

          dose: {
            adulto: t(
              lang,
              "Bipolar/epilepsia: iniciar 100–200 mg VO 1–2x/dia; titular gradualmente.",
              "Bipolar/epilepsia: iniciar 100–200 mg VO 1–2 veces/día; titular gradualmente."
            ),
            manutencao: t(
              lang,
              "Dose usual: 400–1200 mg/dia em 2–4 tomadas.",
              "Dosis habitual: 400–1200 mg/día en 2–4 tomas."
            ),
            alvoSerico: t(
              lang,
              "Nível sérico usual: 4–12 mcg/mL.",
              "Nivel sérico habitual: 4–12 mcg/mL."
            ),
            maxDose: t(
              lang,
              "Dose máxima usual: 1600 mg/dia em adultos selecionados.",
              "Dosis máxima habitual: 1600 mg/día en adultos seleccionados."
            )
          },

          doseKg: {
            standard: t(lang, "Adultos: geralmente não se calcula por kg.", "Adultos: generalmente no se calcula por kg."),
            pediatric: t(lang, "Pediatria/epilepsia: ajustar por peso e nível sérico conforme protocolo.", "Pediatría/epilepsia: ajustar por peso y nivel sérico según protocolo."),
            maxDose: t(lang, "1600 mg/dia", "1600 mg/día")
          },

          indications: [
            t(lang, "Transtorno bipolar — mania aguda", "Trastorno bipolar — manía aguda"),
            t(lang, "Manutenção do transtorno bipolar em casos selecionados", "Mantenimiento del trastorno bipolar en casos seleccionados"),
            t(lang, "Epilepsia focal", "Epilepsia focal"),
            t(lang, "Crises tônico-clônicas generalizadas", "Crisis tónico-clónicas generalizadas"),
            t(lang, "Neuralgia do trigêmeo", "Neuralgia del trigémino"),
            t(lang, "Neuralgia glossofaríngea", "Neuralgia glosofaríngea"),
            t(lang, "Impulsividade/agressividade em casos selecionados", "Impulsividad/agresividad en casos seleccionados")
          ],

          renalAdjustment: t(
            lang,
            "Sem ajuste renal habitual, mas monitorar sódio e toxicidade em pacientes frágeis.",
            "Sin ajuste renal habitual, pero monitorizar sodio y toxicidad en pacientes frágiles."
          ),

          hepaticAdjustment: hepatopatia
            ? t(
                lang,
                "Hepatopatia: evitar se doença hepática significativa; monitorar enzimas hepáticas.",
                "Hepatopatía: evitar si enfermedad hepática significativa; monitorizar enzimas hepáticas."
              )
            : t(
                lang,
                "Monitorar função hepática periodicamente.",
                "Monitorizar función hepática periódicamente."
              ),

          mechanism: t(
            lang,
            "Bloqueia canais de sódio voltagem-dependentes, reduzindo descargas neuronais repetitivas; potente indutor enzimático.",
            "Bloquea canales de sodio voltaje-dependientes, reduciendo descargas neuronales repetitivas; potente inductor enzimático."
          ),

          onset: t(
            lang,
            "Efeito antimaníaco pode surgir em dias a 1–2 semanas; autoindução reduz níveis após semanas.",
            "Efecto antimaníaco puede aparecer en días a 1–2 semanas; autoinducción reduce niveles tras semanas."
          ),

          halfLife: t(
            lang,
            "Vida média inicial 25–65 h; após autoindução pode cair para 12–17 h.",
            "Vida media inicial 25–65 h; tras autoinducción puede caer a 12–17 h."
          ),

          commonAdverseEffects: [
            t(lang, "Tontura", "Mareos"),
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Diplopia", "Diplopía"),
            t(lang, "Ataxia", "Ataxia"),
            t(lang, "Náuseas", "Náuseas"),
            t(lang, "Hiponatremia", "Hiponatremia"),
            t(lang, "Rash cutâneo", "Rash cutáneo")
          ],

          dangerousAdverseEffects: [
            t(lang, "Síndrome de Stevens-Johnson/necrólise epidérmica tóxica", "Síndrome de Stevens-Johnson/necrólisis epidérmica tóxica"),
            t(lang, "Agranulocitose", "Agranulocitosis"),
            t(lang, "Anemia aplásica", "Anemia aplásica"),
            t(lang, "Hepatotoxicidade", "Hepatotoxicidad"),
            t(lang, "Hiponatremia grave/SIADH", "Hiponatremia grave/SIADH"),
            t(lang, "Pancreatite rara", "Pancreatitis rara"),
            t(lang, "Ideação suicida", "Ideación suicida")
          ],

          risksByPatient: [
            idade >= 65
              ? t(lang, "Idoso: maior risco de hiponatremia, tontura, quedas, interações e toxicidade.", "Adulto mayor: mayor riesgo de hiponatremia, mareos, caídas, interacciones y toxicidad.")
              : null,
            gestante
              ? t(lang, "Gestação: risco teratogênico; avaliar alternativa e suplementar ácido fólico se uso inevitável.", "Embarazo: riesgo teratogénico; evaluar alternativa y suplementar ácido fólico si uso inevitable.")
              : null,
            lactante
              ? t(lang, "Lactação: geralmente possível com monitorização de sedação, icterícia e ganho ponderal.", "Lactancia: generalmente posible con monitorización de sedación, ictericia y ganancia ponderal.")
              : null,
            hepatopatia
              ? t(lang, "Hepatopatia: risco de toxicidade; evitar se doença significativa.", "Hepatopatía: riesgo de toxicidad; evitar si enfermedad significativa.")
              : null
          ].filter(Boolean),

          contraindications: [
            t(lang, "Hipersensibilidade à carbamazepina ou tricíclicos", "Hipersensibilidad a carbamazepina o tricíclicos"),
            t(lang, "História de depressão medular", "Antecedente de depresión medular"),
            t(lang, "Uso concomitante com IMAO", "Uso concomitante con IMAO"),
            t(lang, "Porfiria hepática", "Porfiria hepática"),
            t(lang, "História de SJS/TEN associada à carbamazepina", "Antecedente de SJS/TEN asociada a carbamazepina")
          ],

          interactions: [
            t(lang, "Anticoncepcionais hormonais: reduz eficácia", "Anticonceptivos hormonales: reduce eficacia"),
            t(lang, "Varfarina/DOACs: pode reduzir anticoagulação", "Warfarina/DOACs: puede reducir anticoagulación"),
            t(lang, "Lamotrigina, valproato, fenitoína: interações bidirecionais", "Lamotrigina, valproato, fenitoína: interacciones bidireccionales"),
            t(lang, "Macrolídeos/azólicos: aumentam níveis e toxicidade", "Macrólidos/azoles: aumentan niveles y toxicidad"),
            t(lang, "Lítio e antipsicóticos: possível neurotoxicidade", "Litio y antipsicóticos: posible neurotoxicidad"),
            t(lang, "Álcool e sedativos: maior depressão do SNC", "Alcohol y sedantes: mayor depresión del SNC")
          ],

          alerts: [
            t(lang, "Solicitar hemograma, TGO/TGP, sódio e nível sérico conforme necessidade.", "Solicitar hemograma, TGO/TGP, sodio y nivel sérico según necesidad."),
            t(lang, "Considerar HLA-B*1502 em populações asiáticas de risco antes de iniciar.", "Considerar HLA-B*1502 en poblaciones asiáticas de riesgo antes de iniciar."),
            t(lang, "Suspender e avaliar se rash, febre, lesões mucosas ou sintomas sistêmicos.", "Suspender y evaluar si rash, fiebre, lesiones mucosas o síntomas sistémicos."),
            t(lang, "Atenção extrema às interações por indução enzimática.", "Atención extrema a interacciones por inducción enzimática."),
            t(lang, "Pode reduzir eficácia de anticoncepcionais hormonais.", "Puede reducir eficacia de anticonceptivos hormonales.")
          ],

          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Carbamazepine Prescribing Information",
            "CANMAT Bipolar Guidelines",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    oxcarbazepina: {
      name: { pt: "Oxcarbazepina", es: "Oxcarbazepina" },
      category: "estabilizador_humor",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = clcr < 30;

        return {
          name: t(lang, "Oxcarbazepina", "Oxcarbazepina"),

          class: t(
            lang,
            "Anticonvulsivante e estabilizador do humor off-label",
            "Anticonvulsivante y estabilizador del ánimo off-label"
          ),

          category: "estabilizador_humor",

          commercialNames: {
            br: ["Trileptal", "Oxcarb", "Oxcarbazepina EMS"],
            ar: ["Trileptal", "Oxcarbazepina Gador", "Oxcarbazepina"]
          },

          presentation: [
            t(lang, "Comprimido 300 mg", "Comprimido 300 mg"),
            t(lang, "Comprimido 600 mg", "Comprimido 600 mg"),
            t(lang, "Suspensão oral 60 mg/mL", "Suspensión oral 60 mg/mL")
          ],

          dose: {
            adulto: t(
              lang,
              "Epilepsia/bipolar off-label: iniciar 300 mg VO 12/12h; titular gradualmente.",
              "Epilepsia/bipolar off-label: iniciar 300 mg VO cada 12 h; titular gradualmente."
            ),
            manutencao: t(
              lang,
              "Dose usual: 600–1200 mg/dia; alguns casos usam até 2400 mg/dia sob especialista.",
              "Dosis habitual: 600–1200 mg/día; algunos casos usan hasta 2400 mg/día bajo especialista."
            ),
            maxDose: t(
              lang,
              "Dose máxima usual: 2400 mg/dia.",
              "Dosis máxima habitual: 2400 mg/día."
            )
          },

          doseKg: {
            standard: t(lang, "Adultos: geralmente não se calcula por kg.", "Adultos: generalmente no se calcula por kg."),
            pediatric: t(lang, "Pediatria/epilepsia: calcular por kg conforme protocolo especializado.", "Pediatría/epilepsia: calcular por kg según protocolo especializado."),
            maxDose: t(lang, "2400 mg/dia", "2400 mg/día")
          },

          indications: [
            t(lang, "Epilepsia focal", "Epilepsia focal"),
            t(lang, "Crises focais com ou sem generalização secundária", "Crisis focales con o sin generalización secundaria"),
            t(lang, "Transtorno bipolar em casos selecionados off-label", "Trastorno bipolar en casos seleccionados off-label"),
            t(lang, "Mania aguda off-label", "Manía aguda off-label"),
            t(lang, "Neuralgia do trigêmeo off-label", "Neuralgia del trigémino off-label"),
            t(lang, "Alternativa à carbamazepina quando se busca menos interações", "Alternativa a carbamazepina cuando se buscan menos interacciones")
          ],

          renalAdjustment: insuficienciaRenal
            ? t(
                lang,
                "ClCr <30 mL/min: iniciar com dose menor e titular lentamente.",
                "ClCr <30 mL/min: iniciar con dosis menor y titular lentamente."
              )
            : t(lang, "Sem ajuste renal habitual se ClCr ≥30 mL/min.", "Sin ajuste renal habitual si ClCr ≥30 mL/min."),

          hepaticAdjustment: hepatopatia
            ? t(
                lang,
                "Hepatopatia leve/moderada: geralmente sem ajuste; cautela se grave.",
                "Hepatopatía leve/moderada: generalmente sin ajuste; cautela si grave."
              )
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),

          mechanism: t(
            lang,
            "Pró-fármaco convertido em derivado monohidroxilado ativo; bloqueia canais de sódio voltagem-dependentes e reduz excitabilidade neuronal.",
            "Profármaco convertido en derivado monohidroxilado activo; bloquea canales de sodio voltaje-dependientes y reduce excitabilidad neuronal."
          ),

          onset: t(
            lang,
            "Controle de crises pode ocorrer após titulação; efeito no humor é off-label e variável.",
            "Control de crisis puede ocurrir tras titulación; efecto en ánimo es off-label y variable."
          ),

          halfLife: t(
            lang,
            "Vida média do metabólito ativo: aproximadamente 8–10 horas.",
            "Vida media del metabolito activo: aproximadamente 8–10 horas."
          ),

          commonAdverseEffects: [
            t(lang, "Tontura", "Mareos"),
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Diplopia", "Diplopía"),
            t(lang, "Ataxia", "Ataxia"),
            t(lang, "Náuseas", "Náuseas"),
            t(lang, "Cefaleia", "Cefalea"),
            t(lang, "Hiponatremia", "Hiponatremia")
          ],

          dangerousAdverseEffects: [
            t(lang, "Hiponatremia grave/SIADH", "Hiponatremia grave/SIADH"),
            t(lang, "Síndrome de Stevens-Johnson/necrólise epidérmica tóxica rara", "Síndrome de Stevens-Johnson/necrólisis epidérmica tóxica rara"),
            t(lang, "Anafilaxia/angioedema raro", "Anafilaxia/angioedema raro"),
            t(lang, "Ideação suicida", "Ideación suicida"),
            t(lang, "Reação de hipersensibilidade cruzada com carbamazepina", "Reacción de hipersensibilidad cruzada con carbamazepina")
          ],

          risksByPatient: [
            idade >= 65
              ? t(lang, "Idoso: maior risco de hiponatremia, tontura, quedas e confusão.", "Adulto mayor: mayor riesgo de hiponatremia, mareos, caídas y confusión.")
              : null,
            gestante
              ? t(lang, "Gestação: avaliar risco-benefício; dados menos robustos que carbamazepina, mas considerar risco anticonvulsivante.", "Embarazo: evaluar riesgo-beneficio; datos menos robustos que carbamazepina, pero considerar riesgo anticonvulsivante.")
              : null,
            lactante
              ? t(lang, "Lactação: monitorar sedação, ganho ponderal e irritabilidade do lactente.", "Lactancia: monitorizar sedación, ganancia ponderal e irritabilidad del lactante.")
              : null,
            hepatopatia
              ? t(lang, "Hepatopatia grave: usar com cautela.", "Hepatopatía grave: usar con cautela.")
              : null,
            insuficienciaRenal
              ? t(lang, "Insuficiência renal importante: reduzir dose inicial.", "Insuficiencia renal importante: reducir dosis inicial.")
              : null
          ].filter(Boolean),

          contraindications: [
            t(lang, "Hipersensibilidade à oxcarbazepina ou eslicarbazepina", "Hipersensibilidad a oxcarbazepina o eslicarbazepina"),
            t(lang, "História de reação grave cutânea associada ao fármaco", "Antecedente de reacción cutánea grave asociada al fármaco"),
            t(lang, "Hiponatremia grave não corrigida", "Hiponatremia grave no corregida")
          ],

          interactions: [
            t(lang, "Anticoncepcionais hormonais: pode reduzir eficácia", "Anticonceptivos hormonales: puede reducir eficacia"),
            t(lang, "Diuréticos e ISRS/ISRN: maior risco de hiponatremia", "Diuréticos e ISRS/IRSN: mayor riesgo de hiponatremia"),
            t(lang, "Carbamazepina/fenitoína/fenobarbital: podem alterar níveis", "Carbamazepina/fenitoína/fenobarbital: pueden alterar niveles"),
            t(lang, "Lamotrigina: possível redução de níveis/efeito", "Lamotrigina: posible reducción de niveles/efecto"),
            t(lang, "Álcool e sedativos: maior depressão do SNC", "Alcohol y sedantes: mayor depresión del SNC")
          ],

          alerts: [
            t(lang, "Monitorar sódio, especialmente nas primeiras semanas e em idosos.", "Monitorizar sodio, especialmente en las primeras semanas y en adultos mayores."),
            t(lang, "Menos indutora enzimática que carbamazepina, mas ainda pode reduzir anticoncepcionais.", "Menos inductora enzimática que carbamazepina, pero aún puede reducir anticonceptivos."),
            t(lang, "Suspender e avaliar se rash, febre, mucosite ou sintomas sistêmicos.", "Suspender y evaluar si rash, fiebre, mucositis o síntomas sistémicos."),
            t(lang, "Evidência em bipolaridade é menos sólida que lítio, valproato e lamotrigina.", "La evidencia en bipolaridad es menos sólida que litio, valproato y lamotrigina."),
            t(lang, "Cautela se histórico de alergia à carbamazepina.", "Cautela si antecedente de alergia a carbamazepina.")
          ],

          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Oxcarbazepine Prescribing Information",
            "CANMAT Bipolar Guidelines",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    levetiracetam: {
      name: { pt: "Levetiracetam", es: "Levetiracetam" },
      category: "anticonvulsivante",

      calculate: (paciente, lang = "pt") => {
        const peso = Number(paciente.peso || 0);
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const insuficienciaRenal = clcr < 60;

        const dosePediatricaMin = peso * 10;
        const dosePediatricaMax = peso * 30;

        return {
          name: t(lang, "Levetiracetam", "Levetiracetam"),

          class: t(
            lang,
            "Anticonvulsivante modulador da proteína SV2A",
            "Anticonvulsivante modulador de la proteína SV2A"
          ),

          category: "anticonvulsivante",

          commercialNames: {
            br: ["Keppra", "Levetiracetam EMS", "Levetiracetam Eurofarma"],
            ar: ["Keppra", "Levetiracetam Gador", "Levetiracetam Bagó"]
          },

          presentation: [
            t(lang, "Comprimido 250 mg", "Comprimido 250 mg"),
            t(lang, "Comprimido 500 mg", "Comprimido 500 mg"),
            t(lang, "Comprimido 750 mg", "Comprimido 750 mg"),
            t(lang, "Comprimido 1000 mg", "Comprimido 1000 mg"),
            t(lang, "Solução oral 100 mg/mL", "Solución oral 100 mg/mL"),
            t(lang, "Frasco-ampola EV 500 mg/5 mL", "Frasco ampolla IV 500 mg/5 mL")
          ],

          dose: {
            adulto: t(
              lang,
              "Epilepsia: iniciar 500 mg VO/EV 12/12h; titular conforme resposta.",
              "Epilepsia: iniciar 500 mg VO/IV cada 12 h; titular según respuesta."
            ),
            manutencao: t(
              lang,
              "Dose usual: 1000–3000 mg/dia divididos em 2 tomadas.",
              "Dosis habitual: 1000–3000 mg/día divididos en 2 tomas."
            ),
            pediatrica: t(
              lang,
              `${dosePediatricaMin.toFixed(0)}–${dosePediatricaMax.toFixed(0)} mg por dose 12/12h, conforme idade e protocolo.`,
              `${dosePediatricaMin.toFixed(0)}–${dosePediatricaMax.toFixed(0)} mg por dosis cada 12 h, según edad y protocolo.`
            ),
            maxDose: t(
              lang,
              "Dose máxima usual: 3000 mg/dia.",
              "Dosis máxima habitual: 3000 mg/día."
            )
          },

          doseKg: {
            standard: t(lang, "Pediatria: 10 mg/kg/dose 12/12h inicialmente.", "Pediatría: 10 mg/kg/dosis cada 12 h inicialmente."),
            severe: t(lang, "Pode titular até 30 mg/kg/dose 12/12h conforme resposta.", "Puede titularse hasta 30 mg/kg/dosis cada 12 h según respuesta."),
            maxDose: t(lang, "3000 mg/dia em adultos", "3000 mg/día en adultos")
          },

          indications: [
            t(lang, "Epilepsia focal", "Epilepsia focal"),
            t(lang, "Crises focais com ou sem generalização secundária", "Crisis focales con o sin generalización secundaria"),
            t(lang, "Crises tônico-clônicas generalizadas", "Crisis tónico-clónicas generalizadas"),
            t(lang, "Crises mioclônicas", "Crisis mioclónicas"),
            t(lang, "Epilepsia mioclônica juvenil", "Epilepsia mioclónica juvenil"),
            t(lang, "Estado de mal epiléptico como adjuvante/segunda linha em muitos protocolos", "Estado epiléptico como coadyuvante/segunda línea en muchos protocolos"),
            t(lang, "Profilaxia de crises em situações neurológicas selecionadas", "Profilaxis de crisis en situaciones neurológicas seleccionadas")
          ],

          renalAdjustment: insuficienciaRenal
            ? t(
                lang,
                "Necessita ajuste renal conforme ClCr; reduzir dose e/ou aumentar intervalo.",
                "Requiere ajuste renal según ClCr; reducir dosis y/o aumentar intervalo."
              )
            : t(lang, "Sem ajuste renal se função renal normal.", "Sin ajuste renal si función renal normal."),

          hepaticAdjustment: t(
            lang,
            "Sem ajuste hepático habitual; metabolismo hepático mínimo.",
            "Sin ajuste hepático habitual; metabolismo hepático mínimo."
          ),

          mechanism: t(
            lang,
            "Liga-se à proteína vesicular sináptica SV2A, modulando liberação de neurotransmissores e reduzindo hiperexcitabilidade neuronal.",
            "Se une a la proteína vesicular sináptica SV2A, modulando liberación de neurotransmisores y reduciendo hiperexcitabilidad neuronal."
          ),

          onset: t(
            lang,
            "Início anticonvulsivante rápido; via EV pode ser usada quando VO não é possível.",
            "Inicio anticonvulsivante rápido; vía IV puede usarse cuando VO no es posible."
          ),

          halfLife: t(
            lang,
            "Vida média aproximada: 6–8 horas em adultos.",
            "Vida media aproximada: 6–8 horas en adultos."
          ),

          commonAdverseEffects: [
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Fadiga", "Fatiga"),
            t(lang, "Cefaleia", "Cefalea"),
            t(lang, "Irritabilidade", "Irritabilidad"),
            t(lang, "Náuseas", "Náuseas")
          ],

          dangerousAdverseEffects: [
            t(lang, "Alterações comportamentais importantes", "Alteraciones conductuales importantes"),
            t(lang, "Depressão ou ideação suicida", "Depresión o ideación suicida"),
            t(lang, "Psicose rara", "Psicosis rara"),
            t(lang, "Reações cutâneas graves raras", "Reacciones cutáneas graves raras"),
            t(lang, "Anafilaxia/angioedema raro", "Anafilaxia/angioedema raro")
          ],

          risksByPatient: [
            idade >= 65
              ? t(lang, "Idoso: maior risco de sonolência, tontura e quedas; ajustar pela função renal.", "Adulto mayor: mayor riesgo de somnolencia, mareos y caídas; ajustar por función renal.")
              : null,
            gestante
              ? t(lang, "Gestação: opção relativamente usada em epilepsia; monitorar controle de crises e considerar níveis se disponível.", "Embarazo: opción relativamente usada en epilepsia; monitorizar control de crisis y considerar niveles si disponible.")
              : null,
            lactante
              ? t(lang, "Lactação: passa ao leite; monitorar sonolência, sucção e ganho ponderal.", "Lactancia: pasa a la leche; monitorizar somnolencia, succión y ganancia ponderal.")
              : null,
            insuficienciaRenal
              ? t(lang, "Insuficiência renal: ajuste obrigatório conforme ClCr.", "Insuficiencia renal: ajuste obligatorio según ClCr.")
              : null
          ].filter(Boolean),

          contraindications: [
            t(lang, "Hipersensibilidade ao levetiracetam", "Hipersensibilidad a levetiracetam"),
            t(lang, "História de reação grave ao fármaco", "Antecedente de reacción grave al fármaco")
          ],

          interactions: [
            t(lang, "Poucas interações farmacocinéticas relevantes", "Pocas interacciones farmacocinéticas relevantes"),
            t(lang, "Álcool e sedativos: podem aumentar sonolência", "Alcohol y sedantes: pueden aumentar somnolencia"),
            t(lang, "Outros antiepilépticos: monitorar sedação e controle de crises", "Otros antiepilépticos: monitorizar sedación y control de crisis")
          ],

          alerts: [
            t(lang, "Ajustar dose pela função renal.", "Ajustar dosis por función renal."),
            t(lang, "Monitorar irritabilidade, agressividade, depressão e ideação suicida.", "Monitorizar irritabilidad, agresividad, depresión e ideación suicida."),
            t(lang, "Não suspender abruptamente em pacientes epilépticos.", "No suspender bruscamente en pacientes epilépticos."),
            t(lang, "Boa opção quando se deseja poucas interações medicamentosas.", "Buena opción cuando se desean pocas interacciones medicamentosas."),
            t(lang, "Via EV pode substituir VO em dose equivalente quando necessário.", "Vía IV puede sustituir VO en dosis equivalente cuando sea necesario.")
          ],

          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Levetiracetam Prescribing Information",
            "ILAE Epilepsy Guidelines",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    topiramato: {
      name: { pt: "Topiramato", es: "Topiramato" },
      category: "anticonvulsivante",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = clcr < 70;

        return {
          name: t(lang, "Topiramato", "Topiramato"),

          class: t(
            lang,
            "Anticonvulsivante com múltiplos mecanismos",
            "Anticonvulsivante con múltiples mecanismos"
          ),

          category: "anticonvulsivante",

          commercialNames: {
            br: ["Topamax", "Amato", "Topiramato EMS", "Topiramato Eurofarma"],
            ar: ["Topamax", "Topiramato Gador", "Topiramato Bagó"]
          },

          presentation: [
            t(lang, "Comprimido 25 mg", "Comprimido 25 mg"),
            t(lang, "Comprimido 50 mg", "Comprimido 50 mg"),
            t(lang, "Comprimido 100 mg", "Comprimido 100 mg"),
            t(lang, "Comprimido 200 mg", "Comprimido 200 mg"),
            t(lang, "Cápsula sprinkle 15 mg", "Cápsula sprinkle 15 mg"),
            t(lang, "Cápsula sprinkle 25 mg", "Cápsula sprinkle 25 mg")
          ],

          dose: {
            adulto: t(
              lang,
              "Epilepsia: iniciar 25–50 mg/dia; titular semanalmente conforme resposta.",
              "Epilepsia: iniciar 25–50 mg/día; titular semanalmente según respuesta."
            ),
            enxaqueca: t(
              lang,
              "Profilaxia de enxaqueca: iniciar 25 mg à noite; titular até 50 mg 12/12h.",
              "Profilaxis de migraña: iniciar 25 mg por la noche; titular hasta 50 mg cada 12 h."
            ),
            manutencao: t(
              lang,
              "Dose usual: 100 mg/dia para enxaqueca; 200–400 mg/dia para epilepsia conforme indicação.",
              "Dosis habitual: 100 mg/día para migraña; 200–400 mg/día para epilepsia según indicación."
            ),
            maxDose: t(
              lang,
              "Dose máxima usual: 400 mg/dia em epilepsia; doses maiores apenas em contexto especializado.",
              "Dosis máxima habitual: 400 mg/día en epilepsia; dosis mayores solo en contexto especializado."
            )
          },

          doseKg: {
            standard: t(
              lang,
              "Pediatria/epilepsia: dose por kg conforme idade, peso e protocolo especializado.",
              "Pediatría/epilepsia: dosis por kg según edad, peso y protocolo especializado."
            ),
            severe: t(
              lang,
              "Titular lentamente para reduzir efeitos cognitivos e parestesias.",
              "Titular lentamente para reducir efectos cognitivos y parestesias."
            ),
            maxDose: t(lang, "400 mg/dia em adultos", "400 mg/día en adultos")
          },

          indications: [
            t(lang, "Epilepsia focal", "Epilepsia focal"),
            t(lang, "Crises tônico-clônicas generalizadas", "Crisis tónico-clónicas generalizadas"),
            t(lang, "Síndrome de Lennox-Gastaut como adjuvante", "Síndrome de Lennox-Gastaut como coadyuvante"),
            t(lang, "Profilaxia de enxaqueca", "Profilaxis de migraña"),
            t(lang, "Transtorno de compulsão alimentar em alguns protocolos/off-label", "Trastorno por atracón en algunos protocolos/off-label"),
            t(lang, "Perda ponderal como componente de combinações específicas em alguns países", "Pérdida ponderal como componente de combinaciones específicas en algunos países"),
            t(lang, "Transtorno por uso de álcool em casos selecionados off-label", "Trastorno por uso de alcohol en casos seleccionados off-label")
          ],

          renalAdjustment: insuficienciaRenal
            ? t(
                lang,
                "ClCr reduzido: considerar reduzir dose aproximadamente pela metade e titular lentamente.",
                "ClCr reducido: considerar reducir dosis aproximadamente a la mitad y titular lentamente."
              )
            : t(lang, "Sem ajuste renal habitual se função renal preservada.", "Sin ajuste renal habitual si función renal preservada."),

          hepaticAdjustment: hepatopatia
            ? t(
                lang,
                "Hepatopatia: usar com cautela; depuração pode reduzir.",
                "Hepatopatía: usar con cautela; la depuración puede reducirse."
              )
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),

          mechanism: t(
            lang,
            "Bloqueia canais de sódio, potencializa GABA-A, antagoniza AMPA/kainato e inibe anidrase carbônica.",
            "Bloquea canales de sodio, potencia GABA-A, antagoniza AMPA/kainato e inhibe anhidrasa carbónica."
          ),

          onset: t(
            lang,
            "Efeito anticonvulsivante/profilático ocorre após titulação; na enxaqueca avaliar resposta após semanas.",
            "Efecto anticonvulsivante/profiláctico ocurre tras titulación; en migraña evaluar respuesta tras semanas."
          ),

          halfLife: t(
            lang,
            "Vida média aproximada: 21 horas.",
            "Vida media aproximada: 21 horas."
          ),

          commonAdverseEffects: [
            t(lang, "Parestesias", "Parestesias"),
            t(lang, "Perda de peso", "Pérdida de peso"),
            t(lang, "Lentificação cognitiva", "Enlentecimiento cognitivo"),
            t(lang, "Dificuldade de concentração", "Dificultad de concentración"),
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Alteração do paladar", "Alteración del gusto")
          ],

          dangerousAdverseEffects: [
            t(lang, "Acidose metabólica", "Acidosis metabólica"),
            t(lang, "Nefrolitíase", "Nefrolitiasis"),
            t(lang, "Glaucoma agudo de ângulo fechado", "Glaucoma agudo de ángulo cerrado"),
            t(lang, "Oligoidrose/hipertermia", "Oligohidrosis/hipertermia"),
            t(lang, "Ideação suicida", "Ideación suicida"),
            t(lang, "Teratogenicidade, especialmente fissura labiopalatina", "Teratogenicidad, especialmente fisura labiopalatina"),
            t(lang, "Encefalopatia hiperamonêmica quando associado a valproato", "Encefalopatía hiperamonémica cuando se asocia a valproato")
          ],

          risksByPatient: [
            idade >= 65
              ? t(lang, "Idoso: maior risco de lentificação cognitiva, quedas, acidose e perda ponderal excessiva.", "Adulto mayor: mayor riesgo de enlentecimiento cognitivo, caídas, acidosis y pérdida ponderal excesiva.")
              : null,
            gestante
              ? t(lang, "Gestação: evitar quando possível; risco teratogênico aumentado.", "Embarazo: evitar cuando sea posible; riesgo teratogénico aumentado.")
              : null,
            lactante
              ? t(lang, "Lactação: monitorar diarreia, sonolência, irritabilidade e ganho ponderal.", "Lactancia: monitorizar diarrea, somnolencia, irritabilidad y ganancia ponderal.")
              : null,
            hepatopatia
              ? t(lang, "Hepatopatia: usar com cautela e monitorar tolerabilidade.", "Hepatopatía: usar con cautela y monitorizar tolerabilidad.")
              : null,
            insuficienciaRenal
              ? t(lang, "Insuficiência renal: reduzir dose e monitorar acidose/nefrolitíase.", "Insuficiencia renal: reducir dosis y monitorizar acidosis/nefrolitiasis.")
              : null
          ].filter(Boolean),

          contraindications: [
            t(lang, "Hipersensibilidade ao topiramato", "Hipersensibilidad a topiramato"),
            t(lang, "Acidose metabólica importante não corrigida", "Acidosis metabólica importante no corregida"),
            t(lang, "História de glaucoma agudo induzido pelo fármaco", "Antecedente de glaucoma agudo inducido por el fármaco")
          ],

          interactions: [
            t(lang, "Valproato: risco de hiperamonemia/encefalopatia", "Valproato: riesgo de hiperamonemia/encefalopatía"),
            t(lang, "Anticoncepcionais hormonais: pode reduzir eficácia em doses maiores", "Anticonceptivos hormonales: puede reducir eficacia en dosis mayores"),
            t(lang, "Inibidores da anidrase carbônica: maior risco de acidose e cálculos", "Inhibidores de anhidrasa carbónica: mayor riesgo de acidosis y cálculos"),
            t(lang, "Depressores do SNC/álcool: maior sedação e prejuízo cognitivo", "Depresores del SNC/alcohol: mayor sedación y deterioro cognitivo"),
            t(lang, "Lítio: pode alterar níveis séricos", "Litio: puede alterar niveles séricos")
          ],

          alerts: [
            t(lang, "Titular lentamente para reduzir efeitos cognitivos.", "Titular lentamente para reducir efectos cognitivos."),
            t(lang, "Monitorar bicarbonato se sintomas de acidose ou pacientes de risco.", "Monitorizar bicarbonato si síntomas de acidosis o pacientes de riesgo."),
            t(lang, "Orientar hidratação para reduzir risco de nefrolitíase.", "Orientar hidratación para reducir riesgo de nefrolitiasis."),
            t(lang, "Suspender e avaliar urgente se dor ocular aguda ou visão turva.", "Suspender y evaluar urgente si dolor ocular agudo o visión borrosa."),
            t(lang, "Evitar em gestação quando houver alternativa.", "Evitar en embarazo cuando haya alternativa.")
          ],

          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Topiramate Prescribing Information",
            "ILAE Epilepsy Guidelines",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    fenitoina: {
      name: { pt: "Fenitoína", es: "Fenitoína" },
      category: "anticonvulsivante",

      calculate: (paciente, lang = "pt") => {
        const peso = Number(paciente.peso || 0);
        const idade = Number(paciente.idade || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);

        const ataqueMin = peso * 15;
        const ataqueMax = peso * 20;
        const manutMin = peso * 4;
        const manutMax = peso * 7;

        return {
          name: t(lang, "Fenitoína", "Fenitoína"),

          class: t(
            lang,
            "Anticonvulsivante bloqueador de canais de sódio",
            "Anticonvulsivante bloqueador de canales de sodio"
          ),

          category: "anticonvulsivante",

          commercialNames: {
            br: ["Hidantal", "Epelin", "Fenitoína"],
            ar: ["Epamin", "Fenitoína", "Difenilhidantoína"]
          },

          presentation: [
            t(lang, "Comprimido/cápsula 100 mg", "Comprimido/cápsula 100 mg"),
            t(lang, "Suspensão oral 125 mg/5 mL", "Suspensión oral 125 mg/5 mL"),
            t(lang, "Ampola 250 mg/5 mL", "Ampolla 250 mg/5 mL")
          ],

          dose: {
            adulto: t(
              lang,
              `Dose de ataque EV: 15–20 mg/kg. Para ${peso || 0} kg: ${ataqueMin.toFixed(0)}–${ataqueMax.toFixed(0)} mg.`,
              `Dosis de carga IV: 15–20 mg/kg. Para ${peso || 0} kg: ${ataqueMin.toFixed(0)}–${ataqueMax.toFixed(0)} mg.`
            ),
            manutencao: t(
              lang,
              `Manutenção: 4–7 mg/kg/dia. Para ${peso || 0} kg: ${manutMin.toFixed(0)}–${manutMax.toFixed(0)} mg/dia.`,
              `Mantenimiento: 4–7 mg/kg/día. Para ${peso || 0} kg: ${manutMin.toFixed(0)}–${manutMax.toFixed(0)} mg/día.`
            ),
            alvoSerico: t(
              lang,
              "Nível sérico total usual: 10–20 mcg/mL; interpretar fração livre em hipoalbuminemia/uremia.",
              "Nivel sérico total habitual: 10–20 mcg/mL; interpretar fracción libre en hipoalbuminemia/uremia."
            ),
            maxDose: t(
              lang,
              "Ajustar por nível sérico e toxicidade; cinética não linear exige cautela.",
              "Ajustar por nivel sérico y toxicidad; cinética no lineal exige cautela."
            )
          },

          doseKg: {
            standard: t(lang, "Ataque: 15–20 mg/kg EV.", "Carga: 15–20 mg/kg IV."),
            severe: t(lang, "Manutenção: 4–7 mg/kg/dia.", "Mantenimiento: 4–7 mg/kg/día."),
            maxDose: t(lang, "Individualizar por nível sérico.", "Individualizar por nivel sérico.")
          },

          indications: [
            t(lang, "Estado de mal epiléptico após benzodiazepínico", "Estado epiléptico tras benzodiacepina"),
            t(lang, "Crises focais", "Crisis focales"),
            t(lang, "Crises tônico-clônicas generalizadas", "Crisis tónico-clónicas generalizadas"),
            t(lang, "Profilaxia/tratamento de crises pós-traumáticas em contextos selecionados", "Profilaxis/tratamiento de crisis postraumáticas en contextos seleccionados"),
            t(lang, "Epilepsia estrutural focal", "Epilepsia estructural focal"),
            t(lang, "Arritmias ventriculares específicas induzidas por digital em contexto histórico/selecionado", "Arritmias ventriculares específicas inducidas por digital en contexto histórico/seleccionado")
          ],

          renalAdjustment: t(
            lang,
            "Sem ajuste renal fixo, mas em uremia monitorar fração livre ou corrigir interpretação do nível total.",
            "Sin ajuste renal fijo, pero en uremia monitorizar fracción libre o corregir interpretación del nivel total."
          ),

          hepaticAdjustment: hepatopatia
            ? t(
                lang,
                "Hepatopatia: alto risco de toxicidade; monitorar nível livre/total e reduzir dose conforme necessário.",
                "Hepatopatía: alto riesgo de toxicidad; monitorizar nivel libre/total y reducir dosis según necesidad."
              )
            : t(lang, "Sem ajuste hepático inicial obrigatório, mas monitorar níveis.", "Sin ajuste hepático inicial obligatorio, pero monitorizar niveles."),

          mechanism: t(
            lang,
            "Bloqueia canais de sódio voltagem-dependentes em estado inativado, reduzindo descargas neuronais repetitivas.",
            "Bloquea canales de sodio voltaje-dependientes en estado inactivado, reduciendo descargas neuronales repetitivas."
          ),

          onset: t(
            lang,
            "EV tem ação rápida após carga; administração deve ser lenta e monitorizada.",
            "IV tiene acción rápida tras carga; administración debe ser lenta y monitorizada."
          ),

          halfLife: t(
            lang,
            "Vida média variável, cerca de 22 horas, com cinética não linear/saturável.",
            "Vida media variable, cerca de 22 horas, con cinética no lineal/saturable."
          ),

          commonAdverseEffects: [
            t(lang, "Nistagmo", "Nistagmo"),
            t(lang, "Ataxia", "Ataxia"),
            t(lang, "Diplopia", "Diplopía"),
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Hiperplasia gengival", "Hiperplasia gingival"),
            t(lang, "Hirsutismo", "Hirsutismo"),
            t(lang, "Rash cutâneo", "Rash cutáneo")
          ],

          dangerousAdverseEffects: [
            t(lang, "Arritmias e hipotensão com infusão EV rápida", "Arritmias e hipotensión con infusión IV rápida"),
            t(lang, "Síndrome de Stevens-Johnson/necrólise epidérmica tóxica", "Síndrome de Stevens-Johnson/necrólisis epidérmica tóxica"),
            t(lang, "DRESS", "DRESS"),
            t(lang, "Hepatotoxicidade", "Hepatotoxicidad"),
            t(lang, "Depressão medular rara", "Depresión medular rara"),
            t(lang, "Teratogenicidade/síndrome fetal da hidantoína", "Teratogenicidad/síndrome fetal de hidantoína"),
            t(lang, "Toxicidade neurológica por níveis elevados", "Toxicidad neurológica por niveles elevados")
          ],

          risksByPatient: [
            idade >= 65
              ? t(lang, "Idoso: maior risco de toxicidade neurológica, quedas, interações e hipoalbuminemia.", "Adulto mayor: mayor riesgo de toxicidad neurológica, caídas, interacciones e hipoalbuminemia.")
              : null,
            gestante
              ? t(lang, "Gestação: risco teratogênico; avaliar alternativa, controle de crises e suplementação de ácido fólico.", "Embarazo: riesgo teratogénico; evaluar alternativa, control de crisis y suplementación de ácido fólico.")
              : null,
            lactante
              ? t(lang, "Lactação: geralmente possível com monitorização de sedação e ganho ponderal.", "Lactancia: generalmente posible con monitorización de sedación y ganancia ponderal.")
              : null,
            hepatopatia
              ? t(lang, "Hepatopatia: risco elevado de acúmulo e toxicidade.", "Hepatopatía: riesgo elevado de acumulación y toxicidad.")
              : null
          ].filter(Boolean),

          contraindications: [
            t(lang, "Hipersensibilidade à fenitoína ou hidantoínas", "Hipersensibilidad a fenitoína o hidantoínas"),
            t(lang, "Bradicardia sinusal, bloqueio sinoatrial ou BAV de 2º/3º grau sem marcapasso", "Bradicardia sinusal, bloqueo sinoauricular o BAV de 2º/3º grado sin marcapasos"),
            t(lang, "Síndrome de Adams-Stokes", "Síndrome de Adams-Stokes"),
            t(lang, "História de SJS/TEN ou DRESS por fenitoína", "Antecedente de SJS/TEN o DRESS por fenitoína"),
            t(lang, "Uso concomitante com delavirdina", "Uso concomitante con delavirdina")
          ],

          interactions: [
            t(lang, "Varfarina/DOACs: interação complexa e risco de alteração anticoagulante", "Warfarina/DOACs: interacción compleja y riesgo de alteración anticoagulante"),
            t(lang, "Anticoncepcionais hormonais: reduz eficácia", "Anticonceptivos hormonales: reduce eficacia"),
            t(lang, "Valproato: altera fração livre e níveis", "Valproato: altera fracción libre y niveles"),
            t(lang, "Carbamazepina/fenobarbital: interações bidirecionais", "Carbamazepina/fenobarbital: interacciones bidireccionales"),
            t(lang, "Azólicos, amiodarona, isoniazida, metronidazol: podem aumentar níveis", "Azoles, amiodarona, isoniazida, metronidazol: pueden aumentar niveles"),
            t(lang, "Rifampicina: pode reduzir níveis", "Rifampicina: puede reducir niveles")
          ],

          alerts: [
            t(lang, "Infusão EV deve ser lenta e com monitorização cardíaca.", "Infusión IV debe ser lenta y con monitorización cardíaca."),
            t(lang, "Cinética não linear: pequenos aumentos de dose podem elevar muito o nível sérico.", "Cinética no lineal: pequeños aumentos de dosis pueden elevar mucho el nivel sérico."),
            t(lang, "Monitorar nível sérico, albumina e sinais neurológicos de toxicidade.", "Monitorizar nivel sérico, albúmina y signos neurológicos de toxicidad."),
            t(lang, "Atenção extrema às interações por indução enzimática.", "Atención extrema a interacciones por inducción enzimática."),
            t(lang, "Suspender e avaliar se rash com febre, mucosite ou sintomas sistêmicos.", "Suspender y evaluar si rash con fiebre, mucositis o síntomas sistémicos.")
          ],

          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Phenytoin Prescribing Information",
            "ILAE Epilepsy Guidelines",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    }

  });

  Object.assign(window.PSICOFARMACOS_DRUGS_DB, {

    fenobarbital: {
      name: { pt: "Fenobarbital", es: "Fenobarbital" },
      category: "anticonvulsivante",

      calculate: (paciente, lang = "pt") => {
        const peso = Number(paciente.peso || 0);
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = clcr < 60;

        const ataqueMin = peso * 10;
        const ataqueMax = peso * 20;
        const manutMin = peso * 1;
        const manutMax = peso * 3;

        return {
          name: t(lang, "Fenobarbital", "Fenobarbital"),

          class: t(
            lang,
            "Barbitúrico anticonvulsivante",
            "Barbitúrico anticonvulsivante"
          ),

          category: "anticonvulsivante",

          commercialNames: {
            br: ["Gardenal", "Fenobarbital"],
            ar: ["Luminal", "Fenobarbital"]
          },

          presentation: [
            t(lang, "Comprimido 50 mg", "Comprimido 50 mg"),
            t(lang, "Comprimido 100 mg", "Comprimido 100 mg"),
            t(lang, "Solução oral/gotas 40 mg/mL", "Solución oral/gotas 40 mg/mL"),
            t(lang, "Ampola 100 mg/mL", "Ampolla 100 mg/mL")
          ],

          dose: {
            adulto: t(
              lang,
              `Dose de ataque: 10–20 mg/kg. Para ${peso || 0} kg: ${ataqueMin.toFixed(0)}–${ataqueMax.toFixed(0)} mg.`,
              `Dosis de carga: 10–20 mg/kg. Para ${peso || 0} kg: ${ataqueMin.toFixed(0)}–${ataqueMax.toFixed(0)} mg.`
            ),
            manutencao: t(
              lang,
              `Manutenção: 1–3 mg/kg/dia. Para ${peso || 0} kg: ${manutMin.toFixed(0)}–${manutMax.toFixed(0)} mg/dia.`,
              `Mantenimiento: 1–3 mg/kg/día. Para ${peso || 0} kg: ${manutMin.toFixed(0)}–${manutMax.toFixed(0)} mg/día.`
            ),
            alvoSerico: t(
              lang,
              "Nível sérico usual: 10–40 mcg/mL.",
              "Nivel sérico habitual: 10–40 mcg/mL."
            ),
            maxDose: t(
              lang,
              "Dose máxima deve ser individualizada por nível sérico, sedação e função respiratória.",
              "La dosis máxima debe individualizarse por nivel sérico, sedación y función respiratoria."
            )
          },

          doseKg: {
            standard: t(lang, "Manutenção: 1–3 mg/kg/dia.", "Mantenimiento: 1–3 mg/kg/día."),
            severe: t(lang, "Ataque: 10–20 mg/kg conforme protocolo.", "Carga: 10–20 mg/kg según protocolo."),
            maxDose: t(lang, "Individualizar por nível sérico.", "Individualizar por nivel sérico.")
          },

          indications: [
            t(lang, "Crises tônico-clônicas generalizadas", "Crisis tónico-clónicas generalizadas"),
            t(lang, "Crises focais", "Crisis focales"),
            t(lang, "Estado de mal epiléptico como segunda/terceira linha", "Estado epiléptico como segunda/tercera línea"),
            t(lang, "Convulsões neonatais", "Convulsiones neonatales"),
            t(lang, "Epilepsia em contextos com baixo acesso a outros anticonvulsivantes", "Epilepsia en contextos con bajo acceso a otros anticonvulsivantes"),
            t(lang, "Sedação em contextos específicos e monitorizados", "Sedación en contextos específicos y monitorizados")
          ],

          renalAdjustment: insuficienciaRenal
            ? t(
                lang,
                "Insuficiência renal: usar com cautela; parte é eliminada pelos rins e pode haver acúmulo.",
                "Insuficiencia renal: usar con cautela; parte se elimina por riñón y puede acumularse."
              )
            : t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),

          hepaticAdjustment: hepatopatia
            ? t(
                lang,
                "Hepatopatia: reduzir dose e monitorar sedação/toxicidade.",
                "Hepatopatía: reducir dosis y monitorizar sedación/toxicidad."
              )
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),

          mechanism: t(
            lang,
            "Potencializa GABA-A, aumentando duração de abertura do canal de cloro; em doses altas pode ativar GABA-A diretamente.",
            "Potencia GABA-A, aumentando duración de apertura del canal de cloro; en dosis altas puede activar GABA-A directamente."
          ),

          onset: t(
            lang,
            "EV/IM tem ação relativamente rápida; uso crônico exige dias a semanas para estabilização sérica.",
            "IV/IM tiene acción relativamente rápida; uso crónico requiere días a semanas para estabilización sérica."
          ),

          halfLife: t(
            lang,
            "Vida média longa: aproximadamente 2–5 dias em adultos.",
            "Vida media larga: aproximadamente 2–5 días en adultos."
          ),

          commonAdverseEffects: [
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Sedação", "Sedación"),
            t(lang, "Ataxia", "Ataxia"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Déficit cognitivo", "Deterioro cognitivo"),
            t(lang, "Náuseas", "Náuseas"),
            t(lang, "Hiperatividade paradoxal em crianças", "Hiperactividad paradójica en niños")
          ],

          dangerousAdverseEffects: [
            t(lang, "Depressão respiratória", "Depresión respiratoria"),
            t(lang, "Coma em intoxicação", "Coma en intoxicación"),
            t(lang, "Dependência física", "Dependencia física"),
            t(lang, "Síndrome de abstinência grave", "Síndrome de abstinencia grave"),
            t(lang, "Reações cutâneas graves", "Reacciones cutáneas graves"),
            t(lang, "Depressão ou ideação suicida", "Depresión o ideación suicida"),
            t(lang, "Osteopenia/osteomalácia em uso crônico", "Osteopenia/osteomalacia en uso crónico")
          ],

          risksByPatient: [
            idade >= 65
              ? t(lang, "Idoso: maior risco de sedação, quedas, confusão, depressão respiratória e interações.", "Adulto mayor: mayor riesgo de sedación, caídas, confusión, depresión respiratoria e interacciones.")
              : null,
            gestante
              ? t(lang, "Gestação: risco teratogênico e de abstinência neonatal; avaliar alternativa e suplementar ácido fólico se inevitável.", "Embarazo: riesgo teratogénico y de abstinencia neonatal; evaluar alternativa y suplementar ácido fólico si inevitable.")
              : null,
            lactante
              ? t(lang, "Lactação: pode causar sedação no lactente; monitorar sucção e ganho ponderal.", "Lactancia: puede causar sedación en el lactante; monitorizar succión y ganancia ponderal.")
              : null,
            hepatopatia
              ? t(lang, "Hepatopatia: maior risco de sedação prolongada e encefalopatia.", "Hepatopatía: mayor riesgo de sedación prolongada y encefalopatía.")
              : null,
            insuficienciaRenal
              ? t(lang, "Insuficiência renal: monitorar acúmulo e sedação.", "Insuficiencia renal: monitorizar acumulación y sedación.")
              : null
          ].filter(Boolean),

          contraindications: [
            t(lang, "Hipersensibilidade a barbitúricos", "Hipersensibilidad a barbitúricos"),
            t(lang, "Porfiria aguda intermitente", "Porfiria aguda intermitente"),
            t(lang, "Insuficiência respiratória grave sem suporte", "Insuficiencia respiratoria grave sin soporte"),
            t(lang, "Doença hepática grave", "Enfermedad hepática grave"),
            t(lang, "Intoxicação aguda por depressores do SNC", "Intoxicación aguda por depresores del SNC")
          ],

          interactions: [
            t(lang, "Álcool, opioides e benzodiazepínicos: maior depressão respiratória", "Alcohol, opioides y benzodiacepinas: mayor depresión respiratoria"),
            t(lang, "Anticoncepcionais hormonais: reduz eficácia", "Anticonceptivos hormonales: reduce eficacia"),
            t(lang, "Varfarina/DOACs: pode reduzir anticoagulação", "Warfarina/DOACs: puede reducir anticoagulación"),
            t(lang, "Corticosteroides, antirretrovirais e imunossupressores: pode reduzir níveis", "Corticoides, antirretrovirales e inmunosupresores: puede reducir niveles"),
            t(lang, "Valproato: pode aumentar níveis de fenobarbital", "Valproato: puede aumentar niveles de fenobarbital"),
            t(lang, "Outros anticonvulsivantes: interações por indução enzimática", "Otros anticonvulsivantes: interacciones por inducción enzimática")
          ],

          alerts: [
            t(lang, "Monitorar nível sérico, sedação e função respiratória em doses altas.", "Monitorizar nivel sérico, sedación y función respiratoria en dosis altas."),
            t(lang, "Não suspender abruptamente pelo risco de abstinência e crises.", "No suspender bruscamente por riesgo de abstinencia y crisis."),
            t(lang, "Potente indutor enzimático: revisar interações sempre.", "Potente inductor enzimático: revisar interacciones siempre."),
            t(lang, "Evitar álcool e outros depressores do SNC.", "Evitar alcohol y otros depresores del SNC."),
            t(lang, "Em uso crônico, considerar saúde óssea e vitamina D conforme risco.", "En uso crónico, considerar salud ósea y vitamina D según riesgo.")
          ],

          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Phenobarbital Prescribing Information",
            "ILAE Epilepsy Guidelines",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    etossuximida: {
      name: { pt: "Etossuximida", es: "Etosuximida" },
      category: "anticonvulsivante",

      calculate: (paciente, lang = "pt") => {
        const peso = Number(paciente.peso || 0);
        const idade = Number(paciente.idade || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);

        const doseInicial = peso * 10;
        const doseMaxKg = peso * 20;

        return {
          name: t(lang, "Etossuximida", "Etosuximida"),

          class: t(
            lang,
            "Anticonvulsivante succinimida",
            "Anticonvulsivante succinimida"
          ),

          category: "anticonvulsivante",

          commercialNames: {
            br: ["Zarontin", "Etossuximida"],
            ar: ["Zarontin", "Etosuximida"]
          },

          presentation: [
            t(lang, "Cápsula 250 mg", "Cápsula 250 mg"),
            t(lang, "Xarope/solução oral 250 mg/5 mL", "Jarabe/solución oral 250 mg/5 mL")
          ],

          dose: {
            adulto: t(
              lang,
              "Crises de ausência: iniciar 250 mg VO 2x/dia; titular conforme resposta.",
              "Crisis de ausencia: iniciar 250 mg VO 2 veces/día; titular según respuesta."
            ),
            pediatrica: t(
              lang,
              `Dose inicial pediátrica: 10 mg/kg/dia. Para ${peso || 0} kg: ${doseInicial.toFixed(0)} mg/dia.`,
              `Dosis inicial pediátrica: 10 mg/kg/día. Para ${peso || 0} kg: ${doseInicial.toFixed(0)} mg/día.`
            ),
            manutencao: t(
              lang,
              `Manutenção usual: 20 mg/kg/dia. Para ${peso || 0} kg: até ${doseMaxKg.toFixed(0)} mg/dia conforme tolerância.`,
              `Mantenimiento habitual: 20 mg/kg/día. Para ${peso || 0} kg: hasta ${doseMaxKg.toFixed(0)} mg/día según tolerancia.`
            ),
            maxDose: t(
              lang,
              "Dose máxima usual: 1500 mg/dia.",
              "Dosis máxima habitual: 1500 mg/día."
            )
          },

          doseKg: {
            standard: t(lang, "Iniciar 10 mg/kg/dia.", "Iniciar 10 mg/kg/día."),
            severe: t(lang, "Titular geralmente até 20–40 mg/kg/dia conforme resposta e nível sérico.", "Titular generalmente hasta 20–40 mg/kg/día según respuesta y nivel sérico."),
            maxDose: t(lang, "1500 mg/dia", "1500 mg/día")
          },

          indications: [
            t(lang, "Crises de ausência típicas", "Crisis de ausencia típicas"),
            t(lang, "Epilepsia ausência infantil", "Epilepsia ausencia infantil"),
            t(lang, "Crises de ausência sem crises tônico-clônicas associadas", "Crisis de ausencia sin crisis tónico-clónicas asociadas"),
            t(lang, "Alternativa ao valproato quando ausência é o principal tipo de crise", "Alternativa al valproato cuando ausencia es el principal tipo de crisis"),
            t(lang, "Terapia combinada em ausência refratária em casos selecionados", "Terapia combinada en ausencia refractaria en casos seleccionados"),
            t(lang, "Epilepsia generalizada com predomínio de ausência sob especialista", "Epilepsia generalizada con predominio de ausencia bajo especialista")
          ],

          renalAdjustment: t(
            lang,
            "Sem ajuste renal habitual, mas monitorar tolerabilidade em doença renal avançada.",
            "Sin ajuste renal habitual, pero monitorizar tolerabilidad en enfermedad renal avanzada."
          ),

          hepaticAdjustment: hepatopatia
            ? t(
                lang,
                "Hepatopatia: usar com cautela e monitorar função hepática.",
                "Hepatopatía: usar con cautela y monitorizar función hepática."
              )
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),

          mechanism: t(
            lang,
            "Bloqueia canais de cálcio tipo T no tálamo, reduzindo descargas rítmicas associadas às crises de ausência.",
            "Bloquea canales de calcio tipo T en el tálamo, reduciendo descargas rítmicas asociadas a las crisis de ausencia."
          ),

          onset: t(
            lang,
            "Controle de ausência pode ocorrer após dias a semanas de titulação.",
            "Control de ausencias puede ocurrir tras días a semanas de titulación."
          ),

          halfLife: t(
            lang,
            "Vida média aproximada: 30–60 horas em adultos; menor em crianças.",
            "Vida media aproximada: 30–60 horas en adultos; menor en niños."
          ),

          commonAdverseEffects: [
            t(lang, "Náuseas", "Náuseas"),
            t(lang, "Vômitos", "Vómitos"),
            t(lang, "Dor abdominal", "Dolor abdominal"),
            t(lang, "Perda de apetite", "Pérdida de apetito"),
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Cefaleia", "Cefalea"),
            t(lang, "Tontura", "Mareos")
          ],

          dangerousAdverseEffects: [
            t(lang, "Discrasias sanguíneas raras", "Discrasias sanguíneas raras"),
            t(lang, "Síndrome de Stevens-Johnson rara", "Síndrome de Stevens-Johnson rara"),
            t(lang, "Lúpus-like raro", "Síndrome lupus-like raro"),
            t(lang, "Depressão ou ideação suicida", "Depresión o ideación suicida"),
            t(lang, "Hepatotoxicidade rara", "Hepatotoxicidad rara")
          ],

          risksByPatient: [
            idade >= 65
              ? t(lang, "Idoso: uso incomum; monitorar sonolência, tontura e interações.", "Adulto mayor: uso poco común; monitorizar somnolencia, mareos e interacciones.")
              : null,
            gestante
              ? t(lang, "Gestação: avaliar risco-benefício e controle de crises; dados são menos amplos que alguns anticonvulsivantes.", "Embarazo: evaluar riesgo-beneficio y control de crisis; datos son menos amplios que algunos anticonvulsivantes.")
              : null,
            lactante
              ? t(lang, "Lactação: passa ao leite; monitorar sedação, alimentação e irritabilidade.", "Lactancia: pasa a la leche; monitorizar sedación, alimentación e irritabilidad.")
              : null,
            hepatopatia
              ? t(lang, "Hepatopatia: monitorar função hepática e tolerabilidade.", "Hepatopatía: monitorizar función hepática y tolerabilidad.")
              : null
          ].filter(Boolean),

          contraindications: [
            t(lang, "Hipersensibilidade à etossuximida ou succinimidas", "Hipersensibilidad a etosuximida o succinimidas"),
            t(lang, "História de reação hematológica grave associada ao fármaco", "Antecedente de reacción hematológica grave asociada al fármaco")
          ],

          interactions: [
            t(lang, "Valproato: pode alterar níveis de etossuximida", "Valproato: puede alterar niveles de etosuximida"),
            t(lang, "Álcool e sedativos: maior sonolência", "Alcohol y sedantes: mayor somnolencia"),
            t(lang, "Outros anticonvulsivantes: monitorar controle de crises e eventos adversos", "Otros anticonvulsivantes: monitorizar control de crisis y eventos adversos")
          ],

          alerts: [
            t(lang, "É específica para crises de ausência; não cobre bem crises tônico-clônicas isoladamente.", "Es específica para crisis de ausencia; no cubre bien crisis tónico-clónicas aisladamente."),
            t(lang, "Monitorar hemograma se febre, infecções recorrentes, equimoses ou sangramento.", "Monitorizar hemograma si fiebre, infecciones recurrentes, equimosis o sangrado."),
            t(lang, "Monitorar humor e ideação suicida.", "Monitorizar ánimo e ideación suicida."),
            t(lang, "Titular conforme resposta clínica e tolerabilidade gastrointestinal.", "Titular según respuesta clínica y tolerabilidad gastrointestinal."),
            t(lang, "Não suspender abruptamente em pacientes epilépticos.", "No suspender bruscamente en pacientes epilépticos.")
          ],

          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Ethosuximide Prescribing Information",
            "ILAE Epilepsy Guidelines",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    lacosamida: {
      name: { pt: "Lacosamida", es: "Lacosamida" },
      category: "anticonvulsivante",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = clcr < 30;

        return {
          name: t(lang, "Lacosamida", "Lacosamida"),

          class: t(
            lang,
            "Anticonvulsivante modulador de canais de sódio",
            "Anticonvulsivante modulador de canales de sodio"
          ),

          category: "anticonvulsivante",

          commercialNames: {
            br: ["Vimpat", "Lacosamida"],
            ar: ["Vimpat", "Lacosamida Gador", "Lacosamida"]
          },

          presentation: [
            t(lang, "Comprimido 50 mg", "Comprimido 50 mg"),
            t(lang, "Comprimido 100 mg", "Comprimido 100 mg"),
            t(lang, "Comprimido 150 mg", "Comprimido 150 mg"),
            t(lang, "Comprimido 200 mg", "Comprimido 200 mg"),
            t(lang, "Solução oral 10 mg/mL", "Solución oral 10 mg/mL"),
            t(lang, "Frasco-ampola EV 200 mg/20 mL", "Frasco ampolla IV 200 mg/20 mL")
          ],

          dose: {
            adulto: t(
              lang,
              "Crises focais: iniciar 50 mg VO/EV 12/12h; titular semanalmente.",
              "Crisis focales: iniciar 50 mg VO/IV cada 12 h; titular semanalmente."
            ),
            manutencao: t(
              lang,
              "Dose usual: 200–400 mg/dia divididos em 2 tomadas.",
              "Dosis habitual: 200–400 mg/día divididos en 2 tomas."
            ),
            ataque: t(
              lang,
              "Dose de ataque EV/VO pode ser usada em contexto monitorizado conforme protocolo.",
              "Dosis de carga IV/VO puede usarse en contexto monitorizado según protocolo."
            ),
            maxDose: t(
              lang,
              "Dose máxima usual: 400 mg/dia; até 600 mg/dia em alguns contextos especializados.",
              "Dosis máxima habitual: 400 mg/día; hasta 600 mg/día en algunos contextos especializados."
            )
          },

          doseKg: {
            standard: t(
              lang,
              "Adultos: não se usa cálculo rotineiro por kg.",
              "Adultos: no se usa cálculo rutinario por kg."
            ),
            pediatric: t(
              lang,
              "Pediatria: dose por kg conforme idade, peso e protocolo especializado.",
              "Pediatría: dosis por kg según edad, peso y protocolo especializado."
            ),
            maxDose: t(lang, "400 mg/dia usual", "400 mg/día habitual")
          },

          indications: [
            t(lang, "Epilepsia focal", "Epilepsia focal"),
            t(lang, "Crises focais com ou sem generalização bilateral", "Crisis focales con o sin generalización bilateral"),
            t(lang, "Terapia adjuvante em epilepsia focal", "Terapia coadyuvante en epilepsia focal"),
            t(lang, "Monoterapia em epilepsia focal em alguns protocolos", "Monoterapia en epilepsia focal en algunos protocolos"),
            t(lang, "Estado de mal epiléptico refratário como opção adjuvante em alguns centros", "Estado epiléptico refractario como opción coadyuvante en algunos centros"),
            t(lang, "Quando se busca menor interação medicamentosa que indutores enzimáticos", "Cuando se busca menor interacción farmacológica que inductores enzimáticos")
          ],

          renalAdjustment: insuficienciaRenal
            ? t(
                lang,
                "ClCr <30 mL/min: limitar dose máxima e titular com cautela.",
                "ClCr <30 mL/min: limitar dosis máxima y titular con cautela."
              )
            : t(lang, "Sem ajuste renal habitual se função renal preservada.", "Sin ajuste renal habitual si función renal preservada."),

          hepaticAdjustment: hepatopatia
            ? t(
                lang,
                "Hepatopatia leve/moderada: titular com cautela e limitar dose máxima; evitar se grave.",
                "Hepatopatía leve/moderada: titular con cautela y limitar dosis máxima; evitar si grave."
              )
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),

          mechanism: t(
            lang,
            "Aumenta a inativação lenta dos canais de sódio voltagem-dependentes, estabilizando membranas neuronais hiperexcitáveis.",
            "Aumenta la inactivación lenta de canales de sodio voltaje-dependientes, estabilizando membranas neuronales hiperexcitables."
          ),

          onset: t(
            lang,
            "Via EV pode atingir níveis rapidamente; ajuste de manutenção ocorre por titulação clínica.",
            "Vía IV puede alcanzar niveles rápidamente; ajuste de mantenimiento ocurre por titulación clínica."
          ),

          halfLife: t(
            lang,
            "Vida média aproximada: 13 horas.",
            "Vida media aproximada: 13 horas."
          ),

          commonAdverseEffects: [
            t(lang, "Tontura", "Mareos"),
            t(lang, "Cefaleia", "Cefalea"),
            t(lang, "Náuseas", "Náuseas"),
            t(lang, "Diplopia", "Diplopía"),
            t(lang, "Ataxia", "Ataxia"),
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Fadiga", "Fatiga")
          ],

          dangerousAdverseEffects: [
            t(lang, "Prolongamento do intervalo PR", "Prolongación del intervalo PR"),
            t(lang, "Bloqueio AV", "Bloqueo AV"),
            t(lang, "Arritmias em pacientes predispostos", "Arritmias en pacientes predispuestos"),
            t(lang, "Síncope", "Síncope"),
            t(lang, "Ideação suicida", "Ideación suicida"),
            t(lang, "Reação de hipersensibilidade multissistêmica rara", "Reacción de hipersensibilidad multisistémica rara")
          ],

          risksByPatient: [
            idade >= 65
              ? t(lang, "Idoso: maior risco de tontura, quedas, alterações de condução cardíaca e interações.", "Adulto mayor: mayor riesgo de mareos, caídas, alteraciones de conducción cardíaca e interacciones.")
              : null,
            gestante
              ? t(lang, "Gestação: dados limitados; avaliar risco-benefício e controle de crises.", "Embarazo: datos limitados; evaluar riesgo-beneficio y control de crisis.")
              : null,
            lactante
              ? t(lang, "Lactação: dados limitados; monitorar sonolência e alimentação do lactente.", "Lactancia: datos limitados; monitorizar somnolencia y alimentación del lactante.")
              : null,
            hepatopatia
              ? t(lang, "Hepatopatia: limitar dose e evitar se grave.", "Hepatopatía: limitar dosis y evitar si grave.")
              : null,
            insuficienciaRenal
              ? t(lang, "Insuficiência renal grave: limitar dose máxima e monitorar toxicidade.", "Insuficiencia renal grave: limitar dosis máxima y monitorizar toxicidad.")
              : null
          ].filter(Boolean),

          contraindications: [
            t(lang, "Hipersensibilidade à lacosamida", "Hipersensibilidad a lacosamida"),
            t(lang, "Bloqueio AV de 2º ou 3º grau sem marcapasso", "Bloqueo AV de 2º o 3º grado sin marcapasos")
          ],

          interactions: [
            t(lang, "Betabloqueadores, bloqueadores de canal de cálcio e antiarrítmicos: maior risco de PR prolongado", "Betabloqueantes, bloqueantes de canal de calcio y antiarrítmicos: mayor riesgo de PR prolongado"),
            t(lang, "Outros bloqueadores de canais de sódio: maior tontura, diplopia e condução cardíaca", "Otros bloqueadores de canales de sodio: mayor mareo, diplopía y conducción cardíaca"),
            t(lang, "Álcool e sedativos: maior sonolência e prejuízo psicomotor", "Alcohol y sedantes: mayor somnolencia y deterioro psicomotor"),
            t(lang, "Indutores enzimáticos potentes podem reduzir exposição modestamente", "Inductores enzimáticos potentes pueden reducir exposición modestamente")
          ],

          alerts: [
            t(lang, "Considerar ECG em pacientes com doença cardíaca, síncope, idosos ou uso de fármacos que prolongam PR.", "Considerar ECG en pacientes con enfermedad cardíaca, síncope, adultos mayores o uso de fármacos que prolongan PR."),
            t(lang, "Monitorar tontura e risco de quedas.", "Monitorizar mareos y riesgo de caídas."),
            t(lang, "Não suspender abruptamente em epilepsia.", "No suspender bruscamente en epilepsia."),
            t(lang, "Via EV deve ser administrada conforme protocolo e monitorização clínica.", "Vía IV debe administrarse según protocolo y monitorización clínica."),
            t(lang, "Boa opção quando se deseja poucas interações enzimáticas.", "Buena opción cuando se desean pocas interacciones enzimáticas.")
          ],

          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Lacosamide Prescribing Information",
            "ILAE Epilepsy Guidelines",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    }

  });

  Object.assign(window.PSICOFARMACOS_DRUGS_DB, {

    brivaracetam: {
      name: { pt: "Brivaracetam", es: "Brivaracetam" },
      category: "anticonvulsivante",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = clcr < 60;

        return {
          name: t(lang, "Brivaracetam", "Brivaracetam"),

          class: t(
            lang,
            "Anticonvulsivante modulador da proteína SV2A",
            "Anticonvulsivante modulador de la proteína SV2A"
          ),

          category: "anticonvulsivante",

          commercialNames: {
            br: ["Briviact", "Brivaracetam"],
            ar: ["Briviact", "Brivaracetam"]
          },

          presentation: [
            t(lang, "Comprimido 10 mg", "Comprimido 10 mg"),
            t(lang, "Comprimido 25 mg", "Comprimido 25 mg"),
            t(lang, "Comprimido 50 mg", "Comprimido 50 mg"),
            t(lang, "Comprimido 75 mg", "Comprimido 75 mg"),
            t(lang, "Comprimido 100 mg", "Comprimido 100 mg"),
            t(lang, "Solução oral 10 mg/mL", "Solución oral 10 mg/mL"),
            t(lang, "Frasco-ampola EV 50 mg/5 mL", "Frasco ampolla IV 50 mg/5 mL")
          ],

          dose: {
            adulto: t(
              lang,
              "Crises focais: iniciar 50 mg VO/EV 12/12h; ajustar conforme resposta.",
              "Crisis focales: iniciar 50 mg VO/IV cada 12 h; ajustar según respuesta."
            ),
            manutencao: t(
              lang,
              "Dose usual: 50–200 mg/dia divididos em 2 tomadas.",
              "Dosis habitual: 50–200 mg/día divididos en 2 tomas."
            ),
            conversao: t(
              lang,
              "Pode substituir levetiracetam em alguns pacientes por melhor tolerabilidade comportamental.",
              "Puede sustituir levetiracetam en algunos pacientes por mejor tolerabilidad conductual."
            ),
            maxDose: t(
              lang,
              "Dose máxima usual: 200 mg/dia.",
              "Dosis máxima habitual: 200 mg/día."
            )
          },

          doseKg: {
            standard: t(
              lang,
              "Adultos: não se usa cálculo rotineiro por kg.",
              "Adultos: no se usa cálculo rutinario por kg."
            ),
            pediatric: t(
              lang,
              "Pediatria: dose por kg conforme idade, peso e protocolo especializado.",
              "Pediatría: dosis por kg según edad, peso y protocolo especializado."
            ),
            maxDose: t(lang, "200 mg/dia em adultos", "200 mg/día en adultos")
          },

          indications: [
            t(lang, "Epilepsia focal", "Epilepsia focal"),
            t(lang, "Crises focais com ou sem generalização bilateral", "Crisis focales con o sin generalización bilateral"),
            t(lang, "Terapia adjuvante em epilepsia focal", "Terapia coadyuvante en epilepsia focal"),
            t(lang, "Monoterapia em epilepsia focal em alguns protocolos", "Monoterapia en epilepsia focal en algunos protocolos"),
            t(lang, "Alternativa ao levetiracetam por eventos comportamentais em casos selecionados", "Alternativa a levetiracetam por eventos conductuales en casos seleccionados"),
            t(lang, "Epilepsia refratária focal em combinação com outros anticonvulsivantes", "Epilepsia focal refractaria en combinación con otros anticonvulsivantes")
          ],

          renalAdjustment: insuficienciaRenal
            ? t(
                lang,
                "Sem ajuste renal habitual, mas usar cautela em insuficiência renal grave ou diálise.",
                "Sin ajuste renal habitual, pero usar cautela en insuficiencia renal grave o diálisis."
              )
            : t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),

          hepaticAdjustment: hepatopatia
            ? t(
                lang,
                "Hepatopatia: considerar dose inicial menor e limitar dose máxima conforme gravidade.",
                "Hepatopatía: considerar dosis inicial menor y limitar dosis máxima según gravedad."
              )
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),

          mechanism: t(
            lang,
            "Liga-se seletivamente à proteína vesicular sináptica SV2A com alta afinidade, modulando liberação de neurotransmissores e reduzindo hiperexcitabilidade neuronal.",
            "Se une selectivamente a la proteína vesicular sináptica SV2A con alta afinidad, modulando liberación de neurotransmisores y reduciendo hiperexcitabilidad neuronal."
          ),

          onset: t(
            lang,
            "Início anticonvulsivante rápido; VO e EV podem ser usadas em doses equivalentes.",
            "Inicio anticonvulsivante rápido; VO e IV pueden usarse en dosis equivalentes."
          ),

          halfLife: t(
            lang,
            "Vida média aproximada: 9 horas.",
            "Vida media aproximada: 9 horas."
          ),

          commonAdverseEffects: [
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Fadiga", "Fatiga"),
            t(lang, "Náuseas", "Náuseas"),
            t(lang, "Cefaleia", "Cefalea"),
            t(lang, "Irritabilidade", "Irritabilidad")
          ],

          dangerousAdverseEffects: [
            t(lang, "Depressão ou ideação suicida", "Depresión o ideación suicida"),
            t(lang, "Alterações comportamentais importantes", "Alteraciones conductuales importantes"),
            t(lang, "Psicose rara", "Psicosis rara"),
            t(lang, "Reações de hipersensibilidade raras", "Reacciones de hipersensibilidad raras"),
            t(lang, "Sedação intensa em associação com depressores do SNC", "Sedación intensa en asociación con depresores del SNC")
          ],

          risksByPatient: [
            idade >= 65
              ? t(lang, "Idoso: maior risco de sonolência, tontura, quedas e interações por polifarmácia.", "Adulto mayor: mayor riesgo de somnolencia, mareos, caídas e interacciones por polifarmacia.")
              : null,
            gestante
              ? t(lang, "Gestação: dados limitados; avaliar risco-benefício e controle de crises.", "Embarazo: datos limitados; evaluar riesgo-beneficio y control de crisis.")
              : null,
            lactante
              ? t(lang, "Lactação: dados limitados; monitorar sonolência e alimentação do lactente.", "Lactancia: datos limitados; monitorizar somnolencia y alimentación del lactante.")
              : null,
            hepatopatia
              ? t(lang, "Hepatopatia: reduzir dose conforme gravidade.", "Hepatopatía: reducir dosis según gravedad.")
              : null,
            insuficienciaRenal
              ? t(lang, "Insuficiência renal grave: cautela, especialmente em diálise.", "Insuficiencia renal grave: cautela, especialmente en diálisis.")
              : null
          ].filter(Boolean),

          contraindications: [
            t(lang, "Hipersensibilidade ao brivaracetam", "Hipersensibilidad a brivaracetam"),
            t(lang, "História de reação grave ao fármaco", "Antecedente de reacción grave al fármaco")
          ],

          interactions: [
            t(lang, "Álcool e sedativos: maior sonolência e prejuízo psicomotor", "Alcohol y sedantes: mayor somnolencia y deterioro psicomotor"),
            t(lang, "Rifampicina: pode reduzir níveis de brivaracetam", "Rifampicina: puede reducir niveles de brivaracetam"),
            t(lang, "Carbamazepina: pode aumentar exposição ao epóxido ativo da carbamazepina", "Carbamazepina: puede aumentar exposición al epóxido activo de carbamazepina"),
            t(lang, "Outros anticonvulsivantes: monitorar sedação e controle de crises", "Otros anticonvulsivantes: monitorizar sedación y control de crisis")
          ],

          alerts: [
            t(lang, "Monitorar humor, irritabilidade, depressão e ideação suicida.", "Monitorizar ánimo, irritabilidad, depresión e ideación suicida."),
            t(lang, "Não suspender abruptamente em epilepsia.", "No suspender bruscamente en epilepsia."),
            t(lang, "Via EV pode substituir VO em dose equivalente quando necessário.", "Vía IV puede sustituir VO en dosis equivalente cuando sea necesario."),
            t(lang, "Pode ter menos eventos comportamentais que levetiracetam em alguns pacientes, mas ainda exige vigilância.", "Puede tener menos eventos conductuales que levetiracetam en algunos pacientes, pero aún requiere vigilancia."),
            t(lang, "Ajustar com cautela em hepatopatia.", "Ajustar con cautela en hepatopatía.")
          ],

          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Brivaracetam Prescribing Information",
            "ILAE Epilepsy Guidelines",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    vigabatrina: {
      name: { pt: "Vigabatrina", es: "Vigabatrina" },
      category: "anticonvulsivante",

      calculate: (paciente, lang = "pt") => {
        const peso = Number(paciente.peso || 0);
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = clcr < 60;

        const doseInfantilMin = peso * 50;
        const doseInfantilMax = peso * 100;

        return {
          name: t(lang, "Vigabatrina", "Vigabatrina"),

          class: t(
            lang,
            "Anticonvulsivante inibidor irreversível da GABA-transaminase",
            "Anticonvulsivante inhibidor irreversible de la GABA-transaminasa"
          ),

          category: "anticonvulsivante",

          commercialNames: {
            br: ["Sabril", "Vigabatrina"],
            ar: ["Sabril", "Vigabatrina"]
          },

          presentation: [
            t(lang, "Comprimido 500 mg", "Comprimido 500 mg"),
            t(lang, "Sachê/pó para solução oral 500 mg", "Sobre/polvo para solución oral 500 mg")
          ],

          dose: {
            adulto: t(
              lang,
              "Epilepsia focal refratária: iniciar 500 mg VO 12/12h; titular conforme resposta.",
              "Epilepsia focal refractaria: iniciar 500 mg VO cada 12 h; titular según respuesta."
            ),
            manutencao: t(
              lang,
              "Dose usual em adultos: 1–3 g/dia divididos em 1–2 tomadas.",
              "Dosis habitual en adultos: 1–3 g/día divididos en 1–2 tomas."
            ),
            espasmosInfantis: t(
              lang,
              `Espasmos infantis: dose por peso conforme protocolo. Para ${peso || 0} kg: cerca de ${doseInfantilMin.toFixed(0)}–${doseInfantilMax.toFixed(0)} mg/dia inicialmente.`,
              `Espasmos infantiles: dosis por peso según protocolo. Para ${peso || 0} kg: cerca de ${doseInfantilMin.toFixed(0)}–${doseInfantilMax.toFixed(0)} mg/día inicialmente.`
            ),
            maxDose: t(
              lang,
              "Dose máxima usual: 3 g/dia em adultos; pediatria conforme peso e protocolo.",
              "Dosis máxima habitual: 3 g/día en adultos; pediatría según peso y protocolo."
            )
          },

          doseKg: {
            standard: t(
              lang,
              "Espasmos infantis: iniciar aproximadamente 50 mg/kg/dia.",
              "Espasmos infantiles: iniciar aproximadamente 50 mg/kg/día."
            ),
            severe: t(
              lang,
              "Pode titular até 100–150 mg/kg/dia conforme resposta e tolerabilidade.",
              "Puede titularse hasta 100–150 mg/kg/día según respuesta y tolerabilidad."
            ),
            maxDose: t(lang, "3 g/dia em adultos", "3 g/día en adultos")
          },

          indications: [
            t(lang, "Espasmos infantis", "Espasmos infantiles"),
            t(lang, "Síndrome de West", "Síndrome de West"),
            t(lang, "Espasmos infantis associados à esclerose tuberosa", "Espasmos infantiles asociados a esclerosis tuberosa"),
            t(lang, "Epilepsia focal refratária como terapia adjuvante", "Epilepsia focal refractaria como terapia coadyuvante"),
            t(lang, "Crises focais resistentes a múltiplos anticonvulsivantes", "Crisis focales resistentes a múltiples anticonvulsivantes"),
            t(lang, "Epilepsia de difícil controle sob neurologia especializada", "Epilepsia de difícil control bajo neurología especializada")
          ],

          renalAdjustment: insuficienciaRenal
            ? t(
                lang,
                "Necessita ajuste renal conforme ClCr; reduzir dose e monitorar toxicidade.",
                "Requiere ajuste renal según ClCr; reducir dosis y monitorizar toxicidad."
              )
            : t(lang, "Sem ajuste renal se função renal normal.", "Sin ajuste renal si función renal normal."),

          hepaticAdjustment: hepatopatia
            ? t(
                lang,
                "Sem metabolismo hepático relevante; geralmente não requer ajuste hepático.",
                "Sin metabolismo hepático relevante; generalmente no requiere ajuste hepático."
              )
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),

          mechanism: t(
            lang,
            "Inibe irreversivelmente a GABA-transaminase, aumentando níveis cerebrais de GABA e reduzindo excitabilidade neuronal.",
            "Inhibe irreversiblemente la GABA-transaminasa, aumentando niveles cerebrales de GABA y reduciendo excitabilidad neuronal."
          ),

          onset: t(
            lang,
            "Em espasmos infantis, resposta pode ocorrer em dias a poucas semanas; reavaliar precocemente eficácia.",
            "En espasmos infantiles, la respuesta puede ocurrir en días a pocas semanas; reevaluar precozmente eficacia."
          ),

          halfLife: t(
            lang,
            "Vida média plasmática aproximada: 5–8 horas; efeito farmacodinâmico dura mais por inibição irreversível.",
            "Vida media plasmática aproximada: 5–8 horas; efecto farmacodinámico dura más por inhibición irreversible."
          ),

          commonAdverseEffects: [
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Fadiga", "Fatiga"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Ganho de peso", "Aumento de peso"),
            t(lang, "Irritabilidade", "Irritabilidad"),
            t(lang, "Tremor", "Temblor"),
            t(lang, "Nistagmo", "Nistagmo")
          ],

          dangerousAdverseEffects: [
            t(lang, "Perda visual periférica irreversível", "Pérdida visual periférica irreversible"),
            t(lang, "Alterações retinianas", "Alteraciones retinianas"),
            t(lang, "Depressão ou ideação suicida", "Depresión o ideación suicida"),
            t(lang, "Psicose ou alteração comportamental", "Psicosis o alteración conductual"),
            t(lang, "Alterações de ressonância em lactentes", "Alteraciones de resonancia en lactantes"),
            t(lang, "Anemia ou neuropatia periférica rara", "Anemia o neuropatía periférica rara")
          ],

          risksByPatient: [
            idade >= 65
              ? t(lang, "Idoso: maior risco de sedação, tontura, quedas e perda visual não percebida.", "Adulto mayor: mayor riesgo de sedación, mareos, caídas y pérdida visual no percibida.")
              : null,
            gestante
              ? t(lang, "Gestação: avaliar risco-benefício; dados limitados e epilepsia deve permanecer controlada.", "Embarazo: evaluar riesgo-beneficio; datos limitados y epilepsia debe permanecer controlada.")
              : null,
            lactante
              ? t(lang, "Lactação: passa ao leite; monitorar sedação, alimentação e desenvolvimento do lactente.", "Lactancia: pasa a la leche; monitorizar sedación, alimentación y desarrollo del lactante.")
              : null,
            hepatopatia
              ? t(lang, "Hepatopatia: geralmente sem ajuste, mas monitorar tolerabilidade.", "Hepatopatía: generalmente sin ajuste, pero monitorizar tolerabilidad.")
              : null,
            insuficienciaRenal
              ? t(lang, "Insuficiência renal: ajuste obrigatório conforme ClCr.", "Insuficiencia renal: ajuste obligatorio según ClCr.")
              : null
          ].filter(Boolean),

          contraindications: [
            t(lang, "Hipersensibilidade à vigabatrina", "Hipersensibilidad a vigabatrina"),
            t(lang, "Perda visual significativa pré-existente quando houver alternativa", "Pérdida visual significativa preexistente cuando haya alternativa"),
            t(lang, "Impossibilidade de monitorização oftalmológica quando exigida", "Imposibilidad de monitorización oftalmológica cuando sea exigida")
          ],

          interactions: [
            t(lang, "Fenitoína: pode reduzir níveis de fenitoína", "Fenitoína: puede reducir niveles de fenitoína"),
            t(lang, "Álcool e sedativos: maior sonolência", "Alcohol y sedantes: mayor somnolencia"),
            t(lang, "Outros anticonvulsivantes: monitorar sedação e controle de crises", "Otros anticonvulsivantes: monitorizar sedación y control de crisis")
          ],

          alerts: [
            t(lang, "Risco clássico e grave: perda visual periférica irreversível.", "Riesgo clásico y grave: pérdida visual periférica irreversible."),
            t(lang, "Exige avaliação oftalmológica basal e periódica quando possível.", "Requiere evaluación oftalmológica basal y periódica cuando sea posible."),
            t(lang, "Usar apenas quando benefício supera claramente risco visual.", "Usar solo cuando el beneficio supera claramente el riesgo visual."),
            t(lang, "Reavaliar eficácia precocemente; suspender se não houver benefício clínico relevante.", "Reevaluar eficacia precozmente; suspender si no hay beneficio clínico relevante."),
            t(lang, "Não suspender abruptamente em epilepsia sem plano médico.", "No suspender bruscamente en epilepsia sin plan médico.")
          ],

          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Vigabatrin Prescribing Information",
            "ILAE Epilepsy Guidelines",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    rufinamida: {
      name: { pt: "Rufinamida", es: "Rufinamida" },
      category: "anticonvulsivante",

      calculate: (paciente, lang = "pt") => {
        const peso = Number(paciente.peso || 0);
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = clcr < 30;

        const dosePediatricaInicial = peso * 10;
        const dosePediatricaMax = peso * 45;

        return {
          name: t(lang, "Rufinamida", "Rufinamida"),

          class: t(
            lang,
            "Anticonvulsivante triazólico modulador de canais de sódio",
            "Anticonvulsivante triazólico modulador de canales de sodio"
          ),

          category: "anticonvulsivante",

          commercialNames: {
            br: ["Inovelon", "Rufinamida"],
            ar: ["Inovelon", "Rufinamida"]
          },

          presentation: [
            t(lang, "Comprimido 200 mg", "Comprimido 200 mg"),
            t(lang, "Comprimido 400 mg", "Comprimido 400 mg"),
            t(lang, "Suspensão oral 40 mg/mL", "Suspensión oral 40 mg/mL")
          ],

          dose: {
            adulto: t(
              lang,
              "Síndrome de Lennox-Gastaut: iniciar 400–800 mg/dia VO divididos 12/12h, com alimento; titular conforme resposta.",
              "Síndrome de Lennox-Gastaut: iniciar 400–800 mg/día VO divididos cada 12 h, con comida; titular según respuesta."
            ),
            pediatrica: t(
              lang,
              `Pediatria: iniciar cerca de 10 mg/kg/dia. Para ${peso || 0} kg: ${dosePediatricaInicial.toFixed(0)} mg/dia.`,
              `Pediatría: iniciar cerca de 10 mg/kg/día. Para ${peso || 0} kg: ${dosePediatricaInicial.toFixed(0)} mg/día.`
            ),
            manutencao: t(
              lang,
              `Manutenção pediátrica pode chegar a 45 mg/kg/dia. Para ${peso || 0} kg: até ${dosePediatricaMax.toFixed(0)} mg/dia conforme protocolo.`,
              `Mantenimiento pediátrico puede llegar a 45 mg/kg/día. Para ${peso || 0} kg: hasta ${dosePediatricaMax.toFixed(0)} mg/día según protocolo.`
            ),
            maxDose: t(
              lang,
              "Dose máxima usual: 3200 mg/dia em adultos.",
              "Dosis máxima habitual: 3200 mg/día en adultos."
            )
          },

          doseKg: {
            standard: t(lang, "Pediatria: iniciar 10 mg/kg/dia.", "Pediatría: iniciar 10 mg/kg/día."),
            severe: t(lang, "Titular até 45 mg/kg/dia conforme resposta e tolerabilidade.", "Titular hasta 45 mg/kg/día según respuesta y tolerabilidad."),
            maxDose: t(lang, "3200 mg/dia em adultos", "3200 mg/día en adultos")
          },

          indications: [
            t(lang, "Síndrome de Lennox-Gastaut", "Síndrome de Lennox-Gastaut"),
            t(lang, "Crises atônicas/drop attacks associadas a Lennox-Gastaut", "Crisis atónicas/drop attacks asociadas a Lennox-Gastaut"),
            t(lang, "Crises tônico-clônicas em epilepsias generalizadas complexas", "Crisis tónico-clónicas en epilepsias generalizadas complejas"),
            t(lang, "Terapia adjuvante em epilepsia refratária", "Terapia coadyuvante en epilepsia refractaria"),
            t(lang, "Epilepsia pediátrica de difícil controle sob especialista", "Epilepsia pediátrica de difícil control bajo especialista"),
            t(lang, "Crises múltiplas associadas a encefalopatias epilépticas", "Crisis múltiples asociadas a encefalopatías epilépticas")
          ],

          renalAdjustment: insuficienciaRenal
            ? t(
                lang,
                "Insuficiência renal grave: geralmente sem grande ajuste, mas usar cautela e monitorar tolerabilidade.",
                "Insuficiencia renal grave: generalmente sin gran ajuste, pero usar cautela y monitorizar tolerabilidad."
              )
            : t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),

          hepaticAdjustment: hepatopatia
            ? t(
                lang,
                "Hepatopatia: usar com cautela; não recomendada em hepatopatia grave.",
                "Hepatopatía: usar con cautela; no recomendada en hepatopatía grave."
              )
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),

          mechanism: t(
            lang,
            "Prolonga o estado inativado dos canais de sódio voltagem-dependentes, reduzindo descargas neuronais repetitivas.",
            "Prolonga el estado inactivado de los canales de sodio voltaje-dependientes, reduciendo descargas neuronales repetitivas."
          ),

          onset: t(
            lang,
            "Controle de crises é avaliado após titulação gradual em dias a semanas.",
            "El control de crisis se evalúa tras titulación gradual en días a semanas."
          ),

          halfLife: t(
            lang,
            "Vida média aproximada: 6–10 horas.",
            "Vida media aproximada: 6–10 horas."
          ),

          commonAdverseEffects: [
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Fadiga", "Fatiga"),
            t(lang, "Náuseas", "Náuseas"),
            t(lang, "Vômitos", "Vómitos"),
            t(lang, "Cefaleia", "Cefalea"),
            t(lang, "Diplopia", "Diplopía")
          ],

          dangerousAdverseEffects: [
            t(lang, "Síndrome de hipersensibilidade medicamentosa/DRESS", "Síndrome de hipersensibilidad medicamentosa/DRESS"),
            t(lang, "Síndrome de Stevens-Johnson rara", "Síndrome de Stevens-Johnson rara"),
            t(lang, "Ideação suicida", "Ideación suicida"),
            t(lang, "Encurtamento do intervalo QT", "Acortamiento del intervalo QT"),
            t(lang, "Piora paradoxal de crises em casos raros", "Empeoramiento paradójico de crisis en casos raros")
          ],

          risksByPatient: [
            idade >= 65
              ? t(lang, "Idoso: experiência limitada; maior risco de tontura, sedação e quedas.", "Adulto mayor: experiencia limitada; mayor riesgo de mareos, sedación y caídas.")
              : null,
            gestante
              ? t(lang, "Gestação: dados limitados; avaliar risco-benefício e controle de crises.", "Embarazo: datos limitados; evaluar riesgo-beneficio y control de crisis.")
              : null,
            lactante
              ? t(lang, "Lactação: dados limitados; monitorar sonolência e alimentação do lactente.", "Lactancia: datos limitados; monitorizar somnolencia y alimentación del lactante.")
              : null,
            hepatopatia
              ? t(lang, "Hepatopatia: evitar se grave; maior risco de toxicidade.", "Hepatopatía: evitar si es grave; mayor riesgo de toxicidad.")
              : null
          ].filter(Boolean),

          contraindications: [
            t(lang, "Hipersensibilidade à rufinamida", "Hipersensibilidad a rufinamida"),
            t(lang, "Síndrome do QT curto familiar", "Síndrome de QT corto familiar"),
            t(lang, "Hepatopatia grave", "Hepatopatía grave"),
            t(lang, "História de reação de hipersensibilidade grave ao fármaco", "Antecedente de reacción de hipersensibilidad grave al fármaco")
          ],

          interactions: [
            t(lang, "Valproato: pode aumentar níveis de rufinamida", "Valproato: puede aumentar niveles de rufinamida"),
            t(lang, "Carbamazepina, fenitoína, fenobarbital e primidona: podem reduzir níveis", "Carbamazepina, fenitoína, fenobarbital y primidona: pueden reducir niveles"),
            t(lang, "Anticoncepcionais hormonais: pode reduzir eficácia", "Anticonceptivos hormonales: puede reducir eficacia"),
            t(lang, "Álcool e sedativos: maior sonolência", "Alcohol y sedantes: mayor somnolencia")
          ],

          alerts: [
            t(lang, "Administrar com alimentos para melhor absorção.", "Administrar con alimentos para mejor absorción."),
            t(lang, "Evitar em síndrome do QT curto familiar.", "Evitar en síndrome de QT corto familiar."),
            t(lang, "Monitorar rash, febre, linfadenopatia ou sintomas sistêmicos.", "Monitorizar rash, fiebre, linfadenopatía o síntomas sistémicos."),
            t(lang, "Pode reduzir eficácia de anticoncepcionais hormonais.", "Puede reducir eficacia de anticonceptivos hormonales."),
            t(lang, "Não suspender abruptamente em epilepsia.", "No suspender bruscamente en epilepsia.")
          ],

          ref: [
            "Goodman & Gilman 14ª Ed.",
            "FDA/DailyMed Rufinamide Prescribing Information",
            "ILAE Epilepsy Guidelines",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    primidona: {
      name: { pt: "Primidona", es: "Primidona" },
      category: "anticonvulsivante",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = clcr < 60;

        return {
          name: t(lang, "Primidona", "Primidona"),

          class: t(
            lang,
            "Anticonvulsivante barbitúrico-like pró-fármaco do fenobarbital",
            "Anticonvulsivante tipo barbitúrico profármaco de fenobarbital"
          ),

          category: "anticonvulsivante",

          commercialNames: {
            br: ["Mysoline", "Primidona"],
            ar: ["Mysoline", "Primidona"]
          },

          presentation: [
            t(lang, "Comprimido 250 mg", "Comprimido 250 mg")
          ],

          dose: {
            adulto: t(
              lang,
              "Epilepsia/tremor essencial: iniciar 25–50 mg à noite ou 125 mg/dia; titular lentamente.",
              "Epilepsia/temblor esencial: iniciar 25–50 mg por la noche o 125 mg/día; titular lentamente."
            ),
            manutencao: t(
              lang,
              "Dose usual: 250 mg 2–4x/dia, conforme resposta e tolerabilidade.",
              "Dosis habitual: 250 mg 2–4 veces/día, según respuesta y tolerabilidad."
            ),
            maxDose: t(
              lang,
              "Dose máxima usual: 2000 mg/dia.",
              "Dosis máxima habitual: 2000 mg/día."
            )
          },

          doseKg: {
            standard: t(
              lang,
              "Adultos: geralmente titular por resposta clínica, não por kg.",
              "Adultos: generalmente titular por respuesta clínica, no por kg."
            ),
            pediatric: t(
              lang,
              "Pediatria/epilepsia: dose por kg conforme protocolo especializado.",
              "Pediatría/epilepsia: dosis por kg según protocolo especializado."
            ),
            maxDose: t(lang, "2000 mg/dia", "2000 mg/día")
          },

          indications: [
            t(lang, "Epilepsia focal", "Epilepsia focal"),
            t(lang, "Crises tônico-clônicas generalizadas", "Crisis tónico-clónicas generalizadas"),
            t(lang, "Tremor essencial", "Temblor esencial"),
            t(lang, "Epilepsia refratária em combinação com outros anticonvulsivantes", "Epilepsia refractaria en combinación con otros anticonvulsivantes"),
            t(lang, "Crises parciais com generalização secundária", "Crisis parciales con generalización secundaria"),
            t(lang, "Alternativa histórica quando outros anticonvulsivantes não são adequados", "Alternativa histórica cuando otros anticonvulsivantes no son adecuados")
          ],

          renalAdjustment: insuficienciaRenal
            ? t(
                lang,
                "Insuficiência renal: usar com cautela; pode haver acúmulo de metabólitos ativos.",
                "Insuficiencia renal: usar con cautela; puede haber acumulación de metabolitos activos."
              )
            : t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),

          hepaticAdjustment: hepatopatia
            ? t(
                lang,
                "Hepatopatia: usar com cautela; metabolismo e sedação podem ser alterados.",
                "Hepatopatía: usar con cautela; metabolismo y sedación pueden alterarse."
              )
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),

          mechanism: t(
            lang,
            "Convertida parcialmente em fenobarbital e PEMA; potencializa GABA-A e reduz excitabilidade neuronal.",
            "Convertida parcialmente en fenobarbital y PEMA; potencia GABA-A y reduce excitabilidad neuronal."
          ),

          onset: t(
            lang,
            "Efeito depende da titulação e formação de metabólitos ativos; iniciar lentamente reduz intolerância.",
            "El efecto depende de la titulación y formación de metabolitos activos; iniciar lentamente reduce intolerancia."
          ),

          halfLife: t(
            lang,
            "Primidona: 5–15 horas; metabólito fenobarbital tem meia-vida longa de vários dias.",
            "Primidona: 5–15 horas; metabolito fenobarbital tiene vida media larga de varios días."
          ),

          commonAdverseEffects: [
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Ataxia", "Ataxia"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Náuseas", "Náuseas"),
            t(lang, "Fadiga", "Fatiga"),
            t(lang, "Nistagmo", "Nistagmo"),
            t(lang, "Déficit cognitivo", "Deterioro cognitivo")
          ],

          dangerousAdverseEffects: [
            t(lang, "Depressão respiratória em intoxicação ou associação com sedativos", "Depresión respiratoria en intoxicación o asociación con sedantes"),
            t(lang, "Dependência física e abstinência", "Dependencia física y abstinencia"),
            t(lang, "Depressão ou ideação suicida", "Depresión o ideación suicida"),
            t(lang, "Reações cutâneas graves raras", "Reacciones cutáneas graves raras"),
            t(lang, "Depressão medular rara", "Depresión medular rara"),
            t(lang, "Osteopenia/osteomalácia em uso crônico", "Osteopenia/osteomalacia en uso crónico")
          ],

          risksByPatient: [
            idade >= 65
              ? t(lang, "Idoso: maior risco de sedação, quedas, confusão, ataxia e interações.", "Adulto mayor: mayor riesgo de sedación, caídas, confusión, ataxia e interacciones.")
              : null,
            gestante
              ? t(lang, "Gestação: risco teratogênico e de abstinência neonatal; avaliar alternativa e suplementar ácido fólico se inevitável.", "Embarazo: riesgo teratogénico y de abstinencia neonatal; evaluar alternativa y suplementar ácido fólico si inevitable.")
              : null,
            lactante
              ? t(lang, "Lactação: pode causar sedação no lactente; monitorar sucção e ganho ponderal.", "Lactancia: puede causar sedación en lactante; monitorizar succión y ganancia ponderal.")
              : null,
            hepatopatia
              ? t(lang, "Hepatopatia: maior risco de sedação prolongada e toxicidade.", "Hepatopatía: mayor riesgo de sedación prolongada y toxicidad.")
              : null,
            insuficienciaRenal
              ? t(lang, "Insuficiência renal: monitorar acúmulo e sedação.", "Insuficiencia renal: monitorizar acumulación y sedación.")
              : null
          ].filter(Boolean),

          contraindications: [
            t(lang, "Hipersensibilidade à primidona ou barbitúricos", "Hipersensibilidad a primidona o barbitúricos"),
            t(lang, "Porfiria aguda intermitente", "Porfiria aguda intermitente"),
            t(lang, "Insuficiência respiratória grave sem suporte", "Insuficiencia respiratoria grave sin soporte"),
            t(lang, "Doença hepática grave", "Enfermedad hepática grave")
          ],

          interactions: [
            t(lang, "Álcool, opioides e benzodiazepínicos: maior depressão do SNC", "Alcohol, opioides y benzodiacepinas: mayor depresión del SNC"),
            t(lang, "Anticoncepcionais hormonais: reduz eficácia", "Anticonceptivos hormonales: reduce eficacia"),
            t(lang, "Varfarina/DOACs: pode reduzir anticoagulação", "Warfarina/DOACs: puede reducir anticoagulación"),
            t(lang, "Valproato: pode aumentar fenobarbital/metabólitos", "Valproato: puede aumentar fenobarbital/metabolitos"),
            t(lang, "Múltiplos fármacos metabolizados por CYP: risco alto de interações por indução enzimática", "Múltiples fármacos metabolizados por CYP: alto riesgo de interacciones por inducción enzimática")
          ],

          alerts: [
            t(lang, "Titular lentamente para evitar sedação intensa e ataxia.", "Titular lentamente para evitar sedación intensa y ataxia."),
            t(lang, "Não suspender abruptamente pelo risco de crises e abstinência.", "No suspender bruscamente por riesgo de crisis y abstinencia."),
            t(lang, "Potente indutor enzimático: revisar interações sempre.", "Potente inductor enzimático: revisar interacciones siempre."),
            t(lang, "Monitorar sedação, quedas, humor e ideação suicida.", "Monitorizar sedación, caídas, ánimo e ideación suicida."),
            t(lang, "Em uso crônico, considerar avaliação de saúde óssea.", "En uso crónico, considerar evaluación de salud ósea.")
          ],

          ref: [
            "Goodman & Gilman 14ª Ed.",
            "FDA/DailyMed Primidone Prescribing Information",
            "ILAE Epilepsy Guidelines",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    }

  });

  Object.assign(window.PSICOFARMACOS_DRUGS_DB, {

    levodopa_carbidopa: {
      name: { pt: "Levodopa + Carbidopa", es: "Levodopa + Carbidopa" },
      category: "antiparkinsoniano",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const clcr = Number(paciente.clcr || 100);
        const insuficienciaRenal = clcr < 60;

        return {
          name: t(lang, "Levodopa + Carbidopa", "Levodopa + Carbidopa"),

          class: t(
            lang,
            "Precursor dopaminérgico associado a inibidor periférico da dopa-descarboxilase",
            "Precursor dopaminérgico asociado a inhibidor periférico de la dopa-descarboxilasa"
          ),

          category: "antiparkinsoniano",

          commercialNames: {
            br: ["Sinemet", "Prolopa DR não contém carbidopa", "Levodopa + Carbidopa"],
            ar: ["Sinemet", "Levodopa/Carbidopa", "Carbidopa Levodopa"]
          },

          presentation: [
            t(lang, "Comprimido 250/25 mg", "Comprimido 250/25 mg"),
            t(lang, "Comprimido 100/25 mg", "Comprimido 100/25 mg"),
            t(lang, "Comprimido de liberação prolongada", "Comprimido de liberación prolongada"),
            t(lang, "Formulações dispersíveis ou entéricas conforme disponibilidade local", "Formulaciones dispersables o entéricas según disponibilidad local")
          ],

          dose: {
            adulto: t(
              lang,
              "Doença de Parkinson: iniciar com doses baixas, por exemplo 100/25 mg VO 2–3x/dia, titular conforme resposta motora e efeitos adversos.",
              "Enfermedad de Parkinson: iniciar con dosis bajas, por ejemplo 100/25 mg VO 2–3 veces/día, titular según respuesta motora y efectos adversos."
            ),
            manutencao: t(
              lang,
              "Dose de manutenção é individualizada; ajustar frequência conforme wearing-off, discinesias e controle dos sintomas.",
              "La dosis de mantenimiento es individualizada; ajustar frecuencia según wearing-off, discinesias y control de síntomas."
            ),
            maxDose: t(
              lang,
              "Dose máxima não é fixa; individualizar por resposta clínica, discinesias, hipotensão, psicose e tolerabilidade.",
              "La dosis máxima no es fija; individualizar por respuesta clínica, discinesias, hipotensión, psicosis y tolerabilidad."
            )
          },

          doseKg: {
            standard: t(
              lang,
              "Não se utiliza cálculo rotineiro por kg em adultos.",
              "No se utiliza cálculo rutinario por kg en adultos."
            ),
            pediatric: t(
              lang,
              "Uso pediátrico não rotineiro; avaliar apenas em condições neurológicas específicas sob especialista.",
              "Uso pediátrico no rutinario; evaluar solo en condiciones neurológicas específicas bajo especialista."
            ),
            maxDose: t(
              lang,
              "Individualizar conforme resposta e eventos adversos.",
              "Individualizar según respuesta y eventos adversos."
            )
          },

          indications: [
            t(lang, "Doença de Parkinson idiopática", "Enfermedad de Parkinson idiopática"),
            t(lang, "Bradicinesia parkinsoniana", "Bradicinesia parkinsoniana"),
            t(lang, "Rigidez parkinsoniana", "Rigidez parkinsoniana"),
            t(lang, "Tremor de repouso na doença de Parkinson", "Temblor de reposo en enfermedad de Parkinson"),
            t(lang, "Flutuações motoras em ajuste terapêutico", "Fluctuaciones motoras en ajuste terapéutico"),
            t(lang, "Parkinsonismo sintomático responsivo à levodopa em casos selecionados", "Parkinsonismo sintomático responsivo a levodopa en casos seleccionados")
          ],

          renalAdjustment: insuficienciaRenal
            ? t(
                lang,
                "Insuficiência renal: geralmente sem ajuste obrigatório, mas titular com cautela e monitorar confusão/hipotensão.",
                "Insuficiencia renal: generalmente sin ajuste obligatorio, pero titular con cautela y monitorizar confusión/hipotensión."
              )
            : t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),

          hepaticAdjustment: hepatopatia
            ? t(
                lang,
                "Hepatopatia: titular com cautela e monitorar efeitos adversos.",
                "Hepatopatía: titular con cautela y monitorizar efectos adversos."
              )
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),

          mechanism: t(
            lang,
            "A levodopa atravessa a barreira hematoencefálica e é convertida em dopamina no SNC; a carbidopa inibe a conversão periférica, aumentando disponibilidade cerebral e reduzindo náuseas/hipotensão.",
            "La levodopa atraviesa la barrera hematoencefálica y se convierte en dopamina en el SNC; la carbidopa inhibe la conversión periférica, aumentando disponibilidad cerebral y reduciendo náuseas/hipotensión."
          ),

          onset: t(
            lang,
            "Início clínico geralmente em 30–60 minutos nas formulações imediatas; resposta varia com alimentação e estágio da doença.",
            "Inicio clínico generalmente en 30–60 minutos en formulaciones inmediatas; respuesta varía con alimentación y estadio de la enfermedad."
          ),

          halfLife: t(
            lang,
            "Vida média curta, cerca de 1–2 horas; efeito clínico pode encurtar com progressão da doença.",
            "Vida media corta, cerca de 1–2 horas; el efecto clínico puede acortarse con progresión de la enfermedad."
          ),

          commonAdverseEffects: [
            t(lang, "Náuseas", "Náuseas"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Hipotensão ortostática", "Hipotensión ortostática"),
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Discinesias", "Discinesias"),
            t(lang, "Confusão", "Confusión"),
            t(lang, "Insônia ou sonhos vívidos", "Insomnio o sueños vívidos")
          ],

          dangerousAdverseEffects: [
            t(lang, "Psicose ou alucinações", "Psicosis o alucinaciones"),
            t(lang, "Discinesias graves", "Discinesias graves"),
            t(lang, "Hipotensão sintomática com quedas", "Hipotensión sintomática con caídas"),
            t(lang, "Síndrome semelhante à neuroléptica maligna se retirada abrupta", "Síndrome similar al neuroléptico maligno si retirada brusca"),
            t(lang, "Compulsões/impulsividade em predispostos", "Compulsiones/impulsividad en predispuestos")
          ],

          risksByPatient: [
            idade >= 65
              ? t(lang, "Idoso: maior risco de confusão, alucinações, hipotensão e quedas.", "Adulto mayor: mayor riesgo de confusión, alucinaciones, hipotensión y caídas.")
              : null,
            gestante
              ? t(lang, "Gestação: avaliar risco-benefício; dados limitados.", "Embarazo: evaluar riesgo-beneficio; datos limitados.")
              : null,
            lactante
              ? t(lang, "Lactação: pode reduzir prolactina e produção de leite; dados limitados.", "Lactancia: puede reducir prolactina y producción de leche; datos limitados.")
              : null,
            hepatopatia
              ? t(lang, "Hepatopatia: titular cautelosamente.", "Hepatopatía: titular con cautela.")
              : null,
            insuficienciaRenal
              ? t(lang, "Insuficiência renal: monitorar confusão, hipotensão e tolerabilidade.", "Insuficiencia renal: monitorizar confusión, hipotensión y tolerabilidad.")
              : null
          ].filter(Boolean),

          contraindications: [
            t(lang, "Hipersensibilidade à levodopa ou carbidopa", "Hipersensibilidad a levodopa o carbidopa"),
            t(lang, "Uso concomitante com IMAO não seletivo", "Uso concomitante con IMAO no selectivo"),
            t(lang, "Glaucoma de ângulo fechado não controlado", "Glaucoma de ángulo cerrado no controlado"),
            t(lang, "Psicose grave não controlada", "Psicosis grave no controlada"),
            t(lang, "Melanoma suspeito ou histórico de melanoma sem avaliação", "Melanoma sospechoso o antecedente de melanoma sin evaluación")
          ],

          interactions: [
            t(lang, "IMAO não seletivos: risco de crise hipertensiva", "IMAO no selectivos: riesgo de crisis hipertensiva"),
            t(lang, "Antipsicóticos bloqueadores D2: reduzem efeito antiparkinsoniano", "Antipsicóticos bloqueadores D2: reducen efecto antiparkinsoniano"),
            t(lang, "Metoclopramida: antagonismo dopaminérgico e piora parkinsoniana", "Metoclopramida: antagonismo dopaminérgico y empeoramiento parkinsoniano"),
            t(lang, "Ferro: reduz absorção; separar administração", "Hierro: reduce absorción; separar administración"),
            t(lang, "Proteína alimentar: pode reduzir absorção em alguns pacientes", "Proteína alimentaria: puede reducir absorción en algunos pacientes"),
            t(lang, "Anti-hipertensivos: maior hipotensão ortostática", "Antihipertensivos: mayor hipotensión ortostática")
          ],

          alerts: [
            t(lang, "Não suspender abruptamente.", "No suspender bruscamente."),
            t(lang, "Orientar tomada longe de refeições hiperproteicas se houver flutuação motora.", "Orientar toma lejos de comidas hiperproteicas si hay fluctuación motora."),
            t(lang, "Monitorar alucinações, confusão, discinesias e hipotensão.", "Monitorizar alucinaciones, confusión, discinesias e hipotensión."),
            t(lang, "Ajustar horário antes de apenas aumentar dose em wearing-off.", "Ajustar horario antes de solo aumentar dosis en wearing-off."),
            t(lang, "Evitar metoclopramida e antipsicóticos típicos quando possível.", "Evitar metoclopramida y antipsicóticos típicos cuando sea posible.")
          ],

          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "MDS Parkinson Disease Guidelines",
            "FDA/DailyMed Carbidopa-Levodopa Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    levodopa_benserazida: {
      name: { pt: "Levodopa + Benserazida", es: "Levodopa + Benserazida" },
      category: "antiparkinsoniano",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const clcr = Number(paciente.clcr || 100);
        const insuficienciaRenal = clcr < 60;

        return {
          name: t(lang, "Levodopa + Benserazida", "Levodopa + Benserazida"),

          class: t(
            lang,
            "Precursor dopaminérgico associado a inibidor periférico da dopa-descarboxilase",
            "Precursor dopaminérgico asociado a inhibidor periférico de la dopa-descarboxilasa"
          ),

          category: "antiparkinsoniano",

          commercialNames: {
            br: ["Prolopa", "Prolopa HBS", "Levodopa + Benserazida"],
            ar: ["Madopar", "Levodopa/Benserazida", "Prolopa"]
          },

          presentation: [
            t(lang, "Cápsula/comprimido 100/25 mg", "Cápsula/comprimido 100/25 mg"),
            t(lang, "Comprimido 200/50 mg", "Comprimido 200/50 mg"),
            t(lang, "Comprimido dispersível", "Comprimido dispersable"),
            t(lang, "Cápsula de liberação prolongada/HBS", "Cápsula de liberación prolongada/HBS")
          ],

          dose: {
            adulto: t(
              lang,
              "Doença de Parkinson: iniciar com dose baixa, por exemplo 100/25 mg VO 2–3x/dia; titular conforme resposta e tolerabilidade.",
              "Enfermedad de Parkinson: iniciar con dosis baja, por ejemplo 100/25 mg VO 2–3 veces/día; titular según respuesta y tolerabilidad."
            ),
            manutencao: t(
              lang,
              "Dose de manutenção é individualizada; dividir ao longo do dia conforme flutuações motoras.",
              "La dosis de mantenimiento es individualizada; dividir durante el día según fluctuaciones motoras."
            ),
            maxDose: t(
              lang,
              "Dose máxima não é fixa; ajustar por controle motor, discinesias, sintomas neuropsiquiátricos e hipotensão.",
              "La dosis máxima no es fija; ajustar por control motor, discinesias, síntomas neuropsiquiátricos e hipotensión."
            )
          },

          doseKg: {
            standard: t(
              lang,
              "Não se utiliza cálculo rotineiro por kg em adultos.",
              "No se utiliza cálculo rutinario por kg en adultos."
            ),
            pediatric: t(
              lang,
              "Uso pediátrico não rotineiro; apenas sob neurologia especializada.",
              "Uso pediátrico no rutinario; solo bajo neurología especializada."
            ),
            maxDose: t(
              lang,
              "Individualizar conforme resposta clínica.",
              "Individualizar según respuesta clínica."
            )
          },

          indications: [
            t(lang, "Doença de Parkinson idiopática", "Enfermedad de Parkinson idiopática"),
            t(lang, "Bradicinesia parkinsoniana", "Bradicinesia parkinsoniana"),
            t(lang, "Rigidez parkinsoniana", "Rigidez parkinsoniana"),
            t(lang, "Tremor de repouso", "Temblor de reposo"),
            t(lang, "Flutuações motoras tipo wearing-off", "Fluctuaciones motoras tipo wearing-off"),
            t(lang, "Parkinsonismo responsivo à levodopa em casos selecionados", "Parkinsonismo responsivo a levodopa en casos seleccionados")
          ],

          renalAdjustment: insuficienciaRenal
            ? t(
                lang,
                "Insuficiência renal: geralmente sem ajuste obrigatório, mas titular com cautela.",
                "Insuficiencia renal: generalmente sin ajuste obligatorio, pero titular con cautela."
              )
            : t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),

          hepaticAdjustment: hepatopatia
            ? t(
                lang,
                "Hepatopatia: titular com cautela e monitorar efeitos adversos.",
                "Hepatopatía: titular con cautela y monitorizar efectos adversos."
              )
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),

          mechanism: t(
            lang,
            "A levodopa é convertida em dopamina no SNC; a benserazida inibe a dopa-descarboxilase periférica, reduzindo conversão periférica e efeitos como náuseas.",
            "La levodopa se convierte en dopamina en el SNC; la benserazida inhibe la dopa-descarboxilasa periférica, reduciendo conversión periférica y efectos como náuseas."
          ),

          onset: t(
            lang,
            "Formulação imediata/dispersível pode agir em 30–60 minutos; liberação prolongada tem início mais lento.",
            "Formulación inmediata/dispersable puede actuar en 30–60 minutos; liberación prolongada tiene inicio más lento."
          ),

          halfLife: t(
            lang,
            "Vida média curta, cerca de 1–2 horas; resposta clínica depende da formulação e estágio da doença.",
            "Vida media corta, cerca de 1–2 horas; respuesta clínica depende de la formulación y estadio de la enfermedad."
          ),

          commonAdverseEffects: [
            t(lang, "Náuseas", "Náuseas"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Hipotensão ortostática", "Hipotensión ortostática"),
            t(lang, "Discinesias", "Discinesias"),
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Insônia", "Insomnio"),
            t(lang, "Confusão", "Confusión")
          ],

          dangerousAdverseEffects: [
            t(lang, "Alucinações ou psicose", "Alucinaciones o psicosis"),
            t(lang, "Discinesias incapacitantes", "Discinesias incapacitantes"),
            t(lang, "Hipotensão com síncope/quedas", "Hipotensión con síncope/caídas"),
            t(lang, "Síndrome semelhante à neuroléptica maligna após retirada abrupta", "Síndrome similar al neuroléptico maligno tras retirada brusca"),
            t(lang, "Transtornos do controle de impulsos em predispostos", "Trastornos del control de impulsos en predispuestos")
          ],

          risksByPatient: [
            idade >= 65
              ? t(lang, "Idoso: maior risco de confusão, alucinações, hipotensão e quedas.", "Adulto mayor: mayor riesgo de confusión, alucinaciones, hipotensión y caídas.")
              : null,
            gestante
              ? t(lang, "Gestação: avaliar risco-benefício; dados limitados.", "Embarazo: evaluar riesgo-beneficio; datos limitados.")
              : null,
            lactante
              ? t(lang, "Lactação: pode reduzir produção de leite; dados limitados.", "Lactancia: puede reducir producción de leche; datos limitados.")
              : null,
            hepatopatia
              ? t(lang, "Hepatopatia: titular cautelosamente.", "Hepatopatía: titular con cautela.")
              : null,
            insuficienciaRenal
              ? t(lang, "Insuficiência renal: monitorar confusão e hipotensão.", "Insuficiencia renal: monitorizar confusión e hipotensión.")
              : null
          ].filter(Boolean),

          contraindications: [
            t(lang, "Hipersensibilidade à levodopa ou benserazida", "Hipersensibilidad a levodopa o benserazida"),
            t(lang, "Uso concomitante com IMAO não seletivo", "Uso concomitante con IMAO no selectivo"),
            t(lang, "Glaucoma de ângulo fechado não controlado", "Glaucoma de ángulo cerrado no controlado"),
            t(lang, "Psicose grave não controlada", "Psicosis grave no controlada"),
            t(lang, "Melanoma suspeito ou histórico de melanoma sem avaliação", "Melanoma sospechoso o antecedente de melanoma sin evaluación")
          ],

          interactions: [
            t(lang, "IMAO não seletivos: risco de crise hipertensiva", "IMAO no selectivos: riesgo de crisis hipertensiva"),
            t(lang, "Antipsicóticos D2: reduzem efeito", "Antipsicóticos D2: reducen efecto"),
            t(lang, "Metoclopramida: pode piorar parkinsonismo", "Metoclopramida: puede empeorar parkinsonismo"),
            t(lang, "Ferro: reduz absorção", "Hierro: reduce absorción"),
            t(lang, "Refeições hiperproteicas: podem reduzir resposta em alguns pacientes", "Comidas hiperproteicas: pueden reducir respuesta en algunos pacientes"),
            t(lang, "Anti-hipertensivos: maior hipotensão ortostática", "Antihipertensivos: mayor hipotensión ortostática")
          ],

          alerts: [
            t(lang, "Não suspender abruptamente.", "No suspender bruscamente."),
            t(lang, "Formulação dispersível pode ser útil para início de ação mais rápido.", "La formulación dispersable puede ser útil para inicio de acción más rápido."),
            t(lang, "Monitorar discinesias, alucinações, confusão e hipotensão.", "Monitorizar discinesias, alucinaciones, confusión e hipotensión."),
            t(lang, "Ajustar horários conforme wearing-off antes de aumentar dose total.", "Ajustar horarios según wearing-off antes de aumentar dosis total."),
            t(lang, "Evitar metoclopramida e antipsicóticos típicos quando possível.", "Evitar metoclopramida y antipsicóticos típicos cuando sea posible.")
          ],

          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "MDS Parkinson Disease Guidelines",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    }

  });

  Object.assign(window.PSICOFARMACOS_DRUGS_DB, {

    pramipexol: {
      name: { pt: "Pramipexol", es: "Pramipexol" },
      category: "antiparkinsoniano",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const insuficienciaRenal = clcr < 60;

        return {
          name: t(lang, "Pramipexol", "Pramipexol"),

          class: t(
            lang,
            "Agonista dopaminérgico D2/D3",
            "Agonista dopaminérgico D2/D3"
          ),

          category: "antiparkinsoniano",

          commercialNames: {
            br: ["Sifrol", "Pramipexol EMS", "Pramipexol Eurofarma"],
            ar: ["Sifrol", "Pramipexol", "Mirapex"]
          },

          presentation: [
            t(lang, "Comprimido 0,125 mg", "Comprimido 0,125 mg"),
            t(lang, "Comprimido 0,25 mg", "Comprimido 0,25 mg"),
            t(lang, "Comprimido 0,5 mg", "Comprimido 0,5 mg"),
            t(lang, "Comprimido 1 mg", "Comprimido 1 mg"),
            t(lang, "Comprimido 1,5 mg", "Comprimido 1,5 mg"),
            t(lang, "Liberação prolongada", "Liberación prolongada")
          ],

          dose: {
            adulto: t(
              lang,
              "Iniciar 0,125 mg VO 3x/dia; titular gradualmente conforme resposta clínica.",
              "Iniciar 0,125 mg VO 3 veces/día; titular gradualmente según respuesta clínica."
            ),
            manutencao: t(
              lang,
              "Dose usual: 0,375–4,5 mg/dia.",
              "Dosis habitual: 0,375–4,5 mg/día."
            ),
            pernasInquietas: t(
              lang,
              "Síndrome das pernas inquietas: 0,125–0,75 mg à noite.",
              "Síndrome de piernas inquietas: 0,125–0,75 mg por la noche."
            ),
            maxDose: t(
              lang,
              "Dose máxima usual: 4,5 mg/dia.",
              "Dosis máxima habitual: 4,5 mg/día."
            )
          },

          doseKg: {
            standard: t(lang, "Não se utiliza cálculo por kg.", "No se utiliza cálculo por kg."),
            severe: t(lang, "Titulação lenta para minimizar eventos adversos.", "Titulación lenta para minimizar eventos adversos."),
            maxDose: t(lang, "4,5 mg/dia", "4,5 mg/día")
          },

          indications: [
            t(lang, "Doença de Parkinson inicial", "Enfermedad de Parkinson inicial"),
            t(lang, "Doença de Parkinson avançada", "Enfermedad de Parkinson avanzada"),
            t(lang, "Redução de flutuações motoras", "Reducción de fluctuaciones motoras"),
            t(lang, "Redução de dose de levodopa em alguns pacientes", "Reducción de dosis de levodopa en algunos pacientes"),
            t(lang, "Síndrome das pernas inquietas", "Síndrome de piernas inquietas"),
            t(lang, "Sintomas motores leves a moderados em pacientes jovens", "Síntomas motores leves a moderados en pacientes jóvenes")
          ],

          renalAdjustment: insuficienciaRenal
            ? t(
                lang,
                "Necessita ajuste conforme ClCr; reduzir dose e/ou aumentar intervalo.",
                "Requiere ajuste según ClCr; reducir dosis y/o aumentar intervalo."
              )
            : t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),

          hepaticAdjustment: t(
            lang,
            "Sem ajuste hepático significativo na maioria dos casos.",
            "Sin ajuste hepático significativo en la mayoría de los casos."
          ),

          mechanism: t(
            lang,
            "Estimula diretamente receptores dopaminérgicos D2 e D3, compensando deficiência dopaminérgica nigroestriatal.",
            "Estimula directamente receptores dopaminérgicos D2 y D3, compensando la deficiencia dopaminérgica nigroestriatal."
          ),

          onset: t(
            lang,
            "Melhora clínica geralmente observada após dias a semanas de titulação.",
            "La mejoría clínica suele observarse tras días a semanas de titulación."
          ),

          halfLife: t(
            lang,
            "Vida média aproximada: 8–12 horas.",
            "Vida media aproximada: 8–12 horas."
          ),

          commonAdverseEffects: [
            t(lang, "Náuseas", "Náuseas"),
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Edema periférico", "Edema periférico"),
            t(lang, "Constipação", "Estreñimiento"),
            t(lang, "Hipotensão ortostática", "Hipotensión ortostática"),
            t(lang, "Fadiga", "Fatiga")
          ],

          dangerousAdverseEffects: [
            t(lang, "Alucinações", "Alucinaciones"),
            t(lang, "Psicose", "Psicosis"),
            t(lang, "Ataques súbitos de sono", "Ataques súbitos de sueño"),
            t(lang, "Transtornos do controle de impulsos", "Trastornos del control de impulsos"),
            t(lang, "Hipersexualidade", "Hipersexualidad"),
            t(lang, "Jogo patológico", "Juego patológico"),
            t(lang, "Síndrome de abstinência de agonista dopaminérgico", "Síndrome de abstinencia de agonista dopaminérgico")
          ],

          risksByPatient: [
            idade >= 65
              ? t(lang, "Idoso: maior risco de alucinações, hipotensão, sonolência e quedas.", "Adulto mayor: mayor riesgo de alucinaciones, hipotensión, somnolencia y caídas.")
              : null,
            gestante
              ? t(lang, "Gestação: dados limitados; utilizar apenas quando benefício justificar risco.", "Embarazo: datos limitados; utilizar solo cuando el beneficio justifique el riesgo.")
              : null,
            lactante
              ? t(lang, "Lactação: pode inibir prolactina e reduzir produção de leite.", "Lactancia: puede inhibir prolactina y reducir producción de leche.")
              : null,
            insuficienciaRenal
              ? t(lang, "Insuficiência renal: ajuste obrigatório conforme ClCr.", "Insuficiencia renal: ajuste obligatorio según ClCr.")
              : null
          ].filter(Boolean),

          contraindications: [
            t(lang, "Hipersensibilidade ao pramipexol", "Hipersensibilidad a pramipexol"),
            t(lang, "Psicose ativa não controlada", "Psicosis activa no controlada"),
            t(lang, "História grave de transtorno do controle de impulsos", "Antecedente grave de trastorno del control de impulsos")
          ],

          interactions: [
            t(lang, "Álcool e sedativos: maior sonolência", "Alcohol y sedantes: mayor somnolencia"),
            t(lang, "Antipsicóticos: antagonizam efeito dopaminérgico", "Antipsicóticos: antagonizan efecto dopaminérgico"),
            t(lang, "Levodopa: aumenta risco de discinesias", "Levodopa: aumenta riesgo de discinesias"),
            t(lang, "Anti-hipertensivos: maior hipotensão ortostática", "Antihipertensivos: mayor hipotensión ortostática")
          ],

          alerts: [
            t(lang, "Monitorar compulsões, compras compulsivas, jogo patológico e hipersexualidade.", "Monitorizar compulsiones, compras compulsivas, juego patológico e hipersexualidad."),
            t(lang, "Orientar sobre ataques súbitos de sono ao dirigir.", "Orientar sobre ataques súbitos de sueño al conducir."),
            t(lang, "Não suspender abruptamente.", "No suspender bruscamente."),
            t(lang, "Ajustar dose em insuficiência renal.", "Ajustar dosis en insuficiencia renal."),
            t(lang, "Monitorar alucinações em idosos.", "Monitorizar alucinaciones en adultos mayores.")
          ],

          ref: [
            "Goodman & Gilman 14ª Ed.",
            "MDS Parkinson Disease Guidelines",
            "FDA/DailyMed Pramipexole Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    ropinirol: {
      name: { pt: "Ropinirol", es: "Ropinirol" },
      category: "antiparkinsoniano",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);

        return {
          name: t(lang, "Ropinirol", "Ropinirol"),

          class: t(
            lang,
            "Agonista dopaminérgico D2/D3",
            "Agonista dopaminérgico D2/D3"
          ),

          category: "antiparkinsoniano",

          commercialNames: {
            br: ["Requip", "Ropinirol", "Ropinirol EMS"],
            ar: ["Requip", "Ropinirol", "Adartrel"]
          },

          presentation: [
            t(lang, "Comprimido 0,25 mg", "Comprimido 0,25 mg"),
            t(lang, "Comprimido 0,5 mg", "Comprimido 0,5 mg"),
            t(lang, "Comprimido 1 mg", "Comprimido 1 mg"),
            t(lang, "Comprimido 2 mg", "Comprimido 2 mg"),
            t(lang, "Comprimido 5 mg", "Comprimido 5 mg"),
            t(lang, "Liberação prolongada", "Liberación prolongada")
          ],

          dose: {
            adulto: t(
              lang,
              "Iniciar 0,25 mg VO 3x/dia; aumentar gradualmente conforme resposta clínica.",
              "Iniciar 0,25 mg VO 3 veces/día; aumentar gradualmente según respuesta clínica."
            ),
            manutencao: t(
              lang,
              "Dose usual: 3–24 mg/dia.",
              "Dosis habitual: 3–24 mg/día."
            ),
            pernasInquietas: t(
              lang,
              "Síndrome das pernas inquietas: iniciar 0,25 mg 1–3 horas antes de dormir.",
              "Síndrome de piernas inquietas: iniciar 0,25 mg 1–3 horas antes de dormir."
            ),
            maxDose: t(
              lang,
              "Dose máxima usual: 24 mg/dia.",
              "Dosis máxima habitual: 24 mg/día."
            )
          },

          doseKg: {
            standard: t(lang, "Não se utiliza cálculo por kg.", "No se utiliza cálculo por kg."),
            severe: t(lang, "Titulação lenta reduz efeitos adversos.", "La titulación lenta reduce efectos adversos."),
            maxDose: t(lang, "24 mg/dia", "24 mg/día")
          },

          indications: [
            t(lang, "Doença de Parkinson inicial", "Enfermedad de Parkinson inicial"),
            t(lang, "Doença de Parkinson avançada", "Enfermedad de Parkinson avanzada"),
            t(lang, "Flutuações motoras e wearing-off", "Fluctuaciones motoras y wearing-off"),
            t(lang, "Adjunto à levodopa", "Adjunto a levodopa"),
            t(lang, "Síndrome das pernas inquietas", "Síndrome de piernas inquietas"),
            t(lang, "Redução de necessidade de levodopa em pacientes selecionados", "Reducción de necesidad de levodopa en pacientes seleccionados")
          ],

          renalAdjustment: t(
            lang,
            "Geralmente sem ajuste em insuficiência renal leve/moderada; monitorar em doença avançada.",
            "Generalmente sin ajuste en insuficiencia renal leve/moderada; monitorizar en enfermedad avanzada."
          ),

          hepaticAdjustment: hepatopatia
            ? t(
                lang,
                "Hepatopatia: usar com cautela; pode aumentar exposição ao fármaco.",
                "Hepatopatía: usar con cautela; puede aumentar la exposición al fármaco."
              )
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),

          mechanism: t(
            lang,
            "Agonista dos receptores dopaminérgicos D2/D3, estimulando diretamente vias dopaminérgicas centrais.",
            "Agonista de receptores dopaminérgicos D2/D3, estimulando directamente vías dopaminérgicas centrales."
          ),

          onset: t(
            lang,
            "Melhora clínica observada após titulação progressiva ao longo de dias ou semanas.",
            "La mejoría clínica se observa tras titulación progresiva durante días o semanas."
          ),

          halfLife: t(
            lang,
            "Vida média aproximada: 6 horas.",
            "Vida media aproximada: 6 horas."
          ),

          commonAdverseEffects: [
            t(lang, "Náuseas", "Náuseas"),
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Hipotensão ortostática", "Hipotensión ortostática"),
            t(lang, "Edema periférico", "Edema periférico"),
            t(lang, "Constipação", "Estreñimiento"),
            t(lang, "Cefaleia", "Cefalea")
          ],

          dangerousAdverseEffects: [
            t(lang, "Alucinações", "Alucinaciones"),
            t(lang, "Psicose", "Psicosis"),
            t(lang, "Ataques súbitos de sono", "Ataques súbitos de sueño"),
            t(lang, "Jogo patológico", "Juego patológico"),
            t(lang, "Hipersexualidade", "Hipersexualidad"),
            t(lang, "Compras compulsivas", "Compras compulsivas"),
            t(lang, "Síndrome de abstinência de agonista dopaminérgico", "Síndrome de abstinencia de agonista dopaminérgico")
          ],

          risksByPatient: [
            idade >= 65
              ? t(lang, "Idoso: maior risco de confusão, alucinações, sonolência e quedas.", "Adulto mayor: mayor riesgo de confusión, alucinaciones, somnolencia y caídas.")
              : null,
            gestante
              ? t(lang, "Gestação: utilizar apenas quando claramente necessário.", "Embarazo: utilizar solo cuando sea claramente necesario.")
              : null,
            lactante
              ? t(lang, "Lactação: reduz prolactina e pode diminuir produção de leite.", "Lactancia: reduce prolactina y puede disminuir producción de leche.")
              : null,
            hepatopatia
              ? t(lang, "Hepatopatia: titular lentamente e monitorar tolerabilidade.", "Hepatopatía: titular lentamente y monitorizar tolerabilidad.")
              : null
          ].filter(Boolean),

          contraindications: [
            t(lang, "Hipersensibilidade ao ropinirol", "Hipersensibilidad a ropinirol"),
            t(lang, "Psicose ativa não controlada", "Psicosis activa no controlada"),
            t(lang, "Transtornos graves do controle de impulsos", "Trastornos graves del control de impulsos")
          ],

          interactions: [
            t(lang, "Antipsicóticos: antagonizam ação dopaminérgica", "Antipsicóticos: antagonizan acción dopaminérgica"),
            t(lang, "Álcool e sedativos: maior sonolência", "Alcohol y sedantes: mayor somnolencia"),
            t(lang, "Ciprofloxacino e inibidores CYP1A2: aumentam níveis", "Ciprofloxacino e inhibidores CYP1A2: aumentan niveles"),
            t(lang, "Tabagismo: pode reduzir níveis séricos", "Tabaquismo: puede reducir niveles séricos"),
            t(lang, "Levodopa: aumenta risco de discinesias", "Levodopa: aumenta riesgo de discinesias")
          ],

          alerts: [
            t(lang, "Monitorar impulsividade, jogo patológico e hipersexualidade.", "Monitorizar impulsividad, juego patológico e hipersexualidad."),
            t(lang, "Orientar sobre risco de ataques súbitos de sono.", "Orientar sobre riesgo de ataques súbitos de sueño."),
            t(lang, "Não suspender abruptamente.", "No suspender bruscamente."),
            t(lang, "Monitorar hipotensão ortostática.", "Monitorizar hipotensión ortostática."),
            t(lang, "Avaliar alucinações especialmente em idosos.", "Evaluar alucinaciones especialmente en adultos mayores.")
          ],

          ref: [
            "Goodman & Gilman 14ª Ed.",
            "MDS Parkinson Disease Guidelines",
            "FDA/DailyMed Ropinirole Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    rotigotina: {
      name: { pt: "Rotigotina", es: "Rotigotina" },
      category: "antiparkinsoniano",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const clcr = Number(paciente.clcr || 100);
        const insuficienciaRenal = clcr < 60;

        return {
          name: t(lang, "Rotigotina", "Rotigotina"),

          class: t(
            lang,
            "Agonista dopaminérgico D1/D2/D3 transdérmico",
            "Agonista dopaminérgico D1/D2/D3 transdérmico"
          ),

          category: "antiparkinsoniano",

          commercialNames: {
            br: ["Neupro", "Rotigotina"],
            ar: ["Neupro", "Rotigotina"]
          },

          presentation: [
            t(lang, "Adesivo transdérmico 1 mg/24 h", "Parche transdérmico 1 mg/24 h"),
            t(lang, "Adesivo transdérmico 2 mg/24 h", "Parche transdérmico 2 mg/24 h"),
            t(lang, "Adesivo transdérmico 4 mg/24 h", "Parche transdérmico 4 mg/24 h"),
            t(lang, "Adesivo transdérmico 6 mg/24 h", "Parche transdérmico 6 mg/24 h"),
            t(lang, "Adesivo transdérmico 8 mg/24 h", "Parche transdérmico 8 mg/24 h")
          ],

          dose: {
            adulto: t(
              lang,
              "Doença de Parkinson inicial: iniciar 2 mg/24 h e aumentar gradualmente semanalmente.",
              "Enfermedad de Parkinson inicial: iniciar 2 mg/24 h y aumentar gradualmente semanalmente."
            ),

            manutencao: t(
              lang,
              "Dose usual: 2–16 mg/24 h conforme resposta clínica.",
              "Dosis habitual: 2–16 mg/24 h según respuesta clínica."
            ),

            pernasInquietas: t(
              lang,
              "Síndrome das pernas inquietas: 1–3 mg/24 h.",
              "Síndrome de piernas inquietas: 1–3 mg/24 h."
            ),

            maxDose: t(
              lang,
              "Dose máxima usual: 16 mg/24 h.",
              "Dosis máxima habitual: 16 mg/24 h."
            )
          },

          doseKg: {
            standard: t(lang, "Não se utiliza cálculo por kg.", "No se utiliza cálculo por kg."),
            severe: t(lang, "Titular progressivamente conforme resposta clínica.", "Titular progresivamente según respuesta clínica."),
            maxDose: t(lang, "16 mg/24 h", "16 mg/24 h")
          },

          indications: [
            t(lang, "Doença de Parkinson inicial", "Enfermedad de Parkinson inicial"),
            t(lang, "Doença de Parkinson avançada", "Enfermedad de Parkinson avanzada"),
            t(lang, "Flutuações motoras", "Fluctuaciones motoras"),
            t(lang, "Pacientes com dificuldade de deglutição", "Pacientes con dificultad para deglutir"),
            t(lang, "Síndrome das pernas inquietas", "Síndrome de piernas inquietas"),
            t(lang, "Necessidade de estimulação dopaminérgica contínua", "Necesidad de estimulación dopaminérgica continua")
          ],

          renalAdjustment: t(
            lang,
            "Sem ajuste renal significativo.",
            "Sin ajuste renal significativo."
          ),

          hepaticAdjustment: hepatopatia
            ? t(
                lang,
                "Hepatopatia: utilizar com cautela e monitorar efeitos adversos.",
                "Hepatopatía: utilizar con cautela y monitorizar efectos adversos."
              )
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),

          mechanism: t(
            lang,
            "Agonista dopaminérgico não ergolínico administrado por via transdérmica, promovendo estimulação contínua dos receptores dopaminérgicos.",
            "Agonista dopaminérgico no ergolínico administrado por vía transdérmica, promoviendo estimulación continua de los receptores dopaminérgicos."
          ),

          onset: t(
            lang,
            "Efeito clínico ocorre após dias de uso contínuo e titulação adequada.",
            "El efecto clínico ocurre tras días de uso continuo y titulación adecuada."
          ),

          halfLife: t(
            lang,
            "Vida média efetiva após retirada do adesivo: aproximadamente 5–7 horas.",
            "Vida media efectiva tras retirar el parche: aproximadamente 5–7 horas."
          ),

          commonAdverseEffects: [
            t(lang, "Reações no local do adesivo", "Reacciones en el sitio del parche"),
            t(lang, "Náuseas", "Náuseas"),
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Cefaleia", "Cefalea"),
            t(lang, "Edema periférico", "Edema periférico"),
            t(lang, "Hipotensão ortostática", "Hipotensión ortostática")
          ],

          dangerousAdverseEffects: [
            t(lang, "Alucinações", "Alucinaciones"),
            t(lang, "Psicose", "Psicosis"),
            t(lang, "Ataques súbitos de sono", "Ataques súbitos de sueño"),
            t(lang, "Transtornos do controle de impulsos", "Trastornos del control de impulsos"),
            t(lang, "Hipersexualidade", "Hipersexualidad"),
            t(lang, "Jogo patológico", "Juego patológico"),
            t(lang, "Reações cutâneas graves raras", "Reacciones cutáneas graves raras")
          ],

          risksByPatient: [
            idade >= 65
              ? t(lang, "Idoso: maior risco de confusão, alucinações e quedas.", "Adulto mayor: mayor riesgo de confusión, alucinaciones y caídas.")
              : null,

            gestante
              ? t(lang, "Gestação: dados limitados; utilizar apenas quando necessário.", "Embarazo: datos limitados; utilizar solo cuando sea necesario.")
              : null,

            lactante
              ? t(lang, "Lactação: pode reduzir prolactina e produção de leite.", "Lactancia: puede reducir prolactina y producción de leche.")
              : null,

            hepatopatia
              ? t(lang, "Hepatopatia: monitorar tolerabilidade.", "Hepatopatía: monitorizar tolerabilidad.")
              : null,

            insuficienciaRenal
              ? t(lang, "Sem necessidade habitual de ajuste renal.", "Sin necesidad habitual de ajuste renal.")
              : null
          ].filter(Boolean),

          contraindications: [
            t(lang, "Hipersensibilidade à rotigotina", "Hipersensibilidad a rotigotina"),
            t(lang, "Psicose não controlada", "Psicosis no controlada"),
            t(lang, "Histórico grave de transtorno do controle de impulsos", "Antecedente grave de trastorno del control de impulsos")
          ],

          interactions: [
            t(lang, "Álcool e sedativos: aumentam sonolência", "Alcohol y sedantes: aumentan somnolencia"),
            t(lang, "Antipsicóticos: reduzem eficácia dopaminérgica", "Antipsicóticos: reducen eficacia dopaminérgica"),
            t(lang, "Levodopa: aumenta risco de discinesias", "Levodopa: aumenta riesgo de discinesias"),
            t(lang, "Anti-hipertensivos: maior hipotensão ortostática", "Antihipertensivos: mayor hipotensión ortostática")
          ],

          alerts: [
            t(lang, "Trocar adesivo diariamente e alternar local de aplicação.", "Cambiar el parche diariamente y alternar el sitio de aplicación."),
            t(lang, "Monitorar impulsividade e alterações comportamentais.", "Monitorizar impulsividad y alteraciones conductuales."),
            t(lang, "Evitar fontes intensas de calor sobre o adesivo.", "Evitar fuentes intensas de calor sobre el parche."),
            t(lang, "Não suspender abruptamente.", "No suspender bruscamente."),
            t(lang, "Orientar sobre risco de ataques súbitos de sono.", "Orientar sobre riesgo de ataques súbitos de sueño.")
          ],

          ref: [
            "Goodman & Gilman 14ª Ed.",
            "MDS Parkinson Disease Guidelines",
            "FDA/DailyMed Rotigotine Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    apomorfina: {
      name: { pt: "Apomorfina", es: "Apomorfina" },
      category: "antiparkinsoniano",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const clcr = Number(paciente.clcr || 100);
        const insuficienciaRenal = clcr < 30;

        return {
          name: t(lang, "Apomorfina", "Apomorfina"),

          class: t(
            lang,
            "Agonista dopaminérgico de ação rápida",
            "Agonista dopaminérgico de acción rápida"
          ),

          category: "antiparkinsoniano",

          commercialNames: {
            br: ["Apokinon", "Apomorfina"],
            ar: ["Apomorfina", "Apokyn"]
          },

          presentation: [
            t(lang, "Caneta SC 10 mg/mL", "Pluma SC 10 mg/mL"),
            t(lang, "Ampola para infusão subcutânea contínua", "Ampolla para infusión subcutánea continua")
          ],

          dose: {
            adulto: t(
              lang,
              "Iniciar sob supervisão especializada com 1–2 mg SC durante episódio OFF; titular conforme resposta.",
              "Iniciar bajo supervisión especializada con 1–2 mg SC durante episodio OFF; titular según respuesta."
            ),

            manutencao: t(
              lang,
              "Dose individualizada para resgate de episódios OFF ou infusão contínua.",
              "Dosis individualizada para rescate de episodios OFF o infusión continua."
            ),

            infusao: t(
              lang,
              "Pode ser utilizada em infusão subcutânea contínua em pacientes selecionados.",
              "Puede utilizarse en infusión subcutánea continua en pacientes seleccionados."
            ),

            maxDose: t(
              lang,
              "Individualizar conforme protocolo especializado.",
              "Individualizar según protocolo especializado."
            )
          },

          doseKg: {
            standard: t(lang, "Não se utiliza cálculo por kg.", "No se utiliza cálculo por kg."),
            severe: t(lang, "Titulação individual obrigatória.", "Titulación individual obligatoria."),
            maxDose: t(lang, "Conforme protocolo especializado.", "Según protocolo especializado.")
          },

          indications: [
            t(lang, "Episódios OFF súbitos na doença de Parkinson", "Episodios OFF súbitos en enfermedad de Parkinson"),
            t(lang, "Flutuações motoras graves", "Fluctuaciones motoras graves"),
            t(lang, "Resgate motor rápido", "Rescate motor rápido"),
            t(lang, "Doença de Parkinson avançada", "Enfermedad de Parkinson avanzada"),
            t(lang, "Infusão contínua em pacientes selecionados", "Infusión continua en pacientes seleccionados"),
            t(lang, "Pacientes com OFF refratário apesar de levodopa otimizada", "Pacientes con OFF refractario pese a levodopa optimizada")
          ],

          renalAdjustment: insuficienciaRenal
            ? t(
                lang,
                "Usar com cautela em insuficiência renal grave; monitorar efeitos adversos.",
                "Usar con cautela en insuficiencia renal grave; monitorizar efectos adversos."
              )
            : t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),

          hepaticAdjustment: hepatopatia
            ? t(
                lang,
                "Hepatopatia: utilizar com cautela e monitorar tolerabilidade.",
                "Hepatopatía: utilizar con cautela y monitorizar tolerabilidad."
              )
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),

          mechanism: t(
            lang,
            "Agonista potente dos receptores dopaminérgicos D1 e D2 com início extremamente rápido após administração subcutânea.",
            "Agonista potente de receptores dopaminérgicos D1 y D2 con inicio extremadamente rápido tras administración subcutánea."
          ),

          onset: t(
            lang,
            "Início de ação geralmente em 5–20 minutos.",
            "Inicio de acción generalmente en 5–20 minutos."
          ),

          halfLife: t(
            lang,
            "Vida média aproximada: 30–60 minutos.",
            "Vida media aproximada: 30–60 minutos."
          ),

          commonAdverseEffects: [
            t(lang, "Náuseas", "Náuseas"),
            t(lang, "Vômitos", "Vómitos"),
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Hipotensão ortostática", "Hipotensión ortostática"),
            t(lang, "Bocejos frequentes", "Bostezos frecuentes"),
            t(lang, "Nódulos subcutâneos", "Nódulos subcutáneos")
          ],

          dangerousAdverseEffects: [
            t(lang, "Hipotensão grave", "Hipotensión grave"),
            t(lang, "Síncope", "Síncope"),
            t(lang, "Alucinações", "Alucinaciones"),
            t(lang, "Psicose", "Psicosis"),
            t(lang, "Ataques súbitos de sono", "Ataques súbitos de sueño"),
            t(lang, "Discinesias importantes", "Discinesias importantes"),
            t(lang, "Prolongamento QT e arritmias raras", "Prolongación QT y arritmias raras")
          ],

          risksByPatient: [
            idade >= 65
              ? t(lang, "Idoso: alto risco de hipotensão, confusão, alucinações e quedas.", "Adulto mayor: alto riesgo de hipotensión, confusión, alucinaciones y caídas.")
              : null,

            gestante
              ? t(lang, "Gestação: dados insuficientes; evitar salvo necessidade extrema.", "Embarazo: datos insuficientes; evitar salvo necesidad extrema.")
              : null,

            lactante
              ? t(lang, "Lactação: dados limitados; pode interferir na prolactina.", "Lactancia: datos limitados; puede interferir con la prolactina.")
              : null,

            hepatopatia
              ? t(lang, "Hepatopatia: monitorar cuidadosamente tolerabilidade.", "Hepatopatía: monitorizar cuidadosamente tolerabilidad.")
              : null,

            insuficienciaRenal
              ? t(lang, "Insuficiência renal grave: usar cautelosamente.", "Insuficiencia renal grave: usar con cautela.")
              : null
          ].filter(Boolean),

          contraindications: [
            t(lang, "Hipersensibilidade à apomorfina", "Hipersensibilidad a apomorfina"),
            t(lang, "Uso concomitante com ondansetrona", "Uso concomitante con ondansetrón"),
            t(lang, "Hipotensão grave não controlada", "Hipotensión grave no controlada"),
            t(lang, "Psicose grave ativa", "Psicosis grave activa")
          ],

          interactions: [
            t(lang, "Ondansetrona: contraindicação absoluta pelo risco de hipotensão grave e perda de consciência", "Ondansetrón: contraindicación absoluta por riesgo de hipotensión grave y pérdida de conciencia"),
            t(lang, "Anti-hipertensivos: potencializam hipotensão", "Antihipertensivos: potencian hipotensión"),
            t(lang, "Levodopa: aumenta risco de discinesias", "Levodopa: aumenta riesgo de discinesias"),
            t(lang, "Álcool e sedativos: aumentam sonolência", "Alcohol y sedantes: aumentan somnolencia"),
            t(lang, "Antipsicóticos: antagonizam efeito terapêutico", "Antipsicóticos: antagonizan efecto terapéutico")
          ],

          alerts: [
            t(lang, "Uso geralmente restrito a neurologistas especializados em Parkinson.", "Uso generalmente restringido a neurólogos especializados en Parkinson."),
            t(lang, "Monitorar pressão arterial durante titulação.", "Monitorizar presión arterial durante la titulación."),
            t(lang, "Orientar paciente sobre episódios de sono súbito.", "Orientar al paciente sobre episodios de sueño súbito."),
            t(lang, "Contraindicada com ondansetrona.", "Contraindicada con ondansetrón."),
            t(lang, "Importante para resgate rápido de episódios OFF.", "Importante para rescate rápido de episodios OFF.")
          ],

          ref: [
            "Goodman & Gilman 14ª Ed.",
            "MDS Parkinson Disease Guidelines",
            "FDA/DailyMed Apomorphine Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    amantadina: {
      name: { pt: "Amantadina", es: "Amantadina" },
      category: "antiparkinsoniano",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = clcr < 60;

        return {
          name: t(lang, "Amantadina", "Amantadina"),

          class: t(
            lang,
            "Antiparkinsoniano dopaminérgico e antagonista NMDA",
            "Antiparkinsoniano dopaminérgico y antagonista NMDA"
          ),

          category: "antiparkinsoniano",

          commercialNames: {
            br: ["Mantidan", "Amantadina"],
            ar: ["PK-Merz", "Amantadina"]
          },

          presentation: [
            t(lang, "Comprimido 100 mg", "Comprimido 100 mg"),
            t(lang, "Cápsula 100 mg", "Cápsula 100 mg"),
            t(lang, "Solução oral 50 mg/5 mL", "Solución oral 50 mg/5 mL")
          ],

          dose: {
            adulto: t(
              lang,
              "Parkinson: iniciar 100 mg VO 1x/dia; pode aumentar para 100 mg 12/12h conforme resposta.",
              "Parkinson: iniciar 100 mg VO 1 vez/día; puede aumentarse a 100 mg cada 12 h según respuesta."
            ),

            discinesia: t(
              lang,
              "Discinesia induzida por levodopa: 100 mg VO 1–2x/dia; ajustar conforme tolerabilidade.",
              "Discinesia inducida por levodopa: 100 mg VO 1–2 veces/día; ajustar según tolerabilidad."
            ),

            maxDose: t(
              lang,
              "Dose máxima usual: 300 mg/dia em adultos selecionados.",
              "Dosis máxima habitual: 300 mg/día en adultos seleccionados."
            )
          },

          doseKg: {
            standard: t(lang, "Não se utiliza cálculo rotineiro por kg em adultos.", "No se utiliza cálculo rutinario por kg en adultos."),
            pediatric: t(lang, "Uso pediátrico não rotineiro para Parkinson.", "Uso pediátrico no rutinario para Parkinson."),
            maxDose: t(lang, "300 mg/dia", "300 mg/día")
          },

          indications: [
            t(lang, "Doença de Parkinson inicial leve", "Enfermedad de Parkinson inicial leve"),
            t(lang, "Sintomas motores parkinsonianos", "Síntomas motores parkinsonianos"),
            t(lang, "Discinesias induzidas por levodopa", "Discinesias inducidas por levodopa"),
            t(lang, "Flutuações motoras em casos selecionados", "Fluctuaciones motoras en casos seleccionados"),
            t(lang, "Fadiga associada ao Parkinson em casos selecionados", "Fatiga asociada al Parkinson en casos seleccionados"),
            t(lang, "Parkinsonismo medicamentoso em casos selecionados", "Parkinsonismo medicamentoso en casos seleccionados")
          ],

          renalAdjustment: insuficienciaRenal
            ? t(
                lang,
                "Necessita ajuste renal conforme ClCr; alto risco de confusão, alucinações e acúmulo.",
                "Requiere ajuste renal según ClCr; alto riesgo de confusión, alucinaciones y acumulación."
              )
            : t(lang, "Sem ajuste renal se função renal normal.", "Sin ajuste renal si función renal normal."),

          hepaticAdjustment: hepatopatia
            ? t(
                lang,
                "Sem ajuste hepático habitual, mas monitorar neurotoxicidade se paciente frágil.",
                "Sin ajuste hepático habitual, pero monitorizar neurotoxicidad si paciente frágil."
              )
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),

          mechanism: t(
            lang,
            "Aumenta liberação e reduz recaptação de dopamina; antagoniza receptores NMDA, ajudando especialmente em discinesias induzidas por levodopa.",
            "Aumenta liberación y reduce recaptación de dopamina; antagoniza receptores NMDA, ayudando especialmente en discinesias inducidas por levodopa."
          ),

          onset: t(
            lang,
            "Melhora pode ocorrer em poucos dias; efeito sobre discinesias pode surgir em dias a semanas.",
            "La mejoría puede ocurrir en pocos días; efecto sobre discinesias puede aparecer en días a semanas."
          ),

          halfLife: t(
            lang,
            "Vida média aproximada: 10–15 horas; aumenta muito na insuficiência renal.",
            "Vida media aproximada: 10–15 horas; aumenta mucho en insuficiencia renal."
          ),

          commonAdverseEffects: [
            t(lang, "Tontura", "Mareos"),
            t(lang, "Insônia", "Insomnio"),
            t(lang, "Náuseas", "Náuseas"),
            t(lang, "Boca seca", "Boca seca"),
            t(lang, "Edema periférico", "Edema periférico"),
            t(lang, "Livedo reticular", "Livedo reticular"),
            t(lang, "Constipação", "Estreñimiento")
          ],

          dangerousAdverseEffects: [
            t(lang, "Confusão", "Confusión"),
            t(lang, "Alucinações", "Alucinaciones"),
            t(lang, "Psicose", "Psicosis"),
            t(lang, "Convulsões em predispostos", "Convulsiones en predispuestos"),
            t(lang, "Retenção urinária", "Retención urinaria"),
            t(lang, "Síndrome de retirada com piora parkinsoniana se suspensão abrupta", "Síndrome de retirada con empeoramiento parkinsoniano si suspensión brusca")
          ],

          risksByPatient: [
            idade >= 65
              ? t(lang, "Idoso: maior risco de confusão, alucinações, edema, quedas e acúmulo por função renal reduzida.", "Adulto mayor: mayor riesgo de confusión, alucinaciones, edema, caídas y acumulación por función renal reducida.")
              : null,

            gestante
              ? t(lang, "Gestação: evitar se possível; dados limitados.", "Embarazo: evitar si es posible; datos limitados.")
              : null,

            lactante
              ? t(lang, "Lactação: evitar ou monitorar irritabilidade, vômitos e alterações do sono no lactente.", "Lactancia: evitar o monitorizar irritabilidad, vómitos y alteraciones del sueño en el lactante.")
              : null,

            hepatopatia
              ? t(lang, "Hepatopatia: geralmente sem ajuste, mas cuidado com polifarmácia.", "Hepatopatía: generalmente sin ajuste, pero cuidado con polifarmacia.")
              : null,

            insuficienciaRenal
              ? t(lang, "Insuficiência renal: ajuste obrigatório para evitar neurotoxicidade.", "Insuficiencia renal: ajuste obligatorio para evitar neurotoxicidad.")
              : null
          ].filter(Boolean),

          contraindications: [
            t(lang, "Hipersensibilidade à amantadina", "Hipersensibilidad a amantadina"),
            t(lang, "Insuficiência renal grave sem possibilidade de ajuste/monitorização", "Insuficiencia renal grave sin posibilidad de ajuste/monitorización"),
            t(lang, "Psicose ativa não controlada", "Psicosis activa no controlada"),
            t(lang, "Epilepsia não controlada", "Epilepsia no controlada")
          ],

          interactions: [
            t(lang, "Anticolinérgicos: maior confusão, boca seca e retenção urinária", "Anticolinérgicos: mayor confusión, boca seca y retención urinaria"),
            t(lang, "Levodopa e agonistas dopaminérgicos: maior risco de alucinações/discinesias", "Levodopa y agonistas dopaminérgicos: mayor riesgo de alucinaciones/discinesias"),
            t(lang, "Álcool e sedativos: maior tontura e prejuízo psicomotor", "Alcohol y sedantes: mayor mareo y deterioro psicomotor"),
            t(lang, "Fármacos que alcalinizam urina podem reduzir eliminação", "Fármacos que alcalinizan orina pueden reducir eliminación")
          ],

          alerts: [
            t(lang, "Ajustar sempre pela função renal.", "Ajustar siempre por función renal."),
            t(lang, "Monitorar confusão e alucinações, especialmente em idosos.", "Monitorizar confusión y alucinaciones, especialmente en adultos mayores."),
            t(lang, "Não suspender abruptamente.", "No suspender bruscamente."),
            t(lang, "Livedo reticular é efeito característico.", "Livedo reticular es efecto característico."),
            t(lang, "Pode ajudar nas discinesias induzidas por levodopa.", "Puede ayudar en discinesias inducidas por levodopa.")
          ],

          ref: [
            "Goodman & Gilman 14ª Ed.",
            "MDS Parkinson Disease Guidelines",
            "FDA/DailyMed Amantadine Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    selegilina: {
      name: { pt: "Selegilina", es: "Selegilina" },
      category: "antiparkinsoniano",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);

        return {
          name: t(lang, "Selegilina", "Selegilina"),

          class: t(
            lang,
            "Inibidor seletivo da MAO-B",
            "Inhibidor selectivo de la MAO-B"
          ),

          category: "antiparkinsoniano",

          commercialNames: {
            br: ["Jumexil", "Niar", "Selegilina"],
            ar: ["Jumex", "Selegilina"]
          },

          presentation: [
            t(lang, "Comprimido 5 mg", "Comprimido 5 mg"),
            t(lang, "Cápsula 5 mg", "Cápsula 5 mg"),
            t(lang, "Formulação oral desintegrável conforme disponibilidade", "Formulación oral desintegrable según disponibilidad")
          ],

          dose: {
            adulto: t(
              lang,
              "Parkinson: 5 mg VO pela manhã; pode usar 5 mg pela manhã + 5 mg ao meio-dia.",
              "Parkinson: 5 mg VO por la mañana; puede usarse 5 mg por la mañana + 5 mg al mediodía."
            ),

            manutencao: t(
              lang,
              "Dose usual: 5–10 mg/dia.",
              "Dosis habitual: 5–10 mg/día."
            ),

            maxDose: t(
              lang,
              "Dose máxima usual: 10 mg/dia para manter seletividade MAO-B.",
              "Dosis máxima habitual: 10 mg/día para mantener selectividad MAO-B."
            )
          },

          doseKg: {
            standard: t(lang, "Não se utiliza cálculo por kg.", "No se utiliza cálculo por kg."),
            severe: t(lang, "Usar dose fixa e evitar horários noturnos por insônia.", "Usar dosis fija y evitar horarios nocturnos por insomnio."),
            maxDose: t(lang, "10 mg/dia", "10 mg/día")
          },

          indications: [
            t(lang, "Doença de Parkinson inicial", "Enfermedad de Parkinson inicial"),
            t(lang, "Adjuvante à levodopa", "Coadyuvante a levodopa"),
            t(lang, "Wearing-off leve", "Wearing-off leve"),
            t(lang, "Redução de flutuações motoras em casos selecionados", "Reducción de fluctuaciones motoras en casos seleccionados"),
            t(lang, "Sintomas motores leves em Parkinson", "Síntomas motores leves en Parkinson"),
            t(lang, "Possível redução da necessidade de levodopa em fase inicial", "Posible reducción de necesidad de levodopa en fase inicial")
          ],

          renalAdjustment: t(
            lang,
            "Sem ajuste renal habitual.",
            "Sin ajuste renal habitual."
          ),

          hepaticAdjustment: hepatopatia
            ? t(
                lang,
                "Hepatopatia: usar com cautela e monitorar efeitos adversos.",
                "Hepatopatía: usar con cautela y monitorizar efectos adversos."
              )
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),

          mechanism: t(
            lang,
            "Inibe seletivamente MAO-B em doses usuais, reduzindo degradação de dopamina no SNC; metabólitos anfetamínicos podem causar insônia.",
            "Inhibe selectivamente MAO-B en dosis habituales, reduciendo degradación de dopamina en SNC; metabolitos anfetamínicos pueden causar insomnio."
          ),

          onset: t(
            lang,
            "Melhora motora pode ocorrer em dias a semanas.",
            "La mejoría motora puede ocurrir en días a semanas."
          ),

          halfLife: t(
            lang,
            "Vida média curta, mas inibição enzimática é prolongada; metabólitos podem persistir.",
            "Vida media corta, pero la inhibición enzimática es prolongada; metabolitos pueden persistir."
          ),

          commonAdverseEffects: [
            t(lang, "Insônia", "Insomnio"),
            t(lang, "Náuseas", "Náuseas"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Boca seca", "Boca seca"),
            t(lang, "Cefaleia", "Cefalea"),
            t(lang, "Hipotensão ortostática", "Hipotensión ortostática"),
            t(lang, "Discinesias quando associada à levodopa", "Discinesias cuando se asocia a levodopa")
          ],

          dangerousAdverseEffects: [
            t(lang, "Síndrome serotoninérgica em associações de risco", "Síndrome serotoninérgico en asociaciones de riesgo"),
            t(lang, "Crise hipertensiva se perda de seletividade ou interações", "Crisis hipertensiva si pérdida de selectividad o interacciones"),
            t(lang, "Alucinações ou confusão", "Alucinaciones o confusión"),
            t(lang, "Hipotensão sintomática", "Hipotensión sintomática"),
            t(lang, "Discinesias importantes com levodopa", "Discinesias importantes con levodopa")
          ],

          risksByPatient: [
            idade >= 65
              ? t(lang, "Idoso: maior risco de hipotensão, confusão, alucinações e insônia.", "Adulto mayor: mayor riesgo de hipotensión, confusión, alucinaciones e insomnio.")
              : null,

            gestante
              ? t(lang, "Gestação: dados limitados; evitar se possível.", "Embarazo: datos limitados; evitar si es posible.")
              : null,

            lactante
              ? t(lang, "Lactação: dados limitados; pode interferir com dopamina/prolactina.", "Lactancia: datos limitados; puede interferir con dopamina/prolactina.")
              : null,

            hepatopatia
              ? t(lang, "Hepatopatia: titular com cautela.", "Hepatopatía: titular con cautela.")
              : null
          ].filter(Boolean),

          contraindications: [
            t(lang, "Hipersensibilidade à selegilina", "Hipersensibilidad a selegilina"),
            t(lang, "Uso concomitante com meperidina", "Uso concomitante con meperidina"),
            t(lang, "Uso com tramadol, metadona, propoxifeno ou outros opioides serotoninérgicos de risco", "Uso con tramadol, metadona, propoxifeno u otros opioides serotoninérgicos de riesgo"),
            t(lang, "Uso concomitante com IMAO ou linezolida sem manejo especializado", "Uso concomitante con IMAO o linezolid sin manejo especializado")
          ],

          interactions: [
            t(lang, "Meperidina: contraindicado por risco serotoninérgico grave", "Meperidina: contraindicado por riesgo serotoninérgico grave"),
            t(lang, "ISRS/ISRN/tricíclicos: risco de síndrome serotoninérgica", "ISRS/IRSN/tricíclicos: riesgo de síndrome serotoninérgico"),
            t(lang, "Tramadol e metadona: risco serotoninérgico", "Tramadol y metadona: riesgo serotoninérgico"),
            t(lang, "Levodopa: pode aumentar discinesias e efeitos dopaminérgicos", "Levodopa: puede aumentar discinesias y efectos dopaminérgicos"),
            t(lang, "Simpaticomiméticos/descongestionantes: risco pressórico", "Simpaticomiméticos/descongestivos: riesgo presórico")
          ],

          alerts: [
            t(lang, "Evitar tomar à noite por risco de insônia.", "Evitar tomar por la noche por riesgo de insomnio."),
            t(lang, "Revisar antidepressivos e opioides antes de prescrever.", "Revisar antidepresivos y opioides antes de prescribir."),
            t(lang, "Monitorar discinesias se associada à levodopa.", "Monitorizar discinesias si se asocia a levodopa."),
            t(lang, "Em doses altas pode perder seletividade MAO-B.", "En dosis altas puede perder selectividad MAO-B."),
            t(lang, "Orientar sinais de síndrome serotoninérgica.", "Orientar signos de síndrome serotoninérgico.")
          ],

          ref: [
            "Goodman & Gilman 14ª Ed.",
            "MDS Parkinson Disease Guidelines",
            "FDA/DailyMed Selegiline Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    rasagilina: {
      name: { pt: "Rasagilina", es: "Rasagilina" },
      category: "antiparkinsoniano",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);

        return {
          name: t(lang, "Rasagilina", "Rasagilina"),

          class: t(
            lang,
            "Inibidor seletivo da MAO-B",
            "Inhibidor selectivo de la MAO-B"
          ),

          category: "antiparkinsoniano",

          commercialNames: {
            br: ["Azilect", "Rasagilina"],
            ar: ["Azilect", "Rasagilina"]
          },

          presentation: [
            t(lang, "Comprimido 0,5 mg", "Comprimido 0,5 mg"),
            t(lang, "Comprimido 1 mg", "Comprimido 1 mg")
          ],

          dose: {
            adulto: t(
              lang,
              "Parkinson: 1 mg VO 1x/dia em monoterapia ou adjuvante.",
              "Parkinson: 1 mg VO 1 vez/día en monoterapia o como coadyuvante."
            ),

            ajuste: t(
              lang,
              "Com inibidores de CYP1A2 ou risco de interação: considerar 0,5 mg/dia conforme protocolo.",
              "Con inhibidores de CYP1A2 o riesgo de interacción: considerar 0,5 mg/día según protocolo."
            ),

            maxDose: t(
              lang,
              "Dose máxima usual: 1 mg/dia.",
              "Dosis máxima habitual: 1 mg/día."
            )
          },

          doseKg: {
            standard: t(lang, "Não se utiliza cálculo por kg.", "No se utiliza cálculo por kg."),
            severe: t(lang, "Dose fixa diária.", "Dosis fija diaria."),
            maxDose: t(lang, "1 mg/dia", "1 mg/día")
          },

          indications: [
            t(lang, "Doença de Parkinson inicial em monoterapia", "Enfermedad de Parkinson inicial en monoterapia"),
            t(lang, "Adjuvante à levodopa", "Coadyuvante a levodopa"),
            t(lang, "Wearing-off", "Wearing-off"),
            t(lang, "Flutuações motoras leves a moderadas", "Fluctuaciones motoras leves a moderadas"),
            t(lang, "Sintomas motores leves em Parkinson", "Síntomas motores leves en Parkinson"),
            t(lang, "Redução do tempo OFF em pacientes com levodopa", "Reducción del tiempo OFF en pacientes con levodopa")
          ],

          renalAdjustment: t(
            lang,
            "Sem ajuste renal habitual.",
            "Sin ajuste renal habitual."
          ),

          hepaticAdjustment: hepatopatia
            ? t(
                lang,
                "Hepatopatia leve: usar cautela; moderada/grave: evitar.",
                "Hepatopatía leve: usar cautela; moderada/grave: evitar."
              )
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),

          mechanism: t(
            lang,
            "Inibe irreversivelmente MAO-B, reduzindo degradação de dopamina no estriado e aumentando disponibilidade dopaminérgica.",
            "Inhibe irreversiblemente MAO-B, reduciendo degradación de dopamina en el estriado y aumentando disponibilidad dopaminérgica."
          ),

          onset: t(
            lang,
            "Melhora motora pode ocorrer em dias a semanas.",
            "La mejoría motora puede ocurrir en días a semanas."
          ),

          halfLife: t(
            lang,
            "Vida média plasmática aproximada: 3 horas, mas a inibição da MAO-B é prolongada.",
            "Vida media plasmática aproximada: 3 horas, pero la inhibición de MAO-B es prolongada."
          ),

          commonAdverseEffects: [
            t(lang, "Cefaleia", "Cefalea"),
            t(lang, "Náuseas", "Náuseas"),
            t(lang, "Dor articular", "Dolor articular"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Insônia", "Insomnio"),
            t(lang, "Hipotensão ortostática", "Hipotensión ortostática"),
            t(lang, "Discinesia quando associada à levodopa", "Discinesia cuando se asocia a levodopa")
          ],

          dangerousAdverseEffects: [
            t(lang, "Síndrome serotoninérgica em associações de risco", "Síndrome serotoninérgico en asociaciones de riesgo"),
            t(lang, "Crise hipertensiva se interações ou perda de seletividade", "Crisis hipertensiva si interacciones o pérdida de selectividad"),
            t(lang, "Alucinações ou confusão", "Alucinaciones o confusión"),
            t(lang, "Hipotensão sintomática", "Hipotensión sintomática"),
            t(lang, "Discinesias importantes com levodopa", "Discinesias importantes con levodopa")
          ],

          risksByPatient: [
            idade >= 65
              ? t(lang, "Idoso: maior risco de hipotensão, confusão, alucinações e quedas.", "Adulto mayor: mayor riesgo de hipotensión, confusión, alucinaciones y caídas.")
              : null,

            gestante
              ? t(lang, "Gestação: dados limitados; evitar se possível.", "Embarazo: datos limitados; evitar si es posible.")
              : null,

            lactante
              ? t(lang, "Lactação: dados limitados; pode interferir com dopamina/prolactina.", "Lactancia: datos limitados; puede interferir com dopamina/prolactina.")
              : null,

            hepatopatia
              ? t(lang, "Hepatopatia moderada/grave: evitar.", "Hepatopatía moderada/grave: evitar.")
              : null
          ].filter(Boolean),

          contraindications: [
            t(lang, "Hipersensibilidade à rasagilina", "Hipersensibilidad a rasagilina"),
            t(lang, "Uso concomitante com meperidina", "Uso concomitante con meperidina"),
            t(lang, "Uso com tramadol, metadona, propoxifeno ou outros opioides serotoninérgicos de risco", "Uso con tramadol, metadona, propoxifeno u otros opioides serotoninérgicos de riesgo"),
            t(lang, "Uso concomitante com IMAO ou linezolida sem manejo especializado", "Uso concomitante con IMAO o linezolid sin manejo especializado"),
            t(lang, "Hepatopatia moderada ou grave", "Hepatopatía moderada o grave")
          ],

          interactions: [
            t(lang, "Meperidina: contraindicado por risco serotoninérgico grave", "Meperidina: contraindicado por riesgo serotoninérgico grave"),
            t(lang, "ISRS/ISRN/tricíclicos: risco de síndrome serotoninérgica", "ISRS/IRSN/tricíclicos: riesgo de síndrome serotoninérgico"),
            t(lang, "Tramadol e metadona: risco serotoninérgico", "Tramadol y metadona: riesgo serotoninérgico"),
            t(lang, "Ciprofloxacino e inibidores CYP1A2: aumentam níveis", "Ciprofloxacino e inhibidores CYP1A2: aumentan niveles"),
            t(lang, "Levodopa: pode aumentar discinesias", "Levodopa: puede aumentar discinesias"),
            t(lang, "Simpaticomiméticos/descongestionantes: risco pressórico", "Simpaticomiméticos/descongestivos: riesgo presórico")
          ],

          alerts: [
            t(lang, "Revisar antidepressivos, opioides e linezolida antes de prescrever.", "Revisar antidepresivos, opioides y linezolid antes de prescribir."),
            t(lang, "Evitar em hepatopatia moderada/grave.", "Evitar en hepatopatía moderada/grave."),
            t(lang, "Monitorar discinesias se associada à levodopa.", "Monitorizar discinesias si se asocia a levodopa."),
            t(lang, "Orientar sinais de síndrome serotoninérgica.", "Orientar signos de síndrome serotoninérgico."),
            t(lang, "Cuidado com ciprofloxacino e outros inibidores CYP1A2.", "Cuidado con ciprofloxacino y otros inhibidores CYP1A2.")
          ],

          ref: [
            "Goodman & Gilman 14ª Ed.",
            "MDS Parkinson Disease Guidelines",
            "FDA/DailyMed Rasagiline Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    entacapona: {
      name: { pt: "Entacapona", es: "Entacapona" },
      category: "antiparkinsoniano",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);

        return {
          name: t(lang, "Entacapona", "Entacapona"),

          class: t(
            lang,
            "Inibidor periférico da COMT",
            "Inhibidor periférico de la COMT"
          ),

          category: "antiparkinsoniano",

          commercialNames: {
            br: ["Comtan", "Stalevo", "Entacapona"],
            ar: ["Comtan", "Stalevo", "Entacapona"]
          },

          presentation: [
            t(lang, "Comprimido 200 mg", "Comprimido 200 mg"),
            t(lang, "Associação levodopa/carbidopa/entacapona", "Asociación levodopa/carbidopa/entacapona")
          ],

          dose: {
            adulto: t(
              lang,
              "200 mg VO junto com cada dose de levodopa/carbidopa ou levodopa/benserazida.",
              "200 mg VO junto con cada dosis de levodopa/carbidopa o levodopa/benserazida."
            ),

            manutencao: t(
              lang,
              "Usar apenas como adjuvante da levodopa; não tem efeito antiparkinsoniano isolado relevante.",
              "Usar solo como coadyuvante de levodopa; no tiene efecto antiparkinsoniano aislado relevante."
            ),

            maxDose: t(
              lang,
              "Dose máxima usual: 1600 mg/dia.",
              "Dosis máxima habitual: 1600 mg/día."
            )
          },

          doseKg: {
            standard: t(lang, "Não se utiliza cálculo por kg.", "No se utiliza cálculo por kg."),
            severe: t(lang, "Dose fixa associada a cada tomada de levodopa.", "Dosis fija asociada a cada toma de levodopa."),
            maxDose: t(lang, "1600 mg/dia", "1600 mg/día")
          },

          indications: [
            t(lang, "Doença de Parkinson com wearing-off", "Enfermedad de Parkinson con wearing-off"),
            t(lang, "Flutuações motoras de fim de dose", "Fluctuaciones motoras de fin de dosis"),
            t(lang, "Aumento da duração do efeito da levodopa", "Aumento de la duración del efecto de levodopa"),
            t(lang, "Redução do tempo OFF", "Reducción del tiempo OFF"),
            t(lang, "Adjuvante em pacientes em uso de levodopa", "Coadyuvante en pacientes en uso de levodopa"),
            t(lang, "Otimização do esquema levodopa/carbidopa ou levodopa/benserazida", "Optimización del esquema levodopa/carbidopa o levodopa/benserazida")
          ],

          renalAdjustment: t(
            lang,
            "Sem ajuste renal habitual.",
            "Sin ajuste renal habitual."
          ),

          hepaticAdjustment: hepatopatia
            ? t(
                lang,
                "Hepatopatia: usar com cautela; evitar em doença hepática importante conforme protocolo local.",
                "Hepatopatía: usar con cautela; evitar en enfermedad hepática importante según protocolo local."
              )
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),

          mechanism: t(
            lang,
            "Inibe a catecol-O-metiltransferase periférica, reduzindo metabolismo periférico da levodopa e aumentando sua disponibilidade/duração de ação.",
            "Inhibe la catecol-O-metiltransferasa periférica, reduciendo metabolismo periférico de levodopa y aumentando su disponibilidad/duración de acción."
          ),

          onset: t(
            lang,
            "Efeito ocorre junto ao esquema de levodopa, com redução de wearing-off após ajuste terapêutico.",
            "El efecto ocurre junto al esquema de levodopa, con reducción de wearing-off tras ajuste terapéutico."
          ),

          halfLife: t(
            lang,
            "Vida média aproximada: 0,5–1 hora.",
            "Vida media aproximada: 0,5–1 hora."
          ),

          commonAdverseEffects: [
            t(lang, "Discinesia", "Discinesia"),
            t(lang, "Náuseas", "Náuseas"),
            t(lang, "Diarreia", "Diarrea"),
            t(lang, "Dor abdominal", "Dolor abdominal"),
            t(lang, "Urina alaranjada/acastanhada", "Orina anaranjada/marrón"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Insônia", "Insomnio")
          ],

          dangerousAdverseEffects: [
            t(lang, "Diarreia grave ou persistente", "Diarrea grave o persistente"),
            t(lang, "Discinesias incapacitantes", "Discinesias incapacitantes"),
            t(lang, "Alucinações ou confusão", "Alucinaciones o confusión"),
            t(lang, "Hipotensão sintomática", "Hipotensión sintomática"),
            t(lang, "Síndrome semelhante à neuroléptica maligna se retirada abrupta de dopaminérgicos", "Síndrome similar al neuroléptico maligno si retirada brusca de dopaminérgicos"),
            t(lang, "Rabdomiólise rara associada a discinesia intensa", "Rabdomiólisis rara asociada a discinesia intensa")
          ],

          risksByPatient: [
            idade >= 65
              ? t(lang, "Idoso: maior risco de confusão, alucinações, discinesia e hipotensão.", "Adulto mayor: mayor riesgo de confusión, alucinaciones, discinesia e hipotensión.")
              : null,

            gestante
              ? t(lang, "Gestação: dados limitados; usar apenas se benefício justificar risco.", "Embarazo: datos limitados; usar solo si el beneficio justifica el riesgo.")
              : null,

            lactante
              ? t(lang, "Lactação: dados limitados; avaliar risco-benefício.", "Lactancia: datos limitados; evaluar riesgo-beneficio.")
              : null,

            hepatopatia
              ? t(lang, "Hepatopatia: usar com cautela e monitorar tolerabilidade.", "Hepatopatía: usar con cautela y monitorizar tolerabilidad.")
              : null
          ].filter(Boolean),

          contraindications: [
            t(lang, "Hipersensibilidade à entacapona", "Hipersensibilidad a entacapona"),
            t(lang, "Uso concomitante com IMAO não seletivo", "Uso concomitante con IMAO no selectivo"),
            t(lang, "Feocromocitoma", "Feocromocitoma"),
            t(lang, "História de síndrome neuroléptica maligna ou rabdomiólise não traumática relacionada a dopaminérgicos", "Antecedente de síndrome neuroléptico maligno o rabdomiólisis no traumática relacionada a dopaminérgicos")
          ],

          interactions: [
            t(lang, "Levodopa: aumenta efeito e pode aumentar discinesias", "Levodopa: aumenta efecto y puede aumentar discinesias"),
            t(lang, "IMAO não seletivos: contraindicado", "IMAO no selectivos: contraindicado"),
            t(lang, "Fármacos metabolizados por COMT/catecolaminas: cautela", "Fármacos metabolizados por COMT/catecolaminas: cautela"),
            t(lang, "Antipsicóticos dopaminérgicos D2: podem reduzir benefício clínico", "Antipsicóticos dopaminérgicos D2: pueden reducir beneficio clínico"),
            t(lang, "Ferro: pode reduzir absorção; separar administração", "Hierro: puede reducir absorción; separar administración")
          ],

          alerts: [
            t(lang, "Sempre administrar junto com levodopa.", "Administrar siempre junto con levodopa."),
            t(lang, "Pode ser necessário reduzir dose de levodopa se houver discinesias.", "Puede ser necesario reducir dosis de levodopa si hay discinesias."),
            t(lang, "Urina alaranjada/acastanhada é esperada e geralmente benigna.", "La orina anaranjada/marrón es esperada y generalmente benigna."),
            t(lang, "Investigar diarreia persistente.", "Investigar diarrea persistente."),
            t(lang, "Monitorar alucinações, hipotensão e confusão em idosos.", "Monitorizar alucinaciones, hipotensión y confusión en adultos mayores.")
          ],

          ref: [
            "Goodman & Gilman 14ª Ed.",
            "MDS Parkinson Disease Guidelines",
            "FDA/DailyMed Entacapone Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    biperideno: {
      name: { pt: "Biperideno", es: "Biperideno" },
      category: "antiparkinsoniano",

      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);

        return {
          name: t(lang, "Biperideno", "Biperideno"),

          class: t(
            lang,
            "Anticolinérgico antiparkinsoniano",
            "Anticolinérgico antiparkinsoniano"
          ),

          category: "antiparkinsoniano",

          commercialNames: {
            br: ["Akineton", "Biperideno"],
            ar: ["Akineton", "Biperideno"]
          },

          presentation: [
            t(lang, "Comprimido 2 mg", "Comprimido 2 mg"),
            t(lang, "Comprimido de liberação prolongada 4 mg", "Comprimido de liberación prolongada 4 mg"),
            t(lang, "Ampola 5 mg/mL", "Ampolla 5 mg/mL")
          ],

          dose: {
            adulto: t(
              lang,
              "Parkinsonismo: iniciar 1 mg VO 1–2x/dia; titular lentamente.",
              "Parkinsonismo: iniciar 1 mg VO 1–2 veces/día; titular lentamente."
            ),

            extrapiramidal: t(
              lang,
              "Distonia aguda/EPS: 2–5 mg IM/EV conforme protocolo; depois considerar VO por curto período.",
              "Distonía aguda/EPS: 2–5 mg IM/IV según protocolo; luego considerar VO por corto período."
            ),

            manutencao: t(
              lang,
              "Dose usual: 2–8 mg/dia divididos.",
              "Dosis habitual: 2–8 mg/día divididos."
            ),

            maxDose: t(
              lang,
              "Dose máxima usual: 16 mg/dia.",
              "Dosis máxima habitual: 16 mg/día."
            )
          },

          doseKg: {
            standard: t(lang, "Não se utiliza cálculo rotineiro por kg em adultos.", "No se utiliza cálculo rutinario por kg en adultos."),
            severe: t(lang, "Usar menor dose eficaz pelo risco anticolinérgico.", "Usar menor dosis eficaz por riesgo anticolinérgico."),
            maxDose: t(lang, "16 mg/dia", "16 mg/día")
          },

          indications: [
            t(lang, "Parkinsonismo medicamentoso", "Parkinsonismo medicamentoso"),
            t(lang, "Distonia aguda induzida por antipsicótico", "Distonía aguda inducida por antipsicótico"),
            t(lang, "Sintomas extrapiramidais por antipsicóticos", "Síntomas extrapiramidales por antipsicóticos"),
            t(lang, "Tremor predominante na doença de Parkinson em pacientes jovens selecionados", "Temblor predominante en enfermedad de Parkinson en pacientes jóvenes seleccionados"),
            t(lang, "Rigidez parkinsoniana leve em casos selecionados", "Rigidez parkinsoniana leve en casos seleccionados"),
            t(lang, "Acatisia/EPS quando outras medidas não são suficientes em contexto selecionado", "Acatisia/EPS cuando otras medidas no son suficientes en contexto seleccionado")
          ],

          renalAdjustment: t(
            lang,
            "Sem ajuste renal habitual, mas usar cautela em pacientes frágeis.",
            "Sin ajuste renal habitual, pero usar con cautela en pacientes frágiles."
          ),

          hepaticAdjustment: hepatopatia
            ? t(
                lang,
                "Hepatopatia: usar com cautela e titular lentamente.",
                "Hepatopatía: usar con cautela y titular lentamente."
              )
            : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),

          mechanism: t(
            lang,
            "Antagonista muscarínico central, reduzindo hiperatividade colinérgica relativa nos gânglios da base.",
            "Antagonista muscarínico central, reduciendo hiperactividad colinérgica relativa en ganglios basales."
          ),

          onset: t(
            lang,
            "Via parenteral pode aliviar distonia aguda em minutos; via oral atua em horas a dias.",
            "Vía parenteral puede aliviar distonía aguda en minutos; vía oral actúa en horas a días."
          ),

          halfLife: t(
            lang,
            "Vida média aproximada: 18–24 horas.",
            "Vida media aproximada: 18–24 horas."
          ),

          commonAdverseEffects: [
            t(lang, "Boca seca", "Boca seca"),
            t(lang, "Visão turva", "Visión borrosa"),
            t(lang, "Constipação", "Estreñimiento"),
            t(lang, "Retenção urinária", "Retención urinaria"),
            t(lang, "Taquicardia", "Taquicardia"),
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Náuseas", "Náuseas")
          ],

          dangerousAdverseEffects: [
            t(lang, "Delirium anticolinérgico", "Delirium anticolinérgico"),
            t(lang, "Confusão grave", "Confusión grave"),
            t(lang, "Glaucoma agudo de ângulo fechado", "Glaucoma agudo de ángulo cerrado"),
            t(lang, "Retenção urinária aguda", "Retención urinaria aguda"),
            t(lang, "Íleo paralítico", "Íleo paralítico"),
            t(lang, "Piora cognitiva em idosos", "Empeoramiento cognitivo en adultos mayores")
          ],

          risksByPatient: [
            idade >= 65
              ? t(lang, "Idoso: evitar se possível; alto risco de delirium, quedas, retenção urinária, constipação e piora cognitiva.", "Adulto mayor: evitar si es posible; alto riesgo de delirium, caídas, retención urinaria, estreñimiento y deterioro cognitivo.")
              : null,

            gestante
              ? t(lang, "Gestação: usar apenas se necessário e por menor tempo possível.", "Embarazo: usar solo si es necesario y por el menor tiempo posible.")
              : null,

            lactante
              ? t(lang, "Lactação: pode reduzir produção de leite e causar efeitos anticolinérgicos no lactente.", "Lactancia: puede reducir producción de leche y causar efectos anticolinérgicos en el lactante.")
              : null,

            hepatopatia
              ? t(lang, "Hepatopatia: titular lentamente e monitorar confusão/sedação.", "Hepatopatía: titular lentamente y monitorizar confusión/sedación.")
              : null
          ].filter(Boolean),

          contraindications: [
            t(lang, "Hipersensibilidade ao biperideno", "Hipersensibilidad a biperideno"),
            t(lang, "Glaucoma de ângulo fechado não tratado", "Glaucoma de ángulo cerrado no tratado"),
            t(lang, "Retenção urinária grave ou obstrução prostática importante", "Retención urinaria grave u obstrucción prostática importante"),
            t(lang, "Íleo paralítico ou megacólon", "Íleo paralítico o megacolon"),
            t(lang, "Miastenia gravis", "Miastenia gravis"),
            t(lang, "Demência ou delirium ativo, salvo extrema necessidade", "Demencia o delirium activo, salvo extrema necesidad")
          ],

          interactions: [
            t(lang, "Antidepressivos tricíclicos: maior carga anticolinérgica", "Antidepresivos tricíclicos: mayor carga anticolinérgica"),
            t(lang, "Antipsicóticos com ação anticolinérgica: maior risco de delirium/constipação", "Antipsicóticos con acción anticolinérgica: mayor riesgo de delirium/estreñimiento"),
            t(lang, "Anti-histamínicos sedativos: maior efeito anticolinérgico", "Antihistamínicos sedativos: mayor efecto anticolinérgico"),
            t(lang, "Levodopa: pode aumentar discinesias em alguns casos", "Levodopa: puede aumentar discinesias en algunos casos"),
            t(lang, "Álcool e sedativos: maior sonolência/confusão", "Alcohol y sedantes: mayor somnolencia/confusión")
          ],

          alerts: [
            t(lang, "Excelente para distonia aguda induzida por antipsicótico.", "Excelente para distonía aguda inducida por antipsicótico."),
            t(lang, "Evitar uso crônico desnecessário em idosos.", "Evitar uso crónico innecesario en adultos mayores."),
            t(lang, "Monitorar retenção urinária, constipação e confusão.", "Monitorizar retención urinaria, estreñimiento y confusión."),
            t(lang, "Pode piorar cognição e memória.", "Puede empeorar cognición y memoria."),
            t(lang, "Reavaliar necessidade após controle dos sintomas extrapiramidais.", "Reevaluar necesidad tras control de síntomas extrapiramidales.")
          ],

          ref: [
            "Goodman & Gilman 14ª Ed.",
            "MDS Parkinson Disease Guidelines",
            "Stahl's Essential Psychopharmacology",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    }

  });

})(); /* fim da IIFE do módulo psicofarmacos */
