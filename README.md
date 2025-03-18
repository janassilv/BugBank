# qaaliare
---

# Avaliação Técnica - Aliare - Automação de Testes End-to-End para BugBank

Este projeto tem como objetivo automatizar testes end-to-end para o site [BugBank](https://bugbank.netlify.app/) utilizando a abordagem BDD (Behavior-Driven Development). O Cypress é o framework utilizado para rodar os testes, enquanto o Cucumber, integrado com o pre-processador `@badeball/cypress-cucumber-preprocessor`, é utilizado para escrever os cenários de teste em Gherkin. Os testes são executados no navegador Microsoft Edge.

## Tecnologias Utilizadas

- **Cypress**: Framework de testes end-to-end.
- **Cucumber**: Framework de BDD para definição de comportamento.
- **Gherkin**: Linguagem para escrever os cenários de teste.
- **@badeball/cypress-cucumber-preprocessor**: Integração do Cucumber com Cypress.
- **Microsoft Edge**: Navegador utilizado para a execução dos testes.

## Como Rodar o Projeto

### Pré-requisitos

Antes de rodar o projeto, você precisa ter o seguinte instalado:

- **Node.js** (versão 14 ou superior)
- **NPM** ou **Yarn** (gerenciadores de pacotes)

### Passos para Configuração

1. **Clonar o repositório**:

   ```bash
   git clone https://github.com/janassilv/qaaliare.git
   cd qaaliare
   ```

2. **Instalar as dependências**:

   Se estiver usando o NPM:

   ```bash
   npm install
   ```

   Ou, se preferir o Yarn:

   ```bash
   yarn install
   ```

3. **Configuração do Cypress**:

   A configuração padrão do Cypress já deve estar funcional. Caso precise personalizar, edite o arquivo `cypress.json`.

4. **Configuração do Cucumber**:

   O Cucumber foi integrado ao Cypress com o pre-processador `@badeball/cypress-cucumber-preprocessor`. Não há necessidade de configurações adicionais.

5. **Rodar os testes**:

   Para rodar os testes no navegador Edge, basta executar o comando:

   ```bash
   npx cypress open
   ```

   Isso vai abrir a interface do Cypress, onde você pode escolher o navegador Edge e rodar os testes.

## Estrutura do Projeto

- **Feature Files (Gherkin)**: Cenários de teste estão definidos nas `.feature`, descrevendo o cenário de teste e resultado esperado0.
- **Step Definitions**: Os testes reais são definidos nos arquivos de definições das steps, que mapeiam as etapas descritas nas Features.
