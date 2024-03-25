exports.up = function (knex) {
    // schema is: username, email, age, role
    return knex.schema.createTable('user', function (table) {
        table.increments('id').primary();
        table.string('username').notNullable();
        table.string('email').notNullable().unique();
        table.integer('age').notNullable();
        table.integer('warning_count').defaultTo(0);
        table.string('password').notNullable();
        table.enu('role', ['user', 'admin']).defaultTo('user');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('user');
};