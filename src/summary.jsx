import React from 'react';
import RatingWidget from './ratingWidget.jsx';
import SizeWidget from './sizeWidget.jsx';
import SummaryWidget from './summaryWidget.jsx';
import SummaryStars from './summaryStars.jsx'

const Summary = ({reviews}) => (
  <div className="summary">
    <h2 className="summary-title">Guest Rating & Reviews</h2>
    <div className="summary-container">

      <div className="summary-rating">

        <div className="rating-stars">
          <div className="rating-num">
            4.6
          </div>
          <div className="summary-stars">
            <SummaryStars val={4.6} />
          </div>
          <div className="stars-num">
            122 star ratings
          </div>
        </div>

        <div className="rating-recommend">
          <div className="rating-circle">
            <SummaryWidget val={94} />
          </div>
          <div className="recommend-percent">
            94% would recommend
          </div>
          <div className="recommend-num">
            51 recommendations
          </div>
        </div>

      </div>

    </div>

    <div className="review-container">
      <div className="review-dash">
        <div className="dash-box">
        <RatingWidget val={4.7} type={'Style'} />
        </div>
        <div className="dash-box">
          <RatingWidget val={4.9} type={'Comfort'} />
        </div>
        <div className="dash-box">
          <RatingWidget val={4.8} type={'Value'} />
        </div>
        <div className="dash-box">
          <SizeWidget val={'true to size'} />
        </div>
      </div>
    </div>
  </div>
);

export default Summary;