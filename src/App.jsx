import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from './Header.jsx';
import CallList from './components/CallList/CallList.jsx';

const App = () => {
  return (
    <div className='container'>
      <Header/>
      <div className="container-view">
        <Router>
            <Switch>
                <Route path="/" component={CallList} />
            </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
