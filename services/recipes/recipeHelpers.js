// importing isomorphic fetch
require('isomorphic-fetch');

function getRecipe(req, res, next) {
  console.log('hello world! i\'m in recipesHelpers');
  next();
}

// exporting the function
module.exports = {
  getRecipe: getRecipe,
}