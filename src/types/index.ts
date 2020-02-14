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
