// Update with your config settings.
require('dotenv').config();
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: process.env.POSTGRESS_HOST,
      database: process.env.POSTGRESS_DB,
      user: process.env.POSTGRESS_USER,
      password: process.env.POSTGRESS_PASSWORD,
      port: process.env.POSTGRESS_DB_PORT,
      ssl: { rejectUnauthorized: false },

    },
    migrations: {
      directory: './db/migrations',
    },

  },

};
