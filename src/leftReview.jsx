import React from 'react';
import Stars from './stars.jsx';

const LeftReview = ({review}) => (
  <div className='side-wrapper'>
  <div className='header'>
    <div className='title'>
      {review.title}
    </div>
    <Stars review={review} />
    <div className='reviewer-name'>
      {review.name} - 3 months ago
    </div>
  </div>
  <div className='review-content'>
    {review.content}
  </div>
</div>
);

export default LeftReview;