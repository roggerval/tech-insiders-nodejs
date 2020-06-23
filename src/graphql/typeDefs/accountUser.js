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

  type Mutation {
    createAccountUser(
      userId: ID!
      accountId: ID!
      identityPolicyId: ID!
      status: String
    ): AccountUser
    updateAccountUser(
      id: ID!
      userId: ID
      accountId: ID
      identityPolicyId: ID
      status: String
    ): AccountUser
    deleteAccountUser(id: ID!): AccountUser
  }

  type AccountUser {
    id: ID
    userId: ID
    accountId: ID
    identityPolicyId: ID
    status: String
    IdentityPolicy: Policy
    User: User
    Account: Account
  }
`;
