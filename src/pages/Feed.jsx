/* eslint-disable camelcase */
import React, {
  useEffect, useState, useCallback,
} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchActivities } from '../actions/feed';
import CallDetail from './CallDetail.jsx';
import CallItem from '../components/CallItem.jsx';

const CallList = styled.div`
  /* padding: 2rem 1rem; */
`;

const Feed = React.memo(({ activities, onFetchActivities }) => {
  /**
   * The current call detail of a selected call.
   * `undefined` if users are just seeing the list.
   */
  const [curActiveDetail, setCurActiveDetail] = useState(undefined);

  const onItemClick = useCallback(
    (callId) => () => {
      setCurActiveDetail(callId);
    },
    [],
  );

  const onDetailViewClose = useCallback(
    () => {
      setCurActiveDetail(undefined);
    },
    [],
  );

  // get the list of calls
  useEffect(
    () => {
      onFetchActivities();
    },
    [onFetchActivities],
  );

  return (
    <>
      {curActiveDetail && (
        <CallDetail
          callId={curActiveDetail}
          onClose={onDetailViewClose}
        />
      )}
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
            onClick={onItemClick(id)}
          />
        ))}
      </CallList>
    </>
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
