// Libraries
import React from 'react';
import { connect } from 'react-redux'
// Components
import Call from '../Call/Call.jsx'
import RLCallsFetcher from '../RLCallsFetcher/RLCallsFetcher.jsx'
// Store
import { calls } from '../../store/reducers.js'
import { fetchCalls } from '../../store/actions/actions.js'
// Styles
import './activity-feed.css'

const mapStateToProps = (state) => {
  return {
    calls: calls(state)
  }
}

const mapDispatchToProps = {
  fetchCalls
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

    this.props.calls.forEach(call => {
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
