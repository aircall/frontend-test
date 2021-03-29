import * as React from 'react';
import moment from "moment";
import history from "../../../../history";
import {FiPhoneCall, FiPhoneMissed, FiVoicemail} from "react-icons/fi";
import './ActivityItem.css';

const ActivityItem = (props) => {
    const {to, from, direction, id, created_at, call_type} = props.call;

    const number = direction === 'outbound' ? to : from;
    const recipient = direction === 'outbound' ? from : to;
    const date = moment(created_at).format('LT');

    const missedCall = call_type === 'missed' ? 'call-missed' : '';

    return (
        <div className='activity-item' key={id} onClick={() => history.push(`/activity/${id}`)}>
            <div className="activity-item-callee-identifier">
                    <span className={`left-align-number ${missedCall}`}>
                        {call_type === 'missed' ? <FiPhoneMissed/> : call_type === 'voicemail' ? <FiVoicemail/> :
                            <FiPhoneCall/>}
                        <span>&nbsp;&nbsp;{number}</span>
                    </span>
            </div>
            <span className='right-align-number call-time'>{date}</span>
            <br/>
            <div className="activity-item-callee">
                {call_type === 'missed' ? `Tried to call on ${recipient}` : call_type === 'answered' ? `Received call from ${recipient}` :
                    'Voicemail'}
            </div>
        </div>
    );
};

export default ActivityItem;