exports.up = function (knex) {
    return knex.schema.createTable('books_borrowers', function (table) {
        table.string('ISBN').notNullable();
        table.string('email').notNullable();
        table.timestamp('borrow_date').defaultTo(knex.fn.now());
        table.primary(['ISBN', 'email']);

        table.foreign('ISBN').references('ISBN').inTable('books');
        table.foreign('email').references('email').inTable('borrower');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('books_borrowers');
};