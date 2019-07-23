import { 
    GET_CALLS, GET_CALLS_SUCCESS, GET_CALLS_ERROR,
    GET_CALL, GET_CALL_SUCCESS, GET_CALL_ERROR
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
    calls: calls
})

export const getCallError = error => ({
    type: GET_CALL_ERROR,
    error: error
})
