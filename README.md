# Venturus technical challenge

### Back-end : Node.js
create the endpoints to the CRUD from entitiy bellow:
--Equipments (model:string, category: string enum (cartucho, toner), ppm:
integer from 0 to 999999, wifi: booleano, consumption: real from 0 to 999999)
ppm: page per minute
--Required information: model and category

- Database: sqlite3
- Back-end: Node.js
- Source code in English

## Installation

Use the package manager [npm](https://docs.npmjs.com/) to run the challenge.

```bash
npm install
npx knex migrate:latest
```

## Usage

```bash
npm start
```
After the command, the server will be running at localhost:3333 .

## Routes

Routes avaliable:

- GET: localhost:3333/equipments
- POST: localhost:3333/equipments
- PUT: localhost:3333/equipments/:id
- DELETE: localhost:3333/equipments/:id

## Test

```bash
npm test
```

## Information

### Libraries used:

- celebrate
- cross-env
- express
- knex
- sqlite3
- jest
- nodemon
- supertest
