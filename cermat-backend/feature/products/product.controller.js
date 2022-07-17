const { productSchema } = require('./product.model');

const mongoose = require('mongoose');
const model = mongoose.model('product', productSchema);

findProductByName = (req, res) => {
  model.find(req.params, (err, data) => {
    if (err) throw err;
    // res.json({ data });
    res.json({ ...{ data: data }, ...{ success: true } });
  });
};

getAllProduct = (req, res) => {
  model.find({}, (err, data) => {
    if (err) throw err;
    res.json({ naim: 'ad' });
  });
};

addNewProduct = (req, res) => {
  const product = new model({ name: req.params });
  console.log(product);
};

module.exports = { findProductByName, addNewProduct, getAllProduct };
