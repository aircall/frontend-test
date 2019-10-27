import React from 'react';
import { connect } from 'react-redux';

import { fetchActivities } from '../actions/feed';

const Feed = ({
  feed,
  onFetchActivities,
}) => (
    <div>
      <div>
        {JSON.stringify(feed)}
      </div>
      <button onClick={onFetchActivities}>Increment</button>
    </div>
);

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

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
