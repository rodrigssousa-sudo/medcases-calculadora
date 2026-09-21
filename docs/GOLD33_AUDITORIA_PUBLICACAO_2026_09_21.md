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

## Produção e cobertura pós-deploy

Código do aplicativo publicado no commit `eb473b3ac807c6321210e2c76794005edc8d5e82` (integração inicial `553fcfc39`). Deployment `af85dd0b-feb7-4eab-a938-8aefab651f9a`: **ACTIVE, 7/7 etapas**, ambos os componentes no mesmo commit. O primeiro build foi substituído automaticamente pelo push da correção visual. O fechamento documental/testes pode produzir um commit posterior, sem alteração dos arquivos do aplicativo; a correspondência final GitHub/produção é confirmada na entrega.

- Os **114 arquivos públicos** foram buscados por HTTPS e comparados byte a byte por SHA-256 com o workspace: zero diferenças ou erros HTTP.
- `/health`: 200, `productionReady=true`, `freeDrugCount=60`.
- Sem sessão: `/api/session`, `/api/drug-catalog`, `/api/drugs/diclofenaco_gotas` e `/api/ai-drug-data/current`: 401.
- Caminhos públicos para ficha nova, módulo privado e manifesto de clinical-knowledge: 404.
- Chrome, 1440×1000 e 390×844: abertura dos sete módulos implementados (renal, fármacos, interações, eletrólitos, infusão, fluidos e hemodinâmica); sem erro JS/rede ou overflow horizontal nas telas exercitadas.
- Vetores sintéticos exercitados na UI: renal 70 kg/40 anos/170 cm/creatinina 1/sexo masculino → ClCr 97,2; infusão livre 4 mg/250 mL/70 kg/0,1 mcg/kg/min → 26,25 mL/h; manutenção hídrica 70 kg → 2.100 mL/dia; ânion gap 140−(104+24) → 12. Foram conferidas saídas técnicas existentes, sem prescrição para pacientes reais.
- Hemodinâmica: formulário 120/80, FC 80, SpO₂ 98, FR 18, temperatura 37 exibiu resultado; não foi homologado todo o conjunto NEWS2.
- Interações: seleção de dois fármacos, disparo e renderização do resultado funcionaram. A correção clínica de todas as interações não foi auditada.
- HTTP local com sessão Premium sintética: **189/189 fichas** da atualização retornam o ID correto, `referenceOnly=true` e `calculationAuthorized=false`.
- Service worker: inspeção confirmou exclusão das rotas `/api/` do cache. Não foi realizado teste prolongado de atualização de uma instalação offline antiga.

Evidências: `generated/gold33-nova-lista/audit-2026-09-21/`. O teste de referência no Chrome pode ser repetido com `NODE_PATH` apontando para a instalação de Playwright e `node tests/gold33-reference-browser.test.cjs`. Nenhum token real é usado ou registrado.

## Achados e pendências

| Achado | Gravidade/estado | Tratamento |
|---|---|---|
| Fallback podia calcular a partir de texto de ficha de referência | Alta, corrigido | Bloqueio de aritmética, controles ocultos e aviso persistente; testes unitários e no navegador |
| Novos IDs privados ausentes da descoberta na busca | Média, corrigido | Catálogo autenticado, sem exposição de fichas |
| Painel legado sobrescrevia aviso após mudança de layout | Média, corrigido | Apresentação específica de referência independente do painel legado |
| Tentativas de arquivo usando nome de apresentação | Baixa, corrigido | ID canônico autenticado antes de tentativas por nome |
| Varfarina/amiodarona: cabeçalho “Contraindicada” junto de texto orientando ajuste de dose | Revisão clínica pendente; não declarado erro clínico confirmado | Conteúdo preexistente preservado; revisor deve reconciliar classificação e instruções. Funcionamento técnico não valida essa orientação |
| Três aliases propostos do 093 | Reconciliação de escopo pendente | Não ativados como duplicatas; fichas e parecer permanecem no ZIP |

Não houve exercício de login real, pagamento, renovação de assinatura, sessão Premium real em produção ou inferência externa de IA. As barreiras dessas rotas foram verificadas; os fluxos autenticados foram testados localmente com sessões sintéticas. Não se declara auditoria exaustiva de todas as combinações clínicas, dispositivos ou integrações externas.

