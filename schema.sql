DROP DATABASE IF EXISTS target_reviews;

CREATE DATABASE target_reviews;

\c target_reviews;

CREATE TABLE products
(
  product_id INT PRIMARY KEY,
  product_name VARCHAR(100) NOT NULL,
  product_stars SMALLINT
);

CREATE TABLE reviews
(
  review_id SERIAL PRIMARY KEY,
  product_id INTEGER,
  title VARCHAR(100),
  username VARCHAR(40),
  stars SMALLINT,
  verified BOOLEAN,
  date DATE,
  content TEXT,
  comfort SMALLINT,
  style SMALLINT,
  value SMALLINT,
  sizing VARCHAR(20),
  photo VARCHAR(300)
);

CREATE TABLE users
(
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(40),
  verified BOOLEAN
);