DROP KEYSPACE IF EXISTS target_reviews;

CREATE KEYSPACE target_reviews WITH replication = {'class': 'SimpleStrategy', 'replication_factor' : 1};

USE target_reviews;

CREATE TABLE products (
  product_id INT,
  product_name TEXT,
  product_stars SMALLINT,
  PRIMARY KEY (product_id)
);

CREATE TABLE reviews (
  product_id INT,
  review_id UUID,
  title TEXT,
  username TEXT,
  stars SMALLINT,
  verified BOOLEAN,
  date DATE,
  content TEXT,
  comfort SMALLINT,
  style SMALLINT,
  value SMALLINT,
  sizing TEXT,
  photo TEXT,
  PRIMARY KEY (product_id, date)
) WITH CLUSTERING ORDER BY (date DESC);

-- COPY products (product_id,product_name,product_stars) FROM '/Users/maximrietveld/git/sdc/sdc-maxim/sdc-server/lib/data/cqlProductData.csv';

-- COPY reviews (product_id,review_id,title,username,stars,verified,date,content,comfort,style,value,sizing,photo) FROM '/Users/maximrietveld/git/sdc/sdc-maxim/sdc-server/lib/data/cqlReviewData1.csv';

-- COPY reviews (product_id,review_id,title,username,stars,verified,date,content,comfort,style,value,sizing,photo) FROM '/Users/maximrietveld/git/sdc/sdc-maxim/sdc-server/lib/data/cqlReviewData2.csv';