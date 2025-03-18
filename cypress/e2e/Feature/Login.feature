Feature: Login usuario

Scenario 1: Logar com e-mail invalido
Given que acesso a tela de login
When informo um e-mail invalido "email_errado.com"
Then o sistema apresenta mensagem "Formato inválido" abaixo do campo de e-mail

Scenario 2: Logar com e-mail/senha nao cadastrados
Given que acesso a tela de login
And informo um e-mail nao cadastrado"qaqa@test.com"
And informo a senha "12345"
When clico em acessar 
Then o sistema informa que "Usuário ou senha inválido. Tente novamente ou verifique suas informações!"

Scenario 3: Logar com e-mail valido
Given que acesso a tela de login
And informo um e-mail valido "test@test.com"
And informo a senha "12345"
When clico em acessar 
Then o sistema permite o acesso
And apresenta o nome de usuario corretamente
And apresenta a conta correta 

