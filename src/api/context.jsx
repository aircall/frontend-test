import React, { createContext, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import { getAllCalls, updateIsArchivedForCall, resetApplicationData } from './fetch';

const APIContext = createContext({});

function APIProvider({ children }) {
    const [calls, setCalls] = useState(null);
    const [error, setError] = useState(null);

    const presentAndLogError = useCallback((errorMessage, err) => {
        console.error(err);
        setError(errorMessage);
        setTimeout(() => setError(null), 5000);
    }, []);

    const fetchAllCalls = useCallback(async () => {
        const fetchedCalls = await getAllCalls().catch((err) => {
            presentAndLogError('Unable to retrieve calls.', err);
        });
        setCalls(fetchedCalls);
        return fetchedCalls;
    }, []);

    const setIsArchivedForCall = useCallback(
        async (callId, isArchived) => {
            const response = await updateIsArchivedForCall(
                callId,
                isArchived
            ).catch((err) => {
                presentAndLogError('Unable to update call.', err);
            });

            setCalls(
                calls.map((call) => {
                    if (call.id !== callId) {
                        return call;
                    }
                    return {
                        ...call,
                        is_archived: isArchived,
                    };
                })
            );

            return response;
        },
        [calls]
    );

    const resetData = useCallback(async () => {
        await resetApplicationData().catch((err) => {
            presentAndLogError('Unable to reset calls data.', err);
        });
        await fetchAllCalls();
    }, []);

    return (
        <APIContext.Provider
            value={{
                calls,
                fetchAllCalls,
                setIsArchivedForCall,
                resetData,
                error,
            }}
        >
            {children}
        </APIContext.Provider>
    );
}

APIProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { APIContext, APIProvider };
