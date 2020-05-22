DROP KEYSPACE IF EXISTS target_reviews;

CREATE KEYSPACE IF NOT EXISTS target_reviews;

USE target_reviews;

CREATE TABLE products (
  product_id INT,
  product_name TEXT,
  product_stars SMALLINT,
  PRIMARY KEY (product_id)
);

CREATE TABLE reviews (
  product_id INT,
  product_name TEXT,
  review_id INT,
  title TEXT,
  name TEXT,
  stars SMALLINT,
  verified BOOLEAN,
  date DATE,
  content TEXT,
  comfort SMALLINT,
  style SMALLINT,
  value SMALLINT,
  sizing TEXT,
  photo TEXT,
  PRIMARY KEY (product_id, date, review_id)
);
