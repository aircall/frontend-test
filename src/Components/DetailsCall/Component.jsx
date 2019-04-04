import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import 'moment/locale/fr'

import icoClose from './../../assets/images/listCalls/icon-close.svg'
import './style.css'
moment.locale('fr')
moment().format('D MMM YY')

class DetailsCall extends Component {
  async componentDidMount() {
    //await this.props.fetchActivity(this.props.id);
  }

  handleCloseDetails = event => {
    event.stopPropagation()
    this.props.closeDetails()
  }

  handleUpdateDetails = activityId => async event => {
    event.stopPropagation()
    const { currentNav } = this.props
    await this.props.archivesActivity(activityId)
    await this.props.fetchActivities(currentNav)
  }

  render() {
    const { activity } = this.props.data
    return (
      <div className="containrer-app mask">
        <div className="modalBox fade-in">
          <div className="modalBox-Title">
            <span>Call Details</span>
            <button className="Close" onClick={this.handleCloseDetails}>
              <img alt="" src={icoClose} />
            </button>
          </div>
          <div className="modalBox-Container">
            <ul className="details">
              {activity.to && <li className="fullNameTo">{activity.to}</li>}
              {activity.created_at && <li className="date">{moment(activity.created_at).format('llll')}</li>}
              {activity.from && (
                <li className="text">
                  <span role="img" aria-labelledby="phone">
                    📞
                  </span>{' '}
                  <b>{activity.from}</b>
                </li>
              )}
              {activity.via && (
                <li className="text">
                  <em>{activity.via}</em>
                </li>
              )}
              {activity.call_type && <li className="text">{activity.call_type}</li>}
              {activity.duration && <li className="text">{activity.duration / 60} min.</li>}
              {activity.direction && (
                <li className="text">{activity.direction === 'outbound' ? 'Outbound' : 'Inbound'}</li>
              )}
              <li className="text">
                <b>{activity.is_archived ? 'Archived' : 'Not Archived'}</b>
              </li>
            </ul>
          </div>

          {!activity.is_archived && (
            <div className="modalBox-Footer">
              <button className="pure-button pure-button-primary" onClick={this.handleUpdateDetails(activity.id)}>
                Archive Now !
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default DetailsCall
