const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  fname: {
    type: String,
  },
  lname: {
    type: String,
    required: true,
  },
  hashedPassword: {
    type: String,
    required: true,
  },
  emailVerified: {
    type: Boolean,
    default: false,
    required: true,
  },
  address: [
    {
      _id: false,
      country: {
        type: String,
        required: true,
      },
      street1: {
        type: String,
        required: true,
        unique: true,
      },
      street2: {
        type: String,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      zip: {
        type: String,
        required: true,
      },
    },
  ],
  shippingAddress: {
    street1: {
      type: String,
      required: true,
    },
    street2: {
      type: String,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    zip: {
      type: String,
      required: true,
    },
  },
});

const Customer = mongoose.model('customer', customerSchema);

module.exports = {
  Customer,
};
