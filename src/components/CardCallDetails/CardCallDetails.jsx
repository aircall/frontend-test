import React, { useContext, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import { APIContext } from '../../api/context';

import Loading from '../Loading';
import DataLine from './DataLine';

import { formatDate } from '../../utils';
import { formatCallDuration, getCallHeading } from './utils';

import '../../css/call-details.css';
import '../../css/app.css';

function CardCallDetails() {
    const { callId } = useParams();
    const { calls, setIsArchivedForCall } = useContext(APIContext);
    const [isLoading, setIsLoading] = useState(false);
    const id = parseInt(callId, 10);

    const archiveCall = useCallback(async () => {
        setIsLoading(true);
        await setIsArchivedForCall(id, true);
        setIsLoading(false);
    }, [id]);

    if (!calls) {
        return <Loading />;
    }

    const call = calls.find((call) => call.id === id);
    const title = getCallHeading(call.type, call.direction);
    return (
        <div className="call-details">
            <h2 className="title">{title}</h2>

            <DataLine label="Date" value={formatDate(call.created_at)} />
            <DataLine
                label="Duration"
                value={formatCallDuration(call.duration)}
            />
            <DataLine label="From" value={call.from} />
            <DataLine label="To" value={call.to} />
            <DataLine label="Via" value={call.via} />
            {call.is_archived ? (
                <div className="archived">This call has been archived.</div>
            ) : (
                <button
                    className="button"
                    onClick={archiveCall}
                    disabled={isLoading}
                >
                    Archive this call
                </button>
            )}
        </div>
    );
}

export default CardCallDetails;
