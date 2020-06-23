import { ApolloError } from 'apollo-server';

export default {
  AccountUser: {
    Account: async (accountUser, args, context, info) => {
      try {
        const account = await accountUser.$relatedQuery('account');
        return account;
      } catch (error) {
        throw new ApolloError(error);
      }
    },
    User: async (accountUser, args, context, info) => {
      try {
        const user = await accountUser.$relatedQuery('user');
        return user;
      } catch (error) {
        throw new ApolloError(error);
      }
    },
    IdentityPolicy: async (accountUser, args, context, info) => {
      try {
        const identityPolicy = await accountUser.$relatedQuery(
          'identityPolicy'
        );
        return identityPolicy;
      } catch (error) {
        throw new ApolloError(error);
      }
    }
  }
};
