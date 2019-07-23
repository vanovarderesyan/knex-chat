
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
        table.integer('author_id').unsigned()
        table.foreign('author_id').references('users.id')
        table.string('name', 1000).notNullable();         
      })
      .createTable('messages', function (table) {
        table.increments('id');
        table.string('text', 1000).notNullable();
        table.integer('chat_id').unsigned()
        table.foreign('chat_id').references('chats.id')
        table.integer('source_id').unsigned()
        table.foreign('source_id').references('users.id')
        table.integer('destination_id').unsigned()
        table.foreign('destination_id').references('users.id')
     })
     .createTable('files', function (table) {
        table.increments('id');
        table.string('path', 1000).notNullable();
        table.integer('messages_id').unsigned()
        table.foreign('messages_id').references('messages.id')
     })
      .createTable('users_chats', function (table) {
        table.increments('id');
        table.integer('user_id').unsigned()
        table.foreign('user_id').references('users.id')
        table.integer('chat_id').unsigned()
        table.foreign('chat_id').references('chats.id')
     })
  };
  
  exports.down = function(knex) {
    return knex.schema
        .dropTable("files")
        .dropTable("messages")
        .dropTable("users_chats")
        .dropTable("chats")
        .dropTable("user");
  };
  
  exports.config = { transaction: false };