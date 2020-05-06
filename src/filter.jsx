import React from 'react';

const Filter = (props) => (
  <div className="filter-box">

    <div className="menu">
      <button className="filter-button">
        <div className="filter-flex">

          <div className="filter-text">
            <span>sort by</span>
            <span className="drop-text" >most recent</span>
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

      <ul className="submenu tooltip">
        <li className="filter-item" >most recent</li>
        <li className="filter-item mid-item" >highest rated</li>
        <li className="filter-item mid-item" >lowest rated</li>
        <li className="filter-item mid-item bottom-item" >most helpful</li>
      </ul>

    </div>

    <div className="menu">
      <button className="filter-button">
        <div className="filter-flex">

          <div className="filter-text">
            <span>filter by</span>
            <span className="drop-text" >all ratings</span>
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

      <ul className="submenu-filter">
        <li className="filter-item" >all ratings</li>
        <li className="filter-item mid-item" >5 stars</li>
        <li className="filter-item mid-item" >4 stars</li>
        <li className="filter-item mid-item" >3 stars</li>
        <li className="filter-item mid-item" >2 stars</li>
        <li className="filter-item mid-item" >1 stars</li>
      </ul>

    </div>

  </div>
);

export default Filter;
