const pg = require('./config');

const call = async () => {
  // console.log('3333', pg);
  const data = await pg.raw('select * from user').then((d) => d.rows[0]);
  console.log('4444', data);

  const data = await pg('user').then((d) => d[0]);
  console.log('4444', data.name);
};
call();
