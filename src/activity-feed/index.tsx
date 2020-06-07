import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { activityIdsGroupedByDayState } from "./selectors";
import { listState } from "../common/state/activity";
import { useService } from "../common/hook/use-service";
import { getActivityList, Activity as TActivity } from "../common/service/activity";
import { Spinner } from "../common/styled-components";
import { DayList, ActivityItem, Error, DayItem, ActivityList, Day } from "./styled-components";
import { Activity } from "./components/activity";


export function ActivityFeed() {
  const days = useRecoilValue(activityIdsGroupedByDayState);
  const setActivities = useSetRecoilState(listState);
  const { isLoading, error } = useService<TActivity[]>(() => getActivityList(), {
    onSuccess: (activities) => {
      setActivities(activities);
    },
  }); 

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <DayList>
          {days.map(({ day, activityIds}) => (
            <DayItem key={day}>
              <Day>{new Date(day).toLocaleDateString()}</Day>
              <ActivityList>
                {activityIds.map(id => (
                  <ActivityItem key={id}>
                    <Link to={`/activities/${id}`}>
                      <Activity id={id} />
                    </Link>
                  </ActivityItem>
                ))}
              </ActivityList>
            </DayItem>
          ))}
        </DayList>
      )}
      {error && <Error>{error.message}</Error>}
    </>
  );
}