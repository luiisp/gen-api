import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './routes/index.js';

const app = express();

dotenv.config("../");

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());


routes(app);
export default app;