// const Knex = require('knex');

const tableNames = require('../../tableNames');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
  // console.log('==knexup===:', knex);
  await knex.schema.createTable(tableNames.host, (table) => {
    table.increments().notNullable();
    table.string('email', 254).notNullable().unique();
    table.string('name').notNullable();
    table.string('password', 127).notNullable().unique();
    table.dateTime('last_login');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
  await knex.schema.dropTable(tableNames.host);
};
