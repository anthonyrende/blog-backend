// import express from 'express';
router = require('express').Router()
// import db from '../../db/db'


// get all todos
router.get('/', (req, res) => {
    res.status(200).send({
      success: 'true',
      message: 'todos retrieved successfully',
    //   todos: db
    })
  });

module.exports = router;