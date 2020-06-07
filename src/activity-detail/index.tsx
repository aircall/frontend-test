import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { useRecoilState } from "recoil";

import { detailState } from "../common/state/activity";
import { useService } from "../common/hook/use-service";
import { getActivityById, Activity } from "../common/service/activity";
import { Spinner } from "../common/styled-components";
import { ActivitySummary } from "../common/components/activity-summary";
import { InfoList, InfoLabel, InfoItem, InfoValue, Error } from "./styled-components";

export type Props = RouteComponentProps<{ id: string }>;

function getDuration(duration: number) {
  const hours = Math.trunc(duration / 3600)
    .toString()
    .padStart(2, "0");
  const minutes = Math.trunc((duration % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (duration % 60).toString().padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}

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
      {activity && !isLoading && (
        <>
          <ActivitySummary activity={activity} />
          <InfoList>
            <InfoItem>
              <InfoLabel>Date</InfoLabel>
              <InfoValue>
                {new Date(activity.created_at).toLocaleString()}
              </InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>Duration</InfoLabel>
              <InfoValue>{getDuration(activity.duration)}</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>Via</InfoLabel>
              <InfoValue>{activity.via}</InfoValue>
            </InfoItem>
          </InfoList>
        </>
      )}
      {isLoading && <Spinner />}
      {error && <Error>{error.message}</Error>}
    </>
  );
}
