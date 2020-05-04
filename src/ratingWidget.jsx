import React from 'react';

const RatingWidget = ({val, type}) => (
  <div className="widget-box">
    <div>
      <svg height="38" width="38">
        <circle cx="19" cy="19" r="18" stroke="#008300" strokeWidth="2" fill="transparent" />
        <text textAnchor="middle" fill="#006601" fontSize="14" x="19" y="24.6">
        {val.toFixed(1)}
      </text>
      </svg>
    </div>

    <div className="widget-text" >
      <div className="value-text" >{type}</div>
      <div className="rating-text" >Out of 5</div>
    </div>

  </div>
);

export default RatingWidget;
