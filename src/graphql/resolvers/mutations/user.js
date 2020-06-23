import { ApolloError } from 'apollo-server';
import { createUser } from '../../controllers/users/actions/createUser';
import { updateUser } from '../../controllers/users/actions/updateUser';
import { deleteUser } from '../../controllers/users/actions/deleteUser';

export default {
  Mutation: {
    createUser: async (_, args, context, info) => {
      try {
        const user = await createUser(args, info);
        return user;
      } catch (error) {
        throw new ApolloError(error);
      }
    },
    updateUser: async (_, args, context, info) => {
      try {
        const user = await updateUser(args, info);
        return user;
      } catch (error) {
        throw new ApolloError(error);
      }
    },
    deleteUser: async (_, args, context, info) => {
      try {
        const user = await deleteUser(args, info);
        return user;
      } catch (error) {
        throw new ApolloError(error);
      }
    }
  }
};
