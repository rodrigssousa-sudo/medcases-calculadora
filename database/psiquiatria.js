/* ============================================================
   MedCases Pro — Módulo: PSIQUIATRIA (Clínica e Afetiva)
   Expõe: window.PSIQUIATRIA_DRUGS_DB
   Categorias: Antidepressivos (ISRS / IRSN / TCA / Atípicos / IMAOs),
               Ansiolíticos/Sedativos (BZD + Drogas-Z + Buspirona),
               Estabilizador de Humor Puro (Lítio)
   Schema: Object-DB { chave: { name, calculate, ... } }
   BUILD 455-SNC — PILAR 1 — Desmembramento SNC
   Origem: extraído de psicofarmacos.js (46 drugs migrados)
============================================================ */

(function () {
  'use strict';

  if (typeof window.PSIQUIATRIA_DRUGS_DB !== 'object' ||
      window.PSIQUIATRIA_DRUGS_DB === null ||
      Array.isArray(window.PSIQUIATRIA_DRUGS_DB)) {
    window.PSIQUIATRIA_DRUGS_DB = {};
  }
  if (typeof window.PSIQUIATRIA_DRUGS_DB !== 'object' ||
      window.PSIQUIATRIA_DRUGS_DB === null) return;

  const t = (lang, pt, es) => lang === 'pt' ? pt : es;

  Object.assign(window.PSIQUIATRIA_DRUGS_DB, {

    // ── ANTIDEPRESSIVOS ISRS ──

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
    },

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
    },

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
    },

    // ── ANTIDEPRESSIVOS IRSN ──

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
    },

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
    },

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

    // ── ANTIDEPRESSIVOS TRICÍCLICOS (TCA) ──

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
    },

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
    },

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

    // ── ANTIDEPRESSIVOS ATÍPICOS ──

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

    // ── INIBIDORES DA MAO (IMAOs) ──

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

    // ── ANSIOLÍTICOS — BENZODIAZEPÍNICOS (BZD) ──

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

    // ── HIPNÓTICOS NÃO-BENZODIAZEPÍNICOS (DROGAS-Z) ──

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

    // ── ANSIOLÍTICOS NÃO-BZD ──

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

    // ── ESTABILIZADOR DE HUMOR — LÍTIO ──

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
    }

  }); /* fim Object.assign PSIQUIATRIA_DRUGS_DB — BUILD 455-SNC
         PILAR 1: fluoxetina·sertralina·escitalopram·citalopram·paroxetina·fluvoxamina (ISRS)
                  venlafaxina·desvenlafaxina·duloxetina·milnaciprano·levomilnaciprano (IRSN)
                  amitriptilina·nortriptilina·imipramina·clomipramina·desipramina·doxepina·trimipramina (TCA)
                  mirtazapina·bupropiona·trazodona·agomelatina·vortioxetina·vilazodona·reboxetina (Atípicos)
                  fenelzina·tranilcipromina·moclobemida (IMAOs)
                  clonazepam·alprazolam·diazepam·lorazepam·bromazepam·midazolam·
                  oxazepam·temazepam·nitrazepam·clordiazepoxido·flurazepam·triazolam (BZD)
                  zolpidem·zopiclona·eszopiclona (Hipnóticos-Z)
                  buspirona·hidroxizina (Ansiolíticos não-BZD)
                  litio (Estabilizador de Humor) — 46 drugs total */

})();
