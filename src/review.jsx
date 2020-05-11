import React from 'react';
import '../dist/styles.css';
import LeftReview from './leftReview.jsx';
import RightReview from './rightReview.jsx';
import styles from '../dist/styles.css';

const Review = ({review}) => (
  <div className={`${styles.review} ${styles.wrapper}`}>
    <LeftReview review={review} />
    <RightReview review={review} />
  </div>
);

export default Review;
