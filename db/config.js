// importing pg-promise
const pgp = require('pg-promise')();

// setting a variable for pg-promise
let db;

// creating if statements to determine the instance of pgp to use
if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
    db = pgp({
        database: 'recipe_development',
        port: 5432,
        host: 'localhost'
    });
} else if (process.env.NODE_ENV === 'production') {
    db = pgp({
        database: 'recipe_production',
        port: 5432,
        host: 'localhost'
    });
}

//exporting pg-promise
module.exports = db;