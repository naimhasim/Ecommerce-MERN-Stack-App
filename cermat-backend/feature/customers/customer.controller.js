const { Customer } = require('./customer.model');
const { ObjectId } = require('mongodb');

const getAllCustomers = (req, res) => {
  Customer.find({}, (err, data) => {
    if (err) throw err;
    res.json({ ...{ data: data }, ...{ success: true } });
  });
};

const getCustomerDetailByPk = (req, res) => {
  const customerId = req.params.customerId;
  Customer.findById(customerId)
    .then((data) => {
      if (!data) {
        res.json({ message: 'Data not found!', success: true });
      } else {
        res.json({ ...{ data: data }, ...{ success: true } });
      }
    })
    .catch((err) => {
      if (err) throw err;
    });
};

const getCustomerAddressByPk = (req, res) => {
  Customer.findById(ObjectId(req.params.customerId))
    .select('address')
    .then((data) => {
      if (!data) {
        res.json({ message: 'No address found.', success: true });
      } else res.json({ ...{ data }, ...{ success: true } });
    });
};

const updateCustomerDetailByPk = (req, res) => {
  customerId = req.params.customerId;
  Customer.findById(customerId)
    .then((oldData) => {
      if (!oldData) {
        res.json({ message: 'Customer data not found. Abort update...', success: false });
      } else {
        newData = req.body.newData;
        const updateData = {
          fname: newData.fname || oldData.fname,
          lname: newData.lname || oldData.lname,
          hashedPassword: newData.hashedPassword || oldData.hashedPassword,
          emailVerified: newData.emailVerified || oldData.emailVerified,
        };

        Customer.findByIdAndUpdate(customerId, updateData)
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
          .catch((e) => {
            res.json({ message: `e` });
          });
      }
    })
    .catch((e) => {
      res.json({ message: `${e}` });
    });
};

const updateCustomerAddressByPk = (req, res) => {
  customerId = req.params.customerId;
  temp = req.body.address;

  Customer.findOneAndUpdate(
    { _id: customerId, 'address.street1': temp.street1 },
    { 'address.$.street2': temp.street2, 'address.$.city': temp.city }
  )
    .select('address')
    .then((data) => {
      !data
        ? res.json({
            message: `Address failed to updated!`,
            success: true,
            data,
          })
        : res.json({
            message: `Address sucessfully updated!`,
            success: true,
            data,
          });
    })
    .catch((e) => {
      res.json({ message: `${e}`, success: false });
    });
};

const addCustomerAddressByPk = (req, res) => {
  Customer.findOneAndUpdate(
    { 'address.street1': { $ne: req.body.address.street1 } },
    {
      $push: {
        address: {
          country: req.body.address.country,
          street1: req.body.address.street1,
          street2: req.body.address.street2,
          city: req.body.address.city,
          state: req.body.address.state,
          zip: req.body.address.zip,
        },
      },
    }
  )
    .select('address')
    .then((data) => {
      if (!data) {
        res.json({ message: 'Address already taken! Please use another.', success: true });
      } else {
        res.json({ message: data, success: true });
      }
    })
    .catch((e) => {
      res.json({ message: `${e}`, success: false });
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

  // reference: https://mongoosejs.com/docs/Customers.html#constructing-documents

  const customer = new Customer({
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

const deleteCustomerDetailByPK = (req, res) => {
  Customer.findByIdAndRemove(ObjectId(req.params.customerId), (err, data) => {
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

const deleteCustomerAddressByPk = (req, res) => {
  Customer.updateOne(
    {
      'address.street1': req.body.address.street1,
    },
    {
      $pull: {
        address: { street1: req.body.address.street1 },
      },
    }
  )
    .then((result) => {
      console.log('console.log', result);

      // https://mongoosejs.com/docs/api.html#model_Model-updateOne
      !result.matchedCount >= 1 // number of documents matched
        ? res.json({ message: 'Address not found.', success: true })
        : res.json({ message: `Successfully deleted!`, success: true });
    })
    .catch((e) => {
      res.json({ message: e, success: false });
    });
};
module.exports = {
  getAllCustomers,
  addCustomer,

  getCustomerDetailByPk,
  updateCustomerDetailByPk,
  deleteCustomerDetailByPK,

  addCustomerAddressByPk,
  getCustomerAddressByPk,
  updateCustomerAddressByPk,
  deleteCustomerAddressByPk,
};
