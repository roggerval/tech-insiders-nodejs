import knex from 'knex';
import { Model, knexIdentifierMapping } from 'objection';
import keyIdentityMapping from './keyIdentityMapping';

let initialState = false;
let pg;

const init = () => {
  if (!initialState) {
    const dbConfig = {
      client: 'pg',
      connection: {
        host: process.env.POSTGRES_HOST,
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        port: process.env.POSTGRES_PORT
      },
      ...knexIdentifierMapping(keyIdentityMapping())
    };

    pg = knex(dbConfig);
    Model.knex(pg);
    initialState = true;
  }

  return pg;
};

export default { init };
