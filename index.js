import { ApolloServer } from 'apollo-server';
import { typeDefs } from './src/graphql/typeDefs';
import { resolvers } from './src/graphql/resolvers';
import { schemaDirectives } from './src/graphql/resolvers/directives';
import db from './src/services/objection/config/db';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  schemaDirectives,
  context: ({ req }) => {
    db.init();

    return {
      authorization: req.headers.authorization
    };
  }
});

server.listen({ port: process.env.PORT }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
