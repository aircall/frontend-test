import React from "react";
import { withRouter } from "react-router-dom";

import CallMissedOutgoingIcon from "@material-ui/icons/CallMissedOutgoing";
import CallMissedIcon from "@material-ui/icons/CallMissed";
import CallMadeIcon from "@material-ui/icons/CallMade";
import CallReceivedIcon from "@material-ui/icons/CallReceived";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

export const ActivityItemComponent = props => {
  const { activity, history } = props;

  return (
    <div className="activity-feed-item">
      <div className="item-left">{getIcon(activity)}</div>
      <div className="item-center">
        <div className="activity-feed-item-number">
          {activity.direction === "inbound" ? activity.from : activity.to}
        </div>
        <div className="activity-feed-item-info">{getInfoText(activity)}</div>
      </div>
      <div className="item-right">
        <a onClick={e => goToCallDetail(e, activity.id, history)}>
          <NavigateNextIcon />
        </a>
      </div>
    </div>
  );
};

const getInfoText = activity => {
  const direction = activity.direction === "inbound" ? "on" : "from";
  const callStatus =
    activity.call_type === "answered" ? "called" : "tried to call";

  return `${callStatus} ${direction} ${activity.via}`;
};

const getIcon = activity => {
  if (activity.direction === "inbound") {
    return activity.call_type === "answered" ? (
      <CallReceivedIcon />
    ) : (
      <CallMissedIcon />
    );
  } else {
    return activity.call_type === "answered" ? (
      <CallMadeIcon />
    ) : (
      <CallMissedOutgoingIcon />
    );
  }
};

const goToCallDetail = (e, activityId, history) => {
  e.preventDefault();
  const newLocation = `/call-detail/${activityId}`;
  history.push(newLocation);
};

export default withRouter(ActivityItemComponent);
