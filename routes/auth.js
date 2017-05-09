// importing express
const express = require('express');
// importing the users controller
const controller = require('../controllers/usersController');
// setting a variable for the express router
const router = express.Router();
// importing the auth helper
const authHelpers = require('../services/auth/authHelpers');
const passport = require('../services/auth/local');

// setting a route for the user login view
router.get('/login', (req, res) => {
  res.render('auth/log-in', {
    message: 'User Login',
  });
});

// setting a route for the user registration view
router.get('/register', (req, res) => {
  res.render('auth/register', {
    message: 'User Registration',
  });
});

// setting a route for the create user function
router.post('/register', controller.create);
router.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/user',
    failureRedirect: '/auth/login',
    failureFlash: false,
  })
);

// setting a route for the user logout function
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// exporting the router
module.exports = router;