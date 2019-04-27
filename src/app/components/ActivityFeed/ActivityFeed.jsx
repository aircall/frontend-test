// Libraries
import React from 'react';
import { connect } from 'react-redux'
// Styles
import './activity-feed.css'
// Modules
import Call from '../Call/Call.jsx'
import RLCallsFetcher from '../RLCallsFetcher/RLCallsFetcher.jsx'
import { calls } from '../../store/reducers.js'
import { fetchCalls } from '../../store/actions/actions.js'

const mapStateToProps = (state) => {
  return {
    calls: calls(state)
  }
}

const mapDispatchToProps = {
  fetchCalls
}

class ActivityFeed extends React.Component {
  componentDidMount() {
    this.props.fetchCalls();
  }

  render() {
    const callsList = []

    this.props.calls.forEach(call => {
      callsList.push(
        <Call key={call.id}/>
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
