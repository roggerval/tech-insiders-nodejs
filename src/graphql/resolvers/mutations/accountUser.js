import { ApolloError } from 'apollo-server';
import { createAccountUser } from '../../controllers/accountUsers/actions/createAccountUser';
import { updateAccountUser } from '../../controllers/accountUsers/actions/updateAccountUser';
import { deleteAccountUser } from '../../controllers/accountUsers/actions/deleteAccountUser';

export default {
  Mutation: {
    createAccountUser: async (_, args, context, info) => {
      try {
        const accountUser = await createAccountUser(args, info);
        return accountUser;
      } catch (error) {
        throw new ApolloError(error);
      }
    },
    updateAccountUser: async (_, args, context, info) => {
      try {
        const accountUser = await updateAccountUser(args, info);
        return accountUser;
      } catch (error) {
        throw new ApolloError(error);
      }
    },
    deleteAccountUser: async (_, args, context, info) => {
      try {
        const accountUser = await deleteAccountUser(args, info);
        return accountUser;
      } catch (error) {
        throw new ApolloError(error);
      }
    }
  }
};
