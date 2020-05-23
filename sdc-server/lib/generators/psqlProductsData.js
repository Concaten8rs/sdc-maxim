const faker = require('faker');
const fs = require('fs');
const file = fs.createWriteStream('./sdc-server/lib/data/psqlProductsData.csv')

const pseudoRandomStarRating = [3, 4, 5, 1, 4, 5, 3, 5, 4, 2]
for (var i = 1; i <= 10000000; i++) {
  row = `${i},${faker.commerce.productName()},${pseudoRandomStarRating[i%10]}\n`
  file.write(row);
}

file.end();