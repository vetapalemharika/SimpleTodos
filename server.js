const express = require('express');
const mongoose = require('mongoose');


// Set Mongoose strictQuery to false to avoid the deprecation warning
mongoose.set('strictQuery', false);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/crediKhaata')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

const app = express();
app.use(cors());
app.use(express.json());

// Your API routes here...

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});