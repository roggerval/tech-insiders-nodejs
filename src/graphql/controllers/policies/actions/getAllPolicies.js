import { Policy } from '../../../../services/objection/models/Policy/Policy';
import { getFields, replaceFields } from '../../utils';
import { POLICY_MAPPINGS } from '../utils/constants';

export const getAllPolicies = ({ orderBy, limit, offset }, info) => {
  const fields = replaceFields(getFields(info), POLICY_MAPPINGS);
  return Policy.query()
    .select(fields)
    .whereNotDeleted()
    .customOrderBy(orderBy, [{ column: 'created_at', order: 'desc' }])
    .customPagination(limit, offset);
};
