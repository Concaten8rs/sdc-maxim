const fs = require('fs');
const db = require('../db');


const seed = () => {
  console.log('seeding');
  fs.readFile('dbSnapshot.json', (err, products) => {
    console.log('file read');
    db.save(products, (error, data) => (
      err ? console.log('err') : console.log('db seeded')
    ));
  });
};

seed();
