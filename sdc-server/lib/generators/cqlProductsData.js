const faker = require('faker');
const fs = require('fs');
const file = fs.createWriteStream('./sdc-server/lib/data/cqlProductData.csv')

const pseudoRandomStarRating = [3, 4, 5, 1, 4, 5, 3, 5, 4, 2];
const rowHeader = `product_id,product_name,product_stars\n`;
file.write(rowHeader);


function writeNTimes(n, writer, encoding, callback) {
  let i = n;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i--;
      id++;
      const row = `${id},${faker.commerce.productName()},${pseudoRandomStarRating[i % 10]}\n`;
      if (i === 0) {
        writer.write(row, encoding, callback);
      } else {
        if (id % 100000 === 0) {
          let percentComplete = id / 100000
          console.log(`successfully wrote through product ID: ${id}, ${percentComplete}% complete (PD)`);
        }
        ok = writer.write(row, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}

writeNTimes(10000000, file, 'utf-8', () => {
  file.end()
});