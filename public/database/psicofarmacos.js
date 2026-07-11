/* ============================================================
   MedCases Pro — Módulo: PSICOFÁRMACOS (Alta Complexidade)
   Expõe: window.PSICOFARMACOS_DRUGS_DB
   Categorias: Antipsicóticos Típicos (Primeira Geração),
               Antipsicóticos Atípicos (Segunda Geração),
               Injetáveis de Longa Duração (LAI / Depot)
   Indicações: Psicoses, Surtos Agudos, Delírio de UTI, Esquizofrenia
   Schema: Object-DB { chave: { name, calculate, ... } }
   BUILD 455-SNC — PILAR 2 — Desmembramento SNC
   Antidepressivos/Ansiolíticos/Lítio migrados → psiquiatria.js
   Anticonvulsivantes/Antiparkinson migrados → neurologia.js
============================================================ */

(function () {
  'use strict';

  if (typeof window.PSICOFARMACOS_DRUGS_DB !== 'object' ||
      window.PSICOFARMACOS_DRUGS_DB === null ||
      Array.isArray(window.PSICOFARMACOS_DRUGS_DB)) {
    window.PSICOFARMACOS_DRUGS_DB = {};
  }
  if (typeof window.PSICOFARMACOS_DRUGS_DB !== 'object' ||
      window.PSICOFARMACOS_DRUGS_DB === null) return;

  const t = (lang, pt, es) => lang === 'pt' ? pt : es;

  Object.assign(window.PSICOFARMACOS_DRUGS_DB, {

    // ── ANTIPSICÓTICOS TÍPICOS (PRIMEIRA GERAÇÃO) ──

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

    // ── ANTIPSICÓTICOS ATÍPICOS (SEGUNDA GERAÇÃO) ──

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

    // ── INJETÁVEIS DE LONGA DURAÇÃO (LAI / DEPOT) ──

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
    },

    /* ── ESTABILIZADORES DO HUMOR ── */

  }); /* fim Object.assign PSICOFARMACOS_DRUGS_DB — BUILD 455-SNC
         PILAR 2: haloperidol·clorpromazina·levomepromazina·periciazina·flufenazina·
                  zuclopentixol·tiotixeno·pimozida·sulpirida (Típicos)
                  risperidona·olanzapina·quetiapina·clozapina·aripiprazol·ziprasidona·
                  paliperidona·asenapina·lurasidona·cariprazina·brexpiprazol·amisulprida (Atípicos)
                  paliperidona_trimestral·paliperidona_mensal·risperidona_lai·
                  aripiprazol_lai·olanzapina_lai (LAI/Depot) — 26 drugs total */

})(); /* fim da IIFE do módulo psicofarmacos */
