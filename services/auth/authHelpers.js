// importing the bycrypt module
const bcrypt = require('bcryptjs');

// creating a function that compares the entered password to the database password
function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
}

// creating a function that requires a login if user is not already logged in
function loginRequired(req, res, next) {
  if (!req.user) {
    return res.redirect('/auth/login');
  }

  return next();
}

// exporting the helper functions
module.exports = {
  comparePass,
  loginRequired,
};