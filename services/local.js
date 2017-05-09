// importing the passport module and the strategry method
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
// importing the passport file
const init = require('./passport');
// importing the user model
const User = require('../../models/user');
//importing the auth helper functions
const authHelpers = require('./authHelpers');
// creating an options object
const options = {};

init();
/* creating a function that first checks to see if the passed username exists, then compares the password to the database password*/
passport.use(
  new LocalStrategy(options, (username, password, done) => {
    User.findByUserName(username)
      .then(user => {
        if (!user) {
          return done(null, false);
        }
        if (!authHelpers.comparePass(password, user.password)) {
          return done(null, false);
        } else {
          return done(null, user);
        }
      })
      .catch(err => {
        return done(err);
      });
  })
);

// exporting the passport
module.exports = passport;