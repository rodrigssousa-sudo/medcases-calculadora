/* ============================================================
   MedCases Pro — Módulo: ANALGÉSICOS / ANTITÉRMICOS
   Expõe: window.ANALGESICOS_DRUGS_DB
============================================================ */

window.ANALGESICOS_DRUGS_DB = [

  {
    id: 'dipirona',
    name: 'Dipirona',
    class: 'Analgésico / Antitérmico',
    category: { pt: 'Analgésicos', es: 'Analgésicos' },
    color: 'rgba(66,168,212,0.15)',
    colorTxt: '#42A8D4',
    icon: '💊',
    dose(p, lang = 'pt') {
      const wt  = p.weight || 70;
      const isES = lang === 'es';
      const d   = Math.min(1000, Math.max(500, wt * 15));
      return {
        dose: `${Math.round(d / 100) * 100} mg (= ${(d / 500).toFixed(1)} comp 500mg)`,
        freq: '6/6h',
        via: 'VO/IV',
        adj: '',
        duration: isES ? 'Según necesidad' : 'Conforme necessidade',
        note: isES
          ? 'Máx 4g/día. IV: infundir lentamente (riesgo de hipotensión). Creatinina > 3: reducir frecuencia.'
          : 'Máx 4g/dia. IV: infundir lentamente (risco de hipotensão). Creatinina > 3: reduzir frequência.'
      };
    }
  },

  {
    id: 'ibuprofeno',
    name: 'Ibuprofeno',
    class: 'AINE',
    category: { pt: 'Analgésicos', es: 'Analgésicos' },
    color: 'rgba(66,168,212,0.15)',
    colorTxt: '#42A8D4',
    icon: '💊',
    dose(p, lang = 'pt') {
      const clcr = p.clcr || 90;
      const isES = lang === 'es';
      let adj = '';
      if (clcr < 30) {
        adj = isES
          ? '⚠️ EVITAR en ClCr < 30 mL/min — riesgo de IRA.'
          : '⚠️ EVITAR em ClCr < 30 mL/min — risco de IRA.';
      }
      return {
        dose: '400–600 mg', freq: '8/8h', via: 'VO', adj,
        duration: isES ? '3–7 días' : '3–7 dias',
        note: isES
          ? 'Máx 2400mg/día. Tomar con alimentos. Evitar en úlcera péptica, embarazo, insuficiencia renal.'
          : 'Máx 2400mg/dia. Tomar com alimentos. Evitar em úlcera péptica, gestação, insuficiência renal.'
      };
    }
  },

  {
    id: 'tramadol',
    name: 'Tramadol',
    class: 'Opioide fraco',
    category: { pt: 'Analgésicos', es: 'Analgésicos' },
    color: 'rgba(66,168,212,0.15)',
    colorTxt: '#42A8D4',
    icon: '💊',
    dose(p, lang = 'pt') {
      const clcr = p.clcr || 90;
      const age  = p.age  || 40;
      const isES = lang === 'es';
      let dose = '50–100 mg', freq = '6/6h ou 8/8h', adj = '';
      if (clcr < 30) {
        freq = '12/12h';
        adj  = isES ? 'ClCr < 30: máx 200mg/día, intervalo 12h.' : 'ClCr < 30: max 200mg/dia, intervalo 12h.';
      }
      if (age > 75) {
        adj += (adj ? ' | ' : '') + (isES
          ? 'Anciano: iniciar 50mg, titular lentamente.'
          : 'Idoso: iniciar 50mg, titular lentamente.');
      }
      return {
        dose, freq, via: 'VO/IV', adj,
        duration: isES ? 'Según necesidad' : 'Conforme necessidade',
        note: isES
          ? 'Máx 400mg/día. Riesgo de convulsiones en sobredosis. Precaución con ISRS (síndrome serotoninérgico).'
          : 'Máx 400mg/dia. Risco convulsão em overdose. Cuidado com ISRS (síndrome serotoninérgica).'
      };
    }
  }

]; /* fim ANALGESICOS_DRUGS_DB */
