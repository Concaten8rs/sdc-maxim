import React from 'react';
import Review from './review.jsx';
import styles from '../dist/styles.css';

const Reviews = ({ reviews }) => (
  <div>
    {
      reviews.map((review) => (
        <Review review={review} key={review.review_id}/>
      ))
    }
  </div>
);

export default Reviews;