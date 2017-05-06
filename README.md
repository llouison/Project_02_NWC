# Project #2 - Now We're Cookin'

## User Story
As a user, I want to have a place where I can create, view, edit, and delete recipes.

### Acceptance Criteria:
Users should be able to:
- Access the database to view all it's current recipes
- Add their own recipes to the database (including title, author, description, photo?, and category)
- Edit recipes in the database
- And delete recipes from the database

## Wireframes
#### Landing on home page

![NWC1](./assets/NWC1.png)

#### Recipes list page

![NWC2](assets/NWC2.png)

#### Single Recipe view

![NWC3](assets/NWC3.png)

#### Edit Recipe view

![NWC4](assets/NWC4.png)

#### Search page

![NWC5](assets/NWC5.png)

## Technologies Used
- HTML/EJS: the app uses embedded javascript to render information on the page.
- Node & Express: the app has its own server, built using Express.
- MVC Pattern: the app uses the Model View Controller (MVC) programming design pattern. 
- SQL/ PG-Promise: The app persists data and uses multiple SQL tables
- fetch (maybe jQuery)
- CSS3: The app is well-designed and considers user experience and usability
- JavaScript: the app has front-end interactivity
- Spoonacular API: 
- Heroku web hosting

## Approach taken
1. 
2. 

## Major Coding Win
```js
//created a migration that added an ingredients column to my recipe table that used the array datatype. It's very important to set the default value to an empty array otherwise it will be null and throw errors. 
ALTER TABLE recipes 
ADD COLUMN ingredients text[] SET DEFAULT '{}';

//learned how to insert arrays into SQL
UPDATE recipes
SET ingredients = '{"1 cup butter", "1 tablespoon chopped garlic"}'
WHERE id = 5;

//figured out how to display each individual ingredient by using .forEach in ejs
<% recipe.ingredients.forEach(function(ingredient) { %>
    <p class='ingredient'><%= ingredient %></p>
<% }) %>

// created a function that retrieves individual ingredients and concatenates them to sql format to be updated in the database

// creating a variable for the submit button
const submitButton = document.querySelector('#submit1');

// adding an event listener to the button that prevents the default action
submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    // creating a variable for all the ingredients
    const ingredients = document.querySelectorAll('.item');
    // setting an empty string
    let itemString = '';
    // concatenating the empty string to each ingredient. The last ingredient doesn't get a comma
    ingredients.forEach(function(ingredient, index){
        if(index === (ingredients.length-1)){
            itemString = itemString.concat(`${ingredient.value}`);
        }
        else {
            itemString = itemString.concat(`${ingredient.value},`);
        }
    })
    // setting a variable for the hidden ingredients input box
    const ingredientInput = document.querySelector('#ingredients');
    // changing the value of the ingredient input to the concatenated string with {} to be recognized by sql
    ingredientInput.value = `{${itemString}}`;
    // locating the form 
    const myForm = document.getElementById('input_form');
    // reinitializing the submit function of the form
    myForm.submit(); 
})
```

## How-to-use/Download and Installation Instructions

### Objective
The objective of the app is for users to easily be able to create, view, edit, and delete recipes.

1. 
2. 
3. 
4. 
5. 

## Unsolved Problems/Next Steps
- If there is a blank ingredient input, the sql array is incorrect and throws an error