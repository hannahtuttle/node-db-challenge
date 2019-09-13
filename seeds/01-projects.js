
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: 'Create project tables using migrations', project_description: "create a projects table using knex migrations", completed: true},
        {project_name: 'Create task table using migrations', project_description: "create a taskss table using knex migrations", completed: true},
        {project_name: 'Create resource table using migrations', project_description: "create a resources table using knex migrations", completed: true},
      ]);
    });
};
