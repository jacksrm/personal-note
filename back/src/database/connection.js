//packages
const knex = require('knex'); 

//files
const knexfile = require('../../knexfile'); 

//database selection config
const dbConfig = process.env.NODE_ENV === 'test' ? knexfile.test : knexfile.development;

//connection config
const connection = knex(dbConfig);

module.exports = connection;
