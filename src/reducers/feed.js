const INITIAL_STATE = {
  activities: [],
  details: {},
};

export default function feed(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'RECEIVE_ACTIVITIES': {
      const { payload } = action;
      return {
        ...state,
        activities: payload,
      };
    }
    case 'RECEIVE_CALL_DETAILS': {
      const { payload, callId } = action;
      return {
        ...state,
        details: {
          ...state.details,
          [callId]: payload,
        },
      };
    }
    default:
      return state;
  }
}
