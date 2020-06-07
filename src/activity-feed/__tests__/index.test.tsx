import React from "react";

import { render } from "testing-utils";

import { ActivityFeed } from "..";

describe("activity-feed", () => {
  describe("ActivityFeed", () => {
    it("should render correctly", () => {
      const { container } = render(<ActivityFeed />);

      expect(container).toMatchSnapshot();
    });
  });
});
