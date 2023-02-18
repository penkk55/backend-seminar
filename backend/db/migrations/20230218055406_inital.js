// const Knex = require('knex');

// const { table } = require('console');
const tableNames = require('../../tableNames');
const {
  addDefaultColumns,
  createNameTable,
  references,
} = require('../../lib/tableUtils');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
  // console.log('==knexup===:', knex);
  await Promise.all([
    knex.schema.createTable(tableNames.host, (table) => {
      table.increments().notNullable();
      table.string('email', 254).notNullable().unique();
      table.string('name').notNullable();
      table.string('password', 127).notNullable().unique();
      table.dateTime('last_login');
      addDefaultColumns(table);
    }),
    knex.schema.createTable(tableNames.speaker, (table) => {
      table.increments().notNullable();
      table.string('email', 254).notNullable().unique();
      table.string('name').notNullable();
      addDefaultColumns(table);
    }),

    knex.schema.createTable(tableNames.web_url, (table) => {
      table.increments().notNullable();
      table.string('name').notNullable();
      table.string('url', 2000);
      addDefaultColumns(table);
    }),
    knex.schema.createTable(tableNames.csv_import, (table) => {
      table.increments().notNullable();
      table.string('file_name').notNullable();
      table.integer('quantity', 2000);
      addDefaultColumns(table);
    }),
    knex.schema.createTable(tableNames.visitor_group, (table) => {
      table.increments().notNullable();
      table.string('name').notNullable();
      table.string('url', 2000);
      addDefaultColumns(table);
    }),
    createNameTable(knex, tableNames.event_type),
    createNameTable(knex, tableNames.country),
    createNameTable(knex, tableNames.city),
    createNameTable(knex, tableNames.district),
    createNameTable(knex, tableNames.township),

  ]);
  await knex.schema.createTable(tableNames.address, (table) => {
    table.increments().notNullable();
    table.string('street_address_1', 50).notNullable();
    table.string('street_address_2', 50);
    table.string('zipcode', 15).notNullable();
    table.double('latitude').notNullable();
    table.double('longitude').notNullable();
    references(table, 'country');
    references(table, 'city');
    references(table, 'district');
    references(table, 'township');
    addDefaultColumns(table);
    table.unique([
      'street_address_1',
      'street_address_2',
      'zipcode',
      'country_id',
      'city_id',
      'district_id',
      'township_id',
    ]);
  });

  await knex.schema.createTable(tableNames.visitor, (table) => {
    table.increments().notNullable();
    table.string('email', 254).notNullable().unique();
    table.string('name').notNullable();
    table.enu('accepted_link_status', ['yes', 'no']).defaultTo('no'); // yes /no
    references(table, 'visitor_group', false);
    addDefaultColumns(table);
  });
  await knex.schema.createTable(tableNames.csv_import_detail, (table) => {
    table.increments().notNullable();
    table.string('name').notNullable();
    references(table, 'csv_import');
    addDefaultColumns(table);
  });

  await knex.schema.createTable(tableNames.event, (table) => {
    table.increments().notNullable();
    table.string('title', 254).notNullable().unique();
    table.string('description', 2000);
    table.dateTime('event_start_date').notNullable();
    table.dateTime('event_end_date');
    table.enu('event_status', ['pending', 'ongoing', 'finish']).defaultTo('pending'); // pending /ongoing / finish
    references(table, 'host');
    references(table, 'speaker', false);
    references(table, 'visitor_group', false);
    references(table, 'address');
    references(table, 'web_url');
    references(table, 'event_type');
    addDefaultColumns(table);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
  await knex.schema.dropTable(tableNames.host);

  await Promise.all([
    tableNames.host,
    tableNames.speaker,
    tableNames.event_type,
    tableNames.country,
    tableNames.city,
    tableNames.district,
    tableNames.township,
    tableNames.web_url,
    tableNames.csv_import,
    tableNames.csv_import_detail,
    tableNames.address,
    tableNames.event,
    tableNames.visitor,
    tableNames.visitor_group,
  ].map((tableNames) => knex.schema.dropTableIfExists(tableNames)));
};
