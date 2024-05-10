## Gen Api 🪄🧶
![GitHub](https://img.shields.io/github/license/luiisp/gen-api)
![GitHub last commit](https://img.shields.io/github/last-commit/luiisp/gen-api)
[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/luiisp/gen-api/blob/main/readme.en.md)

> Speak in English? [Access Readme.md in English](https://github.com/luiisp/gen-api/blob/main/readme.en.md)

*Tag this project with a star 🌟*


Gen Api é um Api RestFul feita utilizando **Node js**, **Express**, **Jest**, **Jwt**, **Swagger** **Docker** e **Prisma**. A api tem como objetivo gerenciar usuários e realizar autenticação segura.

## 🎉 Features

- Testes automatizados com Jest
- Cadastro de usuários
- Documentação com Swagger
- Autenticação de usuários com JWT
- Listagem de usuários + Paginação
- Atualização de usuários
- Deleção de usuários
- Validação de dados com Yup
- Criptografia de senhas com Bcrypt
- Banco de dados Postgres com Prisma + Docker


## 💻 Tecnologias

- **Node Js** (Runtime)
- **Express** (Framework)
- **Prisma** (ORM)
- **Swagger** (Documentação)
- **Docker** + **Postgres** (Banco de dados)
- **Jest** (Testes)
- **JWT**  (Autenticação)
- **Bcrypt** (Criptografia)
- **Yup**  (Validação de dados)


## 📚 Project Structure

O projeto foi estruturado seguindo alguns padrões de arquitetura para melhor organização e escalabilidade.

```
src/
  ├── docs/
  ├── middlewares/
  ├── routes/
  ├── repositorys/
  ├── validations/
  ├── test/
  ├── utils/
  ├── index.js
.env
.docker-compose.yml
.jest.config.js
swagger.js
server.js
```


## Screenshots
> Testes automatizados com Jest

![image](https://github.com/luiisp/gen-api/assets/115284250/4209c9ba-8b10-4a3d-b8fc-1feb7952ba0e)

> Documentação com Swagger

![image](https://github.com/luiisp/gen-api/assets/115284250/05f381f7-7acd-492b-8380-6d117afdc117)


> Validação de dados com Yup

![image](https://github.com/luiisp/gen-api/assets/115284250/16cb99d7-bf8d-4ec8-b4b7-f036db25c3ce)

> Cadastro de usuários

![image](https://github.com/luiisp/gen-api/assets/115284250/e477988d-6668-4469-b755-f3bc05d28175)

> Autenticação de usuários com JWT

![image](https://github.com/luiisp/gen-api/assets/115284250/1909a1ce-b477-48f3-93a7-525c913c509e)

> Listagem de usuários + Paginação

![image](https://github.com/luiisp/gen-api/assets/115284250/90dbc232-6ee8-4adc-9340-782e340888ce)


## ☕ Instalação

- Clone o repositório: `git clone https://github.com/luiisp/gen-api`  

- Entre no diretorio do projeto: `cd gen-api`

- Instale as dependências: `yarn install` ou `npm install`

- Crie um arquivo .env e adicione as variáveis de ambiente conforme o arquivo .env.example

- suba o banco de dados com docker: `docker-compose up -d`

- Execute as migrations: `yarn prisma` ou `npx prisma`

- Inicie o servidor: `yarn dev` ou `npm run dev`

## 👁️‍🗨️ Testes

Para rodar os testes, execute o comando: `yarn test` ou `npm run test`

## 📝 Documentação

Para acessar a documentação da api, acesse o endpoint: `/docs`

Para gerar documentação automaticamente com Swagger, execute o comando: `yarn docs` ou `npm run docs`


## 🧑‍💻 Author
#### Pedro Luis Dias [(Luiisp)](https://github.com/luiisp)  ![https://github.com/luiisp](https://img.shields.io/github/followers/luiisp?style=social)