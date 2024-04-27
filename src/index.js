import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import options from './docs/docs.js';
import routes from './routes/index.js';

const app = express();

dotenv.config("../");

app.use(express.json());
app.use(cors());

  
const specs = swaggerJsdoc(options);
  app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(specs)
  );

routes(app);
app.get('/ping', (req, res) => {
    res.status(200).json({ message: 'pong' });
});

export default app;