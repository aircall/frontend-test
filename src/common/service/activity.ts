import request from "axios";

export const API_URL = "https://aircall-job.herokuapp.com";

export enum CallType {
  MISSED = "missed",
  ANSWERED = "answered",
  VOICEMAIL = "voicemail",
}

export enum CallDirection {
  INBOUND = "inbound",
  OUTBOUND = "outbound",
}

export type Activity = {
  id: number;
  created_at: string;
  direction: CallDirection;
  from: string;
  to: string;
  via: string;
  duration: number;
  is_archived: boolean;
  call_type: CallType;
};

/**
 * Returns a list of activities
 */
export async function getActivityList(): Promise<Activity[]> {
  const response = await request.get<Activity[]>(`${API_URL}/activities`);
  return response.data;
}

/**
 * Return an activity by its ID
 * @param id ID of the activity we want to get
 */
export async function getActivityById(id: number): Promise<Activity> {
  const response = await request.get<Activity>(`${API_URL}/activities/${id}`);
  return response.data;
}

/**
 * Archive an activity
 * @param activity Activity to archive
 */
export async function archiveActivity(activity: Activity): Promise<void> {
  await request.post<void>(`${API_URL}/activities/${activity.id}`, {
    ...activity,
    is_archived: true,
  });
}
