import { User } from '../../../../services/objection/models/User/User';
import { getFields, replaceFields } from '../../utils';
import { USER_MAPPINGS } from '../utils/constants';

export const getAllUsers = ({ orderBy, limit, offset }, info) => {
  const fields = replaceFields(getFields(info), USER_MAPPINGS);
  return User.query()
    .select(fields)
    .whereNotDeleted()
    .customOrderBy(orderBy, [{ column: 'created_at', order: 'desc' }])
    .customPagination(limit, offset);
};
