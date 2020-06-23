import { Account } from '../../../../services/objection/models/Account/Account';
import { getFields, replaceFields } from '../../utils';
import { ACCOUNT_MAPPINGS } from '../utils/constants';

export const createAccount = ({ ...args }, info) => {
  const fields = replaceFields(getFields(info), ACCOUNT_MAPPINGS);
  return Account.query()
    .insert(args)
    .returning(fields);
};
