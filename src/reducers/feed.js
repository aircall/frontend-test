const INITIAL_STATE = {
  activities: [],
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
    default:
      return state;
  }
}
