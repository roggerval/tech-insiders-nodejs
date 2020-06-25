# Tech Insiders NodeJS

## Administrar Permisos con Graphql

Este es un pequeño proyecto para explicar paso a paso como construir una API con GraphQl tocando los siguientes puntos:

1. Sever, ejemplo inicial de [Apollo Server](https://www.apollographql.com/docs/apollo-server/getting-started/).
2. Types.
3. Queries.
4. Mutations.
5. Inputs.
6. Mappings.
7. Directives.

Nota: cada punto estara en un branch como: feature/1 por ejemplo correspondería al punto 1 Server.

## Instrucciones

1. Clona el repositorio

```bash
git clone git@github.com:roggerval/tech-insiders-nodejs.git
```

2. Instala las dependencias

```bash
yarn
```

3. Copia el contenido de sample.env en un nuevo archivo .env or solo renómbralo.

4. En este proyecto usaremos [docker compose](https://docs.docker.com/compose/install/) para tener una base de datos en Postgresql con la cual interactuar. Para setear la base de datos:

```bash
yarn docker:up
yarn migrate
yarn seed
```

5. Inicia el proyecto:

```bash
yarn start
```

6. Ir a la ruta localhost http://localhost:4001:
