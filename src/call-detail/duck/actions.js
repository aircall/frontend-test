import types from "./types.js";

const requestCallDetail = () => {
  return {
    type: types.REQUEST_CALL_DETAIL
  };
};

const receiveCallDetail = data => {
  return {
    type: types.RECEIVE_CALL_DETAIL,
    call: data
  };
};

export default {
  requestCallDetail,
  receiveCallDetail
};
