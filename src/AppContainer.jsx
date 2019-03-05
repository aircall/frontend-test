import { connect } from 'react-redux';
import { getActivities, updateActivities, updateActivity, resetActivities } from './modules/Activity/actions';
import { withRouter } from 'react-router-dom';
import App from './App.jsx';


const mapStateToProps = ({ activity }) => {
    return {
        activity,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getActivities: () => dispatch(getActivities()),
    };
};


export default withRouter(connect(
    mapStateToProps, mapDispatchToProps)(App));
