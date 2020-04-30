const db = require('../db');
const AWS = require('./config.js');

const randomReview = () => {
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

  const contents = [
    'Bought 3 of these shirts in various colors for my son. He said they are very comfortable and soft.',
    'Great product, fit and finish',
    'These did not fit my husband.',
    'had to return to store!!',
    'I thought it would be larger, but its fine',
    'Great deal and easy to get',
    'Looks nice on my handsome husband.',
    'Well made',
    'INCREDIBLE value for your money',
    'whoever made this should feel ashamed',
  ];

  const photos = [
    `${AWS.url}/sample-jacket-1.jpg`,
    `${AWS.url}/sample-jacket-2.jpg`,
    `${AWS.url}/sample-pants-2.jpg`,
    `${AWS.url}/sample-shirt-1.jpg`,
    `${AWS.url}/sample-shirt-2.jpg`,
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
    date: Math.floor(Math.random() * 16), // can do better here
    content: contents[Math.floor(Math.random() * contents.length)],
    comfort: (Math.random() * 6).toFixed(1),
    style: (Math.random() * 6).toFixed(1),
    value: (Math.random() * 6).toFixed(1),
    sizing: ['too small', 'true to size', 'too big'][Math.floor(Math.random() * 3)],
    photo: photos[Math.floor(Math.random() * photos.length)],
  };
};

const randomProduct = () => {
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
    reviews.push(randomReview());
  }

  return {
    product: products[Math.floor(Math.random() * products.length)],
    stars: Math.floor(Math.random() * 6),
    reviews,
  };
};

const seed = (num, callback, drop = true) => {
  if (drop) {
    db.drop();
  }

  const reviews = [];

  for (let i = 0; i < num; i += 1) {
    reviews.push(randomProduct());
  }

  db.save(reviews, (err, data) => (
    err ? callback(err) : callback(err, data)
  ));
};

module.exports.seed = seed;
