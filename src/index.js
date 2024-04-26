const express = require('express');
const cors = require('cors');
bodyParser = require("body-parser"),
swaggerJsdoc = require("swagger-jsdoc"),
swaggerUi = require("swagger-ui-express");
const dotenv = require('dotenv');
const app = express();
const options = require('./docs/docs.js');
dotenv.config("../");

app.use(express.json());
app.use(cors());

  
const specs = swaggerJsdoc(options);
  app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(specs)
  );


app.get('/ping', (req, res) => {
    res.status(200).json({ message: 'pong' });
});

module.exports = app;