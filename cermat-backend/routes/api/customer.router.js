const router = require('express').Router();

const customerController = require('../../feature/customers/customer.controller');

router /* api/customer */
  .post('/', customerController.addCustomer)
  .get('/index', customerController.getAllCustomers)
  .get('/:customerId', customerController.getCustomerByPk)
  .put('/:customerId', customerController.updateCustomerDetailByPk)
  .delete('/:customerId', customerController.deleteCustomerByPK);

module.exports = router;
