const Customer = require('../models/customer');

const addCustomer = async (req, res) => {
  const { name, phone, address, trustScore, creditLimit } = req.body;
  const customer = new Customer({ name, phone, address, trustScore, creditLimit });

  try {
    await customer.save();
    res.status(201).json(customer);
  } catch (err) {
    res.status(400).json({ error: 'Error adding customer' });
  }
};

module.exports = { addCustomer };