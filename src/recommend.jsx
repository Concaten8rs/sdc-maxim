import React from 'react';

const Recommend = ({review}) => {

  if (review.value < 2.5) {
    return (
      <div className="recommend">
        <svg height="24" width="24" className="green-filter">
          <path d="M12.032 22.063c5.55 0 10.05-4.5 10.05-10.05 0-5.55-4.5-10.05-10.05-10.05-5.55 0-10.05 4.5-10.05 10.05 0 5.55 4.5 10.05 10.05 10.05zm0 .95c-6.075 0-11-4.925-11-11 0-6.076 4.925-11 11-11s11 4.924 11 11c0 6.075-4.925 11-11 11zm4.462-15.168a1 1 0 011.512 1.31l-6.5 7.5a1 1 0 01-1.38.126l-3.75-3a1 1 0 111.249-1.562l2.999 2.4 5.87-6.774z" fillRule="evenodd"></path>
        </svg>
        <span className="recommend-text" >Would recommend</span>
      </div>
    );
  } else {
    return (
      <div className="recommend">
        <svg height="24" width="24" className="orange-filter">
          <path d="M12.032 22.063c5.55 0 10.05-4.5 10.05-10.05 0-5.55-4.5-10.05-10.05-10.05-5.55 0-10.05 4.5-10.05 10.05 0 5.55 4.5 10.05 10.05 10.05zm0 .95c-6.075 0-11-4.925-11-11 0-6.076 4.925-11 11-11s11 4.924 11 11c0 6.075-4.925 11-11 11zM12 10.586l4.243-4.243 1.414 1.414L13.414 12l4.243 4.243-1.414 1.414L12 13.414l-4.243 4.243-1.414-1.414L10.586 12 6.343 7.757l1.414-1.414L12 10.586z" fillRule="evenodd"></path>
        </svg>
        <span className="recommend-text" >Would not recommend</span>
      </div>
    );
  }
};

export default Recommend;
