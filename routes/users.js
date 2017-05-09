// importing express
const express = require('express');
// setting a variable for the express router
const userRoutes = express.Router();

// setting a route for the user profile view
userRoutes.get('/', (req, res) => {
  res.json({ user: 'user profile page placeholder', userInfo: req.user });
});

// exporting the user routes
module.exports = userRoutes;