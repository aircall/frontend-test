import React from "react";

import { getIconName } from "../../utils";

export default function CallCardCompact({
  direction,
  callType,
  number,
  via,
  callTime
}) {
  return (
    <div className="call-card__compact">
      <i
        data-feather={getIconName(direction, callType)}
        className={`call-card__icon call-card__icon--${direction} call-card__icon--${callType}`}
      />
      <div className="call-card__info">
        <div className="call-card__info-details">
          <p className="call-card__info-number">{number}</p>
          <span className="call-card__info-via">{via}</span>
        </div>
        <div className="call-card__info-time">{callTime}</div>
      </div>
    </div>
  );
}
