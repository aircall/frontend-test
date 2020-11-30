import React, { useEffect } from "react";
import { parseDuration } from "../../utils";

export default function CallCardDetail({
  number,
  duration,
  direction,
  isActive,
  onArchive
}) {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <div className="call-card__detail" data-active={isActive}>
      <div className="call-card__detail-line" data-direction={direction}>
        {direction === "outbound" ? <>&uarr;</> : <>&darr;</>}
      </div>
      <div className="call-card__detail-block">
        <div className="call-card__archive">
          <button className="call-card__archive-btn" onClick={onArchive}>
            <i data-feather="archive"></i>
          </button>
        </div>
        <div className="call-card__info">
          <div className="call-card__info-details">
            <p className="call-card__info-number">{number}</p>
            <span className="call-card__info-duration">
              <i
                data-feather="clock"
                className="call-card__info-duration-icon"
              ></i>
              {parseDuration(duration)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
