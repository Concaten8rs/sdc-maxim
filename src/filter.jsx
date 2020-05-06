import React from 'react';

//TODO replace css :active with JS onClick
const Filter = (props) => (
  <div className="filter-box">
    <div className="dropdown">
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

      <div className="dropdown-text">
        <div className="option-text">1</div>
        <div className="option-text">2</div>
        <div className="option-text">3</div>
      </div>
    </div>

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

  </div>
);

export default Filter;
