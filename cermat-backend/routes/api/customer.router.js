const router = require('express').Router();

const customerController = require('../../feature/customers/customer.controller');

/* 

  api/customer

*/

router
  .post('/:customerId/address', customerController.addCustomerAddressByPk)
  .get('/:customerId/address', customerController.getCustomerAddressByPk)
  .patch('/:customerId/address', customerController.updateCustomerAddressByPk);

router.get('/index', customerController.getAllCustomers).post('/', customerController.addCustomer);

router
  .get('/:customerId', customerController.getCustomerDetailByPk)
  .put('/:customerId', customerController.updateCustomerDetailByPk)
  .delete('/:customerId', customerController.deleteCustomerDetailByPK);

module.exports = router;
