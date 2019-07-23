import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from './App.jsx'
import { configureStore } from './redux/store.js'

import './styles/body.scss';

const MainApp = () => (
    <Provider store={configureStore()}>
        <App />
    </Provider>
);

ReactDOM.render(<MainApp/>, document.getElementById('app'));