const pg = require('./config');

const call = async () => {
  // console.log('3333', pg);
  const data = await pg.raw('select * from user').then((d) => d.rows[0]);
  console.log('4444', data);

  const data = await pg('user').then((d) => d[0]);
  console.log('4444', data.name);
};
call();


import knex from 'knex';

export default function (config) {
  const dbConnect = knex(config);
  setInterval(async () => {
    try {
      await db.raw('select now()');
      if (process.env.DEBUG) {
        console.log('mysql keep OK');
      }
    } catch (error) {
      console.log(error.message);
    }
  }, 5_000);

  return dbConnect;
}

