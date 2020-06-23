import { gql } from 'apollo-server';

export default gql`
  type Nationality {
    alpha: ID
    numericalCode: Int
    country: String
    iso: String
    alpha2: String
    demonym: String
    demonym2: String
  }
`;
