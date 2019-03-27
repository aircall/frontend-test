import React from "react";
import { Link } from "react-router-dom";

import moment from "moment";

export default class FeedItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { call_type, created_at, from, to, id } = this.props;
    const call_string =
      call_type === "missed" ? "tried to call on " : "called on ";
    const call_icon =
      call_type === "missed" ? (
        <i className="fas fa-phone-slash missed" />
      ) : (
        <i className="fas fa-phone received" />
      );

    const date = moment(created_at).format("MMMM Do, YYYY");
    const time = moment(created_at).format("h:mm:ss A");
    return (
      <div className="feed-item">
        <span className="feed-item-date">{date}</span>
        <Link to={`/detail/${id}`}>
          <div className="feed-item-details-wrap">
            {call_icon}
            <div className="feed-item-details">
              <span className="item-details-from">{from}</span>
              <span className="item-details-to">
                {call_string}
                {to}
              </span>
            </div>
            <span>{time}</span>
          </div>
        </Link>
      </div>
    );
  }
}
