// Libraries
import React from 'react';
import { connect } from 'react-redux'
// Components
import Call from '../Call/Call.jsx'
import RLCallsFetcher from '../RLCallsFetcher/RLCallsFetcher.jsx'
// Store
import { calls, selectedFeed } from '../../store/reducers.js'
import { fetchCalls } from '../../store/actions/actions.js'
// Styles
import './activity-feed.css'

// Store Connection
const mapStateToProps = (state) => {
  return {
    calls: calls(state),
    selectedFeed: selectedFeed(state)
  }
}

const mapDispatchToProps = {
  fetchCalls
}

// Helper functions and variables
const getFilterFn = (filter) => {
  if (filter === 'all') {
    return (call) => call
  }

  if (filter === 'archived') {
    return (call) => call.is_archived
  }

  if (filter === 'active') {
    return (call) => !call.is_archived
  }
}

/**
 * This components renders a list of calls.
 * 
 * @class ActivityFeed
 * @extends React.Component
 */
class ActivityFeed extends React.Component {
  componentDidMount() {
    this.props.fetchCalls();
  }

  render() {
    const callsList = []
    const filterFn = getFilterFn(this.props.selectedFeed)

    this.props.calls
      .filter(filterFn)
      .forEach(call => {
        callsList.push(
          <Call key={call.id} call={call}/>
        )
      })
  
    return (
      <div className="activity-feed-container">
        <div className='activity-feed'>
          {callsList}
        </div>
        <RLCallsFetcher/>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityFeed);
