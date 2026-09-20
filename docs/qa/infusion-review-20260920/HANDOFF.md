# MedCases Infusão R69 — handoff Codex

Parecer recebido: **Aprovado integralmente**.
Médico revisor informado: **Dra Eugenia Marques**.
Data informada: **20/09/2026**.
Registro de aprovação fornecido pelo usuário; não é assinatura digital.

## Escopo entregue

16 registros de infusão adulta, preparos em volume final, fórmulas diretas e
reversas, dose inicial obrigatoriamente vazia, revisão exibida por fármaco,
faixas de manutenção com alerta, limites explícitos com bloqueio, UI/mg
separados, cálculo da autonomia volumétrica (não prazo de estabilidade),
resultado premium, original preservado e adendos rastreáveis.

K+ para insulina: **>3,5 mEq/L**, atualização explicitamente autorizada pelo
usuário. K+ ausente, inválido ou ≤3,5 bloqueia resultado/cópia.
Nitroprussiato: máximo 10 mcg/kg/min e, nessa taxa, máximo 10 minutos.
Amiodarona: 150 mg a 1 mg/min dura 2,5 horas, corrigindo a estimativa original;
preparo alternativo 900 mg/500 mL disponível, sem dose automática.

Os controles e alertas implementados constam dos testes e do relatório.
Modo livre é calculadora dimensional, sem vínculo com protocolo de fármaco.
Os controles revisados são aplicados ao modo de seleção de fármacos. Este pacote
não é um controlador de bomba nem monitora duração em segundo plano: a duração
é informada pelo profissional e precisa ser atualizada ao reavaliar a infusão.

## Pontos do próprio parecer preservados como decisões locais

- Noradrenalina: limiar rígido proposto entre 2–3 mcg/kg/min não tem valor único.
  Há alerta >2; não foi inventado um teto numérico definitivo.
- Heparina: limites de bolus/infusão em obesidade extrema não foram numericamente
  definidos. Alerta exige protocolo local; bolus permanece fora desta aba.
- Morfina 50 mg/100 mL e midazolam 150 mg/100 mL são propostas para farmácia,
  não substituições já decididas. Preparos originais mantidos com alerta.
- Vancomicina: exige confirmação de infusão contínua e monitorização. Uso
  intermitente não é homologado por esta aba; exige fluxo de dose/tempo separado.
- Ajustes renais, hepáticos, peso ideal/real e titulações são instruções de
  revisão; não foram convertidos em algoritmos sem coeficientes definidos.
- Não há certificação absoluta de ausência de erros nem homologação de todas
  as apresentações, compatibilidades, estabilidade e dispositivos físicos.

## Aplicação em outra cópia

Este ZIP é um **pacote de alterações**, não uma cópia completa do repositório.
Base: `5eaa134a321becab4729c275e211804c4f271194`.
Inclui as correções R68 ainda não publicadas e a aplicação R69 deste parecer.
Não contém credenciais, .git, prontuários ou exportações da base clínica geral.

1. Extraia o ZIP em uma pasta separada e confira SHA256SUMS.
2. Execute `python3 validate_handoff.py --target /caminho/do/repositorio`.
   O padrão é somente verificar. Arquivos alvo devem ser idênticos à base ou ao
   conteúdo final do pacote. Qualquer divergência interrompe antes de escrever.
3. Para aplicar após a verificação: acrescente `--apply` ao comando.
   Não faz commit, push, reset, merge ou deploy.
4. No repositório destino, execute:
   `node tests/infusion-math.test.cjs` e `npm run build`.
5. Revise o diff e mantenha commits concorrentes. Se houver conflito, faça
   integração manual; não substitua o repositório inteiro pelo ZIP.
6. Publicação é uma etapa separada; audite origin/main e o deployment ativo
   antes de qualquer push. O pacote não aciona publicação automaticamente.

## Verificação

- 11 unidades dimensionais, 16 vetores clínicos nos dois sentidos.
- Vírgula decimal, entradas inválidas, peso ausente, incompatibilidade UI/mg.
- Adultos, potássio no limite e acima dele, resgate de vasopressina,
  máximo/duração do nitroprussiato, máximo de nitroglicerina, alerta PRIS,
  confirmação de monitorização de vancomicina e faixas de manutenção.
- Interface R69: insulina 100 UI/100 mL e 2 UI/h: K+ 3,5 bloqueia;
  K+ 3,6 libera 2 mL/h e 1 UI/mL, com paciente adulto confirmado.
- Build e limite de exposição pública aprovados.
- Manifesto SHA-256, conteúdo extraído, aplicação de teste e rejeição de
  conflito são verificados pelo empacotador antes da entrega.

O relatório R68 é histórico, anterior ao parecer. Este handoff e seus adendos
são o registro atual. Situação de publicação: **não publicado**.
