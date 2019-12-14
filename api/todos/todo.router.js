// import express from 'express';
const router = require('express').Router()
import db from '../../db/db'
// const db = require('../../db/db')

// get all todos
router.get('/', (req, res) => {
    res.status(200).send({
      success: 'true',
      message: 'todos retrieved successfully!',
      todos: db
    })
  });

// create a new todo
router.post('/', (req, res) => {
   try {
    if(!req.body.title) {
        return res.status(400).send({
          success: 'false',
          message: 'title is required'
        });
    }
   } 
   catch (err) {
    if(!req.body.description) {
        return res.status(400).send({
          success: 'false',
          message: 'description is required'
        });
      }
   } const todo = {
    id: db.length + 1,
    title: req.body.title,
    description: req.body.description
  }
  db.push(todo);
  return res.status(201).send({
    success: 'true',
    message: 'todo added successfully',
    todo
  })
})

// get a single todo by id

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    db.map((todo) => {
    try {
        if (todo.id === id) {
            return res.status(200).send({
              success: 'true',
              message: 'todo retrieved successfully',
              todo,
            });
        }
    }
    catch (err) {
        return res.status(404).send({
            success: 'false',
            message: 'todo does not exist',
           })
           .json(err.message);
    }
    })
})


module.exports = router;