const express = require('express');
 const productController= require('../controllers/product.controller');
 const router = express.Router();

 router.post('/create',productController.createProduct);
 router.get('/read',productController.getAllProducts);

 module.exports = router;