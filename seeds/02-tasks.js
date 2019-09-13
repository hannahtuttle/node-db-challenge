
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {task_description: 'test 1 some task', notes: 'some notes', completed: false, project_id: 2},
        {task_description: 'test 2 some task', notes: 'some notes', completed: false, project_id: 3},
        {task_description: 'test 3 some task', notes: 'some notes', completed: false, project_id: 4},
        {task_description: 'test 4 some task', notes: 'some notes', completed: false, project_id: 1},
      ]);
    });
};
