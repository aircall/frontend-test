import {
  connect
} from 'react-redux';
import {
  getActivities
} from 'app/redux/actions/activitiesActions';

import Activities from '../presentational/activities/Activities';

const mapStateToProps = ({
  activitiesReducer
}) => ({
  activities: activitiesReducer.activities,
  loading: activitiesReducer.loading
});

const mapDispatchToProps = dispatch => ({
  getAllActivities: () => dispatch(getActivities())
});

export default connect(mapStateToProps, mapDispatchToProps)(Activities);
