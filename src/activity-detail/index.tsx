import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { useRecoilState } from "recoil";

import { detailState } from "../common/state/activity";
import { useService } from "../common/hook/use-service";
import { getActivityById, Activity } from "../common/service/activity";

export type Props = RouteComponentProps<{ id: string }>;

export function ActivityDetail(props: Props) {
  const { id } = props.match.params;
  const [activity, setActivity] = useRecoilState(detailState);
  const { isLoading, error } = useService<Activity>(
    () => getActivityById(parseInt(id, 10)),
    { onSuccess: (activity) => setActivity(activity) },
    [id]
  );

  return (
    <>
      {activity && !isLoading && activity.from}
      {isLoading && 'Loading...'}
      {error && error.message}
    </>
  );
}
