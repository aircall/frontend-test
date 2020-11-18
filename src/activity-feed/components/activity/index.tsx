import React from "react";
import { useRecoilValue } from "recoil";

import { activityByIdState } from "../../selectors";
import { ActivitySummary } from "../../../common/components/activity-summary";
import { ActivityContainer } from "./styled-components";

export type Props = {
  id: number;
};

export function Activity({ id }: Props) {
  const activity = useRecoilValue(activityByIdState(id));
  if (activity) {
    return (
      <ActivityContainer>
        <ActivitySummary activity={activity} />
      </ActivityContainer>
    );
  }
  return null;
}
