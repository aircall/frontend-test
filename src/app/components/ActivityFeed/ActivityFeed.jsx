// Libraries
import React from 'react';
import { connect } from 'react-redux'
// Styles
import './activity-feed.css'
// Modules
import Call from '../Call/Call.jsx'
import { calls } from '../../store/reducers.js'

const mapStateToProps = (state) => {
  return {
    calls: calls(state)
  }
}

const ActivityFeed = ({
  calls
}) => {
  const callsList = []

  calls.forEach(call => {
    callsList.push(
      <Call call={call}/>
    )
  })

  return (
    <div className='activity-feed'>
      {calls}
    </div>
  );
};

export default connect(
  mapStateToProps
)(ActivityFeed);
