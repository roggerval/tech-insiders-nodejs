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
      @hasPermission(action: "create", resource: "userManage:accountUsers")
      @getAccount
      @getAccountUser
      @getUser
    updateAccountUser(
      id: ID!
      userId: ID
      accountId: ID
      identityPolicyId: ID
      status: String
    ): AccountUser
      @hasPermission(action: "update", resource: "userManage:accountUsers")
      @getAccount
      @getAccountUser
      @getUser
    deleteAccountUser(id: ID!): AccountUser
      @hasPermission(action: "delete", resource: "userManage:accountUsers")
      @getAccount
      @getAccountUser
      @getUser
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
