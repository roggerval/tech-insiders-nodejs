import { mergeResolvers } from 'merge-graphql-schemas';

// queries
import nationalityQuery from './queries/nationality';
import policyQuery from './queries/policy';
import userQuery from './queries/user';
import accountQuery from './queries/account';
import accountUserQuery from './queries/accountUser';

const resolversArray = [
  // Queries
  nationalityQuery,
  policyQuery,
  userQuery,
  accountQuery,
  accountUserQuery
];

export const resolvers = mergeResolvers(resolversArray);
