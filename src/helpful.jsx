import React from 'react';

const randomHelp = () => Math.floor(Math.random() * 10);

const Helpful = (props) => (
  <div className='help'>
    <div className="help-text">
    {randomHelp()} guests found this review helpful. Did you?
    </div>
    <div className="help-widget-btns">
      <div>
        <button type="button" className="help-btn">
          Helpful
        </button>
      </div>
      <div>
        <button type="button" className="help-btn">
          Not helpful
        </button>
      </div>
      <div className='report-btn'>
      Report review
      </div>
    </div>
  </div>
);

export default Helpful;