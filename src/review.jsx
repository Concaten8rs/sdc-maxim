import React from 'react';
import '../dist/styles.css';
import LeftReview from './leftReview.jsx';
import RightReview from './rightReview.jsx';

const Review = ({review}) => (
  <div className='review wrapper'>
    <LeftReview review={review} />
    <RightReview review={review} />
  </div>
);

export default Review;
