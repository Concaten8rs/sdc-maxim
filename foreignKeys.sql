
ALTER TABLE reviews FOREIGN KEY (product_id) REFERENCES products (product_id);

ALTER TABLE reviews FOREIGN KEY (username) REFERENCES users (username);

ALTER TABLE reviews FOREIGN KEY (verified) REFERENCES users (verified);
