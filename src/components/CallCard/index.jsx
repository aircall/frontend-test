import React, { useEffect } from "react";

import { getIconName, parseTime } from "../../utils";

export default function CallCardCompact({
  data: { id, direction, from, to, via, call_type, callTime }
}) {
  useEffect(() => {
    feather.replace();
  }, []);

  const getAppropriateNumber = (direction, from, to) =>
    direction === "outgoing" ? to : from;

  return (
    <div className="call-card" id={id}>
      <i
        data-feather={getIconName(direction, call_type)}
        className={`call-card__icon call-card__icon--${direction} call-card__icon--${call_type}`}
      />
      <div className="call-card__info">
        <div className="call-card__info-details">
          <p className="call-card__info-number">
            {getAppropriateNumber(direction, from, to)}
          </p>
          <span>Tried to call on {via}</span>
        </div>
        <div className="call-card__info-time">{callTime}</div>
      </div>
    </div>
  );
}
