// setting up variables for node modules
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

// importing dotenv config function
require('dotenv').config();

// creating a variable for the express function
const app = express();

// importing the recipeHelper function for the search view
const recipeHelpers = require('./services/recipes/recipeHelpers');
// importing routes
const recipesRoutes = require('./routes/recipesRoutes');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users')

// setting up port for express to listen to for activity
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});

// directing express views
app.set('views', path.join(__dirname, 'views'));
// telling express the view file type
app.set('view engine', 'ejs');

// directing express to static files
app.use('/static', express.static(path.join(__dirname, 'public')));
// setting up the morgan logger function to run on dev script
app.use(logger('dev'));
// setting up the cookie parser module
app.use(cookieParser());
// setting up the body parser function to run on json info
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// setting up the method override module to run on http method key word
app.use(methodOverride('_method'));
// setting up the express session module
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true
}));
// setting up the passport module
app.use(passport.initialize());
app.use(passport.session());

// setting up the route to the index page
app.get('/',(req, res) => {
    res.render('index', {
        documentTitle: 'Now We\'re Cookin\'',
        subTitle: 'A collection of our favorite foods and how to make em\'',
        message: 'Now We\'re Cookin\'',
    });
});

// setting up the route to the search page
app.get('/search', recipeHelpers.getRecipe, (req, res) => {
    res.render('search', {
        documentTitle: 'Now We\'re Cookin\'',
        subTitle: 'Can\'t find what you\'re loking for? Try searching for it here!',
        message: 'Powered by',
        recipeHits: res.locals.recipeHits, 
    });
});

// directing the app to use the recipesRoutes for all recipes urls
app.use('/recipes', recipesRoutes);
// directing the app to use the authRoutes for user authentication
app.use('/auth', authRoutes);
// directing the app to use the userRoutes for users
app.use('/user', userRoutes);

// handling 404 errors
app.get('*', (req, res) => {
    res.status(404).send({message: 'Spaghetti-oh-no!'});
});