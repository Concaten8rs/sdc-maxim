const path = require('path');

const db = require('../db');
// const AWS = require('./config.js');
const markov = require('./markov.js');

const randomReview = (reviewText) => {
  const titles = [
    'Great for the price',
    'Great product',
    'meh',
    'gets the job done',
    'good enough for me',
    'help im trapped in a seed factory',
    'terrible',
  ];

  const names = [
    'Aron',
    'b',
    'Goose',
    'Iceman',
    'catfish',
    'fritz zwicky',
    'charlie brown',
    'jonie',
    'mavis',
    'Maverick',
    'bee',
    'Bea',
  ];

  const randomDate = (start, end) => (
    new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
  );

  const photos = [
    `/sample-jacket-1.jpg`,
    `/sample-jacket-2.jpg`,
    `/sample-pants-2.jpg`,
    `/sample-shirt-1.jpg`,
    `/sample-shirt-2.jpg`,
  ];

  const start = photos.length;
  const end = 5 * photos.length;

  for (let i = start; i < end; i += 1) {
    photos[i] = 'false';
  }

  return {
    title: titles[Math.floor(Math.random() * titles.length)],
    name: names[Math.floor(Math.random() * titles.length)],
    stars: Math.floor(Math.random() * 6),
    verified: [true, false][Math.floor(Math.random() * 2)],
    date: randomDate(new Date(2020, 0, 1), new Date()),
    content: reviewText,
    comfort: Math.min(5.0, (Math.random() * 6).toFixed(1)),
    style: Math.min(5.0, (Math.random() * 6).toFixed(1)),
    value: Math.min(5.0, (Math.random() * 6).toFixed(1)),
    sizing: ['too small', 'true to size', 'too big'][Math.floor(Math.random() * 3)],
    photo: photos[Math.floor(Math.random() * photos.length)],
  };
};

const randomProduct = (reviewTexts) => {
  const products = [
    'short sleeve polo',
    'comfy shorts',
    'socks (up)',
    'socks (down)',
    'pants',
    'shoes',
    'long sleeve shirt',
    'parka',
    'jacket',
  ];

  const reviews = [];

  for (let i = 0; i < Math.floor(Math.random() * 25) + 1; i += 1) {
    reviews.push(randomReview(reviewTexts.pop()));
  }

  return {
    product: products[Math.floor(Math.random() * products.length)],
    stars: Math.floor(Math.random() * 6),
    reviews,
  };
};

const seed = (num, callback) => {
  markov.buildModel(path.join(__dirname, 'reviewData.json'), (err, model) => {
    const products = [];

    for (let i = 0; i < num; i += 1) {
      const reviewTexts = [];

      const reviewNum = Math.floor(Math.random() * 26);

      for (let j = 0; j < reviewNum; j += 1) {
        reviewTexts.push(markov.generate(model, 15));
      }

      products.push(randomProduct(reviewTexts));
    }

    db.save(products, (error, data) => (
      err ? callback(error) : callback(error, data)
    ));
  });
};

module.exports.seed = seed;
