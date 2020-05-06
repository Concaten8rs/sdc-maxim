import React from 'react';

const Filter = (props) => (
  <div className="filter-box">
    <button className="filter-button">
      <div className="filter-flex">
        <div className="filter-text">
          sort by
        </div>
        <div className="arrow-holder">
          <div className="filter-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <g transform="scale(1 -1) rotate(90 24.235 0)" >
                <path d="M9.06 12.5l7.47-7.47-1.06-1.06-8.53 8.53 8.53 8.53 1.06-1.06z"></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </button>

    <button className="filter-button">
      <div className="filter-flex">
        <div className="filter-text">
          filter by
        </div>
        <div className="arrow-holder">
          <div className="filter-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <g transform="scale(1 -1) rotate(90 24.235 0)" >
                <path d="M9.06 12.5l7.47-7.47-1.06-1.06-8.53 8.53 8.53 8.53 1.06-1.06z"></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </button>
  </div>
);

export default Filter;
