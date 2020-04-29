const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/fetcher');

let reviewSchema = mongoose.Schema({
  product: String,
  title: String,
  name: String,
  stars: Number,
  verified: Boolean,
  date: Number,
  content: String,
  comfort: Number,
  style: Number,
  value: Number,
  sizing: String,
  photo: String,
});

let Review = mongoose.model('Review', reviewSchema);

let find = (callback) => {
  Review.find({})
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
    //TODO gotta be a better way to do this
    let review = new Review;
    // review.product = elt.product;
    // review.title = elt.title;
    // review.name = elt.name;
    // review.stars = elt.stars;
    // review.verified = elt.verified;
    // review.date = elt.date;
    // review.content = elt.content;
    // review.comfort = elt.comfort;
    // review.style = elt.style;
    // review.value = elt.value;
    // review.sizing = elt.sizing;
    // review.photo = elt.photo;
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