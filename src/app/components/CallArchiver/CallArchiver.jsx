// Libraries
import React from 'react';
import { connect } from 'react-redux'
// Store
import { archiveCall, fetchCalls } from '../../store/actions/actions.js'
import { callsToArchive } from '../../store/reducers.js'

const mapStateToProps = (state) => {
  return {
    callsToArchive: callsToArchive(state)
  }
}

const mapDispatchToProps = {
  archiveCall,
  fetchCalls
}

const ARCHIVE_CALL_ENDPOINT = 'https://aircall-job.herokuapp.com/activities/'

const archive = (callId, status, archiveCall, successCb) => {
  // if (callsToArchive.indexOf(callId) !== -1) {
  //   return 
  // }

  archiveCall()

  return fetch(ARCHIVE_CALL_ENDPOINT + callId, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "is_archived": status
    })
  })
    .then(function() {
      return successCb();
    })
    .catch(err => console.error(err))
}

/**
 * Component that renders a button to archive a call.
 */
const CallArchiver = ({
  callId,
  archiveCall,
  callsToArchive,
  fetchCalls,
  toArchive
}) => {
  return (
    <button className="archive-btn" onClick={() => archive(callId, toArchive, archiveCall, fetchCalls)}>{toArchive ? 'Archive' : 'Unarchive'}</button>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CallArchiver);
