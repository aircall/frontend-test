import React from 'react';
import ReactDOM from 'react-dom';
// * import react router
import { BrowserRouter as Router, Route } from 'react-router-dom';
// * importing provider and store
import { Provider } from 'react-redux';
import store from './store/store';
// * import components
import Header from './components/Header/Header.jsx';
import CallLog from './containers/CallLog/CallLog.jsx';
import CallDetails from './containers/CallLog/CallLog.jsx';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className='container'>
          <Header />
          <div className="container-view">
            <Route path='/' exact component={CallLog} />
            <Route path='/:id' exact component={CallDetails} />
          </div>
        </div>
      </Router>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
