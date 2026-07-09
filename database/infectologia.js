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

/* ─────────────────────────────────────────────────────────────────────────
   GRUPO 2 — Infectologia Antifúngicos (caspofungina · micafungina · fluconazol · itraconazol · voriconazol)
   BUILD 338 Lote 2
───────────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  Object.assign(window.INFECTOLOGIA_DRUGS_DB, {

/* ── CASPOFUNGINA ───────────────────────────────────────────────────── */
    "caspofungina": {
      name: { pt: 'Caspofungina', es: 'Caspofungina' },
      category: 'infectologia',
      class: { pt: 'Antifúngico (Equinocandina)', es: 'Antifúngico (Equinocandina)' },
      indications: {
        pt: ['Tratamento empírico de infecções fúngicas em neutropenia febril', 'Candidíase invasiva', 'Aspergilose invasiva refratária ou intolerante a outras terapias'],
        es: ['Tratamiento empírico de infecciones fúngicas en neutropenia febril', 'Candidiasis invasiva', 'Aspergilosis invasiva refractaria o intolerante a otras terapias']
      },
      commercialNames: { br: ['Cancidas'], ar: ['Cancidas'] },
      presentation: { pt: ['Frasco-ampola liofilizado 50 mg e 70 mg'], es: ['Vial liofilizado 50 mg y 70 mg'] },
      mechanism: {
        pt: 'Equinocandina clássica (a primeira aprovada). Inibe a síntese de Beta-(1,3)-D-glucano, destruindo a parede celular fúngica (fungicida contra Candida e fungistática contra Aspergillus). Ao contrário da Anidulafungina, a Caspofungina sofre hidrólise ativa no FÍGADO e depende de transporte mediado por carreadores hepáticos, o que a torna suscetível a interações medicamentosas.',
        es: 'Equinocandina clásica (la primera aprobada). Inhibe la síntesis de Beta-(1,3)-D-glucano, destruyendo la pared celular fúngica (fungicida contra Candida y fungistática contra Aspergillus). A diferencia de la Anidulafungina, la Caspofungina sufre hidrólisis activa en el HÍGADO y depende del transporte mediado por transportadores hepáticos, lo que la hace susceptible a interacciones medicamentosas.'
      },
      dose: {
        adult: {
          pt: 'Dose de Ataque: 70 mg IV no Dia 1. Manutenção: 50 mg IV/dia. (Aumentar para 70 mg/dia em pacientes > 80 kg).',
          es: 'Dosis de Ataque: 70 mg IV en el Día 1. Mantenimiento: 50 mg IV/día. (Aumentar a 70 mg/día en pacientes > 80 kg).'
        },
        pediatric: {
          pt: 'Ataque 70 mg/m² (máx 70mg). Manutenção 50 mg/m²/dia.',
          es: 'Ataque 70 mg/m² (máx 70mg). Mantenimiento 50 mg/m²/día.'
        }
      },
      administration: { pt: ['Não misturar ou diluir com Soro Glicosado (incompatibilidade química). Diluir APENAS em SF 0,9% ou Ringer Lactato.', 'Infundir lentamente ao longo de 1 hora.'], es: ['No mezclar o diluir con Suero Glucosado (incompatibilidad química). Diluir SOLO en SF 0,9% o Ringer Lactato.', 'Infundir lentamente a lo largo de 1 hora.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste na doença renal crônica ou hemodiálise.', es: 'Sin necesidad de ajuste en la enfermedad renal crónica o hemodiálisis.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Insuficiência hepática moderada (Child-Pugh B): Reduzir a manutenção para 35 mg/dia.', es: 'Insuficiencia hepática moderada (Child-Pugh B): Reducir el mantenimiento a 35 mg/día.' } },
      commonAdverseEffects: { pt: ['Febre e calafrios (reação infusional mediada por histamina)', 'Flebite no acesso', 'Hipocalemia'], es: ['Fiebre y escalofríos (reacción infusional mediada por histamina)', 'Flebitis en el acceso', 'Hipopotasemia'] },
      dangerousAdverseEffects: { pt: ['Anafilaxia severa', 'Hepatotoxicidade (elevação aguda de TGO/TGP)'], es: ['Anafilaxia severa', 'Hepatotoxicidad (elevación aguda de AST/ALT)'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade grave'], es: ['Hipersensibilidad grave'] },
        relative: { pt: ['Uso concomitante com Ciclosporina (exige monitoramento laboratorial rígido)'], es: ['Uso concomitante con Ciclosporina (exige monitorización de laboratorio rígida)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'Diferente da Anidulafungina, a Caspofungina interage ativamente com indutores hepáticos. Se o paciente usar Rifampicina ou Fenitoína, a dose de manutenção da Caspofungina DEVE ser aumentada para 70 mg/dia para não haver falha do tratamento.', es: 'A diferencia de la Anidulafungina, la Caspofungina interactúa activamente con inductores hepáticos. Si el paciente usa Rifampicina o Fenitoína, la dosis de mantenimiento de la Caspofungina DEBE aumentarse a 70 mg/día para evitar el fracaso del tratamiento.' }
      }
    },

/* ── MICAFUNGINA ────────────────────────────────────────────────────── */
    "micafungina": {
      name: { pt: 'Micafungina', es: 'Micafungina' },
      category: 'infectologia',
      class: { pt: 'Antifúngico (Equinocandina)', es: 'Antifúngico (Equinocandina)' },
      indications: {
        pt: ['Tratamento de Candidemia', 'Profilaxia de infecção fúngica em pacientes submetidos a Transplante de Células-Tronco Hematopoiéticas (TCTH)'],
        es: ['Tratamiento de Candidemia', 'Profilaxis de infección fúngica en pacientes sometidos a Trasplante de Células Madre Hematopoyéticas (TCMH)']
      },
      commercialNames: { br: ['Mycamine'], ar: ['Mycamine'] },
      presentation: { pt: ['Frasco-ampola liofilizado 50 mg e 100 mg'], es: ['Vial liofilizado 50 mg y 100 mg'] },
      mechanism: {
        pt: 'Equinocandina. Assim como as outras, inibe a síntese de glucano da parede celular. Apresenta um perfil farmacocinético intermediário: é metabolizada pelo fígado (como a caspofungina), porém através de enzimas diferentes (não usa o sistema citocromo P450), resultando em um perfil de interações medicamentosas muito menor.',
        es: 'Equinocandina. Al igual que las otras, inhibe la síntesis de glucano de la pared celular. Presenta un perfil farmacocinético intermedio: es metabolizada por el hígado (como la caspofungina), pero a través de enzimas diferentes (no usa el sistema citocromo P450), resultando en un perfil de interacciones medicamentosas mucho menor.'
      },
      dose: {
        adult: {
          pt: 'Candidemia: 100 mg IV/dia. (NÃO requer dose de ataque). Profilaxia TCTH: 50 mg IV/dia.',
          es: 'Candidemia: 100 mg IV/día. (NO requiere dosis de ataque). Profilaxis TCMH: 50 mg IV/día.'
        },
        pediatric: {
          pt: '2 a 4 mg/kg/dia IV (conforme peso e indicação).',
          es: '2 a 4 mg/kg/día IV (según peso e indicación).'
        }
      },
      administration: { pt: ['Infundir ao longo de 1 hora. Evitar exposição do frasco diluído à luz solar direta intensa.'], es: ['Infundir a lo largo de 1 hora. Evitar exposición del vial diluido a la luz solar directa intensa.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Não requer ajuste formal na insuficiência hepática leve a moderada, mas deve ser usada com cuidado em disfunção grave.', es: 'No requiere ajuste formal en la insuficiencia hepática leve a moderada, pero debe usarse con cuidado en disfunción grave.' } },
      commonAdverseEffects: { pt: ['Erupção cutânea maculopapular', 'Diarreia e Náuseas', 'Queda transitória de glóbulos brancos'], es: ['Erupción cutánea maculopapular', 'Diarrea y Náuseas', 'Caída transitoria de glóbulos blancos'] },
      dangerousAdverseEffects: { pt: ['Risco potencial de desenvolvimento de tumores hepáticos (observado em altas doses crônicas em ratos, vigilância no uso contínuo humano prolongado)', 'Hemólise intravascular e falência hepática isolada'], es: ['Riesgo potencial de desarrollo de tumores hepáticos (observado en altas dosis crónicas en ratas, vigilancia en uso continuo humano prolongado)', 'Hemólisis intravascular y fallo hepático aislado'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade a equinocandinas'], es: ['Hipersensibilidad a equinocandinas'] },
        relative: { pt: ['Nenhuma destacável em cenário crítico.'], es: ['Ninguna destacable en escenario crítico.'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'A grande vantagem da Micafungina é NÃO precisar de dose de ataque e ser muito segura em pacientes hematológicos graves (transplantados de medula), sem as graves interações da Caspofungina.', es: 'La gran ventaja de la Micafungina es NO necesitar dosis de ataque y ser muy segura en pacientes hematológicos graves (trasplantados de médula), sin las graves interacciones de la Caspofungina.' }
      }
    },

/* ── FLUCONAZOL ─────────────────────────────────────────────────────── */
    "fluconazol": {
      name: { pt: 'Fluconazol', es: 'Fluconazol' },
      category: 'infectologia',
      class: { pt: 'Antifúngico Triazólico de 1ª Geração', es: 'Antifúngico Triazólico de 1ª Generación' },
      indications: {
        pt: ['Candidíase de mucosa (oral, esofágica, vaginal)', 'Candidemia em pacientes NÃO-críticos e NÃO-neutropênicos (onde C. albicans sensível é a suspeita)', 'Tratamento de consolidação e profilaxia de Meningite Criptocócica'],
        es: ['Candidiasis de mucosa (oral, esofágica, vaginal)', 'Candidemia en pacientes NO críticos y NO neutropénicos (donde C. albicans sensible es la sospecha)', 'Tratamiento de consolidación y profilaxis de Meningitis Criptocócica']
      },
      commercialNames: { br: ['Zoltec', 'Triazol'], ar: ['Mutum', 'Fluconazol'] },
      presentation: { pt: ['Cápsulas 150 mg', 'Bolsas prontas para IV 2 mg/mL (100 mL = 200mg)'], es: ['Cápsulas 150 mg', 'Bolsas listas para IV 2 mg/mL (100 mL = 200mg)'] },
      mechanism: {
        pt: 'Inibe a enzima fúngica 14-alfa-desmetilase, ligada ao citocromo P450 do fungo. Isso impede a conversão do lanosterol em ergosterol, enfraquecendo a membrana fúngica e travando seu crescimento. Possui ação FUNGISTÁTICA (freia o fungo para a imunidade matar). Problema: a enzima P450 fúngica é muito parecida com a hepática humana, gerando fortíssima interação e bloqueio medicamentoso no homem.',
        es: 'Inhibe la enzima fúngica 14-alfa-desmetilasa, unida al citocromo P450 del hongo. Esto impide la conversión de lanosterol a ergosterol, debilitando la membrana fúngica y deteniendo su crecimiento. Posee acción FUNGISTÁTICA (frena el hongo para que la inmunidad lo mate). Problema: la enzima P450 fúngica es muy parecida a la hepática humana, generando fortísima interacción y bloqueo medicamentoso en el hombre.'
      },
      dose: {
        adult: {
          pt: 'Candidemia: Ataque de 800 mg (dia 1), manutenção de 400 a 800 mg/dia. Candidíase Vulvovaginal: 150 mg VO dose ÚNICA.',
          es: 'Candidemia: Ataque de 800 mg (día 1), mantenimiento de 400 a 800 mg/día. Candidiasis Vulvovaginal: 150 mg VO dosis ÚNICA.'
        },
        pediatric: {
          pt: 'Invasiva: 6 a 12 mg/kg/dia.',
          es: 'Invasiva: 6 a 12 mg/kg/día.'
        }
      },
      administration: { pt: ['Possui 90% de biodisponibilidade oral. A via oral atinge os mesmos níveis da venosa (transição precoce é encorajada).'], es: ['Posee 90% de biodisponibilidad oral. La vía oral alcanza los mismos niveles que la venosa (transición precoz es alentada).'] },
      renalAdjustment: { required: true, message: { pt: 'Altamente excretado inalterado na urina (ótimo para ITU por candida). Se ClCr < 50 mL/min, reduzir a dose de manutenção pela METADE (50%).', es: 'Altamente excretado inalterado en la orina (ideal para ITU por candida). Si ClCr < 50 mL/min, reducir la dosis de mantenimiento a la MITAD (50%).' } },
      hepaticAdjustment: { required: true, message: { pt: 'Hepatotóxico. Monitorar transaminases, interromper se lesão aguda.', es: 'Hepatotóxico. Monitorizar transaminasas, interrumpir si hay lesión aguda.' } },
      commonAdverseEffects: { pt: ['Cefaleia', 'Náusea e dor abdominal', 'Aumento assintomático das enzimas hepáticas'], es: ['Cefalea', 'Náusea y dolor abdominal', 'Aumento asintomático de las enzimas hepáticas'] },
      dangerousAdverseEffects: { pt: ['Prolongamento letal do intervalo QT (Torsades de Pointes)', 'Necrose hepática tóxica', 'Síndrome de Stevens-Johnson'], es: ['Prolongación letal del intervalo QT (Torsades de Pointes)', 'Necrosis hepática tóxica', 'Síndrome de Stevens-Johnson'] },
      contraindications: {
        absolute: { pt: ['Gravidez (no 1º trimestre, doses >150mg são altamente teratogênicas, causando malformações craniofaciais)', 'Síndrome do QT Longo congênito'], es: ['Embarazo (en el 1º trimestre, dosis >150mg son altamente teratogénicas, causando malformaciones craneofaciales)', 'Síndrome del QT Largo congénito'] },
        relative: { pt: ['Pacientes em uso de dezenas de drogas dependentes de CYP3A4 (ex: psiquiatria, transplantes)'], es: ['Pacientes en uso de decenas de drogas dependientes del CYP3A4 (ej: psiquiatría, trasplantes)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O Fluconazol NÃO COBRE espécies resistentes de candida (Candida krusei e Candida glabrata). Em UTIs modernas, Candida glabrata é muito comum. Usar Fluconazol empiricamente em um paciente séptico chocado na UTI é erro médico: use Equinocandinas.', es: 'El Fluconazol NO CUBRE especies resistentes de candida (Candida krusei y Candida glabrata). En UCIs modernas, Candida glabrata es muy común. Usar Fluconazol empíricamente en un paciente séptico chocado en la UCI es error médico: use Equinocandinas.' }
      }
    },

/* ── ITRACONAZOL ────────────────────────────────────────────────────── */
    "itraconazol": {
      name: { pt: 'Itraconazol', es: 'Itraconazol' },
      category: 'infectologia',
      class: { pt: 'Antifúngico Triazólico de 1ª Geração', es: 'Antifúngico Triazólico de 1ª Generación' },
      indications: {
        pt: ['Doenças endêmicas profundas (Paracoccidioidomicose, Histoplasmose, Esporotricose)', 'Onicomicose severa', 'Aspergilose invasiva (terapia de segunda linha / manutenção)'],
        es: ['Enfermedades endémicas profundas (Paracoccidioidomicosis, Histoplasmosis, Esporotricosis)', 'Onicomicosis severa', 'Aspergilosis invasiva (terapia de segunda línea / mantenimiento)']
      },
      commercialNames: { br: ['Sporanox', 'Itrafung'], ar: ['Sporanox'] },
      presentation: { pt: ['Cápsulas duras 100 mg', 'Solução oral 10 mg/mL'], es: ['Cápsulas duras 100 mg', 'Solución oral 10 mg/mL'] },
      mechanism: {
        pt: 'Mecanismo idêntico ao Fluconazol, porém sua molécula é gigantescamente lipofílica (ama gordura e tecidos com queratina). Ele se concentra na pele, unhas e tecidos pulmonares profundos de forma avassaladora, mas possui penetração NULA no líquor (NÃO serve para meningites). É um potente inibidor do citocromo CYP3A4.',
        es: 'Mecanismo idéntico al Fluconazol, pero su molécula es gigantescamente lipofílica (ama la grasa y tejidos con queratina). Se concentra en la piel, uñas y tejidos pulmonares profundos de forma abrumadora, pero posee penetración NULA en el líquido cefalorraquídeo (NO sirve para meningitis). Es un potente inhibidor del citocromo CYP3A4.'
      },
      dose: {
        adult: {
          pt: 'Micoses endêmicas graves: 200 mg VO a cada 8h por 3 dias (Ataque), seguido de 200 mg VO 1 a 2x/dia (Manutenção crônica por até 1 ano).',
          es: 'Micosis endémicas graves: 200 mg VO cada 8h por 3 días (Ataque), seguido de 200 mg VO 1 a 2 veces/día (Mantenimiento crónico por hasta 1 año).'
        },
        pediatric: {
          pt: 'Uso limitado, apenas infecções sistêmicas endêmicas severas (3 a 5 mg/kg/dia).',
          es: 'Uso limitado, solo infecciones sistémicas endémicas severas (3 a 5 mg/kg/día).'
        }
      },
      administration: { pt: ['MUITO IMPORTANTE: As CÁPSULAS exigem estômago cheio e ácido (tomar imediatamente APÓS refeição copiosa). A SOLUÇÃO ORAL exige estômago VAZIO e limpo (tomar em jejum). Inverter a regra causa falha terapêutica por má absorção.'], es: ['MUY IMPORTANTE: Las CÁPSULAS exigen estómago lleno y ácido (tomar inmediatamente DESPUÉS de comida copiosa). La SOLUCIÓN ORAL exige estómago VACÍO y limpio (tomar en ayunas). Invertir la regla causa fallo terapéutico por mala absorción.'] },
      renalAdjustment: { required: false, message: { pt: 'Evitar forma IV (que contém ciclodextrina) em ClCr < 30. A forma oral não requer ajuste renal.', es: 'Evitar forma IV (que contiene ciclodextrina) en ClCr < 30. La forma oral no requiere ajuste renal.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Extensamente metabolizado pelo fígado. Usar com muita cautela e reduzir dose em cirróticos.', es: 'Extensamente metabolizado por el hígado. Usar con mucha precaución y reducir dosis en cirróticos.' } },
      commonAdverseEffects: { pt: ['Desconforto gástrico severo e náuseas', 'Rash cutâneo', 'Edema periférico (inchaço das pernas)'], es: ['Molestia gástrica severa y náuseas', 'Rash cutáneo', 'Edema periférico (hinchazón de las piernas)'] },
      dangerousAdverseEffects: { pt: ['Insuficiência Cardíaca Congestiva nova ou agudizada (Inotropismo negativo documentado)', 'Hepatotoxicidade fatal', 'Neuropatia periférica crônica'], es: ['Insuficiencia Cardíaca Congestiva nueva o agudizada (Inotropismo negativo documentado)', 'Hepatotoxicidad fatal', 'Neuropatía periférica crónica'] },
      contraindications: {
        absolute: { pt: ['Pacientes com Disfunção Ventricular Esquerda (Fração de ejeção baixa) ou ICC ativa', 'Uso com sinvastatina, lovastatina, ergotamina ou midazolam oral'], es: ['Pacientes con Disfunción Ventricular Izquierda (Fracción de eyección baja) o ICC activa', 'Uso con simvastatina, lovastatina, ergotamina o midazolam oral'] },
        relative: { pt: ['Pacientes em uso de Inibidores de Bomba de Prótons (Omeprazol)'], es: ['Pacientes en uso de Inhibidores de Bomba de Protones (Omeprazol)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'BOXED WARNING (FDA): O Itraconazol tem efeito inotrópico negativo direto no miocárdio. Se o paciente (ex: tratamento de fungo na unha) começar a ter falta de ar, inchaço na perna e cansaço, ele está desenvolvendo Insuficiência Cardíaca induzida pela droga. Parar imediatamente.', es: 'BOXED WARNING (FDA): El Itraconazol tiene efecto inotrópico negativo directo en el miocardio. Si el paciente (ej: tratamiento de hongo en la uña) empieza a tener falta de aire, hinchazón en la pierna y cansancio, está desarrollando Insuficiencia Cardíaca inducida por la droga. Parar inmediatamente.' }
      }
    },

/* ── VORICONAZOL ────────────────────────────────────────────────────── */
    "voriconazol": {
      name: { pt: 'Voriconazol', es: 'Voriconazol' },
      category: 'infectologia',
      class: { pt: 'Antifúngico Triazólico de 2ª Geração (Amplo Espectro)', es: 'Antifúngico Triazólico de 2ª Generación (Amplio Espectro)' },
      indications: {
        pt: ['Aspergilose Invasiva (Tratamento Ouro de Primeira Linha)', 'Candidemia severa por espécies resistentes ao Fluconazol (C. krusei)', 'Scedosporiose e Fusariose'],
        es: ['Aspergilosis Invasiva (Tratamiento Oro de Primera Línea)', 'Candidemia severa por especies resistentes al Fluconazol (C. krusei)', 'Scedosporiosis y Fusariosis']
      },
      commercialNames: { br: ['Vfend'], ar: ['Vfend'] },
      presentation: { pt: ['Frasco-ampola liofilizado 200 mg', 'Comprimidos 50 mg e 200 mg'], es: ['Vial liofilizado 200 mg', 'Comprimidos 50 mg y 200 mg'] },
      mechanism: {
        pt: 'Mecanismo azólico padrão (inibe desmetilase do ergosterol), mas sua estrutura modificada confere afinidade gigantesca pela enzima fúngica, destruindo moldes (mofos) como o Aspergillus de forma avassaladora e até matando espécies de Candida antes intocáveis. Cruza a barreira hematoencefálica com perfeição, cobrindo o cérebro.',
        es: 'Mecanismo azólico estándar (inhibe desmetilasa del ergosterol), pero su estructura modificada confiere afinidad gigantesca por la enzima fúngica, destruyendo mohos como el Aspergillus de forma abrumadora e incluso matando especies de Candida antes intocables. Cruza la barrera hematoencefálica con perfección, cubriendo el cerebro.'
      },
      dose: {
        adult: {
          pt: 'Ataque IV: 6 mg/kg a cada 12 horas no primeiro dia. Manutenção IV: 4 mg/kg a cada 12 horas. Manutenção VO: 200 a 300 mg a cada 12 horas.',
          es: 'Ataque IV: 6 mg/kg cada 12 horas en el primer día. Mantenimiento IV: 4 mg/kg cada 12 horas. Mantenimiento VO: 200 a 300 mg cada 12 horas.'
        },
        pediatric: {
          pt: 'Necessitam de doses maiores! Crianças clareiam voriconazol muito rápido. Ataque IV de 9 mg/kg 12/12h, manutenção de 8 mg/kg 12/12h.',
          es: '¡Necesitan dosis mayores! Los niños aclaran voriconazol muy rápido. Ataque IV de 9 mg/kg 12/12h, mantenimiento de 8 mg/kg 12/12h.'
        }
      },
      administration: { pt: ['Via oral: Tomar 1 hora antes ou 1 hora depois das refeições (em jejum).', 'Via IV: Infusão contínua em 1 a 2 horas (não fazer bolus rápido).'], es: ['Vía oral: Tomar 1 hora antes o 1 hora después de las comidas (en ayunas).', 'Vía IV: Infusión continua en 1 a 2 horas (no hacer bolo rápido).'] },
      renalAdjustment: { required: true, message: { pt: 'A droga em si não afeta os rins, mas a AMPOLA INTRAVENOSA contém SBECD (ciclodextrina) que acumula e intoxica os rins. Se ClCr < 50 mL/min, SUSPENDER VIA IV e usar via oral.', es: 'La droga en sí no afecta los riñones, pero la AMPOLLA INTRAVENOSA contiene SBECD (ciclodextrina) que acumula e intoxica los riñones. Si ClCr < 50 mL/min, SUSPENDER VÍA IV y usar vía oral.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Em cirrose leve a moderada (Child A e B): MANTER dose de ataque, mas REDUZIR a dose de manutenção pela metade (50%).', es: 'En cirrosis leve a moderada (Child A y B): MANTENER dosis de ataque, pero REDUCIR la dosis de mantenimiento a la mitad (50%).' } },
      commonAdverseEffects: { pt: ['Distúrbios Visuais TRANSITÓRIOS em 30% dos pacientes (Fotofobia profunda, ver tudo com um halo borrado, percepção de cores alterada)', 'Erupção cutânea e Febre', 'Hepatotoxicidade'], es: ['Disturbios Visuales TRANSITORIOS en 30% de los pacientes (Fotofobia profunda, ver todo con un halo borroso, percepción de colores alterada)', 'Erupción cutánea y Fiebre', 'Hepatotoxicidad'] },
      dangerousAdverseEffects: { pt: ['Fototoxicidade irreversível crônica e Câncer de Pele (Espinocelular e Melanoma em exposição solar no uso longo)', 'Alucinações e Delirium', 'Prolongamento fatal do QT'], es: ['Fototoxicidad irreversible crónica y Cáncer de Piel (Espinocelular y Melanoma en exposición solar en el uso largo)', 'Alucinaciones y Delirium', 'Prolongación fatal del QT'] },
      contraindications: {
        absolute: { pt: ['Uso associado de anticonvulsivantes potentes (Carbamazepina), Rifampicina e Ritonavir', 'Co-administração com alcaloides do ergot ou sirolimo'], es: ['Uso asociado de anticonvulsivos potentes (Carbamazepina), Rifampicina y Ritonavir', 'Coadministración con alcaloides del ergot o sirolimus'] },
        relative: { pt: ['Gestação (teratogênico)'], es: ['Embarazo (teratogénico)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'CUIDADO DERMATOLÓGICO: O paciente que usa Voriconazol para aspergilose por muitos meses torna-se altamente suscetível aos raios UV. A exposição solar leve causa queimaduras de 3º grau e envelhecimento celular, precipitando câncer de pele rapidamente. Uso de protetor solar denso é obrigatório.', es: 'CUIDADO DERMATOLÓGICO: El paciente que usa Voriconazol para aspergilosis por muchos meses se vuelve altamente susceptible a los rayos UV. La exposición solar leve causa quemaduras de 3º grado y envejecimiento celular, precipitando cáncer de piel rápidamente. Uso de protector solar denso es obligatorio.' }
      }
    }

  }); /* fim Object.assign INFECTOLOGIA_DRUGS_DB — Grupo 2 (caspofungina · micafungina · fluconazol · itraconazol · voriconazol — BUILD 338 Lote 2) */

})();

/* ── GRUPO 3: Antifúngicos Avançados + Antivirais Herpéticos — BUILD 340 Lote 3 ── */
(function () {
  'use strict';
  if (typeof window.INFECTOLOGIA_DRUGS_DB !== 'object' || window.INFECTOLOGIA_DRUGS_DB === null) return;

  Object.assign(window.INFECTOLOGIA_DRUGS_DB, {

    /* ── POSACONAZOL ────────────────────────────────────────────────────── */
    "posaconazol": {
      name: { pt: 'Posaconazol', es: 'Posaconazol' },
      category: 'infectologia',
      class: { pt: 'Antifúngico Triazólico de 2ª Geração (Largo Espectro)', es: 'Antifúngico Triazólico de 2ª Generación (Amplio Espectro)' },
      indications: {
        pt: ['Profilaxia de infecções fúngicas invasivas em pacientes de altíssimo risco (Leucemia Mieloide Aguda, GVHD crônico)', 'Tratamento de resgate da Mucormicose e Aspergilose invasiva', 'Candidíase orofaríngea severa'],
        es: ['Profilaxis de infecciones fúngicas invasivas en pacientes de altísimo riesgo (Leucemia Mieloide Aguda, GVHD crónico)', 'Tratamiento de rescate de la Mucormicosis y Aspergilosis invasiva', 'Candidiasis orofaríngea severa']
      },
      commercialNames: { br: ['Noxafil'], ar: ['Noxafil'] },
      presentation: { pt: ['Suspensão oral 40 mg/mL', 'Comprimidos de Liberação Retardada (GR) 100 mg', 'Frasco-ampola IV 300 mg'], es: ['Suspensión oral 40 mg/mL', 'Comprimidos de Liberación Retardada (GR) 100 mg', 'Vial IV 300 mg'] },
      mechanism: {
        pt: 'Mecanismo azólico (inibe 14-alfa-desmetilase). Extremamente lipofílico e potente. Exerce ação contra fungos muito resistentes, sendo uma das raras opções de backup contra os temidos Mucorales (fungos negros). Ao contrário de outros azólicos, ele é metabolizado majoritariamente por glicuronidação (fase 2) e pouco pelo citocromo P450, embora seja um forte inibidor do CYP3A4.',
        es: 'Mecanismo azólico (inhibe 14-alfa-desmetilasa). Extremadamente lipofílico y potente. Ejerce acción contra hongos muy resistentes, siendo una de las raras opciones de backup contra los temidos Mucorales (hongos negros). A diferencia de otros azólicos, es metabolizado mayoritariamente por glucuronidación (fase 2) y poco por el citocromo P450, aunque sí es un fuerte inhibidor del CYP3A4.'
      },
      dose: {
        adult: {
          pt: 'Comprimidos: 300 mg VO 12/12h (Ataque dia 1), depois 300 mg VO 1x/dia. Suspensão (Profilaxia): 200 mg VO 3x/dia.',
          es: 'Comprimidos: 300 mg VO 12/12h (Ataque día 1), luego 300 mg VO 1 vez/día. Suspensión (Profilaxis): 200 mg VO 3 veces/día.'
        },
        pediatric: {
          pt: 'Uso > 13 anos. Doses idênticas ao adulto. < 13 anos: Uso restrito compassivo.',
          es: 'Uso > 13 años. Dosis idénticas al adulto. < 13 años: Uso restringido compasivo.'
        }
      },
      administration: { pt: ['A SUSPENSÃO ORAL exige administração com refeição extremamente gordurosa (lipidada) para ser absorvida.', 'Os COMPRIMIDOS têm tecnologia de absorção estendida e NÃO dependem de gordura ou pH gástrico (devem ser engolidos inteiros).'], es: ['La SUSPENSIÓN ORAL exige administración con comida extremadamente grasosa (lipidada) para ser absorbida.', 'Los COMPRIMIDOS tienen tecnología de absorción extendida y NO dependen de grasa o pH gástrico (deben ser tragados enteros).'] },
      renalAdjustment: { required: true, message: { pt: 'Evitar a formulação IV em ClCr < 50 mL/min (contém excipiente nefrotóxico SBECD, assim como o Voriconazol). Via oral segura.', es: 'Evitar la formulación IV en ClCr < 50 mL/min (contiene excipiente nefrotóxico SBECD, así como el Voriconazol). Vía oral segura.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Usar com precaução na insuficiência hepática severa (risco de acúmulo).', es: 'Usar con precaución en la insuficiencia hepática severa (riesgo de acumulación).' } },
      commonAdverseEffects: { pt: ['Diarreia e náuseas', 'Febre', 'Hipocalemia'], es: ['Diarrea y náuseas', 'Fiebre', 'Hipopotasemia'] },
      dangerousAdverseEffects: { pt: ['Prolongamento do intervalo QT (embora menos intenso que voriconazol)', 'Hepatotoxicidade'], es: ['Prolongación del intervalo QT (aunque menos intenso que voriconazol)', 'Hepatotoxicidad'] },
      contraindications: {
        absolute: { pt: ['Uso concomitante com substratos do CYP3A4 de margem estreita (Pimozida, Quinidina, Alcaloides do ergot, Halofantrina)'], es: ['Uso concomitante con sustratos del CYP3A4 de margen estrecho (Pimozida, Quinidina, Alcaloides del ergot, Halofantrina)'] },
        relative: { pt: ['Arritmias cardíacas prévias com QT longo'], es: ['Arritmias cardíacas previas con QT largo'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'ERRO DE PRESCRIÇÃO COMUM: A dose da suspensão oral NÃO é intercambiável miligrama a miligrama com a dose do comprimido. Trocar as formulações sem recalcular a dose gera falha terapêutica ou toxicidade profunda.', es: 'ERROR DE PRESCRIPCIÓN COMÚN: La dosis de la suspensión oral NO es intercambiable miligramo a miligramo con la dosis del comprimido. Cambiar las formulaciones sin recalcular la dosis genera falla terapéutica o toxicidad profunda.' }
      }
    },

    /* ── ISAVUCONAZOL ───────────────────────────────────────────────────── */
    "isavuconazol": {
      name: { pt: 'Isavuconazol', es: 'Isavuconazol' },
      category: 'infectologia',
      class: { pt: 'Antifúngico Triazólico de Amplo Espectro', es: 'Antifúngico Triazólico de Amplio Espectro' },
      indications: {
        pt: ['Aspergilose invasiva (não inferior ao voriconazol, com menor toxicidade)', 'Mucormicose (em pacientes onde a anfotericina B é inadequada)'],
        es: ['Aspergilosis invasiva (no inferior al voriconazol, con menor toxicidad)', 'Mucormicosis (en pacientes donde la anfotericina B es inadecuada)']
      },
      commercialNames: { br: ['Cresemba'], ar: ['Cresemba'] },
      presentation: { pt: ['Frasco-ampola IV 200 mg', 'Cápsulas duras 200 mg'], es: ['Vial IV 200 mg', 'Cápsulas duras 200 mg'] },
      mechanism: {
        pt: 'Pró-fármaco (Sulfato de Isavuconazônio) que é clivado rapidamente pelas esterases do sangue na molécula ativa Isavuconazol. Inibe a 14-alfa-desmetilase fúngica. Grande diferencial da classe: ao contrário de todos os outros azólicos que aumentam o intervalo QT, o Isavuconazol possui um efeito de encurtar o intervalo QT.',
        es: 'Profármaco (Sulfato de Isavuconazonio) que es escindido rápidamente por las esterasas de la sangre en la molécula activa Isavuconazol. Inhibe la 14-alfa-desmetilasa fúngica. Gran diferencial de la clase: a diferencia de todos los otros azólicos que aumentan el intervalo QT, el Isavuconazol posee un efecto de acortar el intervalo QT.'
      },
      dose: {
        adult: {
          pt: 'Ataque: 200 mg IV ou VO a cada 8 horas por 6 doses (2 dias). Manutenção: 200 mg IV ou VO 1 vez ao dia (a partir do dia 3).',
          es: 'Ataque: 200 mg IV o VO cada 8 horas por 6 dosis (2 días). Mantenimiento: 200 mg IV o VO 1 vez al día (a partir del día 3).'
        },
        pediatric: {
          pt: 'Uso compassivo ou fora de bula na pediatria severa.',
          es: 'Uso compasivo o fuera de prospecto en la pediatría severa.'
        }
      },
      administration: { pt: ['Via IV: Não contém o excipiente SBECD (pode ser usado livremente em falência renal). Requer filtro em linha de 0,2 a 1,2 micra para infusão.', 'Cápsulas podem ser tomadas com ou sem alimentos.'], es: ['Vía IV: No contiene el excipiente SBECD (puede usarse libremente en falla renal). Requiere filtro en línea de 0,2 a 1,2 micras para infusión.', 'Cápsulas pueden ser tomadas con o sin alimentos.'] },
      renalAdjustment: { required: false, message: { pt: 'Totalmente isento de ajuste renal (tanto VO quanto IV).', es: 'Totalmente exento de ajuste renal (tanto VO como IV).' } },
      hepaticAdjustment: { required: true, message: { pt: 'Não testado em cirrose Child-Pugh C (evitar). Em Child A/B, monitorar transaminases.', es: 'No probado en cirrosis Child-Pugh C (evitar). En Child A/B, monitorizar transaminasas.' } },
      commonAdverseEffects: { pt: ['Náusea e Vômitos', 'Hipocalemia', 'Dispneia'], es: ['Náusea y Vómitos', 'Hipopotasemia', 'Disnea'] },
      dangerousAdverseEffects: { pt: ['Hepatotoxicidade (elevação de transaminases)', 'Encurtamento sintomático do QT (raro, mas único da droga)'], es: ['Hepatotoxicidad (elevación de transaminasas)', 'Acortamiento sintomático del QT (raro, pero único de la droga)'] },
      contraindications: {
        absolute: { pt: ['Síndrome do QT Curto familiar', 'Uso com indutores potentes do CYP3A4 (ex: Rifampicina, Fenitoína)'], es: ['Síndrome del QT Corto familiar', 'Uso con inductores potentes del CYP3A4 (ej: Rifampicina, Fenitoína)'] },
        relative: { pt: ['Hepatopatia grave'], es: ['Hepatopatía grave'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'É a escolha mais limpa e moderna para tratar aspergilose invasiva no doente de UTI com falência renal aguda, superando o Voriconazol por não gerar toxicidade renal pela ampola nem exigir monitoramento de nível sérico rígido.', es: 'Es la elección más limpia y moderna para tratar aspergilosis invasiva en el enfermo de UCI con falla renal aguda, superando al Voriconazol por no generar toxicidad renal por la ampolla ni exigir monitorización de nivel sérico rígida.' }
      }
    },

    /* ── NISTATINA ──────────────────────────────────────────────────────── */
    "nistatina": {
      name: { pt: 'Nistatina', es: 'Nistatina' },
      category: 'infectologia',
      class: { pt: 'Antifúngico Poliênico (Ação Tópica/Gastrointestinal)', es: 'Antifúngico Poliénico (Acción Tópica/Gastrointestinal)' },
      indications: {
        pt: ['Candidíase oral (sapinho)', 'Candidíase intestinal', 'Candidíase vulvovaginal e intertrigo moniliásico (assaduras)'],
        es: ['Candidiasis oral (muguet)', 'Candidiasis intestinal', 'Candidiasis vulvovaginal e intertrigo moniliásico (rozaduras)']
      },
      commercialNames: { br: ['Micostatin'], ar: ['Micostatin'] },
      presentation: { pt: ['Suspensão oral 100.000 UI/mL', 'Creme/Pomada ginecológica 100.000 UI/g'], es: ['Suspensión oral 100.000 UI/mL', 'Crema/Pomada ginecológica 100.000 UI/g'] },
      mechanism: {
        pt: 'Mecanismo idêntico ao da Anfotericina B (liga-se ao ergosterol e perfura a membrana do fungo). Porém, é tóxica se atingir a corrente sanguínea, por isso seu uso endovenoso é proibido. Não é absorvida pela pele, nem pelas mucosas e tem absorção zero no trato gastrointestinal, exercendo apenas efeito local.',
        es: 'Mecanismo idéntico al de la Anfotericina B (se une al ergosterol y perfora la membrana del hongo). Sin embargo, es tóxica si alcanza el torrente sanguíneo, por eso su uso endovenoso está prohibido. No es absorbida por la piel, ni por las mucosas y tiene absorción cero en el tracto gastrointestinal, ejerciendo solo efecto local.'
      },
      dose: {
        adult: {
          pt: 'Suspensão: 4 a 6 mL (400.000 a 600.000 UI) bochechar por longo tempo e engolir, 4x ao dia.',
          es: 'Suspensión: 4 a 6 mL (400.000 a 600.000 UI) enjuagar por largo tiempo y tragar, 4 veces al día.'
        },
        pediatric: {
          pt: 'Lactentes: 1 a 2 mL (100.000 a 200.000 UI) aplicados em cada lado da boca, 4x ao dia.',
          es: 'Lactantes: 1 a 2 mL (100.000 a 200.000 UI) aplicados en cada lado de la boca, 4 veces al día.'
        }
      },
      administration: { pt: ['Na candidíase oral, o paciente deve reter a suspensão na boca o maior tempo possível antes de engolir.', 'Uso exclusivamente TÓPICO ou ORAL (para agir na luz intestinal). NUNCA INJETÁVEL.'], es: ['En la candidiasis oral, el paciente debe retener la suspensión en la boca el mayor tiempo posible antes de tragar.', 'Uso exclusivamente TÓPICO u ORAL (para actuar en la luz intestinal). NUNCA INYECTABLE.'] },
      renalAdjustment: { required: false, message: { pt: 'Não possui absorção sistêmica, portanto não requer ajuste.', es: 'No posee absorción sistémica, por lo tanto no requiere ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Não possui absorção sistêmica.', es: 'No posee absorción sistémica.' } },
      commonAdverseEffects: { pt: ['Gosto amargo desagradável', 'Náusea e diarreia (se engolida em grandes doses)'], es: ['Sabor amargo desagradable', 'Náusea y diarrea (si es tragada en grandes dosis)'] },
      dangerousAdverseEffects: { pt: ['Síndrome de Stevens-Johnson (extremamente raro, por hipersensibilidade alérgica)'], es: ['Síndrome de Stevens-Johnson (extremadamente raro, por hipersensibilidad alérgica)'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade ao produto'], es: ['Hipersensibilidad al producto'] },
        relative: { pt: ['Nenhuma clinicamente relevante.'], es: ['Ninguna clínicamente relevante.'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'Não prescreva Nistatina para Candidíase Sistêmica ou Esofagite Grave. Como ela não é absorvida pelo sangue, não terá nenhum efeito além da garganta. A esofagite exige Fluconazol sistêmico.', es: 'No prescriba Nistatina para Candidiasis Sistémica o Esofagitis Grave. Como no es absorbida por la sangre, no tendrá ningún efecto más allá de la garganta. La esofagitis exige Fluconazol sistémico.' }
      }
    },

    /* ── ACICLOVIR ──────────────────────────────────────────────────────── */
    "aciclovir": {
      name: { pt: 'Aciclovir', es: 'Aciclovir' },
      category: 'infectologia',
      class: { pt: 'Antiviral (Análogo de Nucleosídeo)', es: 'Antiviral (Análogo de Nucleósido)' },
      indications: {
        pt: ['Encefalite Herpética (Uso IV obrigatório)', 'Infecções severas por Herpes Simplex (HSV) 1 e 2', 'Varicela e Herpes Zoster', 'Profilaxia em imunossuprimidos'],
        es: ['Encefalitis Herpética (Uso IV obligatorio)', 'Infecciones severas por Herpes Simplex (HSV) 1 y 2', 'Varicela y Herpes Zóster', 'Profilaxis en inmunosuprimidos']
      },
      commercialNames: { br: ['Zovirax'], ar: ['Zovirax', 'Aciclovir'] },
      presentation: { pt: ['Frasco-ampola IV 250 mg', 'Comprimidos 200 mg, 400 mg', 'Creme 5%'], es: ['Vial IV 250 mg', 'Comprimidos 200 mg, 400 mg', 'Crema 5%'] },
      mechanism: {
        pt: 'Uma falsa peça de DNA. Ao entrar na célula, o aciclovir só é ativado se for fosforilado pela enzima Timidina Quinase VIRAL (ou seja, só vira veneno dentro da célula que tem o vírus do Herpes). Uma vez ativado, incorpora-se ao DNA viral em formação. Como a molécula do aciclovir não tem continuidade química, a DNA polimerase viral não consegue adicionar a próxima base, interrompendo a replicação (terminação de cadeia).',
        es: 'Una falsa pieza de ADN. Al entrar en la célula, el aciclovir solo se activa si es fosforilado por la enzima Timidina Quinasa VIRAL (es decir, solo se vuelve veneno dentro de la célula que tiene el virus del Herpes). Una vez activado, se incorpora al ADN viral en formación. Como la molécula del aciclovir no tiene continuidad química, la ADN polimerasa viral no logra añadir la siguiente base, interrumpiendo la replicación (terminación de cadena).'
      },
      dose: {
        adult: {
          pt: 'Encefalite/Infecção grave: 10 mg/kg IV a cada 8 horas (infusão de 1 hora). Herpes Zoster VO: 800 mg 5x/dia por 7 dias.',
          es: 'Encefalitis/Infección grave: 10 mg/kg IV cada 8 horas (infusión de 1 hora). Herpes Zóster VO: 800 mg 5 veces/día por 7 días.'
        },
        pediatric: {
          pt: 'Encefalite Herpética: 20 mg/kg IV a cada 8 horas (doses agressivas para transpor a barreira hematoencefálica).',
          es: 'Encefalitis Herpética: 20 mg/kg IV cada 8 horas (dosis agresivas para transponer la barrera hematoencefálica).'
        }
      },
      administration: { pt: ['A INFUSÃO IV DEVE SER LENTA (1 a 2 horas).', 'O paciente deve ser vigorosamente hidratado com Soro Fisiológico antes e durante a infusão IV para evitar que a droga cristalize no rim.'], es: ['LA INFUSIÓN IV DEBE SER LENTA (1 a 2 horas).', 'El paciente debe ser vigorosamente hidratado con Suero Fisiológico antes y durante la infusión IV para evitar que la droga se cristalice en el riñón.'] },
      renalAdjustment: { required: true, message: { pt: 'Altamente dependente dos rins. ClCr < 50: aumentar intervalo para 12h. ClCr < 25: intervalo de 24h. ClCr < 10: cortar dose à metade a cada 24h.', es: 'Altamente dependiente de los riñones. ClCr < 50: aumentar el intervalo a 12h. ClCr < 25: intervalo de 24h. ClCr < 10: cortar dosis a la mitad cada 24h.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste clínico.', es: 'Sin necesidad de ajuste clínico.' } },
      commonAdverseEffects: { pt: ['Flebite severa (devido ao pH muito alcalino da ampola)', 'Náusea/Diarreia no uso oral', 'Elevação leve de ureia/creatinina'], es: ['Flebitis severa (debido al pH muy alcalino de la ampolla)', 'Náusea/Diarrea en el uso oral', 'Elevación leve de urea/creatinina'] },
      dangerousAdverseEffects: { pt: ['Nefropatia por Cristais (falência renal aguda obstrutiva se o paciente estiver desidratado e o aciclovir precipitar nos túbulos)', 'Neurotoxicidade aguda (confusão, tremores, coma — ocorre se não for feito o ajuste renal e a droga acumular no sangue)'], es: ['Nefropatía por Cristales (fallo renal agudo obstructivo si el paciente está deshidratado y el aciclovir precipita en los túbulos)', 'Neurotoxicidad aguda (confusión, temblores, coma — ocurre si no se hace el ajuste renal y la droga se acumula en la sangre)'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade conhecida'], es: ['Hipersensibilidad conocida'] },
        relative: { pt: ['Desidratação severa (corrigir antes de infundir a droga IV)'], es: ['Deshidratación severa (corregir antes de infundir la droga IV)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'Atenção na posologia oral: a biodisponibilidade do Aciclovir oral é baixa (apenas 15 a 20%), exigindo prescrições de 5 tomadas por dia (ex: 800 mg a cada 4 horas). Pacientes frequentemente não aderem e o tratamento falha.', es: 'Atención en la posología oral: la biodisponibilidad del Aciclovir oral es baja (solo 15 a 20%), exigiendo prescripciones de 5 tomas por día (ej: 800 mg cada 4 horas). Pacientes frecuentemente no adhieren y el tratamiento falla.' }
      }
    },

    /* ── VALACICLOVIR ───────────────────────────────────────────────────── */
    "valaciclovir": {
      name: { pt: 'Valaciclovir', es: 'Valaciclovir' },
      category: 'infectologia',
      class: { pt: 'Antiviral (Pró-fármaco do Aciclovir)', es: 'Antiviral (Profármaco del Aciclovir)' },
      indications: {
        pt: ['Herpes Zoster (Cobreiro)', 'Herpes Genital primário ou recorrente', 'Profilaxia de Citomegalovírus (CMV) pós-transplante'],
        es: ['Herpes Zóster (Culebrilla)', 'Herpes Genital primario o recurrente', 'Profilaxis de Citomegalovirus (CMV) post-trasplante']
      },
      commercialNames: { br: ['Valtrex', 'Herpesil'], ar: ['Valtrex'] },
      presentation: { pt: ['Comprimidos 500 mg, 1000 mg'], es: ['Comprimidos 500 mg, 1000 mg'] },
      mechanism: {
        pt: 'Para resolver o problema da péssima absorção do aciclovir, a indústria anexou um aminoácido (valina) à molécula. O Valaciclovir é ativamente transportado pelo intestino e, ao chegar no fígado, enzimas removem a valina, liberando aciclovir puro na corrente sanguínea em altas concentrações. Atinge níveis plasmáticos comparáveis aos do Aciclovir Endovenoso.',
        es: 'Para resolver el problema de la pésima absorción del aciclovir, la industria le anexó un aminoácido (valina) a la molécula. El Valaciclovir es transportado activamente por el intestino y, al llegar al hígado, enzimas remueven la valina, liberando aciclovir puro en el torrente sanguíneo en altas concentraciones. Alcanza niveles plasmáticos comparables a los del Aciclovir Endovenoso.'
      },
      dose: {
        adult: {
          pt: 'Herpes Zoster: 1000 mg VO a cada 8 horas (3x ao dia) por 7 dias. Herpes Genital (Surto): 500 mg VO 12/12h.',
          es: 'Herpes Zóster: 1000 mg VO cada 8 horas (3 veces al día) por 7 días. Herpes Genital (Brote): 500 mg VO 12/12h.'
        },
        pediatric: {
          pt: 'Uso não rotineiro < 12 anos. Exceção para Herpes Zoster em imunocomprometidos.',
          es: 'Uso no rutinario < 12 años. Excepción para Herpes Zóster en inmunocomprometidos.'
        }
      },
      administration: { pt: ['Administração puramente ORAL.', 'O paciente deve ser encorajado a beber muita água para garantir hidratação renal.'], es: ['Administración puramente ORAL.', 'El paciente debe ser alentado a beber mucha agua para garantizar hidratación renal.'] },
      renalAdjustment: { required: true, message: { pt: 'Altamente retido na insuficiência renal. ClCr < 50: 1000 mg a cada 12h. ClCr < 30: 1000 mg a cada 24h. Risco de coma se não ajustado.', es: 'Altamente retenido en la insuficiencia renal. ClCr < 50: 1000 mg cada 12h. ClCr < 30: 1000 mg cada 24h. Riesgo de coma si no se ajusta.' } },
      hepaticAdjustment: { required: false, message: { pt: 'A conversão para aciclovir ocorre sem problemas na disfunção hepática leve/moderada.', es: 'La conversión a aciclovir ocurre sin problemas en la disfunción hepática leve/moderada.' } },
      commonAdverseEffects: { pt: ['Cefaleia', 'Náuseas e dores abdominais', 'Tontura'], es: ['Cefalea', 'Náuseas y dolores abdominales', 'Mareo'] },
      dangerousAdverseEffects: { pt: ['Síndrome Hemolítico-Urêmica / Púrpura Trombocitopênica Trombótica (SHU/PTT) em pacientes gravemente imunossuprimidos (ex: HIV avançado)', 'Neurotoxicidade aguda em idosos que não ajustam a dose renal'], es: ['Síndrome Hemolítico-Urémico / Púrpura Trombocitopénica Trombótica (SHU/PTT) en pacientes gravemente inmunosuprimidos (ej: VIH avanzado)', 'Neurotoxicidad aguda en ancianos que no ajustan la dosis renal'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade ao valaciclovir ou aciclovir'], es: ['Hipersensibilidad al valaciclovir o aciclovir'] },
        relative: { pt: ['Desidratação não corrigida', 'Doença renal crônica terminal não dialítica'], es: ['Deshidratación no corregida', 'Enfermedad renal crónica terminal no dialítica'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'Garante adesão infinitamente superior à do Aciclovir oral (3 comprimidos/dia contra 5 comprimidos/dia), sendo o tratamento de escolha para o Herpes Zoster em ambulatório.', es: 'Garantiza adherencia infinitamente superior a la del Aciclovir oral (3 comprimidos/día frente a 5 comprimidos/día), siendo el tratamiento de elección para el Herpes Zóster en ambulatorio.' }
      }
    }

  }); /* fim Object.assign INFECTOLOGIA_DRUGS_DB — Grupo 3 (posaconazol · isavuconazol · nistatina · aciclovir · valaciclovir — BUILD 340 Lote 3) */

})();

/* ── GRUPO 4: Antivirais Sistêmicos Complexos — BUILD 342 Lote 4 ── */
(function () {
  'use strict';
  if (typeof window.INFECTOLOGIA_DRUGS_DB !== 'object' || window.INFECTOLOGIA_DRUGS_DB === null) return;

  Object.assign(window.INFECTOLOGIA_DRUGS_DB, {

    /* ── GANCICLOVIR ────────────────────────────────────────────────────── */
    "ganciclovir": {
      name: { pt: 'Ganciclovir', es: 'Ganciclovir' },
      category: 'infectologia',
      class: { pt: 'Antiviral (Análogo de Nucleosídeo)', es: 'Antiviral (Análogo de Nucleósido)' },
      indications: {
        pt: ['Tratamento da Retinite por Citomegalovírus (CMV) em pacientes com AIDS', 'Prevenção e Tratamento de Doença por CMV em transplantados de órgãos sólidos e medula óssea'],
        es: ['Tratamiento de la Retinitis por Citomegalovirus (CMV) en pacientes con SIDA', 'Prevención y Tratamiento de Enfermedad por CMV en trasplantados de órganos sólidos y médula ósea']
      },
      commercialNames: { br: ['Cymevene'], ar: ['Cymevene'] },
      presentation: { pt: ['Frasco-ampola liofilizado 500 mg'], es: ['Vial liofilizado 500 mg'] },
      mechanism: {
        pt: 'Pró-fármaco ativado inicialmente pela enzima quinase viral UL97 do Citomegalovírus (CMV). Uma vez trifosforilado, compete com o nucleotídeo natural (GTP) e se incorpora ao DNA do vírus. Ao entrar na fita, paralisa a DNA polimerase viral e impede a replicação do CMV. É de 10 a 100 vezes mais potente contra o CMV do que o Aciclovir.',
        es: 'Profármaco activado inicialmente por la enzima quinasa viral UL97 del Citomegalovirus (CMV). Una vez trifosforilado, compite con el nucleótido natural (GTP) y se incorpora al ADN del virus. Al entrar en la cadena, paraliza la ADN polimerasa viral e impide la replicación del CMV. Es de 10 a 100 veces más potente contra el CMV que el Aciclovir.'
      },
      dose: {
        adult: {
          pt: 'Indução (Tratamento ativo): 5 mg/kg IV a cada 12 horas por 14 a 21 dias. Manutenção/Profilaxia: 5 mg/kg IV 1x ao dia (frequentemente por meses).',
          es: 'Inducción (Tratamiento activo): 5 mg/kg IV cada 12 horas por 14 a 21 días. Mantenimiento/Profilaxis: 5 mg/kg IV 1 vez al día (frecuentemente por meses).'
        },
        pediatric: {
          pt: '5 mg/kg IV a cada 12 horas.',
          es: '5 mg/kg IV cada 12 horas.'
        }
      },
      administration: { pt: ['Administrar em infusão IV lenta de 1 hora.', 'O pó liofilizado é extremamente tóxico e irritante. O preparo exige paramentação rigorosa (risco carcinogênico e teratogênico na manipulação). Se extravasar na veia, causa necrose.'], es: ['Administrar en infusión IV lenta de 1 hora.', 'El polvo liofilizado es extremadamente tóxico e irritante. La preparación exige indumentaria rigurosa (riesgo carcinogénico y teratogénico en la manipulación). Si se extravasa en la vena, causa necrosis.'] },
      renalAdjustment: { required: true, message: { pt: 'Altamente dependente do rim. ClCr 25-49: 2,5 mg/kg 12/12h. ClCr 10-24: 2,5 mg/kg 1x/dia. ClCr < 10: 1,25 mg/kg 1x/dia.', es: 'Altamente dependiente del riñón. ClCr 25-49: 2,5 mg/kg 12/12h. ClCr 10-24: 2,5 mg/kg 1 vez/día. ClCr < 10: 1,25 mg/kg 1 vez/día.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste clínico.', es: 'Sin necesidad de ajuste clínico.' } },
      commonAdverseEffects: { pt: ['Flebite', 'Febre', 'Aumento de creatinina'], es: ['Flebitis', 'Fiebre', 'Aumento de creatinina'] },
      dangerousAdverseEffects: { pt: ['Supressão massiva da medula óssea (Neutropenia grave, Anemia, Trombocitopenia) ocorrendo em até 40% dos pacientes', 'Teratogenicidade e Infertilidade (Azoospermia)'], es: ['Supresión masiva de la médula ósea (Neutropenia grave, Anemia, Trombocitopenia) ocurriendo en hasta 40% de los pacientes', 'Teratogenicidad e Infertilidad (Azoospermia)'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade', 'Contagem de Neutrófilos < 500/mm³ ou Plaquetas < 25.000/mm³ (a droga esmagará ainda mais a medula)'], es: ['Hipersensibilidad', 'Recuento de Neutrófilos < 500/mm³ o Plaquetas < 25.000/mm³ (la droga aplastará aún más la médula)'] },
        relative: { pt: ['Uso associado de Zidovudina (AZT) ou Imipenem'], es: ['Uso asociado de Zidovudina (AZT) o Imipenem'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'ALERTA HEMATOLÓGICO: A neutropenia induzida pelo Ganciclovir muitas vezes obriga o uso conjunto de Filgrastim (G-CSF) na UTI ou a interrupção da terapia, pois deixa o paciente severamente vulnerável a sepses bacterianas superpostas.', es: 'ALERTA HEMATOLÓGICA: La neutropenia inducida por el Ganciclovir muchas veces obliga al uso conjunto de Filgrastim (G-CSF) en la UCI o a la interrupción de la terapia, pues deja al paciente severamente vulnerable a sepsis bacterianas superpuestas.' }
      }
    },

    /* ── VALGANCICLOVIR ─────────────────────────────────────────────────── */
    "valganciclovir": {
      name: { pt: 'Valganciclovir', es: 'Valganciclovir' },
      category: 'infectologia',
      class: { pt: 'Antiviral (Pró-fármaco do Ganciclovir)', es: 'Antiviral (Profármaco del Ganciclovir)' },
      indications: {
        pt: ['Prevenção e Tratamento da doença por CMV (transição da via venosa para tratamento ambulatorial/domiciliar)'],
        es: ['Prevención y Tratamiento de la enfermedad por CMV (transición de la vía venosa para tratamiento ambulatorio/domiciliario)']
      },
      commercialNames: { br: ['Valcyte'], ar: ['Valcyte'] },
      presentation: { pt: ['Comprimidos revestidos 450 mg'], es: ['Comprimidos recubiertos 450 mg'] },
      mechanism: {
        pt: 'Faz para o Ganciclovir o mesmo que o Valaciclovir faz para o Aciclovir. Adicionou-se uma Valina à molécula para turbinar a absorção intestinal. No fígado e parede do intestino, enzimas clivam a molécula, liberando Ganciclovir puro no sangue com biodisponibilidade de 60% (vs 5% do ganciclovir oral antigo). Substitui perfeitamente a internação hospitalar venosa.',
        es: 'Hace para el Ganciclovir lo mismo que el Valaciclovir hace para el Aciclovir. Se añadió una Valina a la molécula para potenciar la absorción intestinal. En el hígado y pared del intestino, enzimas escinden la molécula, liberando Ganciclovir puro en la sangre con biodisponibilidad del 60% (vs 5% del ganciclovir oral antiguo). Sustituye perfectamente la internación hospitalaria venosa.'
      },
      dose: {
        adult: {
          pt: 'Indução: 900 mg VO (2 comp de 450 mg) a cada 12 horas por 21 dias. Profilaxia/Manutenção: 900 mg VO 1x ao dia.',
          es: 'Inducción: 900 mg VO (2 comp de 450 mg) cada 12 horas por 21 días. Profilaxis/Mantenimiento: 900 mg VO 1 vez al día.'
        },
        pediatric: {
          pt: 'Calculada por fórmula específica usando Área de Superfície Corporal (BSA) e clearance de creatinina (fórmula de Schwartz).',
          es: 'Calculada por fórmula específica usando Área de Superficie Corporal (BSA) y clearance de creatinina (fórmula de Schwartz).'
        }
      },
      administration: { pt: ['Deve ser ingerido COM ALIMENTOS para maximizar a absorção.', 'Os comprimidos NÃO DEVEM ser quebrados ou triturados (alta toxicidade da poeira inalada).'], es: ['Debe ser ingerido CON ALIMENTOS para maximizar la absorción.', 'Los comprimidos NO DEBEN ser rotos o triturados (alta toxicidad del polvo inhalado).'] },
      renalAdjustment: { required: true, message: { pt: 'Mandatório. ClCr 40-59: 450 mg 12/12h (ataque). ClCr 25-39: 450 mg 1x/dia. ClCr 10-24: 450 mg a cada 48h. ClCr < 10: CONTRAINDICADO.', es: 'Mandatorio. ClCr 40-59: 450 mg 12/12h (ataque). ClCr 25-39: 450 mg 1 vez/día. ClCr 10-24: 450 mg cada 48h. ClCr < 10: CONTRAINDICADO.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem ajuste.', es: 'Sin ajuste.' } },
      commonAdverseEffects: { pt: ['Diarreia e Náuseas', 'Cefaleia', 'Tremores'], es: ['Diarrea y Náuseas', 'Cefalea', 'Temblores'] },
      dangerousAdverseEffects: { pt: ['Supressão de medula (Neutropenia e Trombocitopenia severas) igual ao ganciclovir venoso', 'Descolamento de retina (rara associação)'], es: ['Supresión de médula (Neutropenia y Trombocitopenia severas) igual al ganciclovir venoso', 'Desprendimiento de retina (rara asociación)'] },
      contraindications: {
        absolute: { pt: ['Pacientes em hemodiálise (ClCr < 10 mL/min)', 'Citopenias graves (Neutrófilos < 500)'], es: ['Pacientes en hemodiálisis (ClCr < 10 mL/min)', 'Citopenias graves (Neutrófilos < 500)'] },
        relative: { pt: ['Uso associado a Micofenolato Mofetil (soma de toxicidade medular em transplantados)'], es: ['Uso asociado a Micofenolato Mofetilo (suma de toxicidad medular en trasplantados)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'Por se tratar de um antiviral de uso contínuo no pós-transplante, monitoramento de hemograma a cada 2 a 4 semanas é obrigatório para não deixar o paciente entrar em aplasia medular silenciosa.', es: 'Al tratarse de un antiviral de uso continuo en el post-trasplante, la monitorización del hemograma cada 2 a 4 semanas es obligatoria para no dejar que el paciente entre en aplasia medular silenciosa.' }
      }
    },

    /* ── OSELTAMIVIR ────────────────────────────────────────────────────── */
    "oseltamivir": {
      name: { pt: 'Oseltamivir', es: 'Oseltamivir' },
      category: 'infectologia',
      class: { pt: 'Antiviral (Inibidor da Neuraminidase)', es: 'Antiviral (Inhibidor de la Neuraminidasa)' },
      indications: {
        pt: ['Tratamento e Profilaxia do vírus Influenza A e B (Gripe)', 'Uso empírico obrigatório na Síndrome Respiratória Aguda Grave (SRAG)'],
        es: ['Tratamiento y Profilaxis del virus Influenza A y B (Gripe)', 'Uso empírico obligatorio en el Síndrome Respiratorio Agudo Grave (SRAG)']
      },
      commercialNames: { br: ['Tamiflu'], ar: ['Tamiflu', 'Agucort'] },
      presentation: { pt: ['Cápsulas 30 mg, 45 mg e 75 mg', 'Pó para suspensão oral'], es: ['Cápsulas 30 mg, 45 mg y 75 mg', 'Polvo para suspensión oral'] },
      mechanism: {
        pt: 'A neuraminidase é a enzima viral que age como uma tesoura, cortando as ligações que prendem as novas cópias do vírus da gripe à célula infectada. O Oseltamivir bloqueia essa enzima. Como resultado, os novos vírus recém-formados ficam colados na superfície da célula doente e não conseguem se espalhar para o restante do pulmão, limitando o avanço da doença.',
        es: 'La neuraminidasa es la enzima viral que actúa como una tijera, cortando los enlaces que sujetan las nuevas copias del virus de la gripe a la célula infectada. El Oseltamivir bloquea esta enzima. Como resultado, los nuevos virus recién formados quedan pegados a la superficie de la célula enferma y no pueden propagarse al resto del pulmón, limitando el avance de la enfermedad.'
      },
      dose: {
        adult: {
          pt: 'Tratamento: 75 mg VO a cada 12 horas por 5 dias. Profilaxia (após contato): 75 mg VO 1x ao dia por 10 dias.',
          es: 'Tratamiento: 75 mg VO cada 12 horas por 5 días. Profilaxis (tras contacto): 75 mg VO 1 vez al día por 10 días.'
        },
        pediatric: {
          pt: 'Ajustado pelo peso. > 40 kg: 75 mg 12/12h; 23-40 kg: 60 mg 12/12h; 15-23 kg: 45 mg 12/12h.',
          es: 'Ajustado por peso. > 40 kg: 75 mg 12/12h; 23-40 kg: 60 mg 12/12h; 15-23 kg: 45 mg 12/12h.'
        }
      },
      administration: { pt: ['Tomar com as refeições para minimizar náuseas.', 'Em pacientes entubados, diluir a cápsula e administrar pela sonda nasogástrica.'], es: ['Tomar con las comidas para minimizar náuseas.', 'En pacientes entubados, diluir la cápsula y administrar por la sonda nasogástrica.'] },
      renalAdjustment: { required: true, message: { pt: 'O metabólito ativo acumula. ClCr 30-60: Tratamento 30 mg 12/12h. ClCr 10-30: 30 mg 1x/dia. ClCr < 10: Não recomendado.', es: 'El metabolito activo se acumula. ClCr 30-60: Tratamiento 30 mg 12/12h. ClCr 10-30: 30 mg 1 vez/día. ClCr < 10: No recomendado.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Náuseas e Vômitos frequentes (10 a 15% dos casos)', 'Cefaleia', 'Insônia'], es: ['Náuseas y Vómitos frecuentes (10 a 15% de los casos)', 'Cefalea', 'Insomnio'] },
      dangerousAdverseEffects: { pt: ['Eventos neuropsiquiátricos anormais (Delírios, Alucinações, Automutilação e comportamento suicida) — especialmente descrito em crianças e adolescentes no Japão.'], es: ['Eventos neuropsiquiátricos anormales (Delirios, Alucinaciones, Automutilación y comportamiento suicida) — especialmente descrito en niños y adolescentes en Japón.'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade grave'], es: ['Hipersensibilidad grave'] },
        relative: { pt: ['Pacientes com doença renal em estágio terminal sem diálise'], es: ['Pacientes con enfermedad renal en etapa terminal sin diálisis'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'A regra de ouro do Oseltamivir é o TEMPO. Ele reduz a gravidade e o risco de intubação apenas se iniciado nas primeiras 48 horas de sintomas. Iniciar o remédio no 5º dia de febre não muda o desfecho clínico, exceto em doentes muito graves ou hospitalizados.', es: 'La regla de oro del Oseltamivir es el TIEMPO. Reduce la gravedad y el riesgo de intubación solo si se inicia en las primeras 48 horas de síntomas. Iniciar el remedio en el 5º día de fiebre no cambia el desenlace clínico, excepto en enfermos muy graves u hospitalizados.' }
      }
    },

    /* ── REMDESIVIR ─────────────────────────────────────────────────────── */
    "remdesivir": {
      name: { pt: 'Remdesivir', es: 'Remdesivir' },
      category: 'infectologia',
      class: { pt: 'Antiviral (Análogo de Nucleotídeo / Inibidor da RNA Polimerase)', es: 'Antiviral (Análogo de Nucleótido / Inhibidor de la ARN Polimerasa)' },
      indications: {
        pt: ['Tratamento da COVID-19 em pacientes internados com pneumonia e necessidade de suplementação de oxigênio (não em VNI ou ECMO)'],
        es: ['Tratamiento de la COVID-19 en pacientes internados con neumonía y necesidad de suplementación de oxígeno (no en VNI o ECMO)']
      },
      commercialNames: { br: ['Veklury'], ar: ['Veklury'] },
      presentation: { pt: ['Frasco-ampola liofilizado 100 mg'], es: ['Vial liofilizado 100 mg'] },
      mechanism: {
        pt: 'Pró-fármaco ativado intracelularmente em trifosfato de nucleotídeo (análogo da adenosina). Infiltra-se na cadeia de RNA que o SARS-CoV-2 está montando através da RNA polimerase dependente de RNA (RdRp). Após incorporar a falsa adenosina, a enzima tenta adicionar mais três bases, mas a estrutura paralisa (terminação de cadeia atrasada), freando a replicação viral.',
        es: 'Profármaco activado intracelularmente en trifosfato de nucleótido (análogo de la adenosina). Se infiltra en la cadena de ARN que el SARS-CoV-2 está montando a través de la ARN polimerasa dependiente de ARN (RdRp). Tras incorporar la falsa adenosina, la enzima intenta añadir tres bases más, pero la estructura se paraliza (terminación de cadena retrasada), frenando la replicación viral.'
      },
      dose: {
        adult: {
          pt: 'Dose de Ataque: 200 mg IV no Dia 1. Manutenção: 100 mg IV 1x/dia (geralmente por 5 dias, máximo de 10 dias).',
          es: 'Dosis de Ataque: 200 mg IV en el Día 1. Mantenimiento: 100 mg IV 1 vez/día (generalmente por 5 días, máximo de 10 días).'
        },
        pediatric: {
          pt: 'Crianças > 40 kg: mesma dose do adulto. < 40 kg: 5 mg/kg ataque, 2,5 mg/kg manutenção.',
          es: 'Niños > 40 kg: misma dosis que el adulto. < 40 kg: 5 mg/kg ataque, 2,5 mg/kg mantenimiento.'
        }
      },
      administration: { pt: ['Infusão IV lenta ao longo de 30 a 120 minutos (para prevenir reações de hipersensibilidade e hipotensão).'], es: ['Infusión IV lenta a lo largo de 30 a 120 minutos (para prevenir reacciones de hipersensibilidad e hipotensión).'] },
      renalAdjustment: { required: false, message: { pt: 'Diretrizes iniciais proibiam em ClCr < 30 pelo acúmulo do excipiente SBECD. Estudos recentes reverteram isso: pode ser usado em DRC ou diálise, pois o benefício no COVID supera o risco teórico do veículo.', es: 'Las directrices iniciales prohibían en ClCr < 30 por la acumulación del excipiente SBECD. Estudios recientes revirtieron esto: puede usarse en ERC o diálisis, pues el beneficio en COVID supera el riesgo teórico del vehículo.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Descontinuar se a TGO/TGP subir mais de 5 vezes o limite superior do normal ou se houver icterícia ativa.', es: 'Descontinuar si la AST/ALT sube más de 5 veces el límite superior de lo normal o si hay ictericia activa.' } },
      commonAdverseEffects: { pt: ['Aumento assintomático das transaminases hepáticas', 'Náusea'], es: ['Aumento asintomático de las transaminasas hepáticas', 'Náusea'] },
      dangerousAdverseEffects: { pt: ['Bradicardia severa induzida pela droga', 'Reações anafiláticas e hipotensão na infusão rápida'], es: ['Bradicardia severa inducida por la droga', 'Reacciones anafilácticas e hipotensión en la infusión rápida'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade'], es: ['Hipersensibilidad'] },
        relative: { pt: ['Uso associado de Cloroquina ou Hidroxicloroquina (antagonismo laboratorial)'], es: ['Uso asociado de Cloroquina o Hidroxicloroquina (antagonismo de laboratorio)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'ALERTA DE FASE: O Remdesivir ataca o vírus. Logo, ele só funciona na primeira semana de doença (fase de replicação viral). Usá-lo no paciente gravemente entubado no D14, onde a inflamação e a fibrose já assumiram o quadro, é inútil.', es: 'ALERTA DE FASE: El Remdesivir ataca al virus. Por tanto, solo funciona en la primera semana de enfermedad (fase de replicación viral). Usarlo en el paciente gravemente entubado en el D14, donde la inflamación y la fibrosis ya asumieron el cuadro, es inútil.' }
      }
    },

    /* ── NIRMATRELVIR + RITONAVIR (PAXLOVID) ────────────────────────────── */
    "paxlovid": {
      name: { pt: 'Nirmatrelvir + Ritonavir (Paxlovid)', es: 'Nirmatrelvir + Ritonavir (Paxlovid)' },
      category: 'infectologia',
      class: { pt: 'Antiviral (Inibidor da Protease Principal Mpro do SARS-CoV-2) + Booster Farmacocinético', es: 'Antiviral (Inhibidor de la Proteasa Principal Mpro del SARS-CoV-2) + Booster Farmacocinético' },
      indications: {
        pt: ['Tratamento de COVID-19 leve a moderada em adultos de alto risco de progressão para quadro severo (não internados)'],
        es: ['Tratamiento de COVID-19 leve a moderada en adultos de alto riesgo de progresión a cuadro severo (no internados)']
      },
      commercialNames: { br: ['Paxlovid'], ar: ['Paxlovid'] },
      presentation: { pt: ['Cartela com comprimidos co-embalados: 2 comprimidos rosas (Nirmatrelvir 150 mg) + 1 comprimido branco (Ritonavir 100 mg) por dose.'], es: ['Blíster con comprimidos co-empaquetados: 2 comprimidos rosas (Nirmatrelvir 150 mg) + 1 comprimido blanco (Ritonavir 100 mg) por dosis.'] },
      mechanism: {
        pt: 'Terapia combinada. O Nirmatrelvir inibe a protease principal (3CLpro / Mpro) do coronavírus, impedindo que corte suas poliproteínas em proteínas funcionais ativas, esterilizando a fábrica do vírus. O Ritonavir não tem ação contra o COVID; atua puramente como booster farmacocinético. O Ritonavir inibe o CYP3A4 hepático, impedindo que o fígado destrua o Nirmatrelvir e mantendo-o em concentrações eficazes. Esse bloqueio enzimático gera centenas de interações medicamentosas potencialmente fatais.',
        es: 'Terapia combinada. El Nirmatrelvir inhibe la proteasa principal (3CLpro / Mpro) del coronavirus, impidiendo que corte sus poliproteínas en proteínas funcionales activas, esterilizando la fábrica del virus. El Ritonavir no tiene acción contra el COVID; actúa puramente como booster farmacocinético. El Ritonavir inhibe el CYP3A4 hepático, impidiendo que el hígado destruya el Nirmatrelvir y manteniéndolo en concentraciones eficaces. Este bloqueo enzimático genera cientos de interacciones medicamentosas potencialmente fatales.'
      },
      dose: {
        adult: {
          pt: '2 comp de Nirmatrelvir (300 mg) + 1 comp de Ritonavir (100 mg) tomados juntos a cada 12 horas, por 5 dias corridos.',
          es: '2 comp de Nirmatrelvir (300 mg) + 1 comp de Ritonavir (100 mg) tomados juntos cada 12 horas, por 5 días seguidos.'
        },
        pediatric: {
          pt: 'Não autorizado para menores de 18 anos ou < 40 kg na maioria dos protocolos.',
          es: 'No autorizado para menores de 18 años o < 40 kg en la mayoría de los protocolos.'
        }
      },
      administration: { pt: ['Tomar os três comprimidos da dose matinal juntos e os três da dose noturna juntos. Engolir inteiros.', 'Obrigatório iniciar nos primeiros 5 dias após o início dos sintomas de COVID.'], es: ['Tomar los tres comprimidos de la dosis matinal juntos y los tres de la dosis nocturna juntos. Tragar enteros.', 'Obligatorio iniciar en los primeros 5 días tras el inicio de los síntomas de COVID.'] },
      renalAdjustment: { required: true, message: { pt: 'TFG 30-59 mL/min: retirar um comprimido rosa. Tomar 150 mg Nirmatrelvir + 100 mg Ritonavir a cada 12h. TFG < 30 mL/min: CONTRAINDICADO.', es: 'TFG 30-59 mL/min: retirar un comprimido rosa. Tomar 150 mg Nirmatrelvir + 100 mg Ritonavir cada 12h. TFG < 30 mL/min: CONTRAINDICADO.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Contraindicado em insuficiência hepática grave (Child-Pugh C).', es: 'Contraindicado en insuficiencia hepática grave (Child-Pugh C).' } },
      commonAdverseEffects: { pt: ['Disgeusia (gosto muito amargo, metálico na boca — quase universal, cessa após o tratamento)', 'Diarreia', 'Hipertensão leve'], es: ['Disgeusia (sabor muy amargo, metálico en la boca — casi universal, cesa tras el tratamiento)', 'Diarrea', 'Hipertensión leve'] },
      dangerousAdverseEffects: { pt: ['Hepatotoxicidade aguda', 'Efeito Rebote da COVID-19 (COVID Rebound) — o paciente testa negativo e, dias após o fim dos 5 dias, os sintomas voltam e o teste positivа novamente'], es: ['Hepatotoxicidad aguda', 'Efecto Rebote de la COVID-19 (COVID Rebound) — el paciente da negativo y, días tras el fin de los 5 días, los síntomas vuelven y la prueba da positiva nuevamente'] },
      contraindications: {
        absolute: { pt: ['Pacientes em uso de medicamentos dependentes do CYP3A4 que não podem ser suspensos (Rivaroxabana, Amiodarona, Tacrolimus, Quetiapina, Sinvastatina) — verificar bula sempre.'], es: ['Pacientes en uso de medicamentos dependientes del CYP3A4 que no pueden ser suspendidos (Rivaroxabán, Amiodarona, Tacrolimus, Quetiapina, Simvastatina) — verificar prospecto siempre.'] },
        relative: { pt: ['Uso concomitante com indutores que anulam o Ritonavir (Rifampicina, Erva de São João)'], es: ['Uso concomitante con inductores que anulan el Ritonavir (Rifampicina, Hierba de San Juan)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'CAMPEÃO MUNDIAL DE INTERAÇÕES MEDICAMENTOSAS DE RISCO DE MORTE. O Ritonavir blinda o fígado por 5 dias. Inúmeros remédios comuns do idoso vão se acumular causando hemorragia, arritmias ou rabdomiólise. A revisão de toda a lista de medicamentos habituais é o passo 1 obrigatório antes de prescrever.', es: 'CAMPEÓN MUNDIAL DE INTERACCIONES MEDICAMENTOSAS DE RIESGO DE MUERTE. El Ritonavir blinda el hígado por 5 días. Numerosos remedios comunes del anciano se acumularán causando hemorragia, arritmias o rabdomiólisis. La revisión de toda la lista de medicamentos habituales es el paso 1 obligatorio antes de prescribir.' }
      }
    }

  }); /* fim Object.assign INFECTOLOGIA_DRUGS_DB — Grupo 4 (ganciclovir · valganciclovir · oseltamivir · remdesivir · paxlovid — BUILD 342 Lote 4) */

})();

/* ── GRUPO 5: Antimicrobianos de Última Geração — BUILD 344 Lote 5 ── */
(function () {
  'use strict';
  if (typeof window.INFECTOLOGIA_DRUGS_DB !== 'object' || window.INFECTOLOGIA_DRUGS_DB === null) return;

  Object.assign(window.INFECTOLOGIA_DRUGS_DB, {

    /* ── CEFTOBIPROLE ───────────────────────────────────────────────────── */
    "ceftobiprole": {
      name: { pt: 'Ceftobiprole', es: 'Ceftobiprol' },
      category: 'infectologia',
      class: { pt: 'Antibiótico Beta-lactâmico (Cefalosporina de 5ª Geração)', es: 'Antibiótico Betalactámico (Cefalosporina de 5ª Generación)' },
      indications: {
        pt: ['Pneumonia adquirida no hospital (PAH) excluindo associada à ventilação (PAV)', 'Pneumonia adquirida na comunidade (PAC) severa', 'Infecções complicadas de pele e tecidos moles por MRSA'],
        es: ['Neumonía adquirida en el hospital (NAH) excluyendo asociada a ventilación (NAV)', 'Neumonía adquirida en la comunidad (NAC) severa', 'Infecciones complicadas de piel y tejidos blandos por MRSA']
      },
      commercialNames: { br: ['Zevtera'], ar: ['Zevtera'] },
      presentation: { pt: ['Frasco-ampola liofilizado 500 mg'], es: ['Vial liofilizado 500 mg'] },
      mechanism: {
        pt: 'Diferente de todas as cefalosporinas anteriores, liga-se fortemente à PBP2a (a proteína mutante que confere resistência à meticilina ao MRSA) e à PBP2x (do pneumococo resistente). Paralisa a síntese da parede celular bacteriana, cobrindo MRSA, cepas sensíveis de Enterococcus faecalis e mantendo excelente cobertura Gram-negativa (Pseudomonas inconstante).',
        es: 'A diferencia de todas las cefalosporinas anteriores, se une fuertemente a la PBP2a (la proteína mutante que confiere resistencia a la meticilina al MRSA) y a la PBP2x (del neumococo resistente). Paraliza la síntesis de la pared celular bacteriana, cubriendo MRSA, cepas sensibles de Enterococcus faecalis y manteniendo excelente cobertura Gram-negativa (Pseudomonas inconstante).'
      },
      dose: {
        adult: {
          pt: '500 mg IV a cada 8 horas (infusão estendida de 2 horas).',
          es: '500 mg IV cada 8 horas (infusión extendida de 2 horas).'
        },
        pediatric: {
          pt: 'Segurança não totalmente estabelecida. Uso off-label guiado por infectologia.',
          es: 'Seguridad no totalmente establecida. Uso off-label guiado por infectología.'
        }
      },
      administration: { pt: ['Administrar em infusão endovenosa de no mínimo 2 horas para garantir tempo acima da MIC (farmacocinética T>MIC típica dos beta-lactâmicos).'], es: ['Administrar en infusión endovenosa de al menos 2 horas para garantizar tiempo por encima de la MIC (farmacocinética T>MIC típica de los betalactámicos).'] },
      renalAdjustment: { required: true, message: { pt: 'Depurado pelos rins. ClCr 30-50: 500 mg a cada 12h. ClCr 15-29: 250 mg a cada 12h. ClCr < 15: 250 mg a cada 24h.', es: 'Depurado por los riñones. ClCr 30-50: 500 mg cada 12h. ClCr 15-29: 250 mg cada 12h. ClCr < 15: 250 mg cada 24h.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste clínico.', es: 'Sin necesidad de ajuste clínico.' } },
      commonAdverseEffects: { pt: ['Disgeusia (alteração intensa do paladar, gosto de metal ou caramelo)', 'Náuseas e vômitos', 'Flebite'], es: ['Disgeusia (alteración intensa del gusto, sabor a metal o caramelo)', 'Náuseas y vómitos', 'Flebitis'] },
      dangerousAdverseEffects: { pt: ['Anafilaxia', 'Convulsões e encefalopatia mioclônica (se não houver ajuste de dose na insuficiência renal)', 'Colite por C. difficile'], es: ['Anafilaxia', 'Convulsiones y encefalopatía mioclónica (si no hay ajuste de dosis en la insuficiencia renal)', 'Colitis por C. difficile'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade grave a cefalosporinas ou histórico de anafilaxia à penicilina'], es: ['Hipersensibilidad grave a cefalosporinas o historial de anafilaxia a la penicilina'] },
        relative: { pt: ['Histórico de epilepsia ou convulsões não controladas'], es: ['Historial de epilepsia o convulsiones no controladas'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'Possui risco cruzado de alergia com as penicilinas. É um substituto premium para pacientes que não toleram Vancomicina ou Teicoplanina para cobrir MRSA pulmonar.', es: 'Posee riesgo cruzado de alergia con las penicilinas. Es un sustituto premium para pacientes que no toleran Vancomicina o Teicoplanina para cubrir MRSA pulmonar.' }
      }
    },

    /* ── DALBAVANCINA ───────────────────────────────────────────────────── */
    "dalbavancina": {
      name: { pt: 'Dalbavancina', es: 'Dalbavancina' },
      category: 'infectologia',
      class: { pt: 'Antibiótico Lipoglicopeptídeo', es: 'Antibiótico Lipoglucopéptido' },
      indications: {
        pt: ['Infecções bacterianas agudas de pele e tecidos moles (SSTI) causadas por Gram-positivos multirresistentes (MRSA)', 'Osteomielite crônica e Endocardite (off-label em regimes longos)'],
        es: ['Infecciones bacterianas agudas de piel y tejidos blandos (SSTI) causadas por Gram-positivos multirresistentes (MRSA)', 'Osteomielitis crónica y Endocarditis (off-label en regímenes largos)']
      },
      commercialNames: { br: ['Dalvance (importação)'], ar: ['Dalvance'] },
      presentation: { pt: ['Frasco-ampola liofilizado 500 mg'], es: ['Vial liofilizado 500 mg'] },
      mechanism: {
        pt: 'Mecanismo similar ao da Vancomicina (liga-se aos resíduos D-alanil-D-alanina impedindo a formação da parede bacteriana), porém sua molécula possui uma cauda lipofílica extra que ancora o antibiótico na membrana da bactéria. Isso confere meia-vida de eliminação de quase 15 dias. O paciente toma uma única dose e fica tratado por semanas.',
        es: 'Mecanismo similar al de la Vancomicina (se une a los residuos D-alanil-D-alanina impidiendo la formación de la pared bacteriana), pero su molécula posee una cola lipofílica extra que ancla el antibiótico en la membrana de la bacteria. Esto le confiere una vida media de eliminación de casi 15 días. El paciente toma una sola dosis y queda tratado por semanas.'
      },
      dose: {
        adult: {
          pt: 'Regime de Dose Única: 1.500 mg IV (1 vez). Regime Duplo: 1.000 mg IV no Dia 1, seguido de 500 mg IV no Dia 8.',
          es: 'Régimen de Dosis Única: 1.500 mg IV (1 vez). Régimen Doble: 1.000 mg IV en el Día 1, seguido de 500 mg IV en el Día 8.'
        },
        pediatric: {
          pt: 'Aprovado para crianças em algumas agências. Exige cálculo estrito de mg/kg.',
          es: 'Aprobado para niños en algunas agencias. Exige cálculo estricto de mg/kg.'
        }
      },
      administration: { pt: ['Infusão IV lenta em no mínimo 30 minutos.', 'A infusão rápida pode causar a Síndrome do Homem Vermelho (liberação de histamina).'], es: ['Infusión IV lenta en al menos 30 minutos.', 'La infusión rápida puede causar el Síndrome del Hombre Rojo (liberación de histamina).'] },
      renalAdjustment: { required: true, message: { pt: 'Se ClCr < 30 mL/min (não dialítico): reduzir a dose de ataque única para 1.125 mg IV.', es: 'Si ClCr < 30 mL/min (no dialítico): reducir la dosis de ataque única a 1.125 mg IV.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Evitar em cirrose classe C, sem ajuste necessário para classe A ou B.', es: 'Evitar en cirrosis clase C, sin ajuste necesario para clase A o B.' } },
      commonAdverseEffects: { pt: ['Náusea e diarreia', 'Cefaleia', 'Prurido e rash leve'], es: ['Náusea y diarrea', 'Cefalea', 'Prurito y rash leve'] },
      dangerousAdverseEffects: { pt: ['Aumento transitório de TGO/TGP (hepatotoxicidade assintomática)', 'Colite por C. difficile'], es: ['Aumento transitorio de AST/ALT (hepatotoxicidad asintomática)', 'Colitis por C. difficile'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade grave a glicopeptídeos (vancomicina)'], es: ['Hipersensibilidad grave a glucopéptidos (vancomicina)'] },
        relative: { pt: ['Ausência de infecção documentada por Gram-positivos'], es: ['Ausencia de infección documentada por Gram-positivos'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'Estratégia de desospitalização: o paciente com celulite grave internado toma uma bolsa de Dalbavancina e tem alta no mesmo dia, curado do MRSA por semanas, sem internação prolongada.', es: 'Estrategia de deshospitalización: el paciente con celulitis grave internado toma una bolsa de Dalbavancina y es dado de alta el mismo día, curado del MRSA por semanas, sin internación prolongada.' }
      }
    },

    /* ── TEICOPLANINA ───────────────────────────────────────────────────── */
    "teicoplanina": {
      name: { pt: 'Teicoplanina', es: 'Teicoplanina' },
      category: 'infectologia',
      class: { pt: 'Antibiótico Glicopeptídeo', es: 'Antibiótico Glucopéptido' },
      indications: {
        pt: ['Infecções severas por Gram-positivos (MRSA, Enterococcus, S. epidermidis)', 'Infecções de osso e articulação (Osteomielite) e Endocardite', 'Peritonite em pacientes em Diálise Peritoneal Ambulatorial Contínua (CAPD)'],
        es: ['Infecciones severas por Gram-positivos (MRSA, Enterococcus, S. epidermidis)', 'Infecciones de hueso y articulación (Osteomielitis) y Endocarditis', 'Peritonitis en pacientes en Diálisis Peritoneal Ambulatoria Continua (CAPD)']
      },
      commercialNames: { br: ['Targocid'], ar: ['Targocid'] },
      presentation: { pt: ['Frasco-ampola liofilizado 200 mg, 400 mg'], es: ['Vial liofilizado 200 mg, 400 mg'] },
      mechanism: {
        pt: 'Mecanismo idêntico ao da Vancomicina (inibe a parede de Gram-positivos ao ligar-se à extremidade D-ala-D-ala). Possui maior afinidade pelos tecidos, especialmente ossos, e meia-vida de eliminação imensamente maior (até 150 horas). Grande vantagem sobre a vancomicina: nefrotoxicidade muito menor (quase zero).',
        es: 'Mecanismo idéntico al de la Vancomicina (inhibe la pared de Gram-positivos al unirse al extremo D-ala-D-ala). Posee mayor afinidad por los tejidos, especialmente huesos, y vida media de eliminación inmensamente mayor (hasta 150 horas). Gran ventaja sobre la vancomicina: nefrotoxicidad mucho menor (casi cero).'
      },
      dose: {
        adult: {
          pt: 'Infecções graves: 6 a 12 mg/kg IV a cada 12 horas por 3 a 5 doses de ataque. Manutenção: 6 a 12 mg/kg IV uma vez ao dia.',
          es: 'Infecciones graves: 6 a 12 mg/kg IV cada 12 horas por 3 a 5 dosis de ataque. Mantenimiento: 6 a 12 mg/kg IV una vez al día.'
        },
        pediatric: {
          pt: 'Ataque: 10 mg/kg 12/12h por 3 doses. Manutenção: 6 a 10 mg/kg/dia.',
          es: 'Ataque: 10 mg/kg 12/12h por 3 dosis. Mantenimiento: 6 a 10 mg/kg/día.'
        }
      },
      administration: { pt: ['Grande diferencial: pode ser aplicada por via INTRAMUSCULAR (IM) em ambulatório, ou IV direto em 3 a 5 minutos, sem causar a Síndrome do Homem Vermelho da vancomicina.'], es: ['Gran diferencial: puede ser aplicada por vía INTRAMUSCULAR (IM) en ambulatorio, o IV directo en 3 a 5 minutos, sin causar el Síndrome del Hombre Rojo de la vancomicina.'] },
      renalAdjustment: { required: true, message: { pt: 'Reduzir dose em DRC após o 4º dia de tratamento (geralmente metade da dose para ClCr 40-60, ou 1/3 se ClCr < 40).', es: 'Reducir dosis en ERC tras el 4º día de tratamiento (generalmente mitad de la dosis para ClCr 40-60, o 1/3 si ClCr < 40).' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste estrito.', es: 'Sin necesidad de ajuste estricto.' } },
      commonAdverseEffects: { pt: ['Dor no local da injeção IM', 'Eritema leve'], es: ['Dolor en el sitio de inyección IM', 'Eritema leve'] },
      dangerousAdverseEffects: { pt: ['Ototoxicidade (zumbido ou surdez), mais rara que com vancomicina', 'Trombocitopenia reversível', 'Anafilaxia'], es: ['Ototoxicidad (zumbido o sordera), más rara que con vancomicina', 'Trombocitopenia reversible', 'Anafilaxia'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade conhecida grave à teicoplanina'], es: ['Hipersensibilidad conocida grave a la teicoplanina'] },
        relative: { pt: ['Alergia prévia à vancomicina (risco de alergia cruzada)'], es: ['Alergia previa a vancomicina (riesgo de alergia cruzada)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'ERRO TERAPÊUTICO COMUM: esquecer de fazer as doses de ataque (a cada 12h) nos primeiros dois dias. O remédio demora muitos dias para atingir o nível sérico eficaz se as doses de ataque forem puladas.', es: 'ERROR TERAPÉUTICO COMÚN: olvidar hacer las dosis de ataque (cada 12h) en los primeros dos días. El remedio tarda muchos días en alcanzar el nivel sérico eficaz si las dosis de ataque se saltan.' }
      }
    }, // vírgula adicionada; BUILD 358 Grupo 6 blocos seguem

/* ── AMOXICILINA + CLAVULANATO ──────────────────────────────────────── */
    "amoxicilina_clavulanato": {
      name: { pt: 'Amoxicilina + Clavulanato', es: 'Amoxicilina + Ácido Clavulánico' },
      category: 'infectologia',
      class: { pt: 'Penicilina de Amplo Espectro + Inibidor de Beta-lactamase', es: 'Penicilina de Amplio Espectro + Inhibidor de Betalactamasa' },
      indications: {
        pt: ['Pneumonia Adquirida na Comunidade (PAC)', 'Infecções de pele e tecidos moles (mordeduras de animais, celulite)', 'Infecções de vias aéreas superiores (Otite, Sinusite) refratárias'],
        es: ['Neumonía Adquirida en la Comunidad (NAC)', 'Infecciones de piel y tejidos blandos (mordeduras de animales, celulitis)', 'Infecciones de vías respiratorias superiores (Otitis, Sinusitis) refractarias']
      },
      commercialNames: { br: ['Clavulin', 'Sigma-Clav'], ar: ['Optamox'] },
      presentation: { pt: ['Comprimidos 875/125 mg, 500/125 mg', 'Suspensão oral 400/57 mg por 5 mL', 'Frasco-ampola IV 1000/200 mg'], es: ['Comprimidos 875/125 mg, 500/125 mg', 'Suspensión oral 400/57 mg por 5 mL', 'Vial IV 1000/200 mg'] },
      mechanism: {
        pt: 'A Amoxicilina (um beta-lactâmico) inibe a síntese da parede celular bacteriana ligando-se às PBPs (levando a bactéria à lise). No entanto, muitas bactérias produzem a enzima "Beta-lactamase", que destrói a amoxicilina. O Ácido Clavulánico age como um "escudo suicida": ele se liga à enzima da bactéria e a inativa, permitindo que a amoxicilina sobreviva e destrua o patógeno. (Não tem ação contra MRSA ou Pseudomonas).',
        es: 'La Amoxicilina (un betalactámico) inhibe la síntesis de la pared celular bacteriana uniéndose a las PBP (llevando a la bacteria a la lisis). Sin embargo, muchas bacterias producen la enzima "Betalactamasa", que destruye la amoxicilina. El Ácido Clavulánico actúa como un "escudo suicida": se une a la enzima de la bacteria y la inactiva, permitiendo que la amoxicilina sobreviva y destruya el patógeno. (No tiene acción contra MRSA o Pseudomonas).'
      },
      dose: {
        adult: {
          pt: 'Oral: 875/125 mg a cada 12 horas. Infecção grave (IV): 1g/200 mg a cada 8 horas.',
          es: 'Oral: 875/125 mg cada 12 horas. Infección grave (IV): 1g/200 mg cada 8 horas.'
        },
        pediatric: {
          pt: '45 a 90 mg/kg/dia de amoxicilina (dividido a cada 12h ou 8h).',
          es: '45 a 90 mg/kg/día de amoxicilina (dividido cada 12h u 8h).'
        }
      },
      administration: { pt: ['Tomar NO INÍCIO DAS REFEIÇÕES (minimiza os severos efeitos gastrointestinais do clavulanato).', 'Forma IV deve ser infundida em 30 a 40 minutos (nunca bolus rápido).'], es: ['Tomar AL INICIO DE LAS COMIDAS (minimiza los severos efectos gastrointestinales del clavulánico).', 'La forma IV debe infundirse en 30 a 40 minutos (nunca bolo rápido).'] },
      renalAdjustment: { required: true, message: { pt: 'Se ClCr 10-30 mL/min: Usar 500/125 mg 12/12h (Evitar comp de 875mg). Se ClCr < 10: 500/125 mg 1x/dia.', es: 'Si ClCr 10-30 mL/min: Usar 500/125 mg 12/12h (Evitar comp de 875mg). Si ClCr < 10: 500/125 mg 1 vez/día.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Evitar se o paciente teve histórico prévio de lesão hepática (icterícia) associada ao uso desta droga.', es: 'Evitar si el paciente tuvo historial previo de lesión hepática (ictericia) asociada al uso de esta droga.' } },
      commonAdverseEffects: { pt: ['Diarreia marcante (efeito direto do ácido clavulânico na motilidade)', 'Náuseas', 'Candidíase vaginal oportunista'], es: ['Diarrea marcada (efecto directo del ácido clavulánico en la motilidad)', 'Náuseas', 'Candidiasis vaginal oportunista'] },
      dangerousAdverseEffects: { pt: ['Hepatite Colestática / Icterícia (pode surgir até SEMANAS após parar o remédio, mais comum em idosos homens)', 'Anafilaxia grave (Alergia cruzada às penicilinas)'], es: ['Hepatitis Colestásica / Ictericia (puede surgir hasta SEMANAS tras parar el remedio, más común en ancianos hombres)', 'Anafilaxia grave (Alergia cruzada a penicilinas)'] },
      contraindications: {
        absolute: { pt: ['Alergia a Penicilinas', 'Histórico de disfunção hepática prévia por Amoxicilina/Clavulanato'], es: ['Alergia a Penicilinas', 'Historial de disfunción hepática previa por Amoxicilina/Clavulánico'] },
        relative: { pt: ['Mononucleose Infecciosa ativa (Vírus Epstein-Barr) - deflagra Rash cutâneo violento em 100% dos casos, confundindo com alergia.'], es: ['Mononucleosis Infecciosa activa (Virus Epstein-Barr) - desencadena Rash cutáneo violento en el 100% de los casos, confundiéndose con alergia.'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'Cuidado com a Doses Duplas: Se o médico prescrever a posologia de "500 mg 8/8h" e o paciente tomar a caixa de "875 mg", ele receberá o DOBRO da dose permitida de Clavulanato, o que causará forte intoxicação gástrica (vômitos e diarreia incoercíveis).', es: 'Cuidado con las Dosis Dobles: Si el médico prescribe la posología de "500 mg 8/8h" y el paciente toma la caja de "875 mg", recibirá el DOBLE de la dosis permitida de Clavulánico, lo que causará fuerte intoxicación gástrica.' }
      }
    },

/* ── PIPERACILINA + TAZOBACTAM (TAZOCIN) ────────────────────────────── */
    "piperacilina_tazobactam": {
      name: { pt: 'Piperacilina + Tazobactam', es: 'Piperacilina + Tazobactam' },
      category: 'infectologia',
      class: { pt: 'Ureidopenicilina Antipseudomonas + Inibidor de Beta-lactamase', es: 'Ureidopenicilina Antipseudomonas + Inhibidor de Betalactamasa' },
      indications: {
        pt: ['Sepse hospitalar e Choque Séptico intra-abdominal (cobre anaeróbios perfeitamente)', 'Pneumonia Associada à Ventilação (PAV)', 'Neutropenia Febril'],
        es: ['Sepsis hospitalaria y Choque Séptico intraabdominal (cubre anaerobios perfectamente)', 'Neumonía Asociada a Ventilación (NAV)', 'Neutropenia Febril']
      },
      commercialNames: { br: ['Tazocin'], ar: ['Tazocin'] },
      presentation: { pt: ['Frasco-ampola IV liofilizado 4 g / 0,5 g (Total de 4,5 g)'], es: ['Vial IV liofilizado 4 g / 0,5 g (Total de 4,5 g)'] },
      mechanism: {
        pt: 'Uma bazuca antibiótica. A Piperacilina é uma penicilina desenhada especificamente para furar as barreiras da temida *Pseudomonas aeruginosa* (bactéria fatal de UTI). O Tazobactam é o escudo protetor. Juntos, exterminam quase tudo (Gram-positivos, Gram-negativos e Anaeróbios como *Bacteroides fragilis*). Falha contra: MRSA, VRE e cepas produtoras de KPC ou ESBL.',
        es: 'Un cañón antibiótico. La Piperacilina es una penicilina diseñada específicamente para perforar las barreras de la temida *Pseudomonas aeruginosa* (bacteria fatal de UCI). El Tazobactam es el escudo protector. Juntos, exterminan casi todo (Gram-positivos, Gram-negativos y Anaerobios como *Bacteroides fragilis*). Falla contra: MRSA, VRE y cepas productoras de KPC o ESBL.'
      },
      dose: {
        adult: {
          pt: '4,5 g IV a cada 8 horas ou 6 horas. (Infusão estendida de 4 horas é o padrão-ouro mundial de eficácia).',
          es: '4,5 g IV cada 8 horas o 6 horas. (Infusión extendida de 4 horas es el patrón oro mundial de eficacia).'
        },
        pediatric: {
          pt: 'Acima de 2 meses: 80 a 100 mg/kg da piperacilina IV a cada 8h (Máx 16g/dia).',
          es: 'Por encima de 2 meses: 80 a 100 mg/kg de piperacilina IV cada 8h (Máx 16g/día).'
        }
      },
      administration: { pt: ['A INFUSÃO ESTENDIDA (fazer a bolsa correr em 3 a 4 horas ao invés de 30 min) salva 30% a mais de vidas na sepse grave, pois a droga precisa de TEMPO de exposição contínua na bactéria, não de pico rápido.', 'Não misturar no mesmo equipo que Vancomicina (inativação química).'], es: ['LA INFUSIÓN EXTENDIDA (hacer que la bolsa pase en 3 a 4 horas en lugar de 30 min) salva 30% más vidas en la sepsis grave, pues la droga necesita TIEMPO de exposición continua en la bacteria, no pico rápido.', 'No mezclar en el mismo equipo que Vancomicina (inactivación química).'] },
      renalAdjustment: { required: true, message: { pt: 'Altamente retido em lesão renal. ClCr 20-40: 4,5g a cada 8h (se não fizer uso de 6/6h). ClCr < 20 (ou diálise): 4,5g a cada 12h.', es: 'Altamente retenido en lesión renal. ClCr 20-40: 4,5g cada 8h. ClCr < 20 (o diálisis): 4,5g cada 12h.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Nenhum ajuste necessário.', es: 'Ningún ajuste necesario.' } },
      commonAdverseEffects: { pt: ['Diarreia e candidíase', 'Erupção cutânea maculopapular', 'Flebite'], es: ['Diarrea y candidiasis', 'Erupción cutánea maculopapular', 'Flebitis'] },
      dangerousAdverseEffects: { pt: ['Anafilaxia fulminante cruzada', 'Lesão Renal Aguda severa (especialmente se combinado com Vancomicina)', 'Trombocitopenia (queda de plaquetas em uso prolongado > 10 dias)'], es: ['Anafilaxia fulminante cruzada', 'Lesión Renal Aguda severa (especialmente si se combina con Vancomicina)', 'Trombocitopenia (caída de plaquetas en uso prolongado > 10 días)'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade a Penicilinas ou Cefalosporinas (alergia cruzada grave)'], es: ['Hipersensibilidad a Penicilinas o Cefalosporinas (alergia cruzada grave)'] },
        relative: { pt: ['Fibrose Cística (aumenta muito o risco de febre e rash pela droga)'], es: ['Fibrosis Quística (aumenta mucho el riesgo de fiebre y rash por la droga)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O Tazocin tem uma carga oculta e massiva de SÓDIO (quase 300 mEq por dia num regime 6/6h). Cuidado com pacientes com Insuficiência Cardíaca na UTI, eles podem desenvolver Edema Agudo de Pulmão "inexplicável" devido a essa carga de sal injetada no antibiótico.', es: 'El Tazocin tiene una carga oculta y masiva de SODIO (casi 300 mEq por día en régimen 6/6h). Cuidado con pacientes con Insuficiencia Cardíaca en UCI, pueden desarrollar Edema Agudo de Pulmón "inexplicable" debido a esta carga de sal inyectada en el antibiótico.' }
      }
    },

/* ── CEFTRIAXONA ────────────────────────────────────────────────────── */
    "ceftriaxona": {
      name: { pt: 'Ceftriaxona', es: 'Ceftriaxona' },
      category: 'infectologia',
      class: { pt: 'Cefalosporina de 3ª Geração', es: 'Cefalosporina de 3ª Generación' },
      indications: {
        pt: ['Pneumonia Adquirida na Comunidade (PAC) severa / Internação', 'Meningite Bacteriana Aguda (cobre pneumococo e meningococo)', 'Infecções do Trato Urinário complicadas (Pielonefrite) e Gonorreia'],
        es: ['Neumonía Adquirida en la Comunidad (NAC) severa / Internación', 'Meningitis Bacteriana Aguda (cubre neumococo y meningococo)', 'Infecciones del Tracto Urinario complicadas (Pielonefritis) y Gonorrea']
      },
      commercialNames: { br: ['Rocefin', 'Triaxin'], ar: ['Acantex', 'Rocephin'] },
      presentation: { pt: ['Frasco-ampola IV/IM liofilizado 1g'], es: ['Vial IV/IM liofilizado 1g'] },
      mechanism: {
        pt: 'Liga-se de forma letal às PBPs (Proteínas Ligadoras de Penicilina) na parede celular bacteriana. Resiste fortemente às enzimas destrutivas (beta-lactamases) que as bactérias simples produzem. Tem excelente capacidade de atravessar a Barreira Hematoencefálica (cérebro). O mais único: sua meia-vida é imensa (cerca de 8h), permitindo usar apenas UMA INJEÇÃO POR DIA na maioria das doenças, facilitando alta hospitalar (Day Clinic). (Não cobre Pseudomonas nem MRSA).',
        es: 'Se une de forma letal a las PBPs en la pared celular bacteriana. Resiste fuertemente a las enzimas destructivas que las bacterias simples producen. Tiene excelente capacidad de atravesar la Barrera Hematoencefálica (cerebro). Lo más único: su vida media es inmensa, permitiendo usar solo UNA INYECCIÓN AL DÍA en la mayoría de las enfermedades. (No cubre Pseudomonas ni MRSA).'
      },
      dose: {
        adult: {
          pt: 'Geral: 1 a 2 g IV/IM 1x ao dia. Meningite: 2 g IV a cada 12 horas. Gonorreia: 500 mg IM Dose Única.',
          es: 'General: 1 a 2 g IV/IM 1 vez al día. Meningitis: 2 g IV cada 12 horas. Gonorrea: 500 mg IM Dosis Única.'
        },
        pediatric: {
          pt: 'Geral: 50 a 75 mg/kg IV 1x/dia. Meningite: 100 mg/kg/dia IV (dividido em 1 ou 2x, máx 4g/dia).',
          es: 'General: 50 a 75 mg/kg IV 1 vez/día. Meningitis: 100 mg/kg/día IV (dividido en 1 o 2x, máx 4g/día).'
        }
      },
      administration: { pt: ['Diluição para IV deve ser em SF 0,9% ou SG 5% (PROIBIDO RINGER LACTATO). Infusão em 30 min.', 'Via Intramuscular (IM) é EXTREMAMENTE dolorosa. A ampola IM própria já vem diluída em Lidocaína a 1% para aliviar a dor (Aviso: Nunca faça a ampola que contém lidocaína na veia!).'], es: ['Dilución para IV debe ser en SF 0,9% o SG 5% (PROHIBIDO RINGER LACTATO).', 'Vía Intramuscular (IM) es EXTREMADAMENTE dolorosa. La ampolla IM ya viene diluida en Lidocaína al 1% (¡Aviso: Nunca inyecte la ampolla con lidocaína en la vena!).'] },
      renalAdjustment: { required: false, message: { pt: 'A ÚNICA Cefalosporina que NÃO requer ajuste na insuficiência renal. É excretada de forma mista (rim e bile).', es: 'LA ÚNICA Cefalosporina que NO requiere ajuste en insuficiencia renal. Es excretada de forma mixta (riñón y bilis).' } },
      hepaticAdjustment: { required: true, message: { pt: 'Se o paciente tiver falência Renal E Hepática juntas, a dose não pode ultrapassar 2g/dia.', es: 'Si el paciente tiene falla Renal Y Hepática juntas, la dosis no puede superar 2g/día.' } },
      commonAdverseEffects: { pt: ['Eosinofilia e diarreia leve', 'Aumento assintomático de transaminases'], es: ['Eosinofilia y diarrea leve', 'Aumento asintomático de transaminasas'] },
      dangerousAdverseEffects: { pt: ['Lama Biliar e Pseudolitíase biliar (O cálcio se une ao remédio e forma uma "pedra falsa" dolorosa na vesícula biliar, que some meses depois)', 'Precipitação fatal nos pulmões/rins em neonatos', 'Kernicterus em recém-nascidos'], es: ['Barro Biliar y Pseudolitiasis biliar (El calcio se une al remedio y forma una "piedra falsa" en la vesícula, que desaparece meses después)', 'Precipitación fatal en pulmones/riñones en neonatos', 'Kernicterus en recién nacidos'] },
      contraindications: {
        absolute: { pt: ['Recém-nascidos (< 28 dias) prematuros ou com icterícia (a ceftriaxona solta a bilirrubina, que vai pro cérebro da criança e causa dano irreversível - Kernicterus)', 'Uso IV conjunto com Soluções de Cálcio em recém-nascidos (Morte por precipitação)'], es: ['Recién nacidos (< 28 días) prematuros o con ictericia (la ceftriaxona suelta la bilirrubina, que va al cerebro y causa Kernicterus)', 'Uso IV conjunto con Soluciones de Calcio en recién nacidos (Muerte por precipitación)'] },
        relative: { pt: ['Doença da Vesícula Biliar ativa (Lama biliar sintomática)'], es: ['Enfermedad de la Vesícula Biliar activa (Barro biliar sintomático)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O Ringer Lactato contém Cálcio na sua composição. Se você diluir a Ceftriaxona com Ringer Lactato (ou pendurá-los no mesmo acesso Y), a química cria "cristais de areia" que vão embolizar o pulmão do paciente (Reação Letal).', es: 'El Ringer Lactato contiene Calcio. Si diluyes Ceftriaxona con Ringer Lactato (o los cuelgas en el mismo acceso Y), la química crea "cristales de arena" que embolizarán el pulmón del paciente (Reacción Letal).' }
      }
    },

/* ── MEROPENEM ──────────────────────────────────────────────────────── */
    "meropenem": {
      name: { pt: 'Meropenem', es: 'Meropenem' },
      category: 'infectologia',
      class: { pt: 'Antibiótico Beta-lactâmico (Carbapenêmico)', es: 'Antibiótico Betalactámico (Carbapenémico)' },
      indications: {
        pt: ['Infecções multirresistentes severas (Bactérias produtoras de ESBL - K. pneumoniae, E. coli)', 'Sepse Intra-abdominal hospitalar complexa', 'Meningite Bacteriana Nosocomial'],
        es: ['Infecciones multirresistentes severas (Bacterias productoras de BLEE - K. pneumoniae, E. coli)', 'Sepsis Intraabdominal hospitalaria compleja', 'Meningitis Bacteriana Nosocomial']
      },
      commercialNames: { br: ['Merrem'], ar: ['Meronem'] },
      presentation: { pt: ['Frasco-ampola liofilizado 500 mg, 1 g'], es: ['Vial liofilizado 500 mg, 1 g'] },
      mechanism: {
        pt: 'O "tanque de guerra" da UTI. Possui uma blindagem molecular que as beta-lactamases comuns (e ESBL) não conseguem penetrar nem quebrar. Liga-se às PBPs de forma fulminante causando explosão (lise) das bactérias resistentes. Cobre maravilhosamente Gram-positivos, Gram-negativos e Anaeróbios, INCLUINDO Pseudomonas. Não cobre MRSA, e hoje sofre a ameaça das superbactérias produtoras de KPC (Klebsiella Pneumoniae Carbapenemase).',
        es: 'El "tanque de guerra" de la UCI. Posee un blindaje molecular que las betalactamasas comunes (y BLEE) no logran penetrar ni romper. Se une a las PBPs de forma fulminante causando lisis de las bacterias resistentes. Cubre maravillosamente Gram-positivos, Gram-negativos y Anaerobios, INCLUYENDO Pseudomonas. No cubre MRSA, y hoy sufre la amenaza de las superbacterias productoras de KPC (Carbapenemasa).'
      },
      dose: {
        adult: {
          pt: 'Geral e Sepse: 1 g IV a cada 8 horas (Infusão prolongada de 3 horas). Meningite: 2 g IV a cada 8 horas.',
          es: 'General y Sepsis: 1 g IV cada 8 horas (Infusión prolongada de 3 horas). Meningitis: 2 g IV cada 8 horas.'
        },
        pediatric: {
          pt: '20 a 40 mg/kg IV a cada 8 horas (Máx 2 g por dose na meningite).',
          es: '20 a 40 mg/kg IV cada 8 horas (Máx 2 g por dosis en meningitis).'
        }
      },
      administration: { pt: ['Padrão Ouro em UTI: Infusão contínua Estendida (fazer a bolsa gotejar lentamente em 3 horas). Garante taxa de morte bacteriana otimizada e supera resistência leve de Pseudomonas.'], es: ['Patrón Oro en UCI: Infusión continua Extendida (hacer gotear lentamente en 3 horas). Garantiza tasa de muerte bacteriana optimizada y supera resistencia leve de Pseudomonas.'] },
      renalAdjustment: { required: true, message: { pt: 'Altamente retido na DRC. ClCr 26-50: 1g 12/12h. ClCr 10-25: 500mg 12/12h. ClCr < 10: 500mg 24/24h.', es: 'Altamente retenido en ERC. ClCr 26-50: 1g 12/12h. ClCr 10-25: 500mg 12/12h. ClCr < 10: 500mg 24/24h.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste clínico.', es: 'Sin necesidad de ajuste clínico.' } },
      commonAdverseEffects: { pt: ['Diarreia', 'Erupção cutânea maculopapular leve', 'Cefaleia e Náuseas'], es: ['Diarrea', 'Erupción cutánea maculopapular leve', 'Cefalea y Náuseas'] },
      dangerousAdverseEffects: { pt: ['Convulsões e rebaixamento do limiar epiléptico (muito menor risco do que o Imipenem, mas ainda real nas altas doses para Meningite)', 'Colite grave por C. difficile'], es: ['Convulsiones y disminución del umbral epiléptico (mucho menor riesgo que el Imipenem, pero aún real en altas dosis para Meningitis)', 'Colitis grave por C. difficile'] },
      contraindications: {
        absolute: { pt: ['Histórico de reações alérgicas anafiláticas aos Carbapenêmicos ou Penicilinas'], es: ['Historial de reacciones alérgicas anafilácticas a los Carbapenémicos o Penicilinas'] },
        relative: { pt: ['Status epilepticus recente ou não controlado'], es: ['Status epilepticus reciente o no controlado'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'Evite prescrever Meropenem "só por segurança" em infecções leves (escalonamento sem critério). O uso indiscriminado desta medicação criou a superbactéria KPC, que varreu as UTIs da década matando milhares por não ter mais antibióticos viáveis de resgate até anos recentes.', es: 'Evite prescribir Meropenem "solo por seguridad" en infecciones leves (escalamiento sin criterio). El uso indiscriminado creó la superbacteria KPC, que barrió las UCIs matando a miles por no tener antibióticos de rescate.' }
      }
    },

/* ── VANCOMICINA ────────────────────────────────────────────────────── */
    "vancomicina": {
      name: { pt: 'Vancomicina', es: 'Vancomicina' },
      category: 'infectologia',
      class: { pt: 'Antibiótico Glicopeptídeo', es: 'Antibiótico Glucopéptido' },
      indications: {
        pt: ['Ouro padrão contra MRSA (Staphylococcus aureus Resistente à Meticilina): Sepse, Endocardite, Pneumonia Hospitalar', 'Infecção severa por Clostridioides difficile (EXCLUSIVAMENTE USO ORAL)'],
        es: ['Oro patrón contra MRSA (Staphylococcus aureus Resistente a la Meticilina): Sepsis, Endocarditis, Neumonía Hospitalaria', 'Infección severa por Clostridioides difficile (EXCLUSIVAMENTE USO ORAL)']
      },
      commercialNames: { br: ['Vancocina', 'Vancocin'], ar: ['Vancocina'] },
      presentation: { pt: ['Frasco-ampola IV liofilizado 500 mg, 1 g'], es: ['Vial IV liofilizado 500 mg, 1 g'] },
      mechanism: {
        pt: 'Molécula gigante (parece um "tijolo"). Ela se prende violentamente à terminação "D-alanil-D-alanina" dos blocos de construção da parede celular da bactéria Gram-positiva. Como o tijolo está ali, as enzimas da bactéria não conseguem terminar de montar a parede. Sem parede, a pressão da água arrebenta a bactéria. Cobre quase todos os cocos Gram-positivos. (Zero ação em Gram-negativos).',
        es: 'Molécula gigante (parece un "ladrillo"). Se une violentamente a la terminación "D-alanil-D-alanina" de los bloques de construcción de la pared celular de la bacteria Gram-positiva. Como el ladrillo está allí, las enzimas no logran terminar la pared. Sin pared, la presión del agua revienta la bacteria. Cubre casi todos los cocos Gram-positivos. (Cero acción en Gram-negativos).'
      },
      dose: {
        adult: {
          pt: 'Dose IV (Sistêmica): 15 a 20 mg/kg a cada 12 horas ou 8 horas. Dose Oral (para C. difficile): 125 mg VO a cada 6 horas por 10 dias.',
          es: 'Dosis IV (Sistémica): 15 a 20 mg/kg cada 12 horas u 8 horas. Dosis Oral (para C. difficile): 125 mg VO cada 6 horas por 10 días.'
        },
        pediatric: {
          pt: '15 mg/kg IV a cada 6h (As crianças metabolizam vancomicina muito mais rápido que os adultos).',
          es: '15 mg/kg IV cada 6h (Los niños metabolizan vancomicina mucho más rápido que los adultos).'
        }
      },
      administration: { pt: ['DILUIÇÃO ABUNDANTE e INFUSÃO LENTA: Máximo de 10 mg por minuto. (Uma bolsa de 1g DEVE correr em pelo menos 1 a 2 horas).', 'Via Intramuscular PROIBIDA (causa necrose). Via Oral só tem efeito no intestino, não cura pneumonia.'], es: ['DILUCIÓN ABUNDANTE e INFUSIÓN LENTA: Máximo de 10 mg por minuto. (Una bolsa de 1g DEBE correr en al menos 1 a 2 horas).', 'Vía Intramuscular PROHIBIDA (causa necrosis). Vía Oral solo tiene efecto en el intestino, no cura neumonía.'] },
      renalAdjustment: { required: true, message: { pt: 'Puramente renal. ClCr 20-49: Aumentar intervalo para 24h. ClCr < 20 (ou diálise): Dose de ataque fixa baseada no nível sanguíneo, e redosada apenas quando o nível cai após a diálise.', es: 'Puramente renal. ClCr 20-49: Aumentar intervalo a 24h. ClCr < 20 (o diálisis): Dosis de ataque fija basada en el nivel sanguíneo, y redosada solo cuando el nivel cae tras diálisis.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Flebite severa no acesso venoso periférico', 'Hipotensão transitória', 'Calafrios'], es: ['Flebitis severa en el acceso venoso periférico', 'Hipotensión transitoria', 'Escalofríos'] },
      dangerousAdverseEffects: { pt: ['NEFROTOXICIDADE GRAVE (Mata os rins, exige dosagem do nível da droga no sangue - Vancocidemia Trough - de 15 a 20 mcg/mL)', 'Síndrome da Infusão da Vancomicina (antiga Síndrome do Homem Vermelho)', 'Ototoxicidade (Surdez/Zumbido)'], es: ['NEFROTOXICIDAD GRAVE (Mata los riñones, exige dosificación del nivel de droga en sangre de 15 a 20 mcg/mL)', 'Síndrome de Infusión de la Vancomicina (antiguo Síndrome del Hombre Rojo)', 'Ototoxicidad (Sordera/Zumbido)'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade documentada extrema'], es: ['Hipersensibilidad documentada extrema'] },
        relative: { pt: ['Pacientes já em Insuficiência Renal Aguda grave (considerar Linezolida ou Daptomicina se possível)'], es: ['Pacientes ya en Insuficiencia Renal Aguda grave (considerar Linezolid o Daptomicina si es posible)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A Síndrome do Homem Vermelho NÃO É ALERGIA: Se a enfermagem pendurar a Vancomicina e deixar correr em 15 minutos, a droga "explode" os mastócitos do corpo inteiro do paciente. Ele fica vermelho rubi, incha, o pescoço coça e a pressão cai a zero (liberação massiva de histamina). O tratamento é PARAR a bomba, dar Difenidramina e voltar a infusão bem devagar.', es: 'El Síndrome del Hombre Rojo NO ES ALERGIA: Si la enfermería cuelga la Vancomicina y la deja correr en 15 minutos, la droga "explota" los mastocitos del cuerpo. El paciente se pone rojo rubí, se hincha y la presión cae a cero (liberación masiva de histamina). El tratamiento es PARAR la bomba, dar Difenhidramina y volver a infundir muy despacio.' }
      }
    },

/* ── BUILD 403 — Infectologia Antifúngica ── */

/* ── CETOCONAZOL ORAL ───────────────────────────────────────────────── */
    "cetoconazol_oral": {
      id: 'cetoconazol_oral',
      name: { pt: 'Cetoconazol Oral', es: 'Ketoconazol Oral' },
      category: 'infectologia',
      class: { pt: 'Antifúngico Sistêmico (Derivado Imidazólico)', es: 'Antifúngico Sistémico (Derivado Imidazólico)' },
      indications: {
        pt: ['Infecções fúngicas sistêmicas graves QUANDO as outras terapias falharam (Uso muito restrito pela toxicidade)', 'Off-label: Síndrome de Cushing severa para suprimir a produção de cortisol na adrenal', 'Câncer de Próstata avançado (castração química adjuvante)'],
        es: ['Infecciones fúngicas sistémicas graves CUANDO las otras terapias fallaron (Uso muy restringido por la toxicidad)', 'Off-label: Síndrome de Cushing severo para suprimir producción de cortisol', 'Cáncer de Próstata avanzado (castración química adyuvante)']
      },
      commercialNames: { br: ['Nizoral (Apenas comprimido)'], ar: ['Ketoconazol'] },
      presentation: { pt: ['Comprimidos 200 mg'], es: ['Comprimidos 200 mg'] },
      mechanism: {
        pt: 'Uma bomba enzimática não-seletiva. Destrói o fungo inibindo a enzima 14-alfa-desmetilase, bloqueando a criação do ergosterol (parede da célula do fungo). O GRANDE PERIGO: Diferente dos azóis modernos (Fluconazol), o Cetoconazol humano destrói e inibe dezenas de enzimas do paciente, incluindo o citocromo P450 (CYP3A4) no fígado e as enzimas adrenais que fabricam Testosterona e Cortisol.',
        es: 'Una bomba enzimática no selectiva. Destruye el hongo inhibiendo la enzima 14-alfa-desmetilasa. EL GRAN PELIGRO: A diferencia del Fluconazol, el Ketoconazol humano destruye e inhibe decenas de enzimas del paciente, incluyendo el CYP3A4 en el hígado y las enzimas que fabrican Testosterona y Cortisol.'
      },
      dose: {
        adult: {
          pt: 'Micoses: 200 a 400 mg UMA VEZ ao dia. Síndrome de Cushing: Doses altíssimas sob rigoroso acompanhamento endócrino (600 a 1200 mg/dia).',
          es: 'Micosis: 200 a 400 mg UNA VEZ al día. Síndrome de Cushing: Dosis altísimas bajo riguroso acompañamiento endocrino (600 a 1200 mg/día).'
        },
        pediatric: {
          pt: 'Não recomendado rotineiramente por hepatotoxicidade letal.',
          es: 'No recomendado rutinariamente por hepatotoxicidad letal.'
        }
      },
      administration: { pt: ['EXIGE ÁCIDO NO ESTÔMAGO. Deve ser tomado com uma refeição pesada ou com refrigerante de cola (Coca-Cola) para dissolver a pílula. Antiácidos anulam 100% da droga.'], es: ['EXIGE ÁCIDO EN EL ESTÓMAGO. Debe ser tomado con una comida pesada o bebida de cola para disolver la píldora. Los antiácidos anulan 100% la droga.'] },
      renalAdjustment: { required: false, message: { pt: 'Excretado massivamente pela bile e fezes, sem ajuste renal.', es: 'Excretado masivamente por bilis y heces, sin ajuste renal.' } },
      hepaticAdjustment: { required: true, message: { pt: 'CONTRAINDICADO em insuficiência hepática. É uma das drogas mais hepatotóxicas da medicina.', es: 'CONTRAINDICADO en insuficiencia hepática. Es una de las drogas más hepatotóxicas de la medicina.' } },
      commonAdverseEffects: { pt: ['Náuseas severas e vômitos', 'Ginecomastia (Crescimento de mamas no homem) e Impotência sexual', 'Irregularidade menstrual nas mulheres'], es: ['Náuseas severas y vómitos', 'Ginecomastia (Crecimiento de mamas en el hombre) e Impotencia sexual', 'Irregularidad menstrual en mujeres'] },
      dangerousAdverseEffects: { pt: ['Hepatite Fulminante Letal (Pode ocorrer nos primeiros dias e exigir transplante de fígado)', 'Insuficiência Adrenal Aguda (Morte por choque por falta de cortisol)', 'Prolongamento fatal do QT (Torsades de Pointes)'], es: ['Hepatitis Fulminante Letal (Puede ocurrir en los primeros días y exigir trasplante)', 'Insuficiencia Adrenal Aguda (Muerte por choque por falta de cortisol)', 'Prolongación fatal del QT (Torsades de Pointes)'] },
      contraindications: {
        absolute: { pt: ['Doença hepática ativa ou enzimas elevadas', 'Co-administração com estatinas, cisaprida, metadona e dezenas de outros (ver interações)'], es: ['Enfermedad hepática activa o enzimas elevadas', 'Coadministración con estatinas, metadona y decenas de otros'] },
        relative: { pt: ['Acloridria (Ausência de ácido no estômago)'], es: ['Aclorhidria (Ausencia de ácido en el estómago)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'ALERTA MUNDIAL FDA/EMA: O Cetoconazol oral foi banido da Europa e teve indicação duramente restrita nos EUA para fungos de unha ou pele. O risco de o paciente morrer de hepatite ou arritmia é absurdamente maior do que o benefício de tratar uma micose superficial. Use Terbinafina ou Itraconazol.', es: 'ALERTA MUNDIAL FDA/EMA: El Ketoconazol oral fue prohibido en Europa y restringido duramente en EE.UU. El riesgo de morir de hepatitis o arritmia es absurdamente mayor que el beneficio de tratar una micosis. Use Terbinafina o Itraconazol.' }
      }
    }

  }); /* fim Object.assign INFECTOLOGIA_DRUGS_DB — BUILD 403 (cetoconazol_oral) */

})();
