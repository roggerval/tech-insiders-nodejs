import { gql } from 'apollo-server';

export default gql`
  """
  Este es otro comentario
  """
  type Query {
    users: [User]
  }

  # Este es un comentario
  type User {
    id: ID
    name: String
    email: String
    nickname: String
    firstName: String
    lastName1: String
    lastName2: String
    addressLine1: String
    addressLine2: String
    imageUrl: String
    phoneNumber: String
    nationalityId: ID
    status: String
  }
`;
