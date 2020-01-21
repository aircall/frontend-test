import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";

const CallDetailComponent = props => {
  const { loading, call, fetchCallDetail } = props;
  const activityId = props.match.params.activityId;

  useEffect(() => {
    fetchCallDetail(activityId);
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="page call-detail">
      <div className="page-header">
        <Button
          variant="contained"
          color="primary"
          size="small"
          variant="outlined"
          onClick={() => onBackButtonClicked(props)}
          //className={classes.button}
          startIcon={<NavigateBeforeIcon />}
        >
          Back
        </Button>
        <p className="page-title">Call detail</p>
      </div>
      <div>{call && renderCallDetail(call)}</div>
    </div>
  );
};

const renderCallDetail = call => {
  return (
    <ul>
      <li>
        <span className="label">From</span>
        {call.from}
      </li>
      <li>
        <span className="label">TO</span>
        {call.call_type === "voicemail" ? "" : call.to}
      </li>
      <li>
        <span className="label">Via</span>
        {call.via}
      </li>
      <li>
        <span className="label">Call duration</span>
        {call.duration} seconds
      </li>
    </ul>
  );
};

const onBackButtonClicked = props => {
  props.history.goBack();
};

export default CallDetailComponent;
