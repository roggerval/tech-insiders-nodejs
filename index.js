import { ApolloServer } from 'apollo-server';
import { typeDefs } from './src/graphql/typeDefs';
import { resolvers } from './src/graphql/resolvers';
import db from './src/services/objection/config/db';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    db.init();
    return {};
  }
});

server.listen({ port: process.env.PORT }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
