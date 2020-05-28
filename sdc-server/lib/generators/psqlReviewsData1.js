const faker = require('faker');
const fs = require('fs');
const file = fs.createWriteStream('./sdc-server/lib/data/psqlReviewData1.csv')

const pseudoRandomStarRating = [3, 4, 5, 1, 4, 2, 3, 5, 4, 2];
const pseudoRandomOutOf5 = [1, 5, 2, 4, 3, 3, 4, 2, 5, 1];
const pseudoRandomOutOf5copy = [5, 1, 3, 4, 2, 3, 4, 2, 1, 5];
const pseudoRandomRatingAmount = [0, 8, 3, 2, 5, 7, 9, 6, 1, 3];
const pseudoRandomSizing = ['too big', 'true to size', 'too small', 'true to size', 'true to size', 'too small', 'true to size', 'too big', 'true to size', 'true to size'];
const pseudoRandomVerified = [true, false, false, false, true, true, true, false, false, true];

const rowHeader = `product_id,title,username,stars,verified,date,content,comfort,style,value,sizing,photo\n`;
file.write(rowHeader);

function writeNTimes(n, writer, encoding, callback) {
  let i = n;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i--;
      id++;
      let rows = '';
      for (var j = 0; j <= pseudoRandomRatingAmount[i % 10]; j++) {
        const row = `${id},${faker.company.catchPhrase()},${faker.internet.userName()},${pseudoRandomStarRating[j % 10]},${pseudoRandomVerified[j % 10]},${faker.date.between('2020-01-01', '2020-05-05').toString().replace(/G.+/g, 'PST')},${faker.lorem.words()},${pseudoRandomOutOf5[j % 10]},${pseudoRandomOutOf5[j % 5]},${pseudoRandomOutOf5copy[j % 10]},${pseudoRandomSizing[j % 10]},https://loremflickr.com/200/200/clothing?random=${id + j}\n`;
        rows += row;
      }
      if (i === 0) {
        writer.write(rows, encoding, callback);
      } else {
        if (id % 100000 === 0) {
          let percentComplete = id/50000
          console.log(`successfully wrote through product ID: ${id}, ${percentComplete}% complete`);
        }
        ok = writer.write(rows, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}

writeNTimes(5000000, file, 'utf-8', ()=>{
  file.end()
});