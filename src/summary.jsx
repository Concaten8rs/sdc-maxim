import React from 'react';
import RatingWidget from './ratingWidget.jsx';
import SizeWidget from './sizeWidget.jsx';
import SummaryWidget from './summaryWidget.jsx';
import SummaryStars from './summaryStars.jsx';
import styles from '../dist/styles.css';

const Summary = () => (
  <div className={styles.summary}>
    <h2 className={styles['summary-title']}>Guest Rating & Reviews</h2>
    <div className={styles['summary-container']}>

      <div className={styles['summary-rating']}>

        <div className={styles['rating-stars']}>
          <div className={styles['rating-num']}>
            4.6
          </div>
          <div className={styles['summary-stars']}>
            <SummaryStars val={4.6} />
          </div>
          <div className={styles['stars-num']}>
            122 star ratings
          </div>
        </div>

        <div className={styles['rating-recommend']}>
          <div className={styles['rating-circle']}>
            <SummaryWidget val={94} />
          </div>
          <div className={styles['recommend-percent']}>
            94% would recommend
          </div>
          <div className={styles['recommend-num']}>
            51 recommendations
          </div>
        </div>

      </div>

    </div>

    <div className={styles['review-container']}>
      <div className={styles['review-dash']}>
        <div className={styles['dash-box']}>
        <RatingWidget val={4.7} type={'Style'} />
        </div>
        <div className={styles['dash-box']}>
          <RatingWidget val={4.9} type={'Comfort'} />
        </div>
        <div className={styles['dash-box']}>
          <RatingWidget val={4.8} type={'Value'} />
        </div>
        <div className={styles['dash-box']}>
          <SizeWidget val={'true to size'} />
        </div>
      </div>
    </div>
  </div>
);

export default Summary;