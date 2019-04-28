// Libraries
import React from 'react';
// Styles
import './call-details.css'

const CALL_DETAIL_ENDPOINT = 'https://aircall-job.herokuapp.com/activities/'

function fetchCallDetail(id) {
  return fetch(CALL_DETAIL_ENDPOINT + id)
    .then(function(response) {
      return response.json();
    })
    .catch(err => console.error(err))
}

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
      isFetched: false,
      call: {}
    }
  }

  componentDidUpdate() {
    // Avoid starting a new fecth for the same resource if one is already in progress
    // or already done
    if (!this.state.isFetched) {
      this.setState({isFetched: true})

      fetchCallDetail(this.props.callId)
        .then(call => this.setState({call}))
        .catch(() => {
          // In the case when the fetch fails reset the isFetched property to avoid blocking further attempts
          this.setState({isFetched: false}) 
        })
    }
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
