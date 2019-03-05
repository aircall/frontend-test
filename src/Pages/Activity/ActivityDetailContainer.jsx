import { connect } from 'react-redux';
import { updateActivity, getActivities } from '../../modules/Activity/actions';
import ActivityDetail from './ActivityDetail.jsx';


const mapStateToProps = ({ activity }) => {
    return {
        activity,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateActivity: activityId => dispatch(updateActivity(activityId)),
        getActivities: () => dispatch(getActivities()),
    };
};


export default connect(
    mapStateToProps, 
    mapDispatchToProps)(ActivityDetail);
