import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header/Header.jsx';
import CallList from './components/CallList/CallList.jsx'
import Call from './components/Call/Call.jsx'

import './styles/app.scss';

const App = () => {
  return (
    <div className='container'>
      <Router>
        <Header/>
        <div className="container-view">
            <Route exact path="/" component={CallList} />
            <Route path="/call/:id" component={Call} /> 
        </div>
      </Router>
    </div>
  );
};

export default App;
