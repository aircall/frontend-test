import { UPDATE_CALL_LOG_STATE } from '../actions/actionTypes';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_CALL_LOG_STATE:
      let newState = { calls: action.payload };
      return newState

    default:
      return state;
  }
}
