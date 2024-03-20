exports.up = function (knex) {
    // SCHEMA IS : ISBN, title, author, available_quantity, shelf_location
    return knex.schema.createTable('books', function (table) {
        table.string('ISBN').unique().primary();
        table.string('title').notNullable();
        table.string('author').notNullable();
        table.integer('available_quantity').notNullable();
        table.string('shelf_location').notNullable();
    }).catch(err => console.log(err));
};

exports.down = function (knex) {
    return knex.schema.dropTable('books').catch(err => console.log(err));
};