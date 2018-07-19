import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';

import './app.css';

import Header from '../shared-components/header/Header';
import ActivityList from '../activity-list/ActivityList';
import ActivityDetails from '../activity-details/ActivityDetails';

function App() {
  return (
    <div className="container">
      <Header />
      <div className="container-view">
        <Router>
          <Switch>
            <Route exact path="/" component={ActivityList} />
            <Route path="/details/:id" component={ActivityDetails} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
