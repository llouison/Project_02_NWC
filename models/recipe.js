// importing the pg-promise
const db = require('../db/config');

// creating a model object
const Recipe = {};

// creating the findall method
Recipe.findAll = () => {
    return db.query('SELECT * FROM recipes ORDER BY id DESC');
};

// creating the findbyid method
Recipe.findById = id => {
    return db.oneOrNone('SELECT * FROM recipes WHERE id = $1', [id]);
};

// creating the create new recipe method
Recipe.create = recipe => {
    return db.one(
        `
        INSERT INTO recipes
        (title, author, description, category_type, ingredients)
        VALUES ($1, $2, $3, $4, $5) RETURNING *
        `,
        [recipe.title, recipe.author, recipe.description, recipe.category_type, recipe.ingredients]
    );
};

// creating the update recipe method
Recipe.update = (recipe, id) => {
    return db.none(
        `
        UPDATE recipes SET
        title = $1,
        author = $2,
        description = $3,
        category_type = $4,
        ingredients = $5
        WHERE id = $6
        `,
        [recipe.title, recipe.author, recipe.description, recipe.category_type, recipe.ingredients, id]
    );
};

// creating the delete method
Recipe.destroy = id => {
    return db.none(
        `
        DELETE FROM recipes
        WHERE id = $1
        `,
        [id]
    );
};

// exporting the recipe model
module.exports = Recipe;