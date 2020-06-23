import { ApolloError } from 'apollo-server';
import { createAccount } from '../../controllers/accounts/actions/createAccount';
import { updateAccount } from '../../controllers/accounts/actions/updateAccount';
import { deleteAccount } from '../../controllers/accounts/actions/deleteAccount';

export default {
  Mutation: {
    createAccount: async (_, args, context, info) => {
      try {
        const account = await createAccount(args, info);
        return account;
      } catch (error) {
        throw new ApolloError(error);
      }
    },
    updateAccount: async (_, args, context, info) => {
      try {
        const account = await updateAccount(args, info);
        return account;
      } catch (error) {
        throw new ApolloError(error);
      }
    },
    deleteAccount: async (_, args, context, info) => {
      try {
        const account = await deleteAccount(args, info);
        return account;
      } catch (error) {
        throw new ApolloError(error);
      }
    }
  }
};
