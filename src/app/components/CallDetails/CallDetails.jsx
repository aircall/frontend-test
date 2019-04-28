// Libraries
import React from 'react';
import { connect } from 'react-redux'
// Components
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

class CallDetails extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isFetched: false,
      call: {}
    }
  }

  componentDidUpdate() {
    if (!this.state.isFetched) {
      this.setState({isFetched: true})

      fetchCallDetail(this.props.callId)
        .then(call => this.setState({call}))
        .catch(err => {
          console.log(err)
          this.setState({isFetched: false})
        })
    }
  }

  render() {
    return this.props.visible ? (
      <div className="call-details-container">
        <div className="call-details">
          <ul className="call-infos">
            <li className="call-info">Direction: {this.state.call.direction || 'Unknown'}</li>
            <li className="call-info">Via: {this.state.call.via || 'Unknown'}</li>
            <li className="call-info">Duration: {this.state.call.duration || 'Unknown'}</li>
            <li className="call-info">Date: {this.state.call.created_at || 'Unknown'}</li>
          </ul>
        </div>
      </div>
    ) : null
  }
}

export default CallDetails;
