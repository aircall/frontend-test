import { connect } from "react-redux";
import ActivityFeedComponent from "./ActivityFeedComponent.jsx";

import { activityFeedOperations } from "./duck";

const mapStateToProps = state => {
  const { activities, loading } = state.activityFeed;
  return {
    activities,
    loading
  };
};

const mapDispatchToProps = dispatch => {
  const fetchActivities = () => {
    dispatch(activityFeedOperations.fetchActivities());
  };

  return { fetchActivities };
};

const ActivityFeedContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityFeedComponent);

export default ActivityFeedContainer;
