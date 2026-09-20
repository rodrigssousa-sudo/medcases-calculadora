# Metotrexato — atualização clínica de 20/09/2026

A posologia anterior não separava os esquemas por patologia, e as apresentações eram genéricas. A atualização inclui os esquemas fornecidos pelo usuário para artrite reumatoide, psoríase grave, doença de Crohn, osteossarcoma, manutenção da LLA, gravidez ectópica não rota, neoplasia trofoblástica gestacional de baixo risco e uso intratecal em leucemias/linfomas. Frequências semanais, vias e resgates ficam vinculados aos respectivos esquemas.

O usuário informou aprovação integral de Dra Eugenia Marques em 20/09/2026, forneceu o complemento de apresentações, referências, esquemas específicos e doses intratecais por idade e determinou continuar a atualização e o push. O registro técnico está em `docs/clinical-updates/metotrexato-2026-09-20.json`; seu SHA-256 substitui o hash aprovado no metadado corrente, preservando o anterior em `previousApprovedSha256`. A associação histórica ao lote 051 é mantida com a revisão incremental explícita.

Foram atualizados sete campos em PT/ES: dose, presentation, presentations, pediatricDose, preparation, references e ref. Os demais campos permanecem iguais. Cálculo automático continua bloqueado. Metotrexato permanece Premium, sem documento na área pública.

## Ressalva de preparo

A instrução recebida de volume intratecal igual ao LCR retirado (3–12 mL) não foi transformada em regra universal: a bula oficial consultada define preparo por concentração, e produto/protocolo precisam ser confirmados. Conservou-se a exigência de preparo conforme bula e protocolo hospitalar validado, sem cálculo de volume. Exemplos de frequência intratecal não constituem calendário universal; 15 mg aplica-se apenas ao adulto quando o protocolo o prevê. As concentrações não autorizam intercâmbio de vias nem comprovam ausência de conservantes.

As referências PCDT, ACOG, NCCN e marcas foram indicadas pelo usuário. Links bibliográficos foram explicitados sem afirmar leitura integral ou validação de edição NCCN atual não fornecida. A fonte oficial usada para a ressalva é https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a63364d5-4dfa-49d7-8a5e-c8959ae1d37a.

## Verificação

PASS: identidade clínica, build, bundle privado, runtime de todos os módulos, gateway, Free60, entitlement, paywall, R30 e fronteira pública. A auditoria comparou os sete campos com o registro de revisão, confirmou o hash e sua linhagem e preservou o restante da ficha e os outros 837 registros (exceto identidade global de versão/hash). O código preexistente fora do bloco seletivo do metotrexato permaneceu idêntico.

A atualização não altera o total: 838 documentos, 836 registros com marca de homologação, 60 públicos. As duas pendências de identidade e os NOVA_LISTA não integrados continuam fora desta alteração. O push pode disparar o deploy automático configurado; o resultado de produção é registrado separadamente após verificação.

A publicação incorpora por fast-forward a correção concorrente 5eaa134a321becab4729c275e211804c4f271194 (navegação e pull refresh), preservando os seis arquivos de código byte a byte e regenerando apenas os manifestos offline. Build/fronteira pública, sintaxe JS, paywall e preservação clínica foram reconferidos após a integração.
