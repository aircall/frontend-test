import { INITIATE_GET_CALLS_SAGA } from '../constants/actionTypes';

export const getAllCalls = (calls) => ({
  type: INITIATE_GET_CALLS_SAGA
});