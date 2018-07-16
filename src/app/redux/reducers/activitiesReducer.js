import {
  GET_ACTIVITIES_PENDING,
  GET_ACTIVITIES_SUCCESS,
  GET_ACTIVITY_SUCCESS,
  UPDATE_ACTIVITY_SUCCESS
} from 'redux/constants';

export const initialState = {
  activities: [],
  activity: {},
  loading: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ACTIVITIES_PENDING:
      return {
        ...state,
        loading: true
      };

    case GET_ACTIVITIES_SUCCESS:
      return {
        ...state,
        activities: action.payload,
        loading: false
      };

    case GET_ACTIVITY_SUCCESS:
      return {
        ...state,
        activity: action.payload
      };

    case UPDATE_ACTIVITY_SUCCESS:
      return {
        ...state,
        activity: {
          ...state.activity,
          is_archived: action.payload.is_archived
        }
      };

    default:
      return state;
  }
};
