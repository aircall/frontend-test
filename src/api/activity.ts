import { apiCall } from ".";
import { Activity } from "../models/Activity";
import * as t from "io-ts";

export const indexActivities = () => {
  return apiCall({
    method: "GET",
    path: "/activities",
    validator: t.array(Activity)
  });
};

export const showActivity = (id: number) => {
  return apiCall({
    method: "GET",
    path: `/activities/${id}`,
    validator: Activity
  });
};

export const updateActivity = (
  id: number,
  params: { is_archived: boolean }
) => {
  return apiCall({
    method: "POST",
    path: `/activities/${id}`,
    validator: Activity,
    params
  });
};

export const resetActivities = () => {
  return apiCall({
    method: "GET",
    path: "/reset"
  });
};
