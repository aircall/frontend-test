import React, { Component } from 'react';
import { connect } from 'react-redux';

import icoCalls from './../../assets/images/footer/dot_recent_calls.svg'
import icoContacts from './../../assets/images/footer/dot_contacts.svg'
import icoKeyboard from './../../assets/images/footer/icon_keyboard.svg'
import icoSettings from './../../assets/images/footer/icon_settings.svg'
import icoAction from './../../assets/images/footer/icon_app.svg'

import './style.css';


const Badge = ({ count }) => {
  return (count>0 && <div className="badge">{count}</div>)
};

class Footer extends Component {
  render (){
    const {activities} = this.props.data
    let missedCalls = 0
    if(activities.length>0){
      missedCalls = [...activities].filter((activity)=>activity.call_type==='missed' || activity.call_type==='voicemail').length;
    }


    return(
      <footer>
        <ul className='footerMenu'>
          <li className="calls current">
            <img src={icoCalls}/>
            <Badge count={missedCalls}/>
          </li>
          <li className="contacts"><img src={icoContacts}/></li>
          <li className="phoneKey"><img src={icoKeyboard}/></li>
          <li className="settings"><img src={icoSettings}/></li>
          <li className="action"><img src={icoAction}/></li>
        </ul>
      </footer>
    )
  }
}

export default Footer;
