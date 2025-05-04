const Loan = require('../models/loan');
const moment = require('moment');

// Create a loan
const createLoan = async (req, res) => {
  const { customerId, itemDescription, loanAmount, issueDate, dueDate, frequency, interest, graceDays } = req.body;

  try {
    const loan = new Loan({
      userId: req.user.id, // The userId is extracted from JWT in the protect middleware
      customerId,
      itemDescription,
      loanAmount,
      issueDate: moment(issueDate).toDate(),
      dueDate: moment(dueDate).toDate(),
      frequency,
      interest: interest || 0,
      graceDays: graceDays || 0,
      status: 'pending', // Initially, the status is 'pending'
    });

    await loan.save();
    res.status(201).json(loan);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Error creating loan' });
  }
};

// Get all loans for the shopkeeper
const getLoans = async (req, res) => {
  try {
    const loans = await Loan.find({ userId: req.user.id }).populate('customerId', 'name phone'); // Populating customer details
    res.status(200).json(loans);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Error fetching loans' });
  }
};

// Update loan status (e.g., mark as paid, overdue)
const updateLoanStatus = async (req, res) => {
  const { loanId } = req.params;
  const { status } = req.body;

  try {
    const loan = await Loan.findById(loanId);

    if (!loan) {
      return res.status(404).json({ error: 'Loan not found' });
    }

    // Only update status if it's a valid status
    if (!['pending', 'paid', 'overdue'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }

    loan.status = status;
    await loan.save();

    res.status(200).json(loan);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Error updating loan status' });
  }
};

module.exports = { createLoan, getLoans, updateLoanStatus };