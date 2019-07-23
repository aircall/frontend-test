import React, { Component } from "react";
import { connect } from 'react-redux';
import { DateTime } from "luxon";
import { getCall, archiveCall } from '../../redux/calls/actions.js'
import ActionButton from '../ActionButton/ActionButton.jsx'
import { withRouter } from "react-router-dom";
import { faPhone, faShareSquare, faVoicemail, faArchive } from '@fortawesome/free-solid-svg-icons'

import './Call.scss'

class Call extends Component {
  constructor(props) {
    super(props);
    this.archiveCallHandle = this.archiveCallHandle.bind(this);
  }

  componentDidMount() {
    this.props.getCall(this.props.match.params.id);
  }

  archiveCallHandle(call) {
    this.props.archiveCall(call);
    this.props.history.push("/");
  }

  render() {
    const { calls, match } = this.props;
    const call = calls && calls[match.params.id];
    const formattedDate = call && DateTime.fromISO(call.created_at).toLocaleString(DateTime.TIME_24_SIMPLE)     
    
    return (
      <div className="Call">
        {call && <>
          <h1>{call.from}</h1>
          <span className="Call__date">{formattedDate}</span>
          <div className="Call__actions"> 
            <ActionButton icon={faPhone} label={'Call Back'} color={'#2AC420'}/>
            <ActionButton icon={faArchive} label={'Archive'} color={'#de382f'} onClick={() => this.archiveCallHandle(call) }/>
            {call.call_type === "voicemail" && <ActionButton icon={faVoicemail} label={'Voicemail'} color={'#FFFFFF'}/>}
            <ActionButton icon={faShareSquare} label={'Share'} color={'#FFFFFF'}/>
          </div>
          <div className="Call__details"> 
            <h2>Details</h2>
            {call.to &&<span className="Call__item"> from {call.to}</span>}
            {call.via && <span className="Call__item">via {call.via}</span>}
            {call.duration && <span className="Call__item">
              {`The called lasted ${call.duration/60} minutes`}
              </span>
            }
          </div>
          
        </>}
      </div>
    );
  }
}

const mapStateToProps = ({ calls }) => ({
  calls: calls.list
});

const mapDispatchToProps = {
  getCall,
  archiveCall
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Call));