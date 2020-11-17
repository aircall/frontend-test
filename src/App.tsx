import React from 'react';
import { IntlProvider } from 'react-intl';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { ActivitiesProvider } from './context/index';
import Header from './Header';
import Detail from './Detail';
import Feed from './Feed';
import styles from './css/app.css';

export default () => (
  <IntlProvider locale={navigator.language}>
    <ActivitiesProvider>
      <div className={styles.container}>
        <Header />
        <Router>
          <Switch>
            <Route path="/activity/:activityId">
              <Detail />
            </Route>
            <Route path="/">
              <Feed />
            </Route>
          </Switch>
        </Router>
      </div>
    </ActivitiesProvider>
  </IntlProvider>
);
