const checklistData = {
    "flows": {
        "bem_novo": { "icon": "🏠", "name": "Bem Novo", "documents": {} },
        "certidao": {
            "icon": "📄",
            "name": "Certidão",
            "documents": {
                "caf_pronaf": {
                    "name": "CAF Pronaf",
                    "icon": "📄",
                    "imageUrl": "./documents/certidao/caf_pronaf/caf_pronaf.jpg",
                    "checklist": {
                        "O documento é valido?": "DOCUMENTO INVÁLIDO",
                        "O número do documento está correto?": "NUMERO DO DOCUMENTO",
                        "A data de emissão está dentro do prazo?": "PRAZO DE VALIDADE",
                        "O titular do documento tem vinculo com o associado?": "VÍNCULO NÃO ENCONTRADO"
                    }
                }
            } 
        },
        "endereco": { 
            "icon": "📍",
            "name": "Endereço",
            "documents": {
                "conta_energia": { 
                    "name": "Conta de Energia", 
                    "icon": "⚡",
                    "imageUrls": ["./documents/endereco/conta_energia/conta_energia_1.jpg", "./documents/endereco/conta_energia/conta_energia_2.jpg"],
                    "checklist": {
                        "O documento é valido?": "DOCUMENTO INVÁLIDO",
                        "O logradouro está correto?": "LOGRADOURO",
                        "O número do endereço é valido?": "NUMERO",
                        "A data de emissão está dentro do prazo?": "PRAZO DE VALIDADE",
                        "O titular do documento tem vinculo com o associado?": "VÍNCULO NÃO ENCONTRADO"
                    }
                },
                "conta_internet": {
                    "name": "Conta de Internet",
                    "icon": "🌐",
                    "imageUrl": "./documents/endereco/conta_internet/conta_internet.jpg",
                    "checklist": {
                        "O documento é valido?": "DOCUMENTO INVÁLIDO",
                        "O logradouro está correto?": "LOGRADOURO",
                        "O número do endereço é valido?": "NUMERO",
                        "A data de emissão está dentro do prazo?": "PRAZO DE VALIDADE",
                        "O titular do documento tem vinculo com o associado?": "VÍNCULO NÃO ENCONTRADO"
                    }
                },
                "recibo_do_pagador": {
                    "name": "Recibo do Pagador",
                    "icon": "📄",
                    "imageUrl": "./documents/endereco/recibo_do_pagador/recibo_do_pagador.jpg",
                    "checklist": {
                        "O documento é valido?": "DOCUMENTO INVÁLIDO",
                        "O logradouro está correto?": "LOGRADOURO",
                        "O número do endereço é valido?": "NUMERO",
                        "A data de emissão está dentro do prazo?": "PRAZO DE VALIDADE",
                        "O titular do documento tem vinculo com o associado?": "VÍNCULO NÃO ENCONTRADO"
                    }
                },
                "cartao_cnpj": {
                    "name": "Cartão CNPJ",
                    "icon": "📄",
                    "imageUrl": "./documents/endereco/cartao_cnpj/cartao_cnpj.jpg",
                    "checklist": {
                        "O documento é valido?": "DOCUMENTO INVÁLIDO",
                        "O tipo de endereço é valido?": "TIPO DE ENDEREÇO",
                        "O logradouro está correto?": "LOGRADOURO",
                        "O número do endereço é valido?": "NÚMERO",
                    }
                }
            }
         },
        "fonte_de_renda": { 
            "icon": "💰", 
            "name": "Fonte de Renda", 
            "documents": {
                "declaracao_de_renda": { 
                    "name": "Declaração de Renda", 
                    "icon": "📝", 
                    "imageUrl": "./documents/renda/declaracao_renda/declaracao_renda.jpg",
                    "checklist": {
                        "O tipo de renda está correto?": "TIPO DE RENDA INCORRETO",
                        "O valor da renda está correto?": "RENDA MENSAL INVÁLIDA",
                        "O documento é válido?": "DOCUMENTO INVÁLIDO",
                        "A data de emissão está dentro do prazo?": "PRAZO DE VALIDADE",
                        "As assinaturas estão corretas?": "ASSINATURAS INVÁLIDAS"
                    }
                },
                "pgdas_d" : {
                    "name": "PGDAS-D",
                    "icon": "📄",
                    "imageUrls": ["./documents/renda/pgdas_d/pgdas_d.jpg",
                                  "./documents/renda/pgdas_d/recibo_pgdas_d.jpg",
                                  "./documents/renda/pgdas_d/comprovante_opcao_simples.jpg"],
                    "checklist": {
                        "O tipo de renda está correto?": "TIPO DE RENDA INCORRETO",
                        "O documento esta correto?": "DOCUMENTO INVÁLIDO",
                        "A data de emissão está dentro do prazo?": "PRAZO DE VALIDADE",
                        "O calculo está correto no sisbr?":"CÁLCULO DO SIMPLES",
                        "Foi anexado o comprovante do simples":"CONSULTA DE OPÇÃO DO SIMPLES",
                        "A opção do simples está correta?":"CAMPO 'OPTANTE DO SIMPLES'"
                    }
                },
                "extrato_simples": {
                    "name": "Extrato do simples",
                    "icon": "🏪",
                    "imageUrls": ["./documents/renda/extrato_simples/extrato_simples_1.jpg",
                                  "./documents/renda/extrato_simples/extrato_simples_2.jpg",
                                  "./documents/renda/extrato_simples/extrato_simples_3.jpg",
                                  "./documents/renda/extrato_simples/comprovante_opcao_simples.jpg"],
                    "checklist": {
                        "O tipo de renda está correto?": "TIPO DE RENDA INCORRETO",
                        "O documento esta correto?": "DOCUMENTO INVÁLIDO",
                        "A data de emissão está dentro do prazo?": "PRAZO DE VALIDADE",
                        "O calculo está correto no sisbr?":"CÁLCULO DO SIMPLES",
                        "Foi anexado o comprovante do simples":"CONSULTA DE OPÇÃO DO SIMPLES",
                        "A opção do simples está correta?":"CAMPO 'OPTANTE DO SIMPLES'"
                    }   
                },
                "relatorio_inss":{
                    "name": "Relatório INSS",
                    "icon": "👴",
                    "imageUrl": ["./documents/renda/relatorio_inss/relatorio_inss.jpg"],
                    "checklist": {
                        "O tipo de renda está correto?": "TIPO DE RENDA INCORRETO",
                        "O valor da renda está correto?": "RENDA MENSAL INVÁLIDA",
                        "O documento esta correto?": "DOCUMENTO INVÁLIDO",
                        "A data de emissão está dentro do prazo?": "PRAZO DE VALIDADE",
                    }
                }, 
                "holerite":{
                    "name": "Holerite",
                    "icon": "📃",
                    "imageUrls": ["./documents/renda/holerite/holerite_1.jpg",
                                  "./documents/renda/holerite/holerite_2.jpg"],
                    "checklist": {
                        "O tipo de renda está correto?": "TIPO DE RENDA INCORRETO",
                        "O valor da renda está correto?": "RENDA MENSAL INVÁLIDA",
                        "O documento esta correto?": "DOCUMENTO INVÁLIDO",
                        "A data de emissão está dentro do prazo?": "PRAZO DE VALIDADE",
                    }
                },
                "declaracao_inss":{
                    "name": "Declaração INSS",
                    "icon": "👵",
                    "imageUrl": "./documents/renda/declaracao_inss/declaracao_inss.jpg",
                    "checklist": {
                        "O tipo de renda está correto?": "TIPO DE RENDA INCORRETO",
                        "O valor da renda está correto?": "RENDA MENSAL INVÁLIDA",
                        "O documento esta correto?": "DOCUMENTO INVÁLIDO",
                        "A data de emissão está dentro do prazo?": "PRAZO DE VALIDADE",
                    }
                },
                "Notas Fiscais":{
                    "name": "Notas Fiscais",
                    "icon": "📄",
                    "imageUrls": ["./documents/renda/nota_fiscal/nota_fiscal.jpg","./documents/renda/nota_fiscal/recibo_nf.jpg"],
                    "checklist": {
                        "O tipo de renda está correto?": "TIPO DE RENDA INCORRETO",
                        "O valor da renda está correto?": "RENDA MENSAL INVÁLIDA",
                        "O documento esta correto?": "DOCUMENTO INVÁLIDO",
                        "A data de emissão está dentro do prazo?": "PRAZO DE VALIDADE",
                    }
                },
                "extrato_pagamento": {
                    "name": "Extrato de pagamento",
                    "icon": "📄",
                    "imageUrls": ["./documents/renda/extrato_pagamento/extrato_pagamento_1.jpg", "./documents/renda/extrato_pagamento/extrato_pagamento_2.jpg"],
                    "checklist": {
                        "O tipo de renda está correto?": "TIPO DE RENDA INCORRETO",
                        "O valor da renda está correto?": "RENDA MENSAL INVÁLIDA",
                        "O documento esta correto?": "DOCUMENTO INVÁLIDO",
                        "A data de emissão está dentro do prazo?": "PRAZO DE VALIDADE",
                    }
                },
                "fcpr": {
                    "name": "FCPR",
                    "icon": "🚜",
                    "imageUrls": ["./documents/renda/fcpr/fcpr_1.jpg", "./documents/renda/fcpr/fcpr_2.jpg","./documents/renda/fcpr/caf_pronaf.jpg", "./documents/renda/planilha_rebanho/comprovante_assinatura.jpg"],
                    "checklist": {
                        "O tipo de renda está correto?": "TIPO DE RENDA INCORRETO",
                        "O valor da renda está correto?": "RENDA MENSAL INVÁLIDA",
                        "O documento esta correto?": "DOCUMENTO INVÁLIDO",
                        "A data de emissão está dentro do prazo?": "PRAZO DE VALIDADE",
                        "O documento está assinado?": "ASSINATURAS FALTANTES"
                    }
                },
                "planilha_rebanho": {
                    "name": "Planilha de Rebanho",
                    "icon": "🐑",
                    "imageUrls": ["./documents/renda/planilha_rebanho/planilha_rebanho.jpg", "./documents/renda/planilha_rebanho/comprovante_assinatura.jpg"],
                    "checklist": {
                        "O tipo de renda está correto?": "TIPO DE RENDA INCORRETO",
                        "O valor da renda está correto?": "RENDA MENSAL INVÁLIDA",
                        "O documento esta correto?": "DOCUMENTO INVÁLIDO",
                        "A data de emissão está dentro do prazo?": "PRAZO DE VALIDADE",
                        "O documento está assinado?": "ASSINATURAS FALTANTES"
                    }
                }
            }
        },
        "tributacao": { "icon": "🧾", "name": "Tributação", "documents": {} },
        "pessoa": { 
            "icon": "🧑",
            "name": "Pessoa",
            "documents": {
                "cnh_digital":{
                    "name": "CNH Digital",
                    "icon": "🚗",
                    "imageUrl": "./documents/pessoa/cnh_digital/cnh_digital.jpg",
                    "checklist": {
                        "O documento é válido?": "DOCUMENTO INVÁLIDO",
                        "O tipo de documento é correto?": "TIPO DE DOCUMENTO",
                        "O número do documento é correto?": "NÚMERO DO DOCUMENTO",
                        "A data de emissão é correta?": "DATA DE EMISSÃO",
                        "O orgão expedidor é correto?": "ÓRGÃO EXPEDIDOR",
                        "A uf de emissão é correta?": "UF DO ÓRGÃO EXPEDIDOR",
                        "O estado civil é correto?": "ESTADO CIVIL",
                        "A naturalidade é correta?": "NATURALIDADE",
                    }
                },
                "alteracao_contratual": {
                    "name": "Alteração Contratual",
                    "icon": "📄",
                    "imageUrls": ["./documents/pessoa/alteracao_contratual/alteracao_contratual_1.jpg",
                                  "./documents/pessoa/alteracao_contratual/alteracao_contratual_2.jpg",
                                  "./documents/pessoa/alteracao_contratual/alteracao_contratual_3.jpg",
                                  "./documents/pessoa/alteracao_contratual/alteracao_contratual_4.jpg",
                                  "./documents/pessoa/alteracao_contratual/alteracao_contratual_5.jpg",
                                  "./documents/pessoa/alteracao_contratual/alteracao_contratual_6.jpg",
                                  "./documents/pessoa/alteracao_contratual/termo_autenticacao.jpg"],
                    "checklist": {
                        "Possui documentos na aba 'Novo'?": "APROVAÇÃO SEM VALIDAÇÃO",
                        "A data de constituição está correta?": "DATA DE CONSTITUIÇÃO",
                        "O número de registro no órgão competente está correto?": "NÚMERO DE REGISTRO NO ÓRGÃO COMPETENTE",
                        "A data de registro no órgão competente está correta?": "DATA DE REGISTRO NO ÓRGÃO COMPETENTE",
                        "O número da última alteração do contrato social está correto?": "NÚMERO DA ÚLTIMA ALTERAÇÃO DO CONTRATO SOCIAL",
                        "A data da última alteração do contrato social está correta?": "DATA DA ÚLTIMA ALTERAÇÃO DO CONTRATO SOCIAL",
                        "O número do contrato social está correto?": "NÚMERO DO CONTRATO SOCIAL",
                        "O capital social está correto?": "CAPITAL SOCIAL",
                        "A inscrição estadual está correta?": "INSCRIÇÃO ESTADUAL",
                        "Opção MEI está correta?": "OPÇÃO MEI",
                    }
                }
            }
        },
        "produtividade": { "icon": "📊", "name": "Produtividade", "documents": {} },
        "produtor": { "icon": "🌾", "name": "Produtor", "documents": {} },
        "relacionamento": { "icon": "🤝", "name": "Relacionamento", "documents": {} },
        "responsavel": { "icon": "👨‍💼", "name": "Responsável", "documents": {} }
    }
};
