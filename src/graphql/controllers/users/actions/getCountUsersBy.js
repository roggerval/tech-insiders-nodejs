import { User } from '../../../../services/objection/models/User/User';

export const getCountUsersBy = args => {
  return User.query()
    .where(args)
    .whereNotDeleted()
    .resultSize();
};
