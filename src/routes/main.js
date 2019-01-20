import React from 'react';
import { HashRouter as Router, Redirect, Route } from 'react-router-dom';

import { ActivitiesList } from '../containers/ActivitiesList/ActivitiesList';

export const MainRouter = () => (
  <Router>
    <div>
      <Route path="/" exact render={() => <Redirect to="activities"/>}/>
      <Route path="/activities" exact component={ActivitiesList}/>
    </div>
  </Router>
);
