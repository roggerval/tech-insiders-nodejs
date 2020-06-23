import { mergeResolvers } from 'merge-graphql-schemas';

// queries
import nationalityQuery from './queries/nationality';
import policyQuery from './queries/policy';
import userQuery from './queries/user';
import accountQuery from './queries/account';
import accountUserQuery from './queries/accountUser';

// mutations
import userMutation from './mutations/user';
import accountMutation from './mutations/account';
import accountUserMutation from './mutations/accountUser';

const resolversArray = [
  // Queries
  nationalityQuery,
  policyQuery,
  userQuery,
  accountQuery,
  accountUserQuery,

  // Mutations
  userMutation,
  accountMutation,
  accountUserMutation
];

export const resolvers = mergeResolvers(resolversArray);
