import React from 'react';
import '../dist/styles.css';

//TODO refactor into several components
const Review = ({review}) => (
  <div className='review wrapper'>
    <div className='side-wrapper'>
      <div className='header'>
        <div className='title'>
          {review.title}
        </div>
        <div className='star-wrapper'>
          <div className='stars'>
            <div className='stars-top' style={{width: `${review.stars / 5 * 100}%`}}>
              <span className='star'>★</span>
              <span className='star'>★</span>
              <span className='star'>★</span>
              <span className='star'>★</span>
              <span className='star'>★</span>
            </div>
            <div className='stars-bottom'>
              <span className='star'>★</span>
              <span className='star'>★</span>
              <span className='star'>★</span>
              <span className='star'>★</span>
              <span className='star'>★</span>
            </div>
          </div>
          <div className='recommend'>
            Would recommend
          </div>
        </div>
        <div className='reviewer-name'>
          fred - 3 months ago
        </div>
      </div>
      <div className='review-content'>
        {review.content}
      </div>
    </div>
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
  </div>
);

export default Review;