// importing the passport module
const passport = require('passport');
// importing the user model
const User = require('../../models/user');

/* exporting the function that adds and retrieves user info from the express session store */
module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.username);
  });

  passport.deserializeUser((username, done) => {
    User.findByUserName(username)
      .then(user => {
        done(null, user);
      })
      .catch(err => {
        done(err, null);
      });
  });
};