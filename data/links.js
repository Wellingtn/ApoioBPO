// Arquivo: data/links.js

const linksData = [
    {
        category: "META",
        icon: "building-2",
        description: "Ferramentas corporativas e RH",
        items: [
            { name: "MetaX (TeamCulture)", url: "https://beta.teamculture.com.br/engagement/survey/", icon: "bar-chart-3" },
            { name: "Sênior X", url: "https://platform.senior.com.br/senior-x/#/", icon: "briefcase" },
            { name: "Udemy Business", url: "https://meta.udemy.com/organization/home/", icon: "graduation-cap" },
            { name: "Outlook Web", url: "https://outlook.office365.com/mail/", icon: "mail" },
            { name: "Site da Meta", url: "https://meta.com.br/", icon: "globe" },
            { name: "Meta Hub (Vagas)", url: "https://meta.jobs.recrut.ai/vagas", icon: "user-plus" }
        ]
    },
    {
        category: "SICOOB / Operacional",
        icon: "landmark",
        description: "Links úteis para análise e validação",
        items: [
            { name: "Consulta CNPJ (Receita)", url: "https://solucoes.receita.fazenda.gov.br/Servicos/cnpjreva/Cnpjreva_Solicitacao.asp?", icon: "search-check" },
            { name: "Validar Assinaturas (ITI)", url: "https://validar.iti.gov.br/", icon: "pen-tool" },
            { name: "Simples Nacional", url: "https://www8.receita.fazenda.gov.br/simplesnacional/aplicacoes.aspx?id=21", icon: "calculator" },
            { name: "Portal NFe (Consulta)", url: "https://www.nfe.fazenda.gov.br/portal/consultaRecaptcha.aspx?tipoConsulta=resumo&tipoConteudo=7PhJ%20gAVw2g=&AspxAutoDetectCookieSupport=1", icon: "file-text" },
            { name: "Regramento (SharePoint)", url: "https://grupometa-my.sharepoint.com/:o:/r/personal/mauricio_konig_meta_com_br/_layouts/15/Doc.aspx?sourcedoc=%7Bc25ac0fa-50eb-4c80-a819-1cd9d982f327%7D&action=view&wd=target(PESSOA%20PF.one%7Cf33ebd26-b26b-41b2-b37c-6ac8c7f725a2%2FEstado%20Civil%7Cf522c3d7-570e-4335-8871-b5df988b9978%2F)&wdorigin=NavigationUrl", icon: "book-open" }
        ]
    },
    {
        category: "Suporte & Infraestrutura",
        icon: "headset",
        description: "Abertura de chamados, senhas e contatos",
        items: [
            { 
                name: "Central de Suporte (Telefones)", 
                url: null, // URL nula indica que é apenas informativo
                icon: "phone",
                // Formatação específica para os números
                customHtml: `
                    <div class="mt-3 space-y-3 font-mono text-sm">
                        <div class="flex flex-col">
                            <span class="font-bold text-[var(--accent-color)] uppercase text-xs">VIVO</span>
                            <span>015 61 32178080</span>
                        </div>
                        <div class="flex flex-col">
                            <span class="font-bold text-[var(--accent-color)] uppercase text-xs">CLARO</span>
                            <span>021 61 32178080</span>
                        </div>
                        <div class="flex flex-col">
                            <span class="font-bold text-[var(--accent-color)] uppercase text-xs">TIM</span>
                            <span>041 61 32178080</span>
                        </div>
                    </div>
                `
            },
            { 
                name: "Senha e VPN (Microsoft)", 
                url: "https://passwordreset.microsoftonline.com/passwordreset#!/", 
                icon: "key-round",
                description: "Resetar senha e desbloquear VPN"
            },
            { 
                name: "Central de Serviços (Zoho)", 
                url: "https://accounts.zoho.com/signin?servicename=SDPOnDemand&hide_title=true&hideyahoosignin=true&hidefbconnect=true&hide_secure=true&serviceurl=https%3A%2F%2Fcentrocooperativosicoob.sdpondemand.manageengine.com%2Fapp%2F868994518%2FHomePage.do&signupurl=https://sdpondemand.manageengine.com/AccountCreation.do&portal_id=868994518&org_logo=true&hide_signup=true", 
                icon: "life-buoy",
                warning: "ATENÇÃO: Apenas liderança autorizada. Colaboradores sem acesso não conseguirão abrir o site. Se precisar, chame seu líder."
            }
        ]
    }
];