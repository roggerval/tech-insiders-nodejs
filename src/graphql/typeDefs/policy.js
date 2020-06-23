import { gql } from 'apollo-server';

export default gql`
  type Query {
    getPolicyById(id: ID!): Policy
      @hasPermission(action: "getById", resource: "roles:policies")
      @getAccount
      @getAccountUser
      @getUser
    getPoliciesBy(
      name: String
      status: String
      description: String
      offset: Int
      limit: Int
    ): [Policy]
      @hasPermission(action: "getBy", resource: "roles:policies")
      @getAccount
      @getAccountUser
      @getUser
    getAllPolicies(offset: Int, limit: Int): [Policy]
      @hasPermission(action: "getAll", resource: "roles:policies")
      @getAccount
      @getAccountUser
      @getUser
    getCountPoliciesBy(name: String, status: String, description: String): Int
      @hasPermission(action: "getCountBy", resource: "roles:policies")
      @getAccount
      @getAccountUser
      @getUser
  }

  type Mutation {
    createPolicy(
      name: String!
      description: String!
      permissions: [PermissionInput!]!
      statusId: Int
    ): Policy
      @hasPermission(action: "create", resource: "roles:policies")
      @getAccount
      @getAccountUser
      @getUser
    updatePolicy(
      id: ID!
      name: String
      description: String
      permissions: [PermissionInput!]
      statusId: Int
    ): Policy
      @hasPermission(action: "update", resource: "roles:policies")
      @getAccount
      @getAccountUser
      @getUser
    deletePolicy(id: ID!): Policy
      @hasPermission(action: "delete", resource: "roles:policies")
      @getAccount
      @getAccountUser
      @getUser
  }

  type Policy {
    id: ID
    name: String
    description: String
    permissions: [Permission]
    status: String
  }

  type Permission {
    effect: String
    resource: [String!]
    action: [String!]
    notResource: [String!]
    notAction: [String!]
  }

  input PermissionInput {
    effect: String
    resource: [String!]
    action: [String!]
    notResource: [String!]
    notAction: [String!]
  }
`;
