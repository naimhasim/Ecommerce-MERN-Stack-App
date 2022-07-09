const connectDB = require('./db');

module.exports = {
  port: process.env.PORT || 8081,
  connectDB,
};
