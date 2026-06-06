/* ============================================================
   MedCases Pro — Módulo: ANTIMICROBIANOS
   Expõe: window.ANTIMICROBIANOS_DRUGS_DB
   Schema completo (4-Block UI):
   {
     id, name, class, category:{pt,es}, color, colorTxt, icon,
     safetyLevel: 'warn' | 'danger'
     dose(patientData, lang) → { dose, freq, via, adj, duration, note }
     renalTable?: [ { labelPt, labelEs, range, cls, adjPt, adjEs } ]
     safety: {
       pt: [ { icon:'warn'|'info'|'ok'|'danger', text:'...' }, ... ],
       es: [ { icon, text } ]
     }
     interactions: {
       critical: {
         pt: [ { drug:'Nome', desc:'Mecanismo/risco' }, ... ],
         es: [ { drug, desc } ]
       },
       severe: {
         pt: [ { drug, desc } ],
         es: [ { drug, desc } ]
       }
     }
   }
   Regras:
   - Sempre suportar lang === 'pt' e lang === 'es'
   - result.adj: ⚠️ para alertas de ajuste renal graves
   - patientData: { age, sex, weight, height, creatinine, bsa, clcr, imc, pesoIdeal, tfg }
============================================================ */

window.ANTIMICROBIANOS_DRUGS_DB = [

  /* ══════════════════════════════════════════════════════════════
     1. AMOXICILINA
  ══════════════════════════════════════════════════════════════ */
  {
    id: 'amox',
    name: 'Amoxicilina',
    class: 'Antibiótico β-lactâmico',
    category: { pt: 'Antimicrobianos', es: 'Antimicrobianos' },
    color: 'rgba(34,200,122,0.15)',
    colorTxt: '#22C87A',
    icon: '💊',
    safetyLevel: 'warn',

    dose(p, lang = 'pt') {
      const clcr = p.clcr ?? 90;
      const isES = lang === 'es';
      let dose = '500–1000 mg', freq = '8/8h', via = 'VO', adj = '';
      if (clcr < 10) {
        dose = '250 mg'; freq = '24/24h';
        adj = isES
          ? '⚠️ ClCr < 10: dosis mínima, evaluar necesidad de diálisis.'
          : '⚠️ ClCr < 10: dose mínima, avaliar necessidade de diálise.';
      } else if (clcr < 30) {
        dose = '250–500 mg'; freq = '12/12h';
        adj = isES
          ? 'ClCr < 30: reducir dosis e incrementar intervalo.'
          : 'ClCr < 30: reduzir dose e aumentar intervalo.';
      }
      return {
        dose, freq, via, adj,
        duration: isES ? '5–10 días' : '5–10 dias',
        note: isES
          ? 'Tomar con o sin alimentos. Infecciones graves: hasta 3 g/día.'
          : 'Tomar com ou sem alimentos. Infecções graves: até 3 g/dia.'
      };
    },

    renalTable: [
      { labelPt: 'Normal',        labelEs: 'Normal',        range: '≥ 60 mL/min',  cls: 'ckd-g1',  adjPt: 'Dose padrão',        adjEs: 'Dosis estándar'     },
      { labelPt: 'Moderada',      labelEs: 'Moderada',      range: '30–59 mL/min', cls: 'ckd-g3a', adjPt: 'Dose padrão',        adjEs: 'Dosis estándar'     },
      { labelPt: 'Grave',         labelEs: 'Grave',         range: '10–29 mL/min', cls: 'ckd-g4',  adjPt: '↓ 250–500mg 12/12h', adjEs: '↓ 250–500mg 12/12h' },
      { labelPt: 'Muito Grave/D.',labelEs: 'Muy Grave/D.',  range: '< 10 mL/min',  cls: 'ckd-g5',  adjPt: '↓↓ 250mg 24/24h',   adjEs: '↓↓ 250mg 24/24h'   }
    ],

    safety: {
      pt: [
        { icon: 'info',   text: 'Rash maculopapular em 5–10% dos pacientes — distinto de alergia IgE-mediada.' },
        { icon: 'warn',   text: 'Histórico de alergia a penicilinas: avaliar uso de cefalosporina alternativa.' },
        { icon: 'info',   text: 'Monitorar função hepática em tratamentos prolongados (> 10 dias).' },
        { icon: 'ok',     text: 'Diluição IV: SF 0,9% ou SG 5% — infundir em 30–60 min.' }
      ],
      es: [
        { icon: 'info',   text: 'Rash maculopapular en 5–10% de los pacientes — distinto de alergia IgE-mediada.' },
        { icon: 'warn',   text: 'Antecedentes de alergia a penicilinas: evaluar uso de cefalosporina alternativa.' },
        { icon: 'info',   text: 'Monitorear función hepática en tratamientos prolongados (> 10 días).' },
        { icon: 'ok',     text: 'Dilución IV: SF 0,9% o SG 5% — infundir en 30–60 min.' }
      ]
    },

    interactions: {
      critical: {
        pt: [
          { drug: 'Metotrexato', desc: 'β-lactâmicos reduzem excreção renal do metotrexato → toxicidade grave (mucosites, mielossupressão).' }
        ],
        es: [
          { drug: 'Metotrexato', desc: 'β-lactámicos reducen la excreción renal del metotrexato → toxicidad grave (mucositis, mielosupresión).' }
        ]
      },
      severe: {
        pt: [
          { drug: 'Anticoagulantes orais', desc: 'Pode potencializar efeito anticoagulante por alteração da flora intestinal produtora de vitamina K.' },
          { drug: 'Contraceptivos orais',  desc: 'Possível redução da eficácia por alteração da flora intestinal. Orientar método adicional.' }
        ],
        es: [
          { drug: 'Anticoagulantes orales', desc: 'Puede potenciar el efecto anticoagulante por alteración de la flora intestinal productora de vitamina K.' },
          { drug: 'Anticonceptivos orales', desc: 'Posible reducción de la eficacia por alteración de la flora intestinal. Orientar método adicional.' }
        ]
      }
    }
  },

  /* ══════════════════════════════════════════════════════════════
     2. AMOXICILINA + CLAVULANATO
  ══════════════════════════════════════════════════════════════ */
  {
    id: 'amoxclav',
    name: 'Amox + Clavulanato',
    class: 'β-lactâmico + Inibidor β-lactamase',
    category: { pt: 'Antimicrobianos', es: 'Antimicrobianos' },
    color: 'rgba(34,200,122,0.15)',
    colorTxt: '#22C87A',
    icon: '💊',
    safetyLevel: 'warn',

    dose(p, lang = 'pt') {
      const clcr = p.clcr ?? 90;
      const isES = lang === 'es';
      let dose = '875/125 mg', freq = '12/12h', via = 'VO', adj = '';
      if (clcr < 10) {
        dose = '250/125 mg'; freq = '24/24h';
        adj = isES
          ? '⚠️ Hemodiálisis: administrar dosis extra tras cada sesión.'
          : '⚠️ Hemodiálise: dose extra após cada sessão.';
      } else if (clcr < 30) {
        dose = '500/125 mg'; freq = '12/12h';
        adj = isES
          ? 'ClCr < 30: evitar formulación de 875 mg (exceso de clavulanato).'
          : 'ClCr < 30: evitar formulação 875 mg (excesso de clavulanato).';
      }
      return {
        dose, freq, via, adj,
        duration: isES ? '5–14 días' : '5–14 dias',
        note: isES
          ? 'Tomar con alimentos para reducir intolerancia GI. Mayor espectro que amoxicilina aislada.'
          : 'Tomar com refeições para reduzir intolerância GI. Espectro ampliado contra β-lactamases.'
      };
    },

    renalTable: [
      { labelPt: 'Normal',        labelEs: 'Normal',       range: '≥ 30 mL/min',  cls: 'ckd-g1',  adjPt: '875/125mg 12/12h', adjEs: '875/125mg 12/12h' },
      { labelPt: 'Moderada',      labelEs: 'Moderada',     range: '10–29 mL/min', cls: 'ckd-g4',  adjPt: '500/125mg 12/12h', adjEs: '500/125mg 12/12h' },
      { labelPt: 'Muito Grave/D.',labelEs: 'Muy Grave/D.', range: '< 10 mL/min',  cls: 'ckd-g5',  adjPt: '↓↓ 250/125mg 24h', adjEs: '↓↓ 250/125mg 24h' },
      { labelPt: 'Hemodiálise',   labelEs: 'Hemodiálisis', range: 'HD',            cls: 'ckd-g5',  adjPt: '+ dose extra pós-HD', adjEs: '+ dosis extra pos-HD' }
    ],

    safety: {
      pt: [
        { icon: 'danger', text: 'Hepatotoxicidade colestática: risco 6× maior que amoxicilina isolada. Monitorar TGO/TGP se > 14 dias.' },
        { icon: 'warn',   text: 'Diarreia associada a C. difficile: suspender e avaliar tratamento se diarreia grave.' },
        { icon: 'info',   text: 'Formulação IV (Timentin®): reconstituir em AD, diluir em SF 0,9%, infundir em 30 min.' },
        { icon: 'ok',     text: 'Formulação 400/57mg/5mL pediátrica: calcular dose pelo componente amoxicilina.' }
      ],
      es: [
        { icon: 'danger', text: 'Hepatotoxicidad colestásica: riesgo 6× mayor que amoxicilina sola. Monitorear TGO/TGP si > 14 días.' },
        { icon: 'warn',   text: 'Diarrea asociada a C. difficile: suspender y evaluar tratamiento si diarrea grave.' },
        { icon: 'info',   text: 'Formulación IV: reconstituir en agua destilada, diluir en SF 0,9%, infundir en 30 min.' },
        { icon: 'ok',     text: 'Formulación pediátrica 400/57mg/5mL: calcular dosis por el componente amoxicilina.' }
      ]
    },

    interactions: {
      critical: {
        pt: [
          { drug: 'Metotrexato',    desc: 'Redução da excreção renal do MTX → toxicidade hematológica grave. Evitar combinação.' },
          { drug: 'Warfarina',      desc: 'Potencialização do efeito anticoagulante. Monitorar INR diariamente no início do antibiótico.' }
        ],
        es: [
          { drug: 'Metotrexato',    desc: 'Reducción de la excreción renal del MTX → toxicidad hematológica grave. Evitar combinación.' },
          { drug: 'Warfarina',      desc: 'Potenciación del efecto anticoagulante. Monitorar INR diariamente al inicio del antibiótico.' }
        ]
      },
      severe: {
        pt: [
          { drug: 'Contraceptivos hormonais', desc: 'Possível redução da eficácia. Recomendado método contraceptivo adicional.' },
          { drug: 'Alopurinol',               desc: 'Aumento do risco de rash cutâneo (até 22%). Monitorar.' }
        ],
        es: [
          { drug: 'Anticonceptivos hormonales', desc: 'Posible reducción de la eficacia. Recomendar método anticonceptivo adicional.' },
          { drug: 'Alopurinol',                 desc: 'Aumento del riesgo de erupción cutánea (hasta 22%). Monitorear.' }
        ]
      }
    }
  },

  /* ══════════════════════════════════════════════════════════════
     3. CEFTRIAXONA
  ══════════════════════════════════════════════════════════════ */
  {
    id: 'ceftriaxona',
    name: 'Ceftriaxona',
    class: 'Cefalosporina 3ª Geração',
    category: { pt: 'Antimicrobianos', es: 'Antimicrobianos' },
    color: 'rgba(34,200,122,0.15)',
    colorTxt: '#22C87A',
    icon: '💉',
    safetyLevel: 'warn',

    dose(p, lang = 'pt') {
      const clcr = p.clcr ?? 90;
      const isES = lang === 'es';
      let dose = '1–2 g', freq = '24/24h', via = 'IV/IM', adj = '';
      if (clcr < 10) {
        adj = isES
          ? '⚠️ Não exceder 2 g/dia em dialíticos. Sem ajuste usual necessário.'
          : '⚠️ No exceder 2 g/día en dialíticos. Sin ajuste habitual necesario.';
      }
      return {
        dose, freq, via, adj,
        duration: isES ? '7–14 días' : '7–14 dias',
        note: isES
          ? 'Meningitis: 2 g c/12h. Infusión IV en 30 min (no en bolo). Incompatible con Ca²⁺ IV.'
          : 'Meningite: 2 g 12/12h. Infusão IV em 30 min (nunca em bolus). Incompatível com Ca²⁺ IV.'
      };
    },

    renalTable: [
      { labelPt: 'Normal / Leve',  labelEs: 'Normal / Leve',  range: '≥ 10 mL/min', cls: 'ckd-g1',  adjPt: 'Dose padrão (sem ajuste)', adjEs: 'Dosis estándar (sin ajuste)' },
      { labelPt: 'Grave',          labelEs: 'Grave',           range: '< 10 mL/min', cls: 'ckd-g5',  adjPt: 'Máx. 2g/dia (dialítico)',  adjEs: 'Máx. 2g/día (dialítico)'    },
      { labelPt: 'Hep. + Renal',   labelEs: 'Hep. + Renal',   range: 'Combinado',   cls: 'ckd-g5',  adjPt: '⚠️ Máx. 2g/dia + monitor', adjEs: '⚠️ Máx. 2g/día + monitoreo' },
      { labelPt: 'Sem ajuste renal',labelEs: 'Sin ajuste renal',range: 'Geral',      cls: 'ckd-g1',  adjPt: 'Eliminação hepática 50%',   adjEs: 'Eliminación hepática 50%'   }
    ],

    safety: {
      pt: [
        { icon: 'danger', text: 'CONTRAINDICADO em neonatos com hiperbilirrubinemia e em uso com Ca²⁺ IV — precipitado pulmonar fatal.' },
        { icon: 'warn',   text: 'Colelitíase/barro biliar (pseudolitíase): risco em uso prolongado > 10 dias. Monitorar USG se dor abdominal.' },
        { icon: 'info',   text: 'Diluição IV: SF 0,9% ou SG 5%, concentração máx. 40 mg/mL. Infundir em 30 min.' },
        { icon: 'info',   text: 'IM: diluir em lidocaína 1% sem epinefrina para reduzir dor. Volume máx. 1 g por sítio.' },
        { icon: 'ok',     text: 'Não requer ajuste renal rotineiro (eliminação biliar ~50%). Útil em IRA.' }
      ],
      es: [
        { icon: 'danger', text: 'CONTRAINDICADO en neonatos con hiperbilirrubinemia y con Ca²⁺ IV simultáneo — precipitado pulmonar fatal.' },
        { icon: 'warn',   text: 'Colelitiasis/barro biliar (pseudolitiasis): riesgo en uso > 10 días. Monitorear con ecografía si dolor abdominal.' },
        { icon: 'info',   text: 'Dilución IV: SF 0,9% o SG 5%, concentración máx. 40 mg/mL. Infundir en 30 min.' },
        { icon: 'info',   text: 'IM: diluir en lidocaína 1% sin epinefrina para reducir dolor. Volumen máx. 1 g por sitio.' },
        { icon: 'ok',     text: 'No requiere ajuste renal rutinario (eliminación biliar ~50%). Útil en IRA.' }
      ]
    },

    interactions: {
      critical: {
        pt: [
          { drug: 'Cálcio IV (Gluconato/Cloreto)', desc: 'Precipitação intravascular grave → morte relatada em neonatos. Contraindicado concomitante.' }
        ],
        es: [
          { drug: 'Calcio IV (Gluconato/Cloruro)', desc: 'Precipitación intravascular grave → muerte reportada en neonatos. Contraindicado de forma concomitante.' }
        ]
      },
      severe: {
        pt: [
          { drug: 'Varfarina',          desc: 'Potencialização do efeito anticoagulante. Monitorar INR 48h após início.' },
          { drug: 'Aminoglicosídeos',   desc: 'Inativação in vitro se misturados na mesma solução — administrar separados.' },
          { drug: 'Fluconazol',         desc: 'Possível antagonismo in vitro. Avaliar necessidade de associação.' }
        ],
        es: [
          { drug: 'Warfarina',          desc: 'Potenciación del efecto anticoagulante. Monitorear INR 48h después del inicio.' },
          { drug: 'Aminoglucósidos',    desc: 'Inactivación in vitro si se mezclan en la misma solución — administrar por separado.' },
          { drug: 'Fluconazol',         desc: 'Posible antagonismo in vitro. Evaluar necesidad de la asociación.' }
        ]
      }
    }
  },

  /* ══════════════════════════════════════════════════════════════
     4. CIPROFLOXACINO
  ══════════════════════════════════════════════════════════════ */
  {
    id: 'ciproflox',
    name: 'Ciprofloxacino',
    class: 'Fluoroquinolona',
    category: { pt: 'Antimicrobianos', es: 'Antimicrobianos' },
    color: 'rgba(34,200,122,0.15)',
    colorTxt: '#22C87A',
    icon: '💊',
    safetyLevel: 'warn',

    dose(p, lang = 'pt') {
      const clcr = p.clcr ?? 90;
      const isES = lang === 'es';
      let dose = '500–750 mg', freq = '12/12h', via = 'VO', adj = '';
      if (clcr < 10) {
        dose = '250 mg'; freq = '24/24h';
        adj = isES
          ? '⚠️ ClCr < 10: 250 mg 24/24h. Dose extra pós-HD.'
          : '⚠️ ClCr < 10: 250 mg 24/24h. Dosis extra post-HD.';
      } else if (clcr < 30) {
        dose = '250–500 mg'; freq = '12/12h';
        adj = isES
          ? 'ClCr 10–29: reducir a la mitad de la dosis normal.'
          : 'ClCr 10–29: metade da dose normal.';
      }
      return {
        dose, freq, via, adj,
        duration: isES ? '7–14 días' : '7–14 dias',
        note: isES
          ? 'IV: 400 mg c/12h en 60 min. Evitar con antiácidos, lácteos y cationes divalentes.'
          : 'IV: 400 mg 12/12h em 60 min. Evitar com antiácidos, laticínios e cátions divalentes.'
      };
    },

    renalTable: [
      { labelPt: 'Normal',        labelEs: 'Normal',       range: '≥ 50 mL/min', cls: 'ckd-g1',  adjPt: '500–750mg VO 12/12h',  adjEs: '500–750mg VO 12/12h'  },
      { labelPt: 'Leve-Moderada', labelEs: 'Leve-Mod.',   range: '30–49 mL/min', cls: 'ckd-g3a', adjPt: '250–500mg VO 12/12h',  adjEs: '250–500mg VO 12/12h'  },
      { labelPt: 'Grave',         labelEs: 'Grave',        range: '10–29 mL/min', cls: 'ckd-g4',  adjPt: '↓ 250–500mg 24/24h',   adjEs: '↓ 250–500mg 24/24h'   },
      { labelPt: 'Muito Grave/D.',labelEs: 'Muy Grave/D.', range: '< 10 mL/min',  cls: 'ckd-g5',  adjPt: '↓↓ 250mg 24/24h + HD', adjEs: '↓↓ 250mg 24/24h + HD' }
    ],

    safety: {
      pt: [
        { icon: 'danger', text: 'Ruptura e tendinite de tendão de Aquiles — risco elevado em ≥ 60 anos, uso de corticoides, insuficiência renal.' },
        { icon: 'danger', text: 'Prolongamento do QT: monitorar ECG em uso concomitante com antiarrítmicos ou histórico cardíaco.' },
        { icon: 'warn',   text: 'Neuropatia periférica: suspender imediatamente se parestesias, dor ou fraqueza nos membros.' },
        { icon: 'warn',   text: 'Fotossensibilidade: orientar proteção solar durante e até 2 dias após término.' },
        { icon: 'info',   text: 'Diluição IV: SF 0,9% ou SG 5%, 400mg em 250mL. Infundir em 60 min (nunca em bolus).' },
        { icon: 'ok',     text: 'Absorção VO excelente (70–80%); troca VO→IV somente se necessário.' }
      ],
      es: [
        { icon: 'danger', text: 'Ruptura y tendinitis del tendón de Aquiles — riesgo elevado en ≥ 60 años, uso de corticoides, insuficiencia renal.' },
        { icon: 'danger', text: 'Prolongación del QT: monitorear ECG con antiarrítmicos o antecedentes cardíacos.' },
        { icon: 'warn',   text: 'Neuropatía periférica: suspender de inmediato si parestesias, dolor o debilidad en extremidades.' },
        { icon: 'warn',   text: 'Fotosensibilidad: orientar protección solar durante y hasta 2 días después del tratamiento.' },
        { icon: 'info',   text: 'Dilución IV: SF 0,9% o SG 5%, 400mg en 250mL. Infundir en 60 min (nunca en bolo).' },
        { icon: 'ok',     text: 'Absorción VO excelente (70–80%); cambio VO→IV solo si necesario.' }
      ]
    },

    interactions: {
      critical: {
        pt: [
          { drug: 'Tizanidina',   desc: 'Inibição do CYP1A2 → elevação plasmática 10× da tizanidina → hipotensão grave e sedação. CONTRAINDICADO.' },
          { drug: 'Antiarrítmicos (amiodarona, sotalol)', desc: 'Sinergismo no prolongamento do QT → risco de Torsades de Pointes e FV.' }
        ],
        es: [
          { drug: 'Tizanidina',   desc: 'Inhibición del CYP1A2 → elevación plasmática 10× de tizanidina → hipotensión grave y sedación. CONTRAINDICADO.' },
          { drug: 'Antiarrítmicos (amiodarona, sotalol)', desc: 'Sinergia en prolongación del QT → riesgo de Torsades de Pointes y FV.' }
        ]
      },
      severe: {
        pt: [
          { drug: 'Varfarina',    desc: 'Inibição do CYP1A2 → INR elevado. Monitorar INR 48h após início e ao término.' },
          { drug: 'Antiácidos (Al, Mg, Ca)', desc: 'Quelação → redução de até 90% da absorção oral. Intervalo mínimo de 2h.' },
          { drug: 'Metformina',   desc: 'Pode aumentar exposição à metformina; monitorar glicemia e sinais de acidose.' },
          { drug: 'Fenitoína',    desc: 'Alteração bidirecional dos níveis: monitorar concentrações de fenitoína.' }
        ],
        es: [
          { drug: 'Warfarina',    desc: 'Inhibición del CYP1A2 → INR elevado. Monitorear INR 48h tras inicio y al terminar.' },
          { drug: 'Antiácidos (Al, Mg, Ca)', desc: 'Quelación → reducción de hasta 90% de la absorción oral. Intervalo mínimo de 2h.' },
          { drug: 'Metformina',   desc: 'Puede aumentar exposición a metformina; monitorear glucemia y signos de acidosis.' },
          { drug: 'Fenitoína',    desc: 'Alteración bidireccional de los niveles: monitorear concentraciones de fenitoína.' }
        ]
      }
    }
  },

  /* ══════════════════════════════════════════════════════════════
     5. METRONIDAZOL
  ══════════════════════════════════════════════════════════════ */
  {
    id: 'metronidazol',
    name: 'Metronidazol',
    class: 'Nitroimidazol',
    category: { pt: 'Antimicrobianos', es: 'Antimicrobianos' },
    color: 'rgba(34,200,122,0.15)',
    colorTxt: '#22C87A',
    icon: '💊',
    safetyLevel: 'warn',

    dose(p, lang = 'pt') {
      const isES = lang === 'es';
      return {
        dose: '500 mg', freq: '8/8h', via: 'VO/IV',
        adj: isES
          ? 'Hepatopatía grave (Child-Pugh C): reducir dosis al 50%, monitorar EH.'
          : 'Hepatopatia grave (Child-Pugh C): reduzir dose em 50%, monitorar EH.',
        duration: isES ? '7–14 días' : '7–14 dias',
        note: isES
          ? 'Evitar alcohol durante el tratamiento y 48h después (efecto antabuse). IV: infundir en 30–60 min.'
          : 'Evitar álcool durante e 48h após uso (efeito antabuse). IV: infusão em 30–60 min.'
      };
    },

    renalTable: [
      { labelPt: 'Normal / Leve-Mod.', labelEs: 'Normal / Leve-Mod.', range: '≥ 10 mL/min', cls: 'ckd-g1',  adjPt: 'Sem ajuste',          adjEs: 'Sin ajuste'           },
      { labelPt: 'Grave / Diálise',    labelEs: 'Grave / Diálisis',   range: '< 10 mL/min', cls: 'ckd-g5',  adjPt: 'Dose extra pós-HD',   adjEs: 'Dosis extra pos-HD'  },
      { labelPt: 'Hepatopatia Grave',  labelEs: 'Hepatopatía Grave',  range: 'Child-Pugh C', cls: 'ckd-g4',  adjPt: '↓ 50% + monitorar',   adjEs: '↓ 50% + monitoreo'   },
      { labelPt: 'Uso Geral',          labelEs: 'Uso General',        range: 'Todas',         cls: 'ckd-g2',  adjPt: 'Ajuste hepático, não renal', adjEs: 'Ajuste hepático, no renal' }
    ],

    safety: {
      pt: [
        { icon: 'danger', text: 'Efeito antabuse: álcool + metronidazol → rubor, vômitos, taquicardia, hipotensão. Proibir durante e 48h após.' },
        { icon: 'warn',   text: 'Neurotoxicidade em altas doses ou uso prolongado: encefalopatia, neuropatia periférica, convulsões.' },
        { icon: 'warn',   text: 'Monitorar sintomas GI: náuseas, gosto metálico na boca são comuns; não interromper por isso.' },
        { icon: 'info',   text: 'IV: diluir em SF 0,9%, SG 5% ou Ringer — concentração máx. 5 mg/mL. Infundir em 30–60 min.' },
        { icon: 'ok',     text: 'Excelente penetração em abscessos, SNC e tecidos anaeróbios. Cobertura anaeróbia de eleição.' }
      ],
      es: [
        { icon: 'danger', text: 'Efecto antabuse: alcohol + metronidazol → rubor, vómitos, taquicardia, hipotensión. Prohibir durante y 48h después.' },
        { icon: 'warn',   text: 'Neurotoxicidad a altas dosis o uso prolongado: encefalopatía, neuropatía periférica, convulsiones.' },
        { icon: 'warn',   text: 'Monitorear síntomas GI: náuseas, sabor metálico son comunes; no interrumpir por eso.' },
        { icon: 'info',   text: 'IV: diluir en SF 0,9%, SG 5% o Ringer — concentración máx. 5 mg/mL. Infundir en 30–60 min.' },
        { icon: 'ok',     text: 'Excelente penetración en abscesos, SNC y tejidos anaerobios. Cobertura anaerobia de elección.' }
      ]
    },

    interactions: {
      critical: {
        pt: [
          { drug: 'Álcool etílico', desc: 'Reação tipo dissulfiram (antabuse): rubor, taquicardia, vômitos, hipotensão. Contraindicado.' },
          { drug: 'Dissulfiram',    desc: 'Psicose aguda e estado confusional documentados. Intervalo mínimo de 2 semanas após dissulfiram.' }
        ],
        es: [
          { drug: 'Alcohol etílico', desc: 'Reacción tipo disulfiram (antabuse): rubor, taquicardia, vómitos, hipotensión. Contraindicado.' },
          { drug: 'Disulfiram',      desc: 'Psicosis aguda y estado confusional documentados. Intervalo mínimo de 2 semanas tras disulfiram.' }
        ]
      },
      severe: {
        pt: [
          { drug: 'Varfarina',   desc: 'Inibição do CYP2C9 → INR até 3–4× aumentado. Monitorar INR a cada 48h e reduzir dose de varfarina.' },
          { drug: 'Lítio',       desc: 'Redução do clearance renal do lítio → toxicidade. Monitorar litemias.' },
          { drug: 'Bussulfano',  desc: 'Risco de toxicidade neurológica grave por inibição do metabolismo. Evitar associação.' },
          { drug: 'Fenitoína',   desc: 'Aumento dos níveis de fenitoína por inibição do CYP2C9. Monitorar concentrações.' }
        ],
        es: [
          { drug: 'Warfarina',   desc: 'Inhibición del CYP2C9 → INR hasta 3–4× aumentado. Monitorear INR cada 48h y reducir dosis de warfarina.' },
          { drug: 'Litio',       desc: 'Reducción del clearance renal del litio → toxicidad. Monitorear litemias.' },
          { drug: 'Busulfán',    desc: 'Riesgo de toxicidad neurológica grave por inhibición del metabolismo. Evitar asociación.' },
          { drug: 'Fenitoína',   desc: 'Aumento de los niveles de fenitoína por inhibición del CYP2C9. Monitorear concentraciones.' }
        ]
      }
    }
  }

]; /* fim ANTIMICROBIANOS_DRUGS_DB */
