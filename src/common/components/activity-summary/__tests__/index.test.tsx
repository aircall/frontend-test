import React from "react";

import { render } from "testing-utils";

import { ActivitySummary } from "..";
import { CallDirection, CallType } from "../../../service/activity";

describe("common/components/activity-summary", () => {
  describe("ActivitySummary", () => {
    describe("#render", () => {
      it("should render an anwsered outbound call correctly", () => {
        const { container } = render(
          <ActivitySummary
            activity={{
              id: 7834,
              created_at: "2018-04-19T09:38:41.000Z",
              direction: CallDirection.OUTBOUND,
              from: "Pierre-Baptiste Béchu",
              to: "06 46 62 12 33",
              via: "NYC Office",
              duration: 120,
              is_archived: false,
              call_type: CallType.ANSWERED,
            }}
          />
        );

        expect(container).toMatchSnapshot();
      });

      it("should render a missed outbound call correctly", () => {
        const { container } = render(
          <ActivitySummary
            activity={{
              id: 7834,
              created_at: "2018-04-19T09:38:41.000Z",
              direction: CallDirection.OUTBOUND,
              from: "Pierre-Baptiste Béchu",
              to: "06 46 62 12 33",
              via: "NYC Office",
              duration: 120,
              is_archived: false,
              call_type: CallType.MISSED,
            }}
          />
        );

        expect(container).toMatchSnapshot();
      });

      it("should render an anwsered inbound call correctly", () => {
        const { container } = render(
          <ActivitySummary
            activity={{
              id: 7834,
              created_at: "2018-04-19T09:38:41.000Z",
              direction: CallDirection.INBOUND,
              from: "Pierre-Baptiste Béchu",
              to: "06 46 62 12 33",
              via: "NYC Office",
              duration: 120,
              is_archived: false,
              call_type: CallType.ANSWERED,
            }}
          />
        );

        expect(container).toMatchSnapshot();
      });

      it("should render a missed inbound call correctly", () => {
        const { container } = render(
          <ActivitySummary
            activity={{
              id: 7834,
              created_at: "2018-04-19T09:38:41.000Z",
              direction: CallDirection.INBOUND,
              from: "Pierre-Baptiste Béchu",
              to: "06 46 62 12 33",
              via: "NYC Office",
              duration: 120,
              is_archived: false,
              call_type: CallType.MISSED,
            }}
          />
        );

        expect(container).toMatchSnapshot();
      });

      it("should render a missed outbound call with voicemail correctly", () => {
        const { container } = render(
          <ActivitySummary
            activity={{
              id: 7834,
              created_at: "2018-04-19T09:38:41.000Z",
              direction: CallDirection.OUTBOUND,
              from: "Pierre-Baptiste Béchu",
              to: "06 46 62 12 33",
              via: "NYC Office",
              duration: 120,
              is_archived: false,
              call_type: CallType.VOICEMAIL,
            }}
          />
        );

        expect(container).toMatchSnapshot();
      });

      it("should render a missed inbound call with voicemail correctly", () => {
        const { container } = render(
          <ActivitySummary
            activity={{
              id: 7834,
              created_at: "2018-04-19T09:38:41.000Z",
              direction: CallDirection.INBOUND,
              from: "Pierre-Baptiste Béchu",
              to: "06 46 62 12 33",
              via: "NYC Office",
              duration: 120,
              is_archived: false,
              call_type: CallType.VOICEMAIL,
            }}
          />
        );

        expect(container).toMatchSnapshot();
      });;
    });
  });
});
