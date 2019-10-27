import React from 'react';
import { connect } from 'react-redux';

import {incrementAsync} from '../actions/feed';

const Feed = ({
  feed,
  onIncrement
}) => {
  return (
    <div>
      <div>
        Count: {feed}
      </div>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
}

function mapStateToProps(state) {
  const {feed} = state;
  return {
    feed,
  };
}

function mapDispatchToProps(dispatch) {
  return {
      onIncrement: () => dispatch(incrementAsync())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);