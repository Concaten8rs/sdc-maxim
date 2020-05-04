import React from 'react';

const RatingWidget = ({val}) => (
  <div>
    <svg height="38" width="38">
      <circle cx="19" cy="19" r="18" stroke="#008300" strokeWidth="2" fill="transparent" />
      <text textAnchor="middle" fill="#006601" fontSize="14" x="19" y="24.6">
      {val}
    </text>
    </svg>
  </div>
);

export default RatingWidget;
