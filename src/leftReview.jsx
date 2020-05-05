import React from 'react';
import Stars from './stars.jsx';

const LeftReview = ({review}) => {
  const elapsed = Math.floor((new Date() - new Date(review.date)) / 86400000);
  let displayDate;

  if (elapsed === 1) {
    displayDate = `${elapsed} day ago`;
  } else if (elapsed < 30) {
    displayDate = `${elapsed} days ago`;
  } else if (elapsed < 365) {
    displayDate = `${Math.floor(elapsed / 30)} months ago`;
  } else {
    displayDate = 'More than a year ago';
  }

  return (
  <div className='side-wrapper'>
    <div className='header'>
      <div className='title'>
        {review.title}
      </div>
      <Stars review={review} />
      <div className='reviewer-name'>
        {review.name} - {displayDate}
      </div>
    </div>
    <div className='review-content'>
      {review.content}
    </div>
  </div>
  );
};

export default LeftReview;