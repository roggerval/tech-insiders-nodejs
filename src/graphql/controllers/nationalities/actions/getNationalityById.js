import { Nationality } from '../../../../services/objection/models/Nationality/Nationality';
import { getFields } from '../../utils';

export const getNationalityById = ({ alpha }, info) => {
  const fields = getFields(info);
  return Nationality.query()
    .findById(alpha)
    .select(fields);
};
