const knex = require('knex')
const knexfile = require('../../knexfile')

const env = process.env.NODE_ENV == 'test' ? knexfile.test : knexfile.development

const connection = knex(env)

module.exports = connection