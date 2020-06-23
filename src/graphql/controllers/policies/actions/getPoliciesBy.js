import { Policy } from '../../../../services/objection/models/Policy/Policy';
import { getFields, replaceFields } from '../../utils';
import { POLICY_MAPPINGS } from '../utils/constants';

export const getPoliciesBy = ({ orderBy, limit, offset, ...args }, info) => {
  const fields = replaceFields(getFields(info), POLICY_MAPPINGS);
  return Policy.query()
    .select(fields)
    .where(args)
    .whereNotDeleted()
    .customOrderBy(orderBy, [{ column: 'created_at', order: 'desc' }])
    .customPagination(limit, offset);
};
