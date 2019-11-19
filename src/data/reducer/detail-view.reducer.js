import { DETAIL_VIEW } from "../action";

export default {
  [DETAIL_VIEW](state, callId) {
    return {
      ...state,
      detailView: callId
    };
  }
};
