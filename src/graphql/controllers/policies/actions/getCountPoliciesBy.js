import { Policy } from '../../../../services/objection/models/Policy/Policy';

export const getCountPoliciesBy = ({ ...args }) => {
  return Policy.query()
    .where(args)
    .whereNotDeleted()
    .resultSize();
};
