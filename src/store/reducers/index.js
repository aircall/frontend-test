import {
  ARCHIVE_CALL, CLOSE_DETAIL, LOADING, LOADED_STATE, OPEN_DETAIL,
} from '../constants/action-types';

const initialState = {
  articles: [],
  calls: [],
  detail: null,
};

// eslint-disable-next-line func-names
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ARCHIVE_CALL: {
      const id = action.payload;
      const newCalls = state.calls.filter((call) => call.id !== id);

      let { detail } = state;

      if (detail !== null && detail.id !== null) {
        detail = state.detail.id === id ? null : state.detail;
      }

      return Object.assign({}, state, { calls: newCalls, detail });
    }

    case CLOSE_DETAIL: {
      return Object.assign({}, state, { detail: null });
    }

    case LOADING:
      return Object.assign({}, state, { calls: [] });

    case LOADED_STATE: {
      const loadedCalls = action.payload.map((call) => {
        const { created_at: createdAtOriginal } = call;
        const createdAt = new Date(createdAtOriginal).toLocaleTimeString();
        return Object.assign({}, call, { createdAt });
      });
      return Object.assign({}, state, { calls: loadedCalls });
    }

    case OPEN_DETAIL: {
      const detailCall = state.calls.filter((call) => call.id === action.payload)[0] || null;

      return Object.assign({}, state, { detail: detailCall });
    }

    default:
      return state;
  }
}

export default rootReducer;
