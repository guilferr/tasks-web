## Pré-Requisitos para aplicação

1. Crie um banco de dados de nome a sua escolha no Postgres com as configurações padrão
2. Copie o arquivo .env.example na raiz do projeto e renomeie-o para .env
3. Altere o valor das variáveis para seu ambiente. Ex: PORT=3001
	> A variável TOKEN_KEY receberá uma palavra a sua escolha
4. Verifique se o Node.js está instalado na máquina com o comando:
```sh
node -v
```
5. Caso não tenha o Node.js instalado na máquina, baixe em <https://nodejs.org/en> e instale-o
6. Com o Node.js instalado, execute o comando para instalar as libs:
```sh
npm i
```
ou, com o Yarn (caso esteja instalado):
```sh
yarn
```
7. Para que a estrutura do banco seja criada e o servidor seja iniciado, execute:
```sh
npm run dev
```
ou, com o Yarn (caso esteja instalado):
```sh
yarn dev
```

## Utilize com Docker

1. Copie o arquivo .env.example na raiz do projeto e renomeie-o para .env
2. Altere o valor das variáveis para seu ambiente.
	> A variável TOKEN_KEY receberá uma palavra a sua escolha
	
	> As variáveis DB_HOST e DB_PORT devem ter os valores: db e 5432
3. Construa a imagem da aplicação:
```sh
docker build . -t my-app
```
4. Em seguida, construa os contêineres:
```sh
docker compose up -d
```
5. A aplicação estará sendo executada na porta configurada no arquivo env

## Libs Adicionadas

### Dev dependencies
- eslint: Linter de código para forçar um código limpo e organizado
- husky: Lib para gerenciar Git Hooks e executar scripts nos hooks
- commitlint: Lib para forçar o linting das mensagens de commits de acordo com conventional changelog
- lint-staged: Lib para exexcutar linting do Eslint nos arquivos typescript
- nodemon: Lib para reiniciar o servidor quando houver alguma mudança de código
- npm-run-all: Lib usada para executar vários scripts seguidos
- shelljs: Lib para copiar os arquivos EJS para a pasta dist, porque os arquivos EJS não são transpilados como os arquivos Typescript
- ts-node: Lib que permite executar arquivos Typescript sem transpilar

### Dependencies
- bcryptjs: Lib usada para encriptar a senha e gerar o salto de encriptação
- cookie-parser: Lib que permite o uso de cookies da requisição feita ao servidor
- dotenv: Lib que permite a utilização de variáveis de ambiente
- ejs: Template engine que renderiza as views no lado do cliente
- express: Framework que permite a criação de um servidor Node de forma mais simples e rápida
- jsonwebtoken: Lib usada para criar os tokens de autenticação do usuário
- pg: Lib para manipular os dados do banco de dados
- typeorm e reflect-metadata: ORM que permite a criação de migrations e manipulação de vários tipos de bancos de dados de forma simples.
