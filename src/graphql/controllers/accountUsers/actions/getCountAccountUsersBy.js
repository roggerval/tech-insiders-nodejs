import { AccountUser } from '../../../../services/objection/models/AccountUser/AccountUser';

export const getCountAccountUsersBy = ({ ...args }) => {
  return AccountUser.query()
    .where(args)
    .whereNotDeleted()
    .resultSize();
};
