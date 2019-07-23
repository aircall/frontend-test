import { 
    GET_CALLS, GET_CALLS_SUCCESS, GET_CALLS_ERROR,
    GET_CALL, GET_CALL_SUCCESS, GET_CALL_ERROR,
    ARCHIVE_CALL, ARCHIVE_CALL_SUCCESS, ARCHIVE_CALL_ERROR,
    ARCHIVE_CALLS, ARCHIVE_CALLS_SUCCESS, ARCHIVE_CALLS_ERROR
} from './actionsTypes.js';

export const getCalls = () => ({
    type: GET_CALLS
})

export const getCallsSuccess = calls => ({
    type: GET_CALLS_SUCCESS,
    calls: calls
})

export const getCallsError = error => ({
    type: GET_CALLS_ERROR,
    error: error
})

export const getCall = (id) => ({
    type: GET_CALL,
    id: id
})

export const getCallSuccess = call => ({
    type: GET_CALL_SUCCESS,
    call: call
})

export const getCallError = error => ({
    type: GET_CALL_ERROR,
    error: error
})

export const archiveCall = (call) => ({
    type: ARCHIVE_CALL,
    id: call.id
})

export const archiveCallSuccess = call => ({
    type: ARCHIVE_CALL_SUCCESS,
    call: call
})

export const archiveCallError = error => ({
    type: ARCHIVE_CALL_ERROR,
    error: error
})

export const archiveCalls = () => ({
    type: ARCHIVE_CALLS
})

export const archiveCallsSuccess = () => ({
    type: ARCHIVE_CALLS_SUCCESS
})

export const archiveCallsError = error => ({
    type: ARCHIVE_CALLS_ERROR,
    error: error
})