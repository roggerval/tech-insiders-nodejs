import { AccountUser } from '../../../../services/objection/models/AccountUser/AccountUser';
import { getFields, replaceFields } from '../../utils';
import { ACCOUNT_USER_MAPPINGS } from '../utils/constants';

export const updateAccountUser = ({ id, ...args }, info) => {
  const fields = replaceFields(getFields(info), ACCOUNT_USER_MAPPINGS);
  return AccountUser.query()
    .patch(args)
    .where('id', id)
    .whereNotDeleted()
    .returning(fields)
    .first();
};
