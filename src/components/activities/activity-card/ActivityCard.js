import React from 'react';
import '../../../css/body.css';
import history from "../../../history";
import './ActivityCard.css';

const ActivityCard = (props) => {
    const {call_type, duration, via, recipient, number, date, is_archived} = props;

    return (
        <div className="activity-card">
            <h2 className="title">{recipient ? recipient : 'Unknown'}</h2>
            <div className='data-line'>
                <div className="label">Date</div>
                <div className="value">{date}</div>
            </div>
            <div className='data-line'>
                <div className="label">Duration</div>
                <div className="value">{duration}</div>
            </div>
            <div className='data-line'>
                <div className="label">Type</div>
                <div className="value">{call_type}</div>
            </div>
            <div className='data-line'>
                <div className="label">Number</div>
                <div className="value">{number}</div>
            </div>
            <div className='data-line'>
                <div className="label">Via</div>
                <div className="value">{via}</div>
            </div>
            <div className="archived">{is_archived}</div>
            <button className='button' onClick={props.onClick}>Archive</button>
            <button className='button' onClick={() => history.push('/')}>Back</button>
        </div>
    );
};

export default ActivityCard;