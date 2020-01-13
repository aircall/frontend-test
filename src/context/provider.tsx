import React, {
  useState,
  useEffect,
  PropsWithChildren,
  SetStateAction,
  Dispatch
} from 'react';

import ActivitiesContext, { Activity } from './index';

const API_ROOT_PATH = 'https://aircall-job.herokuapp.com';

const fetchActivities = async () => {
  const response = await fetch(`${API_ROOT_PATH}/activities`);
  return (await response.json()) as Activity[];
};

const fetchActivity = async (id: number) => {
  const response = await fetch(`${API_ROOT_PATH}/activities/${id}`);
  return (await response.json()) as Activity;
};

const updateActivities = async (
  setActivities: Dispatch<SetStateAction<Activity[]>>
) => {
  setActivities([]);
  setActivities(await fetchActivities());
};

export default ({ children }: PropsWithChildren<any>) => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [doLoad, setLoad] = useState<number>(0);

  const reload = () => setLoad(doLoad + 1);

  const loadActivity = async (id: number) => {
    return (
      activities.find(({ id: found }) => found === id) || fetchActivity(id)
    );
  };

  useEffect(() => {
    updateActivities(setActivities);
  }, [doLoad]);

  return (
    <ActivitiesContext.Provider value={{ activities, reload, loadActivity }}>
      {children}
    </ActivitiesContext.Provider>
  );
};
