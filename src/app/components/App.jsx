// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
// Store
import { store } from '../store/store.js'
// Components
import Header from './Header/Header.jsx';
import ActivityFeed from './ActivityFeed/ActivityFeed.jsx'
import FeedSwitcher from './FeedSwitcher/FeedSwitcher.jsx'

/**
 * Entrypoint React component for the app
 */
const App = () => {
  return (
    <div className='container'>
      <Header/>
      <FeedSwitcher/>
      <div className="container-view">
        <ActivityFeed/>
      </div>
    </div>
  );
};

// Connect the Redux store to the React app using a Provider
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);

export default App;
