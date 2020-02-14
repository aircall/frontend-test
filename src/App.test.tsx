import * as React from "react";
import { render } from "@testing-library/react";
import { App } from "./App";

test("should render without crashing", () => {
  const { container } = render(<App />);
  expect(container.firstChild).toBeInTheDocument();
});
