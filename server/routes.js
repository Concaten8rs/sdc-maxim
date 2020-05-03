const router = require('express').Router();
const path = require('path');

const db = require('./db');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

router.get('/reviews/:product', (req, res) => {
  db.find(req.params.product, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data.reviews);
    }
  });
});

router.get('/reviews/stars/:product', (req, res) => {
  db.find(req.params.product, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data.stars);
    }
  });
});

// helpful/not helpful, also report (post)

module.exports = router;
