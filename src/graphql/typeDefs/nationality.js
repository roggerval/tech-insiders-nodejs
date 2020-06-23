import { gql } from 'apollo-server';

export default gql`
  type Query {
    getNationalityById(alpha: ID!): Nationality
    getNationalitiesBy(
      numericalCode: Int
      country: String
      iso: String
      alpha2: String
      demonym: String
      demonym2: String
      offset: Int
      limit: Int
    ): [Nationality]
    getCountNationalitiesBy(
      numericalCode: Int
      country: String
      iso: String
      alpha2: String
      demonym: String
      demonym2: String
    ): [Nationality]
    getAllNationalities(offset: Int, limit: Int): [Nationality]
  }

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
