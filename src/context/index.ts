import React from 'react';

export { default as ActivitiesProvider } from './provider';

export default React.createContext<State>({
  activities: [],
  reload: () => {},
  loadActivity: (_id: number) => Promise.reject()
});

export interface State {
  activities: Activity[];
  reload: () => void;
  loadActivity: (id: number) => Promise<Activity>;
}

export interface Activity {
  id: number;
  created_at: string;
  direction: 'inbound' | 'outbound';
  from: string;
  to: string;
  via: string;
  duration: string;
  is_archived: boolean;
  call_type: 'answered' | 'missed' | 'voicemail';
}
