import {
    GET_ACTIVITIES_REQUEST,
    GET_ACTIVITIES_FAILURE,
    GET_ACTIVITIES_SUCCESS,
    GET_ACTIVITIY_REQUEST,
    GET_ACTIVITY_FAILURE,
    GET_ACTIVITY_SUCCESS,
    UPDATE_ACTIVITY_REQUEST,
    UPDATE_ACTIVITY_FAILURE,
    UPDATE_ACTIVITY_SUCCESS,
    UPDATE_ACTIVITIES_REQUEST,
    UPDATE_ACTIVITIES_FAILURE,
    UPDATE_ACTIVITIES_SUCCESS,
    RESET_ACTIVITIES_FAILURE,
    RESET_ACTIVITIES_REQUEST,
    RESET_ACTIVITIES_SUCCESS,
} from './types';

import { baseUrl } from './constants';
import { checkStatus } from '../../helpers/api';
import axios from 'axios';


export function getActivities() {
    return async dispatch => {
        dispatch(getActivitiesRequest());

        try {
            const path = `${baseUrl}/activities`;
            const response = await axios.get(path);
            const data = await checkStatus(response);

            dispatch(getActivitiesSuccess(data));
        }
        catch(error) {
            dispatch(getActivitiesFailure(error));
        }
    }
}


export function updateActivities(activityIds) {
    return async dispatch => {
        dispatch(updateActivitiesRequest());

        Promise.all (
            activityIds.map(async activityId => {
                const path=`${baseUrl}/activities/${activityId}`;
                const response = await axios.post(path, { "is_archived": true });
                const data = await checkStatus(response);
                return data;
            }))
        .then(data => {
            dispatch(updateActivitiesSuccess(data))
        })
        .catch(error => {
            dispatch(updateActivitiesFailure(error))
        })
    };
};


export function updateActivity(activityId) {
    return async dispatch => {
        dispatch(updateActivityRequest());

        try {
            const path=`${baseUrl}/activities/${activityId}`;
            const response = await axios.post(path, { "is_archived": true })
            const data = await checkStatus(response);

            dispatch(updateActivitySuccess(data))
        }
        catch(error) {
            dispatch(updateActivityFailure(error));
        }
    }
}


export function getActivity(id) {
    return async dispatch => {
        dispatch(getActivitiesRequest());

        try {
            const path = `${baseUrl}/activities/${id}`;
            const response = await axios.get(path);
            const data = await checkStatus(response);

            dispatch(getActivitiesSuccess(data));
        }
        catch(error) {
            dispatch(getActivitiesFailure(error));
        }
    }
}



export function resetActivities() {
    return async dispatch => {
        dispatch(resetActivitiesRequest());

        try {
            const path=`${baseUrl}/reset`;
            const response = await axios.get(path);
            const data = await checkStatus(response);

            dispatch(resetActivitiesSuccess(data))
        }
        catch(error) {
            dispatch(resetActivitiesFailure(error));
        }
    }
}



export function getActivitiesRequest() {
    return {
        type: GET_ACTIVITIES_REQUEST,
    }
}

export function getActivitiesFailure(error) {
    return {
        type: GET_ACTIVITIES_FAILURE,
        payload: error,
    }
}


export function getActivitiesSuccess(data) {
    return {
        type: GET_ACTIVITIES_SUCCESS,
        payload: data,
    }
}

export function updateActivityRequest() {
    return {
        type: UPDATE_ACTIVITY_REQUEST,
    }
}

export function updateActivityFailure(error) {
    return {
        type: UPDATE_ACTIVITY_FAILURE,
        payload: error,
    }
}


export function updateActivitySuccess(data) {
    return {
        type: UPDATE_ACTIVITY_SUCCESS,
        payload: data,
    }
}


export function updateActivitiesRequest() {
    return {
        type: UPDATE_ACTIVITIES_REQUEST,
    }
}

export function updateActivitiesFailure(error) {
    return {
        type: UPDATE_ACTIVITIES_FAILURE,
        payload: error,
    }
}


export function updateActivitiesSuccess(data) {
    return {
        type: UPDATE_ACTIVITIES_SUCCESS,
        payload: data,
    }
}


export function resetActivitiesRequest() {
    return {
        type: RESET_ACTIVITIES_REQUEST,
    }
}

export function resetActivitiesFailure(error) {
    return {
        type: RESET_ACTIVITIES_FAILURE,
        payload: error,
    }
}


export function resetActivitiesSuccess(data) {
    return {
        type: RESET_ACTIVITIES_SUCCESS,
        payload: data,
    }
}

