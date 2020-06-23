import { ApolloError } from 'apollo-server';
import { getAllAccountUsers } from '../../controllers/accountUsers/actions/getAllAccountUsers';
import { getCountAccountUsersBy } from '../../controllers/accountUsers/actions/getCountAccountUsersBy';
import { getAccountUserById } from '../../controllers/accountUsers/actions/getAccountUserById';
import { getAccountUsersBy } from '../../controllers/accountUsers/actions/getAccountUsersBy';

const Query = {
  getAllAccountUsers: async (_, args, context, info) => {
    try {
      const accountUsers = await getAllAccountUsers(args, info);
      return accountUsers;
    } catch (error) {
      throw new ApolloError(error);
    }
  },
  getCountAccountUsersBy: async (_, args, context, info) => {
    try {
      const accountUsers = await getCountAccountUsersBy(args);
      return accountUsers;
    } catch (error) {
      throw new ApolloError(error);
    }
  },
  getAccountById: async (_, args, context, info) => {
    try {
      const accountUser = await getAccountUserById(args, info);
      return accountUser;
    } catch (error) {
      throw new ApolloError(error);
    }
  },
  getAccountUsersBy: async (_, args, context, info) => {
    try {
      const accountUsers = await getAccountUsersBy(args, info);
      return accountUsers;
    } catch (error) {
      throw new ApolloError(error);
    }
  }
};

export default { Query };
