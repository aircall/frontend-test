import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { APIProvider } from './api/context';

import './css/body.css';
import './css/app.css';
import './css/header.css';

import App from './components/App.jsx';

ReactDOM.render(
    <Router>
        <APIProvider>
            <App />
        </APIProvider>
    </Router>,
    document.getElementById('app')
);
