import { GET_CALLS, GET_CALLS_SUCCESS, GET_CALLS_ERROR} from './actionsTypes.js';

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
