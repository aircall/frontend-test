import React from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

import {
    FiPhoneIncoming as IncomingCallIcon,
    FiPhoneOutgoing as OutgoingCallIcon,
} from 'react-icons/fi';

import { CallShape } from './ModelPropTypes';

import '../css/card-call.css';

function CardCall({ call }) {
    const isCallIncoming = call.direction === 'inbound';
    const isCallMissed = call.call_type === 'missed';

    return (
        <Link to={`/details/${call.id}`}>
            <div className="card-call flex-row">
                {isCallIncoming ? (
                    <IncomingCallIcon size="1.25em" color="#FC5624" />
                ) : (
                    <OutgoingCallIcon size="1.25em" color="#47C222" />
                )}
                <div className="call-infos flex-column flex-grow flex-start">
                    <div className="flex-row">
                        <div
                            className={`card-call-caller ${
                                isCallMissed ? 'call-missed' : ''
                            }`}
                        >
                            {call.from}
                        </div>
                    </div>
                    <div className="card-call-callee">
                        tried to call on{' '}
                        <span className="card-call-callee-identifier">
                            {call.to}
                        </span>
                    </div>
                </div>
                <div className="call-time flex-row">
                    <div className="time">
                        {dayjs(call.created_at).format('hh:mm')}
                    </div>
                    <div className="ampm">
                        {dayjs(call.created_at).format('A')}
                    </div>
                </div>
            </div>
        </Link>
    );
}

CardCall.propTypes = {
    call: CallShape,
};

export default CardCall;
