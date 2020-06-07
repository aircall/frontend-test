/**
 * @jest-environment node
 */

import nock from "nock";

import {
  getActivityList,
  API_URL,
  CallDirection,
  CallType,
  getActivityById,
} from "../activity";

describe("common/service/activity", () => {
  describe("#getActivityList", () => {
    it("should call the activity list endpoint and return its data", async () => {
      const apiNock = nock(API_URL)
        .get("/activities")
        .reply(200, [
          {
            id: 42,
            created_at: "2018-09-10 13:06:00",
            direction: CallDirection.INBOUND,
            from: "John Doe",
            to: "John Smith",
            via: "NYC Office",
            duration: 250,
            is_archived: false,
            call_type: CallType.ANSWERED,
          },
        ]);

      const activities = await getActivityList();

      apiNock.done();

      expect(activities).toEqual([
        {
          id: 42,
          created_at: "2018-09-10 13:06:00",
          direction: CallDirection.INBOUND,
          from: "John Doe",
          to: "John Smith",
          via: "NYC Office",
          duration: 250,
          is_archived: false,
          call_type: CallType.ANSWERED,
        },
      ]);
    });
  });

  describe("#getActivityById", () => {
    it("should call the activity detail endpoint and return its data", async () => {
      const apiNock = nock(API_URL).get("/activities/42").reply(200, {
        id: 42,
        created_at: "2018-09-10 13:06:00",
        direction: CallDirection.INBOUND,
        from: "John Doe",
        to: "John Smith",
        via: "NYC Office",
        duration: 250,
        is_archived: false,
        call_type: CallType.ANSWERED,
      });

      const activity = await getActivityById(42);

      apiNock.done();

      expect(activity).toEqual({
        id: 42,
        created_at: "2018-09-10 13:06:00",
        direction: CallDirection.INBOUND,
        from: "John Doe",
        to: "John Smith",
        via: "NYC Office",
        duration: 250,
        is_archived: false,
        call_type: CallType.ANSWERED,
      });
    });
  });
});
