-- creating the categories and recipes tables in the recipe development database
\connect recipe_development2

CREATE TABLE IF NOT EXISTS categories (
    id BIGSERIAL PRIMARY KEY,
    category_type VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS recipes (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(30),
    author VARCHAR(255),
    description VARCHAR(1028),
    category_type INTEGER REFERENCES categories(id),
    ingredients text[] DEFAULT '{}',
    photo VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS users (
  id BIGSERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  email VARCHAR(255),
  password TEXT UNIQUE NOT NULL
);