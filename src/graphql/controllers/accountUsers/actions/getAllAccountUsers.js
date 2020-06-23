import { AccountUser } from '../../../../services/objection/models/AccountUser/AccountUser';
import { getFields, replaceFields } from '../../utils';
import { ACCOUNT_USER_MAPPINGS } from '../utils/constants';

export const getAllAccountUsers = ({ orderBy, limit, offset }, info) => {
  const fields = replaceFields(getFields(info), ACCOUNT_USER_MAPPINGS);
  return AccountUser.query()
    .select(fields)
    .whereNotDeleted()
    .customOrderBy(orderBy, [{ column: 'created_at', order: 'desc' }])
    .customPagination(limit, offset);
};
