import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import './ActivityDetails.css';

import { ActivityContext } from '../../store/context/ActivityContext';

import Icon from '../Icon';

const ActivityDetails = () => {
  const { state, dispatch, actions } = useContext(ActivityContext);
  const { details, loading, error } = state;
  const { id } = useParams();

  const {
    call_type,
    created_at,
    direction,
    duration,
    from,
    is_archived,
    to,
    via,
  } = details;

  const dateObj = new Date(created_at);
  const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const date = dateObj.toLocaleDateString('en-US', dateOptions);
  const number = direction === 'outbound' ? to : from;
  const recipient = direction === 'outbound' ? from : to;
  const icon = call_type === 'missed' ? 'missed' : 'call';

  useEffect(() => {
    actions.getActivityDetails(id);
  }, [id]);

  return (
    <div className="activity-details" data-testid="activity-details">
      <p className="activity-details__avatar">
        <Icon name="person-outline" color="green" size="24" />
      </p>
      <h1 className="activity-details__name">{recipient}</h1>
      <p className="activity-details__date">{date}</p>
      <ul className="activity-details__info">
        <li>{`${direction} call`}</li>
        <li>
          <span>Status:</span>
          <span>{call_type}</span>
        </li>
        <li>
          <span>From:</span>
          <span>{recipient}</span>
        </li>
        <li>
          <span>The call lasted:</span>
          <span>{duration}</span>
        </li>
        <li>
          <span>Call was operated through:</span>
          <span>{via}</span>
        </li>
      </ul>
    </div>
  );
};

export default ActivityDetails;
