const { customerSchema } = require('./customer.model');

const mongoose = require('mongoose');
const model = mongoose.model('customer', customerSchema);

const getAllCustomer = (req, res) => {
  console.log('inside controler');

  res.json({ customer: 'testing' });
};

module.exports = {
  getAllCustomer,
};
