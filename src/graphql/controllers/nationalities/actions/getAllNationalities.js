import { Nationality } from '../../../../services/objection/models/Nationality/Nationality';
import { getFields } from '../../utils';

export const getAllNationalities = ({ orderBy, limit, offset }, info) => {
  const fields = getFields(info);
  return Nationality.query()
    .select(fields)
    .customOrderBy(orderBy, [{ column: 'created_at', order: 'desc' }])
    .customPagination(limit, offset);
};
