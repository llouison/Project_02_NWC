-- inserting values into the recipes table
INSERT INTO recipes (title, author, description, category_type, ingredients) VALUES
    (
        'Shrimp Scampi', 
        'Ren Stevens', 
        'Simply sauté the shrimp with garlic in butter and olive oil, splash it with some white wine, let the wine reduce while the shrimp cooks, and then toss it with fresh parsley, lemon juice and black pepper.',
        1, 
        '{"1 cup butter", "2 tablespoons prepared Dijon mustard"}'
    ),
    (
        'Meatloaf', 
        'Jane Jetson', 
        'Combine beef, egg, onion, milk and bread crumbs. Season with salt and pepper. Form into a loaf and place into baking dish. Pour brown sugar, mustard, and ketchup mixture over loaf. Bake at 350 degrees for 1 hour.', 
        3
    ),
    (
        'Chicken Fancesca', 
        'Barney Rubble', 
        'Evenly coat milk-soaked chicken in mix of bread crumbs, pecorino romano cheese, and parsley. Cook in large skillet until lightly browned. Bake in oven for 25 minutes.', 
        4
    ),
    (
        'Honey Garlic Pork Chops', 
        'Oscar Proud', 
        'Sear pork chops on preheated grill. Lightly brush on a glaze of ketchup,honey,soy sauce and garlic on each side of the chops as they cook. Grill until no longer pink in the center.', 
        5
    );