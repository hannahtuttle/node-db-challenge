
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource_name: 'pen', resource_description: 'used for writing', project_id:1},
        {resource_name: 'pen', resource_description: 'used for writing', project_id:2},
        {resource_name: 'pen', resource_description: 'used for writing', project_id:3},
        {resource_name: 'aper', resource_description: 'used for writing on', project_id:1},
        
      ]);
    });
};
