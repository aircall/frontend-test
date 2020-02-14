import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const ActivityFeed = React.lazy(() => import("./components/ActivityFeed"));

export const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/detail/:id">
          <h1>Details</h1>
        </Route>
        <ActivityFeed />
      </Switch>
    </Router>
  );
};
