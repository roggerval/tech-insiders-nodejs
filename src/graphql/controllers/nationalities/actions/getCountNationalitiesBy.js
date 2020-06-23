import { Nationality } from '../../../../services/objection/models/Nationality/Nationality';

export const getCountNationalitiesBy = ({ ...args }) => {
  return Nationality.query()
    .where(args)
    .whereNotDeleted()
    .resultSize();
};
