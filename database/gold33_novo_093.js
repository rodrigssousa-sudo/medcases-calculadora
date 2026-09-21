/* Private approved 093 reference data; no executable dosing rules. */
window.GOLD33_NOVO_093_DRUGS_DB = {
  "diclofenaco_gotas": {
    "id": "diclofenaco_gotas",
    "name": {
      "pt": "Diclofenaco resinato — gotas 15 mg/mL",
      "es": "Diclofenaco resinato — gotas 15 mg/mL"
    },
    "category": "gold33",
    "mcGoldClinicalV1": {
      "meta": {
        "schema": "mc-gold-clinical-v1",
        "requiredFieldCount": 33,
        "lote": "093_NOVO_CANDIDATO",
        "approvedSha256": "720dc1dc273c189f6552d451208b031b9cdbca8319a7dc175d4419ac39e13fbc",
        "zipSha256": "e29687c1f949e39a4eeb2ce764d444bf840900034fe78da29de2a8770755e98f",
        "referenceOnly": true,
        "calculationAuthorized": false,
        "publicationAuthorized": false,
        "historicalApprovalApplies": false,
        "clinicalPackagePublicationState": "BLOQUEADA",
        "releaseAuthorization": {
          "source": "USER_EXPLICIT_DEPLOY_AUTHORIZATION_2026_09_21",
          "referencePublicationAuthorized": true,
          "calculationAuthorized": false
        },
        "packageRecordMetadata": {
          "ID": "diclofenaco_gotas",
          "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
          "PROVENIENCIA": {
            "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
            "templatePath": "data/drugs/diclofenaco.json",
            "templateSha256": "0c9f069bb319d807954cdffdffb0941600c7b4bf48c9b04c5a1474ae1f6a7f02",
            "sourcesConsulted": "2026-09-21",
            "primarySources": [
              "https://portal.novartis.com.br/medicamentos/wp-content/uploads/2021/10/Bula-CATAFLAM-Suspensao-Gotas-Medico.pdf",
              "https://portal.novartis.com.br/medicamentos/wp-content/uploads/2021/10/Bula-CATAFLAM-Suspensao-Gotas-Paciente.pdf"
            ],
            "newProductSpecificFields": [
              "name",
              "commercialNames",
              "presentation",
              "presentations",
              "indications",
              "dose",
              "pediatricDose",
              "administration",
              "preparation",
              "infusionProtocol",
              "lactation",
              "clinicalPearls"
            ],
            "inheritedFieldsRequiringReview": [
              "class",
              "pharmacologicClass",
              "pharmacodynamics",
              "commonAdverseEffects",
              "dangerousAdverseEffects",
              "adverseEffects",
              "contraindications",
              "interactions",
              "monitoring",
              "pregnancy",
              "specialPopulations",
              "patientEducation",
              "alerts",
              "mechanism",
              "pharmacokinetics",
              "renalDose",
              "hepaticDose"
            ],
            "templateClinicalMetadata": {
              "status": "PASS_CLINICAL_HOMOLOGATION",
              "sourceOwner": "database/analgesicos.js",
              "sourceField": "diclofenaco.mcGoldClinicalV1",
              "lote": "025",
              "requiredFields": 33,
              "approvedSha256": "f490066cbf88c2c1fc49fde254c0e52699a8a5320bd3cfb2ee1a9d3050dd9c7f",
              "calculationAuthorized": false,
              "publicationAuthorized": true,
              "clinicalPackagePublicationState": "NAO_AUTORIZADA",
              "ownerPublicationAuthorization": "mission10-owner-confirmed"
            }
          },
          "STATES": {
            "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
            "HOMOLOGACAO_DADOS": "SIM",
            "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
            "INTEGRACAO_RUNTIME": "NAO",
            "INTEGRACAO_TECNICA": "NAO_INICIADA",
            "PUBLICACAO": "BLOQUEADA"
          },
          "calculationAuthorized": false,
          "publicationAuthorized": false,
          "HOMOLOGACAO": {
            "LISTA": "NOVA_LISTA_GOLD33_V1",
            "LOTE": "093_NOVO_CANDIDATO",
            "MEDICO_REVISOR": "Dra Eugenia Marques",
            "DATA_REVISAO": "20-09-2026",
            "RESULTADO": "Aprovado integralmente",
            "ARQUIVO_REVISADO": "01_NOVO_CANDIDATO_093.json",
            "EXCECOES_INFORMADAS": 0,
            "historicalApprovalApplies": false,
            "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
            "calculationAuthorized": false,
            "publicationAuthorized": false,
            "INTEGRACAO_RUNTIME": "NAO",
            "INTEGRACAO_TECNICA": "NAO_INICIADA",
            "PUBLICACAO": "BLOQUEADA",
            "nota": "O parecer se aplica exclusivamente ao novo candidato 093 submetido nesta conversa. Nenhuma homologacao historica do Lote 093 original se transfere para este conteudo.",
            "CLINICAL_CONTENT_FROZEN": true,
            "reviewedCandidateSha256": "d37488285baa1b0343e2232153a4554cdb1bc88ae828d2c0550331644ba0d84b",
            "approvalBinding": "USER_CONFIRMED_LOCAL_CANDIDATE",
            "approvalPackageSha256": "fa131a03c1c81ae4244b520a055113617ec7f1d617f7078722437521f403aebf"
          }
        },
        "packageRestrictions": {
          "historicalApprovalApplies": false,
          "items": [
            {
              "id": "diclofenaco_gotas",
              "originalRecordMetadata": {
                "ID": "diclofenaco_gotas",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/diclofenaco.json",
                  "templateSha256": "0c9f069bb319d807954cdffdffb0941600c7b4bf48c9b04c5a1474ae1f6a7f02",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://portal.novartis.com.br/medicamentos/wp-content/uploads/2021/10/Bula-CATAFLAM-Suspensao-Gotas-Medico.pdf",
                    "https://portal.novartis.com.br/medicamentos/wp-content/uploads/2021/10/Bula-CATAFLAM-Suspensao-Gotas-Paciente.pdf"
                  ],
                  "newProductSpecificFields": [
                    "name",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "indications",
                    "dose",
                    "pediatricDose",
                    "administration",
                    "preparation",
                    "infusionProtocol",
                    "lactation",
                    "clinicalPearls"
                  ],
                  "inheritedFieldsRequiringReview": [
                    "class",
                    "pharmacologicClass",
                    "pharmacodynamics",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "pregnancy",
                    "specialPopulations",
                    "patientEducation",
                    "alerts",
                    "mechanism",
                    "pharmacokinetics",
                    "renalDose",
                    "hepaticDose"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/analgesicos.js",
                    "sourceField": "diclofenaco.mcGoldClinicalV1",
                    "lote": "025",
                    "requiredFields": 33,
                    "approvedSha256": "f490066cbf88c2c1fc49fde254c0e52699a8a5320bd3cfb2ee1a9d3050dd9c7f",
                    "calculationAuthorized": false,
                    "publicationAuthorized": true,
                    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
                    "ownerPublicationAuthorization": "mission10-owner-confirmed"
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "diclofenaco_supositorio",
              "originalRecordMetadata": {
                "ID": "diclofenaco_supositorio",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/diclofenaco.json",
                  "templateSha256": "0c9f069bb319d807954cdffdffb0941600c7b4bf48c9b04c5a1474ae1f6a7f02",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://www.medicines.org.uk/emc/product/1044/smpc"
                  ],
                  "newProductSpecificFields": [
                    "name",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "indications",
                    "dose",
                    "pediatricDose",
                    "administration",
                    "preparation",
                    "infusionProtocol",
                    "contraindications",
                    "clinicalPearls"
                  ],
                  "inheritedFieldsRequiringReview": [
                    "class",
                    "pharmacologicClass",
                    "pharmacodynamics",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "interactions",
                    "monitoring",
                    "pregnancy",
                    "lactation",
                    "specialPopulations",
                    "patientEducation",
                    "alerts",
                    "mechanism",
                    "pharmacokinetics",
                    "renalDose",
                    "hepaticDose"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/analgesicos.js",
                    "sourceField": "diclofenaco.mcGoldClinicalV1",
                    "lote": "025",
                    "requiredFields": 33,
                    "approvedSha256": "f490066cbf88c2c1fc49fde254c0e52699a8a5320bd3cfb2ee1a9d3050dd9c7f",
                    "calculationAuthorized": false,
                    "publicationAuthorized": true,
                    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
                    "ownerPublicationAuthorization": "mission10-owner-confirmed"
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "cetoprofeno_gotas",
              "originalRecordMetadata": {
                "ID": "cetoprofeno_gotas",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/cetoprofeno.json",
                  "templateSha256": "92e70a001d201e6a9b143907d4f6eef1e4c778615b42500884f6c502b82ec6bb",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://eurofarma.com.br/produtos/bulas/view/healthcare/pt/bula-cetoprofeno-solucao-oral-gotas.html",
                    "https://eurofarma.com.br/produtos/bulas/view/patient/pt/bula-cetoprofeno-solucao-oral-gotas.html"
                  ],
                  "newProductSpecificFields": [
                    "name",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "dose",
                    "pediatricDose",
                    "renalDose",
                    "hepaticDose",
                    "administration",
                    "preparation",
                    "pregnancy",
                    "infusionProtocol"
                  ],
                  "inheritedFieldsRequiringReview": [
                    "class",
                    "pharmacologicClass",
                    "mechanism",
                    "pharmacodynamics",
                    "pharmacokinetics",
                    "indications",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "lactation",
                    "specialPopulations",
                    "patientEducation",
                    "clinicalPearls",
                    "alerts"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/analgesicos.js",
                    "sourceField": "cetoprofeno.mcGoldClinicalV1",
                    "lote": "017",
                    "requiredFields": 33,
                    "approvedSha256": "253c17c2327715b3e25ab80e7138de200e935b80e7d849c1c6088a69116420a3",
                    "calculationAuthorized": false,
                    "publicationAuthorized": true,
                    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
                    "ownerPublicationAuthorization": "mission10-owner-confirmed"
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "salbutamol_spray",
              "originalRecordMetadata": {
                "ID": "salbutamol_spray",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/salbutamol_nebulizacao.json",
                  "templateSha256": "11760e3f8bd9271bc9c7e4c851a2ad9799abd3ce7cc2faa78a73bd3753833e21",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://www.medicines.org.uk/emc/product/850/smpc",
                    "https://www.medicines.org.uk/emc/files/pil.850.pdf"
                  ],
                  "newProductSpecificFields": [
                    "name",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "indications",
                    "pharmacokinetics",
                    "dose",
                    "pediatricDose",
                    "administration",
                    "preparation",
                    "infusionProtocol",
                    "clinicalPearls",
                    "safetyFlags",
                    "alerts"
                  ],
                  "inheritedFieldsRequiringReview": [
                    "class",
                    "pharmacologicClass",
                    "mechanism",
                    "pharmacodynamics",
                    "renalDose",
                    "hepaticDose",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "pregnancy",
                    "lactation",
                    "specialPopulations",
                    "patientEducation"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/gold33_nova_lista.js",
                    "sourceField": "salbutamol_nebulizacao.mcGoldClinicalV1",
                    "requiredFields": 33,
                    "lote": "103",
                    "approvedSha256": "3dd8735151ec6ccf6dcd71dd5262642970c55bff5d753c59dcec104bb685a419",
                    "calculationAuthorized": false,
                    "publicationAuthorized": false,
                    "clinicalPackagePublicationState": "BLOQUEADA",
                    "list": "NOVA_LISTA_GOLD33_V1",
                    "zipSha256": "167045215deac33b67a58cf485f504a0a70ac17a45848dd73c59ec6ea4235aac",
                    "packageFile": "GOLD33_NOVA_LISTA_LOTE_103_HOMOLOGADO_CLINICAMENTE.zip",
                    "packageRestrictions": [
                      {
                        "id": "adrenalina_autoinjetavel",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "PRODUTO_ESPECIFICO_AUVIQ",
                          "PESO_MENOR_7_5_BLOQUEADO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "aminofilina_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "TDM_OBRIGATORIO",
                          "AUTOMACAO_MANUTENCAO_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "betametasona_injetavel",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "VIA_IV_BLOQUEADA",
                          "INDICACAO_ROTA_OBRIGATORIAS"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "brometo_de_ipratropio_nebulizacao",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "CALCULO_PEDIATRICO_BLOQUEADO",
                          "VIA_NAO_INALATORIA_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "dexametasona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "CALCULO_PEDIATRICO_BLOQUEADO",
                          "AUTOMACAO_EXIGE_INDICACAO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "fenoterol_gotas",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "DOSE_ATUAL_NAO_VERIFICADA",
                          "VIA_AUTOMATICA_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [
                          "BULA_PRIMARIA_ATUAL_PENDENTE"
                        ],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "hidrocortisona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "AUTOMACAO_EXIGE_INDICACAO",
                          "CALCULO_PEDIATRICO_BLOQUEADO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "metilprednisolona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "AUTOMACAO_EXIGE_INDICACAO",
                          "FORMULACAO_CONSERVANTE_DEVE_SER_CONFIRMADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "prometazina_im",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "VIA_IV_BLOQUEADA_NESTA_FICHA",
                          "IDADE_MENOR_2_CONTRAINDICADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "salbutamol_nebulizacao",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "IDADE_MENOR_2_BLOQUEADA_NESTE_ROTULO",
                          "PESO_MENOR_15_EXIGE_OUTRA_CONCENTRACAO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      }
                    ],
                    "packageRecordMetadata": {
                      "ID": "salbutamol_nebulizacao",
                      "NOTA_REVISAO_CLINICA": "HOMOLOGADO CLINICAMENTE em 20-09-2026 por Dra Eugenia Marques; resultado APROVADO INTEGRALMENTE; sem excecoes informadas. Conteudo clinico congelado; bloqueios, lacunas justificadas e reconciliacoes preservados.",
                      "PROVENIENCIA": "NEW_ENTRY_NO_LEGACY_BASELINE",
                      "ESCOPO_VALIDADO": "Salbutamol/albuterol 0,083% 2,5 mg/3 mL nebulizacao - EUA",
                      "BLOQUEIOS_CLINICOS": [
                        "IDADE_MENOR_2_BLOQUEADA_NESTE_ROTULO",
                        "PESO_MENOR_15_EXIGE_OUTRA_CONCENTRACAO"
                      ],
                      "PENDENCIAS_NAO_BLOQUEANTES": [],
                      "HOMOLOGACAO": {
                        "LISTA": "NOVA_LISTA_GOLD33_V1",
                        "LOTE": "103",
                        "MEDICO_REVISOR": "Dra Eugenia Marques",
                        "DATA_REVISAO": "20-09-2026",
                        "RESULTADO": "Aprovado integralmente",
                        "ARQUIVO_REVISADO": "103",
                        "EXCECOES_INFORMADAS": 0,
                        "REVISAO_CLINICA": "HOMOLOGADA",
                        "HOMOLOGACAO_DADOS": "SIM",
                        "INTEGRACAO_TECNICA": "NAO_INICIADA",
                        "PUBLICACAO": "BLOQUEADA",
                        "CLINICAL_CONTENT_FROZEN": true
                      }
                    },
                    "supersededPackages": [
                      "GOLD33_NOVA_LISTA_LOTE_088_HOMOLOGADO_CLINICAMENTE.zip"
                    ],
                    "referenceOnly": true
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "salbutamol_solucao_inalatoria",
              "originalRecordMetadata": {
                "ID": "salbutamol_solucao_inalatoria",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/salbutamol_nebulizacao.json",
                  "templateSha256": "11760e3f8bd9271bc9c7e4c851a2ad9799abd3ce7cc2faa78a73bd3753833e21",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=b72742df-1a6b-4483-aff3-3e79db5e015d"
                  ],
                  "newProductSpecificFields": [],
                  "inheritedFieldsRequiringReview": [
                    "name",
                    "class",
                    "pharmacologicClass",
                    "mechanism",
                    "pharmacodynamics",
                    "pharmacokinetics",
                    "indications",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "dose",
                    "pediatricDose",
                    "renalDose",
                    "hepaticDose",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "administration",
                    "preparation",
                    "infusionProtocol",
                    "pregnancy",
                    "lactation",
                    "specialPopulations",
                    "patientEducation",
                    "clinicalPearls",
                    "alerts"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/gold33_nova_lista.js",
                    "sourceField": "salbutamol_nebulizacao.mcGoldClinicalV1",
                    "requiredFields": 33,
                    "lote": "103",
                    "approvedSha256": "3dd8735151ec6ccf6dcd71dd5262642970c55bff5d753c59dcec104bb685a419",
                    "calculationAuthorized": false,
                    "publicationAuthorized": false,
                    "clinicalPackagePublicationState": "BLOQUEADA",
                    "list": "NOVA_LISTA_GOLD33_V1",
                    "zipSha256": "167045215deac33b67a58cf485f504a0a70ac17a45848dd73c59ec6ea4235aac",
                    "packageFile": "GOLD33_NOVA_LISTA_LOTE_103_HOMOLOGADO_CLINICAMENTE.zip",
                    "packageRestrictions": [
                      {
                        "id": "adrenalina_autoinjetavel",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "PRODUTO_ESPECIFICO_AUVIQ",
                          "PESO_MENOR_7_5_BLOQUEADO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "aminofilina_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "TDM_OBRIGATORIO",
                          "AUTOMACAO_MANUTENCAO_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "betametasona_injetavel",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "VIA_IV_BLOQUEADA",
                          "INDICACAO_ROTA_OBRIGATORIAS"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "brometo_de_ipratropio_nebulizacao",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "CALCULO_PEDIATRICO_BLOQUEADO",
                          "VIA_NAO_INALATORIA_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "dexametasona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "CALCULO_PEDIATRICO_BLOQUEADO",
                          "AUTOMACAO_EXIGE_INDICACAO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "fenoterol_gotas",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "DOSE_ATUAL_NAO_VERIFICADA",
                          "VIA_AUTOMATICA_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [
                          "BULA_PRIMARIA_ATUAL_PENDENTE"
                        ],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "hidrocortisona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "AUTOMACAO_EXIGE_INDICACAO",
                          "CALCULO_PEDIATRICO_BLOQUEADO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "metilprednisolona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "AUTOMACAO_EXIGE_INDICACAO",
                          "FORMULACAO_CONSERVANTE_DEVE_SER_CONFIRMADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "prometazina_im",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "VIA_IV_BLOQUEADA_NESTA_FICHA",
                          "IDADE_MENOR_2_CONTRAINDICADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "salbutamol_nebulizacao",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "IDADE_MENOR_2_BLOQUEADA_NESTE_ROTULO",
                          "PESO_MENOR_15_EXIGE_OUTRA_CONCENTRACAO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      }
                    ],
                    "packageRecordMetadata": {
                      "ID": "salbutamol_nebulizacao",
                      "NOTA_REVISAO_CLINICA": "HOMOLOGADO CLINICAMENTE em 20-09-2026 por Dra Eugenia Marques; resultado APROVADO INTEGRALMENTE; sem excecoes informadas. Conteudo clinico congelado; bloqueios, lacunas justificadas e reconciliacoes preservados.",
                      "PROVENIENCIA": "NEW_ENTRY_NO_LEGACY_BASELINE",
                      "ESCOPO_VALIDADO": "Salbutamol/albuterol 0,083% 2,5 mg/3 mL nebulizacao - EUA",
                      "BLOQUEIOS_CLINICOS": [
                        "IDADE_MENOR_2_BLOQUEADA_NESTE_ROTULO",
                        "PESO_MENOR_15_EXIGE_OUTRA_CONCENTRACAO"
                      ],
                      "PENDENCIAS_NAO_BLOQUEANTES": [],
                      "HOMOLOGACAO": {
                        "LISTA": "NOVA_LISTA_GOLD33_V1",
                        "LOTE": "103",
                        "MEDICO_REVISOR": "Dra Eugenia Marques",
                        "DATA_REVISAO": "20-09-2026",
                        "RESULTADO": "Aprovado integralmente",
                        "ARQUIVO_REVISADO": "103",
                        "EXCECOES_INFORMADAS": 0,
                        "REVISAO_CLINICA": "HOMOLOGADA",
                        "HOMOLOGACAO_DADOS": "SIM",
                        "INTEGRACAO_TECNICA": "NAO_INICIADA",
                        "PUBLICACAO": "BLOQUEADA",
                        "CLINICAL_CONTENT_FROZEN": true
                      }
                    },
                    "supersededPackages": [
                      "GOLD33_NOVA_LISTA_LOTE_088_HOMOLOGADO_CLINICAMENTE.zip"
                    ],
                    "referenceOnly": true
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false,
                "RECONCILIACAO_CANONICA": {
                  "candidateAliasOf": "salbutamol_nebulizacao",
                  "status": "PENDENTE_REVISAO_DE_ESCOPO",
                  "action": "Não adicionar um segundo registro ativo para o mesmo produto."
                }
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "fenoterol_solucao_inalatoria",
              "originalRecordMetadata": {
                "ID": "fenoterol_solucao_inalatoria",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/fenoterol_gotas.json",
                  "templateSha256": "75acfdff650220647f3251f2d6f9139d43b22db06064b3677009172ad0216990",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://www.gov.br/anvisa/pt-br/assuntos/medicamentos/cmed/precos/anos-anteriores/arquivos/5333json-file-1/%40%40download/file"
                  ],
                  "newProductSpecificFields": [],
                  "inheritedFieldsRequiringReview": [
                    "name",
                    "class",
                    "pharmacologicClass",
                    "mechanism",
                    "pharmacodynamics",
                    "pharmacokinetics",
                    "indications",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "dose",
                    "pediatricDose",
                    "renalDose",
                    "hepaticDose",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "administration",
                    "preparation",
                    "infusionProtocol",
                    "pregnancy",
                    "lactation",
                    "specialPopulations",
                    "patientEducation",
                    "clinicalPearls",
                    "alerts"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/gold33_nova_lista.js",
                    "sourceField": "fenoterol_gotas.mcGoldClinicalV1",
                    "requiredFields": 33,
                    "lote": "103",
                    "approvedSha256": "3dd8735151ec6ccf6dcd71dd5262642970c55bff5d753c59dcec104bb685a419",
                    "calculationAuthorized": false,
                    "publicationAuthorized": false,
                    "clinicalPackagePublicationState": "BLOQUEADA",
                    "list": "NOVA_LISTA_GOLD33_V1",
                    "zipSha256": "167045215deac33b67a58cf485f504a0a70ac17a45848dd73c59ec6ea4235aac",
                    "packageFile": "GOLD33_NOVA_LISTA_LOTE_103_HOMOLOGADO_CLINICAMENTE.zip",
                    "packageRestrictions": [
                      {
                        "id": "adrenalina_autoinjetavel",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "PRODUTO_ESPECIFICO_AUVIQ",
                          "PESO_MENOR_7_5_BLOQUEADO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "aminofilina_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "TDM_OBRIGATORIO",
                          "AUTOMACAO_MANUTENCAO_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "betametasona_injetavel",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "VIA_IV_BLOQUEADA",
                          "INDICACAO_ROTA_OBRIGATORIAS"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "brometo_de_ipratropio_nebulizacao",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "CALCULO_PEDIATRICO_BLOQUEADO",
                          "VIA_NAO_INALATORIA_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "dexametasona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "CALCULO_PEDIATRICO_BLOQUEADO",
                          "AUTOMACAO_EXIGE_INDICACAO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "fenoterol_gotas",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "DOSE_ATUAL_NAO_VERIFICADA",
                          "VIA_AUTOMATICA_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [
                          "BULA_PRIMARIA_ATUAL_PENDENTE"
                        ],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "hidrocortisona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "AUTOMACAO_EXIGE_INDICACAO",
                          "CALCULO_PEDIATRICO_BLOQUEADO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "metilprednisolona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "AUTOMACAO_EXIGE_INDICACAO",
                          "FORMULACAO_CONSERVANTE_DEVE_SER_CONFIRMADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "prometazina_im",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "VIA_IV_BLOQUEADA_NESTA_FICHA",
                          "IDADE_MENOR_2_CONTRAINDICADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "salbutamol_nebulizacao",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "IDADE_MENOR_2_BLOQUEADA_NESTE_ROTULO",
                          "PESO_MENOR_15_EXIGE_OUTRA_CONCENTRACAO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      }
                    ],
                    "packageRecordMetadata": {
                      "ID": "fenoterol_gotas",
                      "NOTA_REVISAO_CLINICA": "HOMOLOGADO CLINICAMENTE em 20-09-2026 por Dra Eugenia Marques; resultado APROVADO INTEGRALMENTE; sem excecoes informadas. Conteudo clinico congelado; bloqueios, lacunas justificadas e reconciliacoes preservados.",
                      "PROVENIENCIA": "NEW_ENTRY_NO_LEGACY_BASELINE",
                      "ESCOPO_VALIDADO": "Fenoterol 5 mg/mL gotas - Brasil; dose atual bloqueada",
                      "BLOQUEIOS_CLINICOS": [
                        "DOSE_ATUAL_NAO_VERIFICADA",
                        "VIA_AUTOMATICA_BLOQUEADA"
                      ],
                      "PENDENCIAS_NAO_BLOQUEANTES": [
                        "BULA_PRIMARIA_ATUAL_PENDENTE"
                      ],
                      "HOMOLOGACAO": {
                        "LISTA": "NOVA_LISTA_GOLD33_V1",
                        "LOTE": "103",
                        "MEDICO_REVISOR": "Dra Eugenia Marques",
                        "DATA_REVISAO": "20-09-2026",
                        "RESULTADO": "Aprovado integralmente",
                        "ARQUIVO_REVISADO": "103",
                        "EXCECOES_INFORMADAS": 0,
                        "REVISAO_CLINICA": "HOMOLOGADA",
                        "HOMOLOGACAO_DADOS": "SIM",
                        "INTEGRACAO_TECNICA": "NAO_INICIADA",
                        "PUBLICACAO": "BLOQUEADA",
                        "CLINICAL_CONTENT_FROZEN": true
                      }
                    },
                    "supersededPackages": [
                      "GOLD33_NOVA_LISTA_LOTE_088_HOMOLOGADO_CLINICAMENTE.zip"
                    ],
                    "referenceOnly": true
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false,
                "RECONCILIACAO_CANONICA": {
                  "candidateAliasOf": "fenoterol_gotas",
                  "status": "PENDENTE_REVISAO_DE_ESCOPO",
                  "action": "Não adicionar um segundo registro ativo para o mesmo produto."
                }
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "ipratropio_solucao_inalatoria",
              "originalRecordMetadata": {
                "ID": "ipratropio_solucao_inalatoria",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/brometo_de_ipratropio_nebulizacao.json",
                  "templateSha256": "8d7e3cddc70cbd671654f0a934055d306657bf6412a6f8452a008684da41bafa",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3249aea8-a395-f09f-e063-6294a90a2d8b"
                  ],
                  "newProductSpecificFields": [],
                  "inheritedFieldsRequiringReview": [
                    "name",
                    "class",
                    "pharmacologicClass",
                    "mechanism",
                    "pharmacodynamics",
                    "pharmacokinetics",
                    "indications",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "dose",
                    "pediatricDose",
                    "renalDose",
                    "hepaticDose",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "administration",
                    "preparation",
                    "infusionProtocol",
                    "pregnancy",
                    "lactation",
                    "specialPopulations",
                    "patientEducation",
                    "clinicalPearls",
                    "alerts"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/gold33_nova_lista.js",
                    "sourceField": "brometo_de_ipratropio_nebulizacao.mcGoldClinicalV1",
                    "requiredFields": 33,
                    "lote": "103",
                    "approvedSha256": "3dd8735151ec6ccf6dcd71dd5262642970c55bff5d753c59dcec104bb685a419",
                    "calculationAuthorized": false,
                    "publicationAuthorized": false,
                    "clinicalPackagePublicationState": "BLOQUEADA",
                    "list": "NOVA_LISTA_GOLD33_V1",
                    "zipSha256": "167045215deac33b67a58cf485f504a0a70ac17a45848dd73c59ec6ea4235aac",
                    "packageFile": "GOLD33_NOVA_LISTA_LOTE_103_HOMOLOGADO_CLINICAMENTE.zip",
                    "packageRestrictions": [
                      {
                        "id": "adrenalina_autoinjetavel",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "PRODUTO_ESPECIFICO_AUVIQ",
                          "PESO_MENOR_7_5_BLOQUEADO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "aminofilina_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "TDM_OBRIGATORIO",
                          "AUTOMACAO_MANUTENCAO_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "betametasona_injetavel",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "VIA_IV_BLOQUEADA",
                          "INDICACAO_ROTA_OBRIGATORIAS"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "brometo_de_ipratropio_nebulizacao",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "CALCULO_PEDIATRICO_BLOQUEADO",
                          "VIA_NAO_INALATORIA_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "dexametasona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "CALCULO_PEDIATRICO_BLOQUEADO",
                          "AUTOMACAO_EXIGE_INDICACAO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "fenoterol_gotas",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "DOSE_ATUAL_NAO_VERIFICADA",
                          "VIA_AUTOMATICA_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [
                          "BULA_PRIMARIA_ATUAL_PENDENTE"
                        ],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "hidrocortisona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "AUTOMACAO_EXIGE_INDICACAO",
                          "CALCULO_PEDIATRICO_BLOQUEADO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "metilprednisolona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "AUTOMACAO_EXIGE_INDICACAO",
                          "FORMULACAO_CONSERVANTE_DEVE_SER_CONFIRMADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "prometazina_im",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "VIA_IV_BLOQUEADA_NESTA_FICHA",
                          "IDADE_MENOR_2_CONTRAINDICADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "salbutamol_nebulizacao",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "IDADE_MENOR_2_BLOQUEADA_NESTE_ROTULO",
                          "PESO_MENOR_15_EXIGE_OUTRA_CONCENTRACAO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      }
                    ],
                    "packageRecordMetadata": {
                      "ID": "brometo_de_ipratropio_nebulizacao",
                      "NOTA_REVISAO_CLINICA": "HOMOLOGADO CLINICAMENTE em 20-09-2026 por Dra Eugenia Marques; resultado APROVADO INTEGRALMENTE; sem excecoes informadas. Conteudo clinico congelado; bloqueios, lacunas justificadas e reconciliacoes preservados.",
                      "PROVENIENCIA": "NEW_ENTRY_NO_LEGACY_BASELINE",
                      "ESCOPO_VALIDADO": "Ipratropium 0,02% 500 mcg/2,5 mL - EUA",
                      "BLOQUEIOS_CLINICOS": [
                        "CALCULO_PEDIATRICO_BLOQUEADO",
                        "VIA_NAO_INALATORIA_BLOQUEADA"
                      ],
                      "PENDENCIAS_NAO_BLOQUEANTES": [],
                      "HOMOLOGACAO": {
                        "LISTA": "NOVA_LISTA_GOLD33_V1",
                        "LOTE": "103",
                        "MEDICO_REVISOR": "Dra Eugenia Marques",
                        "DATA_REVISAO": "20-09-2026",
                        "RESULTADO": "Aprovado integralmente",
                        "ARQUIVO_REVISADO": "103",
                        "EXCECOES_INFORMADAS": 0,
                        "REVISAO_CLINICA": "HOMOLOGADA",
                        "HOMOLOGACAO_DADOS": "SIM",
                        "INTEGRACAO_TECNICA": "NAO_INICIADA",
                        "PUBLICACAO": "BLOQUEADA",
                        "CLINICAL_CONTENT_FROZEN": true
                      }
                    },
                    "supersededPackages": [
                      "GOLD33_NOVA_LISTA_LOTE_087_HOMOLOGADO_CLINICAMENTE.zip"
                    ],
                    "referenceOnly": true
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false,
                "RECONCILIACAO_CANONICA": {
                  "candidateAliasOf": "brometo_de_ipratropio_nebulizacao",
                  "status": "PENDENTE_REVISAO_DE_ESCOPO",
                  "action": "Não adicionar um segundo registro ativo para o mesmo produto."
                }
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "prednisolona_solucao_oral",
              "originalRecordMetadata": {
                "ID": "prednisolona_solucao_oral",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/prednisolona.json",
                  "templateSha256": "1fd9411f1fb243102af07912d9e9bf1e0684527b96d01b0a8cefd63948a73259",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=a0d74ae0-7b2d-4d36-9211-c76f5063b5a9",
                    "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=7262fc84-3db2-4475-8ae4-6bec4477cb81"
                  ],
                  "newProductSpecificFields": [
                    "name",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "mechanism",
                    "pharmacodynamics",
                    "pharmacokinetics",
                    "dose",
                    "pediatricDose",
                    "renalDose",
                    "hepaticDose",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "administration",
                    "preparation",
                    "infusionProtocol",
                    "pregnancy",
                    "lactation"
                  ],
                  "inheritedFieldsRequiringReview": [
                    "class",
                    "pharmacologicClass",
                    "indications",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "specialPopulations",
                    "patientEducation",
                    "clinicalPearls",
                    "alerts"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/imuno_corticoide.js",
                    "sourceField": "prednisolona.mcGoldClinicalV1",
                    "lote": "064",
                    "requiredFields": 33,
                    "approvedSha256": "21c1e99276216e72bd2a7201eddd567a0335bd6346374d413459182168e7cdea",
                    "calculationAuthorized": false,
                    "publicationAuthorized": true,
                    "clinicalPackagePublicationState": "LIBERADA_COM_RESTRICOES_GRANULARES",
                    "ownerPublicationAuthorization": "lote002-owner-confirmed"
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "dexametasona_elixir",
              "originalRecordMetadata": {
                "ID": "dexametasona_elixir",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/dexametasona.json",
                  "templateSha256": "176ed420ac1c027d82deb4113fc025c47b8de2fb7886d3e24344c0a4172dcce1",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=7b51ffce-ec64-4b49-8870-b9666537c541"
                  ],
                  "newProductSpecificFields": [
                    "name",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "dose",
                    "pediatricDose",
                    "administration",
                    "preparation",
                    "infusionProtocol",
                    "clinicalPearls"
                  ],
                  "inheritedFieldsRequiringReview": [
                    "class",
                    "pharmacologicClass",
                    "mechanism",
                    "pharmacodynamics",
                    "pharmacokinetics",
                    "indications",
                    "renalDose",
                    "hepaticDose",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "pregnancy",
                    "lactation",
                    "specialPopulations",
                    "patientEducation",
                    "alerts"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/imuno_corticoide.js",
                    "sourceField": "dexametasona.mcGoldClinicalV1",
                    "lote": "024",
                    "requiredFields": 33,
                    "approvedSha256": "9721657a393121ed360ce59ff910deb7cbb3b0fc3421608349c6fa584237305a",
                    "calculationAuthorized": false,
                    "publicationAuthorized": true,
                    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
                    "ownerPublicationAuthorization": "mission10-owner-confirmed"
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "budesonida_suspensao_inalatoria",
              "originalRecordMetadata": {
                "ID": "budesonida_suspensao_inalatoria",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/budesonida.json",
                  "templateSha256": "83faa465b16000c39d3c4e9904fab859797107253db21034238feb9f2ea9facd",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=1d139a25-9c17-4b3e-8ffd-b2d562cc00ee"
                  ],
                  "newProductSpecificFields": [
                    "name",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "indications",
                    "dose",
                    "pediatricDose",
                    "hepaticDose",
                    "administration",
                    "preparation",
                    "infusionProtocol"
                  ],
                  "inheritedFieldsRequiringReview": [
                    "class",
                    "pharmacologicClass",
                    "mechanism",
                    "pharmacodynamics",
                    "pharmacokinetics",
                    "renalDose",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "pregnancy",
                    "lactation",
                    "specialPopulations",
                    "patientEducation",
                    "clinicalPearls",
                    "alerts"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/pneumologia.js",
                    "sourceField": "budesonida.mcGoldClinicalV1",
                    "lote": "012",
                    "requiredFields": 33,
                    "approvedSha256": "33a04a022820507c1688fbebb735cd7d879bc3d0ef30a24f4ed7483f5cac16eb",
                    "calculationAuthorized": false,
                    "publicationAuthorized": true,
                    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
                    "ownerPublicationAuthorization": "mission10-owner-confirmed"
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            }
          ]
        }
      },
      "pt": {
        "name": "Diclofenaco resinato — gotas 15 mg/mL",
        "class": "AINE",
        "pharmacologicClass": "Inibição de COX e síntese de prostaglandinas",
        "commercialNames": "Cataflam; bula brasileira consultada.",
        "presentation": "Suspensão oral; frasco 20 mL.",
        "presentations": "15 mg/mL; aproximadamente 0,5 mg/gota, expressos como diclofenaco potássico.",
        "mechanism": "Inibição de COX e síntese de prostaglandinas. O efeito deve ser interpretado por indicação, formulação e exposição.",
        "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
        "pharmacokinetics": "Metabolismo hepático CYP2C9; alta ligação proteica e eliminação renal/biliar de metabólitos.",
        "indications": "Artrite juvenil crônica; adultos: dor/inflamação aguda. Febre isolada não é indicação.",
        "dose": "Adultos: inicialmente 100–150 mg/dia, divididos em 2–3 tomadas.",
        "pediatricDose": "≥1 ano: 0,5–2 mg/kg/dia em 2–3 tomadas; artrite juvenil até 3 mg/kg/dia. Máximo 150 mg/dia.",
        "renalDose": "Evitar em doença renal avançada; monitorar creatinina, volume e potássio.",
        "hepaticDose": "Contraindicado em insuficiência hepática grave em vários rótulos; monitorar transaminases, especialmente 4–8 semanas.",
        "commonAdverseEffects": "Dispepsia, náusea, dor abdominal, edema e cefaleia.",
        "dangerousAdverseEffects": "Infarto/AVC, sangramento/perfuração GI, lesão renal/hepática, SCAR e anafilaxia.",
        "adverseEffects": "Dispepsia, náusea, dor abdominal, edema e cefaleia. Graves: Infarto/AVC, sangramento/perfuração GI, lesão renal/hepática, SCAR e anafilaxia.",
        "contraindications": "Alergia a AINE/asma por aspirina, perioperatório de CABG, sangramento GI ativo; outras por produto.",
        "interactions": "Anticoagulantes/antiagregantes, outros AINE, lítio, metotrexato, IECA/ARA2/diuréticos e CYP2C9.",
        "monitoring": "Dor, PA, edema, GI/sangramento, hemograma, rim, potássio e fígado.",
        "administration": "Via oral, preferencialmente nas refeições; contar em colher.",
        "preparation": "Agitar por 1 minuto; suspensão não solúvel em água/leite/suco.",
        "infusionProtocol": "Não aplicável à apresentação oral.",
        "pregnancy": "Evitar a partir de 20 semanas se possível e contraindicado no 3º trimestre conforme alerta regulatório.",
        "lactation": "A bula desaconselha durante amamentação.",
        "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
        "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
        "clinicalPearls": "Não intercambiar sais, concentrações ou conta-gotas.",
        "guidelineRecommendations": "Esta preparação usa bulas e texto de referência preexistente; não foi feita validação independente de diretrizes.",
        "safetyFlags": "CANDIDATO NOVO: revisão médica pendente; cálculos e publicação bloqueados. CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
        "alerts": "Infarto/AVC, sangramento/perfuração GI, lesão renal/hepática, SCAR e anafilaxia. Dose bloqueada sem indicação, formulação, risco CV/GI/renal/hepático, gestação e total diário de todos os AINE.",
        "references": [
          "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=diclofenac",
          "2. Fonte regulatória primária consultada em 2026-09-18: https://www.fda.gov/drugs/drug-safety-and-availability/fda-recommends-avoiding-use-nsaid-pregnancy-20-weeks-or-later-because-they-can-result-low-amniotic-fluid",
          "https://portal.novartis.com.br/medicamentos/wp-content/uploads/2021/10/Bula-CATAFLAM-Suspensao-Gotas-Medico.pdf",
          "https://portal.novartis.com.br/medicamentos/wp-content/uploads/2021/10/Bula-CATAFLAM-Suspensao-Gotas-Paciente.pdf"
        ],
        "ref": "https://portal.novartis.com.br/medicamentos/wp-content/uploads/2021/10/Bula-CATAFLAM-Suspensao-Gotas-Medico.pdf"
      },
      "es": {
        "name": "Diclofenaco resinato — gotas 15 mg/mL",
        "class": "AINE",
        "pharmacologicClass": "Inhibición de COX y síntesis de prostaglandinas",
        "commercialNames": "Cataflam; prospecto brasileño consultado.",
        "presentation": "Suspensión oral; frasco 20 mL.",
        "presentations": "15 mg/mL; aproximadamente 0,5 mg/gota, expresados como diclofenaco potásico.",
        "mechanism": "Inhibición de COX y síntesis de prostaglandinas. El efecto debe interpretarse por indicación, formulación y exposición.",
        "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
        "pharmacokinetics": "Metabolismo hepático CYP2C9; alta unión proteica y eliminación renal/biliar de metabolitos.",
        "indications": "Artritis juvenil crónica; adultos: dolor/inflamación aguda. Fiebre aislada no es indicación.",
        "dose": "Adultos: inicialmente 100–150 mg/día, divididos en 2–3 tomas.",
        "pediatricDose": "≥1 año: 0,5–2 mg/kg/día en 2–3 tomas; artritis juvenil hasta 3 mg/kg/día. Máximo 150 mg/día.",
        "renalDose": "Evitar en enfermedad renal avanzada; controlar creatinina, volumen y potasio.",
        "hepaticDose": "Contraindicado en insuficiencia hepática grave en varias fichas; controlar transaminasas, especialmente 4–8 semanas.",
        "commonAdverseEffects": "Dispepsia, náusea, dolor abdominal, edema y cefalea.",
        "dangerousAdverseEffects": "Infarto/ACV, sangrado/perforación GI, lesión renal/hepática, SCAR y anafilaxia.",
        "adverseEffects": "Dispepsia, náusea, dolor abdominal, edema y cefalea. Graves: Infarto/ACV, sangrado/perforación GI, lesión renal/hepática, SCAR y anafilaxia.",
        "contraindications": "Alergia a AINE/asma por aspirina, perioperatorio de CABG, sangrado GI activo; otras por producto.",
        "interactions": "Anticoagulantes/antiagregantes, otros AINE, litio, metotrexato, IECA/ARA2/diuréticos y CYP2C9.",
        "monitoring": "Dolor, PA, edema, GI/sangrado, hemograma, riñón, potasio e hígado.",
        "administration": "Vía oral, preferentemente con comidas; contar en cuchara.",
        "preparation": "Agitar 1 minuto; suspensión no soluble en agua/leche/jugo.",
        "infusionProtocol": "No aplicable a la presentación oral.",
        "pregnancy": "Evitar desde 20 semanas si es posible y contraindicado en tercer trimestre según alerta regulatoria.",
        "lactation": "El prospecto desaconseja durante lactancia.",
        "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
        "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
        "clinicalPearls": "No intercambiar sales, concentraciones ni goteros.",
        "guidelineRecommendations": "Esta preparación usa prospectos y texto de referencia preexistente; no se realizó validación independiente de guías.",
        "safetyFlags": "CANDIDATO NUEVO: revisión médica pendiente; cálculos y publicación bloqueados. CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
        "alerts": "Infarto/ACV, sangrado/perforación GI, lesión renal/hepática, SCAR y anafilaxia. Dose bloqueada sem indicação, formulação, risco CV/GI/renal/hepático, gestação e total diário de todos os AINE.",
        "references": [
          "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=diclofenac",
          "2. Fonte regulatória primária consultada em 2026-09-18: https://www.fda.gov/drugs/drug-safety-and-availability/fda-recommends-avoiding-use-nsaid-pregnancy-20-weeks-or-later-because-they-can-result-low-amniotic-fluid",
          "https://portal.novartis.com.br/medicamentos/wp-content/uploads/2021/10/Bula-CATAFLAM-Suspensao-Gotas-Medico.pdf",
          "https://portal.novartis.com.br/medicamentos/wp-content/uploads/2021/10/Bula-CATAFLAM-Suspensao-Gotas-Paciente.pdf"
        ],
        "ref": "https://portal.novartis.com.br/medicamentos/wp-content/uploads/2021/10/Bula-CATAFLAM-Suspensao-Gotas-Medico.pdf"
      }
    }
  },
  "diclofenaco_supositorio": {
    "id": "diclofenaco_supositorio",
    "name": {
      "pt": "Diclofenaco sódico — supositório",
      "es": "Diclofenaco sódico — supositorio"
    },
    "category": "gold33",
    "mcGoldClinicalV1": {
      "meta": {
        "schema": "mc-gold-clinical-v1",
        "requiredFieldCount": 33,
        "lote": "093_NOVO_CANDIDATO",
        "approvedSha256": "720dc1dc273c189f6552d451208b031b9cdbca8319a7dc175d4419ac39e13fbc",
        "zipSha256": "e29687c1f949e39a4eeb2ce764d444bf840900034fe78da29de2a8770755e98f",
        "referenceOnly": true,
        "calculationAuthorized": false,
        "publicationAuthorized": false,
        "historicalApprovalApplies": false,
        "clinicalPackagePublicationState": "BLOQUEADA",
        "releaseAuthorization": {
          "source": "USER_EXPLICIT_DEPLOY_AUTHORIZATION_2026_09_21",
          "referencePublicationAuthorized": true,
          "calculationAuthorized": false
        },
        "packageRecordMetadata": {
          "ID": "diclofenaco_supositorio",
          "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
          "PROVENIENCIA": {
            "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
            "templatePath": "data/drugs/diclofenaco.json",
            "templateSha256": "0c9f069bb319d807954cdffdffb0941600c7b4bf48c9b04c5a1474ae1f6a7f02",
            "sourcesConsulted": "2026-09-21",
            "primarySources": [
              "https://www.medicines.org.uk/emc/product/1044/smpc"
            ],
            "newProductSpecificFields": [
              "name",
              "commercialNames",
              "presentation",
              "presentations",
              "indications",
              "dose",
              "pediatricDose",
              "administration",
              "preparation",
              "infusionProtocol",
              "contraindications",
              "clinicalPearls"
            ],
            "inheritedFieldsRequiringReview": [
              "class",
              "pharmacologicClass",
              "pharmacodynamics",
              "commonAdverseEffects",
              "dangerousAdverseEffects",
              "adverseEffects",
              "interactions",
              "monitoring",
              "pregnancy",
              "lactation",
              "specialPopulations",
              "patientEducation",
              "alerts",
              "mechanism",
              "pharmacokinetics",
              "renalDose",
              "hepaticDose"
            ],
            "templateClinicalMetadata": {
              "status": "PASS_CLINICAL_HOMOLOGATION",
              "sourceOwner": "database/analgesicos.js",
              "sourceField": "diclofenaco.mcGoldClinicalV1",
              "lote": "025",
              "requiredFields": 33,
              "approvedSha256": "f490066cbf88c2c1fc49fde254c0e52699a8a5320bd3cfb2ee1a9d3050dd9c7f",
              "calculationAuthorized": false,
              "publicationAuthorized": true,
              "clinicalPackagePublicationState": "NAO_AUTORIZADA",
              "ownerPublicationAuthorization": "mission10-owner-confirmed"
            }
          },
          "STATES": {
            "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
            "HOMOLOGACAO_DADOS": "SIM",
            "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
            "INTEGRACAO_RUNTIME": "NAO",
            "INTEGRACAO_TECNICA": "NAO_INICIADA",
            "PUBLICACAO": "BLOQUEADA"
          },
          "calculationAuthorized": false,
          "publicationAuthorized": false,
          "HOMOLOGACAO": {
            "LISTA": "NOVA_LISTA_GOLD33_V1",
            "LOTE": "093_NOVO_CANDIDATO",
            "MEDICO_REVISOR": "Dra Eugenia Marques",
            "DATA_REVISAO": "20-09-2026",
            "RESULTADO": "Aprovado integralmente",
            "ARQUIVO_REVISADO": "01_NOVO_CANDIDATO_093.json",
            "EXCECOES_INFORMADAS": 0,
            "historicalApprovalApplies": false,
            "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
            "calculationAuthorized": false,
            "publicationAuthorized": false,
            "INTEGRACAO_RUNTIME": "NAO",
            "INTEGRACAO_TECNICA": "NAO_INICIADA",
            "PUBLICACAO": "BLOQUEADA",
            "nota": "O parecer se aplica exclusivamente ao novo candidato 093 submetido nesta conversa. Nenhuma homologacao historica do Lote 093 original se transfere para este conteudo.",
            "CLINICAL_CONTENT_FROZEN": true,
            "reviewedCandidateSha256": "d37488285baa1b0343e2232153a4554cdb1bc88ae828d2c0550331644ba0d84b",
            "approvalBinding": "USER_CONFIRMED_LOCAL_CANDIDATE",
            "approvalPackageSha256": "fa131a03c1c81ae4244b520a055113617ec7f1d617f7078722437521f403aebf"
          }
        },
        "packageRestrictions": {
          "historicalApprovalApplies": false,
          "items": [
            {
              "id": "diclofenaco_gotas",
              "originalRecordMetadata": {
                "ID": "diclofenaco_gotas",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/diclofenaco.json",
                  "templateSha256": "0c9f069bb319d807954cdffdffb0941600c7b4bf48c9b04c5a1474ae1f6a7f02",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://portal.novartis.com.br/medicamentos/wp-content/uploads/2021/10/Bula-CATAFLAM-Suspensao-Gotas-Medico.pdf",
                    "https://portal.novartis.com.br/medicamentos/wp-content/uploads/2021/10/Bula-CATAFLAM-Suspensao-Gotas-Paciente.pdf"
                  ],
                  "newProductSpecificFields": [
                    "name",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "indications",
                    "dose",
                    "pediatricDose",
                    "administration",
                    "preparation",
                    "infusionProtocol",
                    "lactation",
                    "clinicalPearls"
                  ],
                  "inheritedFieldsRequiringReview": [
                    "class",
                    "pharmacologicClass",
                    "pharmacodynamics",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "pregnancy",
                    "specialPopulations",
                    "patientEducation",
                    "alerts",
                    "mechanism",
                    "pharmacokinetics",
                    "renalDose",
                    "hepaticDose"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/analgesicos.js",
                    "sourceField": "diclofenaco.mcGoldClinicalV1",
                    "lote": "025",
                    "requiredFields": 33,
                    "approvedSha256": "f490066cbf88c2c1fc49fde254c0e52699a8a5320bd3cfb2ee1a9d3050dd9c7f",
                    "calculationAuthorized": false,
                    "publicationAuthorized": true,
                    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
                    "ownerPublicationAuthorization": "mission10-owner-confirmed"
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "diclofenaco_supositorio",
              "originalRecordMetadata": {
                "ID": "diclofenaco_supositorio",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/diclofenaco.json",
                  "templateSha256": "0c9f069bb319d807954cdffdffb0941600c7b4bf48c9b04c5a1474ae1f6a7f02",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://www.medicines.org.uk/emc/product/1044/smpc"
                  ],
                  "newProductSpecificFields": [
                    "name",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "indications",
                    "dose",
                    "pediatricDose",
                    "administration",
                    "preparation",
                    "infusionProtocol",
                    "contraindications",
                    "clinicalPearls"
                  ],
                  "inheritedFieldsRequiringReview": [
                    "class",
                    "pharmacologicClass",
                    "pharmacodynamics",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "interactions",
                    "monitoring",
                    "pregnancy",
                    "lactation",
                    "specialPopulations",
                    "patientEducation",
                    "alerts",
                    "mechanism",
                    "pharmacokinetics",
                    "renalDose",
                    "hepaticDose"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/analgesicos.js",
                    "sourceField": "diclofenaco.mcGoldClinicalV1",
                    "lote": "025",
                    "requiredFields": 33,
                    "approvedSha256": "f490066cbf88c2c1fc49fde254c0e52699a8a5320bd3cfb2ee1a9d3050dd9c7f",
                    "calculationAuthorized": false,
                    "publicationAuthorized": true,
                    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
                    "ownerPublicationAuthorization": "mission10-owner-confirmed"
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "cetoprofeno_gotas",
              "originalRecordMetadata": {
                "ID": "cetoprofeno_gotas",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/cetoprofeno.json",
                  "templateSha256": "92e70a001d201e6a9b143907d4f6eef1e4c778615b42500884f6c502b82ec6bb",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://eurofarma.com.br/produtos/bulas/view/healthcare/pt/bula-cetoprofeno-solucao-oral-gotas.html",
                    "https://eurofarma.com.br/produtos/bulas/view/patient/pt/bula-cetoprofeno-solucao-oral-gotas.html"
                  ],
                  "newProductSpecificFields": [
                    "name",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "dose",
                    "pediatricDose",
                    "renalDose",
                    "hepaticDose",
                    "administration",
                    "preparation",
                    "pregnancy",
                    "infusionProtocol"
                  ],
                  "inheritedFieldsRequiringReview": [
                    "class",
                    "pharmacologicClass",
                    "mechanism",
                    "pharmacodynamics",
                    "pharmacokinetics",
                    "indications",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "lactation",
                    "specialPopulations",
                    "patientEducation",
                    "clinicalPearls",
                    "alerts"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/analgesicos.js",
                    "sourceField": "cetoprofeno.mcGoldClinicalV1",
                    "lote": "017",
                    "requiredFields": 33,
                    "approvedSha256": "253c17c2327715b3e25ab80e7138de200e935b80e7d849c1c6088a69116420a3",
                    "calculationAuthorized": false,
                    "publicationAuthorized": true,
                    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
                    "ownerPublicationAuthorization": "mission10-owner-confirmed"
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "salbutamol_spray",
              "originalRecordMetadata": {
                "ID": "salbutamol_spray",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/salbutamol_nebulizacao.json",
                  "templateSha256": "11760e3f8bd9271bc9c7e4c851a2ad9799abd3ce7cc2faa78a73bd3753833e21",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://www.medicines.org.uk/emc/product/850/smpc",
                    "https://www.medicines.org.uk/emc/files/pil.850.pdf"
                  ],
                  "newProductSpecificFields": [
                    "name",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "indications",
                    "pharmacokinetics",
                    "dose",
                    "pediatricDose",
                    "administration",
                    "preparation",
                    "infusionProtocol",
                    "clinicalPearls",
                    "safetyFlags",
                    "alerts"
                  ],
                  "inheritedFieldsRequiringReview": [
                    "class",
                    "pharmacologicClass",
                    "mechanism",
                    "pharmacodynamics",
                    "renalDose",
                    "hepaticDose",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "pregnancy",
                    "lactation",
                    "specialPopulations",
                    "patientEducation"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/gold33_nova_lista.js",
                    "sourceField": "salbutamol_nebulizacao.mcGoldClinicalV1",
                    "requiredFields": 33,
                    "lote": "103",
                    "approvedSha256": "3dd8735151ec6ccf6dcd71dd5262642970c55bff5d753c59dcec104bb685a419",
                    "calculationAuthorized": false,
                    "publicationAuthorized": false,
                    "clinicalPackagePublicationState": "BLOQUEADA",
                    "list": "NOVA_LISTA_GOLD33_V1",
                    "zipSha256": "167045215deac33b67a58cf485f504a0a70ac17a45848dd73c59ec6ea4235aac",
                    "packageFile": "GOLD33_NOVA_LISTA_LOTE_103_HOMOLOGADO_CLINICAMENTE.zip",
                    "packageRestrictions": [
                      {
                        "id": "adrenalina_autoinjetavel",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "PRODUTO_ESPECIFICO_AUVIQ",
                          "PESO_MENOR_7_5_BLOQUEADO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "aminofilina_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "TDM_OBRIGATORIO",
                          "AUTOMACAO_MANUTENCAO_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "betametasona_injetavel",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "VIA_IV_BLOQUEADA",
                          "INDICACAO_ROTA_OBRIGATORIAS"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "brometo_de_ipratropio_nebulizacao",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "CALCULO_PEDIATRICO_BLOQUEADO",
                          "VIA_NAO_INALATORIA_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "dexametasona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "CALCULO_PEDIATRICO_BLOQUEADO",
                          "AUTOMACAO_EXIGE_INDICACAO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "fenoterol_gotas",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "DOSE_ATUAL_NAO_VERIFICADA",
                          "VIA_AUTOMATICA_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [
                          "BULA_PRIMARIA_ATUAL_PENDENTE"
                        ],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "hidrocortisona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "AUTOMACAO_EXIGE_INDICACAO",
                          "CALCULO_PEDIATRICO_BLOQUEADO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "metilprednisolona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "AUTOMACAO_EXIGE_INDICACAO",
                          "FORMULACAO_CONSERVANTE_DEVE_SER_CONFIRMADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "prometazina_im",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "VIA_IV_BLOQUEADA_NESTA_FICHA",
                          "IDADE_MENOR_2_CONTRAINDICADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "salbutamol_nebulizacao",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "IDADE_MENOR_2_BLOQUEADA_NESTE_ROTULO",
                          "PESO_MENOR_15_EXIGE_OUTRA_CONCENTRACAO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      }
                    ],
                    "packageRecordMetadata": {
                      "ID": "salbutamol_nebulizacao",
                      "NOTA_REVISAO_CLINICA": "HOMOLOGADO CLINICAMENTE em 20-09-2026 por Dra Eugenia Marques; resultado APROVADO INTEGRALMENTE; sem excecoes informadas. Conteudo clinico congelado; bloqueios, lacunas justificadas e reconciliacoes preservados.",
                      "PROVENIENCIA": "NEW_ENTRY_NO_LEGACY_BASELINE",
                      "ESCOPO_VALIDADO": "Salbutamol/albuterol 0,083% 2,5 mg/3 mL nebulizacao - EUA",
                      "BLOQUEIOS_CLINICOS": [
                        "IDADE_MENOR_2_BLOQUEADA_NESTE_ROTULO",
                        "PESO_MENOR_15_EXIGE_OUTRA_CONCENTRACAO"
                      ],
                      "PENDENCIAS_NAO_BLOQUEANTES": [],
                      "HOMOLOGACAO": {
                        "LISTA": "NOVA_LISTA_GOLD33_V1",
                        "LOTE": "103",
                        "MEDICO_REVISOR": "Dra Eugenia Marques",
                        "DATA_REVISAO": "20-09-2026",
                        "RESULTADO": "Aprovado integralmente",
                        "ARQUIVO_REVISADO": "103",
                        "EXCECOES_INFORMADAS": 0,
                        "REVISAO_CLINICA": "HOMOLOGADA",
                        "HOMOLOGACAO_DADOS": "SIM",
                        "INTEGRACAO_TECNICA": "NAO_INICIADA",
                        "PUBLICACAO": "BLOQUEADA",
                        "CLINICAL_CONTENT_FROZEN": true
                      }
                    },
                    "supersededPackages": [
                      "GOLD33_NOVA_LISTA_LOTE_088_HOMOLOGADO_CLINICAMENTE.zip"
                    ],
                    "referenceOnly": true
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "salbutamol_solucao_inalatoria",
              "originalRecordMetadata": {
                "ID": "salbutamol_solucao_inalatoria",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/salbutamol_nebulizacao.json",
                  "templateSha256": "11760e3f8bd9271bc9c7e4c851a2ad9799abd3ce7cc2faa78a73bd3753833e21",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=b72742df-1a6b-4483-aff3-3e79db5e015d"
                  ],
                  "newProductSpecificFields": [],
                  "inheritedFieldsRequiringReview": [
                    "name",
                    "class",
                    "pharmacologicClass",
                    "mechanism",
                    "pharmacodynamics",
                    "pharmacokinetics",
                    "indications",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "dose",
                    "pediatricDose",
                    "renalDose",
                    "hepaticDose",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "administration",
                    "preparation",
                    "infusionProtocol",
                    "pregnancy",
                    "lactation",
                    "specialPopulations",
                    "patientEducation",
                    "clinicalPearls",
                    "alerts"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/gold33_nova_lista.js",
                    "sourceField": "salbutamol_nebulizacao.mcGoldClinicalV1",
                    "requiredFields": 33,
                    "lote": "103",
                    "approvedSha256": "3dd8735151ec6ccf6dcd71dd5262642970c55bff5d753c59dcec104bb685a419",
                    "calculationAuthorized": false,
                    "publicationAuthorized": false,
                    "clinicalPackagePublicationState": "BLOQUEADA",
                    "list": "NOVA_LISTA_GOLD33_V1",
                    "zipSha256": "167045215deac33b67a58cf485f504a0a70ac17a45848dd73c59ec6ea4235aac",
                    "packageFile": "GOLD33_NOVA_LISTA_LOTE_103_HOMOLOGADO_CLINICAMENTE.zip",
                    "packageRestrictions": [
                      {
                        "id": "adrenalina_autoinjetavel",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "PRODUTO_ESPECIFICO_AUVIQ",
                          "PESO_MENOR_7_5_BLOQUEADO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "aminofilina_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "TDM_OBRIGATORIO",
                          "AUTOMACAO_MANUTENCAO_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "betametasona_injetavel",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "VIA_IV_BLOQUEADA",
                          "INDICACAO_ROTA_OBRIGATORIAS"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "brometo_de_ipratropio_nebulizacao",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "CALCULO_PEDIATRICO_BLOQUEADO",
                          "VIA_NAO_INALATORIA_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "dexametasona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "CALCULO_PEDIATRICO_BLOQUEADO",
                          "AUTOMACAO_EXIGE_INDICACAO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "fenoterol_gotas",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "DOSE_ATUAL_NAO_VERIFICADA",
                          "VIA_AUTOMATICA_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [
                          "BULA_PRIMARIA_ATUAL_PENDENTE"
                        ],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "hidrocortisona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "AUTOMACAO_EXIGE_INDICACAO",
                          "CALCULO_PEDIATRICO_BLOQUEADO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "metilprednisolona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "AUTOMACAO_EXIGE_INDICACAO",
                          "FORMULACAO_CONSERVANTE_DEVE_SER_CONFIRMADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "prometazina_im",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "VIA_IV_BLOQUEADA_NESTA_FICHA",
                          "IDADE_MENOR_2_CONTRAINDICADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "salbutamol_nebulizacao",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "IDADE_MENOR_2_BLOQUEADA_NESTE_ROTULO",
                          "PESO_MENOR_15_EXIGE_OUTRA_CONCENTRACAO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      }
                    ],
                    "packageRecordMetadata": {
                      "ID": "salbutamol_nebulizacao",
                      "NOTA_REVISAO_CLINICA": "HOMOLOGADO CLINICAMENTE em 20-09-2026 por Dra Eugenia Marques; resultado APROVADO INTEGRALMENTE; sem excecoes informadas. Conteudo clinico congelado; bloqueios, lacunas justificadas e reconciliacoes preservados.",
                      "PROVENIENCIA": "NEW_ENTRY_NO_LEGACY_BASELINE",
                      "ESCOPO_VALIDADO": "Salbutamol/albuterol 0,083% 2,5 mg/3 mL nebulizacao - EUA",
                      "BLOQUEIOS_CLINICOS": [
                        "IDADE_MENOR_2_BLOQUEADA_NESTE_ROTULO",
                        "PESO_MENOR_15_EXIGE_OUTRA_CONCENTRACAO"
                      ],
                      "PENDENCIAS_NAO_BLOQUEANTES": [],
                      "HOMOLOGACAO": {
                        "LISTA": "NOVA_LISTA_GOLD33_V1",
                        "LOTE": "103",
                        "MEDICO_REVISOR": "Dra Eugenia Marques",
                        "DATA_REVISAO": "20-09-2026",
                        "RESULTADO": "Aprovado integralmente",
                        "ARQUIVO_REVISADO": "103",
                        "EXCECOES_INFORMADAS": 0,
                        "REVISAO_CLINICA": "HOMOLOGADA",
                        "HOMOLOGACAO_DADOS": "SIM",
                        "INTEGRACAO_TECNICA": "NAO_INICIADA",
                        "PUBLICACAO": "BLOQUEADA",
                        "CLINICAL_CONTENT_FROZEN": true
                      }
                    },
                    "supersededPackages": [
                      "GOLD33_NOVA_LISTA_LOTE_088_HOMOLOGADO_CLINICAMENTE.zip"
                    ],
                    "referenceOnly": true
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false,
                "RECONCILIACAO_CANONICA": {
                  "candidateAliasOf": "salbutamol_nebulizacao",
                  "status": "PENDENTE_REVISAO_DE_ESCOPO",
                  "action": "Não adicionar um segundo registro ativo para o mesmo produto."
                }
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "fenoterol_solucao_inalatoria",
              "originalRecordMetadata": {
                "ID": "fenoterol_solucao_inalatoria",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/fenoterol_gotas.json",
                  "templateSha256": "75acfdff650220647f3251f2d6f9139d43b22db06064b3677009172ad0216990",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://www.gov.br/anvisa/pt-br/assuntos/medicamentos/cmed/precos/anos-anteriores/arquivos/5333json-file-1/%40%40download/file"
                  ],
                  "newProductSpecificFields": [],
                  "inheritedFieldsRequiringReview": [
                    "name",
                    "class",
                    "pharmacologicClass",
                    "mechanism",
                    "pharmacodynamics",
                    "pharmacokinetics",
                    "indications",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "dose",
                    "pediatricDose",
                    "renalDose",
                    "hepaticDose",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "administration",
                    "preparation",
                    "infusionProtocol",
                    "pregnancy",
                    "lactation",
                    "specialPopulations",
                    "patientEducation",
                    "clinicalPearls",
                    "alerts"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/gold33_nova_lista.js",
                    "sourceField": "fenoterol_gotas.mcGoldClinicalV1",
                    "requiredFields": 33,
                    "lote": "103",
                    "approvedSha256": "3dd8735151ec6ccf6dcd71dd5262642970c55bff5d753c59dcec104bb685a419",
                    "calculationAuthorized": false,
                    "publicationAuthorized": false,
                    "clinicalPackagePublicationState": "BLOQUEADA",
                    "list": "NOVA_LISTA_GOLD33_V1",
                    "zipSha256": "167045215deac33b67a58cf485f504a0a70ac17a45848dd73c59ec6ea4235aac",
                    "packageFile": "GOLD33_NOVA_LISTA_LOTE_103_HOMOLOGADO_CLINICAMENTE.zip",
                    "packageRestrictions": [
                      {
                        "id": "adrenalina_autoinjetavel",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "PRODUTO_ESPECIFICO_AUVIQ",
                          "PESO_MENOR_7_5_BLOQUEADO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "aminofilina_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "TDM_OBRIGATORIO",
                          "AUTOMACAO_MANUTENCAO_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "betametasona_injetavel",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "VIA_IV_BLOQUEADA",
                          "INDICACAO_ROTA_OBRIGATORIAS"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "brometo_de_ipratropio_nebulizacao",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "CALCULO_PEDIATRICO_BLOQUEADO",
                          "VIA_NAO_INALATORIA_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "dexametasona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "CALCULO_PEDIATRICO_BLOQUEADO",
                          "AUTOMACAO_EXIGE_INDICACAO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "fenoterol_gotas",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "DOSE_ATUAL_NAO_VERIFICADA",
                          "VIA_AUTOMATICA_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [
                          "BULA_PRIMARIA_ATUAL_PENDENTE"
                        ],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "hidrocortisona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "AUTOMACAO_EXIGE_INDICACAO",
                          "CALCULO_PEDIATRICO_BLOQUEADO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "metilprednisolona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "AUTOMACAO_EXIGE_INDICACAO",
                          "FORMULACAO_CONSERVANTE_DEVE_SER_CONFIRMADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "prometazina_im",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "VIA_IV_BLOQUEADA_NESTA_FICHA",
                          "IDADE_MENOR_2_CONTRAINDICADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "salbutamol_nebulizacao",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "IDADE_MENOR_2_BLOQUEADA_NESTE_ROTULO",
                          "PESO_MENOR_15_EXIGE_OUTRA_CONCENTRACAO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      }
                    ],
                    "packageRecordMetadata": {
                      "ID": "fenoterol_gotas",
                      "NOTA_REVISAO_CLINICA": "HOMOLOGADO CLINICAMENTE em 20-09-2026 por Dra Eugenia Marques; resultado APROVADO INTEGRALMENTE; sem excecoes informadas. Conteudo clinico congelado; bloqueios, lacunas justificadas e reconciliacoes preservados.",
                      "PROVENIENCIA": "NEW_ENTRY_NO_LEGACY_BASELINE",
                      "ESCOPO_VALIDADO": "Fenoterol 5 mg/mL gotas - Brasil; dose atual bloqueada",
                      "BLOQUEIOS_CLINICOS": [
                        "DOSE_ATUAL_NAO_VERIFICADA",
                        "VIA_AUTOMATICA_BLOQUEADA"
                      ],
                      "PENDENCIAS_NAO_BLOQUEANTES": [
                        "BULA_PRIMARIA_ATUAL_PENDENTE"
                      ],
                      "HOMOLOGACAO": {
                        "LISTA": "NOVA_LISTA_GOLD33_V1",
                        "LOTE": "103",
                        "MEDICO_REVISOR": "Dra Eugenia Marques",
                        "DATA_REVISAO": "20-09-2026",
                        "RESULTADO": "Aprovado integralmente",
                        "ARQUIVO_REVISADO": "103",
                        "EXCECOES_INFORMADAS": 0,
                        "REVISAO_CLINICA": "HOMOLOGADA",
                        "HOMOLOGACAO_DADOS": "SIM",
                        "INTEGRACAO_TECNICA": "NAO_INICIADA",
                        "PUBLICACAO": "BLOQUEADA",
                        "CLINICAL_CONTENT_FROZEN": true
                      }
                    },
                    "supersededPackages": [
                      "GOLD33_NOVA_LISTA_LOTE_088_HOMOLOGADO_CLINICAMENTE.zip"
                    ],
                    "referenceOnly": true
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false,
                "RECONCILIACAO_CANONICA": {
                  "candidateAliasOf": "fenoterol_gotas",
                  "status": "PENDENTE_REVISAO_DE_ESCOPO",
                  "action": "Não adicionar um segundo registro ativo para o mesmo produto."
                }
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "ipratropio_solucao_inalatoria",
              "originalRecordMetadata": {
                "ID": "ipratropio_solucao_inalatoria",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/brometo_de_ipratropio_nebulizacao.json",
                  "templateSha256": "8d7e3cddc70cbd671654f0a934055d306657bf6412a6f8452a008684da41bafa",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3249aea8-a395-f09f-e063-6294a90a2d8b"
                  ],
                  "newProductSpecificFields": [],
                  "inheritedFieldsRequiringReview": [
                    "name",
                    "class",
                    "pharmacologicClass",
                    "mechanism",
                    "pharmacodynamics",
                    "pharmacokinetics",
                    "indications",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "dose",
                    "pediatricDose",
                    "renalDose",
                    "hepaticDose",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "administration",
                    "preparation",
                    "infusionProtocol",
                    "pregnancy",
                    "lactation",
                    "specialPopulations",
                    "patientEducation",
                    "clinicalPearls",
                    "alerts"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/gold33_nova_lista.js",
                    "sourceField": "brometo_de_ipratropio_nebulizacao.mcGoldClinicalV1",
                    "requiredFields": 33,
                    "lote": "103",
                    "approvedSha256": "3dd8735151ec6ccf6dcd71dd5262642970c55bff5d753c59dcec104bb685a419",
                    "calculationAuthorized": false,
                    "publicationAuthorized": false,
                    "clinicalPackagePublicationState": "BLOQUEADA",
                    "list": "NOVA_LISTA_GOLD33_V1",
                    "zipSha256": "167045215deac33b67a58cf485f504a0a70ac17a45848dd73c59ec6ea4235aac",
                    "packageFile": "GOLD33_NOVA_LISTA_LOTE_103_HOMOLOGADO_CLINICAMENTE.zip",
                    "packageRestrictions": [
                      {
                        "id": "adrenalina_autoinjetavel",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "PRODUTO_ESPECIFICO_AUVIQ",
                          "PESO_MENOR_7_5_BLOQUEADO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "aminofilina_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "TDM_OBRIGATORIO",
                          "AUTOMACAO_MANUTENCAO_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "betametasona_injetavel",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "VIA_IV_BLOQUEADA",
                          "INDICACAO_ROTA_OBRIGATORIAS"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "brometo_de_ipratropio_nebulizacao",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "CALCULO_PEDIATRICO_BLOQUEADO",
                          "VIA_NAO_INALATORIA_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "dexametasona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "CALCULO_PEDIATRICO_BLOQUEADO",
                          "AUTOMACAO_EXIGE_INDICACAO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "fenoterol_gotas",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "DOSE_ATUAL_NAO_VERIFICADA",
                          "VIA_AUTOMATICA_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [
                          "BULA_PRIMARIA_ATUAL_PENDENTE"
                        ],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "hidrocortisona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "AUTOMACAO_EXIGE_INDICACAO",
                          "CALCULO_PEDIATRICO_BLOQUEADO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "metilprednisolona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "AUTOMACAO_EXIGE_INDICACAO",
                          "FORMULACAO_CONSERVANTE_DEVE_SER_CONFIRMADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "prometazina_im",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "VIA_IV_BLOQUEADA_NESTA_FICHA",
                          "IDADE_MENOR_2_CONTRAINDICADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "salbutamol_nebulizacao",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "IDADE_MENOR_2_BLOQUEADA_NESTE_ROTULO",
                          "PESO_MENOR_15_EXIGE_OUTRA_CONCENTRACAO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      }
                    ],
                    "packageRecordMetadata": {
                      "ID": "brometo_de_ipratropio_nebulizacao",
                      "NOTA_REVISAO_CLINICA": "HOMOLOGADO CLINICAMENTE em 20-09-2026 por Dra Eugenia Marques; resultado APROVADO INTEGRALMENTE; sem excecoes informadas. Conteudo clinico congelado; bloqueios, lacunas justificadas e reconciliacoes preservados.",
                      "PROVENIENCIA": "NEW_ENTRY_NO_LEGACY_BASELINE",
                      "ESCOPO_VALIDADO": "Ipratropium 0,02% 500 mcg/2,5 mL - EUA",
                      "BLOQUEIOS_CLINICOS": [
                        "CALCULO_PEDIATRICO_BLOQUEADO",
                        "VIA_NAO_INALATORIA_BLOQUEADA"
                      ],
                      "PENDENCIAS_NAO_BLOQUEANTES": [],
                      "HOMOLOGACAO": {
                        "LISTA": "NOVA_LISTA_GOLD33_V1",
                        "LOTE": "103",
                        "MEDICO_REVISOR": "Dra Eugenia Marques",
                        "DATA_REVISAO": "20-09-2026",
                        "RESULTADO": "Aprovado integralmente",
                        "ARQUIVO_REVISADO": "103",
                        "EXCECOES_INFORMADAS": 0,
                        "REVISAO_CLINICA": "HOMOLOGADA",
                        "HOMOLOGACAO_DADOS": "SIM",
                        "INTEGRACAO_TECNICA": "NAO_INICIADA",
                        "PUBLICACAO": "BLOQUEADA",
                        "CLINICAL_CONTENT_FROZEN": true
                      }
                    },
                    "supersededPackages": [
                      "GOLD33_NOVA_LISTA_LOTE_087_HOMOLOGADO_CLINICAMENTE.zip"
                    ],
                    "referenceOnly": true
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false,
                "RECONCILIACAO_CANONICA": {
                  "candidateAliasOf": "brometo_de_ipratropio_nebulizacao",
                  "status": "PENDENTE_REVISAO_DE_ESCOPO",
                  "action": "Não adicionar um segundo registro ativo para o mesmo produto."
                }
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "prednisolona_solucao_oral",
              "originalRecordMetadata": {
                "ID": "prednisolona_solucao_oral",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/prednisolona.json",
                  "templateSha256": "1fd9411f1fb243102af07912d9e9bf1e0684527b96d01b0a8cefd63948a73259",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=a0d74ae0-7b2d-4d36-9211-c76f5063b5a9",
                    "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=7262fc84-3db2-4475-8ae4-6bec4477cb81"
                  ],
                  "newProductSpecificFields": [
                    "name",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "mechanism",
                    "pharmacodynamics",
                    "pharmacokinetics",
                    "dose",
                    "pediatricDose",
                    "renalDose",
                    "hepaticDose",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "administration",
                    "preparation",
                    "infusionProtocol",
                    "pregnancy",
                    "lactation"
                  ],
                  "inheritedFieldsRequiringReview": [
                    "class",
                    "pharmacologicClass",
                    "indications",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "specialPopulations",
                    "patientEducation",
                    "clinicalPearls",
                    "alerts"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/imuno_corticoide.js",
                    "sourceField": "prednisolona.mcGoldClinicalV1",
                    "lote": "064",
                    "requiredFields": 33,
                    "approvedSha256": "21c1e99276216e72bd2a7201eddd567a0335bd6346374d413459182168e7cdea",
                    "calculationAuthorized": false,
                    "publicationAuthorized": true,
                    "clinicalPackagePublicationState": "LIBERADA_COM_RESTRICOES_GRANULARES",
                    "ownerPublicationAuthorization": "lote002-owner-confirmed"
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "dexametasona_elixir",
              "originalRecordMetadata": {
                "ID": "dexametasona_elixir",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/dexametasona.json",
                  "templateSha256": "176ed420ac1c027d82deb4113fc025c47b8de2fb7886d3e24344c0a4172dcce1",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=7b51ffce-ec64-4b49-8870-b9666537c541"
                  ],
                  "newProductSpecificFields": [
                    "name",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "dose",
                    "pediatricDose",
                    "administration",
                    "preparation",
                    "infusionProtocol",
                    "clinicalPearls"
                  ],
                  "inheritedFieldsRequiringReview": [
                    "class",
                    "pharmacologicClass",
                    "mechanism",
                    "pharmacodynamics",
                    "pharmacokinetics",
                    "indications",
                    "renalDose",
                    "hepaticDose",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "pregnancy",
                    "lactation",
                    "specialPopulations",
                    "patientEducation",
                    "alerts"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/imuno_corticoide.js",
                    "sourceField": "dexametasona.mcGoldClinicalV1",
                    "lote": "024",
                    "requiredFields": 33,
                    "approvedSha256": "9721657a393121ed360ce59ff910deb7cbb3b0fc3421608349c6fa584237305a",
                    "calculationAuthorized": false,
                    "publicationAuthorized": true,
                    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
                    "ownerPublicationAuthorization": "mission10-owner-confirmed"
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "budesonida_suspensao_inalatoria",
              "originalRecordMetadata": {
                "ID": "budesonida_suspensao_inalatoria",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/budesonida.json",
                  "templateSha256": "83faa465b16000c39d3c4e9904fab859797107253db21034238feb9f2ea9facd",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=1d139a25-9c17-4b3e-8ffd-b2d562cc00ee"
                  ],
                  "newProductSpecificFields": [
                    "name",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "indications",
                    "dose",
                    "pediatricDose",
                    "hepaticDose",
                    "administration",
                    "preparation",
                    "infusionProtocol"
                  ],
                  "inheritedFieldsRequiringReview": [
                    "class",
                    "pharmacologicClass",
                    "mechanism",
                    "pharmacodynamics",
                    "pharmacokinetics",
                    "renalDose",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "pregnancy",
                    "lactation",
                    "specialPopulations",
                    "patientEducation",
                    "clinicalPearls",
                    "alerts"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/pneumologia.js",
                    "sourceField": "budesonida.mcGoldClinicalV1",
                    "lote": "012",
                    "requiredFields": 33,
                    "approvedSha256": "33a04a022820507c1688fbebb735cd7d879bc3d0ef30a24f4ed7483f5cac16eb",
                    "calculationAuthorized": false,
                    "publicationAuthorized": true,
                    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
                    "ownerPublicationAuthorization": "mission10-owner-confirmed"
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            }
          ]
        }
      },
      "pt": {
        "name": "Diclofenaco sódico — supositório",
        "class": "AINE",
        "pharmacologicClass": "Inibição de COX e síntese de prostaglandinas",
        "commercialNames": "Voltarol; Reino Unido.",
        "presentation": "Supositório retal.",
        "presentations": "12,5; 25; 50; 100 mg.",
        "mechanism": "Inibição de COX e síntese de prostaglandinas. O efeito deve ser interpretado por indicação, formulação e exposição.",
        "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
        "pharmacokinetics": "Metabolismo hepático CYP2C9; alta ligação proteica e eliminação renal/biliar de metabólitos.",
        "indications": "Dor/inflamação; pediatria: artrite juvenil e dor pós-operatória nas idades autorizadas.",
        "dose": "Adultos: 75–150 mg/dia fracionados; máximo total 150 mg/dia.",
        "pediatricDose": "1–12 anos, artrite: 1–3 mg/kg/dia em 2–3 doses. 6–12 anos, pós-operatório: 1–2 mg/kg/dia, até 4 dias; somente 12,5/25 mg.",
        "renalDose": "Evitar em doença renal avançada; monitorar creatinina, volume e potássio.",
        "hepaticDose": "Contraindicado em insuficiência hepática grave em vários rótulos; monitorar transaminases, especialmente 4–8 semanas.",
        "commonAdverseEffects": "Dispepsia, náusea, dor abdominal, edema e cefaleia.",
        "dangerousAdverseEffects": "Infarto/AVC, sangramento/perfuração GI, lesão renal/hepática, SCAR e anafilaxia.",
        "adverseEffects": "Dispepsia, náusea, dor abdominal, edema e cefaleia. Graves: Infarto/AVC, sangramento/perfuração GI, lesão renal/hepática, SCAR e anafilaxia.",
        "contraindications": "Proctite; úlcera/hemorragia GI; falência renal/hepática; doença cardiovascular estabelecida; alergia a AINE; terceiro trimestre.",
        "interactions": "Anticoagulantes/antiagregantes, outros AINE, lítio, metotrexato, IECA/ARA2/diuréticos e CYP2C9.",
        "monitoring": "Dor, PA, edema, GI/sangramento, hemograma, rim, potássio e fígado.",
        "administration": "Via retal após evacuação; não ingerir.",
        "preparation": "Supositório pronto para administração retal.",
        "infusionProtocol": "Não aplicável.",
        "pregnancy": "Evitar a partir de 20 semanas se possível e contraindicado no 3º trimestre conforme alerta regulatório.",
        "lactation": "Baixa passagem; preferir menor dose/tempo e evitar tópico no mamilo.",
        "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
        "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
        "clinicalPearls": "50/100 mg não indicados para crianças.",
        "guidelineRecommendations": "Esta preparação usa bulas e texto de referência preexistente; não foi feita validação independente de diretrizes.",
        "safetyFlags": "CANDIDATO NOVO: revisão médica pendente; cálculos e publicação bloqueados. CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
        "alerts": "Infarto/AVC, sangramento/perfuração GI, lesão renal/hepática, SCAR e anafilaxia. Dose bloqueada sem indicação, formulação, risco CV/GI/renal/hepático, gestação e total diário de todos os AINE.",
        "references": [
          "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=diclofenac",
          "2. Fonte regulatória primária consultada em 2026-09-18: https://www.fda.gov/drugs/drug-safety-and-availability/fda-recommends-avoiding-use-nsaid-pregnancy-20-weeks-or-later-because-they-can-result-low-amniotic-fluid",
          "https://www.medicines.org.uk/emc/product/1044/smpc"
        ],
        "ref": "https://www.medicines.org.uk/emc/product/1044/smpc"
      },
      "es": {
        "name": "Diclofenaco sódico — supositorio",
        "class": "AINE",
        "pharmacologicClass": "Inhibición de COX y síntesis de prostaglandinas",
        "commercialNames": "Voltarol; Reino Unido.",
        "presentation": "Supositorio rectal.",
        "presentations": "12,5; 25; 50; 100 mg.",
        "mechanism": "Inhibición de COX y síntesis de prostaglandinas. El efecto debe interpretarse por indicación, formulación y exposición.",
        "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
        "pharmacokinetics": "Metabolismo hepático CYP2C9; alta unión proteica y eliminación renal/biliar de metabolitos.",
        "indications": "Dolor/inflamación; pediatría: artritis juvenil y dolor posoperatorio en edades autorizadas.",
        "dose": "Adultos: 75–150 mg/día divididos; máximo total 150 mg/día.",
        "pediatricDose": "1–12 años, artritis: 1–3 mg/kg/día en 2–3 dosis. 6–12 años, posoperatorio: 1–2 mg/kg/día, hasta 4 días; solo 12,5/25 mg.",
        "renalDose": "Evitar en enfermedad renal avanzada; controlar creatinina, volumen y potasio.",
        "hepaticDose": "Contraindicado en insuficiencia hepática grave en varias fichas; controlar transaminasas, especialmente 4–8 semanas.",
        "commonAdverseEffects": "Dispepsia, náusea, dolor abdominal, edema y cefalea.",
        "dangerousAdverseEffects": "Infarto/ACV, sangrado/perforación GI, lesión renal/hepática, SCAR y anafilaxia.",
        "adverseEffects": "Dispepsia, náusea, dolor abdominal, edema y cefalea. Graves: Infarto/ACV, sangrado/perforación GI, lesión renal/hepática, SCAR y anafilaxia.",
        "contraindications": "Proctitis; úlcera/hemorragia GI; falla renal/hepática; enfermedad cardiovascular establecida; alergia a AINE; tercer trimestre.",
        "interactions": "Anticoagulantes/antiagregantes, otros AINE, litio, metotrexato, IECA/ARA2/diuréticos y CYP2C9.",
        "monitoring": "Dolor, PA, edema, GI/sangrado, hemograma, riñón, potasio e hígado.",
        "administration": "Vía rectal tras evacuar; no ingerir.",
        "preparation": "Supositorio listo para administración rectal.",
        "infusionProtocol": "No aplicable.",
        "pregnancy": "Evitar desde 20 semanas si es posible y contraindicado en tercer trimestre según alerta regulatoria.",
        "lactation": "Bajo paso; preferir mínima dosis/tiempo y evitar tópico en pezón.",
        "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
        "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
        "clinicalPearls": "50/100 mg no indicados para niños.",
        "guidelineRecommendations": "Esta preparación usa prospectos y texto de referencia preexistente; no se realizó validación independiente de guías.",
        "safetyFlags": "CANDIDATO NUEVO: revisión médica pendiente; cálculos y publicación bloqueados. CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
        "alerts": "Infarto/ACV, sangrado/perforación GI, lesión renal/hepática, SCAR y anafilaxia. Dose bloqueada sem indicação, formulação, risco CV/GI/renal/hepático, gestação e total diário de todos os AINE.",
        "references": [
          "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=diclofenac",
          "2. Fonte regulatória primária consultada em 2026-09-18: https://www.fda.gov/drugs/drug-safety-and-availability/fda-recommends-avoiding-use-nsaid-pregnancy-20-weeks-or-later-because-they-can-result-low-amniotic-fluid",
          "https://www.medicines.org.uk/emc/product/1044/smpc"
        ],
        "ref": "https://www.medicines.org.uk/emc/product/1044/smpc"
      }
    }
  },
  "cetoprofeno_gotas": {
    "id": "cetoprofeno_gotas",
    "name": {
      "pt": "Cetoprofeno — gotas 20 mg/mL",
      "es": "Ketoprofeno — gotas 20 mg/mL"
    },
    "category": "gold33",
    "mcGoldClinicalV1": {
      "meta": {
        "schema": "mc-gold-clinical-v1",
        "requiredFieldCount": 33,
        "lote": "093_NOVO_CANDIDATO",
        "approvedSha256": "720dc1dc273c189f6552d451208b031b9cdbca8319a7dc175d4419ac39e13fbc",
        "zipSha256": "e29687c1f949e39a4eeb2ce764d444bf840900034fe78da29de2a8770755e98f",
        "referenceOnly": true,
        "calculationAuthorized": false,
        "publicationAuthorized": false,
        "historicalApprovalApplies": false,
        "clinicalPackagePublicationState": "BLOQUEADA",
        "releaseAuthorization": {
          "source": "USER_EXPLICIT_DEPLOY_AUTHORIZATION_2026_09_21",
          "referencePublicationAuthorized": true,
          "calculationAuthorized": false
        },
        "packageRecordMetadata": {
          "ID": "cetoprofeno_gotas",
          "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
          "PROVENIENCIA": {
            "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
            "templatePath": "data/drugs/cetoprofeno.json",
            "templateSha256": "92e70a001d201e6a9b143907d4f6eef1e4c778615b42500884f6c502b82ec6bb",
            "sourcesConsulted": "2026-09-21",
            "primarySources": [
              "https://eurofarma.com.br/produtos/bulas/view/healthcare/pt/bula-cetoprofeno-solucao-oral-gotas.html",
              "https://eurofarma.com.br/produtos/bulas/view/patient/pt/bula-cetoprofeno-solucao-oral-gotas.html"
            ],
            "newProductSpecificFields": [
              "name",
              "commercialNames",
              "presentation",
              "presentations",
              "dose",
              "pediatricDose",
              "renalDose",
              "hepaticDose",
              "administration",
              "preparation",
              "pregnancy",
              "infusionProtocol"
            ],
            "inheritedFieldsRequiringReview": [
              "class",
              "pharmacologicClass",
              "mechanism",
              "pharmacodynamics",
              "pharmacokinetics",
              "indications",
              "commonAdverseEffects",
              "dangerousAdverseEffects",
              "adverseEffects",
              "contraindications",
              "interactions",
              "monitoring",
              "lactation",
              "specialPopulations",
              "patientEducation",
              "clinicalPearls",
              "alerts"
            ],
            "templateClinicalMetadata": {
              "status": "PASS_CLINICAL_HOMOLOGATION",
              "sourceOwner": "database/analgesicos.js",
              "sourceField": "cetoprofeno.mcGoldClinicalV1",
              "lote": "017",
              "requiredFields": 33,
              "approvedSha256": "253c17c2327715b3e25ab80e7138de200e935b80e7d849c1c6088a69116420a3",
              "calculationAuthorized": false,
              "publicationAuthorized": true,
              "clinicalPackagePublicationState": "NAO_AUTORIZADA",
              "ownerPublicationAuthorization": "mission10-owner-confirmed"
            }
          },
          "STATES": {
            "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
            "HOMOLOGACAO_DADOS": "SIM",
            "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
            "INTEGRACAO_RUNTIME": "NAO",
            "INTEGRACAO_TECNICA": "NAO_INICIADA",
            "PUBLICACAO": "BLOQUEADA"
          },
          "calculationAuthorized": false,
          "publicationAuthorized": false,
          "HOMOLOGACAO": {
            "LISTA": "NOVA_LISTA_GOLD33_V1",
            "LOTE": "093_NOVO_CANDIDATO",
            "MEDICO_REVISOR": "Dra Eugenia Marques",
            "DATA_REVISAO": "20-09-2026",
            "RESULTADO": "Aprovado integralmente",
            "ARQUIVO_REVISADO": "01_NOVO_CANDIDATO_093.json",
            "EXCECOES_INFORMADAS": 0,
            "historicalApprovalApplies": false,
            "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
            "calculationAuthorized": false,
            "publicationAuthorized": false,
            "INTEGRACAO_RUNTIME": "NAO",
            "INTEGRACAO_TECNICA": "NAO_INICIADA",
            "PUBLICACAO": "BLOQUEADA",
            "nota": "O parecer se aplica exclusivamente ao novo candidato 093 submetido nesta conversa. Nenhuma homologacao historica do Lote 093 original se transfere para este conteudo.",
            "CLINICAL_CONTENT_FROZEN": true,
            "reviewedCandidateSha256": "d37488285baa1b0343e2232153a4554cdb1bc88ae828d2c0550331644ba0d84b",
            "approvalBinding": "USER_CONFIRMED_LOCAL_CANDIDATE",
            "approvalPackageSha256": "fa131a03c1c81ae4244b520a055113617ec7f1d617f7078722437521f403aebf"
          }
        },
        "packageRestrictions": {
          "historicalApprovalApplies": false,
          "items": [
            {
              "id": "diclofenaco_gotas",
              "originalRecordMetadata": {
                "ID": "diclofenaco_gotas",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/diclofenaco.json",
                  "templateSha256": "0c9f069bb319d807954cdffdffb0941600c7b4bf48c9b04c5a1474ae1f6a7f02",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://portal.novartis.com.br/medicamentos/wp-content/uploads/2021/10/Bula-CATAFLAM-Suspensao-Gotas-Medico.pdf",
                    "https://portal.novartis.com.br/medicamentos/wp-content/uploads/2021/10/Bula-CATAFLAM-Suspensao-Gotas-Paciente.pdf"
                  ],
                  "newProductSpecificFields": [
                    "name",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "indications",
                    "dose",
                    "pediatricDose",
                    "administration",
                    "preparation",
                    "infusionProtocol",
                    "lactation",
                    "clinicalPearls"
                  ],
                  "inheritedFieldsRequiringReview": [
                    "class",
                    "pharmacologicClass",
                    "pharmacodynamics",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "pregnancy",
                    "specialPopulations",
                    "patientEducation",
                    "alerts",
                    "mechanism",
                    "pharmacokinetics",
                    "renalDose",
                    "hepaticDose"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/analgesicos.js",
                    "sourceField": "diclofenaco.mcGoldClinicalV1",
                    "lote": "025",
                    "requiredFields": 33,
                    "approvedSha256": "f490066cbf88c2c1fc49fde254c0e52699a8a5320bd3cfb2ee1a9d3050dd9c7f",
                    "calculationAuthorized": false,
                    "publicationAuthorized": true,
                    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
                    "ownerPublicationAuthorization": "mission10-owner-confirmed"
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "diclofenaco_supositorio",
              "originalRecordMetadata": {
                "ID": "diclofenaco_supositorio",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/diclofenaco.json",
                  "templateSha256": "0c9f069bb319d807954cdffdffb0941600c7b4bf48c9b04c5a1474ae1f6a7f02",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://www.medicines.org.uk/emc/product/1044/smpc"
                  ],
                  "newProductSpecificFields": [
                    "name",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "indications",
                    "dose",
                    "pediatricDose",
                    "administration",
                    "preparation",
                    "infusionProtocol",
                    "contraindications",
                    "clinicalPearls"
                  ],
                  "inheritedFieldsRequiringReview": [
                    "class",
                    "pharmacologicClass",
                    "pharmacodynamics",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "interactions",
                    "monitoring",
                    "pregnancy",
                    "lactation",
                    "specialPopulations",
                    "patientEducation",
                    "alerts",
                    "mechanism",
                    "pharmacokinetics",
                    "renalDose",
                    "hepaticDose"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/analgesicos.js",
                    "sourceField": "diclofenaco.mcGoldClinicalV1",
                    "lote": "025",
                    "requiredFields": 33,
                    "approvedSha256": "f490066cbf88c2c1fc49fde254c0e52699a8a5320bd3cfb2ee1a9d3050dd9c7f",
                    "calculationAuthorized": false,
                    "publicationAuthorized": true,
                    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
                    "ownerPublicationAuthorization": "mission10-owner-confirmed"
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "cetoprofeno_gotas",
              "originalRecordMetadata": {
                "ID": "cetoprofeno_gotas",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/cetoprofeno.json",
                  "templateSha256": "92e70a001d201e6a9b143907d4f6eef1e4c778615b42500884f6c502b82ec6bb",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://eurofarma.com.br/produtos/bulas/view/healthcare/pt/bula-cetoprofeno-solucao-oral-gotas.html",
                    "https://eurofarma.com.br/produtos/bulas/view/patient/pt/bula-cetoprofeno-solucao-oral-gotas.html"
                  ],
                  "newProductSpecificFields": [
                    "name",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "dose",
                    "pediatricDose",
                    "renalDose",
                    "hepaticDose",
                    "administration",
                    "preparation",
                    "pregnancy",
                    "infusionProtocol"
                  ],
                  "inheritedFieldsRequiringReview": [
                    "class",
                    "pharmacologicClass",
                    "mechanism",
                    "pharmacodynamics",
                    "pharmacokinetics",
                    "indications",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "lactation",
                    "specialPopulations",
                    "patientEducation",
                    "clinicalPearls",
                    "alerts"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/analgesicos.js",
                    "sourceField": "cetoprofeno.mcGoldClinicalV1",
                    "lote": "017",
                    "requiredFields": 33,
                    "approvedSha256": "253c17c2327715b3e25ab80e7138de200e935b80e7d849c1c6088a69116420a3",
                    "calculationAuthorized": false,
                    "publicationAuthorized": true,
                    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
                    "ownerPublicationAuthorization": "mission10-owner-confirmed"
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "salbutamol_spray",
              "originalRecordMetadata": {
                "ID": "salbutamol_spray",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/salbutamol_nebulizacao.json",
                  "templateSha256": "11760e3f8bd9271bc9c7e4c851a2ad9799abd3ce7cc2faa78a73bd3753833e21",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://www.medicines.org.uk/emc/product/850/smpc",
                    "https://www.medicines.org.uk/emc/files/pil.850.pdf"
                  ],
                  "newProductSpecificFields": [
                    "name",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "indications",
                    "pharmacokinetics",
                    "dose",
                    "pediatricDose",
                    "administration",
                    "preparation",
                    "infusionProtocol",
                    "clinicalPearls",
                    "safetyFlags",
                    "alerts"
                  ],
                  "inheritedFieldsRequiringReview": [
                    "class",
                    "pharmacologicClass",
                    "mechanism",
                    "pharmacodynamics",
                    "renalDose",
                    "hepaticDose",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "pregnancy",
                    "lactation",
                    "specialPopulations",
                    "patientEducation"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/gold33_nova_lista.js",
                    "sourceField": "salbutamol_nebulizacao.mcGoldClinicalV1",
                    "requiredFields": 33,
                    "lote": "103",
                    "approvedSha256": "3dd8735151ec6ccf6dcd71dd5262642970c55bff5d753c59dcec104bb685a419",
                    "calculationAuthorized": false,
                    "publicationAuthorized": false,
                    "clinicalPackagePublicationState": "BLOQUEADA",
                    "list": "NOVA_LISTA_GOLD33_V1",
                    "zipSha256": "167045215deac33b67a58cf485f504a0a70ac17a45848dd73c59ec6ea4235aac",
                    "packageFile": "GOLD33_NOVA_LISTA_LOTE_103_HOMOLOGADO_CLINICAMENTE.zip",
                    "packageRestrictions": [
                      {
                        "id": "adrenalina_autoinjetavel",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "PRODUTO_ESPECIFICO_AUVIQ",
                          "PESO_MENOR_7_5_BLOQUEADO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "aminofilina_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "TDM_OBRIGATORIO",
                          "AUTOMACAO_MANUTENCAO_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "betametasona_injetavel",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "VIA_IV_BLOQUEADA",
                          "INDICACAO_ROTA_OBRIGATORIAS"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "brometo_de_ipratropio_nebulizacao",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "CALCULO_PEDIATRICO_BLOQUEADO",
                          "VIA_NAO_INALATORIA_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "dexametasona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "CALCULO_PEDIATRICO_BLOQUEADO",
                          "AUTOMACAO_EXIGE_INDICACAO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "fenoterol_gotas",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "DOSE_ATUAL_NAO_VERIFICADA",
                          "VIA_AUTOMATICA_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [
                          "BULA_PRIMARIA_ATUAL_PENDENTE"
                        ],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "hidrocortisona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "AUTOMACAO_EXIGE_INDICACAO",
                          "CALCULO_PEDIATRICO_BLOQUEADO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "metilprednisolona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "AUTOMACAO_EXIGE_INDICACAO",
                          "FORMULACAO_CONSERVANTE_DEVE_SER_CONFIRMADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "prometazina_im",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "VIA_IV_BLOQUEADA_NESTA_FICHA",
                          "IDADE_MENOR_2_CONTRAINDICADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "salbutamol_nebulizacao",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "IDADE_MENOR_2_BLOQUEADA_NESTE_ROTULO",
                          "PESO_MENOR_15_EXIGE_OUTRA_CONCENTRACAO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      }
                    ],
                    "packageRecordMetadata": {
                      "ID": "salbutamol_nebulizacao",
                      "NOTA_REVISAO_CLINICA": "HOMOLOGADO CLINICAMENTE em 20-09-2026 por Dra Eugenia Marques; resultado APROVADO INTEGRALMENTE; sem excecoes informadas. Conteudo clinico congelado; bloqueios, lacunas justificadas e reconciliacoes preservados.",
                      "PROVENIENCIA": "NEW_ENTRY_NO_LEGACY_BASELINE",
                      "ESCOPO_VALIDADO": "Salbutamol/albuterol 0,083% 2,5 mg/3 mL nebulizacao - EUA",
                      "BLOQUEIOS_CLINICOS": [
                        "IDADE_MENOR_2_BLOQUEADA_NESTE_ROTULO",
                        "PESO_MENOR_15_EXIGE_OUTRA_CONCENTRACAO"
                      ],
                      "PENDENCIAS_NAO_BLOQUEANTES": [],
                      "HOMOLOGACAO": {
                        "LISTA": "NOVA_LISTA_GOLD33_V1",
                        "LOTE": "103",
                        "MEDICO_REVISOR": "Dra Eugenia Marques",
                        "DATA_REVISAO": "20-09-2026",
                        "RESULTADO": "Aprovado integralmente",
                        "ARQUIVO_REVISADO": "103",
                        "EXCECOES_INFORMADAS": 0,
                        "REVISAO_CLINICA": "HOMOLOGADA",
                        "HOMOLOGACAO_DADOS": "SIM",
                        "INTEGRACAO_TECNICA": "NAO_INICIADA",
                        "PUBLICACAO": "BLOQUEADA",
                        "CLINICAL_CONTENT_FROZEN": true
                      }
                    },
                    "supersededPackages": [
                      "GOLD33_NOVA_LISTA_LOTE_088_HOMOLOGADO_CLINICAMENTE.zip"
                    ],
                    "referenceOnly": true
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "salbutamol_solucao_inalatoria",
              "originalRecordMetadata": {
                "ID": "salbutamol_solucao_inalatoria",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/salbutamol_nebulizacao.json",
                  "templateSha256": "11760e3f8bd9271bc9c7e4c851a2ad9799abd3ce7cc2faa78a73bd3753833e21",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=b72742df-1a6b-4483-aff3-3e79db5e015d"
                  ],
                  "newProductSpecificFields": [],
                  "inheritedFieldsRequiringReview": [
                    "name",
                    "class",
                    "pharmacologicClass",
                    "mechanism",
                    "pharmacodynamics",
                    "pharmacokinetics",
                    "indications",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "dose",
                    "pediatricDose",
                    "renalDose",
                    "hepaticDose",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "administration",
                    "preparation",
                    "infusionProtocol",
                    "pregnancy",
                    "lactation",
                    "specialPopulations",
                    "patientEducation",
                    "clinicalPearls",
                    "alerts"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/gold33_nova_lista.js",
                    "sourceField": "salbutamol_nebulizacao.mcGoldClinicalV1",
                    "requiredFields": 33,
                    "lote": "103",
                    "approvedSha256": "3dd8735151ec6ccf6dcd71dd5262642970c55bff5d753c59dcec104bb685a419",
                    "calculationAuthorized": false,
                    "publicationAuthorized": false,
                    "clinicalPackagePublicationState": "BLOQUEADA",
                    "list": "NOVA_LISTA_GOLD33_V1",
                    "zipSha256": "167045215deac33b67a58cf485f504a0a70ac17a45848dd73c59ec6ea4235aac",
                    "packageFile": "GOLD33_NOVA_LISTA_LOTE_103_HOMOLOGADO_CLINICAMENTE.zip",
                    "packageRestrictions": [
                      {
                        "id": "adrenalina_autoinjetavel",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "PRODUTO_ESPECIFICO_AUVIQ",
                          "PESO_MENOR_7_5_BLOQUEADO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "aminofilina_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "TDM_OBRIGATORIO",
                          "AUTOMACAO_MANUTENCAO_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "betametasona_injetavel",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "VIA_IV_BLOQUEADA",
                          "INDICACAO_ROTA_OBRIGATORIAS"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "brometo_de_ipratropio_nebulizacao",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "CALCULO_PEDIATRICO_BLOQUEADO",
                          "VIA_NAO_INALATORIA_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "dexametasona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "CALCULO_PEDIATRICO_BLOQUEADO",
                          "AUTOMACAO_EXIGE_INDICACAO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "fenoterol_gotas",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "DOSE_ATUAL_NAO_VERIFICADA",
                          "VIA_AUTOMATICA_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [
                          "BULA_PRIMARIA_ATUAL_PENDENTE"
                        ],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "hidrocortisona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "AUTOMACAO_EXIGE_INDICACAO",
                          "CALCULO_PEDIATRICO_BLOQUEADO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "metilprednisolona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "AUTOMACAO_EXIGE_INDICACAO",
                          "FORMULACAO_CONSERVANTE_DEVE_SER_CONFIRMADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "prometazina_im",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "VIA_IV_BLOQUEADA_NESTA_FICHA",
                          "IDADE_MENOR_2_CONTRAINDICADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "salbutamol_nebulizacao",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "IDADE_MENOR_2_BLOQUEADA_NESTE_ROTULO",
                          "PESO_MENOR_15_EXIGE_OUTRA_CONCENTRACAO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      }
                    ],
                    "packageRecordMetadata": {
                      "ID": "salbutamol_nebulizacao",
                      "NOTA_REVISAO_CLINICA": "HOMOLOGADO CLINICAMENTE em 20-09-2026 por Dra Eugenia Marques; resultado APROVADO INTEGRALMENTE; sem excecoes informadas. Conteudo clinico congelado; bloqueios, lacunas justificadas e reconciliacoes preservados.",
                      "PROVENIENCIA": "NEW_ENTRY_NO_LEGACY_BASELINE",
                      "ESCOPO_VALIDADO": "Salbutamol/albuterol 0,083% 2,5 mg/3 mL nebulizacao - EUA",
                      "BLOQUEIOS_CLINICOS": [
                        "IDADE_MENOR_2_BLOQUEADA_NESTE_ROTULO",
                        "PESO_MENOR_15_EXIGE_OUTRA_CONCENTRACAO"
                      ],
                      "PENDENCIAS_NAO_BLOQUEANTES": [],
                      "HOMOLOGACAO": {
                        "LISTA": "NOVA_LISTA_GOLD33_V1",
                        "LOTE": "103",
                        "MEDICO_REVISOR": "Dra Eugenia Marques",
                        "DATA_REVISAO": "20-09-2026",
                        "RESULTADO": "Aprovado integralmente",
                        "ARQUIVO_REVISADO": "103",
                        "EXCECOES_INFORMADAS": 0,
                        "REVISAO_CLINICA": "HOMOLOGADA",
                        "HOMOLOGACAO_DADOS": "SIM",
                        "INTEGRACAO_TECNICA": "NAO_INICIADA",
                        "PUBLICACAO": "BLOQUEADA",
                        "CLINICAL_CONTENT_FROZEN": true
                      }
                    },
                    "supersededPackages": [
                      "GOLD33_NOVA_LISTA_LOTE_088_HOMOLOGADO_CLINICAMENTE.zip"
                    ],
                    "referenceOnly": true
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false,
                "RECONCILIACAO_CANONICA": {
                  "candidateAliasOf": "salbutamol_nebulizacao",
                  "status": "PENDENTE_REVISAO_DE_ESCOPO",
                  "action": "Não adicionar um segundo registro ativo para o mesmo produto."
                }
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "fenoterol_solucao_inalatoria",
              "originalRecordMetadata": {
                "ID": "fenoterol_solucao_inalatoria",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/fenoterol_gotas.json",
                  "templateSha256": "75acfdff650220647f3251f2d6f9139d43b22db06064b3677009172ad0216990",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://www.gov.br/anvisa/pt-br/assuntos/medicamentos/cmed/precos/anos-anteriores/arquivos/5333json-file-1/%40%40download/file"
                  ],
                  "newProductSpecificFields": [],
                  "inheritedFieldsRequiringReview": [
                    "name",
                    "class",
                    "pharmacologicClass",
                    "mechanism",
                    "pharmacodynamics",
                    "pharmacokinetics",
                    "indications",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "dose",
                    "pediatricDose",
                    "renalDose",
                    "hepaticDose",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "administration",
                    "preparation",
                    "infusionProtocol",
                    "pregnancy",
                    "lactation",
                    "specialPopulations",
                    "patientEducation",
                    "clinicalPearls",
                    "alerts"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/gold33_nova_lista.js",
                    "sourceField": "fenoterol_gotas.mcGoldClinicalV1",
                    "requiredFields": 33,
                    "lote": "103",
                    "approvedSha256": "3dd8735151ec6ccf6dcd71dd5262642970c55bff5d753c59dcec104bb685a419",
                    "calculationAuthorized": false,
                    "publicationAuthorized": false,
                    "clinicalPackagePublicationState": "BLOQUEADA",
                    "list": "NOVA_LISTA_GOLD33_V1",
                    "zipSha256": "167045215deac33b67a58cf485f504a0a70ac17a45848dd73c59ec6ea4235aac",
                    "packageFile": "GOLD33_NOVA_LISTA_LOTE_103_HOMOLOGADO_CLINICAMENTE.zip",
                    "packageRestrictions": [
                      {
                        "id": "adrenalina_autoinjetavel",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "PRODUTO_ESPECIFICO_AUVIQ",
                          "PESO_MENOR_7_5_BLOQUEADO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "aminofilina_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "TDM_OBRIGATORIO",
                          "AUTOMACAO_MANUTENCAO_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "betametasona_injetavel",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "VIA_IV_BLOQUEADA",
                          "INDICACAO_ROTA_OBRIGATORIAS"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "brometo_de_ipratropio_nebulizacao",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "CALCULO_PEDIATRICO_BLOQUEADO",
                          "VIA_NAO_INALATORIA_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "dexametasona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "CALCULO_PEDIATRICO_BLOQUEADO",
                          "AUTOMACAO_EXIGE_INDICACAO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "fenoterol_gotas",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "DOSE_ATUAL_NAO_VERIFICADA",
                          "VIA_AUTOMATICA_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [
                          "BULA_PRIMARIA_ATUAL_PENDENTE"
                        ],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "hidrocortisona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "AUTOMACAO_EXIGE_INDICACAO",
                          "CALCULO_PEDIATRICO_BLOQUEADO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "metilprednisolona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "AUTOMACAO_EXIGE_INDICACAO",
                          "FORMULACAO_CONSERVANTE_DEVE_SER_CONFIRMADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "prometazina_im",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "VIA_IV_BLOQUEADA_NESTA_FICHA",
                          "IDADE_MENOR_2_CONTRAINDICADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "salbutamol_nebulizacao",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "IDADE_MENOR_2_BLOQUEADA_NESTE_ROTULO",
                          "PESO_MENOR_15_EXIGE_OUTRA_CONCENTRACAO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      }
                    ],
                    "packageRecordMetadata": {
                      "ID": "fenoterol_gotas",
                      "NOTA_REVISAO_CLINICA": "HOMOLOGADO CLINICAMENTE em 20-09-2026 por Dra Eugenia Marques; resultado APROVADO INTEGRALMENTE; sem excecoes informadas. Conteudo clinico congelado; bloqueios, lacunas justificadas e reconciliacoes preservados.",
                      "PROVENIENCIA": "NEW_ENTRY_NO_LEGACY_BASELINE",
                      "ESCOPO_VALIDADO": "Fenoterol 5 mg/mL gotas - Brasil; dose atual bloqueada",
                      "BLOQUEIOS_CLINICOS": [
                        "DOSE_ATUAL_NAO_VERIFICADA",
                        "VIA_AUTOMATICA_BLOQUEADA"
                      ],
                      "PENDENCIAS_NAO_BLOQUEANTES": [
                        "BULA_PRIMARIA_ATUAL_PENDENTE"
                      ],
                      "HOMOLOGACAO": {
                        "LISTA": "NOVA_LISTA_GOLD33_V1",
                        "LOTE": "103",
                        "MEDICO_REVISOR": "Dra Eugenia Marques",
                        "DATA_REVISAO": "20-09-2026",
                        "RESULTADO": "Aprovado integralmente",
                        "ARQUIVO_REVISADO": "103",
                        "EXCECOES_INFORMADAS": 0,
                        "REVISAO_CLINICA": "HOMOLOGADA",
                        "HOMOLOGACAO_DADOS": "SIM",
                        "INTEGRACAO_TECNICA": "NAO_INICIADA",
                        "PUBLICACAO": "BLOQUEADA",
                        "CLINICAL_CONTENT_FROZEN": true
                      }
                    },
                    "supersededPackages": [
                      "GOLD33_NOVA_LISTA_LOTE_088_HOMOLOGADO_CLINICAMENTE.zip"
                    ],
                    "referenceOnly": true
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false,
                "RECONCILIACAO_CANONICA": {
                  "candidateAliasOf": "fenoterol_gotas",
                  "status": "PENDENTE_REVISAO_DE_ESCOPO",
                  "action": "Não adicionar um segundo registro ativo para o mesmo produto."
                }
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "ipratropio_solucao_inalatoria",
              "originalRecordMetadata": {
                "ID": "ipratropio_solucao_inalatoria",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/brometo_de_ipratropio_nebulizacao.json",
                  "templateSha256": "8d7e3cddc70cbd671654f0a934055d306657bf6412a6f8452a008684da41bafa",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3249aea8-a395-f09f-e063-6294a90a2d8b"
                  ],
                  "newProductSpecificFields": [],
                  "inheritedFieldsRequiringReview": [
                    "name",
                    "class",
                    "pharmacologicClass",
                    "mechanism",
                    "pharmacodynamics",
                    "pharmacokinetics",
                    "indications",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "dose",
                    "pediatricDose",
                    "renalDose",
                    "hepaticDose",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "administration",
                    "preparation",
                    "infusionProtocol",
                    "pregnancy",
                    "lactation",
                    "specialPopulations",
                    "patientEducation",
                    "clinicalPearls",
                    "alerts"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/gold33_nova_lista.js",
                    "sourceField": "brometo_de_ipratropio_nebulizacao.mcGoldClinicalV1",
                    "requiredFields": 33,
                    "lote": "103",
                    "approvedSha256": "3dd8735151ec6ccf6dcd71dd5262642970c55bff5d753c59dcec104bb685a419",
                    "calculationAuthorized": false,
                    "publicationAuthorized": false,
                    "clinicalPackagePublicationState": "BLOQUEADA",
                    "list": "NOVA_LISTA_GOLD33_V1",
                    "zipSha256": "167045215deac33b67a58cf485f504a0a70ac17a45848dd73c59ec6ea4235aac",
                    "packageFile": "GOLD33_NOVA_LISTA_LOTE_103_HOMOLOGADO_CLINICAMENTE.zip",
                    "packageRestrictions": [
                      {
                        "id": "adrenalina_autoinjetavel",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "PRODUTO_ESPECIFICO_AUVIQ",
                          "PESO_MENOR_7_5_BLOQUEADO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "aminofilina_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "TDM_OBRIGATORIO",
                          "AUTOMACAO_MANUTENCAO_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "betametasona_injetavel",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "VIA_IV_BLOQUEADA",
                          "INDICACAO_ROTA_OBRIGATORIAS"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "brometo_de_ipratropio_nebulizacao",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "CALCULO_PEDIATRICO_BLOQUEADO",
                          "VIA_NAO_INALATORIA_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "dexametasona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "CALCULO_PEDIATRICO_BLOQUEADO",
                          "AUTOMACAO_EXIGE_INDICACAO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "fenoterol_gotas",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "DOSE_ATUAL_NAO_VERIFICADA",
                          "VIA_AUTOMATICA_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [
                          "BULA_PRIMARIA_ATUAL_PENDENTE"
                        ],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "hidrocortisona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "AUTOMACAO_EXIGE_INDICACAO",
                          "CALCULO_PEDIATRICO_BLOQUEADO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "metilprednisolona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "AUTOMACAO_EXIGE_INDICACAO",
                          "FORMULACAO_CONSERVANTE_DEVE_SER_CONFIRMADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "prometazina_im",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "VIA_IV_BLOQUEADA_NESTA_FICHA",
                          "IDADE_MENOR_2_CONTRAINDICADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "salbutamol_nebulizacao",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "IDADE_MENOR_2_BLOQUEADA_NESTE_ROTULO",
                          "PESO_MENOR_15_EXIGE_OUTRA_CONCENTRACAO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      }
                    ],
                    "packageRecordMetadata": {
                      "ID": "brometo_de_ipratropio_nebulizacao",
                      "NOTA_REVISAO_CLINICA": "HOMOLOGADO CLINICAMENTE em 20-09-2026 por Dra Eugenia Marques; resultado APROVADO INTEGRALMENTE; sem excecoes informadas. Conteudo clinico congelado; bloqueios, lacunas justificadas e reconciliacoes preservados.",
                      "PROVENIENCIA": "NEW_ENTRY_NO_LEGACY_BASELINE",
                      "ESCOPO_VALIDADO": "Ipratropium 0,02% 500 mcg/2,5 mL - EUA",
                      "BLOQUEIOS_CLINICOS": [
                        "CALCULO_PEDIATRICO_BLOQUEADO",
                        "VIA_NAO_INALATORIA_BLOQUEADA"
                      ],
                      "PENDENCIAS_NAO_BLOQUEANTES": [],
                      "HOMOLOGACAO": {
                        "LISTA": "NOVA_LISTA_GOLD33_V1",
                        "LOTE": "103",
                        "MEDICO_REVISOR": "Dra Eugenia Marques",
                        "DATA_REVISAO": "20-09-2026",
                        "RESULTADO": "Aprovado integralmente",
                        "ARQUIVO_REVISADO": "103",
                        "EXCECOES_INFORMADAS": 0,
                        "REVISAO_CLINICA": "HOMOLOGADA",
                        "HOMOLOGACAO_DADOS": "SIM",
                        "INTEGRACAO_TECNICA": "NAO_INICIADA",
                        "PUBLICACAO": "BLOQUEADA",
                        "CLINICAL_CONTENT_FROZEN": true
                      }
                    },
                    "supersededPackages": [
                      "GOLD33_NOVA_LISTA_LOTE_087_HOMOLOGADO_CLINICAMENTE.zip"
                    ],
                    "referenceOnly": true
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false,
                "RECONCILIACAO_CANONICA": {
                  "candidateAliasOf": "brometo_de_ipratropio_nebulizacao",
                  "status": "PENDENTE_REVISAO_DE_ESCOPO",
                  "action": "Não adicionar um segundo registro ativo para o mesmo produto."
                }
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "prednisolona_solucao_oral",
              "originalRecordMetadata": {
                "ID": "prednisolona_solucao_oral",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/prednisolona.json",
                  "templateSha256": "1fd9411f1fb243102af07912d9e9bf1e0684527b96d01b0a8cefd63948a73259",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=a0d74ae0-7b2d-4d36-9211-c76f5063b5a9",
                    "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=7262fc84-3db2-4475-8ae4-6bec4477cb81"
                  ],
                  "newProductSpecificFields": [
                    "name",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "mechanism",
                    "pharmacodynamics",
                    "pharmacokinetics",
                    "dose",
                    "pediatricDose",
                    "renalDose",
                    "hepaticDose",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "administration",
                    "preparation",
                    "infusionProtocol",
                    "pregnancy",
                    "lactation"
                  ],
                  "inheritedFieldsRequiringReview": [
                    "class",
                    "pharmacologicClass",
                    "indications",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "specialPopulations",
                    "patientEducation",
                    "clinicalPearls",
                    "alerts"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/imuno_corticoide.js",
                    "sourceField": "prednisolona.mcGoldClinicalV1",
                    "lote": "064",
                    "requiredFields": 33,
                    "approvedSha256": "21c1e99276216e72bd2a7201eddd567a0335bd6346374d413459182168e7cdea",
                    "calculationAuthorized": false,
                    "publicationAuthorized": true,
                    "clinicalPackagePublicationState": "LIBERADA_COM_RESTRICOES_GRANULARES",
                    "ownerPublicationAuthorization": "lote002-owner-confirmed"
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "dexametasona_elixir",
              "originalRecordMetadata": {
                "ID": "dexametasona_elixir",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/dexametasona.json",
                  "templateSha256": "176ed420ac1c027d82deb4113fc025c47b8de2fb7886d3e24344c0a4172dcce1",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=7b51ffce-ec64-4b49-8870-b9666537c541"
                  ],
                  "newProductSpecificFields": [
                    "name",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "dose",
                    "pediatricDose",
                    "administration",
                    "preparation",
                    "infusionProtocol",
                    "clinicalPearls"
                  ],
                  "inheritedFieldsRequiringReview": [
                    "class",
                    "pharmacologicClass",
                    "mechanism",
                    "pharmacodynamics",
                    "pharmacokinetics",
                    "indications",
                    "renalDose",
                    "hepaticDose",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "pregnancy",
                    "lactation",
                    "specialPopulations",
                    "patientEducation",
                    "alerts"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/imuno_corticoide.js",
                    "sourceField": "dexametasona.mcGoldClinicalV1",
                    "lote": "024",
                    "requiredFields": 33,
                    "approvedSha256": "9721657a393121ed360ce59ff910deb7cbb3b0fc3421608349c6fa584237305a",
                    "calculationAuthorized": false,
                    "publicationAuthorized": true,
                    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
                    "ownerPublicationAuthorization": "mission10-owner-confirmed"
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "budesonida_suspensao_inalatoria",
              "originalRecordMetadata": {
                "ID": "budesonida_suspensao_inalatoria",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/budesonida.json",
                  "templateSha256": "83faa465b16000c39d3c4e9904fab859797107253db21034238feb9f2ea9facd",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=1d139a25-9c17-4b3e-8ffd-b2d562cc00ee"
                  ],
                  "newProductSpecificFields": [
                    "name",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "indications",
                    "dose",
                    "pediatricDose",
                    "hepaticDose",
                    "administration",
                    "preparation",
                    "infusionProtocol"
                  ],
                  "inheritedFieldsRequiringReview": [
                    "class",
                    "pharmacologicClass",
                    "mechanism",
                    "pharmacodynamics",
                    "pharmacokinetics",
                    "renalDose",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "pregnancy",
                    "lactation",
                    "specialPopulations",
                    "patientEducation",
                    "clinicalPearls",
                    "alerts"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/pneumologia.js",
                    "sourceField": "budesonida.mcGoldClinicalV1",
                    "lote": "012",
                    "requiredFields": 33,
                    "approvedSha256": "33a04a022820507c1688fbebb735cd7d879bc3d0ef30a24f4ed7483f5cac16eb",
                    "calculationAuthorized": false,
                    "publicationAuthorized": true,
                    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
                    "ownerPublicationAuthorization": "mission10-owner-confirmed"
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            }
          ]
        }
      },
      "pt": {
        "name": "Cetoprofeno — gotas 20 mg/mL",
        "class": "AINE derivado do ácido propiônico",
        "pharmacologicClass": "Inibição não seletiva de COX",
        "commercialNames": "Genérico Eurofarma, Brasil.",
        "presentation": "Solução oral em gotas.",
        "presentations": "20 mg/mL; 20 gotas/mL; 1 mg/gota.",
        "mechanism": "Inibição não seletiva de COX. O efeito deve ser interpretado por indicação, formulação e exposição.",
        "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
        "pharmacokinetics": "Alta ligação proteica; metabolismo hepático; eliminação renal de conjugados.",
        "indications": "Dor e inflamação musculoesquelética; indicações e apresentações variam regionalmente.",
        "dose": "Adultos: 50 gotas a cada 6–8 h; máximo 300 mg/dia.",
        "pediatricDose": ">1 ano: 1 gota/kg a cada 6–8 h. 7–11 anos: 25 gotas a cada 6–8 h. Não extrapolar para <1 ano.",
        "renalDose": "Reduzir dose inicial; manter mínima eficaz. Insuficiência grave: contraindicado.",
        "hepaticDose": "Monitorar; menor dose eficaz. Insuficiência grave: contraindicado.",
        "commonAdverseEffects": "Dispepsia, náusea, dor abdominal, edema e tontura.",
        "dangerousAdverseEffects": "IAM/AVC, sangramento/perfuração GI, lesão renal, hepatotoxicidade, broncoespasmo e SCAR.",
        "adverseEffects": "Dispepsia, náusea, dor abdominal, edema e tontura. Graves: IAM/AVC, sangramento/perfuração GI, lesão renal, hepatotoxicidade, broncoespasmo e SCAR.",
        "contraindications": "Alergia a AINE/AAS, CABG, sangramento GI ativo e insuficiência renal grave.",
        "interactions": "Anticoagulantes, AAS/outros AINE, IECA/BRA/diuréticos, lítio e metotrexato.",
        "monitoring": "Dor, PA, GI, rim, fígado, edema e risco CV.",
        "administration": "Somente via oral.",
        "preparation": "Usar conta-gotas do produto; 1 gota=1 mg.",
        "infusionProtocol": "Não aplicável à formulação oral.",
        "pregnancy": "Evitar uso sem avaliação obstétrica; contraindicado no terceiro trimestre.",
        "lactation": "Cautela; preferir alternativas com melhor documentação.",
        "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
        "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
        "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
        "guidelineRecommendations": "Esta preparação usa bulas e texto de referência preexistente; não foi feita validação independente de diretrizes.",
        "safetyFlags": "CANDIDATO NOVO: revisão médica pendente; cálculos e publicação bloqueados. CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
        "alerts": "IAM/AVC, sangramento/perfuração GI, lesão renal, hepatotoxicidade, broncoespasmo e SCAR. Uso bloqueado sem produto/formulação, indicação, risco GI/CV, rim/fígado, gestação e anticoagulantes.",
        "references": [
          "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=ketoprofen",
          "2. Fonte regulatória primária consultada em 2026-09-18: https://www.fda.gov/drugs/postmarket-drug-safety-information-patients-and-providers/non-steroidal-anti-inflammatory-drugs-nsaids",
          "https://eurofarma.com.br/produtos/bulas/view/healthcare/pt/bula-cetoprofeno-solucao-oral-gotas.html",
          "https://eurofarma.com.br/produtos/bulas/view/patient/pt/bula-cetoprofeno-solucao-oral-gotas.html"
        ],
        "ref": "https://eurofarma.com.br/produtos/bulas/view/healthcare/pt/bula-cetoprofeno-solucao-oral-gotas.html"
      },
      "es": {
        "name": "Ketoprofeno — gotas 20 mg/mL",
        "class": "AINE derivado del ácido propiónico",
        "pharmacologicClass": "Inhibición no selectiva de COX",
        "commercialNames": "Genérico Eurofarma, Brasil.",
        "presentation": "Solución oral en gotas.",
        "presentations": "20 mg/mL; 20 gotas/mL; 1 mg/gota.",
        "mechanism": "Inhibición no selectiva de COX. El efecto debe interpretarse por indicación, formulación y exposición.",
        "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
        "pharmacokinetics": "Alta unión proteica; metabolismo hepático; eliminación renal de conjugados.",
        "indications": "Dolor e inflamación musculoesquelética; indicaciones y presentaciones varían regionalmente.",
        "dose": "Adultos: 50 gotas cada 6–8 h; máximo 300 mg/día.",
        "pediatricDose": ">1 año: 1 gota/kg cada 6–8 h. 7–11 años: 25 gotas cada 6–8 h. No extrapolar a <1 año.",
        "renalDose": "Reducir dosis inicial; mantener mínima eficaz. Insuficiencia grave: contraindicado.",
        "hepaticDose": "Monitorizar; menor dosis eficaz. Insuficiencia grave: contraindicado.",
        "commonAdverseEffects": "Dispepsia, náusea, dolor abdominal, edema y mareo.",
        "dangerousAdverseEffects": "IAM/ACV, sangrado/perforación GI, lesión renal, hepatotoxicidad, broncoespasmo y SCAR.",
        "adverseEffects": "Dispepsia, náusea, dolor abdominal, edema y mareo. Graves: IAM/ACV, sangrado/perforación GI, lesión renal, hepatotoxicidad, broncoespasmo y SCAR.",
        "contraindications": "Alergia a AINE/AAS, CABG, sangrado GI activo e insuficiencia renal grave.",
        "interactions": "Anticoagulantes, AAS/otros AINE, IECA/ARA-II/diuréticos, litio y metotrexato.",
        "monitoring": "Dolor, PA, GI, riñón, hígado, edema y riesgo CV.",
        "administration": "Solo vía oral.",
        "preparation": "Usar gotero del producto; 1 gota=1 mg.",
        "infusionProtocol": "No aplicable a formulación oral.",
        "pregnancy": "Evitar uso sin evaluación obstétrica; contraindicado en tercer trimestre.",
        "lactation": "Precaución; preferir alternativas mejor documentadas.",
        "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
        "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
        "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
        "guidelineRecommendations": "Esta preparación usa prospectos y texto de referencia preexistente; no se realizó validación independiente de guías.",
        "safetyFlags": "CANDIDATO NUEVO: revisión médica pendiente; cálculos y publicación bloqueados. CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
        "alerts": "IAM/ACV, sangrado/perforación GI, lesión renal, hepatotoxicidad, broncoespasmo y SCAR. Uso bloqueado sem produto/formulação, indicação, risco GI/CV, rim/fígado, gestação e anticoagulantes.",
        "references": [
          "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=ketoprofen",
          "2. Fonte regulatória primária consultada em 2026-09-18: https://www.fda.gov/drugs/postmarket-drug-safety-information-patients-and-providers/non-steroidal-anti-inflammatory-drugs-nsaids",
          "https://eurofarma.com.br/produtos/bulas/view/healthcare/pt/bula-cetoprofeno-solucao-oral-gotas.html",
          "https://eurofarma.com.br/produtos/bulas/view/patient/pt/bula-cetoprofeno-solucao-oral-gotas.html"
        ],
        "ref": "https://eurofarma.com.br/produtos/bulas/view/healthcare/pt/bula-cetoprofeno-solucao-oral-gotas.html"
      }
    }
  },
  "salbutamol_spray": {
    "id": "salbutamol_spray",
    "name": {
      "pt": "Salbutamol — aerossol 100 microgramas/acionamento",
      "es": "Salbutamol — aerosol 100 microgramos/actuación"
    },
    "category": "gold33",
    "mcGoldClinicalV1": {
      "meta": {
        "schema": "mc-gold-clinical-v1",
        "requiredFieldCount": 33,
        "lote": "093_NOVO_CANDIDATO",
        "approvedSha256": "720dc1dc273c189f6552d451208b031b9cdbca8319a7dc175d4419ac39e13fbc",
        "zipSha256": "e29687c1f949e39a4eeb2ce764d444bf840900034fe78da29de2a8770755e98f",
        "referenceOnly": true,
        "calculationAuthorized": false,
        "publicationAuthorized": false,
        "historicalApprovalApplies": false,
        "clinicalPackagePublicationState": "BLOQUEADA",
        "releaseAuthorization": {
          "source": "USER_EXPLICIT_DEPLOY_AUTHORIZATION_2026_09_21",
          "referencePublicationAuthorized": true,
          "calculationAuthorized": false
        },
        "packageRecordMetadata": {
          "ID": "salbutamol_spray",
          "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
          "PROVENIENCIA": {
            "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
            "templatePath": "data/drugs/salbutamol_nebulizacao.json",
            "templateSha256": "11760e3f8bd9271bc9c7e4c851a2ad9799abd3ce7cc2faa78a73bd3753833e21",
            "sourcesConsulted": "2026-09-21",
            "primarySources": [
              "https://www.medicines.org.uk/emc/product/850/smpc",
              "https://www.medicines.org.uk/emc/files/pil.850.pdf"
            ],
            "newProductSpecificFields": [
              "name",
              "commercialNames",
              "presentation",
              "presentations",
              "indications",
              "pharmacokinetics",
              "dose",
              "pediatricDose",
              "administration",
              "preparation",
              "infusionProtocol",
              "clinicalPearls",
              "safetyFlags",
              "alerts"
            ],
            "inheritedFieldsRequiringReview": [
              "class",
              "pharmacologicClass",
              "mechanism",
              "pharmacodynamics",
              "renalDose",
              "hepaticDose",
              "commonAdverseEffects",
              "dangerousAdverseEffects",
              "adverseEffects",
              "contraindications",
              "interactions",
              "monitoring",
              "pregnancy",
              "lactation",
              "specialPopulations",
              "patientEducation"
            ],
            "templateClinicalMetadata": {
              "status": "PASS_CLINICAL_HOMOLOGATION",
              "sourceOwner": "database/gold33_nova_lista.js",
              "sourceField": "salbutamol_nebulizacao.mcGoldClinicalV1",
              "requiredFields": 33,
              "lote": "103",
              "approvedSha256": "3dd8735151ec6ccf6dcd71dd5262642970c55bff5d753c59dcec104bb685a419",
              "calculationAuthorized": false,
              "publicationAuthorized": false,
              "clinicalPackagePublicationState": "BLOQUEADA",
              "list": "NOVA_LISTA_GOLD33_V1",
              "zipSha256": "167045215deac33b67a58cf485f504a0a70ac17a45848dd73c59ec6ea4235aac",
              "packageFile": "GOLD33_NOVA_LISTA_LOTE_103_HOMOLOGADO_CLINICAMENTE.zip",
              "packageRestrictions": [
                {
                  "id": "adrenalina_autoinjetavel",
                  "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                  "bloqueios_clinicos": [
                    "PRODUTO_ESPECIFICO_AUVIQ",
                    "PESO_MENOR_7_5_BLOQUEADO"
                  ],
                  "pendencias_nao_bloqueantes": [],
                  "states": {
                    "PESQUISA": "CONCLUIDA",
                    "REVISAO_CLINICA": "HOMOLOGADA",
                    "HOMOLOGACAO_DADOS": "SIM",
                    "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                    "INTEGRACAO_TECNICA": "NAO_INICIADA",
                    "PUBLICACAO": "BLOQUEADA"
                  },
                  "technical_mapping": {
                    "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                    "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                  }
                },
                {
                  "id": "aminofilina_iv",
                  "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                  "bloqueios_clinicos": [
                    "TDM_OBRIGATORIO",
                    "AUTOMACAO_MANUTENCAO_BLOQUEADA"
                  ],
                  "pendencias_nao_bloqueantes": [],
                  "states": {
                    "PESQUISA": "CONCLUIDA",
                    "REVISAO_CLINICA": "HOMOLOGADA",
                    "HOMOLOGACAO_DADOS": "SIM",
                    "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                    "INTEGRACAO_TECNICA": "NAO_INICIADA",
                    "PUBLICACAO": "BLOQUEADA"
                  },
                  "technical_mapping": {
                    "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                    "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                  }
                },
                {
                  "id": "betametasona_injetavel",
                  "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                  "bloqueios_clinicos": [
                    "VIA_IV_BLOQUEADA",
                    "INDICACAO_ROTA_OBRIGATORIAS"
                  ],
                  "pendencias_nao_bloqueantes": [],
                  "states": {
                    "PESQUISA": "CONCLUIDA",
                    "REVISAO_CLINICA": "HOMOLOGADA",
                    "HOMOLOGACAO_DADOS": "SIM",
                    "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                    "INTEGRACAO_TECNICA": "NAO_INICIADA",
                    "PUBLICACAO": "BLOQUEADA"
                  },
                  "technical_mapping": {
                    "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                    "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                  }
                },
                {
                  "id": "brometo_de_ipratropio_nebulizacao",
                  "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                  "bloqueios_clinicos": [
                    "CALCULO_PEDIATRICO_BLOQUEADO",
                    "VIA_NAO_INALATORIA_BLOQUEADA"
                  ],
                  "pendencias_nao_bloqueantes": [],
                  "states": {
                    "PESQUISA": "CONCLUIDA",
                    "REVISAO_CLINICA": "HOMOLOGADA",
                    "HOMOLOGACAO_DADOS": "SIM",
                    "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                    "INTEGRACAO_TECNICA": "NAO_INICIADA",
                    "PUBLICACAO": "BLOQUEADA"
                  },
                  "technical_mapping": {
                    "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                    "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                  }
                },
                {
                  "id": "dexametasona_iv",
                  "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                  "bloqueios_clinicos": [
                    "CALCULO_PEDIATRICO_BLOQUEADO",
                    "AUTOMACAO_EXIGE_INDICACAO"
                  ],
                  "pendencias_nao_bloqueantes": [],
                  "states": {
                    "PESQUISA": "CONCLUIDA",
                    "REVISAO_CLINICA": "HOMOLOGADA",
                    "HOMOLOGACAO_DADOS": "SIM",
                    "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                    "INTEGRACAO_TECNICA": "NAO_INICIADA",
                    "PUBLICACAO": "BLOQUEADA"
                  },
                  "technical_mapping": {
                    "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                    "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                  }
                },
                {
                  "id": "fenoterol_gotas",
                  "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                  "bloqueios_clinicos": [
                    "DOSE_ATUAL_NAO_VERIFICADA",
                    "VIA_AUTOMATICA_BLOQUEADA"
                  ],
                  "pendencias_nao_bloqueantes": [
                    "BULA_PRIMARIA_ATUAL_PENDENTE"
                  ],
                  "states": {
                    "PESQUISA": "CONCLUIDA",
                    "REVISAO_CLINICA": "HOMOLOGADA",
                    "HOMOLOGACAO_DADOS": "SIM",
                    "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                    "INTEGRACAO_TECNICA": "NAO_INICIADA",
                    "PUBLICACAO": "BLOQUEADA"
                  },
                  "technical_mapping": {
                    "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                    "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                  }
                },
                {
                  "id": "hidrocortisona_iv",
                  "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                  "bloqueios_clinicos": [
                    "AUTOMACAO_EXIGE_INDICACAO",
                    "CALCULO_PEDIATRICO_BLOQUEADO"
                  ],
                  "pendencias_nao_bloqueantes": [],
                  "states": {
                    "PESQUISA": "CONCLUIDA",
                    "REVISAO_CLINICA": "HOMOLOGADA",
                    "HOMOLOGACAO_DADOS": "SIM",
                    "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                    "INTEGRACAO_TECNICA": "NAO_INICIADA",
                    "PUBLICACAO": "BLOQUEADA"
                  },
                  "technical_mapping": {
                    "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                    "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                  }
                },
                {
                  "id": "metilprednisolona_iv",
                  "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                  "bloqueios_clinicos": [
                    "AUTOMACAO_EXIGE_INDICACAO",
                    "FORMULACAO_CONSERVANTE_DEVE_SER_CONFIRMADA"
                  ],
                  "pendencias_nao_bloqueantes": [],
                  "states": {
                    "PESQUISA": "CONCLUIDA",
                    "REVISAO_CLINICA": "HOMOLOGADA",
                    "HOMOLOGACAO_DADOS": "SIM",
                    "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                    "INTEGRACAO_TECNICA": "NAO_INICIADA",
                    "PUBLICACAO": "BLOQUEADA"
                  },
                  "technical_mapping": {
                    "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                    "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                  }
                },
                {
                  "id": "prometazina_im",
                  "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                  "bloqueios_clinicos": [
                    "VIA_IV_BLOQUEADA_NESTA_FICHA",
                    "IDADE_MENOR_2_CONTRAINDICADA"
                  ],
                  "pendencias_nao_bloqueantes": [],
                  "states": {
                    "PESQUISA": "CONCLUIDA",
                    "REVISAO_CLINICA": "HOMOLOGADA",
                    "HOMOLOGACAO_DADOS": "SIM",
                    "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                    "INTEGRACAO_TECNICA": "NAO_INICIADA",
                    "PUBLICACAO": "BLOQUEADA"
                  },
                  "technical_mapping": {
                    "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                    "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                  }
                },
                {
                  "id": "salbutamol_nebulizacao",
                  "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                  "bloqueios_clinicos": [
                    "IDADE_MENOR_2_BLOQUEADA_NESTE_ROTULO",
                    "PESO_MENOR_15_EXIGE_OUTRA_CONCENTRACAO"
                  ],
                  "pendencias_nao_bloqueantes": [],
                  "states": {
                    "PESQUISA": "CONCLUIDA",
                    "REVISAO_CLINICA": "HOMOLOGADA",
                    "HOMOLOGACAO_DADOS": "SIM",
                    "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                    "INTEGRACAO_TECNICA": "NAO_INICIADA",
                    "PUBLICACAO": "BLOQUEADA"
                  },
                  "technical_mapping": {
                    "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                    "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                  }
                }
              ],
              "packageRecordMetadata": {
                "ID": "salbutamol_nebulizacao",
                "NOTA_REVISAO_CLINICA": "HOMOLOGADO CLINICAMENTE em 20-09-2026 por Dra Eugenia Marques; resultado APROVADO INTEGRALMENTE; sem excecoes informadas. Conteudo clinico congelado; bloqueios, lacunas justificadas e reconciliacoes preservados.",
                "PROVENIENCIA": "NEW_ENTRY_NO_LEGACY_BASELINE",
                "ESCOPO_VALIDADO": "Salbutamol/albuterol 0,083% 2,5 mg/3 mL nebulizacao - EUA",
                "BLOQUEIOS_CLINICOS": [
                  "IDADE_MENOR_2_BLOQUEADA_NESTE_ROTULO",
                  "PESO_MENOR_15_EXIGE_OUTRA_CONCENTRACAO"
                ],
                "PENDENCIAS_NAO_BLOQUEANTES": [],
                "HOMOLOGACAO": {
                  "LISTA": "NOVA_LISTA_GOLD33_V1",
                  "LOTE": "103",
                  "MEDICO_REVISOR": "Dra Eugenia Marques",
                  "DATA_REVISAO": "20-09-2026",
                  "RESULTADO": "Aprovado integralmente",
                  "ARQUIVO_REVISADO": "103",
                  "EXCECOES_INFORMADAS": 0,
                  "REVISAO_CLINICA": "HOMOLOGADA",
                  "HOMOLOGACAO_DADOS": "SIM",
                  "INTEGRACAO_TECNICA": "NAO_INICIADA",
                  "PUBLICACAO": "BLOQUEADA",
                  "CLINICAL_CONTENT_FROZEN": true
                }
              },
              "supersededPackages": [
                "GOLD33_NOVA_LISTA_LOTE_088_HOMOLOGADO_CLINICAMENTE.zip"
              ],
              "referenceOnly": true
            }
          },
          "STATES": {
            "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
            "HOMOLOGACAO_DADOS": "SIM",
            "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
            "INTEGRACAO_RUNTIME": "NAO",
            "INTEGRACAO_TECNICA": "NAO_INICIADA",
            "PUBLICACAO": "BLOQUEADA"
          },
          "calculationAuthorized": false,
          "publicationAuthorized": false,
          "HOMOLOGACAO": {
            "LISTA": "NOVA_LISTA_GOLD33_V1",
            "LOTE": "093_NOVO_CANDIDATO",
            "MEDICO_REVISOR": "Dra Eugenia Marques",
            "DATA_REVISAO": "20-09-2026",
            "RESULTADO": "Aprovado integralmente",
            "ARQUIVO_REVISADO": "01_NOVO_CANDIDATO_093.json",
            "EXCECOES_INFORMADAS": 0,
            "historicalApprovalApplies": false,
            "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
            "calculationAuthorized": false,
            "publicationAuthorized": false,
            "INTEGRACAO_RUNTIME": "NAO",
            "INTEGRACAO_TECNICA": "NAO_INICIADA",
            "PUBLICACAO": "BLOQUEADA",
            "nota": "O parecer se aplica exclusivamente ao novo candidato 093 submetido nesta conversa. Nenhuma homologacao historica do Lote 093 original se transfere para este conteudo.",
            "CLINICAL_CONTENT_FROZEN": true,
            "reviewedCandidateSha256": "d37488285baa1b0343e2232153a4554cdb1bc88ae828d2c0550331644ba0d84b",
            "approvalBinding": "USER_CONFIRMED_LOCAL_CANDIDATE",
            "approvalPackageSha256": "fa131a03c1c81ae4244b520a055113617ec7f1d617f7078722437521f403aebf"
          }
        },
        "packageRestrictions": {
          "historicalApprovalApplies": false,
          "items": [
            {
              "id": "diclofenaco_gotas",
              "originalRecordMetadata": {
                "ID": "diclofenaco_gotas",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/diclofenaco.json",
                  "templateSha256": "0c9f069bb319d807954cdffdffb0941600c7b4bf48c9b04c5a1474ae1f6a7f02",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://portal.novartis.com.br/medicamentos/wp-content/uploads/2021/10/Bula-CATAFLAM-Suspensao-Gotas-Medico.pdf",
                    "https://portal.novartis.com.br/medicamentos/wp-content/uploads/2021/10/Bula-CATAFLAM-Suspensao-Gotas-Paciente.pdf"
                  ],
                  "newProductSpecificFields": [
                    "name",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "indications",
                    "dose",
                    "pediatricDose",
                    "administration",
                    "preparation",
                    "infusionProtocol",
                    "lactation",
                    "clinicalPearls"
                  ],
                  "inheritedFieldsRequiringReview": [
                    "class",
                    "pharmacologicClass",
                    "pharmacodynamics",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "pregnancy",
                    "specialPopulations",
                    "patientEducation",
                    "alerts",
                    "mechanism",
                    "pharmacokinetics",
                    "renalDose",
                    "hepaticDose"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/analgesicos.js",
                    "sourceField": "diclofenaco.mcGoldClinicalV1",
                    "lote": "025",
                    "requiredFields": 33,
                    "approvedSha256": "f490066cbf88c2c1fc49fde254c0e52699a8a5320bd3cfb2ee1a9d3050dd9c7f",
                    "calculationAuthorized": false,
                    "publicationAuthorized": true,
                    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
                    "ownerPublicationAuthorization": "mission10-owner-confirmed"
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "diclofenaco_supositorio",
              "originalRecordMetadata": {
                "ID": "diclofenaco_supositorio",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/diclofenaco.json",
                  "templateSha256": "0c9f069bb319d807954cdffdffb0941600c7b4bf48c9b04c5a1474ae1f6a7f02",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://www.medicines.org.uk/emc/product/1044/smpc"
                  ],
                  "newProductSpecificFields": [
                    "name",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "indications",
                    "dose",
                    "pediatricDose",
                    "administration",
                    "preparation",
                    "infusionProtocol",
                    "contraindications",
                    "clinicalPearls"
                  ],
                  "inheritedFieldsRequiringReview": [
                    "class",
                    "pharmacologicClass",
                    "pharmacodynamics",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "interactions",
                    "monitoring",
                    "pregnancy",
                    "lactation",
                    "specialPopulations",
                    "patientEducation",
                    "alerts",
                    "mechanism",
                    "pharmacokinetics",
                    "renalDose",
                    "hepaticDose"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/analgesicos.js",
                    "sourceField": "diclofenaco.mcGoldClinicalV1",
                    "lote": "025",
                    "requiredFields": 33,
                    "approvedSha256": "f490066cbf88c2c1fc49fde254c0e52699a8a5320bd3cfb2ee1a9d3050dd9c7f",
                    "calculationAuthorized": false,
                    "publicationAuthorized": true,
                    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
                    "ownerPublicationAuthorization": "mission10-owner-confirmed"
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "cetoprofeno_gotas",
              "originalRecordMetadata": {
                "ID": "cetoprofeno_gotas",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/cetoprofeno.json",
                  "templateSha256": "92e70a001d201e6a9b143907d4f6eef1e4c778615b42500884f6c502b82ec6bb",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://eurofarma.com.br/produtos/bulas/view/healthcare/pt/bula-cetoprofeno-solucao-oral-gotas.html",
                    "https://eurofarma.com.br/produtos/bulas/view/patient/pt/bula-cetoprofeno-solucao-oral-gotas.html"
                  ],
                  "newProductSpecificFields": [
                    "name",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "dose",
                    "pediatricDose",
                    "renalDose",
                    "hepaticDose",
                    "administration",
                    "preparation",
                    "pregnancy",
                    "infusionProtocol"
                  ],
                  "inheritedFieldsRequiringReview": [
                    "class",
                    "pharmacologicClass",
                    "mechanism",
                    "pharmacodynamics",
                    "pharmacokinetics",
                    "indications",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "lactation",
                    "specialPopulations",
                    "patientEducation",
                    "clinicalPearls",
                    "alerts"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/analgesicos.js",
                    "sourceField": "cetoprofeno.mcGoldClinicalV1",
                    "lote": "017",
                    "requiredFields": 33,
                    "approvedSha256": "253c17c2327715b3e25ab80e7138de200e935b80e7d849c1c6088a69116420a3",
                    "calculationAuthorized": false,
                    "publicationAuthorized": true,
                    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
                    "ownerPublicationAuthorization": "mission10-owner-confirmed"
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "salbutamol_spray",
              "originalRecordMetadata": {
                "ID": "salbutamol_spray",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/salbutamol_nebulizacao.json",
                  "templateSha256": "11760e3f8bd9271bc9c7e4c851a2ad9799abd3ce7cc2faa78a73bd3753833e21",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://www.medicines.org.uk/emc/product/850/smpc",
                    "https://www.medicines.org.uk/emc/files/pil.850.pdf"
                  ],
                  "newProductSpecificFields": [
                    "name",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "indications",
                    "pharmacokinetics",
                    "dose",
                    "pediatricDose",
                    "administration",
                    "preparation",
                    "infusionProtocol",
                    "clinicalPearls",
                    "safetyFlags",
                    "alerts"
                  ],
                  "inheritedFieldsRequiringReview": [
                    "class",
                    "pharmacologicClass",
                    "mechanism",
                    "pharmacodynamics",
                    "renalDose",
                    "hepaticDose",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "pregnancy",
                    "lactation",
                    "specialPopulations",
                    "patientEducation"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/gold33_nova_lista.js",
                    "sourceField": "salbutamol_nebulizacao.mcGoldClinicalV1",
                    "requiredFields": 33,
                    "lote": "103",
                    "approvedSha256": "3dd8735151ec6ccf6dcd71dd5262642970c55bff5d753c59dcec104bb685a419",
                    "calculationAuthorized": false,
                    "publicationAuthorized": false,
                    "clinicalPackagePublicationState": "BLOQUEADA",
                    "list": "NOVA_LISTA_GOLD33_V1",
                    "zipSha256": "167045215deac33b67a58cf485f504a0a70ac17a45848dd73c59ec6ea4235aac",
                    "packageFile": "GOLD33_NOVA_LISTA_LOTE_103_HOMOLOGADO_CLINICAMENTE.zip",
                    "packageRestrictions": [
                      {
                        "id": "adrenalina_autoinjetavel",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "PRODUTO_ESPECIFICO_AUVIQ",
                          "PESO_MENOR_7_5_BLOQUEADO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "aminofilina_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "TDM_OBRIGATORIO",
                          "AUTOMACAO_MANUTENCAO_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "betametasona_injetavel",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "VIA_IV_BLOQUEADA",
                          "INDICACAO_ROTA_OBRIGATORIAS"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "brometo_de_ipratropio_nebulizacao",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "CALCULO_PEDIATRICO_BLOQUEADO",
                          "VIA_NAO_INALATORIA_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "dexametasona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "CALCULO_PEDIATRICO_BLOQUEADO",
                          "AUTOMACAO_EXIGE_INDICACAO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "fenoterol_gotas",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "DOSE_ATUAL_NAO_VERIFICADA",
                          "VIA_AUTOMATICA_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [
                          "BULA_PRIMARIA_ATUAL_PENDENTE"
                        ],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "hidrocortisona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "AUTOMACAO_EXIGE_INDICACAO",
                          "CALCULO_PEDIATRICO_BLOQUEADO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "metilprednisolona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "AUTOMACAO_EXIGE_INDICACAO",
                          "FORMULACAO_CONSERVANTE_DEVE_SER_CONFIRMADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "prometazina_im",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "VIA_IV_BLOQUEADA_NESTA_FICHA",
                          "IDADE_MENOR_2_CONTRAINDICADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "salbutamol_nebulizacao",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "IDADE_MENOR_2_BLOQUEADA_NESTE_ROTULO",
                          "PESO_MENOR_15_EXIGE_OUTRA_CONCENTRACAO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      }
                    ],
                    "packageRecordMetadata": {
                      "ID": "salbutamol_nebulizacao",
                      "NOTA_REVISAO_CLINICA": "HOMOLOGADO CLINICAMENTE em 20-09-2026 por Dra Eugenia Marques; resultado APROVADO INTEGRALMENTE; sem excecoes informadas. Conteudo clinico congelado; bloqueios, lacunas justificadas e reconciliacoes preservados.",
                      "PROVENIENCIA": "NEW_ENTRY_NO_LEGACY_BASELINE",
                      "ESCOPO_VALIDADO": "Salbutamol/albuterol 0,083% 2,5 mg/3 mL nebulizacao - EUA",
                      "BLOQUEIOS_CLINICOS": [
                        "IDADE_MENOR_2_BLOQUEADA_NESTE_ROTULO",
                        "PESO_MENOR_15_EXIGE_OUTRA_CONCENTRACAO"
                      ],
                      "PENDENCIAS_NAO_BLOQUEANTES": [],
                      "HOMOLOGACAO": {
                        "LISTA": "NOVA_LISTA_GOLD33_V1",
                        "LOTE": "103",
                        "MEDICO_REVISOR": "Dra Eugenia Marques",
                        "DATA_REVISAO": "20-09-2026",
                        "RESULTADO": "Aprovado integralmente",
                        "ARQUIVO_REVISADO": "103",
                        "EXCECOES_INFORMADAS": 0,
                        "REVISAO_CLINICA": "HOMOLOGADA",
                        "HOMOLOGACAO_DADOS": "SIM",
                        "INTEGRACAO_TECNICA": "NAO_INICIADA",
                        "PUBLICACAO": "BLOQUEADA",
                        "CLINICAL_CONTENT_FROZEN": true
                      }
                    },
                    "supersededPackages": [
                      "GOLD33_NOVA_LISTA_LOTE_088_HOMOLOGADO_CLINICAMENTE.zip"
                    ],
                    "referenceOnly": true
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "salbutamol_solucao_inalatoria",
              "originalRecordMetadata": {
                "ID": "salbutamol_solucao_inalatoria",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/salbutamol_nebulizacao.json",
                  "templateSha256": "11760e3f8bd9271bc9c7e4c851a2ad9799abd3ce7cc2faa78a73bd3753833e21",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=b72742df-1a6b-4483-aff3-3e79db5e015d"
                  ],
                  "newProductSpecificFields": [],
                  "inheritedFieldsRequiringReview": [
                    "name",
                    "class",
                    "pharmacologicClass",
                    "mechanism",
                    "pharmacodynamics",
                    "pharmacokinetics",
                    "indications",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "dose",
                    "pediatricDose",
                    "renalDose",
                    "hepaticDose",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "administration",
                    "preparation",
                    "infusionProtocol",
                    "pregnancy",
                    "lactation",
                    "specialPopulations",
                    "patientEducation",
                    "clinicalPearls",
                    "alerts"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/gold33_nova_lista.js",
                    "sourceField": "salbutamol_nebulizacao.mcGoldClinicalV1",
                    "requiredFields": 33,
                    "lote": "103",
                    "approvedSha256": "3dd8735151ec6ccf6dcd71dd5262642970c55bff5d753c59dcec104bb685a419",
                    "calculationAuthorized": false,
                    "publicationAuthorized": false,
                    "clinicalPackagePublicationState": "BLOQUEADA",
                    "list": "NOVA_LISTA_GOLD33_V1",
                    "zipSha256": "167045215deac33b67a58cf485f504a0a70ac17a45848dd73c59ec6ea4235aac",
                    "packageFile": "GOLD33_NOVA_LISTA_LOTE_103_HOMOLOGADO_CLINICAMENTE.zip",
                    "packageRestrictions": [
                      {
                        "id": "adrenalina_autoinjetavel",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "PRODUTO_ESPECIFICO_AUVIQ",
                          "PESO_MENOR_7_5_BLOQUEADO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "aminofilina_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "TDM_OBRIGATORIO",
                          "AUTOMACAO_MANUTENCAO_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "betametasona_injetavel",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "VIA_IV_BLOQUEADA",
                          "INDICACAO_ROTA_OBRIGATORIAS"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "brometo_de_ipratropio_nebulizacao",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "CALCULO_PEDIATRICO_BLOQUEADO",
                          "VIA_NAO_INALATORIA_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "dexametasona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "CALCULO_PEDIATRICO_BLOQUEADO",
                          "AUTOMACAO_EXIGE_INDICACAO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "fenoterol_gotas",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "DOSE_ATUAL_NAO_VERIFICADA",
                          "VIA_AUTOMATICA_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [
                          "BULA_PRIMARIA_ATUAL_PENDENTE"
                        ],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "hidrocortisona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "AUTOMACAO_EXIGE_INDICACAO",
                          "CALCULO_PEDIATRICO_BLOQUEADO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "metilprednisolona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "AUTOMACAO_EXIGE_INDICACAO",
                          "FORMULACAO_CONSERVANTE_DEVE_SER_CONFIRMADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "prometazina_im",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "VIA_IV_BLOQUEADA_NESTA_FICHA",
                          "IDADE_MENOR_2_CONTRAINDICADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "salbutamol_nebulizacao",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "IDADE_MENOR_2_BLOQUEADA_NESTE_ROTULO",
                          "PESO_MENOR_15_EXIGE_OUTRA_CONCENTRACAO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      }
                    ],
                    "packageRecordMetadata": {
                      "ID": "salbutamol_nebulizacao",
                      "NOTA_REVISAO_CLINICA": "HOMOLOGADO CLINICAMENTE em 20-09-2026 por Dra Eugenia Marques; resultado APROVADO INTEGRALMENTE; sem excecoes informadas. Conteudo clinico congelado; bloqueios, lacunas justificadas e reconciliacoes preservados.",
                      "PROVENIENCIA": "NEW_ENTRY_NO_LEGACY_BASELINE",
                      "ESCOPO_VALIDADO": "Salbutamol/albuterol 0,083% 2,5 mg/3 mL nebulizacao - EUA",
                      "BLOQUEIOS_CLINICOS": [
                        "IDADE_MENOR_2_BLOQUEADA_NESTE_ROTULO",
                        "PESO_MENOR_15_EXIGE_OUTRA_CONCENTRACAO"
                      ],
                      "PENDENCIAS_NAO_BLOQUEANTES": [],
                      "HOMOLOGACAO": {
                        "LISTA": "NOVA_LISTA_GOLD33_V1",
                        "LOTE": "103",
                        "MEDICO_REVISOR": "Dra Eugenia Marques",
                        "DATA_REVISAO": "20-09-2026",
                        "RESULTADO": "Aprovado integralmente",
                        "ARQUIVO_REVISADO": "103",
                        "EXCECOES_INFORMADAS": 0,
                        "REVISAO_CLINICA": "HOMOLOGADA",
                        "HOMOLOGACAO_DADOS": "SIM",
                        "INTEGRACAO_TECNICA": "NAO_INICIADA",
                        "PUBLICACAO": "BLOQUEADA",
                        "CLINICAL_CONTENT_FROZEN": true
                      }
                    },
                    "supersededPackages": [
                      "GOLD33_NOVA_LISTA_LOTE_088_HOMOLOGADO_CLINICAMENTE.zip"
                    ],
                    "referenceOnly": true
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false,
                "RECONCILIACAO_CANONICA": {
                  "candidateAliasOf": "salbutamol_nebulizacao",
                  "status": "PENDENTE_REVISAO_DE_ESCOPO",
                  "action": "Não adicionar um segundo registro ativo para o mesmo produto."
                }
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "fenoterol_solucao_inalatoria",
              "originalRecordMetadata": {
                "ID": "fenoterol_solucao_inalatoria",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/fenoterol_gotas.json",
                  "templateSha256": "75acfdff650220647f3251f2d6f9139d43b22db06064b3677009172ad0216990",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://www.gov.br/anvisa/pt-br/assuntos/medicamentos/cmed/precos/anos-anteriores/arquivos/5333json-file-1/%40%40download/file"
                  ],
                  "newProductSpecificFields": [],
                  "inheritedFieldsRequiringReview": [
                    "name",
                    "class",
                    "pharmacologicClass",
                    "mechanism",
                    "pharmacodynamics",
                    "pharmacokinetics",
                    "indications",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "dose",
                    "pediatricDose",
                    "renalDose",
                    "hepaticDose",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "administration",
                    "preparation",
                    "infusionProtocol",
                    "pregnancy",
                    "lactation",
                    "specialPopulations",
                    "patientEducation",
                    "clinicalPearls",
                    "alerts"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/gold33_nova_lista.js",
                    "sourceField": "fenoterol_gotas.mcGoldClinicalV1",
                    "requiredFields": 33,
                    "lote": "103",
                    "approvedSha256": "3dd8735151ec6ccf6dcd71dd5262642970c55bff5d753c59dcec104bb685a419",
                    "calculationAuthorized": false,
                    "publicationAuthorized": false,
                    "clinicalPackagePublicationState": "BLOQUEADA",
                    "list": "NOVA_LISTA_GOLD33_V1",
                    "zipSha256": "167045215deac33b67a58cf485f504a0a70ac17a45848dd73c59ec6ea4235aac",
                    "packageFile": "GOLD33_NOVA_LISTA_LOTE_103_HOMOLOGADO_CLINICAMENTE.zip",
                    "packageRestrictions": [
                      {
                        "id": "adrenalina_autoinjetavel",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "PRODUTO_ESPECIFICO_AUVIQ",
                          "PESO_MENOR_7_5_BLOQUEADO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "aminofilina_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "TDM_OBRIGATORIO",
                          "AUTOMACAO_MANUTENCAO_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "betametasona_injetavel",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "VIA_IV_BLOQUEADA",
                          "INDICACAO_ROTA_OBRIGATORIAS"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "brometo_de_ipratropio_nebulizacao",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "CALCULO_PEDIATRICO_BLOQUEADO",
                          "VIA_NAO_INALATORIA_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "dexametasona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "CALCULO_PEDIATRICO_BLOQUEADO",
                          "AUTOMACAO_EXIGE_INDICACAO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "fenoterol_gotas",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "DOSE_ATUAL_NAO_VERIFICADA",
                          "VIA_AUTOMATICA_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [
                          "BULA_PRIMARIA_ATUAL_PENDENTE"
                        ],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "hidrocortisona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "AUTOMACAO_EXIGE_INDICACAO",
                          "CALCULO_PEDIATRICO_BLOQUEADO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "metilprednisolona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "AUTOMACAO_EXIGE_INDICACAO",
                          "FORMULACAO_CONSERVANTE_DEVE_SER_CONFIRMADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "prometazina_im",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "VIA_IV_BLOQUEADA_NESTA_FICHA",
                          "IDADE_MENOR_2_CONTRAINDICADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "salbutamol_nebulizacao",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "IDADE_MENOR_2_BLOQUEADA_NESTE_ROTULO",
                          "PESO_MENOR_15_EXIGE_OUTRA_CONCENTRACAO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      }
                    ],
                    "packageRecordMetadata": {
                      "ID": "fenoterol_gotas",
                      "NOTA_REVISAO_CLINICA": "HOMOLOGADO CLINICAMENTE em 20-09-2026 por Dra Eugenia Marques; resultado APROVADO INTEGRALMENTE; sem excecoes informadas. Conteudo clinico congelado; bloqueios, lacunas justificadas e reconciliacoes preservados.",
                      "PROVENIENCIA": "NEW_ENTRY_NO_LEGACY_BASELINE",
                      "ESCOPO_VALIDADO": "Fenoterol 5 mg/mL gotas - Brasil; dose atual bloqueada",
                      "BLOQUEIOS_CLINICOS": [
                        "DOSE_ATUAL_NAO_VERIFICADA",
                        "VIA_AUTOMATICA_BLOQUEADA"
                      ],
                      "PENDENCIAS_NAO_BLOQUEANTES": [
                        "BULA_PRIMARIA_ATUAL_PENDENTE"
                      ],
                      "HOMOLOGACAO": {
                        "LISTA": "NOVA_LISTA_GOLD33_V1",
                        "LOTE": "103",
                        "MEDICO_REVISOR": "Dra Eugenia Marques",
                        "DATA_REVISAO": "20-09-2026",
                        "RESULTADO": "Aprovado integralmente",
                        "ARQUIVO_REVISADO": "103",
                        "EXCECOES_INFORMADAS": 0,
                        "REVISAO_CLINICA": "HOMOLOGADA",
                        "HOMOLOGACAO_DADOS": "SIM",
                        "INTEGRACAO_TECNICA": "NAO_INICIADA",
                        "PUBLICACAO": "BLOQUEADA",
                        "CLINICAL_CONTENT_FROZEN": true
                      }
                    },
                    "supersededPackages": [
                      "GOLD33_NOVA_LISTA_LOTE_088_HOMOLOGADO_CLINICAMENTE.zip"
                    ],
                    "referenceOnly": true
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false,
                "RECONCILIACAO_CANONICA": {
                  "candidateAliasOf": "fenoterol_gotas",
                  "status": "PENDENTE_REVISAO_DE_ESCOPO",
                  "action": "Não adicionar um segundo registro ativo para o mesmo produto."
                }
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "ipratropio_solucao_inalatoria",
              "originalRecordMetadata": {
                "ID": "ipratropio_solucao_inalatoria",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/brometo_de_ipratropio_nebulizacao.json",
                  "templateSha256": "8d7e3cddc70cbd671654f0a934055d306657bf6412a6f8452a008684da41bafa",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3249aea8-a395-f09f-e063-6294a90a2d8b"
                  ],
                  "newProductSpecificFields": [],
                  "inheritedFieldsRequiringReview": [
                    "name",
                    "class",
                    "pharmacologicClass",
                    "mechanism",
                    "pharmacodynamics",
                    "pharmacokinetics",
                    "indications",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "dose",
                    "pediatricDose",
                    "renalDose",
                    "hepaticDose",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "administration",
                    "preparation",
                    "infusionProtocol",
                    "pregnancy",
                    "lactation",
                    "specialPopulations",
                    "patientEducation",
                    "clinicalPearls",
                    "alerts"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/gold33_nova_lista.js",
                    "sourceField": "brometo_de_ipratropio_nebulizacao.mcGoldClinicalV1",
                    "requiredFields": 33,
                    "lote": "103",
                    "approvedSha256": "3dd8735151ec6ccf6dcd71dd5262642970c55bff5d753c59dcec104bb685a419",
                    "calculationAuthorized": false,
                    "publicationAuthorized": false,
                    "clinicalPackagePublicationState": "BLOQUEADA",
                    "list": "NOVA_LISTA_GOLD33_V1",
                    "zipSha256": "167045215deac33b67a58cf485f504a0a70ac17a45848dd73c59ec6ea4235aac",
                    "packageFile": "GOLD33_NOVA_LISTA_LOTE_103_HOMOLOGADO_CLINICAMENTE.zip",
                    "packageRestrictions": [
                      {
                        "id": "adrenalina_autoinjetavel",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "PRODUTO_ESPECIFICO_AUVIQ",
                          "PESO_MENOR_7_5_BLOQUEADO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "aminofilina_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "TDM_OBRIGATORIO",
                          "AUTOMACAO_MANUTENCAO_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "betametasona_injetavel",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "VIA_IV_BLOQUEADA",
                          "INDICACAO_ROTA_OBRIGATORIAS"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "brometo_de_ipratropio_nebulizacao",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "CALCULO_PEDIATRICO_BLOQUEADO",
                          "VIA_NAO_INALATORIA_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "dexametasona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "CALCULO_PEDIATRICO_BLOQUEADO",
                          "AUTOMACAO_EXIGE_INDICACAO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "fenoterol_gotas",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "DOSE_ATUAL_NAO_VERIFICADA",
                          "VIA_AUTOMATICA_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [
                          "BULA_PRIMARIA_ATUAL_PENDENTE"
                        ],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "hidrocortisona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "AUTOMACAO_EXIGE_INDICACAO",
                          "CALCULO_PEDIATRICO_BLOQUEADO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "metilprednisolona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "AUTOMACAO_EXIGE_INDICACAO",
                          "FORMULACAO_CONSERVANTE_DEVE_SER_CONFIRMADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "prometazina_im",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "VIA_IV_BLOQUEADA_NESTA_FICHA",
                          "IDADE_MENOR_2_CONTRAINDICADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "salbutamol_nebulizacao",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "IDADE_MENOR_2_BLOQUEADA_NESTE_ROTULO",
                          "PESO_MENOR_15_EXIGE_OUTRA_CONCENTRACAO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      }
                    ],
                    "packageRecordMetadata": {
                      "ID": "brometo_de_ipratropio_nebulizacao",
                      "NOTA_REVISAO_CLINICA": "HOMOLOGADO CLINICAMENTE em 20-09-2026 por Dra Eugenia Marques; resultado APROVADO INTEGRALMENTE; sem excecoes informadas. Conteudo clinico congelado; bloqueios, lacunas justificadas e reconciliacoes preservados.",
                      "PROVENIENCIA": "NEW_ENTRY_NO_LEGACY_BASELINE",
                      "ESCOPO_VALIDADO": "Ipratropium 0,02% 500 mcg/2,5 mL - EUA",
                      "BLOQUEIOS_CLINICOS": [
                        "CALCULO_PEDIATRICO_BLOQUEADO",
                        "VIA_NAO_INALATORIA_BLOQUEADA"
                      ],
                      "PENDENCIAS_NAO_BLOQUEANTES": [],
                      "HOMOLOGACAO": {
                        "LISTA": "NOVA_LISTA_GOLD33_V1",
                        "LOTE": "103",
                        "MEDICO_REVISOR": "Dra Eugenia Marques",
                        "DATA_REVISAO": "20-09-2026",
                        "RESULTADO": "Aprovado integralmente",
                        "ARQUIVO_REVISADO": "103",
                        "EXCECOES_INFORMADAS": 0,
                        "REVISAO_CLINICA": "HOMOLOGADA",
                        "HOMOLOGACAO_DADOS": "SIM",
                        "INTEGRACAO_TECNICA": "NAO_INICIADA",
                        "PUBLICACAO": "BLOQUEADA",
                        "CLINICAL_CONTENT_FROZEN": true
                      }
                    },
                    "supersededPackages": [
                      "GOLD33_NOVA_LISTA_LOTE_087_HOMOLOGADO_CLINICAMENTE.zip"
                    ],
                    "referenceOnly": true
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false,
                "RECONCILIACAO_CANONICA": {
                  "candidateAliasOf": "brometo_de_ipratropio_nebulizacao",
                  "status": "PENDENTE_REVISAO_DE_ESCOPO",
                  "action": "Não adicionar um segundo registro ativo para o mesmo produto."
                }
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "prednisolona_solucao_oral",
              "originalRecordMetadata": {
                "ID": "prednisolona_solucao_oral",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/prednisolona.json",
                  "templateSha256": "1fd9411f1fb243102af07912d9e9bf1e0684527b96d01b0a8cefd63948a73259",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=a0d74ae0-7b2d-4d36-9211-c76f5063b5a9",
                    "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=7262fc84-3db2-4475-8ae4-6bec4477cb81"
                  ],
                  "newProductSpecificFields": [
                    "name",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "mechanism",
                    "pharmacodynamics",
                    "pharmacokinetics",
                    "dose",
                    "pediatricDose",
                    "renalDose",
                    "hepaticDose",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "administration",
                    "preparation",
                    "infusionProtocol",
                    "pregnancy",
                    "lactation"
                  ],
                  "inheritedFieldsRequiringReview": [
                    "class",
                    "pharmacologicClass",
                    "indications",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "specialPopulations",
                    "patientEducation",
                    "clinicalPearls",
                    "alerts"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/imuno_corticoide.js",
                    "sourceField": "prednisolona.mcGoldClinicalV1",
                    "lote": "064",
                    "requiredFields": 33,
                    "approvedSha256": "21c1e99276216e72bd2a7201eddd567a0335bd6346374d413459182168e7cdea",
                    "calculationAuthorized": false,
                    "publicationAuthorized": true,
                    "clinicalPackagePublicationState": "LIBERADA_COM_RESTRICOES_GRANULARES",
                    "ownerPublicationAuthorization": "lote002-owner-confirmed"
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "dexametasona_elixir",
              "originalRecordMetadata": {
                "ID": "dexametasona_elixir",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/dexametasona.json",
                  "templateSha256": "176ed420ac1c027d82deb4113fc025c47b8de2fb7886d3e24344c0a4172dcce1",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=7b51ffce-ec64-4b49-8870-b9666537c541"
                  ],
                  "newProductSpecificFields": [
                    "name",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "dose",
                    "pediatricDose",
                    "administration",
                    "preparation",
                    "infusionProtocol",
                    "clinicalPearls"
                  ],
                  "inheritedFieldsRequiringReview": [
                    "class",
                    "pharmacologicClass",
                    "mechanism",
                    "pharmacodynamics",
                    "pharmacokinetics",
                    "indications",
                    "renalDose",
                    "hepaticDose",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "pregnancy",
                    "lactation",
                    "specialPopulations",
                    "patientEducation",
                    "alerts"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/imuno_corticoide.js",
                    "sourceField": "dexametasona.mcGoldClinicalV1",
                    "lote": "024",
                    "requiredFields": 33,
                    "approvedSha256": "9721657a393121ed360ce59ff910deb7cbb3b0fc3421608349c6fa584237305a",
                    "calculationAuthorized": false,
                    "publicationAuthorized": true,
                    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
                    "ownerPublicationAuthorization": "mission10-owner-confirmed"
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "budesonida_suspensao_inalatoria",
              "originalRecordMetadata": {
                "ID": "budesonida_suspensao_inalatoria",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/budesonida.json",
                  "templateSha256": "83faa465b16000c39d3c4e9904fab859797107253db21034238feb9f2ea9facd",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=1d139a25-9c17-4b3e-8ffd-b2d562cc00ee"
                  ],
                  "newProductSpecificFields": [
                    "name",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "indications",
                    "dose",
                    "pediatricDose",
                    "hepaticDose",
                    "administration",
                    "preparation",
                    "infusionProtocol"
                  ],
                  "inheritedFieldsRequiringReview": [
                    "class",
                    "pharmacologicClass",
                    "mechanism",
                    "pharmacodynamics",
                    "pharmacokinetics",
                    "renalDose",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "pregnancy",
                    "lactation",
                    "specialPopulations",
                    "patientEducation",
                    "clinicalPearls",
                    "alerts"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/pneumologia.js",
                    "sourceField": "budesonida.mcGoldClinicalV1",
                    "lote": "012",
                    "requiredFields": 33,
                    "approvedSha256": "33a04a022820507c1688fbebb735cd7d879bc3d0ef30a24f4ed7483f5cac16eb",
                    "calculationAuthorized": false,
                    "publicationAuthorized": true,
                    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
                    "ownerPublicationAuthorization": "mission10-owner-confirmed"
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            }
          ]
        }
      },
      "pt": {
        "name": "Salbutamol — aerossol 100 microgramas/acionamento",
        "class": "Broncodilatador beta2-agonista de curta acao",
        "pharmacologicClass": "Agonista beta2-adrenergico SABA",
        "commercialNames": "Ventolin Evohaler, Reino Unido.",
        "presentation": "Inalador pressurizado dosimetrado.",
        "presentations": "100 microgramas/acionamento; 200 acionamentos.",
        "mechanism": "Estimula beta2 em musculo liso bronquico, aumentando cAMP e promovendo broncodilatacao.",
        "pharmacodynamics": "Broncodilatacao rapida; doses excessivas podem causar taquicardia e hipocalemia.",
        "pharmacokinetics": "10–20% da dose inalada alcança vias inferiores; eliminação principalmente urinária.",
        "indications": "Alívio/prevenção do broncoespasmo; adultos e crianças ≥4 anos no escopo escolhido.",
        "dose": "Alívio adulto: 1–2 jatos. Demanda: máximo 8 jatos/24 h; necessidade crescente exige reavaliação.",
        "pediatricDose": "4–11 anos: 1 jato; até 2 se necessário. ≥12 anos: dose adulta. <4 anos: revisão específica.",
        "renalDose": "Sem ajuste numerico especifico.",
        "hepaticDose": "Sem ajuste numerico especifico.",
        "commonAdverseEffects": "Tremor, nervosismo, taquicardia, cefaleia e palpitações.",
        "dangerousAdverseEffects": "Broncoespasmo paradoxal, taquiarritmias, hipocalemia e acidose lactica em uso excessivo/intenso.",
        "adverseEffects": "Tosse, irritacao de garganta e nausea podem ocorrer.",
        "contraindications": "Hipersensibilidade ao albuterol/salbutamol ou componentes.",
        "interactions": "Beta-bloqueadores antagonizam; diureticos, xantinas e outros simpaticomimeticos podem aumentar efeitos/hipocalemia; MAOI/TCA exigem cautela.",
        "monitoring": "Resposta, FC, tremor e potassio em uso intensivo; aumento da necessidade de resgate exige reavaliacao.",
        "administration": "Inalação oral; coordenar acionamento/inspiração. Espaçador quando necessário.",
        "preparation": "Dispositivo pronto; não diluir nem nebulizar.",
        "infusionProtocol": "Não aplicável; não injetar.",
        "pregnancy": "Usar conforme beneficio-risco; asma descontrolada tambem traz risco.",
        "lactation": "Dados limitados; uso inalatorio tende a menor exposicao sistemica.",
        "specialPopulations": "Doenca cardiaca, hipertiroidismo e risco de hipocalemia exigem cautela.",
        "patientEducation": "Se a dose habitual deixar de aliviar, procurar avaliacao urgente; nao aumentar frequencia por conta propria.",
        "clinicalPearls": "Na asma, SABA não deve ser tratamento único; associar terapia anti-inflamatória.",
        "guidelineRecommendations": "Esta preparação usa bulas e texto de referência preexistente; não foi feita validação independente de diretrizes.",
        "safetyFlags": "CANDIDATO NOVO: revisão médica pendente; cálculos e publicação bloqueados. AEROSSOL_DOSIMETRADO; SEM_CONVERSAO_DE_NEBULIZACAO; BETA2; HIPOCALEMIA.",
        "alerts": "Não transferir volumes, doses ou cortes de peso da solução nebulizada para o aerossol.",
        "references": [
          "DailyMed/NLM EUA - Albuterol Sulfate Inhalation Solution 0.083% 2.5 mg/3 mL, active 2026. https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=b72742df-1a6b-4483-aff3-3e79db5e015d",
          "https://www.medicines.org.uk/emc/product/850/smpc",
          "https://www.medicines.org.uk/emc/files/pil.850.pdf"
        ],
        "ref": "https://www.medicines.org.uk/emc/product/850/smpc"
      },
      "es": {
        "name": "Salbutamol — aerosol 100 microgramos/actuación",
        "class": "Broncodilatador agonista beta2 de corta accion",
        "pharmacologicClass": "Agonista beta2-adrenergico SABA",
        "commercialNames": "Ventolin Evohaler, Reino Unido.",
        "presentation": "Inhalador presurizado dosificado.",
        "presentations": "100 microgramos/actuación; 200 actuaciones.",
        "mechanism": "Estimula beta2 en musculo liso bronquial, aumentando cAMP y produciendo broncodilatacion.",
        "pharmacodynamics": "Broncodilatacion rapida; dosis excesivas pueden causar taquicardia e hipopotasemia.",
        "pharmacokinetics": "10–20% de dosis inhalada alcanza vías inferiores; eliminación principalmente urinaria.",
        "indications": "Alivio/prevención del broncoespasmo; adultos y niños ≥4 años en el alcance elegido.",
        "dose": "Alivio adulto: 1–2 inhalaciones. Demanda: máximo 8/24 h; necesidad creciente exige reevaluación.",
        "pediatricDose": "4–11 años: 1 inhalación; hasta 2 si precisa. ≥12 años: dosis adulta. <4 años: revisión específica.",
        "renalDose": "Sin ajuste numerico especifico.",
        "hepaticDose": "Sin ajuste numerico especifico.",
        "commonAdverseEffects": "Temblor, nerviosismo, taquicardia, cefalea y palpitaciones.",
        "dangerousAdverseEffects": "Broncoespasmo paradojico, taquiarritmias, hipopotasemia y acidosis lactica con uso excesivo/intenso.",
        "adverseEffects": "Pueden ocurrir tos, irritacion de garganta y nausea.",
        "contraindications": "Hipersensibilidad a albuterol/salbutamol o componentes.",
        "interactions": "Beta-bloqueantes antagonizan; diureticos, xantinas y otros simpaticomimeticos pueden aumentar efectos/hipopotasemia; IMAO/TCA requieren precaucion.",
        "monitoring": "Respuesta, FC, temblor y potasio en uso intensivo; aumento de necesidad de rescate exige reevaluacion.",
        "administration": "Inhalación oral; coordinar actuación/inspiración. Espaciador cuando necesario.",
        "preparation": "Dispositivo listo; no diluir ni nebulizar.",
        "infusionProtocol": "No aplicable; no inyectar.",
        "pregnancy": "Usar segun beneficio-riesgo; asma no controlada tambien implica riesgo.",
        "lactation": "Datos limitados; uso inhalado tiende a menor exposicion sistemica.",
        "specialPopulations": "Enfermedad cardiaca, hipertiroidismo y riesgo de hipopotasemia requieren precaucion.",
        "patientEducation": "Si dosis habitual deja de aliviar, buscar evaluacion urgente; no aumentar frecuencia por cuenta propia.",
        "clinicalPearls": "En asma, SABA no debe ser tratamiento único; asociar terapia antiinflamatoria.",
        "guidelineRecommendations": "Esta preparación usa prospectos y texto de referencia preexistente; no se realizó validación independiente de guías.",
        "safetyFlags": "CANDIDATO NUEVO: revisión médica pendiente; cálculos y publicación bloqueados. AEROSOL_DOSIFICADO; SIN_CONVERSION_DE_NEBULIZACION; BETA2; HIPOPOTASEMIA.",
        "alerts": "No transferir volúmenes, dosis ni límites de peso de solución nebulizada al aerosol.",
        "references": [
          "DailyMed/NLM EUA - Albuterol Sulfate Inhalation Solution 0.083% 2.5 mg/3 mL, active 2026. https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=b72742df-1a6b-4483-aff3-3e79db5e015d",
          "https://www.medicines.org.uk/emc/product/850/smpc",
          "https://www.medicines.org.uk/emc/files/pil.850.pdf"
        ],
        "ref": "https://www.medicines.org.uk/emc/product/850/smpc"
      }
    }
  },
  "prednisolona_solucao_oral": {
    "id": "prednisolona_solucao_oral",
    "name": {
      "pt": "Prednisolona fosfato sódico — solução oral 15 mg/5 mL",
      "es": "Prednisolona fosfato sódico — solución oral 15 mg/5 mL"
    },
    "category": "gold33",
    "mcGoldClinicalV1": {
      "meta": {
        "schema": "mc-gold-clinical-v1",
        "requiredFieldCount": 33,
        "lote": "093_NOVO_CANDIDATO",
        "approvedSha256": "720dc1dc273c189f6552d451208b031b9cdbca8319a7dc175d4419ac39e13fbc",
        "zipSha256": "e29687c1f949e39a4eeb2ce764d444bf840900034fe78da29de2a8770755e98f",
        "referenceOnly": true,
        "calculationAuthorized": false,
        "publicationAuthorized": false,
        "historicalApprovalApplies": false,
        "clinicalPackagePublicationState": "BLOQUEADA",
        "releaseAuthorization": {
          "source": "USER_EXPLICIT_DEPLOY_AUTHORIZATION_2026_09_21",
          "referencePublicationAuthorized": true,
          "calculationAuthorized": false
        },
        "packageRecordMetadata": {
          "ID": "prednisolona_solucao_oral",
          "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
          "PROVENIENCIA": {
            "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
            "templatePath": "data/drugs/prednisolona.json",
            "templateSha256": "1fd9411f1fb243102af07912d9e9bf1e0684527b96d01b0a8cefd63948a73259",
            "sourcesConsulted": "2026-09-21",
            "primarySources": [
              "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=a0d74ae0-7b2d-4d36-9211-c76f5063b5a9",
              "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=7262fc84-3db2-4475-8ae4-6bec4477cb81"
            ],
            "newProductSpecificFields": [
              "name",
              "commercialNames",
              "presentation",
              "presentations",
              "mechanism",
              "pharmacodynamics",
              "pharmacokinetics",
              "dose",
              "pediatricDose",
              "renalDose",
              "hepaticDose",
              "contraindications",
              "interactions",
              "monitoring",
              "administration",
              "preparation",
              "infusionProtocol",
              "pregnancy",
              "lactation"
            ],
            "inheritedFieldsRequiringReview": [
              "class",
              "pharmacologicClass",
              "indications",
              "commonAdverseEffects",
              "dangerousAdverseEffects",
              "adverseEffects",
              "specialPopulations",
              "patientEducation",
              "clinicalPearls",
              "alerts"
            ],
            "templateClinicalMetadata": {
              "status": "PASS_CLINICAL_HOMOLOGATION",
              "sourceOwner": "database/imuno_corticoide.js",
              "sourceField": "prednisolona.mcGoldClinicalV1",
              "lote": "064",
              "requiredFields": 33,
              "approvedSha256": "21c1e99276216e72bd2a7201eddd567a0335bd6346374d413459182168e7cdea",
              "calculationAuthorized": false,
              "publicationAuthorized": true,
              "clinicalPackagePublicationState": "LIBERADA_COM_RESTRICOES_GRANULARES",
              "ownerPublicationAuthorization": "lote002-owner-confirmed"
            }
          },
          "STATES": {
            "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
            "HOMOLOGACAO_DADOS": "SIM",
            "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
            "INTEGRACAO_RUNTIME": "NAO",
            "INTEGRACAO_TECNICA": "NAO_INICIADA",
            "PUBLICACAO": "BLOQUEADA"
          },
          "calculationAuthorized": false,
          "publicationAuthorized": false,
          "HOMOLOGACAO": {
            "LISTA": "NOVA_LISTA_GOLD33_V1",
            "LOTE": "093_NOVO_CANDIDATO",
            "MEDICO_REVISOR": "Dra Eugenia Marques",
            "DATA_REVISAO": "20-09-2026",
            "RESULTADO": "Aprovado integralmente",
            "ARQUIVO_REVISADO": "01_NOVO_CANDIDATO_093.json",
            "EXCECOES_INFORMADAS": 0,
            "historicalApprovalApplies": false,
            "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
            "calculationAuthorized": false,
            "publicationAuthorized": false,
            "INTEGRACAO_RUNTIME": "NAO",
            "INTEGRACAO_TECNICA": "NAO_INICIADA",
            "PUBLICACAO": "BLOQUEADA",
            "nota": "O parecer se aplica exclusivamente ao novo candidato 093 submetido nesta conversa. Nenhuma homologacao historica do Lote 093 original se transfere para este conteudo.",
            "CLINICAL_CONTENT_FROZEN": true,
            "reviewedCandidateSha256": "d37488285baa1b0343e2232153a4554cdb1bc88ae828d2c0550331644ba0d84b",
            "approvalBinding": "USER_CONFIRMED_LOCAL_CANDIDATE",
            "approvalPackageSha256": "fa131a03c1c81ae4244b520a055113617ec7f1d617f7078722437521f403aebf"
          }
        },
        "packageRestrictions": {
          "historicalApprovalApplies": false,
          "items": [
            {
              "id": "diclofenaco_gotas",
              "originalRecordMetadata": {
                "ID": "diclofenaco_gotas",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/diclofenaco.json",
                  "templateSha256": "0c9f069bb319d807954cdffdffb0941600c7b4bf48c9b04c5a1474ae1f6a7f02",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://portal.novartis.com.br/medicamentos/wp-content/uploads/2021/10/Bula-CATAFLAM-Suspensao-Gotas-Medico.pdf",
                    "https://portal.novartis.com.br/medicamentos/wp-content/uploads/2021/10/Bula-CATAFLAM-Suspensao-Gotas-Paciente.pdf"
                  ],
                  "newProductSpecificFields": [
                    "name",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "indications",
                    "dose",
                    "pediatricDose",
                    "administration",
                    "preparation",
                    "infusionProtocol",
                    "lactation",
                    "clinicalPearls"
                  ],
                  "inheritedFieldsRequiringReview": [
                    "class",
                    "pharmacologicClass",
                    "pharmacodynamics",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "pregnancy",
                    "specialPopulations",
                    "patientEducation",
                    "alerts",
                    "mechanism",
                    "pharmacokinetics",
                    "renalDose",
                    "hepaticDose"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/analgesicos.js",
                    "sourceField": "diclofenaco.mcGoldClinicalV1",
                    "lote": "025",
                    "requiredFields": 33,
                    "approvedSha256": "f490066cbf88c2c1fc49fde254c0e52699a8a5320bd3cfb2ee1a9d3050dd9c7f",
                    "calculationAuthorized": false,
                    "publicationAuthorized": true,
                    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
                    "ownerPublicationAuthorization": "mission10-owner-confirmed"
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "diclofenaco_supositorio",
              "originalRecordMetadata": {
                "ID": "diclofenaco_supositorio",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/diclofenaco.json",
                  "templateSha256": "0c9f069bb319d807954cdffdffb0941600c7b4bf48c9b04c5a1474ae1f6a7f02",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://www.medicines.org.uk/emc/product/1044/smpc"
                  ],
                  "newProductSpecificFields": [
                    "name",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "indications",
                    "dose",
                    "pediatricDose",
                    "administration",
                    "preparation",
                    "infusionProtocol",
                    "contraindications",
                    "clinicalPearls"
                  ],
                  "inheritedFieldsRequiringReview": [
                    "class",
                    "pharmacologicClass",
                    "pharmacodynamics",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "interactions",
                    "monitoring",
                    "pregnancy",
                    "lactation",
                    "specialPopulations",
                    "patientEducation",
                    "alerts",
                    "mechanism",
                    "pharmacokinetics",
                    "renalDose",
                    "hepaticDose"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/analgesicos.js",
                    "sourceField": "diclofenaco.mcGoldClinicalV1",
                    "lote": "025",
                    "requiredFields": 33,
                    "approvedSha256": "f490066cbf88c2c1fc49fde254c0e52699a8a5320bd3cfb2ee1a9d3050dd9c7f",
                    "calculationAuthorized": false,
                    "publicationAuthorized": true,
                    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
                    "ownerPublicationAuthorization": "mission10-owner-confirmed"
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "cetoprofeno_gotas",
              "originalRecordMetadata": {
                "ID": "cetoprofeno_gotas",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/cetoprofeno.json",
                  "templateSha256": "92e70a001d201e6a9b143907d4f6eef1e4c778615b42500884f6c502b82ec6bb",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://eurofarma.com.br/produtos/bulas/view/healthcare/pt/bula-cetoprofeno-solucao-oral-gotas.html",
                    "https://eurofarma.com.br/produtos/bulas/view/patient/pt/bula-cetoprofeno-solucao-oral-gotas.html"
                  ],
                  "newProductSpecificFields": [
                    "name",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "dose",
                    "pediatricDose",
                    "renalDose",
                    "hepaticDose",
                    "administration",
                    "preparation",
                    "pregnancy",
                    "infusionProtocol"
                  ],
                  "inheritedFieldsRequiringReview": [
                    "class",
                    "pharmacologicClass",
                    "mechanism",
                    "pharmacodynamics",
                    "pharmacokinetics",
                    "indications",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "lactation",
                    "specialPopulations",
                    "patientEducation",
                    "clinicalPearls",
                    "alerts"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/analgesicos.js",
                    "sourceField": "cetoprofeno.mcGoldClinicalV1",
                    "lote": "017",
                    "requiredFields": 33,
                    "approvedSha256": "253c17c2327715b3e25ab80e7138de200e935b80e7d849c1c6088a69116420a3",
                    "calculationAuthorized": false,
                    "publicationAuthorized": true,
                    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
                    "ownerPublicationAuthorization": "mission10-owner-confirmed"
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "salbutamol_spray",
              "originalRecordMetadata": {
                "ID": "salbutamol_spray",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/salbutamol_nebulizacao.json",
                  "templateSha256": "11760e3f8bd9271bc9c7e4c851a2ad9799abd3ce7cc2faa78a73bd3753833e21",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://www.medicines.org.uk/emc/product/850/smpc",
                    "https://www.medicines.org.uk/emc/files/pil.850.pdf"
                  ],
                  "newProductSpecificFields": [
                    "name",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "indications",
                    "pharmacokinetics",
                    "dose",
                    "pediatricDose",
                    "administration",
                    "preparation",
                    "infusionProtocol",
                    "clinicalPearls",
                    "safetyFlags",
                    "alerts"
                  ],
                  "inheritedFieldsRequiringReview": [
                    "class",
                    "pharmacologicClass",
                    "mechanism",
                    "pharmacodynamics",
                    "renalDose",
                    "hepaticDose",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "pregnancy",
                    "lactation",
                    "specialPopulations",
                    "patientEducation"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/gold33_nova_lista.js",
                    "sourceField": "salbutamol_nebulizacao.mcGoldClinicalV1",
                    "requiredFields": 33,
                    "lote": "103",
                    "approvedSha256": "3dd8735151ec6ccf6dcd71dd5262642970c55bff5d753c59dcec104bb685a419",
                    "calculationAuthorized": false,
                    "publicationAuthorized": false,
                    "clinicalPackagePublicationState": "BLOQUEADA",
                    "list": "NOVA_LISTA_GOLD33_V1",
                    "zipSha256": "167045215deac33b67a58cf485f504a0a70ac17a45848dd73c59ec6ea4235aac",
                    "packageFile": "GOLD33_NOVA_LISTA_LOTE_103_HOMOLOGADO_CLINICAMENTE.zip",
                    "packageRestrictions": [
                      {
                        "id": "adrenalina_autoinjetavel",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "PRODUTO_ESPECIFICO_AUVIQ",
                          "PESO_MENOR_7_5_BLOQUEADO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "aminofilina_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "TDM_OBRIGATORIO",
                          "AUTOMACAO_MANUTENCAO_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "betametasona_injetavel",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "VIA_IV_BLOQUEADA",
                          "INDICACAO_ROTA_OBRIGATORIAS"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "brometo_de_ipratropio_nebulizacao",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "CALCULO_PEDIATRICO_BLOQUEADO",
                          "VIA_NAO_INALATORIA_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "dexametasona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "CALCULO_PEDIATRICO_BLOQUEADO",
                          "AUTOMACAO_EXIGE_INDICACAO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "fenoterol_gotas",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "DOSE_ATUAL_NAO_VERIFICADA",
                          "VIA_AUTOMATICA_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [
                          "BULA_PRIMARIA_ATUAL_PENDENTE"
                        ],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "hidrocortisona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "AUTOMACAO_EXIGE_INDICACAO",
                          "CALCULO_PEDIATRICO_BLOQUEADO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "metilprednisolona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "AUTOMACAO_EXIGE_INDICACAO",
                          "FORMULACAO_CONSERVANTE_DEVE_SER_CONFIRMADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "prometazina_im",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "VIA_IV_BLOQUEADA_NESTA_FICHA",
                          "IDADE_MENOR_2_CONTRAINDICADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "salbutamol_nebulizacao",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "IDADE_MENOR_2_BLOQUEADA_NESTE_ROTULO",
                          "PESO_MENOR_15_EXIGE_OUTRA_CONCENTRACAO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      }
                    ],
                    "packageRecordMetadata": {
                      "ID": "salbutamol_nebulizacao",
                      "NOTA_REVISAO_CLINICA": "HOMOLOGADO CLINICAMENTE em 20-09-2026 por Dra Eugenia Marques; resultado APROVADO INTEGRALMENTE; sem excecoes informadas. Conteudo clinico congelado; bloqueios, lacunas justificadas e reconciliacoes preservados.",
                      "PROVENIENCIA": "NEW_ENTRY_NO_LEGACY_BASELINE",
                      "ESCOPO_VALIDADO": "Salbutamol/albuterol 0,083% 2,5 mg/3 mL nebulizacao - EUA",
                      "BLOQUEIOS_CLINICOS": [
                        "IDADE_MENOR_2_BLOQUEADA_NESTE_ROTULO",
                        "PESO_MENOR_15_EXIGE_OUTRA_CONCENTRACAO"
                      ],
                      "PENDENCIAS_NAO_BLOQUEANTES": [],
                      "HOMOLOGACAO": {
                        "LISTA": "NOVA_LISTA_GOLD33_V1",
                        "LOTE": "103",
                        "MEDICO_REVISOR": "Dra Eugenia Marques",
                        "DATA_REVISAO": "20-09-2026",
                        "RESULTADO": "Aprovado integralmente",
                        "ARQUIVO_REVISADO": "103",
                        "EXCECOES_INFORMADAS": 0,
                        "REVISAO_CLINICA": "HOMOLOGADA",
                        "HOMOLOGACAO_DADOS": "SIM",
                        "INTEGRACAO_TECNICA": "NAO_INICIADA",
                        "PUBLICACAO": "BLOQUEADA",
                        "CLINICAL_CONTENT_FROZEN": true
                      }
                    },
                    "supersededPackages": [
                      "GOLD33_NOVA_LISTA_LOTE_088_HOMOLOGADO_CLINICAMENTE.zip"
                    ],
                    "referenceOnly": true
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "salbutamol_solucao_inalatoria",
              "originalRecordMetadata": {
                "ID": "salbutamol_solucao_inalatoria",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/salbutamol_nebulizacao.json",
                  "templateSha256": "11760e3f8bd9271bc9c7e4c851a2ad9799abd3ce7cc2faa78a73bd3753833e21",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=b72742df-1a6b-4483-aff3-3e79db5e015d"
                  ],
                  "newProductSpecificFields": [],
                  "inheritedFieldsRequiringReview": [
                    "name",
                    "class",
                    "pharmacologicClass",
                    "mechanism",
                    "pharmacodynamics",
                    "pharmacokinetics",
                    "indications",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "dose",
                    "pediatricDose",
                    "renalDose",
                    "hepaticDose",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "administration",
                    "preparation",
                    "infusionProtocol",
                    "pregnancy",
                    "lactation",
                    "specialPopulations",
                    "patientEducation",
                    "clinicalPearls",
                    "alerts"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/gold33_nova_lista.js",
                    "sourceField": "salbutamol_nebulizacao.mcGoldClinicalV1",
                    "requiredFields": 33,
                    "lote": "103",
                    "approvedSha256": "3dd8735151ec6ccf6dcd71dd5262642970c55bff5d753c59dcec104bb685a419",
                    "calculationAuthorized": false,
                    "publicationAuthorized": false,
                    "clinicalPackagePublicationState": "BLOQUEADA",
                    "list": "NOVA_LISTA_GOLD33_V1",
                    "zipSha256": "167045215deac33b67a58cf485f504a0a70ac17a45848dd73c59ec6ea4235aac",
                    "packageFile": "GOLD33_NOVA_LISTA_LOTE_103_HOMOLOGADO_CLINICAMENTE.zip",
                    "packageRestrictions": [
                      {
                        "id": "adrenalina_autoinjetavel",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "PRODUTO_ESPECIFICO_AUVIQ",
                          "PESO_MENOR_7_5_BLOQUEADO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "aminofilina_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "TDM_OBRIGATORIO",
                          "AUTOMACAO_MANUTENCAO_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "betametasona_injetavel",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "VIA_IV_BLOQUEADA",
                          "INDICACAO_ROTA_OBRIGATORIAS"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "brometo_de_ipratropio_nebulizacao",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "CALCULO_PEDIATRICO_BLOQUEADO",
                          "VIA_NAO_INALATORIA_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "dexametasona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "CALCULO_PEDIATRICO_BLOQUEADO",
                          "AUTOMACAO_EXIGE_INDICACAO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "fenoterol_gotas",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "DOSE_ATUAL_NAO_VERIFICADA",
                          "VIA_AUTOMATICA_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [
                          "BULA_PRIMARIA_ATUAL_PENDENTE"
                        ],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "hidrocortisona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "AUTOMACAO_EXIGE_INDICACAO",
                          "CALCULO_PEDIATRICO_BLOQUEADO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "metilprednisolona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "AUTOMACAO_EXIGE_INDICACAO",
                          "FORMULACAO_CONSERVANTE_DEVE_SER_CONFIRMADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "prometazina_im",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "VIA_IV_BLOQUEADA_NESTA_FICHA",
                          "IDADE_MENOR_2_CONTRAINDICADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "salbutamol_nebulizacao",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "IDADE_MENOR_2_BLOQUEADA_NESTE_ROTULO",
                          "PESO_MENOR_15_EXIGE_OUTRA_CONCENTRACAO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      }
                    ],
                    "packageRecordMetadata": {
                      "ID": "salbutamol_nebulizacao",
                      "NOTA_REVISAO_CLINICA": "HOMOLOGADO CLINICAMENTE em 20-09-2026 por Dra Eugenia Marques; resultado APROVADO INTEGRALMENTE; sem excecoes informadas. Conteudo clinico congelado; bloqueios, lacunas justificadas e reconciliacoes preservados.",
                      "PROVENIENCIA": "NEW_ENTRY_NO_LEGACY_BASELINE",
                      "ESCOPO_VALIDADO": "Salbutamol/albuterol 0,083% 2,5 mg/3 mL nebulizacao - EUA",
                      "BLOQUEIOS_CLINICOS": [
                        "IDADE_MENOR_2_BLOQUEADA_NESTE_ROTULO",
                        "PESO_MENOR_15_EXIGE_OUTRA_CONCENTRACAO"
                      ],
                      "PENDENCIAS_NAO_BLOQUEANTES": [],
                      "HOMOLOGACAO": {
                        "LISTA": "NOVA_LISTA_GOLD33_V1",
                        "LOTE": "103",
                        "MEDICO_REVISOR": "Dra Eugenia Marques",
                        "DATA_REVISAO": "20-09-2026",
                        "RESULTADO": "Aprovado integralmente",
                        "ARQUIVO_REVISADO": "103",
                        "EXCECOES_INFORMADAS": 0,
                        "REVISAO_CLINICA": "HOMOLOGADA",
                        "HOMOLOGACAO_DADOS": "SIM",
                        "INTEGRACAO_TECNICA": "NAO_INICIADA",
                        "PUBLICACAO": "BLOQUEADA",
                        "CLINICAL_CONTENT_FROZEN": true
                      }
                    },
                    "supersededPackages": [
                      "GOLD33_NOVA_LISTA_LOTE_088_HOMOLOGADO_CLINICAMENTE.zip"
                    ],
                    "referenceOnly": true
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false,
                "RECONCILIACAO_CANONICA": {
                  "candidateAliasOf": "salbutamol_nebulizacao",
                  "status": "PENDENTE_REVISAO_DE_ESCOPO",
                  "action": "Não adicionar um segundo registro ativo para o mesmo produto."
                }
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "fenoterol_solucao_inalatoria",
              "originalRecordMetadata": {
                "ID": "fenoterol_solucao_inalatoria",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/fenoterol_gotas.json",
                  "templateSha256": "75acfdff650220647f3251f2d6f9139d43b22db06064b3677009172ad0216990",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://www.gov.br/anvisa/pt-br/assuntos/medicamentos/cmed/precos/anos-anteriores/arquivos/5333json-file-1/%40%40download/file"
                  ],
                  "newProductSpecificFields": [],
                  "inheritedFieldsRequiringReview": [
                    "name",
                    "class",
                    "pharmacologicClass",
                    "mechanism",
                    "pharmacodynamics",
                    "pharmacokinetics",
                    "indications",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "dose",
                    "pediatricDose",
                    "renalDose",
                    "hepaticDose",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "administration",
                    "preparation",
                    "infusionProtocol",
                    "pregnancy",
                    "lactation",
                    "specialPopulations",
                    "patientEducation",
                    "clinicalPearls",
                    "alerts"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/gold33_nova_lista.js",
                    "sourceField": "fenoterol_gotas.mcGoldClinicalV1",
                    "requiredFields": 33,
                    "lote": "103",
                    "approvedSha256": "3dd8735151ec6ccf6dcd71dd5262642970c55bff5d753c59dcec104bb685a419",
                    "calculationAuthorized": false,
                    "publicationAuthorized": false,
                    "clinicalPackagePublicationState": "BLOQUEADA",
                    "list": "NOVA_LISTA_GOLD33_V1",
                    "zipSha256": "167045215deac33b67a58cf485f504a0a70ac17a45848dd73c59ec6ea4235aac",
                    "packageFile": "GOLD33_NOVA_LISTA_LOTE_103_HOMOLOGADO_CLINICAMENTE.zip",
                    "packageRestrictions": [
                      {
                        "id": "adrenalina_autoinjetavel",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "PRODUTO_ESPECIFICO_AUVIQ",
                          "PESO_MENOR_7_5_BLOQUEADO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "aminofilina_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "TDM_OBRIGATORIO",
                          "AUTOMACAO_MANUTENCAO_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "betametasona_injetavel",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "VIA_IV_BLOQUEADA",
                          "INDICACAO_ROTA_OBRIGATORIAS"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "brometo_de_ipratropio_nebulizacao",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "CALCULO_PEDIATRICO_BLOQUEADO",
                          "VIA_NAO_INALATORIA_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "dexametasona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "CALCULO_PEDIATRICO_BLOQUEADO",
                          "AUTOMACAO_EXIGE_INDICACAO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "fenoterol_gotas",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "DOSE_ATUAL_NAO_VERIFICADA",
                          "VIA_AUTOMATICA_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [
                          "BULA_PRIMARIA_ATUAL_PENDENTE"
                        ],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "hidrocortisona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "AUTOMACAO_EXIGE_INDICACAO",
                          "CALCULO_PEDIATRICO_BLOQUEADO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "metilprednisolona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "AUTOMACAO_EXIGE_INDICACAO",
                          "FORMULACAO_CONSERVANTE_DEVE_SER_CONFIRMADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "prometazina_im",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "VIA_IV_BLOQUEADA_NESTA_FICHA",
                          "IDADE_MENOR_2_CONTRAINDICADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "salbutamol_nebulizacao",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "IDADE_MENOR_2_BLOQUEADA_NESTE_ROTULO",
                          "PESO_MENOR_15_EXIGE_OUTRA_CONCENTRACAO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      }
                    ],
                    "packageRecordMetadata": {
                      "ID": "fenoterol_gotas",
                      "NOTA_REVISAO_CLINICA": "HOMOLOGADO CLINICAMENTE em 20-09-2026 por Dra Eugenia Marques; resultado APROVADO INTEGRALMENTE; sem excecoes informadas. Conteudo clinico congelado; bloqueios, lacunas justificadas e reconciliacoes preservados.",
                      "PROVENIENCIA": "NEW_ENTRY_NO_LEGACY_BASELINE",
                      "ESCOPO_VALIDADO": "Fenoterol 5 mg/mL gotas - Brasil; dose atual bloqueada",
                      "BLOQUEIOS_CLINICOS": [
                        "DOSE_ATUAL_NAO_VERIFICADA",
                        "VIA_AUTOMATICA_BLOQUEADA"
                      ],
                      "PENDENCIAS_NAO_BLOQUEANTES": [
                        "BULA_PRIMARIA_ATUAL_PENDENTE"
                      ],
                      "HOMOLOGACAO": {
                        "LISTA": "NOVA_LISTA_GOLD33_V1",
                        "LOTE": "103",
                        "MEDICO_REVISOR": "Dra Eugenia Marques",
                        "DATA_REVISAO": "20-09-2026",
                        "RESULTADO": "Aprovado integralmente",
                        "ARQUIVO_REVISADO": "103",
                        "EXCECOES_INFORMADAS": 0,
                        "REVISAO_CLINICA": "HOMOLOGADA",
                        "HOMOLOGACAO_DADOS": "SIM",
                        "INTEGRACAO_TECNICA": "NAO_INICIADA",
                        "PUBLICACAO": "BLOQUEADA",
                        "CLINICAL_CONTENT_FROZEN": true
                      }
                    },
                    "supersededPackages": [
                      "GOLD33_NOVA_LISTA_LOTE_088_HOMOLOGADO_CLINICAMENTE.zip"
                    ],
                    "referenceOnly": true
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false,
                "RECONCILIACAO_CANONICA": {
                  "candidateAliasOf": "fenoterol_gotas",
                  "status": "PENDENTE_REVISAO_DE_ESCOPO",
                  "action": "Não adicionar um segundo registro ativo para o mesmo produto."
                }
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "ipratropio_solucao_inalatoria",
              "originalRecordMetadata": {
                "ID": "ipratropio_solucao_inalatoria",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/brometo_de_ipratropio_nebulizacao.json",
                  "templateSha256": "8d7e3cddc70cbd671654f0a934055d306657bf6412a6f8452a008684da41bafa",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3249aea8-a395-f09f-e063-6294a90a2d8b"
                  ],
                  "newProductSpecificFields": [],
                  "inheritedFieldsRequiringReview": [
                    "name",
                    "class",
                    "pharmacologicClass",
                    "mechanism",
                    "pharmacodynamics",
                    "pharmacokinetics",
                    "indications",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "dose",
                    "pediatricDose",
                    "renalDose",
                    "hepaticDose",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "administration",
                    "preparation",
                    "infusionProtocol",
                    "pregnancy",
                    "lactation",
                    "specialPopulations",
                    "patientEducation",
                    "clinicalPearls",
                    "alerts"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/gold33_nova_lista.js",
                    "sourceField": "brometo_de_ipratropio_nebulizacao.mcGoldClinicalV1",
                    "requiredFields": 33,
                    "lote": "103",
                    "approvedSha256": "3dd8735151ec6ccf6dcd71dd5262642970c55bff5d753c59dcec104bb685a419",
                    "calculationAuthorized": false,
                    "publicationAuthorized": false,
                    "clinicalPackagePublicationState": "BLOQUEADA",
                    "list": "NOVA_LISTA_GOLD33_V1",
                    "zipSha256": "167045215deac33b67a58cf485f504a0a70ac17a45848dd73c59ec6ea4235aac",
                    "packageFile": "GOLD33_NOVA_LISTA_LOTE_103_HOMOLOGADO_CLINICAMENTE.zip",
                    "packageRestrictions": [
                      {
                        "id": "adrenalina_autoinjetavel",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "PRODUTO_ESPECIFICO_AUVIQ",
                          "PESO_MENOR_7_5_BLOQUEADO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "aminofilina_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "TDM_OBRIGATORIO",
                          "AUTOMACAO_MANUTENCAO_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "betametasona_injetavel",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "VIA_IV_BLOQUEADA",
                          "INDICACAO_ROTA_OBRIGATORIAS"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "brometo_de_ipratropio_nebulizacao",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "CALCULO_PEDIATRICO_BLOQUEADO",
                          "VIA_NAO_INALATORIA_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "dexametasona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "CALCULO_PEDIATRICO_BLOQUEADO",
                          "AUTOMACAO_EXIGE_INDICACAO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "fenoterol_gotas",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "DOSE_ATUAL_NAO_VERIFICADA",
                          "VIA_AUTOMATICA_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [
                          "BULA_PRIMARIA_ATUAL_PENDENTE"
                        ],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "hidrocortisona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "AUTOMACAO_EXIGE_INDICACAO",
                          "CALCULO_PEDIATRICO_BLOQUEADO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "metilprednisolona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "AUTOMACAO_EXIGE_INDICACAO",
                          "FORMULACAO_CONSERVANTE_DEVE_SER_CONFIRMADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "prometazina_im",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "VIA_IV_BLOQUEADA_NESTA_FICHA",
                          "IDADE_MENOR_2_CONTRAINDICADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "salbutamol_nebulizacao",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "IDADE_MENOR_2_BLOQUEADA_NESTE_ROTULO",
                          "PESO_MENOR_15_EXIGE_OUTRA_CONCENTRACAO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      }
                    ],
                    "packageRecordMetadata": {
                      "ID": "brometo_de_ipratropio_nebulizacao",
                      "NOTA_REVISAO_CLINICA": "HOMOLOGADO CLINICAMENTE em 20-09-2026 por Dra Eugenia Marques; resultado APROVADO INTEGRALMENTE; sem excecoes informadas. Conteudo clinico congelado; bloqueios, lacunas justificadas e reconciliacoes preservados.",
                      "PROVENIENCIA": "NEW_ENTRY_NO_LEGACY_BASELINE",
                      "ESCOPO_VALIDADO": "Ipratropium 0,02% 500 mcg/2,5 mL - EUA",
                      "BLOQUEIOS_CLINICOS": [
                        "CALCULO_PEDIATRICO_BLOQUEADO",
                        "VIA_NAO_INALATORIA_BLOQUEADA"
                      ],
                      "PENDENCIAS_NAO_BLOQUEANTES": [],
                      "HOMOLOGACAO": {
                        "LISTA": "NOVA_LISTA_GOLD33_V1",
                        "LOTE": "103",
                        "MEDICO_REVISOR": "Dra Eugenia Marques",
                        "DATA_REVISAO": "20-09-2026",
                        "RESULTADO": "Aprovado integralmente",
                        "ARQUIVO_REVISADO": "103",
                        "EXCECOES_INFORMADAS": 0,
                        "REVISAO_CLINICA": "HOMOLOGADA",
                        "HOMOLOGACAO_DADOS": "SIM",
                        "INTEGRACAO_TECNICA": "NAO_INICIADA",
                        "PUBLICACAO": "BLOQUEADA",
                        "CLINICAL_CONTENT_FROZEN": true
                      }
                    },
                    "supersededPackages": [
                      "GOLD33_NOVA_LISTA_LOTE_087_HOMOLOGADO_CLINICAMENTE.zip"
                    ],
                    "referenceOnly": true
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false,
                "RECONCILIACAO_CANONICA": {
                  "candidateAliasOf": "brometo_de_ipratropio_nebulizacao",
                  "status": "PENDENTE_REVISAO_DE_ESCOPO",
                  "action": "Não adicionar um segundo registro ativo para o mesmo produto."
                }
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "prednisolona_solucao_oral",
              "originalRecordMetadata": {
                "ID": "prednisolona_solucao_oral",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/prednisolona.json",
                  "templateSha256": "1fd9411f1fb243102af07912d9e9bf1e0684527b96d01b0a8cefd63948a73259",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=a0d74ae0-7b2d-4d36-9211-c76f5063b5a9",
                    "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=7262fc84-3db2-4475-8ae4-6bec4477cb81"
                  ],
                  "newProductSpecificFields": [
                    "name",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "mechanism",
                    "pharmacodynamics",
                    "pharmacokinetics",
                    "dose",
                    "pediatricDose",
                    "renalDose",
                    "hepaticDose",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "administration",
                    "preparation",
                    "infusionProtocol",
                    "pregnancy",
                    "lactation"
                  ],
                  "inheritedFieldsRequiringReview": [
                    "class",
                    "pharmacologicClass",
                    "indications",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "specialPopulations",
                    "patientEducation",
                    "clinicalPearls",
                    "alerts"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/imuno_corticoide.js",
                    "sourceField": "prednisolona.mcGoldClinicalV1",
                    "lote": "064",
                    "requiredFields": 33,
                    "approvedSha256": "21c1e99276216e72bd2a7201eddd567a0335bd6346374d413459182168e7cdea",
                    "calculationAuthorized": false,
                    "publicationAuthorized": true,
                    "clinicalPackagePublicationState": "LIBERADA_COM_RESTRICOES_GRANULARES",
                    "ownerPublicationAuthorization": "lote002-owner-confirmed"
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "dexametasona_elixir",
              "originalRecordMetadata": {
                "ID": "dexametasona_elixir",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/dexametasona.json",
                  "templateSha256": "176ed420ac1c027d82deb4113fc025c47b8de2fb7886d3e24344c0a4172dcce1",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=7b51ffce-ec64-4b49-8870-b9666537c541"
                  ],
                  "newProductSpecificFields": [
                    "name",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "dose",
                    "pediatricDose",
                    "administration",
                    "preparation",
                    "infusionProtocol",
                    "clinicalPearls"
                  ],
                  "inheritedFieldsRequiringReview": [
                    "class",
                    "pharmacologicClass",
                    "mechanism",
                    "pharmacodynamics",
                    "pharmacokinetics",
                    "indications",
                    "renalDose",
                    "hepaticDose",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "pregnancy",
                    "lactation",
                    "specialPopulations",
                    "patientEducation",
                    "alerts"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/imuno_corticoide.js",
                    "sourceField": "dexametasona.mcGoldClinicalV1",
                    "lote": "024",
                    "requiredFields": 33,
                    "approvedSha256": "9721657a393121ed360ce59ff910deb7cbb3b0fc3421608349c6fa584237305a",
                    "calculationAuthorized": false,
                    "publicationAuthorized": true,
                    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
                    "ownerPublicationAuthorization": "mission10-owner-confirmed"
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "budesonida_suspensao_inalatoria",
              "originalRecordMetadata": {
                "ID": "budesonida_suspensao_inalatoria",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/budesonida.json",
                  "templateSha256": "83faa465b16000c39d3c4e9904fab859797107253db21034238feb9f2ea9facd",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=1d139a25-9c17-4b3e-8ffd-b2d562cc00ee"
                  ],
                  "newProductSpecificFields": [
                    "name",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "indications",
                    "dose",
                    "pediatricDose",
                    "hepaticDose",
                    "administration",
                    "preparation",
                    "infusionProtocol"
                  ],
                  "inheritedFieldsRequiringReview": [
                    "class",
                    "pharmacologicClass",
                    "mechanism",
                    "pharmacodynamics",
                    "pharmacokinetics",
                    "renalDose",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "pregnancy",
                    "lactation",
                    "specialPopulations",
                    "patientEducation",
                    "clinicalPearls",
                    "alerts"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/pneumologia.js",
                    "sourceField": "budesonida.mcGoldClinicalV1",
                    "lote": "012",
                    "requiredFields": 33,
                    "approvedSha256": "33a04a022820507c1688fbebb735cd7d879bc3d0ef30a24f4ed7483f5cac16eb",
                    "calculationAuthorized": false,
                    "publicationAuthorized": true,
                    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
                    "ownerPublicationAuthorization": "mission10-owner-confirmed"
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            }
          ]
        }
      },
      "pt": {
        "name": "Prednisolona fosfato sódico — solução oral 15 mg/5 mL",
        "class": "Glicocorticoide sistêmico",
        "pharmacologicClass": "Glicocorticoide sistêmico",
        "commercialNames": "Produto genérico PAI, EUA.",
        "presentation": "Solução oral.",
        "presentations": "15 mg de base/5 mL; não confundir com massa do sal.",
        "mechanism": "Atividade glicocorticoide: modula inflamação e imunidade.",
        "pharmacodynamics": "Anti-inflamatória; hiperglicemia e supressão adrenal dependem da exposição.",
        "pharmacokinetics": "Absorção oral rápida; ligação proteica 70–90%; meia-vida 2–4 h; metabolismo hepático.",
        "indications": "Condições inflamatórias, alérgicas, autoimunes e outras indicações conforme via e protocolo.",
        "dose": "Inicial 5–60 mg/dia, individualizada pela doença/resposta; não é esquema universal.",
        "pediatricDose": "Faixa inicial geral: 0,14–2 mg/kg/dia em 3–4 doses; escolher protocolo por indicação, não automatizar a faixa.",
        "renalDose": "Sem tabela numérica; cautela com retenção hidrossalina.",
        "hepaticDose": "Individualizar; efeitos podem aumentar na cirrose.",
        "commonAdverseEffects": "Aumento do apetite, dispepsia, insônia, alteração de humor e hiperglicemia.",
        "dangerousAdverseEffects": "Infecção grave, supressão adrenal, psicose, sangramento gastrointestinal, osteonecrose e toxicidade ocular.",
        "adverseEffects": "Aumento do apetite, dispepsia, insônia, alteração de humor e hiperglicemia.; Infecção grave, supressão adrenal, psicose, sangramento gastrointestinal, osteonecrose e toxicidade ocular.",
        "contraindications": "Micose sistêmica; hipersensibilidade.",
        "interactions": "Indutores/inibidores enzimáticos, anticoagulantes, AINEs, diuréticos e vacinas.",
        "monitoring": "Crescimento, pressão, glicose, infecção, olhos e supressão adrenal.",
        "administration": "Via oral; após tratamento prolongado, retirada gradual.",
        "preparation": "Solução pronta; confirmar 3 mg de base/mL.",
        "infusionProtocol": "Não aplicável.",
        "pregnancy": "Avaliar benefício/risco fetal.",
        "lactation": "Excreção no leite; avaliar risco infantil.",
        "specialPopulations": "Individualizar por idade, comorbidades e função orgânica.",
        "patientEducation": "Orientar adesão, administração correta e sinais de alarme.",
        "clinicalPearls": "Formulações e vias não são automaticamente intercambiáveis.",
        "guidelineRecommendations": "Esta preparação usa bulas e texto de referência preexistente; não foi feita validação independente de diretrizes.",
        "safetyFlags": "CANDIDATO NOVO: revisão médica pendente; cálculos e publicação bloqueados. Infecção grave, supressão adrenal, psicose, sangramento gastrointestinal, osteonecrose e toxicidade ocular.",
        "alerts": "Infecção grave, supressão adrenal, psicose, sangramento gastrointestinal, osteonecrose e toxicidade ocular.; revisão clínica obrigatória.",
        "references": [
          "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=prednisolona",
          "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files",
          "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=a0d74ae0-7b2d-4d36-9211-c76f5063b5a9",
          "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=7262fc84-3db2-4475-8ae4-6bec4477cb81"
        ],
        "ref": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=a0d74ae0-7b2d-4d36-9211-c76f5063b5a9"
      },
      "es": {
        "name": "Prednisolona fosfato sódico — solución oral 15 mg/5 mL",
        "class": "Glicocorticoide sistêmico",
        "pharmacologicClass": "Glicocorticoide sistêmico",
        "commercialNames": "Producto genérico PAI, EE.UU.",
        "presentation": "Solución oral.",
        "presentations": "15 mg de base/5 mL; no confundir con masa de sal.",
        "mechanism": "Actividad glucocorticoide: modula inflamación e inmunidad.",
        "pharmacodynamics": "Antiinflamatoria; hiperglucemia y supresión adrenal dependen de exposición.",
        "pharmacokinetics": "Absorción oral rápida; unión proteica 70–90%; semivida 2–4 h; metabolismo hepático.",
        "indications": "Condições inflamatórias, alérgicas, autoimunes y outras indicações conforme via y protocolo.",
        "dose": "Inicial 5–60 mg/día, individualizada por enfermedad/respuesta; no es esquema universal.",
        "pediatricDose": "Rango inicial general: 0,14–2 mg/kg/día en 3–4 dosis; elegir protocolo por indicación, no automatizar el rango.",
        "renalDose": "Sin tabla numérica; precaución por retención hidrosalina.",
        "hepaticDose": "Individualizar; efectos pueden aumentar en cirrosis.",
        "commonAdverseEffects": "Aumento do apetite, dispepsia, insônia, alteração de humor y hiperglicemia.",
        "dangerousAdverseEffects": "Infecção grave, supressão adrenal, psicose, sangramento gastrointestinal, osteonecrose y toxicidade ocular.",
        "adverseEffects": "Aumento do apetite, dispepsia, insônia, alteração de humor y hiperglicemia.; Infecção grave, supressão adrenal, psicose, sangramento gastrointestinal, osteonecrose y toxicidade ocular.",
        "contraindications": "Micosis sistémica; hipersensibilidad.",
        "interactions": "Inductores/inhibidores enzimáticos, anticoagulantes, AINEs, diuréticos y vacunas.",
        "monitoring": "Crecimiento, presión, glucosa, infección, ojos y supresión adrenal.",
        "administration": "Vía oral; tras tratamiento prolongado, retirada gradual.",
        "preparation": "Solución lista; confirmar 3 mg de base/mL.",
        "infusionProtocol": "No aplicable.",
        "pregnancy": "Evaluar beneficio/riesgo fetal.",
        "lactation": "Excreción en leche; evaluar riesgo infantil.",
        "specialPopulations": "Individualizar por idade, comorbidades y función orgânica.",
        "patientEducation": "Orientar adesão, administração correta y sinais de alarme.",
        "clinicalPearls": "Formulações y vias no são automaticamente intercambiáveis.",
        "guidelineRecommendations": "Esta preparación usa prospectos y texto de referencia preexistente; no se realizó validación independiente de guías.",
        "safetyFlags": "CANDIDATO NUEVO: revisión médica pendiente; cálculos y publicación bloqueados. Infecção grave, supressão adrenal, psicose, sangramento gastrointestinal, osteonecrose y toxicidade ocular.",
        "alerts": "Infecção grave, supressão adrenal, psicose, sangramento gastrointestinal, osteonecrose y toxicidade ocular.; revisão clínica obrigatória.",
        "references": [
          "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=prednisolona",
          "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files",
          "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=a0d74ae0-7b2d-4d36-9211-c76f5063b5a9",
          "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=7262fc84-3db2-4475-8ae4-6bec4477cb81"
        ],
        "ref": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=a0d74ae0-7b2d-4d36-9211-c76f5063b5a9"
      }
    }
  },
  "dexametasona_elixir": {
    "id": "dexametasona_elixir",
    "name": {
      "pt": "Dexametasona — elixir 0,5 mg/5 mL",
      "es": "Dexametasona — elixir 0,5 mg/5 mL"
    },
    "category": "gold33",
    "mcGoldClinicalV1": {
      "meta": {
        "schema": "mc-gold-clinical-v1",
        "requiredFieldCount": 33,
        "lote": "093_NOVO_CANDIDATO",
        "approvedSha256": "720dc1dc273c189f6552d451208b031b9cdbca8319a7dc175d4419ac39e13fbc",
        "zipSha256": "e29687c1f949e39a4eeb2ce764d444bf840900034fe78da29de2a8770755e98f",
        "referenceOnly": true,
        "calculationAuthorized": false,
        "publicationAuthorized": false,
        "historicalApprovalApplies": false,
        "clinicalPackagePublicationState": "BLOQUEADA",
        "releaseAuthorization": {
          "source": "USER_EXPLICIT_DEPLOY_AUTHORIZATION_2026_09_21",
          "referencePublicationAuthorized": true,
          "calculationAuthorized": false
        },
        "packageRecordMetadata": {
          "ID": "dexametasona_elixir",
          "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
          "PROVENIENCIA": {
            "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
            "templatePath": "data/drugs/dexametasona.json",
            "templateSha256": "176ed420ac1c027d82deb4113fc025c47b8de2fb7886d3e24344c0a4172dcce1",
            "sourcesConsulted": "2026-09-21",
            "primarySources": [
              "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=7b51ffce-ec64-4b49-8870-b9666537c541"
            ],
            "newProductSpecificFields": [
              "name",
              "commercialNames",
              "presentation",
              "presentations",
              "dose",
              "pediatricDose",
              "administration",
              "preparation",
              "infusionProtocol",
              "clinicalPearls"
            ],
            "inheritedFieldsRequiringReview": [
              "class",
              "pharmacologicClass",
              "mechanism",
              "pharmacodynamics",
              "pharmacokinetics",
              "indications",
              "renalDose",
              "hepaticDose",
              "commonAdverseEffects",
              "dangerousAdverseEffects",
              "adverseEffects",
              "contraindications",
              "interactions",
              "monitoring",
              "pregnancy",
              "lactation",
              "specialPopulations",
              "patientEducation",
              "alerts"
            ],
            "templateClinicalMetadata": {
              "status": "PASS_CLINICAL_HOMOLOGATION",
              "sourceOwner": "database/imuno_corticoide.js",
              "sourceField": "dexametasona.mcGoldClinicalV1",
              "lote": "024",
              "requiredFields": 33,
              "approvedSha256": "9721657a393121ed360ce59ff910deb7cbb3b0fc3421608349c6fa584237305a",
              "calculationAuthorized": false,
              "publicationAuthorized": true,
              "clinicalPackagePublicationState": "NAO_AUTORIZADA",
              "ownerPublicationAuthorization": "mission10-owner-confirmed"
            }
          },
          "STATES": {
            "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
            "HOMOLOGACAO_DADOS": "SIM",
            "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
            "INTEGRACAO_RUNTIME": "NAO",
            "INTEGRACAO_TECNICA": "NAO_INICIADA",
            "PUBLICACAO": "BLOQUEADA"
          },
          "calculationAuthorized": false,
          "publicationAuthorized": false,
          "HOMOLOGACAO": {
            "LISTA": "NOVA_LISTA_GOLD33_V1",
            "LOTE": "093_NOVO_CANDIDATO",
            "MEDICO_REVISOR": "Dra Eugenia Marques",
            "DATA_REVISAO": "20-09-2026",
            "RESULTADO": "Aprovado integralmente",
            "ARQUIVO_REVISADO": "01_NOVO_CANDIDATO_093.json",
            "EXCECOES_INFORMADAS": 0,
            "historicalApprovalApplies": false,
            "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
            "calculationAuthorized": false,
            "publicationAuthorized": false,
            "INTEGRACAO_RUNTIME": "NAO",
            "INTEGRACAO_TECNICA": "NAO_INICIADA",
            "PUBLICACAO": "BLOQUEADA",
            "nota": "O parecer se aplica exclusivamente ao novo candidato 093 submetido nesta conversa. Nenhuma homologacao historica do Lote 093 original se transfere para este conteudo.",
            "CLINICAL_CONTENT_FROZEN": true,
            "reviewedCandidateSha256": "d37488285baa1b0343e2232153a4554cdb1bc88ae828d2c0550331644ba0d84b",
            "approvalBinding": "USER_CONFIRMED_LOCAL_CANDIDATE",
            "approvalPackageSha256": "fa131a03c1c81ae4244b520a055113617ec7f1d617f7078722437521f403aebf"
          }
        },
        "packageRestrictions": {
          "historicalApprovalApplies": false,
          "items": [
            {
              "id": "diclofenaco_gotas",
              "originalRecordMetadata": {
                "ID": "diclofenaco_gotas",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/diclofenaco.json",
                  "templateSha256": "0c9f069bb319d807954cdffdffb0941600c7b4bf48c9b04c5a1474ae1f6a7f02",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://portal.novartis.com.br/medicamentos/wp-content/uploads/2021/10/Bula-CATAFLAM-Suspensao-Gotas-Medico.pdf",
                    "https://portal.novartis.com.br/medicamentos/wp-content/uploads/2021/10/Bula-CATAFLAM-Suspensao-Gotas-Paciente.pdf"
                  ],
                  "newProductSpecificFields": [
                    "name",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "indications",
                    "dose",
                    "pediatricDose",
                    "administration",
                    "preparation",
                    "infusionProtocol",
                    "lactation",
                    "clinicalPearls"
                  ],
                  "inheritedFieldsRequiringReview": [
                    "class",
                    "pharmacologicClass",
                    "pharmacodynamics",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "pregnancy",
                    "specialPopulations",
                    "patientEducation",
                    "alerts",
                    "mechanism",
                    "pharmacokinetics",
                    "renalDose",
                    "hepaticDose"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/analgesicos.js",
                    "sourceField": "diclofenaco.mcGoldClinicalV1",
                    "lote": "025",
                    "requiredFields": 33,
                    "approvedSha256": "f490066cbf88c2c1fc49fde254c0e52699a8a5320bd3cfb2ee1a9d3050dd9c7f",
                    "calculationAuthorized": false,
                    "publicationAuthorized": true,
                    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
                    "ownerPublicationAuthorization": "mission10-owner-confirmed"
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "diclofenaco_supositorio",
              "originalRecordMetadata": {
                "ID": "diclofenaco_supositorio",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/diclofenaco.json",
                  "templateSha256": "0c9f069bb319d807954cdffdffb0941600c7b4bf48c9b04c5a1474ae1f6a7f02",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://www.medicines.org.uk/emc/product/1044/smpc"
                  ],
                  "newProductSpecificFields": [
                    "name",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "indications",
                    "dose",
                    "pediatricDose",
                    "administration",
                    "preparation",
                    "infusionProtocol",
                    "contraindications",
                    "clinicalPearls"
                  ],
                  "inheritedFieldsRequiringReview": [
                    "class",
                    "pharmacologicClass",
                    "pharmacodynamics",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "interactions",
                    "monitoring",
                    "pregnancy",
                    "lactation",
                    "specialPopulations",
                    "patientEducation",
                    "alerts",
                    "mechanism",
                    "pharmacokinetics",
                    "renalDose",
                    "hepaticDose"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/analgesicos.js",
                    "sourceField": "diclofenaco.mcGoldClinicalV1",
                    "lote": "025",
                    "requiredFields": 33,
                    "approvedSha256": "f490066cbf88c2c1fc49fde254c0e52699a8a5320bd3cfb2ee1a9d3050dd9c7f",
                    "calculationAuthorized": false,
                    "publicationAuthorized": true,
                    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
                    "ownerPublicationAuthorization": "mission10-owner-confirmed"
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "cetoprofeno_gotas",
              "originalRecordMetadata": {
                "ID": "cetoprofeno_gotas",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/cetoprofeno.json",
                  "templateSha256": "92e70a001d201e6a9b143907d4f6eef1e4c778615b42500884f6c502b82ec6bb",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://eurofarma.com.br/produtos/bulas/view/healthcare/pt/bula-cetoprofeno-solucao-oral-gotas.html",
                    "https://eurofarma.com.br/produtos/bulas/view/patient/pt/bula-cetoprofeno-solucao-oral-gotas.html"
                  ],
                  "newProductSpecificFields": [
                    "name",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "dose",
                    "pediatricDose",
                    "renalDose",
                    "hepaticDose",
                    "administration",
                    "preparation",
                    "pregnancy",
                    "infusionProtocol"
                  ],
                  "inheritedFieldsRequiringReview": [
                    "class",
                    "pharmacologicClass",
                    "mechanism",
                    "pharmacodynamics",
                    "pharmacokinetics",
                    "indications",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "lactation",
                    "specialPopulations",
                    "patientEducation",
                    "clinicalPearls",
                    "alerts"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/analgesicos.js",
                    "sourceField": "cetoprofeno.mcGoldClinicalV1",
                    "lote": "017",
                    "requiredFields": 33,
                    "approvedSha256": "253c17c2327715b3e25ab80e7138de200e935b80e7d849c1c6088a69116420a3",
                    "calculationAuthorized": false,
                    "publicationAuthorized": true,
                    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
                    "ownerPublicationAuthorization": "mission10-owner-confirmed"
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "salbutamol_spray",
              "originalRecordMetadata": {
                "ID": "salbutamol_spray",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/salbutamol_nebulizacao.json",
                  "templateSha256": "11760e3f8bd9271bc9c7e4c851a2ad9799abd3ce7cc2faa78a73bd3753833e21",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://www.medicines.org.uk/emc/product/850/smpc",
                    "https://www.medicines.org.uk/emc/files/pil.850.pdf"
                  ],
                  "newProductSpecificFields": [
                    "name",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "indications",
                    "pharmacokinetics",
                    "dose",
                    "pediatricDose",
                    "administration",
                    "preparation",
                    "infusionProtocol",
                    "clinicalPearls",
                    "safetyFlags",
                    "alerts"
                  ],
                  "inheritedFieldsRequiringReview": [
                    "class",
                    "pharmacologicClass",
                    "mechanism",
                    "pharmacodynamics",
                    "renalDose",
                    "hepaticDose",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "pregnancy",
                    "lactation",
                    "specialPopulations",
                    "patientEducation"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/gold33_nova_lista.js",
                    "sourceField": "salbutamol_nebulizacao.mcGoldClinicalV1",
                    "requiredFields": 33,
                    "lote": "103",
                    "approvedSha256": "3dd8735151ec6ccf6dcd71dd5262642970c55bff5d753c59dcec104bb685a419",
                    "calculationAuthorized": false,
                    "publicationAuthorized": false,
                    "clinicalPackagePublicationState": "BLOQUEADA",
                    "list": "NOVA_LISTA_GOLD33_V1",
                    "zipSha256": "167045215deac33b67a58cf485f504a0a70ac17a45848dd73c59ec6ea4235aac",
                    "packageFile": "GOLD33_NOVA_LISTA_LOTE_103_HOMOLOGADO_CLINICAMENTE.zip",
                    "packageRestrictions": [
                      {
                        "id": "adrenalina_autoinjetavel",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "PRODUTO_ESPECIFICO_AUVIQ",
                          "PESO_MENOR_7_5_BLOQUEADO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "aminofilina_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "TDM_OBRIGATORIO",
                          "AUTOMACAO_MANUTENCAO_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "betametasona_injetavel",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "VIA_IV_BLOQUEADA",
                          "INDICACAO_ROTA_OBRIGATORIAS"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "brometo_de_ipratropio_nebulizacao",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "CALCULO_PEDIATRICO_BLOQUEADO",
                          "VIA_NAO_INALATORIA_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "dexametasona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "CALCULO_PEDIATRICO_BLOQUEADO",
                          "AUTOMACAO_EXIGE_INDICACAO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "fenoterol_gotas",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "DOSE_ATUAL_NAO_VERIFICADA",
                          "VIA_AUTOMATICA_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [
                          "BULA_PRIMARIA_ATUAL_PENDENTE"
                        ],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "hidrocortisona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "AUTOMACAO_EXIGE_INDICACAO",
                          "CALCULO_PEDIATRICO_BLOQUEADO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "metilprednisolona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "AUTOMACAO_EXIGE_INDICACAO",
                          "FORMULACAO_CONSERVANTE_DEVE_SER_CONFIRMADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "prometazina_im",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "VIA_IV_BLOQUEADA_NESTA_FICHA",
                          "IDADE_MENOR_2_CONTRAINDICADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "salbutamol_nebulizacao",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "IDADE_MENOR_2_BLOQUEADA_NESTE_ROTULO",
                          "PESO_MENOR_15_EXIGE_OUTRA_CONCENTRACAO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      }
                    ],
                    "packageRecordMetadata": {
                      "ID": "salbutamol_nebulizacao",
                      "NOTA_REVISAO_CLINICA": "HOMOLOGADO CLINICAMENTE em 20-09-2026 por Dra Eugenia Marques; resultado APROVADO INTEGRALMENTE; sem excecoes informadas. Conteudo clinico congelado; bloqueios, lacunas justificadas e reconciliacoes preservados.",
                      "PROVENIENCIA": "NEW_ENTRY_NO_LEGACY_BASELINE",
                      "ESCOPO_VALIDADO": "Salbutamol/albuterol 0,083% 2,5 mg/3 mL nebulizacao - EUA",
                      "BLOQUEIOS_CLINICOS": [
                        "IDADE_MENOR_2_BLOQUEADA_NESTE_ROTULO",
                        "PESO_MENOR_15_EXIGE_OUTRA_CONCENTRACAO"
                      ],
                      "PENDENCIAS_NAO_BLOQUEANTES": [],
                      "HOMOLOGACAO": {
                        "LISTA": "NOVA_LISTA_GOLD33_V1",
                        "LOTE": "103",
                        "MEDICO_REVISOR": "Dra Eugenia Marques",
                        "DATA_REVISAO": "20-09-2026",
                        "RESULTADO": "Aprovado integralmente",
                        "ARQUIVO_REVISADO": "103",
                        "EXCECOES_INFORMADAS": 0,
                        "REVISAO_CLINICA": "HOMOLOGADA",
                        "HOMOLOGACAO_DADOS": "SIM",
                        "INTEGRACAO_TECNICA": "NAO_INICIADA",
                        "PUBLICACAO": "BLOQUEADA",
                        "CLINICAL_CONTENT_FROZEN": true
                      }
                    },
                    "supersededPackages": [
                      "GOLD33_NOVA_LISTA_LOTE_088_HOMOLOGADO_CLINICAMENTE.zip"
                    ],
                    "referenceOnly": true
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "salbutamol_solucao_inalatoria",
              "originalRecordMetadata": {
                "ID": "salbutamol_solucao_inalatoria",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/salbutamol_nebulizacao.json",
                  "templateSha256": "11760e3f8bd9271bc9c7e4c851a2ad9799abd3ce7cc2faa78a73bd3753833e21",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=b72742df-1a6b-4483-aff3-3e79db5e015d"
                  ],
                  "newProductSpecificFields": [],
                  "inheritedFieldsRequiringReview": [
                    "name",
                    "class",
                    "pharmacologicClass",
                    "mechanism",
                    "pharmacodynamics",
                    "pharmacokinetics",
                    "indications",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "dose",
                    "pediatricDose",
                    "renalDose",
                    "hepaticDose",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "administration",
                    "preparation",
                    "infusionProtocol",
                    "pregnancy",
                    "lactation",
                    "specialPopulations",
                    "patientEducation",
                    "clinicalPearls",
                    "alerts"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/gold33_nova_lista.js",
                    "sourceField": "salbutamol_nebulizacao.mcGoldClinicalV1",
                    "requiredFields": 33,
                    "lote": "103",
                    "approvedSha256": "3dd8735151ec6ccf6dcd71dd5262642970c55bff5d753c59dcec104bb685a419",
                    "calculationAuthorized": false,
                    "publicationAuthorized": false,
                    "clinicalPackagePublicationState": "BLOQUEADA",
                    "list": "NOVA_LISTA_GOLD33_V1",
                    "zipSha256": "167045215deac33b67a58cf485f504a0a70ac17a45848dd73c59ec6ea4235aac",
                    "packageFile": "GOLD33_NOVA_LISTA_LOTE_103_HOMOLOGADO_CLINICAMENTE.zip",
                    "packageRestrictions": [
                      {
                        "id": "adrenalina_autoinjetavel",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "PRODUTO_ESPECIFICO_AUVIQ",
                          "PESO_MENOR_7_5_BLOQUEADO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "aminofilina_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "TDM_OBRIGATORIO",
                          "AUTOMACAO_MANUTENCAO_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "betametasona_injetavel",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "VIA_IV_BLOQUEADA",
                          "INDICACAO_ROTA_OBRIGATORIAS"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "brometo_de_ipratropio_nebulizacao",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "CALCULO_PEDIATRICO_BLOQUEADO",
                          "VIA_NAO_INALATORIA_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "dexametasona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "CALCULO_PEDIATRICO_BLOQUEADO",
                          "AUTOMACAO_EXIGE_INDICACAO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "fenoterol_gotas",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "DOSE_ATUAL_NAO_VERIFICADA",
                          "VIA_AUTOMATICA_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [
                          "BULA_PRIMARIA_ATUAL_PENDENTE"
                        ],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "hidrocortisona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "AUTOMACAO_EXIGE_INDICACAO",
                          "CALCULO_PEDIATRICO_BLOQUEADO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "metilprednisolona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "AUTOMACAO_EXIGE_INDICACAO",
                          "FORMULACAO_CONSERVANTE_DEVE_SER_CONFIRMADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "prometazina_im",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "VIA_IV_BLOQUEADA_NESTA_FICHA",
                          "IDADE_MENOR_2_CONTRAINDICADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "salbutamol_nebulizacao",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "IDADE_MENOR_2_BLOQUEADA_NESTE_ROTULO",
                          "PESO_MENOR_15_EXIGE_OUTRA_CONCENTRACAO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      }
                    ],
                    "packageRecordMetadata": {
                      "ID": "salbutamol_nebulizacao",
                      "NOTA_REVISAO_CLINICA": "HOMOLOGADO CLINICAMENTE em 20-09-2026 por Dra Eugenia Marques; resultado APROVADO INTEGRALMENTE; sem excecoes informadas. Conteudo clinico congelado; bloqueios, lacunas justificadas e reconciliacoes preservados.",
                      "PROVENIENCIA": "NEW_ENTRY_NO_LEGACY_BASELINE",
                      "ESCOPO_VALIDADO": "Salbutamol/albuterol 0,083% 2,5 mg/3 mL nebulizacao - EUA",
                      "BLOQUEIOS_CLINICOS": [
                        "IDADE_MENOR_2_BLOQUEADA_NESTE_ROTULO",
                        "PESO_MENOR_15_EXIGE_OUTRA_CONCENTRACAO"
                      ],
                      "PENDENCIAS_NAO_BLOQUEANTES": [],
                      "HOMOLOGACAO": {
                        "LISTA": "NOVA_LISTA_GOLD33_V1",
                        "LOTE": "103",
                        "MEDICO_REVISOR": "Dra Eugenia Marques",
                        "DATA_REVISAO": "20-09-2026",
                        "RESULTADO": "Aprovado integralmente",
                        "ARQUIVO_REVISADO": "103",
                        "EXCECOES_INFORMADAS": 0,
                        "REVISAO_CLINICA": "HOMOLOGADA",
                        "HOMOLOGACAO_DADOS": "SIM",
                        "INTEGRACAO_TECNICA": "NAO_INICIADA",
                        "PUBLICACAO": "BLOQUEADA",
                        "CLINICAL_CONTENT_FROZEN": true
                      }
                    },
                    "supersededPackages": [
                      "GOLD33_NOVA_LISTA_LOTE_088_HOMOLOGADO_CLINICAMENTE.zip"
                    ],
                    "referenceOnly": true
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false,
                "RECONCILIACAO_CANONICA": {
                  "candidateAliasOf": "salbutamol_nebulizacao",
                  "status": "PENDENTE_REVISAO_DE_ESCOPO",
                  "action": "Não adicionar um segundo registro ativo para o mesmo produto."
                }
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "fenoterol_solucao_inalatoria",
              "originalRecordMetadata": {
                "ID": "fenoterol_solucao_inalatoria",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/fenoterol_gotas.json",
                  "templateSha256": "75acfdff650220647f3251f2d6f9139d43b22db06064b3677009172ad0216990",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://www.gov.br/anvisa/pt-br/assuntos/medicamentos/cmed/precos/anos-anteriores/arquivos/5333json-file-1/%40%40download/file"
                  ],
                  "newProductSpecificFields": [],
                  "inheritedFieldsRequiringReview": [
                    "name",
                    "class",
                    "pharmacologicClass",
                    "mechanism",
                    "pharmacodynamics",
                    "pharmacokinetics",
                    "indications",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "dose",
                    "pediatricDose",
                    "renalDose",
                    "hepaticDose",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "administration",
                    "preparation",
                    "infusionProtocol",
                    "pregnancy",
                    "lactation",
                    "specialPopulations",
                    "patientEducation",
                    "clinicalPearls",
                    "alerts"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/gold33_nova_lista.js",
                    "sourceField": "fenoterol_gotas.mcGoldClinicalV1",
                    "requiredFields": 33,
                    "lote": "103",
                    "approvedSha256": "3dd8735151ec6ccf6dcd71dd5262642970c55bff5d753c59dcec104bb685a419",
                    "calculationAuthorized": false,
                    "publicationAuthorized": false,
                    "clinicalPackagePublicationState": "BLOQUEADA",
                    "list": "NOVA_LISTA_GOLD33_V1",
                    "zipSha256": "167045215deac33b67a58cf485f504a0a70ac17a45848dd73c59ec6ea4235aac",
                    "packageFile": "GOLD33_NOVA_LISTA_LOTE_103_HOMOLOGADO_CLINICAMENTE.zip",
                    "packageRestrictions": [
                      {
                        "id": "adrenalina_autoinjetavel",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "PRODUTO_ESPECIFICO_AUVIQ",
                          "PESO_MENOR_7_5_BLOQUEADO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "aminofilina_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "TDM_OBRIGATORIO",
                          "AUTOMACAO_MANUTENCAO_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "betametasona_injetavel",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "VIA_IV_BLOQUEADA",
                          "INDICACAO_ROTA_OBRIGATORIAS"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "brometo_de_ipratropio_nebulizacao",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "CALCULO_PEDIATRICO_BLOQUEADO",
                          "VIA_NAO_INALATORIA_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "dexametasona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "CALCULO_PEDIATRICO_BLOQUEADO",
                          "AUTOMACAO_EXIGE_INDICACAO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "fenoterol_gotas",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "DOSE_ATUAL_NAO_VERIFICADA",
                          "VIA_AUTOMATICA_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [
                          "BULA_PRIMARIA_ATUAL_PENDENTE"
                        ],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "hidrocortisona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "AUTOMACAO_EXIGE_INDICACAO",
                          "CALCULO_PEDIATRICO_BLOQUEADO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "metilprednisolona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "AUTOMACAO_EXIGE_INDICACAO",
                          "FORMULACAO_CONSERVANTE_DEVE_SER_CONFIRMADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "prometazina_im",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "VIA_IV_BLOQUEADA_NESTA_FICHA",
                          "IDADE_MENOR_2_CONTRAINDICADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "salbutamol_nebulizacao",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "IDADE_MENOR_2_BLOQUEADA_NESTE_ROTULO",
                          "PESO_MENOR_15_EXIGE_OUTRA_CONCENTRACAO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      }
                    ],
                    "packageRecordMetadata": {
                      "ID": "fenoterol_gotas",
                      "NOTA_REVISAO_CLINICA": "HOMOLOGADO CLINICAMENTE em 20-09-2026 por Dra Eugenia Marques; resultado APROVADO INTEGRALMENTE; sem excecoes informadas. Conteudo clinico congelado; bloqueios, lacunas justificadas e reconciliacoes preservados.",
                      "PROVENIENCIA": "NEW_ENTRY_NO_LEGACY_BASELINE",
                      "ESCOPO_VALIDADO": "Fenoterol 5 mg/mL gotas - Brasil; dose atual bloqueada",
                      "BLOQUEIOS_CLINICOS": [
                        "DOSE_ATUAL_NAO_VERIFICADA",
                        "VIA_AUTOMATICA_BLOQUEADA"
                      ],
                      "PENDENCIAS_NAO_BLOQUEANTES": [
                        "BULA_PRIMARIA_ATUAL_PENDENTE"
                      ],
                      "HOMOLOGACAO": {
                        "LISTA": "NOVA_LISTA_GOLD33_V1",
                        "LOTE": "103",
                        "MEDICO_REVISOR": "Dra Eugenia Marques",
                        "DATA_REVISAO": "20-09-2026",
                        "RESULTADO": "Aprovado integralmente",
                        "ARQUIVO_REVISADO": "103",
                        "EXCECOES_INFORMADAS": 0,
                        "REVISAO_CLINICA": "HOMOLOGADA",
                        "HOMOLOGACAO_DADOS": "SIM",
                        "INTEGRACAO_TECNICA": "NAO_INICIADA",
                        "PUBLICACAO": "BLOQUEADA",
                        "CLINICAL_CONTENT_FROZEN": true
                      }
                    },
                    "supersededPackages": [
                      "GOLD33_NOVA_LISTA_LOTE_088_HOMOLOGADO_CLINICAMENTE.zip"
                    ],
                    "referenceOnly": true
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false,
                "RECONCILIACAO_CANONICA": {
                  "candidateAliasOf": "fenoterol_gotas",
                  "status": "PENDENTE_REVISAO_DE_ESCOPO",
                  "action": "Não adicionar um segundo registro ativo para o mesmo produto."
                }
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "ipratropio_solucao_inalatoria",
              "originalRecordMetadata": {
                "ID": "ipratropio_solucao_inalatoria",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/brometo_de_ipratropio_nebulizacao.json",
                  "templateSha256": "8d7e3cddc70cbd671654f0a934055d306657bf6412a6f8452a008684da41bafa",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3249aea8-a395-f09f-e063-6294a90a2d8b"
                  ],
                  "newProductSpecificFields": [],
                  "inheritedFieldsRequiringReview": [
                    "name",
                    "class",
                    "pharmacologicClass",
                    "mechanism",
                    "pharmacodynamics",
                    "pharmacokinetics",
                    "indications",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "dose",
                    "pediatricDose",
                    "renalDose",
                    "hepaticDose",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "administration",
                    "preparation",
                    "infusionProtocol",
                    "pregnancy",
                    "lactation",
                    "specialPopulations",
                    "patientEducation",
                    "clinicalPearls",
                    "alerts"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/gold33_nova_lista.js",
                    "sourceField": "brometo_de_ipratropio_nebulizacao.mcGoldClinicalV1",
                    "requiredFields": 33,
                    "lote": "103",
                    "approvedSha256": "3dd8735151ec6ccf6dcd71dd5262642970c55bff5d753c59dcec104bb685a419",
                    "calculationAuthorized": false,
                    "publicationAuthorized": false,
                    "clinicalPackagePublicationState": "BLOQUEADA",
                    "list": "NOVA_LISTA_GOLD33_V1",
                    "zipSha256": "167045215deac33b67a58cf485f504a0a70ac17a45848dd73c59ec6ea4235aac",
                    "packageFile": "GOLD33_NOVA_LISTA_LOTE_103_HOMOLOGADO_CLINICAMENTE.zip",
                    "packageRestrictions": [
                      {
                        "id": "adrenalina_autoinjetavel",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "PRODUTO_ESPECIFICO_AUVIQ",
                          "PESO_MENOR_7_5_BLOQUEADO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "aminofilina_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "TDM_OBRIGATORIO",
                          "AUTOMACAO_MANUTENCAO_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "betametasona_injetavel",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "VIA_IV_BLOQUEADA",
                          "INDICACAO_ROTA_OBRIGATORIAS"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "brometo_de_ipratropio_nebulizacao",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "CALCULO_PEDIATRICO_BLOQUEADO",
                          "VIA_NAO_INALATORIA_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "dexametasona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "CALCULO_PEDIATRICO_BLOQUEADO",
                          "AUTOMACAO_EXIGE_INDICACAO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "fenoterol_gotas",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "DOSE_ATUAL_NAO_VERIFICADA",
                          "VIA_AUTOMATICA_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [
                          "BULA_PRIMARIA_ATUAL_PENDENTE"
                        ],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "hidrocortisona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "AUTOMACAO_EXIGE_INDICACAO",
                          "CALCULO_PEDIATRICO_BLOQUEADO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "metilprednisolona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "AUTOMACAO_EXIGE_INDICACAO",
                          "FORMULACAO_CONSERVANTE_DEVE_SER_CONFIRMADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "prometazina_im",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "VIA_IV_BLOQUEADA_NESTA_FICHA",
                          "IDADE_MENOR_2_CONTRAINDICADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "salbutamol_nebulizacao",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "IDADE_MENOR_2_BLOQUEADA_NESTE_ROTULO",
                          "PESO_MENOR_15_EXIGE_OUTRA_CONCENTRACAO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      }
                    ],
                    "packageRecordMetadata": {
                      "ID": "brometo_de_ipratropio_nebulizacao",
                      "NOTA_REVISAO_CLINICA": "HOMOLOGADO CLINICAMENTE em 20-09-2026 por Dra Eugenia Marques; resultado APROVADO INTEGRALMENTE; sem excecoes informadas. Conteudo clinico congelado; bloqueios, lacunas justificadas e reconciliacoes preservados.",
                      "PROVENIENCIA": "NEW_ENTRY_NO_LEGACY_BASELINE",
                      "ESCOPO_VALIDADO": "Ipratropium 0,02% 500 mcg/2,5 mL - EUA",
                      "BLOQUEIOS_CLINICOS": [
                        "CALCULO_PEDIATRICO_BLOQUEADO",
                        "VIA_NAO_INALATORIA_BLOQUEADA"
                      ],
                      "PENDENCIAS_NAO_BLOQUEANTES": [],
                      "HOMOLOGACAO": {
                        "LISTA": "NOVA_LISTA_GOLD33_V1",
                        "LOTE": "103",
                        "MEDICO_REVISOR": "Dra Eugenia Marques",
                        "DATA_REVISAO": "20-09-2026",
                        "RESULTADO": "Aprovado integralmente",
                        "ARQUIVO_REVISADO": "103",
                        "EXCECOES_INFORMADAS": 0,
                        "REVISAO_CLINICA": "HOMOLOGADA",
                        "HOMOLOGACAO_DADOS": "SIM",
                        "INTEGRACAO_TECNICA": "NAO_INICIADA",
                        "PUBLICACAO": "BLOQUEADA",
                        "CLINICAL_CONTENT_FROZEN": true
                      }
                    },
                    "supersededPackages": [
                      "GOLD33_NOVA_LISTA_LOTE_087_HOMOLOGADO_CLINICAMENTE.zip"
                    ],
                    "referenceOnly": true
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false,
                "RECONCILIACAO_CANONICA": {
                  "candidateAliasOf": "brometo_de_ipratropio_nebulizacao",
                  "status": "PENDENTE_REVISAO_DE_ESCOPO",
                  "action": "Não adicionar um segundo registro ativo para o mesmo produto."
                }
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "prednisolona_solucao_oral",
              "originalRecordMetadata": {
                "ID": "prednisolona_solucao_oral",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/prednisolona.json",
                  "templateSha256": "1fd9411f1fb243102af07912d9e9bf1e0684527b96d01b0a8cefd63948a73259",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=a0d74ae0-7b2d-4d36-9211-c76f5063b5a9",
                    "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=7262fc84-3db2-4475-8ae4-6bec4477cb81"
                  ],
                  "newProductSpecificFields": [
                    "name",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "mechanism",
                    "pharmacodynamics",
                    "pharmacokinetics",
                    "dose",
                    "pediatricDose",
                    "renalDose",
                    "hepaticDose",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "administration",
                    "preparation",
                    "infusionProtocol",
                    "pregnancy",
                    "lactation"
                  ],
                  "inheritedFieldsRequiringReview": [
                    "class",
                    "pharmacologicClass",
                    "indications",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "specialPopulations",
                    "patientEducation",
                    "clinicalPearls",
                    "alerts"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/imuno_corticoide.js",
                    "sourceField": "prednisolona.mcGoldClinicalV1",
                    "lote": "064",
                    "requiredFields": 33,
                    "approvedSha256": "21c1e99276216e72bd2a7201eddd567a0335bd6346374d413459182168e7cdea",
                    "calculationAuthorized": false,
                    "publicationAuthorized": true,
                    "clinicalPackagePublicationState": "LIBERADA_COM_RESTRICOES_GRANULARES",
                    "ownerPublicationAuthorization": "lote002-owner-confirmed"
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "dexametasona_elixir",
              "originalRecordMetadata": {
                "ID": "dexametasona_elixir",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/dexametasona.json",
                  "templateSha256": "176ed420ac1c027d82deb4113fc025c47b8de2fb7886d3e24344c0a4172dcce1",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=7b51ffce-ec64-4b49-8870-b9666537c541"
                  ],
                  "newProductSpecificFields": [
                    "name",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "dose",
                    "pediatricDose",
                    "administration",
                    "preparation",
                    "infusionProtocol",
                    "clinicalPearls"
                  ],
                  "inheritedFieldsRequiringReview": [
                    "class",
                    "pharmacologicClass",
                    "mechanism",
                    "pharmacodynamics",
                    "pharmacokinetics",
                    "indications",
                    "renalDose",
                    "hepaticDose",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "pregnancy",
                    "lactation",
                    "specialPopulations",
                    "patientEducation",
                    "alerts"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/imuno_corticoide.js",
                    "sourceField": "dexametasona.mcGoldClinicalV1",
                    "lote": "024",
                    "requiredFields": 33,
                    "approvedSha256": "9721657a393121ed360ce59ff910deb7cbb3b0fc3421608349c6fa584237305a",
                    "calculationAuthorized": false,
                    "publicationAuthorized": true,
                    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
                    "ownerPublicationAuthorization": "mission10-owner-confirmed"
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "budesonida_suspensao_inalatoria",
              "originalRecordMetadata": {
                "ID": "budesonida_suspensao_inalatoria",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/budesonida.json",
                  "templateSha256": "83faa465b16000c39d3c4e9904fab859797107253db21034238feb9f2ea9facd",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=1d139a25-9c17-4b3e-8ffd-b2d562cc00ee"
                  ],
                  "newProductSpecificFields": [
                    "name",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "indications",
                    "dose",
                    "pediatricDose",
                    "hepaticDose",
                    "administration",
                    "preparation",
                    "infusionProtocol"
                  ],
                  "inheritedFieldsRequiringReview": [
                    "class",
                    "pharmacologicClass",
                    "mechanism",
                    "pharmacodynamics",
                    "pharmacokinetics",
                    "renalDose",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "pregnancy",
                    "lactation",
                    "specialPopulations",
                    "patientEducation",
                    "clinicalPearls",
                    "alerts"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/pneumologia.js",
                    "sourceField": "budesonida.mcGoldClinicalV1",
                    "lote": "012",
                    "requiredFields": 33,
                    "approvedSha256": "33a04a022820507c1688fbebb735cd7d879bc3d0ef30a24f4ed7483f5cac16eb",
                    "calculationAuthorized": false,
                    "publicationAuthorized": true,
                    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
                    "ownerPublicationAuthorization": "mission10-owner-confirmed"
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            }
          ]
        }
      },
      "pt": {
        "name": "Dexametasona — elixir 0,5 mg/5 mL",
        "class": "Corticosteroide sistêmico",
        "pharmacologicClass": "Agonista glicocorticoide potente",
        "commercialNames": "Produto Marlex, EUA.",
        "presentation": "Elixir oral.",
        "presentations": "0,5 mg/5 mL; contém álcool 5%.",
        "mechanism": "Agonista glicocorticoide potente. O efeito deve ser interpretado por indicação, formulação e exposição.",
        "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
        "pharmacokinetics": "Longa duração biológica, metabolismo hepático e excreção renal de metabólitos.",
        "indications": "Condições inflamatórias, alérgicas, autoimunes, edema cerebral, oncologia e outras indicações específicas.",
        "dose": "Inicial 0,75–9 mg/dia conforme doença; titular individualmente.",
        "pediatricDose": "Sem regime pediátrico universal nesta preparação; não extrapolar faixa adulta.",
        "renalDose": "Sem ajuste rotineiro, mas retenção, glicemia e infecção exigem monitorização.",
        "hepaticDose": "Sem tabela fixa; cautela em hepatopatia.",
        "commonAdverseEffects": "Hiperglicemia, insônia, dispepsia, alterações de humor e retenção.",
        "dangerousAdverseEffects": "Infecção grave, psicose, sangramento GI, osteonecrose, glaucoma e crise adrenal.",
        "adverseEffects": "Hiperglicemia, insônia, dispepsia, alterações de humor e retenção. Graves: Infecção grave, psicose, sangramento GI, osteonecrose, glaucoma e crise adrenal.",
        "contraindications": "Infecção fúngica sistêmica; vacina viva em dose imunossupressora; hipersensibilidade.",
        "interactions": "CYP3A4, AINE, anticoagulantes, antidiabéticos, diuréticos e vacinas.",
        "monitoring": "Glicemia, PA, eletrólitos, infecção, humor, olho, osso e eixo adrenal.",
        "administration": "Via oral; retirada gradual após uso prolongado.",
        "preparation": "Pronto; medir volume correspondente à prescrição.",
        "infusionProtocol": "Não aplicável; elixir não injetável.",
        "pregnancy": "Usar menor dose eficaz; risco fetal/neonatal depende de exposição.",
        "lactation": "Passa ao leite; altas doses podem reduzir produção.",
        "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
        "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
        "clinicalPearls": "Considerar álcool e excipientes; não reutilizar preparo IV.",
        "guidelineRecommendations": "Esta preparação usa bulas e texto de referência preexistente; não foi feita validação independente de diretrizes.",
        "safetyFlags": "CANDIDATO NOVO: revisão médica pendente; cálculos e publicação bloqueados. CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
        "alerts": "Infecção grave, psicose, sangramento GI, osteonecrose, glaucoma e crise adrenal. Dose/infusão bloqueadas sem indicação, gravidade, idade/peso, produto, via, infecção, glicemia e plano de desmame.",
        "references": [
          "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=dexamethasone",
          "2. Fonte regulatória primária consultada em 2026-09-18: https://www.fda.gov/drugsatfda",
          "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=7b51ffce-ec64-4b49-8870-b9666537c541"
        ],
        "ref": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=7b51ffce-ec64-4b49-8870-b9666537c541"
      },
      "es": {
        "name": "Dexametasona — elixir 0,5 mg/5 mL",
        "class": "Corticosteroide sistémico",
        "pharmacologicClass": "Agonista glucocorticoide potente",
        "commercialNames": "Producto Marlex, EE.UU.",
        "presentation": "Elixir oral.",
        "presentations": "0,5 mg/5 mL; contiene alcohol 5%.",
        "mechanism": "Agonista glucocorticoide potente. El efecto debe interpretarse por indicación, formulación y exposición.",
        "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
        "pharmacokinetics": "Larga duración biológica, metabolismo hepático y excreción renal de metabolitos.",
        "indications": "Enfermedades inflamatorias, alérgicas, autoinmunes, edema cerebral, oncología y otras indicaciones específicas.",
        "dose": "Inicial 0,75–9 mg/día según enfermedad; titular individualmente.",
        "pediatricDose": "Sin régimen pediátrico universal en esta preparación; no extrapolar rango adulto.",
        "renalDose": "Sin ajuste rutinario, pero retención, glucemia e infección requieren control.",
        "hepaticDose": "Sin tabla fija; precaución en hepatopatía.",
        "commonAdverseEffects": "Hiperglucemia, insomnio, dispepsia, cambios de ánimo y retención.",
        "dangerousAdverseEffects": "Infección grave, psicosis, sangrado GI, osteonecrosis, glaucoma y crisis suprarrenal.",
        "adverseEffects": "Hiperglucemia, insomnio, dispepsia, cambios de ánimo y retención. Graves: Infección grave, psicosis, sangrado GI, osteonecrosis, glaucoma y crisis suprarrenal.",
        "contraindications": "Infección fúngica sistémica; vacuna viva con dosis inmunosupresora; hipersensibilidad.",
        "interactions": "CYP3A4, AINE, anticoagulantes, antidiabéticos, diuréticos y vacunas.",
        "monitoring": "Glucemia, PA, electrolitos, infección, ánimo, ojo, hueso y eje suprarrenal.",
        "administration": "Vía oral; retirada gradual tras uso prolongado.",
        "preparation": "Listo; medir volumen correspondiente a prescripción.",
        "infusionProtocol": "No aplicable; elixir no inyectable.",
        "pregnancy": "Usar mínima dosis eficaz; riesgo fetal/neonatal depende de exposición.",
        "lactation": "Pasa a leche; dosis altas pueden reducir producción.",
        "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
        "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
        "clinicalPearls": "Considerar alcohol y excipientes; no reutilizar preparación IV.",
        "guidelineRecommendations": "Esta preparación usa prospectos y texto de referencia preexistente; no se realizó validación independiente de guías.",
        "safetyFlags": "CANDIDATO NUEVO: revisión médica pendiente; cálculos y publicación bloqueados. CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
        "alerts": "Infección grave, psicosis, sangrado GI, osteonecrosis, glaucoma y crisis suprarrenal. Dose/infusão bloqueadas sem indicação, gravidade, idade/peso, produto, via, infecção, glicemia e plano de desmame.",
        "references": [
          "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=dexamethasone",
          "2. Fonte regulatória primária consultada em 2026-09-18: https://www.fda.gov/drugsatfda",
          "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=7b51ffce-ec64-4b49-8870-b9666537c541"
        ],
        "ref": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=7b51ffce-ec64-4b49-8870-b9666537c541"
      }
    }
  },
  "budesonida_suspensao_inalatoria": {
    "id": "budesonida_suspensao_inalatoria",
    "name": {
      "pt": "Budesonida — suspensão para nebulização",
      "es": "Budesonida — suspensión para nebulización"
    },
    "category": "gold33",
    "mcGoldClinicalV1": {
      "meta": {
        "schema": "mc-gold-clinical-v1",
        "requiredFieldCount": 33,
        "lote": "093_NOVO_CANDIDATO",
        "approvedSha256": "720dc1dc273c189f6552d451208b031b9cdbca8319a7dc175d4419ac39e13fbc",
        "zipSha256": "e29687c1f949e39a4eeb2ce764d444bf840900034fe78da29de2a8770755e98f",
        "referenceOnly": true,
        "calculationAuthorized": false,
        "publicationAuthorized": false,
        "historicalApprovalApplies": false,
        "clinicalPackagePublicationState": "BLOQUEADA",
        "releaseAuthorization": {
          "source": "USER_EXPLICIT_DEPLOY_AUTHORIZATION_2026_09_21",
          "referencePublicationAuthorized": true,
          "calculationAuthorized": false
        },
        "packageRecordMetadata": {
          "ID": "budesonida_suspensao_inalatoria",
          "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
          "PROVENIENCIA": {
            "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
            "templatePath": "data/drugs/budesonida.json",
            "templateSha256": "83faa465b16000c39d3c4e9904fab859797107253db21034238feb9f2ea9facd",
            "sourcesConsulted": "2026-09-21",
            "primarySources": [
              "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=1d139a25-9c17-4b3e-8ffd-b2d562cc00ee"
            ],
            "newProductSpecificFields": [
              "name",
              "commercialNames",
              "presentation",
              "presentations",
              "indications",
              "dose",
              "pediatricDose",
              "hepaticDose",
              "administration",
              "preparation",
              "infusionProtocol"
            ],
            "inheritedFieldsRequiringReview": [
              "class",
              "pharmacologicClass",
              "mechanism",
              "pharmacodynamics",
              "pharmacokinetics",
              "renalDose",
              "commonAdverseEffects",
              "dangerousAdverseEffects",
              "adverseEffects",
              "contraindications",
              "interactions",
              "monitoring",
              "pregnancy",
              "lactation",
              "specialPopulations",
              "patientEducation",
              "clinicalPearls",
              "alerts"
            ],
            "templateClinicalMetadata": {
              "status": "PASS_CLINICAL_HOMOLOGATION",
              "sourceOwner": "database/pneumologia.js",
              "sourceField": "budesonida.mcGoldClinicalV1",
              "lote": "012",
              "requiredFields": 33,
              "approvedSha256": "33a04a022820507c1688fbebb735cd7d879bc3d0ef30a24f4ed7483f5cac16eb",
              "calculationAuthorized": false,
              "publicationAuthorized": true,
              "clinicalPackagePublicationState": "NAO_AUTORIZADA",
              "ownerPublicationAuthorization": "mission10-owner-confirmed"
            }
          },
          "STATES": {
            "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
            "HOMOLOGACAO_DADOS": "SIM",
            "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
            "INTEGRACAO_RUNTIME": "NAO",
            "INTEGRACAO_TECNICA": "NAO_INICIADA",
            "PUBLICACAO": "BLOQUEADA"
          },
          "calculationAuthorized": false,
          "publicationAuthorized": false,
          "HOMOLOGACAO": {
            "LISTA": "NOVA_LISTA_GOLD33_V1",
            "LOTE": "093_NOVO_CANDIDATO",
            "MEDICO_REVISOR": "Dra Eugenia Marques",
            "DATA_REVISAO": "20-09-2026",
            "RESULTADO": "Aprovado integralmente",
            "ARQUIVO_REVISADO": "01_NOVO_CANDIDATO_093.json",
            "EXCECOES_INFORMADAS": 0,
            "historicalApprovalApplies": false,
            "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
            "calculationAuthorized": false,
            "publicationAuthorized": false,
            "INTEGRACAO_RUNTIME": "NAO",
            "INTEGRACAO_TECNICA": "NAO_INICIADA",
            "PUBLICACAO": "BLOQUEADA",
            "nota": "O parecer se aplica exclusivamente ao novo candidato 093 submetido nesta conversa. Nenhuma homologacao historica do Lote 093 original se transfere para este conteudo.",
            "CLINICAL_CONTENT_FROZEN": true,
            "reviewedCandidateSha256": "d37488285baa1b0343e2232153a4554cdb1bc88ae828d2c0550331644ba0d84b",
            "approvalBinding": "USER_CONFIRMED_LOCAL_CANDIDATE",
            "approvalPackageSha256": "fa131a03c1c81ae4244b520a055113617ec7f1d617f7078722437521f403aebf"
          }
        },
        "packageRestrictions": {
          "historicalApprovalApplies": false,
          "items": [
            {
              "id": "diclofenaco_gotas",
              "originalRecordMetadata": {
                "ID": "diclofenaco_gotas",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/diclofenaco.json",
                  "templateSha256": "0c9f069bb319d807954cdffdffb0941600c7b4bf48c9b04c5a1474ae1f6a7f02",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://portal.novartis.com.br/medicamentos/wp-content/uploads/2021/10/Bula-CATAFLAM-Suspensao-Gotas-Medico.pdf",
                    "https://portal.novartis.com.br/medicamentos/wp-content/uploads/2021/10/Bula-CATAFLAM-Suspensao-Gotas-Paciente.pdf"
                  ],
                  "newProductSpecificFields": [
                    "name",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "indications",
                    "dose",
                    "pediatricDose",
                    "administration",
                    "preparation",
                    "infusionProtocol",
                    "lactation",
                    "clinicalPearls"
                  ],
                  "inheritedFieldsRequiringReview": [
                    "class",
                    "pharmacologicClass",
                    "pharmacodynamics",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "pregnancy",
                    "specialPopulations",
                    "patientEducation",
                    "alerts",
                    "mechanism",
                    "pharmacokinetics",
                    "renalDose",
                    "hepaticDose"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/analgesicos.js",
                    "sourceField": "diclofenaco.mcGoldClinicalV1",
                    "lote": "025",
                    "requiredFields": 33,
                    "approvedSha256": "f490066cbf88c2c1fc49fde254c0e52699a8a5320bd3cfb2ee1a9d3050dd9c7f",
                    "calculationAuthorized": false,
                    "publicationAuthorized": true,
                    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
                    "ownerPublicationAuthorization": "mission10-owner-confirmed"
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "diclofenaco_supositorio",
              "originalRecordMetadata": {
                "ID": "diclofenaco_supositorio",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/diclofenaco.json",
                  "templateSha256": "0c9f069bb319d807954cdffdffb0941600c7b4bf48c9b04c5a1474ae1f6a7f02",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://www.medicines.org.uk/emc/product/1044/smpc"
                  ],
                  "newProductSpecificFields": [
                    "name",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "indications",
                    "dose",
                    "pediatricDose",
                    "administration",
                    "preparation",
                    "infusionProtocol",
                    "contraindications",
                    "clinicalPearls"
                  ],
                  "inheritedFieldsRequiringReview": [
                    "class",
                    "pharmacologicClass",
                    "pharmacodynamics",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "interactions",
                    "monitoring",
                    "pregnancy",
                    "lactation",
                    "specialPopulations",
                    "patientEducation",
                    "alerts",
                    "mechanism",
                    "pharmacokinetics",
                    "renalDose",
                    "hepaticDose"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/analgesicos.js",
                    "sourceField": "diclofenaco.mcGoldClinicalV1",
                    "lote": "025",
                    "requiredFields": 33,
                    "approvedSha256": "f490066cbf88c2c1fc49fde254c0e52699a8a5320bd3cfb2ee1a9d3050dd9c7f",
                    "calculationAuthorized": false,
                    "publicationAuthorized": true,
                    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
                    "ownerPublicationAuthorization": "mission10-owner-confirmed"
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "cetoprofeno_gotas",
              "originalRecordMetadata": {
                "ID": "cetoprofeno_gotas",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/cetoprofeno.json",
                  "templateSha256": "92e70a001d201e6a9b143907d4f6eef1e4c778615b42500884f6c502b82ec6bb",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://eurofarma.com.br/produtos/bulas/view/healthcare/pt/bula-cetoprofeno-solucao-oral-gotas.html",
                    "https://eurofarma.com.br/produtos/bulas/view/patient/pt/bula-cetoprofeno-solucao-oral-gotas.html"
                  ],
                  "newProductSpecificFields": [
                    "name",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "dose",
                    "pediatricDose",
                    "renalDose",
                    "hepaticDose",
                    "administration",
                    "preparation",
                    "pregnancy",
                    "infusionProtocol"
                  ],
                  "inheritedFieldsRequiringReview": [
                    "class",
                    "pharmacologicClass",
                    "mechanism",
                    "pharmacodynamics",
                    "pharmacokinetics",
                    "indications",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "lactation",
                    "specialPopulations",
                    "patientEducation",
                    "clinicalPearls",
                    "alerts"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/analgesicos.js",
                    "sourceField": "cetoprofeno.mcGoldClinicalV1",
                    "lote": "017",
                    "requiredFields": 33,
                    "approvedSha256": "253c17c2327715b3e25ab80e7138de200e935b80e7d849c1c6088a69116420a3",
                    "calculationAuthorized": false,
                    "publicationAuthorized": true,
                    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
                    "ownerPublicationAuthorization": "mission10-owner-confirmed"
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "salbutamol_spray",
              "originalRecordMetadata": {
                "ID": "salbutamol_spray",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/salbutamol_nebulizacao.json",
                  "templateSha256": "11760e3f8bd9271bc9c7e4c851a2ad9799abd3ce7cc2faa78a73bd3753833e21",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://www.medicines.org.uk/emc/product/850/smpc",
                    "https://www.medicines.org.uk/emc/files/pil.850.pdf"
                  ],
                  "newProductSpecificFields": [
                    "name",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "indications",
                    "pharmacokinetics",
                    "dose",
                    "pediatricDose",
                    "administration",
                    "preparation",
                    "infusionProtocol",
                    "clinicalPearls",
                    "safetyFlags",
                    "alerts"
                  ],
                  "inheritedFieldsRequiringReview": [
                    "class",
                    "pharmacologicClass",
                    "mechanism",
                    "pharmacodynamics",
                    "renalDose",
                    "hepaticDose",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "pregnancy",
                    "lactation",
                    "specialPopulations",
                    "patientEducation"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/gold33_nova_lista.js",
                    "sourceField": "salbutamol_nebulizacao.mcGoldClinicalV1",
                    "requiredFields": 33,
                    "lote": "103",
                    "approvedSha256": "3dd8735151ec6ccf6dcd71dd5262642970c55bff5d753c59dcec104bb685a419",
                    "calculationAuthorized": false,
                    "publicationAuthorized": false,
                    "clinicalPackagePublicationState": "BLOQUEADA",
                    "list": "NOVA_LISTA_GOLD33_V1",
                    "zipSha256": "167045215deac33b67a58cf485f504a0a70ac17a45848dd73c59ec6ea4235aac",
                    "packageFile": "GOLD33_NOVA_LISTA_LOTE_103_HOMOLOGADO_CLINICAMENTE.zip",
                    "packageRestrictions": [
                      {
                        "id": "adrenalina_autoinjetavel",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "PRODUTO_ESPECIFICO_AUVIQ",
                          "PESO_MENOR_7_5_BLOQUEADO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "aminofilina_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "TDM_OBRIGATORIO",
                          "AUTOMACAO_MANUTENCAO_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "betametasona_injetavel",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "VIA_IV_BLOQUEADA",
                          "INDICACAO_ROTA_OBRIGATORIAS"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "brometo_de_ipratropio_nebulizacao",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "CALCULO_PEDIATRICO_BLOQUEADO",
                          "VIA_NAO_INALATORIA_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "dexametasona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "CALCULO_PEDIATRICO_BLOQUEADO",
                          "AUTOMACAO_EXIGE_INDICACAO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "fenoterol_gotas",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "DOSE_ATUAL_NAO_VERIFICADA",
                          "VIA_AUTOMATICA_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [
                          "BULA_PRIMARIA_ATUAL_PENDENTE"
                        ],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "hidrocortisona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "AUTOMACAO_EXIGE_INDICACAO",
                          "CALCULO_PEDIATRICO_BLOQUEADO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "metilprednisolona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "AUTOMACAO_EXIGE_INDICACAO",
                          "FORMULACAO_CONSERVANTE_DEVE_SER_CONFIRMADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "prometazina_im",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "VIA_IV_BLOQUEADA_NESTA_FICHA",
                          "IDADE_MENOR_2_CONTRAINDICADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "salbutamol_nebulizacao",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "IDADE_MENOR_2_BLOQUEADA_NESTE_ROTULO",
                          "PESO_MENOR_15_EXIGE_OUTRA_CONCENTRACAO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      }
                    ],
                    "packageRecordMetadata": {
                      "ID": "salbutamol_nebulizacao",
                      "NOTA_REVISAO_CLINICA": "HOMOLOGADO CLINICAMENTE em 20-09-2026 por Dra Eugenia Marques; resultado APROVADO INTEGRALMENTE; sem excecoes informadas. Conteudo clinico congelado; bloqueios, lacunas justificadas e reconciliacoes preservados.",
                      "PROVENIENCIA": "NEW_ENTRY_NO_LEGACY_BASELINE",
                      "ESCOPO_VALIDADO": "Salbutamol/albuterol 0,083% 2,5 mg/3 mL nebulizacao - EUA",
                      "BLOQUEIOS_CLINICOS": [
                        "IDADE_MENOR_2_BLOQUEADA_NESTE_ROTULO",
                        "PESO_MENOR_15_EXIGE_OUTRA_CONCENTRACAO"
                      ],
                      "PENDENCIAS_NAO_BLOQUEANTES": [],
                      "HOMOLOGACAO": {
                        "LISTA": "NOVA_LISTA_GOLD33_V1",
                        "LOTE": "103",
                        "MEDICO_REVISOR": "Dra Eugenia Marques",
                        "DATA_REVISAO": "20-09-2026",
                        "RESULTADO": "Aprovado integralmente",
                        "ARQUIVO_REVISADO": "103",
                        "EXCECOES_INFORMADAS": 0,
                        "REVISAO_CLINICA": "HOMOLOGADA",
                        "HOMOLOGACAO_DADOS": "SIM",
                        "INTEGRACAO_TECNICA": "NAO_INICIADA",
                        "PUBLICACAO": "BLOQUEADA",
                        "CLINICAL_CONTENT_FROZEN": true
                      }
                    },
                    "supersededPackages": [
                      "GOLD33_NOVA_LISTA_LOTE_088_HOMOLOGADO_CLINICAMENTE.zip"
                    ],
                    "referenceOnly": true
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "salbutamol_solucao_inalatoria",
              "originalRecordMetadata": {
                "ID": "salbutamol_solucao_inalatoria",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/salbutamol_nebulizacao.json",
                  "templateSha256": "11760e3f8bd9271bc9c7e4c851a2ad9799abd3ce7cc2faa78a73bd3753833e21",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=b72742df-1a6b-4483-aff3-3e79db5e015d"
                  ],
                  "newProductSpecificFields": [],
                  "inheritedFieldsRequiringReview": [
                    "name",
                    "class",
                    "pharmacologicClass",
                    "mechanism",
                    "pharmacodynamics",
                    "pharmacokinetics",
                    "indications",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "dose",
                    "pediatricDose",
                    "renalDose",
                    "hepaticDose",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "administration",
                    "preparation",
                    "infusionProtocol",
                    "pregnancy",
                    "lactation",
                    "specialPopulations",
                    "patientEducation",
                    "clinicalPearls",
                    "alerts"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/gold33_nova_lista.js",
                    "sourceField": "salbutamol_nebulizacao.mcGoldClinicalV1",
                    "requiredFields": 33,
                    "lote": "103",
                    "approvedSha256": "3dd8735151ec6ccf6dcd71dd5262642970c55bff5d753c59dcec104bb685a419",
                    "calculationAuthorized": false,
                    "publicationAuthorized": false,
                    "clinicalPackagePublicationState": "BLOQUEADA",
                    "list": "NOVA_LISTA_GOLD33_V1",
                    "zipSha256": "167045215deac33b67a58cf485f504a0a70ac17a45848dd73c59ec6ea4235aac",
                    "packageFile": "GOLD33_NOVA_LISTA_LOTE_103_HOMOLOGADO_CLINICAMENTE.zip",
                    "packageRestrictions": [
                      {
                        "id": "adrenalina_autoinjetavel",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "PRODUTO_ESPECIFICO_AUVIQ",
                          "PESO_MENOR_7_5_BLOQUEADO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "aminofilina_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "TDM_OBRIGATORIO",
                          "AUTOMACAO_MANUTENCAO_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "betametasona_injetavel",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "VIA_IV_BLOQUEADA",
                          "INDICACAO_ROTA_OBRIGATORIAS"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "brometo_de_ipratropio_nebulizacao",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "CALCULO_PEDIATRICO_BLOQUEADO",
                          "VIA_NAO_INALATORIA_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "dexametasona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "CALCULO_PEDIATRICO_BLOQUEADO",
                          "AUTOMACAO_EXIGE_INDICACAO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "fenoterol_gotas",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "DOSE_ATUAL_NAO_VERIFICADA",
                          "VIA_AUTOMATICA_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [
                          "BULA_PRIMARIA_ATUAL_PENDENTE"
                        ],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "hidrocortisona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "AUTOMACAO_EXIGE_INDICACAO",
                          "CALCULO_PEDIATRICO_BLOQUEADO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "metilprednisolona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "AUTOMACAO_EXIGE_INDICACAO",
                          "FORMULACAO_CONSERVANTE_DEVE_SER_CONFIRMADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "prometazina_im",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "VIA_IV_BLOQUEADA_NESTA_FICHA",
                          "IDADE_MENOR_2_CONTRAINDICADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "salbutamol_nebulizacao",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "IDADE_MENOR_2_BLOQUEADA_NESTE_ROTULO",
                          "PESO_MENOR_15_EXIGE_OUTRA_CONCENTRACAO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      }
                    ],
                    "packageRecordMetadata": {
                      "ID": "salbutamol_nebulizacao",
                      "NOTA_REVISAO_CLINICA": "HOMOLOGADO CLINICAMENTE em 20-09-2026 por Dra Eugenia Marques; resultado APROVADO INTEGRALMENTE; sem excecoes informadas. Conteudo clinico congelado; bloqueios, lacunas justificadas e reconciliacoes preservados.",
                      "PROVENIENCIA": "NEW_ENTRY_NO_LEGACY_BASELINE",
                      "ESCOPO_VALIDADO": "Salbutamol/albuterol 0,083% 2,5 mg/3 mL nebulizacao - EUA",
                      "BLOQUEIOS_CLINICOS": [
                        "IDADE_MENOR_2_BLOQUEADA_NESTE_ROTULO",
                        "PESO_MENOR_15_EXIGE_OUTRA_CONCENTRACAO"
                      ],
                      "PENDENCIAS_NAO_BLOQUEANTES": [],
                      "HOMOLOGACAO": {
                        "LISTA": "NOVA_LISTA_GOLD33_V1",
                        "LOTE": "103",
                        "MEDICO_REVISOR": "Dra Eugenia Marques",
                        "DATA_REVISAO": "20-09-2026",
                        "RESULTADO": "Aprovado integralmente",
                        "ARQUIVO_REVISADO": "103",
                        "EXCECOES_INFORMADAS": 0,
                        "REVISAO_CLINICA": "HOMOLOGADA",
                        "HOMOLOGACAO_DADOS": "SIM",
                        "INTEGRACAO_TECNICA": "NAO_INICIADA",
                        "PUBLICACAO": "BLOQUEADA",
                        "CLINICAL_CONTENT_FROZEN": true
                      }
                    },
                    "supersededPackages": [
                      "GOLD33_NOVA_LISTA_LOTE_088_HOMOLOGADO_CLINICAMENTE.zip"
                    ],
                    "referenceOnly": true
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false,
                "RECONCILIACAO_CANONICA": {
                  "candidateAliasOf": "salbutamol_nebulizacao",
                  "status": "PENDENTE_REVISAO_DE_ESCOPO",
                  "action": "Não adicionar um segundo registro ativo para o mesmo produto."
                }
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "fenoterol_solucao_inalatoria",
              "originalRecordMetadata": {
                "ID": "fenoterol_solucao_inalatoria",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/fenoterol_gotas.json",
                  "templateSha256": "75acfdff650220647f3251f2d6f9139d43b22db06064b3677009172ad0216990",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://www.gov.br/anvisa/pt-br/assuntos/medicamentos/cmed/precos/anos-anteriores/arquivos/5333json-file-1/%40%40download/file"
                  ],
                  "newProductSpecificFields": [],
                  "inheritedFieldsRequiringReview": [
                    "name",
                    "class",
                    "pharmacologicClass",
                    "mechanism",
                    "pharmacodynamics",
                    "pharmacokinetics",
                    "indications",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "dose",
                    "pediatricDose",
                    "renalDose",
                    "hepaticDose",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "administration",
                    "preparation",
                    "infusionProtocol",
                    "pregnancy",
                    "lactation",
                    "specialPopulations",
                    "patientEducation",
                    "clinicalPearls",
                    "alerts"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/gold33_nova_lista.js",
                    "sourceField": "fenoterol_gotas.mcGoldClinicalV1",
                    "requiredFields": 33,
                    "lote": "103",
                    "approvedSha256": "3dd8735151ec6ccf6dcd71dd5262642970c55bff5d753c59dcec104bb685a419",
                    "calculationAuthorized": false,
                    "publicationAuthorized": false,
                    "clinicalPackagePublicationState": "BLOQUEADA",
                    "list": "NOVA_LISTA_GOLD33_V1",
                    "zipSha256": "167045215deac33b67a58cf485f504a0a70ac17a45848dd73c59ec6ea4235aac",
                    "packageFile": "GOLD33_NOVA_LISTA_LOTE_103_HOMOLOGADO_CLINICAMENTE.zip",
                    "packageRestrictions": [
                      {
                        "id": "adrenalina_autoinjetavel",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "PRODUTO_ESPECIFICO_AUVIQ",
                          "PESO_MENOR_7_5_BLOQUEADO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "aminofilina_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "TDM_OBRIGATORIO",
                          "AUTOMACAO_MANUTENCAO_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "betametasona_injetavel",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "VIA_IV_BLOQUEADA",
                          "INDICACAO_ROTA_OBRIGATORIAS"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "brometo_de_ipratropio_nebulizacao",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "CALCULO_PEDIATRICO_BLOQUEADO",
                          "VIA_NAO_INALATORIA_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "dexametasona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "CALCULO_PEDIATRICO_BLOQUEADO",
                          "AUTOMACAO_EXIGE_INDICACAO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "fenoterol_gotas",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "DOSE_ATUAL_NAO_VERIFICADA",
                          "VIA_AUTOMATICA_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [
                          "BULA_PRIMARIA_ATUAL_PENDENTE"
                        ],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "hidrocortisona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "AUTOMACAO_EXIGE_INDICACAO",
                          "CALCULO_PEDIATRICO_BLOQUEADO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "metilprednisolona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "AUTOMACAO_EXIGE_INDICACAO",
                          "FORMULACAO_CONSERVANTE_DEVE_SER_CONFIRMADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "prometazina_im",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "VIA_IV_BLOQUEADA_NESTA_FICHA",
                          "IDADE_MENOR_2_CONTRAINDICADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "salbutamol_nebulizacao",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "IDADE_MENOR_2_BLOQUEADA_NESTE_ROTULO",
                          "PESO_MENOR_15_EXIGE_OUTRA_CONCENTRACAO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      }
                    ],
                    "packageRecordMetadata": {
                      "ID": "fenoterol_gotas",
                      "NOTA_REVISAO_CLINICA": "HOMOLOGADO CLINICAMENTE em 20-09-2026 por Dra Eugenia Marques; resultado APROVADO INTEGRALMENTE; sem excecoes informadas. Conteudo clinico congelado; bloqueios, lacunas justificadas e reconciliacoes preservados.",
                      "PROVENIENCIA": "NEW_ENTRY_NO_LEGACY_BASELINE",
                      "ESCOPO_VALIDADO": "Fenoterol 5 mg/mL gotas - Brasil; dose atual bloqueada",
                      "BLOQUEIOS_CLINICOS": [
                        "DOSE_ATUAL_NAO_VERIFICADA",
                        "VIA_AUTOMATICA_BLOQUEADA"
                      ],
                      "PENDENCIAS_NAO_BLOQUEANTES": [
                        "BULA_PRIMARIA_ATUAL_PENDENTE"
                      ],
                      "HOMOLOGACAO": {
                        "LISTA": "NOVA_LISTA_GOLD33_V1",
                        "LOTE": "103",
                        "MEDICO_REVISOR": "Dra Eugenia Marques",
                        "DATA_REVISAO": "20-09-2026",
                        "RESULTADO": "Aprovado integralmente",
                        "ARQUIVO_REVISADO": "103",
                        "EXCECOES_INFORMADAS": 0,
                        "REVISAO_CLINICA": "HOMOLOGADA",
                        "HOMOLOGACAO_DADOS": "SIM",
                        "INTEGRACAO_TECNICA": "NAO_INICIADA",
                        "PUBLICACAO": "BLOQUEADA",
                        "CLINICAL_CONTENT_FROZEN": true
                      }
                    },
                    "supersededPackages": [
                      "GOLD33_NOVA_LISTA_LOTE_088_HOMOLOGADO_CLINICAMENTE.zip"
                    ],
                    "referenceOnly": true
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false,
                "RECONCILIACAO_CANONICA": {
                  "candidateAliasOf": "fenoterol_gotas",
                  "status": "PENDENTE_REVISAO_DE_ESCOPO",
                  "action": "Não adicionar um segundo registro ativo para o mesmo produto."
                }
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "ipratropio_solucao_inalatoria",
              "originalRecordMetadata": {
                "ID": "ipratropio_solucao_inalatoria",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/brometo_de_ipratropio_nebulizacao.json",
                  "templateSha256": "8d7e3cddc70cbd671654f0a934055d306657bf6412a6f8452a008684da41bafa",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3249aea8-a395-f09f-e063-6294a90a2d8b"
                  ],
                  "newProductSpecificFields": [],
                  "inheritedFieldsRequiringReview": [
                    "name",
                    "class",
                    "pharmacologicClass",
                    "mechanism",
                    "pharmacodynamics",
                    "pharmacokinetics",
                    "indications",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "dose",
                    "pediatricDose",
                    "renalDose",
                    "hepaticDose",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "administration",
                    "preparation",
                    "infusionProtocol",
                    "pregnancy",
                    "lactation",
                    "specialPopulations",
                    "patientEducation",
                    "clinicalPearls",
                    "alerts"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/gold33_nova_lista.js",
                    "sourceField": "brometo_de_ipratropio_nebulizacao.mcGoldClinicalV1",
                    "requiredFields": 33,
                    "lote": "103",
                    "approvedSha256": "3dd8735151ec6ccf6dcd71dd5262642970c55bff5d753c59dcec104bb685a419",
                    "calculationAuthorized": false,
                    "publicationAuthorized": false,
                    "clinicalPackagePublicationState": "BLOQUEADA",
                    "list": "NOVA_LISTA_GOLD33_V1",
                    "zipSha256": "167045215deac33b67a58cf485f504a0a70ac17a45848dd73c59ec6ea4235aac",
                    "packageFile": "GOLD33_NOVA_LISTA_LOTE_103_HOMOLOGADO_CLINICAMENTE.zip",
                    "packageRestrictions": [
                      {
                        "id": "adrenalina_autoinjetavel",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "PRODUTO_ESPECIFICO_AUVIQ",
                          "PESO_MENOR_7_5_BLOQUEADO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "aminofilina_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "TDM_OBRIGATORIO",
                          "AUTOMACAO_MANUTENCAO_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "betametasona_injetavel",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "VIA_IV_BLOQUEADA",
                          "INDICACAO_ROTA_OBRIGATORIAS"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "brometo_de_ipratropio_nebulizacao",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "CALCULO_PEDIATRICO_BLOQUEADO",
                          "VIA_NAO_INALATORIA_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "dexametasona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "CALCULO_PEDIATRICO_BLOQUEADO",
                          "AUTOMACAO_EXIGE_INDICACAO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "fenoterol_gotas",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "DOSE_ATUAL_NAO_VERIFICADA",
                          "VIA_AUTOMATICA_BLOQUEADA"
                        ],
                        "pendencias_nao_bloqueantes": [
                          "BULA_PRIMARIA_ATUAL_PENDENTE"
                        ],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "hidrocortisona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "AUTOMACAO_EXIGE_INDICACAO",
                          "CALCULO_PEDIATRICO_BLOQUEADO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "metilprednisolona_iv",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "AUTOMACAO_EXIGE_INDICACAO",
                          "FORMULACAO_CONSERVANTE_DEVE_SER_CONFIRMADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "prometazina_im",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "VIA_IV_BLOQUEADA_NESTA_FICHA",
                          "IDADE_MENOR_2_CONTRAINDICADA"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      },
                      {
                        "id": "salbutamol_nebulizacao",
                        "proveniencia": "NEW_ENTRY_NO_LEGACY_BASELINE",
                        "bloqueios_clinicos": [
                          "IDADE_MENOR_2_BLOQUEADA_NESTE_ROTULO",
                          "PESO_MENOR_15_EXIGE_OUTRA_CONCENTRACAO"
                        ],
                        "pendencias_nao_bloqueantes": [],
                        "states": {
                          "PESQUISA": "CONCLUIDA",
                          "REVISAO_CLINICA": "HOMOLOGADA",
                          "HOMOLOGACAO_DADOS": "SIM",
                          "AUTORIZACAO_CALCULO": "CONFORME_BLOQUEIOS_GRANULARES",
                          "INTEGRACAO_TECNICA": "NAO_INICIADA",
                          "PUBLICACAO": "BLOQUEADA"
                        },
                        "technical_mapping": {
                          "mode": "NEW_ENTRY_NO_LEGACY_BASELINE",
                          "repository_destination": "NAO_INVENTADO_NESTE_PACOTE"
                        }
                      }
                    ],
                    "packageRecordMetadata": {
                      "ID": "brometo_de_ipratropio_nebulizacao",
                      "NOTA_REVISAO_CLINICA": "HOMOLOGADO CLINICAMENTE em 20-09-2026 por Dra Eugenia Marques; resultado APROVADO INTEGRALMENTE; sem excecoes informadas. Conteudo clinico congelado; bloqueios, lacunas justificadas e reconciliacoes preservados.",
                      "PROVENIENCIA": "NEW_ENTRY_NO_LEGACY_BASELINE",
                      "ESCOPO_VALIDADO": "Ipratropium 0,02% 500 mcg/2,5 mL - EUA",
                      "BLOQUEIOS_CLINICOS": [
                        "CALCULO_PEDIATRICO_BLOQUEADO",
                        "VIA_NAO_INALATORIA_BLOQUEADA"
                      ],
                      "PENDENCIAS_NAO_BLOQUEANTES": [],
                      "HOMOLOGACAO": {
                        "LISTA": "NOVA_LISTA_GOLD33_V1",
                        "LOTE": "103",
                        "MEDICO_REVISOR": "Dra Eugenia Marques",
                        "DATA_REVISAO": "20-09-2026",
                        "RESULTADO": "Aprovado integralmente",
                        "ARQUIVO_REVISADO": "103",
                        "EXCECOES_INFORMADAS": 0,
                        "REVISAO_CLINICA": "HOMOLOGADA",
                        "HOMOLOGACAO_DADOS": "SIM",
                        "INTEGRACAO_TECNICA": "NAO_INICIADA",
                        "PUBLICACAO": "BLOQUEADA",
                        "CLINICAL_CONTENT_FROZEN": true
                      }
                    },
                    "supersededPackages": [
                      "GOLD33_NOVA_LISTA_LOTE_087_HOMOLOGADO_CLINICAMENTE.zip"
                    ],
                    "referenceOnly": true
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false,
                "RECONCILIACAO_CANONICA": {
                  "candidateAliasOf": "brometo_de_ipratropio_nebulizacao",
                  "status": "PENDENTE_REVISAO_DE_ESCOPO",
                  "action": "Não adicionar um segundo registro ativo para o mesmo produto."
                }
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "prednisolona_solucao_oral",
              "originalRecordMetadata": {
                "ID": "prednisolona_solucao_oral",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/prednisolona.json",
                  "templateSha256": "1fd9411f1fb243102af07912d9e9bf1e0684527b96d01b0a8cefd63948a73259",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=a0d74ae0-7b2d-4d36-9211-c76f5063b5a9",
                    "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=7262fc84-3db2-4475-8ae4-6bec4477cb81"
                  ],
                  "newProductSpecificFields": [
                    "name",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "mechanism",
                    "pharmacodynamics",
                    "pharmacokinetics",
                    "dose",
                    "pediatricDose",
                    "renalDose",
                    "hepaticDose",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "administration",
                    "preparation",
                    "infusionProtocol",
                    "pregnancy",
                    "lactation"
                  ],
                  "inheritedFieldsRequiringReview": [
                    "class",
                    "pharmacologicClass",
                    "indications",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "specialPopulations",
                    "patientEducation",
                    "clinicalPearls",
                    "alerts"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/imuno_corticoide.js",
                    "sourceField": "prednisolona.mcGoldClinicalV1",
                    "lote": "064",
                    "requiredFields": 33,
                    "approvedSha256": "21c1e99276216e72bd2a7201eddd567a0335bd6346374d413459182168e7cdea",
                    "calculationAuthorized": false,
                    "publicationAuthorized": true,
                    "clinicalPackagePublicationState": "LIBERADA_COM_RESTRICOES_GRANULARES",
                    "ownerPublicationAuthorization": "lote002-owner-confirmed"
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "dexametasona_elixir",
              "originalRecordMetadata": {
                "ID": "dexametasona_elixir",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/dexametasona.json",
                  "templateSha256": "176ed420ac1c027d82deb4113fc025c47b8de2fb7886d3e24344c0a4172dcce1",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=7b51ffce-ec64-4b49-8870-b9666537c541"
                  ],
                  "newProductSpecificFields": [
                    "name",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "dose",
                    "pediatricDose",
                    "administration",
                    "preparation",
                    "infusionProtocol",
                    "clinicalPearls"
                  ],
                  "inheritedFieldsRequiringReview": [
                    "class",
                    "pharmacologicClass",
                    "mechanism",
                    "pharmacodynamics",
                    "pharmacokinetics",
                    "indications",
                    "renalDose",
                    "hepaticDose",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "pregnancy",
                    "lactation",
                    "specialPopulations",
                    "patientEducation",
                    "alerts"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/imuno_corticoide.js",
                    "sourceField": "dexametasona.mcGoldClinicalV1",
                    "lote": "024",
                    "requiredFields": 33,
                    "approvedSha256": "9721657a393121ed360ce59ff910deb7cbb3b0fc3421608349c6fa584237305a",
                    "calculationAuthorized": false,
                    "publicationAuthorized": true,
                    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
                    "ownerPublicationAuthorization": "mission10-owner-confirmed"
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            },
            {
              "id": "budesonida_suspensao_inalatoria",
              "originalRecordMetadata": {
                "ID": "budesonida_suspensao_inalatoria",
                "NOTA_REVISAO_CLINICA": "NOVO CANDIDATO. Não corresponde ao payload ausente do lote 093 e não herda sua homologação.",
                "PROVENIENCIA": {
                  "type": "NEW_RESEARCH_CANDIDATE_NOT_RECOVERED_APPROVAL",
                  "templatePath": "data/drugs/budesonida.json",
                  "templateSha256": "83faa465b16000c39d3c4e9904fab859797107253db21034238feb9f2ea9facd",
                  "sourcesConsulted": "2026-09-21",
                  "primarySources": [
                    "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=1d139a25-9c17-4b3e-8ffd-b2d562cc00ee"
                  ],
                  "newProductSpecificFields": [
                    "name",
                    "commercialNames",
                    "presentation",
                    "presentations",
                    "indications",
                    "dose",
                    "pediatricDose",
                    "hepaticDose",
                    "administration",
                    "preparation",
                    "infusionProtocol"
                  ],
                  "inheritedFieldsRequiringReview": [
                    "class",
                    "pharmacologicClass",
                    "mechanism",
                    "pharmacodynamics",
                    "pharmacokinetics",
                    "renalDose",
                    "commonAdverseEffects",
                    "dangerousAdverseEffects",
                    "adverseEffects",
                    "contraindications",
                    "interactions",
                    "monitoring",
                    "pregnancy",
                    "lactation",
                    "specialPopulations",
                    "patientEducation",
                    "clinicalPearls",
                    "alerts"
                  ],
                  "templateClinicalMetadata": {
                    "status": "PASS_CLINICAL_HOMOLOGATION",
                    "sourceOwner": "database/pneumologia.js",
                    "sourceField": "budesonida.mcGoldClinicalV1",
                    "lote": "012",
                    "requiredFields": 33,
                    "approvedSha256": "33a04a022820507c1688fbebb735cd7d879bc3d0ef30a24f4ed7483f5cac16eb",
                    "calculationAuthorized": false,
                    "publicationAuthorized": true,
                    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
                    "ownerPublicationAuthorization": "mission10-owner-confirmed"
                  }
                },
                "STATES": {
                  "REVISAO_CLINICA": "PENDENTE",
                  "HOMOLOGACAO_DADOS": "NAO",
                  "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                  "INTEGRACAO_TECNICA": "SOMENTE_CANDIDATO",
                  "PUBLICACAO": "BLOQUEADA"
                },
                "calculationAuthorized": false,
                "publicationAuthorized": false
              },
              "states": {
                "REVISAO_CLINICA": "HOMOLOGADA_NOVO_CANDIDATO",
                "HOMOLOGACAO_DADOS": "SIM",
                "AUTORIZACAO_CALCULO": "NAO_AUTORIZADA",
                "INTEGRACAO_RUNTIME": "NAO",
                "INTEGRACAO_TECNICA": "NAO_INICIADA",
                "PUBLICACAO": "BLOQUEADA"
              }
            }
          ]
        }
      },
      "pt": {
        "name": "Budesonida — suspensão para nebulização",
        "class": "Corticosteroide inalatório",
        "pharmacologicClass": "Agonista glicocorticoide anti-inflamatório local",
        "commercialNames": "Budesonide Inhalation Suspension, EUA.",
        "presentation": "Suspensão inalatória em ampolas.",
        "presentations": "0,25 mg/2 mL; 0,5 mg/2 mL.",
        "mechanism": "Agonista glicocorticoide anti-inflamatório local. O efeito deve ser interpretado por indicação, formulação e exposição.",
        "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
        "pharmacokinetics": "Alta depuração de primeira passagem; CYP3A4; meia-vida ~2-3 h.",
        "indications": "Manutenção da asma: 12 meses–8 anos; não trata broncoespasmo agudo.",
        "dose": "Escopo pediátrico; não importar dose de inalador em pó.",
        "pediatricDose": "Broncodilatador prévio: 0,25 mg 2x/dia. Corticoide inalatório prévio: 0,25–0,5 mg 2x/dia. Corticoide oral prévio: 0,5 mg 2x/dia.",
        "renalDose": "Sem ajuste formal; exposição sistêmica usualmente baixa.",
        "hepaticDose": "Metabolismo hepático; monitorar por possível acúmulo.",
        "commonAdverseEffects": "Candidíase oral, disfonia, tosse e cefaleia.",
        "dangerousAdverseEffects": "Broncoespasmo paradoxal, supressão adrenal, redução do crescimento, glaucoma/catarata e infecção.",
        "adverseEffects": "Candidíase oral, disfonia, tosse e cefaleia. Graves: Broncoespasmo paradoxal, supressão adrenal, redução do crescimento, glaucoma/catarata e infecção.",
        "contraindications": "Hipersensibilidade; não usar como tratamento primário de crise/estado de mal asmático.",
        "interactions": "Inibidores fortes CYP3A4 aumentam exposição sistêmica.",
        "monitoring": "Controle, resgate, técnica, crescimento infantil, candidíase, olhos e eixo adrenal em altas doses.",
        "administration": "Nebulizador a jato; não ultrassônico; enxaguar boca.",
        "preparation": "Não presumir compatibilidade para misturas.",
        "infusionProtocol": "Não injetável.",
        "pregnancy": "Experiência em asma é ampla; usar menor dose eficaz.",
        "lactation": "Exposição infantil baixa; geralmente compatível.",
        "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
        "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
        "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
        "guidelineRecommendations": "Esta preparação usa bulas e texto de referência preexistente; não foi feita validação independente de diretrizes.",
        "safetyFlags": "CANDIDATO NOVO: revisão médica pendente; cálculos e publicação bloqueados. CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
        "alerts": "Broncoespasmo paradoxal, supressão adrenal, redução do crescimento, glaucoma/catarata e infecção. Dose bloqueada sem idade, gravidade, terapia prévia, produto/dispositivo e força exatos.",
        "references": [
          "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=54234b7d-3bcc-4809-1881-1d21484856a0",
          "2. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=budesonide+inhalation+suspension",
          "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=1d139a25-9c17-4b3e-8ffd-b2d562cc00ee"
        ],
        "ref": "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=1d139a25-9c17-4b3e-8ffd-b2d562cc00ee"
      },
      "es": {
        "name": "Budesonida — suspensión para nebulización",
        "class": "Corticosteroide inhalado",
        "pharmacologicClass": "Agonista glucocorticoide antiinflamatorio local",
        "commercialNames": "Budesonide Inhalation Suspension, EE.UU.",
        "presentation": "Suspensión inhalatoria en ampollas.",
        "presentations": "0,25 mg/2 mL; 0,5 mg/2 mL.",
        "mechanism": "Agonista glucocorticoide antiinflamatorio local. El efecto debe interpretarse por indicación, formulación y exposición.",
        "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
        "pharmacokinetics": "Alto aclaramiento de primer paso; CYP3A4; semivida ~2-3 h.",
        "indications": "Mantenimiento del asma: 12 meses–8 años; no trata broncoespasmo agudo.",
        "dose": "Alcance pediátrico; no importar dosis de inhalador en polvo.",
        "pediatricDose": "Broncodilatador previo: 0,25 mg 2/día. Corticoide inhalado previo: 0,25–0,5 mg 2/día. Corticoide oral previo: 0,5 mg 2/día.",
        "renalDose": "Sin ajuste formal; exposición sistémica habitualmente baja.",
        "hepaticDose": "Metabolismo hepático; monitorizar por posible acumulación.",
        "commonAdverseEffects": "Candidiasis oral, disfonía, tos y cefalea.",
        "dangerousAdverseEffects": "Broncoespasmo paradójico, supresión suprarrenal, menor crecimiento, glaucoma/catarata e infección.",
        "adverseEffects": "Candidiasis oral, disfonía, tos y cefalea. Graves: Broncoespasmo paradójico, supresión suprarrenal, menor crecimiento, glaucoma/catarata e infección.",
        "contraindications": "Hipersensibilidad; no usar como tratamiento primario de crisis/estado asmático.",
        "interactions": "Inhibidores fuertes CYP3A4 aumentan exposición sistémica.",
        "monitoring": "Control, rescate, técnica, crecimiento infantil, candidiasis, ojos y eje suprarrenal con dosis altas.",
        "administration": "Nebulizador de chorro; no ultrasónico; enjuagar boca.",
        "preparation": "No presumir compatibilidad para mezclas.",
        "infusionProtocol": "No inyectable.",
        "pregnancy": "Experiencia en asma amplia; usar mínima dosis eficaz.",
        "lactation": "Exposición infantil baja; generalmente compatible.",
        "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
        "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
        "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
        "guidelineRecommendations": "Esta preparación usa prospectos y texto de referencia preexistente; no se realizó validación independiente de guías.",
        "safetyFlags": "CANDIDATO NUEVO: revisión médica pendiente; cálculos y publicación bloqueados. CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
        "alerts": "Broncoespasmo paradójico, supresión suprarrenal, menor crecimiento, glaucoma/catarata e infección. Dose bloqueada sem idade, gravidade, terapia prévia, produto/dispositivo e força exatos.",
        "references": [
          "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=54234b7d-3bcc-4809-1881-1d21484856a0",
          "2. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=budesonide+inhalation+suspension",
          "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=1d139a25-9c17-4b3e-8ffd-b2d562cc00ee"
        ],
        "ref": "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=1d139a25-9c17-4b3e-8ffd-b2d562cc00ee"
      }
    }
  }
};
