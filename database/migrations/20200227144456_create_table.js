
exports.up = function(knex) {
  return knex.schema
    .createTable('songs', table =>
    {
        table.increments();
        table.string('title')
            .unique()
            .notNullable();
        table.string('artist')
            .notNullable();
        table.string('album')
            .notNullable();
    })
    
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('songs');
};
