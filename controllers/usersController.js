// importing the bcrypt module
const bcrypt = require('bcryptjs');
// importing the user model
const User = require('../models/user');

// creating a controller object
const controller = {};

// defining the function that creates a new user and encrypts the password
controller.create = (req, res, next) => {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);

  User.create({
    username: req.body.username,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: hash,
  })
    .then(user => {
      req.login(user, err => {
        if (err) return next(err);
        res.redirect('/recipes');
      });
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

// exporting the controller
module.exports = controller;