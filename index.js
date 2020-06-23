import { ApolloServer } from 'apollo-server';
import { typeDefs } from './src/graphql/typeDefs';

const server = new ApolloServer({ typeDefs });

server.listen({ port: process.env.PORT }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
