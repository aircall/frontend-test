import { API_URL } from "../constants";
import { IActivity } from "../types";

export const fetchActivities = async () => {
  const res = await fetch(`${API_URL}/activities`);
  return (await res.json()) as IActivity[];
};

export const fetchActivityDetail = async (id: string) => {
  const res = await fetch(`${API_URL}/activities/${id}`);
  return (await res.json()) as IActivity;
};

export const handleActivity = async (id: string, isArchived: boolean) => {
  const res = await fetch(`${API_URL}/activities/${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ is_archived: isArchived })
  });
  return await res.json();
};
