import * as React from "react";

import { Header } from "./components";
import { Activity } from "./components/ActivityFeed";
import { TFormatedActivity } from "./types";

const data = {
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
} as TFormatedActivity;

export const App = () => {
  return (
    <div className="container">
      <Header />
      <Activity goToDetail={() => {}} activity={data} />
    </div>
  );
};
