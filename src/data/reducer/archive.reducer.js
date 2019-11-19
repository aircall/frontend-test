import { ARCHIVE, ARCHIVE_ERROR, ARCHIVE_SUCCESS } from "../action";

export default {
  [ARCHIVE](state, callId) {
    return {
      ...state,
      archive: {
        ...state.archive,
        [callId]: {
          loading: true,
          error: null
        }
      }
    };
  },

  [ARCHIVE_SUCCESS](state, { callId, callIndex, groupIndex }) {
    const feedData = [...state.feed.data];

    feedData[groupIndex][1][callIndex].is_archived = true;

    return {
      ...state,
      archive: {
        ...state.archive,
        [callId]: {
          loading: false
        }
      },
      feed: {
        ...state.feed,
        data: feedData
      }
    };
  },

  [ARCHIVE_ERROR](state, { callId, error }) {
    return {
      ...state,
      archive: {
        ...state.archive,
        [callId]: {
          loading: false,
          error
        }
      }
    };
  }
};
