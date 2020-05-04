import React from 'react';

//TODO fix star fill percentage
const Stars = ({review}) => (
  <div className='star-wrapper'>
  <div className='stars'>
    <div className='stars-top' style={{width: `${(review.stars / 5 * 100) - 30}%`}}>
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
      <img src="check.svg" className='green-filter' ></img>
    <span className='recommend-text' >Would recommend</span>
  </div>
</div>
);

export default Stars;

