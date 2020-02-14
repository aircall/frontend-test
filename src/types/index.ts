export type TDirection = "inbound" | "outbound";
export type TCallType = "missed" | "answered" | "voicemail";

export interface IActivity {
  id: number;
  created_at: string;
  direction: TDirection;
  from: string;
  to: string;
  via: string;
  duration: string;
  is_archived: boolean;
  call_type: TCallType;
}

export type TFormatedActivity = IActivity & {
  call_hour: string;
  hour_side: string;
};

export type TAction =
  | { type: "FETCH_ACTIVITIES_SUCCESS"; payload: IActivity[] }
  | { type: "FETCH_ACTIVITIES_REQUEST" }
  | { type: "FETCH_ACTIVITIES_ERROR"; payload: string };

export type TDispatch = (action: TAction) => void;

export type TState = {
  activities: IActivity[];
  isLoading: boolean;
  error: string | null;
  activityDetail: IActivity;
};

export interface IRootState {
  entity: TState;
}
