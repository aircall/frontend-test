import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from './App.jsx'
import { configureStore } from './redux/store.js'

import './css/body.css';
import './css/app.css';
import './css/header.css';

const MainApp = () => (
    <Provider store={configureStore()}>
        <App />
    </Provider>
);

ReactDOM.render(<MainApp/>, document.getElementById('app'));