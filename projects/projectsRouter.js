const express = require('express')
const data = require('./projects_model.js')
const router = express.Router()

router.get('/', (req, res) => {
    data.getProjects()
    .then(proj => {
        res.status(200).json(proj)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    data.findById(id)
    .then(proj => {
        res.status(200).json(proj)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.post('/', (req, res) => {
    const body = req.body
    data.addProject(body)
    .then(radd => {
        res.status(201).json(radd)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.get('/:id/tasks', (req, res) => {
    const id = req.params.id
    data.getTasks(id)
    .then(task => {
        res.status(200).json(task)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.post('/:id/tasks', (req, res) => {
    const {id} = req.params
    const taskBody = req.body
     data.findById(id)
     .then(project => {
         if(project){
             data.addTask(taskBody, id)
             .then(task => {
                res.status(201).json(task);
            })
          } else {
            res.status(404).json({ message: 'Could not find project with given id.' })
          }
        })
        .catch (err => {
          res.status(500).json({ message: 'Failed to create new task' });
        });
})

router.get('/:id/resources', (req, res) => {
    const {id } = req.params
    data.getResources(id)
    .then(resource => {
        res.status(200).json(resource)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.post('/:id/resources', (req, res) => {
    const {id} = req.params
    const resourceBody = req.body
     data.findById(id)
     .then(project => {
         if(project){
             data.addResource(resourceBody, id)
             .then(resource => {
                res.status(201).json(resource);
            })
          } else {
            res.status(404).json({ message: 'Could not find project with given id.' })
          }
        })
        .catch (err => {
          res.status(500).json({ message: 'Failed to create new resource' });
        });
})


module.exports = router;