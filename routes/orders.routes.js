const express = require('express');
const ordercontroller= require('../controllers/order.controller');
const router = express.Router();


router.post('/create',ordercontroller.createOrder);
router.get('/read',ordercontroller.getAllOrders);

module.exports = router;