import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from './App.jsx'
import { configureStore } from './redux/store.js'

import './css/body.css';
import './css/app.css';
import './css/header.css';

const MainApp = () => (
    <Provider store={configureStore()}>
        <Router>
            <Switch>
                <Route path="/" component={App} />
            </Switch>
        </Router>
    </Provider>
);

ReactDOM.render(<MainApp/>, document.getElementById('app'));