export const FETCH_ACTIVITY_DETAILS = '[Activity Details] Fetch';
export const FETCH_ACTIVITY_DETAILS_COMPLETED = '[Activity Details] Fetch Completed';
export const FETCH_ACTIVITY_DETAILS_FAILED = '[Activity Details] Fetch Failed';

export const fetchActivityDetails = (activityID) => ({
  type: FETCH_ACTIVITY_DETAILS,
  payload: activityID
});

export const fetchActivityDetailsFailed = (error) => ({
  type: FETCH_ACTIVITY_DETAILS_FAILED,
  payload: error
});

export const fetchActivityDetailsCompleted = (activity) => ({
  type: FETCH_ACTIVITY_DETAILS_COMPLETED,
  payload: activity
});
