
exports.up = knex => knex.schema.createTable('equipments', table =>{

      table.string('id').primary()
      table.string('model').notNullable()
      table.enu('category', ['cartucho', 'toner']).notNullable()
      table.integer('ppm')
      table.boolean('wifi')
      table.float('consumption',[6],[2])

  })

exports.down = knex => knex.schema.dropTable('equipments')
