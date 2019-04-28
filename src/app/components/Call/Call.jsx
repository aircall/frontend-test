// Libraries
import React from 'react';
// Components
import CallArchiver from '../CallArchiver/CallArchiver.jsx'
import CallDetails from '../CallDetails/CallDetails.jsx'
// Styles
import './call.css'

class Call extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      detailsShown: false
    }
  }

  render() {
    const { call } = this.props

    return (
      <div className={`call-container ${call.call_type}`}>
        <ul className="call-infos">
          <li className="call-info">From: {call.from || 'Unknown'}</li>
          <li className="call-info">To: {call.to || 'Unknown'}</li>
        </ul>
        <CallDetails visible={this.state.detailsShown} callId={call.id}/>
        <div className="call-actions">
          <button onClick={() => this.setState({detailsShown: !this.state.detailsShown})}>
            {this.state.detailsShown ? 'Hide' : 'Details'}
          </button>
          <CallArchiver callId={call.id} toArchive={call.is_archived === false}/>
        </div>
      </div>
    );
  }
}

export default Call;
