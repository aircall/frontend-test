import React, { useState, useEffect, useContext, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ActivityContext } from '../../store/context/ActivityContext';

import ActivityItem from '../ActivityItem/ActivityItem';

const ActivityFeed = () => {
  const { state, dispatch, actions } = useContext(ActivityContext);
  const { activities, loading, error } = state;

  useEffect(() => {
    actions.getActivities();
  }, []);

  return (
    <div data-testid="activity-feed">
      {loading && (
        <>
          Wait while we are fetching your activities, it shouldn't take long...
        </>
      )}
      {error && (
        <>
          Oh no, an error occurred, try reloading the page and if the error
          persist get in touch with our customer support
        </>
      )}
      {activities && (
        <>
          {/* TO DO : trier par date et afficher la date puis les calls associés par blocs */}
          <ul className="activity-list" data-testid="activity-list">
            {activities.map((activity) => (
              <Link to={`/details/${activity.id}`} key={activity.id}>
                <ActivityItem data={activity} />
              </Link>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

ActivityFeed.propTypes = {};
ActivityFeed.defaultProps = {};

export default ActivityFeed;
