import React, {Component} from 'react';
import {connect} from 'react-redux';
import {archiveCall, fetchActivityDetail} from '../actions';
import moment from "moment";
import history from "../history";
import ActivityCard from "./activities/activity-card/ActivityCard";

class ActivityDetail extends Component {
    componentDidMount() {
        // Get call id from props parameter match
        const id = this.props.match.params.id;
        // invoke redux action to fetch details of the selected call by id
        this.props.fetchActivityDetailAction(id);
    }

    // Convert seconds to minutes and seconds
    secondsToMinutes = (seconds) => (seconds - (seconds %= 60)) / 60 + (9 < seconds ? ':' : ':0') + seconds;

    // Archive call by call id
    onArchiveClick = (id) => {
        this.props.archiveCallAction(id);
        history.push('/');
    }

    renderActivityDetail = () => {
        const {direction, call_type, duration, via, to, from, created_at, id, is_archived} = this.props.activity;

        return (
            <ActivityCard
                number={direction === 'outbound' ? to : from}
                recipient={direction === 'outbound' ? from : to}
                call_type={call_type === 'missed' ? 'Missed call' : call_type === 'voicemail' ? 'VoiceMail' : 'Received'}
                duration={this.secondsToMinutes(duration)}
                via={via}
                date={moment(created_at).format('LL')}
                onClick={() => this.onArchiveClick(id)}
                is_archived={is_archived}
            />
        );
    };

    render() {
        return this.renderActivityDetail();
    }
}

const mapStateToProps = (state) => {
    return {activity: state.activity};
}

export default connect(mapStateToProps, {
    fetchActivityDetailAction: fetchActivityDetail,
    archiveCallAction: archiveCall
})(ActivityDetail);