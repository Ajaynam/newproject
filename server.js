// server.js
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes'); // Updated import

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use(userRoutes); // Updated middleware

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
