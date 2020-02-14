import { groupByDate } from "../../utils";
import { IRootState, IActivity } from "../../types";

export const sortedActivitiesSelector = (state: IRootState) =>
  Array.from(
    groupByDate(
      state.entity.activities.filter(
        (activity: IActivity) => !activity.is_archived
      )
    )
  );

export const sortedArchivedActivitiesSelector = (state: IRootState) =>
  Array.from(
    groupByDate(
      state.entity.activities.filter(
        (activity: IActivity) => activity.is_archived
      )
    )
  );
