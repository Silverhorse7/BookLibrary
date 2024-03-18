const knex = require('knex')(require('./knexfile').development);  // For development environment

console.log(knex)