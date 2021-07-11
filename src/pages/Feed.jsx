/* eslint-disable camelcase */
import React, {
  useEffect, useState, useCallback,
} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchActivities, resetAll } from '../actions/feed';
import CallDetail from './CallDetail.jsx';
import CallItem from '../components/CallItem.jsx';

const ArchiveButton = styled.div`
  padding: 1rem 1.5rem;
  background: #ececeb;
  border-radius: 0.5rem;
  cursor: pointer;
  margin-top: 1rem;
`;

const Feed = React.memo(({ activities, onFetchActivities, onResetAll }) => {
  /**
   * The current call detail of a selected call.
   * `undefined` if users are just seeing the list.
   */
  const [curActiveDetail, setCurActiveDetail] = useState(undefined);

  const handleItemClick = useCallback(
    (callId) => () => {
      setCurActiveDetail(callId);
    },
    [],
  );

  const handleDetailViewClose = useCallback(
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

  const nonArchivedActivities = activities.filter((activity) => !activity.is_archived);

  return (
    <>
      {curActiveDetail && (
        <CallDetail
          callId={curActiveDetail}
          onClose={handleDetailViewClose}
        />
      )}
      <div>
        {nonArchivedActivities.map(({
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
            onClick={handleItemClick(id)}
          />
        ))}
      </div>
      <ArchiveButton onClick={onResetAll}>Reset All</ArchiveButton>
    </>
  );
});

Feed.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  activities: PropTypes.array,
  onFetchActivities: PropTypes.func.isRequired,
  onResetAll: PropTypes.func.isRequired,
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
    onResetAll: () => dispatch(resetAll()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Feed);
