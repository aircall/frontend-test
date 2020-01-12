import React, {
  useState,
  useEffect,
  PropsWithChildren,
  Dispatch,
  SetStateAction
} from 'react';
import ActivitiesContext, { Activity } from './index';

const fetchActivities = async (
  dispatch: Dispatch<SetStateAction<Activity[]>>
) => {
  const response = await fetch('http://localhost:8081/activities.json');
  const activities = await response.json();
  dispatch(activities);
};

export default ({ children }: PropsWithChildren<any>) => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [doLoad, setLoad] = useState<number>(0);

  const reload = () => setLoad(doLoad + 1);

  useEffect(() => {
    fetchActivities(setActivities);
  }, [doLoad]);

  return (
    <ActivitiesContext.Provider value={{ activities, reload }}>
      {children}
    </ActivitiesContext.Provider>
  );
};
