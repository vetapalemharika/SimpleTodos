const Loan = require('../models/loan');
const Repayment = require('../models/Repayment');
const moment = require('moment');

// Record a repayment
const recordRepayment = async (req, res) => {
  const { loanId, repaymentAmount, repaymentDate } = req.body;

  try {
    // Find the loan
    const loan = await Loan.findById(loanId);
    if (!loan) {
      return res.status(404).json({ error: 'Loan not found' });
    }

    // Create the repayment record
    const repayment = new Repayment({
      loanId,
      repaymentAmount,
      repaymentDate: moment(repaymentDate).toDate(),
    });

    // Save the repayment
    await repayment.save();

    // Update the loan balance
    loan.loanAmount -= repaymentAmount;
    if (loan.loanAmount <= 0) {
      loan.status = 'paid';
    }
    await loan.save();

    res.status(201).json(repayment);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Error recording repayment' });
  }
};

// Get all repayments for a specific loan
const getRepayments = async (req, res) => {
  const { loanId } = req.params;

  try {
    // Find repayments for the given loanId
    const repayments = await Repayment.find({ loanId });

    res.status(200).json(repayments);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Error fetching repayments' });
  }
};

module.exports = { recordRepayment, getRepayments };