// loading .ENV
const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand');
const myEnv = dotenv.config();
dotenvExpand.expand(myEnv);

// import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const { port, connectDB } = require('./config/config');

// import router
const { customer } = require('./routes/index');

// import model
const { customerSchema } = require('./feature/customers/customer.model');
const { productSchema } = require('./feature/products/product.model');

const app = express();

// middleware
app.use(bodyParser.json()); // support parsing of application/json type post data
app.use(bodyParser.urlencoded({ extended: true })); //support parsing of application/x-www-form-urlencoded post data

// Connect Database
const db = connectDB();

productModel = db.model('product', productSchema);

productModel.find({}, (err, result) => {
  if (err) throw err;
  console.log(result, result.length);
});

// route
app.get('/api', (req, res) => res.send('hello world'));
app.use('/api/customer', customer);

app.listen(port, () => console.log(`Server running on http://localhost:${port}/api/`));
