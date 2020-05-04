import React from 'react';

const RightReview = ({review}) => (
  <div className='side-wrapper'>
  <div className='rating-widgets'>
    <div>
      {review.comfort}
    </div>
    <div>
      {review.style}
    </div>
    <div>
      {review.value}
    </div>
    <div>
      {review.sizing}
    </div>
  </div>
  <div className='help'>
    4 guests found this review helpful. Did you?
    <div>
      helpful
    </div>
    <div>
      not helpful
    </div>
  </div>
  <div className='report'>
    Report review
  </div>
</div>
);

export default RightReview;