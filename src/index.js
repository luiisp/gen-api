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

const prismaClient = require('@prisma/client');
app.get('/clearusers', (req, res) => {
    const prisma = new prismaClient.PrismaClient();
    prisma.user.deleteMany().then(() => {
        res.status(200).send('Users deleted');
    }).catch((error) => {
        res.status(500).send('Error deleting users');
    });
});

routes(app);
module.exports = {app};