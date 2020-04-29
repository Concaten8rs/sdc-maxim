const router = require('express').Router();
const path = require('path');
const utility = require('./lib/utility.js');

const db = require('./db');

router.get('/', (req, res) => {
  db.find((err, data) => {
    err ? res.sendStatus(500) : res.json(data);
  });
});

router.post('/', (req, res) => {
  console.log('posting');
  utility.seed(15, (err1, data1) => {
    db.save(req.body, (err, data) => {
      console.log(req.body);
      err ? res.sendStatus(500) : res.sendStatus(200);
    });
  }, drop = true);
  // db.save(req.body, (err, data) => {
  //   console.log(req.body);
  //   err ? res.sendStatus(500) : res.sendStatus(200);
  // });
});

module.exports = router;