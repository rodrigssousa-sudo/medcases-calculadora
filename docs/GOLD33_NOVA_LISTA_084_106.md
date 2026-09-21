# Gold33 Nova Lista: lotes 084–104 e 106

Integração **local**, sem push ou deploy. Base Git: `0336e6bf38f93c78d5f1a89a903343ba8be6b6fb`. O lote 105 não faz parte do escopo. Os pacotes desta sequência não são os antigos lotes publicados com numeração semelhante.

## Resultado

- 22 ZIPs originais arquivados, com hashes fixados em `config/gold33-nova-lista-084-106.json`; todos os manifestos conferem e cobrem os arquivos anexados.
- 21 pacotes contêm 210 fichas. Após as substituições autorizadas, restam **182 IDs únicos**: 173 novos e 9 atualizações de IDs existentes.
- Os lotes 103, 104 e 106 prevalecem sobre as versões anteriores de 28 IDs, conforme resposta do usuário: “sim substituir”. A escolha é explícita por ID, não depende da ordem de importação. As versões anteriores permanecem nos ZIPs arquivados.
- Base privada: **1.011** registros. Área pública: **60**, sem alteração de elegibilidade Free/Premium. Os novos registros são Premium por padrão.
- O lote 093 original continua bloqueado por ausência de payload. Foi preparado separadamente um **novo candidato**, após autorização do usuário para completar informações. Não foi atribuída homologação a conteúdo novo.

## Fontes e destinos

O importador `scripts/gold33-nova-lista.py` valida hashes, cobertura de manifesto, IDs e o contrato exato dos 33 campos PT/ES. Não altera os ZIPs, traduz ou reescreve os campos clínicos homologados. Usa gravação com restauração em caso de erro; a repetição é idempotente em bytes.

Os 173 registros novos têm fonte privada em `database/gold33_nova_lista.js`, sem funções de cálculo. Os nove IDs já existentes conservam seus owners: oxazepam e buspirona em psiquiatria; galantamina e entacapona em neurologia; glucagon em endocrinologia; hidroxicloroquina, metotrexato e leflunomida em analgésicos; delamanida em antimicrobianos. As fichas anteriores completas estão arquivadas em `generated/gold33-nova-lista/baseline/`.

Os JSONs derivados contêm exatamente os 33 campos aprovados em cada idioma. Campos extras de dose de formulações antigas não foram mesclados à apresentação nova. O documento integral de restrições e os metadados originais de cada ficha acompanham a fonte e o derivado. A identidade global do conteúdo foi atualizada. Nos **829 documentos fora do escopo**, somente `dataVersion` e `clinicalContentSha256` mudaram.

O módulo novo não é copiado para `public/`. O exportador global continua desabilitado. O catálogo público continua restrito à Free60; não há inclusão dos novos IDs no índice público. Esta entrega prepara os dados privados e os mecanismos de importação, sem afirmar disponibilidade em produção.

## Cálculo e publicação

As fichas importadas têm `referenceOnly=true`, `calculationAuthorized=false` e `publicationAuthorized=false`. Estados originais de bloqueio não foram convertidos em autorização.

Foi corrigido o fallback R8, em `index.html` e `public/index.html`, para não extrair aritmética em mg/kg de fichas marcadas como somente referência. A interface mostra texto de referência e aviso de cálculo não autorizado; substitui também resultado anterior quando encontra essa marcação. Teste executa o código real de ambos os HTMLs e verifica bloqueio, preservação do texto e regressão do caminho legado. Não foram criados esquemas executáveis de dose, titulação, conversão ou infusão.

## Conferência documental

Os PDFs anexados foram extraídos e confrontados com os valores dos JSONs, normalizando espaços/Unicode. O registro detalhado está em `generated/gold33-nova-lista/pdf-comparison.json`.

Os lotes 102 e 106 omitem no PDF os campos `references`/`ref` existentes nos JSONs e arquivos de referências. Há diferenças de renderização em URLs dos lotes 084, 094 e 095. Um campo espanhol do fenoterol no lote 088 não corresponde literalmente à extração; essa versão foi substituída pelo lote 103. Portanto, não se declara correspondência textual integral de todos os campos de todos os PDFs. Os bytes e as diferenças foram preservados; não se reescreveram documentos de homologação.

