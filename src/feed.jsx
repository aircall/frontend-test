import React, { Component } from "react";
import moment from "moment";

import "./css/feed.css";

class Feed extends Component {
    componentDidMount() {
        this.props.fetchActivities();
    }

    formulateDescription = (activity) => {
        const { call_type, to } = activity;
        let description = "";
        switch (call_type) {
            case "missed":
                description = `Attempted to call on ${to}`;
                break;
            case "answered":
                description = `Spoke with ${to}`;
                break;
            case "voicemail":
                description = `Left a message with ${to}`;
                break;
            default:
                description = "A call happened";
        }
        return description;
    }

    selectCall = (id) => () => {
        console.log('id: ', id);
        this.props.fetchActivity(id);
    }

    render() {
        const {
            activities,
            activitiesLoading,
        } = this.props;

        return (
            <div className="activities-container">
                <div className="activities-header"><h2>Call Activity</h2></div>
                {
                    activities.length > 0 && !activitiesLoading ?
                    <div>
                        {
                            activities.map((activity) => (
                                <div key={activity.id} className="activity-item" onClick={this.selectCall(activity.id)}>
                                    <div className="call-direction">
                                        <div className={activity.direction === "inbound" ? "down-arrow" : "up-arrow"} />
                                    </div>
                                    <div className="call-info">
                                        <div style={{ marginBottom: `0.2em` }}>{activity.from}</div>
                                        <div>{this.formulateDescription(activity)}</div>
                                    </div>
                                    <div className="call-date">
                                        {moment(activity.created_at).calendar()}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    :
                    <div className="loading-message">
                        <h2>Loading call activity...</h2>
                    </div>
                }
            </div>
        );
    }
};

export default Feed;