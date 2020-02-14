import * as React from "react";
import { render } from "@testing-library/react";
import { App } from "./App";
import { Provider } from "react-redux";
import { default as store } from "./Redux";

const Container = (
  <Provider store={store}>
    <App />
  </Provider>
);
test("should render without crashing", () => {
  const { container } = render(Container);
  expect(container.firstChild).toBeInTheDocument();
});
