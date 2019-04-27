import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import { store } from '../store/store.js'

import Header from './Header.jsx';
import ActivityFeed from './ActivityFeed/ActivityFeed.jsx'

const App = () => {
  return (
    <div className='container'>
      <Header/>
      <div className="container-view">
        <ActivityFeed/>
      </div>
    </div>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);

export default App;
