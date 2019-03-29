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
    UPDATE_ACTIVITY_ERROR,
} from './../../constants/types';

/* ACTIVITIES  (ALL ITEMS) */
// FETCH

export const fetchPayloadActivitiesSuccess = (data)=>({
      type: FETCH_ACTIVITIES_SUCCESS,
      payload: data,
})


export const fetchPayloadActivitiesError = (error)=>({
      type: FETCH_ACTIVITIES_ERROR,
      payload: error,
})


// UPDATE
export const updatePayloadActivitiesSuccess = (data)=>({
    type: UPDATE_ACTIVITIES_SUCCESS,
    payload: data,
})


export const updatePayloadActivitiesError = (error)=>({
    type: UPDATE_ACTIVITIES_ERROR,
    payload: error,
})


// RESET
export const resetPayloadActivitiesSuccess = (data)=>({
    type: RESET_ACTIVITIES_SUCCESS,
    payload: data,
})

export const resetPayloadActivitiesError = (error)=>({
    type: RESET_ACTIVITIES_ERROR,
    payload: error,
})




/* ACTIVITY  (ITEM) */

// FETCH
export const fetchPayloadActivitySuccess = (data)=>({
      type: FETCH_ACTIVITY_SUCCESS,
      payload: data,
})


export const fetchPayloadActivityError = (error)=>({
      type: FETCH_ACTIVITY_ERROR,
      payload: error,
})



// UPDATE
export const updatePayloadActivitySuccess = (data)=>({
      type: UPDATE_ACTIVITY_SUCCESS,
      payload: data,
})

export const updatePayloadActivityError = (error)=>({
      type: UPDATE_ACTIVITY_ERROR,
      payload: error,
})
