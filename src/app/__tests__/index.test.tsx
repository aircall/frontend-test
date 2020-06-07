import React from "react";
import { render } from "testing-utils";

import { App } from "..";

describe("app", () => {
  describe("App", () => {
    describe("#render", () => {
      it("should render correctly", () => {
        const { container } = render(<App />);

        expect(container).toMatchSnapshot();
      });
    });
  });
});
