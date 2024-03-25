exports.up = function (knex) {
    // SCHEMA IS : ISBN, title, author, available_quantity, shelf_location
    return knex.schema.createTable('book', function (table) {
        table.string('ISBN').unique().primary();
        table.string('title').notNullable();
        table.string('author').notNullable();
        table.integer('available_quantity').notNullable().defaultTo(0);
        table.string('shelf_location').notNullable();
    }).catch(err => console.log(err));
};

exports.down = function (knex) {
    return knex.schema.dropTable('book').catch(err => console.log(err));
};


