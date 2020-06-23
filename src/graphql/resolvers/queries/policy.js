import { ApolloError } from 'apollo-server';
import { getAllPolicies } from '../../controllers/policies/actions/getAllPolicies';
import { getCountPoliciesBy } from '../../controllers/policies/actions/getCountPoliciesBy';
import { getPolicyById } from '../../controllers/policies/actions/getPolicyById';
import { getPoliciesBy } from '../../controllers/policies/actions/getPoliciesBy';

const Query = {
  getAllPolicies: async (_, args, context, info) => {
    try {
      const policies = await getAllPolicies(args, info);
      return policies;
    } catch (error) {
      throw new ApolloError(error);
    }
  },
  getCountPoliciesBy: async (_, args, context, info) => {
    try {
      const policies = await getCountPoliciesBy(args);
      return policies;
    } catch (error) {
      throw new ApolloError(error);
    }
  },
  getPolicyById: async (_, args, context, info) => {
    try {
      const policy = await getPolicyById(args, info);
      return policy;
    } catch (error) {
      throw new ApolloError(error);
    }
  },
  getPoliciesBy: async (_, args, context, info) => {
    try {
      const policies = await getPoliciesBy(args, info);
      return policies;
    } catch (error) {
      throw new ApolloError(error);
    }
  }
};

export default { Query };
