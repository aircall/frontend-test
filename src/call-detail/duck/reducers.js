import types from "./types";

const INITIAL_STATE = {
  loading: false,
  call: null
};
const callDetailReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.REQUEST_CALL_DETAIL: {
      return {
        ...state,
        loading: true
      };
    }

    case types.RECEIVE_CALL_DETAIL: {
      const { call } = action;
      return {
        ...state,
        call,
        loading: false
      };
    }

    default:
      return state;
  }
};

export default callDetailReducer;
