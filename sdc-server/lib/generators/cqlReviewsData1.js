const faker = require('faker');
const fs = require('fs');
const file = fs.createWriteStream('./sdc-server/lib/data/cqlReviewData1.csv')

const pseudoRandomStarRating = [3, 4, 5, 1, 4, 2, 3, 5, 4, 2];
const pseudoRandomOutOf5 = [1, 5, 2, 4, 3, 3, 4, 2, 5, 1];
const pseudoRandomOutOf5copy = [5, 1, 3, 4, 2, 3, 4, 2, 1, 5];
const pseudoRandomRatingAmount = [0, 8, 3, 2, 5, 7, 9, 6, 1, 3];
const pseudoRandomSizing = ['too big', 'true to size', 'too small', 'true to size', 'true to size', 'too small', 'true to size', 'too big', 'true to size', 'true to size'];
const pseudoRandomVerified = [true, false, false, false, true, true, true, false, false, true];
const pseudoRandomYear = ['2017', '2018', '2019', '2020'];
const pseudoRandomMonth = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
const pseudoRandomDay = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];

`${pseudoRandomYear[(i + j) % 4] }-${ pseudoRandomMonth[(i + j) % 12] } -${ pseudoRandomDay[(i + j) % 30] }`

const rowHeader = `product_id,review_id,title,username,stars,verified,date,content,comfort,style,value,sizing,photo\n`;
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
        const row = `${id},${faker.random.uuid()},${faker.company.catchPhrase()},${faker.internet.userName()},${pseudoRandomStarRating[j % 10]},${pseudoRandomVerified[j % 10]},${pseudoRandomYear[(i+j)%4]}-${pseudoRandomMonth[(i+j)%12]}-${pseudoRandomDay[(i+j)%30]},${faker.lorem.words()},${pseudoRandomOutOf5[j % 10]},${pseudoRandomOutOf5[j % 5]},${pseudoRandomOutOf5copy[j % 10]},${pseudoRandomSizing[j % 10]},https://loremflickr.com/200/200/clothing?random=${id + j}\n`;
        rows += row;
      }
      if (i === 0) {
        writer.write(rows, encoding, callback);
      } else {
        if (id % 100000 === 0) {
          let percentComplete = id / 50000
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

writeNTimes(5000000, file, 'utf-8', () => {
  file.end()
});