import { API_URL } from "../constants";
import { IActivity } from "../types";

export const fetchActivities = async () => {
  const res = await fetch(`${API_URL}/activities`);
  return (await res.json()) as IActivity[];
};
