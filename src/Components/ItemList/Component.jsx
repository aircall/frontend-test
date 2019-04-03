import React, { Component } from 'react'
import moment from 'moment'

import icoInbound from './../../assets/images/listCalls/icon_inbound.svg'
import icoOutbound from './../../assets/images/listCalls/icon_outbound.svg'
import './style.css'

class ActivityList extends Component {
  async componentDidMount() {}

  activityHandleClicked = activityId => async event => {
    event.stopPropagation()
    // OPEN DETAIL ACTIVITY
    await this.props.fetchActivity(activityId)
  }

  render() {
    const { activitiesList } = this.props

    const activityListItem =
      activitiesList.length > 0 &&
      activitiesList.map(activity => {
        const { id } = activity
        return (
          <li key={id} id={`${id}`} className="itemlist" onClick={this.activityHandleClicked(id)}>
            <div className="callDate">
              <span>{moment(activity.created_at).format('MMMM, DD YYYY')}</span>
            </div>
            <div className="callItem">
              <div className="iconCall">
                <img alt="" src={activity.call_type === 'answered' ? icoOutbound : icoInbound} />
              </div>
              <div className="infosCall">
                <div className="toCall">{activity.to}</div>
                <div className="fromCall">{activity.from}</div>
              </div>
              <div className="timeCall">
                <div className="hourCall">{moment(activity.created_at).format('hh:mm')}</div>
                <div className="hourAmPmCall">{moment(activity.created_at).format('A')}</div>
              </div>
            </div>
          </li>
        )
      })

    return (
      <div className="activitiesBox">
        <ul className="list">
          {activitiesList.length > 0 ? (
            activityListItem
          ) : (
            <li className="emptyList">
              No Activities !<br />
              👍 All Archived !
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default ActivityList
