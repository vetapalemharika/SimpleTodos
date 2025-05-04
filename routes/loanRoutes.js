const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Use authentication and loan/repayment routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api', require('./routes/customerRoutes'));
app.use('/api', require('./routes/loanRoutes')); // Add loan routes
app.use('/api', require('./routes/repaymentRoutes')); // Add repayment routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});