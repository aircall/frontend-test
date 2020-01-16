import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/index';

import Header from './Header';
import ActivityContainer from './containers/ActivityContainer';

const App = () => (
  <div className="container">
    <Header />
    <ActivityContainer className="container-view" />
  </div>
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);

export default App;
