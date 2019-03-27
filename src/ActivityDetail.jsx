import React from "react";
import { Link } from "react-router-dom";
import API from "./API.jsx";

import moment from "moment";
import ArchiveCall from "./ArchiveCall.jsx";

export default class ActivityDetail extends React.Component {
  constructor(props) {
    super();
    this.state = {
      call_type: null,
      created_at: null,
      duration: null,
      from: null,
      to: null,
      is_archived: null,
      id: null
    };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const api = new API();
    const data = await api.getDetails(id);
    this.setState(data);
  }

  render() {
    const {
      call_type,
      created_at,
      duration,
      from,
      to,
      is_archived,
      id
    } = this.state;
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
      <div className="item-detail-wrap">
        <span className="feed-item-date">{date}</span>
        {call_icon}
        <span className="item-details-from">{from}</span>
        <span className="item-details-to">
          {call_string}
          {to}
        </span>
        <span>{time}</span>
        <span>{`Duration: ${duration} seconds`}</span>
        <button>
          <Link to="/">Activity Feed</Link>
        </button>
        <ArchiveCall id={id} disabled={is_archived} />
      </div>
    );
  }
}
