const express = require('express');
const { recordRepayment, getRepayments } = require('../controllers/repaymentController');
const { protect } = require('../utils/authUtils');
const router = express.Router();

// Protect all repayment routes with JWT authentication middleware
router.use(protect);

// Route to record a repayment for a loan
router.post('/repayment', recordRepayment);

// Route to get all repayments for a specific loan
router.get('/repayments/:loanId', getRepayments);

module.exports = router;