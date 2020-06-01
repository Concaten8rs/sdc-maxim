const router = require('express').Router();
const path = require('path');

const db = require('./db/index.js');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

router.get('/api/products/:product_id/reviews', (req, res) => {
  const productID = req.params.product_id;
  const query = `SELECT * FROM reviews WHERE product_id = ?`
  db.execute(query, [productID], {prepare: true}, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.status(200).json(data.rows);
    }
  });
});

router.post('/api/products/:product_id/reviews', (req, res) => {
  const reviewData = req.body;
  const productID = req.params.product_id;
  const query = `INSERT INTO reviews (product_id, title, username, stars, verified, date, content, comfort, style, value, sizing, photo) VALUES (?, ${reviewData.title}, ${reviewData.username}, ${reviewData.stars}, ${reviewData.verified}, ${reviewData.date}, ${reviewData.content}, ${reviewData.comfort}, ${reviewData.style}, ${reviewData.value}, ${reviewData.sizing}, ${reviewData.photo})`
  db.execute(query, [productID], { prepare: true }, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

// insert patch and delete routes

router.get('/rev', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

router.get('/rev/bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/bundle.js'));
});

module.exports = router;
