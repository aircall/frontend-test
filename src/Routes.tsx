import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const ActivityFeed = React.lazy(() => import("./components/ActivityFeed"));
const ActivityDetail = React.lazy(() => import("./components/ActivityDetail"));

export const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/detail/:id">
          <ActivityDetail />
        </Route>
        <ActivityFeed />
      </Switch>
    </Router>
  );
};
