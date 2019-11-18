import { FEED_LOADING, FEED_SUCCESS, FEED_ERROR } from "../action";

export default {
  [FEED_LOADING](state) {
    return {
      ...state,
      feed: {
        ...state.feed,
        loading: true,
        error: null
      }
    };
  },

  [FEED_SUCCESS](state, { data }) {
    return {
      ...state,
      feed: {
        ...state.feed,
        loading: false,
        data
      }
    };
  },

  [FEED_ERROR](state, { error }) {
    return {
      ...state,
      feed: {
        ...state.feed,
        loading: false,
        error
      }
    };
  }
};
