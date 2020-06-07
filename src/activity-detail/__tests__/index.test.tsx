import React from "react";

import { render } from "testing-utils";

import { ActivityDetail, Props } from "..";

describe("activity-detail", () => {
  describe("ActivityDetail", () => {
    it("should render correctly", () => {
      const props = {
        match: { params: { id: "42" } },
      } as Props;
      const { container } = render(<ActivityDetail {...props} />);

      expect(container).toMatchSnapshot();
    });
  });
});
