# Node.js API de Autenticação com JWT 🚀

Uma API simples para autenticação de usuários em Node.js usando Express, com registro e login, e criptografia de senhas.

## 📝 Funcionalidades

- **Registro de Usuários**: Permite que novos usuários se registrem fornecendo nome, e-mail e senha.
- **Login de Usuários**: Autentica usuários registrados usando e-mail e senha.
- **Criptografia de Senhas**: As senhas são armazenadas de forma segura, usando criptografia para proteger as credenciais dos usuários.

## 📦 Estrutura do Projeto
```
nodejs-api-jwt/
├── server.js               # Ponto de entrada do servidor
├── .env                    # Configurações de variáveis de ambiente
├── models/
│   └── userModel.js        # Arquivo com a lógica de registro e login de usuários
├── routes/
│   └── userRoutes.js       # Arquivo com as rotas para registrar e logar usuários
└── package.json            # Dependências e scripts do projeto
````
## 🚀 Tecnologias Utilizadas
- Node.js:
- Express:
- bcryptjs: Para criptografia de senhas
- dotenv: Para gerenciar variáveis de ambiente

## 🛠️ Pré-requisitos
- Certifique-se de ter o Node.js instalado na sua máquina.

## 📦 Instalação
1. Clone o repositório:
````
git clone https://github.com/paulo-moretti/task-manager.git

2. Navegue até a pasta do projeto:
````
cd nodejs-api-jwt
````
3. Instale as dependências:
````
npm install
````
4. Crie um arquivo .env na raiz do projeto e adicione as seguintes configurações:
````
PORT=5000
JWT_SECRET=sua_chave_secreta_supersegura
````
5. Inicie o servidor:
````
node server.js
````
### Se tudo estiver correto, você verá a mensagem:
````
Servidor rodando na porta 5000
````
## 🧑‍💻 Uso
1. Registro de Usuário
- Método: POST
- URL: http://localhost:5000/api/usuarios/registrar
-Corpo da Requisição (JSON):
````
{
  "nome": "João Silva",
  "email": "joao@example.com",
  "senha": "minhasenha123"
}
````
- Resposta Esperada:
````
{
  "mensagem": "Usuário registrado com sucesso!",
  "usuario": {
    "nome": "João Silva",
    "email": "joao@example.com"
  }
}
````
2. Login de Usuário
- Método: POST
- URL: http://localhost:5000/api/usuarios/login
- Corpo da Requisição (JSON):
````
{
  "email": "joao@example.com",
  "senha": "minhasenha123"
}
````
- Resposta Esperada:
````
{
  "mensagem": "Login realizado com sucesso!",
  "usuario": {
    "nome": "João Silva",
    "email": "joao@example.com"
  }
}
````
## 🤝 Contribuições
Contribuições são bem-vindas! Se você tiver sugestões, melhorias ou encontrar bugs, sinta-se à vontade para criar uma issue ou enviar um pull request.

---

© 2024 Paulo Eduardo Moretti. Todos os direitos reservados.
