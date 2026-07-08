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
