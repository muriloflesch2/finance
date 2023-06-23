# Yahoo Finance Project

## Buildar o projeto:
FRONT
- acessar a pasta /FRONT
- npm i
- npm run start

BACKEND
- acesssar a pasta /BACK-PROXY
- npm i
- node index.js


## Comentários gerais sobre o projeto:

1) A API do yahoo finance não está aberta para acessos de frontends através de outros dominios ocasionando erro de CORS. Para contornar este problema foi necessário criar um servidor node para servir como PROXY. Este mesmo servidor acessa a api e retorna para o front local.

2) Com o objetivo de utilizar o máximo de recursos do Angular, criei duas paginas (Home e Chart) que personalizam os graficos ancorando os dados no QUERYPARAMS das páginas.

3) Foi implementada a criação de um componente chamado FORM para demonstrar a criação personalizada de compoentes e a arquitetura de pastas utilizada nestas situações.

## Funcionalidades que seriam implementadas em seguida:

1) Validação nos formulários e tratamento de erros.


