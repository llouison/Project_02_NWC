// importing express and the controller
const express = require('express');
const controller = require('../controllers/recipesController');

// creating a variable for the express router method
const recipesRoutes = express.Router();

// setting a route for the index view
recipesRoutes.get('/', controller.index);
// setting a route for the create recipe view
recipesRoutes.get('/add', (req, res) => {
    res.render('recipes/recipes-add', {
        documentTitle: `Now We're Cookin' - New Recipe`
    });
});
// setting a route for the recipe edit function
recipesRoutes.get('/edit/:id', controller.edit);
// setting a route for the single recipe function
recipesRoutes.get('/:id', controller.show);
// setting a route for the create new recipe function
recipesRoutes.post('/', controller.create);
// setting a route for the update recipe function
recipesRoutes.put('/:id', controller.update);
// setting a route for the delete recipe function
recipesRoutes.delete('/:id', controller.destroy);

// exporting the router
module.exports = recipesRoutes;