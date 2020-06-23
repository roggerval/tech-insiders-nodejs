import { gql } from 'apollo-server';

export default gql`
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
`;
