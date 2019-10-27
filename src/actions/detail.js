export const FETCH_CALL_DETAILS = 'FETCH_CALL_DETAILS';
export const RECEIVE_CALL_DETAILS = 'RECEIVE_CALL_DETAILS';

export function fetchCallDetails() {
  return { type: FETCH_CALL_DETAILS };
}

export function receiveCallDetails(callId, payload) {
  return {
    type: RECEIVE_CALL_DETAILS,
    callId,
    payload,
  };
}
