# Atualização Gold33 e auditoria técnica — 21-09-2026

## Escopo autorizado

Calculadora Gold33, repositório `rodrigssousa-sudo/medcases-calculadora`, branch de publicação `main`, DigitalOcean app `56c8a039-10e9-4136-b546-599aa5cff529`, domínio `medcasescalcu.com`. Componentes conferidos: site estático `medcases-calculadora` em `/public` e serviço `calculator-gateway` em `node gateway/server.js`. A landing/appweb não faz parte desta atualização.

NOVA_LISTA 084–104 e 106, excluído 105: 182 IDs da importação principal e sete fichas do novo candidato 093. Total: 189 IDs, 180 novos e nove atualizados; catálogo privado de 1.018 registros. Free60 permanece 60; a lista legada Free400 mantém 400 IDs e não substitui a política Free60 em produção.

## Correções técnicas

- Busca: novas fichas privadas não tinham descoberta no índice do navegador. Adicionado `/api/drug-catalog`, autenticado e restrito à capacidade `drug_catalog_full`, com nomes/IDs e sem conteúdo clínico. Cliente atualiza a busca em memória após sessão Premium.
- Referência sem cálculo: fallback não pode extrair aritmética dos textos Gold33. Fichas `referenceOnly` têm botão de cálculo desabilitado e aviso persistente; o renderizador legado não sobrescreve o aviso.
- Resolução de arquivo: IDs canônicos do catálogo autenticado evitam requisições por nomes de apresentação que retornavam 404.
- Metadados de contagem atualizados para 1.018 registros, preservados IDs Free e regras de autorização.

## Evidência anterior ao deploy

- Sete testes do importador: hashes, seleção de versões, restrições, idempotência e restauração transacional.
- Seis testes de homologação 093: payload congelado, vínculo do parecer, rejeição de adulterações e projeção exata das sete fichas.
- Pipeline, sincronização seletiva e staging: PASS; inclui rollback e rejeição de fonte suja.
- Runtime: 31 módulos, 1.016 registros homologados comparados, zero divergências. Dois registros históricos não foram reclassificados como homologados.
- Gateway HTTP, entitlements, assinaturas, Free60, Free400, paywall e revisão pediátrica G01: PASS.
- Catálogo privado: sessão ausente/inválida 401, Free 403, Premium 1.018 IDs; sem campos clínicos na resposta; cache `no-store`.
- Infusão: 11 unidades e 16 vetores das fórmulas existentes, com limites, entradas inválidas e bloqueios: PASS. Trata-se de teste técnico, não nova homologação clínica.
- Chrome local com sessão Premium sintética: busca de diclofenaco gotas, abertura da ficha, botão desabilitado, aviso de referência; zero erros JS/rede; largura 390 px sem overflow horizontal.
- Build/fronteira pública: 60 fichas, nenhum pacote privado ou conteúdo de IA no diretório público.

## Restrições e limitações

O ZIP 093 aprovado permanece inalterado (`e29687c1f949e39a4eeb2ce764d444bf840900034fe78da29de2a8770755e98f`). Parecer próprio da Dra Eugenia Marques, 20-09-2026, aprovado integralmente. As três propostas de alias — salbutamol_solucao_inalatoria, fenoterol_solucao_inalatoria e ipratropio_solucao_inalatoria — não se tornam duplicatas ativas. Falta reconciliação explícita de escopo para ativá-las como aliases; não falta o parecer do novo candidato. O original 093 sem payload continua bloqueado e não transfere aprovação histórica.

Nenhuma dose, texto clínico ou autorização de cálculo foi inventada ou alterada. Metadados originais de publicação continuam preservados; a autorização técnica de publicação atual é registrada separadamente.

Testes autenticados locais usam credenciais sintéticas. Login real, renovação real de assinatura, compra e integrações externas de IA não são comprovados por esses testes. Módulos anunciados como “Em breve” não são considerados implementados. Auditoria técnica não equivale a revisão médica integral.

A confirmação do commit ativo e a cobertura pós-deploy serão acrescentadas após a publicação.
