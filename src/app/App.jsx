import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import Header from './components/presentational/header/Header';

import ActivitiesContainer from './components/containers/ActivitiesContainer';
import ActivityDetailsContainer from './components/containers/ActivityDetailsContainer';

import '../styles/body.css';
import '../styles/app.css';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={ActivitiesContainer} />
        <Route exact path="/activities/:id" component={ActivityDetailsContainer} />
      </Switch>
    </div>
  );
};

export default withRouter(App);
