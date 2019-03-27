import React from "react";
import FeedItem from "./FeedItem.jsx";
import API from "./API.jsx";

export default class ActivityFeed extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }
  async componentDidMount() {
    const api = new API();
    const data = await api.getActivities();
    this.setState({ data });
  }

  createDetails(data) {
    return data
      .filter(({ is_archived }) => !is_archived)
      .map(datum => {
        const { id } = datum;
        return <FeedItem key={id} {...datum} />;
      });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="activity-feed-wrap">
        {!!data.length && this.createDetails(data)}
      </div>
    );
  }
}
