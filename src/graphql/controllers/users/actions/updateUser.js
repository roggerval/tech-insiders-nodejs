import { User } from '../../../../services/objection/models/User/User';
import { getFields, replaceFields } from '../../utils';
import { USER_MAPPINGS } from '../utils/constants';

export const updateUser = ({ id, ...args }, info) => {
  const fields = replaceFields(getFields(info), USER_MAPPINGS);
  return User.query()
    .patch(args)
    .where('id', id)
    .whereNotDeleted()
    .returning(fields)
    .first();
};
