import * as React from "react";

import { TFormatedActivity } from "../../../types";
import { Activity } from "../Activity/Activity";
interface IProps {
  activities: TFormatedActivity[];
  goToDetail: (id: number) => void;
}
export const ActivityList: React.FC<IProps> = ({ activities, goToDetail }) => {
  return (
    <>
      {activities.map((activity: TFormatedActivity) => (
        <Activity
          key={activity.id}
          activity={activity}
          goToDetail={() => goToDetail(activity.id)}
        />
      ))}
    </>
  );
};
