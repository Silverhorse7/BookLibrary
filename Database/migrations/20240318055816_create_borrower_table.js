exports.up = function (knex) {
    return knex.schema.createTable('borrower', function (table) {
        table.string('email').unique().notNullable().primary();
        table.string('name').notNullable();
        table.timestamp('registration_date').defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('borrower');
};