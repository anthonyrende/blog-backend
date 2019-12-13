const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const secrets = require("../config/secrets.js");
// const request = require('request')
 

// console.log("environment:", secrets.environment);
const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.get("/", (req, res) => {
    res.status(200).json(`Welcome to the Jungle`);
  });
  
  
  module.exports = server;
  