import { INITIATE_GET_CALLS_SAGA, INITIATE_SINGLE_CALL_SAGA } from './actionTypes';

export const getAllCalls = () => ({
  type: INITIATE_GET_CALLS_SAGA
});

export const getSingleCall = () => ({
  type: INITIATE_SINGLE_CALL_SAGA
});