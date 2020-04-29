const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/fetcher');

let reviewSchema = mongoose.Schema({
  textContent: String
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
    let review = new Review;
    console.log(review);
    review.textContent = elt.textContent;
    console.log(review);
    reviews.push(review);
  }

  Review.insertMany(reviews, (err, data) => {
    err ? callback(err) : callback(err, data);
  });
};

module.exports.save = save;
module.exports.find = find;