import { selector } from "recoil";
import memoize from "lodash.memoize";

import { listState } from "../common/state/activity";

type ActivitiesIdsByDay = {
  day: string;
  activityIds: number[];
}[];

/**
 * Get activity IDs grouped by day and sort from the most recent to the least recent
 */
export const activityIdsGroupedByDayState = selector({
  key: "activityIdsGroupedByDayState",
  get: ({ get }) => {
    const list = get(listState);

    return list
      .filter((activity) => !activity.is_archived)
      .sort(({ created_at: created_at1 }, { created_at: created_at2 }) =>
        created_at1 < created_at2 ? 1 : -1
      )
      .map((a) => {
        const day = new Date(a.created_at);
        day.setHours(0, 0, 0, 0);
        return { day: day.toISOString(), a };
      })
      .reduce((list: ActivitiesIdsByDay, currentDay) => {
        const day = list.find((d) => d.day === currentDay.day);
        if (day) {
          day.activityIds.push(currentDay.a.id);
        } else {
          list.push({ day: currentDay.day, activityIds: [currentDay.a.id] });
        }
        return list;
      }, []);
  },
});

/**
 * Get one activity in the list by its ID
 */
export const activityByIdState = memoize((id: number) =>
  selector({
    key: `activityByIdState_${id}`,
    get: ({ get }) => {
      const list = get(listState);

      return list.find((activity) => activity.id === id);
    },
  })
);
