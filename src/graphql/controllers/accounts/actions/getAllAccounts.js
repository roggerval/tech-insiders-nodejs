import { Account } from '../../../../services/objection/models/Account/Account';
import { getFields, replaceFields } from '../../utils';
import { ACCOUNT_MAPPINGS } from '../utils/constants';

export const getAllAccounts = ({ orderBy, limit, offset }, info) => {
  const fields = replaceFields(getFields(info), ACCOUNT_MAPPINGS);
  return Account.query()
    .select(fields)
    .whereNotDeleted()
    .customOrderBy(orderBy, [{ column: 'created_at', order: 'desc' }])
    .customPagination(limit, offset);
};
