// Libraries
import React from 'react';
// Styles
import './call-details.css'

// Helper functions and variables
const CALL_DETAIL_ENDPOINT = 'https://aircall-job.herokuapp.com/activities/'

/**
 * This components fetches and renders the details of a call.
 * 
 * @class CallDetails
 * @extends React.Component
 */
class CallDetails extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      canFetch: true,
      call: {}
    }

    this.fetchCallDetail = this.fetchCallDetail.bind(this)
  }

  fetchCallDetail() {
    return fetch(CALL_DETAIL_ENDPOINT + this.props.callId)
      .then((response) => response.json())
  }

  componentDidUpdate() {
    // Avoid starting a new fetch for the same resource if one is already in progress
    // or already done
    if (!this.state.canFetch) {
      return
    }
    
    this.setState({canFetch: false}) // Block multiple calls

    return this.fetchCallDetail()
      .then(call => this.setState({call}))
      .catch(() => this.setState({ canFetch: true })) // Allow future requests in case of failure
  }

  render() {
    // Render the component only if requested
    return this.props.visible ? (
      <div className="call-details-container">
        <div className="call-details">
          <ul className="call-infos">
            <li className="call-info">
              <span className="info-description">Direction: </span>  
              {this.state.call.direction || 'Unknown'}
            </li>
            <li className="call-info">
              <span className="info-description">Via: </span>  
              {this.state.call.via || 'Unknown'}
            </li>
            <li className="call-info">
              <span className="info-description">Duration: </span>  
              {this.state.call.duration || 'Unknown'}
            </li>
            <li className="call-info">
              <span className="info-description">Date: </span>  
              {this.state.call.created_at || 'Unknown'}
            </li>
          </ul>
        </div>
      </div>
    ) : null
  }
}

export default CallDetails;
