import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import CallList from './components/CallList';
import "@babel/polyfill";
import CallDetail from './components/CallDetail';
import Header from './Header.jsx';

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Header/>
        <Route path='/' exact component={CallList} />
        <Route path='/:callId' exact component={CallDetail} />
      </div>
    </Router>

  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
