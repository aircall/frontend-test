import { connect } from 'react-redux';
import { archivesActivity, fetchActivities} from '../../Services/Activities/api';
import { closeDetails } from '../../Services/OpenDetails/actions';

import DetailsCall from './Component.js';


const mapStateToProps =  ({ data, isLoading, currentNav}) => ({
    data,
    isLoading,
    currentNav
})


const mapDispatchToProps = dispatch => ({
  archivesActivity: activityIds => dispatch(archivesActivity(activityIds)),
  closeDetails: () => dispatch(closeDetails()),
  fetchActivities: (currentNav) => dispatch(fetchActivities(currentNav)),
})


export default connect(
    mapStateToProps,
    mapDispatchToProps)(DetailsCall);
