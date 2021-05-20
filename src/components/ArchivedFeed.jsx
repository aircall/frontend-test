import React, { useContext } from 'react';

import { APIContext } from '../api/context';

import ListCalls from './ListCalls/ListCalls';
import EmptyView from './EmptyView';
import Loading from './Loading';

import '../css/activity-feed.css';
import '../css/button.css';
import '../css/loading.css';

function ArchivedFeed() {
    const { calls, resetData } = useContext(APIContext);

    if (!calls) {
        return <Loading />;
    }

    const allArchivedCalls = calls.filter((call) => call.is_archived);

    return (
        <div className="activity-feed">
            <ListCalls calls={allArchivedCalls} />
            {allArchivedCalls.length ? (
                <button className="button" onClick={resetData}>
                    Reset all calls
                </button>
            ) : (
                <EmptyView>No archived calls to show.</EmptyView>
            )}
        </div>
    );
}

export default ArchivedFeed;
