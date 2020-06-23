import { ApolloError } from 'apollo-server';
import { createPolicy } from '../../controllers/policies/actions/createPolicy';
import { updatePolicy } from '../../controllers/policies/actions/updatePolicy';
import { deletePolicy } from '../../controllers/policies/actions/deletePolicy';

export default {
  Mutation: {
    createPolicy: async (_, args, context, info) => {
      try {
        const policy = await createPolicy(args, info);
        return policy;
      } catch (error) {
        throw new ApolloError(error);
      }
    },
    updatePolicy: async (_, args, context, info) => {
      try {
        const policy = await updatePolicy(args, info);
        return policy;
      } catch (error) {
        throw new ApolloError(error);
      }
    },
    deletePolicy: async (_, args, context, info) => {
      try {
        const policy = await deletePolicy(args, info);
        return policy;
      } catch (error) {
        throw new ApolloError(error);
      }
    }
  }
};
