import React from 'react';
import RatingWidget from './ratingWidget.jsx';
import SizeWidget from './sizeWidget.jsx';
import Helpful from './helpful.jsx';

const RightReview = ({review}) => (
  <div className='side-wrapper'>
    <div className='rating-widgets widget-wrapper'>
      <RatingWidget val={review.comfort} type={'Comfort'} />
      <RatingWidget val={review.style} type={'Style'} />
      <RatingWidget val={review.value} type={'Value'} />
      <SizeWidget val={review.sizing} />
    </div>
    <Helpful />
  </div>
);

export default RightReview;
