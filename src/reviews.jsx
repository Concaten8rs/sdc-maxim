import React from 'react';
import Review from './review.jsx';

const Reviews = ({reviews}) => (
  <div>
    {
      reviews.map((review) => {
        return <Review review={review} key={review._id}/>
      })
    }
  </div>
);

export default Reviews;