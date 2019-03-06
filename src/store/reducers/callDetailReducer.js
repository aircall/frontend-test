import { UPDATE_CALL_DETAILS_STATE } from '../actions/actionTypes';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_CALL_DETAILS_STATE:
      let newState = { singleCall: action.payload };
      return newState

    default:
      return state;
  }
}