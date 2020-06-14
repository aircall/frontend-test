import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchActivities} from '../actions';
import moment from "moment";
import ActivityList from "./activities/activity-list/ActivityList";

class ActivityFeed extends Component {
    componentDidMount() {
        // Retrieve all activities
        this.props.fetchActivitiesAction();
    }

    // Function to prepare an object with mappings of activities group by date
    groupActivitiessByDate = () => {
        const activitiesDateMap = {};
        const activeCalls = this.props.activities.filter(activity => activity.is_archived !== true);
        for (let call of activeCalls) {
            const date = moment(call.created_at).format('LL');
            const callList = activitiesDateMap[date] || [];
            callList.push(call);
            activitiesDateMap[date] = callList;
        }
        return activitiesDateMap;
    }

    renderActivitiesList = () => {
        const activitiesByDate = this.groupActivitiessByDate();
        // If no activities registered(OR all archived)
        if(Object.keys(activitiesByDate).length === 0) {
            return <h1>No activities registered</h1>;
        }

        // Show an activity card for each activity
        return Object.keys(activitiesByDate).map((activityDate, index) => {
            return (
                <ActivityList
                    date={activityDate}
                    calls={activitiesByDate[activityDate]}
                    key={index}
                />
            );
        });
    }

    render = () => this.renderActivitiesList();
}

const mapStateToProps = (state) => {
    return {activities: state.activities};
}

export default connect(mapStateToProps, {fetchActivitiesAction: fetchActivities})(ActivityFeed);