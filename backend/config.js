require('dotenv').config();
const knex = require('knex');
const fs = require('fs');

const pg = knex({

  client: 'pg',
  connection: {
    host: process.env.POSTGRESS_HOST,
    database: process.env.POSTGRESS_DB,
    user: process.env.POSTGRESS_USER,
    password: process.env.POSTGRESS_PASSWORD,
    port: process.env.POSTGRESS_DB_PORT,
    // ssl: true,
    ssl: {
      rejectUnauthorized: false,
      //   ca: fs.readFileSync('/path/to/server-certificates/root.crt').toString(),
      //   key: fs.readFileSync('/path/to/client-key/postgresql.key').toString(),
      //   cert: fs.readFileSync('/path/to/client-certificates/postgresql.crt').toString(),
      // },
    },
  },
  // ssl: {
  //   rejectUnauthorized: false,
  // ca: fs.readFileSync('/path/to/server-certificates/root.crt').toString(),
  // key: fs.readFileSync('/path/to/client-key/postgresql.key').toString(),
  // cert: fs.readFileSync('/path/to/client-certificates/postgresql.crt').toString(),
  // },
});

module.exports = pg;
