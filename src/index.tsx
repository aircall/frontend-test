import * as React from "react";
import * as ReactDOM from "react-dom";
import "./css/body.css";

import { App } from "./App";
import { ThemeProvider, theme } from "./StyledComponents";

const Container = (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
ReactDOM.render(Container, document.getElementById("app"));
