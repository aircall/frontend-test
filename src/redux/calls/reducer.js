import { 
    GET_CALLS, GET_CALLS_SUCCESS, GET_CALLS_ERROR,
    GET_CALL, GET_CALL_SUCCESS, GET_CALL_ERROR
} from './actionsTypes.js';

const INITIAL_STATE = {
    list: {},
    loading: false,
    error: null
  }

const calls = (state = INITIAL_STATE, action) => {
    console.log(action, state);
    switch (action.type) {
        case GET_CALLS:
            return {
                ...state,
                loading: true
            }
        case GET_CALLS_SUCCESS:
            return {
                ...state,
                list: { ...action.calls },
                loading: false
            }
        case GET_CALLS_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        case GET_CALL:
            return {
                ...state,
                loading: true
            }
        case GET_CALL_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case GET_CALL_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        default:
            return state
    }
  }
  
export default calls