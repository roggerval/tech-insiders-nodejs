import { Account } from '../../../../services/objection/models/Account/Account';

export const getCountAccountsBy = ({ ...args }) => {
  return Account.query()
    .where(args)
    .whereNotDeleted()
    .resultSize();
};
