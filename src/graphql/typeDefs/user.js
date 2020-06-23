import { gql } from 'apollo-server';

export default gql`
  """
  Este es otro comentario
  """
  type Query {
    """
    Este comentario sirve para documentar la query
    """
    getAllUsers(offset: Int, limit: Int): [User]
    getCountUsersBy(
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
    ): Int
    getUserById(id: ID!): User
    getUsersBy(
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
      offset: Int
      limit: Int
    ): [User]
  }

  # Este es un comentario
  """
  Este comentario sirve para documentar el type
  """
  type User {
    """
    Este comentario sirve para documentar el atributo del type
    """
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
