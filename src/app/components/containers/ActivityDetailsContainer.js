import {
  connect
} from 'react-redux';
import {
  getActivity,
  updateActivity
} from 'app/redux/actions/activitiesActions';
import ActivityDetails from '../presentational/activityDetails/ActivityDetails';

const mapStateToProps = ({
  activitiesReducer
}) => ({
  activity: activitiesReducer.activity
});

const mapDispatchToProps = dispatch => ({
  onGetActivity: id => dispatch(getActivity(id)),
  onUpdateActivity: id => dispatch(updateActivity(id, true)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ActivityDetails);
