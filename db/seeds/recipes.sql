-- inserting values into the recipes table
INSERT INTO recipes (title, author, description, category_type, ingredients, photo) VALUES
    (
        'Shrimp Scampi', 
        'Ren Stevens', 
        'Simply sauté the shrimp with garlic in butter and olive oil, splash it with some white wine, let the wine reduce while the shrimp cooks, and then toss it with fresh parsley, lemon juice and black pepper.',
        1, 
        '{"1 (16 ounce) package linguine","1/4 cup olive oil","1/4 cup butter","6 cloves garlic",minced,"1 pound peeled and deveined medium shrimp","3/4 cup white wine","1/2 cup lemon juice","1/4 teaspoon crushed red pepper","1 tablespoon chopped fresh basil","1/2 teaspoon salt","1/2 pint grape tomatoes",halved,"2 tablespoons grated Pecorino Romano cheese","1 tablespoon chopped fresh parsley"}',
        'https://c1.staticflickr.com/1/66/161224077_17bc6c759f_z.jpg?zz=1'
    ),
    (
        'Cheesy Bacon Meatloaf', 
        'Jane Jetson', 
        'Combine beef, egg, onion, milk and bread crumbs. Season with salt and pepper. Form into a loaf and place into baking dish. Pour brown sugar, mustard, and ketchup mixture over loaf. Bake at 350 degrees for 1 hour.', 
        3,
        '{"1 1/2 pounds ground beef","1 egg","1 onion",chopped,"1 cup milk","1 cup dried bread crumbs","salt and pepper to taste","2 tablespoons brown sugar","2 tablespoons prepared mustard","1/3 cup ketchup"}',
        'https://media.giphy.com/media/zG1Ahac9UHcIw/giphy.gif'
    ),
    (
        'Chicken Fancesca', 
        'Barney Rubble', 
        'Evenly coat milk-soaked chicken in mix of bread crumbs, pecorino romano cheese, and parsley. Cook in large skillet until lightly browned. Bake in oven for 25 minutes.', 
        4,
        '{"4 large skinless","boneless chicken breast halves","1 cup milk","or as needed","1 cup bread crumbs","1 cup grated Pecorino Romano cheese","2 tablespoons chopped fresh parsley","1 cup olive oil","salt and ground black pepper to taste","1 lemon","thinly sliced","1 cup white wine","1 cup chicken broth","1/4 cup lemon juice","1 ounce brandy-based orange liqueur (such as Grand Marnier®)","or to taste"}',
        'http://images.media-allrecipes.com/userphotos/560x315/2179438.jpg'
    ),
    (
        'Pineapple Grilled Pork Chops', 
        'Oscar Proud', 
        'Mix together the drained pineapple juice, brown sugar, soy sauce, and garlic powder together in a large plastic zipper bag, and smush the bag a few times with your hands to mix the marinade and dissolve the sugar. Place the pork chops into the marinade, squeeze out any air in the bag, seal it, and refrigerate overnight. Reserve the pineapple rings. Preheat an outdoor grill for medium heat, and lightly oil the grate.  Remove the chops from the marinade, shaking off excess, and grill until browned, the meat is no longer pink inside, and the meat shows good grill marks, 5 to 8 minutes per side. Brush several times with marinade and let the marinade cook onto the surface of the meat. Discard excess marinade. While the meat is grilling, place 4 pineapple rings onto the grill, and allow to cook until hot and the slices show grill marks; serve the chops topped with the grilled pineapple rings.', 
        5,
        '{"1 (8 ounce) can pineapple rings","juice drained and reserved","1/4 cup brown sugar","1/4 cup soy sauce","1/4 teaspoon garlic powder","4 pork chops","1 pinch ground black pepper"}',
        'http://images.media-allrecipes.com/userphotos/250x250/857812.jpg'
    );