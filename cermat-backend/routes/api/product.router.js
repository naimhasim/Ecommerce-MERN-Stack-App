const router = require('express').Router();

const productController = require('../../feature/products/product.controller');

router.get('/find/:name', productController.findProductByName);
// router.get('/add/:name', productController.addNewProduct);
router.get('/', productController.getAllProduct);

module.exports = router;
