import { gql } from 'apollo-server';

export default gql`
  type Query {
    getAccountUserById(id: ID!): AccountUser
    getAccountUsersBy(
      userId: ID
      accountId: ID
      identityPolicyId: ID
      status: String
      offset: Int
      limit: Int
    ): [AccountUser]
    getAllAccountUsers(offset: Int, limit: Int): [AccountUser]
    getCountAccountUsersBy(
      userId: ID
      accountId: ID
      identityPolicyId: ID
      status: String
    ): Int
  }

  type AccountUser {
    id: ID
    userId: ID
    accountId: ID
    identityPolicyId: ID
    status: String
  }
`;
