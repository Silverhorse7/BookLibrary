exports.up = function (knex) {
    return knex.schema.createTable('borrowers', function (table) {
        table.increments('id').primary();
        table.integer('book_id').unsigned().notNullable();
        table.string('borrower_email').notNullable();
        table.timestamp('borrowed_at').defaultTo(knex.fn.now());
        table.timestamp('returned_at');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('borrowers');
};