import { ApolloError } from 'apollo-server';

export default {
  Account: {
    AccountUsers: async (account, args, context, info) => {
      try {
        const accountUsers = await account.$relatedQuery('accountUsers');
        return accountUsers;
      } catch (error) {
        throw new ApolloError(error);
      }
    },
    OrganizationSCP: async (account, args, context, info) => {
      try {
        const organizationSCP = await account.$relatedQuery('organizationSCP');
        return organizationSCP;
      } catch (error) {
        throw new ApolloError(error);
      }
    }
  }
};
