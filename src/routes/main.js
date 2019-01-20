import React from 'react';
import { HashRouter as Router, Redirect, Route } from 'react-router-dom';

import ActivitiesList from '../containers/ActivitiesList/ActivitiesList';
import ActivityDetail from '../containers/ActivityDetail/ActivityDetail';
import styles from '../style.css';
import Header from '../components/Header/Header';

export const MainRouter = () => (
  <Router>
    <React.Fragment>
      <Header/>
      <div className={styles.containerView}>
        <Route path="/" exact render={() => <Redirect to="activities"/>}/>
        <Route path="/activities" exact component={ActivitiesList}/>
        <Route path="/activities/:id" component={ActivityDetail}/>
      </div>
    </React.Fragment>
  </Router>
);
