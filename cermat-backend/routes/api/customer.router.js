const router = require('express').Router();

const customerController = require('../../feature/customers/customer.controller');

router.get('/', customerController.getAllCustomer);

module.exports = router;
