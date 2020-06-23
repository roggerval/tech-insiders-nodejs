import { gql } from 'apollo-server';

export default gql`
  type Query {
    getPolicyById(id: ID!): Policy
    getPoliciesBy(
      name: String
      status: String
      description: String
      offset: Int
      limit: Int
    ): [Policy]
    getAllPolicies(offset: Int, limit: Int): [Policy]
    getCountPoliciesBy(name: String, status: String, description: String): Int
  }

  type Mutation {
    createPolicy(
      name: String!
      description: String!
      permissions: [PermissionInput!]!
      statusId: Int
    ): Policy
    updatePolicy(
      id: ID!
      name: String
      description: String
      permissions: [PermissionInput!]
      statusId: Int
    ): Policy
    deletePolicy(id: ID!): Policy
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
