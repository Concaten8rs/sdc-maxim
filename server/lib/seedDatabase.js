const utility = require('./utility');
const db = require('../db');

// db.drop();

utility.seed(100, () => {
  console.log('database seeded');
});
