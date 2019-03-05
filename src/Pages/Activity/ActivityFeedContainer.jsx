import { connect } from 'react-redux';
import { getActivities, updateActivities, updateActivity, resetActivities } from '../../modules/Activity/actions';

import ActivityFeed from './ActivityFeed.jsx';


const mapStateToProps = ({ activity }) => {
    return {
        activity,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getActivities: () => dispatch(getActivities()),
        updateActivities: activityIds => dispatch(updateActivities(activityIds)),
        updateActivity: activityId => dispatch(updateActivity(activityId)),
        resetActivities: () => dispatch(resetActivities()),
    };
};


export default connect(
    mapStateToProps, 
    mapDispatchToProps)(ActivityFeed);
