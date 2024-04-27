import app from './src/index.js';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 8000;


app.listen(port, () => {
  console.log(`Running in *${port}`);
});

