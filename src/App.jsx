import React from 'react';
import ReactDOM from 'react-dom';
// * import react router
import { BrowserRouter as Router, Route } from 'react-router-dom';
// * importing provider and store
import { Provider } from 'react-redux';
import store from './store/store';
// * import components
import Header from './components/Header/Header.jsx';
import CallLogs from './containers/CallLogs/CallLogs.jsx';
import CallDetails from './containers/CallDetails/CallDetails.jsx';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className='container'>
          <Header />
          <div className="container-view">
            <Route path='/' exact component={CallLogs} />
            <Route path='/call/:id' exact component={CallDetails} />
          </div>
        </div>
      </Router>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
