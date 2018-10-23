import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';

import Header from './Header.jsx';
import Menu from './Menu.jsx';
import ActivityContainer from './containers/ActivityContainer.jsx';
import ActivityDetailContainer from './containers/ActivityDetailContainer.jsx';

const App = (props) => {
  return (
    <div className='container flex vertical'>
      <Header/>
      <div className="container-view">
        <Switch>
          <Redirect exact from="/" to="/activities" />
          <Route exact path="/activities" component={ActivityContainer} />
          <Route exact path='/activities/:id' component={ActivityDetailContainer} />
        </Switch>
      </div>
      <Menu />
    </div>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
);

export default App;
