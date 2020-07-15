import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Feed from '../../feed';
import Detail from '../../detail';

const Routes = () => {
  return (
    <Switch>
      <Route path="/:id" component={Detail} />
      <Route path="/" component={Feed} />
    </Switch>
  );
};

export default Routes;
