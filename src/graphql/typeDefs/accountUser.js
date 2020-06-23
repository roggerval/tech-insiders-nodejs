import { gql } from 'apollo-server';

export default gql`
  type AccountUser {
    id: ID
    userId: ID
    accountId: ID
    identityPolicyId: ID
    status: String
  }
`;
