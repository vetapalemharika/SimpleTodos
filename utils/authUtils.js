const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

// Generate JWT token
const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

// Middleware to protect routes (checks if the user is authenticated via JWT)
const protect = async (req, res, next) => {
  const token = req.header('Authorization') && req.header('Authorization').split(' ')[1];  // Bearer <token>

  if (!token) {
    return res.status(401).json({ error: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);  // Verify JWT
    req.user = { id: decoded.userId };  // Attach user ID to the request object
    next();  // Allow the request to proceed to the next middleware or route handler
  } catch (err) {
    res.status(401).json({ error: 'Token is not valid' });
  }
};

module.exports = { generateToken, protect };