const express = require('express');
const { addCustomer } = require('../controllers/customerController');
const router = express.Router();

router.post('/customer', addCustomer);

module.exports = router;