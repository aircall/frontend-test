import React from "react";
import { useRecoilValue } from "recoil";

import { render } from "testing-utils";

import { Activity } from "..";
import { activityByIdState } from "../../../selectors";

jest.mock("recoil");
jest.mock("../../../selectors");

describe("activity-feed/components/activity", () => {
  describe("Activity", () => {
    describe("#render", () => {
      it("should render correctly the given activity", () => {
        (useRecoilValue as jest.Mock).mockReturnValue({
          id: 7834,
          created_at: "2018-04-19T09:38:41.000Z",
          direction: "outbound",
          from: "Pierre-Baptiste Béchu",
          to: "06 46 62 12 33",
          via: "NYC Office",
          duration: "120",
          is_archived: false,
          call_type: "missed",
        });
        const { container } = render(<Activity id={42} />);

        expect(activityByIdState).toHaveBeenCalledWith(42);
        expect(container).toMatchSnapshot();
      });
    });
  });
});
