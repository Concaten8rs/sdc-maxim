import React from 'react';
import RatingWidget from './ratingWidget.jsx';
import SizeWidget from './sizeWidget.jsx';
import Helpful from './helpful.jsx';

//TODO: remove extraneous divs
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
    <Helpful />
  </div>
);

export default RightReview;
