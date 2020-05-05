import React from 'react';

const RatingWidget = ({val, type}) => {
  let fillColor, circleColor;
  if (val > 2.5) {
    fillColor = "#006601";
    circleColor = "#008300";
  } else {
    fillColor = "#b85300";
    circleColor = "#E86900";
  }

  const circumference = 2 * 3.1415 * 18;
  const fillAmount = circumference * (val / 5);

  return (
    <div className="widget-box">
      <div>
        <svg height="38" width="38">
          <circle stroke="#efefef"
                  strokeWidth="2"
                  fill="none"
                  cx="19"
                  cy="19"
                  r="18"
          />

          <circle className="circle-fill"
                  stroke={circleColor}
                  strokeWidth="2"
                  strokeDasharray={`${fillAmount}, ${circumference}`}
                  strokeLinecap="round"
                  fill="none"
                  cx="19"
                  cy="19"
                  r="18"
          />

          <text textAnchor="middle"
                fill={fillColor}
                fontSize="14"
                x="19"
                y="24.6"
          >
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
};

export default RatingWidget;
