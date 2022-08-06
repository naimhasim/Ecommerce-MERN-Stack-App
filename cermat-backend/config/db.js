const mongoose = require('mongoose');

const connectDB = () => {
  try {
    mongoose.set('runValidators', true);

    return mongoose.connect(process.env.MONGO_URI, {});
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
