import request, { AxiosPromise } from "axios";

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

export async function getActivityList(): Promise<Activity[]> {
  const response = await request.get<Activity[]>(`${API_URL}/activities`);
  return response.data;
}
