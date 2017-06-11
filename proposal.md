*** Lisa Louison / 5.2.17 ***

# Now We're Cookin' Proposal

## What is Now We're Cookin'?

Ever had a strike of genius in the kitchen? You experimented with some ingredients and it was a hit with the family? Don't want to forget that *magical* combination? Well, that's where the Now We're Cookin' app comes in. 

Now We're Cookin' is a recipe CRUD app. On the app, users are able to: 
- Access the database to view all it's current recipes
- Add their own recipes to the database (including title, author, description, photo?, and category)
- Edit recipes in the database
- And delete recipes from the database

## Technologies To Be Used
- HTML/EJS
- Node & Express
- MVC Pattern
- SQL/ PG-Promise
- fetch (maybe jQuery)
- CSS3
- JavaScript
- Heroku web hosting

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

## Initial thoughts on database structure

Recipe.

| id | title               | author          | description        | photo? | category |
|--- |:-------------------:|:---------------:|:------------------:|:------:| --------:|
| 1  | 'Shrimp Scampi'     | 'Rachel Ray'    | 'description text' | 'url'  | 1        |
| 3  | 'Beef Stroganof'    | 'Gordon Ramsey' | 'description text' | 'url'  | 2        |
| 4  | 'Chicken Francesca' | 'Wolfgang Puck' | 'description text' | 'url'  | 3        |

Category.

| id | category     |
|----| ------------:|
| 1  | 'Shrimp'     |
| 2  | 'Fish'       |
| 3  | 'Beef'       |
| 4  | 'Chicken'    |
| 5  | 'Vegetarian' |

## Advanced Features
- I'm not sure how feasible including the ability to upload a photo would be and how I would get the database to store it in a separate public folder, but I'd really like to try it
- I would like to figure out a way to include an ingredients list with serving size and a list of steps 
- Integrating a third-party recipe API (I found two listed below) would allow me to have an explore page where users can explore recipes that aren't on the database...maybe by particular ingrediients.
- I'd like to add user authenitcation
- I'd like to have my app consider accessibility

## Links and Resources

- https://spoonacular.com/food-api
- https://developer.edamam.com/
- http://stackoverflow.com/questions/14853779/adding-input-elements-dynamically-to-form
- https://www.w3schools.com/tags/att_input_accept.asp
- http://allrecipes.com/
- http://wave.webaim.org/extension/
- http://youmightnotneedjquery.com/