## Gen Api 🪄🧶
![GitHub](https://img.shields.io/github/license/luiisp/gen-api)
![GitHub last commit](https://img.shields.io/github/last-commit/luiisp/gen-api)
[![pt_br](https://img.shields.io/badge/lang-pt_br-red.svg)](https://github.com/luiisp/gen-api/blob/main/readme.md)


*Tag this project with a star 🌟*

Gen Api is a RestFul Api made using **Node js**, **Express**, **Jest**, **Jwt**, **Swagger**, **Docker**, and **Prisma**. The api aims to manage users and perform secure authentication.

## 🎉 Features

- Automated tests with Jest
- User registration
- Documentation with Swagger
- User authentication with JWT
- User listing + Pagination
- User update
- User deletion
- Data validation with Yup
- Password encryption with Bcrypt
- Postgres database with Prisma + Docker

## 💻 Technologies

- **Node Js** (Runtime)
- **Express** (Framework)
- **Prisma** (ORM)
- **Swagger** (Documentation)
- **Docker** + **Postgres** (Database)
- **Jest** (Testing)
- **JWT**  (Authentication)
- **Bcrypt** (Encryption)
- **Yup**  (Data Validation)

## 📚 Project Structure

The project was structured following some architecture patterns for better organization and scalability.

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

> Automated tests with Jest

![image](https://github.com/luiisp/gen-api/assets/115284250/4209c9ba-8b10-4a3d-b8fc-1feb7952ba0e)

> Documentation with Swagger

![image](https://github.com/luiisp/gen-api/assets/115284250/05f381f7-7acd-492b-8380-6d117afdc117)

> Data validation with Yup

![image](https://github.com/luiisp/gen-api/assets/115284250/16cb99d7-bf8d-4ec8-b4b7-f036db25c3ce)

> User registration

![image](https://github.com/luiisp/gen-api/assets/115284250/e477988d-6668-4469-b755-f3bc05d28175)

> User authentication with JWT

![image](https://github.com/luiisp/gen-api/assets/115284250/1909a1ce-b477-48f3-93a7-525c913c509e)

> User listing + Pagination

![image](https://github.com/luiisp/gen-api/assets/115284250/90dbc232-6ee8-4adc-9340-782e340888ce)

## ☕ Installation

- Clone the repository: `git clone https://github.com/luiisp/gen-api`  

- Navigate to the project directory: `cd gen-api`

- Install dependencies: `yarn install` or `npm install`

- Create a .env file and add the environment variables according to the .env.example file

- Start the database with Docker: `docker-compose up -d`

- Run the migrations: `yarn prisma` or `npx prisma`

- Start the server: `yarn dev` or `npm run dev`

## 👁️‍🗨️ Tests

To run the tests, execute the command: `yarn test` or `npm run test`

## 📝 Documentation

To access the api documentation, access the endpoint: `/docs`

To generate documentation automatically with Swagger, execute the command: `yarn docs` or `npm run docs`

## 🧑‍💻 Author

#### Pedro Luis Dias [(Luiisp)](https://github.com/luiisp)  ![https://github.com/luiisp](https://img.shields.io/github/followers/luiisp?style=social)
