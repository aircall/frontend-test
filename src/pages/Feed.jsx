import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchActivities } from '../actions/feed';

const Feed = React.memo(({ feed, onFetchActivities }) => {
  useEffect(
    () => {
      onFetchActivities();
    },
    [],
  );

  return (
    <div>
      <div>{JSON.stringify(feed)}</div>
    </div>
  );
});

function mapStateToProps(state) {
  const { feed } = state;
  return {
    feed,
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
