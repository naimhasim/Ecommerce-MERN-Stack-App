const { customerSchema } = require('./customer.model');

const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');
const model = mongoose.model('customer', customerSchema);

const getAllCustomers = (req, res) => {
  model.find({}, (err, data) => {
    if (err) throw err;
    res.json({ ...{ data: data }, ...{ success: true } });
  });
};

const getCustomerByPk = (req, res) => {
  model
    .findOne(ObjectId(req.params.customerId))
    .then((data) => {
      if (!data) {
        res.json({ message: 'Data not found!', success: true });
      } else res.json({ ...{ data: data }, ...{ success: true } });
    })
    .catch((err) => {
      if (err) throw err;
    });
};

const updateCustomerDetailByPk = (req, res) => {
  oldData = req.body.oldData;
  newData = req.body.newData;

  const updateData = {
    fname: newData.fname || oldData.fname,
    lname: newData.lname || oldData.lname,
    hashedPassword: newData.hashedPassword || oldData.hashedPassword,
    emailVerified: newData.emailVerified || oldData.emailVerified,
  };

  customerId = req.params.customerId;

  model
    .findByIdAndUpdate(customerId, updateData)
    .then((data) => {
      if (!data) {
        res.json({
          message: `Customer data  '${oldData.lname}' failed to updated!`,
          success: true,
        });
      } else {
        res.json({
          message: `Customer data '${oldData.lname}' sucessfully updated!`,
          success: true,
        });
      }
    })
    .catch((err) => {
      if (err) throw err;
    });
};

const addCustomer = (req, res) => {
  addressArray = [];

  req.body.address.map((eachAddress) => {
    addressArray.push({
      country: eachAddress.country,
      street1: eachAddress.street1,
      street2: eachAddress.street2 || null,
      city: eachAddress.city,
      state: eachAddress.state,
      zip: eachAddress.zip,
    });
  });

  // reference: https://mongoosejs.com/docs/models.html#constructing-documents

  const customer = new model({
    fname: req.body.fname,
    lname: req.body.lname,
    hashedPassword: req.body.hashedPassword,
    emailVerified: req.body.emailVerified === '0' ? false : true,
    address: addressArray,
    shippingAddress: {
      street1: req.body.shippingAddress.street1,
      street2: req.body.shippingAddress.street2 || null,
      city: req.body.shippingAddress.city,
      state: req.body.shippingAddress.state,
      zip: req.body.shippingAddress.zip,
    },
  });

  customer.save((err) => {
    if (err) return handleError(err);
    res.json({ message: `Customer data '${req.body.lname}' sucessfully added!`, success: true });
    console.log(customer);
  });
};

const deleteCustomerByPK = (req, res) => {
  model.findByIdAndRemove(ObjectId(req.params.customerId), (err, data) => {
    if (err) return err;

    if (!data) {
      res.json({ message: 'Data not found!', success: true });
    } else
      res.json({
        message: `Customer data '${data.lname}' sucessfully DELETED!`,
        success: true,
      });
  });
};
module.exports = {
  getAllCustomers,
  getCustomerByPk,
  addCustomer,
  updateCustomerDetailByPk,
  deleteCustomerByPK,
};
