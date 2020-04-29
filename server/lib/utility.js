const db = require('../db');

const randomReview = () => {

  let products = [
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

  let titles = [
    'Great for the price',
    'Great product',
    'meh',
    'gets the job done',
    'good enough for me',
    'help im trapped in a seed factory',
    'terrible',
  ];

  let names = [
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

  let contents = [
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

  let photos = [
    'url1',
    'url2',
    'url3',
    'url4',
    'url5',
  ];

  let start = photos.length;
  let end = 5 * photos.length;

  for (let i = start; i < end; i++) {
    photos[i] = 'false';
  }

  return {
    product: products[Math.floor(Math.random() * products.length)],
    title: titles[Math.floor(Math.random() * titles.length)], //mkv chain thing for title, content, author?
    name: names[Math.floor(Math.random() * titles.length)],
    stars: Math.floor(Math.random() * 6),
    verified: [true, false][Math.floor(Math.random() * 2)],
    date: Math.floor(Math.random() * 16), //can do better here
    content: contents[Math.floor(Math.random() * contents.length)],
    comfort: (Math.random() * 6).toFixed(1),
    style: (Math.random() * 6).toFixed(1),
    value: (Math.random() * 6).toFixed(1),
    sizing: ['too small', 'true to size', 'too big'][Math.floor(Math.random() * 3)],
    photo: photos[Math.floor(Math.random() * photos.length)],
  };
};

const seed = (num, callback, drop = true) => {
  if (drop) {
    db.drop();
  }

  let reviews = [];

  for (let i = 0; i < num; i++) {
    reviews.push(randomReview());
  }

  db.save(reviews, (err, data) => {
    err ? callback(err) : callback(err, data);
  });
};

module.exports.seed = seed;