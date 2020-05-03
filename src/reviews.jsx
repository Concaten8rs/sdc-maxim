import React from 'react';
import Review from './review.jsx';

const Reviews = ({reviews}) => (
  <div>
    {
      reviews.map((review) => (
        <Review review={review} />
      ))
    }
  </div>
);

export default Reviews;