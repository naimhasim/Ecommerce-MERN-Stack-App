require('dotenv-expand').expand(require('dotenv').config());

const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');
const useDatabate = require('./config/db');
const { port } = require('./config/config');
const createRouter = require('./routes/api/index');
const app = express();
app.use(cors());

// middleware - parse request body
app.use(bodyParser.json()); // support parsing of application/json type post data
app.use(bodyParser.urlencoded({ extended: true })); //support parsing of application/x-www-form-urlencoded post data

console.log('Connecting database...');

useDatabate().then((db) => {
  console.log('MongoDB database connection established successfully!');

  app.use('/api/customers', createRouter.customer);
  app.use('/api/product', createRouter.product);
  app.use('/api', (req, res) => res.json({ message: `api/`, github: 'github.com/naimhasim' }));
  app.use('*', (req, res) =>
    res.status(404).json({ error: '404 Not Found!', redirect: 'http://localhost:8080/api/' })
  );

  app.listen(port, () => console.log(`Server running on http://localhost:${port}/api/`));
});
