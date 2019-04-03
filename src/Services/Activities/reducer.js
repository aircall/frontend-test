import {
  FETCH_ACTIVITIES_SUCCESS,
  FETCH_ACTIVITIES_ERROR,
  UPDATE_ACTIVITIES_SUCCESS,
  UPDATE_ACTIVITIES_ERROR,
  RESET_ACTIVITIES_SUCCESS,
  RESET_ACTIVITIES_ERROR,
  FETCH_ACTIVITY_SUCCESS,
  FETCH_ACTIVITY_ERROR,
  UPDATE_ACTIVITY_SUCCESS,
  UPDATE_ACTIVITY_ERROR
} from './../../constants/types'

const INITIAL_STATE = {
  activities: {},
  activity: {},
  success: {
    status: false,
    message: ''
  },
  errors: {
    status: false,
    message: ''
  }
}

export default function reducer(state = INITIAL_STATE, action = {}) {
  let tempUpdateActivities

  switch (action.type) {
    case FETCH_ACTIVITIES_SUCCESS:
      return {
        ...state,
        activities: action.payload,
        success: {
          status: true,
          message: 'FETCH YOUR ACTIVITIES SUCCESSED 😀'
        },
        errors: {
          status: false,
          message: ''
        }
      }

    case FETCH_ACTIVITIES_ERROR:
      return {
        ...state,
        success: {
          status: false,
          message: ''
        },
        errors: {
          status: true,
          message: `Oh , FETCH ALL ACTIVITIES FAILED 😨  : "${action.payload}"`
        }
      }

    case UPDATE_ACTIVITIES_SUCCESS:
      return {
        ...state,
        activities: [],
        activity: {},
        success: {
          status: true,
          message: 'UPDATE YOUR ACTIVITIES SUCCESSED 😀 !'
        },
        errors: {
          status: false,
          message: ''
        }
      }

    case UPDATE_ACTIVITIES_ERROR:
      return {
        ...state,
        success: {
          status: false,
          message: ''
        },
        errors: {
          status: true,
          message: `Oh , UPDATE ACTIVITIES FAILED 😨  "${action.payload}"`
        }
      }

    case RESET_ACTIVITIES_SUCCESS:
      return {
        ...state,
        activity: {},
        success: {
          status: true,
          message: 'RESET YOUR ACTIVITIES SUCCESSED 😀 !'
        },
        errors: {
          status: false,
          message: ''
        }
      }

    case RESET_ACTIVITIES_ERROR:
      return {
        ...state,
        success: {
          status: false,
          message: ''
        },
        errors: {
          status: true,
          message: `Oh , RESET YOUR ACTIVITIES FAILED 😨  : "${action.payload}"`
        }
      }

    case FETCH_ACTIVITY_SUCCESS:
      return {
        ...state,
        activity: action.payload,
        success: {
          status: true,
          message: 'FETCH YOUR ACTIVITY SUCCESSED 😀'
        },
        errors: {
          status: false,
          message: ''
        }
      }

    case FETCH_ACTIVITY_ERROR: {
      return {
        ...state,
        activity: {},
        success: {
          status: false,
          message: ''
        },
        errors: {
          status: true,
          message: `Oh , RESET YOUR ACTIVITIES FAILED 😨  : "${action.payload}"`
        }
      }
    }

    case UPDATE_ACTIVITY_SUCCESS:
      tempUpdateActivities = [...state.activities].map(activity => {
        if (activity.id === action.payload.id) activity = action.payload
        return activity
      })

      return {
        ...state,
        activities: [...tempUpdateActivities],
        activity: action.payload,
        success: {
          status: true,
          message: 'UPDATE YOUR ACTIVITY SUCCESSED 😀'
        },
        errors: {
          status: false,
          message: ''
        }
      }

    case UPDATE_ACTIVITY_ERROR: {
      return {
        ...state,
        activity: {},
        success: {
          status: false,
          message: ''
        },
        errors: {
          status: true,
          message: `Oh , RESET YOUR ACTIVITIES FAILED 😨  : "${action.payload}"`
        }
      }
    }
    default:
      return state
  }
}
