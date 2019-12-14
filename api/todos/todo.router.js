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
        }).json(err.message);
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

router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);

  db.map((todo, index) => {
      try {
        if (todo.id === id) {
            db.splice(index, 1);
            return res.status(200).send({
              success: 'true',
              message: 'Todo deleted successfuly',
            });
         }
      }
      catch (err) {
        return res.status(404).send({
            success: 'false',
            message: 'todo not found',
          })
          .json(err.message);
      }
  })
})

// update todo
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    let todoFound;
    let itemIndex;
    db.map((todo, index) => {
      if (todo.id === id) {
        todoFound = todo;
        itemIndex = index;
      }
    });

    if (!todoFound) {
      return res.status(404).send({
        success: 'false',
        message: 'todo not found',
      });
    }

    if (!req.body.title) {
      return res.status(400).send({
        success: 'false',
        message: 'title is required',
      });
    } else if (!req.body.description) {
      return res.status(400).send({
        success: 'false',
        message: 'description is required',
      });
    }

    const updatedTodo = {
      id: todoFound.id,
      title: req.body.title || todoFound.title,
      description: req.body.description || todoFound.description,
    };

    db.splice(itemIndex, 1, updatedTodo);

    return res.status(201).send({
      success: 'true',
      message: 'todo added successfully',
      updatedTodo,
    });
  });

// router.put('/:id', (req, res) => {

//     const id = parseInt(req.params.id, 10);
//     let todoFound;
//     let itemIndex;
//     db.map((todo, index) => {
//         try {
//             if (todo.id === id) {
//                 todoFound = todo;
//                 itemIndex = index;
//               }
//         }
        
//         catch (err) {
//             if (!todoFound) {
//                 return res.status(404).send({
//                   success: 'false',
//                   message: 'todo not found',
//                 }).json(err.message);
//               }
//               if (!req.body.title) {
//                 return res.status(400).send({
//                   success: 'false',
//                   message: 'title is required',
//                 }).json(err.message);
//               }
//               if (!req.body.description) {
//                 return res.status(400).send({
//                   success: 'false',
//                   message: 'description is required',
//                 }).json(err.message);
//               }
//         }
//     })
//         const updatedTodo = {
//             id: todoFound.id,
//             title: req.body.title || todoFound.title,
//             description: req.body.description || todoFound.description,
//           };
//           db.splice(itemIndex, 1, updatedTodo);

//           return res.status(201).send({
//             success: 'true',
//             message: 'todo added successfully',
//             updatedTodo,
//           });
//     })


module.exports = router;