Feature: Cadastrar usuario

Scenario: Cadastrar usuario com e-mail invalido
Given que acesso a tela de login
And clico em registrar
When informo um e-mail invalido "email_errado.com"
Then o sistema apresenta mensagem "Formato inválido" abaixo do campo de e-mail

Scenario: Cadastrar usuario com e-mail válido
Given que acesso a tela de login
And clico em registrar
And informo um e-mail valido "test@test.com"
And informo o nome "teste jana"
And informo a senha "12345"
And confirmo a senha "12345"
When clico em cadastrar 
Then o sistema informa que "A conta 120-6 foi criada com sucesso"
