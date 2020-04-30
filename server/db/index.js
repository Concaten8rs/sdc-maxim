const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/fetcher');

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

const find = (callback) => {
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
module.exports.drop = drop;
