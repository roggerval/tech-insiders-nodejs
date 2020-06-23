import { gql } from 'apollo-server';

export default gql`
  type Query {
    getAccountById(id: ID!): Account
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
    getAllAccounts(offset: Int, limit: Int): [Account]
    getCountAccountsBy(
      name: String
      displayName: String
      maxUsers: Int
      websiteUrl: String
      organizationScpId: ID
      status: String
    ): [Account]
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
    updateAccount(
      id: ID!
      name: String
      displayName: String
      maxUsers: Int
      websiteUrl: String
      organizationScpId: ID
      status: String
    ): Account
    deleteAccount(id: ID!): Account
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
