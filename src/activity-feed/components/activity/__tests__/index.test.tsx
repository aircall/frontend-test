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
      it("should render an anwsered outbound call correctly", () => {
        (useRecoilValue as jest.Mock).mockReturnValue({
          id: 7834,
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

      it("should render a missed outbound call correctly", () => {
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

      it("should render an anwsered inbound call correctly", () => {
        (useRecoilValue as jest.Mock).mockReturnValue({
          id: 7834,
          created_at: "2018-04-19T09:38:41.000Z",
          direction: "inbound",
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

      it("should render a missed inbound call correctly", () => {
        (useRecoilValue as jest.Mock).mockReturnValue({
          id: 7834,
          created_at: "2018-04-19T09:38:41.000Z",
          direction: "inbound",
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

      it("should render a missed outbound call with voicemail correctly", () => {
        (useRecoilValue as jest.Mock).mockReturnValue({
          id: 7834,
          created_at: "2018-04-19T09:38:41.000Z",
          direction: "outbound",
          from: "Pierre-Baptiste Béchu",
          to: "06 46 62 12 33",
          via: "NYC Office",
          duration: "120",
          is_archived: false,
          call_type: "voicemail",
        });
        const { container } = render(<Activity id={42} />);

        expect(activityByIdState).toHaveBeenCalledWith(42);
        expect(container).toMatchSnapshot();
      });

      it("should render a missed inbound call with voicemail correctly", () => {
        (useRecoilValue as jest.Mock).mockReturnValue({
          id: 7834,
          created_at: "2018-04-19T09:38:41.000Z",
          direction: "inbound",
          from: "Pierre-Baptiste Béchu",
          to: "06 46 62 12 33",
          via: "NYC Office",
          duration: "120",
          is_archived: false,
          call_type: "voicemail",
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
