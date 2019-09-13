const db = require('../data/db.config.js')

module.exports = {
    getProjects,
    addProject,
    getTasks,
    findById,
    addTask,
    getResources,
    addResource
}

function getProjects() {
    return db('projects as p')
}

function addProject(body){
    return db('projects').insert(body)
}

function findById(id){
    return db('projects').where('id', id)
}

function getTasks(id) {
    return db('projects as p')
    .join('tasks as t', 'p.id', 't.project_id')
    .select('p.project_name', 'p.project_description', 't.task_description', 't.notes','t.completed')
    .where('p.id', id)
}

function addTask(task, project_id) {
    return db('tasks').where({project_id}).insert(task)
    .then(ids => ({ id: ids[0] }))
}

function getResources(id) {
    return db('projects as p')
    .join('resources as r', 'p.id', 'r.project_id')
    .where('p.id', id)
    .select('p.project_name', 'r.resource_name', 'r.resource_description', "r.project_id")
}

function addResource(resource, project_id){
    return db('resources').where({project_id}).insert(resource)
    .then(ids => ({ id: ids[0] }))
}