import { User } from '../../../../services/objection/models/User/User';
import { getFields, replaceFields } from '../../utils';
import { USER_MAPPINGS } from '../utils/constants';

export const getUsersBy = ({ orderBy, limit, offset, ...args }, info) => {
  const fields = replaceFields(getFields(info), USER_MAPPINGS);
  return User.query()
    .select(fields)
    .where(args)
    .whereNotDeleted()
    .customOrderBy(orderBy, [{ column: 'created_at', order: 'desc' }])
    .customPagination(limit, offset);
};
