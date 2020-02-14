import * as React from "react";
import { render, screen } from "@testing-library/react";
import { default as userEvent } from "@testing-library/user-event";
import { ActivityList } from "./ActivityList";
import { TFormatedActivity } from "../../../types";

const data = [
  {
    id: 7834,
    created_at: "2018-04-19T09:38:41.000Z",
    direction: "outbound",
    from: "Pierre-Baptiste Béchu",
    to: "06 46 62 12 33",
    via: "NYC Office",
    duration: "120",
    is_archived: false,
    call_type: "missed",
    call_hour: "09:38",
    hour_side: "AM"
  },
  {
    id: 7833,
    created_at: "2018-04-18T16:59:48.000Z",
    direction: "outbound",
    from: "Jonathan Anguelov",
    to: "06 45 13 53 91",
    via: "NYC Office",
    duration: "60",
    is_archived: false,
    call_type: "missed",
    call_hour: "04:59",
    hour_side: "PM"
  },
  {
    id: 7832,
    created_at: "2018-04-18T16:53:22.000Z",
    direction: "inbound",
    from: "06 19 18 23 92",
    to: "Jonathan Anguelov",
    via: "Support FR",
    duration: "180",
    is_archived: false,
    call_type: "answered",
    call_hour: "04:53",
    hour_side: "PM"
  },
  {
    id: 7831,
    created_at: "2018-04-18T16:42:55.000Z",
    direction: "inbound",
    from: "06 34 45 74 34",
    to: "Xavier Durand",
    via: "Support FR",
    duration: "180",
    is_archived: false,
    call_type: "answered",
    call_hour: "04:42",
    hour_side: "PM"
  },
  {
    id: 7830,
    created_at: "2018-04-18T16:23:43.000Z",
    direction: "inbound",
    from: "+33 6 34 45 74 34",
    to: null,
    via: "Support FR",
    duration: "120",
    is_archived: true,
    call_type: "voicemail",
    call_hour: "11:43",
    hour_side: "PM"
  },
  {
    id: 7829,
    created_at: "2018-04-18T15:43:32.000Z",
    direction: "inbound",
    from: "+33 6 34 45 74 34",
    to: "Olivier Pailhes",
    via: "Spain Hotline",
    duration: "300",
    is_archived: true,
    call_type: "answered",
    call_hour: "03:43",
    hour_side: "PM"
  }
];
const mockGoToDetail = jest.fn();

const props = {
  activities: data as TFormatedActivity[],
  goToDetail: mockGoToDetail
};

test("should render without render", () => {
  const { container } = render(<ActivityList {...props} />);
  expect(container.firstChild).toBeInTheDocument();
});

test("should render 6 activities", () => {
  render(<ActivityList {...props} />);
  expect(screen.getAllByTestId(/activity-item/i).length).toBe(data.length);
});

test("should fire click event when we click on activity-item", () => {
  render(<ActivityList {...props} />);
  userEvent.click(screen.getAllByTestId(/activity-item/i)[0]);
  expect(mockGoToDetail).toHaveBeenCalled();
});
