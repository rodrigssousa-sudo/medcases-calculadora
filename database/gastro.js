/* ============================================================
   MedCases Pro — Módulo: GASTROINTESTINAL
   Expõe: window.GASTRO_DRUGS_DB
============================================================ */

window.GASTRO_DRUGS_DB = [

  {
    id: 'omeprazol',
    name: 'Omeprazol',
    class: 'IBP — Inibidor da bomba de prótons',
    category: { pt: 'Gastrointestinal', es: 'Gastrointestinal' },
    color: 'rgba(155,110,232,0.15)',
    colorTxt: '#9B6EE8',
    icon: '💊',
    dose(p, lang = 'pt') {
      const isES = lang === 'es';
      return {
        dose: '20–40 mg',
        freq: isES ? '24/24h (ayunas)' : '24/24h (jejum)',
        via: 'VO/IV',
        adj: isES ? 'Hepatopatía grave: máx 20mg/día.' : 'Hepatopatia grave: máx 20mg/dia.',
        duration: isES
          ? '4–8 semanas (úlcera); uso continuo en DRGE'
          : '4–8 semanas (úlcera); uso contínuo em DRGE',
        note: isES
          ? 'Tomar 30 min antes del desayuno. IV: infundir en 20–30 min. Interacción con clopidogrel.'
          : 'Tomar 30 min antes do café. IV: infundir em 20–30 min. Interação com clopidogrel.'
      };
    }
  },

  {
    id: 'metoclopramida',
    name: 'Metoclopramida',
    class: 'Antiemético / Procinético',
    category: { pt: 'Gastrointestinal', es: 'Gastrointestinal' },
    color: 'rgba(155,110,232,0.15)',
    colorTxt: '#9B6EE8',
    icon: '💊',
    dose(p, lang = 'pt') {
      const clcr = p.clcr || 90;
      const isES = lang === 'es';
      let dose = '10 mg', freq = '8/8h', adj = '';
      if (clcr < 40) {
        dose = '5 mg';
        adj  = isES ? 'ClCr < 40: reducir dosis al 50%.' : 'ClCr < 40: reduzir dose em 50%.';
      }
      return {
        dose, freq, via: 'VO/IV', adj,
        duration: isES ? 'Máx 5 días (VO)' : 'Máx 5 dias (VO)',
        note: isES
          ? 'IV: infundir en 15 min. Riesgo de discinesia tardía en uso prolongado. Máx 30–40mg/día.'
          : 'IV: infundir em 15 min. Risco de discinesia tardia em uso prolongado. Máx 30–40mg/dia.'
      };
    }
  },

  {
    id: 'ondansetrona',
    name: 'Ondansetrona',
    class: 'Antiemético — Antagonista 5-HT3',
    category: { pt: 'Gastrointestinal', es: 'Gastrointestinal' },
    color: 'rgba(155,110,232,0.15)',
    colorTxt: '#9B6EE8',
    icon: '💉',
    dose(p, lang = 'pt') {
      const isES = lang === 'es';
      return {
        dose: '4–8 mg',
        freq: '8/8h',
        via: 'VO/IV',
        adj: '',
        duration: isES ? 'Según necesidad (máx 3 días IV)' : 'Conforme necessidade (máx 3 dias IV)',
        note: isES
          ? 'IV: infundir en 15 min. Riesgo de prolongación del QT en dosis altas. Hepatopatía grave: máx 8mg/día.'
          : 'IV: infundir em 15 min. Risco de prolongação do QT em altas doses. Hepatopatia grave: máx 8mg/dia.'
      };
    }
  }

]; /* fim GASTRO_DRUGS_DB */
