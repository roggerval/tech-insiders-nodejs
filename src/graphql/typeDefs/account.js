import { gql } from 'apollo-server';

export default gql`
  type Query {
    getAccountById(id: ID!): Account
      @hasPermission(action: "getById", resource: "userManage:accounts")
      @getAccount
      @getAccountUser
      @getUser
    getAccountsBy(
      name: String
      displayName: String
      maxUsers: Int
      websiteUrl: String
      organizationScpId: ID
      status: String
      offset: Int
      limit: Int
    ): [Account]
      @hasPermission(action: "getBy", resource: "userManage:accounts")
      @getAccount
      @getAccountUser
      @getUser
    getAllAccounts(offset: Int, limit: Int): [Account]
      @hasPermission(action: "getAll", resource: "userManage:accounts")
      @getAccount
      @getAccountUser
      @getUser
    getCountAccountsBy(
      name: String
      displayName: String
      maxUsers: Int
      websiteUrl: String
      organizationScpId: ID
      status: String
    ): [Account]
      @hasPermission(action: "getCountBy", resource: "userManage:accounts")
      @getAccount
      @getAccountUser
      @getUser
  }

  type Mutation {
    createAccount(
      name: String!
      displayName: String
      maxUsers: Int
      websiteUrl: String
      organizationScpId: ID
      status: String
    ): Account
      @hasPermission(action: "create", resource: "userManage:accounts")
      @getAccount
      @getAccountUser
      @getUser
    updateAccount(
      id: ID!
      name: String
      displayName: String
      maxUsers: Int
      websiteUrl: String
      organizationScpId: ID
      status: String
    ): Account
      @hasPermission(action: "update", resource: "userManage:accounts")
      @getAccount
      @getAccountUser
      @getUser
    deleteAccount(id: ID!): Account
      @hasPermission(action: "delete", resource: "userManage:accounts")
      @getAccount
      @getAccountUser
      @getUser
  }

  type Account {
    id: ID
    name: String
    displayName: String
    maxUsers: Int
    websiteUrl: String
    organizationScpId: ID
    status: String
    AccountUsers: [AccountUser]
    OrganizationSCP: Policy
  }
`;
