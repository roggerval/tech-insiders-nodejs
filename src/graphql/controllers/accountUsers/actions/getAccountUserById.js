import { AccountUser } from '../../../../services/objection/models/AccountUser/AccountUser';
import { getFields, replaceFields } from '../../utils';
import { ACCOUNT_USER_MAPPINGS } from '../utils/constants';

export const getAccountUserById = ({ id }, info) => {
  const fields = replaceFields(getFields(info), ACCOUNT_USER_MAPPINGS);
  return AccountUser.query()
    .findById(id)
    .whereNotDeleted()
    .select(fields);
};
