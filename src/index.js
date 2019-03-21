import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./app";

import "./css/body.css";
import "./css/app.css";
import "./css/header.css";

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
document.getElementById("app"));