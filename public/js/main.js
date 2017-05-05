console.log('connected');


// creating a variable for the add ingredient button
const  addButton = document.querySelector('.add_ingredient');

// adding an event listener to the button that creates a new ingredient input on the click and appends it to the ingredients list
addButton.addEventListener('click', () => {
    const previousIngredient = document.getElementById('ingredientlist');
    console.log(previousIngredient);
    let newIngredient = document.createElement('input');
    newIngredient.setAttribute('name', 'ingredients');
    newIngredient.setAttribute('class', 'form');
    newIngredient.setAttribute('id', 'ingredients');
    newIngredient.setAttribute('type', 'text');
    previousIngredient.appendChild(newIngredient);  
})