/* ============================================================
   MedCases Pro — Módulo: CARDIOVASCULAR
   Expõe: window.CARDIO_DRUGS_DB
============================================================ */

window.CARDIO_DRUGS_DB = [

  {
    id: 'captopril',
    name: 'Captopril',
    class: 'IECA',
    category: { pt: 'Cardiovascular', es: 'Cardiovascular' },
    color: 'rgba(240,168,66,0.15)',
    colorTxt: '#F0A842',
    icon: '💊',
    dose(p, lang = 'pt') {
      const clcr = p.clcr || 90;
      const isES = lang === 'es';
      let dose = '25–50 mg', freq = '12/12h ou 8/8h', adj = '';
      if (clcr < 30) {
        dose = '6.25–12.5 mg'; freq = '24/24h';
        adj = isES ? 'ClCr < 30: iniciar dosis baja, monitorear K⁺ y creatinina.'
                   : 'ClCr < 30: iniciar dose baixa, monitorar K⁺ e creatinina.';
      }
      return {
        dose, freq, via: 'VO', adj,
        duration: isES ? 'Uso continuo' : 'Uso contínuo',
        note: isES ? 'Tomar 1h antes de las comidas. Contraindicado en embarazo. Riesgo de hipercalemia.'
                   : 'Tomar 1h antes das refeições. Contraindicado na gravidez. Risco de hipercalemia.'
      };
    }
  },

  {
    id: 'atenolol',
    name: 'Atenolol',
    class: 'β-bloqueador seletivo',
    category: { pt: 'Cardiovascular', es: 'Cardiovascular' },
    color: 'rgba(240,168,66,0.15)',
    colorTxt: '#F0A842',
    icon: '💊',
    dose(p, lang = 'pt') {
      const clcr = p.clcr || 90;
      const isES = lang === 'es';
      let dose = '25–50 mg', freq = '24/24h', adj = '';
      if (clcr < 35) {
        dose = '25 mg';
        freq = isES ? '48h o ajustar' : '48h ou ajustar';
        adj = isES ? 'ClCr 15–35: 50mg en días alternos. ClCr < 15: 25mg en días alternos.'
                   : 'ClCr 15–35: 50mg em dias alternados. ClCr < 15: 25mg em dias alternados.';
      }
      return {
        dose, freq, via: 'VO', adj,
        duration: isES ? 'Uso continuo' : 'Uso contínuo',
        note: isES ? 'No suspender abruptamente. Monitorear FC. Evitar en bloqueo AV y broncoespasmo grave.'
                   : 'Não suspender abruptamente. Monitorar FC. Evitar em bloqueio AV, broncoespasmo grave.'
      };
    }
  },

  {
    id: 'furosemida',
    name: 'Furosemida',
    class: 'Diurético de alça',
    category: { pt: 'Cardiovascular', es: 'Cardiovascular' },
    color: 'rgba(240,168,66,0.15)',
    colorTxt: '#F0A842',
    icon: '💊',
    dose(p, lang = 'pt') {
      const clcr = p.clcr || 90;
      const isES = lang === 'es';
      let dose = '20–40 mg', freq = '12/12h ou 24/24h', via = 'VO/IV', adj = '';
      if (clcr < 30) {
        dose = '80–160 mg';
        adj = isES ? 'ClCr < 30: dosis mayores necesarias. Preferir IV.'
                   : 'ClCr < 30: doses maiores necessárias para efeito. IV preferível.';
      }
      return {
        dose, freq, via, adj,
        duration: isES ? 'Según respuesta clínica' : 'Conforme resposta',
        note: isES ? 'Monitorear K⁺, Na⁺, creatinina. IV: infundir lentamente (≤4 mg/min).'
                   : 'Monitorar K⁺, Na⁺, creatinina. IV: infundir lentamente (≤4 mg/min).'
      };
    }
  }

]; /* fim CARDIO_DRUGS_DB */
