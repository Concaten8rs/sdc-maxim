const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const {
  MONGO_HOSTNAME,
  MONGO_DB,
  MONGO_PORT,
} = process.env;

const dbConnectUrl = { LOCALURL: `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}` };

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/fetcher');
mongoose.connect(dbConnectUrl.LOCALURL);

const reviewSchema = mongoose.Schema({
  product: String,
  stars: Number,
  reviews: [{
    title: String,
    name: String,
    stars: Number,
    verified: Boolean,
    date: Date,
    content: String,
    comfort: Number,
    style: Number,
    value: Number,
    sizing: String,
    photo: String,
  }],
});

const Review = mongoose.model('Review', reviewSchema);

const find = (query, callback) => {
  Review.findById(query)
    .then((data) => {
      callback(null, data.toObject());
    });
};

const findAll = (callback) => {
  Review.find({})
    .then((data) => {
      const reviews = data.map((review) => (
        review.toObject()
      ));
      callback(null, reviews);
    });
};

const save = (data, callback) => {
  const reviews = [];

  data.forEach((elt) => {
    let review = new Review();
    review = Object.assign(review, elt);
    reviews.push(review);
  });

  Review.insertMany(reviews, (err, records) => (
    err ? callback(err) : callback(err, records)
  ));
};

const drop = () => {
  Review.collection.drop();
};

module.exports.save = save;
module.exports.find = find;
module.exports.findAll = findAll;
module.exports.drop = drop;
