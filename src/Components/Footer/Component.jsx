import React, { Component } from 'react'

import icoCalls from './../../assets/images/footer/dot_recent_calls.svg'
import icoContacts from './../../assets/images/footer/dot_contacts.svg'
import icoKeyboard from './../../assets/images/footer/icon_keyboard.svg'
import icoSettings from './../../assets/images/footer/icon_settings.svg'
import icoAction from './../../assets/images/footer/icon_app.svg'

import './style.css'

const Badge = ({ count }) => {
  return count > 0 && <div className="badge">{count}</div>
}

class Footer extends Component {
  render() {
    const { activities } = this.props.data
    let missedCalls = 0
    if (activities.length > 0) {
      missedCalls = [...activities].filter(
        activity =>
          activity.call_type === 'missed' || activity.call_type === 'voicemail'
      ).length
    }

    return (
      <footer>
        <ul className="footerMenu">
          <li className="calls current">
            <img alt="" src={icoCalls} />
            <Badge count={missedCalls} />
          </li>
          <li className="contacts">
            <img alt="" src={icoContacts} />
          </li>
          <li className="phoneKey">
            <img alt="" src={icoKeyboard} />
          </li>
          <li className="settings">
            <img alt="" src={icoSettings} />
          </li>
          <li className="action">
            <img alt="" src={icoAction} />
          </li>
        </ul>
      </footer>
    )
  }
}

export default Footer
