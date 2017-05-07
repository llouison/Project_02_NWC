// creating a variable for the add ingredient button
const  addButton = document.querySelector('.add_ingredient');
// adding an event listener to the button that creates a new ingredient input on the click and appends it to the ingredients list
addButton.addEventListener('click', (event) => {
    const ingredientContainer = document.getElementById('ingredientlist');
    const newIngredient = document.createElement('input');
    newIngredient.setAttribute('class', 'item');
    ingredientContainer.appendChild(newIngredient);  
})

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

    // accessing the value from the visible photo input
    const photourl = document.querySelector('#photourl').value;
    console.log(photourl);
    // setting a variable for the hidden photo input box
    const photoInput = document.querySelector('#photosub');
    console.log(photoInput);
    // changing the value of the photo input to the value entered
    photoInput.value = photourl;
    // locating the form 
    const myForm = document.getElementById('input_form');
    // reinitializing the submit function of the form
    myForm.submit(); 
})