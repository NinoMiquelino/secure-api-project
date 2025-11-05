## 🙋‍♂️ Autor

<div align="center">
  <img src="https://avatars.githubusercontent.com/ninomiquelino" width="100" height="100" style="border-radius: 50%">
  <br>
  <strong>Onivaldo Miquelino</strong>
  <br>
  <a href="https://github.com/ninomiquelino">@ninomiquelino</a>
</div>

---

# 🔐 API-Segura-JWT-com-PHP-e-VanillaJS

![PHP](https://img.shields.io/badge/PHP-8.0+-777BB4.svg?style=for-the-badge&logo=php&logoColor=white)
![PHPMailer](https://img.shields.io/badge/PHPMailer-SMTP-6B46C1.svg?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC.svg)
![License MIT](https://img.shields.io/badge/License-MIT-green)
![Status Stable](https://img.shields.io/badge/Status-Stable-success)
![Version 1.0.0](https://img.shields.io/badge/Version-1.0.0-blue)
![GitHub stars](https://img.shields.io/github/stars/NinoMiquelino/secure-api-project?style=social)
![GitHub forks](https://img.shields.io/github/forks/NinoMiquelino/secure-api-project?style=social)
![GitHub issues](https://img.shields.io/github/issues/NinoMiquelino/secure-api-project)

> 🚀 **Exemplo prático e funcional de integração segura entre Front-end (Vanilla JS) e Back-end corporativo (PHP) utilizando autenticação API RESTful com JSON Web Tokens (JWT).**

Este projeto demonstra a arquitetura clássica de segurança para APIs, onde o acesso a dados corporativos sensíveis (PHP) é rigorosamente controlado através de tokens de autenticação (JWT) emitidos e validados pelo lado do servidor. O Front-end (JavaScript) é o cliente que gerencia o ciclo de vida do token.

---

## 🎯 Objetivo do Projeto

* **Back-end:** Criar uma API em PHP (puro, com Composer) capaz de:
    * Receber credenciais e validá-las.
    * Emitir um **JSON Web Token (JWT)** na rota de login.
    * Proteger rotas sensíveis utilizando um **Middleware de validação de JWT**.
* **Front-end:** Criar uma plataforma visual (HTML/CSS/Vanilla JS) capaz de:
    * Enviar credenciais para obter o token.
    * Armazenar o token de forma segura (localStorage, neste exemplo).
    * Fazer requisições seguras enviando o token no cabeçalho `Authorization: Bearer <token>`.

## ⚙️ Tecnologias Utilizadas

| Componente | Tecnologia | Detalhes |
| :--- | :--- | :--- |
| **Back-end/API** | **PHP** | Lógica de servidor, validação e emissão de tokens. |
| **Autenticação** | **JWT (JSON Web Tokens)** | Padrão stateless para autorização. |
| **Dependência PHP** | `firebase/php-jwt` | Biblioteca para codificação e decodificação do token. |
| **Front-end** | **HTML5, CSS3, Vanilla JS** | Interface e lógica do cliente (`fetch` API). |

## 📦 Estrutura do Repositório

```
secure-api-project/
├──📁 api/                  # Back-end PHP (Lógica da API e JWT)
│   ├── config.php        # Chave Secreta e CORS
│   ├── auth_service.php  # Funções de criação e validação JWT
│   ├── login.php         # Endpoint POST para Autenticação
│   └── protected_data.php # Endpoint GET que exige JWT
├──📁 client/               # Front-end JavaScript (Plataforma Visual)
│    ├── index.html        # Página de Login e Dashboard (com Tailwind/Font Awesome)
│    └── app.js            # Lógica de consumo da API e gerenciamento do token
├── README.md
└── .gitignore    
```

## 🚀 Como Rodar o Projeto

### Pré-requisitos

1.  Um servidor web local com suporte a PHP (ex: **XAMPP**, **WAMP**, **MAMP** ou `php -S`).
2.  **Composer** (Gerenciador de dependências do PHP).

### 1 - Clonar o Repositório

```bash
git clone [https://github.com/NinoMiquelino/secure-api-php-js-jwt.git](https://github.com/NinoMiquelino/secure-api-php-js-jwt.git)
cd secure-api-php-js-jwt
```

2 - Configurar o Back-end (API)

​Entre na pasta da API e instale as dependências PHP via Composer:
```bash
cd api
composer install
```

3 - Iniciar o Servidor Local

​Certifique-se de que a pasta secure-api-php-js-jwt esteja acessível pelo seu servidor web (ex: htdocs do XAMPP).
​Se estiver usando o servidor embutido do PHP (para fins de teste):

```bash
# Na pasta raiz do projeto (secure-api-php-js-jwt)
php -S localhost:8080 
```

4 - Acessar o Front-end

​Abra a página do cliente no seu navegador:
​🔗 URL de Acesso: http://localhost/secure-api-php-js-jwt/client/index.html (ou http://localhost:8080/client/index.html se usar o servidor embutido).

```bash

```

### Seções "Credenciais de Teste" e "Fluxo de Segurança"

```markdown
## 🔑 Credenciais de Teste

Use estas credenciais para testar o fluxo de autenticação na tela de login:

| Campo | Valor |
| :--- | :--- |
| **Usuário** | `admin` |
| **Senha** | `senha123` |

## 🔒 Fluxo de Segurança (JWT)

1.  O cliente (JS) envia credenciais via `POST` para `api/login.php`.
2.  O `login.php` verifica e **cria** um JWT.
3.  O token é retornado ao JS e armazenado no `localStorage`.
4.  O JS faz requisições para `api/protected_data.php` **incluindo o token** no cabeçalho `Authorization: Bearer <token>`.
5.  O PHP (via `auth_service.php`) **decodifica e verifica** o token (assinatura e expiração).
6.  Se o token for **válido**, os dados são retornados (Status 200). Se for **inválido**, a requisição é rejeitada (Status 401).

---

## 🤝 Contribuições
Contribuições são sempre bem-vindas!  
Sinta-se à vontade para abrir uma [*issue*](https://github.com/NinoMiquelino/secure-api-project/issues) com sugestões ou enviar um [*pull request*](https://github.com/NinoMiquelino/secure-api-project/pulls) com melhorias.

---

## 💬 Contato
📧 [Entre em contato pelo LinkedIn](https://www.linkedin.com/in/onivaldomiquelino/)  
💻 Desenvolvido por **Onivaldo Miquelino**

---