As restrições de reconciliação canônica, inclusive as do lote 094, continuam registradas. Não houve fusão automática de sinônimos, vias ou apresentações por semelhança de nomes.

## Complementação do lote 093

O pacote original declara `FAIL_PAYLOAD_APROVADO_AUSENTE`. A busca por arquivos de candidato disponíveis em Downloads não recuperou a versão exata aprovada.

Foi preparado `generated/gold33-nova-lista/lote093-candidato/01_NOVO_CANDIDATO_093.json`, com dez fichas e 33 campos PT/ES por ficha, acompanhado de `REVISAO_MEDICA.md`. O novo candidato combina texto de referência preexistente, explicitamente identificado por campo e hash, com adaptações de apresentação e posologia apoiadas em bulas oficiais da Novartis, Eurofarma, GSK/emc e DailyMed. A pesquisa não equivale a revisão médica integral: os campos herdados ainda exigem conferência de escopo e as traduções precisam de revisão clínica.

Três IDs são propostas de alias de produtos do lote 103: `salbutamol_solucao_inalatoria`, `fenoterol_solucao_inalatoria` e `ipratropio_solucao_inalatoria`. Não foram adicionados como duplicatas ativas. A definição de produto/concentração é proposta para o candidato e não é atribuída ao original ausente.

O candidato tem `historicalApprovalApplies=false`, revisão médica pendente, publicação/cálculo bloqueados e permanece fora de `data/drugs`, `public/` e do runtime. Campos vazios intencionais dos demais pacotes homologados não foram preenchidos por inferência.

## Validação

- Importador novo: integridade dos pacotes, seleção explícita, restauração após falha, preservação dos campos/restrições, isolamento do candidato 093 e repetição sem alterações.
- Runtime: **30 módulos, 1.009 registros homologados comparados, zero divergências**. Os dois registros históricos sem homologação não foram reclassificados.
- Pipeline legado: envelope revisado, importação seletiva, restauração, bloqueio do deploy legado, staging local com commit fixado e reversão.
- Build e fronteira R30/Free60; Free400; gateway HTTP; entitlement; assinatura canônica; G01 pediátrico e paywall: PASS.
- Os testes HTTP precisaram executar fora da restrição de portas do sandbox, usando somente `127.0.0.1`; passaram.
- `git diff --check`: PASS.

Comandos de conferência: `npm run test:gold33-nova-lista`, `npm run test:gold33-pipeline`, `npm run test:gold33-sync`, `npm run test:gold33-staging` e `npm run build`. O teste de pipeline usa por padrão os ZIPs arquivados da Nova Lista; `GOLD33_TEST_ZIP` continua aceitando um pacote legado explícito.

Pendente: revisão médica do **novo** candidato 093; decisão de publicação e verificação de produção em uma etapa posterior. Nenhum pacote novo foi publicado nesta tarefa.


## Atualização de publicação — 21-09-2026

O usuário autorizou explicitamente push, deploy DigitalOcean e correções técnicas. O novo candidato 093 recebeu parecer próprio da Dra Eugenia Marques em 20-09-2026 (Aprovado integralmente), preservado no ZIP homologado. Sete fichas foram projetadas sem alterar os 33 campos para a base privada; três propostas de alias continuam sem registro ativo até reconciliação de escopo. A base privada passa a 1.018 fichas (189 IDs desta atualização: 180 novos e nove atualizados). O original 093 sem payload continua arquivado e bloqueado, sem herança de aprovação histórica.

O registro de publicação é separado dos metadados clínicos congelados; `calculationAuthorized=false` e `referenceOnly=true` continuam obrigatórios. O gateway passou a fornecer catálogo de nomes/IDs via `/api/drug-catalog`, exclusivo de sessões com `drug_catalog_full`, para permitir descoberta das novas fichas na busca sem publicar os dados clínicos privados. O índice estático continua Free60.

A auditoria e as versões efetivamente publicadas serão registradas em `docs/GOLD33_AUDITORIA_PUBLICACAO_2026_09_21.md`. Os parágrafos anteriores descrevem a etapa histórica anterior à autorização atual.
