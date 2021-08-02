import { connect } from "react-redux";
import CallDetailComponent from "./CallDetailComponent.jsx";

import { callDetailOperations } from "./duck";

const mapStateToProps = state => {
  const { call, loading } = state.callDetail;
  return {
    call,
    loading
  };
};

const mapDispatchToProps = dispatch => {
  const fetchCallDetail = id => {
    dispatch(callDetailOperations.fetchCallDetail(id));
  };

  return { fetchCallDetail };
};

const CallDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CallDetailComponent);

export default CallDetailContainer;
