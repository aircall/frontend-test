import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import configureStore from './Store/configureStore'


import './assets/layout/body.css';
import './assets/layout/app.css';
import App from './Components/App.js';

const target = document.querySelector('#app')

render(
  <Router>
     <Provider store={configureStore()}>
       <App/>
     </Provider>
  </Router>,
 target
);
