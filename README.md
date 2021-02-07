# desafio-aevo

Criar uma conta FREE na API Weatherstack (https://weatherstack.com/) para a consulta dos dados climáticos(não é necessário pagar nada pelo cadastro!)

Explorar a Documentação da API (https://weatherstack.com/documentation), para detalhes de utilização. Podem se limitar apenas a primeira requisição http://api.weatherstack.com/current!!!

Elaborar uma página para consultar e exibir as informações da requisição da API na página

Adicionar um input na página para permitir a busca por diferentes regiões.

## About

This project uses heroku pipelines to manage and autodeploy from this repository.

This is only the backend of the project.
You can find a deployed version on:

for staging changes:
https://desafio-aevo-backend-staging.herokuapp.com/

for production version:
https://desafio-aevo-backend.herokuapp.com/

Also, you can find the frontend, already linked with the backend, on:

staging changes:
https://desafio-aevo-front-stataging.herokuapp.com/

production version:
https://desafio-aevo-frontend.herokuapp.com/

Be warned that due to Heroku cold start, the first load might feel sluggish.

## install

Install production dependencies using:

> npm install --only=prod

## Run

You'll need a .env file at the root directory with the following environment variables:

API_KEY=YourWeatherstackAPIKeyHere
MONGO_CONNECTION_STRING=YourProductionMongoDBConnectionStringHere
MONGO_TEST_DB=YourTestingMongoDBConnectionStringHere

Run with:

> npm start

## Test

Install dev dependencies using:

> npm install --only=dev

And run tests using mocha, chai and sinon, with:

> npm test

Dont forget to have your MONGO_TEST_DB and your API_KEY, setup on your environment, since there are tests which will need those.

# Docs

This application has only two endpoints:

1. > /api/current
2. > /api/city-search-history

## /api/current

This route can deal with post requests with a JSON body containing "city" as the key, and a valid city name, optionally followed with the location and country seppared with commas, as a string, and will respond with the current temperature on the chosen location.

Ex:
POST request to /api/current with {"city": "Curitiba, Parana, Brasil"} as the body, will respond with the current weather at Curitiba.

## /api/city-search-history

GET requests to this route will be responded with the six most searched cities, their state, country and search count number.
