import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import GlobalStyle from './GlobalStyle';
import App from './app';
import store from './store';

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </React.Fragment>,
  document.getElementById('app')
);
