import {
  ARCHIVE_CALL, LOADING, LOADED_STATE,
} from '../constants/action-types';

const initialState = {
  articles: [],
  calls: [],
};

// eslint-disable-next-line func-names
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ARCHIVE_CALL: {
      const newCalls = state.calls.filter((call) => call.id !== action.payload);
      // eslint-disable-next-line prefer-object-spread
      return Object.assign({}, state, { calls: newCalls });
    }

    case LOADING:
      // eslint-disable-next-line prefer-object-spread
      return Object.assign({}, state, { calls: [] });

    case LOADED_STATE:
      // eslint-disable-next-line prefer-object-spread
      return Object.assign({}, state, { calls: action.payload });

    default:
      return state;
  }
}

export default rootReducer;
