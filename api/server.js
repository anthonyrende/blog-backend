const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const secrets = require("../config/secrets.js");
// const request = require('request')
const server = express();

// import bodyParser from "body-parser"
// // const bodyParser = require("body-parser")
// // Parse incoming requests data
// server.use(bodyParser.json());
// server.use(bodyParser.urlencoded({ extended: false }));

// console.log("environment:", secrets.environment);


server.use(express.json());
server.use(helmet());
server.use(cors());

//routes
const todoRouter = require("./todos/todo.router");


server.use('/api/v1/todos', todoRouter);

// const client = new Client({
//     connectionString: process.env.DATABASE_URL,
//     ssl: true,
//   });
  
//   client.connect();

server.get("/", (req, res) => {
    res.status(200).json(`Welcome to the Jungle`);
  });


  module.exports = server;
