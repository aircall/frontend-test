export const FETCH_ACTIVITIES = 'FETCH_ACTIVITIES';
export const RECEIVE_ACTIVITIES = 'RECEIVE_ACTIVITIES';

export function fetchActivities() {
  return { type: FETCH_ACTIVITIES };
}

export function receiveActivities(payload) {
  return {
    type: RECEIVE_ACTIVITIES,
    payload,
  };
}
