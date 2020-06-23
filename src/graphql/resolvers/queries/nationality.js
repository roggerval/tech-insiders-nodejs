import { ApolloError } from 'apollo-server';
import { getAllNationalities } from '../../controllers/nationalities/actions/getAllNationalities';
import { getCountNationalitiesBy } from '../../controllers/nationalities/actions/getCountNationalitiesBy';
import { getNationalityById } from '../../controllers/nationalities/actions/getNationalityById';
import { getNationalitiesBy } from '../../controllers/nationalities/actions/getNationalitiesBy';

const Query = {
  getAllNationalities: async (_, args, context, info) => {
    try {
      const nationalities = await getAllNationalities(args, info);
      return nationalities;
    } catch (error) {
      throw new ApolloError(error);
    }
  },
  getCountNationalitiesBy: async (_, args, context, info) => {
    try {
      const nationalities = await getCountNationalitiesBy(args);
      return nationalities;
    } catch (error) {
      throw new ApolloError(error);
    }
  },
  getNationalityById: async (_, args, context, info) => {
    try {
      const nationality = await getNationalityById(args, info);
      return nationality;
    } catch (error) {
      throw new ApolloError(error);
    }
  },
  getNationalitiesBy: async (_, args, context, info) => {
    try {
      const nationalities = await getNationalitiesBy(args, info);
      return nationalities;
    } catch (error) {
      throw new ApolloError(error);
    }
  }
};

export default { Query };
