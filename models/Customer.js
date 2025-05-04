const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  trustScore: { type: Number, required: true },
  creditLimit: { type: Number, required: true },
});

module.exports = mongoose.model('Customer', customerSchema);