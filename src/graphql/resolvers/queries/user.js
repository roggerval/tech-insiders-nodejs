import { ApolloError } from 'apollo-server';
import { getAllUsers } from '../../controllers/users/actions/getAllUsers';
import { getCountUsersBy } from '../../controllers/users/actions/getCountUsersBy';
import { getUserById } from '../../controllers/users/actions/getUserById';
import { getUsersBy } from '../../controllers/users/actions/getUsersBy';

const Query = {
  getAllUsers: async (_, args, context, info) => {
    try {
      const users = await getAllUsers(args, info);
      return users;
    } catch (error) {
      throw new ApolloError(error);
    }
  },
  getCountUsersBy: async (_, args, context, info) => {
    try {
      const users = await getCountUsersBy(args);
      return users;
    } catch (error) {
      throw new ApolloError(error);
    }
  },
  getUserById: async (_, args, context, info) => {
    try {
      const user = await getUserById(args, info);
      return user;
    } catch (error) {
      throw new ApolloError(error);
    }
  },
  getUsersBy: async (_, args, context, info) => {
    try {
      const users = await getUsersBy(args, info);
      return users;
    } catch (error) {
      throw new ApolloError(error);
    }
  }
};

export default { Query };
