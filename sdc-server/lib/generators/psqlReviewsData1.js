const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// create data for Postgres reviews table:
const psqlReviewsCsvWriter = createCsvWriter({
  path: './sdc-server/lib/data/psqlReviewsData1.csv',
  header: [
    { id: 'review_id', title: 'review_id' },
    { id: 'product_id', title: 'product_id' },
    { id: 'title', title: 'title' },
    { id: 'username', title: 'username' },
    { id: 'stars', title: 'stars' },
    { id: 'verified', title: 'verified' },
    { id: 'date', title: 'date' },
    { id: 'content', title: 'content' },
    { id: 'comfort', title: 'comfort' },
    { id: 'style', title: 'style' },
    { id: 'value', title: 'value' },
    { id: 'sizing', title: 'sizing' },
    { id: 'photo', title: 'photo' }
  ]
});

//NOTE: Excluding review_id, will be serialized when seeded
const psqlReviewsData = [];
const pseudoRandomStarRating = [3, 4, 5, 1, 4, 2, 3, 5, 4, 2]
const pseudoRandomOutOf5 = [1, 5, 2, 4, 3, 3, 4, 2, 5, 1]
const pseudoRandomRatingAmount = [2, 10, 4, 8, 6, 6, 8, 4, 10, 2]
const pseudoRandomSizing = ['xs', 's', 'm', 'l', 'xl']
const pseudoRandomVerified = [true, false]
for (var i = 1; i <= 500000; i++) {
  for (var j = 1; j <= pseudoRandomRatingAmount[i%10]; j++) {
    let row = {
      review_id: null, // will this work? if not, adjust
      product_id: i,
      title: faker.company.catchPhrase(),
      username: faker.internet.userName(),
      stars: pseudoRandomStarRating[j%10],
      verified: pseudoRandomVerified[j%2],
      date: faker.date.recent(),
      content: faker.lorem.words(),
      style: pseudoRandomOutOf5[j%10],
      value: pseudoRandomOutOf5[j%5],
      sizing: pseudoRandomSizing[j%5],
      photo: faker.internet.url()
    }
    psqlReviewsData.push(row);
  }
}


psqlReviewsCsvWriter
  .writeRecords(psqlReviewsData)
  .then(() => console.log('The psqlReviewsData1.csv file was written successfully'));