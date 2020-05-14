const router = require('express').Router();
const path = require('path');

const db = require('./db');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

router.get('/reviews/all', (req, res) => {
  db.findAll((err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      console.log('all reviews');
      res.json(data);
    }
  });
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

router.get('/rev', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

router.get('/rev/bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/bundle.js'));
});

module.exports = router;
