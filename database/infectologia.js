/* ============================================================
   MedCases Pro — Módulo: INFECTOLOGIA
   Expõe: window.INFECTOLOGIA_DRUGS_DB

   BUILD 336 — Lote 1 (Antifúngicos)
   Anfotericina B Lipossomal, Anfotericina B Desoxicolato, Anidulafungina
   ============================================================ */

(function () {
  'use strict';
  if (typeof window.INFECTOLOGIA_DRUGS_DB !== 'object' || Array.isArray(window.INFECTOLOGIA_DRUGS_DB)) {
    window.INFECTOLOGIA_DRUGS_DB = {};
  }

  Object.assign(window.INFECTOLOGIA_DRUGS_DB, {

/* ── ANFOTERICINA B LIPOSSOMAL ──────────────────────────────────────── */
    "anfotericina_lipossomal": {
      name: { pt: 'Anfotericina B Lipossomal', es: 'Anfotericina B Liposomal' },
      category: 'infectologia',
      class: { pt: 'Antifúngico Poliênico (Formulação Lipídica)', es: 'Antifúngico Poliénico (Formulación Lipídica)' },
      indications: {
        pt: ['Infecções fúngicas sistêmicas severas (Candidíase invasiva, Aspergilose, Mucormicose, Criptococose)', 'Meningite Criptocócica', 'Tratamento de Leishmaniose Visceral (Calazar) e Tegumentar'],
        es: ['Infecciones fúngicas sistémicas severas (Candidiasis invasiva, Aspergilosis, Mucormicosis, Criptococosis)', 'Meningitis Criptocócica', 'Tratamiento de Leishmaniasis Visceral (Kala-azar) y Tegumentaria']
      },
      commercialNames: { br: ['AmBisome'], ar: ['AmBisome'] },
      presentation: { pt: ['Frasco-ampola liofilizado 50 mg'], es: ['Vial liofilizado 50 mg'] },
      mechanism: {
        pt: 'Liga-se de forma irreversível ao Ergosterol, o principal componente da membrana celular dos fungos (e da Leishmania). Isso cria poros maciços na membrana celular, causando vazamento imediato de íons intracelulares e morte fúngica. O brilhantismo tecnológico: A Anfotericina B é encapsulada dentro de uma bolha de gordura (Lipossoma), que impede a droga de entrar em contato com os rins humanos, reduzindo a famosa nefrotoxicidade em mais de 60%. O lipossoma só explode quando engolfado por um macrófago no local da infecção.',
        es: 'Se une de forma irreversible al Ergosterol, el principal componente de la membrana celular de los hongos (y de la Leishmania). Esto crea poros masivos en la membrana celular, causando fuga inmediata de iones intracelulares y muerte fúngica. La brillantez tecnológica: La Anfotericina B se encapsula dentro de una burbuja de grasa (Liposoma), que impide que la droga entre en contacto con los riñones humanos, reduciendo la famosa nefrotoxicidad en más del 60%. El liposoma solo explota cuando es fagocitado por un macrófago en el sitio de la infección.'
      },
      dose: {
        adult: {
          pt: 'Geralmente 3 a 5 mg/kg/dia IV em infusão contínua. Mucormicose: 5 a 10 mg/kg/dia (doses maciças).',
          es: 'Generalmente 3 a 5 mg/kg/día IV en infusión continua. Mucormicosis: 5 a 10 mg/kg/día (dosis masivas).'
        },
        pediatric: {
          pt: '3 a 5 mg/kg/dia IV.',
          es: '3 a 5 mg/kg/día IV.'
        }
      },
      administration: { pt: ['DILUENTE EXCLUSIVO: Soro Glicosado a 5% (SG 5%). O uso de Soro Fisiológico (salina) destrói o lipossoma imediatamente, quebrando e precipitando a droga inteira.', 'Infundir lentamente (ao longo de 2 horas).'], es: ['DILUYENTE EXCLUSIVO: Suero Glucosado al 5% (SG 5%). El uso de Suero Fisiológico (salina) destruye el liposoma inmediatamente, rompiendo y precipitando toda la droga.', 'Infundir lentamente (a lo largo de 2 horas).'] },
      renalAdjustment: { required: true, message: { pt: 'A formulação lipossomal foi feita justamente para poupar os rins. Usar com cautela em DRC, mas é a opção mais segura de anfotericina.', es: 'La formulación liposomal fue hecha justamente para proteger los riñones. Usar con precaución en ERC, pero es la opción más segura de anfotericina.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste estrito.', es: 'Sin necesidad de ajuste estricto.' } },
      commonAdverseEffects: { pt: ['Hipocalemia (Perda de potássio na urina)', 'Reações infusionais (febre e tremores, embora muito menores que a formulação clássica)'], es: ['Hipopotasemia (Pérdida de potasio en la orina)', 'Reacciones infusionales (fiebre y temblores, aunque mucho menores que la formulación clásica)'] },
      dangerousAdverseEffects: { pt: ['Nefrotoxicidade residual e Lesão Renal Aguda', 'Hepatotoxicidade (elevação de transaminases)', 'Hipomagnesemia grave'], es: ['Nefrotoxicidad residual y Lesión Renal Aguda', 'Hepatotoxicidad (elevación de transaminasas)', 'Hipomagnesemia grave'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade grave comprovada'], es: ['Hipersensibilidad grave comprobada'] },
        relative: { pt: ['Uso associado com outros nefrotóxicos severos (Polimixina B, Aminoglicosídeos)'], es: ['Uso asociado con otros nefrotóxicos severos (Polimixina B, Aminoglucósidos)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'ATENÇÃO AO PREÇO E DOSE: O custo da Lipossomal é estratosférico (milhares de dólares por dia). Logo, ela só é liberada se o paciente possuir fator de risco ou lesão renal aguda comprovada impedindo o uso da barata Anfotericina Desoxicolato.', es: 'ATENCIÓN AL PRECIO Y DOSIS: El costo de la Liposomal es estratosférico (miles de dólares por día). Por tanto, solo se libera si el paciente posee factor de riesgo o lesión renal aguda comprobada impidiendo el uso de la barata Anfotericina Desoxicolato.' }
      }
    },

/* ── ANFOTERICINA B DESOXICOLATO ────────────────────────────────────── */
    "anfotericina_desoxicolato": {
      name: { pt: 'Anfotericina B Desoxicolato', es: 'Anfotericina B Desoxicolato' },
      category: 'infectologia',
      class: { pt: 'Antifúngico Poliênico (Formulação Clássica / Convencional)', es: 'Antifúngico Poliénico (Formulación Clásica / Convencional)' },
      indications: {
        pt: ['Infecções fúngicas invasivas severas em pacientes com função renal intacta (Hospitais públicos/escassez de lipossomal)'],
        es: ['Infecciones fúngicas invasivas severas en pacientes con función renal intacta (Hospitales públicos/escasez de liposomal)']
      },
      commercialNames: { br: ['Anforicin B', 'Fungizon'], ar: ['Fungizone'] },
      presentation: { pt: ['Frasco-ampola liofilizado 50 mg'], es: ['Vial liofilizado 50 mg'] },
      mechanism: {
        pt: 'Idêntico ao da lipossomal (liga-se ao ergosterol formando poros na membrana). CONTUDO, como não está protegida pelo lipossoma de gordura, essa molécula livre se liga também, por afinidade cruzada, ao COLESTEROL humano. A parede dos túbulos renais humanos é rica em colesterol, o que faz a droga destruir e necrosar diretamente os rins do paciente na forma de dano tubular maciço.',
        es: 'Idéntico al de la liposomal (se une al ergosterol formando poros en la membrana). SIN EMBARGO, como no está protegida por el liposoma de grasa, esta molécula libre se une también, por afinidad cruzada, al COLESTEROL humano. La pared de los túbulos renales humanos es rica en colesterol, lo que hace que la droga destruya y necrose directamente los riñones del paciente en forma de daño tubular masivo.'
      },
      dose: {
        adult: {
          pt: '0,5 a 1,5 mg/kg/dia IV. (ATENÇÃO: A dose é cerca de 3 VEZES MENOR que a da Lipossomal. Aplicar dose da lipossomal com desoxicolato mata o paciente).',
          es: '0,5 a 1,5 mg/kg/día IV. (ATENCIÓN: La dosis es cerca de 3 VECES MENOR que la de la Liposomal. Aplicar dosis de liposomal con desoxicolato mata al paciente).'
        },
        pediatric: {
          pt: '0,5 a 1 mg/kg/dia IV.',
          es: '0,5 a 1 mg/kg/día IV.'
        }
      },
      administration: { pt: ['DILUENTE EXCLUSIVO: Soro Glicosado a 5% (SG 5%).', 'A infusão dura 4 HORAS. O paciente requer Pré-Medicação obrigatória (Paracetamol, Hidrocortisona e Prometazina) 30 minutos antes para evitar a síndrome do "Shake and Bake".'], es: ['DILUYENTE EXCLUSIVO: Suero Glucosado al 5% (SG 5%).', 'La infusión dura 4 HORAS. El paciente requiere Premedicación obligatoria (Paracetamol, Hidrocortisona y Prometazina) 30 minutos antes para evitar el síndrome de "Shake and Bake".'] },
      renalAdjustment: { required: true, message: { pt: 'A nefrotoxicidade é a REGRA (ocorre em 80% dos casos). Suspender ou trocar para Lipossomal se a Creatinina subir muito ou a TFG cair < 40.', es: 'La nefrotoxicidad es la REGLA (ocurre en 80% de los casos). Suspender o cambiar a Liposomal si la Creatinina sube mucho o la TFG cae < 40.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste estrito.', es: 'Sin necesidad de ajuste estricto.' } },
      commonAdverseEffects: { pt: ['Síndrome "Shake and Bake" (Frio intenso, calafrios violentos batendo os dentes e febre alta 1h após iniciar a bomba)', 'Hipocalemia severa (Exige reposição diária de Cloreto de Potássio)', 'Flebite terrível (ideal cateter central)'], es: ['Síndrome "Shake and Bake" (Frío intenso, escalofríos violentos castañeteando los dientes y fiebre alta 1h tras iniciar la bomba)', 'Hipopotasemia severa (Exige reposición diaria de Cloruro de Potasio)', 'Flebitis terrible (ideal catéter central)'] },
      dangerousAdverseEffects: { pt: ['Lesão Renal Aguda Tubulotóxica (muitas vezes irreversível no uso prolongado)', 'Arritmias cardíacas (secundárias à hipocalemia induzida)', 'Agranulocitose / Supressão da medula óssea'], es: ['Lesión Renal Aguda Tubulotóxica (muchas veces irreversible en el uso prolongado)', 'Arritmias cardíacas (secundarias a la hipopotasemia inducida)', 'Agranulocitosis / Supresión de la médula ósea'] },
      contraindications: {
        absolute: { pt: ['Insuficiência Renal Aguda instalada (obriga a mudança para a Lipossomal)'], es: ['Insuficiencia Renal Aguda instalada (obliga al cambio a la Liposomal)'] },
        relative: { pt: ['Uso associado com Vancomicina, Aminoglicosídeos e Polimixina B'], es: ['Uso asociado con Vancomicina, Aminoglucósidos y Polimixina B'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A "Amfo-Terrível". Para prevenir o colapso dos rins, DEVE-SE infundir 500 mL a 1 Litro de SF 0,9% (Soroterapia pré e pós) para lavar agressivamente os túbulos renais todos os dias do tratamento.', es: 'La "Anfo-Terrible". Para prevenir el colapso de los riñones, DEBE infundirse 500 mL a 1 Litro de SF 0,9% (Sueroterapia pre y pos) para lavar agresivamente los túbulos renales todos los días del tratamiento.' }
      }
    },

/* ── ANIDULAFUNGINA ─────────────────────────────────────────────────── */
    "anidulafungina": {
      name: { pt: 'Anidulafungina', es: 'Anidulafungina' },
      category: 'infectologia',
      class: { pt: 'Antifúngico (Equinocandina)', es: 'Antifúngico (Equinocandina)' },
      indications: {
        pt: ['Candidemia e Candidíase invasiva do paciente crítico (Droga de Ouro inicial)', 'Candidíase esofágica severa refratária ao fluconazol'],
        es: ['Candidemia y Candidiasis invasiva del paciente crítico (Droga de Oro inicial)', 'Candidiasis esofágica severa refractaria a fluconazol']
      },
      commercialNames: { br: ['Eraxis'], ar: ['Eraxis'] },
      presentation: { pt: ['Frasco-ampola liofilizado 100 mg'], es: ['Vial liofilizado 100 mg'] },
      mechanism: {
        pt: 'Equinocandinas são a "penicilina dos fungos". Inibem a enzima Beta-(1,3)-D-glucano sintase. Isso impede a formação do polímero glucano, componente principal da PAREDE celular fúngica (uma estrutura que humanos não possuem). Sem a parede, o fungo morre por lise osmótica. Tem ação fungicida poderosa e rápida contra todas as espécies de Candida.',
        es: 'Equinocandinas son la "penicilina de los hongos". Inhiben la enzima Beta-(1,3)-D-glucano sintasa. Esto impide la formación del polímero glucano, componente principal de la PARED celular fúngica (una estructura que los humanos no poseen). Sin la pared, el hongo muere por lisis osmótica. Tiene acción fungicida poderosa y rápida contra todas las especies de Candida.'
      },
      dose: {
        adult: {
          pt: 'Dose de Ataque: 200 mg IV no dia 1. Dose de Manutenção: 100 mg IV/dia.',
          es: 'Dosis de Ataque: 200 mg IV en el día 1. Dosis de Mantenimiento: 100 mg IV/día.'
        },
        pediatric: {
          pt: '3 mg/kg IV ataque, seguido de 1,5 mg/kg/dia.',
          es: '3 mg/kg IV ataque, seguido de 1,5 mg/kg/día.'
        }
      },
      administration: { pt: ['Infusão IV LENTA (taxa máxima de 1,1 mg/min) para evitar reações por liberação de histamina (vermelhidão/pressão baixa).'], es: ['Infusión IV LENTA (tasa máxima de 1,1 mg/min) para evitar reacciones por liberación de histamina (enrojecimiento/presión baja).'] },
      renalAdjustment: { required: false, message: { pt: 'Totalmente segura. NÃO DEPENDE DOS RINS.', es: 'Totalmente segura. NO DEPENDE DE LOS RIÑONES.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Fármaco maravilhoso na UTI: Sofre DEGRADAÇÃO QUÍMICA no plasma (espontânea) em pH neutro. Não passa por citocromo hepático. Segura na cirrose extrema e na diálise.', es: 'Fármaco maravilloso en la UCI: Sufre DEGRADACIÓN QUÍMICA en el plasma (espontánea) a pH neutro. No pasa por citocromo hepático. Segura en la cirrosis extrema y en diálisis.' } },
      commonAdverseEffects: { pt: ['Flebitis local', 'Cefaleia', 'Diarreia e alterações leves do potássio'], es: ['Flebitis local', 'Cefalea', 'Diarrea y alteraciones leves del potasio'] },
      dangerousAdverseEffects: { pt: ['Reação induzida pela infusão rápida (Hipotensão e Urticária mediada por histamina)', 'Hepatite medicamentosa (rara, mas monitorável)'], es: ['Reacción inducida por infusión rápida (Hipotensión y Urticaria mediada por histamina)', 'Hepatitis medicamentosa (rara, pero monitorizable)'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade grave a equinocandinas'], es: ['Hipersensibilidad grave a equinocandinas'] },
        relative: { pt: ['Ausência de evidência fúngica (seu uso profilático empírico largo induz rápida resistência)'], es: ['Ausencia de evidencia fúngica (su uso profiláctico empírico largo induce rápida resistencia)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'É a opção mais LIMPA de interações medicamentosas e toxicidade orgânica do mundo fúngico (pois é degradada sozinha no sangue). Ouro para doentes sépticos polimedicados onde Caspofungina/Micafungina ou Anfotericina falhariam ou seriam tóxicas.', es: 'Es la opción más LIMPIA de interacciones medicamentosas y toxicidad orgánica del mundo fúngico (pues se degrada sola en la sangre). Oro para enfermos sépticos polimedicados donde Caspofungina/Micafungina o Anfotericina fallarían o serían tóxicas.' }
      }
    }

  }); /* fim Object.assign INFECTOLOGIA_DRUGS_DB — BUILD 336 Lote 1 (anfotericina_lipossomal · anfotericina_desoxicolato · anidulafungina) */

})();
