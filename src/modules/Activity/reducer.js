import { mapKeys } from 'lodash';

import {
  GET_ACTIVITIES_REQUEST,
  GET_ACTIVITIES_FAILURE,
  GET_ACTIVITIES_SUCCESS,
  GET_ACTIVITY_REQUEST,
  GET_ACTIVITY_FAILURE,
  GET_ACTIVITY_SUCCESS,
  RESET_ACTIVITIES_REQUEST,
  RESET_ACTIVITIES_FAILURE,
  RESET_ACTIVITIES_SUCCESS,
  UPDATE_ACTIVITY_REQUEST,
  UPDATE_ACTIVITY_FAILURE,
  UPDATE_ACTIVITY_SUCCESS,
  UPDATE_ACTIVITIES_REQUEST,
  UPDATE_ACTIVITIES_FAILURE,
  UPDATE_ACTIVITIES_SUCCESS,
} from './types'


const INITIAL_STATE = {
  activities: {},
  isPending: false,
  isError: false,
  isSuccess: false,
  errorMsg: '',
  updateActivitiesErrorMsg: '',
  updateActivitiesPending: false,
  updateActivitySuccess: false,
  updateActvityError: false,
}


export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {

    case GET_ACTIVITIES_REQUEST:
      return {
        ...state,
        isError: false,
        isPending: true,
        isSuccess: false,
        errorMsg: '',
      }

    case GET_ACTIVITIES_FAILURE:
      return {
        ...state,
        isError: true,
        isPending: false,
        isSuccess: false,
        errorMsg: action.payload,
      }
    
    case GET_ACTIVITIES_SUCCESS:
      return {
          ...state,
          isError: false,
          isPending: false,
          isSuccess: true,
          errorMsg: '',
          activities: mapKeys(action.payload, 'id'),
      }

    
    case UPDATE_ACTIVITIES_REQUEST:
      return {
        ...state,
        upActivitiesError: false,
        updateActivitiesPending: true,
        updateActivitiesSuccess: false,
        updateActivitiesErrorMsg: '',
      }

    case UPDATE_ACTIVITIES_FAILURE:
      return {
        ...state,
        upActivitiesError: true,
        updateActivitiesPending: false,
        updateActivitiesSuccess: false,
        updateActivitiesErrorMsg: '',
      }

    case UPDATE_ACTIVITIES_SUCCESS:
      return {
        ...state,
        isError: false,
        isPending: false,
        isSuccess: true,
        updateActivitiesPending: false,
        updateActivitiesErrorMsg: '',
        updateActivitiesError: false,
      }
  
    case RESET_ACTIVITIES_REQUEST:
      return {
        ...state,
        isError: false,
        isPending: true,
        isSuccess: false,
        
      }
  
    case RESET_ACTIVITIES_FAILURE:
      return {
        ...state,
        isError: true,
        isPending: false,
        isSuccess: false,
        errorMsg: action.payload,
      }
    
    case RESET_ACTIVITIES_SUCCESS:
      return {
        ...state,
        resetActivitiesError: false,
        resetActivitiesPending: false,
        resetActivitiesSuccess: true,
        resetActivitiesErrorMsg: '',
      }

      case UPDATE_ACTIVITY_REQUEST:
        return {
          ...state,
          updateActvityError: false,
          updateActivityPending: true,
          updateActivitySuccess: false,
          updateErroreMsg: '',
        }

      case UPDATE_ACTIVITY_FAILURE: {
        return {
          ...state,
          updateActvityError: true,
          updateActivityPending: false,
          updateActivitySuccess: false,
          updateActivitiesErrorMsg: action.payload,
        }
      }

      case UPDATE_ACTIVITY_SUCCESS: 
        return {
          ...state,
          updateActvityError: false,
          updateActivityPending: false,
          updateActivitySuccess: true,
          getActivityErrorMsg: '',
        }
      
        case GET_ACTIVITY_REQUEST:
        return {
            ...state,
          getActivityError: false,
          getActivityPending: true,
          getActivitySuccess: false,
          getActivityErrorMsg: '',
        }

      case GET_ACTIVITY_FAILURE: {
        return {
          ...state,
          getActivityError: true,
          getActivityPending: false,
          getActivitySuccess: false,
          getActivityErrorMsg: action.payload,
        }
      }

      case GET_ACTIVITY_SUCCESS: 
        return {
          ...state,
          getActivityError: false,
          getActivityPending: false,
          getActivitySuccess: true,
          getActivityErrorMsg: '',
        }

    default:
      return state;
    }
}
