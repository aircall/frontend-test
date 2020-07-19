export interface Call {
  id: string;
  created_at: string;
  direction: 'outbound' | 'inbound';
  from: string;
  to: string | null;
  via: string;
  duration: number;
  is_archived: boolean;
  call_type: 'missed' | 'answered' | 'voicemail';
}
