import { User } from '../../../../services/objection/models/User/User';
import { getFields, replaceFields } from '../../utils';
import { USER_MAPPINGS } from '../utils/constants';

export const getUserById = ({ id }, info) => {
  const fields = replaceFields(getFields(info), USER_MAPPINGS);
  return User.query()
    .findById(id)
    .whereNotDeleted()
    .select(fields);
};
