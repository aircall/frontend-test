import React from "react";
import { renderHook } from "@testing-library/react-hooks";
import { useRecoilValue, RecoilRoot } from "recoil";

import { listState } from "../../common/state/activity";
import { Activity } from "../../common/service/activity";
import { activityIdsGroupedByDayState, activityByIdState } from "../selectors";

describe("activity-feed/selectors", () => {
  const wrapper = ({ children }: any) => (
    <RecoilRoot
      initializeState={({ set }) => {
        set(listState, [
          { id: 1, created_at: "2018-04-19T07:21:41.000Z" } as Activity,
          { id: 2, created_at: "2018-04-17T07:21:41.000Z" } as Activity,
          { id: 3, created_at: "2018-04-18T07:21:41.000Z" } as Activity,
          { id: 4, created_at: "2018-04-19T09:38:41.000Z" } as Activity,
        ]);
      }}
    >
      {children}
    </RecoilRoot>
  );

  describe("activityIdsGroupedByDayState", () => {
    it("should return the IDs list of the activities", () => {
      const { result } = renderHook(
        () => useRecoilValue(activityIdsGroupedByDayState),
        {
          wrapper,
        }
      );

      expect(result.current).toEqual([
        { activityIds: [4, 1], day: "2018-04-18T22:00:00.000Z" },
        { activityIds: [3], day: "2018-04-17T22:00:00.000Z" },
        { activityIds: [2], day: "2018-04-16T22:00:00.000Z" },
      ]);
    });
  });

  describe("activityByIdState", () => {
    it("should return the activity corresponding to the id", () => {
      const { result } = renderHook(
        () => useRecoilValue(activityByIdState(3)),
        {
          wrapper,
        }
      );

      expect(result.current).toEqual({
        id: 3,
        created_at: "2018-04-18T07:21:41.000Z",
      });
    });
  });
});
