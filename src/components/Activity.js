import React from 'react';
import PropTypes from 'prop-types';

const Activity = ({ title, time, children }) => (
  <div className="activity">
    {children ? <div className="activity-image">{children}</div> : null}
    <div className="activity-content">
      <h3>{title}</h3>
      <p>{time}</p>
    </div>
  </div>
);

Activity.propTypes = {
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  children: PropTypes.string,
};

export default Activity;
