CREATE KEYSPACE IF NOT EXISTS target_reviews;

USE target_reviews;

CREATE TABLE reviews (
  id UUID,
  product_id INT,
  product_name TEXT,
  product_stars TINYINT,
  review_id INT,
  title TEXT,
  name TEXT,
  stars TINYINT,
  verified BOOLEAN,
  date DATE,
  content TEXT,
  comfort TINYINT,
  style TINYINT,
  value TINYINT,
  sizing TEXT,
  photo TEXT,
  PRIMARY KEY (id, product_id, review_id)
);