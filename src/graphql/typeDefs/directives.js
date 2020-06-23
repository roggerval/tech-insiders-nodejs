import { gql } from 'apollo-server';

export default gql`
  directive @getAccount on FIELD_DEFINITION

  directive @getAccountUser on FIELD_DEFINITION

  directive @getUser on FIELD_DEFINITION

  directive @hasPermission(
    action: String!
    resource: String!
    param: String
  ) on FIELD_DEFINITION
`;
