import React from 'react';
import Recommend from './recommend.jsx';
import styles from '../dist/styles.css';

const Stars = ({review}) => (
  <div className={styles['star-wrapper']}>
  <div className={styles.stars}>
    <div className={styles['stars-top']} style={{width: `${(review.stars / 5 * 100)}%`}}>
      <span className={styles.star}>★</span>
      <span className={styles.star}>★</span>
      <span className={styles.star}>★</span>
      <span className={styles.star}>★</span>
      <span className={styles.star}>★</span>
    </div>
    <div className={styles['stars-bottom']}>
      <span className={styles.star}>★</span>
      <span className={styles.star}>★</span>
      <span className={styles.star}>★</span>
      <span className={styles.star}>★</span>
      <span className={styles.star}>★</span>
    </div>
  </div>
  <Recommend review={review} />
</div>
);

export default Stars;
