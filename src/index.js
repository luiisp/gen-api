const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/index.js');

const app = express();
dotenv.config("../");

const secret = process.env.SECRET;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());


routes(app);
module.exports = {app};