/* ============================================================
   MedCases Pro — Módulo: ENDOCRINOLOGIA
   Expõe: window.ENDOCRINO_DRUGS_DB
============================================================ */

window.ENDOCRINO_DRUGS_DB = [

  {
    id: 'insulina-r',
    name: 'Insulina Regular',
    class: 'Insulina bolus / correção',
    category: { pt: 'Endocrinologia', es: 'Endocrinología' },
    color: 'rgba(255,241,184,0.2)',
    colorTxt: '#D4A847',
    icon: '🩸',
    dose(p, lang = 'pt') {
      const wt   = p.weight || 70;
      const isES = lang === 'es';
      const corr = Math.round(wt * 0.1 * 10) / 10;
      const total = Math.round(wt * 0.4);
      return {
        dose: isES
          ? `Corrección: ${corr} UI/100mg/dL por encima del objetivo (objetivo 140–180 mg/dL)`
          : `Correção: ${corr} UI/100mg/dL acima do alvo (alvo 140–180 mg/dL)`,
        freq: isES ? 'Según glucometría capilar' : 'Conforme glicemia capilar',
        via: 'SC/IV',
        adj: '',
        duration: isES ? 'Según protocolo' : 'Conforme protocolo',
        note: isES
          ? `Dosis total diaria estimada: ${total} UI/día (0.4 UI/kg). Protocolo: 50% basal + 50% prandial/corrección.`
          : `Dose total diária estimada: ${total} UI/dia (0.4 UI/kg). Protocolo insulina: 50% basal + 50% prandial/correção.`
      };
    }
  },

  {
    id: 'metformina',
    name: 'Metformina',
    class: 'Biguanida — Antidiabético oral',
    category: { pt: 'Endocrinologia', es: 'Endocrinología' },
    color: 'rgba(255,241,184,0.2)',
    colorTxt: '#D4A847',
    icon: '💊',
    dose(p, lang = 'pt') {
      const clcr = p.clcr || 90;
      const isES = lang === 'es';
      let dose = '500–1000 mg', freq = '12/12h', adj = '';
      if (clcr < 30) {
        adj = isES
          ? '⚠️ CONTRAINDICADA con ClCr < 30 mL/min — riesgo de acidosis láctica.'
          : '⚠️ CONTRAINDICADA com ClCr < 30 mL/min — risco de acidose lática.';
      } else if (clcr < 45) {
        dose = '500 mg'; freq = '12/12h';
        adj = isES
          ? 'ClCr 30–45: reducir a 500mg/12h. Monitorear función renal.'
          : 'ClCr 30–45: reduzir para 500mg/12h. Monitorar função renal.';
      }
      return {
        dose, freq, via: 'VO', adj,
        duration: isES ? 'Uso continuo' : 'Uso contínuo',
        note: isES
          ? 'Tomar con comidas. Suspender antes de contraste yodado. Máx 2g–3g/día.'
          : 'Tomar com refeições. Suspender antes de contraste iodado. Máx 2g–3g/dia.'
      };
    }
  }

]; /* fim ENDOCRINO_DRUGS_DB */
