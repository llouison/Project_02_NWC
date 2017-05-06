-- connecting to the recipe development database
\connect recipe_development

-- adding the photo column to the recipe development database

ALTER TABLE recipes 
ADD COLUMN photo VARCHAR(255);