// Libraries
import React from 'react';
import { connect } from 'react-redux'
// Styles
import './reset.css'
// Store
import { fetchCalls } from '../../store/actions/actions.js'

// Store connection
const mapDispatchToProps = {
  fetchCalls
}

// Helper functions and variables
const CALL_RESET_ENDPOINT = 'https://aircall-job.herokuapp.com/reset'

const resetCalls = (successCb) => {
  return fetch(CALL_RESET_ENDPOINT)
    .then(() => successCb())
    .catch(err => console.error(err))
}

/**
 * Button to reset the list of calls.
 */
const Reset = ({
  fetchCalls
}) => {
  return (
    <button className="reset-btn" onClick={() => resetCalls(fetchCalls)}>
      Reset data
    </button>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(Reset);
