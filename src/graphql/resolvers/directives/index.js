import { hasPermissionDirective } from './hasPermission';
import { getUserDirective } from './getUser';
import { getAccountUserDirective } from './getAccountUser';
import { getAccountDirective } from './getAccount';

const schemaDirectives = {
  hasPermission: hasPermissionDirective,
  getUser: getUserDirective,
  getAccountUser: getAccountUserDirective,
  getAccount: getAccountDirective
};

export { schemaDirectives };
