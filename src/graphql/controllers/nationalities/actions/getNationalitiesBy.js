import { Nationality } from '../../../../services/objection/models/Nationality/Nationality';
import { getFields } from '../../utils';

export const getNationalitiesBy = (
  { orderBy, limit, offset, ...args },
  info
) => {
  const fields = getFields(info);
  return Nationality.query()
    .select(fields)
    .where(args)
    .customOrderBy(orderBy, [{ column: 'created_at', order: 'desc' }])
    .customPagination(limit, offset);
};
