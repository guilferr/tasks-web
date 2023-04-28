# Processo seletivo - QA

Bem vindo, candidato. 

Estamos felizes que você esteja participando do processo seletivo para a vaga de QA do Senai - Soluções Digitais.

A prova deverá utilizar as seguintes tecnologias: 
- Linguagem de programação orientada a objeto para web
- Banco de dados relacional
- GIT

Fica à sua escolha quais frameworks e servidor serão utilizados, desde que seja uma aplicação web. 

Na etapa da entrevista deverá ser apresentado a aplicação em funcionamento.

## Instruções para a execução da prova

A prova deve ser uma aplicação web. Você pode escolher a tecnologia que achar conveniente (PHP, JAVA, etc...).

O Banco utilizado na prova deve ser PostgrSQL.

Esse repositório possui apenas esse Readme com as instruções da prova. No entanto, **todo desenvolvimento deve ser commitado nesse repositório** até a data citada no email, enviado por nossa equipe.

Commite nesse repositório o script utilizado na criação do banco de dados (se aplicável).

Por fim, altere esse arquivo com as instruções de como poderemos testar o seu código (quais libs usar, qual servidor, etc) abaixo.

## Será avaliado
- Qualidade do código quanto a:
  - Facilidade no entedimento
  - Complexidade ciclomática
  - Divisão de resposabilidade das classes
  - Reutilização de código
- Qualidade quanto a interface:
  - Fácil usabilidade
  - Acessibilidade
  - Feedback ao usuário
- Qualidade quanto aos requisitos:
  - Desenvolvimento e funcionamento dos requisitos propostos.

## Informações extras

- Descreva ao final deste documento (Readme.md) o detalhamento de funcionalidades implementadas, sejam elas já descritas na modelagem e / ou extras.
- Detalhar também as funcionalidades que não conseguiu implementar e o motivo.
- Caso tenha adicionado novas libs ou frameworks, descreva quais foram e porque dessa agregação.

(Escreva aqui as instruções para que possamos corrigir sua prova, bem como qualquer outra observação sobre a prova que achar pertinente compartilhar)

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

## Funcionalidades implementadas

### RNF1
Banco de dados criado através de migrations geradas com TypeORM e excutadas pela mesma lib. Inserção de dados iniciais também por migrations.

### RNF2
Linguagem usada: Javascript com TypeScript e servidor Node.JS

### RNF3
Foi utilizado o framework Express para a construção do servidor Node

### RNF4
Aplicação monolito

### RNF5
Projetado com o banco Postgres

### RF1
- Foi criada uma página de registro que é possível acessar do login. Registra um novo usuário no banco de dados, salvando login, senha criptografada com bcryptJs e salt gerado pela mesma lib.

- A página de login utiliza tokens JWT para menter o usuário autenticado. Implementado através da lib jsonwebtoken. Foi construído um middleware que busca o usuário que está no token e passa para a variável locals do Express e outro que faz a validação da rota se o usuário está autenticado.

### RF2
- 2.1. Link criado em html , mas chama rota do servidor para redirecionar para a outra página
- 2.2. Listagem está sendo feita e filtro aplicado
- 2.3. Paginação criada de acordo com o total de resultados. A página 1 é igual a rota /home inicial e a partir da segunda passam os próximos valores. A página em que o usuário está é desabilitada nos links e também é limitado a 10 páginas das páginas mostradas. Quando chegar na 10ª página, a primeira desaparecerá.
- 2.4. Link criado e destacado assim como os outros
- 2.6. A tabela mostra os registros do usuário logado com a cor warning do Bootstrap, que é usado para estilizar a aplicação.

### RF3
- 3.1. Todos o campos solicitados são obrigatórios
- 3.2. Caixa de lista suspensa criada e preenchida com os dados do banco, mostrando os dados com a template engine EJS
- 3.3. Caixa de lista suspensa criada e preenchida com os dados do banco, mostrando os dados com a template engine EJS
- 3.4. Parcialmente completa. É possível digitar rich text no textarea, mas o editor em si não consegui implementar.
- 3.5. Dados estão sendo salvos e usuário sendo obtido através do token que está nos cookies. Os cookies são acessíveis em razão da lib cookie-parser.
- 3.6. Botão que apenas redireciona para a home.
- 3.7. Parcialmente completa. O usuário é redirecionado para a home, mas não consegui implementar a mensagem.

### RF4
- 4.1. Todas as informações foram obtidas através do banco de dados e preenchidas na tela com o EJS.
- 4.2. O botão só é mostrado para o usuário que a tarefa não é dele e também que está aberta. O usuário responsável é trocado pelo usuário que está logado.
- 4.3. O botão só é mostrado para o usuário que a tarefa pertence a ele e aberta. Ao clicar no botão finalizar, o placeholder do textarea de observação é alterado informando que deve ser escrita e salva a providência final e depois de finalizar, redireciona para a home.
- 4.4. O campo fica somente leitura.
- 4.5.1. Parcialmente completa. Não está completa por causa do editor de rich text, mas o campo bloqueia quando é devido.
- 4.5.2. As informações solicitadas são salvas e o bloqueio está ocorrendo quando o usuário logado não for o responsável pela tarefa e a tarefa estiver concluída.
- 4.5.3. Observações listadas na ordem correta, com todos os dados e link de edição com validações implementadas. Além disso, quando é clicado em editar, a observação aparece no textarea e é possível editá-la.

## Funcionalidades não implementadas

- 2.5. Não consegui mostrar o toast de registro inserido. Tive muitos problemas com a autenticação e demorei demais nessa função. Não encontrei uma forma simples de adicionar o toast para que funcionasse com a template engine do EJS e o Bootstrap. Adicionei alguns campos de mensagens em algumas telas para que fosse possível ver erros.

- Também não consegui criar o editor de rich text. Não encontrei uma solução viável que funcionasse para mostrar esse editor.

## Funcionalidades extras

- Foi implementada uma tela de registro
- Um cabeçalho com botão de deslogar

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