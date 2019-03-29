import { connect } from 'react-redux';
import { fetchActivity, archivesActivity } from '../../Services/Activities/api';

import ItemList from './Component.js';


const mapStateToProps =  ({ data, isLoading }) => ({
    data,
    isLoading
})


const mapDispatchToProps = dispatch => ({
  fetchActivity: activityId => dispatch(fetchActivity(activityId)),
  archivesActivity: activityId => dispatch(archivesActivity(activityId)),
})


export default connect(
    mapStateToProps,
    mapDispatchToProps)(ItemList);
