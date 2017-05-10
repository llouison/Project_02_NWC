// importing isomorphic fetch
require('isomorphic-fetch');
// importing dot env
require('dotenv').config();
// setting variable for the applicaiton id and api key
const APP_ID = process.env.APPLICATION_ID;
const API_KEY = process.env.API_SECRET_KEY;

function getRecipe(req, res, next) {
  // console.log('body', req.query.search)
  if(!req.query.search){
    res.locals.recipeHits = 'Sorry, nothing found';
    return next();
  }
  console.log('i am fetching')
  fetch(`https://api.edamam.com/search?q=${req.query.search}&app_id=${APP_ID}&app_key=${API_KEY}`)
    .then((fetchRes) => {
      return fetchRes.json();
    }).then((jsonFetchRes) => {
        // adding properties to res.locals
        res.locals.recipeHits = jsonFetchRes.hits;
        next();
    }).catch((err) => {
        console.log(err);
        // displaying an error message on the page if there is one
        res.locals.recipeHits = 'Sorry, nothing found';
        next();
    });
}

// exporting the function
module.exports = {
  getRecipe: getRecipe,
}