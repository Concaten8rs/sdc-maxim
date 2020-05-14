const fs = require('fs');
const db = require('../db');


const seed = () => {
  db.drop();
  fs.readFile('dbSnapshot.json', (err, products) => {
    db.save(JSON.parse(products), (error, data) => (
      error ? console.log('err') : console.log('db seeded')
    ));
  });
};

seed();
