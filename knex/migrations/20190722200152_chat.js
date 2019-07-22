
exports.up = function(knex) {
    return knex.schema
      .createTable('users', function (table) {
         table.increments('id');
         table.string('first_name', 255).notNullable();
         table.string('last_name', 255).notNullable();
         table.boolean('isAdmin').notNullable();

      })
      .createTable('chats', function (table) {
         table.increments('id');
         table.string('name', 1000).notNullable();
         table.integer('source_id').unsigned()
         table.foreign('source_id').references('users.id')
         table.integer('destination_id').unsigned()
         table.foreign('destination_id').references('users.id')
         
      })
      .createTable('messages', function (table) {
        table.increments('id');
        table.string('text', 1000).notNullable();
     })
     .createTable('files', function (table) {
        table.increments('id');
        table.string('name', 1000).notNullable();
     })
     .createTable('chats_messages', function(table){
        table.increments('id').primary();
        table.integer('chats_id').unsigned().references('chats.id');
        table.integer('messages_id').unsigned().references('messages.id');
      })
      .createTable('chats_files', function(table){
        table.increments('id').primary();
        table.integer('chats_id').unsigned().references('chats.id');
        table.integer('files_id').unsigned().references('files.id');
      })
  };
  
  exports.down = function(knex) {
    return knex.schema
        .dropTable("chats_messages")
        .dropTable("chats_files")
        .dropTable("files")
        .dropTable("messages")
        .dropTable("chats")
        .dropTable("user");
  };
  
  exports.config = { transaction: false };