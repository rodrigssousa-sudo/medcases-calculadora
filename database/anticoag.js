/* ============================================================
   MedCases Pro — Módulo: ANTICOAGULANTES / ANTITROMBÓTICOS
   Expõe: window.ANTICOAG_DRUGS_DB
============================================================ */

window.ANTICOAG_DRUGS_DB = [

  {
    id: 'enoxaparina',
    name: 'Enoxaparina',
    class: 'HBPM — Anticoagulante',
    category: { pt: 'Anticoagulantes', es: 'Anticoagulantes' },
    color: 'rgba(224,92,107,0.15)',
    colorTxt: '#E05C6B',
    icon: '🩸',
    dose(p, lang = 'pt') {
      const wt   = p.weight    || 70;
      const clcr = p.clcr      || 90;
      const pi   = p.pesoIdeal || wt;
      const isES = lang === 'es';

      /* Peso ajustado em obesos */
      const wtUse = wt > pi * 1.3 ? pi + (wt - pi) * 0.4 : wt;

      let tto  = `${Math.round(wtUse)} mg 12/12h SC (1mg/kg 12/12h)`;
      let prof = '40 mg SC 24/24h';
      let adj  = '';

      if (clcr < 30) {
        tto = `${Math.round(wtUse)} mg SC 24/24h (1mg/kg/dia)`;
        adj = isES
          ? 'ClCr < 30: dosis única diaria para tratamiento. Monitorear anti-Xa.'
          : 'ClCr < 30: dose única diária para tratamento. Monitorar anti-Xa.';
      }
      return {
        dose: tto,
        freq: isES ? '12/12h (tto) o 24/24h (profilaxis)' : '12/12h (tto) ou 24/24h (profilaxia)',
        via: 'SC',
        adj,
        duration: isES ? 'Según indicación clínica' : 'Conforme indicação',
        note: isES
          ? `Profilaxis: ${prof}. Si peso > 100kg: considerar dosis ajustada. Antídoto: protamina.`
          : `Profilaxia: ${prof}. Se peso > 100kg: considerar dose ajustada. Antídoto: protamina.`
      };
    }
  },

  {
    id: 'varfarina',
    name: 'Varfarina',
    class: 'Anticoagulante oral — Antagonista Vit K',
    category: { pt: 'Anticoagulantes', es: 'Anticoagulantes' },
    color: 'rgba(224,92,107,0.15)',
    colorTxt: '#E05C6B',
    icon: '💊',
    dose(p, lang = 'pt') {
      const age  = p.age || 40;
      const isES = lang === 'es';
      let dose = '2–10 mg', adj = '';

      if (age > 70) {
        dose = '1–5 mg';
        adj  = isES
          ? 'Anciano: iniciar dosis baja, monitorear RNI frecuentemente.'
          : 'Idoso: iniciar dose baixa, monitorar RNI frequentemente.';
      }
      return {
        dose,
        freq: isES ? '24/24h (horario fijo)' : '24/24h (horário fixo)',
        via: 'VO',
        adj,
        duration: isES ? 'Uso continuo (según indicación)' : 'Uso contínuo (conforme indicação)',
        note: isES
          ? 'Ajustar según RNI. Objetivo: 2–3 (ou 2.5–3.5 para prótese mecánica). Múltiples interacciones. Antídoto: Vit K.'
          : 'Ajustar conforme RNI. Alvo: 2–3 (ou 2.5–3.5 para prótese mecânica). Múltiplas interações. Antídoto: Vit K.'
      };
    }
  },

  {
    id: 'rivaroxabana',
    name: 'Rivaroxabana',
    class: 'Anticoagulante oral — Inib. Xa direto',
    category: { pt: 'Anticoagulantes', es: 'Anticoagulantes' },
    color: 'rgba(224,92,107,0.15)',
    colorTxt: '#E05C6B',
    icon: '💊',
    dose(p, lang = 'pt') {
      const clcr = p.clcr || 90;
      const isES = lang === 'es';
      let dose = '20 mg', freq = '24/24h', adj = '';

      if (clcr < 15) {
        adj = isES ? '⚠️ CONTRAINDICADA con ClCr < 15 mL/min.' : '⚠️ CONTRAINDICADA com ClCr < 15 mL/min.';
      } else if (clcr < 30) {
        dose = '15 mg'; freq = '24/24h';
        adj  = isES ? 'ClCr 15–30: 15mg/24h. Precaución.' : 'ClCr 15–30: 15mg/24h. Uso com cautela.';
      } else if (clcr < 50) {
        adj  = isES ? 'ClCr 30–49: considerar reducción de dosis.' : 'ClCr 30–49: considerar redução de dose.';
      }
      return {
        dose, freq, via: 'VO', adj,
        duration: isES ? 'Según indicación' : 'Conforme indicação',
        note: isES
          ? 'FA: 20mg/día con la cena principal. TEV: 15mg 12/12h x 21 días → 20mg/24h. Sin necesidad de RNI.'
          : 'FA: 20mg/dia com jantar. TEV: 15mg 12/12h × 21 dias → 20mg/24h. Sem necessidade de RNI.'
      };
    }
  }

]; /* fim ANTICOAG_DRUGS_DB */
