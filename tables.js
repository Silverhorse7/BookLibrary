const knex = require('knex')(require('./knexfile').development);  // For development environment

// Book Table
knex.schema.createTable('book', (table) => {

    table.increments('ISBN').primary();

    table.string('title').notNullable();

    table.string('author').notNullable();

    table.integer('available_quantity').notNullable();

    table.string('shelf_location').notNullable();
}).then(() => {
    console.log('book Table created');
}).catch((err) => { console.log(err); throw err; }).finally(() => {
    knex.destroy();
});

// Borrower Table
knex.schema.createTable('borrower', (table) => {


    table.string('email').primary();

    table.string('name').notNullable();

    table.date('registered_date').notNullable();


}).then(() => {
    console.log('borrower Table created');
}).catch((err) => { console.log(err); throw err; }).finally(() => {
    knex.destroy();
});