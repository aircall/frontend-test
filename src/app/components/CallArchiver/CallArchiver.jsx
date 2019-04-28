// Libraries
import React from 'react';
import { connect } from 'react-redux'
// Store
import { fetchCalls } from '../../store/actions/actions.js'

// Store Connection
const mapDispatchToProps = {
  fetchCalls
}

// Helper functions and variables
const ARCHIVE_CALL_ENDPOINT = 'https://aircall-job.herokuapp.com/activities/'

/**
 * Component that renders a button to archive a call.
 */
class CallArchiver extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      canArchive: true
    }

    this.archive = this.archive.bind(this)
  }

  archive() {
    if (!this.state.canArchive) {
      return
    }

    this.setState({ canArchive: false })

    return fetch(ARCHIVE_CALL_ENDPOINT + this.props.callId, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "is_archived": this.props.toArchive
      })
    })
      .then(this.props.fetchCalls)
      .catch(err => console.error(err))
      .finally(() => this.setState({ canArchive: true }))
  }

  render() {
    return (
      <button 
        className="archive-btn" 
        onClick={this.archive}>
        {this.props.toArchive ? 'Archive' : 'Unarchive'}
      </button>
    );
  }
};

export default connect(
  null,
  mapDispatchToProps
)(CallArchiver);
