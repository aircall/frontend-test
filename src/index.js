import React from 'react';
import ReactDOM from 'react-dom';
import App from './AppContainer.jsx';
import { Provider } from 'react-redux'
import configStore from './config/configStore';
import { BrowserRouter as Router } from 'react-router-dom'

import './styles/index.css';


const store = configStore();


ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App/>
        </Provider>
    </Router>, 
    document.getElementById('app'));

