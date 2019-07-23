import { GET_CALLS, GET_CALLS_SUCCESS, GET_CALLS_ERROR} from './actionsTypes.js';

const INITIAL_STATE = {
    calls: {}
  }

const call = (state = INITIAL_STATE, action) => {
    console.log(action, state.list);
    switch (action.type) {
        case GET_CALLS:
            return {
                ...state,
                calls: action.calls
            }
        case GET_CALLS_SUCCESS:
            return state
        case GET_CALLS_ERROR:
            return state
        default:
            return state
    }
  }
  
export default call