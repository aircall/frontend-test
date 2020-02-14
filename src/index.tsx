import * as React from "react";
import * as ReactDOM from "react-dom";
import "./css/body.css";

import { App } from "./App";
import { ThemeProvider, theme } from "./StyledComponents";
import { Provider } from "react-redux";
import { default as store } from "./Redux";

const Container = (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
);

ReactDOM.render(Container, document.getElementById("app"));
