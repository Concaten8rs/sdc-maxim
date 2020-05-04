import React from 'react';
import RatingWidget from './ratingWidget.jsx';
import SizeWidget from './sizeWidget.jsx';

const RightReview = ({review}) => (
  <div className='side-wrapper'>
  <div className='rating-widgets widget-wrapper'>
    <div>
      <RatingWidget val={review.comfort} type={'Comfort'} />
    </div>
    <div>
      <RatingWidget val={review.style} type={'Style'} />
    </div>
    <div>
      <RatingWidget val={review.value} type={'Value'} />
    </div>
    <div>
      <SizeWidget val={review.sizing} />
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