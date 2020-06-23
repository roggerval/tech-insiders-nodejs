import { Account } from '../../../../services/objection/models/Account/Account';
import { getFields, replaceFields } from '../../utils';
import { ACCOUNT_MAPPINGS } from '../utils/constants';

export const getAccountsBy = ({ orderBy, limit, offset, ...args }, info) => {
  const fields = replaceFields(getFields(info), ACCOUNT_MAPPINGS);
  return Account.query()
    .select(fields)
    .where(args)
    .whereNotDeleted()
    .customOrderBy(orderBy, [{ column: 'created_at', order: 'desc' }])
    .customPagination(limit, offset);
};
