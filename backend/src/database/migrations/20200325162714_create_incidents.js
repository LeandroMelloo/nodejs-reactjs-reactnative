// responsavel pela criação da tabela
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table) {
       table.increments()
       table.string('title').notNullable()
       table.string('description').notNullable()
       table.decimal('value').notNullable()
       table.string('ong_id').notNullable() // relacionamento
       table.foreign('ong_id').references('id').inTable('ongs')
    }) 
   };
   
   // responsavel por desfazer o erro
   exports.down = function(knex) {
     return knex.schema.dropTable('incidents')
   };
