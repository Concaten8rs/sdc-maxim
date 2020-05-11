import React from 'react';
import styles from '../dist/styles.css';

const Filter = (props) => (
  <div className={styles['filter-box']}>

    <div className={styles.menu}>
      <button className={styles['filter-button']}>
        <div className={styles['filter-flex']}>

          <div className={styles['filter-text']}>
            <span>sort by</span>
            <span className={styles['drop-text']} >most recent</span>
          </div>

          <div className={styles['arrow-holder']}>
            <div className={styles['filter-arrow']}>
              <svg width="24" height="24" viewBox="0 0 24 24">
                <g transform="scale(1 -1) rotate(90 24.235 0)" >
                  <path d="M9.06 12.5l7.47-7.47-1.06-1.06-8.53 8.53 8.53 8.53 1.06-1.06z"></path>
                </g>
              </svg>
            </div>
          </div>

        </div>
      </button>

      <ul className={`${styles.submenu} ${styles.tooltop}`}>
        <li className={styles['filter-item']}>most recent</li>
        <li className={`${styles['filter-item']} ${styles['mid-item']}`} >highest rated</li>
        <li className={`${styles['filter-item']} ${styles['mid-item']}`} >lowest rated</li>
        <li className={`${styles['filter-item']} ${styles['mid-item']} ${styles['bottom-item']}`} >most helpful</li>
      </ul>

    </div>

    <div className={styles.menu}>
      <button className={styles['filter-button']}>
        <div className={styles['filter-flex']}>

          <div className={styles['filter-text']}>
            <span>filter by</span>
            <span className={styles['drop-text']} >all ratings</span>
          </div>

          <div className={styles['arrow-holder']}>
            <div className={styles['filter-arrow']}>
              <svg width="24" height="24" viewBox="0 0 24 24">
                <g transform="scale(1 -1) rotate(90 24.235 0)" >
                  <path d="M9.06 12.5l7.47-7.47-1.06-1.06-8.53 8.53 8.53 8.53 1.06-1.06z"></path>
                </g>
              </svg>
            </div>
          </div>

        </div>
      </button>

      <ul className={styles['submenu-filter']}>
        <li className={styles['filter-item']} >all ratings</li>
        <li className={`${styles['filter-item']} ${styles['mid-item']}`}>5 stars</li>
        <li className={`${styles['filter-item']} ${styles['mid-item']}`} >4 stars</li>
        <li className={`${styles['filter-item']} ${styles['mid-item']}`} >3 stars</li>
        <li className={`${styles['filter-item']} ${styles['mid-item']}`} >2 stars</li>
        <li className={`${styles['filter-item']} ${styles['mid-item']}`} >1 stars</li>
      </ul>

    </div>

  </div>
);

export default Filter;
