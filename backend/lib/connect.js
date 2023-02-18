const knex = require('knex');

module.exports = function (config) {
  const dbConnect = knex(config);
  setInterval(async () => {
    try {
      await dbConnect.raw('select now()');
      // if (process.env.DEBUG || process.env.NODE_ENV === 'development'){
      if (true) {
        console.log('postgres keep OK');
      }
    } catch (error) {
      console.log(error.message);
    }
  }, 5_000);

  return dbConnect;
};

console.log('NODE_ENV', process.env.NODE_ENV);
console.log('DEBUG', process.env.NODE_ENV);
