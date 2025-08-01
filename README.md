<p align="center">
  <img src="./images/sicoob-seeklogo.png" alt="Sicoob Logo" width="300"/>
</p>

# ApoioBPO – Sistema de Apoio a Processos de BPO

<p align="center">
  <img alt="Versão" src="https://img.shields.io/badge/vers%C3%A3o-1.6.0-blue.svg">
  <img alt="Status" src="https://img.shields.io/badge/status-Em_Desenvolvimento-yellow.svg">
  <img alt="Autor" src="https://img.shields.io/badge/autor-Wellington_Juan_%26_Colaboradores-purple.svg">
</p>

## 📜 Descrição

O ApoioBPO é uma aplicação web front-end projetada para ser uma ferramenta de apoio completa para os analistas de BPO (Business Process Outsourcing) da Meta para suporte às atividades de BPO relacionadas ao Banco Cooperativo Sicoob S.A. O sistema centraliza uma série de calculadoras, consultores e utilitários que visam otimizar, padronizar e agilizar as tarefas diárias de análise e atualização de cadastro, avaliação de renda e gestão de produtividade.

## ✨ Funcionalidades Principais

- Interface Intuitiva: Design moderno com estilo Neumórfico, focado na usabilidade.
- Tema Escuro e Claro: Adaptação visual para preferência do usuário e conforto visual.
- Responsividade: Totalmente funcional em desktops e dispositivos móveis.
- Zero Instalação: Por ser uma aplicação estática, basta abrir o ficheiro index.html num navegador moderno.
- Gráficos de Produtividade: Visualização de dados de atividade para acompanhamento de desempenho.

## 📦 Módulos Detalhados

A ferramenta está organizada nos seguintes módulos:

### 🔹 Módulo: Renda PJ

Calculadoras financeiras para análise de crédito e capacidade de pagamento de Pessoas Jurídicas.

- Cálculo do Simples: Baseado em RBT12, RPA e número de meses.
- Relatório de Faturamento: Soma de faturamentos mensais para obter a renda anual e mensal.
- Semoventes: Cálculo de renda com base na quantidade e valor de rebanhos.
- Notas Fiscais (NF's): Soma de notas fiscais para apuração de renda.
- Quotas: Ferramenta para calcular o valor ou o percentual de quotas societárias.
- FCPR (Formulário de Cadastro de Produtor Rural): Cálculo de renda agrícola e agropecuária.

### 🔹 Módulo: Renda PF

Conjunto de calculadoras para análise de renda de Pessoas Físicas.

- Calculadora Simples: Operações rápidas para mensalizar ou anualizar valores.
- Média de Holerites: Cálculo da média salarial com base em até três comprovantes.
- Soma de Valores: Consolidação de múltiplas fontes de renda e deduções.

### 🔹 Módulo: Consulta CNPJ

Ferramenta de consulta que utiliza uma API pública para obter dados cadastrais de empresas a partir do CNPJ, retornando informações como:

- Razão Social e Nome Fantasia
- Data de Abertura e Situação Cadastral
- Atividade Principal (CNAE)
- Quadro de Sócios e Administradores (QSA)
- Porte da Empresa e Opção pelo Simples Nacional

### 🔹 Módulo: Contador

Utilitário para gestão de tempo e produtividade.

- Contadores Individuais: Múltiplos contadores para diferentes tipos de tarefas.
- Modo Timer: Cronômetros regressivos configuráveis.
- Gráfico de Atividade: Gráfico de barras que exibe a quantidade de atividades registadas por hora, ajudando a visualizar picos de produtividade.

### 🔹 Módulo: Regras

Tabela de consulta rápida com os códigos e regras do Imposto de Renda de Pessoa Física (IRPF). Facilita a identificação de tipos de renda aceites e outras normas fiscais durante a análise.

### 🔹 Módulo: Pareceres

Base de dados com textos padronizados para pareceres de devolução.

- Pesquisa e filtragem por categoria.
- Cópia do texto do parecer com um único clique, garantindo agilidade e padronização.

### 🔹 Módulo: Checklist

Guia interativo para análise de documentos em diferentes fluxos de trabalho.

- Seleção de Fluxo e Documento: O analista escolhe o tipo de fluxo (ex: Endereço, Fonte de Renda) e o documento a ser analisado.
- Visualização de Exemplo: Exibe imagens de exemplo do documento correto.
- Lista de Verificação: Apresenta uma lista de itens a serem validados.
- Geração de Parecer: Ao finalizar, gera automaticamente um parecer de "APROVAR" ou um parecer de devolução consolidado com base nos itens não conformes.

## 🛠️ Tecnologias Utilizadas

- Estrutura: HTML5, CSS3, JavaScript (ES6+)
- Estilização: Tailwind CSS
- Componentes Gráficos: Chart.js para os gráficos de produtividade.
- Ícones: Lucide Icons
- APIs Externas: API pública (publica.cnpj.ws) para a consulta de dados de CNPJ.

## 🚀 Como Utilizar

Esta aplicação está hospedada no GitHub Pages e pode ser acessada diretamente pela URL pública do repositório.

- Acesse a URL do GitHub Pages correspondente ao repositório - https://wellingtn.github.io/ApoioBPO/ .
- A aplicação estará disponível para uso imediato, sem necessidade de download ou instalação.
- Funciona em qualquer navegador moderno (Google Chrome, Firefox, Edge, etc.) e é responsiva para dispositivos móveis.

## 👥 Autoria e Colaboradores

- **Autor Principal e Desenvolvedor:**  
  Wellington Juan Dutra Oliveira

- **Colaboradores (Ideação, Testes e Validação):**  
  Gabriel Artur Lopes Feltes  
  Mauricio Gabriel Freiberger Konig  
  Erika Mendonça Figueira  
  Bruno Corrêa Alves

<p align="center">
© 2025 Wellington Juan Dutra Oliveira e Colaboradores. Todos os direitos reservados.
</p>
