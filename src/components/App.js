import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ActivityProvider from '../store/context/ActivityContext';

import Header from './Header/Header';
import Nav from './Nav/Nav';
import ActivityFeed from './ActivityFeed/ActivityFeed';
import ActivityTabs from './ActivityTabs/ActivityTabs';
import ActivityDetails from './ActivityDetails/ActivityDetails';
import NotFound from './NotFound/NotFound';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <ActivityTabs />
        <div className="container-view">
          <ActivityProvider>
            <Switch>
              <Route path="/" exact component={ActivityFeed} />
              <Route path="/details/:id" component={ActivityDetails} />
              <Route component={NotFound} />
            </Switch>
          </ActivityProvider>
        </div>
        <Nav />
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
