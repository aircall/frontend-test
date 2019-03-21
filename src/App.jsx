import React from "react";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import history from "./history";
import Header from "./header";
import Feed from "./feed";
import Detail from "./detail";
import actions from "./store/actions";

const App = ({
  activities,
  fetchActivities,
  fetchActivity,
  archiveActivity,
  activitiesLoading,
  activity
}) => (
  <div className="container">
    <Header/>
    <Router history={history}>
      <Route exact path="/" render={props => (
        <Feed
          fetchActivities={fetchActivities}
          fetchActivity={fetchActivity}
          activitiesLoading={activitiesLoading}
          activities={activities}
          {...props}
        />
      )} />
      <Route path="/call/:id" render={props => (
        <Detail
          activity={activity}
          archiveActivity={archiveActivity}
          {...props}
        />
      )} />
    </Router>
  </div>
);

const mapState = (state) => state;
const mapDispatch = {
  ...actions
};

export default connect(mapState, mapDispatch)(App);
