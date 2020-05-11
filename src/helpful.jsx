import React from 'react';
import styles from '../dist/styles.css';

const randomHelp = () => Math.floor(Math.random() * 10);

const Helpful = () => (
  <div className={styles.help}>
    <div className={styles['help-text']}>
    {randomHelp()} guests found this review helpful. Did you?
    </div>
    <div className={styles['help-widget-btns']}>
      <div>
        <button type="button" className={styles['help-btn']}>
          Helpful
        </button>
      </div>
      <div>
        <button type="button" className={styles['help-btn']}>
          Not helpful
        </button>
      </div>
      <div className={styles['report-btn']}>
      Report review
      </div>
    </div>
  </div>
);

export default Helpful;
