import { ApolloError } from 'apollo-server';
import { getAllAccounts } from '../../controllers/accounts/actions/getAllAccounts';
import { getCountAccountsBy } from '../../controllers/accounts/actions/getCountAccountsBy';
import { getAccountById } from '../../controllers/accounts/actions/getAccountById';
import { getAccountsBy } from '../../controllers/accounts/actions/getAccountsBy';

const Query = {
  getAllAccounts: async (_, args, context, info) => {
    try {
      const accounts = await getAllAccounts(args, info);
      return accounts;
    } catch (error) {
      throw new ApolloError(error);
    }
  },
  getCountAccountsBy: async (_, args, context, info) => {
    try {
      const accounts = await getCountAccountsBy(args);
      return accounts;
    } catch (error) {
      throw new ApolloError(error);
    }
  },
  getAccountById: async (_, args, context, info) => {
    try {
      const account = await getAccountById(args, info);
      return account;
    } catch (error) {
      throw new ApolloError(error);
    }
  },
  getAccountsBy: async (_, args, context, info) => {
    try {
      const accounts = await getAccountsBy(args, info);
      return accounts;
    } catch (error) {
      throw new ApolloError(error);
    }
  }
};

export default { Query };
