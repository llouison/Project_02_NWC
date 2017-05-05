// setting up a variable that logs every query
const options = {
  connect: (client, dc, isFresh) => {
    // do this every time the database connects
    console.log('Connected to database:', client.connectionParameters.database)
  },
  query: (e) => {
    // do this every time a query is made to the database
    console.log('making query ========> ' + e.query);
  },
  receive: (data, result, e) => {
    // do this every time the app receives data from the database
    console.log('completed query =======> ' + e.query);
  },
  disconnect: (client, dc) => {
    // do this every time the database disconnects (usually after every query)
    console.log('Disconnecting from database:', client.connectionParameters.database);
  }
};

// importing pg-promise
const pgp = require('pg-promise')(options);

// setting a variable for pg-promise
let db;

// creating if statements to determine the instance of pgp to use
const pgp = require('pg-promise')();

let db;

if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
  db = pgp({
    database: 'adaquote_development',
    port: 5432,
    host: 'localhost',
  });
} else if (process.env.NODE_ENV === 'production') {
  db = pgp(process.env.DATABASE_URL);
}

//exporting pg-promise
module.exports = db;