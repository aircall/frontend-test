import aircall from "../apis/aircall";
import {ARCHIVE_CALL, FETCH_ACTIVITY_DETAIL, FETCH_ACTIVITIES} from "./types";

const fetchActivities = () => async (dispatch) => {
    // Fetch all activities
    const response = await aircall.get('/activities');

    // Dispatch FETCH_ACTIVITIES to invoke reducer to update activities state
    dispatch({
        type: FETCH_ACTIVITIES,
        payload: response.data
    });
}

const fetchActivityDetail = (activityId) => async (dispatch) => {
    // Fetch activity details by activity id
    const response = await aircall.get(`/activities/${activityId}`);

    // Dispatch FETCH_ACTIVITY_DETAIL to update activity state
    dispatch({
        type: FETCH_ACTIVITY_DETAIL,
        payload: response.data
    });
}

const archiveCall = (id) => async (dispatch) => {
    const archiveStatus = {is_archived: true}

    // Post call to update archive status to true for the selected call by id
    await aircall.post(`/activities/${id}`, archiveStatus);

    // Dispatch ARCHIVE_CALL to update calls state and remove archived call
    dispatch({
        type: ARCHIVE_CALL,
        payload: id
    });
}

export {fetchActivities, fetchActivityDetail, archiveCall};