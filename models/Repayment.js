const mongoose = require('mongoose');

const repaymentSchema = new mongoose.Schema({
  loanId: { type: mongoose.Schema.Types.ObjectId, ref: 'Loan', required: true },
  repaymentAmount: { type: Number, required: true },
  repaymentDate: { type: Date, required: true },
});

module.exports = mongoose.model('Repayment', repaymentSchema);