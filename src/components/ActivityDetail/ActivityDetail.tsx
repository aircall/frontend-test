import * as React from "react";
import { ActivityDetailContainer } from "./ActivityDetailContainer";
import { ActivityDetailScreen } from "./ActivityDetailScreen";
import { ActivityDetailHeader } from "./ActivityDetailScreen/ActivityDetailHeader";
import { ActivityDetailInfos } from "./ActivityDetailScreen/ActivityDetailInfos";

export const ActivityDetail: React.FC = () => {
  return (
    <ActivityDetailContainer>
      {({ activity, goBack, activityHandler }) => (
        <ActivityDetailScreen>
          <ActivityDetailHeader
            isArchived={activity?.is_archived}
            goBack={goBack}
            onArchiveActivity={activityHandler}
          />
          <ActivityDetailInfos activity={activity} />
        </ActivityDetailScreen>
      )}
    </ActivityDetailContainer>
  );
};
