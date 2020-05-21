DROP DATABASE IF EXISTS target_reviews;

CREATE DATABASE target_reviews;

\c target_reviews;

CREATE TABLE products
(
  product_id SERIAL NOT NULL PRIMARY KEY,
  product_name VARCHAR(100) NOT NULL,
  product_stars TINYINT NOT NULL
);

CREATE TABLE reviews
(
  review_id SERIAL PRIMARY KEY,
  product_id INTEGER REFERENCES products(product_id),
  title VARCHAR(100),
  name VARCHAR(40),
  stars TINYINT,
  verified BOOLEAN,
  date DATE,
  content TEXT,
  comfort TINYINT,
  style TINYINT,
  value TINYINT,
  sizing VARCHAR(10),
  photo VARCHAR(100)
);