const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Mount your routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api',       require('./routes/customerRoutes'));
app.use('/api',       require('./routes/loanRoutes'));
app.use('/api',       require('./routes/repaymentRoutes'));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
