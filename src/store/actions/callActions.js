import { GET_All_CALLS } from '../constants/actionTypes'

export const getAllCalls = (calls) => ({
  type: GET_All_CALLS,
  payload: calls,
});