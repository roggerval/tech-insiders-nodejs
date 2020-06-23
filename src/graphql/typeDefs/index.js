import { mergeTypes } from 'merge-graphql-schemas';

// import directives
import directives from './directives';

import accountTypes from './account';
import accountUserTypes from './accountUser';
import nationalityTypes from './nationality';
import policyTypes from './policy';
import userTypes from './user';

const typesArray = [
  directives,
  nationalityTypes,
  policyTypes,
  userTypes,
  accountTypes,
  accountUserTypes
];

export const typeDefs = mergeTypes(typesArray, {
  all: true
});
