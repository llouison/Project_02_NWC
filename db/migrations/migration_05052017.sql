-- connecting to the recipe development database
\connect recipe_development

-- adding the ingredients column to the recipe development database
ALTER TABLE recipes 
ALTER COLUMN ingredients 
SET DATA TYPE ingredients text[] not null default '{}';