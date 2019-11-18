import {
  RESET_STATE_LOADING,
  RESET_STATE_SUCCESS,
  RESET_STATE_ERROR
} from "../action";

export default {
  [RESET_STATE_LOADING](state) {
    return {
      ...state,
      reset: {
        loading: true,
        error: null
      }
    };
  },

  [RESET_STATE_SUCCESS](state) {
    return {
      ...state,
      reset: {
        loading: false
      }
    };
  },

  [RESET_STATE_ERROR](state, { error }) {
    return {
      ...state,
      reset: {
        loading: false,
        error
      }
    };
  }
};
