
exports.up = function(knex) {
  return knex.schema.createTable('notes', table => {
    table.increments();

    table.string('note_name').notNullable();
    table.text('content', 'longText').notNullable();

  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('notes');
};
