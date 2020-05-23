const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// create data for Postgres products table:
const psqlProductsCsvWriter = createCsvWriter({
  path: './sdc-server/lib/data/psqlProductsData2.csv',
  header: [
    { id: 'product_id', title: 'product_id' },
    { id: 'product_name', title: 'product_name' },
    { id: 'product_stars', title: 'product_stars' }
  ]
});

const psqlProductData = [];
const pseudoRandomStarRating = [3, 4, 5, 1, 4, 5, 3, 5, 4, 2]
for (var i = 5000001; i <= 10000000; i++) {
  let row = {
    product_id: i,
    product_name: faker.commerce.productName(),
    product_stars: pseudoRandomStarRating[i % 10]
  }
  psqlProductData.push(row);
}


psqlProductsCsvWriter
  .writeRecords(psqlProductData)
  .then(() => console.log('The psqlProductsData2.csv file was written successfully'));