import { Account } from '../../../../services/objection/models/Account/Account';
import { getFields, replaceFields } from '../../utils';
import { ACCOUNT_MAPPINGS } from '../utils/constants';

export const getAccountById = ({ id }, info) => {
  const fields = replaceFields(getFields(info), ACCOUNT_MAPPINGS);
  return Account.query()
    .findById(id)
    .whereNotDeleted()
    .select(fields);
};
