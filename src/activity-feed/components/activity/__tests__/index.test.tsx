import React from "react";
import { useRecoilValue } from "recoil";

import { render } from "testing-utils";

import { Activity } from "..";
import { activityByIdState } from "../../../selectors";

jest.mock("recoil");
jest.mock("../../../selectors");
jest.mock("../../../../common/components/activity-summary", () => ({
  ActivitySummary: ({ activity }: any) => (
    <div data-component="ActivitySummary">
      {JSON.stringify(activity, null, 2)}
    </div>
  ),
}));

describe("activity-feed/components/activity", () => {
  describe("Activity", () => {
    describe("#render", () => {
      it("should render the given activity correctly", () => {
        (useRecoilValue as jest.Mock).mockReturnValue({
          id: 42,
          created_at: "2018-04-19T09:38:41.000Z",
          direction: "outbound",
          from: "Pierre-Baptiste Béchu",
          to: "06 46 62 12 33",
          via: "NYC Office",
          duration: "120",
          is_archived: false,
          call_type: "answered",
        });
        const { container } = render(<Activity id={42} />);

        expect(activityByIdState).toHaveBeenCalledWith(42);
        expect(container).toMatchSnapshot();
      });

      it("should not render anything if the activity is undefined", () => {
        (useRecoilValue as jest.Mock).mockReturnValue(undefined);
        const { container } = render(<Activity id={42} />);

        expect(activityByIdState).toHaveBeenCalledWith(42);
        expect(container).toMatchSnapshot();
      });
    });
  });
});
