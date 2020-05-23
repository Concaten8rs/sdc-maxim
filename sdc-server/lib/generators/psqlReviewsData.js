const faker = require('faker');
const fs = require('fs');
const file = fs.createWriteStream('./sdc-server/lib/data/psqlReviewData.csv')

const pseudoRandomStarRating = [3, 4, 5, 1, 4, 2, 3, 5, 4, 2]
const pseudoRandomOutOf5 = [1, 5, 2, 4, 3, 3, 4, 2, 5, 1]
const pseudoRandomRatingAmount = [0, 8, 3, 2, 5, 7, 9, 6, 1, 3]
const pseudoRandomSizing = ['too big', 'true to size', 'too small', 'true to size', 'true to size', 'too small', 'true to size', 'too big', 'true to size', 'true to size']
const pseudoRandomVerified = [true, false, false, false, true, true, true, false, false, true]
for (var i = 1; i <= 1000000; i++) {
  for (var j = 0; j <= pseudoRandomRatingAmount[i % 10]; j++) {
    row = `${i},${faker.company.catchPhrase()},${faker.internet.userName()},${pseudoRandomStarRating[j % 10]},${pseudoRandomVerified[j%10]},${faker.date.recent()},${faker.lorem.words()},${pseudoRandomOutOf5[j%10]},${pseudoRandomOutOf5[j%5]},${pseudoRandomSizing[j%10]},${faker.internet.url()}\n`
    file.write(row);
  }
}

file.end();