// importing pg-promise
const db = require('../db/config');

// creating a model object
const User = {};

// creating a method to find the username in the database
User.findByUserName = userName => {
  return db.oneOrNone('SELECT * FROM users WHERE username = $1', [userName]);
};

// creating a method to create a new user 
User.create = user => {
  return db.one(
    `
      INSERT INTO users
      (username, first_name, last_name, email, password)
      VALUES ($1, $2, $3, $4, $5) RETURNING *
    `,
    [user.username, user.first_name, user.last_name, user.email, user.password]
  );
};

// exporting the user model
module.exports = User;