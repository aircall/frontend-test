export const FETCH_ACTIVITY_LIST = '[Activity List] Fetch';
export const FETCH_ACTIVITY_LIST_COMPLETED = '[Activity List] Fetch Completed';
export const FETCH_ACTIVITY_LIST_FAILED = '[Activity List] Fetch Failed';

export const fetchActivityList = () => ({
  type: FETCH_ACTIVITY_LIST
});

export const fetchActivityListFailed = (error) => ({
  type: FETCH_ACTIVITY_LIST_FAILED,
  payload: error
});

export const fetchActivityDetailsCompleted = (list) => ({
  type: FETCH_ACTIVITY_LIST_COMPLETED,
  payload: list
});
