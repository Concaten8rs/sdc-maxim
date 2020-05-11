import React from 'react';
import styles from '../dist/styles.css';

const SummaryWidget = ({ val }) => {
  const radius = 25;
  let fillColor;
  let circleColor;
  if (val > 50) {
    fillColor = '#006601';
    circleColor = '#008300';
  } else {
    fillColor = '#b85300';
    circleColor = '#E86900';
  }

  const circumference = 2 * 3.1415 * radius;
  const fillAmount = circumference * (val / 100);

  return (
    <div className={styles['widget-box']}>
      <div className={styles['summary-wBox']}>
        <svg height="53" width="53">
          <circle stroke="#efefef"
                  strokeWidth="2"
                  fill="none"
                  cx="26.5"
                  cy="26.5"
                  r={radius}
          />

          <circle className={styles['circle-fill']}
                  stroke={circleColor}
                  strokeWidth="2"
                  strokeDasharray={`${fillAmount}, ${circumference}`}
                  strokeLinecap="round"
                  fill="none"
                  cx="26.5"
                  cy="26.5"
                  r={radius}
          />

          <text textAnchor="middle"
                fill={fillColor}
                fontSize="16"
                fontWeight="bold"
                x="26.5"
                y="32"
          >
            {val}
          </text>
        </svg>
      </div>

    </div>
  );
};

export default SummaryWidget;
