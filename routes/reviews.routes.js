const express = require('express');
const reviewcontroller= require('../controllers/review.controller');
const router = express.Router();

router.post('/create',reviewcontroller.addReview);
 
module.exports = router;