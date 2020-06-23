import { User } from '../../../../services/objection/models/User/User';
import { getFields, replaceFields } from '../../utils';
import { USER_MAPPINGS } from '../utils/constants';

export const createUser = (args, info) => {
  const fields = replaceFields(getFields(info), USER_MAPPINGS);
  return User.query()
    .insert(args)
    .returning(fields);
};
