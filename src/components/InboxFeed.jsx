import React, { useContext } from 'react';

import { APIContext } from '../api/context';

import ListCalls from './ListCalls/ListCalls';
import EmptyView from './EmptyView';
import Loading from './Loading';

import '../css/activity-feed.css';
import '../css/button.css';
import '../css/loading.css';

function InboxFeed() {
    const { calls } = useContext(APIContext);

    if (!calls) {
        return <Loading />;
    }

    const allCallsButArchived = calls.filter((call) => !call.is_archived);

    return (
        <div className="activity-feed">
            {allCallsButArchived.length ? (
                <ListCalls calls={allCallsButArchived} />
            ) : (
                <EmptyView>No calls to show.</EmptyView>
            )}
        </div>
    );
}

export default InboxFeed;
