const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const secrets = require("../config/secrets.js");
// const request = require('request')

import bodyParser from "body-parser"

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// console.log("environment:", secrets.environment);
const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

//routes
const todoRouter = require("./todos/todo.router");


server.use('/api/v1/todos', todoRouter);


server.get("/", (req, res) => {
    res.status(200).json(`Welcome to the Jungle`);
  });


  module.exports = server;
