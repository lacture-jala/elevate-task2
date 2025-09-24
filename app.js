const express = require('express');
const app = express();

// Middleware (optional logging)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Route
app.get('/', (req, res) => {
  res.json({ message: 'Hello from Node.js!' });
});

module.exports = app;
