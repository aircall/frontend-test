import { ARCHIVE, ARCHIVE_ERROR, ARCHIVE_SUCCESS } from "../action";

export default {
  [ARCHIVE](state, { callId }) {
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

  [ARCHIVE_SUCCESS](state, { callId }) {
    return {
      ...state,
      archive: {
        ...state.archive,
        [callId]: {
          loading: false
        }
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
