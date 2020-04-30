const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/fetcher');

let reviewSchema = mongoose.Schema({
  product: String,
  stars: Number,
  reviews: [{
    title: String,
    name: String,
    stars: Number,
    verified: Boolean,
    date: Number, //convert to date later
    content: String,
    comfort: Number,
    style: Number,
    value: Number,
    sizing: String,
    photo: String,
  }],
});

let Review = mongoose.model('Review', reviewSchema);

let find = (product = {}, callback) => {
  Review.find({product})
    .then((data) => {
      let reviews = data.map(review => {
        return review.toObject();
      });
      callback(null, data);
    });
};

let save = (data, callback) => {
  console.log('saving');
  let reviews = [];

  for (let elt of data) {
    let review = new Review;
    review = Object.assign(review, elt);

    reviews.push(review);
  }

  Review.insertMany(reviews, (err, data) => {
    err ? callback(err) : callback(err, data);
  });
};

let drop = () => {
  Review.collection.drop();
};

module.exports.save = save;
module.exports.find = find;
module.exports.drop = drop;