const model = {};
module.exports = model;

model.allData = async ({ postgress }) => postgress('visitor');

model.insertNewVisitor = async ({ postgress }, payloads) => {
  const result = await postgress1('visitor').insert({
    name: payloads.name,
    email: payloads.email,
  }).returning('id').then((d) => d[0]);
  // const result = await postgress('visitor').insert([{ name: `'${payloads.name}'` }, { email: `'${payloads.email}'` }]);
  // raw
  // const result = await postgress.raw(`INSERT INTO "visitor" ("name", "email") VALUES ('${payloads.name}', '${payloads.email}');`);
  console.log('-->redaad,', result);
  return result;
};
/**
* @param { import("knex").Knex } postgress1
* @returns { Promise<void> }
*/

model.visitorList_1 = async ({ postgress }, postgress1) => {
  postgress1 = postgress;
  return await postgress1.select().from('visitor')
    .innerJoin('visitor_group', 'visitor.visitor_group_id', '=', 'visitor_group.id')
    .where({ visitor_group_id: 1 });
};
