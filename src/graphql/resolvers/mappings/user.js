import { ApolloError } from 'apollo-server';

export default {
  User: {
    Nationality: async (user, args, context, info) => {
      try {
        const nationality = await user.$relatedQuery('nationality');
        return nationality;
      } catch (error) {
        throw new ApolloError(error);
      }
    }
  }
};
