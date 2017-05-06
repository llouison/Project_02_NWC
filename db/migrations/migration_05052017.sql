-- connecting to the recipe development database
\connect recipe_development

-- altering the datatype of the ingredients column in the recipes table
ALTER TABLE recipes 
ALTER COLUMN ingredients 
SET DEFAULT '{}';