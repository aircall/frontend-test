export const FETCH_ACTIVITIES = 'FETCH_ACTIVITIES';
export const RECEIVE_ACTIVITIES = 'RECEIVE_ACTIVITIES';

export const FETCH_CALL_DETAILS = 'FETCH_CALL_DETAILS';
export const RECEIVE_CALL_DETAILS = 'RECEIVE_CALL_DETAILS';

export const ARCHIVE_CALL = 'ARCHIVE_CALL';
export const UPDATE_ARCHIVED_CALL = 'UPDATE_ARCHIVED_CALL';

export const RESET_ALL = 'RESET_ALL';

export function fetchActivities() {
  return { type: FETCH_ACTIVITIES };
}

export function receiveActivities(payload) {
  return {
    type: RECEIVE_ACTIVITIES,
    payload,
  };
}

export function fetchCallDetails(callId) {
  return {
    type: FETCH_CALL_DETAILS,
    callId,
  };
}

export function receiveCallDetails(callId, payload) {
  return {
    type: RECEIVE_CALL_DETAILS,
    callId,
    payload,
  };
}

export function archiveCall(callId) {
  return {
    type: ARCHIVE_CALL,
    callId,
  };
}

export function updateArchivedCall(callId) {
  return {
    type: UPDATE_ARCHIVED_CALL,
    callId,
  };
}

export function resetAll() {
  return {
    type: RESET_ALL,
  };
}
