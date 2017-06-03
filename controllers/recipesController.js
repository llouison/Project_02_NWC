// importing the recipe model
const Recipe = require('../models/recipe');

// creating a controller object
const controller = {};

// defining the view to render once the findall promise is complete
controller.index = (req, res) => {
    Recipe.findAll()
    .then(recipes => {
        res.render('recipes/recipes-index', {
            documentTitle: 'Now We\'re Cookin\'',
            recipesData: recipes,
        });
    })
    .catch(err => {
        res.status(400).json(err);
    });
};

// defining the view to render once the findbyid promise is complete
controller.show = (req, res) => {
    // console.log(req.params);
    Recipe.findById(req.params.id)
    .then(recipe => {
        res.render('recipes/recipes-single', {
            documentTitle: `Now We're Cookin'`,
            recipe: recipe,
        });
    })
    .catch(err => {
        res.status(400).json(err);
    });
};

// defining the view to render once the create new recipe promise is complete
controller.create = (req, res) => {
    Recipe.create({
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        category_type: req.body.category_type,
        ingredients: req.body.ingredients,
        photo: req.body.photo,
    })
    .then(recipe => {
        res.redirect('/recipes');
    })
    .catch(err => {
        res.status(400).json(err);
    });
};

// defining the view to render once the edit recipe promise is complete
controller.edit = (req, res) => {
    if (req.user !== undefined) {
        Recipe.findById(req.params.id)
        .then(recipe => {
            console.log(recipe.photo);
            res.render('recipes/recipes-edit', {
                documentTitle: 'Now We\'re Cookin\' - Edit',
                recipe: recipe,
                id: req.params.id,
                username: req.user.username,
            });
        })
        .catch(err => {
            res.status(400).json(err);
        });
    }
    else {
        res.redirect('/auth/register');
    }
};

// defining the view to render once the update recipe promise is complete
controller.update = (req, res) => {
    Recipe.update(
    {
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        category_type: req.body.category_type,
        ingredients: req.body.ingredients,
        photo: req.body.photo,
    }, req.params.id)
    .then(recipe => {
        res.redirect('/recipes');
    })
    .catch(err => {
        res.status(400).json(err);
    });
};

// defining the view to render once the delete promise is complete
controller.destroy = (req, res) => {
    if ((req.user !== undefined) && (req.user.username === 'admin')) {
        Recipe.destroy(req.params.id)
        .then(() => {
            res.redirect('/recipes');
        })
        .catch(err => {
            res.status(400).json(err);
        });
    }
    else {
        res.redirect('/auth/register');
    }      
};

//exporting the controller
module.exports = controller;