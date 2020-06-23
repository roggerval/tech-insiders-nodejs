import { gql } from 'apollo-server';

export default gql`
  type Account {
    id: ID
    name: String
    displayName: String
    maxUsers: Int
    websiteUrl: String
    organizationScpId: ID
    status: String
  }
`;
