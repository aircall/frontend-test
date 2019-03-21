import React, { Component } from "react";
import moment from "moment";

class Detail extends Component {
    archiveActivity = () => {
        this.props.archiveActivity(this.props.activity.id);
    }

    render() {
        const { activity, history } = this.props;

        return (
            <div className="call-detail-container">
                <div className="call-detail-header">
                    <h2>Call Details</h2>
                </div>
                <div className="call-detail-info">
                    <div className="detail-label">Created At:</div>
                    <div className="detail-value">{moment(activity.created_at).format("MM/DD/YYYY")}</div>
                </div>
                <div className="call-detail-info">
                    <div className="detail-label">Direction:</div>
                    <div className="detail-value">{activity.direction}</div>
                </div>
                <div className="call-detail-info">
                    <div className="detail-label">From:</div>
                    <div className="detail-value">{activity.from}</div>
                </div>
                <div className="call-detail-info">
                    <div className="detail-label">To:</div>
                    <div className="detail-value">{activity.to}</div>
                </div>
                <div className="call-detail-info">
                    <div className="detail-label">Via:</div>
                    <div className="detail-value">{activity.via}</div>
                </div>
                <div className="call-detail-info">
                    <div className="detail-label">Duration:</div>
                    <div className="detail-value">{activity.duration}</div>
                </div>
                <div className="call-detail-info">
                    <div className="detail-label">Call Type:</div>
                    <div className="detail-value">{activity.call_type}</div>
                </div>
                <div className="call-actions">
                    <button className="archive-call" onClick={this.archiveActivity}>Archive Call</button>
                    <button className="go-back" onClick={history.goBack}>Go Back</button>
                </div>
            </div>
        );
    }
};

export default Detail;