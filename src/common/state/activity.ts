import { atom } from "recoil";

import { Activity } from "../service/activity";

export const listState = atom<Activity[]>({
  key: "activityList",
  default: [],
});

export const detailState = atom<Activity | null>({
  key: "activityDetail",
  default: null,
});
