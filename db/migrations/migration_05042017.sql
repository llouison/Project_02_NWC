-- connecting to the recipe development database
\connect recipe_development

-- adding the ingredients column to the recipe development database
ALTER TABLE recipes 
ADD COLUMN ingredients text[];