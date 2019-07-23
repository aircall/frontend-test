import React from "react";
import { DateTime } from "luxon";
import './CallListCard.scss';

const CallListCard = ({call}) => {
    const formattedDate = DateTime.fromISO(call.created_at).toLocaleString(DateTime.TIME_24_SIMPLE)     
    return (
      <div className="CallListCard">
            <div className="CallListCard__from">{call.from}</div>
            <div className="CallListCard__origin">
              {call.to && <span className="CallListCard__origin--to"> from {call.to} </span>}
              {call.via && <span className="CallListCard__origin--via">via {call.via}</span>}
            </div>
            <div className="CallListCard__date">{formattedDate}</div>
      </div>
    );
  };

  export default CallListCard