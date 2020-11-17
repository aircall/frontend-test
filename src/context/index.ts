import React from 'react';

export { default as ActivitiesProvider } from './provider';

export default React.createContext<State>({
  activities: [],
  reload: () => {},
  loadActivity: (_id: number) => Promise.reject(),
  archiveActivity: (_id: number) => {}
});

export interface State {
  activities: Activity[];
  reload: () => void;
  loadActivity: (id: number) => Promise<Activity>;
  archiveActivity: (id: number) => void;
}

import { Schemas } from './api.d';
export type Activity = Schemas.Activity;
