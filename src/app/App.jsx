import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { withRouter, BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import {
  ActivityListContainer,
  ActivityDetailsContainer
} from './activities/components';
import { Header } from './shared/Header';
import { store } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='container'>
          <Header />
          <Switch>
            <Route exact path="/activities" component={ActivityListContainer} />
            <Route exact path="/activities/:id" component={ActivityDetailsContainer} />
            <Redirect to="/activities" />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default withRouter(App);
