const app = require('./src/index.js');
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 8000;


app.listen(port, () => {
  console.log(`Running in *${port}`);
});

