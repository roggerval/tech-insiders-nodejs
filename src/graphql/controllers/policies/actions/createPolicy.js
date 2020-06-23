import { Policy } from '../../../../services/objection/models/Policy/Policy';
import { getFields, replaceFields } from '../../utils';
import { POLICY_MAPPINGS } from '../utils/constants';

export const createPolicy = (args, info) => {
  const fields = replaceFields(getFields(info), POLICY_MAPPINGS);
  return Policy.query()
    .insert(args)
    .returning(fields);
};
