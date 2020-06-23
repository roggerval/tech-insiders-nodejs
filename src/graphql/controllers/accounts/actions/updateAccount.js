import { Account } from '../../../../services/objection/models/Account/Account';
import { getFields, replaceFields } from '../../utils';
import { ACCOUNT_MAPPINGS } from '../utils/constants';

export const updateAccount = ({ id, ...args }, info) => {
  const fields = replaceFields(getFields(info), ACCOUNT_MAPPINGS);
  return Account.query()
    .patch(args)
    .where('id', id)
    .whereNotDeleted()
    .returning(fields)
    .first();
};
