## Docker
```console
docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

docker image ls

docker start b2fcd079c1d4
```

## ElephantSQL
ElephantSQL is a PostgreSQL database hosting service. Esse modelo de Cloud PostgreSQL também é conhecido como ElephantSQL ou PostgreSQL as a Service que é um metodo gerenciado de banco de dados na Cloud. ... Após as seleções acima, a instância com o banco de dados estará criada e disponível para acesso direto

## PostBird
O Postbird é um cliente gráfico e multiplataforma do gerenciador de banco de dados PostgreSQL. Com ele você pode gerenciar extensões, procedimentos, usuários, tabelas de filtros, editar valores, importar ou exportar tabelas ou bancos de dados.

## Sequelize
Diferente do TypeORM, o Sequelize é o ORM desse projeto, há um banco de dados criado pelo ElephantSQL que está no ar, o PostBird é o sistema de gerenciamento (SGBD) desse banco postgres, de primeira é necessário configurar o .sequelizerc para definir os caminhos que o ORM vai procurar os arquivos. E na database.js, criamos nossa conexão ao banco de dados.

```console
npx sequelize migration:create --name=create-users   
npx sequelize db:migrate
npx sequelize db:migrate:undo
```