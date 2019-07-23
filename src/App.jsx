import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header/Header.jsx';
import CallList from './components/CallList/CallList.jsx'
import Call from './components/Call/Call.jsx'

import './styles/app.scss';

const App = () => {
  return (
    <div className='container'>
      <Header/>
      <div className="container-view">
        <Router>
          <Route exact path="/" component={CallList} />
          <Route path="/call/:id" component={Call} /> 
        </Router>
      </div>
    </div>
  );
};

export default App;
