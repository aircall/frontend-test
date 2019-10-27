export default function feed(state = {}, action) {
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
