import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('que acesso a tela de login', () => {
    cy.visit('https://bugbank.netlify.app/');
});

Given('clico em registrar', () => {
    cy.get('button').contains('Registrar').click();
});

When('informo um e-mail invalido {string}', (emailInvalido) => {
    cy.get('input[name="email"]').type(emailInvalido);
});

// mensagem de formato invalido
Then('o sistema apresenta mensagem {string} abaixo do campo de e-mail', (mensagemErro) => {
    cy.get('input__warning')  // Seleciona o elemento <p> com a classe input__warning
      .should('be.visible')     // Verifica se a mensagem de erro está visível
      .and('have.text', 'Formato inválido');  // Verifica se o texto é "Formato inválido"
});


// e-mail valido

When('informo um e-mail valido {string}', (emailValido) => {
    cy.get('input[name="email"]').type(emailValido);
});

When('informo o nome {string}', (nome) => {
    cy.get('input[name="name"]').type(nome);
});

When('informo a senha {string}', (senha) => {
    cy.get('input[name="password"]').type(senha);
});

When('confirmo a senha {string}', (confirmarSenha) => {
    cy.get('input[name="confirmPassword"]').type(confirmarSenha);
});

When('clico em cadastrar', () => {
    cy.get('button').contains('Cadastrar').click();
});

Then('o sistema informa que {string}', (mensagemSucesso) => {
    cy.contains(mensagemSucesso).should('be.visible');
});


