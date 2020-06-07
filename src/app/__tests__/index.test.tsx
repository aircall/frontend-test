import React from "react";
import { render } from "testing-utils";

import { App } from "..";

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as object),
  BrowserRouter: ({ children }: any) => (
    <div data-component="BrowserRouter">{children}</div>
  ),
}));

jest.mock("../../activity-feed", () => ({
  ActivityFeed: () => <div data-component="ActivityFeed"></div>,
}));

jest.mock("../../activity-detail", () => ({
  ActivityDetail: (props: any) => (
    <div data-component="ActivityDetail" data-id={props.match.params.id}></div>
  ),
}));

describe("app", () => {
  describe("App", () => {
    describe("#render", () => {
      it("should render correctly the activity feed when the URL is '/'", () => {
        const { container } = render(<App />, { pathName: "/" });

        expect(container).toMatchSnapshot();
      });

      it("should render correctly the activity detail when the URL is '/activities/:id'", () => {
        const { container } = render(<App />, { pathName: "/activities/42" });

        expect(container).toMatchSnapshot();
      });
    });
  });
});
