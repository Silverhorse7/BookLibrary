// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host: 'localhost',  // Replace with your MySQL host
      user: 'your_username',
      password: 'your_password',
      database: 'your_database_name'
    }
  },

  staging: {
    client: 'mysql2',
    connection: {
      host: 'localhost',  // Replace with your MySQL host
      user: 'your_username',
      password: 'your_password',
      database: 'your_database_name'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql2',
    connection: {
      host: 'localhost',  // Replace with your MySQL host
      user: 'your_username',
      password: 'your_password',
      database: 'your_database_name'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
