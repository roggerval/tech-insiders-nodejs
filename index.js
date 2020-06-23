import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  # Este es un comentario
  type User {
    names: String
    lastNames: String
  }

  """
  Este es otro comentario
  """
  type Query {
    users: [User]
  }
`;

const server = new ApolloServer({ typeDefs });

server.listen({ port: process.env.PORT }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
