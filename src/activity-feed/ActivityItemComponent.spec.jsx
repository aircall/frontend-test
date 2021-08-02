import React from "react";
import renderer from "react-test-renderer";
import { ActivityItemComponent } from "./ActivityItemComponent";
describe("ActivityItemComponent", () => {
  test("snapshot renders", () => {
    const activity = {
      id: 7834,
      created_at: "2018-04-19T09:38:41.000Z",
      direction: "outbound",
      from: "Pierre-Baptiste Béchu",
      to: "06 46 62 12 33",
      via: "NYC Office",
      duration: "120",
      is_archived: false,
      call_type: "missed"
    };
    const component = renderer.create(
      <ActivityItemComponent activity={activity} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
