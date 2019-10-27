import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchActivities } from '../actions/feed';
import CallItem from '../components/CallItem.jsx';

const CallList = styled.div`
  /* padding: 2rem 1rem; */
`;

const Feed = React.memo(({ activities, onFetchActivities }) => {
  useEffect(
    () => {
      onFetchActivities();
    },
    [onFetchActivities],
  );

  console.log(activities);

  return (
    <CallList>
      {activities.map(({
        id,
        to,
        from,
        via,
        created_at,
        call_type,
        direction,
      }) => (
        <CallItem
          key={id}
          to={to}
          from={from}
          via={via}
          time={created_at}
          callType={call_type}
          direction={direction}
        />
      ))}
    </CallList>
  );
});

Feed.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  activities: PropTypes.array,
  onFetchActivities: PropTypes.func.isRequired,
};

Feed.defaultProps = {
  activities: [],
};

function mapStateToProps(state) {
  const { activities } = state.feed;
  return {
    activities,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onFetchActivities: () => dispatch(fetchActivities()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Feed);
