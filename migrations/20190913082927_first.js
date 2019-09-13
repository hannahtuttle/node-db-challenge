
exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl => {
      tbl.increments();
      tbl.string('project_name', 255).notNullable();
      tbl.string('project_description', 1000);
      tbl.boolean('completed').defaultTo(false)
  })
  .createTable('tasks', tbl => {
      tbl.increments();
      tbl.string('task_description', 1000).unique().notNullable();
      tbl.string('notes');
      tbl.boolean('completed').defaultTo(false);
      tbl.integer('project_id')
      .unsigned().notNullable().references('id').inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  })
  .createTable('resources', tbl => {
      tbl.increments();
      tbl.string('resource_name', 500).notNullable();
      tbl.string('resource_description', 1000);
      tbl.integer('project_id')
      .unsigned().notNullable().references('id').inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('resources')
  .dropTableIfExists('tasks')
  .dropTableIfExists('projects')
};
