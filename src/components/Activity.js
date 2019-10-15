import React from 'react';
import PropTypes from 'prop-types';

const Activity = ({ activity }) => (
  <div className="activity">
    {activity.image ? <img src={activity.image} /> : null}
    <div className="activity-content">
      <h3>{activity.title}</h3>
      <p>{activity.time}</p>
    </div>
  </div>
);

Activity.propTypes = {
  activity: PropTypes.shape({
    title: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    image: PropTypes.string,
  }).isRequired,
};

export default Activity;
