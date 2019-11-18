import { defaultStore } from "../store";

import {
  DETAIL_VIEW,
  DETAIL_VIEW_SUCCESS,
  DETAIL_VIEW_ERROR,
  DETAIL_VIEW_RESET
} from "../action";

export default {
  [DETAIL_VIEW](state, callId) {
    return {
      ...state,
      detailView: {
        ...state.detailView,
        callId,
        loading: true,
        error: null
      }
    };
  },

  [DETAIL_VIEW_SUCCESS](state, data) {
    return {
      ...state,
      detailView: {
        ...state.detailView,
        loading: false,
        data
      }
    };
  },

  [DETAIL_VIEW_ERROR](state, error) {
    return {
      ...state,
      detailView: {
        ...state.detailView,
        loading: false,
        error
      }
    };
  },

  [DETAIL_VIEW_RESET](state) {
    return {
      ...state,
      detailView: { ...defaultStore.detailView }
    };
  }
};
