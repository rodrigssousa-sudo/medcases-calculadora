# Gold33 — nove fichas homologadas, lote documental 090

O pacote GOLD33_LOTE_9_HOMOLOGADO_CLINICAMENTE.zip aplica a aprovação clínica de Dra Eugenia Marques, datada de 20/09/2026, a nove IDs existentes: acidoaminocaproico, adenosina, zidovudina, ziprasidona, zolmitriptana, zolpidem, zonisamida, zopiclona e zuclopentixol. O número 090 provém do parecer; não renumera o antigo lote 003 nem inclui outros lotes novos.

O usuário forneceu este pacote com a instrução: “Homologado e pronto para publicar: APROVADO”. Essa autorização atual permite integração, push e deploy após os gates. O estado administrativo original BLOQUEADA permanece registrado em clinicalPackagePublicationState. O marcador legado lote002-owner-confirmed representa a autorização atual no sincronizador, não uma aprovação médica adicional.

## Proveniência e preservação

- Base: 519d923481db6b293cd331b8aa7afc029a38e965.
- ZIP original, não alterado: 828f0c6dfb62860b09fd0e90f9a62e894c0eac2f0212400b6d0746733b043462.
- SHA-256 dos bytes de 01_DADOS_HOMOLOGADOS.json: 866ce87ad26117645b0eb2df7da1d6ac28cde2b4f89b6efdc9f70789277e5033.
- PDF homologado: 5207611db7ad97b8d513cbe672099915931de2118030339b6491bd09f39ccd5a.
- Restrições: 26c4d93b832b59522adb85ea15df13e8d22e69e6f4992924abe14c00830d1f1e.

O manifesto cobre todos os arquivos do ZIP e todos os hashes conferem. Todos os 33 campos PT/ES e referências das nove fichas aparecem no texto do PDF homologado, comparados com normalização apenas de espaços/Unicode. A página 30 registra aprovação integral e os nove IDs. As páginas anteriores mantêm o texto histórico de candidato; esse texto não foi editado.

O handoff informa source_pdf_sha256_match=false. O hash 4983afd651b993aa3519287bd0c12aa9c91bac218af42098512f579b0a013961 identifica o candidato anterior citado pelo parecer; não é o hash do PDF final anexado. A identidade binária com aquele candidato não foi comprovada. A publicação usa o PDF final cujo hash confere com o parecer, a correspondência integral PDF/dados e a autorização atual. Nenhum hash histórico foi substituído para ocultar essa ressalva.

## Importador

O gate reconhece o envelope com ids_efetivamente_revisados e exige aprovação explícita, revisor, ausência de exceções, PDF com hash correspondente, cobertura integral do manifesto, IDs únicos na ordem aprovada, 33 campos bilíngues e restrições. A cardinalidade é derivada do escopo efetivamente aprovado, permitindo os nove registros sem desabilitar os gates legados de dez registros.

O sincronizador deriva owners e destinos dos metadados do pacote, verifica a classificação contra a Free60, preserva integralmente o documento de restrições na fonte e no derivado e mantém calculationAuthorized=false. O ZIP não foi normalizado ou reescrito. Nenhuma dose, conversão ou conteúdo clínico foi gerado durante a integração.

## Validação e escopo

A preservação verifica os nove payloads campo a campo e os 829 documentos restantes, permitindo somente a atualização global de dataVersion e clinicalContentSha256. O conteúdo preexistente dos módulos database é preservado. Runtime: 29 módulos, 836 registros homologados, zero divergências. Bundle privado: 838 documentos; área pública: 60. Nenhum cálculo determinístico foi habilitado.

Os testes de envelope cobrem nove IDs válidos, cardinalidade incorreta, IDs duplicados ou não aprovados, parecer pendente, restrições ausentes e PDF divergente. A publicação depende também de pipeline, sincronização/rollback, staging, gateway, Free60/Free400, G01, entitlement, R30, paywall e fronteira pública. Os resultados de produção são registrados no relatório após a implantação.

Permanecem fora desta integração os dois registros de identidade duplicada acidotranexamico e anfotericina_b, as pendências documentais históricas e os pacotes distintos NOVA_LISTA. Não há declaração de homologação de todos os 838 registros.
