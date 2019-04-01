import { connect } from 'react-redux';
import { fetchActivities } from '../../Services/Activities/api';

import Activities from './Component.jsx';


const mapStateToProps =  ({ data, isLoading }) => ({
    data,
    isLoading
})


const mapDispatchToProps = dispatch => ({
  fetchActivities: () => dispatch(fetchActivities()),
})


export default connect(
    mapStateToProps,
    mapDispatchToProps)(Activities);
