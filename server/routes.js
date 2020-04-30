const router = require('express').Router();
const path = require('path');

const db = require('./db');

router.get('/', (req, res) => {
  db.find((err, data) => (
    err ? res.sendStatus(500) : res.json(data)
  ));
});

router.post('/', (req, res) => {
  db.save(req.body, (err) => (
    err ? res.sendStatus(500) : res.sendStatus(200)
  ));
});

router.get('/reviews/:product', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

router.get('/reviews/:product/stars', (req, res) => {
  db.find(req.params.product, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      const stars = [];

      data.forEach((obj) => {
        stars.push(obj.stars);
      });

      res.json(stars);
    }
  });
});

// helpful/not helpful, also report (post)


module.exports = router;
