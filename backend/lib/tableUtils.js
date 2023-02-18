const addDefaultColumns = (table) => {
  table.timestamps(false, true);
  table.datetime('deleted_at');
  // table.datetime('update_at');x`
};

const createNameTable = (knex, table_name) => knex.schema.createTable(table_name, (table) => {
  table.increments().notNullable();
  table.string('name').notNullable().unique();
  addDefaultColumns(table);
});
function references(table, tableName, notNullable = true, columnName = '') {
  const definition = table
    .integer(`${columnName || tableName}_id`)
    .unsigned()
    .references('id')
    .inTable(tableName)
    .onDelete('cascade');

  if (notNullable) {
    definition.notNullable();
  }
  return definition;
}
module.exports = {

  addDefaultColumns,
  createNameTable,
  references,
};
