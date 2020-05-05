import React from 'react';
import Recommend from './recommend.jsx';

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
  <Recommend review={review} />
</div>
);

export default Stars;
